'use server'

import { prisma } from '../model/prisma'
import { RegisterFormData } from '../model/types'

export const register = async (formData: RegisterFormData) => {
  const { email, phone, password, confirmPassword } = formData
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        phone: phone,
        password: password
      }
    })

    return user
  } catch (error) {
    console.error('Ошибка регистрации', error)
  }
}
