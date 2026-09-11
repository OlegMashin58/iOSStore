import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service.js';

@Injectable()
export class AdminSeed implements OnModuleInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  async onModuleInit() {
    const email = this.configService.getOrThrow<string>('ADMIN_EMAIL');
    const password = this.configService.getOrThrow<string>('ADMIN_PASSWORD');
    const name = this.configService.get<string>('ADMIN_NAME') || 'Admin';

    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      if (!existingUser.isAdmin) {
        existingUser.isAdmin = true;
        await this.usersService.save(existingUser);
      }

      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await this.usersService.createAdmin(email, hashedPassword, name);
  }
}
