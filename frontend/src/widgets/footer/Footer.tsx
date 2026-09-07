import { CopyrightRow } from './ui'
import { Divider } from '@shared/ui'

import styles from './footer.module.less'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider className={styles.divider} />

      <CopyrightRow />
    </footer>
  )
}
