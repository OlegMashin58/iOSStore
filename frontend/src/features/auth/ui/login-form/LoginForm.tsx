import type { ILoginFormValues } from '@features/auth/types/auth.types'
import { Button } from '@shared/ui'
import { Form, Input, type FormInstance } from 'antd'

interface ILoginFormProps {
  form: FormInstance<ILoginFormValues>
  onFinish: (values: ILoginFormValues) => Promise<void> | void
}

export const LoginForm = ({ form, onFinish }: ILoginFormProps) => {
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="Почта"
        rules={[{ required: true, message: 'Введите номер телефона' }]}
      >
        <Input placeholder="Почта" autoComplete="off" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input placeholder="Пароль" autoComplete="off" />
      </Form.Item>

      <Button view="primary" htmlType="submit">
        Войти
      </Button>
    </Form>
  )
}
