import { notFound } from "next/navigation";
import ColumnPage from "@/components/ColumnPage";
import { getColumn } from "@/data/columns";

export default function FreeSpeechPage() {
  const topic = getColumn("free-speech");
  if (!topic) return notFound();
  return <ColumnPage {...topic} />;
}
