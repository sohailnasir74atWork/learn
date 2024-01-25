import React, { useEffect, useRef, useState } from "react";
import { FaCog, FaMinus, FaPlus, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { SketchPicker } from "react-color";
import "../Home.css";
import GradientColorPicker from "./GradientPicker";
const Properties = ({ prop }) => {
  const { setBackgroundColor, backgroundColor, qrColor, setQrColor } = prop;

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => setIsAccordionOpen((prev) => !prev);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isGradientToggleOn, setIsGradientToggleOn] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);

  const handleColorChange = (color, flag) => {
    if (flag === "backgroundColor") setBackgroundColor(color.hex);
    if (flag === "qrColor") setQrColor(color.hex);
  };

  const handleToggle = () => {
    setIsToggleOn((prev) => !prev);
    setShowColorPicker(false);
  };

  const handleGradientToggle = () => {
    setIsGradientToggleOn((prev) => !prev);
    setShowColorPicker(false);
  };

  const handleDemoClick = (flag) => {
    if (!isToggleOn) setShowColorPicker(flag);
  };

  const handleClickOutside = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (isToggleOn) setBackgroundColor("Transparent");
    if (!isToggleOn) setBackgroundColor("#ffffff");
  }, [isToggleOn, setBackgroundColor]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`option-container-home p-v-15 ${isAccordionOpen ? "accordion-open" : ""}`}>
      <div className="accordion-header">
        <div className="icon"><FaCog /></div>
        <div className="title">Options</div>
        <div className="icon align-right" onClick={toggleAccordion}>
          {!isAccordionOpen && <FaPlus />}
          {isAccordionOpen && <FaMinus />}
        </div>
      </div>

      {isAccordionOpen && (
        <div className="accordion-content" style={{ maxHeight: "500px" }}>
          <span className="block">Color</span>
          <span className="block">Background Color</span>
          <div className="color-picker-container">
            <input type="text" value={backgroundColor} readOnly className="input-color-home" />
            <div
              className="color-demo"
              style={{ backgroundColor }}
              onClick={() => handleDemoClick("backgroundColor")}
            />
            <div
              className="color-picker"
              ref={colorPickerRef}
              style={{ display: showColorPicker === "backgroundColor" ? "block" : "none" }}
            >
              <SketchPicker color={backgroundColor} onChange={(color) => handleColorChange(color, "backgroundColor")} />
            </div>
          </div>
          <div className="toggle-button" onClick={handleToggle}>
            {isToggleOn ? <FaToggleOn /> : <FaToggleOff />}
            <span className="font-m" style={{ marginLeft: "10px" }}>Transparent Background Color</span>
          </div>
          <br/>
          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
          <span className="block">QR Color</span>
          <div className="color-picker-container">
            <input type="text" value={qrColor} readOnly className="input-color-home" />
            <div
              className="color-demo"
              style={{ backgroundColor: qrColor }}
              onClick={() => handleDemoClick("qrColor")}
            />
            <div
              className="color-picker"
              ref={colorPickerRef}
              style={{ display: showColorPicker === "qrColor" ? "block" : "none" }}
            >
              <SketchPicker color={qrColor} onChange={(color) => handleColorChange(color, "qrColor")} />
            </div>
          </div>
          <div className="toggle-button" onClick={handleGradientToggle}>
            {isGradientToggleOn ? <FaToggleOn /> : <FaToggleOff />}
            <span className="font-m" style={{ marginLeft: "10px" }}>Gradient QR Color</span>
          </div>
          <GradientColorPicker/>
        </div>
      )}
    </div>
  );
};

export default Properties;
