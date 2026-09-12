import { useCreateDownloadLink } from '@entities/downloads/hooks/use-create-download-link'
import { Button } from '@shared/ui'
import { message } from 'antd'

interface Props {
  appId: number
}

export const GenerateDownloadLinkButton = ({ appId }: Props) => {
  const mutation = useCreateDownloadLink()

  const handleClick = async () => {
    const result = await mutation.mutateAsync(appId)

    const url = new URL(result.url, window.location.origin).toString()

    await navigator.clipboard.writeText(url)

    message.success('Ссылка создана и скопирована')
  }

  return (
    <Button loading={mutation.isPending} onClick={handleClick} view="primary">
      Сгенерировать ссылку
    </Button>
  )
}
