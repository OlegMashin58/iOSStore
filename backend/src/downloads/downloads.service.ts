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

  async createLink(appId: string) {
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
      s3Key: app.s3Key,
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
    });

    if (!link) {
      throw new NotFoundException('Ссылка не найдена');
    }

    if (link.expiresAt <= new Date()) {
      throw new NotFoundException('Срок действия ссылки истёк');
    }

    if (!link.s3Key) {
      throw new NotFoundException('Файл приложения не найден');
    }

    return this.storageService.getDownloadUrl(link.s3Key);
  }

  async getManifest(token: string) {
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

    if (!link.s3Key) {
      throw new NotFoundException('Файл приложения не найден');
    }

    const ipaUrl = await this.storageService.getDownloadUrl(
      link.s3Key,
      60 * 60,
    );

    const manifest = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
    <dict>
      <key>items</key>
      <array>
        <dict>
          <key>assets</key>
          <array>
            <dict>
              <key>kind</key>
              <string>software-package</string>
              <key>url</key>
              <string>${ipaUrl}</string>
            </dict>
          </array>
  
          <key>metadata</key>
          <dict>
            <key>bundle-identifier</key>
            <string>${link.app.bundleIdentifier}</string>
  
            <key>bundle-version</key>
            <string>${link.app.bundleVersion}</string>
  
            <key>kind</key>
            <string>software</string>
  
            <key>title</key>
            <string>${this.escapeXml(link.app.name)}</string>
          </dict>
        </dict>
      </array>
    </dict>
  </plist>`;

    return manifest;
  }

  private escapeXml(value: string) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}
