import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function QuestForCosmicJusticeBook() {
  const book = getBook("quest-for-cosmic-justice");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
