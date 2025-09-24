export const translations = {
  pt: {
    code: "pt",
    label: "Português",
    quickAccess: "Acesso rápido",
    tagline:
      "Pode me chamar de Neto! Desenvolvedor, recém-graduado em Ciência da Computação pela UNIFAL-MG. Tenho {age} anos e me dedico a explorar o mundo da inovação e da tecnologia, apaixonado por musculação, games e carros.",
    links: {
      linkedin: {
        title: "LinkedIn",
        description: "Experiência profissional, trajetória e networking.",
      },
      github: {
        title: "GitHub",
        description: "Projetos, código aberto e experimentos.",
      },
      livre: {
        title: "Livre.digital",
        description: "Empresa de antecipação de recebíveis da qual sou sócio.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description:
          "Ferramenta para cálculo de balanço de carbono em propriedades rurais.",
      },
      instagram: {
        title: "Instagram",
        description: "Fotos, rotina e interesses pessoais.",
      },
      discord: {
        title: "Discord",
        description: "Contato direto e comunidade técnica.",
      },
    },
    footer: "Construído com React + Vite. Hospedado no Netlify.",
  },
  en: {
    code: "en",
    label: "English",
    quickAccess: "Quick access",
    tagline:
      "You can call me Neto! I'm a developer and a recent graduate in Computer Science from UNIFAL-MG. I'm {age} years old and dedicated to exploring the world of innovation and technology, with a passion for bodybuilding, gaming, and cars.",
    links: {
      linkedin: {
        title: "LinkedIn",
        description: "Professional experience, career path & networking.",
      },
      github: {
        title: "GitHub",
        description: "Projects, open source and experiments.",
      },
      livre: {
        title: "Livre.digital",
        description: "Receivables anticipation company I co-own.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description: "Tool to calculate carbon balance on rural properties.",
      },
      instagram: {
        title: "Instagram",
        description: "Photos, routine and personal interests.",
      },
      discord: {
        title: "Discord",
        description: "Direct contact & tech community.",
      },
    },
    footer: "Built with React + Vite. Hosted on Netlify.",
  },
  es: {
    code: "es",
    label: "Español",
    quickAccess: "Acceso rápido",
    tagline:
      "¡Puedes llamarme Neto! Soy desarrollador y recién graduado en Informática por la UNIFAL-MG. Tengo {age} años y me dedico a explorar el mundo de la innovación y la tecnología, con pasión por el culturismo, los videojuegos y los coches.",
    links: {
      linkedin: {
        title: "LinkedIn",
        description: "Experiencia profesional y red de contactos.",
      },
      github: {
        title: "GitHub",
        description: "Proyectos, código abierto y experimentos.",
      },
      livre: {
        title: "Livre.digital",
        description:
          "Empresa de anticipación de recibibles de la que soy socio.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description:
          "Herramienta para calcular el balance de carbono en propiedades rurales.",
      },
      instagram: {
        title: "Instagram",
        description: "Fotos, rutina e intereses personales.",
      },
      discord: {
        title: "Discord",
        description: "Contacto directo y comunidad técnica.",
      },
    },
    footer: "Desarrollado con React + Vite. Alojado en Netlify.",
  },
};

export const supportedLangs = ["pt", "en", "es"];

export function detectInitialLang() {
  const stored = typeof window !== "undefined" && localStorage.getItem("lang");
  if (stored && supportedLangs.includes(stored)) return stored;
  const nav = navigator.language?.toLowerCase() || "en";
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("es")) return "es";
  return "en";
}
