"use client";

import { useState } from "react";
import { decks } from "@/data/flashcards";
import FlashcardDeck from "@/components/FlashcardDeck";
import { getCategoryColor } from "@/data/categoryColors";

const categories = ["All", ...Array.from(new Set(decks.map((d) => d.category)))];

export default function FlashcardsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDeckId, setActiveDeckId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? decks
      : decks.filter((d) => d.category === activeCategory);

  const activeDeck = decks.find((d) => d.id === activeDeckId);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <section className="mb-10">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
          Study Tools
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Flashcards</h1>
        <p className="text-foreground/50 text-sm">
          Review key concepts from each book. Flip cards to reveal explanations,
          shuffle the deck, and mark concepts you&apos;ve mastered.
        </p>
      </section>

      {activeDeck ? (
        <div>
          <button
            onClick={() => setActiveDeckId(null)}
            className="text-sm text-accent hover:text-accent-dim transition-colors mb-8 cursor-pointer"
          >
            &larr; Back to all decks
          </button>
          <FlashcardDeck cards={activeDeck.cards} title={activeDeck.title} />
        </div>
      ) : (
        <>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-foreground/50 hover:text-foreground hover:bg-card-bg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Deck grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((deck) => {
              const dColor = getCategoryColor(deck.category);
              return (
                <button
                  key={deck.id}
                  onClick={() => setActiveDeckId(deck.id)}
                  className="text-left border border-card-border rounded-lg p-5 bg-card-bg hover:border-accent/40 transition-colors cursor-pointer"
                >
                  <span className={`text-xs ${dColor.text} font-medium uppercase tracking-wider`}>
                    {deck.category}
                  </span>
                  <h3 className="font-semibold mt-1 mb-2">{deck.title}</h3>
                  <p className="text-sm text-muted">
                    {deck.cards.length} cards
                  </p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
