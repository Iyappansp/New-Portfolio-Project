"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExperienceEntry } from "@/lib/experienceData";
import { Calendar, MapPin, Briefcase, CheckCircle, Badge } from "lucide-react";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  index?: number;
}

const typeColors = {
  Work: "from-blue-500 to-cyan-500",
  Internship: "from-purple-500 to-pink-500",
  Freelance: "from-orange-500 to-red-500",
};

const typeBgColors = {
  Work: "bg-blue-500/10 border-blue-500/30",
  Internship: "bg-purple-500/10 border-purple-500/30",
  Freelance: "bg-orange-500/10 border-orange-500/30",
};

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline Connector */}
      <div className="relative flex flex-col items-center">
        {/* Timeline Dot */}
        <motion.div
          className={`w-6 h-6 rounded-full ring-4 ring-background bg-gradient-to-r ${typeColors[experience.type]} z-10`}
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.2 }}
        />

        {/* Connecting Line (except for last item) */}
        <motion.div
          className="w-1 bg-gradient-to-b from-primary-500 to-accent-500 flex-1"
          initial={{ height: 0 }}
          animate={isVisible ? { height: 200 } : { height: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 1 }}
        />
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-2 pb-12">
        <motion.div
          className={`glass p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl group h-full ${typeBgColors[experience.type]}`}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              {/* Company and Position */}
              <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary-500 transition-colors">
                {experience.position}
              </h3>
              <p className="text-lg text-foreground/70 font-semibold mt-1">
                {experience.company}
              </p>
            </div>

            {/* Type Badge */}
            <motion.div
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-gradient-to-r ${typeColors[experience.type]} text-white`}
              whileHover={{ scale: 1.05 }}
            >
              {experience.type}
            </motion.div>
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 pb-4 border-b border-foreground/10">
            <motion.div
              className="flex items-center gap-2 text-foreground/70"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <Calendar size={16} className="text-primary-500" />
              <span className="text-sm">
                {experience.startDate} - {experience.endDate}
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-foreground/70"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.35 }}
            >
              <MapPin size={16} className="text-primary-500" />
              <span className="text-sm">{experience.location}</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-foreground/70"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              <Briefcase size={16} className="text-primary-500" />
              <span className="text-sm font-medium">{experience.duration}</span>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 leading-relaxed mb-5">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle size={16} className="text-primary-500" />
              Key Achievements
            </h4>
            <div className="space-y-2">
              {experience.achievements.slice(0, 3).map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                  className="flex gap-2 text-sm text-foreground/70"
                >
                  <span className="text-primary-500 font-bold min-w-fit">•</span>
                  <span>{achievement}</span>
                </motion.div>
              ))}
              {experience.achievements.length > 3 && (
                <p className="text-xs text-foreground/60 italic pt-1">
                  +{experience.achievements.length - 3} more achievements
                </p>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Badge size={16} className="text-primary-500" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 + i * 0.03 + 0.3 }}
                  className="px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-500 text-xs font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

