// Icon types for the portfolio
export const iconMap = {
  code: "code",
  palette: "palette",
  smartphone: "smartphone",
  cloud: "cloud",
  briefcase: "briefcase",
  shield: "shield",
  target: "target",
  eye: "eye",
} as const;

export type IconType = keyof typeof iconMap;

