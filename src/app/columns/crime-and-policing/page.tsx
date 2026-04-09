import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function CrimeAndPolicingPage() {
  const topic = getColumn("crime-and-policing");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
