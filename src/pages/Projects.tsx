import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Mtdv / Projects'
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Mtdv / Projects')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Mtdv / Projects')
  }, [])

  return (
    <article className="text-justify leading-relaxed">
      <p>Projects coming soon...</p>
    </article>
  )
}
