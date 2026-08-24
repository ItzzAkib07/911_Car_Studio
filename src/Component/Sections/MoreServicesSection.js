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

      {/* Enhanced Concierge Pick Up & Drop Interactive Journey Banner */}
      <div
        className="premium-pickup-banner"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="premium-pickup-glow-bg"></div>
        <div className="premium-pickup-content">
          <div className="premium-pickup-badge">
            <i className="fa-solid fa-location-dot"></i> DOORSTEP VALET & TRANSIT SERVICE
          </div>

          <h2 className="premium-pickup-title">
            CONCIERGE PICK UP & DROP
          </h2>
          <p className="premium-pickup-tagline">
            SO YOU STAY FREE, WE'LL TAKE CARE OF YOUR CAR.
            <br />
            <span>Seamless doorstep collection, precision detailing in our clean-room bays, and insured safe return.</span>
          </p>

          {/* Animated 3-Step Pickup & Drop Transit Route */}
          <div className="premium-pickup-route-track">
            {/* Animated Road Track & Gliding Car with Headlights */}
            <div className="pickup-road-line">
              <div className="pickup-road-dash"></div>
              <div className="pickup-animated-car">
                <i className="fa-solid fa-car-side"></i>
                <div className="car-headlight-beam"></div>
              </div>
            </div>

            <div className="pickup-stages-grid">
              {/* Stage 1: Doorstep Collection */}
              <div className="pickup-stage-item">
                <div className="pickup-stage-icon-wrap">
                  <i className="fa-solid fa-house-chimney-user"></i>
                  <span className="pickup-step-number">01</span>
                </div>
                <h4 className="pickup-stage-title">DOORSTEP PICKUP</h4>
                <p className="pickup-stage-desc">
                  Scheduled handover from your home or workplace anywhere in Pune.
                </p>
              </div>

              {/* Stage 2: Studio Craftsmanship */}
              <div className="pickup-stage-item pickup-stage-active">
                <div className="pickup-stage-icon-wrap">
                  <i className="fa-solid fa-spray-can-sparkles"></i>
                  <span className="pickup-step-number">02</span>
                </div>
                <h4 className="pickup-stage-title">911 STUDIO CARE</h4>
                <p className="pickup-stage-desc">
                  Multi-stage paint correction, PPF, or ceramic coating by master artisans.
                </p>
              </div>

              {/* Stage 3: Pristine Safe Return */}
              <div className="pickup-stage-item">
                <div className="pickup-stage-icon-wrap">
                  <i className="fa-solid fa-key"></i>
                  <span className="pickup-step-number">03</span>
                </div>
                <h4 className="pickup-stage-title">SAFE RETURN DROP</h4>
                <p className="pickup-stage-desc">
                  Delivered back gleaming in showroom finish at your preferred time.
                </p>
              </div>
            </div>
          </div>

          {/* Transit Highlights & Studio Assurance */}
          <div className="pickup-perks-row">
            <div className="pickup-perk-item">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Transit Insured</span>
            </div>
            <div className="pickup-perk-divider"></div>
            <div className="pickup-perk-item">
              <i className="fa-solid fa-route"></i>
              <span>Pune-Wide Coverage</span>
            </div>
            <div className="pickup-perk-divider"></div>
            <div className="pickup-perk-item">
              <i className="fa-solid fa-clock"></i>
              <span>Flexible Time Slots</span>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="pickup-cta-wrapper">
            <SmoothScrollingLink to="booking">
              <button className="premium-pickup-cta">
                SCHEDULE CONCIERGE PICKUP <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServicesSection;
