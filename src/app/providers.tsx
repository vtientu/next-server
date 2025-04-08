'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SessionProvider>
        {children}
        <Toaster />
      </SessionProvider>
    </NextThemesProvider>
  )
}
