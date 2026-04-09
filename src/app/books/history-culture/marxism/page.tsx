import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function MarxismBook() {
  const book = getBook("marxism");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
