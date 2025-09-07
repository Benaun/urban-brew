'use server'

import { signIn } from '../model/auth'

export const signInUser = async (
  email: string,
  password: string
) => {
  try {
    return await signIn('credentials', {
      email,
      password,
      redirect: false
    })
  } catch (error) {
    console.error('Ошибка авторизации:', error)
  }
}
