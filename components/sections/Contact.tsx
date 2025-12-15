"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/button";
import { ConnectWithMeForm } from "../shared/ConnectWithMeForm";


interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "iyappansanthoosh27032004@gmail.com",
    link: "mailto:iyappansanthoosh27032004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9360216874",
    link: "tel:+919360216874",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/Iyappansp",
    color: "hover:text-gray-600 dark:hover:text-gray-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://linkedin.com/in/iyappansp",
    color: "hover:text-blue-600",
  },
  {
    icon: Globe,
    label: "Portfolio",
    link: "https://portfolioiyaps.netlify.app/",
    color: "hover:text-purple-600",
  },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.div
            className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
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
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-primary-500/10">
              <Send className="text-primary-500" size={24} />
            </div>
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl glass border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-primary-500/10">
                        <info.icon className="text-primary-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground font-medium hover:text-primary-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Connect on Social
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl glass border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Connect Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <ConnectWithMeForm />
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 rounded-2xl glass border border-primary-500/30">
            <p className="text-foreground/80 text-lg">
              📧 Response time: Usually within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
