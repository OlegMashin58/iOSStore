import { Image, Spin } from 'antd'
import { useParams } from 'react-router-dom'

import { DownloadIcon } from '@assets/icons'
import { useDownloadInfo } from '@entities/downloads/hooks/use-download-info'
import { Button, Text } from '@shared/ui'

import styles from './downloaPage.module.less'

export const DownloadPage = () => {
  const { token = '' } = useParams()

  const { data, isLoading, isError } = useDownloadInfo(token)

  if (isLoading) {
    return (
      <div className={styles.downloadPage}>
        <Spin />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className={styles.downloadPage}>
        <Text variant="title" text="Ссылка недействительна или истекла" />
      </div>
    )
  }

  const handleInstall = () => {
    const manifestUrl =
      `${window.location.origin}` +
      `${import.meta.env.VITE_API_URL}` +
      `/downloads/${token}/manifest.plist`

    const installUrl =
      `itms-services://?action=download-manifest&url=` +
      encodeURIComponent(manifestUrl)

    window.location.href = installUrl
  }

  return (
    <div className={styles.downloadPage}>
      <div className={styles.block}>
        <div className={styles.appInfo}>
          <Image
            src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${data.app.icon}`}
            preview={false}
            width={96}
            height={96}
          />

          <Text variant="title" text={data.app.name} />

          <Text variant="subtitle" text={data.app.category} />
        </div>
        <Button
          view="primary"
          onClick={handleInstall}
          icon={<DownloadIcon stroke="#fff" />}
        >
          Установить
        </Button>
      </div>
    </div>
  )
}
