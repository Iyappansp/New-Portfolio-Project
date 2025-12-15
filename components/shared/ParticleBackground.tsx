"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Don't render on mobile or low-end devices for better performance
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency < 4;
      
      if (isMobile || isLowEnd) {
        return; // Skip particles on low-end devices
      }
      
      setShouldRender(true);
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60, // ⚡ Reduced from 120 to 60 for better performance
      interactivity: {
        events: {
          onClick: {
            enable: false, // ⚡ Keep click disabled (less important, saves CPU)
          },
          onHover: {
            enable: true, // ✅ RE-ENABLED: Hover interaction
            mode: "repulse", // Particles repel when you hover
          },
        },
        modes: {
          repulse: {
            distance: 100, // ⚡ Lightweight: Reduced from 200 to 100 (less particles affected)
            duration: 0.2, // ⚡ Lightweight: Reduced from 0.4 to 0.2 (faster, less CPU)
            factor: 1, // ⚡ Lightweight: Standard repulse strength
            speed: 0.5, // ⚡ Lightweight: Slower repulse speed (less CPU intensive)
          },
        },
      },
      particles: {
        color: {
          value: "#6366f1",
        },
        links: {
          color: "#8b5cf6",
          distance: 150,
          enable: true,
          opacity: 0.2, // ⚡ Reduced opacity for better performance
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5, // ⚡ Reduced speed from 1 to 0.5
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40, // ⚡ Reduced from 80 to 40 particles (less load)
        },
        opacity: {
          value: 0.3, // ⚡ Reduced opacity from 0.5 to 0.3
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 }, // ⚡ Reduced max size from 3 to 2
        },
      },
      detectRetina: false, // ⚡ Disabled for better performance
    }),
    []
  );

  if (!shouldRender || !init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  );
}
