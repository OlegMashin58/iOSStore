import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module.js';
import { App } from '../apps/entities/app.entity.js';
import { StorageModule } from '../storage/storage.module.js';

import { DownloadLink } from './entities/download-link.entity.js';
import { DownloadsController } from './downloads.controller.js';
import { DownloadsService } from './downloads.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([DownloadLink, App]),
    StorageModule,
    AuthModule,
  ],
  controllers: [DownloadsController],
  providers: [DownloadsService],
  exports: [DownloadsService],
})
export class DownloadsModule {}
