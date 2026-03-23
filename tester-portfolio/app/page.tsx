"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import PortfolioHeader from "@/components/PortfolioHeader";

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
    <div className="relative min-h-screen w-full font-sans">
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

      <PortfolioHeader theme={theme} onThemeChange={setTheme} />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] mx-auto w-full max-w-5xl px-4">
        {/* Hero Section */}
        <section className="w-full">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900/90 dark:text-slate-100 mb-4">
              {`Let's build better software together`}
            </h1>
            <p className="text-lg text-slate-700/85 dark:text-slate-300/85 max-w-2xl mx-auto mb-6">
              {`I bring a methodical approach to testing—finding what breaks, how it breaks, and why it matters. Whether it's test automation, quality strategy, or meticulous bug documentation, I'm here to ensure your product works.`}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="/contact"
                className="rounded-xl bg-cyan-500/80 hover:bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="rounded-xl bg-white/50 dark:bg-black/40 hover:bg-white/60 dark:hover:bg-black/50 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/85 ring-1 ring-black/5 dark:ring-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
              >
                See My Work
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
