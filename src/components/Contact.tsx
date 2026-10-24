import Section from './Section'
import { profile, socials } from '../data'

export default function Contact() {
  return (
    <Section id="contact" label="04 — Contact" title="Let's work together">
      <p className="lead">
        I'm open to new opportunities and collaborations. The best way to reach me is by email.
      </p>
      <div className="hero-actions">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="btn" target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
