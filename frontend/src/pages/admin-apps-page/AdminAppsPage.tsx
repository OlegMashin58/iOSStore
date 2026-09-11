import { AdminHeader, AppsTable } from '@widgets/index'

import styles from './adminAppsPage.module.less'

export const AdminAppsPage = () => {
  return (
    <div className={styles.adminAppsPage}>
      <AdminHeader />

      <AppsTable />
    </div>
  )
}
