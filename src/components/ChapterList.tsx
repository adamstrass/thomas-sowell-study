"use client";

import { useState } from "react";
import { useReadingProgress } from "@/hooks/useReadingProgress";

interface Chapter {
  number: number;
  title: string;
  summary: string;
}

interface ChapterListProps {
  bookId: string;
  chapters: Chapter[];
}

export default function ChapterList({ bookId, chapters }: ChapterListProps) {
  const { completed, toggle, completedCount, percent } = useReadingProgress(
    bookId,
    chapters.length
  );
  const [expanded, setExpanded] = useState<Set<number>>(
    () => new Set(chapters.map((ch) => ch.number))
  );

  function toggleExpand(num: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
      }
      return next;
    });
  }

  function expandAll() {
    setExpanded(new Set(chapters.map((ch) => ch.number)));
  }

  function collapseAll() {
    setExpanded(new Set());
  }

  return (
    <div>
      {/* Progress summary */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-1.5 bg-card-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs text-muted shrink-0">
          {completedCount} / {chapters.length} read
        </span>
      </div>

      {/* Expand/collapse controls */}
      <div className="flex gap-3 mb-4 text-xs">
        <button
          onClick={expandAll}
          className="text-muted hover:text-accent transition-colors cursor-pointer"
        >
          Expand all
        </button>
        <button
          onClick={collapseAll}
          className="text-muted hover:text-accent transition-colors cursor-pointer"
        >
          Collapse all
        </button>
      </div>

      <div className="space-y-2">
        {chapters.map((ch) => {
          const key = String(ch.number);
          const isRead = completed.has(key);
          const isOpen = expanded.has(ch.number);
          return (
            <div
              key={ch.number}
              className={`border rounded-lg transition-colors ${
                isRead
                  ? "border-accent/20 bg-accent/5"
                  : "border-card-border bg-card-bg/50"
              }`}
            >
              {/* Header row — always visible */}
              <div className="flex items-center gap-3 px-4 py-3">
                <button
                  onClick={() => toggle(key)}
                  className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors cursor-pointer ${
                    isRead
                      ? "bg-accent border-accent text-background"
                      : "border-card-border hover:border-accent/50"
                  }`}
                  aria-label={`Mark chapter ${ch.number} "${ch.title}" as ${isRead ? "unread" : "read"}`}
                >
                  {isRead && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </button>
                <span className="text-sm font-bold text-accent/30 w-6 text-right shrink-0">
                  {ch.number}
                </span>
                <button
                  onClick={() => toggleExpand(ch.number)}
                  className="flex-1 text-left cursor-pointer"
                >
                  <h3
                    className={`font-medium ${
                      isRead ? "text-foreground/50" : ""
                    }`}
                  >
                    {ch.title}
                  </h3>
                </button>
                <button
                  onClick={() => toggleExpand(ch.number)}
                  className="shrink-0 text-muted hover:text-foreground transition-colors cursor-pointer p-1"
                  aria-label={isOpen ? "Collapse" : "Expand"}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M3 5l4 4 4-4" />
                  </svg>
                </button>
              </div>

              {/* Collapsible summary */}
              {isOpen && (
                <div className="px-4 pb-4 pl-[4.25rem]">
                  <p className="text-foreground/50 leading-relaxed">
                    {ch.summary}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
