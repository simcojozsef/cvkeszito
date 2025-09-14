import React, { useState, useEffect } from "react";
import "./FooterCallToAction.css"; 

const FooterCallToAction = () => {
  const [userCount, setUserCount] = useState(329);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setUserCount(prev => prev + 1);
        setAnimate(false);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
            Most gyorsan és egyszerűen elkészítheted önéletrajzod!
        </h2>
        <p className="cta-subtitle">
          Mindössze 10-15 percet vesz igénybe az önéletrajz elkészítése.
        </p>
        <p className="cta-note">
          Az állásszerzéd esélyét könnyedén növelheted azáltal, hogy professzionális önéletrajzot készítesz. A programunk segít benne lépésről lépésre amíg letöltöd a PDF-et, melyet tovább is küldhetsz leendő munkáltatódnak.
        </p>
        <a href="/createcv/personal-data" className="cta-button">
          Kezdés most!
        </a>
      </div>
    </section>
  );
};

export default FooterCallToAction;
