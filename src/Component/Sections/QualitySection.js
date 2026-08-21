import React from "react";

const QualitySection = () => {
  return (
    <section className="premium-quality-section" id="quality">
      <div className="premium-quality-header" data-aos="fade-up">
        <span className="premium-services-label">PERFECTION IN EVERY DETAIL</span>
        <h1 className="premium-services-title">QUALITY ASSURED</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Engineered for automotive perfectionists. We combine aerospace-grade
          surface protection, specialized clean-room environments, and master
          craftsmanship.
        </p>
      </div>

      <div className="premium-quality-grid">
        {/* Pillar 01 — Master Detailers */}
        <div
          className="premium-quality-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="premium-quality-icon">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <h3 className="premium-quality-card-title">Master Detailers</h3>
          <p className="premium-quality-card-desc">
            Trained detailing artisans utilizing paint-depth gauges, calibrated
            dual-action polishers, and multi-stage correction to eliminate 99% of
            swirl marks without compromising clear coat integrity.
          </p>
          <ul className="premium-quality-card-list">
            <li>
              <i className="fa-solid fa-check"></i> Multi-stage paint correction &
              refinement
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Non-destructive digital
              thickness measurement
            </li>
          </ul>
        </div>

        {/* Pillar 02 — Premium-Grade Products */}
        <div
          className="premium-quality-card"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="premium-quality-icon">
            <i className="fa-solid fa-gem"></i>
          </div>
          <h3 className="premium-quality-card-title">Premium-Grade Products</h3>
          <p className="premium-quality-card-desc">
            Exclusively employing self-healing TPU films, genuine 10H graphene
            nano-coatings, and pH-neutral European detailing chemicals
            formulated for maximum gloss and durability.
          </p>
          <ul className="premium-quality-card-list">
            <li>
              <i className="fa-solid fa-check"></i> High-clarity instant
              self-healing TPU films
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Extreme chemical & UV
              radiation resistance
            </li>
          </ul>
        </div>

        {/* Pillar 03 — Dust-Free Clean Bays */}
        <div
          className="premium-quality-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="premium-quality-icon">
            <i className="fa-solid fa-temperature-arrow-up"></i>
          </div>
          <h3 className="premium-quality-card-title">Dust-Free Studio Bays</h3>
          <p className="premium-quality-card-desc">
            Enclosed, climate-controlled detailing bays with CRI 95+
            high-intensity inspection lighting and infrared short-wave lamps for
            flawless coating bonding and bubble-free film installations.
          </p>
          <ul className="premium-quality-card-list">
            <li>
              <i className="fa-solid fa-check"></i> Climate & dust-controlled
              installation bays
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Infrared shortwave thermal
              curing technology
            </li>
          </ul>
        </div>

        {/* Pillar 04 — Precision Edge Wrapping */}
        <div
          className="premium-quality-card"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="premium-quality-icon">
            <i className="fa-solid fa-certificate"></i>
          </div>
          <h3 className="premium-quality-card-title">Precision Edge Wrapping</h3>
          <p className="premium-quality-card-desc">
            Seamless wrapped edges with zero knife contact against your
            vehicle's factory paint. Every installation is backed by our studio
            warranty and comprehensive aftercare support.
          </p>
          <ul className="premium-quality-card-list">
            <li>
              <i className="fa-solid fa-check"></i> Invisible tucked edges with
              zero knife cuts
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Complete warranty & aftercare
              maintenance
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Metrics / Stats Bar */}
      <div
        className="premium-quality-stats"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="premium-quality-stat">
          <span className="premium-quality-stat-num">500+</span>
          <span className="premium-quality-stat-label">Vehicles Protected</span>
        </div>
        <div className="premium-quality-stat-divider"></div>
        <div className="premium-quality-stat">
          <span className="premium-quality-stat-num">10H</span>
          <span className="premium-quality-stat-label">Coating Hardness</span>
        </div>
        <div className="premium-quality-stat-divider"></div>
        <div className="premium-quality-stat">
          <span className="premium-quality-stat-num">100%</span>
          <span className="premium-quality-stat-label">Dust-Free Studio</span>
        </div>
        <div className="premium-quality-stat-divider"></div>
        <div className="premium-quality-stat">
          <span className="premium-quality-stat-num">5★</span>
          <span className="premium-quality-stat-label">Customer Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
