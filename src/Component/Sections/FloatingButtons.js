import React from "react";
import { Tooltip } from "@mui/material";
import SmoothScrollingLink from "../SmoothScrollingLink";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <Tooltip title="Chat with us on Whatsapp" placement="right">
        <a
          href="https://wa.me/message/IVQCEUWS35SAG1"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 left-6 w-[3.25rem] h-[3.25rem] rounded-full bg-[#25d366] flex items-center justify-center text-white text-[1.85rem] z-[999] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] hover:scale-110 transition-all duration-300 no-underline cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-white leading-none"></i>
        </a>
      </Tooltip>

      {/* Scroll to Top Floating Button */}
      <SmoothScrollingLink to="home" className="no-underline">
        <Tooltip title="Scroll to Top" placement="left">
          <button
            type="button"
            className="fixed bottom-6 right-6 max-sm:right-4 w-[3.25rem] h-[3.25rem] rounded-full bg-[#0D0C0B] hover:bg-[#D40000] border-[1.5px] border-[rgba(224,216,213,0.2)] hover:border-[#D40000] text-[#E0D8D5] hover:text-white flex items-center justify-center text-[1.35rem] z-[999] shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_6px_25px_rgba(212,0,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-jet-fighter-up leading-none transition-colors duration-300"></i>
          </button>
        </Tooltip>
      </SmoothScrollingLink>
    </>
  );
};

export default FloatingButtons;
