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
  appendTextField(formData, 'description', app.description)

  if (app.icon) {
    formData.append('icon', app.icon)
  }

  return formData
}
