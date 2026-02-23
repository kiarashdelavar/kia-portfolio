"use client";

import { Github, Linkedin, Gitlab, FileText, Mail, ExternalLink, Briefcase, Code2, Check, Target, Cpu, Database, LayoutTemplate, Layers, Globe, MapPin, Calendar, GraduationCap, ChevronRight, Rocket, Bot } from "lucide-react";
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

  // Upgraded Spring Animations
  const fadeUpSpring: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Continuous floating animation
  const floatAnim: any = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatAnimReverse: any = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black pb-24 relative overflow-hidden">
      
      {/* ADVANCED BACKGROUND GLOWS & GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]"></div>

      {/* GLASSMORPHISM NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full z-50 flex gap-6 md:gap-10 text-xs md:text-sm font-bold shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all whitespace-nowrap">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Story</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for Internships & Part-Time
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]">
              I build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 drop-shadow-lg">
                smart systems
              </span> <br/>
              that work.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Hi, I am <strong className="text-white">Kiarash</strong>. I connect software with the physical world. From coding robot movements to building AI web platforms, I turn complex math into clean, working code.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#projects" className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2">
                <Rocket size={18}/> Explore Projects
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md shadow-lg">
                <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://gitlab.com/kiarash.delavar" target="_blank" className="bg-[#FC6D26]/10 border border-[#FC6D26]/20 px-6 py-4 rounded-2xl font-bold hover:bg-[#FC6D26]/20 hover:border-[#FC6D26]/40 hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md text-[#FC6D26] shadow-[0_0_20px_rgba(252,109,38,0.1)]">
                <Gitlab size={20} /> <span className="hidden sm:inline">GitLab</span>
              </a>
            </div>
          </motion.div>

          {/* ADVANCED RADAR ANIMATION WITH FLOATING ELEMENTS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex-1 flex justify-center items-center relative h-[400px] md:h-[500px] w-full"
          >
            {/* Floating Tech Icons around the radar */}
            <motion.div variants={floatAnim} animate="animate" className="absolute top-10 left-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-cyan-400 z-30 shadow-xl">
               <Bot size={24}/>
            </motion.div>
            <motion.div variants={floatAnimReverse} animate="animate" className="absolute bottom-10 right-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-violet-400 z-30 shadow-xl">
               <Code2 size={24}/>
            </motion.div>

            <div className="absolute w-[90%] md:w-[110%] aspect-square rounded-full border border-cyan-500/10 border-dashed animate-[spin_30s_linear_infinite]"></div>
            
            <div className="radar-container w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="radar-sweep"></div>
              <div className="radar-target" style={{ top: '25%', left: '65%', animationDelay: '0s' }}></div>
              <div className="radar-target" style={{ top: '75%', left: '35%', animationDelay: '1.2s' }}></div>
              <div className="radar-target" style={{ top: '45%', left: '85%', animationDelay: '2.5s' }}></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-[#02040a] ring-2 ring-cyan-400/50 overflow-hidden z-10 shadow-[0_0_60px_rgba(34,211,238,0.6)] bg-black">
                 <Image src="/kiaphoto.jpg" alt="Kiarash" fill className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" priority />
              </div>
            </div>
          </motion.div>

        </section>

        {/* ASYMMETRICAL STORY SECTION */}
        <motion.section 
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Main Bio - UNIQUE SHAPE */}
          <motion.div variants={fadeUpSpring} className="md:col-span-8 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] p-8 md:p-14 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3"><Cpu className="text-cyan-400" size={32}/> About Me</h3>
            
            <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed relative z-10">
              <p>
                Hi! I am a Software Engineering student living in the Netherlands. I have a huge passion for robotics, AI, and smart systems. For me, coding is not just about making screens look good—it is about building real systems that work perfectly and safely in the real world.
              </p>
              <p>
                Whether I am writing C++ code to make an ABB robotic arm move smoothly, or building a fast, scalable website using Next.js, I always focus on writing clean and reliable code. I love solving hard puzzles, learning new tools quickly, and working with great teams to build products that make a real difference.
              </p>
            </div>
          </motion.div>

          {/* Stats Box - UNIQUE SHAPE */}
          <motion.div variants={fadeUpSpring} className="md:col-span-4 bg-gradient-to-br from-cyan-900/20 to-violet-900/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] rounded-tr-[4rem] rounded-bl-[4rem] p-8 md:p-12 flex flex-col justify-between hover:border-violet-500/30 transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="space-y-8">
               <div>
                 <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2"><MapPin size={16}/> Base</h4>
                 <p className="text-cyan-400 font-mono text-lg">Deventer, The Netherlands</p>
               </div>
               <div>
                 <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2"><Globe size={16}/> Languages</h4>
                 <div className="flex flex-col gap-2 font-mono text-sm">
                    <span className="text-white">Persian <span className="text-violet-400/80">(Native)</span></span>
                    <span className="text-white">English <span className="text-violet-400/80">(C1)</span></span>
                    <span className="text-white">Dutch <span className="text-violet-400/80">(B1 - Actively learning)</span></span>
                 </div>
               </div>
            </div>
            <a href="/Kiarash_resume.pdf" download className="mt-10 w-full bg-white text-black py-4 rounded-xl flex justify-center items-center gap-2 font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg">
              <FileText size={18} /> Download CV
            </a>
          </motion.div>

          {/* Tech Stack - Asymmetrical Full Width */}
          <motion.div variants={fadeUpSpring} className="md:col-span-12 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] rounded-bl-[4rem] p-8 md:p-12 hover:border-white/20 transition-colors">
             <h3 className="text-2xl font-black mb-10 flex items-center gap-3"><Layers className="text-violet-400"/> Technical Arsenal</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Frontend */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-3">
                  <LayoutTemplate size={16} className="text-cyan-400"/> Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Svelte', 'Tailwind CSS', 'TypeScript', 'JavaScript'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-xs font-mono text-cyan-100 hover:bg-cyan-500/30 hover:-translate-y-1 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-3">
                  <Database size={16} className="text-violet-400"/> Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Java', 'Spring Boot', 'Python', 'C#', 'ASP.NET', 'C++'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-xl text-xs font-mono text-violet-100 hover:bg-violet-500/30 hover:-translate-y-1 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Robotics & Embedded */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-3">
                  <Target size={16} className="text-blue-400"/> Robotics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['ROS2', 'MoveIt2', 'Robotics Control', 'Embedded Linux', 'Sensor Fusion', 'Validation'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs font-mono text-blue-100 hover:bg-blue-500/30 hover:-translate-y-1 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Cloud, DB & Ops */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-3">
                  <Code2 size={16} className="text-emerald-400"/> Cloud & DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'SQLite', 'Supabase', 'Docker', 'CI/CD', 'Azure', 'AWS', 'GitLab / GitHub'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-mono text-emerald-100 hover:bg-emerald-500/30 hover:-translate-y-1 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE & EDUCATION TIMELINES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div 
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-cyan-400" size={28} />
              <h3 className="text-3xl font-black tracking-tight">Experience</h3>
            </div>

            <div className="space-y-12 border-l-2 border-white/10 ml-4 pl-10 relative">
              
              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className="text-xl font-bold text-white">Robotics Intern</h4>
                <p className="text-cyan-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> SMART Research</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin size={12}/> Enschede, NL</span>
                  <span className="flex items-center gap-1 text-slate-400"><Calendar size={12}/> 11/2025 - Present</span>
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies and validating safe robot behavior.
                </p>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className="text-xl font-bold text-white">Co-Founder & CEO</h4>
                <p className="text-violet-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> Novara</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin size={12}/> Deventer, NL</span>
                  <span className="flex items-center gap-1 text-slate-400"><Calendar size={12}/> 10/2025 - Present</span>
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Leading the development of an AI-powered SaaS platform helping SMEs work smarter. Architected with Next.js, Supabase, and Spring Boot.
                </p>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors duration-500"></span>
                <h4 className="text-xl font-bold text-white">Market Research Intern</h4>
                <p className="text-slate-300 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> Vienna State Opera</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin size={12}/> Vienna, AT</span>
                  <span className="flex items-center gap-1 text-slate-400"><Calendar size={12}/> 11/2025 - 01/2026</span>
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Researched digital visitor tools (chatbots, voicebots) and evaluated vendor integrations with TYPO3 and GDPR compliance.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="text-violet-400" size={28} />
              <h3 className="text-3xl font-black tracking-tight">Education</h3>
            </div>

            <div className="space-y-12 border-l-2 border-white/10 ml-4 pl-10 relative">
              
              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-400 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className="text-xl font-bold text-white">BASc, Software Engineering</h4>
                <p className="text-violet-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><GraduationCap size={12}/> Saxion University</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin size={12}/> Deventer, NL</span>
                  <span className="flex items-center gap-1 text-slate-400"><Calendar size={12}/> 09/2024 - Present</span>
                </p>
                <ul className="text-slate-400 text-sm leading-relaxed space-y-2 list-none">
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0"/> Novel-T Entrepreneurial Summer School</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0"/> Member of Honours Community</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0"/> E³UDRES² Design Thinking & Prototyping</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors duration-500"></span>
                <h4 className="text-xl font-bold text-white">High School Diploma, Math & Physics</h4>
                <p className="text-slate-300 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><GraduationCap size={12}/> Energy High School</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin size={12}/> Mashhad, Iran</span>
                  <span className="flex items-center gap-1 text-slate-400"><Calendar size={12}/> 09/2020 - 06/2023</span>
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focus on advanced mathematics and complex problem-solving skills.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* 3D-STYLE PROJECTS SECTION */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-cyan-400" size={32} />
            <h3 className="text-4xl font-black tracking-tight">Featured Engineering</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Novara */}
            <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#0f172a] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <h4 className="text-5xl font-black text-white/5 tracking-[0.2em] group-hover:scale-110 transition-transform duration-700">NOVARA</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                        <MapPin size={12}/> Deventer, NL
                    </div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                        <Calendar size={12}/> 09/2025 - Present
                    </div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Novara AI SaaS</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Architected a robust full-stack AI platform for freelancers and small businesses to optimize operational workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Next.js', 'Supabase', 'Tailwind', 'Spring Boot'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-cyan-300 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Saxion Tool */}
            <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(252,109,38,0.15)] relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#1a0b07] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <h4 className="text-5xl font-black text-white/5 tracking-[0.2em] group-hover:scale-110 transition-transform duration-700">SAXION</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-[#FC6D26] flex items-center gap-1.5">
                        <MapPin size={12}/> Deventer, NL
                    </div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-[#FC6D26] flex items-center gap-1.5">
                        <Calendar size={12}/> 11/2025 - 01/2026
                    </div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FC6D26] transition-colors">Project Acquisition Tool</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Developed a full-stack portal for Saxion University allowing client submissions, student exploration, and a teacher dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Svelte', 'Node.js', 'Express', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-[#FC6D26]/80 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-[#FC6D26] hover:text-black hover:border-[#FC6D26] transition-all">
                  View on GitLab <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

             {/* Railway Manager */}
             <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#160f24] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <h4 className="text-5xl font-black text-white/5 tracking-[0.2em] group-hover:scale-110 transition-transform duration-700">RAILWAY</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-violet-400 flex items-center gap-1.5">
                        <MapPin size={12}/> Deventer, NL
                    </div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-violet-400 flex items-center gap-1.5">
                        <Calendar size={12}/> 09/2025 - 10/2025
                    </div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors">Railway Track Algorithm</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Java application loading Dutch railway data to provide shortest routes and MCST generation using Dijkstra and Prim algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'Algorithms', 'Dijkstra', 'Prim'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-violet-300 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/Railway-track-manager" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Autonomous Nav */}
            <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#0f1b2a] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <Target className="text-white/5 w-40 h-40 group-hover:scale-110 transition-transform duration-700 animate-[spin_10s_linear_infinite]" />
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-blue-400 flex items-center gap-1.5">
                        <MapPin size={12}/> Deventer, NL
                    </div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-blue-400 flex items-center gap-1.5">
                        <Calendar size={12}/> 04/2025 - 06/2025
                    </div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Frog Autonomous Navigation</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Navigation system in Java using radar-based obstacle detection, real-time communication, a JavaFX mission GUI, and SQLite.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'JavaFX', 'SQLite', 'Radar Systems'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-blue-300 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/Frog-Autonomous-Navigation-System" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* CONTACT SECTION (The Ultimate Pulse Box) */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] p-10 md:p-24 flex flex-col items-center text-center overflow-hidden border border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#02040a] to-violet-900/40 z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">Let&apos;s build next.</h3>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-bold text-cyan-400 mb-10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Open to Internships & Part-Time Roles
            </div>

            <p className="font-medium text-slate-300 text-lg md:text-xl max-w-2xl mb-12 mx-auto leading-relaxed">
              Seeking an internship or part-time role in Software Engineering, Full-Stack, Embedded Systems, or Robotics. If you need someone who can tackle complex logic and add value from day one, let&apos;s talk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto justify-center">
              <button 
                onClick={handleCopyEmail}
                className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                {copied ? <Check size={20} /> : <Mail size={20} />}
                {copied ? "Copied to Clipboard!" : email}
              </button>
              <a 
                href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" 
                target="_blank"
                className="bg-white/5 text-white border border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 hover:scale-105"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="mt-32 py-12 flex flex-col items-center gap-6 text-sm text-slate-500 border-t border-white/5 relative z-10 bg-[#02040a]">
        <div className="flex gap-8">
           <a href="https://github.com/kiarashdelavar" className="hover:text-cyan-400 transition-colors hover:scale-110"><Github size={20}/></a>
           <a href="https://gitlab.com/kiarash.delavar" className="hover:text-[#FC6D26] transition-colors hover:scale-110"><Gitlab size={20}/></a>
           <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" className="hover:text-cyan-400 transition-colors hover:scale-110"><Linkedin size={20}/></a>
        </div>
        <p className="font-mono">© {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.</p>
      </footer>
    </div>
  );
}