import React from "react";
import { AiOutlineCheck } from "react-icons/ai"; // React ikon importálása
import "./Arazas.css";
import Footer from "../Components/Footer";

export default function Arazas() {

    const handleFirstBlockClick = () => {
        window.location.href = "https://cvkeszito.hu/createcv/personal-data";
    };
    const handleSecondBlockClick = () => {
        window.location.href = "/kapcsolat"; // Itt adtuk meg a második blokk célját
    };

    return (
        <>
        <div className="pricing-section">
            <h1 className="pricing-title">Árazás</h1>

            <div className="pricing-container">
                {/* Első blokk */}
                    <div className="pricing-card" onClick={handleFirstBlockClick} style={{ cursor: "pointer" }}>
                        <h2>Készítse el saját profi önéletrajzát</h2>
                        <ul>
                            <li><AiOutlineCheck className="check-icon" /> A profi önéletrajz készítése gyerekjáték önéletrajz készítőnk segítségével.</li>
                            <li><AiOutlineCheck className="check-icon" /> Mindössze <span className="highlighted-tag">15 perc alatt</span> elkészül.</li>
                            <li><AiOutlineCheck className="check-icon" /> Fizetést követően letöltheti önéletrajzát <span className="highlighted-tag">PDF formátum</span>ban, melyet elküldhet leendő munkaadójának.</li>
                            <li><AiOutlineCheck className="check-icon" /> Lehetőség van a személyes önéletrajz átírására.</li>
                            <li><AiOutlineCheck className="check-icon" /> Az elkészített önéletrajz letöltésének díja <span className="price-tag">egyszeri 2.600 Ft.</span> Fizetést követően válik elérhetővé a letöltés, melyel bármelyik sablon elérhetővé válik.</li>
                        </ul>
                        <div className="button-div">
                            <button className="price-create-cv-button">Most elkészítem</button>
                        </div>
                    </div>

                    {/* Második blokk */}
                    <div className="pricing-card" onClick={handleSecondBlockClick} style={{ cursor: "pointer" }}>
                        <h2>Készíttesse el vagy optimalizálja önéletrajzát</h2>
                        <ul>
                            <li><AiOutlineCheck className="check-icon" /> Nehezen készíti el saját önéletrajzát? Vagy csak túl elfoglalt és nincs ideje? Készíttesse vagy optimalizáltassa önéletrajzát egy profi szakemberrel.</li>
                            <li><AiOutlineCheck className="check-icon" /> Küldje el nekünk aktuális önéletrajzát (vagy a tapasztalatait), és mi elkészítjük önéletrajzát az Ön által kiválasztott profi sablonunk alapján.</li>
                            <li><AiOutlineCheck className="check-icon" /> A tartalma profi módon, erőteljesen és egyértelműen át van írva.</li>
                            <li><AiOutlineCheck className="check-icon" /> 24-48 órán belül önéletrajzát professzionális módon elkészítik vagy optimalizálják, majd ezt követően elküldjük Önnek e-mailben.</li>
                        </ul>
                        <div className="button-group">
                            <button className="price-request-expert-button">Rendelés leadása</button>
                        </div>
                    </div>

            </div>
        </div>
        <Footer/>
        </>
    );
}
