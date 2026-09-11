import { useQuery } from '@tanstack/react-query'
import { getApps } from '../api/get-apps'

export const useApps = () => {
  return useQuery({
    queryKey: ['apps'],
    queryFn: getApps,
  })
}
