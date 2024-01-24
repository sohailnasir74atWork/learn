import React, { useState } from "react";
import "./Home.css";
import {
  FaLink,
  FaPhone,
  FaTextWidth,
  FaSms,
  FaMailBulk,
} from "react-icons/fa";
import Link from "./HomeComponents/Link";
import qrPlaceHolder from "./HomeComponents/qrPlaceHolder.svg";
import QRCodeReact from "./HomeComponents/qrgentool";

const Home = () => {
  const [activeTool, setActiveTool] = useState("link");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState();

  const qrTypes = [
    { id: "link", content: ["Link", <FaLink />] },
    { id: "email", content: ["E-mail", <FaMailBulk />] },
    { id: "call", content: ["Call", <FaPhone />] },
    { id: "sms", content: ["SMS", <FaSms />] },
    { id: "text", content: ["Text", <FaTextWidth />] },
    { id: "vcard", content: ["V-Card", <FaLink />] },
    { id: "wifi", content: ["Wifi", <FaMailBulk />] },
    { id: "whatsapp", content: ["WhatsApp", <FaPhone />] },
    { id: "paypal", content: ["PayPal", <FaSms />] },
    { id: "events", content: ["Event", <FaTextWidth />] },
    { id: "pdf", content: ["PDF", <FaLink />] },
    { id: "app", content: ["App", <FaMailBulk />] },
    { id: "img", content: ["IMG", <FaPhone />] },
    { id: "vedio", content: ["Vedio", <FaSms />] },
    { id: "social", content: ["Social", <FaTextWidth />] },
  ];

  const handleToolTypeClick = (toolId) => {
    setActiveTool(toolId);
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
          <Link prop={{ url, setUrl }} />
        </div>
        <div className="qr-container-home center">
          <div className="center">
            {!url && (
              <img
                src={qrPlaceHolder}
                alt="qrSvgPlaceHolder"
                className="opacity-3"
              />
            )}
            {url && <QRCodeReact url={url} img={img} />}
          </div>
          <div
            className={`download-qr-container-home p-v-15 ${
              url ? "" : "opacity-3"
            }`}
          >
            <span className="p-v-15 png-button-home">Download PNG</span>
            <span className="p-v-15 svg-button-home">Download SVG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
