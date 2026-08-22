"use client";

import { X } from "lucide-react";

export default function Sidebar({
  chapters,
  activeChapter,
  setActiveChapter,
  sidebarOpen,
  setSidebarOpen,
  mobileOpen,
  closeMobile,
}: any) {
  // The drawer is always full width on a phone, so only the desktop rail hides
  // its labels when collapsed.
  const labelled = sidebarOpen ? "" : "md:hidden";

  return (
    <>
      {/* Backdrop — only ever visible while the drawer is open on mobile */}
      <div
        aria-hidden
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 max-w-[85vw] flex-col bg-gray-900 text-gray-100 transition-transform duration-300 md:sticky md:top-16 md:bottom-auto md:z-30 md:h-[calc(100vh-4rem)] md:max-w-none md:shrink-0 md:translate-x-0 md:transition-all ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${sidebarOpen ? "md:w-60" : "md:w-14"}`}
      >
        <div className="flex items-center gap-2 border-b border-gray-700 p-5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-pink-800 font-mono text-sm">
            ∑
          </div>
          <span className={`min-w-0 flex-1 truncate font-semibold tracking-wide ${labelled}`}>
            Higher Maths
          </span>
          <button
            onClick={closeMobile}
            aria-label="Close chapter list"
            className="-mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded text-gray-400 transition hover:bg-gray-800 hover:text-white md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          className={`px-5 pt-5 text-xs uppercase tracking-widest text-gray-400 ${labelled}`}
        >
          Chapters
        </div>

        <nav className="mt-2 flex-1 space-y-1 overflow-y-auto px-2 pb-4">
          {chapters.map((ch: any) => (
            <button
              key={ch.id}
              onClick={() => {
                setActiveChapter(ch.id);
                closeMobile();
              }}
              className={`flex w-full items-center gap-3 rounded px-3 py-2 text-left text-sm transition ${
                activeChapter === ch.id
                  ? "bg-pink-800 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-700 text-xs">
                {ch.id}
              </span>
              <span className={`min-w-0 flex-1 truncate ${labelled}`}>{ch.title}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-gray-700 p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            className="hidden w-full items-center justify-center rounded bg-gray-800 px-3 py-1 text-sm transition hover:bg-gray-700 md:flex"
          >
            {sidebarOpen ? "‹" : "›"}
          </button>
          <button
            onClick={closeMobile}
            className="flex w-full items-center justify-center gap-2 rounded bg-gray-800 px-3 py-2.5 text-sm transition hover:bg-gray-700 md:hidden"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>
      </aside>
    </>
  );
}
