import TopicPage from "@/components/TopicPage";

export default function HousingRentControl() {
  return (
    <TopicPage
      category="Economics"
      title="Housing & Rent Control"
      description="Sowell dedicates significant analysis to housing markets, arguing that rent control and restrictive land-use policies consistently produce the opposite of their stated goals — reducing the supply and quality of affordable housing."
      quote={{
        text: "Rent control appears to be the most efficient technique presently known to destroy a city — except for bombing.",
        source: "Thomas Sowell, quoting Assar Lindbeck",
      }}
      keyIdeas={[
        "Rent control reduces the incentive to build and maintain rental housing.",
        "Land-use restrictions artificially inflate housing costs by limiting supply.",
        "Political incentives favor visible short-term benefits over invisible long-term costs.",
        "Housing affordability crises are most severe in the most regulated markets.",
      ]}
      relevantWorks={[
        "Basic Economics (2000)",
        "The Housing Boom and Bust (2009)",
        "Economic Facts and Fallacies (2008)",
      ]}
    />
  );
}
