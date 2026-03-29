import { useState } from "react";

const fields = ["Obchodní právo", "Nemovitosti", "Pracovní právo"];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  summary: "",
  consent: false,
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Doplňte jméno.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Zadejte platný email.";
    if (form.summary.trim().length < 20) nextErrors.summary = "Stručně popište případ alespoň jednou větou.";
    if (!form.consent) nextErrors.consent = "Je potřeba potvrdit souhlas se zpracováním.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("law_leads") || "[]");
    localStorage.setItem("law_leads", JSON.stringify([...stored, payload]));
    setSubmitted(true);
    setForm(initialForm);
  }

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
            <form className="card" onSubmit={handleSubmit} noValidate>
              <span className="eyebrow">Kontaktní formulář</span>
              <h2>Pošlete stručnou poptávku</h2>
              <div className="formGrid">
                <label>
                  Jméno
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Vaše jméno" />
                  {errors.name ? <small>{errors.name}</small> : null}
                </label>
                <label>
                  Společnost
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Volitelné" />
                </label>
                <label>
                  Email
                  <input name="email" value={form.email} onChange={handleChange} placeholder="vas@email.cz" />
                  {errors.email ? <small>{errors.email}</small> : null}
                </label>
                <label>
                  Telefon
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+420..." />
                </label>
                <label className="wide">
                  Stručný popis případu
                  <textarea name="summary" value={form.summary} onChange={handleChange} rows="4" placeholder="Smlouva, spor, pracovní vztah, nemovitost..." />
                  {errors.summary ? <small>{errors.summary}</small> : null}
                </label>
                <label className="checkbox wide">
                  <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange} />
                  Souhlasím se zpracováním údajů za účelem odpovědi na poptávku.
                </label>
                {errors.consent ? <small className="wide">{errors.consent}</small> : null}
              </div>
              <div className="buttonRow">
                <button className="primaryButton" type="submit">
                  Odeslat poptávku
                </button>
              </div>
              {submitted ? <p className="successMessage">Poptávka byla v demu validována a uložena lokálně.</p> : null}
            </form>
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
