"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  text: string;
  variant?: "purple" | "cyan" | "yellow" | "blue" | "lime" | "pink";
}

export default function Badge({ text, variant = "purple" }: BadgeProps) {
  const variants = {
    purple: "bg-accent-purple text-white",
    cyan: "bg-accent-cyan text-black",
    yellow: "bg-accent-yellow text-black",
    blue: "bg-accent-blue text-white",
    lime: "bg-accent-lime text-black",
    pink: "bg-accent-pink text-white",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.1, rotate: -2 }}
      className={`px-3 py-1 border-2 border-foreground font-black uppercase text-[10px] tracking-tighter shadow-[3px_3px_0_0_var(--shadow-color)] transition-all ${variants[variant]}`}
    >
      {text}
    </motion.span>
  );
}
