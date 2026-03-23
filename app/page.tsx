"use client";

import { Github, Linkedin, Gitlab, FileText, Mail, ExternalLink, Briefcase, Code2, Check, Target, Cpu, Database, LayoutTemplate, Layers, Globe, MapPin, Calendar, GraduationCap, ChevronRight, Rocket, Bot, Phone, Send, Zap, Brain, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const email = "kiarash.delavar@gmail.com";

  const handleCopyEmail = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUpSpring: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#010208] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black pb-24 relative overflow-hidden">
      
      {/* DEEP SPACE BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#010208] to-[#010208] pointer-events-none"></div>
      
      {/* FLOATING NEBULAS */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full" />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full" />

      {/* GLASS NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full z-50 flex gap-6 md:gap-10 text-xs md:text-sm font-bold shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all whitespace-nowrap">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Orbit</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Mission Log</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Modules</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Comms</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1 space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <Zap size={14} className="animate-pulse" /> Available for Deployment
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
              Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                Autonomous
              </span> <br/>
              Futures.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              I am <strong className="text-white">Kiarash Delavar</strong>. I engineer systems where hardware meets intelligence. From industrial robotics to computer vision, I write the logic that moves the world.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#projects" className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-cyan-300 hover:scale-105 transition-all shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center gap-2">
                Launch Explorer <Rocket size={18}/>
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md">
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* SPACE RADAR */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="flex-1 flex justify-center items-center relative h-[500px]">
            {/* Pulsing Orbits */}
            <div className="absolute w-[300px] h-[300px] border border-cyan-500/20 rounded-full animate-ping"></div>
            <div className="absolute w-[450px] h-[450px] border border-violet-500/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
            
            <div className="radar-container w-72 h-72 md:w-[480px] md:h-[480px] border-4 border-white/5 rounded-full shadow-[0_0_100px_rgba(34,211,238,0.1)]">
              <div className="radar-sweep"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-cyan-400 ring-[20px] ring-cyan-400/10 overflow-hidden z-10 shadow-[0_0_80px_rgba(34,211,238,0.4)]">
                 <Image src="/kiaphoto.jpg" alt="Kiarash" fill className="object-cover hover:scale-110 transition-transform duration-700" priority />
              </div>
            </div>
          </motion.div>
        </section>

        {/* MISSION LOG (EXPERIENCE) */}
        <motion.section id="experience" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
               <Briefcase className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-4xl font-black tracking-tight uppercase italic">Mission Log</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MLOps @ Saxion */}
            <motion.div variants={fadeUpSpring} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-cyan-500/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400"><Brain size={28}/></div>
                <span className="text-[10px] font-mono py-1 px-3 bg-cyan-500/10 rounded-full text-cyan-400 border border-cyan-500/20 uppercase">Current Mission</span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">MLOps & Machine Learning Engineer</h4>
              <p className="text-cyan-400 font-mono text-xs mt-2 italic">Saxion Ambient Intelligence • Remote • 2026</p>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">Developing real-time audio analysis with multi-stream sentiment analysis. Architecting Dockerized testing environments and evaluating ML model performance.</p>
            </motion.div>

            {/* Computer Vision @ Saxion */}
            <motion.div variants={fadeUpSpring} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-emerald-500/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400"><Eye size={28}/></div>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">Computer Vision & Pose Estimation</h4>
              <p className="text-emerald-400 font-mono text-xs mt-2 italic">Collaboration with NOC*NSF • 2026</p>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">Analyzing track sprint cyclists using advanced pose estimation. Measuring joint angles and movement timing relative to start signals.</p>
            </motion.div>

            {/* Robotics @ SMART */}
            <motion.div variants={fadeUpSpring} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-violet-500/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-violet-500/10 rounded-2xl text-violet-400"><Target size={28}/></div>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">Robotics Intern</h4>
              <p className="text-violet-400 font-mono text-xs mt-2 italic">SMART Research Group • Enschede • Present</p>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">Improving safety for ABB GoFa robots. Validating collision-free behavior via ROS2 nodes and trajectory log analysis.</p>
            </motion.div>

            {/* Novara */}
            <motion.div variants={fadeUpSpring} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-blue-500/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400"><Cpu size={28}/></div>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">Co-Founder & CEO</h4>
              <p className="text-blue-400 font-mono text-xs mt-2 italic">Novara AI • Deventer • Present</p>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">Architecting a full-stack AI platform to modernize SME operations using Next.js, Supabase, and Spring Boot.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-4 mb-16">
             <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/30">
               <Layers className="text-violet-400" size={24} />
            </div>
            <h3 className="text-4xl font-black tracking-tight uppercase italic text-white">System Modules</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IoT Telemetry */}
            <motion.div variants={fadeUpSpring} className="group bg-[#050a1a] border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all relative">
              <div className="h-32 bg-gradient-to-br from-emerald-900/20 to-transparent p-6">
                 <h4 className="text-3xl font-black opacity-10 uppercase italic">Telemetry</h4>
              </div>
              <div className="p-8 -mt-12 relative">
                <h4 className="text-xl font-bold text-white mb-2">IoT Monitoring Platform</h4>
                <p className="text-slate-400 text-xs mb-6">FastAPI + PostgreSQL + React Three Fiber. Visualization of real-time sensor streams.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Docker', 'FastAPI', 'Three.js'].map(t => <span key={t} className="text-[10px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded-md">{t}</span>)}
                </div>
                <a href="https://github.com/kiarashdelavar/iot-telemetry-platform" target="_blank" className="text-white text-xs font-bold flex items-center gap-2 hover:text-emerald-400 transition-colors uppercase italic tracking-wider">Access Repository <ExternalLink size={14} /></a>
              </div>
            </motion.div>

            {/* Railway */}
            <motion.div variants={fadeUpSpring} className="group bg-[#050a1a] border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all relative">
              <div className="h-32 bg-gradient-to-br from-violet-900/20 to-transparent p-6">
                 <h4 className="text-3xl font-black opacity-10 uppercase italic">Algorithms</h4>
              </div>
              <div className="p-8 -mt-12 relative">
                <h4 className="text-xl font-bold text-white mb-2">Railway Track Manager</h4>
                <p className="text-slate-400 text-xs mb-6">Java-based complex data structures @ Saxion. Dijkstra & Prim algorithms implementation.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Java', 'Data Structures'].map(t => <span key={t} className="text-[10px] font-mono text-violet-400 bg-violet-400/5 px-2 py-1 rounded-md">{t}</span>)}
                </div>
                <a href="https://github.com/kiarashdelavar/Railway-track-manager" target="_blank" className="text-white text-xs font-bold flex items-center gap-2 hover:text-violet-400 transition-colors uppercase italic tracking-wider">Access Repository <ExternalLink size={14} /></a>
              </div>
            </motion.div>

            {/* Frog */}
            <motion.div variants={fadeUpSpring} className="group bg-[#050a1a] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all relative">
              <div className="h-32 bg-gradient-to-br from-cyan-900/20 to-transparent p-6">
                 <h4 className="text-3xl font-black opacity-10 uppercase italic">Navigation</h4>
              </div>
              <div className="p-8 -mt-12 relative">
                <h4 className="text-xl font-bold text-white mb-2">Frog Autonomous Nav</h4>
                <p className="text-slate-400 text-xs mb-6">Autonomous navigation system using radar obstacle detection and SQLite database.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Java', 'Radar', 'SQLite'].map(t => <span key={t} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/5 px-2 py-1 rounded-md">{t}</span>)}
                </div>
                <a href="https://github.com/kiarashdelavar/Frog-Autonomous-Navigation-System" target="_blank" className="text-white text-xs font-bold flex items-center gap-2 hover:text-cyan-400 transition-colors uppercase italic tracking-wider">Access Repository <ExternalLink size={14} /></a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section id="contact" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">Establish Comms</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">Ready to collaborate on the next generation of smart systems. Connect through any frequency below.</p>
            <div className="space-y-4">
              <button onClick={handleCopyEmail} className="w-full flex items-center gap-5 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all group text-left">
                <div className="p-3.5 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">{copied ? <Check size={20} /> : <Mail size={20}/>}</div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Email Terminal</p>
                  <p className="font-mono text-white group-hover:text-cyan-400 transition-colors">{copied ? "Copied!" : email}</p>
                </div>
              </button>
              <a href="tel:+31617174048" className="w-full flex items-center gap-5 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-violet-500/50 hover:bg-white/[0.04] transition-all group">
                <div className="p-3.5 bg-violet-500/10 rounded-xl text-violet-400 group-hover:scale-110 transition-transform"><Phone size={20}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Mobile Link</p>
                  <p className="font-mono text-white group-hover:text-violet-400 transition-colors">+31 617174048</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" target="_blank" className="w-full flex items-center gap-5 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group text-left">
                <div className="p-3.5 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform"><Linkedin size={20}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">LinkedIn Identity</p>
                  <p className="font-mono text-white group-hover:text-blue-400 transition-colors">Kiarash Delavar</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
            <h4 className="text-2xl font-black mb-8 text-white uppercase italic flex items-center gap-3"><Send className="text-cyan-400"/> New Transmission</h4>
            <form action="https://formspree.io/f/xbdapkgq" method="POST" className="space-y-6 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subject Name</label>
                     <input type="text" name="name" required className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700" placeholder="Identity..." />
                  </div>
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Frequency (Email)</label>
                     <input type="email" name="email" required className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700" placeholder="address@galaxy.com" />
                  </div>
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message Payload</label>
                  <textarea name="message" required rows={5} className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 outline-none transition-all resize-none placeholder:text-slate-700" placeholder="Mission details..."></textarea>
               </div>
               <button type="submit" className="w-full py-5 bg-cyan-500 text-black font-black text-lg rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter italic">
                 Transmit Message <Rocket size={20} />
               </button>
            </form>
          </div>
        </motion.section>

      </main>

      <footer className="mt-32 py-12 flex flex-col items-center gap-6 text-sm text-slate-600 border-t border-white/5 relative z-10 bg-[#010208]">
        <div className="flex gap-8">
           <a href="https://github.com/kiarashdelavar" className="hover:text-cyan-400 transition-colors"><Github size={20}/></a>
           <a href="https://gitlab.com/kiarash.delavar" className="hover:text-[#FC6D26] transition-colors"><Gitlab size={20}/></a>
           <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" className="hover:text-cyan-400 transition-colors"><Linkedin size={20}/></a>
        </div>
        <p className="font-mono text-[10px] tracking-widest uppercase opacity-50">© {new Date().getFullYear()} Kiarash Delavar • Engineered in Deep Space (Netherlands)</p>
      </footer>
    </div>
  );
}