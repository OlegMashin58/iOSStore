import { Button } from '@shared/ui'

import styles from './downloaPage.module.less'
import { DownloadIcon } from '@assets/icons'

interface IDownloadPageProps {}

export const DownloadPage = ({}: IDownloadPageProps) => {
  const manifestUrl = `${window.location.origin}/manifest.plist`

  const handleInstall = () => {
    window.location.href = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestUrl)}`
  }

  return (
    <div className={styles.downloadPage}>
      <div className={styles.block}>
        <Button
          view="primary"
          onClick={handleInstall}
          icon={<DownloadIcon stroke="#fff" />}
        >
          Скачать
        </Button>
      </div>
    </div>
  )
}
