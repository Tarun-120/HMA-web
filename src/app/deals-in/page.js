import PageHeader from "../components/PageHeader";
import DealsIn from "../components/DealsIn";

export const metadata = {
  title: "Deals In | Hindustan Machines & Automation",
  description:
    "We supply gearboxes & motion products, bearings, hydraulics & pneumatics, and electrical & electronics from leading global brands.",
};

export default function DealsInPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Deals In"
        title="Automation Components & Supply"
        sub="A complete range of motion, fluid-power and electrical components from leading global brands."
      />
      <DealsIn />
    </main>
  );
}
