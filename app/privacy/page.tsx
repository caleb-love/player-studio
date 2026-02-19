import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for player.studio.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Policy</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Privacy</h1>
        <p className="lede">
          Plain language. Minimal data. No weird stuff. If something changes, we will update this
          page.
        </p>

        <div className="hr" />

        <p className="small">Last updated: 19 February 2026</p>

        <h2>What we collect</h2>
        <p>
          We collect the information you choose to share with us. That usually includes:
        </p>
        <ul>
          <li>
            <strong>Newsletter</strong>: your email address if you join the list.
          </li>
          <li>
            <strong>Email enquiries</strong>: whatever you put in an email to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
          <li>
            <strong>Basic usage data</strong>: standard server logs (for example, request time and
            user agent) used to keep the site reliable and secure.
          </li>
        </ul>

        <div className="hr" />

        <h2>How we use information</h2>
        <ul>
          <li>To reply to enquiries and coordinate projects.</li>
          <li>To send newsletters if you opted in.</li>
          <li>To maintain the site and improve performance.</li>
        </ul>

        <div className="hr" />

        <h2>Newsletter processing</h2>
        <p>
          If you join the newsletter, your email address is processed by Loops (our email platform)
          so we can send updates. You can unsubscribe at any time using the unsubscribe link in an
          email.
        </p>

        <div className="hr" />

        <h2>Cookies</h2>
        <p>
          We aim to keep cookies to a minimum. If we add analytics or tracking in the future, we
          will update this policy and describe what is collected and why.
        </p>

        <div className="hr" />

        <h2>Your choices</h2>
        <ul>
          <li>You can unsubscribe from the newsletter at any time.</li>
          <li>
            You can request deletion of your enquiry emails by contacting{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
        </ul>

        <div className="hr" />

        <h2>Contact</h2>
        <p style={{ marginBottom: 0 }}>
          Questions about privacy? Email{" "}
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
