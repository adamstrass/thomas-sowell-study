import { notFound } from "next/navigation";
import ComparisonPage from "@/components/ComparisonPage";
import { getComparison } from "@/data/comparisons";

export default function SowellVsKrugmanPage() {
  const data = getComparison("sowell-vs-krugman");
  if (!data) return notFound();
  return <ComparisonPage {...data} />;
}
