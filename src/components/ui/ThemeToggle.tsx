import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
      aria-label="Toggle color scheme"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <span className="text-sm">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}
