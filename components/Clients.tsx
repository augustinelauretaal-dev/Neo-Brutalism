"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";
import SectionWrapper from "./SectionWrapper";

export default function Clients() {
  return (
    <SectionWrapper id="clients" className="bg-background">
      <div className="relative py-20 border-y-4 border-foreground">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 mb-6 border-4 border-foreground bg-accent-cyan text-black font-black uppercase tracking-widest text-xs shadow-neo"
          >
            Trusted Partnerships
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic"
          >
            Powering <span className="text-accent-purple underline decoration-8 underline-offset-4">Global</span> Teams
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground font-bold max-w-xl mx-auto text-xl uppercase leading-none"
          >
            I collaborate with forward-thinking teams to build scalable,
            high-performance digital products.
          </motion.p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden py-10 bg-panel border-y-4 border-foreground">
          
          {/* Removed soft fades, replaced with a stark "tape" look */}
          <motion.div
            className="flex gap-10 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex-shrink-0 group relative w-48 h-28 border-4 border-foreground bg-background shadow-neo hover:shadow-neo-lg hover:shadow-accent-purple transition-all flex items-center justify-center p-4"
              >
                {client.image ? (
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-14 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-sm font-black tracking-tighter text-foreground uppercase">
                    {client.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note: Sticker Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <span className="bg-foreground text-background px-4 py-2 font-black uppercase text-xs tracking-[0.2em]">
            More collaborations coming soon
          </span>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}