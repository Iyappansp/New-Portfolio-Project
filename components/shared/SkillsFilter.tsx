"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/skillsData";

interface SkillsFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function SkillsFilter({ selectedCategory, onSelectCategory }: SkillsFilterProps) {
  const categories = ["All", ...skillsData.map((cat) => cat.title)];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 justify-center mb-12"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category === "All" ? null : category)}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === null && category === "All"
              ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
              : selectedCategory === category
              ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
              : "glass border border-primary-500/30 hover:border-primary-500/60 text-foreground hover:text-primary-500"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}

