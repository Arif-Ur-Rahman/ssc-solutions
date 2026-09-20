"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MathText from "./MathText";
// A question or a solution step is prose and maths, and in পরিসংখ্যান it may
// carry a সারণি too; `Line` draws whichever it finds.
import Line from "./Table";
import Figure from "./figures/Figure";
import type { Problem, Solution } from "./chaptersData";
import { toBn } from "./bn";

function SolutionBody({ solution }: { solution: Solution }) {
  return (
    <>
      <div className="space-y-1 leading-relaxed text-parchment">
        {solution.steps.map((step, i) => (
          <div key={i} className="overflow-x-auto">
            <Line text={step} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-gold/20 bg-gold/[0.07] px-4 py-3 text-parchment">
        <span className="text-[11px] font-semibold tracking-wide text-gold">
          উত্তর
        </span>
        <span className="min-w-0 overflow-x-auto">
          <MathText text={solution.answer} />
        </span>
      </div>
    </>
  );
}

// `label` names what the card holds — a problem from the exercise, or one of
// the book's worked examples, which are the same shape.
export default function ProblemCard({
  problem,
  label = "প্রশ্ন",
}: {
  problem: Problem;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl border border-gold/8 bg-parchment/[0.03] p-3 transition-colors duration-300 hover:border-gold/15 sm:p-6">
      <div className="mb-3 text-xs font-semibold tracking-wide text-gold">
        {label} {toBn(problem.id)}
      </div>

      <div className="mb-5 overflow-x-auto leading-relaxed text-parchment">
        <Line text={problem.question} />
      </div>

      {/* The book prints a figure with the question, not with the answer, so
          it sits above the solution toggle where a reader can work from it. */}
      {problem.figure && <Figure name={problem.figure} />}

      {problem.parts && (
        <ol className="mb-5 space-y-3">
          {problem.parts.map((part) => (
            <li key={part.label} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                {part.label}
              </span>
              <div className="min-w-0 flex-1 text-sm text-muted">
                <div className="overflow-x-auto">
                  <Line text={part.question} />
                </div>
                {part.figure && (
                  <div className="mt-3">
                    <Figure name={part.figure} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft transition-colors duration-200 hover:border-gold/50 hover:bg-gold/20 hover:text-gold-soft"
      >
        {open ? "সমাধান লুকাও" : "সমাধান দেখাও"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-5 rounded-xl border border-gold/8 border-l-2 border-l-gold/60 bg-parchment/[0.02] p-3 sm:p-5">
          <div className="mb-4 text-xs font-semibold tracking-wide text-gold">
            সমাধান
          </div>

          {problem.solution && <SolutionBody solution={problem.solution} />}

          {problem.parts?.map((part, i) => (
            <div
              key={part.label}
              className={i > 0 ? "mt-6 border-t border-gold/8 pt-5" : ""}
            >
              <div className="mb-3 flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                  {part.label}
                </span>
                <div className="min-w-0 flex-1 overflow-x-auto text-sm text-muted">
                  <Line text={part.question} />
                </div>
              </div>
              <SolutionBody solution={part.solution} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
