import type { IApp } from '@entities/apps/types/apps.types'
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
  ]

  return { columns }
}
