import type { IApp } from '@entities/apps/types/apps.types'
import { GenerateDownloadLinkButton } from '@features/apps/ui/generate-download-link-button/GenerateDowloadLinkButton'
import { Image, type TableColumnsType } from 'antd'

export const useColumns = () => {
  const columns: TableColumnsType<IApp> = [
    {
      title: 'Изображение',
      dataIndex: 'icon',
      key: 'icon',
      render: (_, app) => <Image src={app.icon} />,
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Действия',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
    {
      title: 'Ссылка',
      dataIndex: '',
      key: 'linkButton',
      render: (_, app) => <GenerateDownloadLinkButton appId={app.id} />,
    },
  ]

  return { columns }
}
