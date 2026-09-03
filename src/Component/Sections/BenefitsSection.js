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
    <section
      className="py-20 max-md:py-14 px-8 max-md:px-4 bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#070707] overflow-hidden relative box-border w-full"
      id="benefits"
    >
      {/* Header */}
      <div className="text-center mb-12 max-w-[800px] mx-auto" data-aos="fade-up">
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#EBBB8D] font-semibold uppercase block mb-3">
          WHY CHOOSE 911 STUDIO
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-white m-0 hover:text-neutral-300 transition-colors duration-200">
          3D PROTECTION & KEY BENEFITS
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          Interact with our real-time 3D detailing laboratory to explore how aerospace-grade coatings & self-healing PPF defend every curve.
        </p>
      </div>

      {/* Interactive 3D Detailing Model Studio Bay */}
      <div
        className="max-w-[1200px] mx-auto mb-14 relative w-full"
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
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 max-md:gap-4.5"
        data-aos="fade-up"
      >
        {BENEFITS_DATA.map((benefit, index) => {
          const isActive = activeBenefit === index;
          return (
            <div
              key={benefit.id}
              className={`group relative overflow-hidden rounded-[1.25rem] p-7 max-md:p-5 text-left transition-all duration-350 shadow-[0_8px_30px_rgba(0,0,0,0.45)] cursor-pointer flex flex-col justify-between border ${
                isActive
                  ? "bg-gradient-to-br from-[#1a1714] to-[#12100d] border-[#EBBB8D] -translate-y-1.5 shadow-[0_16px_45px_rgba(235,187,141,0.16),0_0_25px_rgba(235,187,141,0.08)]"
                  : "bg-gradient-to-br from-[#151515] to-[#101010] border-[#EBBB8D]/15 hover:border-[#EBBB8D]/45 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_rgba(235,187,141,0.16)]"
              }`}
              onClick={() => handleSelectBenefit(index, true)}
            >
              {/* Top Accent Shimmer Bar */}
              <span
                className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#EBBB8D] to-transparent transition-opacity duration-350 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[0.72rem] font-black text-[#EBBB8D] bg-[#EBBB8D]/12 border border-[#EBBB8D]/30 py-1 px-2.5 rounded-full tracking-[0.06rem]">
                    {benefit.badge}
                  </span>
                  <span className="text-[0.68rem] font-bold text-neutral-400 tracking-[0.04rem] inline-flex items-center gap-1.5 uppercase">
                    <i className="fa-solid fa-crosshairs text-[#EBBB8D] text-[0.7rem]"></i> {benefit.zone}
                  </span>
                </div>

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-350 border ${
                    isActive
                      ? "bg-gradient-to-br from-[#EBBB8D] to-[#C99765] scale-105 shadow-[0_0_20px_rgba(235,187,141,0.45)] border-white"
                      : "bg-gradient-to-br from-[#EBBB8D]/20 to-[#EBBB8D]/5 border-[#EBBB8D]/25 group-hover:bg-gradient-to-br group-hover:from-[#EBBB8D] group-hover:to-[#C99765] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(235,187,141,0.45)] group-hover:border-white"
                  }`}
                >
                  <i
                    className={`${benefit.icon} text-xl transition-colors duration-350 ${
                      isActive ? "text-[#111]" : "text-[#EBBB8D] group-hover:text-[#111]"
                    }`}
                  ></i>
                </div>

                <h3 className="text-[0.95rem] font-extrabold tracking-[0.08rem] text-white mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-[0.86rem] text-neutral-400 leading-relaxed mb-5 font-normal">
                  {benefit.desc}
                </p>
              </div>

              <div
                className={`inline-flex items-center gap-2 text-[0.74rem] font-extrabold tracking-[0.06rem] transition-all duration-300 ${
                  isActive ? "text-[#F5D5B5] translate-x-1" : "text-[#EBBB8D] group-hover:text-[#F5D5B5] group-hover:translate-x-1"
                }`}
              >
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
