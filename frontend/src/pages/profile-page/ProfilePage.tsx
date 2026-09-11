import { Text } from '@shared/ui'
import styles from './profilePage.module.less'
import { HeaderProfile } from '@entities/users/ui'

export const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <Text variant="hero" text={'Профиль'} />

      {/* <HeaderProfile user={}/> */}
    </div>
  )
}
