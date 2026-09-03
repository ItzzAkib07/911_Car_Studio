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
      className="w-full py-20 max-md:py-12 px-8 max-md:px-4 relative overflow-hidden scroll-mt-20 box-border"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(14, 14, 14, 0.86) 0%, rgba(5, 5, 5, 0.97) 100%), url("/src/images/booking_background.png")',
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
        <span className="text-[0.85rem] max-md:text-[0.75rem] tracking-[0.4rem] text-[#EBBB8D] font-semibold uppercase block mb-3">
          RESERVATION
        </span>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold tracking-[0.15rem] text-white m-0 hover:text-neutral-300 transition-colors duration-200">
          BOOK YOUR SERVICE
        </h1>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] my-5 mx-auto rounded-full"></div>
        <p className="text-lg max-md:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed font-normal">
          Schedule your detailing session with 911 Studio. Select your required
          package or request door-to-door pick up & drop across Pune.
        </p>
      </div>

      <div
        className="max-w-[920px] mx-auto box-border"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form
          className="bg-[#141414] border border-[#EBBB8D]/20 rounded-[1.5rem] p-12 max-md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(235,187,141,0.15)] relative box-border before:content-[''] before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#EBBB8D] before:to-transparent"
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
              <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-user text-[#F5D5B5] text-[0.85rem]"></i>{" "}
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
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-phone text-[#F5D5B5] text-[0.85rem]"></i>{" "}
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
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-car text-[#F5D5B5] text-[0.85rem]"></i>{" "}
                Vehicle / Car Model *
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
            <div className="flex flex-col justify-start gap-2 w-full box-border">
              <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                <i className="fa-solid fa-screwdriver-wrench text-[#F5D5B5] text-[0.85rem]"></i>{" "}
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
          <div className="flex flex-col justify-start gap-2 w-full box-border col-span-2 mb-7">
            <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
              <i className="fa-solid fa-comment-dots text-[#F5D5B5] text-[0.85rem]"></i>{" "}
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
          <div className="w-full bg-white/[0.02] border border-[#EBBB8D]/22 hover:border-[#EBBB8D]/40 rounded-[1.25rem] p-5 max-md:p-4 mt-7 mb-0 box-border transition-colors duration-300">
            <div className="flex items-center justify-between flex-wrap gap-3.5">
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
                    <span className="inline-flex items-center gap-2 text-[#F5D5B5] text-[0.95rem] font-bold tracking-wide">
                      <i className="fa-solid fa-tags text-[#EBBB8D] text-base"></i>{" "}
                      Have a coupon code?
                    </span>
                  }
                />
              </FormGroup>

              {/* Dynamic See all offers or Studio Full Boost button */}
              {isOffersActive ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-extrabold tracking-wider uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] hover:from-[#F5D5B5] hover:to-[#e0a365] border-none rounded-full py-1.5 px-4 cursor-pointer transition-all duration-250 shadow-[0_4px_12px_rgba(235,187,141,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(235,187,141,0.45)]"
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
                  className="inline-flex items-center gap-2 text-[0.76rem] font-extrabold tracking-wider text-[#EBBB8D] bg-[#EBBB8D]/[0.08] border border-[#EBBB8D]/35 hover:bg-[#EBBB8D]/20 hover:text-white hover:border-[#EBBB8D] rounded-full py-1.5 px-3.5 cursor-pointer transition-all duration-250 hover:-translate-y-0.5"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open_offer_modal"))
                  }
                  title="Studio running at maximum capacity"
                >
                  <i className="fa-solid fa-gauge-high"></i> Studio Full Boost{" "}
                  <i className="fa-solid fa-circle-info text-[0.7rem]"></i>
                </button>
              )}
            </div>

            {/* Expanded Coupon Code Input Field */}
            {hasCoupon && (
              <div className="mt-5 pt-4.5 border-t border-dashed border-[#EBBB8D]/20">
                {/* Playful notice banner when no active offers are available */}
                {!isOffersActive && (
                  <div className="flex items-start gap-3.5 bg-gradient-to-r from-[#EBBB8D]/[0.08] to-[#141414]/85 border border-dashed border-[#EBBB8D]/35 rounded-2xl p-4.5 mb-5">
                    <div className="text-2xl text-[#EBBB8D] mt-0.5 shrink-0">
                      <i className="fa-solid fa-flag-checkered"></i>
                    </div>
                    <div>
                      <strong className="block text-[0.92rem] text-white mb-1.5 tracking-wide">
                        Garage Running at Full Throttle! 🏎️💨
                      </strong>
                      <p className="text-[0.82rem] text-neutral-300 m-0 leading-relaxed font-normal">
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
                  <div className="flex-1 w-full flex items-center bg-[#141414] border border-[#EBBB8D]/30 focus-within:border-[#EBBB8D] focus-within:shadow-[0_0_12px_rgba(235,187,141,0.25)] rounded-xl py-2 px-4 gap-2.5 transition-all duration-300 box-border">
                    <i className="fa-solid fa-ticket text-[#EBBB8D] text-base"></i>
                    <input
                      type="text"
                      className="flex-1 bg-transparent border-none outline-none text-white text-[0.95rem] font-bold tracking-wider uppercase placeholder:normal-case placeholder:font-normal placeholder:tracking-normal placeholder:text-white/35"
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
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-6 text-[0.82rem] font-extrabold tracking-wider uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] hover:from-[#F5D5B5] hover:to-[#e0a365] border-none rounded-xl cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(235,187,141,0.4)] max-sm:w-full"
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
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-4.5 pt-3.5 border-t border-dashed border-white/[0.08] text-[0.8rem] text-white/50">
                    <span>Looking for active discount codes?</span>
                    <button
                      type="button"
                      className="bg-transparent border-none text-[#EBBB8D] hover:text-[#F5D5B5] hover:underline text-[0.82rem] font-bold cursor-pointer inline-flex items-center gap-1.5 p-0 transition-all duration-200"
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
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-4.5 pt-3.5 border-t border-dashed border-white/[0.08] text-[0.8rem] text-white/50">
                    <span>
                      Want to check our studio package specifications?
                    </span>
                    <SmoothScrollingLink to="pricing">
                      <button
                        type="button"
                        className="bg-transparent border-none text-[#EBBB8D] hover:text-[#F5D5B5] hover:underline text-[0.82rem] font-bold cursor-pointer inline-flex items-center gap-1.5 p-0 transition-all duration-200"
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
            <div className="w-full bg-gradient-to-br from-[#EBBB8D]/[0.06] to-[#141414]/95 border-[1.5px] border-[#EBBB8D]/35 rounded-[1.25rem] p-6 max-md:p-4 mt-7 mb-0 box-border shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(235,187,141,0.1)]">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3.5 border-b border-[#EBBB8D]/20 mb-4">
                <span className="text-[0.78rem] font-extrabold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2">
                  <i className="fa-solid fa-receipt"></i> ESTIMATED SERVICE
                  SUMMARY
                </span>
                <span className="text-[0.88rem] font-bold text-white">
                  {getService}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Original Base Price */}
                <div className="flex items-center justify-between text-[0.9rem] text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-solid fa-tag text-[#EBBB8D]"></i> Original Package Price
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

                <div className="w-full h-px bg-[#EBBB8D]/20 my-1"></div>

                {/* Final Total Row */}
                <div className="flex items-center justify-between text-[1.05rem] pt-1">
                  <span className="font-extrabold text-[#F5D5B5] tracking-wide">
                    Final Estimated Amount
                  </span>
                  <span className="text-2xl font-black text-[#EBBB8D] tracking-wide">
                    ₹{finalPayableAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[0.74rem] text-white/45 mt-4 pt-3 border-t border-dashed border-white/[0.08]">
                <i className="fa-solid fa-shield-halved text-[#EBBB8D]"></i> 100% Transparency
                • No Hidden Taxes or Surcharges
              </div>
            </div>
          )}

          {/* Pick-Up & Drop Service Toggle Box */}
          <div className="w-full bg-white/[0.02] border border-[#EBBB8D]/22 hover:border-[#EBBB8D]/40 rounded-[1.25rem] p-5 max-md:p-4 mt-7 mb-0 box-border transition-colors duration-300">
            <div className="flex items-center justify-between flex-wrap gap-3">
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
                    <span className="inline-flex items-center gap-2 text-[#F5D5B5] text-[0.95rem] font-bold tracking-wide">
                      <i className="fa-solid fa-truck-pickup text-[#EBBB8D] text-base"></i> Want Doorstep
                      Pick-up & Drop Service?
                    </span>
                  }
                />
              </FormGroup>
              <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-[#EBBB8D] bg-[#EBBB8D]/10 border border-[#EBBB8D]/25 py-1 px-3.5 rounded-full">
                <i className="fa-solid fa-shield-halved text-emerald-400 text-xs"></i> Safe & Insured
                Transit
              </span>
            </div>

            <SmoothScrollingLink to="pricing">
              <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-[#EBBB8D]/80 hover:text-[#F5D5B5] hover:underline font-semibold mt-2 cursor-pointer transition-colors duration-200">
                View Pricing Plans{" "}
                <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
              </span>
            </SmoothScrollingLink>
          </div>

          {/* Animated Conditional Pickup Fields */}
          {showFields && (
            <div className="mt-5 p-5 max-md:p-4 bg-[#141414]/60 border border-dashed border-[#EBBB8D]/25 rounded-2xl">
              <div className="flex items-center gap-2 text-[0.82rem] text-[#EBBB8D] mb-5">
                <i className="fa-solid fa-circle-info text-sm"></i>
                <span>
                  Please specify your preferred date, time, and exact pickup
                  address across Pune.
                </span>
              </div>

              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6 items-start box-border">
                {/* Pick-Up Date & Time */}
                <div className="flex flex-col justify-start gap-2 w-full box-border">
                  <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                    <i className="fa-solid fa-calendar-days text-[#F5D5B5] text-[0.85rem]"></i> Pick-up Date &
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
                      className="w-full h-[38px] bg-transparent border-none border-b border-[#EBBB8D]/25 hover:border-[#EBBB8D] focus:border-b-2 focus:border-[#EBBB8D] text-white text-[0.95rem] pr-12 outline-none cursor-pointer box-border transition-colors duration-300 leading-[38px] flex items-center"
                      autoComplete="off"
                    />
                    <i className="fa-solid fa-clock absolute right-0 top-1/2 -translate-y-1/2 text-[#EBBB8D] pointer-events-none text-[0.9rem] z-[1]"></i>
                  </div>
                </div>

                {/* Pick-Up Address */}
                <div className="flex flex-col justify-start gap-2 w-full box-border">
                  <label className="text-[0.82rem] font-bold text-[#EBBB8D] tracking-wider uppercase flex items-center gap-2 min-h-[1.4rem] m-0">
                    <i className="fa-solid fa-location-dot text-[#F5D5B5] text-[0.85rem]"></i> Complete
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
          <div className="flex flex-col items-center gap-5 mt-9 w-full">
            <div className="flex items-center justify-center gap-4 w-full flex-wrap">
              <button
                className="inline-flex items-center justify-center gap-2.5 py-4 px-9 text-[0.95rem] font-black tracking-wider uppercase text-[#111] bg-gradient-to-r from-[#EBBB8D] via-[#F5D5B5] to-[#C99765] hover:from-[#F5D5B5] hover:via-[#EBBB8D] hover:to-[#e0a365] border-none rounded-full cursor-pointer transition-all duration-350 shadow-[0_8px_25px_rgba(235,187,141,0.35)] hover:shadow-[0_12px_35px_rgba(235,187,141,0.55)] hover:-translate-y-0.5 flex-1 min-w-[250px] max-md:w-full"
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
                className="inline-flex items-center justify-center gap-2 py-4 px-7 text-[0.88rem] font-extrabold tracking-wider uppercase text-[#EBBB8D] hover:text-white bg-[#EBBB8D]/[0.06] hover:bg-[#EBBB8D]/20 border border-[#EBBB8D]/35 hover:border-[#EBBB8D] rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(235,187,141,0.2)] max-md:w-full"
                onClick={handleResetForm}
                title="Clear and reset all booking form fields"
              >
                <i className="fa-solid fa-rotate-left"></i> RESET BOOKING
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center flex-wrap gap-3 text-[0.8rem] max-md:text-[0.72rem] text-white/50 mt-1 max-md:flex-col max-md:text-center">
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[#EBBB8D]"></i> Zero Advance
                Required
              </span>
              <span className="text-[#EBBB8D]/40 max-md:hidden">•</span>
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-bolt text-[#EBBB8D]"></i> Same-Day Response
              </span>
              <span className="text-[#EBBB8D]/40 max-md:hidden">•</span>
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-shield-heart text-[#EBBB8D]"></i> 100% Satisfaction
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
