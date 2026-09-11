import { Button as AntButton } from 'antd'
import type { ButtonProps } from 'antd/es/button/Button'

import styles from './button.module.less'
import classnames from 'classnames'

interface IButtonProps extends ButtonProps {
  title?: string
  view: 'primary' | 'white'
}

export const Button = ({ title, view, ...restProps }: IButtonProps) => {
  return (
    <AntButton
      title={title}
      className={classnames(styles.button, {
        [styles.primary]: view === 'primary',
        [styles.white]: view === 'white',
      })}
      {...restProps}
    />
  )
}
