import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function DiscriminationAndDisparitiesBook() {
  const book = getBook("discrimination-and-disparities");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
