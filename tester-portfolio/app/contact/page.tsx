"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import PortfolioHeader from "@/components/PortfolioHeader";

type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

export default function ContactPage() {
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
            {`Let's Connect`}
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-slate-700/90 dark:text-slate-300/80">
            <p>
              {`Open to opportunities in QA, test automation, and quality leadership. Let's chat about testing strategy, automation, or just software craftsmanship.`}
            </p>

            <div className="pt-6 border-t border-slate-400/20 dark:border-slate-600/20">
              <h2 className="text-lg font-semibold text-slate-900/85 dark:text-slate-100/90 mb-4">
                Get in Touch
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <a
                  href="mailto:your.email@example.com"
                  className="rounded-xl bg-linear-to-r from-cyan-500/70 to-violet-500/70 hover:from-cyan-500/80 hover:to-violet-500/80 px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                >
                  📧 Email Me
                </a>
                <a
                  href="#"
                  className="rounded-xl bg-cyan-500/60 hover:bg-cyan-500/70 px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-xl bg-slate-900/40 dark:bg-white/20 hover:bg-slate-900/50 dark:hover:bg-white/30 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/85 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                >
                  🔗 GitHub
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-400/20 dark:border-slate-600/20">
              <h3 className="font-semibold text-slate-900/85 dark:text-slate-100/90 mb-3">
                About You
              </h3>
              <p>
                {`Whether you're looking for a dedicated QA engineer, need test automation expertise, or want to discuss QA strategy, I'm here to help. Feel free to reach out with:`}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-xs">
                <li>Project opportunities in testing or QA</li>
                <li>Consulting on test automation strategy</li>
                <li>Questions about quality assurance practices</li>
                <li>Collaboration on open-source testing tools</li>
              </ul>
            </div>

            <p className="text-xs text-slate-600/80 dark:text-slate-400/80 pt-4">
              I typically respond within 24 hours. Looking forward to
              connecting!
            </p>
          </div>
        </motion.section>

        <div className="mt-6 flex gap-3">
          <a
            href="/about"
            className="rounded-xl bg-white/50 dark:bg-black/40 hover:bg-white/60 dark:hover:bg-black/50 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/85 ring-1 ring-black/5 dark:ring-white/10 transition-colors"
          >
            Learn More About Me
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
