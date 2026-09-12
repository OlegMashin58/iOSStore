export type AppCategory =
  'social' | 'finances' | 'utilities' | 'purchases' | 'media'

export interface IApp {
  id: number
  name: string
  icon: string
  category: AppCategory
  price: number
  createdAt: string
  updatedAt: string
  s3Key: string
}
