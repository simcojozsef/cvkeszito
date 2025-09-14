import React, { useState, useEffect } from "react";
import "./CookiePopup.css";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShowPopup(true);
    }
    // If the user already accepted or declined, do nothing
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
    // You can initialize tracking scripts here if needed
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowPopup(false);
    // Do nothing else — no redirect, no tracking
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-popup">
      <p>Sütiket használunk a felhasználói élmény javításához. Elfogadod a sütiket?</p>
      <div className="cookie-buttons">
        <button className="accept-btn" onClick={handleAccept}>
          Elfogadom
        </button>
        <button className="decline-btn" onClick={handleDecline}>
          Elutasítom
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
