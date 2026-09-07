import { Link } from 'react-router-dom'
import { Button, Text } from '@shared/ui'
import { MenuItem } from '@shared/ui/menu-item/MenuItem'
import { MENU_OPTIONS, TEXTS } from './config/consts'
import { useState } from 'react'

import styles from './header.module.less'
import { AuthModal } from '@widgets/auth-modal/AuthModal'

export const Header = () => {
  const [openAuthModal, setIsOpenAuthModal] = useState(false)

  // const isAuth = true

  const handleOpenAuthModal = () => setIsOpenAuthModal(true)
  const handleCancelAuthModal = () => setIsOpenAuthModal(false)

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

      <div className={styles.buttonsContainer}>
        <Button
          title={TEXTS.REGISTRATION}
          variant="primary"
          onClick={handleOpenAuthModal}
        />
      </div>

      <AuthModal open={openAuthModal} onCancel={handleCancelAuthModal} />
    </header>
  )
}
