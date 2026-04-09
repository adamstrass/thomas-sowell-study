import { allBooks } from "./books";

export interface FlashcardData {
  id: string;
  front: string;
  back: string;
}

export interface Deck {
  id: string;
  title: string;
  category: string;
  cards: FlashcardData[];
}

// Per-book decks
const bookDecks: Deck[] = allBooks.map((book) => ({
  id: book.bookId,
  title: book.title,
  category: book.category,
  cards: [
    ...book.concepts.map((c, i) => ({
      id: `${book.bookId}-c${i}`,
      front: c.title,
      back: c.description,
    })),
    ...book.quiz.map((q, i) => ({
      id: `${book.bookId}-q${i}`,
      front: q.question,
      back: q.explanation,
    })),
  ],
}));

// Category-level decks that combine all books in each category
const categories = Array.from(new Set(allBooks.map((b) => b.category)));
const categoryDecks: Deck[] = categories.map((cat) => {
  const booksInCat = bookDecks.filter((d) => d.category === cat);
  return {
    id: `cat-${cat.toLowerCase().replace(/[^a-z]/g, "-")}`,
    title: `All ${cat}`,
    category: cat,
    cards: booksInCat.flatMap((d) => d.cards),
  };
});

// Category decks first, then individual book decks
export const decks: Deck[] = [...categoryDecks, ...bookDecks];
