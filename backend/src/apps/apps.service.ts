import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { mkdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';

import { App } from './entities/app.entity.js';
import { CreateAppDto } from './dto/create-app.dto.js';

@Injectable()
export class AppsService {
  constructor(
    @InjectRepository(App)
    private readonly appsRepository: Repository<App>,
  ) {}

  async findAll(): Promise<App[]> {
    return this.appsRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async create(dto: CreateAppDto, icon: Express.Multer.File): Promise<App> {
    const iconPath = await this.saveIcon(icon);

    const app = this.appsRepository.create({
      ...dto,
      icon: iconPath,
    });

    return this.appsRepository.save(app);
  }

  async remove(id: string): Promise<void> {
    const app = await this.appsRepository.findOne({
      where: { id },
    });

    if (!app) {
      throw new NotFoundException('Приложение не найдено');
    }

    await this.appsRepository.remove(app);
  }

  private async saveIcon(file: Express.Multer.File): Promise<string> {
    const extension = extname(file.originalname).toLowerCase();

    const fileName = `${randomUUID()}${extension}`;

    const uploadDir = join(process.cwd(), 'uploads', 'apps', 'icons');

    await mkdir(uploadDir, {
      recursive: true,
    });

    const filePath = join(uploadDir, fileName);

    await writeFile(filePath, file.buffer);

    return `/uploads/apps/icons/${fileName}`;
  }
}
