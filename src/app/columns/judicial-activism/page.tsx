import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function JudicialActivismPage() {
  const topic = getColumn("judicial-activism");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
