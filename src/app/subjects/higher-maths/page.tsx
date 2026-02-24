"use client";

import { useState } from "react";
import { chaptersData } from "./components/chaptersData";
import Sidebar from "./components/Sidebar";
import ProblemCard from "./components/ProblemCard";


export default function HigherMaths() {
  const [activeChapter, setActiveChapter] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
      />

      <main className="flex-1 p-10 max-w-4xl">
        <div className="mb-2 text-xs font-mono uppercase tracking-widest text-pink-800">
          Chapter {chapter?.id}
        </div>

        <h1 className="mb-6 text-4xl font-light text-gray-900">
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