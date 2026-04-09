import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function InsideAmericanEducationBook() {
  const book = getBook("inside-american-education");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
