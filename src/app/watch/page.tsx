import Link from "next/link";

interface Video {
  title: string;
  description: string;
  youtubeId: string;
  tags: { label: string; href: string }[];
}

const sections: { heading: string; videos: Video[] }[] = [
  {
    heading: "Interviews",
    videos: [
      {
        title: "Thomas Sowell on the Myths of Economic Inequality",
        description:
          "Sowell sits down with Peter Robinson on Uncommon Knowledge to dismantle common myths about income inequality, racial disparities, and the welfare state.",
        youtubeId: "mS5WYp5xmvI",
        tags: [
          { label: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities" },
          { label: "Basic Economics", href: "/books/economics/basic-economics" },
        ],
      },
      {
        title: "Thomas Sowell on Economic Facts and Fallacies",
        description:
          "Sowell discusses the most common economic fallacies with Peter Robinson — from income distribution myths to the real causes of male-female pay gaps.",
        youtubeId: "n0MaY33LJZ0",
        tags: [
          { label: "Basic Economics", href: "/books/economics/basic-economics" },
          { label: "Applied Economics", href: "/books/economics/applied-economics" },
        ],
      },
      {
        title: "Facts and Fallacies with Thomas Sowell",
        description:
          "A Hoover Institution conversation where Sowell breaks down how popular economic beliefs — on trade, wages, and housing — fall apart under empirical scrutiny.",
        youtubeId: "V6ZPg6kOBkc",
        tags: [
          { label: "Applied Economics", href: "/books/economics/applied-economics" },
          { label: "Housing & Rent Control", href: "/topics/economics/housing-rent-control" },
        ],
      },
    ],
  },
  {
    heading: "Lectures",
    videos: [
      {
        title: "Thomas Sowell on Welfare",
        description:
          "Sowell traces the unintended consequences of the welfare state — how programs designed to help the poor created dependency and undermined the family structures that drive upward mobility.",
        youtubeId: "2GklCBvS-eI",
        tags: [
          { label: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed" },
          { label: "Applied Economics", href: "/books/economics/applied-economics" },
        ],
      },
      {
        title: "Thomas Sowell on Discrimination and Disparities",
        description:
          "Sowell presents the core thesis of his book: that statistical disparities are the norm across all societies, and discrimination is only one of many possible causes.",
        youtubeId: "U7hmTRT8tb4",
        tags: [
          { label: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities" },
          { label: "Black Rednecks & White Liberals", href: "/books/race-culture/black-rednecks-white-liberals" },
        ],
      },
    ],
  },
  {
    heading: "Debates",
    videos: [
      {
        title: "Thomas Sowell vs Frances Fox Piven on the Welfare State",
        description:
          "From the 1980 PBS series Free to Choose, Sowell and Milton Friedman debate Frances Fox Piven on equality of rights vs. equality of results.",
        youtubeId: "26QxO49Ycx0",
        tags: [
          { label: "A Conflict of Visions", href: "/books/political-philosophy/conflict-of-visions" },
          { label: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed" },
        ],
      },
    ],
  },
];

export default function WatchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <section className="mb-12">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
          Study Tools
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Watch &amp; Learn
        </h1>
        <p className="text-foreground/50 text-sm max-w-2xl">
          Interviews, lectures, and debates featuring Thomas Sowell. Each video
          is tagged with the relevant books and topics on this platform.
        </p>
      </section>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-6">
              {section.heading}
            </h2>
            <div className="space-y-10">
              {section.videos.map((video) => (
                <div key={video.youtubeId}>
                  {/* Embed */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-card-border mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-3">
                    {video.description}
                  </p>

                  {/* Tags + Related Reading */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted mr-1">Related:</span>
                    {video.tags.map((tag) => (
                      <Link
                        key={tag.href}
                        href={tag.href}
                        className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      >
                        {tag.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
