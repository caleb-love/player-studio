import Image from "next/image";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/lib/work";
import { site } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="kicker">Creative studio</div>
          <h1>Make it playable.</h1>
          <p className="lede">{site.tagline}</p>

          <div className="actions">
            <Link className="btn primary" href="/work">
              See work <ArrowUpRightIcon />
            </Link>
            <Link className="btn" href="/contact">
              Start a chat <ArrowUpRightIcon />
            </Link>
          </div>

          <div className="hr" />

          <h2>Featured work</h2>
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
                    <span className="tag">{c.year}</span>
                    {c.sectors.slice(0, 2).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                    {c.services.slice(0, 2).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{c.client}</h3>
                  <p>{c.summary}</p>
                  <span className="small" style={{ marginTop: 4 }}>
                    View case study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>Signal, systems, shipping</h2>
              <p>
                You do not need more content. You need the right story, a repeatable design system,
                and a surface that earns trust fast.
              </p>
              <p>
                We work with founders and product teams at key moments: pre‑launch, re‑position,
                product pivots, and ecosystem growth.
              </p>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginBottom: 10 }}>Core lanes</h3>
              <ul>
                <li>Positioning, narrative, naming</li>
                <li>Brand identity and design systems</li>
                <li>Launch sites, docs, product surfaces</li>
                <li>Campaign kits for updates and releases</li>
              </ul>
              <div className="hr" />
              <p className="small" style={{ margin: 0 }}>
                Built for teams that ship weekly and still want polish.
              </p>
            </div>
          </div>

          <div className="hr" />

          <h2>How we work</h2>
          <div className="results" style={{ marginTop: 18 }}>
            <div className="result">
              <div className="k">Step 1</div>
              <div className="v">Cut the story</div>
              <p style={{ marginTop: 10 }}>
                A short sprint to lock positioning, proof points, and what we will not claim.
              </p>
            </div>
            <div className="result">
              <div className="k">Step 2</div>
              <div className="v">Design the system</div>
              <p style={{ marginTop: 10 }}>
                Identity, typography rules, and components that work in product and marketing.
              </p>
            </div>
            <div className="result">
              <div className="k">Step 3</div>
              <div className="v">Ship the surface</div>
              <p style={{ marginTop: 10 }}>
                Next.js build, motion templates, and a kit your team can run without us.
              </p>
            </div>
          </div>

          <div className="hr" />

          <div className="card" style={{ padding: 22 }}>
            <div className="split" style={{ alignItems: "center" }}>
              <div>
                <h2 style={{ marginBottom: 10 }}>Have something brewing?</h2>
                <p style={{ margin: 0 }}>
                  Bring the messy version. We will make it coherent and shippable.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link className="btn primary" href="/contact">
                  Start a chat <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
