import { allBooks } from "./books";

export interface AskEntry {
  id: string;
  title: string;
  text: string;
  type: "summary" | "concept" | "chapter" | "quiz";
  book: string;
  href: string;
}

export const askIndex: AskEntry[] = allBooks.flatMap((book) => {
  const entries: AskEntry[] = [];

  // Book summary
  entries.push({
    id: `${book.bookId}-sum`,
    title: `${book.title} — Summary`,
    text: book.summary,
    type: "summary",
    book: book.title,
    href: book.href,
  });

  // Concepts
  book.concepts.forEach((c, i) => {
    entries.push({
      id: `${book.bookId}-c${i}`,
      title: c.title,
      text: c.description,
      type: "concept",
      book: book.title,
      href: book.href,
    });
  });

  // Chapters
  book.chapters.forEach((ch) => {
    entries.push({
      id: `${book.bookId}-ch${ch.number}`,
      title: `Chapter ${ch.number}: ${ch.title}`,
      text: ch.summary,
      type: "chapter",
      book: book.title,
      href: book.href,
    });
  });

  // Quiz explanations
  book.quiz.forEach((q, i) => {
    entries.push({
      id: `${book.bookId}-q${i}`,
      title: `Quiz: ${q.question.slice(0, 80)}`,
      text: q.explanation,
      type: "quiz",
      book: book.title,
      href: book.href,
    });
  });

  return entries;
});
