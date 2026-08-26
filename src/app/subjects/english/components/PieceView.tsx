"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, HelpCircle } from "lucide-react";
import type { Piece, VocabEntry } from "./englishData";

/* One labelled line inside a vocabulary card: "Syn — result, outcome". */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex gap-2 text-[0.8rem] leading-relaxed">
      <span className="w-[3.2rem] shrink-0 font-mono text-[9px] uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <span className="min-w-0 flex-1 text-slate-400">{value}</span>
    </p>
  );
}

function VocabCard({ entry }: { entry: VocabEntry }) {
  const forms = entry.forms?.map((f) => `${f.label}: ${f.word}`).join(", ");

  return (
    <li className="rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-3">
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="font-semibold text-slate-100">{entry.word}</span>
        <span className="text-[0.95rem] text-emerald-300">{entry.bn}</span>
        <span className="ml-auto rounded-md border border-amber-400/20 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-amber-300">
          {entry.pos}
        </span>
      </div>

      <div className="mt-2 space-y-1">
        {entry.past && (
          <Detail
            label="Past"
            value={`${entry.past} · ${entry.pastParticiple ?? entry.past}`}
          />
        )}
        {forms && <Detail label="Forms" value={forms} />}
        {entry.synonyms && (
          <Detail label="Syn" value={entry.synonyms.join(", ")} />
        )}
        {entry.antonyms && (
          <Detail label="Ant" value={entry.antonyms.join(", ")} />
        )}
      </div>
    </li>
  );
}

export default function PieceView({ piece }: { piece: Piece }) {
  const [showVocab, setShowVocab] = useState(false);
  const vocab = piece.vocab ?? [];

  return (
    <article>
      {/* The instruction and the hints, the way the question paper prints them */}
      {(piece.prompt || piece.hints) && (
        <div className="mb-8 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 sm:px-6">
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

      {/* The hard words come before the writing, so the answer can be read
          with the meanings already in hand. Folded away by default: a student
          who knows the words should not have to scroll past them. */}
      {vocab.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
          <button
            type="button"
            onClick={() => setShowVocab((open) => !open)}
            aria-expanded={showVocab}
            className="flex w-full items-center gap-2 px-4 py-4 text-left transition-colors hover:bg-white/[0.02] sm:px-6"
          >
            <BookOpen className="h-3 w-3 shrink-0 text-amber-400" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
              {showVocab ? "Hide Synopsis" : "View Synopsis"}
            </span>
            <span className="text-[10px] text-slate-500">
              {vocab.length} words
            </span>
            <ChevronDown
              className={`ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                showVocab ? "rotate-180" : ""
              }`}
            />
          </button>

          {showVocab && (
            <div className="border-t border-white/8 px-4 pb-5 pt-4 sm:px-6">
              <p className="mb-4 text-xs leading-relaxed text-slate-500">
                The harder words of this piece, with their Bangla meanings and
                the forms the examiner asks for. Learn them first — the writing
                will read much easier afterwards.
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {vocab.map((entry) => (
                  <VocabCard key={entry.word} entry={entry} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-sky-400">
        Model Answer
      </div>

      {/* The answer is set on a white sheet in black ink, the way it would be
          written on the answer script — the surrounding interface stays dark,
          so the writing reads as paper laid on the page. */}
      <div className="rounded-2xl bg-white px-5 py-7 text-neutral-900 shadow-xl shadow-black/40 ring-1 ring-black/5 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <h2 className="mb-6 text-center font-hand text-[1.35rem] font-bold leading-snug sm:text-[1.6rem]">
          {piece.title}
        </h2>

        {/* The written piece itself is set in a hand, so it reads as a
            student's answer rather than as interface text. Generous leading
            keeps the larger handwriting face comfortable over long essays. */}
        <div className="space-y-4 font-hand text-[1.15rem] leading-[1.85] tracking-[0.01em] sm:text-[1.3rem]">
          {piece.body.map((block, i) => {
            if (block.type === "dialogue") {
              return (
                <div key={i} className="flex flex-col gap-x-3 sm:flex-row">
                  <span className="font-bold sm:w-28 sm:shrink-0">
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
