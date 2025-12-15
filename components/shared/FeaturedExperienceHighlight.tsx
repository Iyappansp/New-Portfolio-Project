"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExperienceEntry } from "@/lib/experienceData";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedExperienceHighlightProps {
  experience: ExperienceEntry;
}

export function FeaturedExperienceHighlight({ experience }: FeaturedExperienceHighlightProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative mb-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-3xl blur-xl" />

      <div className="relative glass p-8 md:p-12 rounded-3xl border border-primary-500/30">
        {/* Featured Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-bold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles size={16} />
          Currently
        </motion.div>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
              {experience.position}
            </h2>
            <p className="text-2xl text-primary-500 font-semibold mb-3">{experience.company}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{experience.description}</p>

            {/* CTA Button */}
            <motion.div className="mt-6" whileHover={{ x: 5 }}>
              <Button size="lg" className="flex items-center gap-2">
                View More About Me
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.3 }}
          >
            {/* Main Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-foreground/5 border border-primary-500/20">
                <p className="text-sm text-foreground/60 mb-1">Duration</p>
                <p className="text-2xl font-bold text-foreground">{experience.duration}</p>
              </div>
              <div className="p-4 rounded-xl bg-foreground/5 border border-primary-500/20">
                <p className="text-sm text-foreground/60 mb-1">Location</p>
                <p className="text-lg font-bold text-foreground">{experience.location}</p>
              </div>
            </div>

            {/* Top Achievements */}
            <div className="p-4 rounded-xl bg-foreground/5 border border-primary-500/20">
              <p className="text-sm font-semibold text-foreground/70 mb-3">Top Achievements</p>
              <div className="space-y-2">
                {experience.achievements.slice(0, 2).map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-primary-500 flex-shrink-0">✓</span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="p-4 rounded-xl bg-foreground/5 border border-primary-500/20">
              <p className="text-sm font-semibold text-foreground/70 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-primary-500/20 text-primary-500 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {experience.technologies.length > 5 && (
                  <span className="px-3 py-1 rounded-lg bg-foreground/10 text-foreground/70 text-xs font-medium">
                    +{experience.technologies.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

