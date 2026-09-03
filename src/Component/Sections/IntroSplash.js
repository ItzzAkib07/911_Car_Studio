import React, { useState, useEffect } from "react";
import bgImage from "../../images/background-2.png";
import video from "../../images/smoke.mp4";
import logo from "../../images/911_logo.png";

const STAGES = [
  {
    min: 0,
    max: 28,
    icon: "fa-solid fa-gauge-high",
    title: "FIRING UP DETAILING BAYS",
    desc: "Heating infrared curing lamps & high-pressure foam cannons...",
  },
  {
    min: 29,
    max: 58,
    icon: "fa-solid fa-shield-halved",
    title: "CALIBRATING 9H CERAMIC & PPF",
    desc: "Preparing self-healing paint protection films & graphene coats...",
  },
  {
    min: 59,
    max: 88,
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "POLISHING TO MIRROR GLOSS",
    desc: "Dialing in dual-action rotary polishers for swirl-free paint...",
  },
  {
    min: 89,
    max: 100,
    icon: "fa-solid fa-flag-checkered",
    title: "STUDIO READY • ENTERING",
    desc: "Welcome to 911 Detailing Studio, DY Patil, Pune!",
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
      className={`fixed inset-0 w-screen h-screen bg-[#080808] z-[99999] flex flex-col justify-between items-center p-9 max-md:p-4.5 box-border overflow-hidden transition-all duration-450 select-none ${
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Studio Background Image with Atmospheric Video Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-40 brightness-75 contrast-125 pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <video
        src={video}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-75 contrast-125 mix-blend-screen pointer-events-none z-[1]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,12,12,0.45)_0%,rgba(5,5,5,0.82)_75%,#050505_100%)] z-[2] pointer-events-none"></div>

      {/* Main Studio Intro HUD */}
      <div className="relative z-10 w-full max-w-[680px] flex flex-col items-center text-center my-auto box-border">
        {/* Brand Logo with Glowing Aura */}
        <div className="relative w-22 h-22 mb-5 flex items-center justify-center">
          <div className="absolute -inset-2.5 rounded-full bg-[radial-gradient(circle,rgba(235,187,141,0.45)_0%,transparent_70%)] animate-pulse"></div>
          <div className="relative w-full h-full rounded-full bg-[#121212]/90 border-[1.5px] border-[#EBBB8D]/45 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(235,187,141,0.2)]">
            <img src={logo} alt="911 Logo" className="w-13 h-auto object-contain drop-shadow-[0_0_10px_rgba(235,187,141,0.4)]" />
          </div>
        </div>

        {/* Studio Branding Title */}
        <div className="mb-7">
          <h1 className="text-6xl max-md:text-5xl font-black tracking-[0.25rem] leading-none mb-1.5 bg-gradient-to-br from-white via-[#F5D5B5] to-[#EBBB8D] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(235,187,141,0.3)]">
            911
          </h1>
          <span className="text-[0.95rem] max-md:text-[0.8rem] font-extrabold tracking-[0.22rem] text-[#EBBB8D] uppercase block mb-2">
            PREMIUM CAR DETAILING STUDIO
          </span>
          <p className="text-[0.82rem] max-md:text-[0.72rem] text-neutral-400 tracking-wider m-0 font-medium">
            Aerospace-Grade Coatings • Self-Healing PPF • Master Paint Correction
          </p>
        </div>

        {/* Dynamic Telemetry HUD Box */}
        <div className="w-full bg-[#121212]/75 border border-[#EBBB8D]/25 rounded-[1.25rem] p-6 max-md:p-4.5 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(235,187,141,0.08)] box-border">
          <div className="flex items-center gap-4 mb-4.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#EBBB8D]/12 border border-[#EBBB8D]/30 flex items-center justify-center text-[#EBBB8D] text-xl shrink-0 shadow-[0_0_15px_rgba(235,187,141,0.25)]">
              <i className={currentStage.icon}></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[0.78rem] max-md:text-[0.7rem] font-extrabold tracking-[0.12rem] text-[#EBBB8D] uppercase block mb-1 truncate">
                {currentStage.title}
              </span>
              <p className="text-[0.85rem] max-md:text-[0.74rem] font-semibold text-white m-0 leading-tight truncate">
                {currentStage.desc}
              </p>
            </div>
            <span className="text-[1.35rem] max-md:text-[1.15rem] font-black text-[#F5D5B5] font-mono tracking-wider shrink-0">
              {Math.min(100, Math.floor(progress))}%
            </span>
          </div>

          {/* Luxury Champagne Gold Progress Bar */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#C99765] via-[#EBBB8D] to-[#F5D5B5] rounded-full relative transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-5 bg-white shadow-[0_0_12px_#EBBB8D] rounded-full"></div>
            </div>
          </div>

          {/* Bottom Telemetry Status Line */}
          <div className="flex items-center justify-between text-[0.72rem] max-md:text-[0.65rem] font-bold tracking-wider text-white/50 uppercase flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 text-[#F5D5B5]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
              INITIALIZING STUDIO CALIBRATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSplash;
