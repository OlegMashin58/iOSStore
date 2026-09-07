import { maxIcon, tgIcon, vkIcon } from '@assets/icons'
import type { IContacts, IPhones } from './types'

export const CONTACT_BUTTONS: IContacts[] = [
  {
    id: 'vk',
    messengerName: 'VK',
    nickName: '@olegmashin58',
    icon: vkIcon,
    link: 'https://vk.ru/olegmashin58',
  },
  {
    id: 'max',
    messengerName: '',
    nickName: 'MAX',
    icon: maxIcon,
    link: 'https://max.ru/u/f9LHodD0cOI2P19ALovD5fDlWG-zjReTd44JK7T-wozoljE25scsJoJ_9jA',
  },
  {
    id: 'tg',
    messengerName: '',
    nickName: 'Telegram',
    icon: tgIcon,
    link: 'https://t.me/olegmashinosinit',
  },
]

export const PHONE_OPTIONS: IPhones[] = [
  {
    id: 'main',
    number: '+7 (937) 428-64-97',
    label: 'Основной номер',
  },
  {
    id: 'additional',
    number: '+7 (986) 732-32-17',
    label: 'Дополнительный номер',
  },
]
