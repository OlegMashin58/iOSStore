import { Text } from '@shared/ui'

import styles from './copyrightRow.module.less'

export const CopyrightRow = () => {
  const text = <p>&copy; iOS Store. Все права защищены.</p>

  return (
    <div className={styles.rowContainer}>
      <Text variant="caption" text={text} />
    </div>
  )
}
