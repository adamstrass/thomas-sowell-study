import Link from "next/link";
import { comparisons } from "@/data/comparisons";

export default function ComparePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <section className="mb-8 md:mb-10">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
          Study Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Compare &amp; Contrast
        </h1>
        <p className="text-foreground/50">
          How Sowell&apos;s ideas compare with other major thinkers on the same
          topics. Side-by-side arguments, agreements, and disagreements.
        </p>
      </section>

      <div className="grid gap-4">
        {comparisons.map((c) => (
          <Link
            key={c.id}
            href={`/compare/${c.id}`}
            className="group border border-card-border rounded-lg p-5 md:p-6 bg-card-bg hover:border-accent/40 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
              {c.title}
            </h2>
            <p className="text-sm text-foreground/50 leading-relaxed mb-3">
              {c.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-accent/10 text-accent">
                {c.sowellArguments.length} Sowell arguments
              </span>
              <span className="px-2 py-1 rounded bg-sky-400/10 text-sky-400">
                {c.otherArguments.length} {c.otherName} arguments
              </span>
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-400">
                {c.agreements.length} agreements
              </span>
              <span className="px-2 py-1 rounded bg-red-500/10 text-red-400">
                {c.disagreements.length} disagreements
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
