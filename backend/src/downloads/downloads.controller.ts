import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';

import { DownloadsService } from './downloads.service.js';

@Controller()
export class DownloadsController {
  constructor(private readonly downloadsService: DownloadsService) {}

  @Post('apps/:id/download-link')
  @UseGuards(/* твой JwtAuthGuard */)
  async createLink(@Param('id') id: string) {
    return this.downloadsService.createLink(Number(id));
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
}
