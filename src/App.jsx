import profileImg from './assets/neto.jpeg'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import livreIcon from './assets/livre.svg'

export default function App() {
  const name = 'Neto'

  const links = [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jreis03/',
      description: 'Experiência profissional, trajetória e networking.',
      icon: linkedinIcon,
    },
    {
      id: 'github',
      title: 'GitHub',
      url: 'https://github.com/jnreis03',
      description: 'Projetos, código aberto e experimentos.',
      icon: githubIcon,
    },
    {
      id: 'livre',
      title: 'Livre.digital',
      url: 'https://livre.digital',
      description: 'Empresa de antecipação de recebíveis da qual sou sócio.',
      icon: livreIcon,
    },
  ]

  return (
    <main className="container" role="main">
      <header className="hero">
        <div className="profile-wrapper">
          <img src={profileImg} alt={`Foto de ${name}`} className="profile-photo" />
        </div>
  <h1 className="name-heading"><span className="name-text">{name}</span><span className="wave" aria-hidden="true">👋</span></h1>
        <p className="tagline">
          Full‑stack developer specializing in Python (FastAPI) and React/TypeScript. I build secure APIs, data pipelines (BigQuery/GCS) and lightweight dashboards (Streamlit/NLP) that turn business logic into scalable products.
        </p>
      </header>

      <section aria-labelledby="acesso-rapido">
        <h2 id="acesso-rapido" className="sr-only">Acesso rápido</h2>
        <div className="cards-grid">
          {links.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="card link-card"
            >
              <h3>
                {link.icon && (
                  <img src={link.icon} alt="" aria-hidden="true" className="icon" />
                )}
                {link.title} <span aria-hidden="true">↗</span>
              </h3>
              <p>{link.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} {name}.
        </p>
      </footer>
    </main>
  )
}
