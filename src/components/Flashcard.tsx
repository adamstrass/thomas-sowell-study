"use client";

interface FlashcardProps {
  front: string;
  back: string;
  flipped: boolean;
  onFlip: () => void;
  isKnown: boolean;
  onToggleKnown: () => void;
}

export default function Flashcard({
  front,
  back,
  flipped,
  onFlip,
  isKnown,
  onToggleKnown,
}: FlashcardProps) {
  return (
    <div className="space-y-4">
      <div
        onClick={onFlip}
        className={`w-full min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center rounded-lg p-5 md:p-8 cursor-pointer transition-colors duration-300 ${
          flipped
            ? "border border-accent/30 bg-card-bg"
            : "border border-card-border bg-card-bg"
        }`}
      >
        {flipped ? (
          <>
            <p className="text-xs text-accent uppercase tracking-wider mb-4">
              Explanation
            </p>
            <p className="text-foreground/70 text-center leading-relaxed text-sm max-w-lg">
              {back}
            </p>
          </>
        ) : (
          <>
            <p className="text-xs text-muted uppercase tracking-wider mb-4">
              Concept
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-center text-accent">
              {front}
            </h3>
            <p className="text-xs text-muted mt-4 md:mt-6">Tap to flip</p>
          </>
        )}
      </div>

      <button
        onClick={onToggleKnown}
        className={`w-full py-3 md:py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          isKnown
            ? "bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-green-500/25"
            : "bg-card-bg border border-card-border text-foreground/50 hover:text-foreground hover:border-foreground/20"
        }`}
      >
        {isKnown ? "Marked as Known" : "Mark as Known"}
      </button>
    </div>
  );
}
