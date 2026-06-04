"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides, company } from "../data";

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[i];

  return (
    <section className="hero" id="top">
      {/* Rotating background photos (real project images from the PPT) */}
      <div className="hero__bg">
        {heroSlides.map((s, idx) => (
          <Image
            key={s.img}
            src={s.img}
            alt={s.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`hero__img${idx === i ? " is-active" : ""}`}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <span className="hero__badge">{slide.tag}</span>
        <div className="hero__slide">
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>
        </div>
        <p className="hero__strap">{company.oneStop}</p>
        <div className="hero__cta">
          <a href="/products" className="btn btn--primary">
            Explore Our Products →
          </a>
          <a href={`mailto:${company.email}`} className="btn btn--ghost">
            Request a Quote
          </a>
        </div>
        <div className="hero__dots" role="tablist" aria-label="Project slides">
          {heroSlides.map((s, idx) => (
            <button
              key={s.title}
              className={`hero__dot${idx === i ? " is-active" : ""}`}
              aria-label={`Show ${s.title}`}
              aria-selected={idx === i}
              role="tab"
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
