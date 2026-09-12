import { useQuery } from '@tanstack/react-query'

import { getDownloadInfo } from '../api/get-download-info'

export const useDownloadInfo = (token: string) => {
  return useQuery({
    queryKey: ['download', token],
    queryFn: () => getDownloadInfo(token),
    enabled: Boolean(token),
  })
}
