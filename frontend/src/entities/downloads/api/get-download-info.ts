import { api } from '@shared/api/client'
import type { IDownloadInfo } from '../types/downloads.types'

export const getDownloadInfo = async (
  token: string,
): Promise<IDownloadInfo> => {
  const { data } = await api.get<IDownloadInfo>(`/downloads/${token}`)

  return data
}
