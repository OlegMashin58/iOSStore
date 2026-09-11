import { createApp } from '@features/apps/api'
import type { ICreateApp } from '@features/apps/types/apps.types'
import { CreateAppForm } from '@features/apps/ui'
import { Modal } from 'antd'
import { useForm } from 'antd/es/form/Form'

interface ICreateAppModalProps {
  open: boolean
  onCancel: () => void
}

export const CreateAppModal = ({ open, onCancel }: ICreateAppModalProps) => {
  const [form] = useForm<ICreateApp>()

  const handleCreate = (values: ICreateApp) => {
    createApp(values)
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={false}
      mask={{ closable: false }}
      title={'Создать приложение'}
    >
      <CreateAppForm form={form} onFinish={handleCreate} />
    </Modal>
  )
}
