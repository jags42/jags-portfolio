import "./About.css";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Stat from "./Stat";
import { stats } from "../../data/stats";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader title="About" />

      <div className="about">
        <Reveal className="about__text">
          <p>
            I&rsquo;m Julius Troy Aguas, a web designer and developer based in
            the Philippines. I work with agencies and business owners who need a
            site designed and built by the same person, so what gets approved in
            Figma is what actually goes live.
          </p>

          <p>
            Most of my work sits in the gap between design files and shipped
            code: taking a layout that looks right on an artboard and making it
            hold up on a real phone, on a slow connection, for a client who
            needs to edit it next month without calling anyone.
          </p>

          <p>I work full time and overlap with US business hours.</p>
        </Reveal>

        <Reveal className="about__stats">
          {stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
