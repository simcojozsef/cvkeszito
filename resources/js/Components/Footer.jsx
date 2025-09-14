import React from "react";
import "./Footer.css";

const footerLinks = {
  "Szolgáltatás": [
    { name: "Önéletrajz készítése", url: "/createcv/personal-data" },
    { name: "Árazás", url: "/arazas" },
    { name: "Blog", url: "/blog" },
  ],
  "Blog": [
    { name: "Hogyan érdemes megjelenni...", url: "/blog/allasinterju-megjelenes-tippek" },
    { name: "Hogyan válhatsz a megfelelő....", url: "/blog/megfelelo-jelolt-allasinterjun" },
    { name: "Hogyan készítsem el a profilképem...", url: "/blog/profilkep-oneletrajz-2025" },
    { name: "Hogyan öltözzek fel...", url: "/blog/oltozkodes-allasinterju" },
    { name: "Milyen önéletrajz sablont válasszak...", url: "/blog/oneletrajz-sablon-valasztas" },
    { name: "Hogyan készítsem el a profi...", url: "/blog/profi-profilkep-oneletrajzhoz" }
  ],
  "Rólunk": [
    { name: "CV Készítő", url: "/createcv/personal-data" },
    { name: "Kapcsolat", url: "/kapcsolat" }
  ],
  "Jog": [
    { name: "Adatvédelem", url: "/privacy-policy" },
    { name: "Süti tájékoztató", url: "/cookie-policy" },
    { name: "Általános Szerződési Feltételek", url: "/terms-and-conditions" }
  ]
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {Object.entries(footerLinks).map(([section, links], idx) => (
          <div key={idx} className="footer-section">
            <h4 className="footer-section-title">{section}</h4>
            <ul className="footer-links">
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} CV Készítő. Minden jog fenntartva.</p>
    </footer>
  );
};

export default Footer;
