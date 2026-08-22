"use client";

import { useState } from "react";
import { PanelLeft } from "lucide-react";
import { useMobileNav } from "@/hooks/useMobileNav";
import { chaptersData } from "./components/chaptersData";
import Sidebar from "./components/Sidebar";
import ProblemCard from "./components/ProblemCard";


export default function HigherMaths() {
  const [activeChapter, setActiveChapter] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mobileNav = useMobileNav();

  const chapter = chaptersData.find(
    (c) => c.id === activeChapter
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        chapters={chaptersData}
        activeChapter={activeChapter}
        setActiveChapter={setActiveChapter}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOpen={mobileNav.open}
        closeMobile={mobileNav.close}
      />

      <main className="min-w-0 max-w-4xl flex-1 px-4 py-6 sm:px-6 md:p-10">
        {/* Chapter list opener, for the viewports where the sidebar is a
            drawer rather than a rail */}
        <button
          type="button"
          onClick={() => mobileNav.setOpen(true)}
          className="sticky top-16 z-30 -mx-4 mb-6 flex w-[calc(100%+2rem)] items-center gap-2 border-b border-gray-200 bg-gray-50/90 px-4 py-3 text-sm font-medium text-gray-700 backdrop-blur transition-colors duration-200 hover:text-gray-900 sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden"
        >
          <PanelLeft className="h-4 w-4 text-pink-800" />
          Chapters
          {chapter && (
            <span className="ml-auto min-w-0 truncate text-xs text-gray-500">
              {chapter.title}
            </span>
          )}
        </button>

        <div className="mb-2 text-xs font-mono uppercase tracking-widest text-pink-800">
          Chapter {chapter?.id}
        </div>

        <h1 className="mb-6 text-3xl font-light text-gray-900 md:text-4xl">
          {chapter?.title}
        </h1>

        <div className="mb-8 h-[2px] w-16 bg-pink-800" />

        {chapter?.problems.map((prob, i) => (
          <ProblemCard key={prob.id} problem={prob} index={i} />
        ))}
      </main>
    </div>
  );
}
