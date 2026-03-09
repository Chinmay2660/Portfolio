"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { SCROLL_TO_TOP_THRESHOLD } from "@/lib/constants";
import { spring, iconButtonHover, iconButtonTap } from "@/lib/motion";

export default function ScrollToTop() {
  useScrollToTop();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > SCROLL_TO_TOP_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={spring.snappy}
          className="fixed bottom-6 right-4 md:right-6 z-[60] flex items-center justify-center w-11 h-11 rounded-xl bg-card dark:bg-card border border-border shadow-soft dark:shadow-soft-dark text-foreground hover:text-accent hover:border-accent/50 dark:hover:border-accent/70 hover:bg-accent-soft-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0)" }}
          aria-label="Scroll to top"
          whileHover={iconButtonHover}
          whileTap={iconButtonTap}
        >
          <i className="fas fa-arrow-up text-base" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
