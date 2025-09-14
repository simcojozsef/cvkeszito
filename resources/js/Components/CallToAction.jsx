import React, { useState, useEffect } from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const [userCount, setUserCount] = useState(327);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // animáció indítása
      setTimeout(() => {
        setUserCount(prev => prev + 1);
        setAnimate(false); // animáció visszaállítása
      }, 300); // animáció időtartama
    }, 10000); // minden 10 másodperc

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Több mint{" "}
          <span className={`animated-number ${animate ? "animate" : ""}`}>
            {userCount.toLocaleString()}
          </span>{" "}
          felhasználó készítette már el önéletrajzát
        </h2>
        <p className="cta-subtitle">
          Az önéletrajz készítővel gyorsan és egyszerűen létrehozhatsz egy egyedi és professzionális önéletrajzot 15 perc alatt.
        </p>
        <a href="/createcv/personal-data" className="cta-button">
          Készítsd el önéletrajzod!
        </a>
        <p className="cta-note">
          Növeld az állásszerzés esélyét azzal, hogy professzionálisan megtervezett önéletrajzsablonjainkkal és kiegészítő színvilágunkkal készíted el önéletrajzod.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
