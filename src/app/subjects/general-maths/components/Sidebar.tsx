"use client";

import { ChevronLeft, ChevronRight, Calculator, X } from "lucide-react";
import type { Chapter } from "./chaptersData";
import { toBn } from "./bn";

interface SidebarProps {
  chapters: Chapter[];
  activeChapter: number;
  activeExercise: string | null;
  onSelectChapter: (chapterId: number) => void;
  onSelectExercise: (exerciseId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  /** Below `md` the sidebar is an off-canvas drawer rather than a rail. */
  mobileOpen: boolean;
  closeMobile: () => void;
}

export default function Sidebar({
  chapters,
  activeChapter,
  activeExercise,
  onSelectChapter,
  onSelectExercise,
  sidebarOpen,
  setSidebarOpen,
  mobileOpen,
  closeMobile,
}: SidebarProps) {
  // The drawer is always full width on a phone, so only the desktop rail hides
  // its labels when collapsed.
  const labelled = sidebarOpen ? "" : "md:hidden";

  return (
    <>
      {/* Backdrop — only ever visible while the drawer is open on mobile */}
      <div
        aria-hidden
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col border-r border-white/8 bg-[#0d1120] transition-transform duration-300 md:sticky md:top-16 md:bottom-auto md:z-30 md:h-[calc(100vh-4rem)] md:max-w-none md:shrink-0 md:translate-x-0 md:transition-all ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${sidebarOpen ? "md:w-64" : "md:w-16"}`}
      >
        <div className="flex items-center gap-2.5 border-b border-white/8 p-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo-400/25 bg-indigo-500/15">
            <Calculator className="h-4 w-4 text-indigo-300" />
          </div>
          <span
            className={`min-w-0 flex-1 truncate font-semibold tracking-tight text-white ${labelled}`}
          >
            সাধারণ গণিত
          </span>
          <button
            onClick={closeMobile}
            aria-label="অধ্যায় তালিকা বন্ধ করো"
            className="-mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          className={`px-5 pt-5 text-[11px] font-semibold tracking-wide text-slate-600 ${labelled}`}
        >
          অধ্যায়সমূহ
        </div>

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
                    {toBn(ch.id)}
                  </span>
                  <span
                    className={`flex min-w-0 flex-1 items-center gap-2 ${labelled}`}
                  >
                    <span className="flex-1 truncate">{ch.title}</span>
                    {!hasContent && (
                      <span className="shrink-0 text-[10px] font-semibold text-slate-600">
                        শীঘ্রই
                      </span>
                    )}
                  </span>
                </button>

                {isActive && hasContent && (
                  <div
                    className={`mb-1 ml-[19px] space-y-0.5 border-l border-white/8 pl-3 pt-1 ${labelled}`}
                  >
                    {ch.exercises.map((ex) => (
                      <button
                        key={ex.id}
                        onClick={() => {
                          onSelectExercise(ex.id);
                          closeMobile();
                        }}
                        className={`block w-full truncate rounded-md px-2.5 py-1.5 text-left text-xs transition-colors duration-200 ${
                          activeExercise === ex.id
                            ? "bg-white/[0.06] text-indigo-300"
                            : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                        }`}
                      >
                        <span>{ex.bnId}</span>
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
            aria-label={sidebarOpen ? "তালিকা সংকুচিত করো" : "তালিকা প্রসারিত করো"}
            className="hidden w-full items-center justify-center rounded-lg bg-white/[0.04] py-1.5 text-slate-400 transition-colors duration-200 hover:bg-white/[0.08] hover:text-slate-200 md:flex"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={closeMobile}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/[0.04] py-2.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white md:hidden"
          >
            <X className="h-4 w-4" />
            বন্ধ করো
          </button>
        </div>
      </aside>
    </>
  );
}
