export const translations = {
  pt: {
    code: 'pt',
    label: 'Português',
    quickAccess: 'Acesso rápido',
    tagline: 'Desenvolvedor Full Stack especializado em Python (FastAPI) e React/TypeScript. Construo APIs seguras, pipelines de dados (BigQuery/GCS) e dashboards leves (Streamlit/NLP) que transformam lógica de negócio em produtos escaláveis.',
    links: {
      linkedin: { title: 'LinkedIn', description: 'Experiência profissional, trajetória e networking.' },
      github: { title: 'GitHub', description: 'Projetos, código aberto e experimentos.' },
      livre: { title: 'Livre.digital', description: 'Empresa de antecipação de recebíveis da qual sou sócio.' },
      carboncalc: { title: 'CarbonCalc', description: 'Ferramenta para cálculo de balanço de carbono em propriedades rurais.' },
      instagram: { title: 'Instagram', description: 'Fotos, rotina e interesses pessoais.' },
      discord: { title: 'Discord', description: 'Contato direto e comunidade técnica.' }
    },
    footer: 'Construído com React + Vite. Hospedado no Netlify.'
  },
  en: {
    code: 'en',
    label: 'English',
    quickAccess: 'Quick access',
    tagline: 'Full‑stack developer specializing in Python (FastAPI) and React/TypeScript. I build secure APIs, data pipelines (BigQuery/GCS) and lightweight dashboards (Streamlit/NLP) that turn business logic into scalable products.',
    links: {
      linkedin: { title: 'LinkedIn', description: 'Professional experience, career path & networking.' },
      github: { title: 'GitHub', description: 'Projects, open source and experiments.' },
      livre: { title: 'Livre.digital', description: 'Receivables anticipation company I co-own.' },
      carboncalc: { title: 'CarbonCalc', description: 'Tool to calculate carbon balance on rural properties.' },
      instagram: { title: 'Instagram', description: 'Photos, routine and personal interests.' },
      discord: { title: 'Discord', description: 'Direct contact & tech community.' }
    },
    footer: 'Built with React + Vite. Hosted on Netlify.'
  },
  es: {
    code: 'es',
    label: 'Español',
    quickAccess: 'Acceso rápido',
    tagline: 'Desarrollador full‑stack especializado en Python (FastAPI) y React/TypeScript. Construyo APIs seguras, canalizaciones de datos (BigQuery/GCS) y paneles ligeros (Streamlit/NLP) que convierten la lógica de negocio en productos escalables.',
    links: {
      linkedin: { title: 'LinkedIn', description: 'Experiencia profesional y red de contactos.' },
      github: { title: 'GitHub', description: 'Proyectos, código abierto y experimentos.' },
      livre: { title: 'Livre.digital', description: 'Empresa de anticipación de recibibles de la que soy socio.' },
      carboncalc: { title: 'CarbonCalc', description: 'Herramienta para calcular el balance de carbono en propiedades rurales.' },
      instagram: { title: 'Instagram', description: 'Fotos, rutina e intereses personales.' },
      discord: { title: 'Discord', description: 'Contacto directo y comunidad técnica.' }
    },
    footer: 'Desarrollado con React + Vite. Alojado en Netlify.'
  }
}

export const supportedLangs = ['pt', 'en', 'es']

export function detectInitialLang() {
  const stored = typeof window !== 'undefined' && localStorage.getItem('lang')
  if (stored && supportedLangs.includes(stored)) return stored
  const nav = navigator.language?.toLowerCase() || 'en'
  if (nav.startsWith('pt')) return 'pt'
  if (nav.startsWith('es')) return 'es'
  return 'en'
}