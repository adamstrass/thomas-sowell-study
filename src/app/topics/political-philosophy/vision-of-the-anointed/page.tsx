import TopicPage from "@/components/TopicPage";

export default function VisionOfTheAnointed() {
  return (
    <TopicPage
      category="Political Philosophy"
      title="Vision of the Anointed"
      description="Sowell's critique of intellectual elites centers on a recurring pattern: a self-congratulatory vision that persists regardless of evidence, sustained by rhetorical tactics rather than empirical accountability."
      quote={{
        text: "The anointed do not simply happen to have a disdain for the public. Such disdain is an integral part of their vision.",
        source: "Thomas Sowell, The Vision of the Anointed",
      }}
      keyIdeas={[
        "The 'anointed' hold a vision of superior wisdom that justifies overriding others' decisions.",
        "A four-stage pattern: crisis, solution, results, response — where failure never discredits the vision.",
        "Verbal virtuosity substitutes for empirical evidence in policy debates.",
        "The 'benighted' public is assumed to need guidance rather than freedom.",
      ]}
      relevantWorks={[
        "The Vision of the Anointed (1995)",
        "Intellectuals and Society (2009)",
        "Knowledge and Decisions (1980)",
      ]}
    />
  );
}
