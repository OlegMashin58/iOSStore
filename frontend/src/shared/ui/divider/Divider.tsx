import styles from './divider.module.less'
import classNames from 'classnames'

interface IDividerProps {
  variant?: 'vertical' | 'default'
  className?: string
}

export const Divider = ({ variant = 'default', className }: IDividerProps) => {
  return (
    <hr
      className={classNames(className, styles.divider, {
        [styles.vertical]: variant === 'vertical',
      })}
    />
  )
}
