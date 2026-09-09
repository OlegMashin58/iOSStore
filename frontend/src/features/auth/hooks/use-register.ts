import { useMutation, useQueryClient } from '@tanstack/react-query'
import { register } from '../api/auth.api'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: register,

    onSuccess: (data) => {
      queryClient.setQueryData(['auth', 'me'], data.user)
    },
  })
}
