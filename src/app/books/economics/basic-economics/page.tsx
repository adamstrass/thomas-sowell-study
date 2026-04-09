import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function BasicEconomicsBook() {
  const book = getBook("basic-economics");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
