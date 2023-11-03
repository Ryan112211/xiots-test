'use client'

import React, { useState, useMemo, ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from './theme'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {
    // do nothing
  }
})

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  const memoizedValue = useMemo(() => {
    const toggleTheme = () => {
      setCurrentTheme(
        currentTheme.palette.mode === 'light' ? darkTheme : lightTheme
      )

      const root = document.querySelector(':root') as HTMLElement
      if (root) {
        root.style.setProperty(
          '--bgColor',
          currentTheme.palette.mode === 'light' ? '#111' : '#F8F8F8'
        )
      }
    }

    return { theme: currentTheme, toggleTheme }
  }, [currentTheme])

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeContext.Provider value={memoizedValue}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  )
}
