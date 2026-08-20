import React, { useEffect, useRef, useState } from "react";
import SmoothScrollingLink from "../Component/SmoothScrollingLink";

// landing page video
import video from "../images/smoke.mp4";

// Header
import "animate.css";
import logo from "../images/911_logo.png";

// services
import service1 from "../images/PPF.png";
import service2 from "../images/PAINT.png";
import painting from "../images/COATING.png";
import wasing from "../images/SPA.png";

// booking or contact
import emailjs from "@emailjs/browser";

// slideshow
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// import honda from "../images/honda.png";
// import hero from "../images/hero.png";
// import yamaha from "../images/yamaha.png";
// import ktm from "../images/ktm.png";
// import suzuki from "../images/suzuki.png";
// import bajaj from "../images/bajaj.png";
// import RE from "../images/RE.png";
// import jawa from "../images/jawa.png";
// import tvs from "../images/tvs.png";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// react-tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// MUI imports
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import moment from 'moment'
// import DateTimePicker from '@mui/lab/DateTimePicker';

// React-Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Modal style
const style = {
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

const Home = () => {
  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // funtion to slide the navbar
  function slide() {
    const el = document.getElementById("side-navbar");
    if (el) el.style.width = "20rem";
    const overlay = document.getElementById("side-navbar-overlay");
    if (overlay) overlay.style.display = "block";
  }

  // funtion to close the nav bar
  function close() {
    const el = document.getElementById("side-navbar");
    if (el) el.style.width = "0";
    const overlay = document.getElementById("side-navbar-overlay");
    if (overlay) overlay.style.display = "none";
  }

  // booking
  const form = useRef();
  const [getName, setName] = React.useState("");
  const [getPhone, setPhone] = React.useState("");
  const [getModal, setModal] = React.useState("");
  const [getService, setService] = React.useState("");
  const [getQuery, setQuery] = React.useState("");
  const [fromDate, setFromDate] = React.useState(null);
  const [getAddress, setAddress] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [showFields, setShowFields] = useState(false);
  // const pickupDate = moment(fromDate).format('DD-MM-YYYY hh:mm A');

  // Function to send mail
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      getName !== "" &&
      getPhone !== "" &&
      getModal !== "" &&
      getService !== ""
    ) {
      if (showFields) {
        // Check if date and address fields are filled when the checkbox is checked
        if (fromDate && getAddress !== "") {
          // Send email when date and address fields are filled
          emailjs
            .sendForm(
              "service_t7mpdet",
              "template_9drd373",
              form.current,
              "DTYHmwwee9kgpN9ZT",
            )
            .then((result) => {
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
        // Send email when the checkbox is unchecked
        emailjs
          .sendForm(
            "service_t7mpdet",
            "template_9drd373",
            form.current,
            "DTYHmwwee9kgpN9ZT",
          )
          .then((result) => {
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

  //   init Aos animation
  useEffect(() => {
    AOS.init();
  }, []);

  // Plan Details Dynamic Modal state
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  // 911 Car Detailing Studio Comprehensive Pricing Packages
  const pricingPlans = [
    {
      id: "car-spa",
      tier: "ESSENTIAL CARE",
      name: "Studio Car Spa",
      sub: "Snow Foam Wash & Interior Detailing",
      price: "1,499",
      badge: null,
      delay: "100",
      description:
        "Comprehensive exterior snow foam pre-wash and deep interior cabin refresh designed for routine maintenance and showroom cleanliness.",
      points: [
        "High-Pressure pH-Neutral Snow Foam Wash & Two-Bucket Gentle Hand Wash",
        "Alloy Wheels, Arches & Tyre Deep Degreasing with UV Dressing",
        "High-Power Cabin, Boot & Foot Mat Interior Vacuuming",
        "Dashboard, Console & Door Trim Antibacterial Conditioning",
        "Streak-Free Crystal Clear Glass Cleaning (Interior & Exterior)",
        "Hydrophobic Spray Sealant for Instant Paint Gloss & Water Beading",
        "Door Jambs, Fuel Lid & Trunk Channel Pressure Cleaning",
        "AC Vent Freshening & Cabin Odor Neutralization",
      ],
    },
    {
      id: "interior-spa",
      tier: "CABIN RESTORATION",
      name: "Deep Interior Spa",
      sub: "Steam Sanitization + Leather Shield",
      price: "3,499",
      badge: null,
      delay: "150",
      description:
        "Complete high-temperature steam sterilization, hot-water stain extraction, and leather hydration to restore your vehicle's interior to factory freshness.",
      points: [
        "High-Temperature Pressurized Steam Sanitation (Eliminates 99.9% Bacteria)",
        "Deep Hot-Water Extraction for Fabric Seats, Roof-Liner & Floor Carpets",
        "Multi-Stage pH-Balanced Leather Cleaning, Hydration & UV Protection",
        "Dashboard, Console & Door Trims Deep Scrubbing & Matte UV Dressing",
        "AC Vent Steam Flush & Ozone Air Purification for Odor Eradication",
        "Trunk Space Deep Extraction & Spare Tyre Well Cleaning",
        "Glass Anti-Fogging & Streak-Free Interior Clarity Treatment",
        "Anti-Static Cockpit Dust Repellent Application",
      ],
    },
    {
      id: "paint-correction",
      tier: "PAINT RESTORATION",
      name: "Paint Correction & Polish",
      sub: "Multi-Stage Swirl & Scratch Removal",
      price: "4,999",
      badge: null,
      delay: "200",
      description:
        "Multi-stage machine compounding and finishing polish designed to eliminate swirl marks, oxidation, and scratches for deep mirror gloss.",
      points: [
        "3-Stage Chemical Paint Decontamination (Clay Bar + Iron Fallout Removal)",
        "Multi-Stage Rotary/DA Compounding (Removes 85–90% Swirls & Scratches)",
        "Jewel Finishing Polish for Maximum Depth, Clarity & Reflection",
        "Headlight & Tail Light Optical Clarification & Defect Removal",
        "Engine Bay Waterless Steam Cleaning & Protective Dressing",
        "6-Month Graphene / Polymer Synthetic Paint Sealant Application",
        "Windshield & Glass Hard-Water Spot Removal and Polishing",
        "Exterior Unpainted Plastic Trims Deep Restoration",
      ],
    },
    {
      id: "ceramic-coating",
      tier: "3-YEAR NANO SHIELD",
      name: "9H Ceramic Coating",
      sub: "Dual-Layer 9H Shield (3-Yr Warranty)",
      price: "12,999",
      badge: "MOST POPULAR",
      delay: "250",
      description:
        "Our signature ceramic protection system creating a super-hard, high-gloss hydrophobic shield over your vehicle with a 3-Year Studio Warranty.",
      points: [
        "Complete Multi-Stage Paint Correction & High-Gloss Mirror Prep",
        "9H Dual-Layer Nano Ceramic Coating on all Painted Panels",
        "3-Year Studio Warranty with Scheduled Periodic Inspections",
        "High-Heat Ceramic Coating on Alloy Rims & Brake Calipers",
        "360° Hydrophobic Rain-Repellent Glass Coating on Windows & Sunroof",
        "Interior Leather & Fabric Anti-Stain Ceramic Nano Barrier",
        "Exterior Plastic Trims & Rubber Long-Term UV Ceramic Coating",
        "Digital Paint Depth Audit & Gloss Measurement Certification",
      ],
    },
    {
      id: "graphene-coating",
      tier: "5-YEAR GRAPHENE",
      name: "10H Graphene Coating",
      sub: "Thermal Matrix Shield (5-Yr Warranty)",
      price: "18,999",
      badge: "ADVANCED TECH",
      delay: "300",
      description:
        "Next-generation 10H graphene nano-matrix infused coating offering extreme hardness, anti-static dust repellency, and superior thermal dissipation.",
      points: [
        "Extensive 3-Stage Paint Correction (Up to 95% Defect Removal)",
        "10H Graphene Matrix Coating Infused on all Painted Body Panels",
        "5-Year Studio Warranty with Scheduled Top-Up Maintenance",
        "Reduced Water-Spotting & Chemical Etching via Graphene Thermal Shield",
        "High-Heat Graphene Rim, Exhaust Tip & Caliper Coating",
        "All-Weather 360° Hydrophobic Glass & Mirror Coating",
        "Complete Interior Leather, Alcantara & Fabric Hydrophobic Shield",
        "Complimentary 1st Year Maintenance Wash & Inspection Included",
      ],
    },
    {
      id: "ppf",
      tier: "PHYSICAL ARMOR",
      name: "Paint Protection Film (PPF)",
      sub: "Self-Healing TPU Film (5-7 Yr Warranty)",
      price: "44,999",
      badge: "MAX PROTECTION",
      delay: "350",
      description:
        "The ultimate physical automotive armor. Aerospace-grade self-healing TPU film engineered to resist stone chips, gravel scratches, keying, and road hazards.",
      points: [
        "Aerospace-Grade Instant Self-Healing TPU (Thermoplastic Polyurethane) Film",
        "Maximum Physical Defense Against Stone Chips, Rock Debris & Key Scratches",
        "Instant Micro-Scratch Healing via Sunlight / Engine Heat Exposure",
        "Optically Clear, Non-Yellowing UV Resistant Adhesive Technology",
        "Precision Computer Cut & Invisible Edge-Wrapping (Zero Blade Contact)",
        "5 to 7-Year Studio Warranty Against Yellowing, Peeling & Bubbling",
        "Pre-Infused Ceramic Top Coat for Extreme Water Beading & Easy Cleaning",
        "Available in High-Gloss Crystal Clear or Stealth Matte Satin Finishes",
      ],
    },
  ];

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  // for getting the currnt date and time
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // funtoion to toggle the fields after checking the checkbox
  const toggleFields = () => {
    setShowFields(!showFields);
  };

  // Landing page
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    // Hide the first section after 10 seconds
    const timeoutId = setTimeout(() => {
      setShowFirstSection(false);
      // handleOpen4();
    }, 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showFirstSection && (
        <section className="one">
          <video src={video} autoPlay muted />
          <h1 className="landing-h1">
            <span>911</span>
            <span>&nbsp;CAR&nbsp;</span>
            <span>&nbsp;DETAILING&nbsp;</span>
            <span>&nbsp;STUDIO&nbsp;</span>
          </h1>
        </section>
      )}

      {/* Main Container */}
      <section className="home-container">
        {/* Header section — Only visible after intro splash screen finishes */}
        {!showFirstSection && (
          <header
            id="header"
            className={`header ${isScrolled ? "scrolled" : ""}`}
          >
            <div className="header-container">
              {/* Left Group: Menu button & Brand Logo */}
              <div className="header-left">
                {/* Open side - navbar button */}
                <Tooltip title="Menu">
                  <div className="menu-btn" onClick={slide} id="open">
                    <span className="btn">
                      <i className="fa-solid fa-bars"></i>
                    </span>
                  </div>
                </Tooltip>

                {/* Logo & Studio Title */}
                <div className="logo">
                  <SmoothScrollingLink to="home">
                    <div className="logo-brand-wrap">
                      <img src={logo} alt="911 Car Detailing Studio Logo" />
                      <div className="title">
                        <span className="title-number">911</span>
                        <span className="half-title">CAR DETAILING STUDIO</span>
                      </div>
                    </div>
                  </SmoothScrollingLink>
                </div>
              </div>

              {/* Desktop Nav Items */}
              <nav className="desktop-navbar">
                <SmoothScrollingLink to="home">
                  <span className="nav-item-link">Home</span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="quality">
                  <span className="nav-item-link">Quality</span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="services">
                  <span className="nav-item-link">Services</span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="pricing">
                  <span className="nav-item-link">Pricing</span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="booking">
                  <span className="nav-item-link">Book Service</span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="contact">
                  <span className="nav-item-link">Contact Us</span>
                </SmoothScrollingLink>
              </nav>
            </div>

            {/* Dark Backdrop Overlay for Mobile Drawer */}
            <div
              id="side-navbar-overlay"
              className="side-navbar-overlay"
              onClick={close}
            ></div>

            {/* Side - navbar section  */}
            <div className="side-navbar" id="side-navbar">
              {/* title and close navbar */}
              <div className="close-hamburger">
                <div className="side-nav-brand">
                  <img src={logo} alt="911 Logo" className="side-brand-img" />
                  <span className="side-brand-text">911 CAR DETAILING</span>
                </div>

                <button id="close" onClick={close} aria-label="Close Menu">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Side - navItem section */}
              <div className="side-navItems" id="side-navItems">
                <SmoothScrollingLink to="home">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-home"></i> Home
                  </span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="quality">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-shield-halved"></i> Quality
                    Assured
                  </span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="services">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-gear"></i> Our Services
                  </span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="pricing">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-tags"></i> Pricing Plans
                  </span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="booking">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-user-pen"></i> Book Service
                  </span>
                </SmoothScrollingLink>

                <SmoothScrollingLink to="contact">
                  <span className="subnavbtn" onClick={close}>
                    <i className="fa-solid fa-phone"></i> Contact Us
                  </span>
                </SmoothScrollingLink>
              </div>

              {/* Social Icons */}
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "auto",
                  paddingBottom: "1.5rem",
                }}
              >
                <span>
                  <h2 id="social-head">Get In Touch With Us</h2>
                </span>

                <Box>
                  <ul className="side-drawer-socials">
                    <li className="icons">
                      <a
                        href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>

                    <li className="icons">
                      <a
                        href="https://www.instagram.com/911_premiumcardetailing/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>

                    <li className="icons">
                      <a
                        href="https://wa.me/message/FXCIZ4L4CNDJK1"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </Box>

                {/* Navbar Footer */}
                <footer className="side-drawer-footer">
                  <span className="side-drawer-copyright">
                    &copy;{new Date().getFullYear()}, 911 Car Detailing Studio
                  </span>

                  <p className="footer-heart">
                    Made with{" "}
                    <g-emoji
                      className="g-emoji"
                      alias="heart"
                      fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
                    >
                      <img
                        className="emoji"
                        alt="heart"
                        height="18"
                        width="18"
                        src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
                      />
                    </g-emoji>{" "}
                    by{" "}
                    <a
                      href="https://itzzakib07.github.io/dopefolio/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Akib Mulla
                    </a>
                  </p>
                </footer>
              </Box>
            </div>
          </header>
        )}

        {/* body section */}
        <section className="home-sections">
          {/* Offer section modal */}
          {/* <section className='offer' >
                        <Modal
                            open={open4}
                            onClose={handleClose4}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className='offerModalStyle' >

                                    <Box sx={{
                                        position: 'absolute',
                                        alignItems: 'center',
                                        color: 'white',
                                        left: '103%',
                                        top: '0',
                                        fontSize: '1.5rem',
                                        fontWeight: '900',
                                        cursor: 'pointer',
                                        padding:'0'
                                    }}
                                        onClick={handleClose4}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </Box>

                                    <img src={diwali} style={{width:'100%', height:'100%'}}/>

                            </div>
                        </Modal>
                    </section> */}

          {/* Hero section */}
          <section id="home" className="hero" data-aos="zoom-in">
            <SmoothScrollingLink to="quality">
              <div className="downArrow">
                <i className="fa-solid fa-arrow-down-long"></i>
                <span style={{ color: "white" }}>SCROLL DOWN</span>
              </div>
            </SmoothScrollingLink>
          </section>

          {/* Quality & Craftsmanship Section — Premium Redesign */}
          <section className="premium-quality-section" id="quality">
            <div className="premium-quality-header" data-aos="fade-up">
              <span className="premium-services-label">
                PERFECTION IN EVERY DETAIL
              </span>
              <h1 className="premium-services-title">QUALITY ASSURED</h1>
              <div className="premium-services-line"></div>
              <p className="premium-services-subtitle">
                Engineered for automotive perfectionists. We combine
                aerospace-grade surface protection, specialized clean-room
                environments, and master craftsmanship.
              </p>
            </div>

            <div className="premium-quality-grid">
              {/* Pillar 01 — Master Detailers */}
              <div
                className="premium-quality-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="premium-quality-icon">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <h3 className="premium-quality-card-title">Master Detailers</h3>
                <p className="premium-quality-card-desc">
                  Trained detailing artisans utilizing paint-depth gauges,
                  calibrated dual-action polishers, and multi-stage correction
                  to eliminate 99% of swirl marks without compromising clear
                  coat integrity.
                </p>
                <ul className="premium-quality-card-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Multi-stage paint
                    correction & refinement
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Non-destructive
                    digital thickness measurement
                  </li>
                </ul>
              </div>

              {/* Pillar 02 — Premium-Grade Products */}
              <div
                className="premium-quality-card"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="premium-quality-icon">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <h3 className="premium-quality-card-title">
                  Premium-Grade Products
                </h3>
                <p className="premium-quality-card-desc">
                  Exclusively employing self-healing TPU films, genuine 10H
                  graphene nano-coatings, and pH-neutral European detailing
                  chemicals formulated for maximum gloss and durability.
                </p>
                <ul className="premium-quality-card-list">
                  <li>
                    <i className="fa-solid fa-check"></i> High-clarity instant
                    self-healing TPU films
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Extreme chemical & UV
                    radiation resistance
                  </li>
                </ul>
              </div>

              {/* Pillar 03 — Dust-Free Clean Bays */}
              <div
                className="premium-quality-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="premium-quality-icon">
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                </div>
                <h3 className="premium-quality-card-title">
                  Dust-Free Studio Bays
                </h3>
                <p className="premium-quality-card-desc">
                  Enclosed, climate-controlled detailing bays with CRI 95+
                  high-intensity inspection lighting and infrared short-wave
                  lamps for flawless coating bonding and bubble-free film
                  installations.
                </p>
                <ul className="premium-quality-card-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Climate &
                    dust-controlled installation bays
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Infrared shortwave
                    thermal curing technology
                  </li>
                </ul>
              </div>

              {/* Pillar 04 — Precision Edge Wrapping */}
              <div
                className="premium-quality-card"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="premium-quality-icon">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h3 className="premium-quality-card-title">
                  Precision Edge Wrapping
                </h3>
                <p className="premium-quality-card-desc">
                  Seamless wrapped edges with zero knife contact against your
                  vehicle's factory paint. Every installation is backed by our
                  studio warranty and comprehensive aftercare support.
                </p>
                <ul className="premium-quality-card-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Invisible tucked edges
                    with zero knife cuts
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Complete warranty &
                    aftercare maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Studio Metrics / Stats Bar */}
            <div
              className="premium-quality-stats"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="premium-quality-stat">
                <span className="premium-quality-stat-num">500+</span>
                <span className="premium-quality-stat-label">
                  Vehicles Protected
                </span>
              </div>
              <div className="premium-quality-stat-divider"></div>
              <div className="premium-quality-stat">
                <span className="premium-quality-stat-num">10H</span>
                <span className="premium-quality-stat-label">
                  Coating Hardness
                </span>
              </div>
              <div className="premium-quality-stat-divider"></div>
              <div className="premium-quality-stat">
                <span className="premium-quality-stat-num">100%</span>
                <span className="premium-quality-stat-label">
                  Dust-Free Studio
                </span>
              </div>
              <div className="premium-quality-stat-divider"></div>
              <div className="premium-quality-stat">
                <span className="premium-quality-stat-num">5★</span>
                <span className="premium-quality-stat-label">
                  Customer Satisfaction
                </span>
              </div>
            </div>
          </section>

          {/* Our Services section — Premium Redesign */}
          <section className="premium-services" id="services">
            <div className="premium-services-header" data-aos="fade-up">
              <span className="premium-services-label">WHAT WE DO</span>
              <h1 className="premium-services-title">WE OFFER</h1>
              <div className="premium-services-line"></div>
              <p className="premium-services-subtitle">
                Premium detailing & protection services crafted for those who
                demand excellence.
              </p>
            </div>

            <div className="premium-services-grid">
              {/* Service 01 — PPF */}
              <div
                className="premium-service-row"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="premium-service-img-wrap">
                  <img src={service1} alt="Paint Protection Film Service" />
                  <div className="premium-service-img-overlay"></div>
                  <span className="premium-service-number">01</span>
                </div>
                <div className="premium-service-content">
                  <span className="premium-service-tag">PROTECTION</span>
                  <h2 className="premium-service-name">
                    PAINT PROTECTION FILM (PPF)
                  </h2>
                  <div className="premium-service-divider"></div>
                  <p className="premium-service-desc">
                    Protect your vehicle's original paint with premium Paint
                    Protection Film designed to defend against stone chips,
                    scratches, road debris, and everyday wear. PPF provides a
                    durable protective layer while maintaining the vehicle's
                    original finish and enhancing its long-term appearance.
                  </p>
                  <SmoothScrollingLink to="booking">
                    <button className="premium-service-cta">
                      BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </SmoothScrollingLink>
                </div>
              </div>

              {/* Service 02 — Paint Correction */}
              <div
                className="premium-service-row premium-service-row-reverse"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="premium-service-img-wrap">
                  <img src={service2} alt="Paint Correction Service" />
                  <div className="premium-service-img-overlay"></div>
                  <span className="premium-service-number">02</span>
                </div>
                <div className="premium-service-content">
                  <span className="premium-service-tag">RESTORATION</span>
                  <h2 className="premium-service-name">PAINT CORRECTION</h2>
                  <div className="premium-service-divider"></div>
                  <p className="premium-service-desc">
                    Restore your car's paintwork and bring back its original
                    gloss with professional paint correction. Our detailing
                    specialists carefully remove swirl marks, oxidation, light
                    scratches, and surface imperfections to deliver a smoother,
                    deeper, and more refined finish.
                  </p>
                  <SmoothScrollingLink to="booking">
                    <button className="premium-service-cta">
                      BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </SmoothScrollingLink>
                </div>
              </div>

              {/* Service 03 — Ceramic / Graphene */}
              <div
                className="premium-service-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="premium-service-img-wrap">
                  <img src={wasing} alt="Ceramic Graphene Coatings" />
                  <div className="premium-service-img-overlay"></div>
                  <span className="premium-service-number">03</span>
                </div>
                <div className="premium-service-content">
                  <span className="premium-service-tag">COATING</span>
                  <h2 className="premium-service-name">
                    CERAMIC / GRAPHENE COATINGS
                  </h2>
                  <div className="premium-service-divider"></div>
                  <p className="premium-service-desc">
                    Give your vehicle long-lasting protection with premium
                    Ceramic and Graphene Coatings. These advanced coatings
                    enhance gloss, provide a powerful hydrophobic effect, and
                    offer resistance against UV rays, chemicals, contaminants,
                    and everyday environmental exposure.
                  </p>
                  <SmoothScrollingLink to="booking">
                    <button className="premium-service-cta">
                      BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </SmoothScrollingLink>
                </div>
              </div>

              {/* Service 04 — Exterior Detailing */}
              <div
                className="premium-service-row premium-service-row-reverse"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="premium-service-img-wrap">
                  <img src={painting} alt="Exterior Detailing and Car Spa" />
                  <div className="premium-service-img-overlay"></div>
                  <span className="premium-service-number">04</span>
                </div>
                <div className="premium-service-content">
                  <span className="premium-service-tag">DETAILING</span>
                  <h2 className="premium-service-name">
                    EXTERIOR DETAILING & CAR SPA
                  </h2>
                  <div className="premium-service-divider"></div>
                  <p className="premium-service-desc">
                    Give your vehicle a complete exterior refresh with
                    professional detailing and car spa services. From deep
                    cleaning and decontamination to finishing and polishing, we
                    carefully restore the exterior to leave your car looking
                    clean, glossy, and showroom-ready.
                  </p>
                  <SmoothScrollingLink to="booking">
                    <button className="premium-service-cta">
                      BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </SmoothScrollingLink>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="premium-benefits-section">
            <div className="premium-benefits-header" data-aos="fade-up">
              <span className="premium-services-label">WHY CHOOSE US</span>
              <h1 className="premium-services-title">KEY BENEFITS</h1>
              <div className="premium-services-line"></div>
            </div>

            <div className="premium-benefits-grid">
              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3>ENHANCES LOOK</h3>
                <p>
                  Elevate your vehicle's appearance with a deep, mirror-like
                  finish that turns heads.
                </p>
              </div>

              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3>PROTECTS PAINT</h3>
                <p>
                  Shield your paint from chips, scratches, and environmental
                  contaminants with advanced protection.
                </p>
              </div>

              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h3>LONG LASTING PROTECTION</h3>
                <p>
                  Our coatings and films provide durable protection that lasts
                  for years, not just weeks.
                </p>
              </div>

              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-droplet"></i>
                </div>
                <h3>HYDROPHOBIC EFFECT</h3>
                <p>
                  Water beads and rolls off effortlessly, keeping your car
                  cleaner for longer.
                </p>
              </div>

              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-sun"></i>
                </div>
                <h3>UV & CHEMICAL RESISTANCE</h3>
                <p>
                  Defend against UV fading, bird droppings, acid rain, and harsh
                  chemical exposure.
                </p>
              </div>

              <div
                className="premium-benefit-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="premium-benefit-icon">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <h3>INCREASES VALUE</h3>
                <p>
                  Maintain your vehicle in showroom condition, preserving its
                  resale value over time.
                </p>
              </div>
            </div>
          </section>

          {/* More Services + Pick Up & Drop */}
          <section className="premium-more-section">
            <div className="premium-more-header" data-aos="fade-up">
              <span className="premium-services-label">ALSO AVAILABLE</span>
              <h1 className="premium-services-title">MORE SERVICES</h1>
              <div className="premium-services-line"></div>
            </div>

            <div className="premium-more-grid">
              <div
                className="premium-more-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="premium-more-card-icon">
                  <i className="fa-solid fa-couch"></i>
                </div>
                <h3>INTERIOR DETAILING</h3>
                <p>
                  Deep cleaning and restoration of your vehicle's interior —
                  seats, dashboard, carpets, and every hidden corner — leaving
                  it fresh and like new.
                </p>
                <SmoothScrollingLink to="booking">
                  <button className="premium-service-cta">
                    BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </SmoothScrollingLink>
              </div>

              <div
                className="premium-more-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="premium-more-card-icon">
                  <i className="fa-solid fa-spray-can-sparkles"></i>
                </div>
                <h3>GLASS COATING</h3>
                <p>
                  Hydrophobic glass protection for improved visibility, easier
                  maintenance, and a crystal-clear windshield that repels water
                  and grime.
                </p>
                <SmoothScrollingLink to="booking">
                  <button className="premium-service-cta">
                    BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </SmoothScrollingLink>
              </div>

              <div
                className="premium-more-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="premium-more-card-icon">
                  <i className="fa-solid fa-circle-dot"></i>
                </div>
                <h3>WHEEL & CALIPER CLEANING</h3>
                <p>
                  Deep cleaning and detailing for wheels and brake calipers —
                  removing brake dust, grime, and buildup for a clean, polished
                  finish.
                </p>
                <SmoothScrollingLink to="booking">
                  <button className="premium-service-cta">
                    BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </SmoothScrollingLink>
              </div>
            </div>

            {/* Pick Up & Drop Banner */}
            <div className="premium-pickup-banner" data-aos="zoom-in">
              <div className="premium-pickup-content">
                <div className="premium-pickup-icon">
                  <i className="fa-solid fa-car-side"></i>
                </div>
                <h2 className="premium-pickup-title">PICK UP & DROP SERVICE</h2>
                <p className="premium-pickup-tagline">
                  SO YOU STAY FREE,
                  <br />
                  WE'LL TAKE CARE OF YOUR CAR.
                </p>
                <SmoothScrollingLink to="booking">
                  <button className="premium-pickup-cta">
                    SCHEDULE PICKUP <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </SmoothScrollingLink>
              </div>
            </div>
          </section>

          {/* Pricing Section — Premium */}
          <section className="premium-pricing-section" id="pricing">
            <div className="premium-pricing-header" data-aos="fade-up">
              <span className="premium-services-label">OUR PACKAGES</span>
              <h1 className="premium-services-title">STUDIO PRICING</h1>
              <div className="premium-services-line"></div>
              <p className="premium-services-subtitle">
                Transparent luxury detailing plans with no hidden charges.
                Choose the perfection package tailored for your car.
              </p>
            </div>

            <div className="premium-pricing-grid">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`premium-pricing-card ${plan.badge ? "premium-pricing-featured" : ""}`}
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
                    <i className="fa-solid fa-circle-info"></i> View service
                    details
                  </p>
                  <SmoothScrollingLink to="booking">
                    <button
                      className={`premium-pricing-cta ${plan.badge ? "premium-pricing-cta-filled" : ""}`}
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
              <Box sx={style}>
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
                  <span className="highlight-title">
                    UP TO 7 YEARS WARRANTY
                  </span>
                  <span className="highlight-sub">
                    Official Written Guarantee
                  </span>
                </div>
              </div>

              <div className="premium-pricing-highlight">
                <div className="highlight-icon-wrap">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <div className="highlight-text-group">
                  <span className="highlight-title">
                    CERTIFIED MASTER DETAILERS
                  </span>
                  <span className="highlight-sub">
                    Paint Correction & PPF Artisans
                  </span>
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
                  <span className="highlight-title">
                    DOORSTEP PICK UP & DROP
                  </span>
                  <span className="highlight-sub">
                    Insured Transit Across Pune
                  </span>
                </div>
              </div>

              <div className="premium-pricing-highlight">
                <div className="highlight-icon-wrap">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="highlight-text-group">
                  <span className="highlight-title">DIGITAL PAINT AUDIT</span>
                  <span className="highlight-sub">
                    Thickness & Gloss Verification
                  </span>
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

          {/* Booking Section — Premium Redesign */}
          <section className="premium-booking-section" id="booking">
            <div className="premium-booking-header" data-aos="fade-up">
              <span className="premium-services-label">RESERVATION</span>
              <h1 className="premium-services-title">BOOK YOUR SERVICE</h1>
              <div className="premium-services-line"></div>
              <p className="premium-services-subtitle">
                Schedule your detailing session with 911 Studio. Select your
                required package or request door-to-door pick up & drop across
                Pune.
              </p>
            </div>

            <div
              className="premium-booking-wrapper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form
                className="premium-booking-form"
                ref={form}
                onSubmit={sendEmail}
              >
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
                      <i className="fa-solid fa-screwdriver-wrench"></i> Select
                      Service *
                    </label>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <Select
                        id="serviceType"
                        name="serviceType"
                        value={getService}
                        displayEmpty
                        onChange={(e) => setService(e.target.value)}
                        sx={{
                          color: getService
                            ? "#F5D5B5"
                            : "rgba(255, 255, 255, 0.4)",
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
                          Paint Protection Film (PPF)
                        </MenuItem>
                        <MenuItem value="Ceramic & Graphene Coating">
                          Ceramic & Graphene Coating
                        </MenuItem>
                        <MenuItem value="Paint Correction & Polish">
                          Paint Correction & Polish
                        </MenuItem>
                        <MenuItem value="Exterior Detailing & Car Spa">
                          Exterior Detailing & Car Spa
                        </MenuItem>
                        <MenuItem value="Interior Deep Detailing">
                          Interior Deep Detailing
                        </MenuItem>
                        <MenuItem value="Periodic General Service">
                          Periodic General Service
                        </MenuItem>
                        <MenuItem value="Full Custom Detailing Package">
                          Full Custom Detailing Package
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                {/* Full Width Query / Special Requirements */}
                <div className="premium-input-group premium-input-full">
                  <label className="premium-input-label">
                    <i className="fa-solid fa-comment-dots"></i> Special
                    Requirements / Query (Optional)
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
                            <i className="fa-solid fa-truck-pickup"></i> Want
                            Doorstep Pick-up & Drop Service?
                          </span>
                        }
                      />
                    </FormGroup>
                    <span className="premium-pickup-badge">
                      <i className="fa-solid fa-shield-halved"></i> Safe &
                      Insured Transit
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
                        Please specify your preferred date, time, and exact
                        pickup address across Pune.
                      </span>
                    </div>

                    <div className="premium-booking-grid">
                      {/* Pick-Up Date & Time */}
                      <div className="premium-input-group">
                        <label className="premium-input-label">
                          <i className="fa-solid fa-calendar-days"></i> Pick-up
                          Date & Time *
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
                          <i className="fa-solid fa-location-dot"></i> Complete
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
                              borderBottom:
                                "1px solid rgba(235, 187, 141, 0.25)",
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

                {/* Action Submit Button */}
                <div className="premium-booking-action">
                  <button className="premium-booking-submit-btn" type="submit">
                    CONFIRM APPOINTMENT{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                  {/* Trust badges */}
                  <div className="premium-booking-trust-strip">
                    <span>
                      <i className="fa-solid fa-check-circle"></i> Zero Advance
                      Required
                    </span>
                    <span className="dot">•</span>
                    <span>
                      <i className="fa-solid fa-bolt"></i> Same-Day Response
                    </span>
                    <span className="dot">•</span>
                    <span>
                      <i className="fa-solid fa-shield-heart"></i> 100%
                      Satisfaction Guarantee
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <ToastContainer />
          </section>

          {/* Brands Image slide show */}
          {/* <section id="slideshow" data-aos="zoom-in">
            <h1>Brands we have serviced</h1>

            <Splide
              options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                perMove: 1,
                gap: "2rem",
                arrows: false,
                pagination: false,
                autoScroll: {
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  speed: 2,
                },
              }}
              extensions={{ AutoScroll }}
            >
              <SplideSlide>
                <div className="brands-container">
                  <div className="brands">
                    <div className="brand">
                      <img src={honda} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={yamaha} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={RE} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={jawa} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={suzuki} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={ktm} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={hero} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={tvs} alt="Our Partners"></img>
                    </div>

                    <div className="brand">
                      <img src={bajaj} alt="Our Partners"></img>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </section> */}

          {/* Unified Contact & Studio Footer Hub */}
          <footer className="premium-footer-section" id="contact">
            {/* Top Contact Hub */}
            <div className="premium-contact-header" data-aos="fade-up">
              <span className="premium-services-label">CONNECT WITH US</span>
              <h1 className="premium-services-title">VISIT OUR STUDIO</h1>
              <div className="premium-services-line"></div>
              <p className="premium-services-subtitle">
                Experience perfection in automotive care. Visit our
                state-of-the-art studio in Pune or get in touch for custom
                detailing consultations.
              </p>
            </div>

            <div className="premium-contact-wrapper">
              {/* Left Column: 4 Luxury Contact Cards Grid */}
              <div className="premium-contact-cards">
                {/* Card 1: Studio Address */}
                <div className="premium-contact-card" data-aos="fade-up">
                  <div className="premium-contact-card-header">
                    <div className="premium-contact-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="premium-contact-card-title-group">
                      <span className="premium-contact-tag">LOCATION</span>
                      <h3>STUDIO ADDRESS</h3>
                    </div>
                  </div>
                  <div className="premium-contact-card-body">
                    <p className="premium-contact-address-text">
                      <strong>911 PREMIUM CAR DETAILING STUDIO</strong>
                      <br />
                      In Front of Golden Winds, DY Patil,
                      <br />
                      Pune City – 411047
                    </p>
                  </div>
                  <div className="premium-contact-card-action">
                    <a
                      href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
                      target="_blank"
                      rel="noreferrer"
                      className="premium-contact-link-btn"
                    >
                      Get Directions{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>

                {/* Card 2: Operating Hours */}
                <div className="premium-contact-card" data-aos="fade-up">
                  <div className="premium-contact-card-header">
                    <div className="premium-contact-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="premium-contact-card-title-group">
                      <span className="premium-contact-tag">TIMINGS</span>
                      <h3>WORKING HOURS</h3>
                    </div>
                  </div>
                  <div className="premium-contact-card-body">
                    <div className="premium-contact-hours-list">
                      <div className="premium-contact-hour-row">
                        <span className="day-label">Mon – Sat</span>
                        <span className="time-value">9:00 AM – 9:00 PM</span>
                      </div>
                      <div className="premium-contact-hour-row">
                        <span className="day-label">Sunday</span>
                        <span className="time-value">9:00 AM – 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="premium-contact-card-action">
                    <span className="premium-contact-status-badge">
                      <i className="fa-solid fa-circle-check"></i> Open All 7
                      Days
                    </span>
                  </div>
                </div>

                {/* Card 3: Phone & Direct Consultation */}
                <div className="premium-contact-card" data-aos="fade-up">
                  <div className="premium-contact-card-header">
                    <div className="premium-contact-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="premium-contact-card-title-group">
                      <span className="premium-contact-tag">PHONE SUPPORT</span>
                      <h3>DIRECT CALLS</h3>
                    </div>
                  </div>
                  <div className="premium-contact-card-body">
                    <p className="premium-contact-subtext">
                      Speak with our detailing consultants:
                    </p>
                    <div className="premium-contact-phone-list">
                      <a
                        href="tel:9112829911"
                        className="premium-contact-phone-btn"
                      >
                        <i className="fa-solid fa-phone"></i> 9112829911
                      </a>
                      <a
                        href="tel:8657445050"
                        className="premium-contact-phone-btn"
                      >
                        <i className="fa-solid fa-phone"></i> 8657445050
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 4: WhatsApp & Email Support */}
                <div className="premium-contact-card" data-aos="fade-up">
                  <div className="premium-contact-card-header">
                    <div className="premium-contact-icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="premium-contact-card-title-group">
                      <span className="premium-contact-tag">FAST RESPONSE</span>
                      <h3>WHATSAPP & MAIL</h3>
                    </div>
                  </div>
                  <div className="premium-contact-card-body">
                    <div className="premium-contact-channel-list">
                      <a
                        href="https://wa.me/message/FXCIZ4L4CNDJK1"
                        target="_blank"
                        rel="noreferrer"
                        className="premium-contact-wa-btn"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Chat on
                        WhatsApp
                      </a>
                      <a
                        href="mailto:tausifshaikh2505@gmail.com"
                        className="premium-contact-email-link"
                      >
                        <i className="fa-solid fa-envelope"></i>{" "}
                        tausifshaikh2505@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Google Map Frame */}
              <div className="premium-contact-map-card" data-aos="fade-up">
                <div className="premium-contact-map-header">
                  <div className="premium-map-dot-group">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="premium-map-title">
                    Live Studio Navigation
                  </span>
                  <a
                    href="https://maps.app.goo.gl/GZWDTttb2p7iTPGu5"
                    target="_blank"
                    rel="noreferrer"
                    className="premium-map-expand"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Open Map
                  </a>
                </div>
                <div className="premium-contact-map-frame">
                  <iframe
                    title="911 Premium Car Detailing Studio Location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1121.2721357317535!2d73.90822126961476!3d18.616255269841506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzU4LjUiTiA3M8KwNTQnMzEuOSJF!5e1!3m2!1sen!2sin!4v1787166857699!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Integrated Grand Footer Hub */}
            <div className="premium-footer-hub" data-aos="fade-up">
              <div className="premium-footer-grid">
                {/* Col 1: Studio Brand & Bio */}
                <div className="premium-footer-col premium-footer-brand-col">
                  <div className="premium-footer-logo-row">
                    <img
                      src={logo}
                      alt="911 Logo"
                      className="premium-footer-logo"
                    />
                    <span className="premium-footer-brand-name">
                      911 <span>CAR DETAILING STUDIO</span>
                    </span>
                  </div>
                  <p className="premium-footer-bio">
                    Pune's premier automotive surface protection and detailing
                    studio. Delivering aerospace-grade coating, precision PPF
                    edge-wrapping, and master paint correction.
                  </p>
                  <div className="premium-footer-socials">
                    <a
                      href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/911_premiumcardetailing/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://wa.me/message/FXCIZ4L4CNDJK1"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>

                {/* Col 2: Quick Links */}
                <div className="premium-footer-col">
                  <h4 className="premium-footer-heading">QUICK LINKS</h4>
                  <ul className="premium-footer-links">
                    <li>
                      <SmoothScrollingLink to="home">Home</SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="quality">
                        Quality Assured
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Our Services
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="pricing">
                        Pricing Plans
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="booking">
                        Book Service
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="contact">
                        Contact & Studio
                      </SmoothScrollingLink>
                    </li>
                  </ul>
                </div>

                {/* Col 3: Core Services */}
                <div className="premium-footer-col">
                  <h4 className="premium-footer-heading">OUR SERVICES</h4>
                  <ul className="premium-footer-links">
                    <li>
                      <SmoothScrollingLink to="services">
                        Paint Protection Film (PPF)
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Ceramic & Graphene Coating
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Paint Correction & Polish
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Exterior Detailing & Spa
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Interior Deep Detailing
                      </SmoothScrollingLink>
                    </li>
                    <li>
                      <SmoothScrollingLink to="services">
                        Glass & Wheel Coating
                      </SmoothScrollingLink>
                    </li>
                  </ul>
                </div>

                {/* Col 4: Studio Direct Hub */}
                <div className="premium-footer-col">
                  <h4 className="premium-footer-heading">VISIT / REACH US</h4>
                  <div className="premium-footer-contact-items">
                    <div className="premium-footer-contact-item">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>
                        In Front of Golden Winds, DY Patil, Pune – 411047
                      </span>
                    </div>
                    <div className="premium-footer-contact-item">
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:9112829911">+91 91128 29911</a>
                    </div>
                    <div className="premium-footer-contact-item">
                      <i className="fa-solid fa-clock"></i>
                      <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                  <SmoothScrollingLink to="booking">
                    <button className="premium-footer-cta-btn">
                      BOOK APPOINTMENT{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </SmoothScrollingLink>
                </div>
              </div>

              {/* Bottom Copyright & Credit Bar */}
              <div className="premium-footer-bottom">
                <p className="premium-footer-copy">
                  &copy; {new Date().getFullYear()}{" "}
                  <strong>911 Premium Car Detailing Studio</strong>. All rights
                  reserved.
                </p>
                <p className="premium-footer-credit">
                  Crafted with <span className="heart-pulse">❤️</span> by{" "}
                  <a
                    href="https://itzzakib07.github.io/dopefolio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Akib Mulla
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </section>

        {/* WhatsAPP Button */}
        <Tooltip title="Chat with us on Whatsapp" placement="right">
          <span className="whatsapp">
            <button>
              <a
                href="https://wa.me/message/FXCIZ4L4CNDJK1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </button>
          </span>
        </Tooltip>

        {/* Scroll Top button */}
        <SmoothScrollingLink to="home">
          <Tooltip title="Scroll to Top" placement="left">
            <span className="scroll">
              <button>
                <i className="fa-solid fa-jet-fighter-up"></i>
              </button>
            </span>
          </Tooltip>
        </SmoothScrollingLink>
      </section>
    </>
  );
};

export default Home;
