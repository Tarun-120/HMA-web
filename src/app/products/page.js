import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Featured from "../components/Featured";

export const metadata = {
  title: "Products | Hindustan Machines & Automation",
  description:
    "Special Purpose Machines, assembly lines, conveyors, jigs & fixtures, inspection systems, the Air Delivery System and in-house tool room.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What We Supply"
        title="Our Products & Solutions"
        sub="Designed, built, tested and commissioned to your specific process and product."
      />
      <Services />
      <Featured />
      <section className="section section--soft" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="title">See It On The Shop Floor</h2>
          <p className="sub" style={{ margin: "12px auto 24px", maxWidth: 620 }}>
            Browse photos of machines, conveyors, fixtures and spare parts we have
            designed and manufactured.
          </p>
          <Link href="/gallery" className="btn btn--primary">
            View Full Gallery →
          </Link>
        </div>
      </section>
    </main>
  );
}
