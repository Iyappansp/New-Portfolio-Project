"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projectsData";
import { X, Github, ExternalLink, Calendar, CheckCircle, Zap } from "lucide-react";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 z-50 bg-background rounded-3xl border border-primary-500/30 overflow-hidden flex flex-col"
          >
            {/* Header with Close Button */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              {/* Image Carousel */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-purple-500/30">
                          <span class="text-4xl font-bold text-primary/50">${project.title.charAt(
                            0
                          )}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </motion.div>

              {/* Image Navigation */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImageIndex ? "bg-primary-500 w-6" : "bg-white/50"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 hover:bg-background text-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
              {/* Title and Badges */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-500 text-sm font-semibold">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Range */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5">
                <Calendar className="text-primary-500" size={20} />
                <div>
                  <p className="text-sm text-foreground/60">Timeline</p>
                  <p className="font-semibold text-foreground">
                    {project.startDate} - {project.endDate}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">Overview</h3>
                <p className="text-foreground/80 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech.name}
                      className={`px-4 py-2 rounded-xl text-white text-sm font-semibold ${tech.color}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Key Features</h3>
                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3"
                    >
                      <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges Solved */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="text-accent-500" size={24} />
                  Challenges Solved
                </h3>
                <div className="space-y-3">
                  {project.challengesSolved.map((challenge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="text-foreground/80">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-foreground/10">
                {project.github && (
                  <Button size="lg" className="flex items-center gap-2 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex items-center gap-2 flex-1"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

