'use server'

import { signOut } from '../model/auth'

export const signOutUser = async () => {
  try {
    return signOut({ redirect: false })
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    throw error
  }
}
