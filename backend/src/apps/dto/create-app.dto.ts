import { IsEnum, IsNumber, IsString } from 'class-validator';

import { AppCategory } from '../entities/app.entity.js';

export class CreateAppDto {
  @IsString()
  name: string;

  @IsEnum(AppCategory)
  category: AppCategory;

  @IsString()
  price: string;

  @IsString()
  s3Key: string;

  @IsString()
  bundleIdentifier: string;

  @IsString()
  bundleVersion: string;
}
