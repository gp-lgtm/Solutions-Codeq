// components/Hero.jsx
function Hero() {
  return (
    <section className="cq-hero">
      <div className="cq-hero__grad cq-hero__grad--a" />
      <div className="cq-hero__grad cq-hero__grad--b" />
      <div className="cq-hero__inner">
        <span className="cq-eyebrow">Digital product studio</span>
        <h1 className="cq-hero__title">Building the internet of&nbsp;tomorrow,&nbsp;today.</h1>
        <p className="cq-hero__lead">Work for business impact with a focus on the Discovery. Specializing in WordPress, WooCommerce, Shopify, low code, UX.</p>
        <div className="cq-hero__cta">
          <a className="cq-btn cq-btn--primary">Start a project</a>
          <a className="cq-btn cq-btn--ghost">See our work</a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
