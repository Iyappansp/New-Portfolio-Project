"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/experienceData";
import { ExperienceCard } from "../shared/ExperienceCard";
import { ExperienceStats } from "../shared/ExperienceStats";
import { FeaturedExperienceHighlight } from "../shared/FeaturedExperienceHighlight";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const featuredExp = experienceData.find((exp) => exp.featured);
  const otherExp = experienceData.filter((exp) => !exp.featured);
  const prefersReducedMotion = useReducedMotion();

  const totalAchievements = experienceData.reduce(
    (sum, exp) => sum + exp.achievements.length,
    0
  );

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
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
              <Briefcase className="text-primary-500" size={24} />
            </div>
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A timeline of my professional growth, achievements, and experiences across various roles
            and companies. Continuous learning and innovation.
          </p>
        </motion.div>

        {/* Statistics */}
        <ExperienceStats
          totalProjects={10}
          totalCompanies={experienceData.length}
          totalAchievements={5}
        />

        {/* Featured Experience Highlight */}
        {featuredExp && (
          <>
            <FeaturedExperienceHighlight experience={featuredExp} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-16" />
          </>
        )}

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-0"
        >
          {otherExp.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 rounded-2xl glass border border-primary-500/30">
            <p className="text-foreground/80 text-lg">
              💼 Open to new opportunities in Full-Stack Development, AI/ML, and Technical Mentoring
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
