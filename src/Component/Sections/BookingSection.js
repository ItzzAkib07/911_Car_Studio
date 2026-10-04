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
  const applyCouponLogic = useCallback((code, currentService) => {
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
  }, []);

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
        handleGlobalCouponApply,
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
        "en-IN",
      )} | Coupon Applied: ${
        appliedCouponResult.coupon.code
      } (-₹${discountAmount.toLocaleString(
        "en-IN",
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
              "DTYHmwwee9kgpN9ZT",
            )
            .then(() => {
              toast(
                "Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon.",
              );
              setTimeout(() => {
                window.location.reload(false);
              }, 5000);
            })
            .catch((error) => {
              toast.error(
                "Not able to book the service. Please check your connection or try again later.",
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
            "DTYHmwwee9kgpN9ZT",
          )
          .then(() => {
            toast(
              "Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon.",
            );
            setTimeout(() => {
              window.location.reload(false);
            }, 5000);
          })
          .catch((error) => {
            toast.error(
              "Not able to book the service. Please check your connection or try again later.",
            );
            console.log(error.text);
          });
      }
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <section
      id="booking"
      className="w-full py-20 max-md:py-12 px-8 max-md:px-4 relative overflow-hidden scroll-mt-20 box-border bg-[#010101]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 15%, rgba(212, 0, 0, 0.08) 0%, transparent 60%), radial-gradient(circle at center, rgba(13, 12, 11, 0.88) 0%, rgba(1, 1, 1, 0.98) 100%), url("/src/images/booking_background.png")',
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
          STUDIO APPOINTMENT
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-[#E0D8D5] m-0 hover:text-white transition-colors duration-200">
          BOOK YOUR DETAIL
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#D40000] via-[#510404] to-transparent my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          YOUR CAR. YOUR TIME. YOUR 911 EXPERIENCE. Schedule your detailing session or request door-to-door pick up & drop across Pune.
        </p>
      </div>

      <div
        className="max-w-[920px] mx-auto box-border"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form
          className="bg-[#0D0C0B] border border-[rgba(224,216,213,0.12)] rounded-[1.5rem] p-12 max-md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(212,0,0,0.15)] relative box-border before:content-[''] before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#D40000] before:to-transparent"
          ref={form}
          onSubmit={sendEmail}
        >
          {/* Hidden Fields for EmailJS to include full Pricing & Coupon breakdown in email */}
          <input
            type="hidden"
            name="original_price"
            value={originalPriceFormatted}
          />
          <input
            type="hidden"
            name="coupon_code"
            value={
              isCouponApplied
                ? appliedCouponResult.coupon.code
                : "No Coupon Applied"
            }
          />
          <input
            type="hidden"
            name="offer_name"
            value={isCouponApplied ? appliedCouponResult.coupon.name : "None"}
          />
          <input
            type="hidden"
            name="discount_amount"
            value={
              isCouponApplied
                ? `₹${discountAmount.toLocaleString("en-IN")}`
                : "₹0"
            }
          />
          <input
            type="hidden"
            name="final_payable_amount"
            value={finalPriceFormatted}
          />
          <input
            type="hidden"
            name="pricing_summary"
            value={priceSummaryText}
          />

          {/* 2-Column Grid for Primary Inputs */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6 mb-8 items-start box-border">
            {/* Full Name */}
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-user text-[#D40000] text-[0.85rem]"></i>{" "}
                Full Name *
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
                    color: "#E0D8D5",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #D40000",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #D40000",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(224, 216, 213, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-phone text-[#D40000] text-[0.85rem]"></i>{" "}
                Phone Number *
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
                    color: "#E0D8D5",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #D40000",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #D40000",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(224, 216, 213, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Vehicle / Car Model */}
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-car text-[#D40000] text-[0.85rem]"></i>{" "}
                Vehicle / Car Model *
              </label>
              <TextField
                id="modal"
                name="modal"
                placeholder="e.g. Porsche 911 / BMW M3 / Thar"
                value={getModal}
                variant="standard"
                autoComplete="off"
                onChange={(e) => setModal(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiInput-root": {
                    color: "#E0D8D5",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                    boxSizing: "border-box",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #D40000",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #D40000",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "0",
                    height: "38px",
                    boxSizing: "border-box",
                    lineHeight: "38px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(224, 216, 213, 0.35)",
                    opacity: 1,
                  },
                }}
              />
            </div>

            {/* Select Service */}
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-screwdriver-wrench text-[#D40000] text-[0.85rem]"></i>{" "}
                Select Service *
              </label>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <Select
                  id="serviceType"
                  name="serviceType"
                  value={getService}
                  displayEmpty
                  onChange={handleServiceChange}
                  sx={{
                    color: getService ? "#FFFFFF" : "rgba(224, 216, 213, 0.4)",
                    fontSize: "0.95rem",
                    height: "38px",
                    borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                    boxSizing: "border-box",
                    "& .MuiSelect-select": {
                      padding: "0 !important",
                      height: "38px",
                      display: "flex",
                      alignItems: "center",
                      boxSizing: "border-box",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #D40000",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #D40000",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#D40000",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "#0D0C0B",
                        border: "1px solid rgba(224, 216, 213, 0.15)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.9)",
                        "& .MuiMenuItem-root": {
                          color: "#E0D8D5",
                          fontSize: "0.9rem",
                          padding: "0.75rem 1.25rem",
                          "&:hover": {
                            bgcolor: "rgba(212, 0, 0, 0.15)",
                            color: "#FFFFFF",
                          },
                          "&.Mui-selected": {
                            bgcolor: "rgba(212, 0, 0, 0.25)",
                            color: "#FFFFFF",
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
          <div className="flex flex-col justify-start gap-2 w-full box-border col-span-2 mb-7">
            <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
              <i className="fa-solid fa-comment-dots text-[#D40000] text-[0.85rem]"></i>{" "}
              Special Requirements / Query (Optional)
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
                  color: "#E0D8D5",
                  fontSize: "0.95rem",
                  borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                  padding: "0.4rem 0",
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid #D40000",
                  },
                  "&.Mui-focused:after": {
                    borderBottom: "2px solid #D40000",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(224, 216, 213, 0.35)",
                  opacity: 1,
                },
              }}
            />
          </div>

          {/* =========================================================
              COUPON / OFFERS SECTION (Opt-In Checkbox & Box)
              ========================================================= */}
          <div className="w-full bg-[#1B1716]/40 border border-[rgba(224,216,213,0.12)] hover:border-[#D40000]/40 rounded-[1.25rem] p-5 max-md:p-4 mt-7 mb-0 box-border transition-colors duration-300">
            <div className="flex items-center justify-between flex-wrap gap-3.5">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hasCoupon}
                      onChange={handleCouponToggle}
                      sx={{
                        color: "rgba(224, 216, 213, 0.4)",
                        "&.Mui-checked": {
                          color: "#D40000",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="inline-flex items-center gap-2 text-[#E0D8D5] text-[0.95rem] font-bold tracking-wide">
                      <i className="fa-solid fa-tags text-[#D40000] text-base"></i>{" "}
                      Have a coupon code?
                    </span>
                  }
                />
              </FormGroup>

              {/* Dynamic See all offers or Studio Full Boost button */}
              {isOffersActive ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-extrabold tracking-wider uppercase text-white bg-[#D40000] hover:bg-[#510404] border-none rounded-full py-1.5 px-4 cursor-pointer transition-all duration-250 shadow-[0_4px_12px_rgba(212,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(212,0,0,0.5)]"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open_offer_modal"))
                  }
                >
                  <i className="fa-solid fa-sparkles"></i> See All Offers{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[0.76rem] font-extrabold tracking-wider text-[#E0D8D5] bg-[#1B1716] border border-[rgba(224,216,213,0.15)] hover:bg-[#D40000]/20 hover:text-white hover:border-[#D40000] rounded-full py-1.5 px-3.5 cursor-pointer transition-all duration-250 hover:-translate-y-0.5"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open_offer_modal"))
                  }
                  title="Studio running at maximum capacity"
                >
                  <i className="fa-solid fa-gauge-high text-[#D40000]"></i> Studio Full Boost{" "}
                  <i className="fa-solid fa-circle-info text-[0.7rem]"></i>
                </button>
              )}
            </div>

            {/* Expanded Coupon Code Input Field */}
            {hasCoupon && (
              <div className="mt-5 pt-4.5 border-t border-dashed border-[rgba(224,216,213,0.12)]">
                {/* Notice banner when no active offers are available */}
                {!isOffersActive && (
                  <div className="flex items-start gap-3.5 bg-[#0D0C0B] border border-dashed border-[rgba(224,216,213,0.2)] rounded-2xl p-4.5 mb-5">
                    <div className="text-2xl text-[#D40000] mt-0.5 shrink-0">
                      <i className="fa-solid fa-flag-checkered"></i>
                    </div>
                    <div>
                      <strong className="block text-[0.92rem] text-white mb-1.5 tracking-wide">
                        Garage Running at Full Throttle! 🏎️💨
                      </strong>
                      <p className="text-[0.82rem] text-neutral-400 m-0 leading-relaxed font-normal">
                        Our detailing bays and infrared curing lamps are running
                        at maximum RPM! We don't have ongoing discount coupon
                        drops right now, but every vehicle booked still receives
                        our championship-grade mirror gloss, 3-stage chemical
                        decontamination, and 100% zero-advance booking
                        guarantee!
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 w-full max-sm:flex-col">
                  <div className="flex-1 w-full flex items-center bg-[#1B1716] border border-[rgba(224,216,213,0.15)] focus-within:border-[#D40000] focus-within:shadow-[0_0_12px_rgba(212,0,0,0.25)] rounded-xl py-2 px-4 gap-2.5 transition-all duration-300 box-border">
                    <i className="fa-solid fa-ticket text-[#D40000] text-base"></i>
                    <input
                      type="text"
                      className="flex-1 bg-transparent border-none outline-none text-white text-[0.95rem] font-bold tracking-wider uppercase placeholder:normal-case placeholder:font-normal placeholder:tracking-normal placeholder:text-neutral-500"
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
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-5 text-[0.8rem] font-extrabold tracking-wider text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/30 rounded-xl cursor-pointer transition-all duration-300 whitespace-nowrap max-sm:w-full"
                      onClick={handleRemoveCoupon}
                    >
                      <i className="fa-solid fa-xmark"></i> REMOVE
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-6 text-[0.82rem] font-extrabold tracking-wider uppercase text-white bg-[#D40000] hover:bg-[#510404] border-none rounded-xl cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(212,0,0,0.4)] max-sm:w-full"
                      onClick={handleApplyCouponClick}
                    >
                      <i className="fa-solid fa-check"></i> APPLY
                    </button>
                  )}
                </div>

                {/* Validation Status Message */}
                {couponMessage && (
                  <div
                    className={`flex items-center gap-2 text-[0.84rem] font-semibold mt-3.5 py-2 px-3.5 rounded-lg border ${
                      couponMessage.type === "success"
                        ? "text-emerald-400 bg-emerald-500/[0.08] border-emerald-500/25"
                        : "text-red-400 bg-red-500/[0.08] border-red-500/25"
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
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-4.5 pt-3.5 border-t border-dashed border-[rgba(224,216,213,0.08)] text-[0.8rem] text-neutral-400">
                    <span>Looking for active discount codes?</span>
                    <button
                      type="button"
                      className="bg-transparent border-none text-[#D40000] hover:text-white hover:underline text-[0.82rem] font-bold cursor-pointer inline-flex items-center gap-1.5 p-0 transition-all duration-200"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("open_offer_modal"),
                        )
                      }
                    >
                      Browse Studio Offers & Deals{" "}
                      <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-4.5 pt-3.5 border-t border-dashed border-[rgba(224,216,213,0.08)] text-[0.8rem] text-neutral-400">
                    <span>
                      Want to check our studio package specifications?
                    </span>
                    <SmoothScrollingLink to="pricing">
                      <button
                        type="button"
                        className="bg-transparent border-none text-[#D40000] hover:text-white hover:underline text-[0.82rem] font-bold cursor-pointer inline-flex items-center gap-1.5 p-0 transition-all duration-200"
                      >
                        Explore All Detailing Plans{" "}
                        <i className="fa-solid fa-angle-right"></i>
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
            <div className="w-full bg-gradient-to-br from-[#1B1716]/80 to-[#0D0C0B] border-[1.5px] border-[#D40000]/35 rounded-[1.25rem] p-6 max-md:p-4 mt-7 mb-0 box-border shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(212,0,0,0.1)]">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3.5 border-b border-[rgba(224,216,213,0.1)] mb-4">
                <span className="text-[0.78rem] font-extrabold text-[#D40000] tracking-wider uppercase flex items-center gap-2">
                  <i className="fa-solid fa-receipt"></i> ESTIMATED SERVICE SUMMARY
                </span>
                <span className="text-[0.88rem] font-bold text-[#E0D8D5]">
                  {getService}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Original Base Price */}
                <div className="flex items-center justify-between text-[0.9rem] text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-solid fa-tag text-[#D40000]"></i> Original Package Price
                  </span>
                  <span className="font-bold text-white">
                    ₹{baseServicePrice.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Applied Discount Row */}
                {isCouponApplied && (
                  <div className="flex items-center justify-between text-[0.9rem] text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-tag"></i> Coupon Discount (
                      {appliedCouponResult.coupon.code})
                    </span>
                    <span className="font-extrabold">
                      - ₹{discountAmount.toLocaleString("en-IN")}{" "}
                      {appliedCouponResult.coupon.discountType === "percentage"
                        ? `(${appliedCouponResult.coupon.discountValue}% OFF)`
                        : ""}
                    </span>
                  </div>
                )}

                <div className="w-full h-px bg-[rgba(224,216,213,0.1)] my-1"></div>

                {/* Final Total Row */}
                <div className="flex items-center justify-between text-[1.05rem] pt-1">
                  <span className="font-extrabold text-[#E0D8D5] tracking-wide">
                    Final Estimated Amount
                  </span>
                  <span className="text-2xl font-black text-[#D40000] tracking-wide">
                    ₹{finalPayableAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[0.74rem] text-neutral-400 mt-4 pt-3 border-t border-dashed border-[rgba(224,216,213,0.08)]">
                <i className="fa-solid fa-shield-halved text-[#D40000]"></i> 100% Transparency
                • No Hidden Taxes or Surcharges
              </div>
            </div>
          )}

          {/* Pick-Up & Drop Service Toggle Box */}
          <div className="w-full bg-[#1B1716]/40 border border-[rgba(224,216,213,0.12)] hover:border-[#D40000]/40 rounded-[1.25rem] p-5 max-md:p-4 mt-7 mb-0 box-border transition-colors duration-300">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showFields}
                      onChange={toggleFields}
                      sx={{
                        color: "rgba(224, 216, 213, 0.4)",
                        "&.Mui-checked": {
                          color: "#D40000",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="inline-flex items-center gap-2 text-[#E0D8D5] text-[0.95rem] font-bold tracking-wide">
                      <i className="fa-solid fa-truck-pickup text-[#D40000] text-base"></i> Want Doorstep
                      Pick-up & Drop Service?
                    </span>
                  }
                />
              </FormGroup>
              <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-[#E0D8D5] bg-[#1B1716] border border-[rgba(224,216,213,0.15)] py-1 px-3.5 rounded-full">
                <i className="fa-solid fa-shield-halved text-[#D40000] text-xs"></i> Safe & Insured
                Transit
              </span>
            </div>

            <SmoothScrollingLink to="pricing">
              <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-neutral-400 hover:text-[#D40000] hover:underline font-semibold mt-2 cursor-pointer transition-colors duration-200">
                View Pricing Plans{" "}
                <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
              </span>
            </SmoothScrollingLink>
          </div>

          {/* Animated Conditional Pickup Fields */}
          {showFields && (
            <div className="mt-5 p-5 max-md:p-4 bg-[#1B1716]/50 border border-dashed border-[rgba(224,216,213,0.15)] rounded-2xl">
              <div className="flex items-center gap-2 text-[0.82rem] text-[#E0D8D5] mb-5">
                <i className="fa-solid fa-circle-info text-sm text-[#D40000]"></i>
                <span>
                  Please specify your preferred date, time, and exact pickup
                  address across Pune.
                </span>
              </div>

              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6 items-start box-border">
                {/* Pick-Up Date & Time */}
                <div className="flex flex-col justify-start gap-2 w-full box-border">
                  <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                    <i className="fa-solid fa-calendar-days text-[#D40000] text-[0.85rem]"></i> Pick-up Date &
                    Time *
                  </label>
                  <div className="relative w-full h-[38px] flex items-center box-border">
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
                      className="w-full h-[38px] bg-transparent border-none border-b border-[rgba(224,216,213,0.15)] hover:border-[#D40000] focus:border-b-2 focus:border-[#D40000] text-[#E0D8D5] text-[0.95rem] pr-12 outline-none cursor-pointer box-border transition-colors duration-300 leading-[38px] flex items-center"
                      autoComplete="off"
                    />
                    <i className="fa-solid fa-clock absolute right-0 top-1/2 -translate-y-1/2 text-[#D40000] pointer-events-none text-[0.9rem] z-[1]"></i>
                  </div>
                </div>

                {/* Pick-Up Address */}
                <div className="flex flex-col justify-start gap-2 w-full box-border">
                  <label className="text-[0.82rem] font-bold text-[#E0D8D5] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                    <i className="fa-solid fa-location-dot text-[#D40000] text-[0.85rem]"></i> Complete
                    Pick-up Address *
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
                        color: "#E0D8D5",
                        fontSize: "0.95rem",
                        height: "38px",
                        borderBottom: "1px solid rgba(224, 216, 213, 0.15)",
                        boxSizing: "border-box",
                        "&:hover:not(.Mui-disabled):before": {
                          borderBottom: "1px solid #D40000",
                        },
                        "&.Mui-focused:after": {
                          borderBottom: "2px solid #D40000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "0",
                        height: "38px",
                        boxSizing: "border-box",
                        lineHeight: "38px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "rgba(224, 216, 213, 0.35)",
                        opacity: 1,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons: Confirm & Reset */}
          <div className="flex flex-col items-center gap-5 mt-9 w-full">
            <div className="flex items-center justify-center gap-4 w-full flex-wrap">
              <button
                className="inline-flex items-center justify-center gap-2.5 py-4 px-9 text-[0.95rem] font-black tracking-wider uppercase text-white bg-[#D40000] hover:bg-[#510404] border border-[#D40000] rounded-full cursor-pointer transition-all duration-350 shadow-[0_8px_25px_rgba(212,0,0,0.35)] hover:shadow-[0_12px_35px_rgba(212,0,0,0.6)] hover:-translate-y-0.5 flex-1 min-w-[250px] max-md:w-full"
                type="submit"
              >
                CONFIRM APPOINTMENT{" "}
                {isCouponApplied
                  ? `(₹${finalPayableAmount.toLocaleString("en-IN")})`
                  : ""}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 py-4 px-7 text-[0.88rem] font-extrabold tracking-wider uppercase text-[#E0D8D5] hover:text-white bg-[#1B1716] hover:bg-[#D40000]/20 border border-[rgba(224,216,213,0.2)] hover:border-[#D40000] rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(212,0,0,0.2)] max-md:w-full"
                onClick={handleResetForm}
                title="Clear and reset all booking form fields"
              >
                <i className="fa-solid fa-rotate-left"></i> RESET BOOKING
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center flex-wrap gap-3 text-[0.8rem] max-md:text-[0.72rem] text-neutral-400 mt-1 max-md:flex-col max-md:text-center">
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[#D40000]"></i> Zero Advance
                Required
              </span>
              <span className="text-[#D40000]/40 max-md:hidden">•</span>
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-bolt text-[#D40000]"></i> Same-Day Response
              </span>
              <span className="text-[#D40000]/40 max-md:hidden">•</span>
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-shield-heart text-[#D40000]"></i> 100% Satisfaction
                Guarantee
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
