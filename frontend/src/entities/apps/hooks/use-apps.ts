import { useQuery } from '@tanstack/react-query'
import { getApps } from '../api/get-apps'
import { appsQueryKey } from '../api'

export const useApps = () => {
  return useQuery({
    queryKey: appsQueryKey,
    queryFn: getApps,
  })
}
