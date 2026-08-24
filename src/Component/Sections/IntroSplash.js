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
    <section className={`premium-intro-splash ${isExiting ? "fade-out" : ""}`}>
      {/* Studio Background Image with Atmospheric Video Overlay */}
      <div
        className="intro-bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <video
        src={video}
        autoPlay
        muted
        playsInline
        loop
        className="intro-bg-video"
      />
      <div className="intro-vignette-overlay"></div>

      {/* Main Studio Intro HUD */}
      <div className="intro-hud-card">
        {/* Brand Logo with Glowing Aura */}
        <div className="intro-logo-container">
          <div className="intro-logo-glow"></div>
          <div className="intro-logo-ring">
            <img src={logo} alt="911 Logo" className="intro-logo-img" />
          </div>
        </div>

        {/* Studio Branding Title */}
        <div className="intro-title-group">
          <h1 className="intro-brand-title">911</h1>
          <span className="intro-brand-subtitle">
            PREMIUM CAR DETAILING STUDIO
          </span>
          <p className="intro-tagline">
            Aerospace-Grade Coatings • Self-Healing PPF • Master Paint
            Correction
          </p>
        </div>

        {/* Dynamic Telemetry HUD Box */}
        <div className="intro-telemetry-box">
          <div className="intro-telemetry-header">
            <div className="telemetry-icon-wrap">
              <i className={currentStage.icon}></i>
            </div>
            <div className="telemetry-info">
              <span className="telemetry-stage-title">
                {currentStage.title}
              </span>
              <p className="telemetry-stage-desc">{currentStage.desc}</p>
            </div>
            <span className="telemetry-percentage">
              {Math.min(100, Math.floor(progress))}%
            </span>
          </div>

          {/* Luxury Champagne Gold Progress Bar */}
          <div className="intro-progress-track">
            <div
              className="intro-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="intro-progress-glow"></div>
            </div>
          </div>

          {/* Bottom Telemetry Status Line */}
          <div className="intro-telemetry-footer">
            <span className="telemetry-status-dot">
              <span className="pulse-dot"></span>
              INITIALIZING STUDIO CALIBRATION
            </span>
            {/* <span className="telemetry-location-tag">DY PATIL, PUNE 411047</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSplash;
