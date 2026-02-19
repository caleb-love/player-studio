import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">404</div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>Page not found</h1>
        <p className="lede">That link does not exist. Try work or head back home.</p>
        <div className="actions" style={{ marginTop: 18 }}>
          <Link className="btn primary" href="/work">
            View work
          </Link>
          <Link className="btn" href="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
