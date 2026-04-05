"use client";

import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";

interface AiButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AiButton({ isOpen, onClick }: AiButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, translateX: -2, translateY: -2 }}
      whileTap={{ scale: 0.95, translateX: 2, translateY: 2 }}
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-[100] w-16 h-16 flex items-center justify-center border-4 border-foreground shadow-neo transition-colors ${
        isOpen ? "bg-accent-pink" : "bg-accent-purple"
      }`}
    >
      {isOpen ? (
        <X className="w-8 h-8 text-white" strokeWidth={3} />
      ) : (
        <MessageSquare className="w-8 h-8 text-white" strokeWidth={3} />
      )}
    </motion.button>
  );
}
