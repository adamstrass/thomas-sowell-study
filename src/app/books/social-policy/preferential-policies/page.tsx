import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function PreferentialPoliciesBook() {
  const book = getBook("preferential-policies");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
