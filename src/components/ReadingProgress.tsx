"use client";

import Link from "next/link";
import { useAllReadingProgress } from "@/hooks/useReadingProgress";
import { allBooks } from "@/data/books";

export default function ReadingProgress() {
  const progress = useAllReadingProgress();

  const books = allBooks.map((b) => ({
    id: b.bookId,
    title: b.title,
    chapters: b.chapters.length,
    href: b.href,
  }));

  const totalChapters = books.reduce((s, b) => s + b.chapters, 0);
  const totalRead = books.reduce(
    (s, b) => s + (progress[b.id]?.length || 0),
    0
  );
  const overallPercent =
    totalChapters > 0 ? Math.round((totalRead / totalChapters) * 100) : 0;

  return (
    <div>
      {/* Overall */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-2 bg-card-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
        <span className="text-sm text-muted shrink-0">
          {totalRead} / {totalChapters} chapters
        </span>
      </div>

      {/* Per book */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {books.map((book) => {
          const read = progress[book.id]?.length || 0;
          const pct =
            book.chapters > 0
              ? Math.round((read / book.chapters) * 100)
              : 0;
          return (
            <Link
              key={book.id}
              href={book.href}
              className="group flex items-center gap-3 border border-card-border rounded-lg px-4 py-3 bg-card-bg hover:border-accent/40 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate group-hover:text-accent transition-colors">
                  {book.title}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-1 bg-card-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted shrink-0">
                    {read}/{book.chapters}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
