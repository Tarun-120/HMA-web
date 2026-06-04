import PageHeader from "../components/PageHeader";
import Industries from "../components/Industries";

export const metadata = {
  title: "Industries Served | Hindustan Machines & Automation",
  description:
    "SPMs, conveyors and automation for automotive, tyre, fans & appliances, white goods, aluminium/UPVC, warehousing, FMCG, testing labs and general engineering.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Industries Served"
        title="Solutions Across Sectors"
        sub="We deliver SPMs, conveyors and automation tailored to a wide range of industries."
      />
      <Industries />
    </main>
  );
}
