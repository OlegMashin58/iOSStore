import { Text } from '@shared/ui'

import styles from './feautureItem.module.less'

interface IFeatureItemProps {
  icon: string
  title: string
  description: string
}

export const FeatureItem = ({
  icon,
  title,
  description,
}: IFeatureItemProps) => {
  return (
    <div className={styles.feautreItemContainer}>
      <div className={styles.iconContainer}>
        <img src={icon} className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <Text text={title} variant="subtitle" />
        <Text text={description} variant="normal" />
      </div>
    </div>
  )
}
