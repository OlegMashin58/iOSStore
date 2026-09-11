import { Form, Input, type FormInstance } from 'antd'
import { Button } from '@shared/ui'
import type { IRegisterFormValues } from '@features/auth/types/auth.types'

interface IRegisterForm {
  form: FormInstance<IRegisterFormValues>
  onFinish: (values: IRegisterFormValues) => Promise<void> | void
}

export const RegisterForm = ({ form, onFinish }: IRegisterForm) => {
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
    >
      <div>
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input placeholder="Имя" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="surname"
          label="Фамилия"
          rules={[{ required: true, message: 'Введите фамилию' }]}
        >
          <Input placeholder="Фамилия" autoComplete="off" />
        </Form.Item>

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
          rules={[{ required: true, message: 'Введите Пароль' }]}
        >
          <Input placeholder="Телефон" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="Подтвердить"
          label="Подтвердить"
          rules={[{ required: true, message: 'Введите Пароль' }]}
        >
          <Input placeholder="Подтвердить" autoComplete="off" />
        </Form.Item>
      </div>

      <Button htmlType="submit" view="primary">
        Зарегестрироваться
      </Button>
    </Form>
  )
}
