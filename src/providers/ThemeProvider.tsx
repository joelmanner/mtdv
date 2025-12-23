import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from '@/contexts/ThemeContext'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [override, setOverride] = useState<Theme | null>(null)
  const [systemTheme, setSystemTheme] = useState<Theme>('light')

  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mq.matches ? 'dark' : 'light')

    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const theme = override ?? systemTheme

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    if (override) {
      html.classList.add(override)
    }
  }, [override])

  const toggleTheme = () => {
    setOverride(prev => (prev ?? systemTheme) === 'light' ? 'dark' : 'light')
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
