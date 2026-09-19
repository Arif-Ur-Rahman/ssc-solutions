"use client";

import { useState } from "react";
import MathText from "./MathText";

export default function ProblemCard({
  problem,
  index,
}: {
  problem: any;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl border border-gold/8 bg-parchment/[0.03] p-4 transition-colors duration-300 hover:border-gold/15 sm:p-6">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Problem {index + 1}
      </div>

      <div className="mb-4 overflow-x-auto text-base leading-relaxed text-parchment sm:text-lg">
        <MathText text={problem.question} />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft transition-colors duration-200 hover:border-gold/50 hover:bg-gold/20"
      >
        {open ? "Hide Solution" : "Show Solution"}
      </button>

      {open && (
        <div className="mt-5 rounded-r-lg border-l-2 border-gold/60 bg-parchment/[0.03] p-4 sm:p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Solution
          </div>

          <ol className="space-y-2 text-muted">
            {problem.solution.steps.map((step: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 overflow-x-auto">
                  <MathText text={step} />
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-gold/20 bg-gold/[0.07] px-4 py-3 text-base text-parchment sm:text-lg">
            <span className="text-[11px] font-semibold tracking-wide text-gold">
              Answer:
            </span>
            <span className="min-w-0 overflow-x-auto">
              <MathText text={problem.solution.answer} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}