import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SmoothScrollingLink from "../SmoothScrollingLink";
import { pricingPlans } from "../data/pricingData";

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
  bgcolor: "#141414",
  border: "1px solid rgba(235, 187, 141, 0.3)",
  borderRadius: "1.25rem",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(235, 187, 141, 0.15)",
  p: { xs: 2.5, sm: 3.5 },
  outline: "none",
};

const PricingSection = () => {
  // Plan Details Dynamic Modal state
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  return (
    <section className="premium-pricing-section" id="pricing">
      <div className="premium-pricing-header" data-aos="fade-up">
        <span className="premium-services-label">OUR PACKAGES</span>
        <h1 className="premium-services-title">STUDIO PRICING</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Transparent luxury detailing plans with no hidden charges. Choose the
          perfection package tailored for your car.
        </p>
      </div>

      <div className="premium-pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`premium-pricing-card ${
              plan.badge ? "premium-pricing-featured" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={plan.delay}
          >
            {plan.badge && (
              <div className="premium-pricing-badge">{plan.badge}</div>
            )}
            <div className="premium-pricing-tier">{plan.tier}</div>
            <h2 className="premium-pricing-name">{plan.name}</h2>
            <span className="premium-pricing-sub">{plan.sub}</span>
            <div className="premium-pricing-price">
              <span className="premium-pricing-currency">₹</span>
              <span className="premium-pricing-amount">{plan.price}</span>
            </div>
            <div className="premium-pricing-divider"></div>
            <p
              className="premium-pricing-info"
              onClick={() => setSelectedPlanModal(plan)}
            >
              <i className="fa-solid fa-circle-info"></i> View service details
            </p>
            <SmoothScrollingLink to="booking">
              <button
                className={`premium-pricing-cta ${
                  plan.badge ? "premium-pricing-cta-filled" : ""
                }`}
              >
                BOOK SERVICE <i className="fa-solid fa-arrow-right"></i>
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
              color: "#EBBB8D",
              fontSize: "1.35rem",
              cursor: "pointer",
              mb: 1,
            }}
            onClick={() => setSelectedPlanModal(null)}
            aria-label="Close Details Modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </Box>
          {selectedPlanModal && (
            <>
              <div className="modal-header">
                <h2>
                  {selectedPlanModal.name}{" "}
                  <span>{selectedPlanModal.sub}</span>
                </h2>
              </div>
              <Box>
                <p
                  style={{
                    color: "rgb(180, 175, 175)",
                    fontSize: "0.86rem",
                    lineHeight: 1.55,
                    margin: "0 0 1rem 0",
                  }}
                >
                  {selectedPlanModal.description}
                </p>
                <ul className="serviceList">
                  {selectedPlanModal.points.map((pt, idx) => (
                    <li key={idx}>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Pricing Highlights & Studio Value Pillars */}
      <div className="premium-pricing-highlights" data-aos="fade-up">
        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">UP TO 7 YEARS WARRANTY</span>
            <span className="highlight-sub">Official Written Guarantee</span>
          </div>
        </div>

        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">CERTIFIED MASTER DETAILERS</span>
            <span className="highlight-sub">Paint Correction & PPF Artisans</span>
          </div>
        </div>

        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-temperature-arrow-up"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">DUST-FREE STUDIO BAYS</span>
            <span className="highlight-sub">
              Infrared Curing & CRI 95+ Lighting
            </span>
          </div>
        </div>

        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-car-side"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">DOORSTEP PICK UP & DROP</span>
            <span className="highlight-sub">Insured Transit Across Pune</span>
          </div>
        </div>

        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">DIGITAL PAINT AUDIT</span>
            <span className="highlight-sub">Thickness & Gloss Verification</span>
          </div>
        </div>

        <div className="premium-pricing-highlight">
          <div className="highlight-icon-wrap">
            <i className="fa-solid fa-handshake-simple"></i>
          </div>
          <div className="highlight-text-group">
            <span className="highlight-title">100% TRANSPARENCY</span>
            <span className="highlight-sub">
              Zero Hidden Costs & Free Estimate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
