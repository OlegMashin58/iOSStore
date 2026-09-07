import { Form, Input, type FormInstance } from 'antd'
import type { ILoginFormValues } from '../types/types'

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
        name="phone"
        label="Телефон"
        rules={[{ required: true, message: 'Введите номер телефона' }]}
      >
        <Input placeholder="Телефон" autoComplete="off" />
      </Form.Item>

      <Form.Item
        name="Пароль"
        label="Пароль"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input placeholder="Пароль" autoComplete="off" />
      </Form.Item>
    </Form>
  )
}
