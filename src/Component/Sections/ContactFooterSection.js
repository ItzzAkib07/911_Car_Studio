import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";
import PortfolioCreditBadge from "../PortfolioCreditBadge";

const ContactFooterSection = () => {
  return (
    <footer
      className="py-20 max-md:py-14 px-8 max-md:px-4 bg-gradient-to-b from-[#080808] via-[#0e0e0e] to-[#050505] relative overflow-hidden box-border w-full"
      id="contact"
    >
      {/* Top Contact Hub Header */}
      <div className="text-center mb-14 max-w-[800px] mx-auto" data-aos="fade-up">
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#EBBB8D] font-semibold uppercase block mb-3">
          CONNECT WITH US
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-white m-0 hover:text-neutral-300 transition-colors duration-200">
          VISIT OUR STUDIO
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          Experience perfection in automotive care. Visit our 911 car detailing
          studio in Pune or connect directly with our detailing master artisans.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-md:gap-8 items-stretch">
        {/* Left Column: Consolidated High-Impact Studio Cards */}
        <div
          className="flex flex-col gap-6 w-full"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          {/* Card 1: Studio 911 car detailing Location & Timings */}
          <div className="group relative bg-gradient-to-br from-[#161616] to-[#101010] border border-[#EBBB8D]/20 hover:border-[#EBBB8D]/45 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(235,187,141,0.16)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#EBBB8D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#EBBB8D]/20 to-[#EBBB8D]/5 border-[1.5px] border-[#EBBB8D]/30 flex items-center justify-center text-[#EBBB8D] text-xl shrink-0 transition-all duration-350 group-hover:from-[#EBBB8D] group-hover:to-[#C99765] group-hover:text-[#111] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(235,187,141,0.5)] group-hover:border-white">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#EBBB8D] tracking-[0.14rem] uppercase">
                    PUNE STUDIO
                  </span>
                  <h3 className="text-lg font-extrabold text-white m-0 tracking-wide leading-tight">
                    911 CAR DETAILING STUDIO LOCATION
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 w-full mb-6">
                <p className="text-[0.9rem] text-neutral-400 leading-relaxed m-0">
                  <strong className="text-[#F5D5B5] text-[0.94rem] block mb-1 font-extrabold leading-tight tracking-wide">
                    911 PREMIUM CAR DETAILING STUDIO
                  </strong>
                  In Front of Golden Winds, DY Patil Campus, Pune – 411047
                </p>

                <div className="flex items-center flex-wrap gap-3 max-md:flex-col max-md:items-start max-md:gap-2">
                  <div className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-[#F5D5B5] bg-[#EBBB8D]/10 border border-[#EBBB8D]/30 py-1.5 px-4 rounded-full max-md:w-full max-md:justify-center">
                    <i className="fa-solid fa-clock text-[#EBBB8D]"></i>
                    <span>Mon – Sun: 9:00 AM – 9:00 PM</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[0.76rem] font-extrabold text-emerald-400 bg-emerald-500/12 border border-emerald-500/30 py-1.5 px-4 rounded-full max-md:w-full max-md:justify-center">
                    <i className="fa-solid fa-circle-check"></i> Open All 7 Days
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center w-full">
              <a
                href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] font-extrabold tracking-wide text-[#EBBB8D] py-3 px-6 rounded-full bg-[#EBBB8D]/10 border-[1.5px] border-[#EBBB8D]/35 hover:bg-[#EBBB8D] hover:text-[#111] hover:border-[#EBBB8D] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(235,187,141,0.4)] transition-all duration-300 max-md:w-full"
              >
                <i className="fa-solid fa-diamond-turn-right"></i> Get Studio Directions
              </a>
            </div>
          </div>

          {/* Card 2: Direct Helplines */}
          <div className="group relative bg-gradient-to-br from-[#161616] to-[#101010] border border-[#EBBB8D]/20 hover:border-[#EBBB8D]/45 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(235,187,141,0.16)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#EBBB8D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#EBBB8D]/20 to-[#EBBB8D]/5 border-[1.5px] border-[#EBBB8D]/30 flex items-center justify-center text-[#EBBB8D] text-xl shrink-0 transition-all duration-350 group-hover:from-[#EBBB8D] group-hover:to-[#C99765] group-hover:text-[#111] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(235,187,141,0.5)] group-hover:border-white">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#EBBB8D] tracking-[0.14rem] uppercase">
                    DIRECT HELPLINES
                  </span>
                  <h3 className="text-lg font-extrabold text-white m-0 tracking-wide leading-tight">
                    CALL OUR MASTER ARTISANS
                  </h3>
                </div>
              </div>

              <p className="text-[0.86rem] text-neutral-400 leading-relaxed m-0 mb-4">
                Speak directly with our detailing consultants for immediate slot booking & guidance:
              </p>
            </div>

            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 w-full">
              <a
                href="tel:9112829911"
                className="inline-flex items-center justify-center gap-2 text-[0.86rem] font-extrabold text-[#EBBB8D] py-3 px-3 rounded-xl bg-[#EBBB8D]/8 border border-[#EBBB8D]/25 hover:bg-gradient-to-r hover:from-[#EBBB8D] hover:to-[#C99765] hover:text-[#111] hover:border-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(235,187,141,0.35)] transition-all duration-300 text-center whitespace-nowrap"
              >
                <i className="fa-solid fa-phone"></i> +91 91128 29911
              </a>
              <a
                href="tel:8657445050"
                className="inline-flex items-center justify-center gap-2 text-[0.86rem] font-extrabold text-[#EBBB8D] py-3 px-3 rounded-xl bg-[#EBBB8D]/8 border border-[#EBBB8D]/25 hover:bg-gradient-to-r hover:from-[#EBBB8D] hover:to-[#C99765] hover:text-[#111] hover:border-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(235,187,141,0.35)] transition-all duration-300 text-center whitespace-nowrap"
              >
                <i className="fa-solid fa-phone"></i> +91 86574 45050
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp & Online Support */}
          <div className="group relative bg-gradient-to-br from-[#161616] to-[#101010] border border-[#EBBB8D]/20 hover:border-[#EBBB8D]/45 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(235,187,141,0.16)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#EBBB8D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#EBBB8D]/20 to-[#EBBB8D]/5 border-[1.5px] border-[#EBBB8D]/30 flex items-center justify-center text-[#EBBB8D] text-xl shrink-0 transition-all duration-350 group-hover:from-[#EBBB8D] group-hover:to-[#C99765] group-hover:text-[#111] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(235,187,141,0.5)] group-hover:border-white">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#EBBB8D] tracking-[0.14rem] uppercase">
                    INSTANT CONNECT
                  </span>
                  <h3 className="text-lg font-extrabold text-white m-0 tracking-wide leading-tight">
                    CHAT & EMAIL INQUIRIES
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 w-full flex-wrap max-md:flex-col">
              <a
                href="https://wa.me/message/IVQCEUWS35SAG1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] font-extrabold text-white bg-[#25d366] hover:bg-[#20ba5a] py-3 px-6 rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 transition-all duration-300 max-md:w-full"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
              </a>
              <a
                href="mailto:tausifshaikh2505@gmail.com"
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] text-[#F5D5B5] hover:text-[#EBBB8D] py-3 px-5 rounded-full bg-[#EBBB8D]/8 border border-[#EBBB8D]/25 hover:bg-[#EBBB8D]/18 hover:border-[#EBBB8D] hover:-translate-y-0.5 transition-all duration-300 break-all max-md:w-full"
              >
                <i className="fa-solid fa-envelope text-[#EBBB8D]"></i> tausifshaikh2505@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Google Map Frame */}
        <div
          className="bg-gradient-to-br from-[#161616] to-[#101010] border border-[#EBBB8D]/22 hover:border-[#EBBB8D]/45 rounded-[1.25rem] overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.55)] hover:shadow-[0_18px_55px_rgba(235,187,141,0.16)] transition-all duration-400 min-h-[480px] max-lg:min-h-[420px] max-md:min-h-[360px] w-full"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div className="flex items-center justify-between py-4 px-6 max-md:py-3 max-md:px-4 bg-[#141414] border-b border-[#EBBB8D]/15 gap-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="flex items-center gap-2 text-[0.84rem] font-extrabold text-white tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
              <span>911 Studio Live Location</span>
            </div>
            <a
              href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
              target="_blank"
              rel="noreferrer"
              className="text-[0.8rem] font-extrabold text-[#EBBB8D] hover:text-[#F5D5B5] flex items-center gap-1.5 transition-all hover:translate-x-0.5 tracking-wide"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Open in Maps
            </a>
          </div>

          <div className="flex-1 w-full min-h-[380px] max-md:min-h-[280px] relative">
            <iframe
              title="911 Premium Car Detailing Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1121.2721357317535!2d73.90822126961476!3d18.616255269841506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzU4LjUiTiA3M8KwNTQnMzEuOSJF!5e1!3m2!1sen!2sin!4v1787166857699!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none min-h-[380px] max-md:min-h-[280px] block"
            />
          </div>

          <div className="flex items-center gap-2.5 py-3.5 px-5 max-md:py-3 max-md:px-4 bg-[#131313] border-t border-[#EBBB8D]/12 text-neutral-400 text-[0.8rem] font-medium">
            <i className="fa-solid fa-location-crosshairs text-[#EBBB8D] text-sm"></i>
            <span>DY Patil Campus, In Front of Golden Winds, Pune – 411047</span>
          </div>
        </div>
      </div>

      {/* Integrated Grand Footer Hub */}
      <div
        className="max-w-[1200px] mx-auto mt-20 max-md:mt-14 pt-16 max-md:pt-10 border-t border-[#EBBB8D]/15 box-border"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="grid grid-cols-[1.35fr_1fr_1.15fr_1.15fr] max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 max-md:gap-8 mb-14 max-md:mb-10">
          {/* Col 1: Studio Brand & Bio */}
          <div className="flex flex-col max-md:items-center max-md:text-center">
            <div className="flex items-center gap-3.5 mb-4 max-md:justify-center">
              <img src={logo} alt="911 Logo" className="h-11 w-auto object-contain" />
              <span className="text-xl font-black text-white tracking-wider leading-tight">
                911 <span className="text-[#EBBB8D] block text-[0.72rem] tracking-[0.12rem] font-bold">CAR DETAILING STUDIO</span>
              </span>
            </div>
            <p className="text-[0.85rem] text-neutral-400 leading-relaxed mb-6 font-normal">
              Pune's premier automotive surface protection and detailing studio.
              Delivering aerospace-grade coating, precision PPF edge-wrapping,
              and master paint correction.
            </p>
            <div className="flex gap-3 max-md:justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#EBBB8D]/8 border border-[#EBBB8D]/20 flex items-center justify-center text-[#EBBB8D] text-base hover:bg-[#EBBB8D] hover:text-[#111] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(235,187,141,0.4)] transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/911_premiumcardetailing/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#EBBB8D]/8 border border-[#EBBB8D]/20 flex items-center justify-center text-[#EBBB8D] text-base hover:bg-[#EBBB8D] hover:text-[#111] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(235,187,141,0.4)] transition-all duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/message/IVQCEUWS35SAG1"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#EBBB8D]/8 border border-[#EBBB8D]/20 flex items-center justify-center text-[#EBBB8D] text-base hover:bg-[#EBBB8D] hover:text-[#111] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(235,187,141,0.4)] transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#EBBB8D] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#EBBB8D] after:to-[#F5D5B5] after:rounded-full">
              NAVIGATION
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {[
                { to: "home", label: "Home" },
                { to: "quality", label: "Quality Assured" },
                { to: "services", label: "Our Services" },
                { to: "pricing", label: "Pricing Plans" },
                { to: "booking", label: "Book Service" },
                { to: "contact", label: "Studio Location" },
              ].map((link) => (
                <li key={link.to}>
                  <SmoothScrollingLink
                    to={link.to}
                    className="text-neutral-400 hover:text-[#EBBB8D] text-[0.84rem] font-medium transition-all duration-200 inline-flex items-center hover:translate-x-1"
                  >
                    {link.label}
                  </SmoothScrollingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#EBBB8D] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#EBBB8D] after:to-[#F5D5B5] after:rounded-full">
              SERVICES
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {[
                "Paint Protection Film (PPF)",
                "Ceramic & Graphene Coating",
                "Paint Correction & Polish",
                "Exterior Detailing & Spa",
                "Interior Deep Detailing",
                "Glass & Wheel Coating",
              ].map((service, idx) => (
                <li key={idx}>
                  <SmoothScrollingLink
                    to="services"
                    className="text-neutral-400 hover:text-[#EBBB8D] text-[0.84rem] font-medium transition-all duration-200 inline-flex items-center hover:translate-x-1"
                  >
                    {service}
                  </SmoothScrollingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Promise & Direct Booking */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#EBBB8D] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#EBBB8D] after:to-[#F5D5B5] after:rounded-full">
              STUDIO PROMISE
            </h4>
            <div className="flex flex-col gap-3.5 mb-6">
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-shield-heart text-[#EBBB8D] text-base shrink-0"></i>
                <span>Zero Advance Payment Required</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-truck-pickup text-[#EBBB8D] text-base shrink-0"></i>
                <span>Doorstep Pick-up & Drop in Pune</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-award text-[#EBBB8D] text-base shrink-0"></i>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
            <SmoothScrollingLink to="booking">
              <button className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-gradient-to-r from-[#EBBB8D] to-[#C99765] text-[#111] font-extrabold text-[0.75rem] tracking-[0.12rem] rounded-full hover:from-[#F5D5B5] hover:to-[#EBBB8D] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(235,187,141,0.45)] transition-all duration-300 uppercase cursor-pointer border-none">
                CONFIRM APPOINTMENT <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="flex justify-between items-center max-md:flex-col pt-8 max-md:pt-6 border-t border-white/10 gap-4 text-center">
          <p className="text-[0.82rem] text-neutral-400 m-0">
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-neutral-200 font-semibold">911 Premium Car Detailing Studio</strong>. All rights reserved.
          </p>
          <PortfolioCreditBadge />
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
