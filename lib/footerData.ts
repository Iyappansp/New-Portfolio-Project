export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Achievements", href: "#achievements" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog", external: false },
      { label: "Documentation", href: "/docs", external: false },
      { label: "Resume", href: "/resume.pdf", external: true },
      { label: "Portfolio", href: "/", external: false },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Iyappansp",
        external: true,
        icon: "🐙",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/iyappansp",
        external: true,
        icon: "💼",
      },
      {
        label: "HackerRank",
        href: "https://www.hackerrank.com/iyappansanthoos1",
        external: true,
        icon: "💻",
      },
      {
        label: "Email",
        href: "mailto:iyappansanthoosh27032004@gmail.com",
        external: true,
        icon: "✉️",
      },
    ],
  },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const companyInfo = {
  name: "IYAPPAN S P",
  title: "Full Stack Developer & UI/UX Expert",
  description:
    "Ambitious Full Stack Developer with UI/UX expertise. Building production-ready web applications with modern technologies. Backed by strong academics (CGPA 8.23) and TCS NQT score of 78.5.",
  year: new Date().getFullYear(),
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Iyappansp",
    icon: "🐙",
    color: "hover:text-gray-600 dark:hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/iyappansp",
    icon: "💼",
    color: "hover:text-blue-600",
  },
  {
    name: "Portfolio",
    url: "https://portfolioiyaps.netlify.app/",
    icon: "🌐",
    color: "hover:text-purple-600",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/iyappansanthoos1",
    icon: "💻",
    color: "hover:text-green-600",
  },
  {
    name: "Email",
    url: "mailto:iyappansanthoosh27032004@gmail.com",
    icon: "✉️",
    color: "hover:text-red-500",
  },
];

