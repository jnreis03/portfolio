export const translations = {
  pt: {
    code: "pt",
    label: "Português",
    quickAccess: "Acesso rápido",
    tagline:
      "Pode me chamar de Neto! CTO e sócio da Livre, cientista da computação pela UNIFAL-MG especializado em arquiteturas de IA e produtos digitais. Crio agentes, integrações com LLMs, soluções customizadas e muito mais. Nas horas vagas, divido meu tempo entre o treino, a música, os games e o mundo automotivo.",
    links: {
      divisa: {
        title: "Divisa",
        description:
          "Câmbio comercial para importadores e exportadores. Pagamentos ao exterior e conversão de recebíveis para empresas.",
      },
      vidapet: {
        title: "VidaPet",
        description:
          "Ecossistema de saúde para pets, com passeios, lembretes, agendas e muito mais! Disponível para iOS e Android.",
      },
      livre: {
        title: "Livre",
        description:
          "Transformamos dados do varejo em inteligência e soluções financeiras.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description:
          "Ferramenta para cálculo de balanço de carbono em propriedades rurais.",
      },
      github: {
        title: "GitHub",
        description: "Projetos, código aberto e experimentos.",
      },
      linkedin: {
        title: "LinkedIn",
        description: "Experiência profissional, trajetória e networking.",
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
      "You can call me Neto! CTO & Partner at Livre, Computer Scientist from UNIFAL-MG specializing in AI architectures and digital products. I build agents, LLM integrations, custom solutions, and more. In my free time, I split my hours between training, music, gaming, and the automotive world.",
    links: {
      divisa: {
        title: "Divisa",
        description:
          "Corporate FX for importers and exporters. International supplier payments and foreign receivable conversion.",
      },
      vidapet: {
        title: "VidaPet",
        description:
          "Pet health ecosystem with walk tracking, reminders, scheduling, and more! Available on iOS and Android.",
      },
      livre: {
        title: "Livre",
        description:
          "We turn retail data into intelligence and financial solutions.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description: "Tool to calculate carbon balance on rural properties.",
      },
      github: {
        title: "GitHub",
        description: "Projects, open source and experiments.",
      },
      linkedin: {
        title: "LinkedIn",
        description: "Professional experience, career path & networking.",
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
      "¡Puedes llamarme Neto! CTO y socio de Livre, científico de la computación por la UNIFAL-MG especializado en arquitecturas de IA y productos digitales. Creo agentes, integraciones con LLMs, soluciones personalizadas y más. En mi tiempo libre, entreno, disfruto de la música, los videojuegos y el mundo automotriz.",
    links: {
      divisa: {
        title: "Divisa",
        description:
          "Cambio comercial para importadores y exportadores. Pago a proveedores en el exterior y conversión de cobros.",
      },
      vidapet: {
        title: "VidaPet",
        description:
          "Ecosistema de salud para mascotas, con paseos, recordatorios, agendas y más! Disponible para iOS y Android.",
      },
      livre: {
        title: "Livre",
        description:
          "Transformamos datos del comercio minorista en inteligencia y soluciones financieras.",
      },
      carboncalc: {
        title: "CarbonCalc",
        description:
          "Herramienta para calcular el balance de carbono en propiedades rurales.",
      },
      github: {
        title: "GitHub",
        description: "Proyectos, código abierto y experimentos.",
      },
      linkedin: {
        title: "LinkedIn",
        description: "Experiencia profesional y red de contactos.",
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
