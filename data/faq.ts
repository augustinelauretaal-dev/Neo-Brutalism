export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, cloud solutions, technical consulting, and ongoing maintenance support."
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A typical website takes 4-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Each project receives a customized quote based on specific requirements and deliverables."
  },
  {
    id: 4,
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer maintenance packages tailored to your needs."
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Next.js, TypeScript, Node.js, Python, React Native, and cloud platforms like AWS, Azure, and Google Cloud."
  },
  {
    id: 6,
    question: "How do we get started?",
    answer: "Simply contact us through the form on this page or email us directly. We'll schedule a free consultation to discuss your project requirements, goals, and how we can help bring your vision to life."
  }
];

