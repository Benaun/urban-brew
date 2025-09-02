import { z } from 'zod'

import { registerSchema } from './validation'

export type RegisterFormData = z.infer<typeof registerSchema>

export interface IRegisterField {
  name: keyof RegisterFormData
  label: string
  placeholder?: string
  type?: string
}
