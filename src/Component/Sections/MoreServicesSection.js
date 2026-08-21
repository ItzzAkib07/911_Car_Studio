import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";

const MoreServicesSection = () => {
  return (
    <section className="premium-more-section">
      <div className="premium-more-header" data-aos="fade-up">
        <span className="premium-services-label">ALSO AVAILABLE</span>
        <h1 className="premium-services-title">MORE SERVICES</h1>
        <div className="premium-services-line"></div>
      </div>

      <div className="premium-more-grid">
        <div
          className="premium-more-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="premium-more-card-icon">
            <i className="fa-solid fa-couch"></i>
          </div>
          <h3>INTERIOR DETAILING</h3>
          <p>
            Deep cleaning and restoration of your vehicle's interior — seats,
            dashboard, carpets, and every hidden corner — leaving it fresh and
            like new.
          </p>
          <SmoothScrollingLink to="booking">
            <button className="premium-service-cta">
              BOOK NOW <i className="fa-solid fa-arrow-right"></i>
            </button>
          </SmoothScrollingLink>
        </div>

        <div
          className="premium-more-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="premium-more-card-icon">
            <i className="fa-solid fa-spray-can-sparkles"></i>
          </div>
          <h3>GLASS COATING</h3>
          <p>
            Hydrophobic glass protection for improved visibility, easier
            maintenance, and a crystal-clear windshield that repels water and
            grime.
          </p>
          <SmoothScrollingLink to="booking">
            <button className="premium-service-cta">
              BOOK NOW <i className="fa-solid fa-arrow-right"></i>
            </button>
          </SmoothScrollingLink>
        </div>

        <div
          className="premium-more-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="premium-more-card-icon">
            <i className="fa-solid fa-circle-dot"></i>
          </div>
          <h3>WHEEL & CALIPER CLEANING</h3>
          <p>
            Deep cleaning and detailing for wheels and brake calipers — removing
            brake dust, grime, and buildup for a clean, polished finish.
          </p>
          <SmoothScrollingLink to="booking">
            <button className="premium-service-cta">
              BOOK NOW <i className="fa-solid fa-arrow-right"></i>
            </button>
          </SmoothScrollingLink>
        </div>
      </div>

      {/* Pick Up & Drop Banner */}
      <div className="premium-pickup-banner" data-aos="zoom-in">
        <div className="premium-pickup-content">
          <div className="premium-pickup-icon">
            <i className="fa-solid fa-car-side"></i>
          </div>
          <h2 className="premium-pickup-title">PICK UP & DROP SERVICE</h2>
          <p className="premium-pickup-tagline">
            SO YOU STAY FREE,
            <br />
            WE'LL TAKE CARE OF YOUR CAR.
          </p>
          <SmoothScrollingLink to="booking">
            <button className="premium-pickup-cta">
              SCHEDULE PICKUP <i className="fa-solid fa-arrow-right"></i>
            </button>
          </SmoothScrollingLink>
        </div>
      </div>
    </section>
  );
};

export default MoreServicesSection;
