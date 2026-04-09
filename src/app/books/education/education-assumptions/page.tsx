import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function EducationAssumptionsBook() {
  const book = getBook("education-assumptions");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
