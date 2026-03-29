import { useMemo, useState } from "react";

const menu = [
  { name: "Smash Bun", price: "245 Kč", tag: "Top seller" },
  { name: "Gochujang Bowl", price: "219 Kč", tag: "Vegetarian" },
  { name: "Basque Cheesecake", price: "119 Kč", tag: "Sweet finish" },
  { name: "Lunch Taco", price: "189 Kč", tag: "Dnes" },
];

const openingHours = [
  "Po-Čt: 11:30-21:30",
  "Pá: 11:30-23:00",
  "So: food truck na akcích",
  "Ne: zavřeno",
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Vše");
  const filteredMenu = useMemo(() => {
    if (activeFilter === "Vše") {
      return menu;
    }

    return menu.filter((item) => item.tag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">EMBER Bistro</div>
          <nav>
            <a href="#menu">Menu</a>
            <a href="#mapa">Mapa</a>
            <a href="#oteviraci-doba">Otevírací doba</a>
          </nav>
          <a className="primaryButton" href="#menu">
            Dnešní menu
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Moderní bistro / food truck</span>
              <h1>Silná chuť, temná atmosféra, menu co se mění každý týden.</h1>
              <p className="lead">
                Celostránkový hero staví na emoci jídla. Hned pod ním je přehled
                aktivního menu, proklik do mapy a praktická otevírací doba.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#menu">
                  Prohlédnout menu
                </a>
                <a
                  className="secondaryButton"
                  href="https://maps.google.com/?q=Krizikova+74+Praha"
                >
                  Otevřít mapu
                </a>
              </div>
            </div>
            <div className="heroPhoto">
              <div className="dishCard">
                <strong>Dnes doporučujeme</strong>
                <span>Smash bun s chipotle a bramborami v hnědém másle.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="wrap">
            <span className="eyebrow">Interaktivní jídelní lístek</span>
            <h2>Vyber si podle chuti</h2>
            <div className="filterRow">
              {["Vše", "Dnes", "Vegetarian", "Top seller", "Sweet finish"].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? "isActive" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid3">
              {filteredMenu.map((item) => (
                <article className="menuCard" key={item.name}>
                  <span className="tag">{item.tag}</span>
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                  <p>Vyladěné chutě, moderní plating a poctivá porce.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap twoCol">
            <article id="mapa" className="panel">
              <span className="eyebrow">Mapa</span>
              <h2>Najdete nás v Karlíně</h2>
              <a
                className="mapCard"
                href="https://maps.google.com/?q=Krizikova+74+Praha"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps proklik
              </a>
            </article>
            <article id="oteviraci-doba" className="panel">
              <span className="eyebrow">Otevírací doba</span>
              <h2>Kdy se stavit</h2>
              <ul className="hoursList">
                {openingHours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
