import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function MediaBiasPage() {
  const topic = getColumn("media-bias");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
