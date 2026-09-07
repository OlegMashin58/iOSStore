import type { IMenu } from './types'

export const TEXTS = {
  SITE_NAME: 'iOS Store',
  DESCRIPTION: 'Приложения для IPhone',
  REGISTRATION: 'Войти/Регистрация',
  LOGIN: 'Войти',
}

export const MENU_OPTIONS: IMenu[] = [
  {
    key: 'main',
    name: 'Главная',
    path: '/',
  },
  {
    key: 'catalog',
    name: 'Каталог',
    path: '/catalog',
  },
  {
    key: 'guide',
    name: 'Инструкция',
    path: '/guide',
  },
]
