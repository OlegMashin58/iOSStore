import type { ReactNode } from 'react'
import { Text } from '../text/Text'

import styles from './button.module.less'
import classnames from 'classnames'

interface IButtonProps {
  title?: string
  icon?: string
  variant: 'primary' | 'white'
  onClick: () => void
  children?: ReactNode
}

export const Button = ({
  title,
  icon,
  variant,
  onClick,
  // children,
}: IButtonProps) => {
  return (
    <button
      // title={title}
      onClick={onClick}
      className={classnames(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.white]: variant === 'white',
      })}
    >
      <Text variant="normal" text={title} className={styles.text} />
      {icon && <img src={icon} className={styles.icon} />}
      {/* {children} */}
    </button>
  )
}
