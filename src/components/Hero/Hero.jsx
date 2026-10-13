import "./Hero.css";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import ViewportPreview from "./ViewportPreview";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero__grid">
        <div className="hero__content">
          <Eyebrow>Web designer &amp; developer · Philippines</Eyebrow>

          <h1 className="hero__title">
            I design the site, then I <em>build</em> it.
          </h1>

          <p className="hero__description">
            Figma through to a live, responsive build in Webflow, WordPress, or
            hand-coded HTML. One person the whole way, so nothing gets lost in
            the handoff.
          </p>

          <div className="hero__actions">
            <Button href="#work" variant="primary">
              See the work
            </Button>

            <Button href="#contact" variant="secondary">
              Start a project
            </Button>
          </div>
        </div>

        <ViewportPreview />
      </Container>
    </section>
  );
}
