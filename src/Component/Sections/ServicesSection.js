import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import service1 from "../../images/PPF.png";
import service2 from "../../images/PAINT.png";
import spa from "../../images/SPA.png";
import coating from "../../images/COATING.png";

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
    image: coating,
    alt: "Ceramic Graphene Coatings",
    desc: "Give your vehicle long-lasting protection with premium Ceramic and Graphene Coatings. These advanced coatings enhance gloss, provide a powerful hydrophobic effect, and offer resistance against UV rays, chemicals, contaminants, and everyday environmental exposure.",
    reverse: false,
    aos: "fade-right",
  },
  {
    number: "04",
    tag: "DETAILING",
    name: "EXTERIOR DETAILING & CAR SPA",
    image: spa,
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
      className="py-20 max-md:py-12 px-8 max-md:px-4 bg-gradient-to-b from-[#010101] via-[#0D0C0B] to-[#010101] overflow-hidden scroll-mt-24 w-full box-border"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-md:mb-10" data-aos="fade-up">
        <span className="text-[0.82rem] max-md:text-[0.72rem] tracking-[0.35rem] text-[#D40000] font-black uppercase block mb-3">
          BUILT FOR YOUR CAR. BUILT TO LAST.
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black tracking-[0.12rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200 uppercase">
          OUR SERVICES
        </h1>
        <div className="w-20 h-[3px] bg-[#D40000] shadow-[0_0_10px_#D40000] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-300 max-w-[550px] mx-auto leading-relaxed font-normal">
          Premium detailing & protection modules crafted for those who demand
          automotive excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 max-md:gap-10 w-full box-border">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className={`group flex max-lg:flex-col ${
              service.reverse ? "flex-row-reverse" : "flex-row"
            } items-stretch rounded-[1.35rem] overflow-hidden bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_rgba(212,0,0,0.15),0_0_30px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 transition-all duration-400 w-full box-border`}
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#010101]/85 via-black/35 to-black/75 opacity-70 group-hover:opacity-50 transition-opacity duration-400 pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 text-6xl max-md:text-5xl font-black text-white/[0.08] group-hover:text-[#D40000]/30 transition-colors duration-400 leading-none pointer-events-none select-none tracking-tighter">
                {service.number}
              </span>
            </div>

            {/* Content Container */}
            <div className="w-[55%] max-lg:w-full p-11 max-lg:p-8 max-md:p-6 flex flex-col justify-center box-border overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[0.72rem] font-black tracking-[0.25rem] text-[#D40000] uppercase inline-block">
                  {service.tag}
                </span>
                <span className="text-[#C9A86A] text-[0.68rem] tracking-widest font-extrabold">• STUDIO MODULE</span>
              </div>
              <h2 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] group-hover:text-white m-0 mb-3 tracking-wide leading-snug">
                {service.name}
              </h2>
              <div className="w-12 h-[2px] bg-[#D40000] shadow-[0_0_6px_#D40000] mb-5 rounded-full"></div>
              <p className="text-[0.95rem] max-md:text-[0.85rem] text-neutral-300 leading-relaxed mb-7 font-normal">
                {service.desc}
              </p>
              <div>
                <SmoothScrollingLink to="booking">
                  <button className="group/btn inline-flex items-center gap-2.5 py-3.5 px-8 rounded-full text-xs font-black tracking-[0.15rem] uppercase text-white bg-[#D40000] hover:bg-[#510404] shadow-[0_4px_18px_rgba(212,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(212,0,0,0.6)] hover:translate-x-1 transition-all duration-300 w-fit cursor-pointer border-none">
                    <span>BOOK SERVICE</span>
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
