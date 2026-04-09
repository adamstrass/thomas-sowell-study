import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function ImmigrationPage() {
  const topic = getColumn("immigration");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
