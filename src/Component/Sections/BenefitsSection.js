import React, { useState, useRef } from "react";
import Car3DViewer from "./Car3DViewer";

const BENEFITS_DATA = [
  {
    id: 0,
    icon: "fa-solid fa-star",
    badge: "01",
    title: "SHOWROOM-LEVEL FINISH",
    desc: "Elevate your vehicle's appearance with a deep, mirror-like obsidian reflection that turns heads anywhere you drive.",
    mode: "gloss",
    zone: "Hood & Panels",
  },
  {
    id: 1,
    icon: "fa-solid fa-shield-halved",
    badge: "02",
    title: "LONG-LASTING PROTECTION",
    desc: "Shield your paint from stone chips, gravel scratches, and harsh environmental contaminants with self-healing TPU armor.",
    mode: "ppf",
    zone: "Front Bumper & Edges",
  },
  {
    id: 2,
    icon: "fa-solid fa-droplet",
    badge: "03",
    title: "POWERFUL HYDROPHOBIC EFFECT",
    desc: "Extreme water contact angle forces rain and road grime to roll off effortlessly, keeping your paint cleaner for longer.",
    mode: "hydrophobic",
    zone: "Glass & Roof Shell",
  },
  {
    id: 3,
    icon: "fa-solid fa-sun",
    badge: "04",
    title: "UV & CHEMICAL RESISTANCE",
    desc: "10H thermal graphene matrix defends against UV oxidation, bird droppings, acid rain, and harsh caustic chemical exposure.",
    mode: "ceramic",
    zone: "Full Chassis Bond",
  },
  {
    id: 4,
    icon: "fa-solid fa-wand-magic-sparkles",
    badge: "05",
    title: "SELF-HEALING DEFENSE",
    desc: "Minor swirl marks and surface abrasions heal automatically under the warmth of the sun and engine heat.",
    mode: "ppf",
    zone: "Fascia & Wings",
  },
  {
    id: 5,
    icon: "fa-solid fa-gem",
    badge: "06",
    title: "RESALE VALUE PRESERVATION",
    desc: "Maintain your vehicle in certified pristine showroom condition, preserving its peak resale value over years of driving.",
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
      className="py-20 max-md:py-14 px-8 max-md:px-4 bg-gradient-to-b from-[#010101] via-[#0D0C0B] to-[#010101] overflow-hidden relative box-border w-full"
      id="benefits"
    >
      {/* Header */}
      <div className="text-center mb-12 max-w-[800px] mx-auto" data-aos="fade-up">
        <span className="text-[0.82rem] max-md:text-[0.72rem] tracking-[0.35rem] text-[#D40000] font-black uppercase block mb-3">
          WHY CHOOSE 911 STUDIO
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black tracking-[0.12rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200 uppercase">
          THE 911 DIFFERENCE
        </h1>
        <div className="w-20 h-[3px] bg-[#D40000] shadow-[0_0_10px_#D40000] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-300 max-w-[550px] mx-auto leading-relaxed font-normal">
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
              className={`group relative overflow-hidden rounded-[1.35rem] p-7 max-md:p-5 text-left transition-all duration-350 shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between border ${
                isActive
                  ? "bg-[#1B1716] border-[#D40000] -translate-y-1.5 shadow-[0_18px_50px_rgba(212,0,0,0.18),0_0_25px_rgba(212,0,0,0.1)]"
                  : "bg-[#0D0C0B] border-white/10 hover:border-[#D40000]/60 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(212,0,0,0.14)]"
              }`}
              onClick={() => handleSelectBenefit(index, true)}
            >
              {/* Top Accent Shimmer Bar */}
              <span
                className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent transition-opacity duration-350 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[0.72rem] font-black text-[#D40000] bg-[#D40000]/10 border border-[#D40000]/30 py-1 px-3 rounded-full tracking-[0.08rem]">
                    {benefit.badge}
                  </span>
                  <span className="text-[0.68rem] font-bold text-[#C9A86A] tracking-[0.04rem] inline-flex items-center gap-1.5 uppercase">
                    <i className="fa-solid fa-crosshairs text-[#D40000] text-[0.7rem]"></i> {benefit.zone}
                  </span>
                </div>

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-350 border ${
                    isActive
                      ? "bg-[#D40000] border-[#D40000] scale-105 shadow-[0_0_20px_rgba(212,0,0,0.6)] text-white"
                      : "bg-[#1B1716] border-white/10 text-[#E0D8D5] group-hover:bg-[#D40000] group-hover:border-[#D40000] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,0,0,0.6)] group-hover:text-white"
                  }`}
                >
                  <i className={`${benefit.icon} text-xl transition-colors duration-350`}></i>
                </div>

                <h3 className="text-[0.98rem] font-black tracking-[0.06rem] text-[#E0D8D5] group-hover:text-white mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-[0.86rem] text-neutral-300 leading-relaxed mb-5 font-normal">
                  {benefit.desc}
                </p>
              </div>

              <div
                className={`inline-flex items-center gap-2 text-[0.74rem] font-black tracking-[0.08rem] uppercase transition-all duration-300 ${
                  isActive ? "text-[#D40000] translate-x-1" : "text-[#E0D8D5]/70 group-hover:text-[#D40000] group-hover:translate-x-1"
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
