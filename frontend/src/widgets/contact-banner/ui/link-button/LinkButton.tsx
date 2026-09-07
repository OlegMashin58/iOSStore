import { Text } from '@shared/ui'
import styles from './linkButton.module.less'

interface ILinkButtonProps {
  id: string
  messengerName: string
  nickName: string
  link: string
  icon: string
}

export const LinkButton = ({
  id,
  messengerName,
  nickName,
  link,
  icon,
}: ILinkButtonProps) => {
  return (
    <a
      className={styles.linkButtonContainer}
      id={id}
      href={link}
      target="_blank"
    >
      <img src={icon} className={styles.linkIcon} />

      <div className={styles.textContainer}>
        <Text text={messengerName} variant="subtitle" />
        <Text text={nickName} variant="caption" />
      </div>
    </a>
  )
}
