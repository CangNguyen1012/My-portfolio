"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import PortfolioHeader from "@/components/PortfolioHeader";

type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

export default function ProjectsPage() {
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
      {/* Background layer */}
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
        <motion.section
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="rounded-2xl bg-white/60 dark:bg-black/30 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900/90 dark:text-slate-100 mb-6">
            Projects & Case Studies
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            <p>
              This section showcases my testing work, automation projects, and
              quality assurance contributions. Add your case studies, test
              automation highlights, and tooling here.
            </p>

            <div className="grid gap-4">
              <div className="rounded-xl bg-white/40 dark:bg-black/20 p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="font-semibold text-slate-900/85 dark:text-slate-100/90 mb-2">
                  Placeholder Project 1
                </h3>
                <p className="text-xs text-slate-600/85 dark:text-slate-400/85">
                  Describe your testing work, automation frameworks, or QA
                  contributions here.
                </p>
              </div>

              <div className="rounded-xl bg-white/40 dark:bg-black/20 p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="font-semibold text-slate-900/85 dark:text-slate-100/90 mb-2">
                  Placeholder Project 2
                </h3>
                <p className="text-xs text-slate-600/85 dark:text-slate-400/85">
                  Include technologies used, challenges faced, and outcomes
                  achieved.
                </p>
              </div>

              <div className="rounded-xl bg-white/40 dark:bg-black/20 p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="font-semibold text-slate-900/85 dark:text-slate-100/90 mb-2">
                  Placeholder Project 3
                </h3>
                <p className="text-xs text-slate-600/85 dark:text-slate-400/85">
                  Links to GitHub repos, test results, or documentation are
                  great to include.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mt-6 flex gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-cyan-500/80 hover:bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            Interested? Get in Touch
          </a>
          <Link
            href="/"
            className="rounded-xl bg-white/50 dark:bg-black/40 hover:bg-white/60 dark:hover:bg-black/50 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/85 ring-1 ring-black/5 dark:ring-white/10 transition-colors"
          >
            Back Home
          </Link>
        </div>
      </main>
    </div>
  );
}
