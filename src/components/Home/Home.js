import React, { useEffect, useState } from "react";
import "./Home.css";
import Link from "./HomeComponents/Link";
import qrPlaceHolder from "./HomeComponents/qrPlaceHolder.svg";
import QRCodeReact from "./HomeComponents/qrgentool";
import { qrTypes } from "./HomeComponents/ToolList";
import Properties from "./HomeComponents/Properties";
const Home = () => {
  const [activeTool, setActiveTool] = useState("link");
  const [data, setData] = useState(null);
  const [img, setImg] = useState();
  const [clearInput, setClearInput] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [qrColor, setQrColor] = useState("#000000");

  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (data === "" || !data) {
      setShowError(true);
    } else setShowError(false);
  }, [data]);
  console.log(data);
  const handleToolTypeClick = (toolId) => {
    setActiveTool(toolId);
    setData("");
    setClearInput(true);
  };
  return (
    <div className="container">
      <div className="home-container">
        <div className="tool-container-home">
          <div className="grid-container-home">
            {qrTypes.map((item, index) => (
              <div
                key={index}
                className={`grid-5 center ${
                  activeTool === item.id ? "active-grid-home" : ""
                }`}
                onClick={() => handleToolTypeClick(item.id)}
              >
                <span className="p-5 p-v-15">{item.content[1]}</span>
                <span className="p-5 p-v-15">{item.content[0]}</span>
              </div>
            ))}
          </div>
          <Link prop={{ data, setData, clearInput, showError }} />
          <Properties prop={{ setBackgroundColor, backgroundColor, qrColor, setQrColor }} />
        </div>
        <div className="qr-container-home center">
          <div className="center">
            {!data && (
              <div>
                <img
                  src={qrPlaceHolder}
                  alt="qrSvgPlaceHolder"
                  className="opacity-3"
                />
                <div
                  className={`download-qr-container-home p-v-15 ${
                    data ? "" : "opacity-3"
                  }`}
                >
                  <span className="p-v-15 png-button-home">Download PNG</span>
                  <span className="p-v-15 svg-button-home">Download WEBP</span>
                </div>
              </div>
            )}
            {data && <QRCodeReact prop={{ data, img, backgroundColor, qrColor }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
