"use client";

import { SendHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AiInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export default function AiInput({ 
  onSendMessage, 
  isLoading, 
  placeholder = "Type your question...",
  disabled = false
}: AiInputProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading && !disabled) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (!isLoading && !disabled) {
      inputRef.current?.focus();
    }
  }, [isLoading, disabled]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-4 border-t-4 border-foreground bg-panel flex gap-3 transition-opacity ${disabled ? "opacity-50 grayscale pointer-events-none" : "opacity-100"}`}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={disabled ? "Select an option above..." : placeholder}
        disabled={isLoading || disabled}
        className="flex-1 bg-background border-2 border-foreground px-4 py-2 font-bold focus:outline-none focus:bg-accent-blue/5 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim() || disabled}
        className="w-12 h-12 bg-accent-yellow border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_0_var(--shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
      >
        <SendHorizontal className="w-5 h-5 text-black" strokeWidth={3} />
      </button>
    </form>
  );
}
