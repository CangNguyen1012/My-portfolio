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

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-24 pt-10">
        <section
          id="about"
          className="scroll-mt-28 rounded-2xl bg-white/60 dark:bg-black/30 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur"
        >
          <h2 className="text-lg font-semibold text-slate-900/85 dark:text-slate-100/90">
            About
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            I’m a tester focused on clear bug reports, steady regression
            coverage, and automation where it actually helps. (Replace this
            text.)
          </p>
        </section>

        <section
          id="projects"
          className="scroll-mt-28 mt-5 rounded-2xl bg-white/60 dark:bg-black/30 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur"
        >
          <h2 className="text-lg font-semibold text-slate-900/85 dark:text-slate-100/90">
            Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            Add your case studies, test automation highlights, and tooling
            here. (Replace this text.)
          </p>
        </section>

        <section
          id="contract"
          className="scroll-mt-28 mt-5 rounded-2xl bg-white/60 dark:bg-black/30 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur"
        >
          <h2 className="text-lg font-semibold text-slate-900/85 dark:text-slate-100/90">
            Contract
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            Contact details and availability go here. (Replace this text.)
          </p>
        </section>
      </main>
    </div>
  );
}
