"use client";

import { useState } from "react";
import { ChevronDown, Sigma } from "lucide-react";
import MathText from "./MathText";
import type { FormulaGroup } from "./chaptersData";
import { toBn } from "./bn";

export default function FormulaSheet({ groups }: { groups: FormulaGroup[] }) {
  const [open, setOpen] = useState(true);
  const count = groups.reduce((n, g) => n + g.formulas.length, 0);

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-amber-400/15 bg-amber-500/[0.04]">
      <button
        type="button"
        onClick={() => setOpen((shown) => !shown)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 px-4 py-4 text-left transition-colors duration-200 hover:bg-amber-500/[0.06] sm:px-6"
      >
        <Sigma className="h-3 w-3 shrink-0 text-amber-400" />
        <span className="text-[11px] font-semibold tracking-wide text-amber-400">
          {open ? "সূত্র লুকাও" : "সূত্র দেখাও"}
        </span>
        <span className="text-[11px] text-slate-500">{toBn(count)}টি সূত্র</span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-amber-400/15 px-4 pb-6 pt-4 sm:px-6">
          <p className="mb-5 text-xs leading-relaxed text-slate-500">
            এই অনুশীলনীর আগে বইয়ের আলোচনায় যে সূত্রগুলো এসেছে, সেগুলো একসঙ্গে।
            নিচের সমাধানগুলোতে সূত্রগুলো প্রমাণ ছাড়াই ব্যবহার করা হয়েছে — আগে
            একবার পড়ে নিলে প্রতিটি ধাপ পরেরটির সঙ্গে আপনিই মিলে যাবে।
          </p>

          <div className="space-y-6">
            {groups.map((group) => (
              <section key={group.title}>
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-amber-300/80">
                  {group.title}
                </h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {group.formulas.map((formula, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-3"
                    >
                      <div className="overflow-x-auto text-slate-100">
                        <MathText text={formula.statement} />
                      </div>
                      {formula.note && (
                        <p className="mt-1 overflow-x-auto text-[0.8rem] leading-relaxed text-slate-400">
                          <MathText text={formula.note} />
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
