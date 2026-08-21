import React from "react";
import video from "../../images/smoke.mp4";

const IntroSplash = () => {
  return (
    <section className="one">
      <video src={video} autoPlay muted />
      <h1 className="landing-h1">
        <span>911</span>
        <span>&nbsp;CAR&nbsp;</span>
        <span>&nbsp;DETAILING&nbsp;</span>
        <span>&nbsp;STUDIO&nbsp;</span>
      </h1>
    </section>
  );
};

export default IntroSplash;
