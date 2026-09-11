import { api } from '@shared/api/client'
import type { IApp } from '../types/apps.types'

export const getApps = async (): Promise<IApp[]> => {
  const { data } = await api.get<IApp[]>('/apps')

  return data
}
