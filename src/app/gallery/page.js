import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Photo Gallery | Hindustan Machines & Automation",
  description:
    "Photos of Special Purpose Machines, conveyors, fixtures, spare parts, precision systems and the Air Delivery System manufactured by HMA.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Photo Gallery"
        title="Designed & Manufactured by Us"
        sub="A complete showcase of machines, conveyors, fixtures, spare parts and test systems delivered to our clients."
      />
      <GalleryGrid />
    </main>
  );
}
