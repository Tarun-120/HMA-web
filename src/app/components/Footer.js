import Link from "next/link";
import { company } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <b>{company.name}</b>
            <p>{company.subtitle}</p>
            <div className="footer__social">
              <a href={company.social.facebook} aria-label="Facebook">f</a>
              <a href={company.social.linkedin} aria-label="LinkedIn">in</a>
              <a href={company.social.youtube} aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/customers">Clients</Link>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <Link href="/products">Products</Link>
            <Link href="/deals-in">Deals In</Link>
            <Link href="/gallery">Photo Gallery</Link>
          </div>

          <div className="footer__col">
            <h4>Get In Touch</h4>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                {p}
              </a>
            ))}
            <p>{company.address.line2}</p>
            <p>{company.address.line3}</p>
          </div>
        </div>

        <div className="footer__bottom">
          © {company.incorporated}–present {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
