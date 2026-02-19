import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/work";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: cs.client,
    description: cs.summary,
    openGraph: {
      title: `${cs.client} | Player Studio`,
      description: cs.summary,
      images: [{ url: cs.images[0]?.src || "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const nextA = caseStudies[(idx + 1) % caseStudies.length];
  const nextB = caseStudies[(idx + 2) % caseStudies.length];

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>{cs.client}</h1>

        <div className="case-hero">
          <div className="meta" style={{ marginTop: 8 }}>
            {cs.services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          <div
            className="card"
            style={{ borderColor: "color-mix(in oklab, var(--border) 70%, transparent)" }}
          >
            <Image
              src={cs.images[0].src}
              alt={cs.images[0].alt}
              width={1600}
              height={1000}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>

        <div className="hr" />

        <div className="split">
          <div>
            <h2>Overview</h2>
            {cs.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div>
            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginBottom: 10 }}>What we shipped</h3>
              <ul>
                {cs.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="hr" />

              <h3 style={{ marginBottom: 10 }}>Credits</h3>
              <ul>
                {cs.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hr" />

        <h2>Key Insight</h2>
        <p style={{ maxWidth: "64ch", fontSize: 18 }}>{cs.keyInsight}</p>

        <div className="hr" />

        <h2>Concept Overview</h2>
        {cs.concept.map((p) => (
          <p key={p} style={{ maxWidth: "64ch" }}>
            {p}
          </p>
        ))}

        <div className="case-images" style={{ marginTop: 28 }}>
          {cs.images.slice(1).map((img) => (
            <figure key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1600}
                height={1000}
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="hr" />

        <h2>Impact</h2>
        <div className="results" style={{ marginTop: 16 }}>
          {cs.results.map((r) => (
            <div key={r.label} className="result">
              <div className="k">{r.label}</div>
              <div className="v">{r.value}</div>
            </div>
          ))}
        </div>

        <div className="hr" />

        <h2>More</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="card work-card" href={`/work/${nextA.slug}`} style={{ flex: 1, minWidth: 260 }}>
            <div className="thumb">
              <Image
                src={`/work/${nextA.slug}/thumb.png`}
                alt={`${nextA.client} thumbnail`}
                width={900}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="body">
              <div className="tags" aria-label="Tags">
                {nextA.services.slice(0, 2).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <h3>{nextA.client}</h3>
            </div>
          </Link>
          <Link className="card work-card" href={`/work/${nextB.slug}`} style={{ flex: 1, minWidth: 260 }}>
            <div className="thumb">
              <Image
                src={`/work/${nextB.slug}/thumb.png`}
                alt={`${nextB.client} thumbnail`}
                width={900}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="body">
              <div className="tags" aria-label="Tags">
                {nextB.services.slice(0, 2).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <h3>{nextB.client}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
