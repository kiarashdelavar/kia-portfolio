"use client";

import { Github, Linkedin, Gitlab, FileText, Mail, ExternalLink, Briefcase, Code2, Check, Target, Cpu, Database, LayoutTemplate, Layers, Globe, MapPin, Calendar } from "lucide-react";
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

  // Upgraded Spring Animations for a premium "Apple-like" feel
  const fadeUpSpring: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black pb-24 relative overflow-hidden">
      
      {/* BACKGROUND GLOWS (Aurora Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none mix-blend-screen"></div>

      {/* GLASSMORPHISM NAVBAR */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full z-50 flex gap-8 text-sm font-bold shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for Internships & Part-Time
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              I build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                autonomous logic
              </span> <br/>
              & scalable systems.
            </h1>
            
            <p className="text-slate-400 text-lg max-w-xl font-light leading-relaxed">
              Hi, I&apos;m <strong className="text-white">Kiarash</strong>. From architecting AI SaaS platforms to programming collision-free trajectories for ABB robots, I bridge the gap between complex mathematics and high-performance code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="bg-cyan-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-cyan-400 hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2">
                Explore Projects
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md">
                <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://gitlab.com/kiarash.delavar" target="_blank" className="bg-[#FC6D26]/10 border border-[#FC6D26]/20 px-6 py-3 rounded-xl font-bold hover:bg-[#FC6D26]/20 hover:border-[#FC6D26]/40 hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md text-[#FC6D26] shadow-[0_0_20px_rgba(252,109,38,0.1)]">
                <Gitlab size={20} /> <span className="hidden sm:inline">GitLab</span>
              </a>
            </div>
          </motion.div>

          {/* CUSTOM LIDAR RADAR ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex-1 flex justify-center items-center relative"
          >
            <div className="absolute w-[110%] h-[110%] rounded-full border border-cyan-500/10 border-dashed animate-[spin_20s_linear_infinite]"></div>
            
            <div className="radar-container w-64 h-64 md:w-96 md:h-96">
              <div className="radar-sweep"></div>
              <div className="radar-target" style={{ top: '30%', left: '60%', animationDelay: '0s' }}></div>
              <div className="radar-target" style={{ top: '70%', left: '40%', animationDelay: '1.2s' }}></div>
              <div className="radar-target" style={{ top: '50%', left: '80%', animationDelay: '2.5s' }}></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-cyan-400/50 overflow-hidden z-10 shadow-[0_0_40px_rgba(34,211,238,0.4)] bg-black">
                 <Image src="/kiaphoto.jpg" alt="Kiarash" fill className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700" priority />
              </div>
            </div>
          </motion.div>

        </section>

        {/* PREMIUM BENTO GRID 2.0 */}
        <motion.section 
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Bio */}
          <motion.div variants={fadeUpSpring} className="md:col-span-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Cpu className="text-cyan-400"/> Engineering Philosophy</h3>
            <p className="text-slate-400 leading-relaxed text-lg relative z-10">
              I am a Software Engineering student in the Netherlands with a heavy focus on robotics and embedded systems. I don't just build interfaces; I build systems that interact with the physical world. Whether it's diagnosing anomalies in ROS2 nodes, designing C++ algorithms, or architecting a highly scalable Next.js and Spring Boot backend, I prioritize performance, safety, and modern architecture.
            </p>
          </motion.div>

          {/* Quick Stats & Languages */}
          <motion.div variants={fadeUpSpring} className="md:col-span-4 bg-gradient-to-br from-cyan-900/20 to-violet-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-violet-500/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <div className="space-y-6">
               <div>
                 <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-2"><MapPin size={14}/> Base</h4>
                 <p className="text-cyan-400 font-mono">Deventer, Netherlands</p>
               </div>
               <div>
                 <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-2"><Globe size={14}/> Languages</h4>
                 <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="text-white">Persian <span className="text-violet-400">(Native)</span></span>
                    <span className="text-white">English <span className="text-violet-400">(C1)</span></span>
                    <span className="text-white">Dutch <span className="text-violet-400">(B1)</span></span>
                    <span className="text-white">German <span className="text-violet-400">(A1)</span></span>
                 </div>
               </div>
            </div>
            <a href="/Kiarash_resume.pdf" download className="mt-8 w-full bg-white/10 border border-white/20 text-white py-4 rounded-xl flex justify-center items-center gap-2 font-bold hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all">
              <FileText size={18} /> Download Full CV
            </a>
          </motion.div>

          {/* Upgraded Tech Stack - Glowing Pills */}
          <motion.div variants={fadeUpSpring} className="md:col-span-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-colors">
             <h3 className="text-2xl font-bold mb-10 flex items-center gap-3"><Layers className="text-violet-400"/> Technical Arsenal</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* Frontend */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                  <LayoutTemplate size={16} className="text-cyan-400"/> Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React.js', 'Svelte', 'Tailwind CSS', 'TypeScript', 'JavaScript'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs font-mono text-cyan-100 hover:bg-cyan-500/20 hover:scale-105 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                  <Database size={16} className="text-violet-400"/> Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Python', 'C#', 'ASP.NET', 'C++'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-md text-xs font-mono text-violet-100 hover:bg-violet-500/20 hover:scale-105 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Robotics & Embedded */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                  <Target size={16} className="text-blue-400"/> Robotics & Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['ROS2', 'MoveIt2', 'Robotics Control', 'Embedded Linux', 'Sensor Fusion', 'Anomaly Validation'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs font-mono text-blue-100 hover:bg-blue-500/20 hover:scale-105 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Cloud, DB & Ops */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                  <Code2 size={16} className="text-emerald-400"/> Cloud & DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'SQLite', 'Supabase', 'Docker', 'CI/CD', 'Azure', 'AWS', 'GitLab / GitHub', 'Bitbucket'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-xs font-mono text-emerald-100 hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE TIMELINE (Neon Style) */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="text-cyan-400" size={32} />
            <h3 className="text-4xl font-bold tracking-tight">Experience</h3>
          </div>

          <div className="space-y-12 border-l-2 border-white/10 ml-4 pl-10 relative">
            
            {/* SMART LAB */}
            <motion.div variants={fadeUpSpring} className="relative group hover:-translate-y-1 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] group-hover:scale-150 transition-transform"></span>
              <h4 className="text-2xl font-bold text-white">Robotics Intern</h4>
              <p className="text-cyan-400 font-mono text-sm mt-2 mb-4 flex items-center gap-4 flex-wrap">
                 <span className="flex items-center gap-1"><Briefcase size={14}/> SMART Research Group</span>
                 <span className="flex items-center gap-1 text-slate-400"><MapPin size={14}/> Enschede, NL</span>
                 <span className="flex items-center gap-1 text-slate-400"><Calendar size={14}/> 11/2025 - Present</span>
              </p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies (overshooting, sudden acceleration) and validating safe robot behavior through custom ROS2 test nodes and real-time log analysis.
              </p>
            </motion.div>

            {/* NOVARA */}
            <motion.div variants={fadeUpSpring} className="relative group hover:-translate-y-1 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-transform"></span>
              <h4 className="text-2xl font-bold text-white">Co-Founder & CEO</h4>
              <p className="text-violet-400 font-mono text-sm mt-2 mb-4 flex items-center gap-4 flex-wrap">
                 <span className="flex items-center gap-1"><Briefcase size={14}/> Novara</span>
                 <span className="flex items-center gap-1 text-slate-400"><MapPin size={14}/> Deventer, NL</span>
                 <span className="flex items-center gap-1 text-slate-400"><Calendar size={14}/> 10/2025 - Present</span>
              </p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                Leading the development of an AI-powered SaaS platform helping SMEs work smarter. Managing product development, technical architecture (Next.js, Supabase, Spring Boot), and go-to-market strategy.
              </p>
            </motion.div>

            {/* VIENNA OPERA */}
            <motion.div variants={fadeUpSpring} className="relative group hover:-translate-y-1 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
              <h4 className="text-2xl font-bold text-white">Market Research Intern</h4>
              <p className="text-slate-300 font-mono text-sm mt-2 mb-4 flex items-center gap-4 flex-wrap">
                 <span className="flex items-center gap-1"><Briefcase size={14}/> Vienna State Opera</span>
                 <span className="flex items-center gap-1 text-slate-400"><MapPin size={14}/> Vienna, AT</span>
                 <span className="flex items-center gap-1 text-slate-400"><Calendar size={14}/> 11/2025 - 01/2026</span>
              </p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                Researched digital visitor tools (chatbots, voicebots) and evaluated vendor integrations with TYPO3, ticketing systems, and GDPR compliance.
              </p>
            </motion.div>

            {/* SAXION ASST */}
            <motion.div variants={fadeUpSpring} className="relative group hover:-translate-y-1 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-white/20 rounded-full group-hover:bg-violet-500 transition-colors"></span>
              <h4 className="text-2xl font-bold text-white">Student Assistant</h4>
              <p className="text-slate-300 font-mono text-sm mt-2 mb-4 flex items-center gap-4 flex-wrap">
                 <span className="flex items-center gap-1"><Briefcase size={14}/> Saxion University</span>
                 <span className="flex items-center gap-1 text-slate-400"><MapPin size={14}/> Deventer, NL</span>
                 <span className="flex items-center gap-1 text-slate-400"><Calendar size={14}/> 05/2025 - 12/2025</span>
              </p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                Assisted first-year students with complex technical assignments, answered study questions, and provided coaching to ease their transition into university life.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* PROJECTS SECTION (Premium Image Cards) */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-cyan-400" size={32} />
            <h3 className="text-4xl font-bold tracking-tight">Featured Engineering</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Novara */}
            <motion.div variants={fadeUpSpring} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <div className="h-60 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                 <h4 className="text-4xl font-black text-white/5 tracking-[0.2em] z-0 group-hover:text-cyan-500/20 transition-colors group-hover:scale-110 duration-700">NOVARA</h4>
                 <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-cyan-400 flex items-center gap-2">
                    <Calendar size={12}/> 09/2025 - Present
                 </div>
              </div>
              <div className="p-8 relative z-20 -mt-8">
                <h4 className="text-2xl font-bold mb-3 text-white">Novara AI Platform</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Architected a robust full-stack AI SaaS platform for freelancers and small businesses to optimize operational workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Next.js', 'Supabase', 'Tailwind', 'Spring Boot'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/20">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Saxion Tool */}
            <motion.div variants={fadeUpSpring} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#FC6D26]/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(252,109,38,0.1)]">
              <div className="h-60 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                 <h4 className="text-4xl font-black text-white/5 tracking-[0.2em] z-0 group-hover:text-[#FC6D26]/20 transition-colors group-hover:scale-110 duration-700">SAXION</h4>
                 <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-[#FC6D26] flex items-center gap-2">
                    <Calendar size={12}/> 11/2025 - 01/2026
                 </div>
              </div>
              <div className="p-8 relative z-20 -mt-8">
                <h4 className="text-2xl font-bold mb-3 text-white">Project Acquisition System</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Developed a full-stack portal for Saxion University allowing client submissions, student exploration, and a teacher dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Svelte', 'Node.js', 'Express', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-[#FC6D26]/80 border border-[#FC6D26]/20">{tech}</span>
                  ))}
                </div>
                <a href="https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FC6D26] transition-colors">
                  View on GitLab <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

             {/* Railway Manager */}
             <motion.div variants={fadeUpSpring} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              <div className="h-60 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                 <h4 className="text-4xl font-black text-white/5 tracking-[0.2em] z-0 group-hover:text-violet-500/20 transition-colors group-hover:scale-110 duration-700">RAILWAY</h4>
                 <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-violet-400 flex items-center gap-2">
                    <Calendar size={12}/> 09/2025 - 10/2025
                 </div>
              </div>
              <div className="p-8 relative z-20 -mt-8">
                <h4 className="text-2xl font-bold mb-3 text-white">Railway Track Algorithim</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Java application loading Dutch railway data to provide shortest routes and MCST generation using Dijkstra and Prim algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'Algorithms', 'Dijkstra', 'Prim'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-violet-300 border border-violet-500/20">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-violet-400 transition-colors">
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Autonomous Nav */}
            <motion.div variants={fadeUpSpring} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <div className="h-60 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                 <Target className="text-white/5 w-40 h-40 group-hover:text-blue-500/20 transition-colors animate-[spin_10s_linear_infinite]" />
                 <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-blue-400 flex items-center gap-2">
                    <Calendar size={12}/> 04/2025 - 06/2025
                 </div>
              </div>
              <div className="p-8 relative z-20 -mt-8">
                <h4 className="text-2xl font-bold mb-3 text-white">Frog Autonomous Navigation</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  Navigation system in Java using radar-based obstacle detection, real-time communication, a JavaFX mission GUI, and SQLite.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'JavaFX', 'SQLite', 'Radar Systems'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-blue-300 border border-blue-500/20">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* CONTACT SECTION (The Ultimate Gradient Box) */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.1)]"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-[#030712] to-violet-900 opacity-80 z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-white">Deploying next?</h3>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-bold text-cyan-400 mb-10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Open to Internships & Part-Time Roles
            </div>

            <p className="font-medium text-slate-300 text-lg max-w-2xl mb-12 mx-auto">
              Currently seeking an internship or part-time role in Software Engineering, Full-Stack, Embedded Systems, or Robotics where I can tackle complex logic and add value from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
              <button 
                onClick={handleCopyEmail}
                className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                {copied ? <Check size={20} /> : <Mail size={20} />}
                {copied ? "Copied to Clipboard!" : email}
              </button>
              <a 
                href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" 
                target="_blank"
                className="bg-white/5 text-white border border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 hover:scale-105"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://gitlab.com/kiarash.delavar" 
                target="_blank"
                className="bg-[#FC6D26]/10 text-[#FC6D26] border border-[#FC6D26]/30 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold hover:bg-[#FC6D26]/20 transition-all flex items-center justify-center gap-3 hover:scale-105"
              >
                <Gitlab size={20} /> GitLab
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="mt-32 py-10 flex flex-col items-center gap-4 text-sm text-slate-500 border-t border-white/10 relative z-10 bg-[#030712]">
        <div className="flex gap-6">
           <a href="https://github.com/kiarashdelavar" className="hover:text-cyan-400 transition-colors"><Github size={18}/></a>
           <a href="https://gitlab.com/kiarash.delavar" className="hover:text-[#FC6D26] transition-colors"><Gitlab size={18}/></a>
           <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" className="hover:text-cyan-400 transition-colors"><Linkedin size={18}/></a>
        </div>
        <p>© {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.</p>
      </footer>
    </div>
  );
}