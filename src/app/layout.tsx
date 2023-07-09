import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Providers from '@/components/Provider'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <main className='px-8'>
        {children}
        <Footer/>

        </main>
        </Providers>
        </body>
    </html>
  )
}
