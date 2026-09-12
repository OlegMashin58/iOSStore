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
    const normalized: ICreateApp = {
      ...values,
      s3Key: values.s3Key?.trim() ?? '',
      bundleIdentifier: values.bundleIdentifier?.trim() ?? '',
      bundleVersion: values.bundleVersion?.trim() ?? '',
    }

    console.log('normalized before send', normalized) // проверь, что тут нет null
    createApp(normalized)
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
