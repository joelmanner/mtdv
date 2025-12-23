import { useTheme } from '@/contexts/ThemeContext'
import { LightIcon, DarkIcon } from '@/components/Icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 py-1 hover:opacity-70 transition-opacity cursor-pointer"
      aria-label="Toggle color scheme"
    >
      {theme === 'light' ? <DarkIcon className="w-6 h-6" /> : <LightIcon className="w-6 h-6" />}
      <span className="text-lg tracking-wide">THEME</span>
    </button>
  )
}
