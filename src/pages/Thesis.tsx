import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Thesis() {
  const [content, setContent] = useState('')

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
