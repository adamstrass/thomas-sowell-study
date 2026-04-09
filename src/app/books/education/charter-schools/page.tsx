import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function CharterSchoolsBook() {
  const book = getBook("charter-schools");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
