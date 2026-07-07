// Bilingual content for Ahmed Belhareth's portfolio.
// Source of truth: Ahmed_Belhareth_CV_FR.pdf (2026).

export const content = {
  meta: {
    fr: {
      name: 'Ahmed Belhareth',
      role: 'Senior Software Engineer',
      specialty: 'Data, IA & Agents',
      cv: '/Ahmed-Belhareth-CV-FR.pdf',
    },
    en: {
      name: 'Ahmed Belhareth',
      role: 'Senior Software Engineer',
      specialty: 'Data, AI & Agents',
      cv: '/Ahmed-Belhareth-CV-EN.pdf',
    },
  },

  nav: {
    fr: [
      { id: 'about', label: 'Profil' },
      { id: 'skills', label: 'Compétences' },
      { id: 'experience', label: 'Expérience' },
      { id: 'projects', label: 'Projets' },
      { id: 'education', label: 'Formation' },
      { id: 'contact', label: 'Contact' },
    ],
    en: [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  hero: {
    fr: {
      greeting: 'Bonjour, je suis',
      tagline:
        "Je modernise des systèmes critiques legacy grâce à l'IA — orchestration d'agents, Prompt Engineering et ingénierie full-stack.",
      cta1: 'Me contacter',
      cta2: 'Télécharger le CV',
      scroll: 'Découvrir',
      badges: ['Linedata', 'IA-Native', 'AI Ambassador'],
    },
    en: {
      greeting: "Hi, I'm",
      tagline:
        'I modernize critical legacy systems with AI — agent orchestration, Prompt Engineering and full-stack engineering.',
      cta1: 'Get in touch',
      cta2: 'Download résumé',
      scroll: 'Explore',
      badges: ['Linedata', 'AI-Native', 'AI Ambassador'],
    },
  },

  // Headline metrics
  stats: {
    fr: [
      { value: '3+', label: "ans d'expérience" },
      { value: '12×', label: 'vélocité de migration IA' },
      { value: '35', label: 'écrans migrés en 3 mois' },
      { value: '4', label: 'environnements gérés' },
    ],
    en: [
      { value: '3+', label: 'years of experience' },
      { value: '12×', label: 'AI migration velocity' },
      { value: '35', label: 'screens migrated in 3 months' },
      { value: '4', label: 'environments managed' },
    ],
  },

  about: {
    fr: {
      title: 'Profil',
      lead: 'Ingénieur logiciel Senior chez Linedata, spécialisé en Data, IA & Agents.',
      body: [
        "3 ans d'expérience sur un système critique de diffusion de données financières. Autonome sur l'ensemble du cycle de livraison — développement, test, pré-production et production.",
        "Expert en Prompt Engineering et orchestration d'agents IA (Claude Code, Claude Opus, Kiro, MCP) pour la modernisation de systèmes legacy et le développement d'applications complètes (Java, Spring Boot, Angular, React).",
      ],
      highlights: [
        'Promu Senior Software Engineer — évaluation annuelle classée excellente',
        'Prise en charge autonome de la production critique depuis 1,5 an',
        'AI Ambassador — programme Linedata de 40 personnes, formations IA hebdomadaires',
      ],
    },
    en: {
      title: 'About',
      lead: 'Senior Software Engineer at Linedata, specialized in Data, AI & Agents.',
      body: [
        '3 years of experience on a mission-critical financial data distribution system. Fully autonomous across the delivery cycle — development, testing, pre-production and production.',
        'Expert in Prompt Engineering and AI agent orchestration (Claude Code, Claude Opus, Kiro, MCP) to modernize legacy systems and build complete applications (Java, Spring Boot, Angular, React).',
      ],
      highlights: [
        'Promoted to Senior Software Engineer — annual review rated excellent',
        'Autonomous ownership of critical production for 1.5 years',
        'AI Ambassador — 40-person Linedata program, weekly AI training sessions',
      ],
    },
  },

  skills: {
    fr: {
      title: 'Compétences techniques',
      groups: [
        {
          name: 'Langages',
          icon: 'Code2',
          items: ['Java', 'Python', 'C#', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'PL/SQL', 'Unix/Shell (ksh, csh, sh)', 'AWK'],
        },
        {
          name: 'Frameworks & Web',
          icon: 'Layers',
          items: ['Spring Boot', 'Hibernate', 'Maven', 'Angular', 'React JS', 'REST', 'HTML', 'CSS'],
        },
        {
          name: 'IA & Agents',
          icon: 'Bot',
          items: ['Claude Code', 'Claude Opus', 'Kiro (AWS Agentic IDE)', 'MCP', 'Prompt Engineering', 'LangChain', 'RAG'],
        },
        {
          name: 'DevOps & Cloud',
          icon: 'Cloud',
          items: ['Docker', 'Jenkins', 'Prometheus', 'Grafana', 'AWS SageMaker', 'CI/CD (GitHub Actions)'],
        },
        {
          name: 'Bases de données',
          icon: 'Database',
          items: ['Sybase', 'Oracle', 'MySQL', 'Cassandra'],
        },
        {
          name: 'Tests & Qualité',
          icon: 'ShieldCheck',
          items: ['JUnit', 'Mockito', 'SonarQube', 'Postman'],
        },
        {
          name: 'Méthodologies & Outils',
          icon: 'Workflow',
          items: ['Agile', 'Scrum', 'UML', 'Git', 'Jira', 'Trello', 'IntelliJ', 'VS Code', 'Eclipse', 'Kiro'],
        },
      ],
    },
    en: {
      title: 'Technical skills',
      groups: [
        {
          name: 'Languages',
          icon: 'Code2',
          items: ['Java', 'Python', 'C#', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'PL/SQL', 'Unix/Shell (ksh, csh, sh)', 'AWK'],
        },
        {
          name: 'Frameworks & Web',
          icon: 'Layers',
          items: ['Spring Boot', 'Hibernate', 'Maven', 'Angular', 'React JS', 'REST', 'HTML', 'CSS'],
        },
        {
          name: 'AI & Agents',
          icon: 'Bot',
          items: ['Claude Code', 'Claude Opus', 'Kiro (AWS Agentic IDE)', 'MCP', 'Prompt Engineering', 'LangChain', 'RAG'],
        },
        {
          name: 'DevOps & Cloud',
          icon: 'Cloud',
          items: ['Docker', 'Jenkins', 'Prometheus', 'Grafana', 'AWS SageMaker', 'CI/CD (GitHub Actions)'],
        },
        {
          name: 'Databases',
          icon: 'Database',
          items: ['Sybase', 'Oracle', 'MySQL', 'Cassandra'],
        },
        {
          name: 'Testing & Quality',
          icon: 'ShieldCheck',
          items: ['JUnit', 'Mockito', 'SonarQube', 'Postman'],
        },
        {
          name: 'Methods & Tools',
          icon: 'Workflow',
          items: ['Agile', 'Scrum', 'UML', 'Git', 'Jira', 'Trello', 'IntelliJ', 'VS Code', 'Eclipse', 'Kiro'],
        },
      ],
    },
  },

  experience: {
    fr: {
      title: 'Expériences professionnelles',
      jobs: [
        {
          role: 'Senior Software Engineer — Projet NILE',
          company: 'Linedata',
          period: '09/2023 – Présent',
          current: true,
          summary:
            "Plateforme critique de diffusion de données financières (cours boursiers, valeurs, émetteurs, MIC/CIC, Solvency II, NACE, LEI, notations Moody's et S&P) alimentant le produit Chorus pour le secteur de l'assurance.",
          points: [
            'Promu Senior Software Engineer pour la prise en charge autonome de la production critique ; évaluation annuelle classée excellente.',
            'Modernisation IA-Native : pilotage de la migration du legacy NILE (UNIVAL 2.0) avec Kiro et Claude Opus — vélocité 12× supérieure (~35 écrans migrés en 3 mois contre ~36 mois en approche historique).',
            'Conception et développement d\'un serveur MCP sur mesure exposant le contexte du codebase legacy (C, Shell, PowerBuilder, procédures Sybase) à un agent IA, accélérant l\'analyse d\'impact et la génération de code.',
            'Prise en charge autonome de la production depuis 1,5 an : urgences quotidiennes, investigations temps réel, diagnostic et résolution rapide sur environnement à haute criticité.',
            'Administration complète du cycle de livraison sur 4 environnements via des outils Python développés en interne.',
            'Maintenance de chaînes batch complexes (crontab) : scripts Shell, SQL dynamique, AWK, procédures stockées Sybase 15.',
            'Migration de la diffusion temps réel des données boursières du C vers Java.',
            'POC de modernisation de l\'interface APT (PowerBuilder/Sybase) vers Spring Boot/Angular ; encadrement d\'un stagiaire.',
            'AI Ambassador : animation de formations IA hebdomadaires (programme de 40 personnes).',
          ],
          tags: ['Kiro', 'Claude Opus', 'MCP', 'Java 17', 'Spring Boot', 'Sybase', 'Shell'],
        },
        {
          role: "Projet de Fin d'Études — Développement Web",
          company: 'Neocortex',
          period: '02/2023 – 05/2023',
          summary:
            'Application web de gestion des utilisateurs, postes et classements, avec gestion des rôles et permissions.',
          points: [
            'Gestion des rôles et permissions via Spring Security.',
            'Développement full-stack et intégration de plusieurs API.',
          ],
          tags: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security'],
        },
        {
          role: "Stage d'été — Développement Web",
          company: 'Neocortex',
          period: '06/2022 – 09/2022',
          summary:
            "Tableau de bord d'administration pour la gestion des commandes, menus et clients d'un restaurant.",
          points: ['Dashboard admin complet.', 'Authentification et base de données temps réel.'],
          tags: ['Angular', 'Firebase', 'Auth'],
        },
      ],
    },
    en: {
      title: 'Professional experience',
      jobs: [
        {
          role: 'Senior Software Engineer — NILE Project',
          company: 'Linedata',
          period: '09/2023 – Present',
          current: true,
          summary:
            "Mission-critical financial data distribution platform (market prices, securities, issuers, MIC/CIC, Solvency II, NACE, LEI, Moody's and S&P ratings) powering the Chorus product for the insurance sector.",
          points: [
            'Promoted to Senior Software Engineer for autonomous ownership of critical production; annual review rated excellent.',
            'AI-Native modernization: led the migration of legacy NILE (UNIVAL 2.0) with Kiro and Claude Opus — 12× higher velocity (~35 screens migrated in 3 months vs ~36 months historically).',
            'Designed and built a custom MCP server exposing the legacy codebase context (C, Shell, PowerBuilder, Sybase procedures) to an AI agent, accelerating impact analysis and code generation.',
            'Autonomous production ownership for 1.5 years: daily incidents, real-time investigations, fast diagnosis and resolution on a high-criticality environment.',
            'Full delivery-cycle administration across 4 environments using in-house Python tooling.',
            'Maintenance of complex batch chains (crontab): Shell scripts, dynamic SQL, AWK, Sybase 15 stored procedures.',
            'Migrated real-time market-data distribution from C to Java.',
            'PoC modernizing the APT interface (PowerBuilder/Sybase) to Spring Boot/Angular; mentored an intern.',
            'AI Ambassador: ran weekly AI training sessions (40-person program).',
          ],
          tags: ['Kiro', 'Claude Opus', 'MCP', 'Java 17', 'Spring Boot', 'Sybase', 'Shell'],
        },
        {
          role: 'Final-Year Project — Web Development',
          company: 'Neocortex',
          period: '02/2023 – 05/2023',
          summary:
            'Web application for managing users, positions and rankings, with roles and permissions.',
          points: [
            'Role and permission management via Spring Security.',
            'Full-stack development and integration of several APIs.',
          ],
          tags: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security'],
        },
        {
          role: 'Summer Internship — Web Development',
          company: 'Neocortex',
          period: '06/2022 – 09/2022',
          summary: 'Admin dashboard for managing a restaurant\'s orders, menus and customers.',
          points: ['Complete admin dashboard.', 'Authentication and real-time database.'],
          tags: ['Angular', 'Firebase', 'Auth'],
        },
      ],
    },
  },

  projects: {
    fr: {
      title: 'Projets',
      items: [
        {
          name: 'AfraWash',
          kind: 'Plateforme SaaS',
          url: 'https://afrawash.com',
          desc: "Conception et réalisation de A à Z d'une plateforme marketplace de services piloté par Claude Code : architecture full-stack, réservation à domicile et en station, dashboards de gestion, marketplace B2B, conversion mobile.",
          tags: ['React', 'Expo', 'Supabase', 'AWS', 'Claude Code'],
          featured: true,
        },
        {
          name: "Classification d'images",
          kind: 'Deep Learning',
          desc: 'Transfer Learning (ResNet18) sur CIFAR-10 et STL-10.',
          tags: ['Python', 'PyTorch', 'ResNet18'],
        },
        {
          name: 'Pipeline MLOps',
          kind: 'CI/CD ML',
          desc: "CI/CD automatisé pour l'entraînement, le test et le déploiement de modèles Deep Learning.",
          tags: ['GitHub Actions', 'Docker', 'MLOps'],
        },
        {
          name: 'NLP & RAG',
          kind: 'IA / LLM',
          desc: 'Système de Retrieval-Augmented Generation pour la recherche et la synthèse documentaire.',
          tags: ['Python', 'LangChain', 'RAG'],
        },
        {
          name: 'Big Data Analytics',
          kind: 'Data Engineering',
          desc: 'Pipeline ETL sur données massives et visualisation interactive.',
          tags: ['Spark', 'Cassandra', 'Power BI'],
        },
      ],
    },
    en: {
      title: 'Projects',
      items: [
        {
          name: 'AfraWash',
          kind: 'SaaS Platform',
          url: 'https://afrawash.com',
          desc: 'End-to-end design and build of a services marketplace platform, driven with Claude Code: full-stack architecture, at-home and on-site booking, management dashboards, B2B marketplace, mobile conversion.',
          tags: ['React', 'Expo', 'Supabase', 'AWS', 'Claude Code'],
          featured: true,
        },
        {
          name: 'Image Classification',
          kind: 'Deep Learning',
          desc: 'Transfer Learning (ResNet18) on CIFAR-10 and STL-10.',
          tags: ['Python', 'PyTorch', 'ResNet18'],
        },
        {
          name: 'MLOps Pipeline',
          kind: 'ML CI/CD',
          desc: 'Automated CI/CD for training, testing and deploying Deep Learning models.',
          tags: ['GitHub Actions', 'Docker', 'MLOps'],
        },
        {
          name: 'NLP & RAG',
          kind: 'AI / LLM',
          desc: 'Retrieval-Augmented Generation system for document search and synthesis.',
          tags: ['Python', 'LangChain', 'RAG'],
        },
        {
          name: 'Big Data Analytics',
          kind: 'Data Engineering',
          desc: 'ETL pipeline over massive datasets with interactive visualization.',
          tags: ['Spark', 'Cassandra', 'Power BI'],
        },
      ],
    },
  },

  education: {
    fr: {
      title: 'Formation',
      items: [
        {
          degree: 'Cycle Ingénieur en Informatique',
          school: 'Private College of Engineering & Technology',
          year: '2026',
        },
        {
          degree: 'Licence en Sciences Informatiques — Génie Logiciel',
          school: "Institut Supérieur d'Informatique",
          year: '2023',
        },
        {
          degree: 'Baccalauréat en Informatique',
          school: 'Lycée Khaznadar',
          year: '2019',
        },
      ],
    },
    en: {
      title: 'Education',
      items: [
        {
          degree: 'Computer Engineering Degree',
          school: 'Private College of Engineering & Technology',
          year: '2026',
        },
        {
          degree: 'Bachelor in Computer Science — Software Engineering',
          school: 'Higher Institute of Computer Science',
          year: '2023',
        },
        {
          degree: 'Baccalaureate in Computer Science',
          school: 'Khaznadar High School',
          year: '2019',
        },
      ],
    },
  },

  languages: {
    fr: {
      title: 'Langues',
      items: [
        { name: 'Arabe', level: 'Langue maternelle', pct: 100 },
        { name: 'Français', level: 'Courant', pct: 90 },
        { name: 'Anglais', level: 'Intermédiaire', pct: 65 },
      ],
    },
    en: {
      title: 'Languages',
      items: [
        { name: 'Arabic', level: 'Native', pct: 100 },
        { name: 'French', level: 'Fluent', pct: 90 },
        { name: 'English', level: 'Intermediate', pct: 65 },
      ],
    },
  },

  associative: {
    fr: {
      title: 'Vie associative & Leadership',
      items: [
        { org: 'Codex Junior Entreprise', role: 'Président', years: '2021–2022' },
        { org: 'Codex Junior Entreprise', role: 'Comité de Conseil', years: '2022–2023' },
        { org: 'JCI Khaznadar', role: 'Président Fondateur', years: '2017' },
        { org: 'Interact Club Atlas', role: 'Vice-Président', years: '2016' },
        { org: 'Radio Maison de Jeunes', role: 'Membre', years: '2018' },
      ],
    },
    en: {
      title: 'Leadership & Community',
      items: [
        { org: 'Codex Junior Entreprise', role: 'President', years: '2021–2022' },
        { org: 'Codex Junior Entreprise', role: 'Advisory Board', years: '2022–2023' },
        { org: 'JCI Khaznadar', role: 'Founding President', years: '2017' },
        { org: 'Interact Club Atlas', role: 'Vice-President', years: '2016' },
        { org: 'Youth House Radio', role: 'Member', years: '2018' },
      ],
    },
  },

  contact: {
    fr: {
      title: 'Travaillons ensemble',
      lead: "Vous avez un projet, un poste ou une idée à discuter ? Je suis ouvert aux opportunités autour de l'IA, la data et l'ingénierie logicielle.",
      cta: 'Envoyer un e-mail',
    },
    en: {
      title: "Let's work together",
      lead: 'Have a project, a role or an idea to discuss? I am open to opportunities around AI, data and software engineering.',
      cta: 'Send an email',
    },
  },

  footer: {
    fr: { rights: 'Tous droits réservés.', built: 'Conçu & développé avec React, Tailwind & Framer Motion.' },
    en: { rights: 'All rights reserved.', built: 'Designed & built with React, Tailwind & Framer Motion.' },
  },

  // Non-translated constants
  info: {
    email: 'ahmedbelhareth04@gmail.com',
    phone: '+216 54 504 138',
    phoneHref: '+21654504138',
    linkedin: 'https://linkedin.com/in/ahmed-belhareth-77aba01ba',
    github: 'https://github.com/ahmedbelhareth',
    portfolio: 'ahmed-belhareth-cv.netlify.app',
    location: { fr: 'Grand Tunis, Tunisie', en: 'Greater Tunis, Tunisia' },
  },
}
