import { useState } from "react"
import type { IRegisterFormValues } from "../model/types"

interface UseRegisterParams {
    onSuccess?: (user: unknown) => void
    onError?: (error: Error) => void
  }
  
  export const useRegister = ({ onSuccess, onError }: UseRegisterParams = {}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
  
    const register = async (values: IRegisterFormValues) => {
      setIsLoading(true)
      setError(null)
  
      try {
        const user = await registerUser(values)
        onSuccess?.(user)
      } catch (e) {
        const message = e instanceof Error ? e.message : 'Что-то пошло не так'
        setError(message)
        onError?.(e instanceof Error ? e : new Error(message))
      } finally {
        setIsLoading(false)
      }
    }
  
    return { register, isLoading, error }
  }