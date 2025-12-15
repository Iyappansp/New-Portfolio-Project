// Constants and configuration

export const heroData = {
  name: "IYAPPAN S P",
  role: "Full Stack Developer",
  taglines: [
    "Crafting Digital Experiences",
    "UI/UX Expert & Full Stack Developer",
    "Building the Future with Code",
    "Transforming Ideas into Reality",
  ],
  profileImage: "/images/profile.jpg", // Update with your image path
  ctaButtons: [
    {
      text: "View Projects",
      href: "#projects",
      variant: "primary" as const,
    },
    {
      text: "Get In Touch",
      href: "#contact",
      variant: "secondary" as const,
    },
  ],
};

export const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const aboutData = {
  bio: "Ambitious Full Stack Developer with UI/UX expertise and intermediate Python proficiency. Backed by strong academics and TCS NQT score of 79.5, technical strength, problem-solving. Eager to contribute creativity and collaborative spirit to innovative projects.",
  quickFacts: [
    {
      icon: "Code",
      label: "Projects Completed",
      value: 10,
      suffix: "+",
    },
    {
      icon: "Briefcase",
      label: "Internships",
      value: 4,
      suffix: "",
    },
    {
      icon: "Award",
      label: "TCS NQT Score",
      value: 78.5,
      suffix: "",
    },
    {
      icon: "GraduationCap",
      label: "CGPA",
      value: 8.23,
      suffix: "/10",
    },
  ],
  education: [
    {
      year: "2021 - 2025",
      degree: "Bachelor of Engineering - CSE",
      institution: "Amrita College Of Engineering And Technology",
      description: "CGPA: 8.23 (scale of 10)",
    },
    {
      year: "2019 - 2021",
      degree: "Higher Education - Computer Science",
      institution: "Ponjesly Matric Hr.sec School",
      description: "Percentage: 88.4%",
    },
  ],
  expertise: [
    {
      icon: "Code",
      title: "Frontend Development",
      description: "React.js, Next.js (TSX), Bootstrap, Responsive Design",
    },
    {
      icon: "Server",
      title: "Backend Development",
      description: "Node.js, Express.js, REST APIs, Server-side Development",
    },
    {
      icon: "Database",
      title: "Database Management",
      description: "MongoDB, SQL, Firebase, ClickHouse, Snowflake",
    },
    {
      icon: "Palette",
      title: "UI/UX Design",
      description: "Figma, Canva, User-friendly Interfaces, Design Prototypes",
    },
  ],
};

