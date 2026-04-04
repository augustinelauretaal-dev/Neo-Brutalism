"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiMessage from "./AiMessage";
import AiInput from "./AiInput";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I can help you explore projects, services, or start a new build.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[400px] h-[500px] bg-background border-4 border-foreground shadow-neo-lg flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-accent-purple p-4 border-b-4 border-foreground">
        <h3 className="text-white font-black uppercase italic tracking-wider flex items-center gap-2">
          <span className="w-3 h-3 bg-accent-lime border-2 border-white animate-pulse" />
          Portfolio Assistant
        </h3>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 bg-[radial-gradient(circle_at_center,_var(--border-subtle)_1px,_transparent_1px)] bg-[length:20px_20px]"
      >
        {messages.map((msg, i) => (
          <AiMessage key={i} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="px-4 py-2 bg-panel border-2 border-foreground shadow-[4px_4px_0_0_var(--shadow-color)]">
              <div className="flex gap-1">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                  className="w-2 h-2 bg-accent-blue"
                />
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  className="w-2 h-2 bg-accent-blue"
                />
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  className="w-2 h-2 bg-accent-blue"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <AiInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </motion.div>
  );
}
