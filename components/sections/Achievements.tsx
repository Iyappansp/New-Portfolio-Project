"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  year?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "TCS NQT Score: 78.5",
    description: "Achieved a competitive score in TCS National Qualifier Test, demonstrating strong technical aptitude and problem-solving skills.",
    icon: "🏆",
    year: "2024",
  },
  {
    id: "2",
    title: "CGPA: 8.23/10",
    description: "Maintained excellent academic performance throughout B.E. in Computer Science Engineering at Amrita College.",
    icon: "🎓",
    year: "2021-2025",
  },
  {
    id: "3",
    title: "Certificate in MERN Stack",
    description: "Completed comprehensive training in MongoDB, Express.js, React.js, and Node.js full-stack development.",
    icon: "💻",
  },
  {
    id: "4",
    title: "Certificate in Python Programming",
    description: "Gained intermediate proficiency in Python programming with focus on backend development and scripting.",
    icon: "🐍",
  },
  {
    id: "5",
    title: "Google UI/UX Design Certificate",
    description: "Completed Google's professional certificate program in UI/UX Design, mastering design thinking and prototyping.",
    icon: "🎨",
  },
  {
    id: "6",
    title: "GitHub Profile",
    description: "Active open-source contributor with multiple production-ready projects and collaborative experience.",
    icon: "🐙",
    link: "https://github.com/Iyappansp",
  },
  {
    id: "7",
    title: "HackerRank Profile",
    description: "Consistent problem solver with strong algorithmic and data structure skills.",
    icon: "💡",
    link: "https://www.hackerrank.com/iyappansanthoos1",
  },
  {
    id: "8",
    title: "88.57% Accuracy in Emotion Detection",
    description: "Achieved high accuracy in academic project using MATLAB and Deep Learning for emotion detection through eye analysis.",
    icon: "🧠",
    year: "2024",
  },
];

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="achievements" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 0.5 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-primary-500/10">
              <Trophy className="text-primary-500" size={24} />
            </div>
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
              Recognition
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of certifications, achievements, and milestones that showcase
            my continuous learning journey and professional growth.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4">{achievement.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 flex items-center justify-between">
                  {achievement.title}
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </h3>

                {/* Year badge if present */}
                {achievement.year && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-xs font-semibold mb-3">
                    {achievement.year}
                  </div>
                )}

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary-500/30">
            <Award className="text-primary-500" size={18} />
            <p className="text-sm text-foreground/80">
              Continuously learning and adding new skills to my repertoire
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
