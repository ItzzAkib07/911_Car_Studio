import React, { useState, useEffect, useRef, useCallback } from "react";

const HEART_COLORS = [
  "#FF2A5F", // Vivid Crimson Rose
  "#FF4D6D", // Radiant Hot Pink
  "#FF758F", // Romantic Rose
  "#E11D48", // Deep Ruby
  "#FA5252", // Soft Coral Red
  "#FF85A1", // Bubblegum Pink
  "#E84393", // Magenta Bloom
  "#F43F5E", // Rose Glow
  "#FB7185", // Strawberry Pink
];

const PortfolioCreditBadge = ({
  url = "https://dezifolio.netlify.app/",
  name = "Akib",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hearts, setHearts] = useState([]);
  const heartIdCounter = useRef(0);
  const isHoveredRef = useRef(false);

  // Keep ref in sync for interval callbacks
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const spawnHearts = useCallback((count = 1) => {
    const newHearts = [];
    for (let i = 0; i < count; i++) {
      heartIdCounter.current += 1;
      const id = heartIdCounter.current;

      // Randomized floating physics & aesthetics
      const startX = 10 + Math.random() * 80; // percentage spread across badge width
      const driftX = (Math.random() - 0.5) * 60; // horizontal drift (-30px to +30px)
      const driftY = -(50 + Math.random() * 60); // vertical distance (-50px to -110px)
      const size = 11 + Math.random() * 11; // 11px to 22px
      const rotation = (Math.random() - 0.5) * 50; // -25deg to +25deg
      const duration = 0.85 + Math.random() * 0.45; // 0.85s to 1.3s
      const color =
        HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];

      newHearts.push({
        id,
        startX,
        driftX,
        driftY,
        size,
        rotation,
        duration,
        color,
      });

      // Cleanup heart particle after its animation finishes
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, duration * 1000 + 100);
    }

    setHearts((prev) => [...prev.slice(-25), ...newHearts]);
  }, []);

  // Continuous spawn loop while hovered
  useEffect(() => {
    if (!isHovered) return;

    // Initial burst on enter
    spawnHearts(4);

    // Continuous stream of hearts while hovered
    const interval = setInterval(() => {
      if (isHoveredRef.current) {
        spawnHearts(Math.random() > 0.4 ? 2 : 1);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isHovered, spawnHearts]);

  return (
    <div
      className={`portfolio-credit-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Floating Hearts Particle Container */}
      <div className="portfolio-hearts-portal" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="portfolio-floating-heart"
            style={{
              left: `${h.startX}%`,
              "--drift-x": `${h.driftX}px`,
              "--drift-y": `${h.driftY}px`,
              "--rot": `${h.rotation}deg`,
              fontSize: `${h.size}px`,
              color: h.color,
              animationDuration: `${h.duration}s`,
            }}
          >
            <i className="fa-solid fa-heart"></i>
          </span>
        ))}
      </div>

      {/* Credit Box Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`portfolio-credit-box ${isHovered ? "hovered" : ""}`}
        aria-label={`Developer Portfolio: ${name}`}
      >
        <span className="portfolio-credit-text">Crafted with</span>
        <span className={`portfolio-heart-icon ${isHovered ? "beating" : ""}`}>
          <i className="fa-solid fa-heart"></i>
        </span>
        <span className="portfolio-credit-text">by</span>
        <span className="portfolio-credit-name">{name}</span>
        <svg
          className="portfolio-sparkle-svg"
          viewBox="0 0 24 24"
          width="13"
          height="13"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </a>
    </div>
  );
};

export default PortfolioCreditBadge;
