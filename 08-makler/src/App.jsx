import { useState } from "react";

const soldProjects = [
  "Vinohrady Residence",
  "Garden Villas",
  "Lofty Letná",
];

const initialForm = {
  type: "",
  layout: "",
  contact: "",
  note: "",
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
    if (!form.type.trim()) nextErrors.type = "Doplňte typ nebo lokalitu.";
    if (!form.layout.trim()) nextErrors.layout = "Doplňte dispozici nebo stav.";
    if (form.contact.trim().length < 6) nextErrors.contact = "Doplňte kontakt.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("realtor_leads") || "[]");
    localStorage.setItem("realtor_leads", JSON.stringify([...stored, payload]));
    setSubmitted(true);
    setForm(initialForm);
  }

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
            <form className="card" onSubmit={handleSubmit} noValidate>
              <span className="eyebrow">Formulář pro bezplatný odhad</span>
              <h2>Chci prodat / odhadnout cenu nemovitosti</h2>
              <div className="formGrid">
                <label>
                  Typ a lokalita
                  <input name="type" value={form.type} onChange={handleChange} placeholder="Byt 3+kk, Praha 7" />
                  {errors.type ? <small>{errors.type}</small> : null}
                </label>
                <label>
                  Dispozice a stav
                  <input name="layout" value={form.layout} onChange={handleChange} placeholder="Po rekonstrukci, 82 m2" />
                  {errors.layout ? <small>{errors.layout}</small> : null}
                </label>
                <label className="wide">
                  Kontakt a poznámka
                  <textarea name="note" value={form.note} onChange={handleChange} rows="4" placeholder="Telefon, email, čas pro zavolání, doplňující informace..." />
                </label>
                <label className="wide">
                  Kontakt
                  <input name="contact" value={form.contact} onChange={handleChange} placeholder="telefon nebo email" />
                  {errors.contact ? <small>{errors.contact}</small> : null}
                </label>
              </div>
              <div className="buttonRow">
                <button className="primaryButton" type="submit">
                  Odeslat k bezplatnému odhadu
                </button>
              </div>
              {submitted ? <p className="successMessage">Lead na odhad byl v demu uložen lokálně a formulář prošel kontrolou.</p> : null}
            </form>
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
