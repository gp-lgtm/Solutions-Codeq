// Services grid
function Services() {
  const items = [
    { tag: "Wordpress", title: "Custom WordPress", body: "Bespoke themes, ACF-driven content, and editor-first experiences.", accent: "#315AFB" },
    { tag: "WooCommerce", title: "Conversion e‑commerce", body: "WooCommerce builds tuned for speed, SEO and checkout conversion.", accent: "#1F3FF9" },
    { tag: "Shopify", title: "Shopify storefronts", body: "Headless and themed Shopify with bespoke checkout and design.", accent: "#132EF8" },
    { tag: "Low code", title: "Low-code platforms", body: "Webflow, Framer and Bubble builds with a Codeq design layer.", accent: "#2C52FA" },
    { tag: "UX", title: "UX & Discovery", body: "Research, product discovery and design sprints before we code.", accent: "#315AFB" },
    { tag: "Care", title: "Codeq Care", body: "Ongoing performance, SEO and reliability support post-launch.", accent: "#061A44" }
  ];
  return (
    <section className="cq-services" id="services">
      <div className="cq-section__head">
        <span className="cq-eyebrow">Services</span>
        <h2>Everything a modern brand needs on the web.</h2>
      </div>
      <div className="cq-services__grid">
        {items.map((s, i) => (
          <article key={i} className="cq-service">
            <span className="cq-service__tag" style={{ color: s.accent }}>{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="cq-service__arrow" aria-hidden>→</span>
          </article>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { Services });
