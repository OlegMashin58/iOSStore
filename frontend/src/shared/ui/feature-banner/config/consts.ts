import { headphoneIcon, secureIcon } from '@assets/icons'
import type { IFeatureOptions } from './types'

export const FEATURE_OPTIONS: IFeatureOptions[] = [
  {
    icon: secureIcon,
    title: 'Безопасано',
    description: 'Все приложения проверены и безопасны для вашего iPhone.',
  },
  {
    icon: '',
    title: 'Моментальная доставка',
    description: 'Ссылки на скачивание отправляются сразу после оплаты.',
  },
  {
    icon: headphoneIcon,
    title: 'Поддержка 24/7',
    description: 'Мы всегда готовы помочь с установкой и активацией.',
  },
]
