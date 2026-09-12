import { api } from '@shared/api/client'
import type { ICreateDownloadLinkResponse } from '../types/downloads.types'

export const createDownloadLink = async (
  appId: number,
): Promise<ICreateDownloadLinkResponse> => {
  const { data } = await api.post<ICreateDownloadLinkResponse>(
    `/apps/${appId}/download-link`,
  )

  return data
}
