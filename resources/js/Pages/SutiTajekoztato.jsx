import React from "react";
import Footer from "../Components/Footer"; 
import "./SutiTajekoztato.css";

export default function SutiTajekoztato() {
  return (
    <>
      <div className="suti-container">
        <h1 className="suti-title">Süti (Cookie) Tájékoztató</h1>

        <p className="suti-paragraph">
          A Simco József E.V. weboldala: https://cvkeszito.hu sütiket használ a weboldal működtetése, használatának
          megkönnyítése, a weboldalon végzett tevékenység nyomon követése és releváns
          ajánlatok megjelenítése érdekében. 
        </p>
        <p className="suti-paragraph">
          Kérjük, hogy a dokumentumot figyelmesen olvassa el és csak akkor vegye igénybe
          a weboldal szolgáltatásait, amennyiben minden pontjával egyetért. Jelen szabályzat
          kizárólag az adott weboldalon történő cookie-kezelésre vonatkozik.
        </p>

        <h2 className="suti-subtitle">Mi az a Cookie?</h2>
        <p className="suti-paragraph">
          A cookie (magyarul „süti”) egy kisméretű adatcsomag, amit az internetes szolgáltatások
          a böngészőben tárolnak el. A modern online szolgáltatások működéséhez elengedhetetlen
          technológia, amelyet minden böngésző támogat.
        </p>

        <h2 className="suti-subtitle">Hogyan keletkezik és hasznosul a Cookie?</h2>
        <p className="suti-paragraph">
          A kliens gép kérést küld a kiszolgáló irányába, a kiszolgáló létrehoz egy egyedi
          azonosítót, majd visszaküldi azt cookie formájában a böngészőnek. Amikor a kliens újra
          kapcsolatba lép a szerverrel, a rendszer a cookie alapján könnyen azonosítja például a
          bejelentkezett felhasználót.
        </p>

        <h2 className="suti-subtitle">Milyen sütiket használunk és mire?</h2>
        <ul className="suti-list">
          <li>Weboldal fejlesztése és a felhasználói élmény javítása</li>
          <li>Navigáció megkönnyítése és funkciók biztosítása</li>
          <li>Információgyűjtés a használati szokásokról</li>
          <li>Célzott hirdetések elhelyezése más weboldalakon</li>
          <li>Felhasználók megkülönböztetése és azonosítása</li>
          <li>Releváns ajánlatok megjelenítése</li>
        </ul>

        <h2 className="suti-subtitle">A sütik típusai</h2>
        <h3 className="suti-smalltitle">Alapműködést biztosító sütik</h3>
        <p className="suti-paragraph">
          Biztosítják a weboldal megfelelő működését (pl. bejelentkezési adatok megjegyzése,
          értesítési státuszok tárolása). Ezen sütik nélkül a weboldal nem működne megfelelően.
        </p>

        <h3 className="suti-smalltitle">Statisztikai célú sütik</h3>
        <p className="suti-paragraph">
          Információt gyűjtenek arról, hogyan használják látogatóink a weboldalt. Nem
          azonosítják személy szerint a felhasználót, csupán általános statisztikai adatokat
          szolgáltatnak.
        </p>

        <h3 className="suti-smalltitle">Teljesítményt biztosító sütik</h3>
        <p className="suti-paragraph">
          Ide tartoznak például a Google Analytics és Google Optimize sütijei. 
          További információ:{" "}
          <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer">
            Google Analytics és Optimize cookie használat
          </a>.
        </p>

        <h3 className="suti-smalltitle">Célzó- és hirdetési sütik</h3>
        <p className="suti-paragraph">
          Ezek a sütik releváns hirdetések megjelenítésére szolgálnak. Hozzájárulás esetén
          a böngészési adatok kombinálhatók személyes adatokkal is, hogy személyre szabottabb
          ajánlatokat jeleníthessünk meg.
        </p>

        <h2 className="suti-subtitle">Használt hirdetési szolgáltatók</h2>
        <ul className="suti-list">
          <li>
            Google Adwords –{" "}
            <a href="https://www.google.com/intl/hu/policies/privacy" target="_blank" rel="noopener noreferrer">
              Részletes tájékoztató
            </a>
          </li>
          <li>
            Facebook –{" "}
            <a href="https://www.facebook.com/help/cookies/" target="_blank" rel="noopener noreferrer">
              Részletes tájékoztató
            </a>
          </li>
          <li>
            Doubleclick –{" "}
            <a href="https://www.google.com/intl/hu/policies/privacy" target="_blank" rel="noopener noreferrer">
              Részletes tájékoztató
            </a>
          </li>
          <li>
            Instagram –{" "}
            <a href="https://help.instagram.com/402411646841720" target="_blank" rel="noopener noreferrer">
              Részletes tájékoztató
            </a>
          </li>
        </ul>

        <h2 className="suti-subtitle">Hogyan kezelhetők a sütik?</h2>
        <p className="suti-paragraph">
          A böngésző beállításaiban bármikor módosítható a sütik kezelése. 
          A legtöbb böngésző alapértelmezésként engedélyezi, de le is tiltható. 
          Felhívjuk figyelmét, hogy a sütik tiltása esetén a weboldal bizonyos
          funkciói nem működhetnek megfelelően.
        </p>

        <p className="suti-paragraph">
          A legnépszerűbb böngészők süti beállításairól az alábbi oldalakon tájékozódhat:
        </p>
        <ul className="suti-list">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Internet Explorer</li>
          <li>Microsoft Edge</li>
          <li>Apple Safari</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
