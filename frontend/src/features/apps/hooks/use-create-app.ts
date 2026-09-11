import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createApp } from '../api'
import { appsQueryKey } from '@entities/apps/api/apps.query'

export const useCreateApp = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createApp,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: appsQueryKey,
      })
    },
  })
}
