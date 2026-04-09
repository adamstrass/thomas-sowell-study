import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function ForeignPolicyPage() {
  const topic = getColumn("foreign-policy");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
