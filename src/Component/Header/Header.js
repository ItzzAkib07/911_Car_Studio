import React from "react";
import { Tooltip, Box } from "@mui/material";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";
import PortfolioCreditBadge from "../PortfolioCreditBadge";

const Header = ({ isScrolled, slide, close }) => {
  return (
    <header
      id="header"
      className={`sticky top-0 z-[1000] w-full h-[4.25rem] max-md:h-[4.15rem] px-8 max-md:px-5 flex items-center justify-center transition-all duration-300 box-border backdrop-blur-xl ${
        isScrolled
          ? "bg-[#080808]/98 border-b border-[#EBBB8D]/30 shadow-[0_6px_24px_rgba(0,0,0,0.75)]"
          : "bg-[#0c0c0c]/94 border-b border-[#EBBB8D]/20 text-neutral-100"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left Group: Menu button & Brand Logo */}
        <div className="flex items-center gap-5 max-md:gap-3">
          {/* Open side-navbar button (Mobile / Tablet) */}
          <Tooltip title="Menu">
            <div
              className="flex lg:hidden items-center justify-center cursor-pointer bg-transparent border-none p-1.5 rounded-lg text-white hover:text-[#EBBB8D] transition-all duration-300 hover:scale-105"
              onClick={slide}
              id="open"
            >
              <span className="text-xl max-md:text-lg flex items-center justify-center">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
          </Tooltip>

          {/* Logo & Studio Title */}
          <div className="flex items-center cursor-pointer">
            <SmoothScrollingLink to="home">
              <div className="flex items-center gap-3.5 max-md:gap-2.5 group">
                <img
                  src={logo}
                  alt="911 Car Detailing Studio Logo"
                  className="h-[2.65rem] max-md:h-[2.25rem] w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(235,187,141,0.4)]"
                />
                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-[1.35rem] max-md:text-[1.15rem] font-black text-white tracking-[0.08rem] leading-none transition-all group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    911
                  </span>
                  <span className="text-[0.68rem] max-md:text-[0.55rem] font-extrabold text-[#EBBB8D] tracking-[0.12rem] uppercase leading-none mt-[0.15rem] transition-all group-hover:text-[#F5D5B5] group-hover:drop-shadow-[0_0_10px_rgba(235,187,141,0.5)]">
                    CAR DETAILING STUDIO
                  </span>
                </div>
              </div>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { to: "home", label: "Home" },
            { to: "quality", label: "Quality" },
            { to: "services", label: "Services" },
            { to: "pricing", label: "Pricing" },
            { to: "booking", label: "Book Service" },
            { to: "contact", label: "Contact Us" },
          ].map((item) => (
            <SmoothScrollingLink key={item.to} to={item.to}>
              <span className="relative py-1.5 px-1 text-[0.9rem] font-semibold text-white tracking-[0.06rem] uppercase transition-colors duration-200 hover:text-[#EBBB8D] group cursor-pointer inline-block">
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#EBBB8D] to-[#F5D5B5] rounded-full transition-all duration-250 group-hover:w-full"></span>
              </span>
            </SmoothScrollingLink>
          ))}
        </nav>
      </div>

      {/* Dark Backdrop Overlay for Mobile Drawer */}
      <div
        id="side-navbar-overlay"
        className="hidden fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-sm z-[1050] transition-opacity duration-300"
        onClick={close}
      ></div>

      {/* Side-navbar section (Mobile Drawer) */}
      <div
        className="fixed top-0 left-0 w-0 h-screen h-[100dvh] z-[1100] flex flex-col bg-[#111111] border-r border-[#EBBB8D]/20 shadow-[10px_0_40px_rgba(0,0,0,0.8)] overflow-y-auto overflow-x-hidden transition-[width] duration-350 ease-out box-border"
        id="side-navbar"
      >
        {/* Title and close button */}
        <div className="h-[4.25rem] min-h-[4.25rem] w-full flex items-center justify-between px-5 box-border border-b border-[#EBBB8D]/15 bg-[#151515]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <img src={logo} alt="911 Logo" className="h-8 w-auto" />
            <span className="text-[0.95rem] font-extrabold text-white tracking-[0.08rem]">
              911 CAR DETAILING
            </span>
          </div>

          <button
            id="close"
            onClick={close}
            aria-label="Close Menu"
            className="w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full bg-[#EBBB8D]/10 border border-[#EBBB8D]/20 text-[#EBBB8D] text-lg hover:bg-[#EBBB8D] hover:text-[#111111] hover:rotate-90 transition-all duration-300 outline-none cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Side Nav Items */}
        <div className="w-full py-5 px-3.5 flex flex-col gap-1.5 box-border">
          {[
            { to: "home", icon: "fa-solid fa-home", label: "Home" },
            {
              to: "quality",
              icon: "fa-solid fa-shield-halved",
              label: "Quality Assured",
            },
            {
              to: "services",
              icon: "fa-solid fa-gear",
              label: "Our Services",
            },
            {
              to: "pricing",
              icon: "fa-solid fa-tags",
              label: "Pricing Plans",
            },
            {
              to: "booking",
              icon: "fa-solid fa-user-pen",
              label: "Book Service",
            },
            {
              to: "contact",
              icon: "fa-solid fa-phone",
              label: "Contact Us",
            },
          ].map((item) => (
            <SmoothScrollingLink key={item.to} to={item.to}>
              <span
                className="flex items-center gap-4 h-[3.1rem] px-5 rounded-xl text-white font-semibold text-[0.95rem] whitespace-nowrap transition-all duration-200 hover:text-[#EBBB8D] hover:bg-[#EBBB8D]/12 hover:translate-x-1 cursor-pointer group"
                onClick={close}
              >
                <i
                  className={`${item.icon} text-base text-[#EBBB8D] w-5 text-center transition-transform duration-200 group-hover:scale-115`}
                ></i>
                {item.label}
              </span>
            </SmoothScrollingLink>
          ))}
        </div>

        {/* Social Icons & Drawer Footer */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: "auto",
            paddingBottom: "1.5rem",
          }}
        >
          <h2 className="text-[#EBBB8D] text-[0.95rem] font-bold tracking-[0.08rem] uppercase mb-2">
            Get In Touch With Us
          </h2>

          <div className="flex justify-center items-center gap-4 my-3 list-none">
            {[
              {
                href: "https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL",
                icon: "fa-brands fa-facebook",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/911_premiumcardetailing/",
                icon: "fa-brands fa-instagram",
                label: "Instagram",
              },
              {
                href: "https://wa.me/message/IVQCEUWS35SAG1",
                icon: "fa-brands fa-whatsapp",
                label: "WhatsApp",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center no-underline bg-[#EBBB8D]/10 border border-[#EBBB8D]/25 text-[#EBBB8D] hover:bg-[#EBBB8D] hover:text-[#111111] hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Drawer Footer with Credit Badge */}
          <footer className="text-center px-4 flex flex-col items-center">
            <span className="text-xs text-neutral-400 block mb-2">
              &copy;{new Date().getFullYear()}, 911 Car Detailing Studio
            </span>

            <PortfolioCreditBadge />
          </footer>
        </Box>
      </div>
    </header>
  );
};

export default Header;
