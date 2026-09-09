import { Dropdown, Image, type MenuProps } from 'antd'
import { profileIcon } from '@assets/icons'
import { Link } from 'react-router-dom'
import { useLogout } from '@features/auth/hooks'

import styles from './profileDropdown.module.less'

export const ProfileDropdown = () => {
  const logout = useLogout()

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: <Link to="/">Профиль</Link>,
    },
    {
      key: 'logout',
      label: 'Выйти',
      onClick: () => logout(),
    },
  ]

  return (
    <Dropdown menu={{ items }}>
      <div className={styles.dropdownContainer}>
        <Image preview={false} src={profileIcon} />
      </div>
    </Dropdown>
  )
}
