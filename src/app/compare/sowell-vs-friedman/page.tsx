import { notFound } from "next/navigation";
import ComparisonPage from "@/components/ComparisonPage";
import { getComparison } from "@/data/comparisons";

export default function SowellVsFriedmanPage() {
  const data = getComparison("sowell-vs-friedman");
  if (!data) return notFound();
  return <ComparisonPage {...data} />;
}
