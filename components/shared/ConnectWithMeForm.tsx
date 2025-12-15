"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConnectWithMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to API endpoint which forwards to Telegram
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", mobile: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-8 rounded-2xl glass border border-primary-500/20">
      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
        Connect with Me
      </h3>
      <p className="text-foreground/70 mb-6 text-sm">
        Fill out the form below and I'll get back to you soon!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
            <User size={16} className="text-primary-500" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-foreground placeholder:text-foreground/40"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
            <Mail size={16} className="text-primary-500" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-foreground placeholder:text-foreground/40"
          />
        </div>

        {/* Mobile Field */}
        <div className="space-y-2">
          <label htmlFor="mobile" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
            <Phone size={16} className="text-primary-500" />
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
            pattern="[0-9+\s-]+"
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-foreground placeholder:text-foreground/40"
          />
        </div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="mr-2"
                >
                  <Send size={20} />
                </motion.div>
                Connecting...
              </>
            ) : submitStatus === "success" ? (
              <>
                <span className="mr-2">✓</span>
                Connected!
              </>
            ) : submitStatus === "error" ? (
              <>
                <span className="mr-2">✗</span>
                Try Again
              </>
            ) : (
              <>
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Connect
              </>
            )}
          </Button>
        </motion.div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-500 text-center"
          >
            Message sent successfully! I'll get back to you soon.
          </motion.p>
        )}
        {submitStatus === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-500 text-center"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </form>
    </div>
  );
}

export default ConnectWithMeForm;
