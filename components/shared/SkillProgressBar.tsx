"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillProgressBarProps {
  name: string;
  proficiency: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  showPercentage?: boolean;
  index?: number;
}

const levelColors = {
  Beginner: "from-blue-500 to-blue-600",
  Intermediate: "from-yellow-500 to-yellow-600",
  Advanced: "from-purple-500 to-purple-600",
  Expert: "from-green-500 to-green-600",
};

export function SkillProgressBar({
  name,
  proficiency,
  level,
  showPercentage = true,
  index = 0,
}: SkillProgressBarProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group space-y-2"
    >
      {/* Header with name and level */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary-500 transition-colors">
          {name}
        </h4>
        {showPercentage && (
          <span className="text-xs font-mono text-foreground/60 group-hover:text-primary-500/80 transition-colors">
            {proficiency}%
          </span>
        )}
      </div>

      {/* Progress bar container */}
      <div className="relative h-2 bg-foreground/10 rounded-full overflow-hidden backdrop-blur-sm">
        {/* Animated fill */}
        <motion.div
          className={`h-full bg-gradient-to-r ${levelColors[level]} rounded-full`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* Glowing effect on progress */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${levelColors[level]} blur-md opacity-40`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 1.2,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Level indicator */}
      <div className="flex items-center justify-between">
        <div />
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/60`}>
          {level}
        </span>
      </div>
    </motion.div>
  );
}

