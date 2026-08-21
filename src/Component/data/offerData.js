// =========================================================================
// 911 Car Detailing Studio — Centralized Offers & Coupons Configuration
// =========================================================================
// This file manages all promotional popups, active coupon codes, discount
// calculation logic, and service base price mapping.
// =========================================================================

// Standard Base Pricing Map for Detailing Services
export const servicePriceMap = {
  "Paint Protection Film (PPF)": 44999,
  "Ceramic & Graphene Coating": 12999,
  "Paint Correction & Polish": 4999,
  "Exterior Detailing & Car Spa": 1499,
  "Interior Deep Detailing": 3499,
  "Periodic General Service": 2499,
  "Full Custom Detailing Package": 19999,
};

// Global Offer Popup Settings
export const offerModalConfig = {
  // Set to `true` to show the offer popup on user visit, `false` to disable
  enabled: true,
  // Header title for the popup modal
  modalTitle: "EXCLUSIVE STUDIO OFFERS",
  modalSubtitle: "Claim limited-time discounts on our premium detailing & protection packages",
};

// Admin-Manageable Available Offers & Coupons
export const availableOffers = [
  {
    id: "studio-20",
    code: "STUDIO911",
    name: "Studio Grand Discount",
    badge: "MOST POPULAR",
    discountType: "percentage", // 'percentage' or 'fixed'
    discountValue: 20, // 20% OFF
    minBookingAmount: 1000,
    maxDiscount: 10000,
    description: "Get Flat 20% OFF on all studio detailing and surface coating packages.",
    highlights: [
      "Flat 20% discount on any selected service",
      "Free 3-stage chemical paint decontamination",
      "Complimentary windshield rain-repellent treatment",
    ],
    validity: "Valid for Online Studio Bookings",
    isActive: true,
  },
  {
    id: "ceramic-15",
    code: "CERAMIC15",
    name: "Ceramic & Graphene Shield",
    badge: "COATING SPECIAL",
    discountType: "percentage",
    discountValue: 15, // 15% OFF
    minBookingAmount: 5000,
    maxDiscount: 5000,
    description: "Flat 15% OFF on Ceramic Coating and Graphene Matrix packages.",
    highlights: [
      "15% instant reduction on 9H & 10H ceramic shields",
      "Free high-heat wheel rim coating included",
    ],
    validity: "Limited Slots Available",
    isActive: true,
  },
  {
    id: "flat-1000",
    code: "FLAT1000",
    name: "First Time Welcome Perk",
    badge: "NEW CLIENT",
    discountType: "fixed",
    discountValue: 1000, // Flat ₹1,000 OFF
    minBookingAmount: 3000,
    maxDiscount: 1000,
    description: "Flat ₹1,000 instant waiver on any service booking above ₹3,000.",
    highlights: [
      "Flat ₹1,000 cash discount on total bill",
      "Priority slot scheduling at the studio",
    ],
    validity: "Valid on Bookings Above ₹3,000",
    isActive: true,
  },
  {
    id: "ppf-5000",
    code: "PPF5000",
    name: "PPF Armor Package Saver",
    badge: "MAX SAVINGS",
    discountType: "fixed",
    discountValue: 5000, // Flat ₹5,000 OFF
    minBookingAmount: 20000,
    maxDiscount: 5000,
    description: "Save Flat ₹5,000 on full car TPU Paint Protection Film installation.",
    highlights: [
      "Flat ₹5,000 instant discount on self-healing TPU PPF",
      "Free 1st-year maintenance check & gloss audit",
    ],
    validity: "Valid on PPF Packages",
    isActive: true,
  },
];

// Helper: Get Base Price for a selected service name
export const getServicePrice = (serviceName) => {
  if (!serviceName) return 0;
  return servicePriceMap[serviceName] || 0;
};

// Helper: Single Unified Discount Calculation Flow
// Service Price -> Coupon Validation -> Discount Calculation -> Final Amount
export const calculateDiscount = (couponCode, serviceName) => {
  const basePrice = getServicePrice(serviceName);

  if (!couponCode || !couponCode.trim()) {
    return {
      isValid: false,
      message: "Please enter a coupon code.",
      coupon: null,
      originalPrice: basePrice,
      discountAmount: 0,
      finalAmount: basePrice,
    };
  }

  const cleanCode = couponCode.trim().toUpperCase();
  const matchedCoupon = availableOffers.find(
    (c) => c.code.toUpperCase() === cleanCode
  );

  // Check 1: Coupon exists
  if (!matchedCoupon) {
    return {
      isValid: false,
      message: `Coupon code "${cleanCode}" is invalid.`,
      coupon: null,
      originalPrice: basePrice,
      discountAmount: 0,
      finalAmount: basePrice,
    };
  }

  // Check 2: Coupon is active
  if (!matchedCoupon.isActive) {
    return {
      isValid: false,
      message: `Coupon code "${matchedCoupon.code}" has expired or is no longer active.`,
      coupon: null,
      originalPrice: basePrice,
      discountAmount: 0,
      finalAmount: basePrice,
    };
  }

  // Check 3: Minimum booking amount criteria
  if (basePrice > 0 && basePrice < matchedCoupon.minBookingAmount) {
    return {
      isValid: false,
      message: `Coupon "${matchedCoupon.code}" requires a minimum service value of ₹${matchedCoupon.minBookingAmount.toLocaleString(
        "en-IN"
      )}.`,
      coupon: null,
      originalPrice: basePrice,
      discountAmount: 0,
      finalAmount: basePrice,
    };
  }

  // Calculate Discount Amount
  let calculatedDiscount = 0;
  if (matchedCoupon.discountType === "percentage") {
    calculatedDiscount = Math.round((basePrice * matchedCoupon.discountValue) / 100);
    if (matchedCoupon.maxDiscount && calculatedDiscount > matchedCoupon.maxDiscount) {
      calculatedDiscount = matchedCoupon.maxDiscount;
    }
  } else if (matchedCoupon.discountType === "fixed") {
    calculatedDiscount = Math.min(matchedCoupon.discountValue, basePrice > 0 ? basePrice : matchedCoupon.discountValue);
  }

  const finalAmount = Math.max(0, basePrice - calculatedDiscount);

  return {
    isValid: true,
    message: `Coupon "${matchedCoupon.code}" applied! You saved ₹${calculatedDiscount.toLocaleString("en-IN")}.`,
    coupon: matchedCoupon,
    originalPrice: basePrice,
    discountAmount: calculatedDiscount,
    finalAmount: finalAmount,
  };
};
