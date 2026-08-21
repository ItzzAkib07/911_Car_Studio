import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";

const HeroSection = () => {
  return (
    <section id="home" className="hero" data-aos="zoom-in">
      <SmoothScrollingLink to="quality">
        <div className="downArrow">
          <i className="fa-solid fa-arrow-down-long"></i>
          <span style={{ color: "white" }}>SCROLL DOWN</span>
        </div>
      </SmoothScrollingLink>
    </section>
  );
};

export default HeroSection;
