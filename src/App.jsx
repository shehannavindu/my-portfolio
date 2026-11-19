import { useState } from "react";
import { profile, categories, projects, skills, contact } from "./data.js";

function Project({ item }) {
  return (
    <li className="project">
      <div className="project-top">
        <h3>{item.title}</h3>
        <span className={`status ${item.status === "In progress" ? "live" : ""}`}>
          {item.status}
        </span>
      </div>
      <p>{item.description}</p>
      <ul className="tags">
        {item.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {item.link && (
        <a href={item.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}
    </li>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <header className="bar">
        <a className="logo" href="#top">{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="role">{profile.role}</p>
          <h1>Hi, I'm {profile.name}.</h1>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <a className="btn primary" href="#projects">See my projects</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </section>

        <dl className="facts">
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <section id="about">
          <h2>About me</h2>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="filters" role="group" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                className={c === filter ? "chip active" : "chip"}
                onClick={() => setFilter(c)}
                aria-pressed={c === filter}
              >
                {c}
              </button>
            ))}
          </div>
          <ul className="project-list">
            {shown.map((p) => (
              <Project key={p.title} item={p} />
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          {skills.map((g) => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="tags big">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>I am open to internships and web projects. Send me an email.</p>
          <a className="btn primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <p className="more">
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
