"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import BackgroundThemeDropdown from "@/components/background/BackgroundThemeDropdown";

type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [theme, setTheme] = useState<BackgroundTheme>("mountain");

  const landscapeVariant = useMemo(() => {
    if (theme === "beach" || theme === "coffee" || theme === "mountain") {
      return theme;
    }
    return "mountain";
  }, [theme]);

  return (
    <div className="relative flex flex-col flex-1 items-center justify-center font-sans">
      {/* Background layer (animated when switching themes) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          className="absolute inset-0"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.35 }}
        >
          {theme === "galaxy" ? (
            <GalaxyBackground />
          ) : (
            <LandscapeBackground variant={landscapeVariant} />
          )}
        </motion.div>
      </AnimatePresence>

      <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white/70 backdrop-blur dark:bg-black/50">
        <div className="w-full flex items-center justify-end mb-10">
          <label className="mr-3 text-xs font-medium text-slate-900/70 dark:text-slate-100/70">
            Background
          </label>
          <BackgroundThemeDropdown theme={theme} onChange={setTheme} />
        </div>

        {/* keep your existing content below */}
      </main>
    </div>
  );
}
