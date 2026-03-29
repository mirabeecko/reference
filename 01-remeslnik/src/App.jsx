const services = [
  "Instalatérské zásahy: sifony, baterie, odpady, WC",
  "Montáže nábytku, polic, garnýží a světel",
  "Silikonování, tmelení a opravy po nájemnících",
  "Pohotovostní výjezd po Praze a okolí",
];

const pricing = [
  ["Výjezd po Praze", "od 490 Kč"],
  ["Výměna baterie", "od 890 Kč"],
  ["Čištění odpadu", "od 1 290 Kč"],
];

const references = [
  "Pan Novák přijel za 40 minut a vyřešil protékající WC během jedné návštěvy.",
  "Montáž skříněk a police proběhla čistě, rychle a bez zbytečných prostojů.",
  "Perfektní komunikace, jasná cena a večerní zásah bez příplatkového šoku.",
];

export default function App() {
  return (
    <div className="site theme-craft">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Hodinový Manžel Novák</div>
          <nav>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#reference">Reference</a>
          </nav>
          <a className="callButton desktopOnly" href="tel:+420777555222">
            VOLAT 777 555 222
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Maximální konverze na mobilu</span>
              <h1>Instalatér a hodinový manžel bez čekání.</h1>
              <p className="lead">
                Kapající baterie, ucpaný odpad i drobné opravy v bytě. Zavoláte,
                přijedu, opravím.
              </p>
              <div className="ctaRow">
                <a className="callButton" href="tel:+420777555222">
                  VOLAT HNED
                </a>
                <a className="ghostButton" href="#cenik">
                  Zobrazit ceník
                </a>
              </div>
            </div>
            <div className="visual repairVisual">
              <div className="badge">Výjezd ideálně do 60 minut</div>
            </div>
          </div>
        </section>

        <section id="sluzby" className="section">
          <div className="wrap twoCol">
            <div className="card">
              <span className="eyebrow">Služby</span>
              <h2>Co vyřeším při jedné návštěvě</h2>
              <ul className="bulletList">
                {services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="stats">
              <div className="card statCard">
                <strong>4,9 / 5</strong>
                <span>Hodnocení od zákazníků</span>
              </div>
              <div className="card statCard">
                <strong>1 200+</strong>
                <span>Dokončených zásahů</span>
              </div>
              <div className="card statCard">
                <strong>7 dní</strong>
                <span>Výjezdy v týdnu</span>
              </div>
            </div>
          </div>
        </section>

        <section id="cenik" className="section">
          <div className="wrap">
            <span className="eyebrow">Ceník od...</span>
            <h2>Jasně, rychle, bez překvapení</h2>
            <div className="grid3">
              {pricing.map(([name, price]) => (
                <div className="card priceCard" key={name}>
                  <strong>{price}</strong>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reference" className="section">
          <div className="wrap">
            <span className="eyebrow">Reference s fotkami z místa činu</span>
            <h2>Reálné zakázky, reálné výsledky</h2>
            <div className="grid3">
              {references.map((quote, index) => (
                <article className="card reviewCard" key={quote}>
                  <div className={`photoMock photo-${index + 1}`} />
                  <p>{quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <a className="mobileCall" href="tel:+420777555222">
        VOLAT 777 555 222
      </a>
    </div>
  );
}
