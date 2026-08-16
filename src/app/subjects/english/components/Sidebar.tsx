"use client";

import {
  AlignLeft,
  BookMarked,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Languages,
  Mail,
  MessagesSquare,
  PenLine,
  ScrollText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Category } from "./englishData";

const ICONS: Record<string, LucideIcon> = {
  AlignLeft,
  BookMarked,
  MessagesSquare,
  PenLine,
  ScrollText,
  Mail,
};

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  activePiece: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectPiece: (pieceId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  activePiece,
  onSelectCategory,
  onSelectPiece,
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
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-500/15">
          <Languages className="h-4 w-4 text-sky-300" />
        </div>
        {sidebarOpen && (
          <span className="truncate font-semibold tracking-tight text-white">
            English
          </span>
        )}
      </div>

      {sidebarOpen && (
        <div className="px-5 pt-5 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Writing Types
        </div>
      )}

      <nav className="mt-2 flex-1 space-y-0.5 overflow-y-auto px-2 pb-4">
        {categories.map((category) => {
          const isOpen = activeCategory === category.id;
          const Icon = ICONS[category.icon] ?? AlignLeft;

          return (
            <div key={category.id}>
              <button
                onClick={() => onSelectCategory(category.id)}
                aria-expanded={isOpen}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-200 ${
                  isOpen
                    ? "bg-sky-500/15 text-sky-200"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                    isOpen ? "bg-sky-500/25 text-sky-200" : "bg-white/[0.05] text-slate-500"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {sidebarOpen && (
                  <>
                    <span className="flex-1 truncate">{category.title}</span>
                    <span className="shrink-0 text-[10px] font-semibold text-slate-600">
                      {category.pieces.length}
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </>
                )}
              </button>

              {sidebarOpen && isOpen && (
                <div className="mb-1 ml-[19px] space-y-0.5 border-l border-white/8 pl-3 pt-1">
                  {category.pieces.map((piece) => (
                    <button
                      key={piece.id}
                      onClick={() => onSelectPiece(piece.id)}
                      className={`block w-full rounded-md px-2.5 py-1.5 text-left text-xs leading-snug transition-colors duration-200 ${
                        activePiece === piece.id
                          ? "bg-white/[0.06] text-sky-300"
                          : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
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
