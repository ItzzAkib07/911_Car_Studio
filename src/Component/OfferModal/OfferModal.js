import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SmoothScrollingLink from "../SmoothScrollingLink";
import { availableOffers, offerModalConfig } from "../data/offerData";

const OfferModal = ({ isEnabled, customConfig }) => {
  const config = customConfig || offerModalConfig;
  const active = isEnabled !== undefined ? isEnabled : config.enabled;

  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  // Active offers list
  const activeOffers = availableOffers.filter((o) => o.isActive);

  // Automatically open the offer popup after a short delay only if offers are active
  useEffect(() => {
    if (!active || activeOffers.length === 0) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [active, activeOffers.length]);

  // Listen for on-demand open requests (e.g. from "See all offers" button in BookingSection)
  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("open_offer_modal", handleOpenModal);
    return () => {
      window.removeEventListener("open_offer_modal", handleOpenModal);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCopyCode = (code) => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const handleApplyCoupon = (code) => {
    // Dispatch global event for BookingSection to auto-check and apply coupon
    window.dispatchEvent(
      new CustomEvent("apply_studio_coupon", { detail: { code } })
    );
    handleClose();
  };

  const hasActiveOffers = active && activeOffers.length > 0;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="offer-modal-title"
      aria-describedby="offer-modal-description"
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        p: { xs: 1, sm: 2, md: 3 },
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        zIndex: 1300,
      }}
    >
      <Box
        className="animate__animated animate__fadeInUp"
        onClick={(e) => e.stopPropagation()}
        sx={{
          outline: "none",
          width: "100%",
          maxWidth: { xs: "320px", sm: "360px", md: "410px" },
          maxHeight: { xs: "64vh", sm: "70vh", md: "74vh" },
          overflowY: "auto",
        }}
      >
        <div className="relative w-full bg-gradient-to-br from-[#181818] via-[#111111] to-[#0a0a0a] border border-[#EBBB8D]/35 rounded-2xl max-md:rounded-xl p-6 max-md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(235,187,141,0.16)] box-border">
          {/* Floating Top-Right Close Button */}
          <button
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#EBBB8D]/10 border border-[#EBBB8D]/30 text-[#EBBB8D] flex items-center justify-center text-sm cursor-pointer hover:bg-[#EBBB8D] hover:text-[#111] hover:rotate-90 hover:scale-105 transition-all duration-300 shadow-md z-10"
            onClick={handleClose}
            aria-label="Close Offer Popup"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* When NO offers are currently active */}
          {!hasActiveOffers ? (
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-13 h-13 rounded-full bg-[#EBBB8D]/10 border border-[#EBBB8D]/30 flex items-center justify-center mb-3.5 shadow-[0_0_20px_rgba(235,187,141,0.2)]">
                <i className="fa-solid fa-flag-checkered text-xl text-[#EBBB8D]"></i>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold tracking-[0.1rem] uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] py-1 px-3 rounded-full mb-2.5">
                <i className="fa-solid fa-gauge-high"></i> GARAGE RUNNING FULL THROTTLE 🏎️💨
              </div>
              <h2 id="offer-modal-title" className="text-lg font-black text-white mb-2 tracking-wide">
                NO ACTIVE OFFERS CURRENTLY
              </h2>
              <p id="offer-modal-description" className="text-[0.78rem] text-neutral-400 leading-relaxed max-w-[360px] mx-auto mb-4">
                Our detailing bays and infrared curing lamps are running at maximum RPM! We don't have ongoing discount promotions right now, but every machine booked still gets our championship-level mirror gloss, 3-stage chemical decontamination, and 100% transparent pricing.
              </p>
              <div className="flex items-center justify-center flex-wrap gap-2.5 mb-5">
                <div className="inline-flex items-center gap-1.5 text-[0.72rem] text-neutral-300">
                  <i className="fa-solid fa-circle-check text-[#EBBB8D] text-xs"></i>
                  <span>Zero Advance Required</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[0.72rem] text-neutral-300">
                  <i className="fa-solid fa-circle-check text-[#EBBB8D] text-xs"></i>
                  <span>Certified Master Artisans</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[0.72rem] text-neutral-300">
                  <i className="fa-solid fa-circle-check text-[#EBBB8D] text-xs"></i>
                  <span>Doorstep Pick-up & Drop</span>
                </div>
              </div>
              <SmoothScrollingLink to="booking">
                <button
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-[#EBBB8D] to-[#C99765] text-[#111] text-[0.72rem] font-extrabold tracking-wider rounded-full cursor-pointer hover:from-[#F5D5B5] hover:to-[#e0a365] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(235,187,141,0.5)] transition-all duration-250 shadow-[0_4px_15px_rgba(235,187,141,0.3)] border-none uppercase"
                  onClick={handleClose}
                >
                  <i className="fa-solid fa-calendar-check"></i> PROCEED WITH STANDARD BOOKING
                </button>
              </SmoothScrollingLink>
            </div>
          ) : (
            /* When Offers ARE active */
            <>
              {/* Modal Top Header */}
              <div className="text-center mb-4.5 px-2">
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold tracking-[0.12rem] uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] via-[#F5D5B5] to-[#C99765] py-1 px-3 rounded-full shadow-[0_4px_12px_rgba(235,187,141,0.35)] mb-2">
                  <i className="fa-solid fa-sparkles"></i> {config.modalTitle || "STUDIO SPECIAL OFFERS"}
                </span>
                <h2 id="offer-modal-title" className="text-xl max-sm:text-lg font-black tracking-wide m-0 mb-1 bg-gradient-to-r from-white via-neutral-100 to-[#EBBB8D] bg-clip-text text-transparent">
                  EXCLUSIVE STUDIO DEALS
                </h2>
                <p id="offer-modal-description" className="text-[0.78rem] text-neutral-400 m-0 leading-snug">
                  {config.modalSubtitle ||
                    "Apply coupon codes during booking to enjoy instant discounts and complimentary services."}
                </p>
              </div>

              {/* Dynamic List of Active Offers */}
              <div className="flex flex-col gap-3.5 mb-4">
                {activeOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white/[0.03] border border-[#EBBB8D]/25 rounded-2xl p-4 transition-all duration-300 relative hover:border-[#EBBB8D]/50 hover:bg-[#EBBB8D]/5 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
                  >
                    {/* Offer Card Top Row */}
                    <div className="flex items-start justify-between gap-2.5 mb-1.5">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.6rem] font-extrabold tracking-wider text-[#EBBB8D] uppercase">
                          {offer.badge}
                        </span>
                        <h3 className="text-base font-extrabold text-white m-0">
                          {offer.name}
                        </h3>
                      </div>
                      <div className="text-[0.85rem] font-black text-[#111] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] py-1 px-2.5 rounded-full whitespace-nowrap tracking-wide shadow-[0_3px_10px_rgba(235,187,141,0.3)]">
                        {offer.discountType === "percentage"
                          ? `${offer.discountValue}% OFF`
                          : `₹${offer.discountValue.toLocaleString("en-IN")} OFF`}
                      </div>
                    </div>

                    {/* Offer Description */}
                    <p className="text-[0.78rem] text-neutral-400 leading-snug mb-2.5">
                      {offer.description}
                    </p>

                    {/* Offer Highlights */}
                    {offer.highlights && offer.highlights.length > 0 && (
                      <ul className="list-none p-0 m-0 mb-3 flex flex-col gap-1.5">
                        {offer.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[0.74rem] text-neutral-300">
                            <i className="fa-solid fa-circle-check text-[#EBBB8D] text-xs"></i>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Promo Code & Action Strip */}
                    <div className="flex items-center justify-between gap-2.5 flex-wrap pt-2.5 border-t border-dashed border-[#EBBB8D]/20">
                      <div
                        className="inline-flex items-center gap-1.5 bg-[#EBBB8D]/10 border border-dashed border-[#EBBB8D]/40 py-1 px-2.5 rounded-xl cursor-pointer hover:bg-[#EBBB8D]/20 hover:border-[#EBBB8D] transition-all duration-250"
                        onClick={() => handleCopyCode(offer.code)}
                        title="Click to copy code"
                      >
                        <span className="text-[0.82rem] font-extrabold tracking-wider text-[#EBBB8D]">
                          {offer.code}
                        </span>
                        <button className="bg-[#EBBB8D] text-[#111] border-none rounded py-0.5 px-1.5 text-[0.62rem] font-extrabold inline-flex items-center gap-1 cursor-pointer hover:bg-[#F5D5B5] transition-colors">
                          <i
                            className={`fa-solid ${
                              copiedCode === offer.code ? "fa-check" : "fa-copy"
                            }`}
                          ></i>
                          <span>{copiedCode === offer.code ? "COPIED" : "COPY"}</span>
                        </button>
                      </div>

                      <SmoothScrollingLink to="booking">
                        <button
                          className="inline-flex items-center gap-1.5 text-[0.72rem] font-extrabold tracking-wider uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] py-1.5 px-3.5 rounded-full cursor-pointer hover:from-[#F5D5B5] hover:to-[#e0a365] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(235,187,141,0.5)] transition-all duration-250 shadow-[0_4px_12px_rgba(235,187,141,0.3)] border-none"
                          onClick={() => handleApplyCoupon(offer.code)}
                        >
                          <i className="fa-solid fa-bolt"></i> APPLY CODE
                        </button>
                      </SmoothScrollingLink>
                    </div>

                    {/* Validity text */}
                    {offer.validity && (
                      <span className="block text-[0.68rem] text-white/40 mt-1.5">
                        <i className="fa-regular fa-clock"></i> {offer.validity}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Dismiss */}
              <div className="text-center mt-2.5">
                <button
                  className="bg-transparent border-none text-white/45 text-xs font-semibold cursor-pointer py-1 hover:text-[#EBBB8D] hover:underline transition-colors"
                  onClick={handleClose}
                >
                  Close & Continue Browsing
                </button>
              </div>
            </>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default OfferModal;
