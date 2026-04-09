export const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "Economics":            { text: "text-amber-400",  bg: "bg-amber-400/10",  border: "border-amber-400/30" },
  "Race & Culture":       { text: "text-sky-400",    bg: "bg-sky-400/10",    border: "border-sky-400/30" },
  "Political Philosophy": { text: "text-rose-400",   bg: "bg-rose-400/10",   border: "border-rose-400/30" },
  "Social Policy":        { text: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
  "Education":            { text: "text-emerald-400",bg: "bg-emerald-400/10",border: "border-emerald-400/30" },
  "History & Culture":    { text: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
};

// For column topics / pages without a book category
export const defaultColor = { text: "text-accent", bg: "bg-accent/10", border: "border-accent/30" };

export function getCategoryColor(category: string) {
  return categoryColors[category] || defaultColor;
}
