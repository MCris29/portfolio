import type { AppProps } from 'next/app'
import { Navigation } from '@/components'
import '@/styles/globals.css'
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { getStoredTheme, getThemeOptions, setStoredTheme } from '@/utils'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('dark') // default is dark mode

  useEffect(() => {
    const storedTheme = getStoredTheme()

    if (storedTheme) {
      setMode(storedTheme)
    }
  }, [])

  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation
        mode={mode}
        onChange={() => {
          const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark'
          setMode(newMode)
          setStoredTheme(newMode)
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
