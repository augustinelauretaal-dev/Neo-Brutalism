"use client";

import { 
  createContext, 
  useContext, 
  useState, 
  useMemo, 
  useCallback, 
  type ReactNode 
} from "react";

// Define strict section IDs to prevent typos across the app
export type SectionId = "home" | "about" | "services" | "projects" | "mission" | "clients" | "faq" | "contact" | "";

interface SectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isScrolling: boolean;
  setIsScrolling: (state: boolean) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

/**
 * SectionProvider manages the global navigation state.
 * Uses useMemo to optimize performance and prevent unnecessary re-renders
 * of the component tree.
 */
export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // Memoize the context value to ensure stable references
  const value = useMemo(() => ({
    activeSection,
    setActiveSection,
    isScrolling,
    setIsScrolling
  }), [activeSection, isScrolling]);

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
}

/**
 * Custom hook to access section state with built-in safety check.
 */
export function useSection() {
  const context = useContext(SectionContext);
  
  if (context === undefined) {
    throw new Error("useSection must be used within a SectionProvider. Check your layout.tsx file.");
  }
  
  return context;
}