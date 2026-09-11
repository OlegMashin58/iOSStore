import { clearAccessToken } from '@shared/api/client'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return () => {
    clearAccessToken()

    queryClient.setQueryData(['auth', 'me'], null)

    queryClient.removeQueries({
      queryKey: ['auth'],
    })

    navigate('/')
  }
}
