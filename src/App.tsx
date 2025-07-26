import { Header } from '@/components/ui/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header logoSrc="/logo.svg" title="MTDV Static" />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Welcome to MTDV (Pages)
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This is a Vite + React + Tailwind v4 boilerplate configured for Cloudflare Pages deployment.
          </p>
        </div>
      </main>
    </div>
  )
}
