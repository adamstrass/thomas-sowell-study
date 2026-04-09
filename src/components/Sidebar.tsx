"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  year?: number;
}

interface Section {
  name: string;
  color: { text: string; bg: string; border: string };
  items: NavItem[];
}

const sections: Section[] = [
  {
    name: "Economics",
    color: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
    items: [
      { name: "Basic Economics", href: "/books/economics/basic-economics", year: 2000 },
      { name: "Applied Economics", href: "/books/economics/applied-economics", year: 2003 },
      { name: "Minimum Wage", href: "/columns/minimum-wage" },
      { name: "Rent Control", href: "/columns/rent-control" },
      { name: "Healthcare", href: "/columns/healthcare" },
      { name: "Socialism vs. Capitalism", href: "/columns/socialism-vs-capitalism" },
      { name: "Wealth & Poverty", href: "/topics/economics/wealth-poverty" },
    ],
  },
  {
    name: "Race & Culture",
    color: { text: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/30" },
    items: [
      { name: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities", year: 2018 },
      { name: "Black Rednecks & White Liberals", href: "/books/race-culture/black-rednecks-white-liberals", year: 2005 },
      { name: "Ethnic America", href: "/books/history-culture/ethnic-america", year: 1981 },
      { name: "Race and Culture", href: "/books/history-culture/race-and-culture", year: 1994 },
      { name: "Migrations and Cultures", href: "/books/history-culture/migrations-and-cultures", year: 1996 },
      { name: "Conquests and Cultures", href: "/books/history-culture/conquests-and-cultures", year: 1998 },
      { name: "Affirmative Action", href: "/columns/affirmative-action" },
      { name: "Immigration", href: "/columns/immigration" },
      { name: "Cultural Factors", href: "/topics/race-culture/cultural-factors" },
    ],
  },
  {
    name: "Political Philosophy",
    color: { text: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
    items: [
      { name: "A Conflict of Visions", href: "/books/political-philosophy/conflict-of-visions", year: 1987 },
      { name: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed", year: 1995 },
      { name: "The Quest for Cosmic Justice", href: "/books/social-policy/quest-for-cosmic-justice", year: 1999 },
      { name: "The Role of Intellectuals", href: "/columns/role-of-intellectuals" },
      { name: "Free Speech", href: "/columns/free-speech" },
      { name: "Media Bias", href: "/columns/media-bias" },
    ],
  },
  {
    name: "Social Policy",
    color: { text: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
    items: [
      { name: "Social Justice Fallacies", href: "/books/social-policy/social-justice-fallacies", year: 2023 },
      { name: "Affirmative Action Around the World", href: "/books/social-policy/affirmative-action-around-world", year: 2004 },
      { name: "Preferential Policies", href: "/books/social-policy/preferential-policies", year: 1990 },
      { name: "Welfare State", href: "/columns/welfare-state" },
      { name: "Crime and Policing", href: "/columns/crime-and-policing" },
      { name: "Family Structure", href: "/columns/family-structure" },
      { name: "Gun Control", href: "/columns/gun-control" },
      { name: "The War on Drugs", href: "/columns/war-on-drugs" },
    ],
  },
  {
    name: "Education",
    color: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
    items: [
      { name: "Inside American Education", href: "/books/education/inside-american-education", year: 1993 },
      { name: "Charter Schools and Their Enemies", href: "/books/education/charter-schools", year: 2020 },
      { name: "Education: Assumptions vs History", href: "/books/education/education-assumptions", year: 1986 },
    ],
  },
  {
    name: "History & Ideas",
    color: { text: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
    items: [
      { name: "Marxism", href: "/books/history-culture/marxism", year: 1985 },
      { name: "On Classical Economics", href: "/books/history-culture/on-classical-economics", year: 2006 },
      { name: "Foreign Policy", href: "/columns/foreign-policy" },
      { name: "Judicial Activism", href: "/columns/judicial-activism" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <>
      <Link href="/" className="block mb-8" onClick={() => setMobileOpen(false)}>
        <h1 className="text-lg font-bold tracking-tight text-accent">
          Sowell Study
        </h1>
        <p className="text-xs text-muted mt-0.5">Ideas &amp; Analysis</p>
      </Link>

      <nav className="space-y-5">
        {/* Tools */}
        <div className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted/60 mb-1 px-3">
            Tools
          </p>
          {[
            { name: "Flashcards", href: "/flashcards" },
            { name: "Watch & Learn", href: "/watch" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                pathname === item.href
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground/70 hover:text-foreground hover:bg-card-bg"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme sections */}
        {sections.map((section) => (
          <div key={section.name}>
            <h2 className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${section.color.text}`}>
              {section.name}
            </h2>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? `${section.color.bg} ${section.color.text} font-medium`
                          : "text-foreground/70 hover:text-foreground hover:bg-card-bg"
                      }`}
                    >
                      {item.name}
                      {item.year && (
                        <span className="text-muted text-[10px] ml-1">
                          ({item.year})
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-3 left-3 z-50 md:hidden p-2 rounded-md bg-sidebar-bg border border-card-border cursor-pointer"
        aria-label="Open navigation"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 5h14M3 10h14M3 15h14" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-sidebar-bg border-r border-card-border overflow-y-auto transition-transform md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 pb-16">
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1 text-muted hover:text-foreground cursor-pointer"
            aria-label="Close navigation"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
          {navContent}
        </div>
      </aside>
    </>
  );
}
