"use client";

import { useState } from "react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function handleSelect(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRetry() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="text-center py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
          Your Score
        </p>
        <p className="text-5xl font-bold mb-2">
          <span className="text-accent">{score}</span>
          <span className="text-foreground/30"> / {questions.length}</span>
        </p>
        <p className="text-foreground/50 mb-8">
          {score === questions.length
            ? "Perfect score — you know this material cold."
            : score >= questions.length * 0.6
              ? "Solid understanding. Review the concepts you missed."
              : "Worth revisiting the key concepts above and trying again."}
        </p>
        <button
          onClick={handleRetry}
          className="px-6 py-2.5 rounded-md bg-accent text-background text-sm font-medium hover:bg-accent-dim transition-colors cursor-pointer"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted">
          Question {current + 1} of {questions.length}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < current
                  ? "bg-accent"
                  : i === current
                    ? "bg-accent/50"
                    : "bg-card-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-medium mb-5 leading-relaxed">
        {q.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((option, i) => {
          let classes =
            "w-full text-left px-4 py-4 md:py-3 rounded-lg border leading-relaxed transition-colors cursor-pointer";

          if (selected === null) {
            classes +=
              " border-card-border bg-card-bg hover:border-accent/40 hover:bg-card-bg/80";
          } else if (i === q.correctIndex) {
            classes += " border-green-500/60 bg-green-500/10 text-green-400";
          } else if (i === selected) {
            classes += " border-red-500/60 bg-red-500/10 text-red-400";
          } else {
            classes += " border-card-border bg-card-bg opacity-50";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={classes}
            >
              <span className="font-medium mr-2 text-foreground/30">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {selected !== null && (
        <div className="border border-card-border rounded-lg p-4 bg-card-bg/50 mb-6">
          <p className="text-foreground/60 leading-relaxed">
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next */}
      {selected !== null && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-md bg-accent text-background text-sm font-medium hover:bg-accent-dim transition-colors cursor-pointer"
          >
            {current + 1 >= questions.length ? "See Results" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}
