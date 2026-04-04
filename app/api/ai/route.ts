import { NextResponse } from "next/server";

type ChatMode = "buttons" | "input";

interface ChatResponse {
  content: string;
  mode: ChatMode;
  options?: string[];
  inputPlaceholder?: string;
  context: any;
}

const KNOWLEDGE = {
  projects: ["Neo-Brutalism Portfolio", "Modern Portfolio", "BookIt", "Gov Portal"],
  services: ["Web Dev", "UI/UX Design", "POS Systems", "Full-stack"]
};

function generateResponse(message: string, context: any): ChatResponse {
  const msg = message.toLowerCase();
  let nextContext = { ...context };

  // LEAD CAPTURE REDIRECT
  if (msg.includes("price") || msg.includes("cost") || msg.includes("budget") || msg.includes("hire")) {
    return {
      content: "Let's talk business. What are we building?",
      mode: "buttons",
      options: ["Website", "POS System", "Dashboard", "Mobile App"],
      context: { step: "project_type" }
    };
  }

  // START / GREETING
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey") || !context.step) {
    return {
      content: "Hi. I'm your guide here. What's the goal?",
      mode: "buttons",
      options: ["Projects", "Services", "Start Project"],
      context: { step: "initial" }
    };
  }

  // FLOW: PROJECTS
  if (msg === "projects" || (context.step === "initial" && msg === "projects")) {
    return {
      content: `Key work: ${KNOWLEDGE.projects.join(", ")}.`,
      mode: "buttons",
      options: ["View Demo", "Tech Stack", "Back"],
      context: { step: "projects_list" }
    };
  }

  if (context.step === "projects_list") {
    if (msg === "back") {
      return generateResponse("hi", {});
    }
    if (msg === "tech stack") {
      return {
        content: "Next.js, Tailwind, TS, MySQL. High performance only.",
        mode: "buttons",
        options: ["Start Project", "Back"],
        context: { step: "projects_list" }
      };
    }
    if (msg === "view demo") {
      return {
        content: "Check the 'Projects' section on the main page for live links.",
        mode: "buttons",
        options: ["Start Project", "Back"],
        context: { step: "projects_list" }
      };
    }
  }

  // FLOW: SERVICES
  if (msg === "services" || (context.step === "initial" && msg === "services")) {
    return {
      content: "I deliver specialized digital solutions:",
      mode: "buttons",
      options: ["Web Dev", "UI/UX", "POS", "Full-stack"],
      context: { step: "services_list" }
    };
  }

  if (context.step === "services_list") {
    return {
      content: "Ready to build one of these?",
      mode: "buttons",
      options: ["Start Project", "Back"],
      context: { step: "initial" }
    };
  }

  // FLOW: START PROJECT
  if (msg === "start project" || (context.step === "initial" && msg === "start project")) {
    return {
      content: "Nice. What type of project?",
      mode: "buttons",
      options: ["Website", "POS System", "Dashboard", "Mobile App"],
      context: { step: "project_type" }
    };
  }

  if (context.step === "project_type") {
    if (msg === "website") {
      return {
        content: "What kind of website?",
        mode: "buttons",
        options: ["Landing Page", "E-commerce", "Full System"],
        context: { step: "project_details_prompt", type: "Website" }
      };
    }
    if (msg === "pos system") {
      return {
        content: "Focus area?",
        mode: "buttons",
        options: ["Inventory", "Sales", "Multi-branch"],
        context: { step: "project_details_prompt", type: "POS" }
      };
    }
    // Generic fallback for other types
    return {
      content: "Describe your project briefly.",
      mode: "input",
      inputPlaceholder: "Features, goals, etc.",
      context: { step: "awaiting_details" }
    };
  }

  if (context.step === "project_details_prompt") {
    return {
      content: "Got it. Describe your project briefly.",
      mode: "input",
      inputPlaceholder: "Features, goals, etc.",
      context: { step: "awaiting_details" }
    };
  }

  if (context.step === "awaiting_details") {
    return {
      content: "Got it. This can be built. Enter your email to proceed.",
      mode: "input",
      inputPlaceholder: "Email address",
      context: { step: "awaiting_email" }
    };
  }

  if (context.step === "awaiting_email") {
    return {
      content: "Received. Augustine will reach out soon. Anything else?",
      mode: "buttons",
      options: ["Projects", "Services", "Restart"],
      context: { step: "initial" }
    };
  }

  // UNKNOWN / FALLBACK
  return {
    content: "I can guide you better. Choose one:",
    mode: "buttons",
    options: ["Projects", "Services", "Start Project"],
    context: { step: "initial" }
  };
}

export async function POST(req: Request) {
  try {
    const { messages, context = {} } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = generateResponse(lastMessage, context);

    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
