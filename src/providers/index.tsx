import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { TRPCReactProvider } from '@/trpc/client'
import { Toaster } from '@/components/ui/sonner'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <TRPCReactProvider>
      <Toaster richColors={false} />
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </TRPCReactProvider>
  )
}
