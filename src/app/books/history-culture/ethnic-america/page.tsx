import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function EthnicAmericaBook() {
  const book = getBook("ethnic-america");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
