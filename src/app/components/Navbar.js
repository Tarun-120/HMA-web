import Image from "next/image";
import Link from "next/link";
import { company } from "../data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/deals-in", label: "Deals In" },
  { href: "/gallery", label: "Gallery" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Us" },
  { href: "/customers", label: "Clients" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <Image
            src="/Gemini_Generated_Image_t9neu3t9neu3t9ne.png"
            alt={`${company.name} logo`}
            width={85}
            height={85}
            priority
          />
          <span className="nav__brandtext">
            {company.shortName}
            <span>Machines &amp; Automation</span>
          </span>
        </Link>
        <nav className="nav__links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${company.email}`} className="nav__cta">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
