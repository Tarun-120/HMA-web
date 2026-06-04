import Image from "next/image";
import { projects, automationShowcase } from "../data";

const allWork = [...projects, ...automationShowcase];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Our Work</span>
          <h2 className="title">Designed &amp; Manufactured by Us</h2>
          <p className="sub">
            A selection of SPMs, conveyors, fixtures, spare parts and test systems
            delivered to our clients.
          </p>
        </div>
        <div className="work">
          {allWork.map((p) => (
            <figure className="work__item" key={p.src}>
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 540px) 100vw, (max-width: 980px) 50vw, 25vw"
                className="work__img"
              />
              <span className="work__tag">{p.tag}</span>
              <figcaption className="work__cap">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
