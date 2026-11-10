const PHONE = "+1 647 409 8264";
const PHONE_LINK = "+16474098264";
const EMAIL = "canada_raj@hotmail.com";
const ADDRESS = ["2225 Markham Road, Unit 306", "Scarborough, Ontario M1B 2W4"];

const SOCIALS = [
  { label: "LinkedIn (Raj Puvan)", url: "https://www.linkedin.com/in/rajpuvan/" },
  { label: "LinkedIn (MultiVisa)", url: "https://www.linkedin.com/company/multi-visa" },
  { label: "Instagram (@rajhpuvan)", url: "https://instagram.com/rajhpuvan" },
  { label: "Facebook (Raj Puvan)", url: "https://web.facebook.com/profile.php?id=100090187713555" },
  { label: "Facebook (MultiVisa)", url: "https://web.facebook.com/profile.php?id=100090507137801" },
];

const services = [
  { title: "Visit Visa", text: "Our specialty. Visitor visa applications handled with care and attention to detail.", featured: true },
  { title: "Student Visa", text: "Study permit support for students planning to study in Canada." },
  { title: "Work Visa", text: "Work permit applications for people coming to Canada to work." },
  { title: "Express Entry", text: "Guidance on Express Entry applications for permanent residence." },
  { title: "Spousal Sponsorship", text: "Sponsorship applications for spouses and partners of Canadian citizens and permanent residents." },
  { title: "PR through Refugee Case", text: "Permanent residence applications for people with a refugee claim or protected person status in Canada." },
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" aria-label="MultiVisa Service home">
            <img className="logo" src="/images/logo.png" alt="MultiVisa Service" />
          </a>

          <nav className="nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#about">Director</a>
            <a href="#offices">Office</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-red btn-sm" href={`tel:${PHONE_LINK}`}>
              Call {PHONE}
            </a>
          </nav>

          <details className="nav-toggle">
            <summary>Menu</summary>
            <nav className="menu" aria-label="Mobile">
              <a href="#services">Services</a>
              <a href="#about">Director</a>
              <a href="#offices">Office</a>
              <a href="#contact">Contact</a>
              <a href={`tel:${PHONE_LINK}`}>Call {PHONE}</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top" style={{ backgroundImage: "url(/images/office-1.jpg)" }}>
        <div className="wrap hero-inner">
          <span className="kicker">Canada visa services</span>
          <h1>
            Visit visas done <span className="gold">right</span>.
          </h1>
          <p className="lead">
            MultiVisa Service specializes in visit visas, and also helps with student
            visas, work visas and Express Entry. Based in Scarborough, Ontario.
          </p>
          <div className="btn-row">
            <a className="btn btn-red" href={`tel:${PHONE_LINK}`}>
              Call {PHONE}
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Our services</span>
            <h2>What we help with</h2>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className={`card${s.featured ? " card-featured" : ""}`} key={s.title}>
                {s.featured && <span className="badge">Specialty</span>}
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <img className="poster" src="/images/poster.jpg" alt="MultiVisa Service services poster" />
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap split">
          <img className="portrait" src="/images/raj-puvan.jpg" alt="Mr. Raj Puvan, Director" />
          <div>
            <span className="kicker">Director</span>
            <h2>Mr. Raj Puvan</h2>
            <p className="lead">
              Mr. Raj Puvan leads MultiVisa Service. If you have questions about your
              visa, you can speak with him directly.
            </p>
            <a className="btn btn-red" href={`tel:${PHONE_LINK}`}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section id="offices" className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Our office</span>
            <h2>Visit us in Scarborough</h2>
          </div>
          <div className="gallery">
            <img src="/images/office-1.jpg" alt="MultiVisa Service office sign" loading="lazy" />
            <img src="/images/office-2.jpg" alt="MultiVisa Service office hallway" loading="lazy" />
            <img src="/images/office-3.jpg" alt="MultiVisa Service office entrance" loading="lazy" />
            <img src="/images/office-4.jpg" alt="MultiVisa Service office entrance" loading="lazy" />
            <img src="/images/office-5.jpg" alt="MultiVisa Service consultation room" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap contact-grid">
          <div>
            <span className="kicker">Contact</span>
            <h2>Get in touch</h2>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong>
                <a href={`tel:${PHONE_LINK}`}>{PHONE}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <strong>Address</strong>
                <span>
                  {ADDRESS.map((line) => (
                    <span key={line} className="addr-line">{line}</span>
                  ))}
                </span>
              </li>
              <li>
                <strong>Social</strong>
                <span className="social-links">
                  {SOCIALS.map((s) => (
                    <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <form className="form" action={`mailto:${EMAIL}?subject=Website%20consultation%20request`} method="post" encType="text/plain">
            <div className="form-row">
              <label>
                Full name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              I am interested in
              <select name="service" defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Visit visa</option>
                <option>Student visa</option>
                <option>Work visa</option>
                <option>Express Entry</option>
                <option>Spousal sponsorship</option>
                <option>PR through refugee case</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" />
            </label>
            <button className="btn btn-red" type="submit">
              Send Message
            </button>
            <p className="form-note">
              Clicking Send opens your email app with your message addressed to {EMAIL}.
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <img className="logo-chip" src="/images/logo.png" alt="MultiVisa Service" />
          <p>
            {PHONE} · {EMAIL}
            <br />
            {ADDRESS.join(", ")}
          </p>
          <p className="social-links">
            {SOCIALS.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </p>
          <p className="disclaimer">
            Information on this site is general and not legal advice. Immigration rules and
            fees change, so always check the official government website before applying.
          </p>
          <p className="copy">&copy; MultiVisa Service. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
