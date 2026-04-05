"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AiButton from "./AiButton";
import AiChat from "./AiChat";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AiButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && <AiChat />}
      </AnimatePresence>
    </>
  );
}
