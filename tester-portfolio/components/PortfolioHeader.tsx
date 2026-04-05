"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const NAV_ITEMS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function PortfolioHeader() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [openToWork, setOpenToWork] = useState(true);

  useEffect(() => {
    const storedAvail = window.localStorage.getItem("openToWork");

    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextDark = stored ? stored === "dark" : Boolean(prefersDark);

    const id = window.requestAnimationFrame(() => {
      if (storedAvail !== null) setOpenToWork(storedAvail === "true");
      setIsDark(nextDark);
      setMounted(true);

      document.documentElement.dataset.theme = nextDark ? "dark" : "light";
      document.documentElement.classList.toggle("dark", nextDark);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");

    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextDark);
  };

  const toggleAvailability = () => {
    const next = !openToWork;
    setOpenToWork(next);
    window.localStorage.setItem("openToWork", String(next));
  };

  const themeIcon = useMemo(() => {
    if (!mounted) return null;
    return isDark ? (
      // Moon
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12.6A9 9 0 0 1 11.4 3 7.5 7.5 0 1 0 21 12.6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      // Sun
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }, [isDark, mounted]);

  return (
    <header className="relative z-10 w-full">
      <div className="backdrop-blur bg-white/60 dark:bg-black/40 ring-1 ring-black/5 dark:ring-white/10 rounded-2xl mx-auto mt-6 max-w-7xl px-6 py-3 relative flex flex-wrap items-center justify-between gap-3">
        {/* Left: avatar + name */}
        <div className="flex items-center gap-3 z-10">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-500/30 via-cyan-700/25 to-cyan-900/20 ring-1 ring-black/10 dark:ring-white/10 flex items-center justify-center overflow-hidden">
            <Image
              src="/dfwho2q-3ec94afc-1707-4277-9040-e9ca711de110.jpg"
              alt="Avatar"
              className="object-cover w-full h-full rounded-full"
              width={40}
              height={40}
              unoptimized
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900/85 dark:text-slate-100/90 flex items-center gap-2">
              Nguyen Ba Cang (Henry)
              <button
                type="button"
                onClick={toggleAvailability}
                aria-label="Toggle availability status"
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                  openToWork
                    ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-500/30"
                    : "bg-slate-500/10 text-slate-500 dark:text-slate-400 ring-1 ring-slate-400/20"
                }`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    openToWork ? "bg-cyan-500 animate-pulse" : "bg-slate-400"
                  }`}
                />
                {openToWork ? "Open to Work" : "Not Available"}
              </button>
            </div>
            <div className="text-xs text-slate-600/90 dark:text-slate-300/80">
              Software Tester
            </div>
          </div>
        </div>

        {/* Center: tabs */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-xs font-medium text-slate-900/80 dark:text-slate-100/80 ring-1 ring-black/5 dark:ring-white/10 transition-colors hover:bg-cyan-400/10 hover:text-cyan-100 dark:hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: languages, dark mode, background selection */}
        <div className="flex items-center gap-2 z-10">
          <div className="hidden lg:flex items-center gap-2"></div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center justify-center rounded-xl bg-white/50 dark:bg-black/30 px-3 py-2 text-slate-900/85 dark:text-slate-100/85 ring-1 ring-black/5 dark:ring-white/10 transition-colors hover:bg-cyan-400/15 hover:ring-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            <span className="mr-2 hidden sm:inline text-xs font-medium">
              {mounted ? (isDark ? "Dark" : "Light") : "Mode"}
            </span>
            {themeIcon}
          </button>
        </div>
      </div>
    </header>
  );
}
