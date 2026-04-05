"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "./Reusable/SectionTitle";
import Badge from "./Reusable/Badge";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    backend: ["Node.js", "PHP", "MySQL", "SQL"],
    other: ["Microsoft Office", "Photoshop", "Team Leadership", "Time Management"],
  };

  return (
    <SectionWrapper id="about" className="bg-background relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
            <div className="relative group">
              <div className="relative w-full aspect-square border-8 border-foreground bg-accent-cyan shadow-neo-lg overflow-hidden">
                <Image
                  src="/picture.jpg"
                  alt="Augustine Llanera Laureta"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-foreground bg-accent-yellow shadow-neo -rotate-12 hidden md:block" />
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">
                Augustine <br /> Llanera Laureta
              </h3>
              <p className="text-xl font-bold text-accent-purple uppercase tracking-widest border-l-8 border-foreground pl-4">
                Full Stack Developer
              </p>
              <div className="flex flex-col gap-3 font-bold uppercase text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent-blue" />
                  <span>Sto. Domingo, Nueva Ecija</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-accent-pink" />
                  <span>BS Information Technology</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-12"
          >
            <SectionTitle 
              title="Digital Architect" 
              subtitle="About Me" 
            />

            <div className="space-y-6">
              <p className="text-xl font-bold leading-snug text-foreground border-b-4 border-foreground pb-6">
                "I'm an Information Technology graduate specializing in Database System Technology with experience in frontend development and data processing. I focus on building modern web applications using Next.js, Tailwind CSS, and modern UI practices."
              </p>
              <p className="text-lg font-medium text-foreground/80 italic">
                I also have experience in data management, system organization, and team leadership.
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-black uppercase italic flex items-center gap-3">
                <Briefcase className="text-accent-yellow" /> Experience
              </h4>
              <div className="p-8 border-4 border-foreground bg-panel shadow-neo relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/10 -mr-12 -mt-12 rounded-full" />
                <h5 className="text-xl font-black uppercase">Team Supervisor</h5>
                <p className="text-sm font-bold text-accent-blue mb-4">Philippine Statistics Authority (POPCEN CBMS)</p>
                <ul className="space-y-2 font-bold text-sm uppercase">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-foreground mt-1.5 flex-shrink-0" />
                    Managed data collection teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-foreground mt-1.5 flex-shrink-0" />
                    Ensured accuracy and completeness of data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-foreground mt-1.5 flex-shrink-0" />
                    Trained team members and validated submissions
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">Frontend Tech</p>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((s) => <Badge key={s} text={s} variant="cyan" />)}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">Backend & Data</p>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((s) => <Badge key={s} text={s} variant="purple" />)}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">Core Strengths</p>
                <div className="flex flex-wrap gap-3">
                  {skills.other.map((s) => <Badge key={s} text={s} variant="yellow" />)}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-8">
              <motion.a
                href="/Resume/AUGUSTINE LLANERA LAURETA.pdf"
                download
                whileHover={{ translateX: -4, translateY: -4 }}
                className="group flex items-center gap-3 px-8 py-4 bg-accent-yellow text-black border-4 border-foreground font-black text-lg uppercase shadow-neo transition-all"
              >
                <Download size={24} strokeWidth={3} />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ translateX: -4, translateY: -4 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black border-4 border-foreground font-black text-lg uppercase shadow-neo transition-all"
              >
                <Mail size={24} strokeWidth={3} />
                Hire Me
              </motion.a>
            </div>
          </motion.div>

        </div>
    </SectionWrapper>
  );
}
