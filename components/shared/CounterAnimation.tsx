"use client";

import { useEffect, useState } from "react";

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  start?: boolean;
}

export function CounterAnimation({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  start = true,
}: CounterAnimationProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!start) {
      setCount(from);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(from + (to - from) * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration, start]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

