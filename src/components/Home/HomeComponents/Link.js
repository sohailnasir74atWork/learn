import React, { useState } from "react";
import "../Home.css";

const Link = ({ prop }) => {
  const { setUrl } = prop;
  const [value, setValue] = useState(""); // Add state for input value

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue); // Update the local state
    setUrl(updatedValue);
  };

  return (
    <div className="input-container-home p-v-15">
      <p>Submit Url</p>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter URL"
      />
    </div>
  );
};

export default Link;
