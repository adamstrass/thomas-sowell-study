import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function RoleOfIntellectualsPage() {
  const topic = getColumn("role-of-intellectuals");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
