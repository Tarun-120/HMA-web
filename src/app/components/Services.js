import Image from "next/image";
import { services } from "../data";

export default function Services() {
  return (
    <section className="section section--soft" id="products">
      <div className="container">
        <div className="head">
          <span className="eyebrow">What We Supply</span>
          <h2 className="title">Our Products &amp; Solutions</h2>
          <p className="sub">
            From special purpose machines to complete conveyor lines — designed,
            built and commissioned to your specific requirements.
          </p>
        </div>
        <div className="grid">
          {services.map((s) => (
            <article className="scard" key={s.key}>
              <div className="scard__media">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 540px) 100vw, (max-width: 980px) 50vw, 25vw"
                  className="scard__img"
                />
                <span className="scard__icon" aria-hidden>
                  {s.icon}
                </span>
              </div>
              <div className="scard__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
