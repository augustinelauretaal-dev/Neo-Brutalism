"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceIcons from "./ServiceIcons";
import SectionWrapper from "./SectionWrapper";

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border-4 border-foreground bg-accent-yellow text-black font-black tracking-widest uppercase text-xs mb-4 shadow-neo"
            >
              Expertise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none"
            >
              Specialized <br />
              <span className="text-accent-blue bg-accent-blue/10 px-2 border-4 border-foreground shadow-neo inline-block mt-2">
                Solutions.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-bold max-w-sm text-lg leading-tight border-l-8 border-foreground pl-6"
          >
            Transforming complex requirements into scalable, modern digital
            products built with performance and usability in mind.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              whileHover={{ translateX: -6, translateY: -6 }}
              className="group relative p-8 bg-panel border-4 border-foreground shadow-neo hover:shadow-neo-lg transition-all"
            >
              {/* Decorative Number: Now bold and outlined */}
              <span className="absolute top-4 right-4 text-6xl font-black text-foreground/10 group-hover:text-accent-blue/20 transition-colors select-none italic">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Icon: Boxy container */}
                <div className="relative inline-block mb-8">
                  <div className="relative w-16 h-16 bg-accent-cyan border-4 border-foreground flex items-center justify-center shadow-neo group-hover:rotate-6 transition-transform">
                    <ServiceIcons
                      icon={service.icon}
                      className="w-8 h-8 text-black"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter group-hover:bg-accent-yellow transition-colors text-foreground group-hover:text-black inline-block px-1">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground font-medium leading-snug mb-8">
                  {service.description}
                </p>

                {/* Features: Tag-style list */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Performance",
                    "Scalable",
                    "Modern UI"
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border-2 border-foreground bg-elevated font-black uppercase text-[10px] tracking-tighter shadow-[3px_3px_0_0_var(--shadow-color)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent: Solid Arrow */}
                <div className="mt-10 flex items-center gap-2 font-black uppercase text-xs tracking-widest text-accent-blue opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                  Learn More <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
