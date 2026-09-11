export type AppCategory =
  'social' | 'finances' | 'utilities' | 'purchases' | 'media'

export interface IApp {
  id: string
  name: string
  icon: string
  category: AppCategory
  price: number
  createdAt: string
  updatedAt: string
}
