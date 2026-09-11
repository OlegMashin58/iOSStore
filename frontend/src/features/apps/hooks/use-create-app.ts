import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createApp } from '../api'

export const useCreateApp = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createApp,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['apps'],
      })
    },
  })
}
