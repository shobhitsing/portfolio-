export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  tags: string[]
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  description: string
  keyFeatures: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  badge?: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; level: string; iconName?: string }[]
}

export interface PersonalInfo {
  name: string
  title: string
  specialization: string
  statusBadge: string
  experience: string
  phone: string
  country: string
  email: string
  linkedin: string
  github: string
  location: string
  shortBio: string
  fullBio: string
  philosophyPoints: { title: string; description: string }[]
}

export const portfolioConfig = {
  personal: {
    name: "Shobhit Singh",
    title: "Senior Frontend Developer",
    specialization: "React.js • Next.js • TypeScript • Tailwind CSS",
    statusBadge: "Available for Freelance & Contract Roles (Worldwide)",
    experience: "6 Years Experience",
    phone: "+91 8368226635",
    country: "India",
    email: "sshobhit479@gmail.com",
    linkedin: "https://www.linkedin.com/in/shobhit-dhami-6b2b2017b/",
    github: "https://github.com/shobhitsing/",
    location: "India • Remote Worldwide",
    shortBio:
      "With 6 years of professional experience, I specialize in translating Figma designs into high-performance, pixel-perfect React and Next.js applications with clean TypeScript and modern Tailwind CSS.",
    fullBio:
      "With 6 years of dedicated frontend engineering experience based in India, I build reliable, responsive, and maintainable user interfaces for tech founders, product companies, and international agencies. I prioritize clean component architecture, fast delivery, and seamless cross-timezone async collaboration.",
    philosophyPoints: [
      {
        title: "Clean, Typed Codebases",
        description: "Zero guesswork with robust TypeScript types, modular components, and predictable state management.",
      },
      {
        title: "Pixel-Perfect Fidelity",
        description: "Translating every nuance of your Figma designs into fully responsive, accessible web interfaces.",
      },
      {
        title: "Performance & SEO Focused",
        description: "Optimizing bundle sizes, Core Web Vitals, semantic markup, and lighting-fast load speeds.",
      },
      {
        title: "Async & Transparent Collaboration",
        description: "Structured Git commits, regular Loom/screen demos, and clear communication aligned with global time zones.",
      },
    ],
  } as PersonalInfo,

  // Services International Clients Hire For
  services: [
    {
      id: "figma-to-code",
      title: "Figma to React / Next.js",
      shortDesc: "Pixel-perfect conversion of complex UI/UX designs into responsive, clean code.",
      description:
        "Transform your Figma or Adobe XD designs into modular, pixel-perfect React and Next.js components styled with Tailwind CSS, guaranteeing cross-device fidelity.",
      icon: "Figma",
      tags: ["Pixel-Perfect", "Tailwind CSS", "Semantic HTML", "Mobile-First"],
    },
    {
      id: "nextjs-development",
      title: "Next.js & React Web Apps",
      shortDesc: "Scalable frontend architectures with SSR, routing, and modern state management.",
      description:
        "Building fast, SEO-friendly web apps utilizing Next.js App Router, React 19, TypeScript, and clean API integrations tailored to your product specs.",
      icon: "Zap",
      tags: ["Next.js", "TypeScript", "App Router", "REST APIs"],
    },
    {
      id: "responsive-ui",
      title: "Responsive & Accessible UI",
      shortDesc: "Fluid, mobile-first layouts tested across modern devices and browsers.",
      description:
        "Crafting intuitive user interfaces that load fast, adhere to WCAG accessibility principles, and deliver a silky-smooth experience on smartphones, tablets, and desktops.",
      icon: "Smartphone",
      tags: ["Responsive", "Cross-Browser", "Accessibility", "Animations"],
    },
    {
      id: "outsourcing-contracts",
      title: "Frontend Outsourcing & Contracts",
      shortDesc: "Dedicated frontend engineering bandwidth for global product teams.",
      description:
        "Seamless team augmentation to build new features, crush UI backlogs, refactor legacy interfaces, or deliver end-to-end client projects on schedule.",
      icon: "Briefcase",
      tags: ["Contract", "Team Augmentation", "Git Workflow", "Async Communication"],
    },
  ] as ServiceItem[],

  // Real, Verifiable Projects Showcase
  projects: [
    {
      id: "project-consultation-app",
      title: "Consultation Pro — Appointment & Advisory Platform",
      category: "Client Booking & SaaS Platform",
      badge: "Live on Vercel",
      description:
        "A modern consultation and appointment booking web application featuring scheduling flows, responsive client forms, and smooth service selection.",
      keyFeatures: [
        "Dynamic appointment scheduling and service package selection",
        "Clean, responsive mobile-first UI built with modern component architectures",
        "Production deployment on Vercel with high performance and accessibility",
      ],
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://consultation-git-main-shobhitsings-projects.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
    {
      id: "project-crack-the-campus",
      title: "Crack The Campus — Placement & Learning Platform",
      category: "EdTech & Career Prep Portal",
      badge: "Live on Vercel",
      description:
        "An EdTech campus preparation web portal built to help engineering and college students prepare for technical assessments, aptitude rounds, and interviews.",
      keyFeatures: [
        "Structured learning roadmaps and technical interview practice modules",
        "Interactive assessment interfaces with responsive navigation",
        "Clean, performant UI with fast page load times and mobile compatibility",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
      liveUrl: "https://crack-the-campus-website-git-main-shobhitsings-projects.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
    {
      id: "project-suryapura-development",
      title: "Suryapura Rural Development — Community Welfare Portal",
      category: "Public Welfare & Community Web App",
      badge: "Live on Vercel",
      description:
        "A digital rural development and citizen initiative portal showcasing education, agriculture, road infrastructure, and panchayat schemes.",
      keyFeatures: [
        "Public development tracker for village infrastructure and farmer initiatives",
        "Multilingual typography (Hindi & English) with accessible design principles",
        "Lightweight, lightning-fast Vite + React SPA architecture",
      ],
      technologies: ["React.js", "Vite", "Tailwind CSS", "Responsive UI", "Vercel"],
      liveUrl: "https://suryapura-rural-development-c5x8.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
  ] as ProjectItem[],

  // Technical Skills Matrix
  skills: [
    {
      title: "Core & Frameworks",
      icon: "Code2",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "HTML5 & Semantic Markup", level: "Expert" },
      ],
    },
    {
      title: "State & Data Architecture",
      icon: "Database",
      skills: [
        { name: "Redux & Redux Toolkit (RTK)", level: "Expert" },
        { name: "Zustand & Context API", level: "Advanced" },
        { name: "REST APIs & JSON Integration", level: "Expert" },
        { name: "Axios & Fetch API", level: "Expert" },
        { name: "RTK Query & Client Caching", level: "Advanced" },
      ],
    },
    {
      title: "UI, Styling & Accessibility",
      icon: "Layout",
      skills: [
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Web Accessibility (WCAG / a11y)", level: "Advanced" },
        { name: "Responsive & Mobile-First Design", level: "Expert" },
        { name: "Figma to Code (Pixel-Perfect)", level: "Expert" },
        { name: "CSS Modules & Micro-animations", level: "Advanced" },
      ],
    },
    {
      title: "Testing & Quality Assurance",
      icon: "ShieldCheck",
      skills: [
        { name: "Jest Unit Test Cases", level: "Advanced" },
        { name: "Playwright E2E Test Cases", level: "Advanced" },
        { name: "React Testing Library", level: "Advanced" },
        { name: "Cross-Browser Compatibility", level: "Expert" },
      ],
    },
    {
      title: "AI & Modern Workflow",
      icon: "Sparkles",
      skills: [
        { name: "AI-Assisted Development (Copilot/Cursor)", level: "Advanced" },
        { name: "LLM & AI API Integrations", level: "Advanced" },
        { name: "AI Prompt Engineering for Code", level: "Expert" },
        { name: "Rapid Prototyping with AI", level: "Advanced" },
      ],
    },
    {
      title: "DevOps, Tools & Delivery",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub Workflows", level: "Expert" },
        { name: "Vite & Modern Bundlers", level: "Advanced" },
        { name: "Vercel & CI/CD Deployment", level: "Advanced" },
        { name: "Chrome DevTools & Web Vitals", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],
}
