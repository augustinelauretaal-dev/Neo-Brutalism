"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        'service_liov3qw', 
        'template_yz88ezv', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'GOjdrBDz-a67L6_UM'
      );
      setStatus("success");
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus("idle");
      alert('Failed to send message. Please try again.');
    }

    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header: Industrial Billboard */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 border-4 border-foreground bg-accent-yellow text-black font-black uppercase tracking-[0.2em] text-xs mb-8 shadow-neo"
          >
            <span className="w-3 h-3 bg-black animate-pulse" />
            Open for Collaboration
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic leading-[0.85]"
          >
            Ready to <span className="text-accent-purple underline decoration-[12px]">Start</span> <br />
            The Project?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Info Blocks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="border-l-8 border-foreground pl-8">
              <h3 className="text-3xl font-black uppercase italic mb-6">Reach Out</h3>
              <p className="text-foreground font-bold text-xl leading-tight uppercase">
                I typically respond within 24 hours. No fluff, just direct communication.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "augustinelaureta@gmail.com", color: "bg-accent-purple" },
                { icon: Phone, label: "Phone", value: "09382275770", color: "bg-accent-blue" },
                { icon: MapPin, label: "Location", value: "Philippines", color: "bg-accent-cyan" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-4 border-4 border-foreground bg-panel shadow-neo hover:bg-foreground group transition-all"
                >
                  <div className={`w-14 h-14 border-4 border-foreground flex items-center justify-center shadow-[3px_3px_0_0_var(--shadow-color)] ${item.color} group-hover:bg-background transition-colors`}>
                    <item.icon className="w-6 h-6 text-black group-hover:text-foreground transition-colors" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 group-hover:text-background/40">
                      {item.label}
                    </p>
                    <p className="text-lg font-black group-hover:text-background uppercase tracking-tighter">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Form Slab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 md:p-12 border-4 border-foreground bg-panel shadow-neo-lg">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center flex flex-col items-center gap-6 bg-accent-lime text-black border-4 border-foreground shadow-neo"
                  >
                    <div className="w-20 h-20 border-4 border-foreground bg-white flex items-center justify-center shadow-[4px_4px_0_0_var(--shadow-color)]">
                      <CheckCircle2 className="w-10 h-10 text-black" strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-black uppercase italic">Transmitted!</h3>
                    <p className="font-bold uppercase px-8">Received your message. Checking my inbox now.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black uppercase tracking-tighter">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border-4 border-foreground bg-background font-bold uppercase placeholder:text-foreground/20 focus:bg-accent-purple/10 outline-none transition-all shadow-[4px_4px_0_0_var(--shadow-color)] focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-black uppercase tracking-tighter">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border-4 border-foreground bg-background font-bold uppercase placeholder:text-foreground/20 focus:bg-accent-blue/10 outline-none transition-all shadow-[4px_4px_0_0_var(--shadow-color)] focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                          placeholder="Email@Address.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-black uppercase tracking-tighter">Project Memo</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-4 border-4 border-foreground bg-background font-bold uppercase placeholder:text-foreground/20 focus:bg-accent-yellow/10 outline-none transition-all shadow-[4px_4px_0_0_var(--shadow-color)] focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                        placeholder="Project Details..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ translateX: -4, translateY: -4 }}
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative w-full py-6 bg-accent-yellow text-black border-4 border-foreground font-black text-2xl uppercase shadow-neo hover:shadow-neo-lg transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        "Transmitting..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={4} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}