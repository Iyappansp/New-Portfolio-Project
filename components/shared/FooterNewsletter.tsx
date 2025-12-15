"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsletterState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NewsletterState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ isLoading: true, isSuccess: false, error: null });

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      await new Promise((resolve) => setTimeout(resolve, 800));

      setState({ isLoading: false, isSuccess: true, error: null });
      setEmail("");

      setTimeout(() => {
        setState((prev) => ({ ...prev, isSuccess: false }));
      }, 3000);
    } catch (error) {
      setState({
        isLoading: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <h3 className="text-lg font-heading font-bold text-foreground">
        📬 Newsletter
      </h3>
      <p className="text-sm text-foreground/70">
        Get updates on new projects and articles
      </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={state.isLoading || state.isSuccess}
            className="flex-1 px-3 py-2 rounded-lg glass border border-primary-500/30 focus:border-primary-500 bg-foreground/5 text-foreground placeholder-foreground/50 outline-none transition-all text-sm disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={state.isLoading || state.isSuccess}
            size="sm"
            className="flex items-center gap-1"
          >
            {state.isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : state.isSuccess ? (
              <Check size={16} />
            ) : (
              <Mail size={16} />
            )}
          </Button>
        </div>

        {state.error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {state.error}
          </motion.div>
        )}

        {state.isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-xs flex items-center gap-1"
          >
            <Check size={14} />
            Successfully subscribed!
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}

