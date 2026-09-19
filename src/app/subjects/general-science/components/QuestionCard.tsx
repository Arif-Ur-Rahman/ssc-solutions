"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MathText from "./MathText";
import type { Question, QuestionType, Solution } from "./chaptersData";

const typeLabels: Record<QuestionType, string> = {
  mcq: "MCQ",
  short: "Short Question",
  descriptive: "Descriptive",
  creative: "Creative Question",
};

// Bengali option markers, the way the book labels its four choices.
const optionLabels = ["ক", "খ", "গ", "ঘ"];

function SolutionBody({ solution }: { solution: Solution }) {
  return (
    <>
      <div className="space-y-2 leading-relaxed text-parchment">
        {solution.steps.map((step, i) => (
          <div key={i} className="overflow-x-auto">
            <MathText text={step} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-gold/20 bg-gold/[0.07] px-4 py-3 text-parchment">
        <span className="font-sans font-semibold text-[10px] uppercase tracking-[0.2em] text-gold">
          Answer
        </span>
        <span className="min-w-0 overflow-x-auto">
          <MathText text={solution.answer} />
        </span>
      </div>
    </>
  );
}

export default function QuestionCard({ question }: { question: Question }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl border border-gold/8 bg-parchment/[0.03] p-4 transition-colors duration-300 hover:border-gold/15 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.2em] text-gold">
        <span>Question {question.id}</span>
        <span className="rounded-md border border-gold/10 bg-parchment/[0.05] px-2 py-0.5 text-[10px] text-muted">
          {typeLabels[question.type]}
        </span>
      </div>

      <div className="mb-5 overflow-x-auto leading-relaxed text-parchment">
        <MathText text={question.question} />
      </div>

      {question.options && (
        <ol className="mb-5 grid gap-2 sm:grid-cols-2">
          {question.options.map((option, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-gold/8 bg-parchment/[0.02] px-3 py-2"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                {optionLabels[i] ?? i + 1}
              </span>
              <span className="min-w-0 flex-1 overflow-x-auto text-sm text-muted">
                <MathText text={option} />
              </span>
            </li>
          ))}
        </ol>
      )}

      {question.parts && (
        <ol className="mb-5 space-y-3">
          {question.parts.map((part) => (
            <li key={part.label} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                {part.label}
              </span>
              <span className="min-w-0 flex-1 overflow-x-auto text-sm text-muted">
                <MathText text={part.question} />
              </span>
            </li>
          ))}
        </ol>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft transition-colors duration-200 hover:border-gold/50 hover:bg-gold/20 hover:text-gold-soft"
      >
        {open ? "Hide Answer" : "Show Answer"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-5 rounded-xl border border-gold/8 border-l-2 border-l-gold/60 bg-parchment/[0.02] p-4 sm:p-5">
          <div className="mb-4 font-sans font-semibold text-xs uppercase tracking-[0.2em] text-gold">
            Answer
          </div>

          {question.solution && <SolutionBody solution={question.solution} />}

          {question.parts?.map((part, i) => (
            <div
              key={part.label}
              className={i > 0 ? "mt-6 border-t border-gold/8 pt-5" : ""}
            >
              <div className="mb-3 flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                  {part.label}
                </span>
                <span className="min-w-0 flex-1 overflow-x-auto text-sm text-muted">
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
