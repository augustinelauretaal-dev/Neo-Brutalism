import { type IconType } from "@/types/icons";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies like React, Next.js, and TypeScript.",
    icon: "code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
    icon: "palette"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that engage users and deliver seamless performance.",
    icon: "smartphone"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, or Google Cloud.",
    icon: "cloud"
  },
  {
    id: 5,
    title: "Consulting",
    description: "Expert technical consultation to help you make informed decisions about your technology stack.",
    icon: "briefcase"
  },
  {
    id: 6,
    title: "Maintenance",
    description: "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    icon: "shield"
  }
];

