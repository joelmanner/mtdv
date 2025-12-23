import { Routes, Route, Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { IndexIcon, ProjectsIcon, ThesisIcon } from '@/components/Icons'
import { Logo } from '@/components/Logo'
import Index from '@/pages/Index'
import Thesis from '@/pages/Thesis'
import Projects from '@/pages/Projects'

const navItems = [
  { label: 'INDEX', icon: IndexIcon, to: '/' },
  { label: 'PROJECTS', icon: ProjectsIcon, to: '/projects' },
  { label: 'THESIS', icon: ThesisIcon, to: '/thesis' },
]

export default function App() {
  return (
    <div className="min-h-screen px-8 py-8 md:px-16 md:py-12">
      <div className="max-w-sm mx-auto">
        <header className="flex justify-center mb-6 md:mb-12">
          <Logo className="h-12 md:h-16 max-w-xs [&_svg]:h-full [&_svg]:w-auto" />
        </header>

        <div className="relative">
          <nav className="hidden md:flex flex-col gap-1 absolute right-full mr-16">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-3 py-1 hover:opacity-70 transition-opacity"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg tracking-wide">{item.label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <nav className="flex md:hidden flex-col gap-1 mb-4 pb-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-2 py-0.5 hover:opacity-70 transition-opacity"
              >
                <item.icon className="w-5 h-5" />
                <span className="tracking-wide">{item.label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
