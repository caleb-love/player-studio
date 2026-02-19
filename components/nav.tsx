"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "What we do" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="container">
        <div className="nav">
          <Link className="brand" href="/" aria-label="Player Studio home" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true" />
            <span>player.studio</span>
          </Link>

          <nav className={`navlinks${open ? " navlinks--open" : ""}`} aria-label="Primary">
            {links.map((l) => {
              const isCurrent =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href + "/"));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>

          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`hamburger${open ? " hamburger--open" : ""}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
