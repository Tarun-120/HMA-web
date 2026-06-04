import { ads } from "../data";

export default function Featured() {
  return (
    <section className="section" id="ads">
      <div className="container">
        <div className="ads">
          <div className="ads__visual" aria-hidden>
            🌀
          </div>
          <div>
            <span className="eyebrow">Featured System</span>
            <h3>{ads.title}</h3>
            <p>{ads.intro}</p>
            <ul className="ads__list">
              {ads.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
