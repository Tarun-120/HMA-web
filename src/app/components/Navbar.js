"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" onClick={close}>
          <Image
            src="/Gemini_Generated_Image_t9neu3t9neu3t9ne.png"
            alt={`${company.name} logo`}
            width={56}
            height={56}
            priority
          />
          <span className="nav__brandtext">
            {company.shortName}
            <span>Machines &amp; Automation</span>
          </span>
        </Link>

        <button
          type="button"
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
