import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '../api/auth.api'
import { setAccessToken } from '@shared/api/client'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      setAccessToken(data.accessToken)

      queryClient.setQueryData(['auth', 'me'], data.user)
    },
  })
}
