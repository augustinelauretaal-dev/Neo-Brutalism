"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionContainer from "./Reusable/SectionContainer";
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle2, ArrowRight, Loader2, AlertCircle, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      console.log("Spam detected");
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required");
      setStatus("error");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters long");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId) throw new Error("EmailJS Service ID missing");
      if (!templateId) throw new Error("EmailJS Template ID missing");
      if (!publicKey) throw new Error("EmailJS Public Key missing");

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper id="contact" className="bg-background">
      <SectionContainer>
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
                      {/* Honeypot field - Hidden */}
                      <div className="hidden">
                        <input
                          type="text"
                          name="website"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
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

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-4 p-4 border-4 border-foreground bg-accent-red text-gray shadow-neo"
                        >
                          <AlertCircle className="shrink-0 w-6 h-6" />
                          <p className="font-black uppercase text-sm flex-grow">{errorMessage}</p>
                          <button 
                            type="button" 
                            onClick={() => setStatus("idle")}
                            className="p-3 border-2 border-foreground shadow-neo bg-accent-yellow text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      whileHover={{ translateX: -4, translateY: -4 }}
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative w-full py-6 bg-accent-yellow text-black border-4 border-foreground font-black text-2xl uppercase shadow-neo hover:shadow-neo-lg transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-8 h-8 animate-spin" strokeWidth={4} />
                          Transmitting...
                        </>
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
      </SectionContainer>
    </SectionWrapper>
  );
}