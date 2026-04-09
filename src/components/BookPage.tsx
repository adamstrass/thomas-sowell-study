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
      <nav className="max-w-4xl mx-auto px-4 md:px-8 pt-4 md:pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-xs text-muted overflow-x-auto">
          <li className="shrink-0">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li className="shrink-0">/</li>
          <li className={`${color.text} shrink-0`}>{category}</li>
          <li className="shrink-0">/</li>
          <li className="text-foreground/70 truncate">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-card-border bg-card-bg/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-10 md:pb-16">
          <p className={`${color.text} text-sm font-medium uppercase tracking-wider mb-3`}>
            {category} &middot; {year}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-foreground/50 mb-4 md:mb-6">{subtitle}</p>
          )}
          <p className="text-foreground/70 leading-relaxed max-w-3xl text-base md:text-lg mb-6 md:mb-8">
            {summary}
          </p>

          {quote && (
            <blockquote className={`border-l-2 ${color.border} pl-4 md:pl-6 max-w-2xl mb-6 md:mb-8`}>
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

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10 md:space-y-16">
        {/* Key Concepts */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-4 md:mb-6">
            Key Concepts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {concepts.map((concept) => (
              <div
                key={concept.title}
                className="border border-card-border rounded-lg p-4 md:p-5 bg-card-bg hover:border-accent/30 transition-colors"
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
          <h2 className="text-lg font-semibold tracking-tight mb-4 md:mb-6">
            Chapter Breakdown
          </h2>
          <ChapterList bookId={bookId} chapters={chapters} />
        </section>

        {/* Quiz */}
        {quiz && quiz.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight mb-4 md:mb-6">
              Test Your Knowledge
            </h2>
            <div className="border border-card-border rounded-lg p-4 md:p-6 bg-card-bg">
              <Quiz questions={quiz} />
            </div>
          </section>
        )}

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="flex flex-col sm:flex-row items-stretch gap-3 md:gap-4 border-t border-card-border pt-8 md:pt-10">
            {prev ? (
              <Link
                href={prev.href}
                className="flex-1 group border border-card-border rounded-lg p-4 md:p-5 bg-card-bg hover:border-accent/40 transition-colors"
              >
                <span className="text-xs text-muted">&larr; Previous</span>
                <p className="font-medium mt-1 group-hover:text-accent transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}
            {next ? (
              <Link
                href={next.href}
                className="flex-1 group border border-card-border rounded-lg p-4 md:p-5 bg-card-bg hover:border-accent/40 transition-colors sm:text-right"
              >
                <span className="text-xs text-muted">Next &rarr;</span>
                <p className="font-medium mt-1 group-hover:text-accent transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
