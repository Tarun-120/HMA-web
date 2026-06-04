import { whyUs } from "../data";

export default function WhyUs() {
  return (
    <section className="section section--soft" id="why">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Why Trust Us</span>
          <h2 className="title">Built on Engineering &amp; Partnership</h2>
        </div>
        <div className="why">
          {whyUs.map((w) => (
            <article className="why__card" key={w.title}>
              <div className="why__icon" aria-hidden>
                {w.icon}
              </div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
