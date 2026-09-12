import {
  Controller,
  Get,
  Header,
  Param,
  Post,
  Redirect,
  UseGuards,
} from '@nestjs/common';

import { DownloadsService } from './downloads.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@Controller()
export class DownloadsController {
  constructor(private readonly downloadsService: DownloadsService) {}

  @Post('apps/:id/download-link')
  @UseGuards(JwtAuthGuard)
  async createLink(@Param('id') id: string) {
    return this.downloadsService.createLink(id);
  }

  @Get('downloads/:token')
  async getLink(@Param('token') token: string) {
    return this.downloadsService.getLink(token);
  }

  @Get('downloads/:token/manifest.plist')
  @Header('Content-Type', 'application/xml; charset=utf-8')
  async getManifest(@Param('token') token: string) {
    return this.downloadsService.getManifest(token);
  }

  @Get('downloads/:token/file')
  @Redirect()
  async download(@Param('token') token: string) {
    const url = await this.downloadsService.getFileUrl(token);

    return {
      url,
      statusCode: 302,
    };
  }
}
