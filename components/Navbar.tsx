"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { arrayCheck } from "../utils/utils";
import { spring, slideInLeft, staggerContainer, buttonHover, buttonTap } from "@/lib/motion";

type ScrollDirection = "up" | "down" | "top";
type Theme = "light" | "dark";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("top");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored ?? "dark";
    setTheme(initial);
  }, [mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) setScrollDirection("top");
      else if (currentScrollY > lastScrollY.current) setScrollDirection("down");
      else setScrollDirection("up");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const [activeHref, setActiveHref] = useState<string>(NAV_LINKS[0]?.href ?? "#home");

  useEffect(() => {
    if (!mounted) return;
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    const visibles: Record<string, number> = {};

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;
          visibles[`#${id}`] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        const best = Object.entries(visibles).reduce((a, b) => (b[1] > a[1] ? b : a), ["#home", 0]);
        setActiveHref(best[0]);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        visibles[`#${id}`] = 0;
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, [mounted]);

  const navLinks = NAV_LINKS;

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const mobileMenuContent =
    isMenuOpen && typeof document !== "undefined" ? (
      createPortal(
        <>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            aria-label="Close menu"
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={spring.snappy}
            className="fixed right-4 top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-[70] lg:hidden w-auto min-w-[11rem] py-2 px-2 bg-card dark:bg-card shadow-soft dark:shadow-soft-dark border border-border rounded-2xl"
          >
            <div className="flex flex-col gap-0.5">
              {arrayCheck(navLinks) &&
                navLinks.map((link) => {
                  const isActive = activeHref === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`py-3 px-3 rounded-xl text-sm font-medium transition-all duration-200 ease-out ${
                        isActive
                          ? "text-accent"
                          : "text-foreground/90 hover:text-accent hover:bg-accent-soft-hover"
                      }`}
                      whileTap={buttonTap}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              <div className="pt-2">
                <motion.button
                  onClick={toggleTheme}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-foreground/90 hover:text-accent hover:bg-accent-soft-hover transition-colors touch-manipulation"
                  whileTap={buttonTap}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <i
                    className={`${theme === "dark" ? "fas fa-sun" : "fas fa-moon"} text-base`}
                    style={{ width: "18px", height: "18px" }}
                    aria-hidden
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>,
        document.body
      )
    ) : null;

  return (
    <>
      {mobileMenuContent}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: scrollDirection === "down" ? "-100%" : "0", opacity: 1 }}
        transition={spring.smooth}
        className="fixed top-0 left-0 right-0 z-50 w-full py-3 px-4 lg:px-6 max-sm:px-0 pt-[calc(0.75rem+env(safe-area-inset-top,0px))]"
      >
        <motion.div
          className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-2.5 rounded-2xl border border-border bg-card/90 dark:bg-card/95 backdrop-blur-xl shadow-soft dark:shadow-soft-dark max-sm:max-w-none max-sm:rounded-none max-sm:border-0 max-sm:px-4 overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-center gap-2 min-w-0">
            <motion.div
              className="min-w-0 shrink-0 text-lg font-semibold tracking-tight text-foreground"
              variants={slideInLeft}
            >
              <Link
                href="/"
                className="hover:text-accent transition-all duration-200 ease-out"
              >
                Portfolio
              </Link>
            </motion.div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-accent-soft-hover transition-all duration-200 ease-out touch-manipulation shrink-0"
              variants={slideInLeft}
              whileTap={buttonTap}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <i className="fas fa-bars text-lg" aria-hidden />
            </motion.button>

            <motion.div
              className="hidden lg:flex lg:flex-row lg:items-center gap-0.5 min-w-0"
              variants={staggerContainer}
            >
              {arrayCheck(navLinks) &&
                navLinks.map((link) => {
                  const isActive = activeHref === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ease-out ${
                        isActive
                          ? "text-accent"
                          : "text-foreground/90 hover:text-accent hover:bg-accent-soft-hover"
                      }`}
                      variants={slideInLeft}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              <motion.button
                onClick={toggleTheme}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-foreground/90 hover:text-accent hover:bg-accent-soft-hover transition-all duration-200 ease-out ml-1 touch-manipulation"
                variants={slideInLeft}
                whileHover={{ scale: 1.04, rotate: 180, transition: spring.snappy }}
                whileTap={buttonTap}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                <i
                  className={`${theme === "dark" ? "fas fa-sun" : "fas fa-moon"} text-base`}
                  style={{ width: "18px", height: "18px" }}
                  aria-hidden
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
