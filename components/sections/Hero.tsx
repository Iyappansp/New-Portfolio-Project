"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import GradientMesh from "../shared/GradientMesh";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/button";

// Lazy load ParticleBackground for better initial load performance
const ParticleBackground = dynamic(
  () => import("../shared/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Magnetic button effect - optimized with throttling
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 }; // ⚡ Lighter spring config for better performance
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // ⚡ Use requestAnimationFrame to throttle updates
    requestAnimationFrame(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) * 0.05); // ⚡ Reduced from 0.1 to 0.05
      mouseY.set((e.clientY - centerY) * 0.05); // ⚡ Reduced from 0.1 to 0.05
    });
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <GradientMesh />
      </div>

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8 relative"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-glow blur-md" />
              <div className="absolute inset-0.5 rounded-full bg-background" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {!imageError ? (
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover p-1.5"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full">
                    <Image
                      src="https://ui-avatars.com/api/?name=Your+Name&size=400&background=6366f1&color=fff"
                      alt="Profile Placeholder"
                      fill
                      className="rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
          >
            <span className="text-gradient">IYAPPAN S P</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground/90 mb-6"
          >
            Full Stack Developer  & UI/UX Expert
          </motion.h2>

          {/* Typewriter Tagline */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/70 mb-12 h-8 flex items-center"
          >
            {mounted && (
              <TypeAnimation
                sequence={[
                  "Crafting Digital Experiences",
                  2000,
                  "Building Modern Web Applications",
                  2000,
                  "UI/UX Design Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={prefersReducedMotion ? 0 : Infinity}
                className="font-mono"
              />
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {/* View Work Button (Magnetic) */}
            <motion.div
              style={{ x, y }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                asChild
              >
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}>
                  <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                </a>
              </Button>
            </motion.div>

            {/* Download Resume Button */}
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-primary-500/50 hover:bg-primary-500/10 font-semibold px-8 py-6 text-lg rounded-2xl group"
              asChild
            >
              <a href="/Resume_Iyappan.pdf" download>
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#about");
          }}
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary-500 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="group-hover:translate-y-1 transition-transform" size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
