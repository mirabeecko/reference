const benefits = [
  "Silný headline s jediným cílem: prodej",
  "Výhody produktu s důrazem na čitelnost",
  "Recenze a přímý platební odkaz",
];

const reviews = [
  "Za jedno odpoledne jsem si zrychlila přípravu nabídek skoro na polovinu.",
  "Praktický systém místo nekonečného experimentování s nástroji.",
  "Konečně landing page, která vede k jedné jasné akci.",
];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">AI Workflow Kit</div>
          <nav>
            <a href="#vyhody">Výhody</a>
            <a href="#recenze">Recenze</a>
            <a href="#koupit">Koupit</a>
          </nav>
          <a className="primaryButton" href="#koupit">
            Koupit kurz
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Landing page pro digitální produkt</span>
              <h1>Přestaň improvizovat. Postav si AI workflow za jeden víkend.</h1>
              <p className="lead">
                One-page lander s produktovým mockupem, silným CTA a přímou cestou
                k platbě přes Stripe nebo PayPal.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#koupit">
                  Chci přístup
                </a>
                <a className="secondaryButton" href="#vyhody">
                  Co získám
                </a>
              </div>
            </div>
            <div className="mockupStage">
              <div className="book" />
              <div className="screen" />
            </div>
          </div>
        </section>

        <section id="vyhody" className="section">
          <div className="wrap grid3">
            {benefits.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
                <p>Čistá struktura, výrazná grafika a jeden hlavní konverzní směr.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="recenze" className="section">
          <div className="wrap grid3">
            {reviews.map((item) => (
              <article className="reviewCard" key={item}>
                <strong>Čtenář / zákazník</strong>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="koupit" className="section">
          <div className="wrap purchase">
            <div>
              <span className="eyebrow">Přímý odkaz na platbu</span>
              <h2>Jedna nabídka, jedno rozhodnutí</h2>
              <p>Okamžitý přístup ke kurzu, PDF e-book a aktualizace po 12 měsíců.</p>
            </div>
            <div className="priceBox">
              <strong>1 490 Kč</strong>
              <span>Jednorázově</span>
              <div className="buttonRow">
                <a className="primaryButton" href="https://stripe.com/">
                  Stripe
                </a>
                <a className="secondaryButton" href="https://paypal.com/">
                  PayPal
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
