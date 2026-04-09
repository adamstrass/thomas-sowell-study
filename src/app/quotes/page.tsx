"use client";

import { useState, useMemo } from "react";
import { quotes, quoteThemes, type Quote } from "@/data/quotes";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 px-3 py-1.5 rounded-md text-xs font-medium border border-card-border text-muted hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function QuotesPage() {
  const [activeTheme, setActiveTheme] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  const filtered = useMemo(() => {
    let result = quotes;
    if (activeTheme !== "All") {
      result = result.filter((q) => q.theme === activeTheme);
    }
    if (search.length >= 2) {
      const lower = search.toLowerCase();
      result = result.filter(
        (q) =>
          q.text.toLowerCase().includes(lower) ||
          q.source.toLowerCase().includes(lower)
      );
    }
    return result;
  }, [activeTheme, search]);

  function handleRandom() {
    const pool = activeTheme === "All" ? quotes : quotes.filter((q) => q.theme === activeTheme);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setRandomQuote(pick);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <section className="mb-8 md:mb-10">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
          Study Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Quotes Library
        </h1>
        <p className="text-foreground/50">
          {quotes.length} quotes from Thomas Sowell, organised by theme.
        </p>
      </section>

      {/* Search + Random */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search quotes..."
          className="flex-1 px-4 py-2.5 rounded-lg bg-card-bg border border-card-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
        />
        <button
          onClick={handleRandom}
          className="px-5 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-dim transition-colors cursor-pointer shrink-0"
        >
          Random Quote
        </button>
      </div>

      {/* Theme filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {quoteThemes.map((theme) => (
          <button
            key={theme}
            onClick={() => { setActiveTheme(theme); setRandomQuote(null); }}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
              activeTheme === theme
                ? "bg-accent/10 text-accent font-medium"
                : "text-foreground/50 hover:text-foreground hover:bg-card-bg"
            }`}
          >
            {theme}
            {theme !== "All" && (
              <span className="text-muted text-xs ml-1">
                ({quotes.filter((q) => q.theme === theme).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Random Quote highlight */}
      {randomQuote && (
        <div className="border-2 border-accent/30 rounded-lg p-5 md:p-6 bg-accent/5 mb-8">
          <p className="text-xs text-accent uppercase tracking-wider font-semibold mb-3">
            Random Quote
          </p>
          <blockquote>
            <p className="text-foreground/80 italic leading-relaxed text-lg mb-3">
              &ldquo;{randomQuote.text}&rdquo;
            </p>
            <div className="flex items-center justify-between gap-3">
              <cite className="text-sm text-muted not-italic">
                &mdash; {randomQuote.source}
              </cite>
              <CopyButton text={`"${randomQuote.text}" — Thomas Sowell, ${randomQuote.source}`} />
            </div>
          </blockquote>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-muted mb-4">
        {filtered.length} quote{filtered.length !== 1 ? "s" : ""}
        {activeTheme !== "All" && ` in ${activeTheme}`}
        {search.length >= 2 && ` matching "${search}"`}
      </p>

      {/* Quotes list */}
      <div className="space-y-4">
        {filtered.map((q, i) => (
          <div
            key={i}
            className="border border-card-border rounded-lg p-4 md:p-5 bg-card-bg/50"
          >
            <div className="flex items-start gap-3">
              <blockquote className="flex-1">
                <p className="text-foreground/70 italic leading-relaxed mb-2">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <cite className="text-sm text-muted not-italic">
                    &mdash; {q.source}
                  </cite>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-card-bg border border-card-border text-muted">
                    {q.theme}
                  </span>
                </div>
              </blockquote>
              <CopyButton text={`"${q.text}" — Thomas Sowell, ${q.source}`} />
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-10">
          No quotes found. Try a different search or theme.
        </p>
      )}
    </div>
  );
}
