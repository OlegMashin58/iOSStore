import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

import { AppCategory } from '../entities/app.entity.js';

export class CreateAppDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsEnum(AppCategory)
  category: AppCategory;

  @IsInt()
  @Min(0)
  price: number;
}
