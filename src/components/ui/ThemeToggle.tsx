import { useTheme } from '@/contexts/ThemeContext'
import { LightIcon, DarkIcon } from '@/components/Icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 md:gap-3 py-0.5 md:py-1 hover:opacity-70 transition-opacity cursor-pointer"
      aria-label="Toggle color scheme"
    >
      {theme === 'light' ? <DarkIcon className="w-5 h-5 md:w-6 md:h-6" /> : <LightIcon className="w-5 h-5 md:w-6 md:h-6" />}
      <span className="tracking-wide">THEME</span>
    </button>
  )
}
