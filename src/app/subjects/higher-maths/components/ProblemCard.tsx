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
    <div className="mb-6 rounded-lg border bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-3 text-xs font-mono uppercase tracking-widest text-yellow-600">
        Problem {index + 1}
      </div>

      <div className="mb-4 overflow-x-auto text-base leading-relaxed text-gray-800 sm:text-lg">
        <MathText text={problem.question} />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded border border-pink-800 px-4 py-2 text-sm text-pink-800 transition hover:bg-pink-800 hover:text-white"
      >
        {open ? "Hide Solution" : "Show Solution"}
      </button>

      {open && (
        <div className="mt-5 rounded-r-lg border-l-4 border-pink-800 bg-gray-50 p-4 sm:p-5">
          <div className="mb-3 text-xs font-mono uppercase tracking-widest text-pink-800">
            Solution
          </div>

          <ol className="space-y-2 text-gray-700">
            {problem.solution.steps.map((step: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-600">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 overflow-x-auto">
                  <MathText text={step} />
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 rounded bg-pink-50 p-3 text-base text-gray-900 sm:text-lg">
            <span className="font-mono text-xs uppercase text-yellow-600">
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