// components/admissionData.ts
//
// College admission preparation, organised by topic the way the English page
// is: a section is one sidebar heading (English, Math), a category is one
// topic under it (Grammar, Algebra, …) and each set under a category is one
// group of questions that opens in the reading pane.
//
// Question text, options and explanations go through MathText, so inline
// maths can be written between single dollars ($x^2$) and display maths
// between double dollars.
//
// Writing sets hold `pieces` instead of `questions`: whole model answers in the
// English page's format, each with its vocabulary synopsis. A grammar set can
// hold both, lessons as `pieces` and a practice bank as `questions`, and the
// page then shows them under two tabs.

import type { Piece } from "../../english/components/englishData";
import { compositions } from "./writingData";
import { idiomsAndPhrases } from "./idiomsData";
import { idiomsTest } from "./idiomsTestData";
import { articleQuestions } from "./articlesData";
import { rightFormOfVerbsLessons, rightFormOfVerbsPractice } from "./rightFormOfVerbsData";

export interface Question {
  id: string;
  question: string;
  // Multiple-choice options in the order printed. Leave out for a written
  // question that is answered in full in `explanation`.
  options?: string[];
  // Index into `options` of the correct one.
  answer?: number;
  // How to reach the answer; shown when the reader reveals it.
  explanation?: string;
  // Where the question was asked, e.g. "Notre Dame College 2024".
  source?: string;
  // Sub-heading the question is listed under in a long practice bank.
  group?: string;
}

export interface QuestionSet {
  id: string;
  title: string;
  questions: Question[];
  pieces?: Piece[];
}

export interface Category {
  id: string;
  title: string;
  // lucide-react icon name; resolved in Sidebar.tsx.
  icon: string;
  description: string;
  sets: QuestionSet[];
}

export interface Section {
  id: string;
  title: string;
  categories: Category[];
}

const english: Category[] = [
  {
    id: "english-writing",
    title: "Writing",
    icon: "PenLine",
    description: "Paragraphs and compositions",
    sets: [
      { id: "writing-paragraph", title: "Paragraph", questions: [] },
      { id: "writing-composition", title: "Composition", questions: [], pieces: compositions },
    ],
  },
  {
    id: "english-grammar",
    title: "Grammar",
    icon: "SpellCheck",
    description: "Verbs, idioms, articles, prepositions and the rest of the grammar admission tests ask",
    sets: [
      {
        id: "grammar-right-form-of-verbs",
        title: "Right Forms of Verbs",
        pieces: rightFormOfVerbsLessons,
        questions: rightFormOfVerbsPractice,
      },
      {
        id: "grammar-idioms-and-phrases",
        title: "Idioms and Phrases",
        pieces: idiomsAndPhrases,
        questions: idiomsTest,
      },
      { id: "grammar-articles", title: "Articles", questions: articleQuestions },
      { id: "grammar-prepositions", title: "Prepositions", questions: [] },
      { id: "grammar-voice", title: "Voice", questions: [] },
      { id: "grammar-narration", title: "Narration", questions: [] },
      { id: "grammar-transformation", title: "Transformation of Sentences", questions: [] },
      { id: "grammar-tag-questions", title: "Tag Questions", questions: [] },
      { id: "grammar-synonyms-antonyms", title: "Synonyms and Antonyms", questions: [] },
      { id: "grammar-correction", title: "Sentence Correction", questions: [] },
    ],
  },
];

const math: Category[] = [
  {
    id: "math-arithmetic",
    title: "Arithmetic",
    icon: "Calculator",
    description: "Percentage, ratio, profit and loss, interest and averages",
    sets: [],
  },
  {
    id: "math-algebra",
    title: "Algebra",
    icon: "Sigma",
    description: "Formulas, factorisation, equations, indices and logarithms",
    sets: [],
  },
  {
    id: "math-geometry",
    title: "Geometry",
    icon: "Triangle",
    description: "Triangles, circles, polygons and mensuration",
    sets: [],
  },
  {
    id: "math-trigonometry",
    title: "Trigonometry",
    icon: "Radius",
    description: "Trigonometric ratios, identities, heights and distances",
    sets: [],
  },
];

export const sections: Section[] = [
  { id: "english", title: "English", categories: english },
  { id: "math", title: "Math", categories: math },
];

export const categories: Category[] = sections.flatMap((s) => s.categories);
