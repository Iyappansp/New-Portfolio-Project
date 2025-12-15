"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CounterAnimation } from "./CounterAnimation";
import { Briefcase, Clock, Award, Zap } from "lucide-react";
import { getExperienceYears } from "@/lib/experienceData";

interface ExperienceStatsProps {
  totalProjects: number;
  totalCompanies: number;
  totalAchievements: number;
}

export function ExperienceStats({ totalProjects, totalCompanies, totalAchievements }: ExperienceStatsProps) {
  const { ref, isVisible } = useScrollReveal();
  const yearsExp = getExperienceYears();

  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      label: "Years of Experience",
      value: yearsExp,
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Companies Worked With",
      value: totalCompanies,
      suffix: "",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "Major Achievements",
      value: totalAchievements,
      suffix: "+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Projects Delivered",
      value: totalProjects,
      suffix: "+",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="group relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card */}
          <div className="relative glass p-6 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl">
            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {stat.icon}
            </motion.div>

            {/* Stat Value */}
            <div className="mb-2">
              <p className="text-4xl font-heading font-bold text-gradient">
                <CounterAnimation from={0} to={stat.value} duration={2} suffix={stat.suffix} start={isVisible} />
              </p>
              <p className="font-semibold text-foreground">{stat.label}</p>
            </div>

            {/* Hover line */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

