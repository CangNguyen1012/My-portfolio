"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

export type LandscapeScene = "beach" | "coffee" | "mountain";

export default function LandscapeBackground({
  variant = "mountain",
}: {
  variant?: LandscapeScene;
}) {
  // `useReducedMotion()` can be `null` / differ between server and first client render.
  // We normalize it so the initial HTML matches (prevents hydration mismatch).
  const reduceMotionFromHook = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (reduceMotionFromHook === null) return;
    // Defer state update to avoid "setState in effect" lint rule and cascading renders.
    const id = window.requestAnimationFrame(() =>
      setReducedMotion(reduceMotionFromHook),
    );
    return () => window.cancelAnimationFrame(id);
  }, [reduceMotionFromHook]);

  // Reduced-motion: keep everything static.
  const float = reducedMotion
    ? { x: 0, y: 0, opacity: 1 }
    : {
        x: [0, 10, 0],
        y: [0, -12, 0],
        opacity: [0.85, 1, 0.85],
      };

  const fadeIn = reducedMotion ? { opacity: 1 } : { opacity: [0, 1] };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base sky/scene */}
      <div className="absolute inset-0" style={getBaseGradient(variant)} />

      {/* Common vignette */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent, rgba(0,0,0,0.55) 72%)",
        }}
      />

      {/* Scene: Beach */}
      {variant === "beach" && (
        <>
          {/* Sun glow */}
          <motion.div
            className="absolute -top-10 left-[12%] h-75 w-75 rounded-full bg-cyan-300/20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.35), transparent 60%)",
            }}
            animate={float}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Subtle clouds */}
          <motion.div
            className="absolute top-[18%] left-[-10%] h-55 w-130 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08), transparent 60%)",
            }}
            animate={reducedMotion ? { x: 0 } : { x: [0, 30, 0] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 16, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Waves */}
          <motion.div
            className="absolute bottom-[12%] left-0 right-0 h-[34%] opacity-50 blur-[0.2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient( to right, rgba(56,189,248,0.25) 0px, rgba(56,189,248,0.25) 1px, transparent 1px, transparent 18px )",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 92%)",
            }}
            animate={reducedMotion ? { x: 0 } : { x: [0, -80] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 12, repeat: Infinity, ease: "linear" }
            }
          />

          {/* Sand */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[26%]"
            style={{
              background:
                "linear-gradient(to top, rgba(245,158,11,0.22), rgba(14,165,233,0.0))",
              filter: "saturate(1.05)",
            }}
          />

          {/* Small stars/sparkles (kept faint for chill look) */}
          <div className="absolute inset-0 opacity-20" style={starsStyle()} />
        </>
      )}

      {/* Scene: Cozy night coffee shop */}
      {variant === "coffee" && (
        <>
          {/* Warm window + wall glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,23,42,1), rgba(0,0,0,1)), radial-gradient(circle at 20% 25%, rgba(245,158,11,0.18), transparent 45%), radial-gradient(circle at 80% 35%, rgba(236,72,153,0.10), transparent 50%)",
              opacity: 0.95,
            }}
          />

          {/* Window light */}
          <motion.div
            className="absolute top-[18%] left-[10%] h-55 w-90 rounded-3xl blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.35), transparent 58%), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.25), transparent 62%)",
            }}
            animate={float}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Table glow */}
          <motion.div
            className="absolute bottom-[10%] left-[18%] h-55 w-90 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.22), transparent 65%)",
            }}
            animate={
              reducedMotion ? { opacity: 1 } : { opacity: [0.75, 1, 0.75] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Steam */}
          <div className="absolute inset-0">
            <SteamLine delay={0} reduceMotion={reducedMotion} />
            <SteamLine delay={0.8} reduceMotion={reducedMotion} />
            <SteamLine delay={1.6} reduceMotion={reducedMotion} />
          </div>

          {/* Subtle floating dust */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={starsStyle(0.9)}
            animate={fadeIn}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.0 }}
          />
        </>
      )}

      {/* Scene: Mountain */}
      {variant === "mountain" && (
        <>
          {/* Stars */}
          <div className="absolute inset-0 opacity-35" style={starsStyle(1)} />

          {/* Aurora-ish nebula */}
          <motion.div
            className="absolute -top-20 left-[-10%] h-105 w-155 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, rgba(8,145,178,0.18), transparent 60%), radial-gradient(circle at 70% 55%, rgba(59,93,138,0.18), transparent 55%)",
            }}
            animate={reducedMotion ? { y: 0 } : { y: [0, 18, 0] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 18, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Mountain silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 h-[52%]">
            <div
              style={mountainLayer({ tint: "rgba(2,6,23,0.95)", y: "0%" })}
            />
            <div
              style={mountainLayer({
                tint: "rgba(5,11,33,0.92)",
                y: "6%",
              })}
              className="absolute inset-x-0 bottom-0"
            />
            <div
              style={mountainLayer({
                tint: "rgba(15,23,42,0.85)",
                y: "12%",
              })}
              className="absolute inset-x-0 bottom-0"
            />
          </div>

          {/* Cold horizon glow */}
          <motion.div
            className="absolute bottom-[18%] left-0 right-0 h-[26%] blur-2xl opacity-55"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.20), transparent 60%)",
            }}
            animate={
              reducedMotion
                ? { opacity: 0.55 }
                : { opacity: [0.35, 0.55, 0.35] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </>
      )}
    </div>
  );
}

function SteamLine({
  delay,
  reduceMotion,
}: {
  delay: number;
  reduceMotion: boolean;
}) {
  // Thin “steam” ribbon made with a blurred gradient.
  return (
    <motion.div
      className="absolute left-[50%] top-[46%] h-42.5 w-2.5 blur-[1px]"
      style={{
        background:
          "linear-gradient(to top, rgba(236,72,153,0.0), rgba(236,72,153,0.10), rgba(251,191,36,0.22), rgba(255,255,255,0.0))",
        transform: "translateX(-50%)",
        borderRadius: 9999,
        opacity: 0.8,
      }}
      animate={
        reduceMotion
          ? { opacity: 0.0 }
          : { y: [0, -70], opacity: [0.0, 0.65, 0.0] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }
      }
    />
  );
}

function getBaseGradient(variant: "beach" | "coffee" | "mountain") {
  switch (variant) {
    case "beach":
      return {
        background:
          "linear-gradient(to bottom, rgba(2,132,199,0.55), rgba(7,89,133,0.25) 38%, rgba(0,0,0,0.0) 70%), linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.55))",
      };
    case "coffee":
      return {
        background:
          "linear-gradient(to bottom, rgba(10,15,30,1), rgba(0,0,0,1) 70%)",
      };
    case "mountain":
    default:
      return {
        background:
          "linear-gradient(to bottom, rgba(5,6,18,1), rgba(0,0,0,1) 65%), radial-gradient(circle at 50% 15%, rgba(34,211,238,0.10), transparent 42%)",
      };
  }
}

function starsStyle(opacity = 1) {
  return {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.65) 1px, transparent 1px)",
    backgroundSize: "44px 44px",
    maskImage:
      "linear-gradient(to bottom, transparent, black 22%, black 70%, transparent)",
    opacity,
  } satisfies CSSProperties;
}

function mountainLayer({ tint, y }: { tint: string; y: string }) {
  // Mountain silhouette using a clipped polygon-ish gradient.
  return {
    position: "absolute" as const,
    left: 0,
    right: 0,
    bottom: 0,
    top: y,
    background:
      "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 15%, " +
      tint +
      " 52%, rgba(0,0,0,0) 100%)",
    clipPath:
      "polygon(0% 100%, 0% 60%, 10% 55%, 20% 62%, 30% 45%, 42% 58%, 55% 40%, 67% 55%, 78% 42%, 88% 52%, 100% 46%, 100% 100%)",
  } satisfies CSSProperties;
}
