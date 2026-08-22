"use client";

import { useState } from "react";
import { BookOpen, Construction, PanelLeft } from "lucide-react";
import { useMobileNav } from "@/hooks/useMobileNav";
import { categories } from "./components/englishData";
import Sidebar from "./components/Sidebar";
import PieceView from "./components/PieceView";

export default function English() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activePiece, setActivePiece] = useState<string | null>(
    categories[0].pieces[0]?.id ?? null
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mobileNav = useMobileNav();

  const category = categories.find((c) => c.id === activeCategory);
  const piece =
    category?.pieces.find((p) => p.id === activePiece) ?? category?.pieces[0];

  // Opening a category jumps to its first piece, so the pane is never blank
  // for a category that does have writing in it.
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const next = categories.find((c) => c.id === categoryId);
    setActivePiece(next?.pieces[0]?.id ?? null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0f1e]">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        activePiece={piece?.id ?? null}
        onSelectCategory={handleSelectCategory}
        onSelectPiece={setActivePiece}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOpen={mobileNav.open}
        closeMobile={mobileNav.close}
      />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="mx-auto max-w-5xl">
          {/* ── Writing-type opener, for the viewports where the sidebar is a
              drawer rather than a rail ── */}
          <button
            type="button"
            onClick={() => mobileNav.setOpen(true)}
            className="sticky top-16 z-30 -mx-4 mb-6 flex w-[calc(100%+2rem)] items-center gap-2 border-b border-white/8 bg-[#0a0f1e]/90 px-4 py-3 text-sm font-medium text-slate-300 backdrop-blur transition-colors duration-200 hover:text-white sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden"
          >
            <PanelLeft className="h-4 w-4 text-sky-400" />
            Writing types
            {category && (
              <span className="ml-auto min-w-0 truncate text-xs text-slate-500">
                {category.title}
              </span>
            )}
          </button>

          {/* ── Header ── */}
          <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
            <BookOpen className="h-3 w-3" />
            {category?.title}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {piece?.title ?? category?.title}
          </h1>
          <p className="mt-1 text-lg text-slate-400">{category?.description}</p>

          <div className="my-8 h-px w-full bg-gradient-to-r from-sky-500/40 via-white/8 to-transparent" />

          {piece ? (
            <PieceView piece={piece} />
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
              <Construction className="mx-auto mb-4 h-8 w-8 text-slate-600" />
              <p className="font-medium text-slate-300">
                Writing for this section is on the way.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Pick another type from the sidebar in the meantime.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
