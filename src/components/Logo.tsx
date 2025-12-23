import { useEffect, useState } from 'react'

export function Logo({ className }: { className?: string }) {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    fetch('/logo.svg')
      .then((res) => res.text())
      .then(setSvg)
  }, [])

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
