import React from "react";
import "./Information.css";

const sections = [
  {
    title: "Önéletrajz",
    content: "Információk, gyakran ismételt kérdések és tippek az önéletrajzodhoz."
  },
  {
    title: "Mi az önéletrajz?",
    content: `A CV vagy önéletrajz a latin 'curriculum vitae' kifejezés rövidítése, ami 'életutat' jelent. Egy profi önéletrajz összefoglalja az ember életét, és áttekintést nyújt róla.

Önéletrajzában szerepelnie kell a végzettségének és képesítéseinek, munkatapasztalatának, készségeinek és fontos tulajdonságainak. Önéletrajzának segítségével a potenciális munkáltató gyorsan át tudja látni a készségeit, munkatapasztalatát és tudását, hogy felmérhesse, megfelel-e az adott munkára, és behívja-e Önt egy állásinterjúra.`
  },
  {
    title: "Mit tartalmazzon az önéletrajzom?",
    content: `Önéletrajza csak a potenciális munkáltató szempontjából releváns információt kell, hogy tartalmazza. Tehát ez azt jelenti, hogy jelentkezésenként eltérhet a CV tartalma. Önéletrajzának azonban minden esetben tartalmaznia kell a következőket:

- Adatok
- Munkatapasztalat
- Végzettség

A fent említett elemeket minden önéletrajznak tartalmaznia kell, minden jelentkezésnél. Ha azonban valóban ki akar tűnni a többi pályázó közül, akkor erősen ajánlott egy kicsit több erőfeszítést tenni.`
  },
  {
    title: "Személyes nyilatkozat vagy önéletrajz-profil",
    content: `A legtöbb modern önéletrajz tartalmaz egy rövid bevezető bekezdést, amelyet személyes nyilatkozatnak vagy profilnak hívnak. Ebben a bekezdésben, amelyet a legtöbb munkaerő-szervező elolvas, lehetősége nyílik arra, hogy néhány mondatban eladja magát. Leírhatja milyan munkát keres, melyek a saját jellemvonásai és ambíciói. További segítségért tekintse meg a blogbejegyzést is a személyes profil megírásáról.`
  },
  {
    title: "Kompetenciák és készségek",
    content: `Természetesen minden munka más. Pályafutása során azonban az ember megszerez bizonyos átadható kompetenciákat és készségeket is. Ezek az erős személyes vonások tapasztalat révén szerezhetőek be, és hozzájárulnak minden további munka hatékonyabb elvégzéséhez. További információ a készségek felsorolásáról az önéletrajzban itt található.`
  },
  {
    title: "Tanfolyamok és munkával kapcsolatos képzések",
    content: `Egyes munkáltatók tanfolyamokat vagy képzéseket kínálnak alkalmazottaik bizonyos készségeinek fejlesztésére. Ha részt vett ilyen képzésen, és fejlesztett olyan készségeket vagy kompetenciákat, amelyek relevánsak az új munkája szempontjából, akkor ezeket feltétlenül adja meg. Ne felejtse el megemlíteni, hogy oklevelet vagy bizonyítványt szerzett-e!`
  },
  {
    title: "Tevékenységek",
    content: `Bizonyos készségeket és kompetenciákat szakmai környezet kívül is elsajátíthat, például ha önkéntes munkát végez edzőként, oktatóként vagy könyvelőként egy klubnál vagy szervezetnél. Ha tanulmányai során végzett ilyen tevékenységeket, mindenképpen sorolja fel azokat.`
  },
  {
    title: "Mi az időrendi önéletrajz?",
    content: `A legelterjedtebb önéletrajz kronológiai önéletrajz néven ismert. Ez azt jelenti, hogy az időtől függő elemek, mint például az oktatás és a munkatapasztalat, fordított időrendi sorrendben vannak feltüntetve. Az legutóbbi (legfrissebb) munkája kerüljön az első helyre, és az elsőként megszerzett képesítés az utolsó helyre.`
  },
  {
    title: "Tippek a tökéletes önéletrajz elkészítéséhez",
    content: `- Csak azokat a releváns információkat említse meg, amelyek hozzáadott értéket képviselnek a megpályázott állás szempontjából.
- Ne említsen olyan hobbikat vagy érdeklődési köröket, amelyek kínos kérdéseket vetnek fel.
- Az első oldalon adja meg a legfontosabb információkat.
- Használjon pontokba szedett felsorolásokat és számozott listákat.
- Mindig válassza a kronológiai önéletrajzot, hacsak nem kérik másként az adott jelentkezésnél.
- Önéletrajza legyen rövid és velős.`
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
