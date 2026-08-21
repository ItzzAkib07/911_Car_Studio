import React from "react";
import { Tooltip, Box } from "@mui/material";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";

const Header = ({ isScrolled, slide, close }) => {
  return (
    <header id="header" className={`header ${isScrolled ? "scrolled" : ""}`}>
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
              <i className="fa-solid fa-shield-halved"></i> Quality Assured
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
  );
};

export default Header;
