import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AppCategory {
  SOCIAL = 'social',
  FINANCES = 'finances',
  UTILITIES = 'utilities',
  PURCHASES = 'purchases',
  MEDIA = 'media',
}

@Entity('apps')
export class App {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column({ type: 'varchar', nullable: true })
  s3Key: string | null;

  @Column({
    type: 'enum',
    enum: AppCategory,
  })
  category: AppCategory;

  @Column({
    type: 'integer',
  })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', nullable: true })
  bundleIdentifier: string | null;

  @Column({ type: 'varchar', nullable: true })
  bundleVersion: string | null;
}
