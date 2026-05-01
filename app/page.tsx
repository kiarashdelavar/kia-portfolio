"use client";

import {
  Github,
  Linkedin,
  Gitlab,
  FileText,
  Mail,
  ExternalLink,
  Briefcase,
  Code2,
  Check,
  Target,
  Cpu,
  Database,
  LayoutTemplate,
  Layers,
  Globe,
  MapPin,
  Calendar,
  GraduationCap,
  ChevronRight,
  Rocket,
  Bot,
  Phone,
  Send,
  Brain,
  Eye,
  Sun,
  Moon,
  Terminal,
  ShieldCheck,
  ScanLine,
  WalletCards,
  Sparkles,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpaceDust = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 35; i++) {
      arr.push({
        id: `star-${i}`,
        type: "star",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      });
    }

    for (let i = 0; i < 6; i++) {
      arr.push({
        id: `ship-${i}`,
        type: "ship",
        color: i % 2 === 0 ? "red" : "blue",
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * 10,
      });
    }

    setElements(arr);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {elements.map((el) => {
        if (el.type === "star") {
          return (
            <motion.div
              key={el.id}
              className={`absolute rounded-full ${
                isDarkMode ? "bg-white/30" : "bg-black/10"
              }`}
              style={{
                width: el.size,
                height: el.size,
                left: `${el.x}%`,
                top: `${el.y}%`,
              }}
              animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                delay: el.delay,
                ease: "linear",
              }}
            />
          );
        }

        return (
          <motion.div
            key={el.id}
            className={`absolute h-0 w-0 border-b-[10px] border-l-[5px] border-r-[5px] border-l-transparent border-r-transparent ${
              el.color === "red"
                ? isDarkMode
                  ? "border-b-red-500/50"
                  : "border-b-red-500/80"
                : isDarkMode
                  ? "border-b-blue-500/50"
                  : "border-b-blue-500/80"
            }`}
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, el.x % 2 === 0 ? 800 : -800],
              y: [0, -800],
              rotate: "+=180",
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

const CyberBackground = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="cyber-bg-grid" />
      <div className="cyber-bg-scanline" />
      <div className="cyber-bg-orb cyber-bg-orb-one" />
      <div className="cyber-bg-orb cyber-bg-orb-two" />
      <div className="cyber-bg-orb cyber-bg-orb-three" />

      <motion.div
        className={`absolute left-[-10%] top-[20%] h-[1px] w-[120%] ${
          isDarkMode ? "bg-cyan-400/20" : "bg-cyan-600/20"
        }`}
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.1, 0.45, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute left-[-10%] top-[72%] h-[1px] w-[120%] ${
          isDarkMode ? "bg-violet-400/20" : "bg-violet-600/20"
        }`}
        animate={{ x: ["20%", "-20%", "20%"], opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const email = "kiarash.delavar@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUpSpring: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const floatAnim: any = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatAnimReverse: any = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const theme = {
   bg: isDarkMode ? "bg-[#02040a] text-slate-200" : "bg-[#f7fbff] text-slate-800",
heading: isDarkMode ? "text-white" : "text-slate-950",
muted: isDarkMode ? "text-slate-400" : "text-slate-600",
card: isDarkMode
  ? "bg-white/[0.02] border-white/10"
  : "bg-white/75 border-slate-200/80 shadow-[0_20px_70px_rgba(15,23,42,0.08)]",
cardHover: isDarkMode ? "hover:bg-white/[0.04]" : "hover:bg-white hover:shadow-[0_24px_90px_rgba(15,23,42,0.12)]",
badge: isDarkMode
  ? "bg-white/5 border-white/10"
  : "bg-white/80 border-slate-200 text-slate-900 shadow-sm",
input: isDarkMode
  ? "bg-[#0a0f1c] border-white/10 text-white placeholder:text-slate-600"
  : "bg-white/90 border-slate-300 text-slate-950 placeholder:text-slate-400",
nav: isDarkMode
  ? "bg-white/5 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] text-white"
  : "bg-white/90 border-slate-300 shadow-[0_18px_60px_rgba(15,23,42,0.12)] text-slate-950",
    glow: isDarkMode ? "mix-blend-screen" : "mix-blend-multiply opacity-30",
    radarRing: isDarkMode ? "border-[#02040a]" : "border-slate-50",
    footer: isDarkMode ? "border-white/5 bg-[#02040a]" : "border-black/5 bg-slate-50",
  };

  const commandLines = [
    "booting portfolio_os...",
    "loading robotics_module",
    "connecting ai_pipeline",
    "checking backend_services",
    "deploying clean_code",
    "status: ready_to_build",
  ];

  const projects = [
    {
      title: "Abbas Agha - AI Financial Copilot",
      label: "AI FINTECH / HACKATHON",
      period: "05/2026 - Present",
      location: "bunq Hackathon 7.0",
      description:
        "An AI-powered financial copilot built on top of the bunq banking API. It combines chat, financial insights, receipt analysis, proactive warnings, and future voice assistant features.",
      impact: [
        "AI financial copilot interface",
        "Chat-based assistant UI",
        "bunq sandbox API integration foundation",
        "Receipt analysis and proactive spending warnings roadmap",
      ],
      tech: ["Python", "TypeScript", "bunq API", "AI Assistant", "REST API", "FinTech"],
      source: "https://github.com/kiarashdelavar/abbasagha",
      accent: "cyan",
      icon: WalletCards,
      codeName: "ABBAS_AGHA",
    },
    {
      title: "Cycling Start Analysis",
      label: "COMPUTER VISION",
      period: "03/2026 - Present",
      location: "Deventer, NL",
      description:
        "Developed an MVP for human pose estimation to analyze joint angles and movement timing of track sprint cyclists in collaboration with NOC*NSF.",
      impact: [
        "Pose estimation from video",
        "Joint angle and timing analysis",
        "Start signal based movement evaluation",
      ],
      tech: ["Python", "OpenCV", "MediaPipe", "Pose Estimation", "NumPy"],
      source: "https://github.com/kiarashdelavar/cyclist-pose-estimation",
      accent: "emerald",
      icon: Eye,
      codeName: "CYCLES",
    },
    {
      title: "IoT Telemetry Platform",
      label: "FULL-STACK IOT",
      period: "02/2026 - Present",
      location: "Deventer, NL",
      description:
        "A full-stack IoT telemetry monitoring dashboard built with FastAPI, Next.js, React Three Fiber, PostgreSQL, and Docker.",
      impact: [
        "Live telemetry dashboard",
        "Backend API with FastAPI",
        "3D data visualization concept",
      ],
      tech: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Three.js"],
      source: "https://github.com/kiarashdelavar/iot-telemetry-platform",
      accent: "cyan",
      icon: Activity,
      codeName: "TELEMETRY",
    },
    {
      title: "Novara AI SaaS",
      label: "STARTUP / SAAS",
      period: "09/2025 - Present",
      location: "Deventer, NL",
      description:
        "Architected a full-stack AI platform for freelancers and small businesses to optimize operational workflows.",
      impact: [
        "AI SaaS product concept",
        "Full-stack architecture",
        "Business workflow automation",
      ],
      tech: ["Next.js", "Supabase", "Spring Boot", "AI", "Tailwind"],
      source: "https://github.com/kiarashdelavar/novara-saas",
      accent: "violet",
      icon: Sparkles,
      codeName: "NOVARA",
    },
    {
      title: "Project Acquisition Tool",
      label: "SAXION PLATFORM",
      period: "11/2025 - 01/2026",
      location: "Deventer, NL",
      description:
        "Developed a full-stack portal for Saxion University allowing client submissions, student exploration, and a teacher dashboard.",
      impact: [
        "Teacher dashboard",
        "Client project submissions",
        "Student project discovery",
      ],
      tech: ["Svelte", "Node.js", "Express", "Sequelize", "Tailwind"],
      source:
        "https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12",
      accent: "orange",
      icon: LayoutTemplate,
      codeName: "SAXION",
    },
    {
      title: "Railway Track Algorithm",
      label: "GRAPH ALGORITHMS",
      period: "09/2025 - 10/2025",
      location: "Deventer, NL",
      description:
        "Java application loading Dutch railway data to provide shortest routes and MCST generation using Dijkstra and Prim algorithms.",
      impact: [
        "Custom graph data structures",
        "Shortest route calculation",
        "Minimum cost spanning tree generation",
      ],
      tech: ["Java", "Algorithms", "Dijkstra", "Prim", "Graphs"],
      source: "https://github.com/kiarashdelavar/Railway-track-manager",
      accent: "violet",
      icon: Database,
      codeName: "RAILWAY",
    },
    {
      title: "Frog Autonomous Navigation",
      label: "AUTONOMOUS SYSTEMS",
      period: "04/2025 - 06/2025",
      location: "Deventer, NL",
      description:
        "Navigation system in Java using radar-based obstacle detection, real-time communication, a JavaFX mission GUI, and SQLite.",
      impact: [
        "Autonomous movement logic",
        "Obstacle detection",
        "Mission GUI and local data storage",
      ],
      tech: ["Java", "JavaFX", "SQLite", "Radar Systems"],
      source: "https://github.com/kiarashdelavar/Frog-Autonomous-Navigation-System",
      accent: "blue",
      icon: Bot,
      codeName: "FROG",
    },
  ];

  return (
    <div
  className={`relative min-h-screen overflow-hidden pb-24 font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-700 ${
    isDarkMode ? "dark-portfolio" : "light-portfolio"
  } ${theme.bg}`}
>
      <SpaceDust isDarkMode={isDarkMode} />
      <CyberBackground isDarkMode={isDarkMode} />

      <div className="portfolio-gif-bg pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <img
    src="/cyber-warrior.gif"
    alt=""
    aria-hidden="true"
    className="portfolio-gif-bg-image"
  />
  <div className="portfolio-gif-readable-layer" />
</div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div
        className={`pointer-events-none absolute left-[-10%] top-[-20%] h-[50vw] w-[50vw] rounded-full bg-cyan-600/10 blur-[150px] transition-all duration-700 ${theme.glow}`}
      />
      <div
        className={`pointer-events-none absolute bottom-[10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-violet-600/10 blur-[150px] transition-all duration-700 ${theme.glow}`}
      />

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed right-6 top-6 z-50 rounded-full border p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 md:right-8 md:top-8 ${
          isDarkMode
            ? "border-white/20 bg-white/10 text-yellow-400"
            : "border-slate-200 bg-white/80 text-slate-800"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <nav
        className={`fixed left-1/2 top-6 z-50 flex -translate-x-1/2 gap-6 whitespace-nowrap rounded-full border px-8 py-4 text-xs font-bold backdrop-blur-2xl transition-all md:gap-10 md:text-sm ${theme.nav}`}
      >
        <a href="#about" className="transition-colors hover:text-cyan-400">
          Story
        </a>
        <a href="#experience" className="transition-colors hover:text-cyan-400">
          Experience
        </a>
        <a href="#projects" className="transition-colors hover:text-cyan-400">
          Work
        </a>
        <a href="#contact" className="transition-colors hover:text-cyan-400">
          Contact
        </a>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl space-y-40 px-6 pt-32">
        <section className="relative flex min-h-[85vh] flex-col items-center justify-between gap-16 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         className="hero-readable-panel relative z-20 flex-1 space-y-8"
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs text-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)] ${
                isDarkMode
                  ? "border border-cyan-500/30 bg-cyan-500/10"
                  : "border border-cyan-200 bg-cyan-50"
              }`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              Available for Internships & Part-Time
            </div>

            <h1
              className={`text-6xl font-black leading-[1.1] tracking-tighter transition-colors duration-700 md:text-8xl ${theme.heading}`}
            >
              I build <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
                smart systems
              </span>{" "}
              <br />
              that work.
            </h1>

            <p
              className={`max-w-xl text-lg font-light leading-relaxed transition-colors duration-700 md:text-xl ${theme.muted}`}
            >
              Hi, I am <strong className={theme.heading}>Kiarash Delavar</strong>. I
              build software that connects AI, robotics, data, and real-world systems.
              From robot motion safety to AI financial copilots, I turn complex ideas
              into clean, useful, and working products.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-1 hover:bg-cyan-400"
              >
                <Rocket size={18} /> Explore Projects
              </a>

              <a
                href="https://github.com/kiarashdelavar"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-2xl border px-6 py-4 font-bold shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:opacity-80 ${theme.badge} ${theme.heading}`}
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://gitlab.com/kiarash.delavar"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-2xl border px-6 py-4 font-bold text-[#FC6D26] shadow-[0_0_20px_rgba(252,109,38,0.1)] backdrop-blur-md transition-all hover:-translate-y-1 ${
                  isDarkMode
                    ? "border-[#FC6D26]/20 bg-[#FC6D26]/10"
                    : "border-[#FC6D26]/20 bg-[#FC6D26]/5"
                }`}
              >
                <Gitlab size={20} />
                <span className="hidden sm:inline">GitLab</span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className={`terminal-scanline mt-8 max-w-xl overflow-hidden rounded-2xl border shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl ${
                isDarkMode
                  ? "border-cyan-500/20 bg-black/40"
                  : "border-cyan-300 bg-white/70"
              }`}
            >
              <div
                className={`flex items-center justify-between border-b px-4 py-3 ${
                  isDarkMode
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/10 bg-black/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>

                <div className={`flex items-center gap-2 font-mono text-xs ${theme.muted}`}>
                  <Terminal size={14} />
                  kiarash@portfolio:~/systems
                </div>
              </div>

              <div className="space-y-2 p-5 font-mono text-sm">
                {commandLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.12 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-cyan-400">$</span>
                    <span
                      className={
                        index === commandLines.length - 1
                          ? "text-emerald-400"
                          : theme.muted
                      }
                    >
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative flex h-[400px] w-full flex-1 items-center justify-center md:h-[500px]"
          >
            <motion.div
              variants={floatAnim}
              animate="animate"
              className={`absolute left-10 top-10 z-30 rounded-2xl border p-3 text-cyan-500 shadow-xl backdrop-blur-md ${theme.badge}`}
            >
              <Bot size={24} />
            </motion.div>

            <motion.div
              variants={floatAnimReverse}
              animate="animate"
              className={`absolute bottom-10 right-10 z-30 rounded-2xl border p-3 text-violet-500 shadow-xl backdrop-blur-md ${theme.badge}`}
            >
              <Code2 size={24} />
            </motion.div>

            <div className="absolute aspect-square w-[90%] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-cyan-500/20 md:w-[110%]" />

            <div className="radar-container h-72 w-72 md:h-[450px] md:w-[450px]">
              <div className="radar-sweep" />
              <div className="radar-target" style={{ top: "25%", left: "65%", animationDelay: "0s" }} />
              <div className="radar-target" style={{ top: "75%", left: "35%", animationDelay: "1.2s" }} />
              <div className="radar-target" style={{ top: "45%", left: "85%", animationDelay: "2.5s" }} />

              <div
                className={`absolute left-1/2 top-1/2 z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 ring-2 ring-cyan-400/50 shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-colors duration-700 md:h-48 md:w-48 ${theme.radarRing}`}
              >
                <Image
                  src="/kiaphoto.jpg"
                  alt="Kiarash"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <motion.div
            variants={fadeUpSpring}
            className={`group relative overflow-hidden rounded-[2rem] rounded-br-[4rem] rounded-tl-[4rem] border p-8 backdrop-blur-2xl transition-all md:col-span-8 md:p-14 ${theme.card}`}
          >
            <div className="absolute right-0 top-0 h-64 w-64 bg-cyan-500/10 blur-[80px] transition-all duration-700 group-hover:bg-cyan-500/20" />
            <h3
              className={`mb-8 flex items-center gap-3 text-3xl font-black transition-colors duration-700 ${theme.heading}`}
            >
              <Cpu className="text-cyan-500" size={32} /> About Me
            </h3>

            <div
              className={`relative z-10 space-y-6 text-lg font-light leading-relaxed transition-colors duration-700 ${theme.muted}`}
            >
              <p>
                Hi! I’m a Software Engineering student living in the Netherlands. I’m
                really interested in robotics, AI, and building smart systems. For me,
                coding is not just about making things look nice, it’s about building
                systems that work well in real life.
              </p>
              <p>
                I enjoy working across the whole stack. I like building the front-end
                of websites, but I also love working with back-end logic and databases.
                Recently, I have become very interested in Data Science.
              </p>
              <p>
                Whether I’m writing C++ for a robotic arm, analyzing data in Python, or
                building a web app with Next.js, I focus on writing simple, clean, and
                reliable code.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpSpring}
            className={`flex flex-col justify-between rounded-[2rem] rounded-bl-[4rem] rounded-tr-[4rem] border bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 backdrop-blur-2xl transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] md:col-span-4 md:p-12 ${
              isDarkMode ? "border-white/10" : "border-slate-300"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h4
                  className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${theme.muted}`}
                >
                  <MapPin size={16} /> Base
                </h4>
                <p className="font-mono text-lg font-bold text-cyan-500">
                  Deventer, The Netherlands
                </p>
              </div>

              <div>
                <h4
                  className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${theme.muted}`}
                >
                  <Globe size={16} /> Languages
                </h4>
                <div className={`flex flex-col gap-2 font-mono text-sm font-medium ${theme.heading}`}>
                  <span>
                    Persian <span className="text-violet-500">(Native)</span>
                  </span>
                  <span>
                    English <span className="text-violet-500">(C1)</span>
                  </span>
                  <span>
                    Dutch <span className="text-violet-500">(B1 - Actively Learning)</span>
                  </span>
                </div>
              </div>
            </div>

            <a
              href="/kiarash_resume.pdf"
              download
              className={`mt-10 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold shadow-lg transition-all hover:scale-105 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-cyan-400"
                  : "bg-slate-900 text-white hover:bg-cyan-500"
              }`}
            >
              <FileText size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpSpring}
            className={`rounded-[2rem] rounded-bl-[4rem] border p-8 backdrop-blur-2xl transition-all md:col-span-12 md:p-12 ${theme.card}`}
          >
            <h3
              className={`mb-10 flex items-center gap-3 text-2xl font-black transition-colors duration-700 ${theme.heading}`}
            >
              <Layers className="text-violet-500" /> Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Web & Frontend",
                  icon: LayoutTemplate,
                  color: "cyan",
                  skills: [
                    "Next.js",
                    "React",
                    "Angular",
                    "Vue.js",
                    "PHP",
                    "Laravel",
                    "Svelte",
                    "Tailwind",
                    "TypeScript",
                  ],
                },
                {
                  title: "Backend & Core",
                  icon: Database,
                  color: "violet",
                  skills: ["Go", "Node.js", "Express", "Java", "Spring", "Python", "C++", "C#", "ASP.NET"],
                },
                {
                  title: "AI & Data",
                  icon: Brain,
                  color: "emerald",
                  skills: ["MMPose", "MediaPipe", "OpenCV", "PyTorch", "Pose Estimation", "Biometrics", "NumPy"],
                },
                {
                  title: "Robotics & Ops",
                  icon: Target,
                  color: "blue",
                  skills: ["ROS2", "MoveIt2", "Docker", "CI/CD", "Azure", "AWS", "GitHub Actions"],
                },
              ].map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title} className="space-y-4">
                    <h4
                      className={`mb-6 flex items-center gap-2 border-b pb-3 text-sm font-bold uppercase tracking-wider transition-colors duration-700 ${theme.heading} ${
                        isDarkMode ? "border-white/10" : "border-black/10"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          group.color === "cyan"
                            ? "text-cyan-500"
                            : group.color === "violet"
                              ? "text-violet-500"
                              : group.color === "emerald"
                                ? "text-emerald-500"
                                : "text-blue-500"
                        }
                      />
                      {group.title}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`cursor-default rounded-xl border px-4 py-2 font-mono text-xs transition-all hover:scale-105 ${
                            isDarkMode
                              ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                              : "border-black/10 bg-black/5 text-slate-700 hover:bg-black/10"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>

        <section className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-12 flex items-center gap-4">
              <Briefcase className="text-cyan-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight ${theme.heading}`}>
                Experience
              </h3>
            </div>

            <div
              className={`relative ml-4 space-y-12 border-l-2 pl-10 ${
                isDarkMode ? "border-white/10" : "border-black/10"
              }`}
            >
              {[
                {
                  title: "MLOps & Machine Learning Engineer",
                  company: "Saxion Ambient Intelligence",
                  date: "March 2026 - Present",
                  text: "Developing a real-time audio analysis project focusing on multi-stream sentiment analysis, Dockerized testing environments, and ML model evaluation.",
                  color: "emerald",
                  icon: Brain,
                },
                {
                  title: "Computer Vision & Pose Estimation",
                  company: "Collaboration with NOC*NSF",
                  date: "March 2026 - Present",
                  text: "Analyzing track sprint cyclists via video using pose estimation methods to measure joint angles and movement timing relative to signals.",
                  color: "emerald",
                  icon: Eye,
                },
                {
                  title: "Robotics Intern",
                  company: "SMART Research Group",
                  date: "Nov 2025 - Present",
                  text: "Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies and validating safe robot behavior.",
                  color: "cyan",
                  icon: Bot,
                },
                {
                  title: "Co-Founder & CEO",
                  company: "Novara",
                  date: "Oct 2025 - Present",
                  text: "Leading the development of an AI-powered SaaS platform helping SMEs work smarter. Architected with Next.js, Supabase, and Spring Boot.",
                  color: "violet",
                  icon: Sparkles,
                },
              ].map((item) => {
                const Icon = item.icon;
                const color =
                  item.color === "emerald"
                    ? "text-emerald-500 bg-emerald-500 shadow-[0_0_15px_#34d399]"
                    : item.color === "cyan"
                      ? "text-cyan-500 bg-cyan-500 shadow-[0_0_15px_#22d3ee]"
                      : "text-violet-500 bg-violet-500 shadow-[0_0_15px_#a855f7]";

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUpSpring}
                    className="group relative transition-transform hover:translate-x-2"
                  >
                    <span
                      className={`absolute -left-[49px] top-1.5 h-4 w-4 rounded-full transition-transform duration-500 group-hover:scale-150 ${color}`}
                    />

                    <h4 className={`flex items-center gap-2 text-xl font-bold ${theme.heading}`}>
                      {item.title}
                      <Icon size={18} />
                    </h4>

                    <p className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs font-bold text-cyan-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {item.company}
                      </span>
                      <span className={`flex items-center gap-1 ${theme.muted}`}>
                        <MapPin size={12} /> Deventer, NL
                      </span>
                      <span className={`flex items-center gap-1 ${theme.muted}`}>
                        <Calendar size={12} /> {item.date}
                      </span>
                    </p>

                    <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-12 flex items-center gap-4">
              <GraduationCap className="text-violet-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight ${theme.heading}`}>
                Education
              </h3>
            </div>

            <div
              className={`relative ml-4 space-y-12 border-l-2 pl-10 ${
                isDarkMode ? "border-white/10" : "border-black/10"
              }`}
            >
              <motion.div variants={fadeUpSpring} className="group relative transition-transform hover:translate-x-2">
                <span className="absolute -left-[49px] top-1.5 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_15px_#a855f7] transition-transform duration-500 group-hover:scale-150" />
                <h4 className={`text-xl font-bold ${theme.heading}`}>
                  BASc, Software Engineering
                </h4>
                <p className="mt-2 mb-3 flex flex-wrap items-center gap-4 font-mono text-xs font-bold text-violet-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={12} /> Saxion University
                  </span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}>
                    <MapPin size={12} /> Deventer, NL
                  </span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}>
                    <Calendar size={12} /> Sept 2024 - Present
                  </span>
                </p>

                <ul className={`space-y-2 text-sm leading-relaxed ${theme.muted}`}>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 flex-shrink-0 text-cyan-500" />
                    Novel-T Entrepreneurial Summer School
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 flex-shrink-0 text-cyan-500" />
                    Member of Honours Community
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 flex-shrink-0 text-cyan-500" />
                    E³UDRES² Design Thinking & Prototyping
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="group relative transition-transform hover:translate-x-2">
                <span
                  className={`absolute -left-[49px] top-1.5 h-4 w-4 rounded-full transition-colors duration-500 group-hover:bg-cyan-500 ${
                    isDarkMode ? "bg-white/20" : "bg-black/20"
                  }`}
                />
                <h4 className={`text-xl font-bold ${theme.heading}`}>
                  High School Diploma, Math & Physics
                </h4>
                <p className="mt-2 mb-3 flex flex-wrap items-center gap-4 font-mono text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={12} /> Energy High School
                  </span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}>
                    <MapPin size={12} /> Mashhad, Iran
                  </span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}>
                    <Calendar size={12} /> 2020 - 2023
                  </span>
                </p>
                <p className={`text-sm leading-relaxed ${theme.muted}`}>
                  Focus on advanced mathematics and complex problem-solving skills.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

       {/* PROJECTS SECTION */}
<motion.section
  id="projects"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
  className="scroll-mt-32 space-y-14"
>
  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
    <div>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.18)]">
        <ScanLine size={15} />
        project_vault.exe
      </div>

      <h3 className={`text-5xl md:text-7xl font-black tracking-tighter ${theme.heading}`}>
        Selected{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Builds
        </span>
      </h3>

      <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${theme.muted}`}>
        A collection of AI, robotics, fintech, full-stack, and algorithmic systems built with real engineering focus.
      </p>
    </div>

    <div
      className={`terminal-scanline rounded-2xl border p-5 font-mono text-xs shadow-[0_0_35px_rgba(34,211,238,0.08)] ${
        isDarkMode
          ? "border-cyan-400/20 bg-black/40"
          : "border-cyan-300 bg-white/70"
      }`}
    >
      <div className="flex items-center gap-2 text-emerald-400">
        <ShieldCheck size={14} />
        build_status: online
      </div>
      <div className={theme.muted}>projects_loaded: {projects.length}</div>
      <div className={theme.muted}>security_layer: enabled</div>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
    {projects.map((project, index) => {
      const Icon = project.icon;

      const cyberAccent: Record<string, string> = {
        cyan: "project-cyan",
        emerald: "project-emerald",
        violet: "project-violet",
        orange: "project-orange",
        blue: "project-blue",
      };

      const cardAccent = cyberAccent[project.accent] || cyberAccent.cyan;

      return (
        <motion.article
          key={project.title}
          variants={fadeUpSpring}
         className={`cyber-project-card ${cardAccent} group relative min-h-[560px] overflow-hidden rounded-[2rem] border p-[1px] transition-all duration-500 hover:-translate-y-3`}
        >
         <div className="cyber-card-inner relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] p-8">
            {/* Background FX */}
            <div className="cyber-card-grid absolute inset-0 opacity-30" />
            <div className="cyber-card-noise absolute inset-0 opacity-[0.07]" />
            <div className="cyber-card-glow absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px]" />
            <div className="cyber-card-bottom-glow absolute -bottom-24 -left-24 h-56 w-56 rounded-full blur-[90px]" />

            {/* Top command bar */}
            <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 backdrop-blur-xl">
                node_{String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10 mb-7 flex items-start justify-between gap-5">
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="cyber-chip rounded-full border px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.22em]">
                    {project.label}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] text-slate-400">
                    {project.period}
                  </span>
                </div>

                <h4 className="max-w-[90%] text-3xl font-black leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-white md:text-4xl">
                  {project.title}
                </h4>
              </div>

              <div className="cyber-icon-box relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={30} />
              </div>
            </div>

            {/* Location */}
            <div className="relative z-10 mb-7 flex items-center gap-2 font-mono text-xs text-slate-400">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>

            {/* Description */}
            <p className="relative z-10 mb-7 text-[15px] leading-7 text-slate-300">
              {project.description}
            </p>

            {/* Impact list */}
            <div className="relative z-10 mb-8 grid gap-3">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 text-sm text-slate-300 backdrop-blur-xl transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/[0.045]"
                >
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="relative z-10 mb-9 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] font-bold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom */}
            <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
                  system_id
                </div>
                <div className="cyber-code-name mt-1 font-mono text-xs font-black uppercase tracking-[0.25em]">
                  {project.codeName}
                </div>
              </div>

              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-source-button group/link inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:scale-105"
              >
                View Source
                <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>

            {/* Corner lines */}
            <span className="cyber-corner cyber-corner-tl" />
            <span className="cyber-corner cyber-corner-tr" />
            <span className="cyber-corner cyber-corner-bl" />
            <span className="cyber-corner cyber-corner-br" />
          </div>
        </motion.article>
      );
    })}
  </div>
</motion.section>
       {/* CONTACT SECTION */}
{/* CONTACT SECTION */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
  className="contact-cyber-zone relative overflow-hidden rounded-[3rem] border px-6 py-10 md:px-10 md:py-14"
>
  <div className="contact-grid-bg" />
  <div className="contact-glow contact-glow-one" />
  <div className="contact-glow contact-glow-two" />

  <motion.div
    className="contact-line contact-line-one"
    animate={{ x: ["-20%", "25%", "-20%"], opacity: [0.1, 0.45, 0.1] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="contact-line contact-line-two"
    animate={{ x: ["20%", "-25%", "20%"], opacity: [0.1, 0.35, 0.1] }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
    {/* Left GIF visual */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-5"
    >
      <div className="contact-gif-shell group relative h-[420px] overflow-hidden rounded-[2.2rem] border md:h-[560px]">
        <img
          src="/Kidmograph-ViusalAtelier8-Art-Cyber-1.gif"
          alt="Cyber visual animation"
          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 contact-gif-scan" />

        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          signal_online
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
            visual system
          </p>
          <h4 className="mt-2 text-3xl font-black text-white md:text-4xl">
            AI Interface Mode
          </h4>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Building systems with software, AI, robotics, and real-world engineering.
          </p>
        </div>

        <span className="cyber-corner cyber-corner-tl" />
        <span className="cyber-corner cyber-corner-tr" />
        <span className="cyber-corner cyber-corner-bl" />
        <span className="cyber-corner cyber-corner-br" />
      </div>
    </motion.div>

    {/* Right contact content */}
    <div className="space-y-7 lg:col-span-7">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="contact-info-panel rounded-[2.2rem] border p-7 md:p-9"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 font-mono text-xs text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500" />
          Open to Opportunities
        </div>

        <h3 className={`text-5xl font-black tracking-tighter md:text-6xl ${theme.heading}`}>
          Let&apos;s talk.
        </h3>

        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${theme.muted}`}>
          If you have a project idea, an internship opportunity, or just want to
          connect, feel free to message me. I’m always open to new ideas and
          collaborations.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            onClick={handleCopyEmail}
            className="contact-card group md:col-span-2"
          >
            <div className="contact-icon-box bg-cyan-500/10 text-cyan-400">
              {copied ? <Check size={20} /> : <Mail size={20} />}
            </div>

            <div className="min-w-0">
              <p className="contact-label">Email</p>
              <p className="contact-value break-all">
                {copied ? "Copied to clipboard!" : email}
              </p>
            </div>
          </button>

          <a href="tel:+31617174048" className="contact-card group">
            <div className="contact-icon-box bg-violet-500/10 text-violet-400">
              <Phone size={20} />
            </div>

            <div>
              <p className="contact-label">Phone</p>
              <p className="contact-value">+31 617174048</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group"
          >
            <div className="contact-icon-box bg-blue-500/10 text-blue-400">
              <Linkedin size={20} />
            </div>

            <div>
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">Kiarash</p>
            </div>
          </a>

          <a
            href="https://github.com/kiarashdelavar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group md:col-span-2"
          >
            <div className="contact-icon-box bg-slate-500/10 text-slate-200">
              <Github size={20} />
            </div>

            <div>
              <p className="contact-label">GitHub</p>
              <p className="contact-value">@kiarashdelavar</p>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="contact-form-shell relative overflow-hidden rounded-[2.2rem] border p-7 shadow-2xl backdrop-blur-2xl md:p-9"
      >
        <div className="contact-form-scan" />

        <h4 className="relative z-10 mb-7 flex items-center gap-3 text-2xl font-black text-white">
          <Send className="text-cyan-400" />
          Send a Message
        </h4>

        <form
          action="https://formspree.io/f/xbdapkgq"
          method="POST"
          className="relative z-10 space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="contact-input w-full rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="contact-input w-full rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="contact-input w-full resize-none rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none"
              placeholder="Tell me about your project, team, or opportunity..."
            />
          </div>

          <button
            type="submit"
           className="contact-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-black text-white transition-all hover:-translate-y-1 hover:scale-[1.01]"
          >
            Send Message
            <Rocket size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</motion.section>
      </main>

      <footer
        className={`relative z-10 mt-32 flex flex-col items-center gap-6 border-t py-12 text-sm transition-colors duration-700 ${theme.footer} ${theme.muted}`}
      >
        <div className="flex gap-8">
          <a
            href="https://github.com/kiarashdelavar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 hover:text-cyan-500"
          >
            <Github size={20} />
          </a>
          <a
            href="https://gitlab.com/kiarash.delavar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 hover:text-[#FC6D26]"
          >
            <Gitlab size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 hover:text-cyan-500"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <p className="font-mono font-medium">
          © {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.
        </p>
      </footer>
    </div>
  );
}