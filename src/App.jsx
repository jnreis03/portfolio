import { useState, useMemo } from 'react'
import profileImg from './assets/neto.jpeg'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import livreIcon from './assets/livre.svg'
import carboncalcIcon from './assets/carboncalc.svg'
import instagramIcon from './assets/instagram.svg'
import discordIcon from './assets/discord.svg'
import flagPt from './assets/flag-br.svg'
import flagEn from './assets/flag-us.svg'
import flagEs from './assets/flag-es.svg'
import { translations, detectInitialLang } from './i18n'

export default function App() {
  const name = 'José Neto'
  const [lang, setLang] = useState(detectInitialLang())

  const t = translations[lang]

  const links = useMemo(() => ([
    { id: 'linkedin', url: 'https://www.linkedin.com/in/jreis03/', icon: linkedinIcon, ...t.links.linkedin },
    { id: 'github', url: 'https://github.com/jnreis03', icon: githubIcon, ...t.links.github },
    { id: 'livre', url: 'https://livre.digital', icon: livreIcon, ...t.links.livre },
    { id: 'carboncalc', url: 'https://carboncalc-db4e.onrender.com', icon: carboncalcIcon, ...t.links.carboncalc },
    { id: 'instagram', url: 'https://www.instagram.com/reisnetooo', icon: instagramIcon, ...t.links.instagram },
    { id: 'discord', url: 'https://discord.com/users/706655466687561843', icon: discordIcon, ...t.links.discord },
  ]), [t])

  function changeLang(newLang) {
    setLang(newLang)
    try { localStorage.setItem('lang', newLang) } catch {}
  }

  return (
    <main className="container" role="main">
      <div className="lang-switch" aria-label="Language selector">
        <button onClick={() => changeLang('pt')} className={lang==='pt'? 'active':''} aria-label="Português (Brasil)">
          <img src={flagPt} alt="" />
        </button>
        <button onClick={() => changeLang('en')} className={lang==='en'? 'active':''} aria-label="English (US)">
          <img src={flagEn} alt="" />
        </button>
        <button onClick={() => changeLang('es')} className={lang==='es'? 'active':''} aria-label="Español (ES)">
          <img src={flagEs} alt="" />
        </button>
      </div>
      <header className="hero">
        <div className="profile-wrapper">
          <img src={profileImg} alt={`Foto de ${name}`} className="profile-photo" />
        </div>
  <h1 className="name-heading"><span className="name-text">{name}</span><span className="wave" aria-hidden="true">👋</span></h1>
        <p className="tagline" lang={lang}>
          {t.tagline}
        </p>
      </header>

      <section aria-labelledby="quick-access">
        <h2 id="quick-access" className="sr-only">{t.quickAccess}</h2>
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
          © {new Date().getFullYear()} {name}. {t.footer}
        </p>
      </footer>
    </main>
  )
}
