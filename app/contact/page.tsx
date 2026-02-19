import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { WorldClocks } from "@/components/world-clocks";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Player Studio. Timezone context, email, and the fastest way to start a project.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>
          It&rsquo;s always easier
          <br />
          to chat.
        </h1>

        <h3 style={{ marginTop: 28 }}>Let&rsquo;s talk</h3>

        <p>
          <a href={`mailto:${site.email}`} style={{ fontSize: 20 }}>
            {site.email}
          </a>
        </p>

        <div className="actions" style={{ marginTop: 8 }}>
          <a className="btn primary" href={site.bookingHref}>
            {site.bookingLabel} <ArrowUpRightIcon />
          </a>
        </div>

        <div className="hr" />

        <div className="split">
          <div>
            <WorldClocks />
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ marginBottom: 10 }}>What helps us respond fast</h3>
              <ul>
                <li>A link to the product, docs, or deck (even rough is fine)</li>
                <li>What you&rsquo;re trying to change: trust, conversion, adoption, retention</li>
                <li>Any fixed dates: fundraise, launch, conference, partner announcement</li>
                <li>Your internal constraints: bandwidth, approvals, brand debt</li>
              </ul>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ marginBottom: 10 }}>Project fit</h3>
              <ul>
                <li>Minimum engagement: 3 weeks</li>
                <li>Best for: launches, repositioning, design systems, product surfaces</li>
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
