import { useAuth } from '@app/providers'
import { ProfileDropdown } from '../profile-dropdown/ProfileDropdown'
import { Button } from '@shared/ui'
import { useState } from 'react'
import { AuthModal } from '@widgets/auth-modal/AuthModal'

export const AuthActions = () => {
  const { isAuth } = useAuth()

  const [openAuthModal, setIsOpenAuthModal] = useState(false)

  const handleOpenAuthModal = () => setIsOpenAuthModal(true)
  const handleCancelAuthModal = () => setIsOpenAuthModal(false)
  console.log('isAuth', isAuth)

  return (
    <>
      {isAuth ? (
        <ProfileDropdown />
      ) : (
        <Button
          title={'Войти/регистрация'}
          variant="primary"
          onClick={handleOpenAuthModal}
        />
      )}

      <AuthModal open={openAuthModal} onCancel={handleCancelAuthModal} />
    </>
  )
}
