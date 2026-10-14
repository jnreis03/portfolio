import { useState, useMemo, useEffect, useRef } from 'react'
import profileImg from './assets/neto.webp'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import divisaIcon from './assets/divisa.png'
import vidapetIcon from './assets/vidapet.png'
import livreIcon from './assets/livre.svg'
import carboncalcIcon from './assets/carboncalc.svg'
import instagramIcon from './assets/instagram.svg'
import discordIcon from './assets/discord.svg'
import flagPt from './assets/flag-br.svg'
import flagEn from './assets/flag-us.svg'
import flagEs from './assets/flag-es.svg'
import { translations, detectInitialLang } from './i18n'
// Tech badges icons
import reactIcon from './assets/react-svgrepo-com.svg'
import tsIcon from './assets/typescript-official-svgrepo-com.svg'
import nodeIcon from './assets/node-svgrepo-com.svg'
import pythonIcon from './assets/python-svgrepo-com.svg'
import fastapiIcon from './assets/fastapi-svgrepo-com.svg'
import dockerIcon from './assets/docker-svgrepo-com.svg'
import gcpIcon from './assets/google-cloud-1.svg'

const LANG_CONFIG = {
  pt: { code: 'pt', label: 'Português', flag: flagPt, next: 'en', nextLabel: 'English' },
  en: { code: 'en', label: 'English', flag: flagEn, next: 'es', nextLabel: 'Español' },
  es: { code: 'es', label: 'Español', flag: flagEs, next: 'pt', nextLabel: 'Português' },
}

function LanguageToggle({ currentLang, onLangChange }) {
  const [displayLang, setDisplayLang] = useState(currentLang)
  const [isSwitching, setIsSwitching] = useState(false)
  const [isPeeking, setIsPeeking] = useState(false)
  const hasInteractedRef = useRef(false)
  const timerRef = useRef(null)

  const current = LANG_CONFIG[displayLang] || LANG_CONFIG.pt
  const next = LANG_CONFIG[current.next]

  useEffect(() => {
    if (!isSwitching) {
      setDisplayLang(currentLang)
    }
  }, [currentLang, isSwitching])

  // Idle peek hint (runs after ~4.5s to draw attention, once more after 7s)
  useEffect(() => {
    let peekCount = 0

    function schedulePeek(delay) {
      timerRef.current = setTimeout(() => {
        if (hasInteractedRef.current) return
        setIsPeeking(true)
        peekCount++
        if (peekCount < 2) {
          schedulePeek(7000)
        }
      }, delay)
    }

    schedulePeek(4500)

    return () => clearTimeout(timerRef.current)
  }, [])

  function handlePeekEnd() {
    setIsPeeking(false)
  }

  function handleClick() {
    if (isSwitching) return
    hasInteractedRef.current = true
    clearTimeout(timerRef.current)
    setIsPeeking(false)
    setIsSwitching(true)

    const nextCode = current.next

    setTimeout(() => {
      setDisplayLang(nextCode)
      onLangChange(nextCode)
      setIsSwitching(false)
    }, 340)
  }

  return (
    <button
      type="button"
      className={`lang-toggle ${isSwitching ? 'switching' : ''} ${isPeeking ? 'peeking' : ''}`}
      onClick={handleClick}
      title={`Idioma: ${current.label} • Clique para alternar para ${next.label}`}
      aria-label={`Idioma atual: ${current.label}. Clique para alternar para ${next.label}.`}
    >
      <div
        className="flag-reel"
        onAnimationEnd={handlePeekEnd}
      >
        <div className="flag-item current">
          <img src={current.flag} alt={current.label} />
        </div>
        <div className="flag-item next">
          <img src={next.flag} alt={next.label} />
        </div>
      </div>
    </button>
  )
}

export default function App() {
  const name = 'José Neto'
  const [lang, setLang] = useState(detectInitialLang())

  const t = translations[lang]

  function getAge() {
    const today = new Date()
    const birth = new Date(2003, 1, 26) // months are 0-based
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const links = useMemo(() => ([
    { id: 'divisa', url: 'https://www.divisacambio.com.br/', icon: divisaIcon, ...t.links.divisa },
    {
      id: 'vidapet',
      url: 'https://vidapet.app/',
      icon: vidapetIcon,
      sublinks: [
        { label: 'iOS', url: 'https://apps.apple.com/il/app/vidapet-app/id6789291784' },
        { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.vidapet.app&hl=pt_BR' },
      ],
      ...t.links.vidapet,
    },
    { id: 'livre', url: 'https://livre.digital', icon: livreIcon, ...t.links.livre },
    { id: 'carboncalc', url: 'https://carboncalc-db4e.onrender.com', icon: carboncalcIcon, ...t.links.carboncalc },
    { id: 'github', url: 'https://github.com/jnreis03', icon: githubIcon, ...t.links.github },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/jreis03/', icon: linkedinIcon, ...t.links.linkedin },
    { id: 'instagram', url: 'https://www.instagram.com/reisnetooo', icon: instagramIcon, ...t.links.instagram },
    { id: 'discord', url: 'https://discord.com/users/706655466687561843', icon: discordIcon, ...t.links.discord },
  ]), [t])

  function changeLang(newLang) {
    setLang(newLang)
    try { localStorage.setItem('lang', newLang) } catch {}
  }

  const techs = useMemo(() => ([
    { id: 'react', label: 'React', icon: reactIcon },
    { id: 'typescript', label: 'TypeScript', icon: tsIcon },
    { id: 'node', label: 'Node.js', icon: nodeIcon },
    { id: 'python', label: 'Python', icon: pythonIcon },
    { id: 'fastapi', label: 'FastAPI', icon: fastapiIcon },
    { id: 'docker', label: 'Docker', icon: dockerIcon },
    { id: 'gcp', label: 'Google Cloud', icon: gcpIcon },
  ]), [])

  return (
    <main className="container" role="main">
      <div className="lang-switch" aria-label="Language selector">
        <LanguageToggle currentLang={lang} onLangChange={changeLang} />
      </div>
      <header className="hero">
        <div className="profile-wrapper">
          <img src={profileImg} alt={`Foto de ${name}`} className="profile-photo" />
        </div>
  <h1 className="name-heading"><span className="name-text">{name}</span><span className="wave" aria-hidden="true">👋</span></h1>
        <p className="tagline" lang={lang}>
          {t.tagline.replace('{age}', String(getAge()))}
        </p>
      </header>

      <section aria-labelledby="quick-access">
        <h2 id="quick-access" className="sr-only">{t.quickAccess}</h2>
        <div className="tech-icons" aria-label="Tecnologias" role="list">
          {techs.map(tech => (
            <span
              key={tech.id}
              className="tech-icon"
              title={tech.label}
              role="img"
              aria-label={tech.label}
            >
              <img src={tech.icon} alt={tech.label} />
            </span>
          ))}
        </div>
        <div className="cards-grid">
          {links.map(link => {
            const hasSublinks = Boolean(link.sublinks?.length)
            if (hasSublinks) {
              return (
                <div
                  key={link.id}
                  className="card link-card"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    if (e.target.closest('a')) return
                    window.open(link.url, '_blank', 'noreferrer')
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
                      e.preventDefault()
                      window.open(link.url, '_blank', 'noreferrer')
                    }
                  }}
                >
                  <h3>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="card-title-link"
                    >
                      {link.icon && (
                        <img src={link.icon} alt="" aria-hidden="true" className="icon" />
                      )}
                      {link.title} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p>{link.description}</p>
                  <div className="card-sublinks" onClick={(e) => e.stopPropagation()}>
                    {link.sublinks.map(sub => (
                      <a
                        key={sub.label}
                        href={sub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="sublink-badge"
                        aria-label={`${link.title} (${sub.label})`}
                      >
                        {sub.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )
            }

            return (
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
            )
          })}
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} NetoDev
        </p>
      </footer>
    </main>
  )
}
