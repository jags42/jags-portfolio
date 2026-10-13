import "./Contact.css";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { email } from "../../data/sociallinks";

export default function Contact() {
  return (
    <Section id="contact" className="contact">
      <Reveal>
        <Eyebrow>Next step</Eyebrow>

        <h2 className="contact__title">Tell me what you&rsquo;re building</h2>

        <p className="contact__description">
          Send the page count, the deadline, and a link to anything you like.
          I&rsquo;ll come back with a scope and a price.
        </p>

        <a className="contact__email" href={`mailto:${email}`}>
          {email}
        </a>
      </Reveal>
    </Section>
  );
}
