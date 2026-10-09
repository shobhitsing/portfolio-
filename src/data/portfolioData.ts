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
  problem: string
  solution: string
  technicalDecision: string
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

export interface SystemDesignTopic {
  id: string
  title: string
  category: string
  icon: string
  summary: string
  principles: string[]
  tools: string[]
}

export interface PersonalInfo {
  name: string
  title: string
  specialization: string
  headline: string
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
    headline: "I Build High-Performance Web Experiences.",
    statusBadge: "Available for Freelance & Contract Roles (Worldwide)",
    experience: "5+ Years Experience",
    phone: "+91 8368226635",
    country: "India",
    email: "sshobhit479@gmail.com",
    linkedin: "https://www.linkedin.com/in/shobhit-dhami-6b2b2017b/",
    github: "https://github.com/shobhitsing/",
    location: "India • Remote Worldwide",
    shortBio:
      "Senior Frontend Developer specializing in React.js, Next.js, and TypeScript. I translate complex Figma designs into responsive, accessible, and sub-second web applications for international teams and startups.",
    fullBio:
      "With approximately five years of dedicated frontend engineering experience based in India, I build reliable, responsive, and maintainable user interfaces for tech founders, product companies, and international agencies. I prioritize clean component architecture, fast delivery, and seamless cross-timezone async collaboration.",
    philosophyPoints: [
      {
        title: "Clean, Maintainable Code",
        description: "Zero guesswork with robust TypeScript types, modular components, and predictable state management.",
      },
      {
        title: "Pixel-Perfect Responsive UI",
        description: "Translating every nuance of your Figma designs into fully responsive, accessible web interfaces.",
      },
      {
        title: "Performance & Core Web Vitals",
        description: "Optimizing bundle sizes, sub-second LCP, zero layout shifts, and semantic markup for maximum SEO.",
      },
      {
        title: "Async Global Collaboration",
        description: "Structured Git commits, regular Loom screen walkthroughs, and clear communication aligned with your timezone.",
      },
    ],
  } as PersonalInfo,

  // Services International Clients Hire For
  services: [
    {
      id: "figma-to-react",
      title: "Figma to React / Next.js",
      shortDesc: "Pixel-perfect conversion of complex UI/UX designs into responsive, production-ready code.",
      description:
        "Transforming your Figma files into modular, accessible React and Next.js components styled with Tailwind CSS, ensuring 100% cross-device fidelity.",
      icon: "Layers",
      tags: ["Pixel-Perfect", "Tailwind CSS", "Semantic HTML", "Mobile-First"],
    },
    {
      id: "nextjs-web-apps",
      title: "Next.js & React Web Applications",
      shortDesc: "Scalable frontend architectures with SSR, App Router, and clean state management.",
      description:
        "Building fast, SEO-friendly web apps utilizing Next.js App Router, React 19, TypeScript, and clean API integrations tailored to product specifications.",
      icon: "Zap",
      tags: ["Next.js", "TypeScript", "App Router", "REST APIs"],
    },
    {
      id: "responsive-ui",
      title: "Responsive UI Development",
      shortDesc: "Fluid, mobile-first layouts tested across modern devices, tablets, and browsers.",
      description:
        "Crafting intuitive user interfaces that load fast, adhere to WCAG accessibility principles, and deliver seamless interactions across all screen sizes.",
      icon: "Smartphone",
      tags: ["Responsive", "Cross-Browser", "Accessibility", "Design Tokens"],
    },
    {
      id: "frontend-optimization",
      title: "Frontend Optimization & Performance",
      shortDesc: "Sub-second page loads, bundle reduction, and Core Web Vitals optimization.",
      description:
        "Auditing and enhancing existing frontends to eliminate layout shifts, reduce JavaScript bundle overhead, and boost Google PageSpeed scores.",
      icon: "Rocket",
      tags: ["Core Web Vitals", "Code Splitting", "SEO Optimization", "LCP < 1.2s"],
    },
  ] as ServiceItem[],

  // Real, Verifiable Projects Showcase
  projects: [
    {
      id: "project-consultation-app",
      title: "Consultation Pro",
      category: "Client Booking & SaaS Platform",
      badge: "Live on Vercel",
      problem: "High client drop-off caused by slow, unresponsive appointment booking flows and rigid calendar interfaces.",
      solution: "Engineered a streamlined multi-step booking experience with dynamic date/time slot selection and responsive client intake forms.",
      technicalDecision: "Utilized Next.js App Router with modular state management to ensure instant page transitions and zero runtime layout shifts.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://consultation-git-main-shobhitsings-projects.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
    {
      id: "project-crack-the-campus",
      title: "Crack The Campus",
      category: "EdTech & Career Prep Portal",
      badge: "Live on Vercel",
      problem: "Scattered placement training resources and non-responsive test modules discouraging student practice sessions.",
      solution: "Developed an intuitive placement prep portal featuring categorized learning roadmaps, mock technical tests, and assessment tracking.",
      technicalDecision: "Implemented typed TypeScript component trees with client-side caching to support fast test navigation without lag.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
      liveUrl: "https://crack-the-campus-website-git-main-shobhitsings-projects.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
    {
      id: "project-suryapura-development",
      title: "Suryapura Rural Development",
      category: "Public Welfare & Community Web App",
      badge: "Live on Vercel",
      problem: "Lack of a transparent digital channel for rural citizens to follow public infrastructure and farming welfare schemes.",
      solution: "Created an accessible citizen portal tracking village education, agriculture initiatives, and infrastructure progress.",
      technicalDecision: "Selected lightweight Vite + React architecture for optimal performance on low-bandwidth mobile networks in rural regions.",
      technologies: ["React.js", "Vite", "Tailwind CSS", "Responsive UI", "Vercel"],
      liveUrl: "https://suryapura-rural-development-c5x8.vercel.app/",
      githubUrl: "https://github.com/shobhitsing/",
    },
  ] as ProjectItem[],

  // The 4 Specific Technical Skills Groups Requested
  skills: [
    {
      title: "Frontend",
      icon: "Code2",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
      ],
    },
    {
      title: "Styling",
      icon: "Layout",
      skills: [
        { name: "Tailwind CSS", level: "Expert" },
        { name: "CSS3 / Modern CSS", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" },
        { name: "Figma-to-Code", level: "Expert" },
      ],
    },
    {
      title: "State and Forms",
      icon: "Database",
      skills: [
        { name: "Redux Toolkit (RTK)", level: "Expert" },
        { name: "Zustand", level: "Advanced" },
        { name: "React Context API", level: "Advanced" },
        { name: "React Hook Form", level: "Advanced" },
      ],
    },
    {
      title: "APIs and Performance",
      icon: "Zap",
      skills: [
        { name: "REST APIs", level: "Expert" },
        { name: "Axios / Fetch", level: "Expert" },
        { name: "Core Web Vitals", level: "Advanced" },
        { name: "SEO Optimization", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  // Frontend System Design & Architecture
  systemDesign: [
    {
      id: "component-architecture",
      title: "Modular Component Architecture",
      category: "Component Hierarchy",
      icon: "Layers",
      summary:
        "Building decoupled, highly reusable UI systems with strict separation between headless state logic and presentation views.",
      principles: [
        "Headless Custom Hooks & Inversion of Control",
        "Compound Component Patterns for Flexible Layouts",
        "Type-Safe Prop Contracts with Zero Implicit Any",
        "Design Tokens Driven UI (Atomic Architecture)",
      ],
      tools: ["React 19", "TypeScript Generics", "Tailwind CSS", "Atomic Design"],
    },
    {
      id: "state-caching",
      title: "Multi-Tier State & Data Caching",
      category: "State Management",
      icon: "Database",
      summary:
        "Architecting clean state boundaries separating volatile client UI states from normalized server-cache stores.",
      principles: [
        "Server-Cache Synchronization & Stale-While-Revalidate",
        "Optimistic UI Updates for Instant Perceived Performance",
        "Normalized State Trees Preventing Stale Redundant Data",
        "Event-Driven Action Flows with Redux Toolkit",
      ],
      tools: ["Redux Toolkit (RTK)", "RTK Query", "Zustand", "Context API"],
    },
    {
      id: "rendering-performance",
      title: "Rendering Strategies & Web Vitals",
      category: "Performance Engineering",
      icon: "Zap",
      summary:
        "Optimizing delivery pipelines through selective SSR, client streaming, tree shaking, and sub-second Largest Contentful Paint.",
      principles: [
        "Hybrid SSR, SSG, and React Server Components (RSC)",
        "Dynamic Code Splitting & Route-Based Chunking",
        "Virtualized Large Data Lists (Zero DOM Bloat)",
        "Core Web Vitals Optimization (LCP < 1.2s, CLS = 0)",
      ],
      tools: ["Next.js App Router", "Dynamic Imports", "Web Vitals API", "Bundle Splitting"],
    },
    {
      id: "network-resilience",
      title: "Network Resilience & Error Boundaries",
      category: "Networking & Reliability",
      icon: "ShieldCheck",
      summary:
        "Hardened frontend networking layer with automatic retry policies, schema validation, and fail-safe error boundaries.",
      principles: [
        "Axios Interceptors with Exponential Backoff Retry",
        "Runtime Payload Validation with Strict Schemas",
        "JWT Authentication Flow & Silent Refresh Rotation",
        "Granular Error Boundaries for Graceful Fallbacks",
      ],
      tools: ["Axios Interceptors", "Zod", "React Error Boundary", "Security Headers"],
    },
  ] as SystemDesignTopic[],
}
