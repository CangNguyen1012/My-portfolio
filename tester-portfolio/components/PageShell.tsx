"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";
import LandscapeBackground from "@/components/background/LandscapeBackground";
import PortfolioHeader from "@/components/PortfolioHeader";

export type BackgroundTheme = "galaxy" | "beach" | "coffee" | "mountain";

const MountedContext = createContext(false);

/** Returns `true` once the component has hydrated on the client. */
export function useMounted() {
  return useContext(MountedContext);
}

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme] = useState<BackgroundTheme>("mountain");

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const landscapeVariant = useMemo(() => {
    if (theme === "beach" || theme === "coffee" || theme === "mountain") {
      return theme;
    }
    return "mountain";
  }, [theme]);

  return (
    <MountedContext.Provider value={mounted}>
      <div className="relative min-h-screen w-full font-sans">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: mounted ? 0.35 : 0 }}
          >
            {theme === "galaxy" ? (
              <GalaxyBackground />
            ) : (
              <LandscapeBackground variant={landscapeVariant} />
            )}
          </motion.div>
        </AnimatePresence>

        <PortfolioHeader />

        {children}
      </div>
    </MountedContext.Provider>
  );
}
