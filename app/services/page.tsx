import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata = {
  title: "Services",
  description:
    "Brand, digital, and campaign services for technology brands that need clarity and momentum.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>
          Strategic creative
          <br />
          in key moments.
        </h1>
        <p className="lede">
          We exist to help technology brands make confident decisions when it matters most. It could
          be a brand being defined, a product taking shape, or a new offering moving toward market.
          In those moments, instinct alone isn&rsquo;t enough.
        </p>
        <p className="lede">
          This is where strategy and creative meet &mdash; not as separate disciplines, but as a
          single way of thinking that gives direction, coherence, and commercial strength to the work
          that follows.
        </p>

        <div className="hr" />

        <div className="service-pillars">
          <div className="service-pillar">
            <div className="service-pillar-header">Brand</div>
            <h2>Who you are</h2>
            <h3>Defining what you stand for</h3>
            <p>
              As something new takes shape, the business changes, or things have drifted and no one
              is quite sure when or why. This is the work that defines what you stand for and ensures
              your audience understands it the same way you do.
            </p>
            <ul>
              <li>Positioning, narrative, and naming</li>
              <li>Identity systems and typography rules</li>
              <li>Design tokens, components, and templates</li>
              <li>Motion principles for product and social</li>
            </ul>
          </div>

          <div className="service-pillar">
            <div className="service-pillar-header">Digital</div>
            <h2>Where you&rsquo;re seen</h2>
            <h3>Every digital touchpoint, considered</h3>
            <p>
              Before anything is explained, people decide whether they trust what they&rsquo;re
              seeing. That trust is built through a considered experience, carried consistently across
              every digital surface.
            </p>
            <ul>
              <li>Launch sites and product marketing surfaces</li>
              <li>Documentation shells and changelog systems</li>
              <li>Landing page systems for ecosystems and partners</li>
              <li>Product UI alignment with marketing</li>
            </ul>
          </div>

          <div className="service-pillar">
            <div className="service-pillar-header">Campaign</div>
            <h2>How you&rsquo;re discovered</h2>
            <h3>Getting in front of the people who matter</h3>
            <p>
              The final piece needed to deliberately get in front of the right audience. Ensuring
              your brand and products are in the right places, at the right time, so the right people
              engage.
            </p>
            <ul>
              <li>Launch sequences across social and email</li>
              <li>Partner announcement and co-marketing kits</li>
              <li>Feature update cadences and templates</li>
              <li>Event collateral and developer activations</li>
            </ul>
          </div>
        </div>

        <div className="hr" />

        <div className="split">
          <div>
            <h2>Engagement shapes</h2>
            <p>
              We work in focused sprints, not open-ended retainers. Every engagement has a clear
              scope, timeline, and set of deliverables.
            </p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <ul>
              <li>
                <strong>Narrative sprint</strong>: 3 to 5 days. Tight workshops, clear outputs.
              </li>
              <li>
                <strong>Brand system</strong>: 2 to 4 weeks. Identity plus templates and rules.
              </li>
              <li>
                <strong>Launch surface</strong>: 3 to 6 weeks. Design plus build.
              </li>
              <li>
                <strong>Drop support</strong>: 1 to 2 weeks. Campaign kits for feature releases.
              </li>
            </ul>
            <div className="hr" />
            <p className="small" style={{ margin: 0 }}>
              Prefer a longer run? We stay on for a light retainer once the system exists.
            </p>
          </div>
        </div>

        <div className="hr" />

        <h2>A closer look at the work</h2>
        <p>
          Projects that show how our thinking translates into real outcomes across brand, digital,
          and campaign.
        </p>
        <Link className="btn" href="/work" style={{ marginTop: 4 }}>
          See work <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
}
