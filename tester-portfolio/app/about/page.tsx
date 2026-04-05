"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import PageShell, { useMounted } from "@/components/PageShell";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/ba-cang-nguyen-aa216830b",
    label: "LinkedIn",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://github.com/CangNguyen1012",
    label: "GitHub",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

const DETAILS = [
  { label: "Location", value: "District 7, Ho Chi Minh City, VN" },
  { label: "Type", value: "Full-time" },
  { label: "Languages", value: "Vietnamese · English" },
];

const STATS = [
  { icon: "🗓️", number: "1+", label: "Year in Testing", sub: "and counting" },
  {
    icon: "🐛",
    number: "50+",
    label: "Bugs filed",
    sub: "across all projects",
  },
  {
    icon: "📋",
    number: "100+",
    label: "Test cases written",
    sub: "manual & automated",
  },
  { icon: "🚀", number: "3", label: "Projects tested", sub: "end to end" },
];

const EXPERIENCE = [
  {
    year: "2024",
    title: "Junior QA Tester",
    desc: "Manual testing for web apps. Wrote test cases, reported bugs, and worked closely with devs to reproduce and verify fixes.",
    tags: ["Manual testing", "Jira", "Bug reporting"],
  },
  {
    year: "2023",
    title: "QA Engineer",
    desc: "Built first Selenium automation suite. Reduced regression testing from 3 days to under 4 hours. Introduced test documentation standards.",
    tags: ["Selenium", "Playwright", "CI/CD"],
  },
  {
    year: "2022",
    title: "Senior QA Engineer",
    desc: "Led full performance testing initiatives. Mentored junior testers. Defined quality strategy across 5 product teams.",
    tags: ["API Testing", "JMeter", "Postman", "Test Strategy"],
  },
];

const TECH_SKILLS = [
  "Selenium",
  "Playwright",
  "Postman",
  "JMeter",
  "SQL",
  "API Testing",
  "CI/CD",
];
const SOFT_SKILLS = [
  "Critical thinking",
  "Attention to detail",
  "Communication",
  "Team collaboration",
  "Problem solving",
];

/** Reusable section card with staggered fade-in. */
function Section({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const mounted = useMounted();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: mounted ? 0.5 : 0, delay: mounted ? delay : 0 }}
      className={`rounded-2xl bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur p-6 sm:p-8 mb-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-3xl uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-6">
      {children}
    </p>
  );
}

function AboutContent() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-10">
      {/* ── SUMMARY ── */}
      <Section>
        <SectionTitle>Origin Story</SectionTitle>

        <div className="flex flex-col sm:flex-row gap-5 mb-5">
          {/* Avatar */}
          <div className="h-28 w-28 rounded-xl overflow-hidden shrink-0">
            <Image
              src="/dfwho2q-3ec94afc-1707-4277-9040-e9ca711de110.jpg"
              alt="Avatar"
              className="object-cover w-full h-full"
              width={112}
              height={112}
              unoptimized
            />
          </div>

          {/* Name + social */}
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Nguyen Ba Cang
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Software Tester
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 hover:ring-cyan-500/20 transition-colors"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.icon} />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm sm:justify-end">
            {DETAILS.map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold">
                  {item.label}
                </p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/30 dark:bg-white/3 px-5 py-4 mb-5">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
            Software Tester with a careful, detail-oriented approach to quality.
            I focus on understanding features from the user&apos;s perspective,
            writing clear test cases, and reporting bugs that developers can act
            on quickly.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Currently growing my skills in test automation and API testing while
            looking for opportunities to contribute to a team that values
            reliable software and continuous improvement.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <a
            href="mailto:bacangnguyen1012@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-5 py-2.5 text-xs font-medium text-white transition-colors shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            Email me
          </a>
          {[
            {
              label: "CV in English",
              href: "/Nguy%E1%BB%85n%20B%C3%A1%20Cang%20-%20CV%20Tester%20(EN).pdf",
            },
            {
              label: "CV in Vietnamese",
              href: "/Nguy%E1%BB%85n%20B%C3%A1%20Cang%20-%20CV%20Tester%20(VN).pdf",
            },
          ].map((cv) => (
            <a
              key={cv.label}
              href={cv.href}
              download
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 px-4 py-2.5 text-xs font-medium text-slate-900/85 dark:text-slate-100/90 ring-1 ring-black/10 dark:ring-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
            >
              {cv.label}
            </a>
          ))}
        </div>
      </Section>

      {/* ── BY THE NUMBERS ── */}
      <Section delay={0.1}>
        <SectionTitle>The Journey So Far</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center px-4 py-2">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {stat.number}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5 italic">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section delay={0.2}>
        <SectionTitle>Where I&apos;ve Been</SectionTitle>
        <div className="space-y-8">
          {EXPERIENCE.map((job) => (
            <div
              key={job.year}
              className="relative pl-6 border-l-2 border-cyan-500/30"
            >
              <div className="absolute -left-1.75 top-1 h-3 w-3 rounded-full bg-cyan-500 ring-2 ring-white/80 dark:ring-black/40" />
              <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                {job.year}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold">
                Company Name
              </p>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {job.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Open to new opportunities */}
        <div className="mt-8 pl-6 border-l-2 border-cyan-500/30 relative">
          <div className="absolute -left-1.75 top-1 h-3 w-3 rounded-full bg-cyan-500 animate-pulse ring-2 ring-white/80 dark:ring-black/40" />
          <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            Now
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Open to new opportunities</span>
            <br />
            Looking for a QA role where automation, quality culture, and
            collaboration matter.
          </p>
        </div>
      </Section>

      {/* ── SKILLS & EDUCATION ── */}
      <Section delay={0.3}>
        <SectionTitle>My Arsenal</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-3">
              Tech Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {TECH_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/20 px-3 py-2 text-xs font-medium text-cyan-600 dark:text-cyan-400 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-3">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-3">
              Education
            </h3>
            <div className="rounded-xl bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4 mb-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Bachelor of Information Technology
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                University of Greenwich / Ho Chi Minh City
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                08/2021 - 02/2025
              </p>
            </div>

            <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-3">
              Certifications
            </h3>
            <div className="rounded-xl bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                IELTS
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Overall Band Score: 5.5
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">2020</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTAs */}
      <div className="flex justify-center gap-3 mt-4">
        <Link
          href="/projects"
          className="rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/90 ring-1 ring-black/10 dark:ring-white/15 transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/"
          className="rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 px-6 py-3 text-sm font-medium text-slate-900/85 dark:text-slate-100/90 ring-1 ring-black/10 dark:ring-white/15 transition-colors"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}
