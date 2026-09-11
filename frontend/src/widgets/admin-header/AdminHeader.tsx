import { PlusIcon } from '@assets/icons'
import { Button, Text } from '@shared/ui'
import { useState } from 'react'

import styles from './adminHeader.module.less'
import { CreateAppModal } from '@widgets/create-app-modal/CreateAppModal'

export const AdminHeader = () => {
  const [open, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCancelModal = () => setIsOpen(false)

  return (
    <>
      <div className={styles.adminHeader}>
        <Text variant="hero" text={'Приложения'} />

        <Button
          view="primary"
          onClick={handleOpenModal}
          icon={<PlusIcon stroke="#fff" />}
          iconPlacement="start"
        >
          Добавить приложение
        </Button>
      </div>

      <CreateAppModal open={open} onCancel={handleCancelModal} />
    </>
  )
}
