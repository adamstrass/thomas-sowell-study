import TopicPage from "@/components/TopicPage";

export default function IntellectualsSociety() {
  return (
    <TopicPage
      category="Political Philosophy"
      title="Intellectuals & Society"
      description="Sowell examines the unique role intellectuals play in shaping public policy — people whose end product is ideas, and who face little accountability when those ideas fail in practice."
      quote={{
        text: "Intellectuals give people who have the handicap of poverty the further handicap of a sense of victimhood.",
        source: "Thomas Sowell, Intellectuals and Society",
      }}
      keyIdeas={[
        "Intellectuals operate in a market where the currency is prestige, not practical results.",
        "Concentrated knowledge in narrow fields does not imply wisdom about society at large.",
        "The track record of intellectual predictions is remarkably poor yet rarely examined.",
        "Media amplification gives intellectuals influence far beyond their demonstrated competence.",
      ]}
      relevantWorks={[
        "Intellectuals and Society (2009)",
        "The Vision of the Anointed (1995)",
        "Knowledge and Decisions (1980)",
      ]}
    />
  );
}
