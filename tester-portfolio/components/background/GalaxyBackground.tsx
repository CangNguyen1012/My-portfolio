"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GalaxyBackground() {
  // Hydration-safe reduced-motion handling.
  const reduceMotionFromHook = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (reduceMotionFromHook === null) return;
    const id = window.requestAnimationFrame(() =>
      setReducedMotion(reduceMotionFromHook),
    );
    return () => window.cancelAnimationFrame(id);
  }, [reduceMotionFromHook]);

  const orb1 = reducedMotion
    ? { x: 0, y: 0 }
    : { x: [0, 18, 0], y: [0, 26, 0] };
  const orb2 = reducedMotion
    ? { x: 0, y: 0 }
    : { x: [0, -22, 0], y: [0, -18, 0] };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orbs (chill glow) */}
      <motion.div
        className="absolute -top-40 left-10 h-130 w-130 rounded-full bg-cyan-600/20 blur-3xl"
        animate={orb1}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute bottom-0 right-0 h-155 w-155 rounded-full bg-cyan-800/20 blur-3xl"
        animate={orb2}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Subtile stars */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.65) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 70%, transparent)",
        }}
      />

      {/* Tech grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,145,178,0.20) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(59,93,138,0.15) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          transform: "skewY(-8deg) translateY(-10%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent, rgba(0,0,0,0.45) 70%)",
        }}
      />
    </div>
  );
}
