import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import "../Home.css";

const GradientPicker = ({ onChange, value }) => {
  return (
    <ColorPicker
      value={value}
      onChange={onChange}
      className='color-picker-container'
    />
  );
};

const GradientDemo = ({ gradientColor, onClick }) => {
  const demoStyle = {
    // width: '100%',
    // height: '100%',
    background: gradientColor,
    // borderRadius: '4px',
  };

  return <div style={demoStyle} onClick={onClick} className='color-demo'></div>;
};

const Gradient = () => {
  const [gradientColor, setGradientColor] = useState('rgba(255, 255, 255, 1)');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef();

  const handleClickOutside = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
      setShowColorPicker(false);
    }
  };

  const handleDemoClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleGradientChange = (color) => {
    setGradientColor(color);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="color-picker-container">
        <input type="text" value='' readOnly className="input-color-home" />
        <GradientDemo gradientColor={gradientColor} onClick={handleDemoClick} />
        <div
          className="color-picker"
          ref={colorPickerRef}
          style={{ display: showColorPicker ? "block" : "none" }}
        >
          <GradientPicker value={gradientColor} onChange={handleGradientChange} />
        </div>
      </div>
    </div>
  );
};

export default Gradient;
