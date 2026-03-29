const helpItems = [
  "Backoffice a každodenní operativa",
  "Klientský servis a follow-upy",
  "Nastavení procesů a delegace",
];

const faq = [
  [
    "Jak probíhá spolupráce?",
    "Začínáme úvodním callem, krátkým auditem a dvoutýdenním plánem priorit.",
  ],
  [
    "Umíte i anglicky?",
    "Ano, běžně připravuji podklady, emaily i koordinaci pro zahraniční klienty.",
  ],
  [
    "Je možné jednorázové zapojení?",
    "Ano, vedle dlouhodobé spolupráce dělám i sprinty na procesy nebo onboarding.",
  ],
];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Klára Veselá</div>
          <nav>
            <a href="#pomoc">Jak vám pomůžu</a>
            <a href="#rezervace">Rezervace</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="primaryButton" href="#rezervace">
            Rezervovat schůzku
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Konzultant / virtuální asistentka</span>
              <h1>Pomůžu vám zklidnit provoz a vrátit čas na důležitou práci.</h1>
              <p className="lead">
                Elegantní osobní web se silným důrazem na osobní značku,
                profesionální vystupování a sběr poptávek.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#rezervace">
                  Domluvit 30 min call
                </a>
                <a className="secondaryButton" href="#pomoc">
                  Jak pomohu
                </a>
              </div>
            </div>
            <div className="portraitBlock">
              <div className="portraitFrame">
                <div className="portrait" />
              </div>
            </div>
          </div>
        </section>

        <section id="pomoc" className="section">
          <div className="wrap">
            <span className="eyebrow">Jak vám pomůžu</span>
            <h2>Praktická opora pro malé týmy a freelancery</h2>
            <div className="grid3">
              {helpItems.map((item) => (
                <article className="card" key={item}>
                  <h3>{item}</h3>
                  <p>Jasná komunikace, lehčí provoz a méně mikromanagementu.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rezervace" className="section">
          <div className="wrap twoCol">
            <article className="card spacious">
              <span className="eyebrow">Calendly</span>
              <h2>Místo pro rezervaci schůzky</h2>
              <div className="calendarMock">
                <div />
                <div />
                <div />
                <div />
              </div>
              <p>
                Tady je připravený blok pro vložení skutečného Calendly widgetu.
              </p>
            </article>
            <article id="faq" className="faqColumn">
              {faq.map(([question, answer]) => (
                <div className="card faqCard" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
