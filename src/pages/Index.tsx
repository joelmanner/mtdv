import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export default function Index() {
  const [content, setContent] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    fetch('/index.md')
      .then((res) => res.text())
      .then(setContent)
  }, [])

  const copyEmail = () => {
    const email = atob('aW5kZXhAbXRkdi54eXo=')
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!content) return null

  return (
    <>
      <article className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
      <div className="flex mt-8">
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-1.5 py-1.5 border-2 border-current rounded hover:opacity-70 transition-opacity cursor-pointer"
        >
          <CopyIcon className="w-4 h-4" />
          <span>{copied ? 'Copied!' : 'Copy Email'}</span>
        </button>
      </div>
    </>
  )
}
