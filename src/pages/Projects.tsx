import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'MTDV / Projects'
  }, [])

  return (
    <article className="text-justify leading-relaxed">
      <p>Projects coming soon...</p>
    </article>
  )
}
