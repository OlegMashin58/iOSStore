import { Dropdown, type MenuProps } from 'antd'
import { ExitIcon, ProfileIcon } from '@assets/icons'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '@features/auth/hooks'
import { useState } from 'react'
import { ConfirmationModal } from '@shared/ui'

import styles from './profileDropdown.module.less'

export const ProfileDropdown = () => {
  const [open, setIsOpen] = useState(false)

  const navigate = useNavigate()
  const logout = useLogout()

  const handleOpenConfirmModal = () => setIsOpen(true)
  const handleCancelConfirmModal = () => setIsOpen(false)

  const handleConfirm = () => {
    logout()
    setIsOpen(false)
  }

  const handleGoToAccount = () => navigate('/account/profile')

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Личный кабинет',
      icon: <ProfileIcon />,
      onClick: handleGoToAccount,
    },
    {
      key: 'logout',
      label: 'Выйти',
      icon: <ExitIcon />,
      onClick: handleOpenConfirmModal,
    },
  ]

  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        classNames={{
          root: styles.dropdownRoot,
          item: styles.dropdownItem,
          itemIcon: styles.dropdownIcon,
        }}
      >
        <div className={styles.dropdownContainer}>
          <ProfileIcon />
        </div>
      </Dropdown>

      <ConfirmationModal
        open={open}
        onCancel={handleCancelConfirmModal}
        onConfirm={handleConfirm}
        title={'Выйти из профиля?'}
      />
    </>
  )
}
