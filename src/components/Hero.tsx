import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">Hi, I'm {profile.name}</p>
        <h1>
          {profile.title}
          <span className="muted"> based in {profile.location}.</span>
        </h1>
        <p className="lead">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn">Get in touch</a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn" target="_blank" rel="noreferrer">Résumé</a>
          )}
        </div>
      </div>
    </section>
  )
}
