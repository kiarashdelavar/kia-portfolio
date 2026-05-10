"use client";

import {
  type LucideIcon,
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
  Radio,
  CircuitBoard,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type SpaceElement = {
  id: string;
  type: "star" | "ship";
  x: number;
  y: number;
  size?: number;
  duration: number;
  delay: number;
  color?: "red" | "blue";
  direction?: number;
  rotation?: number;
};

type Project = {
  title: string;
  label: string;
  period: string;
  location: string;
  description: string;
  impact: string[];
  tech: string[];
  source: string;
  website?: string;
  accent: "cyan" | "emerald" | "violet" | "orange" | "blue";
  icon: LucideIcon;
  codeName: string;
  featured?: boolean;
};

type FocusItem = {
  title: string;
  text: string;
  icon: LucideIcon;
  accent: string;
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  color: "cyan" | "violet" | "emerald" | "blue";
  skills: string[];
};

type TimelineItem = {
  title: string;
  company: string;
  date: string;
  location: string;
  text: string;
  color: "cyan" | "violet" | "emerald" | "blue";
  icon: LucideIcon;
};

const SpaceDust = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [elements, setElements] = useState<SpaceElement[]>([]);

  useEffect(() => {
    const generatedElements: SpaceElement[] = [];

    for (let i = 0; i < 38; i++) {
      generatedElements.push({
        id: `star-${i}`,
        type: "star",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 16 + 12,
        delay: Math.random() * 5,
      });
    }

    for (let i = 0; i < 6; i++) {
      generatedElements.push({
        id: `ship-${i}`,
        type: "ship",
        color: i % 2 === 0 ? "red" : "blue",
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 40 + 24,
        delay: Math.random() * 10,
        direction: i % 2 === 0 ? 800 : -800,
        rotation: Math.random() * 360,
      });
    }

    setElements(generatedElements);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {elements.map((element) => {
        if (element.type === "star") {
          return (
            <motion.div
              key={element.id}
              className={`absolute rounded-full ${
                isDarkMode ? "bg-white/30" : "bg-slate-900/10"
              }`}
              style={{
                width: element.size,
                height: element.size,
                left: `${element.x}%`,
                top: `${element.y}%`,
              }}
              animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "linear",
              }}
            />
          );
        }

        return (
          <motion.div
            key={element.id}
            className={`absolute h-0 w-0 border-b-[10px] border-l-[5px] border-r-[5px] border-l-transparent border-r-transparent ${
              element.color === "red"
                ? isDarkMode
                  ? "border-b-red-500/50"
                  : "border-b-red-500/60"
                : isDarkMode
                  ? "border-b-blue-500/50"
                  : "border-b-blue-500/60"
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation ?? 0}deg)`,
            }}
            animate={{
              x: [0, element.direction ?? 800],
              y: [0, -800],
              rotate: "+=180",
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
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
          isDarkMode ? "bg-cyan-400/20" : "bg-cyan-600/14"
        }`}
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.1, 0.45, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute left-[-10%] top-[72%] h-[1px] w-[120%] ${
          isDarkMode ? "bg-violet-400/20" : "bg-violet-600/14"
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

  const handleCopyEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUpSpring = {
    hidden: { opacity: 0, y: 42 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 82, damping: 19 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const floatAnim = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatAnimReverse = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const theme = {
    bg: isDarkMode
      ? "bg-[#02040a] text-slate-200"
      : "bg-[#eef4fb] text-slate-800",
    heading: isDarkMode ? "text-white" : "text-[#0f172a]",
    muted: isDarkMode ? "text-slate-400" : "text-slate-600",
    softText: isDarkMode ? "text-slate-300" : "text-slate-700",
    card: isDarkMode
      ? "border-white/10 bg-white/[0.04] shadow-[0_22px_90px_rgba(0,0,0,0.34)]"
      : "border-white/70 bg-white/82 shadow-[0_22px_90px_rgba(15,23,42,0.11)]",
    strongCard: isDarkMode
      ? "border-white/10 bg-[#08101f]/82 shadow-[0_26px_110px_rgba(0,0,0,0.48)]"
      : "border-white/80 bg-white/90 shadow-[0_26px_110px_rgba(15,23,42,0.14)]",
    badge: isDarkMode
      ? "border-white/10 bg-white/6 text-white"
      : "border-slate-200 bg-white/90 text-slate-900 shadow-sm",
    nav: isDarkMode
      ? "border-white/10 bg-white/8 text-white shadow-[0_0_45px_rgba(0,0,0,0.8)]"
      : "border-white/80 bg-white/90 text-slate-950 shadow-[0_18px_70px_rgba(15,23,42,0.15)]",
    terminal: isDarkMode
      ? "border-cyan-400/20 bg-black/42"
      : "border-cyan-200 bg-white/82 shadow-[0_18px_60px_rgba(15,23,42,0.10)]",
    panel: isDarkMode
      ? "border-white/10 bg-[#08101f]/74 shadow-[0_30px_120px_rgba(0,0,0,0.48)]"
      : "border-white/75 bg-white/76 shadow-[0_30px_120px_rgba(15,23,42,0.16)]",
    input: isDarkMode
      ? "border-white/10 bg-[#0a0f1c] text-white placeholder:text-slate-500"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400",
    glow: isDarkMode ? "mix-blend-screen" : "mix-blend-multiply opacity-22",
    radarRing: isDarkMode ? "border-[#02040a]" : "border-white",
    footer: isDarkMode
      ? "border-white/5 bg-[#02040a]"
      : "border-slate-200 bg-[#eef4fb]",
  };

  const commandLines = [
    "booting portfolio_os...",
    "loading robotics_module",
    "connecting ai_pipeline",
    "checking backend_services",
    "deploying clean_code",
    "status: ready_to_build",
  ];

  const heroTags = ["AI Systems", "Robotics", "Full-Stack", "MLOps", "Computer Vision"];

  const focusItems: FocusItem[] = [
    {
      title: "AI product builder",
      text: "Turning early ideas into real SaaS-style products with clean architecture and useful workflows.",
      icon: Sparkles,
      accent: "cyan",
    },
    {
      title: "Robotics safety research",
      text: "Working with ROS2, MoveIt2, and ABB GoFa behavior to understand safer robot motion.",
      icon: Bot,
      accent: "violet",
    },
    {
      title: "Vision and data systems",
      text: "Building pose-estimation and analysis pipelines for movement timing, reaction, and performance insights.",
      icon: Eye,
      accent: "emerald",
    },
  ];

  const skillGroups: SkillGroup[] = [
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
  ];

  const experiences: TimelineItem[] = [
    {
      title: "MLOps & Machine Learning Engineer",
      company: "Saxion Ambient Intelligence",
      date: "March 2026 - Present",
      location: "Deventer, NL",
      text: "Developing a real-time audio analysis project with multi-stream sentiment analysis, Dockerized testing environments, and ML model evaluation.",
      color: "emerald",
      icon: Brain,
    },
    {
      title: "Computer Vision & Pose Estimation",
      company: "Collaboration with NOC*NSF",
      date: "March 2026 - Present",
      location: "Deventer, NL",
      text: "Analyzing track sprint cyclists using pose-estimation methods to measure joint angles and movement timing relative to start signals.",
      color: "emerald",
      icon: Eye,
    },
    {
      title: "Robotics Intern",
      company: "SMART Research Group",
      date: "Nov 2025 - Present",
      location: "Deventer, NL",
      text: "Improving ABB GoFa robot safety using ROS2, MoveIt2, and C++. Investigating motion anomalies and validating safer robot behavior.",
      color: "cyan",
      icon: Bot,
    },
    {
      title: "Co-Founder & CEO",
      company: "Novara",
      date: "Oct 2025 - Present",
      location: "Deventer, NL",
      text: "Leading the development of an AI-powered SaaS concept for SMEs, focused on smarter workflows and practical business automation.",
      color: "violet",
      icon: Sparkles,
    },
  ];

  const projects: Project[] = [
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
      featured: true,
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
      featured: true,
    },
    {
      title: "IoT Telemetry Platform",
      label: "FULL-STACK IOT",
      period: "02/2026 - Present",
      location: "Deventer, NL",
      description:
        "A full-stack IoT telemetry monitoring dashboard built with FastAPI, Next.js, React Three Fiber, PostgreSQL, and Docker.",
      impact: ["Live telemetry dashboard", "Backend API with FastAPI", "3D data visualization concept"],
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
      impact: ["AI SaaS product concept", "Full-stack architecture", "Business workflow automation"],
      tech: ["Next.js", "Supabase", "Spring Boot", "AI", "Tailwind"],
      source: "https://github.com/kiarashdelavar/novara-saas",
      website: "https://www.novarasme.com/en",
      accent: "violet",
      icon: Sparkles,
      codeName: "NOVARA",
      featured: true,
    },
    {
      title: "Project Acquisition Tool",
      label: "SAXION PLATFORM",
      period: "11/2025 - 01/2026",
      location: "Deventer, NL",
      description:
        "Developed a full-stack portal for Saxion University allowing client submissions, student exploration, and a teacher dashboard.",
      impact: ["Teacher dashboard", "Client project submissions", "Student project discovery"],
      tech: ["Svelte", "Node.js", "Express", "Sequelize", "Tailwind"],
      source: "https://gitlab.com/saxionnl/hbo-ict/2.2-project-client-on-board/2025-2026/12",
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
      impact: ["Autonomous movement logic", "Obstacle detection", "Mission GUI and local data storage"],
      tech: ["Java", "JavaFX", "SQLite", "Radar Systems"],
      source: "https://github.com/kiarashdelavar/Frog-Autonomous-Navigation-System",
      accent: "blue",
      icon: Bot,
      codeName: "FROG",
    },
  ];

  const getAccentClasses = (accent: string) => {
    const accents: Record<string, string> = {
      cyan: "text-cyan-400 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]",
      emerald: "text-emerald-400 bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]",
      violet: "text-violet-400 bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]",
      orange: "text-orange-400 bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]",
      blue: "text-blue-400 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]",
    };

    return accents[accent] || accents.cyan;
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden pb-24 font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-700 ${
        isDarkMode ? "dark-portfolio" : "light-portfolio"
      } ${theme.bg}`}
    >
      <SpaceDust isDarkMode={isDarkMode} />
      <CyberBackground isDarkMode={isDarkMode} />

      <div className="portfolio-mp4-bg pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden md:block">
        <video
          className="portfolio-mp4-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/test.mp4" type="video/mp4" />
        </video>
        <div className="portfolio-mp4-readable-layer" />
      </div>

      {!isDarkMode && (
        <>
          <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(238,244,251,0.88))]" />
          <div className="pointer-events-none fixed left-[-10%] top-[10%] z-[1] h-[35vw] w-[35vw] rounded-full bg-cyan-300/25 blur-[130px]" />
          <div className="pointer-events-none fixed bottom-[5%] right-[-12%] z-[1] h-[32vw] w-[32vw] rounded-full bg-violet-300/25 blur-[130px]" />
        </>
      )}

      <div
        className={`pointer-events-none fixed inset-0 z-[2] ${
          isDarkMode
            ? "bg-[radial-gradient(rgba(34,211,238,0.035)_1px,transparent_1px)] [background-size:32px_32px]"
            : "bg-[radial-gradient(rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:32px_32px]"
        }`}
      />

      <div
        className={`pointer-events-none fixed left-[-10%] top-[-20%] z-[2] h-[50vw] w-[50vw] rounded-full bg-cyan-600/10 blur-[150px] transition-all duration-700 ${theme.glow}`}
      />
      <div
        className={`pointer-events-none fixed bottom-[10%] right-[-10%] z-[2] h-[40vw] w-[40vw] rounded-full bg-violet-600/10 blur-[150px] transition-all duration-700 ${theme.glow}`}
      />

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed right-5 top-5 z-50 rounded-full border p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 md:right-8 md:top-8 ${
          isDarkMode
            ? "border-white/20 bg-white/10 text-yellow-400"
            : "border-white/80 bg-white/90 text-slate-800"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <nav
        className={`fixed left-1/2 top-5 z-50 flex -translate-x-1/2 gap-5 whitespace-nowrap rounded-full border px-6 py-3.5 text-xs font-black backdrop-blur-2xl transition-all duration-300 md:top-6 md:gap-9 md:px-8 md:py-4 md:text-sm ${theme.nav}`}
      >
        {[
          ["Story", "#about"],
          ["Focus", "#focus"],
          ["Work", "#projects"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="relative transition-colors duration-300 hover:text-cyan-400">
            {label}
          </a>
        ))}
      </nav>

      <main className="relative z-[10] mx-auto max-w-7xl space-y-32 px-5 pt-28 md:space-y-40 md:px-8 md:pt-32">
        <section className="relative grid min-h-[86vh] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`hero-readable-panel relative z-20 rounded-[2.4rem] border p-7 backdrop-blur-2xl md:p-10 lg:col-span-7 ${theme.panel}`}
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-[70px]" />
            <div className="absolute -bottom-16 left-8 h-52 w-52 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="relative z-10 space-y-8">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-bold shadow-[0_0_24px_rgba(34,211,238,0.18)] ${
                  isDarkMode
                    ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    : "border border-cyan-200 bg-cyan-50 text-cyan-700"
                }`}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                Available for Internships & Part-Time
              </div>

              <div className="space-y-6">
                <h1
                  className={`text-5xl font-black leading-[1.02] tracking-tighter transition-colors duration-700 md:text-7xl xl:text-8xl ${theme.heading}`}
                >
                  I build <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
                    smart systems
                  </span>{" "}
                  <br />
                  that work.
                </h1>

                <p className={`max-w-2xl text-[17px] leading-8 transition-colors duration-700 md:text-[19px] ${theme.softText}`}>
                  Hi, I am <strong className={theme.heading}>Kiarash Delavar</strong>. I build software that connects AI,
                  robotics, data, and real-world systems. From robot motion safety to AI financial copilots, I turn complex
                  ideas into clean, useful, and working products.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {heroTags.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] ${
                      isDarkMode
                        ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                        : "border-cyan-200 bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 px-7 py-4 font-black text-white shadow-[0_18px_45px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(34,211,238,0.45)]"
                >
                  <Rocket size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Explore Projects
                </a>

                <a
                  href="https://github.com/kiarashdelavar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-2xl border px-6 py-4 font-black shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${theme.badge}`}
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href="https://gitlab.com/kiarash.delavar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-2xl border px-6 py-4 font-black text-[#FC6D26] shadow-[0_0_20px_rgba(252,109,38,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                    isDarkMode
                      ? "border-[#FC6D26]/20 bg-[#FC6D26]/10"
                      : "border-[#FC6D26]/20 bg-white/80"
                  }`}
                >
                  <Gitlab size={20} />
                  <span className="hidden sm:inline">GitLab</span>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className={`terminal-scanline mt-7 max-w-2xl overflow-hidden rounded-2xl border backdrop-blur-xl ${theme.terminal}`}
              >
                <div
                  className={`flex items-center justify-between border-b px-4 py-3 ${
                    isDarkMode ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50/70"
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
                      <span className={index === commandLines.length - 1 ? "text-emerald-400" : theme.muted}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="relative flex min-h-[430px] items-center justify-center lg:col-span-5 lg:min-h-[620px]"
          >
            <motion.div
              variants={floatAnim}
              animate="animate"
              className={`absolute left-3 top-14 z-30 rounded-2xl border p-3 text-cyan-500 shadow-xl backdrop-blur-md md:left-8 ${theme.badge}`}
            >
              <Bot size={24} />
            </motion.div>

            <motion.div
              variants={floatAnimReverse}
              animate="animate"
              className={`absolute bottom-14 right-4 z-30 rounded-2xl border p-3 text-violet-500 shadow-xl backdrop-blur-md md:right-10 ${theme.badge}`}
            >
              <Code2 size={24} />
            </motion.div>

            <motion.div
              variants={floatAnimReverse}
              animate="animate"
              className={`absolute right-8 top-24 z-30 hidden rounded-2xl border p-3 text-emerald-500 shadow-xl backdrop-blur-md md:block ${theme.badge}`}
            >
              <CircuitBoard size={23} />
            </motion.div>

            <div className="absolute aspect-square w-[90%] animate-[spin_32s_linear_infinite] rounded-full border border-dashed border-cyan-500/18 md:w-[112%]" />

            <div className="radar-container h-80 w-80 md:h-[470px] md:w-[470px]">
              <div className="radar-sweep" />
              <div className="radar-target" style={{ top: "25%", left: "65%", animationDelay: "0s" }} />
              <div className="radar-target" style={{ top: "75%", left: "35%", animationDelay: "1.2s" }} />
              <div className="radar-target" style={{ top: "45%", left: "85%", animationDelay: "2.5s" }} />

              <div
                className={`absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 ring-2 ring-cyan-400/50 shadow-[0_0_70px_rgba(34,211,238,0.55)] transition-colors duration-700 md:h-52 md:w-52 ${theme.radarRing}`}
              >
                <Image
                  src="/kiaphoto.jpg"
                  alt="Kiarash Delavar"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
                  priority
                />
              </div>
            </div>

            <div
              className={`absolute bottom-2 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-[1.8rem] border p-5 backdrop-blur-2xl md:bottom-6 md:w-[78%] ${theme.strongCard}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className={`font-mono text-[10px] font-black uppercase tracking-[0.32em] ${theme.muted}`}>
                    active profile
                  </p>
                  <h2 className={`mt-1 text-xl font-black ${theme.heading}`}>Software Engineer</h2>
                </div>
                <div className="rounded-2xl bg-cyan-500/12 p-3 text-cyan-400">
                  <Radio size={22} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Focus", "AI"],
                  ["Base", "NL"],
                  ["Mode", "Build"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={`rounded-2xl border px-3 py-2 ${
                      isDarkMode ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className={`text-[10px] uppercase tracking-[0.2em] ${theme.muted}`}>{label}</p>
                    <p className={`font-mono text-sm font-black ${theme.heading}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="focus"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32 space-y-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs font-black uppercase tracking-[0.25em] ${
                  isDarkMode
                    ? "border-violet-400/30 bg-violet-400/10 text-violet-300"
                    : "border-violet-200 bg-violet-50 text-violet-700"
                }`}
              >
                <Zap size={14} />
                current_signal
              </div>
              <h2 className={`text-4xl font-black tracking-tighter md:text-6xl ${theme.heading}`}>Current Focus</h2>
            </div>
            <p className={`max-w-2xl text-lg leading-8 ${theme.softText}`}>
              My work sits between practical software engineering and intelligent systems: build fast, test clearly, and make
              complex technology easier to use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUpSpring}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 ${theme.card}`}
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-[60px] transition-all duration-500 group-hover:bg-violet-500/15" />
                  <div className="relative z-10">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${
                        isDarkMode
                          ? "border-white/10 bg-white/[0.05] text-cyan-300"
                          : "border-slate-200 bg-slate-50 text-cyan-700"
                      }`}
                    >
                      <Icon size={26} />
                    </div>
                    <h3 className={`text-2xl font-black ${theme.heading}`}>{item.title}</h3>
                    <p className={`mt-4 leading-7 ${theme.softText}`}>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid scroll-mt-32 grid-cols-1 gap-8 md:grid-cols-12"
        >
          <motion.div
            variants={fadeUpSpring}
            className={`group relative overflow-hidden rounded-[2rem] rounded-br-[4rem] rounded-tl-[4rem] border p-8 backdrop-blur-2xl transition-all md:col-span-8 md:p-12 ${theme.card}`}
          >
            <div className="absolute right-0 top-0 h-64 w-64 bg-cyan-500/10 blur-[80px] transition-all duration-700 group-hover:bg-cyan-500/18" />
            <h3 className={`mb-8 flex items-center gap-3 text-3xl font-black transition-colors duration-700 ${theme.heading}`}>
              <Cpu className="text-cyan-500" size={32} /> About Me
            </h3>

            <div className={`relative z-10 space-y-6 text-lg leading-8 transition-colors duration-700 ${theme.softText}`}>
              <p>
                Hi! I’m a Software Engineering student living in the Netherlands. I’m interested in robotics, AI, and building
                smart systems. For me, coding is not only about making things look nice. It is about building systems that work
                well in real life.
              </p>
              <p>
                I enjoy working across the whole stack. I like building front-end interfaces, but I also like back-end logic,
                databases, APIs, and deployment. Recently, I have become very interested in Data Science and AI pipelines.
              </p>
              <p>
                Whether I’m writing C++ for a robotic arm, analyzing data in Python, or building a web app with Next.js, I focus
                on writing simple, clean, and reliable code.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpSpring}
            className={`flex flex-col justify-between rounded-[2rem] rounded-bl-[4rem] rounded-tr-[4rem] border bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 backdrop-blur-2xl transition-all hover:shadow-[0_0_44px_rgba(168,85,247,0.12)] md:col-span-4 md:p-10 ${
              isDarkMode ? "border-white/10" : "border-white/70 bg-white/70"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h4 className={`mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest ${theme.muted}`}>
                  <MapPin size={16} /> Base
                </h4>
                <p className="font-mono text-lg font-black text-cyan-500">Deventer, The Netherlands</p>
              </div>

              <div>
                <h4 className={`mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest ${theme.muted}`}>
                  <Globe size={16} /> Languages
                </h4>
                <div className={`flex flex-col gap-2 font-mono text-sm font-bold ${theme.heading}`}>
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
              className={`mt-10 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-black shadow-lg transition-all hover:scale-105 ${
                isDarkMode ? "bg-white text-black hover:bg-cyan-400" : "bg-slate-950 text-white hover:bg-cyan-500"
              }`}
            >
              <FileText size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpSpring}
            className={`rounded-[2rem] rounded-bl-[4rem] border p-8 backdrop-blur-2xl transition-all md:col-span-12 md:p-12 ${theme.card}`}
          >
            <h3 className={`mb-10 flex items-center gap-3 text-2xl font-black transition-colors duration-700 ${theme.heading}`}>
              <Layers className="text-violet-500" /> Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                const iconColor =
                  group.color === "cyan"
                    ? "text-cyan-500"
                    : group.color === "violet"
                      ? "text-violet-500"
                      : group.color === "emerald"
                        ? "text-emerald-500"
                        : "text-blue-500";

                return (
                  <div key={group.title} className="space-y-4">
                    <h4
                      className={`mb-6 flex items-center gap-2 border-b pb-3 text-sm font-black uppercase tracking-wider transition-colors duration-700 ${theme.heading} ${
                        isDarkMode ? "border-white/10" : "border-slate-200"
                      }`}
                    >
                      <Icon size={16} className={iconColor} />
                      {group.title}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`cursor-default rounded-xl border px-4 py-2 font-mono text-xs font-bold transition-all hover:scale-105 ${
                            isDarkMode
                              ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:text-slate-950"
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
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs font-black uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(34,211,238,0.16)] ${
                  isDarkMode
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                    : "border-cyan-200 bg-cyan-50 text-cyan-700"
                }`}
              >
                <ScanLine size={15} />
                project_vault.exe
              </div>

              <h3 className={`text-5xl font-black tracking-tighter md:text-7xl ${theme.heading}`}>
                Selected{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Builds
                </span>
              </h3>

              <p className={`mt-5 max-w-2xl text-lg leading-8 ${theme.softText}`}>
                A collection of AI, robotics, fintech, full-stack, and algorithmic systems built with real engineering focus.
              </p>
            </div>

            <div className={`terminal-scanline rounded-2xl border p-5 font-mono text-xs ${theme.terminal}`}>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck size={14} />
                build_status: online
              </div>
              <div className={theme.muted}>projects_loaded: {projects.length}</div>
              <div className={theme.muted}>security_layer: enabled</div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              const cyberAccent: Record<Project["accent"], string> = {
                cyan: "project-cyan",
                emerald: "project-emerald",
                violet: "project-violet",
                orange: "project-orange",
                blue: "project-blue",
              };

              const cardAccent = cyberAccent[project.accent];

              return (
                <motion.article
                  key={project.title}
                  variants={fadeUpSpring}
                  className={`cyber-project-card ${cardAccent} group relative overflow-hidden rounded-[2rem] border p-[1px] transition-all duration-500 hover:-translate-y-3 ${
                    project.featured ? "lg:even:mt-10" : ""
                  }`}
                >
                  <div className="cyber-card-inner relative flex min-h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d]/95 p-7 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:p-8">
                    <div className="cyber-card-grid absolute inset-0 opacity-30" />
                    <div className="cyber-card-noise absolute inset-0 opacity-[0.06]" />
                    <div className="cyber-card-glow absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px]" />
                    <div className="cyber-card-bottom-glow absolute -bottom-24 -left-24 h-56 w-56 rounded-full blur-[90px]" />

                    <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      </div>

                      <div className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-300 backdrop-blur-xl">
                        node_{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="relative z-10 mb-7 flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <span className="cyber-chip rounded-full border px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.22em]">
                            {project.label}
                          </span>

                          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 font-mono text-[10px] text-slate-300">
                            {project.period}
                          </span>
                        </div>

                        <h4 className="max-w-[92%] text-3xl font-black leading-tight tracking-tight text-white transition-colors duration-300 md:text-4xl">
                          {project.title}
                        </h4>
                      </div>

                      <div className="cyber-icon-box relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon size={30} />
                      </div>
                    </div>

                    <div className="relative z-10 mb-7 flex items-center gap-2 font-mono text-xs text-slate-300">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>

                    <p className="relative z-10 mb-7 text-[15px] leading-7 text-slate-200">
                      {project.description}
                    </p>

                    <div className="relative z-10 mb-8 grid gap-3">
                      {project.impact.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-slate-900/80"
                        >
                          <Check size={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                          <span className="text-slate-100">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mb-9 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-[11px] font-black text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-10 mt-auto flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400">system_id</div>
                        <div className="cyber-code-name mt-1 font-mono text-xs font-black uppercase tracking-[0.25em]">
                          {project.codeName}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-source-button group/link inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:scale-105"
                          >
                            Visit Website
                            <Globe size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                          </a>
                        )}

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
                    </div>

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

        <section id="experience" className="grid scroll-mt-32 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="mb-12 flex items-center gap-4">
              <Briefcase className="text-cyan-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight ${theme.heading}`}>Experience</h3>
            </div>

            <div className={`relative ml-4 space-y-10 border-l-2 pl-10 ${isDarkMode ? "border-white/10" : "border-slate-200"}`}>
              {experiences.map((item) => {
                const Icon = item.icon;
                const color = getAccentClasses(item.color);

                return (
                  <motion.div key={item.title} variants={fadeUpSpring} className="group relative transition-transform hover:translate-x-2">
                    <span className={`absolute -left-[49px] top-1.5 h-4 w-4 rounded-full transition-transform duration-500 group-hover:scale-150 ${color}`} />

                    <h4 className={`flex items-center gap-2 text-xl font-black ${theme.heading}`}>
                      {item.title}
                      <Icon size={18} />
                    </h4>

                    <p className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs font-black text-cyan-500">
                      <span className="flex items-center gap-1"><Briefcase size={12} /> {item.company}</span>
                      <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12} /> {item.location}</span>
                      <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12} /> {item.date}</span>
                    </p>

                    <p className={`mt-3 text-sm leading-7 ${theme.softText}`}>{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="mb-12 flex items-center gap-4">
              <GraduationCap className="text-violet-500" size={28} />
              <h3 className={`text-3xl font-black tracking-tight ${theme.heading}`}>Education</h3>
            </div>

            <div className={`relative ml-4 space-y-10 border-l-2 pl-10 ${isDarkMode ? "border-white/10" : "border-slate-200"}`}>
              <motion.div variants={fadeUpSpring} className="group relative transition-transform hover:translate-x-2">
                <span className="absolute -left-[49px] top-1.5 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_15px_#a855f7] transition-transform duration-500 group-hover:scale-150" />
                <h4 className={`text-xl font-black ${theme.heading}`}>BASc, Software Engineering</h4>
                <p className="mt-2 mb-3 flex flex-wrap items-center gap-4 font-mono text-xs font-black text-violet-500">
                  <span className="flex items-center gap-1"><GraduationCap size={12} /> Saxion University</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12} /> Deventer, NL</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12} /> Sept 2024 - Present</span>
                </p>

                <ul className={`space-y-2 text-sm leading-relaxed ${theme.softText}`}>
                  {["Novel-T Entrepreneurial Summer School", "Member of Honours Community", "E³UDRES² Design Thinking & Prototyping"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 flex-shrink-0 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSpring} className="group relative transition-transform hover:translate-x-2">
                <span className={`absolute -left-[49px] top-1.5 h-4 w-4 rounded-full transition-colors duration-500 group-hover:bg-cyan-500 ${isDarkMode ? "bg-white/20" : "bg-slate-300"}`} />
                <h4 className={`text-xl font-black ${theme.heading}`}>High School Diploma, Math & Physics</h4>
                <p className="mt-2 mb-3 flex flex-wrap items-center gap-4 font-mono text-xs font-black text-slate-500">
                  <span className="flex items-center gap-1"><GraduationCap size={12} /> Energy High School</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><MapPin size={12} /> Mashhad, Iran</span>
                  <span className={`flex items-center gap-1 ${theme.muted}`}><Calendar size={12} /> 2020 - 2023</span>
                </p>
                <p className={`text-sm leading-7 ${theme.softText}`}>Focus on advanced mathematics and complex problem-solving skills.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`contact-cyber-zone relative overflow-hidden rounded-[3rem] border px-6 py-10 backdrop-blur-2xl md:px-10 md:py-14 ${theme.strongCard}`}
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
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
              <div className="contact-gif-shell group relative h-[420px] overflow-hidden rounded-[2.2rem] border md:h-[560px]">
                <img
                  src="/Kidmograph-ViusalAtelier8-Art-Cyber-1.gif"
                  alt="Cyber visual animation"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/14 to-transparent" />
                <div className="absolute inset-0 contact-gif-scan" />

                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/45 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-xl">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  signal_online
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">visual system</p>
                  <h4 className="mt-2 text-3xl font-black text-white md:text-4xl">AI Interface Mode</h4>
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

            <div className="space-y-7 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`contact-info-panel rounded-[2.2rem] border p-7 backdrop-blur-2xl md:p-9 ${theme.strongCard}`}
              >
                <div
                  className={`mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs font-black shadow-[0_0_20px_rgba(34,211,238,0.18)] ${
                    isDarkMode
                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                      : "border-cyan-200 bg-cyan-50 text-cyan-700"
                  }`}
                >
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500" />
                  Open to Opportunities
                </div>

                <h3 className={`text-5xl font-black tracking-tighter md:text-6xl ${theme.heading}`}>Let&apos;s talk.</h3>

                <p className={`mt-5 max-w-2xl text-lg leading-8 ${theme.softText}`}>
                  If you have a project idea, an internship opportunity, or just want to connect, feel free to message me. I’m always open to new ideas and collaborations.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <button onClick={handleCopyEmail} className="contact-card group md:col-span-2">
                    <div className="contact-icon-box bg-cyan-500/10 text-cyan-400">{copied ? <Check size={20} /> : <Mail size={20} />}</div>
                    <div className="min-w-0">
                      <p className="contact-label">Email</p>
                      <p className="contact-value break-all">{copied ? "Copied to clipboard!" : email}</p>
                    </div>
                  </button>

                  <a href="tel:+31617174048" className="contact-card group">
                    <div className="contact-icon-box bg-violet-500/10 text-violet-400"><Phone size={20} /></div>
                    <div>
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">+31 617174048</p>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" target="_blank" rel="noopener noreferrer" className="contact-card group">
                    <div className="contact-icon-box bg-blue-500/10 text-blue-400"><Linkedin size={20} /></div>
                    <div>
                      <p className="contact-label">LinkedIn</p>
                      <p className="contact-value">Kiarash</p>
                    </div>
                  </a>

                  <a href="https://github.com/kiarashdelavar" target="_blank" rel="noopener noreferrer" className="contact-card group md:col-span-2">
                    <div className="contact-icon-box bg-slate-500/10 text-slate-300"><Github size={20} /></div>
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
                className={`contact-form-shell relative overflow-hidden rounded-[2.2rem] border p-7 shadow-2xl backdrop-blur-2xl md:p-9 ${theme.strongCard}`}
              >
                <div className="contact-form-scan" />
                <h4 className={`relative z-10 mb-7 flex items-center gap-3 text-2xl font-black ${theme.heading}`}>
                  <Send className="text-cyan-400" />
                  Send a Message
                </h4>

                <form action="https://formspree.io/f/xbdapkgq" method="POST" className="relative z-10 space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className={`mb-2 block text-sm font-black ${theme.softText}`}>Your Name</label>
                      <input type="text" name="name" required className={`contact-input w-full rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none ${theme.input}`} placeholder="John Doe" />
                    </div>

                    <div>
                      <label className={`mb-2 block text-sm font-black ${theme.softText}`}>Your Email</label>
                      <input type="email" name="email" required className={`contact-input w-full rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none ${theme.input}`} placeholder="john@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className={`mb-2 block text-sm font-black ${theme.softText}`}>Message</label>
                    <textarea name="message" required rows={5} className={`contact-input w-full resize-none rounded-xl border px-5 py-4 font-medium transition-all focus:outline-none ${theme.input}`} placeholder="Tell me about your project, team, or opportunity..." />
                  </div>

                  <button type="submit" className="contact-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-black text-white transition-all hover:-translate-y-1 hover:scale-[1.01]">
                    Send Message
                    <Rocket size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className={`relative z-10 mt-32 flex flex-col items-center gap-6 border-t py-12 text-sm transition-colors duration-700 ${theme.footer} ${theme.muted}`}>
        <div className="flex gap-8">
          <a href="https://github.com/kiarashdelavar" target="_blank" rel="noopener noreferrer" className="transition-colors hover:scale-110 hover:text-cyan-500">
            <Github size={20} />
          </a>
          <a href="https://gitlab.com/kiarash.delavar" target="_blank" rel="noopener noreferrer" className="transition-colors hover:scale-110 hover:text-[#FC6D26]">
            <Gitlab size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kiarash-delavar-b1a542289/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:scale-110 hover:text-cyan-500">
            <Linkedin size={20} />
          </a>
        </div>

        <p className="font-mono font-medium">© {new Date().getFullYear()} Kiarash Delavar. Engineered in the Netherlands.</p>
      </footer>
    </div>
  );
}
