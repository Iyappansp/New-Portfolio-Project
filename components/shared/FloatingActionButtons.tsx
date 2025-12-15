"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let ticking = false;
      
      const toggleVisibility = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setIsVisible(window.scrollY > 300);
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener("scroll", toggleVisibility, { passive: true });
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, []);

  const whatsappNumber = "919360216874";
  const whatsappMessage = encodeURIComponent("Hello! I'd like to get in touch.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Phone Button - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-8 left-8 z-30"
          >
            <div className="relative group">
              <motion.a
                href="tel:+919360216874"
                className="relative flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call us"
              >
                {/* Firey Sparkle Animation Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Crystal Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg shadow-white/50"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      scale: [0, 1.8, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Rotating Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-60"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Flame particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`flame-${i}`}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-80 blur-sm"
                    style={{
                      bottom: "50%",
                      left: "50%",
                    }}
                    animate={{
                      y: [-20, -40],
                      x: [(i - 2) * 5, (i - 2) * 10],
                      opacity: [0.8, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
                
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: [0, -15, 15, -15, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Phone size={24} />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* WhatsApp Button - Right Side with Same Animations */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300, delay: 0.1 }}
            className="fixed bottom-8 right-8 z-30"
          >
            <div className="relative group">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat on WhatsApp"
              >
                {/* Firey Sparkle Animation Background - Green Theme */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Crystal Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg shadow-white/50"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      scale: [0, 1.8, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Rotating Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-60"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Flame particles - Green theme */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`flame-whatsapp-${i}`}
                    className="absolute w-2 h-2 bg-teal-300 rounded-full opacity-0 group-hover:opacity-80 blur-sm"
                    style={{
                      bottom: "50%",
                      left: "50%",
                    }}
                    animate={{
                      y: [-20, -40],
                      x: [(i - 2) * 5, (i - 2) * 10],
                      opacity: [0.8, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
                
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: [0, -15, 15, -15, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default FloatingActionButtons;
