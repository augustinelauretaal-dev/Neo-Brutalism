import { type IconType } from "@/types/icons";

export interface MissionVision {
  id: number;
  type: "mission" | "vision";
  title: string;
  description: string;
  icon: IconType;
}

export const missionVision: MissionVision[] = [
  {
    id: 1,
    type: "mission",
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and success. We are committed to delivering excellence through cutting-edge development practices and unwavering dedication to client satisfaction.",
    icon: "target"
  },
  {
    id: 2,
    type: "vision",
    title: "Our Vision",
    description: "To be a global leader in digital transformation, shaping the future of technology while creating meaningful impact for our clients, team, and communities. We envision a world where every business has access to world-class technical solutions.",
    icon: "eye"
  }
];

