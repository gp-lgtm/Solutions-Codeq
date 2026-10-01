// Testimonials + Social proof row
function SocialProof() {
  const logos = ["Finansowy Piotr", "Nayax", "Attention Insights", "Clutch", "WooCommerce", "Shopify Experts"];
  return (
    <section className="cq-proof">
      <span className="cq-eyebrow">Trusted by teams at</span>
      <div className="cq-proof__row">
        {logos.map((l, i) => <span key={i} className="cq-proof__logo">{l}</span>)}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="cq-quote">
      <div className="cq-quote__grad" />
      <blockquote>
        "Codeq rebuilt our storefront end-to-end. Discovery-first, always on time, and the numbers speak for themselves."
      </blockquote>
      <div className="cq-quote__attr">
        <div className="cq-quote__avatar">FP</div>
        <div><strong>Piotr Kowalski</strong><span>Founder · Finansowy Piotr</span></div>
      </div>
    </section>
  );
}
Object.assign(window, { SocialProof, Quote });
