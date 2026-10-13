export default function Eyebrow({ className = "", children }) {
  return <span className={`eyebrow ${className}`.trim()}>{children}</span>;
}
