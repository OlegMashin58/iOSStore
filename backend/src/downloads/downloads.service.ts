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

  /**
   * Создание публичной ссылки.
   * Ссылка действует 24 часа.
   */
  async createLink(appId: string) {
    const app = await this.appRepository.findOne({
      where: {
        id: appId,
      },
    });

    if (!app) {
      throw new NotFoundException('Приложение не найдено');
    }

    if (!app.s3Key) {
      throw new NotFoundException('Для приложения не указан файл в S3');
    }

    if (!app.bundleIdentifier) {
      throw new NotFoundException('Для приложения не указан Bundle Identifier');
    }

    if (!app.bundleVersion) {
      throw new NotFoundException('Для приложения не указана версия');
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

  /**
   * Получение информации для страницы скачивания.
   */
  async getLink(token: string) {
    const link = await this.downloadLinkRepository.findOne({
      where: {
        token,
      },
      relations: {
        app: true,
      },
    });

    this.validateLink(link);

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

  /**
   * Получение временного S3 URL.
   */
  async getFileUrl(token: string) {
    const link = await this.downloadLinkRepository.findOne({
      where: {
        token,
      },
      relations: {
        app: true,
      },
    });

    this.validateLink(link);

    if (!link.app.s3Key) {
      throw new NotFoundException('Файл приложения не найден');
    }

    return this.storageService.getDownloadUrl(link.app.s3Key, 60 * 5);
  }

  /**
   * Генерация manifest.plist для iOS.
   */
  async getManifest(token: string) {
    const link = await this.downloadLinkRepository.findOne({
      where: {
        token,
      },
      relations: {
        app: true,
      },
    });

    this.validateLink(link);

    const app = link.app;

    if (!app.s3Key) {
      throw new NotFoundException('Файл приложения не найден');
    }

    if (!app.bundleIdentifier) {
      throw new NotFoundException('Bundle Identifier не указан');
    }

    if (!app.bundleVersion) {
      throw new NotFoundException('Bundle Version не указан');
    }

    /**
     * В manifest мы кладём временную signed URL.
     * Сам IPA остаётся приватным в S3.
     */
    const ipaUrl = await this.storageService.getDownloadUrl(app.s3Key, 60 * 60);

    return this.buildManifest({
      name: app.name,
      bundleIdentifier: app.bundleIdentifier,
      bundleVersion: app.bundleVersion,
      ipaUrl,
    });
  }

  private validateLink(
    link: DownloadLink | null,
  ): asserts link is DownloadLink & {
    app: App;
  } {
    if (!link) {
      throw new NotFoundException('Ссылка не найдена');
    }

    if (link.expiresAt <= new Date()) {
      throw new NotFoundException('Срок действия ссылки истёк');
    }

    if (!link.app) {
      throw new NotFoundException('Приложение не найдено');
    }
  }

  private buildManifest(params: {
    name: string;
    bundleIdentifier: string;
    bundleVersion: string;
    ipaUrl: string;
  }) {
    const { name, bundleIdentifier, bundleVersion, ipaUrl } = params;

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
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
          <string>${this.escapeXml(ipaUrl)}</string>
        </dict>
      </array>

      <key>metadata</key>
      <dict>
        <key>bundle-identifier</key>
        <string>${this.escapeXml(bundleIdentifier)}</string>

        <key>bundle-version</key>
        <string>${this.escapeXml(bundleVersion)}</string>

        <key>kind</key>
        <string>software</string>

        <key>title</key>
        <string>${this.escapeXml(name)}</string>
      </dict>
    </dict>
  </array>
</dict>
</plist>`;
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
