import React, { useState, useEffect } from "react";
import bgImage from "../../images/background-2.png";
import video from "../../images/smoke.mp4";
import logo from "../../images/911_logo.png";

const STAGES = [
  {
    min: 0,
    max: 28,
    icon: "fa-solid fa-gauge-high",
    title: "STUDIO ONLINE",
    desc: "Lights on. Bays ready. Let's get to work...",
  },
  {
    min: 29,
    max: 58,
    icon: "fa-solid fa-shield-halved",
    title: "PROTECTION LOADED",
    desc: "PPF. Ceramic. Graphene. Your paint, covered...",
  },
  {
    min: 59,
    max: 88,
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "GLOSS MODE: ON",
    desc: "Refining every curve. Chasing every reflection...",
  },
  {
    min: 89,
    max: 100,
    icon: "fa-solid fa-flag-checkered",
    title: "WELCOME TO 911",
    desc: "Your car deserves more than a wash.",
  },
];

const IntroSplash = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 4600; // total duration ~4.6s
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 450);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onFinish]);

  const currentStage =
    STAGES.find((s) => progress >= s.min && progress <= s.max) || STAGES[0];

  return (
    <section
      className={`fixed inset-0 w-screen h-screen bg-[#010101] z-[99999] flex flex-col justify-between items-center p-9 max-md:p-4.5 box-border overflow-hidden transition-all duration-450 select-none ${
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Studio Background Image with Atmospheric Video Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-35 brightness-75 contrast-125 pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <video
        src={video}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-25 brightness-75 contrast-125 mix-blend-screen pointer-events-none z-[1]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,0,0,0.06)_0%,rgba(13,12,11,0.85)_65%,#010101_100%)] z-[2] pointer-events-none"></div>

      {/* Main Studio Intro HUD */}
      <div className="relative z-10 w-full max-w-[680px] flex flex-col items-center text-center my-auto box-border">
        {/* Brand Logo with Red Aura */}
        <div className="relative w-22 h-22 mb-5 flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(212,0,0,0.45)_0%,transparent_70%)] animate-pulse"></div>
          <div className="relative w-full h-full rounded-full bg-[#0D0C0B]/95 border-[1.5px] border-[#D40000]/50 flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.9),inset_0_0_15px_rgba(212,0,0,0.25)]">
            <img src={logo} alt="911 Logo" className="w-13 h-auto object-contain drop-shadow-[0_0_12px_rgba(212,0,0,0.5)]" />
          </div>
        </div>

        {/* Studio Branding Title */}
        <div className="mb-7">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-6xl max-md:text-5xl font-black tracking-[0.25rem] leading-none text-[#E0D8D5] drop-shadow-[0_0_25px_rgba(224,216,213,0.35)]">
              911
            </span>
          </div>
          <span className="text-[0.82rem] max-md:text-[0.72rem] font-black tracking-[0.35rem] text-[#D40000] uppercase block mb-1">
            NINE ONE ONE
          </span>
          <span className="text-[0.92rem] max-md:text-[0.78rem] font-extrabold tracking-[0.22rem] text-[#E0D8D5] uppercase block mb-2">
            PREMIUM CAR DETAILING STUDIO
          </span>
          <div className="flex items-center justify-center gap-2 text-[0.78rem] max-md:text-[0.68rem] text-[#C9A86A] font-bold tracking-[0.16rem] uppercase mb-1">
            <span>CLEAN</span>
            <span className="text-[#D40000]">•</span>
            <span>CORRECT</span>
            <span className="text-[#D40000]">•</span>
            <span>PROTECT</span>
          </div>
          <p className="text-[0.82rem] max-md:text-[0.72rem] text-neutral-400 tracking-wider m-0 font-medium">
            YOUR CAR. OUR OBSESSION.
          </p>
        </div>

        {/* Dynamic Telemetry HUD Box */}
        <div className="w-full bg-[#0D0C0B]/85 border border-white/10 rounded-[1.35rem] p-6 max-md:p-4.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(212,0,0,0.1)] box-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent"></div>

          <div className="flex items-center gap-4 mb-4.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#1B1716] border border-[#D40000]/40 flex items-center justify-center text-[#D40000] text-xl shrink-0 shadow-[0_0_15px_rgba(212,0,0,0.25)]">
              <i className={currentStage.icon}></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[0.78rem] max-md:text-[0.7rem] font-black tracking-[0.15rem] text-[#D40000] uppercase block mb-1 truncate">
                {currentStage.title}
              </span>
              <p className="text-[0.85rem] max-md:text-[0.74rem] font-semibold text-[#E0D8D5] m-0 leading-tight truncate">
                {currentStage.desc}
              </p>
            </div>
            <span className="text-[1.35rem] max-md:text-[1.15rem] font-black text-[#E0D8D5] font-mono tracking-wider shrink-0">
              {Math.min(100, Math.floor(progress))}%
            </span>
          </div>

          {/* Performance Red Progress Bar with Glow */}
          <div className="w-full h-2.5 bg-[#1B1716] rounded-full overflow-hidden relative mb-4 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#510404] via-[#D40000] to-[#ff2a2a] rounded-full relative transition-[width] duration-75 ease-linear shadow-[0_0_14px_rgba(212,0,0,0.8)]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white shadow-[0_0_10px_#FFFFFF] rounded-full"></div>
            </div>
          </div>

          {/* Bottom Telemetry Status Line */}
          <div className="flex items-center justify-between text-[0.72rem] max-md:text-[0.65rem] font-bold tracking-wider text-white/50 uppercase flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 text-[#E0D8D5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D40000] shadow-[0_0_8px_#D40000] animate-pulse"></span>
              INITIALIZING STUDIO CALIBRATION
            </span>
            <span className="text-[#C9A86A] text-[0.68rem] tracking-widest font-extrabold">
              PORSCHE 911 HERITAGE GRADE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSplash;
