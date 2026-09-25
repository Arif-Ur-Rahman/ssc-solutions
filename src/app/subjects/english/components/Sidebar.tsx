"use client";

import {
  AlignLeft,
  BookMarked,
  CaseSensitive,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Languages,
  Link,
  Mail,
  MessagesSquare,
  MoveRight,
  PenLine,
  Puzzle,
  Quote,
  ScrollText,
  Shuffle,
  SpellCheck,
  TextCursorInput,
  Type,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Section } from "./englishData";

const ICONS: Record<string, LucideIcon> = {
  AlignLeft,
  BookMarked,
  CaseSensitive,
  CircleHelp,
  Link,
  Mail,
  MessagesSquare,
  MoveRight,
  PenLine,
  Puzzle,
  Quote,
  ScrollText,
  Shuffle,
  SpellCheck,
  TextCursorInput,
  Type,
};

interface SidebarProps {
  sections: Section[];
  activeCategory: string;
  activePiece: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectPiece: (pieceId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  /** Below `md` the sidebar is an off-canvas drawer rather than a rail. */
  mobileOpen: boolean;
  closeMobile: () => void;
}

export default function Sidebar({
  sections,
  activeCategory,
  activePiece,
  onSelectCategory,
  onSelectPiece,
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
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col border-r border-gold/8 bg-surface transition-transform duration-300 md:sticky md:top-16 md:bottom-auto md:z-30 md:h-[calc(100vh-4rem)] md:max-w-none md:shrink-0 md:translate-x-0 md:transition-all ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${sidebarOpen ? "md:w-64" : "md:w-16"}`}
      >
        <div className="flex items-center gap-2.5 border-b border-gold/8 p-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/15">
            <Languages className="h-4 w-4 text-gold-soft" />
          </div>
          <span
            className={`min-w-0 flex-1 truncate font-semibold tracking-tight text-parchment ${labelled}`}
          >
            English
          </span>
          <button
            onClick={closeMobile}
            aria-label="Close topics"
            className="-mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-parchment/[0.06] hover:text-parchment md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          {sections.map((section) => (
            <div key={section.id} className="mt-3 first:mt-2">
              <div
                className={`px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-faint ${labelled}`}
              >
                {section.title}
              </div>
              {/* The collapsed rail has no room for a heading, so a rule marks
                  where one section ends and the next begins. */}
              <div
                className={`mx-2 mb-2 hidden h-px bg-gold/8 ${
                  sidebarOpen ? "" : "md:block"
                }`}
              />

              <div className="space-y-0.5">
                {section.categories.map((category) => {
                  const isOpen = activeCategory === category.id;
                  const Icon = ICONS[category.icon] ?? AlignLeft;

                  return (
                    <div key={category.id}>
                      <button
                        onClick={() => onSelectCategory(category.id)}
                        aria-expanded={isOpen}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-200 ${
                          isOpen
                            ? "bg-gold/15 text-gold-soft"
                            : "text-muted hover:bg-parchment/[0.04] hover:text-parchment"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                            isOpen ? "bg-gold/25 text-gold-soft" : "bg-parchment/[0.05] text-faint"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span
                          className={`flex min-w-0 flex-1 items-center gap-2 ${labelled}`}
                        >
                          <span className="flex-1 truncate">{category.title}</span>
                          <span className="shrink-0 text-[10px] font-semibold text-faint">
                            {category.pieces.length}
                          </span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          className={`mb-1 ml-[19px] space-y-0.5 border-l border-gold/8 pl-3 pt-1 ${labelled}`}
                        >
                          {category.pieces.map((piece) => (
                            <button
                              key={piece.id}
                              onClick={() => {
                                onSelectPiece(piece.id);
                                closeMobile();
                              }}
                              className={`block w-full rounded-md px-2.5 py-1.5 text-left text-xs leading-snug transition-colors duration-200 ${
                                activePiece === piece.id
                                  ? "bg-parchment/[0.06] text-gold-soft"
                                  : "text-faint hover:bg-parchment/[0.04] hover:text-muted"
                              }`}
                            >
                              {piece.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-gold/8 p-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            className="hidden w-full items-center justify-center rounded-lg bg-parchment/[0.04] py-1.5 text-muted transition-colors duration-200 hover:bg-parchment/[0.08] hover:text-parchment md:flex"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={closeMobile}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-parchment/[0.04] py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:bg-parchment/[0.08] hover:text-parchment md:hidden"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>
      </aside>
    </>
  );
}
