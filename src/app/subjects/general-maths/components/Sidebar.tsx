"use client";

import { ChevronLeft, ChevronRight, Calculator } from "lucide-react";
import type { Chapter } from "./chaptersData";

interface SidebarProps {
  chapters: Chapter[];
  activeChapter: number;
  activeExercise: string | null;
  onSelectChapter: (chapterId: number) => void;
  onSelectExercise: (exerciseId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  chapters,
  activeChapter,
  activeExercise,
  onSelectChapter,
  onSelectExercise,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } sticky top-0 flex h-screen shrink-0 flex-col border-r border-white/8 bg-[#0d1120] transition-all duration-300`}
    >
      <div className="flex items-center gap-2.5 border-b border-white/8 p-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo-400/25 bg-indigo-500/15">
          <Calculator className="h-4 w-4 text-indigo-300" />
        </div>
        {sidebarOpen && (
          <span className="truncate font-semibold tracking-tight text-white">
            General Math
          </span>
        )}
      </div>

      {sidebarOpen && (
        <div className="px-5 pt-5 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Chapters
        </div>
      )}

      <nav className="mt-2 flex-1 space-y-0.5 overflow-y-auto px-2 pb-4">
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;
          const hasContent = ch.exercises.length > 0;

          return (
            <div key={ch.id}>
              <button
                onClick={() => onSelectChapter(ch.id)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-200"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold ${
                    isActive
                      ? "bg-indigo-500/25 text-indigo-200"
                      : "bg-white/[0.05] text-slate-500"
                  }`}
                >
                  {ch.id}
                </span>
                {sidebarOpen && (
                  <>
                    <span className="flex-1 truncate">{ch.title}</span>
                    {!hasContent && (
                      <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wider text-slate-600">
                        soon
                      </span>
                    )}
                  </>
                )}
              </button>

              {sidebarOpen && isActive && hasContent && (
                <div className="mb-1 ml-[19px] space-y-0.5 border-l border-white/8 pl-3 pt-1">
                  {ch.exercises.map((ex) => (
                    <button
                      key={ex.id}
                      onClick={() => onSelectExercise(ex.id)}
                      className={`block w-full truncate rounded-md px-2.5 py-1.5 text-left text-xs transition-colors duration-200 ${
                        activeExercise === ex.id
                          ? "bg-white/[0.06] text-indigo-300"
                          : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                      }`}
                    >
                      <span className="font-mono">{ex.id}</span>
                      <span className="ml-2 text-slate-500">{ex.bnId}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-white/8 p-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="flex w-full items-center justify-center rounded-lg bg-white/[0.04] py-1.5 text-slate-400 transition-colors duration-200 hover:bg-white/[0.08] hover:text-slate-200"
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </div>
    </aside>
  );
}
