import type { IStepsOptions } from '../types'
import { first, second, third, fourth, fifth, sixth, seventh } from '../images'
import type { Step } from '@shared/ui/accordion/Accordion'

export const STEPS_OPTIONS: IStepsOptions[] = [
  {
    step: 1,
    image: first,
    title: 'Перейдите в настройки',
    description: 'Откройте приложение «Настройки» на iPhone.',
  },
]

export const steps: Step[] = [
  {
    id: 1,
    title: 'Перейдите в настройки',
    description: 'Откройте приложение «Настройки» на iPhone.',
    image: first,
  },
  {
    id: 2,
    title: 'Перейдите в профиль',
    description: 'Нажмите на блок с профилем.',
    image: second,
  },
  {
    id: 3,
    title: 'Нажмите «Контент и покупки»',
    description:
      'Раздел контент и покупки связан с AppStore, а не с вашим аккаунтом iCloud.',
    image: third,
  },
  {
    id: 4,
    title: 'Нажмите "Выйти"',
    description: 'Выход выполнится только из покупок.',
    image: fourth,
  },
  {
    id: 5,
    title: 'Подтвердите выход',
    description: 'Если повится подтверждение, нажимите "Выйти".',
    image: fifth,
  },
  {
    id: 6,
    title: 'Заново зайдите в раздел "Контент и покупки"',
    description: 'После того как выйдите, зайдите в этот раздел сначала.',
    image: sixth,
  },
  {
    id: 7,
    title: 'Нажмите "Это не вы?"',
    description: 'После того как выйдите, зайдите в этот раздел сначала.',
    image: seventh,
  },
  {
    id: 8,
    title: 'Введите данные со страницы заказа',
    description: 'Введите логин и пароль со страницы заказа.',
  },
  {
    id: 9,
    title: 'Введите код',
    description:
      'После того как вы напишете мне слово "код", у вас будет 30 секунуд чтобы его ввести.',
  },
  {
    id: 10,
    title: 'Нажмите "Установить"',
    description:
      'Перейдите по ссылке, и в открывшемся safari нажмите на кнопку Установить.',
  },
  {
    id: 11,
    title: 'Дождитесь установки и откройте приложение',
    description:
      'Откройте приложение, возможно что с первого раза не откроется. В этом случае повторите попытку.',
  },
  {
    id: 12,
    title: 'Вернитесь в свой аккаунт',
    description:
      'Откройте "Контент и покупки" и нажмите "Продолжить". Установленные приложения продолжат работать.',
  },
]
