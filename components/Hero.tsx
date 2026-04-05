"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Local grid removed - global now */}
      {/* Decorative Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-foreground bg-accent-purple shadow-neo -rotate-12 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-foreground bg-accent-cyan shadow-neo rotate-12 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 border-4 border-foreground bg-accent-yellow text-black font-black uppercase text-sm mb-10 shadow-neo hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <span className="h-3 w-3 bg-accent-lime border-2 border-black rounded-sm" />
            Available for new projects
          </motion.div>

          {/* Subtitle */}
          <motion.p className="text-lg font-black uppercase tracking-[0.2em] text-foreground mb-4">
            Frontend Engineer • Full Stack Developer
          </motion.p>

          {/* Main Title */}
          <motion.h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 uppercase italic leading-[0.85]">
            Architecting <br />
            <span className="bg-accent-purple text-white px-4 border-4 border-foreground shadow-neo inline-block mt-4 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
              Digital Innovation
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p className="text-xl md:text-2xl font-bold text-foreground/80 max-w-2xl mx-auto mb-12 leading-tight border-l-8 border-foreground pl-6 text-left">
            I build modern web applications focused on performance, scalability,
            and exceptional user experience.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              whileHover={{ translateX: -4, translateY: -4 }}
              className="group relative px-10 py-5 bg-accent-yellow text-black border-4 border-foreground font-black text-xl uppercase shadow-neo hover:shadow-neo-lg transition-all"
            >
              <span className="flex items-center gap-2">
                View Projects
                <ArrowRight size={24} strokeWidth={3} />
              </span>
            </motion.a>

            {/*<motion.a
              href="/Resume/AUGUSTINE LLANERA LAURETA.pdf"
              download
              whileHover={{ translateX: -4, translateY: -4 }}
              className="group flex items-center gap-2 px-10 py-5 bg-white text-black border-4 border-foreground font-black text-xl uppercase shadow-neo transition-all"
            >
              <Download size={24} strokeWidth={3} />
              Resume
            </motion.a> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-4">
        <span className="text-sm font-black uppercase tracking-widest text-foreground [writing-mode:vertical-lr]">
          Scroll Down
        </span>
        <div className="w-8 h-16 border-4 border-foreground bg-accent-purple relative">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 bg-white border-2 border-black"
          />
        </div>
      </div>
    </section>
  );
}
