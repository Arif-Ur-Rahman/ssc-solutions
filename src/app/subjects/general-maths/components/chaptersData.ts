// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 2 "সেট ও ফাংশন": অনুশীলনী ২.১ (book pages ৩১-৩২) and
// অনুশীলনী ২.২ (book pages ৪০-৪১).
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
// Chapter 9 "ত্রিকোণমিতিক অনুপাত": অনুশীলনী ৯.১ (book pages ১৮৪-১৮৬) and
// অনুশীলনী ৯.২ (book pages ১৯৪-১৯৫).
// Chapter 11 "বীজগাণিতিক অনুপাত ও সমানুপাত": অনুশীলনী ১১.১ (book pages ২১৬-২১৭)
// and অনুশীলনী ১১.২ (book pages ২২১-২২২), the latter followed by the chapter's
// নমুনা প্রশ্ন (book pages ২২২-২২৩), numbered on from the exercise.
// Chapter 10 "দূরত্ব ও উচ্চতা": অনুশীলনী ১০ (book pages ২০২-২০৩).
// Chapter 16 "পরিমিতি": অনুশীলনী ১৬.১ (book pages ৩০০-৩০১) and
// অনুশীলনী ১৬.২ (book pages ৩১০-৩১২).
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

export const chaptersData: Chapter[] = [
  { id: 1, title: "বাস্তব সংখ্যা", exercises: [] },
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
    exercises: [],
  },
  {
    id: 6,
    title: "রেখা, কোণ ও ত্রিভুজ",
    exercises: [],
  },
  {
    id: 7,
    title: "ব্যবহারিক জ্যামিতি",
    exercises: [],
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
    exercises: [],
  },
  { id: 13, title: "সসীম ধারা", exercises: [] },
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
  { id: 17, title: "পরিসংখ্যান", exercises: [] },
];
