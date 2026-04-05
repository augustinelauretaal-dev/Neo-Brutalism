"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 border-4 border-foreground bg-accent-purple text-white font-black uppercase tracking-widest text-sm mb-6 shadow-neo"
          >
            Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic"
          >
            Crafting Digital <br />
            <span className="bg-accent-cyan text-black px-4 border-4 border-foreground shadow-neo inline-block mt-2">
              Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground font-bold max-w-2xl mx-auto text-xl leading-tight border-b-4 border-foreground pb-4"
          >
            A curated selection of projects showcasing technical expertise,
            performance optimization, and modern UI design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateX: -8, translateY: -8 }}
              className="group relative flex flex-col bg-panel border-4 border-foreground shadow-neo hover:shadow-neo-lg transition-all"
            >
              {/* Image Container: High Contrast */}
              <div className="relative h-72 w-full border-b-4 border-foreground overflow-hidden">
                <Image
                  src={project.image || "/images/project-placeholder.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* External Links as floating bold boxes */}
                <div className="absolute top-4 right-4 z-20 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 border-2 border-foreground bg-accent-yellow shadow-[3px_3px_0_0_var(--shadow-color)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                      <Github size={20} className="text-black" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 border-2 border-foreground bg-white shadow-[3px_3px_0_0_var(--shadow-color)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                      <ExternalLink size={20} className="text-black" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 border-2 border-foreground bg-accent-blue/10 text-accent-blue font-black uppercase text-xs tracking-tighter">
                    {project.category || "Full Stack"}
                  </span>
                  <span className="font-black italic text-foreground/20 text-4xl">0{index + 1}</span>
                </div>

                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground font-medium text-lg mb-8 leading-tight">
                  {project.description}
                </p>

                {/* Technologies: Tag-style boxes */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-black uppercase border-2 border-foreground bg-elevated shadow-[2px_2px_0_0_var(--shadow-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}