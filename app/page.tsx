"use client";

import { Github, Linkedin, Gitlab, FileText, Mail, ExternalLink, Briefcase, Code2, Check, Target, Cpu, Database, LayoutTemplate, Layers, Globe, MapPin, Calendar, GraduationCap, ChevronRight, Rocket, Bot, Phone, Send, Brain, Eye, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- CUSTOM BACKGROUND ANIMATION (Retro Space Theme) ---
const SpaceDust = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const arr = [];
    // Generate Stars
    for (let i = 0; i < 35; i++) {
      arr.push({
        id: `star-${i}`,
        type: 'star',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5
      });
    }
    // Generate Ships (Red and Blue triangles)
    for (let i = 0; i < 6; i++) {
      arr.push({
        id: `ship-${i}`,
        type: 'ship',
        color: i % 2 === 0 ? 'red' : 'blue',
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * 10
      });
    }
    setElements(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => {
        if (el.type === 'star') {
          return (
            <motion.div
              key={el.id}
              className={`absolute rounded-full ${isDarkMode ? 'bg-white/30' : 'bg-black/10'}`}
              style={{ width: el.size, height: el.size, left: `${el.x}%`, top: `${el.y}%` }}
              animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
              transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: "linear" }}
            />
          );
        } else {
          return (
            <motion.div
              key={el.id}
              className={`absolute w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] ${
                el.color === 'red' 
                  ? (isDarkMode ? 'border-b-red-500/50' : 'border-b-red-500/80') 
                  : (isDarkMode ? 'border-b-blue-500/50' : 'border-b-blue-500/80')
              }`}
              style={{ left: `${el.x}%`, top: `${el.y}%`, transform: `rotate(${Math.random() * 360}deg)` }}
              animate={{ x: [0, el.x % 2 === 0 ? 800 : -800], y: [0, -800], rotate: "+=180" }}
              transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: "linear" }}
            />
          );
        }
      })}
    </div>
  );
};

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // LIGHT/DARK MODE STATE
  const email = "kiarash.delavar@gmail.com";

  const handleCopyEmail = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animations
  const fadeUpSpring: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const floatAnim: any = { animate: { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } };
  const floatAnimReverse: any = { animate: { y: [0, 15, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } };

  // --- THEME ENGINE ---
  const theme = {
    bg: isDarkMode ? "bg-[#02040a] text-slate-200" : "bg-slate-50 text-slate-700",
    heading: isDarkMode ? "text-white" : "text-slate-900",
    muted: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-white/[0.02] border-white/10" : "bg-black/[0.02] border-black/10",
    cardHover: isDarkMode ? "hover:bg-white/[0.04]" : "hover:bg-black/[0.04]",
    badge: isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10",
    input: isDarkMode ? "bg-[#0a0f1c] border-white/10 text-white placeholder:text-slate-600" : "bg-white border-black/10 text-slate-900 placeholder:text-slate-400",
    nav: isDarkMode ? "bg-white/5 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] text-white" : "bg-white/60 border-slate-300 shadow-[0_0_40px_rgba(0,0,0,0.05)] text-slate-900",
    glow: isDarkMode ? "mix-blend-screen" : "mix-blend-multiply opacity-30",
    radarRing: isDarkMode ? "border-[#02040a]" : "border-slate-50",
    projectCard: isDarkMode ? "from-[#0a0f1c] to-[#0f172a]" : "from-slate-200 to-slate-100",
    footer: isDarkMode ? "border-white/5 bg-[#02040a]" : "border-black/5 bg-slate-50",
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-black pb-24 relative overflow-hidden transition-colors duration-700 ${theme.bg}`}>
      
      {/* BACKGROUND ANIMATIONS */}
      <SpaceDust isDarkMode={isDarkMode} />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
      <div className={`absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite] transition-all duration-700 ${theme.glow}`}></div>
      <div className={`absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite] transition-all duration-700 ${theme.glow}`}></div>

      {/* TOP RIGHT THEME TOGGLE */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 md:top-8 md:right-8 z-50 p-3 rounded-full backdrop-blur-md border transition-all hover:scale-110 shadow-lg ${isDarkMode ? 'bg-white/10 border-white/20 text-yellow-400' : 'bg-white/80 border-slate-200 text-slate-800'}`}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* GLASSMORPHISM NAVBAR */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 backdrop-blur-2xl border px-8 py-4 rounded-full z-50 flex gap-6 md:gap-10 text-xs md:text-sm font-bold transition-all whitespace-nowrap ${theme.nav}`}>
        <a href="#about" className="hover:text-cyan-400 transition-colors">Story</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 space-y-8 relative z-20">
            
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-cyan-500 text-xs font-mono shadow-[0_0_20px_rgba(34,211,238,0.2)] ${isDarkMode ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Available for Internships & Part-Time
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] transition-colors duration-700 ${theme.heading}`}>
              I build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 drop-shadow-lg">
                smart systems
              </span> <br/>
              that work.
            </h1>
            
            <p className={`text-lg md:text-xl max-w-xl font-light leading-relaxed transition-colors duration-700 ${theme.muted}`}>
              Hi, I am <strong className={theme.heading}>Kiarash Delavar</strong>. I like building software that solves real problems. From programming robots to creating AI web apps, I turn ideas into clean and working code.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#projects" className="bg-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2">
                <Rocket size={18}/> Explore Projects
              </a>
              <a href="https://github.com/kiarashdelavar" target="_blank" className={`border px-6 py-4 rounded-2xl font-bold hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md shadow-lg ${theme.badge} ${theme.heading} hover:opacity-80`}>
                <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://gitlab.com/kiarash.delavar" target="_blank" className={`border px-6 py-4 rounded-2xl font-bold hover:-translate-y-1 transition-all flex items-center gap-2 backdrop-blur-md text-[#FC6D26] shadow-[0_0_20px_rgba(252,109,38,0.1)] ${isDarkMode ? 'bg-[#FC6D26]/10 border-[#FC6D26]/20' : 'bg-[#FC6D26]/5 border-[#FC6D26]/20'}`}>
                <Gitlab size={20} /> <span className="hidden sm:inline">GitLab</span>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} className="flex-1 flex justify-center items-center relative h-[400px] md:h-[500px] w-full">
            <motion.div variants={floatAnim} animate="animate" className={`absolute top-10 left-10 p-3 backdrop-blur-md border rounded-2xl text-cyan-500 z-30 shadow-xl ${theme.badge}`}>
               <Bot size={24}/>
            </motion.div>
            <motion.div variants={floatAnimReverse} animate="animate" className={`absolute bottom-10 right-10 p-3 backdrop-blur-md border rounded-2xl text-violet-500 z-30 shadow-xl ${theme.badge}`}>
               <Code2 size={24}/>
            </motion.div>

            <div className="absolute w-[90%] md:w-[110%] aspect-square rounded-full border border-cyan-500/20 border-dashed animate-[spin_30s_linear_infinite]"></div>
            
            <div className="radar-container w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="radar-sweep"></div>
              <div className="radar-target" style={{ top: '25%', left: '65%', animationDelay: '0s' }}></div>
              <div className="radar-target" style={{ top: '75%', left: '35%', animationDelay: '1.2s' }}></div>
              <div className="radar-target" style={{ top: '45%', left: '85%', animationDelay: '2.5s' }}></div>
              
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border-4 ring-2 ring-cyan-400/50 overflow-hidden z-10 shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-colors duration-700 ${theme.radarRing}`}>
                 <Image src="/kiaphoto.jpg" alt="Kiarash" fill className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" priority />
              </div>
            </div>
          </motion.div>

        </section>

        {/* STORY SECTION */}
        <motion.section id="about" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <motion.div variants={fadeUpSpring} className={`md:col-span-8 backdrop-blur-2xl border rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] p-8 md:p-14 transition-all group relative overflow-hidden ${theme.card}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            <h3 className={`text-3xl font-black mb-8 flex items-center gap-3 transition-colors duration-700 ${theme.heading}`}><Cpu className="text-cyan-500" size={32}/> About Me</h3>
            
            <div className={`space-y-6 text-lg font-light leading-relaxed relative z-10 transition-colors duration-700 ${theme.muted}`}>
              <p>
                Hi! I’m a Software Engineering student living in the Netherlands. I’m really interested in robotics, AI, and building smart systems. For me, coding is not just about making things look nice, it’s about building systems that work well in real life.
              </p>
              <p>
                I enjoy working across the whole "stack." I like building the front-end of websites, but I also love working with back-end logic and databases. Recently, I have become very interested in Data Science. I like using data to understand how systems work and how to make them better.
              </p>
              <p>
                Whether I’m writing C++ for a robotic arm, analyzing data in Python, or building a web app with Next.js, I focus on writing simple, clean, and reliable code. I enjoy solving problems, learning new technologies, and working in a team to build useful products.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpSpring} className={`md:col-span-4 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] rounded-tr-[4rem] rounded-bl-[4rem] p-8 md:p-12 flex flex-col justify-between transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
            <div className="space-y-8">
               <div>
                 <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${theme.muted}`}><MapPin size={16}/> Base</h4>
                 <p className="text-cyan-500 font-mono text-lg font-bold">Deventer, The Netherlands</p>
               </div>
               <div>
                 <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${theme.muted}`}><Globe size={16}/> Languages</h4>
                 <div className={`flex flex-col gap-2 font-mono text-sm font-medium ${theme.heading}`}>
                    <span>Persian <span className="text-violet-500">(Native)</span></span>
                    <span>English <span className="text-violet-500">(C1)</span></span>
                    <span>Dutch <span className="text-violet-500">(B1)</span></span>
                 </div>
               </div>
            </div>
            <a href="/Kiarash_resume.pdf" download className={`mt-10 w-full py-4 rounded-xl flex justify-center items-center gap-2 font-bold transition-all shadow-lg hover:scale-105 ${isDarkMode ? 'bg-white text-black hover:bg-cyan-400' : 'bg-slate-900 text-white hover:bg-cyan-500'}`}>
              <FileText size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={fadeUpSpring} className={`md:col-span-12 backdrop-blur-2xl border rounded-[2rem] rounded-bl-[4rem] p-8 md:p-12 transition-all ${theme.card}`}>
             <h3 className={`text-2xl font-black mb-10 flex items-center gap-3 transition-colors duration-700 ${theme.heading}`}><Layers className="text-violet-500"/> Technical Arsenal</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="space-y-4">
                <h4 className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-6 border-b pb-3 transition-colors duration-700 ${theme.heading} ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <LayoutTemplate size={16} className="text-cyan-500"/> Web & Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Angular', 'Vue.js', 'PHP', 'Laravel', 'Svelte', 'Tailwind', 'TypeScript'].map(skill => (
                    <span key={skill} className={`px-4 py-2 border rounded-xl text-xs font-mono transition-all hover:scale-105 cursor-default ${isDarkMode ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-100 hover:bg-cyan-500/30' : 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-6 border-b pb-3 transition-colors duration-700 ${theme.heading} ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <Database size={16} className="text-violet-500"/> Backend & Core
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Go', 'Node.js', 'Express', 'Java', 'Spring', 'Python', 'C++', 'C#', 'ASP.NET'].map(skill => (
                    <span key={skill} className={`px-4 py-2 border rounded-xl text-xs font-mono transition-all hover:scale-105 cursor-default ${isDarkMode ? 'bg-violet-500/10 border-violet-500/20 text-violet-100 hover:bg-violet-500/30' : 'bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-6 border-b pb-3 transition-colors duration-700 ${theme.heading} ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <Brain size={16} className="text-emerald-500"/> AI & Data
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['MMPose', 'MediaPipe', 'OpenCV', 'PyTorch', 'Pose Estimation', 'Biometrics', 'NumPy'].map(skill => (
                    <span key={skill} className={`px-4 py-2 border rounded-xl text-xs font-mono transition-all hover:scale-105 cursor-default ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-100 hover:bg-emerald-500/30' : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-6 border-b pb-3 transition-colors duration-700 ${theme.heading} ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <Target size={16} className="text-blue-500"/> Robotics & Ops
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['ROS2', 'MoveIt2', 'Docker', 'CI/CD', 'Azure', 'AWS', 'GitHub Actions'].map(skill => (
                    <span key={skill} className={`px-4 py-2 border rounded-xl text-xs font-mono transition-all hover:scale-105 cursor-default ${isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-100 hover:bg-blue-500/30' : 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-cyan-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight transition-colors duration-700 ${theme.heading}`}>Experience</h3>
            </div>

            <div className={`space-y-12 border-l-2 ml-4 pl-10 relative transition-colors duration-700 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
              
              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_#34d399] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className={`text-xl font-bold flex items-center gap-2 transition-colors duration-700 ${theme.heading}`}>MLOps & Machine Learning Engineer <Brain size={18} className="text-emerald-500" /></h4>
                <p className="text-emerald-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> Saxion Ambient Intelligence</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Deventer, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> March 2026 - Present</span>
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-700 ${theme.muted}`}>Developing a real-time audio analysis project focusing on multi-stream sentiment analysis, Dockerized testing environments, and ML model evaluation.</p>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_#34d399] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className={`text-xl font-bold flex items-center gap-2 transition-colors duration-700 ${theme.heading}`}>Computer Vision & Pose Estimation <Eye size={18} className="text-emerald-500" /></h4>
                <p className="text-emerald-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> Collaboration with NOC*NSF</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Deventer, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> March 2026 - Present</span>
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-700 ${theme.muted}`}>Analyzing track sprint cyclists via video using pose estimation methods to measure joint angles and movement timing relative to signals.</p>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_#22d3ee] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className={`text-xl font-bold transition-colors duration-700 ${theme.heading}`}>Robotics Intern</h4>
                <p className="text-cyan-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> SMART Research Group</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Enschede, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> Nov 2025 - Present</span>
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-700 ${theme.muted}`}>Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies and validating safe robot behavior.</p>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className={`text-xl font-bold transition-colors duration-700 ${theme.heading}`}>Co-Founder & CEO</h4>
                <p className="text-violet-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><Briefcase size={12}/> Novara</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Deventer, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> Oct 2025 - Present</span>
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-700 ${theme.muted}`}>Leading the development of an AI-powered SaaS platform helping SMEs work smarter. Architected with Next.js, Supabase, and Spring Boot.</p>
              </motion.div>

            </div>
          </motion.div>

          <motion.div id="education" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="text-violet-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight transition-colors duration-700 ${theme.heading}`}>Education</h3>
            </div>

            <div className={`space-y-12 border-l-2 ml-4 pl-10 relative transition-colors duration-700 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className="absolute -left-[49px] top-1.5 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_15px_#a855f7] group-hover:scale-150 transition-transform duration-500"></span>
                <h4 className={`text-xl font-bold transition-colors duration-700 ${theme.heading}`}>BASc, Software Engineering</h4>
                <p className="text-violet-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><GraduationCap size={12}/> Saxion University</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Deventer, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> Sept 2024 - Present</span>
                </p>
                <ul className={`text-sm leading-relaxed space-y-2 list-none transition-colors duration-700 ${theme.muted}`}>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-500 mt-1 flex-shrink-0"/> Novel-T Entrepreneurial Summer School</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-500 mt-1 flex-shrink-0"/> Member of Honours Community</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-cyan-500 mt-1 flex-shrink-0"/> E³UDRES² Design Thinking & Prototyping</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="relative group hover:translate-x-2 transition-transform">
                <span className={`absolute -left-[49px] top-1.5 w-4 h-4 rounded-full group-hover:bg-cyan-500 transition-colors duration-500 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`}></span>
                <h4 className={`text-xl font-bold transition-colors duration-700 ${theme.heading}`}>High School Diploma, Math & Physics</h4>
                <p className="text-slate-500 font-mono text-xs mt-2 mb-3 flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1"><GraduationCap size={12}/> Energy High School</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12}/> Mashhad, Iran</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12}/> 2020 - 2023</span>
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-700 ${theme.muted}`}>Focus on advanced mathematics and complex problem-solving skills.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-cyan-500" size={32} />
            <h3 className={`text-4xl font-black tracking-tight transition-colors duration-700 ${theme.heading}`}>Featured Engineering</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Cycling MVP */}
            <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(52,211,153,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#062016] border-white/5' : 'from-emerald-100 to-emerald-50 border-black/5'}`}>
                 <h4 className={`text-5xl font-black tracking-[0.2em] group-hover:scale-110 transition-transform duration-700 ${isDarkMode ? 'text-white/5' : 'text-black/5'}`}>CYCLES</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-emerald-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-emerald-400"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-emerald-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-emerald-400"><Calendar size={12}/> 03/2026 - Present</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors ${theme.heading}`}>Cycling Start Analysis</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>
                  Developed an MVP for human pose estimation to analyze joint angles and movement timing of track sprint cyclists in collaboration with NOC*NSF.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Python', 'OpenCV', 'MediaPipe', 'Pose Estimation', 'Numpy'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/cyclist-pose-estimation" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500' : 'bg-emerald-50 border-emerald-200 text-emerald-900 hover:bg-emerald-500 hover:text-white'}`}>
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* IoT Telemetry Platform */}
            <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#061f14] border-white/5' : 'from-emerald-100 to-emerald-50 border-black/5'}`}>
                 <h4 className={`text-5xl md:text-4xl lg:text-5xl font-black tracking-[0.2em] group-hover:scale-110 transition-transform duration-700 ${isDarkMode ? 'text-white/5' : 'text-black/5'}`}>TELEMETRY</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-emerald-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-emerald-400"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-emerald-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-emerald-400"><Calendar size={12}/> 02/2026 - Present</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors ${theme.heading}`}>IoT Telemetry Platform</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>
                  A full-stack IoT telemetry monitoring dashboard built with FastAPI, Next.js (React Three Fiber), PostgreSQL, and Docker.
                </p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Three.js'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/iot-telemetry-platform" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500' : 'bg-emerald-50 border-emerald-200 text-emerald-900 hover:bg-emerald-500 hover:text-white'}`}>
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Novara */}
            <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#0f172a] border-white/5' : 'from-cyan-100 to-cyan-50 border-black/5'}`}>
                 <h4 className={`text-5xl font-black tracking-[0.2em] group-hover:scale-110 transition-transform duration-700 ${isDarkMode ? 'text-white/5' : 'text-black/5'}`}>NOVARA</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-cyan-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-cyan-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400"><Calendar size={12}/> 09/2025 - Present</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors ${theme.heading}`}>Novara AI SaaS</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>Architected a robust full-stack AI platform for freelancers and small businesses to optimize operational workflows.</p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Next.js', 'Supabase', 'Tailwind', 'Spring Boot'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500' : 'bg-cyan-50 border-cyan-200 text-cyan-900 hover:bg-cyan-500 hover:text-white'}`}>
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Saxion Tool */}
            <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(252,109,38,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#1a0b07] border-white/5' : 'from-orange-100 to-orange-50 border-black/5'}`}>
                 <h4 className={`text-5xl font-black tracking-[0.2em] group-hover:scale-110 transition-transform duration-700 ${isDarkMode ? 'text-white/5' : 'text-black/5'}`}>SAXION</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-[#FC6D26] flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-[#FC6D26]"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-[#FC6D26] flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-[#FC6D26]"><Calendar size={12}/> 11/2025 - 01/2026</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-[#FC6D26] transition-colors ${theme.heading}`}>Project Acquisition Tool</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>Developed a full-stack portal for Saxion University allowing client submissions, student exploration, and a teacher dashboard.</p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Svelte', 'Node.js', 'Express', 'PostgreSQL'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-[#FC6D26] hover:text-black hover:border-[#FC6D26]' : 'bg-orange-50 border-orange-200 text-orange-900 hover:bg-[#FC6D26] hover:text-white'}`}>
                  View on GitLab <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

             {/* Railway Manager */}
             <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#160f24] border-white/5' : 'from-violet-100 to-violet-50 border-black/5'}`}>
                 <h4 className={`text-5xl font-black tracking-[0.2em] group-hover:scale-110 transition-transform duration-700 ${isDarkMode ? 'text-white/5' : 'text-black/5'}`}>RAILWAY</h4>
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-violet-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-violet-400"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-violet-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-violet-400"><Calendar size={12}/> 09/2025 - 10/2025</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-violet-500 transition-colors ${theme.heading}`}>Railway Track Algorithm</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>Java application loading Dutch railway data to provide shortest routes and MCST generation using Dijkstra and Prim algorithms.</p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'Algorithms', 'Dijkstra', 'Prim'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-violet-400' : 'bg-violet-50 border-violet-200 text-violet-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/Railway-track-manager" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-violet-500 hover:text-white hover:border-violet-500' : 'bg-violet-50 border-violet-200 text-violet-900 hover:bg-violet-500 hover:text-white'}`}>
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Autonomous Nav */}
            <motion.div variants={fadeUpSpring} className={`group backdrop-blur-xl border rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] relative ${theme.card}`}>
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden flex items-center justify-center border-b ${isDarkMode ? 'from-[#0a0f1c] to-[#0f1b2a] border-white/5' : 'from-blue-100 to-blue-50 border-black/5'}`}>
                 <Target className={`w-40 h-40 group-hover:scale-110 transition-transform duration-700 animate-[spin_10s_linear_infinite] ${isDarkMode ? 'text-white/5' : 'text-black/5'}`} />
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-blue-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-blue-400"><MapPin size={12}/> Deventer, NL</div>
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] font-mono text-blue-600 flex items-center gap-1.5 dark:bg-black/60 dark:border-white/10 dark:text-blue-400"><Calendar size={12}/> 04/2025 - 06/2025</div>
                 </div>
              </div>
              <div className="p-8">
                <h4 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${theme.heading}`}>Frog Autonomous Navigation</h4>
                <p className={`text-sm leading-relaxed mb-6 h-16 transition-colors duration-700 ${theme.muted}`}>Navigation system in Java using radar-based obstacle detection, real-time communication, a JavaFX mission GUI, and SQLite.</p>
                <div className="flex flex-wrap gap-2 mb-8 h-16 content-start">
                  {['Java', 'JavaFX', 'SQLite', 'Radar Systems'].map(tech => (
                    <span key={tech} className={`px-3 py-1 border rounded-full text-[10px] font-mono font-bold ${isDarkMode ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/kiarashdelavar/Frog-Autonomous-Navigation-System" target="_blank" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-blue-500 hover:text-white hover:border-blue-500' : 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  View Source <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section id="contact" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-cyan-500 text-xs font-mono shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-2 ${isDarkMode ? 'bg-cyan-500/10 border-cyan-500/30 border' : 'bg-cyan-50 border-cyan-200 border'}`}>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
              Open to Opportunities
            </div>
            
            <h3 className={`text-5xl md:text-6xl font-black tracking-tighter transition-colors duration-700 ${theme.heading}`}>Let&apos;s talk.</h3>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-700 ${theme.muted}`}>
              If you have a project idea, an internship opportunity, or just want to connect, feel free to message me. I’m always open to new ideas and collaborations.
            </p>

            <div className="space-y-4">
              <button onClick={handleCopyEmail} className={`w-full flex items-center gap-5 p-4 border rounded-2xl transition-all group text-left ${theme.card} ${theme.cardHover} hover:border-cyan-500/50`}>
                <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-110 ${isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                  {copied ? <Check size={20} /> : <Mail size={20}/>}
                </div>
                <div>
                  <p className={`text-xs font-bold tracking-wider uppercase mb-1 ${theme.muted}`}>Email</p>
                  <p className={`font-mono font-bold transition-colors group-hover:text-cyan-500 ${theme.heading}`}>{copied ? "Copied to clipboard!" : email}</p>
                </div>
              </button>

              <a href="tel:+31617174048" className={`w-full flex items-center gap-5 p-4 border rounded-2xl transition-all group ${theme.card} ${theme.cardHover} hover:border-violet-500/50`}>
                <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-110 ${isDarkMode ? 'bg-violet-500/10 text-violet-400' : 'bg-violet-100 text-violet-600'}`}><Phone size={20}/></div>
                <div>
                  <p className={`text-xs font-bold tracking-wider uppercase mb-1 ${theme.muted}`}>Phone</p>
                  <p className={`font-mono font-bold transition-colors group-hover:text-violet-500 ${theme.heading}`}>+31 617174048</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" target="_blank" className={`w-full flex items-center gap-5 p-4 border rounded-2xl transition-all group ${theme.card} ${theme.cardHover} hover:border-blue-500/50`}>
                <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-110 ${isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}><Linkedin size={20}/></div>
                <div>
                  <p className={`text-xs font-bold tracking-wider uppercase mb-1 ${theme.muted}`}>LinkedIn</p>
                  <p className={`font-mono font-bold transition-colors group-hover:text-blue-500 ${theme.heading}`}>Kiarash Delavar</p>
                </div>
              </a>

              <a href="https://github.com/kiarashdelavar" target="_blank" className={`w-full flex items-center gap-5 p-4 border rounded-2xl transition-all group ${theme.card} ${theme.cardHover} hover:border-slate-400`}>
                <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-110 ${isDarkMode ? 'bg-slate-100/10 text-slate-200' : 'bg-slate-200 text-slate-700'}`}><Github size={20}/></div>
                <div>
                  <p className={`text-xs font-bold tracking-wider uppercase mb-1 ${theme.muted}`}>GitHub</p>
                  <p className={`font-mono font-bold transition-colors ${theme.heading} ${isDarkMode ? 'group-hover:text-slate-300' : 'group-hover:text-slate-600'}`}>@kiarashdelavar</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className={`lg:col-span-7 backdrop-blur-2xl border rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all ${theme.card}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
            
            <h4 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-700 ${theme.heading}`}>
              <Send className="text-cyan-500"/> Send a Message
            </h4>

            <form action="https://formspree.io/f/xbdapkgq" method="POST" className="space-y-6 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className={`block text-sm font-bold mb-2 ${theme.muted}`}>Your Name</label>
                     <input type="text" name="name" required className={`w-full rounded-xl px-5 py-4 border focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-medium ${theme.input}`} placeholder="John Doe" />
                  </div>
                  <div>
                     <label className={`block text-sm font-bold mb-2 ${theme.muted}`}>Your Email</label>
                     <input type="email" name="email" required className={`w-full rounded-xl px-5 py-4 border focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-medium ${theme.input}`} placeholder="john@company.com" />
                  </div>
               </div>
               <div>
                  <label className={`block text-sm font-bold mb-2 ${theme.muted}`}>Message</label>
                  <textarea name="message" required rows={5} className={`w-full rounded-xl px-5 py-4 border focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none font-medium ${theme.input}`} placeholder="Tell me about your project, team, or opportunity..."></textarea>
               </div>
               <button type="submit" className="w-full py-4 bg-cyan-500 text-white font-black text-lg rounded-xl hover:bg-cyan-600 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:-translate-y-1">
                 Send Message <Rocket size={20} />
               </button>
            </form>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className={`mt-32 py-12 flex flex-col items-center gap-6 text-sm border-t relative z-10 transition-colors duration-700 ${theme.footer} ${theme.muted}`}>
        <div className="flex gap-8">
           <a href="https://github.com/kiarashdelavar" className="hover:text-cyan-500 transition-colors hover:scale-110"><Github size={20}/></a>
           <a href="https://gitlab.com/kiarash.delavar" className="hover:text-[#FC6D26] transition-colors hover:scale-110"><Gitlab size={20}/></a>
           <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" className="hover:text-cyan-500 transition-colors hover:scale-110"><Linkedin size={20}/></a>
        </div>
        <p className="font-mono font-medium">© {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.</p>
      </footer>
    </div>
  );
}