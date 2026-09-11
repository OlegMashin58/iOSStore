import { useApps } from '@entities/apps/hooks'

export const useTableData = () => {
  const { data: apps = [], isLoading, isError } = useApps()

  return { apps, isLoading, isError }
}
