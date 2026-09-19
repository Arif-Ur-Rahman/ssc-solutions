"use client";

import { useState } from "react";
import { BookOpen, Construction, PanelLeft } from "lucide-react";
import "katex/dist/katex.min.css";
import "./katex-overrides.css";
import { useMobileNav } from "@/hooks/useMobileNav";
import { chaptersData } from "./components/chaptersData";
import Sidebar from "./components/Sidebar";
import MathFit from "@/components/ui/MathFit";
import QuestionCard from "./components/QuestionCard";

// The first chapter that actually has answers written up.
const firstPopulated =
  chaptersData.find((c) => c.exercises.length > 0) ?? chaptersData[0];

export default function GeneralScience() {
  const [activeChapter, setActiveChapter] = useState<number | null>(
    firstPopulated?.id ?? null
  );
  const [activeExercise, setActiveExercise] = useState<string | null>(
    firstPopulated?.exercises[0]?.id ?? null
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
    <div className="textured flex min-h-screen bg-ink">
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

      <main className="min-w-0 flex-1 px-3 py-6 sm:px-6 md:px-10 md:py-10">
        <MathFit>
        <div className="mx-auto max-w-3xl">
          {/* ── Chapter list opener, for the viewports where the sidebar is a
              drawer rather than a rail ── */}
          <button
            type="button"
            onClick={() => mobileNav.setOpen(true)}
            className="sticky top-16 z-30 -mx-4 mb-6 flex w-[calc(100%+2rem)] items-center gap-2 border-b border-gold/8 bg-ink/90 px-4 py-3 text-sm font-medium text-muted backdrop-blur transition-colors duration-200 hover:text-parchment sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden"
          >
            <PanelLeft className="h-4 w-4 text-gold" />
            Chapters
            {chapter && (
              <span className="ml-auto min-w-0 truncate text-xs text-faint">
                {chapter.title}
              </span>
            )}
          </button>

          {/* ── Chapter header ── */}
          <div className="mb-2 flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.2em] text-gold">
            <BookOpen className="h-3 w-3" />
            {chapter ? `Chapter ${chapter.id}` : "General Science"}
          </div>

          <h1 className="text-4xl font-medium text-parchment md:text-5xl">
            {chapter?.title ?? "General Science"}
          </h1>
          <p className="mt-1 text-lg text-muted">
            {chapter?.bnTitle ?? "সাধারণ বিজ্ঞান"}
          </p>

          {exercise && (
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              <span className="rounded-md border border-gold/25 bg-gold/10 px-2.5 py-1 text-gold-soft">
                {exercise.bnId}
              </span>
              <span>{exercise.title}</span>
              <span className="text-faint">·</span>
              <span>{exercise.questions.length} questions</span>
              <span className="text-faint">·</span>
              <span className="text-faint">
                Book pages {exercise.bookPages}
              </span>
            </div>
          )}

          <div className="my-8 h-px w-full bg-gradient-to-r from-gold/40 via-gold/8 to-transparent" />

          {/* ── Questions, with a heading whenever the book's group changes ── */}
          {exercise ? (
            exercise.questions.map((question, i) => (
              <div key={question.id}>
                {question.group &&
                  question.group !== exercise.questions[i - 1]?.group && (
                    <h2 className="font-sans mt-8 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-faint first:mt-0">
                      {question.group}
                    </h2>
                  )}
                <QuestionCard question={question} />
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-gold/10 bg-parchment/[0.02] px-6 py-16 text-center">
              <Construction className="mx-auto mb-4 h-8 w-8 text-faint" />
              <p className="font-medium text-muted">
                Answers for this chapter are on the way.
              </p>
              <p className="mt-1 text-sm text-faint">
                Pick another chapter from the sidebar in the meantime.
              </p>
            </div>
          )}
        </div>
        </MathFit>
      </main>
    </div>
  );
}
