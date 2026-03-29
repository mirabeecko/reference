const schedule = [
  ["Pondělí 7:00", "Morning Mobility"],
  ["Středa 18:00", "Strength Flow"],
  ["Sobota 9:00", "Hot Yoga Reset"],
];

const pricing = [
  ["290 Kč", "Jednorázový vstup"],
  ["2 490 Kč", "Měsíční členství"],
  ["3 900 Kč", "Plán na míru"],
];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Pulse Studio</div>
          <nav>
            <a href="#rozvrh">Rozvrh</a>
            <a href="#cenik">Ceník</a>
            <a href="#promeny">Před a po</a>
          </nav>
          <a className="primaryButton" href="#rozvrh">
            Přihlásit se na lekci
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Fitness trenér / jógové studio</span>
              <h1>Pohyb, který vás nastartuje a udrží v rytmu.</h1>
              <p className="lead">
                Dynamický web s motivačním hero blokem, rozvrhem, členstvím,
                proměnami klientů a prostorem pro Instagram feed.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#cenik">
                  Koupit plán
                </a>
                <a className="secondaryButton" href="#rozvrh">
                  Rozvrh lekcí
                </a>
              </div>
            </div>
            <div className="heroPhoto" />
          </div>
        </section>

        <section id="rozvrh" className="section">
          <div className="wrap">
            <span className="eyebrow">Rozvrh hodin</span>
            <h2>Vyber si tempo, které ti sedne</h2>
            <div className="grid3">
              {schedule.map(([time, title]) => (
                <article className="card" key={time}>
                  <strong>{time}</strong>
                  <h3>{title}</h3>
                  <p>Skupinová lekce vedená s důrazem na techniku a energii.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cenik" className="section">
          <div className="wrap grid3">
            {pricing.map(([price, title]) => (
              <article className="priceCard" key={price}>
                <strong>{price}</strong>
                <span>{title}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="promeny" className="section">
          <div className="wrap twoCol">
            <article>
              <span className="eyebrow">Před a po</span>
              <h2>Proměny klientů</h2>
              <div className="transformGrid">
                <div className="transformCard before" />
                <div className="transformCard after" />
              </div>
            </article>
            <article>
              <span className="eyebrow">Instagram feed</span>
              <h2>Obsah, který žije i mimo web</h2>
              <div className="instaGrid">
                <div />
                <div />
                <div />
                <div />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
