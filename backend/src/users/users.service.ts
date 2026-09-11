import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async create(email: string, password: string, name: string): Promise<User> {
    const user = this.usersRepository.create({
      email,
      password,
      name,
    });

    return this.usersRepository.save(user);
  }

  async createAdmin(
    email: string,
    password: string,
    name: string,
  ): Promise<User> {
    const user = this.usersRepository.create({
      email,
      password,
      name,
      isAdmin: true,
    });

    return this.usersRepository.save(user);
  }

  async save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
