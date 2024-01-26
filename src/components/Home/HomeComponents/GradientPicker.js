import React, { useState, useEffect, useRef } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import "../Home.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const GradientPicker = ({ onChange, value }) => {
  return (
    <ColorPicker
      value={value}
      onChange={onChange}
      className="color-picker-container"
      width={200}
      height={100}
      hidePresets
      hideEyeDrop
      hideColorGuide
      hideInputType
      hideGradientStop
      presets={false}
      hideInputs
      setGradient
      hideColorTypeBtns
      hideAdvancedSliders
      colorStops={[
        { color: "rgba(255, 0, 0, 1)", position: 0 },
        { color: "rgba(0, 255, 0, 1)", position: 0.5 },
        { color: "rgba(0, 0, 255, 1)", position: 1 },
      ]}
    />
  );
};

const ColorDemo = ({ color, onClick }) => {
  const demoStyle = {
    background: color,
  };
  return <div style={demoStyle} onClick={onClick} className="color-demo"></div>;
};

const Gradient = ({
  color,
  setColor,
  setSolidColor,
  solidColor,
  hideTransparent,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isTransparentToggleOn, setIsTransparentToggleOn] = useState(false);
  const [isGradientToggleOn, setIsGradientToggleOn] = useState(false);
  const [showError, setShowError] = useState(false);

  const colorPickerRef = useRef();
  const { setSolid, setGradient, valueToHex } = useColorPicker(color, setColor);
  const hexValue = valueToHex(color);

  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };

  const handleDemoClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleTransparentToggle = () => {
  if (!isGradientToggleOn) {
    setIsTransparentToggleOn((prev) => {
      const newTransparentState = !prev;
      setColor(newTransparentState ? "" : "#ffffff");
      return newTransparentState;
    });
  } else {
    setShowError((prev) => !prev);
  }

  // Hide the color picker.
  setShowColorPicker(false);
};


  const handleGradientToggle = () => {
    setIsGradientToggleOn((prev) => !prev);
    setSolidColor(!solidColor);
    if (isGradientToggleOn) {
      setSolid();
    } else setGradient();
    setShowColorPicker(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

console.log(color)
  return (
    <div>
      <div className="color-picker-container">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={isGradientToggleOn ? color : (isTransparentToggleOn ? 'Transparent':  hexValue)}
            readOnly
            className="input-color-home"
          />
          <ColorDemo color={color} onClick={handleDemoClick} />
        </div>
        <div
          className="color-picker"
          ref={colorPickerRef}
          style={{ display: showColorPicker ? "block" : "none" }}
        >
          <GradientPicker value={color} onChange={handleColorChange} />
        </div>
        <div>
          {!hideTransparent && (
            <div className="toggle-button">
              <div onClick={handleTransparentToggle} className="flex-align-center">
                {isTransparentToggleOn ? <FaToggleOn /> : <FaToggleOff />}
              </div>
              <span className="font-m" style={{ marginLeft: "10px" }}>
                Transparent
              </span>
              {showError && (
                <>
                  <hr />{" "}
                  <span className="error" style={{ display: "block" }}>
                    Transparent Background cant be created in Gredient Mode
                  </span>
                </>
              )}
            </div>
          )}
          <div className="toggle-button">
            <div onClick={handleGradientToggle}className="flex-align-center">
              {isGradientToggleOn ? <FaToggleOn /> : <FaToggleOff />}
            </div>
            <span className="font-m" style={{ marginLeft: "10px" }}>
              Gradient
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;