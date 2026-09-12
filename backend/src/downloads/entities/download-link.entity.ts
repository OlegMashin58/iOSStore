import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { App } from '../../apps/entities/app.entity.js';

@Entity('download_links')
export class DownloadLink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  token: string;

  @ManyToOne(() => App, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'app_id' })
  app: App;

  @Column({ name: 'app_id' })
  appId: number;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
