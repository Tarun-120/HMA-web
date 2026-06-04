import PageHeader from "../components/PageHeader";
import WhyUs from "../components/WhyUs";
import Management from "../components/Management";

export const metadata = {
  title: "Why Us | Hindustan Machines & Automation",
  description:
    "Partnership approach, industry expertise, tailor-made solutions, in-house tool room and reliable support — why clients choose HMA.",
};

export default function WhyUsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Why Trust Us"
        title="Built on Engineering & Partnership"
        sub="The reasons clients choose Hindustan Machines & Automation as their engineering partner."
      />
      <WhyUs />
      <Management />
    </main>
  );
}
