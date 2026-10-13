import "./Tools.css";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import { tools } from "../../data/tools";

export default function Tools() {
  return (
    <Section id="tools">
      <SectionHeader title="Tools" description="What I work in day to day." />

      <Reveal as="ul" className="tools">
        {tools.map((tool) => (
          <li className="tools__item" key={tool}>
            {tool}
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
