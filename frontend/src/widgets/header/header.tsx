import { Link } from 'react-router-dom'
import { Button, Text } from '@shared/ui'
import { MenuItem } from '@shared/ui/menu-item/MenuItem'

import styles from './header.module.less'

const TEXTS = {
  SITE_NAME: 'iOS Store',
  DESCRIPTION: 'Приложения для IPhone',
}

const MENU_OPTIONS = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Каталог',
    path: '/catalog',
  },
  {
    name: 'Инструкция',
    path: '/guide',
  },
]

export const Header = () => {
  const getMenuItems = () => {
    return MENU_OPTIONS.map((item) => (
      <MenuItem children={item.name} path={item.path} />
    ))
  }

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.nameContainer} to="/">
        <Text variant="title" text={TEXTS.SITE_NAME} className={styles.name} />
        <Text
          variant="caption"
          text={TEXTS.DESCRIPTION}
          className={styles.description}
        />
      </Link>

      <div className={styles.menu}>{getMenuItems()}</div>

      <Button title={'Установить приложения'} variant="primary" />
    </header>
  )
}
