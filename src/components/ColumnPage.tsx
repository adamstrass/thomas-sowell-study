import Link from "next/link";
import Quiz from "./Quiz";
import type { ColumnTopic } from "@/data/columns";

type ColumnPageProps = ColumnTopic;

export default function ColumnPage({
  title,
  summary,
  keyArguments,
  caseStudies,
  myths,
  quotes,
  relatedBooks,
  discussionQuestions,
  counterarguments,
  quiz,
}: ColumnPageProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-8 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-xs text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>Column Topics</li>
          <li>/</li>
          <li className="text-foreground/70">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-card-border bg-card-bg/50">
        <div className="max-w-4xl mx-auto px-8 pt-10 pb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
            Column Topics
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-foreground/70 leading-relaxed max-w-3xl text-lg">
            {summary}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-16">
        {/* Key Arguments */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Key Arguments
          </h2>
          <ul className="space-y-3">
            {keyArguments.map((arg, i) => (
              <li
                key={i}
                className="flex gap-3 border border-card-border rounded-lg p-4 bg-card-bg/50"
              >
                <span className="text-accent/40 font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-foreground/70 leading-relaxed">
                  {arg}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Case Studies */}
        {caseStudies && caseStudies.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Real-World Examples &amp; Case Studies
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="border border-card-border rounded-lg p-5 bg-card-bg"
                >
                  <h3 className="font-semibold text-accent mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {cs.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Common Myths vs Reality */}
        {myths && myths.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Common Myths vs. Reality
            </h2>
            <div className="space-y-4">
              {myths.map((m, i) => (
                <div
                  key={i}
                  className="border border-card-border rounded-lg overflow-hidden"
                >
                  <div className="bg-red-500/5 border-b border-card-border px-5 py-3">
                    <p>
                      <span className="text-red-400 font-semibold text-xs uppercase mr-2">
                        Myth
                      </span>
                      <span className="text-foreground/70">{m.myth}</span>
                    </p>
                  </div>
                  <div className="bg-green-500/5 px-5 py-3">
                    <p>
                      <span className="text-green-400 font-semibold text-xs uppercase mr-2">
                        Reality
                      </span>
                      <span className="text-foreground/70">{m.reality}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Quotes */}
        {quotes && quotes.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Key Quotes
            </h2>
            <div className="space-y-4">
              {quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent/40 pl-5"
                >
                  <p className="text-foreground/60 italic leading-relaxed">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  {q.source && (
                    <cite className="block text-sm text-muted mt-1.5 not-italic">
                      &mdash; {q.source}
                    </cite>
                  )}
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {/* Counterarguments Addressed */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Counterarguments Addressed
          </h2>
          <div className="space-y-4">
            {counterarguments.map((ca, i) => (
              <div
                key={i}
                className="border border-card-border rounded-lg p-5 bg-card-bg"
              >
                <p className="text-foreground/60 leading-relaxed">
                  {ca}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Books */}
        {relatedBooks && relatedBooks.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Related Books
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedBooks.map((rb) => (
                <Link
                  key={rb.href}
                  href={rb.href}
                  className="text-sm px-3 py-1.5 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  {rb.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Think About It */}
        {discussionQuestions && discussionQuestions.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Think About It
            </h2>
            <ul className="space-y-3">
              {discussionQuestions.map((dq, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-foreground/60 leading-relaxed"
                >
                  <span className="text-accent/50 shrink-0 font-bold">?</span>
                  {dq}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Quiz */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Test Your Knowledge
          </h2>
          <div className="border border-card-border rounded-lg p-6 bg-card-bg">
            <Quiz questions={quiz} />
          </div>
        </section>
      </div>
    </div>
  );
}
