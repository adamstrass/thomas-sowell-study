import { notFound } from "next/navigation";
import ComparisonPage from "@/components/ComparisonPage";
import { getComparison } from "@/data/comparisons";

export default function SowellVsRawlsPage() {
  const data = getComparison("sowell-vs-rawls");
  if (!data) return notFound();
  return <ComparisonPage {...data} />;
}
