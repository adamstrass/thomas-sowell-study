import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function FamilyStructurePage() {
  const topic = getColumn("family-structure");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
