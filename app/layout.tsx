import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lesson',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Navbar/>
          <div className='pt-20'></div>
          {children}
        </body>
      </StoreProvider>
    </html>
  )
}
