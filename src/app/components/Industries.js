import { industries } from "../data";

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Industries Served</span>
          <h2 className="title">Solutions Across Sectors</h2>
          <p className="sub">
            We deliver SPMs, conveyors and automation tailored to the needs of a
            wide range of industries.
          </p>
        </div>
        <div className="ind">
          {industries.map((it) => (
            <div className="ind__item" key={it.name}>
              <span className="ind__ic" aria-hidden>
                {it.icon}
              </span>
              <b>{it.name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
