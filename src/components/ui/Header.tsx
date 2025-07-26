import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  title?: string
  logoSrc: string
  children?: React.ReactNode
}

export function Header({ title, logoSrc, children }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img 
              src={logoSrc} 
              alt="Logo" 
              className="h-8 w-auto dark:invert" 
            />
          </a>
          {title && (
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h1>
          )}
          <div className="flex items-center gap-3">
            {children}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}