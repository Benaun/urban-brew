'use server'

import { hashPassword } from '@/utils/hash-password'

import { prisma } from '../model/prisma'
import { RegisterFormData } from '../model/types'

export const registerUser = async (
  formData: RegisterFormData
) => {
  const { email, phone, password, confirmPassword } = formData

  if (password !== confirmPassword) {
    return { error: 'Пароли не совпадают' }
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return { error: 'Данный email уже используется' }
    }

    const hashPas = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email: email,
        phone: phone,
        password: hashPas
      }
    })

    return user
  } catch (error) {
    console.error('Ошибка регистрации', error)
  }
}
