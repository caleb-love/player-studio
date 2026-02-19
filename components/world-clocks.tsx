"use client";

import { useEffect, useMemo, useState } from "react";

type Clock = { label: string; timeZone: string };

const clocks: Clock[] = [
  { label: "Sydney", timeZone: "Australia/Sydney" },
  { label: "San Francisco", timeZone: "America/Los_Angeles" },
  { label: "Singapore", timeZone: "Asia/Singapore" },
];

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(date);
}

function formatDay(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-AU", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    timeZone,
  }).format(date);
}

export function WorldClocks() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const rows = useMemo(() => {
    return clocks.map((c) => ({
      ...c,
      t: formatTime(now, c.timeZone),
      d: formatDay(now, c.timeZone),
    }));
  }, [now]);

  return (
    <div className="card" style={{ padding: 16 }}>
      <h3 style={{ marginBottom: 10 }}>Timezones</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {rows.map((r) => (
          <div
            key={r.timeZone}
            style={{
              padding: 12,
              border: "1px solid var(--border)",
              borderRadius: 16,
              background: "var(--surface)",
            }}
          >
            <div className="small" style={{ marginBottom: 4 }}>
              {r.label}
            </div>
            <div style={{ fontSize: 20, letterSpacing: "-0.02em" }}>{r.t}</div>
            <div className="small">{r.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
