import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import desktopHeroBg from "../../images/Landing_page.png";
import mobileHeroBg from "../../images/mobile_landing_page.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-aos="zoom-in"
      className="w-full h-[92vh] max-md:h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center text-white relative select-none"
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
      <SmoothScrollingLink to="quality">
        <div className="flex flex-col items-center justify-center gap-2 mb-4 cursor-pointer select-none rounded-full group transition-transform duration-300 hover:scale-105">
          <i className="fa-solid fa-arrow-down-long text-3xl max-md:text-2xl text-white group-hover:text-[#EBBB8D] transition-colors duration-200 animate-bounce"></i>
          <span className="font-sans text-xs tracking-widest text-white/95 uppercase font-semibold group-hover:text-[#EBBB8D] transition-colors duration-200">
            SCROLL DOWN
          </span>
        </div>
      </SmoothScrollingLink>
    </section>
  );
};

export default HeroSection;
