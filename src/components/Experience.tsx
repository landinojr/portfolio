import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" label="03 — Experience" title="Where I've worked">
      <ol className="timeline">
        {experience.map((j) => (
          <li key={j.role + j.company}>
            <span className="period">{j.period}</span>
            <div>
              <h3>
                {j.role} <span className="muted">· {j.company}</span>
              </h3>
              <p>{j.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
