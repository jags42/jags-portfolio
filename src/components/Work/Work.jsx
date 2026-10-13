import "./Work.css";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/project";

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        title="Selected work"
        description="A selection of design and development projects."
      />

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
