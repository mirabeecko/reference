import { useState } from "react";

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

const initialForm = {
  name: "",
  email: "",
  goal: "",
  lesson: "",
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
    if (!form.name.trim()) nextErrors.name = "Doplň jméno.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Zadej platný email.";
    if (!form.lesson.trim()) nextErrors.lesson = "Vyber lekci nebo plán.";
    if (form.goal.trim().length < 10) nextErrors.goal = "Napiš stručně svůj cíl.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("fitness_leads") || "[]");
    localStorage.setItem("fitness_leads", JSON.stringify([...stored, payload]));
    setSubmitted(true);
    setForm(initialForm);
  }

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
          <a className="primaryButton" href="#registrace">
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
                <a className="primaryButton" href="#registrace">
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

        <section id="registrace" className="section">
          <div className="wrap registrationCard">
            <div>
              <span className="eyebrow">Přihlášení / plán</span>
              <h2>Pošli poptávku na lekci nebo tréninkový plán</h2>
            </div>
            <form className="formGrid" onSubmit={handleSubmit} noValidate>
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
                Lekce / plán
                <input name="lesson" value={form.lesson} onChange={handleChange} placeholder="Např. Strength Flow / plán na míru" />
                {errors.lesson ? <small>{errors.lesson}</small> : null}
              </label>
              <label>
                Cíl
                <textarea name="goal" value={form.goal} onChange={handleChange} rows="4" placeholder="Co chceš zlepšit: síla, mobilita, redukce, pravidelnost..." />
                {errors.goal ? <small>{errors.goal}</small> : null}
              </label>
              <div className="buttonRow">
                <button className="primaryButton" type="submit">
                  Odeslat přihlášku
                </button>
              </div>
              {submitted ? <p className="successMessage">Přihláška byla v demu ověřena a uložena lokálně.</p> : null}
            </form>
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
