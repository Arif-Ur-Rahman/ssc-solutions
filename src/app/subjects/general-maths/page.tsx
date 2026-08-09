"use client";

import { useState } from "react";
import { BookOpen, Construction } from "lucide-react";
import "katex/dist/katex.min.css";
import "./katex-overrides.css";
import { chaptersData } from "./components/chaptersData";
import Sidebar from "./components/Sidebar";
import ProblemCard from "./components/ProblemCard";

// The first chapter that actually has solutions written up.
const firstPopulated =
  chaptersData.find((c) => c.exercises.length > 0) ?? chaptersData[0];

export default function GeneralMaths() {
  const [activeChapter, setActiveChapter] = useState(firstPopulated.id);
  const [activeExercise, setActiveExercise] = useState<string | null>(
    firstPopulated.exercises[0]?.id ?? null
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chapter = chaptersData.find((c) => c.id === activeChapter);
  const exercise =
    chapter?.exercises.find((e) => e.id === activeExercise) ??
    chapter?.exercises[0];

  // Selecting a chapter jumps to its first exercise so the pane is never blank
  // for a chapter that does have content.
  const handleSelectChapter = (chapterId: number) => {
    setActiveChapter(chapterId);
    const next = chaptersData.find((c) => c.id === chapterId);
    setActiveExercise(next?.exercises[0]?.id ?? null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0f1e]">
      <Sidebar
        chapters={chaptersData}
        activeChapter={activeChapter}
        activeExercise={exercise?.id ?? null}
        onSelectChapter={handleSelectChapter}
        onSelectExercise={setActiveExercise}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="min-w-0 flex-1 px-6 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          {/* ── Chapter header ── */}
          <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            <BookOpen className="h-3 w-3" />
            Chapter {chapter?.id}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {chapter?.title}
          </h1>
          <p className="mt-1 text-lg text-slate-400">{chapter?.bnTitle}</p>

          {exercise && (
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400">
              <span className="rounded-md border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-1 text-indigo-300">
                {exercise.bnId}
              </span>
              <span>{exercise.title}</span>
              <span className="text-slate-700">·</span>
              <span>{exercise.problems.length} problems</span>
              <span className="text-slate-700">·</span>
              <span className="text-slate-500">
                Book pages {exercise.bookPages}
              </span>
            </div>
          )}

          <div className="my-8 h-px w-full bg-gradient-to-r from-indigo-500/40 via-white/8 to-transparent" />

          {/* ── Problems, with a heading whenever the book's group changes ── */}
          {exercise ? (
            exercise.problems.map((problem, i) => (
              <div key={problem.id}>
                {problem.group !== exercise.problems[i - 1]?.group && (
                  <h2 className="mt-8 mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 first:mt-0">
                    {problem.group}
                  </h2>
                )}
                <ProblemCard problem={problem} />
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
              <Construction className="mx-auto mb-4 h-8 w-8 text-slate-600" />
              <p className="font-medium text-slate-300">
                Solutions for this chapter are on the way.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Pick another chapter from the sidebar in the meantime.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
