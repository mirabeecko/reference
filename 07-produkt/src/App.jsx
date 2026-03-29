import { useState } from "react";

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

const initialForm = {
  email: "",
  payment: "Stripe",
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Zadejte platný email pro zaslání platebního odkazu.");
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("product_orders") || "[]");
    localStorage.setItem("product_orders", JSON.stringify([...stored, payload]));
    setError("");
    setSubmitted(true);
    setForm(initialForm);
  }

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
            <form className="priceBox" onSubmit={handleSubmit} noValidate>
              <strong>1 490 Kč</strong>
              <span>Jednorázově</span>
              <label>
                Email pro zaslání platebního odkazu
                <input
                  name="email"
                  value={form.email}
                  onChange={(event) => {
                    setForm((current) => ({ ...current, email: event.target.value }));
                    setError("");
                  }}
                  placeholder="vas@email.cz"
                />
              </label>
              <label>
                Preferovaná platba
                <select
                  name="payment"
                  value={form.payment}
                  onChange={(event) => setForm((current) => ({ ...current, payment: event.target.value }))}
                >
                  <option>Stripe</option>
                  <option>PayPal</option>
                </select>
              </label>
              <div className="buttonRow">
                <button className="primaryButton" type="submit">
                  Získat platební odkaz
                </button>
              </div>
              {error ? <p className="errorMessage">{error}</p> : null}
              {submitted ? <p className="successMessage">Objednávka byla v demu zachycena a připravena pro napojení platební brány.</p> : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
