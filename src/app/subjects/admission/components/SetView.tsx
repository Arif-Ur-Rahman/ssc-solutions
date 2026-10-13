"use client";

import { useState } from "react";
import { BookOpen, ListChecks } from "lucide-react";
import PieceList from "./PieceList";
import QuestionCard from "./QuestionCard";
import type { Question, QuestionSet } from "./admissionData";

// A practice bank, with a sub-heading wherever the group changes.
function Practice({ questions }: { questions: Question[] }) {
  return (
    <>
      {questions.map((q, i) => (
        <div key={q.id}>
          {q.group && q.group !== questions[i - 1]?.group && (
            <h2 className="mb-4 mt-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold first:mt-0">
              {q.group}
            </h2>
          )}
          <QuestionCard question={q} index={i} />
        </div>
      ))}
    </>
  );
}

// A set holds lessons, questions or both. With both, they sit under two tabs
// so the practice bank is one tap away instead of below every lesson.
export default function SetView({ set }: { set: QuestionSet }) {
  const pieces = set.pieces ?? [];
  const questions = set.questions;
  const [tab, setTab] = useState<"lessons" | "practice">("lessons");

  if (!pieces.length) return <Practice questions={questions} />;
  if (!questions.length) return <PieceList pieces={pieces} />;

  const tabs = [
    { id: "lessons" as const, label: "Lessons", count: pieces.length, Icon: BookOpen },
    { id: "practice" as const, label: "Practice", count: questions.length, Icon: ListChecks },
  ];

  return (
    <>
      <div className="mb-8 inline-flex rounded-xl border border-gold/10 bg-parchment/[0.03] p-1">
        {tabs.map(({ id, label, count, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-pressed={tab === id}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              tab === id
                ? "bg-gold/15 text-gold-soft"
                : "text-muted hover:text-parchment"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
            <span className="text-[10px] font-semibold text-faint">{count}</span>
          </button>
        ))}
      </div>

      {tab === "lessons" ? (
        <PieceList pieces={pieces} />
      ) : (
        <Practice questions={questions} />
      )}
    </>
  );
}
