import PageHeader from "../components/PageHeader";
import Overview from "../components/Overview";
import VisionMission from "../components/VisionMission";
import Management from "../components/Management";

export const metadata = {
  title: "About Us | Hindustan Machines & Automation",
  description:
    "Hindustan Machines & Automation — engineering, manufacturing and integration of automated production systems from Ghaziabad, India.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="Engineering Automated Production Systems"
        sub="A home-grown SPM, conveyor and automation company established in 2024 at Ghaziabad, India."
      />
      <Overview />
      <VisionMission />
      <Management />
    </main>
  );
}
