"use client";

import { motion } from "framer-motion";
import { companyInfo, socialLinks } from "@/lib/footerData";

export function FooterAbout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4 max-w-sm"
    >
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-1">
          {companyInfo.name}
        </h3>
        <p className="text-sm text-primary-500 font-semibold mb-3">
          {companyInfo.title}
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {companyInfo.description}
        </p>
      </div>

      <div className="flex gap-3 pt-4">
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
            whileHover={{ scale: 1.2, y: -3 }}
            className="text-2xl text-foreground/70 hover:text-primary-500 transition-colors"
            title={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

