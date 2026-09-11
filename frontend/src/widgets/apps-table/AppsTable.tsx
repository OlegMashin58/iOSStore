import { Table } from 'antd'
import { useTableData, useColumns } from './hooks'

export const AppsTable = () => {
  const { columns } = useColumns()
  const { apps } = useTableData()

  return <Table columns={columns} dataSource={apps} />
}
