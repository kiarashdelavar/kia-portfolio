"use client";

import { Github, Linkedin, Gitlab, FileText, Mail, ExternalLink, Briefcase, Code2, Check, Target, Cpu, Database, LayoutTemplate, Layers, Globe, MapPin, Calendar, GraduationCap, ChevronRight, Rocket, Bot, Phone, Send, Brain, Eye } from "lucide-react";
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
      
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]"></div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full z-50 flex gap-6 md:gap-10 text-xs md:text-sm font-bold shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all whitespace-nowrap">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Story</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 space-y-8 relative z-20">
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
              Hi, I am <strong className="text-white">Kiarash Delavar</strong>. I like building software that solves real problems. From programming robots to creating AI web apps, I turn ideas into clean and working code.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#projects" className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg">
                <Rocket size={18}/> Explore Projects
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md">
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} className="flex-1 flex justify-center items-center relative h-[400px] md:h-[500px] w-full">
            <motion.div variants={floatAnim} animate="animate" className="absolute top-10 left-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-cyan-400 z-30"><Bot size={24}/></motion.div>
            <motion.div variants={floatAnimReverse} animate="animate" className="absolute bottom-10 right-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-violet-400 z-30"><Code2 size={24}/></motion.div>
            <div className="absolute w-[90%] md:w-[110%] aspect-square rounded-full border border-cyan-500/10 border-dashed animate-[spin_30s_linear_infinite]"></div>
            <div className="radar-container w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="radar-sweep"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-[#02040a] ring-2 ring-cyan-400/50 overflow-hidden z-10 shadow-[0_0_60px_rgba(34,211,238,0.6)] bg-black">
                 <Image src="/kiaphoto.jpg" alt="Kiarash" fill className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" priority />
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="text-cyan-400" size={32} />
            <h3 className="text-4xl font-black tracking-tight">Professional Experience</h3>
          </div>

          <div className="space-y-12 border-l-2 border-white/10 ml-4 pl-10 relative">
            
            {/* SAXION AMBIENT - ML */}
            <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399] group-hover:scale-150 transition-all"></span>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">MLOps & Machine Learning Engineer <Brain size={18} className="text-emerald-400"/></h4>
              <p className="text-emerald-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4">
                <span>Saxion Ambient Intelligence</span>
                <span className="text-slate-400">March 2026 - Present</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                Developing a real-time audio analysis project focusing on multi-stream sentiment analysis. Architecting Dockerized testing environments and evaluating machine learning model performance.
              </p>
            </motion.div>

            {/* SAXION AMBIENT - CV */}
            <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-emerald-400 rounded-full group-hover:scale-150 transition-all"></span>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">Computer Vision & Pose Estimation <Eye size={18} className="text-emerald-400"/></h4>
              <p className="text-emerald-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4">
                <span>Collaboration with NOC*NSF</span>
                <span className="text-slate-400">March 2026 - Present</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                Analyzing track sprint cyclists via video recordings. Developing software to measure joint angles and movement timing relative to start signals using advanced pose estimation.
              </p>
            </motion.div>

            {/* SMART RESEARCH */}
            <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] group-hover:scale-150 transition-all"></span>
              <h4 className="text-xl font-bold text-white">Robotics Intern</h4>
              <p className="text-cyan-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4">
                <span>SMART Research Group</span>
                <span className="text-slate-400">Nov 2025 - Present</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                Improving safety for ABB GoFa robots using ROS2, MoveIt2, and C++. Analyzing trajectory logs to validate safe, collision-free robot behavior.
              </p>
            </motion.div>

            {/* NOVARA */}
            <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
              <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-all"></span>
              <h4 className="text-xl font-bold text-white">Co-Founder & CEO</h4>
              <p className="text-violet-400 font-mono text-xs mt-2 mb-3 flex items-center gap-4">
                <span>Novara AI</span>
                <span className="text-slate-400">Oct 2025 - Present</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                Leading the technical architecture of an AI-powered SaaS platform using Next.js and Spring Boot to streamline SME operational workflows.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-cyan-400" size={32} />
            <h3 className="text-4xl font-black tracking-tight">Featured Engineering</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IoT Telemetry */}
            <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#061f14] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <h4 className="text-5xl font-black text-white/5 tracking-[0.2em]">TELEMETRY</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5"><Calendar size={12}/> 02/2026</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">IoT Telemetry Platform</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Full-stack IoT monitoring dashboard with FastAPI, PostgreSQL, and React Three Fiber rendering.</p>
                <div className="flex flex-wrap gap-2 mb-8 content-start">
                  {['Next.js', 'FastAPI', 'Docker', 'Three.js'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-emerald-300 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/iot-telemetry-platform" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-emerald-500 hover:text-black transition-all">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Railway Manager */}
            <motion.div variants={fadeUpSpring} className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all relative">
              <div className="h-48 bg-gradient-to-br from-[#0a0f1c] to-[#160f24] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                 <h4 className="text-5xl font-black text-white/5 tracking-[0.2em]">RAILWAY</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-violet-400 flex items-center gap-1.5"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-violet-400 flex items-center gap-1.5"><Calendar size={12}/> 09/2025</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors">Railway Track Algorithm</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Java application implementing Dijkstra and Prim algorithms to optimize rail routes and track management.</p>
                <div className="flex flex-wrap gap-2 mb-8 content-start">
                  {['Java', 'Data Structures', 'Algorithms'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-violet-300 border border-white/10">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/Railway-track-manager" target="_blank" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-violet-500 transition-all">
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section id="contact" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-white">Let&apos;s talk.</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">Ready to collaborate on the next generation of smart systems. Connect through any frequency below.</p>
            <div className="space-y-4">
              <button onClick={handleCopyEmail} className="w-full flex items-center gap-5 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/50 group text-left">
                <div className="p-3.5 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">{copied ? <Check size={20} /> : <Mail size={20}/>}</div>
                <div><p className="text-xs text-slate-500 font-bold uppercase">Email</p><p className="font-mono text-white">{copied ? "Copied!" : email}</p></div>
              </button>
              <a href="tel:+31617174048" className="w-full flex items-center gap-5 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-violet-500/50 group">
                <div className="p-3.5 bg-violet-500/10 rounded-xl text-violet-400 group-hover:scale-110 transition-transform"><Phone size={20}/></div>
                <div><p className="text-xs text-slate-500 font-bold uppercase">Phone</p><p className="font-mono text-white">+31 617174048</p></div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
            <h4 className="text-2xl font-bold mb-8 text-white flex items-center gap-3"><Send className="text-cyan-400"/> Send Message</h4>
            <form action="https://formspree.io/f/xbdapkgq" method="POST" className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" required className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500 transition-all" placeholder="Your Name" />
                  <input type="email" name="email" required className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500 transition-all" placeholder="Your Email" />
               </div>
               <textarea name="message" required rows={5} className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500 transition-all resize-none" placeholder="Your Message..."></textarea>
               <button type="submit" className="w-full py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3">
                 Send <Rocket size={20} />
               </button>
            </form>
          </div>
        </motion.section>

      </main>

      <footer className="mt-32 py-12 flex flex-col items-center gap-6 text-sm text-slate-600 border-t border-white/5 bg-[#02040a]">
        <div className="flex gap-8">
           <a href="https://github.com/kiarashdelavar" className="hover:text-cyan-400 transition-colors"><Github size={20}/></a>
           <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" className="hover:text-cyan-400 transition-colors"><Linkedin size={20}/></a>
        </div>
        <p className="font-mono">© {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.</p>
      </footer>
    </div>
  );
}