"use client";

import { useRef, useEffect, RefObject } from "react";

interface MagneticButtonOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticButtonOptions = {}
): RefObject<T | null> {
  const { strength = 0.3, radius = 100 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        const moveX = distanceX * strength;
        const moveY = distanceY * strength;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        element.style.transition = "transform 0.1s ease-out";
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
      element.style.transition = "transform 0.3s ease-out";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, radius]);

  return ref;
}


