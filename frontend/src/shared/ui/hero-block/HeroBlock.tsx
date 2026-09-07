import { Text } from '../text/Text'
import { heroBlockImage } from '@assets/images'
import type { ReactNode } from 'react'

import styles from './heroBlock.module.less'

interface IHeroBlockProps {
  title: string | ReactNode
  description: string | ReactNode
}

export const HeroBlock = ({ title, description }: IHeroBlockProps) => {
  return (
    <div className={styles.heroBlockContainer}>
      <div className={styles.textContainer}>
        <Text variant="hero" text={title} />
        <Text variant="normal" text={description} />
      </div>

      <img src={heroBlockImage} className={styles.heroBlockImage} />
    </div>
  )
}
