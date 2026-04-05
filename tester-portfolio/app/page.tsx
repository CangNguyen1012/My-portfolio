"use client";

import { motion } from "framer-motion";

import PageShell, { useMounted } from "@/components/PageShell";

const SKILLS = [
  "Selenium",
  "Playwright",
  "Postman",
  "Jira",
  "JMeter",
  "SQL",
  "API Testing",
  "Agile / Scrum",
];

const FEATURE_CARDS = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-cyan-500"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Test automation",
    desc: "End-to-end scripts that catch regressions before they hit production.",
    href: "/projects",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-cyan-600"
      >
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 7h8M8 11h8M8 15h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Bug documentation",
    desc: "Clear, reproducible reports that developers actually want to read.",
    href: "/projects",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-cyan-700"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Quality strategy",
    desc: "Test plans and coverage frameworks built around your release cycle.",
    href: "/projects",
  },
];

function HomeContent() {
  const mounted = useMounted();

  return (
    <main className="relative z-10 flex flex-col items-center mx-auto w-full max-w-7xl px-6 pb-20">
      {/* Hero */}
      <section className="w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mounted ? 0.6 : 0 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900/90 dark:text-slate-100 mb-4">
            {`Let's build better software together`}
          </h1>
          <p className="text-lg text-slate-700/85 dark:text-slate-300/85 max-w-2xl mx-auto mb-8">
            {`I bring a methodical approach to testing — finding what breaks, how it breaks, and why it matters. Test automation, quality strategy, meticulous bug documentation.`}
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            <a
              href="/contact"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 px-6 py-3 text-sm font-medium text-white transition-colors shadow-lg shadow-cyan-500/20"
            >
              Contact Me
            </a>
            <a
              href="/about"
              className="rounded-xl border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition-colors"
            >
              My Story
            </a>
            <a
              href="/projects"
              className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-colors"
            >
              Case Studies
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: mounted ? 0.5 : 0, delay: mounted ? 0.15 : 0 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-400 ring-1 ring-cyan-500/40 dark:ring-cyan-400/35"
          >
            {skill}
          </span>
        ))}
      </motion.section>

      {/* Feature Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: mounted ? 0.5 : 0, delay: mounted ? 0.25 : 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-12"
      >
        {FEATURE_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-6 flex flex-col gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-white/70 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
              {card.icon}
            </div>
            <h3 className="text-base font-semibold text-slate-900/90 dark:text-slate-100">
              {card.title}
            </h3>
            <p className="text-sm text-slate-600/90 dark:text-slate-400 leading-relaxed">
              {card.desc}
            </p>
            <a
              href={card.href}
              className="mt-auto text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Learn more →
            </a>
          </div>
        ))}
      </motion.section>
    </main>
  );
}

export default function Home() {
  return (
    <PageShell>
      <HomeContent />
    </PageShell>
  );
}
