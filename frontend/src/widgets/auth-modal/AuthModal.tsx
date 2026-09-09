import { useLogin } from '@features/auth/hooks/use-login'
import { useRegister } from '@features/auth/hooks/use-register'
import type {
  ILoginFormValues,
  IRegisterFormValues,
} from '@features/auth/types/auth.types'
import { LoginForm, RegisterForm } from '@features/auth/ui'
import { Modal, Tabs, type TabsProps } from 'antd'
import { useForm } from 'antd/es/form/Form'

interface IAuthModalProps {
  open: boolean
  onCancel: () => void
}

export const AuthModal = ({ open, onCancel }: IAuthModalProps) => {
  const [loginForm] = useForm<ILoginFormValues>()
  const [registerForm] = useForm<IRegisterFormValues>()

  const { mutate: login, isPending: isLoginPending } = useLogin()

  const { mutate: register, isPending: isRegisterPending } = useRegister()

  const handleLogin = (values: ILoginFormValues) => {
    login(values, {
      onSuccess: () => {
        onCancel()
      },
    })
  }

  const handleRegister = (values: IRegisterFormValues) => {
    register(values, {
      onSuccess: () => {
        onCancel()
      },
    })
  }

  const items: TabsProps['items'] = [
    {
      key: 'login',
      label: 'Войти',
      children: <LoginForm form={loginForm} onFinish={handleLogin} />,
    },
    {
      key: 'register',
      label: 'Регистрация',
      children: <RegisterForm form={registerForm} onFinish={handleRegister} />,
    },
  ]

  return (
    <Modal
      open={open}
      mask={{ closable: false }}
      onCancel={onCancel}
      destroyOnHidden={true}
      title={<Tabs items={items} />}
      footer={false}
    ></Modal>
  )
}
