"use client";

import { motion } from "framer-motion";
import {
  companyInfo,
  footerSections,
} from "@/lib/footerData";
import { ThemeToggle } from "./ThemeToggle";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterLinks } from "./FooterLinks";
import { FooterBottom } from "./FooterBottom";
import { FooterAbout } from "./FooterAbout";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-gradient-to-b from-background via-background to-background/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(88,28,135,0.12),transparent_25%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.12),transparent_25%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <FooterAbout />
            <ThemeToggle />
          </div>

          <div className="grid flex-1 gap-8 md:grid-cols-3">
            {footerSections.map((section, sectionIndex) => (
              <FooterLinks key={section.title} section={section} index={sectionIndex} />
            ))}

            <FooterNewsletter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
