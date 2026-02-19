import { caseStudies, getAllSectors, getAllServices } from "@/lib/work";
import { WorkGrid } from "@/components/work-grid";

export const metadata = {
  title: "Work",
  description:
    "Selected work across brand, digital, product surfaces, and launch systems for internet-native teams.",
};

export default function WorkPage() {
  const sectors = getAllSectors();
  const services = getAllServices();

  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Work</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Proof, not posturing.</h1>
        <p className="lede">
          Twelve projects across crypto, AI, and adjacent teams. Built to ship, built to scale.
        </p>

        <div className="hr" />

        <WorkGrid items={caseStudies} sectors={sectors} services={services} />
      </div>
    </section>
  );
}
