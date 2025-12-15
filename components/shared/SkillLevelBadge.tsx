"use client";

import { motion } from "framer-motion";
import { getLevelColor } from "@/lib/skillsData";
import { CheckCircle2, Award } from "lucide-react";

interface SkillLevelBadgeProps {
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  proficiency: number;
}

export function SkillLevelBadge({ level, proficiency }: SkillLevelBadgeProps) {
  const getIcon = () => {
    if (level === "Expert" || proficiency >= 90) {
      return <Award className="w-3 h-3" />;
    }
    return <CheckCircle2 className="w-3 h-3" />;
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${getLevelColor(level)}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {getIcon()}
      <span className="text-xs font-semibold">{level}</span>
    </motion.div>
  );
}

