"use client";

import { useState } from "react";
import { BookOpen, Construction, PanelLeft } from "lucide-react";
import "katex/dist/katex.min.css";
import "./katex-overrides.css";
import { useMobileNav } from "@/hooks/useMobileNav";
import { chaptersData } from "./components/chaptersData";
import Sidebar from "./components/Sidebar";
import ProblemCard from "./components/ProblemCard";
import { toBn } from "./components/bn";
import FormulaSheet from "./components/FormulaSheet";

// The first chapter that actually has solutions written up.
const firstPopulated =
  chaptersData.find((c) => c.exercises.length > 0) ?? chaptersData[0];

export default function GeneralMaths() {
  const [activeChapter, setActiveChapter] = useState(firstPopulated.id);
  const [activeExercise, setActiveExercise] = useState<string | null>(
    firstPopulated.exercises[0]?.id ?? null
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mobileNav = useMobileNav();

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
        mobileOpen={mobileNav.open}
        closeMobile={mobileNav.close}
      />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="mx-auto max-w-3xl">
          {/* ── Chapter list opener, for the viewports where the sidebar is a
              drawer rather than a rail ── */}
          <button
            type="button"
            onClick={() => mobileNav.setOpen(true)}
            className="sticky top-16 z-30 -mx-4 mb-6 flex w-[calc(100%+2rem)] items-center gap-2 border-b border-white/8 bg-[#0a0f1e]/90 px-4 py-3 text-sm font-medium text-slate-300 backdrop-blur transition-colors duration-200 hover:text-white sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden"
          >
            <PanelLeft className="h-4 w-4 text-indigo-400" />
            অধ্যায়সমূহ
            {chapter && (
              <span className="ml-auto min-w-0 truncate text-xs text-slate-500">
                {chapter.title}
              </span>
            )}
          </button>

          {/* ── Chapter header ── */}
          <div className="mb-2 flex items-center gap-2 text-xs tracking-wide text-indigo-400">
            <BookOpen className="h-3 w-3" />
            অধ্যায় {chapter && toBn(chapter.id)}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {chapter?.title}
          </h1>

          {exercise && (
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400">
              <span className="rounded-md border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-1 text-indigo-300">
                {exercise.bnId}
              </span>
              <span>{exercise.title}</span>
              <span className="text-slate-700">·</span>
              {exercise.problems.length > 0 && (
                <>
                  <span>{toBn(exercise.problems.length)}টি সমস্যা</span>
                  <span className="text-slate-700">·</span>
                </>
              )}
              <span className="text-slate-500">
                বইয়ের পৃষ্ঠা {exercise.bookPages}
              </span>
            </div>
          )}

          <div className="my-8 h-px w-full bg-gradient-to-r from-indigo-500/40 via-white/8 to-transparent" />

          {/* ── The rules of the exercise, before any of its maths ── */}
          {exercise?.formulas && <FormulaSheet groups={exercise.formulas} />}

          {/* ── The book's own worked examples, before the exercise proper ── */}
          {exercise?.examples && (
            <section className="mb-10">
              <h2 className="mt-8 mb-4 text-sm font-semibold tracking-wide text-slate-500 first:mt-0">
                বইয়ের সমাধানকৃত উদাহরণ
              </h2>
              {exercise.examples.map((example) => (
                <ProblemCard
                  key={example.id}
                  problem={example}
                  label="উদাহরণ"
                />
              ))}
            </section>
          )}

          {/* ── Problems, with a heading whenever the book's group changes ── */}
          {exercise && exercise.problems.length > 0 ? (
            exercise.problems.map((problem, i) => (
              <div key={problem.id}>
                {problem.group !== exercise.problems[i - 1]?.group && (
                  <h2 className="mt-8 mb-4 text-sm font-semibold tracking-wide text-slate-500 first:mt-0">
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
                {exercise
                  ? "এই অনুশীলনীর সমাধান শীঘ্রই যোগ করা হবে।"
                  : "এই অধ্যায়ের সমাধান শীঘ্রই যোগ করা হবে।"}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {exercise
                  ? "ততক্ষণ উপরের সূত্রগুলো পড়ে নিতে পারো।"
                  : "ততক্ষণ পাশের তালিকা থেকে অন্য একটি অধ্যায় বেছে নাও।"}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
