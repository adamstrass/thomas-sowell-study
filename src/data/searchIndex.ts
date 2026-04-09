import { allBooks } from "./books";

export interface SearchEntry {
  title: string;
  text: string;
  category: string;
  type: "book" | "concept" | "quiz";
  href: string;
}

export const searchIndex: SearchEntry[] = allBooks.flatMap((book) => {
  const entries: SearchEntry[] = [];

  // Book itself
  entries.push({
    title: book.title,
    text: [book.subtitle, book.summary.slice(0, 120)].filter(Boolean).join(". "),
    category: book.category,
    type: "book",
    href: book.href,
  });

  // Concepts
  book.concepts.forEach((c) => {
    entries.push({
      title: c.title,
      text: c.description.slice(0, 150),
      category: book.category,
      type: "concept",
      href: book.href,
    });
  });

  // Quiz questions
  book.quiz.forEach((q) => {
    entries.push({
      title: q.question.slice(0, 80),
      text: q.explanation.slice(0, 150),
      category: book.category,
      type: "quiz",
      href: book.href,
    });
  });

  return entries;
});
