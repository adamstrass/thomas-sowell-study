import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function AffirmativeActionPage() {
  const topic = getColumn("affirmative-action");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
