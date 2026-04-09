import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function WarOnDrugsPage() {
  const topic = getColumn("war-on-drugs");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
