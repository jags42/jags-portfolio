import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="project-card">
      <a
        href={project.link}
        className="project-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-card__image"
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
        />

        <div className="project-card__body">
          <span className="project-card__role">{project.role}</span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}
