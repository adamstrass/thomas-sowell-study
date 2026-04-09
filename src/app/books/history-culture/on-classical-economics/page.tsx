import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function OnClassicalEconomicsBook() {
  const book = getBook("on-classical-economics");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
