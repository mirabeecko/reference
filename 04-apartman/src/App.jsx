import { useState } from "react";

const amenities = ["Wi-Fi", "Kávovar", "Parkování", "Sauna", "Krby", "Kolárna"];
const trips = ["Protržená přehrada", "Jizerka", "Bramberk", "Cyklotrasy na Hrabětice"];

const initialForm = {
  date: "",
  guests: "",
  name: "",
  email: "",
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
    if (!form.date.trim()) nextErrors.date = "Vyberte prosím termín.";
    if (!form.guests.trim()) nextErrors.guests = "Doplňte počet hostů.";
    if (!form.name.trim()) nextErrors.name = "Doplňte jméno.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Zadejte platný email.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("apartment_requests") || "[]");
    localStorage.setItem("apartment_requests", JSON.stringify([...stored, payload]));
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">Chalupa Na Mechu</div>
          <nav>
            <a href="#galerie">Galerie</a>
            <a href="#vybaveni">Vybavení</a>
            <a href="#rezervace">Rezervace</a>
          </nav>
          <a className="primaryButton" href="#rezervace">
            Zkontrolovat termín
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">Pronájem apartmánu / chaty</span>
              <h1>Víkend, který voní dřevem, kávou a horským klidem.</h1>
              <p className="lead">
                Stránka staví na emocích, velké galerii, čisté typografii a
                praktickém rezervačním bloku.
              </p>
              <div className="buttonRow">
                <a className="primaryButton" href="#rezervace">
                  Rezervovat pobyt
                </a>
                <a className="secondaryButton" href="#tipy">
                  Tipy na výlety
                </a>
              </div>
            </div>
            <div className="heroScene" />
          </div>
        </section>

        <section id="galerie" className="section">
          <div className="wrap">
            <span className="eyebrow">Velká fotogalerie</span>
            <h2>Interiér, terasa a výhledy</h2>
            <div className="gallery">
              <div className="galleryItem g1" />
              <div className="galleryItem g2" />
              <div className="galleryItem g3" />
            </div>
          </div>
        </section>

        <section id="vybaveni" className="section">
          <div className="wrap twoCol">
            <article className="card">
              <span className="eyebrow">Vybavení</span>
              <h2>Všechno pro pohodový pobyt</h2>
              <div className="tagRow">
                {amenities.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article id="tipy" className="card">
              <span className="eyebrow">Počasí a výlety</span>
              <h2>Co podniknout v okolí</h2>
              <div className="weatherRow">
                <div>
                  <strong>So</strong>
                  <span>12 °C</span>
                </div>
                <div>
                  <strong>Ne</strong>
                  <span>10 °C</span>
                </div>
                <div>
                  <strong>Po</strong>
                  <span>8 °C</span>
                </div>
              </div>
              <p>{trips.join(" • ")}</p>
            </article>
          </div>
        </section>

        <section id="rezervace" className="section">
          <form className="wrap reservationCard" onSubmit={handleSubmit} noValidate>
            <div>
              <span className="eyebrow">Rezervační formulář</span>
              <h2>Pošlete nezávaznou poptávku</h2>
            </div>
            <div className="formGrid">
              <label>
                Termín pobytu
                <input name="date" value={form.date} onChange={handleChange} placeholder="12.-15. června" />
                {errors.date ? <small>{errors.date}</small> : null}
              </label>
              <label>
                Počet hostů
                <input name="guests" value={form.guests} onChange={handleChange} placeholder="Např. 4 osoby" />
                {errors.guests ? <small>{errors.guests}</small> : null}
              </label>
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
              <label className="wide">
                Poznámka
                <textarea name="note" value={form.note} onChange={handleChange} rows="4" placeholder="Děti, pes, sauna, pozdější příjezd..." />
              </label>
            </div>
            <div className="buttonRow">
              <button className="primaryButton" type="submit">
                Odeslat poptávku
              </button>
            </div>
            {submitted ? <p className="successMessage">Poptávka byla v demu uložena lokálně a formulář prošel validací.</p> : null}
          </form>
        </section>
      </main>
    </div>
  );
}
