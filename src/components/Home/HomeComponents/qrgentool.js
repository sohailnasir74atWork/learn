import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const QRCodeReact = ({ url, img }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (url !== null) {
      // Clear the previous content of the canvas element
      const canvasElement = canvasRef.current;
      while (canvasElement.firstChild) {
        canvasElement.removeChild(canvasElement.firstChild);
      }

      const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        image: img,
        dotsOptions: {
          color: "#4267b2",
          type: "rounded",
        },
        backgroundOptions: {
          color: "",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
      });

      // Append the new QR code to the cleared canvas element
      qrCode.append(canvasElement);
    }
  }, [url, img, canvasRef]);

  return <div ref={canvasRef}></div>;
};

export default QRCodeReact;
