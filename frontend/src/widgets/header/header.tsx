import { Link } from 'react-router-dom'
import { Text } from '@shared/ui'
import { MenuItem } from '@shared/ui/menu-item/MenuItem'
import { MENU_OPTIONS, TEXTS } from './config/consts'
import { AuthActions } from '@features/auth/ui'

import styles from './header.module.less'

export const Header = () => {
  const getMenuItems = () => {
    return MENU_OPTIONS.map((item) => (
      <MenuItem children={item.name} path={item.path} key={item.key} />
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

      <AuthActions />
    </header>
  )
}
