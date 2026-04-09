import Link from "next/link";
import Quiz from "./Quiz";
import ChapterList from "./ChapterList";
import type { BookData } from "@/data/books";
import { getCategoryColor } from "@/data/categoryColors";

type BookPageProps = BookData;

export default function BookPage({
  bookId,
  category,
  title,
  subtitle,
  year,
  summary,
  concepts,
  chapters,
  quote,
  quiz,
  prev,
  next,
}: BookPageProps) {
  const color = getCategoryColor(category);

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
          <li className={color.text}>{category}</li>
          <li>/</li>
          <li className="text-foreground/70">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-card-border bg-card-bg/50">
        <div className="max-w-4xl mx-auto px-8 pt-10 pb-16">
          <p className={`${color.text} text-sm font-medium uppercase tracking-wider mb-3`}>
            {category} &middot; {year}
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
          {subtitle && (
            <p className="text-xl text-foreground/50 mb-6">{subtitle}</p>
          )}
          <p className="text-foreground/70 leading-relaxed max-w-3xl text-lg mb-8">
            {summary}
          </p>

          {quote && (
            <blockquote className={`border-l-2 ${color.border} pl-6 max-w-2xl mb-8`}>
              <p className="text-foreground/60 italic leading-relaxed text-base">
                &ldquo;{quote.text}&rdquo;
              </p>
              <cite className="block text-sm text-muted mt-2 not-italic">
                &mdash; {quote.source}
              </cite>
            </blockquote>
          )}

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-16">
        {/* Key Concepts */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Key Concepts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {concepts.map((concept) => (
              <div
                key={concept.title}
                className="border border-card-border rounded-lg p-5 bg-card-bg hover:border-accent/30 transition-colors"
              >
                <h3 className={`font-semibold ${color.text} mb-2`}>
                  {concept.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapters */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Chapter Breakdown
          </h2>
          <ChapterList bookId={bookId} chapters={chapters} />
        </section>

        {/* Quiz */}
        {quiz && quiz.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Test Your Knowledge
            </h2>
            <div className="border border-card-border rounded-lg p-6 bg-card-bg">
              <Quiz questions={quiz} />
            </div>
          </section>
        )}

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="flex items-stretch gap-4 border-t border-card-border pt-10">
            {prev ? (
              <Link
                href={prev.href}
                className="flex-1 group border border-card-border rounded-lg p-5 bg-card-bg hover:border-accent/40 transition-colors"
              >
                <span className="text-xs text-muted">&larr; Previous</span>
                <p className="font-medium mt-1 group-hover:text-accent transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={next.href}
                className="flex-1 group border border-card-border rounded-lg p-5 bg-card-bg hover:border-accent/40 transition-colors text-right"
              >
                <span className="text-xs text-muted">Next &rarr;</span>
                <p className="font-medium mt-1 group-hover:text-accent transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
