"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { useSection, type SectionId } from "./SectionContext";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/augustinelauretaal-dev",
    color: "bg-accent-purple",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/augustine-laureta-a40057250/",
    color: "#0077b5", // Keep specific colors if you prefer, or use bg-accent-blue
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/augustine.laureta_27",
    color: "bg-accent-blue",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:augustinelaureta@gmail.com",
    color: "bg-accent-cyan",
  },
];

const footerLinks: { name: string; id: SectionId }[] = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Mission", id: "mission" },
  { name: "Clients", id: "clients" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const { setActiveSection, setIsScrolling } = useSection();

  const handleNavClick = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <footer className="relative bg-background border-t-8 border-foreground overflow-hidden pt-24 pb-12">
      
      {/* Decorative Ticker Tape Top Border */}
      <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 text-white font-black uppercase text-[10px] tracking-[0.3em]"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}>Augustine Llanera Laureta • Full Stack Developer • UI/UX Designer •</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Status Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <motion.button
                onClick={scrollToTop}
                className="text-5xl font-black tracking-tighter text-foreground uppercase italic group"
              >
                Augustine
                <span className="inline-block w-4 h-4 bg-accent-purple ml-2 shadow-[2px_2px_0_0_var(--shadow-color)] group-hover:bg-accent-cyan transition-colors border-2 border-foreground" />
              </motion.button>

              <p className="text-foreground font-bold text-xl uppercase leading-none max-w-xl">
                Designing and developing modern digital experiences focused on performance,
                scalability, and user-centered design.
              </p>
            </div>

            {/* Status: Heavy Badge */}
            <div className="inline-flex items-center gap-4 px-4 py-2 border-4 border-foreground bg-accent-yellow shadow-neo">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-tighter text-black">
                Available for New Missions
              </span>
            </div>
          </div>

          {/* Social: Action Grid */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-start lg:items-end">
            <h4 className="text-sm font-black uppercase tracking-widest border-b-4 border-foreground inline-block">
              Connect
            </h4>

            <div className="flex flex-wrap lg:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 border-4 border-foreground bg-panel flex items-center justify-center shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon
                    size={24}
                    strokeWidth={3}
                    className="text-foreground group-hover:text-accent-purple transition-colors relative z-10"
                  />
                  <ArrowUpRight
                    size={14}
                    strokeWidth={4}
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 px-4 py-2 border-4 border-foreground bg-foreground text-background font-black uppercase text-xs hover:bg-accent-purple hover:text-white transition-all shadow-neo"
            >
              Back to Top
              <ArrowUp size={16} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Bottom Ticker/Info */}
        <div className="pt-10 border-t-4 border-foreground flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-black uppercase text-[10px]">
            <p>© {new Date().getFullYear()} Augustine. No Rights Reserved (JK).</p>
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:bg-accent-cyan px-1 transition-colors underline decoration-2 underline-offset-2">
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center gap-4 font-black uppercase text-[10px] bg-foreground text-background px-4 py-1 border-2 border-foreground">
            Built with Next.js <span className="w-2 h-2 bg-accent-cyan" /> Deployed on Vercel
          </div>

        </div>
      </div>
    </footer>
  );
}