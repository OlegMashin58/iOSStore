import { Text } from '../../shared/ui'

import styles from './LinkPage.module.less'

interface ILinkPageProps {
  fileName: string
}

export const LinkPage = ({ fileName }: ILinkPageProps) => {
  return (
    <div className={styles.linkPageContainer}>
      <Text text={fileName} variant="hero" />
      <Text
        text={'Нажмите на кнопку ниже, чтобы скачать приложение на ваш IPhone'}
        variant="normal"
      />

      {/* <Button /> */}
    </div>
  )
}
