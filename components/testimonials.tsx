import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <div className="testimonial-grid">
      {testimonials.map((t) => (
        <div key={t.name} className="testimonial-card">
          <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
          <div className="testimonial-attribution">
            <span className="testimonial-avatar" aria-hidden="true">
              {t.initials}
            </span>
            <div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">
                {t.role}, {t.company}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
