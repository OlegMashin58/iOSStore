import { PlusIcon } from '@assets/icons'
import { APP_CATEGORIES } from '@features/apps/consts/apps.consts'
import type { ICreateApp } from '@features/apps/types/apps.types'
import { Button } from '@shared/ui'
import { Form, Input, Select, Upload, type FormInstance } from 'antd'

interface ICreateAppFormProps {
  form: FormInstance<ICreateApp>
  onFinish: (values: ICreateApp) => Promise<void> | void
}

export const CreateAppForm = ({ form, onFinish }: ICreateAppFormProps) => {
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item
        name="icon"
        label="Изображение"
        valuePropName="fileList"
        getValueFromEvent={(event) => event.fileList}
      >
        <Upload beforeUpload={() => false} maxCount={1} accept="svg">
          <Button view="primary" icon={<PlusIcon />}>
            Выбрать изображение
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="name"
        label="Название"
        rules={[{ required: true, message: 'Введите название' }]}
      >
        <Input placeholder="Название" autoComplete="off" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Категория"
        rules={[{ required: true, message: 'Выбирите категорию' }]}
      >
        <Select placeholder="Категория" options={APP_CATEGORIES} />
      </Form.Item>

      <Form.Item
        name="price"
        label="Цена"
        rules={[{ required: true, message: 'Укажите цену' }]}
      >
        <Input placeholder="Цена" autoComplete="off" />
      </Form.Item>

      <Button view="primary" htmlType="submit">
        Создать
      </Button>
    </Form>
  )
}
