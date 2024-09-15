"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ScrollDirection = "up" | "down" | "top";
type Theme = "light" | "dark";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("top");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection("top");
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" ? "-100%" : "0",
        opacity: scrollDirection === "top" ? 1 : 0.95,
      }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-primary shadow-lg py-3 transition-all duration-200 ${
        scrollDirection === "top" ? "bg-opacity-60" : "bg-opacity-40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 border border-gray-700 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-2xl mx-6 font-bold text-white dark:text-gray-300">
            <Link href="/">My Portfolio</Link>
          </div>

          <div className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors duration-300 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 dark:text-gray-300 transition-colors duration-300"
            >
              <i
                className={`${
                  theme === "dark" ? "fas fa-sun" : "fas fa-moon"
                } text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
