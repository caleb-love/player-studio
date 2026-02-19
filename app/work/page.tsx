import { caseStudies, getAllSectors, getAllServices } from "@/lib/work";
import { WorkGrid } from "@/components/work-grid";

export const metadata = {
  title: "Work",
  description:
    "Selected work across brand, digital, and campaign for technology brands.",
};

export default function WorkPage() {
  const sectors = getAllSectors();
  const services = getAllServices();

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Work</h1>
        <p className="lede">
          Projects that show how our thinking translates into real outcomes across brand, digital,
          and campaign.
        </p>

        <div className="hr" />

        <WorkGrid items={caseStudies} sectors={sectors} services={services} />
      </div>
    </section>
  );
}
