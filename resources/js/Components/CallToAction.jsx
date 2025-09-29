import React, { useState } from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const [userCount] = useState(327); // fixed number
  // no animation state needed if you don't animate

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Több mint{" "}
          <span className="animated-number">
            {userCount.toLocaleString()}
          </span>{" "}
          felhasználó készítette már el önéletrajzát
        </h2>
        <p className="cta-subtitle">
          Az önéletrajz készítővel gyorsan és egyszerűen létrehozhat egy egyedi és professzionális önéletrajzot 10 perc alatt.
        </p>
        <a href="/createcv/personal-data" className="cta-button">
          Készítse el Ön is önéletrajzát!
        </a>
        <p className="cta-note">
          Növelje az állásszerzés esélyét azzal, hogy professzionálisan megtervezett önéletrajzsablonjainkkal és kiegészítő színvilágunkkal készíti el önéletrajzát.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
