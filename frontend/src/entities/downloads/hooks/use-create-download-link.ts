import { useMutation } from '@tanstack/react-query'

import { createDownloadLink } from '../api/create-download-link'

export const useCreateDownloadLink = () => {
  return useMutation({
    mutationFn: createDownloadLink,
  })
}
