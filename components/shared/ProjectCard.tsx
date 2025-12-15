"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projectsData";
import Image from "next/image";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({
  project,
  index = 0,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="relative h-full glass rounded-3xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col">
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-purple-500/30">
                    <span class="text-4xl font-bold text-primary/50">${project.title.charAt(0)}</span>
                  </div>
                `;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="mb-3"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-500 text-xs font-semibold">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-foreground/70 text-sm mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1 + i * 0.05 + 0.1,
                  }}
                  className={`px-2.5 py-1 rounded-lg text-white text-xs font-medium ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2.5 py-1 rounded-lg bg-foreground/20 text-foreground/70 text-xs font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Footer with Links and Button */}
          <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-primary-500/20 text-foreground hover:text-primary-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="View on GitHub"
                >
                  <Github size={18} />
                </motion.a>
              )}
              {project.liveDemo && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-primary-500/20 text-foreground hover:text-primary-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="View Live Demo"
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>

            {/* View Details Button */}
            <motion.button
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-500/20 hover:bg-primary-500/30 text-primary-500 font-medium text-sm transition-all"
              whileHover={{ gap: 6 }}
            >
              Details
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

