import React from "react";
import { FiFileText, FiTrendingUp, FiFolder, FiDownload, FiSend, FiAward } from "react-icons/fi";
import "./Advantages.css";

const advantagesData = [
  {
    title: "Gyors és egyszerű",
    text: `Online önéletrajz-készítőnk segítségével egyszerűen elkészítheti professzionális önéletrajzát.`,
    icon: <FiFileText />,
  },
  {
    title: "Bizonyított sablonok",
    text: `Egy reprezentatív és profi önéletrajzzal kiemelkedik az összes többi pályázó közül. 
           Önt akár 65% -kal nagyobb eséllyel hívják be egy interjúra.`,
    icon: <FiTrendingUp />,
  },
  {
    title: "Választható stílusok",
    text: `Több sablon közül választhat, így a dokumentuma egyedi lesz, stílusában is kiemelkedik.
    `,
    icon: <FiFolder />,
  },
  {
    title: "Közvetlen PDF",
    text: `Mindössze 10 percet vesz igénybe az űrlap kitöltése, melyet követően letöltheti önéletrajzát és elküldheti a munkáltatóknak.`,
    icon: <FiDownload />,
  },
  {
    title: "Megkönnyítjük a jelentkezést",
    text: `Egyszerűen letöltheti és elküldheti az önéletrajzát a munkaadóknak, gyorsítva a jelentkezési folyamatot.`,
    icon: <FiSend />,
  },
  {
    title: "Professzionális megjelenés",
    text: `Az önéletrajza letisztult, átlátható és esztétikus, ami jó benyomást kelt a munkaadóknál.`,
    icon: <FiAward />,
  },
];


const Advantages = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {advantagesData.map((adv, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <span className="icon">{adv.icon}</span>
              <h2>{adv.title}</h2>
            </div>
            <p>{adv.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
