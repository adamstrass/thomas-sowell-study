import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function WelfareStatePage() {
  const topic = getColumn("welfare-state");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
