'use client'

import Image from 'next/image'
import Link from 'next/link'

import { signOutUser } from '@/shared/actions/sign-out'

import { useAuthStore } from '@/store/auth.store'

import { Button } from '../kit/button'

import HeaderNav from './header-nav'

const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='logo'
      width={50}
      height={50}
      priority
    />
  )
}

const Header = () => {
  const { isAuth, session, status, setAuthState } =
    useAuthStore()

  const handleSignOut = async () => {
    try {
      await signOutUser()
      setAuthState('unauthenticated', null)
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <header className='w-full bg-amber-200 h-20'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        <Link href='/'>
          <Logo />
        </Link>

        <HeaderNav />

        <div className='flex'>
          {status === 'loading' ? (
            <div> ...loading</div>
          ) : isAuth ? (
            <Button onClick={handleSignOut}>Выйти</Button>
          ) : (
            <Button>Войти</Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
