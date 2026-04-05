"use client";

import { motion } from "framer-motion";
import { missionVision } from "@/data/mission";
import ServiceIcons from "./ServiceIcons";
import SectionWrapper from "./SectionWrapper";

export default function MissionVision() {
  return (
    <SectionWrapper id="mission" className="bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Bold Billboard Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 border-b-8 border-foreground pb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border-4 border-foreground bg-accent-purple text-white font-black uppercase tracking-widest text-sm mb-6 shadow-neo"
            >
              Mission & Vision
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]"
            >
              Building Digital <br />
              <span className="bg-accent-yellow text-black px-4 border-4 border-foreground shadow-neo inline-block mt-4">
                Excellence
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-black max-w-xs text-xl uppercase italic leading-tight border-l-8 border-accent-blue pl-6"
          >
            "Design is not just what it looks like — it's how it works."
          </motion.p>
        </div>

        {/* Grid: Large Block Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.02, rotate: index === 0 ? -1 : 1 }}
              className={`relative group p-10 md:p-14 border-4 border-foreground transition-all duration-300 shadow-neo hover:shadow-neo-lg ${
                index === 0 ? "bg-panel" : "bg-accent-cyan"
              }`}
            >
              {/* Background Number: Large and Outlined */}
              <span className="absolute top-4 right-4 text-9xl font-black text-foreground/5 select-none italic group-hover:text-foreground/10 transition-colors">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="mb-10 relative inline-block">
                  <div
                    className={`relative w-20 h-20 border-4 border-foreground flex items-center justify-center shadow-neo transition-transform group-hover:-rotate-12 ${
                      index === 0 ? "bg-accent-purple" : "bg-white"
                    }`}
                  >
                    <ServiceIcons
                      icon={item.icon}
                      className={`w-10 h-10 ${
                        index === 0 ? "text-white" : "text-black"
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic ${index === 0 ? "text-foreground" : "text-black"}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`font-bold text-xl leading-tight max-w-md ${index === 0 ? "text-foreground" : "text-black"}`}>
                  {item.description}
                </p>

                {/* Action Bar (The Accent Line) */}
                <div className="mt-12 flex items-center gap-4">
                  <div
                    className={`h-4 border-2 border-foreground transition-all duration-500 group-hover:w-32 shadow-[2px_2px_0_0_var(--shadow-color)] ${
                      index === 0 ? "bg-accent-yellow w-20" : "bg-white w-20"
                    }`}
                  />
                  <span className="font-black uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Focus Area
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}