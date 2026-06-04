import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Featured from "./components/Featured";
import Clients from "./components/Clients";
import MakeInIndia from "./components/MakeInIndia";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Overview />
      <Services />
      <section className="section" style={{ textAlign: "center", paddingTop: 0 }}>
        <div className="container">
          <Link href="/products" className="btn btn--primary">
            View All Products →
          </Link>
        </div>
      </section>
      <Featured />
      <Clients />
      <MakeInIndia />
    </main>
  );
}
