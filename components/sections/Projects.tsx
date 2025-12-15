"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectsData, ProjectCategory, Project } from "@/lib/projectsData";
import { ProjectCard } from "../shared/ProjectCard";
import { ProjectDetailsModal } from "../shared/ProjectDetailsModal";
import { ProjectsFilter } from "../shared/ProjectsFilter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Code2 } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all unique technologies
  const availableTechs = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech.name));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
      const techMatch =
        selectedTech === "All" ||
        project.technologies.some((tech) => tech.name === selectedTech);
      const searchMatch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && techMatch && searchMatch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0] }}
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
          <motion.div className="inline-flex items-center gap-3 mb-4" whileHover={{ scale: 1.05 }}>
            <div className="p-2 rounded-lg bg-primary-500/10">
              <Code2 className="text-primary-500" size={24} />
            </div>
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
              My Portfolio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my best work across full-stack development, AI/ML, and modern web
            technologies. Click on any project to see detailed information.
          </p>

          {/* Project Count */}
          <motion.div
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary-500/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm text-foreground/80">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""} Found
            </span>
          </motion.div>
        </motion.div>

        {/* Filter Component */}
        <ProjectsFilter
          selectedCategory={selectedCategory}
          selectedTech={selectedTech}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onTechChange={setSelectedTech}
          onSearchChange={setSearchQuery}
          availableTechs={availableTechs}
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">⭐ Featured</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            {featuredProjects.length > 0 && (
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Other Projects</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
            <p className="text-lg text-foreground/60">
              No projects found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
