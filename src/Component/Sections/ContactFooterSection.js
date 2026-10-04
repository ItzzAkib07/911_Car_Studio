import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";
import PortfolioCreditBadge from "../PortfolioCreditBadge";

const ContactFooterSection = () => {
  return (
    <footer
      className="py-20 max-md:py-14 px-8 max-md:px-4 bg-[#010101] relative overflow-hidden box-border w-full"
      id="contact"
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 10%, rgba(212, 0, 0, 0.06) 0%, transparent 60%), radial-gradient(circle at center, rgba(13, 12, 11, 0.95) 0%, rgba(1, 1, 1, 1) 100%)',
      }}
    >
      {/* Top Contact Hub Header */}
      <div className="text-center mb-14 max-w-[800px] mx-auto" data-aos="fade-up">
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#D40000] font-bold uppercase block mb-3">
          CONNECT WITH US
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200">
          LET'S TALK DETAILING
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#D40000] via-[#510404] to-transparent my-5 mx-auto rounded-full"></div>
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
          <div className="group relative bg-[#0D0C0B] border border-[rgba(224,216,213,0.1)] hover:border-[#D40000]/50 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(212,0,0,0.15)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#D40000] text-xl shrink-0 transition-all duration-350 group-hover:bg-[#D40000] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,0,0,0.5)]">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#D40000] tracking-[0.14rem] uppercase">
                    PUNE STUDIO
                  </span>
                  <h3 className="text-lg font-extrabold text-[#E0D8D5] m-0 tracking-wide leading-tight">
                    911 CAR DETAILING STUDIO LOCATION
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 w-full mb-6">
                <p className="text-[0.9rem] text-neutral-400 leading-relaxed m-0">
                  <strong className="text-white text-[0.94rem] block mb-1 font-extrabold leading-tight tracking-wide">
                    911 PREMIUM CAR DETAILING STUDIO
                  </strong>
                  In Front of Golden Winds, DY Patil Campus, Pune – 411047
                </p>

                <div className="flex items-center flex-wrap gap-3 max-md:flex-col max-md:items-start max-md:gap-2">
                  <div className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-[#E0D8D5] bg-[#1B1716] border border-[rgba(224,216,213,0.12)] py-1.5 px-4 rounded-full max-md:w-full max-md:justify-center">
                    <i className="fa-solid fa-clock text-[#D40000]"></i>
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
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] font-extrabold tracking-wide text-[#E0D8D5] py-3 px-6 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.2)] hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,0,0,0.4)] transition-all duration-300 max-md:w-full no-underline"
              >
                <i className="fa-solid fa-diamond-turn-right text-[#D40000]"></i> Get Studio Directions
              </a>
            </div>
          </div>

          {/* Card 2: Direct Helplines */}
          <div className="group relative bg-[#0D0C0B] border border-[rgba(224,216,213,0.1)] hover:border-[#D40000]/50 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(212,0,0,0.15)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#D40000] text-xl shrink-0 transition-all duration-350 group-hover:bg-[#D40000] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,0,0,0.5)]">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#D40000] tracking-[0.14rem] uppercase">
                    DIRECT HELPLINES
                  </span>
                  <h3 className="text-lg font-extrabold text-[#E0D8D5] m-0 tracking-wide leading-tight">
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
                className="inline-flex items-center justify-center gap-2 text-[0.86rem] font-extrabold text-[#E0D8D5] py-3 px-3 rounded-xl bg-[#1B1716] border border-[rgba(224,216,213,0.15)] hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,0,0,0.35)] transition-all duration-300 text-center whitespace-nowrap no-underline"
              >
                <i className="fa-solid fa-phone text-[#D40000]"></i> +91 91128 29911
              </a>
              <a
                href="tel:8657445050"
                className="inline-flex items-center justify-center gap-2 text-[0.86rem] font-extrabold text-[#E0D8D5] py-3 px-3 rounded-xl bg-[#1B1716] border border-[rgba(224,216,213,0.15)] hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,0,0,0.35)] transition-all duration-300 text-center whitespace-nowrap no-underline"
              >
                <i className="fa-solid fa-phone text-[#D40000]"></i> +91 86574 45050
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp & Online Support */}
          <div className="group relative bg-[#0D0C0B] border border-[rgba(224,216,213,0.1)] hover:border-[#D40000]/50 rounded-[1.25rem] p-7 max-md:p-5 transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(212,0,0,0.15)] flex flex-col justify-between overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></span>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#D40000] text-xl shrink-0 transition-all duration-350 group-hover:bg-[#D40000] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,0,0,0.5)]">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.68rem] font-extrabold text-[#D40000] tracking-[0.14rem] uppercase">
                    INSTANT CONNECT
                  </span>
                  <h3 className="text-lg font-extrabold text-[#E0D8D5] m-0 tracking-wide leading-tight">
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
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] font-extrabold text-white bg-[#25d366] hover:bg-[#20ba5a] py-3 px-6 rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 transition-all duration-300 max-md:w-full no-underline"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
              </a>
              <a
                href="mailto:tausifshaikh2505@gmail.com"
                className="inline-flex items-center justify-center gap-2 text-[0.84rem] text-[#E0D8D5] hover:text-white py-3 px-5 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] hover:border-[#D40000] hover:bg-[#D40000]/15 hover:-translate-y-0.5 transition-all duration-300 break-all max-md:w-full no-underline"
              >
                <i className="fa-solid fa-envelope text-[#D40000]"></i> tausifshaikh2505@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Google Map Frame */}
        <div
          className="bg-[#0D0C0B] border border-[rgba(224,216,213,0.12)] hover:border-[#D40000]/50 rounded-[1.25rem] overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_18px_55px_rgba(212,0,0,0.15)] transition-all duration-400 min-h-[480px] max-lg:min-h-[420px] max-md:min-h-[360px] w-full"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div className="flex items-center justify-between py-4 px-6 max-md:py-3 max-md:px-4 bg-[#010101] border-b border-[rgba(224,216,213,0.1)] gap-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="flex items-center gap-2 text-[0.84rem] font-extrabold text-[#E0D8D5] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D40000] shadow-[0_0_8px_#D40000] animate-pulse"></span>
              <span>911 Studio Live Location</span>
            </div>
            <a
              href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
              target="_blank"
              rel="noreferrer"
              className="text-[0.8rem] font-extrabold text-[#D40000] hover:text-white flex items-center gap-1.5 transition-all hover:translate-x-0.5 tracking-wide no-underline"
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

          <div className="flex items-center gap-2.5 py-3.5 px-5 max-md:py-3 max-md:px-4 bg-[#010101] border-t border-[rgba(224,216,213,0.1)] text-neutral-400 text-[0.8rem] font-medium">
            <i className="fa-solid fa-location-crosshairs text-[#D40000] text-sm"></i>
            <span>DY Patil Campus, In Front of Golden Winds, Pune – 411047</span>
          </div>
        </div>
      </div>

      {/* Integrated Grand Footer Hub */}
      <div
        className="max-w-[1200px] mx-auto mt-20 max-md:mt-14 pt-16 max-md:pt-10 border-t border-[rgba(224,216,213,0.1)] box-border"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="grid grid-cols-[1.35fr_1fr_1.15fr_1.15fr] max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 max-md:gap-8 mb-14 max-md:mb-10">
          {/* Col 1: Studio Brand & Bio */}
          <div className="flex flex-col max-md:items-center max-md:text-center">
            <div className="flex items-center gap-3.5 mb-4 max-md:justify-center">
              <img src={logo} alt="911 Logo" className="h-11 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#E0D8D5] tracking-wider leading-tight">
                  911 <span className="text-[#D40000] font-extrabold text-[0.8rem] tracking-[0.16rem]">NINE ONE ONE</span>
                </span>
                <span className="text-[0.65rem] tracking-[0.14rem] font-bold text-neutral-400 uppercase">
                  PREMIUM CAR DETAILING STUDIO
                </span>
              </div>
            </div>
            <p className="text-[0.85rem] text-neutral-400 leading-relaxed mb-4 font-normal">
              YOUR CAR. OUR OBSESSION. Pune's premier automotive surface protection and detailing studio delivering aerospace-grade coating and precision PPF.
            </p>
            <div className="text-[0.72rem] font-extrabold tracking-[0.2rem] text-[#D40000] uppercase mb-5">
              CLEAN • CORRECT • PROTECT
            </div>
            <div className="flex gap-3 max-md:justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#E0D8D5] text-base hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(212,0,0,0.4)] transition-all duration-300 no-underline"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/911_premiumcardetailing/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#E0D8D5] text-base hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(212,0,0,0.4)] transition-all duration-300 no-underline"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/message/IVQCEUWS35SAG1"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#1B1716] border border-[rgba(224,216,213,0.15)] flex items-center justify-center text-[#E0D8D5] text-base hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(212,0,0,0.4)] transition-all duration-300 no-underline"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#E0D8D5] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#D40000] after:to-[#510404] after:rounded-full">
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
                    className="text-neutral-400 hover:text-[#D40000] text-[0.84rem] font-medium transition-all duration-200 inline-flex items-center hover:translate-x-1 no-underline"
                  >
                    {link.label}
                  </SmoothScrollingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#E0D8D5] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#D40000] after:to-[#510404] after:rounded-full">
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
                    className="text-neutral-400 hover:text-[#D40000] text-[0.84rem] font-medium transition-all duration-200 inline-flex items-center hover:translate-x-1 no-underline"
                  >
                    {service}
                  </SmoothScrollingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Promise & Direct Booking */}
          <div className="flex flex-col">
            <h4 className="text-[0.82rem] font-extrabold text-[#E0D8D5] tracking-[0.16rem] uppercase mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#D40000] after:to-[#510404] after:rounded-full">
              STUDIO PROMISE
            </h4>
            <div className="flex flex-col gap-3.5 mb-6">
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-shield-heart text-[#D40000] text-base shrink-0"></i>
                <span>Zero Advance Payment Required</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-truck-pickup text-[#D40000] text-base shrink-0"></i>
                <span>Doorstep Pick-up & Drop in Pune</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.84rem] text-neutral-300 leading-snug font-medium">
                <i className="fa-solid fa-award text-[#D40000] text-base shrink-0"></i>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
            <SmoothScrollingLink to="booking">
              <button className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-[#D40000] hover:bg-[#510404] text-white font-extrabold text-[0.75rem] tracking-[0.12rem] rounded-full hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,0,0,0.45)] transition-all duration-300 uppercase cursor-pointer border-none">
                CONFIRM APPOINTMENT <i className="fa-solid fa-arrow-right"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="flex justify-between items-center max-md:flex-col pt-8 max-md:pt-6 border-t border-[rgba(224,216,213,0.08)] gap-4 text-center">
          <div className="flex flex-col items-start max-md:items-center gap-1">
            <p className="text-[0.82rem] text-neutral-400 m-0">
              &copy; {new Date().getFullYear()}{" "}
              <strong className="text-[#E0D8D5] font-semibold">911 Premium Car Detailing Studio</strong>. All rights reserved.
            </p>
            <span className="text-[0.7rem] tracking-[0.15rem] text-[#D40000] font-bold uppercase">
              DRIVE CLEAN. DRIVE PREMIUM.
            </span>
          </div>
          <PortfolioCreditBadge />
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
