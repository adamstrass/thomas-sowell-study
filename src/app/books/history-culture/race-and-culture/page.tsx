import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function RaceAndCultureBook() {
  const book = getBook("race-and-culture");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
