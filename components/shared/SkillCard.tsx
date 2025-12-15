"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Skill } from "@/lib/skillsData";
import { SkillProgressBar } from "./SkillProgressBar";
import { Star } from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  index?: number;
  categoryColor: string;
}

export function SkillCard({ skill, index = 0, categoryColor }: SkillCardProps) {
  const { ref, isVisible } = useScrollReveal();

  const getStarRating = (proficiency: number) => {
    return Math.ceil(proficiency / 20);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="glass p-5 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl h-full">
        {/* Skill name */}
        <div className="flex items-center justify-center">
          <h4 className="text-base font-semibold text-foreground group-hover:text-primary-500 transition-colors">
            {skill.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}

