export type ExperienceType = "Work" | "Internship" | "Freelance";

export interface ExperienceEntry {
  id: string;
  type: ExperienceType;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string; // e.g., "3 months", "1 year"
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  featured?: boolean;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "1",
    type: "Internship",
    company: "The Reciprocal Solutions",
    position: "Full Stack Intern",
    startDate: "Jul 2024",
    endDate: "Present",
    duration: "Ongoing",
    location: "Coimbatore, India",
    description:
      "Built and deployed full-stack applications using Next.js (TSX), Node.js, Kafka, ClickHouse, and Docker, serving real-time data processing for booking workflows and notification systems.",
    achievements: [
      "Developed full-stack applications with Next.js (TSX) and Node.js",
      "Implemented real-time data processing using Kafka and ClickHouse",
      "Deployed applications with Docker containerization",
      "Built booking workflows and notification systems",
      "Collaborated on GitHub with PRs and conflict resolution",
    ],
    technologies: ["Next.js (TSX)", "Node.js", "Kafka", "ClickHouse", "Docker", "GitHub"],
    featured: true,
  },
  {
    id: "2",
    type: "Internship",
    company: "Ether Infotech",
    position: "Full Stack Intern",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    duration: "2 months",
    location: "Coimbatore, India",
    description:
      "A web development internship offering hands-on experience in building and maintaining websites, enhancing coding skills in full-stack development.",
    achievements: [
      "Built and maintained full-stack web applications",
      "Enhanced coding skills in frontend and backend development",
      "Worked on website optimization and performance",
      "Collaborated with team on various web projects",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: "3",
    type: "Internship",
    company: "Code Bind Technologies",
    position: "Frontend Intern",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    duration: "2 months",
    location: "Chennai, India",
    description:
      "A full-stack internship providing hands-on experience in developing front-end and back-end solutions, enhancing skills in coding. Created a Movie Booking site with full functionality.",
    achievements: [
      "Created a fully functional Movie Booking website",
      "Developed frontend interfaces with React.js",
      "Implemented booking logic and user authentication",
      "Enhanced UI/UX design skills",
      "Built responsive and mobile-friendly interfaces",
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "REST API"],
    featured: false,
  },
  {
    id: "4",
    type: "Internship",
    company: "Oracuz Technology",
    position: "UI/UX and Frontend Intern",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    duration: "2 months",
    location: "Chennai, India",
    description:
      "UI/UX internship focusing on designing user-friendly interfaces, improving user experiences and working on innovative design projects using tools like Figma.",
    achievements: [
      "Designed user-friendly interfaces using Figma",
      "Improved user experiences through innovative design",
      "Created interactive prototypes and mockups",
      "Worked on multiple design projects",
      "Collaborated with development team for implementation",
    ],
    technologies: ["Figma", "Canva", "HTML", "CSS", "JavaScript", "React"],
    featured: false,
  },
  {
    id: "5",
    type: "Internship",
    company: "Tessolve",
    position: "AI and Data Science Bootcamp",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    duration: "2 months",
    location: "Remote",
    description:
      "Comprehensive AI and Data Science bootcamp covering the fundamentals of LLM models, AI integration, and practical implementation. Gained hands-on experience in building LLM models from scratch using Google Colab.",
    achievements: [
      "Learned data feeding techniques for AI models",
      "Understood AI integration and AGL (Agentic General Learning)",
      "Explored LLM model architecture and functioning",
      "Studied the future of AI and emerging trends",
      "Built LLM models from scratch using Google Colab",
      "Gained practical experience in AI/ML workflows",
    ],
    technologies: ["Python", "Google Colab", "LLM", "AI/ML", "Data Science", "NLP"],
    featured: false,
  },
];

export const getExperienceYears = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear + 0.8;
};

export const getTotalMonths = () => {
  return experienceData.reduce((total, exp) => {
    // Simple calculation - in real app would parse dates
    if (exp.duration.includes("year")) {
      const years = parseInt(exp.duration) * 12;
      total += years;
    }
    if (exp.duration.includes("month")) {
      const months = parseInt(exp.duration);
      total += months;
    }
    return total;
  }, 0);
};
