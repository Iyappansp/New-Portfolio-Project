"use client";

import { motion } from "framer-motion";
import { footerSections } from "@/lib/footerData";
import { FooterLinks } from "../shared/FooterLinks";
import { FooterAbout } from "../shared/FooterAbout";
import { FooterBottom } from "../shared/FooterBottom";
import { FooterNewsletter } from "../shared/FooterNewsletter";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative bg-foreground/5 border-t border-foreground/10 overflow-hidden">
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 0.5 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FooterAbout />
          </div>

          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <FooterLinks section={section} index={index + 1} />
            </div>
          ))}

          <div className="lg:col-span-1">
            <FooterNewsletter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

