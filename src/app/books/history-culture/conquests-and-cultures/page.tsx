import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function ConquestsAndCulturesBook() {
  const book = getBook("conquests-and-cultures");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
