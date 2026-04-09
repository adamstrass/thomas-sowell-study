import { notFound } from "next/navigation";
import BookPage from "@/components/BookPage";
import { getBook } from "@/data/books";

export default function SocialJusticeFallaciesBook() {
  const book = getBook("social-justice-fallacies");
  if (!book) return notFound();
  return <BookPage {...book} />;
}
