"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiMessage from "./AiMessage";
import AiInput from "./AiInput";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  content: string;
  mode: "buttons" | "input";
  options?: string[];
  inputPlaceholder?: string;
  context: any;
}

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I can help you explore projects, services, or start a new build.",
    },
  ]);
  const [uiMode, setUiMode] = useState<"buttons" | "input">("buttons");
  const [options, setOptions] = useState<string[]>(["Projects", "Services", "Start a Project", "About"]);
  const [inputPlaceholder, setInputPlaceholder] = useState("Type your question...");
  const [context, setContext] = useState({});
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
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          context: context
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data: ChatResponse = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      setUiMode(data.mode);
      setOptions(data.options || []);
      setInputPlaceholder(data.inputPlaceholder || "Type your question...");
      setContext(data.context);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
      setUiMode("input");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, options]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[400px] h-[550px] bg-background border-4 border-foreground shadow-neo-lg flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-accent-purple p-4 border-b-4 border-foreground">
        <h3 className="text-white font-black uppercase italic tracking-wider flex items-center gap-2">
          <span className="w-3 h-3 bg-accent-lime border-2 border-white animate-pulse" />
          Assistant
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
        
        {/* UI Options (Buttons) */}
        {!isLoading && uiMode === "buttons" && options.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSendMessage(option)}
                className="px-4 py-2 border-2 border-foreground bg-accent-cyan text-black font-black uppercase text-xs shadow-[3px_3px_0_0_var(--shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        )}

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

      {/* Input - Only shown if mode is input OR forced by user interaction */}
      <AiInput 
        onSendMessage={handleSendMessage} 
        isLoading={isLoading} 
        placeholder={inputPlaceholder}
        disabled={uiMode === "buttons" && !isLoading}
      />
    </motion.div>
  );
}
