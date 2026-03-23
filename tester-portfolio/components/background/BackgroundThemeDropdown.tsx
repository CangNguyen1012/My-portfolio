"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
type DropdownPosition = { top: number; left: number };
import { createPortal } from "react-dom";

type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

const THEMES: Array<{ value: BackgroundTheme; label: string }> = [
  { value: "galaxy", label: "Galaxy" },
  { value: "beach", label: "Beach" },
  { value: "coffee", label: "Coffee shop" },
  { value: "mountain", label: "Mountain" },
];

export default function BackgroundThemeDropdown({
  theme,
  onChange,
}: {
  theme: BackgroundTheme;
  onChange: (t: BackgroundTheme) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [dropdownPos, setDropdownPos] = useState<DropdownPosition | null>(null);

  const activeLabel =
    THEMES.find((t) => t.value === theme)?.label ?? "Background";

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && el.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  // Calculate dropdown position when open
  useEffect(() => {
    if (open && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.right - 224, // 224px = w-56
      });
    }
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 text-sm text-slate-900/85 ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-white/75 hover:ring-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 dark:bg-black/30 dark:text-slate-100/85 dark:ring-white/10 dark:hover:bg-black/20"
      >
        <span className="font-medium">{activeLabel}</span>
        <span
          aria-hidden
          className="text-slate-900/60 transition-transform group-data-[open=true]:rotate-180 dark:text-slate-100/60"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {typeof window !== "undefined" &&
        open &&
        dropdownPos &&
        createPortal(
          <AnimatePresence>
            <motion.div
              role="listbox"
              aria-label="Background theme"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.18, ease: "easeOut" }
              }
              style={{
                position: "absolute",
                top: dropdownPos.top,
                left: dropdownPos.left,
                zIndex: 100,
                minWidth: 224,
              }}
              className="w-56 overflow-hidden rounded-2xl bg-white/75 shadow-lg ring-1 ring-black/10 backdrop-blur dark:bg-black/40 dark:ring-white/10"
            >
              <div className="p-1">
                {THEMES.map((t) => {
                  const selected = t.value === theme;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        onChange(t.value);
                        setOpen(false);
                      }}
                      className={[
                        "w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm transition-colors focus:outline-none",
                        selected
                          ? "bg-cyan-400/20 text-cyan-900 dark:bg-cyan-400/15 dark:text-cyan-100 ring-1 ring-cyan-300/50"
                          : "text-slate-900/80 hover:bg-cyan-400/15 hover:text-cyan-100 dark:text-slate-100/80 dark:hover:bg-cyan-400/15",
                      ].join(" ")}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
