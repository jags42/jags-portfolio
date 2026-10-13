import Reveal from "../ui/Reveal";

export default function ProcessStep({ step }) {
  return (
    <Reveal className="process-step">
      <span className="process-step__number">{step.number}</span>

      <h3>{step.title}</h3>

      <p>{step.description}</p>
    </Reveal>
  );
}
