"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { arrayCheck } from "@/utils/utils";

type ScrollDirection = "up" | "down" | "top";
type Theme = "light" | "dark";

const Navbar = () => {
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("top");
  const [theme, setTheme] = useState<Theme>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection("top");
      } else if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks: { href: string; label: string }[] = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className="max-w-7xl mx-4 lg:mx-auto px-4 py-2 border border-gray-700 rounded-lg shadow-lg lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl mx-6 font-bold text-white dark:text-gray-300">
            <Link href="/">My Portfolio</Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white dark:text-gray-300 lg:hidden"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div
            className={`${
              isMenuOpen ? "translate-x-0 mr-4" : "translate-x-full"
            } flex flex-col justify-center items-center lg:flex-row lg:items-center lg:space-x-6 absolute top-16 right-0 min-w-[200px] bg-primary border border-gray-700 rounded-lg lg:static lg:w-auto lg:bg-transparent lg:border-none transform transition-transform duration-300 lg:translate-x-0`}
          >
            {arrayCheck(navLinks) &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 dark:text-gray-300 lg:px-4 lg:py-2 p-4"
                >
                  {link.label}
                </a>
              ))}
            <button
              onClick={toggleTheme}
              className="p-2 text-white dark:text-gray-300 lg:ml-4"
            >
              <i
                className={`${
                  theme === "dark" ? "fas fa-sun" : "fas fa-moon"
                } text-xl`}
                style={{ width: "24px", height: "24px" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
