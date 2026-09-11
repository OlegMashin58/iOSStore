import { Image } from 'antd'
import { Text } from '@shared/ui'
import type { IUser } from '@entities/users/types/users.types'

import styles from './headerProfile.module.less'

export const HeaderProfile = (user: IUser) => {
  const name = `${user.name} ${user.surname}`

  const id = `ID пользователя: ${user.id}`

  return (
    <div className={styles.headerProfile}>
      <div className={styles.content}>
        <Image src={user.photo} preview={false} />

        <div className={styles.textContainer}>
          <Text variant="title" text={name} />

          <Text variant="normal" text={user.email} />

          <Text variant="normal" text={id} />
        </div>
      </div>

      {/* <Button view="primary" /> */}
    </div>
  )
}
