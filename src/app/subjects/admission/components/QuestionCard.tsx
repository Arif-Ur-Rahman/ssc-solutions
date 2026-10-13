"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import MathText from "../../general-maths/components/MathText";
import type { Question } from "./admissionData";

const LETTERS = ["ক", "খ", "গ", "ঘ", "ঙ"];

export default function QuestionCard({
  question,
  index,
}: {
  question: Question;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const hasAnswer = question.answer !== undefined || !!question.explanation;

  return (
    <div className="mb-4 rounded-2xl border border-gold/8 bg-parchment/[0.03] p-4 transition-colors duration-300 hover:border-gold/15 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Q{index + 1}
        </span>
        {question.source && (
          <span className="rounded-md border border-gold/10 bg-parchment/[0.05] px-2 py-0.5 text-[10px] text-muted">
            {question.source}
          </span>
        )}
      </div>

      <div className="text-parchment">
        <MathText text={question.question} />
      </div>

      {question.options && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {question.options.map((option, i) => {
            const correct = revealed && i === question.answer;
            return (
              <div
                key={i}
                className={`flex gap-3 rounded-lg border px-3 py-2 text-sm transition-colors duration-200 ${
                  correct
                    ? "border-gold/40 bg-gold/[0.1] text-gold-soft"
                    : "border-gold/8 bg-parchment/[0.02] text-muted"
                }`}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-[11px] font-semibold text-gold-soft">
                  {LETTERS[i] ?? i + 1}
                </span>
                <span className="min-w-0">
                  <MathText text={option} />
                </span>
              </div>
            );
          })}
        </div>
      )}

      {hasAnswer && (
        <button
          type="button"
          onClick={() => setRevealed(!revealed)}
          className="mt-5 flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft transition-colors duration-200 hover:border-gold/50 hover:bg-gold/20"
        >
          {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {revealed ? "Hide answer" : "Show answer"}
        </button>
      )}

      {revealed && question.explanation && (
        <div className="mt-5 rounded-xl border border-gold/8 border-l-2 border-l-gold/60 bg-parchment/[0.02] p-4 text-sm text-muted sm:p-5">
          <MathText text={question.explanation} />
        </div>
      )}
    </div>
  );
}
