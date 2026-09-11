import { useAuth } from '@app/providers'
import { ProfileDropdown } from '../profile-dropdown/ProfileDropdown'
import { Button } from '@shared/ui'

interface IAuthActionsProps {
  onClick: () => void
}

export const AuthActions = ({ onClick }: IAuthActionsProps) => {
  const { isAuth } = useAuth()

  return (
    <>
      {isAuth ? (
        <ProfileDropdown />
      ) : (
        <Button view="primary" onClick={onClick}>
          Войти/регистрация
        </Button>
      )}
    </>
  )
}
