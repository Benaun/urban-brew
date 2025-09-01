import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <header className='w-full bg-amber-200 h-20'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        <Link href='/'>
          <Logo />
        </Link>

        <HeaderNav />

        <div className='flex'>
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
