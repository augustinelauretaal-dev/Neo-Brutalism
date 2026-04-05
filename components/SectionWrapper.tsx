"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useSection, type SectionId } from "./SectionContext";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id: SectionId;
  fullWidth?: boolean;
  centered?: boolean;
  glow?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  fullWidth = false,
  centered = false,
  glow = false
}: SectionWrapperProps) {

  const ref = useRef<HTMLElement>(null);
  const { setActiveSection, isScrolling } = useSection();

  const isInView = useInView(ref, {
    amount: 0.35,
    once: false
  });

  // Active section tracking
  useEffect(() => {
    if (isInView && !isScrolling && id) {
      setActiveSection(id);
    }
  }, [isInView, isScrolling, id, setActiveSection]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants}
      className={`
        relative w-full
        py-20 md:py-28 lg:py-32
        ${centered ? "text-center" : ""}
        ${fullWidth ? "" : "max-w-7xl mx-auto px-6"}
        ${className}
      `}
    >

      {/* Optional Background Glow */}
      {glow && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-purple/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 blur-[140px]" />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>

    </motion.section>
  );
}