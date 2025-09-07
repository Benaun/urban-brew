import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Poppins } from 'next/font/google'

import { auth } from '@/shared/model/auth'
import { appConfig } from '@/shared/model/config'
import Header from '@/shared/ui/header'

import './globals.css'
import AppLoader from '@/hoc/app-loader'

const popins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: appConfig.title.default,
    template: appConfig.title.template
  },
  description: appConfig.description
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang='ru'>
      <body className={`${popins.variable} antialiased`}>
        <SessionProvider session={session}>
          <AppLoader>
            <Header />
            <main className='flex flex-col min-h-[100vh] w-full justify-start items-center'>
              {children}
            </main>
            <footer className='h-20'>
              {appConfig.description}
            </footer>
          </AppLoader>
        </SessionProvider>
      </body>
    </html>
  )
}
