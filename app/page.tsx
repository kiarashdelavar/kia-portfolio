"use client";

import { Github, Linkedin, FileText, Mail, MapPin, ExternalLink, Briefcase, Code2, ChevronRight, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const email = "kiarash.delavar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Fixed Animation variants (Bypasses strict TS errors)
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-yellow-500 selection:text-black pb-24 relative overflow-hidden">
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* FLOATING NAVBAR */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-8 py-4 rounded-full z-50 flex gap-8 text-sm font-semibold shadow-2xl">
        <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
        <a href="#experience" className="hover:text-yellow-500 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12">
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I&apos;m <span className="text-yellow-500">Kiarash</span>
          </motion.h1>

          {/* ANIMATED WIREFRAME GLOBE */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center my-8"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/40 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/40 rounded-full rotate-45 scale-y-50"
            />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/40 rounded-full -rotate-45 scale-x-50"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/40 rounded-full rotate-90 scale-y-75"
            />
            {/* Center Core Glow */}
            <div className="absolute w-32 h-32 bg-yellow-500/10 blur-2xl rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-8 flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
              Building intelligent systems from <br className="hidden md:block"/> backend logic to robotic motion
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all">
                View My Work
              </a>
              <a href="#contact" className="bg-transparent border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500/10 transition-all">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT & SKILLS (Bento Grid) */}
        <motion.section 
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Profile Card */}
          <motion.div variants={fadeInUp} className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center group">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-zinc-800 group-hover:border-yellow-500 transition-colors duration-500">
              <Image src="/kiaphoto.jpg" alt="Kiarash Delavar" fill className="object-cover" priority />
            </div>
            <h2 className="text-2xl font-bold mb-1">Kiarash Delavar</h2>
            <p className="text-zinc-400 mb-4 text-sm">Deventer, Netherlands</p>
            <p className="text-sm text-zinc-500 mb-6">Software Engineering Student @ Saxion</p>
            <div className="flex gap-3 w-full mt-auto">
              <a href="/Kiarash_resume.pdf" download className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg flex justify-center items-center gap-2 text-sm font-semibold transition-colors">
                <FileText size={16} /> CV
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg flex justify-center items-center gap-2 text-sm font-semibold transition-colors">
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Bio & Skills */}
          <motion.div variants={fadeInUp} className="md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">About Me</h3>
            <p className="text-zinc-400 leading-relaxed mb-10">
              I combine software engineering with robotics to solve practical problems and build reliable, testable systems. Whether I am investigating motion anomalies in ABB GoFa robots using C++ and ROS2, or architecting a full-stack SaaS platform, I focus on turning complex problems into clean, working solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-yellow-500 font-bold mb-4 font-mono text-sm uppercase tracking-wider">Frontend</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Next.js / React</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Svelte</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> JavaScript</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-500 font-bold mb-4 font-mono text-sm uppercase tracking-wider">Backend</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Node.js / Express</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Java / Spring Boot</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Python</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> C++ / C#</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-yellow-500 font-bold mb-4 font-mono text-sm uppercase tracking-wider">Robotics & DB</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> ROS2 / MoveIt2</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> PostgreSQL / Supabase</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Azure / AWS</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-yellow-500"/> Git / CI/CD</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE TIMELINE */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-yellow-500" size={32} />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>

          <div className="space-y-8 border-l border-zinc-800 ml-4 pl-8 relative">
            
            {/* SMART LAB */}
            <motion.div variants={fadeInUp} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-yellow-500 rounded-full border-4 border-[#09090b]"></span>
              <h4 className="text-xl font-bold">Robotics Intern</h4>
              <p className="text-yellow-500 text-sm font-mono mb-2">SMART Research Group | Nov 2024 - Present</p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies (overshooting, sudden acceleration) and validating safe robot behavior through custom ROS2 test nodes and real-time log analysis.
              </p>
            </motion.div>

            {/* NOVARA */}
            <motion.div variants={fadeInUp} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-800 rounded-full border-4 border-[#09090b]"></span>
              <h4 className="text-xl font-bold">Co-Founder & CEO</h4>
              <p className="text-yellow-500 text-sm font-mono mb-2">Novara | Sep 2024 - Present</p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Leading the development of an AI-powered SaaS platform helping SMEs work smarter. Managing product development, technical architecture (Next.js, Supabase, Spring Boot), and go-to-market strategy.
              </p>
            </motion.div>

            {/* VIENNA OPERA */}
            <motion.div variants={fadeInUp} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-800 rounded-full border-4 border-[#09090b]"></span>
              <h4 className="text-xl font-bold">Market Research Intern</h4>
              <p className="text-yellow-500 text-sm font-mono mb-2">Vienna State Opera | Nov 2024 - Feb 2025</p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Researched digital visitor tools (chatbots, voicebots) and evaluated vendor integrations with TYPO3, ticketing systems, and GDPR compliance.
              </p>
            </motion.div>

            {/* SAXION */}
            <motion.div variants={fadeInUp} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-800 rounded-full border-4 border-[#09090b]"></span>
              <h4 className="text-xl font-bold">Student Assistant</h4>
              <p className="text-yellow-500 text-sm font-mono mb-2">Saxion University | Apr 2024 - Dec 2024</p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Supported new students in adjusting to university life, providing study tips, assisting with technical assignments, and leading workshops.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-yellow-500" size={32} />
            <h3 className="text-3xl font-bold">Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Novara */}
            <motion.div variants={fadeInUp} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Novara AI SaaS</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-16">
                  Building an AI-powered SaaS platform for freelancers and small businesses. Architected a robust full-stack solution.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js', 'Supabase', 'Tailwind', 'Spring Boot'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-950 rounded-md text-xs font-mono text-zinc-300 border border-zinc-800">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Saxion Tool */}
            <motion.div variants={fadeInUp} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Project Acquisition Tool</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-16">
                  Developed a full-stack platform for Saxion University allowing client submissions, student exploration, and a teacher dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Svelte', 'Node.js', 'Express', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-950 rounded-md text-xs font-mono text-zinc-300 border border-zinc-800">{tech}</span>
                  ))}
                </div>
                <a href="https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Railway Manager */}
            <motion.div variants={fadeInUp} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Railway Track Manager</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-16">
                  Java application loading Dutch railway data to provide shortest routes and MCST generation using Dijkstra and Prim algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Java', 'Data Structures', 'Algorithms', 'SaxionApp'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-950 rounded-md text-xs font-mono text-zinc-300 border border-zinc-800">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Autonomous Navigation */}
            <motion.div variants={fadeInUp} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Frog Autonomous Navigation</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-16">
                  Navigation system in Java using radar-based obstacle detection, real-time communication, a JavaFX mission GUI, and SQLite.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Java', 'JavaFX', 'SQLite', 'Radar Systems'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-950 rounded-md text-xs font-mono text-zinc-300 border border-zinc-800">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-10 md:p-16 text-black flex flex-col items-center text-center shadow-[0_0_50px_rgba(234,179,8,0.2)]"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Let&apos;s build something.</h3>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 border border-black/20 text-sm font-bold text-black mb-8">
            <span className="w-2 h-2 rounded-full bg-green-900 animate-pulse"></span>
            Open to Internships & Part-Time Roles
          </div>

          <p className="font-medium text-black/80 text-lg max-w-2xl mb-10">
            Currently seeking an internship or part-time role in Software Engineering, Full-Stack, Embedded Systems, or Robotics where I can contribute to real projects and add value from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
            <button 
              onClick={handleCopyEmail}
              className="bg-[#09090b] text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              {copied ? <Check size={20} className="text-green-500"/> : <Mail size={20} />}
              {copied ? "Copied to Clipboard!" : email}
            </button>
            <a 
              href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" 
              target="_blank"
              className="bg-black/10 text-black px-8 py-4 rounded-xl font-bold hover:bg-black/20 transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="mt-24 py-8 text-center text-sm text-zinc-600 border-t border-zinc-900 relative z-10">
        <p>© {new Date().getFullYear()} Kiarash Delavar. All rights reserved.</p>
      </footer>
    </div>
  );
}