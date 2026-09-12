import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto';
import { Repository } from 'typeorm';
import { StorageService } from '../storage/storage.service.js';
import { App } from '../apps/entities/app.entity.js';
import { DownloadLink } from './entities/download-link.entity.js';

@Injectable()
export class DownloadsService {
  constructor(
    @InjectRepository(DownloadLink)
    private readonly downloadLinkRepository: Repository<DownloadLink>,

    @InjectRepository(App)
    private readonly appRepository: Repository<App>,

    private readonly storageService: StorageService,
  ) {}

  async createLink(appId: number) {
    const app = await this.appRepository.findOne({
      where: { id: appId },
    });

    if (!app) {
      throw new NotFoundException('Приложение не найдено');
    }

    if (!app.s3Key) {
      throw new NotFoundException('Для приложения не указан файл в S3');
    }

    const token = randomBytes(32).toString('hex');

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const downloadLink = this.downloadLinkRepository.create({
      token,
      appId: app.id,
      expiresAt,
    });

    await this.downloadLinkRepository.save(downloadLink);

    return {
      token,
      url: `/download/${token}`,
      expiresAt,
    };
  }

  async getLink(token: string) {
    const link = await this.downloadLinkRepository.findOne({
      where: { token },
      relations: {
        app: true,
      },
    });

    if (!link) {
      throw new NotFoundException('Ссылка не найдена');
    }

    if (link.expiresAt <= new Date()) {
      throw new NotFoundException('Срок действия ссылки истёк');
    }

    return {
      app: {
        id: link.app.id,
        name: link.app.name,
        category: link.app.category,
        icon: link.app.icon,
      },
      expiresAt: link.expiresAt,
    };
  }

  async getFileUrl(token: string) {
    const link = await this.downloadLinkRepository.findOne({
      where: { token },
      relations: {
        app: true,
      },
    });

    if (!link) {
      throw new NotFoundException('Ссылка не найдена');
    }

    if (link.expiresAt <= new Date()) {
      throw new NotFoundException('Срок действия ссылки истёк');
    }

    if (!link.app.s3Key) {
      throw new NotFoundException('Файл приложения не найден');
    }

    return this.storageService.getDownloadUrl(link.app.s3Key);
  }
}
