import Image from "next/image";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/lib/work";
import { site } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            Brands with
            <br />
            clarity.
          </h1>
          <p className="lede">{site.tagline}</p>

          <div className="actions">
            <Link className="btn primary" href="/work">
              See some work <ArrowUpRightIcon />
            </Link>
            <Link className="btn" href="/contact">
              Start a chat <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Work</h2>
          <div className="work-grid" style={{ marginTop: 18 }}>
            {featured.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="card work-card">
                <div className="thumb">
                  <Image
                    src={`/work/${c.slug}/thumb.png`}
                    alt={`${c.client} thumbnail`}
                    width={900}
                    height={600}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="body">
                  <div className="tags" aria-label="Tags">
                    {c.services.slice(0, 2).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{c.client}</h3>
                  <p>{c.summary}</p>
                  <span className="small" style={{ marginTop: 4 }}>
                    Check it
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="triptych">
            <div className="triptych-item">
              <h3>Defined.</h3>
              <p>
                All work begins from clarity. We help brands articulate who they are and what they
                stand for, so decisions are made with intent rather than instinct.
              </p>
            </div>
            <div className="triptych-item">
              <h3>Designed.</h3>
              <p>
                Every touchpoint is considered beyond the first impression, built for the lifetime of
                the brand. Systems that earn trust early and maintain it over time.
              </p>
            </div>
            <div className="triptych-item">
              <h3>Shipped.</h3>
              <p>
                Strategy without execution is a PDF. We build the surfaces, templates, and systems
                your team needs to keep moving without calling us every time.
              </p>
            </div>
          </div>

          <div className="hr" />

          <p style={{ maxWidth: "64ch" }}>
            We work with technology brands to build substance and character. This is where strategy
            and creative meet — not as separate disciplines, but as a single way of thinking that
            gives direction, coherence, and commercial strength to everything that follows.
          </p>
          <Link className="btn" href="/services" style={{ marginTop: 8 }}>
            What we do <ArrowUpRightIcon />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What our clients say</h2>
          <div style={{ marginTop: 18 }}>
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <div className="split" style={{ alignItems: "center" }}>
              <div>
                <h2 style={{ marginBottom: 10 }}>Become a brand with character.</h2>
                <p style={{ margin: 0 }}>
                  For those who want to stand for something, and be recognised for it.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link className="btn primary" href="/contact">
                  Book a call <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
