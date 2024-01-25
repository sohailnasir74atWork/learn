import {
    FaLink,
    FaPhone,
    FaTextWidth,
    FaSms,
    FaMailBulk,
  } from "react-icons/fa";

export const qrTypes = [
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