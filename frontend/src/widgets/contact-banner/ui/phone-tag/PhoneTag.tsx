import { Text } from '@shared/ui'
import { callIcon } from '@assets/icons'

import styles from './phoneTag.module.less'

interface IPhoneTagProps {
  id: string
  number: string
  label: string
}

export const PhoneTag = ({ id, number, label }: IPhoneTagProps) => {
  return (
    <a className={styles.phoneTagContainer} id={id} href={`tel:${number}`}>
      {/* <div className={styles.iconContainer}> */}
      <img src={callIcon} />
      {/* </div> */}

      <div className={styles.textContainer}>
        <Text variant="subtitle" text={number} />
        <Text variant="caption" text={label} />
      </div>
    </a>
  )
}
