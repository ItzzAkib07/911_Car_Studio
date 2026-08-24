import React from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

const SmoothScrollingLink = ({
  to,
  children,
  className = "",
  style = {},
  onClick,
}) => {
  const handleClick = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Close mobile side drawer and overlay if open
    const sideNav = document.getElementById("side-navbar");
    if (sideNav) {
      sideNav.style.width = "0";
    }
    const overlay = document.getElementById("side-navbar-overlay");
    if (overlay) {
      overlay.style.display = "none";
    }

    if (onClick) {
      onClick(e);
    }

    if (!to || to === "home" || to === "top") {
      // Smoothly scroll to the absolute top of the page so header does not obscure hero
      scroll.scrollToTop({
        duration: 500,
        smooth: "easeInOutCubic",
      });
    } else {
      // Smoothly scroll to target section with offset to clear sticky header
      scroller.scrollTo(to, {
        duration: 550,
        smooth: "easeInOutCubic",
        offset: -70, // Clears the ~65px sticky header and leaves comfortable breathing room
      });
    }
  };

  return (
    <a
      href={`#${to || "home"}`}
      onClick={handleClick}
      className={className}
      style={{
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        display: "inline-flex",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </a>
  );
};

export default SmoothScrollingLink;
