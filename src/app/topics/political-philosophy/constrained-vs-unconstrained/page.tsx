import TopicPage from "@/components/TopicPage";

export default function ConstrainedVsUnconstrained() {
  return (
    <TopicPage
      category="Political Philosophy"
      title="Constrained vs. Unconstrained Vision"
      description="Drawing on his reading of intellectual history, Sowell identifies two fundamentally different visions of human nature that underlie most political disagreements — the constrained (tragic) vision and the unconstrained (utopian) vision."
      quote={{
        text: "Each new generation born is in effect an invasion of civilization by little barbarians, who must be civilized before it is too late.",
        source: "Thomas Sowell, A Conflict of Visions",
      }}
      keyIdeas={[
        "The constrained vision sees human nature as fixed and flawed, requiring trade-offs and institutions.",
        "The unconstrained vision sees human nature as malleable and perfectible through reason and policy.",
        "Most policy debates reduce to clashes between these two underlying visions.",
        "Sowell traces these visions through thinkers like Adam Smith (constrained) and Condorcet (unconstrained).",
      ]}
      relevantWorks={[
        "A Conflict of Visions (1987)",
        "The Vision of the Anointed (1995)",
        "Intellectuals and Society (2009)",
      ]}
    />
  );
}
