import Link from "next/link";
import DailyQuote from "@/components/DailyQuote";
import ReadingProgress from "@/components/ReadingProgress";
import { getCategoryColor } from "@/data/categoryColors";

const categories = [
  {
    name: "Economics",
    description: "Prices, incentives, trade-offs, and the unseen consequences of well-intentioned policy.",
    href: "/books/economics/basic-economics",
    count: "2 books, 4 topics",
  },
  {
    name: "Race & Culture",
    description: "Global patterns of disparities, the role of culture, and why statistical gaps don't automatically prove discrimination.",
    href: "/books/race-culture/discrimination-and-disparities",
    count: "6 books, 3 topics",
  },
  {
    name: "Political Philosophy",
    description: "Competing visions of human nature, the track record of elites, and the limits of unconstrained idealism.",
    href: "/books/political-philosophy/conflict-of-visions",
    count: "3 books, 5 topics",
  },
  {
    name: "Social Policy",
    description: "Social justice fallacies, affirmative action worldwide, welfare dependency, crime, and the family.",
    href: "/books/social-policy/social-justice-fallacies",
    count: "3 books, 5 topics",
  },
  {
    name: "Education",
    description: "The decline of standards, charter school success, and how assumptions about education hold up against history.",
    href: "/books/education/inside-american-education",
    count: "3 books",
  },
  {
    name: "History & Ideas",
    description: "Marx, classical economics, foreign policy, judicial activism, and the intellectual foundations of political thought.",
    href: "/books/history-culture/marxism",
    count: "2 books, 2 topics",
  },
];

// Map "History & Ideas" homepage name to the "History & Culture" key used in categoryColors
const catColorName: Record<string, string> = {
  "History & Ideas": "History & Culture",
};

const featuredBooks = [
  { category: "Economics", title: "Basic Economics", year: 2000, description: "A citizen's guide to the economy — prices, trade, and incentives explained without graphs or equations.", href: "/books/economics/basic-economics" },
  { category: "Race & Culture", title: "Discrimination and Disparities", year: 2018, description: "Why statistical disparities are the norm across all societies — and why discrimination is only one of many possible causes.", href: "/books/race-culture/discrimination-and-disparities" },
  { category: "Political Philosophy", title: "A Conflict of Visions", year: 1987, description: "The ideological origins of political struggle — how constrained and unconstrained visions of human nature shape every debate.", href: "/books/political-philosophy/conflict-of-visions" },
  { category: "Social Policy", title: "Social Justice Fallacies", year: 2023, description: "Sowell's most recent book dismantles the intellectual foundations of the social justice movement with global evidence.", href: "/books/social-policy/social-justice-fallacies" },
  { category: "Education", title: "Charter Schools and Their Enemies", year: 2020, description: "Same buildings, same demographics, dramatically different results — the data on charter schools vs. public schools.", href: "/books/education/charter-schools" },
  { category: "History & Ideas", title: "Marxism: Philosophy and Economics", year: 1985, description: "A fair-minded examination of what Marx actually argued — and where the theory fails against evidence.", href: "/books/history-culture/marxism" },
];

const popularTopics = [
  { name: "Minimum Wage", href: "/columns/minimum-wage" },
  { name: "Rent Control", href: "/columns/rent-control" },
  { name: "Socialism vs. Capitalism", href: "/columns/socialism-vs-capitalism" },
  { name: "Welfare State", href: "/columns/welfare-state" },
  { name: "Affirmative Action", href: "/columns/affirmative-action" },
  { name: "Crime and Policing", href: "/columns/crime-and-policing" },
  { name: "Free Speech", href: "/columns/free-speech" },
  { name: "Family Structure", href: "/columns/family-structure" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-card-border bg-card-bg/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
            Study Platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Thomas Sowell
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed mb-4">
            Thomas Sowell (born 1930) is an American economist, social
            theorist, and Senior Fellow at the Hoover Institution, Stanford
            University. Over a career spanning more than half a century, he has
            authored more than forty books covering economics, race, education,
            and political philosophy.
          </p>
          <p className="text-foreground/50 max-w-3xl leading-relaxed">
            Trained at Harvard, Columbia, and the University of Chicago —
            where he studied under Milton Friedman — Sowell brings rigorous
            empirical analysis to questions often dominated by ideology. This
            platform organizes his major works and ideas across six categories,
            with book summaries, key concepts, chapter breakdowns, quizzes,
            flashcards, and video content.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10 md:space-y-16">
        {/* Categories */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Explore by Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const color = getCategoryColor(catColorName[cat.name] || cat.name);
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`group border border-card-border rounded-lg p-5 bg-card-bg hover:${color.border} transition-colors`}
                >
                  <h3 className={`font-semibold mb-2 ${color.text} transition-colors`}>
                    {cat.name}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <span className="text-xs text-muted">{cat.count}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Daily Quote */}
        <DailyQuote />

        {/* Reading Progress */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Reading Progress
          </h2>
          <ReadingProgress />
        </section>

        {/* Popular Topics */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Popular Topics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {popularTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group border border-card-border rounded-lg px-4 py-3 bg-card-bg hover:border-accent/40 transition-colors text-center"
              >
                <span className="text-sm font-medium group-hover:text-accent transition-colors">
                  {topic.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Books */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Featured Books
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredBooks.map((book) => {
              const bColor = getCategoryColor(catColorName[book.category] || book.category);
              return (
              <Link
                key={book.href}
                href={book.href}
                className={`group border border-card-border rounded-lg p-6 bg-card-bg hover:${bColor.border} transition-colors`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs ${bColor.text} font-medium uppercase tracking-wider`}>
                    {book.category}
                  </span>
                  <span className="text-xs text-muted">({book.year})</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 group-hover:${bColor.text} transition-colors`}>
                  {book.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {book.description}
                </p>
              </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
