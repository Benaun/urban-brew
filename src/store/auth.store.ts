import { Session } from 'next-auth'
import { create } from 'zustand'

type SessionStatus =
  | 'unauthenticated'
  | 'authenticated'
  | 'loading'

interface IAuth {
  isAuth: boolean
  status: SessionStatus
  session: Session | null
  setAuthState: (
    status: SessionStatus,
    session: Session | null
  ) => void
}

export const useAuthStore = create<IAuth>(set => ({
  isAuth: false,
  status: 'loading',
  session: null,
  setAuthState: (
    status: SessionStatus,
    session: Session | null
  ) =>
    set({
      isAuth: status === 'authenticated',
      status,
      session
    })
}))
