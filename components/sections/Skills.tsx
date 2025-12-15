"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skillsData } from "@/lib/skillsData";
import { SkillCategoryCard } from "../shared/SkillCategoryCard";
import { SkillsFilter } from "../shared/SkillsFilter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Code2, Zap } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredCategories = selectedCategory
    ? skillsData.filter((cat) => cat.title === selectedCategory)
    : skillsData;

  const totalSkills = skillsData.reduce((sum, cat) => sum + cat.skills.length, 0);
  const expertSkills = skillsData.reduce(
    (sum, cat) =>
      sum + cat.skills.filter((skill) => skill.proficiency >= 90).length,
    0
  );

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
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
              <Code2 className="text-primary-500" size={24} />
            </div>
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
              Technical Toolkit
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills & Expertise</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            A comprehensive collection of technologies and frameworks I've mastered
            across different domains of software development.
          </p>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                {totalSkills}
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60">Total Skills</p>
                <p className="font-semibold text-foreground">Mastered</p>
              </div>
            </motion.div>

            <div className="w-px h-8 bg-foreground/20" />

            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                {expertSkills}
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60">Expert Level</p>
                <p className="font-semibold text-foreground">90%+</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Filter */}
        <SkillsFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Skills Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
            />
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
            <Zap className="text-primary-500" size={18} />
            <p className="text-sm text-foreground/80">
              Constantly learning new technologies and improving existing skills
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
