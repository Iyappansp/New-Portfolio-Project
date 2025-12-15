"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  title: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  details?: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: "B.E - Computer Science",
    institution: "Amrita College of Engineering and Technology - Anna University Affiliated",
    duration: "2021 - 2025",
    location: "Nagercoil, Tamil Nadu",
    description: "Major focus on Core of Computer Science and internet of working",
    details: [
      "CGPA: 8.14/10",
      "Top 3 in Class",
      "Event Organizer",
    ],
  },
  {
    title: "HSC - Computer Science",
    institution: "Ponjesly Matric Higher Senior Secondary School",
    duration: "2019 - 2021",
    location: "Nagercoil, Tamil Nadu",
    description: "Basic of Computer Science and programs",
    details: ["CGPA: 8.84/10", "Top 3 in Class", "Event Organizer"],
  },
  {
    title: "SSLC - High School",
    institution: "S.M.R.V. Matriculation School",
    duration: "2018 - 2019",
    location: "Nagercoil",
    description: "Genral studies of school",
    details: ["CGPA: 8.45/10", "Top 3 in Class"],
  },
];

export function EducationTimeline() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-8">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="relative pl-8 border-l-2 border-primary-500/30 hover:border-primary-500 transition-colors"
        >
          {/* Timeline dot */}
          <motion.div
            className="absolute -left-3 top-0 w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          />

          {/* Content */}
          <motion.div
            className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-medium">{item.institution}</p>
              </div>
              <GraduationCap className="text-primary-500 group-hover:scale-110 transition-transform" />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-3 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-primary-500/70" />
                {item.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-primary-500/70" />
                {item.location}
              </div>
            </div>

            <p className="text-foreground/80 mb-3">{item.description}</p>

            {/* Details */}
            {item.details && (
              <div className="flex flex-wrap gap-2">
                {item.details.map((detail, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.4 }}
                    className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium"
                  >
                    {detail}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

