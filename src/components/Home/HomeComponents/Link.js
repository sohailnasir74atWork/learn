import React, { useEffect, useState } from "react";
import "../Home.css";

const Link = ({ prop }) => {
  const { setData, clearInput, showError } = prop;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (clearInput) {
      setValue("");
    }
  }, [clearInput]);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
  };

  const handleBlur = () => {
    setData(value); // Call setData on focus out
  };

  console.log(showError);

  return (
    <div className="input-container-home p-v-15">
      <p>Submit Url</p>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur} // Call handleBlur on focus out
        placeholder="https://"
      />
      {showError && <p style={{ color: "tomato" }}>This field is required</p>}
      <p>Your QR code will open this URL.</p>
    </div>
  );
};

export default Link;
