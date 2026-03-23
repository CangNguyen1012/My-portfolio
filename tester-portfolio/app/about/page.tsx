"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import PortfolioHeader from "@/components/PortfolioHeader";

type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

export default function AboutPage() {
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
            About Me
          </h1>
          <div className="space-y-4 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            <p>
              {`I'm a QA engineer and tester with a methodical approach to quality assurance. My philosophy: understand the product deeply, think like a user (and a malicious actor), and document findings clearly. I excel at both manual testing and automation—knowing when each is best.`}
            </p>
            <p>
              {`Specialties include regression testing, test automation frameworks, API testing, and building testing strategies that scale. I'm passionate about reducing bugs before they reach users and helping development teams understand the "why" behind failures, not just the "what."`}
            </p>
            <p>
              {`When I'm not hunting bugs, I'm exploring new testing tools, contributing to test automation communities, and sharing insights on effective QA practices.`}
            </p>

            <div className="pt-6 mt-6 border-t border-slate-400/20 dark:border-slate-600/20">
              <h2 className="text-lg font-semibold text-slate-900/85 dark:text-slate-100/90 mb-4">
                Key Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Manual Testing",
                  "Test Automation",
                  "API Testing",
                  "Regression Testing",
                  "Test Strategy",
                  "Bug Reporting",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg bg-cyan-500/10 dark:bg-cyan-500/5 px-3 py-2 text-xs font-medium text-slate-900/80 dark:text-slate-100/80 ring-1 ring-cyan-500/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mt-6 flex gap-3">
          <a
            href="/projects"
            className="rounded-xl bg-cyan-500/80 hover:bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            View Projects
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
