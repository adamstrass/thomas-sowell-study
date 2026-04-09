import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function SocialismVsCapitalismPage() {
  const topic = getColumn("socialism-vs-capitalism");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
