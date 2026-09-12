import type { ICreateApp } from '../types/apps.types'

const appendTextField = (
  formData: FormData,
  key: string,
  value: string | number | boolean | null | undefined,
) => {
  if (value === null || value === undefined) return

  formData.append(key, String(value))
}

export const getAppFormData = (app: ICreateApp) => {
  const formData = new FormData()

  appendTextField(formData, 'name', app.name)
  appendTextField(formData, 'category', app.category)
  appendTextField(formData, 'price', app.price)

  appendTextField(formData, 's3Key', app.s3Key)
  appendTextField(formData, 'bundleIdentifier', app.bundleIdentifier)
  appendTextField(formData, 'bundleVersion', app.bundleVersion)

  for (const [key, value] of formData.entries()) {
    console.log(key, value)
  }

  if (app.icon) {
    const file = app.icon[0]?.originFileObj

    if (file) {
      formData.append('icon', file)
    }
  }

  return formData
}
