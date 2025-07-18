import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { TRPCReactProvider } from '@/trpc/client'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </TRPCReactProvider>
  )
}
