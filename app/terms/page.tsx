import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms",
  description: "Terms of use for player.studio.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Policy</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Terms of use</h1>
        <p className="lede">
          These terms apply to the player.studio website. If you do not agree, do not use the site.
        </p>

        <div className="hr" />

        <p className="small">Last updated: 19 February 2026</p>

        <h2>Use of the site</h2>
        <p>
          You may browse the site for personal or internal business use. You must not attempt to
          disrupt the site, scrape it in ways that degrade performance, or use it for unlawful
          activity.
        </p>

        <div className="hr" />

        <h2>Intellectual property</h2>
        <p>
          Unless stated otherwise, all content on this site is owned by {site.name} or used with
          permission. You may not reproduce or redistribute it without written permission.
        </p>

        <div className="hr" />

        <h2>Case studies</h2>
        <p>
          Case studies describe project work and outcomes. Specific results depend on product,
          market, timing, and execution. Do not treat case study metrics as guarantees.
        </p>

        <div className="hr" />

        <h2>Links to other sites</h2>
        <p>
          This site may link to third-party sites. We do not control those sites and are not
          responsible for their content or policies.
        </p>

        <div className="hr" />

        <h2>Availability</h2>
        <p>
          We aim to keep the site available, but we do not promise uninterrupted access. We may
          change or remove parts of the site at any time.
        </p>

        <div className="hr" />

        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, {site.name} is not liable for any loss arising from your
          use of this site.
        </p>

        <div className="hr" />

        <h2>Contact</h2>
        <p style={{ marginBottom: 0 }}>
          Questions about these terms? Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or visit{" "}
          <Link href="/contact" style={{ textDecoration: "underline" }}>
            contact
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
