"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SkillCategory } from "@/lib/skillsData";
import { SkillCard } from "./SkillCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index?: number;
}

export function SkillCategoryCard({ category, index = 0 }: SkillCategoryCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group"
    >
      {/* Category Header */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="glass p-6 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl mb-6"
        whileHover={{ x: 5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Category color indicator */}
            <motion.div
              className={`w-1.5 h-12 rounded-full bg-gradient-to-b ${category.color}`}
              layoutId={`category-line-${index}`}
            />

            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary-500 transition-colors">
                {category.title}
              </h3>
              <p className="text-foreground/60 text-sm mt-1">{category.description}</p>
            </div>
          </div>

          {/* Expand button */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="text-primary-500 group-hover:text-primary-600" size={24} />
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isExpanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {category.skills.map((skill, skillIndex) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={skillIndex}
              categoryColor={category.color}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

