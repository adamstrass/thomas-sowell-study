interface TopicPageProps {
  category: string;
  title: string;
  description: string;
  keyIdeas: string[];
  relevantWorks: string[];
  quote?: { text: string; source: string };
}

export default function TopicPage({
  category,
  title,
  description,
  keyIdeas,
  relevantWorks,
  quote,
}: TopicPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
        {category}
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-4">{title}</h1>
      <p className="text-foreground/60 leading-relaxed mb-10">{description}</p>

      {quote && (
        <blockquote className="border-l-2 border-accent/40 pl-5 mb-10">
          <p className="text-foreground/70 italic leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </p>
          <cite className="block text-sm text-muted mt-2 not-italic">
            &mdash; {quote.source}
          </cite>
        </blockquote>
      )}

      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
          Key Ideas
        </h2>
        <ul className="space-y-3">
          {keyIdeas.map((idea, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
            >
              <span className="text-accent/60 mt-0.5 shrink-0">&#x2022;</span>
              {idea}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
          Relevant Works
        </h2>
        <div className="flex flex-wrap gap-2">
          {relevantWorks.map((work) => (
            <span
              key={work}
              className="text-xs px-3 py-1.5 rounded-md bg-card-bg border border-card-border text-foreground/60"
            >
              {work}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
