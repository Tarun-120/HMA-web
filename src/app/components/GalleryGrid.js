import Image from "next/image";
import { galleryGroups } from "../data";

export default function GalleryGrid() {
  return (
    <>
      {galleryGroups.map((g, gi) => (
        <section
          key={g.title}
          className={`section ${gi % 2 ? "section--soft" : ""}`}
        >
          <div className="container">
            <div className="head head--left">
              <span className="eyebrow">Gallery</span>
              <h2 className="title">{g.title}</h2>
            </div>
            <div className="work">
              {g.images.map((src, i) => (
                <figure className="work__item" key={src}>
                  <Image
                    src={src}
                    alt={`${g.title} ${i + 1}`}
                    fill
                    sizes="(max-width: 540px) 100vw, (max-width: 980px) 50vw, 25vw"
                    className="work__img"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
