import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

import { AppCategory } from '../entities/app.entity.js';

export class CreateAppDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(AppCategory)
  category: AppCategory;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  price: number;
}
