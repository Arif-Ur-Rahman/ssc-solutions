"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MathText from "./MathText";
import type { Problem, Solution } from "./chaptersData";

function SolutionBody({ solution }: { solution: Solution }) {
  return (
    <>
      <div className="space-y-1 leading-relaxed text-slate-200">
        {solution.steps.map((step, i) => (
          <div key={i} className="overflow-x-auto">
            <MathText text={step} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-emerald-400/20 bg-emerald-500/[0.07] px-4 py-3 text-slate-100">
        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
          Answer
        </span>
        <span className="min-w-0 overflow-x-auto">
          <MathText text={solution.answer} />
        </span>
      </div>
    </>
  );
}

export default function ProblemCard({ problem }: { problem: Problem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/15">
      <div className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-400">
        Problem {problem.id}
      </div>

      <div className="mb-5 overflow-x-auto leading-relaxed text-slate-200">
        <MathText text={problem.question} />
      </div>

      {problem.parts && (
        <ol className="mb-5 space-y-3">
          {problem.parts.map((part) => (
            <li key={part.label} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-indigo-400/25 bg-indigo-500/10 text-[11px] font-semibold text-indigo-300">
                {part.label}
              </span>
              <span className="min-w-0 flex-1 overflow-x-auto text-sm text-slate-300">
                <MathText text={part.question} />
              </span>
            </li>
          ))}
        </ol>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 transition-colors duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/20 hover:text-indigo-200"
      >
        {open ? "Hide Solution" : "Show Solution"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-5 rounded-xl border border-white/8 border-l-2 border-l-indigo-400/60 bg-white/[0.02] p-5">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-indigo-400">
            Solution
          </div>

          {problem.solution && <SolutionBody solution={problem.solution} />}

          {problem.parts?.map((part, i) => (
            <div
              key={part.label}
              className={i > 0 ? "mt-6 border-t border-white/8 pt-5" : ""}
            >
              <div className="mb-3 flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-indigo-400/25 bg-indigo-500/10 text-[11px] font-semibold text-indigo-300">
                  {part.label}
                </span>
                <span className="min-w-0 flex-1 overflow-x-auto text-sm text-slate-400">
                  <MathText text={part.question} />
                </span>
              </div>
              <SolutionBody solution={part.solution} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
