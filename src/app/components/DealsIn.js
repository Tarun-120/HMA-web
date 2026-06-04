import { dealsIn } from "../data";

export default function DealsIn() {
  return (
    <section className="section section--soft" id="deals">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Deals In</span>
          <h2 className="title">Automation Components &amp; Supply</h2>
          <p className="sub">
            Beyond manufacturing, we supply a complete range of motion, fluid-power
            and electrical components from leading global brands.
          </p>
        </div>
        <div className="deals">
          {dealsIn.map((d) => (
            <article className="deal" key={d.key}>
              <div className="deal__icon" aria-hidden>
                {d.icon}
              </div>
              <h3>{d.title}</h3>
              <ul className="deal__list">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="deal__brands">
                {d.brands.map((b) => (
                  <span className="chip" key={b}>
                    {b}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
