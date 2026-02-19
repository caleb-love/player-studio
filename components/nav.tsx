"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="container">
        <div className="nav">
          <Link className="brand" href="/" aria-label="Player Studio home">
            <span className="brand-mark" aria-hidden="true" />
            <span>player.studio</span>
          </Link>

          <nav className="navlinks" aria-label="Primary">
            {links.map((l) => {
              const isCurrent =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href + "/"));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
