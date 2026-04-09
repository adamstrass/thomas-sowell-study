import TopicPage from "@/components/TopicPage";

export default function BasicEconomics() {
  return (
    <TopicPage
      category="Economics"
      title="Basic Economics"
      description="Sowell's approach strips economics down to its essentials: how scarce resources get allocated among competing uses. He emphasizes that prices are not arbitrary obstacles but signals that coordinate decisions across millions of people."
      quote={{
        text: "The first lesson of economics is scarcity: there is never enough of anything to fully satisfy all those who want it.",
        source: "Thomas Sowell, Basic Economics",
      }}
      keyIdeas={[
        "Prices convey information and incentives that central planners cannot replicate.",
        "The role of profits and losses as feedback mechanisms guiding resource allocation.",
        "Unintended consequences of well-intentioned economic policies like price controls.",
        "The difference between intentions and results when evaluating economic policy.",
        "International trade as mutually beneficial exchange, not zero-sum competition.",
      ]}
      relevantWorks={[
        "Basic Economics (2000)",
        "Applied Economics (2003)",
        "Economic Facts and Fallacies (2008)",
      ]}
    />
  );
}
