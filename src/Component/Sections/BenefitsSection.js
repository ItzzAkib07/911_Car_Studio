import React, { useState, useRef } from "react";
import Car3DViewer from "./Car3DViewer";

const BENEFITS_DATA = [
  {
    id: 0,
    icon: "fa-solid fa-star",
    badge: "01",
    title: "ENHANCES LOOK",
    desc: "Elevate your vehicle's appearance with a deep, mirror-like finish that turns heads.",
    mode: "gloss",
    zone: "Hood & Panels",
  },
  {
    id: 1,
    icon: "fa-solid fa-shield-halved",
    badge: "02",
    title: "PROTECTS PAINT",
    desc: "Shield your paint from chips, scratches, and environmental contaminants with advanced protection.",
    mode: "ppf",
    zone: "Front Bumper & Edges",
  },
  {
    id: 2,
    icon: "fa-solid fa-clock",
    badge: "03",
    title: "LONG LASTING PROTECTION",
    desc: "Our coatings and films provide durable protection that lasts for years, not just weeks.",
    mode: "ceramic",
    zone: "Full Chassis Bond",
  },
  {
    id: 3,
    icon: "fa-solid fa-droplet",
    badge: "04",
    title: "HYDROPHOBIC EFFECT",
    desc: "Water beads and rolls off effortlessly, keeping your car cleaner for longer.",
    mode: "hydrophobic",
    zone: "Glass & Roof Shell",
  },
  {
    id: 4,
    icon: "fa-solid fa-sun",
    badge: "05",
    title: "UV & CHEMICAL RESISTANCE",
    desc: "Defend against UV fading, bird droppings, acid rain, and harsh chemical exposure.",
    mode: "ceramic",
    zone: "Roof & Clearcoat",
  },
  {
    id: 5,
    icon: "fa-solid fa-gem",
    badge: "06",
    title: "INCREASES VALUE",
    desc: "Maintain your vehicle in showroom condition, preserving its resale value over time.",
    mode: "gloss",
    zone: "360° Studio Finish",
  },
];

const BenefitsSection = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeMode, setActiveMode] = useState("gloss");
  const stageRef = useRef(null);

  const handleSelectBenefit = (index, shouldScroll = true) => {
    setActiveBenefit(index);
    setActiveMode(BENEFITS_DATA[index].mode);

    if (shouldScroll) {
      const stageEl = document.getElementById("benefits-3d-stage") || stageRef.current;
      if (stageEl) {
        const headerOffset = 80;
        const elementPosition = stageEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="premium-benefits-section" id="benefits">
      {/* Header */}
      <div className="premium-benefits-header" data-aos="fade-up">
        <span className="premium-services-label">WHY CHOOSE 911 STUDIO</span>
        <h1 className="premium-services-title">3D PROTECTION & KEY BENEFITS</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Interact with our real-time 3D detailing laboratory to explore how aerospace-grade coatings & self-healing PPF defend every curve.
        </p>
      </div>

      {/* Interactive 3D Detailing Model Studio Bay */}
      <div
        className="benefits-3d-stage-container"
        id="benefits-3d-stage"
        ref={stageRef}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <Car3DViewer
          activeBenefit={activeBenefit}
          onSelectBenefit={(idx) => handleSelectBenefit(idx, false)}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
        />
      </div>

      {/* Key Benefits Interactive Cards Grid */}
      <div className="premium-benefits-grid" data-aos="fade-up">
        {BENEFITS_DATA.map((benefit, index) => {
          const isActive = activeBenefit === index;
          return (
            <div
              key={benefit.id}
              className={`premium-benefit-card ${isActive ? "active-3d-card" : ""}`}
              onClick={() => handleSelectBenefit(index, true)}
            >
              <div className="premium-benefit-card-top">
                <span className="benefit-badge">{benefit.badge}</span>
                <span className="benefit-zone-tag">
                  <i className="fa-solid fa-crosshairs"></i> {benefit.zone}
                </span>
              </div>

              <div className="premium-benefit-icon">
                <i className={benefit.icon}></i>
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>

              <div className="benefit-inspect-cta">
                <span>{isActive ? "INSPECTING ZONE IN 3D" : "CLICK TO 3D INSPECT"}</span>
                <i className={`fa-solid ${isActive ? "fa-circle-check" : "fa-arrow-up-right-from-square"}`}></i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
