const amenities = ["Wi-Fi", "Kávovar", "Parkování", "Sauna", "Krby", "Kolárna"];
const trips = ["Protržená přehrada", "Jizerka", "Bramberk", "Cyklotrasy na Hrabětice"];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Chalupa Na Mechu</div>
          <nav>
            <a href="#galerie">Galerie</a>
            <a href="#vybaveni">Vybavení</a>
            <a href="#rezervace">Rezervace</a>
          </nav>
          <a className="primaryButton" href="#rezervace">
            Zkontrolovat termín
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Pronájem apartmánu / chaty</span>
              <h1>Víkend, který voní dřevem, kávou a horským klidem.</h1>
              <p className="lead">
                Stránka staví na emocích, velké galerii, čisté typografii a
                praktickém rezervačním bloku.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#rezervace">
                  Rezervovat pobyt
                </a>
                <a className="secondaryButton" href="#tipy">
                  Tipy na výlety
                </a>
              </div>
            </div>
            <div className="heroScene" />
          </div>
        </section>

        <section id="galerie" className="section">
          <div className="wrap">
            <span className="eyebrow">Velká fotogalerie</span>
            <h2>Interiér, terasa a výhledy</h2>
            <div className="gallery">
              <div className="galleryItem g1" />
              <div className="galleryItem g2" />
              <div className="galleryItem g3" />
            </div>
          </div>
        </section>

        <section id="vybaveni" className="section">
          <div className="wrap twoCol">
            <article className="card">
              <span className="eyebrow">Vybavení</span>
              <h2>Všechno pro pohodový pobyt</h2>
              <div className="tagRow">
                {amenities.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article id="tipy" className="card">
              <span className="eyebrow">Počasí a výlety</span>
              <h2>Co podniknout v okolí</h2>
              <div className="weatherRow">
                <div>
                  <strong>So</strong>
                  <span>12 °C</span>
                </div>
                <div>
                  <strong>Ne</strong>
                  <span>10 °C</span>
                </div>
                <div>
                  <strong>Po</strong>
                  <span>8 °C</span>
                </div>
              </div>
              <p>{trips.join(" • ")}</p>
            </article>
          </div>
        </section>

        <section id="rezervace" className="section">
          <div className="wrap reservationCard">
            <div>
              <span className="eyebrow">Rezervační formulář</span>
              <h2>Pošlete nezávaznou poptávku</h2>
            </div>
            <div className="formGrid">
              <div className="inputMock">Termín pobytu</div>
              <div className="inputMock">Počet hostů</div>
              <div className="inputMock wide">Jméno, email a poznámka</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
