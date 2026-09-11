import { api, setAccessToken } from '@shared/api/client'
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '../types/auth.types'

export const register = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data)

  setAccessToken(response.data.accessToken)

  return response.data
}

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data)

  setAccessToken(response.data.accessToken)

  return response.data
}

export const getMe = async () => {
  const response = await api.get('/auth/me')

  return response.data
}
