// data/experience.js
import { GoBriefcase, GoMortarBoard } from 'react-icons/go';
import { GiArchiveResearch  } from 'react-icons/gi';


export const experience = [
  /* ──────────────────────────────────────────────── */
  {
    title: 'Software Engineer',
    org: 'Wissen Technology (Client – Macquarie Global)',
    date: 'Aug 2025 – Present',
    color: '#f46fa0',
    icon: <GoBriefcase />,
    summary: [
      'Contributed to front-office analytics platforms supporting 100+ daily users by designing backend services for financial risk analysis and regulatory reporting systems.',
      'Designed and enhanced services for trade exposure aggregation and capital calculations, processing millions of records daily and improving reporting accuracy.',
      'Developed and optimized business logic for financial capital computation and risk aggregation workflows, reducing report generation time by 25%+.',
      'Implemented scheduled batch processing pipelines handling 500K+ financial records per day, ensuring timely data ingestion, transformation, and alerting.',
      'Participated in migration of 10+ legacy services to cloud-ready microservices, improving deployment efficiency and system maintainability.',
      'Architected and implemented an AI-driven data quality framework that automated validation of 100K+ scraped records, reducing manual review effort by 70%.'
    ]
  },

  {
    title: 'AI Hackathon – ScrapGuard DQ',
    org: 'Macquarie AI Hackathon',
    date: '2026',
    color: '#7670ff',
    icon: <GiArchiveResearch />,
    summary: [
      'Built ScrapGuard, an AI-powered Data Quality platform that validates scraped datasets using deterministic rules, statistical anomaly detection, and a LangGraph-based AI agent with RAG.',
      'Developed a Streamlit dashboard that automates anomaly detection, investigation, and explainable data quality analysis.',
      'Tech Stack: Python • Streamlit • LangGraph • Claude Sonnet • RAG • Pandas • DuckDuckGo API.'
    ]
  },

  {
    title: 'Personal Project — Open Source',
    org: 'DebugAI (debuai)',
    date: 'Jan 2026 – Present',
    color: '#49d179',
    icon: <GiArchiveResearch />,
    summary: [
      'Built and published an AI-powered CLI tool (<code>pip install debuai</code>) that parses stack traces across 5 languages (Python, Java, Go, C#, Node.js) and delivers instant root cause analysis, fix suggestions, and confidence scoring.',
      'Designed a multi-provider AI backend supporting OpenAI, Anthropic, and NVIDIA with automatic key detection and zero vendor lock-in.',
      'Architected a modular parser registry with language auto-detection, structured JSON output mode for CI/CD pipeline integration, and GitHub issue search to surface known fixes automatically.',
      'Shipped with 80+ unit tests, GitHub Actions CI/CD, and full PyPI distribution.'
    ],
    links: [
      { href: 'https://pypi.org/project/debuai/', label: 'PyPI' },
      { href: 'https://github.com/kanhaiya-bhayana/debuai', label: 'GitHub' }
    ]
  },

  {
    title: 'Software Engineer',
    org: 'Incedo',
    date: 'Jul 2023 – Jul 2025',
    color: '#f46fa0',                 // pink accent
    icon: <GoBriefcase />,
    summary: [
      'Developed <b>scalable microservices</b> with Spring Boot, Java & PostgreSQL, significantly boosting performance.',
      'Enhanced distributed caching via </b>Redis</b> → ≈ 40 % higher throughput.',
      'Applied </b>Clean Architecture</b> to improve maintainability and onboarding speed.',
      'Built a secure JWT service (RSA-256 + KID) that met enterprise-grade compliance.',
      'Extended the Business Assessment Tool (BAT):\n  Integrated Kafka → Azure Event Hub for real-time preference streams.\n  Co-ordinated live e-mail notifications with the legacy mailer.',
      'Mentored junior devs and resolved complex prod issues, fostering a collaborative culture.'
    ]
  },

  /* ────────────────────Research paper────────────────────────── */
  {
    title: 'Adverse Weather Object Detection Using Customized YOLO Models',
    org: 'Springer - Conference paper',
    date: 'First Online: 31 January 2025',
    color: '#7670ff',                 // purple accent
    icon: <GiArchiveResearch />,
    url: 'https://link.springer.com/chapter/10.1007/978-981-97-9112-5_7',
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },



  /* ──────────────────────────────────────────────── */
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    // org: 'Microsoft',
    date: 'Jul 2023 – Dec 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },

  /* ──────────────────────────────────────────────── */
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    // org: 'Microsoft',
    date: 'May 2023 – Jun 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },
  /* ──────────────────────────────────────────────── */
  {
    title: 'Software Engineer Trainee',
    org: 'Incedo',
    date: 'Jan 2023 – Jun 2023',
    color: '#7670ff',                 // purple accent
    icon: <GoBriefcase />,
    summary: [
      'Completed an intensive 1.5-month track in Spring Boot, Java & React.',
      'Introduced Clean Architecture + Repository Pattern to new modules.',
      'Led a squad of 7 that shipped 4 new features in 1 month; presented to the CDO.',
      'Owned sprint planning, code reviews & API integrations → 30 % rise in engagement.'
    ]
  },

  /* ──────────────────────────────────────────────── */
  {
    title: 'B.E. Computer Engineering',
    org: 'Thapar Institute of Engineering & Technology',
    date: 'Aug 2019 – May 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  }
];
