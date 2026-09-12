import { Button, Text } from '@shared/ui'
import { DownloadIcon } from '@assets/icons'
import { useParams } from 'react-router-dom'
import { Image, Spin } from 'antd'
import { useDownloadInfo } from '@entities/downloads/hooks/use-download-info'

import styles from './downloaPage.module.less'

export const DownloadPage = () => {
  const { token = '' } = useParams()

  const { data, isLoading, isError } = useDownloadInfo(token)

  if (isLoading) {
    return <Spin />
  }

  if (isError || !data) {
    return <Text variant="title" text="Ссылка недействительна или истекла" />
  }

  const handleDownload = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/downloads/${token}/file`
  }

  return (
    <div className={styles.downloadPage}>
      <div className={styles.block}>
        <Image src={data.app.icon} preview={false} />

        <Text variant="title" text={data.app.name} />
        <Text variant="subtitle" text={data.app.category} />

        <Button
          view="primary"
          onClick={handleDownload}
          icon={<DownloadIcon stroke="#fff" />}
        >
          Скачать
        </Button>
      </div>
    </div>
  )
}
