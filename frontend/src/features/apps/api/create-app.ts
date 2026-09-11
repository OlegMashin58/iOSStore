import { api } from '@shared/api/client'
import { getAppFormData } from '../utils/apps.utils'
import type { ICreateApp } from '../types/apps.types'

export const createApp = async (app: ICreateApp): Promise<ICreateApp> => {
  const formData = getAppFormData(app)

  const { data } = await api.post<ICreateApp>('/apps', formData)

  return data
}
