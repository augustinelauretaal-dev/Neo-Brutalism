export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  github?: string;
  category?: string;

  // Add these
  problem?: string;
  solution?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neo-Store E-commerce",
    description: "A modern Neo-Brutalism E-commerce platform featuring bold UI, product collections, cart functionality, and responsive design built with Next.js and Tailwind CSS.",
    image: "/Image/project-placeholder-5.png",
    link: "https://e-com-hazel-sigma.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "E-commerce",

    problem:
      "Government agencies needed a centralized portal for managing services.",

    solution:
      "Developed a full-stack portal with MySQL database and admin dashboard.",

    features: [
      "Admin Dashboard",
      "User Management",
      "Service Portal",
      "Database Integration"
    ]
  },

  {
    id: 2,
    title: "Modern Portfolio",
    description: "A portfolio website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-2.png",
    link: "https://ago27.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",

    problem:
      "Needed a clean and professional developer portfolio for showcasing projects.",

    solution:
      "Created a modern UI portfolio using Next.js and Tailwind with responsive layout.",

    features: [
      "Modern UI",
      "Responsive Layout",
      "Fast Loading",
      "Smooth Animations"
    ]
  },

  {
    id: 3,
    title: "BookIt Booking Site",
    description: "A booking website with modern design using next.js tailwind",
    image: "/Image/project-placeholder-3.png",
    link: "https://book-it-kappa-opal.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    category: "Full Stack",

    problem:
      "Users needed an easy booking system for services.",

    solution:
      "Built a booking system with modern UI and backend database integration.",

    features: [
      "Booking System",
      "Database Integration",
      "Admin Panel",
      "Responsive Design"
    ]
  },

  {
    id: 4,
    title: "Government Portal",
    description: "A Government website with modern design using next.js tailwind mysql",
    image: "/Image/project-placeholder-4.png",
    link: "",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "Full Stack",

    problem:
      "Government agencies needed a centralized portal for managing services.",

    solution:
      "Developed a full-stack portal with MySQL database and admin dashboard.",

    features: [
      "Admin Dashboard",
      "User Management",
      "Service Portal",
      "Database Integration"
    ]
  },

  {
    "id": 5,
    "title": "Florentina Infinity Resort",
    "description": "A premier swimming resort in Nueva Ecija featuring wave pool luxury and family-friendly amenities, built with a modern, responsive web interface.",
    "image": "/Image/project-placeholder-6.png",
    "link": "https://florentina-infinity-resort.vercel.app/",
    "technologies": ["Next.js", "Tailwind CSS"],
    "category": "Full Stack",

    "problem": "Guests needed an accessible way to view resort amenities, check pricing packages, and make booking inquiries.",

    "solution": "Developed a responsive website showcasing resort facilities, services, rates, and integrated contact channels to streamline visitor planning.",

    "features": [
      "Wave Pool Experience Showcase",
      "Booking & Inquiry System",
      "Gallery Showcase",
      "Pricing & Package Details",
      "Guest Testimonials"
    ]
  },


  {
    "id": 6,
    "title": "TERMINAL // Typing_Master_OS",
    "description": "A terminal-themed typing speed test application featuring real-time WPM tracking, accuracy metrics, and a dedicated code mode for developers.",
    "image": "/Image/project-placeholder-7.png",
    "link": "https://typing-one-olive.vercel.app/",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "category": "Frontend",

    "problem": "Users needed an engaging, minimal, and performance-focused interface to practice typing speed and syntax accuracy.",

    "solution": "Built a browser-based typing application with a terminal aesthetic that provides real-time feedback, precise WPM calculations, and developer-focused practice modes.",

    "features": [
      "Real-time WPM Tracking",
      "Accuracy Metrics",
      "Code/Syntax Mode",
      "Terminal-Themed UI",
      "Zero-Latency Feedback Loop"
    ]
  },

  {
      "id": 7,
      "title": "King James Portfolio",
      "description": "A dynamic tribute website celebrating the career, statistics, and legacy of LeBron James with a modern, responsive design.",
      "image": "/Image/project-placeholder-8.png",
      "link": "https://lebron-james-bdbm.vercel.app/",
      "technologies": ["Next.js", "Tailwind CSS"],
      "category": "Frontend",

      "problem": "Fans and sports enthusiasts needed a centralized, interactive visual hub to explore the extensive career milestones and highlights of LeBron James.",

      "solution": "Created an immersive tribute portal featuring a career timeline, interactive statistics, highlight reels, and a photo gallery to document his professional journey.",

      "features": [
        "Interactive Career Timeline",
        "Achievement & Honors Showcase",
        "Video Highlight Integration",
        "Photo Gallery",
        "Responsive Performance-Optimized UI"
      ]
  },

  {
      "id": 8,
      "title": "King James Portfolio",
      "description": "A dynamic tribute website celebrating the career, statistics, and legacy of LeBron James with a modern, responsive design.",
      "image": "/Image/project-placeholder-9.png",
      "link": "https://lebron-james-bdbm.vercel.app/",
      "technologies": ["Next.js", "Tailwind CSS"],
      "category": "Frontend",

      "problem": "Fans and sports enthusiasts needed a centralized, interactive visual hub to explore the extensive career milestones and highlights of LeBron James.",

      "solution": "Created an immersive tribute portal featuring a career timeline, interactive statistics, highlight reels, and a photo gallery to document his professional journey.",

      "features": [
        "Interactive Career Timeline",
        "Achievement & Honors Showcase",
        "Video Highlight Integration",
        "Photo Gallery",
        "Responsive Performance-Optimized UI"
      ]
  }
];