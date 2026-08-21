import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import service1 from "../../images/PPF.png";
import service2 from "../../images/PAINT.png";
import wasing from "../../images/SPA.png";
import painting from "../../images/COATING.png";

const ServicesSection = () => {
  return (
    <section className="premium-services" id="services">
      <div className="premium-services-header" data-aos="fade-up">
        <span className="premium-services-label">WHAT WE DO</span>
        <h1 className="premium-services-title">WE OFFER</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Premium detailing & protection services crafted for those who demand
          excellence.
        </p>
      </div>

      <div className="premium-services-grid">
        {/* Service 01 — PPF */}
        <div
          className="premium-service-row"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="premium-service-img-wrap">
            <img src={service1} alt="Paint Protection Film Service" />
            <div className="premium-service-img-overlay"></div>
            <span className="premium-service-number">01</span>
          </div>
          <div className="premium-service-content">
            <span className="premium-service-tag">PROTECTION</span>
            <h2 className="premium-service-name">PAINT PROTECTION FILM (PPF)</h2>
            <div className="premium-service-divider"></div>
            <p className="premium-service-desc">
              Protect your vehicle's original paint with premium Paint
              Protection Film designed to defend against stone chips, scratches,
              road debris, and everyday wear. PPF provides a durable protective
              layer while maintaining the vehicle's original finish and
              enhancing its long-term appearance.
            </p>
            <SmoothScrollingLink to="booking">
              <button className="premium-service-cta">
                BOOK NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Service 02 — Paint Correction */}
        <div
          className="premium-service-row premium-service-row-reverse"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="premium-service-img-wrap">
            <img src={service2} alt="Paint Correction Service" />
            <div className="premium-service-img-overlay"></div>
            <span className="premium-service-number">02</span>
          </div>
          <div className="premium-service-content">
            <span className="premium-service-tag">RESTORATION</span>
            <h2 className="premium-service-name">PAINT CORRECTION</h2>
            <div className="premium-service-divider"></div>
            <p className="premium-service-desc">
              Restore your car's paintwork and bring back its original gloss with
              professional paint correction. Our detailing specialists carefully
              remove swirl marks, oxidation, light scratches, and surface
              imperfections to deliver a smoother, deeper, and more refined
              finish.
            </p>
            <SmoothScrollingLink to="booking">
              <button className="premium-service-cta">
                BOOK NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Service 03 — Ceramic / Graphene */}
        <div
          className="premium-service-row"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="premium-service-img-wrap">
            <img src={wasing} alt="Ceramic Graphene Coatings" />
            <div className="premium-service-img-overlay"></div>
            <span className="premium-service-number">03</span>
          </div>
          <div className="premium-service-content">
            <span className="premium-service-tag">COATING</span>
            <h2 className="premium-service-name">
              CERAMIC / GRAPHENE COATINGS
            </h2>
            <div className="premium-service-divider"></div>
            <p className="premium-service-desc">
              Give your vehicle long-lasting protection with premium Ceramic and
              Graphene Coatings. These advanced coatings enhance gloss, provide
              a powerful hydrophobic effect, and offer resistance against UV
              rays, chemicals, contaminants, and everyday environmental
              exposure.
            </p>
            <SmoothScrollingLink to="booking">
              <button className="premium-service-cta">
                BOOK NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Service 04 — Exterior Detailing */}
        <div
          className="premium-service-row premium-service-row-reverse"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="premium-service-img-wrap">
            <img src={painting} alt="Exterior Detailing and Car Spa" />
            <div className="premium-service-img-overlay"></div>
            <span className="premium-service-number">04</span>
          </div>
          <div className="premium-service-content">
            <span className="premium-service-tag">DETAILING</span>
            <h2 className="premium-service-name">
              EXTERIOR DETAILING & CAR SPA
            </h2>
            <div className="premium-service-divider"></div>
            <p className="premium-service-desc">
              Give your vehicle a complete exterior refresh with professional
              detailing and car spa services. From deep cleaning and
              decontamination to finishing and polishing, we carefully restore
              the exterior to leave your car looking clean, glossy, and
              showroom-ready.
            </p>
            <SmoothScrollingLink to="booking">
              <button className="premium-service-cta">
                BOOK NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
