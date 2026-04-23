// Contact + Footer
function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="cq-contact" id="contact">
      <div className="cq-contact__left">
        <span className="cq-eyebrow cq-eyebrow--inv">Let's build</span>
        <h2>Have a project in mind?</h2>
        <p>Tell us about what you're building. We'll reply within two working days.</p>
        <div className="cq-contact__meta">
          <div><span>Email</span><a>hello@codeq.pl</a></div>
          <div><span>Studio</span><a>Warsaw · remote</a></div>
        </div>
      </div>
      <form className="cq-contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        {sent ? (
          <div className="cq-contact__sent">
            <h3>Thanks — we'll be in touch.</h3>
            <p>Your message is on its way to the studio.</p>
          </div>
        ) : (
          <>
            <label>Name<input placeholder="Jane Kowalska" required /></label>
            <label>Email<input type="email" placeholder="you@company.com" required /></label>
            <label>What are you building?<textarea rows="4" placeholder="A new Shopify storefront, a re-launch, a brand site…" required /></label>
            <button className="cq-btn cq-btn--primary" type="submit">Send brief</button>
          </>
        )}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="cq-footer">
      <div className="cq-footer__top">
        <img src="../../assets/logo-blue.svg" alt="Codeq" className="cq-footer__logo" />
        <div className="cq-footer__cols">
          <div><h5>Services</h5><a>WordPress</a><a>WooCommerce</a><a>Shopify</a><a>Low code</a><a>UX</a></div>
          <div><h5>Studio</h5><a>About</a><a>Work</a><a>Blog</a><a>Careers</a></div>
          <div><h5>Contact</h5><a>hello@codeq.pl</a><a>Warsaw, PL</a><a>LinkedIn</a><a>Clutch</a></div>
        </div>
      </div>
      <div className="cq-footer__bottom">
        <span>© Codeq {new Date().getFullYear()}</span>
        <span>Building the internet of tomorrow, today.</span>
      </div>
    </footer>
  );
}
Object.assign(window, { Contact, Footer });
