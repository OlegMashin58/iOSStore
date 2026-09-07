import { Text } from '@shared/ui'
import { SuccessIcon } from '@assets/icons'

import styles from './catalogCard.module.less'
import classNames from 'classnames'

interface ICatalogCardProps {
  id: string
  icon: string
  name: string
  type: string
  selected: boolean
  onToggle: (id: string) => void
}

export const CatalogCard = ({
  id,
  icon,
  name,
  type,
  selected,
  onToggle,
}: ICatalogCardProps) => {
  return (
    <div
      className={classNames(styles.catalogCard, {
        [styles.selected]: selected,
      })}
      id={id}
      onClick={() => onToggle(id)}
    >
      <img src={icon} className={styles.logoIcon} />
      <div className={styles.textContainer}>
        <Text variant="head" text={name} />
        <Text variant="small" text={type} />
      </div>

      {selected && <SuccessIcon className={styles.selectedIcon} />}
    </div>
  )
}
