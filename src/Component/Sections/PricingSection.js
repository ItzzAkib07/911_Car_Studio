import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SmoothScrollingLink from "../SmoothScrollingLink";
import { pricingPlans } from "../data/pricingData";
import bgImage from "../../images/background-3.png";

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  maxHeight: "85vh",
  overflowY: "auto",
  bgcolor: "#0D0C0B",
  border: "1px solid rgba(224, 216, 213, 0.15)",
  borderRadius: "1.25rem",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(212, 0, 0, 0.12)",
  p: { xs: 2.5, sm: 3.5 },
  outline: "none",
};

const PricingSection = () => {
  // Plan Details Dynamic Modal state
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  return (
    <section
      id="pricing"
      className="w-full py-20 max-md:py-12 px-8 max-md:px-4 overflow-hidden scroll-mt-24 box-border relative bg-[#010101]"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 20%, rgba(212, 0, 0, 0.07) 0%, transparent 60%), radial-gradient(circle at center, rgba(13, 12, 11, 0.85) 0%, rgba(1, 1, 1, 0.98) 100%), url("${bgImage}")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Section Header */}
      <div
        className="text-center max-w-[750px] mx-auto mb-14 max-md:mb-10 px-4"
        data-aos="fade-up"
      >
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#D40000] font-bold uppercase block mb-3">
          OUR PACKAGES
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200">
          STUDIO PRICING
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#D40000] via-[#510404] to-transparent my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          Transparent luxury detailing plans with no hidden charges. Choose the
          perfection package tailored for your car.
        </p>
      </div>

      {/* 3-Column Responsive Pricing Cards Grid */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7 max-md:gap-6 items-stretch py-6 px-2 max-md:px-0 box-border">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`group relative bg-[#0D0C0B] border rounded-[1.25rem] p-10 max-md:py-9 max-md:px-5 flex flex-col items-center text-center transition-all duration-350 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-2 box-border h-full overflow-hidden ${
              plan.badge
                ? "border-[#D40000]/40 bg-gradient-to-b from-[#D40000]/[0.08] via-[#0D0C0B] to-[#0D0C0B] shadow-[0_14px_45px_rgba(212,0,0,0.15)] hover:border-[#D40000] hover:shadow-[0_22px_60px_rgba(212,0,0,0.25)]"
                : "border-[rgba(224,216,213,0.1)] hover:border-[#D40000]/50 hover:shadow-[0_18px_50px_rgba(212,0,0,0.15)]"
            }`}
            data-aos="fade-up"
            data-aos-delay={plan.delay}
          >
            {/* Top Border Glow Accent */}
            <div
              className={`absolute top-0 left-0 w-full h-[3px] transition-opacity duration-350 ${
                plan.badge
                  ? "opacity-100 bg-gradient-to-r from-[#510404] via-[#D40000] to-[#510404]"
                  : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-[#D40000] to-transparent"
              }`}
            ></div>

            {/* Featured Badge */}
            {plan.badge && (
              <div
                className={`absolute top-0 right-0 text-white text-[0.65rem] font-extrabold tracking-[0.14rem] py-1.5 px-5 rounded-bl-xl uppercase z-[3] ${
                  plan.badge === "MOST POPULAR"
                    ? "bg-[#D40000] shadow-[0_4px_15px_rgba(212,0,0,0.5)]"
                    : plan.badge === "ADVANCED TECH"
                    ? "bg-[#510404] border-l border-b border-[#D40000]/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                    : "bg-[#C9A86A] text-[#010101] font-black shadow-[0_4px_15px_rgba(201,168,106,0.35)]"
                }`}
              >
                {plan.badge}
              </div>
            )}

            <div className="text-[0.75rem] font-extrabold tracking-[0.22rem] text-[#D40000] uppercase mb-3">
              {plan.tier}
            </div>
            <h2 className="text-2xl max-md:text-xl font-extrabold text-[#E0D8D5] m-0 mb-1.5 leading-tight">
              {plan.name}
            </h2>
            <span className="text-[0.85rem] font-medium text-neutral-400 tracking-wide mb-6 min-h-[1.3rem] block">
              {plan.sub}
            </span>

            {/* Price Row */}
            <div className="flex items-start justify-center gap-1 mb-5">
              <span className="text-2xl font-bold text-neutral-500 leading-none mt-1.5">
                ₹
              </span>
              <span className="text-[3.5rem] max-md:text-[2.85rem] font-black text-white leading-none tracking-tight">
                {plan.price}
              </span>
            </div>

            <div className="w-14 h-[2px] bg-gradient-to-r from-transparent via-[#D40000] to-transparent mx-auto mb-5 rounded-full"></div>

            {/* View Details Pill */}
            <p
              className="text-[0.82rem] font-semibold text-[#E0D8D5] hover:text-white bg-[#1B1716] hover:bg-[#D40000]/20 border border-[rgba(224,216,213,0.12)] hover:border-[#D40000] rounded-full py-2 px-4 cursor-pointer inline-flex items-center justify-center gap-2 mb-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(212,0,0,0.2)]"
              onClick={() => setSelectedPlanModal(plan)}
            >
              <i className="fa-solid fa-circle-info text-xs text-[#D40000]"></i> View service details
            </p>

            {/* Booking CTA Button */}
            <SmoothScrollingLink to="booking" className="mt-auto w-full flex justify-center no-underline">
              <button
                className={`inline-flex items-center justify-center gap-2.5 w-full max-w-[250px] min-h-[3rem] py-3.5 px-7 rounded-full text-[0.8rem] font-bold tracking-widest uppercase cursor-pointer transition-all duration-300 group/btn hover:-translate-y-0.5 ${
                  plan.badge
                    ? "bg-[#D40000] hover:bg-[#510404] text-white border border-[#D40000] shadow-[0_4px_20px_rgba(212,0,0,0.35)] hover:shadow-[0_8px_30px_rgba(212,0,0,0.6)]"
                    : "bg-transparent text-[#E0D8D5] hover:bg-[#D40000] hover:text-white border-[1.5px] border-[rgba(224,216,213,0.3)] hover:border-[#D40000] hover:shadow-[0_6px_25px_rgba(212,0,0,0.35)]"
                }`}
              >
                BOOK SERVICE{" "}
                <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover/btn:translate-x-1"></i>
              </button>
            </SmoothScrollingLink>
          </div>
        ))}
      </div>

      {/* Dynamic Plan Details Modal */}
      <Modal
        open={Boolean(selectedPlanModal)}
        onClose={() => setSelectedPlanModal(null)}
        aria-labelledby="plan-modal-title"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              color: "#E0D8D5",
              fontSize: "1.35rem",
              cursor: "pointer",
              mb: 1,
              "&:hover": { color: "#D40000" },
              transition: "color 0.2s ease",
            }}
            onClick={() => setSelectedPlanModal(null)}
            aria-label="Close Details Modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </Box>
          {selectedPlanModal && (
            <>
              <div className="text-center mb-3.5">
                <h2 className="text-2xl font-extrabold text-[#E0D8D5] m-0 mb-2">
                  {selectedPlanModal.name}{" "}
                  <span className="block text-[0.85rem] text-[#D40000] font-bold mt-1 tracking-wide uppercase">
                    {selectedPlanModal.sub}
                  </span>
                </h2>
              </div>
              <Box>
                <p className="text-neutral-400 text-[0.86rem] leading-relaxed mb-4">
                  {selectedPlanModal.description}
                </p>
                <ul className="list-none p-0 m-0 mt-4 flex flex-col gap-3 w-full">
                  {selectedPlanModal.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[0.88rem] text-neutral-200 leading-normal"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D40000]/15 border border-[#D40000]/30 text-[#D40000] text-xs font-black shrink-0 mt-0.5">
                        ✔
                      </span>
                      <span className="text-neutral-300 font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Pricing Highlights & Studio Value Pillars (6 Cards) */}
      <div
        className="max-w-[1250px] mx-auto mt-14 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 px-2 box-border w-full"
        data-aos="fade-up"
      >
        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-shield-halved text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              UP TO 7 YEARS WARRANTY
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Official Written Guarantee
            </span>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-user-shield text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              CERTIFIED MASTER DETAILERS
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Paint Correction & PPF Artisans
            </span>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-temperature-arrow-up text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              DUST-FREE STUDIO BAYS
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Infrared Curing & CRI 95+ Lighting
            </span>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-car-side text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              DOORSTEP PICK UP & DROP
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Insured Transit Across Pune
            </span>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-chart-line text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              DIGITAL PAINT AUDIT
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Thickness & Gloss Verification
            </span>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-4.5 bg-[#0D0C0B] hover:bg-[#1B1716] border border-[rgba(224,216,213,0.08)] hover:border-[#D40000]/40 rounded-[1.15rem] transition-all duration-350 box-border text-left hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,0,0,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[#1B1716] group-hover:bg-[#D40000] border border-[rgba(224,216,213,0.12)] group-hover:border-[#D40000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
            <i className="fa-solid fa-handshake-simple text-[#D40000] group-hover:text-white text-lg transition-colors duration-300"></i>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[#E0D8D5] text-[0.85rem] font-extrabold tracking-wide uppercase leading-tight">
              100% TRANSPARENCY
            </span>
            <span className="text-neutral-400 text-[0.74rem] leading-snug font-medium">
              Zero Hidden Costs & Free Estimate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
