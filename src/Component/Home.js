import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// Components
import Header from "./Header/Header";
import OfferModal from "./OfferModal/OfferModal";
import IntroSplash from "./Sections/IntroSplash";
import HeroSection from "./Sections/HeroSection";
import QualitySection from "./Sections/QualitySection";
import ServicesSection from "./Sections/ServicesSection";
import BenefitsSection from "./Sections/BenefitsSection";
import MoreServicesSection from "./Sections/MoreServicesSection";
import PricingSection from "./Sections/PricingSection";
import BookingSection from "./Sections/BookingSection";
import ContactFooterSection from "./Sections/ContactFooterSection";
import FloatingButtons from "./Sections/FloatingButtons";

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // Sticky header scroll listener
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Function to slide open the mobile drawer
  function slide() {
    const el = document.getElementById("side-navbar");
    if (el) el.style.width = "20rem";
    const overlay = document.getElementById("side-navbar-overlay");
    if (overlay) overlay.style.display = "block";
  }

  // Function to close the mobile drawer
  function close() {
    const el = document.getElementById("side-navbar");
    if (el) el.style.width = "0";
    const overlay = document.getElementById("side-navbar-overlay");
    if (overlay) overlay.style.display = "none";
  }

  // Landing page splash screen state
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowFirstSection(false);
    }, 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showFirstSection && <IntroSplash />}

      {/* Main Container */}
      <section className="home-container">
        {/* Header section — Only visible after intro splash screen finishes */}
        {!showFirstSection && (
          <>
            <Header isScrolled={isScrolled} slide={slide} close={close} />
            {/* Offer Popup Modal */}
            <OfferModal />
          </>
        )}

        {/* Body section */}
        <section className="home-sections">
          <HeroSection />
          <QualitySection />
          <ServicesSection />
          <BenefitsSection />
          <MoreServicesSection />
          <PricingSection />
          <BookingSection />
          <ContactFooterSection />
        </section>

        {/* Floating Action Buttons */}
        <FloatingButtons />
      </section>
    </>
  );
};

export default Home;
