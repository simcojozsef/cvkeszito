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
                        <li><AiOutlineCheck className="check-icon" /> A profi önéletrajz készítése gyerekjáték a tippekkel és trükkökkel teli önéletrajz készítőnk segítségével</li>
                        <li><AiOutlineCheck className="check-icon" /> Készítse el saját profi kitűnő önéletrajzát mindössze 15 perc alatt.</li>
                        <li><AiOutlineCheck className="check-icon" /> Önéletrajzait saját személyes és biztonságos fiókjában tárolja. Ez lehetővé teszi az önéletrajzok szerkesztését és letöltését bármikor és bárhol.</li>
                        <li><AiOutlineCheck className="check-icon" /> Hozzáférhet profi jelentkezési levelek készítéséhez, és illesztheti azokat személyes önéletrajzához.</li>
                        <li><AiOutlineCheck className="check-icon" /> 14 nap teljes hozzáférés valamennyi funkcióhoz 399 forintért – ez automatikusan megújul 7799 forint/hó díjjal.</li>
                    </ul>
                </div>

                {/* Második blokk */}
                 <div className="pricing-card" onClick={handleSecondBlockClick} style={{ cursor: "pointer" }}>
                    <h2>Készíttesse el vagy optimalizálja önéletrajzát</h2>
                    <ul>
                        <li><AiOutlineCheck className="check-icon" /> Nehezen készíti el saját önéletrajzát? Vagy csak túl elfoglalt és nincs ideje? Készíttesse vagy optimalizáltassa önéletrajzát egy profi szakemberrel.</li>
                        <li><AiOutlineCheck className="check-icon" /> Küldje el nekünk aktuális önéletrajzát (vagy a tapasztalatait), és mi elkészítjük önéletrajzát egyik profi sablonunk alapján.</li>
                        <li><AiOutlineCheck className="check-icon" /> A tartalma profi módon, erőteljesen és egyértelműen át van írva.</li>
                        <li><AiOutlineCheck className="check-icon" /> 24-48 órán belül önéletrajzát professzionális módon elkészítik vagy optimalizálják, és letöltheti azt személyes fiókjából.</li>
                        <li><AiOutlineCheck className="check-icon" /> Az önéletrajz készítő CV Készítő fiókkal folyamatosan szerkesztheti az elkészített önéletrajzot, és hozzáfér az összes többi rendelkezésre álló funkcióhoz is.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
