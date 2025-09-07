import { TypeOf, z } from 'zod'

import { loginSchema, registerSchema } from './validation'

export type RegisterFormData = z.infer<typeof registerSchema>

export type LoginFormData = z.infer<typeof loginSchema>

export interface IField<T> {
  name: keyof T
  label: string
  placeholder?: string
  type?: string
}
