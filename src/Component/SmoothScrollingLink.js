import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SmoothScrollingLink = ({ to, children }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={100}
      offset={-60} // Offset to clear the sticky header height (5rem + buffer).
      onClick={() => {
        // Handle any additional logic here if needed before scrolling.
        document.getElementById('side-navbar').style.width = "0";
      }}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollingLink;
