import "./Header.css";
import Container from "../layout/Container";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="header">
      <Container className="header__inner">
        <a href="#" className="header__brand">
          Julius Troy Aguas
        </a>

        <div className="header__status">
          <span className="status-dot" />
          Available for work
        </div>

        <nav className="header__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
