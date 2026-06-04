import { about, workflow, stats } from "../data";

export default function Overview() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="overview">
          <div className="overview__text">
            <div className="head head--left" style={{ marginBottom: 24 }}>
              <span className="eyebrow">About Us</span>
              <h2 className="title">
                Engineering automated production systems, end to end
              </h2>
            </div>
            {about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="overview__panel">
            <h3>Our Process — Inquiry to Commissioning</h3>
            <ol className="flow">
              {workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
