"use client";

import { HelpCircle } from "lucide-react";
import type { Piece } from "./englishData";

export default function PieceView({ piece }: { piece: Piece }) {
  return (
    <article>
      {/* The instruction and the hints, the way the question paper prints them */}
      {(piece.prompt || piece.hints) && (
        <div className="mb-8 rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5">
          <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-sky-400">
            <HelpCircle className="h-3 w-3" />
            Question
          </div>

          {piece.prompt && (
            <p className="leading-relaxed text-slate-300">{piece.prompt}</p>
          )}

          {piece.hints && (
            <ul className="mt-4 space-y-1.5">
              {piece.hints.map((hint, i) => (
                <li key={hint} className="flex gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-sky-400/20 bg-sky-500/10 text-[10px] font-semibold text-sky-300">
                    {String.fromCharCode(97 + i)}
                  </span>
                  <span className="min-w-0 flex-1">{hint}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-sky-400">
        Model Answer
      </div>

      {/* The answer is set on a white sheet in black ink, the way it would be
          written on the answer script — the surrounding interface stays dark,
          so the writing reads as paper laid on the page. */}
      <div className="rounded-2xl bg-white px-6 py-8 text-neutral-900 shadow-xl shadow-black/40 ring-1 ring-black/5 md:px-10 md:py-10">
        <h2 className="mb-6 text-center font-hand text-[1.6rem] font-bold leading-snug">
          {piece.title}
        </h2>

        {/* The written piece itself is set in a hand, so it reads as a
            student's answer rather than as interface text. Generous leading
            keeps the larger handwriting face comfortable over long essays. */}
        <div className="space-y-4 font-hand text-[1.3rem] leading-[1.85] tracking-[0.01em]">
          {piece.body.map((block, i) => {
            if (block.type === "dialogue") {
              return (
                <div key={i} className="flex gap-3">
                  <span className="w-28 shrink-0 font-bold">
                    {block.speaker}:
                  </span>
                  <span className="min-w-0 flex-1">{block.text}</span>
                </div>
              );
            }

            if (block.type === "label") {
              return (
                <p key={i} className="font-bold">
                  {block.text}
                </p>
              );
            }

            if (block.type === "note") {
              return (
                <p
                  key={i}
                  className="border-l-2 border-neutral-300 bg-neutral-50 px-4 py-3"
                >
                  <span className="mr-2 align-middle font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {block.label}
                  </span>
                  {block.text}
                </p>
              );
            }

            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
