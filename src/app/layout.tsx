import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/app/providers'
import './globals.css'

const roboto = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Tú Shoes Shop',
  description: 'Tú Shoes Shop'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
