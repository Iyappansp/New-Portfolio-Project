"use client";

import { motion } from "framer-motion";
import { categories, ProjectCategory } from "@/lib/projectsData";
import { Search } from "lucide-react";

interface ProjectsFilterProps {
  selectedCategory: ProjectCategory | "All";
  selectedTech: string | "All";
  searchQuery: string;
  onCategoryChange: (category: ProjectCategory | "All") => void;
  onTechChange: (tech: string | "All") => void;
  onSearchChange: (query: string) => void;
  availableTechs: string[];
}

export function ProjectsFilter({
  selectedCategory,
  selectedTech,
  searchQuery,
  onCategoryChange,
  onTechChange,
  onSearchChange,
  availableTechs,
}: ProjectsFilterProps) {
  const categoryOptions = ["All", ...categories] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6 mb-12"
    >
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={20} />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl glass border border-primary-500/30 focus:border-primary-500 bg-foreground/5 text-foreground placeholder-foreground/50 outline-none transition-all"
        />
      </div>

      {/* Category Filter */}
      <div>
        <p className="text-sm font-semibold text-foreground/70 mb-3">Category</p>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category as ProjectCategory | "All")}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "glass border border-primary-500/30 hover:border-primary-500/60 text-foreground hover:text-primary-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div>
        <p className="text-sm font-semibold text-foreground/70 mb-3">Technology</p>
        <div className="flex flex-wrap gap-2">
          {["All", ...availableTechs].map((tech, index) => (
            <motion.button
              key={tech}
              onClick={() => onTechChange(tech)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                selectedTech === tech
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "glass border border-primary-500/30 hover:border-primary-500/60 text-foreground hover:text-primary-500"
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

