export const profileData = {
  name: "Micael Barros",
  role: "Desenvolvedor Full Stack & Engenheiro de Software",
  githubUsername: "micaelbarros",
  email: "micael.barros@dev.com",
  location: "Recife, PE - Brasil",
  linkedin: "https://linkedin.com",
  github: "https://github.com/micaelbarros",
  bio: "Desenvolvedor apaixonado por criar interfaces modernas, performáticas e acessíveis com React, Next.js e ecossistema JavaScript/TypeScript. Focado em arquitetura limpa, experiência do usuário (UX) e integração de sistemas escaláveis.",
  stats: [
    { label: "Projetos Concluídos", value: "15+" },
    { label: "Tecnologias Dominadas", value: "18+" },
    { label: "Anos de Estudo & Prática", value: "3+" },
    { label: "APIs Integradas", value: "20+" },
  ],
  skills: [
    { category: "Front-end", items: ["React.js", "Next.js 14", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind / CSS Modules"] },
    { category: "Back-end & APIs", items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Java / Spring Boot", "Python"] },
    { category: "Banco de Dados & Cloud", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Vercel", "Docker"] },
    { category: "Ferramentas & Métodos", items: ["Git & GitHub", "Figma", "Scrum / Kanban", "Clean Architecture", "CI/CD", "Automated Testing"] }
  ],
  academic: [
    {
      id: 1,
      degree: "Graduação em Sistemas para Internet / Ciência da Computação",
      institution: "Universidade Católica de Pernambuco (UNICAP)",
      period: "2023 - Presente",
      status: "Em andamento",
      description: "Foco em Engenharia de Software, Desenvolvimento Web Full Stack, Arquitetura de Sistemas, Estrutura de Dados, Banco de Dados e Computação em Nuvem.",
      highlights: [
        "Desenvolvimento de aplicações SPA e SSR utilizando React e Next.js",
        "Projetos integradores com foco em resolução de problemas reais da comunidade",
        "Monitoria e participação ativa em grupos de estudo de programação web e mobile"
      ]
    },
    {
      id: 2,
      degree: "Formação Intensiva Full Stack Web Development",
      institution: "Rocketseat / Alura Tech",
      period: "2022 - 2023",
      status: "Concluído",
      description: "Especialização prática na stack JavaScript moderna: React, Next.js, Node.js, TypeScript, testes automatizados e deploy contínuo.",
      highlights: [
        "Mais de 400 horas de prática em projetos front-end e back-end",
        "Domínio de React Hooks, Context API, Server Components e consumo de APIs REST",
        "Certificação em Acessibilidade Web e Performance (Core Web Vitals)"
      ]
    },
    {
      id: 3,
      degree: "Ensino Médio Técnico / Base em Tecnologia da Informação",
      institution: "Instituição de Ensino Técnico",
      period: "2019 - 2021",
      status: "Concluído",
      description: "Introdução à lógica de programação, algoritmos, redes de computadores, manutenção de sistemas e desenvolvimento web básico.",
      highlights: [
        "Destaque em olimpíadas de lógica e feiras de ciências e tecnologia",
        "Primeiro contato com HTML, CSS, JavaScript e bancos de dados relacionais"
      ]
    }
  ],
  professional: [
    {
      id: 1,
      role: "Desenvolvedor Front-end React / Next.js",
      company: "Tech Solutions & Digital Labs (Freelance / Projetos)",
      period: "Jan 2024 - Presente",
      type: "Remoto",
      description: "Desenvolvimento de aplicações web modernas, dashboards administrativos e landing pages de alta conversão utilizando React.js e Next.js.",
      achievements: [
        "Arquitetura e desenvolvimento de interfaces responsivas com CSS moderno (Grid, Flexbox, animações e Glassmorphism).",
        "Integração com múltiplas APIs RESTful externas (pagamentos, geolocalização, GitHub API e autenticação JWT).",
        "Otimização de SEO e performance alcançando pontuação 98+ no Google Lighthouse."
      ],
      tech: ["Next.js", "React", "JavaScript", "CSS3", "REST API", "Vercel"]
    },
    {
      id: 2,
      role: "Estagiário em Desenvolvimento Web Full Stack",
      company: "InovaSoft Sistemas",
      period: "Mar 2023 - Dez 2023",
      type: "Híbrido - Recife, PE",
      description: "Atuação no manutenção evolutiva e criação de novos módulos para sistemas de gestão empresarial na web.",
      achievements: [
        "Criação de componentes reutilizáveis em React, reduzindo o tempo de desenvolvimento de novas telas em 35%.",
        "Consumo e documentação de rotas de API utilizando Swagger e Postman.",
        "Participação ativa em cerimônias ágeis (Daily, Sprint Planning, Review e Retrospectiva) com controle de versão via Git Flow."
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Git", "Scrum"]
    },
    {
      id: 3,
      role: "Monitor de Lógica de Programação e Desenvolvimento Web",
      company: "Laboratório Acadêmico de Tecnologia",
      period: "Ago 2022 - Fev 2023",
      type: "Presencial",
      description: "Auxílio a estudantes iniciantes nas disciplinas de algoritmos, estrutura de dados e desenvolvimento front-end.",
      achievements: [
        "Mentoria técnica para mais de 40 alunos em HTML5, CSS3, JavaScript e Git.",
        "Elaboração de materiais práticos e desafios de código semanais."
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Algoritmos", "Git & GitHub"]
    }
  ],
  featuredProjects: [
    {
      id: "proj-1",
      title: "Portfólio & Currículo Interativo Next.js",
      description: "Aplicação completa com design Glassmorphism, múltiplas rotas, integração em tempo real com a API do GitHub, API de Clima (Open-Meteo) e API de Citações.",
      tech: ["Next.js 14", "React 18", "CSS Moderno", "GitHub REST API", "Lucide Icons"],
      githubUrl: "https://github.com/micaelbarros/Portif-lio-React",
      liveUrl: "https://portif-lio-react.vercel.app",
      featured: true
    },
    {
      id: "proj-2",
      title: "FinTrack - Dashboard Financeiro",
      description: "Sistema de controle de finanças pessoais com gráficos interativos, categorização de despesas, metas mensais e exportação de relatórios.",
      tech: ["React", "TypeScript", "CSS Modules", "Chart.js", "LocalStorage API"],
      githubUrl: "https://github.com/micaelbarros",
      liveUrl: "https://github.com/micaelbarros",
      featured: true
    },
    {
      id: "proj-3",
      title: "DevTasker - Kanban & Produtividade",
      description: "Gerenciador de tarefas estilo Kanban com drag-and-drop, filtros por prioridade, cronômetro Pomodoro integrado e sincronização em nuvem.",
      tech: ["Next.js", "React Hooks", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/micaelbarros",
      liveUrl: "https://github.com/micaelbarros",
      featured: false
    }
  ],
  appTechnologies: [
    {
      name: "React 18 (react & react-dom)",
      category: "Biblioteca UI Core",
      version: "^18.3.1",
      description: "Utilizado para construção da interface baseada em componentes declarativos, gerenciamento de estado com Hooks (useState, useEffect, useMemo) e renderização eficiente do DOM."
    },
    {
      name: "Next.js 14 (App Router)",
      category: "Framework Full Stack React",
      version: "^14.2.15",
      description: "Framework oficial recomendado pelo React. Utilizado para roteamento baseado em arquivos (App Router), otimização automática de fontes (next/font), links com prefetching (next/link) e deploy nativo na Vercel."
    },
    {
      name: "CSS3 Moderno & Custom Properties",
      category: "Estilização & Design System",
      version: "CSS3 / variáveis nativas",
      description: "Arquitetura CSS autoral avançada com variáveis globais, Glassmorphism (backdrop-filter), CSS Grid e Flexbox responsivos, gradientes dinâmicos, micro-interações e animações @keyframes fluidas."
    },
    {
      name: "Lucide React (lucide-react)",
      category: "Módulo de Iconografia",
      version: "^0.460.0",
      description: "Biblioteca de ícones vetoriais SVG leves, consistentes e customizáveis utilizada em toda a navegação, cards de experiência e indicadores de API."
    },
    {
      name: "GitHub REST API v3",
      category: "Integração de API Externa #1",
      version: "api.github.com",
      description: "Consumida via Fetch API assíncrono para buscar dados reais do perfil do desenvolvedor e listar dinamicamente seus repositórios públicos na página de Projetos Desenvolvidos."
    },
    {
      name: "DummyJSON Tech Quotes & Open-Meteo API",
      category: "Integração de API Externa #2 e #3",
      version: "REST JSON",
      description: "Integradas para exibir citações inspiradoras de tecnologia/programação sob demanda e condições climáticas em tempo real da cidade do desenvolvedor (Recife, PE)."
    }
  ]
};
