export default function Stat({ stat }) {
  return (
    <div className="stat">
      <b className="stat__value">{stat.value}</b>
      <span className="stat__label">{stat.label}</span>
    </div>
  );
}
