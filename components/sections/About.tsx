"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import { EducationTimeline } from "../shared/EducationTimeline";
import { QuickFactsCards } from "../shared/QuickFactsCards";
import { ExpertiseHighlights } from "../shared/ExpertiseHighlights";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A passionate full-stack developer and AI enthusiast crafting digital solutions
            with modern technologies and creative thinking.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image + Quick Facts */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image with Parallax */}
            <motion.div
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl" />
              <div className="absolute inset-1 bg-background rounded-3xl overflow-hidden">
                {!imageError ? (
                  <Image
                    src="/images/about-image.jpg"
                    alt="About me"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-purple-500/30">
                    <Image
                      src="https://ui-avatars.com/api/?name=Your+Name&size=600&background=6366f1&color=fff"
                      alt="About me placeholder"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-6 right-6 glass p-4 rounded-2xl backdrop-blur-xl border border-white/20"
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 3 }}
              >
                <p className="text-sm font-semibold text-foreground">
                  🚀 Always Learning
                </p>
              </motion.div>
            </motion.div>

            {/* Quick Facts Grid */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6">
                Quick Facts
              </h3>
              <QuickFactsCards />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                Who Am I?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I'm IYAPPAN S P, an ambitious Full Stack Developer with UI/UX expertise and 
                intermediate Python proficiency. Currently pursuing my B.E. in Computer Science 
                from Amrita College of Engineering and Technology with a CGPA of 8.23.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I specialize in React.js and Next.js (TSX) for frontend development, combined with 
                Node.js and Express.js for backend solutions. With hands-on experience from 4 
                internships, I've built production-ready applications using modern tech stacks 
                including Docker, Kafka, and ClickHouse.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My TCS NQT score of 78.5 and certifications in MERN Stack, Python, and Google UI/UX 
                Design showcase my commitment to continuous learning. I'm eager to contribute my 
                creativity and collaborative spirit to innovative projects that make a real impact.
              </p>
            </div>

            {/* Expertise Highlights */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
                My Expertise
              </h3>
              <ExpertiseHighlights />
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ x: 10 }}>
              <Button
                size="lg"
                className="glass group hover:bg-primary-500/20 border border-primary-500/50"
                asChild
              >
                <a 
                  href="#projects" 
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  See My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-heading font-bold mb-12 text-center">
            Education & <span className="text-gradient">Certifications</span>
          </h3>
          <EducationTimeline />
        </motion.div>
      </div>
    </section>
  );
}
