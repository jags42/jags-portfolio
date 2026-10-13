import Reveal from "../ui/Reveal";

export default function SectionHeader({ title, description }) {
  return (
    <Reveal className="section-header">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}
