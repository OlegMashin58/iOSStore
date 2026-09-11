import type { IApp } from '@entities/apps/types/apps.types'

export type ICreateAppFormValues = Omit<IApp, 'id'>

export interface ICreateApp {
  name: string
  description?: string
  icon?: File | null
}
