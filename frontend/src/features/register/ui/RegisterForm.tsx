import { Form, Input, type FormInstance } from 'antd'
import type { IRegisterFormValues } from '../model/types'
import { Button } from '@shared/ui'

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
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: 'Введите номер телефона' }]}
        >
          <Input placeholder="Телефон" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="Пароль"
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

      <Button
        title={'Зарегестрироваться'}
        onClick={() => {}}
        variant="primary"
      />
    </Form>
  )
}
