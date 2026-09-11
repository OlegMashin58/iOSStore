import type { IUser } from '@entities/users/types/users.types'

export interface AuthResponse {
  accessToken: string
  user: IUser
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  surname: string
  email: string
  password: string
}

export interface IRegisterFormValues {
  name: string
  surname: string
  email: string
  password: string
}

export interface ILoginFormValues {
  email: string
  password: string
}
