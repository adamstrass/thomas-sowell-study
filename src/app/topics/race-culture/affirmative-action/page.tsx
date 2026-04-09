import TopicPage from "@/components/TopicPage";

export default function AffirmativeAction() {
  return (
    <TopicPage
      category="Race & Culture"
      title="Affirmative Action"
      description="Sowell examines affirmative action policies across multiple countries and finds a consistent pattern: such policies tend to benefit the more fortunate members of designated groups while generating resentment and unintended consequences."
      quote={{
        text: "The grand delusion of contemporary liberals is that they have both combated discrimination and promoted it, through affirmative action.",
        source: "Thomas Sowell, Affirmative Action Around the World",
      }}
      keyIdeas={[
        "Affirmative action programs worldwide show strikingly similar patterns and problems.",
        "Benefits disproportionately flow to the already-advantaged within preferred groups.",
        "Mismatch effects can harm intended beneficiaries by placing them in mismatched environments.",
        "Programs intended as temporary tend to expand and become politically permanent.",
      ]}
      relevantWorks={[
        "Affirmative Action Around the World (2004)",
        "Civil Rights: Rhetoric or Reality? (1984)",
        "Preferential Policies (1990)",
      ]}
    />
  );
}
