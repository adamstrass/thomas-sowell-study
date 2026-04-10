import { notFound } from "next/navigation";
import ComparisonPage from "@/components/ComparisonPage";
import { getComparison } from "@/data/comparisons";

export default function SowellVsPikettyPage() {
  const data = getComparison("sowell-vs-piketty");
  if (!data) return notFound();
  return <ComparisonPage {...data} />;
}
