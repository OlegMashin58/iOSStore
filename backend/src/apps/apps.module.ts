import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '../users/users.module.js';
import { App } from './entities/app.entity.js';
import { AppsController } from './apps.controller.js';
import { AppsService } from './apps.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([App]), UsersModule, AuthModule],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
