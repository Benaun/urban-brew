import { z } from 'zod'

const phoneRegex = /^(?:\+7|7|8)\d{10}$/

export const registerSchema = z
  .object({
    email: z.string({ message: 'Почта обязателена' }).email(),
    phone: z
      .string({ message: 'Номер телефона обязателен' })
      .min(1, 'Номер телефона обязателен')
      .regex(phoneRegex, 'Неверно указан номер'),
    password: z
      .string({ message: 'Пароль обязателен' })
      .min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z.string().optional()
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают'
  })

export const loginSchema = z.object({
  email: z.string({ message: 'Почта обязателена' }).email(),
  password: z
    .string({ message: 'Пароль обязателен' })
    .min(6, 'Пароль должен быть не менее 6 символов')
})
