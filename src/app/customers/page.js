import PageHeader from "../components/PageHeader";
import Clients from "../components/Clients";

export const metadata = {
  title: "Our Clients | Hindustan Machines & Automation",
  description:
    "Some of the major clients served by Hindustan Machines & Automation — Continental, OM Engineering Works, JK Tyre and Summercool.",
};

export default function CustomersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Customers"
        title="Trusted by Leading Manufacturers"
        sub="A selection of the major clients we have supplied SPMs, conveyors and components to."
      />
      <Clients />
    </main>
  );
}
