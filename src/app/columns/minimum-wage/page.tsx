import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function MinimumWagePage() {
  const topic = getColumn("minimum-wage");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
