import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Menu, type MenuProps } from 'antd'
import { AppsIcon, ProfileIcon, WalletIcon } from '@assets/icons'
import { useAuth } from '@app/providers'

import styles from './accountLayout.module.less'

export const AccountLayout = () => {
  const { isAuth, isAdmin } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  const currentKey = location.pathname.split('/').pop() ?? 'profile'

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Личные данные',
      icon: <ProfileIcon stroke="#a97858" />,
    },
    {
      key: 'transactions',
      label: 'Транзакции',
      icon: <WalletIcon stroke="#a97858" />,
    },
    ...(isAdmin && isAuth
      ? [
          {
            key: 'apps',
            label: 'Приложения',
            icon: <AppsIcon stroke="#a97858" />,
          },
        ]
      : []),
  ]

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(`/account/${key}`)
  }

  return (
    <div className={styles.accountLayout}>
      <aside className={styles.aside}>
        <Menu
          style={{ width: 256 }}
          classNames={{ root: styles.menuRoot, item: styles.menuItem }}
          selectedKeys={[currentKey]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}
