const soldProjects = [
  "Vinohrady Residence",
  "Garden Villas",
  "Lofty Letná",
];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Daniel Rys</div>
          <nav>
            <a href="#odhad">Odhad ceny</a>
            <a href="#video">Video</a>
            <a href="#projekty">Projekty</a>
          </nav>
          <a className="primaryButton" href="#odhad">
            Chci prodat
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Realitní makléř</span>
              <h1>Luxusní osobní web zaměřený na náběr nemovitostí.</h1>
              <p className="lead">
                Čistý moderní styl, silný formulář pro bezplatný odhad, video
                medailonek a loga prodaných projektů.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#odhad">
                  Nechat odhadnout cenu
                </a>
                <a className="secondaryButton" href="#projekty">
                  Prodané projekty
                </a>
              </div>
            </div>
            <div className="heroVisual" />
          </div>
        </section>

        <section id="odhad" className="section">
          <div className="wrap twoCol">
            <article className="card">
              <span className="eyebrow">Formulář pro bezplatný odhad</span>
              <h2>Chci prodat / odhadnout cenu nemovitosti</h2>
              <div className="formGrid">
                <div className="inputMock">Typ a lokalita</div>
                <div className="inputMock">Dispozice a stav</div>
                <div className="inputMock wide">Kontakt a poznámka</div>
              </div>
            </article>
            <article className="stats">
              <div className="statCard">
                <strong>73 dní</strong>
                <span>Průměrná doba prodeje</span>
              </div>
              <div className="statCard">
                <strong>98 %</strong>
                <span>Prodejů za cílovou cenu</span>
              </div>
              <div className="statCard">
                <strong>210+</strong>
                <span>Uzavřených obchodů</span>
              </div>
            </article>
          </div>
        </section>

        <section id="video" className="section">
          <div className="wrap twoCol">
            <article className="videoMock">Video medailonek makléře</article>
            <article className="card">
              <span className="eyebrow">Osobní video</span>
              <h2>Důvěra před první schůzkou</h2>
              <p>
                Krátké video pomáhá vysvětlit proces prodeje a odlišuje osobní web
                od běžného inzertního portálu.
              </p>
            </article>
          </div>
        </section>

        <section id="projekty" className="section">
          <div className="wrap">
            <span className="eyebrow">Loga prodaných projektů</span>
            <h2>Social proof v luxusním balení</h2>
            <div className="grid3">
              {soldProjects.map((project) => (
                <article className="logoCard" key={project}>
                  <strong>{project}</strong>
                  <p>Prémiová prezentace, cílený marketing a citlivé vyjednávání.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
