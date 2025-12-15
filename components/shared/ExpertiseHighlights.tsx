"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Database,
  Zap,
  Globe,
  Brain,
  Palette,
  Gauge,
} from "lucide-react";

interface Expertise {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const expertiseAreas: Expertise[] = [
  {
    title: "Full-Stack Development",
    description: "React, Next.js, Node.js, and modern web technologies",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  // {
  //   title: "AI & Machine Learning",
  //   description: "NLP, sentiment analysis, and deep learning models",
  //   icon: <Brain className="w-8 h-8" />,
  //   color: "from-purple-500 to-pink-500",
  // },
  {
    title: "Database Design",
    description: "MySQL, PostgreSQL, MongoDB, and data optimization",
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Performance & Optimization",
    description: "Code splitting, lazy loading, and Core Web Vitals",
    icon: <Gauge className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "UI/UX Design",
    description: "Responsive design, animations, and user experience",
    icon: <Palette className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "API Integration",
    description: "RESTful APIs, webhooks, and third-party integrations",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
  },
];

export function ExpertiseHighlights() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-6">
      {expertiseAreas.map((expertise, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          className="group relative"
        >
          {/* Background gradient line */}
          <motion.div
            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${expertise.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            layoutId={`line-${index}`}
          />

          <div className="glass p-6 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300 ml-4 hover:shadow-xl">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <motion.div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${expertise.color} p-2.5 text-white group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 10 }}
              >
                {expertise.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-500 transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-foreground/70 text-sm mt-1">
                  {expertise.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

