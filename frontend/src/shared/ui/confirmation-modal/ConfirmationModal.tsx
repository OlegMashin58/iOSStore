import { Divider, Modal } from 'antd'
import { Button } from '../button/Button'

import styles from './confirmationModal.module.less'

interface IConfirmationModalProps {
  open: boolean
  title: string
  onCancel: () => void
  onConfirm: () => void
}

export const ConfirmationModal = ({
  open,
  title,
  onCancel,
  onConfirm,
}: IConfirmationModalProps) => {
  const renderFooter = () => {
    return (
      <div className={styles.footer}>
        <Button view="white" onClick={onCancel}>
          Отмена
        </Button>
        <Button view="primary" onClick={onConfirm}>
          Выйти
        </Button>
      </div>
    )
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={title}
      footer={renderFooter()}
      mask={{ closable: false }}
      centered
    >
      <Divider />
    </Modal>
  )
}
