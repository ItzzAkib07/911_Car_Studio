import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";

const ContactFooterSection = () => {
  return (
    <footer className="premium-footer-section" id="contact">
      {/* Top Contact Hub */}
      <div className="premium-contact-header" data-aos="fade-up">
        <span className="premium-services-label">CONNECT WITH US</span>
        <h1 className="premium-services-title">VISIT OUR STUDIO</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Experience perfection in automotive care. Visit our state-of-the-art
          studio in Pune or get in touch for custom detailing consultations.
        </p>
      </div>

      <div className="premium-contact-wrapper">
        {/* Left Column: 4 Luxury Contact Cards Grid */}
        <div className="premium-contact-cards">
          {/* Card 1: Studio Address */}
          <div className="premium-contact-card" data-aos="fade-up">
            <div className="premium-contact-card-header">
              <div className="premium-contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="premium-contact-card-title-group">
                <span className="premium-contact-tag">LOCATION</span>
                <h3>STUDIO ADDRESS</h3>
              </div>
            </div>
            <div className="premium-contact-card-body">
              <p className="premium-contact-address-text">
                <strong>911 PREMIUM CAR DETAILING STUDIO</strong>
                <br />
                In Front of Golden Winds, DY Patil,
                <br />
                Pune City – 411047
              </p>
            </div>
            <div className="premium-contact-card-action">
              <a
                href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
                target="_blank"
                rel="noreferrer"
                className="premium-contact-link-btn"
              >
                Get Directions{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="premium-contact-card" data-aos="fade-up">
            <div className="premium-contact-card-header">
              <div className="premium-contact-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="premium-contact-card-title-group">
                <span className="premium-contact-tag">TIMINGS</span>
                <h3>WORKING HOURS</h3>
              </div>
            </div>
            <div className="premium-contact-card-body">
              <div className="premium-contact-hours-list">
                <div className="premium-contact-hour-row">
                  <span className="day-label">Mon – Sat</span>
                  <span className="time-value">9:00 AM – 9:00 PM</span>
                </div>
                <div className="premium-contact-hour-row">
                  <span className="day-label">Sunday</span>
                  <span className="time-value">9:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="premium-contact-card-action">
              <span className="premium-contact-status-badge">
                <i className="fa-solid fa-circle-check"></i> Open All 7 Days
              </span>
            </div>
          </div>

          {/* Card 3: Phone & Direct Consultation */}
          <div className="premium-contact-card" data-aos="fade-up">
            <div className="premium-contact-card-header">
              <div className="premium-contact-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="premium-contact-card-title-group">
                <span className="premium-contact-tag">PHONE SUPPORT</span>
                <h3>DIRECT CALLS</h3>
              </div>
            </div>
            <div className="premium-contact-card-body">
              <p className="premium-contact-subtext">
                Speak with our detailing consultants:
              </p>
              <div className="premium-contact-phone-list">
                <a href="tel:9112829911" className="premium-contact-phone-btn">
                  <i className="fa-solid fa-phone"></i> 9112829911
                </a>
                <a href="tel:8657445050" className="premium-contact-phone-btn">
                  <i className="fa-solid fa-phone"></i> 8657445050
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: WhatsApp & Email Support */}
          <div className="premium-contact-card" data-aos="fade-up">
            <div className="premium-contact-card-header">
              <div className="premium-contact-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="premium-contact-card-title-group">
                <span className="premium-contact-tag">FAST RESPONSE</span>
                <h3>WHATSAPP & MAIL</h3>
              </div>
            </div>
            <div className="premium-contact-card-body">
              <div className="premium-contact-channel-list">
                <a
                  href="https://wa.me/message/FXCIZ4L4CNDJK1"
                  target="_blank"
                  rel="noreferrer"
                  className="premium-contact-wa-btn"
                >
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
                <a
                  href="mailto:tausifshaikh2505@gmail.com"
                  className="premium-contact-email-link"
                >
                  <i className="fa-solid fa-envelope"></i>{" "}
                  tausifshaikh2505@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Google Map Frame */}
        <div className="premium-contact-map-card" data-aos="fade-up">
          <div className="premium-contact-map-header">
            <div className="premium-map-dot-group">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="premium-map-title">Live Studio Navigation</span>
            <a
              href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
              target="_blank"
              rel="noreferrer"
              className="premium-map-expand"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Open
              Map
            </a>
          </div>
          <div className="premium-contact-map-frame">
            <iframe
              title="911 Premium Car Detailing Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1121.2721357317535!2d73.90822126961476!3d18.616255269841506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzU4LjUiTiA3M8KwNTQnMzEuOSJF!5e1!3m2!1sen!2sin!4v1787166857699!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Integrated Grand Footer Hub */}
      <div className="premium-footer-hub" data-aos="fade-up">
        <div className="premium-footer-grid">
          {/* Col 1: Studio Brand & Bio */}
          <div className="premium-footer-col premium-footer-brand-col">
            <div className="premium-footer-logo-row">
              <img src={logo} alt="911 Logo" className="premium-footer-logo" />
              <span className="premium-footer-brand-name">
                911 <span>CAR DETAILING STUDIO</span>
              </span>
            </div>
            <p className="premium-footer-bio">
              Pune's premier automotive surface protection and detailing
              studio. Delivering aerospace-grade coating, precision PPF
              edge-wrapping, and master paint correction.
            </p>
            <div className="premium-footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/911_premiumcardetailing/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/message/FXCIZ4L4CNDJK1"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-heading">QUICK LINKS</h4>
            <ul className="premium-footer-links">
              <li>
                <SmoothScrollingLink to="home">Home</SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="quality">
                  Quality Assured
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Our Services
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="pricing">
                  Pricing Plans
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="booking">
                  Book Service
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="contact">
                  Contact & Studio
                </SmoothScrollingLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-heading">OUR SERVICES</h4>
            <ul className="premium-footer-links">
              <li>
                <SmoothScrollingLink to="services">
                  Paint Protection Film (PPF)
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Ceramic & Graphene Coating
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Paint Correction & Polish
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Exterior Detailing & Spa
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Interior Deep Detailing
                </SmoothScrollingLink>
              </li>
              <li>
                <SmoothScrollingLink to="services">
                  Glass & Wheel Coating
                </SmoothScrollingLink>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Direct Hub */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-heading">VISIT / REACH US</h4>
            <div className="premium-footer-contact-items">
              <div className="premium-footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>
                  In Front of Golden Winds, DY Patil, Pune – 411047
                </span>
              </div>
              <div className="premium-footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:9112829911">+91 91128 29911</a>
              </div>
              <div className="premium-footer-contact-item">
                <i className="fa-solid fa-clock"></i>
                <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
            <SmoothScrollingLink to="booking">
              <button className="premium-footer-cta-btn">
                BOOK APPOINTMENT <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="premium-footer-bottom">
          <p className="premium-footer-copy">
            &copy; {new Date().getFullYear()}{" "}
            <strong>911 Premium Car Detailing Studio</strong>. All rights
            reserved.
          </p>
          <p className="premium-footer-credit">
            Crafted with <span className="heart-pulse">❤️</span> by{" "}
            <a
              href="https://itzzakib07.github.io/dopefolio/"
              target="_blank"
              rel="noreferrer"
            >
              Akib Mulla
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
