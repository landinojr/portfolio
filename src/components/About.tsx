import Section from './Section'
import { profile, skills } from '../data'

export default function About() {
  return (
    <Section id="about" label="01 — About" title="A little about me">
      <div className="about-grid">
        <div className="about-text">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="sub">Skills & tools</h3>
          <ul className="chips">
            {skills.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
