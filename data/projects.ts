export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  github?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neo-Brutalism Portfolio",
    description: "A portfolio website with neo-brutalism design using next.js tailwind",
    image: "/Image/project-placeholder-1.png",
    link: "https://neo-brutalism-blush.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend"
  },
  {
    id: 2,
    title: "Modern Portfolio",
    description: "A portfolio website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-2.png",
    link: "https://ago27.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend"
  },
  {
    id: 3,
    title: "BookIt Booking Site",
    description: "A booking website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-3.png",
    link: "https://book-it-kappa-opal.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Government Portal",
    description: "A Government website with modern design using next.js tailwind mysql",
    image: "/Image/project-placeholder-4.png",
    link: "",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "Full Stack"
  }
];
