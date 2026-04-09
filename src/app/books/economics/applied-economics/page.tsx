import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function AppliedEconomicsBook() {
  const book = getBook("applied-economics");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
