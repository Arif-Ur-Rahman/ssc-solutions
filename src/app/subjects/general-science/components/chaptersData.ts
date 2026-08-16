// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version), Class 9-10 General Science
// (সাধারণ বিজ্ঞান).
//
// Answers are written the way the textbook answers them: prose, with the
// occasional formula. Maths/chemistry notation is LaTeX between $…$ (inline)
// or $$…$$ (display); see MathText.tsx. Use String.raw for any string that
// contains backslashes so they survive verbatim.
//
// A question is one of four kinds:
//   "mcq"        — বহুনির্বাচনি, carries `options` (answer names the option)
//   "short"      — সংক্ষিপ্ত প্রশ্ন
//   "descriptive"— রচনামূলক / বর্ণনামূলক
//   "creative"   — সৃজনশীল, usually broken into `parts` (ক, খ, গ, ঘ)

export type QuestionType = "mcq" | "short" | "descriptive" | "creative";

export interface Solution {
  // Each string is one paragraph / one step of the answer.
  steps: string[];
  answer: string;
}

export interface Part {
  label: string;
  question: string;
  solution: Solution;
}

export interface Question {
  id: number;
  type: QuestionType;
  // Heading the book puts above a run of questions ("বহুনির্বাচনি প্রশ্ন", …).
  // Omitted when each question carries its own instruction line.
  group?: string;
  question: string;
  // Only for type "mcq".
  options?: string[];
  solution?: Solution;
  parts?: Part[];
}

// A named block of questions inside a chapter — the book's exercise section.
export interface Exercise {
  id: string;
  bnId: string;
  title: string;
  bookPages: string;
  questions: Question[];
}

export interface Chapter {
  id: number;
  title: string;
  bnTitle: string;
  exercises: Exercise[];
}

// ─────────────────────────────────────────────────────────────────────────
// Chapters. Fill `exercises` in as the write-ups land; a chapter with an
// empty array renders as "coming soon" in the sidebar and the main pane.
//
// Shape of a populated exercise, for reference:
//
// const exercise1: Exercise = {
//   id: "1",
//   bnId: "অনুশীলনী ১",
//   title: "Improved Lifestyle",
//   bookPages: "১২ – ১৪",
//   questions: [
//     {
//       id: 1,
//       type: "mcq",
//       group: "বহুনির্বাচনি প্রশ্ন",
//       question: "কোনটি শর্করা জাতীয় খাদ্য?",
//       options: ["চাল", "ডিম", "মাছ", "তেল"],
//       solution: {
//         steps: ["শর্করা জাতীয় খাদ্যের প্রধান উৎস শস্যদানা।"],
//         answer: "সঠিক উত্তর: ক) চাল",
//       },
//     },
//     {
//       id: 2,
//       type: "creative",
//       question: "উদ্দীপকটি পড়ে প্রশ্নগুলোর উত্তর দাও …",
//       parts: [
//         {
//           label: "ক",
//           question: "খাদ্য কাকে বলে?",
//           solution: { steps: ["…"], answer: "…" },
//         },
//       ],
//     },
//   ],
// };
// ─────────────────────────────────────────────────────────────────────────

export const chaptersData: Chapter[] = [];
