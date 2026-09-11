import { useQuery } from '@tanstack/react-query'
import { getMe } from '../api/auth.api'

export const useMe = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: getMe,
    retry: false,
    enabled: Boolean(localStorage.getItem('accessToken')),
  })
}
