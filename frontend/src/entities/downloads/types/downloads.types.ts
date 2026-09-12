import type { IApp } from '@entities/apps/types/apps.types'

export interface IDownloadInfo {
  app: Pick<IApp, 'id' | 'name' | 'icon' | 'category'>
  expiresAt: string
}

export interface ICreateDownloadLinkResponse {
  token: string
  url: string
  expiresAt: string
}
