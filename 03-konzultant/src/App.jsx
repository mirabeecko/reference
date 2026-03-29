import { useState } from "react";

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

const initialForm = {
  name: "",
  email: "",
  company: "",
  agenda: "",
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Doplňte prosím jméno.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Zadejte platný email.";
    if (form.agenda.trim().length < 12) nextErrors.agenda = "Popište prosím stručně, s čím pomoci.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("consultant_leads") || "[]");
    localStorage.setItem("consultant_leads", JSON.stringify([...stored, payload]));
    setSubmitted(true);
    setForm(initialForm);
  }

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
              <h2>Nechte si poslat termín konzultace</h2>
              <form className="leadForm" onSubmit={handleSubmit} noValidate>
                <label>
                  Jméno
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Vaše jméno" />
                  {errors.name ? <small>{errors.name}</small> : null}
                </label>
                <label>
                  Email
                  <input name="email" value={form.email} onChange={handleChange} placeholder="vas@email.cz" />
                  {errors.email ? <small>{errors.email}</small> : null}
                </label>
                <label>
                  Firma / projekt
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Volitelné" />
                </label>
                <label>
                  S čím potřebujete pomoct
                  <textarea
                    name="agenda"
                    value={form.agenda}
                    onChange={handleChange}
                    placeholder="Např. operativa, onboarding klientů, reporting..."
                    rows="4"
                  />
                  {errors.agenda ? <small>{errors.agenda}</small> : null}
                </label>
                <div className="buttonRow">
                  <button className="primaryButton" type="submit">
                    Odeslat poptávku
                  </button>
                  <a className="secondaryButton" href="https://calendly.com/" target="_blank" rel="noreferrer">
                    Otevřít Calendly
                  </a>
                </div>
                {submitted ? <p className="successMessage">Poptávka je připravená. V demu byla uložena lokálně do prohlížeče.</p> : null}
              </form>
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
