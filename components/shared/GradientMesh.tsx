"use client";

import { useEffect, useRef } from "react";

export default function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );

      gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
      gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add secondary gradient
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.cos(time * 0.7) * 150,
        canvas.height * 0.7 + Math.sin(time * 0.7) * 150,
        0,
        canvas.width * 0.3,
        canvas.height * 0.7,
        Math.max(canvas.width, canvas.height) * 0.6
      );

      gradient2.addColorStop(0, "rgba(139, 92, 246, 0.25)");
      gradient2.addColorStop(0.5, "rgba(99, 102, 241, 0.15)");
      gradient2.addColorStop(1, "rgba(139, 92, 246, 0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

