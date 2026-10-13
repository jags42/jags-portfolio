import Container from "./Container";

export default function Section({ id, className = "", children, ...rest }) {
  return (
    <section id={id} className={`section ${className}`.trim()} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
