"use client";

import { motion } from "framer-motion";
import { companyInfo, socialLinks } from "@/lib/footerData";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Heart } from "lucide-react";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-foreground/5 border-t border-foreground/10 overflow-hidden">
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

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-3xl font-heading font-bold text-gradient mb-2">
                  {companyInfo.name}
                </h3>
                <p className="text-lg text-primary-500 font-semibold mb-4">
                  {companyInfo.title}
                </p>
                <p className="text-foreground/70 leading-relaxed max-w-2xl">
                  {companyInfo.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 group"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm font-medium text-foreground/70 group-hover:text-primary-500 transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="block text-foreground/70 hover:text-primary-500 transition-all duration-300 text-sm font-medium"
                  >
                    → {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <p className="text-sm text-foreground/60">
              © {companyInfo.year} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-foreground/50 flex items-center justify-center gap-2">
              Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

