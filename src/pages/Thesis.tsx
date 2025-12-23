import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Thesis() {
  const [content, setContent] = useState('')

  useEffect(() => {
    document.title = 'Mtdv / Thesis'
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Mtdv / Thesis')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Mtdv / Thesis')
  }, [])    

  useEffect(() => {
    fetch('/thesis.md')
      .then((res) => res.text())
      .then(setContent)
  }, [])

  return (
    <article className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
