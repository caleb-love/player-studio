import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 style={{ marginBottom: 8 }}>Join the signal</h3>
            <p style={{ marginBottom: 12 }}>
              Project notes, teardown snippets, and the occasional template. No drip campaigns.
            </p>
            <NewsletterForm />
            <p className="small" style={{ marginTop: 10 }}>
              By subscribing, you agree to receive email from {site.name}. You can unsubscribe any
              time.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: 8 }}>Quick links</h3>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="hr" />

            <h3 style={{ marginBottom: 8 }}>Policies</h3>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>

            <div className="hr" />

            <p className="small" style={{ margin: 0 }}>
              © {new Date().getFullYear()} {site.name}. Built in Next.js.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
