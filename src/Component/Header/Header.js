import React from "react";
import { Tooltip, Box } from "@mui/material";
import SmoothScrollingLink from "../SmoothScrollingLink";
import logo from "../../images/911_logo.png";
import PortfolioCreditBadge from "../PortfolioCreditBadge";

const Header = ({ isScrolled, slide, close }) => {
  return (
    <header
      id="header"
      className={`sticky top-0 z-[1000] w-full h-[4.35rem] max-md:h-[4.15rem] px-8 max-md:px-5 flex items-center justify-center transition-all duration-300 box-border backdrop-blur-xl ${
        isScrolled
          ? "bg-[#010101]/95 border-b border-[#D40000]/25 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(212,0,0,0.08)]"
          : "bg-[#010101]/85 border-b border-white/[0.08] text-[#E0D8D5]"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left Group: Menu button & Brand Logo */}
        <div className="flex items-center gap-5 max-md:gap-3">
          {/* Open side-navbar button (Mobile / Tablet) */}
          <Tooltip title="Menu">
            <div
              className="flex lg:hidden items-center justify-center cursor-pointer bg-[#1B1716]/80 border border-white/10 p-2 rounded-xl text-[#E0D8D5] hover:text-[#D40000] hover:border-[#D40000]/40 transition-all duration-300 hover:scale-105"
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
                  className="h-[2.75rem] max-md:h-[2.3rem] w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(212,0,0,0.45)]"
                />
                <div className="flex flex-col justify-center leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[1.4rem] max-md:text-[1.2rem] font-black text-[#E0D8D5] tracking-[0.12rem] leading-none transition-all group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(224,216,213,0.5)]">
                      911
                    </span>
                    <span className="text-[0.65rem] font-extrabold text-[#D40000] tracking-[0.15rem] uppercase">
                      STUDIO
                    </span>
                  </div>
                  <span className="text-[0.68rem] max-md:text-[0.55rem] font-extrabold text-[#E0D8D5]/80 tracking-[0.16rem] uppercase leading-none mt-[0.2rem] transition-all group-hover:text-[#E0D8D5]">
                    CAR DETAILING STUDIO
                  </span>
                </div>
              </div>
            </SmoothScrollingLink>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {[
            { to: "home", label: "Home" },
            { to: "quality", label: "Quality" },
            { to: "services", label: "Services" },
            { to: "benefits", label: "3D Lab" },
            { to: "pricing", label: "Pricing" },
            { to: "booking", label: "Booking" },
            { to: "contact", label: "Contact" },
          ].map((item) => (
            <SmoothScrollingLink key={item.to} to={item.to}>
              <span className="relative py-1.5 px-1 text-[0.88rem] font-bold text-[#E0D8D5]/90 tracking-[0.08rem] uppercase transition-colors duration-200 hover:text-[#D40000] group cursor-pointer inline-block">
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D40000] shadow-[0_0_8px_#D40000] rounded-full transition-all duration-250 group-hover:w-full"></span>
              </span>
            </SmoothScrollingLink>
          ))}
        </nav>

        {/* Desktop Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <SmoothScrollingLink to="booking">
            <button className="py-2.5 px-6 rounded-full bg-[#D40000] hover:bg-[#510404] text-white text-[0.78rem] font-black tracking-[0.12rem] uppercase shadow-[0_4px_18px_rgba(212,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(212,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none flex items-center gap-2">
              <span>BOOK APPOINTMENT</span>
              <i className="fa-solid fa-arrow-right text-[0.7rem]"></i>
            </button>
          </SmoothScrollingLink>
        </div>
      </div>

      {/* Dark Backdrop Overlay for Mobile Drawer */}
      <div
        id="side-navbar-overlay"
        className="hidden fixed inset-0 w-screen h-screen bg-black/80 backdrop-blur-md z-[1050] transition-opacity duration-300"
        onClick={close}
      ></div>

      {/* Side-navbar section (Mobile Drawer) */}
      <div
        className="fixed top-0 left-0 w-0 h-screen h-[100dvh] z-[1100] flex flex-col bg-[#010101] border-r border-white/10 shadow-[10px_0_40px_rgba(0,0,0,0.9)] overflow-y-auto overflow-x-hidden transition-[width] duration-350 ease-out box-border"
        id="side-navbar"
      >
        {/* Title and close button */}
        <div className="h-[4.35rem] min-h-[4.35rem] w-full flex items-center justify-between px-5 box-border border-b border-[#D40000]/20 bg-[#0D0C0B]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <img src={logo} alt="911 Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-black text-[#E0D8D5] tracking-[0.08rem]">
                911 STUDIO
              </span>
              <span className="text-[0.62rem] font-extrabold text-[#D40000] tracking-[0.12rem] uppercase">
                CLEAN • CORRECT • PROTECT
              </span>
            </div>
          </div>

          <button
            id="close"
            onClick={close}
            aria-label="Close Menu"
            className="w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full bg-[#D40000]/10 border border-[#D40000]/30 text-[#D40000] text-lg hover:bg-[#D40000] hover:text-white hover:rotate-90 transition-all duration-300 outline-none cursor-pointer"
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
              to: "benefits",
              icon: "fa-solid fa-cube",
              label: "3D Detailing Lab",
            },
            {
              to: "pricing",
              icon: "fa-solid fa-tags",
              label: "Pricing Plans",
            },
            {
              to: "booking",
              icon: "fa-solid fa-calendar-check",
              label: "Book Service",
            },
            {
              to: "contact",
              icon: "fa-solid fa-phone",
              label: "Contact Studio",
            },
          ].map((item) => (
            <SmoothScrollingLink key={item.to} to={item.to}>
              <span
                className="flex items-center gap-4 h-[3.2rem] px-5 rounded-xl text-[#E0D8D5] font-bold text-[0.92rem] whitespace-nowrap transition-all duration-200 hover:text-white hover:bg-[#D40000]/15 hover:border-l-2 hover:border-[#D40000] hover:translate-x-1 cursor-pointer group"
                onClick={close}
              >
                <i
                  className={`${item.icon} text-base text-[#D40000] w-5 text-center transition-transform duration-200 group-hover:scale-115`}
                ></i>
                {item.label}
              </span>
            </SmoothScrollingLink>
          ))}
        </div>

        {/* Mobile Booking Action */}
        <div className="px-5 mb-4">
          <SmoothScrollingLink to="booking">
            <button
              onClick={close}
              className="w-full py-3 px-5 rounded-full bg-[#D40000] hover:bg-[#510404] text-white text-[0.8rem] font-black tracking-[0.12rem] uppercase shadow-[0_4px_18px_rgba(212,0,0,0.4)] transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-2"
            >
              <span>BOOK APPOINTMENT</span>
              <i className="fa-solid fa-arrow-right text-[0.7rem]"></i>
            </button>
          </SmoothScrollingLink>
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
          <span className="text-[#E0D8D5]/70 text-[0.75rem] font-bold tracking-[0.12rem] uppercase mb-2 block">
            GET IN TOUCH WITH US
          </span>

          <div className="flex justify-center items-center gap-3.5 my-3 list-none">
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
                className="w-9 h-9 rounded-full flex items-center justify-center no-underline bg-white/5 border border-white/10 text-[#E0D8D5] hover:bg-[#D40000] hover:text-white hover:border-[#D40000] hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Drawer Footer with Credit Badge */}
          <footer className="text-center px-4 flex flex-col items-center">
            <span className="text-xs text-neutral-400 block mb-2 font-medium">
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
