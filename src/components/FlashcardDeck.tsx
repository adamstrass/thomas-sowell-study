"use client";

import { useState, useCallback, useEffect } from "react";
import Flashcard from "./Flashcard";
import type { FlashcardData } from "@/data/flashcards";

interface FlashcardDeckProps {
  cards: FlashcardData[];
  title: string;
}

export default function FlashcardDeck({ cards, title }: FlashcardDeckProps) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [current, setCurrent] = useState(0);
  const [known, setKnown] = useState<Set<string>>(() => new Set());
  const [flipped, setFlipped] = useState(false);

  const currentCard = cards[order[current]];
  const total = order.length;
  const knownCount = cards.filter((c) => known.has(c.id)).length;

  function goNext() {
    setCurrent((c) => (c < total - 1 ? c + 1 : 0));
    setFlipped(false);
  }

  function goPrev() {
    setCurrent((c) => (c > 0 ? c - 1 : total - 1));
    setFlipped(false);
  }

  const shuffle = useCallback(() => {
    const shuffled = [...order];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
    setCurrent(0);
    setFlipped(false);
  }, [order]);

  function toggleKnown() {
    const wasKnown = known.has(currentCard.id);
    setKnown((prev) => {
      const next = new Set(prev);
      if (wasKnown) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
    // Auto-advance when marking as known
    if (!wasKnown) {
      setTimeout(goNext, 300);
    }
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Don't capture when user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case " ":
          e.preventDefault();
          setFlipped((f) => !f);
          break;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs text-muted mt-0.5">
            {knownCount} of {total} mastered
          </p>
        </div>
        <button
          onClick={shuffle}
          className="px-4 py-2 rounded-md text-sm font-medium bg-card-bg border border-card-border text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
        >
          Shuffle
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-card-border rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${(knownCount / total) * 100}%` }}
        />
      </div>

      {/* Card */}
      <Flashcard
        key={currentCard.id}
        front={currentCard.front}
        back={currentCard.back}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
        isKnown={known.has(currentCard.id)}
        onToggleKnown={toggleKnown}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goPrev}
          className="px-4 py-3 md:py-2 rounded-md text-sm font-medium bg-card-bg border border-card-border text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
        >
          Previous
        </button>
        <span className="text-sm text-muted">
          {current + 1} / {total}
        </span>
        <button
          onClick={goNext}
          className="px-4 py-3 md:py-2 rounded-md text-sm font-medium bg-card-bg border border-card-border text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* Hints */}
      <p className="hidden md:block text-center text-xs text-muted mt-4">
        Use arrow keys to navigate, space to flip
      </p>
      <p className="md:hidden text-center text-xs text-muted mt-4">
        Tap card to flip, use buttons to navigate
      </p>
    </div>
  );
}
