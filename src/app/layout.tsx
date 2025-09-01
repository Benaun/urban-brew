import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Header from '@/components/header'

import { config } from '@/config/config'

import './globals.css'

const popins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: config.title.default,
    template: config.title.template
  },
  description: config.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${popins.variable} antialiased`}>
        <Header />
        <main className='flex flex-col min-h-[100vh] w-full justify-start items-center'>
          {children}
        </main>
        <footer className='h-20'>{config.description}</footer>
      </body>
    </html>
  )
}
