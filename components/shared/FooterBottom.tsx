"use client";

import { motion } from "framer-motion";
import { legalLinks, companyInfo } from "@/lib/footerData";

export function FooterBottom() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-foreground/10 pt-8"
    >
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {legalLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-foreground/60 hover:text-primary-500 transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-xs text-foreground/50 space-y-2"
      >
        <p>
          &copy; {companyInfo.year} {companyInfo.name}. All rights reserved.
        </p>
        <p>
          Designed & Built with{" "}
          <span className="text-primary-500 animate-pulse">❤️</span> using Next.js
          & Tailwind CSS
        </p>
      </motion.div>
    </motion.div>
  );
}

