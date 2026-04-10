import Link from "next/link";
import type { Comparison } from "@/data/comparisons";

type Props = Comparison;

export default function ComparisonPage({
  title,
  subtitle,
  sowellSummary,
  otherSummary,
  otherName,
  sowellArguments,
  otherArguments,
  agreements,
  disagreements,
  relatedBooks,
}: Props) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-4 md:px-8 pt-4 md:pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-xs text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>Compare &amp; Contrast</li>
          <li>/</li>
          <li className="text-foreground/70 truncate">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-card-border bg-card-bg/50">
        <div className="max-w-5xl mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-10 md:pb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
            Compare &amp; Contrast
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-foreground/50 text-base md:text-lg">{subtitle}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10 md:space-y-16">
        {/* Positions side by side */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">Core Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-accent/30 rounded-lg p-5 bg-accent/5">
              <h3 className="font-semibold text-accent mb-3">Thomas Sowell</h3>
              <p className="text-foreground/70 leading-relaxed">{sowellSummary}</p>
            </div>
            <div className="border border-sky-400/30 rounded-lg p-5 bg-sky-400/5">
              <h3 className="font-semibold text-sky-400 mb-3">{otherName}</h3>
              <p className="text-foreground/70 leading-relaxed">{otherSummary}</p>
            </div>
          </div>
        </section>

        {/* Key Arguments side by side */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">Key Arguments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Sowell argues</h3>
              <ul className="space-y-3">
                {sowellArguments.map((arg, i) => (
                  <li key={i} className="flex gap-2 border border-card-border rounded-lg p-3 bg-card-bg/50">
                    <span className="text-accent/40 font-bold shrink-0">{i + 1}</span>
                    <p className="text-sm text-foreground/70 leading-relaxed">{arg}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-3">{otherName} argues</h3>
              <ul className="space-y-3">
                {otherArguments.map((arg, i) => (
                  <li key={i} className="flex gap-2 border border-card-border rounded-lg p-3 bg-card-bg/50">
                    <span className="text-sky-400/40 font-bold shrink-0">{i + 1}</span>
                    <p className="text-sm text-foreground/70 leading-relaxed">{arg}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Areas of Agreement */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">Areas of Agreement</h2>
          <div className="space-y-3">
            {agreements.map((a, i) => (
              <div key={i} className="flex gap-3 border border-green-500/20 rounded-lg p-4 bg-green-500/5">
                <span className="text-green-400 shrink-0 mt-0.5">&#10003;</span>
                <p className="text-foreground/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Disagreement */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">Areas of Disagreement</h2>
          <div className="space-y-3">
            {disagreements.map((d, i) => (
              <div key={i} className="border border-card-border rounded-lg overflow-hidden">
                <div className="bg-accent/5 border-b border-card-border px-4 md:px-5 py-3">
                  <p className="text-sm">
                    <span className="text-accent font-semibold text-xs uppercase mr-2">Sowell</span>
                    <span className="text-foreground/70">{d.sowell}</span>
                  </p>
                </div>
                <div className="bg-sky-400/5 px-4 md:px-5 py-3">
                  <p className="text-sm">
                    <span className="text-sky-400 font-semibold text-xs uppercase mr-2">{otherName}</span>
                    <span className="text-foreground/70">{d.other}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Books */}
        {relatedBooks && relatedBooks.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">Related Reading</h2>
            <div className="flex flex-wrap gap-2">
              {relatedBooks.map((rb) => (
                <Link
                  key={rb.href}
                  href={rb.href}
                  className="text-sm px-3 py-2 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  {rb.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
