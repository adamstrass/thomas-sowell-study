import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function AffirmativeActionAroundWorldBook() {
  const book = getBook("affirmative-action-around-world");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
