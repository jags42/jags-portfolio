import "./Footer.css";
import Container from "../layout/Container";
import { socialLinks } from "../../data/sociallinks";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <span>&copy; {new Date().getFullYear()} Julius Troy Aguas</span>

        <nav className="footer__links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
