// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
// Chapter 9 "ত্রিকোণমিতিক অনুপাত": অনুশীলনী ৯.১ (book pages ১৮৪-১৮৬) and
// অনুশীলনী ৯.২ (book pages ১৯৪-১৯৫).
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
  solution: Solution;
}

export interface Problem {
  id: number;
  // Heading the book puts above a run of problems ("সরল করো", "প্রমাণ করো", …).
  // Omitted when each problem carries its own instruction line.
  group?: string;
  question: string;
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
          note: "$\frac{p}{b}$-এর লব ও হরকে অতিভুজ $h$ দিয়ে ভাগ করলেই এটি পাওয়া যায়।",
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
  problems: [],
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

export const chaptersData: Chapter[] = [
  { id: 1, title: "বাস্তব সংখ্যা", exercises: [] },
  { id: 2, title: "সেট ও ফাংশন", exercises: [] },
  {
    id: 3,
    title: "বীজগাণিতিক রাশি",
    exercises: [],
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
    exercises: [],
  },
  {
    id: 11,
    title: "বীজগাণিতিক অনুপাত ও সমানুপাত",
    exercises: [],
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
  { id: 16, title: "পরিমিতি", exercises: [] },
  { id: 17, title: "পরিসংখ্যান", exercises: [] },
];
