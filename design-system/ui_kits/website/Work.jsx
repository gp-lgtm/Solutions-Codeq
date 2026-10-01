// Work / case studies
function Work() {
  const [active, setActive] = React.useState(0);
  const items = [
    { client: "Finansowy Piotr", sector: "Finance · WooCommerce", result: "+38% conversion", color: "#315AFB" },
    { client: "Nayax", sector: "SaaS · WordPress", result: "Re-launched in 6 weeks", color: "#1F3FF9" },
    { client: "Shopify launch", sector: "DTC · Shopify", result: "Headless, sub-1s LCP", color: "#061A44" }
  ];
  const a = items[active];
  return (
    <section className="cq-work" id="work">
      <div className="cq-section__head">
        <span className="cq-eyebrow">Selected work</span>
        <h2>Case studies.</h2>
      </div>
      <div className="cq-work__stage" style={{ background: a.color }}>
        <div className="cq-work__grad" />
        <div className="cq-work__copy">
          <span className="cq-eyebrow cq-eyebrow--inv">{a.sector}</span>
          <h3>{a.client}</h3>
          <div className="cq-work__result">{a.result}</div>
          <a className="cq-btn cq-btn--white">Read case study</a>
        </div>
      </div>
      <div className="cq-work__tabs">
        {items.map((it, i) => (
          <button
            key={i}
            className={`cq-work__tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{it.client}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { Work });
