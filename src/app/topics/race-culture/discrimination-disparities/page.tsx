import TopicPage from "@/components/TopicPage";

export default function DiscriminationDisparities() {
  return (
    <TopicPage
      category="Race & Culture"
      title="Discrimination & Disparities"
      description="One of Sowell's central arguments is that statistical disparities between groups do not automatically prove discrimination. He draws on global and historical evidence to show that disparities are the norm, not the exception, across all societies."
      quote={{
        text: "Disparities are treated as grievances against society, rather than as differences in the way particular groups have developed.",
        source: "Thomas Sowell, Discrimination and Disparities",
      }}
      keyIdeas={[
        "Statistical disparities between groups exist in virtually every society and era.",
        "Multiple factors — age, geography, culture, family structure — produce disparate outcomes.",
        "The discrimination explanation is often assumed rather than empirically demonstrated.",
        "Comparing groups with different median ages or family sizes is inherently misleading.",
      ]}
      relevantWorks={[
        "Discrimination and Disparities (2018)",
        "Civil Rights: Rhetoric or Reality? (1984)",
        "The Economics and Politics of Race (1983)",
      ]}
    />
  );
}
