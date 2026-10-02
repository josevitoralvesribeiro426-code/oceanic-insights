import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const treatments = [
  { title: "HIFU", text: "Tecnologia de ultrassom focada para um cuidado facial avançado e não invasivo.", tag: "Rosto & firmeza" },
  { title: "Peelings", text: "Protocolos de renovação da pele pensados para textura, luminosidade e uniformidade.", tag: "Renovação" },
  { title: "Depilação a laser", text: "Tratamento com tecnologia laser para uma rotina de cuidados mais prática e confortável.", tag: "Tecnologia laser" },
  { title: "Estética avançada", text: "Avaliação e protocolos personalizados para acompanhar as necessidades da sua pele.", tag: "Personalizado" },
];

const hours = [
  ["Segunda-feira", "10:00 — 20:00"],
  ["Terça-feira", "Horário não publicado"],
  ["Quarta-feira", "10:00 — 20:00"],
  ["Quinta-feira", "10:00 — 20:00"],
  ["Sexta-feira", "10:00 — 20:00"],
  ["Sábado", "10:00 — 20:00"],
  ["Domingo", "Horário não publicado"],
];

function Icon({ name }: { name: "arrow" | "phone" | "pin" | "star" | "menu" | "close" }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const maps = "https://www.google.com/maps/search/?api=1&query=S%C3%B3nia%20Medina%20Est%C3%A9tica%20Avan%C3%A7ada%20%26%20Laser%2C%20Santar%C3%A9m%2C%20Portugal";
  const phone = "tel:+351910042245";

  return (
    <main className="site-shell">
      <header className="nav">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SM</span>
          <span><strong>Sónia Medina</strong><small>ESTÉTICA AVANÇADA & LASER</small></span>
        </a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#tratamentos" onClick={() => setOpen(false)}>Tratamentos</a>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#contactos" onClick={() => setOpen(false)}>Contactos</a>
          <a className="nav-cta" href={phone}>Agendar <Icon name="arrow" /></a>
        </nav>
        <button className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SANTARÉM · PORTUGAL</p>
          <h1>Beleza cuidada.<br /><em>Confiança revelada.</em></h1>
          <p className="hero-text">Estética avançada e tecnologia laser num espaço dedicado ao cuidado personalizado da sua pele.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={phone}>Marcar atendimento <Icon name="arrow" /></a>
            <a className="text-link" href={maps} target="_blank" rel="noreferrer">Ver localização <Icon name="pin" /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Sónia Medina Estética Avançada & Laser">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="hero-card"><span>SM</span><p>ESTÉTICA<br />AVANÇADA</p></div>
          <div className="vertical-label">SÓNIA MEDINA · ESTÉTICA AVANÇADA & LASER</div>
        </div>
      </section>

      <section className="trust-bar">
        <div><strong>4.8</strong><span><span className="stars">★★★★★</span> no Google</span></div>
        <div><strong>26</strong><span>avaliações públicas</span></div>
        <div><strong>+351 910 042 245</strong><span>contacto direto</span></div>
      </section>

      <section id="tratamentos" className="section treatments">
        <div className="section-heading">
          <div><p className="eyebrow">CUIDADO PERSONALIZADO</p><h2>Tratamentos pensados<br /><em>para si.</em></h2></div>
          <p>Uma abordagem focada em tecnologia, cuidado e acompanhamento individual.</p>
        </div>
        <div className="treatment-grid">
          {treatments.map((item, i) => (
            <article className="treatment-card" key={item.title}>
              <span className="number">0{i + 1}</span>
              <div><span className="pill">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>
              <a href={phone} aria-label={`Agendar ${item.title}`}><Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="about-visual"><div className="monogram">SM</div><span>ESTÉTICA<br />AVANÇADA<br />& LASER</span></div>
        <div className="about-copy">
          <p className="eyebrow">SÓNIA MEDINA</p>
          <h2>Um espaço onde o cuidado encontra a <em>tecnologia.</em></h2>
          <p>Na Sónia Medina Estética Avançada & Laser, o foco está em proporcionar uma experiência de estética cuidada, profissional e personalizada, com recurso a tratamentos avançados.</p>
          <p>Localizado em Santarém, o espaço reúne protocolos de estética avançada, HIFU, peelings e depilação a laser.</p>
          <a className="text-link" href={phone}>Falar diretamente <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="section reviews">
        <div className="section-heading compact">
          <div><p className="eyebrow">REPUTAÇÃO</p><h2>O cuidado que se <em>sente.</em></h2></div>
          <div className="rating"><strong>4.8</strong><span className="stars">★★★★★</span><small>26 avaliações no Google</small></div>
        </div>
        <a className="review-link" href={maps} target="_blank" rel="noreferrer">Consultar avaliações e fotos no Google Maps <Icon name="arrow" /></a>
      </section>

      <section id="contactos" className="contact">
        <div>
          <p className="eyebrow">MARCAÇÃO & CONTACTO</p>
          <h2>O próximo passo<br /><em>começa aqui.</em></h2>
          <p>Entre em contacto para conhecer os tratamentos disponíveis e encontrar o protocolo mais adequado para si.</p>
          <a className="button button-light" href={phone}><Icon name="phone" /> +351 910 042 245</a>
        </div>
        <div className="contact-details">
          <div><span>ENDEREÇO</span><a href={maps} target="_blank" rel="noreferrer">R. Fernão Teles de Meneses 30<br />2005-133 Santarém, Portugal</a></div>
          <div><span>HORÁRIO PUBLICADO</span>{hours.map(([day, time]) => <p key={day}><b>{day}</b><small>{time}</small></p>)}</div>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">SM</span><span><strong>Sónia Medina</strong><small>ESTÉTICA AVANÇADA & LASER</small></span></div>
        <p>© {new Date().getFullYear()} Sónia Medina Estética Avançada & Laser · Santarém</p>
        <a href={maps} target="_blank" rel="noreferrer">Google Maps <Icon name="arrow" /></a>
      </footer>
    </main>
  );
}
