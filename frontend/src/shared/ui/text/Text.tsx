import type { ReactNode } from 'react'

import styles from './text.module.less'
import classNames from 'classnames'

interface ITextProps {
  text: string | ReactNode
  variant:
    | 'normal'
    | 'hero'
    | 'caption'
    | 'head'
    | 'title'
    | 'menu'
    | 'subtitle'
    | 'small'
  className?: string
}

export const Text = ({ text, variant, className }: ITextProps) => {
  return (
    <span
      className={classNames(styles.text, className, {
        [styles.normal]: variant === 'normal',
        [styles.hero]: variant === 'hero',
        [styles.caption]: variant === 'caption',
        [styles.head]: variant === 'head',
        [styles.title]: variant === 'title',
        [styles.menu]: variant === 'menu',
        [styles.subtitle]: variant === 'subtitle',
        [styles.small]: variant === 'small',
      })}
    >
      {text}
    </span>
  )
}
