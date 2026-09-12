import { Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';

import { DownloadsService } from './downloads.service.js';

@Controller()
export class DownloadsController {
  constructor(private readonly downloadsService: DownloadsService) {}

  @Post('apps/:id/download-link')
  @UseGuards(/* твой JwtAuthGuard */)
  async createLink(@Param('id') id: string) {
    return this.downloadsService.createLink(id);
  }

  @Get('downloads/:token')
  async getLink(@Param('token') token: string) {
    return this.downloadsService.getLink(token);
  }

  @Get('downloads/:token/file')
  async download(@Param('token') token: string, @Res() response: Response) {
    const url = await this.downloadsService.getFileUrl(token);

    return response.redirect(url);
  }

  @Get('downloads/:token/manifest.plist')
  async getManifest(@Param('token') token: string, @Res() response: Response) {
    const manifest = await this.downloadsService.getManifest(token);

    response.setHeader('Content-Type', 'application/xml');
    response.setHeader(
      'Content-Disposition',
      'inline; filename="manifest.plist"',
    );

    return response.send(manifest);
  }
}
