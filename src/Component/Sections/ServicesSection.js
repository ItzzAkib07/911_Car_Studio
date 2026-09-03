import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import service1 from "../../images/PPF.png";
import service2 from "../../images/PAINT.png";
import wasing from "../../images/SPA.png";
import painting from "../../images/COATING.png";

const servicesData = [
  {
    number: "01",
    tag: "PROTECTION",
    name: "PAINT PROTECTION FILM (PPF)",
    image: service1,
    alt: "Paint Protection Film Service",
    desc: "Protect your vehicle's original paint with premium Paint Protection Film designed to defend against stone chips, scratches, road debris, and everyday wear. PPF provides a durable protective layer while maintaining the vehicle's original finish and enhancing its long-term appearance.",
    reverse: false,
    aos: "fade-right",
  },
  {
    number: "02",
    tag: "RESTORATION",
    name: "PAINT CORRECTION",
    image: service2,
    alt: "Paint Correction Service",
    desc: "Restore your car's paintwork and bring back its original gloss with professional paint correction. Our detailing specialists carefully remove swirl marks, oxidation, light scratches, and surface imperfections to deliver a smoother, deeper, and more refined finish.",
    reverse: true,
    aos: "fade-left",
  },
  {
    number: "03",
    tag: "COATING",
    name: "CERAMIC / GRAPHENE COATINGS",
    image: wasing,
    alt: "Ceramic Graphene Coatings",
    desc: "Give your vehicle long-lasting protection with premium Ceramic and Graphene Coatings. These advanced coatings enhance gloss, provide a powerful hydrophobic effect, and offer resistance against UV rays, chemicals, contaminants, and everyday environmental exposure.",
    reverse: false,
    aos: "fade-right",
  },
  {
    number: "04",
    tag: "DETAILING",
    name: "EXTERIOR DETAILING & CAR SPA",
    image: painting,
    alt: "Exterior Detailing and Car Spa",
    desc: "Give your vehicle a complete exterior refresh with professional detailing and car spa services. From deep cleaning and decontamination to finishing and polishing, we carefully restore the exterior to leave your car looking clean, glossy, and showroom-ready.",
    reverse: true,
    aos: "fade-left",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 max-md:py-12 px-8 max-md:px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] overflow-hidden scroll-mt-24 w-full box-border"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-md:mb-10" data-aos="fade-up">
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#EBBB8D] font-semibold uppercase block mb-3">
          WHAT WE DO
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-white m-0 hover:text-neutral-300 transition-colors duration-200">
          WE OFFER
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          Premium detailing & protection services crafted for those who demand
          excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 max-md:gap-10 w-full box-border">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className={`group flex max-lg:flex-col ${
              service.reverse ? "flex-row-reverse" : "flex-row"
            } items-stretch rounded-[1.25rem] overflow-hidden bg-[#161616] border border-[#EBBB8D]/15 hover:border-[#EBBB8D]/40 shadow-[0_8px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_60px_rgba(235,187,141,0.15),0_8px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-400 w-full box-border`}
            data-aos={service.aos}
            data-aos-duration="900"
          >
            {/* Image Wrap with Overlay & Large Number */}
            <div className="w-[45%] max-lg:w-full min-h-[22rem] max-lg:min-h-[16rem] max-sm:min-h-[13rem] relative overflow-hidden box-border shrink-0">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover block transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBBB8D]/20 to-black/50 opacity-40 group-hover:opacity-60 transition-opacity duration-400 pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 text-6xl max-md:text-5xl font-black text-white/[0.08] group-hover:text-[#EBBB8D]/30 transition-colors duration-400 leading-none pointer-events-none select-none tracking-tighter">
                {service.number}
              </span>
            </div>

            {/* Content Container */}
            <div className="w-[55%] max-lg:w-full p-11 max-lg:p-8 max-md:p-6 flex flex-col justify-center box-border overflow-hidden">
              <span className="text-xs font-bold tracking-[0.3rem] text-[#EBBB8D] uppercase mb-3 inline-block">
                {service.tag}
              </span>
              <h2 className="text-2xl max-md:text-xl font-extrabold text-white m-0 mb-3 tracking-wide leading-snug">
                {service.name}
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#EBBB8D] to-transparent mb-5 rounded-full"></div>
              <p className="text-[0.95rem] max-md:text-[0.85rem] text-neutral-400 leading-relaxed mb-7 font-normal">
                {service.desc}
              </p>
              <div>
                <SmoothScrollingLink to="booking">
                  <button className="group/btn inline-flex items-center gap-2.5 py-3 px-7 rounded-full text-xs font-bold tracking-[0.15rem] uppercase text-[#EBBB8D] border-[1.5px] border-[#EBBB8D] hover:bg-[#EBBB8D] hover:text-[#111] hover:shadow-[0_4px_20px_rgba(235,187,141,0.4)] hover:translate-x-1 transition-all duration-300 w-fit cursor-pointer bg-transparent">
                    BOOK NOW{" "}
                    <i className="fa-solid fa-arrow-right text-[0.7rem] transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                  </button>
                </SmoothScrollingLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
