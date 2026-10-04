import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import desktopHeroBg from "../../images/Landing_page.png";
import mobileHeroBg from "../../images/mobile_landing_page.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-aos="fade"
      className="w-full min-h-[92vh] max-md:min-h-[88vh] bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center text-white relative select-none overflow-hidden"
    >
      <style>{`
        #home {
          background-image: url("${desktopHeroBg}");
        }
        @media only screen and (max-width: 768px) {
          #home {
            background-image: url("${mobileHeroBg}");
          }
        }
      `}</style>

      {/* Cinematic Studio Lighting Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-black/25 to-[#010101]/60 pointer-events-none z-[1]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(212,0,0,0.12)_0%,transparent_45%)] pointer-events-none z-[1]"></div>

      {/* Hero Interactive Bottom Deck (Action CTAs & Brand Pillars) */}
      <div className="relative z-10 w-full max-w-[1200px] px-8 max-md:px-4 pb-6 flex flex-col items-center text-center box-border">
        {/* Brand Tagline & Pillars Badge */}
        <div
          className="inline-flex items-center gap-3 py-1.5 px-5 rounded-full bg-[#0D0C0B]/85 border border-white/15 backdrop-blur-md mb-5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="w-2 h-2 rounded-full bg-[#D40000] shadow-[0_0_8px_#D40000] animate-pulse"></span>
          <span className="text-[0.75rem] max-md:text-[0.66rem] font-black tracking-[0.2rem] uppercase text-[#E0D8D5]">
            CLEAN <span className="text-[#D40000] mx-1">•</span> CORRECT <span className="text-[#D40000] mx-1">•</span> PROTECT
          </span>
          <span className="text-[#C9A86A] text-[0.7rem] font-extrabold max-md:hidden tracking-wider border-l border-white/15 pl-3">
            YOUR CAR. OUR OBSESSION.
          </span>
        </div>

        {/* Dual Hero CTA Buttons */}
        <div
          className="flex items-center justify-center gap-4 max-sm:flex-col w-full max-w-[500px] mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <SmoothScrollingLink to="booking" className="w-full max-sm:w-full">
            <button className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#D40000] hover:bg-[#510404] text-white text-[0.82rem] font-black tracking-[0.15rem] uppercase cursor-pointer transition-all duration-300 shadow-[0_4px_22px_rgba(212,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(212,0,0,0.7)] hover:-translate-y-0.5 border-none">
              <span>BOOK YOUR DETAIL</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </SmoothScrollingLink>

          <SmoothScrollingLink to="services" className="w-full max-sm:w-full">
            <button className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#0D0C0B]/80 hover:bg-[#1B1716] border border-white/30 hover:border-[#D40000] text-[#E0D8D5] hover:text-[#D40000] text-[0.82rem] font-extrabold tracking-[0.15rem] uppercase cursor-pointer transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5">
              <span>EXPLORE SERVICES</span>
              <i className="fa-solid fa-layer-group text-xs"></i>
            </button>
          </SmoothScrollingLink>
        </div>

        {/* Scroll Down Indicator */}
        <SmoothScrollingLink to="quality">
          <div className="flex flex-col items-center justify-center gap-1.5 cursor-pointer select-none rounded-full group transition-transform duration-300 hover:scale-105">
            <i className="fa-solid fa-arrow-down-long text-2xl max-md:text-xl text-[#E0D8D5] group-hover:text-[#D40000] transition-colors duration-200 animate-bounce"></i>
            <span className="font-sans text-[0.68rem] tracking-[0.25rem] text-[#E0D8D5]/70 uppercase font-extrabold group-hover:text-[#D40000] transition-colors duration-200">
              SCROLL DOWN
            </span>
          </div>
        </SmoothScrollingLink>
      </div>
    </section>
  );
};

export default HeroSection;
