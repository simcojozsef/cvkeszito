import React from "react";
import Footer from "../Components/Footer"; 
import "./Adatvedelem.css";

export default function Adatvedelem() {
  return (
    <>
      <div className="adat-container">
        <h1 className="adat-title">Adatvédelmi Nyilatkozat</h1>

        <p className="adat-paragraph">
          Az Ön által megadott személyes adatokat kezeli: <br />
          Simco József E.V. <br />
          Székhely: 4002 Debrecen, Salakos utca 85
        </p>
        <p className="adat-paragraph">
          Magánszemély, egyéni vállalkozás esetén: Adószám: 91248385-1-29 <br />
          Nyilvántartásba bejegyző bíróság: Debreceni Törvényszék Cégbírósága
          (a továbbiakban: Adatkezelő).
        </p>

        <p className="adat-paragraph">
          Kérjük, figyelmesen olvassa el jelen adatkezelési tájékoztatónkat
          (a továbbiakban: Tájékoztató), melyben ismertetjük az Ön személyes adatai
          kezelését az Európai Parlament és a Tanács 2016/679. rendelete (GDPR)
          szerint. A Tájékoztató bemutatja, hogy az Adatkezelő hogyan gyűjti,
          használja fel, osztja meg harmadik felekkel az Ön személyes adatait,
          és ismerteti az Ön adatkezeléssel összefüggő jogait.
        </p>

        <h2 className="adat-subtitle">Adatkezelő felelőssége és elérhetősége</h2>
        <p className="adat-paragraph">
          Az adatkezelő: Simco József E.V. <br />
          Elérhetőség: Simco József | +36 20 972 6362 | 4002, Debrecen, Salakos utca 85{" "}
          <a href="mailto:simcojozsef@gmail.com">simcojozsef@gmail.com</a>
        </p>

        <h2 className="adat-subtitle">Kezelt személyes adatok</h2>
        <ul className="adat-list">
          <li>Vezetéknév, keresztnév, cégnév és kapcsolattartó neve</li>
          <li>Székhely címe, lakcím, levelezési cím</li>
          <li>E-mail cím</li>
          <li>Telefonszám</li>
          <li>Munkatapasztalat</li>
          <li>Munkáltatói adatok, pl. Cégnév, pozíció</li>
          <li>Munkáltatói jogviszony kezdete</li>
          <li>Munkáltatói jogviszony vége</li>
          <li>Tanulmányok</li>
          <li>Tanulmánnyal kapcsolatos, pl. Intézmény neve</li>
          <li>Tanulmányi intézményben jogviszony megkezdésének az ideje</li>
          <li>Tanulmányi intézményben jogviszony befejezésének az ideje</li>
          <li>
            Rendszerinformációk (IP-cím, rendszer verzió, felbontás, böngészési szokások,
            viselkedési mintázat)
          </li>
        </ul>

        <h2 className="adat-subtitle">Adatkezelés időtartama</h2>
        <ul className="adat-list">
          <li>Marketing hozzájárulások: a hozzájárulás visszavonásáig</li>
          <li>Profiladatok: utolsó bejelentkezéstől számított 4 év</li>
          <li>Vásárlások adatai: 8 év (Számv. tv. 169. § (2) bekezdés)</li>
        </ul>

        <h2 className="adat-subtitle">Adattovábbítás és adatfeldolgozók</h2>
        <p className="adat-paragraph">
          Az Adatkezelő az adatokat szükség esetén továbbíthatja adatfeldolgozóknak,
          például: kézbesítés, könyvelés, jogi képviselet, marketing, számlázás,
          követeléskezelés.
        </p>

        <h3 className="adat-smalltitle">Futárszolgálatok</h3>
        <ul className="adat-list">
          <li>Weboldalunk nem dolgozik futárszolgálattal.</li>
        </ul>

        <h3 className="adat-smalltitle">Egyéb szolgáltatók</h3>
        <ul className="adat-list">
          <li>Könyvelő</li>
          <li>Tárhely szolgáltató</li>
          <li>
            Google Inc. – Google Drive, Gmail, Analytics, AdWords, stb.{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Adatvédelmi elvek
            </a>
          </li>
          <li>
            Facebook Ireland Ltd. – Facebook, Instagram, Messenger{" "}
            <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">
              Adatvédelmi szabályzat
            </a>
          </li>
          <li>
            Twitter International Company{" "}
            <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer">
              Adatvédelmi szabályzat
            </a>
          </li>
        </ul>

        <h2 className="adat-subtitle">Az Ön jogai</h2>
        <p className="adat-paragraph">
          Ön jogosult: <br />
          - hozzáférést kérni a személyes adataihoz <br />
          - azok helyesbítését, törlését <br />
          - az adatkezelés korlátozását kérni <br />
          - tiltakozni az adatkezelés ellen <br />
          - panaszt benyújtani a Nemzeti Adatvédelmi és Információszabadság Hatóságnál
          (<a href="https://naih.hu" target="_blank" rel="noopener noreferrer">naih.hu</a>)
        </p>

        <h2 className="adat-subtitle">Kiskorúak adatainak védelme</h2>
        <p className="adat-paragraph">
          Nem gyűjtünk 13 év alatti gyermekektől adatokat szülői hozzájárulás nélkül.
          Ha kiderül, hogy ilyen adatok kerültek hozzánk, a törlésükről gondoskodunk.
        </p>

        <h2 className="adat-subtitle">Cookie-k kezelése</h2>
        <p className="adat-paragraph">
          A sütik kezeléséről részletes információt a{" "}
          <a href="/suti-tajekoztato">Süti Tájékoztatóban</a> talál.
        </p>

        <h2 className="adat-subtitle">Fogalmak</h2>
        <ul className="adat-list">
          <li>Adatkezelés – személyes adatokon végzett műveletek összessége</li>
          <li>Adatfeldolgozó – aki az adatkezelő nevében adatokat kezel</li>
          <li>Adattovábbítás – személyes adatok átadása harmadik félnek</li>
          <li>Adatvédelmi incidens – személyes adatok sérülése, elvesztése</li>
          <li>Érintett hozzájárulása – az érintett akaratának önkéntes kinyilvánítása</li>
          <li>Hatóság – Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</li>
          <li>Személyes adat – bármely információ, amely alapján az érintett azonosítható</li>
        </ul>

        <p className="adat-paragraph">
          Jelen dokumentum útmutatóként szolgál. Amennyiben személyre szabott nyilatkozatot
          szeretne weboldalára, javasolt internetes jogász felkeresése.
        </p>
      </div>
      <Footer />
    </>
  );
}
