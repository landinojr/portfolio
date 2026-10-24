import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" label="02 — Projects" title="Selected work">
      <div className="cards">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="card-links">
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live ↗</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
