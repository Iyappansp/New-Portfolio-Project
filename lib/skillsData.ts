export interface Skill {
  name: string;
  proficiency: number; // 0-100
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern UI/UX with cutting-edge technologies",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", proficiency: 92, level: "Expert" },
      { name: "Next.js (TSX)", proficiency: 90, level: "Advanced" },
      { name: "TypeScript", proficiency: 88, level: "Advanced" },
      { name: "JavaScript", proficiency: 93, level: "Expert" },
      { name: "HTML", proficiency: 95, level: "Expert" },
      { name: "CSS", proficiency: 94, level: "Expert" },
      { name: "Bootstrap", proficiency: 90, level: "Advanced" },
      { name: "Responsive Design", proficiency: 92, level: "Expert" },
    ],
  },
  {
    title: "Backend Development",
    description: "Scalable APIs and robust server solutions",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", proficiency: 88, level: "Advanced" },
      { name: "Express.js", proficiency: 90, level: "Advanced" },
      { name: "Python", proficiency: 75, level: "Intermediate" },
      { name: "REST API", proficiency: 88, level: "Advanced" },
      { name: "Server-side", proficiency: 85, level: "Advanced" },
      { name: "Web Application", proficiency: 90, level: "Advanced" },
    ],
  },
  {
    title: "Databases",
    description: "Data management and storage solutions",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", proficiency: 85, level: "Advanced" },
      { name: "SQL", proficiency: 82, level: "Advanced" },
      { name: "PostgreSQL", proficiency: 80, level: "Advanced" },
      { name: "Snowflake", proficiency: 70, level: "Intermediate" },
      { name: "DBMS", proficiency: 80, level: "Advanced" },
      { name: "Firebase", proficiency: 78, level: "Intermediate" },
      { name: "ClickHouse", proficiency: 75, level: "Intermediate" },
      { name: "Sequelize", proficiency: 78, level: "Intermediate" },
      { name: "DBeaver", proficiency: 75, level: "Intermediate" },
      { name: "pgAdmin", proficiency: 75, level: "Intermediate" },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", proficiency: 88, level: "Advanced" },
      { name: "Canva", proficiency: 85, level: "Advanced" },
      { name: "UI Design", proficiency: 87, level: "Advanced" },
      { name: "UX Design", proficiency: 85, level: "Advanced" },
      { name: "Prototyping", proficiency: 82, level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Cloud Tools",
    description: "Deployment and development tools",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", proficiency: 90, level: "Advanced" },
      { name: "Docker Basics", proficiency: 75, level: "Intermediate" },
      { name: "Kafka", proficiency: 72, level: "Intermediate" },
      { name: "CI/CD Basics", proficiency: 70, level: "Intermediate" },
      { name: "GitHub PRs", proficiency: 88, level: "Advanced" },
      { name: "Conflict Resolution", proficiency: 85, level: "Advanced" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Modern frameworks for rapid development",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Express.js", proficiency: 90, level: "Advanced" },
      { name: "React.js", proficiency: 92, level: "Expert" },
      { name: "Next.js", proficiency: 90, level: "Advanced" },
      { name: "Node.js", proficiency: 88, level: "Advanced" },
      { name: "Bootstrap", proficiency: 90, level: "Advanced" },
      { name: "Socket.IO", proficiency: 80, level: "Advanced" },
    ],
  },
  {
    title: "Integrations & Services",
    description: "Third-party services and integrations",
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "OTP Verification", proficiency: 85, level: "Advanced" },
      { name: "Email Services", proficiency: 88, level: "Advanced" },
      { name: "Telegram Bot", proficiency: 80, level: "Advanced" },
      { name: "Booking Flows", proficiency: 82, level: "Advanced" },
      { name: "Payment Integration", proficiency: 78, level: "Intermediate" },
    ],
  },
  {
    title: "Gen AI and Tools",
    description: "AI-powered tools and assistants for development",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "ChatGPT", proficiency: 90, level: "Advanced" },
      { name: "Gemini", proficiency: 88, level: "Advanced" },
      { name: "Perplexity", proficiency: 85, level: "Advanced" },
      { name: "Claude", proficiency: 87, level: "Advanced" },
      { name: "DeepSeek", proficiency: 80, level: "Advanced" },
      { name: "Cursor", proficiency: 92, level: "Expert" },
      { name: "Windsurf", proficiency: 85, level: "Advanced" },
      { name: "Antigravity", proficiency: 90, level: "Advanced" },
      { name: "Grok", proficiency: 82, level: "Advanced" },
    ],
  },
];

export const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "Advanced":
      return "bg-purple-500/20 text-purple-400 border-purple-500/50";
    case "Expert":
      return "bg-green-500/20 text-green-400 border-green-500/50";
    default:
      return "bg-primary-500/20 text-primary-400 border-primary-500/50";
  }
};

export const getLevelBorderColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "border-blue-500";
    case "Intermediate":
      return "border-yellow-500";
    case "Advanced":
      return "border-purple-500";
    case "Expert":
      return "border-green-500";
    default:
      return "border-primary-500";
  }
};

