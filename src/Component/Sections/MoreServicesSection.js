import React from "react";
import SmoothScrollingLink from "../SmoothScrollingLink";
import bgImage from "../../images/background-2.png";

const moreCardsData = [
  {
    icon: "fa-couch",
    title: "INTERIOR DETAILING",
    desc: "Deep cleaning and restoration of your vehicle's interior — seats, dashboard, carpets, and every hidden corner — leaving it fresh and showroom-new.",
    delay: "100",
  },
  {
    icon: "fa-spray-can-sparkles",
    title: "GLASS COATING",
    desc: "Hydrophobic glass protection for improved visibility, easier maintenance, and a crystal-clear windshield that repels water and highway grime.",
    delay: "200",
  },
  {
    icon: "fa-circle-dot",
    title: "WHEEL & CALIPER DETAILING",
    desc: "Deep cleaning and detailing for alloy wheels and brake calipers — removing corrosive brake dust, grime, and road buildup for a pristine finish.",
    delay: "300",
  },
];

const transitStages = [
  {
    number: "01",
    icon: "fa-house-chimney-user",
    title: "DOORSTEP PICKUP",
    desc: "Scheduled handover from your home or workplace anywhere in Pune.",
    active: false,
  },
  {
    number: "02",
    icon: "fa-spray-can-sparkles",
    title: "911 STUDIO CARE",
    desc: "Multi-stage paint correction, PPF, or ceramic coating by master artisans.",
    active: true,
  },
  {
    number: "03",
    icon: "fa-key",
    title: "SAFE RETURN DROP",
    desc: "Delivered back gleaming in showroom finish at your preferred time.",
    active: false,
  },
];

const transitPerks = [
  { icon: "fa-shield-halved", label: "Transit Insured" },
  { icon: "fa-route", label: "Pune-Wide Coverage" },
  { icon: "fa-clock", label: "Flexible Time Slots" },
];

const MoreServicesSection = () => {
  return (
    <section
      className="py-20 max-md:py-12 px-8 max-md:px-4 overflow-hidden relative box-border w-full"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(13, 12, 11, 0.88) 0%, rgba(1, 1, 1, 0.98) 100%), url("${bgImage}")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-md:mb-10" data-aos="fade-up">
        <span className="text-[0.82rem] max-md:text-[0.72rem] tracking-[0.35rem] text-[#D40000] font-black uppercase block mb-3">
          PRECISION SPECIALTIES
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black tracking-[0.12rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200 uppercase">
          MORE SERVICES
        </h1>
        <div className="w-20 h-[3px] bg-[#D40000] shadow-[0_0_10px_#D40000] my-5 mx-auto rounded-full"></div>
      </div>

      {/* 3-Card Supplementary Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 mb-20 max-md:mb-12 box-border">
        {moreCardsData.map((card, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0D0C0B] border border-white/10 hover:border-[#D40000]/60 rounded-2xl p-10 max-md:p-7 flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(212,0,0,0.12)] overflow-hidden box-border"
            data-aos="fade-up"
            data-aos-delay={card.delay}
          >
            {/* Animated Bottom Shimmer Bar */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></span>

            {/* Icon Pill */}
            <div className="w-14 h-14 rounded-xl bg-[#1B1716] border border-white/10 group-hover:border-[#D40000] flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-[#D40000] group-hover:shadow-[0_4px_20px_rgba(212,0,0,0.5)] shrink-0">
              <i
                className={`fa-solid ${card.icon} text-xl text-[#E0D8D5] group-hover:text-white transition-colors duration-400`}
              ></i>
            </div>

            {/* Card Content */}
            <h3 className="text-base font-black tracking-wider text-[#E0D8D5] group-hover:text-white m-0 mb-3">
              {card.title}
            </h3>
            <p className="text-[0.9rem] text-neutral-300 leading-relaxed m-0 mb-6 flex-1 font-normal">
              {card.desc}
            </p>

            {/* CTA Button */}
            <div>
              <SmoothScrollingLink to="booking">
                <button className="group/btn inline-flex items-center gap-2.5 py-3.5 px-8 rounded-full text-xs font-black tracking-[0.15rem] uppercase text-white bg-[#D40000] hover:bg-[#510404] shadow-[0_4px_18px_rgba(212,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(212,0,0,0.6)] hover:translate-x-1 transition-all duration-300 w-fit cursor-pointer border-none">
                  <span>BOOK NOW</span>
                  <i className="fa-solid fa-arrow-right text-[0.7rem] transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                </button>
              </SmoothScrollingLink>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Concierge Pick Up & Drop Valet Transit Banner */}
      <div
        className="max-w-[1200px] mx-auto rounded-3xl bg-gradient-to-br from-[#120E0E]/95 via-[#0D0C0B]/98 to-[#160A0A]/95 border border-[#D40000]/30 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(212,0,0,0.1)] box-border"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        {/* Atmospheric Radial Pulsing Aura */}
        <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(212,0,0,0.08)_0%,transparent_60%)] pointer-events-none animate-[pulsePickupGlow_8s_ease-in-out_infinite_alternate]"></div>

        <div className="text-center py-14 px-10 max-md:py-9 max-md:px-4 relative z-[2] box-border">
          {/* Valet Badge */}
          <div className="inline-flex items-center gap-2 py-2 px-5 bg-[#D40000]/12 border border-[#D40000]/35 rounded-full text-[#D40000] text-xs font-black tracking-[0.15rem] uppercase mb-5 shadow-[0_0_15px_rgba(212,0,0,0.2)]">
            <i className="fa-solid fa-location-dot"></i> DOORSTEP VALET &
            TRANSIT SERVICE
          </div>

          {/* Banner Title */}
          <h2 className="text-4xl max-md:text-2xl font-black tracking-wider text-[#E0D8D5] m-0 mb-3.5 leading-tight uppercase">
            CONCIERGE PICK UP & DROP
          </h2>
          <p className="text-lg max-md:text-sm text-[#E0D8D5] leading-relaxed mx-auto mb-12 max-w-[780px] font-bold tracking-wide">
            SO YOU STAY FREE, WE'LL TAKE CARE OF YOUR CAR.
            <br />
            <span className="block text-sm max-md:text-xs text-neutral-400 font-normal mt-1.5 leading-normal">
              Seamless doorstep collection, precision detailing in our
              clean-room bays, and insured safe return.
            </span>
          </p>

          {/* 3-Step Animated Route Track */}
          <div className="relative max-w-[1000px] mx-auto mb-12 pt-10 pb-4 px-4 box-border">
            {/* Animated Road Track & Gliding Car */}
            <div className="absolute top-[4.5rem] left-[12%] right-[12%] h-[3px] bg-white/10 rounded-full z-[1] max-md:hidden">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #D40000 0, #D40000 16px, transparent 16px, transparent 28px)",
                  animation: "roadDashMove 1.8s linear infinite",
                }}
              ></div>
              <div
                className="absolute -top-4 left-0 text-[#D40000] text-2xl filter drop-shadow-[0_0_10px_rgba(212,0,0,0.8)] z-[3] flex items-center"
                style={{
                  animation: "carDriveRoute 8s ease-in-out infinite alternate",
                }}
              >
                <i className="fa-solid fa-car-side"></i>
                <div className="w-6 h-3 bg-[radial-gradient(ellipse_at_left,rgba(212,0,0,0.8)_0%,transparent_80%)] absolute -right-5 top-1/2 -translate-y-1/2 pointer-events-none"></div>
              </div>
            </div>

            {/* Stages 3-Col Grid */}
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-5 relative z-[2]">
              {transitStages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-8 max-md:p-5 text-center transition-all duration-350 backdrop-blur-md relative ${
                    stage.active
                      ? "bg-[#1B1716] border-[#D40000] -translate-y-1.5 shadow-[0_14px_40px_rgba(212,0,0,0.2)]"
                      : "bg-[#0D0C0B]/90 border-white/10 hover:border-[#D40000]/50 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_14px_40px_rgba(212,0,0,0.15)]"
                  }`}
                >
                  {/* Step Icon Wrap & Badge */}
                  <div
                    className={`w-16 h-16 rounded-xl border flex items-center justify-center mx-auto mb-5 relative transition-all duration-350 ${
                      stage.active
                        ? "bg-[#D40000] border-[#D40000] shadow-[0_0_25px_rgba(212,0,0,0.6)]"
                        : "bg-[#1B1716] border-white/10"
                    }`}
                  >
                    <i
                      className={`fa-solid ${stage.icon} text-2xl ${
                        stage.active ? "text-white" : "text-[#E0D8D5]"
                      }`}
                    ></i>
                    <span className="absolute -bottom-1.5 -right-1.5 bg-[#010101] border border-[#D40000] text-[#D40000] text-[0.65rem] font-black rounded-full w-6 h-6 flex items-center justify-center">
                      {stage.number}
                    </span>
                  </div>

                  <h4 className="text-base font-black tracking-wider text-[#E0D8D5] m-0 mb-2.5 uppercase">
                    {stage.title}
                  </h4>
                  <p className="text-[0.85rem] text-neutral-300 leading-relaxed m-0 font-normal">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transit Perks Row */}
          <div className="flex items-center justify-center gap-8 max-md:gap-4 mx-auto mb-10 flex-wrap px-4">
            {transitPerks.map((perk, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div className="w-1 h-1 rounded-full bg-white/20 max-md:hidden"></div>
                )}
                <div className="flex items-center gap-2.5 text-[#E0D8D5] text-[0.88rem] max-md:text-[0.78rem] font-bold tracking-wide">
                  <i className={`fa-solid ${perk.icon} text-[#D40000] text-base`}></i>
                  <span>{perk.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* CTA Action Button */}
          <div>
            <SmoothScrollingLink to="booking">
              <button className="inline-flex items-center justify-center gap-3 py-4 px-11 rounded-full bg-[#D40000] hover:bg-[#510404] text-white text-[0.82rem] font-black tracking-[0.15rem] uppercase cursor-pointer transition-all duration-350 shadow-[0_8px_25px_rgba(212,0,0,0.4)] hover:shadow-[0_12px_35px_rgba(212,0,0,0.65)] hover:-translate-y-1 hover:scale-102 border-none max-md:w-full">
                <span>SCHEDULE CONCIERGE PICKUP</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServicesSection;
