import React, { useEffect, useRef, useState } from "react";
import { FaCog, FaMinus, FaPlus } from "react-icons/fa";
import "../Home.css";
import GradientColorPicker from "./GradientPicker";

const Properties = ({ prop }) => {
  const {
    setBackgroundColor,
    backgroundColor,
    setQrColor,
    qrColor,
    setSolidColorBackground,
    solidColorBackground,
    setSolidColorQR,
    solidColorQR,
    
  } = prop;

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => setIsAccordionOpen((prev) => !prev);

  return (
    <div
      className={`option-container-home p-v-15 ${
        isAccordionOpen ? "accordion-open" : ""
      }`}
    >
      <div className="accordion-header">
        <div className="icon">
          <FaCog />
        </div>
        <div className="title">Options</div>
        <div className="icon align-right" onClick={toggleAccordion}>
          {!isAccordionOpen && <FaPlus />}
          {isAccordionOpen && <FaMinus />}
        </div>
      </div>
      {isAccordionOpen && (
        <div className="accordion-content" style={{ maxHeight: "500px" }}>
          <span className="block">Color</span>
          <hr />
          <br />
          <span className="block sub-heading">Background Color</span>
          <GradientColorPicker
            setColor={setBackgroundColor}
            color={backgroundColor}
            setSolidColor={setSolidColorBackground}
            solidColor={solidColorBackground}
          />
          <hr />
          <br />
          <span className="block sub-heading">QR Color</span>
          <GradientColorPicker
            setColor={setQrColor}
            color={qrColor}
            setSolidColor={setSolidColorQR}
            solidColor={solidColorQR}
            hideTransparent
          />
        </div>
      )}
    </div>
  );
};

export default Properties;
