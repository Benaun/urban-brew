'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { config } from '@/config/config'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '../ui/navigation-menu'

const Nav = () => {
  const pathName = usePathname()

  const renderNavItem = () => {
    return config.navItems.map(item => {
      const isActive = pathName === item.href
      return (
        <NavigationMenuLink asChild key={item.label}>
          <Link
            href={item.href}
            className={`text-2xl border border-transparent 
                ${isActive ? 'text-blue-500' : 'text-black'} 
                hover:text-blue-300 hover:border 
                hover:border-blue-300 
                hover:rounded-md
                transition-colors transform-border duration-200
                `}
          >
            {item.label}
          </Link>
        </NavigationMenuLink>
      )
    })
  }
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='flex items-center justify-between gap-5'>
            {renderNavItem()}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default Nav
