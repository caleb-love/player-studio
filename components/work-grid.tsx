"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseStudy } from "@/lib/work";

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function WorkGrid({
  items,
  sectors,
  services,
}: {
  items: CaseStudy[];
  sectors: string[];
  services: string[];
}) {
  const [selSectors, setSelSectors] = useState<string[]>([]);
  const [selServices, setSelServices] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const sectorOk =
        selSectors.length === 0 || i.sectors.some((s) => selSectors.includes(s));
      const serviceOk =
        selServices.length === 0 || i.services.some((s) => selServices.includes(s));
      return sectorOk && serviceOk;
    });
  }, [items, selSectors, selServices]);

  return (
    <div>
      <div>
        <p className="small" style={{ marginBottom: 10 }}>
          Filter by sector
        </p>
        <div className="filters" role="toolbar" aria-label="Filter by sector">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              className="chip"
              aria-pressed={selSectors.includes(s)}
              onClick={() => setSelSectors((prev) => toggle(prev, s))}
            >
              {s}
            </button>
          ))}
          {selSectors.length > 0 ? (
            <button
              type="button"
              className="chip"
              aria-pressed="false"
              onClick={() => setSelSectors([])}
            >
              Clear sectors
            </button>
          ) : null}
        </div>

        <p className="small" style={{ margin: "18px 0 10px" }}>
          Filter by service
        </p>
        <div className="filters" role="toolbar" aria-label="Filter by service">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              className="chip"
              aria-pressed={selServices.includes(s)}
              onClick={() => setSelServices((prev) => toggle(prev, s))}
            >
              {s}
            </button>
          ))}
          {selServices.length > 0 ? (
            <button
              type="button"
              className="chip"
              aria-pressed="false"
              onClick={() => setSelServices([])}
            >
              Clear services
            </button>
          ) : null}
        </div>
      </div>

      <div className="work-grid" style={{ marginTop: 22 }}>
        {filtered.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="card work-card">
            <div className="thumb">
              <Image
                src={`/work/${c.slug}/thumb.png`}
                alt={`${c.client} thumbnail`}
                width={900}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

      {filtered.length === 0 ? (
        <p style={{ marginTop: 22 }}>No matches. Try clearing filters.</p>
      ) : null}
    </div>
  );
}
