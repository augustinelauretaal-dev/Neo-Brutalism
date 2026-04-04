import { NextResponse } from "next/server";

const PORTFOLIO_KNOWLEDGE = {
  sections: ["Hero", "Services", "Projects", "Clients", "FAQ", "Contact"],
  techStack: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Modern UI Design",
    "POS Systems",
    "Full-stack Applications"
  ],
  services: [
    "Web Development (React, Next.js, TS)",
    "UI/UX Design (Modern, Neo-Brutalism)",
    "Mobile Development",
    "POS System Architecture",
    "Full-stack Solutions"
  ],
  projects: [
    "Neo-Brutalism Portfolio",
    "Modern Portfolio (Ago27)",
    "BookIt Booking Site",
    "Government Portal (Next.js + MySQL)"
  ]
};

type Intent =
  | "greeting"
  | "projects"
  | "services"
  | "tech"
  | "contact"
  | "about"
  | "start_project"
  | "unknown";

function detectIntent(message: string): Intent {
  const msg = message.toLowerCase();

  if (/hi|hello|hey/.test(msg)) return "greeting";
  if (/project|work|portfolio/.test(msg)) return "projects";
  if (/service|offer|can you/.test(msg)) return "services";
  if (/stack|tech|technology|use/.test(msg)) return "tech";
  if (/contact|hire|reach/.test(msg)) return "contact";
  if (/about|who are you/.test(msg)) return "about";
  if (/build|start|create|develop/.test(msg)) return "start_project";

  return "unknown";
}

function generateResponse(intent: Intent) {
  switch (intent) {
    case "greeting":
      return {
        content:
          "Hi! I can help you explore projects, services, or start a new build. What are you looking for?",
        followUp: true
      };

    case "projects":
      return {
        content: `Here are some projects Augustine built:\n\n• ${PORTFOLIO_KNOWLEDGE.projects.join(
          "\n• "
        )}\n\nWould you like to see a specific one?`,
        followUp: true
      };

    case "services":
      return {
        content: `These are the main services offered:\n\n• ${PORTFOLIO_KNOWLEDGE.services.join(
          "\n• "
        )}\n\nWhat are you planning to build?`,
        followUp: true
      };

    case "tech":
      return {
        content: `The core tech stack includes:\n\n• ${PORTFOLIO_KNOWLEDGE.techStack.join(
          "\n• "
        )}\n\nAre you building something specific?`,
        followUp: true
      };

    case "contact":
      return {
        content:
          "You can contact Augustine using the contact section below. Would you like help planning your project first?",
        followUp: true
      };

    case "about":
      return {
        content:
          "Augustine is a developer specializing in Next.js, Tailwind, and modern UI design. He builds high-performance web apps and POS systems.",
        followUp: true
      };

    case "start_project":
      return {
        content:
          "Great! Let me help you with that.\n\nWhat are you building?\n• Website\n• POS System\n• Dashboard\n• Mobile App",
        followUp: true
      };

    default:
      return {
        content:
          "I can help you with:\n• Projects\n• Services\n• Tech Stack\n• Start a Project\n\nWhat would you like to explore?",
        followUp: true
      };
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const intent = detectIntent(lastMessage);
    const response = generateResponse(intent);

    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json({
      content: response.content,
      followUp: response.followUp
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}