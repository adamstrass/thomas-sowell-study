"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "sowell-study-reading-progress";

type ProgressMap = Record<string, string[]>; // bookId -> completedChapterNumbers[]

function load(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function save(data: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useReadingProgress(bookId: string, totalChapters: number) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const data = load();
    setCompleted(new Set(data[bookId] || []));
  }, [bookId]);

  const toggle = useCallback(
    (chapterKey: string) => {
      setCompleted((prev) => {
        const next = new Set(prev);
        if (next.has(chapterKey)) {
          next.delete(chapterKey);
        } else {
          next.add(chapterKey);
        }
        const data = load();
        data[bookId] = Array.from(next);
        save(data);
        return next;
      });
    },
    [bookId]
  );

  return {
    completed,
    toggle,
    completedCount: completed.size,
    totalChapters,
    percent:
      totalChapters > 0
        ? Math.round((completed.size / totalChapters) * 100)
        : 0,
  };
}

export function useAllReadingProgress() {
  const [data, setData] = useState<ProgressMap>({});

  useEffect(() => {
    setData(load());

    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY) setData(load());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return data;
}
