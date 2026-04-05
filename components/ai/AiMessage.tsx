"use client";

import { motion } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AiMessageProps {
  message: Message;
}

export default function AiMessage({ message }: AiMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isAssistant ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-[85%] px-4 py-3 border-2 border-foreground font-bold text-sm shadow-[4px_4px_0_0_var(--shadow-color)] ${
          isAssistant
            ? "bg-panel text-foreground"
            : "bg-accent-yellow text-black"
        }`}
      >
        {isAssistant && (
          <p className="text-[10px] uppercase tracking-widest text-accent-blue mb-1">
            Assistant
          </p>
        )}
        <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </motion.div>
  );
}
