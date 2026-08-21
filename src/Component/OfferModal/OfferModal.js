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
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 3 },
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        zIndex: 1300,
      }}
    >
      <Box
        className="premium-offer-card animate__animated animate__zoomIn"
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "88vh",
          overflowY: "auto",
          bgcolor: "#121212",
          borderRadius: "1.5rem",
          border: "1px solid rgba(235, 187, 141, 0.35)",
          boxShadow:
            "0 25px 70px rgba(0, 0, 0, 0.9), 0 0 45px rgba(235, 187, 141, 0.18)",
          outline: "none",
          p: { xs: 2.25, sm: 3.5 },
          boxSizing: "border-box",
        }}
      >
        {/* Floating Top-Right Close Button */}
        <button
          className="premium-offer-close-btn"
          onClick={handleClose}
          aria-label="Close Offer Popup"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* When NO offers are currently active */}
        {!hasActiveOffers ? (
          <div className="premium-offer-empty-state">
            <div className="premium-offer-empty-icon-wrap">
              <i className="fa-solid fa-flag-checkered premium-offer-empty-icon"></i>
            </div>
            <div className="premium-offer-empty-badge">
              <i className="fa-solid fa-gauge-high"></i> GARAGE RUNNING FULL THROTTLE 🏎️💨
            </div>
            <h2 id="offer-modal-title" className="premium-offer-empty-title">
              NO ACTIVE OFFERS CURRENTLY
            </h2>
            <p id="offer-modal-description" className="premium-offer-empty-desc">
              Our detailing bays and infrared curing lamps are running at maximum RPM! We don't have ongoing discount promotions right now, but every machine booked still gets our championship-level mirror gloss, 3-stage chemical decontamination, and 100% transparent pricing.
            </p>
            <div className="premium-offer-empty-features">
              <div className="empty-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Zero Advance Required</span>
              </div>
              <div className="empty-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Certified Master Artisans</span>
              </div>
              <div className="empty-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Doorstep Pick-up & Drop</span>
              </div>
            </div>
            <SmoothScrollingLink to="booking">
              <button
                className="premium-offer-empty-cta-btn"
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
            <div className="premium-offer-header-center">
              <span className="premium-offer-top-badge">
                <i className="fa-solid fa-sparkles"></i> {config.modalTitle || "STUDIO SPECIAL OFFERS"}
              </span>
              <h2 id="offer-modal-title" className="premium-offer-main-title">
                EXCLUSIVE STUDIO DEALS
              </h2>
              <p id="offer-modal-description" className="premium-offer-main-sub">
                {config.modalSubtitle ||
                  "Apply coupon codes during booking to enjoy instant discounts and complimentary services."}
              </p>
            </div>

            {/* Dynamic List of Active Offers */}
            <div className="premium-offer-list">
              {activeOffers.map((offer) => (
                <div key={offer.id} className="premium-offer-item-card">
                  {/* Offer Card Top Row */}
                  <div className="premium-offer-item-header">
                    <div className="premium-offer-item-title-group">
                      <span className="premium-offer-item-badge">{offer.badge}</span>
                      <h3 className="premium-offer-item-name">{offer.name}</h3>
                    </div>
                    <div className="premium-offer-discount-tag">
                      {offer.discountType === "percentage"
                        ? `${offer.discountValue}% OFF`
                        : `₹${offer.discountValue.toLocaleString("en-IN")} OFF`}
                    </div>
                  </div>

                  {/* Offer Description */}
                  <p className="premium-offer-item-desc">{offer.description}</p>

                  {/* Offer Highlights */}
                  {offer.highlights && offer.highlights.length > 0 && (
                    <ul className="premium-offer-item-highlights">
                      {offer.highlights.map((point, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-circle-check"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Promo Code & Action Strip */}
                  <div className="premium-offer-item-footer">
                    <div
                      className="premium-offer-code-pill"
                      onClick={() => handleCopyCode(offer.code)}
                      title="Click to copy code"
                    >
                      <span className="premium-offer-code-txt">{offer.code}</span>
                      <button className="premium-offer-pill-copy-btn">
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
                        className="premium-offer-apply-btn"
                        onClick={() => handleApplyCoupon(offer.code)}
                      >
                        <i className="fa-solid fa-bolt"></i> APPLY CODE
                      </button>
                    </SmoothScrollingLink>
                  </div>

                  {/* Validity text */}
                  {offer.validity && (
                    <span className="premium-offer-item-validity">
                      <i className="fa-regular fa-clock"></i> {offer.validity}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Dismiss */}
            <div className="premium-offer-dismiss-wrap">
              <button className="premium-offer-dismiss-btn" onClick={handleClose}>
                Close & Continue Browsing
              </button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default OfferModal;
