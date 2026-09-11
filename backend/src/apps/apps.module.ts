import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from '../users/users.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { App } from './entities/app.entity.js';
import { AppsController } from './apps.controller.js';
import { AppsService } from './apps.service.js';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([App]),
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
