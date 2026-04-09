import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function BlackRednecksWhiteLiberalsBook() {
  const book = getBook("black-rednecks-white-liberals");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
