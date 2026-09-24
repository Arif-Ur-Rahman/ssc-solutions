// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 1 "বাস্তব সংখ্যা": অনুশীলনী ১ (book pages ১৮-১৯), followed by the
// chapter's নমুনা প্রশ্ন (book page ২০), numbered on from the exercise.
// Chapter 2 "সেট ও ফাংশন": অনুশীলনী ২.১ (book pages ৩১-৩২) and
// অনুশীলনী ২.২ (book pages ৪০-৪১).
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
// Chapter 5 "এক চলকবিশিষ্ট সমীকরণ": অনুশীলনী ৫.১ (book pages ৯৯-১০১) and
// অনুশীলনী ৫.২ (book pages ১০৭-১০৯), the latter followed by the chapter's
// নমুনা প্রশ্ন (book pages ১০৯-১১০), numbered on from the exercise.
// Chapter 6 "রেখা, কোণ ও ত্রিভুজ": অনুশীলনী ৬.১ (book page ১১৮), ৬.২ (book
// page ১২৩) and ৬.৩ (book pages ১৩২-১৩৪), the last followed by the chapter's
// নমুনা প্রশ্ন (book pages ১৩৪-১৩৫), numbered on from the exercise.
// Chapter 7 "ব্যবহারিক জ্যামিতি": অনুশীলনী ৭.১ (book pages ১৪৩-১৪৪) and
// অনুশীলনী ৭.২ (book pages ১৪৯-১৫০), the latter followed by the chapter's
// নমুনা প্রশ্ন (book page ১৫১), numbered on from the exercise.
// Chapter 9 "ত্রিকোণমিতিক অনুপাত": অনুশীলনী ৯.১ (book pages ১৮৪-১৮৬) and
// অনুশীলনী ৯.২ (book pages ১৯৪-১৯৫).
// Chapter 12 "দুই চলকবিশিষ্ট সরল সহসমীকরণ": অনুশীলনী ১২.১ (book pages ২২৮-২২৯),
// ১২.২ (book page ২৩৬), ১২.৩ (book page ২৪২) and ১২.৪ (book pages ২৪৬-২৪৭),
// the last followed by the chapter's নমুনা প্রশ্ন (book pages ২৪৭-২৪৮),
// numbered on from the exercise.
// Chapter 11 "বীজগাণিতিক অনুপাত ও সমানুপাত": অনুশীলনী ১১.১ (book pages ২১৬-২১৭)
// and অনুশীলনী ১১.২ (book pages ২২১-২২২), the latter followed by the chapter's
// নমুনা প্রশ্ন (book pages ২২২-২২৩), numbered on from the exercise.
// Chapter 10 "দূরত্ব ও উচ্চতা": অনুশীলনী ১০ (book pages ২০২-২০৩).
// Chapter 13 "সসীম ধারা": অনুশীলনী ১৩.১ (book pages ২৫৫-২৫৬) and
// অনুশীলনী ১৩.২ (book page ২৬৪), the latter followed by the chapter's
// নমুনা প্রশ্ন (book page ২৬৫), numbered on from the exercise.
// Chapter 16 "পরিমিতি": অনুশীলনী ১৬.১ (book pages ৩০০-৩০১) and
// অনুশীলনী ১৬.২ (book pages ৩১০-৩১২).
// Chapter 17 "পরিসংখ্যান": অনুশীলনী ১৭ (book pages ৩৪২-৩৪৩), followed by the
// chapter's নমুনা প্রশ্ন (book page ৩৪৪), numbered on from the exercise.
//
// Each exercise opens with the rules it rests on (`formulas`), taken from the
// theory pages before the exercise, so the derivations below can lean on them
// without restating them problem by problem.
//
// Solutions are written the way the textbook writes them: one line after
// another, each line a complete step of the derivation. Maths is LaTeX
// between $…$ (inline) or $$…$$ (display); see MathText.tsx. Strings use
// String.raw so backslashes survive verbatim.

export interface Solution {
  steps: string[];
  answer: string;
  // Key into `figures/scenes.ts`, drawn after the steps. In অধ্যায় ৭ the
  // finished construction *is* the answer, so it belongs behind the toggle
  // rather than above the question where it would give the answer away.
  figure?: string;
}

export interface Part {
  label: string;
  question: string;
  // Key into `figures/scenes.ts`, when the part carries a shape of its own
  // rather than sharing the one above the problem.
  figure?: string;
  solution: Solution;
}

export interface Problem {
  id: number;
  // Heading the book puts above a run of problems ("সরল করো", "প্রমাণ করো", …).
  // Omitted when each problem carries its own instruction line.
  group?: string;
  question: string;
  // Key into `figures/scenes.ts`. Geometry reads as a picture long before it
  // reads as a sentence, so in অধ্যায় ১৬ every problem carries one.
  figure?: string;
  solution?: Solution;
  parts?: Part[];
}

// One rule from the theory pages the exercise draws on, stated once so a
// student can read the maths without hunting back through the book.
export interface Formula {
  statement: string;
  // Why the rule matters, or the condition it only holds under.
  note?: string;
}

export interface FormulaGroup {
  title: string;
  formulas: Formula[];
}

// A worked example from the theory pages, printed with its full solution the
// way the book prints it — the exercise problems are variations on these.
export interface Example {
  // The উদাহরণ number the book gives it.
  id: number;
  question: string;
  figure?: string;
  solution?: Solution;
  parts?: Part[];
}

export interface Exercise {
  id: string;
  bnId: string;
  title: string;
  bookPages: string;
  // The rules of the chapter, shown above the problems.
  formulas?: FormulaGroup[];
  // The book's worked examples, shown between the rules and the problems.
  examples?: Example[];
  problems: Problem[];
}

export interface Chapter {
  id: number;
  title: string;
  exercises: Exercise[];
}

// ─────────────── অধ্যায় ১ · বাস্তব সংখ্যা ───────────────
//
// অধ্যায়ের একটিমাত্র অনুশীলনী, তার সঙ্গে বইয়ের নমুনা প্রশ্নগুলো অনুশীলনীর
// নম্বর ধরে টেনে নেওয়া হয়েছে। সংখ্যার শ্রেণি আর "কোনটি কোনটির মধ্যে" —
// এ দুইটি প্রশ্ন ছবিতে যত দ্রুত পড়া যায়, বাক্যে তত নয়; তাই কয়েকটি প্রশ্নে
// সংখ্যারেখা ও শ্রেণিবিন্যাসের চিত্র (`figures/scenes1.ts`) বসানো হলো।

const NUM_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const NUM_PROOF = "প্রমাণ ও নির্ণয় (৫ – ৭)";
const NUM_DEC = "দশমিক ও সাধারণ ভগ্নাংশে রূপান্তর (৮ – ১০)";
const NUM_OPS = "আবৃত দশমিকের যোগ, বিয়োগ, গুণ ও ভাগ (১১ – ১৪)";
const NUM_ROOT = "বর্গমূল ও শ্রেণিবিন্যাস (১৫ – ১৬)";
const NUM_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৭ – ২০)";
const NUM_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (২১ – ২২)";

const exercise1: Exercise = {
  id: "1",
  bnId: "অনুশীলনী ১",
  title: "বাস্তব সংখ্যা",
  bookPages: "১৮ – ২০",
  formulas: [
    {
      title: "সংখ্যাগুলো কে কোথায়",
      formulas: [
        {
          statement: String.raw`$$\mathbb{N}=\{1,2,3,4,\dots\}$$`,
          note: String.raw`স্বাভাবিক সংখ্যা বা ধনাত্মক অখণ্ড সংখ্যা। এদের মধ্যে $2,3,5,7,\dots$ মৌলিক এবং $4,6,8,9,\dots$ যৌগিক। দুইটি স্বাভাবিক সংখ্যার গ.সা.গু. $1$ হলে এদেরকে পরস্পর সহমৌলিক বলা হয়।`,
        },
        {
          statement: String.raw`$$\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}$$`,
          note: "শূন্যসহ সকল ধনাত্মক ও ঋণাত্মক অখণ্ড সংখ্যা মিলে পূর্ণসংখ্যা।",
        },
        {
          statement: String.raw`$$\frac{p}{q},\quad q\neq 0,\; q\neq 1$$`,
          note: String.raw`ভগ্নাংশ সংখ্যা, যেখানে $q$ দ্বারা $p$ নিঃশেষে বিভাজ্য নয়। $p<q$ হলে প্রকৃত, $p>q$ হলে অপ্রকৃত ভগ্নাংশ।`,
        },
        {
          statement: String.raw`$$\text{মূলদ}=\left\{\frac{p}{q}:p,q\in\mathbb{Z},\;q\neq 0\right\}$$`,
          note: "সকল পূর্ণসংখ্যা ও সকল ভগ্নাংশই মূলদ সংখ্যা। যে কোনো মূলদ সংখ্যাকে দুইটি সহমৌলিক সংখ্যার অনুপাত হিসেবেও লেখা যায়।",
        },
        {
          statement: String.raw`$$\sqrt{2},\;\sqrt{3},\;\frac{\sqrt{5}}{2},\;\dots$$`,
          note: String.raw`যে সংখ্যাকে $\frac{p}{q}$ আকারে প্রকাশ করা যায় না, সেটি অমূলদ। পূর্ণবর্গ নয় এরূপ যে কোনো স্বাভাবিক সংখ্যার বর্গমূল অমূলদ।`,
        },
        {
          statement: String.raw`$$\text{বাস্তব}=\text{মূলদ}\cup\text{অমূলদ}$$`,
          note: "সকল মূলদ ও সকল অমূলদ সংখ্যা একসঙ্গে বাস্তব সংখ্যা। শূন্য থেকে বড় হলে ধনাত্মক, ছোট হলে ঋণাত্মক, আর শূন্যসহ সকল ধনাত্মক সংখ্যা অঋণাত্মক।",
        },
      ],
    },
    {
      title: "দশমিক ভগ্নাংশ — কোনটি মূলদ, কোনটি নয়",
      formulas: [
        {
          statement: String.raw`$$0.12,\;\;3.4152$$`,
          note: "সসীম দশমিক ভগ্নাংশ — দশমিক বিন্দুর ডানে অঙ্কের সংখ্যা সসীম। প্রতিটি সসীম দশমিক মূলদ।",
        },
        {
          statement: String.raw`$$2.\dot{5}=2.555\dots,\qquad 3.\dot{1}2\dot{4}=3.124124\dots$$`,
          note: "আবৃত বা পৌনঃপুনিক দশমিক — একটি অঙ্ক আবৃত হলে তার উপর একটি বিন্দু, একাধিক অঙ্ক আবৃত হলে কেবল প্রথম ও শেষ অঙ্কের উপর বিন্দু। প্রতিটি আবৃত দশমিকও মূলদ।",
        },
        {
          statement: String.raw`$$\sqrt{2}=1.4142135\dots$$`,
          note: "অসীম অনাবৃত দশমিক — শেষও হয় না, পুনরাবৃত্তিও হয় না। এগুলোই অমূলদ সংখ্যা।",
        },
        {
          statement: String.raw`$$1.\dot{3}\;\;\text{বিশুদ্ধ},\qquad 4.23\dot{5}1\dot{2}\;\;\text{মিশ্র}$$`,
          note: "দশমিক বিন্দুর পর কেবল আবৃত অংশ থাকলে বিশুদ্ধ পৌনঃপুনিক, আগে কিছু অনাবৃত অঙ্ক থাকলে মিশ্র পৌনঃপুনিক ভগ্নাংশ।",
        },
      ],
    },
    {
      title: "আবৃত দশমিককে সাধারণ ভগ্নাংশে",
      formulas: [
        {
          statement: String.raw`$$\text{লব}=(\text{দশমিক বিন্দু বাদ দিয়ে পাওয়া সংখ্যা})-(\text{অনাবৃত অংশের সংখ্যা})$$`,
          note: "দশমিক ও পৌনঃপুনিক বিন্দু উঠিয়ে যে পূর্ণসংখ্যা পাওয়া যায়, তা থেকে আবৃত অংশ বাদ দিয়ে বাকি অঙ্ক দিয়ে গঠিত সংখ্যাটি বিয়োগ।",
        },
        {
          statement: String.raw`$$\text{হর}=\underbrace{9\cdots 9}_{\text{আবৃত অঙ্ক যতগুলো}}\;\underbrace{0\cdots 0}_{\text{অনাবৃত অঙ্ক যতগুলো}}$$`,
          note: "আবৃত অঙ্ক যতগুলো ততগুলো ৯, তার ডানে অনাবৃত অঙ্ক যতগুলো ততগুলো ০।",
        },
        {
          statement: String.raw`$$42.34\dot{7}\dot{8}=\frac{423478-4234}{9900}$$`,
          note: String.raw`আবৃত অঙ্ক দুইটি ($78$) — তাই দুইটি ৯; অনাবৃত অঙ্ক দুইটি ($34$) — তাই দুইটি ০। লবে $4234$ বিয়োগ হয়েছে, কারণ আবৃত অংশ বাদ দিলে $42.34$ থেকে $4234$ পাওয়া যায়।`,
        },
      ],
    },
    {
      title: "সদৃশ আবৃত দশমিক",
      formulas: [
        {
          statement: String.raw`$$\text{অনাবৃত অঙ্ক সংখ্যা}=\max(n_{1},n_{2},\dots)$$`,
          note: "প্রত্যেকটির অনাবৃত অংশ বাড়িয়ে সবচেয়ে বেশিটির সমান করতে হয়। সসীম দশমিকের ক্ষেত্রে ডানে শূন্য বসিয়ে বাড়ানো হয়।",
        },
        {
          statement: String.raw`$$\text{আবৃত অঙ্ক সংখ্যা}=\operatorname{ল.সা.গু.}(r_{1},r_{2},\dots)$$`,
          note: "আবৃত অংশগুলো বারবার লিখলে সংখ্যার মান বদলায় না, তাই প্রত্যেকটির আবৃত অংশকে ল.সা.গু. সংখ্যক অঙ্কে টেনে নেওয়া যায়।",
        },
      ],
    },
    {
      title: "চার প্রক্রিয়া",
      formulas: [
        {
          statement: String.raw`যোগ ও বিয়োগ — আগে সদৃশ করো`,
          note: "সদৃশ করার পর সসীম দশমিকের নিয়মেই যোগ বা বিয়োগ। এতে প্রাপ্ত ফল প্রকৃত ফল নয়।",
        },
        {
          statement: String.raw`ডানপ্রান্তের হাতের সংখ্যা শেষ অঙ্কে বসাও`,
          note: "সদৃশকৃত সংখ্যাগুলোর আবৃত অংশের সর্বডানের অঙ্কগুলো যোগ (বা বিয়োগ) করলে যে হাত থাকে, তা ফলের সর্বডানের অঙ্কের সাথে যোগ (বা তা থেকে বিয়োগ) করলেই প্রকৃত ফল।",
        },
        {
          statement: String.raw`গুণ ও ভাগ — আগে সাধারণ ভগ্নাংশে নামাও`,
          note: "আবৃত দশমিকগুলোকে সাধারণ ভগ্নাংশে পরিণত করে গুণ বা ভাগ সেরে ফলটিকে আবার দশমিকে প্রকাশ করতে হয়।",
        },
      ],
    },
    {
      title: "মান ও আসন্ন মান",
      formulas: [
        {
          statement: String.raw`$$5.4325893\dots\;\longrightarrow\;5.4325$$`,
          note: "চার দশমিক স্থান পর্যন্ত মান — যতগুলো স্থান চাওয়া হয়েছে ততগুলো অঙ্ক যেমন আছে তেমনই লেখা হয়।",
        },
        {
          statement: String.raw`$$5.4325893\dots\;\longrightarrow\;5.4326$$`,
          note: String.raw`চার দশমিক স্থান পর্যন্ত আসন্ন মান — পরের স্থানের অঙ্ক $5,6,7,8$ বা $9$ হলে শেষ অঙ্কের সাথে $1$ যোগ; $0,1,2,3$ বা $4$ হলে অঙ্কটি অপরিবর্তিত থাকে।`,
        },
      ],
    },
    {
      title: "বাস্তব সংখ্যার মৌলিক বিধি",
      formulas: [
        {
          statement: String.raw`$$a+b=b+a,\qquad ab=ba$$`,
          note: "বিনিময় বিধি — যোগ ও গুণে ক্রম বদলালে ফল বদলায় না।",
        },
        {
          statement: String.raw`$$(a+b)+c=a+(b+c),\qquad (ab)c=a(bc)$$`,
          note: "সংযোগ বিধি।",
        },
        {
          statement: String.raw`$$a(b+c)=ab+ac$$`,
          note: "বণ্টন বিধি।",
        },
        {
          statement: String.raw`$$a<b\Rightarrow a+c<b+c$$`,
          note: String.raw`অসমতায় উভয়পক্ষে একই সংখ্যা যোগ করলে দিক বদলায় না। তবে গুণে $c>0$ হলে $ac<bc$, আর $c<0$ হলে $ac>bc$।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ৪.
    {
      id: 1,
      question: String.raw`$\sqrt{3}$ এবং $4$ এর মধ্যে দুইটি অমূলদ সংখ্যা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`এখানে, $\sqrt{3}=1.7320508\dots$`,
          String.raw`মনে করি, $\sqrt{3}$ এবং $4$ এর মধ্যে যেকোনো দুইটি অমূলদ সংখ্যা $a$ ও $b$,`,
          String.raw`যেখানে $a=\sqrt{3}+1$ এবং $b=\sqrt{3}+2$।`,
          String.raw`অমূলদ সংখ্যার সাথে মূলদ সংখ্যা যোগ করলে যোগফলও অমূলদ হয়, সুতরাং $a$ ও $b$ উভয়ই অমূলদ সংখ্যা।`,
          String.raw`$$\text{অর্থাৎ } \sqrt{3}<\sqrt{3}+1<\sqrt{3}+2<4$$`,
          String.raw`$\therefore\;a$ ও $b$ দুইটিই নির্ণেয় অমূলদ সংখ্যা।`,
          String.raw`মন্তব্য: এরূপ অসংখ্য অমূলদ সংখ্যা নির্ণয় করা যায়।`,
        ],
        answer: String.raw`$\sqrt{3}+1$ এবং $\sqrt{3}+2$`,
      },
    },
    // উদাহরণ ২ — book pages ৪-৫.
    {
      id: 2,
      question: String.raw`প্রমাণ করো যে, যেকোনো চারটি ক্রমিক স্বাভাবিক সংখ্যার গুণফলের সাথে $1$ যোগ করলে যোগফল একটি পূর্ণবর্গ সংখ্যা হবে।`,
      solution: {
        steps: [
          String.raw`মনে করি, চারটি ক্রমিক স্বাভাবিক সংখ্যা যথাক্রমে $x,\;x+1,\;x+2,\;x+3$।`,
          String.raw`ক্রমিক সংখ্যা চারটির গুণফলের সাথে $1$ যোগ করলে পাওয়া যায়,`,
          String.raw`$$x(x+1)(x+2)(x+3)+1$$`,
          String.raw`$$=x(x+3)(x+1)(x+2)+1$$`,
          String.raw`$$=(x^{2}+3x)(x^{2}+3x+2)+1$$`,
          String.raw`$$=a(a+2)+1\qquad\left[\,x^{2}+3x=a\ \text{ধরে}\,\right]$$`,
          String.raw`$$=a^{2}+2a+1=(a+1)^{2}$$`,
          String.raw`$$=(x^{2}+3x+1)^{2}$$`,
          String.raw`যা একটি পূর্ণবর্গ সংখ্যা। সুতরাং যেকোনো চারটি ক্রমিক স্বাভাবিক সংখ্যার গুণফলের সাথে $1$ যোগ করলে যোগফল একটি পূর্ণবর্গ সংখ্যা হবে। (প্রমাণিত)`,
        ],
        answer: String.raw`$x(x+1)(x+2)(x+3)+1=(x^{2}+3x+1)^{2}$, একটি পূর্ণবর্গ সংখ্যা`,
      },
    },
    // উদাহরণ ৩ — book page ৭.
    {
      id: 3,
      question: String.raw`$\dfrac{3}{11}$ ও $\dfrac{95}{37}$ কে দশমিক ভগ্নাংশে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`$3$ কে $11$ দিয়ে ভাগ করি। $3$, $11$ এর চেয়ে ছোট বলে ভাগফলে $0$ ও দশমিক বিন্দু বসিয়ে $3$ এর ডানে $0$ বসালে $30$ হয়।`,
          String.raw`$$11\,)\;30\;(\;0.2727\dots$$`,
          String.raw`ভাগশেষ পর পর $8,\;3,\;8,\;3,\dots$ হয়ে ফিরে আসে, তাই ভাগফলে $27$ বারবার আসে।`,
          String.raw`$$\therefore\;\frac{3}{11}=0.2727\dots=0.\dot{2}\dot{7}$$`,
          String.raw`একইভাবে $95$ কে $37$ দিয়ে ভাগ করি।`,
          String.raw`$$37\,)\;95\;(\;2.567567\dots$$`,
          String.raw`$$\therefore\;\frac{95}{37}=2.567567\dots=2.\dot{5}6\dot{7}$$`,
        ],
        answer: String.raw`$\dfrac{3}{11}=0.\dot{2}\dot{7}$ এবং $\dfrac{95}{37}=2.\dot{5}6\dot{7}$`,
      },
    },
    // উদাহরণ ৪ — book pages ৭-৮.
    {
      id: 4,
      question: String.raw`$0.\dot{3}$, $0.\dot{2}\dot{4}$ এবং $42.34\dot{7}\dot{8}$ কে সাধারণ ভগ্নাংশে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`প্রথমে, $0.\dot{3}=0.3333\dots$`,
          String.raw`$$0.\dot{3}\times 10=3.333\dots,\qquad 0.\dot{3}\times 1=0.333\dots$$`,
          String.raw`বিয়োগ করে, $0.\dot{3}\times(10-1)=3$`,
          String.raw`$$\text{বা, } 0.\dot{3}\times 9=3\qquad\therefore\;0.\dot{3}=\frac{3}{9}=\frac{1}{3}$$`,
          String.raw`এবার, $0.\dot{2}\dot{4}=0.24242424\dots$`,
          String.raw`$$0.\dot{2}\dot{4}\times 100=24.2424\dots,\qquad 0.\dot{2}\dot{4}\times 1=0.2424\dots$$`,
          String.raw`বিয়োগ করে, $0.\dot{2}\dot{4}\times 99=24$`,
          String.raw`$$\therefore\;0.\dot{2}\dot{4}=\frac{24}{99}=\frac{8}{33}$$`,
          String.raw`শেষে, $42.34\dot{7}\dot{8}=42.34787878\dots$`,
          String.raw`$$42.34\dot{7}\dot{8}\times 10000=423478.787878\dots$$`,
          String.raw`$$42.34\dot{7}\dot{8}\times 100=4234.787878\dots$$`,
          String.raw`বিয়োগ করে, $42.34\dot{7}\dot{8}\times 9900=423478-4234=419244$`,
          String.raw`$$\therefore\;42.34\dot{7}\dot{8}=\frac{419244}{9900}=\frac{34937}{825}=42\frac{287}{825}$$`,
        ],
        answer: String.raw`$0.\dot{3}=\dfrac{1}{3}$, $\;0.\dot{2}\dot{4}=\dfrac{8}{33}$, $\;42.34\dot{7}\dot{8}=42\dfrac{287}{825}$`,
      },
    },
    // উদাহরণ ৫ — book page ৯.
    {
      id: 5,
      question: String.raw`$5.23\dot{4}5\dot{7}$ কে সাধারণ ভগ্নাংশে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`$$5.23\dot{4}5\dot{7}=5.23457457457\dots$$`,
          String.raw`$$5.23\dot{4}5\dot{7}\times 100000=523457.457457\dots$$`,
          String.raw`$$5.23\dot{4}5\dot{7}\times 100=523.457457\dots$$`,
          String.raw`বিয়োগ করে, $5.23\dot{4}5\dot{7}\times 99900=522934$`,
          String.raw`$$\therefore\;5.23\dot{4}5\dot{7}=\frac{522934}{99900}=\frac{261467}{49950}=5\frac{11717}{49950}$$`,
          String.raw`ব্যাখ্যা: দশমিক অংশে পাঁচটি অঙ্ক আছে বলে $100000$ দিয়ে, আর আবৃত অংশের বামে দুইটি অঙ্ক আছে বলে $100$ দিয়ে গুণ করা হয়েছে; তাই হর $(100000-100)=99900$।`,
        ],
        answer: String.raw`$5\dfrac{11717}{49950}$`,
      },
    },
    // উদাহরণ ৬ — book page ১০.
    {
      id: 6,
      question: String.raw`$45.2\dot{3}4\dot{6}$ কে সাধারণ ভগ্নাংশে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`আবৃত অঙ্ক তিনটি ($346$) এবং অনাবৃত অঙ্ক একটি ($2$), তাই হর হবে তিনটি ৯ ও একটি ০ নিয়ে $9990$।`,
          String.raw`লব হবে দশমিক বিন্দু উঠিয়ে পাওয়া $452346$ থেকে অনাবৃত অংশ দিয়ে গঠিত $452$ বিয়োগ করে।`,
          String.raw`$$45.2\dot{3}4\dot{6}=\frac{452346-452}{9990}=\frac{451894}{9990}$$`,
          String.raw`$$=\frac{225947}{4995}=45\frac{1172}{4995}$$`,
        ],
        answer: String.raw`$45\dfrac{1172}{4995}$`,
      },
    },
    // উদাহরণ ৭ — book page ১০.
    {
      id: 7,
      question: String.raw`$32.\dot{5}6\dot{7}$ কে সাধারণ ভগ্নাংশে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`আবৃত অঙ্ক তিনটি ($567$), অনাবৃত অঙ্ক নেই — তাই হর তিনটি ৯ নিয়ে $999$।`,
          String.raw`$$32.\dot{5}6\dot{7}=\frac{32567-32}{999}=\frac{32535}{999}$$`,
          String.raw`$$=\frac{3615}{111}=\frac{1205}{37}=32\frac{21}{37}$$`,
        ],
        answer: String.raw`$32\dfrac{21}{37}$`,
      },
    },
    // উদাহরণ ৮ — book page ১১.
    {
      id: 8,
      question: String.raw`$5.\dot{6}$, $7.3\dot{4}\dot{5}$ ও $10.78\dot{4}2\dot{3}$ কে সদৃশ আবৃত দশমিক ভগ্নাংশে পরিণত করো।`,
      solution: {
        steps: [
          String.raw`তিনটি ভগ্নাংশের অনাবৃত অংশের অঙ্ক সংখ্যা যথাক্রমে $0$, $1$ ও $2$; সবচেয়ে বেশি $2$।`,
          String.raw`আবৃত অংশের অঙ্ক সংখ্যা যথাক্রমে $1$, $2$ ও $3$; এদের ল.সা.গু. $6$।`,
          String.raw`সুতরাং প্রত্যেকটির অনাবৃত অংশ $2$ অঙ্কের এবং আবৃত অংশ $6$ অঙ্কের করতে হবে।`,
          String.raw`$$5.\dot{6}=5.66\dot{6}6666\dot{6}$$`,
          String.raw`$$7.3\dot{4}\dot{5}=7.34\dot{5}4545\dot{4}$$`,
          String.raw`$$10.78\dot{4}2\dot{3}=10.78\dot{4}2342\dot{3}$$`,
        ],
        answer: String.raw`$5.66\dot{6}6666\dot{6}$, $\;7.34\dot{5}4545\dot{4}$ ও $10.78\dot{4}2342\dot{3}$`,
      },
    },
    // উদাহরণ ৯ — book page ১১.
    {
      id: 9,
      question: String.raw`$1.7643$, $3.\dot{2}\dot{4}$ ও $2.78\dot{3}4\dot{6}$ কে সদৃশ আবৃত দশমিক ভগ্নাংশে পরিণত করো।`,
      solution: {
        steps: [
          String.raw`$1.7643$ সসীম, তাই দশমিক বিন্দুর পরের $4$টি অঙ্কই অনাবৃত — এখানে আবৃত অংশ নেই।`,
          String.raw`$3.\dot{2}\dot{4}$ এ অনাবৃত অঙ্ক $0$টি ও আবৃত অঙ্ক $2$টি; $2.78\dot{3}4\dot{6}$ এ অনাবৃত $2$টি ও আবৃত $3$টি।`,
          String.raw`অনাবৃত অঙ্কের সর্বোচ্চ সংখ্যা $4$ এবং আবৃত অঙ্ক $2$ ও $3$ এর ল.সা.গু. $6$।`,
          String.raw`$$1.7643=1.7643\dot{0}0000\dot{0}$$`,
          String.raw`$$3.\dot{2}\dot{4}=3.2424\dot{2}4242\dot{4}$$`,
          String.raw`$$2.78\dot{3}4\dot{6}=2.7834\dot{6}3463\dot{4}$$`,
          String.raw`মন্তব্য: সসীম দশমিককে সদৃশ করতে হলে দশমিক বিন্দুর ডানে প্রয়োজনীয় সংখ্যক শূন্য বসাতে হয়।`,
        ],
        answer: String.raw`$1.7643\dot{0}0000\dot{0}$, $\;3.2424\dot{2}4242\dot{4}$ ও $2.7834\dot{6}3463\dot{4}$`,
      },
    },
    // উদাহরণ ১০ — book page ১২.
    {
      id: 10,
      question: String.raw`$3.\dot{8}\dot{9}$, $2.1\dot{7}\dot{8}$ ও $5.89\dot{7}9\dot{8}$ যোগ করো।`,
      solution: {
        steps: [
          String.raw`এখানে অনাবৃত অংশের অঙ্ক সংখ্যা হবে $2$ এবং আবৃত অংশের অঙ্ক হবে $2$, $2$ ও $3$ এর ল.সা.গু. $6$।`,
          String.raw`প্রথমে তিনটি আবৃত দশমিককে সদৃশ করা হলো,`,
          String.raw`$$3.\dot{8}\dot{9}=3.89\dot{8}9898\dot{9}$$`,
          String.raw`$$2.1\dot{7}\dot{8}=2.17\dot{8}7878\dot{7}$$`,
          String.raw`$$5.89\dot{7}9\dot{8}=5.89\dot{7}9879\dot{8}$$`,
          String.raw`সসীম দশমিকের নিয়মে যোগ করে পাই $11.97576574$।`,
          String.raw`$$9+7+8=24\qquad\left[\,\text{আবৃত অংশের সর্বডানের অঙ্ক তিনটি}\,\right]$$`,
          String.raw`হাতে থাকে $2$; এই $2$ যোগফলের সর্বডানের অঙ্কের সাথে যোগ করতে হবে।`,
          String.raw`$$11.97576574+0.00000002=11.97576576$$`,
          String.raw`$$\therefore\;\text{যোগফল}=11.97\dot{5}7657\dot{6}=11.97\dot{5}7\dot{6}$$`,
        ],
        answer: String.raw`$11.97\dot{5}7\dot{6}$`,
      },
    },
    // উদাহরণ ১১ — book page ১৩.
    {
      id: 11,
      question: String.raw`$8.9\dot{4}7\dot{8}$, $2.346$ ও $4.\dot{7}\dot{1}$ যোগ করো।`,
      solution: {
        steps: [
          String.raw`অনাবৃত অংশ হবে $3$ অঙ্কের এবং আবৃত অংশ হবে $3$ ও $2$ এর ল.সা.গু. $6$ অঙ্কের।`,
          String.raw`$$8.9\dot{4}7\dot{8}=8.947\dot{8}4784\dot{7}$$`,
          String.raw`$$2.346=2.346\dot{0}0000\dot{0}$$`,
          String.raw`$$4.\dot{7}\dot{1}=4.717\dot{1}7171\dot{7}$$`,
          String.raw`সসীম দশমিকের নিয়মে যোগ করে পাই $16.011019564$।`,
          String.raw`$$8+0+1+1=10\qquad\left[\,\text{সর্বডানের অঙ্কগুলো, আগের হাতসহ}\,\right]$$`,
          String.raw`হাতে থাকে $1$, তা যোগফলের শেষ অঙ্কের সাথে যোগ করে,`,
          String.raw`$$16.011019564+0.000000001=16.011019565$$`,
          String.raw`$$\therefore\;\text{যোগফল}=16.011\dot{0}1956\dot{5}$$`,
        ],
        answer: String.raw`$16.011\dot{0}1956\dot{5}$`,
      },
    },
    // উদাহরণ ১২ — book pages ১৩-১৪.
    {
      id: 12,
      question: String.raw`$8.2\dot{4}\dot{3}$ থেকে $5.24\dot{6}7\dot{3}$ বিয়োগ করো।`,
      solution: {
        steps: [
          String.raw`এখানে অনাবৃত অংশের অঙ্ক সংখ্যা হবে $2$ এবং আবৃত অংশের অঙ্ক সংখ্যা হবে $2$ ও $3$ এর ল.সা.গু. $6$।`,
          String.raw`$$8.2\dot{4}\dot{3}=8.24\dot{3}4343\dot{4}$$`,
          String.raw`$$5.24\dot{6}7\dot{3}=5.24\dot{6}7367\dot{3}$$`,
          String.raw`সসীম দশমিকের নিয়মে বিয়োগ করে পাই $2.99669761$।`,
          String.raw`$$4-3\ \text{নয়, }\;3\ \text{থেকে}\ 6\ \text{বিয়োগ করলে হাতে}\ 1\ \text{নিতে হবে}$$`,
          String.raw`$$2.99669761-0.00000001=2.99669760$$`,
          String.raw`$$\therefore\;\text{বিয়োগফল}=2.99\dot{6}6976\dot{0}$$`,
        ],
        answer: String.raw`$2.99\dot{6}6976\dot{0}$`,
      },
    },
    // উদাহরণ ১৩ — book page ১৪.
    {
      id: 13,
      question: String.raw`$24.45\dot{6}4\dot{5}$ থেকে $16.\dot{4}3\dot{7}$ বিয়োগ করো।`,
      solution: {
        steps: [
          String.raw`অনাবৃত অংশ $2$ অঙ্কের এবং আবৃত অংশ $3$ অঙ্কের করলেই দুইটি সদৃশ হয়।`,
          String.raw`$$24.45\dot{6}4\dot{5}=24.45\dot{6}4\dot{5}$$`,
          String.raw`$$16.\dot{4}3\dot{7}=16.43\dot{7}4\dot{3}$$`,
          String.raw`বিয়োগ করে পাই $8.01902$।`,
          String.raw`$$6\ \text{থেকে}\ 7\ \text{বিয়োগ করলে হাতে}\ 1\ \text{নিতে হবে}$$`,
          String.raw`$$8.01902-0.00001=8.01901$$`,
          String.raw`$$\therefore\;\text{বিয়োগফল}=8.01\dot{9}0\dot{1}$$`,
        ],
        answer: String.raw`$8.01\dot{9}0\dot{1}$`,
      },
    },
    // উদাহরণ ১৪ — book page ১৪.
    {
      id: 14,
      question: String.raw`$4.\dot{3}$ কে $5.\dot{7}$ দ্বারা গুণ করো।`,
      solution: {
        steps: [
          String.raw`$$4.\dot{3}=\frac{43-4}{9}=\frac{39}{9}=\frac{13}{3}$$`,
          String.raw`$$5.\dot{7}=\frac{57-5}{9}=\frac{52}{9}$$`,
          String.raw`$$\therefore\;4.\dot{3}\times 5.\dot{7}=\frac{13}{3}\times\frac{52}{9}=\frac{676}{27}=25.\dot{0}3\dot{7}$$`,
        ],
        answer: String.raw`$25.\dot{0}3\dot{7}$`,
      },
    },
    // উদাহরণ ১৫ — book page ১৫.
    {
      id: 15,
      question: String.raw`$0.2\dot{8}$ কে $42.\dot{1}\dot{8}$ দ্বারা গুণ করো।`,
      solution: {
        steps: [
          String.raw`$$0.2\dot{8}=\frac{28-2}{90}=\frac{26}{90}=\frac{13}{45}$$`,
          String.raw`$$42.\dot{1}\dot{8}=\frac{4218-42}{99}=\frac{4176}{99}=\frac{464}{11}$$`,
          String.raw`$$\therefore\;0.2\dot{8}\times 42.\dot{1}\dot{8}=\frac{13}{45}\times\frac{464}{11}=\frac{6032}{495}=12.1\dot{8}\dot{5}$$`,
        ],
        answer: String.raw`$12.1\dot{8}\dot{5}$`,
      },
    },
    // উদাহরণ ১৬ — book page ১৫.
    {
      id: 16,
      question: String.raw`$2.5\times 4.3\dot{5}\times 1.2\dot{3}\dot{4}$ কত?`,
      solution: {
        steps: [
          String.raw`$$2.5=\frac{25}{10}=\frac{5}{2}$$`,
          String.raw`$$4.3\dot{5}=\frac{435-43}{90}=\frac{392}{90}$$`,
          String.raw`$$1.2\dot{3}\dot{4}=\frac{1234-12}{990}=\frac{1222}{990}=\frac{611}{495}$$`,
          String.raw`$$\therefore\;2.5\times 4.3\dot{5}\times 1.2\dot{3}\dot{4}=\frac{5}{2}\times\frac{392}{90}\times\frac{611}{495}$$`,
          String.raw`$$=\frac{119756}{8910}=13.440628\dots$$`,
        ],
        answer: String.raw`$13.440628$ (প্রায়)`,
      },
    },
    // উদাহরণ ১৭ — book page ১৫.
    {
      id: 17,
      question: String.raw`$7.\dot{3}\dot{2}$ কে $0.2\dot{7}$ দ্বারা ভাগ করো।`,
      solution: {
        steps: [
          String.raw`$$7.\dot{3}\dot{2}=\frac{732-7}{99}=\frac{725}{99}$$`,
          String.raw`$$0.2\dot{7}=\frac{27-2}{90}=\frac{25}{90}=\frac{5}{18}$$`,
          String.raw`$$\therefore\;7.\dot{3}\dot{2}\div 0.2\dot{7}=\frac{725}{99}\div\frac{5}{18}=\frac{725}{99}\times\frac{18}{5}=\frac{290}{11}=26.\dot{3}\dot{6}$$`,
        ],
        answer: String.raw`$26.\dot{3}\dot{6}$`,
      },
    },
    // উদাহরণ ১৮ — book page ১৬.
    {
      id: 18,
      question: String.raw`$2.\dot{2}71\dot{8}$ কে $1.9\dot{1}\dot{2}$ দ্বারা ভাগ করো।`,
      solution: {
        steps: [
          String.raw`$$2.\dot{2}71\dot{8}=\frac{22718-2}{9999}=\frac{22716}{9999}$$`,
          String.raw`$$1.9\dot{1}\dot{2}=\frac{1912-19}{990}=\frac{1893}{990}$$`,
          String.raw`$$\therefore\;2.\dot{2}71\dot{8}\div 1.9\dot{1}\dot{2}=\frac{22716}{9999}\times\frac{990}{1893}=\frac{120}{101}=1.\dot{1}88\dot{1}$$`,
        ],
        answer: String.raw`$1.\dot{1}88\dot{1}$`,
      },
    },
    // উদাহরণ ১৯ — book page ১৬.
    {
      id: 19,
      question: String.raw`$9.45$ কে $2.8\dot{6}\dot{3}$ দ্বারা ভাগ করো।`,
      solution: {
        steps: [
          String.raw`$$9.45=\frac{945}{100}$$`,
          String.raw`$$2.8\dot{6}\dot{3}=\frac{2863-28}{990}=\frac{2835}{990}$$`,
          String.raw`$$\therefore\;9.45\div 2.8\dot{6}\dot{3}=\frac{945}{100}\times\frac{990}{2835}=\frac{189\times 99}{2\times 2835}=\frac{33}{10}=3.3$$`,
          String.raw`মন্তব্য: আবৃত দশমিক ভগ্নাংশের গুণফল ও ভাগফল আবৃত দশমিক ভগ্নাংশ নাও হতে পারে।`,
        ],
        answer: String.raw`$3.3$`,
      },
    },
    // উদাহরণ ২০ — book pages ১৭-১৮.
    {
      id: 20,
      question: String.raw`$13$ এর বর্গমূল নির্ণয় করো এবং তিন দশমিক স্থান পর্যন্ত আসন্ন মান লিখো।`,
      solution: {
        steps: [
          String.raw`বর্গমূল নির্ণয়ের ভাগ পদ্ধতিতে,`,
          String.raw`$$3\,)\;13\;(\;3.605551\dots$$`,
          String.raw`$$\sqrt{13}=3.605551\dots$$`,
          String.raw`যাচাই: $3.605^{2}=12.996025$ এবং $3.606^{2}=13.003236$, অর্থাৎ $3.605<\sqrt{13}<3.606$।`,
          String.raw`তিন দশমিক স্থান পর্যন্ত আসন্ন মান বের করতে চতুর্থ স্থানের অঙ্ক দেখতে হয়; এখানে তা $5$, তাই তৃতীয় স্থানের অঙ্কের সাথে $1$ যোগ হবে।`,
          String.raw`$$\therefore\;\text{আসন্ন মান}=3.606$$`,
        ],
        answer: String.raw`$\sqrt{13}=3.605551\dots$; তিন দশমিক স্থান পর্যন্ত আসন্ন মান $3.606$`,
      },
    },
    // উদাহরণ ২১ — book page ১৮.
    {
      id: 21,
      question: String.raw`$4.4623845\dots$ এর $1,2,3,4$ ও $5$ দশমিক স্থান পর্যন্ত মান ও আসন্ন মান কত?`,
      solution: {
        steps: [
          String.raw`এক দশমিক স্থান পর্যন্ত মান $4.4$ এবং আসন্ন মান $4.5$।`,
          String.raw`দুই দশমিক স্থান পর্যন্ত মান $4.46$ এবং আসন্ন মান $4.46$।`,
          String.raw`তিন দশমিক স্থান পর্যন্ত মান $4.462$ এবং আসন্ন মান $4.462$।`,
          String.raw`চার দশমিক স্থান পর্যন্ত মান $4.4623$ এবং আসন্ন মান $4.4624$।`,
          String.raw`পাঁচ দশমিক স্থান পর্যন্ত মান $4.46238$ এবং আসন্ন মান $4.46238$।`,
          String.raw`লক্ষ করো, পরবর্তী স্থানের অঙ্ক $5$ বা তার বেশি হলেই কেবল শেষ অঙ্কটি এক বাড়ে — তাই কোথাও দুইটি মান একই, কোথাও আলাদা।`,
        ],
        answer: String.raw`$4.4$ ও $4.5$; $\;4.46$ ও $4.46$; $\;4.462$ ও $4.462$; $\;4.4623$ ও $4.4624$; $\;4.46238$ ও $4.46238$`,
      },
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (1 – 4) ───────────────
    {
      id: 1,
      group: NUM_MCQ,
      question: String.raw`নিচের কোনটি অমূলদ সংখ্যা?
ক) $0.\dot{3}$  খ) $\sqrt{\dfrac{16}{9}}$  গ) $\sqrt[3]{\dfrac{8}{27}}$  ঘ) $\dfrac{5}{\sqrt{3}}$`,
      figure: "real-classes",
      solution: {
        steps: [
          String.raw`$$\text{ক) } 0.\dot{3}=\frac{3}{9}=\frac{1}{3}\qquad\left[\text{মূলদ}\right]$$`,
          String.raw`$$\text{খ) } \sqrt{\frac{16}{9}}=\frac{4}{3}\qquad\left[\text{মূলদ}\right]$$`,
          String.raw`$$\text{গ) } \sqrt[3]{\frac{8}{27}}=\frac{2}{3}\qquad\left[\text{মূলদ}\right]$$`,
          String.raw`$$\text{ঘ) } \frac{5}{\sqrt{3}}=\frac{5\sqrt{3}}{3}$$`,
          String.raw`$\sqrt{3}$ অমূলদ এবং অমূলদ সংখ্যাকে শূন্য নয় এমন মূলদ সংখ্যা দিয়ে গুণ বা ভাগ করলে ফলও অমূলদ হয়।`,
          String.raw`$\therefore\;\dfrac{5}{\sqrt{3}}$ একটি অমূলদ সংখ্যা।`,
        ],
        answer: String.raw`ঘ) $\dfrac{5}{\sqrt{3}}$`,
      },
    },
    {
      id: 2,
      group: NUM_MCQ,
      question: String.raw`$a,\;b,\;c,\;d$ চারটি ক্রমিক স্বাভাবিক সংখ্যা হলে নিচের কোনটি পূর্ণবর্গ সংখ্যা?
ক) $abcd$  খ) $ab+cd$  গ) $abcd+1$  ঘ) $abcd-1$`,
      solution: {
        steps: [
          String.raw`ধরি, $a=x,\;b=x+1,\;c=x+2,\;d=x+3$।`,
          String.raw`$$abcd+1=x(x+1)(x+2)(x+3)+1$$`,
          String.raw`$$=(x^{2}+3x)(x^{2}+3x+2)+1$$`,
          String.raw`$$=a_{1}(a_{1}+2)+1\qquad\left[\,x^{2}+3x=a_{1}\ \text{ধরে}\,\right]$$`,
          String.raw`$$=(a_{1}+1)^{2}=(x^{2}+3x+1)^{2}$$`,
          String.raw`যা সর্বদা একটি পূর্ণবর্গ সংখ্যা (উদাহরণ ২ দ্রষ্টব্য)।`,
        ],
        answer: String.raw`গ) $abcd+1$`,
      },
    },
    {
      id: 3,
      group: NUM_MCQ,
      question: String.raw`$1$ থেকে $10$ পর্যন্ত মৌলিক সংখ্যা কয়টি?
ক) $3$  খ) $4$  গ) $5$  ঘ) $6$`,
      solution: {
        steps: [
          String.raw`যে স্বাভাবিক সংখ্যার $1$ ও সেই সংখ্যাটি ছাড়া আর কোনো গুণনীয়ক নেই, তাকে মৌলিক সংখ্যা বলে; $1$ মৌলিক নয়।`,
          String.raw`$1$ থেকে $10$ পর্যন্ত মৌলিক সংখ্যাগুলো $2,\;3,\;5,\;7$।`,
          String.raw`$\therefore$ মৌলিক সংখ্যা $4$টি।`,
        ],
        answer: String.raw`খ) $4$`,
      },
    },
    {
      id: 4,
      group: NUM_MCQ,
      question: String.raw`$a$ ও $b$ দুইটি পূর্ণসংখ্যা হলে $a^{2}+b^{2}$ এর সাথে নিচের কোনটি যোগ করলে যোগফল একটি পূর্ণবর্গ সংখ্যা হবে?
ক) $-ab$  খ) $ab$  গ) $2ab$  ঘ) $ab$`,
      solution: {
        steps: [
          String.raw`$$a^{2}+b^{2}+2ab=(a+b)^{2}$$`,
          String.raw`$a$ ও $b$ পূর্ণসংখ্যা বলে $(a+b)$ও পূর্ণসংখ্যা, সুতরাং $(a+b)^{2}$ একটি পূর্ণবর্গ সংখ্যা।`,
          String.raw`বাকি অপশনগুলোতে $a^{2}+b^{2}-ab$ বা $a^{2}+b^{2}+ab$ পাওয়া যায়, যেগুলো সব মানের জন্য পূর্ণবর্গ নয় — যেমন $a=1,\;b=2$ হলে $1+4+2=7$।`,
        ],
        answer: String.raw`গ) $2ab$`,
      },
    },

    // ─────────────── প্রমাণ ও নির্ণয় (5 – 7) ───────────────
    {
      id: 5,
      group: NUM_PROOF,
      question: String.raw`প্রমাণ করো যে, প্রতিটি সংখ্যা অমূলদ।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\sqrt{5}$`,
          solution: {
            steps: [
              String.raw`ধরি, $\sqrt{5}$ একটি মূলদ সংখ্যা এবং $\sqrt{5}=\dfrac{p}{q}$; যেখানে $p$ ও $q$ পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা এবং $q>1$।`,
              String.raw`$$\text{বর্গ করে, } 5=\frac{p^{2}}{q^{2}}$$`,
              String.raw`$$\text{অর্থাৎ } 5q=\frac{p^{2}}{q}\qquad\left[\,\text{উভয়পক্ষকে } q \text{ দ্বারা গুণ করে}\,\right]$$`,
              String.raw`সুতরাং $5q$ পূর্ণসংখ্যা কিন্তু $\dfrac{p^{2}}{q}$ পূর্ণসংখ্যা নয়, কারণ $p$ ও $q$ পরস্পর সহমৌলিক এবং $q>1$।`,
              String.raw`$\therefore\;5q$ এবং $\dfrac{p^{2}}{q}$ সমান হতে পারে না, অর্থাৎ $5q\neq\dfrac{p^{2}}{q}$।`,
              String.raw`$\therefore\;\sqrt{5}$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা যাবে না।`,
              String.raw`$\therefore\;\sqrt{5}$ একটি অমূলদ সংখ্যা। (প্রমাণিত)`,
            ],
            answer: String.raw`$\sqrt{5}$ অমূলদ (প্রমাণিত)`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\sqrt{7}$`,
          solution: {
            steps: [
              String.raw`ধরি, $\sqrt{7}$ একটি মূলদ সংখ্যা এবং $\sqrt{7}=\dfrac{p}{q}$; যেখানে $p$ ও $q$ পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা এবং $q>1$।`,
              String.raw`$$\text{বর্গ করে, } 7=\frac{p^{2}}{q^{2}}\qquad\text{বা, } 7q=\frac{p^{2}}{q}$$`,
              String.raw`এখানে $7q$ পূর্ণসংখ্যা, কিন্তু $p$ ও $q$ সহমৌলিক ও $q>1$ বলে $\dfrac{p^{2}}{q}$ পূর্ণসংখ্যা নয়।`,
              String.raw`$\therefore\;7q\neq\dfrac{p^{2}}{q}$, অর্থাৎ $\sqrt{7}$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা যাবে না।`,
              String.raw`$\therefore\;\sqrt{7}$ একটি অমূলদ সংখ্যা। (প্রমাণিত)`,
            ],
            answer: String.raw`$\sqrt{7}$ অমূলদ (প্রমাণিত)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\sqrt{10}$`,
          solution: {
            steps: [
              String.raw`ধরি, $\sqrt{10}$ একটি মূলদ সংখ্যা এবং $\sqrt{10}=\dfrac{p}{q}$; যেখানে $p$ ও $q$ পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা এবং $q>1$।`,
              String.raw`$$\text{বর্গ করে, } 10=\frac{p^{2}}{q^{2}}\qquad\text{বা, } 10q=\frac{p^{2}}{q}$$`,
              String.raw`$10q$ পূর্ণসংখ্যা, কিন্তু $p$ ও $q$ সহমৌলিক ও $q>1$ বলে $\dfrac{p^{2}}{q}$ পূর্ণসংখ্যা নয়।`,
              String.raw`$\therefore\;10q\neq\dfrac{p^{2}}{q}$, অর্থাৎ $\sqrt{10}$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা যাবে না।`,
              String.raw`$\therefore\;\sqrt{10}$ একটি অমূলদ সংখ্যা। (প্রমাণিত)`,
            ],
            answer: String.raw`$\sqrt{10}$ অমূলদ (প্রমাণিত)`,
          },
        },
      ],
    },
    {
      id: 6,
      group: NUM_PROOF,
      question: String.raw`নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$0.31$ এবং $0.12$ এর মধ্যে দুইটি অমূলদ সংখ্যা নির্ণয় করো।`,
          figure: "between-012-031",
          solution: {
            steps: [
              String.raw`এখানে $0.12<0.31$।`,
              String.raw`আমরা জানি, $\sqrt{2}=1.414213\dots$ এবং $\sqrt{3}=1.732050\dots$ — দুইটিই অমূলদ সংখ্যা।`,
              String.raw`মনে করি, $a=\dfrac{\sqrt{2}}{10}$ এবং $b=\dfrac{\sqrt{3}}{10}$।`,
              String.raw`অমূলদ সংখ্যাকে শূন্য নয় এমন মূলদ সংখ্যা দিয়ে ভাগ করলে ভাগফলও অমূলদ হয়, সুতরাং $a$ ও $b$ উভয়ই অমূলদ।`,
              String.raw`$$a=0.1414213\dots,\qquad b=0.1732050\dots$$`,
              String.raw`$$\therefore\;0.12<a<b<0.31$$`,
              String.raw`$\therefore\;a$ ও $b$ দুইটিই নির্ণেয় অমূলদ সংখ্যা।`,
              String.raw`মন্তব্য: এভাবে $0.12$ ও $0.31$ এর মধ্যে অসংখ্য অমূলদ সংখ্যা নির্ণয় করা যায়; যেমন $0.1301001000100001\dots$ — এটিও অসীম অনাবৃত দশমিক, তাই অমূলদ।`,
            ],
            answer: String.raw`$\dfrac{\sqrt{2}}{10}$ এবং $\dfrac{\sqrt{3}}{10}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\dfrac{1}{\sqrt{2}}$ এবং $\sqrt{2}$ এর মধ্যে একটি মূলদ এবং একটি অমূলদ সংখ্যা নির্ণয় করো।`,
          figure: "between-root2",
          solution: {
            steps: [
              String.raw`দুইটি সংখ্যাকেই হর $2$ নিয়ে লিখি,`,
              String.raw`$$\frac{1}{\sqrt{2}}=\frac{\sqrt{2}}{2},\qquad \sqrt{2}=\frac{2\sqrt{2}}{2}=\frac{\sqrt{8}}{2}$$`,
              String.raw`$$\text{এখন, } 2<4<6<8$$`,
              String.raw`$$\therefore\;\sqrt{2}<\sqrt{4}<\sqrt{6}<\sqrt{8}$$`,
              String.raw`$$\therefore\;\frac{\sqrt{2}}{2}<\frac{\sqrt{4}}{2}<\frac{\sqrt{6}}{2}<\frac{\sqrt{8}}{2}$$`,
              String.raw`$$\text{অর্থাৎ } \frac{1}{\sqrt{2}}<1<\frac{\sqrt{6}}{2}<\sqrt{2}$$`,
              String.raw`এখানে $\dfrac{\sqrt{4}}{2}=1$ একটি মূলদ সংখ্যা এবং $6$ পূর্ণবর্গ নয় বলে $\sqrt{6}$ অমূলদ, তাই $\dfrac{\sqrt{6}}{2}$ও অমূলদ।`,
              String.raw`$$\text{যাচাই: } 0.7071\dots<1<1.2247\dots<1.4142\dots$$`,
            ],
            answer: String.raw`মূলদ $1$ এবং অমূলদ $\dfrac{\sqrt{6}}{2}$`,
          },
        },
      ],
    },
    {
      id: 7,
      group: NUM_PROOF,
      question: String.raw`প্রমাণ করো যে, দুইটি ক্রমিক জোড় সংখ্যার গুণফল $8$ (আট) দ্বারা বিভাজ্য।`,
      solution: {
        steps: [
          String.raw`মনে করি, ক্রমিক জোড় সংখ্যা দুইটি $2n$ ও $2n+2$, যেখানে $n$ একটি স্বাভাবিক সংখ্যা।`,
          String.raw`$$\text{গুণফল}=2n(2n+2)=4n(n+1)$$`,
          String.raw`এখানে $n$ ও $n+1$ দুইটি ক্রমিক স্বাভাবিক সংখ্যা, তাই এদের একটি অবশ্যই জোড়।`,
          String.raw`$$\therefore\;n(n+1)=2m\quad\text{আকারের, যেখানে } m \text{ একটি স্বাভাবিক সংখ্যা}$$`,
          String.raw`$$\therefore\;\text{গুণফল}=4\times 2m=8m$$`,
          String.raw`যা $8$ দ্বারা বিভাজ্য। সুতরাং দুইটি ক্রমিক জোড় সংখ্যার গুণফল সর্বদা $8$ দ্বারা বিভাজ্য। (প্রমাণিত)`,
        ],
        answer: String.raw`গুণফল $=8m$, অর্থাৎ $8$ দ্বারা বিভাজ্য (প্রমাণিত)`,
      },
    },

    // ─────────────── দশমিক ও সাধারণ ভগ্নাংশ (8 – 10) ───────────────
    {
      id: 8,
      group: NUM_DEC,
      question: String.raw`আবৃত দশমিক ভগ্নাংশে প্রকাশ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\dfrac{1}{6}$`,
          solution: {
            steps: [
              String.raw`$1$ কে $6$ দিয়ে ভাগ করি। $1<6$ বলে ভাগফলে $0$ ও দশমিক বিন্দু বসিয়ে $1$ এর ডানে $0$ বসাই।`,
              String.raw`$$10\div 6=1,\ \text{ভাগশেষ }4;\qquad 40\div 6=6,\ \text{ভাগশেষ }4$$`,
              String.raw`ভাগশেষ আবার $4$ ফিরে এসেছে, তাই ভাগফলে $6$ বারবার আসবে।`,
              String.raw`$$\therefore\;\frac{1}{6}=0.1666\dots=0.1\dot{6}$$`,
            ],
            answer: String.raw`$0.1\dot{6}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\dfrac{7}{11}$`,
          solution: {
            steps: [
              String.raw`$$70\div 11=6,\ \text{ভাগশেষ }4;\qquad 40\div 11=3,\ \text{ভাগশেষ }7$$`,
              String.raw`ভাগশেষ $7$ ফিরে এসেছে, তাই ভাগফলে $63$ বারবার আসবে।`,
              String.raw`$$\therefore\;\frac{7}{11}=0.6363\dots=0.\dot{6}\dot{3}$$`,
            ],
            answer: String.raw`$0.\dot{6}\dot{3}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$3\dfrac{2}{9}$`,
          solution: {
            steps: [
              String.raw`$$3\frac{2}{9}=3+\frac{2}{9}$$`,
              String.raw`$$\frac{2}{9}=0.2222\dots=0.\dot{2}$$`,
              String.raw`$$\therefore\;3\frac{2}{9}=3.\dot{2}$$`,
            ],
            answer: String.raw`$3.\dot{2}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$3\dfrac{8}{15}$`,
          solution: {
            steps: [
              String.raw`$$3\frac{8}{15}=3+\frac{8}{15}$$`,
              String.raw`$$80\div 15=5,\ \text{ভাগশেষ }5;\qquad 50\div 15=3,\ \text{ভাগশেষ }5$$`,
              String.raw`$$\therefore\;\frac{8}{15}=0.5333\dots=0.5\dot{3}$$`,
              String.raw`$$\therefore\;3\frac{8}{15}=3.5\dot{3}$$`,
            ],
            answer: String.raw`$3.5\dot{3}$`,
          },
        },
      ],
    },
    {
      id: 9,
      group: NUM_DEC,
      question: String.raw`সাধারণ ভগ্নাংশে প্রকাশ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$0.\dot{2}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক একটি, অনাবৃত অঙ্ক নেই — তাই হর একটি ৯।`,
              String.raw`$$0.\dot{2}=\frac{2-0}{9}=\frac{2}{9}$$`,
            ],
            answer: String.raw`$\dfrac{2}{9}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$0.\dot{3}\dot{5}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক দুইটি, অনাবৃত অঙ্ক নেই — তাই হর দুইটি ৯।`,
              String.raw`$$0.\dot{3}\dot{5}=\frac{35-0}{99}=\frac{35}{99}$$`,
            ],
            answer: String.raw`$\dfrac{35}{99}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$0.1\dot{3}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক একটি ($3$) ও অনাবৃত অঙ্ক একটি ($1$) — তাই হর একটি ৯ ও একটি ০ নিয়ে $90$।`,
              String.raw`$$0.1\dot{3}=\frac{13-1}{90}=\frac{12}{90}=\frac{2}{15}$$`,
            ],
            answer: String.raw`$\dfrac{2}{15}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$3.7\dot{8}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক একটি ($8$) ও অনাবৃত অঙ্ক একটি ($7$) — তাই হর $90$।`,
              String.raw`$$3.7\dot{8}=\frac{378-37}{90}=\frac{341}{90}=3\frac{71}{90}$$`,
            ],
            answer: String.raw`$\dfrac{341}{90}=3\dfrac{71}{90}$`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$6.\dot{2}30\dot{9}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক চারটি ($2309$), অনাবৃত অঙ্ক নেই — তাই হর চারটি ৯ নিয়ে $9999$।`,
              String.raw`$$6.\dot{2}30\dot{9}=\frac{62309-6}{9999}=\frac{62303}{9999}=6\frac{2309}{9999}$$`,
            ],
            answer: String.raw`$\dfrac{62303}{9999}=6\dfrac{2309}{9999}$`,
          },
        },
      ],
    },
    {
      id: 10,
      group: NUM_DEC,
      question: String.raw`সদৃশ আবৃত দশমিক ভগ্নাংশে প্রকাশ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$2.2\dot{3}$, $\;5.\dot{2}3\dot{5}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা যথাক্রমে $1$ ও $0$; সবচেয়ে বেশি $1$।`,
              String.raw`আবৃত অঙ্ক সংখ্যা যথাক্রমে $1$ ও $3$; ল.সা.গু. $3$।`,
              String.raw`সুতরাং প্রত্যেকটির অনাবৃত অংশ $1$ অঙ্কের ও আবৃত অংশ $3$ অঙ্কের করতে হবে।`,
              String.raw`$$2.2\dot{3}=2.2333333\dots=2.2\dot{3}3\dot{3}$$`,
              String.raw`$$5.\dot{2}3\dot{5}=5.235235\dots=5.2\dot{3}5\dot{2}$$`,
            ],
            answer: String.raw`$2.2\dot{3}3\dot{3}$ এবং $5.2\dot{3}5\dot{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$7.2\dot{6}$, $\;4.23\dot{7}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা যথাক্রমে $1$ ও $2$; সবচেয়ে বেশি $2$। আবৃত অঙ্ক দুইটিরই $1$, ল.সা.গু. $1$।`,
              String.raw`$$7.2\dot{6}=7.2666\dots=7.26\dot{6}$$`,
              String.raw`$$4.23\dot{7}=4.23\dot{7}$$`,
            ],
            answer: String.raw`$7.26\dot{6}$ এবং $4.23\dot{7}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$5.\dot{7}$, $\;8.\dot{3}\dot{4}$, $\;6.\dot{2}4\dot{5}$`,
          solution: {
            steps: [
              String.raw`তিনটিরই অনাবৃত অঙ্ক সংখ্যা $0$। আবৃত অঙ্ক সংখ্যা $1$, $2$ ও $3$; ল.সা.গু. $6$।`,
              String.raw`$$5.\dot{7}=5.\dot{7}7777\dot{7}$$`,
              String.raw`$$8.\dot{3}\dot{4}=8.\dot{3}4343\dot{4}$$`,
              String.raw`$$6.\dot{2}4\dot{5}=6.\dot{2}4524\dot{5}$$`,
            ],
            answer: String.raw`$5.\dot{7}7777\dot{7}$, $\;8.\dot{3}4343\dot{4}$ ও $6.\dot{2}4524\dot{5}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$12.32$, $\;2.1\dot{9}$, $\;4.32\dot{5}\dot{6}$`,
          solution: {
            steps: [
              String.raw`$12.32$ সসীম, তাই এর দুইটি অঙ্কই অনাবৃত। অনাবৃত অঙ্ক সংখ্যা $2$, $1$ ও $2$; সবচেয়ে বেশি $2$।`,
              String.raw`আবৃত অঙ্ক সংখ্যা $0$ (শূন্য বসিয়ে $1$), $1$ ও $2$; ল.সা.গু. $2$।`,
              String.raw`$$12.32=12.32\dot{0}\dot{0}$$`,
              String.raw`$$2.1\dot{9}=2.19999\dots=2.19\dot{9}\dot{9}$$`,
              String.raw`$$4.32\dot{5}\dot{6}=4.32\dot{5}\dot{6}$$`,
            ],
            answer: String.raw`$12.32\dot{0}\dot{0}$, $\;2.19\dot{9}\dot{9}$ ও $4.32\dot{5}\dot{6}$`,
          },
        },
      ],
    },

    // ─────────────── চার প্রক্রিয়া (11 – 14) ───────────────
    {
      id: 11,
      group: NUM_OPS,
      question: String.raw`যোগ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$0.4\dot{5}+0.1\dot{3}\dot{4}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা দুইটিরই $1$; আবৃত অঙ্ক সংখ্যা $1$ ও $2$, এদের ল.সা.গু. $2$।`,
              String.raw`$$0.4\dot{5}=0.4555\dots=0.4\dot{5}\dot{5}$$`,
              String.raw`$$0.1\dot{3}\dot{4}=0.1\dot{3}\dot{4}$$`,
              String.raw`সসীম দশমিকের নিয়মে যোগ করে, $0.455+0.134=0.589$।`,
              String.raw`সর্বডানের অঙ্ক দুইটির যোগ $5+4=9$, হাতে কিছু থাকে না।`,
              String.raw`$$\therefore\;\text{যোগফল}=0.5\dot{8}\dot{9}$$`,
              String.raw`যাচাই: $\dfrac{41}{90}+\dfrac{133}{990}=\dfrac{584}{990}=\dfrac{292}{495}=0.5\dot{8}\dot{9}$।`,
            ],
            answer: String.raw`$0.5\dot{8}\dot{9}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$2.0\dot{5}+8.0\dot{4}+7.018$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা হবে $3$ (সবচেয়ে বেশি, $7.018$ থেকে) এবং আবৃত অঙ্ক সংখ্যা $1$।`,
              String.raw`$$2.0\dot{5}=2.055\dot{5},\qquad 8.0\dot{4}=8.044\dot{4},\qquad 7.018=7.018\dot{0}$$`,
              String.raw`সসীম দশমিকের নিয়মে যোগ করে, $2.0555+8.0444+7.0180=17.1179$।`,
              String.raw`সর্বডানের অঙ্কগুলোর যোগ $5+4+0=9$, হাতে কিছু থাকে না।`,
              String.raw`$$\therefore\;\text{যোগফল}=17.117\dot{9}=17.118$$`,
              String.raw`যাচাই: $\dfrac{37}{18}+\dfrac{362}{45}+\dfrac{3509}{500}=\dfrac{8559}{500}=17.118$।`,
            ],
            answer: String.raw`$17.117\dot{9}$ অর্থাৎ $17.118$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$0.00\dot{6}+0.\dot{9}\dot{2}+0.\dot{1}3\dot{4}$`,
          solution: {
            steps: [
              String.raw`এখানে সদৃশ করলে আবৃত অংশ $6$ অঙ্কের হয় এবং ডানপ্রান্তের হাতের হিসাব একাধিক ঘর পেরিয়ে আসে, তাই বইয়ের মন্তব্য অনুসারে সাধারণ ভগ্নাংশে নামিয়ে যোগ করা হলো।`,
              String.raw`$$0.00\dot{6}=\frac{6-0}{900}=\frac{1}{150}$$`,
              String.raw`$$0.\dot{9}\dot{2}=\frac{92}{99},\qquad 0.\dot{1}3\dot{4}=\frac{134}{999}$$`,
              String.raw`$$\therefore\;\text{যোগফল}=\frac{1}{150}+\frac{92}{99}+\frac{134}{999}$$`,
              String.raw`$$=\frac{3663+510600+73700}{549450}=\frac{587963}{549450}$$`,
              String.raw`$$=1.07009373009373\dots=1.07\dot{0}0937\dot{3}$$`,
            ],
            answer: String.raw`$1.07\dot{0}0937\dot{3}$`,
          },
        },
      ],
    },
    {
      id: 12,
      group: NUM_OPS,
      question: String.raw`বিয়োগ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$3.\dot{4}-2.1\dot{3}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা $1$ এবং আবৃত অঙ্ক সংখ্যা $1$।`,
              String.raw`$$3.\dot{4}=3.4\dot{4},\qquad 2.1\dot{3}=2.1\dot{3}$$`,
              String.raw`বিয়োগ করে, $3.44-2.13=1.31$। সর্বডানে $4-3=1$, ধার নিতে হয়নি।`,
              String.raw`$$\therefore\;\text{বিয়োগফল}=1.3\dot{1}$$`,
            ],
            answer: String.raw`$1.3\dot{1}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$5.\dot{1}\dot{2}-3.4\dot{5}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা $1$ এবং আবৃত অঙ্ক সংখ্যা $2$ ও $1$ এর ল.সা.গু. $2$।`,
              String.raw`$$5.\dot{1}\dot{2}=5.1\dot{2}\dot{1},\qquad 3.4\dot{5}=3.4\dot{5}\dot{5}$$`,
              String.raw`বিয়োগ করে, $5.121-3.455=1.666$।`,
              String.raw`সর্বডানে $1$ থেকে $5$ বিয়োগ করতে হলে ধার নিতে হয়, তাই বিয়োগফলের শেষ অঙ্ক থেকে $1$ বাদ যাবে।`,
              String.raw`$$1.666-0.001=1.665$$`,
              String.raw`$$\therefore\;\text{বিয়োগফল}=1.6\dot{6}\dot{5}$$`,
            ],
            answer: String.raw`$1.6\dot{6}\dot{5}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$8.49-5.3\dot{5}\dot{6}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা $2$ এবং আবৃত অঙ্ক সংখ্যা $2$।`,
              String.raw`$$8.49=8.49\dot{0}\dot{0},\qquad 5.3\dot{5}\dot{6}=5.35\dot{6}\dot{5}$$`,
              String.raw`বিয়োগ করে, $8.4900-5.3565=3.1335$।`,
              String.raw`সর্বডানে $0$ থেকে $5$ বিয়োগ করতে ধার নিতে হয়, তাই শেষ অঙ্ক থেকে $1$ বাদ যাবে।`,
              String.raw`$$3.1335-0.0001=3.1334$$`,
              String.raw`$$\therefore\;\text{বিয়োগফল}=3.13\dot{3}\dot{4}$$`,
            ],
            answer: String.raw`$3.13\dot{3}\dot{4}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$19.34\dot{5}-13.\dot{2}34\dot{9}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা $2$ এবং আবৃত অঙ্ক সংখ্যা $1$ ও $4$ এর ল.সা.গু. $4$।`,
              String.raw`$$19.34\dot{5}=19.34\dot{5}55\dot{5}$$`,
              String.raw`$$13.\dot{2}34\dot{9}=13.23\dot{4}92\dot{3}$$`,
              String.raw`বিয়োগ করে, $19.345555-13.234923=6.110632$। সর্বডানে $5-3=2$, ধার নিতে হয়নি।`,
              String.raw`$$\therefore\;\text{বিয়োগফল}=6.11\dot{0}63\dot{2}$$`,
            ],
            answer: String.raw`$6.11\dot{0}63\dot{2}$`,
          },
        },
      ],
    },
    {
      id: 13,
      group: NUM_OPS,
      question: String.raw`গুণ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$0.\dot{3}\times 0.\dot{6}$`,
          solution: {
            steps: [
              String.raw`$$0.\dot{3}=\frac{3}{9}=\frac{1}{3},\qquad 0.\dot{6}=\frac{6}{9}=\frac{2}{3}$$`,
              String.raw`$$\therefore\;0.\dot{3}\times 0.\dot{6}=\frac{1}{3}\times\frac{2}{3}=\frac{2}{9}=0.\dot{2}$$`,
            ],
            answer: String.raw`$0.\dot{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$2.\dot{4}\times 0.\dot{8}\dot{1}$`,
          solution: {
            steps: [
              String.raw`$$2.\dot{4}=\frac{24-2}{9}=\frac{22}{9}$$`,
              String.raw`$$0.\dot{8}\dot{1}=\frac{81}{99}=\frac{9}{11}$$`,
              String.raw`$$\therefore\;2.\dot{4}\times 0.\dot{8}\dot{1}=\frac{22}{9}\times\frac{9}{11}=2$$`,
            ],
            answer: String.raw`$2$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$0.6\dot{2}\times 0.\dot{3}$`,
          solution: {
            steps: [
              String.raw`$$0.6\dot{2}=\frac{62-6}{90}=\frac{56}{90}=\frac{28}{45}$$`,
              String.raw`$$0.\dot{3}=\frac{1}{3}$$`,
              String.raw`$$\therefore\;0.6\dot{2}\times 0.\dot{3}=\frac{28}{45}\times\frac{1}{3}=\frac{28}{135}$$`,
              String.raw`$$=0.2074074\dots=0.2\dot{0}7\dot{4}$$`,
            ],
            answer: String.raw`$\dfrac{28}{135}=0.2\dot{0}7\dot{4}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$42.\dot{1}\dot{8}\times 0.2\dot{8}$`,
          solution: {
            steps: [
              String.raw`$$42.\dot{1}\dot{8}=\frac{4218-42}{99}=\frac{4176}{99}=\frac{464}{11}$$`,
              String.raw`$$0.2\dot{8}=\frac{28-2}{90}=\frac{26}{90}=\frac{13}{45}$$`,
              String.raw`$$\therefore\;42.\dot{1}\dot{8}\times 0.2\dot{8}=\frac{464}{11}\times\frac{13}{45}=\frac{6032}{495}$$`,
              String.raw`$$=12.185858\dots=12.1\dot{8}\dot{5}$$`,
            ],
            answer: String.raw`$12.1\dot{8}\dot{5}$`,
          },
        },
      ],
    },
    {
      id: 14,
      group: NUM_OPS,
      question: String.raw`ভাগ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$0.\dot{3}\div 0.\dot{6}$`,
          solution: {
            steps: [
              String.raw`$$0.\dot{3}=\frac{1}{3},\qquad 0.\dot{6}=\frac{2}{3}$$`,
              String.raw`$$\therefore\;0.\dot{3}\div 0.\dot{6}=\frac{1}{3}\div\frac{2}{3}=\frac{1}{3}\times\frac{3}{2}=\frac{1}{2}=0.5$$`,
            ],
            answer: String.raw`$0.5$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$0.3\dot{5}\div 1.\dot{7}$`,
          solution: {
            steps: [
              String.raw`$$0.3\dot{5}=\frac{35-3}{90}=\frac{32}{90}=\frac{16}{45}$$`,
              String.raw`$$1.\dot{7}=\frac{17-1}{9}=\frac{16}{9}$$`,
              String.raw`$$\therefore\;0.3\dot{5}\div 1.\dot{7}=\frac{16}{45}\times\frac{9}{16}=\frac{1}{5}=0.2$$`,
            ],
            answer: String.raw`$0.2$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$2.3\dot{7}\div 0.4\dot{5}$`,
          solution: {
            steps: [
              String.raw`$$2.3\dot{7}=\frac{237-23}{90}=\frac{214}{90}$$`,
              String.raw`$$0.4\dot{5}=\frac{45-4}{90}=\frac{41}{90}$$`,
              String.raw`$$\therefore\;2.3\dot{7}\div 0.4\dot{5}=\frac{214}{90}\times\frac{90}{41}=\frac{214}{41}$$`,
              String.raw`$$=5.2195121951\dots=5.\dot{2}195\dot{1}$$`,
            ],
            answer: String.raw`$\dfrac{214}{41}=5.\dot{2}195\dot{1}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$1.\dot{1}8\dot{5}\div 0.\dot{2}\dot{4}$`,
          solution: {
            steps: [
              String.raw`$$1.\dot{1}8\dot{5}=\frac{1185-1}{999}=\frac{1184}{999}$$`,
              String.raw`$$0.\dot{2}\dot{4}=\frac{24}{99}=\frac{8}{33}$$`,
              String.raw`$$\therefore\;1.\dot{1}8\dot{5}\div 0.\dot{2}\dot{4}=\frac{1184}{999}\times\frac{33}{8}=\frac{4884}{999}$$`,
              String.raw`$$=\frac{44}{9}=4.888\dots=4.\dot{8}$$`,
            ],
            answer: String.raw`$4.\dot{8}$`,
          },
        },
      ],
    },

    // ─────────────── বর্গমূল ও শ্রেণিবিন্যাস (15 – 16) ───────────────
    {
      id: 15,
      group: NUM_ROOT,
      question: String.raw`চার দশমিক স্থান পর্যন্ত বর্গমূল এবং তিন দশমিক স্থান পর্যন্ত সেগুলোর আসন্ন মান লিখো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$12$`,
          solution: {
            steps: [
              String.raw`বর্গমূল নির্ণয়ের ভাগ পদ্ধতিতে,`,
              String.raw`$$\sqrt{12}=3.4641016\dots$$`,
              String.raw`যাচাই: $3.4641^{2}=11.99998881$ এবং $3.4642^{2}=12.00068164$, অর্থাৎ $3.4641<\sqrt{12}<3.4642$।`,
              String.raw`$$\therefore\;\text{চার দশমিক স্থান পর্যন্ত মান}=3.4641$$`,
              String.raw`চতুর্থ স্থানের অঙ্ক $1$, যা $5$ এর ছোট — তাই তৃতীয় স্থানের অঙ্ক অপরিবর্তিত থাকবে।`,
              String.raw`$$\therefore\;\text{তিন দশমিক স্থান পর্যন্ত আসন্ন মান}=3.464$$`,
            ],
            answer: String.raw`$3.4641$; আসন্ন মান $3.464$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$0.\dot{2}\dot{5}$`,
          solution: {
            steps: [
              String.raw`$$0.\dot{2}\dot{5}=\frac{25}{99}$$`,
              String.raw`$$\therefore\;\sqrt{0.\dot{2}\dot{5}}=\sqrt{\frac{25}{99}}=\frac{5}{\sqrt{99}}=\frac{5}{9.9498744\dots}$$`,
              String.raw`$$=0.5025189\dots$$`,
              String.raw`যাচাই: $0.5025^{2}=0.25250625$ এবং $0.5026^{2}=0.25260676$, আর $\dfrac{25}{99}=0.2525252\dots$ — অর্থাৎ মানটি এই দুইয়ের মাঝে।`,
              String.raw`$$\therefore\;\text{চার দশমিক স্থান পর্যন্ত মান}=0.5025$$`,
              String.raw`চতুর্থ স্থানের অঙ্ক $5$, তাই তৃতীয় স্থানের অঙ্কের সাথে $1$ যোগ হবে।`,
              String.raw`$$\therefore\;\text{আসন্ন মান}=0.503$$`,
            ],
            answer: String.raw`$0.5025$; আসন্ন মান $0.503$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$1.\dot{3}\dot{4}$`,
          solution: {
            steps: [
              String.raw`$$1.\dot{3}\dot{4}=1+\frac{34}{99}=\frac{133}{99}=1.3434343\dots$$`,
              String.raw`$$\therefore\;\sqrt{1.\dot{3}\dot{4}}=1.1590661\dots$$`,
              String.raw`যাচাই: $1.1590^{2}=1.34328100$ এবং $1.1591^{2}=1.34351281$, অর্থাৎ $1.1590<\sqrt{1.\dot{3}\dot{4}}<1.1591$।`,
              String.raw`$$\therefore\;\text{চার দশমিক স্থান পর্যন্ত মান}=1.1590$$`,
              String.raw`চতুর্থ স্থানের অঙ্ক $0$, যা $5$ এর ছোট।`,
              String.raw`$$\therefore\;\text{আসন্ন মান}=1.159$$`,
            ],
            answer: String.raw`$1.1590$; আসন্ন মান $1.159$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$5.1\dot{3}0\dot{2}$`,
          solution: {
            steps: [
              String.raw`আবৃত অঙ্ক তিনটি ($302$) ও অনাবৃত অঙ্ক একটি ($1$),`,
              String.raw`$$5.1\dot{3}0\dot{2}=\frac{51302-51}{9990}=\frac{51251}{9990}=5.1302302\dots$$`,
              String.raw`$$\therefore\;\sqrt{5.1\dot{3}0\dot{2}}=2.2650011\dots$$`,
              String.raw`যাচাই: $2.2650^{2}=5.13022500$ এবং $2.2651^{2}=5.13067801$, অর্থাৎ মানটি এই দুইয়ের মাঝে।`,
              String.raw`$$\therefore\;\text{চার দশমিক স্থান পর্যন্ত মান}=2.2650$$`,
              String.raw`চতুর্থ স্থানের অঙ্ক $0$, যা $5$ এর ছোট।`,
              String.raw`$$\therefore\;\text{আসন্ন মান}=2.265$$`,
            ],
            answer: String.raw`$2.2650$; আসন্ন মান $2.265$`,
          },
        },
      ],
    },
    {
      id: 16,
      group: NUM_ROOT,
      question: String.raw`নিচের কোন সংখ্যাগুলো মূলদ এবং কোন সংখ্যাগুলো অমূলদ লিখো:`,
      figure: "real-classes",
      parts: [
        {
          label: "ক",
          question: String.raw`$0.\dot{4}$`,
          solution: {
            steps: [
              String.raw`$$0.\dot{4}=\frac{4}{9}$$`,
              String.raw`এটি $\dfrac{p}{q}$ আকারে লেখা গেল, যেখানে $p=4$, $q=9$ পূর্ণসংখ্যা ও $q\neq 0$।`,
            ],
            answer: String.raw`মূলদ`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\sqrt{9}$`,
          solution: {
            steps: [
              String.raw`$$\sqrt{9}=3=\frac{3}{1}$$`,
              String.raw`$9$ একটি পূর্ণবর্গ সংখ্যা, তাই এর বর্গমূল পূর্ণসংখ্যা।`,
            ],
            answer: String.raw`মূলদ`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\sqrt{11}$`,
          solution: {
            steps: [
              String.raw`$11$ পূর্ণবর্গ সংখ্যা নয়, তাই $\sqrt{11}$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা যায় না।`,
              String.raw`$$\sqrt{11}=3.3166247\dots\qquad\left[\text{অসীম অনাবৃত দশমিক}\right]$$`,
            ],
            answer: String.raw`অমূলদ`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$\dfrac{\sqrt{6}}{3}$`,
          solution: {
            steps: [
              String.raw`$6$ পূর্ণবর্গ নয়, তাই $\sqrt{6}$ অমূলদ।`,
              String.raw`অমূলদ সংখ্যাকে শূন্য নয় এমন মূলদ সংখ্যা দিয়ে ভাগ করলে ভাগফলও অমূলদ হয়।`,
              String.raw`$$\frac{\sqrt{6}}{3}=0.8164965\dots$$`,
            ],
            answer: String.raw`অমূলদ`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$\dfrac{\sqrt{8}}{\sqrt{7}}$`,
          solution: {
            steps: [
              String.raw`$$\frac{\sqrt{8}}{\sqrt{7}}=\sqrt{\frac{8}{7}}=\frac{2\sqrt{14}}{7}$$`,
              String.raw`$\dfrac{8}{7}$ কোনো মূলদ সংখ্যার বর্গ নয়, তাই এর বর্গমূল অমূলদ।`,
              String.raw`$$\frac{\sqrt{8}}{\sqrt{7}}=1.0690449\dots$$`,
            ],
            answer: String.raw`অমূলদ`,
          },
        },
        {
          label: "চ",
          question: String.raw`$\dfrac{\sqrt{27}}{\sqrt{48}}$`,
          solution: {
            steps: [
              String.raw`$$\frac{\sqrt{27}}{\sqrt{48}}=\sqrt{\frac{27}{48}}=\sqrt{\frac{9}{16}}=\frac{3}{4}$$`,
              String.raw`$\dfrac{9}{16}$ একটি মূলদ সংখ্যার বর্গ, তাই বর্গমূলটিও মূলদ।`,
            ],
            answer: String.raw`মূলদ, $\dfrac{3}{4}$`,
          },
        },
        {
          label: "ছ",
          question: String.raw`$\dfrac{\;\dfrac{2}{3}\;}{\dfrac{3}{7}}$`,
          solution: {
            steps: [
              String.raw`$$\frac{\;\frac{2}{3}\;}{\frac{3}{7}}=\frac{2}{3}\times\frac{7}{3}=\frac{14}{9}$$`,
              String.raw`দুইটি মূলদ সংখ্যার ভাগফল (হর শূন্য না হলে) মূলদই হয়।`,
            ],
            answer: String.raw`মূলদ, $\dfrac{14}{9}$`,
          },
        },
        {
          label: "জ",
          question: String.raw`$5.\dot{6}3\dot{9}$`,
          solution: {
            steps: [
              String.raw`$$5.\dot{6}3\dot{9}=\frac{5639-5}{999}=\frac{5634}{999}=\frac{626}{111}$$`,
              String.raw`প্রতিটি আবৃত দশমিক ভগ্নাংশকেই সাধারণ ভগ্নাংশে পরিণত করা যায়, তাই এরা সবাই মূলদ।`,
            ],
            answer: String.raw`মূলদ, $\dfrac{626}{111}$`,
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — বইয়ের পৃষ্ঠা ২০ ───────────────
    {
      id: 17,
      group: NUM_MODEL_MCQ,
      question: String.raw`তিনটি ক্রমিক স্বাভাবিক সংখ্যার গুণফল সর্বদাই নিচের কোন সংখ্যা দ্বারা বিভাজ্য হবে?
ক) $5$  খ) $6$  গ) $7$  ঘ) $11$`,
      solution: {
        steps: [
          String.raw`ধরি, ক্রমিক স্বাভাবিক সংখ্যা তিনটি $n,\;n+1,\;n+2$।`,
          String.raw`পরপর তিনটি সংখ্যার অন্তত একটি জোড়, তাই গুণফল $2$ দ্বারা বিভাজ্য।`,
          String.raw`আবার পরপর তিনটি সংখ্যার ঠিক একটি $3$ দ্বারা বিভাজ্য, তাই গুণফল $3$ দ্বারাও বিভাজ্য।`,
          String.raw`$2$ ও $3$ সহমৌলিক, সুতরাং গুণফল $2\times 3=6$ দ্বারা বিভাজ্য।`,
          String.raw`যাচাই: $1\times 2\times 3=6$, $\;2\times 3\times 4=24$, $\;3\times 4\times 5=60$ — সবগুলোই $6$ দ্বারা বিভাজ্য, কিন্তু $5$, $7$ বা $11$ দ্বারা নয়।`,
        ],
        answer: String.raw`খ) $6$`,
      },
    },
    {
      id: 18,
      group: NUM_MODEL_MCQ,
      question: String.raw`$a$ ও $b$ দুইটি ক্রমিক জোড় সংখ্যা হলে নিচের কোনটি বিজোড় সংখ্যা?
ক) $a^{2}$  খ) $b^{2}$  গ) $a^{2}+1$  ঘ) $b^{2}+2$`,
      solution: {
        steps: [
          String.raw`$a$ জোড় হলে $a^{2}$ও জোড়; একইভাবে $b^{2}$ জোড়।`,
          String.raw`জোড় সংখ্যার সাথে $2$ যোগ করলে যোগফল জোড়ই থাকে, তাই $b^{2}+2$ জোড়।`,
          String.raw`কিন্তু জোড় সংখ্যার সাথে $1$ যোগ করলে যোগফল বিজোড় হয়।`,
          String.raw`$$\therefore\;a^{2}+1\ \text{বিজোড়}$$`,
        ],
        answer: String.raw`গ) $a^{2}+1$`,
      },
    },
    {
      id: 19,
      group: NUM_MODEL_MCQ,
      question: String.raw`$a=\sqrt{3}$ এবং $b=\sqrt{12}$ হলে —
$(i)$ $ab$ একটি মূলদ সংখ্যা   $(ii)$ $\dfrac{a}{b}$ একটি মূলদ সংখ্যা   $(iii)$ $(a+b)$ একটি বাস্তব সংখ্যা
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$$(i)\;\; ab=\sqrt{3}\times\sqrt{12}=\sqrt{36}=6\qquad\left[\text{মূলদ — সঠিক}\right]$$`,
          String.raw`$$(ii)\;\; \frac{a}{b}=\frac{\sqrt{3}}{\sqrt{12}}=\sqrt{\frac{3}{12}}=\sqrt{\frac{1}{4}}=\frac{1}{2}\qquad\left[\text{মূলদ — সঠিক}\right]$$`,
          String.raw`$$(iii)\;\; a+b=\sqrt{3}+2\sqrt{3}=3\sqrt{3}$$`,
          String.raw`$3\sqrt{3}$ অমূলদ, তবে প্রতিটি অমূলদ সংখ্যাই বাস্তব সংখ্যা — সুতরাং $(iii)$ও সঠিক।`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },
    {
      id: 20,
      group: NUM_MODEL_MCQ,
      question: String.raw`$a=\sqrt{3}$ এবং $b=\sqrt{12}$ হলে নিচের কোনটি $a$ ও $b$ এর মধ্যবর্তী অমূলদ সংখ্যা?
ক) $\dfrac{3\sqrt{3}}{2}$  খ) $\dfrac{3\sqrt{3}}{4}$  গ) $\dfrac{\sqrt{3}}{2}$  ঘ) $\dfrac{\sqrt{3}}{4}$`,
      figure: "between-root3-root12",
      solution: {
        steps: [
          String.raw`$$a=\sqrt{3}=1.732\dots,\qquad b=\sqrt{12}=2\sqrt{3}=3.464\dots$$`,
          String.raw`$$\text{ক) } \frac{3\sqrt{3}}{2}=1.5\sqrt{3}=2.598\dots\qquad\left[\,\sqrt{3}<1.5\sqrt{3}<2\sqrt{3}\,\right]$$`,
          String.raw`$$\text{খ) } \frac{3\sqrt{3}}{4}=0.75\sqrt{3}=1.299\dots\qquad\left[\,a\ \text{এর ছোট}\,\right]$$`,
          String.raw`$$\text{গ) } \frac{\sqrt{3}}{2}=0.866\dots,\qquad \text{ঘ) } \frac{\sqrt{3}}{4}=0.433\dots$$`,
          String.raw`কেবল ক) সংখ্যাটি $a$ ও $b$ এর মাঝে পড়ে, এবং $\sqrt{3}$ অমূলদ বলে $\dfrac{3\sqrt{3}}{2}$ও অমূলদ।`,
        ],
        answer: String.raw`ক) $\dfrac{3\sqrt{3}}{2}$`,
      },
    },
    {
      id: 21,
      group: NUM_MODEL_CQ,
      question: String.raw`$n=2m-1$, যেখানে $m\in\mathbb{N}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`যোগ করো: $0.\dot{7}+0.1\dot{5}$`,
          solution: {
            steps: [
              String.raw`অনাবৃত অঙ্ক সংখ্যা হবে $1$ এবং আবৃত অঙ্ক সংখ্যা $1$।`,
              String.raw`$$0.\dot{7}=0.7\dot{7},\qquad 0.1\dot{5}=0.1\dot{5}$$`,
              String.raw`সসীম দশমিকের নিয়মে যোগ করে, $0.77+0.15=0.92$।`,
              String.raw`সর্বডানের অঙ্ক দুইটির যোগ $7+5=12$, হাতে থাকে $1$ — তা যোগফলের শেষ অঙ্কের সাথে যোগ হবে।`,
              String.raw`$$0.92+0.01=0.93$$`,
              String.raw`$$\therefore\;\text{যোগফল}=0.9\dot{3}$$`,
              String.raw`যাচাই: $\dfrac{7}{9}+\dfrac{7}{45}=\dfrac{35+7}{45}=\dfrac{42}{45}=\dfrac{14}{15}=0.9333\dots$`,
            ],
            answer: String.raw`$0.9\dot{3}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $n^{2}$ থেকে $1$ বিয়োগ করলে বিয়োগফল সর্বদা $8$ (আট) দ্বারা বিভাজ্য।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $n=2m-1$, যেখানে $m$ একটি স্বাভাবিক সংখ্যা — অর্থাৎ $n$ একটি বিজোড় সংখ্যা।`,
              String.raw`$$n^{2}-1=(n-1)(n+1)$$`,
              String.raw`$$=(2m-1-1)(2m-1+1)=(2m-2)(2m)$$`,
              String.raw`$$=2(m-1)\times 2m=4m(m-1)$$`,
              String.raw`এখানে $m-1$ ও $m$ দুইটি ক্রমিক সংখ্যা, তাই এদের একটি অবশ্যই জোড়; ধরি $m(m-1)=2k$।`,
              String.raw`$$\therefore\;n^{2}-1=4\times 2k=8k$$`,
              String.raw`যা $8$ দ্বারা বিভাজ্য। (দেখানো হলো)`,
              String.raw`যাচাই: $m=3$ হলে $n=5$ এবং $n^{2}-1=24=8\times 3$।`,
            ],
            answer: String.raw`$n^{2}-1=8k$, অর্থাৎ $8$ দ্বারা বিভাজ্য (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$m=3$ হলে প্রমাণ করো যে, $\sqrt{n}$ একটি অমূলদ সংখ্যা।`,
          solution: {
            steps: [
              String.raw`$$m=3\ \text{হলে},\quad n=2m-1=2\times 3-1=5$$`,
              String.raw`ধরি, $\sqrt{5}$ একটি মূলদ সংখ্যা এবং $\sqrt{5}=\dfrac{p}{q}$; যেখানে $p$ ও $q$ পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা এবং $q>1$।`,
              String.raw`$$\text{বর্গ করে, } 5=\frac{p^{2}}{q^{2}}\qquad\text{বা, } 5q=\frac{p^{2}}{q}$$`,
              String.raw`এখানে $5q$ একটি পূর্ণসংখ্যা, কিন্তু $p$ ও $q$ সহমৌলিক ও $q>1$ বলে $\dfrac{p^{2}}{q}$ পূর্ণসংখ্যা নয়।`,
              String.raw`$\therefore\;5q\neq\dfrac{p^{2}}{q}$, অর্থাৎ $\sqrt{5}$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা যাবে না।`,
              String.raw`$\therefore\;\sqrt{n}=\sqrt{5}$ একটি অমূলদ সংখ্যা। (প্রমাণিত)`,
            ],
            answer: String.raw`$\sqrt{5}$ অমূলদ (প্রমাণিত)`,
          },
        },
      ],
    },
    {
      id: 22,
      group: NUM_MODEL_CQ,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$a=0.\dot{2}$ এবং $b=0.\dot{3}$ হলে দেখাও যে, $(a+b)$ একটি মূলদ সংখ্যা।`,
          solution: {
            steps: [
              String.raw`$$a=0.\dot{2}=\frac{2}{9},\qquad b=0.\dot{3}=\frac{3}{9}=\frac{1}{3}$$`,
              String.raw`$$\therefore\;a+b=\frac{2}{9}+\frac{3}{9}=\frac{5}{9}$$`,
              String.raw`এখানে $5$ ও $9$ পূর্ণসংখ্যা এবং $9\neq 0$, অর্থাৎ $(a+b)$ কে $\dfrac{p}{q}$ আকারে প্রকাশ করা গেল।`,
              String.raw`$$\therefore\;a+b=\frac{5}{9}=0.\dot{5}\quad\text{একটি মূলদ সংখ্যা। (দেখানো হলো)}$$`,
            ],
            answer: String.raw`$a+b=\dfrac{5}{9}$, একটি মূলদ সংখ্যা`,
          },
        },
        {
          label: "খ",
          question: String.raw`বর্গমূল নির্ণয় না করে দেখাও যে, $\sqrt{10}$ সংখ্যাটি $3$ ও $4$ এর মধ্যে অবস্থিত।`,
          figure: "root10-between",
          solution: {
            steps: [
              String.raw`$$3^{2}=9\quad\text{এবং}\quad 4^{2}=16$$`,
              String.raw`$$\therefore\;9<10<16$$`,
              String.raw`ধনাত্মক সংখ্যার ক্ষেত্রে বড় সংখ্যার বর্গমূলও বড় হয়, তাই অসমতার প্রতিটি পদের বর্গমূল নিয়ে,`,
              String.raw`$$\sqrt{9}<\sqrt{10}<\sqrt{16}$$`,
              String.raw`$$\therefore\;3<\sqrt{10}<4$$`,
              String.raw`অর্থাৎ বর্গমূলের মান না বের করেই বলা যায়, $\sqrt{10}$ সংখ্যাটি $3$ ও $4$ এর মধ্যে অবস্থিত। (দেখানো হলো)`,
            ],
            answer: String.raw`$3<\sqrt{10}<4$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$1.25\dot{7}\dot{4}$ ও $0.3\dot{6}1\dot{2}$ আবৃত দশমিক ভগ্নাংশদ্বয়কে সদৃশ আবৃত দশমিক ভগ্নাংশে প্রকাশ করো।`,
          solution: {
            steps: [
              String.raw`$1.25\dot{7}\dot{4}$ এ অনাবৃত অঙ্ক $2$টি ($25$) ও আবৃত অঙ্ক $2$টি ($74$)।`,
              String.raw`$0.3\dot{6}1\dot{2}$ এ অনাবৃত অঙ্ক $1$টি ($3$) ও আবৃত অঙ্ক $3$টি ($612$)।`,
              String.raw`অনাবৃত অঙ্কের সর্বোচ্চ সংখ্যা $2$ এবং আবৃত অঙ্ক $2$ ও $3$ এর ল.সা.গু. $6$।`,
              String.raw`সুতরাং প্রত্যেকটির অনাবৃত অংশ $2$ অঙ্কের ও আবৃত অংশ $6$ অঙ্কের করতে হবে।`,
              String.raw`$$1.25\dot{7}\dot{4}=1.25747474\dots=1.25\dot{7}4747\dot{4}$$`,
              String.raw`$$0.3\dot{6}1\dot{2}=0.3612612612\dots=0.36\dot{1}2612\dot{6}$$`,
            ],
            answer: String.raw`$1.25\dot{7}4747\dot{4}$ এবং $0.36\dot{1}2612\dot{6}$`,
          },
        },
      ],
    },
  ],
};

// ─────────────── অধ্যায় ২ · সেট ও ফাংশন ───────────────
//
// অনুশীলনী ২.১ প্রতিটি প্রশ্নের সঙ্গে নিজের নির্দেশ বহন করে, তাই এখানে কোনো
// group heading নেই। অনুশীলনী ২.২ শুরু হয় চারটি বহুনির্বাচনি প্রশ্ন দিয়ে,
// তারপর লিখিত প্রশ্ন — সেই দুই ভাগ দুটি heading পায়।

const SET_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const SET_WRITTEN = "লিখিত প্রশ্ন (৫ – ১৬)";

const exercise21: Exercise = {
  id: "2.1",
  bnId: "অনুশীলনী ২.১",
  title: "সেট",
  bookPages: "৩১ – ৩২",
  formulas: [
    {
      title: "সেট ও তার প্রকাশ",
      formulas: [
        {
          statement: String.raw`$$x\in A,\qquad x\notin A$$`,
          note: String.raw`$x\in A$ পড়া হয় "$x$, $A$ সেটের সদস্য"; $x\notin A$ মানে $x$ ওই সেটের সদস্য নয়।`,
        },
        {
          statement: String.raw`$$A=\{a,b\},\qquad B=\{2,4,6\}$$`,
          note: "তালিকা পদ্ধতি — সব উপাদান দ্বিতীয় বন্ধনীর ভিতরে, কমা দিয়ে আলাদা করে লেখা হয়।",
        },
        {
          statement: String.raw`$$A=\{x:x\ \text{স্বাভাবিক বিজোড় সংখ্যা}\}$$`,
          note: String.raw`সেট গঠন পদ্ধতি — উপাদানগুলো না লিখে উপাদান নির্ধারণের শর্ত লেখা হয়। ':' পড়া হয় "এরূপ যেন", তাই একে Rule Method-ও বলা হয়।`,
        },
      ],
    },
    {
      title: "সেটের প্রকারভেদ",
      formulas: [
        {
          statement: String.raw`$$E=\{3,6,9,\dots,60\}$$`,
          note: "সসীম সেট — উপাদান গণনা করে শেষ করা যায়। এখানে উপাদান সংখ্যা ২০।",
        },
        {
          statement: String.raw`$$N=\{1,2,3,4,\dots\}$$`,
          note: "অসীম সেট — উপাদান গণনা করে শেষ করা যায় না।",
        },
        {
          statement: String.raw`$$\varnothing=\{\ \}$$`,
          note: String.raw`ফাঁকা সেট — কোনো উপাদান নেই। লক্ষ করো, $\{\varnothing\}$ ফাঁকা নয়; এর একটি উপাদান আছে।`,
        },
      ],
    },
    {
      title: "উপসেট ও শক্তি সেট",
      formulas: [
        {
          statement: String.raw`$$B\subseteq A$$`,
          note: String.raw`$B$-এর প্রতিটি উপাদান $A$-এ থাকলে। প্রতিটি সেট নিজের উপসেট, আর $\varnothing$ যেকোনো সেটের উপসেট।`,
        },
        {
          statement: String.raw`$$B\subset A$$`,
          note: String.raw`প্রকৃত উপসেট — $B\subseteq A$ এবং $B$-এর উপাদান সংখ্যা $A$-এর উপাদান সংখ্যার চেয়ে কম।`,
        },
        {
          statement: String.raw`$$n(A)=n\;\Rightarrow\;\text{উপসেট সংখ্যা}=2^{n}$$`,
          note: String.raw`এবং প্রকৃত উপসেটের সংখ্যা $2^{n}-1$।`,
        },
        {
          statement: String.raw`$$P(A)=\{X:X\subseteq A\},\qquad n\big(P(A)\big)=2^{n(A)}$$`,
          note: String.raw`শক্তি সেট — $A$-এর সব উপসেট নিয়ে গঠিত সেট। উপসেটগুলো এখানে উপাদান, তাই $P(A)$-এর প্রতিটি উপাদানই একটি সেট।`,
        },
      ],
    },
    {
      title: "সেটের কাজ",
      formulas: [
        {
          statement: String.raw`$$A\cup B=\{x:x\in A\ \text{অথবা}\ x\in B\}$$`,
          note: "সংযোগ সেট — দুই সেটের সব উপাদান একসঙ্গে, পুনরাবৃত্তি ছাড়া।",
        },
        {
          statement: String.raw`$$A\cap B=\{x:x\in A\ \text{এবং}\ x\in B\}$$`,
          note: "ছেদ সেট — কেবল সাধারণ উপাদানগুলো।",
        },
        {
          statement: String.raw`$$A\setminus B=\{x:x\in A,\ x\notin B\}$$`,
          note: String.raw`অন্তর, পড়া হয় "$A$ বাদ $B$"। একে $A-B$ও লেখা হয়।`,
        },
        {
          statement: String.raw`$$A^{c}=U\setminus A$$`,
          note: String.raw`পূরক সেট — সার্বিক সেট $U$-এর যেসব উপাদান $A$-এ নেই। একে $A'$ও লেখা হয়।`,
        },
        {
          statement: String.raw`$$A\cap B=\varnothing$$`,
          note: "কোনো সাধারণ উপাদান না থাকলে সেট দুইটি পরস্পর নিশ্ছেদ।",
        },
      ],
    },
    {
      title: "ক্রমজোড় ও কার্তেসীয় গুণজ",
      formulas: [
        {
          statement: String.raw`$$(x,y)=(a,b)\iff x=a\ \text{এবং}\ y=b$$`,
          note: String.raw`ক্রমজোড়ে কোনটি প্রথম আর কোনটি দ্বিতীয় তা নির্দিষ্ট, তাই দুইটি ক্রমজোড় সমান হলে প্রথম পদ প্রথম পদের সমান, দ্বিতীয় পদ দ্বিতীয় পদের সমান — এভাবেই দুইটি সমীকরণ পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$A\times B=\{(x,y):x\in A\ \text{এবং}\ y\in B\}$$`,
          note: String.raw`কার্তেসীয় গুণজ, পড়া হয় $A$ ক্রস $B$। উপাদান সংখ্যা $n(A\times B)=n(A)\times n(B)$, এবং সাধারণত $A\times B\neq B\times A$।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ২২.
    {
      id: 1,
      question: String.raw`$A=\{7,14,21,28\}$ সেটটিকে সেট গঠন পদ্ধতিতে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`$A$ সেটের উপাদানসমূহ $7,14,21,28$।`,
          String.raw`এখানে, প্রত্যেকটি উপাদান $7$ দ্বারা বিভাজ্য, অর্থাৎ $7$ এর গুণিতক এবং $28$ এর বড় নয়।`,
          String.raw`$$\therefore\;A=\{x:x,\ 7\ \text{এর গুণিতক এবং}\ 0<x\le 28\}$$`,
        ],
        answer: String.raw`$A=\{x:x,\ 7\ \text{এর গুণিতক এবং}\ 0<x\le 28\}$`,
      },
    },
    // উদাহরণ ২ — book page ২২.
    {
      id: 2,
      question: String.raw`$B=\{x:x,\ 28\ \text{এর গুণনীয়ক}\}$ সেটটিকে তালিকা পদ্ধতিতে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`$$28=1\times 28=2\times 14=4\times 7$$`,
          String.raw`$\therefore\;28$ এর গুণনীয়কসমূহ $1,2,4,7,14,28$।`,
          String.raw`$$\therefore\;B=\{1,2,4,7,14,28\}$$`,
        ],
        answer: String.raw`$B=\{1,2,4,7,14,28\}$`,
      },
    },
    // উদাহরণ ৩ — book pages ২২-২৩.
    {
      id: 3,
      question: String.raw`$C=\{x:x\ \text{ধনাত্মক পূর্ণসংখ্যা এবং}\ x^{2}<18\}$ সেটটিকে তালিকা পদ্ধতিতে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`ধনাত্মক পূর্ণসংখ্যাসমূহ $1,2,3,4,5,\dots$`,
          String.raw`$$x=1\ \text{হলে}\ x^{2}=1^{2}=1;\qquad x=2\ \text{হলে}\ x^{2}=2^{2}=4$$`,
          String.raw`$$x=3\ \text{হলে}\ x^{2}=3^{2}=9;\qquad x=4\ \text{হলে}\ x^{2}=4^{2}=16$$`,
          String.raw`$$x=5\ \text{হলে}\ x^{2}=5^{2}=25,\ \text{যা}\ 18\ \text{এর চেয়ে বড়}$$`,
          String.raw`$\therefore$ শর্তানুসারে গ্রহণযোগ্য ধনাত্মক পূর্ণসংখ্যাসমূহ $1,2,3$ এবং $4$।`,
          String.raw`$$\therefore\;C=\{1,2,3,4\}$$`,
        ],
        answer: String.raw`$C=\{1,2,3,4\}$`,
      },
    },
    // উদাহরণ ৪ — book page ২৩.
    {
      id: 4,
      question: String.raw`দেখাও যে, সকল স্বাভাবিক সংখ্যার সেট একটি অসীম সেট।`,
      solution: {
        steps: [
          String.raw`ধরা যাক, স্বাভাবিক সংখ্যার সেট $N$ একটি সসীম সেট।`,
          String.raw`তাহলে এই সেটের অবশ্যই একটি সর্বোচ্চ উপাদান $K$ থাকবে, যেখানে $K\in N$।`,
          String.raw`কিন্তু স্বাভাবিক সংখ্যার ধারণা অনুসারে, $K$ যদি একটি স্বাভাবিক সংখ্যা হয়, তাহলে $K+1$ও একটি স্বাভাবিক সংখ্যা হবে, যা $K$ এর চেয়েও বড়।`,
          String.raw`তাহলে $K+1$ অবশ্যই $N$ সেটের একটি উপাদান হবে, অর্থাৎ $K+1\in N$ হবে।`,
          String.raw`কিন্তু শুরুতে আমরা $N$ সেটের সর্বোচ্চ উপাদান হিসেবে $K$ সংখ্যাটি ধরেছিলাম — যা এখন ভুল প্রমাণিত হলো।`,
          String.raw`একইভাবে দেখানো যায় যে, $K+2,\ K+3,\ \dots$ সংখ্যাগুলোও $N$ সেটের উপাদান হবে।`,
          String.raw`সুতরাং স্বাভাবিক সংখ্যার সেট $N$ সসীম হতে পারে না।`,
        ],
        answer: String.raw`স্বাভাবিক সংখ্যার সেট একটি অসীম সেট (দেখানো হলো)`,
      },
    },
    // উদাহরণ ৫ — book page ২৫.
    {
      id: 5,
      question: String.raw`$P=\{x,y,z\}$ এর উপসেটগুলো লিখ এবং সেগুলো থেকে প্রকৃত উপসেট বাছাই করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $P=\{x,y,z\}$, অর্থাৎ $n(P)=3$।`,
          String.raw`$\therefore$ উপসেটের সংখ্যা $=2^{3}=8$।`,
          String.raw`$P$ এর উপসেটসমূহ $\{x,y,z\},\ \{x,y\},\ \{x,z\},\ \{y,z\},\ \{x\},\ \{y\},\ \{z\},\ \varnothing$।`,
          String.raw`এদের মধ্যে $\{x,y,z\}$ সেটটি $P$ এর সমান, তাই সেটি প্রকৃত উপসেট নয়; বাকি $2^{3}-1=7$ টিই প্রকৃত উপসেট।`,
          String.raw`$P$ এর প্রকৃত উপসেটসমূহ $\{x,y\},\ \{x,z\},\ \{y,z\},\ \{x\},\ \{y\},\ \{z\},\ \varnothing$।`,
        ],
        answer: String.raw`উপসেট $8$ টি এবং প্রকৃত উপসেট $7$ টি`,
      },
    },
    // উদাহরণ ৬ — book pages ২৫-২৬.
    {
      id: 6,
      question: String.raw`$P=\{x:x,\ 12\ \text{এর গুণনীয়কসমূহ}\}$ এবং $Q=\{x:x,\ 3\ \text{এর গুণিতক এবং}\ x\le 12\}$ হলে, $P-Q$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $P=\{x:x,\ 12\ \text{এর গুণনীয়কসমূহ}\}$`,
          String.raw`এখানে, $12$ এর গুণনীয়কসমূহ $1,2,3,4,6,12$`,
          String.raw`$$\therefore\;P=\{1,2,3,4,6,12\}$$`,
          String.raw`আবার, $Q=\{x:x,\ 3\ \text{এর গুণিতক এবং}\ x\le 12\}$`,
          String.raw`এখানে, $12$ পর্যন্ত $3$ এর গুণিতকসমূহ $3,6,9,12$`,
          String.raw`$$\therefore\;Q=\{3,6,9,12\}$$`,
          String.raw`$$\therefore\;P-Q=\{1,2,3,4,6,12\}-\{3,6,9,12\}=\{1,2,4\}$$`,
        ],
        answer: String.raw`$P-Q=\{1,2,4\}$`,
      },
    },
    // উদাহরণ ৭ — book page ২৬.
    {
      id: 7,
      question: String.raw`$U=\{1,2,3,4,5,6,7\}$, $A=\{2,4,6,7\}$ এবং $B=\{1,3,5\}$ হলে, $A^{c}$ ও $B^{c}$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$A^{c}=U\setminus A=\{1,2,3,4,5,6,7\}\setminus\{2,4,6,7\}=\{1,3,5\}$$`,
          String.raw`$$B^{c}=U\setminus B=\{1,2,3,4,5,6,7\}\setminus\{1,3,5\}=\{2,4,6,7\}$$`,
        ],
        answer: String.raw`$A^{c}=\{1,3,5\}$ এবং $B^{c}=\{2,4,6,7\}$`,
      },
    },
    // উদাহরণ ৮ — book page ২৭.
    {
      id: 8,
      question: String.raw`$C=\{3,4,5\}$ এবং $D=\{4,6,8\}$ হলে, $C\cup D$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $C=\{3,4,5\}$ এবং $D=\{4,6,8\}$`,
          String.raw`$$\therefore\;C\cup D=\{3,4,5\}\cup\{4,6,8\}=\{3,4,5,6,8\}$$`,
          String.raw`সাধারণ উপাদান $4$ সংযোগ সেটে একবারই লেখা হয়।`,
        ],
        answer: String.raw`$C\cup D=\{3,4,5,6,8\}$`,
      },
    },
    // উদাহরণ ৯ — book page ২৭.
    {
      id: 9,
      question: String.raw`$P=\{x\in N:2<x\le 6\}$ এবং $Q=\{x\in N:x\ \text{জোড় সংখ্যা এবং}\ x\le 8\}$ হলে, $P\cap Q$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$P=\{x\in N:2<x\le 6\}=\{3,4,5,6\}$$`,
          String.raw`$$Q=\{x\in N:x\ \text{জোড় সংখ্যা এবং}\ x\le 8\}=\{2,4,6,8\}$$`,
          String.raw`$$\therefore\;P\cap Q=\{3,4,5,6\}\cap\{2,4,6,8\}=\{4,6\}$$`,
        ],
        answer: String.raw`$P\cap Q=\{4,6\}$`,
      },
    },
    // উদাহরণ ১০ — book page ২৮.
    {
      id: 10,
      question: String.raw`$A=\varnothing$, $B=\{a\}$, $C=\{a,b\}$ সেট তিনটির শক্তি সেটগুলোর উপাদান সংখ্যা কত?`,
      solution: {
        steps: [
          String.raw`এখানে, $P(A)=\{\varnothing\}$`,
          String.raw`$\therefore\;A$ সেটের উপাদান সংখ্যা শূন্য এবং এর শক্তি সেটের উপাদান সংখ্যা $=1=2^{0}$`,
          String.raw`আবার, $P(B)=\{\{a\},\varnothing\}$`,
          String.raw`$\therefore\;B$ সেটের উপাদান সংখ্যা $1$ এবং এর শক্তি সেটের উপাদান সংখ্যা $=2=2^{1}$`,
          String.raw`এবং $P(C)=\{\{a\},\{b\},\{a,b\},\varnothing\}$`,
          String.raw`$\therefore\;C$ সেটের উপাদান সংখ্যা $2$ এবং এর শক্তি সেটের উপাদান সংখ্যা $=4=2^{2}$`,
          String.raw`সুতরাং, কোনো সেটের উপাদান সংখ্যা $n$ হলে, ঐ সেটের শক্তি সেটের উপাদান সংখ্যা হবে $2^{n}$।`,
        ],
        answer: String.raw`যথাক্রমে $1,\ 2$ ও $4$ টি`,
      },
    },
    // উদাহরণ ১১ — book pages ২৮-২৯.
    {
      id: 11,
      question: String.raw`$(2x+y,3)=(6,x-y)$ হলে, $(x,y)$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $(2x+y,3)=(6,x-y)$`,
          String.raw`ক্রমজোড়ের শর্তমতে,`,
          String.raw`$$2x+y=6\quad\cdots\cdots(1)$$`,
          String.raw`$$x-y=3\quad\cdots\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ ও $(2)$ যোগ করে পাই, $3x=9$ বা $x=3$`,
          String.raw`সমীকরণ $(1)$ এ $x$ এর মান বসিয়ে পাই, $6+y=6$ বা $y=0$`,
          String.raw`$$\therefore\;(x,y)=(3,0)$$`,
        ],
        answer: String.raw`$(x,y)=(3,0)$`,
      },
    },
    // উদাহরণ ১২ — book page ২৯.
    {
      id: 12,
      question: String.raw`$P=\{1,2,3\}$, $Q=\{3,4\}$, $R=P\cap Q$ হলে, $P\times R$ এবং $R\times Q$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $P=\{1,2,3\}$, $Q=\{3,4\}$`,
          String.raw`এবং $R=P\cap Q=\{1,2,3\}\cap\{3,4\}=\{3\}$`,
          String.raw`$$\therefore\;P\times R=\{1,2,3\}\times\{3\}=\{(1,3),(2,3),(3,3)\}$$`,
          String.raw`$$\text{এবং}\;R\times Q=\{3\}\times\{3,4\}=\{(3,3),(3,4)\}$$`,
        ],
        answer: String.raw`$P\times R=\{(1,3),(2,3),(3,3)\}$ এবং $R\times Q=\{(3,3),(3,4)\}$`,
      },
    },
    // উদাহরণ ১৩ — book pages ২৯-৩০.
    {
      id: 13,
      question: String.raw`যে সকল স্বাভাবিক সংখ্যা দ্বারা $311$ এবং $419$ কে ভাগ করলে প্রতি ক্ষেত্রে $23$ অবশিষ্ট থাকে এদের সেট নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`যে স্বাভাবিক সংখ্যা দ্বারা $311$ এবং $419$ কে ভাগ করলে প্রতিক্ষেত্রে $23$ অবশিষ্ট থাকে, সে সংখ্যা হবে $23$ অপেক্ষা বড় এবং $311-23=288$ এবং $419-23=396$ এর সাধারণ গুণনীয়ক।`,
          String.raw`মনে করি, $23$ অপেক্ষা বড় $288$ এর গুণনীয়কসমূহের সেট $A$।`,
          String.raw`$$288=1\times 288=2\times 144=3\times 96=4\times 72=6\times 48=8\times 36=9\times 32=12\times 24=16\times 18$$`,
          String.raw`$$\therefore\;A=\{24,32,36,48,72,96,144,288\}$$`,
          String.raw`মনে করি, $23$ অপেক্ষা বড় $396$ এর গুণনীয়কসমূহের সেট $B$।`,
          String.raw`$$396=1\times 396=2\times 198=3\times 132=4\times 99=6\times 66=9\times 44=11\times 36=12\times 33=18\times 22$$`,
          String.raw`$$\therefore\;B=\{33,36,44,66,99,132,198,396\}$$`,
          String.raw`$$\therefore\;A\cap B=\{24,32,36,48,72,96,144,288\}\cap\{33,36,44,66,99,132,198,396\}$$`,
          String.raw`$$\therefore\;A\cap B=\{36\}$$`,
        ],
        answer: String.raw`নির্ণেয় সেট $\{36\}$`,
      },
    },
    // উদাহরণ ১৪ — book pages ৩০-৩১.
    {
      id: 14,
      question: String.raw`$100$ জন শিক্ষার্থীর মধ্যে কোনো পরীক্ষায় $88$ জন বাংলায়, $80$ জন গণিতে এবং $70$ জন উভয় বিষয়ে পাশ করেছে। ভেনচিত্রের সাহায্যে তথ্যগুলো প্রকাশ করো এবং কতজন শিক্ষার্থী উভয় বিষয়ে ফেল করেছে, তা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ভেনচিত্রে আয়তাকার ক্ষেত্রটি $100$ জন শিক্ষার্থীর সেট $U$ এবং বাংলায় ও গণিতে পাস শিক্ষার্থীদের সেট যথাক্রমে $B$ ও $M$ দ্বারা নির্দেশ করে। ফলে ভেনচিত্রটি চারটি নিশ্ছেদ সেটে বিভক্ত হয়েছে, যাদেরকে $P,Q,R,F$ দ্বারা চিহ্নিত করা হলো।`,
          String.raw`এখানে, উভয় বিষয়ে পাশ শিক্ষার্থীদের সেট $Q=B\cap M$, যার সদস্য সংখ্যা $70$`,
          String.raw`$P=$ শুধু বাংলায় পাশ শিক্ষার্থীদের সেট, যার সদস্য সংখ্যা $=88-70=18$`,
          String.raw`$R=$ শুধু গণিতে পাশ শিক্ষার্থীদের সেট, যার সদস্য সংখ্যা $=80-70=10$`,
          String.raw`$P\cup Q\cup R=B\cup M$, যেকোনো একটি বিষয়ে এবং উভয় বিষয়ে পাশ শিক্ষার্থীদের সেট, যার সদস্য সংখ্যা $=18+10+70=98$`,
          String.raw`$F=$ উভয় বিষয়ে ফেল করা শিক্ষার্থীদের সেট, যার সদস্য সংখ্যা $=100-98=2$`,
        ],
        answer: String.raw`উভয় বিষয়ে ফেল করেছে $2$ জন শিক্ষার্থী`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      question: String.raw`নিচের সেটগুলোকে তালিকা পদ্ধতিতে প্রকাশ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\{x\in N:x^{2}>9\ \text{এবং}\ x^{3}<130\}$$`,
          solution: {
            steps: [
              String.raw`এখানে $x$ স্বাভাবিক সংখ্যা, অর্থাৎ $x\in\{1,2,3,4,\dots\}$।`,
              String.raw`$x^{2}>9$ শর্ত থেকে পাই $x>3$, অর্থাৎ $x\ge 4$; কারণ $3^{2}=9$, যা $9$ এর বড় নয়।`,
              String.raw`$x^{3}<130$ শর্ত থেকে পাই $x\le 5$; কারণ $5^{3}=125<130$ কিন্তু $6^{3}=216>130$।`,
              String.raw`$\therefore$ উভয় শর্ত মানে এমন স্বাভাবিক সংখ্যা $4$ এবং $5$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{4,5\}$$`,
            ],
            answer: String.raw`$\{4,5\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\{x\in Z:x^{2}>5\ \text{এবং}\ x^{3}\le 36\}$$`,
          solution: {
            steps: [
              String.raw`এখানে $x$ পূর্ণসংখ্যা, অর্থাৎ $x\in\{\dots,-2,-1,0,1,2,\dots\}$।`,
              String.raw`$x^{2}>5$ শর্ত থেকে পাই $x\ge 3$ অথবা $x\le -3$; কারণ $2^{2}=4<5$ কিন্তু $3^{2}=9>5$।`,
              String.raw`$x^{3}\le 36$ শর্ত থেকে পাই $x\le 3$; কারণ $3^{3}=27\le 36$ কিন্তু $4^{3}=64>36$।`,
              String.raw`ঋণাত্মক পূর্ণসংখ্যার ঘন সর্বদাই ঋণাত্মক, তাই $x\le -3$ এমন প্রতিটি পূর্ণসংখ্যাই দ্বিতীয় শর্তটিও মানে।`,
              String.raw`$\therefore$ গ্রহণযোগ্য পূর্ণসংখ্যাগুলো হলো $x=3$ এবং $x\le -3$ এমন সব পূর্ণসংখ্যা।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{\dots,-5,-4,-3,3\}$$`,
            ],
            answer: String.raw`$\{\dots,-5,-4,-3,3\}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\{x\in N:x,\ 36\ \text{এর গুণনীয়ক এবং}\ 6\ \text{এর গুণিতক}\}$$`,
          solution: {
            steps: [
              String.raw`$$36=1\times 36=2\times 18=3\times 12=4\times 9=6\times 6$$`,
              String.raw`$\therefore\;36$ এর গুণনীয়কসমূহ $1,2,3,4,6,9,12,18,36$।`,
              String.raw`এদের মধ্যে যেগুলো $6$ এর গুণিতক, সেগুলো $6,12,18,36$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{6,12,18,36\}$$`,
            ],
            answer: String.raw`$\{6,12,18,36\}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$\{x\in N:x^{3}>25\ \text{এবং}\ x^{4}<264\}$$`,
          solution: {
            steps: [
              String.raw`এখানে $x$ স্বাভাবিক সংখ্যা।`,
              String.raw`$x^{3}>25$ শর্ত থেকে পাই $x\ge 3$; কারণ $2^{3}=8<25$ কিন্তু $3^{3}=27>25$।`,
              String.raw`$x^{4}<264$ শর্ত থেকে পাই $x\le 4$; কারণ $4^{4}=256<264$ কিন্তু $5^{4}=625>264$।`,
              String.raw`$\therefore$ উভয় শর্ত মানে এমন স্বাভাবিক সংখ্যা $3$ এবং $4$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{3,4\}$$`,
            ],
            answer: String.raw`$\{3,4\}$`,
          },
        },
      ],
    },
    {
      id: 2,
      question: String.raw`নিচের সেটগুলোকে সেট গঠন পদ্ধতিতে প্রকাশ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\{3,5,7,9,11\}$$`,
          solution: {
            steps: [
              String.raw`সেটটির উপাদানসমূহ $3,5,7,9,11$।`,
              String.raw`প্রত্যেকটি উপাদান বিজোড় স্বাভাবিক সংখ্যা, সবচেয়ে ছোটটি $3$ এবং সবচেয়ে বড়টি $11$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{x\in N:x\ \text{বিজোড় সংখ্যা এবং}\ 1<x<13\}$$`,
            ],
            answer: String.raw`$\{x\in N:x\ \text{বিজোড় সংখ্যা এবং}\ 1<x<13\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\{1,2,3,4,6,9,12,18,36\}$$`,
          solution: {
            steps: [
              String.raw`সেটটির উপাদানসমূহ $1,2,3,4,6,9,12,18,36$।`,
              String.raw`$$36=1\times 36=2\times 18=3\times 12=4\times 9=6\times 6$$`,
              String.raw`অর্থাৎ উপাদানগুলো ঠিক $36$ এর গুণনীয়কসমূহ, একটিও বাদ নেই।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{x\in N:x,\ 36\ \text{এর গুণনীয়ক}\}$$`,
            ],
            answer: String.raw`$\{x\in N:x,\ 36\ \text{এর গুণনীয়ক}\}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\{4,8,12,16,20,24,28,32,36,40\}$$`,
          solution: {
            steps: [
              String.raw`সেটটির প্রত্যেকটি উপাদান $4$ দ্বারা বিভাজ্য, অর্থাৎ $4$ এর গুণিতক।`,
              String.raw`গুণিতকগুলো $4$ থেকে শুরু হয়ে $40$ তে শেষ হয়েছে।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{x\in N:x,\ 4\ \text{এর গুণিতক এবং}\ x\le 40\}$$`,
            ],
            answer: String.raw`$\{x\in N:x,\ 4\ \text{এর গুণিতক এবং}\ x\le 40\}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$\{\pm 4,\pm 5,\pm 6\}$$`,
          solution: {
            steps: [
              String.raw`সেটটির উপাদানসমূহ $-6,-5,-4,4,5,6$, প্রত্যেকটিই পূর্ণসংখ্যা।`,
              String.raw`প্রত্যেকটির বর্গ $16,25$ বা $36$, অর্থাৎ $x^{2}\ge 16$; আবার কোনো উপাদানই $6$ এর বড় নয়, অর্থাৎ $x^{3}\le 216$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{x\in Z:x^{2}\ge 16\ \text{এবং}\ x^{3}\le 216\}$$`,
              String.raw`উল্লেখ্য, শর্ত দুইটি $-7,-8,\dots$ কেও মেনে নেয়। ঠিক প্রদত্ত ছয়টি উপাদানই পেতে চাইলে শর্তটি $\{x\in Z:16\le x^{2}\le 36\}$ আকারে লেখা যায়।`,
            ],
            answer: String.raw`$\{x\in Z:x^{2}\ge 16\ \text{এবং}\ x^{3}\le 216\}$`,
          },
        },
      ],
    },
    {
      id: 3,
      question: String.raw`$A=\{2,3,4\}$, $B=\{1,2,a\}$ এবং $C=\{2,a,b\}$ হলে, নিচের সেটগুলো নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$B\setminus C$$`,
          solution: {
            steps: [
              String.raw`$B$ এর যেসব উপাদান $C$ তে নেই, কেবল সেগুলোই $B\setminus C$ এর উপাদান।`,
              String.raw`$$B\setminus C=\{1,2,a\}\setminus\{2,a,b\}$$`,
              String.raw`এখানে $2$ ও $a$ উভয় সেটেই আছে, তাই বাদ যায়; থাকে কেবল $1$।`,
              String.raw`$$\therefore\;B\setminus C=\{1\}$$`,
            ],
            answer: String.raw`$B\setminus C=\{1\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$A\cup B$$`,
          solution: {
            steps: [
              String.raw`$$A\cup B=\{2,3,4\}\cup\{1,2,a\}$$`,
              String.raw`দুই সেটের সব উপাদান একসঙ্গে নিতে হবে, সাধারণ উপাদান $2$ একবারই লেখা হবে।`,
              String.raw`$$\therefore\;A\cup B=\{1,2,3,4,a\}$$`,
            ],
            answer: String.raw`$A\cup B=\{1,2,3,4,a\}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$A\cap C$$`,
          solution: {
            steps: [
              String.raw`$$A\cap C=\{2,3,4\}\cap\{2,a,b\}$$`,
              String.raw`দুই সেটের একমাত্র সাধারণ উপাদান $2$।`,
              String.raw`$$\therefore\;A\cap C=\{2\}$$`,
            ],
            answer: String.raw`$A\cap C=\{2\}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$A\cup(B\cap C)$$`,
          solution: {
            steps: [
              String.raw`প্রথমে বন্ধনীর ভিতরের অংশ:`,
              String.raw`$$B\cap C=\{1,2,a\}\cap\{2,a,b\}=\{2,a\}$$`,
              String.raw`$$\therefore\;A\cup(B\cap C)=\{2,3,4\}\cup\{2,a\}$$`,
              String.raw`$$\therefore\;A\cup(B\cap C)=\{2,3,4,a\}$$`,
            ],
            answer: String.raw`$A\cup(B\cap C)=\{2,3,4,a\}$`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$$A\cap(B\cup C)$$`,
          solution: {
            steps: [
              String.raw`প্রথমে বন্ধনীর ভিতরের অংশ:`,
              String.raw`$$B\cup C=\{1,2,a\}\cup\{2,a,b\}=\{1,2,a,b\}$$`,
              String.raw`$$\therefore\;A\cap(B\cup C)=\{2,3,4\}\cap\{1,2,a,b\}$$`,
              String.raw`$$\therefore\;A\cap(B\cup C)=\{2\}$$`,
            ],
            answer: String.raw`$A\cap(B\cup C)=\{2\}$`,
          },
        },
      ],
    },
    {
      id: 4,
      question: String.raw`$U=\{1,2,3,4,5,6,7\}$, $A=\{1,3,5\}$, $B=\{2,4,6\}$ এবং $C=\{3,4,5,6,7\}$ হলে, নিম্নলিখিত ক্ষেত্রে সত্যতা যাচাই করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$(A\cup B)'=A'\cap B'$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ:`,
              String.raw`$$A\cup B=\{1,3,5\}\cup\{2,4,6\}=\{1,2,3,4,5,6\}$$`,
              String.raw`$$\therefore\;(A\cup B)'=U\setminus(A\cup B)=\{1,2,3,4,5,6,7\}\setminus\{1,2,3,4,5,6\}=\{7\}\quad\cdots\cdots(1)$$`,
              String.raw`ডানপক্ষ:`,
              String.raw`$$A'=U\setminus A=\{1,2,3,4,5,6,7\}\setminus\{1,3,5\}=\{2,4,6,7\}$$`,
              String.raw`$$B'=U\setminus B=\{1,2,3,4,5,6,7\}\setminus\{2,4,6\}=\{1,3,5,7\}$$`,
              String.raw`$$\therefore\;A'\cap B'=\{2,4,6,7\}\cap\{1,3,5,7\}=\{7\}\quad\cdots\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ তুলনা করে পাই, $(A\cup B)'=A'\cap B'$`,
            ],
            answer: String.raw`$(A\cup B)'=A'\cap B'=\{7\}$ — সত্যতা যাচাই করা হলো`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$(B\cap C)'=B'\cup C'$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ:`,
              String.raw`$$B\cap C=\{2,4,6\}\cap\{3,4,5,6,7\}=\{4,6\}$$`,
              String.raw`$$\therefore\;(B\cap C)'=\{1,2,3,4,5,6,7\}\setminus\{4,6\}=\{1,2,3,5,7\}\quad\cdots\cdots(1)$$`,
              String.raw`ডানপক্ষ:`,
              String.raw`$$B'=\{1,2,3,4,5,6,7\}\setminus\{2,4,6\}=\{1,3,5,7\}$$`,
              String.raw`$$C'=\{1,2,3,4,5,6,7\}\setminus\{3,4,5,6,7\}=\{1,2\}$$`,
              String.raw`$$\therefore\;B'\cup C'=\{1,3,5,7\}\cup\{1,2\}=\{1,2,3,5,7\}\quad\cdots\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ তুলনা করে পাই, $(B\cap C)'=B'\cup C'$`,
            ],
            answer: String.raw`$(B\cap C)'=B'\cup C'=\{1,2,3,5,7\}$ — সত্যতা যাচাই করা হলো`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$(A\cup B)\cap C=(A\cap C)\cup(B\cap C)$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ:`,
              String.raw`$$A\cup B=\{1,3,5\}\cup\{2,4,6\}=\{1,2,3,4,5,6\}$$`,
              String.raw`$$\therefore\;(A\cup B)\cap C=\{1,2,3,4,5,6\}\cap\{3,4,5,6,7\}=\{3,4,5,6\}\quad\cdots\cdots(1)$$`,
              String.raw`ডানপক্ষ:`,
              String.raw`$$A\cap C=\{1,3,5\}\cap\{3,4,5,6,7\}=\{3,5\}$$`,
              String.raw`$$B\cap C=\{2,4,6\}\cap\{3,4,5,6,7\}=\{4,6\}$$`,
              String.raw`$$\therefore\;(A\cap C)\cup(B\cap C)=\{3,5\}\cup\{4,6\}=\{3,4,5,6\}\quad\cdots\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ তুলনা করে পাই, $(A\cup B)\cap C=(A\cap C)\cup(B\cap C)$`,
            ],
            answer: String.raw`উভয় পক্ষ $=\{3,4,5,6\}$ — সত্যতা যাচাই করা হলো`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$(A\cap B)\cup C=(A\cup C)\cap(B\cup C)$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ:`,
              String.raw`$$A\cap B=\{1,3,5\}\cap\{2,4,6\}=\varnothing$$`,
              String.raw`$$\therefore\;(A\cap B)\cup C=\varnothing\cup\{3,4,5,6,7\}=\{3,4,5,6,7\}\quad\cdots\cdots(1)$$`,
              String.raw`ডানপক্ষ:`,
              String.raw`$$A\cup C=\{1,3,5\}\cup\{3,4,5,6,7\}=\{1,3,4,5,6,7\}$$`,
              String.raw`$$B\cup C=\{2,4,6\}\cup\{3,4,5,6,7\}=\{2,3,4,5,6,7\}$$`,
              String.raw`$$\therefore\;(A\cup C)\cap(B\cup C)=\{1,3,4,5,6,7\}\cap\{2,3,4,5,6,7\}=\{3,4,5,6,7\}\quad\cdots\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ তুলনা করে পাই, $(A\cap B)\cup C=(A\cup C)\cap(B\cup C)$`,
            ],
            answer: String.raw`উভয় পক্ষ $=\{3,4,5,6,7\}$ — সত্যতা যাচাই করা হলো`,
          },
        },
      ],
    },
    {
      id: 5,
      question: String.raw`$Q=\{x,y\}$ এবং $R=\{m,n,l\}$ হলে, $P(Q)$ এবং $P(R)$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $Q=\{x,y\}$, অর্থাৎ $n(Q)=2$।`,
          String.raw`$\therefore\;Q$ এর উপসেটের সংখ্যা $=2^{2}=4$।`,
          String.raw`$Q$ এর উপসেটসমূহ $\varnothing,\ \{x\},\ \{y\},\ \{x,y\}$।`,
          String.raw`$$\therefore\;P(Q)=\{\varnothing,\{x\},\{y\},\{x,y\}\}$$`,
          String.raw`আবার, $R=\{m,n,l\}$, অর্থাৎ $n(R)=3$।`,
          String.raw`$\therefore\;R$ এর উপসেটের সংখ্যা $=2^{3}=8$।`,
          String.raw`$$\therefore\;P(R)=\{\varnothing,\{m\},\{n\},\{l\},\{m,n\},\{m,l\},\{n,l\},\{m,n,l\}\}$$`,
        ],
        answer: String.raw`$P(Q)=\{\varnothing,\{x\},\{y\},\{x,y\}\}$ এবং $P(R)=\{\varnothing,\{m\},\{n\},\{l\},\{m,n\},\{m,l\},\{n,l\},\{m,n,l\}\}$`,
      },
    },
    {
      id: 6,
      question: String.raw`$A=\{a,b\}$, $B=\{a,b,c\}$ এবং $C=A\cup B$ হলে, দেখাও যে, $P(C)$ এর উপাদান সংখ্যা $2^{n}$, যেখানে $n$ হচ্ছে $C$ এর উপাদান সংখ্যা।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $A=\{a,b\}$ এবং $B=\{a,b,c\}$`,
          String.raw`$$\therefore\;C=A\cup B=\{a,b\}\cup\{a,b,c\}=\{a,b,c\}$$`,
          String.raw`$\therefore\;C$ এর উপাদান সংখ্যা $n=3$।`,
          String.raw`$C$ এর উপসেটসমূহ নিলে পাই,`,
          String.raw`$$P(C)=\{\varnothing,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\}\}$$`,
          String.raw`এখানে $P(C)$ এর উপাদান সংখ্যা $=8$।`,
          String.raw`$$\text{আবার, } 2^{n}=2^{3}=8$$`,
          String.raw`$\therefore\;P(C)$ এর উপাদান সংখ্যা $=2^{n}$, যেখানে $n=n(C)$।`,
        ],
        answer: String.raw`$n\big(P(C)\big)=8=2^{3}=2^{n}$ (দেখানো হলো)`,
      },
    },
    {
      id: 7,
      question: String.raw`ক্রমজোড়ের সমতা থেকে চলকের মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$(x-1,y+2)=(y-2,2x+1)$ হলে, $x$ এবং $y$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $(x-1,y+2)=(y-2,2x+1)$`,
              String.raw`ক্রমজোড়ের শর্তমতে,`,
              String.raw`$$x-1=y-2\quad\text{বা,}\quad x-y=-1\quad\cdots\cdots(1)$$`,
              String.raw`$$y+2=2x+1\quad\text{বা,}\quad 2x-y=1\quad\cdots\cdots(2)$$`,
              String.raw`সমীকরণ $(2)$ হতে $(1)$ বিয়োগ করে পাই,`,
              String.raw`$$(2x-y)-(x-y)=1-(-1)$$`,
              String.raw`$$\text{or, } x=2$$`,
              String.raw`সমীকরণ $(1)$ এ $x=2$ বসিয়ে পাই, $2-y=-1$ বা, $y=3$`,
              String.raw`$$\therefore\;x=2,\;y=3$$`,
            ],
            answer: String.raw`$x=2$ এবং $y=3$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$(ax-cy,a^{2}-c^{2})=(0,ay-cx)$ হলে, $(x,y)$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $(ax-cy,a^{2}-c^{2})=(0,ay-cx)$`,
              String.raw`ক্রমজোড়ের শর্তমতে,`,
              String.raw`$$ax-cy=0\quad\cdots\cdots(1)$$`,
              String.raw`$$a^{2}-c^{2}=ay-cx\quad\cdots\cdots(2)$$`,
              String.raw`সমীকরণ $(1)$ হতে পাই, $ax=cy$ বা, $x=\dfrac{cy}{a}$`,
              String.raw`এই মান সমীকরণ $(2)$ এ বসিয়ে পাই,`,
              String.raw`$$a^{2}-c^{2}=ay-c\cdot\frac{cy}{a}$$`,
              String.raw`$$\text{or, } a^{2}-c^{2}=\frac{a^{2}y-c^{2}y}{a}$$`,
              String.raw`$$\text{or, } a^{2}-c^{2}=\frac{y\left(a^{2}-c^{2}\right)}{a}$$`,
              String.raw`$$\therefore\; y=a\qquad\left[\,a^{2}-c^{2}\neq 0\,\right]$$`,
              String.raw`$\therefore\;x=\dfrac{cy}{a}=\dfrac{c\cdot a}{a}=c$`,
              String.raw`$$\therefore\;(x,y)=(c,a)$$`,
            ],
            answer: String.raw`$(x,y)=(c,a)$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$(6x-y,13)=(1,3x+2y)$ হলে, $(x,y)$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $(6x-y,13)=(1,3x+2y)$`,
              String.raw`ক্রমজোড়ের শর্তমতে,`,
              String.raw`$$6x-y=1\quad\cdots\cdots(1)$$`,
              String.raw`$$3x+2y=13\quad\cdots\cdots(2)$$`,
              String.raw`সমীকরণ $(1)$ কে $2$ দ্বারা গুণ করে পাই, $12x-2y=2\quad\cdots\cdots(3)$`,
              String.raw`সমীকরণ $(2)$ ও $(3)$ যোগ করে পাই,`,
              String.raw`$$15x=15\quad\text{বা,}\quad x=1$$`,
              String.raw`সমীকরণ $(1)$ এ $x=1$ বসিয়ে পাই, $6-y=1$ বা, $y=5$`,
              String.raw`$$\therefore\;(x,y)=(1,5)$$`,
            ],
            answer: String.raw`$(x,y)=(1,5)$`,
          },
        },
      ],
    },
    {
      id: 8,
      question: String.raw`কার্তেসীয় গুণজ নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$P=\{a\}$, $Q=\{b,c\}$ হলে, $P\times Q$ এবং $Q\times P$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $P=\{a\}$ এবং $Q=\{b,c\}$`,
              String.raw`$P\times Q$ এ প্রথম পদ $P$ থেকে এবং দ্বিতীয় পদ $Q$ থেকে নিতে হবে।`,
              String.raw`$$\therefore\;P\times Q=\{a\}\times\{b,c\}=\{(a,b),(a,c)\}$$`,
              String.raw`আবার, $Q\times P$ এ প্রথম পদ $Q$ থেকে এবং দ্বিতীয় পদ $P$ থেকে নিতে হবে।`,
              String.raw`$$\therefore\;Q\times P=\{b,c\}\times\{a\}=\{(b,a),(c,a)\}$$`,
            ],
            answer: String.raw`$P\times Q=\{(a,b),(a,c)\}$ এবং $Q\times P=\{(b,a),(c,a)\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$A=\{3,4,5\}$, $B=\{4,5,6\}$ এবং $C=\{x,y\}$ হলে, $(A\cap B)\times C$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`প্রথমে ছেদ সেটটি নির্ণয় করি:`,
              String.raw`$$A\cap B=\{3,4,5\}\cap\{4,5,6\}=\{4,5\}$$`,
              String.raw`$$\therefore\;(A\cap B)\times C=\{4,5\}\times\{x,y\}$$`,
              String.raw`$$\therefore\;(A\cap B)\times C=\{(4,x),(4,y),(5,x),(5,y)\}$$`,
            ],
            answer: String.raw`$(A\cap B)\times C=\{(4,x),(4,y),(5,x),(5,y)\}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$P=\{3,5,7\}$, $Q=\{5,7\}$ এবং $R=P\setminus Q$ হলে, $(P\cup Q)\times R$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$R=P\setminus Q=\{3,5,7\}\setminus\{5,7\}=\{3\}$$`,
              String.raw`$$P\cup Q=\{3,5,7\}\cup\{5,7\}=\{3,5,7\}$$`,
              String.raw`$$\therefore\;(P\cup Q)\times R=\{3,5,7\}\times\{3\}$$`,
              String.raw`$$\therefore\;(P\cup Q)\times R=\{(3,3),(5,3),(7,3)\}$$`,
            ],
            answer: String.raw`$(P\cup Q)\times R=\{(3,3),(5,3),(7,3)\}$`,
          },
        },
      ],
    },
    {
      id: 9,
      question: String.raw`$A$ ও $B$ যথাক্রমে $35$ এবং $45$ এর সকল গুণনীয়কের সেট হলে, $A\cup B$ ও $A\cap B$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$35=1\times 35=5\times 7$$`,
          String.raw`$\therefore\;35$ এর গুণনীয়কসমূহ $1,5,7,35$, অর্থাৎ $A=\{1,5,7,35\}$`,
          String.raw`$$45=1\times 45=3\times 15=5\times 9$$`,
          String.raw`$\therefore\;45$ এর গুণনীয়কসমূহ $1,3,5,9,15,45$, অর্থাৎ $B=\{1,3,5,9,15,45\}$`,
          String.raw`$$\therefore\;A\cup B=\{1,5,7,35\}\cup\{1,3,5,9,15,45\}=\{1,3,5,7,9,15,35,45\}$$`,
          String.raw`$$\therefore\;A\cap B=\{1,5,7,35\}\cap\{1,3,5,9,15,45\}=\{1,5\}$$`,
        ],
        answer: String.raw`$A\cup B=\{1,3,5,7,9,15,35,45\}$ এবং $A\cap B=\{1,5\}$`,
      },
    },
    {
      id: 10,
      question: String.raw`যে সকল স্বাভাবিক সংখ্যা দ্বারা $346$ এবং $556$ কে ভাগ করলে প্রতিক্ষেত্রে $31$ অবশিষ্ট থাকে, এদের সেট নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ভাগ করার পর $31$ অবশিষ্ট থাকলে ভাজকটি $31$ অপেক্ষা বড় হতে হবে এবং $346-31=315$ ও $556-31=525$ উভয়কেই নিঃশেষে ভাগ করতে হবে।`,
          String.raw`মনে করি, $31$ অপেক্ষা বড় $315$ এর গুণনীয়কসমূহের সেট $A$।`,
          String.raw`$$315=1\times 315=3\times 105=5\times 63=7\times 45=9\times 35=15\times 21$$`,
          String.raw`$$\therefore\;A=\{35,45,63,105,315\}$$`,
          String.raw`মনে করি, $31$ অপেক্ষা বড় $525$ এর গুণনীয়কসমূহের সেট $B$।`,
          String.raw`$$525=1\times 525=3\times 175=5\times 105=7\times 75=15\times 35=21\times 25$$`,
          String.raw`$$\therefore\;B=\{35,75,105,175,525\}$$`,
          String.raw`$$\therefore\;A\cap B=\{35,45,63,105,315\}\cap\{35,75,105,175,525\}$$`,
          String.raw`$$\therefore\;A\cap B=\{35,105\}$$`,
        ],
        answer: String.raw`নির্ণেয় সেট $\{35,105\}$`,
      },
    },
    {
      id: 11,
      question: String.raw`কোনো শ্রেণির $30$ জন শিক্ষার্থীর মধ্যে $20$ জন ফুটবল এবং $15$ জন ক্রিকেট খেলা পছন্দ করে। দুইটি খেলাই পছন্দ করে এরূপ শিক্ষার্থীর সংখ্যা $10$। কতজন শিক্ষার্থী দুইটি খেলাই পছন্দ করে না তা ভেন চিত্রের সাহায্যে নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ভেনচিত্রে আয়তাকার ক্ষেত্রটি $30$ জন শিক্ষার্থীর সার্বিক সেট $U$, আর ফুটবল ও ক্রিকেট পছন্দকারীদের সেট যথাক্রমে $F$ ও $C$ নির্দেশ করে। বৃত্ত দুইটি সার্বিক সেটকে চারটি নিশ্ছেদ অংশে ভাগ করে — শুধু ফুটবল, উভয়, শুধু ক্রিকেট এবং কোনোটিই নয়।`,
          String.raw`দেওয়া আছে, $n(U)=30$, $n(F)=20$, $n(C)=15$ এবং $n(F\cap C)=10$`,
          String.raw`মাঝের অংশ, অর্থাৎ উভয় খেলা পছন্দ করে $10$ জন।`,
          String.raw`শুধু ফুটবল পছন্দ করে $=n(F)-n(F\cap C)=20-10=10$ জন`,
          String.raw`শুধু ক্রিকেট পছন্দ করে $=n(C)-n(F\cap C)=15-10=5$ জন`,
          String.raw`$\therefore$ অন্তত একটি খেলা পছন্দ করে,`,
          String.raw`$$n(F\cup C)=10+10+5=25\ \text{জন}$$`,
          String.raw`$\therefore$ কোনো খেলাই পছন্দ করে না,`,
          String.raw`$$n\big((F\cup C)'\big)=n(U)-n(F\cup C)=30-25=5\ \text{জন}$$`,
        ],
        answer: String.raw`$5$ জন শিক্ষার্থী দুইটি খেলার কোনোটিই পছন্দ করে না`,
      },
    },
    {
      id: 12,
      question: String.raw`$100$ জন শিক্ষার্থীর মধ্যে কোনো পরীক্ষায় $65$ শিক্ষার্থী বাংলায়, $48$ শিক্ষার্থী বাংলা ও ইংরেজি উভয় বিষয়ে পাশ এবং $15$ শিক্ষার্থী উভয় বিষয়ে ফেল করেছে।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$(1,x+y)=(2x-y,5)$ হলে $(x,y)$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $(1,x+y)=(2x-y,5)$`,
              String.raw`ক্রমজোড়ের শর্তমতে,`,
              String.raw`$$2x-y=1\quad\cdots\cdots(1)$$`,
              String.raw`$$x+y=5\quad\cdots\cdots(2)$$`,
              String.raw`সমীকরণ $(1)$ ও $(2)$ যোগ করে পাই,`,
              String.raw`$$3x=6\quad\text{বা,}\quad x=2$$`,
              String.raw`সমীকরণ $(2)$ এ $x=2$ বসিয়ে পাই, $2+y=5$ বা, $y=3$`,
              String.raw`$$\therefore\;(x,y)=(2,3)$$`,
            ],
            answer: String.raw`$(x,y)=(2,3)$`,
          },
        },
        {
          label: "খ",
          question: String.raw`শুধু বাংলায় ও শুধু ইংরেজিতে পাশ করেছে তাদের সংখ্যা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, বাংলায় পাশ শিক্ষার্থীদের সেট $B$ এবং ইংরেজিতে পাশ শিক্ষার্থীদের সেট $E$, আর সার্বিক সেট $U$ এ আছে $100$ জন।`,
              String.raw`দেওয়া আছে, $n(U)=100$, $n(B)=65$, $n(B\cap E)=48$ এবং উভয় বিষয়ে ফেল করেছে $15$ জন।`,
              String.raw`অন্তত একটি বিষয়ে পাশ করেছে,`,
              String.raw`$$n(B\cup E)=100-15=85$$`,
              String.raw`শুধু বাংলায় পাশ করেছে,`,
              String.raw`$$n(B)-n(B\cap E)=65-48=17\ \text{জন}$$`,
              String.raw`শুধু ইংরেজিতে পাশ করেছে,`,
              String.raw`$$n(B\cup E)-n(B)=85-65=20\ \text{জন}$$`,
              String.raw`যাচাই: $17+48+20=85$, যা $n(B\cup E)$ এর সমান।`,
            ],
            answer: String.raw`শুধু বাংলায় $17$ জন এবং শুধু ইংরেজিতে $20$ জন`,
          },
        },
        {
          label: "গ",
          question: String.raw`উভয় বিষয়ে পাশ এবং উভয় বিষয়ে ফেল সংখ্যাদ্বয়ের মৌলিক গুণনীয়কসমূহের সেট দুইটির সংযোগ সেট নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`উভয় বিষয়ে পাশ করেছে $48$ জন এবং উভয় বিষয়ে ফেল করেছে $15$ জন।`,
              String.raw`মনে করি, $48$ এর মৌলিক গুণনীয়কসমূহের সেট $P$ এবং $15$ এর মৌলিক গুণনীয়কসমূহের সেট $Q$।`,
              String.raw`$$48=2\times 2\times 2\times 2\times 3=2^{4}\times 3$$`,
              String.raw`$$\therefore\;P=\{2,3\}$$`,
              String.raw`$$15=3\times 5$$`,
              String.raw`$$\therefore\;Q=\{3,5\}$$`,
              String.raw`$$\therefore\;P\cup Q=\{2,3\}\cup\{3,5\}=\{2,3,5\}$$`,
            ],
            answer: String.raw`$P\cup Q=\{2,3,5\}$`,
          },
        },
      ],
    },
  ],
};

// অনুশীলনী ২.২ — book pages ৪০-৪১. প্রথম চারটি বহুনির্বাচনি, বাকিগুলো লিখিত।

const exercise22: Exercise = {
  id: "2.2",
  bnId: "অনুশীলনী ২.২",
  title: "অন্বয় ও ফাংশন",
  bookPages: "৪০ – ৪১",
  formulas: [
    {
      title: "আগের আলোচনা থেকে যা লাগবে",
      formulas: [
        {
          statement: String.raw`$$A\times B=\{(x,y):x\in A\ \text{এবং}\ y\in B\}$$`,
          note: String.raw`অন্বয় সব সময় এই কার্তেসীয় গুণজের ভিতর থেকেই বাছাই করা হয়।`,
        },
        {
          statement: String.raw`$$n\big(P(A)\big)=2^{n(A)}$$`,
          note: String.raw`শক্তি সেটের উপাদান সংখ্যা। যেমন $n(A)=1$ হলে $P(A)$ এর উপাদান সংখ্যা $2$।`,
        },
      ],
    },
    {
      title: "অন্বয় (Relation)",
      formulas: [
        {
          statement: String.raw`$$R\subseteq A\times B$$`,
          note: String.raw`$A\times B$ এর যেকোনো অশূন্য উপসেটই $A$ সেট হতে $B$ সেটে একটি অন্বয়। $R\subseteq A\times A$ হলে $R$ কে $A$ এর অন্বয় বলা হয়।`,
        },
        {
          statement: String.raw`$$R=\{(x,y):x\in A,\ y\in B\ \text{এবং শর্ত}\}$$`,
          note: String.raw`শর্তটিই ঠিক করে $A\times B$ এর কোন ক্রমজোড়গুলো অন্বয়ে থাকবে — তাই আগে $A\times B$ লিখে নিয়ে শর্ত মিলিয়ে বাছাই করলেই হয়।`,
        },
        {
          statement: String.raw`$$x\,R\,y\iff (x,y)\in R$$`,
          note: String.raw`পড়া হয় "$x$, $y$ এর সাথে অন্বিত ($x$ is related to $y$)"। ক্রমজোড়টি $R$ এ না থাকলে বলা হয় $x$, $y$ এর সাথে অন্বিত নয়।`,
        },
      ],
    },
    {
      title: "ডোমেন ও রেঞ্জ",
      formulas: [
        {
          statement: String.raw`$$\text{ডোম}\,R=\{x:(x,y)\in R\}$$`,
          note: String.raw`অন্বয়ের ক্রমজোড়গুলোর প্রথম উপাদানসমূহের সেট।`,
        },
        {
          statement: String.raw`$$\text{রেঞ্জ}\,R=\{y:(x,y)\in R\}$$`,
          note: String.raw`অন্বয়ের ক্রমজোড়গুলোর দ্বিতীয় উপাদানসমূহের সেট। সেট লেখার সময় পুনরাবৃত্ত উপাদান একবারই লেখা হয়।`,
        },
      ],
    },
    {
      title: "ফাংশন (Function)",
      formulas: [
        {
          statement: String.raw`$$y=f(x)$$`,
          note: String.raw`$x$ এর প্রতিটি মানের জন্য $y$ এর একটিমাত্র মান পাওয়া গেলে $y$ কে $x$ এর ফাংশন বলে। এখানে $x$ স্বাধীন চলক এবং $y$ অধীন চলক।`,
        },
        {
          statement: String.raw`$$f(x)=x^{2}-4x+3\;\Rightarrow\;f(-1)=(-1)^{2}-4(-1)+3$$`,
          note: String.raw`ফাংশনের মান বের করার নিয়ম — $f(x)$ এর প্রতিটি $x$ এর জায়গায় প্রদত্ত রাশিটি বসিয়ে দেওয়া, তা সংখ্যা হোক বা $\frac{1}{x^{2}}$ এর মতো রাশি।`,
        },
      ],
    },
    {
      title: "লেখচিত্র (Graph)",
      formulas: [
        {
          statement: String.raw`$$P(x,y)$$`,
          note: String.raw`কার্তেসীয় স্থানাঙ্ক — $x$ কে ভুজ (abscissa) এবং $y$ কে কোটি (ordinate) বলা হয়। $x$ অক্ষ বরাবর স্বাধীন চলক, $y$ অক্ষ বরাবর অধীন চলকের মান বসানো হয়।`,
        },
        {
          statement: String.raw`$$y=mx+c$$`,
          note: String.raw`এরূপ প্রথম মাত্রার ফাংশনের লেখচিত্র সর্বদা একটি সরলরেখা, তাই দুইটি বিন্দু পেলেই রেখাটি টানা যায়; তৃতীয় বিন্দুটি যাচাইয়ের জন্য।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১৫ — book page ৩৩.
    {
      id: 15,
      question: String.raw`মনে করি, $A=\{3,5\}$ এবং $B=\{2,4\}$। $A\times B$ নির্ণয় করো এবং $x>y$ ও $x<y$ শর্তের জন্য সংশ্লিষ্ট অন্বয় দুইটি লেখো।`,
      solution: {
        steps: [
          String.raw`$$A\times B=\{3,5\}\times\{2,4\}=\{(3,2),(3,4),(5,2),(5,4)\}$$`,
          String.raw`যেকোনো অন্বয় $R$ এই সেটটিরই একটি অশূন্য উপসেট, অর্থাৎ $R\subseteq\{(3,2),(3,4),(5,2),(5,4)\}$`,
          String.raw`$x>y$ শর্ত হলে ক্রমজোড়গুলো যাচাই করে দেখি, $3>2$, $5>2$ ও $5>4$ সত্য, কিন্তু $3>4$ সত্য নয়।`,
          String.raw`$$\therefore\;R=\{(3,2),(5,2),(5,4)\}$$`,
          String.raw`আবার $x<y$ শর্ত হলে কেবল $3<4$ সত্য, বাকি তিনটি ক্রমজোড় শর্তটি মানে না।`,
          String.raw`$$\therefore\;R=\{(3,4)\}$$`,
        ],
        answer: String.raw`$x>y$ হলে $R=\{(3,2),(5,2),(5,4)\}$ এবং $x<y$ হলে $R=\{(3,4)\}$`,
      },
    },
    // উদাহরণ ১৬ — book page ৩৩.
    {
      id: 16,
      question: String.raw`যদি $P=\{2,3,4\}$, $Q=\{4,6\}$ এবং $P$ ও $Q$ এর উপাদানগুলোর মধ্যে $y=2x$ সম্পর্ক বিবেচনায় থাকে তবে সংশ্লিষ্ট অন্বয় নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $P=\{2,3,4\}$ এবং $Q=\{4,6\}$`,
          String.raw`প্রশ্নানুসারে, $R=\{(x,y):x\in P,\ y\in Q\ \text{এবং}\ y=2x\}$`,
          String.raw`$$\text{এখানে, } P\times Q=\{2,3,4\}\times\{4,6\}=\{(2,4),(2,6),(3,4),(3,6),(4,4),(4,6)\}$$`,
          String.raw`এদের মধ্যে $y=2x$ শর্ত মানে কেবল $(2,4)$ এবং $(3,6)$।`,
          String.raw`$$\therefore\;R=\{(2,4),(3,6)\}$$`,
        ],
        answer: String.raw`নির্ণেয় অন্বয় $\{(2,4),(3,6)\}$`,
      },
    },
    // উদাহরণ ১৭ — book page ৩৩.
    {
      id: 17,
      question: String.raw`যদি $A=\{1,2,3\}$, $B=\{0,2,4\}$ এবং $A$ ও $B$ এর উপাদানগুলোর মধ্যে $x=y-1$ সম্পর্ক বিবেচনায় থাকে, তবে সংশ্লিষ্ট অন্বয় বর্ণনা করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $A=\{1,2,3\}$, $B=\{0,2,4\}$`,
          String.raw`প্রশ্নানুসারে, অন্বয় $R=\{(x,y):x\in A,\ y\in B\ \text{এবং}\ x=y-1\}$`,
          String.raw`$$\text{এখানে, } A\times B=\{1,2,3\}\times\{0,2,4\}$$`,
          String.raw`$$=\{(1,0),(1,2),(1,4),(2,0),(2,2),(2,4),(3,0),(3,2),(3,4)\}$$`,
          String.raw`এদের মধ্যে $x=y-1$ শর্ত মানে $(1,2)$ এবং $(3,4)$।`,
          String.raw`$$\therefore\;R=\{(1,2),(3,4)\}$$`,
        ],
        answer: String.raw`নির্ণেয় অন্বয় $\{(1,2),(3,4)\}$`,
      },
    },
    // উদাহরণ ১৮ — book page ৩৪.
    {
      id: 18,
      question: String.raw`$f(x)=x^{2}-4x+3$ হলে, $f(-1)$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $f(x)=x^{2}-4x+3$`,
          String.raw`$x$ এর জায়গায় $-1$ বসিয়ে পাই,`,
          String.raw`$$f(-1)=(-1)^{2}-4(-1)+3=1+4+3=8$$`,
        ],
        answer: String.raw`$f(-1)=8$`,
      },
    },
    // উদাহরণ ১৯ — book page ৩৪.
    {
      id: 19,
      question: String.raw`যদি $g(x)=x^{3}+ax^{2}-3x-6$ হয়, তবে $a$ এর কোন মানের জন্য $g(-2)=0$?`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $g(x)=x^{3}+ax^{2}-3x-6$`,
          String.raw`$$\therefore\;g(-2)=(-2)^{3}+a(-2)^{2}-3(-2)-6$$`,
          String.raw`$$=-8+4a+6-6=4a-8$$`,
          String.raw`প্রশ্নানুসারে, $g(-2)=0$`,
          String.raw`$$\therefore\;4a-8=0\quad\text{বা,}\quad 4a=8\quad\text{বা,}\quad a=2$$`,
        ],
        answer: String.raw`$a=2$`,
      },
    },
    // উদাহরণ ২০ — book page ৩৫.
    {
      id: 20,
      question: String.raw`অন্বয় $S=\{(2,1),(2,2),(3,2),(4,5)\}$ অন্বয়টির ডোমেন ও রেঞ্জ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $S=\{(2,1),(2,2),(3,2),(4,5)\}$`,
          String.raw`$S$ অন্বয়ে ক্রমজোড়গুলোর প্রথম উপাদানসমূহ $2,2,3,4$ এবং দ্বিতীয় উপাদানসমূহ $1,2,2,5$।`,
          String.raw`সেট লেখার সময় পুনরাবৃত্ত উপাদান একবারই লেখা হয়।`,
          String.raw`$$\therefore\;\text{ডোম}\,S=\{2,3,4\}\quad\text{এবং}\quad\text{রেঞ্জ}\,S=\{1,2,5\}$$`,
        ],
        answer: String.raw`ডোম $S=\{2,3,4\}$ এবং রেঞ্জ $S=\{1,2,5\}$`,
      },
    },
    // উদাহরণ ২১ — book page ৩৫.
    {
      id: 21,
      question: String.raw`$A=\{0,1,2,3\}$ এবং $R=\{(x,y):x\in A,\ y\in A\ \text{এবং}\ y=x+1\}$ হলে, $R$ কে তালিকা পদ্ধতিতে প্রকাশ করো এবং ডোম $R$ ও রেঞ্জ $R$ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $R=\{(x,y):x\in A,\ y\in A\ \text{এবং}\ y=x+1\}$`,
          String.raw`$R$ এর বর্ণিত শর্ত থেকে পাই, $y=x+1$।`,
          String.raw`এখন, প্রত্যেক $x\in A$ এর জন্য $y=x+1$ এর মান নির্ণয় করি:`,
          String.raw`$$x=0\Rightarrow y=1;\quad x=1\Rightarrow y=2;\quad x=2\Rightarrow y=3;\quad x=3\Rightarrow y=4$$`,
          String.raw`যেহেতু $4\notin A$, কাজেই $(3,4)\notin R$।`,
          String.raw`$$\therefore\;R=\{(0,1),(1,2),(2,3)\}$$`,
          String.raw`$$\therefore\;\text{ডোম}\,R=\{0,1,2\}\quad\text{এবং}\quad\text{রেঞ্জ}\,R=\{1,2,3\}$$`,
        ],
        answer: String.raw`$R=\{(0,1),(1,2),(2,3)\}$; ডোম $R=\{0,1,2\}$ এবং রেঞ্জ $R=\{1,2,3\}$`,
      },
    },
    // উদাহরণ ২২ — book pages ৩৬-৩৭.
    {
      id: 22,
      question: String.raw`$y=2x$ ফাংশনের লেখচিত্র অঙ্কন করো, যেখানে $-3\le x\le 3$।`,
      solution: {
        steps: [
          String.raw`$-3\le x\le 3$ ডোমেনের $x$ এর কয়েকটি মানের জন্য $y=2x$ এর সংশ্লিষ্ট মান নির্ণয় করে তালিকা তৈরি করি।`,
          String.raw`$$x=-3\Rightarrow y=-6;\quad x=-2\Rightarrow y=-4;\quad x=-1\Rightarrow y=-2$$`,
          String.raw`$$x=0\Rightarrow y=0;\quad x=1\Rightarrow y=2;\quad x=2\Rightarrow y=4;\quad x=3\Rightarrow y=6$$`,
          String.raw`$\therefore$ প্রাপ্ত বিন্দুগুলো $(-3,-6),\ (-2,-4),\ (-1,-2),\ (0,0),\ (1,2),\ (2,4),\ (3,6)$।`,
          String.raw`ছক কাগজে প্রতি ক্ষুদ্রবর্গের বাহুকে একক ধরে, পরস্পর লম্ব $XOX'$ ও $YOY'$ অক্ষ দুইটি এঁকে তালিকার বিন্দুগুলো চিহ্নিত করি ও রেখা টেনে যোগ করি।`,
          String.raw`বিন্দুগুলো মূলবিন্দুগামী একটি সরলরেখায় পড়ে — তাহলেই পাওয়া গেল $y=2x$ এর লেখচিত্র।`,
        ],
        answer: String.raw`লেখচিত্রটি মূলবিন্দু $(0,0)$ গামী একটি সরলরেখা`,
      },
    },
    // উদাহরণ ২৩ — book page ৩৭.
    {
      id: 23,
      question: String.raw`$f(y)=\dfrac{y^{3}-3y^{2}+1}{y(1-y)}$ হলে দেখাও যে, $f\left(\dfrac{1}{y}\right)=f(1-y)$`,
      solution: {
        steps: [
          String.raw`$$f(y)=\frac{y^{3}-3y^{2}+1}{y(1-y)}$$`,
          String.raw`$$\therefore\;f\left(\frac{1}{y}\right)=\frac{\left(\frac{1}{y}\right)^{3}-3\left(\frac{1}{y}\right)^{2}+1}{\frac{1}{y}\left(1-\frac{1}{y}\right)}=\frac{\frac{1-3y+y^{3}}{y^{3}}}{\frac{y-1}{y^{2}}}$$`,
          String.raw`$$=\frac{1-3y+y^{3}}{y^{3}}\times\frac{y^{2}}{y-1}=\frac{1-3y+y^{3}}{y(y-1)}$$`,
          String.raw`$$\text{আবার, } f(1-y)=\frac{(1-y)^{3}-3(1-y)^{2}+1}{(1-y)\left(1-(1-y)\right)}$$`,
          String.raw`$$=\frac{1-3y+3y^{2}-y^{3}-3\left(1-2y+y^{2}\right)+1}{(1-y)(1-1+y)}$$`,
          String.raw`$$=\frac{1-3y+3y^{2}-y^{3}-3+6y-3y^{2}+1}{y(1-y)}$$`,
          String.raw`$$=\frac{-1+3y-y^{3}}{y(1-y)}=\frac{-\left(1-3y+y^{3}\right)}{-y(y-1)}$$`,
          String.raw`$$=\frac{1-3y+y^{3}}{y(y-1)}$$`,
          String.raw`$$\therefore\;f\left(\frac{1}{y}\right)=f(1-y)$$`,
        ],
        answer: String.raw`$f\left(\dfrac{1}{y}\right)=f(1-y)$ (দেখানো হলো)`,
      },
    },
    // উদাহরণ ২৪ — book pages ৩৮-৩৯.
    {
      id: 24,
      question: String.raw`সার্বিক সেট $U=\{x:x\in N\ \text{এবং}\ x\le 6\}$, $A=\{x:x\ \text{মৌলিক সংখ্যা এবং}\ x\le 5\}$, $B=\{x:x\ \text{জোড় সংখ্যা এবং}\ x\le 6\}$ এবং $C=A\setminus B$`,
      parts: [
        {
          label: "ক",
          question: String.raw`$A^{c}$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $U=\{x:x\in N\ \text{এবং}\ x\le 6\}=\{1,2,3,4,5,6\}$`,
              String.raw`$$A=\{x:x\ \text{মৌলিক সংখ্যা এবং}\ x\le 5\}=\{2,3,5\}$$`,
              String.raw`$$\therefore\;A^{c}=U\setminus A=\{1,2,3,4,5,6\}-\{2,3,5\}=\{1,4,6\}$$`,
            ],
            answer: String.raw`$A^{c}=\{1,4,6\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $A\cup B=(A\setminus B)\cup(B\setminus A)\cup(A\cap B)$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $B=\{x:x\ \text{জোড় সংখ্যা এবং}\ x\le 6\}=\{2,4,6\}$`,
              String.raw`$$\therefore\;A\cup B=\{2,3,5\}\cup\{2,4,6\}=\{2,3,4,5,6\}\quad\cdots\cdots(1)$$`,
              String.raw`$$A\setminus B=\{2,3,5\}-\{2,4,6\}=\{3,5\}$$`,
              String.raw`$$B\setminus A=\{2,4,6\}-\{2,3,5\}=\{4,6\}$$`,
              String.raw`$$A\cap B=\{2,3,5\}\cap\{2,4,6\}=\{2\}$$`,
              String.raw`$$\therefore\;(A\setminus B)\cup(B\setminus A)\cup(A\cap B)=\{3,5\}\cup\{4,6\}\cup\{2\}=\{2,3,4,5,6\}\quad\cdots\cdots(2)$$`,
              String.raw`সুতরাং $(1)$ ও $(2)$ তুলনা করে পাই,`,
              String.raw`$$A\cup B=(A\setminus B)\cup(B\setminus A)\cup(A\cap B)$$`,
            ],
            answer: String.raw`উভয় পক্ষ $=\{2,3,4,5,6\}$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`দেখাও যে, $(A\cap C)\times B=(A\times B)\cap(C\times B)$`,
          solution: {
            steps: [
              String.raw`'খ' হতে পাই, $C=A\setminus B=\{3,5\}$`,
              String.raw`$$A\cap C=\{2,3,5\}\cap\{3,5\}=\{3,5\}$$`,
              String.raw`$$\therefore\;(A\cap C)\times B=\{3,5\}\times\{2,4,6\}$$`,
              String.raw`$$=\{(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)\}\quad\cdots\cdots(3)$$`,
              String.raw`$$A\times B=\{2,3,5\}\times\{2,4,6\}$$`,
              String.raw`$$=\{(2,2),(2,4),(2,6),(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)\}$$`,
              String.raw`$$C\times B=\{3,5\}\times\{2,4,6\}=\{(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)\}$$`,
              String.raw`$$\therefore\;(A\times B)\cap(C\times B)=\{(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)\}\quad\cdots\cdots(4)$$`,
              String.raw`সুতরাং $(3)$ ও $(4)$ তুলনা করে পাই,`,
              String.raw`$$(A\cap C)\times B=(A\times B)\cap(C\times B)$$`,
            ],
            answer: String.raw`উভয় পক্ষ $=\{(3,2),(3,4),(3,6),(5,2),(5,4),(5,6)\}$ (দেখানো হলো)`,
          },
        },
      ],
    },
    // উদাহরণ ২৫ — book pages ৩৯-৪০.
    {
      id: 25,
      question: String.raw`$A=\{4,5,6,7\}$, $B=\{0,1,2,3\}$ এবং $R=\{(x,y):x\in A,\ y\in A\ \text{এবং}\ y=x+1\}$`,
      parts: [
        {
          label: "ক",
          question: String.raw`দেখাও যে, $A$ ও $B$ সেটদ্বয় পরস্পর নিশ্ছেদ সেট।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $A=\{4,5,6,7\}$ এবং $B=\{0,1,2,3\}$`,
              String.raw`$$\therefore\;A\cap B=\{4,5,6,7\}\cap\{0,1,2,3\}=\varnothing$$`,
              String.raw`যেহেতু $A\cap B=\varnothing$, অর্থাৎ সেট দুইটির কোনো সাধারণ উপাদান নেই,`,
              String.raw`সুতরাং, $A$ ও $B$ সেটদ্বয় পরস্পর নিশ্ছেদ সেট।`,
            ],
            answer: String.raw`$A\cap B=\varnothing$, তাই সেটদ্বয় পরস্পর নিশ্ছেদ (দেখানো হলো)`,
          },
        },
        {
          label: "খ",
          question: String.raw`$P(B)$ নির্ণয় করে দেখাও যে $P(B)$ এর উপাদান সংখ্যা $2^{n}$ কে সমর্থন করে, যেখানে $n$, $B$ এর উপাদান সংখ্যা।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $B=\{0,1,2,3\}$`,
              String.raw`$$\therefore\;P(B)=\{\{0\},\{1\},\{2\},\{3\},\{0,1\},\{0,2\},\{0,3\},\{1,2\},\{1,3\},\{2,3\},$$`,
              String.raw`$$\{0,1,2\},\{0,1,3\},\{0,2,3\},\{1,2,3\},\{0,1,2,3\},\varnothing\}$$`,
              String.raw`এখানে $B$ এর উপাদান সংখ্যা $4$ এবং এর শক্তি সেটের উপাদান সংখ্যা $2^{4}=16$।`,
              String.raw`$\therefore\;B$ এর উপাদান সংখ্যা $n$ হলে এর শক্তি সেটের উপাদান সংখ্যা হবে $2^{n}$।`,
              String.raw`$\therefore\;P(B)$ এর উপাদান সংখ্যা $2^{n}$ সূত্রকে সমর্থন করে।`,
            ],
            answer: String.raw`$n\big(P(B)\big)=16=2^{4}=2^{n}$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$R$ অন্বয়টিকে তালিকা পদ্ধতিতে প্রকাশ করে তার ডোমেন নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $R=\{(x,y):x\in A,\ y\in A\ \text{এবং}\ y=x+1\}$ এবং $A=\{4,5,6,7\}$`,
              String.raw`$R$ এর বর্ণিত শর্ত থেকে পাই, $y=x+1$`,
              String.raw`এখন, প্রত্যেক $x\in A$ এর জন্য $y=x+1$ এর মান নির্ণয় করি:`,
              String.raw`$$x=4\Rightarrow y=5;\quad x=5\Rightarrow y=6;\quad x=6\Rightarrow y=7;\quad x=7\Rightarrow y=8$$`,
              String.raw`যেহেতু $8\notin A$, কাজেই $(7,8)\notin R$।`,
              String.raw`$$\therefore\;R=\{(4,5),(5,6),(6,7)\}$$`,
              String.raw`$$\therefore\;\text{ডোম}\,R=\{4,5,6\}$$`,
            ],
            answer: String.raw`$R=\{(4,5),(5,6),(6,7)\}$ এবং ডোম $R=\{4,5,6\}$`,
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (1 – 4) ───────────────
    {
      id: 1,
      group: SET_MCQ,
      question: String.raw`$8$ এর গুণনীয়ক সেট কোনটি?
ক) $\{8,16,24,\dots\}$
খ) $\{1,2,4,8\}$
গ) $\{2,4,8\}$
ঘ) $\{1,2\}$`,
      solution: {
        steps: [
          String.raw`$$8=1\times 8=2\times 4$$`,
          String.raw`$\therefore\;8$ এর গুণনীয়কসমূহ $1,2,4,8$।`,
          String.raw`লক্ষ করো, 'ক' হলো $8$ এর গুণিতকের সেট, গুণনীয়কের নয়; 'গ' তে $1$ বাদ পড়েছে এবং 'ঘ' তে $4$ ও $8$ বাদ পড়েছে।`,
          String.raw`$$\therefore\;\text{নির্ণেয় সেট}=\{1,2,4,8\}$$`,
        ],
        answer: String.raw`খ) $\{1,2,4,8\}$`,
      },
    },
    {
      id: 2,
      group: SET_MCQ,
      question: String.raw`সেট $C$ হতে সেট $B$ এ একটি সম্পর্ক $R$ হলে নিচের কোনটি সঠিক?
ক) $R\subset C$
খ) $R\subset B$
গ) $R\subseteq C\times B$
ঘ) $C\times B\subseteq R$`,
      solution: {
        steps: [
          String.raw`সংজ্ঞানুসারে, $C$ সেট হতে $B$ সেটে একটি অন্বয় হলো $C\times B$ এর একটি অশূন্য উপসেট।`,
          String.raw`$$\therefore\;R\subseteq C\times B$$`,
          String.raw`$R$ এর উপাদানগুলো ক্রমজোড়, আর $C$ বা $B$ এর উপাদানগুলো ক্রমজোড় নয় — তাই 'ক' ও 'খ' সঠিক হতে পারে না।`,
          String.raw`আবার 'ঘ' উল্টো সম্পর্ক বোঝায়, যা সাধারণভাবে সত্য নয়।`,
        ],
        answer: String.raw`গ) $R\subseteq C\times B$`,
      },
    },
    {
      id: 3,
      group: SET_MCQ,
      question: String.raw`$A=\{1,2\}$, $B=\{2,5\}$ হলে $P(A\cap B)$ এর সদস্য সংখ্যা নিচের কোনটি?
ক) $1$
খ) $2$
গ) $3$
ঘ) $8$`,
      solution: {
        steps: [
          String.raw`$$A\cap B=\{1,2\}\cap\{2,5\}=\{2\}$$`,
          String.raw`$\therefore\;n(A\cap B)=1$`,
          String.raw`$$\therefore\;n\big(P(A\cap B)\big)=2^{1}=2$$`,
          String.raw`প্রকৃতপক্ষে $P(A\cap B)=\{\varnothing,\{2\}\}$, অর্থাৎ সদস্য সংখ্যা $2$।`,
        ],
        answer: String.raw`খ) $2$`,
      },
    },
    {
      id: 4,
      group: SET_MCQ,
      question: String.raw`নিচের কোনটি $\{x\in N:13<x<17\ \text{এবং}\ x\ \text{মৌলিক সংখ্যা}\}$ সেটটিকে তালিকা পদ্ধতিতে প্রকাশ করে?
ক) $\varnothing$
খ) $\{\varnothing\}$
গ) $\{13,17\}$
ঘ) $\{14,15,16\}$`,
      solution: {
        steps: [
          String.raw`$13<x<17$ শর্ত মানে এমন স্বাভাবিক সংখ্যা $14,15,16$।`,
          String.raw`$$14=2\times 7,\qquad 15=3\times 5,\qquad 16=2\times 8$$`,
          String.raw`অর্থাৎ এদের কোনোটিই মৌলিক সংখ্যা নয়।`,
          String.raw`$\therefore$ শর্ত দুইটি একসঙ্গে মানে এমন কোনো উপাদান নেই, তাই সেটটি ফাঁকা সেট।`,
          String.raw`লক্ষ করো, $\{\varnothing\}$ ফাঁকা সেট নয় — এর একটি উপাদান আছে।`,
        ],
        answer: String.raw`ক) $\varnothing$`,
      },
    },
    // ─────────────── লিখিত (5 – 16) ───────────────
    {
      id: 5,
      group: SET_WRITTEN,
      question: String.raw`যদি $A=\{3,4\}$, $B=\{2,4\}$, $x\in A$ এবং $y\in B$ হয়, তবে $A$ ও $B$ এর উপাদানগুলোর মধ্যে $x>y$ সম্পর্ক বিবেচনা করে অন্বয়টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $A=\{3,4\}$ এবং $B=\{2,4\}$`,
          String.raw`প্রশ্নানুসারে, $R=\{(x,y):x\in A,\ y\in B\ \text{এবং}\ x>y\}$`,
          String.raw`$$\text{এখানে, } A\times B=\{3,4\}\times\{2,4\}=\{(3,2),(3,4),(4,2),(4,4)\}$$`,
          String.raw`এখন প্রতিটি ক্রমজোড়ে $x>y$ শর্তটি যাচাই করি:`,
          String.raw`$(3,2)$: $3>2$ সত্য; $(3,4)$: $3>4$ সত্য নয়; $(4,2)$: $4>2$ সত্য; $(4,4)$: $4>4$ সত্য নয়।`,
          String.raw`$$\therefore\;R=\{(3,2),(4,2)\}$$`,
        ],
        answer: String.raw`নির্ণেয় অন্বয় $\{(3,2),(4,2)\}$`,
      },
    },
    {
      id: 6,
      group: SET_WRITTEN,
      question: String.raw`যদি $C=\{2,5\}$, $D=\{4,6,7\}$, $x\in C$ এবং $y\in D$ হয়, তবে $C$ ও $D$ এর উপাদানগুলোর মধ্যে $x+1<y$ সম্পর্কটি বিবেচনায় থাকে তবে অন্বয়টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $C=\{2,5\}$ এবং $D=\{4,6,7\}$`,
          String.raw`প্রশ্নানুসারে, $R=\{(x,y):x\in C,\ y\in D\ \text{এবং}\ x+1<y\}$`,
          String.raw`$$\text{এখানে, } C\times D=\{2,5\}\times\{4,6,7\}=\{(2,4),(2,6),(2,7),(5,4),(5,6),(5,7)\}$$`,
          String.raw`এখন প্রতিটি ক্রমজোড়ে $x+1<y$ শর্তটি যাচাই করি:`,
          String.raw`$(2,4)$: $2+1=3<4$ সত্য; $(2,6)$: $3<6$ সত্য; $(2,7)$: $3<7$ সত্য।`,
          String.raw`$(5,4)$: $5+1=6<4$ সত্য নয়; $(5,6)$: $6<6$ সত্য নয়; $(5,7)$: $6<7$ সত্য।`,
          String.raw`$$\therefore\;R=\{(2,4),(2,6),(2,7),(5,7)\}$$`,
          String.raw`উল্লেখ্য, বইয়ের উত্তরমালায় এই প্রশ্নের উত্তর $\{(2,4),(2,6)\}$ ছাপা হয়েছে; কিন্তু $(2,7)$ ও $(5,7)$ ক্রমজোড় দুইটিও $x+1<y$ শর্ত মানে, তাই সেগুলোও অন্বয়ের উপাদান।`,
        ],
        answer: String.raw`নির্ণেয় অন্বয় $\{(2,4),(2,6),(2,7),(5,7)\}$`,
      },
    },
    {
      id: 7,
      group: SET_WRITTEN,
      question: String.raw`$f(x)=x^{4}+5x-3$ হলে, $f(-1)$, $f(2)$ এবং $f\left(\dfrac{1}{2}\right)$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $f(x)=x^{4}+5x-3$`,
          String.raw`$$\therefore\;f(-1)=(-1)^{4}+5(-1)-3=1-5-3=-7$$`,
          String.raw`$$\therefore\;f(2)=(2)^{4}+5(2)-3=16+10-3=23$$`,
          String.raw`$$\therefore\;f\left(\frac{1}{2}\right)=\left(\frac{1}{2}\right)^{4}+5\left(\frac{1}{2}\right)-3=\frac{1}{16}+\frac{5}{2}-3$$`,
          String.raw`$$=\frac{1+40-48}{16}=\frac{-7}{16}$$`,
        ],
        answer: String.raw`$f(-1)=-7$, $f(2)=23$ এবং $f\left(\dfrac{1}{2}\right)=-\dfrac{7}{16}$`,
      },
    },
    {
      id: 8,
      group: SET_WRITTEN,
      question: String.raw`যদি $f(y)=y^{3}+ky^{2}-4y-8$ হয়, তবে $k$ এর কোন মানের জন্য $f(-2)=0$ হবে?`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $f(y)=y^{3}+ky^{2}-4y-8$`,
          String.raw`$$\therefore\;f(-2)=(-2)^{3}+k(-2)^{2}-4(-2)-8$$`,
          String.raw`$$=-8+4k+8-8=4k-8$$`,
          String.raw`প্রশ্নানুসারে, $f(-2)=0$`,
          String.raw`$$\therefore\;4k-8=0$$`,
          String.raw`$$\text{or, } 4k=8$$`,
          String.raw`$$\therefore\;k=2$$`,
        ],
        answer: String.raw`$k=2$`,
      },
    },
    {
      id: 9,
      group: SET_WRITTEN,
      question: String.raw`$f(x)=x^{3}-6x^{2}+11x-6$ হয়, তবে $x$ এর কোন মানের জন্য $f(x)=0$ হবে?`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $f(x)=x^{3}-6x^{2}+11x-6$`,
          String.raw`$$f(1)=1-6+11-6=0$$`,
          String.raw`$\therefore\;(x-1)$ রাশিটির একটি উৎপাদক।`,
          String.raw`$$\therefore\;f(x)=x^{3}-6x^{2}+11x-6$$`,
          String.raw`$$=x^{3}-x^{2}-5x^{2}+5x+6x-6$$`,
          String.raw`$$=x^{2}(x-1)-5x(x-1)+6(x-1)$$`,
          String.raw`$$=(x-1)\left(x^{2}-5x+6\right)$$`,
          String.raw`$$=(x-1)\left(x^{2}-2x-3x+6\right)$$`,
          String.raw`$$=(x-1)\{x(x-2)-3(x-2)\}$$`,
          String.raw`$$=(x-1)(x-2)(x-3)$$`,
          String.raw`প্রশ্নানুসারে, $f(x)=0$`,
          String.raw`$$\therefore\;(x-1)(x-2)(x-3)=0$$`,
          String.raw`$\therefore\;x-1=0$ অথবা $x-2=0$ অথবা $x-3=0$`,
          String.raw`$$\therefore\;x=1\ \text{বা}\ 2\ \text{বা}\ 3$$`,
        ],
        answer: String.raw`$x=1$ বা $2$ বা $3$`,
      },
    },
    {
      id: 10,
      group: SET_WRITTEN,
      question: String.raw`যদি $f(x)=\dfrac{2x+1}{2x-1}$ হয়, তবে $\dfrac{f\left(\frac{1}{x^{2}}\right)+1}{f\left(\frac{1}{x^{2}}\right)-1}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $f(x)=\dfrac{2x+1}{2x-1}$`,
          String.raw`$x$ এর জায়গায় $\dfrac{1}{x^{2}}$ বসিয়ে পাই,`,
          String.raw`$$f\left(\frac{1}{x^{2}}\right)=\frac{2\cdot\frac{1}{x^{2}}+1}{2\cdot\frac{1}{x^{2}}-1}=\frac{\frac{2+x^{2}}{x^{2}}}{\frac{2-x^{2}}{x^{2}}}=\frac{2+x^{2}}{2-x^{2}}$$`,
          String.raw`$$\therefore\;\frac{f\left(\frac{1}{x^{2}}\right)+1}{f\left(\frac{1}{x^{2}}\right)-1}=\frac{\frac{2+x^{2}}{2-x^{2}}+1}{\frac{2+x^{2}}{2-x^{2}}-1}$$`,
          String.raw`$$=\frac{\frac{2+x^{2}+2-x^{2}}{2-x^{2}}}{\frac{2+x^{2}-2+x^{2}}{2-x^{2}}}$$`,
          String.raw`$$=\frac{4}{2x^{2}}=\frac{2}{x^{2}}$$`,
        ],
        answer: String.raw`$\dfrac{2}{x^{2}}$`,
      },
    },
    {
      id: 11,
      group: SET_WRITTEN,
      question: String.raw`$g(x)=\dfrac{1+x^{2}+x^{4}}{x^{2}}$ হলে, দেখাও যে, $g\left(\dfrac{1}{x^{2}}\right)=g\left(x^{2}\right)$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $g(x)=\dfrac{1+x^{2}+x^{4}}{x^{2}}$`,
          String.raw`$x$ এর জায়গায় $\dfrac{1}{x^{2}}$ বসিয়ে পাই,`,
          String.raw`$$g\left(\frac{1}{x^{2}}\right)=\frac{1+\left(\frac{1}{x^{2}}\right)^{2}+\left(\frac{1}{x^{2}}\right)^{4}}{\left(\frac{1}{x^{2}}\right)^{2}}=\frac{1+\frac{1}{x^{4}}+\frac{1}{x^{8}}}{\frac{1}{x^{4}}}$$`,
          String.raw`$$=x^{4}\left(1+\frac{1}{x^{4}}+\frac{1}{x^{8}}\right)=x^{4}+1+\frac{1}{x^{4}}\quad\cdots\cdots(1)$$`,
          String.raw`আবার $x$ এর জায়গায় $x^{2}$ বসিয়ে পাই,`,
          String.raw`$$g\left(x^{2}\right)=\frac{1+\left(x^{2}\right)^{2}+\left(x^{2}\right)^{4}}{\left(x^{2}\right)^{2}}=\frac{1+x^{4}+x^{8}}{x^{4}}$$`,
          String.raw`$$=\frac{1}{x^{4}}+1+x^{4}\quad\cdots\cdots(2)$$`,
          String.raw`সুতরাং $(1)$ ও $(2)$ তুলনা করে পাই,`,
          String.raw`$$g\left(\frac{1}{x^{2}}\right)=g\left(x^{2}\right)$$`,
        ],
        answer: String.raw`$g\left(\dfrac{1}{x^{2}}\right)=g\left(x^{2}\right)$ (দেখানো হলো)`,
      },
    },
    {
      id: 12,
      group: SET_WRITTEN,
      question: String.raw`নিচের অন্বয়গুলো থেকে ডোমেন এবং রেঞ্জ নির্ণয় করো।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$R=\{(2,1),(2,2),(2,3)\}$$`,
          solution: {
            steps: [
              String.raw`ক্রমজোড়গুলোর প্রথম উপাদানসমূহ $2,2,2$ এবং দ্বিতীয় উপাদানসমূহ $1,2,3$।`,
              String.raw`পুনরাবৃত্ত উপাদান একবারই লেখা হয়।`,
              String.raw`$$\therefore\;\text{ডোম}\,R=\{2\}$$`,
              String.raw`$$\therefore\;\text{রেঞ্জ}\,R=\{1,2,3\}$$`,
            ],
            answer: String.raw`ডোম $R=\{2\}$ এবং রেঞ্জ $R=\{1,2,3\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$S=\{(-2,4),(-1,1),(0,0),(1,1),(2,4)\}$$`,
          solution: {
            steps: [
              String.raw`ক্রমজোড়গুলোর প্রথম উপাদানসমূহ $-2,-1,0,1,2$ এবং দ্বিতীয় উপাদানসমূহ $4,1,0,1,4$।`,
              String.raw`$$\therefore\;\text{ডোম}\,S=\{-2,-1,0,1,2\}$$`,
              String.raw`$$\therefore\;\text{রেঞ্জ}\,S=\{0,1,4\}$$`,
            ],
            answer: String.raw`ডোম $S=\{-2,-1,0,1,2\}$ এবং রেঞ্জ $S=\{0,1,4\}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$F=\left\{\left(\tfrac{1}{2},0\right),(1,1),(1,-1),\left(\tfrac{5}{2},2\right),\left(\tfrac{5}{2},-2\right)\right\}$$`,
          solution: {
            steps: [
              String.raw`ক্রমজোড়গুলোর প্রথম উপাদানসমূহ $\dfrac{1}{2},1,1,\dfrac{5}{2},\dfrac{5}{2}$ এবং দ্বিতীয় উপাদানসমূহ $0,1,-1,2,-2$।`,
              String.raw`$$\therefore\;\text{ডোম}\,F=\left\{\frac{1}{2},1,\frac{5}{2}\right\}$$`,
              String.raw`$$\therefore\;\text{রেঞ্জ}\,F=\{-2,-1,0,1,2\}$$`,
            ],
            answer: String.raw`ডোম $F=\left\{\dfrac{1}{2},1,\dfrac{5}{2}\right\}$ এবং রেঞ্জ $F=\{-2,-1,0,1,2\}$`,
          },
        },
      ],
    },
    {
      id: 13,
      group: SET_WRITTEN,
      question: String.raw`নিচের অন্বয়গুলোকে তালিকা পদ্ধতিতে প্রকাশ করো এবং ডোমেন ও রেঞ্জ নির্ণয় করো।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$R=\{(x,y):x\in A,\ y\in A\ \text{এবং}\ x+y=1\}$ যেখানে $A=\{-2,-1,0,1,2\}$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $A=\{-2,-1,0,1,2\}$ এবং শর্ত $x+y=1$, অর্থাৎ $y=1-x$।`,
              String.raw`এখন প্রত্যেক $x\in A$ এর জন্য $y=1-x$ এর মান নির্ণয় করি:`,
              String.raw`$$x=-2\Rightarrow y=3;\quad x=-1\Rightarrow y=2;\quad x=0\Rightarrow y=1$$`,
              String.raw`$$x=1\Rightarrow y=0;\quad x=2\Rightarrow y=-1$$`,
              String.raw`যেহেতু $3\notin A$, কাজেই $(-2,3)\notin R$।`,
              String.raw`$$\therefore\;R=\{(-1,2),(0,1),(1,0),(2,-1)\}$$`,
              String.raw`$$\therefore\;\text{ডোম}\,R=\{-1,0,1,2\}$$`,
              String.raw`$$\therefore\;\text{রেঞ্জ}\,R=\{-1,0,1,2\}$$`,
            ],
            answer: String.raw`$R=\{(-1,2),(0,1),(1,0),(2,-1)\}$; ডোম $R=\{-1,0,1,2\}$ এবং রেঞ্জ $R=\{-1,0,1,2\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$F=\{(x,y):x\in C,\ y\in C\ \text{এবং}\ y=2x\}$ যেখানে $C=\{-1,0,1,2,3\}$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $C=\{-1,0,1,2,3\}$ এবং শর্ত $y=2x$।`,
              String.raw`এখন প্রত্যেক $x\in C$ এর জন্য $y=2x$ এর মান নির্ণয় করি:`,
              String.raw`$$x=-1\Rightarrow y=-2;\quad x=0\Rightarrow y=0;\quad x=1\Rightarrow y=2$$`,
              String.raw`$$x=2\Rightarrow y=4;\quad x=3\Rightarrow y=6$$`,
              String.raw`যেহেতু $-2,4,6\notin C$, কাজেই $(-1,-2),(2,4),(3,6)\notin F$।`,
              String.raw`$$\therefore\;F=\{(0,0),(1,2)\}$$`,
              String.raw`$$\therefore\;\text{ডোম}\,F=\{0,1\}$$`,
              String.raw`$$\therefore\;\text{রেঞ্জ}\,F=\{0,2\}$$`,
            ],
            answer: String.raw`$F=\{(0,0),(1,2)\}$; ডোম $F=\{0,1\}$ এবং রেঞ্জ $F=\{0,2\}$`,
          },
        },
      ],
    },
    {
      id: 14,
      group: SET_WRITTEN,
      question: String.raw`ছক কাগজে $(-3,2)$, $(0,-5)$, $\left(\dfrac{1}{2},-\dfrac{5}{6}\right)$ বিন্দুগুলো স্থাপন করো।`,
      solution: {
        steps: [
          String.raw`ছক কাগজে পরস্পর লম্ব $XOX'$ ও $YOY'$ অক্ষ দুইটি এঁকে, প্রতি ক্ষুদ্রবর্গের বাহুকে $\dfrac{1}{6}$ একক ধরি — এতে তৃতীয় বিন্দুটির ভগ্নাংশ স্থানাঙ্কও ঠিকভাবে বসানো যায়।`,
          String.raw`$(-3,2)$: মূলবিন্দু থেকে $x$ অক্ষ বরাবর বামে $3$ একক এবং সেখান থেকে $y$ অক্ষের সমান্তরালে উপরে $2$ একক গিয়ে বিন্দুটি চিহ্নিত করি। বিন্দুটি দ্বিতীয় চতুর্ভাগে অবস্থিত।`,
          String.raw`$(0,-5)$: ভুজ শূন্য, তাই বিন্দুটি $y$ অক্ষের উপরেই — মূলবিন্দু থেকে নিচে $5$ একক।`,
          String.raw`$\left(\dfrac{1}{2},-\dfrac{5}{6}\right)$: মূলবিন্দু থেকে ডানে $\dfrac{1}{2}=\dfrac{3}{6}$ একক, অর্থাৎ $3$ টি ক্ষুদ্রবর্গ; সেখান থেকে নিচে $\dfrac{5}{6}$ একক, অর্থাৎ $5$ টি ক্ষুদ্রবর্গ। বিন্দুটি চতুর্থ চতুর্ভাগে অবস্থিত।`,
        ],
        answer: String.raw`বিন্দু তিনটি যথাক্রমে দ্বিতীয় চতুর্ভাগে, $y$ অক্ষের ঋণাত্মক দিকে এবং চতুর্থ চতুর্ভাগে স্থাপিত হয়`,
      },
    },
    {
      id: 15,
      group: SET_WRITTEN,
      question: String.raw`ছক কাগজে $(1,2)$, $(-1,1)$, $(11,7)$ বিন্দু তিনটি স্থাপন করে দেখাও যে, বিন্দু তিনটি একই সরলরেখায় অবস্থিত।`,
      solution: {
        steps: [
          String.raw`ছক কাগজে পরস্পর লম্ব $XOX'$ ও $YOY'$ অক্ষ এঁকে, প্রতি ক্ষুদ্রবর্গের বাহুকে একক ধরে বিন্দু তিনটি স্থাপন করি। স্থাপন করলে দেখা যায় বিন্দু তিনটি একটি সরলরেখার উপর পড়ে।`,
          String.raw`হিসাব করে যাচাই করি। $(-1,1)$ ও $(1,2)$ বিন্দু দুইটির মধ্যে $x$ এর বৃদ্ধি $1-(-1)=2$ এবং $y$ এর বৃদ্ধি $2-1=1$।`,
          String.raw`$$\therefore\;\text{ঢাল}=\frac{1}{2}$$`,
          String.raw`আবার $(1,2)$ ও $(11,7)$ বিন্দু দুইটির মধ্যে $x$ এর বৃদ্ধি $11-1=10$ এবং $y$ এর বৃদ্ধি $7-2=5$।`,
          String.raw`$$\therefore\;\text{ঢাল}=\frac{5}{10}=\frac{1}{2}$$`,
          String.raw`দুইটি ঢাল সমান এবং $(1,2)$ বিন্দুটি উভয় অংশেই সাধারণ।`,
          String.raw`অন্যভাবে, $(-1,1)$ ও $(1,2)$ বিন্দুগামী সরলরেখার সমীকরণ $x-2y+3=0$।`,
          String.raw`$(11,7)$ বসিয়ে পাই, $11-2\times 7+3=11-14+3=0$ — অর্থাৎ বিন্দুটিও ঐ রেখার উপর অবস্থিত।`,
          String.raw`সুতরাং বিন্দু তিনটি একই সরলরেখায় অবস্থিত।`,
        ],
        answer: String.raw`বিন্দু তিনটি $x-2y+3=0$ সরলরেখার উপর অবস্থিত (দেখানো হলো)`,
      },
    },
    {
      id: 16,
      group: SET_WRITTEN,
      question: String.raw`নিচের ফাংশনগুলোর লেখচিত্র অঙ্কন করো।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$y=3x+5$$`,
          solution: {
            steps: [
              String.raw`$y=3x+5$ প্রথম মাত্রার ফাংশন, তাই এর লেখচিত্র একটি সরলরেখা।`,
              String.raw`$x$ এর কয়েকটি মানের জন্য $y$ এর মান নির্ণয় করি:`,
              String.raw`$$x=-3\Rightarrow y=3(-3)+5=-4$$`,
              String.raw`$$x=-2\Rightarrow y=3(-2)+5=-1$$`,
              String.raw`$$x=-1\Rightarrow y=3(-1)+5=2$$`,
              String.raw`$$x=0\Rightarrow y=5;\qquad x=1\Rightarrow y=8$$`,
              String.raw`$\therefore$ প্রাপ্ত বিন্দুগুলো $(-3,-4),\ (-2,-1),\ (-1,2),\ (0,5),\ (1,8)$।`,
              String.raw`ছক কাগজে প্রতি ক্ষুদ্রবর্গের বাহুকে একক ধরে বিন্দুগুলো স্থাপন করে রেখা টেনে যোগ করি।`,
              String.raw`রেখাটি $y$ অক্ষকে $(0,5)$ বিন্দুতে এবং $x$ অক্ষকে $\left(-\dfrac{5}{3},0\right)$ বিন্দুতে ছেদ করে।`,
            ],
            answer: String.raw`লেখচিত্রটি $(0,5)$ ও $\left(-\dfrac{5}{3},0\right)$ বিন্দুগামী একটি সরলরেখা`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$x+y=2$$`,
          solution: {
            steps: [
              String.raw`$x+y=2$ থেকে পাই, $y=2-x$ — এটিও প্রথম মাত্রার ফাংশন, তাই লেখচিত্র একটি সরলরেখা।`,
              String.raw`$x$ এর কয়েকটি মানের জন্য $y$ এর মান নির্ণয় করি:`,
              String.raw`$$x=-1\Rightarrow y=3;\qquad x=0\Rightarrow y=2;\qquad x=1\Rightarrow y=1$$`,
              String.raw`$$x=2\Rightarrow y=0;\qquad x=3\Rightarrow y=-1$$`,
              String.raw`$\therefore$ প্রাপ্ত বিন্দুগুলো $(-1,3),\ (0,2),\ (1,1),\ (2,0),\ (3,-1)$।`,
              String.raw`ছক কাগজে প্রতি ক্ষুদ্রবর্গের বাহুকে একক ধরে বিন্দুগুলো স্থাপন করে রেখা টেনে যোগ করি।`,
              String.raw`রেখাটি $y$ অক্ষকে $(0,2)$ বিন্দুতে এবং $x$ অক্ষকে $(2,0)$ বিন্দুতে ছেদ করে।`,
            ],
            answer: String.raw`লেখচিত্রটি $(0,2)$ ও $(2,0)$ বিন্দুগামী একটি সরলরেখা`,
          },
        },
      ],
    },
  ],
};

const SIMPLIFY = "সরল করো (১ – ৮)";
const PROVE = "প্রমাণ করো / দেখাও যে (৯ – ১৬)";
const SOLVE = "সমাধান করো (১৭ – ২০)";
const CREATIVE = "সৃজনশীল প্রশ্ন (২১ – ২২)";

const exercise41: Exercise = {
  id: "4.1",
  bnId: "অনুশীলনী ৪.১",
  title: "সূচক",
  bookPages: "৮০ – ৮১",
  formulas: [
    {
      title: "সূচকের সূত্রাবলি",
      formulas: [
        {
          statement: String.raw`$$a^{m}\times a^{n}=a^{m+n}$$`,
          note: "একই ভিত্তির রাশি গুণ করলে সূচকগুলো যোগ হয়।",
        },
        {
          statement: String.raw`$$\frac{a^{m}}{a^{n}}=a^{m-n}$$`,
          note: "একই ভিত্তির রাশি ভাগ করলে সূচক বিয়োগ হয়।",
        },
        {
          statement: String.raw`$$\left(a^{m}\right)^{n}=a^{mn}$$`,
          note: "সূচকের উপর সূচক থাকলে সূচক দুটি গুণ হয়।",
        },
        {
          statement: String.raw`$$(ab)^{n}=a^{n}b^{n}$$`,
          note: "গুণফলের সূচক প্রতিটি উৎপাদকের উপর আলাদাভাবে বসে।",
        },
        {
          statement: String.raw`$$\left(\frac{a}{b}\right)^{n}=\frac{a^{n}}{b^{n}}$$`,
          note: String.raw`ভাগফলের ক্ষেত্রেও একইভাবে বসে, যেখানে $b\neq 0$।`,
        },
      ],
    },
    {
      title: "শূন্য, ঋণাত্মক ও ভগ্নাংশ সূচক",
      formulas: [
        {
          statement: String.raw`$$a^{0}=1\qquad(a\neq 0)$$`,
          note: "শূন্য নয় এমন যেকোনো ভিত্তির শূন্য ঘাতের মান ১।",
        },
        {
          statement: String.raw`$$a^{-n}=\frac{1}{a^{n}},\qquad \frac{1}{a^{-n}}=a^{n}$$`,
          note: "ঋণাত্মক সূচক ভিত্তিটিকে ভগ্নাংশরেখার অপর পাশে নিয়ে যায়।",
        },
        {
          statement: String.raw`$$\left(\frac{a}{b}\right)^{-n}=\left(\frac{b}{a}\right)^{n}$$`,
          note: "তাই ভগ্নাংশের উপর ঋণাত্মক সূচক থাকলে ভগ্নাংশটি কেবল উল্টে যায়।",
        },
        {
          statement: String.raw`$$a^{\frac{1}{n}}=\sqrt[n]{a}$$`,
          note: String.raw`এখানে $a>0$ এবং $n$ ধনাত্মক পূর্ণসংখ্যা।`,
        },
        {
          statement: String.raw`$$a^{\frac{m}{n}}=\sqrt[n]{a^{m}}=\left(\sqrt[n]{a}\right)^{m}$$`,
          note: "প্রথমে প্রতিটি করণীকে ভগ্নাংশ সূচকে লিখে নাও; বাকি কাজ উপরের সূত্রগুলোই করে দেবে।",
        },
      ],
    },
    {
      title: "মূল ও করণী",
      formulas: [
        {
          statement: String.raw`$$\sqrt[n]{ab}=\sqrt[n]{a}\cdot\sqrt[n]{b}$$`,
        },
        {
          statement: String.raw`$$\sqrt[n]{\frac{a}{b}}=\frac{\sqrt[n]{a}}{\sqrt[n]{b}}$$`,
        },
        {
          statement: String.raw`$$\sqrt[m]{\sqrt[n]{a}}=\sqrt[mn]{a}$$`,
          note: "মূলের মূল নিলে ক্রম দুটি গুণ হয়।",
        },
        {
          statement: String.raw`$$\sqrt{a}\cdot\sqrt{a}=a\qquad(a\ge 0)$$`,
        },
      ],
    },
    {
      title: "সূচকীয় সমীকরণ",
      formulas: [
        {
          statement: String.raw`$$a^{x}=a^{y}\;\Rightarrow\; x=y$$`,
          note: String.raw`$a>0,\;a\neq 1$ হলে: উভয় পক্ষকে একই ভিত্তিতে লিখে সূচক দুটি সমান করো।`,
        },
        {
          statement: String.raw`$$a^{x}=b^{x},\;x\neq 0\;\Rightarrow\; a=b$$`,
          note: "সূচক অশূন্য ও উভয় পক্ষে সমান হলে ভিত্তি দুটিও সমান হবে।",
        },
        {
          statement: String.raw`$$a^{x}=1\;\Rightarrow\; x=0$$`,
          note: String.raw`কারণ $a^{0}=1$ ছাড়া অন্য কোনো ঘাতে ভিত্তিটি $1$ দেয় না।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ৭৮.
    {
      id: 1,
      question: String.raw`মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{5^{2}}{5^{3}}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{5^{2}}{5^{3}}$$`,
              String.raw`$$=5^{2-3}$$`,
              String.raw`$$=5^{-1}$$`,
              String.raw`$$=\frac{1}{5^{1}}=\frac{1}{5}$$`,
            ],
            answer: String.raw`$\dfrac{1}{5}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\left(\frac{2}{3}\right)^{5}\times\left(\frac{2}{3}\right)^{-5}$$`,
          solution: {
            steps: [
              String.raw`$$\left(\frac{2}{3}\right)^{5}\times\left(\frac{2}{3}\right)^{-5}$$`,
              String.raw`$$=\left(\frac{2}{3}\right)^{5-5}$$`,
              String.raw`$$=\left(\frac{2}{3}\right)^{0}$$`,
              String.raw`$$=1$$`,
            ],
            answer: String.raw`$1$`,
          },
        },
      ],
    },
    // উদাহরণ ২ — book page ৭৮.
    {
      id: 2,
      question: String.raw`সরল করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{5^{4}\times 8\times 16}{2^{5}\times 125}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{5^{4}\times 8\times 16}{2^{5}\times 125}$$`,
              String.raw`$$=\frac{5^{4}\times 2^{3}\times 2^{4}}{2^{5}\times 5^{3}}$$`,
              String.raw`$$=\frac{5^{4}\times 2^{3+4}}{5^{3}\times 2^{5}}$$`,
              String.raw`$$=\frac{5^{4}}{5^{3}}\times\frac{2^{7}}{2^{5}}$$`,
              String.raw`$$=5^{4-3}\times 2^{7-5}$$`,
              String.raw`$$=5^{1}\times 2^{2}=5\times 4=20$$`,
            ],
            answer: String.raw`$20$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{3\cdot 2^{n}-4\cdot 2^{n-2}}{2^{n}-2^{n-1}}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{3\cdot 2^{n}-4\cdot 2^{n-2}}{2^{n}-2^{n-1}}$$`,
              String.raw`$$=\frac{3\cdot 2^{n}-2^{2}\cdot 2^{n-2}}{2^{n}-2^{n}\cdot 2^{-1}}$$`,
              String.raw`$$=\frac{3\cdot 2^{n}-2^{2+n-2}}{2^{n}-2^{n}\cdot\frac{1}{2}}$$`,
              String.raw`$$=\frac{3\cdot 2^{n}-2^{n}}{\left(1-\frac{1}{2}\right)\cdot 2^{n}}$$`,
              String.raw`$$=\frac{(3-1)\cdot 2^{n}}{\frac{1}{2}\cdot 2^{n}}$$`,
              String.raw`$$=\frac{2\cdot 2^{n}}{\frac{1}{2}\cdot 2^{n}}=2\cdot 2=4$$`,
            ],
            answer: String.raw`$4$`,
          },
        },
      ],
    },
    // উদাহরণ ৩ — book page ৭৮.
    {
      id: 3,
      question: String.raw`দেখাও যে, $$\left(a^{p}\right)^{q-r}\cdot\left(a^{q}\right)^{r-p}\cdot\left(a^{r}\right)^{p-q}=1$$`,
      solution: {
        steps: [
          String.raw`$$\left(a^{p}\right)^{q-r}\cdot\left(a^{q}\right)^{r-p}\cdot\left(a^{r}\right)^{p-q}$$`,
          String.raw`$$=a^{p(q-r)}\cdot a^{q(r-p)}\cdot a^{r(p-q)}\qquad\left[\,\left(a^{m}\right)^{n}=a^{mn}\,\right]$$`,
          String.raw`$$=a^{pq-pr}\cdot a^{qr-pq}\cdot a^{pr-qr}$$`,
          String.raw`$$=a^{pq-pr+qr-pq+pr-qr}$$`,
          String.raw`$$=a^{0}=1$$`,
        ],
        answer: String.raw`$1$ (দেখানো হলো)`,
      },
    },
    // উদাহরণ ৪ — book pages ৭৯-৮০.
    {
      id: 4,
      question: String.raw`সরল করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$(12)^{-\frac{1}{2}}\times\sqrt[3]{54}$$`,
          solution: {
            steps: [
              String.raw`$$(12)^{-\frac{1}{2}}\times\sqrt[3]{54}$$`,
              String.raw`$$=\frac{1}{(12)^{\frac{1}{2}}}\times(54)^{\frac{1}{3}}$$`,
              String.raw`$$=\frac{1}{\left(2^{2}\times 3\right)^{\frac{1}{2}}}\times\left(3^{3}\times 2\right)^{\frac{1}{3}}$$`,
              String.raw`$$=\frac{1}{\left(2^{2}\right)^{\frac{1}{2}}\times 3^{\frac{1}{2}}}\times\left(3^{3}\right)^{\frac{1}{3}}\cdot 2^{\frac{1}{3}}$$`,
              String.raw`$$=\frac{1}{2\cdot 3^{\frac{1}{2}}}\times 3\cdot 2^{\frac{1}{3}}$$`,
              String.raw`$$=\frac{2^{\frac{1}{3}}}{2^{1}}\times\frac{3^{1}}{3^{\frac{1}{2}}}$$`,
              String.raw`$$=\frac{3^{1-\frac{1}{2}}}{2^{1-\frac{1}{3}}}$$`,
              String.raw`$$=\frac{3^{\frac{1}{2}}}{2^{\frac{2}{3}}}=\frac{3^{\frac{1}{2}}}{4^{\frac{1}{3}}}=\frac{\sqrt{3}}{\sqrt[3]{4}}$$`,
            ],
            answer: String.raw`$\dfrac{\sqrt{3}}{\sqrt[3]{4}}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$(-3)^{3}\times\left(-\frac{1}{2}\right)^{2}$$`,
          solution: {
            steps: [
              String.raw`$$(-3)^{3}\times\left(-\frac{1}{2}\right)^{2}$$`,
              String.raw`$$=(-3)(-3)(-3)\times\left(-\frac{1}{2}\right)\left(-\frac{1}{2}\right)$$`,
              String.raw`$$=-27\times\frac{1}{4}$$`,
              String.raw`$$=-\frac{27}{4}$$`,
            ],
            answer: String.raw`$-\dfrac{27}{4}$`,
          },
        },
      ],
    },
    // উদাহরণ ৫ — book page ৮০.
    {
      id: 5,
      question: String.raw`সমাধান করো: $$4^{x+1}=32$$`,
      solution: {
        steps: [
          String.raw`$$4^{x+1}=32$$`,
          String.raw`$$\text{or, }\left(2^{2}\right)^{x+1}=32$$`,
          String.raw`$$\text{or, }2^{2x+2}=2^{5}$$`,
          String.raw`$$\therefore\; 2x+2=5\qquad\left[\,a^{x}=a^{y}\Rightarrow x=y\,\right]$$`,
          String.raw`$$\text{or, }2x=5-2$$`,
          String.raw`$$\text{or, }2x=3$$`,
          String.raw`$$\therefore\; x=\frac{3}{2}$$`,
        ],
        answer: String.raw`$x=\dfrac{3}{2}$`,
      },
    },
  ],
  problems: [
    // ─────────────── সরল করো (1 – 8) ───────────────
    {
      id: 1,
      group: SIMPLIFY,
      question: String.raw`$$\frac{7^3 \times 7^{-3}}{3 \times 3^{-4}}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{7^{3}\times 7^{-3}}{3\times 3^{-4}}$$`,
          String.raw`$$=\frac{7^{3+(-3)}}{3^{1+(-4)}}$$`,
          String.raw`$$=\frac{7^{0}}{3^{-3}}$$`,
          String.raw`$$=\frac{1}{3^{-3}}$$`,
          String.raw`$$=3^{3}$$`,
          String.raw`$$=27$$`,
        ],
        answer: String.raw`$27$`,
      },
    },
    {
      id: 2,
      group: SIMPLIFY,
      question: String.raw`$$\frac{\sqrt[3]{7^2}\cdot\sqrt[3]{7}}{\sqrt{7}}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{\sqrt[3]{7^{2}}\cdot\sqrt[3]{7}}{\sqrt{7}}$$`,
          String.raw`$$=\frac{7^{\frac{2}{3}}\cdot 7^{\frac{1}{3}}}{7^{\frac{1}{2}}}$$`,
          String.raw`$$=\frac{7^{\frac{2}{3}+\frac{1}{3}}}{7^{\frac{1}{2}}}$$`,
          String.raw`$$=\frac{7^{1}}{7^{\frac{1}{2}}}$$`,
          String.raw`$$=7^{1-\frac{1}{2}}$$`,
          String.raw`$$=7^{\frac{1}{2}}=\sqrt{7}$$`,
        ],
        answer: String.raw`$\sqrt{7}$`,
      },
    },
    {
      id: 3,
      group: SIMPLIFY,
      question: String.raw`$$\left(2^{-1}+5^{-1}\right)^{-1}$$`,
      solution: {
        steps: [
          String.raw`$$\left(2^{-1}+5^{-1}\right)^{-1}$$`,
          String.raw`$$=\left(\frac{1}{2}+\frac{1}{5}\right)^{-1}$$`,
          String.raw`$$=\left(\frac{5+2}{10}\right)^{-1}$$`,
          String.raw`$$=\left(\frac{7}{10}\right)^{-1}$$`,
          String.raw`$$=\frac{10}{7}$$`,
        ],
        answer: String.raw`$\dfrac{10}{7}$`,
      },
    },
    {
      id: 4,
      group: SIMPLIFY,
      question: String.raw`$$\left(2a^{-1}+3b^{-1}\right)^{-1}$$`,
      solution: {
        steps: [
          String.raw`$$\left(2a^{-1}+3b^{-1}\right)^{-1}$$`,
          String.raw`$$=\left(\frac{2}{a}+\frac{3}{b}\right)^{-1}$$`,
          String.raw`$$=\left(\frac{2b+3a}{ab}\right)^{-1}$$`,
          String.raw`$$=\frac{ab}{3a+2b}$$`,
        ],
        answer: String.raw`$\dfrac{ab}{3a+2b}$`,
      },
    },
    {
      id: 5,
      group: SIMPLIFY,
      question: String.raw`$$\left(\frac{a^2b^{-1}}{a^{-2}b}\right)^{2}$$`,
      solution: {
        steps: [
          String.raw`$$\left(\frac{a^{2}b^{-1}}{a^{-2}b}\right)^{2}$$`,
          String.raw`$$=\left(a^{2-(-2)}\cdot b^{-1-1}\right)^{2}$$`,
          String.raw`$$=\left(a^{4}b^{-2}\right)^{2}$$`,
          String.raw`$$=a^{8}b^{-4}$$`,
          String.raw`$$=\frac{a^{8}}{b^{4}}$$`,
        ],
        answer: String.raw`$\dfrac{a^{8}}{b^{4}}$`,
      },
    },
    {
      id: 6,
      group: SIMPLIFY,
      question: String.raw`$$\sqrt{x^{-1}y}\cdot\sqrt{y^{-1}z}\cdot\sqrt{z^{-1}x}\qquad (x>0,\; y>0,\; z>0)$$`,
      solution: {
        steps: [
          String.raw`$$\sqrt{x^{-1}y}\cdot\sqrt{y^{-1}z}\cdot\sqrt{z^{-1}x}$$`,
          String.raw`$$=\sqrt{x^{-1}y\cdot y^{-1}z\cdot z^{-1}x}$$`,
          String.raw`$$=\sqrt{x^{-1+1}\cdot y^{1-1}\cdot z^{1-1}}$$`,
          String.raw`$$=\sqrt{x^{0}\,y^{0}\,z^{0}}$$`,
          String.raw`$$=\sqrt{1}=1$$`,
        ],
        answer: String.raw`$1$`,
      },
    },
    {
      id: 7,
      group: SIMPLIFY,
      question: String.raw`$$\frac{2^{n+4}-4\cdot 2^{n+1}}{2^{n+2}\div 2}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{2^{n+4}-4\cdot 2^{n+1}}{2^{n+2}\div 2}$$`,
          String.raw`$$=\frac{2^{n+4}-2^{2}\cdot 2^{n+1}}{2^{n+2-1}}$$`,
          String.raw`$$=\frac{2^{n+4}-2^{n+3}}{2^{n+1}}$$`,
          String.raw`$$=\frac{2^{n+3}(2-1)}{2^{n+1}}$$`,
          String.raw`$$=\frac{2^{n+3}}{2^{n+1}}$$`,
          String.raw`$$=2^{(n+3)-(n+1)}=2^{2}=4$$`,
        ],
        answer: String.raw`$4$`,
      },
    },
    {
      id: 8,
      group: SIMPLIFY,
      question: String.raw`$$\frac{3^{m+1}}{(3^{m})^{m-1}}\div\frac{9^{m+1}}{(3^{m-1})^{m+1}}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{3^{m+1}}{(3^{m})^{m-1}}\div\frac{9^{m+1}}{(3^{m-1})^{m+1}}$$`,
          String.raw`$$=\frac{3^{m+1}}{3^{m^{2}-m}}\div\frac{3^{2m+2}}{3^{m^{2}-1}}$$`,
          String.raw`$$=3^{(m+1)-(m^{2}-m)}\div 3^{(2m+2)-(m^{2}-1)}$$`,
          String.raw`$$=3^{-m^{2}+2m+1}\div 3^{-m^{2}+2m+3}$$`,
          String.raw`$$=3^{(-m^{2}+2m+1)-(-m^{2}+2m+3)}$$`,
          String.raw`$$=3^{-2}=\frac{1}{9}$$`,
        ],
        answer: String.raw`$\dfrac{1}{9}$`,
      },
    },

    // ─────────────── প্রমাণ করো (9 – 16) ───────────────
    {
      id: 9,
      group: PROVE,
      question: String.raw`$$\frac{4^{n}-1}{2^{n}-1}=2^{n}+1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{4^{n}-1}{2^{n}-1}$$`,
          String.raw`$$=\frac{(2^{2})^{n}-1}{2^{n}-1}$$`,
          String.raw`$$=\frac{(2^{n})^{2}-1^{2}}{2^{n}-1}$$`,
          String.raw`$$=\frac{(2^{n}+1)(2^{n}-1)}{2^{n}-1}$$`,
          String.raw`$$=2^{n}+1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 10,
      group: PROVE,
      question: String.raw`$$\frac{2^{2p+1}\cdot 3^{2p+q}\cdot 5^{p+q}\cdot 6^{p}}{3^{p-2}\cdot 6^{2p+2}\cdot 10^{p}\cdot 15^{q}}=\frac{1}{2}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{2^{2p+1}\cdot 3^{2p+q}\cdot 5^{p+q}\cdot 6^{p}}{3^{p-2}\cdot 6^{2p+2}\cdot 10^{p}\cdot 15^{q}}$$`,
          String.raw`$$=\frac{2^{2p+1}\cdot 3^{2p+q}\cdot 5^{p+q}\cdot (2\cdot 3)^{p}}{3^{p-2}\cdot (2\cdot 3)^{2p+2}\cdot (2\cdot 5)^{p}\cdot (3\cdot 5)^{q}}$$`,
          String.raw`$$=\frac{2^{2p+1}\cdot 2^{p}\cdot 3^{2p+q}\cdot 3^{p}\cdot 5^{p+q}}{2^{2p+2}\cdot 2^{p}\cdot 3^{p-2}\cdot 3^{2p+2}\cdot 3^{q}\cdot 5^{p}\cdot 5^{q}}$$`,
          String.raw`$$=\frac{2^{3p+1}\cdot 3^{3p+q}\cdot 5^{p+q}}{2^{3p+2}\cdot 3^{3p+q}\cdot 5^{p+q}}$$`,
          String.raw`$$=2^{(3p+1)-(3p+2)}$$`,
          String.raw`$$=2^{-1}=\frac{1}{2}=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 11,
      group: PROVE,
      question: String.raw`$$\left(\frac{a^{l}}{a^{m}}\right)^{n}\cdot\left(\frac{a^{m}}{a^{n}}\right)^{l}\cdot\left(\frac{a^{n}}{a^{l}}\right)^{m}=1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\left(\frac{a^{l}}{a^{m}}\right)^{n}\cdot\left(\frac{a^{m}}{a^{n}}\right)^{l}\cdot\left(\frac{a^{n}}{a^{l}}\right)^{m}$$`,
          String.raw`$$=\left(a^{l-m}\right)^{n}\cdot\left(a^{m-n}\right)^{l}\cdot\left(a^{n-l}\right)^{m}$$`,
          String.raw`$$=a^{ln-mn}\cdot a^{lm-ln}\cdot a^{mn-lm}$$`,
          String.raw`$$=a^{(ln-mn)+(lm-ln)+(mn-lm)}$$`,
          String.raw`$$=a^{0}=1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 12,
      group: PROVE,
      question: String.raw`$$\frac{a^{p+q}}{a^{2r}}\times\frac{a^{q+r}}{a^{2p}}\times\frac{a^{r+p}}{a^{2q}}=1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{a^{p+q}}{a^{2r}}\times\frac{a^{q+r}}{a^{2p}}\times\frac{a^{r+p}}{a^{2q}}$$`,
          String.raw`$$=a^{p+q-2r}\times a^{q+r-2p}\times a^{r+p-2q}$$`,
          String.raw`$$=a^{(p+q-2r)+(q+r-2p)+(r+p-2q)}$$`,
          String.raw`$$=a^{0}=1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 13,
      group: PROVE,
      question: String.raw`$$\left(\frac{x^{a}}{x^{b}}\right)^{\frac{1}{ab}}\cdot\left(\frac{x^{b}}{x^{c}}\right)^{\frac{1}{bc}}\cdot\left(\frac{x^{c}}{x^{a}}\right)^{\frac{1}{ca}}=1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\left(\frac{x^{a}}{x^{b}}\right)^{\frac{1}{ab}}\cdot\left(\frac{x^{b}}{x^{c}}\right)^{\frac{1}{bc}}\cdot\left(\frac{x^{c}}{x^{a}}\right)^{\frac{1}{ca}}$$`,
          String.raw`$$=\left(x^{a-b}\right)^{\frac{1}{ab}}\cdot\left(x^{b-c}\right)^{\frac{1}{bc}}\cdot\left(x^{c-a}\right)^{\frac{1}{ca}}$$`,
          String.raw`$$=x^{\frac{a-b}{ab}}\cdot x^{\frac{b-c}{bc}}\cdot x^{\frac{c-a}{ca}}$$`,
          String.raw`$$=x^{\frac{a-b}{ab}+\frac{b-c}{bc}+\frac{c-a}{ca}}$$`,
          String.raw`$$=x^{\left(\frac{1}{b}-\frac{1}{a}\right)+\left(\frac{1}{c}-\frac{1}{b}\right)+\left(\frac{1}{a}-\frac{1}{c}\right)}$$`,
          String.raw`$$=x^{0}=1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 14,
      group: PROVE,
      question: String.raw`$$\left(\frac{x^{a}}{x^{b}}\right)^{a+b}\cdot\left(\frac{x^{b}}{x^{c}}\right)^{b+c}\cdot\left(\frac{x^{c}}{x^{a}}\right)^{c+a}=1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\left(\frac{x^{a}}{x^{b}}\right)^{a+b}\cdot\left(\frac{x^{b}}{x^{c}}\right)^{b+c}\cdot\left(\frac{x^{c}}{x^{a}}\right)^{c+a}$$`,
          String.raw`$$=\left(x^{a-b}\right)^{a+b}\cdot\left(x^{b-c}\right)^{b+c}\cdot\left(x^{c-a}\right)^{c+a}$$`,
          String.raw`$$=x^{a^{2}-b^{2}}\cdot x^{b^{2}-c^{2}}\cdot x^{c^{2}-a^{2}}$$`,
          String.raw`$$=x^{(a^{2}-b^{2})+(b^{2}-c^{2})+(c^{2}-a^{2})}$$`,
          String.raw`$$=x^{0}=1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 15,
      group: PROVE,
      question: String.raw`$$\left(\frac{x^{p}}{x^{q}}\right)^{p+q-r}\cdot\left(\frac{x^{q}}{x^{r}}\right)^{q+r-p}\cdot\left(\frac{x^{r}}{x^{p}}\right)^{r+p-q}=1$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\left(\frac{x^{p}}{x^{q}}\right)^{p+q-r}\cdot\left(\frac{x^{q}}{x^{r}}\right)^{q+r-p}\cdot\left(\frac{x^{r}}{x^{p}}\right)^{r+p-q}$$`,
          String.raw`$$=\left(x^{p-q}\right)^{p+q-r}\cdot\left(x^{q-r}\right)^{q+r-p}\cdot\left(x^{r-p}\right)^{r+p-q}$$`,
          String.raw`$$=x^{(p-q)(p+q-r)}\cdot x^{(q-r)(q+r-p)}\cdot x^{(r-p)(r+p-q)}$$`,
          String.raw`$$=x^{(p^{2}-q^{2}-rp+rq)+(q^{2}-r^{2}-pq+pr)+(r^{2}-p^{2}-qr+qp)}$$`,
          String.raw`$$=x^{0}=1=\text{R.H.S.}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 16,
      group: PROVE,
      question: String.raw`যদি $a^{x}=b$, $b^{y}=c$ এবং $c^{z}=a$ হয়, তবে দেখাও যে $xyz=1$।`,
      solution: {
        steps: [
          String.raw`$$c^{z}=a$$`,
          String.raw`$$\text{or, }\left(b^{y}\right)^{z}=a\qquad[\,c=b^{y}\,]$$`,
          String.raw`$$\text{or, } b^{yz}=a$$`,
          String.raw`$$\text{or, }\left(a^{x}\right)^{yz}=a\qquad[\,b=a^{x}\,]$$`,
          String.raw`$$\text{or, } a^{xyz}=a^{1}$$`,
          String.raw`$$\therefore\; xyz=1$$`,
        ],
        answer: String.raw`$xyz=1$ (দেখানো হলো)`,
      },
    },

    // ─────────────── সমাধান করো (17 – 20) ───────────────
    {
      id: 17,
      group: SOLVE,
      question: String.raw`$$4^{x}=8$$`,
      solution: {
        steps: [
          String.raw`$$4^{x}=8$$`,
          String.raw`$$\text{or, }\left(2^{2}\right)^{x}=2^{3}$$`,
          String.raw`$$\text{or, } 2^{2x}=2^{3}$$`,
          String.raw`$$\therefore\; 2x=3$$`,
          String.raw`$$\therefore\; x=\frac{3}{2}$$`,
        ],
        answer: String.raw`$x=\dfrac{3}{2}$`,
      },
    },
    {
      id: 18,
      group: SOLVE,
      question: String.raw`$$2^{2x+1}=128$$`,
      solution: {
        steps: [
          String.raw`$$2^{2x+1}=128$$`,
          String.raw`$$\text{or, } 2^{2x+1}=2^{7}$$`,
          String.raw`$$\therefore\; 2x+1=7$$`,
          String.raw`$$\text{or, } 2x=6$$`,
          String.raw`$$\therefore\; x=3$$`,
        ],
        answer: String.raw`$x=3$`,
      },
    },
    {
      id: 19,
      group: SOLVE,
      question: String.raw`$$(\sqrt{3})^{x+1}=(\sqrt[3]{3})^{2x-1}$$`,
      solution: {
        steps: [
          String.raw`$$(\sqrt{3})^{x+1}=(\sqrt[3]{3})^{2x-1}$$`,
          String.raw`$$\text{or, }\left(3^{\frac{1}{2}}\right)^{x+1}=\left(3^{\frac{1}{3}}\right)^{2x-1}$$`,
          String.raw`$$\text{or, } 3^{\frac{x+1}{2}}=3^{\frac{2x-1}{3}}$$`,
          String.raw`$$\therefore\;\frac{x+1}{2}=\frac{2x-1}{3}$$`,
          String.raw`$$\text{or, } 3(x+1)=2(2x-1)$$`,
          String.raw`$$\text{or, } 3x+3=4x-2$$`,
          String.raw`$$\therefore\; x=5$$`,
        ],
        answer: String.raw`$x=5$`,
      },
    },
    {
      id: 20,
      group: SOLVE,
      question: String.raw`$$2^{x}+2^{1-x}=3$$`,
      solution: {
        steps: [
          String.raw`$$2^{x}+2^{1-x}=3$$`,
          String.raw`$$\text{or, } 2^{x}+\frac{2}{2^{x}}=3$$`,
          String.raw`$$\text{Let } y=2^{x}$$`,
          String.raw`$$\text{or, } y+\frac{2}{y}=3$$`,
          String.raw`$$\text{or, } y^{2}-3y+2=0$$`,
          String.raw`$$\text{or, } (y-1)(y-2)=0$$`,
          String.raw`$$\therefore\; y=1\;\text{ or }\; y=2$$`,
          String.raw`$$2^{x}=1=2^{0}\;\Rightarrow\; x=0$$`,
          String.raw`$$2^{x}=2=2^{1}\;\Rightarrow\; x=1$$`,
        ],
        answer: String.raw`$x=0$ অথবা $x=1$`,
      },
    },

    // ─────────────── সৃজনশীল (21 – 22) ───────────────
    {
      id: 21,
      group: CREATIVE,
      question: String.raw`$P=x^{a}$, $Q=x^{b}$ এবং $R=x^{c}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`মান নির্ণয় করো: $$\left(\frac{P}{Q}\right)^{a+b}\times\left(\frac{Q}{R}\right)^{b+c}\div 2(RP)^{a-c}$$`,
          solution: {
            steps: [
              String.raw`$$\left(\frac{P}{Q}\right)^{a+b}\times\left(\frac{Q}{R}\right)^{b+c}\div 2(RP)^{a-c}$$`,
              String.raw`$$=\left(\frac{x^{a}}{x^{b}}\right)^{a+b}\times\left(\frac{x^{b}}{x^{c}}\right)^{b+c}\div 2\left(x^{c}\cdot x^{a}\right)^{a-c}$$`,
              String.raw`$$=\left(x^{a-b}\right)^{a+b}\times\left(x^{b-c}\right)^{b+c}\div 2\left(x^{a+c}\right)^{a-c}$$`,
              String.raw`$$=x^{a^{2}-b^{2}}\times x^{b^{2}-c^{2}}\div 2x^{a^{2}-c^{2}}$$`,
              String.raw`$$=x^{a^{2}-c^{2}}\div 2x^{a^{2}-c^{2}}$$`,
              String.raw`$$=\frac{x^{a^{2}-c^{2}}}{2x^{a^{2}-c^{2}}}=\frac{1}{2}$$`,
            ],
            answer: String.raw`$\dfrac{1}{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $$\left(\frac{P}{Q}\right)^{a^{2}+ab+b^{2}}\times\left(\frac{Q}{R}\right)^{b^{2}+bc+c^{2}}\times\left(\frac{R}{P}\right)^{c^{2}+ca+a^{2}}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\left(\frac{P}{Q}\right)^{a^{2}+ab+b^{2}}\times\left(\frac{Q}{R}\right)^{b^{2}+bc+c^{2}}\times\left(\frac{R}{P}\right)^{c^{2}+ca+a^{2}}$$`,
              String.raw`$$=\left(x^{a-b}\right)^{a^{2}+ab+b^{2}}\times\left(x^{b-c}\right)^{b^{2}+bc+c^{2}}\times\left(x^{c-a}\right)^{c^{2}+ca+a^{2}}$$`,
              String.raw`$$=x^{(a-b)(a^{2}+ab+b^{2})}\times x^{(b-c)(b^{2}+bc+c^{2})}\times x^{(c-a)(c^{2}+ca+a^{2})}$$`,
              String.raw`$$=x^{a^{3}-b^{3}}\times x^{b^{3}-c^{3}}\times x^{c^{3}-a^{3}}$$`,
              String.raw`$$=x^{(a^{3}-b^{3})+(b^{3}-c^{3})+(c^{3}-a^{3})}$$`,
              String.raw`$$=x^{0}=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
    {
      id: 22,
      group: CREATIVE,
      question: String.raw`$$X=\left(2a^{-1}+3b^{-1}\right)^{-1},\qquad Y=\sqrt[pq]{\frac{x^{p}}{x^{q}}}\times\sqrt[qr]{\frac{x^{q}}{x^{r}}}\times\sqrt[rp]{\frac{x^{r}}{x^{p}}}$$
$$Z=\frac{25^{m+1}}{\left(5^{m-1}\right)^{m+1}}\div\frac{5^{m+1}}{\left(5^{m}\right)^{m-1}}+\left(5^{2}\right)^{x},\qquad p,q,r>0$$`,
      parts: [
        {
          label: "ক",
          question: String.raw`$X$-এর সরলীকৃত মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$X=\left(2a^{-1}+3b^{-1}\right)^{-1}$$`,
              String.raw`$$=\left(\frac{2}{a}+\frac{3}{b}\right)^{-1}$$`,
              String.raw`$$=\left(\frac{2b+3a}{ab}\right)^{-1}$$`,
              String.raw`$$=\frac{ab}{3a+2b}$$`,
            ],
            answer: String.raw`$X=\dfrac{ab}{3a+2b}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $Y=1$।`,
          solution: {
            steps: [
              String.raw`$$Y=\sqrt[pq]{\frac{x^{p}}{x^{q}}}\times\sqrt[qr]{\frac{x^{q}}{x^{r}}}\times\sqrt[rp]{\frac{x^{r}}{x^{p}}}$$`,
              String.raw`$$=\left(x^{p-q}\right)^{\frac{1}{pq}}\times\left(x^{q-r}\right)^{\frac{1}{qr}}\times\left(x^{r-p}\right)^{\frac{1}{rp}}$$`,
              String.raw`$$=x^{\frac{p-q}{pq}}\times x^{\frac{q-r}{qr}}\times x^{\frac{r-p}{rp}}$$`,
              String.raw`$$=x^{\frac{p-q}{pq}+\frac{q-r}{qr}+\frac{r-p}{rp}}$$`,
              String.raw`$$=x^{\left(\frac{1}{q}-\frac{1}{p}\right)+\left(\frac{1}{r}-\frac{1}{q}\right)+\left(\frac{1}{p}-\frac{1}{r}\right)}$$`,
              String.raw`$$=x^{0}=1$$`,
            ],
            answer: String.raw`$Y=1$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$Z=30$ হলে, $x$-এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$Z=\frac{25^{m+1}}{\left(5^{m-1}\right)^{m+1}}\div\frac{5^{m+1}}{\left(5^{m}\right)^{m-1}}+\left(5^{2}\right)^{x}$$`,
              String.raw`$$=\frac{5^{2m+2}}{5^{m^{2}-1}}\div\frac{5^{m+1}}{5^{m^{2}-m}}+5^{2x}$$`,
              String.raw`$$=5^{-m^{2}+2m+3}\div 5^{-m^{2}+2m+1}+5^{2x}$$`,
              String.raw`$$=5^{(-m^{2}+2m+3)-(-m^{2}+2m+1)}+5^{2x}$$`,
              String.raw`$$=5^{2}+5^{2x}=25+5^{2x}$$`,
              String.raw`$$\text{Given, } Z=30$$`,
              String.raw`$$\text{or, } 25+5^{2x}=30$$`,
              String.raw`$$\text{or, } 5^{2x}=5=5^{1}$$`,
              String.raw`$$\therefore\; 2x=1$$`,
              String.raw`$$\therefore\; x=\frac{1}{2}$$`,
            ],
            answer: String.raw`$x=\dfrac{1}{2}$`,
          },
        },
      ],
    },
  ],
};

// অনুশীলনী ৪.২ — book page ৮৬. Every problem here carries its own
// instruction line, so no group headings are used.
const exercise42: Exercise = {
  id: "4.2",
  bnId: "অনুশীলনী ৪.২",
  title: "লগারিদম",
  bookPages: "৮৬",
  formulas: [
    {
      title: "লগারিদম কাকে বলে",
      formulas: [
        {
          statement: String.raw`$$a^{x}=N\iff \log_{a}N=x$$`,
          note: String.raw`পড়তে হয়: $\log_a N$ হলো সেই ঘাত, যত ঘাতে ভিত্তি $a$-কে উন্নীত করলে $N$ পাওয়া যায়। এখানে $a>0,\;a\neq 1,\;N>0$।`,
        },
        {
          statement: String.raw`$$\log_{a}a=1$$`,
          note: String.raw`কারণ $a^{1}=a$। নিচের বেশির ভাগ সমস্যা এই ধাপেই শেষ হয়।`,
        },
        {
          statement: String.raw`$$\log_{a}1=0$$`,
          note: String.raw`কারণ $a^{0}=1$।`,
        },
        {
          statement: String.raw`$$a^{\log_{a}N}=N$$`,
          note: "ভিত্তিকে তার নিজের লগারিদম ঘাতে উন্নীত করলে লগারিদম কেটে যায়।",
        },
      ],
    },
    {
      title: "লগারিদমের সূত্রাবলি",
      formulas: [
        {
          statement: String.raw`$$\log_{a}(MN)=\log_{a}M+\log_{a}N$$`,
          note: String.raw`গুণ পরিণত হয় যোগে। এখানকার প্রতিটি সূত্রের জন্য $M,N>0$ হতে হবে এবং ভিত্তি সর্বত্র একই থাকবে।`,
        },
        {
          statement: String.raw`$$\log_{a}\frac{M}{N}=\log_{a}M-\log_{a}N$$`,
          note: "ভাগ পরিণত হয় বিয়োগে।",
        },
        {
          statement: String.raw`$$\log_{a}M^{r}=r\log_{a}M$$`,
          note: String.raw`সূচক সহগ হয়ে নেমে আসে — আর করণী তো সূচকই, তাই $\log_{5}\sqrt[3]{5}=\tfrac{1}{3}\log_{5}5$।`,
        },
      ],
    },
    {
      title: "ভিত্তি পরিবর্তন",
      formulas: [
        {
          statement: String.raw`$$\log_{a}M=\frac{\log_{b}M}{\log_{b}a}$$`,
          note: "লগারিদমকে সুবিধামতো যেকোনো ভিত্তিতে লেখা যায় — সাধারণত সংখ্যাগুলো যে ভিত্তির ঘাত, সেই ভিত্তিতে।",
        },
        {
          statement: String.raw`$$\log_{a}M=\log_{b}M\times\log_{a}b$$`,
          note: "একই সূত্র, গুণফল আকারে লেখা।",
        },
        {
          statement: String.raw`$$\log_{a}b\times\log_{b}a=1\;\Rightarrow\;\log_{a}b=\frac{1}{\log_{b}a}$$`,
          note: "ভিত্তি ও সংখ্যা অদলবদল করলে মানটি বিপরীত হয়ে যায়।",
        },
      ],
    },
    {
      title: "সাধারণ ও স্বাভাবিক লগারিদম",
      formulas: [
        {
          statement: String.raw`$$\log N=\log_{10}N$$`,
          note: "ভিত্তি না লিখে লগারিদম লিখলে সেটি সাধারণ লগারিদম, যার ভিত্তি ১০।",
        },
        {
          statement: String.raw`$$\ln N=\log_{e}N,\qquad e\approx 2.71828$$`,
          note: "স্বাভাবিক লগারিদম, যার ভিত্তি $e$।",
        },
        {
          statement: String.raw`$$N=a\times 10^{n},\qquad 1\le a<10$$`,
          note: String.raw`এই বৈজ্ঞানিক আকারে পূর্ণসংখ্যা $n$ হলো $\log N$-এর পূর্ণক; সারণি থেকে পাওয়া দশমিক অংশটি অংশক, আর তা সর্বদাই ধনাত্মক।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৬ — book page ৮৪.
    {
      id: 6,
      question: String.raw`মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\log_{10}100$$`,
          solution: {
            steps: [
              String.raw`$$\log_{10}100$$`,
              String.raw`$$=\log_{10}10^{2}$$`,
              String.raw`$$=2\log_{10}10\qquad[\,\log_{a}M^{r}=r\log_{a}M\,]$$`,
              String.raw`$$=2\times 1=2\qquad[\,\log_{a}a=1\,]$$`,
            ],
            answer: String.raw`$2$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{3}\frac{1}{9}$$`,
          solution: {
            steps: [
              String.raw`$$\log_{3}\left(\frac{1}{9}\right)$$`,
              String.raw`$$=\log_{3}\left(\frac{1}{3^{2}}\right)$$`,
              String.raw`$$=\log_{3}3^{-2}$$`,
              String.raw`$$=-2\log_{3}3\qquad[\,\log_{a}M^{r}=r\log_{a}M\,]$$`,
              String.raw`$$=-2\times 1=-2$$`,
            ],
            answer: String.raw`$-2$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\log_{\sqrt{3}}81$$`,
          solution: {
            steps: [
              String.raw`$$\log_{\sqrt{3}}81$$`,
              String.raw`$$=\log_{\sqrt{3}}3^{4}$$`,
              String.raw`$$=\log_{\sqrt{3}}\left\{\left(\sqrt{3}\right)^{2}\right\}^{4}$$`,
              String.raw`$$=\log_{\sqrt{3}}\left(\sqrt{3}\right)^{8}$$`,
              String.raw`$$=8\log_{\sqrt{3}}\sqrt{3}$$`,
              String.raw`$$=8\times 1=8\qquad[\,\log_{a}a=1\,]$$`,
            ],
            answer: String.raw`$8$`,
          },
        },
      ],
    },
    // উদাহরণ ৭ — book pages ৮৪-৮৫.
    {
      id: 7,
      question: String.raw`লগারিদম ও ভিত্তি:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$5$ ভিত্তিতে $5\sqrt{5}$-এর লগারিদম কত?`,
          solution: {
            steps: [
              String.raw`$$\log_{5}5\sqrt{5}$$`,
              String.raw`$$=\log_{5}\left(5\times 5^{\frac{1}{2}}\right)$$`,
              String.raw`$$=\log_{5}5^{\frac{3}{2}}$$`,
              String.raw`$$=\frac{3}{2}\log_{5}5\qquad[\,\log_{a}M^{r}=r\log_{a}M\,]$$`,
              String.raw`$$=\frac{3}{2}\times 1=\frac{3}{2}$$`,
            ],
            answer: String.raw`$\dfrac{3}{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$400$-এর লগারিদম $4$ হলে ভিত্তি কত?`,
          solution: {
            steps: [
              String.raw`মনে করি, ভিত্তি $a$।`,
              String.raw`$$\therefore\;\log_{a}400=4$$`,
              String.raw`$$\therefore\; a^{4}=400$$`,
              String.raw`$$\text{or, } a^{4}=(20)^{2}=\left\{\left(2\sqrt{5}\right)^{2}\right\}^{2}=\left(2\sqrt{5}\right)^{4}$$`,
              String.raw`$$\therefore\; a=2\sqrt{5}\qquad\left[\,a^{x}=b^{x},\,x\neq 0\Rightarrow a=b\,\right]$$`,
            ],
            answer: String.raw`ভিত্তি $=2\sqrt{5}$`,
          },
        },
      ],
    },
    // উদাহরণ ৮ — book page ৮৫.
    {
      id: 8,
      question: String.raw`$x$-এর মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\log_{10}x=-2$$`,
          solution: {
            steps: [
              String.raw`$$\log_{10}x=-2$$`,
              String.raw`$$\text{or, } x=10^{-2}$$`,
              String.raw`$$=\frac{1}{10^{2}}=\frac{1}{100}=0.01$$`,
              String.raw`$$\therefore\; x=0.01$$`,
            ],
            answer: String.raw`$x=0.01$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{x}324=4$$`,
          solution: {
            steps: [
              String.raw`$$\log_{x}324=4$$`,
              String.raw`$$\text{or, } x^{4}=324=3\times 3\times 3\times 3\times 2\times 2=3^{4}\times 2^{2}$$`,
              String.raw`$$\text{or, } x^{4}=3^{4}\times\left(\sqrt{2}\right)^{4}$$`,
              String.raw`$$\text{or, } x^{4}=\left(3\sqrt{2}\right)^{4}$$`,
              String.raw`$$\therefore\; x=3\sqrt{2}$$`,
            ],
            answer: String.raw`$x=3\sqrt{2}$`,
          },
        },
      ],
    },
    // উদাহরণ ৯ — book page ৮৫.
    {
      id: 9,
      question: String.raw`প্রমাণ করো যে, $$3\log_{10}2+\log_{10}5=\log_{10}40$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=3\log_{10}2+\log_{10}5$$`,
          String.raw`$$=\log_{10}2^{3}+\log_{10}5\qquad[\,\log_{a}M^{r}=r\log_{a}M\,]$$`,
          String.raw`$$=\log_{10}8+\log_{10}5$$`,
          String.raw`$$=\log_{10}(8\times 5)\qquad[\,\log_{a}(MN)=\log_{a}M+\log_{a}N\,]$$`,
          String.raw`$$=\log_{10}40=\text{R.H.S.}$$`,
        ],
        answer: String.raw`$3\log_{10}2+\log_{10}5=\log_{10}40$ (প্রমাণিত)`,
      },
    },
    // উদাহরণ ১০ — book pages ৮৫-৮৬.
    {
      id: 10,
      question: String.raw`সরল করো: $$\frac{\log_{10}\sqrt{27}+\log_{10}8-\log_{10}\sqrt{1000}}{\log_{10}1.2}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{\log_{10}\sqrt{27}+\log_{10}8-\log_{10}\sqrt{1000}}{\log_{10}1.2}$$`,
          String.raw`$$=\frac{\log_{10}\left(3^{3}\right)^{\frac{1}{2}}+\log_{10}8-\log_{10}\left(10^{3}\right)^{\frac{1}{2}}}{\log_{10}\frac{12}{10}}$$`,
          String.raw`$$=\frac{\log_{10}3^{\frac{3}{2}}+\log_{10}2^{3}-\log_{10}(10)^{\frac{3}{2}}}{\log_{10}12-\log_{10}10}$$`,
          String.raw`$$=\frac{\frac{3}{2}\log_{10}3+3\log_{10}2-\frac{3}{2}\log_{10}10}{\log_{10}\left(3\times 2^{2}\right)-\log_{10}10}$$`,
          String.raw`$$=\frac{\frac{3}{2}\left(\log_{10}3+2\log_{10}2-1\right)}{\log_{10}3+2\log_{10}2-1}\qquad[\,\log_{10}10=1\,]$$`,
          String.raw`$$=\frac{3}{2}$$`,
        ],
        answer: String.raw`$\dfrac{3}{2}$`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      question: String.raw`মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\log_{3}81$$`,
          solution: {
            steps: [
              String.raw`$$\log_{3}81$$`,
              String.raw`$$=\log_{3}3^{4}$$`,
              String.raw`$$=4\log_{3}3$$`,
              String.raw`$$=4\qquad[\,\log_{a}a=1\,]$$`,
            ],
            answer: String.raw`$4$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{5}\sqrt[3]{5}$$`,
          solution: {
            steps: [
              String.raw`$$\log_{5}\sqrt[3]{5}$$`,
              String.raw`$$=\log_{5}5^{\frac{1}{3}}$$`,
              String.raw`$$=\frac{1}{3}\log_{5}5$$`,
              String.raw`$$=\frac{1}{3}$$`,
            ],
            answer: String.raw`$\dfrac{1}{3}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\log_{4}2$$`,
          solution: {
            steps: [
              String.raw`$$\log_{4}2$$`,
              String.raw`$$=\log_{4}4^{\frac{1}{2}}\qquad[\,2=\sqrt{4}=4^{\frac12}\,]$$`,
              String.raw`$$=\frac{1}{2}\log_{4}4$$`,
              String.raw`$$=\frac{1}{2}$$`,
            ],
            answer: String.raw`$\dfrac{1}{2}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$\log_{2\sqrt{5}}400$$`,
          solution: {
            steps: [
              String.raw`$$\left(2\sqrt{5}\right)^{2}=4\times5=20$$`,
              String.raw`$$400=20^{2}=\left\{\left(2\sqrt{5}\right)^{2}\right\}^{2}=\left(2\sqrt{5}\right)^{4}$$`,
              String.raw`$$\log_{2\sqrt{5}}400=\log_{2\sqrt{5}}\left(2\sqrt{5}\right)^{4}$$`,
              String.raw`$$=4\log_{2\sqrt{5}}\left(2\sqrt{5}\right)$$`,
              String.raw`$$=4$$`,
            ],
            answer: String.raw`$4$`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$$\log_{5}\left(\sqrt[3]{5}\cdot\sqrt{5}\right)$$`,
          solution: {
            steps: [
              String.raw`$$\log_{5}\left(\sqrt[3]{5}\cdot\sqrt{5}\right)$$`,
              String.raw`$$=\log_{5}\left(5^{\frac{1}{3}}\cdot 5^{\frac{1}{2}}\right)$$`,
              String.raw`$$=\log_{5}5^{\frac{1}{3}+\frac{1}{2}}$$`,
              String.raw`$$=\log_{5}5^{\frac{5}{6}}$$`,
              String.raw`$$=\frac{5}{6}$$`,
            ],
            answer: String.raw`$\dfrac{5}{6}$`,
          },
        },
      ],
    },
    {
      id: 2,
      question: String.raw`$x$-এর মান নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\log_{5}x=3$$`,
          solution: {
            steps: [
              String.raw`$$\log_{5}x=3$$`,
              String.raw`$$\text{or, } x=5^{3}$$`,
              String.raw`$$\therefore\; x=125$$`,
            ],
            answer: String.raw`$x=125$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{x}25=2$$`,
          solution: {
            steps: [
              String.raw`$$\log_{x}25=2$$`,
              String.raw`$$\text{or, } x^{2}=25$$`,
              String.raw`$$\text{or, } x^{2}=5^{2}$$`,
              String.raw`$$\therefore\; x=5\qquad[\,x>0,\; x\neq1\,]$$`,
            ],
            answer: String.raw`$x=5$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\log_{x}\frac{1}{16}=-2$$`,
          solution: {
            steps: [
              String.raw`$$\log_{x}\frac{1}{16}=-2$$`,
              String.raw`$$\text{or, } x^{-2}=\frac{1}{16}$$`,
              String.raw`$$\text{or, } \frac{1}{x^{2}}=\frac{1}{16}$$`,
              String.raw`$$\text{or, } x^{2}=16=4^{2}$$`,
              String.raw`$$\therefore\; x=4\qquad[\,x>0,\; x\neq1\,]$$`,
            ],
            answer: String.raw`$x=4$`,
          },
        },
      ],
    },
    {
      id: 3,
      question: String.raw`দেখাও যে,`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$5\log_{10}5-\log_{10}25=\log_{10}125$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=5\log_{10}5-\log_{10}25$$`,
              String.raw`$$=\log_{10}5^{5}-\log_{10}5^{2}$$`,
              String.raw`$$=\log_{10}\frac{5^{5}}{5^{2}}$$`,
              String.raw`$$=\log_{10}5^{3}$$`,
              String.raw`$$=\log_{10}125=\text{R.H.S.}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{10}\frac{50}{147}=\log_{10}2+2\log_{10}5-\log_{10}3-2\log_{10}7$$`,
          solution: {
            steps: [
              String.raw`$$\text{R.H.S.}=\log_{10}2+2\log_{10}5-\log_{10}3-2\log_{10}7$$`,
              String.raw`$$=\log_{10}2+\log_{10}5^{2}-\log_{10}3-\log_{10}7^{2}$$`,
              String.raw`$$=\log_{10}(2\times25)-\log_{10}(3\times49)$$`,
              String.raw`$$=\log_{10}50-\log_{10}147$$`,
              String.raw`$$=\log_{10}\frac{50}{147}=\text{L.H.S.}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$3\log_{10}2+2\log_{10}3+\log_{10}5=\log_{10}360$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=3\log_{10}2+2\log_{10}3+\log_{10}5$$`,
              String.raw`$$=\log_{10}2^{3}+\log_{10}3^{2}+\log_{10}5$$`,
              String.raw`$$=\log_{10}(8\times9\times5)$$`,
              String.raw`$$=\log_{10}360=\text{R.H.S.}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
    {
      id: 4,
      question: String.raw`সরল করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$7\log_{10}\frac{10}{9}-2\log_{10}\frac{25}{24}+3\log_{10}\frac{81}{80}$$`,
          solution: {
            steps: [
              String.raw`$$7\log_{10}\frac{10}{9}-2\log_{10}\frac{25}{24}+3\log_{10}\frac{81}{80}$$`,
              String.raw`$$=\log_{10}\left(\frac{10}{9}\right)^{7}-\log_{10}\left(\frac{25}{24}\right)^{2}+\log_{10}\left(\frac{81}{80}\right)^{3}$$`,
              String.raw`$$=\log_{10}\frac{\left(\frac{10}{9}\right)^{7}\times\left(\frac{81}{80}\right)^{3}}{\left(\frac{25}{24}\right)^{2}}$$`,
              String.raw`$$\frac{10}{9}=\frac{2\cdot5}{3^{2}},\quad\frac{25}{24}=\frac{5^{2}}{2^{3}\cdot3},\quad\frac{81}{80}=\frac{3^{4}}{2^{4}\cdot5}$$`,
              String.raw`$$=\log_{10}\left(\frac{2^{7}\cdot5^{7}}{3^{14}}\times\frac{3^{12}}{2^{12}\cdot5^{3}}\times\frac{2^{6}\cdot3^{2}}{5^{4}}\right)$$`,
              String.raw`$$=\log_{10}\left(2^{\,7-12+6}\cdot3^{\,-14+12+2}\cdot5^{\,7-3-4}\right)$$`,
              String.raw`$$=\log_{10}\left(2^{1}\cdot3^{0}\cdot5^{0}\right)$$`,
              String.raw`$$=\log_{10}2$$`,
            ],
            answer: String.raw`$\log_{10}2$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\log_{7}\left(\sqrt[5]{7}\cdot\sqrt{7}\right)-\log_{3}\sqrt[3]{3}+\log_{4}2$$`,
          solution: {
            steps: [
              String.raw`$$\log_{7}\left(\sqrt[5]{7}\cdot\sqrt{7}\right)-\log_{3}\sqrt[3]{3}+\log_{4}2$$`,
              String.raw`$$=\log_{7}\left(7^{\frac{1}{5}}\cdot7^{\frac{1}{2}}\right)-\log_{3}3^{\frac{1}{3}}+\log_{4}4^{\frac{1}{2}}$$`,
              String.raw`$$=\log_{7}7^{\frac{7}{10}}-\log_{3}3^{\frac{1}{3}}+\log_{4}4^{\frac{1}{2}}$$`,
              String.raw`$$=\frac{7}{10}-\frac{1}{3}+\frac{1}{2}$$`,
              String.raw`$$=\frac{21-10+15}{30}=\frac{26}{30}$$`,
              String.raw`$$=\frac{13}{15}$$`,
            ],
            answer: String.raw`$\dfrac{13}{15}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\log_{e}\frac{a^{3}b^{3}}{c^{3}}+\log_{e}\frac{b^{3}c^{3}}{d^{3}}+\log_{e}\frac{c^{3}d^{3}}{a^{3}}-3\log_{e}b^{2}c$$`,
          solution: {
            steps: [
              String.raw`$$\log_{e}\frac{a^{3}b^{3}}{c^{3}}+\log_{e}\frac{b^{3}c^{3}}{d^{3}}+\log_{e}\frac{c^{3}d^{3}}{a^{3}}-3\log_{e}b^{2}c$$`,
              String.raw`$$=\log_{e}\left(\frac{a^{3}b^{3}}{c^{3}}\times\frac{b^{3}c^{3}}{d^{3}}\times\frac{c^{3}d^{3}}{a^{3}}\right)-\log_{e}\left(b^{2}c\right)^{3}$$`,
              String.raw`$$=\log_{e}\frac{a^{3}b^{6}c^{6}d^{3}}{a^{3}c^{3}d^{3}}-\log_{e}b^{6}c^{3}$$`,
              String.raw`$$=\log_{e}b^{6}c^{3}-\log_{e}b^{6}c^{3}$$`,
              String.raw`$$=0$$`,
            ],
            answer: String.raw`$0$`,
          },
        },
      ],
    },
    {
      id: 5,
      question: String.raw`$$x=2,\quad y=3,\quad z=5,\quad w=7$$`,
      parts: [
        {
          label: "ক",
          question: String.raw`$3$ ভিত্তিতে $\sqrt{y^{3}}$-এর লগারিদম নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\log_{3}\sqrt{y^{3}}$$`,
              String.raw`$$=\log_{3}\sqrt{3^{3}}\qquad[\,y=3\,]$$`,
              String.raw`$$=\log_{3}3^{\frac{3}{2}}$$`,
              String.raw`$$=\frac{3}{2}\log_{3}3$$`,
              String.raw`$$=\frac{3}{2}$$`,
            ],
            answer: String.raw`$\dfrac{3}{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`মান নির্ণয় করো: $$w\log\frac{xz}{y^{2}}-x\log\frac{z^{2}}{x^{2}y}+y\log\frac{y^{4}}{x^{4}z}$$`,
          solution: {
            steps: [
              String.raw`$$w\log\frac{xz}{y^{2}}-x\log\frac{z^{2}}{x^{2}y}+y\log\frac{y^{4}}{x^{4}z}$$`,
              String.raw`$$=7\log\frac{2\times5}{3^{2}}-2\log\frac{5^{2}}{2^{2}\times3}+3\log\frac{3^{4}}{2^{4}\times5}$$`,
              String.raw`$$=7\log\frac{10}{9}-2\log\frac{25}{12}+3\log\frac{81}{80}$$`,
              String.raw`$$=\log\frac{\left(\frac{10}{9}\right)^{7}\times\left(\frac{81}{80}\right)^{3}}{\left(\frac{25}{12}\right)^{2}}$$`,
              String.raw`$$=\log\left(\frac{2^{7}\cdot5^{7}}{3^{14}}\times\frac{3^{12}}{2^{12}\cdot5^{3}}\times\frac{2^{4}\cdot3^{2}}{5^{4}}\right)$$`,
              String.raw`$$=\log\left(2^{\,7-12+4}\cdot3^{\,-14+12+2}\cdot5^{\,7-3-4}\right)$$`,
              String.raw`$$=\log 2^{-1}=\log\frac{1}{2}$$`,
              String.raw`$$=-\log 2$$`,
            ],
            answer: String.raw`$-\log 2 \approx -0.30103$`,
          },
        },
        {
          label: "গ",
          question: String.raw`দেখাও যে, $$\frac{\log\sqrt{y^{3}}+y\log x-\frac{y}{x}\log(xz)}{\log(xy)-\log z}=\log_{y}\sqrt{y^{3}}$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{\log\sqrt{y^{3}}+y\log x-\frac{y}{x}\log(xz)}{\log(xy)-\log z}$$`,
              String.raw`$$=\frac{\log\sqrt{3^{3}}+3\log 2-\frac{3}{2}\log(2\times5)}{\log(2\times3)-\log 5}$$`,
              String.raw`$$=\frac{\frac{3}{2}\log 3+3\log 2-\frac{3}{2}\log 10}{\log 6-\log 5}$$`,
              String.raw`$$=\frac{\frac{3}{2}\left(\log 3+2\log 2-\log 10\right)}{\log\frac{6}{5}}$$`,
              String.raw`$$=\frac{\frac{3}{2}\log\frac{3\times4}{10}}{\log\frac{6}{5}}$$`,
              String.raw`$$=\frac{\frac{3}{2}\log\frac{6}{5}}{\log\frac{6}{5}}=\frac{3}{2}$$`,
              String.raw`$$\text{R.H.S.}=\log_{y}\sqrt{y^{3}}=\log_{3}3^{\frac{3}{2}}=\frac{3}{2}$$`,
              String.raw`$$\therefore\;\text{L.H.S.}=\text{R.H.S.}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// Chapter 9 "ত্রিকোণমিতিক অনুপাত". The theory the two exercises rest on
// runs from book page ১৭৪ to ১৮৩ (অনুশীলনী ৯.১) and from ১৮৬ to ১৯৩
// (অনুশীলনী ৯.২); the formulae below are those pages, nothing added.
// ─────────────────────────────────────────────────────────────────

const TRIG_PROVE = "প্রমাণ করো (৬ – ২০)";

const exercise91: Exercise = {
  id: "9.1",
  bnId: "অনুশীলনী ৯.১",
  title: "সূক্ষ্মকোণের ত্রিকোণমিতিক অনুপাত",
  bookPages: "১৮৪ – ১৮৬",
  formulas: [
    {
      title: "সূক্ষ্মকোণের ছয়টি ত্রিকোণমিতিক অনুপাত",
      formulas: [
        {
          statement: String.raw`$$\sin\theta=\frac{p}{h}$$`,
          note: String.raw`সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণ $\theta$ ধরি। এই কোণের বিপরীত বাহু $p$, সন্নিহিত বাহু $b$, আর সমকোণের বিপরীত বাহু অর্থাৎ অতিভুজ $h$।`,
        },
        {
          statement: String.raw`$$\cos\theta=\frac{b}{h}$$`,
        },
        {
          statement: String.raw`$$\tan\theta=\frac{p}{b}$$`,
        },
        {
          statement: String.raw`$$\operatorname{cosec}\theta=\frac{h}{p}$$`,
        },
        {
          statement: String.raw`$$\sec\theta=\frac{h}{b}$$`,
        },
        {
          statement: String.raw`$$\cot\theta=\frac{b}{p}$$`,
          note: String.raw`ছয়টি মানই কেবল $\theta$-এর উপর নির্ভর করে। ত্রিভুজটি বড় করলে প্রতিটি বাহু বদলায়, কিন্তু ত্রিভুজগুলো সদৃশ থাকে বলে প্রতিটি অনুপাত একই থাকে — এই ধ্রুবতার জন্যই এদের কোণের অনুপাত বলা হয়। আর $\sin\theta$ একটি একক প্রতীক, $\sin$ ও $\theta$-এর গুণফল নয়।`,
        },
        {
          statement: String.raw`$$h^{2}=p^{2}+b^{2}$$`,
          note: "পিথাগোরাসের সূত্র, আর এই অনুশীলনীতে ঢোকার পথও এটিই: একটি অনুপাত দেওয়া থাকলে দুটি বাহু জানা হয়ে যায়, এখান থেকে তৃতীয় বাহুটি মেলে, আর বাকি পাঁচটি অনুপাত ত্রিভুজ থেকে পড়েই নেওয়া যায়।",
        },
      ],
    },
    {
      title: "বিপরীত ও ভাগফল সম্পর্ক",
      formulas: [
        {
          statement: String.raw`$$\operatorname{cosec}\theta=\frac{1}{\sin\theta}$$`,
          note: String.raw`অর্থাৎ $\sin\theta\cdot\operatorname{cosec}\theta=1$।`,
        },
        {
          statement: String.raw`$$\sec\theta=\frac{1}{\cos\theta}$$`,
          note: String.raw`অর্থাৎ $\cos\theta\cdot\sec\theta=1$।`,
        },
        {
          statement: String.raw`$$\cot\theta=\frac{1}{\tan\theta}$$`,
          note: String.raw`অর্থাৎ $\tan\theta\cdot\cot\theta=1$।`,
        },
        {
          statement: String.raw`$$\tan\theta=\frac{\sin\theta}{\cos\theta}$$`,
          note: String.raw`$\frac{p}{b}$-এর লব ও হরকে অতিভুজ $h$ দিয়ে ভাগ করলেই এটি পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$\cot\theta=\frac{\cos\theta}{\sin\theta}$$`,
          note: "ফলে যেকোনো রাশিকে কেবল সাইন ও কোসাইনে নামিয়ে আনা যায় — নিচের প্রায় প্রতিটি প্রমাণের প্রথম ধাপ এটিই।",
        },
      ],
    },
    {
      title: "তিনটি অভেদ",
      formulas: [
        {
          statement: String.raw`$$\sin^{2}\theta+\cos^{2}\theta=1$$`,
          note: String.raw`পিথাগোরাসের সূত্রকে অতিভুজের বর্গ দিয়ে ভাগ করলেই এটি আসে। $\sin^{2}\theta=1-\cos^{2}\theta$ ও $\cos^{2}\theta=1-\sin^{2}\theta$ আকারেও সমান ব্যবহৃত হয়।`,
        },
        {
          statement: String.raw`$$\sec^{2}\theta-\tan^{2}\theta=1$$`,
          note: String.raw`অর্থাৎ, $\sec^{2}\theta=1+\tan^{2}\theta$ এবং $\tan^{2}\theta=\sec^{2}\theta-1$।`,
        },
        {
          statement: String.raw`$$\operatorname{cosec}^{2}\theta-\cot^{2}\theta=1$$`,
          note: String.raw`অর্থাৎ, $\operatorname{cosec}^{2}\theta=1+\cot^{2}\theta$ এবং $\cot^{2}\theta=\operatorname{cosec}^{2}\theta-1$।`,
        },
        {
          statement: String.raw`$$(\sin\theta)^{n}=\sin^{n}\theta$$`,
          note: String.raw`কেবল লিখনরীতি: পূর্ণসংখ্যা সূচক $n$-এর জন্য ঘাতটি অনুপাতের নামের উপর লেখা হয়, $\theta$-এর উপর নয়। বাকি অনুপাতগুলোর ক্ষেত্রেও একই নিয়ম।`,
        },
      ],
    },
    {
      title: "উৎপাদক আকারে অভেদগুলো",
      formulas: [
        {
          statement: String.raw`$$(\sec A+\tan A)(\sec A-\tan A)=1$$`,
          note: String.raw`$\sec^{2}A-\tan^{2}A=1$-কে দুই বর্গের অন্তর হিসেবে দেখা। বন্ধনী দুটি পরস্পরের বিপরীত, তাই একটির মান জানা থাকলে অন্যটি সঙ্গে সঙ্গেই পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$(\operatorname{cosec} A+\cot A)(\operatorname{cosec} A-\cot A)=1$$`,
          note: "তৃতীয় অভেদটিকেও একইভাবে উৎপাদকে বিশ্লেষণ করা।",
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      question: String.raw`নিচের গাণিতিক উক্তিগুলোর সত্য-মিথ্যা যাচাই করো। তোমার উত্তরের পক্ষে যুক্তি দাও।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\tan A$ এর মান সর্বদা $1$ এর চেয়ে কম।`,
          solution: {
            steps: [
              String.raw`উক্তিটি মিথ্যা।`,
              String.raw`$\tan A=\dfrac{p}{b}$, অর্থাৎ বিপরীত বাহু ও সন্নিহিত বাহুর অনুপাত। সূক্ষ্মকোণের ক্ষেত্রে $p$ ও $b$ যেকোনো ধনাত্মক মান নিতে পারে, তাই এই অনুপাতের উপরে কোনো সীমা নেই।`,
              String.raw`$p=b$ হলে $\tan A=1$, আর $p>b$ হলে $\tan A>1$।`,
              String.raw`$$\tan 45^{\circ}=1,\qquad \tan 60^{\circ}=\sqrt{3}>1$$`,
              String.raw`সুতরাং $\tan A$-এর মান সর্বদা $1$-এর চেয়ে কম নয়।`,
            ],
            answer: String.raw`মিথ্যা`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\cot A$ হলো $\cot$ ও $A$ এর গুণফল।`,
          solution: {
            steps: [
              String.raw`উক্তিটি মিথ্যা।`,
              String.raw`$\cot A$ একটি একক প্রতীক — এটি $A$ কোণের একটি নির্দিষ্ট ত্রিকোণমিতিক অনুপাতের নাম, দুটি রাশির গুণফল নয়।`,
              String.raw`$\cot$ একা কোনো সংখ্যা বা রাশি নয়; কোণ ছাড়া $\cot$ লিখলে তার কোনো মান হয় না।`,
              String.raw`গুণফল হলে $\cot A=\cot\times A$ হতো, অর্থাৎ $A$ দ্বিগুণ করলে মানও দ্বিগুণ হতো — কিন্তু তা হয় না।`,
            ],
            answer: String.raw`মিথ্যা`,
          },
        },
        {
          label: "গ",
          question: String.raw`$A$ এর কোন একটি মানের জন্য $\sec A=\dfrac{12}{5}$।`,
          solution: {
            steps: [
              String.raw`উক্তিটি সত্য।`,
              String.raw`সূক্ষ্মকোণের ক্ষেত্রে $\sec A=\dfrac{h}{b}$, আর অতিভুজ $h$ সমকোণী ত্রিভুজের বৃহত্তম বাহু।`,
              String.raw`তাই $h>b$, অর্থাৎ $\sec A>1$ — $\sec A$-এর মান $1$-এর চেয়ে বড় যেকোনো সংখ্যা হতে পারে।`,
              String.raw`$$\frac{12}{5}=2.4>1$$`,
              String.raw`$h=12$ ও $b=5$ ধরলে $p=\sqrt{(12)^{2}-(5)^{2}}=\sqrt{119}$, যা একটি বাস্তব ধনাত্মক সংখ্যা।`,
              String.raw`সুতরাং এমন একটি সূক্ষ্মকোণ $A$ আছে যার জন্য $\sec A=\dfrac{12}{5}$।`,
            ],
            answer: String.raw`সত্য`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$\cos$ হলো cotangent এর সংক্ষিপ্ত রূপ।`,
          solution: {
            steps: [
              String.raw`উক্তিটি মিথ্যা।`,
              String.raw`$\cos$ হলো cosine-এর সংক্ষিপ্ত রূপ, আর cotangent-এর সংক্ষিপ্ত রূপ $\cot$।`,
              String.raw`অনুপাত দুটি আলাদা: $\cos A=\dfrac{b}{h}$ কিন্তু $\cot A=\dfrac{b}{p}$।`,
            ],
            answer: String.raw`মিথ্যা`,
          },
        },
      ],
    },
    {
      id: 2,
      question: String.raw`$\sin A=\dfrac{3}{4}$ হলে, $A$ কোণের অন্যান্য ত্রিকোণমিতিক অনুপাত নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমকোণী ত্রিভুজে $A$ কোণের বিপরীত বাহু $p$, সন্নিহিত বাহু $b$ এবং অতিভুজ $h$।`,
          String.raw`$$\sin A=\frac{p}{h}=\frac{3}{4}$$`,
          String.raw`তাই $p=3k$ ও $h=4k$ ধরি, যেখানে $k>0$।`,
          String.raw`পিথাগোরাসের সূত্র থেকে পাই,`,
          String.raw`$$b^{2}=h^{2}-p^{2}=(4k)^{2}-(3k)^{2}=16k^{2}-9k^{2}=7k^{2}$$`,
          String.raw`$$\therefore\; b=\sqrt{7}\,k$$`,
          String.raw`এখন তিনটি বাহুই জানা, তাই বাকি অনুপাতগুলো ত্রিভুজ থেকেই পড়ে নেওয়া যায়।`,
          String.raw`$$\cos A=\frac{b}{h}=\frac{\sqrt{7}k}{4k}=\frac{\sqrt{7}}{4}$$`,
          String.raw`$$\tan A=\frac{p}{b}=\frac{3k}{\sqrt{7}k}=\frac{3}{\sqrt{7}}$$`,
          String.raw`$$\cot A=\frac{b}{p}=\frac{\sqrt{7}}{3}$$`,
          String.raw`$$\sec A=\frac{h}{b}=\frac{4}{\sqrt{7}}$$`,
          String.raw`$$\operatorname{cosec}A=\frac{h}{p}=\frac{4}{3}$$`,
        ],
        answer: String.raw`$\cos A=\dfrac{\sqrt{7}}{4}$, $\tan A=\dfrac{3}{\sqrt{7}}$, $\cot A=\dfrac{\sqrt{7}}{3}$, $\sec A=\dfrac{4}{\sqrt{7}}$, $\operatorname{cosec}A=\dfrac{4}{3}$`,
      },
    },
    {
      id: 3,
      question: String.raw`দেওয়া আছে, $15\cot A=8$; $\sin A$ ও $\sec A$ এর মান বের করো।`,
      solution: {
        steps: [
          String.raw`$$15\cot A=8$$`,
          String.raw`$$\therefore\;\cot A=\frac{8}{15}$$`,
          String.raw`মনে করি, সমকোণী ত্রিভুজে $A$ কোণের বিপরীত বাহু $p$, সন্নিহিত বাহু $b$ এবং অতিভুজ $h$।`,
          String.raw`$$\cot A=\frac{b}{p}=\frac{8}{15}$$`,
          String.raw`তাই $b=8k$ ও $p=15k$ ধরি, যেখানে $k>0$।`,
          String.raw`পিথাগোরাসের সূত্র থেকে পাই,`,
          String.raw`$$h^{2}=p^{2}+b^{2}=(15k)^{2}+(8k)^{2}=225k^{2}+64k^{2}=289k^{2}$$`,
          String.raw`$$\therefore\; h=17k$$`,
          String.raw`$$\sin A=\frac{p}{h}=\frac{15k}{17k}=\frac{15}{17}$$`,
          String.raw`$$\sec A=\frac{h}{b}=\frac{17k}{8k}=\frac{17}{8}$$`,
        ],
        answer: String.raw`$\sin A=\dfrac{15}{17}$, $\sec A=\dfrac{17}{8}$`,
      },
    },
    {
      id: 4,
      question: String.raw`$ABC$ সমকোণী ত্রিভুজের $\angle C$ সমকোণ, $AB=13$ সে.মি., $BC=12$ সে.মি. এবং $\angle ABC=\theta$ হলে $\sin\theta$, $\cos\theta$ ও $\tan\theta$ এর মান বের করো।`,
      solution: {
        steps: [
          String.raw`$\triangle ABC$-এ $\angle C=90^{\circ}$, তাই সমকোণের বিপরীত বাহু $AB$-ই অতিভুজ।`,
          String.raw`পিথাগোরাসের সূত্র থেকে পাই,`,
          String.raw`$$AC^{2}=AB^{2}-BC^{2}=(13)^{2}-(12)^{2}=169-144=25$$`,
          String.raw`$$\therefore\; AC=5$$`,
          String.raw`$\angle ABC=\theta$ কোণটির বিপরীত বাহু $AC$, সন্নিহিত বাহু $BC$ এবং অতিভুজ $AB$।`,
          String.raw`$$\sin\theta=\frac{AC}{AB}=\frac{5}{13}$$`,
          String.raw`$$\cos\theta=\frac{BC}{AB}=\frac{12}{13}$$`,
          String.raw`$$\tan\theta=\frac{AC}{BC}=\frac{5}{12}$$`,
        ],
        answer: String.raw`$\sin\theta=\dfrac{5}{13}$, $\cos\theta=\dfrac{12}{13}$, $\tan\theta=\dfrac{5}{12}$`,
      },
    },
    {
      id: 5,
      question: String.raw`$ABC$ সমকোণী ত্রিভুজের $\angle B$ কোণটি সমকোণ। $\tan A=\sqrt{3}$ হলে, $\sqrt{3}\sin A\cos A=\dfrac{3}{4}$ এর সত্যতা যাচাই করো।`,
      solution: {
        steps: [
          String.raw`$\triangle ABC$-এ $\angle B=90^{\circ}$, তাই $AC$ অতিভুজ; $\angle A$ কোণের বিপরীত বাহু $BC$ এবং সন্নিহিত বাহু $AB$।`,
          String.raw`$$\tan A=\frac{BC}{AB}=\sqrt{3}$$`,
          String.raw`তাই $BC=\sqrt{3}\,k$ ও $AB=k$ ধরি, যেখানে $k>0$।`,
          String.raw`$$AC^{2}=BC^{2}+AB^{2}=3k^{2}+k^{2}=4k^{2}$$`,
          String.raw`$$\therefore\; AC=2k$$`,
          String.raw`$$\sin A=\frac{BC}{AC}=\frac{\sqrt{3}k}{2k}=\frac{\sqrt{3}}{2}$$`,
          String.raw`$$\cos A=\frac{AB}{AC}=\frac{k}{2k}=\frac{1}{2}$$`,
          String.raw`এখন বামপক্ষ,`,
          String.raw`$$\sqrt{3}\sin A\cos A=\sqrt{3}\times\frac{\sqrt{3}}{2}\times\frac{1}{2}=\frac{3}{4}$$`,
          String.raw`$=$ ডানপক্ষ।`,
          String.raw`সুতরাং প্রদত্ত উক্তিটি সত্য।`,
        ],
        answer: String.raw`উক্তিটি সত্য`,
      },
    },
    // ─────────────── প্রমাণ করো (৬ – ২০) ───────────────
    {
      id: 6,
      group: TRIG_PROVE,
      question: String.raw`প্রমাণ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}$$`,
              String.raw`$$=\cos^{2}A+\sin^{2}A\qquad\left[\,\frac{1}{\sec A}=\cos A,\ \frac{1}{\operatorname{cosec}A}=\sin A\,\right]$$`,
              String.raw`$$=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{1}{\cos^{2}A}-\frac{1}{\cot^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{1}{\cos^{2}A}-\frac{1}{\cot^{2}A}$$`,
              String.raw`$$=\sec^{2}A-\tan^{2}A\qquad\left[\,\frac{1}{\cos A}=\sec A,\ \frac{1}{\cot A}=\tan A\,\right]$$`,
              String.raw`$$=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{1}{\sin^{2}A}-\frac{1}{\tan^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{1}{\sin^{2}A}-\frac{1}{\tan^{2}A}$$`,
              String.raw`$$=\operatorname{cosec}^{2}A-\cot^{2}A\qquad\left[\,\frac{1}{\sin A}=\operatorname{cosec}A,\ \frac{1}{\tan A}=\cot A\,\right]$$`,
              String.raw`$$=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
    {
      id: 7,
      group: TRIG_PROVE,
      question: String.raw`প্রমাণ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{\sin A}{\operatorname{cosec}A}+\frac{\cos A}{\sec A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{\sin A}{\operatorname{cosec}A}+\frac{\cos A}{\sec A}$$`,
              String.raw`$$=\sin A\cdot\frac{1}{\operatorname{cosec}A}+\cos A\cdot\frac{1}{\sec A}$$`,
              String.raw`$$=\sin A\cdot\sin A+\cos A\cdot\cos A$$`,
              String.raw`$$=\sin^{2}A+\cos^{2}A=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{\sec A}{\cos A}-\frac{\tan A}{\cot A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{\sec A}{\cos A}-\frac{\tan A}{\cot A}$$`,
              String.raw`$$=\sec A\cdot\frac{1}{\cos A}-\tan A\cdot\frac{1}{\cot A}$$`,
              String.raw`$$=\sec A\cdot\sec A-\tan A\cdot\tan A$$`,
              String.raw`$$=\sec^{2}A-\tan^{2}A=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{1}{1+\sin^{2}A}+\frac{1}{1+\operatorname{cosec}^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{1}{1+\sin^{2}A}+\frac{1}{1+\operatorname{cosec}^{2}A}$$`,
              String.raw`$$=\frac{1}{1+\sin^{2}A}+\frac{1}{1+\dfrac{1}{\sin^{2}A}}\qquad\left[\,\operatorname{cosec}A=\frac{1}{\sin A}\,\right]$$`,
              String.raw`$$=\frac{1}{1+\sin^{2}A}+\frac{\sin^{2}A}{\sin^{2}A+1}$$`,
              String.raw`$$=\frac{1+\sin^{2}A}{1+\sin^{2}A}$$`,
              String.raw`$$=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
    {
      id: 8,
      group: TRIG_PROVE,
      question: String.raw`প্রমাণ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{\tan A}{1-\cot A}+\frac{\cot A}{1-\tan A}=\sec A\cdot\operatorname{cosec}A+1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{\tan A}{1-\cot A}+\frac{\cot A}{1-\tan A}$$`,
              String.raw`$$=\frac{\tan A}{1-\dfrac{1}{\tan A}}+\frac{\dfrac{1}{\tan A}}{1-\tan A}\qquad\left[\,\cot A=\frac{1}{\tan A}\,\right]$$`,
              String.raw`$$=\frac{\tan^{2}A}{\tan A-1}+\frac{1}{\tan A(1-\tan A)}$$`,
              String.raw`$$=\frac{\tan^{2}A}{\tan A-1}-\frac{1}{\tan A(\tan A-1)}$$`,
              String.raw`$$=\frac{\tan^{3}A-1}{\tan A(\tan A-1)}$$`,
              String.raw`$$=\frac{(\tan A-1)\left(\tan^{2}A+\tan A+1\right)}{\tan A(\tan A-1)}\qquad\left[\,a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})\,\right]$$`,
              String.raw`$$=\frac{\tan^{2}A+\tan A+1}{\tan A}$$`,
              String.raw`$$=\tan A+\frac{1}{\tan A}+1$$`,
              String.raw`$$=\tan A+\cot A+1$$`,
              String.raw`$$=\frac{\sin A}{\cos A}+\frac{\cos A}{\sin A}+1$$`,
              String.raw`$$=\frac{\sin^{2}A+\cos^{2}A}{\sin A\cos A}+1$$`,
              String.raw`$$=\frac{1}{\sin A\cos A}+1$$`,
              String.raw`$$=\sec A\cdot\operatorname{cosec}A+1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{1}{1+\tan^{2}A}+\frac{1}{1+\cot^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`বামপক্ষ,`,
              String.raw`$$\frac{1}{1+\tan^{2}A}+\frac{1}{1+\cot^{2}A}$$`,
              String.raw`$$=\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}\qquad\left[\,1+\tan^{2}A=\sec^{2}A,\ 1+\cot^{2}A=\operatorname{cosec}^{2}A\,\right]$$`,
              String.raw`$$=\cos^{2}A+\sin^{2}A$$`,
              String.raw`$$=1$$`,
              String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
    {
      id: 9,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\cos A}{1-\tan A}+\frac{\sin A}{1-\cot A}=\sin A+\cos A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{\cos A}{1-\tan A}+\frac{\sin A}{1-\cot A}$$`,
          String.raw`$$=\frac{\cos A}{1-\dfrac{\sin A}{\cos A}}+\frac{\sin A}{1-\dfrac{\cos A}{\sin A}}\qquad\left[\,\tan A=\frac{\sin A}{\cos A},\ \cot A=\frac{\cos A}{\sin A}\,\right]$$`,
          String.raw`$$=\frac{\cos^{2}A}{\cos A-\sin A}+\frac{\sin^{2}A}{\sin A-\cos A}$$`,
          String.raw`$$=\frac{\cos^{2}A}{\cos A-\sin A}-\frac{\sin^{2}A}{\cos A-\sin A}$$`,
          String.raw`$$=\frac{\cos^{2}A-\sin^{2}A}{\cos A-\sin A}$$`,
          String.raw`$$=\frac{(\cos A+\sin A)(\cos A-\sin A)}{\cos A-\sin A}$$`,
          String.raw`$$=\sin A+\cos A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 10,
      group: TRIG_PROVE,
      question: String.raw`$$\tan A\sqrt{1-\sin^{2}A}=\sin A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\tan A\sqrt{1-\sin^{2}A}$$`,
          String.raw`$$=\tan A\sqrt{\cos^{2}A}\qquad\left[\,\sin^{2}A+\cos^{2}A=1\,\right]$$`,
          String.raw`$$=\tan A\cdot\cos A\qquad[\,A\ \text{সূক্ষ্মকোণ, তাই}\ \cos A>0\,]$$`,
          String.raw`$$=\frac{\sin A}{\cos A}\cdot\cos A$$`,
          String.raw`$$=\sin A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 11,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\sec A+\tan A}{\operatorname{cosec}A+\cot A}=\frac{\operatorname{cosec}A-\cot A}{\sec A-\tan A}$$`,
      solution: {
        steps: [
          String.raw`আমরা জানি,`,
          String.raw`$$\sec^{2}A-\tan^{2}A=1\quad\text{এবং}\quad\operatorname{cosec}^{2}A-\cot^{2}A=1$$`,
          String.raw`উৎপাদকে বিশ্লেষণ করে পাই,`,
          String.raw`$$(\sec A+\tan A)(\sec A-\tan A)=1\qquad\cdots(1)$$`,
          String.raw`$$(\operatorname{cosec}A+\cot A)(\operatorname{cosec}A-\cot A)=1\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$-এর ডানপক্ষ সমান, তাই বামপক্ষ দুটিও সমান।`,
          String.raw`$$(\sec A+\tan A)(\sec A-\tan A)=(\operatorname{cosec}A+\cot A)(\operatorname{cosec}A-\cot A)$$`,
          String.raw`উভয়পক্ষকে $(\operatorname{cosec}A+\cot A)(\sec A-\tan A)$ দ্বারা ভাগ করে পাই,`,
          String.raw`$$\frac{\sec A+\tan A}{\operatorname{cosec}A+\cot A}=\frac{\operatorname{cosec}A-\cot A}{\sec A-\tan A}$$`,
          String.raw`(প্রমাণিত)`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 12,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\operatorname{cosec}A}{\operatorname{cosec}A-1}+\frac{\operatorname{cosec}A}{\operatorname{cosec}A+1}=2\sec^{2}A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{\operatorname{cosec}A}{\operatorname{cosec}A-1}+\frac{\operatorname{cosec}A}{\operatorname{cosec}A+1}$$`,
          String.raw`$$=\operatorname{cosec}A\left[\frac{1}{\operatorname{cosec}A-1}+\frac{1}{\operatorname{cosec}A+1}\right]$$`,
          String.raw`$$=\operatorname{cosec}A\cdot\frac{(\operatorname{cosec}A+1)+(\operatorname{cosec}A-1)}{(\operatorname{cosec}A-1)(\operatorname{cosec}A+1)}$$`,
          String.raw`$$=\operatorname{cosec}A\cdot\frac{2\operatorname{cosec}A}{\operatorname{cosec}^{2}A-1}$$`,
          String.raw`$$=\frac{2\operatorname{cosec}^{2}A}{\cot^{2}A}\qquad\left[\,\operatorname{cosec}^{2}A-\cot^{2}A=1\,\right]$$`,
          String.raw`$$=\frac{2\cdot\dfrac{1}{\sin^{2}A}}{\dfrac{\cos^{2}A}{\sin^{2}A}}$$`,
          String.raw`$$=\frac{2}{\sin^{2}A}\times\frac{\sin^{2}A}{\cos^{2}A}$$`,
          String.raw`$$=\frac{2}{\cos^{2}A}=2\sec^{2}A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 13,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{1}{1+\sin A}+\frac{1}{1-\sin A}=2\sec^{2}A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{1}{1+\sin A}+\frac{1}{1-\sin A}$$`,
          String.raw`$$=\frac{(1-\sin A)+(1+\sin A)}{(1+\sin A)(1-\sin A)}$$`,
          String.raw`$$=\frac{2}{1-\sin^{2}A}$$`,
          String.raw`$$=\frac{2}{\cos^{2}A}\qquad\left[\,1-\sin^{2}A=\cos^{2}A\,\right]$$`,
          String.raw`$$=2\sec^{2}A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 14,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{1}{\operatorname{cosec}A-1}-\frac{1}{\operatorname{cosec}A+1}=2\tan^{2}A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{1}{\operatorname{cosec}A-1}-\frac{1}{\operatorname{cosec}A+1}$$`,
          String.raw`$$=\frac{(\operatorname{cosec}A+1)-(\operatorname{cosec}A-1)}{(\operatorname{cosec}A-1)(\operatorname{cosec}A+1)}$$`,
          String.raw`$$=\frac{2}{\operatorname{cosec}^{2}A-1}$$`,
          String.raw`$$=\frac{2}{\cot^{2}A}\qquad\left[\,\operatorname{cosec}^{2}A-\cot^{2}A=1\,\right]$$`,
          String.raw`$$=2\tan^{2}A\qquad\left[\,\frac{1}{\cot A}=\tan A\,\right]$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 15,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\sin A}{1-\cos A}+\frac{1-\cos A}{\sin A}=2\operatorname{cosec}A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{\sin A}{1-\cos A}+\frac{1-\cos A}{\sin A}$$`,
          String.raw`$$=\frac{\sin^{2}A+(1-\cos A)^{2}}{\sin A(1-\cos A)}$$`,
          String.raw`$$=\frac{\sin^{2}A+1-2\cos A+\cos^{2}A}{\sin A(1-\cos A)}$$`,
          String.raw`$$=\frac{\left(\sin^{2}A+\cos^{2}A\right)+1-2\cos A}{\sin A(1-\cos A)}$$`,
          String.raw`$$=\frac{1+1-2\cos A}{\sin A(1-\cos A)}$$`,
          String.raw`$$=\frac{2(1-\cos A)}{\sin A(1-\cos A)}$$`,
          String.raw`$$=\frac{2}{\sin A}=2\operatorname{cosec}A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 16,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\tan A}{\sec A+1}-\frac{\sec A-1}{\tan A}=0$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\frac{\tan A}{\sec A+1}-\frac{\sec A-1}{\tan A}$$`,
          String.raw`$$=\frac{\tan^{2}A-(\sec A-1)(\sec A+1)}{\tan A(\sec A+1)}$$`,
          String.raw`$$=\frac{\tan^{2}A-\left(\sec^{2}A-1\right)}{\tan A(\sec A+1)}$$`,
          String.raw`$$=\frac{\tan^{2}A-\tan^{2}A}{\tan A(\sec A+1)}\qquad\left[\,\sec^{2}A-1=\tan^{2}A\,\right]$$`,
          String.raw`$$=\frac{0}{\tan A(\sec A+1)}=0$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 17,
      group: TRIG_PROVE,
      question: String.raw`$$(\tan\theta+\sec\theta)^{2}=\frac{1+\sin\theta}{1-\sin\theta}$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$(\tan\theta+\sec\theta)^{2}$$`,
          String.raw`$$=\left(\frac{\sin\theta}{\cos\theta}+\frac{1}{\cos\theta}\right)^{2}$$`,
          String.raw`$$=\left(\frac{1+\sin\theta}{\cos\theta}\right)^{2}$$`,
          String.raw`$$=\frac{(1+\sin\theta)^{2}}{\cos^{2}\theta}$$`,
          String.raw`$$=\frac{(1+\sin\theta)^{2}}{1-\sin^{2}\theta}\qquad\left[\,\cos^{2}\theta=1-\sin^{2}\theta\,\right]$$`,
          String.raw`$$=\frac{(1+\sin\theta)^{2}}{(1+\sin\theta)(1-\sin\theta)}$$`,
          String.raw`$$=\frac{1+\sin\theta}{1-\sin\theta}$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 18,
      group: TRIG_PROVE,
      question: String.raw`$$\frac{\cot A+\tan B}{\cot B+\tan A}=\cot A\cdot\tan B$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষের হরটিকে $\cot A$ ও $\tan B$-এর মাধ্যমে লিখি।`,
          String.raw`$$\cot B+\tan A=\frac{1}{\tan B}+\frac{1}{\cot A}\qquad\left[\,\cot B=\frac{1}{\tan B},\ \tan A=\frac{1}{\cot A}\,\right]$$`,
          String.raw`$$=\frac{\cot A+\tan B}{\tan B\cdot\cot A}$$`,
          String.raw`সুতরাং বামপক্ষ,`,
          String.raw`$$\frac{\cot A+\tan B}{\cot B+\tan A}=\frac{\cot A+\tan B}{\dfrac{\cot A+\tan B}{\tan B\cdot\cot A}}$$`,
          String.raw`$$=(\cot A+\tan B)\times\frac{\tan B\cdot\cot A}{\cot A+\tan B}$$`,
          String.raw`$$=\cot A\cdot\tan B$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 19,
      group: TRIG_PROVE,
      question: String.raw`$$\sqrt{\frac{1-\sin A}{1+\sin A}}=\sec A-\tan A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\sqrt{\frac{1-\sin A}{1+\sin A}}$$`,
          String.raw`মূলচিহ্নের ভিতরে লব ও হরকে $(1-\sin A)$ দ্বারা গুণ করে পাই,`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)(1-\sin A)}{(1+\sin A)(1-\sin A)}}$$`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)^{2}}{1-\sin^{2}A}}$$`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)^{2}}{\cos^{2}A}}$$`,
          String.raw`$$=\frac{1-\sin A}{\cos A}\qquad[\,A\ \text{সূক্ষ্মকোণ, তাই}\ \cos A>0\ \text{ও}\ 1-\sin A>0\,]$$`,
          String.raw`$$=\frac{1}{\cos A}-\frac{\sin A}{\cos A}$$`,
          String.raw`$$=\sec A-\tan A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 20,
      group: TRIG_PROVE,
      question: String.raw`$$\sqrt{\frac{\sec A+1}{\sec A-1}}=\cot A+\operatorname{cosec}A$$`,
      solution: {
        steps: [
          String.raw`বামপক্ষ,`,
          String.raw`$$\sqrt{\frac{\sec A+1}{\sec A-1}}$$`,
          String.raw`মূলচিহ্নের ভিতরে লব ও হরকে $(\sec A+1)$ দ্বারা গুণ করে পাই,`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)^{2}}{(\sec A-1)(\sec A+1)}}$$`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)^{2}}{\sec^{2}A-1}}$$`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)^{2}}{\tan^{2}A}}\qquad\left[\,\sec^{2}A-1=\tan^{2}A\,\right]$$`,
          String.raw`$$=\frac{\sec A+1}{\tan A}\qquad[\,A\ \text{সূক্ষ্মকোণ, তাই}\ \tan A>0\,]$$`,
          String.raw`$$=\frac{\sec A}{\tan A}+\frac{1}{\tan A}$$`,
          String.raw`$$=\frac{1}{\cos A}\times\frac{\cos A}{\sin A}+\cot A$$`,
          String.raw`$$=\frac{1}{\sin A}+\cot A$$`,
          String.raw`$$=\cot A+\operatorname{cosec}A$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 21,
      question: String.raw`$\cos A+\sin A=\sqrt{2}\cos A$ হলে, প্রমাণ করো যে, $\cos A-\sin A=\sqrt{2}\sin A$।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\cos A+\sin A=\sqrt{2}\cos A$$`,
          String.raw`$$\text{or, }\sin A=\sqrt{2}\cos A-\cos A$$`,
          String.raw`$$\therefore\;\sin A=(\sqrt{2}-1)\cos A\qquad\cdots(1)$$`,
          String.raw`এখন বামপক্ষ,`,
          String.raw`$$\cos A-\sin A$$`,
          String.raw`$$=\cos A-(\sqrt{2}-1)\cos A\qquad[\,(1)\ \text{হতে}\,]$$`,
          String.raw`$$=\cos A\left[1-(\sqrt{2}-1)\right]$$`,
          String.raw`$$=(2-\sqrt{2})\cos A$$`,
          String.raw`$$=\sqrt{2}(\sqrt{2}-1)\cos A\qquad\left[\,2-\sqrt{2}=\sqrt{2}\cdot\sqrt{2}-\sqrt{2}=\sqrt{2}(\sqrt{2}-1)\,\right]$$`,
          String.raw`$$=\sqrt{2}\sin A\qquad[\,(1)\ \text{হতে}\,]$$`,
          String.raw`$=$ ডানপক্ষ (প্রমাণিত)।`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 22,
      question: String.raw`যদি $\tan A=\dfrac{1}{\sqrt{3}}$ হয়, তবে $\dfrac{\operatorname{cosec}^{2}A-\sec^{2}A}{\operatorname{cosec}^{2}A+\sec^{2}A}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $\tan A=\dfrac{1}{\sqrt{3}}$, সুতরাং $\cot A=\sqrt{3}$।`,
          String.raw`$$\operatorname{cosec}^{2}A=1+\cot^{2}A=1+(\sqrt{3})^{2}=1+3=4$$`,
          String.raw`$$\sec^{2}A=1+\tan^{2}A=1+\left(\frac{1}{\sqrt{3}}\right)^{2}=1+\frac{1}{3}=\frac{4}{3}$$`,
          String.raw`সুতরাং নির্ণেয় রাশি,`,
          String.raw`$$\frac{\operatorname{cosec}^{2}A-\sec^{2}A}{\operatorname{cosec}^{2}A+\sec^{2}A}=\frac{4-\dfrac{4}{3}}{4+\dfrac{4}{3}}$$`,
          String.raw`$$=\frac{\dfrac{12-4}{3}}{\dfrac{12+4}{3}}$$`,
          String.raw`$$=\frac{8}{16}=\frac{1}{2}$$`,
        ],
        answer: String.raw`$\dfrac{1}{2}$`,
      },
    },
    {
      id: 23,
      question: String.raw`$\operatorname{cosec}A-\cot A=\dfrac{4}{3}$ হলে, $\operatorname{cosec}A+\cot A$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`আমরা জানি,`,
          String.raw`$$\operatorname{cosec}^{2}A-\cot^{2}A=1$$`,
          String.raw`$$\text{or, }(\operatorname{cosec}A+\cot A)(\operatorname{cosec}A-\cot A)=1$$`,
          String.raw`দেওয়া আছে, $\operatorname{cosec}A-\cot A=\dfrac{4}{3}$; বসিয়ে পাই,`,
          String.raw`$$\frac{4}{3}\left(\operatorname{cosec}A+\cot A\right)=1$$`,
          String.raw`$$\therefore\;\operatorname{cosec}A+\cot A=\frac{3}{4}$$`,
        ],
        answer: String.raw`$\dfrac{3}{4}$`,
      },
    },
    {
      id: 24,
      question: String.raw`$\cot A=\dfrac{b}{a}$ হলে, $\dfrac{a\sin A-b\cos A}{a\sin A+b\cos A}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $\cot A=\dfrac{b}{a}$।`,
          String.raw`নির্ণেয় রাশির লব ও হরকে $\sin A$ দ্বারা ভাগ করে পাই,`,
          String.raw`$$\frac{a\sin A-b\cos A}{a\sin A+b\cos A}=\frac{a-b\cdot\dfrac{\cos A}{\sin A}}{a+b\cdot\dfrac{\cos A}{\sin A}}$$`,
          String.raw`$$=\frac{a-b\cot A}{a+b\cot A}\qquad\left[\,\cot A=\frac{\cos A}{\sin A}\,\right]$$`,
          String.raw`$$=\frac{a-b\cdot\dfrac{b}{a}}{a+b\cdot\dfrac{b}{a}}$$`,
          String.raw`$$=\frac{\dfrac{a^{2}-b^{2}}{a}}{\dfrac{a^{2}+b^{2}}{a}}$$`,
          String.raw`$$=\frac{a^{2}-b^{2}}{a^{2}+b^{2}}$$`,
        ],
        answer: String.raw`$\dfrac{a^{2}-b^{2}}{a^{2}+b^{2}}$`,
      },
    },
    {
      id: 25,
      question: String.raw`$\operatorname{cosec}A-\cot A=x$ এবং $\operatorname{cosec}A+\cot A=y$`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\sin\theta=\dfrac{5}{13}$ হলে, $\sec\theta$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $\sin\theta=\dfrac{5}{13}$।`,
              String.raw`আমরা জানি, $\sin^{2}\theta+\cos^{2}\theta=1$।`,
              String.raw`$$\cos^{2}\theta=1-\sin^{2}\theta=1-\left(\frac{5}{13}\right)^{2}$$`,
              String.raw`$$=1-\frac{25}{169}=\frac{169-25}{169}=\frac{144}{169}$$`,
              String.raw`$$\therefore\;\cos\theta=\frac{12}{13}\qquad[\,\theta\ \text{সূক্ষ্মকোণ, তাই}\ \cos\theta>0\,]$$`,
              String.raw`$$\therefore\;\sec\theta=\frac{1}{\cos\theta}=\frac{13}{12}$$`,
            ],
            answer: String.raw`$\sec\theta=\dfrac{13}{12}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $\sec A=\dfrac{1+x^{2}}{1-x^{2}}$।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $\operatorname{cosec}A-\cot A=x$ এবং $\operatorname{cosec}A+\cot A=y$।`,
              String.raw`আমরা জানি,`,
              String.raw`$$\operatorname{cosec}^{2}A-\cot^{2}A=1$$`,
              String.raw`$$\text{or, }(\operatorname{cosec}A-\cot A)(\operatorname{cosec}A+\cot A)=1$$`,
              String.raw`$$\text{or, } xy=1$$`,
              String.raw`$$\therefore\; y=\frac{1}{x}\qquad\cdots(1)$$`,
              String.raw`এখন দুটি সমীকরণ যোগ ও বিয়োগ করে পাই,`,
              String.raw`$$2\operatorname{cosec}A=x+y=x+\frac{1}{x}=\frac{x^{2}+1}{x}$$`,
              String.raw`$$\therefore\;\operatorname{cosec}A=\frac{x^{2}+1}{2x}$$`,
              String.raw`$$2\cot A=y-x=\frac{1}{x}-x=\frac{1-x^{2}}{x}$$`,
              String.raw`$$\therefore\;\cot A=\frac{1-x^{2}}{2x}$$`,
              String.raw`সুতরাং,`,
              String.raw`$$\sec A=\frac{1}{\cos A}=\frac{\operatorname{cosec}A}{\cot A}\qquad\left[\,\frac{\operatorname{cosec}A}{\cot A}=\frac{1}{\sin A}\times\frac{\sin A}{\cos A}=\frac{1}{\cos A}\,\right]$$`,
              String.raw`$$=\frac{\dfrac{x^{2}+1}{2x}}{\dfrac{1-x^{2}}{2x}}$$`,
              String.raw`$$=\frac{1+x^{2}}{1-x^{2}}$$`,
              String.raw`(দেখানো হলো)`,
            ],
            answer: String.raw`$\sec A=\dfrac{1+x^{2}}{1-x^{2}}$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\dfrac{x}{y}=7-4\sqrt{3}$ হলে, $A$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`(খ) থেকে পাই, $xy=1$, অর্থাৎ $y=\dfrac{1}{x}$।`,
              String.raw`$$\therefore\;\frac{x}{y}=\frac{x}{\dfrac{1}{x}}=x^{2}$$`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$x^{2}=7-4\sqrt{3}$$`,
              String.raw`$$\text{or, } x^{2}=4-4\sqrt{3}+3$$`,
              String.raw`$$\text{or, } x^{2}=(2)^{2}-2\cdot 2\cdot\sqrt{3}+(\sqrt{3})^{2}$$`,
              String.raw`$$\text{or, } x^{2}=(2-\sqrt{3})^{2}$$`,
              String.raw`$$\therefore\; x=2-\sqrt{3}\qquad[\,x>0\,]$$`,
              String.raw`(খ) থেকে পাই,`,
              String.raw`$$\cot A=\frac{1-x^{2}}{2x}=\frac{1-(7-4\sqrt{3})}{2(2-\sqrt{3})}$$`,
              String.raw`$$=\frac{4\sqrt{3}-6}{2(2-\sqrt{3})}=\frac{2(2\sqrt{3}-3)}{2(2-\sqrt{3})}=\frac{2\sqrt{3}-3}{2-\sqrt{3}}$$`,
              String.raw`লব ও হরকে $(2+\sqrt{3})$ দ্বারা গুণ করে পাই,`,
              String.raw`$$\cot A=\frac{(2\sqrt{3}-3)(2+\sqrt{3})}{(2-\sqrt{3})(2+\sqrt{3})}$$`,
              String.raw`$$=\frac{4\sqrt{3}+2\cdot 3-6-3\sqrt{3}}{4-3}$$`,
              String.raw`$$=\frac{4\sqrt{3}+6-6-3\sqrt{3}}{1}=\sqrt{3}$$`,
              String.raw`$$\therefore\;\cot A=\sqrt{3}=\cot 30^{\circ}$$`,
              String.raw`$$\therefore\; A=30^{\circ}$$`,
            ],
            answer: String.raw`$A=30^{\circ}$`,
          },
        },
      ],
    },
  ],
};

const exercise92: Exercise = {
  id: "9.2",
  bnId: "অনুশীলনী ৯.২",
  title: "বিশেষ কোণের ত্রিকোণমিতিক অনুপাত",
  bookPages: "১৯৪ – ১৯৫",
  formulas: [
    {
      title: "৩০° ও ৬০° কোণের অনুপাত",
      formulas: [
        {
          statement: String.raw`$$\sin 30^{\circ}=\frac{1}{2}=\cos 60^{\circ}$$`,
          note: String.raw`$2a$ বাহুবিশিষ্ট সমবাহু ত্রিভুজকে অর্ধেক করে পাওয়া যায়: অর্ধেকটির বাহুগুলো $a$, $\sqrt{3}a$ ও $2a$। $30^{\circ}$ ও $60^{\circ}$ পরস্পর পূরক বলে একটির প্রতিটি অনুপাত অন্যটির সহ-অনুপাতের সমান।`,
        },
        {
          statement: String.raw`$$\cos 30^{\circ}=\frac{\sqrt{3}}{2}=\sin 60^{\circ}$$`,
        },
        {
          statement: String.raw`$$\tan 30^{\circ}=\frac{1}{\sqrt{3}}=\cot 60^{\circ}$$`,
        },
        {
          statement: String.raw`$$\cot 30^{\circ}=\sqrt{3}=\tan 60^{\circ}$$`,
        },
        {
          statement: String.raw`$$\sec 30^{\circ}=\frac{2}{\sqrt{3}}=\operatorname{cosec} 60^{\circ}$$`,
        },
        {
          statement: String.raw`$$\operatorname{cosec} 30^{\circ}=2=\sec 60^{\circ}$$`,
        },
      ],
    },
    {
      title: "৪৫° কোণের অনুপাত",
      formulas: [
        {
          statement: String.raw`$$\sin 45^{\circ}=\cos 45^{\circ}=\frac{1}{\sqrt{2}}$$`,
          note: String.raw`যে সমকোণী ত্রিভুজের সূক্ষ্মকোণ দুটিই $45^{\circ}$, তার সমান বাহু দুটি $a$, $a$ এবং অতিভুজ $\sqrt{2}a$।`,
        },
        {
          statement: String.raw`$$\tan 45^{\circ}=\cot 45^{\circ}=1$$`,
        },
        {
          statement: String.raw`$$\sec 45^{\circ}=\operatorname{cosec} 45^{\circ}=\sqrt{2}$$`,
        },
      ],
    },
    {
      title: "০° ও ৯০° কোণের অনুপাত",
      formulas: [
        {
          statement: String.raw`$$\sin 0^{\circ}=0,\qquad \cos 0^{\circ}=1$$`,
          note: String.raw`কোণটি $0^{\circ}$-এর দিকে ছোট হতে থাকলে বিপরীত বাহু শূন্যের কোঠায় নেমে আসে এবং অতিভুজ সন্নিহিত বাহুর সঙ্গে মিশে যায়। উপরের সম্পর্কগুলো যেন বজায় থাকে, সেভাবেই মানগুলো সংজ্ঞায়িত করা হয়েছে।`,
        },
        {
          statement: String.raw`$$\tan 0^{\circ}=0,\qquad \sec 0^{\circ}=1$$`,
        },
        {
          statement: String.raw`$$\sin 90^{\circ}=1,\qquad \cos 90^{\circ}=0$$`,
          note: "কোণটি $90^{\circ}$-এর দিকে বাড়তে থাকলে অতিভুজ বিপরীত বাহুর সঙ্গে মিশে যায় এবং সন্নিহিত বাহু শূন্যের কোঠায় নেমে আসে।",
        },
        {
          statement: String.raw`$$\cot 90^{\circ}=0,\qquad \operatorname{cosec} 90^{\circ}=1$$`,
        },
        {
          statement: String.raw`$$\cot 0^{\circ},\ \operatorname{cosec} 0^{\circ}$$`,
          note: String.raw`দুটিই অসংজ্ঞায়িত, কারণ দুটিতেই $\sin 0^{\circ}=0$ দিয়ে ভাগ করতে হতো।`,
        },
        {
          statement: String.raw`$$\tan 90^{\circ},\ \sec 90^{\circ}$$`,
          note: String.raw`দুটিই অসংজ্ঞায়িত, কারণ দুটিতেই $\cos 90^{\circ}=0$ দিয়ে ভাগ করতে হতো।`,
        },
      ],
    },
    {
      title: "পুরো ছকটি দুই লাইনে",
      formulas: [
        {
          statement: String.raw`$$\sin\theta=\sqrt{\frac{n}{4}},\qquad n=0,1,2,3,4$$`,
          note: String.raw`$n$-কে এই ক্রমে নিলে পাওয়া যায় $\sin 0^{\circ},\sin 30^{\circ},\sin 45^{\circ},\sin 60^{\circ},\sin 90^{\circ}$। একই তালিকা উল্টো দিক থেকে, অর্থাৎ $n=4,3,2,1,0$ নিলে পাওয়া যায় পাঁচটি কোসাইনের মান।`,
        },
        {
          statement: String.raw`$$\tan\theta=\sqrt{\frac{n}{3}},\qquad n=0,1,3,9$$`,
          note: String.raw`এতে পাওয়া যায় $\tan 0^{\circ},\tan 30^{\circ},\tan 45^{\circ},\tan 60^{\circ}$; উল্টো ক্রমে $n=9,3,1,0$ নিলে পাওয়া যায় $\cot 30^{\circ},\cot 45^{\circ},\cot 60^{\circ},\cot 90^{\circ}$। বাদ পড়া দুটি — $\tan 90^{\circ}$ ও $\cot 0^{\circ}$ — অসংজ্ঞায়িত।`,
        },
      ],
    },
    {
      title: "পূরক কোণ",
      formulas: [
        {
          statement: String.raw`$$\sin(90^{\circ}-\theta)=\cos\theta$$`,
          note: String.raw`দুটি সূক্ষ্মকোণের সমষ্টি $90^{\circ}$ হলে এদের পরস্পরের পূরক কোণ বলে, আর সমকোণী ত্রিভুজের সূক্ষ্মকোণ দুটি সর্বদাই পূরক। একটির যেটি বিপরীত বাহু, অন্যটির সেটিই সন্নিহিত বাহু — পুরো তালিকাটি এই কথারই ফল।`,
        },
        {
          statement: String.raw`$$\cos(90^{\circ}-\theta)=\sin\theta$$`,
        },
        {
          statement: String.raw`$$\tan(90^{\circ}-\theta)=\cot\theta$$`,
        },
        {
          statement: String.raw`$$\cot(90^{\circ}-\theta)=\tan\theta$$`,
        },
        {
          statement: String.raw`$$\sec(90^{\circ}-\theta)=\operatorname{cosec}\theta$$`,
        },
        {
          statement: String.raw`$$\operatorname{cosec}(90^{\circ}-\theta)=\sec\theta$$`,
        },
      ],
    },
    {
      title: "অনুশীলনী ৯.১ থেকে যা এখানেও খাটে",
      formulas: [
        {
          statement: String.raw`$$\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad \cot\theta=\frac{\cos\theta}{\sin\theta}$$`,
        },
        {
          statement: String.raw`$$\operatorname{cosec}\theta=\frac{1}{\sin\theta},\quad \sec\theta=\frac{1}{\cos\theta},\quad \cot\theta=\frac{1}{\tan\theta}$$`,
        },
        {
          statement: String.raw`$$\sin^{2}\theta+\cos^{2}\theta=1$$`,
        },
        {
          statement: String.raw`$$\sec^{2}\theta=1+\tan^{2}\theta$$`,
        },
        {
          statement: String.raw`$$\operatorname{cosec}^{2}\theta=1+\cot^{2}\theta$$`,
          note: "অভেদগুলো এখানে বদলায় না; কেবল কোণগুলোর মান এখন জানা। তাই দুইভাবেই এগোনো যায় — আগে সরল করে পরে মান বসাও, অথবা আগে মান বসিয়ে পরে সরল করো।",
        },
      ],
    },
    {
      title: "কোণের মান নির্ণয়",
      formulas: [
        {
          statement: String.raw`$$\sin A=\sin B\ \Longrightarrow\ A=B$$`,
          note: String.raw`$A$ ও $B$ সূক্ষ্মকোণ হলে: $0^{\circ}$ থেকে $90^{\circ}$-এর মধ্যে একটি অনুপাত তার প্রতিটি মান কেবল একটিমাত্র কোণেই নেয়। বাকি পাঁচটি অনুপাতের ক্ষেত্রেও একই কথা। কোণ নির্ণয়ের প্রতিটি সমস্যার শেষ ধাপ এটিই — সমীকরণটিকে “অজানা কোণের অনুপাত = জানা কোণের একই অনুপাত” আকারে এনে কোণ দুটি সমান করো।`,
        },
      ],
    },
  ],
  problems: [],
};

const DIST_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const DIST_SOLVE = "সমস্যা (৫ – ১৪)";

const exercise10: Exercise = {
  id: "10",
  bnId: "অনুশীলনী ১০",
  title: "উন্নতি ও অবনতি কোণ",
  bookPages: "২০২ – ২০৩",
  formulas: [
    {
      title: "যে কথাগুলো চিত্রে বসাতে হয়",
      formulas: [
        {
          statement: "ভূ-রেখা",
          note: "ভূমি তলে অবস্থিত যেকোনো সরলরেখা। একে শয়নরেখাও বলা হয়। প্রতিটি সমস্যায় এটিই ত্রিভুজের ভূমি।",
        },
        {
          statement: "ঊর্ধ্বরেখা",
          note: "ভূমি তলের উপর লম্ব যেকোনো সরলরেখা; একে উল্লম্ব রেখাও বলে। গাছ, মিনার, স্তম্ভ, দেওয়াল — সবই ঊর্ধ্বরেখা বরাবর, তাই ভূমির সাথে এদের কোণ সব সময় সমকোণ।",
        },
        {
          statement: "উল্লম্বতল",
          note: "পরস্পরচ্ছেদী একটি ভূ-রেখা ও একটি ঊর্ধ্বরেখা যে তল নির্দিষ্ট করে। এ অধ্যায়ের প্রতিটি চিত্র একটিমাত্র উল্লম্বতলে আঁকা।",
        },
        {
          statement: "উন্নতি কোণ (angle of elevation)",
          note: String.raw`ভূতলের উপরের কোনো বিন্দু ভূ-রেখার সাথে যে কোণ উৎপন্ন করে। চিত্রে $O$ বিন্দুর সাপেক্ষে $P$ বিন্দুর উন্নতি কোণ $\angle POB$ — কোণটি মাপা হয় $P$ যে দিকে আছে, ভূ-রেখার সেই দিকের রশ্মি থেকে।`,
        },
        {
          statement: "অবনতি কোণ (angle of depression)",
          note: String.raw`ভূতলের সমান্তরাল রেখার নিচের কোনো বিন্দু ঐ রেখার সাথে যে কোণ উৎপন্ন করে। $O$ বিন্দুর সাপেক্ষে $Q$ বিন্দুর অবনতি কোণ $\angle QOB$।`,
        },
        {
          statement: "অবনতি কোণ = তার একান্তর উন্নতি কোণ",
          note: "শীর্ষবিন্দুতে টানা ভূ-রেখার সমান্তরাল রেখাটি ভূ-রেখার সাথে একজোড়া একান্তর কোণ তৈরি করে। তাই উপর থেকে নিচের দিকের অবনতি কোণ আর নিচ থেকে উপরের দিকের উন্নতি কোণ সব সময় সমান — অবনতি কোণের সমস্যা এভাবেই উন্নতি কোণের সমস্যায় নেমে আসে।",
        },
      ],
    },
    {
      title: "সমকোণী ত্রিভুজে যে তিনটি অনুপাত লাগে",
      formulas: [
        {
          statement: String.raw`$$\sin\theta=\frac{AB}{AC}$$`,
          note: String.raw`সমকোণী $\triangle ABC$-এ $\angle B$ সমকোণ ও $\angle ACB=\theta$ হলে $AB$ হলো লম্ব, $BC$ ভূমি এবং $AC$ অতিভুজ। কোন অনুপাতটি নিতে হবে তা ঠিক করে দেয় প্রশ্নটি: যে তিনটি বাহুর দুইটি প্রশ্নে আছে, সেই দুইটির অনুপাতই লিখতে হয়।`,
        },
        {
          statement: String.raw`$$\cos\theta=\frac{BC}{AC}$$`,
          note: String.raw`অতিভুজ ও ভূমি নিয়ে কাজ — মই বা তারের দৈর্ঘ্য দেওয়া থাকলে সাধারণত এটিই লাগে।`,
        },
        {
          statement: String.raw`$$\tan\theta=\frac{AB}{BC}$$`,
          note: String.raw`উচ্চতা ও ভূতলের দূরত্ব — এ অধ্যায়ের সবচেয়ে বেশি ব্যবহৃত অনুপাত, কারণ অতিভুজ সাধারণত মাপা যায় না।`,
        },
      ],
    },
    {
      title: "বিশেষ কোণের মান",
      formulas: [
        {
          statement: String.raw`$$\sin 30^{\circ}=\frac{1}{2},\qquad \cos 30^{\circ}=\frac{\sqrt{3}}{2},\qquad \tan 30^{\circ}=\frac{1}{\sqrt{3}}$$`,
          note: String.raw`এ অধ্যায়ের প্রতিটি কোণ $30^{\circ}$, $45^{\circ}$ অথবা $60^{\circ}$ — তাই মানগুলো মুখস্থ থাকলেই সমীকরণ এক লাইনে দাঁড়িয়ে যায়।`,
        },
        {
          statement: String.raw`$$\sin 45^{\circ}=\cos 45^{\circ}=\frac{1}{\sqrt{2}},\qquad \tan 45^{\circ}=1$$`,
        },
        {
          statement: String.raw`$$\sin 60^{\circ}=\frac{\sqrt{3}}{2},\qquad \cos 60^{\circ}=\frac{1}{2},\qquad \tan 60^{\circ}=\sqrt{3}$$`,
        },
        {
          statement: String.raw`$$\frac{1}{\sqrt{3}}=\frac{\sqrt{3}}{3},\qquad \frac{1}{\sqrt{2}}=\frac{\sqrt{2}}{2}$$`,
          note: "বই প্রতিবার হর থেকে মূলদ চিহ্ন সরিয়ে নেয় — হর ও লবকে একই মূলদ দিয়ে গুণ করে। দশমিকে নামানোর ঠিক আগের ধাপটি এটিই।",
        },
      ],
    },
    {
      title: "চিত্র আঁকার নিয়ম",
      formulas: [
        {
          statement: "চিত্র আবশ্যক",
          note: "বইয়ের নিজের নির্দেশ: “এ অধ্যায়ে সমস্যা সমাধানের ক্ষেত্রে আনুমানিক সঠিক চিত্র আবশ্যক।” চিত্র ছাড়া কোন বাহুটি লম্ব আর কোনটি অতিভুজ তা ঠিক করা যায় না, আর সেটিই এ অধ্যায়ের একমাত্র সিদ্ধান্ত।",
        },
        {
          statement: "৩০° কোণ → ভূমি > লম্ব",
          note: "কোণ ছোট, তাই ত্রিভুজটি চ্যাপ্টা — নিচের প্রতিটি চিত্র এভাবেই আঁকা হয়েছে।",
        },
        {
          statement: "৪৫° কোণ → ভূমি = লম্ব",
        },
        {
          statement: "৬০° কোণ → ভূমি < লম্ব",
          note: "কোণ বড়, তাই ত্রিভুজটি খাড়া। ৩০° ও ৬০°-এর চিত্র দুইটি তাই দেখতে একে অপরের উল্টো।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book pages ১৯৮-১৯৯.
    {
      id: 1,
      question: String.raw`একটি টাওয়ারের পাদদেশ থেকে $75$ মিটার দূরে ভূতলস্থ কোনো বিন্দুতে টাওয়ারের শীর্ষের উন্নতি $30^{\circ}$ হলে, টাওয়ারের উচ্চতা নির্ণয় করো।`,
      figure: "10-ex1",
      solution: {
        steps: [
          String.raw`মনে করি, টাওয়ারের উচ্চতা $AB=h$ মিটার, টাওয়ারের পাদদেশ থেকে $BC=75$ মিটার দূরে ভূতলস্থ $C$ বিন্দুতে টাওয়ারের শীর্ষ $A$ বিন্দুর উন্নতি $\angle ACB=30^{\circ}$।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\tan 30^{\circ}=\frac{h}{75}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{h}{75}$$`,
          String.raw`$$\text{or, }\sqrt{3}\,h=75$$`,
          String.raw`$$\text{or, } h=\frac{75}{\sqrt{3}}=\frac{75\sqrt{3}}{3}=25\sqrt{3}$$`,
          String.raw`[হর ও লবকে $\sqrt{3}$ দ্বারা গুণ করে]`,
          String.raw`$$\therefore\; h=43.301$$`,
          String.raw`টাওয়ারের উচ্চতা $43.30$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$43.30$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ২ — book page ১৯৯.
    {
      id: 2,
      question: String.raw`একটি গাছের উচ্চতা $105$ মিটার। গাছটির শীর্ষ থেকে ভূমির কোনো বিন্দুতে উন্নতি কোণ $60^{\circ}$ তৈরি করলে, গাছটির গোড়া থেকে ভূতলস্থ বিন্দুটির দূরত্ব নির্ণয় করো।`,
      figure: "10-ex2",
      solution: {
        steps: [
          String.raw`মনে করি, গাছের গোড়া থেকে ভূতলস্থ বিন্দুটির দূরত্ব $BC=x$ মিটার, গাছের উচ্চতা $AB=105$ মিটার এবং $C$ বিন্দুতে গাছটির শীর্ষ $A$ বিন্দুর উন্নতি $\angle ACB=60^{\circ}$।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\tan 60^{\circ}=\frac{105}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{105}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}\,x=105$$`,
          String.raw`$$\text{or, } x=\frac{105}{\sqrt{3}}=\frac{105\sqrt{3}}{3}=35\sqrt{3}$$`,
          String.raw`$$\therefore\; x=60.622$$`,
          String.raw`গাছটির গোড়া থেকে ভূতলস্থ বিন্দুটির দূরত্ব $60.62$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$60.62$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ৩ — book pages ১৯৯-২০০.
    {
      id: 3,
      question: String.raw`$18$ মিটার লম্বা একটি মই একটি দেওয়ালের ছাদ বরাবর ঠেস দিয়ে ভূমির সঙ্গে $45^{\circ}$ কোণ উৎপন্ন করে। দেওয়ালটির উচ্চতা নির্ণয় করো।`,
      figure: "10-ex3",
      solution: {
        steps: [
          String.raw`মনে করি, দেওয়ালটির উচ্চতা $AB=h$ মিটার, মইটির দৈর্ঘ্য $AC=18$ মিটার এবং ভূমির সঙ্গে $\angle ACB=45^{\circ}$ উৎপন্ন করে।`,
          String.raw`মইটি অতিভুজ, তাই এখানে $\sin$ অনুপাত লাগে।`,
          String.raw`$\triangle ABC$ থেকে পাই,`,
          String.raw`$$\sin\angle ACB=\frac{AB}{AC}$$`,
          String.raw`$$\text{or, }\sin 45^{\circ}=\frac{h}{18}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{2}}=\frac{h}{18}$$`,
          String.raw`$$\text{or, }\sqrt{2}\,h=18$$`,
          String.raw`$$\text{or, } h=\frac{18}{\sqrt{2}}=\frac{18\sqrt{2}}{2}=9\sqrt{2}$$`,
          String.raw`[হর ও লবকে $\sqrt{2}$ দ্বারা গুণ করে]`,
          String.raw`$$\therefore\; h=12.728$$`,
          String.raw`সুতরাং দেওয়ালটির উচ্চতা $12.73$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$12.73$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ৪ — book page ২০০.
    {
      id: 4,
      question: String.raw`ঝড়ে একটি গাছ হেলে পড়লো। গাছের গোড়া থেকে $7$ মিটার উচ্চতায় একটি খুঁটি ঠেস দিয়ে গাছটিকে সোজা করা হলো। মাটিতে খুঁটিটির স্পর্শ বিন্দুর অবনতি কোণ $30^{\circ}$ হলে, খুঁটিটির দৈর্ঘ্য নির্ণয় করো।`,
      figure: "10-ex4",
      solution: {
        steps: [
          String.raw`মনে করি, খুঁটিটির দৈর্ঘ্য $BC=x$ মিটার, গাছের গোড়া থেকে $AB=7$ মিটার উচ্চতায় খুঁটিটি ঠেস দিয়ে আছে এবং অবনতি $\angle DBC=30^{\circ}$, যেখানে $BD$ ভূ-রেখার সমান্তরাল।`,
          String.raw`$$\therefore\;\angle ACB=\angle DBC=30^{\circ}$$`,
          String.raw`[একান্তর কোণ বলে]`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\sin\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\sin 30^{\circ}=\frac{7}{x}$$`,
          String.raw`$$\text{or, }\frac{1}{2}=\frac{7}{x}$$`,
          String.raw`$$\therefore\; x=14$$`,
          String.raw`খুঁটিটির দৈর্ঘ্য $14$ মিটার।`,
        ],
        answer: String.raw`$14$ মিটার`,
      },
    },
    // উদাহরণ ৫ — book pages ২০০-২০১.
    {
      id: 5,
      question: String.raw`ভূতলস্থ কোনো স্থানে একটি দালানের ছাদের একটি বিন্দুর উন্নতি কোণ $60^{\circ}$। ঐ স্থান থেকে $42$ মিটার পিছিয়ে গেলে দালানের ঐ বিন্দুর উন্নতি কোণ $45^{\circ}$ হয়। দালানের উচ্চতা নির্ণয় করো।`,
      figure: "10-ex5",
      solution: {
        steps: [
          String.raw`মনে করি, দালানের উচ্চতা $AB=h$ মিটার এবং শীর্ষের উন্নতি $\angle ACB=60^{\circ}$ এবং $C$ স্থান থেকে $CD=42$ মিটার পিছিয়ে গেলে উন্নতি $\angle ADB=45^{\circ}$ হয়।`,
          String.raw`ধরি, $BC=x$ মিটার।`,
          String.raw`$\therefore\; BD=BC+CD=(x+42)$ মিটার।`,
          String.raw`$\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\tan 60^{\circ}=\frac{h}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{h}{x}$$`,
          String.raw`$$\therefore\; x=\frac{h}{\sqrt{3}}\qquad\cdots(1)$$`,
          String.raw`আবার, $\triangle ABD$ থেকে পাই,`,
          String.raw`$$\tan\angle ADB=\frac{AB}{BD}$$`,
          String.raw`$$\text{or, }\tan 45^{\circ}=\frac{h}{x+42}$$`,
          String.raw`$$\text{or, } 1=\frac{h}{x+42}$$`,
          String.raw`$$\text{or, } h=x+42=\frac{h}{\sqrt{3}}+42$$`,
          String.raw`[(1) নং সমীকরণের সাহায্যে]`,
          String.raw`$$\text{or, }\sqrt{3}\,h=h+42\sqrt{3}$$`,
          String.raw`$$\text{or, }\left(\sqrt{3}-1\right)h=42\sqrt{3}$$`,
          String.raw`$$\text{or, } h=\frac{42\sqrt{3}}{\sqrt{3}-1}$$`,
          String.raw`$$\therefore\; h=99.373$$`,
          String.raw`দালানটির উচ্চতা $99.37$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$99.37$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ৬ — book pages ২০১-২০২.
    {
      id: 6,
      question: String.raw`একটি খুঁটি এমনভাবে ভেঙে গেল যে, তার অবিচ্ছিন্ন ভাঙা অংশ দণ্ডায়মান অংশের সাথে $30^{\circ}$ কোণ উৎপন্ন করে খুঁটির গোড়া থেকে $10$ মিটার দূরে মাটি স্পর্শ করে। খুঁটির সম্পূর্ণ দৈর্ঘ্য নির্ণয় করো।`,
      figure: "10-ex6",
      solution: {
        steps: [
          String.raw`মনে করি, খুঁটির সম্পূর্ণ দৈর্ঘ্য $AB=h$ মিটার, খুঁটিটি $BC=x$ মিটার উচ্চতায় ভেঙে গিয়ে বিচ্ছিন্ন না হয়ে ভাঙা অংশ দণ্ডায়মান অংশের সাথে $\angle BCD=30^{\circ}$ উৎপন্ন করে খুঁটির গোড়া থেকে $BD=10$ মিটার দূরে মাটি স্পর্শ করে।`,
          String.raw`এখানে, ভাঙা অংশটি আগে $CA$ হয়ে দাঁড়ানো ছিল, তাই $CD=AC=AB-BC=(h-x)$ মিটার।`,
          String.raw`$\triangle BCD$ থেকে পাই,`,
          String.raw`$$\tan\angle BCD=\frac{BD}{BC}$$`,
          String.raw`$$\text{or, }\tan 30^{\circ}=\frac{10}{x}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{10}{x}$$`,
          String.raw`$$\therefore\; x=10\sqrt{3}$$`,
          String.raw`আবার,`,
          String.raw`$$\sin\angle BCD=\frac{BD}{CD}$$`,
          String.raw`$$\text{or, }\sin 30^{\circ}=\frac{10}{h-x}$$`,
          String.raw`$$\text{or, }\frac{1}{2}=\frac{10}{h-x}$$`,
          String.raw`$$\text{or, } h-x=20$$`,
          String.raw`$$\text{or, } h=20+x=20+10\sqrt{3}$$`,
          String.raw`[$x$ এর মান বসিয়ে]`,
          String.raw`$$\therefore\; h=37.321$$`,
          String.raw`খুঁটির দৈর্ঘ্য $37.32$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$37.32$ মিটার (প্রায়)`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: DIST_MCQ,
      question: String.raw`একটি দণ্ডের দৈর্ঘ্যের বর্গ তার ছায়ার দৈর্ঘ্যের বর্গের এক তৃতীয়াংশ হলে ছায়ার প্রান্ত বিন্দুতে সূর্যের উন্নতি কোণ কত?
      ক) $15^{\circ}$
      খ) $30^{\circ}$
      গ) $45^{\circ}$
      ঘ) $60^{\circ}$`,
      figure: "10-p1",
      solution: {
        steps: [
          String.raw`মনে করি, দণ্ডের দৈর্ঘ্য $h$ ও ছায়ার দৈর্ঘ্য $s$ এবং ছায়ার প্রান্ত বিন্দুতে সূর্যের উন্নতি কোণ $\theta$।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$h^{2}=\frac{1}{3}s^{2}$$`,
          String.raw`$$\text{or, }\frac{h^{2}}{s^{2}}=\frac{1}{3}$$`,
          String.raw`$$\therefore\;\frac{h}{s}=\frac{1}{\sqrt{3}}$$`,
          String.raw`দণ্ডটি ভূমির উপর লম্ব, তাই দণ্ড, ছায়া ও সূর্যরশ্মি মিলে সমকোণী ত্রিভুজ তৈরি হয় যার লম্ব $h$ ও ভূমি $s$।`,
          String.raw`$$\tan\theta=\frac{h}{s}=\frac{1}{\sqrt{3}}=\tan 30^{\circ}$$`,
          String.raw`$$\therefore\;\theta=30^{\circ}$$`,
        ],
        answer: String.raw`খ) $30^{\circ}$`,
      },
    },
    {
      id: 2,
      group: DIST_MCQ,
      question: String.raw`পাশের চিত্রে $x$ এর মান নিচের কোনটি?
      ক) $\dfrac{\sqrt{3}}{60}$
      খ) $\dfrac{60}{\sqrt{3}}$
      গ) $60\sqrt{2}$
      ঘ) $60\sqrt{3}$`,
      figure: "10-p2",
      solution: {
        steps: [
          String.raw`চিত্রে $\angle DBC=90^{\circ}$, $BD=60$ মি., $BC=x$ মি. এবং $\angle BCD=60^{\circ}$।`,
          String.raw`$60^{\circ}$ কোণটি $C$ বিন্দুতে, তাই এর বিপরীত বাহু $BD$ এবং সন্নিহিত বাহু $BC$।`,
          String.raw`সমকোণী $\triangle BCD$ থেকে পাই,`,
          String.raw`$$\tan\angle BCD=\frac{BD}{BC}$$`,
          String.raw`$$\text{or, }\tan 60^{\circ}=\frac{60}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{60}{x}$$`,
          String.raw`$$\therefore\; x=\frac{60}{\sqrt{3}}$$`,
        ],
        answer: String.raw`খ) $\dfrac{60}{\sqrt{3}}$`,
      },
    },
    {
      id: 3,
      group: DIST_MCQ,
      question: String.raw`পাশের চিত্রে $O$ বিন্দুতে $P$ বিন্দুর উন্নতি কোণ কোনটি?
      ক) $\angle QOB$
      খ) $\angle POA$
      গ) $\angle QOA$
      ঘ) $\angle POB$`,
      figure: "10-p3",
      solution: {
        steps: [
          String.raw`চিত্রে $AB$ ভূ-রেখা এবং $P$ ও $Q$ দুইটি বিন্দুই ভূ-রেখার উপরে।`,
          String.raw`ভূতলের উপরের কোনো বিন্দু ভূ-রেখার সাথে যে কোণ উৎপন্ন করে সেটিই ঐ বিন্দুর উন্নতি কোণ — আর কোণটি মাপতে হয় ভূ-রেখার যে রশ্মির দিকে বিন্দুটি হেলে আছে, সেই রশ্মি থেকে।`,
          String.raw`$P$ বিন্দুটি $OA$ রশ্মির দিকে অবস্থিত, তাই $O$ বিন্দুতে $P$ বিন্দুর উন্নতি কোণ $\angle POA$।`,
          String.raw`(একইভাবে $O$ বিন্দুতে $Q$ বিন্দুর উন্নতি কোণ $\angle QOB$।)`,
        ],
        answer: String.raw`খ) $\angle POA$`,
      },
    },
    {
      id: 4,
      group: DIST_MCQ,
      question: String.raw`অবনতি কোণের মান কত ডিগ্রি হলে, একটি খুঁটির দৈর্ঘ্য ও ছায়ার দৈর্ঘ্য সমান হবে?
      ক) $30^{\circ}$
      খ) $45^{\circ}$
      গ) $60^{\circ}$
      ঘ) $90^{\circ}$`,
      figure: "10-p4",
      solution: {
        steps: [
          String.raw`মনে করি, খুঁটির দৈর্ঘ্য $h$, ছায়ার দৈর্ঘ্য $s$ এবং খুঁটির শীর্ষ থেকে ছায়ার প্রান্ত বিন্দুর অবনতি কোণ $\theta$।`,
          String.raw`খুঁটির শীর্ষে ভূ-রেখার সমান্তরাল রেখা টানলে এই অবনতি কোণ ও ছায়ার প্রান্তে সূর্যের উন্নতি কোণ একান্তর কোণ হয়, তাই দুইটি সমান।`,
          String.raw`প্রশ্নানুসারে, $h=s$।`,
          String.raw`$$\tan\theta=\frac{h}{s}=1=\tan 45^{\circ}$$`,
          String.raw`$$\therefore\;\theta=45^{\circ}$$`,
        ],
        answer: String.raw`খ) $45^{\circ}$`,
      },
    },
    {
      id: 5,
      group: DIST_SOLVE,
      question: String.raw`একটি মিনারের পাদদেশ থেকে কিছু দূরে একটি স্থানে মিনারটির শীর্ষের উন্নতি $30^{\circ}$ এবং মিনারটির উচ্চতা $26$ মিটার হলে, মিনার থেকে ঐ স্থানটির দূরত্ব নির্ণয় করো।`,
      figure: "10-p5",
      solution: {
        steps: [
          String.raw`মনে করি, মিনারের উচ্চতা $AB=26$ মিটার এবং মিনারের পাদদেশ থেকে ভূতলস্থ $C$ স্থানটির দূরত্ব $BC=d$ মিটার, যেখানে শীর্ষ $A$ বিন্দুর উন্নতি $\angle ACB=30^{\circ}$।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\tan 30^{\circ}=\frac{26}{d}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{26}{d}$$`,
          String.raw`$$\therefore\; d=26\sqrt{3}$$`,
          String.raw`$$\therefore\; d=45.033$$`,
          String.raw`নির্ণেয় দূরত্ব $45.03$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$45.03$ মিটার (প্রায়)`,
      },
    },
    {
      id: 6,
      group: DIST_SOLVE,
      question: String.raw`একটি গাছের পাদদেশ থেকে $20$ মিটার দূরে ভূতলের কোনো বিন্দুতে গাছের চূড়ার উন্নতি কোণ $60^{\circ}$ হলে, গাছটির উচ্চতা নির্ণয় করো।`,
      figure: "10-p6",
      solution: {
        steps: [
          String.raw`মনে করি, গাছটির উচ্চতা $AB=h$ মিটার এবং গাছের পাদদেশ থেকে $BC=20$ মিটার দূরে ভূতলস্থ $C$ বিন্দুতে চূড়া $A$ বিন্দুর উন্নতি $\angle ACB=60^{\circ}$।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan\angle ACB=\frac{AB}{BC}$$`,
          String.raw`$$\text{or, }\tan 60^{\circ}=\frac{h}{20}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{h}{20}$$`,
          String.raw`$$\therefore\; h=20\sqrt{3}$$`,
          String.raw`$$\therefore\; h=34.641$$`,
          String.raw`গাছটির উচ্চতা $34.64$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$34.64$ মিটার (প্রায়)`,
      },
    },
    {
      id: 7,
      group: DIST_SOLVE,
      question: String.raw`$18$ মিটার দৈর্ঘ্য একটি মই ভূমির সাথে $45^{\circ}$ কোণ উৎপন্ন করে দেওয়ালের ছাদ স্পর্শ করে। দেওয়ালটির উচ্চতা নির্ণয় করো।`,
      figure: "10-p7",
      solution: {
        steps: [
          String.raw`মনে করি, দেওয়ালটির উচ্চতা $AB=h$ মিটার, মইটির দৈর্ঘ্য $AC=18$ মিটার এবং ভূমির সাথে $\angle ACB=45^{\circ}$ উৎপন্ন করে।`,
          String.raw`এখানে মইটিই অতিভুজ, তাই $\sin$ অনুপাত নিতে হবে।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\sin\angle ACB=\frac{AB}{AC}$$`,
          String.raw`$$\text{or, }\sin 45^{\circ}=\frac{h}{18}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{2}}=\frac{h}{18}$$`,
          String.raw`$$\text{or, }\sqrt{2}\,h=18$$`,
          String.raw`$$\text{or, } h=\frac{18}{\sqrt{2}}=\frac{18\sqrt{2}}{2}=9\sqrt{2}$$`,
          String.raw`[হর ও লবকে $\sqrt{2}$ দ্বারা গুণ করে]`,
          String.raw`$$\therefore\; h=12.728$$`,
          String.raw`দেওয়ালটির উচ্চতা $12.73$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$12.73$ মিটার (প্রায়)`,
      },
    },
    {
      id: 8,
      group: DIST_SOLVE,
      question: String.raw`একটি ঘরের ছাদের কোনো বিন্দুতে ঐ বিন্দু থেকে $20$ মিটার দূরের ভূতলস্থ একটি বিন্দুর অবনতি কোণ $30^{\circ}$ হলে, ঘরটির উচ্চতা নির্ণয় করো।`,
      figure: "10-p8",
      solution: {
        steps: [
          String.raw`মনে করি, ঘরটির উচ্চতা $AB=h$ মিটার এবং ছাদের $A$ বিন্দু থেকে $AC=20$ মিটার দূরে ভূতলস্থ $C$ বিন্দুর অবনতি $\angle DAC=30^{\circ}$, যেখানে $AD$ ভূ-রেখার সমান্তরাল।`,
          String.raw`$$\therefore\;\angle ACB=\angle DAC=30^{\circ}$$`,
          String.raw`[একান্তর কোণ বলে]`,
          String.raw`$20$ মিটার মাপা হয়েছে ছাদের $A$ বিন্দু থেকেই, তাই এটি ত্রিভুজের অতিভুজ $AC$ — ভূমি নয়।`,
          String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
          String.raw`$$\sin\angle ACB=\frac{AB}{AC}$$`,
          String.raw`$$\text{or, }\sin 30^{\circ}=\frac{h}{20}$$`,
          String.raw`$$\text{or, }\frac{1}{2}=\frac{h}{20}$$`,
          String.raw`$$\therefore\; h=10$$`,
          String.raw`ঘরটির উচ্চতা $10$ মিটার।`,
        ],
        answer: String.raw`$10$ মিটার`,
      },
    },
    {
      id: 9,
      group: DIST_SOLVE,
      question: String.raw`ভূতলে কোনো স্থানে একটি স্তম্ভের শীর্ষের উন্নতি $60^{\circ}$। ঐ স্থান থেকে $25$ মিটার পিছিয়ে গেলে স্তম্ভটির উন্নতি কোণ $30^{\circ}$ হয়। স্তম্ভটির উচ্চতা নির্ণয় করো।`,
      figure: "10-p9",
      solution: {
        steps: [
          String.raw`মনে করি, স্তম্ভটির উচ্চতা $AB=h$ মিটার; ভূতলস্থ $C$ স্থানে শীর্ষ $A$ বিন্দুর উন্নতি $\angle ACB=60^{\circ}$ এবং $CD=25$ মিটার পিছিয়ে $D$ স্থানে উন্নতি $\angle ADB=30^{\circ}$।`,
          String.raw`ধরি, $BC=x$ মিটার।`,
          String.raw`$\therefore\; BD=BC+CD=(x+25)$ মিটার।`,
          String.raw`$\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan 60^{\circ}=\frac{h}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{h}{x}$$`,
          String.raw`$$\therefore\; x=\frac{h}{\sqrt{3}}\qquad\cdots(1)$$`,
          String.raw`আবার, $\triangle ABD$ থেকে পাই,`,
          String.raw`$$\tan 30^{\circ}=\frac{h}{x+25}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{h}{x+25}$$`,
          String.raw`$$\text{or, } x+25=\sqrt{3}\,h$$`,
          String.raw`$$\text{or, }\frac{h}{\sqrt{3}}+25=\sqrt{3}\,h$$`,
          String.raw`[(1) নং সমীকরণের সাহায্যে]`,
          String.raw`$$\text{or, } h+25\sqrt{3}=3h$$`,
          String.raw`[উভয় পক্ষকে $\sqrt{3}$ দ্বারা গুণ করে]`,
          String.raw`$$\text{or, } 2h=25\sqrt{3}$$`,
          String.raw`$$\therefore\; h=\frac{25\sqrt{3}}{2}=21.651$$`,
          String.raw`স্তম্ভটির উচ্চতা $21.65$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$21.65$ মিটার (প্রায়)`,
      },
    },
    {
      id: 10,
      group: DIST_SOLVE,
      question: String.raw`কোনো স্থান থেকে একটি মিনারের দিকে $60$ মিটার এগিয়ে আসলে মিনারের শীর্ষ বিন্দুর উন্নতি $45^{\circ}$ থেকে $60^{\circ}$ হয়। মিনারটির উচ্চতা নির্ণয় করো।`,
      figure: "10-p10",
      solution: {
        steps: [
          String.raw`মনে করি, মিনারটির উচ্চতা $AB=h$ মিটার; ভূতলস্থ $D$ স্থানে শীর্ষ $A$ বিন্দুর উন্নতি $\angle ADB=45^{\circ}$ এবং $DC=60$ মিটার এগিয়ে $C$ স্থানে উন্নতি $\angle ACB=60^{\circ}$।`,
          String.raw`ধরি, $BC=x$ মিটার।`,
          String.raw`$\therefore\; BD=BC+CD=(x+60)$ মিটার।`,
          String.raw`$\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan 60^{\circ}=\frac{h}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}=\frac{h}{x}$$`,
          String.raw`$$\therefore\; x=\frac{h}{\sqrt{3}}\qquad\cdots(1)$$`,
          String.raw`আবার, $\triangle ABD$ থেকে পাই,`,
          String.raw`$$\tan 45^{\circ}=\frac{h}{x+60}$$`,
          String.raw`$$\text{or, } 1=\frac{h}{x+60}$$`,
          String.raw`$$\text{or, } h=x+60=\frac{h}{\sqrt{3}}+60$$`,
          String.raw`[(1) নং সমীকরণের সাহায্যে]`,
          String.raw`$$\text{or, }\sqrt{3}\,h=h+60\sqrt{3}$$`,
          String.raw`$$\text{or, }\left(\sqrt{3}-1\right)h=60\sqrt{3}$$`,
          String.raw`$$\text{or, } h=\frac{60\sqrt{3}}{\sqrt{3}-1}=\frac{60\sqrt{3}\left(\sqrt{3}+1\right)}{\left(\sqrt{3}-1\right)\left(\sqrt{3}+1\right)}$$`,
          String.raw`$$\text{or, } h=\frac{180+60\sqrt{3}}{2}=90+30\sqrt{3}$$`,
          String.raw`$$\therefore\; h=141.962$$`,
          String.raw`মিনারটির উচ্চতা $141.96$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$141.96$ মিটার (প্রায়)`,
      },
    },
    {
      id: 11,
      group: DIST_SOLVE,
      question: String.raw`একটি নদীর তীর কোনো এক স্থানে দাঁড়িয়ে একজন লোক দেখল যে, ঠিক সোজাসুজি অপর তীরে অবস্থিত একটি টাওয়ারের উন্নতি কোণ $60^{\circ}$। ঐ স্থান থেকে $32$ মিটার পিছিয়ে গেলে উন্নতি কোণ $30^{\circ}$ হয়। টাওয়ারের উচ্চতা এবং নদীর বিস্তার নির্ণয় করো।`,
      figure: "10-p11",
      solution: {
        steps: [
          String.raw`মনে করি, টাওয়ারের উচ্চতা $AB=h$ মিটার এবং নদীর বিস্তার $BC=x$ মিটার। টাওয়ারটি ঠিক সোজাসুজি অপর তীরে, তাই $BC$-ই নদীর বিস্তার।`,
          String.raw`$C$ স্থানে শীর্ষ $A$ বিন্দুর উন্নতি $\angle ACB=60^{\circ}$ এবং $CD=32$ মিটার পিছিয়ে $D$ স্থানে উন্নতি $\angle ADB=30^{\circ}$।`,
          String.raw`$\therefore\; BD=BC+CD=(x+32)$ মিটার।`,
          String.raw`$\triangle ABC$ থেকে পাই,`,
          String.raw`$$\tan 60^{\circ}=\frac{h}{x}$$`,
          String.raw`$$\therefore\; h=\sqrt{3}\,x\qquad\cdots(1)$$`,
          String.raw`আবার, $\triangle ABD$ থেকে পাই,`,
          String.raw`$$\tan 30^{\circ}=\frac{h}{x+32}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{h}{x+32}$$`,
          String.raw`$$\text{or, } x+32=\sqrt{3}\,h=\sqrt{3}\times\sqrt{3}\,x=3x$$`,
          String.raw`[(1) নং সমীকরণের সাহায্যে]`,
          String.raw`$$\text{or, } 2x=32$$`,
          String.raw`$$\therefore\; x=16$$`,
          String.raw`$$\therefore\; h=\sqrt{3}\times 16=16\sqrt{3}=27.713$$`,
          String.raw`টাওয়ারের উচ্চতা $27.71$ মিটার (প্রায়) এবং নদীর বিস্তার $16$ মিটার।`,
        ],
        answer: String.raw`টাওয়ারের উচ্চতা $27.71$ মিটার (প্রায়), নদীর বিস্তার $16$ মিটার`,
      },
    },
    {
      id: 12,
      group: DIST_SOLVE,
      question: String.raw`$64$ মিটার লম্বা একটি খুঁটি ভেঙে গিয়ে সম্পূর্ণ বিচ্ছিন্ন না হয়ে ভূমির সাথে $60^{\circ}$ উৎপন্ন করে। খুঁটিটির ভাঙা অংশের দৈর্ঘ্য নির্ণয় করো।`,
      figure: "10-p12",
      solution: {
        steps: [
          String.raw`মনে করি, খুঁটিটির ভাঙা অংশের দৈর্ঘ্য $CD=x$ মিটার; তাহলে দণ্ডায়মান অংশ $BC=(64-x)$ মিটার এবং ভাঙা অংশটি ভূমির সাথে $\angle CDB=60^{\circ}$ উৎপন্ন করে।`,
          String.raw`এখানে ভাঙা অংশ $CD$-ই সমকোণী $\triangle BCD$-এর অতিভুজ।`,
          String.raw`$\triangle BCD$ থেকে পাই,`,
          String.raw`$$\sin\angle CDB=\frac{BC}{CD}$$`,
          String.raw`$$\text{or, }\sin 60^{\circ}=\frac{64-x}{x}$$`,
          String.raw`$$\text{or, }\frac{\sqrt{3}}{2}=\frac{64-x}{x}$$`,
          String.raw`$$\text{or, }\sqrt{3}\,x=128-2x$$`,
          String.raw`$$\text{or, }\left(2+\sqrt{3}\right)x=128$$`,
          String.raw`$$\text{or, } x=\frac{128}{2+\sqrt{3}}=\frac{128\left(2-\sqrt{3}\right)}{\left(2+\sqrt{3}\right)\left(2-\sqrt{3}\right)}$$`,
          String.raw`$$\text{or, } x=128\left(2-\sqrt{3}\right)$$`,
          String.raw`[যেহেতু $\left(2+\sqrt{3}\right)\left(2-\sqrt{3}\right)=4-3=1$]`,
          String.raw`$$\therefore\; x=34.298$$`,
          String.raw`খুঁটিটির ভাঙা অংশের দৈর্ঘ্য $34.30$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$34.30$ মিটার (প্রায়)`,
      },
    },
    {
      id: 13,
      group: DIST_SOLVE,
      question: String.raw`একটি গাছ ঝড়ে এমনভাবে ভেঙে গেল যে, ভাঙা অংশ দণ্ডায়মান অংশের সাথে $30^{\circ}$ কোণ করে গাছের গোড়া থেকে $12$ মিটার দূরে মাটি স্পর্শ করে। সম্পূর্ণ গাছটির দৈর্ঘ্য নির্ণয় করো।`,
      figure: "10-p13",
      solution: {
        steps: [
          String.raw`মনে করি, সম্পূর্ণ গাছটির দৈর্ঘ্য $AB=h$ মিটার এবং গাছটি $BC=x$ মিটার উচ্চতায় ভেঙে গিয়ে বিচ্ছিন্ন না হয়ে ভাঙা অংশ দণ্ডায়মান অংশের সাথে $\angle BCD=30^{\circ}$ উৎপন্ন করে গোড়া থেকে $BD=12$ মিটার দূরে মাটি স্পর্শ করে।`,
          String.raw`ভাঙা অংশটি আগে $CA$ হয়ে দাঁড়ানো ছিল, তাই $CD=AC=AB-BC=(h-x)$ মিটার।`,
          String.raw`$\triangle BCD$ থেকে পাই,`,
          String.raw`$$\tan\angle BCD=\frac{BD}{BC}$$`,
          String.raw`$$\text{or, }\tan 30^{\circ}=\frac{12}{x}$$`,
          String.raw`$$\text{or, }\frac{1}{\sqrt{3}}=\frac{12}{x}$$`,
          String.raw`$$\therefore\; x=12\sqrt{3}$$`,
          String.raw`আবার,`,
          String.raw`$$\sin\angle BCD=\frac{BD}{CD}$$`,
          String.raw`$$\text{or, }\sin 30^{\circ}=\frac{12}{h-x}$$`,
          String.raw`$$\text{or, }\frac{1}{2}=\frac{12}{h-x}$$`,
          String.raw`$$\text{or, } h-x=24$$`,
          String.raw`$$\text{or, } h=24+x=24+12\sqrt{3}$$`,
          String.raw`[$x$ এর মান বসিয়ে]`,
          String.raw`$$\therefore\; h=44.785$$`,
          String.raw`সম্পূর্ণ গাছটির দৈর্ঘ্য $44.78$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$44.78$ মিটার (প্রায়)`,
      },
    },
    {
      id: 14,
      group: DIST_SOLVE,
      question: String.raw`চিত্রে, $CD=96$ মিটার।`,
      figure: "10-p14",
      parts: [
        {
          label: "ক",
          question: String.raw`$\angle CAD$ এর ডিগ্রি পরিমাপ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`চিত্রে $\angle ABD=90^{\circ}$, $\angle ACB=60^{\circ}$, $\angle ADB=30^{\circ}$ এবং $B$, $C$, $D$ একই সরলরেখায় অবস্থিত।`,
              String.raw`$\triangle ACD$-এ $AC$ বাহুর বিপরীত দিকে $CB$ বর্ধিত, তাই $\angle ACB$ হলো $C$ বিন্দুর বহিঃস্থ কোণ।`,
              String.raw`ত্রিভুজের বহিঃস্থ কোণ তার বিপরীত অন্তঃস্থ কোণ দুইটির সমষ্টির সমান, অর্থাৎ`,
              String.raw`$$\angle ACB=\angle CAD+\angle ADC$$`,
              String.raw`$$\text{or, } 60^{\circ}=\angle CAD+30^{\circ}$$`,
              String.raw`$$\therefore\;\angle CAD=30^{\circ}$$`,
            ],
            answer: String.raw`$\angle CAD=30^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$BC$ এর দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`(ক) থেকে পাই, $\angle CAD=30^{\circ}=\angle ADC$।`,
              String.raw`$\triangle ACD$-এর দুইটি কোণ সমান, তাই এটি সমদ্বিবাহু এবং সমান কোণ দুইটির বিপরীত বাহু দুইটিও সমান।`,
              String.raw`$$\therefore\; AC=CD=96$$`,
              String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
              String.raw`$$\cos\angle ACB=\frac{BC}{AC}$$`,
              String.raw`$$\text{or, }\cos 60^{\circ}=\frac{BC}{96}$$`,
              String.raw`$$\text{or, }\frac{1}{2}=\frac{BC}{96}$$`,
              String.raw`$$\therefore\; BC=48$$`,
            ],
            answer: String.raw`$BC=48$ মিটার`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\triangle ACD$ এর পরিসীমা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`(খ) থেকে $AC=CD=96$ মিটার।`,
              String.raw`সমকোণী $\triangle ABC$ থেকে পাই,`,
              String.raw`$$AB=AC\sin\angle ACB=96\times\sin 60^{\circ}=96\times\frac{\sqrt{3}}{2}=48\sqrt{3}$$`,
              String.raw`আবার, সমকোণী $\triangle ABD$ থেকে পাই,`,
              String.raw`$$\sin\angle ADB=\frac{AB}{AD}$$`,
              String.raw`$$\text{or, }\sin 30^{\circ}=\frac{48\sqrt{3}}{AD}$$`,
              String.raw`$$\text{or, }\frac{1}{2}=\frac{48\sqrt{3}}{AD}$$`,
              String.raw`$$\therefore\; AD=96\sqrt{3}=166.277$$`,
              String.raw`$\triangle ACD$ এর পরিসীমা,`,
              String.raw`$$=AC+CD+DA=96+96+96\sqrt{3}$$`,
              String.raw`$$=192+166.277=358.277$$`,
              String.raw`নির্ণেয় পরিসীমা $358.28$ মিটার (প্রায়)।`,
            ],
            answer: String.raw`$358.28$ মিটার (প্রায়)`,
          },
        },
      ],
    },
  ],
};

const exercise161: Exercise = {
  id: "16.1",
  bnId: "অনুশীলনী ১৬.১",
  title: "ত্রিভুজক্ষেত্রের ক্ষেত্রফল",
  bookPages: "৩০০ – ৩০১",
  formulas: [
    {
      title: "ত্রিভুজক্ষেত্রের ক্ষেত্রফল",
      formulas: [
        {
          statement: String.raw`$$A=\frac{1}{2}\,b\,h$$`,
          note: String.raw`ভূমি $b$ ও উচ্চতা $h$ জানা থাকলে। নিচের বাকি সূত্রগুলো এই একটি থেকেই আসে — প্রতিবার কেবল উচ্চতাটিকে দেওয়া রাশি দিয়ে লিখে নেওয়া হয়।`,
        },
        {
          statement: String.raw`$$A=\frac{1}{2}\,a\,b$$`,
          note: String.raw`সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহু দুটি $a$ ও $b$ হলে; এখানে এক বাহুই অন্যটির উচ্চতা, তাই আলাদা করে উচ্চতা আঁকতে হয় না।`,
        },
        {
          statement: String.raw`$$A=\frac{1}{2}ab\sin C=\frac{1}{2}bc\sin A=\frac{1}{2}ca\sin B$$`,
          note: String.raw`দুই বাহু ও এদের অন্তর্ভুক্ত কোণ জানা থাকলে। কোণটি যে দুই বাহুর মাঝে, ক্ষেত্রফলে সেই দুই বাহুই গুণ হয়।`,
        },
        {
          statement: String.raw`$$A=\sqrt{s(s-a)(s-b)(s-c)}$$`,
          note: String.raw`তিন বাহু $a,\,b,\,c$ জানা থাকলে, যেখানে অর্ধপরিসীমা $s=\dfrac{a+b+c}{2}$। একে হিরনের সূত্র বলা হয়।`,
        },
        {
          statement: String.raw`$$A=\frac{\sqrt{3}}{4}a^{2}$$`,
          note: String.raw`সমবাহু ত্রিভুজের প্রতি বাহু $a$ হলে। এর উচ্চতা $h=\dfrac{\sqrt{3}}{2}a$ — শীর্ষ থেকে ভূমির উপর লম্ব টানলে ভূমি সমদ্বিখণ্ডিত হয় বলেই এটি পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$A=\frac{b}{4}\sqrt{4a^{2}-b^{2}}$$`,
          note: String.raw`সমদ্বিবাহু ত্রিভুজের সমান বাহু $a$ ও ভূমি $b$ হলে; এর উচ্চতা $h=\dfrac{\sqrt{4a^{2}-b^{2}}}{2}$।`,
        },
      ],
    },
    {
      title: "যে সম্পর্কগুলো বারবার লাগে",
      formulas: [
        {
          statement: String.raw`$$h^{2}=p^{2}+b^{2}$$`,
          note: String.raw`পিথাগোরাসের সূত্র। এই অনুশীলনীতে ঢোকার পথও প্রায়ই এটিই — অতিভুজ ও এক বাহু জানা থাকলে তৃতীয় বাহুটি সঙ্গে সঙ্গেই পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$\sin 30^{\circ}=\frac{1}{2},\qquad \sin 45^{\circ}=\frac{1}{\sqrt{2}},\qquad \sin 60^{\circ}=\frac{\sqrt{3}}{2}$$`,
          note: String.raw`অন্তর্ভুক্ত কোণের সূত্রে বসানোর জন্য। সঙ্গে $\cos 45^{\circ}=\dfrac{1}{\sqrt{2}}$ ও $\cos 60^{\circ}=\dfrac{1}{2}$।`,
        },
        {
          statement: String.raw`$$\theta>90^{\circ}\;\Rightarrow\;180^{\circ}-\theta<90^{\circ}$$`,
          note: String.raw`অন্তর্ভুক্ত কোণ $\theta$ স্থূলকোণ হলে একটি বাহুকে বাড়িয়ে তার উপর লম্ব টানা হয়; লম্বপাদের পাশে তখন সূক্ষ্মকোণ $180^{\circ}-\theta$ পাওয়া যায় এবং সমকোণী ত্রিভুজেই কাজ চলে।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ২৯৭.
    {
      id: 1,
      figure: "161-ex1",
      question: String.raw`একটি সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহুদ্বয়ের দৈর্ঘ্য যথাক্রমে $6$ সে.মি. ও $8$ সে.মি. হলে এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহুদ্বয় $a=6$ সে.মি. এবং $b=8$ সে.মি.।`,
          String.raw`$$A=\frac{1}{2}ab=\frac{1}{2}\times 6\times 8=24$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $24$ বর্গ সে.মি.।`,
        ],
        answer: String.raw`$24$ বর্গ সে.মি.`,
      },
    },
    // উদাহরণ ২ — book page ২৯৭.
    {
      id: 2,
      figure: "161-ex2",
      question: String.raw`কোনো ত্রিভুজের দুই বাহুর দৈর্ঘ্য যথাক্রমে $9$ সে.মি. ও $10$ সে.মি. এবং এদের অন্তর্ভুক্ত কোণ $60^{\circ}$। ত্রিভুজটির ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বাহুদ্বয় $a=9$ সে.মি. ও $b=10$ সে.মি. এবং এদের অন্তর্ভুক্ত কোণ $\theta=60^{\circ}$।`,
          String.raw`$$A=\frac{1}{2}ab\sin\theta$$`,
          String.raw`$$=\frac{1}{2}\times 9\times 10\times\sin 60^{\circ}$$`,
          String.raw`$$=\frac{1}{2}\times 9\times 10\times\frac{\sqrt{3}}{2}=\frac{45\sqrt{3}}{2}=38.97$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $38.97$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$38.97$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    // উদাহরণ ৩ — book pages ২৯৭-২৯৮.
    {
      id: 3,
      figure: "161-ex3",
      question: String.raw`একটি ত্রিভুজের তিনটি বাহুর দৈর্ঘ্য যথাক্রমে $7$ সে.মি., $8$ সে.মি. ও $9$ সে.মি.। এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $a=7$ সে.মি., $b=8$ সে.মি. ও $c=9$ সে.মি.।`,
          String.raw`$$s=\frac{a+b+c}{2}=\frac{7+8+9}{2}=12$$`,
          String.raw`$$A=\sqrt{s(s-a)(s-b)(s-c)}$$`,
          String.raw`$$=\sqrt{12(12-7)(12-8)(12-9)}$$`,
          String.raw`$$=\sqrt{12\times 5\times 4\times 3}=\sqrt{720}=26.83$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $26.83$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$26.83$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    // উদাহরণ ৪ — book page ২৯৮.
    {
      id: 4,
      figure: "161-ex4",
      question: String.raw`একটি সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য $1$ মিটার বাড়ালে ক্ষেত্রফল $3\sqrt{3}$ বর্গমিটার বেড়ে যায়। ত্রিভুজটির বাহুর দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য $a$ মিটার।`,
          String.raw`তাহলে ত্রিভুজটির ক্ষেত্রফল $\dfrac{\sqrt{3}}{4}a^{2}$ বর্গমিটার।`,
          String.raw`প্রত্যেক বাহুর দৈর্ঘ্য $1$ মিটার বাড়ালে ক্ষেত্রফল দাঁড়ায় $\dfrac{\sqrt{3}}{4}(a+1)^{2}$ বর্গমিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{\sqrt{3}}{4}(a+1)^{2}-\frac{\sqrt{3}}{4}a^{2}=3\sqrt{3}$$`,
          String.raw`$$\text{or, }(a+1)^{2}-a^{2}=12$$`,
          String.raw`[উভয় পক্ষকে $\dfrac{\sqrt{3}}{4}$ দ্বারা ভাগ করে]`,
          String.raw`$$\text{or, } a^{2}+2a+1-a^{2}=12$$`,
          String.raw`$$\text{or, } 2a=11$$`,
          String.raw`$$\therefore\; a=5.5$$`,
          String.raw`নির্ণেয় বাহুর দৈর্ঘ্য $5.5$ মিটার।`,
        ],
        answer: String.raw`$5.5$ মিটার`,
      },
    },
    // উদাহরণ ৫ — book pages ২৯৮-২৯৯.
    {
      id: 5,
      figure: "161-ex5",
      question: String.raw`একটি সমদ্বিবাহু ত্রিভুজের ভূমির দৈর্ঘ্য $60$ সে.মি.। এর ক্ষেত্রফল $1200$ বর্গ সে.মি. হলে সমান সমান বাহুর দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমদ্বিবাহু ত্রিভুজের ভূমি $b=60$ সে.মি. এবং সমান সমান বাহুর দৈর্ঘ্য $a$ সে.মি.।`,
          String.raw`ত্রিভুজটির ক্ষেত্রফল $\dfrac{b}{4}\sqrt{4a^{2}-b^{2}}$ বর্গ সে.মি.।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{b}{4}\sqrt{4a^{2}-b^{2}}=1200$$`,
          String.raw`$$\text{or, }\frac{60}{4}\sqrt{4a^{2}-(60)^{2}}=1200$$`,
          String.raw`$$\text{or, } 15\sqrt{4a^{2}-3600}=1200$$`,
          String.raw`$$\text{or, }\sqrt{4a^{2}-3600}=80$$`,
          String.raw`$$\text{or, } 4a^{2}-3600=6400$$`,
          String.raw`[বর্গ করে]`,
          String.raw`$$\text{or, } 4a^{2}=10000$$`,
          String.raw`$$\text{or, } a^{2}=2500$$`,
          String.raw`$$\therefore\; a=50$$`,
          String.raw`ত্রিভুজটির সমান বাহুর দৈর্ঘ্য $50$ সে.মি.।`,
        ],
        answer: String.raw`$50$ সে.মি.`,
      },
    },
    // উদাহরণ ৬ — book page ২৯৯.
    {
      id: 6,
      figure: "161-ex6",
      question: String.raw`একটি নির্দিষ্ট স্থান থেকে দুইটি রাস্তা $120^{\circ}$ কোণে চলে গেছে। দুই জন লোক ঐ নির্দিষ্ট স্থান থেকে যথাক্রমে ঘণ্টায় $10$ কিলোমিটার ও ঘণ্টায় $8$ কিলোমিটার বেগে বিপরীত দিকে রওনা হলো। $5$ ঘণ্টা পরে তাদের মধ্যে সরাসরি দূরত্ব নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $A$ স্থান থেকে রওনা হয়ে $5$ ঘণ্টা পর তারা যথাক্রমে $B$ ও $C$ স্থানে পৌঁছালো; তাহলে নির্ণেয় দূরত্ব $BC$।`,
          String.raw`$C$ থেকে $BA$-এর বর্ধিতাংশের উপর $CD$ লম্ব টানি।`,
          String.raw`$$AB=5\times 10=50,\qquad AC=5\times 8=40,\qquad\angle BAC=120^{\circ}$$`,
          String.raw`$$\therefore\;\angle DAC=180^{\circ}-120^{\circ}=60^{\circ}$$`,
          String.raw`সমকোণী $\triangle ACD$ থেকে পাই,`,
          String.raw`$$CD=AC\sin 60^{\circ}=40\times\frac{\sqrt{3}}{2}=20\sqrt{3}$$`,
          String.raw`$$AD=AC\cos 60^{\circ}=40\times\frac{1}{2}=20$$`,
          String.raw`আবার, সমকোণী $\triangle BCD$ থেকে পাই,`,
          String.raw`$$BC^{2}=BD^{2}+CD^{2}=(BA+AD)^{2}+CD^{2}$$`,
          String.raw`$$=(50+20)^{2}+\left(20\sqrt{3}\right)^{2}=4900+1200=6100$$`,
          String.raw`$$\therefore\; BC=78.1$$`,
          String.raw`নির্ণেয় দূরত্ব $78.1$ কিলোমিটার (প্রায়)।`,
        ],
        answer: String.raw`$78.1$ কিলোমিটার (প্রায়)`,
      },
    },
    // উদাহরণ ৭ — book pages ২৯৯-৩০০.
    {
      id: 7,
      figure: "161-ex7",
      question: String.raw`চিত্রে $\triangle ABC$-এ $\angle ABC=90^{\circ}$, $AB=15$ সে.মি., $AC=25$ সে.মি. এবং $B$ থেকে $AC$-এর উপর $BD$ লম্ব।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$BC$ বাহুর দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$AB=15,\qquad AC=25$$`,
              String.raw`$$BC=\sqrt{AC^{2}-AB^{2}}=\sqrt{(25)^{2}-(15)^{2}}$$`,
              String.raw`$$=\sqrt{625-225}=\sqrt{400}=20$$`,
            ],
            answer: String.raw`$BC=20$ সে.মি.`,
          },
        },
        {
          label: "খ",
          question: String.raw`$BD$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$\triangle ABC$-এর ক্ষেত্রফল দুইভাবে লেখা যায় — একবার $BC$-কে ভূমি ধরে, একবার $AC$-কে ভূমি ধরে।`,
              String.raw`$$\frac{1}{2}BC\cdot AB=\frac{1}{2}AC\cdot BD$$`,
              String.raw`$$\text{or, } 25\times BD=20\times 15$$`,
              String.raw`$$\therefore\; BD=12$$`,
            ],
            answer: String.raw`$BD=12$ সে.মি.`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\triangle ABD$ ও $\triangle BCD$ এর ক্ষেত্রফলদ্বয়ের অনুপাত নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমকোণী $\triangle ABD$ থেকে পাই,`,
              String.raw`$$AD^{2}+BD^{2}=AB^{2}$$`,
              String.raw`$$\text{or, } AD^{2}+(12)^{2}=(15)^{2}$$`,
              String.raw`$$\text{or, } AD^{2}=225-144=81$$`,
              String.raw`$$\therefore\; AD=9\qquad\text{and}\qquad CD=AC-AD=25-9=16$$`,
              String.raw`$\triangle ABD$ ও $\triangle BCD$ উভয়ের উচ্চতা $BD$, তাই ক্ষেত্রফলের অনুপাত ভূমির অনুপাতেই দাঁড়ায়।`,
              String.raw`$$\frac{\triangle ABD}{\triangle BCD}=\frac{\frac{1}{2}BD\cdot AD}{\frac{1}{2}BD\cdot CD}=\frac{9}{16}$$`,
            ],
            answer: String.raw`$\triangle ABD:\triangle BCD=9:16$`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      figure: "161-p1",
      question: String.raw`একটি সমকোণী ত্রিভুজের অতিভুজ $25$ মিটার। এর অপর বাহুদ্বয়ের একটি বাহু অপরটির $\dfrac{3}{4}$ অংশ হলে, বাহু দুইটির দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমকোণ সংলগ্ন বড় বাহুর দৈর্ঘ্য $x$ মিটার; তাহলে অপর বাহুর দৈর্ঘ্য $\dfrac{3}{4}x$ মিটার।`,
          String.raw`পিথাগোরাসের সূত্রানুসারে,`,
          String.raw`$$x^{2}+\left(\frac{3}{4}x\right)^{2}=(25)^{2}$$`,
          String.raw`$$\text{or, } x^{2}+\frac{9}{16}x^{2}=625$$`,
          String.raw`$$\text{or, }\frac{25}{16}x^{2}=625$$`,
          String.raw`$$\text{or, } x^{2}=400$$`,
          String.raw`$$\therefore\; x=20$$`,
          String.raw`[দৈর্ঘ্য ঋণাত্মক হতে পারে না]`,
          String.raw`$$\therefore\;\frac{3}{4}x=\frac{3}{4}\times 20=15$$`,
          String.raw`অতএব বাহু দুইটির দৈর্ঘ্য $20$ মিটার ও $15$ মিটার।`,
        ],
        answer: String.raw`$20$ মিটার ও $15$ মিটার`,
      },
    },
    {
      id: 2,
      figure: "161-p2",
      question: String.raw`$20$ মিটার লম্বা একটি মই দেওয়ালের সাথে খাড়াভাবে আছে। মইটির গোড়া দেওয়াল থেকে কত দূরে সরালে ওপরের প্রান্ত $4$ মিটার নিচে নামবে।`,
      solution: {
        steps: [
          String.raw`মই খাড়াভাবে আছে, তাই এর ওপরের প্রান্ত দেওয়াল বরাবর ভূমি থেকে $20$ মিটার উঁচুতে।`,
          String.raw`প্রান্তটি $4$ মিটার নেমে এলে তার উচ্চতা দাঁড়ায় $20-4=16$ মিটার।`,
          String.raw`মইয়ের দৈর্ঘ্য বদলায় না, তাই দেওয়াল, মই ও মেঝে মিলে একটি সমকোণী ত্রিভুজ তৈরি হয় যার অতিভুজ $20$ মিটার এবং লম্ব $16$ মিটার।`,
          String.raw`মনে করি, তখন মইয়ের গোড়া দেওয়াল থেকে $x$ মিটার দূরে।`,
          String.raw`$$x^{2}=(20)^{2}-(16)^{2}$$`,
          String.raw`$$=400-256=144$$`,
          String.raw`$$\therefore\; x=12$$`,
          String.raw`মইয়ের গোড়া প্রথমে দেওয়াল ঘেঁষে ছিল, তাই একে $12$ মিটার সরাতে হবে।`,
        ],
        answer: String.raw`$12$ মিটার`,
      },
    },
    {
      id: 3,
      figure: "161-p3",
      question: String.raw`একটি সমদ্বিবাহু ত্রিভুজের পরিসীমা $16$ মিটার। এর সমান সমান বাহুর দৈর্ঘ্য ভূমির $\dfrac{5}{6}$ অংশ হলে, ত্রিভুজটির ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ভূমির দৈর্ঘ্য $b$ মিটার এবং সমান সমান বাহুর দৈর্ঘ্য $a=\dfrac{5}{6}b$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$2a+b=16$$`,
          String.raw`$$\text{or, } 2\times\frac{5}{6}b+b=16$$`,
          String.raw`$$\text{or, }\frac{5b}{3}+b=16$$`,
          String.raw`$$\text{or, }\frac{8b}{3}=16$$`,
          String.raw`$$\therefore\; b=6$$`,
          String.raw`$$\therefore\; a=\frac{5}{6}\times 6=5$$`,
          String.raw`$$A=\frac{b}{4}\sqrt{4a^{2}-b^{2}}=\frac{6}{4}\sqrt{4(5)^{2}-(6)^{2}}$$`,
          String.raw`$$=\frac{3}{2}\sqrt{100-36}=\frac{3}{2}\times 8=12$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $12$ বর্গমিটার।`,
        ],
        answer: String.raw`$12$ বর্গমিটার`,
      },
    },
    {
      id: 4,
      figure: "161-p4",
      question: String.raw`একটি ত্রিভুজের দুইটি বাহুর দৈর্ঘ্য $25$ সে.মি., $27$ সে.মি. এবং পরিসীমা $84$ সে.মি.। ত্রিভুজটির ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $a=25$ সে.মি., $b=27$ সে.মি. এবং তৃতীয় বাহু $c$ সে.মি.।`,
          String.raw`$$a+b+c=84$$`,
          String.raw`$$\text{or, } c=84-(25+27)=32$$`,
          String.raw`$$s=\frac{a+b+c}{2}=\frac{84}{2}=42$$`,
          String.raw`$$A=\sqrt{s(s-a)(s-b)(s-c)}$$`,
          String.raw`$$=\sqrt{42(42-25)(42-27)(42-32)}$$`,
          String.raw`$$=\sqrt{42\times 17\times 15\times 10}=\sqrt{107100}$$`,
          String.raw`$$=30\sqrt{119}=327.26$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $327.26$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$327.26$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    {
      id: 5,
      figure: "161-p5",
      question: String.raw`একটি সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য $2$ মিটার বাড়ালে এর ক্ষেত্রফল $6\sqrt{3}$ বর্গমিটার বেড়ে যায়। ত্রিভুজটির বাহুর দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য $a$ মিটার।`,
          String.raw`তাহলে ক্ষেত্রফল $\dfrac{\sqrt{3}}{4}a^{2}$ বর্গমিটার, আর বাহু $2$ মিটার বাড়ালে ক্ষেত্রফল $\dfrac{\sqrt{3}}{4}(a+2)^{2}$ বর্গমিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{\sqrt{3}}{4}(a+2)^{2}-\frac{\sqrt{3}}{4}a^{2}=6\sqrt{3}$$`,
          String.raw`$$\text{or, }(a+2)^{2}-a^{2}=24$$`,
          String.raw`[উভয় পক্ষকে $\dfrac{\sqrt{3}}{4}$ দ্বারা ভাগ করে]`,
          String.raw`$$\text{or, } a^{2}+4a+4-a^{2}=24$$`,
          String.raw`$$\text{or, } 4a=20$$`,
          String.raw`$$\therefore\; a=5$$`,
          String.raw`নির্ণেয় বাহুর দৈর্ঘ্য $5$ মিটার।`,
        ],
        answer: String.raw`$5$ মিটার`,
      },
    },
    {
      id: 6,
      figure: "161-p6",
      question: String.raw`একটি ত্রিভুজের দুই বাহুর দৈর্ঘ্য যথাক্রমে $26$ মিটার, $28$ মিটার এবং ক্ষেত্রফল $182$ বর্গমিটার হলে, বাহুদ্বয়ের অন্তর্ভুক্ত কোণ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বাহুদ্বয় $a=26$ মিটার ও $b=28$ মিটার এবং এদের অন্তর্ভুক্ত কোণ $\theta$।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{1}{2}ab\sin\theta=182$$`,
          String.raw`$$\text{or, }\frac{1}{2}\times 26\times 28\times\sin\theta=182$$`,
          String.raw`$$\text{or, } 364\sin\theta=182$$`,
          String.raw`$$\text{or, }\sin\theta=\frac{182}{364}=\frac{1}{2}$$`,
          String.raw`$$\therefore\;\theta=30^{\circ}$$`,
          String.raw`নির্ণেয় অন্তর্ভুক্ত কোণ $30^{\circ}$।`,
        ],
        answer: String.raw`$30^{\circ}$`,
      },
    },
    {
      id: 7,
      figure: "161-p7",
      question: String.raw`একটি সমদ্বিবাহু ত্রিভুজের সমান সমান বাহুর দৈর্ঘ্য $10$ মিটার এবং ক্ষেত্রফল $48$ বর্গমিটার হলে, ভূমির দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমান সমান বাহুর দৈর্ঘ্য $a=10$ মিটার এবং ভূমির দৈর্ঘ্য $b$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{b}{4}\sqrt{4a^{2}-b^{2}}=48$$`,
          String.raw`$$\text{or, }\frac{b}{4}\sqrt{4(10)^{2}-b^{2}}=48$$`,
          String.raw`$$\text{or, } b\sqrt{400-b^{2}}=192$$`,
          String.raw`$$\text{or, } b^{2}\left(400-b^{2}\right)=36864$$`,
          String.raw`[বর্গ করে]`,
          String.raw`$$\text{or, }\left(b^{2}\right)^{2}-400b^{2}+36864=0$$`,
          String.raw`$$\text{or, }\left(b^{2}\right)^{2}-256b^{2}-144b^{2}+36864=0$$`,
          String.raw`$$\text{or, }\left(b^{2}-256\right)\left(b^{2}-144\right)=0$$`,
          String.raw`$$\therefore\; b^{2}=256\qquad\text{or}\qquad b^{2}=144$$`,
          String.raw`$$\therefore\; b=16\qquad\text{or}\qquad b=12$$`,
          String.raw`দুইটি মানই গ্রহণযোগ্য, কারণ উভয় ক্ষেত্রেই $b<2a$ — অর্থাৎ ত্রিভুজটি গঠিত হয়।`,
          String.raw`নির্ণেয় ভূমির দৈর্ঘ্য $12$ মিটার বা $16$ মিটার।`,
        ],
        answer: String.raw`$12$ মিটার বা $16$ মিটার`,
      },
    },
    {
      id: 8,
      figure: "161-p8",
      question: String.raw`একটি নির্দিষ্ট স্থান থেকে দুইটি রাস্তা পরস্পর $135^{\circ}$ কোণ করে দুই দিকে চলে গেছে। দুই জন লোক ঐ নির্দিষ্ট স্থান থেকে যথাক্রমে ঘণ্টায় $7$ কিলোমিটার ও ঘণ্টায় $5$ কিলোমিটার বেগে বিপরীত মুখে রওনা হলো। $4$ ঘণ্টা পর তাদের মধ্যে সরাসরি দূরত্ব নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $A$ স্থান থেকে রওনা হয়ে $4$ ঘণ্টা পর তারা যথাক্রমে $B$ ও $C$ স্থানে পৌঁছালো; তাহলে নির্ণেয় দূরত্ব $BC$।`,
          String.raw`$C$ থেকে $BA$-এর বর্ধিতাংশের উপর $CD$ লম্ব টানি।`,
          String.raw`$$AB=4\times 7=28,\qquad AC=4\times 5=20,\qquad\angle BAC=135^{\circ}$$`,
          String.raw`$$\therefore\;\angle DAC=180^{\circ}-135^{\circ}=45^{\circ}$$`,
          String.raw`সমকোণী $\triangle ACD$ থেকে পাই,`,
          String.raw`$$CD=AC\sin 45^{\circ}=20\times\frac{1}{\sqrt{2}}=10\sqrt{2}$$`,
          String.raw`$$AD=AC\cos 45^{\circ}=20\times\frac{1}{\sqrt{2}}=10\sqrt{2}$$`,
          String.raw`আবার, সমকোণী $\triangle BCD$ থেকে পাই,`,
          String.raw`$$BC^{2}=BD^{2}+CD^{2}=(BA+AD)^{2}+CD^{2}$$`,
          String.raw`$$=\left(28+10\sqrt{2}\right)^{2}+\left(10\sqrt{2}\right)^{2}$$`,
          String.raw`$$=784+560\sqrt{2}+200+200$$`,
          String.raw`$$=1184+560\sqrt{2}=1975.96$$`,
          String.raw`$$\therefore\; BC=44.45$$`,
          String.raw`নির্ণেয় দূরত্ব $44.45$ কিলোমিটার (প্রায়)।`,
          String.raw`[বইয়ের উত্তরপত্রে $44.44$ কিলোমিটার ছাপা হয়েছে; মধ্যবর্তী ধাপে বেশি দশমিক ঘর রাখলে সঠিক মান দাঁড়ায় $44.45$ কিলোমিটার।]`,
        ],
        answer: String.raw`$44.45$ কিলোমিটার (প্রায়)`,
      },
    },
    {
      id: 9,
      figure: "161-p9",
      question: String.raw`একটি সমবাহু ত্রিভুজের অভ্যন্তরস্থ একটি বিন্দু থেকে তিনটি বাহুর উপর অঙ্কিত লম্বের দৈর্ঘ্য যথাক্রমে $6$ সে.মি., $7$ সে.মি. ও $8$ সে.মি.। ত্রিভুজটির বাহুর দৈর্ঘ্য ও ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য $a$ সে.মি. এবং ক্ষেত্রফল $A$ বর্গ সে.মি.।`,
          String.raw`অভ্যন্তরস্থ বিন্দুটিকে তিনটি শীর্ষের সঙ্গে যোগ করলে ত্রিভুজটি তিনটি ত্রিভুজে বিভক্ত হয়, যাদের ভূমি প্রতিটি $a$ এবং উচ্চতা যথাক্রমে $6$, $7$ ও $8$ সে.মি.।`,
          String.raw`$$A=\frac{1}{2}a\cdot 6+\frac{1}{2}a\cdot 7+\frac{1}{2}a\cdot 8$$`,
          String.raw`$$=\frac{1}{2}a(6+7+8)=\frac{21a}{2}$$`,
          String.raw`আবার, সমবাহু ত্রিভুজের ক্ষেত্রফলের সূত্র থেকে পাই,`,
          String.raw`$$A=\frac{\sqrt{3}}{4}a^{2}$$`,
          String.raw`$$\therefore\;\frac{\sqrt{3}}{4}a^{2}=\frac{21a}{2}$$`,
          String.raw`$$\text{or, }\frac{\sqrt{3}}{4}a=\frac{21}{2}$$`,
          String.raw`$$\text{or, } a=\frac{42}{\sqrt{3}}=14\sqrt{3}=24.249$$`,
          String.raw`$$A=\frac{\sqrt{3}}{4}\left(14\sqrt{3}\right)^{2}=\frac{\sqrt{3}}{4}\times 588=147\sqrt{3}=254.611$$`,
          String.raw`নির্ণেয় বাহুর দৈর্ঘ্য $24.249$ সে.মি. (প্রায়) এবং ক্ষেত্রফল $254.611$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`বাহু $24.249$ সে.মি. (প্রায়), ক্ষেত্রফল $254.611$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    {
      id: 10,
      figure: "161-p10",
      question: String.raw`একটি সমকোণী ত্রিভুজের লম্ব ভূমির $\dfrac{11}{12}$ অংশ থেকে $6$ সে.মি. কম এবং অতিভুজ ভূমির $\dfrac{4}{3}$ অংশ থেকে $3$ সে.মি. কম।`,
      parts: [
        {
          label: "ক",
          question: String.raw`ভূমি $x$ হলে ত্রিভুজটির ক্ষেত্রফল $x$ এর মাধ্যমে প্রকাশ করো।`,
          solution: {
            steps: [
              String.raw`ভূমি $x$ সে.মি. ধরলে প্রশ্নানুসারে লম্ব $\left(\dfrac{11}{12}x-6\right)$ সে.মি.।`,
              String.raw`সমকোণী ত্রিভুজে লম্ব ও ভূমিই সমকোণ সংলগ্ন বাহুদ্বয়, তাই এদের একটিকে ভূমি ধরলে অন্যটিই উচ্চতা।`,
              String.raw`$$A=\frac{1}{2}\times x\times\left(\frac{11}{12}x-6\right)$$`,
              String.raw`$$=\frac{11x^{2}}{24}-3x$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $\left(\dfrac{11x^{2}}{24}-3x\right)$ বর্গ সে.মি.।`,
            ],
            answer: String.raw`$A=\dfrac{11x^{2}}{24}-3x$ বর্গ সে.মি.`,
          },
        },
        {
          label: "খ",
          question: String.raw`ভূমির দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`ভূমি $x$, লম্ব $\dfrac{11}{12}x-6$ এবং অতিভুজ $\dfrac{4}{3}x-3$।`,
              String.raw`পিথাগোরাসের সূত্রানুসারে,`,
              String.raw`$$x^{2}+\left(\frac{11}{12}x-6\right)^{2}=\left(\frac{4}{3}x-3\right)^{2}$$`,
              String.raw`$$\text{or, } x^{2}+\frac{121}{144}x^{2}-11x+36=\frac{16}{9}x^{2}-8x+9$$`,
              String.raw`$$\text{or, } 144x^{2}+121x^{2}-1584x+5184=256x^{2}-1152x+1296$$`,
              String.raw`[উভয় পক্ষকে $144$ দ্বারা গুণ করে]`,
              String.raw`$$\text{or, } 9x^{2}-432x+3888=0$$`,
              String.raw`$$\text{or, } x^{2}-48x+432=0$$`,
              String.raw`$$\text{or, } x^{2}-36x-12x+432=0$$`,
              String.raw`$$\text{or, }(x-36)(x-12)=0$$`,
              String.raw`$$\therefore\; x=36\qquad\text{or}\qquad x=12$$`,
              String.raw`যাচাই: $x=36$ হলে লম্ব $27$, অতিভুজ $45$ এবং $(36)^{2}+(27)^{2}=(45)^{2}$; আবার $x=12$ হলে লম্ব $5$, অতিভুজ $13$ এবং $(12)^{2}+(5)^{2}=(13)^{2}$।`,
              String.raw`তাই দুইটি মানই গ্রহণযোগ্য।`,
            ],
            answer: String.raw`ভূমি $12$ সে.মি. অথবা $36$ সে.মি.`,
          },
        },
        {
          label: "গ",
          figure: "161-p10-c",
          question: String.raw`ত্রিভুজটির ভূমি $12$ সে.মি. হলে এর পরিসীমার সমান পরিসীমাবিশিষ্ট সমবাহু ত্রিভুজের ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`ভূমি $12$ সে.মি. হলে,`,
              String.raw`$$p=\frac{11}{12}\times 12-6=5,\qquad h=\frac{4}{3}\times 12-3=13$$`,
              String.raw`এখানে $p$ লম্ব ও $h$ অতিভুজ, তাই ত্রিভুজটির পরিসীমা,`,
              String.raw`$$12+5+13=30$$`,
              String.raw`মনে করি, সমবাহু ত্রিভুজটির প্রত্যেক বাহুর দৈর্ঘ্য $a$ সে.মি.।`,
              String.raw`$$3a=30$$`,
              String.raw`$$\therefore\; a=10$$`,
              String.raw`$$A=\frac{\sqrt{3}}{4}a^{2}=\frac{\sqrt{3}}{4}\times 100=25\sqrt{3}=43.30$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $25\sqrt{3}$ অর্থাৎ $43.30$ বর্গ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$25\sqrt{3}\approx 43.30$ বর্গ সে.মি. (প্রায়)`,
          },
        },
      ],
    },
  ],
};

const exercise162: Exercise = {
  id: "16.2",
  bnId: "অনুশীলনী ১৬.২",
  title: "চতুর্ভুজ ও সুষম বহুভুজক্ষেত্রের ক্ষেত্রফল",
  bookPages: "৩১০ – ৩১২",
  formulas: [
    {
      title: "আয়ত ও বর্গক্ষেত্র",
      formulas: [
        {
          statement: String.raw`$$A=ab,\qquad s=2(a+b),\qquad d=\sqrt{a^{2}+b^{2}}$$`,
          note: String.raw`আয়তক্ষেত্রের দৈর্ঘ্য $a$ ও প্রস্থ $b$ হলে। কর্ণ আয়তক্ষেত্রটিকে দুইটি সমান সমকোণী ত্রিভুজে ভাগ করে বলেই $d$-এর সূত্রটি পিথাগোরাস থেকে আসে।`,
        },
        {
          statement: String.raw`$$A=a^{2},\qquad s=4a,\qquad d=\sqrt{2}\,a$$`,
          note: String.raw`বর্গক্ষেত্রের প্রতি বাহু $a$ হলে — আয়তক্ষেত্রের সূত্রগুলোতেই $b=a$ বসানো।`,
        },
      ],
    },
    {
      title: "সামান্তরিক, রম্বস ও ট্রাপিজিয়াম",
      formulas: [
        {
          statement: String.raw`$$A=bh$$`,
          note: String.raw`সামান্তরিকক্ষেত্রের ভূমি $b$ ও উচ্চতা $h$ হলে। কর্ণ একে দুইটি সর্বসম ত্রিভুজে ভাগ করে, তাই $A=2\times\frac{1}{2}bh$।`,
        },
        {
          statement: String.raw`$$A=dh$$`,
          note: String.raw`সামান্তরিকের একটি কর্ণ $d$ এবং সেই কর্ণের বিপরীত কৌণিক বিন্দু থেকে কর্ণের উপর অঙ্কিত লম্ব $h$ হলে।`,
        },
        {
          statement: String.raw`$$A=\frac{1}{2}d_{1}d_{2}$$`,
          note: String.raw`রম্বসের কর্ণদ্বয় $d_{1}$ ও $d_{2}$ হলে। রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে, তাই বাহু $a=\sqrt{\left(\frac{d_{1}}{2}\right)^{2}+\left(\frac{d_{2}}{2}\right)^{2}}$।`,
        },
        {
          statement: String.raw`$$A=\frac{h(a+b)}{2}$$`,
          note: String.raw`ট্রাপিজিয়ামের সমান্তরাল বাহু দুইটি $a$ ও $b$ এবং এদের মধ্যবর্তী লম্ব দূরত্ব $h$ হলে।`,
        },
      ],
    },
    {
      title: "সুষম বহুভুজ",
      formulas: [
        {
          statement: String.raw`$$A=\frac{na^{2}}{4}\cot\frac{180^{\circ}}{n}$$`,
          note: String.raw`$n$ সংখ্যক বাহুবিশিষ্ট সুষম বহুভুজের প্রতি বাহু $a$ হলে। কেন্দ্র থেকে শীর্ষগুলো যোগ করলে $n$ টি সর্বসম সমদ্বিবাহু ত্রিভুজ পাওয়া যায় — সূত্রটি তারই যোগফল।`,
        },
        {
          statement: String.raw`$$A=\frac{n}{2}R^{2}\sin\frac{360^{\circ}}{n}$$`,
          note: String.raw`একই বহুভুজের কেন্দ্র থেকে কৌণিক বিন্দুর দূরত্ব $R$ দেওয়া থাকলে। প্রতিটি ত্রিভুজের দুই বাহু $R$ ও অন্তর্ভুক্ত কোণ $\dfrac{360^{\circ}}{n}$, তাই $\frac{1}{2}R^{2}\sin\frac{360^{\circ}}{n}$।`,
        },
      ],
    },
    {
      title: "পাড় ও রাস্তার সমস্যা",
      formulas: [
        {
          statement: String.raw`$$A_{\text{road}}=A_{\text{outer}}-A_{\text{inner}}$$`,
          note: String.raw`রাস্তা বা পাড় সব সময় দুইটি আয়ত/বর্গক্ষেত্রের ক্ষেত্রফলের অন্তর। রাস্তা ভিতরে হলে ভিতরের বাহু $=$ বাহু $-\,2\times$ প্রস্থ; বাইরে হলে বাইরের বাহু $=$ বাহু $+\,2\times$ প্রস্থ।`,
        },
        {
          statement: String.raw`$$1\ \text{hectare}=10000\ \text{m}^{2}$$`,
          note: String.raw`অর্থাৎ $1$ হেক্টর $=10000$ বর্গমিটার।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৮ — book page ৩০৩.
    {
      id: 8,
      figure: "162-ex8",
      question: String.raw`একটি আয়তাকার ঘরের দৈর্ঘ্য প্রস্থের $\dfrac{3}{2}$ গুণ। এর ক্ষেত্রফল $384$ বর্গমিটার হলে, পরিসীমা ও কর্ণের দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তাকার ঘরের প্রস্থ $x$ মিটার।`,
          String.raw`তাহলে ঘরের দৈর্ঘ্য $\dfrac{3}{2}x$ মিটার এবং ক্ষেত্রফল $\dfrac{3}{2}x\times x=\dfrac{3}{2}x^{2}$ বর্গমিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{3}{2}x^{2}=384$$`,
          String.raw`$$\text{or, } 3x^{2}=768$$`,
          String.raw`$$\text{or, } x^{2}=256$$`,
          String.raw`$$\therefore\; x=16$$`,
          String.raw`অর্থাৎ ঘরের দৈর্ঘ্য $\dfrac{3}{2}\times 16=24$ মিটার এবং প্রস্থ $16$ মিটার।`,
          String.raw`$$s=2(24+16)=80$$`,
          String.raw`$$d=\sqrt{(24)^{2}+(16)^{2}}=\sqrt{832}=28.84$$`,
          String.raw`নির্ণেয় পরিসীমা $80$ মিটার এবং কর্ণের দৈর্ঘ্য $28.84$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`পরিসীমা $80$ মিটার, কর্ণ $28.84$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ৯ — book pages ৩০৩-৩০৪.
    {
      id: 9,
      figure: "162-ex9",
      question: String.raw`একটি আয়তক্ষেত্রের ক্ষেত্রফল $2000$ বর্গমিটার। যদি এর দৈর্ঘ্য $10$ মিটার কম হতো তাহলে এটি একটি বর্গক্ষেত্র হতো। আয়তক্ষেত্রটির দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তক্ষেত্রটির দৈর্ঘ্য $x$ মিটার এবং প্রস্থ $y$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$xy=2000\qquad\cdots(1)$$`,
          String.raw`$$x-10=y\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$-এ $y=x-10$ বসিয়ে পাই,`,
          String.raw`$$x(x-10)=2000$$`,
          String.raw`$$\text{or, } x^{2}-10x-2000=0$$`,
          String.raw`$$\text{or, } x^{2}-50x+40x-2000=0$$`,
          String.raw`$$\text{or, }(x-50)(x+40)=0$$`,
          String.raw`$$\therefore\; x=50\qquad\text{or}\qquad x=-40$$`,
          String.raw`দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x=50$।`,
          String.raw`$$\therefore\; y=50-10=40$$`,
          String.raw`আয়তক্ষেত্রটির দৈর্ঘ্য $50$ মিটার এবং প্রস্থ $40$ মিটার।`,
        ],
        answer: String.raw`দৈর্ঘ্য $50$ মিটার, প্রস্থ $40$ মিটার`,
      },
    },
    // উদাহরণ ১০ — book page ৩০৪.
    {
      id: 10,
      figure: "162-ex10",
      question: String.raw`বর্গাকার একটি মাঠের ভিতরে চারদিকে $4$ মিটার চওড়া একটি রাস্তা আছে। যদি রাস্তার ক্ষেত্রফল $1$ হেক্টর হয়, তবে রাস্তা বাদে মাঠের ভিতরের ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্গাকার মাঠের বাহুর দৈর্ঘ্য $x$ মিটার; তাহলে এর ক্ষেত্রফল $x^{2}$ বর্গমিটার।`,
          String.raw`রাস্তাটি ভিতরে চারদিকে $4$ মিটার চওড়া, তাই রাস্তা বাদে ভিতরের বর্গের বাহু $(x-2\times 4)$ অর্থাৎ $(x-8)$ মিটার।`,
          String.raw`সুতরাং রাস্তার ক্ষেত্রফল,`,
          String.raw`$$A_{r}=x^{2}-(x-8)^{2}$$`,
          String.raw`আমরা জানি, $1$ হেক্টর $=10000$ বর্গমিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$x^{2}-(x-8)^{2}=10000$$`,
          String.raw`$$\text{or, } x^{2}-x^{2}+16x-64=10000$$`,
          String.raw`$$\text{or, } 16x=10064$$`,
          String.raw`$$\therefore\; x=629$$`,
          String.raw`$$\therefore\;(x-8)^{2}=(629-8)^{2}=(621)^{2}=385641$$`,
          String.raw`অর্থাৎ রাস্তা বাদে ভিতরের ক্ষেত্রফল $385641$ বর্গমিটার $=38.56$ হেক্টর (প্রায়)।`,
        ],
        answer: String.raw`$385641$ বর্গমিটার অর্থাৎ $38.56$ হেক্টর (প্রায়)`,
      },
    },
    // উদাহরণ ১১ — book page ৩০৪.
    {
      id: 11,
      figure: "162-ex11",
      question: String.raw`একটি সামান্তরিকক্ষেত্রের ক্ষেত্রফল $120$ বর্গ সে.মি. এবং একটি কর্ণ $24$ সে.মি.। কর্ণটির বিপরীত কৌণিক বিন্দু থেকে উক্ত কর্ণের উপর অঙ্কিত লম্বের দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সামান্তরিকক্ষেত্রের একটি কর্ণ $d=24$ সে.মি. এবং এর বিপরীত কৌণিক বিন্দু থেকে কর্ণের উপর অঙ্কিত লম্বের দৈর্ঘ্য $h$ সে.মি.।`,
          String.raw`তাহলে সামান্তরিকক্ষেত্রটির ক্ষেত্রফল $dh$ বর্গ সে.মি.।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$dh=120$$`,
          String.raw`$$\text{or, } h=\frac{120}{d}=\frac{120}{24}=5$$`,
          String.raw`নির্ণেয় লম্বের দৈর্ঘ্য $5$ সে.মি.।`,
        ],
        answer: String.raw`$5$ সে.মি.`,
      },
    },
    // উদাহরণ ১২ — book pages ৩০৪-৩০৫.
    {
      id: 12,
      figure: "162-ex12",
      question: String.raw`একটি সামান্তরিকের বাহুর দৈর্ঘ্য $12$ মিটার ও $8$ মিটার এবং ক্ষুদ্রতম কর্ণটি $10$ মিটার হলে, অপর কর্ণটির দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ সামান্তরিকের $AB=a=12$ মিটার, $AD=c=8$ মিটার এবং কর্ণ $BD=b=10$ মিটার।`,
          String.raw`$D$ ও $C$ থেকে $AB$-এর উপর এবং $AB$-এর বর্ধিতাংশের উপর যথাক্রমে $DF$ ও $CE$ লম্ব টানি।`,
          String.raw`$\triangle ABD$-এর অর্ধপরিসীমা,`,
          String.raw`$$s=\frac{12+10+8}{2}=15$$`,
          String.raw`$$\triangle ABD=\sqrt{s(s-a)(s-b)(s-c)}=\sqrt{15(15-12)(15-10)(15-8)}$$`,
          String.raw`$$=\sqrt{15\times 3\times 5\times 7}=\sqrt{1575}=39.68$$`,
          String.raw`আবার, $\triangle ABD$-এর ক্ষেত্রফল $\dfrac{1}{2}AB\times DF$।`,
          String.raw`$$\text{or, } 39.68=\frac{1}{2}\times 12\times DF$$`,
          String.raw`$$\therefore\; DF=6.61$$`,
          String.raw`এখন $\triangle BCE$ সমকোণী এবং $BC=AD$, $CE=DF$।`,
          String.raw`$$BE^{2}=BC^{2}-CE^{2}=(8)^{2}-(6.61)^{2}=20.31$$`,
          String.raw`$$\therefore\; BE=4.5$$`,
          String.raw`$$\therefore\; AE=AB+BE=12+4.5=16.5$$`,
          String.raw`সমকোণী $\triangle ACE$ থেকে পাই,`,
          String.raw`$$AC^{2}=AE^{2}+CE^{2}=(16.5)^{2}+(6.61)^{2}=315.94$$`,
          String.raw`$$\therefore\; AC=17.77$$`,
          String.raw`নির্ণেয় কর্ণের দৈর্ঘ্য $17.77$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$17.77$ মিটার (প্রায়)`,
      },
    },
    // উদাহরণ ১৩ — book pages ৩০৫-৩০৬.
    {
      id: 13,
      figure: "162-ex13",
      question: String.raw`একটি রম্বসের একটি কর্ণ $10$ মিটার এবং ক্ষেত্রফল $120$ বর্গমিটার হলে, অপর কর্ণ এবং পরিসীমা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ রম্বসের কর্ণ $BD=d_{1}=10$ মিটার এবং অপর কর্ণ $AC=d_{2}$ মিটার।`,
          String.raw`রম্বসটির ক্ষেত্রফল $\dfrac{1}{2}d_{1}d_{2}$ বর্গমিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{1}{2}d_{1}d_{2}=120$$`,
          String.raw`$$\text{or, } d_{2}=\frac{120\times 2}{10}=24$$`,
          String.raw`আমরা জানি, রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে।`,
          String.raw`$$\therefore\; OD=OB=\frac{10}{2}=5,\qquad OA=OC=\frac{24}{2}=12$$`,
          String.raw`সমকোণী $\triangle AOD$ থেকে পাই,`,
          String.raw`$$AD^{2}=OA^{2}+OD^{2}=(12)^{2}+(5)^{2}=169$$`,
          String.raw`$$\therefore\; AD=13$$`,
          String.raw`সুতরাং রম্বসের পরিসীমা,`,
          String.raw`$$s=4\times 13=52$$`,
          String.raw`নির্ণেয় কর্ণের দৈর্ঘ্য $24$ মিটার এবং পরিসীমা $52$ মিটার।`,
        ],
        answer: String.raw`কর্ণ $24$ মিটার, পরিসীমা $52$ মিটার`,
      },
    },
    // উদাহরণ ১৪ — book page ৩০৬.
    {
      id: 14,
      figure: "162-ex14",
      question: String.raw`একটি ট্রাপিজিয়ামের সমান্তরাল বাহুদ্বয়ের দৈর্ঘ্য যথাক্রমে $91$ সে.মি. ও $51$ সে.মি. এবং অপর বাহু দুইটির দৈর্ঘ্য যথাক্রমে $37$ সে.মি. ও $13$ সে.মি.। ট্রাপিজিয়ামটির ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ ট্রাপিজিয়ামের $AB=91$ সে.মি., $CD=51$ সে.মি., $AD=13$ সে.মি. ও $BC=37$ সে.মি.।`,
          String.raw`$D$ ও $C$ থেকে $AB$-এর উপর যথাক্রমে $DE$ ও $CF$ লম্ব টানি; তাহলে $CDEF$ একটি আয়তক্ষেত্র এবং $EF=CD=51$ সে.মি.।`,
          String.raw`ধরি, $AE=x$ এবং $DE=CF=h$।`,
          String.raw`$$\therefore\; BF=AB-(AE+EF)=91-(x+51)=40-x$$`,
          String.raw`সমকোণী $\triangle ADE$ থেকে পাই,`,
          String.raw`$$x^{2}+h^{2}=(13)^{2}=169\qquad\cdots(1)$$`,
          String.raw`আবার, সমকোণী $\triangle BCF$ থেকে পাই,`,
          String.raw`$$(40-x)^{2}+h^{2}=(37)^{2}$$`,
          String.raw`$$\text{or, } 1600-80x+x^{2}+h^{2}=1369$$`,
          String.raw`$$\text{or, } 1600-80x+169=1369$$`,
          String.raw`$$\text{or, } 80x=400$$`,
          String.raw`$$\therefore\; x=5$$`,
          String.raw`সমীকরণ $(1)$-এ $x$-এর মান বসিয়ে পাই,`,
          String.raw`$$(5)^{2}+h^{2}=169$$`,
          String.raw`$$\text{or, } h^{2}=144$$`,
          String.raw`$$\therefore\; h=12$$`,
          String.raw`$$A=\frac{1}{2}(AB+CD)\cdot h=\frac{1}{2}(91+51)\times 12=71\times 12=852$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $852$ বর্গ সে.মি.।`,
        ],
        answer: String.raw`$852$ বর্গ সে.মি.`,
      },
    },
    // উদাহরণ ১৫ — book page ৩০৮.
    {
      id: 15,
      figure: "162-ex15",
      question: String.raw`একটি সুষম পঞ্চভুজের প্রতিবাহুর দৈর্ঘ্য $4$ সে.মি. হলে, এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সুষম পঞ্চভুজের বাহুর দৈর্ঘ্য $a=4$ সে.মি. এবং বাহুর সংখ্যা $n=5$।`,
          String.raw`$$A=\frac{na^{2}}{4}\cot\frac{180^{\circ}}{n}$$`,
          String.raw`$$=\frac{5\times (4)^{2}}{4}\cot\frac{180^{\circ}}{5}$$`,
          String.raw`$$=20\cot 36^{\circ}$$`,
          String.raw`$$=20\times 1.376=27.528$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $27.528$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$27.528$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    // উদাহরণ ১৬ — book page ৩০৮.
    {
      id: 16,
      figure: "162-ex16",
      question: String.raw`একটি সুষম ষড়ভুজের কেন্দ্র থেকে কৌণিক বিন্দুর দূরত্ব $4$ মিটার হলে, এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCDEF$ একটি সুষম ষড়ভুজ। এর কেন্দ্র $O$ থেকে শীর্ষবিন্দুগুলো যোগ করলে $6$ টি সমান ক্ষেত্রবিশিষ্ট ত্রিভুজ উৎপন্ন হয়।`,
          String.raw`$$\therefore\;\angle COD=\frac{360^{\circ}}{6}=60^{\circ}$$`,
          String.raw`কেন্দ্র থেকে শীর্ষবিন্দুর দূরত্ব $a=4$ মিটার।`,
          String.raw`$$\triangle COD=\frac{1}{2}\cdot a\cdot a\sin 60^{\circ}=\frac{\sqrt{3}}{4}\times (4)^{2}=4\sqrt{3}$$`,
          String.raw`$$A=6\times\triangle COD=6\times 4\sqrt{3}=24\sqrt{3}$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $24\sqrt{3}$ বর্গমিটার।`,
        ],
        answer: String.raw`$24\sqrt{3}$ বর্গমিটার`,
      },
    },
    // উদাহরণ ১৭ — book pages ৩০৯-৩১০.
    {
      id: 17,
      figure: "162-ex17",
      question: String.raw`চিত্রে ক্ষেত্রটি $ABCD$ আয়তক্ষেত্র ও $ADE$ সমদ্বিবাহু ত্রিভুজক্ষেত্রে বিভক্ত, যেখানে $BC=50$ সে.মি., $AB=14$ সে.মি., $AD=AE=50$ সে.মি. এবং $\angle DAE=73.74^{\circ}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`আয়তক্ষেত্রটির কর্ণের দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`চিত্র অনুসারে $ABCD$ আয়তক্ষেত্রের দৈর্ঘ্য $50$ সে.মি. ও প্রস্থ $14$ সে.মি.।`,
              String.raw`$$d=\sqrt{(50)^{2}+(14)^{2}}=\sqrt{2500+196}=\sqrt{2696}=51.92$$`,
              String.raw`নির্ণেয় কর্ণের দৈর্ঘ্য $51.92$ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$51.92$ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "খ",
          question: String.raw`ক্ষেত্রটির ক্ষেত্রফল পূর্ণসংখ্যায় নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$ABCD=50\times 14=700$$`,
              String.raw`$$\triangle ADE=\frac{1}{2}AD\cdot AE\cdot\sin\angle DAE=\frac{1}{2}\times 50\times 50\times\sin 73.74^{\circ}$$`,
              String.raw`$$=25\times 50\times 0.960001=1200$$`,
              String.raw`$$\therefore\;\text{total}=700+1200=1900$$`,
              String.raw`সম্পূর্ণ ক্ষেত্রের ক্ষেত্রফল $1900$ বর্গ সে.মি.।`,
            ],
            answer: String.raw`$1900$ বর্গ সে.মি.`,
          },
        },
        {
          label: "গ",
          question: String.raw`সমদ্বিবাহু ত্রিভুজের গ্রহণযোগ্য পরিসীমা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$\triangle ADE$-এ $AD=AE=50$ সে.মি. $=a$ (ধরি) এবং $DE=b$ (ধরি)।`,
              String.raw`$$\therefore\;\triangle ADE=\frac{b}{4}\sqrt{4a^{2}-b^{2}}$$`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$\frac{b}{4}\sqrt{4a^{2}-b^{2}}=1200$$`,
              String.raw`$$\text{or, } b\sqrt{4(50)^{2}-b^{2}}=4800$$`,
              String.raw`$$\text{or, } b^{2}\left(10000-b^{2}\right)=23040000$$`,
              String.raw`[বর্গ করে]`,
              String.raw`$$\text{or, } b^{4}-10000b^{2}+23040000=0$$`,
              String.raw`$$\text{or, } b^{4}-6400b^{2}-3600b^{2}+23040000=0$$`,
              String.raw`$$\text{or, }\left(b^{2}-6400\right)\left(b^{2}-3600\right)=0$$`,
              String.raw`$$\therefore\; b=80\qquad\text{or}\qquad b=60$$`,
              String.raw`$b=80$ হলে $\dfrac{1}{2}\times 50\times 80\times\sin\angle ADE=1200$, অর্থাৎ $\sin\angle ADE=0.6$ এবং $\angle ADE=36.87^{\circ}$ (প্রায়)।`,
              String.raw`তখন $\triangle ADE$-এর তিন কোণের সমষ্টি $73.74^{\circ}+36.87^{\circ}+36.87^{\circ}=147.48^{\circ}$, যা $180^{\circ}$ নয়। সুতরাং $b\neq 80$।`,
              String.raw`$b=60$ হলে $\dfrac{1}{2}\times 50\times 60\times\sin\angle ADE=1200$, অর্থাৎ $\sin\angle ADE=0.8$ এবং $\angle ADE=53.13^{\circ}$ (প্রায়)।`,
              String.raw`তখন তিন কোণের সমষ্টি $73.74^{\circ}+53.13^{\circ}+53.13^{\circ}=180^{\circ}$। সুতরাং $b=60$।`,
              String.raw`$$\therefore\;\text{perimeter}=50+50+60=160$$`,
              String.raw`নির্ণেয় পরিসীমা $160$ সে.মি.।`,
            ],
            answer: String.raw`$160$ সে.মি.`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      figure: "162-p1",
      question: String.raw`একটি আয়তাকারক্ষেত্রের দৈর্ঘ্য বিস্তারের দ্বিগুণ। এর ক্ষেত্রফল $512$ বর্গমিটার হলে, পরিসীমা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তাকারক্ষেত্রের বিস্তার (প্রস্থ) $x$ মিটার; তাহলে দৈর্ঘ্য $2x$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$2x\times x=512$$`,
          String.raw`$$\text{or, } 2x^{2}=512$$`,
          String.raw`$$\text{or, } x^{2}=256$$`,
          String.raw`$$\therefore\; x=16$$`,
          String.raw`অর্থাৎ প্রস্থ $16$ মিটার এবং দৈর্ঘ্য $2\times 16=32$ মিটার।`,
          String.raw`$$s=2(32+16)=2\times 48=96$$`,
          String.raw`নির্ণেয় পরিসীমা $96$ মিটার।`,
        ],
        answer: String.raw`$96$ মিটার`,
      },
    },
    {
      id: 2,
      figure: "162-p2",
      question: String.raw`একটি জমির দৈর্ঘ্য $80$ মিটার এবং প্রস্থ $60$ মিটার। ঐ জমির মাঝে একটি পুকুর খনন করা হলো। যদি পুকুরের প্রত্যেক পাড়ের বিস্তার $4$ মিটার হয়, তবে পুকুরের পাড়ের ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`জমির ক্ষেত্রফল $=80\times 60=4800$ বর্গমিটার।`,
          String.raw`পাড় চারদিকে $4$ মিটার চওড়া, তাই পুকুরের দৈর্ঘ্য $(80-2\times 4)=72$ মিটার এবং প্রস্থ $(60-2\times 4)=52$ মিটার।`,
          String.raw`$$\therefore\;\text{pond}=72\times 52=3744$$`,
          String.raw`পাড়ের ক্ষেত্রফল $=$ জমির ক্ষেত্রফল $-$ পুকুরের ক্ষেত্রফল।`,
          String.raw`$$=4800-3744=1056$$`,
          String.raw`নির্ণেয় পাড়ের ক্ষেত্রফল $1056$ বর্গমিটার।`,
        ],
        answer: String.raw`$1056$ বর্গমিটার`,
      },
    },
    {
      id: 3,
      figure: "162-p3",
      question: String.raw`একটি বাগানের দৈর্ঘ্য $40$ মিটার এবং প্রস্থ $30$ মিটার। বাগানের ভিতরে সমান পাড় বিশিষ্ট একটি পুকুর আছে। পুকুরের ক্ষেত্রফল বাগানের ক্ষেত্রফলের $\dfrac{1}{2}$ অংশ হলে, পুকুরের দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`বাগানের ক্ষেত্রফল $=40\times 30=1200$ বর্গমিটার।`,
          String.raw`$$\therefore\;\text{pond}=\frac{1}{2}\times 1200=600$$`,
          String.raw`মনে করি, পাড়ের বিস্তার $x$ মিটার; তাহলে পুকুরের দৈর্ঘ্য $(40-2x)$ মিটার ও প্রস্থ $(30-2x)$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$(40-2x)(30-2x)=600$$`,
          String.raw`$$\text{or, } 1200-80x-60x+4x^{2}=600$$`,
          String.raw`$$\text{or, } 4x^{2}-140x+600=0$$`,
          String.raw`$$\text{or, } x^{2}-35x+150=0$$`,
          String.raw`$$\text{or, } x^{2}-30x-5x+150=0$$`,
          String.raw`$$\text{or, }(x-30)(x-5)=0$$`,
          String.raw`$$\therefore\; x=30\qquad\text{or}\qquad x=5$$`,
          String.raw`$x=30$ হলে পুকুরের প্রস্থ $30-60<0$ হয়, যা অসম্ভব। তাই $x=5$।`,
          String.raw`$$\therefore\;\text{length}=40-2\times 5=30,\qquad \text{width}=30-2\times 5=20$$`,
          String.raw`নির্ণেয় পুকুরের দৈর্ঘ্য $30$ মিটার এবং প্রস্থ $20$ মিটার।`,
        ],
        answer: String.raw`দৈর্ঘ্য $30$ মিটার এবং প্রস্থ $20$ মিটার`,
      },
    },
    {
      id: 4,
      figure: "162-p4",
      question: String.raw`একটি বর্গাকার মাঠের বাইরে চারদিকে $5$ মিটার চওড়া একটি রাস্তা আছে। রাস্তার ক্ষেত্রফল $500$ বর্গমিটার হলে, মাঠের ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্গাকার মাঠের বাহুর দৈর্ঘ্য $x$ মিটার; তাহলে এর ক্ষেত্রফল $x^{2}$ বর্গমিটার।`,
          String.raw`রাস্তা বাইরে চারদিকে $5$ মিটার চওড়া, তাই রাস্তাসহ বর্গের বাহু $(x+2\times 5)$ অর্থাৎ $(x+10)$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$(x+10)^{2}-x^{2}=500$$`,
          String.raw`$$\text{or, } x^{2}+20x+100-x^{2}=500$$`,
          String.raw`$$\text{or, } 20x=400$$`,
          String.raw`$$\therefore\; x=20$$`,
          String.raw`$$\therefore\; x^{2}=(20)^{2}=400$$`,
          String.raw`নির্ণেয় মাঠের ক্ষেত্রফল $400$ বর্গমিটার।`,
        ],
        answer: String.raw`$400$ বর্গমিটার`,
      },
    },
    {
      id: 5,
      figure: "162-p5",
      question: String.raw`একটি বর্গক্ষেত্রের পরিসীমা একটি আয়তক্ষেত্রের পরিসীমার সমান। আয়তক্ষেত্রটির দৈর্ঘ্য প্রস্থের তিনগুণ এবং ক্ষেত্রফল $768$ বর্গমিটার। প্রতিটি $40$ সে.মি. বর্গাকার পাথর দিয়ে বর্গক্ষেত্রটি বাঁধতে মোট কতটি পাথর লাগবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তক্ষেত্রের প্রস্থ $x$ মিটার; তাহলে দৈর্ঘ্য $3x$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$3x\times x=768$$`,
          String.raw`$$\text{or, } x^{2}=256$$`,
          String.raw`$$\therefore\; x=16$$`,
          String.raw`অর্থাৎ আয়তক্ষেত্রের দৈর্ঘ্য $48$ মিটার ও প্রস্থ $16$ মিটার।`,
          String.raw`$$\therefore\;\text{perimeter}=2(48+16)=128$$`,
          String.raw`মনে করি, বর্গক্ষেত্রের বাহুর দৈর্ঘ্য $a$ মিটার।`,
          String.raw`$$4a=128$$`,
          String.raw`$$\therefore\; a=32$$`,
          String.raw`$$\therefore\;\text{area}=(32)^{2}=1024$$`,
          String.raw`প্রতিটি পাথরের বাহু $40$ সে.মি. $=0.4$ মিটার, তাই একটি পাথরের ক্ষেত্রফল $(0.4)^{2}=0.16$ বর্গমিটার।`,
          String.raw`$$\therefore\;\text{stones}=\frac{1024}{0.16}=6400$$`,
          String.raw`নির্ণেয় পাথরের সংখ্যা $6400$ টি।`,
        ],
        answer: String.raw`$6400$ টি`,
      },
    },
    {
      id: 6,
      figure: "162-p6",
      question: String.raw`একটি আয়তাকারক্ষেত্রের ক্ষেত্রফল $160$ বর্গমিটার। যদি এর দৈর্ঘ্য $6$ মিটার কম হয়, তবে ক্ষেত্রটি বর্গাকার হয়। আয়তাকারক্ষেত্রের দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তাকারক্ষেত্রের দৈর্ঘ্য $x$ মিটার এবং প্রস্থ $y$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$xy=160\qquad\cdots(1)$$`,
          String.raw`$$x-6=y\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$-এ $y=x-6$ বসিয়ে পাই,`,
          String.raw`$$x(x-6)=160$$`,
          String.raw`$$\text{or, } x^{2}-6x-160=0$$`,
          String.raw`$$\text{or, } x^{2}-16x+10x-160=0$$`,
          String.raw`$$\text{or, }(x-16)(x+10)=0$$`,
          String.raw`$$\therefore\; x=16\qquad\text{or}\qquad x=-10$$`,
          String.raw`দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x=16$।`,
          String.raw`$$\therefore\; y=16-6=10$$`,
          String.raw`নির্ণেয় দৈর্ঘ্য $16$ মিটার এবং প্রস্থ $10$ মিটার।`,
        ],
        answer: String.raw`$16$ মিটার ও $10$ মিটার`,
      },
    },
    {
      id: 7,
      figure: "162-p7",
      question: String.raw`একটি সামান্তরিকের ভূমি উচ্চতার $\dfrac{3}{4}$ অংশ এবং ক্ষেত্রফল $363$ বর্গমিটার হলে, ক্ষেত্রটির ভূমি ও উচ্চতা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সামান্তরিকের উচ্চতা $h$ মিটার; তাহলে ভূমি $b=\dfrac{3}{4}h$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$bh=363$$`,
          String.raw`$$\text{or, }\frac{3}{4}h\times h=363$$`,
          String.raw`$$\text{or, } 3h^{2}=1452$$`,
          String.raw`$$\text{or, } h^{2}=484$$`,
          String.raw`$$\therefore\; h=22$$`,
          String.raw`$$\therefore\; b=\frac{3}{4}\times 22=16.5$$`,
          String.raw`নির্ণেয় ভূমি $16.5$ মিটার এবং উচ্চতা $22$ মিটার।`,
        ],
        answer: String.raw`ভূমি $16.5$ মিটার, উচ্চতা $22$ মিটার`,
      },
    },
    {
      id: 8,
      figure: "162-p8",
      question: String.raw`একটি সামান্তরিকক্ষেত্রের ক্ষেত্রফল একটি বর্গক্ষেত্রের সমান। সামান্তরিকের ভূমি $125$ মিটার এবং উচ্চতা $5$ মিটার হলে, বর্গক্ষেত্রের কর্ণের দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`সামান্তরিকক্ষেত্রের ক্ষেত্রফল,`,
          String.raw`$$bh=125\times 5=625$$`,
          String.raw`মনে করি, বর্গক্ষেত্রের বাহুর দৈর্ঘ্য $a$ মিটার।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$a^{2}=625$$`,
          String.raw`$$\therefore\; a=25$$`,
          String.raw`$$d=\sqrt{2}\,a=\sqrt{2}\times 25=35.35$$`,
          String.raw`নির্ণেয় কর্ণের দৈর্ঘ্য $35.35$ মিটার (প্রায়)।`,
        ],
        answer: String.raw`$35.35$ মিটার (প্রায়)`,
      },
    },
    {
      id: 9,
      figure: "162-p9",
      question: String.raw`একটি সামান্তরিকের বাহুর দৈর্ঘ্য $30$ সে.মি. এবং $26$ সে.মি.। এর ক্ষুদ্রতম কর্ণটি $28$ সে.মি. হলে অপর কর্ণের দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ সামান্তরিকের $AB=a=30$ সে.মি., $AD=c=26$ সে.মি. এবং কর্ণ $BD=b=28$ সে.মি.।`,
          String.raw`$D$ ও $C$ থেকে $AB$-এর উপর এবং $AB$-এর বর্ধিতাংশের উপর যথাক্রমে $DF$ ও $CE$ লম্ব টানি।`,
          String.raw`$\triangle ABD$-এর অর্ধপরিসীমা,`,
          String.raw`$$s=\frac{30+28+26}{2}=42$$`,
          String.raw`$$\triangle ABD=\sqrt{s(s-a)(s-b)(s-c)}=\sqrt{42(42-30)(42-28)(42-26)}$$`,
          String.raw`$$=\sqrt{42\times 12\times 14\times 16}=\sqrt{112896}=336$$`,
          String.raw`আবার, $\triangle ABD$-এর ক্ষেত্রফল $\dfrac{1}{2}AB\times DF$।`,
          String.raw`$$\text{or, } 336=\frac{1}{2}\times 30\times DF$$`,
          String.raw`$$\therefore\; DF=22.4$$`,
          String.raw`এখন $\triangle BCE$ সমকোণী, যেখানে $BC=AD=26$ এবং $CE=DF=22.4$।`,
          String.raw`$$BE^{2}=BC^{2}-CE^{2}=(26)^{2}-(22.4)^{2}=676-501.76=174.24$$`,
          String.raw`$$\therefore\; BE=13.2$$`,
          String.raw`$$\therefore\; AE=AB+BE=30+13.2=43.2$$`,
          String.raw`সমকোণী $\triangle ACE$ থেকে পাই,`,
          String.raw`$$AC^{2}=AE^{2}+CE^{2}=(43.2)^{2}+(22.4)^{2}$$`,
          String.raw`$$=1866.24+501.76=2368$$`,
          String.raw`$$\therefore\; AC=48.66$$`,
          String.raw`নির্ণেয় কর্ণের দৈর্ঘ্য $48.66$ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$48.66$ সে.মি. (প্রায়)`,
      },
    },
    {
      id: 10,
      figure: "162-p10",
      question: String.raw`একটি রম্বসের পরিসীমা $180$ সে.মি. এবং ক্ষুদ্রতম কর্ণটি $54$ সে.মি.। এর অপর কর্ণ এবং ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ রম্বসের প্রতি বাহুর দৈর্ঘ্য $a$ সে.মি. এবং কর্ণদ্বয় $O$ বিন্দুতে ছেদ করে।`,
          String.raw`$$4a=180$$`,
          String.raw`$$\therefore\; a=45$$`,
          String.raw`আমরা জানি, রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে।`,
          String.raw`ধরি, $BD=d_{1}=54$ সে.মি. এবং $AC=d_{2}$ সে.মি.।`,
          String.raw`$$\therefore\; OB=\frac{54}{2}=27,\qquad OA=\frac{d_{2}}{2}$$`,
          String.raw`সমকোণী $\triangle AOB$ থেকে পাই,`,
          String.raw`$$OA^{2}+OB^{2}=AB^{2}$$`,
          String.raw`$$\text{or, } OA^{2}+(27)^{2}=(45)^{2}$$`,
          String.raw`$$\text{or, } OA^{2}=2025-729=1296$$`,
          String.raw`$$\therefore\; OA=36$$`,
          String.raw`$$\therefore\; d_{2}=2\times 36=72$$`,
          String.raw`$$A=\frac{1}{2}d_{1}d_{2}=\frac{1}{2}\times 54\times 72=1944$$`,
          String.raw`নির্ণেয় অপর কর্ণ $72$ সে.মি. এবং ক্ষেত্রফল $1944$ বর্গ সে.মি.।`,
        ],
        answer: String.raw`কর্ণ $72$ সে.মি., ক্ষেত্রফল $1944$ বর্গ সে.মি.`,
      },
    },
    {
      id: 11,
      figure: "162-p11",
      question: String.raw`একটি ট্রাপিজিয়ামের সমান্তরাল বাহু দুইটির দৈর্ঘ্যের অন্তর $8$ সে.মি. এবং এদের লম্ব দূরত্ব $24$ সে.মি.। যদি ট্রাপিজিয়ামের ক্ষেত্রফল $312$ বর্গ সে.মি. হয় তবে বাহু দুইটির দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সমান্তরাল বাহু দুইটির দৈর্ঘ্য $a$ সে.মি. ও $b$ সে.মি., যেখানে $a>b$ এবং লম্ব দূরত্ব $h=24$ সে.মি.।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{h(a+b)}{2}=312$$`,
          String.raw`$$\text{or, }\frac{24(a+b)}{2}=312$$`,
          String.raw`$$\text{or, } 12(a+b)=312$$`,
          String.raw`$$\therefore\; a+b=26\qquad\cdots(1)$$`,
          String.raw`আবার প্রশ্নানুসারে,`,
          String.raw`$$a-b=8\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$ যোগ করে পাই,`,
          String.raw`$$2a=34$$`,
          String.raw`$$\therefore\; a=17$$`,
          String.raw`$$\therefore\; b=26-17=9$$`,
          String.raw`নির্ণেয় বাহু দুইটির দৈর্ঘ্য $17$ সে.মি. ও $9$ সে.মি.।`,
        ],
        answer: String.raw`$17$ সে.মি. ও $9$ সে.মি.`,
      },
    },
    {
      id: 12,
      figure: "162-p12",
      question: String.raw`একটি ট্রাপিজিয়ামের সমান্তরাল বাহুদ্বয়ের দৈর্ঘ্য যথাক্রমে $31$ সে.মি. ও $11$ সে.মি. এবং অপর বাহু দুইটির দৈর্ঘ্য যথাক্রমে $10$ সে.মি. ও $12$ সে.মি.। এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ ট্রাপিজিয়ামের $AB=31$ সে.মি., $CD=11$ সে.মি., $AD=10$ সে.মি. ও $BC=12$ সে.মি.।`,
          String.raw`$D$ ও $C$ থেকে $AB$-এর উপর যথাক্রমে $DE$ ও $CF$ লম্ব টানি; তাহলে $CDEF$ একটি আয়তক্ষেত্র এবং $EF=CD=11$ সে.মি.।`,
          String.raw`ধরি, $AE=x$ এবং $DE=CF=h$।`,
          String.raw`$$\therefore\; BF=AB-(AE+EF)=31-(x+11)=20-x$$`,
          String.raw`সমকোণী $\triangle ADE$ থেকে পাই,`,
          String.raw`$$x^{2}+h^{2}=(10)^{2}=100\qquad\cdots(1)$$`,
          String.raw`আবার, সমকোণী $\triangle BCF$ থেকে পাই,`,
          String.raw`$$(20-x)^{2}+h^{2}=(12)^{2}$$`,
          String.raw`$$\text{or, } 400-40x+x^{2}+h^{2}=144$$`,
          String.raw`$$\text{or, } 400-40x+100=144$$`,
          String.raw`$$\text{or, } 40x=356$$`,
          String.raw`$$\therefore\; x=8.9$$`,
          String.raw`সমীকরণ $(1)$-এ $x$-এর মান বসিয়ে পাই,`,
          String.raw`$$(8.9)^{2}+h^{2}=100$$`,
          String.raw`$$\text{or, } h^{2}=100-79.21=20.79$$`,
          String.raw`$$\therefore\; h=4.56$$`,
          String.raw`$$A=\frac{h(AB+CD)}{2}=\frac{4.56\times(31+11)}{2}=21\times 4.56=95.75$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $95.75$ বর্গ সে.মি. (প্রায়)।`,
        ],
        answer: String.raw`$95.75$ বর্গ সে.মি. (প্রায়)`,
      },
    },
    {
      id: 13,
      figure: "162-p13",
      question: String.raw`একটি সুষম অষ্টভুজের কেন্দ্র থেকে কৌণিক বিন্দুর দূরত্ব $1.5$ মিটার হলে, এর ক্ষেত্রফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সুষম অষ্টভুজের কেন্দ্র $O$ এবং কেন্দ্র থেকে কৌণিক বিন্দুর দূরত্ব $R=1.5$ মিটার, বাহুর সংখ্যা $n=8$।`,
          String.raw`কেন্দ্র থেকে শীর্ষবিন্দুগুলো যোগ করলে $8$ টি সমান ক্ষেত্রবিশিষ্ট ত্রিভুজ উৎপন্ন হয়, যাদের প্রত্যেকটির দুই বাহু $R$ এবং অন্তর্ভুক্ত কোণ,`,
          String.raw`$$\theta=\frac{360^{\circ}}{8}=45^{\circ}$$`,
          String.raw`$$\therefore\;\text{one triangle}=\frac{1}{2}R^{2}\sin 45^{\circ}=\frac{1}{2}\times(1.5)^{2}\times\frac{1}{\sqrt{2}}$$`,
          String.raw`$$A=8\times\frac{1}{2}\times(1.5)^{2}\times\frac{1}{\sqrt{2}}=4\times 2.25\times 0.7071=6.363$$`,
          String.raw`নির্ণেয় ক্ষেত্রফল $6.363$ বর্গমিটার (প্রায়)।`,
        ],
        answer: String.raw`$6.363$ বর্গমিটার (প্রায়)`,
      },
    },
    {
      id: 14,
      figure: "162-p14",
      question: String.raw`একটি আয়তাকার জমির দৈর্ঘ্য $150$ মিটার এবং ক্ষেত্রফল $15000$ বর্গমিটার। এর বাইরে চারদিকে $3$ মিটার চওড়া রাস্তা আছে। জমিটির মধ্যে এর দৈর্ঘ্যের সমান ভূমিবিশিষ্ট একটি সমদ্বিবাহু ত্রিভুজাকৃতির জমিতে সবজি চাষ করা হলো। ত্রিভুজাকৃতি জমির ক্ষেত্রফল আয়তাকার জমিটির ক্ষেত্রফলের অর্ধেক।`,
      parts: [
        {
          label: "ক",
          figure: "162-p14-a",
          question: String.raw`একটি সুষম ষড়ভুজের বাহুর দৈর্ঘ্য $5$ সে.মি. হলে, এর ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, সুষম ষড়ভুজের বাহুর দৈর্ঘ্য $a=5$ সে.মি. এবং বাহুর সংখ্যা $n=6$।`,
              String.raw`$$A=\frac{na^{2}}{4}\cot\frac{180^{\circ}}{n}$$`,
              String.raw`$$=\frac{6\times(5)^{2}}{4}\cot\frac{180^{\circ}}{6}$$`,
              String.raw`$$=\frac{150}{4}\cot 30^{\circ}=37.5\sqrt{3}$$`,
              String.raw`$$=64.95$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $37.5\sqrt{3}$ অর্থাৎ $64.95$ বর্গ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$37.5\sqrt{3}\approx 64.95$ বর্গ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "খ",
          question: String.raw`রাস্তাটির ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, আয়তাকার জমির দৈর্ঘ্য $150$ মিটার এবং প্রস্থ $y$ মিটার।`,
              String.raw`$$150y=15000$$`,
              String.raw`$$\therefore\; y=100$$`,
              String.raw`রাস্তা বাইরে চারদিকে $3$ মিটার চওড়া, তাই রাস্তাসহ ক্ষেত্রের দৈর্ঘ্য $(150+2\times 3)=156$ মিটার এবং প্রস্থ $(100+2\times 3)=106$ মিটার।`,
              String.raw`$$\therefore\;\text{outer}=156\times 106=16536$$`,
              String.raw`রাস্তার ক্ষেত্রফল $=$ রাস্তাসহ ক্ষেত্রফল $-$ জমির ক্ষেত্রফল।`,
              String.raw`$$=16536-15000=1536$$`,
              String.raw`নির্ণেয় রাস্তার ক্ষেত্রফল $1536$ বর্গমিটার।`,
            ],
            answer: String.raw`$1536$ বর্গমিটার`,
          },
        },
        {
          label: "গ",
          question: String.raw`সবজি চাষের জমিটির পরিসীমা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমদ্বিবাহু ত্রিভুজাকৃতি জমির ভূমি $b=150$ মিটার এবং সমান সমান বাহুর দৈর্ঘ্য $a$ মিটার ধরি।`,
              String.raw`$$\text{area}=\frac{1}{2}\times 15000=7500$$`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$\frac{b}{4}\sqrt{4a^{2}-b^{2}}=7500$$`,
              String.raw`$$\text{or, }\frac{150}{4}\sqrt{4a^{2}-(150)^{2}}=7500$$`,
              String.raw`$$\text{or, }\sqrt{4a^{2}-22500}=200$$`,
              String.raw`$$\text{or, } 4a^{2}-22500=40000$$`,
              String.raw`[বর্গ করে]`,
              String.raw`$$\text{or, } 4a^{2}=62500$$`,
              String.raw`$$\text{or, } a^{2}=15625$$`,
              String.raw`$$\therefore\; a=125$$`,
              String.raw`$$\therefore\;\text{perimeter}=125+125+150=400$$`,
              String.raw`নির্ণেয় পরিসীমা $400$ মিটার।`,
            ],
            answer: String.raw`$400$ মিটার`,
          },
        },
      ],
    },
    {
      id: 15,
      figure: "162-p15",
      question: String.raw`নিচের চিত্রের তথ্য থেকে বহুভুজের ক্ষেত্রফল নির্ণয় করো।
চিত্রে $ABCD$ চতুর্ভুজের চার বাহুর মধ্যবিন্দু যোগ করে $22$ সে.মি. বাহুবিশিষ্ট একটি বর্গক্ষেত্র পাওয়া গেছে এবং শীর্ষ $A$ থেকে বর্গক্ষেত্রের নিকটতম বাহুর লম্ব দূরত্ব $12$ সে.মি.।`,
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ চতুর্ভুজের $AB$, $AD$, $CD$ ও $CB$ বাহুর মধ্যবিন্দু যথাক্রমে $P$, $Q$, $R$ ও $S$, এবং $PQRS$ একটি বর্গক্ষেত্র যার প্রতি বাহু $22$ সে.মি.।`,
          String.raw`$\triangle ABD$-এ $P$ ও $Q$ যথাক্রমে $AB$ ও $AD$-এর মধ্যবিন্দু, তাই $PQ$ মধ্যরেখা।`,
          String.raw`$$\therefore\; PQ=\frac{1}{2}BD$$`,
          String.raw`$$\text{or, } BD=2\times 22=44$$`,
          String.raw`অনুরূপভাবে $\triangle ABC$-এ $PS$ মধ্যরেখা।`,
          String.raw`$$\therefore\; PS=\frac{1}{2}AC$$`,
          String.raw`$$\text{or, } AC=2\times 22=44$$`,
          String.raw`আবার $PQ\parallel BD$ এবং $PS\parallel AC$; বর্গক্ষেত্রে $PQ\perp PS$, সুতরাং $AC\perp BD$।`,
          String.raw`মধ্যরেখা $PQ$, $BD$ থেকে $A$-এর দূরত্বকে সমদ্বিখণ্ডিত করে। তাই $BD$ থেকে $A$-এর লম্ব দূরত্ব,`,
          String.raw`$$h_{1}=2\times 12=24$$`,
          String.raw`$$\therefore\; h_{2}=AC-h_{1}=44-24=20$$`,
          String.raw`কর্ণ $BD$ চতুর্ভুজটিকে $\triangle ABD$ ও $\triangle BCD$-এ ভাগ করে।`,
          String.raw`$$\triangle ABD=\frac{1}{2}\times BD\times h_{1}=\frac{1}{2}\times 44\times 24=528$$`,
          String.raw`$$\triangle BCD=\frac{1}{2}\times BD\times h_{2}=\frac{1}{2}\times 44\times 20=440$$`,
          String.raw`$$\therefore\; ABCD=528+440=968$$`,
          String.raw`[যাচাই: কর্ণদ্বয় পরস্পর লম্ব বলে $ABCD=\frac{1}{2}\times AC\times BD=\frac{1}{2}\times 44\times 44=968$]`,
          String.raw`নির্ণেয় ক্ষেত্রফল $968$ বর্গ সে.মি.।`,
        ],
        answer: String.raw`$968$ বর্গ সে.মি.`,
      },
    },
    {
      id: 16,
      question: String.raw`নিচের চিত্রের তথ্য থেকে বহুভুজসমূহের ক্ষেত্রফল নির্ণয় করো।`,
      parts: [
        {
          label: "ক",
          figure: "162-p16-a",
          question: String.raw`$ABCD$ চতুর্ভুজে $\angle A=90^{\circ}$, $AB=4$ সে.মি., $AD=2$ সে.মি., $DC=1.5$ সে.মি. এবং $CB=3$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`কর্ণ $BD$ টানি; এতে চতুর্ভুজটি $\triangle ABD$ ও $\triangle BCD$-এ বিভক্ত হয়।`,
              String.raw`$\triangle ABD$-এ $\angle A=90^{\circ}$, তাই`,
              String.raw`$$\triangle ABD=\frac{1}{2}\times AB\times AD=\frac{1}{2}\times 4\times 2=4$$`,
              String.raw`$$BD=\sqrt{AB^{2}+AD^{2}}=\sqrt{16+4}=\sqrt{20}=4.472$$`,
              String.raw`এখন $\triangle BCD$-এর তিন বাহু $BD=4.472$, $DC=1.5$ ও $CB=3$ সে.মি.।`,
              String.raw`$$s=\frac{4.472+1.5+3}{2}=4.486$$`,
              String.raw`$$\triangle BCD=\sqrt{s(s-BD)(s-DC)(s-CB)}$$`,
              String.raw`$$=\sqrt{4.486\times 0.014\times 2.986\times 1.486}=\sqrt{0.277}=0.527$$`,
              String.raw`$$\therefore\; ABCD=4+0.527=4.527$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $4.53$ বর্গ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$4.53$ বর্গ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "খ",
          figure: "162-p16-b",
          question: String.raw`$ABCD$ চতুর্ভুজে $\angle A=90^{\circ}$, $AB=18$ সে.মি., $AD=10$ সে.মি., $DC=12$ সে.মি. এবং $CB=AD=10$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`কর্ণ $BD$ টানি; এতে চতুর্ভুজটি $\triangle ABD$ ও $\triangle BCD$-এ বিভক্ত হয়।`,
              String.raw`$\triangle ABD$-এ $\angle A=90^{\circ}$, তাই`,
              String.raw`$$\triangle ABD=\frac{1}{2}\times AB\times AD=\frac{1}{2}\times 18\times 10=90$$`,
              String.raw`$$BD=\sqrt{AB^{2}+AD^{2}}=\sqrt{324+100}=\sqrt{424}=20.591$$`,
              String.raw`এখন $\triangle BCD$-এর তিন বাহু $BD=20.591$, $DC=12$ ও $CB=10$ সে.মি.।`,
              String.raw`$$s=\frac{20.591+12+10}{2}=21.296$$`,
              String.raw`$$\triangle BCD=\sqrt{s(s-BD)(s-DC)(s-CB)}$$`,
              String.raw`$$=\sqrt{21.296\times 0.705\times 9.296\times 11.296}=\sqrt{1574.88}=39.685$$`,
              String.raw`$$\therefore\; ABCD=90+39.685=129.685$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $129.68$ বর্গ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$129.68$ বর্গ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "গ",
          figure: "162-p16-c",
          question: String.raw`$ABCDE$ বহুভুজে $\angle ACB=\angle ADC=\angle AED=90^{\circ}$, $\angle ABC=60^{\circ}$, $\angle CAD=\angle DAE=30^{\circ}$ এবং $BC=\sqrt{2}$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`$A$ থেকে $C$ ও $D$ যোগ করলে বহুভুজটি $\triangle ABC$, $\triangle ACD$ ও $\triangle ADE$-এ বিভক্ত হয়।`,
              String.raw`সমকোণী $\triangle ABC$-এ $\angle ACB=90^{\circ}$ ও $\angle ABC=60^{\circ}$।`,
              String.raw`$$AC=BC\tan 60^{\circ}=\sqrt{2}\times\sqrt{3}=\sqrt{6}$$`,
              String.raw`$$\triangle ABC=\frac{1}{2}\times BC\times AC=\frac{1}{2}\times\sqrt{2}\times\sqrt{6}=\sqrt{3}$$`,
              String.raw`সমকোণী $\triangle ACD$-এ $\angle ADC=90^{\circ}$ ও $\angle CAD=30^{\circ}$।`,
              String.raw`$$AD=AC\cos 30^{\circ}=\sqrt{6}\times\frac{\sqrt{3}}{2}=\frac{3\sqrt{2}}{2}$$`,
              String.raw`$$CD=AC\sin 30^{\circ}=\frac{\sqrt{6}}{2}$$`,
              String.raw`$$\triangle ACD=\frac{1}{2}\times CD\times AD=\frac{1}{2}\times\frac{\sqrt{6}}{2}\times\frac{3\sqrt{2}}{2}=\frac{3\sqrt{3}}{4}$$`,
              String.raw`সমকোণী $\triangle ADE$-এ $\angle AED=90^{\circ}$ ও $\angle DAE=30^{\circ}$।`,
              String.raw`$$AE=AD\cos 30^{\circ}=\frac{3\sqrt{2}}{2}\times\frac{\sqrt{3}}{2}=\frac{3\sqrt{6}}{4}$$`,
              String.raw`$$DE=AD\sin 30^{\circ}=\frac{3\sqrt{2}}{4}$$`,
              String.raw`$$\triangle ADE=\frac{1}{2}\times DE\times AE=\frac{1}{2}\times\frac{3\sqrt{2}}{4}\times\frac{3\sqrt{6}}{4}=\frac{9\sqrt{3}}{16}$$`,
              String.raw`$$\therefore\; ABCDE=\sqrt{3}+\frac{3\sqrt{3}}{4}+\frac{9\sqrt{3}}{16}=\frac{37\sqrt{3}}{16}=4.005$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $\dfrac{37\sqrt{3}}{16}$ অর্থাৎ $4.01$ বর্গ সে.মি. (প্রায়)।`,
            ],
            answer: String.raw`$\dfrac{37\sqrt{3}}{16}\approx 4.01$ বর্গ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "ঘ",
          figure: "162-p16-d",
          question: String.raw`$ABCD$ চতুর্ভুজের চার বাহুর মধ্যবিন্দু যোগ করে $25$ সে.মি. বাহুবিশিষ্ট একটি বর্গক্ষেত্র পাওয়া গেছে।`,
          solution: {
            steps: [
              String.raw`মনে করি, $ABCD$ চতুর্ভুজের $AB$, $AD$, $CD$ ও $CB$ বাহুর মধ্যবিন্দু যথাক্রমে $P$, $Q$, $R$ ও $S$, এবং $PQRS$ একটি বর্গক্ষেত্র যার প্রতি বাহু $25$ সে.মি.।`,
              String.raw`$\triangle ABD$-এ $PQ$ মধ্যরেখা, তাই`,
              String.raw`$$PQ=\frac{1}{2}BD$$`,
              String.raw`$$\text{or, } BD=2\times 25=50$$`,
              String.raw`অনুরূপভাবে $\triangle ABC$-এ $PS$ মধ্যরেখা, তাই`,
              String.raw`$$AC=2\times 25=50$$`,
              String.raw`আবার $PQ\parallel BD$, $PS\parallel AC$ এবং বর্গক্ষেত্রে $PQ\perp PS$; সুতরাং $AC\perp BD$।`,
              String.raw`কর্ণদ্বয় পরস্পর লম্ব হলে চতুর্ভুজের ক্ষেত্রফল,`,
              String.raw`$$ABCD=\frac{1}{2}\times AC\times BD=\frac{1}{2}\times 50\times 50=1250$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $1250$ বর্গ সে.মি.।`,
            ],
            answer: String.raw`$1250$ বর্গ সে.মি.`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// Chapter 3 "বীজগাণিতিক রাশি", book pages ৪৩ – ৭৪. The chapter runs
// square formulae (৪৪ – ৪৮), cube formulae (৫০ – ৫৩), factorisation
// (৫৫ – ৫৮), the remainder theorem (৫৯ – ৬৩) and, last, algebra put to
// work on everyday problems (৬৩ – ৭১). Each exercise below carries the
// theory pages that come just before it.
// ─────────────────────────────────────────────────────────────────

const SQ_SQUARE = "বর্গ নির্ণয় ও সরল করো (১ – ২)";
const SQ_VALUE = "মান নির্ণয় ও প্রমাণ (৩ – ১২)";
const SQ_DIFF = "বর্গের অন্তররূপে প্রকাশ (১৩ – ১৫)";

const exercise31: Exercise = {
  id: "3.1",
  bnId: "অনুশীলনী ৩.১",
  title: "বর্গ সংবলিত সূত্রাবলি",
  bookPages: "৪৯",
  formulas: [
    {
      title: "মূল সূত্র",
      formulas: [
        {
          statement: String.raw`$$(a+b)^{2}=a^{2}+2ab+b^{2}$$`,
          note: "সূত্র ১। দুইটি রাশির যোগফলের বর্গ।",
        },
        {
          statement: String.raw`$$(a-b)^{2}=a^{2}-2ab+b^{2}$$`,
          note: String.raw`সূত্র ২। সূত্র ১-এ $b$-এর স্থলে $-b$ বসালেই এটি পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$a^{2}-b^{2}=(a+b)(a-b)$$`,
          note: "সূত্র ৩। দুইটি রাশির বর্গের বিয়োগফল = যোগফল × বিয়োগফল।",
        },
        {
          statement: String.raw`$$(x+a)(x+b)=x^{2}+(a+b)x+ab$$`,
          note: String.raw`সূত্র ৪। $x$-এর সহগ হলো $a$ ও $b$-এর যোগফল, ধ্রুবপদ তাদের গুণফল।`,
        },
        {
          statement: String.raw`$$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2ab+2bc+2ac$$`,
          note: String.raw`সূত্র ৫। $(a+b)$-কে একটি পদ ধরে সূত্র ১ প্রয়োগ করলেই মেলে।`,
        },
      ],
    },
    {
      title: "অনুসিদ্ধান্ত",
      formulas: [
        {
          statement: String.raw`$$a^{2}+b^{2}=(a+b)^{2}-2ab=(a-b)^{2}+2ab$$`,
          note: "অনুসিদ্ধান্ত ১ ও ২।",
        },
        {
          statement: String.raw`$$(a+b)^{2}=(a-b)^{2}+4ab,\qquad (a-b)^{2}=(a+b)^{2}-4ab$$`,
          note: "অনুসিদ্ধান্ত ৩ ও ৪। যোগফল ও বিয়োগফলের বর্গ পরস্পরকে ডেকে আনে।",
        },
        {
          statement: String.raw`$$a^{2}+b^{2}=\frac{(a+b)^{2}+(a-b)^{2}}{2}$$`,
          note: "অনুসিদ্ধান্ত ৫।",
        },
        {
          statement: String.raw`$$ab=\left(\frac{a+b}{2}\right)^{2}-\left(\frac{a-b}{2}\right)^{2}$$`,
          note: "অনুসিদ্ধান্ত ৬। যেকোনো গুণফলকে দুইটি বর্গের অন্তররূপে লেখার চাবি।",
        },
        {
          statement: String.raw`$$a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ac)$$`,
          note: "অনুসিদ্ধান্ত ৭।",
        },
        {
          statement: String.raw`$$2(ab+bc+ac)=(a+b+c)^{2}-\left(a^{2}+b^{2}+c^{2}\right)$$`,
          note: "অনুসিদ্ধান্ত ৮।",
        },
      ],
    },
    {
      title: "সূত্র ৫-এর চিহ্নভেদ",
      formulas: [
        {
          statement: String.raw`$$(a+b-c)^{2}=a^{2}+b^{2}+c^{2}+2ab-2bc-2ac$$`,
        },
        {
          statement: String.raw`$$(a-b+c)^{2}=a^{2}+b^{2}+c^{2}-2ab-2bc+2ac$$`,
        },
        {
          statement: String.raw`$$(a-b-c)^{2}=a^{2}+b^{2}+c^{2}-2ab+2bc-2ac$$`,
          note: String.raw`তিনটিই সূত্র ৫-এ $b$ বা $c$-এর স্থলে ঋণাত্মক রাশি বসিয়ে পাওয়া।`,
        },
        {
          statement: String.raw`$$(a+b+c+d)^{2}=a^{2}+b^{2}+c^{2}+d^{2}+2ab+2ac+2ad+2bc+2bd+2cd$$`,
          note: "চার পদের ক্ষেত্রে: প্রতিটি পদের বর্গ, আর প্রতি জোড়ার দ্বিগুণ গুণফল।",
        },
      ],
    },
  ],
  examples: [
    {
      id: 1,
      question: String.raw`$(4x+5y)$ এর বর্গ কত?`,
      solution: {
        steps: [
          String.raw`$$(4x+5y)^{2}=(4x)^{2}+2\times(4x)\times(5y)+(5y)^{2}$$`,
          String.raw`$$=16x^{2}+40xy+25y^{2}$$`,
        ],
        answer: String.raw`$16x^{2}+40xy+25y^{2}$`,
      },
    },
    {
      id: 2,
      question: String.raw`$(3a-7b)$ এর বর্গ কত?`,
      solution: {
        steps: [
          String.raw`$$(3a-7b)^{2}=(3a)^{2}-2\times(3a)\times(7b)+(7b)^{2}$$`,
          String.raw`$$=9a^{2}-42ab+49b^{2}$$`,
        ],
        answer: String.raw`$9a^{2}-42ab+49b^{2}$`,
      },
    },
    {
      id: 3,
      question: String.raw`বর্গের সূত্র প্রয়োগ করে $996$ এর বর্গ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$(996)^{2}=(1000-4)^{2}$$`,
          String.raw`$$=(1000)^{2}-2\times 1000\times 4+4^{2}$$`,
          String.raw`$$=1000000-8000+16$$`,
          String.raw`$$=1000016-8000=992016$$`,
        ],
        answer: String.raw`$992016$`,
      },
    },
    {
      id: 4,
      question: String.raw`$a+b+c+d$ এর বর্গ কত?`,
      solution: {
        steps: [
          String.raw`$$(a+b+c+d)^{2}=\{(a+b)+(c+d)\}^{2}$$`,
          String.raw`$$=(a+b)^{2}+2(a+b)(c+d)+(c+d)^{2}$$`,
          String.raw`$$=a^{2}+2ab+b^{2}+2(ac+ad+bc+bd)+c^{2}+2cd+d^{2}$$`,
          String.raw`$$=a^{2}+b^{2}+c^{2}+d^{2}+2ab+2ac+2ad+2bc+2bd+2cd$$`,
        ],
        answer: String.raw`$a^{2}+b^{2}+c^{2}+d^{2}+2ab+2ac+2ad+2bc+2bd+2cd$`,
      },
    },
    {
      id: 5,
      question: String.raw`সরল করো: $$(5x+7y+3z)^{2}+2(7x-7y-3z)(5x+7y+3z)+(7x-7y-3z)^{2}$$`,
      solution: {
        steps: [
          String.raw`ধরি, $5x+7y+3z=a$ এবং $7x-7y-3z=b$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=a^{2}+2\cdot b\cdot a+b^{2}=a^{2}+2ab+b^{2}$$`,
          String.raw`$$=(a+b)^{2}$$`,
          String.raw`$$=\{(5x+7y+3z)+(7x-7y-3z)\}^{2}\qquad\left[\,a\text{ ও }b\text{ এর মান বসিয়ে}\,\right]$$`,
          String.raw`$$=(5x+7y+3z+7x-7y-3z)^{2}$$`,
          String.raw`$$=(12x)^{2}=144x^{2}$$`,
        ],
        answer: String.raw`$144x^{2}$`,
      },
    },
    {
      id: 6,
      question: String.raw`$x-y=2$ এবং $xy=24$ হলে, $x+y$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$(x+y)^{2}=(x-y)^{2}+4xy$$`,
          String.raw`$$=(2)^{2}+4\times 24=4+96=100$$`,
          String.raw`$$\therefore\; x+y=\pm\sqrt{100}=\pm 10$$`,
        ],
        answer: String.raw`$x+y=\pm 10$`,
      },
    },
    {
      id: 7,
      question: String.raw`যদি $a^{4}+a^{2}b^{2}+b^{4}=3$ এবং $a^{2}+ab+b^{2}=3$ হয়, তবে $a^{2}+b^{2}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$a^{4}+a^{2}b^{2}+b^{4}$$`,
          String.raw`$$=(a^{2})^{2}+2a^{2}b^{2}+(b^{2})^{2}-a^{2}b^{2}$$`,
          String.raw`$$=(a^{2}+b^{2})^{2}-(ab)^{2}$$`,
          String.raw`$$=(a^{2}+b^{2}+ab)(a^{2}+b^{2}-ab)$$`,
          String.raw`$$=(a^{2}+ab+b^{2})(a^{2}-ab+b^{2})$$`,
          String.raw`$$\therefore\; 3=3(a^{2}-ab+b^{2})\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$\text{বা, } a^{2}-ab+b^{2}=\frac{3}{3}=1$$`,
          String.raw`এখন, $a^{2}+ab+b^{2}=3$ এবং $a^{2}-ab+b^{2}=1$; যোগ করে পাই,`,
          String.raw`$$2(a^{2}+b^{2})=4$$`,
          String.raw`$$\therefore\; a^{2}+b^{2}=\frac{4}{2}=2$$`,
        ],
        answer: String.raw`$a^{2}+b^{2}=2$`,
      },
    },
    {
      id: 8,
      question: String.raw`প্রমাণ করো যে, $(a+b)^{4}-(a-b)^{4}=8ab(a^{2}+b^{2})$`,
      solution: {
        steps: [
          String.raw`$$(a+b)^{4}-(a-b)^{4}$$`,
          String.raw`$$=\{(a+b)^{2}\}^{2}-\{(a-b)^{2}\}^{2}$$`,
          String.raw`$$=\{(a+b)^{2}+(a-b)^{2}\}\{(a+b)^{2}-(a-b)^{2}\}$$`,
          String.raw`$$=2(a^{2}+b^{2})\times 4ab\qquad\left[\,\text{অনুসিদ্ধান্ত ৫ ও ৬}\,\right]$$`,
          String.raw`$$=8ab(a^{2}+b^{2})$$`,
          String.raw`$$\therefore\;(a+b)^{4}-(a-b)^{4}=8ab(a^{2}+b^{2})$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 9,
      question: String.raw`$a+b+c=15$ এবং $a^{2}+b^{2}+c^{2}=83$ হলে, $ab+bc+ac$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$2(ab+bc+ac)=(a+b+c)^{2}-(a^{2}+b^{2}+c^{2})$$`,
          String.raw`$$=(15)^{2}-83=225-83=142$$`,
          String.raw`$$\therefore\; ab+bc+ac=\frac{142}{2}=71$$`,
        ],
        answer: String.raw`$71$`,
      },
    },
    {
      id: 10,
      question: String.raw`$a+b+c=2$ এবং $ab+bc+ac=1$ হলে, $(a+b)^{2}+(b+c)^{2}+(c+a)^{2}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$(a+b)^{2}+(b+c)^{2}+(c+a)^{2}$$`,
          String.raw`$$=a^{2}+2ab+b^{2}+b^{2}+2bc+c^{2}+c^{2}+2ca+a^{2}$$`,
          String.raw`$$=(a^{2}+b^{2}+c^{2}+2ab+2bc+2ca)+(a^{2}+b^{2}+c^{2})$$`,
          String.raw`$$=(a+b+c)^{2}+(a+b+c)^{2}-2(ab+bc+ca)$$`,
          String.raw`$$=(2)^{2}+(2)^{2}-2\times 1=4+4-2=6$$`,
        ],
        answer: String.raw`$6$`,
      },
    },
    {
      id: 11,
      question: String.raw`$(2x+3y)(4x-5y)$ কে দুইটি বর্গের বিয়োগফলরূপে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`ধরি, $2x+3y=a$ এবং $4x-5y=b$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=ab=\left(\frac{a+b}{2}\right)^{2}-\left(\frac{a-b}{2}\right)^{2}$$`,
          String.raw`$$=\left(\frac{2x+3y+4x-5y}{2}\right)^{2}-\left(\frac{2x+3y-4x+5y}{2}\right)^{2}$$`,
          String.raw`$$=\left(\frac{6x-2y}{2}\right)^{2}-\left(\frac{8y-2x}{2}\right)^{2}$$`,
          String.raw`$$=(3x-y)^{2}-(4y-x)^{2}$$`,
          String.raw`$$\therefore\;(2x+3y)(4x-5y)=(3x-y)^{2}-(4y-x)^{2}$$`,
        ],
        answer: String.raw`$(3x-y)^{2}-(4y-x)^{2}$`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: SQ_SQUARE,
      question: String.raw`সূত্রের সাহায্যে বর্গ নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$2a+3b$$`,
          solution: {
            steps: [
              String.raw`$$(2a+3b)^{2}=(2a)^{2}+2\times 2a\times 3b+(3b)^{2}$$`,
              String.raw`$$=4a^{2}+12ab+9b^{2}$$`,
            ],
            answer: String.raw`$4a^{2}+12ab+9b^{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$x^{2}+\frac{2}{y^{2}}$$`,
          solution: {
            steps: [
              String.raw`$$\left(x^{2}+\frac{2}{y^{2}}\right)^{2}=(x^{2})^{2}+2\times x^{2}\times\frac{2}{y^{2}}+\left(\frac{2}{y^{2}}\right)^{2}$$`,
              String.raw`$$=x^{4}+\frac{4x^{2}}{y^{2}}+\frac{4}{y^{4}}$$`,
            ],
            answer: String.raw`$x^{4}+\dfrac{4x^{2}}{y^{2}}+\dfrac{4}{y^{4}}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$4y-5x$$`,
          solution: {
            steps: [
              String.raw`$$(4y-5x)^{2}=(4y)^{2}-2\times 4y\times 5x+(5x)^{2}$$`,
              String.raw`$$=16y^{2}-40xy+25x^{2}$$`,
            ],
            answer: String.raw`$16y^{2}-40xy+25x^{2}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$5x^{2}-y$$`,
          solution: {
            steps: [
              String.raw`$$(5x^{2}-y)^{2}=(5x^{2})^{2}-2\times 5x^{2}\times y+y^{2}$$`,
              String.raw`$$=25x^{4}-10x^{2}y+y^{2}$$`,
            ],
            answer: String.raw`$25x^{4}-10x^{2}y+y^{2}$`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$$3b-5c-2a$$`,
          solution: {
            steps: [
              String.raw`$$(3b-5c-2a)^{2}=\{3b+(-5c)+(-2a)\}^{2}$$`,
              String.raw`$$=(3b)^{2}+(-5c)^{2}+(-2a)^{2}+2(3b)(-5c)+2(-5c)(-2a)+2(3b)(-2a)$$`,
              String.raw`$$=9b^{2}+25c^{2}+4a^{2}-30bc+20ac-12ab$$`,
              String.raw`$$=4a^{2}+9b^{2}+25c^{2}-12ab-30bc+20ca$$`,
            ],
            answer: String.raw`$4a^{2}+9b^{2}+25c^{2}-12ab-30bc+20ca$`,
          },
        },
        {
          label: "চ",
          question: String.raw`$$ax-by-cz$$`,
          solution: {
            steps: [
              String.raw`$$(ax-by-cz)^{2}=\{ax+(-by)+(-cz)\}^{2}$$`,
              String.raw`$$=(ax)^{2}+(-by)^{2}+(-cz)^{2}+2(ax)(-by)+2(-by)(-cz)+2(ax)(-cz)$$`,
              String.raw`$$=a^{2}x^{2}+b^{2}y^{2}+c^{2}z^{2}-2abxy+2bcyz-2acxz$$`,
            ],
            answer: String.raw`$a^{2}x^{2}+b^{2}y^{2}+c^{2}z^{2}-2abxy+2bcyz-2acxz$`,
          },
        },
        {
          label: "ছ",
          question: String.raw`$$2a+3x-2y-5z$$`,
          solution: {
            steps: [
              String.raw`$$(2a+3x-2y-5z)^{2}=\{2a+3x+(-2y)+(-5z)\}^{2}$$`,
              String.raw`চার পদের বর্গে প্রতিটি পদের বর্গ, আর প্রতি জোড়ার দ্বিগুণ গুণফল বসে —`,
              String.raw`$$=(2a)^{2}+(3x)^{2}+(-2y)^{2}+(-5z)^{2}$$`,
              String.raw`$$\quad+2(2a)(3x)+2(2a)(-2y)+2(2a)(-5z)$$`,
              String.raw`$$\quad+2(3x)(-2y)+2(3x)(-5z)+2(-2y)(-5z)$$`,
              String.raw`$$=4a^{2}+9x^{2}+4y^{2}+25z^{2}+12ax-8ay-20az-12xy-30xz+20yz$$`,
            ],
            answer: String.raw`$4a^{2}+9x^{2}+4y^{2}+25z^{2}+12ax-8ay-20az-12xy-30xz+20yz$`,
          },
        },
        {
          label: "জ",
          question: String.raw`$$1007$$`,
          solution: {
            steps: [
              String.raw`$$(1007)^{2}=(1000+7)^{2}$$`,
              String.raw`$$=(1000)^{2}+2\times 1000\times 7+7^{2}$$`,
              String.raw`$$=1000000+14000+49$$`,
              String.raw`$$=1014049$$`,
            ],
            answer: String.raw`$1014049$`,
          },
        },
      ],
    },
    {
      id: 2,
      group: SQ_SQUARE,
      question: String.raw`সরল করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$(7p+3q-5r)^{2}-2(7p+3q-5r)(8p-4q-5r)+(8p-4q-5r)^{2}$$`,
          solution: {
            steps: [
              String.raw`ধরি, $7p+3q-5r=a$ এবং $8p-4q-5r=b$।`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=a^{2}-2ab+b^{2}=(a-b)^{2}$$`,
              String.raw`$$=\{(7p+3q-5r)-(8p-4q-5r)\}^{2}$$`,
              String.raw`$$=(7p+3q-5r-8p+4q+5r)^{2}$$`,
              String.raw`$$=(-p+7q)^{2}=(7q-p)^{2}$$`,
              String.raw`$$=49q^{2}-14pq+p^{2}$$`,
            ],
            answer: String.raw`$(7q-p)^{2}=p^{2}-14pq+49q^{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$(2m+3n-p)^{2}+(2m-3n+p)^{2}-2(2m+3n-p)(2m-3n+p)$$`,
          solution: {
            steps: [
              String.raw`ধরি, $2m+3n-p=a$ এবং $2m-3n+p=b$।`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=a^{2}+b^{2}-2ab=(a-b)^{2}$$`,
              String.raw`$$=\{(2m+3n-p)-(2m-3n+p)\}^{2}$$`,
              String.raw`$$=(2m+3n-p-2m+3n-p)^{2}$$`,
              String.raw`$$=(6n-2p)^{2}=4(3n-p)^{2}$$`,
              String.raw`$$=4(9n^{2}-6np+p^{2})=36n^{2}-24np+4p^{2}$$`,
            ],
            answer: String.raw`$4(3n-p)^{2}=36n^{2}-24np+4p^{2}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$6.35\times 6.35+2\times 6.35\times 3.65+3.65\times 3.65$$`,
          solution: {
            steps: [
              String.raw`$$6.35\times 6.35+2\times 6.35\times 3.65+3.65\times 3.65$$`,
              String.raw`$$=(6.35)^{2}+2\times 6.35\times 3.65+(3.65)^{2}$$`,
              String.raw`$$=(6.35+3.65)^{2}\qquad\left[\,a^{2}+2ab+b^{2}=(a+b)^{2}\,\right]$$`,
              String.raw`$$=(10)^{2}=100$$`,
            ],
            answer: String.raw`$100$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$\frac{2345\times 2345-759\times 759}{2345-759}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{2345\times 2345-759\times 759}{2345-759}$$`,
              String.raw`$$=\frac{(2345)^{2}-(759)^{2}}{2345-759}$$`,
              String.raw`$$=\frac{(2345+759)(2345-759)}{2345-759}\qquad\left[\,a^{2}-b^{2}=(a+b)(a-b)\,\right]$$`,
              String.raw`$$=2345+759=3104$$`,
            ],
            answer: String.raw`$3104$`,
          },
        },
      ],
    },
    {
      id: 3,
      group: SQ_VALUE,
      question: String.raw`$a-b=4$ এবং $ab=60$ হলে, $a+b$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$(a+b)^{2}=(a-b)^{2}+4ab$$`,
          String.raw`$$=(4)^{2}+4\times 60$$`,
          String.raw`$$=16+240=256$$`,
          String.raw`$$\therefore\; a+b=\pm\sqrt{256}=\pm 16$$`,
        ],
        answer: String.raw`$a+b=\pm 16$`,
      },
    },
    {
      id: 4,
      group: SQ_VALUE,
      question: String.raw`$a+b=9m$ এবং $ab=18m^{2}$ হলে, $a-b$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$(a-b)^{2}=(a+b)^{2}-4ab$$`,
          String.raw`$$=(9m)^{2}-4\times 18m^{2}$$`,
          String.raw`$$=81m^{2}-72m^{2}=9m^{2}$$`,
          String.raw`$$\therefore\; a-b=\pm\sqrt{9m^{2}}=\pm 3m$$`,
        ],
        answer: String.raw`$a-b=\pm 3m$`,
      },
    },
    {
      id: 5,
      group: SQ_VALUE,
      question: String.raw`$x-\dfrac{1}{x}=4$ হলে, প্রমাণ করো যে, $x^{4}+\dfrac{1}{x^{4}}=322$।`,
      solution: {
        steps: [
          String.raw`$$x^{2}+\frac{1}{x^{2}}=\left(x-\frac{1}{x}\right)^{2}+2$$`,
          String.raw`$$=(4)^{2}+2=16+2=18$$`,
          String.raw`$$\therefore\; x^{4}+\frac{1}{x^{4}}=\left(x^{2}+\frac{1}{x^{2}}\right)^{2}-2$$`,
          String.raw`$$=(18)^{2}-2=324-2=322$$`,
          String.raw`$$\therefore\; x^{4}+\frac{1}{x^{4}}=322\quad\text{(প্রমাণিত)}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 6,
      group: SQ_VALUE,
      question: String.raw`$2x+\dfrac{2}{x}=3$ হলে, $x^{2}+\dfrac{1}{x^{2}}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$2x+\frac{2}{x}=3$$`,
          String.raw`$$\text{বা, }2\left(x+\frac{1}{x}\right)=3$$`,
          String.raw`$$\therefore\; x+\frac{1}{x}=\frac{3}{2}$$`,
          String.raw`$$\therefore\; x^{2}+\frac{1}{x^{2}}=\left(x+\frac{1}{x}\right)^{2}-2$$`,
          String.raw`$$=\left(\frac{3}{2}\right)^{2}-2=\frac{9}{4}-2=\frac{9-8}{4}=\frac{1}{4}$$`,
        ],
        answer: String.raw`$\dfrac{1}{4}$`,
      },
    },
    {
      id: 7,
      group: SQ_VALUE,
      question: String.raw`$a+\dfrac{1}{a}=2$ হলে, দেখাও যে, $a^{2}+\dfrac{1}{a^{2}}=a^{4}+\dfrac{1}{a^{4}}$`,
      solution: {
        steps: [
          String.raw`$$a^{2}+\frac{1}{a^{2}}=\left(a+\frac{1}{a}\right)^{2}-2$$`,
          String.raw`$$=(2)^{2}-2=4-2=2$$`,
          String.raw`$$\text{আবার, } a^{4}+\frac{1}{a^{4}}=\left(a^{2}+\frac{1}{a^{2}}\right)^{2}-2$$`,
          String.raw`$$=(2)^{2}-2=4-2=2$$`,
          String.raw`$$\therefore\; a^{2}+\frac{1}{a^{2}}=a^{4}+\frac{1}{a^{4}}\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`উভয় রাশির মানই $2$ — দেখানো হলো`,
      },
    },
    {
      id: 8,
      group: SQ_VALUE,
      question: String.raw`$a+b=\sqrt{7}$ এবং $a-b=\sqrt{5}$ হলে, প্রমাণ করো যে, $8ab(a^{2}+b^{2})=24$`,
      solution: {
        steps: [
          String.raw`$$ab=\frac{(a+b)^{2}-(a-b)^{2}}{4}=\frac{(\sqrt{7})^{2}-(\sqrt{5})^{2}}{4}=\frac{7-5}{4}=\frac{1}{2}$$`,
          String.raw`$$a^{2}+b^{2}=\frac{(a+b)^{2}+(a-b)^{2}}{2}=\frac{7+5}{2}=\frac{12}{2}=6$$`,
          String.raw`$$\therefore\; 8ab(a^{2}+b^{2})=8\times\frac{1}{2}\times 6=4\times 6=24$$`,
          String.raw`$$\therefore\; 8ab(a^{2}+b^{2})=24\quad\text{(প্রমাণিত)}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 9,
      group: SQ_VALUE,
      question: String.raw`$a+b+c=9$ এবং $ab+bc+ca=31$ হলে, $a^{2}+b^{2}+c^{2}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)$$`,
          String.raw`$$=(9)^{2}-2\times 31$$`,
          String.raw`$$=81-62=19$$`,
        ],
        answer: String.raw`$19$`,
      },
    },
    {
      id: 10,
      group: SQ_VALUE,
      question: String.raw`$a^{2}+b^{2}+c^{2}=9$ এবং $ab+bc+ca=8$ হলে, $(a+b+c)^{2}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)$$`,
          String.raw`$$=9+2\times 8$$`,
          String.raw`$$=9+16=25$$`,
        ],
        answer: String.raw`$25$`,
      },
    },
    {
      id: 11,
      group: SQ_VALUE,
      question: String.raw`$a+b+c=6$ এবং $a^{2}+b^{2}+c^{2}=14$ হলে, $(a-b)^{2}+(b-c)^{2}+(c-a)^{2}$ কত?`,
      solution: {
        steps: [
          String.raw`$$2(ab+bc+ca)=(a+b+c)^{2}-(a^{2}+b^{2}+c^{2})$$`,
          String.raw`$$=(6)^{2}-14=36-14=22$$`,
          String.raw`$$\text{এখন, }(a-b)^{2}+(b-c)^{2}+(c-a)^{2}$$`,
          String.raw`$$=a^{2}-2ab+b^{2}+b^{2}-2bc+c^{2}+c^{2}-2ca+a^{2}$$`,
          String.raw`$$=2(a^{2}+b^{2}+c^{2})-2(ab+bc+ca)$$`,
          String.raw`$$=2\times 14-22=28-22=6$$`,
        ],
        answer: String.raw`$6$`,
      },
    },
    {
      id: 12,
      group: SQ_VALUE,
      question: String.raw`$x=3$, $y=4$ এবং $z=5$ হলে, $9x^{2}+16y^{2}+4z^{2}-24xy-16yz+12zx$ কত?`,
      solution: {
        steps: [
          String.raw`$$9x^{2}+16y^{2}+4z^{2}-24xy-16yz+12zx$$`,
          String.raw`$$=(3x)^{2}+(-4y)^{2}+(2z)^{2}+2(3x)(-4y)+2(-4y)(2z)+2(3x)(2z)$$`,
          String.raw`$$=(3x-4y+2z)^{2}$$`,
          String.raw`$$=(3\times 3-4\times 4+2\times 5)^{2}\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$=(9-16+10)^{2}=(3)^{2}=9$$`,
        ],
        answer: String.raw`$9$`,
      },
    },
    {
      id: 13,
      group: SQ_DIFF,
      question: String.raw`$(a+2b)(3a+2c)$ কে দুইটি বর্গের বিয়োগফলরূপে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`ধরি, $a+2b=p$ এবং $3a+2c=q$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=pq=\left(\frac{p+q}{2}\right)^{2}-\left(\frac{p-q}{2}\right)^{2}$$`,
          String.raw`$$=\left(\frac{a+2b+3a+2c}{2}\right)^{2}-\left(\frac{a+2b-3a-2c}{2}\right)^{2}$$`,
          String.raw`$$=\left(\frac{4a+2b+2c}{2}\right)^{2}-\left(\frac{-2a+2b-2c}{2}\right)^{2}$$`,
          String.raw`$$=(2a+b+c)^{2}-(b-a-c)^{2}$$`,
          String.raw`$$\therefore\;(a+2b)(3a+2c)=(2a+b+c)^{2}-(b-a-c)^{2}$$`,
        ],
        answer: String.raw`$(2a+b+c)^{2}-(b-a-c)^{2}$`,
      },
    },
    {
      id: 14,
      group: SQ_DIFF,
      question: String.raw`$x^{2}+10x+24$ কে দুইটি বর্গের বিয়োগফলরূপে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`$$x^{2}+10x+24$$`,
          String.raw`$$=x^{2}+2\cdot x\cdot 5+5^{2}-25+24\qquad\left[\,\text{পূর্ণবর্গ করে}\,\right]$$`,
          String.raw`$$=(x+5)^{2}-1$$`,
          String.raw`$$=(x+5)^{2}-(1)^{2}$$`,
        ],
        answer: String.raw`$(x+5)^{2}-1^{2}$`,
      },
    },
    {
      id: 15,
      group: SQ_DIFF,
      question: String.raw`$a^{4}+a^{2}b^{2}+b^{4}=8$ এবং $a^{2}+ab+b^{2}=4$ হলে —`,
      parts: [
        {
          label: "ক",
          question: String.raw`$a^{2}+b^{2}$ এর মান কত?`,
          solution: {
            steps: [
              String.raw`$$a^{4}+a^{2}b^{2}+b^{4}=(a^{2})^{2}+2a^{2}b^{2}+(b^{2})^{2}-a^{2}b^{2}$$`,
              String.raw`$$=(a^{2}+b^{2})^{2}-(ab)^{2}$$`,
              String.raw`$$=(a^{2}+ab+b^{2})(a^{2}-ab+b^{2})$$`,
              String.raw`$$\therefore\; 8=4(a^{2}-ab+b^{2})\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
              String.raw`$$\text{বা, } a^{2}-ab+b^{2}=\frac{8}{4}=2$$`,
              String.raw`এখন, $a^{2}+ab+b^{2}=4$ এবং $a^{2}-ab+b^{2}=2$; যোগ করে পাই,`,
              String.raw`$$2(a^{2}+b^{2})=6$$`,
              String.raw`$$\therefore\; a^{2}+b^{2}=3$$`,
            ],
            answer: String.raw`$a^{2}+b^{2}=3$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$ab$ এর মান কত?`,
          solution: {
            steps: [
              String.raw`$a^{2}+ab+b^{2}=4$ এবং $a^{2}-ab+b^{2}=2$; বিয়োগ করে পাই,`,
              String.raw`$$2ab=4-2=2$$`,
              String.raw`$$\therefore\; ab=1$$`,
            ],
            answer: String.raw`$ab=1$`,
          },
        },
      ],
    },
  ],
};

const CUBE_FIND = "ঘন নির্ণয় ও সরল করো (১ – ২)";
const CUBE_VALUE = "মান নির্ণয় (৩ – ১১)";
const CUBE_PROVE = "প্রমাণ করো / দেখাও যে (১২ – ১৭)";

const exercise32: Exercise = {
  id: "3.2",
  bnId: "অনুশীলনী ৩.২",
  title: "ঘন সংবলিত সূত্রাবলি",
  bookPages: "৫৩ – ৫৪",
  formulas: [
    {
      title: "মূল সূত্র",
      formulas: [
        {
          statement: String.raw`$$(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}=a^{3}+b^{3}+3ab(a+b)$$`,
          note: String.raw`সূত্র ৬। শেষ রূপটিই কাজে লাগে বেশি — $a+b$ ও $ab$ জানা থাকলে ঘনও জানা।`,
        },
        {
          statement: String.raw`$$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}=a^{3}-b^{3}-3ab(a-b)$$`,
          note: String.raw`সূত্র ৭। সূত্র ৬-এ $b$-এর স্থলে $-b$ বসালেই পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})$$`,
          note: "সূত্র ৮।",
        },
        {
          statement: String.raw`$$a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$$`,
          note: "সূত্র ৯।",
        },
      ],
    },
    {
      title: "অনুসিদ্ধান্ত",
      formulas: [
        {
          statement: String.raw`$$a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$$`,
          note: "অনুসিদ্ধান্ত ৯।",
        },
        {
          statement: String.raw`$$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$$`,
          note: "অনুসিদ্ধান্ত ১০।",
        },
        {
          statement: String.raw`$$a^{3}+\frac{1}{a^{3}}=\left(a+\frac{1}{a}\right)^{3}-3\left(a+\frac{1}{a}\right)$$`,
          note: String.raw`অনুসিদ্ধান্ত ৯-এ $b=\dfrac{1}{a}$ বসানোর ফল; $ab=1$ বলে ধারাটি এত সংক্ষিপ্ত।`,
        },
        {
          statement: String.raw`$$a^{3}-\frac{1}{a^{3}}=\left(a-\frac{1}{a}\right)^{3}+3\left(a-\frac{1}{a}\right)$$`,
          note: "একইভাবে অনুসিদ্ধান্ত ১০ থেকে।",
        },
      ],
    },
  ],
  examples: [
    {
      id: 12,
      question: String.raw`$2x+3y$ এর ঘন নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$(2x+3y)^{3}$$`,
          String.raw`$$=(2x)^{3}+3\cdot(2x)^{2}\cdot 3y+3\cdot 2x\cdot(3y)^{2}+(3y)^{3}$$`,
          String.raw`$$=8x^{3}+3\cdot 4x^{2}\cdot 3y+3\cdot 2x\cdot 9y^{2}+27y^{3}$$`,
          String.raw`$$=8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$$`,
        ],
        answer: String.raw`$8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$`,
      },
    },
    {
      id: 13,
      question: String.raw`$2x-y$ এর ঘন নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$(2x-y)^{3}$$`,
          String.raw`$$=(2x)^{3}-3(2x)^{2}\cdot y+3\cdot 2x\cdot y^{2}-y^{3}$$`,
          String.raw`$$=8x^{3}-3\cdot 4x^{2}\cdot y+3\cdot 2x\cdot y^{2}-y^{3}$$`,
          String.raw`$$=8x^{3}-12x^{2}y+6xy^{2}-y^{3}$$`,
        ],
        answer: String.raw`$8x^{3}-12x^{2}y+6xy^{2}-y^{3}$`,
      },
    },
    {
      id: 14,
      question: String.raw`$x=37$ হলে, $8x^{3}+72x^{2}+216x+216$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$8x^{3}+72x^{2}+216x+216$$`,
          String.raw`$$=(2x)^{3}+3\cdot(2x)^{2}\cdot 6+3\cdot 2x\cdot(6)^{2}+(6)^{3}$$`,
          String.raw`$$=(2x+6)^{3}=(2\times 37+6)^{3}\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$=(74+6)^{3}=(80)^{3}=512000$$`,
        ],
        answer: String.raw`$512000$`,
      },
    },
    {
      id: 15,
      question: String.raw`যদি $x-y=8$ এবং $xy=5$ হয়, তবে $x^{3}-y^{3}+8(x+y)^{2}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$x^{3}-y^{3}+8(x+y)^{2}$$`,
          String.raw`$$=(x-y)^{3}+3xy(x-y)+8\{(x-y)^{2}+4xy\}$$`,
          String.raw`$$=(8)^{3}+3\times 5\times 8+8(8^{2}+4\times 5)\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$=8^{3}+15\times 8+8(64+20)$$`,
          String.raw`$$=8^{3}+15\times 8+8\times 84$$`,
          String.raw`$$=8(8^{2}+15+84)=8(64+15+84)$$`,
          String.raw`$$=8\times 163=1304$$`,
        ],
        answer: String.raw`$1304$`,
      },
    },
    {
      id: 16,
      question: String.raw`যদি $a=\sqrt{3}+\sqrt{2}$ হয়, তবে প্রমাণ করো যে, $a^{3}+\dfrac{1}{a^{3}}=18\sqrt{3}$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $a=\sqrt{3}+\sqrt{2}$।`,
          String.raw`$$\therefore\;\frac{1}{a}=\frac{1}{\sqrt{3}+\sqrt{2}}$$`,
          String.raw`$$=\frac{\sqrt{3}-\sqrt{2}}{(\sqrt{3}+\sqrt{2})(\sqrt{3}-\sqrt{2})}\qquad\left[\,\text{লব ও হরকে }(\sqrt{3}-\sqrt{2})\text{ দ্বারা গুণ করে}\,\right]$$`,
          String.raw`$$=\frac{\sqrt{3}-\sqrt{2}}{3-2}=\sqrt{3}-\sqrt{2}$$`,
          String.raw`$$\therefore\; a+\frac{1}{a}=(\sqrt{3}+\sqrt{2})+(\sqrt{3}-\sqrt{2})=2\sqrt{3}$$`,
          String.raw`$$\text{এখন, } a^{3}+\frac{1}{a^{3}}=\left(a+\frac{1}{a}\right)^{3}-3\left(a+\frac{1}{a}\right)$$`,
          String.raw`$$=(2\sqrt{3})^{3}-3(2\sqrt{3})$$`,
          String.raw`$$=8\cdot 3\sqrt{3}-6\sqrt{3}=24\sqrt{3}-6\sqrt{3}=18\sqrt{3}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 17,
      question: String.raw`$x+y=5$, $xy=6$ এবং $x>y$ হলে —`,
      parts: [
        {
          label: "ক",
          question: String.raw`$2(x^{2}+y^{2})$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$2(x^{2}+y^{2})=2\{(x+y)^{2}-2xy\}$$`,
              String.raw`$$=2(5^{2}-2\cdot 6)=2(25-12)=2\times 13=26$$`,
            ],
            answer: String.raw`$26$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$x^{3}-y^{3}-3(x^{2}+y^{2})$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$x-y=\sqrt{(x+y)^{2}-4xy}\qquad\left[\,x>y\text{ বলে ঋণাত্মক মান নয়}\,\right]$$`,
              String.raw`$$=\sqrt{5^{2}-4\cdot 6}=\sqrt{25-24}=\sqrt{1}=1$$`,
              String.raw`$$\text{এখন, } x^{3}-y^{3}-3(x^{2}+y^{2})$$`,
              String.raw`$$=(x-y)^{3}+3xy(x-y)-\frac{3}{2}\cdot 2(x^{2}+y^{2})$$`,
              String.raw`$$=1^{3}+3\cdot 6\cdot 1-\frac{3}{2}\cdot 26$$`,
              String.raw`$$=1+18-39=-20$$`,
            ],
            answer: String.raw`$-20$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$x^{5}+y^{5}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$x+y=5$ এবং $x-y=1$।`,
              String.raw`$$\text{যোগ করে, }2x=6\quad\therefore\; x=3$$`,
              String.raw`$$\text{বিয়োগ করে, }2y=4\quad\therefore\; y=2$$`,
              String.raw`$$\therefore\; x^{5}+y^{5}=3^{5}+2^{5}=243+32=275$$`,
            ],
            answer: String.raw`$275$`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      group: CUBE_FIND,
      question: String.raw`সূত্রের সাহায্যে ঘন নির্ণয় করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$2x^{2}+3y^{2}$$`,
          solution: {
            steps: [
              String.raw`$$(2x^{2}+3y^{2})^{3}$$`,
              String.raw`$$=(2x^{2})^{3}+3(2x^{2})^{2}(3y^{2})+3(2x^{2})(3y^{2})^{2}+(3y^{2})^{3}$$`,
              String.raw`$$=8x^{6}+3\cdot 4x^{4}\cdot 3y^{2}+3\cdot 2x^{2}\cdot 9y^{4}+27y^{6}$$`,
              String.raw`$$=8x^{6}+36x^{4}y^{2}+54x^{2}y^{4}+27y^{6}$$`,
            ],
            answer: String.raw`$8x^{6}+36x^{4}y^{2}+54x^{2}y^{4}+27y^{6}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$7m^{2}-2n$$`,
          solution: {
            steps: [
              String.raw`$$(7m^{2}-2n)^{3}$$`,
              String.raw`$$=(7m^{2})^{3}-3(7m^{2})^{2}(2n)+3(7m^{2})(2n)^{2}-(2n)^{3}$$`,
              String.raw`$$=343m^{6}-3\cdot 49m^{4}\cdot 2n+3\cdot 7m^{2}\cdot 4n^{2}-8n^{3}$$`,
              String.raw`$$=343m^{6}-294m^{4}n+84m^{2}n^{2}-8n^{3}$$`,
            ],
            answer: String.raw`$343m^{6}-294m^{4}n+84m^{2}n^{2}-8n^{3}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$2a-b-3c$$`,
          solution: {
            steps: [
              String.raw`$$(2a-b-3c)^{3}=\{(2a-b)-3c\}^{3}$$`,
              String.raw`$$=(2a-b)^{3}-3(2a-b)^{2}(3c)+3(2a-b)(3c)^{2}-(3c)^{3}$$`,
              String.raw`$$=(8a^{3}-12a^{2}b+6ab^{2}-b^{3})-9c(4a^{2}-4ab+b^{2})+27c^{2}(2a-b)-27c^{3}$$`,
              String.raw`$$=8a^{3}-12a^{2}b+6ab^{2}-b^{3}-36a^{2}c+36abc-9b^{2}c+54ac^{2}-27bc^{2}-27c^{3}$$`,
            ],
            answer: String.raw`$8a^{3}-b^{3}-27c^{3}-12a^{2}b+6ab^{2}-36a^{2}c+54ac^{2}-9b^{2}c-27bc^{2}+36abc$`,
          },
        },
      ],
    },
    {
      id: 2,
      group: CUBE_FIND,
      question: String.raw`সরল করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$(7x+3b)^{3}-(5x+3b)^{3}-6x(7x+3b)(5x+3b)$$`,
          solution: {
            steps: [
              String.raw`ধরি, $7x+3b=p$ এবং $5x+3b=q$; তাহলে $p-q=2x$, অর্থাৎ $6x=3(p-q)$।`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=p^{3}-q^{3}-3pq(p-q)$$`,
              String.raw`$$=\{(p-q)^{3}+3pq(p-q)\}-3pq(p-q)\qquad\left[\,a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)\,\right]$$`,
              String.raw`$$=(p-q)^{3}=(2x)^{3}=8x^{3}$$`,
            ],
            answer: String.raw`$8x^{3}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$(a+b+c)^{3}-(a-b-c)^{3}-6(b+c)\{a^{2}-(b+c)^{2}\}$$`,
          solution: {
            steps: [
              String.raw`ধরি, $b+c=s$; তাহলে $p=a+s$, $q=a-s$, $p-q=2s$ এবং $pq=a^{2}-s^{2}$।`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=p^{3}-q^{3}-3(p-q)pq$$`,
              String.raw`$$=\{(p-q)^{3}+3pq(p-q)\}-3pq(p-q)$$`,
              String.raw`$$=(p-q)^{3}=(2s)^{3}=8s^{3}$$`,
              String.raw`$$=8(b+c)^{3}$$`,
            ],
            answer: String.raw`$8(b+c)^{3}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$(m+n)^{6}-(m-n)^{6}-12mn(m^{2}-n^{2})^{2}$$`,
          solution: {
            steps: [
              String.raw`ধরি, $(m+n)^{2}=A$ এবং $(m-n)^{2}=B$।`,
              String.raw`$$A-B=(m+n)^{2}-(m-n)^{2}=4mn,\qquad AB=\{(m+n)(m-n)\}^{2}=(m^{2}-n^{2})^{2}$$`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=A^{3}-B^{3}-3AB(A-B)$$`,
              String.raw`$$=\{(A-B)^{3}+3AB(A-B)\}-3AB(A-B)$$`,
              String.raw`$$=(A-B)^{3}=(4mn)^{3}=64m^{3}n^{3}$$`,
            ],
            answer: String.raw`$64m^{3}n^{3}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$$(x+y)(x^{2}-xy+y^{2})+(y+z)(y^{2}-yz+z^{2})+(z+x)(z^{2}-zx+x^{2})$$`,
          solution: {
            steps: [
              String.raw`$$(x+y)(x^{2}-xy+y^{2})+(y+z)(y^{2}-yz+z^{2})+(z+x)(z^{2}-zx+x^{2})$$`,
              String.raw`$$=(x^{3}+y^{3})+(y^{3}+z^{3})+(z^{3}+x^{3})\qquad\left[\,a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})\,\right]$$`,
              String.raw`$$=2x^{3}+2y^{3}+2z^{3}$$`,
              String.raw`$$=2(x^{3}+y^{3}+z^{3})$$`,
            ],
            answer: String.raw`$2(x^{3}+y^{3}+z^{3})$`,
          },
        },
        {
          label: "ঙ",
          question: String.raw`$$(2x+3y-4z)^{3}+(2x-3y+4z)^{3}+12x\{4x^{2}-(3y-4z)^{2}\}$$`,
          solution: {
            steps: [
              String.raw`ধরি, $3y-4z=s$; তাহলে $p=2x+s$, $q=2x-s$, $p+q=4x$ এবং $pq=4x^{2}-s^{2}$।`,
              String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=p^{3}+q^{3}+3(p+q)pq$$`,
              String.raw`$$=\{(p+q)^{3}-3pq(p+q)\}+3pq(p+q)\qquad\left[\,a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)\,\right]$$`,
              String.raw`$$=(p+q)^{3}=(4x)^{3}=64x^{3}$$`,
            ],
            answer: String.raw`$64x^{3}$`,
          },
        },
      ],
    },
    {
      id: 3,
      group: CUBE_VALUE,
      question: String.raw`$a-b=5$ এবং $ab=36$ হলে, $a^{3}-b^{3}$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$$`,
          String.raw`$$=(5)^{3}+3\times 36\times 5$$`,
          String.raw`$$=125+540=665$$`,
        ],
        answer: String.raw`$665$`,
      },
    },
    {
      id: 4,
      group: CUBE_VALUE,
      question: String.raw`যদি $a^{3}-b^{3}=513$ এবং $a-b=3$ হয়, তবে $ab$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$$`,
          String.raw`$$\text{বা, }513=(3)^{3}+3ab\times 3$$`,
          String.raw`$$\text{বা, }513=27+9ab$$`,
          String.raw`$$\text{বা, }9ab=513-27=486$$`,
          String.raw`$$\therefore\; ab=\frac{486}{9}=54$$`,
        ],
        answer: String.raw`$ab=54$`,
      },
    },
    {
      id: 5,
      group: CUBE_VALUE,
      question: String.raw`$x=19$ এবং $y=-12$ হলে, $8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$$`,
          String.raw`$$=(2x)^{3}+3(2x)^{2}(3y)+3(2x)(3y)^{2}+(3y)^{3}$$`,
          String.raw`$$=(2x+3y)^{3}$$`,
          String.raw`$$=\{2\times 19+3\times(-12)\}^{3}\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$=(38-36)^{3}=(2)^{3}=8$$`,
        ],
        answer: String.raw`$8$`,
      },
    },
    {
      id: 6,
      group: CUBE_VALUE,
      question: String.raw`যদি $a=15$ হয়, তবে $8a^{3}+60a^{2}+150a+130$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$8a^{3}+60a^{2}+150a+130$$`,
          String.raw`$$=(2a)^{3}+3(2a)^{2}\cdot 5+3(2a)\cdot 5^{2}+5^{3}+5$$`,
          String.raw`$$=(2a+5)^{3}+5$$`,
          String.raw`$$=(2\times 15+5)^{3}+5\qquad\left[\,\text{মান বসিয়ে}\,\right]$$`,
          String.raw`$$=(35)^{3}+5=42875+5=42880$$`,
        ],
        answer: String.raw`$42880$`,
      },
    },
    {
      id: 7,
      group: CUBE_VALUE,
      question: String.raw`যদি $a+b=m$, $a^{2}+b^{2}=n$ এবং $a^{3}+b^{3}=p^{3}$ হয়, তবে দেখাও যে, $m^{3}+2p^{3}=3mn$।`,
      solution: {
        steps: [
          String.raw`$$a^{2}+b^{2}=(a+b)^{2}-2ab$$`,
          String.raw`$$\text{বা, }n=m^{2}-2ab\quad\therefore\; 2ab=m^{2}-n$$`,
          String.raw`$$\text{আবার, } a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$$`,
          String.raw`$$\text{বা, }p^{3}=m^{3}-3ab\cdot m$$`,
          String.raw`$$\text{বা, }p^{3}=m^{3}-\frac{3m}{2}\cdot 2ab=m^{3}-\frac{3m}{2}(m^{2}-n)$$`,
          String.raw`$$\text{বা, }2p^{3}=2m^{3}-3m^{3}+3mn$$`,
          String.raw`$$\text{বা, }2p^{3}=-m^{3}+3mn$$`,
          String.raw`$$\therefore\; m^{3}+2p^{3}=3mn\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 8,
      group: CUBE_VALUE,
      question: String.raw`$a+b=3$ এবং $ab=2$ হলে —`,
      parts: [
        {
          label: "ক",
          question: String.raw`$a^{2}-ab+b^{2}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$a^{2}+b^{2}=(a+b)^{2}-2ab=(3)^{2}-2\times 2=9-4=5$$`,
              String.raw`$$\therefore\; a^{2}-ab+b^{2}=5-2=3$$`,
            ],
            answer: String.raw`$3$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$a^{3}+b^{3}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})$$`,
              String.raw`$$=3\times 3=9$$`,
            ],
            answer: String.raw`$9$`,
          },
        },
      ],
    },
    {
      id: 9,
      group: CUBE_VALUE,
      question: String.raw`$a-b=5$ এবং $ab=36$ হলে —`,
      parts: [
        {
          label: "ক",
          question: String.raw`$a^{2}+ab+b^{2}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$a^{2}+b^{2}=(a-b)^{2}+2ab=(5)^{2}+2\times 36=25+72=97$$`,
              String.raw`$$\therefore\; a^{2}+ab+b^{2}=97+36=133$$`,
            ],
            answer: String.raw`$133$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$a^{3}-b^{3}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$$`,
              String.raw`$$=5\times 133=665$$`,
            ],
            answer: String.raw`$665$`,
          },
        },
      ],
    },
    {
      id: 10,
      group: CUBE_VALUE,
      question: String.raw`$m+\dfrac{1}{m}=a$ হলে, $m^{3}+\dfrac{1}{m^{3}}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$m^{3}+\frac{1}{m^{3}}=\left(m+\frac{1}{m}\right)^{3}-3\cdot m\cdot\frac{1}{m}\left(m+\frac{1}{m}\right)$$`,
          String.raw`$$=\left(m+\frac{1}{m}\right)^{3}-3\left(m+\frac{1}{m}\right)$$`,
          String.raw`$$=a^{3}-3a$$`,
        ],
        answer: String.raw`$a^{3}-3a$`,
      },
    },
    {
      id: 11,
      group: CUBE_VALUE,
      question: String.raw`$x-\dfrac{1}{x}=p$ হলে, $x^{3}-\dfrac{1}{x^{3}}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$x^{3}-\frac{1}{x^{3}}=\left(x-\frac{1}{x}\right)^{3}+3\cdot x\cdot\frac{1}{x}\left(x-\frac{1}{x}\right)$$`,
          String.raw`$$=\left(x-\frac{1}{x}\right)^{3}+3\left(x-\frac{1}{x}\right)$$`,
          String.raw`$$=p^{3}+3p$$`,
        ],
        answer: String.raw`$p^{3}+3p$`,
      },
    },
    {
      id: 12,
      group: CUBE_PROVE,
      question: String.raw`যদি $a-\dfrac{1}{a}=1$ হয়, তবে দেখাও যে, $a^{3}-\dfrac{1}{a^{3}}=4$।`,
      solution: {
        steps: [
          String.raw`$$a^{3}-\frac{1}{a^{3}}=\left(a-\frac{1}{a}\right)^{3}+3\left(a-\frac{1}{a}\right)$$`,
          String.raw`$$=(1)^{3}+3\times 1$$`,
          String.raw`$$=1+3=4\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 13,
      group: CUBE_PROVE,
      question: String.raw`যদি $a+b+c=0$ হয়, তবে দেখাও যে —`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$a^{3}+b^{3}+c^{3}=3abc$$`,
          solution: {
            steps: [
              String.raw`$a+b+c=0$, সুতরাং $c=-(a+b)$।`,
              String.raw`$$\therefore\; a^{3}+b^{3}+c^{3}=a^{3}+b^{3}+\{-(a+b)\}^{3}$$`,
              String.raw`$$=a^{3}+b^{3}-(a+b)^{3}$$`,
              String.raw`$$=a^{3}+b^{3}-\{a^{3}+b^{3}+3ab(a+b)\}$$`,
              String.raw`$$=-3ab(a+b)$$`,
              String.raw`$$=-3ab\times(-c)\qquad\left[\,a+b=-c\,\right]$$`,
              String.raw`$$=3abc\quad\text{(দেখানো হলো)}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{(b+c)^{2}}{3bc}+\frac{(c+a)^{2}}{3ca}+\frac{(a+b)^{2}}{3ab}=1$$`,
          solution: {
            steps: [
              String.raw`$a+b+c=0$ বলে $b+c=-a$, $c+a=-b$ এবং $a+b=-c$।`,
              String.raw`$$\therefore\;\text{L.H.S.}=\frac{(-a)^{2}}{3bc}+\frac{(-b)^{2}}{3ca}+\frac{(-c)^{2}}{3ab}$$`,
              String.raw`$$=\frac{a^{2}}{3bc}+\frac{b^{2}}{3ca}+\frac{c^{2}}{3ab}$$`,
              String.raw`$$=\frac{a^{3}+b^{3}+c^{3}}{3abc}\qquad\left[\,\text{হর }3abc\text{ করে}\,\right]$$`,
              String.raw`$$=\frac{3abc}{3abc}\qquad\left[\,\text{(ক) থেকে}\,\right]$$`,
              String.raw`$$=1=\text{R.H.S.}\quad\text{(দেখানো হলো)}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
    {
      id: 14,
      group: CUBE_PROVE,
      question: String.raw`$p-q=r$ হলে, দেখাও যে, $p^{3}-q^{3}-r^{3}=3pqr$।`,
      solution: {
        steps: [
          String.raw`$$p^{3}-q^{3}=(p-q)^{3}+3pq(p-q)$$`,
          String.raw`$$=r^{3}+3pq\cdot r\qquad\left[\,p-q=r\,\right]$$`,
          String.raw`$$\therefore\; p^{3}-q^{3}-r^{3}=3pqr\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 15,
      group: CUBE_PROVE,
      question: String.raw`$2x-\dfrac{2}{x}=3$ হলে, দেখাও যে, $8\left(x^{3}-\dfrac{1}{x^{3}}\right)=63$।`,
      solution: {
        steps: [
          String.raw`$$2x-\frac{2}{x}=3\quad\text{বা, }2\left(x-\frac{1}{x}\right)=3$$`,
          String.raw`$$\therefore\; x-\frac{1}{x}=\frac{3}{2}$$`,
          String.raw`$$\text{এখন, } x^{3}-\frac{1}{x^{3}}=\left(x-\frac{1}{x}\right)^{3}+3\left(x-\frac{1}{x}\right)$$`,
          String.raw`$$=\left(\frac{3}{2}\right)^{3}+3\cdot\frac{3}{2}=\frac{27}{8}+\frac{9}{2}=\frac{27+36}{8}=\frac{63}{8}$$`,
          String.raw`$$\therefore\; 8\left(x^{3}-\frac{1}{x^{3}}\right)=8\times\frac{63}{8}=63\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 16,
      group: CUBE_PROVE,
      question: String.raw`$a=\sqrt{6}+\sqrt{5}$ হলে, $\dfrac{a^{6}-1}{a^{3}}$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\frac{a^{6}-1}{a^{3}}=a^{3}-\frac{1}{a^{3}}$$`,
          String.raw`$$\frac{1}{a}=\frac{1}{\sqrt{6}+\sqrt{5}}=\frac{\sqrt{6}-\sqrt{5}}{(\sqrt{6})^{2}-(\sqrt{5})^{2}}=\frac{\sqrt{6}-\sqrt{5}}{6-5}=\sqrt{6}-\sqrt{5}$$`,
          String.raw`$$\therefore\; a-\frac{1}{a}=(\sqrt{6}+\sqrt{5})-(\sqrt{6}-\sqrt{5})=2\sqrt{5}$$`,
          String.raw`$$\therefore\; a^{3}-\frac{1}{a^{3}}=\left(a-\frac{1}{a}\right)^{3}+3\left(a-\frac{1}{a}\right)$$`,
          String.raw`$$=(2\sqrt{5})^{3}+3(2\sqrt{5})$$`,
          String.raw`$$=8\cdot 5\sqrt{5}+6\sqrt{5}=40\sqrt{5}+6\sqrt{5}=46\sqrt{5}$$`,
        ],
        answer: String.raw`$46\sqrt{5}$`,
      },
    },
    {
      id: 17,
      group: CUBE_PROVE,
      question: String.raw`$x-\dfrac{1}{x}=\sqrt{3}$, যেখানে $x\neq 0$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`প্রমাণ করো যে, $x^{2}-\sqrt{3}\,x=1$।`,
          solution: {
            steps: [
              String.raw`$$x-\frac{1}{x}=\sqrt{3}$$`,
              String.raw`$$\text{উভয়পক্ষকে } x\text{ দ্বারা গুণ করে, } x^{2}-1=\sqrt{3}\,x$$`,
              String.raw`$$\therefore\; x^{2}-\sqrt{3}\,x=1\quad\text{(প্রমাণিত)}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $23\left(x^{2}+\dfrac{1}{x^{2}}\right)=5\left(x^{4}+\dfrac{1}{x^{4}}\right)$।`,
          solution: {
            steps: [
              String.raw`$$x^{2}+\frac{1}{x^{2}}=\left(x-\frac{1}{x}\right)^{2}+2=(\sqrt{3})^{2}+2=3+2=5$$`,
              String.raw`$$x^{4}+\frac{1}{x^{4}}=\left(x^{2}+\frac{1}{x^{2}}\right)^{2}-2=(5)^{2}-2=25-2=23$$`,
              String.raw`$$\therefore\;\text{L.H.S.}=23\times 5=115$$`,
              String.raw`$$\text{এবং R.H.S.}=5\times 23=115$$`,
              String.raw`$$\therefore\; 23\left(x^{2}+\frac{1}{x^{2}}\right)=5\left(x^{4}+\frac{1}{x^{4}}\right)\quad\text{(প্রমাণিত)}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "গ",
          question: String.raw`$x^{6}+\dfrac{1}{x^{6}}$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$x^{6}+\frac{1}{x^{6}}=\left(x^{2}+\frac{1}{x^{2}}\right)^{3}-3\left(x^{2}+\frac{1}{x^{2}}\right)$$`,
              String.raw`$$=(5)^{3}-3\times 5\qquad\left[\,x^{2}+\tfrac{1}{x^{2}}=5\,\right]$$`,
              String.raw`$$=125-15=110$$`,
            ],
            answer: String.raw`$110$`,
          },
        },
      ],
    },
  ],
};

const FACTORISE = "উৎপাদকে বিশ্লেষণ করো (১ – ৩০)";
const FACT_SHOW = "দেখাও যে (৩১)";

const exercise33: Exercise = {
  id: "3.3",
  bnId: "অনুশীলনী ৩.৩",
  title: "উৎপাদকে বিশ্লেষণ",
  bookPages: "৫৮ – ৫৯",
  formulas: [
    {
      title: "কোন কৌশল কখন",
      formulas: [
        {
          statement: String.raw`সাধারণ উৎপাদক`,
          note: "প্রতিটি পদে একই উৎপাদক থাকলে সেটি আগে বের করে নাও।",
        },
        {
          statement: String.raw`$$a^{2}\pm 2ab+b^{2}=(a\pm b)^{2}$$`,
          note: "পূর্ণবর্গ। তিন পদের দুইটি বর্গ আর মাঝেরটি তাদের দ্বিগুণ গুণফল হলে।",
        },
        {
          statement: String.raw`$$a^{2}-b^{2}=(a+b)(a-b)$$`,
          note: "দুইটি বর্গের অন্তর। দরকার হলে পদ যোগ-বিয়োগ করে রাশিটিকে এই আকারে আনো।",
        },
        {
          statement: String.raw`$$x^{2}+(a+b)x+ab=(x+a)(x+b)$$`,
          note: String.raw`সরল মধ্যপদ বিভক্তিকরণ। $q$-এর এমন দুইটি উৎপাদক নাও যাদের যোগফল $p$।`,
        },
        {
          statement: String.raw`$$ax^{2}+bx+c\;:\;ac\text{-কে এমন দুই ভাগে ভাঙো যাদের যোগফল }b$$`,
          note: "যৌগিক মধ্যপদ বিশ্লেষণ। ভাঙার পর জোড়ায় জোড়ায় সাধারণ উৎপাদক ওঠে।",
        },
        {
          statement: String.raw`$$a^{3}\pm 3a^{2}b+3ab^{2}\pm b^{3}=(a\pm b)^{3}$$`,
          note: "পূর্ণঘন।",
        },
        {
          statement: String.raw`$$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2}),\qquad a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$$`,
          note: "দুইটি ঘনের যোগফল বা বিয়োগফল।",
        },
      ],
    },
  ],
  examples: [
    {
      id: 18,
      question: String.raw`$$3a^{2}b+6ab^{2}+12a^{2}b^{2}$$`,
      solution: {
        steps: [
          String.raw`$$3a^{2}b+6ab^{2}+12a^{2}b^{2}=3ab(a+2b+4ab)$$`,
        ],
        answer: String.raw`$3ab(a+2b+4ab)$`,
      },
    },
    {
      id: 19,
      question: String.raw`$$2ab(x-y)+2bc(x-y)+3ca(x-y)$$`,
      solution: {
        steps: [
          String.raw`$$2ab(x-y)+2bc(x-y)+3ca(x-y)=(x-y)(2ab+2bc+3ca)$$`,
        ],
        answer: String.raw`$(x-y)(2ab+2bc+3ca)$`,
      },
    },
    {
      id: 20,
      question: String.raw`$4x^{2}+12x+9$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$4x^{2}+12x+9=(2x)^{2}+2\times 2x\times 3+(3)^{2}$$`,
          String.raw`$$=(2x+3)^{2}=(2x+3)(2x+3)$$`,
        ],
        answer: String.raw`$(2x+3)(2x+3)$`,
      },
    },
    {
      id: 21,
      question: String.raw`$9x^{2}-30xy+25y^{2}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$9x^{2}-30xy+25y^{2}$$`,
          String.raw`$$=(3x)^{2}-2\times 3x\times 5y+(5y)^{2}$$`,
          String.raw`$$=(3x-5y)^{2}=(3x-5y)(3x-5y)$$`,
        ],
        answer: String.raw`$(3x-5y)(3x-5y)$`,
      },
    },
    {
      id: 22,
      question: String.raw`$a^{2}-1+2b-b^{2}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$a^{2}-1+2b-b^{2}=a^{2}-(b^{2}-2b+1)$$`,
          String.raw`$$=a^{2}-(b-1)^{2}=\{a+(b-1)\}\{a-(b-1)\}$$`,
          String.raw`$$=(a+b-1)(a-b+1)$$`,
        ],
        answer: String.raw`$(a+b-1)(a-b+1)$`,
      },
    },
    {
      id: 23,
      question: String.raw`$a^{4}+64b^{4}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$a^{4}+64b^{4}=(a^{2})^{2}+(8b^{2})^{2}$$`,
          String.raw`$$=(a^{2})^{2}+2\times a^{2}\times 8b^{2}+(8b^{2})^{2}-16a^{2}b^{2}$$`,
          String.raw`$$=(a^{2}+8b^{2})^{2}-(4ab)^{2}$$`,
          String.raw`$$=(a^{2}+8b^{2}+4ab)(a^{2}+8b^{2}-4ab)$$`,
          String.raw`$$=(a^{2}+4ab+8b^{2})(a^{2}-4ab+8b^{2})$$`,
        ],
        answer: String.raw`$(a^{2}+4ab+8b^{2})(a^{2}-4ab+8b^{2})$`,
      },
    },
    {
      id: 24,
      question: String.raw`$x^{2}+12x+35$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$x^{2}+12x+35=x^{2}+(5+7)x+5\times 7$$`,
          String.raw`$$=(x+5)(x+7)$$`,
        ],
        answer: String.raw`$(x+5)(x+7)$`,
      },
    },
    {
      id: 25,
      question: String.raw`$x^{2}+x-20$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$x^{2}+x-20=x^{2}+(5-4)x+(5)(-4)$$`,
          String.raw`$$=(x+5)(x-4)$$`,
        ],
        answer: String.raw`$(x+5)(x-4)$`,
      },
    },
    {
      id: 26,
      question: String.raw`$3x^{2}-x-14$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$3x^{2}-x-14=3x^{2}-7x+6x-14$$`,
          String.raw`$$=x(3x-7)+2(3x-7)$$`,
          String.raw`$$=(3x-7)(x+2)$$`,
        ],
        answer: String.raw`$(3x-7)(x+2)$`,
      },
    },
    {
      id: 27,
      question: String.raw`$8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$8x^{3}+36x^{2}y+54xy^{2}+27y^{3}$$`,
          String.raw`$$=(2x)^{3}+3\times(2x)^{2}\times 3y+3\times 2x\times(3y)^{2}+(3y)^{3}$$`,
          String.raw`$$=(2x+3y)^{3}=(2x+3y)(2x+3y)(2x+3y)$$`,
        ],
        answer: String.raw`$(2x+3y)^{3}$`,
      },
    },
    {
      id: 28,
      question: String.raw`উৎপাদকে বিশ্লেষণ করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$8a^{3}+27b^{3}$$`,
          solution: {
            steps: [
              String.raw`$$8a^{3}+27b^{3}=(2a)^{3}+(3b)^{3}$$`,
              String.raw`$$=(2a+3b)\{(2a)^{2}-2a\times 3b+(3b)^{2}\}$$`,
              String.raw`$$=(2a+3b)(4a^{2}-6ab+9b^{2})$$`,
            ],
            answer: String.raw`$(2a+3b)(4a^{2}-6ab+9b^{2})$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$a^{6}-64$$`,
          solution: {
            steps: [
              String.raw`$$a^{6}-64=(a^{3})^{2}-8^{2}$$`,
              String.raw`$$=(a^{3}+8)(a^{3}-8)$$`,
              String.raw`$$=(a^{3}+2^{3})(a^{3}-2^{3})$$`,
              String.raw`$$=(a+2)(a^{2}-2a+4)(a-2)(a^{2}+2a+4)$$`,
              String.raw`$$=(a+2)(a-2)(a^{2}+2a+4)(a^{2}-2a+4)$$`,
            ],
            answer: String.raw`$(a+2)(a-2)(a^{2}+2a+4)(a^{2}-2a+4)$`,
          },
        },
      ],
    },
    {
      id: 29,
      question: String.raw`$x^{3}+6x^{2}y+11xy^{2}+6y^{3}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`$$x^{3}+6x^{2}y+11xy^{2}+6y^{3}$$`,
          String.raw`$$=\{x^{3}+3\cdot x^{2}\cdot 2y+3\cdot x\cdot(2y)^{2}+(2y)^{3}\}-xy^{2}-2y^{3}$$`,
          String.raw`$$=(x+2y)^{3}-y^{2}(x+2y)=(x+2y)\{(x+2y)^{2}-y^{2}\}$$`,
          String.raw`$$=(x+2y)(x+2y+y)(x+2y-y)$$`,
          String.raw`$$=(x+2y)(x+3y)(x+y)=(x+y)(x+2y)(x+3y)$$`,
        ],
        answer: String.raw`$(x+y)(x+2y)(x+3y)$`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: FACTORISE,
      question: String.raw`$$ab(x-y)-bc(x-y)$$`,
      solution: {
        steps: [
          String.raw`$$ab(x-y)-bc(x-y)$$`,
          String.raw`$$=(x-y)(ab-bc)$$`,
          String.raw`$$=b(x-y)(a-c)$$`,
        ],
        answer: String.raw`$b(x-y)(a-c)$`,
      },
    },
    {
      id: 2,
      group: FACTORISE,
      question: String.raw`$$9x^{2}+24x+16$$`,
      solution: {
        steps: [
          String.raw`$$9x^{2}+24x+16=(3x)^{2}+2\times 3x\times 4+(4)^{2}$$`,
          String.raw`$$=(3x+4)^{2}=(3x+4)(3x+4)$$`,
        ],
        answer: String.raw`$(3x+4)^{2}$`,
      },
    },
    {
      id: 3,
      group: FACTORISE,
      question: String.raw`$$a^{4}-27a^{2}+1$$`,
      solution: {
        steps: [
          String.raw`$$a^{4}-27a^{2}+1$$`,
          String.raw`$$=(a^{2})^{2}-2\cdot a^{2}\cdot 1+1^{2}-25a^{2}\qquad\left[\,-27a^{2}=-2a^{2}-25a^{2}\,\right]$$`,
          String.raw`$$=(a^{2}-1)^{2}-(5a)^{2}$$`,
          String.raw`$$=(a^{2}-1+5a)(a^{2}-1-5a)$$`,
          String.raw`$$=(a^{2}+5a-1)(a^{2}-5a-1)$$`,
        ],
        answer: String.raw`$(a^{2}+5a-1)(a^{2}-5a-1)$`,
      },
    },
    {
      id: 4,
      group: FACTORISE,
      question: String.raw`$$x^{4}-6x^{2}y^{2}+y^{4}$$`,
      solution: {
        steps: [
          String.raw`$$x^{4}-6x^{2}y^{2}+y^{4}$$`,
          String.raw`$$=(x^{2})^{2}-2x^{2}y^{2}+(y^{2})^{2}-4x^{2}y^{2}$$`,
          String.raw`$$=(x^{2}-y^{2})^{2}-(2xy)^{2}$$`,
          String.raw`$$=(x^{2}-y^{2}+2xy)(x^{2}-y^{2}-2xy)$$`,
        ],
        answer: String.raw`$(x^{2}+2xy-y^{2})(x^{2}-2xy-y^{2})$`,
      },
    },
    {
      id: 5,
      group: FACTORISE,
      question: String.raw`$$(a^{2}-b^{2})(x^{2}-y^{2})+4abxy$$`,
      solution: {
        steps: [
          String.raw`$$(a^{2}-b^{2})(x^{2}-y^{2})+4abxy$$`,
          String.raw`$$=a^{2}x^{2}-a^{2}y^{2}-b^{2}x^{2}+b^{2}y^{2}+4abxy$$`,
          String.raw`$$=(a^{2}x^{2}+2abxy+b^{2}y^{2})-(a^{2}y^{2}-2abxy+b^{2}x^{2})$$`,
          String.raw`$$=(ax+by)^{2}-(ay-bx)^{2}$$`,
          String.raw`$$=(ax+by+ay-bx)(ax+by-ay+bx)$$`,
          String.raw`$$=\{a(x+y)-b(x-y)\}\{a(x-y)+b(x+y)\}$$`,
        ],
        answer: String.raw`$\{a(x+y)-b(x-y)\}\{a(x-y)+b(x+y)\}$`,
      },
    },
    {
      id: 6,
      group: FACTORISE,
      question: String.raw`$$4a^{2}-12ab+9b^{2}-4c^{2}$$`,
      solution: {
        steps: [
          String.raw`$$4a^{2}-12ab+9b^{2}-4c^{2}$$`,
          String.raw`$$=\{(2a)^{2}-2\times 2a\times 3b+(3b)^{2}\}-(2c)^{2}$$`,
          String.raw`$$=(2a-3b)^{2}-(2c)^{2}$$`,
          String.raw`$$=(2a-3b+2c)(2a-3b-2c)$$`,
        ],
        answer: String.raw`$(2a-3b+2c)(2a-3b-2c)$`,
      },
    },
    {
      id: 7,
      group: FACTORISE,
      question: String.raw`$$a^{2}+6a+8-y^{2}+2y$$`,
      solution: {
        steps: [
          String.raw`$$a^{2}+6a+8-y^{2}+2y$$`,
          String.raw`$$=(a^{2}+6a+9)-1-(y^{2}-2y+1)+1$$`,
          String.raw`$$=(a+3)^{2}-(y-1)^{2}$$`,
          String.raw`$$=(a+3+y-1)(a+3-y+1)$$`,
          String.raw`$$=(a+y+2)(a-y+4)$$`,
        ],
        answer: String.raw`$(a+y+2)(a-y+4)$`,
      },
    },
    {
      id: 8,
      group: FACTORISE,
      question: String.raw`$$16x^{2}-25y^{2}-8xz+10yz$$`,
      solution: {
        steps: [
          String.raw`$$16x^{2}-25y^{2}-8xz+10yz$$`,
          String.raw`$$=\{(4x)^{2}-(5y)^{2}\}-2z(4x-5y)$$`,
          String.raw`$$=(4x+5y)(4x-5y)-2z(4x-5y)$$`,
          String.raw`$$=(4x-5y)(4x+5y-2z)$$`,
        ],
        answer: String.raw`$(4x-5y)(4x+5y-2z)$`,
      },
    },
    {
      id: 9,
      group: FACTORISE,
      question: String.raw`$$x^{2}+13x+36$$`,
      solution: {
        steps: [
          String.raw`$$x^{2}+13x+36=x^{2}+(4+9)x+4\times 9$$`,
          String.raw`$$=(x+4)(x+9)$$`,
        ],
        answer: String.raw`$(x+4)(x+9)$`,
      },
    },
    {
      id: 10,
      group: FACTORISE,
      question: String.raw`$$x^{4}+x^{2}-20$$`,
      solution: {
        steps: [
          String.raw`$$x^{4}+x^{2}-20=(x^{2})^{2}+(5-4)x^{2}+(5)(-4)$$`,
          String.raw`$$=(x^{2}+5)(x^{2}-4)$$`,
          String.raw`$$=(x^{2}+5)(x+2)(x-2)$$`,
        ],
        answer: String.raw`$(x^{2}+5)(x+2)(x-2)$`,
      },
    },
    {
      id: 11,
      group: FACTORISE,
      question: String.raw`$$a^{2}-30a+216$$`,
      solution: {
        steps: [
          String.raw`$$a^{2}-30a+216=a^{2}-(12+18)a+12\times 18$$`,
          String.raw`$$=(a-12)(a-18)$$`,
        ],
        answer: String.raw`$(a-12)(a-18)$`,
      },
    },
    {
      id: 12,
      group: FACTORISE,
      question: String.raw`$$a^{8}-a^{4}-2$$`,
      solution: {
        steps: [
          String.raw`$$a^{8}-a^{4}-2=(a^{4})^{2}+(1-2)a^{4}+(1)(-2)$$`,
          String.raw`$$=(a^{4}+1)(a^{4}-2)$$`,
        ],
        answer: String.raw`$(a^{4}+1)(a^{4}-2)$`,
      },
    },
    {
      id: 13,
      group: FACTORISE,
      question: String.raw`$$x^{2}-37x-650$$`,
      solution: {
        steps: [
          String.raw`$$x^{2}-37x-650=x^{2}+(13-50)x+(13)(-50)$$`,
          String.raw`$$=(x+13)(x-50)$$`,
        ],
        answer: String.raw`$(x+13)(x-50)$`,
      },
    },
    {
      id: 14,
      group: FACTORISE,
      question: String.raw`$$9x^{2}y^{2}-5xy^{2}-14y^{2}$$`,
      solution: {
        steps: [
          String.raw`$$9x^{2}y^{2}-5xy^{2}-14y^{2}=y^{2}(9x^{2}-5x-14)$$`,
          String.raw`$$=y^{2}(9x^{2}-14x+9x-14)\qquad\left[\,9\times(-14)=-126=(-14)\times 9\,\right]$$`,
          String.raw`$$=y^{2}\{x(9x-14)+1(9x-14)\}$$`,
          String.raw`$$=y^{2}(9x-14)(x+1)$$`,
        ],
        answer: String.raw`$y^{2}(9x-14)(x+1)$`,
      },
    },
    {
      id: 15,
      group: FACTORISE,
      question: String.raw`$$4x^{4}-27x^{2}-81$$`,
      solution: {
        steps: [
          String.raw`$$4x^{4}-27x^{2}-81$$`,
          String.raw`$$=4x^{4}-36x^{2}+9x^{2}-81\qquad\left[\,4\times(-81)=-324=(-36)\times 9\,\right]$$`,
          String.raw`$$=4x^{2}(x^{2}-9)+9(x^{2}-9)$$`,
          String.raw`$$=(x^{2}-9)(4x^{2}+9)$$`,
          String.raw`$$=(x+3)(x-3)(4x^{2}+9)$$`,
        ],
        answer: String.raw`$(x+3)(x-3)(4x^{2}+9)$`,
      },
    },
    {
      id: 16,
      group: FACTORISE,
      question: String.raw`$$ax^{2}+(a^{2}+1)x+a$$`,
      solution: {
        steps: [
          String.raw`$$ax^{2}+(a^{2}+1)x+a$$`,
          String.raw`$$=ax^{2}+a^{2}x+x+a$$`,
          String.raw`$$=ax(x+a)+1(x+a)$$`,
          String.raw`$$=(x+a)(ax+1)$$`,
        ],
        answer: String.raw`$(x+a)(ax+1)$`,
      },
    },
    {
      id: 17,
      group: FACTORISE,
      question: String.raw`$$3(a^{2}+2a)^{2}-22(a^{2}+2a)+40$$`,
      solution: {
        steps: [
          String.raw`ধরি, $a^{2}+2a=u$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=3u^{2}-22u+40$$`,
          String.raw`$$=3u^{2}-12u-10u+40\qquad\left[\,3\times 40=120=(-12)\times(-10)\,\right]$$`,
          String.raw`$$=3u(u-4)-10(u-4)$$`,
          String.raw`$$=(u-4)(3u-10)$$`,
          String.raw`$$=(a^{2}+2a-4)\{3(a^{2}+2a)-10\}$$`,
          String.raw`$$=(a^{2}+2a-4)(3a^{2}+6a-10)$$`,
        ],
        answer: String.raw`$(a^{2}+2a-4)(3a^{2}+6a-10)$`,
      },
    },
    {
      id: 18,
      group: FACTORISE,
      question: String.raw`$$(a-1)x^{2}+a^{2}xy+(a+1)y^{2}$$`,
      solution: {
        steps: [
          String.raw`$$(a-1)\times(a+1)=a^{2}-1=1\times(a^{2}-1),\qquad 1+(a^{2}-1)=a^{2}$$`,
          String.raw`সুতরাং মধ্যপদ $a^{2}xy$-কে $xy$ ও $(a^{2}-1)xy$ রূপে ভাঙা যায়।`,
          String.raw`$$(a-1)x^{2}+a^{2}xy+(a+1)y^{2}$$`,
          String.raw`$$=(a-1)x^{2}+xy+(a^{2}-1)xy+(a+1)y^{2}$$`,
          String.raw`$$=x\{(a-1)x+y\}+(a+1)y\{(a-1)x+y\}$$`,
          String.raw`$$=\{(a-1)x+y\}\{x+(a+1)y\}$$`,
        ],
        answer: String.raw`$\{(a-1)x+y\}\{x+(a+1)y\}$`,
      },
    },
    {
      id: 19,
      group: FACTORISE,
      question: String.raw`$$x^{3}+3x^{2}+3x+2$$`,
      solution: {
        steps: [
          String.raw`$$x^{3}+3x^{2}+3x+2=(x^{3}+3x^{2}+3x+1)+1$$`,
          String.raw`$$=(x+1)^{3}+1^{3}$$`,
          String.raw`$$=(x+1+1)\{(x+1)^{2}-(x+1)\cdot 1+1^{2}\}$$`,
          String.raw`$$=(x+2)(x^{2}+2x+1-x-1+1)$$`,
          String.raw`$$=(x+2)(x^{2}+x+1)$$`,
        ],
        answer: String.raw`$(x+2)(x^{2}+x+1)$`,
      },
    },
    {
      id: 20,
      group: FACTORISE,
      question: String.raw`$$a^{3}-6a^{2}+12a-9$$`,
      solution: {
        steps: [
          String.raw`$$a^{3}-6a^{2}+12a-9=(a^{3}-6a^{2}+12a-8)-1$$`,
          String.raw`$$=(a-2)^{3}-1^{3}$$`,
          String.raw`$$=(a-2-1)\{(a-2)^{2}+(a-2)\cdot 1+1^{2}\}$$`,
          String.raw`$$=(a-3)(a^{2}-4a+4+a-2+1)$$`,
          String.raw`$$=(a-3)(a^{2}-3a+3)$$`,
        ],
        answer: String.raw`$(a-3)(a^{2}-3a+3)$`,
      },
    },
    {
      id: 21,
      group: FACTORISE,
      question: String.raw`$$a^{3}-9b^{3}+(a+b)^{3}$$`,
      solution: {
        steps: [
          String.raw`$$a^{3}-9b^{3}+(a+b)^{3}$$`,
          String.raw`$$=a^{3}-9b^{3}+a^{3}+3a^{2}b+3ab^{2}+b^{3}$$`,
          String.raw`$$=2a^{3}+3a^{2}b+3ab^{2}-8b^{3}$$`,
          String.raw`$a=b$ বসালে রাশিটির মান $2+3+3-8=0$, সুতরাং $(a-b)$ একটি উৎপাদক।`,
          String.raw`$$=2a^{3}-2a^{2}b+5a^{2}b-5ab^{2}+8ab^{2}-8b^{3}$$`,
          String.raw`$$=2a^{2}(a-b)+5ab(a-b)+8b^{2}(a-b)$$`,
          String.raw`$$=(a-b)(2a^{2}+5ab+8b^{2})$$`,
        ],
        answer: String.raw`$(a-b)(2a^{2}+5ab+8b^{2})$`,
      },
    },
    {
      id: 22,
      group: FACTORISE,
      question: String.raw`$$8x^{3}+12x^{2}+6x-63$$`,
      solution: {
        steps: [
          String.raw`$$8x^{3}+12x^{2}+6x-63=(8x^{3}+12x^{2}+6x+1)-64$$`,
          String.raw`$$=(2x+1)^{3}-4^{3}$$`,
          String.raw`$$=(2x+1-4)\{(2x+1)^{2}+4(2x+1)+16\}$$`,
          String.raw`$$=(2x-3)(4x^{2}+4x+1+8x+4+16)$$`,
          String.raw`$$=(2x-3)(4x^{2}+12x+21)$$`,
        ],
        answer: String.raw`$(2x-3)(4x^{2}+12x+21)$`,
      },
    },
    {
      id: 23,
      group: FACTORISE,
      question: String.raw`$$8a^{3}+\frac{b^{3}}{27}$$`,
      solution: {
        steps: [
          String.raw`$$8a^{3}+\frac{b^{3}}{27}=(2a)^{3}+\left(\frac{b}{3}\right)^{3}$$`,
          String.raw`$$=\left(2a+\frac{b}{3}\right)\left\{(2a)^{2}-2a\cdot\frac{b}{3}+\left(\frac{b}{3}\right)^{2}\right\}$$`,
          String.raw`$$=\left(2a+\frac{b}{3}\right)\left(4a^{2}-\frac{2ab}{3}+\frac{b^{2}}{9}\right)$$`,
          String.raw`পূর্ণসংখ্যা সহগে লিখলে একই উৎপাদকগুলো দাঁড়ায়,`,
          String.raw`$$=\frac{1}{27}(6a+b)(36a^{2}-6ab+b^{2})$$`,
        ],
        answer: String.raw`$\left(2a+\dfrac{b}{3}\right)\left(4a^{2}-\dfrac{2ab}{3}+\dfrac{b^{2}}{9}\right)$`,
      },
    },
    {
      id: 24,
      group: FACTORISE,
      question: String.raw`$$\frac{a^{6}}{27}-b^{6}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{a^{6}}{27}-b^{6}=\left(\frac{a^{2}}{3}\right)^{3}-(b^{2})^{3}$$`,
          String.raw`$$=\left(\frac{a^{2}}{3}-b^{2}\right)\left\{\left(\frac{a^{2}}{3}\right)^{2}+\frac{a^{2}}{3}\cdot b^{2}+(b^{2})^{2}\right\}$$`,
          String.raw`$$=\left(\frac{a^{2}}{3}-b^{2}\right)\left(\frac{a^{4}}{9}+\frac{a^{2}b^{2}}{3}+b^{4}\right)$$`,
          String.raw`পূর্ণসংখ্যা সহগে,`,
          String.raw`$$=\frac{1}{27}(a^{2}-3b^{2})(a^{4}+3a^{2}b^{2}+9b^{4})$$`,
        ],
        answer: String.raw`$\left(\dfrac{a^{2}}{3}-b^{2}\right)\left(\dfrac{a^{4}}{9}+\dfrac{a^{2}b^{2}}{3}+b^{4}\right)$`,
      },
    },
    {
      id: 25,
      group: FACTORISE,
      question: String.raw`$$4a^{2}+\frac{1}{4a^{2}}-2+4a-\frac{1}{a}$$`,
      solution: {
        steps: [
          String.raw`$$4a^{2}+\frac{1}{4a^{2}}-2=(2a)^{2}-2\cdot 2a\cdot\frac{1}{2a}+\left(\frac{1}{2a}\right)^{2}=\left(2a-\frac{1}{2a}\right)^{2}$$`,
          String.raw`$$\text{এবং }4a-\frac{1}{a}=2\left(2a-\frac{1}{2a}\right)$$`,
          String.raw`ধরি, $2a-\dfrac{1}{2a}=u$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=u^{2}+2u=u(u+2)$$`,
          String.raw`$$=\left(2a-\frac{1}{2a}\right)\left(2a-\frac{1}{2a}+2\right)$$`,
        ],
        answer: String.raw`$\left(2a-\dfrac{1}{2a}\right)\left(2a-\dfrac{1}{2a}+2\right)$`,
      },
    },
    {
      id: 26,
      group: FACTORISE,
      question: String.raw`$$(3a+1)^{3}-(2a-3)^{3}$$`,
      solution: {
        steps: [
          String.raw`ধরি, $3a+1=x$ এবং $2a-3=y$; তাহলে $x-y=a+4$।`,
          String.raw`$$x^{2}=9a^{2}+6a+1,\qquad xy=6a^{2}-7a-3,\qquad y^{2}=4a^{2}-12a+9$$`,
          String.raw`$$\therefore\; x^{2}+xy+y^{2}=19a^{2}-13a+7$$`,
          String.raw`$$\therefore\;(3a+1)^{3}-(2a-3)^{3}=(x-y)(x^{2}+xy+y^{2})$$`,
          String.raw`$$=(a+4)(19a^{2}-13a+7)$$`,
        ],
        answer: String.raw`$(a+4)(19a^{2}-13a+7)$`,
      },
    },
    {
      id: 27,
      group: FACTORISE,
      question: String.raw`$$(x+2)(x+3)(x+4)(x+5)-48$$`,
      solution: {
        steps: [
          String.raw`$$(x+2)(x+3)(x+4)(x+5)-48$$`,
          String.raw`$$=\{(x+2)(x+5)\}\{(x+3)(x+4)\}-48$$`,
          String.raw`$$=(x^{2}+7x+10)(x^{2}+7x+12)-48$$`,
          String.raw`ধরি, $x^{2}+7x+10=u$।`,
          String.raw`$$=u(u+2)-48=u^{2}+2u-48$$`,
          String.raw`$$=(u+8)(u-6)$$`,
          String.raw`$$=(x^{2}+7x+10+8)(x^{2}+7x+10-6)$$`,
          String.raw`$$=(x^{2}+7x+18)(x^{2}+7x+4)$$`,
        ],
        answer: String.raw`$(x^{2}+7x+18)(x^{2}+7x+4)$`,
      },
    },
    {
      id: 28,
      group: FACTORISE,
      question: String.raw`$$(x-1)(x-3)(x-5)(x-7)-65$$`,
      solution: {
        steps: [
          String.raw`$$(x-1)(x-3)(x-5)(x-7)-65$$`,
          String.raw`$$=\{(x-1)(x-7)\}\{(x-3)(x-5)\}-65$$`,
          String.raw`$$=(x^{2}-8x+7)(x^{2}-8x+15)-65$$`,
          String.raw`ধরি, $x^{2}-8x+7=u$।`,
          String.raw`$$=u(u+8)-65=u^{2}+8u-65$$`,
          String.raw`$$=(u+13)(u-5)$$`,
          String.raw`$$=(x^{2}-8x+7+13)(x^{2}-8x+7-5)$$`,
          String.raw`$$=(x^{2}-8x+20)(x^{2}-8x+2)$$`,
        ],
        answer: String.raw`$(x^{2}-8x+20)(x^{2}-8x+2)$`,
      },
    },
    {
      id: 29,
      group: FACTORISE,
      question: String.raw`$$2b^{2}c^{2}+2c^{2}a^{2}+2a^{2}b^{2}-a^{4}-b^{4}-c^{4}$$`,
      solution: {
        steps: [
          String.raw`$$2b^{2}c^{2}+2c^{2}a^{2}+2a^{2}b^{2}-a^{4}-b^{4}-c^{4}$$`,
          String.raw`$$=-\{a^{4}+b^{4}+c^{4}-2a^{2}b^{2}-2b^{2}c^{2}-2c^{2}a^{2}\}$$`,
          String.raw`$$=-\{(a^{2}-b^{2}-c^{2})^{2}-4b^{2}c^{2}\}$$`,
          String.raw`$$=(2bc)^{2}-(a^{2}-b^{2}-c^{2})^{2}$$`,
          String.raw`$$=(2bc+a^{2}-b^{2}-c^{2})(2bc-a^{2}+b^{2}+c^{2})$$`,
          String.raw`$$=\{a^{2}-(b-c)^{2}\}\{(b+c)^{2}-a^{2}\}$$`,
          String.raw`$$=(a+b-c)(a-b+c)(b+c+a)(b+c-a)$$`,
          String.raw`$$=(a+b+c)(a+b-c)(b+c-a)(c+a-b)$$`,
        ],
        answer: String.raw`$(a+b+c)(a+b-c)(b+c-a)(c+a-b)$`,
      },
    },
    {
      id: 30,
      group: FACTORISE,
      question: String.raw`$$14(x+z)^{2}-29(x+z)(x+1)-15(x+1)^{2}$$`,
      solution: {
        steps: [
          String.raw`ধরি, $x+z=p$ এবং $x+1=q$।`,
          String.raw`$$\therefore\;\text{প্রদত্ত রাশি}=14p^{2}-29pq-15q^{2}$$`,
          String.raw`$$=14p^{2}-35pq+6pq-15q^{2}\qquad\left[\,14\times(-15)=-210=(-35)\times 6\,\right]$$`,
          String.raw`$$=7p(2p-5q)+3q(2p-5q)$$`,
          String.raw`$$=(2p-5q)(7p+3q)$$`,
          String.raw`$$=\{2(x+z)-5(x+1)\}\{7(x+z)+3(x+1)\}$$`,
          String.raw`$$=(2x+2z-5x-5)(7x+7z+3x+3)$$`,
          String.raw`$$=(2z-3x-5)(10x+7z+3)$$`,
        ],
        answer: String.raw`$(2z-3x-5)(10x+7z+3)$`,
      },
    },
    {
      id: 31,
      group: FACT_SHOW,
      question: String.raw`দেখাও যে, $(x+1)(x+2)(3x-1)(3x-4)=(3x^{2}+2x-1)(3x^{2}+2x-8)$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=(x+1)(x+2)(3x-1)(3x-4)$$`,
          String.raw`$$=\{(x+1)(3x-1)\}\{(x+2)(3x-4)\}$$`,
          String.raw`$$=(3x^{2}-x+3x-1)(3x^{2}-4x+6x-8)$$`,
          String.raw`$$=(3x^{2}+2x-1)(3x^{2}+2x-8)=\text{R.H.S.}$$`,
          String.raw`$$\therefore\;(x+1)(x+2)(3x-1)(3x-4)=(3x^{2}+2x-1)(3x^{2}+2x-8)\quad\text{(দেখানো হলো)}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
  ],
};

const VANISH = "উৎপাদকে বিশ্লেষণ করো (১ – ১৬)";

const exercise34: Exercise = {
  id: "3.4",
  bnId: "অনুশীলনী ৩.৪",
  title: "ভাগশেষ উপপাদ্য ও শূন্যায়ন পদ্ধতি",
  bookPages: "৬৩",
  formulas: [
    {
      title: "ভাগশেষ ও উৎপাদক উপপাদ্য",
      formulas: [
        {
          statement: String.raw`$$\text{ভাজ্য}=\text{ভাজক}\times\text{ভাগফল}+\text{ভাগশেষ}$$`,
          note: String.raw`$f(x)=(x-a)\cdot h(x)+r$ — যেকোনো $a$-এর জন্য সত্য।`,
        },
        {
          statement: String.raw`$$f(x)\div(x-a)\;\Rightarrow\;\text{ভাগশেষ}=f(a)$$`,
          note: "ভাগশেষ উপপাদ্য। ভাগ না করেই ভাগশেষ মেলে।",
        },
        {
          statement: String.raw`$$(x-a)\text{ উৎপাদক}\iff f(a)=0$$`,
          note: "অনুসিদ্ধান্ত ১১ — উৎপাদক উপপাদ্য (Factor theorem)।",
        },
        {
          statement: String.raw`$$f(x)\div(ax+b)\;\Rightarrow\;\text{ভাগশেষ}=f\left(-\frac{b}{a}\right)$$`,
          note: String.raw`প্রতিজ্ঞা ১২, যেখানে $a\neq 0$।`,
        },
        {
          statement: String.raw`$$(ax+b)\text{ উৎপাদক}\iff f\left(-\frac{b}{a}\right)=0$$`,
          note: "অনুসিদ্ধান্ত ১৩।",
        },
      ],
    },
    {
      title: "শূন্যায়ন পদ্ধতি (Vanishing method)",
      formulas: [
        {
          statement: String.raw`ধ্রুবপদের উৎপাদকগুলো দেখো`,
          note: String.raw`$f(x)$-এর ধ্রুবপদের উৎপাদকগুলোর মধ্য থেকে $x$-এর মান বসিয়ে দেখো কোনটিতে $f(x)=0$ হয়।`,
        },
        {
          statement: String.raw`$$f(a)=0\;\Rightarrow\;(x-a)\text{ একটি উৎপাদক}$$`,
          note: "তারপর মধ্যপদ ভেঙে সেই উৎপাদকটি প্রতিটি অংশ থেকে বের করে আনো।",
        },
        {
          statement: String.raw`দুই চলকের রাশিতে একটিকে ধ্রুবক ধরো`,
          note: String.raw`যেমন $x^{3}-3xy^{2}+2y^{3}$-এ $y$-কে ধ্রুবক ধরে $f(y)=0$ পেলে $(x-y)$ উৎপাদক।`,
        },
      ],
    },
  ],
  examples: [
    {
      id: 30,
      question: String.raw`$x^{3}-x-6$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`এখানে, $f(x)=x^{3}-x-6$ একটি বহুপদী। এর ধ্রুবপদ $-6$ এর উৎপাদকগুলো $\pm 1,\pm 2,\pm 3,\pm 6$।`,
          String.raw`$x=1,-1$ বসিয়ে দেখি, $f(x)$ এর মান শূন্য হয় না। কিন্তু $x=2$ বসিয়ে দেখি,`,
          String.raw`$$f(2)=2^{3}-2-6=8-2-6=0$$`,
          String.raw`সুতরাং $x-2$, $f(x)$ বহুপদীটির একটি উৎপাদক।`,
          String.raw`$$\therefore\; f(x)=x^{3}-x-6$$`,
          String.raw`$$=x^{3}-2x^{2}+2x^{2}-4x+3x-6$$`,
          String.raw`$$=x^{2}(x-2)+2x(x-2)+3(x-2)$$`,
          String.raw`$$=(x-2)(x^{2}+2x+3)$$`,
        ],
        answer: String.raw`$(x-2)(x^{2}+2x+3)$`,
      },
    },
    {
      id: 31,
      question: String.raw`$x^{3}-3xy^{2}+2y^{3}$ এবং $x^{2}+xy-2y^{2}$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`এখানে $x$ কে চলক এবং $y$ কে ধ্রুবক হিসেবে বিবেচনা করি।`,
          String.raw`ধরি, $f(x)=x^{3}-3xy^{2}+2y^{3}$।`,
          String.raw`$$f(y)=y^{3}-3y\cdot y^{2}+2y^{3}=3y^{3}-3y^{3}=0$$`,
          String.raw`$$\therefore\;(x-y),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$x^{3}-3xy^{2}+2y^{3}=x^{3}-x^{2}y+x^{2}y-xy^{2}-2xy^{2}+2y^{3}$$`,
          String.raw`$$=x^{2}(x-y)+xy(x-y)-2y^{2}(x-y)=(x-y)(x^{2}+xy-2y^{2})$$`,
          String.raw`আবার ধরি, $g(x)=x^{2}+xy-2y^{2}$।`,
          String.raw`$$g(y)=y^{2}+y^{2}-2y^{2}=0\quad\therefore\;(x-y),\;g(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$g(x)=x^{2}-xy+2xy-2y^{2}=x(x-y)+2y(x-y)=(x-y)(x+2y)$$`,
          String.raw`$$\therefore\; x^{3}-3xy^{2}+2y^{3}=(x-y)^{2}(x+2y)$$`,
        ],
        answer: String.raw`$x^{3}-3xy^{2}+2y^{3}=(x-y)^{2}(x+2y)$ এবং $x^{2}+xy-2y^{2}=(x-y)(x+2y)$`,
      },
    },
    {
      id: 32,
      question: String.raw`$54x^{4}+27x^{3}a-16x-8a$ কে উৎপাদকে বিশ্লেষণ করো।`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=54x^{4}+27x^{3}a-16x-8a$।`,
          String.raw`$$f\left(-\frac{1}{2}a\right)=54\left(-\frac{1}{2}a\right)^{4}+27a\left(-\frac{1}{2}a\right)^{3}-16\left(-\frac{1}{2}a\right)-8a$$`,
          String.raw`$$=\frac{27}{8}a^{4}-\frac{27}{8}a^{4}+8a-8a=0$$`,
          String.raw`$$\therefore\; x-\left(-\frac{1}{2}a\right)=x+\frac{a}{2}=\frac{1}{2}(2x+a)\;\text{ই }f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`অর্থাৎ $(2x+a)$, $f(x)$ এর একটি উৎপাদক।`,
          String.raw`$$\text{এখন, }54x^{4}+27x^{3}a-16x-8a$$`,
          String.raw`$$=27x^{3}(2x+a)-8(2x+a)$$`,
          String.raw`$$=(2x+a)(27x^{3}-8)$$`,
          String.raw`$$=(2x+a)\{(3x)^{3}-(2)^{3}\}$$`,
          String.raw`$$=(2x+a)(3x-2)(9x^{2}+6x+4)$$`,
        ],
        answer: String.raw`$(2x+a)(3x-2)(9x^{2}+6x+4)$`,
      },
    },
    {
      id: 33,
      question: String.raw`$g(a)=a^{3}+a^{2}+10a-8$, $f(a)=a^{3}-9+(a+1)^{3}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$g(a)$ কে $(a-2)$ দ্বারা ভাগ করলে ভাগশেষ কত হবে তা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $g(a)=a^{3}+a^{2}+10a-8$।`,
              String.raw`ভাগশেষ উপপাদ্য অনুসারে $g(a)$ কে $(a-2)$ দ্বারা ভাগ করলে ভাগশেষ হবে $g(2)$।`,
              String.raw`$$g(2)=2^{3}+2^{2}+10\cdot 2-8=8+4+20-8=24$$`,
            ],
            answer: String.raw`ভাগশেষ $24$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$f(a)$ কে উৎপাদকে বিশ্লেষণ করো।`,
          solution: {
            steps: [
              String.raw`$f(a)=a^{3}-9+(a+1)^{3}$ একটি বহুপদী; $a=1$ বসালে বহুপদীটির মান শূন্য হয়।`,
              String.raw`ফলে $(a-1)$ বহুপদীটির একটি উৎপাদক।`,
              String.raw`$$\therefore\; f(a)=a^{3}-9+a^{3}+3a^{2}+3a+1=2a^{3}+3a^{2}+3a-8$$`,
              String.raw`$$=2a^{3}-2a^{2}+5a^{2}-5a+8a-8$$`,
              String.raw`$$=2a^{2}(a-1)+5a(a-1)+8(a-1)$$`,
              String.raw`$$=(a-1)(2a^{2}+5a+8)$$`,
            ],
            answer: String.raw`$(a-1)(2a^{2}+5a+8)$`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      group: VANISH,
      question: String.raw`$$3a^{3}+2a+5$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(a)=3a^{3}+2a+5$।`,
          String.raw`$$f(-1)=3(-1)^{3}+2(-1)+5=-3-2+5=0$$`,
          String.raw`$$\therefore\;(a+1),\;f(a)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$3a^{3}+2a+5=3a^{3}+3a^{2}-3a^{2}-3a+5a+5$$`,
          String.raw`$$=3a^{2}(a+1)-3a(a+1)+5(a+1)$$`,
          String.raw`$$=(a+1)(3a^{2}-3a+5)$$`,
        ],
        answer: String.raw`$(a+1)(3a^{2}-3a+5)$`,
      },
    },
    {
      id: 2,
      group: VANISH,
      question: String.raw`$$x^{3}-7xy^{2}-6y^{3}$$`,
      solution: {
        steps: [
          String.raw`$y$ কে ধ্রুবক ধরে $f(x)=x^{3}-7xy^{2}-6y^{3}$।`,
          String.raw`$$f(-y)=-y^{3}+7y^{3}-6y^{3}=0$$`,
          String.raw`$$\therefore\;(x+y),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$x^{3}-7xy^{2}-6y^{3}=x^{3}+x^{2}y-x^{2}y-xy^{2}-6xy^{2}-6y^{3}$$`,
          String.raw`$$=x^{2}(x+y)-xy(x+y)-6y^{2}(x+y)$$`,
          String.raw`$$=(x+y)(x^{2}-xy-6y^{2})$$`,
          String.raw`$$=(x+y)(x^{2}-3xy+2xy-6y^{2})$$`,
          String.raw`$$=(x+y)\{x(x-3y)+2y(x-3y)\}$$`,
          String.raw`$$=(x+y)(x-3y)(x+2y)$$`,
        ],
        answer: String.raw`$(x+y)(x-3y)(x+2y)$`,
      },
    },
    {
      id: 3,
      group: VANISH,
      question: String.raw`$$x^{3}+2x^{2}-5x-6$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=x^{3}+2x^{2}-5x-6$।`,
          String.raw`$$f(-1)=-1+2+5-6=0$$`,
          String.raw`$$\therefore\;(x+1),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$x^{3}+2x^{2}-5x-6=x^{3}+x^{2}+x^{2}+x-6x-6$$`,
          String.raw`$$=x^{2}(x+1)+x(x+1)-6(x+1)$$`,
          String.raw`$$=(x+1)(x^{2}+x-6)$$`,
          String.raw`$$=(x+1)(x+3)(x-2)$$`,
        ],
        answer: String.raw`$(x+1)(x+3)(x-2)$`,
      },
    },
    {
      id: 4,
      group: VANISH,
      question: String.raw`$$x^{3}+4x^{2}+x-6$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=x^{3}+4x^{2}+x-6$।`,
          String.raw`$$f(1)=1+4+1-6=0$$`,
          String.raw`$$\therefore\;(x-1),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$x^{3}+4x^{2}+x-6=x^{3}-x^{2}+5x^{2}-5x+6x-6$$`,
          String.raw`$$=x^{2}(x-1)+5x(x-1)+6(x-1)$$`,
          String.raw`$$=(x-1)(x^{2}+5x+6)$$`,
          String.raw`$$=(x-1)(x+2)(x+3)$$`,
        ],
        answer: String.raw`$(x-1)(x+2)(x+3)$`,
      },
    },
    {
      id: 5,
      group: VANISH,
      question: String.raw`$$a^{3}+3a+36$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(a)=a^{3}+3a+36$।`,
          String.raw`$$f(-3)=-27-9+36=0$$`,
          String.raw`$$\therefore\;(a+3),\;f(a)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$a^{3}+3a+36=a^{3}+3a^{2}-3a^{2}-9a+12a+36$$`,
          String.raw`$$=a^{2}(a+3)-3a(a+3)+12(a+3)$$`,
          String.raw`$$=(a+3)(a^{2}-3a+12)$$`,
        ],
        answer: String.raw`$(a+3)(a^{2}-3a+12)$`,
      },
    },
    {
      id: 6,
      group: VANISH,
      question: String.raw`$$a^{4}-4a+3$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(a)=a^{4}-4a+3$।`,
          String.raw`$$f(1)=1-4+3=0\quad\therefore\;(a-1),\;f(a)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$a^{4}-4a+3=a^{4}-a^{3}+a^{3}-a^{2}+a^{2}-a-3a+3$$`,
          String.raw`$$=a^{3}(a-1)+a^{2}(a-1)+a(a-1)-3(a-1)$$`,
          String.raw`$$=(a-1)(a^{3}+a^{2}+a-3)$$`,
          String.raw`আবার ধরি, $g(a)=a^{3}+a^{2}+a-3$; $g(1)=1+1+1-3=0$।`,
          String.raw`$$\therefore\; g(a)=a^{3}-a^{2}+2a^{2}-2a+3a-3$$`,
          String.raw`$$=a^{2}(a-1)+2a(a-1)+3(a-1)=(a-1)(a^{2}+2a+3)$$`,
          String.raw`$$\therefore\; a^{4}-4a+3=(a-1)^{2}(a^{2}+2a+3)$$`,
        ],
        answer: String.raw`$(a-1)^{2}(a^{2}+2a+3)$`,
      },
    },
    {
      id: 7,
      group: VANISH,
      question: String.raw`$$a^{3}-a^{2}-10a-8$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(a)=a^{3}-a^{2}-10a-8$।`,
          String.raw`$$f(-1)=-1-1+10-8=0\quad\therefore\;(a+1)\text{ একটি উৎপাদক}$$`,
          String.raw`$$a^{3}-a^{2}-10a-8=a^{3}+a^{2}-2a^{2}-2a-8a-8$$`,
          String.raw`$$=a^{2}(a+1)-2a(a+1)-8(a+1)$$`,
          String.raw`$$=(a+1)(a^{2}-2a-8)$$`,
          String.raw`$$=(a+1)(a-4)(a+2)$$`,
        ],
        answer: String.raw`$(a+1)(a+2)(a-4)$`,
      },
    },
    {
      id: 8,
      group: VANISH,
      question: String.raw`$$x^{3}-3x^{2}+4x-4$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=x^{3}-3x^{2}+4x-4$।`,
          String.raw`$$f(2)=8-12+8-4=0\quad\therefore\;(x-2)\text{ একটি উৎপাদক}$$`,
          String.raw`$$x^{3}-3x^{2}+4x-4=x^{3}-2x^{2}-x^{2}+2x+2x-4$$`,
          String.raw`$$=x^{2}(x-2)-x(x-2)+2(x-2)$$`,
          String.raw`$$=(x-2)(x^{2}-x+2)$$`,
        ],
        answer: String.raw`$(x-2)(x^{2}-x+2)$`,
      },
    },
    {
      id: 9,
      group: VANISH,
      question: String.raw`$$a^{3}-7a^{2}b+7ab^{2}-b^{3}$$`,
      solution: {
        steps: [
          String.raw`$b$ কে ধ্রুবক ধরে $f(a)=a^{3}-7a^{2}b+7ab^{2}-b^{3}$।`,
          String.raw`$$f(b)=b^{3}-7b^{3}+7b^{3}-b^{3}=0\quad\therefore\;(a-b)\text{ একটি উৎপাদক}$$`,
          String.raw`$$a^{3}-7a^{2}b+7ab^{2}-b^{3}=a^{3}-a^{2}b-6a^{2}b+6ab^{2}+ab^{2}-b^{3}$$`,
          String.raw`$$=a^{2}(a-b)-6ab(a-b)+b^{2}(a-b)$$`,
          String.raw`$$=(a-b)(a^{2}-6ab+b^{2})$$`,
        ],
        answer: String.raw`$(a-b)(a^{2}-6ab+b^{2})$`,
      },
    },
    {
      id: 10,
      group: VANISH,
      question: String.raw`$$x^{3}-x-24$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=x^{3}-x-24$।`,
          String.raw`$$f(3)=27-3-24=0\quad\therefore\;(x-3)\text{ একটি উৎপাদক}$$`,
          String.raw`$$x^{3}-x-24=x^{3}-3x^{2}+3x^{2}-9x+8x-24$$`,
          String.raw`$$=x^{2}(x-3)+3x(x-3)+8(x-3)$$`,
          String.raw`$$=(x-3)(x^{2}+3x+8)$$`,
        ],
        answer: String.raw`$(x-3)(x^{2}+3x+8)$`,
      },
    },
    {
      id: 11,
      group: VANISH,
      question: String.raw`$$x^{3}+6x^{2}+11x+6$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=x^{3}+6x^{2}+11x+6$।`,
          String.raw`$$f(-1)=-1+6-11+6=0\quad\therefore\;(x+1)\text{ একটি উৎপাদক}$$`,
          String.raw`$$x^{3}+6x^{2}+11x+6=x^{3}+x^{2}+5x^{2}+5x+6x+6$$`,
          String.raw`$$=x^{2}(x+1)+5x(x+1)+6(x+1)$$`,
          String.raw`$$=(x+1)(x^{2}+5x+6)$$`,
          String.raw`$$=(x+1)(x+2)(x+3)$$`,
        ],
        answer: String.raw`$(x+1)(x+2)(x+3)$`,
      },
    },
    {
      id: 12,
      group: VANISH,
      question: String.raw`$$2x^{4}-3x^{3}-3x-2$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=2x^{4}-3x^{3}-3x-2$।`,
          String.raw`$$f(2)=32-24-6-2=0\quad\therefore\;(x-2)\text{ একটি উৎপাদক}$$`,
          String.raw`$$2x^{4}-3x^{3}-3x-2=2x^{4}-4x^{3}+x^{3}-2x^{2}+2x^{2}-4x+x-2$$`,
          String.raw`$$=2x^{3}(x-2)+x^{2}(x-2)+2x(x-2)+1(x-2)$$`,
          String.raw`$$=(x-2)(2x^{3}+x^{2}+2x+1)$$`,
          String.raw`$$=(x-2)\{x^{2}(2x+1)+1(2x+1)\}$$`,
          String.raw`$$=(x-2)(2x+1)(x^{2}+1)$$`,
        ],
        answer: String.raw`$(x-2)(2x+1)(x^{2}+1)$`,
      },
    },
    {
      id: 13,
      group: VANISH,
      question: String.raw`$$4x^{4}+12x^{3}+7x^{2}-3x-2$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=4x^{4}+12x^{3}+7x^{2}-3x-2$।`,
          String.raw`$$f(-1)=4-12+7+3-2=0\quad\therefore\;(x+1)\text{ একটি উৎপাদক}$$`,
          String.raw`$$4x^{4}+12x^{3}+7x^{2}-3x-2=4x^{4}+4x^{3}+8x^{3}+8x^{2}-x^{2}-x-2x-2$$`,
          String.raw`$$=4x^{3}(x+1)+8x^{2}(x+1)-x(x+1)-2(x+1)$$`,
          String.raw`$$=(x+1)(4x^{3}+8x^{2}-x-2)$$`,
          String.raw`$$=(x+1)\{4x^{2}(x+2)-1(x+2)\}$$`,
          String.raw`$$=(x+1)(x+2)(4x^{2}-1)$$`,
          String.raw`$$=(x+1)(x+2)(2x+1)(2x-1)$$`,
        ],
        answer: String.raw`$(x+1)(x+2)(2x+1)(2x-1)$`,
      },
    },
    {
      id: 14,
      group: VANISH,
      question: String.raw`$$x^{6}-x^{5}+x^{4}-x^{3}+x^{2}-x$$`,
      solution: {
        steps: [
          String.raw`$$x^{6}-x^{5}+x^{4}-x^{3}+x^{2}-x$$`,
          String.raw`$$=x(x^{5}-x^{4}+x^{3}-x^{2}+x-1)$$`,
          String.raw`$$=x\{x^{4}(x-1)+x^{2}(x-1)+1(x-1)\}$$`,
          String.raw`$$=x(x-1)(x^{4}+x^{2}+1)$$`,
          String.raw`$$=x(x-1)\{(x^{2}+1)^{2}-x^{2}\}$$`,
          String.raw`$$=x(x-1)(x^{2}+x+1)(x^{2}-x+1)$$`,
        ],
        answer: String.raw`$x(x-1)(x^{2}+x+1)(x^{2}-x+1)$`,
      },
    },
    {
      id: 15,
      group: VANISH,
      question: String.raw`$$4x^{3}-5x^{2}+5x-1$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=4x^{3}-5x^{2}+5x-1$।`,
          String.raw`$$f\left(\frac{1}{4}\right)=4\cdot\frac{1}{64}-5\cdot\frac{1}{16}+\frac{5}{4}-1=\frac{1}{16}-\frac{5}{16}+\frac{20}{16}-\frac{16}{16}=0$$`,
          String.raw`$$\therefore\;(4x-1),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$4x^{3}-5x^{2}+5x-1=4x^{3}-x^{2}-4x^{2}+x+4x-1$$`,
          String.raw`$$=x^{2}(4x-1)-x(4x-1)+1(4x-1)$$`,
          String.raw`$$=(4x-1)(x^{2}-x+1)$$`,
        ],
        answer: String.raw`$(4x-1)(x^{2}-x+1)$`,
      },
    },
    {
      id: 16,
      group: VANISH,
      question: String.raw`$$18x^{3}+15x^{2}-x-2$$`,
      solution: {
        steps: [
          String.raw`ধরি, $f(x)=18x^{3}+15x^{2}-x-2$।`,
          String.raw`$$f\left(-\frac{1}{2}\right)=18\left(-\frac{1}{8}\right)+15\cdot\frac{1}{4}+\frac{1}{2}-2=-\frac{9}{4}+\frac{15}{4}+\frac{2}{4}-\frac{8}{4}=0$$`,
          String.raw`$$\therefore\;(2x+1),\;f(x)\text{ এর একটি উৎপাদক}$$`,
          String.raw`$$18x^{3}+15x^{2}-x-2=18x^{3}+9x^{2}+6x^{2}+3x-4x-2$$`,
          String.raw`$$=9x^{2}(2x+1)+3x(2x+1)-2(2x+1)$$`,
          String.raw`$$=(2x+1)(9x^{2}+3x-2)$$`,
          String.raw`$$=(2x+1)(9x^{2}+6x-3x-2)$$`,
          String.raw`$$=(2x+1)\{3x(3x+2)-1(3x+2)\}$$`,
          String.raw`$$=(2x+1)(3x+2)(3x-1)$$`,
        ],
        answer: String.raw`$(2x+1)(3x+2)(3x-1)$`,
      },
    },
  ],
};

const REAL_MCQ = "বহুনির্বাচনি (১ – ৮)";
const REAL_WORK = "কাজ, সময় ও দূরত্ব (৯ – ১৫)";
const REAL_TANK = "নল-চৌবাচ্চা ও ভাগ-বাটোয়ারা (১৬ – ১৭)";
const REAL_PROFIT = "লাভ-ক্ষতি (১৮ – ২০)";
const REAL_INTEREST = "মুনাফা ও ভ্যাট (২১ – ২৬)";
const REAL_EXTRA = "বাড়তি চিন্তা (২৭ – ২৯)";
const MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (৩০ – ৩৩)";
const MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (৩৪ – ৩৫)";

const exercise35: Exercise = {
  id: "3.5",
  bnId: "অনুশীলনী ৩.৫",
  title: "বাস্তব সমস্যা সমাধানে বীজগাণিতিক সূত্র",
  bookPages: "৭১ – ৭৪",
  formulas: [
    {
      title: "সমস্যা সমাধানের পদ্ধতি",
      formulas: [
        {
          statement: String.raw`অজ্ঞাত রাশিকে একটি চলক ধরো`,
          note: String.raw`সম্ভব হলে বাকি অজ্ঞাত রাশিগুলোকেও ঐ একই চলক $x$ দিয়ে প্রকাশ করো।`,
        },
        {
          statement: String.raw`শর্তগুলো একত্রে একটি সমীকরণে আনো`,
          note: "সমীকরণ সমাধান করে পাওয়া মান মূল সমস্যার শর্তে বসিয়ে যাচাই করো — ঋণাত্মক সংখ্যা, ভগ্নাংশ লোক ইত্যাদি গ্রহণযোগ্য নয়।",
        },
      ],
    },
    {
      title: "দেয়-প্রাপ্য, কাজ ও দূরত্ব",
      formulas: [
        {
          statement: String.raw`$$A=qn$$`,
          note: String.raw`$q=$ জনপ্রতি দেয় বা প্রাপ্য টাকা, $n=$ লোকের সংখ্যা।`,
        },
        {
          statement: String.raw`$$W=qnx$$`,
          note: String.raw`$q=$ প্রত্যেকে একক সময়ে কাজের যে অংশ করে, $n=$ কর্মীর সংখ্যা, $x=$ মোট সময়।`,
        },
        {
          statement: String.raw`$$d=vt$$`,
          note: String.raw`স্রোতের অনুকূলে কার্যকরী বেগ $(u+v)$, প্রতিকূলে $(u-v)$ — এখানে $u$ নৌকার, $v$ স্রোতের বেগ।`,
        },
        {
          statement: String.raw`$$Q(t)=Q_{0}\pm qt$$`,
          note: "নল ও চৌবাচ্চা: পানি ঢুকলে '+', বেরোলে '−'।",
        },
      ],
    },
    {
      title: "শতকরা, লাভ-ক্ষতি ও মুনাফা",
      formulas: [
        {
          statement: String.raw`$$p=br$$`,
          note: String.raw`$b=$ মোট রাশি, $r=\dfrac{s}{100}=s\%$, $p=$ শতকরা অংশ।`,
        },
        {
          statement: String.raw`$$S=C(1\pm r)$$`,
          note: String.raw`লাভে $S=C(1+r)$, ক্ষতিতে $S=C(1-r)$।`,
        },
        {
          statement: String.raw`$$I=Pnr,\qquad A=P(1+nr)$$`,
          note: "সরল মুনাফা ও সবৃদ্ধিমূল।",
        },
        {
          statement: String.raw`$$C=P(1+r)^{n}$$`,
          note: "চক্রবৃদ্ধি মুনাফার ক্ষেত্রে সবৃদ্ধিমূল।",
        },
      ],
    },
  ],
  examples: [
    {
      id: 34,
      question: String.raw`বার্ষিক ক্রীড়া অনুষ্ঠান করার জন্য কোনো এক সমিতির সদস্যরা $45{,}000$ টাকার বাজেট করলেন এবং সিদ্ধান্ত নিলেন যে, প্রত্যেক সদস্যই সমান চাঁদা দিবেন। কিন্তু $5$ জন সদস্য চাঁদা দিতে অসম্মতি জানালেন। এর ফলে প্রত্যেক সদস্যের মাথাপিছু $15$ টাকা চাঁদা বৃদ্ধি পেল। ঐ সমিতিতে কতজন সদস্য ছিলেন?`,
      solution: {
        steps: [
          String.raw`মনে করি, সমিতির সদস্য সংখ্যা $x$ এবং জনপ্রতি দেয় চাঁদার পরিমাণ $q$ টাকা।`,
          String.raw`$$\text{তাহলে মোট চাঁদা, }A=qx=45{,}000\;\cdots\cdots(2)$$`,
          String.raw`প্রকৃতপক্ষে চাঁদা প্রদানকারী সদস্য সংখ্যা ছিল $(x-5)$ জন এবং জনপ্রতি চাঁদা $(q+15)$ টাকা।`,
          String.raw`$$\therefore\; qx=(x-5)(q+15)\;\cdots\cdots(1)$$`,
          String.raw`$$\text{বা, }qx=qx-5q+15x-75$$`,
          String.raw`$$\text{বা, }5q=15x-75\quad\therefore\; q=3x-15$$`,
          String.raw`সমীকরণ $(2)$-এ $q$ এর মান বসিয়ে পাই,`,
          String.raw`$$(3x-15)x=45000$$`,
          String.raw`$$\text{বা, }x^{2}-5x=15000\qquad\left[\,\text{উভয়পক্ষকে }3\text{ দ্বারা ভাগ করে}\,\right]$$`,
          String.raw`$$\text{বা, }x^{2}-125x+120x-15000=0$$`,
          String.raw`$$\text{বা, }(x-125)(x+120)=0$$`,
          String.raw`$$\therefore\; x=125\;\text{ বা }\; x=-120$$`,
          String.raw`সদস্য সংখ্যা ঋণাত্মক হতে পারে না, তাই $-120$ গ্রহণযোগ্য নয়।`,
        ],
        answer: String.raw`সমিতির সদস্য সংখ্যা $125$`,
      },
    },
    {
      id: 35,
      question: String.raw`রফিক একটি কাজ $10$ দিনে করতে পারে। শফিক ঐ কাজ $15$ দিনে করতে পারে। তারা একত্রে কত দিনে কাজটি শেষ করতে পারবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, তারা একত্রে $d$ দিনে কাজটি শেষ করতে পারবে।`,
          String.raw`রফিক $1$ দিনে কাজের $\dfrac{1}{10}$ অংশ এবং শফিক $\dfrac{1}{15}$ অংশ করে।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{d}{10}+\frac{d}{15}=1$$`,
          String.raw`$$\text{বা, }d\left(\frac{3+2}{30}\right)=1$$`,
          String.raw`$$\text{বা, }\frac{5d}{30}=1\quad\therefore\; d=\frac{30}{5}=6$$`,
        ],
        answer: String.raw`একত্রে $6$ দিনে`,
      },
    },
    {
      id: 36,
      question: String.raw`একজন মাঝি স্রোতের প্রতিকূলে $t_{1}$ ঘণ্টায় $x$ কি.মি. যেতে পারে। স্রোতের অনুকূলে ঐ পথ যেতে তার $t_{2}$ ঘণ্টা লাগে। স্রোতের বেগ ও নৌকার বেগ কত?`,
      solution: {
        steps: [
          String.raw`ধরি, স্রোতের বেগ ঘণ্টায় $v$ কি.মি. এবং স্থির পানিতে নৌকার বেগ ঘণ্টায় $u$ কি.মি.।`,
          String.raw`$$\text{প্রশ্নানুসারে, }u+v=\frac{x}{t_{2}}\;\cdots\cdots(1)$$`,
          String.raw`$$\text{এবং }u-v=\frac{x}{t_{1}}\;\cdots\cdots(2)$$`,
          String.raw`$$(1)\text{ ও }(2)\text{ যোগ করে, }2u=x\left(\frac{1}{t_{1}}+\frac{1}{t_{2}}\right)\quad\therefore\; u=\frac{x}{2}\left(\frac{1}{t_{1}}+\frac{1}{t_{2}}\right)$$`,
          String.raw`$$(1)\text{ ও }(2)\text{ বিয়োগ করে, }2v=x\left(\frac{1}{t_{2}}-\frac{1}{t_{1}}\right)\quad\therefore\; v=\frac{x}{2}\left(\frac{1}{t_{2}}-\frac{1}{t_{1}}\right)$$`,
        ],
        answer: String.raw`নৌকার বেগ $\dfrac{x}{2}\left(\dfrac{1}{t_{1}}+\dfrac{1}{t_{2}}\right)$ কি.মি./ঘণ্টা, স্রোতের বেগ $\dfrac{x}{2}\left(\dfrac{1}{t_{2}}-\dfrac{1}{t_{1}}\right)$ কি.মি./ঘণ্টা`,
      },
    },
    {
      id: 37,
      question: String.raw`একটি নল $12$ মিনিটে একটি খালি চৌবাচ্চা পূর্ণ করতে পারে। অপর একটি নল প্রতি মিনিটে $14$ লিটার পানি বের করে দেয়। চৌবাচ্চাটি খালি থাকা অবস্থায় দুইটি নল একসাথে খুলে দেওয়া হলে চৌবাচ্চাটি $96$ মিনিটে পূর্ণ হয়। চৌবাচ্চাটিতে কত লিটার পানি ধরে?`,
      solution: {
        steps: [
          String.raw`মনে করি, প্রথম নল দ্বারা প্রতি মিনিটে $x$ লিটার পানি প্রবেশ করে এবং চৌবাচ্চাটিতে মোট $y$ লিটার পানি ধরে।`,
          String.raw`$$\therefore\; y=12x\;\cdots\cdots(1)$$`,
          String.raw`$$\text{আবার, } y=96x-96\times 14\;\cdots\cdots(2)$$`,
          String.raw`$$(1)\text{ থেকে }x=\frac{y}{12}\text{; }(2)\text{-এ বসিয়ে, } y=96\times\frac{y}{12}-96\times 14$$`,
          String.raw`$$\text{বা, } y=8y-96\times 14$$`,
          String.raw`$$\text{বা, }7y=96\times 14\quad\therefore\; y=\frac{96\times 14}{7}=192$$`,
        ],
        answer: String.raw`$192$ লিটার`,
      },
    },
    {
      id: 38,
      question: String.raw`একটি বইয়ের মূল্য $24$ টাকা। এই মূল্য বই তৈরির ব্যয়ের $80\%$। বাকি মূল্য সরকার ভর্তুকি দিয়ে থাকেন। সরকার প্রতি বইয়ে কত টাকা ভর্তুকি দেন?`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }p=br$$`,
          String.raw`$$\text{এখানে, }p=24\text{ টাকা এবং }r=80\%=\frac{80}{100}$$`,
          String.raw`$$\therefore\; 24=b\times\frac{80}{100}\quad\text{বা, } b=\frac{24\times 100}{80}=30$$`,
          String.raw`সুতরাং বই তৈরির ব্যয় $30$ টাকা।`,
          String.raw`$$\therefore\;\text{ভর্তুকি}=(30-24)\text{ টাকা}=6\text{ টাকা}$$`,
        ],
        answer: String.raw`প্রতি বইয়ে $6$ টাকা`,
      },
    },
    {
      id: 39,
      question: String.raw`টাকায় $n$ সংখ্যক কমলা বিক্রয় করায় $r\%$ ক্ষতি হয়। $s\%$ লাভ করতে হলে, টাকায় কয়টি কমলা বিক্রয় করতে হবে?`,
      solution: {
        steps: [
          String.raw`ক্রয়মূল্য $100$ টাকা হলে, $r\%$ ক্ষতিতে বিক্রয়মূল্য $(100-r)$ টাকা।`,
          String.raw`$$\therefore\;\text{বিক্রয়মূল্য }1\text{ টাকা হলে ক্রয়মূল্য }\frac{100}{100-r}\text{ টাকা}$$`,
          String.raw`আবার ক্রয়মূল্য $100$ টাকা হলে, $s\%$ লাভে বিক্রয়মূল্য $(100+s)$ টাকা।`,
          String.raw`$$\therefore\;\text{ক্রয়মূল্য }\frac{100}{100-r}\text{ টাকা হলে বিক্রয়মূল্য }\frac{100+s}{100}\times\frac{100}{100-r}=\frac{100+s}{100-r}\text{ টাকা}$$`,
          String.raw`$$\text{সুতরাং }\frac{100+s}{100-r}\text{ টাকায় বিক্রয় করতে হবে }n\text{ সংখ্যক কমলা}$$`,
          String.raw`$$\therefore\; 1\text{ টাকায় বিক্রয় করতে হবে }n\times\frac{100-r}{100+s}\text{ সংখ্যক কমলা}$$`,
        ],
        answer: String.raw`টাকায় $\dfrac{n(100-r)}{100+s}$ টি কমলা`,
      },
    },
    {
      id: 40,
      question: String.raw`শতকরা বার্ষিক $7$ টাকা হার সরল মুনাফায় $650$ টাকার $6$ বছরের মুনাফা কত?`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }I=Pnr$$`,
          String.raw`$$\text{এখানে, }P=650\text{ টাকা},\; n=6\text{ বছর},\; r=\frac{7}{100}$$`,
          String.raw`$$\therefore\; I=650\times 6\times\frac{7}{100}=273$$`,
        ],
        answer: String.raw`মুনাফা $273$ টাকা`,
      },
    },
    {
      id: 41,
      question: String.raw`বার্ষিক শতকরা $6$ টাকা হার চক্রবৃদ্ধি মুনাফায় $15000$ টাকার $3$ বছরের সবৃদ্ধিমূল ও চক্রবৃদ্ধি মুনাফা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }C=P(1+r)^{n}$$`,
          String.raw`$$\text{দেওয়া আছে, }P=15000,\; r=6\%=\frac{6}{100},\; n=3$$`,
          String.raw`$$\therefore\; C=15000\left(1+\frac{6}{100}\right)^{3}=15000\left(\frac{53}{50}\right)^{3}$$`,
          String.raw`$$=15000\times\frac{53}{50}\times\frac{53}{50}\times\frac{53}{50}=\frac{446631}{25}=17865.24$$`,
          String.raw`$$\therefore\;\text{চক্রবৃদ্ধি মুনাফা}=(17865.24-15000)\text{ টাকা}=2865.24\text{ টাকা}$$`,
        ],
        answer: String.raw`সবৃদ্ধিমূল $17865.24$ টাকা, চক্রবৃদ্ধি মুনাফা $2865.24$ টাকা`,
      },
    },
    {
      id: 42,
      question: String.raw`টাকায় $10$টি আইসক্রিম এর কাঠি বিক্রয় করলে $x\%$ ক্ষতি হয়। টাকায় কয়টি বিক্রয় করলে $z\%$ লাভ হবে?`,
      solution: {
        steps: [
          String.raw`ক্রয়মূল্য $100$ টাকা হলে $x\%$ ক্ষতিতে বিক্রয়মূল্য $(100-x)$ টাকা।`,
          String.raw`$$\therefore\;\text{বিক্রয়মূল্য }1\text{ টাকা হলে ক্রয়মূল্য }\frac{100}{100-x}\text{ টাকা}$$`,
          String.raw`$$\text{অর্থাৎ }10\text{টি কাঠির ক্রয়মূল্য }\frac{100}{100-x}\text{ টাকা},\;\text{ তাই }1\text{টির ক্রয়মূল্য }\frac{100}{(100-x)\times 10}\text{ টাকা}$$`,
          String.raw`আবার ক্রয়মূল্য $100$ টাকা হলে $z\%$ লাভে বিক্রয়মূল্য $(100+z)$ টাকা।`,
          String.raw`$$\therefore\; 1\text{টি কাঠির বিক্রয়মূল্য}=\frac{100+z}{100}\times\frac{100}{(100-x)\times 10}=\frac{100+z}{1000-10x}\text{ টাকা}$$`,
          String.raw`$$\therefore\;\text{টাকায় বিক্রয় করতে হবে }\frac{1000-10x}{100+z}\text{ টি কাঠি}$$`,
        ],
        answer: String.raw`টাকায় $\dfrac{1000-10x}{100+z}$ টি`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: REAL_MCQ,
      question: String.raw`$f(x)=x^{2}-4x+4$ হলে, $f(2)$ এর মান নিচের কোনটি?
ক) $4$  খ) $2$  গ) $1$  ঘ) $0$`,
      solution: {
        steps: [
          String.raw`$$f(2)=(2)^{2}-4\times 2+4$$`,
          String.raw`$$=4-8+4=0$$`,
        ],
        answer: String.raw`ঘ) $0$`,
      },
    },
    {
      id: 2,
      group: REAL_MCQ,
      question: String.raw`$x+\dfrac{2}{x}=3$ হলে, $x^{3}+\dfrac{8}{x^{3}}$ এর মান কত?
ক) $1$  খ) $8$  গ) $9$  ঘ) $16$`,
      solution: {
        steps: [
          String.raw`$$x^{3}+\frac{8}{x^{3}}=x^{3}+\left(\frac{2}{x}\right)^{3}$$`,
          String.raw`$$=\left(x+\frac{2}{x}\right)^{3}-3\cdot x\cdot\frac{2}{x}\left(x+\frac{2}{x}\right)$$`,
          String.raw`$$=\left(x+\frac{2}{x}\right)^{3}-6\left(x+\frac{2}{x}\right)$$`,
          String.raw`$$=(3)^{3}-6\times 3=27-18=9$$`,
        ],
        answer: String.raw`গ) $9$`,
      },
    },
    {
      id: 3,
      group: REAL_MCQ,
      question: String.raw`$p^{4}+p^{2}+1$ এর উৎপাদকে বিশ্লেষায়িত রূপ নিচের কোনটি?
ক) $(p^{2}-p+1)(p^{2}+p-1)$  খ) $(p^{2}-p-1)(p^{2}+p+1)$
গ) $(p^{2}+p+1)(p^{2}+p+1)$  ঘ) $(p^{2}+p+1)(p^{2}-p+1)$`,
      solution: {
        steps: [
          String.raw`$$p^{4}+p^{2}+1=(p^{2})^{2}+2p^{2}+1-p^{2}$$`,
          String.raw`$$=(p^{2}+1)^{2}-p^{2}$$`,
          String.raw`$$=(p^{2}+1+p)(p^{2}+1-p)$$`,
          String.raw`$$=(p^{2}+p+1)(p^{2}-p+1)$$`,
        ],
        answer: String.raw`ঘ) $(p^{2}+p+1)(p^{2}-p+1)$`,
      },
    },
    {
      id: 4,
      group: REAL_MCQ,
      question: String.raw`যদি $x=2-\sqrt{3}$ হয়, তবে $x^{2}$ এর মান কত?
ক) $1$  খ) $7-4\sqrt{3}$  গ) $2+\sqrt{3}$  ঘ) $\dfrac{1}{2-\sqrt{3}}$`,
      solution: {
        steps: [
          String.raw`$$x^{2}=(2-\sqrt{3})^{2}$$`,
          String.raw`$$=2^{2}-2\times 2\times\sqrt{3}+(\sqrt{3})^{2}$$`,
          String.raw`$$=4-4\sqrt{3}+3=7-4\sqrt{3}$$`,
        ],
        answer: String.raw`খ) $7-4\sqrt{3}$`,
      },
    },
    {
      id: 5,
      group: REAL_MCQ,
      question: String.raw`$f(x)=x^{2}-5x+6$ এবং $f(x)=0$ হলে, $x=$ কত?
ক) $2,3$  খ) $-5,1$  গ) $-2,3$  ঘ) $1,-5$`,
      solution: {
        steps: [
          String.raw`$$x^{2}-5x+6=0$$`,
          String.raw`$$\text{বা, }x^{2}-2x-3x+6=0$$`,
          String.raw`$$\text{বা, }x(x-2)-3(x-2)=0$$`,
          String.raw`$$\text{বা, }(x-2)(x-3)=0$$`,
          String.raw`$$\therefore\; x=2\;\text{ বা }\; x=3$$`,
        ],
        answer: String.raw`ক) $2,3$`,
      },
    },
    {
      id: 6,
      group: REAL_MCQ,
      question: String.raw`$9x^{2}+16y^{2}$ এর সাথে কত যোগ করলে যোগফল পূর্ণবর্গ রাশি হবে?
ক) $6xy$  খ) $12xy$  গ) $24xy$  ঘ) $144xy$`,
      solution: {
        steps: [
          String.raw`$$9x^{2}+16y^{2}=(3x)^{2}+(4y)^{2}$$`,
          String.raw`পূর্ণবর্গ হতে হলে মাঝের পদটি হবে $2\times 3x\times 4y$।`,
          String.raw`$$2\times 3x\times 4y=24xy$$`,
          String.raw`$$\therefore\; 9x^{2}+16y^{2}+24xy=(3x+4y)^{2}$$`,
        ],
        answer: String.raw`গ) $24xy$`,
      },
    },
    {
      id: 7,
      group: REAL_MCQ,
      question: String.raw`$a^{2}+b^{2}=9$ এবং $ab=3$ হলে —
$(i)\;(a-b)^{2}=3\qquad (ii)\;(a+b)^{2}=15\qquad (iii)\;a^{2}+b^{2}+a^{2}b^{2}=18$
নিচের কোনটি সঠিক?
ক) $i, ii$  খ) $i, iii$  গ) $ii, iii$  ঘ) $i, ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$$(i)\;(a-b)^{2}=a^{2}+b^{2}-2ab=9-2\times 3=9-6=3\;\checkmark$$`,
          String.raw`$$(ii)\;(a+b)^{2}=a^{2}+b^{2}+2ab=9+2\times 3=9+6=15\;\checkmark$$`,
          String.raw`$$(iii)\;a^{2}+b^{2}+a^{2}b^{2}=9+(ab)^{2}=9+3^{2}=9+9=18\;\checkmark$$`,
          String.raw`তিনটি বিবৃতিই সঠিক।`,
        ],
        answer: String.raw`ঘ) $i, ii$ ও $iii$`,
      },
    },
    {
      id: 8,
      group: REAL_MCQ,
      question: String.raw`$p^{3}-\dfrac{1}{64}$ এর উৎপাদক —
$(i)\;p-\dfrac{1}{4}\qquad (ii)\;p^{2}+\dfrac{p}{4}+\dfrac{1}{8}\qquad (iii)\;p^{2}+\dfrac{p}{4}+\dfrac{1}{16}$
নিচের কোনটি সঠিক?
ক) $i, ii$  খ) $i, iii$  গ) $ii, iii$  ঘ) $i, ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$$p^{3}-\frac{1}{64}=p^{3}-\left(\frac{1}{4}\right)^{3}$$`,
          String.raw`$$=\left(p-\frac{1}{4}\right)\left\{p^{2}+p\cdot\frac{1}{4}+\left(\frac{1}{4}\right)^{2}\right\}$$`,
          String.raw`$$=\left(p-\frac{1}{4}\right)\left(p^{2}+\frac{p}{4}+\frac{1}{16}\right)$$`,
          String.raw`সুতরাং $(i)$ ও $(iii)$ উৎপাদক, $(ii)$ নয়।`,
        ],
        answer: String.raw`খ) $i, iii$`,
      },
    },
    {
      id: 9,
      group: REAL_WORK,
      question: String.raw`ক একটি কাজ $p$ দিনে করে এবং খ, $2p$ দিনে করে। তারা একটি কাজ আরম্ভ করে এবং কয়েকদিন পর ক কাজটি অসমাপ্ত রেখে চলে গেল। বাকি কাজটুকু খ $r$ দিনে শেষ করে। কাজটি কত দিনে শেষ হয়েছিল?`,
      solution: {
        steps: [
          String.raw`মনে করি, তারা একত্রে $d$ দিন কাজ করেছিল; এরপর খ একা আরও $r$ দিন কাজ করে।`,
          String.raw`ক $1$ দিনে কাজের $\dfrac{1}{p}$ অংশ এবং খ $1$ দিনে $\dfrac{1}{2p}$ অংশ করে।`,
          String.raw`$$\text{প্রশ্নানুসারে, }d\left(\frac{1}{p}+\frac{1}{2p}\right)+\frac{r}{2p}=1$$`,
          String.raw`$$\text{বা, }\frac{3d}{2p}+\frac{r}{2p}=1$$`,
          String.raw`$$\text{বা, }3d+r=2p\quad\therefore\; d=\frac{2p-r}{3}$$`,
          String.raw`$$\therefore\;\text{মোট সময়}=d+r=\frac{2p-r}{3}+r=\frac{2p-r+3r}{3}=\frac{2(p+r)}{3}$$`,
        ],
        answer: String.raw`$\dfrac{2(p+r)}{3}$ দিনে`,
      },
    },
    {
      id: 10,
      group: REAL_WORK,
      question: String.raw`দৈনিক $6$ ঘণ্টা পরিশ্রম করে $10$ জন লোক একটি কাজ $7$ দিনে করতে পারে। দৈনিক কত ঘণ্টা পরিশ্রম করে $14$ জনে $6$ দিনে ঐ কাজটি করতে পারবে?`,
      solution: {
        steps: [
          String.raw`$$W=qnx\;\text{ অনুসারে কাজের মোট পরিমাণ}=\text{লোক}\times\text{দিন}\times\text{ঘণ্টা}$$`,
          String.raw`$$=10\times 7\times 6=420\;\text{লোক-ঘণ্টা}$$`,
          String.raw`মনে করি, দৈনিক $h$ ঘণ্টা পরিশ্রম করতে হবে।`,
          String.raw`$$\text{প্রশ্নানুসারে, }14\times 6\times h=420$$`,
          String.raw`$$\text{বা, }84h=420\quad\therefore\; h=\frac{420}{84}=5$$`,
        ],
        answer: String.raw`দৈনিক $5$ ঘণ্টা`,
      },
    },
    {
      id: 11,
      group: REAL_WORK,
      question: String.raw`মিতা একটি কাজ $10$ দিনে করতে পারে। রিতা সে কাজ $15$ দিনে করতে পারে। তারা একত্রে কত দিনে কাজটি শেষ করতে পারবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, তারা একত্রে $d$ দিনে কাজটি শেষ করতে পারবে।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{d}{10}+\frac{d}{15}=1$$`,
          String.raw`$$\text{বা, }d\left(\frac{3+2}{30}\right)=1$$`,
          String.raw`$$\text{বা, }\frac{5d}{30}=1\quad\therefore\; d=6$$`,
        ],
        answer: String.raw`একত্রে $6$ দিনে`,
      },
    },
    {
      id: 12,
      group: REAL_WORK,
      question: String.raw`বনভোজনে যাওয়ার জন্য $5700$ টাকায় একটি বাস ভাড়া করা হলো এবং শর্ত হলো যে, প্রত্যেক যাত্রী সমান ভাড়া বহন করবে। $5$ জন যাত্রী না যাওয়ায় মাথাপিছু ভাড়া $3$ টাকা বৃদ্ধি পেল। বাসে কতজন যাত্রী গিয়েছিল?`,
      solution: {
        steps: [
          String.raw`মনে করি, প্রথমে যাত্রী সংখ্যা ছিল $x$ জন; বাসে গিয়েছিল $(x-5)$ জন।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{5700}{x-5}-\frac{5700}{x}=3$$`,
          String.raw`$$\text{বা, }5700\left\{\frac{x-(x-5)}{x(x-5)}\right\}=3$$`,
          String.raw`$$\text{বা, }\frac{5700\times 5}{x^{2}-5x}=3$$`,
          String.raw`$$\text{বা, }3x^{2}-15x=28500$$`,
          String.raw`$$\text{বা, }x^{2}-5x-9500=0$$`,
          String.raw`$$\text{বা, }x^{2}-100x+95x-9500=0$$`,
          String.raw`$$\text{বা, }(x-100)(x+95)=0$$`,
          String.raw`$$\therefore\; x=100\;\text{ বা }\; x=-95$$`,
          String.raw`যাত্রী সংখ্যা ঋণাত্মক হতে পারে না, তাই $x=100$।`,
          String.raw`$$\therefore\;\text{বাসে গিয়েছিল }(100-5)=95\text{ জন}$$`,
        ],
        answer: String.raw`$95$ জন যাত্রী`,
      },
    },
    {
      id: 13,
      group: REAL_WORK,
      question: String.raw`একজন মাঝি স্রোতের প্রতিকূলে $p$ ঘণ্টায় $d$ কি.মি. যেতে পারে। স্রোতের অনুকূলে ঐ পথ যেতে তার $q$ ঘণ্টা লাগে। স্রোতের বেগ ও নৌকার বেগ কত?`,
      solution: {
        steps: [
          String.raw`ধরি, স্থির পানিতে নৌকার বেগ ঘণ্টায় $u$ কি.মি. এবং স্রোতের বেগ ঘণ্টায় $v$ কি.মি.।`,
          String.raw`$$\text{প্রতিকূলে কার্যকরী বেগ, }u-v=\frac{d}{p}\;\cdots\cdots(1)$$`,
          String.raw`$$\text{অনুকূলে কার্যকরী বেগ, }u+v=\frac{d}{q}\;\cdots\cdots(2)$$`,
          String.raw`$$(1)\text{ ও }(2)\text{ যোগ করে, }2u=\frac{d}{p}+\frac{d}{q}\quad\therefore\; u=\frac{d}{2}\left(\frac{1}{p}+\frac{1}{q}\right)$$`,
          String.raw`$$(2)\text{ থেকে }(1)\text{ বিয়োগ করে, }2v=\frac{d}{q}-\frac{d}{p}\quad\therefore\; v=\frac{d}{2}\left(\frac{1}{q}-\frac{1}{p}\right)$$`,
        ],
        answer: String.raw`নৌকার বেগ $\dfrac{d}{2}\left(\dfrac{1}{p}+\dfrac{1}{q}\right)$ কি.মি./ঘণ্টা, স্রোতের বেগ $\dfrac{d}{2}\left(\dfrac{1}{q}-\dfrac{1}{p}\right)$ কি.মি./ঘণ্টা`,
      },
    },
    {
      id: 14,
      group: REAL_WORK,
      question: String.raw`একজন মাঝির দাঁড় বেয়ে $15$ কি.মি. যেতে এবং সেখান থেকে ফিরে আসতে $4$ ঘণ্টা সময় লাগে। সে স্রোতের অনুকূলে যতক্ষণে $5$ কি.মি. যায়, স্রোতের প্রতিকূলে ততক্ষণে $3$ কি.মি. যায়। দাঁড়ের বেগ ও স্রোতের বেগ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ধরি, দাঁড়ের বেগ ঘণ্টায় $u$ কি.মি. এবং স্রোতের বেগ ঘণ্টায় $v$ কি.মি.।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{5}{u+v}=\frac{3}{u-v}$$`,
          String.raw`$$\text{বা, }5(u-v)=3(u+v)$$`,
          String.raw`$$\text{বা, }2u=8v\quad\therefore\; u=4v$$`,
          String.raw`$$\therefore\; u+v=5v\;\text{ এবং }\; u-v=3v$$`,
          String.raw`$$\text{আবার, }\frac{15}{u+v}+\frac{15}{u-v}=4$$`,
          String.raw`$$\text{বা, }\frac{15}{5v}+\frac{15}{3v}=4$$`,
          String.raw`$$\text{বা, }\frac{3}{v}+\frac{5}{v}=4\quad\text{বা, }\frac{8}{v}=4$$`,
          String.raw`$$\therefore\; v=2\quad\text{এবং}\quad u=4\times 2=8$$`,
        ],
        answer: String.raw`দাঁড়ের বেগ ঘণ্টায় $8$ কি.মি., স্রোতের বেগ ঘণ্টায় $2$ কি.মি.`,
      },
    },
    {
      id: 15,
      group: REAL_WORK,
      question: String.raw`একটি চৌবাচ্চায় দুইটি নল সংযুক্ত আছে। প্রথম নল দ্বারা চৌবাচ্চাটি $t_{1}$ মিনিটে পূর্ণ হয় এবং দ্বিতীয় নল দ্বারা $t_{2}$ মিনিটে খালি হয়। নল দুইটি একত্রে খুলে দিলে খালি চৌবাচ্চাটি কতক্ষণে পূর্ণ হবে? (এখানে $t_{2}>t_{1}$)`,
      solution: {
        steps: [
          String.raw`প্রথম নল $1$ মিনিটে চৌবাচ্চার $\dfrac{1}{t_{1}}$ অংশ পূর্ণ করে।`,
          String.raw`দ্বিতীয় নল $1$ মিনিটে $\dfrac{1}{t_{2}}$ অংশ খালি করে।`,
          String.raw`$$\therefore\;\text{একত্রে }1\text{ মিনিটে পূর্ণ হয় }\frac{1}{t_{1}}-\frac{1}{t_{2}}=\frac{t_{2}-t_{1}}{t_{1}t_{2}}\text{ অংশ}$$`,
          String.raw`$t_{2}>t_{1}$ বলে এই অংশটি ধনাত্মক, অর্থাৎ চৌবাচ্চাটি পূর্ণ হবে।`,
          String.raw`$$\therefore\;\text{সম্পূর্ণ পূর্ণ হতে সময় লাগবে }\frac{t_{1}t_{2}}{t_{2}-t_{1}}\text{ মিনিট}$$`,
        ],
        answer: String.raw`$\dfrac{t_{1}t_{2}}{t_{2}-t_{1}}$ মিনিটে`,
      },
    },
    {
      id: 16,
      group: REAL_TANK,
      question: String.raw`একটি নল দ্বারা $12$ মিনিটে একটি চৌবাচ্চা পূর্ণ হয়। অপর একটি নল দ্বারা $1$ মিনিটে তা থেকে $15$ লিটার পানি বের করে দেয়। চৌবাচ্চাটি খালি থাকা অবস্থায় দুইটি নল একসঙ্গে খুলে দেওয়া হয় এবং চৌবাচ্চাটি $48$ মিনিটে পূর্ণ হয়। চৌবাচ্চাটিতে কত লিটার পানি ধরে?`,
      solution: {
        steps: [
          String.raw`মনে করি, প্রথম নল দ্বারা প্রতি মিনিটে $x$ লিটার পানি প্রবেশ করে এবং চৌবাচ্চাটিতে $y$ লিটার পানি ধরে।`,
          String.raw`$$\therefore\; y=12x\;\cdots\cdots(1)$$`,
          String.raw`$$\text{আবার, } y=48x-48\times 15\;\cdots\cdots(2)$$`,
          String.raw`$$(1)\text{ থেকে }x=\frac{y}{12}\text{; }(2)\text{-এ বসিয়ে, } y=48\times\frac{y}{12}-720$$`,
          String.raw`$$\text{বা, } y=4y-720$$`,
          String.raw`$$\text{বা, }3y=720\quad\therefore\; y=240$$`,
        ],
        answer: String.raw`$240$ লিটার`,
      },
    },
    {
      id: 17,
      group: REAL_TANK,
      question: String.raw`ক, খ ও গ এর মধ্যে $260$ টাকা এরূপে ভাগ করে দাও যেন ক এর অংশের $2$ গুণ, খ এর অংশের $3$ গুণ এবং গ এর অংশের $4$ গুণ পরস্পর সমান হয়।`,
      solution: {
        steps: [
          String.raw`মনে করি, ক, খ ও গ এর অংশ যথাক্রমে $A$, $B$ ও $C$ টাকা।`,
          String.raw`$$\text{প্রশ্নানুসারে, }2A=3B=4C=k\;\text{ (ধরি)}$$`,
          String.raw`$$\therefore\; A=\frac{k}{2},\qquad B=\frac{k}{3},\qquad C=\frac{k}{4}$$`,
          String.raw`$$\text{আবার, }A+B+C=260$$`,
          String.raw`$$\text{বা, }k\left(\frac{1}{2}+\frac{1}{3}+\frac{1}{4}\right)=260$$`,
          String.raw`$$\text{বা, }k\cdot\frac{6+4+3}{12}=260\quad\text{বা, }\frac{13k}{12}=260$$`,
          String.raw`$$\therefore\; k=\frac{260\times 12}{13}=240$$`,
          String.raw`$$\therefore\; A=\frac{240}{2}=120,\qquad B=\frac{240}{3}=80,\qquad C=\frac{240}{4}=60$$`,
        ],
        answer: String.raw`ক $120$ টাকা, খ $80$ টাকা, গ $60$ টাকা`,
      },
    },
    {
      id: 18,
      group: REAL_PROFIT,
      question: String.raw`একটি দ্রব্য $x\%$ ক্ষতিতে বিক্রয় করলে যে মূল্য পাওয়া যায়, $3x\%$ লাভে বিক্রয় করলে তার চেয়ে $18x$ টাকা বেশি পাওয়া যায়। দ্রব্যটির ক্রয়মূল্য কত ছিল?`,
      solution: {
        steps: [
          String.raw`মনে করি, দ্রব্যটির ক্রয়মূল্য $C$ টাকা।`,
          String.raw`$$x\%\text{ ক্ষতিতে বিক্রয়মূল্য}=C\left(1-\frac{x}{100}\right)$$`,
          String.raw`$$3x\%\text{ লাভে বিক্রয়মূল্য}=C\left(1+\frac{3x}{100}\right)$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }C\left(1+\frac{3x}{100}\right)-C\left(1-\frac{x}{100}\right)=18x$$`,
          String.raw`$$\text{বা, }C\left(\frac{3x}{100}+\frac{x}{100}\right)=18x$$`,
          String.raw`$$\text{বা, }C\cdot\frac{4x}{100}=18x$$`,
          String.raw`$$\therefore\; C=\frac{18\times 100}{4}=450$$`,
        ],
        answer: String.raw`ক্রয়মূল্য $450$ টাকা`,
      },
    },
    {
      id: 19,
      group: REAL_PROFIT,
      question: String.raw`একটি কলম $11$ টাকায় বিক্রয় করলে $10\%$ লাভ হয়। কলমটির ক্রয়মূল্য কত?`,
      solution: {
        steps: [
          String.raw`$$S=C(1+r)$$`,
          String.raw`$$\text{এখানে, }S=11\text{ টাকা},\; r=10\%=\frac{10}{100}$$`,
          String.raw`$$\therefore\; 11=C\left(1+\frac{10}{100}\right)=C\times\frac{11}{10}$$`,
          String.raw`$$\therefore\; C=\frac{11\times 10}{11}=10$$`,
        ],
        answer: String.raw`ক্রয়মূল্য $10$ টাকা`,
      },
    },
    {
      id: 20,
      group: REAL_PROFIT,
      question: String.raw`একটি খাতা $36$ টাকায় বিক্রয় করায় যত ক্ষতি হলো, $72$ টাকায় বিক্রয় করলে তার দ্বিগুণ লাভ হতো। খাতাটির ক্রয়মূল্য কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, খাতাটির ক্রয়মূল্য $C$ টাকা।`,
          String.raw`$$36\text{ টাকায় বিক্রয়ে ক্ষতি}=(C-36)\text{ টাকা}$$`,
          String.raw`$$72\text{ টাকায় বিক্রয়ে লাভ}=(72-C)\text{ টাকা}$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }72-C=2(C-36)$$`,
          String.raw`$$\text{বা, }72-C=2C-72$$`,
          String.raw`$$\text{বা, }3C=144\quad\therefore\; C=48$$`,
        ],
        answer: String.raw`ক্রয়মূল্য $48$ টাকা`,
      },
    },
    {
      id: 21,
      group: REAL_INTEREST,
      question: String.raw`মুনাফার একই হারে $300$ টাকার $4$ বছরের সরল মুনাফা ও $400$ টাকার $5$ বছরের সরল মুনাফা একত্রে $128$ টাকা হলে, শতকরা মুনাফার হার কত?`,
      solution: {
        steps: [
          String.raw`ধরি, মুনাফার হার $r$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }300\times 4\times r+400\times 5\times r=128$$`,
          String.raw`$$\text{বা, }1200r+2000r=128$$`,
          String.raw`$$\text{বা, }3200r=128$$`,
          String.raw`$$\therefore\; r=\frac{128}{3200}=\frac{4}{100}=4\%$$`,
        ],
        answer: String.raw`শতকরা বার্ষিক $4$ টাকা`,
      },
    },
    {
      id: 22,
      group: REAL_INTEREST,
      question: String.raw`$4\%$ হার মুনাফায় কোনো টাকার $2$ বছরের সরল মুনাফা ও চক্রবৃদ্ধি মুনাফার পার্থক্য $1$ টাকা হলে, মূলধন কত?`,
      solution: {
        steps: [
          String.raw`ধরি, মূলধন $P$ টাকা এবং $r=\dfrac{4}{100}$।`,
          String.raw`$$\text{সরল মুনাফা}=P\times 2\times r=2Pr$$`,
          String.raw`$$\text{চক্রবৃদ্ধি মুনাফা}=P(1+r)^{2}-P=P(1+2r+r^{2})-P=2Pr+Pr^{2}$$`,
          String.raw`$$\therefore\;\text{পার্থক্য}=Pr^{2}$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }P\left(\frac{4}{100}\right)^{2}=1$$`,
          String.raw`$$\text{বা, }P\times\frac{16}{10000}=1$$`,
          String.raw`$$\therefore\; P=\frac{10000}{16}=625$$`,
        ],
        answer: String.raw`মূলধন $625$ টাকা`,
      },
    },
    {
      id: 23,
      group: REAL_INTEREST,
      question: String.raw`কোনো আসল $3$ বছরে সরল মুনাফাসহ $460$ টাকা এবং $5$ বছরে সরল মুনাফাসহ $600$ টাকা হলে, শতকরা মুনাফার হার কত?`,
      solution: {
        steps: [
          String.raw`ধরি, আসল $P$ টাকা এবং মুনাফার হার $r$।`,
          String.raw`$$P+3Pr=460\;\cdots\cdots(1)$$`,
          String.raw`$$P+5Pr=600\;\cdots\cdots(2)$$`,
          String.raw`$$(2)-(1):\;2Pr=140\quad\therefore\; Pr=70$$`,
          String.raw`$$(1)\text{-এ বসিয়ে, }P+3\times 70=460$$`,
          String.raw`$$\text{বা, }P=460-210=250$$`,
          String.raw`$$\therefore\; r=\frac{70}{250}=\frac{28}{100}=28\%$$`,
        ],
        answer: String.raw`শতকরা বার্ষিক $28$ টাকা (আসল $250$ টাকা)`,
      },
    },
    {
      id: 24,
      group: REAL_INTEREST,
      question: String.raw`শতকরা বার্ষিক $5$ টাকা হার সরল মুনাফায় কত টাকা $13$ বছরে সবৃদ্ধিমূল $990$ টাকা হবে?`,
      solution: {
        steps: [
          String.raw`$$A=P(1+nr)$$`,
          String.raw`$$\text{এখানে, }A=990,\; n=13,\; r=\frac{5}{100}=\frac{1}{20}$$`,
          String.raw`$$\therefore\; 990=P\left(1+\frac{13}{20}\right)=P\times\frac{33}{20}$$`,
          String.raw`$$\therefore\; P=\frac{990\times 20}{33}=600$$`,
        ],
        answer: String.raw`$600$ টাকা`,
      },
    },
    {
      id: 25,
      group: REAL_INTEREST,
      question: String.raw`$5\%$ হার মুনাফায় $8000$ টাকার $3$ বছরের সরল মুনাফা ও চক্রবৃদ্ধি মুনাফার পার্থক্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{সরল মুনাফা, }I=Pnr=8000\times 3\times\frac{5}{100}=1200\text{ টাকা}$$`,
          String.raw`$$\text{সবৃদ্ধিমূল, }C=P(1+r)^{n}=8000\left(1+\frac{5}{100}\right)^{3}=8000\left(\frac{21}{20}\right)^{3}$$`,
          String.raw`$$=8000\times\frac{9261}{8000}=9261\text{ টাকা}$$`,
          String.raw`$$\therefore\;\text{চক্রবৃদ্ধি মুনাফা}=(9261-8000)\text{ টাকা}=1261\text{ টাকা}$$`,
          String.raw`$$\therefore\;\text{পার্থক্য}=(1261-1200)\text{ টাকা}=61\text{ টাকা}$$`,
        ],
        answer: String.raw`পার্থক্য $61$ টাকা`,
      },
    },
    {
      id: 26,
      group: REAL_INTEREST,
      question: String.raw`মিষ্টির উপর মূল্য সংযোজন কর (VAT) $x\%$। একজন বিক্রেতা ভ্যাটসহ $P$ টাকার মিষ্টি বিক্রয় করলে তাকে কত ভ্যাট দিতে হবে? $x=15$, $P=2300$ হলে, ভ্যাটের পরিমাণ কত?`,
      solution: {
        steps: [
          String.raw`ধরি, ভ্যাট ছাড়া মিষ্টির মূল্য $b$ টাকা।`,
          String.raw`$$\text{তাহলে ভ্যাটসহ মূল্য}=b\left(1+\frac{x}{100}\right)=P$$`,
          String.raw`$$\therefore\; b=\frac{100P}{100+x}$$`,
          String.raw`$$\therefore\;\text{ভ্যাট}=P-b=P-\frac{100P}{100+x}=\frac{Px}{100+x}\text{ টাকা}$$`,
          String.raw`$$x=15,\;P=2300\text{ হলে, ভ্যাট}=\frac{2300\times 15}{100+15}=\frac{34500}{115}=300$$`,
        ],
        answer: String.raw`ভ্যাট $\dfrac{Px}{100+x}$ টাকা; নির্দিষ্ট মানে $300$ টাকা`,
      },
    },
    {
      id: 27,
      group: REAL_EXTRA,
      question: String.raw`দাঁড় বেয়ে একটি খালের $A$ বিন্দু থেকে $B$ বিন্দুতে গিয়ে ফিরে আসতে হবে। দাঁড়ের বেগ ধ্রুব হলে স্রোত থাকলে সময় বেশি লাগবে না স্রোত না থাকলে সময় বেশি লাগবে?`,
      solution: {
        steps: [
          String.raw`ধরি, $AB$ দূরত্ব $d$, দাঁড়ের বেগ $u$ এবং স্রোতের বেগ $v$, যেখানে $0<v<u$।`,
          String.raw`$$\text{স্রোত না থাকলে সময়, }T_{0}=\frac{d}{u}+\frac{d}{u}=\frac{2d}{u}$$`,
          String.raw`$$\text{স্রোত থাকলে সময়, }T=\frac{d}{u+v}+\frac{d}{u-v}$$`,
          String.raw`$$=\frac{d(u-v)+d(u+v)}{(u+v)(u-v)}=\frac{2du}{u^{2}-v^{2}}$$`,
          String.raw`$$v>0\;\Rightarrow\;u^{2}-v^{2}<u^{2}\;\Rightarrow\;\frac{2du}{u^{2}-v^{2}}>\frac{2du}{u^{2}}=\frac{2d}{u}$$`,
          String.raw`$$\therefore\; T>T_{0}$$`,
          String.raw`অর্থাৎ অনুকূলে যা সময় বাঁচে, প্রতিকূলে তার চেয়ে বেশি সময় লাগে।`,
        ],
        answer: String.raw`স্রোত থাকলেই সময় বেশি লাগবে`,
      },
    },
    {
      id: 28,
      group: REAL_EXTRA,
      question: String.raw`একটি মাঠে ধ্রুব হারে ঘাস বৃদ্ধি পায়। $17$টি গরু $30$ দিনে সব ঘাস খেয়ে ফেলতে পারে। তবে $19$টি গরুর লাগে $24$ দিন। একদল গরু $6$ দিন ঘাস খাওয়ার পর $4$টি গরু বিক্রয় করা হলে ঘাস খাওয়া শেষ করতে আরও $2$ দিন লাগলো। দলটিতে শুরুতে কতগুলো গরু ছিল?`,
      solution: {
        steps: [
          String.raw`ধরি, শুরুতে মাঠের ঘাস $G$, দৈনিক বৃদ্ধি $g$ এবং একটি গরু দৈনিক $c$ পরিমাণ ঘাস খায়।`,
          String.raw`$$17\text{টি গরু, }30\text{ দিন: } G+30g=17\times 30\times c=510c\;\cdots\cdots(1)$$`,
          String.raw`$$19\text{টি গরু, }24\text{ দিন: } G+24g=19\times 24\times c=456c\;\cdots\cdots(2)$$`,
          String.raw`$$(1)-(2):\;6g=54c\quad\therefore\; g=9c$$`,
          String.raw`$$(1)\text{-এ বসিয়ে, } G=510c-30\times 9c=510c-270c=240c$$`,
          String.raw`ধরি, দলটিতে শুরুতে $n$টি গরু ছিল। তারা $6$ দিন খায়, এরপর $(n-4)$টি গরু আরও $2$ দিন খেয়ে শেষ করে; মোট সময় $8$ দিন।`,
          String.raw`$$\therefore\; G+8g=6nc+2(n-4)c$$`,
          String.raw`$$\text{বা, }240c+8\times 9c=6nc+2nc-8c$$`,
          String.raw`$$\text{বা, }240c+72c=8nc-8c$$`,
          String.raw`$$\text{বা, }312=8n-8$$`,
          String.raw`$$\text{বা, }8n=320\quad\therefore\; n=40$$`,
        ],
        answer: String.raw`শুরুতে $40$টি গরু ছিল`,
      },
    },
    {
      id: 29,
      group: REAL_EXTRA,
      question: String.raw`দুই ভাইয়ের একটি প্রশিক্ষিত ঘোড়া ছিল যা যেকোনো নির্দেশই পালন করতে পারে। দুই ভাই একই সময়ে বাসা থেকে রওয়ানা হয়ে $20$ মাইল দূরে একটি বৈশাখী মেলায় যেতে চায়। ঘোড়া যেকোনো মুহূর্তে মাত্র একজন ভাইকে বহন করতে পারে। ভাইদের বেগ ঘণ্টায় $4$ মাইল এবং ঘোড়ার বেগ ঘণ্টায় (মানুষসহ কিংবা ছাড়া) $10$ মাইল হলে সর্বনিম্ন কত সময়ে তারা মেলায় পৌঁছতে পারবে? প্রত্যেক ভাই কতটা পথ হাঁটবে?`,
      solution: {
        steps: [
          String.raw`সর্বনিম্ন সময় পেতে হলে দুই ভাই একই সময়ে পৌঁছাবে, এবং কেউ কোথাও অপেক্ষা করবে না। তাই প্রত্যেকে সমান পথ ঘোড়ায় ও সমান পথ হেঁটে যাবে।`,
          String.raw`ধরি, প্রত্যেকে $x$ মাইল ঘোড়ায় চড়ে এবং $(20-x)$ মাইল হাঁটে।`,
          String.raw`প্রথম ভাই প্রথমে $x$ মাইল ঘোড়ায় গিয়ে নেমে হাঁটতে থাকে; ঘোড়া ফিরে এসে দ্বিতীয় ভাইকে তুলে নেয়।`,
          String.raw`$$\text{প্রথম ভাই }x\text{ মাইল যেতে সময় নেয় }\frac{x}{10}\text{ ঘণ্টা; তখন দ্বিতীয় ভাই আছে }\frac{4x}{10}=\frac{2x}{5}\text{ মাইলে}$$`,
          String.raw`$$\text{ব্যবধান}=x-\frac{2x}{5}=\frac{3x}{5},\qquad\text{নিকটবর্তী হওয়ার বেগ}=10+4=14$$`,
          String.raw`$$\therefore\;\text{মিলিত হতে সময় লাগে }\frac{3x}{5\times 14}=\frac{3x}{70}\text{ ঘণ্টা}$$`,
          String.raw`$$\text{মিলনবিন্দু}=\frac{2x}{5}+4\cdot\frac{3x}{70}=\frac{2x}{5}+\frac{6x}{35}=\frac{14x+6x}{35}=\frac{4x}{7}$$`,
          String.raw`দ্বিতীয় ভাই ঐ বিন্দু থেকেই ঘোড়ায় ওঠে ও বাকি পথ যায়; অর্থাৎ সে হেঁটেছে $(20-x)$ মাইল।`,
          String.raw`$$\therefore\;\frac{4x}{7}=20-x$$`,
          String.raw`$$\text{বা, }4x=140-7x\quad\text{বা, }11x=140\quad\therefore\; x=\frac{140}{11}$$`,
          String.raw`$$\therefore\;\text{হাঁটার পথ}=20-\frac{140}{11}=\frac{220-140}{11}=\frac{80}{11}\text{ মাইল}$$`,
          String.raw`$$\therefore\;\text{মোট সময়}=\frac{x}{10}+\frac{20-x}{4}=\frac{140}{110}+\frac{80}{44}=\frac{14}{11}+\frac{20}{11}=\frac{34}{11}\text{ ঘণ্টা}$$`,
          String.raw`$$\frac{34}{11}=3\frac{1}{11}\text{ ঘণ্টা}\approx 3\text{ ঘণ্টা }5\text{ মিনিট }27\text{ সেকেন্ড}$$`,
        ],
        answer: String.raw`সর্বনিম্ন সময় $\dfrac{34}{11}$ ঘণ্টা $\approx 3$ ঘণ্টা $5$ মিনিট; প্রত্যেক ভাই হাঁটবে $\dfrac{80}{11}\approx 7.27$ মাইল`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — বইয়ের পৃষ্ঠা ৭৩ – ৭৪ ───────────────
    {
      id: 30,
      group: MODEL_MCQ,
      question: String.raw`$\dfrac{1}{2}\{(a+b)^{2}-(a-b)^{2}\}$ এর মান নিচের কোনটি?
ক) $2(a^{2}+b^{2})$  খ) $a^{2}+b^{2}$  গ) $2ab$  ঘ) $4ab$`,
      solution: {
        steps: [
          String.raw`$$(a+b)^{2}-(a-b)^{2}=4ab$$`,
          String.raw`$$\therefore\;\frac{1}{2}\{(a+b)^{2}-(a-b)^{2}\}=\frac{1}{2}\times 4ab=2ab$$`,
        ],
        answer: String.raw`গ) $2ab$`,
      },
    },
    {
      id: 31,
      group: MODEL_MCQ,
      question: String.raw`$3a^{5}-6a^{4}+3a+14$ একটি বীজগাণিতিক রাশি হলে —
$(i)$ রাশিটির চলক $a$   $(ii)$ রাশিটির মাত্রা $5$   $(iii)$ $a^{4}$ এর সহগ $6$
নিচের কোনটি সঠিক?
ক) $i, ii$  খ) $i, iii$  গ) $ii, iii$  ঘ) $i, ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$(i)$ রাশিটিতে একমাত্র অক্ষর প্রতীক $a$, সুতরাং চলক $a$ — সঠিক।`,
          String.raw`$(ii)$ সর্বোচ্চ ঘাত $5$, সুতরাং মাত্রা $5$ — সঠিক।`,
          String.raw`$(iii)$ $a^{4}$ এর পদটি $-6a^{4}$, সুতরাং সহগ $-6$, $6$ নয় — সঠিক নয়।`,
        ],
        answer: String.raw`ক) $i, ii$`,
      },
    },
    {
      id: 32,
      group: MODEL_MCQ,
      question: String.raw`$x+\dfrac{1}{x}=\sqrt{3}$ হলে, $x^{2}+\dfrac{1}{x^{2}}$ এর মান কত?
ক) $4$  খ) $2$  গ) $1$  ঘ) $0$`,
      solution: {
        steps: [
          String.raw`$$x^{2}+\frac{1}{x^{2}}=\left(x+\frac{1}{x}\right)^{2}-2$$`,
          String.raw`$$=(\sqrt{3})^{2}-2=3-2=1$$`,
        ],
        answer: String.raw`গ) $1$`,
      },
    },
    {
      id: 33,
      group: MODEL_MCQ,
      question: String.raw`$x+\dfrac{1}{x}=\sqrt{3}$ হলে, $x^{3}+\dfrac{1}{x^{3}}$ এর মান কত?
ক) $3$  খ) $2$  গ) $1$  ঘ) $0$`,
      solution: {
        steps: [
          String.raw`$$x^{3}+\frac{1}{x^{3}}=\left(x+\frac{1}{x}\right)^{3}-3\left(x+\frac{1}{x}\right)$$`,
          String.raw`$$=(\sqrt{3})^{3}-3\sqrt{3}$$`,
          String.raw`$$=3\sqrt{3}-3\sqrt{3}=0$$`,
        ],
        answer: String.raw`ঘ) $0$`,
      },
    },
    {
      id: 34,
      group: MODEL_CQ,
      question: String.raw`$x+\dfrac{1}{x}=3$ এবং $p^{2}+\dfrac{1}{p^{2}}=7$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`উৎপাদকে বিশ্লেষণ করো: $a^{4}-7a^{2}-18$।`,
          solution: {
            steps: [
              String.raw`$$a^{4}-7a^{2}-18=(a^{2})^{2}+(2-9)a^{2}+(2)(-9)$$`,
              String.raw`$$=(a^{2}-9)(a^{2}+2)$$`,
              String.raw`$$=(a+3)(a-3)(a^{2}+2)$$`,
            ],
            answer: String.raw`$(a+3)(a-3)(a^{2}+2)$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\left(x^{3}-\dfrac{1}{x^{3}}\right)$-এর মান নির্ণয় করো; যখন $x>1$।`,
          solution: {
            steps: [
              String.raw`$$\left(x-\frac{1}{x}\right)^{2}=\left(x+\frac{1}{x}\right)^{2}-4=(3)^{2}-4=9-4=5$$`,
              String.raw`$$\therefore\; x-\frac{1}{x}=\sqrt{5}\qquad\left[\,x>1\text{ বলে }x>\tfrac{1}{x}\,\right]$$`,
              String.raw`$$\therefore\; x^{3}-\frac{1}{x^{3}}=\left(x-\frac{1}{x}\right)^{3}+3\left(x-\frac{1}{x}\right)$$`,
              String.raw`$$=(\sqrt{5})^{3}+3\sqrt{5}=5\sqrt{5}+3\sqrt{5}=8\sqrt{5}$$`,
            ],
            answer: String.raw`$8\sqrt{5}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $p^{5}+\dfrac{1}{p^{5}}=123$, যখন $p>0$।`,
          solution: {
            steps: [
              String.raw`$$\left(p+\frac{1}{p}\right)^{2}=p^{2}+\frac{1}{p^{2}}+2=7+2=9$$`,
              String.raw`$$\therefore\; p+\frac{1}{p}=3\qquad\left[\,p>0\,\right]$$`,
              String.raw`$$p^{3}+\frac{1}{p^{3}}=\left(p+\frac{1}{p}\right)^{3}-3\left(p+\frac{1}{p}\right)=27-9=18$$`,
              String.raw`$$\text{এখন, }\left(p^{2}+\frac{1}{p^{2}}\right)\left(p^{3}+\frac{1}{p^{3}}\right)=p^{5}+\frac{1}{p^{5}}+p+\frac{1}{p}$$`,
              String.raw`$$\therefore\; p^{5}+\frac{1}{p^{5}}=\left(p^{2}+\frac{1}{p^{2}}\right)\left(p^{3}+\frac{1}{p^{3}}\right)-\left(p+\frac{1}{p}\right)$$`,
              String.raw`$$=7\times 18-3=126-3=123\quad\text{(প্রমাণিত)}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
    {
      id: 35,
      group: MODEL_CQ,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$a^{2}+b^{2}=25$ এবং $ab=12$ হলে, $(a^{2}-b^{2})$-এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$(a+b)^{2}=a^{2}+b^{2}+2ab=25+24=49\quad\therefore\; a+b=\pm 7$$`,
              String.raw`$$(a-b)^{2}=a^{2}+b^{2}-2ab=25-24=1\quad\therefore\; a-b=\pm 1$$`,
              String.raw`$$\therefore\; a^{2}-b^{2}=(a+b)(a-b)=\pm 7$$`,
            ],
            answer: String.raw`$a^{2}-b^{2}=\pm 7$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$x^{3}-y^{3}=208$ এবং $x-y=4$ হলে, $xy$-এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$x^{3}-y^{3}=(x-y)^{3}+3xy(x-y)$$`,
              String.raw`$$\text{বা, }208=(4)^{3}+3xy\times 4$$`,
              String.raw`$$\text{বা, }208=64+12xy$$`,
              String.raw`$$\text{বা, }12xy=144\quad\therefore\; xy=12$$`,
            ],
            answer: String.raw`$xy=12$`,
          },
        },
        {
          label: "গ",
          question: String.raw`শতকরা বার্ষিক $5$ টাকা হার মুনাফায় কত টাকা $12$ বছরে সবৃদ্ধিমূল $1280$ টাকা হবে?`,
          solution: {
            steps: [
              String.raw`$$A=P(1+nr)$$`,
              String.raw`$$\text{এখানে, }A=1280,\; n=12,\; r=\frac{5}{100}=\frac{1}{20}$$`,
              String.raw`$$\therefore\; 1280=P\left(1+\frac{12}{20}\right)=P\times\frac{8}{5}$$`,
              String.raw`$$\therefore\; P=\frac{1280\times 5}{8}=800$$`,
            ],
            answer: String.raw`$800$ টাকা`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`উৎপাদকে বিশ্লেষণ করো: $2x^{3}-4x^{2}+3x-1$।`,
          solution: {
            steps: [
              String.raw`ধরি, $f(x)=2x^{3}-4x^{2}+3x-1$।`,
              String.raw`$$f(1)=2-4+3-1=0\quad\therefore\;(x-1)\text{ একটি উৎপাদক}$$`,
              String.raw`$$2x^{3}-4x^{2}+3x-1=2x^{3}-2x^{2}-2x^{2}+2x+x-1$$`,
              String.raw`$$=2x^{2}(x-1)-2x(x-1)+1(x-1)$$`,
              String.raw`$$=(x-1)(2x^{2}-2x+1)$$`,
            ],
            answer: String.raw`$(x-1)(2x^{2}-2x+1)$`,
          },
        },
      ],
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ১১ — বীজগাণিতিক অনুপাত ও সমানুপাত
// ─────────────────────────────────────────────────────────────────────────────

const exercise111: Exercise = {
  id: "11.1",
  bnId: "অনুশীলনী ১১.১",
  title: "অনুপাত, সমানুপাত ও রূপান্তর",
  bookPages: "২১৬ – ২১৭",
  formulas: [
    {
      title: "অনুপাত ও সমানুপাত",
      formulas: [
        {
          statement: String.raw`$$p:q=\frac{p}{q}$$`,
          note: String.raw`সমজাতীয় ও একই এককে প্রকাশিত দুইটি রাশির তুলনা; $p$ পূর্ব রাশি, $q$ উত্তর রাশি।`,
        },
        {
          statement: String.raw`$$a:b=c:d\iff ad=bc$$`,
          note: "চারটি রাশি সমানুপাতী হওয়ার শর্ত — প্রান্তীয় দুইটির গুণফল মধ্য দুইটির গুণফলের সমান।",
        },
        {
          statement: String.raw`$$a:b=b:c\iff b^{2}=ac$$`,
          note: String.raw`$a,b,c$ ক্রমিক সমানুপাতী; $b$ হলো $a$ ও $c$-এর মধ্যসমানুপাতী এবং $c$ হলো তৃতীয় সমানুপাতী।`,
        },
      ],
    },
    {
      title: "অনুপাতের রূপান্তর",
      formulas: [
        {
          statement: String.raw`$$a:b=c:d\;\Rightarrow\;b:a=d:c$$`,
          note: "ব্যস্তকরণ (Invertendo) — দুই পাশের অনুপাত উল্টে দেওয়া।",
        },
        {
          statement: String.raw`$$a:b=c:d\;\Rightarrow\;a:c=b:d$$`,
          note: "একান্তরকরণ (Alternendo) — মধ্য রাশি দুইটি স্থান বদল করে।",
        },
        {
          statement: String.raw`$$\frac{a+b}{b}=\frac{c+d}{d}$$`,
          note: "যোজন (Componendo) — উভয় পক্ষে ১ যোগ করলেই পাওয়া যায়।",
        },
        {
          statement: String.raw`$$\frac{a-b}{b}=\frac{c-d}{d}$$`,
          note: "বিয়োজন (Dividendo) — উভয় পক্ষ থেকে ১ বিয়োগ করলেই পাওয়া যায়।",
        },
        {
          statement: String.raw`$$\frac{a+b}{a-b}=\frac{c+d}{c-d}$$`,
          note: String.raw`যোজন-বিয়োজন (Componendo-Dividendo) — এই অনুশীলনীর সবচেয়ে বেশি কাজে লাগা সূত্র, যেখানে $a\neq b$ ও $c\neq d$।`,
        },
      ],
    },
    {
      title: "ধারাবাহিক সমানুপাত ও $k$-পদ্ধতি",
      formulas: [
        {
          statement: String.raw`$$\frac{a}{b}=\frac{c}{d}=\frac{e}{f}=\frac{g}{h}=\frac{a+c+e+g}{b+d+f+h}$$`,
          note: "সমান অনুপাতগুলোর লবের যোগফল ও হরের যোগফলের অনুপাতও ঐ একই মান।",
        },
        {
          statement: String.raw`$$\frac{a}{b}=\frac{c}{d}=k\;\Rightarrow\;a=bk,\;\; c=dk$$`,
          note: "প্রমাণের সবচেয়ে সহজ পথ — প্রতিটি রাশিকে একটি মাত্র ধ্রুবক দিয়ে লিখে ফেলা।",
        },
        {
          statement: String.raw`$$\frac{a}{b}=\frac{b}{c}=\frac{c}{d}=k\;\Rightarrow\;c=dk,\; b=dk^{2},\; a=dk^{3}$$`,
          note: "চারটি ক্রমিক সমানুপাতী রাশি একটি চলক ও একটি অনুপাতে নেমে আসে।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ২০৬.
    {
      id: 1,
      question: String.raw`$A$ ও $B$ নির্দিষ্ট পথ অতিক্রম করে যথাক্রমে $t_{1}$ এবং $t_{2}$ মিনিটে। $A$ ও $B$-এর গড় গতিবেগের অনুপাত নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $A$ ও $B$-এর গড় গতিবেগ প্রতি মিনিটে যথাক্রমে $v_{1}$ মিটার ও $v_{2}$ মিটার।`,
          String.raw`তাহলে $t_{1}$ মিনিটে $A$ অতিক্রম করে $v_{1}t_{1}$ মিটার এবং $t_{2}$ মিনিটে $B$ অতিক্রম করে $v_{2}t_{2}$ মিটার।`,
          String.raw`প্রশ্নানুসারে দুইজনের অতিক্রান্ত পথ সমান, তাই`,
          String.raw`$$v_{1}t_{1}=v_{2}t_{2}$$`,
          String.raw`$$\therefore\;\frac{v_{1}}{v_{2}}=\frac{t_{2}}{t_{1}}$$`,
          String.raw`এখানে গতিবেগের অনুপাত সময়ের ব্যস্ত অনুপাতের সমান।`,
        ],
        answer: String.raw`$v_{1}:v_{2}=t_{2}:t_{1}$`,
      },
    },
    // উদাহরণ ২ — book page ২০৯.
    {
      id: 2,
      question: String.raw`পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $7:2$ এবং $5$ বছর পরে তাদের বয়সের অনুপাত $8:3$ হবে। তাদের বর্তমান বয়স কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, পিতার বর্তমান বয়স $a$ বছর এবং পুত্রের বর্তমান বয়স $b$ বছর।`,
          String.raw`প্রশ্নের প্রথম ও দ্বিতীয় শর্তানুসারে যথাক্রমে পাই,`,
          String.raw`$$\frac{a}{b}=\frac{7}{2}\qquad\cdots(1)$$`,
          String.raw`$$\frac{a+5}{b+5}=\frac{8}{3}\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই,`,
          String.raw`$$a=\frac{7b}{2}\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ থেকে পাই,`,
          String.raw`$$3(a+5)=8(b+5)$$`,
          String.raw`$$\text{or, } 3a+15=8b+40$$`,
          String.raw`$$\text{or, } 3a-8b=25$$`,
          String.raw`$$\text{or, } 3\times\frac{7b}{2}-8b=25\qquad\left[\,\text{by }(3)\,\right]$$`,
          String.raw`$$\text{or, }\frac{21b-16b}{2}=25$$`,
          String.raw`$$\text{or, } 5b=50$$`,
          String.raw`$$\therefore\; b=10$$`,
          String.raw`সমীকরণ $(3)$-এ $b=10$ বসিয়ে পাই,`,
          String.raw`$$a=\frac{7\times 10}{2}=35$$`,
          String.raw`পিতার বর্তমান বয়স $35$ বছর এবং পুত্রের বর্তমান বয়স $10$ বছর।`,
        ],
        answer: String.raw`পিতার বয়স $35$ বছর, পুত্রের বয়স $10$ বছর`,
      },
    },
    // উদাহরণ ৩ — book pages ২০৯-২১০.
    {
      id: 3,
      question: String.raw`যদি $a:b=b:c$ হয়, তবে প্রমাণ করো যে, $$\left(\frac{a+b}{b+c}\right)^{2}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $a:b=b:c$`,
          String.raw`$$\therefore\; b^{2}=ac$$`,
          String.raw`$$\text{L.H.S.}=\left(\frac{a+b}{b+c}\right)^{2}=\frac{(a+b)^{2}}{(b+c)^{2}}$$`,
          String.raw`$$=\frac{a^{2}+2ab+b^{2}}{b^{2}+2bc+c^{2}}$$`,
          String.raw`$$=\frac{a^{2}+2ab+ac}{ac+2bc+c^{2}}\qquad\left[\,b^{2}=ac\,\right]$$`,
          String.raw`$$=\frac{a(a+2b+c)}{c(a+2b+c)}=\frac{a}{c}$$`,
          String.raw`আবার,`,
          String.raw`$$\text{R.H.S.}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}=\frac{a^{2}+ac}{ac+c^{2}}$$`,
          String.raw`$$=\frac{a(a+c)}{c(a+c)}=\frac{a}{c}$$`,
          String.raw`$$\therefore\;\left(\frac{a+b}{b+c}\right)^{2}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    // উদাহরণ ৪ — book page ২১০.
    {
      id: 4,
      question: String.raw`$\dfrac{a}{b}=\dfrac{c}{d}$ হলে, দেখাও যে, $$\frac{a^{2}+b^{2}}{a^{2}-b^{2}}=\frac{ac+bd}{ac-bd}$$`,
      solution: {
        steps: [
          String.raw`মনে করি,`,
          String.raw`$$\frac{a}{b}=\frac{c}{d}=k$$`,
          String.raw`$$\therefore\; a=bk\quad\text{and}\quad c=dk$$`,
          String.raw`এখন,`,
          String.raw`$$\frac{a^{2}+b^{2}}{a^{2}-b^{2}}=\frac{(bk)^{2}+b^{2}}{(bk)^{2}-b^{2}}=\frac{b^{2}(k^{2}+1)}{b^{2}(k^{2}-1)}=\frac{k^{2}+1}{k^{2}-1}$$`,
          String.raw`এবং`,
          String.raw`$$\frac{ac+bd}{ac-bd}=\frac{bk\cdot dk+bd}{bk\cdot dk-bd}=\frac{bd(k^{2}+1)}{bd(k^{2}-1)}=\frac{k^{2}+1}{k^{2}-1}$$`,
          String.raw`$$\therefore\;\frac{a^{2}+b^{2}}{a^{2}-b^{2}}=\frac{ac+bd}{ac-bd}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    // উদাহরণ ৫ — book pages ২১০-২১১.
    {
      id: 5,
      question: String.raw`সমাধান করো: $$\frac{1-ax}{1+ax}\sqrt{\frac{1+bx}{1-bx}}=1,\qquad 0<b<2a<2b$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{1-ax}{1+ax}\sqrt{\frac{1+bx}{1-bx}}=1$$`,
          String.raw`$$\text{or, }\sqrt{\frac{1+bx}{1-bx}}=\frac{1+ax}{1-ax}$$`,
          String.raw`$$\text{or, }\frac{1+bx}{1-bx}=\frac{(1+ax)^{2}}{(1-ax)^{2}}\qquad\left[\,\text{squaring}\,\right]$$`,
          String.raw`$$\text{or, }\frac{1+bx}{1-bx}=\frac{1+2ax+a^{2}x^{2}}{1-2ax+a^{2}x^{2}}$$`,
          String.raw`$$\text{or, }\frac{1+bx+1-bx}{1+bx-1+bx}=\frac{1+2ax+a^{2}x^{2}+1-2ax+a^{2}x^{2}}{1+2ax+a^{2}x^{2}-1+2ax-a^{2}x^{2}}$$`,
          String.raw`$$\text{or, }\frac{2}{2bx}=\frac{2(1+a^{2}x^{2})}{4ax}$$`,
          String.raw`$$\text{or, } 2ax=bx\left(1+a^{2}x^{2}\right)$$`,
          String.raw`$$\text{or, } x\left\{2a-b\left(1+a^{2}x^{2}\right)\right\}=0$$`,
          String.raw`$$\therefore\; x=0$$`,
          String.raw`অথবা,`,
          String.raw`$$2a-b\left(1+a^{2}x^{2}\right)=0$$`,
          String.raw`$$\text{or, } b\left(1+a^{2}x^{2}\right)=2a$$`,
          String.raw`$$\text{or, } 1+a^{2}x^{2}=\frac{2a}{b}$$`,
          String.raw`$$\text{or, } a^{2}x^{2}=\frac{2a}{b}-1$$`,
          String.raw`$$\text{or, } x^{2}=\frac{1}{a^{2}}\left(\frac{2a}{b}-1\right)$$`,
          String.raw`$$\therefore\; x=\pm\frac{1}{a}\sqrt{\frac{2a}{b}-1}$$`,
        ],
        answer: String.raw`$x=0,\;\pm\dfrac{1}{a}\sqrt{\dfrac{2a}{b}-1}$`,
      },
    },
    // উদাহরণ ৬ — book pages ২১১-২১২.
    {
      id: 6,
      question: String.raw`$\dfrac{\sqrt{1+x}+\sqrt{1-x}}{\sqrt{1+x}-\sqrt{1-x}}=p$ হলে, প্রমাণ করো যে, $$p^{2}-\frac{2p}{x}+1=0$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{\sqrt{1+x}+\sqrt{1-x}}{\sqrt{1+x}-\sqrt{1-x}}=\frac{p}{1}$$`,
          String.raw`$$\text{or, }\frac{\sqrt{1+x}+\sqrt{1-x}+\sqrt{1+x}-\sqrt{1-x}}{\sqrt{1+x}+\sqrt{1-x}-\sqrt{1+x}+\sqrt{1-x}}=\frac{p+1}{p-1}$$`,
          String.raw`$$\text{or, }\frac{2\sqrt{1+x}}{2\sqrt{1-x}}=\frac{p+1}{p-1}$$`,
          String.raw`$$\text{or, }\frac{\sqrt{1+x}}{\sqrt{1-x}}=\frac{p+1}{p-1}$$`,
          String.raw`$$\text{or, }\frac{1+x}{1-x}=\frac{(p+1)^{2}}{(p-1)^{2}}=\frac{p^{2}+2p+1}{p^{2}-2p+1}\qquad\left[\,\text{squaring}\,\right]$$`,
          String.raw`$$\text{or, }\frac{1+x+1-x}{1+x-1+x}=\frac{p^{2}+2p+1+p^{2}-2p+1}{p^{2}+2p+1-p^{2}+2p-1}$$`,
          String.raw`$$\text{or, }\frac{2}{2x}=\frac{2\left(p^{2}+1\right)}{4p}$$`,
          String.raw`$$\text{or, }\frac{1}{x}=\frac{p^{2}+1}{2p}$$`,
          String.raw`$$\text{or, } p^{2}+1=\frac{2p}{x}$$`,
          String.raw`$$\therefore\; p^{2}-\frac{2p}{x}+1=0$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    // উদাহরণ ৭ — book page ২১২.
    {
      id: 7,
      question: String.raw`$\dfrac{a^{3}+b^{3}}{a-b+c}=a(a+b)$ হলে, প্রমাণ করো যে, $a,\,b,\,c$ ক্রমিক সমানুপাতী।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{a^{3}+b^{3}}{a-b+c}=a(a+b)$$`,
          String.raw`$$\text{or, }\frac{(a+b)\left(a^{2}-ab+b^{2}\right)}{a-b+c}=a(a+b)$$`,
          String.raw`$$\text{or, }\frac{a^{2}-ab+b^{2}}{a-b+c}=a\qquad\left[\,\div\,(a+b)\,\right]$$`,
          String.raw`$$\text{or, } a^{2}-ab+b^{2}=a^{2}-ab+ac$$`,
          String.raw`$$\therefore\; b^{2}=ac$$`,
          String.raw`সুতরাং $a,\,b,\,c$ ক্রমিক সমানুপাতী।`,
        ],
        answer: String.raw`$b^{2}=ac$, অর্থাৎ $a,b,c$ ক্রমিক সমানুপাতী`,
      },
    },
    // উদাহরণ ৮ — book pages ২১২-২১৩.
    {
      id: 8,
      question: String.raw`যদি $\dfrac{a+b}{b+c}=\dfrac{c+d}{d+a}$ হয়, তবে প্রমাণ করো যে, $c=a$ অথবা $a+b+c+d=0$।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{a+b}{b+c}=\frac{c+d}{d+a}$$`,
          String.raw`$$\text{or, }\frac{a+b}{b+c}-1=\frac{c+d}{d+a}-1$$`,
          String.raw`$$\text{or, }\frac{a+b-b-c}{b+c}=\frac{c+d-d-a}{d+a}$$`,
          String.raw`$$\text{or, }\frac{a-c}{b+c}=\frac{c-a}{d+a}$$`,
          String.raw`$$\text{or, }\frac{a-c}{b+c}=-\frac{a-c}{d+a}$$`,
          String.raw`$$\text{or, }\frac{a-c}{b+c}+\frac{a-c}{d+a}=0$$`,
          String.raw`$$\text{or, }(a-c)\left(\frac{1}{b+c}+\frac{1}{d+a}\right)=0$$`,
          String.raw`$$\text{or, }(a-c)\cdot\frac{d+a+b+c}{(b+c)(d+a)}=0$$`,
          String.raw`$$\text{or, }(a-c)(a+b+c+d)=0$$`,
          String.raw`$$\text{or, } a-c=0\quad\text{or}\quad a+b+c+d=0$$`,
          String.raw`$$\therefore\; c=a\quad\text{or}\quad a+b+c+d=0$$`,
        ],
        answer: String.raw`$c=a$ অথবা $a+b+c+d=0$`,
      },
    },
    // উদাহরণ ৯ — book page ২১৩.
    {
      id: 9,
      question: String.raw`যদি $\dfrac{x}{y+z}=\dfrac{y}{z+x}=\dfrac{z}{x+y}$ এবং $x,\,y,\,z$ সকলে পরস্পর সমান না হয়, তবে প্রমাণ করো যে, প্রতিটি অনুপাতের মান $-1$ অথবা $\dfrac{1}{2}$-এর সমান হবে।`,
      solution: {
        steps: [
          String.raw`মনে করি,`,
          String.raw`$$\frac{x}{y+z}=\frac{y}{z+x}=\frac{z}{x+y}=k$$`,
          String.raw`$$\therefore\; x=k(y+z)\qquad\cdots(1)$$`,
          String.raw`$$y=k(z+x)\qquad\cdots(2)$$`,
          String.raw`$$z=k(x+y)\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(1)$ থেকে $(2)$ বিয়োগ করে পাই,`,
          String.raw`$$x-y=k(y-x)$$`,
          String.raw`$$\text{or, } k(y-x)=-(y-x)$$`,
          String.raw`$$\therefore\; k=-1$$`,
          String.raw`আবার, সমীকরণ $(1),(2)$ ও $(3)$ যোগ করে পাই,`,
          String.raw`$$x+y+z=k(y+z+z+x+x+y)=2k(x+y+z)$$`,
          String.raw`$$\text{or, } k=\frac{x+y+z}{2(x+y+z)}$$`,
          String.raw`$$\therefore\; k=\frac{1}{2}$$`,
          String.raw`সুতরাং প্রতিটি অনুপাতের মান $-1$ অথবা $\dfrac{1}{2}$।`,
        ],
        answer: String.raw`$-1$ অথবা $\dfrac{1}{2}$`,
      },
    },
    // উদাহরণ ১০ — book pages ২১৩-২১৪.
    {
      id: 10,
      question: String.raw`যদি $ax=by=cz$ হয়, তবে দেখাও যে, $$\frac{x^{2}}{yz}+\frac{y^{2}}{zx}+\frac{z^{2}}{xy}=\frac{bc}{a^{2}}+\frac{ca}{b^{2}}+\frac{ab}{c^{2}}$$`,
      solution: {
        steps: [
          String.raw`মনে করি, $ax=by=cz=k$`,
          String.raw`$$\therefore\; x=\frac{k}{a},\qquad y=\frac{k}{b},\qquad z=\frac{k}{c}$$`,
          String.raw`এখন,`,
          String.raw`$$\frac{x^{2}}{yz}+\frac{y^{2}}{zx}+\frac{z^{2}}{xy}=\frac{k^{2}}{a^{2}}\times\frac{bc}{k^{2}}+\frac{k^{2}}{b^{2}}\times\frac{ca}{k^{2}}+\frac{k^{2}}{c^{2}}\times\frac{ab}{k^{2}}$$`,
          String.raw`$$=\frac{bc}{a^{2}}+\frac{ca}{b^{2}}+\frac{ab}{c^{2}}$$`,
          String.raw`$$\therefore\;\frac{x^{2}}{yz}+\frac{y^{2}}{zx}+\frac{z^{2}}{xy}=\frac{bc}{a^{2}}+\frac{ca}{b^{2}}+\frac{ab}{c^{2}}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    // উদাহরণ ১১ — book pages ২১৪-২১৫.
    {
      id: 11,
      question: String.raw`$a,\,b,\,c$ ও $d$ ক্রমিক সমানুপাতী এবং $x=\dfrac{10pq}{p+q}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`দেখাও যে, $$\frac{a}{c}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $a:b=b:c$, অর্থাৎ $\dfrac{a}{b}=\dfrac{b}{c}$`,
              String.raw`$$\therefore\; b^{2}=ac$$`,
              String.raw`$$\text{R.H.S.}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}=\frac{a^{2}+ac}{ac+c^{2}}$$`,
              String.raw`$$=\frac{a(a+c)}{c(a+c)}=\frac{a}{c}=\text{L.H.S.}$$`,
              String.raw`$$\therefore\;\frac{a}{c}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $$\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)=(ab+bc+cd)^{2}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $a,\,b,\,c$ ও $d$ ক্রমিক সমানুপাতী।`,
              String.raw`$$\therefore\;\frac{a}{b}=\frac{b}{c}=\frac{c}{d}$$`,
              String.raw`ধরি, $\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}=k$, যেখানে $k$ একটি সমানুপাতিক ধ্রুবক`,
              String.raw`$$\therefore\; c=dk,\qquad b=ck=dk^{2},\qquad a=bk=dk^{3}$$`,
              String.raw`$$\text{L.H.S.}=\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)$$`,
              String.raw`$$=\left\{\left(dk^{3}\right)^{2}+\left(dk^{2}\right)^{2}+(dk)^{2}\right\}\left\{\left(dk^{2}\right)^{2}+(dk)^{2}+d^{2}\right\}$$`,
              String.raw`$$=\left(d^{2}k^{6}+d^{2}k^{4}+d^{2}k^{2}\right)\left(d^{2}k^{4}+d^{2}k^{2}+d^{2}\right)$$`,
              String.raw`$$=d^{2}k^{2}\left(k^{4}+k^{2}+1\right)\cdot d^{2}\left(k^{4}+k^{2}+1\right)$$`,
              String.raw`$$=d^{4}k^{2}\left(k^{4}+k^{2}+1\right)^{2}$$`,
              String.raw`$$\text{R.H.S.}=(ab+bc+cd)^{2}$$`,
              String.raw`$$=\left(dk^{3}\cdot dk^{2}+dk^{2}\cdot dk+dk\cdot d\right)^{2}$$`,
              String.raw`$$=\left(d^{2}k^{5}+d^{2}k^{3}+d^{2}k\right)^{2}$$`,
              String.raw`$$=\left\{d^{2}k\left(k^{4}+k^{2}+1\right)\right\}^{2}$$`,
              String.raw`$$=d^{4}k^{2}\left(k^{4}+k^{2}+1\right)^{2}=\text{L.H.S.}$$`,
              String.raw`$$\therefore\;\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)=(ab+bc+cd)^{2}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{x+5p}{x-5p}+\frac{x+5q}{x-5q}$$ এর মান নির্ণয় করো, যেখানে $p\neq q$।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $x=\dfrac{10pq}{p+q}$`,
              String.raw`$$\text{or, }\frac{x}{5p}=\frac{2q}{p+q}$$`,
              String.raw`$$\text{or, }\frac{x+5p}{x-5p}=\frac{2q+p+q}{2q-p-q}$$`,
              String.raw`$$\text{or, }\frac{x+5p}{x-5p}=\frac{p+3q}{q-p}\qquad\cdots(1)$$`,
              String.raw`আবার, $x=\dfrac{10pq}{p+q}$`,
              String.raw`$$\text{or, }\frac{x}{5q}=\frac{2p}{p+q}$$`,
              String.raw`$$\text{or, }\frac{x+5q}{x-5q}=\frac{2p+p+q}{2p-p-q}$$`,
              String.raw`$$\text{or, }\frac{x+5q}{x-5q}=\frac{3p+q}{p-q}\qquad\cdots(2)$$`,
              String.raw`এখন $(1)$ ও $(2)$ যোগ করে পাই,`,
              String.raw`$$\frac{x+5p}{x-5p}+\frac{x+5q}{x-5q}=\frac{p+3q}{q-p}+\frac{3p+q}{p-q}=\frac{p+3q}{q-p}-\frac{3p+q}{q-p}$$`,
              String.raw`$$=\frac{p+3q-3p-q}{q-p}=\frac{2q-2p}{q-p}=\frac{2(q-p)}{q-p}=2$$`,
              String.raw`নির্ণেয় মান $2$।`,
            ],
            answer: String.raw`$2$`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      question: String.raw`দুইটি বর্গক্ষেত্রের বাহুর দৈর্ঘ্য যথাক্রমে $a$ মিটার এবং $b$ মিটার হলে, এদের ক্ষেত্রফলের অনুপাত কত?`,
      solution: {
        steps: [
          String.raw`প্রথম বর্গক্ষেত্রের বাহু $a$ মিটার, তাই এর ক্ষেত্রফল $a^{2}$ বর্গমিটার।`,
          String.raw`দ্বিতীয় বর্গক্ষেত্রের বাহু $b$ মিটার, তাই এর ক্ষেত্রফল $b^{2}$ বর্গমিটার।`,
          String.raw`$$\therefore\;\text{ratio}=\frac{a^{2}}{b^{2}}=a^{2}:b^{2}$$`,
          String.raw`নির্ণেয় অনুপাত $a^{2}:b^{2}$।`,
        ],
        answer: String.raw`$a^{2}:b^{2}$`,
      },
    },
    {
      id: 2,
      question: String.raw`একটি বৃত্তক্ষেত্রের ক্ষেত্রফল একটি বর্গক্ষেত্রের ক্ষেত্রফলের সমান হলে, এদের পরিসীমার অনুপাত নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বৃত্তের ব্যাসার্ধ $r$ একক এবং বর্গক্ষেত্রের বাহুর দৈর্ঘ্য $a$ একক।`,
          String.raw`প্রশ্নানুসারে, দুইটি ক্ষেত্রফল সমান।`,
          String.raw`$$\pi r^{2}=a^{2}$$`,
          String.raw`$$\therefore\; a=r\sqrt{\pi}$$`,
          String.raw`বৃত্তের পরিসীমা $=2\pi r$ এবং বর্গক্ষেত্রের পরিসীমা $=4a=4r\sqrt{\pi}$।`,
          String.raw`$$\therefore\;\text{ratio}=\frac{2\pi r}{4r\sqrt{\pi}}=\frac{\pi}{2\sqrt{\pi}}=\frac{\sqrt{\pi}\cdot\sqrt{\pi}}{2\sqrt{\pi}}=\frac{\sqrt{\pi}}{2}$$`,
          String.raw`নির্ণেয় অনুপাত $\sqrt{\pi}:2$।`,
        ],
        answer: String.raw`$\sqrt{\pi}:2$`,
      },
    },
    {
      id: 3,
      question: String.raw`দুইটি সংখ্যার অনুপাত $3:4$ এবং এদের ল.সা.গু. $180$। সংখ্যা দুইটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সংখ্যা দুইটি $3x$ ও $4x$, যেখানে $x$ এদের গ.সা.গু.।`,
          String.raw`$3$ ও $4$ পরস্পর সহমৌলিক, তাই সংখ্যা দুইটির ল.সা.গু. $=3\times 4\times x=12x$।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$12x=180$$`,
          String.raw`$$\therefore\; x=15$$`,
          String.raw`$$\therefore\; 3x=3\times 15=45,\qquad 4x=4\times 15=60$$`,
          String.raw`নির্ণেয় সংখ্যা দুইটি $45$ ও $60$।`,
        ],
        answer: String.raw`$45$ ও $60$`,
      },
    },
    {
      id: 4,
      question: String.raw`একদিন তোমাদের ক্লাসে দেখা গেল অনুপস্থিত ও উপস্থিত শিক্ষার্থী সংখ্যার অনুপাত $1:4$। অনুপস্থিত শিক্ষার্থী সংখ্যাকে মোট শিক্ষার্থী সংখ্যার শতকরায় প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, অনুপস্থিত শিক্ষার্থী $x$ জন; তাহলে উপস্থিত শিক্ষার্থী $4x$ জন।`,
          String.raw`$$\therefore\;\text{total}=x+4x=5x$$`,
          String.raw`$$\therefore\;\frac{x}{5x}\times 100\%=\frac{1}{5}\times 100\%=20\%$$`,
          String.raw`মোট শিক্ষার্থীর $20\%$ সেদিন অনুপস্থিত ছিল।`,
        ],
        answer: String.raw`$20\%$`,
      },
    },
    {
      id: 5,
      question: String.raw`একটি দ্রব্য ক্রয় করে $28\%$ ক্ষতিতে বিক্রয় করা হলো। বিক্রয়মূল্য ও ক্রয়মূল্যের অনুপাত নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, দ্রব্যটির ক্রয়মূল্য $100$ টাকা।`,
          String.raw`$28\%$ ক্ষতি হওয়ায় বিক্রয়মূল্য $=(100-28)=72$ টাকা।`,
          String.raw`$$\therefore\;\text{ratio}=\frac{72}{100}=\frac{18}{25}$$`,
          String.raw`নির্ণেয় অনুপাত $18:25$।`,
        ],
        answer: String.raw`$18:25$`,
      },
    },
    {
      id: 6,
      question: String.raw`পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি $70$ বছর। $7$ বছর পূর্বে তাদের বয়সের অনুপাত ছিল $5:2$। $5$ বছর পরে তাদের বয়সের অনুপাত কত হবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, পিতার বর্তমান বয়স $a$ বছর এবং পুত্রের বর্তমান বয়স $b$ বছর।`,
          String.raw`$$a+b=70\qquad\cdots(1)$$`,
          String.raw`$7$ বছর পূর্বে পিতার বয়স ছিল $(a-7)$ বছর এবং পুত্রের বয়স ছিল $(b-7)$ বছর।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{a-7}{b-7}=\frac{5}{2}$$`,
          String.raw`$$\text{or, } 2a-14=5b-35$$`,
          String.raw`$$\text{or, } 2a-5b=-21\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে $a=70-b$; এটি $(2)$-এ বসিয়ে পাই,`,
          String.raw`$$2(70-b)-5b=-21$$`,
          String.raw`$$\text{or, } 140-7b=-21$$`,
          String.raw`$$\text{or, } 7b=161$$`,
          String.raw`$$\therefore\; b=23$$`,
          String.raw`$$\therefore\; a=70-23=47$$`,
          String.raw`$5$ বছর পরে পিতার বয়স $(47+5)=52$ বছর এবং পুত্রের বয়স $(23+5)=28$ বছর।`,
          String.raw`$$\therefore\;\text{ratio}=\frac{52}{28}=\frac{13}{7}$$`,
          String.raw`$5$ বছর পরে তাদের বয়সের অনুপাত হবে $13:7$।`,
        ],
        answer: String.raw`$13:7$`,
      },
    },
    {
      id: 7,
      question: String.raw`যদি $a:b=b:c$ হয়, তবে প্রমাণ করো যে,`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{a}{c}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $a:b=b:c$`,
              String.raw`$$\therefore\; b^{2}=ac$$`,
              String.raw`$$\text{R.H.S.}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
              String.raw`$$=\frac{a^{2}+ac}{ac+c^{2}}\qquad\left[\,b^{2}=ac\,\right]$$`,
              String.raw`$$=\frac{a(a+c)}{c(a+c)}=\frac{a}{c}=\text{L.H.S.}$$`,
              String.raw`$$\therefore\;\frac{a}{c}=\frac{a^{2}+b^{2}}{b^{2}+c^{2}}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$a^{2}b^{2}c^{2}\left(\frac{1}{a^{3}}+\frac{1}{b^{3}}+\frac{1}{c^{3}}\right)=a^{3}+b^{3}+c^{3}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $a:b=b:c$`,
              String.raw`$$\therefore\; b^{2}=ac$$`,
              String.raw`$$\text{L.H.S.}=a^{2}b^{2}c^{2}\left(\frac{1}{a^{3}}+\frac{1}{b^{3}}+\frac{1}{c^{3}}\right)$$`,
              String.raw`$$=\frac{b^{2}c^{2}}{a}+\frac{a^{2}c^{2}}{b}+\frac{a^{2}b^{2}}{c}$$`,
              String.raw`$$=\frac{ac\cdot c^{2}}{a}+\frac{(ac)^{2}}{b}+\frac{a^{2}\cdot ac}{c}\qquad\left[\,b^{2}=ac\,\right]$$`,
              String.raw`$$=c^{3}+\frac{\left(b^{2}\right)^{2}}{b}+a^{3}$$`,
              String.raw`$$=c^{3}+b^{3}+a^{3}=\text{R.H.S.}$$`,
              String.raw`$$\therefore\; a^{2}b^{2}c^{2}\left(\frac{1}{a^{3}}+\frac{1}{b^{3}}+\frac{1}{c^{3}}\right)=a^{3}+b^{3}+c^{3}$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{abc(a+b+c)^{3}}{(ab+bc+ca)^{3}}=1$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে, $a:b=b:c$`,
              String.raw`$$\therefore\; b^{2}=ac$$`,
              String.raw`$$\therefore\; abc=ac\cdot b=b^{2}\cdot b=b^{3}$$`,
              String.raw`আবার,`,
              String.raw`$$ab+bc+ca=ab+bc+b^{2}=b(a+c+b)=b(a+b+c)$$`,
              String.raw`$$\therefore\;\text{L.H.S.}=\frac{abc(a+b+c)^{3}}{(ab+bc+ca)^{3}}=\frac{b^{3}(a+b+c)^{3}}{b^{3}(a+b+c)^{3}}$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
              String.raw`$$\therefore\;\frac{abc(a+b+c)^{3}}{(ab+bc+ca)^{3}}=1$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
    {
      id: 8,
      question: String.raw`সমাধান করো:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{1-\sqrt{1-x}}{1+\sqrt{1-x}}=\frac{1}{3}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে,`,
              String.raw`$$\frac{1-\sqrt{1-x}}{1+\sqrt{1-x}}=\frac{1}{3}$$`,
              String.raw`$$\text{or, }\frac{1-\sqrt{1-x}+1+\sqrt{1-x}}{1-\sqrt{1-x}-1-\sqrt{1-x}}=\frac{1+3}{1-3}$$`,
              String.raw`$$\text{or, }\frac{2}{-2\sqrt{1-x}}=\frac{4}{-2}$$`,
              String.raw`$$\text{or, }\frac{1}{\sqrt{1-x}}=2$$`,
              String.raw`$$\text{or, }\sqrt{1-x}=\frac{1}{2}$$`,
              String.raw`$$\text{or, } 1-x=\frac{1}{4}\qquad\left[\,\text{squaring}\,\right]$$`,
              String.raw`$$\therefore\; x=1-\frac{1}{4}=\frac{3}{4}$$`,
            ],
            answer: String.raw`$x=\dfrac{3}{4}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{a+x-\sqrt{a^{2}-x^{2}}}{a+x+\sqrt{a^{2}-x^{2}}}=\frac{b}{x},\qquad 2a>b>0,\; x\neq 0$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে,`,
              String.raw`$$\frac{a+x-\sqrt{a^{2}-x^{2}}}{a+x+\sqrt{a^{2}-x^{2}}}=\frac{b}{x}$$`,
              String.raw`যোজন-বিয়োজন করে (হর থেকে লব বিয়োগ করে) পাই,`,
              String.raw`$$\frac{a+x+\sqrt{a^{2}-x^{2}}+a+x-\sqrt{a^{2}-x^{2}}}{a+x+\sqrt{a^{2}-x^{2}}-a-x+\sqrt{a^{2}-x^{2}}}=\frac{x+b}{x-b}$$`,
              String.raw`$$\text{or, }\frac{2(a+x)}{2\sqrt{a^{2}-x^{2}}}=\frac{x+b}{x-b}$$`,
              String.raw`$$\text{or, }\frac{a+x}{\sqrt{(a+x)(a-x)}}=\frac{x+b}{x-b}$$`,
              String.raw`$$\text{or, }\sqrt{\frac{a+x}{a-x}}=\frac{x+b}{x-b}$$`,
              String.raw`$$\text{or, }\frac{a+x}{a-x}=\frac{(x+b)^{2}}{(x-b)^{2}}\qquad\left[\,\text{squaring}\,\right]$$`,
              String.raw`আবার যোজন-বিয়োজন করে পাই,`,
              String.raw`$$\frac{a+x+a-x}{a+x-a+x}=\frac{(x+b)^{2}+(x-b)^{2}}{(x+b)^{2}-(x-b)^{2}}$$`,
              String.raw`$$\text{or, }\frac{2a}{2x}=\frac{2\left(x^{2}+b^{2}\right)}{4bx}$$`,
              String.raw`$$\text{or, }\frac{a}{x}=\frac{x^{2}+b^{2}}{2bx}$$`,
              String.raw`$$\text{or, } 2abx=x\left(x^{2}+b^{2}\right)$$`,
              String.raw`$$\text{or, } 2ab=x^{2}+b^{2}\qquad\left[\,x\neq 0\,\right]$$`,
              String.raw`$$\text{or, } x^{2}=2ab-b^{2}=b(2a-b)$$`,
              String.raw`$$\therefore\; x=\pm\sqrt{b(2a-b)}$$`,
              String.raw`$2a>b>0$ হওয়ায় $b(2a-b)>0$, তাই মান দুইটি বাস্তব।`,
              String.raw`সমাধানের পথে দুইবার বর্গ করা হয়েছে, তাই মানটি মূল সমীকরণে বসিয়ে যাচাই করা দরকার — $b\le a$ হলে $x=\pm\sqrt{b(2a-b)}$ মূল সমীকরণ সিদ্ধ করে।`,
            ],
            answer: String.raw`$x=\pm\sqrt{b(2a-b)}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$81\left(\frac{1-x}{1+x}\right)^{3}=\frac{1+x}{1-x}$$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে,`,
              String.raw`$$81\left(\frac{1-x}{1+x}\right)^{3}=\frac{1+x}{1-x}$$`,
              String.raw`$$\text{or, } 81\cdot\frac{(1-x)^{3}}{(1+x)^{3}}\cdot\frac{1-x}{1+x}=1$$`,
              String.raw`$$\text{or, }\left(\frac{1-x}{1+x}\right)^{4}=\frac{1}{81}$$`,
              String.raw`$$\text{or, }\left(\frac{1+x}{1-x}\right)^{4}=81=(\pm 3)^{4}$$`,
              String.raw`$$\therefore\;\frac{1+x}{1-x}=3\qquad\text{or}\qquad\frac{1+x}{1-x}=-3$$`,
              String.raw`প্রথম ক্ষেত্রে,`,
              String.raw`$$1+x=3-3x$$`,
              String.raw`$$\text{or, } 4x=2$$`,
              String.raw`$$\therefore\; x=\frac{1}{2}$$`,
              String.raw`দ্বিতীয় ক্ষেত্রে,`,
              String.raw`$$1+x=-3+3x$$`,
              String.raw`$$\text{or, } 2x=4$$`,
              String.raw`$$\therefore\; x=2$$`,
            ],
            answer: String.raw`$x=\dfrac{1}{2}$ অথবা $x=2$`,
          },
        },
      ],
    },
    {
      id: 9,
      question: String.raw`$\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}$ হলে, দেখাও যে,`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{a^{3}+b^{3}}{b^{3}+c^{3}}=\frac{b^{3}+c^{3}}{c^{3}+d^{3}}$$`,
          solution: {
            steps: [
              String.raw`মনে করি,`,
              String.raw`$$\frac{a}{b}=\frac{b}{c}=\frac{c}{d}=k$$`,
              String.raw`$$\therefore\; c=dk,\qquad b=ck=dk^{2},\qquad a=bk=dk^{3}$$`,
              String.raw`$$\text{L.H.S.}=\frac{a^{3}+b^{3}}{b^{3}+c^{3}}=\frac{d^{3}k^{9}+d^{3}k^{6}}{d^{3}k^{6}+d^{3}k^{3}}$$`,
              String.raw`$$=\frac{d^{3}k^{6}\left(k^{3}+1\right)}{d^{3}k^{3}\left(k^{3}+1\right)}=k^{3}$$`,
              String.raw`$$\text{R.H.S.}=\frac{b^{3}+c^{3}}{c^{3}+d^{3}}=\frac{d^{3}k^{6}+d^{3}k^{3}}{d^{3}k^{3}+d^{3}}$$`,
              String.raw`$$=\frac{d^{3}k^{3}\left(k^{3}+1\right)}{d^{3}\left(k^{3}+1\right)}=k^{3}$$`,
              String.raw`$$\therefore\;\frac{a^{3}+b^{3}}{b^{3}+c^{3}}=\frac{b^{3}+c^{3}}{c^{3}+d^{3}}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)=(ab+bc+cd)^{2}$$`,
          solution: {
            steps: [
              String.raw`মনে করি,`,
              String.raw`$$\frac{a}{b}=\frac{b}{c}=\frac{c}{d}=k$$`,
              String.raw`$$\therefore\; c=dk,\qquad b=dk^{2},\qquad a=dk^{3}$$`,
              String.raw`$$\text{L.H.S.}=\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)$$`,
              String.raw`$$=\left(d^{2}k^{6}+d^{2}k^{4}+d^{2}k^{2}\right)\left(d^{2}k^{4}+d^{2}k^{2}+d^{2}\right)$$`,
              String.raw`$$=d^{2}k^{2}\left(k^{4}+k^{2}+1\right)\cdot d^{2}\left(k^{4}+k^{2}+1\right)$$`,
              String.raw`$$=d^{4}k^{2}\left(k^{4}+k^{2}+1\right)^{2}$$`,
              String.raw`$$\text{R.H.S.}=(ab+bc+cd)^{2}=\left(d^{2}k^{5}+d^{2}k^{3}+d^{2}k\right)^{2}$$`,
              String.raw`$$=\left\{d^{2}k\left(k^{4}+k^{2}+1\right)\right\}^{2}=d^{4}k^{2}\left(k^{4}+k^{2}+1\right)^{2}$$`,
              String.raw`$$\therefore\;\left(a^{2}+b^{2}+c^{2}\right)\left(b^{2}+c^{2}+d^{2}\right)=(ab+bc+cd)^{2}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
    {
      id: 10,
      question: String.raw`$x=\dfrac{4ab}{a+b}$ হলে, দেখাও যে, $$\frac{x+2a}{x-2a}+\frac{x+2b}{x-2b}=2,\qquad a\neq b$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $x=\dfrac{4ab}{a+b}$`,
          String.raw`$$\text{or, }\frac{x}{2a}=\frac{2b}{a+b}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{x+2a}{x-2a}=\frac{2b+a+b}{2b-a-b}=\frac{a+3b}{b-a}\qquad\cdots(1)$$`,
          String.raw`আবার, $x=\dfrac{4ab}{a+b}$`,
          String.raw`$$\text{or, }\frac{x}{2b}=\frac{2a}{a+b}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{x+2b}{x-2b}=\frac{2a+a+b}{2a-a-b}=\frac{3a+b}{a-b}\qquad\cdots(2)$$`,
          String.raw`এখন $(1)$ ও $(2)$ যোগ করে পাই,`,
          String.raw`$$\frac{x+2a}{x-2a}+\frac{x+2b}{x-2b}=\frac{a+3b}{b-a}+\frac{3a+b}{a-b}$$`,
          String.raw`$$=-\frac{a+3b}{a-b}+\frac{3a+b}{a-b}=\frac{3a+b-a-3b}{a-b}$$`,
          String.raw`$$=\frac{2a-2b}{a-b}=\frac{2(a-b)}{a-b}=2$$`,
          String.raw`$$\therefore\;\frac{x+2a}{x-2a}+\frac{x+2b}{x-2b}=2$$`,
        ],
        answer: String.raw`$2$ (দেখানো হলো)`,
      },
    },
    {
      id: 11,
      question: String.raw`$x=\dfrac{\sqrt[3]{m+1}+\sqrt[3]{m-1}}{\sqrt[3]{m+1}-\sqrt[3]{m-1}}$ হলে, প্রমাণ করো যে, $$x^{3}-3mx^{2}+3x-m=0$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{x}{1}=\frac{\sqrt[3]{m+1}+\sqrt[3]{m-1}}{\sqrt[3]{m+1}-\sqrt[3]{m-1}}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{x+1}{x-1}=\frac{2\sqrt[3]{m+1}}{2\sqrt[3]{m-1}}=\sqrt[3]{\frac{m+1}{m-1}}$$`,
          String.raw`$$\text{or, }\frac{(x+1)^{3}}{(x-1)^{3}}=\frac{m+1}{m-1}\qquad\left[\,\text{cubing}\,\right]$$`,
          String.raw`আবার যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{(x+1)^{3}+(x-1)^{3}}{(x+1)^{3}-(x-1)^{3}}=\frac{m+1+m-1}{m+1-m+1}$$`,
          String.raw`$$\text{or, }\frac{2\left(x^{3}+3x\right)}{2\left(3x^{2}+1\right)}=\frac{2m}{2}$$`,
          String.raw`$$\text{or, }\frac{x^{3}+3x}{3x^{2}+1}=m$$`,
          String.raw`$$\text{or, } x^{3}+3x=3mx^{2}+m$$`,
          String.raw`$$\therefore\; x^{3}-3mx^{2}+3x-m=0$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 12,
      question: String.raw`$x=\dfrac{\sqrt{2a+3b}+\sqrt{2a-3b}}{\sqrt{2a+3b}-\sqrt{2a-3b}}$ হলে, দেখাও যে, $$3bx^{2}-4ax+3b=0$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{x}{1}=\frac{\sqrt{2a+3b}+\sqrt{2a-3b}}{\sqrt{2a+3b}-\sqrt{2a-3b}}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{x+1}{x-1}=\frac{2\sqrt{2a+3b}}{2\sqrt{2a-3b}}=\sqrt{\frac{2a+3b}{2a-3b}}$$`,
          String.raw`$$\text{or, }\frac{(x+1)^{2}}{(x-1)^{2}}=\frac{2a+3b}{2a-3b}\qquad\left[\,\text{squaring}\,\right]$$`,
          String.raw`আবার যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{(x+1)^{2}+(x-1)^{2}}{(x+1)^{2}-(x-1)^{2}}=\frac{2a+3b+2a-3b}{2a+3b-2a+3b}$$`,
          String.raw`$$\text{or, }\frac{2\left(x^{2}+1\right)}{4x}=\frac{4a}{6b}$$`,
          String.raw`$$\text{or, }\frac{x^{2}+1}{2x}=\frac{2a}{3b}$$`,
          String.raw`$$\text{or, } 3b\left(x^{2}+1\right)=4ax$$`,
          String.raw`$$\therefore\; 3bx^{2}-4ax+3b=0$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 13,
      question: String.raw`$\dfrac{a^{2}+b^{2}}{b^{2}+c^{2}}=\dfrac{(a+b)^{2}}{(b+c)^{2}}$ হলে, দেখাও যে, $a,\,b,\,c$ ক্রমিক সমানুপাতী।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{a^{2}+b^{2}}{b^{2}+c^{2}}=\frac{(a+b)^{2}}{(b+c)^{2}}$$`,
          String.raw`$$\text{or, }\left(a^{2}+b^{2}\right)(b+c)^{2}=\left(b^{2}+c^{2}\right)(a+b)^{2}$$`,
          String.raw`$$\text{or, }\left(a^{2}+b^{2}\right)\left(b^{2}+2bc+c^{2}\right)=\left(b^{2}+c^{2}\right)\left(a^{2}+2ab+b^{2}\right)$$`,
          String.raw`$$\text{or, } a^{2}b^{2}+2a^{2}bc+a^{2}c^{2}+b^{4}+2b^{3}c+b^{2}c^{2}$$`,
          String.raw`$$\qquad=a^{2}b^{2}+2ab^{3}+b^{4}+a^{2}c^{2}+2abc^{2}+b^{2}c^{2}$$`,
          String.raw`$$\text{or, } 2a^{2}bc+2b^{3}c=2ab^{3}+2abc^{2}$$`,
          String.raw`$$\text{or, } a^{2}c+b^{2}c=ab^{2}+ac^{2}\qquad\left[\,\div\,2b\,\right]$$`,
          String.raw`$$\text{or, } a^{2}c-ac^{2}-ab^{2}+b^{2}c=0$$`,
          String.raw`$$\text{or, } ac(a-c)-b^{2}(a-c)=0$$`,
          String.raw`$$\text{or, }(a-c)\left(ac-b^{2}\right)=0$$`,
          String.raw`$a=c$ হলে প্রদত্ত শর্তটি $b$-এর যেকোনো মানেই সত্য হয়, তাই এখানে $a\neq c$ ধরে নিই।`,
          String.raw`$$\therefore\; ac-b^{2}=0$$`,
          String.raw`$$\therefore\; b^{2}=ac$$`,
          String.raw`সুতরাং $a,\,b,\,c$ ক্রমিক সমানুপাতী।`,
        ],
        answer: String.raw`$b^{2}=ac$, অর্থাৎ $a,b,c$ ক্রমিক সমানুপাতী`,
      },
    },
    {
      id: 14,
      question: String.raw`$\dfrac{x}{b+c}=\dfrac{y}{c+a}=\dfrac{z}{a+b}$ হলে, প্রমাণ করো যে, $$\frac{a}{y+z-x}=\frac{b}{z+x-y}=\frac{c}{x+y-z}$$`,
      solution: {
        steps: [
          String.raw`মনে করি,`,
          String.raw`$$\frac{x}{b+c}=\frac{y}{c+a}=\frac{z}{a+b}=k$$`,
          String.raw`$$\therefore\; x=k(b+c),\qquad y=k(c+a),\qquad z=k(a+b)$$`,
          String.raw`এখন,`,
          String.raw`$$y+z-x=k(c+a)+k(a+b)-k(b+c)=k(2a)=2ak$$`,
          String.raw`$$\therefore\;\frac{a}{y+z-x}=\frac{a}{2ak}=\frac{1}{2k}$$`,
          String.raw`অনুরূপভাবে,`,
          String.raw`$$z+x-y=k(a+b)+k(b+c)-k(c+a)=2bk$$`,
          String.raw`$$\therefore\;\frac{b}{z+x-y}=\frac{b}{2bk}=\frac{1}{2k}$$`,
          String.raw`এবং`,
          String.raw`$$x+y-z=k(b+c)+k(c+a)-k(a+b)=2ck$$`,
          String.raw`$$\therefore\;\frac{c}{x+y-z}=\frac{c}{2ck}=\frac{1}{2k}$$`,
          String.raw`$$\therefore\;\frac{a}{y+z-x}=\frac{b}{z+x-y}=\frac{c}{x+y-z}$$`,
        ],
        answer: String.raw`প্রমাণিত (প্রতিটি অনুপাত $=\dfrac{1}{2k}$)`,
      },
    },
    {
      id: 15,
      question: String.raw`$\dfrac{bz-cy}{a}=\dfrac{cx-az}{b}=\dfrac{ay-bx}{c}$ হলে, প্রমাণ করো যে, $$\frac{x}{a}=\frac{y}{b}=\frac{z}{c}$$`,
      solution: {
        steps: [
          String.raw`মনে করি,`,
          String.raw`$$\frac{bz-cy}{a}=\frac{cx-az}{b}=\frac{ay-bx}{c}=k$$`,
          String.raw`$$\therefore\; bz-cy=ak,\qquad cx-az=bk,\qquad ay-bx=ck$$`,
          String.raw`প্রথমটিকে $a$ দিয়ে, দ্বিতীয়টিকে $b$ দিয়ে ও তৃতীয়টিকে $c$ দিয়ে গুণ করে যোগ করি,`,
          String.raw`$$a(bz-cy)+b(cx-az)+c(ay-bx)=\left(a^{2}+b^{2}+c^{2}\right)k$$`,
          String.raw`$$\text{or, } abz-acy+bcx-abz+acy-bcx=\left(a^{2}+b^{2}+c^{2}\right)k$$`,
          String.raw`$$\text{or, } 0=\left(a^{2}+b^{2}+c^{2}\right)k$$`,
          String.raw`$a^{2}+b^{2}+c^{2}\neq 0$, সুতরাং`,
          String.raw`$$\therefore\; k=0$$`,
          String.raw`$$\therefore\; bz-cy=0\;\Rightarrow\;\frac{y}{b}=\frac{z}{c}$$`,
          String.raw`$$cx-az=0\;\Rightarrow\;\frac{x}{a}=\frac{z}{c}$$`,
          String.raw`$$ay-bx=0\;\Rightarrow\;\frac{x}{a}=\frac{y}{b}$$`,
          String.raw`$$\therefore\;\frac{x}{a}=\frac{y}{b}=\frac{z}{c}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 16,
      question: String.raw`$\dfrac{a+b-c}{a+b}=\dfrac{b+c-a}{b+c}=\dfrac{c+a-b}{c+a}$ এবং $a+b+c\neq 0$ হলে, প্রমাণ করো যে, $a=b=c$।`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{a+b-c}{a+b}=\frac{b+c-a}{b+c}=\frac{c+a-b}{c+a}$$`,
          String.raw`$$\text{or, } 1-\frac{c}{a+b}=1-\frac{a}{b+c}=1-\frac{b}{c+a}$$`,
          String.raw`$$\text{or, }\frac{c}{a+b}=\frac{a}{b+c}=\frac{b}{c+a}$$`,
          String.raw`প্রতিটি অনুপাত লব ও হরের যোগফলের অনুপাতের সমান, তাই`,
          String.raw`$$\frac{c}{a+b}=\frac{a}{b+c}=\frac{b}{c+a}=\frac{a+b+c}{(a+b)+(b+c)+(c+a)}$$`,
          String.raw`$$=\frac{a+b+c}{2(a+b+c)}=\frac{1}{2}\qquad\left[\,a+b+c\neq 0\,\right]$$`,
          String.raw`$$\therefore\;\frac{c}{a+b}=\frac{1}{2}\;\Rightarrow\; a+b=2c$$`,
          String.raw`$$\frac{a}{b+c}=\frac{1}{2}\;\Rightarrow\; b+c=2a$$`,
          String.raw`$$\frac{b}{c+a}=\frac{1}{2}\;\Rightarrow\; c+a=2b$$`,
          String.raw`প্রথম দুইটি থেকে বিয়োগ করে পাই,`,
          String.raw`$$(a+b)-(b+c)=2c-2a$$`,
          String.raw`$$\text{or, } a-c=2c-2a$$`,
          String.raw`$$\text{or, } 3a=3c$$`,
          String.raw`$$\therefore\; a=c$$`,
          String.raw`$c+a=2b$-এ $c=a$ বসিয়ে পাই $2a=2b$, অর্থাৎ $a=b$।`,
          String.raw`$$\therefore\; a=b=c$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 17,
      question: String.raw`$\dfrac{x}{xa+yb+zc}=\dfrac{y}{ya+zb+xc}=\dfrac{z}{za+xb+yc}$ এবং $x+y+z\neq 0$ হলে, দেখাও যে, প্রতিটি অনুপাত $=\dfrac{1}{a+b+c}$।`,
      solution: {
        steps: [
          String.raw`সমান অনুপাতগুলোর প্রতিটি লবের যোগফল ও হরের যোগফলের অনুপাতের সমান, তাই`,
          String.raw`$$\frac{x}{xa+yb+zc}=\frac{y}{ya+zb+xc}=\frac{z}{za+xb+yc}$$`,
          String.raw`$$=\frac{x+y+z}{(xa+yb+zc)+(ya+zb+xc)+(za+xb+yc)}$$`,
          String.raw`হরের রাশিটি সাজিয়ে লিখি,`,
          String.raw`$$(xa+ya+za)+(yb+zb+xb)+(zc+xc+yc)$$`,
          String.raw`$$=a(x+y+z)+b(x+y+z)+c(x+y+z)$$`,
          String.raw`$$=(a+b+c)(x+y+z)$$`,
          String.raw`$$\therefore\;\text{each ratio}=\frac{x+y+z}{(a+b+c)(x+y+z)}=\frac{1}{a+b+c}\qquad\left[\,x+y+z\neq 0\,\right]$$`,
        ],
        answer: String.raw`প্রতিটি অনুপাত $=\dfrac{1}{a+b+c}$`,
      },
    },
    {
      id: 18,
      question: String.raw`যদি $(a+b+c)p=(b+c-a)q=(c+a-b)r=(a+b-c)s$ হয়, তবে প্রমাণ করো যে, $$\frac{1}{q}+\frac{1}{r}+\frac{1}{s}=\frac{1}{p}$$`,
      solution: {
        steps: [
          String.raw`মনে করি,`,
          String.raw`$$(a+b+c)p=(b+c-a)q=(c+a-b)r=(a+b-c)s=k$$`,
          String.raw`$$\therefore\; p=\frac{k}{a+b+c},\qquad q=\frac{k}{b+c-a}$$`,
          String.raw`$$r=\frac{k}{c+a-b},\qquad s=\frac{k}{a+b-c}$$`,
          String.raw`এখন,`,
          String.raw`$$\frac{1}{q}+\frac{1}{r}+\frac{1}{s}=\frac{b+c-a}{k}+\frac{c+a-b}{k}+\frac{a+b-c}{k}$$`,
          String.raw`$$=\frac{(b+c-a)+(c+a-b)+(a+b-c)}{k}$$`,
          String.raw`$$=\frac{a+b+c}{k}=\frac{1}{p}$$`,
          String.raw`$$\therefore\;\frac{1}{q}+\frac{1}{r}+\frac{1}{s}=\frac{1}{p}$$`,
        ],
        answer: String.raw`প্রমাণিত`,
      },
    },
    {
      id: 19,
      question: String.raw`যদি $lx=my=nz$ হয়, তবে দেখাও যে, $$\frac{x^{2}}{yz}+\frac{y^{2}}{zx}+\frac{z^{2}}{xy}=\frac{mn}{l^{2}}+\frac{nl}{m^{2}}+\frac{lm}{n^{2}}$$`,
      solution: {
        steps: [
          String.raw`মনে করি, $lx=my=nz=k$`,
          String.raw`$$\therefore\; x=\frac{k}{l},\qquad y=\frac{k}{m},\qquad z=\frac{k}{n}$$`,
          String.raw`এখন,`,
          String.raw`$$\frac{x^{2}}{yz}=\frac{k^{2}}{l^{2}}\div\left(\frac{k}{m}\cdot\frac{k}{n}\right)=\frac{k^{2}}{l^{2}}\times\frac{mn}{k^{2}}=\frac{mn}{l^{2}}$$`,
          String.raw`$$\frac{y^{2}}{zx}=\frac{k^{2}}{m^{2}}\times\frac{nl}{k^{2}}=\frac{nl}{m^{2}}$$`,
          String.raw`$$\frac{z^{2}}{xy}=\frac{k^{2}}{n^{2}}\times\frac{lm}{k^{2}}=\frac{lm}{n^{2}}$$`,
          String.raw`$$\therefore\;\frac{x^{2}}{yz}+\frac{y^{2}}{zx}+\frac{z^{2}}{xy}=\frac{mn}{l^{2}}+\frac{nl}{m^{2}}+\frac{lm}{n^{2}}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 20,
      question: String.raw`যদি $\dfrac{p}{q}=\dfrac{a^{2}}{b^{2}}$ এবং $\dfrac{a}{b}=\dfrac{\sqrt{a+q}}{\sqrt{a-q}}$ হয়, তবে দেখাও যে, $$\frac{p+q}{a}=\frac{p-q}{q}$$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে, $\dfrac{a}{b}=\dfrac{\sqrt{a+q}}{\sqrt{a-q}}$`,
          String.raw`$$\text{or, }\frac{a^{2}}{b^{2}}=\frac{a+q}{a-q}\qquad\left[\,\text{squaring}\,\right]$$`,
          String.raw`আবার দেওয়া আছে, $\dfrac{p}{q}=\dfrac{a^{2}}{b^{2}}$, সুতরাং`,
          String.raw`$$\frac{p}{q}=\frac{a+q}{a-q}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{p+q}{p-q}=\frac{(a+q)+(a-q)}{(a+q)-(a-q)}$$`,
          String.raw`$$\text{or, }\frac{p+q}{p-q}=\frac{2a}{2q}=\frac{a}{q}$$`,
          String.raw`$$\therefore\;\frac{p+q}{a}=\frac{p-q}{q}\qquad\left[\,\text{alternendo}\,\right]$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
  ],
};

const SAMPLE_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৯ – ২২)";
const SAMPLE_CREATIVE = "নমুনা প্রশ্ন — সৃজনশীল (২৩)";
const SAMPLE_SHORT = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২৪)";

const exercise112: Exercise = {
  id: "11.2",
  bnId: "অনুশীলনী ১১.২",
  title: "ধারাবাহিক অনুপাত ও সমানুপাতিক ভাগ",
  bookPages: "২২১ – ২২৩",
  formulas: [
    {
      title: "ধারাবাহিক অনুপাত",
      formulas: [
        {
          statement: String.raw`$$x:y=a:b,\quad y:z=c:d\;\Rightarrow\; x:y:z=ac:bc:bd$$`,
          note: "দুইটি অনুপাতকে একসঙ্গে লিখতে প্রথমটির উত্তর রাশি ও দ্বিতীয়টির পূর্ব রাশিকে সমান করে নিতে হয়।",
        },
        {
          statement: String.raw`$$2:3\ \text{and}\ 4:3\;\Rightarrow\; 8:12:9$$`,
          note: String.raw`$3$ ও $4$-এর ল.সা.গু. $12$; তাই $2:3=8:12$ এবং $4:3=12:9$।`,
        },
      ],
    },
    {
      title: "সমানুপাতিক ভাগ",
      formulas: [
        {
          statement: String.raw`$$\text{1st}=\frac{Sa}{a+b+c},\qquad \text{2nd}=\frac{Sb}{a+b+c},\qquad \text{3rd}=\frac{Sc}{a+b+c}$$`,
          note: String.raw`$S$ পরিমাণ রাশিকে $a:b:c$ অনুপাতে ভাগ করার নিয়ম — মোট $(a+b+c)$ ভাগের যথাক্রমে $a$, $b$ ও $c$ ভাগ।`,
        },
        {
          statement: String.raw`$$\text{each part}=\frac{S}{a+b+c}\times(\text{its share})$$`,
          note: "তাই প্রথমে এক ভাগের মান বের করে নিলে বাকি কাজটুকু কেবল গুণ।",
        },
      ],
    },
    {
      title: "শতকরা বৃদ্ধি ও হ্রাস",
      formulas: [
        {
          statement: String.raw`$$\text{new}=\left(1\pm\frac{r}{100}\right)\times\text{old}$$`,
          note: String.raw`$r\%$ বৃদ্ধিতে যোগ, $r\%$ হ্রাসে বিয়োগ।`,
        },
        {
          statement: String.raw`$$\text{change}\%=\frac{\text{new}-\text{old}}{\text{old}}\times 100\%$$`,
          note: "ধনাত্মক হলে বৃদ্ধি, ঋণাত্মক হলে হ্রাস।",
        },
        {
          statement: String.raw`$$A=a^{2}\;\Rightarrow\;A'=(1.1a)^{2}=1.21a^{2}$$`,
          note: String.raw`বাহু $10\%$ বাড়লে ক্ষেত্রফল $21\%$ বাড়ে — বাহুর শতকরা বৃদ্ধি সরাসরি ক্ষেত্রফলে বসে না।`,
        },
      ],
    },
    {
      title: "ক্রয়-বিক্রয় ও সরল মুনাফা",
      formulas: [
        {
          statement: String.raw`$$\text{SP}=\left(1\pm\frac{r}{100}\right)\text{CP}$$`,
          note: String.raw`$r\%$ লাভে যোগ, $r\%$ ক্ষতিতে বিয়োগ।`,
        },
        {
          statement: String.raw`$$\text{amount}=P\left(1+\frac{rn}{100}\right)$$`,
          note: String.raw`সরল মুনাফায় মুনাফা-আসল; এখানে $P$ আসল, $r\%$ বার্ষিক হার ও $n$ বছর।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১২ — book page ২১৮.
    {
      id: 12,
      question: String.raw`ক, খ ও গ এক জাতীয় রাশি এবং ক : খ $=3:4$, খ : গ $=6:7$ হলে, ক : খ : গ কত?`,
      solution: {
        steps: [
          String.raw`$4$ ও $6$-এর ল.সা.গু. $12$; দুইটি অনুপাতের মধ্যপদকে $12$-তে মিলিয়ে নিই।`,
          String.raw`ক : খ $=\dfrac{3}{4}=\dfrac{3\times 3}{4\times 3}=\dfrac{9}{12}$`,
          String.raw`খ : গ $=\dfrac{6}{7}=\dfrac{6\times 2}{7\times 2}=\dfrac{12}{14}$`,
          String.raw`সুতরাং ক : খ : গ $=9:12:14$।`,
        ],
        answer: String.raw`ক : খ : গ $=9:12:14$`,
      },
    },
    // উদাহরণ ১৩ — book page ২১৮.
    {
      id: 13,
      question: String.raw`একটি ত্রিভুজের তিনটি কোণের অনুপাত $3:4:5$; কোণ তিনটি ডিগ্রিতে প্রকাশ করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, প্রদত্ত অনুপাত অনুসারে কোণ তিনটি যথাক্রমে $3x$, $4x$ এবং $5x$।`,
          String.raw`ত্রিভুজের তিন কোণের সমষ্টি $=180^{\circ}$।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$3x+4x+5x=180^{\circ}$$`,
          String.raw`$$\text{or, } 12x=180^{\circ}$$`,
          String.raw`$$\therefore\; x=15^{\circ}$$`,
          String.raw`অতএব, কোণ তিনটি হলো`,
          String.raw`$$3x=3\times 15^{\circ}=45^{\circ}$$`,
          String.raw`$$4x=4\times 15^{\circ}=60^{\circ}$$`,
          String.raw`$$5x=5\times 15^{\circ}=75^{\circ}$$`,
        ],
        answer: String.raw`$45^{\circ},\;60^{\circ},\;75^{\circ}$`,
      },
    },
    // উদাহরণ ১৪ — book pages ২১৮-২১৯.
    {
      id: 14,
      question: String.raw`যদি কোনো বর্গক্ষেত্রের প্রত্যেক বাহুর পরিমাণ $10\%$ বৃদ্ধি পায়, তবে তার ক্ষেত্রফল শতকরা কত বৃদ্ধি পাবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্গক্ষেত্রের প্রত্যেক বাহুর দৈর্ঘ্য $a$ মিটার; সুতরাং এর ক্ষেত্রফল $a^{2}$ বর্গমিটার।`,
          String.raw`$10\%$ বৃদ্ধি পেলে প্রত্যেক বাহুর দৈর্ঘ্য হয় $1.10a$ মিটার।`,
          String.raw`$$\therefore\;\text{new area}=(1.10a)^{2}=1.21a^{2}$$`,
          String.raw`$$\therefore\;\text{increase}=1.21a^{2}-a^{2}=0.21a^{2}$$`,
          String.raw`$$\therefore\;\frac{0.21a^{2}}{a^{2}}\times 100\%=21\%$$`,
          String.raw`ক্ষেত্রফল শতকরা $21$ ভাগ বৃদ্ধি পাবে।`,
        ],
        answer: String.raw`$21\%$`,
      },
    },
    // উদাহরণ ১৫ — book pages ২১৯-২২১.
    {
      id: 15,
      question: String.raw`একটি আয়তাকার জমির ক্ষেত্রফল $12$ হেক্টর এবং কর্ণের দৈর্ঘ্য $500$ মিটার। ঐ জমির দৈর্ঘ্য ও প্রস্থের সঙ্গে অপর একটি জমির দৈর্ঘ্য ও প্রস্থের অনুপাত যথাক্রমে $3:4$ এবং $2:3$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`প্রদত্ত আয়তাকার জমিটির ক্ষেত্রফল কত বর্গমিটার?`,
          solution: {
            steps: [
              String.raw`আমরা জানি, $1$ হেক্টর $=10{,}000$ বর্গমিটার।`,
              String.raw`$$\therefore\; 12\ \text{hectare}=12\times 10{,}000=120000$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $120000$ বর্গমিটার।`,
            ],
            answer: String.raw`$120000$ বর্গমিটার`,
          },
        },
        {
          label: "খ",
          question: String.raw`অপর জমিটির ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, প্রদত্ত জমির দৈর্ঘ্য $3x$ মিটার এবং প্রস্থ $2y$ মিটার।`,
              String.raw`সুতরাং অপর জমির দৈর্ঘ্য $4x$ মিটার এবং প্রস্থ $3y$ মিটার।`,
              String.raw`$$\therefore\;\text{1st area}=3x\cdot 2y=6xy$$`,
              String.raw`$$\text{2nd area}=4x\cdot 3y=12xy$$`,
              String.raw`প্রশ্নমতে,`,
              String.raw`$$6xy=120000$$`,
              String.raw`$$\therefore\; xy=20000$$`,
              String.raw`$$\therefore\;\text{2nd area}=12xy=12\times 20000=240000$$`,
              String.raw`নির্ণেয় ক্ষেত্রফল $240000$ বর্গমিটার।`,
            ],
            answer: String.raw`$240000$ বর্গমিটার`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রদত্ত জমিটির প্রস্থ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, প্রদত্ত জমির দৈর্ঘ্য $3x$ মিটার এবং প্রস্থ $2y$ মিটার।`,
              String.raw`সুতরাং জমিটির একটি কর্ণের দৈর্ঘ্য $\sqrt{(3x)^{2}+(2y)^{2}}$ মিটার।`,
              String.raw`(খ) থেকে পাই, $xy=20000$।`,
              String.raw`প্রশ্নমতে,`,
              String.raw`$$\sqrt{(3x)^{2}+(2y)^{2}}=500$$`,
              String.raw`$$\text{or, } 9x^{2}+4y^{2}=250000$$`,
              String.raw`$$\text{or, }(3x+2y)^{2}-2\cdot 3x\cdot 2y=250000$$`,
              String.raw`$$\text{or, }(3x+2y)^{2}-12xy=250000$$`,
              String.raw`$$\text{or, }(3x+2y)^{2}=250000+12\times 20000$$`,
              String.raw`$$\text{or, }(3x+2y)^{2}=490000$$`,
              String.raw`$$\text{or, } 3x+2y=700\qquad\cdots(1)$$`,
              String.raw`আবার,`,
              String.raw`$$(3x-2y)^{2}=(3x+2y)^{2}-4\cdot 3x\cdot 2y=(700)^{2}-24\times 20000$$`,
              String.raw`$$\text{or, }(3x-2y)^{2}=490000-480000=10000$$`,
              String.raw`$$\text{or, } 3x-2y=100\qquad\cdots(2)$$`,
              String.raw`$(1)$ থেকে $(2)$ বিয়োগ করে পাই,`,
              String.raw`$$4y=600$$`,
              String.raw`$$\therefore\; y=150$$`,
              String.raw`$$\therefore\;\text{width}=2y=2\times 150=300$$`,
              String.raw`প্রদত্ত জমিটির প্রস্থ $300$ মিটার।`,
            ],
            answer: String.raw`$300$ মিটার`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      question: String.raw`$a,\,b,\,c$ ক্রমিক সমানুপাতী হলে, নিচের কোনটি সঠিক?
ক) $a^{2}=bc$     খ) $b^{2}=ac$     গ) $ab=bc$     ঘ) $a=b=c$`,
      solution: {
        steps: [
          String.raw`$a,\,b,\,c$ ক্রমিক সমানুপাতী মানে $a:b=b:c$।`,
          String.raw`$$\text{or, }\frac{a}{b}=\frac{b}{c}$$`,
          String.raw`$$\therefore\; b^{2}=ac$$`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $b^{2}=ac$`,
      },
    },
    {
      id: 2,
      question: String.raw`আরিফ ও আকিবের বয়সের অনুপাত $5:3$; আরিফের বয়স $20$ বছর হলে, কত বছর পরে তাদের বয়সের অনুপাত $7:5$ হবে?
ক) $5$ বছর     খ) $6$ বছর     গ) $8$ বছর     ঘ) $10$ বছর`,
      solution: {
        steps: [
          String.raw`বয়সের অনুপাত $5:3$ এবং আরিফের বয়স $20$ বছর।`,
          String.raw`$$\therefore\;\text{Akib}=\frac{3}{5}\times 20=12$$`,
          String.raw`মনে করি, $x$ বছর পরে তাদের বয়সের অনুপাত $7:5$ হবে।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{20+x}{12+x}=\frac{7}{5}$$`,
          String.raw`$$\text{or, } 100+5x=84+7x$$`,
          String.raw`$$\text{or, } 2x=16$$`,
          String.raw`$$\therefore\; x=8$$`,
          String.raw`সুতরাং সঠিক উত্তর গ।`,
        ],
        answer: String.raw`গ) $8$ বছর`,
      },
    },
    {
      id: 3,
      question: String.raw`$x:y=7:5$, $y:z=5:7$ হলে, $x:z=$ কত?
ক) $35:49$     খ) $35:35$     গ) $25:49$     ঘ) $49:25$`,
      solution: {
        steps: [
          String.raw`এখানে প্রথম অনুপাতের উত্তর রাশি ও দ্বিতীয় অনুপাতের পূর্ব রাশি দুটিই $5$, তাই সরাসরি লেখা যায়,`,
          String.raw`$$x:y:z=7:5:7$$`,
          String.raw`$$\therefore\;\frac{x}{z}=\frac{x}{y}\times\frac{y}{z}=\frac{7}{5}\times\frac{5}{7}=1$$`,
          String.raw`$$\therefore\; x:z=7:7=35:35$$`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $35:35$`,
      },
    },
    {
      id: 4,
      question: String.raw`$x:y=2:1$ এবং $y:z=2:1$ হলে —
$(i)$ $x,\,y,\,z$ ক্রমিক সমানুপাতী
$(ii)$ $z:x=1:4$
$(iii)$ $y^{2}+zx=4yz$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$     খ) $i$ ও $iii$     গ) $ii$ ও $iii$     ঘ) $i$, $ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$x:y=2:1$ ও $y:z=2:1$ থেকে পাই $x:y:z=4:2:1$।`,
          String.raw`ধরি, $x=4k$, $y=2k$, $z=k$।`,
          String.raw`$(i)$ যাচাই:`,
          String.raw`$$\frac{x}{y}=\frac{4k}{2k}=2,\qquad\frac{y}{z}=\frac{2k}{k}=2$$`,
          String.raw`$$\therefore\;\frac{x}{y}=\frac{y}{z}$$`,
          String.raw`অর্থাৎ $x,\,y,\,z$ ক্রমিক সমানুপাতী — $(i)$ সঠিক।`,
          String.raw`$(ii)$ যাচাই:`,
          String.raw`$$z:x=k:4k=1:4$$`,
          String.raw`$(ii)$ সঠিক।`,
          String.raw`$(iii)$ যাচাই:`,
          String.raw`$$y^{2}+zx=(2k)^{2}+k\cdot 4k=4k^{2}+4k^{2}=8k^{2}$$`,
          String.raw`$$4yz=4\cdot 2k\cdot k=8k^{2}$$`,
          String.raw`$$\therefore\; y^{2}+zx=4yz$$`,
          String.raw`$(iii)$ও সঠিক। সুতরাং সঠিক উত্তর ঘ।`,
        ],
        answer: String.raw`ঘ) $i$, $ii$ ও $iii$`,
      },
    },
    {
      id: 5,
      question: String.raw`$\dfrac{a}{x}=\dfrac{m^{2}+n^{2}}{2mn}$ হলে, $\dfrac{\sqrt{a+x}}{\sqrt{a-x}}=$ কত?
ক) $\dfrac{m}{n}$     খ) $\dfrac{m+n}{m-n}$     গ) $\dfrac{m-n}{m+n}$     ঘ) $\dfrac{n}{m}$`,
      solution: {
        steps: [
          String.raw`দেওয়া আছে,`,
          String.raw`$$\frac{a}{x}=\frac{m^{2}+n^{2}}{2mn}$$`,
          String.raw`যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{a+x}{a-x}=\frac{m^{2}+n^{2}+2mn}{m^{2}+n^{2}-2mn}=\frac{(m+n)^{2}}{(m-n)^{2}}$$`,
          String.raw`$$\therefore\;\frac{\sqrt{a+x}}{\sqrt{a-x}}=\frac{m+n}{m-n}$$`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $\dfrac{m+n}{m-n}$`,
      },
    },
    {
      id: 6,
      question: String.raw`$1$ ঘন সে.মি. কাঠের ওজন $7$ ডেসিগ্রাম। কাঠের ওজন সমআয়তন পানির ওজনের শতকরা কত ভাগ?`,
      solution: {
        steps: [
          String.raw`আমরা জানি, $1$ ঘন সে.মি. পানির ওজন $1$ গ্রাম, অর্থাৎ $10$ ডেসিগ্রাম।`,
          String.raw`$$\therefore\;\text{ratio}=\frac{7}{10}$$`,
          String.raw`$$\therefore\;\frac{7}{10}\times 100\%=70\%$$`,
          String.raw`কাঠের ওজন সমআয়তন পানির ওজনের শতকরা $70$ ভাগ।`,
        ],
        answer: String.raw`$70\%$`,
      },
    },
    {
      id: 7,
      question: String.raw`ক, খ, গ, ঘ এর মধ্যে $300$ টাকা এমনভাবে ভাগ করে দাও যেন ক এর অংশ : খ এর অংশ $=2:3$, খ এর অংশ : গ এর অংশ $=1:2$ এবং গ এর অংশ : ঘ এর অংশ $=3:2$ হয়।`,
      solution: {
        steps: [
          String.raw`ক : খ $=2:3$`,
          String.raw`খ : গ $=1:2=3:6$`,
          String.raw`গ : ঘ $=3:2=6:4$`,
          String.raw`সুতরাং ক : খ : গ : ঘ $=2:3:6:4$।`,
          String.raw`$$\therefore\;\text{total parts}=2+3+6+4=15$$`,
          String.raw`$$\therefore\;\text{one part}=\frac{300}{15}=20$$`,
          String.raw`ক এর অংশ $=2\times 20=40$ টাকা`,
          String.raw`খ এর অংশ $=3\times 20=60$ টাকা`,
          String.raw`গ এর অংশ $=6\times 20=120$ টাকা`,
          String.raw`ঘ এর অংশ $=4\times 20=80$ টাকা`,
          String.raw`$$40+60+120+80=300$$`,
        ],
        answer: String.raw`ক $40$ টাকা, খ $60$ টাকা, গ $120$ টাকা, ঘ $80$ টাকা`,
      },
    },
    {
      id: 8,
      question: String.raw`তিনজন জেলে $690$টি মাছ ধরেছে। তাদের অংশের অনুপাত $\dfrac{2}{3}$, $\dfrac{4}{5}$ এবং $\dfrac{5}{6}$ হলে, কে কয়টি মাছ পেল?`,
      solution: {
        steps: [
          String.raw`$3$, $5$ ও $6$-এর ল.সা.গু. $30$; তাই ভগ্নাংশ তিনটিকে $30$ দিয়ে গুণ করে পূর্ণসংখ্যার অনুপাতে আনি।`,
          String.raw`$$\frac{2}{3}:\frac{4}{5}:\frac{5}{6}=\frac{2}{3}\times 30:\frac{4}{5}\times 30:\frac{5}{6}\times 30$$`,
          String.raw`$$=20:24:25$$`,
          String.raw`$$\therefore\;\text{total parts}=20+24+25=69$$`,
          String.raw`$$\therefore\;\text{one part}=\frac{690}{69}=10$$`,
          String.raw`$$\therefore\; 20\times 10=200,\qquad 24\times 10=240,\qquad 25\times 10=250$$`,
          String.raw`তিনজন জেলে যথাক্রমে $200$টি, $240$টি ও $250$টি মাছ পেল।`,
        ],
        answer: String.raw`$200$টি, $240$টি ও $250$টি`,
      },
    },
    {
      id: 9,
      question: String.raw`একটি ত্রিভুজের পরিসীমা $45$ সে.মি.। বাহুগুলোর দৈর্ঘ্যের অনুপাত $3:5:7$ হলে, প্রত্যেক বাহুর পরিমাণ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বাহু তিনটি যথাক্রমে $3x$, $5x$ ও $7x$ সে.মি.।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$3x+5x+7x=45$$`,
          String.raw`$$\text{or, } 15x=45$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$$\therefore\; 3x=9,\qquad 5x=15,\qquad 7x=21$$`,
          String.raw`নির্ণেয় বাহুগুলো $9$ সে.মি., $15$ সে.মি. ও $21$ সে.মি.।`,
        ],
        answer: String.raw`$9$ সে.মি., $15$ সে.মি. ও $21$ সে.মি.`,
      },
    },
    {
      id: 10,
      question: String.raw`ক্রিকেট খেলায় সাকিব, মুশফিকুর ও মাশরাফী $171$ রান করলো। সাকিব ও মুশফিকুরের এবং মুশফিকুর ও মাশরাফীর রানের অনুপাত $3:2$ হলে কে কত রান করেছে?`,
      solution: {
        steps: [
          String.raw`সাকিব : মুশফিকুর $=3:2=9:6$`,
          String.raw`মুশফিকুর : মাশরাফী $=3:2=6:4$`,
          String.raw`সুতরাং সাকিব : মুশফিকুর : মাশরাফী $=9:6:4$।`,
          String.raw`$$\therefore\;\text{total parts}=9+6+4=19$$`,
          String.raw`$$\therefore\;\text{one part}=\frac{171}{19}=9$$`,
          String.raw`$$\therefore\; 9\times 9=81,\qquad 6\times 9=54,\qquad 4\times 9=36$$`,
          String.raw`সাকিব $81$, মুশফিকুর $54$ এবং মাশরাফী $36$ রান করেছে।`,
        ],
        answer: String.raw`সাকিব $81$, মুশফিকুর $54$, মাশরাফী $36$ রান`,
      },
    },
    {
      id: 11,
      question: String.raw`একটি অফিসে $2$ জন কর্মকর্তা, $7$ জন অফিস সহকারী এবং $3$ জন অফিস সহায়ক আছে। একজন অফিস সহায়ক $1$ টাকা পেলে একজন অফিস সহকারী পায় $2$ টাকা, একজন কর্মকর্তা পায় $4$ টাকা। তাদের সকলের মোট বেতন $150{,}000$ টাকা হলে, কে কত বেতন পায়?`,
      solution: {
        steps: [
          String.raw`একজনের হিসাবে বেতনের অনুপাত — কর্মকর্তা : সহকারী : সহায়ক $=4:2:1$।`,
          String.raw`সুতরাং সব কর্মকর্তা মিলে $2\times 4=8$ ভাগ, সব সহকারী মিলে $7\times 2=14$ ভাগ এবং সব সহায়ক মিলে $3\times 1=3$ ভাগ পায়।`,
          String.raw`$$\therefore\;\text{total parts}=8+14+3=25$$`,
          String.raw`$$\therefore\;\text{one part}=\frac{150000}{25}=6000$$`,
          String.raw`কর্মকর্তাদের মোট বেতন $=8\times 6000=48000$ টাকা; একজন কর্মকর্তা পান $\dfrac{48000}{2}=24000$ টাকা।`,
          String.raw`সহকারীদের মোট বেতন $=14\times 6000=84000$ টাকা; একজন সহকারী পান $\dfrac{84000}{7}=12000$ টাকা।`,
          String.raw`সহায়কদের মোট বেতন $=3\times 6000=18000$ টাকা; একজন সহায়ক পান $\dfrac{18000}{3}=6000$ টাকা।`,
          String.raw`$$48000+84000+18000=150000$$`,
        ],
        answer: String.raw`কর্মকর্তা $24000$, সহকারী $12000$ ও সহায়ক $6000$ টাকা করে`,
      },
    },
    {
      id: 12,
      question: String.raw`যদি কোনো বর্গক্ষেত্রের বাহুর পরিমাণ $20\%$ বৃদ্ধি পায়, তবে তার ক্ষেত্রফল শতকরা কত বৃদ্ধি পাবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্গক্ষেত্রের বাহুর দৈর্ঘ্য $a$ একক; সুতরাং ক্ষেত্রফল $a^{2}$ বর্গএকক।`,
          String.raw`$20\%$ বৃদ্ধি পেলে বাহুর দৈর্ঘ্য হয় $1.20a$ একক।`,
          String.raw`$$\therefore\;\text{new area}=(1.20a)^{2}=1.44a^{2}$$`,
          String.raw`$$\therefore\;\text{increase}=1.44a^{2}-a^{2}=0.44a^{2}$$`,
          String.raw`$$\therefore\;\frac{0.44a^{2}}{a^{2}}\times 100\%=44\%$$`,
          String.raw`ক্ষেত্রফল শতকরা $44$ ভাগ বৃদ্ধি পাবে।`,
        ],
        answer: String.raw`$44\%$ বৃদ্ধি`,
      },
    },
    {
      id: 13,
      question: String.raw`একটি আয়তক্ষেত্রের দৈর্ঘ্য $10\%$ বৃদ্ধি এবং প্রস্থ $10\%$ হ্রাস পেলে আয়তক্ষেত্রের ক্ষেত্রফল শতকরা কত বৃদ্ধি বা হ্রাস পাবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, আয়তক্ষেত্রের দৈর্ঘ্য $a$ ও প্রস্থ $b$ একক; সুতরাং ক্ষেত্রফল $ab$ বর্গএকক।`,
          String.raw`দৈর্ঘ্য $10\%$ বেড়ে হয় $1.10a$ এবং প্রস্থ $10\%$ কমে হয় $0.90b$।`,
          String.raw`$$\therefore\;\text{new area}=1.10a\times 0.90b=0.99ab$$`,
          String.raw`$$\therefore\;\text{change}=0.99ab-ab=-0.01ab$$`,
          String.raw`$$\therefore\;\frac{0.01ab}{ab}\times 100\%=1\%$$`,
          String.raw`ক্ষেত্রফল শতকরা $1$ ভাগ হ্রাস পাবে।`,
        ],
        answer: String.raw`$1\%$ হ্রাস`,
      },
    },
    {
      id: 14,
      question: String.raw`একটি মাঠের জমিতে সেচের সুযোগ আসার আগের ও পরের ফলনের অনুপাত $4:7$। ঐ মাঠে যে জমিতে আগে $304$ কুইন্টাল ধান ফলতো, সেচ পাওয়ার পরে তার ফলন কত হবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, সেচ পাওয়ার পরে ফলন $x$ কুইন্টাল।`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$\frac{304}{x}=\frac{4}{7}$$`,
          String.raw`$$\text{or, } 4x=304\times 7$$`,
          String.raw`$$\text{or, } x=\frac{2128}{4}$$`,
          String.raw`$$\therefore\; x=532$$`,
          String.raw`সেচ পাওয়ার পরে ফলন হবে $532$ কুইন্টাল।`,
        ],
        answer: String.raw`$532$ কুইন্টাল`,
      },
    },
    {
      id: 15,
      question: String.raw`ধান ও ধান থেকে উৎপন্ন চালের অনুপাত $3:2$ এবং গম ও গম থেকে উৎপন্ন সুজির অনুপাত $4:3$ হলে, সমান পরিমাণের ধান ও গম থেকে উৎপন্ন চাল ও সুজির অনুপাত বের করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ধান ও গম প্রত্যেকটি $12$ একক (এখানে $3$ ও $4$-এর ল.সা.গু. $12$ নিলে হিসাব সহজ হয়)।`,
          String.raw`$$\therefore\;\text{rice}=\frac{2}{3}\times 12=8$$`,
          String.raw`$$\therefore\;\text{suji}=\frac{3}{4}\times 12=9$$`,
          String.raw`$$\therefore\;\text{ratio}=8:9$$`,
          String.raw`নির্ণেয় অনুপাত $8:9$।`,
        ],
        answer: String.raw`$8:9$`,
      },
    },
    {
      id: 16,
      question: String.raw`একটি জমির ক্ষেত্রফল $432$ বর্গমিটার। ঐ জমির দৈর্ঘ্য ও প্রস্থের সঙ্গে অপর একটি জমির দৈর্ঘ্য ও প্রস্থের অনুপাত যথাক্রমে $3:4$ এবং $2:5$ হলে, অপর জমির ক্ষেত্রফল কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, প্রদত্ত জমির দৈর্ঘ্য $3x$ মিটার এবং প্রস্থ $2y$ মিটার।`,
          String.raw`সুতরাং অপর জমির দৈর্ঘ্য $4x$ মিটার এবং প্রস্থ $5y$ মিটার।`,
          String.raw`$$\therefore\;\text{1st area}=3x\cdot 2y=6xy$$`,
          String.raw`$$\text{2nd area}=4x\cdot 5y=20xy$$`,
          String.raw`প্রশ্নানুসারে,`,
          String.raw`$$6xy=432$$`,
          String.raw`$$\therefore\; xy=72$$`,
          String.raw`$$\therefore\;\text{2nd area}=20\times 72=1440$$`,
          String.raw`অপর জমির ক্ষেত্রফল $1440$ বর্গমিটার।`,
        ],
        answer: String.raw`$1440$ বর্গমিটার`,
      },
    },
    {
      id: 17,
      question: String.raw`জেমি ও সিমি একই ব্যাংক থেকে একই দিনে $10\%$ সরল মুনাফায় আলাদা আলাদা পরিমাণ অর্থ ঋণ নেয়। জেমি $2$ বছর পর মুনাফা-আসলে যত টাকা শোধ করে, $3$ বছর পর সিমি মুনাফা-আসলে তত টাকা শোধ করে। তাদের ঋণের অনুপাত নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, জেমির ঋণ $P_{1}$ টাকা এবং সিমির ঋণ $P_{2}$ টাকা।`,
          String.raw`$$\text{Jemi's amount}=P_{1}\left(1+\frac{10\times 2}{100}\right)=P_{1}\times\frac{120}{100}$$`,
          String.raw`$$\text{Simi's amount}=P_{2}\left(1+\frac{10\times 3}{100}\right)=P_{2}\times\frac{130}{100}$$`,
          String.raw`প্রশ্নানুসারে দুইটি মুনাফা-আসল সমান,`,
          String.raw`$$\frac{120P_{1}}{100}=\frac{130P_{2}}{100}$$`,
          String.raw`$$\text{or, } 120P_{1}=130P_{2}$$`,
          String.raw`$$\therefore\;\frac{P_{1}}{P_{2}}=\frac{130}{120}=\frac{13}{12}$$`,
          String.raw`নির্ণেয় অনুপাত $13:12$।`,
        ],
        answer: String.raw`$13:12$`,
      },
    },
    {
      id: 18,
      question: String.raw`একটি আয়তাকার ঘনবস্তুর দৈর্ঘ্য, প্রস্থ ও উচ্চতা যথাক্রমে $x$, $y$ ও $z$ $(x>y>z)$ এবং $$\frac{y^{2}+z^{2}}{(y+z)^{2}}=\frac{x^{2}+y^{2}}{(x+y)^{2}}$$ ঘনবস্তুটির উচ্চতা $10\%$ হ্রাস করা হলো।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$10\%$ লাভে কোনো দ্রব্যের বিক্রয়মূল্য ও ক্রয়মূল্যের অনুপাত নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, দ্রব্যটির ক্রয়মূল্য $100$ টাকা।`,
              String.raw`$10\%$ লাভ হলে বিক্রয়মূল্য $=(100+10)=110$ টাকা।`,
              String.raw`$$\therefore\;\text{ratio}=\frac{110}{100}=\frac{11}{10}$$`,
              String.raw`নির্ণেয় অনুপাত $11:10$।`,
            ],
            answer: String.raw`$11:10$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $y^{2}=zx$।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে,`,
              String.raw`$$\frac{y^{2}+z^{2}}{(y+z)^{2}}=\frac{x^{2}+y^{2}}{(x+y)^{2}}$$`,
              String.raw`$$\text{or, }\frac{x^{2}+y^{2}}{y^{2}+z^{2}}=\frac{(x+y)^{2}}{(y+z)^{2}}$$`,
              String.raw`$$\text{or, }\left(x^{2}+y^{2}\right)(y+z)^{2}=\left(y^{2}+z^{2}\right)(x+y)^{2}$$`,
              String.raw`$$\text{or, }\left(x^{2}+y^{2}\right)\left(y^{2}+2yz+z^{2}\right)=\left(y^{2}+z^{2}\right)\left(x^{2}+2xy+y^{2}\right)$$`,
              String.raw`$$\text{or, } x^{2}y^{2}+2x^{2}yz+x^{2}z^{2}+y^{4}+2y^{3}z+y^{2}z^{2}$$`,
              String.raw`$$\qquad=x^{2}y^{2}+2xy^{3}+y^{4}+x^{2}z^{2}+2xyz^{2}+y^{2}z^{2}$$`,
              String.raw`$$\text{or, } 2x^{2}yz+2y^{3}z=2xy^{3}+2xyz^{2}$$`,
              String.raw`$$\text{or, } x^{2}z+y^{2}z=xy^{2}+xz^{2}\qquad\left[\,\div\,2y\,\right]$$`,
              String.raw`$$\text{or, } x^{2}z-xz^{2}-xy^{2}+y^{2}z=0$$`,
              String.raw`$$\text{or, } xz(x-z)-y^{2}(x-z)=0$$`,
              String.raw`$$\text{or, }(x-z)\left(xz-y^{2}\right)=0$$`,
              String.raw`$x>y>z$ হওয়ায় $x-z\neq 0$।`,
              String.raw`$$\therefore\; xz-y^{2}=0$$`,
              String.raw`$$\therefore\; y^{2}=zx$$`,
            ],
            answer: String.raw`$y^{2}=zx$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`ঘনবস্তুটির আয়তন শতকরা কী পরিমাণ হ্রাস পাবে তা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`আয়তাকার ঘনবস্তুটির আয়তন $=$ দৈর্ঘ্য $\times$ প্রস্থ $\times$ উচ্চতা।`,
              String.raw`$$\therefore\; V=xyz$$`,
              String.raw`উচ্চতা $10\%$ হ্রাস পেলে নতুন উচ্চতা $=z-\dfrac{10z}{100}=0.90z$; দৈর্ঘ্য ও প্রস্থ অপরিবর্তিত।`,
              String.raw`$$\therefore\; V'=xy\times 0.90z=0.90xyz$$`,
              String.raw`$$\therefore\;\text{decrease}=xyz-0.90xyz=0.10xyz$$`,
              String.raw`$$\therefore\;\frac{0.10xyz}{xyz}\times 100\%=10\%$$`,
              String.raw`ঘনবস্তুটির আয়তন শতকরা $10$ ভাগ হ্রাস পাবে।`,
            ],
            answer: String.raw`$10\%$ হ্রাস`,
          },
        },
      ],
    },
    // ─────────────── নমুনা প্রশ্ন — book pages ২২২-২২৩ ───────────────
    {
      id: 19,
      group: SAMPLE_MCQ,
      question: String.raw`একটি বর্গের বাহুর দৈর্ঘ্য দ্বিগুণ হলে তার ক্ষেত্রফল কতগুণ বৃদ্ধি পাবে?
ক) $2$ গুণ    খ) $3$ গুণ    গ) $4$ গুণ    ঘ) $6$ গুণ`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্গের বাহুর দৈর্ঘ্য $a$ একক; সুতরাং ক্ষেত্রফল $a^{2}$ বর্গএকক।`,
          String.raw`বাহু দ্বিগুণ হলে নতুন বাহু $2a$ একক।`,
          String.raw`$$\therefore\;\text{new area}=(2a)^{2}=4a^{2}$$`,
          String.raw`$$\therefore\;\text{increase}=4a^{2}-a^{2}=3a^{2}$$`,
          String.raw`$$\therefore\;\frac{3a^{2}}{a^{2}}=3$$`,
          String.raw`ক্ষেত্রফল $4$ গুণ হয়, অর্থাৎ বৃদ্ধি পায় $3$ গুণ। সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $3$ গুণ (ক্ষেত্রফল হয় $4$ গুণ)`,
      },
    },
    {
      id: 20,
      group: SAMPLE_MCQ,
      question: String.raw`$b,\,a,\,c$ ক্রমিক সমানুপাতী হলে —
$(i)$ $a^{2}=bc$
$(ii)$ $\dfrac{b}{a}=\dfrac{c}{a}$
$(iii)$ $\dfrac{a+b}{a-b}=\dfrac{c+a}{c-a}$
নিচের কোনটি সঠিক?
ক) $i$    খ) $i$ ও $ii$    গ) $i$ ও $iii$    ঘ) $i$, $ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$b,\,a,\,c$ ক্রমিক সমানুপাতী মানে $b:a=a:c$, অর্থাৎ $\dfrac{b}{a}=\dfrac{a}{c}$।`,
          String.raw`$$\therefore\; a^{2}=bc$$`,
          String.raw`সুতরাং $(i)$ সঠিক।`,
          String.raw`$(ii)$ যাচাই: $\dfrac{b}{a}=\dfrac{c}{a}$ হলে $b=c$ হতো, যা সাধারণভাবে সত্য নয়।`,
          String.raw`সুতরাং $(ii)$ সঠিক নয়।`,
          String.raw`$(iii)$ যাচাই: $\dfrac{b}{a}=\dfrac{a}{c}$-এ যোজন-বিয়োজন করে পাই,`,
          String.raw`$$\frac{b+a}{b-a}=\frac{a+c}{a-c}$$`,
          String.raw`উভয় পক্ষের লব ও হরের চিহ্ন উল্টে দিলে,`,
          String.raw`$$\frac{a+b}{a-b}=\frac{c+a}{c-a}$$`,
          String.raw`সুতরাং $(iii)$ সঠিক। অর্থাৎ $i$ ও $iii$ সঠিক — উত্তর গ।`,
        ],
        answer: String.raw`গ) $i$ ও $iii$`,
      },
    },
    {
      id: 21,
      group: SAMPLE_MCQ,
      question: String.raw`একটি ত্রিভুজের তিনটি বাহুর অনুপাত $3:4:5$ এবং এর পরিসীমা $36$ সে.মি.।
ত্রিভুজটির বৃহত্তম ও ক্ষুদ্রতম বাহুর দৈর্ঘ্যের বিয়োগফল কত একক?
ক) $9$    খ) $6$    গ) $5$    ঘ) $2$`,
      solution: {
        steps: [
          String.raw`মনে করি, বাহু তিনটি যথাক্রমে $3x$, $4x$ ও $5x$ সে.মি.।`,
          String.raw`$$3x+4x+5x=36$$`,
          String.raw`$$\text{or, } 12x=36$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$$\therefore\; 3x=9,\qquad 4x=12,\qquad 5x=15$$`,
          String.raw`$$\therefore\;\text{difference}=15-9=6$$`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $6$`,
      },
    },
    {
      id: 22,
      group: SAMPLE_MCQ,
      question: String.raw`একটি ত্রিভুজের তিনটি বাহুর অনুপাত $3:4:5$ এবং এর পরিসীমা $36$ সে.মি.।
ত্রিভুজটির ক্ষেত্রফল কত বর্গ সে.মি.?
ক) $6$    খ) $54$    গ) $67$    ঘ) $90$`,
      solution: {
        steps: [
          String.raw`পূর্বের প্রশ্নের মতো বাহু তিনটি $9$, $12$ ও $15$ সে.মি.।`,
          String.raw`$$9^{2}+12^{2}=81+144=225=15^{2}$$`,
          String.raw`সুতরাং ত্রিভুজটি সমকোণী, যার সমকোণ সংলগ্ন বাহু $9$ ও $12$ সে.মি.।`,
          String.raw`$$\therefore\;\text{area}=\frac{1}{2}\times 9\times 12=54$$`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) $54$ বর্গ সে.মি.`,
      },
    },
    {
      id: 23,
      group: SAMPLE_CREATIVE,
      question: String.raw`দৃশ্যকল্প ১: একদিন কোনো শ্রেণিতে অনুপস্থিত ও উপস্থিত শিক্ষার্থীদের সংখ্যার অনুপাত $1:4$। ওই দিন আরও $5$ জন শিক্ষার্থী বেশি উপস্থিত থাকলে অনুপস্থিত ও উপস্থিত শিক্ষার্থীদের সংখ্যার অনুপাত হতো $1:9$।
দৃশ্যকল্প ২: একটি আয়তাকার জমির ক্ষেত্রফল $336$ বর্গ একক। জমিটির দৈর্ঘ্য ও প্রস্থের সাথে অপর একটি আয়তাকার জমির দৈর্ঘ্য ও প্রস্থের অনুপাত যথাক্রমে $2:3$ এবং $4:5$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`একটি দ্রব্য $400$ টাকায় ক্রয় করে $10\%$ ক্ষতিতে বিক্রয় করলে বিক্রয়মূল্য ও ক্রয়মূল্যের অনুপাত নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`ক্রয়মূল্য $400$ টাকা এবং ক্ষতি $10\%$।`,
              String.raw`$$\therefore\;\text{loss}=\frac{10}{100}\times 400=40$$`,
              String.raw`$$\therefore\;\text{SP}=400-40=360$$`,
              String.raw`$$\therefore\;\text{ratio}=\frac{360}{400}=\frac{9}{10}$$`,
              String.raw`নির্ণেয় অনুপাত $9:10$।`,
            ],
            answer: String.raw`$9:10$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দৃশ্যকল্প ১-এ উল্লিখিত শ্রেণির শিক্ষার্থী সংখ্যা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, অনুপস্থিত শিক্ষার্থী $x$ জন; তাহলে উপস্থিত শিক্ষার্থী $4x$ জন।`,
              String.raw`$$\therefore\;\text{total}=x+4x=5x$$`,
              String.raw`আরও $5$ জন উপস্থিত থাকলে উপস্থিত হতো $(4x+5)$ জন এবং অনুপস্থিত হতো $(x-5)$ জন।`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$\frac{x-5}{4x+5}=\frac{1}{9}$$`,
              String.raw`$$\text{or, } 9x-45=4x+5$$`,
              String.raw`$$\text{or, } 5x=50$$`,
              String.raw`$$\therefore\; x=10$$`,
              String.raw`$$\therefore\;\text{total}=5x=5\times 10=50$$`,
              String.raw`শ্রেণিতে মোট শিক্ষার্থী $50$ জন।`,
            ],
            answer: String.raw`$50$ জন`,
          },
        },
        {
          label: "গ",
          question: String.raw`দৃশ্যকল্প ২-এ উল্লিখিত ২য় জমিটির ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, ১ম জমির দৈর্ঘ্য $2a$ একক এবং প্রস্থ $4b$ একক।`,
              String.raw`সুতরাং ২য় জমির দৈর্ঘ্য $3a$ একক এবং প্রস্থ $5b$ একক।`,
              String.raw`$$\therefore\;\text{1st area}=2a\times 4b=8ab$$`,
              String.raw`$$\text{2nd area}=3a\times 5b=15ab$$`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$8ab=336$$`,
              String.raw`$$\therefore\; ab=42$$`,
              String.raw`$$\therefore\;\text{2nd area}=15\times 42=630$$`,
              String.raw`২য় জমিটির ক্ষেত্রফল $630$ বর্গ একক।`,
            ],
            answer: String.raw`$630$ বর্গ একক`,
          },
        },
      ],
    },
    {
      id: 24,
      group: SAMPLE_SHORT,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন।`,
      parts: [
        {
          label: "ক",
          question: String.raw`দুইটি সংখ্যার অনুপাত $5:7$ এবং এদের গ.সা.গু. $4$ হলে, সংখ্যা দুইটির ল.সা.গু. কত?`,
          solution: {
            steps: [
              String.raw`গ.সা.গু. $4$ হওয়ায় সংখ্যা দুইটি $5\times 4=20$ এবং $7\times 4=28$।`,
              String.raw`$5$ ও $7$ পরস্পর সহমৌলিক, তাই`,
              String.raw`$$\text{L.C.M.}=5\times 7\times 4=140$$`,
              String.raw`নির্ণেয় ল.সা.গু. $140$।`,
            ],
            answer: String.raw`$140$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\dfrac{x^{2}+y^{2}}{y^{2}+z^{2}}=\dfrac{x}{z}$ এবং $z\neq x$ হলে, দেখাও যে, $x,\,y$ ও $z$ ক্রমিক সমানুপাতী।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে,`,
              String.raw`$$\frac{x^{2}+y^{2}}{y^{2}+z^{2}}=\frac{x}{z}$$`,
              String.raw`$$\text{or, } z\left(x^{2}+y^{2}\right)=x\left(y^{2}+z^{2}\right)$$`,
              String.raw`$$\text{or, } x^{2}z+y^{2}z=xy^{2}+xz^{2}$$`,
              String.raw`$$\text{or, } x^{2}z-xz^{2}=xy^{2}-y^{2}z$$`,
              String.raw`$$\text{or, } xz(x-z)=y^{2}(x-z)$$`,
              String.raw`$z\neq x$, তাই উভয় পক্ষকে $(x-z)$ দ্বারা ভাগ করা যায়।`,
              String.raw`$$\therefore\; y^{2}=xz$$`,
              String.raw`সুতরাং $x,\,y$ ও $z$ ক্রমিক সমানুপাতী।`,
            ],
            answer: String.raw`$y^{2}=xz$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`এক ঘন সে.মি. কাঠের ভর $700$ মিলিগ্রাম হলে, সমআয়তনের কাঠের ভর ও পানির ভরের অনুপাত নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`আমরা জানি, এক ঘন সে.মি. পানির ভর $1$ গ্রাম, অর্থাৎ $1000$ মিলিগ্রাম।`,
              String.raw`$$\therefore\;\text{ratio}=\frac{700}{1000}=\frac{7}{10}$$`,
              String.raw`নির্ণেয় অনুপাত $7:10$।`,
            ],
            answer: String.raw`$7:10$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$x:y=3:4$ এবং $y:z=2:3$ হলে, দেখাও যে, $\dfrac{x}{3}=\dfrac{y}{4}=\dfrac{z}{6}$।`,
          solution: {
            steps: [
              String.raw`$x:y=3:4$`,
              String.raw`$y:z=2:3=4:6$`,
              String.raw`সুতরাং $x:y:z=3:4:6$।`,
              String.raw`ধরি, $x=3k$, $y=4k$, $z=6k$।`,
              String.raw`$$\therefore\;\frac{x}{3}=k,\qquad\frac{y}{4}=k,\qquad\frac{z}{6}=k$$`,
              String.raw`$$\therefore\;\frac{x}{3}=\frac{y}{4}=\frac{z}{6}$$`,
            ],
            answer: String.raw`দেখানো হলো`,
          },
        },
      ],
    },
  ],
};

// অনুশীলনী ৫.১ — book pages ৯৯-১০১. The book groups the problems under three
// instruction lines, so those are the headings used below.
const EQ_SOLVE = "সমাধান করো (১ – ৮)";
const EQ_SET = "সমাধান সেট নির্ণয় করো (৯ – ১৪)";
const EQ_FORM = "সমীকরণ গঠন করে সমাধান করো (১৫ – ২৪)";

const exercise51: Exercise = {
  id: "5.1",
  bnId: "অনুশীলনী ৫.১",
  title: "একঘাত সমীকরণ",
  bookPages: "৯৯ – ১০১",
  formulas: [
    {
      title: "সমীকরণ, অভেদ ও ঘাত",
      formulas: [
        {
          statement: String.raw`$$ax+b=0\qquad(a\neq 0)$$`,
          note: String.raw`এক চলকবিশিষ্ট একঘাত সমীকরণের আদর্শ রূপ। চলকের সর্বোচ্চ ঘাতই সমীকরণের ঘাত, তাই এর ঘাত $1$ এবং মূলও একটিই।`,
        },
        {
          statement: String.raw`$$(x+1)^{2}-(x-1)^{2}=4x$$`,
          note: String.raw`এটি অভেদ — $x$-এর সব মানের জন্যই সত্য। সমীকরণ কেবল কয়েকটি নির্দিষ্ট মানের জন্য সত্য হয়; এখানেই দুইয়ের পার্থক্য। প্রত্যেক বীজগাণিতিক সূত্রই একেকটি অভেদ।`,
        },
        {
          statement: String.raw`$$S=\{\,\alpha\,\}$$`,
          note: String.raw`সমাধান সেট — মূলগুলোকে সেট আকারে লেখা। যে মান হরকে শূন্য করে দেয় সেটি মূল হিসেবে গ্রহণযোগ্য নয়; সব মান বাদ পড়লে $S=\emptyset$।`,
        },
      ],
    },
    {
      title: "সমাধানের চারটি নিয়ম",
      formulas: [
        {
          statement: String.raw`$$x=a\;\Rightarrow\;x+c=a+c,\qquad x-c=a-c$$`,
          note: "উভয় পক্ষে একই রাশি যোগ বা বিয়োগ করলে পক্ষদ্বয় সমান থাকে।",
        },
        {
          statement: String.raw`$$x=a\;\Rightarrow\;xc=ac,\qquad \frac{x}{c}=\frac{a}{c}\;(c\neq 0)$$`,
          note: "উভয় পক্ষকে একই অশূন্য রাশি দিয়ে গুণ বা ভাগ করলেও পক্ষদ্বয় সমান থাকে।",
        },
        {
          statement: String.raw`$$a=b+c\;\Rightarrow\;a-b=c$$`,
          note: "পক্ষান্তর বিধি — কোনো পদ এক পক্ষ থেকে অন্য পক্ষে গেলে তার চিহ্ন বদলে যায়। উপরের নিয়ম দুইটির সংক্ষিপ্ত রূপ এটিই, আর সমাধানের বেশির ভাগ ধাপ এই একটি বিধিতেই চলে।",
        },
      ],
    },
    {
      title: "ভগ্নাংশ সমীকরণে যে কৌশলগুলো লাগে",
      formulas: [
        {
          statement: String.raw`$$\frac{p}{q}=\frac{r}{s}\;\Rightarrow\;ps=qr$$`,
          note: "আড়গুণন। দুই পক্ষেই একটি করে ভগ্নাংশ থাকলে এক ধাপেই হর সরে যায়।",
        },
        {
          statement: String.raw`$$\frac{p}{q}=\frac{p}{r},\;q\neq r\;\Rightarrow\;p=0$$`,
          note: String.raw`দুই পক্ষের লব সমান অথচ হর অসমান — তখন লবটি শূন্য হওয়া ছাড়া উপায় নেই। $\frac{1}{x+1}+\frac{1}{x+4}=\frac{1}{x+2}+\frac{1}{x+3}$ ধরনের সমীকরণে সোজা এই কথাটিই খাটানো হয়।`,
        },
        {
          statement: String.raw`$$\frac{x-a}{b}-1=\frac{x-a-b}{b}$$`,
          note: String.raw`প্রতি পদ থেকে উপযুক্ত সংখ্যা বাদ দিয়ে (এবং সমতা রাখতে অন্য পদে তা ফিরিয়ে দিয়ে) সব পদে একই উৎপাদক আনা যায়; তখন সেই উৎপাদককেই শূন্য ধরে সমাধান মেলে।`,
        },
      ],
    },
    {
      title: "বাস্তব সমস্যায় সমীকরণ গঠন",
      formulas: [
        {
          statement: String.raw`$$\text{সংখ্যাটি}=10x+y,\qquad \text{স্থান বিনিময়ে}=10y+x$$`,
          note: String.raw`দুই অঙ্কবিশিষ্ট সংখ্যার দশক স্থানীয় অঙ্ক $x$ ও একক স্থানীয় অঙ্ক $y$ হলে। অঙ্কদ্বয়ের সমষ্টি দেওয়া থাকলে একটিকে $x$ ধরে অন্যটিকে $(\text{সমষ্টি}-x)$ লিখে নিলে চলক একটিই থাকে।`,
        },
        {
          statement: String.raw`$$\text{সময়}=\frac{\text{দূরত্ব}}{\text{বেগ}}$$`,
          note: "গতিবিষয়ক সমস্যায় শর্তটি প্রায় সবসময় সময়ের উপর দেওয়া থাকে, তাই দূরত্বকে চলক ধরে সময়গুলো লিখে যোগ করাই সহজ পথ।",
        },
        {
          statement: String.raw`$$\text{মুনাফা}=\frac{\text{মূলধন}\times\text{মুনাফার হার}\times\text{সময়}}{100}$$`,
          note: String.raw`দুই ভিন্ন হারে বিনিয়োগ থাকলে একটি অংশকে $x$ ধরে অন্যটিকে $(\text{মোট}-x)$ লিখলে এক চলকেই সমীকরণ দাঁড়িয়ে যায়।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ৯৬.
    {
      id: 1,
      question: String.raw`সমাধান করো: $$\frac{5x}{7}-\frac{4}{5}=\frac{x}{5}-\frac{2}{7}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{5x}{7}-\frac{4}{5}=\frac{x}{5}-\frac{2}{7}$$`,
          String.raw`$$\text{or, }\frac{5x}{7}-\frac{x}{5}=\frac{4}{5}-\frac{2}{7}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }\frac{25x-7x}{35}=\frac{28-10}{35}$$`,
          String.raw`$$\text{or, }\frac{18x}{35}=\frac{18}{35}$$`,
          String.raw`$$\text{or, }18x=18$$`,
          String.raw`$$\therefore\; x=1$$`,
        ],
        answer: String.raw`$x=1$`,
      },
    },
    // উদাহরণ ২ — book page ৯৬.
    {
      id: 2,
      question: String.raw`সমাধান করো: $$(y-1)(y+2)=(y+4)(y-2)$$`,
      solution: {
        steps: [
          String.raw`$$(y-1)(y+2)=(y+4)(y-2)$$`,
          String.raw`$$\text{or, }y^{2}-y+2y-2=y^{2}+4y-2y-8$$`,
          String.raw`$$\text{or, }y-2=2y-8\qquad\left[\,y^{2}\ \text{উভয় পক্ষ থেকে কাটা গেল}\,\right]$$`,
          String.raw`$$\text{or, }y-2y=-8+2$$`,
          String.raw`$$\text{or, }-y=-6$$`,
          String.raw`$$\therefore\; y=6$$`,
        ],
        answer: String.raw`$y=6$`,
      },
    },
    // উদাহরণ ৩ — book pages ৯৬-৯৭.
    {
      id: 3,
      question: String.raw`সমাধান করো ও সমাধান সেট লিখ: $$\frac{6x+1}{15}-\frac{2x-4}{7x-1}=\frac{2x-1}{5}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{6x+1}{15}-\frac{2x-4}{7x-1}=\frac{2x-1}{5}$$`,
          String.raw`$$\text{or, }\frac{6x+1}{15}-\frac{2x-1}{5}=\frac{2x-4}{7x-1}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }\frac{6x+1-3(2x-1)}{15}=\frac{2x-4}{7x-1}$$`,
          String.raw`$$\text{or, }\frac{6x+1-6x+3}{15}=\frac{2x-4}{7x-1}$$`,
          String.raw`$$\text{or, }\frac{4}{15}=\frac{2x-4}{7x-1}$$`,
          String.raw`$$\text{or, }15(2x-4)=4(7x-1)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }30x-60=28x-4$$`,
          String.raw`$$\text{or, }30x-28x=60-4$$`,
          String.raw`$$\text{or, }2x=56$$`,
          String.raw`$$\therefore\; x=28$$`,
        ],
        answer: String.raw`$x=28$, সমাধান সেট $S=\{28\}$`,
      },
    },
    // উদাহরণ ৪ — book page ৯৭.
    {
      id: 4,
      question: String.raw`সমাধান করো: $$\frac{1}{x-3}+\frac{1}{x-4}=\frac{1}{x-2}+\frac{1}{x-5}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1}{x-3}+\frac{1}{x-4}=\frac{1}{x-2}+\frac{1}{x-5}$$`,
          String.raw`$$\text{or, }\frac{x-4+x-3}{(x-3)(x-4)}=\frac{x-5+x-2}{(x-2)(x-5)}$$`,
          String.raw`$$\text{or, }\frac{2x-7}{x^{2}-7x+12}=\frac{2x-7}{x^{2}-7x+10}$$`,
          String.raw`দুই পক্ষের লব সমান, কিন্তু হর অসমান। এক্ষেত্রে লবের মান একমাত্র শূন্য হলেই দুই পক্ষ সমান হবে।`,
          String.raw`$$\therefore\; 2x-7=0$$`,
          String.raw`$$\text{or, }2x=7$$`,
          String.raw`$$\therefore\; x=\frac{7}{2}$$`,
        ],
        answer: String.raw`$x=\dfrac{7}{2}$`,
      },
    },
    // উদাহরণ ৫ — book page ৯৮.
    {
      id: 5,
      question: String.raw`দুই অঙ্কবিশিষ্ট কোনো সংখ্যার একক স্থানীয় অঙ্কটি দশক স্থানীয় অঙ্ক অপেক্ষা $2$ বেশি। অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যাবে তা প্রদত্ত সংখ্যার দ্বিগুণ অপেক্ষা $6$ কম হবে। সংখ্যাটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, দশক স্থানীয় অঙ্কটি $x$; অতএব একক স্থানীয় অঙ্কটি হবে $x+2$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10x+(x+2)=11x+2$$`,
          String.raw`$$\text{স্থান বিনিময়ে সংখ্যাটি}=10(x+2)+x=11x+20$$`,
          String.raw`$$\text{প্রশ্নমতে, }11x+20=2(11x+2)-6$$`,
          String.raw`$$\text{or, }11x+20=22x+4-6$$`,
          String.raw`$$\text{or, }22x-11x=20+6-4\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }11x=22$$`,
          String.raw`$$\therefore\; x=2$$`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=11x+2=11\times 2+2=24$$`,
        ],
        answer: String.raw`প্রদত্ত সংখ্যাটি $24$`,
      },
    },
    // উদাহরণ ৬ — book page ৯৮.
    {
      id: 6,
      question: String.raw`একটি শ্রেণির প্রতি বেঞ্চে $4$ জন করে ছাত্র বসালে $3$টি বেঞ্চ খালি থাকে। আবার, প্রতি বেঞ্চে $3$ জন করে ছাত্র বসালে $6$ জন ছাত্রকে দাঁড়িয়ে থাকতে হয়। ঐ শ্রেণির ছাত্র সংখ্যা কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, শ্রেণিটির ছাত্র সংখ্যা $x$।`,
          String.raw`যেহেতু প্রতি বেঞ্চে $4$ জন করে বসালে $3$টি বেঞ্চ খালি থাকে, সেহেতু বেঞ্চের সংখ্যা $$=\frac{x}{4}+3$$`,
          String.raw`আবার, যেহেতু প্রতি বেঞ্চে $3$ জন করে বসালে $6$ জনকে দাঁড়িয়ে থাকতে হয়, সেহেতু বেঞ্চের সংখ্যা $$=\frac{x-6}{3}$$`,
          String.raw`যেহেতু শ্রেণির বেঞ্চের সংখ্যা একই থাকবে,`,
          String.raw`$$\text{সুতরাং }\frac{x}{4}+3=\frac{x-6}{3}$$`,
          String.raw`$$\text{or, }\frac{x+12}{4}=\frac{x-6}{3}$$`,
          String.raw`$$\text{or, }3x+36=4x-24\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }4x-3x=36+24$$`,
          String.raw`$$\therefore\; x=60$$`,
        ],
        answer: String.raw`ঐ শ্রেণির ছাত্র সংখ্যা $60$`,
      },
    },
    // উদাহরণ ৭ — book pages ৯৮-৯৯.
    {
      id: 7,
      question: String.raw`কবির সাহেব তাঁর $56000$ টাকার কিছু টাকা বার্ষিক $12\%$ মুনাফায় ও বাকি টাকা বার্ষিক $10\%$ মুনাফায় বিনিয়োগ করলেন। এক বছর পর তিনি মোট $6400$ টাকা মুনাফা পেলেন। তিনি $12\%$ মুনাফায় কত টাকা বিনিয়োগ করেছেন?`,
      solution: {
        steps: [
          String.raw`মনে করি, কবির সাহেব $12\%$ মুনাফায় $x$ টাকা বিনিয়োগ করেছেন।`,
          String.raw`$\therefore$ তিনি $10\%$ মুনাফায় বিনিয়োগ করেছেন $(56000-x)$ টাকা।`,
          String.raw`এখন, $x$ টাকার $1$ বছরের মুনাফা $$x\times\frac{12}{100}=\frac{12x}{100}\ \text{টাকা}$$`,
          String.raw`আবার, $(56000-x)$ টাকার $1$ বছরের মুনাফা $$(56000-x)\times\frac{10}{100}=\frac{10(56000-x)}{100}\ \text{টাকা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{12x}{100}+\frac{10(56000-x)}{100}=6400$$`,
          String.raw`$$\text{or, }12x+560000-10x=640000$$`,
          String.raw`$$\text{or, }2x=640000-560000$$`,
          String.raw`$$\text{or, }2x=80000$$`,
          String.raw`$$\therefore\; x=40000$$`,
        ],
        answer: String.raw`$12\%$ মুনাফায় $40000$ টাকা`,
      },
    },
  ],
  problems: [
    // ─────────────── সমাধান করো (1 – 8) ───────────────
    {
      id: 1,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{ay}{b}-\frac{by}{a}=a^{2}-b^{2}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{ay}{b}-\frac{by}{a}=a^{2}-b^{2}$$`,
          String.raw`$$\text{or, }\frac{a^{2}y-b^{2}y}{ab}=a^{2}-b^{2}$$`,
          String.raw`$$\text{or, }\frac{y\left(a^{2}-b^{2}\right)}{ab}=a^{2}-b^{2}$$`,
          String.raw`$$\text{or, }y\left(a^{2}-b^{2}\right)=ab\left(a^{2}-b^{2}\right)$$`,
          String.raw`$$\therefore\; y=ab\qquad\left[\,a^{2}-b^{2}\neq 0\ \text{ধরে উভয় পক্ষকে তা দিয়ে ভাগ করে}\,\right]$$`,
        ],
        answer: String.raw`$y=ab$`,
      },
    },
    {
      id: 2,
      group: EQ_SOLVE,
      question: String.raw`$$(z+1)(z-2)=(z-4)(z+2)$$`,
      solution: {
        steps: [
          String.raw`$$(z+1)(z-2)=(z-4)(z+2)$$`,
          String.raw`$$\text{or, }z^{2}-2z+z-2=z^{2}+2z-4z-8$$`,
          String.raw`$$\text{or, }-z-2=-2z-8\qquad\left[\,z^{2}\ \text{উভয় পক্ষ থেকে কাটা গেল}\,\right]$$`,
          String.raw`$$\text{or, }-z+2z=-8+2$$`,
          String.raw`$$\therefore\; z=-6$$`,
        ],
        answer: String.raw`$z=-6$`,
      },
    },
    {
      id: 3,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{4}{2x+1}+\frac{9}{3x+2}=\frac{25}{5x+4}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{4}{2x+1}+\frac{9}{3x+2}=\frac{25}{5x+4}$$`,
          String.raw`$$\text{or, }\frac{4(3x+2)+9(2x+1)}{(2x+1)(3x+2)}=\frac{25}{5x+4}$$`,
          String.raw`$$\text{or, }\frac{12x+8+18x+9}{6x^{2}+7x+2}=\frac{25}{5x+4}$$`,
          String.raw`$$\text{or, }\frac{30x+17}{6x^{2}+7x+2}=\frac{25}{5x+4}$$`,
          String.raw`$$\text{or, }(30x+17)(5x+4)=25\left(6x^{2}+7x+2\right)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }150x^{2}+205x+68=150x^{2}+175x+50$$`,
          String.raw`$$\text{or, }205x-175x=50-68$$`,
          String.raw`$$\text{or, }30x=-18$$`,
          String.raw`$$\therefore\; x=-\frac{3}{5}$$`,
        ],
        answer: String.raw`$x=-\dfrac{3}{5}$`,
      },
    },
    {
      id: 4,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{1}{x+1}+\frac{1}{x+4}=\frac{1}{x+2}+\frac{1}{x+3}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1}{x+1}+\frac{1}{x+4}=\frac{1}{x+2}+\frac{1}{x+3}$$`,
          String.raw`$$\text{or, }\frac{x+4+x+1}{(x+1)(x+4)}=\frac{x+3+x+2}{(x+2)(x+3)}$$`,
          String.raw`$$\text{or, }\frac{2x+5}{x^{2}+5x+4}=\frac{2x+5}{x^{2}+5x+6}$$`,
          String.raw`দুই পক্ষের লব সমান, কিন্তু হর অসমান। তাই লবের মান শূন্য হলেই কেবল দুই পক্ষ সমান হতে পারে।`,
          String.raw`$$\therefore\; 2x+5=0$$`,
          String.raw`$$\text{or, }2x=-5$$`,
          String.raw`$$\therefore\; x=-\frac{5}{2}$$`,
        ],
        answer: String.raw`$x=-\dfrac{5}{2}$`,
      },
    },
    {
      id: 5,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{a}{x-a}+\frac{b}{x-b}=\frac{a+b}{x-a-b}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{a}{x-a}+\frac{b}{x-b}=\frac{a+b}{x-a-b}$$`,
          String.raw`$$\text{or, }\frac{a}{x-a}+\frac{b}{x-b}=\frac{a}{x-a-b}+\frac{b}{x-a-b}$$`,
          String.raw`$$\text{or, }\frac{a}{x-a}-\frac{a}{x-a-b}+\frac{b}{x-b}-\frac{b}{x-a-b}=0$$`,
          String.raw`$$\text{or, }\frac{a\{(x-a-b)-(x-a)\}}{(x-a)(x-a-b)}+\frac{b\{(x-a-b)-(x-b)\}}{(x-b)(x-a-b)}=0$$`,
          String.raw`$$\text{or, }\frac{-ab}{(x-a)(x-a-b)}+\frac{-ab}{(x-b)(x-a-b)}=0$$`,
          String.raw`$$\text{or, }\frac{-ab}{x-a-b}\left(\frac{1}{x-a}+\frac{1}{x-b}\right)=0$$`,
          String.raw`$$\text{or, }\frac{1}{x-a}+\frac{1}{x-b}=0\qquad\left[\,ab\neq 0\ \text{ও}\ x-a-b\neq 0\,\right]$$`,
          String.raw`$$\text{or, }\frac{x-b+x-a}{(x-a)(x-b)}=0$$`,
          String.raw`$$\text{or, }2x-a-b=0$$`,
          String.raw`$$\therefore\; x=\frac{a+b}{2}$$`,
        ],
        answer: String.raw`$x=\dfrac{a+b}{2}$`,
      },
    },
    {
      id: 6,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{x-a}{b}+\frac{x-b}{a}+\frac{x-3a-3b}{a+b}=0$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x-a}{b}+\frac{x-b}{a}+\frac{x-3a-3b}{a+b}=0$$`,
          String.raw`প্রথম দুইটি পদ থেকে $1$ করে বিয়োগ করে তৃতীয় পদে $2$ যোগ করলে সমতা অক্ষুণ্ন থাকে।`,
          String.raw`$$\text{or, }\left(\frac{x-a}{b}-1\right)+\left(\frac{x-b}{a}-1\right)+\left(\frac{x-3a-3b}{a+b}+2\right)=0$$`,
          String.raw`$$\text{or, }\frac{x-a-b}{b}+\frac{x-b-a}{a}+\frac{x-3a-3b+2a+2b}{a+b}=0$$`,
          String.raw`$$\text{or, }\frac{x-a-b}{b}+\frac{x-a-b}{a}+\frac{x-a-b}{a+b}=0$$`,
          String.raw`$$\text{or, }(x-a-b)\left(\frac{1}{b}+\frac{1}{a}+\frac{1}{a+b}\right)=0$$`,
          String.raw`$$\text{or, }x-a-b=0\qquad\left[\,\frac{1}{a}+\frac{1}{b}+\frac{1}{a+b}\neq 0\,\right]$$`,
          String.raw`$$\therefore\; x=a+b$$`,
        ],
        answer: String.raw`$x=a+b$`,
      },
    },
    {
      id: 7,
      group: EQ_SOLVE,
      question: String.raw`$$\frac{x-a}{a^{2}-b^{2}}=\frac{x-b}{b^{2}-a^{2}}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x-a}{a^{2}-b^{2}}=\frac{x-b}{b^{2}-a^{2}}$$`,
          String.raw`$$\text{or, }\frac{x-a}{a^{2}-b^{2}}=\frac{x-b}{-\left(a^{2}-b^{2}\right)}\qquad\left[\,b^{2}-a^{2}=-\left(a^{2}-b^{2}\right)\,\right]$$`,
          String.raw`$$\text{or, }\frac{x-a}{a^{2}-b^{2}}=-\frac{x-b}{a^{2}-b^{2}}$$`,
          String.raw`$$\text{or, }x-a=-(x-b)\qquad\left[\,\text{উভয় পক্ষকে }a^{2}-b^{2}\text{ দিয়ে গুণ করে}\,\right]$$`,
          String.raw`$$\text{or, }x-a=-x+b$$`,
          String.raw`$$\text{or, }2x=a+b$$`,
          String.raw`$$\therefore\; x=\frac{a+b}{2}$$`,
        ],
        answer: String.raw`$x=\dfrac{a+b}{2}$`,
      },
    },
    {
      id: 8,
      group: EQ_SOLVE,
      question: String.raw`$$\left(3+\sqrt{3}\right)z+2=5+3\sqrt{3}$$`,
      solution: {
        steps: [
          String.raw`$$\left(3+\sqrt{3}\right)z+2=5+3\sqrt{3}$$`,
          String.raw`$$\text{or, }\left(3+\sqrt{3}\right)z=5+3\sqrt{3}-2$$`,
          String.raw`$$\text{or, }\left(3+\sqrt{3}\right)z=3+3\sqrt{3}$$`,
          String.raw`$$\text{or, }z=\frac{3\left(1+\sqrt{3}\right)}{3+\sqrt{3}}$$`,
          String.raw`$$\text{or, }z=\frac{3\left(1+\sqrt{3}\right)}{\sqrt{3}\left(\sqrt{3}+1\right)}\qquad\left[\,3=\sqrt{3}\cdot\sqrt{3}\,\right]$$`,
          String.raw`$$\text{or, }z=\frac{3}{\sqrt{3}}$$`,
          String.raw`$$\therefore\; z=\sqrt{3}$$`,
        ],
        answer: String.raw`$z=\sqrt{3}$`,
      },
    },

    // ─────────────── সমাধান সেট নির্ণয় করো (9 – 14) ───────────────
    {
      id: 9,
      group: EQ_SET,
      question: String.raw`$$2x+\sqrt{2}=3x-4-3\sqrt{2}$$`,
      solution: {
        steps: [
          String.raw`$$2x+\sqrt{2}=3x-4-3\sqrt{2}$$`,
          String.raw`$$\text{or, }2x-3x=-4-3\sqrt{2}-\sqrt{2}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }-x=-4-4\sqrt{2}$$`,
          String.raw`$$\therefore\; x=4+4\sqrt{2}$$`,
        ],
        answer: String.raw`$S=\left\{\,4+4\sqrt{2}\,\right\}$`,
      },
    },
    {
      id: 10,
      group: EQ_SET,
      question: String.raw`$$\frac{z-2}{z-1}=2-\frac{1}{z-1}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{z-2}{z-1}=2-\frac{1}{z-1}$$`,
          String.raw`$$\text{or, }\frac{z-2}{z-1}=\frac{2(z-1)-1}{z-1}$$`,
          String.raw`$$\text{or, }\frac{z-2}{z-1}=\frac{2z-3}{z-1}$$`,
          String.raw`হর দুইটি একই, তাই লব দুইটি সমান হতে হবে।`,
          String.raw`$$\text{or, }z-2=2z-3$$`,
          String.raw`$$\text{or, }-z=-1$$`,
          String.raw`$$\text{or, }z=1$$`,
          String.raw`কিন্তু $z=1$ হলে $z-1=0$, অর্থাৎ সমীকরণের হরগুলো শূন্য হয়ে যায় এবং রাশিগুলো অর্থহীন হয়। তাই এই মানটি গ্রহণযোগ্য নয়।`,
          String.raw`$\therefore$ সমীকরণটির কোনো সমাধান নেই।`,
        ],
        answer: String.raw`$S=\emptyset$ — সমীকরণটির কোনো সমাধান নেই`,
      },
    },
    {
      id: 11,
      group: EQ_SET,
      question: String.raw`$$\frac{1}{x}+\frac{1}{x+1}=\frac{2}{x-1}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1}{x}+\frac{1}{x+1}=\frac{2}{x-1}$$`,
          String.raw`$$\text{or, }\frac{x+1+x}{x(x+1)}=\frac{2}{x-1}$$`,
          String.raw`$$\text{or, }\frac{2x+1}{x^{2}+x}=\frac{2}{x-1}$$`,
          String.raw`$$\text{or, }(2x+1)(x-1)=2\left(x^{2}+x\right)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }2x^{2}-2x+x-1=2x^{2}+2x$$`,
          String.raw`$$\text{or, }-x-1=2x$$`,
          String.raw`$$\text{or, }-3x=1$$`,
          String.raw`$$\therefore\; x=-\frac{1}{3}$$`,
          String.raw`এই মানে $x$, $x+1$ ও $x-1$ কোনোটিই শূন্য নয়, তাই মানটি গ্রহণযোগ্য।`,
        ],
        answer: String.raw`$S=\left\{\,-\dfrac{1}{3}\,\right\}$`,
      },
    },
    {
      id: 12,
      group: EQ_SET,
      question: String.raw`$$\frac{m}{m-x}+\frac{n}{n-x}=\frac{m+n}{m+n-x}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{m}{m-x}+\frac{n}{n-x}=\frac{m+n}{m+n-x}$$`,
          String.raw`$$\text{or, }\frac{m}{m-x}+\frac{n}{n-x}=\frac{m}{m+n-x}+\frac{n}{m+n-x}$$`,
          String.raw`$$\text{or, }\frac{m}{m-x}-\frac{m}{m+n-x}+\frac{n}{n-x}-\frac{n}{m+n-x}=0$$`,
          String.raw`$$\text{or, }\frac{m\{(m+n-x)-(m-x)\}}{(m-x)(m+n-x)}+\frac{n\{(m+n-x)-(n-x)\}}{(n-x)(m+n-x)}=0$$`,
          String.raw`$$\text{or, }\frac{mn}{(m-x)(m+n-x)}+\frac{mn}{(n-x)(m+n-x)}=0$$`,
          String.raw`$$\text{or, }\frac{mn}{m+n-x}\left(\frac{1}{m-x}+\frac{1}{n-x}\right)=0$$`,
          String.raw`$$\text{or, }\frac{1}{m-x}+\frac{1}{n-x}=0\qquad\left[\,mn\neq 0\ \text{ও}\ m+n-x\neq 0\,\right]$$`,
          String.raw`$$\text{or, }\frac{n-x+m-x}{(m-x)(n-x)}=0$$`,
          String.raw`$$\text{or, }m+n-2x=0$$`,
          String.raw`$$\therefore\; x=\frac{m+n}{2}$$`,
        ],
        answer: String.raw`$S=\left\{\,\dfrac{m+n}{2}\,\right\}$`,
      },
    },
    {
      id: 13,
      group: EQ_SET,
      question: String.raw`$$\frac{1}{x+2}+\frac{1}{x+5}=\frac{1}{x+3}+\frac{1}{x+4}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1}{x+2}+\frac{1}{x+5}=\frac{1}{x+3}+\frac{1}{x+4}$$`,
          String.raw`$$\text{or, }\frac{x+5+x+2}{(x+2)(x+5)}=\frac{x+4+x+3}{(x+3)(x+4)}$$`,
          String.raw`$$\text{or, }\frac{2x+7}{x^{2}+7x+10}=\frac{2x+7}{x^{2}+7x+12}$$`,
          String.raw`দুই পক্ষের লব সমান, কিন্তু হর অসমান। তাই লবের মান শূন্য হওয়া ছাড়া উপায় নেই।`,
          String.raw`$$\therefore\; 2x+7=0$$`,
          String.raw`$$\therefore\; x=-\frac{7}{2}$$`,
        ],
        answer: String.raw`$S=\left\{\,-\dfrac{7}{2}\,\right\}$`,
      },
    },
    {
      id: 14,
      group: EQ_SET,
      question: String.raw`$$\frac{2t-6}{9}+\frac{15-2t}{12-5t}=\frac{4t-15}{18}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{2t-6}{9}+\frac{15-2t}{12-5t}=\frac{4t-15}{18}$$`,
          String.raw`উভয় পক্ষকে $18(12-5t)$ দিয়ে গুণ করি।`,
          String.raw`$$\text{or, }2(2t-6)(12-5t)+18(15-2t)=(4t-15)(12-5t)$$`,
          String.raw`$$\text{or, }2\left(-10t^{2}+54t-72\right)+270-36t=-20t^{2}+123t-180$$`,
          String.raw`$$\text{or, }-20t^{2}+108t-144+270-36t=-20t^{2}+123t-180$$`,
          String.raw`$$\text{or, }72t+126=123t-180\qquad\left[\,-20t^{2}\ \text{উভয় পক্ষ থেকে কাটা গেল}\,\right]$$`,
          String.raw`$$\text{or, }123t-72t=126+180$$`,
          String.raw`$$\text{or, }51t=306$$`,
          String.raw`$$\therefore\; t=6$$`,
          String.raw`$t=6$ হলে $12-5t=-18\neq 0$, তাই মানটি গ্রহণযোগ্য।`,
        ],
        answer: String.raw`$S=\{6\}$`,
      },
    },

    // ─────────────── সমীকরণ গঠন করে সমাধান করো (15 – 24) ───────────────
    {
      id: 15,
      group: EQ_FORM,
      question: String.raw`একটি সংখ্যা অপর একটি সংখ্যার $\dfrac{2}{5}$ গুণ। সংখ্যা দুইটির সমষ্টি $98$ হলে, সংখ্যা দুইটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বড় সংখ্যাটি $x$; অতএব অপর সংখ্যাটি $\dfrac{2x}{5}$।`,
          String.raw`$$\text{প্রশ্নমতে, }x+\frac{2x}{5}=98$$`,
          String.raw`$$\text{or, }\frac{5x+2x}{5}=98$$`,
          String.raw`$$\text{or, }7x=490$$`,
          String.raw`$$\therefore\; x=70$$`,
          String.raw`$$\therefore\;\text{অপর সংখ্যাটি}=\frac{2\times 70}{5}=28$$`,
        ],
        answer: String.raw`সংখ্যা দুইটি $70$ ও $28$`,
      },
    },
    {
      id: 16,
      group: EQ_FORM,
      question: String.raw`একটি প্রকৃত ভগ্নাংশের লব ও হরের অন্তর $1$; লব থেকে $2$ বিয়োগ ও হরের সাথে $2$ যোগ করলে যে ভগ্নাংশ পাওয়া যাবে তা $\dfrac{1}{6}$ এর সমান। ভগ্নাংশটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`প্রকৃত ভগ্নাংশে হর লব অপেক্ষা বড়। মনে করি, লব $x$; অতএব হর $x+1$।`,
          String.raw`$$\therefore\;\text{ভগ্নাংশটি}=\frac{x}{x+1}$$`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{x-2}{(x+1)+2}=\frac{1}{6}$$`,
          String.raw`$$\text{or, }\frac{x-2}{x+3}=\frac{1}{6}$$`,
          String.raw`$$\text{or, }6(x-2)=x+3\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }6x-12=x+3$$`,
          String.raw`$$\text{or, }5x=15$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$$\therefore\;\text{ভগ্নাংশটি}=\frac{3}{3+1}=\frac{3}{4}$$`,
        ],
        answer: String.raw`ভগ্নাংশটি $\dfrac{3}{4}$`,
      },
    },
    {
      id: 17,
      group: EQ_FORM,
      question: String.raw`দুই অঙ্কবিশিষ্ট একটি সংখ্যার অঙ্কদ্বয়ের সমষ্টি $9$; অঙ্ক দুইটি স্থান বিনিময় করলে যে সংখ্যা পাওয়া যাবে তা প্রদত্ত সংখ্যা হতে $45$ কম হবে। সংখ্যাটি কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, দশক স্থানীয় অঙ্কটি $x$; অতএব একক স্থানীয় অঙ্কটি $9-x$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10x+(9-x)=9x+9$$`,
          String.raw`$$\text{স্থান বিনিময়ে সংখ্যাটি}=10(9-x)+x=90-9x$$`,
          String.raw`$$\text{প্রশ্নমতে, }90-9x=(9x+9)-45$$`,
          String.raw`$$\text{or, }90-9x=9x-36$$`,
          String.raw`$$\text{or, }-9x-9x=-36-90$$`,
          String.raw`$$\text{or, }-18x=-126$$`,
          String.raw`$$\therefore\; x=7$$`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=9\times 7+9=72$$`,
          String.raw`পরীক্ষা: স্থান বিনিময়ে সংখ্যাটি $27$, আর $72-27=45$।`,
        ],
        answer: String.raw`সংখ্যাটি $72$`,
      },
    },
    {
      id: 18,
      group: EQ_FORM,
      question: String.raw`দুই অঙ্কবিশিষ্ট একটি সংখ্যার দশক স্থানীয় অঙ্ক একক স্থানীয় অঙ্কের দ্বিগুণ। দেখাও যে, সংখ্যাটি অঙ্কদ্বয়ের সমষ্টির সাতগুণ।`,
      solution: {
        steps: [
          String.raw`মনে করি, একক স্থানীয় অঙ্কটি $x$; অতএব দশক স্থানীয় অঙ্কটি $2x$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10\times 2x+x=20x+x=21x$$`,
          String.raw`$$\text{আবার, অঙ্কদ্বয়ের সমষ্টি}=2x+x=3x$$`,
          String.raw`$$\therefore\;\text{অঙ্কদ্বয়ের সমষ্টির সাতগুণ}=7\times 3x=21x$$`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=\text{অঙ্কদ্বয়ের সমষ্টির সাতগুণ}$$`,
        ],
        answer: String.raw`সংখ্যাটি $=21x=7(2x+x)$, অর্থাৎ অঙ্কদ্বয়ের সমষ্টির সাতগুণ (দেখানো হলো)`,
      },
    },
    {
      id: 19,
      group: EQ_FORM,
      question: String.raw`একজন ক্ষুদ্র ব্যবসায়ী $5600$ টাকা বিনিয়োগ করে এক বছর পর কিছু টাকার উপর $5\%$ এবং অবশিষ্ট টাকার উপর $4\%$ লাভ করলেন। মোট $256$ টাকা লাভ করলে, তিনি কত টাকার উপর $5\%$ লাভ করলেন?`,
      solution: {
        steps: [
          String.raw`মনে করি, তিনি $x$ টাকার উপর $5\%$ লাভ করলেন; অতএব $(5600-x)$ টাকার উপর $4\%$ লাভ করলেন।`,
          String.raw`$$x\ \text{টাকার লাভ}=\frac{5x}{100}\ \text{টাকা}$$`,
          String.raw`$$(5600-x)\ \text{টাকার লাভ}=\frac{4(5600-x)}{100}\ \text{টাকা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{5x}{100}+\frac{4(5600-x)}{100}=256$$`,
          String.raw`$$\text{or, }5x+22400-4x=25600$$`,
          String.raw`$$\text{or, }x=25600-22400$$`,
          String.raw`$$\therefore\; x=3200$$`,
        ],
        answer: String.raw`$3200$ টাকার উপর $5\%$ লাভ করলেন`,
      },
    },
    {
      id: 20,
      group: EQ_FORM,
      question: String.raw`একটি বালিকা বিদ্যালয়ের একটি শ্রেণিকক্ষে প্রতি বেঞ্চে $6$ জন করে ছাত্রী বসালে $2$টি বেঞ্চ খালি থাকে। কিন্তু প্রতি বেঞ্চে $5$ জন করে ছাত্রী বসালে $6$ জন ছাত্রীকে দাঁড়িয়ে থাকতে হয়। ঐ শ্রেণির বেঞ্চের সংখ্যা নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, শ্রেণিকক্ষের বেঞ্চের সংখ্যা $x$।`,
          String.raw`প্রতি বেঞ্চে $6$ জন করে বসালে $2$টি বেঞ্চ খালি থাকে, অর্থাৎ $(x-2)$টি বেঞ্চেই সবাই বসে যায়।`,
          String.raw`$$\therefore\;\text{ছাত্রী সংখ্যা}=6(x-2)$$`,
          String.raw`আবার, প্রতি বেঞ্চে $5$ জন করে বসালে $6$ জন দাঁড়িয়ে থাকে।`,
          String.raw`$$\therefore\;\text{ছাত্রী সংখ্যা}=5x+6$$`,
          String.raw`$$\text{প্রশ্নমতে, }6(x-2)=5x+6$$`,
          String.raw`$$\text{or, }6x-12=5x+6$$`,
          String.raw`$$\text{or, }6x-5x=6+12$$`,
          String.raw`$$\therefore\; x=18$$`,
          String.raw`পরীক্ষা: ছাত্রী সংখ্যা $6(18-2)=96$ এবং $5\times 18+6=96$।`,
        ],
        answer: String.raw`বেঞ্চের সংখ্যা $18$টি (ছাত্রী $96$ জন)`,
      },
    },
    {
      id: 21,
      group: EQ_FORM,
      question: String.raw`একটি লঞ্চে যাত্রী সংখ্যা $47$। মাথাপিছু কেবিনের ভাড়া ডেকের ভাড়ার দ্বিগুণ। ডেকের ভাড়া মাথাপিছু $30$ টাকা এবং মোট ভাড়া প্রাপ্তি $1680$ টাকা হলে, কেবিনের যাত্রী সংখ্যা কত?`,
      solution: {
        steps: [
          String.raw`ডেকের ভাড়া মাথাপিছু $30$ টাকা, অতএব কেবিনের ভাড়া মাথাপিছু $2\times 30=60$ টাকা।`,
          String.raw`মনে করি, কেবিনের যাত্রী সংখ্যা $x$; অতএব ডেকের যাত্রী সংখ্যা $(47-x)$।`,
          String.raw`$$\text{প্রশ্নমতে, }60x+30(47-x)=1680$$`,
          String.raw`$$\text{or, }60x+1410-30x=1680$$`,
          String.raw`$$\text{or, }30x=1680-1410$$`,
          String.raw`$$\text{or, }30x=270$$`,
          String.raw`$$\therefore\; x=9$$`,
        ],
        answer: String.raw`কেবিনের যাত্রী সংখ্যা $9$ জন`,
      },
    },
    {
      id: 22,
      group: EQ_FORM,
      question: String.raw`মোট $120$টি পঁচিশ পয়সার মুদ্রা ও পঞ্চাশ পয়সার মুদ্রায় মোট $35$ টাকা হলে, কোন প্রকারের মুদ্রার সংখ্যা কয়টি?`,
      solution: {
        steps: [
          String.raw`মনে করি, পঁচিশ পয়সার মুদ্রা $x$টি; অতএব পঞ্চাশ পয়সার মুদ্রা $(120-x)$টি।`,
          String.raw`$$35\ \text{টাকা}=35\times 100=3500\ \text{পয়সা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }25x+50(120-x)=3500$$`,
          String.raw`$$\text{or, }25x+6000-50x=3500$$`,
          String.raw`$$\text{or, }-25x=3500-6000$$`,
          String.raw`$$\text{or, }-25x=-2500$$`,
          String.raw`$$\therefore\; x=100$$`,
          String.raw`$$\therefore\;\text{পঞ্চাশ পয়সার মুদ্রা}=120-100=20\ \text{টি}$$`,
        ],
        answer: String.raw`পঁচিশ পয়সার মুদ্রা $100$টি ও পঞ্চাশ পয়সার মুদ্রা $20$টি`,
      },
    },
    {
      id: 23,
      group: EQ_FORM,
      question: String.raw`একটি গাড়ি ঘণ্টায় $60$ কি.মি. বেগে কিছু পথ এবং ঘণ্টায় $40$ কি.মি. বেগে অবশিষ্ট পথ অতিক্রম করলো। গাড়িটি মোট $5$ ঘণ্টায় $240$ কি.মি. পথ অতিক্রম করলে, ঘণ্টায় $60$ কি.মি. বেগে কতদূর গিয়েছে?`,
      solution: {
        steps: [
          String.raw`মনে করি, গাড়িটি ঘণ্টায় $60$ কি.মি. বেগে $x$ কি.মি. পথ গিয়েছে; অতএব ঘণ্টায় $40$ কি.মি. বেগে গিয়েছে $(240-x)$ কি.মি.।`,
          String.raw`$$\text{প্রথম অংশে সময়}=\frac{x}{60}\ \text{ঘণ্টা},\qquad \text{দ্বিতীয় অংশে সময়}=\frac{240-x}{40}\ \text{ঘণ্টা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{x}{60}+\frac{240-x}{40}=5$$`,
          String.raw`$$\text{or, }2x+3(240-x)=600\qquad\left[\,\text{উভয় পক্ষকে }120\text{ দিয়ে গুণ করে}\,\right]$$`,
          String.raw`$$\text{or, }2x+720-3x=600$$`,
          String.raw`$$\text{or, }-x=-120$$`,
          String.raw`$$\therefore\; x=120$$`,
          String.raw`পরীক্ষা: $\dfrac{120}{60}+\dfrac{120}{40}=2+3=5$ ঘণ্টা।`,
        ],
        answer: String.raw`ঘণ্টায় $60$ কি.মি. বেগে $120$ কি.মি. পথ গিয়েছে`,
      },
    },
    {
      id: 24,
      group: EQ_FORM,
      question: String.raw`ঢাকার নিউমার্কেট থেকে গাবতলীর দূরত্ব $12$ কি.মি.। সজল নিউমার্কেট থেকে রিকশায় ঘণ্টায় $6$ কি.মি. বেগে এবং কাজল একই স্থান থেকে পায়ে হেঁটে ঘণ্টায় $4$ কি.মি. বেগে গাবতলীর দিকে রওনা হলো। সজল গাবতলী পৌঁছে সেখানে $30$ মিনিট বিশ্রাম নিয়ে আবার নিউমার্কেটের দিকে একই বেগে রওনা হলো। তারা নিউমার্কেট থেকে কতদূরে মিলিত হবে?`,
      solution: {
        steps: [
          String.raw`মনে করি, তারা নিউমার্কেট থেকে $x$ কি.মি. দূরে মিলিত হলো।`,
          String.raw`$$\text{কাজলের সময়}=\frac{x}{4}\ \text{ঘণ্টা}$$`,
          String.raw`সজল প্রথমে $12$ কি.মি. গিয়ে গাবতলী পৌঁছেছে, সেখানে $30$ মিনিট অর্থাৎ $\dfrac{1}{2}$ ঘণ্টা বিশ্রাম নিয়েছে, তারপর ফিরতি পথে $(12-x)$ কি.মি. এসেছে।`,
          String.raw`$$\text{সজলের সময়}=\frac{12}{6}+\frac{1}{2}+\frac{12-x}{6}\ \text{ঘণ্টা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{x}{4}=2+\frac{1}{2}+\frac{12-x}{6}$$`,
          String.raw`$$\text{or, }3x=30+2(12-x)\qquad\left[\,\text{উভয় পক্ষকে }12\text{ দিয়ে গুণ করে}\,\right]$$`,
          String.raw`$$\text{or, }3x=30+24-2x$$`,
          String.raw`$$\text{or, }5x=54$$`,
          String.raw`$$\therefore\; x=10.8$$`,
          String.raw`পরীক্ষা: কাজলের সময় $\dfrac{10.8}{4}=2.7$ ঘণ্টা; সজলের সময় $2+\dfrac{1}{2}+\dfrac{1.2}{6}=2.7$ ঘণ্টা।`,
        ],
        answer: String.raw`নিউমার্কেট থেকে $10.8$ কি.মি. দূরে`,
      },
    },
  ],
};

// অনুশীলনী ৫.২ — book pages ১০৭-১০৯. Four instruction lines in the book, the
// first of them a run of multiple-choice questions.
const QUAD_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৫)";
const QUAD_SOLVE = "সমাধান করো (৬ – ১২)";
const QUAD_SET = "সমাধান সেট নির্ণয় করো (১৩ – ১৭)";
const QUAD_FORM = "সমীকরণ গঠন করে সমাধান করো (১৮ – ২৬)";
const MODEL5_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (২৭ – ৩০)";
const MODEL5_CQ = "নমুনা প্রশ্ন — সৃজনশীল (৩১)";
const MODEL5_SHORT = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (৩২)";

const exercise52: Exercise = {
  id: "5.2",
  bnId: "অনুশীলনী ৫.২",
  title: "দ্বিঘাত সমীকরণ",
  bookPages: "১০৭ – ১১০",
  formulas: [
    {
      title: "দ্বিঘাত সমীকরণ ও তার সমাধান",
      formulas: [
        {
          statement: String.raw`$$ax^{2}+bx+c=0\qquad(a\neq 0)$$`,
          note: String.raw`এক চলকবিশিষ্ট দ্বিঘাত সমীকরণের আদর্শ রূপ। চলকের সর্বোচ্চ ঘাত $2$, তাই মূলের সংখ্যাও $2$ — এরা সমান বা অসমান হতে পারে।`,
        },
        {
          statement: String.raw`$$ab=0\;\Rightarrow\;a=0\;\text{বা}\;b=0$$`,
          note: "শূন্য গুণফলের ধর্ম — এই অনুশীলনীর মূল চাবিকাঠি। আগে সব পদ এক পক্ষে এনে ডান পক্ষ শূন্য করো, তারপর বাম পক্ষকে উৎপাদকে বিশ্লেষণ করলে প্রতিটি উৎপাদক থেকে একেকটি মূল পাওয়া যায়।",
        },
        {
          statement: String.raw`$$x^{2}-(a+b)x+ab=(x-a)(x-b)$$`,
          note: String.raw`মধ্যপদ বিভাজন — যে দুইটি সংখ্যার গুণফল $ab$ ও সমষ্টি $a+b$, মধ্যপদকে সেই দুই ভাগে ভেঙে জোড়া বেঁধে উৎপাদক বের করা হয়।`,
        },
      ],
    },
    {
      title: "যে অভেদগুলো বারবার লাগে",
      formulas: [
        {
          statement: String.raw`$$a^{2}-b^{2}=(a+b)(a-b)$$`,
        },
        {
          statement: String.raw`$$(a\pm b)^{2}=a^{2}\pm 2ab+b^{2}$$`,
        },
        {
          statement: String.raw`$$a^{3}-b^{3}=(a-b)\left(a^{2}+ab+b^{2}\right)$$`,
          note: String.raw`$(x+1)^{3}-(x-1)^{3}$ ধরনের লবকে এভাবে ভাঙলে ঘন সূচক নিজে থেকেই নেমে আসে (১৭ নং প্রশ্ন)।`,
        },
        {
          statement: String.raw`$$\frac{p}{q}+\frac{q}{p}-2=\frac{(p-q)^{2}}{pq}$$`,
          note: String.raw`$\frac{p}{q}+\frac{q}{p}$ আকারের দুই পক্ষ থেকেই $2$ বিয়োগ করলে সমীকরণটি হঠাৎ ছোট হয়ে যায় — ১২ নং প্রশ্নে ঠিক এটিই ঘটে।`,
        },
      ],
    },
    {
      title: "মূল লেখা ও মূল বাছাই",
      formulas: [
        {
          statement: String.raw`$$S=\{\,\alpha,\;\beta\,\}$$`,
          note: String.raw`সমাধান সেট। দুইটি মূল সমান হলে সেটে একটিই উপাদান থাকে, যেমন $(x-1)^{2}=0$ হলে $S=\{1\}$।`,
        },
        {
          statement: String.raw`$$\text{সংখ্যা, দৈর্ঘ্য, লোকসংখ্যা}\;\Rightarrow\;x>0$$`,
          note: "বাস্তব সমস্যায় দ্বিঘাত সমীকরণ দুইটি মূলই দেয়, কিন্তু প্রসঙ্গের সঙ্গে না মিললে একটিকে বাদ দিতে হয় — কলমের সংখ্যা বা রাস্তার চওড়া ঋণাত্মক হতে পারে না।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৮ — book page ১০২.
    {
      id: 8,
      question: String.raw`সমাধান করো: $$(x+2)(x-3)=0$$`,
      solution: {
        steps: [
          String.raw`$$(x+2)(x-3)=0$$`,
          String.raw`$$\therefore\; x+2=0\ \text{অথবা}\ x-3=0\qquad\left[\,ab=0\Rightarrow a=0\ \text{বা}\ b=0\,\right]$$`,
          String.raw`$$x+2=0\ \text{হলে},\ x=-2$$`,
          String.raw`$$\text{আবার, }x-3=0\ \text{হলে},\ x=3$$`,
        ],
        answer: String.raw`$x=-2$ অথবা $x=3$`,
      },
    },
    // উদাহরণ ৯ — book page ১০২.
    {
      id: 9,
      question: String.raw`সমাধান সেট নির্ণয় করো: $$y^{2}=\sqrt{3}\,y$$`,
      solution: {
        steps: [
          String.raw`$$y^{2}=\sqrt{3}\,y$$`,
          String.raw`$$\text{or, }y^{2}-\sqrt{3}\,y=0\qquad\left[\,\text{পক্ষান্তর করে ডান পক্ষ শূন্য করা হয়েছে}\,\right]$$`,
          String.raw`$$\text{or, }y\left(y-\sqrt{3}\right)=0$$`,
          String.raw`$$\therefore\; y=0\ \text{অথবা}\ y-\sqrt{3}=0$$`,
          String.raw`$$\text{আবার, }y-\sqrt{3}=0\ \text{হলে},\ y=\sqrt{3}$$`,
        ],
        answer: String.raw`সমাধান সেট $\left\{\,0,\;\sqrt{3}\,\right\}$`,
      },
    },
    // উদাহরণ ১০ — book pages ১০২-১০৩.
    {
      id: 10,
      question: String.raw`সমাধান করো ও সমাধান সেট লিখ: $$x-4=\frac{x-4}{x}$$`,
      solution: {
        steps: [
          String.raw`$$x-4=\frac{x-4}{x}$$`,
          String.raw`$$\text{or, }x(x-4)=x-4\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }x(x-4)-(x-4)=0\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }(x-4)(x-1)=0$$`,
          String.raw`$$\therefore\; x-4=0\ \text{অথবা}\ x-1=0$$`,
          String.raw`$$x-4=0\ \text{হলে},\ x=4$$`,
          String.raw`$$\text{আবার, }x-1=0\ \text{হলে},\ x=1$$`,
        ],
        answer: String.raw`সমাধান সেট $\{1,\,4\}$`,
      },
    },
    // উদাহরণ ১১ — book page ১০৩.
    {
      id: 11,
      question: String.raw`সমাধান করো: $$\left(\frac{x+a}{x-a}\right)^{2}-5\left(\frac{x+a}{x-a}\right)+6=0$$`,
      solution: {
        steps: [
          String.raw`$$\left(\frac{x+a}{x-a}\right)^{2}-5\left(\frac{x+a}{x-a}\right)+6=0\qquad\cdots(1)$$`,
          String.raw`$$\text{ধরি, }\frac{x+a}{x-a}=y$$`,
          String.raw`$$\therefore\;(1)\ \text{হতে পাই, }y^{2}-5y+6=0$$`,
          String.raw`$$\text{or, }y^{2}-2y-3y+6=0$$`,
          String.raw`$$\text{or, }y(y-2)-3(y-2)=0$$`,
          String.raw`$$\text{or, }(y-2)(y-3)=0$$`,
          String.raw`$$\therefore\; y=2\ \text{অথবা}\ y=3$$`,
          String.raw`$$\text{এখন, }y=2\ \text{হলে, }\frac{x+a}{x-a}=\frac{2}{1}$$`,
          String.raw`$$\text{or, }x+a=2(x-a)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }x+a=2x-2a$$`,
          String.raw`$$\text{or, }2x-x=a+2a$$`,
          String.raw`$$\therefore\; x=3a$$`,
          String.raw`$$\text{আবার, }y=3\ \text{হলে, }\frac{x+a}{x-a}=\frac{3}{1}$$`,
          String.raw`$$\text{or, }x+a=3(x-a)$$`,
          String.raw`$$\text{or, }x+a=3x-3a$$`,
          String.raw`$$\text{or, }3x-x=a+3a$$`,
          String.raw`$$\therefore\; x=2a$$`,
        ],
        answer: String.raw`$x=2a$ অথবা $x=3a$`,
      },
    },
    // উদাহরণ ১২ — book page ১০৪.
    {
      id: 12,
      question: String.raw`একটি প্রকৃত ভগ্নাংশের হর, লব অপেক্ষা $4$ বেশি। ভগ্নাংশটি বর্গ করলে যে ভগ্নাংশ পাওয়া যাবে তার হর, লব অপেক্ষা $40$ বেশি হবে। ভগ্নাংশটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ধরি, ভগ্নাংশটির লব $x$ এবং হর $x+4$।`,
          String.raw`$$\text{সুতরাং ভগ্নাংশটি}=\frac{x}{x+4}$$`,
          String.raw`$$\text{ভগ্নাংশটির বর্গ}=\left(\frac{x}{x+4}\right)^{2}=\frac{x^{2}}{(x+4)^{2}}=\frac{x^{2}}{x^{2}+8x+16}$$`,
          String.raw`$$\text{এখানে, লব}=x^{2}\ \text{এবং হর}=x^{2}+8x+16$$`,
          String.raw`$$\text{প্রশ্নমতে, }x^{2}+8x+16=x^{2}+40$$`,
          String.raw`$$\text{or, }8x+16=40$$`,
          String.raw`$$\text{or, }8x=24$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$$\therefore\; x+4=3+4=7$$`,
          String.raw`$$\therefore\;\frac{x}{x+4}=\frac{3}{7}$$`,
        ],
        answer: String.raw`ভগ্নাংশটি $\dfrac{3}{7}$`,
      },
    },
    // উদাহরণ ১৩ — book pages ১০৪-১০৫.
    {
      id: 13,
      figure: "52-ex13",
      question: String.raw`$50$ মিটার দৈর্ঘ্য এবং $40$ মিটার প্রস্থবিশিষ্ট একটি আয়তাকার বাগানের ভিতরের চারদিকে সমান চওড়া একটি রাস্তা আছে। রাস্তা বাদে বাগানের ক্ষেত্রফল $1200$ বর্গমিটার হলে, রাস্তাটি কত মিটার চওড়া?`,
      solution: {
        steps: [
          String.raw`মনে করি, রাস্তাটি $x$ মিটার চওড়া।`,
          String.raw`রাস্তা বাদে বাগানটির দৈর্ঘ্য $(50-2x)$ মিটার এবং প্রস্থ $(40-2x)$ মিটার।`,
          String.raw`$$\therefore\;\text{রাস্তা বাদে বাগানটির ক্ষেত্রফল}=(50-2x)(40-2x)\ \text{বর্গমিটার}$$`,
          String.raw`$$\text{প্রশ্নমতে, }(50-2x)(40-2x)=1200$$`,
          String.raw`$$\text{or, }2000-100x-80x+4x^{2}=1200$$`,
          String.raw`$$\text{or, }4x^{2}-180x+800=0$$`,
          String.raw`$$\text{or, }x^{2}-45x+200=0\qquad\left[\,4\ \text{দিয়ে ভাগ করে}\,\right]$$`,
          String.raw`$$\text{or, }x^{2}-5x-40x+200=0$$`,
          String.raw`$$\text{or, }x(x-5)-40(x-5)=0$$`,
          String.raw`$$\text{or, }(x-5)(x-40)=0$$`,
          String.raw`$$\therefore\; x=5\ \text{অথবা}\ x=40$$`,
          String.raw`কিন্তু রাস্তাটি বাগানের প্রস্থ $40$ মিটার থেকে কম চওড়া হবে।`,
          String.raw`$$\therefore\; x\neq 40;\quad\therefore\; x=5$$`,
        ],
        answer: String.raw`রাস্তাটি $5$ মিটার চওড়া`,
      },
    },
    // উদাহরণ ১৪ — book pages ১০৫-১০৬.
    {
      id: 14,
      question: String.raw`শাহিক $240$ টাকায় কতগুলো কলম কিনল। সে যদি ঐ টাকায় একটি কলম বেশি পেতো তবে প্রতিটি কলমের দাম গড়ে $1$ টাকা কম পড়তো। সে কতগুলো কলম কিনল?`,
      solution: {
        steps: [
          String.raw`মনে করি, শাহিক $240$ টাকায় মোট $x$টি কলম কিনেছিল। এতে প্রতিটি কলমের দাম পড়ে $\dfrac{240}{x}$ টাকা।`,
          String.raw`সে যদি $240$ টাকায় $(x+1)$টি কলম পেতো তবে প্রতিটি কলমের দাম পড়তো $\dfrac{240}{x+1}$ টাকা।`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{240}{x+1}=\frac{240}{x}-1$$`,
          String.raw`$$\text{or, }\frac{240}{x+1}=\frac{240-x}{x}$$`,
          String.raw`$$\text{or, }240x=(x+1)(240-x)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{or, }240x=240x+240-x^{2}-x$$`,
          String.raw`$$\text{or, }x^{2}+x-240=0\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }x^{2}+16x-15x-240=0$$`,
          String.raw`$$\text{or, }x(x+16)-15(x+16)=0$$`,
          String.raw`$$\text{or, }(x+16)(x-15)=0$$`,
          String.raw`$$\therefore\; x=-16\ \text{অথবা}\ x=15$$`,
          String.raw`কিন্তু কলমের সংখ্যা $x$ ঋণাত্মক হতে পারে না।`,
          String.raw`$$\therefore\; x\neq -16;\quad\therefore\; x=15$$`,
        ],
        answer: String.raw`শাহিক $15$টি কলম কিনেছিল`,
      },
    },
    // উদাহরণ ১৫ — book pages ১০৬-১০৭.
    {
      id: 15,
      question: String.raw`একটি বিদ্যালয়ের নবম শ্রেণির একটি পরীক্ষায় $x$ জন ছাত্রের গণিতে প্রাপ্ত মোট নম্বর $1950$। একই পরীক্ষায় অন্য একজন নতুন ছাত্রের গণিতে প্রাপ্ত নম্বর $34$ যোগ করায় প্রাপ্ত নম্বরের গড় $1$ কমে গেল।`,
      parts: [
        {
          label: "ক",
          question: String.raw`পৃথকভাবে $x$ জন ছাত্রের এবং নতুন ছাত্রসহ সকলের প্রাপ্ত নম্বরের গড় $x$ এর মাধ্যমে লেখ।`,
          solution: {
            steps: [
              String.raw`$$x\ \text{জন ছাত্রের প্রাপ্ত নম্বরের গড়}=\frac{1950}{x}$$`,
              String.raw`$$\text{নতুন ছাত্রের নম্বরসহ }(x+1)\ \text{জন ছাত্রের গড়}=\frac{1950+34}{x+1}=\frac{1984}{x+1}$$`,
            ],
            answer: String.raw`$\dfrac{1950}{x}$ এবং $\dfrac{1984}{x+1}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রদত্ত শর্তানুসারে সমীকরণ গঠন করে দেখাও যে, $x^{2}+35x-1950=0$`,
          solution: {
            steps: [
              String.raw`নতুন ছাত্র যোগ হওয়ায় গড় $1$ কমে গেছে, অর্থাৎ আগের গড় নতুন গড় অপেক্ষা $1$ বেশি।`,
              String.raw`$$\text{প্রশ্নমতে, }\frac{1950}{x}=\frac{1984}{x+1}+1$$`,
              String.raw`$$\text{or, }\frac{1950}{x}-\frac{1984}{x+1}=1\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
              String.raw`$$\text{or, }\frac{1950x+1950-1984x}{x(x+1)}=1$$`,
              String.raw`$$\text{or, }x^{2}+x=1950x-1984x+1950\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
              String.raw`$$\text{or, }x^{2}+x=1950-34x$$`,
              String.raw`$$\therefore\; x^{2}+35x-1950=0\qquad\left[\,\text{দেখানো হলো}\,\right]$$`,
            ],
            answer: String.raw`$x^{2}+35x-1950=0$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$x$ এর মান বের করে উভয় ক্ষেত্রে নম্বরের গড় কত তা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$x^{2}+35x-1950=0$$`,
              String.raw`$$\text{or, }x^{2}+65x-30x-1950=0$$`,
              String.raw`$$\text{or, }x(x+65)-30(x+65)=0$$`,
              String.raw`$$\text{or, }(x+65)(x-30)=0$$`,
              String.raw`$$\therefore\; x+65=0\ \text{অথবা}\ x-30=0$$`,
              String.raw`$$x+65=0\ \text{হলে},\ x=-65$$`,
              String.raw`$$\text{আবার, }x-30=0\ \text{হলে},\ x=30$$`,
              String.raw`যেহেতু ছাত্রের সংখ্যা $x$ ঋণাত্মক হতে পারে না, সুতরাং $x\neq -65$।`,
              String.raw`$$\therefore\; x=30$$`,
              String.raw`$$\therefore\;\text{প্রথম ক্ষেত্রে গড়}=\frac{1950}{30}=65\quad\text{এবং দ্বিতীয় ক্ষেত্রে গড়}=\frac{1984}{31}=64$$`,
            ],
            answer: String.raw`$x=30$; গড় যথাক্রমে $65$ ও $64$`,
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (1 – 5) ───────────────
    {
      id: 1,
      group: QUAD_MCQ,
      question: String.raw`$x$ কে চলক ধরে $a^{2}x+b=0$ সমীকরণটির ঘাত নিচের কোনটি?
ক) $3$  খ) $2$  গ) $1$  ঘ) $0$`,
      solution: {
        steps: [
          String.raw`সমীকরণের ঘাত মানে চলকের সর্বোচ্চ ঘাত। এখানে চলক $x$, আর $a$ ও $b$ ধ্রুবক।`,
          String.raw`$$a^{2}x+b=0\ \text{-এ}\ x\ \text{-এর সর্বোচ্চ ঘাত}=1$$`,
          String.raw`$a^{2}$-এর ঘাত $2$ হলেও $a$ চলক নয়, তাই তা সমীকরণের ঘাত নির্ধারণ করে না।`,
        ],
        answer: String.raw`গ) $1$`,
      },
    },
    {
      id: 2,
      group: QUAD_MCQ,
      question: String.raw`নিচের কোনটি অভেদ?
ক) $(x+1)^{2}+(x-1)^{2}=4x$
খ) $(x+1)^{2}+(x-1)^{2}=2\left(x^{2}+1\right)$
গ) $(a+b)^{2}+(a-b)^{2}=2ab$
ঘ) $(a-b)^{2}=a^{2}+2ab+b^{2}$`,
      solution: {
        steps: [
          String.raw`$$(x+1)^{2}+(x-1)^{2}=\left(x^{2}+2x+1\right)+\left(x^{2}-2x+1\right)$$`,
          String.raw`$$=2x^{2}+2=2\left(x^{2}+1\right)$$`,
          String.raw`এটি $x$-এর সব মানের জন্যই সত্য, তাই খ) একটি অভেদ।`,
          String.raw`ক) ভুল, কারণ বাম পক্ষ $2\left(x^{2}+1\right)$, যা $4x$-এর সমান নয়।`,
          String.raw`গ) ভুল, কারণ $(a+b)^{2}+(a-b)^{2}=2\left(a^{2}+b^{2}\right)$।`,
          String.raw`ঘ) ভুল, কারণ $(a-b)^{2}=a^{2}-2ab+b^{2}$।`,
        ],
        answer: String.raw`খ) $(x+1)^{2}+(x-1)^{2}=2\left(x^{2}+1\right)$`,
      },
    },
    {
      id: 3,
      group: QUAD_MCQ,
      question: String.raw`$x^{2}-x-12=0$ সমীকরণের মূলদ্বয় নিচের কোনটি?
ক) $3,\,4$  খ) $3,\,-4$  গ) $-3,\,4$  ঘ) $-3,\,-4$`,
      solution: {
        steps: [
          String.raw`$$x^{2}-x-12=0$$`,
          String.raw`$$\text{or, }x^{2}-4x+3x-12=0$$`,
          String.raw`$$\text{or, }x(x-4)+3(x-4)=0$$`,
          String.raw`$$\text{or, }(x-4)(x+3)=0$$`,
          String.raw`$$\therefore\; x=4\ \text{অথবা}\ x=-3$$`,
        ],
        answer: String.raw`গ) $-3,\,4$`,
      },
    },
    {
      id: 4,
      group: QUAD_MCQ,
      question: String.raw`$3x^{2}-x+5=0$ সমীকরণে $x$ এর সহগ কত?
ক) $3$  খ) $2$  গ) $1$  ঘ) $-1$`,
      solution: {
        steps: [
          String.raw`$$3x^{2}-x+5=3x^{2}+(-1)\cdot x+5$$`,
          String.raw`$ax^{2}+bx+c=0$ এর সঙ্গে তুলনা করে পাই $a=3$, $b=-1$, $c=5$।`,
          String.raw`$$\therefore\; x\ \text{-এর সহগ}=-1$$`,
        ],
        answer: String.raw`ঘ) $-1$`,
      },
    },
    {
      id: 5,
      group: QUAD_MCQ,
      question: String.raw`$x^{2}-(a+b)x+ab=0$ সমীকরণের সমাধান সেট নিচের কোনটি?
ক) $\{a,\,b\}$  খ) $\{a,\,-b\}$  গ) $\{-a,\,b\}$  ঘ) $\{-a,\,-b\}$`,
      solution: {
        steps: [
          String.raw`$$x^{2}-(a+b)x+ab=0$$`,
          String.raw`$$\text{or, }x^{2}-ax-bx+ab=0$$`,
          String.raw`$$\text{or, }x(x-a)-b(x-a)=0$$`,
          String.raw`$$\text{or, }(x-a)(x-b)=0$$`,
          String.raw`$$\therefore\; x=a\ \text{অথবা}\ x=b$$`,
        ],
        answer: String.raw`ক) $\{a,\,b\}$`,
      },
    },

    // ─────────────── সমাধান করো (6 – 12) ───────────────
    {
      id: 6,
      group: QUAD_SOLVE,
      question: String.raw`$$(y+5)(y-5)=24$$`,
      solution: {
        steps: [
          String.raw`$$(y+5)(y-5)=24$$`,
          String.raw`$$\text{or, }y^{2}-25=24\qquad\left[\,a^{2}-b^{2}=(a+b)(a-b)\,\right]$$`,
          String.raw`$$\text{or, }y^{2}-49=0$$`,
          String.raw`$$\text{or, }(y+7)(y-7)=0$$`,
          String.raw`$$\therefore\; y+7=0\ \text{অথবা}\ y-7=0$$`,
          String.raw`$$\therefore\; y=-7\ \text{অথবা}\ y=7$$`,
        ],
        answer: String.raw`$y=7$ অথবা $y=-7$`,
      },
    },
    {
      id: 7,
      group: QUAD_SOLVE,
      question: String.raw`$$\left(\sqrt{2}\,x+3\right)\left(\sqrt{3}\,x-2\right)=0$$`,
      solution: {
        steps: [
          String.raw`$$\left(\sqrt{2}\,x+3\right)\left(\sqrt{3}\,x-2\right)=0$$`,
          String.raw`$$\therefore\;\sqrt{2}\,x+3=0\ \text{অথবা}\ \sqrt{3}\,x-2=0$$`,
          String.raw`$$\sqrt{2}\,x+3=0\ \text{হলে},\ \sqrt{2}\,x=-3$$`,
          String.raw`$$\therefore\; x=-\frac{3}{\sqrt{2}}=-\frac{3\sqrt{2}}{2}$$`,
          String.raw`$$\text{আবার, }\sqrt{3}\,x-2=0\ \text{হলে},\ \sqrt{3}\,x=2$$`,
          String.raw`$$\therefore\; x=\frac{2}{\sqrt{3}}=\frac{2\sqrt{3}}{3}$$`,
        ],
        answer: String.raw`$x=-\dfrac{3\sqrt{2}}{2}$ অথবা $x=\dfrac{2\sqrt{3}}{3}$`,
      },
    },
    {
      id: 8,
      group: QUAD_SOLVE,
      question: String.raw`$$2\left(z^{2}-9\right)+9z=0$$`,
      solution: {
        steps: [
          String.raw`$$2\left(z^{2}-9\right)+9z=0$$`,
          String.raw`$$\text{or, }2z^{2}-18+9z=0$$`,
          String.raw`$$\text{or, }2z^{2}+9z-18=0$$`,
          String.raw`$$\text{or, }2z^{2}+12z-3z-18=0$$`,
          String.raw`$$\text{or, }2z(z+6)-3(z+6)=0$$`,
          String.raw`$$\text{or, }(z+6)(2z-3)=0$$`,
          String.raw`$$\therefore\; z+6=0\ \text{অথবা}\ 2z-3=0$$`,
          String.raw`$$\therefore\; z=-6\ \text{অথবা}\ z=\frac{3}{2}$$`,
        ],
        answer: String.raw`$z=-6$ অথবা $z=\dfrac{3}{2}$`,
      },
    },
    {
      id: 9,
      group: QUAD_SOLVE,
      question: String.raw`$$\frac{3}{2z+1}+\frac{4}{5z-1}=2$$`,
      solution: {
        steps: [
          String.raw`$$\frac{3}{2z+1}+\frac{4}{5z-1}=2$$`,
          String.raw`$$\text{or, }\frac{3(5z-1)+4(2z+1)}{(2z+1)(5z-1)}=2$$`,
          String.raw`$$\text{or, }\frac{15z-3+8z+4}{10z^{2}+3z-1}=2$$`,
          String.raw`$$\text{or, }23z+1=2\left(10z^{2}+3z-1\right)$$`,
          String.raw`$$\text{or, }23z+1=20z^{2}+6z-2$$`,
          String.raw`$$\text{or, }20z^{2}-17z-3=0$$`,
          String.raw`$$\text{or, }20z^{2}-20z+3z-3=0$$`,
          String.raw`$$\text{or, }20z(z-1)+3(z-1)=0$$`,
          String.raw`$$\text{or, }(z-1)(20z+3)=0$$`,
          String.raw`$$\therefore\; z=1\ \text{অথবা}\ z=-\frac{3}{20}$$`,
        ],
        answer: String.raw`$z=1$ অথবা $z=-\dfrac{3}{20}$`,
      },
    },
    {
      id: 10,
      group: QUAD_SOLVE,
      question: String.raw`$$\frac{x-2}{x+2}+\frac{6(x-2)}{x-6}=1$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x-2}{x+2}+\frac{6(x-2)}{x-6}=1$$`,
          String.raw`উভয় পক্ষকে $(x+2)(x-6)$ দিয়ে গুণ করি।`,
          String.raw`$$\text{or, }(x-2)(x-6)+6(x-2)(x+2)=(x+2)(x-6)$$`,
          String.raw`$$\text{or, }x^{2}-8x+12+6\left(x^{2}-4\right)=x^{2}-4x-12$$`,
          String.raw`$$\text{or, }x^{2}-8x+12+6x^{2}-24=x^{2}-4x-12$$`,
          String.raw`$$\text{or, }7x^{2}-8x-12=x^{2}-4x-12$$`,
          String.raw`$$\text{or, }6x^{2}-4x=0$$`,
          String.raw`$$\text{or, }2x(3x-2)=0$$`,
          String.raw`$$\therefore\; x=0\ \text{অথবা}\ x=\frac{2}{3}$$`,
          String.raw`দুইটি মানেই $x+2$ ও $x-6$ শূন্য নয়, তাই দুইটিই গ্রহণযোগ্য।`,
        ],
        answer: String.raw`$x=0$ অথবা $x=\dfrac{2}{3}$`,
      },
    },
    {
      id: 11,
      group: QUAD_SOLVE,
      question: String.raw`$$\frac{x}{a}+\frac{a}{x}=\frac{x}{b}+\frac{b}{x}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x}{a}+\frac{a}{x}=\frac{x}{b}+\frac{b}{x}$$`,
          String.raw`$$\text{or, }\frac{x}{a}-\frac{x}{b}=\frac{b}{x}-\frac{a}{x}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }x\left(\frac{b-a}{ab}\right)=\frac{b-a}{x}$$`,
          String.raw`$$\text{or, }\frac{x}{ab}=\frac{1}{x}\qquad\left[\,a\neq b\ \text{তাই}\ b-a\neq 0\,\right]$$`,
          String.raw`$$\text{or, }x^{2}=ab$$`,
          String.raw`$$\therefore\; x=\pm\sqrt{ab}$$`,
        ],
        answer: String.raw`$x=\sqrt{ab}$ অথবা $x=-\sqrt{ab}$`,
      },
    },
    {
      id: 12,
      group: QUAD_SOLVE,
      question: String.raw`$$\frac{x-a}{x-b}+\frac{x-b}{x-a}=\frac{a}{b}+\frac{b}{a}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x-a}{x-b}+\frac{x-b}{x-a}=\frac{a}{b}+\frac{b}{a}$$`,
          String.raw`উভয় পক্ষ থেকে $2$ বিয়োগ করি।`,
          String.raw`$$\text{or, }\frac{x-a}{x-b}+\frac{x-b}{x-a}-2=\frac{a}{b}+\frac{b}{a}-2$$`,
          String.raw`$$\text{or, }\frac{\{(x-a)-(x-b)\}^{2}}{(x-a)(x-b)}=\frac{(a-b)^{2}}{ab}\qquad\left[\,\frac{p}{q}+\frac{q}{p}-2=\frac{(p-q)^{2}}{pq}\,\right]$$`,
          String.raw`$$\text{or, }\frac{(b-a)^{2}}{(x-a)(x-b)}=\frac{(a-b)^{2}}{ab}$$`,
          String.raw`$$\text{or, }\frac{1}{(x-a)(x-b)}=\frac{1}{ab}\qquad\left[\,(b-a)^{2}=(a-b)^{2}\neq 0\,\right]$$`,
          String.raw`$$\text{or, }(x-a)(x-b)=ab$$`,
          String.raw`$$\text{or, }x^{2}-(a+b)x+ab=ab$$`,
          String.raw`$$\text{or, }x^{2}-(a+b)x=0$$`,
          String.raw`$$\text{or, }x\{x-(a+b)\}=0$$`,
          String.raw`$$\therefore\; x=0\ \text{অথবা}\ x=a+b$$`,
        ],
        answer: String.raw`$x=0$ অথবা $x=a+b$`,
      },
    },

    // ─────────────── সমাধান সেট নির্ণয় করো (13 – 17) ───────────────
    {
      id: 13,
      group: QUAD_SET,
      question: String.raw`$$\frac{3}{x}+\frac{4}{x+1}=2$$`,
      solution: {
        steps: [
          String.raw`$$\frac{3}{x}+\frac{4}{x+1}=2$$`,
          String.raw`$$\text{or, }\frac{3(x+1)+4x}{x(x+1)}=2$$`,
          String.raw`$$\text{or, }\frac{7x+3}{x^{2}+x}=2$$`,
          String.raw`$$\text{or, }7x+3=2x^{2}+2x$$`,
          String.raw`$$\text{or, }2x^{2}-5x-3=0$$`,
          String.raw`$$\text{or, }2x^{2}-6x+x-3=0$$`,
          String.raw`$$\text{or, }2x(x-3)+1(x-3)=0$$`,
          String.raw`$$\text{or, }(x-3)(2x+1)=0$$`,
          String.raw`$$\therefore\; x=3\ \text{অথবা}\ x=-\frac{1}{2}$$`,
        ],
        answer: String.raw`$S=\left\{\,3,\;-\dfrac{1}{2}\,\right\}$`,
      },
    },
    {
      id: 14,
      group: QUAD_SET,
      question: String.raw`$$\frac{x+7}{x+1}+\frac{2x+6}{2x+1}=5$$`,
      solution: {
        steps: [
          String.raw`$$\frac{x+7}{x+1}+\frac{2x+6}{2x+1}=5$$`,
          String.raw`$$\text{or, }\left(1+\frac{6}{x+1}\right)+\left(1+\frac{5}{2x+1}\right)=5$$`,
          String.raw`$$\text{or, }\frac{6}{x+1}+\frac{5}{2x+1}=3$$`,
          String.raw`$$\text{or, }\frac{6(2x+1)+5(x+1)}{(x+1)(2x+1)}=3$$`,
          String.raw`$$\text{or, }\frac{17x+11}{2x^{2}+3x+1}=3$$`,
          String.raw`$$\text{or, }17x+11=6x^{2}+9x+3$$`,
          String.raw`$$\text{or, }6x^{2}-8x-8=0$$`,
          String.raw`$$\text{or, }3x^{2}-4x-4=0\qquad\left[\,2\ \text{দিয়ে ভাগ করে}\,\right]$$`,
          String.raw`$$\text{or, }3x^{2}-6x+2x-4=0$$`,
          String.raw`$$\text{or, }3x(x-2)+2(x-2)=0$$`,
          String.raw`$$\text{or, }(x-2)(3x+2)=0$$`,
          String.raw`$$\therefore\; x=2\ \text{অথবা}\ x=-\frac{2}{3}$$`,
        ],
        answer: String.raw`$S=\left\{\,2,\;-\dfrac{2}{3}\,\right\}$`,
      },
    },
    {
      id: 15,
      group: QUAD_SET,
      question: String.raw`$$\frac{1}{x}+\frac{1}{a}+\frac{1}{b}=\frac{1}{x+a+b}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1}{x}+\frac{1}{a}+\frac{1}{b}=\frac{1}{x+a+b}$$`,
          String.raw`$$\text{or, }\frac{1}{x}-\frac{1}{x+a+b}=-\frac{1}{a}-\frac{1}{b}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
          String.raw`$$\text{or, }\frac{x+a+b-x}{x(x+a+b)}=-\frac{a+b}{ab}$$`,
          String.raw`$$\text{or, }\frac{a+b}{x(x+a+b)}=-\frac{a+b}{ab}$$`,
          String.raw`$$\text{or, }\frac{1}{x(x+a+b)}=-\frac{1}{ab}\qquad\left[\,a+b\neq 0\,\right]$$`,
          String.raw`$$\text{or, }x(x+a+b)=-ab$$`,
          String.raw`$$\text{or, }x^{2}+(a+b)x+ab=0$$`,
          String.raw`$$\text{or, }x^{2}+ax+bx+ab=0$$`,
          String.raw`$$\text{or, }x(x+a)+b(x+a)=0$$`,
          String.raw`$$\text{or, }(x+a)(x+b)=0$$`,
          String.raw`$$\therefore\; x=-a\ \text{অথবা}\ x=-b$$`,
        ],
        answer: String.raw`$S=\{\,-a,\;-b\,\}$`,
      },
    },
    {
      id: 16,
      group: QUAD_SET,
      question: String.raw`$$x+\frac{1}{x}=2$$`,
      solution: {
        steps: [
          String.raw`$$x+\frac{1}{x}=2$$`,
          String.raw`$$\text{or, }\frac{x^{2}+1}{x}=2$$`,
          String.raw`$$\text{or, }x^{2}+1=2x$$`,
          String.raw`$$\text{or, }x^{2}-2x+1=0$$`,
          String.raw`$$\text{or, }(x-1)^{2}=0$$`,
          String.raw`$$\therefore\; x=1,\;1$$`,
          String.raw`মূল দুইটি সমান, তাই সমাধান সেটে উপাদান একটিই।`,
        ],
        answer: String.raw`$S=\{1\}$`,
      },
    },
    {
      id: 17,
      group: QUAD_SET,
      question: String.raw`$$\frac{(x+1)^{3}-(x-1)^{3}}{(x+1)^{2}-(x-1)^{2}}=2$$`,
      solution: {
        steps: [
          String.raw`$$\text{লব}=(x+1)^{3}-(x-1)^{3}$$`,
          String.raw`$$=\{(x+1)-(x-1)\}\left\{(x+1)^{2}+(x+1)(x-1)+(x-1)^{2}\right\}$$`,
          String.raw`$$=2\left\{\left(x^{2}+2x+1\right)+\left(x^{2}-1\right)+\left(x^{2}-2x+1\right)\right\}=2\left(3x^{2}+1\right)$$`,
          String.raw`$$\text{হর}=(x+1)^{2}-(x-1)^{2}=\{(x+1)+(x-1)\}\{(x+1)-(x-1)\}=2x\times 2=4x$$`,
          String.raw`$$\therefore\;\frac{2\left(3x^{2}+1\right)}{4x}=2$$`,
          String.raw`$$\text{or, }\frac{3x^{2}+1}{2x}=2$$`,
          String.raw`$$\text{or, }3x^{2}+1=4x$$`,
          String.raw`$$\text{or, }3x^{2}-4x+1=0$$`,
          String.raw`$$\text{or, }3x^{2}-3x-x+1=0$$`,
          String.raw`$$\text{or, }3x(x-1)-1(x-1)=0$$`,
          String.raw`$$\text{or, }(x-1)(3x-1)=0$$`,
          String.raw`$$\therefore\; x=1\ \text{অথবা}\ x=\frac{1}{3}$$`,
        ],
        answer: String.raw`$S=\left\{\,1,\;\dfrac{1}{3}\,\right\}$`,
      },
    },

    // ─────────────── সমীকরণ গঠন করে সমাধান করো (18 – 26) ───────────────
    {
      id: 18,
      group: QUAD_FORM,
      question: String.raw`দুই অঙ্কবিশিষ্ট কোনো সংখ্যার অঙ্কদ্বয়ের সমষ্টি $15$ এবং এদের গুণফল $56$; সংখ্যাটি কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, একটি অঙ্ক $x$; অতএব অপর অঙ্কটি $15-x$।`,
          String.raw`$$\text{প্রশ্নমতে, }x(15-x)=56$$`,
          String.raw`$$\text{or, }15x-x^{2}=56$$`,
          String.raw`$$\text{or, }x^{2}-15x+56=0$$`,
          String.raw`$$\text{or, }x^{2}-7x-8x+56=0$$`,
          String.raw`$$\text{or, }x(x-7)-8(x-7)=0$$`,
          String.raw`$$\text{or, }(x-7)(x-8)=0$$`,
          String.raw`$$\therefore\; x=7\ \text{অথবা}\ x=8$$`,
          String.raw`$x=7$ হলে অপর অঙ্কটি $8$, আবার $x=8$ হলে অপর অঙ্কটি $7$ — দুই ক্ষেত্রেই অঙ্ক দুইটি $7$ ও $8$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=78\ \text{অথবা}\ 87$$`,
        ],
        answer: String.raw`সংখ্যাটি $78$ অথবা $87$`,
      },
    },
    {
      id: 19,
      group: QUAD_FORM,
      figure: "52-p19",
      question: String.raw`একটি আয়তাকার ঘরের মেঝের ক্ষেত্রফল $192$ বর্গমিটার। মেঝের দৈর্ঘ্য $4$ মিটার কমালে ও প্রস্থ $4$ মিটার বাড়ালে ক্ষেত্রফল অপরিবর্তিত থাকে। মেঝের দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, মেঝের দৈর্ঘ্য $x$ মিটার; অতএব প্রস্থ $\dfrac{192}{x}$ মিটার।`,
          String.raw`দৈর্ঘ্য $4$ মিটার কমালে দৈর্ঘ্য হয় $(x-4)$ মিটার এবং প্রস্থ $4$ মিটার বাড়ালে প্রস্থ হয় $\left(\dfrac{192}{x}+4\right)$ মিটার।`,
          String.raw`$$\text{প্রশ্নমতে, }(x-4)\left(\frac{192}{x}+4\right)=192$$`,
          String.raw`$$\text{or, }192+4x-\frac{768}{x}-16=192$$`,
          String.raw`$$\text{or, }4x-\frac{768}{x}-16=0$$`,
          String.raw`$$\text{or, }4x^{2}-16x-768=0\qquad\left[\,\text{উভয় পক্ষকে }x\text{ দিয়ে গুণ করে}\,\right]$$`,
          String.raw`$$\text{or, }x^{2}-4x-192=0\qquad\left[\,4\ \text{দিয়ে ভাগ করে}\,\right]$$`,
          String.raw`$$\text{or, }x^{2}-16x+12x-192=0$$`,
          String.raw`$$\text{or, }x(x-16)+12(x-16)=0$$`,
          String.raw`$$\text{or, }(x-16)(x+12)=0$$`,
          String.raw`$$\therefore\; x=16\ \text{অথবা}\ x=-12$$`,
          String.raw`কিন্তু দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x\neq -12$।`,
          String.raw`$$\therefore\; x=16\quad\text{এবং প্রস্থ}=\frac{192}{16}=12$$`,
          String.raw`পরীক্ষা: $(16-4)\times(12+4)=12\times 16=192$ বর্গমিটার।`,
        ],
        answer: String.raw`দৈর্ঘ্য $16$ মিটার ও প্রস্থ $12$ মিটার`,
      },
    },
    {
      id: 20,
      group: QUAD_FORM,
      figure: "52-p20",
      question: String.raw`একটি সমকোণী ত্রিভুজের অতিভুজের দৈর্ঘ্য $15$ সে.মি. ও অপর বাহুদ্বয়ের দৈর্ঘ্যের অন্তর $3$ সে.মি.। ঐ বাহুদ্বয়ের দৈর্ঘ্য নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, বড় বাহুটির দৈর্ঘ্য $x$ সে.মি.; অতএব ছোট বাহুটির দৈর্ঘ্য $(x-3)$ সে.মি.।`,
          String.raw`$$\text{পিথাগোরাসের সূত্রানুসারে, }x^{2}+(x-3)^{2}=15^{2}$$`,
          String.raw`$$\text{or, }x^{2}+x^{2}-6x+9=225$$`,
          String.raw`$$\text{or, }2x^{2}-6x-216=0$$`,
          String.raw`$$\text{or, }x^{2}-3x-108=0\qquad\left[\,2\ \text{দিয়ে ভাগ করে}\,\right]$$`,
          String.raw`$$\text{or, }x^{2}-12x+9x-108=0$$`,
          String.raw`$$\text{or, }x(x-12)+9(x-12)=0$$`,
          String.raw`$$\text{or, }(x-12)(x+9)=0$$`,
          String.raw`$$\therefore\; x=12\ \text{অথবা}\ x=-9$$`,
          String.raw`কিন্তু বাহুর দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x\neq -9$।`,
          String.raw`$$\therefore\; x=12\quad\text{এবং অপর বাহু}=12-3=9$$`,
          String.raw`পরীক্ষা: $12^{2}+9^{2}=144+81=225=15^{2}$।`,
        ],
        answer: String.raw`বাহুদ্বয়ের দৈর্ঘ্য $12$ সে.মি. ও $9$ সে.মি.`,
      },
    },
    {
      id: 21,
      group: QUAD_FORM,
      figure: "52-p21",
      question: String.raw`একটি ত্রিভুজের ভূমি তার উচ্চতার দ্বিগুণ অপেক্ষা $6$ সে.মি. বেশি। ত্রিভুজ ক্ষেত্রটির ক্ষেত্রফল $810$ বর্গ সে.মি. হলে, এর উচ্চতা কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ত্রিভুজটির উচ্চতা $x$ সে.মি.; অতএব ভূমি $(2x+6)$ সে.মি.।`,
          String.raw`$$\text{প্রশ্নমতে, }\frac{1}{2}(2x+6)\cdot x=810$$`,
          String.raw`$$\text{or, }(x+3)x=810$$`,
          String.raw`$$\text{or, }x^{2}+3x-810=0$$`,
          String.raw`$$\text{or, }x^{2}+30x-27x-810=0$$`,
          String.raw`$$\text{or, }x(x+30)-27(x+30)=0$$`,
          String.raw`$$\text{or, }(x+30)(x-27)=0$$`,
          String.raw`$$\therefore\; x=-30\ \text{অথবা}\ x=27$$`,
          String.raw`কিন্তু উচ্চতা ঋণাত্মক হতে পারে না, তাই $x\neq -30$।`,
          String.raw`$$\therefore\; x=27$$`,
          String.raw`পরীক্ষা: ভূমি $=2\times 27+6=60$ এবং ক্ষেত্রফল $=\dfrac{1}{2}\times 60\times 27=810$ বর্গ সে.মি.।`,
        ],
        answer: String.raw`উচ্চতা $27$ সে.মি.`,
      },
    },
    {
      id: 22,
      group: QUAD_FORM,
      question: String.raw`একটি শ্রেণিতে যতজন ছাত্র-ছাত্রী পড়ে প্রত্যেকে তার সহপাঠীর সংখ্যার সমান টাকা চাঁদা দেওয়ায় মোট $420$ টাকা চাঁদা উঠল। ঐ শ্রেণির ছাত্র-ছাত্রীর সংখ্যা কত এবং প্রত্যেকে কত টাকা করে চাঁদা দিল?`,
      solution: {
        steps: [
          String.raw`মনে করি, ঐ শ্রেণির ছাত্র-ছাত্রীর সংখ্যা $x$।`,
          String.raw`নিজেকে বাদ দিলে প্রত্যেকের সহপাঠীর সংখ্যা $(x-1)$, অতএব প্রত্যেকে $(x-1)$ টাকা করে চাঁদা দিল।`,
          String.raw`$$\text{প্রশ্নমতে, }x(x-1)=420$$`,
          String.raw`$$\text{or, }x^{2}-x-420=0$$`,
          String.raw`$$\text{or, }x^{2}-21x+20x-420=0$$`,
          String.raw`$$\text{or, }x(x-21)+20(x-21)=0$$`,
          String.raw`$$\text{or, }(x-21)(x+20)=0$$`,
          String.raw`$$\therefore\; x=21\ \text{অথবা}\ x=-20$$`,
          String.raw`কিন্তু ছাত্র-ছাত্রীর সংখ্যা ঋণাত্মক হতে পারে না, তাই $x\neq -20$।`,
          String.raw`$$\therefore\; x=21\quad\text{এবং প্রত্যেকের চাঁদা}=21-1=20\ \text{টাকা}$$`,
        ],
        answer: String.raw`ছাত্র-ছাত্রী $21$ জন, প্রত্যেকে $20$ টাকা করে`,
      },
    },
    {
      id: 23,
      group: QUAD_FORM,
      question: String.raw`একটি শ্রেণিতে যতজন ছাত্র-ছাত্রী পড়ে, প্রত্যেকে তত পয়সার চেয়ে আরও $30$ পয়সা বেশি করে চাঁদা দেওয়াতে মোট $70$ টাকা উঠল। ঐ শ্রেণির ছাত্র-ছাত্রীর সংখ্যা কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ঐ শ্রেণির ছাত্র-ছাত্রীর সংখ্যা $x$; অতএব প্রত্যেকে $(x+30)$ পয়সা করে চাঁদা দিল।`,
          String.raw`$$70\ \text{টাকা}=70\times 100=7000\ \text{পয়সা}$$`,
          String.raw`$$\text{প্রশ্নমতে, }x(x+30)=7000$$`,
          String.raw`$$\text{or, }x^{2}+30x-7000=0$$`,
          String.raw`$$\text{or, }x^{2}+100x-70x-7000=0$$`,
          String.raw`$$\text{or, }x(x+100)-70(x+100)=0$$`,
          String.raw`$$\text{or, }(x+100)(x-70)=0$$`,
          String.raw`$$\therefore\; x=-100\ \text{অথবা}\ x=70$$`,
          String.raw`কিন্তু ছাত্র-ছাত্রীর সংখ্যা ঋণাত্মক হতে পারে না, তাই $x\neq -100$।`,
          String.raw`$$\therefore\; x=70$$`,
          String.raw`পরীক্ষা: $70\times(70+30)=7000$ পয়সা $=70$ টাকা।`,
        ],
        answer: String.raw`ছাত্র-ছাত্রীর সংখ্যা $70$ জন`,
      },
    },
    {
      id: 24,
      group: QUAD_FORM,
      question: String.raw`দৃশ্যকল্প ১: দুই অঙ্কবিশিষ্ট একটি সংখ্যার অঙ্কদ্বয়ের সমষ্টি $7$; অঙ্কদ্বয়ের স্থান বিনিময় করলে যে সংখ্যা পাওয়া যায় তা প্রদত্ত সংখ্যা থেকে $9$ বেশি।
দৃশ্যকল্প ২: করিম সাহেব $6400$ টাকার কিছু টাকা বিনিয়োগ করেন বার্ষিক $8\%$ মুনাফায় এবং বার্ষিক $9\%$ মুনাফায় অবশিষ্ট টাকা বিনিয়োগ করেন। $2$ বছর পরে তিনি $1092$ টাকা মুনাফা পান।`,
      parts: [
        {
          label: "ক",
          question: String.raw`সমাধান সেট নির্ণয় করো: $$\frac{3}{x}+\frac{4}{x+1}=2$$`,
          solution: {
            steps: [
              String.raw`$$\frac{3}{x}+\frac{4}{x+1}=2$$`,
              String.raw`$$\text{or, }\frac{3(x+1)+4x}{x(x+1)}=2$$`,
              String.raw`$$\text{or, }\frac{7x+3}{x^{2}+x}=2$$`,
              String.raw`$$\text{or, }7x+3=2x^{2}+2x$$`,
              String.raw`$$\text{or, }2x^{2}-5x-3=0$$`,
              String.raw`$$\text{or, }2x^{2}-6x+x-3=0$$`,
              String.raw`$$\text{or, }2x(x-3)+1(x-3)=0$$`,
              String.raw`$$\text{or, }(x-3)(2x+1)=0$$`,
              String.raw`$$\therefore\; x=3\ \text{অথবা}\ x=-\frac{1}{2}$$`,
            ],
            answer: String.raw`$S=\left\{\,3,\;-\dfrac{1}{2}\,\right\}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দৃশ্যকল্প ১-এর দুই অঙ্কবিশিষ্ট সংখ্যাটি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, দশক স্থানীয় অঙ্কটি $x$; অতএব একক স্থানীয় অঙ্কটি $7-x$।`,
              String.raw`$$\therefore\;\text{সংখ্যাটি}=10x+(7-x)=9x+7$$`,
              String.raw`$$\text{স্থান বিনিময়ে সংখ্যাটি}=10(7-x)+x=70-9x$$`,
              String.raw`$$\text{প্রশ্নমতে, }70-9x=(9x+7)+9$$`,
              String.raw`$$\text{or, }70-9x=9x+16$$`,
              String.raw`$$\text{or, }-18x=-54$$`,
              String.raw`$$\therefore\; x=3$$`,
              String.raw`$$\therefore\;\text{সংখ্যাটি}=9\times 3+7=34$$`,
              String.raw`পরীক্ষা: স্থান বিনিময়ে সংখ্যাটি $43$, আর $43-34=9$।`,
            ],
            answer: String.raw`সংখ্যাটি $34$`,
          },
        },
        {
          label: "গ",
          question: String.raw`দৃশ্যকল্প ২-এ বার্ষিক $8\%$ ও $9\%$ মুনাফায় বিনিয়োগ করা মূলধনের অনুপাত নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, তিনি $8\%$ মুনাফায় $x$ টাকা বিনিয়োগ করেন; অতএব $9\%$ মুনাফায় বিনিয়োগ করেন $(6400-x)$ টাকা।`,
              String.raw`$$x\ \text{টাকার }2\ \text{বছরের মুনাফা}=\frac{x\times 8\times 2}{100}=\frac{16x}{100}\ \text{টাকা}$$`,
              String.raw`$$(6400-x)\ \text{টাকার }2\ \text{বছরের মুনাফা}=\frac{(6400-x)\times 9\times 2}{100}=\frac{18(6400-x)}{100}\ \text{টাকা}$$`,
              String.raw`$$\text{প্রশ্নমতে, }\frac{16x}{100}+\frac{18(6400-x)}{100}=1092$$`,
              String.raw`$$\text{or, }16x+115200-18x=109200$$`,
              String.raw`$$\text{or, }-2x=-6000$$`,
              String.raw`$$\therefore\; x=3000$$`,
              String.raw`$$\therefore\;9\%\ \text{মুনাফায় বিনিয়োগ}=6400-3000=3400\ \text{টাকা}$$`,
              String.raw`$$\therefore\;\text{নির্ণেয় অনুপাত}=3000:3400=15:17$$`,
            ],
            answer: String.raw`$15:17$`,
          },
        },
      ],
    },
    {
      id: 25,
      group: QUAD_FORM,
      question: String.raw`নাবিলের বয়স যখন শুভর বর্তমান বয়সের সমান ছিল তখন শুভর যে বয়স ছিল নাবিলের বর্তমান বয়স তার দ্বিগুণ। শুভর বয়স যখন নাবিলের বর্তমান বয়সের সমান হবে তখন তাদের দুইজনের বয়সের যোগফল $63$ হলে প্রত্যেকের বর্তমান বয়স কত?`,
      solution: {
        steps: [
          String.raw`শর্ত থেকে বোঝা যায় নাবিল শুভর চেয়ে বড়। মনে করি, নাবিলের বর্তমান বয়স $n$ বছর এবং তাদের বয়সের পার্থক্য $x$ বছর; অতএব শুভর বর্তমান বয়স $(n-x)$ বছর।`,
          String.raw`নাবিলের বয়স শুভর বর্তমান বয়সের সমান অর্থাৎ $(n-x)$ ছিল $x$ বছর আগে; তখন শুভর বয়স ছিল $(n-x)-x=n-2x$ বছর।`,
          String.raw`$$\text{প্রথম শর্তমতে, }n=2(n-2x)$$`,
          String.raw`$$\text{or, }n=2n-4x$$`,
          String.raw`$$\therefore\; n=4x\qquad\cdots(1)$$`,
          String.raw`শুভর বয়স নাবিলের বর্তমান বয়স $n$-এর সমান হবে $x$ বছর পরে; তখন নাবিলের বয়স হবে $(n+x)$ বছর।`,
          String.raw`$$\text{দ্বিতীয় শর্তমতে, }n+(n+x)=63$$`,
          String.raw`$$\text{or, }2n+x=63$$`,
          String.raw`$$\text{or, }2\cdot 4x+x=63\qquad\left[\,(1)\ \text{হতে}\,\right]$$`,
          String.raw`$$\text{or, }9x=63$$`,
          String.raw`$$\therefore\; x=7$$`,
          String.raw`$$\therefore\; n=4\times 7=28\quad\text{এবং শুভর বয়স}=28-7=21$$`,
          String.raw`পরীক্ষা: $7$ বছর আগে নাবিল ছিল $21$ ও শুভ ছিল $14$, আর $28=2\times 14$। আবার $7$ বছর পরে শুভ হবে $28$ ও নাবিল হবে $35$, যাদের যোগফল $63$।`,
        ],
        answer: String.raw`নাবিলের বর্তমান বয়স $28$ বছর ও শুভর বর্তমান বয়স $21$ বছর`,
      },
    },
    {
      id: 26,
      group: QUAD_FORM,
      question: String.raw`বাসে ওঠার লাইনে সোহাগের পিছনে যতজন দাঁড়িয়ে আছে সামনে তার থেকে দুইজন বেশি দাঁড়িয়ে আছে। তার পিছনে যতজন দাঁড়িয়ে আছে সম্পূর্ণ লাইনে তার তিনগুণ যাত্রী। লাইনে কতজন যাত্রী দাঁড়িয়ে আছে?`,
      solution: {
        steps: [
          String.raw`মনে করি, সোহাগের পিছনে $x$ জন দাঁড়িয়ে আছে; অতএব তার সামনে দাঁড়িয়ে আছে $(x+2)$ জন।`,
          String.raw`$$\therefore\;\text{সম্পূর্ণ লাইনে যাত্রী}=x+(x+2)+1=2x+3\ \text{জন}$$`,
          String.raw`$$\text{প্রশ্নমতে, }2x+3=3x$$`,
          String.raw`$$\text{or, }3x-2x=3$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$$\therefore\;\text{লাইনে মোট যাত্রী}=3\times 3=9\ \text{জন}$$`,
          String.raw`পরীক্ষা: পিছনে $3$ জন, সামনে $5$ জন ও সোহাগ নিজে — মোট $9$ জন।`,
        ],
        answer: String.raw`লাইনে $9$ জন যাত্রী দাঁড়িয়ে আছে`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — বইয়ের পৃষ্ঠা ১০৯ – ১১০ ───────────────
    {
      id: 27,
      group: MODEL5_MCQ,
      question: String.raw`$(x-4)^{2}=0$ সমীকরণের মূল কয়টি?
ক) $1$টি  খ) $2$টি  গ) $3$টি  ঘ) $4$টি`,
      solution: {
        steps: [
          String.raw`$$(x-4)^{2}=0$$`,
          String.raw`$$\text{or, }(x-4)(x-4)=0$$`,
          String.raw`$$\therefore\; x=4,\;4$$`,
          String.raw`সমীকরণটির ঘাত $2$, তাই মূলও $2$টি — এখানে মূল দুইটি সমান।`,
        ],
        answer: String.raw`খ) $2$টি`,
      },
    },
    {
      id: 28,
      group: MODEL5_MCQ,
      question: String.raw`দুইটি বীজগাণিতিক রাশি $x$ ও $y$ এর গুণফল $xy=0$ হলে —
$(i)$ $x=0$ অথবা $y=0$   $(ii)$ $x=0$, যখন $y\neq 0$   $(iii)$ $y=0$, যখন $x\neq 0$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$(i)$ শূন্য গুণফলের ধর্মই বলে $xy=0$ হলে $x=0$ বা $y=0$ — সঠিক।`,
          String.raw`$(ii)$ $y\neq 0$ হলে $xy=0$ সমীকরণকে $y$ দিয়ে ভাগ করা যায়, তাতে $x=0$ পাওয়া যায় — সঠিক।`,
          String.raw`$(iii)$ একইভাবে $x\neq 0$ হলে $y=0$ হতেই হবে — সঠিক।`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },
    {
      id: 29,
      group: MODEL5_MCQ,
      question: String.raw`দুই অঙ্কবিশিষ্ট একটি সংখ্যার দশক স্থানীয় অঙ্ক একক স্থানীয় অঙ্কের দ্বিগুণ। সংখ্যাটির একক স্থানীয় অঙ্ক $x$। সংখ্যাটি কত?
ক) $2x$  খ) $3x$  গ) $12x$  ঘ) $21x$`,
      solution: {
        steps: [
          String.raw`একক স্থানীয় অঙ্ক $x$, অতএব দশক স্থানীয় অঙ্ক $2x$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10\times 2x+x=20x+x=21x$$`,
        ],
        answer: String.raw`ঘ) $21x$`,
      },
    },
    {
      id: 30,
      group: MODEL5_MCQ,
      question: String.raw`উপরের সংখ্যাটির অঙ্কদ্বয় স্থান বিনিময় করলে সংখ্যাটি কত হবে?
ক) $3x$  খ) $4x$  গ) $12x$  ঘ) $21x$`,
      solution: {
        steps: [
          String.raw`স্থান বিনিময়ে দশক স্থানীয় অঙ্ক হবে $x$ এবং একক স্থানীয় অঙ্ক হবে $2x$।`,
          String.raw`$$\therefore\;\text{নতুন সংখ্যাটি}=10\times x+2x=12x$$`,
        ],
        answer: String.raw`গ) $12x$`,
      },
    },
    {
      id: 31,
      group: MODEL5_CQ,
      question: String.raw`একটি জমির ক্ষেত্রফল $192$ বর্গমিটার। জমিটির দৈর্ঘ্য $4$ মিটার কমালে এবং প্রস্থ $4$ মিটার বাড়ালে ক্ষেত্রফল অপরিবর্তিত থাকে। আবার জমিটির মাঝখানে $20$ সে.মি. ব্যাসবিশিষ্ট একটি বৃত্ত আঁকা হলো। বৃত্তটির কেন্দ্র থেকে একটি জ্যা এর উপর অঙ্কিত লম্ব ঐ জ্যা এর অর্ধেকের চেয়ে $2$ সে.মি. কম।`,
      parts: [
        {
          label: "ক",
          question: String.raw`সমাধান করো: $$\frac{3x}{2}-\frac{5}{3}=\frac{2x}{3}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{3x}{2}-\frac{5}{3}=\frac{2x}{3}$$`,
              String.raw`$$\text{or, }\frac{3x}{2}-\frac{2x}{3}=\frac{5}{3}\qquad\left[\,\text{পক্ষান্তর করে}\,\right]$$`,
              String.raw`$$\text{or, }\frac{9x-4x}{6}=\frac{5}{3}$$`,
              String.raw`$$\text{or, }\frac{5x}{6}=\frac{5}{3}$$`,
              String.raw`$$\text{or, }15x=30\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
              String.raw`$$\therefore\; x=2$$`,
            ],
            answer: String.raw`$x=2$`,
          },
        },
        {
          label: "খ",
          figure: "52-p19",
          question: String.raw`জমিটির পরিসীমা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, জমিটির দৈর্ঘ্য $x$ মিটার; অতএব প্রস্থ $\dfrac{192}{x}$ মিটার।`,
              String.raw`$$\text{প্রশ্নমতে, }(x-4)\left(\frac{192}{x}+4\right)=192$$`,
              String.raw`$$\text{or, }192+4x-\frac{768}{x}-16=192$$`,
              String.raw`$$\text{or, }4x-\frac{768}{x}-16=0$$`,
              String.raw`$$\text{or, }4x^{2}-16x-768=0\qquad\left[\,\text{উভয় পক্ষকে }x\text{ দিয়ে গুণ করে}\,\right]$$`,
              String.raw`$$\text{or, }x^{2}-4x-192=0$$`,
              String.raw`$$\text{or, }x^{2}-16x+12x-192=0$$`,
              String.raw`$$\text{or, }(x-16)(x+12)=0$$`,
              String.raw`$$\therefore\; x=16\ \text{অথবা}\ x=-12$$`,
              String.raw`দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x=16$ এবং প্রস্থ $=\dfrac{192}{16}=12$ মিটার।`,
              String.raw`$$\therefore\;\text{পরিসীমা}=2(16+12)=2\times 28=56\ \text{মিটার}$$`,
            ],
            answer: String.raw`জমিটির পরিসীমা $56$ মিটার`,
          },
        },
        {
          label: "গ",
          question: String.raw`বৃত্তটির জ্যা এর দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{বৃত্তের ব্যাসার্ধ }r=\frac{20}{2}=10\ \text{সে.মি.}$$`,
              String.raw`মনে করি, জ্যা এর অর্ধেক $x$ সে.মি.; অতএব কেন্দ্র থেকে জ্যা এর উপর অঙ্কিত লম্বের দৈর্ঘ্য $(x-2)$ সে.মি.।`,
              String.raw`কেন্দ্র থেকে জ্যা এর উপর অঙ্কিত লম্ব জ্যাকে সমদ্বিখণ্ডিত করে, তাই ব্যাসার্ধ, লম্ব ও অর্ধ-জ্যা নিয়ে একটি সমকোণী ত্রিভুজ পাওয়া যায়।`,
              String.raw`$$\text{পিথাগোরাসের সূত্রানুসারে, }(x-2)^{2}+x^{2}=10^{2}$$`,
              String.raw`$$\text{or, }x^{2}-4x+4+x^{2}=100$$`,
              String.raw`$$\text{or, }2x^{2}-4x-96=0$$`,
              String.raw`$$\text{or, }x^{2}-2x-48=0\qquad\left[\,2\ \text{দিয়ে ভাগ করে}\,\right]$$`,
              String.raw`$$\text{or, }x^{2}-8x+6x-48=0$$`,
              String.raw`$$\text{or, }x(x-8)+6(x-8)=0$$`,
              String.raw`$$\text{or, }(x-8)(x+6)=0$$`,
              String.raw`$$\therefore\; x=8\ \text{অথবা}\ x=-6$$`,
              String.raw`দৈর্ঘ্য ঋণাত্মক হতে পারে না, তাই $x\neq -6$।`,
              String.raw`$$\therefore\; x=8\quad\text{এবং জ্যা এর দৈর্ঘ্য}=2\times 8=16\ \text{সে.মি.}$$`,
              String.raw`পরীক্ষা: লম্ব $=8-2=6$ এবং $6^{2}+8^{2}=36+64=100=10^{2}$।`,
            ],
            answer: String.raw`জ্যা এর দৈর্ঘ্য $16$ সে.মি.`,
          },
        },
      ],
    },
    {
      id: 32,
      group: MODEL5_SHORT,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন।`,
      parts: [
        {
          label: "ক",
          question: String.raw`সমাধান করো: $$\frac{1}{x+1}+\frac{1}{x+2}=\frac{2}{x+3}$$`,
          solution: {
            steps: [
              String.raw`$$\frac{1}{x+1}+\frac{1}{x+2}=\frac{2}{x+3}$$`,
              String.raw`$$\text{or, }\frac{x+2+x+1}{(x+1)(x+2)}=\frac{2}{x+3}$$`,
              String.raw`$$\text{or, }\frac{2x+3}{x^{2}+3x+2}=\frac{2}{x+3}$$`,
              String.raw`$$\text{or, }(2x+3)(x+3)=2\left(x^{2}+3x+2\right)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
              String.raw`$$\text{or, }2x^{2}+9x+9=2x^{2}+6x+4$$`,
              String.raw`$$\text{or, }9x-6x=4-9$$`,
              String.raw`$$\text{or, }3x=-5$$`,
              String.raw`$$\therefore\; x=-\frac{5}{3}$$`,
            ],
            answer: String.raw`$x=-\dfrac{5}{3}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`একটি ধনাত্মক পূর্ণসংখ্যা অপর একটি ধনাত্মক পূর্ণসংখ্যার $\dfrac{2}{5}$ অংশ থেকে $3$ বেশি হলে, সংখ্যাটি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, নির্ণেয় সংখ্যাটি $x$ এবং অপর ধনাত্মক পূর্ণসংখ্যাটি $y$।`,
              String.raw`$$\text{প্রশ্নমতে, }x=\frac{2y}{5}+3$$`,
              String.raw`$x$ পূর্ণসংখ্যা হতে হলে $y$-কে $5$ এর গুণিতক হতে হবে। $y=5k$ ধরলে $x=2k+3$, অর্থাৎ শর্তটি $k=1,2,3,\dots$ প্রতিটি মানেই সিদ্ধ হয়।`,
              String.raw`প্রশ্নে $y$ সম্পর্কে আর কোনো তথ্য নেই; সবচেয়ে ছোট মান $k=1$ নিলে $y=5$ ও $x=5$, অর্থাৎ সংখ্যা দুইটিই সমান। তাই শর্তটিকে "সংখ্যাটি নিজের $\dfrac{2}{5}$ অংশ থেকে $3$ বেশি" ধরে সমাধান করা হলো।`,
              String.raw`$$x=\frac{2x}{5}+3$$`,
              String.raw`$$\text{or, }x-\frac{2x}{5}=3$$`,
              String.raw`$$\text{or, }\frac{5x-2x}{5}=3$$`,
              String.raw`$$\text{or, }3x=15$$`,
              String.raw`$$\therefore\; x=5$$`,
              String.raw`পরীক্ষা: $5$ এর $\dfrac{2}{5}$ অংশ $=2$ এবং $2+3=5$।`,
            ],
            answer: String.raw`সংখ্যাটি $5$`,
          },
        },
        {
          label: "গ",
          question: String.raw`দুই অঙ্কবিশিষ্ট কোনো সংখ্যার অঙ্কদ্বয়ের সমষ্টি $7$ এবং গুণফল $10$ হলে, সংখ্যাটি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, একটি অঙ্ক $x$; অতএব অপর অঙ্কটি $7-x$।`,
              String.raw`$$\text{প্রশ্নমতে, }x(7-x)=10$$`,
              String.raw`$$\text{or, }7x-x^{2}=10$$`,
              String.raw`$$\text{or, }x^{2}-7x+10=0$$`,
              String.raw`$$\text{or, }x^{2}-2x-5x+10=0$$`,
              String.raw`$$\text{or, }x(x-2)-5(x-2)=0$$`,
              String.raw`$$\text{or, }(x-2)(x-5)=0$$`,
              String.raw`$$\therefore\; x=2\ \text{অথবা}\ x=5$$`,
              String.raw`$x=2$ হলে অপর অঙ্কটি $5$, আবার $x=5$ হলে অপর অঙ্কটি $2$ — দুই ক্ষেত্রেই অঙ্ক দুইটি $2$ ও $5$।`,
              String.raw`$$\therefore\;\text{সংখ্যাটি}=25\ \text{অথবা}\ 52$$`,
            ],
            answer: String.raw`সংখ্যাটি $25$ অথবা $52$`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ১৩ — সসীম ধারা
// ─────────────────────────────────────────────────────────────────────────────

const SR_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const SR_TERM = "সাধারণ পদ ও পদসংখ্যা (৫ – ৮)";
const SR_SUM = "ধারার সমষ্টি নির্ণয় (৯ – ১৪)";
const SR_FIND = "সমষ্টি থেকে পদসংখ্যা ও ধারা (১৫ – ২০)";
const SR_PROOF = "প্রমাণ ও প্রয়োগ (২১ – ২৪)";

const exercise131: Exercise = {
  id: "13.1",
  bnId: "অনুশীলনী ১৩.১",
  title: "সমান্তর ধারা",
  bookPages: "২৫৫ – ২৫৬",
  formulas: [
    {
      title: "অনুক্রম ও ধারা",
      formulas: [
        {
          statement: String.raw`$$\{2n\}=2,\;4,\;6,\;8,\;\cdots$$`,
          note: String.raw`কতগুলো রাশি একটি নির্দিষ্ট নিয়মে পরপর সাজানো হলে সেই সেটকে অনুক্রম বলে। নিয়মটি $f(n)$ আকারে লেখা হয় এবং $n$ তম রাশিটিই অনুক্রমের সাধারণ পদ।`,
        },
        {
          statement: String.raw`$$1+3+5+7+\cdots$$`,
          note: "অনুক্রমের পদগুলো পরপর যোগ চিহ্ন দিয়ে যুক্ত করলে ধারা পাওয়া যায়। পদসংখ্যা নির্দিষ্ট হলে সসীম ধারা, নির্দিষ্ট না হলে অসীম ধারা।",
        },
      ],
    },
    {
      title: "সমান্তর ধারা",
      formulas: [
        {
          statement: String.raw`$$a+(a+d)+(a+2d)+\cdots$$`,
          note: String.raw`যেকোনো পাশাপাশি দুইটি পদের পার্থক্য সবসময় সমান হলে ধারাটি সমান্তর। এখানে $a$ প্রথম পদ ও $d$ সাধারণ অন্তর; $d$ ঋণাত্মকও হতে পারে।`,
        },
        {
          statement: String.raw`$$a_{n}=a+(n-1)d$$`,
          note: String.raw`সমান্তর ধারার $n$ তম পদ, অর্থাৎ সাধারণ পদ। শেষ পদ জানা থাকলে এই সমীকরণ থেকেই পদসংখ্যা $n$ বেরিয়ে আসে।`,
        },
        {
          statement: String.raw`$$S_{n}=\frac{n}{2}(a+p)$$`,
          note: String.raw`প্রথম পদ $a$, শেষ পদ $p$ ও পদসংখ্যা $n$ জানা থাকলে এই সূত্র সবচেয়ে সংক্ষিপ্ত।`,
        },
        {
          statement: String.raw`$$S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          note: String.raw`প্রথম পদ $a$, সাধারণ অন্তর $d$ ও পদসংখ্যা $n$ জানা থাকলে। $p=a+(n-1)d$ বসালে উপরের সূত্র থেকেই এটি আসে।`,
        },
      ],
    },
    {
      title: "স্বাভাবিক সংখ্যার সমষ্টি",
      formulas: [
        {
          statement: String.raw`$$1+2+3+\cdots+n=\frac{n(n+1)}{2}$$`,
          note: String.raw`প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার সমষ্টি — সমান্তর ধারার সূত্রে $a=1,\;d=1$ বসালেই পাওয়া যায়।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book pages ২৫০-২৫১.
    {
      id: 1,
      question: String.raw`দেখাও যে, $1+3+5+7+9+11$ একটি সমান্তর ধারা।`,
      solution: {
        steps: [
          String.raw`ধারাটির প্রথম পদ $1$, দ্বিতীয় পদ $3$, তৃতীয় পদ $5$ ইত্যাদি।`,
          String.raw`$$\text{দ্বিতীয় পদ}-\text{প্রথম পদ}=3-1=2$$`,
          String.raw`$$\text{তৃতীয় পদ}-\text{দ্বিতীয় পদ}=5-3=2$$`,
          String.raw`$$\text{চতুর্থ পদ}-\text{তৃতীয় পদ}=7-5=2$$`,
          String.raw`$$\text{পঞ্চম পদ}-\text{চতুর্থ পদ}=9-7=2$$`,
          String.raw`$$\text{ষষ্ঠ পদ}-\text{পঞ্চম পদ}=11-9=2$$`,
          String.raw`পাশাপাশি দুইটি পদের পার্থক্য সর্বত্র $2$, তাই ধারাটি একটি সমান্তর ধারা এবং এর সাধারণ অন্তর $2$।`,
          String.raw`পদসংখ্যা নির্দিষ্ট $(6)$ বলে এটি একটি সসীম ধারা।`,
        ],
        answer: String.raw`সাধারণ অন্তর $2$, ধারাটি সমান্তর`,
      },
    },
    // উদাহরণ ২ — book pages ২৫১-২৫২.
    {
      id: 2,
      question: String.raw`$5+8+11+14+\cdots$ ধারাটির কোন পদ $383$?`,
      solution: {
        steps: [
          String.raw`$$\text{ধারাটির প্রথম পদ }a=5,\;\text{সাধারণ অন্তর }d=8-5=11-8=14-11=3$$`,
          String.raw`$\therefore$ এটি একটি সমান্তর ধারা।`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=383$`,
          String.raw`$$\text{আমরা জানি, }a_{n}=a+(n-1)d$$`,
          String.raw`$$\therefore\; a+(n-1)d=383$$`,
          String.raw`$$\text{বা, }5+(n-1)3=383$$`,
          String.raw`$$\text{বা, }5+3n-3=383$$`,
          String.raw`$$\text{বা, }3n=383-5+3$$`,
          String.raw`$$\text{বা, }3n=381$$`,
          String.raw`$$\therefore\; n=\frac{381}{3}=127$$`,
        ],
        answer: String.raw`$127$ তম পদ`,
      },
    },
    // উদাহরণ ৩ — book page ২৫৩.
    {
      id: 3,
      question: String.raw`প্রথম $50$টি স্বাভাবিক সংখ্যার যোগফল নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }1+2+3+\cdots+n=\frac{n(n+1)}{2}$$`,
          String.raw`$$\therefore\; S_{50}=\frac{50(50+1)}{2}=25\times 51=1275$$`,
        ],
        answer: String.raw`$1275$`,
      },
    },
    // উদাহরণ ৪ — book pages ২৫৩-২৫৪.
    {
      id: 4,
      question: String.raw`$1+2+3+4+\cdots+99=$ কত?`,
      solution: {
        steps: [
          String.raw`$$\text{ধারাটির প্রথম পদ }a=1,\;\text{সাধারণ অন্তর }d=2-1=1,\;\text{শেষ পদ }p=99$$`,
          String.raw`$\therefore$ এটি একটি সমান্তর ধারা।`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=99$`,
          String.raw`$$\therefore\; a+(n-1)d=99$$`,
          String.raw`$$\text{বা, }1+(n-1)1=99$$`,
          String.raw`$$\text{বা, }1+n-1=99$$`,
          String.raw`$$\therefore\; n=99$$`,
          String.raw`$$S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          String.raw`$$\therefore\; S_{99}=\frac{99}{2}\{2\times 1+(99-1)\times 1\}=\frac{99}{2}(2+98)$$`,
          String.raw`$$=\frac{99\times 100}{2}=99\times 50=4950$$`,
          String.raw`বিকল্প পদ্ধতি — শেষ পদ জানা আছে বলে $S_{n}=\dfrac{n}{2}(a+p)$ সূত্রটিও খাটে।`,
          String.raw`$$S_{99}=\frac{99}{2}(1+99)=\frac{99\times 100}{2}=4950$$`,
        ],
        answer: String.raw`$4950$`,
      },
    },
    // উদাহরণ ৫ — book page ২৫৪.
    {
      id: 5,
      question: String.raw`$7+12+17+\cdots$ ধারাটির প্রথম $30$টি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{ধারাটির প্রথম পদ }a=7,\;\text{সাধারণ অন্তর }d=12-7=5$$`,
          String.raw`$\therefore$ এটি একটি সমান্তর ধারা। এখানে পদসংখ্যা $n=30$।`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          String.raw`$$\therefore\; S_{30}=\frac{30}{2}\{2\times 7+(30-1)5\}=15(14+29\times 5)$$`,
          String.raw`$$=15(14+145)=15\times 159=2385$$`,
        ],
        answer: String.raw`$2385$`,
      },
    },
    // উদাহরণ ৬ — book pages ২৫৪-২৫৫.
    {
      id: 6,
      question: String.raw`রশিদ তার বেতন থেকে প্রথম মাসে $1200$ টাকা সঞ্চয় করেন এবং পরবর্তী প্রতিমাসে এর পূর্ববর্তী মাসের তুলনায় $100$ টাকা বেশি সঞ্চয় করেন।`,
      parts: [
        {
          label: "ক",
          question: String.raw`সমস্যাটিকে $n$ সংখ্যক পদ পর্যন্ত ধারায় প্রকাশ করো।`,
          solution: {
            steps: [
              String.raw`$$\text{প্রশ্নানুসারে, ধারাটির প্রথম পদ }a=1200,\;\text{সাধারণ অন্তর }d=100$$`,
              String.raw`$$\therefore\;\text{দ্বিতীয় পদ}=1200+100=1300$$`,
              String.raw`$$\text{তৃতীয় পদ}=1300+100=1400$$`,
              String.raw`$$\therefore\; a_{n}=a+(n-1)d=1200+(n-1)100=1100+100n$$`,
              String.raw`$$\therefore\;\text{ধারাটি }1200+1300+1400+\cdots+(1100+100n)$$`,
            ],
            answer: String.raw`$1200+1300+1400+\cdots+(1100+100n)$`,
          },
        },
        {
          label: "খ",
          question: String.raw`তিনি $18$ তম মাসে কত টাকা এবং প্রথম $18$ মাসে মোট কত টাকা সঞ্চয় করেন?`,
          solution: {
            steps: [
              String.raw`$$\text{আমরা জানি, }a_{n}=a+(n-1)d$$`,
              String.raw`$$\therefore\;\text{18 তম মাসে সঞ্চয়}=1200+(18-1)\times 100=1200+1700=2900$$`,
              String.raw`$$\text{আবার, }S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
              String.raw`$$\therefore\;\text{প্রথম 18 মাসের সঞ্চয}=\frac{18}{2}\{2\times 1200+(18-1)\times 100\}$$`,
              String.raw`$$=9(2400+1700)=9\times 4100=36900$$`,
            ],
            answer: String.raw`$18$ তম মাসে $2900$ টাকা, প্রথম $18$ মাসে $36900$ টাকা`,
          },
        },
        {
          label: "গ",
          question: String.raw`তিনি কত বছরে মোট $106200$ টাকা সঞ্চয় করেন?`,
          solution: {
            steps: [
              String.raw`মনে করি, তিনি $n$ মাসে $106200$ টাকা সঞ্চয় করেন।`,
              String.raw`$$\text{প্রশ্নানুসারে, }\frac{n}{2}\{2a+(n-1)d\}=106200$$`,
              String.raw`$$\text{বা, }\frac{n}{2}\{2\times 1200+(n-1)\times 100\}=106200$$`,
              String.raw`$$\text{বা, }n(2400+100n-100)=212400$$`,
              String.raw`$$\text{বা, }100n^{2}+2300n-212400=0$$`,
              String.raw`$$\text{বা, }n^{2}+23n-2124=0$$`,
              String.raw`$$\text{বা, }n^{2}+59n-36n-2124=0$$`,
              String.raw`$$\text{বা, }(n+59)(n-36)=0$$`,
              String.raw`$$\therefore\; n=-59\ \text{অথবা}\ n=36$$`,
              String.raw`মাস কখনো ঋণাত্মক হতে পারে না, তাই $n=36$।`,
              String.raw`$$\therefore\;\text{নির্ণেয় সময়}=36\ \text{মাস}=3\ \text{বছর}$$`,
            ],
            answer: String.raw`$3$ বছর`,
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি প্রশ্ন (1 – 4) ───────────────
    {
      id: 1,
      group: SR_MCQ,
      question: String.raw`$13+20+27+34+\cdots+111$ ধারাটির পদ সংখ্যা কত?
ক) $10$  খ) $13$  গ) $15$  ঘ) $20$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=13,\;\text{সাধারণ অন্তর }d=20-13=7,\;\text{শেষ পদ }p=111$$`,
          String.raw`মনে করি, ধারাটির পদসংখ্যা $n$, অর্থাৎ $n$ তম পদ $=111$`,
          String.raw`$$\therefore\; a+(n-1)d=111$$`,
          String.raw`$$\text{বা, }13+(n-1)7=111$$`,
          String.raw`$$\text{বা, }7(n-1)=98$$`,
          String.raw`$$\text{বা, }n-1=14$$`,
          String.raw`$$\therefore\; n=15$$`,
        ],
        answer: String.raw`গ) $15$`,
      },
    },
    {
      id: 2,
      group: SR_MCQ,
      question: String.raw`$5+8+11+14+\cdots+62$ ধারাটি —
$(i)$ একটি সসীম ধারা   $(ii)$ একটি গুণোত্তর ধারা   $(iii)$ এর $19$ তম পদ $59$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=5,\;\text{সাধারণ অন্তর }d=8-5=11-8=14-11=3$$`,
          String.raw`পাশাপাশি পদের পার্থক্য সমান, কিন্তু অনুপাত সমান নয় $\left(\dfrac{8}{5}\neq\dfrac{11}{8}\right)$; তাই ধারাটি সমান্তর, গুণোত্তর নয় — $(ii)$ ভুল।`,
          String.raw`শেষ পদ $62$ হলে,`,
          String.raw`$$5+(n-1)3=62$$`,
          String.raw`$$\text{বা, }3(n-1)=57$$`,
          String.raw`$$\therefore\; n=20$$`,
          String.raw`পদসংখ্যা নির্দিষ্ট, তাই ধারাটি সসীম — $(i)$ সঠিক।`,
          String.raw`$$\text{19 তম পদ}=a+(19-1)d=5+18\times 3=5+54=59$$`,
          String.raw`সুতরাং $(iii)$ও সঠিক।`,
        ],
        answer: String.raw`খ) $i$ ও $iii$`,
      },
    },
    {
      id: 3,
      group: SR_MCQ,
      question: String.raw`$7+13+19+25+\cdots$ একটি ধারা। ধারাটির $15$ তম পদ কোনটি?
ক) $85$  খ) $91$  গ) $97$  ঘ) $104$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=7,\;\text{সাধারণ অন্তর }d=13-7=6$$`,
          String.raw`$$\text{আমরা জানি, }a_{n}=a+(n-1)d$$`,
          String.raw`$$\therefore\; a_{15}=7+(15-1)\times 6=7+84=91$$`,
        ],
        answer: String.raw`খ) $91$`,
      },
    },
    {
      id: 4,
      group: SR_MCQ,
      question: String.raw`$7+13+19+25+\cdots$ ধারাটির প্রথম $20$টি পদের সমষ্টি কত?
ক) $141$  খ) $1210$  গ) $1280$  ঘ) $2560$`,
      solution: {
        steps: [
          String.raw`$$\text{এখানে }a=7,\;d=6,\;n=20$$`,
          String.raw`$$S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          String.raw`$$\therefore\; S_{20}=\frac{20}{2}\{2\times 7+(20-1)\times 6\}$$`,
          String.raw`$$=10(14+114)=10\times 128=1280$$`,
        ],
        answer: String.raw`গ) $1280$`,
      },
    },

    // ─────────────── সাধারণ পদ ও পদসংখ্যা (5 – 8) ───────────────
    {
      id: 5,
      group: SR_TERM,
      question: String.raw`$2-5-12-19-\cdots$ ধারাটির সাধারণ অন্তর এবং $12$ তম পদ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`ধারাটির পদগুলো $2,\;-5,\;-12,\;-19,\;\cdots$`,
          String.raw`$$\text{সাধারণ অন্তর }d=-5-2=-12-(-5)=-19-(-12)=-7$$`,
          String.raw`$\therefore$ ধারাটি একটি সমান্তর ধারা, যার প্রথম পদ $a=2$ ও $d=-7$।`,
          String.raw`$$\text{আমরা জানি, }a_{n}=a+(n-1)d$$`,
          String.raw`$$\therefore\; a_{12}=2+(12-1)\times(-7)=2-77=-75$$`,
        ],
        answer: String.raw`সাধারণ অন্তর $-7$ এবং $12$ তম পদ $-75$`,
      },
    },
    {
      id: 6,
      group: SR_TERM,
      question: String.raw`$8+11+14+17+\cdots$ ধারাটির কোন পদ $392$?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=8,\;\text{সাধারণ অন্তর }d=11-8=3$$`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=392$`,
          String.raw`$$\therefore\; a+(n-1)d=392$$`,
          String.raw`$$\text{বা, }8+(n-1)3=392$$`,
          String.raw`$$\text{বা, }3(n-1)=384$$`,
          String.raw`$$\text{বা, }n-1=128$$`,
          String.raw`$$\therefore\; n=129$$`,
        ],
        answer: String.raw`$129$ তম পদ`,
      },
    },
    {
      id: 7,
      group: SR_TERM,
      question: String.raw`$4+7+10+13+\cdots$ ধারাটির কোন পদ $301$?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=4,\;\text{সাধারণ অন্তর }d=7-4=3$$`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=301$`,
          String.raw`$$\therefore\; 4+(n-1)3=301$$`,
          String.raw`$$\text{বা, }3(n-1)=297$$`,
          String.raw`$$\text{বা, }n-1=99$$`,
          String.raw`$$\therefore\; n=100$$`,
        ],
        answer: String.raw`$100$ তম পদ`,
      },
    },
    {
      id: 8,
      group: SR_TERM,
      question: String.raw`কোনো সমান্তর ধারার $m$ তম পদ $n$ এবং $n$ তম পদ $m$ হলে, ধারাটির $(m+n)$ তম পদ কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }a+(m-1)d=n\qquad\cdots(1)$$`,
          String.raw`$$a+(n-1)d=m\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে $(2)$ বিয়োগ করে পাই,`,
          String.raw`$$(m-n)d=n-m$$`,
          String.raw`$$\text{বা, }(m-n)d=-(m-n)$$`,
          String.raw`$$\therefore\; d=-1\qquad\left[\,m\neq n\,\right]$$`,
          String.raw`$d=-1$ সমীকরণ $(1)$-এ বসিয়ে পাই,`,
          String.raw`$$a-(m-1)=n$$`,
          String.raw`$$\therefore\; a=m+n-1$$`,
          String.raw`$$\therefore\;\text{(m+n) তম পদ}=a+(m+n-1)d$$`,
          String.raw`$$=(m+n-1)+(m+n-1)(-1)=(m+n-1)-(m+n-1)=0$$`,
        ],
        answer: String.raw`$0$`,
      },
    },

    // ─────────────── ধারার সমষ্টি নির্ণয় (9 – 14) ───────────────
    {
      id: 9,
      group: SR_SUM,
      question: String.raw`$1+3+5+7+\cdots$ ধারাটির $n$ পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=1,\;\text{সাধারণ অন্তর }d=3-1=2$$`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          String.raw`$$\therefore\; S_{n}=\frac{n}{2}\{2\times 1+(n-1)\times 2\}$$`,
          String.raw`$$=\frac{n}{2}(2+2n-2)=\frac{n}{2}\times 2n=n^{2}$$`,
          String.raw`অর্থাৎ প্রথম $n$ সংখ্যক বিজোড় সংখ্যার সমষ্টি $n^{2}$।`,
        ],
        answer: String.raw`$n^{2}$`,
      },
    },
    {
      id: 10,
      group: SR_SUM,
      question: String.raw`$8+16+24+\cdots$ ধারাটির প্রথম $9$টি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=8,\;\text{সাধারণ অন্তর }d=16-8=8,\;\text{পদসংখ্যা }n=9$$`,
          String.raw`$$S_{n}=\frac{n}{2}\{2a+(n-1)d\}$$`,
          String.raw`$$\therefore\; S_{9}=\frac{9}{2}\{2\times 8+(9-1)\times 8\}$$`,
          String.raw`$$=\frac{9}{2}(16+64)=\frac{9}{2}\times 80=9\times 40=360$$`,
        ],
        answer: String.raw`$360$`,
      },
    },
    {
      id: 11,
      group: SR_SUM,
      question: String.raw`$5+11+17+23+\cdots+59=$ কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=5,\;\text{সাধারণ অন্তর }d=11-5=6,\;\text{শেষ পদ }p=59$$`,
          String.raw`মনে করি, পদসংখ্যা $n$`,
          String.raw`$$\therefore\; 5+(n-1)6=59$$`,
          String.raw`$$\text{বা, }6(n-1)=54$$`,
          String.raw`$$\therefore\; n=10$$`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{n}{2}(a+p)$$`,
          String.raw`$$\therefore\; S_{10}=\frac{10}{2}(5+59)=5\times 64=320$$`,
        ],
        answer: String.raw`$320$`,
      },
    },
    {
      id: 12,
      group: SR_SUM,
      question: String.raw`$29+25+21+\cdots-23=$ কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=29,\;\text{সাধারণ অন্তর }d=25-29=-4,\;\text{শেষ পদ }p=-23$$`,
          String.raw`মনে করি, পদসংখ্যা $n$`,
          String.raw`$$\therefore\; 29+(n-1)(-4)=-23$$`,
          String.raw`$$\text{বা, }-4(n-1)=-52$$`,
          String.raw`$$\text{বা, }n-1=13$$`,
          String.raw`$$\therefore\; n=14$$`,
          String.raw`$$\therefore\; S_{14}=\frac{14}{2}(29-23)=7\times 6=42$$`,
        ],
        answer: String.raw`$42$`,
      },
    },
    {
      id: 13,
      group: SR_SUM,
      question: String.raw`কোনো সমান্তর ধারার $12$ তম পদ $77$ হলে, এর প্রথম $23$টি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }a+(12-1)d=77$$`,
          String.raw`$$\text{বা, }a+11d=77\qquad\cdots(1)$$`,
          String.raw`$$\text{আবার, }S_{23}=\frac{23}{2}\{2a+(23-1)d\}=\frac{23}{2}(2a+22d)$$`,
          String.raw`$$=23(a+11d)$$`,
          String.raw`$$=23\times 77\qquad\left[\,\text{সমীকরণ }(1)\,\right]$$`,
          String.raw`$$=1771$$`,
          String.raw`লক্ষণীয় — প্রথম $(2k-1)$টি পদের সমষ্টি সবসময় $(2k-1)\times k$ তম পদ, তাই $a$ ও $d$ আলাদা করে বের করার দরকার হয় না।`,
        ],
        answer: String.raw`$1771$`,
      },
    },
    {
      id: 14,
      group: SR_SUM,
      question: String.raw`একটি সমান্তর ধারার $16$ তম পদ $-20$ হলে, এর প্রথম $31$টি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }a+(16-1)d=-20$$`,
          String.raw`$$\text{বা, }a+15d=-20\qquad\cdots(1)$$`,
          String.raw`$$\text{আবার, }S_{31}=\frac{31}{2}\{2a+(31-1)d\}=\frac{31}{2}(2a+30d)$$`,
          String.raw`$$=31(a+15d)$$`,
          String.raw`$$=31\times(-20)\qquad\left[\,\text{সমীকরণ }(1)\,\right]$$`,
          String.raw`$$=-620$$`,
        ],
        answer: String.raw`$-620$`,
      },
    },

    // ─────────────── সমষ্টি থেকে পদসংখ্যা ও ধারা (15 – 20) ───────────────
    {
      id: 15,
      group: SR_FIND,
      question: String.raw`$9+7+5+\cdots$ ধারাটির প্রথম $n$ সংখ্যক পদের যোগফল $-144$ হলে, $n$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=9,\;\text{সাধারণ অন্তর }d=7-9=-2$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{n}{2}\{2a+(n-1)d\}=-144$$`,
          String.raw`$$\text{বা, }\frac{n}{2}\{18+(n-1)(-2)\}=-144$$`,
          String.raw`$$\text{বা, }\frac{n}{2}(20-2n)=-144$$`,
          String.raw`$$\text{বা, }n(10-n)=-144$$`,
          String.raw`$$\text{বা, }n^{2}-10n-144=0$$`,
          String.raw`$$\text{বা, }n^{2}-18n+8n-144=0$$`,
          String.raw`$$\text{বা, }(n-18)(n+8)=0$$`,
          String.raw`$$\therefore\; n=18\ \text{অথবা}\ n=-8$$`,
          String.raw`পদসংখ্যা ঋণাত্মক হতে পারে না, তাই $n=18$।`,
        ],
        answer: String.raw`$n=18$`,
      },
    },
    {
      id: 16,
      group: SR_FIND,
      question: String.raw`$2+4+6+8+\cdots$ ধারাটির প্রথম $n$ সংখ্যক পদের সমষ্টি $2550$ হলে, $n$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=2,\;\text{সাধারণ অন্তর }d=4-2=2$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{n}{2}\{2\times 2+(n-1)\times 2\}=2550$$`,
          String.raw`$$\text{বা, }\frac{n}{2}(2n+2)=2550$$`,
          String.raw`$$\text{বা, }n(n+1)=2550$$`,
          String.raw`$$\text{বা, }n^{2}+n-2550=0$$`,
          String.raw`$$\text{বা, }n^{2}+51n-50n-2550=0$$`,
          String.raw`$$\text{বা, }(n+51)(n-50)=0$$`,
          String.raw`$$\therefore\; n=50\ \text{অথবা}\ n=-51$$`,
          String.raw`পদসংখ্যা ঋণাত্মক হতে পারে না, তাই $n=50$।`,
        ],
        answer: String.raw`$n=50$`,
      },
    },
    {
      id: 17,
      group: SR_FIND,
      question: String.raw`কোনো ধারার প্রথম $n$ সংখ্যক পদের সমষ্টি $n(n+1)$ হলে, ধারাটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{দেওয়া আছে, }S_{n}=n(n+1)$$`,
          String.raw`$$\therefore\; S_{n-1}=(n-1)\{(n-1)+1\}=(n-1)n$$`,
          String.raw`$n$ তম পদ $=$ প্রথম $n$টি পদের সমষ্টি $-$ প্রথম $(n-1)$টি পদের সমষ্টি`,
          String.raw`$$\therefore\; a_{n}=S_{n}-S_{n-1}=n(n+1)-(n-1)n$$`,
          String.raw`$$=n\{(n+1)-(n-1)\}=n\times 2=2n$$`,
          String.raw`$$\therefore\; a_{1}=2,\quad a_{2}=4,\quad a_{3}=6,\quad\cdots$$`,
          String.raw`$$\therefore\;\text{নির্ণেয় ধারাটি }2+4+6+8+\cdots$$`,
        ],
        answer: String.raw`$2+4+6+8+\cdots$`,
      },
    },
    {
      id: 18,
      group: SR_FIND,
      question: String.raw`কোনো ধারার প্রথম $n$ সংখ্যক পদের সমষ্টি $n(n+1)$। ধারাটির $10$টি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{দেওয়া আছে, }S_{n}=n(n+1)$$`,
          String.raw`$$\therefore\; S_{10}=10\times(10+1)=10\times 11=110$$`,
          String.raw`যাচাই — ১৭ নং প্রশ্ন থেকে ধারাটি $2+4+6+\cdots$, যার $a=2,\;d=2$`,
          String.raw`$$S_{10}=\frac{10}{2}\{2\times 2+(10-1)\times 2\}=5(4+18)=5\times 22=110$$`,
        ],
        answer: String.raw`$110$`,
      },
    },
    {
      id: 19,
      group: SR_FIND,
      question: String.raw`একটি সমান্তর ধারার প্রথম $12$ পদের সমষ্টি $144$ এবং প্রথম $20$ পদের সমষ্টি $560$ হলে, এর প্রথম $6$ পদের সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
          String.raw`$$\text{প্রথম শর্তানুসারে, }\frac{12}{2}\{2a+(12-1)d\}=144$$`,
          String.raw`$$\text{বা, }6(2a+11d)=144$$`,
          String.raw`$$\text{বা, }2a+11d=24\qquad\cdots(1)$$`,
          String.raw`$$\text{দ্বিতীয় শর্তানুসারে, }\frac{20}{2}\{2a+(20-1)d\}=560$$`,
          String.raw`$$\text{বা, }10(2a+19d)=560$$`,
          String.raw`$$\text{বা, }2a+19d=56\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(2)$ থেকে $(1)$ বিয়োগ করে পাই,`,
          String.raw`$$8d=32$$`,
          String.raw`$$\therefore\; d=4$$`,
          String.raw`$d=4$ সমীকরণ $(1)$-এ বসিয়ে পাই,`,
          String.raw`$$2a+44=24$$`,
          String.raw`$$\text{বা, }2a=-20$$`,
          String.raw`$$\therefore\; a=-10$$`,
          String.raw`$$\therefore\; S_{6}=\frac{6}{2}\{2\times(-10)+(6-1)\times 4\}$$`,
          String.raw`$$=3(-20+20)=3\times 0=0$$`,
        ],
        answer: String.raw`$0$`,
      },
    },
    {
      id: 20,
      group: SR_FIND,
      question: String.raw`কোনো সমান্তর ধারার প্রথম $m$ পদের সমষ্টি $n$ এবং প্রথম $n$ পদের সমষ্টি $m$ হলে, এর প্রথম $(m+n)$ পদের সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{m}{2}\{2a+(m-1)d\}=n$$`,
          String.raw`$$\text{বা, }m\{2a+(m-1)d\}=2n\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং }\frac{n}{2}\{2a+(n-1)d\}=m$$`,
          String.raw`$$\text{বা, }n\{2a+(n-1)d\}=2m\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে $(2)$ বিয়োগ করে পাই,`,
          String.raw`$$2a(m-n)+d\{m(m-1)-n(n-1)\}=2n-2m$$`,
          String.raw`$$\text{এখানে, }m(m-1)-n(n-1)=m^{2}-n^{2}-(m-n)=(m-n)(m+n-1)$$`,
          String.raw`$$\therefore\;(m-n)\{2a+(m+n-1)d\}=-2(m-n)$$`,
          String.raw`$$\therefore\; 2a+(m+n-1)d=-2\qquad\left[\,m\neq n\,\right]$$`,
          String.raw`$$\therefore\; S_{m+n}=\frac{m+n}{2}\{2a+(m+n-1)d\}$$`,
          String.raw`$$=\frac{m+n}{2}\times(-2)=-(m+n)$$`,
        ],
        answer: String.raw`$-(m+n)$`,
      },
    },

    // ─────────────── প্রমাণ ও প্রয়োগ (21 – 24) ───────────────
    {
      id: 21,
      group: SR_PROOF,
      question: String.raw`কোনো সমান্তর ধারায় $p$ তম, $q$ তম ও $r$ তম পদ যথাক্রমে $a,\,b,\,c$ হলে, দেখাও যে, $$a(q-r)+b(r-p)+c(p-q)=0$$`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $A$ এবং সাধারণ অন্তর $D$।`,
          String.raw`$$\therefore\; a=A+(p-1)D,\quad b=A+(q-1)D,\quad c=A+(r-1)D$$`,
          String.raw`$$\text{L.H.S.}=a(q-r)+b(r-p)+c(p-q)$$`,
          String.raw`$$=\{A+(p-1)D\}(q-r)+\{A+(q-1)D\}(r-p)+\{A+(r-1)D\}(p-q)$$`,
          String.raw`$$=A\{(q-r)+(r-p)+(p-q)\}+D\{(p-1)(q-r)+(q-1)(r-p)+(r-1)(p-q)\}$$`,
          String.raw`প্রথম বন্ধনীর ভিতরে,`,
          String.raw`$$(q-r)+(r-p)+(p-q)=0$$`,
          String.raw`দ্বিতীয় বন্ধনীর ভিতরে,`,
          String.raw`$$(p-1)(q-r)+(q-1)(r-p)+(r-1)(p-q)$$`,
          String.raw`$$=\{p(q-r)+q(r-p)+r(p-q)\}-\{(q-r)+(r-p)+(p-q)\}$$`,
          String.raw`$$=(pq-pr+qr-pq+pr-qr)-0=0$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=A\times 0+D\times 0=0=\text{R.H.S.}$$`,
        ],
        answer: String.raw`দেখানো হলো`,
      },
    },
    {
      id: 22,
      group: SR_PROOF,
      question: String.raw`দেখাও যে, $$1+3+5+7+\cdots+125=169+171+173+\cdots+209$$`,
      solution: {
        steps: [
          String.raw`বাম পক্ষের ধারাটির প্রথম পদ $a=1$, সাধারণ অন্তর $d=2$ এবং শেষ পদ $p=125$।`,
          String.raw`মনে করি, পদসংখ্যা $n$`,
          String.raw`$$\therefore\; 1+(n-1)2=125$$`,
          String.raw`$$\text{বা, }2(n-1)=124$$`,
          String.raw`$$\therefore\; n=63$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=\frac{63}{2}(1+125)=\frac{63}{2}\times 126=63\times 63=3969$$`,
          String.raw`ডান পক্ষের ধারাটির প্রথম পদ $a=169$, সাধারণ অন্তর $d=171-169=2$ এবং শেষ পদ $p=209$।`,
          String.raw`মনে করি, পদসংখ্যা $m$`,
          String.raw`$$\therefore\; 169+(m-1)2=209$$`,
          String.raw`$$\text{বা, }2(m-1)=40$$`,
          String.raw`$$\therefore\; m=21$$`,
          String.raw`$$\therefore\;\text{R.H.S.}=\frac{21}{2}(169+209)=\frac{21}{2}\times 378=21\times 189=3969$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=\text{R.H.S.}$$`,
        ],
        answer: String.raw`দেখানো হলো (উভয় পক্ষ $3969$)`,
      },
    },
    {
      id: 23,
      group: SR_PROOF,
      question: String.raw`এক ব্যক্তি $2500$ টাকার একটি ঋণ কিছুসংখ্যক কিস্তিতে পরিশোধ করতে রাজি হন। প্রত্যেক কিস্তি পূর্বের কিস্তি থেকে $2$ টাকা বেশি। যদি প্রথম কিস্তি $1$ টাকা হয়, তবে কতগুলো কিস্তিতে ঐ ব্যক্তি তার ঋণ শোধ করতে পারবেন?`,
      solution: {
        steps: [
          String.raw`কিস্তিগুলো একটি সমান্তর ধারা গঠন করে, যার প্রথম পদ $a=1$ ও সাধারণ অন্তর $d=2$।`,
          String.raw`মনে করি, কিস্তির সংখ্যা $n$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{n}{2}\{2a+(n-1)d\}=2500$$`,
          String.raw`$$\text{বা, }\frac{n}{2}\{2\times 1+(n-1)\times 2\}=2500$$`,
          String.raw`$$\text{বা, }\frac{n}{2}\times 2n=2500$$`,
          String.raw`$$\text{বা, }n^{2}=2500$$`,
          String.raw`$$\therefore\; n=\pm 50$$`,
          String.raw`কিস্তির সংখ্যা ঋণাত্মক হতে পারে না, তাই $n=50$।`,
        ],
        answer: String.raw`$50$টি কিস্তিতে`,
      },
    },
    {
      id: 24,
      group: SR_PROOF,
      question: String.raw`কোন সমান্তর ধারার দুইটি নির্দিষ্ট পদ, $l$ তম পদ $l^{2}$ এবং $k$ তম পদ $k^{2}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$ ধরে উদ্দীপকের আলোকে দুইটি সমীকরণ তৈরি করো।`,
          solution: {
            steps: [
              String.raw`$$\text{আমরা জানি, }a_{n}=a+(n-1)d$$`,
              String.raw`$l$ তম পদ $l^{2}$ হওয়ায়,`,
              String.raw`$$a+(l-1)d=l^{2}\qquad\cdots(1)$$`,
              String.raw`$k$ তম পদ $k^{2}$ হওয়ায়,`,
              String.raw`$$a+(k-1)d=k^{2}\qquad\cdots(2)$$`,
            ],
            answer: String.raw`$a+(l-1)d=l^{2}$ এবং $a+(k-1)d=k^{2}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$(l+k)$ তম পদ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমীকরণ $(1)$ থেকে $(2)$ বিয়োগ করে পাই,`,
              String.raw`$$(l-k)d=l^{2}-k^{2}=(l-k)(l+k)$$`,
              String.raw`$$\therefore\; d=l+k\qquad\left[\,l\neq k\,\right]$$`,
              String.raw`$d=l+k$ সমীকরণ $(1)$-এ বসিয়ে পাই,`,
              String.raw`$$a=l^{2}-(l-1)(l+k)$$`,
              String.raw`$$=l^{2}-\left(l^{2}+lk-l-k\right)$$`,
              String.raw`$$=l+k-lk$$`,
              String.raw`$$\therefore\;\text{(l+k) তম পদ}=a+(l+k-1)d$$`,
              String.raw`$$=(l+k-lk)+(l+k-1)(l+k)$$`,
              String.raw`$$=(l+k)-lk+(l+k)^{2}-(l+k)$$`,
              String.raw`$$=(l+k)^{2}-lk=l^{2}+2lk+k^{2}-lk$$`,
              String.raw`$$=l^{2}+lk+k^{2}$$`,
            ],
            answer: String.raw`$l^{2}+lk+k^{2}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো, ধারাটির প্রথম $(l+k)$ সংখ্যক পদের সমষ্টি $$\frac{l+k}{2}\left(l^{2}+k^{2}+l+k\right)$$`,
          solution: {
            steps: [
              String.raw`(খ) হতে পাই, $a=l+k-lk$ এবং $d=l+k$।`,
              String.raw`$$\therefore\; S_{l+k}=\frac{l+k}{2}\{2a+(l+k-1)d\}$$`,
              String.raw`$$=\frac{l+k}{2}\left\{2(l+k-lk)+(l+k-1)(l+k)\right\}$$`,
              String.raw`$$=\frac{l+k}{2}\left\{2l+2k-2lk+(l+k)^{2}-(l+k)\right\}$$`,
              String.raw`$$=\frac{l+k}{2}\left\{2l+2k-2lk+l^{2}+2lk+k^{2}-l-k\right\}$$`,
              String.raw`$$=\frac{l+k}{2}\left(l^{2}+k^{2}+l+k\right)$$`,
            ],
            answer: String.raw`প্রমাণিত`,
          },
        },
      ],
    },
  ],
};

const GP_MCQ = "বহুনির্বাচনি প্রশ্ন (১)";
const GP_TERM = "গুণোত্তর ধারার পদ (২ – ৮)";
const GP_SUM = "গুণোত্তর ধারার সমষ্টি (৯ – ১৩)";
const GP_POWER = "বর্গ ও ঘনের সমষ্টি (১৪ – ১৬)";
const GP_CQ = "সৃজনশীল প্রশ্ন (১৭)";
const GP_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৮ – ২১)";
const GP_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (২২ – ২৩)";

const exercise132: Exercise = {
  id: "13.2",
  bnId: "অনুশীলনী ১৩.২",
  title: "গুণোত্তর ধারা, বর্গ ও ঘনের সমষ্টি",
  bookPages: "২৬৪ – ২৬৫",
  formulas: [
    {
      title: "ধারার বিভিন্ন সূত্র",
      formulas: [
        {
          statement: String.raw`$$1+2+3+\cdots+n=\frac{n(n+1)}{2}$$`,
          note: "প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার সমষ্টি।",
        },
        {
          statement: String.raw`$$1^{2}+2^{2}+3^{2}+\cdots+n^{2}=\frac{n(n+1)(2n+1)}{6}$$`,
          note: String.raw`বর্গের সমষ্টি। $r^{3}-(r-1)^{3}=3r^{2}-3r+1$ অভেদে $r=1,2,\cdots,n$ বসিয়ে যোগ করলেই সূত্রটি পাওয়া যায়।`,
        },
        {
          statement: String.raw`$$1^{3}+2^{3}+3^{3}+\cdots+n^{3}=\left\{\frac{n(n+1)}{2}\right\}^{2}$$`,
          note: String.raw`ঘনের সমষ্টি, অর্থাৎ $\left(1+2+3+\cdots+n\right)^{2}$ — সংখ্যাগুলোর সমষ্টির বর্গ।`,
        },
      ],
    },
    {
      title: "গুণোত্তর ধারা",
      formulas: [
        {
          statement: String.raw`$$a+ar+ar^{2}+ar^{3}+\cdots$$`,
          note: String.raw`যেকোনো পদ ও তার পূর্ববর্তী পদের অনুপাত সবসময় সমান হলে ধারাটি গুণোত্তর। এখানে $a$ প্রথম পদ ও $r$ সাধারণ অনুপাত।`,
        },
        {
          statement: String.raw`$$a_{n}=ar^{n-1}$$`,
          note: String.raw`গুণোত্তর ধারার $n$ তম পদ, অর্থাৎ সাধারণ পদ।`,
        },
        {
          statement: String.raw`$$S_{n}=\frac{a\left(1-r^{n}\right)}{1-r}\qquad(r<1)$$`,
          note: String.raw`সাধারণ অনুপাত $1$ অপেক্ষা ছোট হলে এই রূপটি ব্যবহার করলে হর ধনাত্মক থাকে।`,
        },
        {
          statement: String.raw`$$S_{n}=\frac{a\left(r^{n}-1\right)}{r-1}\qquad(r>1)$$`,
          note: String.raw`সাধারণ অনুপাত $1$ অপেক্ষা বড় হলে। দুইটি রূপ একই, কেবল লব ও হর উভয়ের চিহ্ন বদলানো।`,
        },
        {
          statement: String.raw`$$r=1\;\Rightarrow\;S_{n}=an$$`,
          note: "সাধারণ অনুপাত ১ হলে প্রত্যেক পদই $a$, ধারাটি তখন সমান্তর হয়ে যায় এবং উপরের সূত্র দুইটি অর্থহীন হয়ে পড়ে।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৭ — book page ২৬০.
    {
      id: 7,
      question: String.raw`$2+4+8+16+\cdots$ ধারাটির $10$ তম পদ কত?`,
      solution: {
        steps: [
          String.raw`$$\text{ধারাটির প্রথম পদ }a=2,\;\text{সাধারণ অনুপাত }r=\frac{4}{2}=2$$`,
          String.raw`$\therefore$ প্রদত্ত ধারাটি একটি গুণোত্তর ধারা।`,
          String.raw`$$\text{আমরা জানি, }a_{n}=ar^{n-1}$$`,
          String.raw`$$\therefore\; a_{10}=2\times 2^{10-1}=2\times 2^{9}=2^{10}=1024$$`,
        ],
        answer: String.raw`$1024$`,
      },
    },
    // উদাহরণ ৮ — book page ২৬০.
    {
      id: 8,
      question: String.raw`$128+64+32+\cdots$ ধারাটির সাধারণ পদ কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রদত্ত ধারাটির প্রথম পদ }a=128,\;\text{সাধারণ অনুপাত }r=\frac{64}{128}=\frac{1}{2}$$`,
          String.raw`$\therefore$ ইহা একটি গুণোত্তর ধারা।`,
          String.raw`$$\text{আমরা জানি, সাধারণ পদ}=ar^{n-1}$$`,
          String.raw`$$\therefore\; a_{n}=128\times\left(\frac{1}{2}\right)^{n-1}=\frac{2^{7}}{2^{n-1}}=\frac{1}{2^{n-1-7}}=\frac{1}{2^{n-8}}$$`,
        ],
        answer: String.raw`$\dfrac{1}{2^{n-8}}$`,
      },
    },
    // উদাহরণ ৯ — book pages ২৬০-২৬১.
    {
      id: 9,
      question: String.raw`একটি গুণোত্তর ধারার প্রথম ও দ্বিতীয় পদ যথাক্রমে $27$ এবং $9$ হলে, ধারাটির পঞ্চম পদ এবং দশম পদ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রদত্ত ধারাটির প্রথম পদ }a=27,\;\text{দ্বিতীয় পদ}=9$$`,
          String.raw`$$\therefore\;\text{সাধারণ অনুপাত }r=\frac{9}{27}=\frac{1}{3}$$`,
          String.raw`$$\therefore\;\text{পঞ্চম পদ}=ar^{5-1}=27\times\left(\frac{1}{3}\right)^{4}=\frac{27}{81}=\frac{1}{3}$$`,
          String.raw`$$\text{এবং দশম পদ}=ar^{10-1}=27\times\left(\frac{1}{3}\right)^{9}=\frac{3^{3}}{3^{9}}=\frac{1}{3^{6}}=\frac{1}{729}$$`,
        ],
        answer: String.raw`পঞ্চম পদ $\dfrac{1}{3}$, দশম পদ $\dfrac{1}{729}$`,
      },
    },
    // উদাহরণ ১০ — book pages ২৬১-২৬২.
    {
      id: 10,
      question: String.raw`$12+24+48+\cdots+768$ ধারাটির সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রদত্ত ধারাটির প্রথম পদ }a=12,\;\text{সাধারণ অনুপাত }r=\frac{24}{12}=2>1$$`,
          String.raw`$\therefore$ ধারাটি একটি গুণোত্তর ধারা।`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=768$`,
          String.raw`$$\therefore\; ar^{n-1}=768$$`,
          String.raw`$$\text{বা, }12\times 2^{n-1}=768$$`,
          String.raw`$$\text{বা, }2^{n-1}=\frac{768}{12}=64=2^{6}$$`,
          String.raw`$$\text{বা, }n-1=6$$`,
          String.raw`$$\therefore\; n=7$$`,
          String.raw`$$\therefore\; S_{7}=\frac{a\left(r^{n}-1\right)}{r-1}=\frac{12\left(2^{7}-1\right)}{2-1}$$`,
          String.raw`$$=12\times(128-1)=12\times 127=1524$$`,
        ],
        answer: String.raw`$1524$`,
      },
    },
    // উদাহরণ ১১ — book page ২৬২.
    {
      id: 11,
      question: String.raw`$1+\dfrac{1}{2}+\dfrac{1}{4}+\dfrac{1}{8}+\cdots$ ধারাটির প্রথম আটটি পদের সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রদত্ত ধারাটির প্রথম পদ }a=1,\;\text{সাধারণ অনুপাত }r=\frac{1/2}{1}=\frac{1}{2}<1$$`,
          String.raw`$\therefore$ ইহা একটি গুণোত্তর ধারা। এখানে পদসংখ্যা $n=8$।`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{a\left(1-r^{n}\right)}{1-r}\qquad(r<1)$$`,
          String.raw`$$\therefore\; S_{8}=\frac{1\times\left\{1-\left(\frac{1}{2}\right)^{8}\right\}}{1-\frac{1}{2}}=\frac{1-\frac{1}{256}}{\frac{1}{2}}$$`,
          String.raw`$$=2\left(\frac{256-1}{256}\right)=\frac{255}{128}=1\frac{127}{128}$$`,
        ],
        answer: String.raw`$\dfrac{255}{128}=1\dfrac{127}{128}$`,
      },
    },
    // উদাহরণ ১২ — book pages ২৬২-২৬৩.
    {
      id: 12,
      question: String.raw`পলাশ সরকার $2005$ সালের জানুয়ারি মাসে বার্ষিক $120000$ টাকা বেতনে চাকরিতে যোগদান করলেন। তাঁর বেতন বৃদ্ধির পরিমাণ প্রতি বছর $5000$ টাকা। প্রতি বছর তাঁর বেতন থেকে $10\%$ ভবিষ্যতহবিল হিসেবে কর্তন করা হয়। তিনি বেতন থেকে বার্ষিক $12\%$ চক্রবৃদ্ধি মুনাফা হারে বছর শেষে একটি ব্যাংকে $12000$ টাকা জমা রাখেন। তিনি $2030$ সালের $31$ ডিসেম্বর চাকরি থেকে অবসরে যাবেন।`,
      parts: [
        {
          label: "ক",
          question: String.raw`পলাশ সরকারের মূল বেতন কোন ধারাকে সমর্থন করে? ধারাটি লিখ।`,
          solution: {
            steps: [
              String.raw`পলাশ সরকারের মূল বেতন সমান্তর ধারা সমর্থন করে।`,
              String.raw`$$\text{ধারাটির প্রথম পদ }a=120000\;\text{এবং সাধারণ অন্তর }d=5000$$`,
              String.raw`$$\therefore\;\text{দ্বিতীয় পদ}=120000+5000=125000$$`,
              String.raw`$$\text{তৃতীয় পদ}=125000+5000=130000$$`,
              String.raw`$$\therefore\;\text{ধারাটি }120000+125000+130000+\cdots$$`,
            ],
            answer: String.raw`সমান্তর ধারা — $120000+125000+130000+\cdots$`,
          },
        },
        {
          label: "খ",
          question: String.raw`ভবিষ্যতহবিল ব্যতীত তিনি বেতন হিসেবে চাকরি জীবনে মোট কত টাকা পাবেন?`,
          solution: {
            steps: [
              String.raw`$2005$ সালের জানুয়ারি থেকে $2030$ সালের $31$ ডিসেম্বর পর্যন্ত মোট $(2030-2005+1)$ বা $26$ বছর।`,
              String.raw`ভবিষ্যতহবিল ব্যতীত প্রাপ্য বেতনের ধারাটি`,
              String.raw`$$(120000-12000)+(125000-12500)+(130000-13000)+\cdots$$`,
              String.raw`$$=108000+112500+117000+\cdots$$`,
              String.raw`এক্ষেত্রে সৃষ্ট ধারাটি একটি সমান্তর ধারা, যার`,
              String.raw`$$a=108000,\quad d=112500-108000=4500,\quad n=26$$`,
              String.raw`$$\therefore\; S_{26}=\frac{26}{2}\{2\times 108000+(26-1)\times 4500\}$$`,
              String.raw`$$=13(216000+112500)=13\times 328500=4270500$$`,
            ],
            answer: String.raw`$4270500$ টাকা`,
          },
        },
        {
          label: "গ",
          question: String.raw`$2031$ সালের $31$ ডিসেম্বর ঐ ব্যাংকে মুনাফাসহ তার মোট কত টাকা জমা হবে?`,
          solution: {
            steps: [
              String.raw`$2005$ সাল থেকে $2031$ পর্যন্ত জমা করার মোট সময় $(2031-2005)$ বা $26$ বছর।`,
              String.raw`$$12000\;\text{টাকার 1 বছর শেষে জমা}=12000\left(1+\frac{12}{100}\right)=12000\times 1.12$$`,
              String.raw`$$12000\;\text{টাকার 2 বছর শেষে জমা}=12000\times(1.12)^{2}$$`,
              String.raw`$$12000\;\text{টাকার 3 বছর শেষে জমা}=12000\times(1.12)^{3}$$`,
              String.raw`$$\therefore\;\text{26 বছরে জমাকৃত মোট টাকা}=12000\left\{1.12+(1.12)^{2}+\cdots+(1.12)^{26}\right\}$$`,
              String.raw`ভিতরের ধারাটি গুণোত্তর, যার $a=1.12$ ও $r=1.12>1$।`,
              String.raw`$$=12000\times 1.12\times\frac{(1.12)^{26}-1}{1.12-1}=12000\times 1.12\times\frac{18.04}{0.12}$$`,
              String.raw`$$=2020488\;\text{(প্রায়)}$$`,
            ],
            answer: String.raw`$2020488$ টাকা (প্রায়)`,
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি প্রশ্ন (1) ───────────────
    {
      id: 1,
      group: GP_MCQ,
      question: String.raw`$a,\,b,\,c$ ও $d$ সমান্তর ধারার চারটি ক্রমিক পদ হলে নিচের কোনটি সঠিক?
ক) $b=\dfrac{c+d}{2}$  খ) $a=\dfrac{b+c}{2}$  গ) $c=\dfrac{b+d}{2}$  ঘ) $d=\dfrac{a+c}{2}$`,
      solution: {
        steps: [
          String.raw`$a,\,b,\,c,\,d$ ক্রমিক পদ হওয়ায় পাশাপাশি পদের পার্থক্য সমান,`,
          String.raw`$$b-a=c-b=d-c$$`,
          String.raw`$$\text{এখন, }c-b=d-c$$`,
          String.raw`$$\text{বা, }2c=b+d$$`,
          String.raw`$$\therefore\; c=\frac{b+d}{2}$$`,
          String.raw`অর্থাৎ সমান্তর ধারার যেকোনো পদ তার আগের ও পরের পদের গড় — এখানে $c$ হলো $b$ ও $d$-এর সমান্তর মধ্যক।`,
        ],
        answer: String.raw`গ) $c=\dfrac{b+d}{2}$`,
      },
    },

    // ─────────────── গুণোত্তর ধারার পদ (2 – 8) ───────────────
    {
      id: 2,
      group: GP_TERM,
      question: String.raw`$64+32+16+8+\cdots$ ধারাটির অষ্টম পদ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=64,\;\text{সাধারণ অনুপাত }r=\frac{32}{64}=\frac{16}{32}=\frac{1}{2}$$`,
          String.raw`$\therefore$ ধারাটি একটি গুণোত্তর ধারা।`,
          String.raw`$$\text{আমরা জানি, }a_{n}=ar^{n-1}$$`,
          String.raw`$$\therefore\; a_{8}=64\times\left(\frac{1}{2}\right)^{8-1}=\frac{2^{6}}{2^{7}}=\frac{1}{2}$$`,
        ],
        answer: String.raw`$\dfrac{1}{2}$`,
      },
    },
    {
      id: 3,
      group: GP_TERM,
      question: String.raw`$3+9+27+\cdots$ ধারাটির প্রথম চৌদ্দটি পদের সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=3,\;\text{সাধারণ অনুপাত }r=\frac{9}{3}=3>1$$`,
          String.raw`$\therefore$ ধারাটি একটি গুণোত্তর ধারা। এখানে পদসংখ্যা $n=14$।`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{a\left(r^{n}-1\right)}{r-1}\qquad(r>1)$$`,
          String.raw`$$\therefore\; S_{14}=\frac{3\left(3^{14}-1\right)}{3-1}=\frac{3}{2}\left(3^{14}-1\right)$$`,
        ],
        answer: String.raw`$\dfrac{3}{2}\left(3^{14}-1\right)$`,
      },
    },
    {
      id: 4,
      group: GP_TERM,
      question: String.raw`$128+64+32+\cdots$ ধারাটির কোন পদ $\dfrac{1}{2}$?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=128=2^{7},\;\text{সাধারণ অনুপাত }r=\frac{64}{128}=\frac{1}{2}$$`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=\dfrac{1}{2}$`,
          String.raw`$$\therefore\; ar^{n-1}=\frac{1}{2}$$`,
          String.raw`$$\text{বা, }2^{7}\times\left(\frac{1}{2}\right)^{n-1}=2^{-1}$$`,
          String.raw`$$\text{বা, }2^{7-(n-1)}=2^{-1}$$`,
          String.raw`$$\text{বা, }8-n=-1$$`,
          String.raw`$$\therefore\; n=9$$`,
        ],
        answer: String.raw`$9$ম পদ`,
      },
    },
    {
      id: 5,
      group: GP_TERM,
      question: String.raw`একটি গুণোত্তর ধারার পঞ্চম পদ $\dfrac{2\sqrt{3}}{9}$ এবং দশম পদ $\dfrac{8\sqrt{2}}{81}$ হলে, ধারাটির তৃতীয় পদ কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অনুপাত $r$।`,
          String.raw`$$\text{প্রশ্নানুসারে, }ar^{4}=\frac{2\sqrt{3}}{9}\qquad\cdots(1)$$`,
          String.raw`$$ar^{9}=\frac{8\sqrt{2}}{81}\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(2)$-কে $(1)$ দ্বারা ভাগ করে পাই,`,
          String.raw`$$r^{5}=\frac{8\sqrt{2}}{81}\times\frac{9}{2\sqrt{3}}=\frac{4\sqrt{2}}{9\sqrt{3}}$$`,
          String.raw`$$\text{এখন, }\left(\frac{\sqrt{2}}{\sqrt{3}}\right)^{5}=\frac{\left(\sqrt{2}\right)^{5}}{\left(\sqrt{3}\right)^{5}}=\frac{4\sqrt{2}}{9\sqrt{3}}$$`,
          String.raw`$$\therefore\; r^{5}=\left(\frac{\sqrt{2}}{\sqrt{3}}\right)^{5}$$`,
          String.raw`$$\therefore\; r=\frac{\sqrt{2}}{\sqrt{3}},\qquad\text{অর্থাৎ }r^{2}=\frac{2}{3}$$`,
          String.raw`$$\therefore\;\text{তৃতীয় পদ}=ar^{2}=\frac{ar^{4}}{r^{2}}=\frac{2\sqrt{3}}{9}\div\frac{2}{3}$$`,
          String.raw`$$=\frac{2\sqrt{3}}{9}\times\frac{3}{2}=\frac{\sqrt{3}}{3}=\frac{1}{\sqrt{3}}$$`,
        ],
        answer: String.raw`$\dfrac{1}{\sqrt{3}}$`,
      },
    },
    {
      id: 6,
      group: GP_TERM,
      question: String.raw`$\dfrac{1}{\sqrt{2}}-1+\sqrt{2}-\cdots$ ধারাটির কোন পদ $8\sqrt{2}$?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=\frac{1}{\sqrt{2}},\;\text{সাধারণ অনুপাত }r=\frac{-1}{\frac{1}{\sqrt{2}}}=-\sqrt{2}$$`,
          String.raw`যাচাই — $(-1)\times\left(-\sqrt{2}\right)=\sqrt{2}$, তাই ধারাটি গুণোত্তর।`,
          String.raw`মনে করি, ধারাটির $n$ তম পদ $=8\sqrt{2}$`,
          String.raw`$$\therefore\;\frac{1}{\sqrt{2}}\times\left(-\sqrt{2}\right)^{n-1}=8\sqrt{2}$$`,
          String.raw`$$\text{বা, }\left(-\sqrt{2}\right)^{n-1}=8\sqrt{2}\times\sqrt{2}=16$$`,
          String.raw`ডান পক্ষ ধনাত্মক, তাই $(n-1)$ জোড় সংখ্যা এবং`,
          String.raw`$$\left(\sqrt{2}\right)^{n-1}=16$$`,
          String.raw`$$\text{বা, }2^{\frac{n-1}{2}}=2^{4}$$`,
          String.raw`$$\text{বা, }\frac{n-1}{2}=4$$`,
          String.raw`$$\text{বা, }n-1=8$$`,
          String.raw`$$\therefore\; n=9$$`,
        ],
        answer: String.raw`$9$ম পদ`,
      },
    },
    {
      id: 7,
      group: GP_TERM,
      question: String.raw`$5+x+y+135$ গুণোত্তর ধারাভুক্ত হলে, $x$ এবং $y$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির সাধারণ অনুপাত $r$; এখানে প্রথম পদ $a=5$।`,
          String.raw`$$\therefore\;\text{চতুর্থ পদ}=ar^{3}=135$$`,
          String.raw`$$\text{বা, }5r^{3}=135$$`,
          String.raw`$$\text{বা, }r^{3}=27=3^{3}$$`,
          String.raw`$$\therefore\; r=3$$`,
          String.raw`$$\therefore\; x=ar=5\times 3=15$$`,
          String.raw`$$\text{এবং }y=ar^{2}=5\times 3^{2}=45$$`,
        ],
        answer: String.raw`$x=15$ এবং $y=45$`,
      },
    },
    {
      id: 8,
      group: GP_TERM,
      question: String.raw`$3+x+y+z+243$ গুণোত্তর ধারাভুক্ত হলে, $x,\,y$ এবং $z$ এর মান নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ধারাটির সাধারণ অনুপাত $r$; এখানে প্রথম পদ $a=3$।`,
          String.raw`$$\therefore\;\text{পঞ্চম পদ}=ar^{4}=243$$`,
          String.raw`$$\text{বা, }3r^{4}=243$$`,
          String.raw`$$\text{বা, }r^{4}=81=3^{4}$$`,
          String.raw`$$\therefore\; r=3$$`,
          String.raw`$$\therefore\; x=ar=3\times 3=9$$`,
          String.raw`$$y=ar^{2}=3\times 3^{2}=27$$`,
          String.raw`$$z=ar^{3}=3\times 3^{3}=81$$`,
          String.raw`উল্লেখ্য, $r^{4}=81$ থেকে $r=-3$ও আসে; তখন $x=-9,\;y=27,\;z=-81$ হয়, যা ধারাটিকে একান্তর চিহ্নের করে তোলে।`,
        ],
        answer: String.raw`$x=9,\;y=27,\;z=81$`,
      },
    },

    // ─────────────── গুণোত্তর ধারার সমষ্টি (9 – 13) ───────────────
    {
      id: 9,
      group: GP_SUM,
      question: String.raw`$2-4+8-16+\cdots$ ধারাটির প্রথম সাতটি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=2,\;\text{সাধারণ অনুপাত }r=\frac{-4}{2}=\frac{8}{-4}=-2$$`,
          String.raw`$\therefore$ ধারাটি একটি গুণোত্তর ধারা। এখানে $r=-2<1$ এবং পদসংখ্যা $n=7$।`,
          String.raw`$$\text{আমরা জানি, }S_{n}=\frac{a\left(1-r^{n}\right)}{1-r}\qquad(r<1)$$`,
          String.raw`$$\therefore\; S_{7}=\frac{2\left\{1-(-2)^{7}\right\}}{1-(-2)}=\frac{2\{1-(-128)\}}{3}$$`,
          String.raw`$$=\frac{2\times 129}{3}=\frac{258}{3}=86$$`,
        ],
        answer: String.raw`$86$`,
      },
    },
    {
      id: 10,
      group: GP_SUM,
      question: String.raw`$1-1+1-1+\cdots$ ধারাটির $(2n+1)$ সংখ্যক পদের সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=1,\;\text{সাধারণ অনুপাত }r=\frac{-1}{1}=-1<1$$`,
          String.raw`এখানে পদসংখ্যা $(2n+1)$, যা একটি বিজোড় সংখ্যা।`,
          String.raw`$$\therefore\; S_{2n+1}=\frac{a\left\{1-r^{2n+1}\right\}}{1-r}=\frac{1\times\left\{1-(-1)^{2n+1}\right\}}{1-(-1)}$$`,
          String.raw`$$=\frac{1-(-1)}{2}=\frac{2}{2}=1\qquad\left[(-1)^{2n+1}=-1\right]$$`,
          String.raw`সহজ ব্যাখ্যা — পদগুলোকে জোড়ায় জোড়ায় নিলে $(1-1)$ আকারের $n$টি জোড়া শূন্য হয়ে যায়, বাকি থাকে কেবল প্রথম পদ $1$।`,
        ],
        answer: String.raw`$1$`,
      },
    },
    {
      id: 11,
      group: GP_SUM,
      question: String.raw`$\log 2+\log 4+\log 8+\cdots$ ধারাটির প্রথম দশটি পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\log 4=\log 2^{2}=2\log 2,\qquad\log 8=\log 2^{3}=3\log 2$$`,
          String.raw`$$\therefore\;\text{ধারাটি }\log 2+2\log 2+3\log 2+\cdots$$`,
          String.raw`এখানে পাশাপাশি দুইটি পদের পার্থক্য সর্বত্র $\log 2$, তাই ধারাটি একটি সমান্তর ধারা।`,
          String.raw`$$\text{প্রথম পদ }a=\log 2,\;\text{সাধারণ অন্তর }d=\log 2,\;\text{পদসংখ্যা }n=10$$`,
          String.raw`$$\therefore\; S_{10}=\frac{10}{2}\{2\log 2+(10-1)\log 2\}$$`,
          String.raw`$$=5(2\log 2+9\log 2)=5\times 11\log 2=55\log 2$$`,
        ],
        answer: String.raw`$55\log 2$`,
      },
    },
    {
      id: 12,
      group: GP_SUM,
      question: String.raw`$2+4+8+16+\cdots$ ধারাটির $n$ সংখ্যক পদের সমষ্টি $254$ হলে, $n$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=2,\;\text{সাধারণ অনুপাত }r=\frac{4}{2}=2>1$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{a\left(r^{n}-1\right)}{r-1}=254$$`,
          String.raw`$$\text{বা, }\frac{2\left(2^{n}-1\right)}{2-1}=254$$`,
          String.raw`$$\text{বা, }2^{n}-1=127$$`,
          String.raw`$$\text{বা, }2^{n}=128=2^{7}$$`,
          String.raw`$$\therefore\; n=7$$`,
        ],
        answer: String.raw`$n=7$`,
      },
    },
    {
      id: 13,
      group: GP_SUM,
      question: String.raw`$2-2+2-2+\cdots$ ধারাটির $(2n+2)$ সংখ্যক পদের সমষ্টি কত?`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=2,\;\text{সাধারণ অনুপাত }r=\frac{-2}{2}=-1<1$$`,
          String.raw`এখানে পদসংখ্যা $(2n+2)$, যা একটি জোড় সংখ্যা।`,
          String.raw`$$\therefore\; S_{2n+2}=\frac{2\left\{1-(-1)^{2n+2}\right\}}{1-(-1)}$$`,
          String.raw`$$=\frac{2(1-1)}{2}=0\qquad\left[(-1)^{2n+2}=1\right]$$`,
          String.raw`সহজ ব্যাখ্যা — $(2-2)$ আকারের $(n+1)$টি জোড়ায় সবগুলো পদ কাটাকাটি হয়ে যায়।`,
        ],
        answer: String.raw`$0$`,
      },
    },

    // ─────────────── বর্গ ও ঘনের সমষ্টি (14 – 16) ───────────────
    {
      id: 14,
      group: GP_POWER,
      question: String.raw`প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার ঘনের সমষ্টি $441$ হলে, $n$ এর মান নির্ণয় করো এবং ঐ সংখ্যাগুলোর সমষ্টি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }1^{3}+2^{3}+\cdots+n^{3}=\left\{\frac{n(n+1)}{2}\right\}^{2}$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }\left\{\frac{n(n+1)}{2}\right\}^{2}=441=21^{2}$$`,
          String.raw`$$\text{বা, }\frac{n(n+1)}{2}=21\qquad\left[\,n\ \text{ধনাত্মক}\,\right]$$`,
          String.raw`$$\text{বা, }n(n+1)=42$$`,
          String.raw`$$\text{বা, }n^{2}+n-42=0$$`,
          String.raw`$$\text{বা, }n^{2}+7n-6n-42=0$$`,
          String.raw`$$\text{বা, }(n+7)(n-6)=0$$`,
          String.raw`$$\therefore\; n=6\qquad\left[\,n=-7\ \text{গ্রহণযোগ্য নয়}\,\right]$$`,
          String.raw`$$\therefore\;\text{সংখ্যাগুলোর সমষ্টি}=\frac{n(n+1)}{2}=\frac{6\times 7}{2}=21$$`,
        ],
        answer: String.raw`$n=6$ এবং সংখ্যাগুলোর সমষ্টি $21$`,
      },
    },
    {
      id: 15,
      group: GP_POWER,
      question: String.raw`দেখাও যে, $$1^{3}+2^{3}+3^{3}+\cdots+10^{3}=(1+2+3+\cdots+10)^{2}$$`,
      solution: {
        steps: [
          String.raw`$$\text{আমরা জানি, }1^{3}+2^{3}+\cdots+n^{3}=\left\{\frac{n(n+1)}{2}\right\}^{2}$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=1^{3}+2^{3}+\cdots+10^{3}=\left\{\frac{10(10+1)}{2}\right\}^{2}$$`,
          String.raw`$$=\left(\frac{10\times 11}{2}\right)^{2}=55^{2}=3025$$`,
          String.raw`$$\text{আবার, }1+2+3+\cdots+n=\frac{n(n+1)}{2}$$`,
          String.raw`$$\therefore\; 1+2+3+\cdots+10=\frac{10\times 11}{2}=55$$`,
          String.raw`$$\therefore\;\text{R.H.S.}=(1+2+3+\cdots+10)^{2}=55^{2}=3025$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=\text{R.H.S.}$$`,
        ],
        answer: String.raw`দেখানো হলো (উভয় পক্ষ $3025$)`,
      },
    },
    {
      id: 16,
      group: GP_POWER,
      question: String.raw`$\dfrac{1^{3}+2^{3}+3^{3}+\cdots+n^{3}}{1+2+3+\cdots+n}=210$ হলে, $n$ এর মান কত?`,
      solution: {
        steps: [
          String.raw`$$1^{3}+2^{3}+\cdots+n^{3}=\left\{\frac{n(n+1)}{2}\right\}^{2},\qquad 1+2+\cdots+n=\frac{n(n+1)}{2}$$`,
          String.raw`$$\therefore\;\text{L.H.S.}=\left\{\frac{n(n+1)}{2}\right\}^{2}\div\frac{n(n+1)}{2}=\frac{n(n+1)}{2}$$`,
          String.raw`$$\text{প্রশ্নানুসারে, }\frac{n(n+1)}{2}=210$$`,
          String.raw`$$\text{বা, }n(n+1)=420$$`,
          String.raw`$$\text{বা, }n^{2}+n-420=0$$`,
          String.raw`$$\text{বা, }n^{2}+21n-20n-420=0$$`,
          String.raw`$$\text{বা, }(n+21)(n-20)=0$$`,
          String.raw`$$\therefore\; n=20\qquad\left[\,n=-21\ \text{গ্রহণযোগ্য নয়}\,\right]$$`,
        ],
        answer: String.raw`$n=20$`,
      },
    },

    // ─────────────── সৃজনশীল প্রশ্ন (17) ───────────────
    {
      id: 17,
      group: GP_CQ,
      question: String.raw`দুপুর $1$টা $15$ মিনিটে $1$ জন এস.এস.সি পরীক্ষার ফলাফল জানতে পারল। $1$টা $20$ মিনিটে জানল $8$ জন, $1$টা $25$ মিনিটে জানল $27$ জন। এভাবে ফলাফল ছড়িয়ে পড়ল।`,
      parts: [
        {
          label: "ক",
          question: String.raw`উদ্দীপকের আলোকে প্যাটার্ন দুইটি লিখ।`,
          solution: {
            steps: [
              String.raw`প্রথম প্যাটার্নটি সময়ের —`,
              String.raw`$$1\text{টা }15,\quad 1\text{টা }20,\quad 1\text{টা }25,\quad\cdots$$`,
              String.raw`প্রতিবার $5$ মিনিট করে বাড়ছে, তাই সময় একটি সমান্তর অনুক্রম গঠন করে এবং $n$ তম সময় $=1$টা $15$ মিনিট $+\,5(n-1)$ মিনিট।`,
              String.raw`দ্বিতীয় প্যাটার্নটি জনসংখ্যার —`,
              String.raw`$$1,\quad 8,\quad 27,\quad\cdots$$`,
              String.raw`$$\text{অর্থাৎ }1^{3},\quad 2^{3},\quad 3^{3},\quad\cdots$$`,
              String.raw`সুতরাং $n$ তম বারে ফলাফল জানবে $n^{3}$ জন।`,
            ],
            answer: String.raw`সময়: $5$ মিনিট অন্তর সমান্তর; জনসংখ্যা: $1^{3},\,2^{3},\,3^{3},\cdots$ অর্থাৎ $n$ তম পদ $n^{3}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`ঠিক $2$টা $10$ মিনিটে কত জন এবং $2$টা $10$ মিনিট পর্যন্ত মোট কত জন ফলাফল জানতে পারবে?`,
          solution: {
            steps: [
              String.raw`$1$টা $15$ মিনিট থেকে $2$টা $10$ মিনিট পর্যন্ত সময় $55$ মিনিট।`,
              String.raw`$$\therefore\; 5(n-1)=55$$`,
              String.raw`$$\text{বা, }n-1=11$$`,
              String.raw`$$\therefore\; n=12$$`,
              String.raw`$$\therefore\;\text{ঠিক 2টা 10 মিনিটে জানবে}=12^{3}=1728\ \text{জন}$$`,
              String.raw`$$\text{আবার, মোট}=1^{3}+2^{3}+3^{3}+\cdots+12^{3}=\left\{\frac{12(12+1)}{2}\right\}^{2}$$`,
              String.raw`$$=\left(\frac{12\times 13}{2}\right)^{2}=78^{2}=6084$$`,
            ],
            answer: String.raw`ঠিক $2$টা $10$ মিনিটে $1728$ জন, মোট $6084$ জন`,
          },
        },
        {
          label: "গ",
          question: String.raw`কয়টার সময় $6175225$ জন ফলাফল জানতে পারবে?`,
          solution: {
            steps: [
              String.raw`মনে করি, $n$ তম বার পর্যন্ত মোট $6175225$ জন ফলাফল জানতে পারবে।`,
              String.raw`$$\text{প্রশ্নানুসারে, }1^{3}+2^{3}+\cdots+n^{3}=6175225$$`,
              String.raw`$$\text{বা, }\left\{\frac{n(n+1)}{2}\right\}^{2}=6175225=(2485)^{2}$$`,
              String.raw`$$\text{বা, }\frac{n(n+1)}{2}=2485$$`,
              String.raw`$$\text{বা, }n(n+1)=4970$$`,
              String.raw`$$\text{বা, }n^{2}+n-4970=0$$`,
              String.raw`$$\text{বা, }n^{2}+71n-70n-4970=0$$`,
              String.raw`$$\text{বা, }(n+71)(n-70)=0$$`,
              String.raw`$$\therefore\; n=70\qquad\left[\,n=-71\ \text{গ্রহণযোগ্য নয়}\,\right]$$`,
              String.raw`$$\therefore\;\text{অতিবাহিত সময়}=5(70-1)=345\ \text{মিনিট}=5\ \text{ঘণ্টা }45\ \text{মিনিট}$$`,
              String.raw`$$\therefore\;\text{নির্ণেয় সময}=1\text{টা }15\ \text{মিনিট}+5\ \text{ঘণ্টা }45\ \text{মিনিট}=7\text{টা}$$`,
            ],
            answer: String.raw`সন্ধ্যা $7$টায়`,
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (18 – 21) ───────────────
    {
      id: 18,
      group: GP_MODEL_MCQ,
      question: String.raw`$5,\,8,\,11,\,\ldots\ldots,\,99$ অনুক্রমটির সাধারণ পদ কোনটি?
ক) $2n+1$  খ) $3n-1$  গ) $3n+1$  ঘ) $3n+2$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=5,\;\text{সাধারণ অন্তর }d=8-5=11-8=3$$`,
          String.raw`$$\therefore\; a_{n}=a+(n-1)d=5+(n-1)3$$`,
          String.raw`$$=5+3n-3=3n+2$$`,
          String.raw`যাচাই — $n=1$ হলে $3+2=5$, $n=2$ হলে $6+2=8$।`,
        ],
        answer: String.raw`ঘ) $3n+2$`,
      },
    },
    {
      id: 19,
      group: GP_MODEL_MCQ,
      question: String.raw`$3+8+13+\cdots+73$ ধারাটি —
$(i)$ একটি সসীম ধারা   $(ii)$ একটি সমান্তর ধারা   $(iii)$ এর $11$ তম পদ $53$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=3,\;\text{সাধারণ অন্তর }d=8-3=13-8=5$$`,
          String.raw`পার্থক্য সমান, তাই ধারাটি সমান্তর — $(ii)$ সঠিক।`,
          String.raw`শেষ পদ $73$ হলে,`,
          String.raw`$$3+(n-1)5=73$$`,
          String.raw`$$\text{বা, }5(n-1)=70$$`,
          String.raw`$$\therefore\; n=15$$`,
          String.raw`পদসংখ্যা নির্দিষ্ট, তাই ধারাটি সসীম — $(i)$ সঠিক।`,
          String.raw`$$\text{11 তম পদ}=3+(11-1)\times 5=3+50=53$$`,
          String.raw`সুতরাং $(iii)$ও সঠিক।`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },
    {
      id: 20,
      group: GP_MODEL_MCQ,
      question: String.raw`$\log 2+\log 4+\log 8+\cdots$ ধারাটির সাধারণ অন্তর কোনটি?
ক) $2$  খ) $4$  গ) $\log 2$  ঘ) $2\log 2$`,
      solution: {
        steps: [
          String.raw`$$\log 4-\log 2=\log\frac{4}{2}=\log 2$$`,
          String.raw`$$\log 8-\log 4=\log\frac{8}{4}=\log 2$$`,
          String.raw`পাশাপাশি দুইটি পদের পার্থক্য সর্বত্র $\log 2$।`,
        ],
        answer: String.raw`গ) $\log 2$`,
      },
    },
    {
      id: 21,
      group: GP_MODEL_MCQ,
      question: String.raw`$\log 2+\log 4+\log 8+\cdots$ ধারাটির সপ্তম পদ কোনটি?
ক) $\log 32$  খ) $\log 64$  গ) $\log 128$  ঘ) $\log 256$`,
      solution: {
        steps: [
          String.raw`$$\text{প্রথম পদ }a=\log 2,\;\text{সাধারণ অন্তর }d=\log 2$$`,
          String.raw`$$\therefore\; a_{7}=a+(7-1)d=\log 2+6\log 2=7\log 2$$`,
          String.raw`$$=\log 2^{7}=\log 128$$`,
        ],
        answer: String.raw`গ) $\log 128$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (22 – 23) ───────────────
    {
      id: 22,
      group: GP_MODEL_CQ,
      question: String.raw`কোনো শিক্ষার্থী প্রথম সপ্তাহে $10$ টাকা সঞ্চয় করে এবং পরবর্তী প্রত্যেক সপ্তাহে এর পূর্ববর্তী সপ্তাহের তুলনায় $5$ টাকা বেশি সঞ্চয় করে।`,
      parts: [
        {
          label: "ক",
          question: String.raw`প্রথম $20$টি স্বাভাবিক সংখ্যার সমষ্টি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{আমরা জানি, }1+2+3+\cdots+n=\frac{n(n+1)}{2}$$`,
              String.raw`$$\therefore\; S_{20}=\frac{20(20+1)}{2}=10\times 21=210$$`,
            ],
            answer: String.raw`$210$`,
          },
        },
        {
          label: "খ",
          question: String.raw`শিক্ষার্থীর সঞ্চয়ের হিসাবটিকে $n$ সংখ্যক পদ পর্যন্ত ধারায় প্রকাশ করো এবং প্রথম $21$ সপ্তাহে সঞ্চিত টাকার পরিমাণ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{প্রশ্নানুসারে, প্রথম পদ }a=10,\;\text{সাধারণ অন্তর }d=5$$`,
              String.raw`$$\therefore\;\text{দ্বিতীয় পদ}=10+5=15,\qquad\text{তৃতীয় পদ}=15+5=20$$`,
              String.raw`$$\therefore\; a_{n}=a+(n-1)d=10+(n-1)5=5n+5$$`,
              String.raw`$$\therefore\;\text{ধারাটি }10+15+20+\cdots+(5n+5)$$`,
              String.raw`$$\text{আবার, }S_{21}=\frac{21}{2}\{2\times 10+(21-1)\times 5\}$$`,
              String.raw`$$=\frac{21}{2}(20+100)=\frac{21}{2}\times 120=21\times 60=1260$$`,
            ],
            answer: String.raw`ধারাটি $10+15+20+\cdots+(5n+5)$; $21$ সপ্তাহে $1260$ টাকা`,
          },
        },
        {
          label: "গ",
          question: String.raw`শিক্ষার্থীর প্রথম সপ্তাহের সঞ্চিত টাকার পরিমাণকে ১ম পদ এবং সাধারণ অনুপাত $10$ ধরে একটি নতুন ধারা তৈরি করো এবং সূত্র প্রয়োগ করে ধারাটির প্রথম $4$টি পদের সমষ্টি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{নতুন ধারাটির প্রথম পদ }a=10,\;\text{সাধারণ অনুপাত }r=10$$`,
              String.raw`$$\therefore\;\text{ধারাটি }10+100+1000+10000+\cdots$$`,
              String.raw`এখানে $r=10>1$ এবং পদসংখ্যা $n=4$।`,
              String.raw`$$\text{আমরা জানি, }S_{n}=\frac{a\left(r^{n}-1\right)}{r-1}\qquad(r>1)$$`,
              String.raw`$$\therefore\; S_{4}=\frac{10\left(10^{4}-1\right)}{10-1}=\frac{10(10000-1)}{9}$$`,
              String.raw`$$=\frac{10\times 9999}{9}=10\times 1111=11110$$`,
            ],
            answer: String.raw`ধারাটি $10+100+1000+10000$; সমষ্টি $11110$`,
          },
        },
      ],
    },
    {
      id: 23,
      group: GP_MODEL_CQ,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$3+7+11+15+\cdots$ ধারার পদগুলো নিয়ে গঠিত অনুক্রমটির সাধারণ পদ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{প্রথম পদ }a=3,\;\text{সাধারণ অন্তর }d=7-3=11-7=4$$`,
              String.raw`$$\therefore\; a_{n}=a+(n-1)d=3+(n-1)4$$`,
              String.raw`$$=3+4n-4=4n-1$$`,
            ],
            answer: String.raw`$4n-1$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$256+128+64+\cdots$ ধারাটির কোন পদ $\dfrac{1}{32}$ তা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{প্রথম পদ }a=256=2^{8},\;\text{সাধারণ অনুপাত }r=\frac{128}{256}=\frac{1}{2}$$`,
              String.raw`মনে করি, ধারাটির $n$ তম পদ $=\dfrac{1}{32}$`,
              String.raw`$$\therefore\; 2^{8}\times\left(\frac{1}{2}\right)^{n-1}=\frac{1}{32}$$`,
              String.raw`$$\text{বা, }2^{8-(n-1)}=2^{-5}$$`,
              String.raw`$$\text{বা, }9-n=-5$$`,
              String.raw`$$\therefore\; n=14$$`,
            ],
            answer: String.raw`$14$ তম পদ`,
          },
        },
        {
          label: "গ",
          question: String.raw`সূত্র প্রয়োগ করে $8^{2}+9^{2}+10^{2}+\cdots+15^{2}$ ধারাটির সমষ্টি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$\text{আমরা জানি, }1^{2}+2^{2}+\cdots+n^{2}=\frac{n(n+1)(2n+1)}{6}$$`,
              String.raw`$$\therefore\; 8^{2}+9^{2}+\cdots+15^{2}=\left(1^{2}+2^{2}+\cdots+15^{2}\right)-\left(1^{2}+2^{2}+\cdots+7^{2}\right)$$`,
              String.raw`$$=\frac{15\times 16\times 31}{6}-\frac{7\times 8\times 15}{6}$$`,
              String.raw`$$=\frac{7440}{6}-\frac{840}{6}=1240-140=1100$$`,
            ],
            answer: String.raw`$1100$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`কোনো সমান্তর ধারার $17$ তম পদ $43$ হলে, এর প্রথম $33$টি পদের সমষ্টি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, ধারাটির প্রথম পদ $a$ এবং সাধারণ অন্তর $d$।`,
              String.raw`$$\text{প্রশ্নানুসারে, }a+(17-1)d=43$$`,
              String.raw`$$\text{বা, }a+16d=43\qquad\cdots(1)$$`,
              String.raw`$$\text{আবার, }S_{33}=\frac{33}{2}\{2a+(33-1)d\}=\frac{33}{2}(2a+32d)$$`,
              String.raw`$$=33(a+16d)=33\times 43=1419$$`,
            ],
            answer: String.raw`$1419$`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ১৭ · পরিসংখ্যান
// ─────────────────────────────────────────────────────────────────────────────
//
// অধ্যায়ের একটিমাত্র অনুশীলনী (বইয়ের পৃষ্ঠা ৩৪২-৩৪৩), তার সঙ্গে বইয়ের নমুনা
// প্রশ্নগুলো (পৃষ্ঠা ৩৪৪) অনুশীলনীর নম্বর ধরে টেনে নেওয়া হয়েছে।
//
// পরিসংখ্যান সারণিতে লেখা হয়, বাক্যে নয় — তাই এখানে প্রশ্ন ও সমাধানের অনেক
// ধাপ `[[table]]` দিয়ে শুরু হয় এবং `Table.tsx` সেগুলো সারণি হিসেবেই আঁকে।
// আর লেখচিত্রগুলো — আয়তলেখ, গণসংখ্যা বহুভুজ ও অজিভ রেখা — `figures/charts17.ts`
// এ আছে; জ্যামিতির `Scene` এদের ধরে না, কারণ চার্টের দুই অক্ষ আলাদা মাপে আঁকা।

const STAT_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const STAT_WORK = "লেখচিত্র, মধ্যক ও গড় (৫ – ৮)";
const STAT_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (৯ – ১২)";
const STAT_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (১৩ – ১৪)";

const exercise17: Exercise = {
  id: "17",
  bnId: "অনুশীলনী ১৭",
  title: "পরিসংখ্যান",
  bookPages: "৩৪২ – ৩৪৪",
  formulas: [
    {
      title: "উপাত্ত সাজানো ও সারণি",
      formulas: [
        {
          statement: String.raw`$$R=(x_{\max}-x_{\min})+1$$`,
          note: String.raw`উপাত্তের পরিসর। অবিন্যস্ত উপাত্তকে শ্রেণিতে ভাগ করার আগে এটিই প্রথম কাজ — সবচেয়ে বড় ও সবচেয়ে ছোট মানের ব্যবধান, দুই প্রান্তের মান দুইটিকেও গুনে।`,
        },
        {
          statement: String.raw`$$k=\frac{R}{h}$$`,
          note: String.raw`শ্রেণি সংখ্যা, যেখানে $h$ শ্রেণি ব্যবধান। ভাগফলে দশমিক এলে পরবর্তী পূর্ণসংখ্যা নিতে হয়, নইলে শেষ কয়েকটি উপাত্ত কোনো শ্রেণিতেই পড়ে না।`,
        },
        {
          statement: String.raw`$$x_i=\frac{L_i+U_i}{2}$$`,
          note: String.raw`শ্রেণি মধ্যমান — শ্রেণির নিম্নমান $L_i$ ও ঊর্ধ্বমানের $U_i$ গড়। শ্রেণিবিন্যস্ত উপাত্তে প্রতিটি উপাত্তের বদলে এই মানটিই ব্যবহৃত হয়।`,
        },
        {
          statement: String.raw`$$F_k=f_1+f_2+\dots+f_k$$`,
          note: String.raw`$k$-তম শ্রেণির ক্রমযোজিত গণসংখ্যা — ঐ শ্রেণি পর্যন্ত মোট কতগুলো উপাত্ত পড়েছে। প্রথম শ্রেণিরটি তার নিজের গণসংখ্যাই।`,
        },
        {
          statement: String.raw`$$U_i'=L_{i+1}'=\frac{U_i+L_{i+1}}{2}$$`,
          note: String.raw`অবিচ্ছিন্ন শ্রেণিসীমা — এক শ্রেণির ঊর্ধ্বসীমা ও পরের শ্রেণির নিম্নসীমার মধ্যবিন্দু দুই শ্রেণিরই সীমা ধরা হয়, যাতে শ্রেণিগুলোর মাঝে কোনো ফাঁক না থাকে। আয়তলেখ আঁকার আগে এটি করে নিতে হয়।`,
        },
      ],
    },
    {
      title: "লেখচিত্র",
      formulas: [
        {
          statement: String.raw`$$[\,L_i',\;U_i'\,]\longmapsto f_i$$`,
          note: String.raw`আয়তলেখ — অবিচ্ছিন্ন শ্রেণিসীমা $L_i'$ থেকে $U_i'$ পর্যন্ত ভূমির উপর $f_i$ উচ্চতার আয়ত। পাশাপাশি আয়তগুলোর মাঝে ফাঁক থাকে না।`,
        },
        {
          statement: String.raw`$$(x_i,\;f_i)$$`,
          note: String.raw`গণসংখ্যা বহুভুজ — শ্রেণি মধ্যমান বরাবর গণসংখ্যার বিন্দুগুলো পর্যায়ক্রমে রেখাংশ দিয়ে যোগ করা হয়। দুই প্রান্ত নামানো হয় আগের ও পরের কাল্পনিক শ্রেণির মধ্যমানে, যেখানে গণসংখ্যা শূন্য।`,
        },
        {
          statement: String.raw`$$(U_i,\;F_i)$$`,
          note: String.raw`অজিভ রেখা বা ক্রমযোজিত গণসংখ্যা লেখচিত্র — শ্রেণির ঊর্ধ্বসীমা বরাবর ক্রমযোজিত গণসংখ্যা। রেখাটি কখনো নামে না, কারণ ক্রমযোজিত গণসংখ্যা কমতে পারে না।`,
        },
      ],
    },
    {
      title: "গাণিতিক গড়",
      formulas: [
        {
          statement: String.raw`$$\bar{x}=\frac{1}{n}\sum_{i=1}^{k} f_i x_i$$`,
          note: String.raw`শ্রেণিবিন্যস্ত উপাত্তের গড়, সরাসরি পদ্ধতিতে। $x_i$ শ্রেণি মধ্যমান, $f_i$ গণসংখ্যা এবং $n=\sum f_i$ মোট গণসংখ্যা।`,
        },
        {
          statement: String.raw`$$\bar{x}=a+\frac{\sum_{i=1}^{k} f_i u_i}{n}\times h,\qquad u_i=\frac{x_i-a}{h}$$`,
          note: String.raw`সংক্ষিপ্ত পদ্ধতি। মধ্যমানগুলোর সুবিধাজনক একটিকে আনুমানিক গড় $a$ ধরলে ধাপ বিচ্যুতি $u_i$ ছোট পূর্ণসংখ্যা হয়ে যায়, তাই গুণ-যোগের কাজ অনেক হালকা হয়। $h$ শ্রেণি ব্যাপ্তি।`,
        },
        {
          statement: String.raw`$$\overline{x_w}=\frac{\sum_{i=1}^{n} x_i w_i}{\sum_{i=1}^{n} w_i}$$`,
          note: String.raw`গুরুত্ব প্রদত্ত গড়। প্রতিটি মান $x_i$ এর নিজস্ব গুরুত্ব বা ভার $w_i$ থাকলে — যেমন কয়েকটি বিভাগের পাশের হারের ভার সেই বিভাগের শিক্ষার্থীর সংখ্যা।`,
        },
      ],
    },
    {
      title: "মধ্যক",
      formulas: [
        {
          statement: String.raw`$$M=\left(\frac{n+1}{2}\right)\text{-th}$$`,
          note: String.raw`অবিন্যস্ত উপাত্তকে মানের ক্রমে সাজানোর পর, $n$ বিজোড় হলে মধ্যক ঠিক মাঝের পদটির মান।`,
        },
        {
          statement: String.raw`$$M=\frac{1}{2}\left[\left(\frac{n}{2}\right)\text{-th}+\left(\frac{n}{2}+1\right)\text{-th}\right]$$`,
          note: String.raw`$n$ জোড় হলে মাঝের পদ দুইটি, তাই মধ্যক তাদের সাংখ্যিক মানের গড়।`,
        },
        {
          statement: String.raw`$$M=L+\left(\frac{n}{2}-F_c\right)\times\frac{h}{f_m}$$`,
          note: String.raw`শ্রেণিবিন্যস্ত উপাত্তের মধ্যক। $\frac{n}{2}$-তম পদ যে শ্রেণিতে পড়ে সেটিই মধ্যক শ্রেণি; $L$ তার নিম্নসীমা, $F_c$ তার পূর্ববর্তী শ্রেণির ক্রমযোজিত গণসংখ্যা, $f_m$ তার নিজের গণসংখ্যা এবং $h$ শ্রেণি ব্যাপ্তি।`,
        },
      ],
    },
    {
      title: "প্রচুরক",
      formulas: [
        {
          statement: String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h$$`,
          note: String.raw`যে শ্রেণির গণসংখ্যা সর্বাধিক সেটিই প্রচুরক শ্রেণি; $L$ তার নিম্নমান, $f_1=$ প্রচুরক শ্রেণির গণসংখ্যা $-$ পূর্ববর্তী শ্রেণির গণসংখ্যা, $f_2=$ প্রচুরক শ্রেণির গণসংখ্যা $-$ পরবর্তী শ্রেণির গণসংখ্যা এবং $h$ শ্রেণি ব্যাপ্তি।`,
        },
        {
          statement: String.raw`$$f_{\text{prev}}=0\quad\text{বা}\quad f_{\text{next}}=0$$`,
          note: String.raw`প্রথম শ্রেণিই প্রচুরক শ্রেণি হলে তার আগের শ্রেণির গণসংখ্যা শূন্য ধরতে হয়; শেষ শ্রেণি প্রচুরক শ্রেণি হলে তার পরের শ্রেণির গণসংখ্যা শূন্য ধরতে হয়।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book pages ৩২৬-৩২৭.
    {
      id: 1,
      question: String.raw`কোনো এক শীত মৌসুমে শ্রীমঙ্গলে জানুয়ারি মাসের $31$ দিনের তাপমাত্রা ডিগ্রি সেলসিয়াসে নিচে দেওয়া হলো। সর্বনিম্ন তাপমাত্রার গণসংখ্যা নিবেশন সারণি তৈরি করো।
$$14^{\circ},\,14^{\circ},\,14^{\circ},\,13^{\circ},\,12^{\circ},\,13^{\circ},\,10^{\circ},\,10^{\circ},\,11^{\circ},\,12^{\circ},\,11^{\circ},\,10^{\circ},\,9^{\circ},\,8^{\circ},\,9^{\circ},\,11^{\circ},$$
$$10^{\circ},\,10^{\circ},\,8^{\circ},\,9^{\circ},\,7^{\circ},\,6^{\circ},\,6^{\circ},\,6^{\circ},\,6^{\circ},\,7^{\circ},\,8^{\circ},\,9^{\circ},\,9^{\circ},\,8^{\circ},\,7^{\circ}$$`,
      solution: {
        steps: [
          String.raw`এখানে তাপমাত্রা নির্দেশক উপাত্তের সবচেয়ে ছোট সংখ্যা $6$ এবং বড় সংখ্যা $14$।`,
          String.raw`সুতরাং উপাত্তের পরিসর,`,
          String.raw`$$R=(14-6)+1=9$$`,
          String.raw`এখন শ্রেণি ব্যবধান যদি $3$ নেওয়া হয় তবে শ্রেণি সংখ্যা হবে,`,
          String.raw`$$k=\frac{9}{3}=3$$`,
          String.raw`শ্রেণি ব্যবধান $3$ নিয়ে তিন শ্রেণিতে উপাত্তসমূহ বিন্যাস করলে, ট্যালি চিহ্ন গুনে গণসংখ্যা নিবেশন সারণি হবে নিম্নরূপ:`,
          String.raw`[[table]]
তাপমাত্রা (সেলসিয়াস) | গণসংখ্যা বা ঘটন সংখ্যা
$6^{\circ}-8^{\circ}$ | $11$
$9^{\circ}-11^{\circ}$ | $13$
$12^{\circ}-14^{\circ}$ | $7$
মোট | $31$`,
        ],
        answer: String.raw`শ্রেণি তিনটির গণসংখ্যা যথাক্রমে $11$, $13$ ও $7$`,
      },
    },
    // উদাহরণ ২ — book pages ৩২৭-৩২৮.
    {
      id: 2,
      question: String.raw`নিচে $40$ জন শিক্ষার্থীর বার্ষিক পরীক্ষার ইংরেজীতে প্রাপ্ত নম্বর দেওয়া হলো (পূর্ণ নম্বর $100$)। প্রাপ্ত নম্বরের ক্রমযোজিত গণসংখ্যা সারণি তৈরি করো।
$$70,\,40,\,35,\,60,\,55,\,58,\,45,\,60,\,65,\,80,\,70,\,46,\,50,\,60,\,65,\,70,\,58,\,60,\,48,\,70,$$
$$36,\,85,\,60,\,50,\,46,\,65,\,55,\,61,\,72,\,85,\,90,\,68,\,65,\,50,\,40,\,56,\,60,\,65,\,46,\,76$$`,
      solution: {
        steps: [
          String.raw`উপাত্তের সর্বনিম্ন মান $35$ এবং সর্বোচ্চ মান $90$।`,
          String.raw`$$R=(90-35)+1=55+1=56$$`,
          String.raw`শ্রেণি ব্যবধান যদি $5$ ধরা হয়, তবে শ্রেণি সংখ্যা,`,
          String.raw`$$k=\frac{56}{5}=11.2\quad\text{or,}\quad 12\qquad\left[\,\text{decimal}\rightarrow\text{next integer}\,\right]$$`,
          String.raw`সুতরাং শ্রেণি ব্যবধান $5$ ধরে ক্রমযোজিত গণসংখ্যা সারণি হবে নিম্নরূপ:`,
          String.raw`[[table]]
প্রাপ্ত নম্বর | গণসংখ্যা | ক্রমযোজিত গণসংখ্যা
$35-39$ | $2$ | $2$
$40-44$ | $2$ | $2+2=4$
$45-49$ | $5$ | $5+4=9$
$50-54$ | $3$ | $3+9=12$
$55-59$ | $5$ | $5+12=17$
$60-64$ | $7$ | $7+17=24$
$65-69$ | $6$ | $6+24=30$
$70-74$ | $5$ | $5+30=35$
$75-79$ | $1$ | $1+35=36$
$80-84$ | $1$ | $1+36=37$
$85-89$ | $2$ | $2+37=39$
$90-94$ | $1$ | $1+39=40$`,
          String.raw`শেষ শ্রেণির ক্রমযোজিত গণসংখ্যা $40$, যা মোট শিক্ষার্থীর সংখ্যার সমান — সারণিটি ঠিক আছে।`,
        ],
        answer: String.raw`উপরের ক্রমযোজিত গণসংখ্যা সারণি, যার শেষ মান $40$`,
      },
    },
    // উদাহরণ ৩ — book pages ৩২৯-৩৩০.
    {
      id: 3,
      question: String.raw`কোনো স্কুলের ১০ম শ্রেণির $60$ জন শিক্ষার্থীর ওজনের গণসংখ্যা নিবেশন হলো নিম্নরূপ:
[[table side]]
ওজন (কিলোগ্রাম) | $46-50$ | $51-55$ | $56-60$ | $61-65$ | $66-70$
গণসংখ্যা | $5$ | $10$ | $20$ | $15$ | $10$`,
      parts: [
        {
          label: "ক",
          question: String.raw`গণসংখ্যা নিবেশনের আয়তলেখ আঁকো।`,
          figure: "17-ex3a",
          solution: {
            steps: [
              String.raw`প্রদত্ত সারণিতে উপাত্তের শ্রেণি ব্যবধান বিচ্ছিন্ন, তাই আয়তলেখ আঁকার আগে শ্রেণিসীমা অবিচ্ছিন্ন করে নিতে হবে।`,
              String.raw`এক শ্রেণির ঊর্ধ্বসীমা ও পরের শ্রেণির নিম্নসীমার মধ্যবিন্দু নিলে সারণিটি হবে:`,
              String.raw`[[table]]
শ্রেণি ব্যবধান: ওজন (কিলোগ্রাম) | অবিচ্ছিন্ন শ্রেণিসীমা | শ্রেণি মধ্যবিন্দু | গণসংখ্যা
$46-50$ | $45.5-50.5$ | $48$ | $5$
$51-55$ | $50.5-55.5$ | $53$ | $10$
$56-60$ | $55.5-60.5$ | $58$ | $20$
$61-65$ | $60.5-65.5$ | $63$ | $15$
$66-70$ | $65.5-70.5$ | $68$ | $10$`,
              String.raw`ছক কাগজের প্রতি ঘরকে পাঁচ একক ধরে $x$-অক্ষ বরাবর শ্রেণিসীমা এবং $y$-অক্ষ বরাবর গণসংখ্যা নিয়ে উপরের আয়তলেখ আঁকা হয়েছে।`,
              String.raw`$x$-অক্ষ বরাবর শ্রেণিসীমা $45.5$ থেকে আরম্ভ হয়েছে; মূলবিন্দু থেকে $45.5$ পর্যন্ত পূর্ববর্তী ঘরগুলো আছে বোঝাতে ছেদ চিহ্ন ব্যবহার করা হয়েছে।`,
            ],
            answer: String.raw`উপরের আয়তলেখ — পাঁচটি আয়তের উচ্চতা যথাক্রমে $5,\,10,\,20,\,15,\,10$`,
          },
        },
        {
          label: "খ",
          question: String.raw`আয়তলেখের গণসংখ্যা বহুভুজ আঁকো।`,
          figure: "17-ex3b",
          solution: {
            steps: [
              String.raw`আয়তলেখ হতে গণসংখ্যা বহুভুজ আঁকার জন্য আয়তলেখের আয়তসমূহের ভূমির সমান্তরাল বিপরীত বাহুর মধ্যবিন্দুসমূহ নির্ধারণ করা হয়েছে।`,
              String.raw`বিন্দুগুলো যথাক্রমে $(48,5),\,(53,10),\,(58,20),\,(63,15),\,(68,10)$।`,
              String.raw`চিহ্নিত মধ্যবিন্দুসমূহ রেখাংশ দ্বারা সংযুক্ত করে গণসংখ্যা বহুভুজ আঁকা হয়েছে।`,
              String.raw`গণসংখ্যা বহুভুজ সুন্দর দেখানোর জন্য প্রথম ও শেষ আয়তের মধ্যবিন্দুর সংযোগ রেখাংশের প্রান্ত বিন্দুদ্বয় $x$-অক্ষের সাথে সংযুক্ত করা হয়েছে — অর্থাৎ আগের শ্রেণির মধ্যবিন্দু $43$ ও পরের শ্রেণির মধ্যবিন্দু $73$ বরাবর নামানো হয়েছে।`,
            ],
            answer: String.raw`উপরের গণসংখ্যা বহুভুজ — রেখাংশগুলো প্রতিটি শ্রেণির মধ্যবিন্দু বরাবর`,
          },
        },
      ],
    },
    // উদাহরণ ৪ — book pages ৩৩০-৩৩১.
    {
      id: 4,
      figure: "17-ex4",
      question: String.raw`নিচের গণসংখ্যা নিবেশন সারণির বহুভুজ অঙ্কন করো।
[[table side]]
শ্রেণি ব্যবধান | $10-20$ | $20-30$ | $30-40$ | $40-50$ | $50-60$ | $60-70$ | $70-80$ | $80-90$
মধ্যবিন্দু | $15$ | $25$ | $35$ | $45$ | $55$ | $65$ | $75$ | $85$
গণসংখ্যা | $8$ | $10$ | $15$ | $30$ | $45$ | $41$ | $15$ | $7$`,
      solution: {
        steps: [
          String.raw`এখানে শ্রেণি ব্যবধানগুলো আগে থেকেই অবিচ্ছিন্ন, তাই সরাসরি আয়তলেখ আঁকা যায়।`,
          String.raw`$x$-অক্ষ বরাবর ছক কাগজের প্রতি ঘরকে $10$ একক ধরে এবং $y$-অক্ষ বরাবর প্রতি ঘরকে গণসংখ্যার $5$ একক ধরে প্রদত্ত গণসংখ্যা নিবেশনের আয়তলেখ আঁকা হলো।`,
          String.raw`আয়তলেখের আয়তসমূহের ভূমির বিপরীত বাহুর মধ্যবিন্দু, যা শ্রেণির মধ্যবিন্দু, চিহ্নিত করি।`,
          String.raw`এখন চিহ্নিত মধ্যবিন্দুসমূহ রেখাংশ দ্বারা সংযুক্ত করি।`,
          String.raw`প্রথম শ্রেণির প্রান্তবিন্দু ও শেষ শ্রেণির প্রান্তবিন্দুদ্বয়কে $x$-অক্ষের সাথে সংযুক্ত করে গণসংখ্যা বহুভুজ অঙ্কন করা হলো।`,
        ],
        answer: String.raw`উপরের আয়তলেখ ও তার গণসংখ্যা বহুভুজ`,
      },
    },
    // উদাহরণ ৫ — book pages ৩৩১-৩৩২.
    {
      id: 5,
      figure: "17-ex5",
      question: String.raw`১০ম শ্রেণির $50$ জন শিক্ষার্থীর বিজ্ঞান বিষয়ের প্রাপ্ত নম্বরের গণসংখ্যা নিবেশন সারণি দেওয়া হলো। প্রদত্ত উপাত্তের গণসংখ্যা বহুভুজ আঁক (আয়তলেখ ব্যবহার না করে)।
[[table side]]
শ্রেণি ব্যবধান | $31-40$ | $41-50$ | $51-60$ | $61-70$ | $71-80$ | $81-90$ | $91-100$
গণসংখ্যা | $6$ | $8$ | $10$ | $12$ | $5$ | $7$ | $2$`,
      solution: {
        steps: [
          String.raw`এখানে প্রদত্ত উপাত্ত বিচ্ছিন্ন। এক্ষেত্রে শ্রেণি ব্যবধানের মধ্যবিন্দু বের করে সরাসরি গণসংখ্যা বহুভুজ আঁকা সুবিধাজনক।`,
          String.raw`প্রথম শ্রেণি $(31-40)$ এর মধ্যবিন্দু,`,
          String.raw`$$x_1=\frac{31+40}{2}=35.5$$`,
          String.raw`একইভাবে বাকি শ্রেণিগুলোর মধ্যবিন্দু বসিয়ে সারণিটি হবে:`,
          String.raw`[[table side]]
শ্রেণি ব্যবধান | $31-40$ | $41-50$ | $51-60$ | $61-70$ | $71-80$ | $81-90$ | $91-100$
শ্রেণি ব্যবধানের মধ্যবিন্দু | $35.5$ | $45.5$ | $55.5$ | $65.5$ | $75.5$ | $85.5$ | $95.5$
গণসংখ্যা | $6$ | $8$ | $10$ | $12$ | $5$ | $7$ | $2$`,
          String.raw`$x$-অক্ষ বরাবর ছক কাগজের প্রতি এক ঘরকে এক একক ধরে এবং $y$-অক্ষ বরাবর ছক কাগজের এক ঘরকে গণসংখ্যার দুই একক ধরে প্রদত্ত উপাত্তের গণসংখ্যা বহুভুজ আঁকা হলো।`,
        ],
        answer: String.raw`উপরের গণসংখ্যা বহুভুজ — বিন্দুগুলো $(35.5,6),\,(45.5,8),\,\dots,\,(95.5,2)$`,
      },
    },
    // উদাহরণ ৬ — book pages ৩৩২-৩৩৩.
    {
      id: 6,
      figure: "17-ex6",
      question: String.raw`কোনো শ্রেণির ৬০ জন শিক্ষার্থীর ৫০ নম্বরের সাময়িকী পরীক্ষার প্রাপ্ত নম্বরের গণসংখ্যা নিবেশন সারণি হলো। এই গণসংখ্যা নিবেশনের অজিভ রেখা আঁকো।
[[table side]]
প্রাপ্ত নম্বরের শ্রেণি ব্যবধান | $1-10$ | $11-20$ | $21-30$ | $31-40$ | $41-50$
গণসংখ্যা | $8$ | $12$ | $15$ | $18$ | $7$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত উপাত্তের গণসংখ্যা নিবেশনের ক্রমযোজিত গণসংখ্যা সারণি হলো:`,
          String.raw`[[table side]]
প্রাপ্ত নম্বরের শ্রেণি ব্যবধান | $1-10$ | $11-20$ | $21-30$ | $31-40$ | $41-50$
গণসংখ্যা | $8$ | $12$ | $15$ | $18$ | $7$
ক্রমযোজিত গণসংখ্যা | $8$ | $8+12=20$ | $15+20=35$ | $18+35=53$ | $7+53=60$`,
          String.raw`শ্রেণি ব্যবধানের উচ্চসীমা $x$-অক্ষ বরাবর এবং শ্রেণির ক্রমযোজিত গণসংখ্যা $y$-অক্ষ বরাবর স্থাপন করি।`,
          String.raw`অর্থাৎ বিন্দুগুলো $(10,8),\,(20,20),\,(30,35),\,(40,53),\,(50,60)$।`,
          String.raw`ছক কাগজের উভয় অক্ষে প্রতি এক ঘরকে দুই একক ধরে প্রদত্ত উপাত্তের ক্রমযোজিত গণসংখ্যার অজিভ রেখা আঁকা হলো।`,
        ],
        answer: String.raw`উপরের অজিভ রেখা — শেষ বিন্দু $(50,60)$`,
      },
    },
    // উদাহরণ ৭ — book pages ৩৩৩-৩৩৪.
    {
      id: 7,
      question: String.raw`নিচে কোনো একটি শ্রেণির শিক্ষার্থীদের গণিতে প্রাপ্ত নম্বরের গণসংখ্যা নিবেশন সারণি দেওয়া হলো। প্রাপ্ত নম্বরের গাণিতিক গড় নির্ণয় করো।
[[table side]]
শ্রেণি ব্যাপ্তি | $25-34$ | $35-44$ | $45-54$ | $55-64$ | $65-74$ | $75-84$ | $85-94$
গণসংখ্যা | $5$ | $10$ | $15$ | $20$ | $30$ | $16$ | $4$`,
      solution: {
        steps: [
          String.raw`এখানে শ্রেণি ব্যাপ্তি দেওয়া আছে বিধায় শিক্ষার্থীদের ব্যক্তিগত নম্বর কত তা জানা যায় না। এ ক্ষেত্রে প্রত্যেক শ্রেণির শ্রেণি মধ্যমান নির্ণয় করার প্রয়োজন হয়।`,
          String.raw`$$x_i=\frac{L_i+U_i}{2}$$`,
          String.raw`প্রথম শ্রেণির মধ্যমান $\dfrac{25+34}{2}=29.5$; একইভাবে বাকিগুলো বসিয়ে মধ্যমান সংবলিত সারণি হবে নিম্নরূপ:`,
          String.raw`[[table]]
শ্রেণি ব্যাপ্তি | শ্রেণি মধ্যমান $(x_i)$ | গণসংখ্যা $(f_i)$ | $(f_ix_i)$
$25-34$ | $29.5$ | $5$ | $147.5$
$35-44$ | $39.5$ | $10$ | $395$
$45-54$ | $49.5$ | $15$ | $742.5$
$55-64$ | $59.5$ | $20$ | $1190$
$65-74$ | $69.5$ | $30$ | $2085$
$75-84$ | $79.5$ | $16$ | $1272$
$85-94$ | $89.5$ | $4$ | $358$
মোট | | $n=100$ | $6190.0$`,
          String.raw`নির্ণেয় গাণিতিক গড়,`,
          String.raw`$$\bar{x}=\frac{1}{n}\sum_{i=1}^{k} f_i x_i=\frac{1}{100}\times 6190=61.9$$`,
        ],
        answer: String.raw`$61.9$`,
      },
    },
    // উদাহরণ ৮ — book page ৩৩৫.
    {
      id: 8,
      question: String.raw`কোনো দ্রব্যের উৎপাদনে বিভিন্ন পর্যায়ে যে খরচসমূহ (শত টাকায়) হয় তা নিচের সারণিতে দেখানো হয়েছে। সংক্ষিপ্ত পদ্ধতিতে গড় খরচ নির্ণয় করো।
[[table side]]
উৎপাদন খরচ | $2-6$ | $6-10$ | $10-14$ | $14-18$ | $18-22$ | $22-26$ | $26-30$ | $30-34$
গণসংখ্যা | $1$ | $9$ | $21$ | $47$ | $52$ | $36$ | $19$ | $3$`,
      solution: {
        steps: [
          String.raw`শ্রেণিগুলো অবিচ্ছিন্ন, তাই শ্রেণি ব্যাপ্তি $h=6-2=4$।`,
          String.raw`মধ্যমানগুলোর মধ্যে সুবিধাজনক $20$-কে আনুমানিক গড় ধরি, অর্থাৎ $a=20$।`,
          String.raw`প্রতিটি শ্রেণির ধাপ বিচ্যুতি $u_i=\dfrac{x_i-a}{h}$ বের করে সংক্ষিপ্ত পদ্ধতিতে গড় নির্ণয়ের সারণি হবে নিম্নরূপ:`,
          String.raw`[[table]]
শ্রেণি ব্যাপ্তি | মধ্যমান $x_i$ | গণসংখ্যা $f_i$ | ধাপ বিচ্যুতি $u_i=\dfrac{x_i-a}{h}$ | $f_iu_i$
$2-6$ | $4$ | $1$ | $-4$ | $-4$
$6-10$ | $8$ | $9$ | $-3$ | $-27$
$10-14$ | $12$ | $21$ | $-2$ | $-42$
$14-18$ | $16$ | $47$ | $-1$ | $-47$
$18-22$ | $20\leftarrow a$ | $52$ | $0$ | $0$
$22-26$ | $24$ | $36$ | $1$ | $36$
$26-30$ | $28$ | $19$ | $2$ | $38$
$30-34$ | $32$ | $3$ | $3$ | $9$
মোট | | $188$ | | $-37$`,
          String.raw`নির্ণেয় গড়,`,
          String.raw`$$\bar{x}=a+\frac{\sum f_iu_i}{n}\times h=20+\frac{-37}{188}\times 4$$`,
          String.raw`$$=20-0.79=19.21$$`,
          String.raw`$\therefore$ উৎপাদনে আনুমানিক গড় খরচ $19$ শত টাকা।`,
        ],
        answer: String.raw`$19.21$ শত টাকা, অর্থাৎ প্রায় $19$ শত টাকা`,
      },
    },
    // উদাহরণ ৯ — book pages ৩৩৫-৩৩৬.
    {
      id: 9,
      question: String.raw`কোনো বিশ্ববিদ্যালয়ের কয়েকটি বিভাগের স্নাতক সম্মান শ্রেণিতে পাশের হার ও শিক্ষার্থীর সংখ্যা নিচের সারণিতে উপস্থাপন করা হলো। উক্ত বিশ্ববিদ্যালয়ের ঐ কয়টি বিভাগের স্নাতক সম্মান শ্রেণিতে পাশের গড় হার নির্ণয় করো।
[[table side]]
বিভাগের নাম | গণিত | পরিসংখ্যান | ইংরেজি | বাংলা | প্রাণিবিদ্যা | রাষ্ট্রবিজ্ঞান
পাশের হার (%) | $70$ | $80$ | $50$ | $90$ | $60$ | $85$
শিক্ষার্থীর সংখ্যা | $80$ | $120$ | $100$ | $225$ | $135$ | $300$`,
      solution: {
        steps: [
          String.raw`এখানে পাশের হার ও শিক্ষার্থীর সংখ্যা দেওয়া আছে। পাশের হারের ভার হলো শিক্ষার্থীর সংখ্যা।`,
          String.raw`পাশের হারের চলক $x$ এবং শিক্ষার্থীর সংখ্যা চলক $w$ ধরলে গুরুত্ব প্রদত্ত গাণিতিক গড় নির্ণয়ের সারণি হবে নিম্নরূপ:`,
          String.raw`[[table]]
বিভাগের নাম | পাশের হার $x_i$ | শিক্ষার্থীর সংখ্যা $w_i$ | $x_iw_i$
গণিত | $70$ | $80$ | $5600$
পরিসংখ্যান | $80$ | $120$ | $9600$
ইংরেজি | $50$ | $100$ | $5000$
বাংলা | $90$ | $225$ | $20250$
প্রাণিবিদ্যা | $60$ | $135$ | $8100$
রাষ্ট্রবিজ্ঞান | $85$ | $300$ | $25500$
মোট | | $960$ | $74050$`,
          String.raw`$$\overline{x_w}=\frac{\sum_{i=1}^{6} x_iw_i}{\sum_{i=1}^{6} w_i}=\frac{74050}{960}=77.14$$`,
          String.raw`$\therefore$ পাশের গড় হার $77.14$।`,
        ],
        answer: String.raw`$77.14\%$`,
      },
    },
    // উদাহরণ ১০ — book pages ৩৩৬-৩৩৭.
    {
      id: 10,
      question: String.raw`নিচের $51$ জন শিক্ষার্থীর উচ্চতার গণসংখ্যা নিবেশন সারণি দেওয়া হলো। মধ্যক নির্ণয় করো।
[[table side]]
উচ্চতা (সে.মি.) | $150$ | $155$ | $160$ | $165$ | $170$ | $175$
গণসংখ্যা | $4$ | $6$ | $12$ | $16$ | $8$ | $5$`,
      solution: {
        steps: [
          String.raw`মধ্যক নির্ণয়ের ক্রমযোজিত গণসংখ্যা সারণি:`,
          String.raw`[[table side]]
উচ্চতা (সে.মি.) | $150$ | $155$ | $160$ | $165$ | $170$ | $175$
গণসংখ্যা | $4$ | $6$ | $12$ | $16$ | $8$ | $5$
ক্রমযোজিত গণসংখ্যা | $4$ | $10$ | $22$ | $38$ | $46$ | $51$`,
          String.raw`এখানে, $n=51$, যা বিজোড় সংখ্যা।`,
          String.raw`$$\therefore\;M=\left(\frac{51+1}{2}\right)\text{-th}=26\text{-th}$$`,
          String.raw`$23$ থেকে $38$ তম পদের মান $165$, সুতরাং $26$ তম পদের মান $165$।`,
          String.raw`নির্ণেয় মধ্যক $165$ সে.মি.।`,
        ],
        answer: String.raw`$165$ সে.মি.`,
      },
    },
    // উদাহরণ ১১ — book page ৩৩৭.
    {
      id: 11,
      question: String.raw`নিচে $60$ জন শিক্ষার্থীর গণিতে প্রাপ্ত নম্বরের গণসংখ্যা নিবেশন সারণি। মধ্যক নির্ণয় করো।
[[table side]]
প্রাপ্ত নম্বর | $40$ | $45$ | $50$ | $55$ | $60$ | $70$ | $80$ | $85$ | $90$ | $95$ | $100$
গণসংখ্যা | $2$ | $4$ | $4$ | $3$ | $7$ | $10$ | $16$ | $6$ | $4$ | $3$ | $1$`,
      solution: {
        steps: [
          String.raw`মধ্যক নির্ণয়ের ক্রমযোজিত গণসংখ্যা সারণি:`,
          String.raw`[[table side]]
প্রাপ্ত নম্বর | $40$ | $45$ | $50$ | $55$ | $60$ | $70$ | $80$ | $85$ | $90$ | $95$ | $100$
গণসংখ্যা | $2$ | $4$ | $4$ | $3$ | $7$ | $10$ | $16$ | $6$ | $4$ | $3$ | $1$
ক্রমযোজিত গণসংখ্যা | $2$ | $6$ | $10$ | $13$ | $20$ | $30$ | $46$ | $52$ | $56$ | $59$ | $60$`,
          String.raw`এখানে, $n=60$, যা জোড় সংখ্যা।`,
          String.raw`$$M=\frac{1}{2}\left[\left(\frac{60}{2}\right)\text{-th}+\left(\frac{60}{2}+1\right)\text{-th}\right]=\frac{30\text{-th}+31\text{-th}}{2}$$`,
          String.raw`ক্রমযোজিত গণসংখ্যা থেকে দেখা যায় $30$ তম পদের মান $70$ এবং $31$ তম পদের মান $80$।`,
          String.raw`$$\therefore\;M=\frac{70+80}{2}=75$$`,
          String.raw`নির্ণেয় মধ্যক $75$।`,
        ],
        answer: String.raw`$75$`,
      },
    },
    // উদাহরণ ১২ — book pages ৩৩৮-৩৩৯.
    {
      id: 12,
      question: String.raw`নিচে একটি গণসংখ্যা নিবেশন সারণি দেওয়া আছে।
[[table side]]
সময় (সেকেন্ড) | $30-35$ | $36-41$ | $42-47$ | $48-53$ | $54-59$ | $60-65$
গণসংখ্যা | $3$ | $10$ | $18$ | $25$ | $8$ | $6$`,
      parts: [
        {
          label: "ক",
          question: String.raw`গণসংখ্যা নিবেশন সারণি বলতে কী বুঝ?`,
          solution: {
            steps: [
              String.raw`প্রদত্ত উপাত্তসমূহকে নির্দিষ্ট শ্রেণি ব্যবধান ও শ্রেণি সংখ্যা নির্ধারণের মাধ্যমে বিন্যস্ত ও সারণিভুক্ত করাকে গণসংখ্যা সারণি বলে।`,
            ],
            answer: String.raw`নির্দিষ্ট শ্রেণি ব্যবধানে বিন্যস্ত ও সারণিভুক্ত উপাত্তের সারণি`,
          },
        },
        {
          label: "খ",
          question: String.raw`উপরের গণসংখ্যা সারণি থেকে মধ্যক নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মধ্যক নির্ণয়ের জন্য গণসংখ্যা নিবেশন সারণি:`,
              String.raw`[[table]]
শ্রেণি ব্যাপ্তি | গণসংখ্যা | ক্রমযোজিত গণসংখ্যা
$30-35$ | $3$ | $3$
$36-41$ | $10$ | $13$
$42-47$ | $18$ | $31$
$48-53$ | $25$ | $56$
$54-59$ | $8$ | $64$
$60-65$ | $6$ | $70$
মোট | $n=70$ |`,
              String.raw`এখানে, $n=70$ এবং $\dfrac{n}{2}=\dfrac{70}{2}=35$।`,
              String.raw`অতএব, মধ্যক $35$ তম পদ, যার অবস্থান $48-53$ শ্রেণিতে। অতএব মধ্যক শ্রেণি $48-53$।`,
              String.raw`সুতরাং $L=48,\;F_c=31,\;f_m=25$ এবং $h=(53-48)+1=6$।`,
              String.raw`$$M=L+\left(\frac{n}{2}-F_c\right)\times\frac{h}{f_m}=48+(35-31)\times\frac{6}{25}$$`,
              String.raw`$$=48+4\times\frac{6}{25}=48+0.96=48.96$$`,
              String.raw`নির্ণেয় মধ্যক $48.96$।`,
            ],
            answer: String.raw`$48.96$`,
          },
        },
        {
          label: "গ",
          question: String.raw`তারপর সারণিতে প্রদত্ত উপাত্তের বহুভুজ অঙ্কন করো।`,
          figure: "17-ex12",
          solution: {
            steps: [
              String.raw`বহুভুজ অঙ্কনের জন্য প্রতিটি শ্রেণির মধ্যমান নির্ণয় করি:`,
              String.raw`[[table]]
শ্রেণি ব্যাপ্তি | শ্রেণির মধ্যমান | গণসংখ্যা
$30-35$ | $32.5$ | $3$
$36-41$ | $38.5$ | $10$
$42-47$ | $44.5$ | $18$
$48-53$ | $50.5$ | $25$
$54-59$ | $56.5$ | $8$
$60-65$ | $62.5$ | $6$`,
              String.raw`প্রথম শ্রেণির পূর্বের শ্রেণির মধ্যমান $26.5$ এবং শেষ শ্রেণির পরের শ্রেণির মধ্যমান $68.5$।`,
              String.raw`$x$-অক্ষ বরাবর শ্রেণির মধ্যমান সুবিধাজনক এককে নিয়ে, যেখানে ছেদ চিহ্নটি $0$ থেকে $26.5$ বুঝায়, এবং $y$-অক্ষ বরাবর গণসংখ্যা প্রতি ক্ষুদ্রতম বর্গের বাহুর দৈর্ঘ্যকে $2$ ধরে গণসংখ্যা বহুভুজ অঙ্কন করা হলো।`,
            ],
            answer: String.raw`উপরের গণসংখ্যা বহুভুজ — শীর্ষবিন্দু $(50.5,\,25)$`,
          },
        },
      ],
    },
    // উদাহরণ ১৩ — book pages ৩৩৯-৩৪১.
    {
      id: 13,
      question: String.raw`নিচের সারণিটি লক্ষ করো।
[[table side]]
শ্রেণি ব্যাপ্তি | $31-40$ | $41-50$ | $51-60$ | $61-70$ | $71-80$ | $81-90$ | $91-100$
গণসংখ্যা | $4$ | $6$ | $8$ | $12$ | $9$ | $7$ | $4$`,
      parts: [
        {
          label: "ক",
          question: String.raw`কেন্দ্রীয় প্রবণতা কী?`,
          solution: {
            steps: [
              String.raw`অবিন্যস্ত উপাত্তসমূহ মানের ক্রমানুসারে সাজালে, উপাত্তসমূহ মাঝামাঝি কোনো মানের কাছাকাছি পুঞ্জীভূত হয়।`,
              String.raw`আবার উপাত্তসমূহ গণসংখ্যা নিবেশন সারণিতে উপস্থাপন করা হলে কোনো একটি শ্রেণিতে গণসংখ্যার প্রাচুর্য দেখা যায়।`,
              String.raw`উপাত্তসমূহের কেন্দ্রীয় মানের দিকে পুঞ্জীভূত হওয়ার এই প্রবণতাকে কেন্দ্রীয় প্রবণতা বলে।`,
            ],
            answer: String.raw`উপাত্তের কেন্দ্রীয় মানের দিকে পুঞ্জীভূত হওয়ার প্রবণতা`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রদত্ত সারণি থেকে প্রচুরক নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h$$`,
              String.raw`এখানে, গণসংখ্যা সর্বাধিক $12$ আছে $61-70$ শ্রেণিতে।`,
              String.raw`সুতরাং $L=61,\;f_1=12-8=4,\;f_2=12-9=3,\;h=10$।`,
              String.raw`$$\therefore\;M_o=61+\frac{4}{4+3}\times 10=61+\frac{4}{7}\times 10$$`,
              String.raw`$$=61+\frac{40}{7}=61+5.7=66.7$$`,
              String.raw`নির্ণেয় প্রচুরক $66.7$।`,
            ],
            answer: String.raw`$66.7$`,
          },
        },
        {
          label: "গ",
          question: String.raw`উপাত্তের অজিভ রেখা অঙ্কন করো।`,
          figure: "17-ex13",
          solution: {
            steps: [
              String.raw`অজিভ রেখা অঙ্কনের জন্য শ্রেণিগুলো অবিচ্ছিন্ন করে ক্রমযোজিত গণসংখ্যা সারণি তৈরি করি:`,
              String.raw`[[table]]
শ্রেণি | অবিচ্ছিন্ন শ্রেণি ব্যাপ্তি | গণসংখ্যা | ক্রমযোজিত গণসংখ্যা
$31-40$ | $30-40$ | $4$ | $4$
$41-50$ | $40-50$ | $6$ | $10$
$51-60$ | $50-60$ | $8$ | $18$
$61-70$ | $60-70$ | $12$ | $30$
$71-80$ | $70-80$ | $9$ | $39$
$81-90$ | $80-90$ | $7$ | $46$
$91-100$ | $90-100$ | $4$ | $50$`,
              String.raw`$x$-অক্ষ বরাবর অবিচ্ছিন্ন শ্রেণি ব্যাপ্তি সুবিধাজনক একক নিয়ে, যেখানে ছেদ চিহ্নটি $0$ থেকে $30$ বুঝায়, এবং $y$-অক্ষ বরাবর ক্রমযোজিত গণসংখ্যা ক্ষুদ্রতম বর্গের প্রতি বাহুর দৈর্ঘ্যকে $5$ একক ধরে শ্রেণির ঊর্ধ্বসীমা বরাবর বিন্দুগুলো চিহ্নিত করি।`,
              String.raw`অতঃপর $x$-অক্ষে $30$ থেকে চিহ্নিত বিন্দুগুলো সাবলীলভাবে যোগ করি। এটিই নির্ণেয় অজিভ রেখা।`,
            ],
            answer: String.raw`উপরের অজিভ রেখা — শেষ বিন্দু $(100,\,50)$`,
          },
        },
      ],
    },
    // উদাহরণ ১৪ — book page ৩৪১.
    {
      id: 14,
      question: String.raw`নিচের গণসংখ্যা নিবেশন সারণি থেকে প্রচুরক নির্ণয় করো:
[[table side]]
শ্রেণি | $41-50$ | $51-60$ | $61-70$ | $71-80$
গণসংখ্যা | $25$ | $20$ | $15$ | $8$`,
      solution: {
        steps: [
          String.raw`এখানে গণসংখ্যা সর্বাধিক $25$ বার আছে $(41-50)$ শ্রেণিতে। সুতরাং, প্রচুরক এই শ্রেণিতে আছে।`,
          String.raw`আমরা জানি,`,
          String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h$$`,
          String.raw`প্রথম শ্রেণিতেই গণসংখ্যা বেশি হলে, পূর্ববর্তী শ্রেণির গণসংখ্যা শূন্য।`,
          String.raw`এখানে, $L=41,\;f_1=25-0=25,\;f_2=25-20=5,\;h=10$।`,
          String.raw`$$\therefore\;M_o=41+\frac{25}{25+5}\times 10=41+\frac{25}{30}\times 10$$`,
          String.raw`$$=41+8.33=49.33$$`,
          String.raw`নির্ণেয় প্রচুরক $49.33$।`,
        ],
        answer: String.raw`$49.33$`,
      },
    },
    // উদাহরণ ১৫ — book page ৩৪১.
    {
      id: 15,
      question: String.raw`নিচের গণসংখ্যা নিবেশন সারণি থেকে প্রচুরক নির্ণয় করো:
[[table side]]
শ্রেণি | $11-20$ | $21-30$ | $31-40$ | $41-50$
গণসংখ্যা | $4$ | $16$ | $20$ | $25$`,
      solution: {
        steps: [
          String.raw`এখানে গণসংখ্যা সর্বাধিক $25$ বার আছে $(41-50)$ শ্রেণিতে। এই শ্রেণিতে প্রচুরক বিদ্যমান।`,
          String.raw`আমরা জানি,`,
          String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h$$`,
          String.raw`শেষ শ্রেণি প্রচুরক শ্রেণি হলে, পরবর্তী শ্রেণির ঘটন সংখ্যা শূন্য ধরা হয়।`,
          String.raw`এখানে, $L=41,\;f_1=25-20=5,\;f_2=25-0=25,\;h=10$।`,
          String.raw`$$\therefore\;M_o=41+\frac{5}{5+25}\times 10=41+\frac{5}{30}\times 10$$`,
          String.raw`$$=41+\frac{5}{3}=41+1.67=42.67$$`,
          String.raw`নির্ণেয় প্রচুরক $42.67$ (প্রায়)।`,
        ],
        answer: String.raw`$42.67$ (প্রায়)`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: STAT_MCQ,
      question: String.raw`উপাত্তসমূহ সারণিভুক্ত করা হলে প্রতি শ্রেণিতে যতগুলো উপাত্ত অন্তর্ভুক্ত হয় তার নির্দেশক নিচের কোনটি?
$$\text{ক) শ্রেণি সীমা}\qquad\text{খ) শ্রেণির মধ্যবিন্দু}\qquad\text{গ) শ্রেণি সংখ্যা}\qquad\text{ঘ) শ্রেণির গণসংখ্যা}$$`,
      solution: {
        steps: [
          String.raw`শ্রেণি সীমা বলে শ্রেণিটি কোথা থেকে কোথা পর্যন্ত, শ্রেণির মধ্যবিন্দু তার ঠিক মাঝের মান, আর শ্রেণি সংখ্যা বলে সারণিতে মোট কয়টি শ্রেণি আছে।`,
          String.raw`কোনো একটি শ্রেণিতে কতগুলো উপাত্ত পড়েছে — সেই গুনতিটিই ঐ শ্রেণির গণসংখ্যা বা ঘটন সংখ্যা।`,
          String.raw`সুতরাং সঠিক উত্তর ঘ।`,
        ],
        answer: String.raw`ঘ) শ্রেণির গণসংখ্যা`,
      },
    },
    {
      id: 2,
      group: STAT_MCQ,
      question: String.raw`নিচের সারণিতে —
[[table side]]
তাপমাত্রা | $6^{\circ}-8^{\circ}$ | $8^{\circ}-10^{\circ}$ | $10^{\circ}-12^{\circ}$
গণসংখ্যা | $5$ | $9$ | $4$

$(i)$ শ্রেণিব্যাপ্তি $3$
$(ii)$ মধ্যক শ্রেণি $8^{\circ}-10^{\circ}$
$(iii)$ তাপমাত্রা অবিচ্ছিন্ন চলক
নিচের কোনটি সঠিক?
$$\text{ক) } i\text{ ও }ii\qquad\text{খ) } i\text{ ও }iii\qquad\text{গ) } ii\text{ ও }iii\qquad\text{ঘ) } i,\,ii\text{ ও }iii$$`,
      solution: {
        steps: [
          String.raw`$(i)$ শ্রেণিব্যাপ্তি $=(\text{ঊর্ধ্বসীমা}-\text{নিম্নসীমা})+1=(8-6)+1=3$ — উদাহরণ ১-এ বইটি তাপমাত্রার শ্রেণিব্যাপ্তি এভাবেই গুনেছে। সুতরাং $(i)$ সত্য।`,
          String.raw`$(ii)$ মোট গণসংখ্যা $n=5+9+4=18$, তাই $\dfrac{n}{2}=9$।`,
          String.raw`ক্রমযোজিত গণসংখ্যা যথাক্রমে $5,\;14,\;18$; অর্থাৎ $9$ তম পদটি দ্বিতীয় শ্রেণিতে পড়ে।`,
          String.raw`সুতরাং মধ্যক শ্রেণি $8^{\circ}-10^{\circ}$ — $(ii)$ সত্য।`,
          String.raw`$(iii)$ তাপমাত্রার মান যেকোনো বাস্তব সংখ্যা হতে পারে — $9.4^{\circ}$ কিংবা $9.47^{\circ}$ও হতে পারে। তাই তাপমাত্রা অবিচ্ছিন্ন চলক, $(iii)$ সত্য।`,
          String.raw`তিনটিই সঠিক, সুতরাং উত্তর ঘ।`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },
    {
      id: 3,
      group: STAT_MCQ,
      question: String.raw`উপাত্তের ক্ষেত্রে প্রচুরক —
$(i)$ কেন্দ্রীয় প্রবণতার পরিমাপ
$(ii)$ সবচেয়ে বেশি বার উপস্থাপিত মান
$(iii)$ সবক্ষেত্রে অনন্য নাও হতে পারে
নিচের কোনটি সঠিক?
$$\text{ক) } i\text{ ও }ii\qquad\text{খ) } i\text{ ও }iii\qquad\text{গ) } ii\text{ ও }iii\qquad\text{ঘ) } i,\,ii\text{ ও }iii$$`,
      solution: {
        steps: [
          String.raw`$(i)$ কেন্দ্রীয় প্রবণতার পরিমাপ তিনটি — গাণিতিক গড়, মধ্যক ও প্রচুরক। সুতরাং $(i)$ সত্য।`,
          String.raw`$(ii)$ কোনো উপাত্তে যে সংখ্যা সর্বাধিক বার উপস্থাপিত হয়, সেই সংখ্যাই প্রচুরক — $(ii)$ সত্য।`,
          String.raw`$(iii)$ একটি উপাত্তের এক বা একাধিক প্রচুরক থাকতে পারে; আবার কোনো সংখ্যাই একাধিকবার না থাকলে সেই উপাত্তে প্রচুরক নেই। সুতরাং $(iii)$ সত্য।`,
          String.raw`তিনটিই সঠিক, সুতরাং উত্তর ঘ।`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },
    {
      id: 4,
      group: STAT_MCQ,
      question: String.raw`সারণিভুক্ত শ্রেণিবিন্যস্ত উপাত্তের সংখ্যা হলো $n$, মধ্যক শ্রেণির নিম্নসীমা $L$, মধ্যক শ্রেণির পূর্ববর্তী শ্রেণির ক্রমযোজিত গণসংখ্যা $F_c$, মধ্যক শ্রেণির গণসংখ্যা $F_m$ এবং শ্রেণিব্যাপ্তি $h$; এই তথ্যের আলোকে নিচের কোনটি মধ্যক নির্ণয়ের সূত্র?
$$\text{ক) } L+\left(\frac{n}{2}-F_c\right)\times\frac{h}{F_m}\qquad\text{খ) } L+\left(\frac{n}{2}-F_m\right)\times\frac{h}{F_m}$$
$$\text{গ) } L-\left(\frac{n}{2}-F_c\right)\times\frac{h}{F_m}\qquad\text{ঘ) } L-\left(\frac{n}{2}-F_m\right)\times\frac{h}{F_m}$$`,
      solution: {
        steps: [
          String.raw`মধ্যক $\dfrac{n}{2}$ তম পদ। মধ্যক শ্রেণির নিম্নসীমা পর্যন্ত ইতিমধ্যেই $F_c$ টি পদ পেরিয়ে গেছে, তাই ঐ শ্রেণির ভিতরে আরও $\left(\dfrac{n}{2}-F_c\right)$ টি পদ এগোতে হবে।`,
          String.raw`মধ্যক শ্রেণিতে $F_m$ টি পদ $h$ ব্যাপ্তিজুড়ে সমভাবে ছড়ানো ধরা হয়, অর্থাৎ প্রতি পদের জন্য $\dfrac{h}{F_m}$।`,
          String.raw`সুতরাং নিম্নসীমার সাথে $\left(\dfrac{n}{2}-F_c\right)\times\dfrac{h}{F_m}$ যোগ করতে হবে:`,
          String.raw`$$M=L+\left(\frac{n}{2}-F_c\right)\times\frac{h}{F_m}$$`,
          String.raw`সুতরাং সঠিক উত্তর ক।`,
        ],
        answer: String.raw`ক) $L+\left(\dfrac{n}{2}-F_c\right)\times\dfrac{h}{F_m}$`,
      },
    },
    {
      id: 5,
      group: STAT_WORK,
      question: String.raw`১০ম শ্রেণির ৫০ জন শিক্ষার্থীর গণিত বিষয়ে প্রাপ্ত নম্বরের গণসংখ্যা নিবেশন সারণি দেওয়া হলো। প্রদত্ত উপাত্তের গণসংখ্যা বহুভুজ ও অজিভ রেখা আঁকো।
[[table side]]
শ্রেণিব্যাপ্তি | $31-40$ | $41-50$ | $51-60$ | $61-70$ | $71-80$ | $81-90$ | $91-100$
গণসংখ্যা | $6$ | $8$ | $10$ | $12$ | $5$ | $7$ | $2$`,
      parts: [
        {
          label: "ক",
          question: String.raw`গণসংখ্যা বহুভুজ আঁকো।`,
          figure: "17-p5a",
          solution: {
            steps: [
              String.raw`শ্রেণিগুলো বিচ্ছিন্ন, তাই আয়তলেখ না এঁকে সরাসরি শ্রেণি মধ্যমান বরাবর বহুভুজ আঁকা সুবিধাজনক।`,
              String.raw`প্রথম শ্রেণি $(31-40)$ এর মধ্যমান $\dfrac{31+40}{2}=35.5$; একইভাবে বাকিগুলো বসিয়ে পাই:`,
              String.raw`[[table side]]
শ্রেণিব্যাপ্তি | $31-40$ | $41-50$ | $51-60$ | $61-70$ | $71-80$ | $81-90$ | $91-100$
শ্রেণি মধ্যমান | $35.5$ | $45.5$ | $55.5$ | $65.5$ | $75.5$ | $85.5$ | $95.5$
গণসংখ্যা | $6$ | $8$ | $10$ | $12$ | $5$ | $7$ | $2$`,
              String.raw`$x$-অক্ষ বরাবর শ্রেণি মধ্যমান এবং $y$-অক্ষ বরাবর গণসংখ্যা নিয়ে বিন্দুগুলো চিহ্নিত করে রেখাংশ দ্বারা পর্যায়ক্রমে যোগ করি।`,
              String.raw`প্রথম শ্রেণির পূর্বের শ্রেণির মধ্যমান $25.5$ এবং শেষ শ্রেণির পরের শ্রেণির মধ্যমান $105.5$ — দুই প্রান্ত সেখানে $x$-অক্ষ পর্যন্ত নামিয়ে বহুভুজটি বন্ধ করা হলো।`,
            ],
            answer: String.raw`উপরের গণসংখ্যা বহুভুজ — শীর্ষবিন্দু $(65.5,\,12)$`,
          },
        },
        {
          label: "খ",
          question: String.raw`অজিভ রেখা আঁকো।`,
          figure: "17-p5b",
          solution: {
            steps: [
              String.raw`অজিভ রেখা আঁকতে হলে শ্রেণিগুলো অবিচ্ছিন্ন করে ক্রমযোজিত গণসংখ্যা বের করতে হবে।`,
              String.raw`[[table]]
শ্রেণি | অবিচ্ছিন্ন শ্রেণি ব্যাপ্তি | গণসংখ্যা | ক্রমযোজিত গণসংখ্যা
$31-40$ | $30-40$ | $6$ | $6$
$41-50$ | $40-50$ | $8$ | $14$
$51-60$ | $50-60$ | $10$ | $24$
$61-70$ | $60-70$ | $12$ | $36$
$71-80$ | $70-80$ | $5$ | $41$
$81-90$ | $80-90$ | $7$ | $48$
$91-100$ | $90-100$ | $2$ | $50$`,
              String.raw`$x$-অক্ষ বরাবর শ্রেণির ঊর্ধ্বসীমা এবং $y$-অক্ষ বরাবর ক্রমযোজিত গণসংখ্যা নিয়ে বিন্দুগুলো চিহ্নিত করি: $(40,6),\,(50,14),\,(60,24),\,(70,36),\,(80,41),\,(90,48),\,(100,50)$।`,
              String.raw`$x$-অক্ষে $30$ থেকে শুরু করে — যেখানে ক্রমযোজিত গণসংখ্যা এখনো শূন্য — বিন্দুগুলো সাবলীলভাবে যোগ করলেই নির্ণেয় অজিভ রেখা।`,
              String.raw`শেষ বিন্দুর উচ্চতা $50$, যা মোট শিক্ষার্থীর সংখ্যার সমান — লেখচিত্রটি ঠিক আছে।`,
            ],
            answer: String.raw`উপরের অজিভ রেখা — শেষ বিন্দু $(100,\,50)$`,
          },
        },
      ],
    },
    {
      id: 6,
      group: STAT_WORK,
      question: String.raw`নিচে ৫০ জন শিক্ষার্থীর ওজনের গণসংখ্যা নিবেশন সারণি দেওয়া হলো। মধ্যক নির্ণয় করো।
[[table side]]
ওজন (কেজি) | $45$ | $50$ | $55$ | $60$ | $65$ | $70$
গণসংখ্যা | $2$ | $6$ | $8$ | $16$ | $12$ | $6$`,
      solution: {
        steps: [
          String.raw`এখানে উপাত্ত শ্রেণিবিন্যস্ত নয় — প্রতিটি ওজনের বিপরীতে তার গণসংখ্যা দেওয়া আছে। তাই ক্রমযোজিত গণসংখ্যা সারণি তৈরি করি:`,
          String.raw`[[table side]]
ওজন (কেজি) | $45$ | $50$ | $55$ | $60$ | $65$ | $70$
গণসংখ্যা | $2$ | $6$ | $8$ | $16$ | $12$ | $6$
ক্রমযোজিত গণসংখ্যা | $2$ | $8$ | $16$ | $32$ | $44$ | $50$`,
          String.raw`এখানে, $n=2+6+8+16+12+6=50$, যা জোড় সংখ্যা।`,
          String.raw`$$M=\frac{1}{2}\left[\left(\frac{50}{2}\right)\text{-th}+\left(\frac{50}{2}+1\right)\text{-th}\right]=\frac{25\text{-th}+26\text{-th}}{2}$$`,
          String.raw`ক্রমযোজিত গণসংখ্যা থেকে দেখা যায়, $17$ তম থেকে $32$ তম পদের মান $60$।`,
          String.raw`সুতরাং $25$ তম ও $26$ তম উভয় পদের মানই $60$।`,
          String.raw`$$\therefore\;M=\frac{60+60}{2}=60$$`,
          String.raw`নির্ণেয় মধ্যক $60$ কেজি।`,
        ],
        answer: String.raw`$60$ কেজি`,
      },
    },
    {
      id: 7,
      group: STAT_WORK,
      question: String.raw`কোনো বিদ্যালয়ের বার্ষিক পরীক্ষায় ৯ম শ্রেণির ৫০ জন শিক্ষার্থীর গণিতে প্রাপ্ত নম্বরগুলো নিম্নরূপ:
$$76,\,65,\,98,\,79,\,64,\,68,\,56,\,73,\,83,\,57,\,55,\,92,\,45,\,77,\,87,\,46,\,32,\,75,\,89,\,48,$$
$$97,\,88,\,65,\,73,\,93,\,58,\,41,\,69,\,63,\,39,\,84,\,56,\,45,\,73,\,93,\,62,\,67,\,69,\,65,\,53,$$
$$78,\,64,\,85,\,53,\,73,\,34,\,75,\,82,\,67,\,62$$`,
      parts: [
        {
          label: "ক",
          question: String.raw`প্রদত্ত তথ্যটির ধরন কীরূপ? কোনো নিবেশনে একটি শ্রেণির গণসংখ্যা কী নির্দেশ করে?`,
          solution: {
            steps: [
              String.raw`প্রাপ্ত নম্বরগুলো কোনো ক্রমে সাজানো নেই এবং শ্রেণিতেও ভাগ করা নেই — এগুলো পরিসংখ্যানের কাঁচামাল।`,
              String.raw`সুতরাং প্রদত্ত তথ্যটি অবিন্যস্ত উপাত্ত।`,
              String.raw`প্রাপ্ত নম্বর শুধুমাত্র পূর্ণসংখ্যা হয়, তাই এখানে ব্যবহৃত চলকটি বিচ্ছিন্ন চলক।`,
              String.raw`আর কোনো নিবেশনে একটি শ্রেণির গণসংখ্যা নির্দেশ করে — ঐ শ্রেণির সীমার মধ্যে মোট কতগুলো উপাত্ত পড়েছে, অর্থাৎ ঐ শ্রেণিতে উপাত্তটি কতবার ঘটেছে।`,
            ],
            answer: String.raw`অবিন্যস্ত উপাত্ত; শ্রেণির গণসংখ্যা ঐ শ্রেণিতে পড়া উপাত্তের সংখ্যা নির্দেশ করে`,
          },
        },
        {
          label: "খ",
          question: String.raw`উপযুক্ত শ্রেণিব্যাপ্তি নিয়ে গণসংখ্যা নিবেশন সারণি তৈরি করো।`,
          solution: {
            steps: [
              String.raw`প্রদত্ত উপাত্তের সর্বনিম্ন মান $32$ এবং সর্বোচ্চ মান $98$।`,
              String.raw`$$R=(98-32)+1=66+1=67$$`,
              String.raw`শ্রেণিব্যাপ্তি $h=10$ ধরলে শ্রেণি সংখ্যা,`,
              String.raw`$$k=\frac{67}{10}=6.7\quad\text{or,}\quad 7\qquad\left[\,\text{decimal}\rightarrow\text{next integer}\,\right]$$`,
              String.raw`সুতরাং $31-40$ থেকে শুরু করে সাতটি শ্রেণি নিয়ে গণসংখ্যা নিবেশন সারণি হবে:`,
              String.raw`[[table]]
শ্রেণিব্যাপ্তি | গণসংখ্যা
$31-40$ | $3$
$41-50$ | $5$
$51-60$ | $7$
$61-70$ | $13$
$71-80$ | $10$
$81-90$ | $7$
$91-100$ | $5$
মোট | $n=50$`,
              String.raw`গণসংখ্যাগুলোর যোগফল $50$, যা মোট শিক্ষার্থীর সংখ্যার সমান — সারণিটি ঠিক আছে।`,
            ],
            answer: String.raw`উপরের সারণি — গণসংখ্যা যথাক্রমে $3,\,5,\,7,\,13,\,10,\,7,\,5$`,
          },
        },
        {
          label: "গ",
          question: String.raw`সংক্ষিপ্ত পদ্ধতিতে প্রাপ্ত নম্বরের গড় নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`(খ)-এ পাওয়া সারণির প্রতিটি শ্রেণির মধ্যমান বের করি; শ্রেণিব্যাপ্তি $h=10$।`,
              String.raw`মধ্যমানগুলোর মধ্যে মাঝামাঝি $65.5$-কে আনুমানিক গড় ধরি, অর্থাৎ $a=65.5$।`,
              String.raw`[[table]]
শ্রেণিব্যাপ্তি | মধ্যমান $x_i$ | গণসংখ্যা $f_i$ | $u_i=\dfrac{x_i-a}{h}$ | $f_iu_i$
$31-40$ | $35.5$ | $3$ | $-3$ | $-9$
$41-50$ | $45.5$ | $5$ | $-2$ | $-10$
$51-60$ | $55.5$ | $7$ | $-1$ | $-7$
$61-70$ | $65.5\leftarrow a$ | $13$ | $0$ | $0$
$71-80$ | $75.5$ | $10$ | $1$ | $10$
$81-90$ | $85.5$ | $7$ | $2$ | $14$
$91-100$ | $95.5$ | $5$ | $3$ | $15$
মোট | | $n=50$ | | $13$`,
              String.raw`নির্ণেয় গড়,`,
              String.raw`$$\bar{x}=a+\frac{\sum f_iu_i}{n}\times h=65.5+\frac{13}{50}\times 10$$`,
              String.raw`$$=65.5+2.6=68.1$$`,
              String.raw`নির্ণেয় গড় নম্বর $68.1$।`,
            ],
            answer: String.raw`$68.1$`,
          },
        },
      ],
    },
    {
      id: 8,
      group: STAT_WORK,
      figure: "17-p8",
      question: String.raw`নিচের লেখচিত্রটি একটি গণসংখ্যা নিবেশনের আয়তলেখ ও তার গণসংখ্যা বহুভুজ। চিত্র থেকে নিচের প্রশ্নগুলোর উত্তর দাও।`,
      parts: [
        {
          label: "ক",
          question: String.raw`চিত্রে প্রথম শ্রেণিটির শ্রেণি মধ্যমান ও শেষ শ্রেণিটির গণসংখ্যা কত?`,
          solution: {
            steps: [
              String.raw`চিত্রে প্রথম আয়তটি দাঁড়িয়ে আছে $30$ থেকে $40$ পর্যন্ত ভূমির উপর।`,
              String.raw`$$x_1=\frac{30+40}{2}=35$$`,
              String.raw`শেষ আয়তটি $70$ থেকে $80$ পর্যন্ত এবং তার উচ্চতা $2$।`,
              String.raw`সুতরাং প্রথম শ্রেণির শ্রেণি মধ্যমান $35$ এবং শেষ শ্রেণির গণসংখ্যা $2$।`,
            ],
            answer: String.raw`শ্রেণি মধ্যমান $35$, শেষ শ্রেণির গণসংখ্যা $2$`,
          },
        },
        {
          label: "খ",
          question: String.raw`চিত্রে প্রদর্শিত তথ্যটিকে ছকের মাধ্যমে প্রকাশ করো।`,
          solution: {
            steps: [
              String.raw`প্রতিটি আয়তের ভূমি এক-একটি শ্রেণি এবং উচ্চতা সেই শ্রেণির গণসংখ্যা।`,
              String.raw`চিত্র থেকে বহুভুজের বিন্দুগুলো $(35,3),\,(45,6),\,(55,11),\,(65,8),\,(75,2)$।`,
              String.raw`সুতরাং নিবেশনটির ছক হবে:`,
              String.raw`[[table]]
শ্রেণি | গণসংখ্যা | ক্রমযোজিত গণসংখ্যা
$30-40$ | $3$ | $3$
$40-50$ | $6$ | $9$
$50-60$ | $11$ | $20$
$60-70$ | $8$ | $28$
$70-80$ | $2$ | $30$
মোট | $n=30$ |`,
            ],
            answer: String.raw`শ্রেণি $30-40,\,40-50,\,50-60,\,60-70,\,70-80$; গণসংখ্যা $3,\,6,\,11,\,8,\,2$`,
          },
        },
        {
          label: "গ",
          question: String.raw`উপরে প্রাপ্ত ছক থেকে নিবেশনটির মধ্যক নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`(খ)-এর ছক থেকে $n=30$, সুতরাং $\dfrac{n}{2}=\dfrac{30}{2}=15$।`,
              String.raw`ক্রমযোজিত গণসংখ্যা $3,\,9,\,20,\,28,\,30$; অর্থাৎ $15$ তম পদটি $50-60$ শ্রেণিতে পড়ে।`,
              String.raw`অতএব মধ্যক শ্রেণি $50-60$, এবং শ্রেণিগুলো অবিচ্ছিন্ন বলে $h=60-50=10$।`,
              String.raw`সুতরাং $L=50,\;F_c=9,\;f_m=11,\;h=10$।`,
              String.raw`$$M=L+\left(\frac{n}{2}-F_c\right)\times\frac{h}{f_m}=50+(15-9)\times\frac{10}{11}$$`,
              String.raw`$$=50+6\times\frac{10}{11}=50+\frac{60}{11}$$`,
              String.raw`$$=50+5.45=55.45$$`,
              String.raw`নির্ণেয় মধ্যক $55.45$ (প্রায়)।`,
            ],
            answer: String.raw`$55.45$ (প্রায়)`,
          },
        },
      ],
    },
    {
      id: 9,
      group: STAT_MODEL_MCQ,
      question: String.raw`পরিসংখ্যানের অবিন্যস্ত উপাত্তসমূহ মানের ক্রমানুসারে সাজালে উপাত্তসমূহ মাঝামাঝি কোনো মানের কাছাকাছি পুঞ্জীভূত হয়। উপাত্তের এই প্রবণতাকে বলা হয় —
$$\text{ক) প্রচুরক}\qquad\text{খ) কেন্দ্রীয় প্রবণতা}\qquad\text{গ) গড়}\qquad\text{ঘ) মধ্যক}$$`,
      solution: {
        steps: [
          String.raw`গড়, মধ্যক ও প্রচুরক — এ তিনটি হলো সেই প্রবণতার পরিমাপ, প্রবণতাটি নয়।`,
          String.raw`উপাত্তসমূহের কেন্দ্রীয় মানের দিকে পুঞ্জীভূত হওয়ার প্রবণতাটিরই নাম কেন্দ্রীয় প্রবণতা।`,
          String.raw`সুতরাং সঠিক উত্তর খ।`,
        ],
        answer: String.raw`খ) কেন্দ্রীয় প্রবণতা`,
      },
    },
    {
      id: 10,
      group: STAT_MODEL_MCQ,
      question: String.raw`আয়তলেখ অঙ্কন করতে দরকার —
$(i)$ $x$ অক্ষ বরাবর অবিচ্ছিন্ন শ্রেণিব্যাপ্তি
$(ii)$ $y$ অক্ষ বরাবর গণসংখ্যা
$(iii)$ শ্রেণির মধ্যমান
নিচের কোনটি সঠিক?
$$\text{ক) } i\text{ ও }ii\qquad\text{খ) } i\text{ ও }iii\qquad\text{গ) } ii\text{ ও }iii\qquad\text{ঘ) } i,\,ii\text{ ও }iii$$`,
      solution: {
        steps: [
          String.raw`আয়তলেখের আয়তগুলো পাশাপাশি ফাঁক ছাড়া দাঁড়ায়, তাই ভূমি বরাবর শ্রেণিসীমা অবিচ্ছিন্ন হতেই হবে — $(i)$ সত্য।`,
          String.raw`প্রতিটি আয়তের উচ্চতা সেই শ্রেণির গণসংখ্যা, তাই $y$ অক্ষ বরাবর গণসংখ্যা নিতে হয় — $(ii)$ সত্য।`,
          String.raw`শ্রেণির মধ্যমান লাগে গণসংখ্যা বহুভুজ আঁকতে, আয়তলেখ আঁকতে নয় — $(iii)$ সত্য নয়।`,
          String.raw`সুতরাং সঠিক উত্তর ক।`,
        ],
        answer: String.raw`ক) $i$ ও $ii$`,
      },
    },
    {
      id: 11,
      group: STAT_MODEL_MCQ,
      question: String.raw`শীতকালে বাংলাদেশের কোনো একটি অঞ্চলের $10$ দিনের তাপমাত্রার (সে.) পরিসংখ্যান হলো $10^{\circ},9^{\circ},8^{\circ},6^{\circ},11^{\circ},12^{\circ},7^{\circ},13^{\circ},14^{\circ},5^{\circ}$। উপরের সংখ্যাসূচক উপাত্তের গড় তাপমাত্রা কোনটি?
$$\text{ক) } 8^{\circ}\qquad\text{খ) } 8.5^{\circ}\qquad\text{গ) } 9.5^{\circ}\qquad\text{ঘ) } 9^{\circ}$$`,
      solution: {
        steps: [
          String.raw`উপাত্তসমূহের সমষ্টি,`,
          String.raw`$$10+9+8+6+11+12+7+13+14+5=95$$`,
          String.raw`এখানে উপাত্তের সংখ্যা $n=10$।`,
          String.raw`$$\bar{x}=\frac{95}{10}=9.5$$`,
          String.raw`সুতরাং গড় তাপমাত্রা $9.5^{\circ}$, উত্তর গ।`,
        ],
        answer: String.raw`গ) $9.5^{\circ}$`,
      },
    },
    {
      id: 12,
      group: STAT_MODEL_MCQ,
      question: String.raw`উপরের উপাত্তসমূহের মধ্যক কোনটি?
$$\text{ক) } 9.5^{\circ}\qquad\text{খ) } 9^{\circ}\qquad\text{গ) } 8.5^{\circ}\qquad\text{ঘ) } 8^{\circ}$$`,
      solution: {
        steps: [
          String.raw`উপাত্তসমূহ মানের ক্রমানুসারে সাজিয়ে পাই,`,
          String.raw`$$5^{\circ},\,6^{\circ},\,7^{\circ},\,8^{\circ},\,9^{\circ},\,10^{\circ},\,11^{\circ},\,12^{\circ},\,13^{\circ},\,14^{\circ}$$`,
          String.raw`এখানে $n=10$, যা জোড় সংখ্যা।`,
          String.raw`$$M=\frac{1}{2}\left[\left(\frac{10}{2}\right)\text{-th}+\left(\frac{10}{2}+1\right)\text{-th}\right]=\frac{5\text{-th}+6\text{-th}}{2}$$`,
          String.raw`$$=\frac{9+10}{2}=9.5$$`,
          String.raw`সুতরাং মধ্যক $9.5^{\circ}$, উত্তর ক।`,
        ],
        answer: String.raw`ক) $9.5^{\circ}$`,
      },
    },
    {
      id: 13,
      group: STAT_MODEL_CQ,
      question: String.raw`কোনো শ্রেণির ৬০ জন শিক্ষার্থীর ওজনের (কেজি) গণসংখ্যা নিবেশন সারণি নিম্নরূপ:
[[table side]]
শ্রেণিব্যাপ্তি | $45-49$ | $50-54$ | $55-59$ | $60-64$ | $65-69$ | $70-74$
গণসংখ্যা | $4$ | $8$ | $10$ | $20$ | $12$ | $6$`,
      parts: [
        {
          label: "ক",
          question: String.raw`উপাত্তের মধ্যক শ্রেণি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`ক্রমযোজিত গণসংখ্যা সারণি:`,
              String.raw`[[table side]]
শ্রেণিব্যাপ্তি | $45-49$ | $50-54$ | $55-59$ | $60-64$ | $65-69$ | $70-74$
গণসংখ্যা | $4$ | $8$ | $10$ | $20$ | $12$ | $6$
ক্রমযোজিত গণসংখ্যা | $4$ | $12$ | $22$ | $42$ | $54$ | $60$`,
              String.raw`এখানে, $n=60$ এবং $\dfrac{n}{2}=\dfrac{60}{2}=30$।`,
              String.raw`ক্রমযোজিত গণসংখ্যায় $22<30\le 42$, অর্থাৎ $30$ তম পদটি চতুর্থ শ্রেণিতে পড়ে।`,
              String.raw`সুতরাং নির্ণেয় মধ্যক শ্রেণি $60-64$।`,
            ],
            answer: String.raw`$60-64$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রদত্ত তথ্য থেকে প্রচুরক নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`এখানে গণসংখ্যা সর্বাধিক $20$ আছে $60-64$ শ্রেণিতে, সুতরাং এটিই প্রচুরক শ্রেণি।`,
              String.raw`শ্রেণিগুলো বিচ্ছিন্ন, তাই শ্রেণিব্যাপ্তি $h=(49-45)+1=5$।`,
              String.raw`সুতরাং $L=60,\;f_1=20-10=10,\;f_2=20-12=8,\;h=5$।`,
              String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h=60+\frac{10}{10+8}\times 5$$`,
              String.raw`$$=60+\frac{10}{18}\times 5=60+\frac{50}{18}$$`,
              String.raw`$$=60+2.78=62.78$$`,
              String.raw`নির্ণেয় প্রচুরক $62.78$ (প্রায়)।`,
            ],
            answer: String.raw`$62.78$ (প্রায়)`,
          },
        },
        {
          label: "গ",
          question: String.raw`বিবরণসহ উপাত্তের গণসংখ্যা বহুভুজ অঙ্কন করো।`,
          figure: "17-p13",
          solution: {
            steps: [
              String.raw`শ্রেণিগুলো বিচ্ছিন্ন, তাই প্রতিটি শ্রেণির মধ্যমান বের করে সরাসরি বহুভুজ আঁকি।`,
              String.raw`প্রথম শ্রেণি $(45-49)$ এর মধ্যমান $\dfrac{45+49}{2}=47$; একইভাবে বাকিগুলো বসিয়ে পাই:`,
              String.raw`[[table side]]
শ্রেণিব্যাপ্তি | $45-49$ | $50-54$ | $55-59$ | $60-64$ | $65-69$ | $70-74$
শ্রেণি মধ্যমান | $47$ | $52$ | $57$ | $62$ | $67$ | $72$
গণসংখ্যা | $4$ | $8$ | $10$ | $20$ | $12$ | $6$`,
              String.raw`$x$-অক্ষ বরাবর শ্রেণি মধ্যমান — যেখানে ছেদ চিহ্নটি $0$ থেকে $42$ বুঝায় — এবং $y$-অক্ষ বরাবর গণসংখ্যা নিয়ে বিন্দুগুলো চিহ্নিত করি।`,
              String.raw`বিন্দুগুলো $(47,4),\,(52,8),\,(57,10),\,(62,20),\,(67,12),\,(72,6)$ পর্যায়ক্রমে রেখাংশ দ্বারা যোগ করি।`,
              String.raw`প্রথম শ্রেণির পূর্বের শ্রেণির মধ্যমান $42$ এবং শেষ শ্রেণির পরের শ্রেণির মধ্যমান $77$ — দুই প্রান্ত সেখানে $x$-অক্ষ পর্যন্ত নামিয়ে বহুভুজটি বন্ধ করা হলো।`,
            ],
            answer: String.raw`উপরের গণসংখ্যা বহুভুজ — শীর্ষবিন্দু $(62,\,20)$`,
          },
        },
      ],
    },
    {
      id: 14,
      group: STAT_MODEL_CQ,
      question: String.raw`নিচের প্রশ্নগুলোর উত্তর দাও।`,
      parts: [
        {
          label: "ক",
          question: String.raw`উপাত্তের পরিসর $42$ এবং সর্বোচ্চ মান $79$ হলে, সর্বনিম্ন মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`আমরা জানি,`,
              String.raw`$$R=(x_{\max}-x_{\min})+1$$`,
              String.raw`প্রশ্নানুসারে,`,
              String.raw`$$42=(79-x_{\min})+1$$`,
              String.raw`$$\text{or, } 42=80-x_{\min}$$`,
              String.raw`$$\therefore\; x_{\min}=80-42=38$$`,
              String.raw`নির্ণেয় সর্বনিম্ন মান $38$।`,
            ],
            answer: String.raw`$38$`,
          },
        },
        {
          label: "খ",
          question: String.raw`কোনো শ্রেণিব্যাপ্তির নিম্নসীমা $a$ এবং শ্রেণি মধ্যমান $c$ হলে, এর ঊর্ধ্বসীমা নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, শ্রেণিটির ঊর্ধ্বসীমা $b$।`,
              String.raw`আমরা জানি, শ্রেণি মধ্যমান শ্রেণির নিম্নসীমা ও ঊর্ধ্বসীমার গড়।`,
              String.raw`$$c=\frac{a+b}{2}$$`,
              String.raw`$$\text{or, } a+b=2c$$`,
              String.raw`$$\therefore\; b=2c-a$$`,
              String.raw`নির্ণেয় ঊর্ধ্বসীমা $2c-a$।`,
            ],
            answer: String.raw`$2c-a$`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রচুরক নির্ণয়ের ক্ষেত্রে, $L=40$, $f_1=3$, $f_2=5$ এবং $h=8$ হলে, প্রচুরক নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`আমরা জানি,`,
              String.raw`$$M_o=L+\frac{f_1}{f_1+f_2}\times h$$`,
              String.raw`প্রদত্ত মানগুলো বসিয়ে পাই,`,
              String.raw`$$M_o=40+\frac{3}{3+5}\times 8=40+\frac{3}{8}\times 8$$`,
              String.raw`$$=40+3=43$$`,
              String.raw`নির্ণেয় প্রচুরক $43$।`,
            ],
            answer: String.raw`$43$`,
          },
        },
      ],
    },
  ],
};


// ─────────────── অধ্যায় ১২ · দুই চলকবিশিষ্ট সরল সহসমীকরণ ───────────────
//
// বইয়ের চারটি অনুশীলনী: ১২.১-এ সমাধান যোগ্যতা যাচাই, ১২.২-এ প্রতিস্থাপন,
// অপনয়ন ও আড়গুণন পদ্ধতি, ১২.৩-এ লেখিক পদ্ধতি এবং ১২.৪-এ বাস্তবভিত্তিক
// সমস্যা। শেষেরটির সঙ্গে অধ্যায়ের নমুনা প্রশ্নগুলো অনুশীলনীর নম্বর ধরে টেনে
// নেওয়া হয়েছে।
//
// ১২.৩-এর প্রতিটি প্রশ্নে ছক কাগজের ছবি (`figures/scenes12.ts`) বসানো হলো —
// লেখিক পদ্ধতির উত্তরটাই আসলে দুই রেখার ছেদবিন্দু, আর ছেদবিন্দু বাক্যে যত
// ধীরে বোঝা যায়, ছবিতে তত দ্রুত।

const SIM_TEST = "সমঞ্জস্য ও নির্ভরশীলতা যাচাই, সমাধানের সংখ্যা (১ – ১০)";

const exercise121: Exercise = {
  id: "12.1",
  bnId: "অনুশীলনী ১২.১",
  title: "সহসমীকরণের সমাধান যোগ্যতা",
  bookPages: "২২৮ – ২২৯",
  formulas: [
    {
      title: "সরল সহসমীকরণ কাকে বলে",
      formulas: [
        {
          statement: String.raw`$$\begin{aligned}a_{1}x+b_{1}y&=c_{1}\\ a_{2}x+b_{2}y&=c_{2}\end{aligned}$$`,
          note: "দুই চলকবিশিষ্ট দুইটি সরল সমীকরণকে একত্রে উপস্থাপন করা হলে, এবং চলক দুইটি একই বৈশিষ্ট্যের হলে, তাকে সরল সহসমীকরণ বা সমীকরণজোট বলে।",
        },
        {
          statement: String.raw`$$2x+y=12\;\longrightarrow\;(-2,16),\,(0,12),\,(3,6),\,(5,2),\dots$$`,
          note: "দুই চলকের একটিমাত্র সরল সমীকরণের অসংখ্য সমাধান আছে। জোট বাঁধলে তবেই কেবল সেই সমাধানগুলো টিকে থাকে যারা দুইটি সমীকরণকেই যুগপৎ সিদ্ধ করে।",
        },
      ],
    },
    {
      title: "সহগের অনুপাত দেখে তিন রকম জোট",
      formulas: [
        {
          statement: String.raw`$$\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          note: "সমঞ্জস্য (consistent) ও পরস্পর অনির্ভরশীল (independent) — একটিমাত্র (অনন্য) সমাধান আছে। এক্ষেত্রে ধ্রুবক পদ তুলনা করার প্রয়োজনই হয় না।",
        },
        {
          statement: String.raw`$$\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}=\frac{c_{1}}{c_{2}}$$`,
          note: "সমঞ্জস্য ও পরস্পর নির্ভরশীল (dependent) — একটি সমীকরণকে অন্যটি দিয়ে গুণ বা ভাগ করেই পাওয়া যায়, তাই অসংখ্য সমাধান আছে।",
        },
        {
          statement: String.raw`$$\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}\neq\frac{c_{1}}{c_{2}}$$`,
          note: "অসমঞ্জস্য (inconsistent) ও পরস্পর অনির্ভরশীল — কোনো সমাধান নেই। চলকের সহগ মিলে যাওয়ায় অপনয়নে চলক দুইটিই চলে গিয়ে অসম্ভব একটি সমতা দাঁড়ায়।",
        },
      ],
    },
    {
      title: "ধ্রুবক পদ না থাকলে",
      formulas: [
        {
          statement: String.raw`$$c_{1}=c_{2}=0,\;\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}\;\Rightarrow\;(x,y)=(0,0)$$`,
          note: "উভয় সমীকরণে ধ্রুবক পদ শূন্য হলে জোটটি সর্বদা সমঞ্জস্য — অন্তত শূন্য সমাধানটি তো আছেই। সহগের অনুপাত অসমান হলে ঐ একটিই সমাধান।",
        },
        {
          statement: String.raw`$$c_{1}=c_{2}=0,\;\;\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}\;\Rightarrow\;\text{অসংখ্য সমাধান}$$`,
          note: "অনুপাত সমান হলে সমীকরণ দুইটি আসলে একটিই, তাই সমঞ্জস্য ও পরস্পর নির্ভরশীল — অসংখ্য সমাধান।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book pages ২২৭-২২৮.
    {
      id: 1,
      question: String.raw`নিচের সমীকরণজোটগুলো সমঞ্জস্য/অসমঞ্জস্য, নির্ভরশীল/অনির্ভরশীল কিনা ব্যাখ্যা করো এবং এদের সমাধানের সংখ্যা নির্দেশ করো।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\begin{aligned}x+3y&=1\\ 2x+6y&=2\end{aligned}$$`,
          solution: {
            steps: [
              String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{2}$$`,
              String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{3}{6}=\frac{1}{2}$$`,
              String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{1}{2}$$`,
              String.raw`$$\therefore\;\frac{1}{2}=\frac{3}{6}=\frac{1}{2}$$`,
              String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর নির্ভরশীল।`,
            ],
            answer: String.raw`সমঞ্জস্য ও পরস্পর নির্ভরশীল — অসংখ্য সমাধান`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\begin{aligned}2x-5y&=3\\ x+3y&=1\end{aligned}$$`,
          solution: {
            steps: [
              String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{2}{1}$$`,
              String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-5}{3}$$`,
              String.raw`$$\therefore\;\frac{2}{1}\neq\frac{-5}{3}$$`,
              String.raw`সহগের অনুপাত অসমান, তাই ধ্রুবক পদ তুলনা করার প্রয়োজন নেই।`,
              String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল।`,
            ],
            answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র (অনন্য) সমাধান`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\begin{aligned}3x-5y&=7\\ 6x-10y&=15\end{aligned}$$`,
          solution: {
            steps: [
              String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{3}{6}=\frac{1}{2}$$`,
              String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-5}{-10}=\frac{1}{2}$$`,
              String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{7}{15}$$`,
              String.raw`$$\therefore\;\frac{3}{6}=\frac{-5}{-10}\neq\frac{7}{15}$$`,
              String.raw`অতএব, সমীকরণজোটটি অসমঞ্জস্য ও পরস্পর অনির্ভরশীল।`,
            ],
            answer: String.raw`অসমঞ্জস্য ও পরস্পর অনির্ভরশীল — কোনো সমাধান নেই`,
          },
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}x-y&=4\\ x+y&=10\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{1}=1$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-1}{1}=-1$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          String.raw`সহগের অনুপাত অসমান, তাই ধ্রুবক পদ তুলনা করার প্রয়োজন নেই।`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র (অনন্য) সমাধান আছে।`,
          String.raw`(যোগ করলে $2x=14$, অর্থাৎ সমাধানটি $(x,y)=(7,3)$।)`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান`,
      },
    },
    {
      id: 2,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}2x+y&=3\\ 4x+2y&=6\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{2}{4}=\frac{1}{2}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{2}$$`,
          String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{3}{6}=\frac{1}{2}$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}=\frac{c_{1}}{c_{2}}$$`,
          String.raw`১ম সমীকরণের উভয়পক্ষকে $2$ দ্বারা গুণ করলেই ২য় সমীকরণটি পাওয়া যায়।`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর নির্ভরশীল; এর অসংখ্য সমাধান আছে।`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর নির্ভরশীল — অসংখ্য সমাধান`,
      },
    },
    {
      id: 3,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}x-y-4&=0\\ 3x-3y-10&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{3}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-1}{-3}=\frac{1}{3}$$`,
          String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{-4}{-10}=\frac{2}{5}$$`,
          String.raw`$$\therefore\;\frac{1}{3}=\frac{-1}{-3}\neq\frac{2}{5}$$`,
          String.raw`অতএব, সমীকরণজোটটি অসমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর কোনো সমাধান নেই।`,
          String.raw`(১ম সমীকরণকে $3$ দ্বারা গুণ করলে $3x-3y-12=0$; ২য়টি থেকে বিয়োগ করলে $2=0$ — যা অসম্ভব।)`,
        ],
        answer: String.raw`অসমঞ্জস্য ও পরস্পর অনির্ভরশীল — কোনো সমাধান নেই`,
      },
    },
    {
      id: 4,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}3x+2y&=0\\ 6x+4y&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`এখানে উভয় সমীকরণেই ধ্রুবক পদ শূন্য, অর্থাৎ $c_{1}=c_{2}=0$।`,
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{3}{6}=\frac{1}{2}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{2}{4}=\frac{1}{2}$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}$$`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর নির্ভরশীল; এর অসংখ্য সমাধান আছে।`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর নির্ভরশীল — অসংখ্য সমাধান`,
      },
    },
    {
      id: 5,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}3x+2y&=0\\ 9x-6y&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`এখানেও $c_{1}=c_{2}=0$।`,
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{3}{9}=\frac{1}{3}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{2}{-6}=-\frac{1}{3}$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র সমাধান আছে, আর ধ্রুবক পদ শূন্য বলে সেই সমাধানটি $(x,y)=(0,0)$।`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান $(0,0)$`,
      },
    },
    {
      id: 6,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}5x-2y-16&=0\\ 3x-\frac{6}{5}y&=2\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`২য় সমীকরণটিকে $ax+by+c=0$ আকারে সাজিয়ে পাই,`,
          String.raw`$$3x-\frac{6}{5}y-2=0$$`,
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{5}{3}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-2}{-\frac{6}{5}}=2\times\frac{5}{6}=\frac{5}{3}$$`,
          String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{-16}{-2}=8$$`,
          String.raw`$$\therefore\;\frac{5}{3}=\frac{5}{3}\neq 8$$`,
          String.raw`অতএব, সমীকরণজোটটি অসমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর কোনো সমাধান নেই।`,
        ],
        answer: String.raw`অসমঞ্জস্য ও পরস্পর অনির্ভরশীল — কোনো সমাধান নেই`,
      },
    },
    {
      id: 7,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}-\frac{1}{2}x+y&=-1\\ x-2y&=2\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{-\frac{1}{2}}{1}=-\frac{1}{2}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{-2}=-\frac{1}{2}$$`,
          String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{-1}{2}=-\frac{1}{2}$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}=\frac{c_{1}}{c_{2}}$$`,
          String.raw`১ম সমীকরণের উভয়পক্ষকে $-2$ দ্বারা গুণ করলেই ২য় সমীকরণটি পাওয়া যায়।`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর নির্ভরশীল; এর অসংখ্য সমাধান আছে।`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর নির্ভরশীল — অসংখ্য সমাধান`,
      },
    },
    {
      id: 8,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}-\frac{1}{2}x-y&=0\\ x-2y&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`এখানে $c_{1}=c_{2}=0$।`,
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{-\frac{1}{2}}{1}=-\frac{1}{2}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-1}{-2}=\frac{1}{2}$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র সমাধান, আর তা $(x,y)=(0,0)$।`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান $(0,0)$`,
      },
    },
    {
      id: 9,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}-\frac{1}{2}x+y&=-1\\ x+y&=5\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{-\frac{1}{2}}{1}=-\frac{1}{2}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{1}=1$$`,
          String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র (অনন্য) সমাধান আছে।`,
          String.raw`(বিয়োগ করলে $-\frac{3}{2}x=-6$, অর্থাৎ সমাধানটি $(x,y)=(4,1)$।)`,
        ],
        answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান`,
      },
    },
    {
      id: 10,
      group: SIM_TEST,
      question: String.raw`$$\begin{aligned}ax-cy&=0\\ cx-ay&=c^{2}-a^{2}\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{a}{c}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-c}{-a}=\frac{c}{a}$$`,
          String.raw`এখন $$\frac{a}{c}=\frac{c}{a}\;\Leftrightarrow\;a^{2}=c^{2}\;\Leftrightarrow\;a=\pm c$$`,
          String.raw`সুতরাং $a\neq\pm c$ হলে $$\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
          String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র (অনন্য) সমাধান আছে।`,
          String.raw`(১ম সমীকরণ থেকে $x=\dfrac{cy}{a}$; ২য়টিতে বসালে $y(c^{2}-a^{2})=a(c^{2}-a^{2})$, অর্থাৎ সমাধানটি $(x,y)=(c,a)$।)`,
          String.raw`তবে $a=\pm c$ হলে $c^{2}-a^{2}=0$ হয়ে যায় এবং সমীকরণ দুইটি একটিই সমীকরণে দাঁড়ায় — তখন জোটটি সমঞ্জস্য ও পরস্পর নির্ভরশীল, অসংখ্য সমাধান।`,
        ],
        answer: String.raw`$a\neq\pm c$ হলে সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান`,
      },
    },
  ],
};

// অনুশীলনী ১২.২ — book page ২৩৬. বইয়ের তিনটি নির্দেশনা-লাইনই এখানে তিনটি
// শিরোনাম হয়ে এসেছে, কারণ কোন পদ্ধতিতে সমাধান করতে হবে তা প্রশ্নেই বলা আছে।
const EQ_SUBST = "প্রতিস্থাপন পদ্ধতিতে সমাধান করো (১ – ৩)";
const EQ_ELIM = "অপনয়ন পদ্ধতিতে সমাধান করো (৪ – ৬)";
const EQ_CROSS = "আড়গুণন পদ্ধতিতে সমাধান করো (৭ – ১৫)";

const exercise122: Exercise = {
  id: "12.2",
  bnId: "অনুশীলনী ১২.২",
  title: "প্রতিস্থাপন, অপনয়ন ও আড়গুণন",
  bookPages: "২৩৬",
  formulas: [
    {
      title: "প্রতিস্থাপন পদ্ধতি (Substitution method)",
      formulas: [
        {
          statement: String.raw`$$2x+y=8\;\Rightarrow\;y=8-2x$$`,
          note: "সুবিধামত একটি সমীকরণ থেকে একটি চলককে অপর চলকের মাধ্যমে প্রকাশ করতে হয়। যে চলকের সহগ ১ বা ছোট, তাকে বেছে নিলে ভগ্নাংশ এড়ানো যায়।",
        },
        {
          statement: String.raw`$$3x-2(8-2x)=5$$`,
          note: "প্রাপ্ত মান অপর সমীকরণে বসালে এক চলকবিশিষ্ট সমীকরণ পাওয়া যায়; তা সমাধান করে চলকটির মান মেলে।",
        },
        {
          statement: String.raw`$$x=3\;\Rightarrow\;y=8-2\times 3=2$$`,
          note: "পাওয়া মানটি যে সমীকরণে চলককে প্রকাশ করা হয়েছিল সেখানেই বসালে অপর চলকের মান সবচেয়ে সহজে পাওয়া যায়।",
        },
      ],
    },
    {
      title: "অপনয়ন পদ্ধতি (Elimination method)",
      formulas: [
        {
          statement: String.raw`$$2x+y=8\;\xrightarrow{\;\times 2\;}\;4x+2y=16$$`,
          note: "সুবিধামত একটি বা উভয় সমীকরণকে এমন সংখ্যা দিয়ে গুণ করতে হয় যেন কোনো এক চলকের সহগের পরমমান দুই সমীকরণে সমান হয়।",
        },
        {
          statement: String.raw`$$(4x+2y)+(3x-2y)=16+5\;\Rightarrow\;7x=21$$`,
          note: "সহগ দুইটির চিহ্ন বিপরীত হলে যোগ করলে, আর একই হলে বিয়োগ করলে, সেই চলকটি অপনীত হয়ে যায়।",
        },
      ],
    },
    {
      title: "আড়গুণন পদ্ধতি (Cross multiplication method)",
      formulas: [
        {
          statement: String.raw`$$\frac{x}{b_{1}c_{2}-b_{2}c_{1}}=\frac{y}{c_{1}a_{2}-c_{2}a_{1}}=\frac{1}{a_{1}b_{2}-a_{2}b_{1}}$$`,
          note: String.raw`সমীকরণ দুইটিকে $a_{1}x+b_{1}y+c_{1}=0$ ও $a_{2}x+b_{2}y+c_{2}=0$ আকারে সাজিয়ে নিয়ে এই সম্পর্ক খাটে। একে বজ্রগুণন পদ্ধতিও বলে।`,
        },
        {
          statement: String.raw`$$\begin{array}{c|cccc}a_{1}&b_{1}&c_{1}&a_{1}&b_{1}\\ a_{2}&b_{2}&c_{2}&a_{2}&b_{2}\end{array}$$`,
          note: String.raw`মনে রাখার ছবি — প্রথম কলামের নিচে $b$, তারপর $c$, তারপর আবার $a$ ও $b$ লিখে পাশাপাশি দুই কলামের আড়াআড়ি গুণফলের বিয়োগই যথাক্রমে $x$, $y$ ও $1$ এর হর।`,
        },
        {
          statement: String.raw`$$x=\frac{b_{1}c_{2}-b_{2}c_{1}}{a_{1}b_{2}-a_{2}b_{1}},\qquad y=\frac{c_{1}a_{2}-c_{2}a_{1}}{a_{1}b_{2}-a_{2}b_{1}}$$`,
          note: String.raw`হর $a_{1}b_{2}-a_{2}b_{1}$ শূন্য হলে সমীকরণজোটটি অনন্য সমাধানবিশিষ্ট নয় — তখন এ পদ্ধতি খাটে না।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ২ — book pages ২২৯-২৩০.
    {
      id: 2,
      question: String.raw`প্রতিস্থাপন পদ্ধতিতে সমাধান করো: $$\begin{aligned}2x+y&=8\\ 3x-2y&=5\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x+y=8\qquad\cdots(1)$$`,
          String.raw`$$3x-2y=5\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ হতে পাই, $$y=8-2x\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ এ $y$ এর মান $8-2x$ বসিয়ে পাই,`,
          String.raw`$$3x-2(8-2x)=5$$`,
          String.raw`$$\text{বা, }3x-16+4x=5$$`,
          String.raw`$$\text{বা, }7x=21$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$x$ এর মান সমীকরণ $(3)$ এ বসিয়ে পাই, $$y=8-2\times 3=2$$`,
          String.raw`$$\therefore\;(x,y)=(3,2)$$`,
        ],
        answer: String.raw`$(x,y)=(3,2)$`,
      },
    },
    // উদাহরণ ৩ — book page ২৩০.
    {
      id: 3,
      question: String.raw`অপনয়ন পদ্ধতিতে সমাধান করো: $$\begin{aligned}2x+y&=8\\ 3x-2y&=5\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x+y=8\qquad\cdots(1)$$`,
          String.raw`$$3x-2y=5\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ এর উভয়পক্ষকে $2$ দ্বারা গুণ করে পাই,`,
          String.raw`$$4x+2y=16\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ ও $(3)$ যোগ করে পাই,`,
          String.raw`$$7x=21$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$x$ এর মান সমীকরণ $(1)$ এ বসিয়ে পাই,`,
          String.raw`$$2\times 3+y=8$$`,
          String.raw`$$\therefore\; y=2$$`,
          String.raw`$$\therefore\;(x,y)=(3,2)$$`,
        ],
        answer: String.raw`$(x,y)=(3,2)$`,
      },
    },
    // উদাহরণ ৪ — book pages ২৩২-২৩৩.
    {
      id: 4,
      question: String.raw`আড়গুণন পদ্ধতিতে সমাধান করো: $$\begin{aligned}6x-y&=1\\ 3x+2y&=13\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`পক্ষান্তর প্রক্রিয়ায় প্রদত্ত সমীকরণদ্বয়ের ডানপক্ষ $0$ করে পাই,`,
          String.raw`$$6x-y-1=0$$`,
          String.raw`$$3x+2y-13=0$$`,
          String.raw`$a_{1}x+b_{1}y+c_{1}=0$ ও $a_{2}x+b_{2}y+c_{2}=0$ এর সাথে তুলনা করে পাই,`,
          String.raw`$$a_{1}=6,\;b_{1}=-1,\;c_{1}=-1$$`,
          String.raw`$$a_{2}=3,\;b_{2}=2,\;c_{2}=-13$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{b_{1}c_{2}-b_{2}c_{1}}=\frac{y}{c_{1}a_{2}-c_{2}a_{1}}=\frac{1}{a_{1}b_{2}-a_{2}b_{1}}$$`,
          String.raw`$$\text{বা, }\frac{x}{(-1)\times(-13)-2\times(-1)}=\frac{y}{(-1)\times 3-(-13)\times 6}=\frac{1}{6\times 2-3\times(-1)}$$`,
          String.raw`$$\text{বা, }\frac{x}{13+2}=\frac{y}{-3+78}=\frac{1}{12+3}$$`,
          String.raw`$$\text{বা, }\frac{x}{15}=\frac{y}{75}=\frac{1}{15}$$`,
          String.raw`সুতরাং $$\frac{x}{15}=\frac{1}{15},\;\text{ বা, }x=1$$`,
          String.raw`আবার $$\frac{y}{75}=\frac{1}{15},\;\text{ বা, }y=5$$`,
          String.raw`$$\therefore\;(x,y)=(1,5)$$`,
        ],
        answer: String.raw`$(x,y)=(1,5)$`,
      },
    },
    // উদাহরণ ৫ — book pages ২৩৩-২৩৪.
    {
      id: 5,
      question: String.raw`আড়গুণন পদ্ধতিতে সমাধান করো: $$\begin{aligned}3x-4y&=0\\ 2x-3y&=-1\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়কে সাজিয়ে পাই,`,
          String.raw`$$3x-4y+0=0$$`,
          String.raw`$$2x-3y+1=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{-4\times 1-(-3)\times 0}=\frac{y}{0\times 2-1\times 3}=\frac{1}{3\times(-3)-2\times(-4)}$$`,
          String.raw`$$\text{বা, }\frac{x}{-4+0}=\frac{y}{0-3}=\frac{1}{-9+8}$$`,
          String.raw`$$\text{বা, }\frac{x}{-4}=\frac{y}{-3}=\frac{1}{-1}$$`,
          String.raw`$$\text{বা, }\frac{x}{4}=\frac{y}{3}=\frac{1}{1}$$`,
          String.raw`সুতরাং $x=4$ এবং $y=3$।`,
          String.raw`$$\therefore\;(x,y)=(4,3)$$`,
        ],
        answer: String.raw`$(x,y)=(4,3)$`,
      },
    },
    // উদাহরণ ৬ — book pages ২৩৪-২৩৫.
    {
      id: 6,
      question: String.raw`আড়গুণন পদ্ধতিতে সমাধান করো: $$\begin{aligned}\frac{x}{2}+\frac{y}{3}&=8\\ \frac{5x}{4}-3y&=-3\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়কে $ax+by+c=0$ আকারে সাজিয়ে পাই,`,
          String.raw`$$\frac{x}{2}+\frac{y}{3}=8,\;\text{ বা, }\frac{3x+2y}{6}=8,\;\text{ বা, }3x+2y-48=0$$`,
          String.raw`$$\frac{5x}{4}-3y=-3,\;\text{ বা, }\frac{5x-12y}{4}=-3,\;\text{ বা, }5x-12y+12=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{2\times 12-(-12)\times(-48)}=\frac{y}{(-48)\times 5-12\times 3}=\frac{1}{3\times(-12)-5\times 2}$$`,
          String.raw`$$\text{বা, }\frac{x}{24-576}=\frac{y}{-240-36}=\frac{1}{-36-10}$$`,
          String.raw`$$\text{বা, }\frac{x}{-552}=\frac{y}{-276}=\frac{1}{-46}$$`,
          String.raw`$$\text{বা, }\frac{x}{552}=\frac{y}{276}=\frac{1}{46}$$`,
          String.raw`সুতরাং $$x=\frac{552}{46}=12,\qquad y=\frac{276}{46}=6$$`,
          String.raw`শুদ্ধি পরীক্ষা: ১ম সমীকরণে বামপক্ষ $$=\frac{12}{2}+\frac{6}{3}=6+2=8=\text{ডানপক্ষ}$$`,
          String.raw`২য় সমীকরণে বামপক্ষ $$=\frac{5\times 12}{4}-3\times 6=15-18=-3=\text{ডানপক্ষ}$$`,
          String.raw`$$\therefore\;(x,y)=(12,6)$$`,
        ],
        answer: String.raw`$(x,y)=(12,6)$`,
      },
    },
    // উদাহরণ ৭ — book page ২৩৫.
    {
      id: 7,
      question: String.raw`আড়গুণন পদ্ধতিতে সমাধান করো: $$ax-by=ab=bx-ay$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়কে সাজিয়ে পাই,`,
          String.raw`$$ax-by-ab=0$$`,
          String.raw`$$bx-ay-ab=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{(-b)\times(-ab)-(-a)\times(-ab)}=\frac{y}{(-ab)\times b-(-ab)\times a}=\frac{1}{a\times(-a)-b\times(-b)}$$`,
          String.raw`$$\text{বা, }\frac{x}{ab^{2}-a^{2}b}=\frac{y}{-ab^{2}+a^{2}b}=\frac{1}{-a^{2}+b^{2}}$$`,
          String.raw`$$\text{বা, }\frac{x}{-ab(a-b)}=\frac{y}{ab(a-b)}=\frac{1}{-(a+b)(a-b)}$$`,
          String.raw`$$\text{বা, }\frac{x}{ab(a-b)}=\frac{y}{-ab(a-b)}=\frac{1}{(a+b)(a-b)}$$`,
          String.raw`সুতরাং $$x=\frac{ab(a-b)}{(a+b)(a-b)}=\frac{ab}{a+b}$$`,
          String.raw`আবার $$y=\frac{-ab(a-b)}{(a+b)(a-b)}=\frac{-ab}{a+b}$$`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{ab}{a+b},\;\frac{-ab}{a+b}\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{ab}{a+b},\;-\dfrac{ab}{a+b}\right)$`,
      },
    },
  ],
  problems: [
    // ─────────────── প্রতিস্থাপন পদ্ধতি (1 – 3) ───────────────
    {
      id: 1,
      group: EQ_SUBST,
      question: String.raw`$$\begin{aligned}7x-3y&=31\\ 9x-5y&=41\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$7x-3y=31\qquad\cdots(1)$$`,
          String.raw`$$9x-5y=41\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ হতে পাই, $$3y=7x-31,\;\text{ বা, }y=\frac{7x-31}{3}\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ এ $y$ এর মান বসিয়ে পাই,`,
          String.raw`$$9x-5\cdot\frac{7x-31}{3}=41$$`,
          String.raw`$$\text{বা, }27x-5(7x-31)=123\qquad\left[\,\text{উভয়পক্ষকে }3\ \text{দ্বারা গুণ করে}\,\right]$$`,
          String.raw`$$\text{বা, }27x-35x+155=123$$`,
          String.raw`$$\text{বা, }-8x=-32$$`,
          String.raw`$$\therefore\; x=4$$`,
          String.raw`$x$ এর মান সমীকরণ $(3)$ এ বসিয়ে পাই,`,
          String.raw`$$y=\frac{7\times 4-31}{3}=\frac{28-31}{3}=\frac{-3}{3}=-1$$`,
          String.raw`$$\therefore\;(x,y)=(4,-1)$$`,
        ],
        answer: String.raw`$(x,y)=(4,-1)$`,
      },
    },
    {
      id: 2,
      group: EQ_SUBST,
      question: String.raw`$$\begin{aligned}\frac{x}{2}+\frac{y}{3}&=1\\ \frac{x}{3}+\frac{y}{2}&=1\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`হর সরিয়ে প্রদত্ত সমীকরণদ্বয়কে সাজিয়ে পাই,`,
          String.raw`$$3x+2y=6\qquad\cdots(1)$$`,
          String.raw`$$2x+3y=6\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ হতে পাই, $$x=\frac{6-2y}{3}\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ এ $x$ এর মান বসিয়ে পাই,`,
          String.raw`$$2\cdot\frac{6-2y}{3}+3y=6$$`,
          String.raw`$$\text{বা, }2(6-2y)+9y=18$$`,
          String.raw`$$\text{বা, }12-4y+9y=18$$`,
          String.raw`$$\text{বা, }5y=6$$`,
          String.raw`$$\therefore\; y=\frac{6}{5}$$`,
          String.raw`$y$ এর মান সমীকরণ $(3)$ এ বসিয়ে পাই,`,
          String.raw`$$x=\frac{6-2\times\frac{6}{5}}{3}=\frac{6-\frac{12}{5}}{3}=\frac{\frac{18}{5}}{3}=\frac{6}{5}$$`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{6}{5},\;\frac{6}{5}\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{6}{5},\;\dfrac{6}{5}\right)$`,
      },
    },
    {
      id: 3,
      group: EQ_SUBST,
      question: String.raw`$$\begin{aligned}\frac{x}{a}+\frac{y}{b}&=2\\ ax+by&=a^{2}+b^{2}\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$\frac{x}{a}+\frac{y}{b}=2\qquad\cdots(1)$$`,
          String.raw`$$ax+by=a^{2}+b^{2}\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ হতে পাই, $$\frac{x}{a}=2-\frac{y}{b},\;\text{ বা, }x=2a-\frac{ay}{b}\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ এ $x$ এর মান বসিয়ে পাই,`,
          String.raw`$$a\left(2a-\frac{ay}{b}\right)+by=a^{2}+b^{2}$$`,
          String.raw`$$\text{বা, }2a^{2}-\frac{a^{2}y}{b}+by=a^{2}+b^{2}$$`,
          String.raw`$$\text{বা, }2a^{2}b-a^{2}y+b^{2}y=a^{2}b+b^{3}\qquad\left[\,\text{উভয়পক্ষকে }b\ \text{দ্বারা গুণ করে}\,\right]$$`,
          String.raw`$$\text{বা, }y\left(b^{2}-a^{2}\right)=b^{3}-a^{2}b=b\left(b^{2}-a^{2}\right)$$`,
          String.raw`$$\therefore\; y=b\qquad\left[\,b^{2}-a^{2}\neq 0\ \text{ধরে উভয়পক্ষকে তা দিয়ে ভাগ করে}\,\right]$$`,
          String.raw`$y$ এর মান সমীকরণ $(3)$ এ বসিয়ে পাই,`,
          String.raw`$$x=2a-\frac{ab}{b}=2a-a=a$$`,
          String.raw`$$\therefore\;(x,y)=(a,b)$$`,
        ],
        answer: String.raw`$(x,y)=(a,b)$`,
      },
    },

    // ─────────────── অপনয়ন পদ্ধতি (4 – 6) ───────────────
    {
      id: 4,
      group: EQ_ELIM,
      question: String.raw`$$\begin{aligned}7x-3y&=31\\ 9x-5y&=41\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$7x-3y=31\qquad\cdots(1)$$`,
          String.raw`$$9x-5y=41\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ কে $5$ দ্বারা ও সমীকরণ $(2)$ কে $3$ দ্বারা গুণ করে পাই,`,
          String.raw`$$35x-15y=155\qquad\cdots(3)$$`,
          String.raw`$$27x-15y=123\qquad\cdots(4)$$`,
          String.raw`সমীকরণ $(3)$ থেকে $(4)$ বিয়োগ করে পাই,`,
          String.raw`$$8x=32$$`,
          String.raw`$$\therefore\; x=4$$`,
          String.raw`$x$ এর মান সমীকরণ $(1)$ এ বসিয়ে পাই,`,
          String.raw`$$7\times 4-3y=31$$`,
          String.raw`$$\text{বা, }-3y=31-28$$`,
          String.raw`$$\text{বা, }-3y=3$$`,
          String.raw`$$\therefore\; y=-1$$`,
          String.raw`$$\therefore\;(x,y)=(4,-1)$$`,
        ],
        answer: String.raw`$(x,y)=(4,-1)$`,
      },
    },
    {
      id: 5,
      group: EQ_ELIM,
      question: String.raw`$$\begin{aligned}7x-8y&=-9\\ 5x-4y&=-3\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$7x-8y=-9\qquad\cdots(1)$$`,
          String.raw`$$5x-4y=-3\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(2)$ এর উভয়পক্ষকে $2$ দ্বারা গুণ করে পাই,`,
          String.raw`$$10x-8y=-6\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(1)$ থেকে $(3)$ বিয়োগ করে পাই,`,
          String.raw`$$-3x=-3$$`,
          String.raw`$$\therefore\; x=1$$`,
          String.raw`$x$ এর মান সমীকরণ $(2)$ এ বসিয়ে পাই,`,
          String.raw`$$5\times 1-4y=-3$$`,
          String.raw`$$\text{বা, }-4y=-8$$`,
          String.raw`$$\therefore\; y=2$$`,
          String.raw`$$\therefore\;(x,y)=(1,2)$$`,
        ],
        answer: String.raw`$(x,y)=(1,2)$`,
      },
    },
    {
      id: 6,
      group: EQ_ELIM,
      question: String.raw`$$\begin{aligned}ax+by&=c\\ a^{2}x+b^{2}y&=c^{2}\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$ax+by=c\qquad\cdots(1)$$`,
          String.raw`$$a^{2}x+b^{2}y=c^{2}\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ এর উভয়পক্ষকে $b$ দ্বারা গুণ করে পাই,`,
          String.raw`$$abx+b^{2}y=bc\qquad\cdots(3)$$`,
          String.raw`সমীকরণ $(2)$ থেকে $(3)$ বিয়োগ করে পাই,`,
          String.raw`$$a^{2}x-abx=c^{2}-bc$$`,
          String.raw`$$\text{বা, }ax(a-b)=c(c-b)$$`,
          String.raw`$$\therefore\; x=\frac{c(c-b)}{a(a-b)}$$`,
          String.raw`আবার, সমীকরণ $(1)$ এর উভয়পক্ষকে $a$ দ্বারা গুণ করে পাই,`,
          String.raw`$$a^{2}x+aby=ac\qquad\cdots(4)$$`,
          String.raw`সমীকরণ $(4)$ থেকে $(2)$ বিয়োগ করে পাই,`,
          String.raw`$$aby-b^{2}y=ac-c^{2}$$`,
          String.raw`$$\text{বা, }by(a-b)=c(a-c)$$`,
          String.raw`$$\therefore\; y=\frac{c(a-c)}{b(a-b)}$$`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{c(c-b)}{a(a-b)},\;\frac{c(a-c)}{b(a-b)}\right)\qquad\left[\,a\neq 0,\;b\neq 0,\;a\neq b\,\right]$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{c(c-b)}{a(a-b)},\;\dfrac{c(a-c)}{b(a-b)}\right)$`,
      },
    },

    // ─────────────── আড়গুণন পদ্ধতি (7 – 15) ───────────────
    {
      id: 7,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}2x+3y+5&=0\\ 4x+7y+6&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`সমীকরণদ্বয় ইতোমধ্যেই $a_{1}x+b_{1}y+c_{1}=0$ ও $a_{2}x+b_{2}y+c_{2}=0$ আকারে আছে। তুলনা করে পাই,`,
          String.raw`$$a_{1}=2,\;b_{1}=3,\;c_{1}=5;\qquad a_{2}=4,\;b_{2}=7,\;c_{2}=6$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{3\times 6-7\times 5}=\frac{y}{5\times 4-6\times 2}=\frac{1}{2\times 7-4\times 3}$$`,
          String.raw`$$\text{বা, }\frac{x}{18-35}=\frac{y}{20-12}=\frac{1}{14-12}$$`,
          String.raw`$$\text{বা, }\frac{x}{-17}=\frac{y}{8}=\frac{1}{2}$$`,
          String.raw`সুতরাং $$x=-\frac{17}{2},\qquad y=\frac{8}{2}=4$$`,
          String.raw`$$\therefore\;(x,y)=\left(-\frac{17}{2},\;4\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(-\dfrac{17}{2},\;4\right)$`,
      },
    },
    {
      id: 8,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}3x-5y+9&=0\\ 5x-3y-1&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=3,\;b_{1}=-5,\;c_{1}=9;\qquad a_{2}=5,\;b_{2}=-3,\;c_{2}=-1$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{(-5)\times(-1)-(-3)\times 9}=\frac{y}{9\times 5-(-1)\times 3}=\frac{1}{3\times(-3)-5\times(-5)}$$`,
          String.raw`$$\text{বা, }\frac{x}{5+27}=\frac{y}{45+3}=\frac{1}{-9+25}$$`,
          String.raw`$$\text{বা, }\frac{x}{32}=\frac{y}{48}=\frac{1}{16}$$`,
          String.raw`সুতরাং $$x=\frac{32}{16}=2,\qquad y=\frac{48}{16}=3$$`,
          String.raw`$$\therefore\;(x,y)=(2,3)$$`,
        ],
        answer: String.raw`$(x,y)=(2,3)$`,
      },
    },
    {
      id: 9,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}x+2y&=7\\ 2x-3y&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`পক্ষান্তর প্রক্রিয়ায় ডানপক্ষ $0$ করে পাই,`,
          String.raw`$$x+2y-7=0$$`,
          String.raw`$$2x-3y+0=0$$`,
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=1,\;b_{1}=2,\;c_{1}=-7;\qquad a_{2}=2,\;b_{2}=-3,\;c_{2}=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{2\times 0-(-3)\times(-7)}=\frac{y}{(-7)\times 2-0\times 1}=\frac{1}{1\times(-3)-2\times 2}$$`,
          String.raw`$$\text{বা, }\frac{x}{0-21}=\frac{y}{-14-0}=\frac{1}{-3-4}$$`,
          String.raw`$$\text{বা, }\frac{x}{-21}=\frac{y}{-14}=\frac{1}{-7}$$`,
          String.raw`$$\text{বা, }\frac{x}{21}=\frac{y}{14}=\frac{1}{7}$$`,
          String.raw`সুতরাং $$x=\frac{21}{7}=3,\qquad y=\frac{14}{7}=2$$`,
          String.raw`$$\therefore\;(x,y)=(3,2)$$`,
        ],
        answer: String.raw`$(x,y)=(3,2)$`,
      },
    },
    {
      id: 10,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}4x+3y&=-12\\ 2x&=5\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`পক্ষান্তর প্রক্রিয়ায় ডানপক্ষ $0$ করে পাই,`,
          String.raw`$$4x+3y+12=0$$`,
          String.raw`$$2x+0\cdot y-5=0$$`,
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=4,\;b_{1}=3,\;c_{1}=12;\qquad a_{2}=2,\;b_{2}=0,\;c_{2}=-5$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{3\times(-5)-0\times 12}=\frac{y}{12\times 2-(-5)\times 4}=\frac{1}{4\times 0-2\times 3}$$`,
          String.raw`$$\text{বা, }\frac{x}{-15-0}=\frac{y}{24+20}=\frac{1}{0-6}$$`,
          String.raw`$$\text{বা, }\frac{x}{-15}=\frac{y}{44}=\frac{1}{-6}$$`,
          String.raw`সুতরাং $$x=\frac{-15}{-6}=\frac{5}{2},\qquad y=\frac{44}{-6}=-\frac{22}{3}$$`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{5}{2},\;-\frac{22}{3}\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{5}{2},\;-\dfrac{22}{3}\right)$`,
      },
    },
    {
      id: 11,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}-7x+8y&=9\\ 5x-4y&=-3\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`পক্ষান্তর প্রক্রিয়ায় ডানপক্ষ $0$ করে পাই,`,
          String.raw`$$-7x+8y-9=0$$`,
          String.raw`$$5x-4y+3=0$$`,
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=-7,\;b_{1}=8,\;c_{1}=-9;\qquad a_{2}=5,\;b_{2}=-4,\;c_{2}=3$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{8\times 3-(-4)\times(-9)}=\frac{y}{(-9)\times 5-3\times(-7)}=\frac{1}{(-7)\times(-4)-5\times 8}$$`,
          String.raw`$$\text{বা, }\frac{x}{24-36}=\frac{y}{-45+21}=\frac{1}{28-40}$$`,
          String.raw`$$\text{বা, }\frac{x}{-12}=\frac{y}{-24}=\frac{1}{-12}$$`,
          String.raw`$$\text{বা, }\frac{x}{12}=\frac{y}{24}=\frac{1}{12}$$`,
          String.raw`সুতরাং $$x=\frac{12}{12}=1,\qquad y=\frac{24}{12}=2$$`,
          String.raw`$$\therefore\;(x,y)=(1,2)$$`,
        ],
        answer: String.raw`$(x,y)=(1,2)$`,
      },
    },
    {
      id: 12,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}3x-y-7&=0\\ 2x+y-3&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=3,\;b_{1}=-1,\;c_{1}=-7;\qquad a_{2}=2,\;b_{2}=1,\;c_{2}=-3$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{(-1)\times(-3)-1\times(-7)}=\frac{y}{(-7)\times 2-(-3)\times 3}=\frac{1}{3\times 1-2\times(-1)}$$`,
          String.raw`$$\text{বা, }\frac{x}{3+7}=\frac{y}{-14+9}=\frac{1}{3+2}$$`,
          String.raw`$$\text{বা, }\frac{x}{10}=\frac{y}{-5}=\frac{1}{5}$$`,
          String.raw`সুতরাং $$x=\frac{10}{5}=2,\qquad y=\frac{-5}{5}=-1$$`,
          String.raw`$$\therefore\;(x,y)=(2,-1)$$`,
        ],
        answer: String.raw`$(x,y)=(2,-1)$`,
      },
    },
    {
      id: 13,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}ax+by&=a^{2}+b^{2}\\ 2bx-ay&=ab\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`পক্ষান্তর প্রক্রিয়ায় ডানপক্ষ $0$ করে পাই,`,
          String.raw`$$ax+by-\left(a^{2}+b^{2}\right)=0$$`,
          String.raw`$$2bx-ay-ab=0$$`,
          String.raw`তুলনা করে পাই,`,
          String.raw`$$a_{1}=a,\;b_{1}=b,\;c_{1}=-\left(a^{2}+b^{2}\right);\qquad a_{2}=2b,\;b_{2}=-a,\;c_{2}=-ab$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{b\times(-ab)-(-a)\times\left\{-\left(a^{2}+b^{2}\right)\right\}}=\frac{y}{-\left(a^{2}+b^{2}\right)\times 2b-(-ab)\times a}=\frac{1}{a\times(-a)-2b\times b}$$`,
          String.raw`$$\text{বা, }\frac{x}{-ab^{2}-a^{3}-ab^{2}}=\frac{y}{-2a^{2}b-2b^{3}+a^{2}b}=\frac{1}{-a^{2}-2b^{2}}$$`,
          String.raw`$$\text{বা, }\frac{x}{-a\left(a^{2}+2b^{2}\right)}=\frac{y}{-b\left(a^{2}+2b^{2}\right)}=\frac{1}{-\left(a^{2}+2b^{2}\right)}$$`,
          String.raw`$$\text{বা, }\frac{x}{a\left(a^{2}+2b^{2}\right)}=\frac{y}{b\left(a^{2}+2b^{2}\right)}=\frac{1}{a^{2}+2b^{2}}$$`,
          String.raw`সুতরাং $$x=\frac{a\left(a^{2}+2b^{2}\right)}{a^{2}+2b^{2}}=a,\qquad y=\frac{b\left(a^{2}+2b^{2}\right)}{a^{2}+2b^{2}}=b$$`,
          String.raw`$$\therefore\;(x,y)=(a,b)$$`,
        ],
        answer: String.raw`$(x,y)=(a,b)$`,
      },
    },
    {
      id: 14,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}y(3+x)&=x(6+y)\\ 3(3+x)&=5(y-1)\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`১ম সমীকরণটি সরল করে পাই,`,
          String.raw`$$3y+xy=6x+xy$$`,
          String.raw`$$\text{বা, }3y=6x\qquad\left[\,xy\ \text{উভয়পক্ষ থেকে কাটা গেল}\,\right]$$`,
          String.raw`$$\text{বা, }2x-y=0$$`,
          String.raw`২য় সমীকরণটি সরল করে পাই,`,
          String.raw`$$9+3x=5y-5$$`,
          String.raw`$$\text{বা, }3x-5y+14=0$$`,
          String.raw`সুতরাং সমীকরণদ্বয়`,
          String.raw`$$2x-y+0=0$$`,
          String.raw`$$3x-5y+14=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{(-1)\times 14-(-5)\times 0}=\frac{y}{0\times 3-14\times 2}=\frac{1}{2\times(-5)-3\times(-1)}$$`,
          String.raw`$$\text{বা, }\frac{x}{-14-0}=\frac{y}{0-28}=\frac{1}{-10+3}$$`,
          String.raw`$$\text{বা, }\frac{x}{-14}=\frac{y}{-28}=\frac{1}{-7}$$`,
          String.raw`সুতরাং $$x=\frac{-14}{-7}=2,\qquad y=\frac{-28}{-7}=4$$`,
          String.raw`$$\therefore\;(x,y)=(2,4)$$`,
        ],
        answer: String.raw`$(x,y)=(2,4)$`,
      },
    },
    {
      id: 15,
      group: EQ_CROSS,
      question: String.raw`$$\begin{aligned}(x+2)(y-3)&=y(x-1)\\ 5x-11y-8&=0\end{aligned}$$`,
      solution: {
        steps: [
          String.raw`১ম সমীকরণটি সরল করে পাই,`,
          String.raw`$$xy-3x+2y-6=xy-y$$`,
          String.raw`$$\text{বা, }-3x+2y-6+y=0\qquad\left[\,xy\ \text{উভয়পক্ষ থেকে কাটা গেল}\,\right]$$`,
          String.raw`$$\text{বা, }-3x+3y-6=0$$`,
          String.raw`$$\text{বা, }x-y+2=0\qquad\left[\,\text{উভয়পক্ষকে }-3\ \text{দ্বারা ভাগ করে}\,\right]$$`,
          String.raw`সুতরাং সমীকরণদ্বয়`,
          String.raw`$$x-y+2=0$$`,
          String.raw`$$5x-11y-8=0$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{(-1)\times(-8)-(-11)\times 2}=\frac{y}{2\times 5-(-8)\times 1}=\frac{1}{1\times(-11)-5\times(-1)}$$`,
          String.raw`$$\text{বা, }\frac{x}{8+22}=\frac{y}{10+8}=\frac{1}{-11+5}$$`,
          String.raw`$$\text{বা, }\frac{x}{30}=\frac{y}{18}=\frac{1}{-6}$$`,
          String.raw`সুতরাং $$x=\frac{30}{-6}=-5,\qquad y=\frac{18}{-6}=-3$$`,
          String.raw`$$\therefore\;(x,y)=(-5,-3)$$`,
        ],
        answer: String.raw`$(x,y)=(-5,-3)$`,
      },
    },
  ],
};

// অনুশীলনী ১২.৩ — book page ২৪২. প্রতিটি প্রশ্নেরই একই নির্দেশনা, তাই একটিই
// শিরোনাম। প্রতিটি সমাধানের সঙ্গে ছক কাগজের ছবি আছে, আর ছবির বিন্দুগুলো
// সমাধানের ছক থেকেই নেওয়া।
const EQ_GRAPH = "লেখচিত্রের সাহায্যে সমাধান করো (১ – ১০)";

const exercise123: Exercise = {
  id: "12.3",
  bnId: "অনুশীলনী ১২.৩",
  title: "লেখিক পদ্ধতি",
  bookPages: "২৪২",
  formulas: [
    {
      title: "লেখ আঁকার নিয়ম",
      formulas: [
        {
          statement: String.raw`$$2x+y=3\;\Rightarrow\;y=3-2x$$`,
          note: "প্রথমে সমীকরণটি থেকে একটি চলককে অপরটির মাধ্যমে প্রকাশ করতে হয়, তবেই সুবিধামত কয়েকটি মান বসিয়ে ছক তৈরি করা যায়।",
        },
        {
          statement: String.raw`[[table side]]
$x$ | $-1$ | $0$ | $3$
$y$ | $5$ | $3$ | $-3$`,
          note: "দুই চলকের একটি সরল সমীকরণের লেখ সরলরেখা, আর সরলরেখা নির্দিষ্ট করতে দুইটি বিন্দুই যথেষ্ট; তবু তিনটি নিলে একটি ভুল হিসাব সঙ্গে সঙ্গে ধরা পড়ে।",
        },
        {
          statement: String.raw`$$XOX'\perp YOY',\qquad O=(0,0)$$`,
          note: "ছক কাগজে পরস্পর লম্ব দুইটি রেখাকে x-অক্ষ ও y-অক্ষ এবং এদের ছেদবিন্দুকে মূলবিন্দু ধরা হয়; ক্ষুদ্রতম বর্গক্ষেত্রের এক বাহুর দৈর্ঘ্যকে সাধারণত একক ধরা হয়।",
        },
      ],
    },
    {
      title: "লেখ দেখে সমাধান",
      formulas: [
        {
          statement: String.raw`দুই লেখ এক বিন্দুতে ছেদ করে $\;\Rightarrow\;$ ছেদবিন্দুর স্থানাঙ্কই সমাধান`,
          note: "সমঞ্জস্য ও পরস্পর অনির্ভরশীল সমীকরণজোটের চেহারা। ছেদবিন্দুর স্থানাঙ্ক উভয় সমীকরণকেই সিদ্ধ করে, তাই সেটিই অনন্য সমাধান।",
        },
        {
          statement: String.raw`দুই লেখ সমাপতিত $\;\Rightarrow\;$ অসংখ্য সমাধান`,
          note: "সমঞ্জস্য ও পরস্পর নির্ভরশীল জোট — একটির উপর আরেকটি বসে গিয়ে একটিই সরলরেখা হয়ে যায়, আর ঐ রেখার প্রতিটি বিন্দুই একেকটি সমাধান।",
        },
        {
          statement: String.raw`দুই লেখ সমান্তরাল $\;\Rightarrow\;$ কোনো সমাধান নেই`,
          note: "অসমঞ্জস্য ও পরস্পর অনির্ভরশীল জোট — রেখা দুইটি কখনো মিলবে না, তাই সাধারণ ছেদবিন্দুও নেই।",
        },
        {
          statement: String.raw`$$3-\frac{3}{2}x=8-4x\;\Rightarrow\;y=3-\frac{3}{2}x,\;\;y=8-4x$$`,
          note: "এক চলকবিশিষ্ট সমীকরণও লেখে সমাধান করা যায় — দুই পক্ষকে আলাদাভাবে y ধরলে দুইটি সরলরেখা মেলে, আর ছেদবিন্দুর ভুজই নির্ণেয় মান।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৮ — book pages ২৩৮-২৩৯.
    {
      id: 8,
      question: String.raw`সমাধান করো ও সমাধান লেখচিত্রে দেখাও: $$\begin{aligned}2x+y&=8\\ 3x-2y&=5\end{aligned}$$`,
      figure: "12-ex8",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x+y-8=0\qquad\cdots(1)$$`,
          String.raw`$$3x-2y-5=0\qquad\cdots(2)$$`,
          String.raw`আড়গুণন পদ্ধতিতে পাই,`,
          String.raw`$$\frac{x}{1\times(-5)-(-2)\times(-8)}=\frac{y}{(-8)\times 3-(-5)\times 2}=\frac{1}{2\times(-2)-3\times 1}$$`,
          String.raw`$$\text{বা, }\frac{x}{-5-16}=\frac{y}{-24+10}=\frac{1}{-4-3}$$`,
          String.raw`$$\text{বা, }\frac{x}{-21}=\frac{y}{-14}=\frac{1}{-7}$$`,
          String.raw`$$\text{বা, }\frac{x}{21}=\frac{y}{14}=\frac{1}{7}$$`,
          String.raw`সুতরাং $$x=\frac{21}{7}=3,\qquad y=\frac{14}{7}=2$$`,
          String.raw`মনে করি, ছক কাগজে $XOX'$ ও $YOY'$ যথাক্রমে $x$-অক্ষ ও $y$-অক্ষ এবং $O$ মূলবিন্দু। উভয় অক্ষ বরাবর ক্ষুদ্রতম বর্গের প্রতি দুই বাহুর দৈর্ঘ্যকে একক ধরে $(3,2)$ বিন্দুটি স্থাপন করি।`,
          String.raw`$$\therefore\;(x,y)=(3,2)$$`,
        ],
        answer: String.raw`$(x,y)=(3,2)$`,
      },
    },
    // উদাহরণ ৯ — book pages ২৩৯-২৪০.
    {
      id: 9,
      question: String.raw`লেখচিত্রের সাহায্যে সমাধান করো: $$\begin{aligned}3x-y&=3\\ 5x+y&=21\end{aligned}$$`,
      figure: "12-ex9",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$3x-y=3\qquad\cdots(1)$$`,
          String.raw`$$5x+y=21\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$y=3x-3$$`,
          String.raw`[[table side]]
$x$ | $-1$ | $0$ | $3$
$y$ | $-6$ | $-3$ | $6$`,
          String.raw`$\therefore$ সমীকরণটির লেখের উপর তিনটি বিন্দু $(-1,-6),\;(0,-3),\;(3,6)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$y=21-5x$$`,
          String.raw`[[table side]]
$x$ | $3$ | $4$ | $5$
$y$ | $6$ | $1$ | $-4$`,
          String.raw`$\therefore$ সমীকরণটির লেখের উপর তিনটি বিন্দু $(3,6),\;(4,1),\;(5,-4)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে যথাক্রমে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়।`,
          String.raw`মনে করি, সরলরেখাদ্বয় পরস্পর $P$ বিন্দুতে ছেদ করেছে। চিত্র থেকে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(3,6)$।`,
          String.raw`$$\therefore\;(x,y)=(3,6)$$`,
        ],
        answer: String.raw`$(x,y)=(3,6)$`,
      },
    },
    // উদাহরণ ১০ — book pages ২৪০-২৪১.
    {
      id: 10,
      question: String.raw`লৈখিক পদ্ধতিতে সমাধান করো: $$\begin{aligned}2x+5y&=-14\\ 4x-5y&=17\end{aligned}$$`,
      figure: "12-ex10",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x+5y=-14\qquad\cdots(1)$$`,
          String.raw`$$4x-5y=17\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$5y=-14-2x,\;\text{ বা, }y=\frac{-2x-14}{5}$$`,
          String.raw`[[table side]]
$x$ | $3$ | $\frac{1}{2}$ | $-2$
$y$ | $-4$ | $-3$ | $-2$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(3,-4),\;\left(\frac{1}{2},-3\right),\;(-2,-2)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$5y=4x-17,\;\text{ বা, }y=\frac{4x-17}{5}$$`,
          String.raw`[[table side]]
$x$ | $3$ | $\frac{1}{2}$ | $-2$
$y$ | $-1$ | $-3$ | $-5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(3,-1),\;\left(\frac{1}{2},-3\right),\;(-2,-5)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $\left(\frac{1}{2},-3\right)$।`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{1}{2},\;-3\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{1}{2},\;-3\right)$`,
      },
    },
    // উদাহরণ ১১ — book pages ২৪১-২৪২.
    {
      id: 11,
      question: String.raw`লেখের সাহায্যে সমাধান করো: $$3-\frac{3}{2}x=8-4x$$`,
      figure: "12-ex11",
      solution: {
        steps: [
          String.raw`ধরি, $$y=3-\frac{3}{2}x=8-4x$$`,
          String.raw`$$\therefore\; y=3-\frac{3}{2}x\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং}\;\; y=8-4x\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $-2$ | $0$ | $2$
$y$ | $6$ | $3$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,6),\;(0,3),\;(2,0)$।`,
          String.raw`আবার, সমীকরণ $(2)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $1$ | $2$ | $3$
$y$ | $4$ | $0$ | $-4$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(1,4),\;(2,0),\;(3,-4)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ ছেদবিন্দুটির স্থানাঙ্ক $(2,0)$।`,
          String.raw`$$\therefore\; x=2$$`,
        ],
        answer: String.raw`$x=2$`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}3x+4y&=14\\ 4x-3y&=2\end{aligned}$$`,
      figure: "123-p1",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$3x+4y=14\qquad\cdots(1)$$`,
          String.raw`$$4x-3y=2\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$4y=14-3x,\;\text{ বা, }y=\frac{14-3x}{4}$$`,
          String.raw`[[table side]]
$x$ | $-2$ | $2$ | $6$
$y$ | $5$ | $2$ | $-1$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,5),\;(2,2),\;(6,-1)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$3y=4x-2,\;\text{ বা, }y=\frac{4x-2}{3}$$`,
          String.raw`[[table side]]
$x$ | $-1$ | $2$ | $5$
$y$ | $-2$ | $2$ | $6$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-1,-2),\;(2,2),\;(5,6)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে যথাক্রমে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(2,2)$।`,
          String.raw`$$\therefore\;(x,y)=(2,2)$$`,
        ],
        answer: String.raw`$(x,y)=(2,2)$`,
      },
    },
    {
      id: 2,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}2x-y&=1\\ 5x+y&=13\end{aligned}$$`,
      figure: "123-p2",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x-y=1\qquad\cdots(1)$$`,
          String.raw`$$5x+y=13\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$y=2x-1$$`,
          String.raw`[[table side]]
$x$ | $0$ | $2$ | $3$
$y$ | $-1$ | $3$ | $5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,-1),\;(2,3),\;(3,5)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$y=13-5x$$`,
          String.raw`[[table side]]
$x$ | $1$ | $2$ | $3$
$y$ | $8$ | $3$ | $-2$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(1,8),\;(2,3),\;(3,-2)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(2,3)$।`,
          String.raw`$$\therefore\;(x,y)=(2,3)$$`,
        ],
        answer: String.raw`$(x,y)=(2,3)$`,
      },
    },
    {
      id: 3,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}2x+5y&=1\\ x+3y&=2\end{aligned}$$`,
      figure: "123-p3",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$2x+5y=1\qquad\cdots(1)$$`,
          String.raw`$$x+3y=2\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$5y=1-2x,\;\text{ বা, }y=\frac{1-2x}{5}$$`,
          String.raw`[[table side]]
$x$ | $-7$ | $-2$ | $3$
$y$ | $3$ | $1$ | $-1$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-7,3),\;(-2,1),\;(3,-1)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$3y=2-x,\;\text{ বা, }y=\frac{2-x}{3}$$`,
          String.raw`[[table side]]
$x$ | $-7$ | $-1$ | $2$
$y$ | $3$ | $1$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-7,3),\;(-1,1),\;(2,0)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(-7,3)$।`,
          String.raw`$$\therefore\;(x,y)=(-7,3)$$`,
        ],
        answer: String.raw`$(x,y)=(-7,3)$`,
      },
    },
    {
      id: 4,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}3x-2y&=2\\ 5x-3y&=5\end{aligned}$$`,
      figure: "123-p4",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$3x-2y=2\qquad\cdots(1)$$`,
          String.raw`$$5x-3y=5\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$2y=3x-2,\;\text{ বা, }y=\frac{3x-2}{2}$$`,
          String.raw`[[table side]]
$x$ | $0$ | $2$ | $4$
$y$ | $-1$ | $2$ | $5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,-1),\;(2,2),\;(4,5)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$3y=5x-5,\;\text{ বা, }y=\frac{5x-5}{3}$$`,
          String.raw`[[table side]]
$x$ | $-2$ | $1$ | $4$
$y$ | $-5$ | $0$ | $5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,-5),\;(1,0),\;(4,5)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(4,5)$।`,
          String.raw`$$\therefore\;(x,y)=(4,5)$$`,
        ],
        answer: String.raw`$(x,y)=(4,5)$`,
      },
    },
    {
      id: 5,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}\frac{x}{2}+\frac{y}{3}&=2\\ 2x+3y&=13\end{aligned}$$`,
      figure: "123-p5",
      solution: {
        steps: [
          String.raw`১ম সমীকরণের উভয়পক্ষকে $6$ দ্বারা গুণ করে পাই,`,
          String.raw`$$3x+2y=12\qquad\cdots(1)$$`,
          String.raw`$$2x+3y=13\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$2y=12-3x,\;\text{ বা, }y=\frac{12-3x}{2}$$`,
          String.raw`[[table side]]
$x$ | $0$ | $2$ | $4$
$y$ | $6$ | $3$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,6),\;(2,3),\;(4,0)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$3y=13-2x,\;\text{ বা, }y=\frac{13-2x}{3}$$`,
          String.raw`[[table side]]
$x$ | $-1$ | $2$ | $5$
$y$ | $5$ | $3$ | $1$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-1,5),\;(2,3),\;(5,1)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(2,3)$।`,
          String.raw`$$\therefore\;(x,y)=(2,3)$$`,
        ],
        answer: String.raw`$(x,y)=(2,3)$`,
      },
    },
    {
      id: 6,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}3x+y&=6\\ 5x+3y&=12\end{aligned}$$`,
      figure: "123-p6",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$3x+y=6\qquad\cdots(1)$$`,
          String.raw`$$5x+3y=12\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$y=6-3x$$`,
          String.raw`[[table side]]
$x$ | $0$ | $1$ | $2$
$y$ | $6$ | $3$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,6),\;(1,3),\;(2,0)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$3y=12-5x,\;\text{ বা, }y=\frac{12-5x}{3}$$`,
          String.raw`[[table side]]
$x$ | $0$ | $\frac{3}{2}$ | $3$
$y$ | $4$ | $\frac{3}{2}$ | $-1$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,4),\;\left(\frac{3}{2},\frac{3}{2}\right),\;(3,-1)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $\left(\frac{3}{2},\frac{3}{2}\right)$।`,
          String.raw`$$\therefore\;(x,y)=\left(\frac{3}{2},\;\frac{3}{2}\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(\dfrac{3}{2},\;\dfrac{3}{2}\right)$`,
      },
    },
    {
      id: 7,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}3x+2y&=4\\ 3x-4y&=1\end{aligned}$$`,
      figure: "123-p7",
      solution: {
        steps: [
          String.raw`প্রদত্ত সমীকরণদ্বয়`,
          String.raw`$$3x+2y=4\qquad\cdots(1)$$`,
          String.raw`$$3x-4y=1\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$2y=4-3x,\;\text{ বা, }y=\frac{4-3x}{2}$$`,
          String.raw`[[table side]]
$x$ | $-2$ | $0$ | $2$
$y$ | $5$ | $2$ | $-1$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,5),\;(0,2),\;(2,-1)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$4y=3x-1,\;\text{ বা, }y=\frac{3x-1}{4}$$`,
          String.raw`[[table side]]
$x$ | $-1$ | $1$ | $3$
$y$ | $-1$ | $\frac{1}{2}$ | $2$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-1,-1),\;\left(1,\frac{1}{2}\right),\;(3,2)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $\left(1,\frac{1}{2}\right)$।`,
          String.raw`$$\therefore\;(x,y)=\left(1,\;\frac{1}{2}\right)$$`,
        ],
        answer: String.raw`$(x,y)=\left(1,\;\dfrac{1}{2}\right)$`,
      },
    },
    {
      id: 8,
      group: EQ_GRAPH,
      question: String.raw`$$\begin{aligned}\frac{x}{2}+\frac{y}{3}&=3\\ x+\frac{y}{6}&=3\end{aligned}$$`,
      figure: "123-p8",
      solution: {
        steps: [
          String.raw`১ম সমীকরণের উভয়পক্ষকে $6$ দ্বারা ও ২য় সমীকরণের উভয়পক্ষকে $6$ দ্বারা গুণ করে পাই,`,
          String.raw`$$3x+2y=18\qquad\cdots(1)$$`,
          String.raw`$$6x+y=18\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$2y=18-3x,\;\text{ বা, }y=\frac{18-3x}{2}$$`,
          String.raw`[[table side]]
$x$ | $2$ | $4$ | $6$
$y$ | $6$ | $3$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(2,6),\;(4,3),\;(6,0)$।`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$y=18-6x$$`,
          String.raw`[[table side]]
$x$ | $2$ | $\frac{5}{2}$ | $3$
$y$ | $6$ | $3$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(2,6),\;\left(\frac{5}{2},3\right),\;(3,0)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(2,6)$।`,
          String.raw`$$\therefore\;(x,y)=(2,6)$$`,
        ],
        answer: String.raw`$(x,y)=(2,6)$`,
      },
    },
    {
      id: 9,
      group: EQ_GRAPH,
      question: String.raw`$$3x+2=x-2$$`,
      figure: "123-p9",
      solution: {
        steps: [
          String.raw`এটি এক চলকবিশিষ্ট সমীকরণ। ধরি, $$y=3x+2=x-2$$`,
          String.raw`$$\therefore\; y=3x+2\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং}\;\; y=x-2\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $-2$ | $0$ | $1$
$y$ | $-4$ | $2$ | $5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,-4),\;(0,2),\;(1,5)$।`,
          String.raw`আবার, সমীকরণ $(2)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $-2$ | $0$ | $2$
$y$ | $-4$ | $-2$ | $0$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-2,-4),\;(0,-2),\;(2,0)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ ছেদবিন্দুটির স্থানাঙ্ক $(-2,-4)$। নির্ণেয় হলো ছেদবিন্দুর ভুজ।`,
          String.raw`$$\therefore\; x=-2$$`,
        ],
        answer: String.raw`$x=-2$`,
      },
    },
    {
      id: 10,
      group: EQ_GRAPH,
      question: String.raw`$$3x-7=3-2x$$`,
      figure: "123-p10",
      solution: {
        steps: [
          String.raw`এটিও এক চলকবিশিষ্ট সমীকরণ। ধরি, $$y=3x-7=3-2x$$`,
          String.raw`$$\therefore\; y=3x-7\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং}\;\; y=3-2x\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $1$ | $2$ | $3$
$y$ | $-4$ | $-1$ | $2$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(1,-4),\;(2,-1),\;(3,2)$।`,
          String.raw`আবার, সমীকরণ $(2)$ এ $x$ এর কয়েকটি মান নিয়ে পাই,`,
          String.raw`[[table side]]
$x$ | $0$ | $2$ | $4$
$y$ | $3$ | $-1$ | $-5$`,
          String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,3),\;(2,-1),\;(4,-5)$।`,
          String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
          String.raw`চিত্রে দেখা যায়, $P$ ছেদবিন্দুটির স্থানাঙ্ক $(2,-1)$।`,
          String.raw`$$\therefore\; x=2$$`,
        ],
        answer: String.raw`$x=2$`,
      },
    },
  ],
};

// অনুশীলনী ১২.৪ — book pages ২৪৬-২৪৭, তার সঙ্গে অধ্যায়ের নমুনা প্রশ্ন
// (book pages ২৪৭-২৪৮) অনুশীলনীর নম্বর ধরে টেনে নেওয়া হয়েছে।
const EQ_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const EQ_BUILD = "সহসমীকরণ গঠন করে সমাধান করো (৫ – ১৬)";
const EQ_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৭ – ২০)";
const EQ_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (২১ – ২২)";

const exercise124: Exercise = {
  id: "12.4",
  bnId: "অনুশীলনী ১২.৪",
  title: "বাস্তবভিত্তিক সমস্যার সহসমীকরণ",
  bookPages: "২৪৬ – ২৪৮",
  formulas: [
    {
      title: "সমীকরণ গঠনের পথ",
      formulas: [
        {
          statement: String.raw`$$\text{অজ্ঞাত রাশি দুইটি}\;\longrightarrow\;x,\;y$$`,
          note: "সমস্যার শর্তাবলি থেকে দুইটি অজ্ঞাত রাশির জন্য দুইটি প্রতীক ধরা হয়। যতগুলো অজ্ঞাত, ততগুলো স্বতন্ত্র শর্ত — তাই দুইটি শর্ত থেকে দুইটি সমীকরণ গঠন করতে হয়।",
        },
        {
          statement: String.raw`$$\text{সংখ্যাটি}=10x+y,\qquad\text{স্থান বিনিময়ে}=10y+x$$`,
          note: "দুই অঙ্কবিশিষ্ট সংখ্যার দশক স্থানীয় অঙ্ক x ও একক স্থানীয় অঙ্ক y হলে। যোগ করলে সবসময় 11(x+y), বিয়োগ করলে 9(x−y) পাওয়া যায় — এ দুইটি অনেক প্রশ্নেই কাজে লাগে।",
        },
        {
          statement: String.raw`$$\text{ভগ্নাংশটি}=\frac{x}{y}$$`,
          note: "লব ও হরকে দুইটি চলক ধরে নিলে ভগ্নাংশ-সংক্রান্ত প্রতিটি শর্ত একেকটি সরল সমীকরণে দাঁড়ায় — আড়গুণনেই হর সরে যায়।",
        },
      ],
    },
    {
      title: "যে সূত্রগুলো বারবার লাগে",
      formulas: [
        {
          statement: String.raw`$$\text{পরিসীমা}=2(\text{দৈর্ঘ্য}+\text{প্রস্থ}),\qquad \text{ক্ষেত্রফল}=\text{দৈর্ঘ্য}\times\text{প্রস্থ}$$`,
          note: "আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থকে x ও y ধরলে পরিসীমা দেয় প্রথম সমীকরণটি, আর ক্ষেত্রফলের পরিবর্তন দেয় দ্বিতীয়টি।",
        },
        {
          statement: String.raw`$$\text{সময়}=\frac{\text{দূরত্ব}}{\text{আপেক্ষিক বেগ}}$$`,
          note: "দুইটি বস্তু বিপরীত দিকে চললে আপেক্ষিক বেগ বেগদ্বয়ের যোগফল, একই দিকে চললে বিয়োগফল। ট্রেন পরস্পরকে অতিক্রম করার ক্ষেত্রে অতিক্রান্ত দূরত্ব ট্রেন দুইটির দৈর্ঘ্যের সমষ্টি।",
        },
        {
          statement: String.raw`$$\text{কর্ণসংখ্যা}=\frac{n(n-3)}{2}$$`,
          note: String.raw`$n$ বাহুবিশিষ্ট বহুভুজের কর্ণসংখ্যা — প্রতিটি শীর্ষ থেকে নিজেকে ও দুই সন্নিহিত শীর্ষ বাদে $(n-3)$টি কর্ণ যায়, আর প্রতিটি কর্ণ দুইবার গোনা হয়।`,
        },
        {
          statement: String.raw`$$\text{ঘণ্টার কাঁটা }\frac{y}{12}\text{ ঘর},\qquad\text{মিনিটের কাঁটা }y\text{ ঘর}$$`,
          note: "মিনিটের কাঁটা ঘণ্টার কাঁটার চেয়ে ১২ গুণ দ্রুত চলে। ঘড়ির চাকতিতে ৬০টি ঘর, প্রতি ঘর ৬°; তাই ৩০° মানে ঠিক ৫ ঘরের ব্যবধান।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১২ — book page ২৪৩.
    {
      id: 12,
      question: String.raw`দুই অঙ্কবিশিষ্ট কোনো সংখ্যার অঙ্কদ্বয়ের সমষ্টির সাথে $5$ যোগ করলে যোগফল হবে সংখ্যাটির দশক স্থানীয় অঙ্কের তিনগুণ। আর সংখ্যাটির অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যাবে, তা মূল সংখ্যাটি থেকে $9$ কম হবে। সংখ্যাটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, নির্ণেয় সংখ্যাটির দশক স্থানীয় অঙ্ক $x$ এবং একক স্থানীয় অঙ্ক $y$। অতএব, সংখ্যাটি $10x+y$।`,
          String.raw`$$\therefore\;\text{১ম শর্তানুসারে, }x+y+5=3x\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং ২য় শর্তানুসারে, }10y+x=(10x+y)-9\qquad\cdots(2)$$`,
          String.raw`সমীকরণ $(1)$ থেকে পাই, $$y=3x-x-5,\;\text{ বা, }y=2x-5\qquad\cdots(3)$$`,
          String.raw`আবার, সমীকরণ $(2)$ থেকে পাই,`,
          String.raw`$$10y-y+x-10x+9=0$$`,
          String.raw`$$\text{বা, }9y-9x+9=0$$`,
          String.raw`$$\text{বা, }y-x+1=0$$`,
          String.raw`$$\text{বা, }2x-5-x+1=0\qquad\left[\,(3)\ \text{হতে}\ y\ \text{এর মান বসিয়ে}\,\right]$$`,
          String.raw`$$\therefore\; x=4$$`,
          String.raw`$(3)$ এ $x$ এর মান বসিয়ে পাই, $$y=2\times 4-5=3$$`,
          String.raw`$$\therefore\;\text{নির্ণেয় সংখ্যাটি}=10x+y=10\times 4+3=43$$`,
        ],
        answer: String.raw`সংখ্যাটি $43$`,
      },
    },
    // উদাহরণ ১৩ — book pages ২৪৩-২৪৪.
    {
      id: 13,
      question: String.raw`আট বছর পূর্বে পিতার বয়স পুত্রের বয়সের আটগুণ ছিল। দশ বছর পর পিতার বয়স পুত্রের বয়সের দ্বিগুণ হবে। বর্তমানে কার বয়স কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, বর্তমানে পিতার বয়স $x$ বছর ও পুত্রের বয়স $y$ বছর।`,
          String.raw`$$\therefore\;\text{১ম শর্তানুসারে, }x-8=8(y-8)\qquad\cdots(1)$$`,
          String.raw`$$\text{এবং ২য় শর্তানুসারে, }x+10=2(y+10)\qquad\cdots(2)$$`,
          String.raw`$(1)$ হতে পাই, $$x-8=8y-64$$`,
          String.raw`$$\text{বা, }x=8y-56\qquad\cdots(3)$$`,
          String.raw`$(2)$ হতে পাই, $$x+10=2y+20$$`,
          String.raw`$$\text{বা, }8y-56+10=2y+20\qquad\left[\,(3)\ \text{হতে}\ x\ \text{এর মান বসিয়ে}\,\right]$$`,
          String.raw`$$\text{বা, }8y-2y=20+56-10$$`,
          String.raw`$$\text{বা, }6y=66$$`,
          String.raw`$$\therefore\; y=11$$`,
          String.raw`$(3)$ হতে পাই, $$x=8\times 11-56=88-56=32$$`,
          String.raw`$\therefore$ বর্তমানে পিতার বয়স $32$ বছর ও পুত্রের বয়স $11$ বছর।`,
        ],
        answer: String.raw`পিতার বয়স $32$ বছর, পুত্রের বয়স $11$ বছর`,
      },
    },
    // উদাহরণ ১৪ — book pages ২৪৪-২৪৫.
    {
      id: 14,
      question: String.raw`একটি আয়তাকার বাগানের প্রস্থের দ্বিগুণ, দৈর্ঘ্য অপেক্ষা $10$ মিটার বেশি এবং বাগানটির পরিসীমা $100$ মিটার। বাগানটির সীমানার বাইরে চারদিকে $2$ মিটার চওড়া রাস্তা আছে। রাস্তাটি ইট দিয়ে তৈরি করতে প্রতি বর্গ মিটারে $110$ টাকা খরচ হয়।`,
      figure: "12-ex14",
      parts: [
        {
          label: "ক",
          question: String.raw`বাগানটির দৈর্ঘ্য $x$ মিটার ও প্রস্থ $y$ মিটার ধরে সমীকরণজোট গঠন করো।`,
          solution: {
            steps: [
              String.raw`আয়তাকার বাগানটির দৈর্ঘ্য $x$ মিটার ও প্রস্থ $y$ মিটার।`,
              String.raw`$$\therefore\;\text{১ম শর্তানুসারে, }2y=x+10\qquad\cdots(1)$$`,
              String.raw`$$\text{এবং ২য় শর্তানুসারে, }2(x+y)=100\qquad\cdots(2)$$`,
            ],
            answer: String.raw`$2y=x+10$ এবং $2(x+y)=100$`,
          },
        },
        {
          label: "খ",
          question: String.raw`বাগানটির দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমীকরণ $(2)$ হতে পাই, $$2x+2y=100$$`,
              String.raw`$$\text{বা, }2x+x+10=100\qquad\left[\,(1)\ \text{হতে}\,\right]$$`,
              String.raw`$$\text{বা, }3x=90$$`,
              String.raw`$$\therefore\; x=30$$`,
              String.raw`$\therefore$ $(1)$ হতে পাই, $$2y=30+10=40$$`,
              String.raw`$$\therefore\; y=20$$`,
              String.raw`$\therefore$ বাগানটির দৈর্ঘ্য $30$ মিটার ও প্রস্থ $20$ মিটার।`,
            ],
            answer: String.raw`দৈর্ঘ্য $30$ মিটার, প্রস্থ $20$ মিটার`,
          },
        },
        {
          label: "গ",
          question: String.raw`রাস্তাটি ইট দিয়ে তৈরি করতে মোট কত খরচ হবে?`,
          solution: {
            steps: [
              String.raw`রাস্তাটি বাগানের সীমানার বাইরে, তাই রাস্তাসহ বাগানের দৈর্ঘ্য ও প্রস্থ দুই দিক থেকেই $2$ মিটার করে বাড়ে।`,
              String.raw`$$\text{রাস্তাসহ বাগানের দৈর্ঘ্য}=(30+4)\ \text{মি.}=34\ \text{মি.}$$`,
              String.raw`$$\text{রাস্তাসহ বাগানের প্রস্থ}=(20+4)\ \text{মি.}=24\ \text{মি.}$$`,
              String.raw`$$\therefore\;\text{রাস্তার ক্ষেত্রফল}=(34\times 24-30\times 20)\ \text{বর্গমিটার}$$`,
              String.raw`$$=(816-600)\ \text{বর্গমিটার}=216\ \text{বর্গমিটার}$$`,
              String.raw`$$\therefore\;\text{খরচ}=(216\times 110)\ \text{টাকা}=23760\ \text{টাকা}$$`,
            ],
            answer: String.raw`$23760$ টাকা`,
          },
        },
      ],
    },
    // উদাহরণ ১৫ — book pages ২৪৫-২৪৬.
    {
      id: 15,
      question: String.raw`ঘড়ির ঘণ্টা ও মিনিটের কাঁটা কতবার একটির উপরে আরেকটি বসে? সময়গুলো নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $x$ টা $y$ মিনিটে ঘণ্টা ও মিনিটের কাঁটা একটির উপরে আরেকটি বসে; এখানে সুবিধার্থে $x=0,1,\dots,11$ (যেখানে $0$ প্রকৃতপক্ষে $12$ বোঝাবে), আর $y$ পূর্ণসংখ্যা নাও হতে পারে।`,
          String.raw`আমরা জানি, মিনিটের কাঁটা ঘণ্টার কাঁটার তুলনায় $12$ গুণ বেশি দ্রুত চলে।`,
          String.raw`$x$ টার সময় ঘণ্টার কাঁটা ঠিক $x$ লেখার উপরে, অর্থাৎ $5x$ ঘরে, এবং মিনিটের কাঁটা $12$-এর উপরে, অর্থাৎ $0$ ঘরে ছিল।`,
          String.raw`$y$ মিনিটে ঘণ্টার কাঁটা $\dfrac{y}{12}$ এবং মিনিটের কাঁটা $y$ ঘর অতিক্রম করবে। কাঁটা দুইটি একই জায়গায় বসলে,`,
          String.raw`$$5x+\frac{y}{12}=y$$`,
          String.raw`$$\text{বা, }y-\frac{y}{12}=5x$$`,
          String.raw`$$\text{বা, }\frac{11}{12}y=5x$$`,
          String.raw`$$\therefore\; y=\frac{60}{11}x$$`,
          String.raw`এবার $x$ এর সম্ভাব্য মানগুলো বসিয়ে দেখি।`,
          String.raw`$x=0$ হলে $y=0$ মিনিট, অর্থাৎ $12$টা।`,
          String.raw`$x=1$ হলে $1$ টা $5\frac{5}{11}$ মিনিট।`,
          String.raw`$x=2$ হলে $2$ টা $10\frac{10}{11}$ মিনিট।`,
          String.raw`$\cdots\;\cdots\;\cdots$`,
          String.raw`$x=11$ হলে $11$ টা $60$ মিনিট, বা $12$টা।`,
          String.raw`প্রথম ও শেষ সময় দুইটি একই সময় বলে কাঁটা দুইটি $11$ বার মিলিত হবে এবং সময়গুলো হলো $x$ টা $\dfrac{60}{11}x$ মিনিট।`,
        ],
        answer: String.raw`$11$ বার; সময়গুলো $x$ টা $\dfrac{60}{11}x$ মিনিট, যেখানে $x=0,1,\dots,10$`,
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: EQ_MCQ,
      question: String.raw`নিচের কোন শর্তে $ax+by+c=0$ ও $px+qy+r=0$ সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল হবে?
ক) $\dfrac{a}{p}\neq\dfrac{b}{q}$  খ) $\dfrac{a}{p}=\dfrac{b}{q}=\dfrac{c}{r}$  গ) $\dfrac{a}{p}=\dfrac{b}{q}\neq\dfrac{c}{r}$  ঘ) $\dfrac{a}{p}=\dfrac{b}{q}$`,
      solution: {
        steps: [
          String.raw`চলকের সহগের অনুপাত সমান হলে একটি সমীকরণকে অন্যটির মাধ্যমে প্রকাশ করা যায়, অর্থাৎ সমীকরণ দুইটি পরস্পর নির্ভরশীল হয়ে যায়।`,
          String.raw`তাই পরস্পর অনির্ভরশীল হওয়ার শর্তই হলো সহগের অনুপাত অসমান।`,
          String.raw`$$\frac{a}{p}\neq\frac{b}{q}$$`,
          String.raw`এ শর্তে জোটটি সর্বদা সমঞ্জস্য এবং এর একটিমাত্র (অনন্য) সমাধান থাকে; ধ্রুবক পদ তুলনা করার প্রয়োজন হয় না।`,
        ],
        answer: String.raw`ক) $\dfrac{a}{p}\neq\dfrac{b}{q}$`,
      },
    },
    {
      id: 2,
      group: EQ_MCQ,
      question: String.raw`$x+y=4,\;x-y=2$ হলে $(x,y)$ এর মান নিচের কোনটি?
ক) $(2,4)$  খ) $(4,2)$  গ) $(3,1)$  ঘ) $(1,3)$`,
      solution: {
        steps: [
          String.raw`$$x+y=4\qquad\cdots(1)$$`,
          String.raw`$$x-y=2\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=6$$`,
          String.raw`$$\therefore\; x=3$$`,
          String.raw`$(1)$ এ $x$ এর মান বসিয়ে পাই, $$3+y=4$$`,
          String.raw`$$\therefore\; y=1$$`,
        ],
        answer: String.raw`গ) $(3,1)$`,
      },
    },
    {
      id: 3,
      group: EQ_MCQ,
      question: String.raw`নিচের কোনটির জন্য ছকটি সঠিক?
[[table side]]
$x$ | $0$ | $2$ | $4$
$y$ | $-4$ | $0$ | $4$

ক) $y=x-4$  খ) $y=8-x$  গ) $y=4-2x$  ঘ) $y=2x-4$`,
      solution: {
        steps: [
          String.raw`ছকের বিন্দু তিনটি $(0,-4),\;(2,0),\;(4,4)$।`,
          String.raw`$x$ প্রতিবার $2$ বাড়লে $y$ বাড়ে $4$, অর্থাৎ ঢাল $$\frac{4}{2}=2$$`,
          String.raw`$x=0$ হলে $y=-4$, তাই সমীকরণটির রূপ $y=2x-4$।`,
          String.raw`যাচাই: $x=2$ হলে $y=2\times 2-4=0$; $x=4$ হলে $y=2\times 4-4=4$ — তিনটি বিন্দুই মিলে যায়।`,
        ],
        answer: String.raw`ঘ) $y=2x-4$`,
      },
    },
    {
      id: 4,
      group: EQ_MCQ,
      question: String.raw`$2x-y=8$ এবং $x-2y=4$ হলে, $x+y=$ কত?
ক) $0$  খ) $4$  গ) $8$  ঘ) $12$`,
      solution: {
        steps: [
          String.raw`$$2x-y=8\qquad\cdots(1)$$`,
          String.raw`$$x-2y=4\qquad\cdots(2)$$`,
          String.raw`$(2)$ এর উভয়পক্ষকে $2$ দ্বারা গুণ করে পাই, $$2x-4y=8\qquad\cdots(3)$$`,
          String.raw`$(1)$ থেকে $(3)$ বিয়োগ করে পাই, $$3y=0$$`,
          String.raw`$$\therefore\; y=0$$`,
          String.raw`$(1)$ এ $y$ এর মান বসিয়ে পাই, $$2x=8,\;\text{ বা, }x=4$$`,
          String.raw`$$\therefore\; x+y=4+0=4$$`,
        ],
        answer: String.raw`খ) $4$`,
      },
    },

    // ─────────────── সহসমীকরণ গঠন করে সমাধান (5 – 16) ───────────────
    {
      id: 5,
      group: EQ_BUILD,
      question: String.raw`কোনো ভগ্নাংশের লব ও হরের প্রত্যেকটির সাথে $1$ যোগ করলে ভগ্নাংশটি $\dfrac{4}{5}$ হবে। আবার, লব ও হরের প্রত্যেকটি থেকে $5$ বিয়োগ করলে ভগ্নাংশটি $\dfrac{1}{2}$ হবে। ভগ্নাংশটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ভগ্নাংশটি $\dfrac{x}{y}$, যেখানে লব $x$ ও হর $y$।`,
          String.raw`$$\text{১ম শর্তানুসারে, }\frac{x+1}{y+1}=\frac{4}{5}$$`,
          String.raw`$$\text{বা, }5(x+1)=4(y+1)\qquad\left[\,\text{আড়গুণন করে}\,\right]$$`,
          String.raw`$$\text{বা, }5x+5=4y+4$$`,
          String.raw`$$\text{বা, }5x-4y=-1\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }\frac{x-5}{y-5}=\frac{1}{2}$$`,
          String.raw`$$\text{বা, }2(x-5)=y-5$$`,
          String.raw`$$\text{বা, }2x-y=5\qquad\cdots(2)$$`,
          String.raw`$(2)$ হতে পাই, $$y=2x-5\qquad\cdots(3)$$`,
          String.raw`$(1)$ এ $y$ এর মান বসিয়ে পাই,`,
          String.raw`$$5x-4(2x-5)=-1$$`,
          String.raw`$$\text{বা, }5x-8x+20=-1$$`,
          String.raw`$$\text{বা, }-3x=-21$$`,
          String.raw`$$\therefore\; x=7$$`,
          String.raw`$(3)$ হতে পাই, $$y=2\times 7-5=9$$`,
          String.raw`$$\therefore\;\text{ভগ্নাংশটি}=\frac{7}{9}$$`,
        ],
        answer: String.raw`ভগ্নাংশটি $\dfrac{7}{9}$`,
      },
    },
    {
      id: 6,
      group: EQ_BUILD,
      question: String.raw`কোনো ভগ্নাংশের লব থেকে $1$ বিয়োগ ও হরের সাথে $2$ যোগ করলে ভগ্নাংশটি $\dfrac{1}{2}$ হয়। আর লব থেকে $7$ বিয়োগ এবং হর থেকে $2$ বিয়োগ করলে ভগ্নাংশটি $\dfrac{1}{3}$ হয়। ভগ্নাংশটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ভগ্নাংশটি $\dfrac{x}{y}$।`,
          String.raw`$$\text{১ম শর্তানুসারে, }\frac{x-1}{y+2}=\frac{1}{2}$$`,
          String.raw`$$\text{বা, }2(x-1)=y+2$$`,
          String.raw`$$\text{বা, }2x-y=4\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }\frac{x-7}{y-2}=\frac{1}{3}$$`,
          String.raw`$$\text{বা, }3(x-7)=y-2$$`,
          String.raw`$$\text{বা, }3x-y=19\qquad\cdots(2)$$`,
          String.raw`$(2)$ থেকে $(1)$ বিয়োগ করে পাই, $$x=15$$`,
          String.raw`$(1)$ এ $x$ এর মান বসিয়ে পাই, $$2\times 15-y=4$$`,
          String.raw`$$\text{বা, }-y=4-30$$`,
          String.raw`$$\therefore\; y=26$$`,
          String.raw`$$\therefore\;\text{ভগ্নাংশটি}=\frac{15}{26}$$`,
        ],
        answer: String.raw`ভগ্নাংশটি $\dfrac{15}{26}$`,
      },
    },
    {
      id: 7,
      group: EQ_BUILD,
      question: String.raw`দুই অঙ্কবিশিষ্ট একটি সংখ্যার একক স্থানীয় অঙ্ক দশক স্থানীয় অঙ্কের তিনগুণ অপেক্ষা $1$ বেশি। কিন্তু অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যায়, তা অঙ্কদ্বয়ের সমষ্টির আটগুণের সমান। সংখ্যাটি কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, সংখ্যাটির দশক স্থানীয় অঙ্ক $x$ ও একক স্থানীয় অঙ্ক $y$। অতএব সংখ্যাটি $10x+y$ এবং স্থান বিনিময়ে প্রাপ্ত সংখ্যাটি $10y+x$।`,
          String.raw`$$\text{১ম শর্তানুসারে, }y=3x+1$$`,
          String.raw`$$\text{বা, }3x-y=-1\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }10y+x=8(x+y)$$`,
          String.raw`$$\text{বা, }10y+x=8x+8y$$`,
          String.raw`$$\text{বা, }7x-2y=0\qquad\cdots(2)$$`,
          String.raw`$(1)$ এর উভয়পক্ষকে $2$ দ্বারা গুণ করে পাই, $$6x-2y=-2\qquad\cdots(3)$$`,
          String.raw`$(2)$ থেকে $(3)$ বিয়োগ করে পাই, $$x=2$$`,
          String.raw`$(1)$ এ $x$ এর মান বসিয়ে পাই, $$3\times 2-y=-1$$`,
          String.raw`$$\therefore\; y=7$$`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10\times 2+7=27$$`,
          String.raw`যাচাই: স্থান বিনিময়ে সংখ্যাটি $72$, আর অঙ্কদ্বয়ের সমষ্টির আটগুণ $8(2+7)=72$।`,
        ],
        answer: String.raw`সংখ্যাটি $27$`,
      },
    },
    {
      id: 8,
      group: EQ_BUILD,
      question: String.raw`দুই অঙ্কবিশিষ্ট একটি সংখ্যার অঙ্কদ্বয়ের অন্তর $4$। সংখ্যাটির অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যায়, তার ও মূল সংখ্যাটির যোগফল $110$। সংখ্যাটি নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, সংখ্যাটির দশক স্থানীয় অঙ্ক $x$ ও একক স্থানীয় অঙ্ক $y$। অতএব সংখ্যাটি $10x+y$ এবং স্থান বিনিময়ে প্রাপ্ত সংখ্যাটি $10y+x$।`,
          String.raw`$$\text{২য় শর্তানুসারে, }(10x+y)+(10y+x)=110$$`,
          String.raw`$$\text{বা, }11x+11y=110$$`,
          String.raw`$$\text{বা, }x+y=10\qquad\cdots(1)$$`,
          String.raw`$$\text{১ম শর্তানুসারে, }x-y=\pm 4$$`,
          String.raw`প্রথমে ধরি, $$x-y=4\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=14,\;\text{ বা, }x=7$$`,
          String.raw`$(1)$ হতে পাই, $$y=10-7=3$$`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10\times 7+3=73$$`,
          String.raw`আবার ধরি, $$y-x=4\qquad\cdots(3)$$`,
          String.raw`$(1)$ ও $(3)$ যোগ করে পাই, $$2y=14,\;\text{ বা, }y=7$$ এবং $x=3$।`,
          String.raw`$$\therefore\;\text{সংখ্যাটি}=10\times 3+7=37$$`,
          String.raw`দুইটি সংখ্যাই শর্ত দুইটি সিদ্ধ করে — $73+37=110$ এবং অঙ্কদ্বয়ের অন্তর $4$।`,
        ],
        answer: String.raw`সংখ্যাটি $73$ অথবা $37$`,
      },
    },
    {
      id: 9,
      group: EQ_BUILD,
      question: String.raw`মাতার বর্তমান বয়স তার দুই কন্যার বয়সের সমষ্টির চারগুণ। $5$ বছর পর মাতার বয়স ঐ দুই কন্যার বয়সের সমষ্টির দ্বিগুণ হবে। মাতার বর্তমান বয়স কত?`,
      solution: {
        steps: [
          String.raw`মনে করি, মাতার বর্তমান বয়স $x$ বছর এবং দুই কন্যার বয়সের সমষ্টি $y$ বছর।`,
          String.raw`$$\text{১ম শর্তানুসারে, }x=4y\qquad\cdots(1)$$`,
          String.raw`$5$ বছর পর মাতার বয়স হবে $(x+5)$ বছর, আর দুই কন্যার প্রত্যেকেরই বয়স $5$ বছর করে বাড়বে বলে তাদের বয়সের সমষ্টি হবে $(y+10)$ বছর।`,
          String.raw`$$\text{২য় শর্তানুসারে, }x+5=2(y+10)\qquad\cdots(2)$$`,
          String.raw`$(2)$ এ $x$ এর মান বসিয়ে পাই,`,
          String.raw`$$4y+5=2y+20$$`,
          String.raw`$$\text{বা, }2y=15$$`,
          String.raw`$$\therefore\; y=\frac{15}{2}=7.5$$`,
          String.raw`$(1)$ হতে পাই, $$x=4\times 7.5=30$$`,
          String.raw`যাচাই: $5$ বছর পর মাতার বয়স $35$ বছর, আর কন্যাদ্বয়ের বয়সের সমষ্টি $7.5+10=17.5$ বছর; $2\times 17.5=35$।`,
          String.raw`$\therefore$ মাতার বর্তমান বয়স $30$ বছর।`,
        ],
        answer: String.raw`মাতার বর্তমান বয়স $30$ বছর`,
      },
    },
    {
      id: 10,
      group: EQ_BUILD,
      question: String.raw`একটি আয়তক্ষেত্রের দৈর্ঘ্য $5$ মিটার কম ও প্রস্থ $3$ মিটার বেশি হলে ক্ষেত্রফল $9$ বর্গমিটার কম হবে। আবার দৈর্ঘ্য $3$ মিটার বেশি ও প্রস্থ $2$ মিটার বেশি হলে ক্ষেত্রফল $67$ বর্গমিটার বেশি হবে। ক্ষেত্রটির দৈর্ঘ্য ও প্রস্থ নির্ণয় করো।`,
      figure: "124-p10",
      solution: {
        steps: [
          String.raw`মনে করি, আয়তক্ষেত্রটির দৈর্ঘ্য $x$ মিটার ও প্রস্থ $y$ মিটার। অতএব ক্ষেত্রফল $xy$ বর্গমিটার।`,
          String.raw`$$\text{১ম শর্তানুসারে, }(x-5)(y+3)=xy-9$$`,
          String.raw`$$\text{বা, }xy+3x-5y-15=xy-9$$`,
          String.raw`$$\text{বা, }3x-5y=6\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }(x+3)(y+2)=xy+67$$`,
          String.raw`$$\text{বা, }xy+2x+3y+6=xy+67$$`,
          String.raw`$$\text{বা, }2x+3y=61\qquad\cdots(2)$$`,
          String.raw`$(1)$ কে $3$ দ্বারা ও $(2)$ কে $5$ দ্বারা গুণ করে পাই,`,
          String.raw`$$9x-15y=18\qquad\cdots(3)$$`,
          String.raw`$$10x+15y=305\qquad\cdots(4)$$`,
          String.raw`$(3)$ ও $(4)$ যোগ করে পাই, $$19x=323$$`,
          String.raw`$$\therefore\; x=17$$`,
          String.raw`$(2)$ এ $x$ এর মান বসিয়ে পাই, $$34+3y=61$$`,
          String.raw`$$\text{বা, }3y=27$$`,
          String.raw`$$\therefore\; y=9$$`,
          String.raw`যাচাই: $(17-5)(9+3)=144=153-9$ এবং $(17+3)(9+2)=220=153+67$।`,
        ],
        answer: String.raw`দৈর্ঘ্য $17$ মিটার, প্রস্থ $9$ মিটার`,
      },
    },
    {
      id: 11,
      group: EQ_BUILD,
      question: String.raw`একজন গার্মেন্টস শ্রমিক মাসিক বেতনে চাকরি করেন। প্রতিবছর শেষে একটি নির্দিষ্ট বেতনবৃদ্ধি পান। তার মাসিক বেতন $4$ বছর পর $4500$ টাকা ও $8$ বছর পর $5000$ টাকা হয়। তার চাকরি শুরুর বেতন ও বার্ষিক বেতন বৃদ্ধির পরিমাণ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, চাকরি শুরুর মাসিক বেতন $x$ টাকা ও বার্ষিক বেতন বৃদ্ধি $y$ টাকা।`,
          String.raw`$$\text{১ম শর্তানুসারে, }x+4y=4500\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }x+8y=5000\qquad\cdots(2)$$`,
          String.raw`$(2)$ থেকে $(1)$ বিয়োগ করে পাই, $$4y=500$$`,
          String.raw`$$\therefore\; y=125$$`,
          String.raw`$(1)$ এ $y$ এর মান বসিয়ে পাই, $$x+4\times 125=4500$$`,
          String.raw`$$\text{বা, }x=4500-500$$`,
          String.raw`$$\therefore\; x=4000$$`,
          String.raw`$\therefore$ চাকরি শুরুর বেতন $4000$ টাকা ও বার্ষিক বেতন বৃদ্ধি $125$ টাকা।`,
        ],
        answer: String.raw`শুরুর বেতন $4000$ টাকা, বার্ষিক বৃদ্ধি $125$ টাকা`,
      },
    },
    {
      id: 12,
      group: EQ_BUILD,
      question: String.raw`কোনো ভগ্নাংশের লবের সাথে $7$ যোগ করলে ভগ্নাংশটির মান পূর্ণসংখ্যা $2$ হয়। আবার হর হতে $2$ বিয়োগ করলে ভগ্নাংশটির মান পূর্ণসংখ্যা $1$ হয়।`,
      figure: "124-p12",
      parts: [
        {
          label: "ক",
          question: String.raw`ভগ্নাংশটি $\dfrac{x}{y}$ ধরে সমীকরণজোট গঠন করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, ভগ্নাংশটি $\dfrac{x}{y}$, যেখানে লব $x$ ও হর $y$।`,
              String.raw`$$\text{১ম শর্তানুসারে, }\frac{x+7}{y}=2$$`,
              String.raw`$$\text{বা, }x+7=2y$$`,
              String.raw`$$\text{বা, }x-2y+7=0\qquad\cdots(1)$$`,
              String.raw`$$\text{২য় শর্তানুসারে, }\frac{x}{y-2}=1$$`,
              String.raw`$$\text{বা, }x=y-2$$`,
              String.raw`$$\text{বা, }x-y+2=0\qquad\cdots(2)$$`,
            ],
            answer: String.raw`$x-2y+7=0$ এবং $x-y+2=0$`,
          },
        },
        {
          label: "খ",
          question: String.raw`সমীকরণজোটটি আড়গুণন পদ্ধতিতে সমাধান করে $(x,y)$ নির্ণয় করো। ভগ্নাংশটি কত?`,
          solution: {
            steps: [
              String.raw`তুলনা করে পাই,`,
              String.raw`$$a_{1}=1,\;b_{1}=-2,\;c_{1}=7;\qquad a_{2}=1,\;b_{2}=-1,\;c_{2}=2$$`,
              String.raw`আড়গুণন পদ্ধতিতে পাই,`,
              String.raw`$$\frac{x}{(-2)\times 2-(-1)\times 7}=\frac{y}{7\times 1-2\times 1}=\frac{1}{1\times(-1)-1\times(-2)}$$`,
              String.raw`$$\text{বা, }\frac{x}{-4+7}=\frac{y}{7-2}=\frac{1}{-1+2}$$`,
              String.raw`$$\text{বা, }\frac{x}{3}=\frac{y}{5}=\frac{1}{1}$$`,
              String.raw`সুতরাং $x=3$ এবং $y=5$।`,
              String.raw`$$\therefore\;\text{ভগ্নাংশটি}=\frac{3}{5}$$`,
              String.raw`যাচাই: $\dfrac{3+7}{5}=2$ এবং $\dfrac{3}{5-2}=1$।`,
            ],
            answer: String.raw`$(x,y)=(3,5)$; ভগ্নাংশটি $\dfrac{3}{5}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`সমীকরণজোটটির লেখ অঙ্কন করে $(x,y)$ এর প্রাপ্ত মানের সত্যতা যাচাই করো।`,
          solution: {
            steps: [
              String.raw`সমীকরণ $(1)$ থেকে পাই, $$2y=x+7,\;\text{ বা, }y=\frac{x+7}{2}$$`,
              String.raw`[[table side]]
$x$ | $-1$ | $3$ | $5$
$y$ | $3$ | $5$ | $6$`,
              String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(-1,3),\;(3,5),\;(5,6)$।`,
              String.raw`আবার, সমীকরণ $(2)$ থেকে পাই, $$y=x+2$$`,
              String.raw`[[table side]]
$x$ | $0$ | $3$ | $4$
$y$ | $2$ | $5$ | $6$`,
              String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,2),\;(3,5),\;(4,6)$।`,
              String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
              String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(3,5)$ — যা আড়গুণনে পাওয়া মানের সাথে মিলে যায়।`,
              String.raw`$$\therefore\;(x,y)=(3,5)$$`,
            ],
            answer: String.raw`লেখের ছেদবিন্দু $(3,5)$ — প্রাপ্ত মান সঠিক`,
          },
        },
      ],
    },
    {
      id: 13,
      group: EQ_BUILD,
      question: String.raw`শিক্ষক বললেন একটি কাজ একা অথবা ছাত্র-ছাত্রীর জুটি করতে পারবে। ছাত্রদের $\dfrac{2}{3}$ এবং ছাত্রীদের $\dfrac{3}{5}$ অংশ জুটি বেঁধে কাজটি করলো। শ্রেণির কত ভাগ ছাত্র-ছাত্রী একা কাজটি করলো?`,
      solution: {
        steps: [
          String.raw`মনে করি, শ্রেণিতে ছাত্র সংখ্যা $x$ ও ছাত্রী সংখ্যা $y$।`,
          String.raw`প্রতিটি জুটিতে একজন ছাত্র ও একজন ছাত্রী, তাই জুটি বাঁধা ছাত্র ও ছাত্রীর সংখ্যা সমান।`,
          String.raw`$$\text{শর্তানুসারে, }\frac{2}{3}x=\frac{3}{5}y$$`,
          String.raw`$$\text{বা, }10x=9y\qquad\left[\,\text{উভয়পক্ষকে }15\ \text{দ্বারা গুণ করে}\,\right]$$`,
          String.raw`$$\therefore\; y=\frac{10x}{9}\qquad\cdots(1)$$`,
          String.raw`একা কাজ করা ছাত্র সংখ্যা $$=x-\frac{2}{3}x=\frac{x}{3}$$`,
          String.raw`একা কাজ করা ছাত্রী সংখ্যা $$=y-\frac{3}{5}y=\frac{2y}{5}$$`,
          String.raw`$$\therefore\;\text{একা কাজ করা মোট সংখ্যা}=\frac{x}{3}+\frac{2y}{5}=\frac{x}{3}+\frac{2}{5}\cdot\frac{10x}{9}=\frac{x}{3}+\frac{4x}{9}=\frac{7x}{9}$$`,
          String.raw`$$\text{আবার, শ্রেণির মোট শিক্ষার্থী}=x+y=x+\frac{10x}{9}=\frac{19x}{9}$$`,
          String.raw`$$\therefore\;\text{নির্ণেয় ভাগ}=\frac{\frac{7x}{9}}{\frac{19x}{9}}=\frac{7}{19}$$`,
        ],
        answer: String.raw`শ্রেণির $\dfrac{7}{19}$ অংশ`,
      },
    },
    {
      id: 14,
      group: EQ_BUILD,
      question: String.raw`$100$ ও $200$ মিটার দীর্ঘ দুইটি ট্রেন সমবেগে সামনাসামনি অতিক্রম করতে $5$ সেকেন্ড সময় লাগে, কিন্তু একই দিকে চললে অতিক্রম করতে $15$ সেকেন্ড সময় লাগে। ট্রেন দুইটির বেগ নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, ট্রেন দুইটির বেগ যথাক্রমে $x$ মি./সে. ও $y$ মি./সে., যেখানে $x>y$।`,
          String.raw`পরস্পরকে অতিক্রম করতে ট্রেন দুইটিকে মোট $(100+200)=300$ মিটার পথ পাড়ি দিতে হয়।`,
          String.raw`সামনাসামনি চললে আপেক্ষিক বেগ $(x+y)$ মি./সে.।`,
          String.raw`$$\text{১ম শর্তানুসারে, }\frac{300}{x+y}=5$$`,
          String.raw`$$\text{বা, }x+y=60\qquad\cdots(1)$$`,
          String.raw`একই দিকে চললে আপেক্ষিক বেগ $(x-y)$ মি./সে.।`,
          String.raw`$$\text{২য় শর্তানুসারে, }\frac{300}{x-y}=15$$`,
          String.raw`$$\text{বা, }x-y=20\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=80$$`,
          String.raw`$$\therefore\; x=40$$`,
          String.raw`$(1)$ হতে পাই, $$y=60-40=20$$`,
          String.raw`$$\text{ঘণ্টায় প্রকাশ করলে, }40\ \text{মি./সে.}=\frac{40\times 3600}{1000}\ \text{কি.মি./ঘণ্টা}=144\ \text{কি.মি./ঘণ্টা}$$`,
          String.raw`$$\text{এবং }20\ \text{মি./সে.}=72\ \text{কি.মি./ঘণ্টা}$$`,
        ],
        answer: String.raw`বেগ দুইটি $40$ মি./সে. ও $20$ মি./সে., অর্থাৎ $144$ ও $72$ কি.মি./ঘণ্টা`,
      },
    },
    {
      id: 15,
      group: EQ_BUILD,
      question: String.raw`কমপক্ষে কতগুলো ক্রমিক পূর্ণসংখ্যা নিলে তার গুণফল অবশ্যই $5040$ দ্বারা বিভাজ্য হবে?`,
      solution: {
        steps: [
          String.raw`প্রথমে $5040$ কে উৎপাদকে বিশ্লেষণ করি।`,
          String.raw`$$5040=7\times 6\times 5\times 4\times 3\times 2\times 1=7!$$`,
          String.raw`আমরা জানি, $k$ সংখ্যক ক্রমিক পূর্ণসংখ্যার গুণফল সর্বদা $k!$ দ্বারা বিভাজ্য — কারণ ঐ গুণফলকে $k!$ দিয়ে ভাগ করলে যে ভাগফল পাওয়া যায়, তা একটি সমাবেশ সংখ্যা, অর্থাৎ পূর্ণসংখ্যা।`,
          String.raw`সুতরাং $7$টি ক্রমিক পূর্ণসংখ্যা নিলে তার গুণফল অবশ্যই $7!=5040$ দ্বারা বিভাজ্য হবে।`,
          String.raw`$6$টি নিলে চলবে না — যেমন $1\times 2\times 3\times 4\times 5\times 6=720$, যা $5040$ দ্বারা বিভাজ্য নয়।`,
        ],
        answer: String.raw`কমপক্ষে $7$টি ক্রমিক পূর্ণসংখ্যা`,
      },
    },
    {
      id: 16,
      group: EQ_BUILD,
      question: String.raw`ঘড়ির ঘণ্টা এবং মিনিটের কাঁটা পরস্পরের সঙ্গে $30$ ডিগ্রি কোণ করে কত বার? সময়গুলো নির্ণয় করো।`,
      solution: {
        steps: [
          String.raw`মনে করি, $x$ টা $y$ মিনিটে কাঁটা দুইটি পরস্পরের সঙ্গে $30^{\circ}$ কোণ করে; এখানে $x=0,1,\dots,11$।`,
          String.raw`ঘড়ির চাকতিতে $60$টি ঘর এবং সম্পূর্ণ কোণ $360^{\circ}$, তাই প্রতি ঘর $6^{\circ}$।`,
          String.raw`$$\therefore\;30^{\circ}=\frac{30}{6}\ \text{ঘর}=5\ \text{ঘর}$$`,
          String.raw`$x$ টার সময় ঘণ্টার কাঁটা $5x$ ঘরে ও মিনিটের কাঁটা $0$ ঘরে ছিল। $y$ মিনিট পরে ঘণ্টার কাঁটা $\left(5x+\dfrac{y}{12}\right)$ ঘরে এবং মিনিটের কাঁটা $y$ ঘরে থাকবে।`,
          String.raw`$$\text{শর্তানুসারে, }y-\left(5x+\frac{y}{12}\right)=\pm 5$$`,
          String.raw`$$\text{বা, }\frac{11}{12}y-5x=\pm 5$$`,
          String.raw`$$\text{বা, }11y=60x\pm 60$$`,
          String.raw`$$\therefore\; y=\frac{60(x+1)}{11}\quad\text{অথবা}\quad y=\frac{60(x-1)}{11}$$`,
          String.raw`$0\leq y<60$ হতে হবে। প্রথম রূপে $x=0,1,\dots,10$ — এই $11$টি মান চলে (মিনিটের কাঁটা ঘণ্টার কাঁটার আগে)।`,
          String.raw`দ্বিতীয় রূপে $x=1,2,\dots,11$ — এই $11$টি মান চলে (মিনিটের কাঁটা ঘণ্টার কাঁটার পিছনে)।`,
          String.raw`$$\therefore\;\text{মোট}=11+11=22\ \text{বার (}12\ \text{ঘণ্টায়)}$$`,
          String.raw`যেমন, $x=1$ ও দ্বিতীয় রূপে $y=0$ — অর্থাৎ ঠিক $1$টায় কাঁটা দুইটির ব্যবধান $5$ ঘর, যা $30^{\circ}$।`,
        ],
        answer: String.raw`$12$ ঘণ্টায় $22$ বার; সময়গুলো $x$ টা $\dfrac{60(x\pm 1)}{11}$ মিনিট`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (17 – 20) ───────────────
    {
      id: 17,
      group: EQ_MODEL_MCQ,
      question: String.raw`$x+y=6$ ও $2x=4$ হলে, $y$ এর মান কত?
ক) $2$  খ) $4$  গ) $6$  ঘ) $8$`,
      solution: {
        steps: [
          String.raw`$$2x=4$$`,
          String.raw`$$\therefore\; x=2$$`,
          String.raw`$x$ এর মান $x+y=6$ এ বসিয়ে পাই, $$2+y=6$$`,
          String.raw`$$\therefore\; y=4$$`,
        ],
        answer: String.raw`খ) $4$`,
      },
    },
    {
      id: 18,
      group: EQ_MODEL_MCQ,
      question: String.raw`$x-y-4=0$ এবং $3x-3y-10=0$ সমীকরণদ্বয় —
$(i)$ পরস্পর নির্ভরশীল।  $(ii)$ পরস্পর সমঞ্জস্য।  $(iii)$ সমাধানযোগ্য নয়।
উপরের তথ্যের ভিত্তিতে নিচের কোনটি সঠিক?
ক) $ii$  খ) $iii$  গ) $i$ ও $iii$  ঘ) $ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{3}$$`,
          String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{-1}{-3}=\frac{1}{3}$$`,
          String.raw`ধ্রুবক পদদ্বয়ের অনুপাত $$\frac{-4}{-10}=\frac{2}{5}$$`,
          String.raw`$$\therefore\;\frac{1}{3}=\frac{-1}{-3}\neq\frac{2}{5}$$`,
          String.raw`সুতরাং সমীকরণজোটটি অসমঞ্জস্য ও পরস্পর অনির্ভরশীল — এর কোনো সমাধান নেই।`,
          String.raw`অতএব $(i)$ ভুল, $(ii)$ ভুল এবং কেবল $(iii)$ সঠিক।`,
        ],
        answer: String.raw`খ) $iii$`,
      },
    },
    {
      id: 19,
      group: EQ_MODEL_MCQ,
      question: String.raw`আয়তাকার একটি ঘরের মেঝের দৈর্ঘ্য, প্রস্থ অপেক্ষা $2$ মিটার বেশি এবং মেঝের পরিসীমা $20$ মিটার। ঘরটির মেঝে মোজাইক করতে প্রতি বর্গমিটারে $900$ টাকা খরচ হয়।
ঘরটির মেঝের দৈর্ঘ্য কত মিটার?
ক) $10$  খ) $8$  গ) $6$  ঘ) $4$`,
      solution: {
        steps: [
          String.raw`মনে করি, মেঝের দৈর্ঘ্য $x$ মিটার ও প্রস্থ $y$ মিটার।`,
          String.raw`$$\text{১ম শর্তানুসারে, }x-y=2\qquad\cdots(1)$$`,
          String.raw`$$\text{২য় শর্তানুসারে, }2(x+y)=20,\;\text{ বা, }x+y=10\qquad\cdots(2)$$`,
          String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=12$$`,
          String.raw`$$\therefore\; x=6$$`,
        ],
        answer: String.raw`গ) $6$`,
      },
    },
    {
      id: 20,
      group: EQ_MODEL_MCQ,
      question: String.raw`(১৯ নং এর তথ্য অনুসারে) ঘরটির মেঝে মোজাইক করতে মোট কত খরচ হবে?
ক) $72000$  খ) $43200$  গ) $28800$  ঘ) $21600$`,
      solution: {
        steps: [
          String.raw`১৯ নং হতে মেঝের দৈর্ঘ্য $x=6$ মিটার। পরিসীমার শর্ত $x+y=10$ হতে পাই,`,
          String.raw`$$y=10-6=4$$`,
          String.raw`$$\therefore\;\text{মেঝের ক্ষেত্রফল}=6\times 4=24\ \text{বর্গমিটার}$$`,
          String.raw`$$\therefore\;\text{খরচ}=(24\times 900)\ \text{টাকা}=21600\ \text{টাকা}$$`,
        ],
        answer: String.raw`ঘ) $21600$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল ও সংক্ষিপ্ত-উত্তর (21 – 22) ───────────────
    {
      id: 21,
      group: EQ_MODEL_CQ,
      question: String.raw`একটি সরল সমীকরণজোট $x+y=10,\;3x-2y=0$।`,
      figure: "124-p21",
      parts: [
        {
          label: "ক",
          question: String.raw`সরল সমীকরণজোট সমঞ্জস্য কিনা তা যাচাই করো।`,
          solution: {
            steps: [
              String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{3}$$`,
              String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{1}{-2}=-\frac{1}{2}$$`,
              String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
              String.raw`সহগের অনুপাত অসমান, তাই ধ্রুবক পদ তুলনা করার প্রয়োজন নেই।`,
              String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র (অনন্য) সমাধান আছে।`,
            ],
            answer: String.raw`সমঞ্জস্য ও পরস্পর অনির্ভরশীল — একটিমাত্র সমাধান`,
          },
        },
        {
          label: "খ",
          question: String.raw`আড়গুণন পদ্ধতিতে সমীকরণজোটটি সমাধান করো।`,
          solution: {
            steps: [
              String.raw`পক্ষান্তর প্রক্রিয়ায় ডানপক্ষ $0$ করে পাই,`,
              String.raw`$$x+y-10=0$$`,
              String.raw`$$3x-2y+0=0$$`,
              String.raw`তুলনা করে পাই,`,
              String.raw`$$a_{1}=1,\;b_{1}=1,\;c_{1}=-10;\qquad a_{2}=3,\;b_{2}=-2,\;c_{2}=0$$`,
              String.raw`আড়গুণন পদ্ধতিতে পাই,`,
              String.raw`$$\frac{x}{1\times 0-(-2)\times(-10)}=\frac{y}{(-10)\times 3-0\times 1}=\frac{1}{1\times(-2)-3\times 1}$$`,
              String.raw`$$\text{বা, }\frac{x}{0-20}=\frac{y}{-30-0}=\frac{1}{-2-3}$$`,
              String.raw`$$\text{বা, }\frac{x}{-20}=\frac{y}{-30}=\frac{1}{-5}$$`,
              String.raw`$$\text{বা, }\frac{x}{20}=\frac{y}{30}=\frac{1}{5}$$`,
              String.raw`সুতরাং $$x=\frac{20}{5}=4,\qquad y=\frac{30}{5}=6$$`,
              String.raw`$$\therefore\;(x,y)=(4,6)$$`,
            ],
            answer: String.raw`$(x,y)=(4,6)$`,
          },
        },
        {
          label: "গ",
          question: String.raw`লেখচিত্রের সাহায্যে সমীকরণজোটটি সমাধান করো।`,
          solution: {
            steps: [
              String.raw`$x+y=10$ থেকে পাই, $$y=10-x$$`,
              String.raw`[[table side]]
$x$ | $2$ | $4$ | $6$
$y$ | $8$ | $6$ | $4$`,
              String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(2,8),\;(4,6),\;(6,4)$।`,
              String.raw`আবার, $3x-2y=0$ থেকে পাই, $$2y=3x,\;\text{ বা, }y=\frac{3x}{2}$$`,
              String.raw`[[table side]]
$x$ | $0$ | $2$ | $4$
$y$ | $0$ | $3$ | $6$`,
              String.raw`$\therefore$ লেখের উপর তিনটি বিন্দু $(0,0),\;(2,3),\;(4,6)$। ধ্রুবক পদ শূন্য বলে এ লেখটি মূলবিন্দু দিয়ে যায়।`,
              String.raw`ছক কাগজে বিন্দুগুলো স্থাপন করে সংযুক্ত করলে দুইটি সরলরেখা পাওয়া যায়; এরা $P$ বিন্দুতে ছেদ করে।`,
              String.raw`চিত্রে দেখা যায়, $P$ বিন্দুর স্থানাঙ্ক $(4,6)$ — যা (খ)-এর উত্তরের সাথে মিলে যায়।`,
              String.raw`$$\therefore\;(x,y)=(4,6)$$`,
            ],
            answer: String.raw`$(x,y)=(4,6)$`,
          },
        },
      ],
    },
    {
      id: 22,
      group: EQ_MODEL_CQ,
      question: String.raw`সংক্ষিপ্ত-উত্তর প্রশ্ন।`,
      parts: [
        {
          label: "ক",
          question: String.raw`একটি নৌকা দাঁড় বেয়ে স্রোতের অনুকূলে ঘণ্টায় $15$ কি.মি. যায় এবং স্রোতের প্রতিকূলে যায় ঘণ্টায় $5$ কি.মি.। নৌকার বেগ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, স্থির পানিতে নৌকার বেগ $x$ কি.মি./ঘণ্টা ও স্রোতের বেগ $y$ কি.মি./ঘণ্টা।`,
              String.raw`স্রোতের অনুকূলে নৌকার বেগ $(x+y)$ এবং প্রতিকূলে $(x-y)$ কি.মি./ঘণ্টা।`,
              String.raw`$$\text{১ম শর্তানুসারে, }x+y=15\qquad\cdots(1)$$`,
              String.raw`$$\text{২য় শর্তানুসারে, }x-y=5\qquad\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=20$$`,
              String.raw`$$\therefore\; x=10$$`,
              String.raw`$(1)$ হতে পাই, $$y=15-10=5$$`,
            ],
            answer: String.raw`নৌকার বেগ $10$ কি.মি./ঘণ্টা (স্রোতের বেগ $5$ কি.মি./ঘণ্টা)`,
          },
        },
        {
          label: "খ",
          question: String.raw`দুইটি বহুভুজের বাহুর সংখ্যা $17$ এবং এদের কর্ণের সংখ্যা $53$ হলে, প্রত্যেক বহুভুজের বাহুর সংখ্যা কত?`,
          solution: {
            steps: [
              String.raw`মনে করি, বহুভুজ দুইটির বাহুর সংখ্যা যথাক্রমে $x$ ও $y$।`,
              String.raw`$$\text{১ম শর্তানুসারে, }x+y=17\qquad\cdots(1)$$`,
              String.raw`আমরা জানি, $n$ বাহুবিশিষ্ট বহুভুজের কর্ণসংখ্যা $$=\frac{n(n-3)}{2}$$`,
              String.raw`$$\text{২য় শর্তানুসারে, }\frac{x(x-3)}{2}+\frac{y(y-3)}{2}=53$$`,
              String.raw`$$\text{বা, }x^{2}-3x+y^{2}-3y=106$$`,
              String.raw`$$\text{বা, }x^{2}+y^{2}-3(x+y)=106$$`,
              String.raw`$$\text{বা, }x^{2}+y^{2}=106+3\times 17=157\qquad\cdots(2)$$`,
              String.raw`$(1)$ হতে পাই, $$(x+y)^{2}=289$$`,
              String.raw`$$\text{বা, }x^{2}+y^{2}+2xy=289$$`,
              String.raw`$$\text{বা, }2xy=289-157=132$$`,
              String.raw`$$\therefore\; xy=66$$`,
              String.raw`$$\therefore\;(x-y)^{2}=(x+y)^{2}-4xy=289-264=25$$`,
              String.raw`$$\text{বা, }x-y=\pm 5$$`,
              String.raw`$x-y=5$ ধরে $(1)$ এর সাথে যোগ করে পাই, $$2x=22,\;\text{ বা, }x=11$$ এবং $y=17-11=6$।`,
              String.raw`যাচাই: $\dfrac{11\times 8}{2}+\dfrac{6\times 3}{2}=44+9=53$।`,
            ],
            answer: String.raw`বাহুর সংখ্যা $11$ ও $6$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\begin{aligned}-x+2y&=1\\ 2x+y&=4\end{aligned}$$ সমীকরণজোট সমঞ্জস কিনা যাচাই করো।`,
          solution: {
            steps: [
              String.raw`প্রদত্ত সমীকরণদ্বয়`,
              String.raw`$$-x+2y=1\qquad\cdots(1)$$`,
              String.raw`$$2x+y=4\qquad\cdots(2)$$`,
              String.raw`$x$ এর সহগদ্বয়ের অনুপাত $$\frac{-1}{2}$$`,
              String.raw`$y$ এর সহগদ্বয়ের অনুপাত $$\frac{2}{1}=2$$`,
              String.raw`$$\therefore\;\frac{a_{1}}{a_{2}}\neq\frac{b_{1}}{b_{2}}$$`,
              String.raw`অতএব, সমীকরণজোটটি সমঞ্জস্য ও পরস্পর অনির্ভরশীল; এর একটিমাত্র সমাধান আছে।`,
              String.raw`$(1)$ হতে পাই $x=2y-1$; $(2)$ এ বসিয়ে পাই $$2(2y-1)+y=4$$`,
              String.raw`$$\text{বা, }5y=6,\;\text{ বা, }y=\frac{6}{5}$$`,
              String.raw`$$\therefore\; x=2\times\frac{6}{5}-1=\frac{7}{5}$$`,
            ],
            answer: String.raw`সমঞ্জস্য; সমাধান $(x,y)=\left(\dfrac{7}{5},\;\dfrac{6}{5}\right)$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`দুইটি সংখ্যার যোগফল ও বিয়োগফল যথাক্রমে $31$ এবং $13$ হলে, বড় সংখ্যাটি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`মনে করি, সংখ্যা দুইটি $x$ ও $y$, যেখানে $x>y$।`,
              String.raw`$$x+y=31\qquad\cdots(1)$$`,
              String.raw`$$x-y=13\qquad\cdots(2)$$`,
              String.raw`$(1)$ ও $(2)$ যোগ করে পাই, $$2x=44$$`,
              String.raw`$$\therefore\; x=22$$`,
              String.raw`$(1)$ হতে পাই, $$y=31-22=9$$`,
            ],
            answer: String.raw`বড় সংখ্যাটি $22$`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ৬ · রেখা, কোণ ও ত্রিভুজ
// ─────────────────────────────────────────────────────────────────────────────
//
// বইয়ের প্রথম যুক্তিমূলক জ্যামিতির অধ্যায়। অনুশীলনী ৬.১ ও ৬.২ পুরোটাই সংজ্ঞা
// ও স্বীকার্য — এখানে "সমাধান" মানে হিসাব নয়, বইয়ের আলোচনাটুকু গুছিয়ে বলা।
// অনুশীলনী ৬.৩ এর প্রায় প্রতিটি প্রশ্নই প্রমাণ, আর প্রতিটি প্রমাণের ভিত্তি
// উপপাদ্য ৪ থেকে ১৫ — তাই সূত্রের তালিকায় উপপাদ্যগুলো বিবৃতিসহ রাখা হয়েছে।
//
// প্রতিটি প্রশ্নের সাথে চিত্র আছে (`figures/scenes6.ts`); জ্যামিতিতে চিত্রই
// বিশেষ নির্বচন, তাই চিত্র ছাড়া প্রমাণের ধাপগুলো পড়া যায় না।

const GEO_DEF = "সংজ্ঞা ও স্বীকার্য (১ – ৮)";
const GEO_ANG = "কোণ সংক্রান্ত সংজ্ঞা (১ – ৪)";
const TRI_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৩)";
const TRI_PROVE = "প্রমাণ (৪ – ১৫)";
const TRI_APPLY = "প্রয়োগ (১৬)";
const TRI_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৭ – ২০)";
const TRI_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল (২১ – ২২)";
const TRI_MODEL_SA = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২৩)";

const exercise61: Exercise = {
  id: "6.1",
  bnId: "অনুশীলনী ৬.১",
  title: "স্থান, তল, রেখা ও বিন্দু",
  bookPages: "১১৮",
  formulas: [
    {
      title: "চারটি প্রাথমিক ধারণা",
      formulas: [
        {
          statement: "স্থান (space) — ত্রিমাত্রিক",
          note: "আমাদের চারপাশে বিস্তৃত সীমাহীন জগৎ। কোনো ঘনবস্তু স্থানের যে অংশ অধিকার করে তা তিন দিকে বিস্তৃত — দৈর্ঘ্য, প্রস্থ ও উচ্চতা।",
        },
        {
          statement: "তল (surface) — দ্বিমাত্রিক",
          note: "ঘনবস্তুর উপরিভাগ। এর কেবল দৈর্ঘ্য ও প্রস্থ আছে, উচ্চতা নাই। বাক্সের পৃষ্ঠ সমতল, গোলকের পৃষ্ঠ বক্রতল।",
        },
        {
          statement: "রেখা (line) — একমাত্রিক",
          note: "দুইটি তলের ছেদে রেখার উৎপত্তি। এর কেবল দৈর্ঘ্য আছে, প্রস্থ ও উচ্চতা নাই। যে রেখার সব বিন্দু একই বরাবরে, তা সরলরেখা।",
        },
        {
          statement: "বিন্দু (point) — শূন্য মাত্রা",
          note: "দুইটি রেখার ছেদে বিন্দুর উৎপত্তি। বিন্দুর দৈর্ঘ্য, প্রস্থ ও উচ্চতা নাই — কেবল অবস্থান আছে।",
        },
      ],
    },
    {
      title: "ইউক্লিডের স্বতঃসিদ্ধ (axioms)",
      formulas: [
        {
          statement: "যে সকল বস্তু একই বস্তুর সমান, সেগুলো পরস্পর সমান।",
        },
        {
          statement: "সমান সমান বস্তুর সাথে সমান বস্তু যোগ করা হলে যোগফল সমান।",
        },
        {
          statement:
            "সমান সমান বস্তু থেকে সমান বস্তু বিয়োগ করা হলে বিয়োগফল সমান।",
        },
        { statement: "যা পরস্পরের সাথে মিলে যায়, তা পরস্পর সমান।" },
        { statement: "পূর্ণ তার অংশের চেয়ে বড়।" },
      ],
    },
    {
      title: "ইউক্লিডের পাঁচটি স্বীকার্য (postulates)",
      formulas: [
        {
          statement: "১. একটি বিন্দু থেকে অন্য একটি বিন্দু পর্যন্ত একটি সরলরেখা আঁকা যায়।",
        },
        { statement: "২. খণ্ডিত রেখাকে যথেচ্ছভাবে বাড়ানো যায়।" },
        { statement: "৩. যেকোনো কেন্দ্র ও যেকোনো ব্যাসার্ধ নিয়ে বৃত্ত আঁকা যায়।" },
        { statement: "৪. সকল সমকোণ পরস্পর সমান।" },
        {
          statement:
            "৫. একটি সরলরেখা দুইটি সরলরেখাকে ছেদ করলে এবং ছেদকের একই পাশের অন্তঃস্থ কোণদ্বয়ের সমষ্টি দুই সমকোণের চেয়ে কম হলে, রেখা দুইটিকে যথেচ্ছভাবে বর্ধিত করলে যেদিকে কোণদ্বয়ের সমষ্টি দুই সমকোণের চেয়ে কম, সেদিকে মিলিত হয়।",
          note: "প্রথম চারটি এত সহজ যে ‘স্পষ্টই সত্য’ বলে প্রতীয়মান হয়; পঞ্চমটি অন্য চারটির চেয়ে জটিল এবং সমান্তরাল সরলরেখার সাথে জড়িত।",
        },
      ],
    },
    {
      title: "আপতন স্বীকার্য (স্বীকার্য ১ – ৫)",
      formulas: [
        {
          statement: "১. জগৎ সকল বিন্দুর সেট এবং সমতল ও সরলরেখা এই সেটের উপসেট।",
        },
        {
          statement:
            "২. দুইটি ভিন্ন বিন্দুর জন্য একটি ও কেবল একটি সরলরেখা আছে, যাতে উভয় বিন্দু অবস্থিত।",
        },
        {
          statement:
            "৩. একই সরলরেখায় অবস্থিত নয় এমন তিনটি ভিন্ন বিন্দুর জন্য একটি ও কেবল একটি সমতল আছে, যাতে বিন্দু তিনটি অবস্থিত।",
        },
        {
          statement:
            "৪. কোনো সমতলের দুইটি ভিন্ন বিন্দু দিয়ে যায় এমন সরলরেখা ঐ সমতলে অবস্থিত।",
        },
        {
          statement:
            "৫. (ক) জগতে একাধিক সমতল বিদ্যমান। (খ) প্রত্যেক সমতলে একাধিক সরলরেখা অবস্থিত। (গ) প্রত্যেক সরলরেখার বিন্দুসমূহ ও বাস্তব সংখ্যাসমূহকে এমনভাবে সম্পর্কিত করা যায় যেন প্রত্যেক বিন্দুর সঙ্গে একটি অনন্য বাস্তব সংখ্যা এবং প্রত্যেক বাস্তব সংখ্যার সঙ্গে একটি অনন্য বিন্দু সংশ্লিষ্ট হয়।",
        },
      ],
    },
    {
      title: "দূরত্ব, রুলার ও রুলার স্থাপন স্বীকার্য (স্বীকার্য ৬ – ৮)",
      formulas: [
        {
          statement: String.raw`স্বীকার্য ৬ (দূরত্ব): $\;PQ=QP$`,
          note: String.raw`(ক) $P$ ও $Q$ বিন্দুযুগল একটি অনন্য বাস্তব সংখ্যা নির্দিষ্ট করে, যাকে $P$ থেকে $Q$ এর দূরত্ব বলা হয়। (খ) $P$ ও $Q$ ভিন্ন হলে $PQ$ ধনাত্মক, অন্যথায় $PQ=0$। (গ) $P$ থেকে $Q$ এর দূরত্ব ও $Q$ থেকে $P$ এর দূরত্ব একই।`,
        },
        {
          statement: String.raw`স্বীকার্য ৭ (রুলার): $\;PQ=|a-b|$`,
          note: String.raw`কোনো সরলরেখায় অবস্থিত বিন্দুসমূহের সেট এবং বাস্তব সংখ্যার সেটের মধ্যে এমনভাবে এক-এক মিল স্থাপন করা যায়, যেন রেখাটির যেকোনো দুইটি বিন্দু $P,Q$ এর জন্য $PQ=|a-b|$ হয়, যেখানে $P$ ও $Q$ এর সঙ্গে যথাক্রমে $a$ ও $b$ সংশ্লিষ্ট।`,
        },
        {
          statement: String.raw`স্বীকার্য ৮ (রুলার স্থাপন): $\;A\to 0,\;B>0$`,
          note: String.raw`যেকোনো সরলরেখা $AB$ কে এমনভাবে সংখ্যারেখায় পরিণত করা যায় যে, $A$ এর স্থানাঙ্ক $0$ এবং $B$ এর স্থানাঙ্ক ধনাত্মক হয়।`,
        },
      ],
    },
    {
      title: "প্রমাণের পদ্ধতি",
      formulas: [
        {
          statement: "আরোহ পদ্ধতি (Mathematical Induction)",
          note: "কতিপয় বিশেষ ক্ষেত্র থেকে সাধারণ সিদ্ধান্তে পৌঁছানো।",
        },
        {
          statement: "অবরোহ পদ্ধতি (Mathematical Deduction)",
          note: "সংজ্ঞা, স্বতঃসিদ্ধ ও স্বীকার্য থেকে ধাপে ধাপে নতুন প্রতিজ্ঞায় পৌঁছানো — জ্যামিতির প্রধান পদ্ধতি।",
        },
        {
          statement: "বিরোধ পদ্ধতি (Proof by contradiction)",
          note: "সিদ্ধান্তটি সত্য না হলে কী হয় তা ধরে নিয়ে বিরোধে পৌঁছানো। উপপাদ্য ৭ ও ১২ এভাবেই প্রমাণ করা হয়েছে।",
        },
        {
          statement:
            "জ্যামিতিক প্রমাণের ধাপ: সাধারণ নির্বচন → চিত্র ও বিশেষ নির্বচন → অঙ্কনের বর্ণনা → যৌক্তিক ধাপ",
          note: "সাধারণ নির্বচন চিত্রনিরপেক্ষ বর্ণনা, বিশেষ নির্বচন চিত্রনির্ভর বর্ণনা। কোনো প্রতিজ্ঞা সরাসরি একটি উপপাদ্যের সিদ্ধান্ত থেকে প্রমাণিত হলে তাকে ঐ উপপাদ্যের অনুসিদ্ধান্ত বলা হয়।",
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      group: GEO_DEF,
      question: "স্থান, তল, রেখা এবং বিন্দুর ধারণা দাও।",
      figure: "61-p1",
      solution: {
        steps: [
          "স্থান: আমাদের চারপাশে বিস্তৃত সীমাহীন জগৎই স্থান (space)। বিভিন্ন বস্তু স্থানের যে অংশ জুড়ে থাকে, সেই অংশটুকুর আকার, আকৃতি ও অবস্থান থেকেই জ্যামিতিক ধ্যান-ধারণার উদ্ভব।",
          "কোনো ঘনবস্তু যে স্থান অধিকার করে তা তিন দিকে বিস্তৃত, আর এ তিন দিকের বিস্তারই বস্তুটির তিনটি মাত্রা — দৈর্ঘ্য, প্রস্থ ও উচ্চতা — নির্দেশ করে। তাই প্রত্যেক ঘনবস্তুই ত্রিমাত্রিক।",
          "তল: ঘনবস্তুর উপরিভাগ তল (surface) নির্দেশ করে; প্রত্যেক ঘনবস্তু এক বা একাধিক তল দ্বারা সীমাবদ্ধ থাকে। তল দ্বিমাত্রিক — এর কেবল দৈর্ঘ্য ও প্রস্থ আছে, কোনো উচ্চতা নাই। একটি বাক্সের দুইটি মাত্রা ঠিক রেখে তৃতীয় মাত্রা ক্রমশ কমিয়ে শূন্যে আনলে বাক্সটির পৃষ্ঠবিশেষ মাত্র অবশিষ্ট থাকে — এভাবেই ঘনবস্তু থেকে তলের ধারণায় আসা যায়। বাক্সের পৃষ্ঠতল সমতল (plane), গোলকের পৃষ্ঠ বক্রতল (curved surface)।",
          "রেখা: দুইটি তল পরস্পরকে ছেদ করলে একটি রেখা (line) উৎপন্ন হয় — যেমন বাক্সের দুইটি পৃষ্ঠতল বাক্সের একধারে একটি রেখায় মিলিত হয়। রেখা একমাত্রিক; এর কেবল দৈর্ঘ্য আছে, প্রস্থ ও উচ্চতা নাই। তলের প্রস্থ ক্রমশ কমিয়ে শূন্যে আনলে ঐ তলের একটি রেখা মাত্র অবশিষ্ট থাকে। যে রেখার উপরিস্থিত বিন্দুগুলো একই বরাবরে থাকে তাকে সরলরেখা, অন্যথায় বক্ররেখা বলা হয়।",
          "বিন্দু: দুইটি রেখা পরস্পর ছেদ করলে বিন্দুর (point) উৎপত্তি হয় — যেমন বাক্সের দুইটি ধার বাক্সের এক কোনায় একটি বিন্দুতে মিলিত হয়। বিন্দুর দৈর্ঘ্য, প্রস্থ ও উচ্চতা নাই, শুধু অবস্থান আছে। একটি রেখার দৈর্ঘ্য ক্রমশ হ্রাস পেলে অবশেষে তা একটি বিন্দুতে পর্যবসিত হয়। তাই বিন্দুকে শূন্য মাত্রার জ্যামিতিক উপাদান বলা হয়।",
          "লক্ষণীয়, এগুলো সংজ্ঞা নয় — বর্ণনা মাত্র; কারণ বর্ণনায় ব্যবহৃত দৈর্ঘ্য, প্রস্থ, উচ্চতা শব্দগুলো নিজেরাই অসংজ্ঞায়িত। আধুনিক জ্যামিতিতে বিন্দু, সরলরেখা ও সমতলকে প্রাথমিক ধারণা হিসেবেই গ্রহণ করা হয়।",
        ],
        answer:
          "স্থান ত্রিমাত্রিক, তল দ্বিমাত্রিক, রেখা একমাত্রিক এবং বিন্দু শূন্য মাত্রার জ্যামিতিক উপাদান।",
      },
    },
    {
      id: 2,
      group: GEO_DEF,
      question: "ইউক্লিডের পাঁচটি স্বীকার্য বর্ণনা করো।",
      figure: "61-p2",
      solution: {
        steps: [
          "আধুনিক জ্যামিতিতে বিন্দু, সরলরেখা ও সমতলকে প্রাথমিক ধারণা হিসেবে গ্রহণ করে এদের কিছু বৈশিষ্ট্যকে স্বীকার করে নেওয়া হয়; এই স্বীকৃত বৈশিষ্ট্যগুলোকেই জ্যামিতিক স্বীকার্য (postulate) বলা হয়। ইউক্লিড প্রদত্ত পাঁচটি স্বীকার্য হলো:",
          "স্বীকার্য ১. একটি বিন্দু থেকে অন্য একটি বিন্দু পর্যন্ত একটি সরলরেখা আঁকা যায়।",
          "স্বীকার্য ২. খণ্ডিত রেখাকে যথেচ্ছভাবে বাড়ানো যায়।",
          "স্বীকার্য ৩. যেকোনো কেন্দ্র ও যেকোনো ব্যাসার্ধ নিয়ে বৃত্ত আঁকা যায়।",
          "স্বীকার্য ৪. সকল সমকোণ পরস্পর সমান।",
          "স্বীকার্য ৫. একটি সরলরেখা দুইটি সরলরেখাকে ছেদ করলে এবং ছেদকের একই পাশের অন্তঃস্থ কোণদ্বয়ের সমষ্টি দুই সমকোণের চেয়ে কম হলে, রেখা দুইটিকে যথেচ্ছভাবে বর্ধিত করলে যেদিকে কোণদ্বয়ের সমষ্টি দুই সমকোণের চেয়ে কম, সেদিকে মিলিত হয়।",
          "মন্তব্য: প্রথম স্বীকার্যে কিছু অসম্পূর্ণতা রয়েছে — দুইটি ভিন্ন বিন্দু দিয়ে যে একটি অনন্য সরলরেখা অঙ্কন করা যায় তা উপেক্ষিত হয়েছে। পঞ্চম স্বীকার্যটি অন্য চারটির চেয়ে জটিল এবং সমান্তরাল সরলরেখার সাথে জড়িত; প্রথম থেকে চতুর্থ স্বীকার্যগুলো এত সহজ যে এগুলো ‘স্পষ্টই সত্য’ বলে প্রতীয়মান হয়, কিন্তু এগুলো প্রমাণ করা যায় না — তাই এগুলোকে ‘প্রমাণবিহীন সত্য’ বা স্বীকার্য বলে মেনে নেওয়া হয়।",
        ],
        answer:
          "উপরের পাঁচটি — সরলরেখা অঙ্কন, রেখা বর্ধন, বৃত্ত অঙ্কন, সকল সমকোণের সমতা এবং সমান্তরাল সম্পর্কিত পঞ্চম স্বীকার্য।",
      },
    },
    {
      id: 3,
      group: GEO_DEF,
      question: "পাঁচটি আপতন স্বীকার্য বর্ণনা করো।",
      figure: "61-p3",
      solution: {
        steps: [
          "বিমূর্ত জ্যামিতিক ধারণা হিসাবে স্থানকে বিন্দুসমূহের সেট ধরা হয় এবং সরলরেখা ও সমতলকে এই সার্বিক সেটের উপসেট বিবেচনা করা হয়। এ প্রসঙ্গে যে স্বীকার্য ১ থেকে স্বীকার্য ৫ গৃহীত হয়, সেগুলোকেই আপতন স্বীকার্য (incidence axiom) বলা হয়।",
          "স্বীকার্য ১. জগৎ (space) সকল বিন্দুর সেট এবং সমতল ও সরলরেখা এই সেটের উপসেট।",
          "স্বীকার্য ২. দুইটি ভিন্ন বিন্দুর জন্য একটি ও কেবল একটি সরলরেখা আছে, যাতে উভয় বিন্দু অবস্থিত।",
          "স্বীকার্য ৩. একই সরলরেখায় অবস্থিত নয় এমন তিনটি ভিন্ন বিন্দুর জন্য একটি ও কেবল একটি সমতল আছে, যাতে বিন্দু তিনটি অবস্থিত।",
          "স্বীকার্য ৪. কোনো সমতলের দুইটি ভিন্ন বিন্দু দিয়ে যায় এমন সরলরেখা ঐ সমতলে অবস্থিত।",
          "স্বীকার্য ৫. (ক) জগতে একাধিক সমতল বিদ্যমান। (খ) প্রত্যেক সমতলে একাধিক সরলরেখা অবস্থিত। (গ) প্রত্যেক সরলরেখার বিন্দুসমূহ এবং বাস্তব সংখ্যাসমূহকে এমনভাবে সম্পর্কিত করা যায় যেন রেখাটির প্রত্যেক বিন্দুর সঙ্গে একটি অনন্য বাস্তব সংখ্যা এবং প্রত্যেক বাস্তব সংখ্যার সঙ্গে রেখাটির একটি অনন্য বিন্দু সংশ্লিষ্ট হয়।",
          "স্বীকার্য ২ অনুযায়ী দুইটি ভিন্ন বিন্দু $A$ ও $B$ একটি অনন্য সরলরেখা নির্দিষ্ট করে; একে $AB$ রেখা বা $BA$ রেখা বলা হয়। আর স্বীকার্য ৫ (গ) অনুযায়ী এরূপ প্রত্যেক সরলরেখা অসংখ্য বিন্দু ধারণ করে।",
        ],
        answer: "উপরের স্বীকার্য ১ থেকে স্বীকার্য ৫ — এগুলোই আপতন স্বীকার্য।",
      },
    },
    {
      id: 4,
      group: GEO_DEF,
      question: "দূরত্ব স্বীকার্যটি বর্ণনা করো।",
      figure: "61-p4",
      solution: {
        steps: [
          "জ্যামিতিতে দূরত্বের ধারণাও একটি প্রাথমিক ধারণা। এ জন্য স্বীকার করে নেওয়া হয় যে —",
          String.raw`স্বীকার্য ৬ (ক) $P$ ও $Q$ বিন্দুযুগল একটি অনন্য বাস্তব সংখ্যা নির্দিষ্ট করে থাকে। সংখ্যাটিকে $P$ বিন্দু থেকে $Q$ বিন্দুর দূরত্ব বলা হয় এবং $PQ$ দ্বারা সূচিত করা হয়।`,
          String.raw`স্বীকার্য ৬ (খ) $P$ ও $Q$ ভিন্ন বিন্দু হলে $PQ$ সংখ্যাটি ধনাত্মক। অন্যথায়, $PQ=0$।`,
          String.raw`স্বীকার্য ৬ (গ) $P$ থেকে $Q$ এর দূরত্ব এবং $Q$ থেকে $P$ এর দূরত্ব একই। অর্থাৎ $PQ=QP$।`,
          String.raw`$PQ=QP$ হওয়াতে এই দূরত্বকে সাধারণত $P$ বিন্দু ও $Q$ বিন্দুর মধ্যবর্তী দূরত্ব বলা হয়। ব্যবহারিকভাবে এই দূরত্ব পূর্ব নির্ধারিত এককের সাহায্যে পরিমাপ করা হয়।`,
          "এই স্বীকার্য ৬ কেই দূরত্ব স্বীকার্য বলা হয়।",
        ],
        answer:
          "স্বীকার্য ৬ — বিন্দুযুগল একটি অনন্য অঋণাত্মক বাস্তব সংখ্যা নির্দিষ্ট করে, বিন্দু দুইটি ভিন্ন হলে তা ধনাত্মক, এবং দূরত্বটি দুই দিক থেকেই একই।",
      },
    },
    {
      id: 5,
      group: GEO_DEF,
      question: "রুলার স্বীকার্যটি বর্ণনা করো।",
      figure: "61-p5",
      solution: {
        steps: [
          "স্বীকার্য ৫ (গ) অনুযায়ী প্রত্যেক সরলরেখায় অবস্থিত বিন্দুসমূহের সেট ও বাস্তব সংখ্যার সেটের মধ্যে এক-এক মিল স্থাপন করা যায়। এ প্রসঙ্গে স্বীকার করে নেওয়া হয় যে —",
          String.raw`স্বীকার্য ৭. কোনো সরলরেখায় অবস্থিত বিন্দুসমূহের সেট এবং বাস্তব সংখ্যার সেটের মধ্যে এমনভাবে এক-এক মিল স্থাপন করা যায়, যেন রেখাটির যেকোনো দুইটি বিন্দু $P,Q$ এর জন্য`,
          String.raw`$$PQ=|a-b|$$`,
          String.raw`হয়, যেখানে মিলকরণের ফলে $P$ ও $Q$ এর সঙ্গে যথাক্রমে $a$ ও $b$ বাস্তব সংখ্যা সংশ্লিষ্ট হয়।`,
          "এই স্বীকার্য ৭ কেই রুলার স্বীকার্য বলা হয়। নামটি এসেছে রুলার বা স্কেল থেকে — স্কেলের প্রতিটি দাগের গায়ে একটি সংখ্যা লেখা থাকে, আর দুইটি দাগের মধ্যবর্তী দূরত্ব সংখ্যা দুইটির বিয়োগফলের পরম মান।",
        ],
        answer:
          String.raw`স্বীকার্য ৭ — রেখার বিন্দুসমূহ ও বাস্তব সংখ্যার মধ্যে এমন এক-এক মিল বসানো যায় যে $PQ=|a-b|$ হয়।`,
      },
    },
    {
      id: 6,
      group: GEO_DEF,
      question: "সংখ্যারেখা বর্ণনা করো।",
      figure: "61-p6",
      solution: {
        steps: [
          "রুলার স্বীকার্যে বর্ণিত মিলকরণ করা হলে রেখাটি একটি সংখ্যারেখায় পরিণত হয়েছে বলা হয়।",
          String.raw`সংখ্যারেখায় $P$ বিন্দুর সঙ্গে $a$ সংখ্যাটি সংশ্লিষ্ট হলে $P$ কে $a$ এর লেখবিন্দু এবং $a$ কে $P$ এর স্থানাঙ্ক বলা হয়।`,
          String.raw`কোনো সরলরেখাকে সংখ্যারেখায় পরিণত করার জন্য প্রথমে রেখাটির একটি বিন্দুর স্থানাঙ্ক $0$ এবং অপর একটি বিন্দুর স্থানাঙ্ক $1$ ধরে নেওয়া হয়। এতে রেখাটিতে একটি একক দূরত্ব এবং একটি ধনাত্মক দিক নির্দিষ্ট হয়।`,
          String.raw`এরপর একক দূরত্বটি বারবার বসিয়ে ধনাত্মক দিকে $2,3,4,\dots$ এবং বিপরীত দিকে $-1,-2,-3,\dots$ সংখ্যাগুলোর লেখবিন্দু পাওয়া যায়; মধ্যবর্তী বিন্দুগুলোর স্থানাঙ্ক ভগ্নাংশ ও অমূলদ সংখ্যা।`,
          String.raw`সংখ্যারেখার যেকোনো দুই বিন্দুর দূরত্ব তাদের স্থানাঙ্কদ্বয়ের বিয়োগফলের পরম মানের সমান — চিত্রে $P$ ও $Q$ এর স্থানাঙ্ক যথাক্রমে $a$ ও $b$ হলে $PQ=|a-b|$।`,
        ],
        answer:
          "যে সরলরেখার প্রতিটি বিন্দুর সাথে একটি অনন্য বাস্তব সংখ্যা এবং প্রতিটি বাস্তব সংখ্যার সাথে একটি অনন্য বিন্দু মিলিয়ে দেওয়া হয়েছে, তাই সংখ্যারেখা।",
      },
    },
    {
      id: 7,
      group: GEO_DEF,
      question: "রুলার স্থাপন স্বীকার্যটি বর্ণনা করো।",
      figure: "61-p7",
      solution: {
        steps: [
          "একটি সরলরেখাকে সংখ্যারেখায় পরিণত করার অসংখ্য উপায় আছে — কোন বিন্দুটিকে শূন্য ধরা হবে এবং কোন দিকটিকে ধনাত্মক ধরা হবে, তা নানাভাবে বাছা যায়। এর মধ্য থেকে একটি সুবিধাজনক বাছাই সব সময় সম্ভব, এ কথাটিই স্বীকার করে নেওয়া হয় —",
          String.raw`স্বীকার্য ৮. যেকোনো সরলরেখা $AB$ কে এমনভাবে সংখ্যারেখায় পরিণত করা যায় যে, $A$ এর স্থানাঙ্ক $0$ এবং $B$ এর স্থানাঙ্ক ধনাত্মক হয়।`,
          "এই স্বীকার্য ৮ কেই রুলার স্থাপন স্বীকার্য বলা হয়। অর্থাৎ রুলারটিকে এমনভাবে বসানো যায় যেন তার শূন্য দাগটি পড়ে $A$ বিন্দুতে এবং $B$ বিন্দু পড়ে ধনাত্মক দিকে।",
          String.raw`এই স্বীকার্যের ফলে যেকোনো রেখাংশ $AB$ এর দৈর্ঘ্য সরাসরি $B$ এর স্থানাঙ্ক দিয়েই পাওয়া যায়, কারণ তখন $AB=|0-b|=b$।`,
        ],
        answer:
          String.raw`স্বীকার্য ৮ — যেকোনো সরলরেখা $AB$ কে এমনভাবে সংখ্যারেখায় পরিণত করা যায় যেন $A$ এর স্থানাঙ্ক $0$ এবং $B$ এর স্থানাঙ্ক ধনাত্মক হয়।`,
      },
    },
    {
      id: 8,
      group: GEO_DEF,
      question: "পরস্পরছেদী সরলরেখা ও সমান্তরাল সরলরেখার সংজ্ঞা দাও।",
      figure: "61-p8",
      solution: {
        steps: [
          "সমতলে দুইটি সরলরেখা পরস্পরকে ছেদ করতে পারে অথবা তারা সমান্তরাল।",
          "পরস্পরছেদী সরলরেখা: সরলরেখাদ্বয় পরস্পরছেদী হয়, যদি উভয় রেখায় অবস্থিত একটি সাধারণ বিন্দু থাকে। লক্ষণীয় যে, দুইটি ভিন্ন সরলরেখার সর্বাধিক একটি সাধারণ বিন্দু থাকতে পারে — কারণ দুইটি ভিন্ন বিন্দু দিয়ে একটি ও কেবল একটি সরলরেখা যায়।",
          "সমান্তরাল সরলরেখা: একই সমতলে অবস্থিত দুইটি সরলরেখার কোনো সাধারণ বিন্দু না থাকলে রেখা দুইটি সমান্তরাল। একই কথা আরও দুইভাবে বলা যায় —",
          "(ক) সরলরেখা দুইটি কখনও পরস্পরকে ছেদ করে না (দুই দিকে অসীম পর্যন্ত বর্ধিত করা হলেও)।",
          "(খ) একটি সরলরেখার প্রতিটি বিন্দু অপরটি থেকে সমান ক্ষুদ্রতম দূরত্বে অবস্থান করে। এই লম্ব-দূরত্বকেই দুইটি সমান্তরাল রেখাদ্বয়ের দূরত্ব বলা হয় — চিত্রে $d$।",
          "(গ) সরলরেখা দুইটিকে অপর একটি সরলরেখা ছেদ করলে উৎপন্ন একান্তর কোণ বা অনুরূপ কোণগুলো সমান হয়।",
          "সংজ্ঞা (গ) ইউক্লিডের পঞ্চম স্বীকার্যের সমতুল্য এবং জ্যামিতিক প্রমাণ ও অঙ্কনের জন্য এ সংজ্ঞাটি অধিকতর উপযোগী। এছাড়া লক্ষ করি, কোনো নির্দিষ্ট সরলরেখার উপর অবস্থিত নয় এরূপ বিন্দুর মধ্য দিয়ে ঐ সরলরেখার সমান্তরাল করে একটি মাত্র সরলরেখা আঁকা যায়।",
        ],
        answer:
          "সাধারণ বিন্দু থাকলে পরস্পরছেদী, না থাকলে সমান্তরাল — আর সমান্তরাল হলে একটির প্রতিটি বিন্দু থেকে অপরটির লম্ব-দূরত্ব সমান।",
      },
    },
  ],
};

const exercise62: Exercise = {
  id: "6.2",
  bnId: "অনুশীলনী ৬.২",
  title: "কোণ",
  bookPages: "১২৩",
  formulas: [
    {
      title: "রেখা, রশ্মি, রেখাংশ",
      formulas: [
        {
          statement: String.raw`$$AC+CB=AB$$`,
          note: String.raw`$AB$ সরলরেখার উপর $C$ বিন্দু থাকলে $C$ কে $A$ ও $B$ এর অন্তর্বর্তী বলা হয়। $A,C,B$ কে সমরেখ বিন্দুও বলা হয়।`,
        },
        {
          statement: String.raw`রেখাংশ $AB$`,
          note: String.raw`$A$ ও $B$ এবং এদের অন্তর্বর্তী সকল বিন্দুর সেট। $A$ ও $B$ এর অন্তর্বর্তী প্রত্যেক বিন্দুকে রেখাংশের অন্তঃস্থ বিন্দু বলা হয়।`,
        },
        {
          statement: String.raw`রশ্মি $CA$ ও রশ্মি $CB$`,
          note: String.raw`$C$ বিন্দু এবং $C$ থেকে $AB$ সরলরেখা বরাবর কোনো একদিকে অসীম পর্যন্ত বিন্দুর সেট। $C$ বিন্দু $AB$ সরলরেখাকে $CA$ ও $CB$ রশ্মিতে বিভক্ত করে।`,
        },
      ],
    },
    {
      title: "কোণ ও তার প্রকারভেদ",
      formulas: [
        {
          statement: String.raw`$$\angle POQ$$`,
          note: String.raw`একই সমতলে দুইটি রশ্মির প্রান্তবিন্দু একই হলে কোণ তৈরি হয়। রশ্মি দুইটি কোণের বাহু এবং সাধারণ বিন্দুটি শীর্ষবিন্দু।`,
        },
        {
          statement: "সরল কোণ = দুই সমকোণ = ১৮০°",
          note: "দুইটি পরস্পর বিপরীত রশ্মি এদের সাধারণ প্রান্তবিন্দুতে যে কোণ উৎপন্ন করে।",
        },
        {
          statement: "সন্নিহিত কোণ",
          note: "দুইটি কোণের শীর্ষবিন্দু এক, এদের একটি সাধারণ রশ্মি আছে এবং কোণদ্বয় সেই সাধারণ রশ্মির বিপরীত পাশে — তবে কোণদ্বয় পরস্পর সন্নিহিত।",
        },
        {
          statement: "সমকোণ = ৯০°",
          note: "একই রেখার উপর অবস্থিত দুইটি সন্নিহিত কোণ পরস্পর সমান হলে প্রত্যেকটি সমকোণ। সমকোণের বাহু দুইটি পরস্পরের উপর লম্ব।",
        },
        {
          statement: "সূক্ষ্মকোণ < ৯০° < স্থূলকোণ < ১৮০° < প্রবৃদ্ধ কোণ < ৩৬০°",
          note: "এক সমকোণ থেকে ছোট কোণ সূক্ষ্মকোণ; এক সমকোণ থেকে বড় কিন্তু দুই সমকোণ থেকে ছোট কোণ স্থূলকোণ; দুই সমকোণ থেকে বড় কিন্তু চার সমকোণ থেকে ছোট কোণ প্রবৃদ্ধ কোণ।",
        },
      ],
    },
    {
      title: "পূরক, সম্পূরক ও বিপ্রতীপ কোণ",
      formulas: [
        {
          statement: String.raw`পূরক: $\;\angle AOC+\angle COB=90^{\circ}$`,
          note: "দুইটি কোণের পরিমাপের যোগফল এক সমকোণ হলে কোণ দুইটির একটি অপরটির পূরক কোণ।",
        },
        {
          statement: String.raw`সম্পূরক: $\;\angle AOC+\angle COB=180^{\circ}$`,
          note: "দুইটি কোণের পরিমাপের যোগফল দুই সমকোণ হলে কোণ দুইটি পরস্পর সম্পূরক কোণ।",
        },
        {
          statement: "বিপ্রতীপ কোণ",
          note: "কোনো কোণের বাহুদ্বয়ের বিপরীত রশ্মিদ্বয় যে কোণ তৈরি করে তা ঐ কোণের বিপ্রতীপ কোণ। দুইটি সরলরেখা কোনো বিন্দুতে পরস্পরকে ছেদ করলে ছেদ বিন্দুতে দুই জোড়া বিপ্রতীপ কোণ উৎপন্ন হয়।",
        },
      ],
    },
    {
      title: "দুইটি উপপাদ্য",
      formulas: [
        {
          statement:
            "উপপাদ্য ১. একটি সরলরেখার একটি বিন্দুতে অপর একটি রশ্মি মিলিত হলে, যে দুইটি সন্নিহিত কোণ উৎপন্ন হয় এদের সমষ্টি দুই সমকোণ।",
          note: String.raw`প্রমাণ: $AB$ রেখার উপর $DO$ লম্ব আঁকলে সন্নিহিত কোণদ্বয়ের সমষ্টি $=\angle AOC+\angle COB=\angle AOD+\angle DOC+\angle COB=\angle AOD+\angle DOB=2$ সমকোণ।`,
        },
        {
          statement:
            "উপপাদ্য ২. দুইটি সরলরেখা পরস্পর ছেদ করলে, উৎপন্ন বিপ্রতীপ কোণগুলো পরস্পর সমান।",
          note: String.raw`$AB$ ও $CD$ রেখাদ্বয় $O$ বিন্দুতে ছেদ করলে $\angle AOC=\angle BOD$ এবং $\angle COB=\angle AOD$।`,
        },
      ],
    },
    {
      title: "ছেদক ও সমান্তরাল সরলরেখা",
      formulas: [
        {
          statement: "অনুরূপ কোণ (corresponding angle)",
          note: String.raw`ছেদক দুইটি সরলরেখার সাথে আটটি কোণ তৈরি করে। চিত্রের $\angle 1$ ও $\angle 5$, $\angle 2$ ও $\angle 6$, $\angle 3$ ও $\angle 7$, $\angle 4$ ও $\angle 8$ পরস্পর অনুরূপ কোণ।`,
        },
        {
          statement: "একান্তর কোণ (alternate angle)",
          note: String.raw`$\angle 3$ ও $\angle 6$, $\angle 4$ ও $\angle 5$ পরস্পর একান্তর কোণ।`,
        },
        {
          statement: "ছেদকের একই পার্শ্বস্থ অন্তঃস্থ কোণ (co-interior angle)",
          note: String.raw`$\angle 4,\angle 6$ ডানপাশের অন্তঃস্থ কোণ এবং $\angle 3,\angle 5$ বামপাশের অন্তঃস্থ কোণ।`,
        },
        {
          statement:
            "সমান্তরাল হলে: অনুরূপ কোণ সমান, একান্তর কোণ সমান, একই পাশের অন্তঃস্থ কোণ সম্পূরক",
          note: "এটিই ইউক্লিডের ৫ম স্বীকার্যের অঙ্কনের সাহায্যে প্রকাশ। অধ্যায়ের বাকি প্রায় সব প্রমাণ এই তিনটি কথার উপরই দাঁড়িয়ে আছে।",
        },
      ],
    },
  ],
  problems: [
    {
      id: 1,
      group: GEO_ANG,
      question: "কোণের অভ্যন্তর ও বহির্ভাগের সংজ্ঞা দাও।",
      figure: "62-p1",
      solution: {
        steps: [
          String.raw`চিত্রে $OP$ ও $OQ$ রশ্মিদ্বয় এদের সাধারণ প্রান্তবিন্দু $O$ তে $\angle POQ$ উৎপন্ন করেছে। $O$ বিন্দুটি $\angle POQ$ এর শীর্ষবিন্দু এবং $OP$ ও $OQ$ এর বাহু।`,
          String.raw`অভ্যন্তর: $OP$ এর যে পার্শ্বে $Q$ আছে সেই পার্শ্বে এবং $OQ$ এর যে পার্শ্বে $P$ আছে সেই পার্শ্বে অবস্থিত সকল বিন্দুর সেটকে $\angle POQ$ এর অভ্যন্তর বলা হয়।`,
          String.raw`চিত্রে $X$ বিন্দুটি একই সাথে $OP$ এর $Q$-পাশে এবং $OQ$ এর $P$-পাশে আছে, তাই $X$ কোণটির অভ্যন্তরে।`,
          String.raw`বহির্ভাগ: কোণটির অভ্যন্তরে অথবা কোনো বাহুতে অবস্থিত নয় এমন সকল বিন্দুর সেটকে এর বহির্ভাগ বলা হয়।`,
          String.raw`চিত্রে $Y$ বিন্দুটি $OQ$ এর $P$-পাশে থাকলেও $OP$ এর $Q$-পাশে নয়, তাই $Y$ কোণটির বহির্ভাগে।`,
          "লক্ষণীয়, কোণের বাহুর উপর অবস্থিত বিন্দুগুলো অভ্যন্তরেও নয়, বহির্ভাগেও নয় — সমতলটি এভাবে তিনটি অংশে ভাগ হয়ে যায়: অভ্যন্তর, বাহুদ্বয় এবং বহির্ভাগ।",
        ],
        answer:
          "দুই বাহুর নির্দিষ্ট দুই পাশে একসাথে থাকা বিন্দুগুলোর সেট অভ্যন্তর; অভ্যন্তরেও নয়, বাহুতেও নয় এমন বিন্দুগুলোর সেট বহির্ভাগ।",
      },
    },
    {
      id: 2,
      group: GEO_ANG,
      question: "একই সরলরেখাস্থ তিনটি ভিন্ন বিন্দু দিয়ে উৎপন্ন কোণগুলোর নামকরণ করো।",
      figure: "62-p2",
      solution: {
        steps: [
          String.raw`মনে করি, $A,\;C,\;B$ একই সরলরেখার তিনটি ভিন্ন বিন্দু, যেখানে $C$ বিন্দুটি $A$ ও $B$ এর অন্তর্বর্তী।`,
          String.raw`বিন্দু তিনটি নিয়ে মোট তিনটি কোণ পাওয়া যায় — শীর্ষবিন্দু যথাক্রমে $C$, $A$ ও $B$।`,
          String.raw`$C$ শীর্ষে: $C$ বিন্দু $AB$ সরলরেখাকে $CA$ ও $CB$ দুইটি রশ্মিতে বিভক্ত করে, আর এই রশ্মিদ্বয় পরস্পর বিপরীত।`,
          String.raw`$$\therefore\;\angle ACB=\text{সরল কোণ}=\text{দুই সমকোণ}=180^{\circ}$$`,
          String.raw`$A$ শীর্ষে: $C$ ও $B$ দুইটিই $A$ এর একই পাশে, তাই $AC$ ও $AB$ একই রশ্মি।`,
          String.raw`$$\therefore\;\angle BAC=\text{শূন্য কোণ}=0^{\circ}$$`,
          String.raw`$B$ শীর্ষে: একইভাবে $BA$ ও $BC$ একই রশ্মি।`,
          String.raw`$$\therefore\;\angle ABC=\text{শূন্য কোণ}=0^{\circ}$$`,
          "অর্থাৎ সমরেখ তিনটি বিন্দু কোনো ত্রিভুজ তৈরি করে না — মধ্যবর্তী বিন্দুতে একটি সরল কোণ এবং প্রান্তের দুই বিন্দুতে দুইটি শূন্য কোণ পাওয়া যায়।",
        ],
        answer:
          String.raw`$\angle ACB$ সরল কোণ ($180^{\circ}$), আর $\angle BAC$ ও $\angle ABC$ দুইটিই শূন্য কোণ ($0^{\circ}$)।`,
      },
    },
    {
      id: 3,
      group: GEO_ANG,
      question: "সন্নিহিত কোণের সংজ্ঞা দাও এবং এর বাহুগুলো চিহ্নিত করো।",
      figure: "62-p3",
      solution: {
        steps: [
          "সংজ্ঞা: যদি সমতলে দুইটি কোণের একই শীর্ষবিন্দু হয় ও এদের একটি সাধারণ রশ্মি থাকে এবং কোণদ্বয় সাধারণ রশ্মির বিপরীত পাশে অবস্থান করে, তবে ঐ কোণদ্বয়কে সন্নিহিত কোণ বলে।",
          String.raw`চিত্রে $A$ বিন্দুটি $\angle BAC$ ও $\angle CAD$ এর শীর্ষবিন্দু।`,
          String.raw`$A$ বিন্দুতে $\angle BAC$ ও $\angle CAD$ উৎপন্নকারী রশ্মিগুলোর মধ্যে $AC$ সাধারণ রশ্মি।`,
          String.raw`কোণ দুইটি সাধারণ রশ্মি $AC$ এর বিপরীত পাশে অবস্থিত — $\angle BAC$ এক পাশে, $\angle CAD$ অন্য পাশে।`,
          String.raw`$$\therefore\;\angle BAC\;\text{ ও }\;\angle CAD\;\text{ পরস্পর সন্নিহিত কোণ।}$$`,
          String.raw`বাহু চিহ্নিতকরণ: $\angle BAC$ এর বাহু দুইটি $AB$ ও $AC$; $\angle CAD$ এর বাহু দুইটি $AC$ ও $AD$।`,
          String.raw`এদের মধ্যে $AC$ সাধারণ বাহু, আর $AB$ ও $AD$ হলো বাকি দুইটি বাহু।`,
        ],
        answer:
          String.raw`$AC$ সাধারণ বাহু, $AB$ ও $AD$ বাকি দুইটি বাহু — তাই $\angle BAC$ ও $\angle CAD$ সন্নিহিত কোণ।`,
      },
    },
    {
      id: 4,
      group: GEO_ANG,
      question:
        "চিত্রসহ সংজ্ঞা দাও: বিপ্রতীপ কোণ, পূরক কোণ, সম্পূরক কোণ, সমকোণ, সূক্ষ্মকোণ এবং স্থূলকোণ।",
      parts: [
        {
          label: "ক",
          question: "বিপ্রতীপ কোণ (Vertical angle)",
          figure: "62-p4a",
          solution: {
            steps: [
              "সংজ্ঞা: কোনো কোণের বাহুদ্বয়ের বিপরীত রশ্মিদ্বয় যে কোণ তৈরি করে, তা ঐ কোণের বিপ্রতীপ কোণ।",
              String.raw`চিত্রে $OA$ ও $OB$ পরস্পর বিপরীত রশ্মি; আবার $OC$ ও $OD$ ও পরস্পর বিপরীত রশ্মি।`,
              String.raw`$\angle AOC$ এর বাহু দুইটি $OA$ ও $OC$; এদের বিপরীত রশ্মি দুইটি যথাক্রমে $OB$ ও $OD$, যারা $\angle BOD$ তৈরি করেছে।`,
              String.raw`$$\therefore\;\angle AOC\;\text{ ও }\;\angle BOD\;\text{ পরস্পর বিপ্রতীপ কোণ।}$$`,
              String.raw`একইভাবে $\angle BOC$ ও $\angle AOD$ একটি অপরটির বিপ্রতীপ কোণ। দুইটি সরলরেখা কোনো বিন্দুতে পরস্পরকে ছেদ করলে ছেদ বিন্দুতে এভাবে দুই জোড়া বিপ্রতীপ কোণ উৎপন্ন হয়।`,
              "উপপাদ্য ২ অনুযায়ী বিপ্রতীপ কোণগুলো পরস্পর সমান।",
            ],
            answer:
              String.raw`$\angle AOC=\angle BOD$ এবং $\angle BOC=\angle AOD$ — দুই জোড়া বিপ্রতীপ কোণ।`,
          },
        },
        {
          label: "খ",
          question: "পূরক কোণ (Complementary angle)",
          figure: "62-p4b",
          solution: {
            steps: [
              "সংজ্ঞা: দুইটি কোণের পরিমাপের যোগফল এক সমকোণ হলে কোণ দুইটির একটি অপরটির পূরক কোণ।",
              String.raw`চিত্রে $\angle AOB$ একটি সমকোণ এবং $OC$ রশ্মি কোণটির বাহুদ্বয়ের অভ্যন্তরে অবস্থিত। এর ফলে $\angle AOC$ এবং $\angle COB$ — এই দুইটি কোণ উৎপন্ন হলো।`,
              String.raw`$$a+b=\angle AOC+\angle COB=\angle AOB=\text{এক সমকোণ}$$`,
              String.raw`$$\therefore\;\angle AOC\;\text{ ও }\;\angle COB\;\text{ পরস্পর পূরক কোণ।}$$`,
              String.raw`যেমন $30^{\circ}$ ও $60^{\circ}$ পরস্পর পূরক, কারণ $30^{\circ}+60^{\circ}=90^{\circ}$।`,
            ],
            answer: String.raw`$\angle AOC+\angle COB=90^{\circ}$`,
          },
        },
        {
          label: "গ",
          question: "সম্পূরক কোণ (Supplementary angle)",
          figure: "62-p4c",
          solution: {
            steps: [
              "সংজ্ঞা: দুইটি কোণের পরিমাপের যোগফল দুই সমকোণ হলে কোণ দুইটি পরস্পর সম্পূরক কোণ।",
              String.raw`চিত্রে $O$ হলো $AB$ সরলরেখার অন্তঃস্থ একটি বিন্দু এবং $OC$ একটি রশ্মি যা $OA$ ও $OB$ রশ্মি থেকে ভিন্ন। এর ফলে $\angle AOC$ এবং $\angle COB$ — এই দুইটি কোণ উৎপন্ন হলো।`,
              String.raw`$$a+b=\angle AOC+\angle COB=\angle AOB$$`,
              String.raw`$AOB$ একটি সরলকোণ, তাই`,
              String.raw`$$\therefore\;\angle AOC+\angle COB=\text{দুই সমকোণ}=180^{\circ}$$`,
              String.raw`$$\therefore\;\angle AOC\;\text{ ও }\;\angle COB\;\text{ পরস্পর সম্পূরক কোণ।}$$`,
              String.raw`যেমন $50^{\circ}$ ও $130^{\circ}$ পরস্পর সম্পূরক। লক্ষণীয়, সম্পূরক কোণদ্বয় এখানে সন্নিহিতও — এটিই উপপাদ্য ১।`,
            ],
            answer: String.raw`$\angle AOC+\angle COB=180^{\circ}$`,
          },
        },
        {
          label: "ঘ",
          question: "সমকোণ (Right angle)",
          figure: "62-p4d",
          solution: {
            steps: [
              "সংজ্ঞা: যদি একই রেখার উপর অবস্থিত দুইটি সন্নিহিত কোণ পরস্পর সমান হয়, তবে কোণ দুইটির প্রত্যেকটি সমকোণ। সমকোণের বাহু দুইটি পরস্পরের উপর লম্ব।",
              String.raw`চিত্রে $BD$ রেখার $A$ বিন্দুতে $AC$ রশ্মি দ্বারা $\angle BAC$ ও $\angle DAC$ দুইটি কোণ উৎপন্ন হয়েছে; $A$ বিন্দু কোণ দুইটির শীর্ষবিন্দু এবং $AC$ সাধারণ বাহু।`,
              String.raw`$$\angle BAC+\angle DAC=\text{দুই সমকোণ}\qquad\left[\,\text{উপপাদ্য }১\,\right]$$`,
              String.raw`$$\text{আবার, }\angle BAC=\angle DAC$$`,
              String.raw`$$\therefore\;2\angle BAC=\text{দুই সমকোণ}$$`,
              String.raw`$$\therefore\;\angle BAC=\angle DAC=\text{এক সমকোণ}=90^{\circ}$$`,
              String.raw`$$\therefore\;AC\perp BD$$`,
            ],
            answer: String.raw`$\angle BAC=\angle DAC=90^{\circ}$, অর্থাৎ $AC\perp BD$`,
          },
        },
        {
          label: "ঙ",
          question: "সূক্ষ্মকোণ (Acute angle)",
          figure: "62-p4e",
          solution: {
            steps: [
              "সংজ্ঞা: এক সমকোণ থেকে ছোট কোণকে সূক্ষ্মকোণ বলা হয়।",
              String.raw`চিত্রে $\angle AOC=40^{\circ}$, যা $90^{\circ}$ থেকে ছোট।`,
              String.raw`$$0^{\circ}<\angle AOC<90^{\circ}$$`,
              String.raw`$$\therefore\;\angle AOC\;\text{ একটি সূক্ষ্মকোণ।}$$`,
              String.raw`যে ত্রিভুজের প্রত্যেকটি কোণ সূক্ষ্মকোণ, তাকে সূক্ষ্মকোণী ত্রিভুজ বলা হয়।`,
            ],
            answer: String.raw`এক সমকোণ থেকে ছোট কোণ; চিত্রে $\angle AOC=40^{\circ}$`,
          },
        },
        {
          label: "চ",
          question: "স্থূলকোণ (Obtuse angle)",
          figure: "62-p4f",
          solution: {
            steps: [
              "সংজ্ঞা: এক সমকোণ থেকে বড় কিন্তু দুই সমকোণ থেকে ছোট কোণকে স্থূলকোণ বলা হয়।",
              String.raw`চিত্রে $\angle AOD=130^{\circ}$, যা $90^{\circ}$ থেকে বড় কিন্তু $180^{\circ}$ থেকে ছোট।`,
              String.raw`$$90^{\circ}<\angle AOD<180^{\circ}$$`,
              String.raw`$$\therefore\;\angle AOD\;\text{ একটি স্থূলকোণ।}$$`,
              String.raw`যে ত্রিভুজের একটি কোণ স্থূলকোণ, তাকে স্থূলকোণী ত্রিভুজ বলা হয়। আর $180^{\circ}$ থেকে বড় কিন্তু $360^{\circ}$ থেকে ছোট কোণ হলে তাকে প্রবৃদ্ধ কোণ বলা হতো।`,
            ],
            answer: String.raw`এক সমকোণ থেকে বড়, দুই সমকোণ থেকে ছোট কোণ; চিত্রে $\angle AOD=130^{\circ}$`,
          },
        },
      ],
    },
  ],
};

const exercise63: Exercise = {
  id: "6.3",
  bnId: "অনুশীলনী ৬.৩",
  title: "ত্রিভুজ",
  bookPages: "১৩২ – ১৩৫",
  formulas: [
    {
      title: "ত্রিভুজের গঠন ও শ্রেণিবিভাগ",
      formulas: [
        {
          statement: "বাহুভেদে: সমবাহু, সমদ্বিবাহু, বিষমবাহু",
          note: "তিনটি বাহু সমান হলে সমবাহু; দুইটি বাহু সমান হলে সমদ্বিবাহু; তিনটি বাহুই অসমান হলে বিষমবাহু ত্রিভুজ।",
        },
        {
          statement: "কোণভেদে: সূক্ষ্মকোণী, স্থূলকোণী, সমকোণী",
          note: "প্রত্যেকটি কোণ সূক্ষ্মকোণ হলে সূক্ষ্মকোণী; একটি কোণ স্থূলকোণ হলে স্থূলকোণী; একটি কোণ সমকোণ হলে সমকোণী ত্রিভুজ।",
        },
        {
          statement: "মধ্যমা ও উচ্চতা",
          note: "যেকোনো শীর্ষবিন্দু হতে বিপরীত বাহুর মধ্যবিন্দু পর্যন্ত অঙ্কিত রেখাংশকে মধ্যমা বলে; আর যেকোনো শীর্ষবিন্দু হতে বিপরীত বাহুর লম্ব-দূরত্বই ত্রিভুজের উচ্চতা।",
        },
        {
          statement: "বহিঃস্থ ও অন্তঃস্থ কোণ",
          note: "একটি বাহু বর্ধিত করলে যে কোণ উৎপন্ন হয় তা একটি বহিঃস্থ কোণ। এই কোণের সন্নিহিত কোণটি ছাড়া অপর দুইটি কোণকে এই বহিঃস্থ কোণের বিপরীত অন্তঃস্থ কোণ বলে।",
        },
      ],
    },
    {
      title: "সর্বসমতা ও তিনটি শর্ত",
      formulas: [
        {
          statement: String.raw`$$\triangle ABC\cong\triangle DEF$$`,
          note: String.raw`একটি ত্রিভুজকে অপরটির উপর স্থাপন করলে সর্বতোভাবে মিলে গেলে ত্রিভুজ দুইটি সর্বসম; তখন $AB=DE$, $AC=DF$, $BC=EF$ এবং $\angle A=\angle D$, $\angle B=\angle E$, $\angle C=\angle F$।`,
        },
        {
          statement: "উপপাদ্য ৫ (বাহু-কোণ-বাহু)",
          note: "দুইটি ত্রিভুজের একটির দুই বাহু যথাক্রমে অপরটির দুই বাহুর সমান এবং বাহু দুইটির অন্তর্ভুক্ত কোণ দুইটি সমান হলে, ত্রিভুজ দুইটি সর্বসম।",
        },
        {
          statement: "উপপাদ্য ৮ (বাহু-বাহু-বাহু)",
          note: "একটি ত্রিভুজের তিন বাহু অপর একটি ত্রিভুজের তিন বাহুর সমান হলে ত্রিভুজ দুইটি সর্বসম।",
        },
        {
          statement: "উপপাদ্য ৯ (কোণ-বাহু-কোণ)",
          note: "একটি ত্রিভুজের দুইটি কোণ ও এদের সংলগ্ন বাহু যথাক্রমে অপর ত্রিভুজের দুইটি কোণ ও তাদের সংলগ্ন বাহুর সমান হলে ত্রিভুজ দুইটি সর্বসম।",
        },
        {
          statement: "উপপাদ্য ১০ (অতিভুজ-বাহু)",
          note: "দুইটি সমকোণী ত্রিভুজের অতিভুজদ্বয় সমান এবং একটির এক বাহু অপরটির অপর এক বাহুর সমান হলে ত্রিভুজদ্বয় সর্বসম।",
        },
      ],
    },
    {
      title: "কোণ ও বাহুর সম্পর্ক",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ৪: $\;\angle A+\angle B+\angle C=180^{\circ}$`,
          note: "ত্রিভুজের তিন কোণের সমষ্টি দুই সমকোণের সমান।",
        },
        {
          statement: "অনুসিদ্ধান্ত ২",
          note: "ত্রিভুজের একটি বাহুকে বর্ধিত করলে যে বহিঃস্থ কোণ উৎপন্ন হয়, তা এর অন্তঃস্থ বিপরীত কোণদ্বয়ের সমষ্টির সমান।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৩",
          note: "ত্রিভুজের একটি বাহুকে বর্ধিত করলে যে বহিঃস্থ কোণ উৎপন্ন হয়, তা এর অন্তঃস্থ বিপরীত কোণ দুইটির প্রত্যেকটি অপেক্ষা বৃহত্তর।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৪",
          note: "সমকোণী ত্রিভুজের সূক্ষ্মকোণদ্বয় পরস্পর পূরক।",
        },
        {
          statement: "উপপাদ্য ৬ ও ৭ (সমদ্বিবাহু)",
          note: "দুইটি বাহু সমান হলে এদের বিপরীত কোণ দুইটিও সমান; আবার দুইটি কোণ সমান হলে এদের বিপরীত বাহু দুইটিও সমান।",
        },
        {
          statement: "উপপাদ্য ১১ ও ১২",
          note: "একটি বাহু অপরটির চেয়ে বৃহত্তর হলে বৃহত্তর বাহুর বিপরীত কোণ ক্ষুদ্রতর বাহুর বিপরীত কোণ অপেক্ষা বৃহত্তর; আবার একটি কোণ অপরটির চেয়ে বৃহত্তর হলে বৃহত্তর কোণের বিপরীত বাহু ক্ষুদ্রতর কোণের বিপরীত বাহু অপেক্ষা বৃহত্তর।",
        },
      ],
    },
    {
      title: "বাহুর অসমতা ও মধ্যবিন্দু",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ১৩: $\;AB+AC>BC$`,
          note: "ত্রিভুজের যেকোনো দুই বাহুর দৈর্ঘ্যের সমষ্টি এর তৃতীয় বাহুর দৈর্ঘ্য অপেক্ষা বৃহত্তর। তিনটি দৈর্ঘ্য দিয়ে ত্রিভুজ আঁকা সম্ভব কি না, এই একটি শর্তই তা ঠিক করে দেয়।",
        },
        {
          statement: String.raw`অনুসিদ্ধান্ত ৫: $\;AB-AC<BC$`,
          note: "ত্রিভুজের যেকোনো দুই বাহুর দৈর্ঘ্যের অন্তর এর তৃতীয় বাহুর দৈর্ঘ্য অপেক্ষা ক্ষুদ্রতর।",
        },
        {
          statement: String.raw`উপপাদ্য ১৪: $\;DE\parallel BC,\;DE=\tfrac{1}{2}BC$`,
          note: String.raw`ত্রিভুজের যেকোনো দুই বাহুর মধ্যবিন্দুর সংযোজক রেখাংশ তৃতীয় বাহুর সমান্তরাল এবং দৈর্ঘ্যে তার অর্ধেক।`,
        },
        {
          statement: String.raw`উপপাদ্য ১৫: $\;AC^{2}=AB^{2}+BC^{2}$`,
          note: "পিথাগোরাসের উপপাদ্য — সমকোণী ত্রিভুজের অতিভুজের ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অপর দুই বাহুর ওপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টির সমান।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book pages ১৩০-১৩১.
    {
      id: 1,
      question: String.raw`$\triangle ABC$ এর $AB=AC$, $BA$ কে $D$ পর্যন্ত এমনভাবে বর্ধিত করা হলো যেন $AD=AC$ হয়। $C,\;D$ যোগ করা হলো। (ক) উদ্দীপকের ভিত্তিতে চিত্র আঁকো। (খ) প্রমাণ করো যে, $BC+CD>2AC$। (গ) প্রমাণ করো যে, $\angle BCD=$ এক সমকোণ।`,
      figure: "63-ex1",
      parts: [
        {
          label: "ক",
          question: "উদ্দীপকের ভিত্তিতে চিত্র আঁকো।",
          solution: {
            steps: [
              String.raw`উপরের চিত্রটিই নির্ণেয় চিত্র — $AB=AC$ বিশিষ্ট $\triangle ABC$ আঁকা হয়েছে, $BA$ কে $D$ পর্যন্ত বাড়িয়ে $AD=AC$ নেওয়া হয়েছে এবং $C,\;D$ যোগ করা হয়েছে।`,
              String.raw`চিত্রে তিনটি দাগ দিয়ে দেখানো হয়েছে $AB=AC=AD$।`,
            ],
            answer: "চিত্র অঙ্কিত হলো",
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $BC+CD>2AC$`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে $AB=AC$ এবং অঙ্কন অনুসারে $AC=AD$।`,
              String.raw`$\triangle BCD$ এ,`,
              String.raw`$$BC+CD>BD\qquad\left[\,\text{ত্রিভুজের যেকোনো দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর}\,\right]$$`,
              String.raw`$$\text{বা, } BC+CD>AB+AD$$`,
              String.raw`$$\text{বা, } BC+CD>AD+AD$$`,
              String.raw`$$\text{বা, } BC+CD>2AD$$`,
              String.raw`$$\therefore\;BC+CD>2AC\qquad\left[\,\because\;AB=AC=AD\,\right]$$`,
            ],
            answer: String.raw`$BC+CD>2AC$ (প্রমাণিত)`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $\angle BCD=$ এক সমকোণ।`,
          solution: {
            steps: [
              String.raw`দেওয়া আছে $AB=AC$, সুতরাং $\angle ABC=\angle ACB$।`,
              String.raw`$$\text{অর্থাৎ }\angle DBC=\angle ACB$$`,
              String.raw`অঙ্কন অনুসারে $AC=AD$, সুতরাং $\angle ADC=\angle ACD$।`,
              String.raw`$$\text{অর্থাৎ }\angle BDC=\angle ACD$$`,
              String.raw`$\triangle BCD$ এ,`,
              String.raw`$$\angle BDC+\angle DBC+\angle BCD=\text{দুই সমকোণ}\qquad\left[\,\text{ত্রিভুজের তিন কোণের সমষ্টি}\,\right]$$`,
              String.raw`$$\text{বা, }\angle ACD+\angle ACB+\angle BCD=\text{দুই সমকোণ}$$`,
              String.raw`$$\text{বা, }\angle BCD+\angle BCD=\text{দুই সমকোণ}\qquad\left[\,\because\;\angle ACD+\angle ACB=\angle BCD\,\right]$$`,
              String.raw`$$\text{বা, } 2\angle BCD=\text{দুই সমকোণ}$$`,
              String.raw`$$\therefore\;\angle BCD=\text{এক সমকোণ}$$`,
            ],
            answer: String.raw`$\angle BCD=$ এক সমকোণ (প্রমাণিত)`,
          },
        },
      ],
    },
    // উদাহরণ ২ — book pages ১৩১-১৩২.
    {
      id: 2,
      question: String.raw`$PQR$ একটি ত্রিভুজ। $PA,\;QB$ ও $RC$ তিনটি মধ্যমা $O$ বিন্দুতে ছেদ করেছে। (ক) প্রদত্ত তথ্যের আলোকে চিত্র আঁকো। (খ) প্রমাণ করো যে, $PQ+PR>QO+RO$। (গ) প্রমাণ করো যে, $PA+QB+RC<PQ+QR+PR$।`,
      figure: "63-ex2",
      parts: [
        {
          label: "ক",
          question: "প্রদত্ত তথ্যের আলোকে চিত্র আঁকো।",
          solution: {
            steps: [
              String.raw`উপরের চিত্রটিই নির্ণেয় চিত্র — $A,\;B,\;C$ যথাক্রমে $QR$, $PR$ ও $PQ$ বাহুর মধ্যবিন্দু, আর $PA$, $QB$ ও $RC$ তিনটি মধ্যমা $O$ বিন্দুতে ছেদ করেছে।`,
            ],
            answer: "চিত্র অঙ্কিত হলো",
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $PQ+PR>QO+RO$`,
          solution: {
            steps: [
              String.raw`প্রমাণ: ত্রিভুজের যেকোনো দুই বাহুর সমষ্টি তার তৃতীয় বাহু অপেক্ষা বৃহত্তর।`,
              String.raw`$\triangle PQB$ এ $PQ+PB>QB$`,
              String.raw`আবার $\triangle BOR$ এ $BR+BO>RO$`,
              String.raw`$$\therefore\;PQ+PB+BR+BO>QB+RO$$`,
              String.raw`$$\text{বা, } PQ+PR+BO>QO+OB+RO\qquad\left[\,\because\;PB+BR=PR,\;QB=QO+OB\,\right]$$`,
              String.raw`$$\therefore\;PQ+PR>QO+RO$$`,
            ],
            answer: String.raw`$PQ+PR>QO+RO$ (প্রমাণিত)`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $PA+QB+RC<PQ+QR+PR$`,
          figure: "63-ex2c",
          solution: {
            steps: [
              String.raw`অঙ্কন: $PA$ কে $D$ পর্যন্ত বর্ধিত করি যেন $PA=AD$ হয়। $Q,\;D$ যোগ করি।`,
              String.raw`প্রমাণ: $\triangle QAD$ এবং $\triangle PAR$ এ`,
              String.raw`$$QA=AR,\qquad AD=PA$$`,
              String.raw`$$\text{এবং অন্তর্ভুক্ত }\angle QAD=\text{অন্তর্ভুক্ত }\angle PAR\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
              String.raw`$$\therefore\;\triangle QAD\cong\triangle PAR\;\text{ এবং }\;QD=PR$$`,
              String.raw`এখন, $\triangle PQD$ এ $PQ+QD>PD$`,
              String.raw`$$\text{বা, } PQ+PR>2PA\qquad\left[\,\because\;A,\;PD\text{ এর মধ্যবিন্দু}\,\right]$$`,
              String.raw`একইভাবে, $PQ+QR>2QB$ এবং $PR+QR>2RC$`,
              String.raw`$$\therefore\;PQ+PR+PQ+QR+PR+QR>2PA+2QB+2RC$$`,
              String.raw`$$\text{বা, } 2PQ+2QR+2PR>2PA+2QB+2RC$$`,
              String.raw`$$\text{বা, } PQ+QR+PR>PA+QB+RC$$`,
              String.raw`$$\therefore\;PA+QB+RC<PQ+QR+PR$$`,
            ],
            answer: String.raw`$PA+QB+RC<PQ+QR+PR$ (প্রমাণিত)`,
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (১ – ৩) ───────────────
    {
      id: 1,
      group: TRI_MCQ,
      question: String.raw`নিচে তিনটি বাহুর দৈর্ঘ্য দেওয়া হলো। কোন ক্ষেত্রে ত্রিভুজ অঙ্কন সম্ভব (সংখ্যাগুলো দৈর্ঘ্যের এককে)?
ক) $5,\,6,\,7$  খ) $5,\,7,\,14$  গ) $3,\,4,\,7$  ঘ) $2,\,4,\,8$`,
      figure: "63-p1",
      solution: {
        steps: [
          String.raw`ত্রিভুজ অঙ্কন সম্ভব হবে তখনই, যখন যেকোনো দুই বাহুর দৈর্ঘ্যের সমষ্টি তৃতীয় বাহুর দৈর্ঘ্য অপেক্ষা বৃহত্তর হয়। সবচেয়ে বড় বাহুটির সাথে বাকি দুইটির সমষ্টি মিলিয়ে দেখলেই যথেষ্ট।`,
          String.raw`$$\text{ক) } 5+6=11>7\qquad\left[\,\text{সম্ভব}\,\right]$$`,
          String.raw`$$\text{খ) } 5+7=12<14\qquad\left[\,\text{সম্ভব নয়}\,\right]$$`,
          String.raw`$$\text{গ) } 3+4=7,\;\text{যা }7\text{ এর সমান, বৃহত্তর নয়}\qquad\left[\,\text{সম্ভব নয়}\,\right]$$`,
          String.raw`$$\text{ঘ) } 2+4=6<8\qquad\left[\,\text{সম্ভব নয়}\,\right]$$`,
          String.raw`গ) এর ক্ষেত্রে বাহু তিনটি একটি সরলরেখায় পড়ে যায় — ত্রিভুজ তৈরি হয় না, তাই সমান হলেও চলবে না।`,
        ],
        answer: String.raw`ক) $5,\,6,\,7$`,
      },
    },
    {
      id: 2,
      group: TRI_MCQ,
      question: String.raw`চিত্রে $\angle RPS$ এর মান কত?
ক) $40^{\circ}$  খ) $70^{\circ}$  গ) $90^{\circ}$  ঘ) $110^{\circ}$`,
      figure: "63-p2",
      solution: {
        steps: [
          String.raw`চিত্রে $QP$ কে $S$ পর্যন্ত বর্ধিত করা হয়েছে, তাই $\angle RPS$ হলো $\triangle PQR$ এর $P$ বিন্দুর বহিঃস্থ কোণ।`,
          String.raw`$$\angle RPS=\angle PQR+\angle PRQ\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
          String.raw`$$=30^{\circ}+40^{\circ}$$`,
          String.raw`$$\therefore\;\angle RPS=70^{\circ}$$`,
          String.raw`যাচাই: $\angle QPR=180^{\circ}-(30^{\circ}+40^{\circ})=110^{\circ}$, আর $\angle QPR$ ও $\angle RPS$ সন্নিহিত কোণ বলে এদের সমষ্টি $180^{\circ}$; তাই $\angle RPS=180^{\circ}-110^{\circ}=70^{\circ}$।`,
        ],
        answer: String.raw`খ) $70^{\circ}$`,
      },
    },
    {
      id: 3,
      group: TRI_MCQ,
      question: String.raw`একটি ত্রিভুজকে অপর একটি ত্রিভুজের উপর স্থাপন করলে যদি ত্রিভুজ দুইটি সর্বতোভাবে মিলে যায় তবে— ($i$) ত্রিভুজ দুইটি সর্বসম ($ii$) ত্রিভুজ দুইটির অনুরূপ বাহু সমান ($iii$) অনুরূপ কোণ সমান। নিচের কোনটি সঠিক?
ক) $i,\,ii$  খ) $i,\,iii$  গ) $ii,\,iii$  ঘ) $i,\,ii$ ও $iii$`,
      figure: "63-p3",
      solution: {
        steps: [
          String.raw`($i$) সর্বসমতার সংজ্ঞাই হলো — একটি ত্রিভুজকে অপর একটি ত্রিভুজের উপর স্থাপন করলে যদি ত্রিভুজ দুইটি সর্বতোভাবে মিলে যায়, তবে ত্রিভুজ দুইটি সর্বসম। সুতরাং ($i$) সঠিক।`,
          String.raw`($ii$) ও ($iii$) সর্বসম ত্রিভুজের অনুরূপ বাহু ও অনুরূপ কোণগুলো সমান — অর্থাৎ $A,\,B,\,C$ শীর্ষ যথাক্রমে $D,\,E,\,F$ শীর্ষের উপর পতিত হলে`,
          String.raw`$$AB=DE,\quad AC=DF,\quad BC=EF$$`,
          String.raw`$$\angle A=\angle D,\quad \angle B=\angle E,\quad \angle C=\angle F$$`,
          String.raw`সুতরাং ($ii$) ও ($iii$) ও সঠিক।`,
          String.raw`$$\therefore\;i,\;ii\;\text{ ও }\;iii\;\text{ তিনটিই সঠিক।}$$`,
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },

    // ─────────────── প্রমাণ (৪ – ১৫) ───────────────
    {
      id: 4,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, সমবাহু ত্রিভুজের বাহুগুলোর মধ্যবিন্দুসমূহ যোগ করলে যে ত্রিভুজ উৎপন্ন হয়, তা সমবাহু হবে।",
      figure: "63-p4",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: সমবাহু ত্রিভুজের বাহুগুলোর মধ্যবিন্দুসমূহ যোগ করলে যে ত্রিভুজ উৎপন্ন হয়, তা সমবাহু।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ একটি সমবাহু ত্রিভুজ এবং $D,\;E,\;F$ যথাক্রমে $AB,\;BC,\;CA$ বাহুর মধ্যবিন্দু। $D,E$; $E,F$ ও $F,D$ যোগ করা হয়েছে। প্রমাণ করতে হবে যে, $\triangle DEF$ সমবাহু।`,
          String.raw`প্রমাণ: $\triangle ABC$ সমবাহু, তাই`,
          String.raw`$$AB=BC=CA\qquad\text{এবং}\qquad \angle A=\angle B=\angle C=60^{\circ}$$`,
          String.raw`$D,\;E,\;F$ মধ্যবিন্দু হওয়ায়,`,
          String.raw`$$AD=DB=BE=EC=CF=FA=\tfrac{1}{2}AB$$`,
          String.raw`ধাপ ১. $\triangle ADF$ ও $\triangle BED$ এ`,
          String.raw`$$AD=BE,\qquad AF=BD,\qquad \text{অন্তর্ভুক্ত }\angle A=\text{অন্তর্ভুক্ত }\angle B$$`,
          String.raw`$$\therefore\;\triangle ADF\cong\triangle BED\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;DF=DE$$`,
          String.raw`ধাপ ২. একইভাবে $\triangle BED$ ও $\triangle CFE$ এ`,
          String.raw`$$BE=CF,\qquad BD=CE,\qquad \text{অন্তর্ভুক্ত }\angle B=\text{অন্তর্ভুক্ত }\angle C$$`,
          String.raw`$$\therefore\;\triangle BED\cong\triangle CFE\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;DE=EF$$`,
          String.raw`ধাপ ৩. সুতরাং`,
          String.raw`$$DE=EF=FD$$`,
          String.raw`$$\therefore\;\triangle DEF\;\text{ একটি সমবাহু ত্রিভুজ।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 5,
      group: TRI_PROVE,
      question: "প্রমাণ করো যে, সমবাহু ত্রিভুজের মধ্যমা তিনটি পরস্পর সমান।",
      figure: "63-p5",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: সমবাহু ত্রিভুজের মধ্যমা তিনটি পরস্পর সমান।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ একটি সমবাহু ত্রিভুজ এবং $AD,\;BE,\;CF$ এর তিনটি মধ্যমা, অর্থাৎ $D,\;E,\;F$ যথাক্রমে $BC,\;CA,\;AB$ বাহুর মধ্যবিন্দু। প্রমাণ করতে হবে যে, $AD=BE=CF$।`,
          String.raw`প্রমাণ: $\triangle ABC$ সমবাহু, তাই`,
          String.raw`$$AB=BC=CA\qquad\text{এবং}\qquad \angle A=\angle B=\angle C=60^{\circ}$$`,
          String.raw`$$\therefore\;BD=DC=CE=EA=AF=FB=\tfrac{1}{2}AB$$`,
          String.raw`ধাপ ১. $\triangle ABD$ ও $\triangle BCE$ এ`,
          String.raw`$$AB=BC,\qquad BD=CE,\qquad \text{অন্তর্ভুক্ত }\angle ABD=\text{অন্তর্ভুক্ত }\angle BCE=60^{\circ}$$`,
          String.raw`$$\therefore\;\triangle ABD\cong\triangle BCE\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;AD=BE$$`,
          String.raw`ধাপ ২. একইভাবে $\triangle BCE$ ও $\triangle CAF$ এ`,
          String.raw`$$BC=CA,\qquad CE=AF,\qquad \text{অন্তর্ভুক্ত }\angle BCE=\text{অন্তর্ভুক্ত }\angle CAF=60^{\circ}$$`,
          String.raw`$$\therefore\;\triangle BCE\cong\triangle CAF\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;BE=CF$$`,
          String.raw`ধাপ ৩. সুতরাং`,
          String.raw`$$AD=BE=CF$$`,
          String.raw`অর্থাৎ সমবাহু ত্রিভুজের মধ্যমা তিনটি পরস্পর সমান।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 6,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, ত্রিভুজের যেকোনো দুইটি বহিঃস্থ কোণের সমষ্টি দুই সমকোণ অপেক্ষা বৃহত্তর।",
      figure: "63-p6",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: ত্রিভুজের যেকোনো দুইটি বহিঃস্থ কোণের সমষ্টি দুই সমকোণ অপেক্ষা বৃহত্তর।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $BC$ কে $D$ পর্যন্ত এবং $CB$ কে $E$ পর্যন্ত বর্ধিত করা হয়েছে। এতে $C$ বিন্দুতে বহিঃস্থ কোণ $x=\angle ACD$ এবং $B$ বিন্দুতে বহিঃস্থ কোণ $y=\angle ABE$ উৎপন্ন হয়েছে। প্রমাণ করতে হবে যে, $x+y>$ দুই সমকোণ।`,
          String.raw`প্রমাণ: $\angle ACB$ ও $\angle ACD$ সন্নিহিত কোণ, তাই`,
          String.raw`$$x=\angle ACD=180^{\circ}-\angle ACB$$`,
          String.raw`একইভাবে $\angle ABC$ ও $\angle ABE$ সন্নিহিত কোণ, তাই`,
          String.raw`$$y=\angle ABE=180^{\circ}-\angle ABC$$`,
          String.raw`$$\therefore\;x+y=360^{\circ}-(\angle ABC+\angle ACB)$$`,
          String.raw`আবার $\triangle ABC$ এ,`,
          String.raw`$$\angle BAC+\angle ABC+\angle ACB=180^{\circ}\qquad\left[\,\text{উপপাদ্য }৪\,\right]$$`,
          String.raw`$$\text{বা, }\angle ABC+\angle ACB=180^{\circ}-\angle BAC$$`,
          String.raw`$$\therefore\;x+y=360^{\circ}-(180^{\circ}-\angle BAC)=180^{\circ}+\angle BAC$$`,
          String.raw`ত্রিভুজের প্রতিটি কোণের পরিমাপ ধনাত্মক, অর্থাৎ $\angle BAC>0^{\circ}$।`,
          String.raw`$$\therefore\;x+y>180^{\circ}=\text{দুই সমকোণ}$$`,
          String.raw`অন্য যেকোনো দুইটি বহিঃস্থ কোণের ক্ষেত্রেও একই যুক্তি খাটে, কেবল তৃতীয় কোণটির নাম বদলায়।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 7,
      group: TRI_PROVE,
      question: String.raw`$\triangle ABC$ এর $BC$ বাহুর মধ্যবিন্দু $D$ হলে, প্রমাণ করো যে, $AB+AC>2AD$`,
      figure: "63-p7",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $BC$ বাহুর মধ্যবিন্দু $D$, অর্থাৎ $AD$ একটি মধ্যমা। প্রমাণ করতে হবে যে, $AB+AC>2AD$।`,
          String.raw`অঙ্কন: $AD$ কে $E$ পর্যন্ত বর্ধিত করি যেন $AD=DE$ হয়। $C,\;E$ যোগ করি।`,
          String.raw`প্রমাণ: $\triangle ABD$ ও $\triangle ECD$ এ`,
          String.raw`$$BD=DC\qquad\left[\,D,\;BC\text{ এর মধ্যবিন্দু}\,\right]$$`,
          String.raw`$$AD=DE\qquad\left[\,\text{অঙ্কনানুসারে}\,\right]$$`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle ADB=\text{অন্তর্ভুক্ত }\angle EDC\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
          String.raw`$$\therefore\;\triangle ABD\cong\triangle ECD\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;AB=EC$$`,
          String.raw`এখন $\triangle ACE$ এ,`,
          String.raw`$$AC+CE>AE\qquad\left[\,\text{উপপাদ্য }১৩\,\right]$$`,
          String.raw`$$\text{বা, } AC+AB>AD+DE$$`,
          String.raw`$$\text{বা, } AB+AC>AD+AD$$`,
          String.raw`$$\therefore\;AB+AC>2AD$$`,
        ],
        answer: String.raw`$AB+AC>2AD$ (প্রমাণিত)`,
      },
    },
    {
      id: 8,
      group: TRI_PROVE,
      question: String.raw`চিত্রে, দেওয়া আছে, $\angle C=$ এক সমকোণ এবং $\angle B=2\angle A$। প্রমাণ করো যে, $AB=2BC$`,
      figure: "63-p8",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle ACB=$ এক সমকোণ এবং $\angle ABC=2\angle BAC$। প্রমাণ করতে হবে যে, $AB=2BC$।`,
          String.raw`প্রথমে কোণ তিনটির মান বের করি। $\triangle ABC$ সমকোণী, তাই`,
          String.raw`$$\angle BAC+\angle ABC=90^{\circ}\qquad\left[\,\text{অনুসিদ্ধান্ত }৪\,\right]$$`,
          String.raw`$$\text{বা, }\angle BAC+2\angle BAC=90^{\circ}$$`,
          String.raw`$$\text{বা, } 3\angle BAC=90^{\circ}$$`,
          String.raw`$$\therefore\;\angle BAC=30^{\circ}\qquad\text{এবং}\qquad \angle ABC=60^{\circ}$$`,
          String.raw`অঙ্কন: $BC$ কে $D$ পর্যন্ত বর্ধিত করি যেন $CD=BC$ হয়। $A,\;D$ যোগ করি।`,
          String.raw`প্রমাণ: $\triangle ACD$ ও $\triangle ACB$ এ`,
          String.raw`$$CD=CB\qquad\left[\,\text{অঙ্কনানুসারে}\,\right]$$`,
          String.raw`$$AC=AC\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle ACD=\text{অন্তর্ভুক্ত }\angle ACB=90^{\circ}$$`,
          String.raw`$$\therefore\;\triangle ACD\cong\triangle ACB\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;AD=AB\qquad\text{এবং}\qquad \angle ADC=\angle ABC=60^{\circ}$$`,
          String.raw`এখন $\triangle ABD$ এ,`,
          String.raw`$$\angle ABD=60^{\circ},\qquad \angle ADB=60^{\circ}$$`,
          String.raw`$$\therefore\;\angle BAD=180^{\circ}-(60^{\circ}+60^{\circ})=60^{\circ}$$`,
          String.raw`তিনটি কোণই সমান, তাই $\triangle ABD$ একটি সমবাহু ত্রিভুজ।`,
          String.raw`$$\therefore\;AB=BD=BC+CD=BC+BC$$`,
          String.raw`$$\therefore\;AB=2BC$$`,
        ],
        answer: String.raw`$AB=2BC$ (প্রমাণিত)`,
      },
    },
    {
      id: 9,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, ত্রিভুজের একটি বাহু বর্ধিত করলে যে বহিঃস্থ কোণ উৎপন্ন হয়, তা বিপরীত অন্তঃস্থ কোণদ্বয়ের সমষ্টির সমান।",
      figure: "63-p9",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: ত্রিভুজের একটি বাহু বর্ধিত করলে যে বহিঃস্থ কোণ উৎপন্ন হয়, তা এর অন্তঃস্থ বিপরীত কোণদ্বয়ের সমষ্টির সমান।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $BC$ বাহুকে $D$ পর্যন্ত বর্ধিত করা হয়েছে; ফলে $\angle ACD$ বহিঃস্থ কোণ উৎপন্ন হয়েছে এবং $\angle 1=\angle BAC$ ও $\angle 2=\angle ABC$ এর বিপরীত অন্তঃস্থ কোণ। প্রমাণ করতে হবে যে, $\angle ACD=\angle 1+\angle 2$।`,
          String.raw`অঙ্কন: $C$ বিন্দু দিয়ে $CE$ আঁকি যেন $BA\parallel CE$ হয়।`,
          String.raw`প্রমাণ: $BA\parallel CE$ এবং $AC$ ছেদক, তাই`,
          String.raw`$$x=\angle ACE=\angle BAC=\angle 1\qquad\left[\,\text{একান্তর কোণ}\,\right]$$`,
          String.raw`আবার $BA\parallel CE$ এবং $BD$ ছেদক, তাই`,
          String.raw`$$y=\angle ECD=\angle ABC=\angle 2\qquad\left[\,\text{অনুরূপ কোণ}\,\right]$$`,
          String.raw`$CE$ রশ্মি $\angle ACD$ এর অভ্যন্তরে, তাই`,
          String.raw`$$\angle ACD=\angle ACE+\angle ECD=x+y$$`,
          String.raw`$$\therefore\;\angle ACD=\angle 1+\angle 2=\angle BAC+\angle ABC$$`,
          String.raw`অর্থাৎ বহিঃস্থ কোণটি তার বিপরীত অন্তঃস্থ কোণদ্বয়ের সমষ্টির সমান।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 10,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, ত্রিভুজের যেকোনো দুই বাহুর অন্তর তার তৃতীয় বাহু অপেক্ষা ক্ষুদ্রতর।",
      figure: "63-p10",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: ত্রিভুজের যেকোনো দুই বাহুর দৈর্ঘ্যের অন্তর এর তৃতীয় বাহুর দৈর্ঘ্য অপেক্ষা ক্ষুদ্রতর।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ একটি ত্রিভুজ। প্রমাণ করতে হবে যে, $AB$ ও $AC$ বাহুদ্বয়ের অন্তর $BC$ অপেক্ষা ক্ষুদ্রতর।`,
          String.raw`প্রমাণ: $\triangle ABC$ এ, ত্রিভুজের যেকোনো দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর।`,
          String.raw`$$\therefore\;AB+BC>AC$$`,
          String.raw`$$\text{বা, } BC>AC-AB \qquad\left[\,\text{উভয় পক্ষ থেকে } AB \text{ বিয়োগ করে}\,\right]$$`,
          String.raw`আবার একই কারণে,`,
          String.raw`$$AC+BC>AB$$`,
          String.raw`$$\text{বা, } BC>AB-AC \qquad\left[\,\text{উভয় পক্ষ থেকে } AC \text{ বিয়োগ করে}\,\right]$$`,
          String.raw`$AB-AC$ ও $AC-AB$ এর মধ্যে যেটি ধনাত্মক, সেটিই $AB$ ও $AC$ এর অন্তর; আর উপরের দুইটি অসমতা দুইটি ক্ষেত্রকেই ঢেকে দেয়।`,
          String.raw`$$\therefore\;|AB-AC|<BC$$`,
          String.raw`একইভাবে $|AB-BC|<AC$ এবং $|AC-BC|<AB$।`,
        ],
        answer: String.raw`$|AB-AC|<BC$ (প্রমাণিত)`,
      },
    },
    {
      id: 11,
      group: TRI_PROVE,
      question: String.raw`চিত্রে, $ABC$ ত্রিভুজের $\angle B=$ এক সমকোণ এবং $D$, অতিভুজ $AC$ এর মধ্যবিন্দু। প্রমাণ করো যে, $BD=\dfrac{1}{2}AC$`,
      figure: "63-p11",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle ABC=$ এক সমকোণ এবং $D$ হলো অতিভুজ $AC$ এর মধ্যবিন্দু। প্রমাণ করতে হবে যে, $BD=\dfrac{1}{2}AC$।`,
          String.raw`অঙ্কন: $AB$ বাহুর মধ্যবিন্দু $E$ নিই এবং $D,\;E$ যোগ করি।`,
          String.raw`প্রমাণ: $\triangle ABC$ এ $E$ ও $D$ যথাক্রমে $AB$ ও $AC$ বাহুর মধ্যবিন্দু।`,
          String.raw`$$\therefore\;ED\parallel BC\qquad\left[\,\text{উপপাদ্য }১৪\,\right]$$`,
          String.raw`আবার $\angle ABC=90^{\circ}$, অর্থাৎ $AB\perp BC$।`,
          String.raw`$ED\parallel BC$ এবং $AB$ ছেদক, তাই`,
          String.raw`$$\angle AED=\angle ABC=90^{\circ}\qquad\left[\,\text{অনুরূপ কোণ}\,\right]$$`,
          String.raw`$$\therefore\;\angle AED=\angle BED=90^{\circ}$$`,
          String.raw`এখন $\triangle AED$ ও $\triangle BED$ এ`,
          String.raw`$$AE=EB\qquad\left[\,E,\;AB\text{ এর মধ্যবিন্দু}\,\right]$$`,
          String.raw`$$ED=ED\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle AED=\text{অন্তর্ভুক্ত }\angle BED=90^{\circ}$$`,
          String.raw`$$\therefore\;\triangle AED\cong\triangle BED\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;DA=DB$$`,
          String.raw`$D$ হলো $AC$ এর মধ্যবিন্দু, তাই $DA=\dfrac{1}{2}AC$।`,
          String.raw`$$\therefore\;BD=\frac{1}{2}AC$$`,
        ],
        answer: String.raw`$BD=\dfrac{1}{2}AC$ (প্রমাণিত)`,
      },
    },
    {
      id: 12,
      group: TRI_PROVE,
      question: String.raw`$\triangle ABC$ এ $AB>AC$ এবং $\angle A$ এর সমদ্বিখণ্ডক $AD$, $BC$ বাহুকে $D$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $\angle ADB$ স্থূলকোণ।`,
      figure: "63-p12",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $AB>AC$ এবং $\angle BAC$ এর সমদ্বিখণ্ডক $AD$, $BC$ কে $D$ বিন্দুতে ছেদ করেছে, অর্থাৎ $\angle BAD=\angle CAD$। প্রমাণ করতে হবে যে, $\angle ADB$ স্থূলকোণ।`,
          String.raw`প্রমাণ: $\triangle ADC$ এর $CD$ বাহুকে $B$ এর দিকে বর্ধিত ধরলে $\angle ADB$ হলো এর বহিঃস্থ কোণ।`,
          String.raw`$$\therefore\;\angle ADB=\angle CAD+\angle ACB\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
          String.raw`একইভাবে $\triangle ABD$ এর বহিঃস্থ কোণ $\angle ADC$ থেকে,`,
          String.raw`$$\angle ADC=\angle BAD+\angle ABC$$`,
          String.raw`আবার $\triangle ABC$ এ $AB>AC$, তাই`,
          String.raw`$$\angle ACB>\angle ABC\qquad\left[\,\text{উপপাদ্য }১১\,\right]$$`,
          String.raw`$\angle CAD=\angle BAD$, সুতরাং দুইটি সমান রাশির সাথে বড় ও ছোট রাশি যোগ করে পাই`,
          String.raw`$$\angle CAD+\angle ACB>\angle BAD+\angle ABC$$`,
          String.raw`$$\text{বা, }\angle ADB>\angle ADC$$`,
          String.raw`কিন্তু $\angle ADB$ ও $\angle ADC$ সন্নিহিত কোণ, তাই`,
          String.raw`$$\angle ADB+\angle ADC=\text{দুই সমকোণ}\qquad\left[\,\text{উপপাদ্য }১\,\right]$$`,
          String.raw`$$\text{বা, }\angle ADC=\text{দুই সমকোণ}-\angle ADB$$`,
          String.raw`$$\therefore\;\angle ADB>\text{দুই সমকোণ}-\angle ADB$$`,
          String.raw`$$\text{বা, } 2\angle ADB>\text{দুই সমকোণ}$$`,
          String.raw`$$\therefore\;\angle ADB>\text{এক সমকোণ}$$`,
          String.raw`আবার $\angle ADB$ একটি ত্রিভুজের কোণ, তাই $\angle ADB<$ দুই সমকোণ।`,
          String.raw`$$\therefore\;\angle ADB\;\text{ একটি স্থূলকোণ।}$$`,
        ],
        answer: String.raw`$\angle ADB$ স্থূলকোণ (প্রমাণিত)`,
      },
    },
    {
      id: 13,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, কোনো রেখাংশের লম্বসমদ্বিখণ্ডকের উপরিস্থিত যেকোনো বিন্দু উক্ত রেখাংশের প্রান্ত বিন্দুদ্বয় হতে সমদূরবর্তী।",
      figure: "63-p13",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: কোনো রেখাংশের লম্বসমদ্বিখণ্ডকের উপরিস্থিত যেকোনো বিন্দু ঐ রেখাংশের প্রান্তবিন্দুদ্বয় হতে সমদূরবর্তী।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $AB$ একটি রেখাংশ এবং $MP$ তার লম্বসমদ্বিখণ্ডক, অর্থাৎ $M$ হলো $AB$ এর মধ্যবিন্দু এবং $MP\perp AB$। $P$ হলো $MP$ রেখার উপরিস্থিত যেকোনো বিন্দু। প্রমাণ করতে হবে যে, $PA=PB$।`,
          String.raw`অঙ্কন: $P,A$ ও $P,B$ যোগ করি।`,
          String.raw`প্রমাণ: $P$ যদি $M$ বিন্দুই হয়, তবে $PA=MA=MB=PB$ — প্রমাণ শেষ। সুতরাং ধরি $P\neq M$।`,
          String.raw`$\triangle AMP$ ও $\triangle BMP$ এ`,
          String.raw`$$AM=MB\qquad\left[\,M,\;AB\text{ এর মধ্যবিন্দু}\,\right]$$`,
          String.raw`$$MP=MP\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle AMP=\text{অন্তর্ভুক্ত }\angle BMP=90^{\circ}\qquad\left[\,MP\perp AB\,\right]$$`,
          String.raw`$$\therefore\;\triangle AMP\cong\triangle BMP\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;PA=PB$$`,
          String.raw`অর্থাৎ লম্বসমদ্বিখণ্ডকের উপরিস্থিত যেকোনো বিন্দু $A$ ও $B$ হতে সমদূরবর্তী।`,
        ],
        answer: String.raw`$PA=PB$ (প্রমাণিত)`,
      },
    },
    {
      id: 14,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, সমদ্বিবাহু ত্রিভুজের শিরঃকোণের সমদ্বিখণ্ডক ভূমিকেও সমদ্বিখণ্ডিত করে এবং ভূমির উপর লম্ব।",
      figure: "63-p14",
      solution: {
        steps: [
          String.raw`সাধারণ নির্বচন: সমদ্বিবাহু ত্রিভুজের শিরঃকোণের সমদ্বিখণ্ডক ভূমিকেও সমদ্বিখণ্ডিত করে এবং ভূমির উপর লম্ব।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $AB=AC$ এবং শিরঃকোণ $\angle BAC$ এর সমদ্বিখণ্ডক $AD$, ভূমি $BC$ কে $D$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $BD=DC$ এবং $AD\perp BC$।`,
          String.raw`প্রমাণ: $\triangle ABD$ ও $\triangle ACD$ এ`,
          String.raw`$$AB=AC\qquad\left[\,\text{দেওয়া আছে}\,\right]$$`,
          String.raw`$$AD=AD\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle BAD=\text{অন্তর্ভুক্ত }\angle CAD\qquad\left[\,AD\text{ সমদ্বিখণ্ডক}\,\right]$$`,
          String.raw`$$\therefore\;\triangle ABD\cong\triangle ACD\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;BD=DC\qquad\text{এবং}\qquad \angle ADB=\angle ADC$$`,
          String.raw`প্রথম ফল থেকেই পাই, $AD$ ভূমি $BC$ কে সমদ্বিখণ্ডিত করে।`,
          String.raw`আবার $\angle ADB$ ও $\angle ADC$ সন্নিহিত কোণ, তাই`,
          String.raw`$$\angle ADB+\angle ADC=\text{দুই সমকোণ}\qquad\left[\,\text{উপপাদ্য }১\,\right]$$`,
          String.raw`$$\text{বা, } 2\angle ADB=\text{দুই সমকোণ}$$`,
          String.raw`$$\therefore\;\angle ADB=\angle ADC=\text{এক সমকোণ}$$`,
          String.raw`$$\therefore\;AD\perp BC$$`,
        ],
        answer: String.raw`$BD=DC$ এবং $AD\perp BC$ (প্রমাণিত)`,
      },
    },
    {
      id: 15,
      group: TRI_PROVE,
      question:
        "প্রমাণ করো যে, ত্রিভুজের মধ্যমাত্রয়ের সমষ্টি তার পরিসীমা অপেক্ষা ক্ষুদ্রতর।",
      figure: "63-p15",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর তিনটি মধ্যমা $AD,\;BE,\;CF$, অর্থাৎ $D,\;E,\;F$ যথাক্রমে $BC,\;CA,\;AB$ বাহুর মধ্যবিন্দু। প্রমাণ করতে হবে যে, $AD+BE+CF<AB+BC+CA$।`,
          String.raw`প্রমাণ: প্রশ্ন ৭ এ প্রমাণ করা হয়েছে যে, $BC$ এর মধ্যবিন্দু $D$ হলে $AB+AC>2AD$।`,
          String.raw`$$\therefore\;AD<\frac{1}{2}(AB+AC)$$`,
          String.raw`একইভাবে $CA$ এর মধ্যবিন্দু $E$ হওয়ায়,`,
          String.raw`$$BE<\frac{1}{2}(BA+BC)$$`,
          String.raw`এবং $AB$ এর মধ্যবিন্দু $F$ হওয়ায়,`,
          String.raw`$$CF<\frac{1}{2}(CA+CB)$$`,
          String.raw`তিনটি অসমতা যোগ করে পাই,`,
          String.raw`$$AD+BE+CF<\frac{1}{2}\left(AB+AC+BA+BC+CA+CB\right)$$`,
          String.raw`$$=\frac{1}{2}\times 2\left(AB+BC+CA\right)$$`,
          String.raw`$$\therefore\;AD+BE+CF<AB+BC+CA$$`,
          String.raw`অর্থাৎ মধ্যমাত্রয়ের সমষ্টি ত্রিভুজটির পরিসীমা অপেক্ষা ক্ষুদ্রতর।`,
        ],
        answer: "প্রমাণিত",
      },
    },

    // ─────────────── প্রয়োগ (১৬) ───────────────
    {
      id: 16,
      group: TRI_APPLY,
      question: String.raw`এক পরিশ্রমী পিতা তার একমাত্র পুত্রকে ডেকে বললেন যে তিনি তার উপার্জিত অর্থ দিয়ে স্বর্ণ ক্রয় করে পার্শ্ববর্তী বনে লুকিয়ে রেখেছেন। স্বর্ণের অবস্থান সম্পর্কে পুত্র জিজ্ঞাসা করাতে তিনি জানালেন যে বনে একই রকম দেখতে দুইটি বৃক্ষ $A$ ও $B$ এবং একটি পাথর $S$ রয়েছে। $S$ থেকে $A$ তে পৌঁছে সমদূরত্ব লম্বালম্বিভাবে গিয়ে সে $C$ বিন্দু পাবে। এবার আবার $S$ থেকে $B$ তে এসে একইভাবে লম্বালম্বি সমদূরত্ব অতিক্রম করে $D$ বিন্দু পাবে। এবার $CD$ রেখার মধ্যবিন্দুতে স্বর্ণ পাওয়া যাবে। পুত্র বৃক্ষ $A$ ও $B$ পেলেও দুর্ভাগ্যজনকভাবে $S$ পেল না। সে কি স্বর্ণ খুঁজে পাবে? কীভাবে?`,
      figure: "63-p16",
      solution: {
        steps: [
          String.raw`হ্যাঁ, পুত্র স্বর্ণ খুঁজে পাবে — কারণ $CD$ এর মধ্যবিন্দুটি পাথর $S$ এর অবস্থানের উপর মোটেও নির্ভর করে না। নিচে তা প্রমাণ করা হলো।`,
          String.raw`বিশেষ নির্বচন: মনে করি, $A$ ও $B$ দুইটি বৃক্ষ এবং $S$ পাথরের অবস্থান। শর্তানুসারে $AC=AS$ ও $AC\perp AS$, এবং $BD=BS$ ও $BD\perp BS$। $M$ হলো $CD$ এর মধ্যবিন্দু। দেখাতে হবে যে, $M$ এর অবস্থান কেবল $A$ ও $B$ দিয়েই নির্দিষ্ট।`,
          String.raw`অঙ্কন: $AB$ রেখার উপর $S,\;C,\;D$ ও $M$ বিন্দু থেকে যথাক্রমে $SN,\;CP,\;DQ$ ও $MR$ লম্ব আঁকি; $N,\;P,\;Q,\;R$ হলো লম্বগুলোর পাদবিন্দু।`,
          String.raw`প্রমাণ (ধাপ ১): $\triangle ACP$ ও $\triangle SAN$ এ`,
          String.raw`$$AC=SA\qquad\left[\,\text{শর্তানুসারে}\,\right]$$`,
          String.raw`$$\angle APC=\angle SNA=90^{\circ}\qquad\left[\,\text{অঙ্কনানুসারে}\,\right]$$`,
          String.raw`$$\angle CAP=90^{\circ}-\angle SAN=\angle ASN\qquad\left[\,\because\;\angle CAS=90^{\circ}\;\text{এবং}\;\triangle SAN\;\text{সমকোণী}\,\right]$$`,
          String.raw`$$\therefore\;\triangle ACP\cong\triangle SAN\qquad\left[\,\text{কোণ-বাহু-কোণ উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;CP=AN\qquad\text{এবং}\qquad AP=SN$$`,
          String.raw`প্রমাণ (ধাপ ২): একইভাবে $\triangle BDQ$ ও $\triangle SBN$ এ`,
          String.raw`$$\therefore\;DQ=BN\qquad\text{এবং}\qquad BQ=SN$$`,
          String.raw`প্রমাণ (ধাপ ৩): $M$ হলো $CD$ এর মধ্যবিন্দু, তাই $R$ হলো $PQ$ এর মধ্যবিন্দু এবং`,
          String.raw`$$MR=\frac{1}{2}(CP+DQ)=\frac{1}{2}(AN+BN)=\frac{1}{2}AB$$`,
          String.raw`প্রমাণ (ধাপ ৪): আবার $AP=SN$ এবং $AQ=AB-BQ=AB-SN$, সুতরাং`,
          String.raw`$$AR=\frac{AP+AQ}{2}=\frac{SN+AB-SN}{2}=\frac{1}{2}AB$$`,
          String.raw`অর্থাৎ $R$ হলো $AB$ এর মধ্যবিন্দু।`,
          String.raw`সিদ্ধান্ত: $R$ হলো $AB$ এর মধ্যবিন্দু এবং $MR\perp AB$ ও $MR=\dfrac{1}{2}AB$ — তিনটি কথার কোনোটিতেই $S$ নাই।`,
          String.raw`সুতরাং পুত্র যা করবে: $A$ ও $B$ যোগ করে $AB$ এর মধ্যবিন্দু $N$ নির্ণয় করবে, সেখানে $AB$ এর উপর লম্ব আঁকবে এবং সেই লম্ব বরাবর $\dfrac{1}{2}AB$ দূরত্ব মেপে যে বিন্দু পাবে, সেখানেই খুঁড়বে।`,
          String.raw`লম্বটির দুই পাশে দুইটি সম্ভাব্য বিন্দু পাওয়া যায়; বনের কোন পাশে $C$ ও $D$ পড়ার কথা তা জানা না থাকলে দুইটি জায়গাতেই দেখতে হবে — তবু $S$ ছাড়াই মাত্র দুইটি জায়গা, সমস্ত বন নয়।`,
        ],
        answer:
          String.raw`হ্যাঁ — $AB$ এর মধ্যবিন্দু থেকে $AB$ এর উপর লম্ব বরাবর $\dfrac{1}{2}AB$ দূরত্বে স্বর্ণ; $S$ এর অবস্থান জানার প্রয়োজন নাই।`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (১৭ – ২০) ───────────────
    {
      id: 17,
      group: TRI_MODEL_MCQ,
      question: String.raw`সমবাহু ত্রিভুজের একটি বাহুকে উভয়দিকে বর্ধিত করলে উৎপন্ন বহিঃস্থ কোণদ্বয়ের বিয়োগফল কত?
ক) $0^{\circ}$  খ) $120^{\circ}$  গ) $180^{\circ}$  ঘ) $240^{\circ}$`,
      figure: "63-p17",
      solution: {
        steps: [
          String.raw`মনে করি, $\triangle ABC$ সমবাহু এবং $BC$ বাহুকে উভয়দিকে বর্ধিত করে $D$ ও $E$ পাওয়া গেছে।`,
          String.raw`সমবাহু ত্রিভুজের প্রতিটি কোণ সমান, তাই`,
          String.raw`$$\angle ABC=\angle ACB=\angle BAC=60^{\circ}$$`,
          String.raw`$C$ বিন্দুতে বহিঃস্থ কোণ,`,
          String.raw`$$\angle ACD=180^{\circ}-\angle ACB=180^{\circ}-60^{\circ}=120^{\circ}$$`,
          String.raw`$B$ বিন্দুতে বহিঃস্থ কোণ,`,
          String.raw`$$\angle ABE=180^{\circ}-\angle ABC=180^{\circ}-60^{\circ}=120^{\circ}$$`,
          String.raw`$$\therefore\;\text{বিয়োগফল}=120^{\circ}-120^{\circ}=0^{\circ}$$`,
        ],
        answer: String.raw`ক) $0^{\circ}$`,
      },
    },
    {
      id: 18,
      group: TRI_MODEL_MCQ,
      question: String.raw`পাশের চিত্রে— ($i$) $\angle AOC$ একটি সূক্ষ্মকোণ ($ii$) $\angle AOB$ একটি সমকোণ ($iii$) $\angle AOD$ একটি প্রবৃদ্ধকোণ। নিচের কোনটি সঠিক?
ক) $i$  খ) $ii$  গ) $i$ ও $ii$  ঘ) $ii$ ও $iii$`,
      figure: "63-p18",
      solution: {
        steps: [
          String.raw`($i$) $OC$ রশ্মিটি $OA$ ও $OB$ এর অভ্যন্তরে, তাই $\angle AOC<\angle AOB=90^{\circ}$।`,
          String.raw`$$\therefore\;\angle AOC\;\text{ একটি সূক্ষ্মকোণ}\qquad\left[\,\text{সঠিক}\,\right]$$`,
          String.raw`($ii$) $OB\perp OA$, তাই`,
          String.raw`$$\angle AOB=90^{\circ}\qquad\left[\,\text{সঠিক}\,\right]$$`,
          String.raw`($iii$) $OD$ রশ্মিটি $OB$ এর বাম পাশে, তাই $\angle AOD$ এক সমকোণ থেকে বড় কিন্তু দুই সমকোণ থেকে ছোট।`,
          String.raw`$$90^{\circ}<\angle AOD<180^{\circ}$$`,
          String.raw`অর্থাৎ $\angle AOD$ একটি স্থূলকোণ, প্রবৃদ্ধকোণ নয় — প্রবৃদ্ধকোণ হতে হলে $180^{\circ}$ থেকে বড় হতে হতো।`,
          String.raw`$$\left[\,\text{সঠিক নয়}\,\right]$$`,
          String.raw`$$\therefore\;i\;\text{ ও }\;ii\;\text{ সঠিক।}$$`,
        ],
        answer: String.raw`গ) $i$ ও $ii$`,
      },
    },
    {
      id: 19,
      group: TRI_MODEL_MCQ,
      question: String.raw`চিত্রে $AB\parallel EF\parallel CD$ এবং $BD\perp CD$। $\angle AEF$ এর মান কত?
ক) $30^{\circ}$  খ) $60^{\circ}$  গ) $240^{\circ}$  ঘ) $270^{\circ}$`,
      figure: "63-p19",
      solution: {
        steps: [
          String.raw`$AB\parallel EF$ এবং $AG$ এদের ছেদক।`,
          String.raw`$\angle BAE$ ও $\angle AEF$ ছেদকের একই পাশের অন্তঃস্থ কোণ, তাই এরা পরস্পর সম্পূরক।`,
          String.raw`$$\angle BAE+\angle AEF=180^{\circ}$$`,
          String.raw`$$\text{বা, } 120^{\circ}+\angle AEF=180^{\circ}$$`,
          String.raw`$$\therefore\;\angle AEF=60^{\circ}$$`,
        ],
        answer: String.raw`খ) $60^{\circ}$`,
      },
    },
    {
      id: 20,
      group: TRI_MODEL_MCQ,
      question: String.raw`একই চিত্রে $\angle BFE$ এর মান নিচের কোনটি?
ক) $30^{\circ}$  খ) $60^{\circ}$  গ) $90^{\circ}$  ঘ) $120^{\circ}$`,
      figure: "63-p19",
      solution: {
        steps: [
          String.raw`চিত্রে $B,\;F,\;D$ একই সরলরেখায়, অর্থাৎ $BD$ রেখাটি $F$ বিন্দু দিয়ে গেছে।`,
          String.raw`দেওয়া আছে $BD\perp CD$, অর্থাৎ`,
          String.raw`$$\angle BDC=90^{\circ}$$`,
          String.raw`আবার $EF\parallel CD$ এবং $BD$ ছেদক, তাই`,
          String.raw`$$\angle BFE=\angle BDC\qquad\left[\,\text{অনুরূপ কোণ}\,\right]$$`,
          String.raw`$$\therefore\;\angle BFE=90^{\circ}$$`,
          String.raw`অর্থাৎ $CD$ এর উপর লম্ব রেখাটি তার সমান্তরাল $EF$ এর উপরও লম্ব।`,
        ],
        answer: String.raw`গ) $90^{\circ}$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল (২১ – ২২) ───────────────
    {
      id: 21,
      group: TRI_MODEL_CQ,
      question: String.raw`$ABC$ ত্রিভুজের $\angle A=$ এক সমকোণ। $BC$ বাহুর মধ্যবিন্দু $D$।`,
      figure: "63-p21",
      parts: [
        {
          label: "ক",
          question: String.raw`$\angle DEF$ ও $\angle PEF$ কোণদ্বয় পরস্পর সন্নিহিত ও পূরক কোণ হলে, চিত্র অঙ্কন করে কোণদ্বয় চিহ্নিত করো।`,
          figure: "63-p21a",
          solution: {
            steps: [
              String.raw`অঙ্কনের নিয়ম: কোণ দুইটি সন্নিহিত হতে হলে এদের শীর্ষবিন্দু এক হতে হবে ($E$), একটি সাধারণ বাহু থাকতে হবে ($EF$) এবং কোণ দুইটি সেই সাধারণ বাহুর দুই পাশে থাকতে হবে।`,
              String.raw`আবার পূরক হতে হলে এদের সমষ্টি এক সমকোণ হতে হবে।`,
              String.raw`$$\angle DEF+\angle PEF=90^{\circ}$$`,
              String.raw`সুতরাং $E$ বিন্দুতে $ED\perp EP$ আঁকি এবং $\angle DEP$ এর অভ্যন্তরে $EF$ রশ্মি আঁকি।`,
              String.raw`এতে $EF$ এর এক পাশে $\angle DEF$ এবং অন্য পাশে $\angle PEF$ উৎপন্ন হলো — উপরের চিত্রে কোণ দুইটি চিহ্নিত করা হয়েছে।`,
              String.raw`$$\therefore\;\angle DEF+\angle PEF=\angle DEP=\text{এক সমকোণ}$$`,
            ],
            answer:
              String.raw`চিত্র অঙ্কিত — $EF$ সাধারণ বাহু এবং $\angle DEF+\angle PEF=90^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $AB+AC>2AD$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $AD$ কে $E$ পর্যন্ত বর্ধিত করি যেন $AD=DE$ হয়। $C,\;E$ যোগ করি।`,
              String.raw`প্রমাণ: $\triangle ABD$ ও $\triangle ECD$ এ`,
              String.raw`$$BD=DC\qquad\left[\,D,\;BC\text{ এর মধ্যবিন্দু}\,\right]$$`,
              String.raw`$$AD=DE\qquad\left[\,\text{অঙ্কনানুসারে}\,\right]$$`,
              String.raw`$$\text{অন্তর্ভুক্ত }\angle ADB=\text{অন্তর্ভুক্ত }\angle EDC\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
              String.raw`$$\therefore\;\triangle ABD\cong\triangle ECD\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
              String.raw`$$\therefore\;AB=EC$$`,
              String.raw`এখন $\triangle ACE$ এ,`,
              String.raw`$$AC+CE>AE\qquad\left[\,\text{উপপাদ্য }১৩\,\right]$$`,
              String.raw`$$\text{বা, } AC+AB>AD+DE$$`,
              String.raw`$$\therefore\;AB+AC>2AD$$`,
            ],
            answer: String.raw`$AB+AC>2AD$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $AD=\dfrac{1}{2}BC$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: (খ) এর মতোই $AD$ কে $E$ পর্যন্ত বর্ধিত করি যেন $AD=DE$ হয়। $B,E$ ও $C,E$ যোগ করি।`,
              String.raw`প্রমাণ: (খ) এ পাওয়া গেছে $\triangle ABD\cong\triangle ECD$, সুতরাং`,
              String.raw`$$AB=EC\qquad\text{এবং}\qquad \angle ABD=\angle ECD$$`,
              String.raw`$\angle ABD$ ও $\angle ECD$ একান্তর কোণ এবং এরা সমান, তাই`,
              String.raw`$$AB\parallel EC$$`,
              String.raw`$AB\parallel EC$ এবং $AC$ ছেদক, তাই $\angle BAC$ ও $\angle ACE$ ছেদকের একই পাশের অন্তঃস্থ কোণ।`,
              String.raw`$$\angle BAC+\angle ACE=180^{\circ}$$`,
              String.raw`$$\text{বা, } 90^{\circ}+\angle ACE=180^{\circ}$$`,
              String.raw`$$\therefore\;\angle ACE=90^{\circ}$$`,
              String.raw`এখন $\triangle BAC$ ও $\triangle ECA$ এ`,
              String.raw`$$AB=CE\qquad\left[\,\text{উপরে প্রমাণিত}\,\right]$$`,
              String.raw`$$AC=CA\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
              String.raw`$$\text{অন্তর্ভুক্ত }\angle BAC=\text{অন্তর্ভুক্ত }\angle ECA=90^{\circ}$$`,
              String.raw`$$\therefore\;\triangle BAC\cong\triangle ECA\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
              String.raw`$$\therefore\;BC=EA$$`,
              String.raw`আবার অঙ্কনানুসারে $EA=AD+DE=2AD$।`,
              String.raw`$$\therefore\;BC=2AD$$`,
              String.raw`$$\therefore\;AD=\frac{1}{2}BC$$`,
            ],
            answer: String.raw`$AD=\dfrac{1}{2}BC$ (প্রমাণিত)`,
          },
        },
      ],
    },
    {
      id: 22,
      group: TRI_MODEL_CQ,
      question: String.raw`$\triangle ABC$ এর $D$ ও $E$ যথাক্রমে $AB$ ও $AC$ এর মধ্যবিন্দু এবং $\angle B$ ও $\angle C$ এর সমদ্বিখণ্ডকদ্বয় $O$ বিন্দুতে মিলিত হয়েছে।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\triangle PQR$ সমবাহু ত্রিভুজের $QR$ বাহুকে $S$ পর্যন্ত বর্ধিত করা হলে $R$ বিন্দুতে উৎপন্ন সন্নিহিত অন্তঃস্থ কোণের পরিমাণ নির্ণয় করো।`,
          figure: "63-p22a",
          solution: {
            steps: [
              String.raw`$QR$ কে $S$ পর্যন্ত বর্ধিত করায় $R$ বিন্দুতে বহিঃস্থ কোণ $\angle PRS$ উৎপন্ন হয়েছে।`,
              String.raw`এই বহিঃস্থ কোণের সন্নিহিত অন্তঃস্থ কোণটি হলো $\angle PRQ$ — অর্থাৎ ত্রিভুজটির $R$ শীর্ষের নিজের কোণ।`,
              String.raw`$\triangle PQR$ সমবাহু, তাই এর তিনটি কোণই সমান।`,
              String.raw`$$\angle PQR+\angle QRP+\angle RPQ=180^{\circ}$$`,
              String.raw`$$\text{বা, } 3\angle QRP=180^{\circ}$$`,
              String.raw`$$\therefore\;\angle PRQ=60^{\circ}$$`,
              String.raw`(যাচাই: তাহলে বহিঃস্থ কোণ $\angle PRS=180^{\circ}-60^{\circ}=120^{\circ}$, যা বিপরীত অন্তঃস্থ কোণদ্বয়ের সমষ্টি $60^{\circ}+60^{\circ}$ এর সমান।)`,
            ],
            answer: String.raw`$60^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $DE\parallel BC$ এবং $DE=\dfrac{1}{2}BC$`,
          figure: "63-p22b",
          solution: {
            steps: [
              String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $AB$ ও $AC$ বাহুর মধ্যবিন্দু যথাক্রমে $D$ ও $E$। প্রমাণ করতে হবে যে, $DE\parallel BC$ এবং $DE=\dfrac{1}{2}BC$।`,
              String.raw`অঙ্কন: $D$ ও $E$ যোগ করে বর্ধিত করি যেন $EF=DE$ হয়। $C,\;F$ যোগ করি।`,
              String.raw`প্রমাণ (ধাপ ১): $\triangle ADE$ ও $\triangle CFE$ এ`,
              String.raw`$$AE=EC\qquad\left[\,\text{দেওয়া আছে}\,\right]$$`,
              String.raw`$$DE=EF\qquad\left[\,\text{অঙ্কনানুসারে}\,\right]$$`,
              String.raw`$$\text{অন্তর্ভুক্ত }\angle AED=\text{অন্তর্ভুক্ত }\angle CEF\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
              String.raw`$$\therefore\;\triangle ADE\cong\triangle CFE\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
              String.raw`$$\therefore\;\angle ADE=\angle EFC\qquad\text{এবং}\qquad AD=CF$$`,
              String.raw`$\angle ADE$ ও $\angle EFC$ একান্তর কোণ এবং এরা সমান, তাই`,
              String.raw`$$AD\parallel CF$$`,
              String.raw`আবার $BD=AD=CF$ এবং $BD\parallel CF$।`,
              String.raw`সুতরাং $BDFC$ একটি সামান্তরিক।`,
              String.raw`$$\therefore\;DF\parallel BC\qquad\text{বা}\qquad DE\parallel BC$$`,
              String.raw`প্রমাণ (ধাপ ২): সামান্তরিকের বিপরীত বাহুদ্বয় সমান, তাই`,
              String.raw`$$DF=BC$$`,
              String.raw`$$\text{বা, } DE+EF=BC$$`,
              String.raw`$$\text{বা, } DE+DE=BC$$`,
              String.raw`$$\text{বা, } 2DE=BC$$`,
              String.raw`$$\therefore\;DE\parallel BC\qquad\text{এবং}\qquad DE=\frac{1}{2}BC$$`,
            ],
            answer: String.raw`$DE\parallel BC$ এবং $DE=\dfrac{1}{2}BC$ (প্রমাণিত)`,
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $\angle BOC=90^{\circ}+\dfrac{1}{2}\angle A$`,
          figure: "63-p22c",
          solution: {
            steps: [
              String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle B$ ও $\angle C$ এর সমদ্বিখণ্ডকদ্বয় $O$ বিন্দুতে মিলিত হয়েছে। প্রমাণ করতে হবে যে, $\angle BOC=90^{\circ}+\dfrac{1}{2}\angle A$।`,
              String.raw`প্রমাণ: $BO$ ও $CO$ যথাক্রমে $\angle B$ ও $\angle C$ কে সমদ্বিখণ্ডিত করেছে, তাই`,
              String.raw`$$x=\angle OBC=\frac{1}{2}\angle B\qquad\text{এবং}\qquad y=\angle OCB=\frac{1}{2}\angle C$$`,
              String.raw`$\triangle BOC$ এ,`,
              String.raw`$$\angle BOC+x+y=180^{\circ}\qquad\left[\,\text{উপপাদ্য }৪\,\right]$$`,
              String.raw`$$\text{বা, }\angle BOC=180^{\circ}-\frac{1}{2}\left(\angle B+\angle C\right)$$`,
              String.raw`আবার $\triangle ABC$ এ,`,
              String.raw`$$\angle A+\angle B+\angle C=180^{\circ}$$`,
              String.raw`$$\text{বা, }\angle B+\angle C=180^{\circ}-\angle A$$`,
              String.raw`$$\therefore\;\angle BOC=180^{\circ}-\frac{1}{2}\left(180^{\circ}-\angle A\right)$$`,
              String.raw`$$=180^{\circ}-90^{\circ}+\frac{1}{2}\angle A$$`,
              String.raw`$$\therefore\;\angle BOC=90^{\circ}+\frac{1}{2}\angle A$$`,
            ],
            answer: String.raw`$\angle BOC=90^{\circ}+\dfrac{1}{2}\angle A$ (প্রমাণিত)`,
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২৩) ───────────────
    {
      id: 23,
      group: TRI_MODEL_SA,
      question: "সংক্ষিপ্ত-উত্তর প্রশ্ন।",
      parts: [
        {
          label: "ক",
          question: String.raw`$\triangle ABC$-এ $AB=AC$, $\angle BAC=80^{\circ}$ এবং $BC$-কে $D$ পর্যন্ত বর্ধিত করা হলে, $\angle ACD$ নির্ণয় করো।`,
          figure: "63-p23a",
          solution: {
            steps: [
              String.raw`$\triangle ABC$ এ $AB=AC$, তাই সমান বাহুদ্বয়ের বিপরীত কোণ দুইটিও সমান।`,
              String.raw`$$\angle ABC=\angle ACB\qquad\left[\,\text{উপপাদ্য }৬\,\right]$$`,
              String.raw`আবার,`,
              String.raw`$$\angle BAC+\angle ABC+\angle ACB=180^{\circ}$$`,
              String.raw`$$\text{বা, } 80^{\circ}+2\angle ABC=180^{\circ}$$`,
              String.raw`$$\text{বা, } 2\angle ABC=100^{\circ}$$`,
              String.raw`$$\therefore\;\angle ABC=\angle ACB=50^{\circ}$$`,
              String.raw`$BC$ কে $D$ পর্যন্ত বর্ধিত করায় $\angle ACD$ হলো $C$ বিন্দুর বহিঃস্থ কোণ।`,
              String.raw`$$\angle ACD=\angle BAC+\angle ABC\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
              String.raw`$$=80^{\circ}+50^{\circ}$$`,
              String.raw`$$\therefore\;\angle ACD=130^{\circ}$$`,
            ],
            answer: String.raw`$\angle ACD=130^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\triangle PQR$-এ $PQ=PR$ এবং $QR,\;PR$ ও $PQ$ বাহুর মধ্যবিন্দু যথাক্রমে $D,\;E$ ও $F$ হলে দেখাও যে, $DE=DF$।`,
          figure: "63-p23b",
          solution: {
            steps: [
              String.raw`$\triangle PQR$ এ $D$ ও $E$ যথাক্রমে $QR$ ও $PR$ বাহুর মধ্যবিন্দু।`,
              String.raw`$$\therefore\;DE=\frac{1}{2}PQ\qquad\left[\,\text{উপপাদ্য }১৪\,\right]$$`,
              String.raw`আবার $D$ ও $F$ যথাক্রমে $QR$ ও $PQ$ বাহুর মধ্যবিন্দু।`,
              String.raw`$$\therefore\;DF=\frac{1}{2}PR\qquad\left[\,\text{উপপাদ্য }১৪\,\right]$$`,
              String.raw`কিন্তু দেওয়া আছে $PQ=PR$।`,
              String.raw`$$\therefore\;\frac{1}{2}PQ=\frac{1}{2}PR$$`,
              String.raw`$$\therefore\;DE=DF$$`,
            ],
            answer: String.raw`$DE=DF$ (দেখানো হলো)`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\angle C$ ও $\angle D$ পরস্পর সম্পূরক এবং $\angle C-\angle D=60^{\circ}$ হলে, $\angle C$-এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$\angle C$ ও $\angle D$ পরস্পর সম্পূরক, তাই এদের সমষ্টি দুই সমকোণ।`,
              String.raw`$$\angle C+\angle D=180^{\circ}\qquad\cdots(i)$$`,
              String.raw`$$\text{আবার, }\angle C-\angle D=60^{\circ}\qquad\cdots(ii)$$`,
              String.raw`$(i)$ ও $(ii)$ যোগ করে,`,
              String.raw`$$2\angle C=240^{\circ}$$`,
              String.raw`$$\therefore\;\angle C=120^{\circ}$$`,
              String.raw`$(i)$ থেকে, $\angle D=180^{\circ}-120^{\circ}=60^{\circ}$; যাচাই: $120^{\circ}-60^{\circ}=60^{\circ}$।`,
            ],
            answer: String.raw`$\angle C=120^{\circ}$`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$\triangle ABC$-এর $BC$ বাহুর উপর যেকোনো বিন্দু $D$ হলে প্রমাণ করো যে, $AB+BC+AC>2AD$।`,
          figure: "63-p23d",
          solution: {
            steps: [
              String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $BC$ বাহুর উপর যেকোনো একটি বিন্দু $D$ এবং $A,\;D$ যোগ করা হয়েছে। প্রমাণ করতে হবে যে, $AB+BC+AC>2AD$।`,
              String.raw`প্রমাণ: $\triangle ABD$ এ,`,
              String.raw`$$AB+BD>AD\qquad\left[\,\text{উপপাদ্য }১৩\,\right]\qquad\cdots(i)$$`,
              String.raw`আবার $\triangle ACD$ এ,`,
              String.raw`$$AC+CD>AD\qquad\left[\,\text{উপপাদ্য }১৩\,\right]\qquad\cdots(ii)$$`,
              String.raw`$(i)$ ও $(ii)$ যোগ করে,`,
              String.raw`$$AB+BD+AC+CD>2AD$$`,
              String.raw`$$\text{বা, } AB+AC+(BD+CD)>2AD$$`,
              String.raw`$D$ বিন্দুটি $BC$ বাহুর উপর, তাই $BD+CD=BC$।`,
              String.raw`$$\therefore\;AB+BC+AC>2AD$$`,
            ],
            answer: String.raw`$AB+BC+AC>2AD$ (প্রমাণিত)`,
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ৭ · ব্যবহারিক জ্যামিতি
// ─────────────────────────────────────────────────────────────────────────────
//
// এ অধ্যায়ে প্রশ্নের উত্তর একটি সংখ্যা নয়, একটি অঙ্কন। তাই প্রতিটি সমাধান
// বইয়ের ধাঁচে তিন অংশে লেখা — উপাত্ত যাচাই, অঙ্কনের বিবরণ, প্রমাণ — আর
// শেষে সম্পূর্ণ অঙ্কনটি (`figures/scenes71.ts`, `figures/scenes72.ts`)
// `solution.figure` হিসেবে সমাধানের ভেতরে রাখা হয়েছে, যাতে প্রশ্নের পাশে
// দেখে উত্তর আগেই ফাঁস না হয়।
//
// যে প্রশ্নে উপাত্ত অক্ষরে দেওয়া (a, s, ∠x …), সেখানে চিত্রের জন্য একসেট মান
// ধরে নেওয়া হয়েছে এবং সমাধানে তা বলে দেওয়া হয়েছে; অঙ্কনের ধাপ ঐ মানের
// উপর নির্ভর করে না। কম্পাসে যে কোণ আঁকা যায় না (50°, 80°, 85° …), তা
// চাঁদা দিয়ে আঁকতে বলা হয়েছে।

const PG_TRI_DRAW = "ত্রিভুজ অঙ্কন (১ – ২)";
const PG_TRI_SPECIAL = "বিশেষ উপাত্তে ত্রিভুজ অঙ্কন (৩ – ৭)";
const PG_QUAD_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৩)";
const PG_QUAD_DRAW = "চতুর্ভুজ অঙ্কন (৪ – ১১)";
const PG_QUAD_CQ = "সৃজনশীল প্রশ্ন (১২ – ১৩)";
const PG_QUAD_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৪ – ১৭)";
const PG_QUAD_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল (১৮)";
const PG_QUAD_MODEL_SA = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (১৯)";

const exercise71: Exercise = {
  id: "7.1",
  bnId: "অনুশীলনী ৭.১",
  title: "ত্রিভুজ অঙ্কন",
  bookPages: "১৪৩-১৪৪",
  formulas: [
    {
      title: "যে তিনটি উপাত্তে একটি নির্দিষ্ট ত্রিভুজ আঁকা যায়",
      formulas: [
        {
          statement: "১. তিনটি বাহু",
          note: "যেকোনো দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর হতে হবে, নইলে চাপ দুইটি মিলবে না।",
        },
        { statement: "২. দুইটি বাহু ও এদের অন্তর্ভুক্ত কোণ" },
        {
          statement: "৩. দুইটি কোণ ও এদের সংলগ্ন বাহু",
          note: String.raw`কোণ দুইটির সমষ্টি $180^{\circ}$ এর কম হতে হবে।`,
        },
        {
          statement: "৪. দুইটি কোণ ও একটির বিপরীত বাহু",
          note: String.raw`তৃতীয় কোণ $=180^{\circ}-$ (দুই কোণের সমষ্টি) বের করলে এটি ৩ নম্বর ক্ষেত্রে পরিণত হয়।`,
        },
        {
          statement: "৫. দুইটি বাহু ও এদের একটির বিপরীত কোণ",
          note: "বিপরীত বাহুটি অপর বাহুর চেয়ে ছোট হলে চাপটি ভূমিকে দুই বিন্দুতে ছেদ করতে পারে — তখন দুইটি ত্রিভুজই শর্ত মানে।",
        },
        { statement: "৬. সমকোণী ত্রিভুজের অতিভুজ ও অপর একটি বাহু" },
        {
          statement: "তিনটি কোণ দিলে ত্রিভুজ নির্দিষ্ট হয় না",
          note: "একই তিন কোণে বিভিন্ন আকারের অসংখ্য সদৃশ ত্রিভুজ আঁকা যায়। নির্দিষ্ট ত্রিভুজের জন্য তিনটি অনির্ভরশীল উপাত্ত লাগে।",
        },
      ],
    },
    {
      title: "সম্পাদ্য ১ – ৩",
      formulas: [
        {
          statement: String.raw`সম্পাদ্য ১. ভূমি $a$, ভূমি সংলগ্ন কোণ $\angle x$ ও অপর দুই বাহুর সমষ্টি $s$`,
          note: String.raw`$BC=a$, $\angle CBF=\angle x$, $BF$ থেকে $BD=s$। $C,D$ যোগ করে $\angle BDC$ এর সমান $\angle DCA$ আঁকলে $CA$, $BD$ কে $A$ তে ছেদ করে। $AC=AD$ বলে $BA+AC=BD=s$। বিকল্পে $CD$ এর লম্বসমদ্বিখণ্ডক $BD$ কে $A$ তে ছেদ করে।`,
        },
        {
          statement: String.raw`সম্পাদ্য ২. ভূমি $a$, ভূমি সংলগ্ন সূক্ষ্মকোণ $\angle x$ ও অপর দুই বাহুর অন্তর $d$`,
          note: String.raw`$BC=a$, $\angle CBE=\angle x$, $BE$ থেকে $BD=d$। $C,D$ যোগ করে $\angle EDC$ এর সমান $\angle DCA$ আঁকলে $CA$, $BE$ কে $A$ তে ছেদ করে। $AD=AC$ বলে $AB-AC=BD=d$।`,
        },
        {
          statement: String.raw`সম্পাদ্য ৩. ভূমি সংলগ্ন দুই কোণ $\angle x,\angle y$ ও পরিসীমা $p$`,
          note: String.raw`$DE=p$ এর একই পাশে $\angle x$ ও $\angle y$ এঁকে এদের দ্বিখণ্ডকের ছেদবিন্দু $A$। $\angle DAB=\angle ADE$ ও $\angle EAC=\angle AED$ আঁকলে $B,C$ পাওয়া যায়। $DB=BA$ ও $CE=CA$ বলে পরিসীমা $=DE=p$।`,
        },
      ],
    },
    {
      title: "বারবার লাগে এমন অঙ্কন",
      formulas: [
        {
          statement: String.raw`$60^{\circ}$ কোণ`,
          note: String.raw`শীর্ষবিন্দুকে কেন্দ্র করে যেকোনো ব্যাসার্ধে চাপ আঁকি যা বাহুকে $M$ এ কাটে; $M$ কে কেন্দ্র করে একই ব্যাসার্ধে চাপ আঁকি যা আগের চাপকে $N$ এ কাটে। তিন বিন্দু সমবাহু ত্রিভুজ গঠন করে, তাই কোণটি $60^{\circ}$।`,
        },
        {
          statement: String.raw`$90^{\circ}$, $45^{\circ}$, $30^{\circ}$, $75^{\circ}$, $135^{\circ}$`,
          note: String.raw`লম্ব এঁকে $90^{\circ}$; $90^{\circ}$ কে সমদ্বিখণ্ডিত করে $45^{\circ}$; $60^{\circ}$ কে সমদ্বিখণ্ডিত করে $30^{\circ}$; $60^{\circ}$ ও $90^{\circ}$ এর মাঝের কোণ সমদ্বিখণ্ডিত করে $75^{\circ}$; $90^{\circ}+45^{\circ}=135^{\circ}$। অন্য কোণ চাঁদা দিয়ে আঁকা হয়।`,
        },
        {
          statement: "প্রদত্ত কোণের সমান কোণ আঁকা",
          note: "প্রদত্ত কোণের শীর্ষকে কেন্দ্র করে যেকোনো ব্যাসার্ধে চাপ আঁকি; নতুন শীর্ষে একই ব্যাসার্ধে চাপ আঁকি; প্রদত্ত কোণের চাপ দুই বাহুকে যে দূরত্বে কেটেছে, সেই দূরত্ব নতুন চাপে কেটে নিয়ে শীর্ষের সাথে যোগ করি।",
        },
        {
          statement: "রেখাংশের লম্বসমদ্বিখণ্ডক",
          note: "রেখাংশের দুই প্রান্তকে কেন্দ্র করে অর্ধেকের বেশি ব্যাসার্ধে উভয় পাশে চাপ আঁকি; চাপের ছেদবিন্দু দুইটি যোগ করলেই লম্বসমদ্বিখণ্ডক। এর উপরের প্রতিটি বিন্দু রেখাংশের দুই প্রান্ত থেকে সমদূরবর্তী।",
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ১ — book page ১৪১.
    {
      id: 1,
      question: String.raw`একটি ত্রিভুজ $ABC$ আঁক, যার $\angle B=60^{\circ}$, $\angle C=45^{\circ}$ এবং পরিসীমা $AB+BC+CA=11$ সে.মি.।`,
      solution: {
        steps: [
          String.raw`এটি সম্পাদ্য ৩ এর প্রয়োগ: ভূমি সংলগ্ন দুইটি কোণ ও পরিসীমা দেওয়া আছে।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. রেখাংশ $PQ=11$ সে.মি. আঁকি।`,
          String.raw`২. $PQ$ রেখাংশের একই পাশে $P$ ও $Q$ বিন্দুতে যথাক্রমে $\angle QPL=60^{\circ}$ ও $\angle PQM=45^{\circ}$ আঁকি।`,
          String.raw`৩. কোণ দুইটির দ্বিখণ্ডক $PG$ ও $QH$ আঁকি। মনে করি, $PG$ ও $QH$ রশ্মিদ্বয় পরস্পরকে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $PA$ ও $QA$ রেখাংশের লম্বসমদ্বিখণ্ডক আঁকি, যা $PQ$ কে যথাক্রমে $B$ ও $C$ বিন্দুতে ছেদ করে।`,
          String.raw`৫. $A,B$ এবং $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: $B$ বিন্দু $PA$ এর লম্বসমদ্বিখণ্ডকের উপর, তাই $BP=BA$।`,
          String.raw`$$\therefore\;\angle BAP=\angle BPA=\tfrac12\times 60^{\circ}=30^{\circ}$$`,
          String.raw`$\triangle ABP$ এর বহিঃস্থ কোণ,`,
          String.raw`$$\angle ABC=\angle BPA+\angle BAP=30^{\circ}+30^{\circ}=60^{\circ}$$`,
          String.raw`তেমনি $C$ বিন্দু $QA$ এর লম্বসমদ্বিখণ্ডকের উপর, তাই $CQ=CA$ এবং`,
          String.raw`$$\angle ACB=\angle CQA+\angle CAQ=22\tfrac12^{\circ}+22\tfrac12^{\circ}=45^{\circ}$$`,
          String.raw`আবার,`,
          String.raw`$$AB+BC+CA=PB+BC+CQ=PQ=11\text{ সে.মি.}$$`,
        ],
        answer: String.raw`$\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ, যার $\angle B=60^{\circ}$, $\angle C=45^{\circ}$ ও পরিসীমা $11$ সে.মি.।`,
        figure: "71-ex1",
      },
    },
    // উদাহরণ ২ — book pages ১৪২-১৪৩.
    {
      id: 2,
      question: String.raw`একটি ত্রিভুজের ভূমি $a=3$ সে.মি., ভূমি সংলগ্ন সূক্ষ্মকোণ $45^{\circ}$ এবং অপর বাহু দুইটির সমষ্টি $s=6$ সে.মি.।`,
      parts: [
        {
          label: "ক",
          question: "উদ্দীপকের তথ্যগুলো চিত্রে প্রকাশ করো।",
          solution: {
            steps: [
              String.raw`$a=3$ সে.মি. ও $s=6$ সে.মি. দৈর্ঘ্যের দুইটি রেখাংশ আঁকি।`,
              String.raw`$45^{\circ}$ কোণের জন্য: একটি রশ্মির প্রান্তবিন্দুতে লম্ব এঁকে $90^{\circ}$ কোণ তৈরি করি, তারপর কোণটিকে সমদ্বিখণ্ডিত করি।`,
              String.raw`$$\tfrac12\times 90^{\circ}=45^{\circ}=\angle x$$`,
            ],
            answer: String.raw`চিত্রে $a$, $s$ ও $\angle x=45^{\circ}$ দেখানো হলো।`,
            figure: "71-ex2a",
          },
        },
        {
          label: "খ",
          question: "ত্রিভুজটি অঙ্কন করো। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)",
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. $AX$ যেকোনো রশ্মি থেকে $AB=a=3$ সে.মি. কাটি।`,
              String.raw`২. $A$ বিন্দুতে $\angle XAE=\angle x=45^{\circ}$ আঁকি এবং $AE$ থেকে $AD=s=6$ সে.মি. নিই।`,
              String.raw`৩. $B,D$ যোগ করি। $B$ বিন্দুতে $\angle ADB$ এর সমান করে $\angle DBC$ আঁকি। $BC$ রেখাংশ $AD$ কে $C$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle BCD$ এ $\angle CBD=\angle CDB$ [অঙ্কন অনুসারে]`,
              String.raw`$$\therefore\;CB=CD$$`,
              String.raw`$$\therefore\;AC+CB=AC+CD=AD=6\text{ সে.মি.}=s$$`,
              String.raw`এবং $AB=3$ সে.মি. $=a$, $\angle BAC=45^{\circ}$।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-ex2b",
          },
        },
        {
          label: "গ",
          question: String.raw`একটি বর্গের পরিসীমা $2s$ হলে বর্গটি আঁকো। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)`,
          solution: {
            steps: [
              String.raw`বর্গের পরিসীমা $p=2s=2\times 6=12$ সে.মি.। চার বাহু সমান, তাই প্রতিটি বাহু $\tfrac14p$।`,
              String.raw`$p$ রেখাংশের লম্বসমদ্বিখণ্ডক এঁকে অর্ধেক করি, সেই অর্ধেককে আবার সমদ্বিখণ্ডিত করে $\tfrac14p=3$ সে.মি. পাই।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. $AX$ যেকোনো রশ্মি থেকে $AB=\tfrac14p$ কেটে নিই।`,
              String.raw`২. $A$ বিন্দুতে $AE\perp AB$ আঁকি। $AE$ থেকে $AD=AB$ কাটি।`,
              String.raw`৩. $B$ ও $D$ বিন্দুকে কেন্দ্র করে $\tfrac14p$ এর সমান ব্যাসার্ধ নিয়ে $\angle BAD$ এর অভ্যন্তরে দুইটি বৃত্তচাপ আঁকি। বৃত্তচাপদ্বয় পরস্পর $C$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $B,C$ এবং $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট বর্গক্ষেত্র।`,
              String.raw`প্রমাণ: $AB=BC=CD=DA=\tfrac14p$ এবং $\angle BAD=90^{\circ}$। চারটি বাহু সমান ও একটি কোণ সমকোণ বলে $ABCD$ বর্গ, এবং এর পরিসীমা $4\times\tfrac14p=p=2s$।`,
            ],
            answer: String.raw`$ABCD$ ই উদ্দিষ্ট বর্গক্ষেত্র (বাহু $3$ সে.মি.)।`,
            figure: "71-ex2c",
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── ত্রিভুজ অঙ্কন (১ – ২) ───────────────
    {
      id: 1,
      group: PG_TRI_DRAW,
      question: "নিম্নে প্রদত্ত উপাত্ত নিয়ে ত্রিভুজ অঙ্কন করো:",
      parts: [
        {
          label: "ক",
          question: String.raw`তিনটি বাহুর দৈর্ঘ্য যথাক্রমে $3$ সে.মি., $3.5$ সে.মি., $2.8$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`যাচাই: $3+2.8=5.8>3.5$, $3+3.5>2.8$, $3.5+2.8>3$ — যেকোনো দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বড়, তাই ত্রিভুজ আঁকা সম্ভব।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BD$ থেকে $BC=3$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ কে কেন্দ্র করে $2.8$ সে.মি. ব্যাসার্ধ নিয়ে $BC$ এর এক পাশে একটি বৃত্তচাপ আঁকি।`,
              String.raw`৩. $C$ কে কেন্দ্র করে $3.5$ সে.মি. ব্যাসার্ধ নিয়ে একই পাশে আরেকটি বৃত্তচাপ আঁকি। চাপ দুইটি $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,B$ ও $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $BC=3$ সে.মি., $AB=2.8$ সে.মি. ($B$ কেন্দ্রিক চাপের ব্যাসার্ধ) এবং $AC=3.5$ সে.মি. ($C$ কেন্দ্রিক চাপের ব্যাসার্ধ)।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p1a",
          },
        },
        {
          label: "খ",
          question: String.raw`দুইটি বাহুর দৈর্ঘ্য $4$ সে.মি., $3$ সে.মি. এবং অন্তর্ভুক্ত কোণ $60^{\circ}$।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BD$ থেকে $BC=4$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে $\angle CBE=60^{\circ}$ আঁকি ($B$ কেন্দ্রে যেকোনো ব্যাসার্ধের চাপ যেখানে $BD$ কে কাটে, সেখান থেকে একই ব্যাসার্ধে চাপ কেটে)।`,
              String.raw`৩. $BE$ থেকে $BA=3$ সে.মি. কেটে নিই।`,
              String.raw`৪. $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $BC=4$ সে.মি., $BA=3$ সে.মি. এবং এদের অন্তর্ভুক্ত $\angle ABC=60^{\circ}$।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p1b",
          },
        },
        {
          label: "গ",
          question: String.raw`দুইটি কোণ $60^{\circ}$ ও $45^{\circ}$ এবং এদের সংলগ্ন বাহুর দৈর্ঘ্য $5$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`যাচাই: $60^{\circ}+45^{\circ}=105^{\circ}<180^{\circ}$, তাই ত্রিভুজ আঁকা সম্ভব।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BD$ থেকে $BC=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $BC$ এর একই পাশে $B$ বিন্দুতে $\angle CBE=60^{\circ}$ এবং $C$ বিন্দুতে $\angle BCF=45^{\circ}$ আঁকি ($C$ তে লম্ব এঁকে তাকে সমদ্বিখণ্ডিত করে)।`,
              String.raw`৩. $BE$ ও $CF$ রশ্মিদ্বয় পরস্পরকে $A$ বিন্দুতে ছেদ করে। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $BC=5$ সে.মি., $\angle ABC=60^{\circ}$ এবং $\angle ACB=45^{\circ}$ — কোণ দুইটির সংলগ্ন বাহু $BC$।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p1c",
          },
        },
        {
          label: "ঘ",
          question: String.raw`দুইটি কোণ $60^{\circ}$ ও $45^{\circ}$ এবং $45^{\circ}$ কোণের বিপরীত বাহুর দৈর্ঘ্য $5$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`মনে করি, $\angle B=60^{\circ}$, $\angle C=45^{\circ}$ এবং $\angle C$ এর বিপরীত বাহু $AB=5$ সে.মি.।`,
              String.raw`তৃতীয় কোণ,`,
              String.raw`$$\angle A=180^{\circ}-(60^{\circ}+45^{\circ})=75^{\circ}$$`,
              String.raw`সুতরাং $AB$ বাহুর দুই প্রান্তের কোণ $60^{\circ}$ ও $75^{\circ}$ জানা — এটি এখন "দুইটি কোণ ও সংলগ্ন বাহু" এর ক্ষেত্র।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BD$ নিই। $B$ বিন্দুতে $BD$ এর সাথে $60^{\circ}$ কোণ করে একটি রশ্মি আঁকি এবং তা থেকে $BA=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $A$ বিন্দুতে $AB$ এর সাথে $BD$ এর দিকে $\angle BAC=75^{\circ}$ আঁকি ($60^{\circ}$ ও $90^{\circ}$ এর মাঝের কোণ সমদ্বিখণ্ডিত করে)। এর বাহু $BD$ কে $C$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle ABC$ এ $\angle B=60^{\circ}$, $\angle A=75^{\circ}$, তাই`,
              String.raw`$$\angle C=180^{\circ}-(60^{\circ}+75^{\circ})=45^{\circ}$$`,
              String.raw`এবং $45^{\circ}$ কোণের বিপরীত বাহু $AB=5$ সে.মি.।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p1d",
          },
        },
        {
          label: "ঙ",
          question: String.raw`দুইটি বাহুর দৈর্ঘ্য যথাক্রমে $4.5$ সে.মি. ও $3.5$ সে.মি. এবং দ্বিতীয় বাহুর বিপরীত কোণ $30^{\circ}$।`,
          solution: {
            steps: [
              String.raw`মনে করি, $AB=4.5$ সে.মি., $AC=3.5$ সে.মি. এবং $AC$ এর বিপরীত কোণ $\angle B=30^{\circ}$।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BD$ নিই। $B$ বিন্দুতে $60^{\circ}$ কোণ এঁকে তাকে সমদ্বিখণ্ডিত করে $BD$ এর সাথে $30^{\circ}$ কোণ করে একটি রশ্মি আঁকি।`,
              String.raw`২. ঐ রশ্মি থেকে $BA=4.5$ সে.মি. কেটে নিই।`,
              String.raw`৩. $A$ কে কেন্দ্র করে $3.5$ সে.মি. ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি যা $BD$ কে $C$ ও $C'$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,C$ ও $A,C'$ যোগ করি। তাহলে $\triangle ABC$ ও $\triangle ABC'$ উভয়ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: উভয় ত্রিভুজে $AB=4.5$ সে.মি., $\angle B=30^{\circ}$ এবং $AC=AC'=3.5$ সে.মি. (একই চাপের ব্যাসার্ধ)।`,
              String.raw`দুইটি ত্রিভুজ কেন: $A$ থেকে $BD$ এর দূরত্ব $4.5\times\sin 30^{\circ}=2.25$ সে.মি.। চাপের ব্যাসার্ধ $3.5$ এর চেয়ে বড় কিন্তু $AB=4.5$ এর চেয়ে ছোট, তাই চাপটি $BD$ কে $B$ এর একই পাশে দুইবার কাটে।`,
            ],
            answer: String.raw`$\triangle ABC$ ও $\triangle ABC'$ — দুইটি ত্রিভুজই শর্ত পূরণ করে।`,
            figure: "71-p1e",
          },
        },
        {
          label: "চ",
          question: String.raw`সমকোণী ত্রিভুজের অতিভুজ ও একটি বাহুর দৈর্ঘ্য যথাক্রমে $6$ সে.মি. ও $4$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BX$ নিই এবং $B$ বিন্দুতে $BY\perp BX$ আঁকি।`,
              String.raw`২. $BX$ থেকে $BC=4$ সে.মি. কেটে নিই।`,
              String.raw`৩. $C$ কে কেন্দ্র করে $6$ সে.মি. ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি যা $BY$ কে $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $\angle ABC=90^{\circ}$, $BC=4$ সে.মি. এবং অতিভুজ $AC=6$ সে.মি.।`,
              String.raw`যাচাই: $AB=\sqrt{6^{2}-4^{2}}=\sqrt{20}\approx 4.47$ সে.মি. — মেপে দেখলে এর কাছাকাছি পাওয়া যাবে।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় সমকোণী ত্রিভুজ।`,
            figure: "71-p1f",
          },
        },
      ],
    },
    {
      id: 2,
      group: PG_TRI_DRAW,
      question: "নিম্নে প্রদত্ত উপাত্ত নিয়ে ত্রিভুজ অঙ্কন করো।",
      parts: [
        {
          label: "ক",
          question: String.raw`ভূমি $3.5$ সে.মি., ভূমি সংলগ্ন একটি কোণ $60^{\circ}$ ও অপর দুই বাহুর সমষ্টি $8$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`এটি সম্পাদ্য ১ এর প্রয়োগ।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BE$ থেকে $BC=3.5$ সে.মি. কেটে নিই। $B$ বিন্দুতে $\angle CBF=60^{\circ}$ আঁকি।`,
              String.raw`২. $BF$ রশ্মি থেকে $BD=8$ সে.মি. কেটে নিই।`,
              String.raw`৩. $C,D$ যোগ করি। $DC$ এর যে পাশে $B$ আছে সে পাশে $C$ বিন্দুতে $\angle BDC$ এর সমান $\angle DCA$ আঁকি, যার বাহু $BD$ কে $A$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle ACD$ এ $\angle ADC=\angle ACD$ [অঙ্কন অনুসারে]`,
              String.raw`$$\therefore\;AC=AD$$`,
              String.raw`$$\therefore\;BA+AC=BA+AD=BD=8\text{ সে.মি.}$$`,
              String.raw`এবং $BC=3.5$ সে.মি., $\angle ABC=60^{\circ}$।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p2a",
          },
        },
        {
          label: "খ",
          question: String.raw`ভূমি $5$ সে.মি., ভূমি সংলগ্ন একটি কোণ $45^{\circ}$ ও অপর দুই বাহুর অন্তর $1$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`এটি সম্পাদ্য ২ এর প্রয়োগ ($45^{\circ}$ সূক্ষ্মকোণ)।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BF$ থেকে $BC=5$ সে.মি. কেটে নিই। $B$ বিন্দুতে $\angle CBE=45^{\circ}$ আঁকি।`,
              String.raw`২. $BE$ রশ্মি থেকে $BD=1$ সে.মি. কেটে নিই।`,
              String.raw`৩. $C,D$ যোগ করি। $DC$ এর যে পাশে $E$ আছে সে পাশে $C$ বিন্দুতে $\angle EDC$ এর সমান $\angle DCA$ আঁকি। $CA$ রশ্মি $BE$ কে $A$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle ACD$ এ $\angle ACD=\angle ADC$ [অঙ্কন অনুসারে]`,
              String.raw`$$\therefore\;AD=AC$$`,
              String.raw`$$\therefore\;AB-AC=AB-AD=BD=1\text{ সে.মি.}$$`,
              String.raw`এবং $BC=5$ সে.মি., $\angle ABC=45^{\circ}$।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p2b",
          },
        },
        {
          label: "গ",
          question: String.raw`ভূমি সংলগ্ন কোণ দুইটি যথাক্রমে $60^{\circ}$ ও $45^{\circ}$ ও পরিসীমা $12$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`এটি সম্পাদ্য ৩ এর প্রয়োগ।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $DF$ থেকে পরিসীমার সমান $DE=12$ সে.মি. কেটে নিই।`,
              String.raw`২. $DE$ এর একই পাশে $D$ বিন্দুতে $\angle EDL=60^{\circ}$ এবং $E$ বিন্দুতে $\angle DEM=45^{\circ}$ আঁকি।`,
              String.raw`৩. কোণ দুইটির দ্বিখণ্ডক $DG$ ও $EH$ আঁকি; এরা পরস্পরকে $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A$ বিন্দুতে $\angle ADE$ এর সমান $\angle DAB$ এবং $\angle AED$ এর সমান $\angle EAC$ আঁকি। $AB$ ও $AC$ রশ্মিদ্বয় $DE$ কে যথাক্রমে $B$ ও $C$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle ABD$ এ $\angle ADB=\angle DAB$, $\therefore AB=DB$।`,
              String.raw`$\triangle ACE$ এ $\angle AEC=\angle EAC$, $\therefore CA=CE$।`,
              String.raw`$$\therefore\;AB+BC+CA=DB+BC+CE=DE=12\text{ সে.মি.}$$`,
              String.raw`$$\angle ABC=\angle ADB+\angle DAB=30^{\circ}+30^{\circ}=60^{\circ}$$`,
              String.raw`$$\angle ACB=\angle AEC+\angle EAC=22\tfrac12^{\circ}+22\tfrac12^{\circ}=45^{\circ}$$`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "71-p2c",
          },
        },
      ],
    },

    // ─────────────── বিশেষ উপাত্তে ত্রিভুজ অঙ্কন (৩ – ৭) ───────────────
    {
      id: 3,
      group: PG_TRI_SPECIAL,
      question:
        "একটি ত্রিভুজের ভূমি সংলগ্ন দুইটি কোণ এবং শীর্ষ থেকে ভূমির উপর অঙ্কিত লম্বের দৈর্ঘ্য দেওয়া আছে। ত্রিভুজটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, ভূমি সংলগ্ন কোণ দুইটি $\angle x$ ও $\angle y$ এবং লম্বের দৈর্ঘ্য $h$। (চিত্রে $\angle x=60^{\circ}$, $\angle y=45^{\circ}$, $h=3$ সে.মি. নেওয়া হয়েছে।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $BX$ নিই। $BX$ এর যেকোনো বিন্দুতে লম্ব এঁকে তা থেকে $h$ এর সমান অংশ কেটে নিই এবং ঐ প্রান্তবিন্দু দিয়ে $PQ\parallel BX$ আঁকি।`,
          String.raw`২. $B$ বিন্দুতে $\angle XBA=\angle x$ আঁকি, যার বাহু $PQ$ কে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $A$ বিন্দুতে $\angle QAC=\angle y$ আঁকি, যার বাহু $BX$ কে $C$ বিন্দুতে ছেদ করে।`,
          String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: $PQ\parallel BX$ এবং $AC$ ছেদক, তাই`,
          String.raw`$$\angle ACB=\angle QAC=\angle y\qquad[\text{একান্তর কোণ}]$$`,
          String.raw`আবার $\angle ABC=\angle x$ [অঙ্কন অনুসারে]।`,
          String.raw`$A$ থেকে $BX$ এর উপর লম্ব $AN$ আঁকলে $AN$ হলো সমান্তরাল রেখাদ্বয়ের দূরত্ব, অর্থাৎ $AN=h$।`,
          String.raw`শর্ত: $\angle x+\angle y<180^{\circ}$ হতে হবে।`,
        ],
        answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
        figure: "71-p3",
      },
    },
    {
      id: 4,
      group: PG_TRI_SPECIAL,
      question:
        "সমকোণী ত্রিভুজের অতিভুজ ও অপর দুই বাহুর সমষ্টি দেওয়া আছে। ত্রিভুজটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, অতিভুজ $a$ এবং অপর দুই বাহুর সমষ্টি $s$। (চিত্রে $a=5$ সে.মি., $s=7$ সে.মি.।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $DX$ থেকে $DC=s$ কেটে নিই।`,
          String.raw`২. $D$ বিন্দুতে $\angle CDZ=45^{\circ}$ আঁকি।`,
          String.raw`৩. $C$ কে কেন্দ্র করে $a$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি যা $DZ$ কে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $A$ থেকে $DC$ এর উপর $AB$ লম্ব আঁকি। $A,C$ যোগ করি।`,
          String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: $\triangle ABD$ এ $\angle ABD=90^{\circ}$ ও $\angle ADB=45^{\circ}$, তাই $\angle DAB=45^{\circ}$।`,
          String.raw`$$\therefore\;AB=DB$$`,
          String.raw`$$\therefore\;AB+BC=DB+BC=DC=s$$`,
          String.raw`আবার $\angle ABC=90^{\circ}$ এবং অতিভুজ $AC=a$ [অঙ্কন অনুসারে]।`,
          String.raw`লক্ষণীয়: চাপটি $DZ$ কে সাধারণত দুইটি বিন্দুতে কাটে; দুইটি থেকেই একই ত্রিভুজ পাওয়া যায়, কেবল বাহু দুইটির স্থান বদলায় (চিত্রে $3$ ও $4$ সে.মি.)। চাপ $DZ$ কে কাটতে হলে $a<s<\sqrt{2}\,a$ হতে হবে।`,
        ],
        answer: String.raw`$\triangle ABC$ ই নির্ণেয় সমকোণী ত্রিভুজ।`,
        figure: "71-p4",
      },
    },
    {
      id: 5,
      group: PG_TRI_SPECIAL,
      question:
        "ত্রিভুজের ভূমি সংলগ্ন একটি কোণ, উচ্চতা ও অপর দুই বাহুর সমষ্টি দেওয়া আছে। ত্রিভুজটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, ভূমি সংলগ্ন কোণ $\angle x$, উচ্চতা $h$ এবং অপর দুই বাহুর সমষ্টি $s$। (চিত্রে $\angle x=60^{\circ}$, $h=3$ সে.মি., $s=7$ সে.মি.।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $BF$ নিই। $B$ বিন্দুতে $BF$ এর সাথে $\angle x$ কোণ করে একটি রশ্মি আঁকি এবং তা থেকে $BD=s$ কেটে নিই।`,
          String.raw`২. $BF$ থেকে $h$ দূরত্বে $PQ\parallel BF$ আঁকি ($BF$ এর উপর লম্ব এঁকে তা থেকে $h$ কেটে)। $PQ$ রেখা $BD$ কে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $A$ কে কেন্দ্র করে $AD$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি যা $BF$ কে $C$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AC=AD$।`,
          String.raw`$$\therefore\;AB+AC=AB+AD=BD=s$$`,
          String.raw`$\angle ABC=\angle x$ এবং $A$ থেকে $BF$ এর উপর লম্ব $AN$ হলো সমান্তরাল রেখাদ্বয়ের দূরত্ব, অর্থাৎ উচ্চতা $AN=h$।`,
        ],
        answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
        figure: "71-p5",
      },
    },
    {
      id: 6,
      group: PG_TRI_SPECIAL,
      question: "সমবাহু ত্রিভুজের পরিসীমা দেওয়া আছে। ত্রিভুজটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, সমবাহু ত্রিভুজের পরিসীমা $p$। তিন বাহু সমান, তাই প্রতিটি বাহু $\tfrac13p$। (চিত্রে $p=9$ সে.মি., বাহু $3$ সে.মি.।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. রেখাংশ $PQ=p$ আঁকি। $P$ বিন্দু থেকে যেকোনো সূক্ষ্মকোণে একটি রশ্মি $PZ$ আঁকি এবং তা থেকে পরপর তিনটি সমান অংশ কেটে নিই।`,
          String.raw`২. শেষ ছেদবিন্দুকে $Q$ এর সাথে যোগ করি এবং বাকি দুই ছেদবিন্দু দিয়ে ঐ রেখার সমান্তরাল রেখা আঁকি, যারা $PQ$ কে $R$ ও $S$ বিন্দুতে ছেদ করে। তাহলে $PR=RS=SQ=\tfrac13p$।`,
          String.raw`৩. যেকোনো রশ্মি থেকে $BC=PR=\tfrac13p$ কেটে নিই।`,
          String.raw`৪. $B$ ও $C$ কে কেন্দ্র করে $\tfrac13p$ ব্যাসার্ধ নিয়ে $BC$ এর একই পাশে দুইটি বৃত্তচাপ আঁকি, যারা $A$ বিন্দুতে ছেদ করে। $A,B$ ও $A,C$ যোগ করি।`,
          String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: কতকগুলো সমান্তরাল রেখা কোনো ছেদককে সমান সমান অংশে বিভক্ত করলে অপর যেকোনো ছেদককেও সমান অংশে বিভক্ত করে; তাই $PR=RS=SQ=\tfrac13p$।`,
          String.raw`অঙ্কন অনুসারে $AB=BC=CA=\tfrac13p$, সুতরাং ত্রিভুজটি সমবাহু এবং`,
          String.raw`$$AB+BC+CA=3\times\tfrac13p=p$$`,
        ],
        answer: String.raw`$\triangle ABC$ ই নির্ণেয় সমবাহু ত্রিভুজ।`,
        figure: "71-p6",
      },
    },
    {
      id: 7,
      group: PG_TRI_SPECIAL,
      question:
        "ত্রিভুজের ভূমি, ভূমি সংলগ্ন একটি স্থূলকোণ ও অপর দুই বাহুর অন্তর দেওয়া আছে। ত্রিভুজটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, ভূমি $a$, ভূমি সংলগ্ন স্থূলকোণ $\angle x$ এবং অপর দুই বাহুর অন্তর $d$। (চিত্রে $a=5$ সে.মি., $\angle x=120^{\circ}$, $d=4$ সে.মি.।)`,
          String.raw`স্থূলকোণের বিপরীত বাহুই ত্রিভুজের বৃহত্তম বাহু। তাই $\angle B$ স্থূল হলে $AC>AB$ এবং $AC-AB=d$। সম্পাদ্য ২ এর মতো $d$ কে $BA$ এর উপর কাটা যায় না — কাটতে হয় $AB$ এর বর্ধিতাংশে।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $BF$ থেকে $BC=a$ কেটে নিই। $B$ বিন্দুতে $\angle CBE=\angle x$ আঁকি।`,
          String.raw`২. $EB$ কে $B$ এর বিপরীত দিকে বর্ধিত করে তা থেকে $BD=d$ কেটে নিই।`,
          String.raw`৩. $D,C$ যোগ করি এবং $DC$ এর লম্বসমদ্বিখণ্ডক আঁকি, যা $BE$ কে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: $A$ বিন্দু $DC$ এর লম্বসমদ্বিখণ্ডকের উপর, তাই $AD=AC$।`,
          String.raw`$D$ বিন্দু $AB$ এর বর্ধিতাংশে, তাই $AD=AB+BD$।`,
          String.raw`$$\therefore\;AC-AB=AD-AB=BD=d$$`,
          String.raw`এবং $BC=a$, $\angle ABC=\angle x$ [অঙ্কন অনুসারে]।`,
        ],
        answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
        figure: "71-p7",
      },
    },
  ],
};

const exercise72: Exercise = {
  id: "7.2",
  bnId: "অনুশীলনী ৭.২",
  title: "চতুর্ভুজ অঙ্কন",
  bookPages: "১৪৯-১৫১",
  formulas: [
    {
      title: "যে পাঁচটি উপাত্তে একটি নির্দিষ্ট চতুর্ভুজ আঁকা যায়",
      formulas: [
        { statement: "১. চারটি বাহু ও একটি কোণ" },
        { statement: "২. চারটি বাহু ও একটি কর্ণ" },
        { statement: "৩. তিনটি বাহু ও দুইটি কর্ণ" },
        { statement: "৪. তিনটি বাহু ও এদের অন্তর্ভুক্ত দুইটি কোণ" },
        {
          statement: "৫. দুইটি বাহু ও তিনটি কোণ",
          note: String.raw`চতুর্ভুজের চার কোণের সমষ্টি $360^{\circ}$, তাই তিনটি কোণ জানলে চতুর্থটিও জানা।`,
        },
        {
          statement: "কেবল চারটি বাহু দিলে চতুর্ভুজ নির্দিষ্ট হয় না",
          note: "কর্ণ চতুর্ভুজকে দুইটি ত্রিভুজে ভাগ করে; তাই একটি বা দুইটি কর্ণ দেওয়া থাকলে ত্রিভুজ এঁকে এঁকে চতুর্ভুজ আঁকা যায়।",
        },
        {
          statement: "বিশেষ চতুর্ভুজে কম উপাত্তই যথেষ্ট",
          note: "সামান্তরিকের দুই সন্নিহিত বাহু ও অন্তর্ভুক্ত কোণ, রম্বসের এক বাহু ও এক কোণ, বর্গের একটি বাহু — এগুলো থেকেই পাঁচটি স্বতন্ত্র উপাত্ত পাওয়া যায়।",
        },
      ],
    },
    {
      title: "সম্পাদ্য ৪ – ৫",
      formulas: [
        {
          statement: String.raw`সম্পাদ্য ৪. সামান্তরিকের দুইটি কর্ণ $a,b$ ও এদের অন্তর্ভুক্ত কোণ $\angle x$`,
          note: String.raw`$AC=a$ এর মধ্যবিন্দু $O$ তে $\angle AOP=\angle x$ এঁকে $OP$ ও বিপরীত রশ্মি $OQ$ থেকে $OB=OD=\tfrac12b$। $\triangle AOB\cong\triangle COD$ বলে $AB$ ও $CD$ সমান ও সমান্তরাল।`,
        },
        {
          statement: String.raw`সম্পাদ্য ৫. সামান্তরিকের দুইটি কর্ণ $a,b$ ও একটি বাহু $c$`,
          note: String.raw`$AB=c$ এর $A$ ও $B$ কে কেন্দ্র করে $\tfrac a2$ ও $\tfrac b2$ ব্যাসার্ধের চাপ $O$ তে মিলে। $AO$ ও $BO$ কে বর্ধিত করে $OC=\tfrac a2$, $OD=\tfrac b2$ নিলেই $ABCD$।`,
        },
      ],
    },
    {
      title: "অঙ্কনে ব্যবহৃত ধর্ম",
      formulas: [
        { statement: "সামান্তরিকের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করে।" },
        {
          statement: "রম্বসের চার বাহু সমান এবং কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে।",
        },
        {
          statement: "বর্গের চার বাহু সমান ও প্রতিটি কোণ সমকোণ।",
        },
        {
          statement: String.raw`চতুর্ভুজের চার কোণের সমষ্টি $360^{\circ}$।`,
        },
      ],
    },
  ],
  examples: [
    // উদাহরণ ৩ — book page ১৪৭.
    {
      id: 3,
      question:
        "ট্রাপিজিয়ামের দুইটি সমান্তরাল বাহু এবং এদের মধ্যে বৃহত্তর বাহু সংলগ্ন দুইটি কোণ দেওয়া আছে। ট্রাপিজিয়ামটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, ট্রাপিজিয়ামের সমান্তরাল বাহুদ্বয় $a$ ও $b$, যেখানে $a>b$, এবং বৃহত্তর বাহু $a$ সংলগ্ন কোণদ্বয় $\angle x$ ও $\angle y$। (চিত্রে $a=6$, $b=4$ সে.মি., $\angle x=60^{\circ}$, $\angle y=45^{\circ}$।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $AX$ থেকে $AB=a$ নিই। $A$ বিন্দুতে $\angle x$ এর সমান $\angle BAY$ এবং $B$ বিন্দুতে $\angle y$ এর সমান $\angle ABZ$ আঁকি।`,
          String.raw`২. $AB$ থেকে $AE=b$ কেটে নিই। $E$ বিন্দুতে $EC\parallel AY$ আঁকি, যা $BZ$ রশ্মিকে $C$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $C$ বিন্দু দিয়ে $CD\parallel BA$ আঁকি, যা $AY$ রশ্মিকে $D$ বিন্দুতে ছেদ করে।`,
          String.raw`তাহলে $ABCD$ ই উদ্দিষ্ট ট্রাপিজিয়াম।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AE\parallel DC$ এবং $AD\parallel EC$, সুতরাং $AECD$ একটি সামান্তরিক এবং $CD=AE=b$।`,
          String.raw`এখন চতুর্ভুজ $ABCD$ এ $AB=a$, $CD=b$, $AB\parallel CD$ এবং $\angle BAD=\angle x$, $\angle ABC=\angle y$।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় ট্রাপিজিয়াম।`,
        figure: "72-ex3",
      },
    },
    // উদাহরণ ৪ — book pages ১৪৮-১৪৯.
    {
      id: 4,
      question: String.raw`$ABC$ ত্রিভুজের $\angle B=60^{\circ}$, $\angle C=45^{\circ}$ এবং পরিসীমা $p=13$ সে.মি.।`,
      parts: [
        {
          label: "ক",
          question: String.raw`স্কেল ও কম্পাস দিয়ে $\angle B$ ও $\angle C$ আঁকো।`,
          solution: {
            steps: [
              String.raw`$\angle B=60^{\circ}$: $B$ কে কেন্দ্র করে যেকোনো ব্যাসার্ধে চাপ আঁকি যা ভূমিকে $M$ বিন্দুতে কাটে। $M$ কে কেন্দ্র করে একই ব্যাসার্ধে চাপ আঁকি যা প্রথম চাপকে $N$ বিন্দুতে কাটে। $BN$ যোগ করি।`,
              String.raw`$BM=BN=MN$ বলে $\triangle BMN$ সমবাহু, তাই $\angle NBM=60^{\circ}$।`,
              String.raw`$\angle C=45^{\circ}$: $C$ বিন্দুতে ভূমির উপর লম্ব $CS$ আঁকি, অর্থাৎ $90^{\circ}$ কোণ। এই কোণকে সমদ্বিখণ্ডিত করি।`,
              String.raw`$$\tfrac12\times 90^{\circ}=45^{\circ}$$`,
            ],
            answer: String.raw`চিত্রে $\angle B=60^{\circ}$ ও $\angle C=45^{\circ}$ আঁকা হলো।`,
            figure: "72-ex4a",
          },
        },
        {
          label: "খ",
          question: "ত্রিভুজটি অঙ্কন করো। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)",
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $RX$ থেকে $RQ=p=13$ সে.মি. কেটে নিই।`,
              String.raw`২. $R$ বিন্দুতে $\tfrac12\angle B=30^{\circ}$ এর সমান $\angle ERX$ এবং $Q$ বিন্দুতে $\tfrac12\angle C=22\tfrac12^{\circ}$ এর সমান $\angle FQR$ আঁকি। $ER$ ও $FQ$ রেখা $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $A$ বিন্দুতে $ER$ এর যে পাশে $\angle ERX$ অবস্থিত সে পাশে $\angle RAB=\tfrac12\angle B$ এবং $FQ$ এর যে পাশে $\angle FQR$ অবস্থিত সে পাশে $\angle QAC=\tfrac12\angle C$ আঁকি। $AB$ ও $AC$ রেখাংশ $RQ$ কে যথাক্রমে $B$ ও $C$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle ABR$ এ $\angle BRA=\angle BAR$, $\therefore BA=BR$ এবং বহিঃস্থ কোণ`,
              String.raw`$$\angle ABC=\angle BRA+\angle BAR=30^{\circ}+30^{\circ}=60^{\circ}$$`,
              String.raw`$\triangle ACQ$ এ $\angle CQA=\angle CAQ$, $\therefore CA=CQ$ এবং`,
              String.raw`$$\angle ACB=22\tfrac12^{\circ}+22\tfrac12^{\circ}=45^{\circ}$$`,
              String.raw`$$AB+BC+CA=RB+BC+CQ=RQ=13\text{ সে.মি.}$$`,
            ],
            answer: String.raw`$\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
            figure: "72-ex4b",
          },
        },
        {
          label: "গ",
          question: String.raw`একটি রম্বস আঁক যার বাহুর দৈর্ঘ্য $\dfrac p3$ এর সমান এবং একটি কোণ $\angle B$ এর সমান। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)`,
          solution: {
            steps: [
              String.raw`রম্বসের বাহু $\tfrac13p=\tfrac{13}{3}\approx 4.33$ সে.মি. এবং একটি কোণ $\angle B=60^{\circ}$। $p$ রেখাংশকে (সমান্তরাল রেখার সাহায্যে) তিন সমান ভাগ করে $\tfrac13p$ পাই।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. $BX$ যেকোনো রশ্মি থেকে $BA=\tfrac13p$ কাটি।`,
              String.raw`২. $B$ বিন্দুতে $\angle ABE=60^{\circ}$ আঁকি। $BE$ থেকে $BC=AB$ নিই।`,
              String.raw`৩. $A$ ও $C$ বিন্দুকে কেন্দ্র করে $\tfrac13p$ এর সমান ব্যাসার্ধ নিয়ে $\angle ABC$ এর অভ্যন্তরে দুইটি বৃত্তচাপ আঁকি। বৃত্তচাপদ্বয় পরস্পর $D$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,D$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট রম্বস।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=BC=CD=DA=\tfrac13p$ এবং $\angle ABC=60^{\circ}=\angle B$। চার বাহু সমান বলে $ABCD$ রম্বস।`,
            ],
            answer: String.raw`$ABCD$ ই উদ্দিষ্ট রম্বস।`,
            figure: "72-ex4c",
          },
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি প্রশ্ন (১ – ৩) ───────────────
    {
      id: 1,
      group: PG_QUAD_MCQ,
      question: String.raw`সমকোণী ত্রিভুজের সূক্ষ্মকোণ দুইটির পরিমাণ দেওয়া থাকলে নিম্নের কোন ক্ষেত্রে ত্রিভুজ অঙ্কন করা সম্ভব?
ক) $60^{\circ}$ ও $36^{\circ}$  খ) $40^{\circ}$ ও $50^{\circ}$  গ) $30^{\circ}$ ও $70^{\circ}$  ঘ) $80^{\circ}$ ও $20^{\circ}$`,
      solution: {
        steps: [
          String.raw`ত্রিভুজের তিন কোণের সমষ্টি $180^{\circ}$, আর এক কোণ $90^{\circ}$। তাই সূক্ষ্মকোণ দুইটির সমষ্টি`,
          String.raw`$$180^{\circ}-90^{\circ}=90^{\circ}$$`,
          String.raw`ক) $60^{\circ}+36^{\circ}=96^{\circ}$ খ) $40^{\circ}+50^{\circ}=90^{\circ}$ গ) $30^{\circ}+70^{\circ}=100^{\circ}$ ঘ) $80^{\circ}+20^{\circ}=100^{\circ}$`,
          String.raw`কেবল খ) তে সমষ্টি $90^{\circ}$।`,
        ],
        answer: String.raw`খ) $40^{\circ}$ ও $50^{\circ}$`,
        figure: "72-p1",
      },
    },
    {
      id: 2,
      group: PG_QUAD_MCQ,
      question: String.raw`একটি ত্রিভুজের দুইটি বাহুর দৈর্ঘ্য যথাক্রমে $4$ সে.মি. ও $9$ সে.মি. হলে তৃতীয় বাহুর দৈর্ঘ্য কত সে.মি.?
ক) $4$  খ) $5$  গ) $6$  ঘ) $13$`,
      solution: {
        steps: [
          String.raw`ত্রিভুজের যেকোনো দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর এবং অন্তর তৃতীয় বাহু অপেক্ষা ক্ষুদ্রতর।`,
          String.raw`$$9-4<\text{তৃতীয় বাহু}<9+4$$`,
          String.raw`$$5<\text{তৃতীয় বাহু}<13$$`,
          String.raw`বিকল্পগুলোর মধ্যে কেবল $6$ এই সীমার ভিতরে ($5$ ও $13$ সীমার সমান, তাই চলবে না)।`,
        ],
        answer: String.raw`গ) $6$`,
        figure: "72-p2",
      },
    },
    {
      id: 3,
      group: PG_QUAD_MCQ,
      question: String.raw`নির্দিষ্ট একটি চতুর্ভুজ আঁকা সম্ভব যদি দেয়া থাকে — ($i$) চারটি বাহু ও একটি কোণ ($ii$) তিনটি বাহু ও এদের অন্তর্ভুক্ত দুইটি কোণ ($iii$) দুইটি বাহু ও তিনটি কোণ। নিচের কোনটি সঠিক?
ক) $i$  খ) $ii$  গ) $i, ii$  ঘ) $i, ii$ ও $iii$`,
      solution: {
        steps: [
          "নির্দিষ্ট চতুর্ভুজ আঁকার জন্য পাঁচটি অনির্ভরশীল উপাত্ত প্রয়োজন। তিনটি উক্তির প্রতিটিতেই পাঁচটি উপাত্ত আছে এবং তিনটিই বইয়ে বর্ণিত পাঁচ ধরনের উপাত্তের তালিকায় আছে:",
          String.raw`($i$) চারটি বাহু ও একটি কোণ — $4+1=5$ [সঠিক]`,
          String.raw`($ii$) তিনটি বাহু ও এদের অন্তর্ভুক্ত দুইটি কোণ — $3+2=5$ [সঠিক]`,
          String.raw`($iii$) দুইটি বাহু ও তিনটি কোণ — $2+3=5$ [সঠিক]`,
        ],
        answer: String.raw`ঘ) $i, ii$ ও $iii$`,
      },
    },

    // ─────────────── চতুর্ভুজ অঙ্কন (৪ – ১১) ───────────────
    {
      id: 4,
      group: PG_QUAD_DRAW,
      question: "নিম্নে প্রদত্ত উপাত্ত নিয়ে চতুর্ভুজ অঙ্কন করো:",
      parts: [
        {
          label: "ক",
          question: String.raw`চারটি বাহুর দৈর্ঘ্য $3$ সে.মি., $3.5$ সে.মি., $2.5$ সে.মি. ও $3$ সে.মি. এবং একটি কোণ $45^{\circ}$।`,
          solution: {
            steps: [
              String.raw`মনে করি, $BC=3$, $AB=3.5$, $AD=2.5$, $CD=3$ সে.মি. এবং $\angle ABC=45^{\circ}$।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BE$ থেকে $BC=3$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে $\angle CBF=45^{\circ}$ আঁকি এবং $BF$ থেকে $BA=3.5$ সে.মি. কেটে নিই।`,
              String.raw`৩. $A$ কে কেন্দ্র করে $2.5$ সে.মি. এবং $C$ কে কেন্দ্র করে $3$ সে.মি. ব্যাসার্ধ নিয়ে $\angle ABC$ এর অভ্যন্তরে দুইটি বৃত্তচাপ আঁকি। চাপ দুইটি $D$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,D$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=3.5$, $BC=3$, $CD=3$, $DA=2.5$ সে.মি. এবং $\angle ABC=45^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
            figure: "72-p4a",
          },
        },
        {
          label: "খ",
          question: String.raw`চারটি বাহুর দৈর্ঘ্য $3.5$ সে.মি., $4$ সে.মি., $2.5$ সে.মি. ও $3.5$ সে.মি. এবং একটি কর্ণ $5$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`মনে করি, $AB=2.5$, $AD=3.5$, $BC=3.5$, $CD=4$ সে.মি. এবং কর্ণ $BD=5$ সে.মি.।`,
              String.raw`কর্ণ $BD$ চতুর্ভুজটিকে $\triangle ABD$ ও $\triangle CBD$ এ ভাগ করে; প্রতিটির তিন বাহু জানা।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BE$ থেকে $BD=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ ও $D$ কে কেন্দ্র করে যথাক্রমে $2.5$ ও $3.5$ সে.মি. ব্যাসার্ধ নিয়ে $BD$ এর এক পাশে দুইটি চাপ আঁকি; এরা $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $B$ ও $D$ কে কেন্দ্র করে যথাক্রমে $3.5$ ও $4$ সে.মি. ব্যাসার্ধ নিয়ে $BD$ এর অপর পাশে দুইটি চাপ আঁকি; এরা $C$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,B$; $A,D$; $C,B$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=2.5$, $BC=3.5$, $CD=4$, $DA=3.5$ সে.মি. এবং কর্ণ $BD=5$ সে.মি.।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
            figure: "72-p4b",
          },
        },
        {
          label: "গ",
          question: String.raw`তিনটি বাহুর দৈর্ঘ্য $3.2$ সে.মি., $3$ সে.মি., $3.5$ সে.মি. এবং দুইটি কর্ণ $2.8$ সে.মি. ও $4.5$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`মনে করি, $AB=3.2$, $AD=3$, $CD=3.5$ সে.মি. এবং কর্ণ $BD=4.5$, $AC=2.8$ সে.মি.।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BE$ থেকে কর্ণ $BD=4.5$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ ও $D$ কে কেন্দ্র করে যথাক্রমে $3.2$ ও $3$ সে.মি. ব্যাসার্ধ নিয়ে $BD$ এর এক পাশে দুইটি চাপ আঁকি; এরা $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $A$ কে কেন্দ্র করে $2.8$ সে.মি. এবং $D$ কে কেন্দ্র করে $3.5$ সে.মি. ব্যাসার্ধ নিয়ে $BD$ এর অপর পাশে দুইটি চাপ আঁকি; এরা $C$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=3.2$, $CD=3.5$, $DA=3$ সে.মি. এবং কর্ণদ্বয় $BD=4.5$, $AC=2.8$ সে.মি.।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
            figure: "72-p4c",
          },
        },
        {
          label: "ঘ",
          question: String.raw`তিনটি বাহুর দৈর্ঘ্য $3$ সে.মি., $3.5$ সে.মি., $4$ সে.মি. এবং দুইটি কোণ $60^{\circ}$ ও $135^{\circ}$।`,
          solution: {
            steps: [
              String.raw`মনে করি, $BC=3$, $AB=3.5$, $CD=4$ সে.মি. এবং অন্তর্ভুক্ত কোণ $\angle ABC=60^{\circ}$, $\angle BCD=135^{\circ}$।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BE$ থেকে $BC=3$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে $\angle CBF=60^{\circ}$ আঁকি এবং $BF$ থেকে $BA=3.5$ সে.মি. কেটে নিই।`,
              String.raw`৩. $C$ বিন্দুতে একই পাশে $\angle BCG=135^{\circ}$ আঁকি ($90^{\circ}+45^{\circ}$) এবং $CG$ থেকে $CD=4$ সে.মি. কেটে নিই।`,
              String.raw`৪. $A,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=3.5$, $BC=3$, $CD=4$ সে.মি. এবং $\angle ABC=60^{\circ}$, $\angle BCD=135^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
            figure: "72-p4d",
          },
        },
      ],
    },
    {
      id: 5,
      group: PG_QUAD_DRAW,
      question: "নিম্নে প্রদত্ত উপাত্ত নিয়ে সামান্তরিক অঙ্কন করো:",
      parts: [
        {
          label: "ক",
          question: String.raw`দুইটি কর্ণের দৈর্ঘ্য $4$ সে.মি., $6.5$ সে.মি. এবং এদের অন্তর্ভুক্ত কোণ $45^{\circ}$।`,
          solution: {
            steps: [
              String.raw`এটি সম্পাদ্য ৪ এর প্রয়োগ: $a=4$, $b=6.5$ সে.মি., $\angle x=45^{\circ}$।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $AE$ থেকে $AC=4$ সে.মি. নিই। $AC$ এর লম্বসমদ্বিখণ্ডক এঁকে মধ্যবিন্দু $O$ নির্ণয় করি।`,
              String.raw`২. $O$ বিন্দুতে $\angle AOP=45^{\circ}$ আঁকি। $OP$ এর বিপরীত রশ্মি $OQ$ আঁকি।`,
              String.raw`৩. $OP$ ও $OQ$ থেকে $\tfrac12\times 6.5=3.25$ সে.মি. এর সমান যথাক্রমে $OB$ ও $OD$ নিই।`,
              String.raw`৪. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট সামান্তরিক।`,
              String.raw`প্রমাণ: $\triangle AOB$ ও $\triangle COD$ এ $OA=OC=2$, $OB=OD=3.25$ এবং $\angle AOB=\angle COD$ [বিপ্রতীপ কোণ]।`,
              String.raw`$$\therefore\;\triangle AOB\cong\triangle COD$$`,
              String.raw`সুতরাং $AB=CD$ এবং $\angle ABO=\angle CDO$; কোণ দুইটি একান্তর, তাই $AB\parallel CD$। অনুরূপভাবে $AD$ ও $BC$ সমান ও সমান্তরাল।`,
              String.raw`অতএব $ABCD$ সামান্তরিক, যার কর্ণ $AC=4$, $BD=3.25+3.25=6.5$ সে.মি. এবং অন্তর্ভুক্ত $\angle AOB=45^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় সামান্তরিক।`,
            figure: "72-p5a",
          },
        },
        {
          label: "খ",
          question: String.raw`একটি বাহুর দৈর্ঘ্য $4$ সে.মি. এবং দুইটি কর্ণের দৈর্ঘ্য $5$ সে.মি., $6.5$ সে.মি.।`,
          solution: {
            steps: [
              String.raw`এটি সম্পাদ্য ৫ এর প্রয়োগ: $c=4$, $a=5$, $b=6.5$ সে.মি.; $\tfrac a2=2.5$, $\tfrac b2=3.25$ সে.মি.।`,
              String.raw`যাচাই: $\triangle AOB$ এর বাহু $2.5$, $3.25$, $4$ — $2.5+3.25=5.75>4$, তাই আঁকা সম্ভব।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $AX$ থেকে $AB=4$ সে.মি. নিই।`,
              String.raw`২. $A$ ও $B$ কে কেন্দ্র করে যথাক্রমে $2.5$ ও $3.25$ সে.মি. ব্যাসার্ধ নিয়ে $AB$ এর একই পাশে দুইটি চাপ আঁকি; এরা $O$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $AO$ কে বর্ধিত করে $OC=2.5$ সে.মি. এবং $BO$ কে বর্ধিত করে $OD=3.25$ সে.মি. নিই।`,
              String.raw`৪. $A,D$; $D,C$ ও $B,C$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট সামান্তরিক।`,
              String.raw`প্রমাণ: $\triangle AOB$ ও $\triangle COD$ এ $OA=OC$, $OB=OD$ এবং $\angle AOB=\angle COD$ [বিপ্রতীপ কোণ]।`,
              String.raw`$\therefore\;\triangle AOB\cong\triangle COD$, তাই $AB=CD$ এবং $\angle ABO=\angle CDO$ (একান্তর), অর্থাৎ $AB\parallel CD$। অনুরূপভাবে $AD$ ও $BC$ সমান ও সমান্তরাল।`,
              String.raw`অতএব $ABCD$ সামান্তরিক, যার বাহু $AB=4$ এবং কর্ণ $AC=5$, $BD=6.5$ সে.মি.।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় সামান্তরিক।`,
            figure: "72-p5b",
          },
        },
      ],
    },
    {
      id: 6,
      group: PG_QUAD_DRAW,
      question: String.raw`$ABCD$ চতুর্ভুজের $AB$ ও $BC$ বাহু এবং $\angle B$, $\angle C$ ও $\angle D$ কোণ দেওয়া আছে। চতুর্ভুজটি আঁকো।`,
      solution: {
        steps: [
          String.raw`(চিত্রে $AB=3$ সে.মি., $BC=4$ সে.মি., $\angle B=100^{\circ}$, $\angle C=80^{\circ}$, $\angle D=95^{\circ}$ নেওয়া হয়েছে।)`,
          String.raw`$D$ বিন্দুর অবস্থান জানা নেই বলে $\angle D$ সরাসরি আঁকা যায় না; তাই চতুর্থ কোণ বের করি:`,
          String.raw`$$\angle A=360^{\circ}-(\angle B+\angle C+\angle D)=360^{\circ}-(100^{\circ}+80^{\circ}+95^{\circ})=85^{\circ}$$`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $BX$ থেকে $BC$ এর সমান অংশ কেটে নিই।`,
          String.raw`২. $B$ বিন্দুতে $\angle B$ এর সমান $\angle CBA$ আঁকি এবং তা থেকে $BA$ এর সমান অংশ কেটে নিই।`,
          String.raw`৩. $A$ বিন্দুতে $\angle A$ এর সমান $\angle BAD$ এবং $C$ বিন্দুতে $\angle C$ এর সমান $\angle BCD$ আঁকি (চাঁদার সাহায্যে)। রশ্মি দুইটি $D$ বিন্দুতে ছেদ করে।`,
          String.raw`তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AB$, $BC$, $\angle B$ ও $\angle C$ প্রদত্ত মানের সমান এবং`,
          String.raw`$$\angle ADC=360^{\circ}-(\angle A+\angle B+\angle C)=360^{\circ}-(85^{\circ}+100^{\circ}+80^{\circ})=95^{\circ}=\angle D$$`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
        figure: "72-p6",
      },
    },
    {
      id: 7,
      group: PG_QUAD_DRAW,
      question: String.raw`$ABCD$ চতুর্ভুজের কর্ণ দুইটির ছেদবিন্দু দ্বারা কর্ণ দুইটির চারটি খণ্ডিত অংশ এবং এদের অন্তর্ভুক্ত একটি কোণ যথাক্রমে $OA=4$ সে.মি., $OB=5$ সে.মি., $OC=3.5$ সে.মি., $OD=4.5$ সে.মি. ও $\angle AOB=80^{\circ}$ দেওয়া আছে। চতুর্ভুজটি আঁকো।`,
      solution: {
        steps: [
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. একটি সরলরেখার উপর যেকোনো বিন্দু $O$ নিই। $O$ এর এক পাশে $OA=4$ সে.মি. এবং বিপরীত পাশে $OC=3.5$ সে.মি. কেটে নিই।`,
          String.raw`২. $O$ বিন্দুতে চাঁদার সাহায্যে $\angle AOB=80^{\circ}$ আঁকি এবং ঐ রশ্মি থেকে $OB=5$ সে.মি. কেটে নিই।`,
          String.raw`৩. $BO$ কে $O$ এর বিপরীত দিকে বর্ধিত করে $OD=4.5$ সে.মি. কেটে নিই।`,
          String.raw`৪. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
          String.raw`প্রমাণ: $AC$ ও $BD$ কর্ণ দুইটি $O$ বিন্দুতে ছেদ করেছে, যেখানে অঙ্কন অনুসারে $OA=4$, $OB=5$, $OC=3.5$, $OD=4.5$ সে.মি. এবং $\angle AOB=80^{\circ}$।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
        figure: "72-p7",
      },
    },
    {
      id: 8,
      group: PG_QUAD_DRAW,
      question: String.raw`রম্বসের একটি বাহুর দৈর্ঘ্য $3.5$ সে.মি. ও একটি কোণ $45^{\circ}$; রম্বসটি আঁকো।`,
      solution: {
        steps: [
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. $BX$ যেকোনো রশ্মি থেকে $BA=3.5$ সে.মি. কাটি।`,
          String.raw`২. $B$ বিন্দুতে $\angle ABC=45^{\circ}$ আঁকি ($90^{\circ}$ কে সমদ্বিখণ্ডিত করে) এবং ঐ রশ্মি থেকে $BC=3.5$ সে.মি. নিই।`,
          String.raw`৩. $A$ ও $C$ কে কেন্দ্র করে $3.5$ সে.মি. ব্যাসার্ধ নিয়ে $\angle ABC$ এর অভ্যন্তরে দুইটি বৃত্তচাপ আঁকি; এরা $D$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $A,D$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট রম্বস।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=BC=CD=DA=3.5$ সে.মি. এবং $\angle ABC=45^{\circ}$। চার বাহু সমান বলে $ABCD$ রম্বস।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় রম্বস।`,
        figure: "72-p8",
      },
    },
    {
      id: 9,
      group: PG_QUAD_DRAW,
      question: "রম্বসের একটি বাহু এবং একটি কর্ণের দৈর্ঘ্য দেওয়া আছে। রম্বসটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, রম্বসের বাহু $a$ এবং একটি কর্ণ $d$। (চিত্রে $a=3.5$ সে.মি., $d=5$ সে.মি.।)`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $AX$ থেকে কর্ণ $AC=d$ কেটে নিই।`,
          String.raw`২. $A$ ও $C$ কে কেন্দ্র করে $a$ এর সমান ব্যাসার্ধ নিয়ে $AC$ এর দুই পাশে দুইটি করে বৃত্তচাপ আঁকি। এক পাশের চাপদ্বয় $B$ বিন্দুতে এবং অপর পাশের চাপদ্বয় $D$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট রম্বস।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=BC=CD=DA=a$ এবং কর্ণ $AC=d$। চার বাহু সমান বলে $ABCD$ রম্বস।`,
          String.raw`শর্ত: চাপ দুইটি মিলতে হলে $d<2a$ হতে হবে।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় রম্বস।`,
        figure: "72-p9",
      },
    },
    {
      id: 10,
      group: PG_QUAD_DRAW,
      question: "রম্বসের দুইটি কর্ণের দৈর্ঘ্য দেওয়া আছে। রম্বসটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, রম্বসের কর্ণ দুইটি $a$ ও $b$। (চিত্রে $a=6$ সে.মি., $b=4$ সে.মি.।)`,
          String.raw`রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে — এ ধর্মই অঙ্কনের ভিত্তি।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি থেকে $AC=a$ কেটে নিই।`,
          String.raw`২. $AC$ এর লম্বসমদ্বিখণ্ডক আঁকি, যা $AC$ কে $O$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. লম্বসমদ্বিখণ্ডকের উপর $O$ এর দুই পাশে $OB=OD=\tfrac b2$ কেটে নিই।`,
          String.raw`৪. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট রম্বস।`,
          String.raw`প্রমাণ: $B$ ও $D$ বিন্দু $AC$ এর লম্বসমদ্বিখণ্ডকের উপর, তাই $AB=BC$ ও $AD=DC$।`,
          String.raw`আবার $\triangle AOB$ ও $\triangle AOD$ এ $OB=OD$, $AO$ সাধারণ এবং $\angle AOB=\angle AOD=90^{\circ}$, তাই $AB=AD$।`,
          String.raw`$$\therefore\;AB=BC=CD=DA=\sqrt{\left(\tfrac a2\right)^{2}+\left(\tfrac b2\right)^{2}}$$`,
          String.raw`চিত্রের মানে প্রতিটি বাহু $\sqrt{3^{2}+2^{2}}=\sqrt{13}\approx 3.61$ সে.মি.। চার বাহু সমান এবং কর্ণ $AC=a$, $BD=b$, সুতরাং $ABCD$ ই নির্ণেয় রম্বস।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় রম্বস।`,
        figure: "72-p10",
      },
    },
    {
      id: 11,
      group: PG_QUAD_DRAW,
      question: "বর্গক্ষেত্রের পরিসীমা দেওয়া আছে। বর্গক্ষেত্রটি আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, বর্গক্ষেত্রের পরিসীমা $p$। চার বাহু সমান, তাই প্রতিটি বাহু $\tfrac14p$। (চিত্রে $p=12$ সে.মি., বাহু $3$ সে.মি.।)`,
          String.raw`$p$ রেখাংশকে লম্বসমদ্বিখণ্ডক দিয়ে সমান দুই ভাগ করি, এক ভাগকে আবার সমদ্বিখণ্ডিত করে $\tfrac14p$ পাই।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. যেকোনো রশ্মি $AX$ থেকে $AB=\tfrac14p$ কেটে নিই।`,
          String.raw`২. $A$ বিন্দুতে $AE\perp AB$ আঁকি এবং $AE$ থেকে $AD=\tfrac14p$ কেটে নিই।`,
          String.raw`৩. $B$ ও $D$ কে কেন্দ্র করে $\tfrac14p$ ব্যাসার্ধ নিয়ে $\angle BAD$ এর অভ্যন্তরে দুইটি চাপ আঁকি; এরা $C$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $B,C$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট বর্গক্ষেত্র।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=BC=CD=DA=\tfrac14p$ এবং $\angle BAD=90^{\circ}$। চার বাহু সমান ও একটি কোণ সমকোণ বলে $ABCD$ বর্গক্ষেত্র, এবং এর পরিসীমা $4\times\tfrac14p=p$।`,
        ],
        answer: String.raw`$ABCD$ ই নির্ণেয় বর্গক্ষেত্র।`,
        figure: "72-p11",
      },
    },

    // ─────────────── সৃজনশীল প্রশ্ন (১২ – ১৩) ───────────────
    {
      id: 12,
      group: PG_QUAD_CQ,
      question: String.raw`একটি সমকোণী ত্রিভুজের অতিভুজ $5$ সে.মি. ও এক বাহুর দৈর্ঘ্য $4$ সে.মি.। উপরের তথ্যের আলোকে নিচের প্রশ্নগুলোর উত্তর দাও:`,
      parts: [
        {
          label: "ক",
          question: "ত্রিভুজটির অপর বাহুর দৈর্ঘ্য কত?",
          solution: {
            steps: [
              String.raw`পিথাগোরাসের উপপাদ্য অনুসারে,`,
              String.raw`$$\text{অপর বাহু}=\sqrt{5^{2}-4^{2}}=\sqrt{25-16}=\sqrt{9}=3$$`,
            ],
            answer: String.raw`$3$ সে.মি.`,
          },
        },
        {
          label: "খ",
          question: "ত্রিভুজটি অঙ্কন করো। (অঙ্কনের চিহ্ন আবশ্যক)",
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BX$ থেকে $BC=4$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে $BY\perp BX$ আঁকি।`,
              String.raw`৩. $C$ কে কেন্দ্র করে $5$ সে.মি. ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি যা $BY$ কে $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\angle ABC=90^{\circ}$, $BC=4$ সে.মি. এবং অতিভুজ $AC=5$ সে.মি.। মেপে দেখা যায় $AB=3$ সে.মি., যা (ক) এর সাথে মিলে।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "72-p12b",
          },
        },
        {
          label: "গ",
          question: "ত্রিভুজটির পরিসীমার সমান পরিসীমাবিশিষ্ট একটি বর্গ অঙ্কন করো। (অঙ্কনের চিহ্ন আবশ্যক)",
          solution: {
            steps: [
              String.raw`ত্রিভুজের পরিসীমা $=3+4+5=12$ সে.মি.।`,
              String.raw`$$\therefore\;\text{বর্গের বাহু}=\frac{12}{4}=3\text{ সে.মি.}$$`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি থেকে $PQ=3$ সে.মি. কেটে নিই।`,
              String.raw`২. $P$ বিন্দুতে $PQ$ এর উপর লম্ব আঁকি এবং তা থেকে $PS=3$ সে.মি. কেটে নিই।`,
              String.raw`৩. $Q$ ও $S$ কে কেন্দ্র করে $3$ সে.মি. ব্যাসার্ধ নিয়ে $\angle QPS$ এর অভ্যন্তরে দুইটি চাপ আঁকি; এরা $R$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $Q,R$ ও $R,S$ যোগ করি। তাহলে $PQRS$ ই উদ্দিষ্ট বর্গ।`,
              String.raw`প্রমাণ: $PQ=QR=RS=SP=3$ সে.মি. এবং $\angle QPS=90^{\circ}$, তাই $PQRS$ বর্গ, যার পরিসীমা $4\times 3=12$ সে.মি. = ত্রিভুজের পরিসীমা।`,
            ],
            answer: String.raw`$PQRS$ ই নির্ণেয় বর্গ (বাহু $3$ সে.মি.)।`,
            figure: "72-p12c",
          },
        },
      ],
    },
    {
      id: 13,
      group: PG_QUAD_CQ,
      question: String.raw`$ABCD$ চতুর্ভুজের $AB=4$ সে.মি., $BC=5$ সে.মি., $\angle A=85^{\circ}$, $\angle B=80^{\circ}$ এবং $\angle C=95^{\circ}$। উপরের তথ্যের আলোকে নিচের প্রশ্নগুলোর উত্তর দাও।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$\angle D$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`চতুর্ভুজের চার কোণের সমষ্টি $360^{\circ}$।`,
              String.raw`$$\angle D=360^{\circ}-(\angle A+\angle B+\angle C)$$`,
              String.raw`$$=360^{\circ}-(85^{\circ}+80^{\circ}+95^{\circ})=360^{\circ}-260^{\circ}=100^{\circ}$$`,
            ],
            answer: String.raw`$\angle D=100^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রদত্ত তথ্য অনুযায়ী $ABCD$ চতুর্ভুজটি অঙ্কন করো। (অঙ্কনের চিহ্ন আবশ্যক)`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BX$ থেকে $BC=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে চাঁদার সাহায্যে $\angle CBA=80^{\circ}$ আঁকি এবং ঐ রশ্মি থেকে $BA=4$ সে.মি. কেটে নিই।`,
              String.raw`৩. $A$ বিন্দুতে $\angle BAD=85^{\circ}$ এবং $C$ বিন্দুতে $\angle BCD=95^{\circ}$ আঁকি। রশ্মি দুইটি $D$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $ABCD$ ই উদ্দিষ্ট চতুর্ভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $AB=4$, $BC=5$ সে.মি., $\angle A=85^{\circ}$, $\angle B=80^{\circ}$, $\angle C=95^{\circ}$ এবং (ক) অনুসারে $\angle D=100^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় চতুর্ভুজ।`,
            figure: "72-p13b",
          },
        },
        {
          label: "গ",
          question: String.raw`প্রদত্ত বাহু দুইটিকে একটি সামান্তরিকের বাহু এবং $\angle B=80^{\circ}$ ধরে সামান্তরিকটি অঙ্কন করো। (অঙ্কনের চিহ্ন আবশ্যক)`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BX$ থেকে $BC=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ বিন্দুতে $\angle CBA=80^{\circ}$ আঁকি এবং তা থেকে $BA=4$ সে.মি. কেটে নিই।`,
              String.raw`৩. $A$ কে কেন্দ্র করে $5$ সে.মি. এবং $C$ কে কেন্দ্র করে $4$ সে.মি. ব্যাসার্ধ নিয়ে $\angle ABC$ এর অভ্যন্তরে দুইটি চাপ আঁকি; এরা $D$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $A,D$ ও $C,D$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট সামান্তরিক।`,
              String.raw`প্রমাণ: $\triangle ABC$ ও $\triangle CDA$ এ $AB=CD=4$, $BC=DA=5$ এবং $AC$ সাধারণ বাহু।`,
              String.raw`$$\therefore\;\triangle ABC\cong\triangle CDA$$`,
              String.raw`ফলে $\angle BAC=\angle DCA$ (একান্তর), তাই $AB\parallel CD$; তেমনি $\angle BCA=\angle DAC$, তাই $BC\parallel AD$। বিপরীত বাহুগুলো সমান্তরাল বলে $ABCD$ সামান্তরিক, যার $\angle B=80^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় সামান্তরিক।`,
            figure: "72-p13c",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (১৪ – ১৭) ───────────────
    {
      id: 14,
      group: PG_QUAD_MODEL_MCQ,
      question: String.raw`একটি সমদ্বিবাহু সমকোণী ত্রিভুজের সমান বাহুদ্বয়ের প্রতিটির দৈর্ঘ্য $18$ সে.মি. হলে ত্রিভুজটির ক্ষেত্রফল কত বর্গসে.মি.?
ক) $36$  খ) $81$  গ) $162$  ঘ) $324$`,
      figure: "72-p14",
      solution: {
        steps: [
          String.raw`সমকোণ সংলগ্ন সমান বাহু দুইটিই ভূমি ও উচ্চতা।`,
          String.raw`$$\text{ক্ষেত্রফল}=\tfrac12\times 18\times 18=162\text{ বর্গসে.মি.}$$`,
        ],
        answer: String.raw`গ) $162$`,
      },
    },
    {
      id: 15,
      group: PG_QUAD_MODEL_MCQ,
      question: String.raw`রম্বসের— ($i$) চারটি বাহু পরস্পর সমান ($ii$) বিপরীত কোণ সমান ($iii$) কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে। নিচের কোনটি সঠিক?
ক) $i, ii$  খ) $i, iii$  গ) $ii, iii$  ঘ) $i, ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`($i$) রম্বসের সংজ্ঞা অনুসারেই চার বাহু সমান। [সঠিক]`,
          String.raw`($ii$) রম্বস একটি সামান্তরিক, আর সামান্তরিকের বিপরীত কোণগুলো সমান। [সঠিক]`,
          String.raw`($iii$) রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে। [সঠিক]`,
        ],
        answer: String.raw`ঘ) $i, ii$ ও $iii$`,
        figure: "72-p15",
      },
    },
    {
      id: 16,
      group: PG_QUAD_MODEL_MCQ,
      question: String.raw`চিত্রে, $ABCD$ একটি আয়তক্ষেত্রের কর্ণদ্বয় পরস্পরকে $E$ বিন্দুতে ছেদ করেছে। $BF=2$ সে.মি. এবং $EF=3$ সে.মি.। $BD$ কর্ণের দৈর্ঘ্য কত সে.মি.?
ক) $1$  খ) $\sqrt5$  গ) $\sqrt{13}$  ঘ) $5$`,
      figure: "72-p16",
      solution: {
        steps: [
          String.raw`$EF\perp AB$ এবং $E$ কর্ণদ্বয়ের মধ্যবিন্দু, তাই $F$ হলো $AB$ এর মধ্যবিন্দু।`,
          String.raw`সমকোণী $\triangle BFE$ এ,`,
          String.raw`$$BE=\sqrt{BF^{2}+EF^{2}}=\sqrt{2^{2}+3^{2}}=\sqrt{13}$$`,
          String.raw`আয়তের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$BD=2\,BE=2\sqrt{13}\approx 7.21$$`,
          String.raw`অন্যভাবে: $AB=2\,BF=4$, $BC=2\,EF=6$, তাই $BD=\sqrt{4^{2}+6^{2}}=\sqrt{52}=2\sqrt{13}$।`,
          String.raw`বিকল্পগুলোর কোনোটিই $2\sqrt{13}$ নয়। গ) $\sqrt{13}$ হলো $BE$ এর দৈর্ঘ্য, অর্থাৎ অর্ধ-কর্ণ — প্রশ্নে সম্ভবত $BE$ বোঝানো হয়েছে।`,
        ],
        answer: String.raw`$BD=2\sqrt{13}$ সে.মি.; বিকল্পে নেই — গ) $\sqrt{13}$ হলো $BE$ (অর্ধ-কর্ণ)`,
      },
    },
    {
      id: 17,
      group: PG_QUAD_MODEL_MCQ,
      question: String.raw`(১৬ নং প্রশ্নের চিত্র) আয়তক্ষেত্রটির ক্ষেত্রফল কত বর্গসে.মি.?
ক) $8\sqrt5$  খ) $24$  গ) $12\sqrt5$  ঘ) $32\sqrt5$`,
      figure: "72-p16",
      solution: {
        steps: [
          String.raw`$F$ হলো $AB$ এর মধ্যবিন্দু, তাই $AB=2\,BF=2\times 2=4$ সে.মি.।`,
          String.raw`$E$ থেকে $AB$ এর দূরত্ব $EF$ হলো প্রস্থের অর্ধেক, তাই $BC=2\,EF=2\times 3=6$ সে.মি.।`,
          String.raw`$$\text{ক্ষেত্রফল}=AB\times BC=4\times 6=24\text{ বর্গসে.মি.}$$`,
        ],
        answer: String.raw`খ) $24$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল (১৮) ───────────────
    {
      id: 18,
      group: PG_QUAD_MODEL_CQ,
      question: String.raw`একটি ট্রাপিজিয়ামের সমান্তরাল দুইটি বাহুর দৈর্ঘ্য $4$ সে.মি. ও $6$ সে.মি. এবং বৃহত্তম বাহু সংলগ্ন দুইটি কোণ $\angle x=60^{\circ}$ এবং $\angle y=50^{\circ}$।`,
      parts: [
        {
          label: "ক",
          question: String.raw`$5$ সে.মি. বাহুবিশিষ্ট একটি সমবাহু ত্রিভুজ অঙ্কন করো।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $BX$ থেকে $BC=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $B$ ও $C$ কে কেন্দ্র করে $5$ সে.মি. ব্যাসার্ধ নিয়ে $BC$ এর একই পাশে দুইটি চাপ আঁকি; এরা $A$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $A,B$ ও $A,C$ যোগ করি। তাহলে $\triangle ABC$ ই উদ্দিষ্ট সমবাহু ত্রিভুজ ($AB=BC=CA=5$ সে.মি.)।`,
            ],
            answer: String.raw`$\triangle ABC$ ই নির্ণেয় সমবাহু ত্রিভুজ।`,
            figure: "72-p18a",
          },
        },
        {
          label: "খ",
          question: "ট্রাপিজিয়ামটি আঁক। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)",
          solution: {
            steps: [
              String.raw`এখানে $a=6$ সে.মি., $b=4$ সে.মি., $\angle x=60^{\circ}$, $\angle y=50^{\circ}$ (উদাহরণ ৩ এর পদ্ধতি)।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $AX$ থেকে $AB=6$ সে.মি. নিই। $A$ বিন্দুতে $\angle BAY=60^{\circ}$ এবং $B$ বিন্দুতে চাঁদার সাহায্যে $\angle ABZ=50^{\circ}$ আঁকি।`,
              String.raw`২. $AB$ থেকে $AE=4$ সে.মি. কেটে নিই। $E$ বিন্দুতে $EC\parallel AY$ আঁকি (অর্থাৎ $\angle BEC=60^{\circ}$), যা $BZ$ কে $C$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $C$ বিন্দু দিয়ে $CD\parallel BA$ আঁকি, যা $AY$ কে $D$ বিন্দুতে ছেদ করে।`,
              String.raw`তাহলে $ABCD$ ই উদ্দিষ্ট ট্রাপিজিয়াম।`,
              String.raw`প্রমাণ: $AE\parallel DC$ ও $AD\parallel EC$, তাই $AECD$ সামান্তরিক এবং $DC=AE=4$ সে.মি.।`,
              String.raw`চতুর্ভুজ $ABCD$ এ $AB=6$, $CD=4$ সে.মি., $AB\parallel CD$, $\angle BAD=60^{\circ}$ ও $\angle ABC=50^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় ট্রাপিজিয়াম।`,
            figure: "72-p18b",
          },
        },
        {
          label: "গ",
          question: String.raw`উদ্দীপকের বাহু দুইটিকে সামান্তরিকের দুইটি কর্ণ ও $\angle y$ কে অন্তর্ভুক্ত কোণ বিবেচনা করে সামান্তরিকটি আঁক। (অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক)`,
          solution: {
            steps: [
              String.raw`কর্ণ $a=4$ সে.মি., $b=6$ সে.মি. এবং অন্তর্ভুক্ত কোণ $\angle y=50^{\circ}$ (সম্পাদ্য ৪)।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $AE$ থেকে $AC=4$ সে.মি. নিই এবং এর মধ্যবিন্দু $O$ নির্ণয় করি।`,
              String.raw`২. $O$ বিন্দুতে $\angle AOP=50^{\circ}$ আঁকি এবং $OP$ এর বিপরীত রশ্মি $OQ$ আঁকি।`,
              String.raw`৩. $OP$ ও $OQ$ থেকে $\tfrac12\times 6=3$ সে.মি. এর সমান যথাক্রমে $OB$ ও $OD$ নিই।`,
              String.raw`৪. $A,B$; $B,C$; $C,D$; $D,A$ যোগ করি। তাহলে $ABCD$ ই উদ্দিষ্ট সামান্তরিক।`,
              String.raw`প্রমাণ: $\triangle AOB$ ও $\triangle COD$ এ $OA=OC=2$, $OB=OD=3$ এবং $\angle AOB=\angle COD$ [বিপ্রতীপ কোণ], তাই $\triangle AOB\cong\triangle COD$।`,
              String.raw`ফলে $AB=CD$ এবং $\angle ABO=\angle CDO$ (একান্তর), অর্থাৎ $AB\parallel CD$; অনুরূপভাবে $AD$ ও $BC$ সমান ও সমান্তরাল।`,
              String.raw`অতএব $ABCD$ সামান্তরিক, যার কর্ণ $AC=4$, $BD=6$ সে.মি. এবং অন্তর্ভুক্ত $\angle AOB=50^{\circ}$।`,
            ],
            answer: String.raw`$ABCD$ ই নির্ণেয় সামান্তরিক।`,
            figure: "72-p18c",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (১৯) ───────────────
    {
      id: 19,
      group: PG_QUAD_MODEL_SA,
      question: "নিচের অঙ্কনগুলো করো:",
      parts: [
        {
          label: "ক",
          question: String.raw`$\Delta DEF$-এর $DE=DF=4$ সে.মি. ও $\angle EDF=50^{\circ}$ হলে, $\Delta DEF$ অঙ্কন করো।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $DX$ থেকে $DE=4$ সে.মি. কেটে নিই।`,
              String.raw`২. $D$ বিন্দুতে চাঁদার সাহায্যে $\angle EDF=50^{\circ}$ আঁকি এবং ঐ রশ্মি থেকে $DF=4$ সে.মি. কেটে নিই।`,
              String.raw`৩. $E,F$ যোগ করি। তাহলে $\triangle DEF$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $DE=DF=4$ সে.মি. এবং অন্তর্ভুক্ত $\angle EDF=50^{\circ}$।`,
            ],
            answer: String.raw`$\triangle DEF$ ই নির্ণেয় সমদ্বিবাহু ত্রিভুজ।`,
            figure: "72-p19a",
          },
        },
        {
          label: "খ",
          question: String.raw`$\Delta PQR$-এর $PQ=PR=5$ সে.মি. এবং $QR=6$ সে.মি. হলে, $\Delta PQR$ টি অঙ্কন করো।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $QX$ থেকে $QR=6$ সে.মি. কেটে নিই।`,
              String.raw`২. $Q$ ও $R$ কে কেন্দ্র করে $5$ সে.মি. ব্যাসার্ধ নিয়ে $QR$ এর একই পাশে দুইটি চাপ আঁকি; এরা $P$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $P,Q$ ও $P,R$ যোগ করি। তাহলে $\triangle PQR$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: অঙ্কন অনুসারে $PQ=PR=5$ সে.মি. এবং $QR=6$ সে.মি.।`,
            ],
            answer: String.raw`$\triangle PQR$ ই নির্ণেয় ত্রিভুজ।`,
            figure: "72-p19b",
          },
        },
        {
          label: "গ",
          question: String.raw`রুলার-কম্পাসের সাহায্যে $MN=7$ সে.মি. রেখাংশের $Q$ বিন্দুতে সমদ্বিখণ্ডক $PQ$ অঙ্কন করো যেন $\angle PQN=45^{\circ}$ হয়।`,
          solution: {
            steps: [
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. $MN=7$ সে.মি. রেখাংশ আঁকি।`,
              String.raw`২. $M$ ও $N$ কে কেন্দ্র করে $3.5$ সে.মি. এর বেশি ব্যাসার্ধ নিয়ে $MN$ এর উভয় পাশে চাপ আঁকি। চাপের ছেদবিন্দু দুইটি যোগ করলে লম্বসমদ্বিখণ্ডক পাওয়া যায়, যা $MN$ কে $Q$ বিন্দুতে ছেদ করে। এর উপরের অংশে একটি বিন্দু $S$ নিই।`,
              String.raw`৩. $\angle SQN=90^{\circ}$ কোণটি সমদ্বিখণ্ডিত করি ($Q$ কেন্দ্রিক চাপ $QS$ ও $QN$ কে যে দুই বিন্দুতে কাটে, সেখান থেকে সমান ব্যাসার্ধের চাপ কেটে)। দ্বিখণ্ডকটিই $QP$।`,
              String.raw`প্রমাণ: $Q$ হলো $MN$ এর মধ্যবিন্দু, তাই $MQ=QN=3.5$ সে.মি. — অর্থাৎ $PQ$ রেখা $MN$ কে $Q$ বিন্দুতে সমদ্বিখণ্ডিত করে।`,
              String.raw`$$\angle PQN=\tfrac12\angle SQN=\tfrac12\times 90^{\circ}=45^{\circ}$$`,
            ],
            answer: String.raw`$PQ$ ই নির্ণেয় সমদ্বিখণ্ডক, $\angle PQN=45^{\circ}$।`,
            figure: "72-p19c",
          },
        },
      ],
    },
  ],
};

export const chaptersData: Chapter[] = [
  { id: 1, title: "বাস্তব সংখ্যা", exercises: [exercise1] },
  {
    id: 2,
    title: "সেট ও ফাংশন",
    exercises: [exercise21, exercise22],
  },
  {
    id: 3,
    title: "বীজগাণিতিক রাশি",
    exercises: [exercise31, exercise32, exercise33, exercise34, exercise35],
  },
  {
    id: 4,
    title: "সূচক ও লগারিদম",
    exercises: [exercise41, exercise42],
  },
  {
    id: 5,
    title: "এক চলকবিশিষ্ট সমীকরণ",
    exercises: [exercise51, exercise52],
  },
  {
    id: 6,
    title: "রেখা, কোণ ও ত্রিভুজ",
    exercises: [exercise61, exercise62, exercise63],
  },
  {
    id: 7,
    title: "ব্যবহারিক জ্যামিতি",
    exercises: [exercise71, exercise72],
  },
  { id: 8, title: "বৃত্ত", exercises: [] },
  {
    id: 9,
    title: "ত্রিকোণমিতিক অনুপাত",
    exercises: [exercise91, exercise92],
  },
  {
    id: 10,
    title: "দূরত্ব ও উচ্চতা",
    exercises: [exercise10],
  },
  {
    id: 11,
    title: "বীজগাণিতিক অনুপাত ও সমানুপাত",
    exercises: [exercise111, exercise112],
  },
  {
    id: 12,
    title: "দুই চলকবিশিষ্ট সরল সহসমীকরণ",
    exercises: [exercise121, exercise122, exercise123, exercise124],
  },
  {
    id: 13,
    title: "সসীম ধারা",
    exercises: [exercise131, exercise132],
  },
  {
    id: 14,
    title: "অনুপাত, সদৃশতা ও প্রতিসমতা",
    exercises: [],
  },
  {
    id: 15,
    title: "ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য",
    exercises: [],
  },
  {
    id: 16,
    title: "পরিমিতি",
    exercises: [exercise161, exercise162],
  },
  {
    id: 17,
    title: "পরিসংখ্যান",
    exercises: [exercise17],
  },
];
