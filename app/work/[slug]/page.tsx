import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/work";
import { ArrowUpRightIcon } from "@/components/icons";

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
        <div className="kicker">Case study</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>{cs.client}</h1>
        <p className="lede">{cs.headline}</p>

        <div className="case-hero">
          <div className="meta" style={{ marginTop: 8 }}>
            <span>{cs.year}</span>
            {cs.sectors.map((s) => (
              <span key={s}>{s}</span>
            ))}
            {cs.services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          <div className="card" style={{ borderColor: "color-mix(in oklab, var(--border) 70%, transparent)" }}>
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
            <h2>Context</h2>
            {cs.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2 style={{ marginTop: 28 }}>The brief</h2>
            <p>{cs.brief}</p>

            <h2 style={{ marginTop: 28 }}>Approach</h2>
            <ul>
              {cs.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
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

              <h3 style={{ marginBottom: 10 }}>Notes</h3>
              <ul>
                {cs.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
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

        <h2>Selected outputs</h2>
        <div className="case-images" style={{ marginTop: 16 }}>
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

        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <h2 style={{ marginBottom: 10 }}>Next up</h2>
            <p style={{ margin: 0 }}>
              Keep scanning. Every project has different constraints, and we like it that way.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href={`/work/${nextA.slug}`}>
              {nextA.client} <ArrowUpRightIcon />
            </Link>
            <Link className="btn" href={`/work/${nextB.slug}`}>
              {nextB.client} <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
