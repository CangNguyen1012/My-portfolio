"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import PageShell, { useMounted } from "@/components/PageShell";

const PROJECTS = [
  {
    title: "Placeholder Project 1",
    desc: "Describe your testing work, automation frameworks, or QA contributions here.",
  },
  {
    title: "Placeholder Project 2",
    desc: "Include technologies used, challenges faced, and outcomes achieved.",
  },
  {
    title: "Placeholder Project 3",
    desc: "Links to GitHub repos, test results, or documentation are great to include.",
  },
];

function ProjectsContent() {
  const mounted = useMounted();

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] mx-auto w-full max-w-5xl px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: mounted ? 0.6 : 0 }}
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
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="rounded-xl bg-white/40 dark:bg-black/20 p-4 ring-1 ring-black/5 dark:ring-white/10"
              >
                <h3 className="font-semibold text-slate-900/85 dark:text-slate-100/90 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600/85 dark:text-slate-400/85">
                  {project.desc}
                </p>
              </div>
            ))}
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
  );
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <ProjectsContent />
    </PageShell>
  );
}
