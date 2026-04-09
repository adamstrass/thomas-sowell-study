import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function ConflictOfVisionsBook() {
  const book = getBook("conflict-of-visions");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
