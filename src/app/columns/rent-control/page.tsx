import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function RentControlPage() {
  const topic = getColumn("rent-control");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
