import React from "react";
import "./Information.css";

const sections = [
  {
    title: "Önéletrajz",
    content: "Információk, gyakran ismételt kérdések és tippek egy jó önéletrajz elkészítéséhez."
  },
  {
    title: "Hogyan működik az önéletrajz-készítő?",
    content: `Ön megadja az alapadatokat, kiválasztja a sablont, és rendszerünk automatikusan elkészíti az önéletrajzát PDF formátumban.`
  },
  {
    title: "Mennyibe kerül a szolgáltatás?",
    content: `A szolgáltatás díjköteles. A pontos árakról és csomagokról a „Árazás” menüpontban talál részletesebb információt.`
  },
  {
    title: "Szükséges technikai tudás az önéletrajz elkészítéséhez?",
    content: `Nem. A felületet úgy alakítottuk ki, hogy bárki könnyedén használhassa – nincs szükség előképzettségre vagy programismeretre.`
  },
  {
    title: "Milyen formátumban kapom meg az önéletrajzot?",
    content: `Az elkészült dokumentumot PDF formátumban töltheti le, amely letöltést követően azonnal küldhető e-mailben vagy feltölthető állásportálokra.`
  },
  {
    title: "Módosíthatom később az önéletrajzomat?",
    content: `Az adatok tárolásra kerülnek, későbbi módosításra csak egyedi ajánlat keretein belül van lehetőség. Egyedi önéletrajz igénylése esetén azonban három alkalommal biztosítunk díjmentes módosítást – ennek részleteit az Árazás menüpontban találja.`
  },
  {
    title: "Használhatom mobilról vagy tabletről?",
    content: `Természetesen. A platform teljes mértékben mobilbarát, így akár útközben is elkészítheti önéletrajzát.`
  },
  {
    title: "Milyen sablonok közül választhatok?",
    content: `Többféle stílusban kínálunk sablonokat – letisztult, modern, kreatív és klasszikus megjelenésűeket is, hogy mindenki megtalálja a hozzá illőt.`
  },
  {
    title: "Biztonságban vannak az adataim?",
    content: `Igen. Az adatkezelés megfelel a GDPR előírásainak, és kizárólag az önéletrajz generálásához használjuk fel az adatokat.`
  },
  {
    title: "Mennyi idő alatt készül el az önéletrajzom?",
    content: `Átlagosan 5–10 perc alatt elkészíthető, attól függően, milyen részletes adatokat ad meg.`
  },
  {
    title: "Kapok előnézetet az önéletrajzról, mielőtt megvenném?",
    content: `Igen, a generálás előtt megtekintheti az önéletrajz előnézetét, így még időben módosíthatja a tartalmat.`
  },
  {
    title: "Van lehetőség fényképet elhelyezni az önéletrajzban?",
    content: `Igen, az összes sablon támogatja a profilkép beillesztését.`
  },
  {
    title: "Mentés nélkül is kipróbálhatom a szerkesztőt?",
    content: `Igen, a szerkesztő kipróbálható, a PDF-ek az Ön adataival beillesztve fizetés előtt megtekinthetőek, de a PDF letöltése fizetéshez kötött.`
  },
  {
    title: "Milyen típusú pozíciókhoz ajánlottak a sablonok?",
    content: `Sablonjaink pályakezdőknek, tapasztalt szakembereknek és vezetői pozíciókhoz is alkalmasak – a stílus szabadon választható.`
  },
  {
    title: "Van lehetőség motivációs levél készítésére is?",
    content: `Jelenleg az önéletrajzra fókuszálunk, de motivációs levél szolgáltatásunk hamarosan elérhető lesz.`
  },
  {
    title: "Mi történik, ha technikai problémám adódik?",
    content: `Ügyfélszolgálatunk készséggel segít – a Kapcsolat menüpontban talál elérhetőséget és üzenetküldési lehetőséget.`
  },
  {
    title: "Milyen nyelveken érhető el a szolgáltatás?",
    content: `Jelenleg magyar nyelven érhető el, további nyelvek bevezetése folyamatban van.`
  },
  {
    title: "Hogyan tudok számlát igényelni?",
    content: `A vásárlás után automatikusan kiállítjuk a számlát, amelyet e-mailben küldünk el Önnek.`
  },
  {
    title: "Hogyan léphetek kapcsolatba, ha nem találtam választ a kérdésemre?",
    content: `Ha nem találja a választ kérdésére, forduljon hozzánk bizalommal a Kapcsolat menüpontban!`
  }
];

const Information = () => {
  return (
    <div className="cv-info-container">
      {sections.map((section, index) => (
        index === 0 ? (
          // First section as title/subtitle outside a box
          <div key={index} className="cv-intro">
            <h1 className="cv-intro-title">{section.title}</h1>
            <p className="cv-intro-subtitle">{section.content}</p>
          </div>
        ) : (
          // All other sections inside boxes
          <div key={index} className="cv-block">
            <h2 className="cv-block-title">{section.title}</h2>
            <p className="cv-block-content">{section.content}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default Information;
