import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function HealthcarePage() {
  const topic = getColumn("healthcare");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
