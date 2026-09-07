import type { ILoginFormValues } from '@features/login/types/types'
import { LoginForm } from '@features/login/ui/LoginForm'
import type { IRegisterFormValues } from '@features/register/model/types'
import { RegisterForm } from '@features/register/ui/RegisterForm'
import { Modal, Tabs, type TabsProps } from 'antd'
import { useForm } from 'antd/es/form/Form'

interface IAuthModalProps {
  open: boolean
  onCancel: () => void
}

export const AuthModal = ({ open, onCancel }: IAuthModalProps) => {
  const [loginForm] = useForm<ILoginFormValues>()
  const [registerForm] = useForm<IRegisterFormValues>()

  const items: TabsProps['items'] = [
    {
      key: 'login',
      label: 'Войти',
      children: <LoginForm form={loginForm} onFinish={() => {}} />,
    },
    {
      key: 'register',
      label: 'Регистрация',
      children: <RegisterForm form={registerForm} onFinish={() => {}} />,
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
