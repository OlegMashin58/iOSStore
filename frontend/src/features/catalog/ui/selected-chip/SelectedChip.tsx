import { Text } from '@shared/ui'
import { CloseIcon } from '@assets/icons'

import styles from './selectedChip.module.less'

interface ISelectedChipProps {
  appLogo: string
  appName: string
  onRemove: () => void
}

export const SelectedChip = ({
  appLogo,
  appName,
  onRemove,
}: ISelectedChipProps) => {
  return (
    <div className={styles.selectedChip}>
      <div className={styles.contentContainer}>
        <img src={appLogo} className={styles.appLogo} />
        <Text text={appName} variant="small" />
      </div>

      <CloseIcon className={styles.clearIcon} onClick={onRemove} />
    </div>
  )
}
