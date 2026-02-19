import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { WorldClocks } from "@/components/world-clocks";

export const metadata = {
  title: "Contact",
  description: "Email, timezone context, and the fastest way to start a project with Player Studio.",
};

function mailtoProject() {
  const subject = encodeURIComponent("Project enquiry");
  const body = encodeURIComponent(
    [
      "Hi Player Studio,",
      "",
      "A quick snapshot:",
      "- Company / product:",
      "- What you are building:",
      "- What is not working right now:",
      "- Timeline (and any immovable dates):",
      "- Rough budget band:",
      "- Links (site, app, deck, docs):",
      "",
      "Best,",
    ].join("\n")
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Contact</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Start with a conversation.</h1>
        <p className="lede">
          The fastest way to figure out fit is to talk through constraints. Send a short note, or
          jump straight to an intro call.
        </p>

        <div className="actions" style={{ marginTop: 18 }}>
          <a className="btn primary" href={mailtoProject()}>
            Email project details <ArrowUpRightIcon />
          </a>
          <a className="btn" href={site.bookingHref}>
            {site.bookingLabel} <ArrowUpRightIcon />
          </a>
        </div>

        <div className="hr" />

        <div className="split">
          <div>
            <h2>What helps us respond fast</h2>
            <ul>
              <li>A link to the product, docs, or deck (even if it is rough)</li>
              <li>What you are trying to change: trust, conversion, adoption, retention</li>
              <li>Any fixed dates (fundraise, mainnet, conference, partner drop)</li>
              <li>Your internal constraints: bandwidth, approvals, brand debt</li>
            </ul>

            <div className="hr" />

            <h2>Email</h2>
            <p style={{ marginBottom: 10 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <p className="small" style={{ margin: 0 }}>
              If you prefer async: include context, links, and a budget band. We will reply with a
              next step.
            </p>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <WorldClocks />
            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ marginBottom: 10 }}>Project fit</h3>
              <ul>
                <li>Minimum engagement: 3 weeks</li>
                <li>Best for: launches, re‑positioning, design systems, product surfaces</li>
                <li>Not great for: endless rounds of stakeholder theatre</li>
              </ul>
              <div className="hr" />
              <p className="small" style={{ margin: 0 }}>
                Want to browse first? See{" "}
                <Link href="/work" style={{ textDecoration: "underline" }}>
                  work
                </Link>{" "}
                and{" "}
                <Link href="/services" style={{ textDecoration: "underline" }}>
                  services
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
