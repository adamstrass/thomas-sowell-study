"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchIndex, type SearchEntry } from "@/data/searchIndex";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const lower = query.toLowerCase();
    const matches = searchIndex.filter(
      (e) =>
        e.title.toLowerCase().includes(lower) ||
        e.text.toLowerCase().includes(lower)
    );
    setResults(matches.slice(0, 8));
    setOpen(matches.length > 0);
    setSelected(-1);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && selected >= 0) {
      e.preventDefault();
      navigate(results[selected].href);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const typeLabel = (type: SearchEntry["type"]) => {
    switch (type) {
      case "book":
        return "Book";
      case "concept":
        return "Concept";
      case "quiz":
        return "Quiz";
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full md:max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search concepts, books, ideas..."
        className="w-full px-4 py-2 rounded-lg bg-card-bg border border-card-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
      />

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-sidebar-bg border border-card-border rounded-lg shadow-xl overflow-hidden z-50">
          {results.map((r, i) => (
            <button
              key={`${r.href}-${r.title}`}
              onClick={() => navigate(r.href)}
              onMouseEnter={() => setSelected(i)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 text-sm transition-colors cursor-pointer ${
                i === selected ? "bg-card-bg" : "hover:bg-card-bg/50"
              }`}
            >
              <span
                className={`shrink-0 mt-0.5 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  r.type === "book"
                    ? "bg-accent/15 text-accent"
                    : r.type === "concept"
                      ? "bg-blue-500/15 text-blue-400"
                      : "bg-green-500/15 text-green-400"
                }`}
              >
                {typeLabel(r.type)}
              </span>
              <div className="min-w-0">
                <p className="font-medium truncate">{r.title}</p>
                <p className="text-xs text-muted truncate">{r.text}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
