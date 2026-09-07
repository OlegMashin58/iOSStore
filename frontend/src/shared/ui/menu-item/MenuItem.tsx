import { NavLink } from 'react-router-dom'
import { Text } from '../text/Text'
import type { JSX } from 'react/jsx-runtime'
import type { ReactNode } from 'react'

import styles from './menuItem.module.less'
import classNames from 'classnames'

interface MenuItemProps {
  key: string
  path: string
  icon?: JSX.Element
  children: ReactNode
}

export const MenuItem = ({ key, path, icon, children }: MenuItemProps) => {
  return (
    <NavLink
      key={key}
      to={path}
      className={({ isActive }) =>
        classNames(
          styles.menuItem,
          isActive ? styles.menuItemActive : styles.menuItemInactive,
        )
      }
    >
      {children ? (
        <Text
          variant="subtitle"
          text={children}
          className={styles.menuItemText}
        />
      ) : null}
      {icon}
    </NavLink>
  )
}
