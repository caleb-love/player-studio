import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata = {
  title: "Services",
  description:
    "Narrative, brand systems, and digital surfaces for crypto and AI teams that need clarity and momentum.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Services</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Strategic creative, built to ship.</h1>
        <p className="lede">
          We help internet-native teams land trust fast, then keep shipping without the brand
          collapsing under growth.
        </p>

        <div className="hr" />

        <div className="split">
          <div>
            <h2>What we do</h2>
            <p>
              Most teams do not have a design problem. They have a clarity problem. We work across
              story, system, and surface so the product reads the same in a deck, a landing page,
              and the UI.
            </p>

            <h3>Strategy</h3>
            <ul>
              <li>Positioning and message maps</li>
              <li>Naming support and tagline systems</li>
              <li>Proof frameworks (what you can claim, and what you cannot)</li>
            </ul>

            <h3 style={{ marginTop: 18 }}>Brand systems</h3>
            <ul>
              <li>Identity and typography rules</li>
              <li>Design tokens, components, and templates</li>
              <li>Motion principles for product updates and socials</li>
            </ul>

            <h3 style={{ marginTop: 18 }}>Digital</h3>
            <ul>
              <li>Next.js launch sites and product marketing surfaces</li>
              <li>Docs shells, changelog systems, and integration libraries</li>
              <li>Landing page systems for ecosystems and partner drops</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginBottom: 10 }}>Engagement shapes</h3>
            <ul>
              <li>
                <strong>Narrative sprint</strong>: 3 to 5 days, tight workshops, clear outputs.
              </li>
              <li>
                <strong>Brand system</strong>: 2 to 4 weeks, identity plus templates and rules.
              </li>
              <li>
                <strong>Launch surface</strong>: 3 to 6 weeks, design plus Next.js build.
              </li>
              <li>
                <strong>Drop support</strong>: 1 to 2 weeks, campaign kits for feature releases.
              </li>
            </ul>
            <div className="hr" />
            <p className="small" style={{ margin: 0 }}>
              Prefer a longer run? We can stay on for a light retainer once the system exists.
            </p>
          </div>
        </div>

        <div className="hr" />

        <h2>How we keep things from getting weird</h2>
        <div className="results" style={{ marginTop: 18 }}>
          <div className="result">
            <div className="k">Constraint</div>
            <div className="v">No borrowed aesthetics</div>
            <p style={{ marginTop: 10 }}>
              We do not copy whatever is trending on X this week. The system has to hold up next
              quarter.
            </p>
          </div>
          <div className="result">
            <div className="k">Discipline</div>
            <div className="v">Claim what you can prove</div>
            <p style={{ marginTop: 10 }}>
              If the product cannot back it, we do not put it on the website. Trust is fragile.
            </p>
          </div>
          <div className="result">
            <div className="k">Handoff</div>
            <div className="v">Make it runnable</div>
            <p style={{ marginTop: 10 }}>
              Templates, tokens, and docs so your team can ship updates without calling us every
              time.
            </p>
          </div>
        </div>

        <div className="hr" />

        <div className="card" style={{ padding: 22 }}>
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ marginBottom: 10 }}>Want to see fit fast?</h2>
              <p style={{ margin: 0 }}>
                Send a link to your product and a short note on what is not working. We will respond
                with a clear next step.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link className="btn primary" href="/contact">
                Contact <ArrowUpRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
