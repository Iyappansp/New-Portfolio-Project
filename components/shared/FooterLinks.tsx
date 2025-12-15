"use client";

import { motion } from "framer-motion";
import { FooterSection } from "@/lib/footerData";
import { ExternalLink } from "lucide-react";

interface FooterLinksProps {
  section: FooterSection;
  index?: number;
}

export function FooterLinks({ section, index = 0 }: FooterLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="text-sm font-heading font-bold text-foreground mb-4 uppercase tracking-wider">
        {section.title}
      </h4>

      <ul className="space-y-2">
        {section.links.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1 + i * 0.05,
              duration: 0.4,
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-foreground/70 hover:text-primary-500 transition-colors flex items-center gap-2 group"
              whileHover={{ x: 4 }}
            >
              {link.icon && <span className="text-base">{link.icon}</span>}
              <span>{link.label}</span>
              {link.external && (
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

