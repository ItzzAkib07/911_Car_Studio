import React from "react";

const QualitySection = () => {
  return (
    <section
      id="quality"
      className="w-full py-20 max-md:py-12 px-8 max-md:px-4 overflow-hidden scroll-mt-24 box-border relative"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(13, 12, 11, 0.88) 0%, rgba(1, 1, 1, 0.98) 100%), url("/src/images/background-1.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Section Header */}
      <div
        className="text-center max-w-[750px] mx-auto mb-14 max-md:mb-10 px-4"
        data-aos="fade-up"
      >
        <span className="text-[0.82rem] max-md:text-[0.72rem] tracking-[0.35rem] text-[#D40000] font-black uppercase block mb-3">
          PRECISION AUTOMOTIVE CARE
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black tracking-[0.12rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200 uppercase">
          QUALITY ASSURED
        </h1>
        <div className="w-20 h-[3px] bg-[#D40000] shadow-[0_0_10px_#D40000] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-300 max-w-[550px] mx-auto leading-relaxed font-normal">
          Engineered for automotive perfectionists. We combine aerospace-grade
          surface protection, specialized clean-room environments, and master
          craftsmanship.
        </p>
      </div>

      {/* 4-Card 2x2 Responsive Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6 box-border">
        {/* Pillar 01 — Master Detailers */}
        <div
          className="group relative bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 rounded-[1.35rem] p-11 max-md:p-7 flex flex-col transition-all duration-400 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(212,0,0,0.14),0_0_30px_rgba(0,0,0,0.9)] box-border"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Top border glow line on hover */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

          <div className="w-15 h-15 rounded-xl bg-[#1B1716] group-hover:bg-[#D40000] border border-white/10 group-hover:border-[#D40000] flex items-center justify-center mb-6 text-[#E0D8D5] group-hover:text-white text-2xl transition-all duration-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(212,0,0,0.6)]">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <h3 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] group-hover:text-white m-0 mb-3 tracking-wide leading-tight">
            Master Detailers
          </h3>
          <p className="text-[0.95rem] max-md:text-[0.88rem] text-neutral-300 leading-relaxed m-0 mb-6 font-normal break-words">
            Trained detailing artisans utilizing paint-depth gauges, calibrated
            dual-action polishers, and multi-stage correction to eliminate 99% of
            swirl marks without compromising clear coat integrity.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Multi-stage paint correction & refinement
            </li>
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Non-destructive digital thickness measurement
            </li>
          </ul>
        </div>

        {/* Pillar 02 — Premium-Grade Products */}
        <div
          className="group relative bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 rounded-[1.35rem] p-11 max-md:p-7 flex flex-col transition-all duration-400 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(212,0,0,0.14),0_0_30px_rgba(0,0,0,0.9)] box-border"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Top border glow line on hover */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

          <div className="w-15 h-15 rounded-xl bg-[#1B1716] group-hover:bg-[#D40000] border border-white/10 group-hover:border-[#D40000] flex items-center justify-center mb-6 text-[#E0D8D5] group-hover:text-white text-2xl transition-all duration-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(212,0,0,0.6)]">
            <i className="fa-solid fa-gem"></i>
          </div>
          <h3 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] group-hover:text-white m-0 mb-3 tracking-wide leading-tight">
            Premium-Grade Products
          </h3>
          <p className="text-[0.95rem] max-md:text-[0.88rem] text-neutral-300 leading-relaxed m-0 mb-6 font-normal break-words">
            Exclusively employing self-healing TPU films, genuine 10H graphene
            nano-coatings, and pH-neutral European detailing chemicals
            formulated for maximum gloss and durability.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              High-clarity instant self-healing TPU films
            </li>
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Extreme chemical & UV radiation resistance
            </li>
          </ul>
        </div>

        {/* Pillar 03 — Dust-Free Clean Bays */}
        <div
          className="group relative bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 rounded-[1.35rem] p-11 max-md:p-7 flex flex-col transition-all duration-400 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(212,0,0,0.14),0_0_30px_rgba(0,0,0,0.9)] box-border"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Top border glow line on hover */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

          <div className="w-15 h-15 rounded-xl bg-[#1B1716] group-hover:bg-[#D40000] border border-white/10 group-hover:border-[#D40000] flex items-center justify-center mb-6 text-[#E0D8D5] group-hover:text-white text-2xl transition-all duration-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(212,0,0,0.6)]">
            <i className="fa-solid fa-temperature-arrow-up"></i>
          </div>
          <h3 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] group-hover:text-white m-0 mb-3 tracking-wide leading-tight">
            Dust-Free Studio Bays
          </h3>
          <p className="text-[0.95rem] max-md:text-[0.88rem] text-neutral-300 leading-relaxed m-0 mb-6 font-normal break-words">
            Enclosed, climate-controlled detailing bays with CRI 95+
            high-intensity inspection lighting and infrared short-wave lamps for
            flawless coating bonding and bubble-free film installations.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Climate & dust-controlled installation bays
            </li>
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Infrared shortwave thermal curing technology
            </li>
          </ul>
        </div>

        {/* Pillar 04 — Precision Edge Wrapping */}
        <div
          className="group relative bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 rounded-[1.35rem] p-11 max-md:p-7 flex flex-col transition-all duration-400 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(212,0,0,0.14),0_0_30px_rgba(0,0,0,0.9)] box-border"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {/* Top border glow line on hover */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

          <div className="w-15 h-15 rounded-xl bg-[#1B1716] group-hover:bg-[#D40000] border border-white/10 group-hover:border-[#D40000] flex items-center justify-center mb-6 text-[#E0D8D5] group-hover:text-white text-2xl transition-all duration-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(212,0,0,0.6)]">
            <i className="fa-solid fa-certificate"></i>
          </div>
          <h3 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] group-hover:text-white m-0 mb-3 tracking-wide leading-tight">
            Precision Edge Wrapping
          </h3>
          <p className="text-[0.95rem] max-md:text-[0.88rem] text-neutral-300 leading-relaxed m-0 mb-6 font-normal break-words">
            Seamless wrapped edges with zero knife contact against your
            vehicle's factory paint. Every installation is backed by our studio
            warranty and comprehensive aftercare support.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Invisible tucked edges with zero knife cuts
            </li>
            <li className="flex items-center gap-2.5 text-[0.88rem] font-semibold text-[#E0D8D5]">
              <i className="fa-solid fa-check text-[#D40000] text-xs shrink-0"></i>{" "}
              Complete warranty & aftercare maintenance
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Metrics / Stats Bar */}
      <div
        className="max-w-[1200px] mx-auto mt-14 bg-[#0D0C0B] border border-white/10 rounded-[1.35rem] py-9 px-10 max-md:p-6 flex justify-around items-center shadow-[0_15px_45px_rgba(0,0,0,0.7),0_0_20px_rgba(212,0,0,0.08)] flex-wrap gap-6 box-border max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-5"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-[2.5rem] max-md:text-[2rem] font-black text-[#E0D8D5] leading-tight mb-1">
            500<span className="text-[#D40000]">+</span>
          </span>
          <span className="text-[0.75rem] max-md:text-[0.68rem] font-extrabold text-neutral-400 tracking-widest uppercase">
            Vehicles Protected
          </span>
        </div>
        <div className="w-px h-11 bg-white/10 max-md:hidden"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[2.5rem] max-md:text-[2rem] font-black text-[#E0D8D5] leading-tight mb-1">
            10<span className="text-[#D40000]">H</span>
          </span>
          <span className="text-[0.75rem] max-md:text-[0.68rem] font-extrabold text-neutral-400 tracking-widest uppercase">
            Coating Hardness
          </span>
        </div>
        <div className="w-px h-11 bg-white/10 max-md:hidden"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[2.5rem] max-md:text-[2rem] font-black text-[#E0D8D5] leading-tight mb-1">
            100<span className="text-[#D40000]">%</span>
          </span>
          <span className="text-[0.75rem] max-md:text-[0.68rem] font-extrabold text-neutral-400 tracking-widest uppercase">
            Dust-Free Studio
          </span>
        </div>
        <div className="w-px h-11 bg-white/10 max-md:hidden"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[2.5rem] max-md:text-[2rem] font-black text-[#E0D8D5] leading-tight mb-1">
            5<span className="text-[#C9A86A]">★</span>
          </span>
          <span className="text-[0.75rem] max-md:text-[0.68rem] font-extrabold text-neutral-400 tracking-widest uppercase">
            Customer Satisfaction
          </span>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
