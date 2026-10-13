import "./Process.css";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import ProcessStep from "./ProcessStep";
import { processSteps } from "../../data/process";

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader
        title="How a project runs"
        description="Four stages, roughly two to five weeks depending on page count."
      />

      <div className="process">
        {processSteps.map((step) => (
          <ProcessStep key={step.number} step={step} />
        ))}
      </div>
    </Section>
  );
}
