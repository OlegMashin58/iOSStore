import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
        createdAt: 'ASC',
      },
    });
  }

  async create(dto: CreateAppDto): Promise<App> {
    const app = this.appsRepository.create(dto);

    return this.appsRepository.save(app);
  }

  async remove(id: string): Promise<void> {
    const result = await this.appsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Приложение не найдено');
    }
  }
}
