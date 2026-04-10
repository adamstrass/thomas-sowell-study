"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { askIndex, type AskEntry } from "@/data/askIndex";

const fuse = new Fuse(askIndex, {
  keys: [
    { name: "title", weight: 0.3 },
    { name: "text", weight: 0.5 },
    { name: "book", weight: 0.2 },
  ],
  threshold: 0.4,
  includeMatches: true,
  minMatchCharLength: 3,
});

function highlightMatch(text: string, indices: readonly [number, number][]) {
  if (!indices || indices.length === 0) return text;

  const chars = [...text];
  const highlighted = new Set<number>();
  for (const [start, end] of indices) {
    for (let i = start; i <= end; i++) highlighted.add(i);
  }

  const parts: { text: string; highlight: boolean }[] = [];
  let current = { text: "", highlight: highlighted.has(0) };

  for (let i = 0; i < chars.length; i++) {
    const isHL = highlighted.has(i);
    if (isHL !== current.highlight) {
      if (current.text) parts.push(current);
      current = { text: chars[i], highlight: isHL };
    } else {
      current.text += chars[i];
    }
  }
  if (current.text) parts.push(current);

  return parts;
}

const typeColors: Record<AskEntry["type"], string> = {
  summary: "bg-accent/15 text-accent",
  concept: "bg-blue-500/15 text-blue-400",
  chapter: "bg-purple-500/15 text-purple-400",
  quiz: "bg-green-500/15 text-green-400",
};

export default function AskPanel() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Small delay so mobile keyboard doesn't cause layout shift
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Lock body scroll when open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    return fuse.search(query).slice(0, 5);
  }, [query]);

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-12 md:h-12 rounded-full bg-accent text-background flex items-center justify-center shadow-lg hover:bg-accent-dim transition-colors cursor-pointer ${open ? "hidden" : ""}`}
        aria-label="Ask about Sowell"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="7" />
          <path d="M16 16l-3.5-3.5" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <>
          {/* Backdrop — hidden on mobile since panel is fullscreen */}
          <div
            className="hidden md:block fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel — fullscreen on mobile, floating card on desktop */}
          <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-50 w-full md:max-w-lg bg-sidebar-bg md:border md:border-card-border md:rounded-xl md:shadow-2xl flex flex-col md:max-h-[80vh]">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 md:px-5 pt-4 md:pt-5 pb-3 border-b border-card-border md:border-b-0 shrink-0">
              <div className="flex-1">
                <h2 className="font-semibold">Ask About Sowell</h2>
                <p className="text-xs text-muted">
                  Search across all books, concepts, and chapters
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5l10 10M15 5l-10 10" />
                </svg>
              </button>
            </div>

            {/* Input */}
            <div className="px-4 md:px-5 pb-3 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Why do price controls cause shortages?"
                className="w-full px-4 py-3 md:py-2.5 rounded-lg bg-card-bg border border-card-border text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto px-4 md:px-5 pb-6 md:pb-5">
              {query.length >= 2 && results.length === 0 && (
                <p className="text-muted py-8 text-center">
                  No results found. Try different keywords.
                </p>
              )}

              {results.length > 0 && (
                <div className="space-y-3">
                  {results.map((result) => {
                    const item = result.item;
                    const textMatch = result.matches?.find(
                      (m) => m.key === "text"
                    );
                    const parts = textMatch?.indices
                      ? highlightMatch(item.text, textMatch.indices)
                      : item.text;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border border-card-border rounded-lg p-4 bg-card-bg/50 hover:border-accent/30 active:bg-card-bg transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${typeColors[item.type]}`}
                          >
                            {item.type}
                          </span>
                          <span className="text-[10px] text-muted">
                            {item.book}
                          </span>
                        </div>
                        <p className="text-sm font-medium mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-foreground/50 leading-relaxed line-clamp-3">
                          {typeof parts === "string"
                            ? parts
                            : parts.map((part, i) =>
                                part.highlight ? (
                                  <mark
                                    key={i}
                                    className="bg-accent/25 text-accent rounded-sm px-0.5"
                                  >
                                    {part.text}
                                  </mark>
                                ) : (
                                  <span key={i}>{part.text}</span>
                                )
                              )}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              )}

              {query.length < 2 && (
                <div className="text-center py-10 md:py-6">
                  <p className="text-sm text-muted">
                    Type a question to search across all books, concepts, and
                    chapter summaries.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
