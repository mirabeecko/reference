const fields = ["Obchodní právo", "Nemovitosti", "Pracovní právo"];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Lex & Forma</div>
          <nav>
            <a href="#odbornosti">Odbornosti</a>
            <a href="#tym">Tým</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="primaryButton" href="#kontakt">
            Konzultace
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Advokátní kancelář / účetní</span>
              <h1>Seriózní prezentace, která působí odborně a důvěryhodně.</h1>
              <p className="lead">
                Konzervativní paleta, serifové písmo, jasné odbornosti, tým a
                praktický kontaktní blok včetně GDPR prohlášení.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#kontakt">
                  Kontaktovat kancelář
                </a>
                <a className="secondaryButton" href="#odbornosti">
                  Naše specializace
                </a>
              </div>
            </div>
            <div className="heroPanel">
              <strong>15 let zkušeností</strong>
              <span>Smlouvy, spory, due diligence, právní i účetní servis.</span>
            </div>
          </div>
        </section>

        <section id="odbornosti" className="section">
          <div className="wrap grid3">
            {fields.map((item) => (
              <article className="darkCard" key={item}>
                <h3>{item}</h3>
                <p>Precizní zpracování, srozumitelná doporučení a dlouhodobý servis.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tym" className="section">
          <div className="wrap twoCol">
            <article className="teamVisual" />
            <article className="card">
              <span className="eyebrow">Životopis / tým</span>
              <h2>Seniorní vedení a oborová specializace</h2>
              <p>
                JUDr. Martin Vacek vede kancelář od roku 2011. Tým doplňují
                specialisté na nemovitosti, pracovní právo a účetní podporu.
              </p>
              <p className="gdpr">
                GDPR prohlášení: Údaje z formuláře zpracováváme pouze za účelem
                odpovědi na poptávku a v souladu s platnými předpisy.
              </p>
            </article>
          </div>
        </section>

        <section id="kontakt" className="section">
          <div className="wrap twoCol">
            <article className="card">
              <span className="eyebrow">Kontaktní formulář</span>
              <h2>Jaké údaje od klienta potřebujeme</h2>
              <ul>
                <li>Jméno a společnost</li>
                <li>Email a telefon</li>
                <li>Stručný popis případu</li>
              </ul>
            </article>
            <article className="card">
              <span className="eyebrow">Mapa a adresa</span>
              <h2>Pařížská 21, Praha 1</h2>
              <a className="mapCard" href="https://maps.google.com/?q=Parizska+21+Praha">
                Otevřít adresu v mapách
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
