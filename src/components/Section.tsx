import type { ReactNode } from 'react'

interface Props {
  id: string
  label: string
  title: string
  children: ReactNode
}

export default function Section({ id, label, title, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}
