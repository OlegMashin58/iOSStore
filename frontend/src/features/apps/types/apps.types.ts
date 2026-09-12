import type { AppCategory } from '@entities/apps/types/apps.types'
import type { UploadFile } from 'antd'

export interface ICreateApp {
  name: string
  category?: AppCategory
  price?: number
  icon?: UploadFile[]
  s3Key: string
  bundleIdentifier: string
  bundleVersion: string
}
