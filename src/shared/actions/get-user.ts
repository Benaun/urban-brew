'use server'

import { prisma } from '../model/prisma'

export const getUserFromDb = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  } catch (error) {
    throw new Error('Invalid email or password')
  }
}
