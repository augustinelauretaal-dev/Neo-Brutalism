"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import SectionWrapper from "./SectionWrapper";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header: Billboard Style */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border-4 border-foreground bg-accent-blue text-white font-black uppercase tracking-widest text-xs mb-6 shadow-neo"
          >
            Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic"
          >
            Common <span className="text-accent-purple">Inquiries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-bold text-xl max-w-xl mx-auto uppercase leading-tight"
          >
            Everything you need to know about my workflow, pricing,
            and project timelines.
          </motion.p>
        </div>

        {/* FAQ List: Heavy Slabs */}
        <dl className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`group border-4 border-foreground transition-all duration-300 shadow-neo ${
                  isOpen ? "bg-accent-yellow translate-x-1 translate-y-1 shadow-none" : "bg-panel hover:bg-accent-cyan/10"
                }`}
              >
                <dt>
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 md:p-10 text-left group"
                  >
                    <div className="flex items-center gap-8">
                      {/* Number: Bold and Boxy */}
                      <span className="flex-shrink-0 w-12 h-12 border-4 border-foreground bg-background flex items-center justify-center font-black italic shadow-[3px_3px_0_0_var(--shadow-color)] text-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span className={`text-xl md:text-2xl font-black uppercase tracking-tighter leading-none ${isOpen ? "text-black" : "text-foreground"}`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon: Sharp Square Container */}
                    <div className={`flex-shrink-0 ml-4 w-10 h-10 border-4 border-foreground flex items-center justify-center transition-colors ${
                        isOpen ? "bg-black text-white" : "bg-background text-foreground"
                    }`}>
                      {isOpen ? <Minus size={24} strokeWidth={4} /> : <Plus size={24} strokeWidth={4} />}
                    </div>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-elevated border-t-4 border-foreground"
                    >
                      <div className="p-8 md:p-12 text-foreground font-bold text-lg leading-snug">
                        {faq.answer}
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>

        {/* Bottom CTA: High-Visibility Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="font-black uppercase mb-6 tracking-widest">
            Still have questions?
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-5 border-4 border-foreground bg-black text-white font-black uppercase text-lg tracking-tighter hover:bg-accent-purple hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#000] transition-all"
          >
            Contact Me →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}