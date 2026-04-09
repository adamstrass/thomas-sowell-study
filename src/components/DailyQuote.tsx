import { quotes } from "@/data/quotes";

function getQuoteOfTheDay() {
  // Deterministic "random" based on date — changes daily
  const now = new Date();
  const dayIndex =
    now.getFullYear() * 366 + (now.getMonth() + 1) * 31 + now.getDate();
  return quotes[dayIndex % quotes.length];
}

export default function DailyQuote() {
  const quote = getQuoteOfTheDay();

  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight mb-4">
        Daily Sowell Quote
      </h2>
      <blockquote className="border-l-2 border-accent/40 pl-5">
        <p className="text-foreground/70 italic leading-relaxed">
          &ldquo;{quote.text}&rdquo;
        </p>
        <cite className="block text-sm text-muted mt-2 not-italic">
          &mdash; Thomas Sowell, {quote.source}
        </cite>
      </blockquote>
    </section>
  );
}
