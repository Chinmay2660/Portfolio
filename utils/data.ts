import type { JourneyItem, Project, SkillCategory, SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/chinmay2660/", icon: "fa-brands fa-linkedin" },
  { name: "GitHub", link: "https://github.com/Chinmay2660", icon: "fa-brands fa-github" },
];

export const heroSocialLinks: SocialLink[] = [
  { name: "LeetCode", link: "https://leetcode.com/u/Chinmay2660/", icon: "fab fa-code", label: "LeetCode" },
  { name: "GitHub", link: "https://github.com/Chinmay2660", icon: "fa-brands fa-github", label: "GitHub" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/chinmay2660/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
  { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/chinmay2660/", icon: "fab fa-code", label: "GeeksforGeeks" },
  { name: "HackerRank", link: "https://www.hackerrank.com/profile/Chinmay2660", icon: "fab fa-hackerrank", label: "HackerRank" },
  { name: "X", link: "https://x.com/ChinmayBhoir14", icon: "fa-brands fa-x-twitter", label: "X" },
];

export const journey: JourneyItem[] = [
  {
    title: "Software Engineer",
    institution: "Coditas",
    startDate: "November 2025",
    endDate: "Present",
    projects: [
      {
        name: "MetricStream",
        description: [
          "Implemented and optimized Bryntum Gantt Chart for large-scale project tracking, improving task visibility and performance by 35%.",
          "Revamped Platform Profile Page using Next.js and reusable components, reducing code duplication by 40%.",
        ],
      },
    ],
  },
  {
    title: "Software Development Engineer - 1",
    institution: "Jio Platforms Limited",
    startDate: "November 2022",
    endDate: "November 2025",
    projects: [
      {
        name: "Jio Customer Associate (B2B E-Commerce Module)",
        description: [
          "Developed and optimized a B2B e-commerce app using React.js, Redux-Saga and Cordova, contributed to over 50% of the codebase.",
          "Delivered key features (Cart, Save for Later, Checkout, Payment status) and integrated Jio Payment Gateway, which scaled the user base from 150K to 350K.",
          "Implemented JWT-based single-device authentication, which enhanced security and prevented unauthorized access.",
          "Built Refund Approval and Etoptup Reprocess modules to manage refunds for payment failures, order closures, and transaction errors, handling over 1,000 cases monthly.",
        ],
      },
      {
        name: "SIM Kitting Logbook",
        description: [
          "Automated SIM Card Kit barcode scanning functionality, which reduced errors by 50% and improved operational efficiency by 60%.",
          "Digitized a paper-based system to handle 20+ million SIM card kits annually, enabling tracking, logging, and quality monitoring.",
          "Created a Reports tab to track logbook statuses and approval stages, improving monitoring and faster decision-making.",
        ],
      },
      {
        name: "Additional Contributions",
        description: [
          "Built an end-to-end Admin dashboard that streamlined backend management with CRUD operations.",
          "Refactored 3,000+ lines to ES6+ standards and revamped the UI; increased Lighthouse scores by 30% through performance optimizations.",
          "Redesigned a desktop-only UI into a responsive Cordova based Android app with real-time PDF challan preview and download, cutting technician time by 60% through on-field mobile use.",
          "Upgraded UI logic to support a 4th server across two applications, and redesigned interfaces for server-specific scalability.",
          "Collaborated with cross-functional teams in an agile environment; contributed to code reviews, ensured code quality and aligned features with business requirements.",
        ],
      },
    ],
  },
  {
    title: "Bachelor of Engineering in Electronics",
    institution: "Terna Engineering College",
    startDate: "September 2018",
    endDate: "May 2022",
  },
  {
    title: "12th",
    institution: "PEST's New English Junior College, Thane",
    startDate: "June 2017",
    endDate: "March 2018",
  },
  {
    title: "10th",
    institution: "Little Flower High School",
    startDate: "June 2015",
    endDate: "March 2016",
  },
];

export const projects: Project[] = [
  {
    title: "Job Tracker",
    description:
      "Full-stack job search workspace with Kanban pipeline, interview calendar, resume uploads, and Google OAuth to manage applications in one place.",
    repoLink: "https://github.com/Chinmay2660/Tracker",
    liveLink: "https://ui-tracker.vercel.app/",
    languages: ["React", "TypeScript", "TanStack Query"],
  },
  {
    title: "ClasherStats",
    description:
      "Clash of Clans stats viewer with player and clan lookup by tag, war history, leaderboards, and detailed progression (heroes, donations, achievements)—dark, responsive UI.",
    repoLink: "https://github.com/Chinmay2660/ui-clashofclans",
    liveLink: "https://clasherstats.vercel.app/",
    languages: ["React", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    title: "MovieSphere",
    description:
      "TMDB-powered catalog for searching movies and TV shows, browsing curated lists, and opening rich detail views.",
    repoLink: "https://github.com/Chinmay2660/MovieSphere",
    liveLink: "https://moviesphere2660.vercel.app/",
    languages: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "MintMind",
    description:
      "Expense tracker that records income and spending, organizes by category, and reviews trends with charts and summaries.",
    repoLink: "https://github.com/Chinmay2660/Mintmind",
    liveLink: "https://mintmind.vercel.app/",
    languages: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "Redux (Toolkit / Saga / Thunk)",
      "React Hooks",
      "Context API",
      "Material UI",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & workflow",
    items: [
      "Webpack",
      "Vite",
      "Storybook",
      "Git",
      "GitHub",
      "Jenkins",
      "Jira",
      "Azure DevOps",
      "Jest",
      "React Testing Library",
      "Chrome DevTools",
    ],
  },
  {
    title: "Performance & integration",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Performance Optimization",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export { arrayCheck } from "@/types";
