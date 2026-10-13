"use client";

import { useState } from "react";
import { BookOpen, Construction, PanelLeft } from "lucide-react";
import "katex/dist/katex.min.css";
import { useMobileNav } from "@/hooks/useMobileNav";
import { categories, sections } from "./components/admissionData";
import Sidebar from "./components/Sidebar";
import SetView from "./components/SetView";

// Open on the first topic that has questions in it, rather than on an empty one.
const firstCategory = categories.find((c) => c.sets.length) ?? categories[0];

export default function Admission() {
  const [activeCategory, setActiveCategory] = useState(firstCategory.id);
  const [activeSet, setActiveSet] = useState<string | null>(
    firstCategory.sets[0]?.id ?? null
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mobileNav = useMobileNav();

  const category = categories.find((c) => c.id === activeCategory);
  const set = category?.sets.find((s) => s.id === activeSet) ?? category?.sets[0];

  // Opening a topic jumps to its first set, so the pane is never blank for a
  // topic that does have questions in it.
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const next = categories.find((c) => c.id === categoryId);
    setActiveSet(next?.sets[0]?.id ?? null);
  };

  return (
    <div className="textured flex min-h-screen bg-ink">
      <Sidebar
        sections={sections}
        activeCategory={activeCategory}
        activeSet={set?.id ?? null}
        onSelectCategory={handleSelectCategory}
        onSelectSet={setActiveSet}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOpen={mobileNav.open}
        closeMobile={mobileNav.close}
      />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="mx-auto max-w-4xl">
          {/* ── Topic opener, for the viewports where the sidebar is a
              drawer rather than a rail ── */}
          <button
            type="button"
            onClick={() => mobileNav.setOpen(true)}
            className="sticky top-16 z-30 -mx-4 mb-6 flex w-[calc(100%+2rem)] items-center gap-2 border-b border-gold/8 bg-ink/90 px-4 py-3 text-sm font-medium text-muted backdrop-blur transition-colors duration-200 hover:text-parchment sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden"
          >
            <PanelLeft className="h-4 w-4 text-gold" />
            Topics
            {category && (
              <span className="ml-auto min-w-0 truncate text-xs text-faint">
                {category.title}
              </span>
            )}
          </button>

          {/* ── Header ── */}
          <div className="mb-2 flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.2em] text-gold">
            <BookOpen className="h-3 w-3" />
            {category?.title}
          </div>

          <h1 className="text-4xl font-medium text-parchment md:text-5xl">
            {set?.title ?? category?.title}
          </h1>
          <p className="mt-1 text-lg text-muted">{category?.description}</p>

          <div className="my-8 h-px w-full bg-gradient-to-r from-gold/40 via-gold/8 to-transparent" />

          {set && (set.pieces?.length || set.questions.length) ? (
            <SetView key={set.id} set={set} />
          ) : (
            <div className="rounded-2xl border border-dashed border-gold/10 bg-parchment/[0.02] px-6 py-16 text-center">
              <Construction className="mx-auto mb-4 h-8 w-8 text-faint" />
              <p className="font-medium text-muted">
                Questions for this topic are on the way.
              </p>
              <p className="mt-1 text-sm text-faint">
                Pick another topic from the sidebar in the meantime.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
