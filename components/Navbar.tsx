"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useSection, type SectionId } from "./SectionContext";

const navLinks: { name: string; href: SectionId }[] = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Mission", href: "mission" },
  { name: "Clients", href: "clients" },
  { name: "Faq", href: "faq" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { activeSection, setActiveSection, setIsScrolling } = useSection();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: SectionId) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setActiveSection(id);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setTimeout(() => setIsScrolling(false), 1000);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background border-b-4 border-foreground shadow-neo'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={(e) => handleNavClick(e, "home")}
          whileHover={{ translateX: -2, translateY: -2 }}
          className="flex items-center gap-3 group"
        >
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            AUGUSTINE
          </span>
          <span className="inline-block w-3 h-3 bg-accent-purple ml-2 shadow-[2px_2px_0_0_var(--shadow-color)] group-hover:bg-accent-cyan transition-colors border-2 border-foreground" />
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-black uppercase tracking-widest border-2 transition-all ${
                    activeSection === link.href
                      ? "bg-accent-purple text-white border-foreground shadow-[3px_3px_0_0_var(--shadow-color)] -translate-x-1 -translate-y-1"
                      : "border-transparent hover:border-foreground hover:bg-accent-cyan/20 hover:shadow-[3px_3px_0_0_var(--shadow-color)] hover:-translate-x-1 hover:-translate-y-1"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 border-2 border-foreground shadow-[3px_3px_0_0_var(--shadow-color)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all ${
              theme === "dark" ? "bg-accent-cyan" : "bg-accent-yellow"
            }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div key="sun" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                  <Sun size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                  <Moon size={20} className="text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 border-2 border-foreground shadow-[2px_2px_0_0_var(--shadow-color)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all ${
              theme === "dark" ? "bg-accent-purple" : "bg-accent-yellow"
            }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div key="sun-mob" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                  <Sun size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div key="moon-mob" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                  <Moon size={20} className="text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border-2 border-foreground bg-accent-blue shadow-[2px_2px_0_0_var(--shadow-color)]"
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute top-full left-0 w-full bg-accent-yellow border-b-4 border-foreground px-6 py-10 md:hidden h-screen"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-black uppercase italic border-b-4 border-foreground pb-2 text-left hover:bg-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
