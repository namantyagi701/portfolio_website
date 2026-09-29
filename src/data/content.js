// Content source: Naman Tyagi's verified resume
// Single source of truth for portfolio data

export const personalInfo = {
  name: "NAMAN TYAGI",
  title: "FULL-STACK & AI SYSTEMS DEVELOPER",
  headline: "ARCHITECTING ROBUST WEB APPS & CODE INTELLIGENCE",
  shortRole: "SOFTWARE DEVELOPER",
  bio: "Computer Science undergraduate specializing in high-performance full-stack web applications, AST-driven code intelligence pipelines, and scalable backend infrastructure. Experienced in PostgreSQL vector search (pgvector), asynchronous queues (BullMQ/Redis), and algorithmic problem solving with 500+ DSA problems cleared.",
  location: "GHAZIABAD / DELHI NCR, INDIA",
  availability: "AVAILABLE FOR ROLES & FREELANCE",
  estYear: "EST. 2024",
  email: "namantyagi.30.xa@gmail.com",
  phone: "+91 7017074045",
  github: "https://github.com/namantyagi701",
  linkedin: "https://www.linkedin.com/in/naman-tyagi-503215329/",
  leetcode: "https://leetcode.com/u/namantyagi98665/",
  resumePdf: "/naman_tyagi_resume.pdf",
};

export const heroCredibility = {
  metric: "500+",
  label: "DSA PROBLEMS SOLVED",
  subtext: "LEETCODE MAX RATING 1654 • GEEKSFORGEEKS",
  badgeText: "SMART INDIA HACKATHON WINNER (DEPT. ROUND)",
};

export const techSummaryCell = {
  title: "5+ CORE PROJECTS",
  subtitle: "500+ PROBLEMS SOLVED",
  description: "Production web applications, AST code intelligence, and algorithmic system design.",
};

export const techStack = [
  { name: "PostgreSQL", category: "Database & pgvector", icon: "Database" },
  { name: "Node.js", category: "Runtime", icon: "Server" },
  { name: "Express.js", category: "Backend Framework", icon: "Cpu" },
  { name: "React.js", category: "Frontend", icon: "Layers" },
  { name: "Redis & BullMQ", category: "Async Job Queue", icon: "Zap" },
  { name: "MongoDB", category: "Document DB", icon: "Boxes" },
  { name: "Tree-sitter", category: "AST Code Intelligence", icon: "Code2" },
  { name: "C++", category: "DSA & Systems", icon: "Terminal" },
  { name: "Prisma ORM", category: "ORM & Migrations", icon: "Workflow" },
  { name: "Tailwind CSS", category: "Modern Styling", icon: "Palette" },
  { name: "Docker", category: "Containerization", icon: "Container" },
  { name: "Git & GitHub", category: "VCS & CI/CD", icon: "GitBranch" },
];

export const projects = [
  {
    id: "gitrag",
    title: "GITRAG",
    category: "AI-POWERED PR IMPACT ANALYSIS SAAS",
    year: "2026",
    status: "ACTIVE DEVELOPMENT",
    shortDescription:
      "SaaS tool analyzing GitHub pull requests via AST parsing and dependency graph traversal to predict downstream code breakage before merge, auto-commenting findings on PRs.",
    fullDescription:
      "GitRAG is an AI-powered developer tooling engine architected to eliminate merge anxiety. It connects to GitHub repositories via OAuth 2.0 and processes webhook events through an asynchronous BullMQ/Redis worker pipeline. Using Tree-sitter, it parses codebases into structured Abstract Syntax Trees and recursively traverses call dependencies up to N hops deep in PostgreSQL. Combines BM25 lexical search with pgvector cosine similarity to pinpoint exact downstream breakages and posts comprehensive impact reports directly onto pull requests.",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Tree-sitter",
      "BullMQ",
      "Redis",
      "GitHub API",
    ],
    highlights: [
      "Hybrid retrieval combining PostgreSQL BM25 full-text search with pgvector cosine similarity",
      "AST code intelligence using Tree-sitter to build call-dependency graphs with recursive CTEs",
      "Async job pipeline with BullMQ & Redis decoupling webhook ingestion from heavy embeddings computation",
      "GitHub OAuth 2.0 self-serve repository onboarding and real-time webhook status tracker",
    ],
    liveUrl: "[ADD: live demo link]",
    githubUrl: "https://github.com/namantyagi701/gitRag",
    tag: "AI CODE INTELLIGENCE",
    accentColor: "#d90f1e",
  },
  {
    id: "pmsss",
    title: "PMSSS SCHOLARSHIP PLATFORM",
    category: "GOVTECH WORKFLOW & DISBURSEMENT ENGINE",
    year: "2026",
    status: "ACTIVE PRODUCTION",
    shortDescription:
      "Full-stack scholarship platform digitizing application, verification, and disbursement workflows with multi-role portals and a 6-stage lifecycle engine.",
    fullDescription:
      "A full-stack enterprise scholarship management platform designed to digitize end-to-end scholarship distribution for PMSSS. Features multi-tier Role-Based Access Control (RBAC) with dedicated secure portals for Students, SAG Bureau, Finance Bureau, and Administrators. Architected a multi-stage workflow engine supporting deterministic application states (Draft, Submitted, Under Verification, Verified, Rejected, and Disbursed) with OTP-based verification, password recovery, and Cloudinary document archiving.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "Cloudinary",
      "Render",
    ],
    highlights: [
      "Role-Based Access Control (RBAC) with dedicated portals for Students, SAG Bureau, Finance Bureau, and Admins",
      "Multi-stage workflow state machine (Draft, Submitted, Under Verification, Verified, Rejected, Disbursed)",
      "Building a student management system to save drafts, upload documents, and track live status updates",
      "OTP-based account verification and secure password recovery mechanisms to protect applicant accounts",
    ],
    liveUrl: "https://scholarship-disbursement-system.vercel.app/",
    githubUrl: "https://github.com/namantyagi701",
    tag: "GOVTECH & WORKFLOW",
    accentColor: "#d90f1e",
  },
  {
    id: "algoarena",
    title: "ALGOARENA",
    category: "TECHNICAL INTERVIEW PLATFORM",
    year: "2026",
    status: "LIVE PRODUCTION",
    shortDescription:
      "Full-stack technical interview platform with dual-layer code execution (visible tests + hidden server evaluation) and real-time WebRTC video/chat.",
    fullDescription:
      "AlgoArena is a real-time collaborative coding assessment environment built to streamline engineering hiring. Candidates execute code in multi-language environments powered by Wandbox API with instant feedback on public test cases, while hidden server-side test cases evaluate runtime efficiency and prevent leakages. Features seamless video calling and chat powered by Stream.io SDK, protected by custom Express RBAC middleware and JWTs in httpOnly cookies.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream.io SDK",
      "Wandbox API",
      "JWT (httpOnly)",
      "bcrypt",
    ],
    highlights: [
      "Dual-layer code execution preventing test case leakage with real-time candidate feedback",
      "Low-latency collaborative video calling and persistent chat via Stream.io SDK",
      "Secure Express API architecture with bcrypt hashing, httpOnly JWT cookies, and RBAC",
      "Admin assessment dashboard with automated scoring and session playback",
    ],
    liveUrl: "https://algo-arena-green.vercel.app/",
    githubUrl: "https://github.com/namantyagi701",
    tag: "COLLABORATIVE PLATFORM",
    accentColor: "#d90f1e",
  },
  {
    id: "threadly",
    title: "THREADLY",
    category: "E-COMMERCE & ADMIN CMS ENGINE",
    year: "2025",
    status: "LIVE PRODUCTION",
    shortDescription:
      "Full-stack e-commerce application with real-time cart state, multi-tier product filtering, Stripe checkout sessions, and Cloudinary media admin panel.",
    fullDescription:
      "Threadly delivers a modern high-conversion shopping experience backed by secure administration. Built with React Context API synchronized with MongoDB for cross-device cart persistence. Includes multi-attribute filtering, live search, and sorting. The custom admin suite enables inventory CRUD with Cloudinary multi-image uploads and server-side verified Stripe Checkout sessions.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Checkout",
      "Cloudinary",
      "Context API",
      "JWT Auth",
    ],
    highlights: [
      "Real-time cart state with server-synced persistence across customer browser sessions",
      "Multi-level faceted category/subcategory filtering, price range sorting, and instant search",
      "Stripe payment gateway integration with server-side webhook fulfillment",
      "Cloudinary-backed Admin Panel with image drag-and-drop and real-time inventory management",
    ],
    liveUrl: "https://ecommerce-app-lyart-alpha.vercel.app/",
    githubUrl: "https://github.com/namantyagi701",
    tag: "E-COMMERCE & CMS",
    accentColor: "#d90f1e",
  },
  {
    id: "auth-system",
    title: "AUTHENTICATION & RBAC ENGINE",
    category: "IDENTITY & ACCESS MANAGEMENT",
    year: "2025",
    status: "LIVE PRODUCTION",
    shortDescription:
      "Production-ready authentication system featuring JWT signup with email verification, token-based password reset links via Nodemailer, and route-level RBAC.",
    fullDescription:
      "A robust MERN-stack identity and access management system built for high security. Implements cryptographic password hashing using bcrypt, automated email verification flows via Nodemailer, and time-limited reset tokens for forgot-password workflows. Features token-validated protected routes and role-based access control middleware to prevent privilege escalation.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Nodemailer",
    ],
    highlights: [
      "Secure signup and login flows with email verification via JWT tokens and Nodemailer",
      "Forgot-password workflow using time-restricted, cryptographically signed token reset links",
      "Protected API routes and fine-grained RBAC with Bearer token validation middleware",
      "Salted and encrypted password hashing with bcrypt and resilient session lifecycle management",
    ],
    liveUrl: "https://mern-authentication-ten-inky.vercel.app/",
    githubUrl: "https://github.com/namantyagi701",
    tag: "AUTH & SECURITY",
    accentColor: "#d90f1e",
  },
];

export const stats = [
  {
    number: "500+",
    rawNumber: 500,
    suffix: "+",
    title: "DSA PROBLEMS SOLVED",
    description:
      "Mastery of Data Structures & Algorithms across LeetCode and GeeksforGeeks, focusing on graph algorithms, trees, DP, and system optimizations.",
    indicator: "LEETCODE & GFG",
  },
  {
    number: "1654",
    rawNumber: 1654,
    suffix: "",
    title: "LEETCODE MAX RATING",
    description:
      "Demonstrated competitive coding speed, algorithmic consistency, and precision problem-solving during weekly LeetCode contests.",
    indicator: "GLOBAL CONTESTS",
  },
  {
    number: "120+",
    rawNumber: 120,
    suffix: "+",
    title: "TEAMS OUTRANKED",
    description:
      "Departmental Winner at Smart India Hackathon (SIH) 2024 for the PMSSS scholarship platform backend with RBAC, OCR verification, and Render deployment.",
    indicator: "SIH DEPT. WINNER",
  },
  {
    number: "75.13%",
    rawNumber: 75.13,
    suffix: "%",
    title: "ACADEMIC AGGREGATE",
    description:
      "Bachelor of Technology in Computer Science at KIET Group of Institutions (Delhi NCR), maintaining high technical rigor across core CS fundamentals.",
    indicator: "KIET DELHI NCR",
  },
];

export const experienceEducation = [
  {
    period: "SEPT 2024 – PRESENT",
    title: "BACHELOR OF TECHNOLOGY — COMPUTER SCIENCE",
    organization: "KIET Group of Institutions, Delhi NCR",
    location: "Ghaziabad, India",
    grade: "75.13% Aggregate",
    type: "EDUCATION",
    bullets: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (C++), Database Management Systems, and Operating Systems.",
      "Developing high-impact developer tooling (GitRAG) and participating in departmental algorithmic competitions.",
    ],
  },
  {
    period: "SEPT 2024",
    title: "BACKEND DEVELOPER — SMART INDIA HACKATHON WINNER",
    organization: "Internal SIH (Departmental Winner out of 120+ Teams)",
    location: "Delhi NCR, India",
    grade: "Departmental Winner",
    type: "ACHIEVEMENT / HACKATHON",
    bullets: [
      "Selected as core Backend Developer for the PMSSS Scholarship Disbursement System out of 120+ competing engineering teams.",
      "Implemented role-based access control (RBAC), secure JWT authentication middleware, and OCR-based student document verification.",
      "Engineered automated workflows and successfully deployed production-ready microservices on Render.",
    ],
  },
  {
    period: "OCT 2025",
    title: "SQL (BASIC) CERTIFICATION",
    organization: "HackerRank Skill Certification",
    location: "Online / Verified",
    grade: "Cleared & Certified",
    type: "CERTIFICATION",
    bullets: [
      "Validated proficiency in relational database queries, multi-table joins, subqueries, group aggregations, and constraint management.",
    ],
  },
];

export const marqueeItems = [
  "HIRE ME",
  "LET'S TALK",
  "AVAILABLE FOR ROLES",
  "FULL-STACK DEVELOPER",
  "AI SYSTEMS & PGVECTOR",
  "AST CODE INTELLIGENCE",
  "500+ PROBLEMS SOLVED",
];

export const footerLinks = [
  { label: "HERO // 01", href: "#hero" },
  { label: "ABOUT // 02", href: "#about" },
  { label: "TECH STACK // 03", href: "#tech" },
  { label: "PROJECTS // 04", href: "#projects" },
  { label: "STATS // 05", href: "#stats" },
  { label: "EXPERIENCE // 06", href: "#experience" },
  { label: "RESUME [PDF]", href: "/naman_tyagi_resume.pdf", isExternal: true, isDownload: true },
];

export const socialLinks = [
  { name: "GITHUB", url: "https://github.com/namantyagi701", icon: "Github" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/naman-tyagi-503215329/", icon: "Linkedin" },
  { name: "LEETCODE", url: "https://leetcode.com/u/namantyagi98665/", icon: "Code2" },
  { name: "EMAIL", url: "mailto:namantyagi.30.xa@gmail.com", icon: "Mail" },
  { name: "PHONE", url: "tel:+917017074045", icon: "Phone" },
];
