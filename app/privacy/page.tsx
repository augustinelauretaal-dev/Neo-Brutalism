"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Globe, UserCheck, Cookie } from "lucide-react";

export default function Privacy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header: Industrial Stamp Style */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-24 border-8 border-foreground p-12 bg-accent-purple shadow-neo-lg"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-white mb-6">
            Privacy <br /> Protocol
          </h1>
          <p className="text-xl font-bold text-white uppercase leading-tight max-w-2xl mx-auto border-t-4 border-white pt-6">
            Your privacy matters. This protocol defines how we handle data 
            with zero fluff and maximum transparency.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="space-y-12">
          
          {/* Section Wrapper Component for Reusability */}
          {[
            {
              id: "1",
              title: "Information We Collect",
              icon: Eye,
              color: "bg-accent-blue",
              content: [
                "Your name and email when you contact us",
                "Basic usage data (browser type, pages visited) via analytics",
                "No personal data is collected without your explicit consent"
              ]
            },
            {
              id: "2",
              title: "How We Use Your Information",
              icon: UserCheck,
              color: "bg-accent-yellow",
              content: [
                "Respond to your inquiries and messages",
                "Improve our portfolio site experience",
                "Send occasional updates (with opt-out option)"
              ]
            },
            {
              id: "3",
              title: "Data Protection",
              icon: Lock,
              color: "bg-accent-cyan",
              content: [
                "Data encryption in transit and at rest",
                "Secure hosting on Vercel platform",
                "Regular security audits and updates"
              ]
            },
            {
              id: "4",
              title: "Third Parties",
              icon: Globe,
              color: "bg-accent-purple",
              content: [
                "Email service providers for contact forms",
                "Analytics services (anonymized data only)"
              ]
            },
            {
              id: "5",
              title: "Cookies",
              icon: Cookie,
              color: "bg-panel",
              content: [
                "Theme preferences (dark/light mode)",
                "Smooth scrolling navigation",
                "No tracking cookies or advertising"
              ]
            }
          ].map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="group border-4 border-foreground bg-panel shadow-neo overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Side Tab */}
                <div className={`md:w-20 border-b-4 md:border-b-0 md:border-r-4 border-foreground ${section.color} flex items-center justify-center p-4`}>
                  <section.icon size={32} strokeWidth={3} className="text-black" />
                </div>
                
                {/* Text Content */}
                <div className="p-8 flex-1">
                  <h2 className="text-3xl font-black uppercase italic mb-6 flex items-center gap-4">
                    <span className="text-sm not-italic font-black bg-foreground text-background px-2 py-1">0{section.id}</span>
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold uppercase text-sm leading-tight text-foreground">
                        <span className="w-2 h-2 bg-foreground mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}

          {/* Contact Slab */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="p-12 border-4 border-foreground bg-foreground text-background text-center shadow-neo"
          >
            <ShieldCheck size={48} className="mx-auto mb-6 text-accent-cyan" strokeWidth={3} />
            <h2 className="text-4xl font-black uppercase italic mb-4">Integrity Checked</h2>
            <p className="font-bold uppercase mb-8">
              Questions about this policy? Reach out directly.
            </p>
            <a 
              href="mailto:augustinelaureta@gmail.com" 
              className="inline-block px-8 py-4 border-4 border-background bg-background text-foreground font-black uppercase hover:bg-accent-purple hover:text-white transition-all shadow-[4px_4px_0_0_var(--shadow-color)]"
            >
              Email Augustine
            </a>
            <p className="mt-10 text-[10px] font-black opacity-50 uppercase tracking-[0.2em]">
              Last System Update: {new Date().getFullYear()}
            </p>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}