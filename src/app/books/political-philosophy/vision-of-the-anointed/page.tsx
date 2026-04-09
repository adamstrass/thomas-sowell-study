import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function VisionOfTheAnointedBook() {
  const book = getBook("vision-of-the-anointed");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
