"use client";

import { 
  Code, 
  Palette, 
  Smartphone, 
  Cloud, 
  Briefcase, 
  Shield,
  Target,
  Eye,
  type LucideProps 
} from "lucide-react";

// 1. Define the map outside the component to prevent re-renders
const iconMap = {
  code: Code,
  palette: Palette,
  smartphone: Smartphone,
  cloud: Cloud,
  briefcase: Briefcase,
  shield: Shield,
  target: Target,
  eye: Eye,
};

// 2. Extract the keys to create a strict type for the 'icon' prop
export type IconType = keyof typeof iconMap;

interface ServiceIconsProps extends LucideProps {
  icon: IconType;
  className?: string;
}

/**
 * ServiceIcons Component
 * A professional wrapper for Lucide icons that ensures type safety
 * and consistent visual styling across the portfolio.
 */
export default function ServiceIcons({ 
  icon, 
  className = "", 
  size = 24, 
  strokeWidth = 2,
  ...props 
}: ServiceIconsProps) {
  
  // 3. Dynamically pick the Icon component
  const IconComponent = iconMap[icon] || Code;

  return (
    <IconComponent 
      size={size}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`} 
      {...props} 
    />
  );
}