import Image from "next/image";
import { clientLogos } from "../data";

export default function Clients() {
  return (
    <section className="section section--soft" id="clients">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Trusted By</span>
          <h2 className="title">Some of Our Major Clients</h2>
        </div>
        <div className="logos">
          {clientLogos.map((c) => (
            <div className="logos__item" key={c.name} title={c.name}>
              <Image
                src={c.src}
                alt={c.name}
                width={150}
                height={150}
                className="logos__img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
