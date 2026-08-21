import React from "react";
import { Tooltip } from "@mui/material";
import SmoothScrollingLink from "../SmoothScrollingLink";

const FloatingButtons = () => {
  return (
    <>
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
    </>
  );
};

export default FloatingButtons;
