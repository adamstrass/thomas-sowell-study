import Link from "next/link";

const sections = [
  {
    name: "Economics",
    links: [
      { name: "Basic Economics", href: "/books/economics/basic-economics" },
      { name: "Applied Economics", href: "/books/economics/applied-economics" },
      { name: "Minimum Wage", href: "/columns/minimum-wage" },
      { name: "Rent Control", href: "/columns/rent-control" },
    ],
  },
  {
    name: "Race & Culture",
    links: [
      { name: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities" },
      { name: "Black Rednecks & White Liberals", href: "/books/race-culture/black-rednecks-white-liberals" },
      { name: "Ethnic America", href: "/books/history-culture/ethnic-america" },
      { name: "Affirmative Action", href: "/columns/affirmative-action" },
    ],
  },
  {
    name: "Political Philosophy",
    links: [
      { name: "A Conflict of Visions", href: "/books/political-philosophy/conflict-of-visions" },
      { name: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed" },
      { name: "Free Speech", href: "/columns/free-speech" },
      { name: "Media Bias", href: "/columns/media-bias" },
    ],
  },
  {
    name: "Social Policy",
    links: [
      { name: "Social Justice Fallacies", href: "/books/social-policy/social-justice-fallacies" },
      { name: "Welfare State", href: "/columns/welfare-state" },
      { name: "Crime and Policing", href: "/columns/crime-and-policing" },
      { name: "Family Structure", href: "/columns/family-structure" },
    ],
  },
  {
    name: "Education",
    links: [
      { name: "Inside American Education", href: "/books/education/inside-american-education" },
      { name: "Charter Schools", href: "/books/education/charter-schools" },
      { name: "Education: Assumptions vs History", href: "/books/education/education-assumptions" },
    ],
  },
  {
    name: "History & Ideas",
    links: [
      { name: "Marxism", href: "/books/history-culture/marxism" },
      { name: "On Classical Economics", href: "/books/history-culture/on-classical-economics" },
      { name: "Foreign Policy", href: "/columns/foreign-policy" },
      { name: "Judicial Activism", href: "/columns/judicial-activism" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-16">
      <div className="max-w-4xl mx-auto px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.name}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                {section.name}
              </h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-card-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <p>Sowell Study &mdash; An educational study platform.</p>
          <div className="flex gap-4">
            <Link href="/flashcards" className="hover:text-accent transition-colors">Flashcards</Link>
            <Link href="/watch" className="hover:text-accent transition-colors">Watch &amp; Learn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
