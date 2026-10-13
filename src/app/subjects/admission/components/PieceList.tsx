"use client";

import { useState } from "react";
import PieceView from "../../english/components/PieceView";
import type { Piece } from "../../english/components/englishData";

// A writing set holds several long model answers, so only one is shown at a
// time and the rest are listed above it to switch between.
export default function PieceList({ pieces }: { pieces: Piece[] }) {
  const [activeId, setActiveId] = useState(pieces[0].id);
  const piece = pieces.find((p) => p.id === activeId) ?? pieces[0];

  return (
    <>
      <div className="mb-8 grid gap-2 sm:grid-cols-2">
        {pieces.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={`flex gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors duration-200 ${
              p.id === piece.id
                ? "border-gold/40 bg-gold/[0.1] text-gold-soft"
                : "border-gold/8 bg-parchment/[0.02] text-muted hover:border-gold/20 hover:text-parchment"
            }`}
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
              {i + 1}
            </span>
            <span className="min-w-0">{p.title}</span>
          </button>
        ))}
      </div>

      <PieceView key={piece.id} piece={piece} />
    </>
  );
}
