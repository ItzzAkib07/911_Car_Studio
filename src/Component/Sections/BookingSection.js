import React, { useRef, useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "react-datepicker";
import SmoothScrollingLink from "../SmoothScrollingLink";
import {
  getServicePrice,
  calculateDiscount,
  offerModalConfig,
  availableOffers,
} from "../data/offerData";

const BookingSection = () => {
  const form = useRef();
  const [getName, setName] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getModal, setModal] = useState("");
  const [getService, setService] = useState("");
  const [getQuery, setQuery] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [getAddress, setAddress] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showFields, setShowFields] = useState(false);

  // Coupon / Offers State
  const [hasCoupon, setHasCoupon] = useState(false);
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [appliedCouponResult, setAppliedCouponResult] = useState(null);
  const [couponMessage, setCouponMessage] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const toggleFields = () => {
    setShowFields(!showFields);
  };

  // Helper: Run coupon calculation and set states
  const applyCouponLogic = useCallback(
    (code, currentService) => {
      if (!code || !code.trim()) {
        setCouponMessage({
          type: "error",
          text: "Please enter a valid coupon code.",
        });
        setAppliedCouponResult(null);
        return;
      }

      const result = calculateDiscount(code, currentService);

      if (result.isValid) {
        setAppliedCouponResult(result);
        setCouponMessage({
          type: "success",
          text: result.message,
        });
      } else {
        setAppliedCouponResult(null);
        setCouponMessage({
          type: "error",
          text: result.message,
        });
      }
    },
    []
  );

  // Listen for global "apply_studio_coupon" event (e.g. triggered from OfferModal)
  useEffect(() => {
    const handleGlobalCouponApply = (event) => {
      if (event.detail && event.detail.code) {
        const code = event.detail.code;
        setHasCoupon(true);
        setCouponCodeInput(code);
        applyCouponLogic(code, getService);
      }
    };

    window.addEventListener("apply_studio_coupon", handleGlobalCouponApply);
    return () => {
      window.removeEventListener(
        "apply_studio_coupon",
        handleGlobalCouponApply
      );
    };
  }, [getService, applyCouponLogic]);

  // Recalculate discount whenever service changes if a coupon is already applied
  const handleServiceChange = (e) => {
    const newService = e.target.value;
    setService(newService);

    if (hasCoupon && appliedCouponResult && appliedCouponResult.coupon) {
      applyCouponLogic(appliedCouponResult.coupon.code, newService);
    }
  };

  // Toggle "Have a coupon code?" checkbox
  const handleCouponToggle = (e) => {
    const isChecked = e.target.checked;
    setHasCoupon(isChecked);
    if (!isChecked) {
      // Reset coupon states when unchecked
      setCouponCodeInput("");
      setAppliedCouponResult(null);
      setCouponMessage(null);
    }
  };

  // Handle Manual "APPLY" click
  const handleApplyCouponClick = (e) => {
    e.preventDefault();
    applyCouponLogic(couponCodeInput, getService);
  };

  // Handle "REMOVE" coupon click
  const handleRemoveCoupon = () => {
    setCouponCodeInput("");
    setAppliedCouponResult(null);
    setCouponMessage(null);
  };

  // Function to completely reset the booking form
  const handleResetForm = () => {
    setName("");
    setPhone("");
    setModal("");
    setService("");
    setQuery("");
    setFromDate(null);
    setAddress("");
    setShowFields(false);
    setHasCoupon(false);
    setCouponCodeInput("");
    setAppliedCouponResult(null);
    setCouponMessage(null);
    toast.info("Booking form has been reset.");
  };

  // Check if offers are currently enabled and active
  const isOffersActive =
    offerModalConfig.enabled && availableOffers.some((o) => o.isActive);

  // Pricing values for UI & email
  const baseServicePrice = getServicePrice(getService);
  const isCouponApplied =
    hasCoupon && appliedCouponResult && appliedCouponResult.isValid;
  const originalPriceFormatted =
    baseServicePrice > 0
      ? `₹${baseServicePrice.toLocaleString("en-IN")}`
      : "Standard Studio Estimate";
  const discountAmount = isCouponApplied
    ? appliedCouponResult.discountAmount
    : 0;
  const finalPayableAmount = isCouponApplied
    ? appliedCouponResult.finalAmount
    : baseServicePrice;
  const finalPriceFormatted =
    finalPayableAmount > 0
      ? `₹${finalPayableAmount.toLocaleString("en-IN")}`
      : baseServicePrice > 0
      ? `₹${baseServicePrice.toLocaleString("en-IN")}`
      : "Standard Studio Estimate";

  const priceSummaryText = isCouponApplied
    ? `Original: ₹${baseServicePrice.toLocaleString(
        "en-IN"
      )} | Coupon Applied: ${
        appliedCouponResult.coupon.code
      } (-₹${discountAmount.toLocaleString(
        "en-IN"
      )}) | Final Amount: ₹${finalPayableAmount.toLocaleString("en-IN")}`
    : `Service Price: ${originalPriceFormatted}`;

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      getName !== "" &&
      getPhone !== "" &&
      getModal !== "" &&
      getService !== ""
    ) {
      if (showFields) {
        if (fromDate && getAddress !== "") {
          emailjs
            .sendForm(
              "service_t7mpdet",
              "template_9drd373",
              form.current,
              "DTYHmwwee9kgpN9ZT"
            )
            .then(() => {
              toast(
                "Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon."
              );
              setTimeout(() => {
                window.location.reload(false);
              }, 5000);
            })
            .catch((error) => {
              toast.error(
                "Not able to book the service. Please check your connection or try again later."
              );
              console.log(error.text);
            });
        } else {
          toast.error("Please fill in the date and address fields.");
        }
      } else {
        emailjs
          .sendForm(
            "service_t7mpdet",
            "template_9drd373",
            form.current,
            "DTYHmwwee9kgpN9ZT"
          )
          .then(() => {
            toast(
              "Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon."
            );
            setTimeout(() => {
              window.location.reload(false);
            }, 5000);
          })
          .catch((error) => {
            toast.error(
              "Not able to book the service. Please check your connection or try again later."
            );
            console.log(error.text);
          });
      }
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <section className="premium-booking-section" id="booking">
      <div className="premium-booking-header" data-aos="fade-up">
        <span className="premium-services-label">RESERVATION</span>
        <h1 className="premium-services-title">BOOK YOUR SERVICE</h1>
        <div className="premium-services-line"></div>
        <p className="premium-services-subtitle">
          Schedule your detailing session with 911 Studio. Select your required
          package or request door-to-door pick up & drop across Pune.
        </p>
      </div>

      <div
        className="premium-booking-wrapper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form className="premium-booking-form" ref={form} onSubmit={sendEmail}>
          {/* Hidden Fields for EmailJS to include full Pricing & Coupon breakdown in email */}
          <input type="hidden" name="original_price" value={originalPriceFormatted} />
          <input
            type="hidden"
            name="coupon_code"
            value={isCouponApplied ? appliedCouponResult.coupon.code : "No Coupon Applied"}
          />
          <input
            type="hidden"
            name="offer_name"
            value={isCouponApplied ? appliedCouponResult.coupon.name : "None"}
          />
          <input
            type="hidden"
            name="discount_amount"
            value={isCouponApplied ? `₹${discountAmount.toLocaleString("en-IN")}` : "₹0"}
          />
          <input type="hidden" name="final_payable_amount" value={finalPriceFormatted} />
          <input type="hidden" name="pricing_summary" value={priceSummaryText} />

          {/* 2-Column Grid for Primary Inputs */}
          <div className="premium-booking-grid">
            {/* Full Name */}
            <div className="premium-input-group">
              <label className="premium-input-label">
                <i className="fa-solid fa-user"></i> Full Name *
              </label>
              <TextField
                id="name"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={getName}
                variant="standard"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiInput-root": {
                    color: "white",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #EBBB8D",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #EBBB8D",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Phone Number */}
            <div className="premium-input-group">
              <label className="premium-input-label">
                <i className="fa-solid fa-phone"></i> Phone Number *
              </label>
              <TextField
                id="phone"
                name="phone"
                placeholder="e.g. 1234567890"
                value={getPhone}
                variant="standard"
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiInput-root": {
                    color: "white",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #EBBB8D",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #EBBB8D",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Vehicle / Car Model */}
            <div className="premium-input-group">
              <label className="premium-input-label">
                <i className="fa-solid fa-car"></i> Vehicle / Car Model *
              </label>
              <TextField
                id="modal"
                name="modal"
                placeholder="e.g. Porsche 911 / BMW 3 Series / Thar"
                value={getModal}
                variant="standard"
                autoComplete="off"
                onChange={(e) => setModal(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiInput-root": {
                    color: "white",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #EBBB8D",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #EBBB8D",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Select Service */}
            <div className="premium-input-group">
              <label className="premium-input-label">
                <i className="fa-solid fa-screwdriver-wrench"></i> Select Service *
              </label>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <Select
                  id="serviceType"
                  name="serviceType"
                  value={getService}
                  displayEmpty
                  onChange={handleServiceChange}
                  sx={{
                    color: getService ? "#F5D5B5" : "rgba(255, 255, 255, 0.4)",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                    boxSizing: "border-box",
                    "& .MuiSelect-select": {
                      padding: "0 !important",
                      height: "38px",
                      display: "flex",
                      alignItems: "center",
                      boxSizing: "border-box",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #EBBB8D",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #EBBB8D",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#EBBB8D",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "#1a1a1a",
                        border: "1px solid rgba(235, 187, 141, 0.25)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
                        "& .MuiMenuItem-root": {
                          color: "#eee",
                          fontSize: "0.9rem",
                          padding: "0.75rem 1.25rem",
                          "&:hover": {
                            bgcolor: "rgba(235, 187, 141, 0.15)",
                            color: "#EBBB8D",
                          },
                          "&.Mui-selected": {
                            bgcolor: "rgba(235, 187, 141, 0.25)",
                            color: "#EBBB8D",
                            fontWeight: 700,
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>Choose a detailing package...</em>
                  </MenuItem>
                  <MenuItem value="Paint Protection Film (PPF)">
                    Paint Protection Film (PPF) — ₹44,999
                  </MenuItem>
                  <MenuItem value="Ceramic & Graphene Coating">
                    Ceramic & Graphene Coating — ₹12,999
                  </MenuItem>
                  <MenuItem value="Paint Correction & Polish">
                    Paint Correction & Polish — ₹4,999
                  </MenuItem>
                  <MenuItem value="Exterior Detailing & Car Spa">
                    Exterior Detailing & Car Spa — ₹1,499
                  </MenuItem>
                  <MenuItem value="Interior Deep Detailing">
                    Interior Deep Detailing — ₹3,499
                  </MenuItem>
                  <MenuItem value="Periodic General Service">
                    Periodic General Service — ₹2,499
                  </MenuItem>
                  <MenuItem value="Full Custom Detailing Package">
                    Full Custom Detailing Package — ₹19,999
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Full Width Query / Special Requirements */}
          <div className="premium-input-group premium-input-full">
            <label className="premium-input-label">
              <i className="fa-solid fa-comment-dots"></i> Special Requirements / Query (Optional)
            </label>
            <TextField
              id="details"
              name="details"
              placeholder="Tell us about your requirements, specific paint defects, or preferred time..."
              value={getQuery}
              variant="standard"
              autoComplete="off"
              multiline
              rows={2}
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                width: "100%",
                "& .MuiInput-root": {
                  color: "white",
                  fontSize: "0.95rem",
                  borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                  padding: "0.4rem 0",
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid #EBBB8D",
                  },
                  "&.Mui-focused:after": {
                    borderBottom: "2px solid #EBBB8D",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255, 255, 255, 0.35)",
                  opacity: 1,
                },
              }}
            />
          </div>

          {/* =========================================================
              COUPON / OFFERS SECTION (Opt-In Checkbox & Box)
              ========================================================= */}
          <div className="premium-coupon-toggle-card">
            <div className="premium-coupon-toggle-row">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hasCoupon}
                      onChange={handleCouponToggle}
                      sx={{
                        color: "rgba(235, 187, 141, 0.6)",
                        "&.Mui-checked": {
                          color: "#EBBB8D",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="premium-coupon-checkbox-label">
                      <i className="fa-solid fa-tags"></i> Have a coupon code?
                    </span>
                  }
                />
              </FormGroup>

              {/* Dynamic See all offers or Studio Full Boost button */}
              {isOffersActive ? (
                <button
                  type="button"
                  className="premium-coupon-see-offers-btn"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open_offer_modal"))
                  }
                >
                  <i className="fa-solid fa-sparkles"></i> See All Offers{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              ) : (
                <button
                  type="button"
                  className="premium-coupon-no-offers-pill-btn"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open_offer_modal"))
                  }
                  title="Studio running at maximum capacity"
                >
                  <i className="fa-solid fa-gauge-high"></i> Studio Full Boost{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </button>
              )}
            </div>

            {/* Expanded Coupon Code Input Field */}
            {hasCoupon && (
              <div className="premium-coupon-expanded-box animate__animated animate__fadeIn">
                {/* Playful notice banner when no active offers are available */}
                {!isOffersActive && (
                  <div className="premium-coupon-no-offers-banner animate__animated animate__fadeIn">
                    <div className="no-offers-banner-icon">
                      <i className="fa-solid fa-flag-checkered"></i>
                    </div>
                    <div className="no-offers-banner-text">
                      <strong>Garage Running at Full Throttle! 🏎️💨</strong>
                      <p>
                        Our detailing bays and infrared curing lamps are running at maximum RPM! We don't have ongoing discount coupon drops right now, but every vehicle booked still receives our championship-grade mirror gloss, 3-stage chemical decontamination, and 100% zero-advance booking guarantee!
                      </p>
                    </div>
                  </div>
                )}

                <div className="premium-coupon-input-group">
                  <div className="premium-coupon-input-wrap">
                    <i className="fa-solid fa-ticket premium-coupon-icon"></i>
                    <input
                      type="text"
                      className="premium-coupon-input"
                      placeholder="Enter promo code (e.g. STUDIO911)"
                      value={couponCodeInput}
                      onChange={(e) =>
                        setCouponCodeInput(e.target.value.toUpperCase())
                      }
                      autoComplete="off"
                    />
                  </div>

                  {isCouponApplied ? (
                    <button
                      type="button"
                      className="premium-coupon-remove-btn"
                      onClick={handleRemoveCoupon}
                    >
                      <i className="fa-solid fa-xmark"></i> REMOVE
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="premium-coupon-apply-btn"
                      onClick={handleApplyCouponClick}
                    >
                      <i className="fa-solid fa-check"></i> APPLY
                    </button>
                  )}
                </div>

                {/* Validation Status Message */}
                {couponMessage && (
                  <div
                    className={`premium-coupon-status-msg ${
                      couponMessage.type === "success"
                        ? "msg-success"
                        : "msg-error"
                    }`}
                  >
                    <i
                      className={`fa-solid ${
                        couponMessage.type === "success"
                          ? "fa-circle-check"
                          : "fa-circle-exclamation"
                      }`}
                    ></i>
                    <span>{couponMessage.text}</span>
                  </div>
                )}

                {/* Bottom link to view offers or pricing */}
                {isOffersActive ? (
                  <div className="premium-coupon-footer-help">
                    <span>Looking for active discount codes?</span>
                    <button
                      type="button"
                      className="premium-coupon-footer-link"
                      onClick={() =>
                        window.dispatchEvent(new CustomEvent("open_offer_modal"))
                      }
                    >
                      Browse Studio Offers & Deals <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                ) : (
                  <div className="premium-coupon-footer-help">
                    <span>Want to check our studio package specifications?</span>
                    <SmoothScrollingLink to="pricing">
                      <button type="button" className="premium-coupon-footer-link">
                        Explore All Detailing Plans <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </SmoothScrollingLink>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* =========================================================
              LIVE PRICING BREAKDOWN CARD (Visible when service selected or coupon applied)
              ========================================================= */}
          {baseServicePrice > 0 && (
            <div className="premium-price-breakdown-card animate__animated animate__fadeIn">
              <div className="price-breakdown-header">
                <span className="price-breakdown-title">
                  <i className="fa-solid fa-receipt"></i> ESTIMATED SERVICE SUMMARY
                </span>
                <span className="price-service-name">{getService}</span>
              </div>

              <div className="price-breakdown-body">
                {/* Original Base Price */}
                <div className="price-breakdown-row">
                  <span className="price-row-label">Original Package Price</span>
                  <span className="price-row-value">
                    ₹{baseServicePrice.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Applied Discount Row */}
                {isCouponApplied && (
                  <div className="price-breakdown-row discount-row">
                    <span className="price-row-label">
                      <i className="fa-solid fa-tag"></i> Coupon Discount ({appliedCouponResult.coupon.code})
                    </span>
                    <span className="price-row-value discount-value">
                      - ₹{discountAmount.toLocaleString("en-IN")}{" "}
                      {appliedCouponResult.coupon.discountType === "percentage"
                        ? `(${appliedCouponResult.coupon.discountValue}% OFF)`
                        : ""}
                    </span>
                  </div>
                )}

                <div className="price-breakdown-divider"></div>

                {/* Final Total Row */}
                <div className="price-breakdown-row total-row">
                  <span className="price-total-label">Final Estimated Amount</span>
                  <span className="price-total-value">
                    ₹{finalPayableAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="price-breakdown-footnote">
                <i className="fa-solid fa-shield-halved"></i> 100% Transparency • No Hidden Taxes or Surcharges
              </div>
            </div>
          )}

          {/* Pick-Up & Drop Service Toggle Box */}
          <div className="premium-pickup-toggle-card">
            <div className="premium-pickup-toggle-content">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showFields}
                      onChange={toggleFields}
                      sx={{
                        color: "rgba(235, 187, 141, 0.6)",
                        "&.Mui-checked": {
                          color: "#EBBB8D",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="premium-pickup-checkbox-label">
                      <i className="fa-solid fa-truck-pickup"></i> Want Doorstep
                      Pick-up & Drop Service?
                    </span>
                  }
                />
              </FormGroup>
              <span className="premium-pickup-badge">
                <i className="fa-solid fa-shield-halved"></i> Safe & Insured
                Transit
              </span>
            </div>

            <SmoothScrollingLink to="pricing">
              <span className="premium-pickup-plans-link">
                View Pricing Plans{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </SmoothScrollingLink>
          </div>

          {/* Animated Conditional Pickup Fields */}
          {showFields && (
            <div className="premium-pickup-expanded-fields animate__animated animate__fadeIn">
              <div className="premium-pickup-info-banner">
                <i className="fa-solid fa-circle-info"></i>
                <span>
                  Please specify your preferred date, time, and exact pickup
                  address across Pune.
                </span>
              </div>

              <div className="premium-booking-grid">
                {/* Pick-Up Date & Time */}
                <div className="premium-input-group">
                  <label className="premium-input-label">
                    <i className="fa-solid fa-calendar-days"></i> Pick-up Date &
                    Time *
                  </label>
                  <div className="premium-datepicker-wrapper">
                    <DatePicker
                      id="pickupDate"
                      name="pickupDate"
                      selected={fromDate}
                      onChange={handleFromDateChange}
                      showTimeSelect
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="yyyy-MM-dd HH:mm"
                      minDate={currentDate}
                      placeholderText="Select pickup date and time"
                      isClearable
                      className="premium-custom-datepicker-input"
                      autoComplete="off"
                    />
                    <i className="fa-solid fa-clock premium-datepicker-clock-icon"></i>
                  </div>
                </div>

                {/* Pick-Up Address */}
                <div className="premium-input-group">
                  <label className="premium-input-label">
                    <i className="fa-solid fa-location-dot"></i> Complete Pick-up
                    Address *
                  </label>
                  <TextField
                    id="address"
                    name="address"
                    placeholder="Flat / Building, Landmark, Area, Pune"
                    value={getAddress}
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                    sx={{
                      width: "100%",
                      "& .MuiInput-root": {
                        color: "white",
                        fontSize: "0.95rem",
                        height: "38px",
                        borderBottom: "1px solid rgba(235, 187, 141, 0.25)",
                        boxSizing: "border-box",
                        "&:hover:not(.Mui-disabled):before": {
                          borderBottom: "1px solid #EBBB8D",
                        },
                        "&.Mui-focused:after": {
                          borderBottom: "2px solid #EBBB8D",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "0",
                        height: "38px",
                        boxSizing: "border-box",
                        lineHeight: "38px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "rgba(255, 255, 255, 0.35)",
                        opacity: 1,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons: Confirm & Reset */}
          <div className="premium-booking-action">
            <div className="premium-booking-btn-group">
              <button className="premium-booking-submit-btn" type="submit">
                CONFIRM APPOINTMENT {isCouponApplied ? `(₹${finalPayableAmount.toLocaleString("en-IN")})` : ""} <i className="fa-solid fa-arrow-right"></i>
              </button>

              <button
                type="button"
                className="premium-booking-reset-btn"
                onClick={handleResetForm}
                title="Clear and reset all booking form fields"
              >
                <i className="fa-solid fa-rotate-left"></i> RESET BOOKING
              </button>
            </div>

            {/* Trust badges */}
            <div className="premium-booking-trust-strip">
              <span>
                <i className="fa-solid fa-check-circle"></i> Zero Advance Required
              </span>
              <span className="dot">•</span>
              <span>
                <i className="fa-solid fa-bolt"></i> Same-Day Response
              </span>
              <span className="dot">•</span>
              <span>
                <i className="fa-solid fa-shield-heart"></i> 100% Satisfaction Guarantee
              </span>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookingSection;
