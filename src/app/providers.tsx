'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import { fetcher } from '@/libs/fetcher'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
      <SWRConfig value={{ fetcher }}>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </SWRConfig>
    </NextThemesProvider>
  )
}
