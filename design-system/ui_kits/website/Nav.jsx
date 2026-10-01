// components/Nav.jsx — Codeq marketing nav
function Nav({ variant = "light" }) {
  const isDark = variant === "dark";
  return (
    <header className={`cq-nav ${isDark ? "cq-nav--dark" : ""}`}>
      <a className="cq-nav__logo" href="#">
        <img src="../../assets/logo-blue.svg" alt="Codeq" className="cq-logo-light" />
        <img src="../../assets/logo-white.svg" alt="Codeq" className="cq-logo-dark" />
      </a>
      <nav className="cq-nav__menu">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="cq-btn cq-btn--primary">Start a project</a>
    </header>
  );
}
Object.assign(window, { Nav });
