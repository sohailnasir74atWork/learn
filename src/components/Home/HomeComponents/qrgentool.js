import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { parseLinearGradient } from "./QrHelper";
import qrPlaceHolder from "./qrPlaceHolder.svg";

const QRCodeReact = ({ prop }) => {
  const {
    data,
    img,
    backgroundColor,
    qrColor,
    solidColorBackground,
    solidColorQR,
  } = prop;
  const [qrCode, setQrCode] = useState(null);
  const gradientBackground = parseLinearGradient(backgroundColor);
  const gradientQR = parseLinearGradient(qrColor);

  const canvasRef = useRef(null);

  function handleDownloadClick(typeOfImg) {
    if (qrCode && qrCode.download) {
      qrCode
        .download({
          name: "MyQRCode",
          extension: typeOfImg,
        })
        .then(() => {})
        .catch((error) => {});
    } else {
      console.error("Download function not available in QRCodeStyling.");
    }
  }

  useEffect(() => {
    if (data !== null) {
      const canvasElement = canvasRef.current;
      while (canvasElement.firstChild) {
        canvasElement.removeChild(canvasElement.firstChild);
      }

      const newQrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: data,
        image: img,
        dotsOptions: {
          ...(solidColorQR
            ? { color: qrColor }
            : {
                gradient: {
                  colorStops: gradientQR,
                },
              }),
        },
        backgroundOptions: {
          ...(solidColorBackground
            ? { color: backgroundColor }
            : {
                gradient: {
                  colorStops: gradientBackground,
                },
              }),
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
      });

      setQrCode(newQrCode);
      newQrCode.append(canvasElement);
    }
  }, [data, img, canvasRef, backgroundColor, qrColor]);

  return (
    <div>
      <div ref={canvasRef}></div>
     {!data && <img
                  src={qrPlaceHolder}
                  alt="qrSvgPlaceHolder"
                  className="opacity-3"
                />}
      <div
        className={`download-qr-container-home p-v-15 ${
          data ? "" : "opacity-3"
        }`}
      >
        <span
          className="p-v-15 png-button-home"
          onClick={() => handleDownloadClick("png")}
        >
          Download PNG
        </span>
        <span
          className="p-v-15 svg-button-home"
          onClick={() => handleDownloadClick("webp")}
        >
          Download WEBP
        </span>
      </div>
    </div>
  );
};

export default QRCodeReact;
