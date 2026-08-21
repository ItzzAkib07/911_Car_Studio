import React from "react";

const BenefitsSection = () => {
  return (
    <section className="premium-benefits-section">
      <div className="premium-benefits-header" data-aos="fade-up">
        <span className="premium-services-label">WHY CHOOSE US</span>
        <h1 className="premium-services-title">KEY BENEFITS</h1>
        <div className="premium-services-line"></div>
      </div>

      <div className="premium-benefits-grid">
        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <h3>ENHANCES LOOK</h3>
          <p>
            Elevate your vehicle's appearance with a deep, mirror-like finish
            that turns heads.
          </p>
        </div>

        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3>PROTECTS PAINT</h3>
          <p>
            Shield your paint from chips, scratches, and environmental
            contaminants with advanced protection.
          </p>
        </div>

        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-clock"></i>
          </div>
          <h3>LONG LASTING PROTECTION</h3>
          <p>
            Our coatings and films provide durable protection that lasts for
            years, not just weeks.
          </p>
        </div>

        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-droplet"></i>
          </div>
          <h3>HYDROPHOBIC EFFECT</h3>
          <p>
            Water beads and rolls off effortlessly, keeping your car cleaner for
            longer.
          </p>
        </div>

        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-sun"></i>
          </div>
          <h3>UV & CHEMICAL RESISTANCE</h3>
          <p>
            Defend against UV fading, bird droppings, acid rain, and harsh
            chemical exposure.
          </p>
        </div>

        <div
          className="premium-benefit-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="premium-benefit-icon">
            <i className="fa-solid fa-gem"></i>
          </div>
          <h3>INCREASES VALUE</h3>
          <p>
            Maintain your vehicle in showroom condition, preserving its resale
            value over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
