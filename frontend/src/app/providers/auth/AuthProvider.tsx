import { createContext, useContext } from 'react'
import { useMe } from '@features/auth/hooks/use-me'
import type { IUser } from '@entities/users/types/users.types'

interface IAuthContext {
  user: IUser | null
  isAuth: boolean
  isLoading: boolean
}

const AuthContext = createContext<IAuthContext | null>(null)

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const { data, isLoading } = useMe()

  const user = data ?? null

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: Boolean(user),
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
