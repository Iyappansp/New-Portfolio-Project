"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CounterAnimation } from "./CounterAnimation";
import {
  Code2,
  Lightbulb,
  GitBranch,
  Trophy,
  Users,
  Award,
} from "lucide-react";

interface FactCard {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

const facts: FactCard[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    description: "Full-stack applications",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    label: "Years of Experience",
    value: 0.8,
    description: "Continuous learning",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    label: "Technologies",
    value: 12,
    suffix: "+",
    description: "Languages & frameworks",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    label: "Academic Score",
    value: 8.14,
    description: "Great in academics",
  },
  {
    icon: <Users className="w-8 h-8" />,
    label: "Team Contributions",
    value: 8,
    suffix: "+",
    description: "Collaborative projects",
  },
  {
    icon: <Award className="w-8 h-8" />,
    label: "Certifications",
    value: 4,
    description: "Industry-recognized",
  },
];

export function QuickFactsCards() {
  const { ref, isVisible } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card */}
          <div className="relative glass p-6 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-500 group-hover:scale-110 transition-transform mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {fact.icon}
            </motion.div>

            {/* Content */}
            <div className="mb-2">
              <p className="text-3xl font-heading font-bold text-gradient">
                <CounterAnimation
                  from={0}
                  to={fact.value}
                  duration={2}
                  suffix={fact.suffix}
                  start={isVisible}
                />
              </p>
              <p className="text-lg font-semibold text-foreground">
                {fact.label}
              </p>
            </div>

            {/* Description */}
            {fact.description && (
              <p className="text-sm text-foreground/60">{fact.description}</p>
            )}

            {/* Hover line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

