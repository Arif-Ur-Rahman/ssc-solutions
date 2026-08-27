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

const PROVE_TRIG = "Prove (6 – 20)";
// ─────────────────────────────────────────────────────────────────
// Chapter 9 "ত্রিকোণমিতিক অনুপাত". The theory the two exercises rest on
// runs from book page ১৭৪ to ১৮৩ (অনুশীলনী ৯.১) and from ১৮৬ to ১৯৩
// (অনুশীলনী ৯.২); the formulae below are those pages, nothing added.
// ─────────────────────────────────────────────────────────────────

const exercise91: Exercise = {
  id: "9.1",
  bnId: "অনুশীলনী ৯.১",
  title: "Trigonometric Ratios",
  bookPages: "১৮৪ – ১৮৬",
  problems: [
    {
      id: 1,
      question: String.raw`Check whether the following statements are true or false, and justify your answer.`,
      parts: [
        {
          label: "ক",
          question: String.raw`The value of $\tan A$ is always less than $1$.`,
          solution: {
            steps: [
              String.raw`$$\tan A=\frac{\text{opposite side}}{\text{adjacent side}}$$`,
              String.raw`The two sides are independent of each other, so this ratio is not bounded by $1$.`,
              String.raw`$$\tan 60^{\circ}=\sqrt{3}=1.732\ldots>1$$`,
              String.raw`So the value of $\tan A$ can be greater than $1$.`,
            ],
            answer: String.raw`False`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\cot A$ is the product of $\cot$ and $A$.`,
          solution: {
            steps: [
              String.raw`$\cot$ standing alone is not a quantity, so nothing is being multiplied.`,
              String.raw`$\cot A$ is one single symbol: the cotangent ratio of the angle $A$.`,
              String.raw`$$\cot A=\frac{\cos A}{\sin A}$$`,
            ],
            answer: String.raw`False`,
          },
        },
        {
          label: "গ",
          question: String.raw`$\sec A=\dfrac{12}{5}$ for some value of the angle $A$.`,
          solution: {
            steps: [
              String.raw`$$\sec A=\frac{1}{\cos A}\qquad\text{and}\qquad 0<\cos A\le 1\ \text{ for }\ 0^{\circ}\le A<90^{\circ}$$`,
              String.raw`$$\therefore\ \sec A\ge 1$$`,
              String.raw`$$\frac{12}{5}=2.4>1$$`,
              String.raw`So the value is admissible; it occurs when $\cos A=\dfrac{5}{12}$.`,
            ],
            answer: String.raw`True`,
          },
        },
        {
          label: "ঘ",
          question: String.raw`$\cos$ is the abbreviation of cotangent.`,
          solution: {
            steps: [
              String.raw`$\cos$ is the abbreviation of cosine, not of cotangent.`,
              String.raw`Cotangent is abbreviated as $\cot$.`,
            ],
            answer: String.raw`False`,
          },
        },
      ],
    },
    {
      id: 2,
      question: String.raw`If $\sin A=\dfrac{3}{4}$, find the other trigonometric ratios of the angle $A$.`,
      solution: {
        steps: [
          String.raw`$$\sin A=\frac{3}{4}=\frac{\text{opposite side}}{\text{hypotenuse}}$$`,
          String.raw`Let the opposite side be $3k$ and the hypotenuse $4k$, where $k>0$.`,
          String.raw`$$\text{adjacent side}=\sqrt{(4k)^{2}-(3k)^{2}}=\sqrt{16k^{2}-9k^{2}}=\sqrt{7}\,k$$`,
          String.raw`$$\cos A=\frac{\sqrt{7}\,k}{4k}=\frac{\sqrt{7}}{4}$$`,
          String.raw`$$\tan A=\frac{3k}{\sqrt{7}\,k}=\frac{3}{\sqrt{7}}$$`,
          String.raw`$$\operatorname{cosec}A=\frac{1}{\sin A}=\frac{4}{3}$$`,
          String.raw`$$\sec A=\frac{1}{\cos A}=\frac{4}{\sqrt{7}}$$`,
          String.raw`$$\cot A=\frac{1}{\tan A}=\frac{\sqrt{7}}{3}$$`,
        ],
        answer: String.raw`$\cos A=\dfrac{\sqrt{7}}{4},\ \tan A=\dfrac{3}{\sqrt{7}},\ \operatorname{cosec}A=\dfrac{4}{3},\ \sec A=\dfrac{4}{\sqrt{7}},\ \cot A=\dfrac{\sqrt{7}}{3}$`,
      },
    },
    {
      id: 3,
      question: String.raw`Given that $15\cot A=8$, find the values of $\sin A$ and $\sec A$.`,
      solution: {
        steps: [
          String.raw`$$15\cot A=8$$`,
          String.raw`$$\therefore\ \cot A=\frac{8}{15}$$`,
          String.raw`$$\tan A=\frac{1}{\cot A}=\frac{15}{8}=\frac{\text{opposite side}}{\text{adjacent side}}$$`,
          String.raw`Let the opposite side be $15k$ and the adjacent side $8k$, where $k>0$.`,
          String.raw`$$\text{hypotenuse}=\sqrt{(15k)^{2}+(8k)^{2}}=\sqrt{225k^{2}+64k^{2}}=\sqrt{289k^{2}}=17k$$`,
          String.raw`$$\sin A=\frac{15k}{17k}=\frac{15}{17}$$`,
          String.raw`$$\sec A=\frac{\text{hypotenuse}}{\text{adjacent side}}=\frac{17k}{8k}=\frac{17}{8}$$`,
        ],
        answer: String.raw`$\sin A=\dfrac{15}{17},\ \sec A=\dfrac{17}{8}$`,
      },
    },
    {
      id: 4,
      question: String.raw`In the right angled triangle $ABC$, $\angle C$ is the right angle, $AB=13$ cm, $BC=12$ cm and $\angle ABC=\theta$. Find the values of $\sin\theta$, $\cos\theta$ and $\tan\theta$.`,
      solution: {
        steps: [
          String.raw`$\angle C=90^{\circ}$, so $AB$ is the hypotenuse.`,
          String.raw`$$AC=\sqrt{AB^{2}-BC^{2}}=\sqrt{13^{2}-12^{2}}=\sqrt{169-144}=\sqrt{25}=5\ \text{cm}$$`,
          String.raw`With respect to $\theta=\angle ABC$, the opposite side is $AC$ and the adjacent side is $BC$.`,
          String.raw`$$\sin\theta=\frac{AC}{AB}=\frac{5}{13}$$`,
          String.raw`$$\cos\theta=\frac{BC}{AB}=\frac{12}{13}$$`,
          String.raw`$$\tan\theta=\frac{AC}{BC}=\frac{5}{12}$$`,
        ],
        answer: String.raw`$\sin\theta=\dfrac{5}{13},\ \cos\theta=\dfrac{12}{13},\ \tan\theta=\dfrac{5}{12}$`,
      },
    },
    {
      id: 5,
      question: String.raw`In the triangle $ABC$ the angle $\angle B$ is a right angle. If $\tan A=\sqrt{3}$, verify the truth of $\sqrt{3}\sin A\cos A=\dfrac{3}{4}$.`,
      solution: {
        steps: [
          String.raw`$\angle B=90^{\circ}$, so $AC$ is the hypotenuse.`,
          String.raw`$$\tan A=\frac{BC}{AB}=\sqrt{3}$$`,
          String.raw`Let $BC=\sqrt{3}\,k$ and $AB=k$, where $k>0$.`,
          String.raw`$$AC=\sqrt{AB^{2}+BC^{2}}=\sqrt{k^{2}+3k^{2}}=\sqrt{4k^{2}}=2k$$`,
          String.raw`$$\sin A=\frac{BC}{AC}=\frac{\sqrt{3}\,k}{2k}=\frac{\sqrt{3}}{2}$$`,
          String.raw`$$\cos A=\frac{AB}{AC}=\frac{k}{2k}=\frac{1}{2}$$`,
          String.raw`$$\text{L.H.S.}=\sqrt{3}\sin A\cos A=\sqrt{3}\cdot\frac{\sqrt{3}}{2}\cdot\frac{1}{2}$$`,
          String.raw`$$=\frac{3}{4}=\text{R.H.S.}$$`,
          String.raw`$\therefore$ the given statement is true.`,
        ],
        answer: String.raw`Verified`,
      },
    },
    // ─────────────── প্রমাণ করো (৬ – ২০) ───────────────
    {
      id: 6,
      group: PROVE_TRIG,
      question: String.raw`Prove that:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}$$`,
              String.raw`$$=\cos^{2}A+\sin^{2}A\qquad\left[\,\frac{1}{\sec A}=\cos A,\ \frac{1}{\operatorname{cosec}A}=\sin A\,\right]$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{1}{\cos^{2}A}-\frac{1}{\cot^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{1}{\cos^{2}A}-\frac{1}{\cot^{2}A}$$`,
              String.raw`$$=\sec^{2}A-\tan^{2}A$$`,
              String.raw`$$=1=\text{R.H.S.}\qquad[\,\sec^{2}A=1+\tan^{2}A\,]$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{1}{\sin^{2}A}-\frac{1}{\tan^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{1}{\sin^{2}A}-\frac{1}{\tan^{2}A}$$`,
              String.raw`$$=\operatorname{cosec}^{2}A-\cot^{2}A$$`,
              String.raw`$$=1=\text{R.H.S.}\qquad[\,\operatorname{cosec}^{2}A=1+\cot^{2}A\,]$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
      ],
    },
    {
      id: 7,
      group: PROVE_TRIG,
      question: String.raw`Prove that:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{\sin A}{\operatorname{cosec}A}+\frac{\cos A}{\sec A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{\sin A}{\operatorname{cosec}A}+\frac{\cos A}{\sec A}$$`,
              String.raw`$$=\sin A\cdot\sin A+\cos A\cdot\cos A\qquad\left[\,\frac{1}{\operatorname{cosec}A}=\sin A,\ \frac{1}{\sec A}=\cos A\,\right]$$`,
              String.raw`$$=\sin^{2}A+\cos^{2}A$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{\sec A}{\cos A}-\frac{\tan A}{\cot A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{\sec A}{\cos A}-\frac{\tan A}{\cot A}$$`,
              String.raw`$$=\sec A\cdot\sec A-\tan A\cdot\tan A\qquad\left[\,\frac{1}{\cos A}=\sec A,\ \frac{1}{\cot A}=\tan A\,\right]$$`,
              String.raw`$$=\sec^{2}A-\tan^{2}A$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
        {
          label: "গ",
          question: String.raw`$$\frac{1}{1+\sin^{2}A}+\frac{1}{1+\operatorname{cosec}^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{1}{1+\sin^{2}A}+\frac{1}{1+\operatorname{cosec}^{2}A}$$`,
              String.raw`$$=\frac{1}{1+\sin^{2}A}+\frac{1}{1+\frac{1}{\sin^{2}A}}$$`,
              String.raw`$$=\frac{1}{1+\sin^{2}A}+\frac{\sin^{2}A}{\sin^{2}A+1}$$`,
              String.raw`$$=\frac{1+\sin^{2}A}{1+\sin^{2}A}$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
      ],
    },
    {
      id: 8,
      group: PROVE_TRIG,
      question: String.raw`Prove that:`,
      parts: [
        {
          label: "ক",
          question: String.raw`$$\frac{\tan A}{1-\cot A}+\frac{\cot A}{1-\tan A}=\sec A\cdot\operatorname{cosec}A+1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{\tan A}{1-\cot A}+\frac{\cot A}{1-\tan A}$$`,
              String.raw`$$=\frac{\frac{\sin A}{\cos A}}{1-\frac{\cos A}{\sin A}}+\frac{\frac{\cos A}{\sin A}}{1-\frac{\sin A}{\cos A}}$$`,
              String.raw`$$=\frac{\frac{\sin A}{\cos A}}{\frac{\sin A-\cos A}{\sin A}}+\frac{\frac{\cos A}{\sin A}}{\frac{\cos A-\sin A}{\cos A}}$$`,
              String.raw`$$=\frac{\sin^{2}A}{\cos A\,(\sin A-\cos A)}+\frac{\cos^{2}A}{\sin A\,(\cos A-\sin A)}$$`,
              String.raw`$$=\frac{\sin^{2}A}{\cos A\,(\sin A-\cos A)}-\frac{\cos^{2}A}{\sin A\,(\sin A-\cos A)}$$`,
              String.raw`$$=\frac{\sin^{3}A-\cos^{3}A}{\sin A\cos A\,(\sin A-\cos A)}$$`,
              String.raw`$$=\frac{(\sin A-\cos A)\left(\sin^{2}A+\sin A\cos A+\cos^{2}A\right)}{\sin A\cos A\,(\sin A-\cos A)}$$`,
              String.raw`$$=\frac{1+\sin A\cos A}{\sin A\cos A}\qquad[\,\sin^{2}A+\cos^{2}A=1\,]$$`,
              String.raw`$$=\frac{1}{\sin A\cos A}+1$$`,
              String.raw`$$=\sec A\cdot\operatorname{cosec}A+1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
        {
          label: "খ",
          question: String.raw`$$\frac{1}{1+\tan^{2}A}+\frac{1}{1+\cot^{2}A}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\frac{1}{1+\tan^{2}A}+\frac{1}{1+\cot^{2}A}$$`,
              String.raw`$$=\frac{1}{\sec^{2}A}+\frac{1}{\operatorname{cosec}^{2}A}\qquad\left[\,1+\tan^{2}A=\sec^{2}A,\ 1+\cot^{2}A=\operatorname{cosec}^{2}A\,\right]$$`,
              String.raw`$$=\cos^{2}A+\sin^{2}A$$`,
              String.raw`$$=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Proved`,
          },
        },
      ],
    },
    {
      id: 9,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\cos A}{1-\tan A}+\frac{\sin A}{1-\cot A}=\sin A+\cos A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{\cos A}{1-\tan A}+\frac{\sin A}{1-\cot A}$$`,
          String.raw`$$=\frac{\cos A}{1-\frac{\sin A}{\cos A}}+\frac{\sin A}{1-\frac{\cos A}{\sin A}}$$`,
          String.raw`$$=\frac{\cos^{2}A}{\cos A-\sin A}+\frac{\sin^{2}A}{\sin A-\cos A}$$`,
          String.raw`$$=\frac{\cos^{2}A}{\cos A-\sin A}-\frac{\sin^{2}A}{\cos A-\sin A}$$`,
          String.raw`$$=\frac{\cos^{2}A-\sin^{2}A}{\cos A-\sin A}$$`,
          String.raw`$$=\frac{(\cos A+\sin A)(\cos A-\sin A)}{\cos A-\sin A}$$`,
          String.raw`$$=\sin A+\cos A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 10,
      group: PROVE_TRIG,
      question: String.raw`$$\tan A\sqrt{1-\sin^{2}A}=\sin A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\tan A\sqrt{1-\sin^{2}A}$$`,
          String.raw`$$=\tan A\sqrt{\cos^{2}A}\qquad[\,1-\sin^{2}A=\cos^{2}A\,]$$`,
          String.raw`$$=\tan A\cdot\cos A$$`,
          String.raw`$$=\frac{\sin A}{\cos A}\cdot\cos A$$`,
          String.raw`$$=\sin A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 11,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\sec A+\tan A}{\operatorname{cosec}A+\cot A}=\frac{\operatorname{cosec}A-\cot A}{\sec A-\tan A}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{\sec A+\tan A}{\operatorname{cosec}A+\cot A}$$`,
          String.raw`$$=\frac{(\sec A+\tan A)(\sec A-\tan A)}{(\operatorname{cosec}A+\cot A)(\sec A-\tan A)}\qquad[\,\text{multiplying by }\sec A-\tan A\,]$$`,
          String.raw`$$=\frac{\sec^{2}A-\tan^{2}A}{(\operatorname{cosec}A+\cot A)(\sec A-\tan A)}$$`,
          String.raw`$$=\frac{1}{(\operatorname{cosec}A+\cot A)(\sec A-\tan A)}$$`,
          String.raw`$$=\frac{\operatorname{cosec}^{2}A-\cot^{2}A}{(\operatorname{cosec}A+\cot A)(\sec A-\tan A)}\qquad[\,1=\operatorname{cosec}^{2}A-\cot^{2}A\,]$$`,
          String.raw`$$=\frac{(\operatorname{cosec}A+\cot A)(\operatorname{cosec}A-\cot A)}{(\operatorname{cosec}A+\cot A)(\sec A-\tan A)}$$`,
          String.raw`$$=\frac{\operatorname{cosec}A-\cot A}{\sec A-\tan A}=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 12,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\operatorname{cosec}A}{\operatorname{cosec}A-1}+\frac{\operatorname{cosec}A}{\operatorname{cosec}A+1}=2\sec^{2}A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{\operatorname{cosec}A}{\operatorname{cosec}A-1}+\frac{\operatorname{cosec}A}{\operatorname{cosec}A+1}$$`,
          String.raw`$$=\operatorname{cosec}A\cdot\frac{(\operatorname{cosec}A+1)+(\operatorname{cosec}A-1)}{(\operatorname{cosec}A-1)(\operatorname{cosec}A+1)}$$`,
          String.raw`$$=\operatorname{cosec}A\cdot\frac{2\operatorname{cosec}A}{\operatorname{cosec}^{2}A-1}$$`,
          String.raw`$$=\frac{2\operatorname{cosec}^{2}A}{\cot^{2}A}\qquad[\,\operatorname{cosec}^{2}A-1=\cot^{2}A\,]$$`,
          String.raw`$$=\frac{2}{\sin^{2}A}\cdot\frac{\sin^{2}A}{\cos^{2}A}$$`,
          String.raw`$$=\frac{2}{\cos^{2}A}$$`,
          String.raw`$$=2\sec^{2}A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 13,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{1}{1+\sin A}+\frac{1}{1-\sin A}=2\sec^{2}A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{1}{1+\sin A}+\frac{1}{1-\sin A}$$`,
          String.raw`$$=\frac{(1-\sin A)+(1+\sin A)}{(1+\sin A)(1-\sin A)}$$`,
          String.raw`$$=\frac{2}{1-\sin^{2}A}$$`,
          String.raw`$$=\frac{2}{\cos^{2}A}$$`,
          String.raw`$$=2\sec^{2}A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 14,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{1}{\operatorname{cosec}A-1}-\frac{1}{\operatorname{cosec}A+1}=2\tan^{2}A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{1}{\operatorname{cosec}A-1}-\frac{1}{\operatorname{cosec}A+1}$$`,
          String.raw`$$=\frac{(\operatorname{cosec}A+1)-(\operatorname{cosec}A-1)}{(\operatorname{cosec}A-1)(\operatorname{cosec}A+1)}$$`,
          String.raw`$$=\frac{2}{\operatorname{cosec}^{2}A-1}$$`,
          String.raw`$$=\frac{2}{\cot^{2}A}\qquad[\,\operatorname{cosec}^{2}A-1=\cot^{2}A\,]$$`,
          String.raw`$$=2\tan^{2}A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 15,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\sin A}{1-\cos A}+\frac{1-\cos A}{\sin A}=2\operatorname{cosec}A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{\sin A}{1-\cos A}+\frac{1-\cos A}{\sin A}$$`,
          String.raw`$$=\frac{\sin^{2}A+(1-\cos A)^{2}}{\sin A\,(1-\cos A)}$$`,
          String.raw`$$=\frac{\sin^{2}A+1-2\cos A+\cos^{2}A}{\sin A\,(1-\cos A)}$$`,
          String.raw`$$=\frac{1+1-2\cos A}{\sin A\,(1-\cos A)}\qquad[\,\sin^{2}A+\cos^{2}A=1\,]$$`,
          String.raw`$$=\frac{2(1-\cos A)}{\sin A\,(1-\cos A)}$$`,
          String.raw`$$=\frac{2}{\sin A}$$`,
          String.raw`$$=2\operatorname{cosec}A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 16,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\tan A}{\sec A+1}-\frac{\sec A-1}{\tan A}=0$$`,
      solution: {
        steps: [
          String.raw`$$\frac{\tan A}{\sec A+1}=\frac{\tan A\,(\sec A-1)}{(\sec A+1)(\sec A-1)}$$`,
          String.raw`$$=\frac{\tan A\,(\sec A-1)}{\sec^{2}A-1}$$`,
          String.raw`$$=\frac{\tan A\,(\sec A-1)}{\tan^{2}A}\qquad[\,\sec^{2}A-1=\tan^{2}A\,]$$`,
          String.raw`$$=\frac{\sec A-1}{\tan A}$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\frac{\tan A}{\sec A+1}-\frac{\sec A-1}{\tan A}$$`,
          String.raw`$$=\frac{\sec A-1}{\tan A}-\frac{\sec A-1}{\tan A}$$`,
          String.raw`$$=0=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 17,
      group: PROVE_TRIG,
      question: String.raw`$$(\tan\theta+\sec\theta)^{2}=\frac{1+\sin\theta}{1-\sin\theta}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=(\tan\theta+\sec\theta)^{2}$$`,
          String.raw`$$=\left(\frac{\sin\theta}{\cos\theta}+\frac{1}{\cos\theta}\right)^{2}$$`,
          String.raw`$$=\left(\frac{1+\sin\theta}{\cos\theta}\right)^{2}$$`,
          String.raw`$$=\frac{(1+\sin\theta)^{2}}{\cos^{2}\theta}$$`,
          String.raw`$$=\frac{(1+\sin\theta)^{2}}{1-\sin^{2}\theta}$$`,
          String.raw`$$=\frac{(1+\sin\theta)(1+\sin\theta)}{(1+\sin\theta)(1-\sin\theta)}$$`,
          String.raw`$$=\frac{1+\sin\theta}{1-\sin\theta}=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 18,
      group: PROVE_TRIG,
      question: String.raw`$$\frac{\cot A+\tan B}{\cot B+\tan A}=\cot A\cdot\tan B$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\frac{\cot A+\tan B}{\cot B+\tan A}$$`,
          String.raw`$$=\frac{\frac{\cos A}{\sin A}+\frac{\sin B}{\cos B}}{\frac{\cos B}{\sin B}+\frac{\sin A}{\cos A}}$$`,
          String.raw`$$=\frac{\frac{\cos A\cos B+\sin A\sin B}{\sin A\cos B}}{\frac{\cos A\cos B+\sin A\sin B}{\sin B\cos A}}$$`,
          String.raw`$$=\frac{\cos A\cos B+\sin A\sin B}{\sin A\cos B}\times\frac{\sin B\cos A}{\cos A\cos B+\sin A\sin B}$$`,
          String.raw`$$=\frac{\sin B\cos A}{\sin A\cos B}$$`,
          String.raw`$$=\frac{\cos A}{\sin A}\cdot\frac{\sin B}{\cos B}$$`,
          String.raw`$$=\cot A\cdot\tan B=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 19,
      group: PROVE_TRIG,
      question: String.raw`$$\sqrt{\frac{1-\sin A}{1+\sin A}}=\sec A-\tan A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\sqrt{\frac{1-\sin A}{1+\sin A}}$$`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)(1-\sin A)}{(1+\sin A)(1-\sin A)}}\qquad[\,\text{multiplying by }1-\sin A\,]$$`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)^{2}}{1-\sin^{2}A}}$$`,
          String.raw`$$=\sqrt{\frac{(1-\sin A)^{2}}{\cos^{2}A}}$$`,
          String.raw`$$=\frac{1-\sin A}{\cos A}$$`,
          String.raw`$$=\frac{1}{\cos A}-\frac{\sin A}{\cos A}$$`,
          String.raw`$$=\sec A-\tan A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 20,
      group: PROVE_TRIG,
      question: String.raw`$$\sqrt{\frac{\sec A+1}{\sec A-1}}=\cot A+\operatorname{cosec}A$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\sqrt{\frac{\sec A+1}{\sec A-1}}$$`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)(\sec A+1)}{(\sec A-1)(\sec A+1)}}\qquad[\,\text{multiplying by }\sec A+1\,]$$`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)^{2}}{\sec^{2}A-1}}$$`,
          String.raw`$$=\sqrt{\frac{(\sec A+1)^{2}}{\tan^{2}A}}$$`,
          String.raw`$$=\frac{\sec A+1}{\tan A}$$`,
          String.raw`$$=\frac{\frac{1}{\cos A}+1}{\frac{\sin A}{\cos A}}$$`,
          String.raw`$$=\frac{1+\cos A}{\sin A}$$`,
          String.raw`$$=\frac{\cos A}{\sin A}+\frac{1}{\sin A}$$`,
          String.raw`$$=\cot A+\operatorname{cosec}A=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 21,
      question: String.raw`If $\cos A+\sin A=\sqrt{2}\cos A$, then prove that $\cos A-\sin A=\sqrt{2}\sin A$.`,
      solution: {
        steps: [
          String.raw`$$\text{Given, }\cos A+\sin A=\sqrt{2}\cos A$$`,
          String.raw`$$\text{or, }\sin A=\sqrt{2}\cos A-\cos A$$`,
          String.raw`$$\text{or, }\sin A=\left(\sqrt{2}-1\right)\cos A\ \ldots(1)$$`,
          String.raw`$$\text{Now, }\cos A-\sin A=\cos A-\left(\sqrt{2}-1\right)\cos A\qquad[\,\text{from }(1)\,]$$`,
          String.raw`$$=\cos A\left(1-\sqrt{2}+1\right)$$`,
          String.raw`$$=\left(2-\sqrt{2}\right)\cos A$$`,
          String.raw`$$=\sqrt{2}\left(\sqrt{2}-1\right)\cos A$$`,
          String.raw`$$=\sqrt{2}\sin A\qquad[\,\text{from }(1)\,]$$`,
          String.raw`$$\therefore\ \cos A-\sin A=\sqrt{2}\sin A$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 22,
      question: String.raw`If $\tan A=\dfrac{1}{\sqrt{3}}$, find the value of $$\frac{\operatorname{cosec}^{2}A-\sec^{2}A}{\operatorname{cosec}^{2}A+\sec^{2}A}$$`,
      solution: {
        steps: [
          String.raw`$$\tan A=\frac{1}{\sqrt{3}}\ \Rightarrow\ \cot A=\sqrt{3}$$`,
          String.raw`$$\sec^{2}A=1+\tan^{2}A=1+\frac{1}{3}=\frac{4}{3}$$`,
          String.raw`$$\operatorname{cosec}^{2}A=1+\cot^{2}A=1+3=4$$`,
          String.raw`$$\therefore\ \frac{\operatorname{cosec}^{2}A-\sec^{2}A}{\operatorname{cosec}^{2}A+\sec^{2}A}=\frac{4-\frac{4}{3}}{4+\frac{4}{3}}$$`,
          String.raw`$$=\frac{\frac{12-4}{3}}{\frac{12+4}{3}}$$`,
          String.raw`$$=\frac{8}{16}$$`,
          String.raw`$$=\frac{1}{2}$$`,
        ],
        answer: String.raw`$\dfrac{1}{2}$`,
      },
    },
    {
      id: 23,
      question: String.raw`If $\operatorname{cosec}A-\cot A=\dfrac{4}{3}$, what is the value of $\operatorname{cosec}A+\cot A$?`,
      solution: {
        steps: [
          String.raw`$$\text{We know, }\operatorname{cosec}^{2}A-\cot^{2}A=1$$`,
          String.raw`$$\text{or, }(\operatorname{cosec}A+\cot A)(\operatorname{cosec}A-\cot A)=1$$`,
          String.raw`$$\text{or, }(\operatorname{cosec}A+\cot A)\cdot\frac{4}{3}=1\qquad\left[\,\operatorname{cosec}A-\cot A=\frac{4}{3}\,\right]$$`,
          String.raw`$$\therefore\ \operatorname{cosec}A+\cot A=\frac{3}{4}$$`,
        ],
        answer: String.raw`$\dfrac{3}{4}$`,
      },
    },
    {
      id: 24,
      question: String.raw`If $\cot A=\dfrac{b}{a}$, find the value of $$\frac{a\sin A-b\cos A}{a\sin A+b\cos A}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{a\sin A-b\cos A}{a\sin A+b\cos A}$$`,
          String.raw`$$=\frac{\frac{a\sin A-b\cos A}{\sin A}}{\frac{a\sin A+b\cos A}{\sin A}}\qquad[\,\text{dividing by }\sin A\,]$$`,
          String.raw`$$=\frac{a-b\cot A}{a+b\cot A}$$`,
          String.raw`$$=\frac{a-b\cdot\frac{b}{a}}{a+b\cdot\frac{b}{a}}\qquad\left[\,\cot A=\frac{b}{a}\,\right]$$`,
          String.raw`$$=\frac{\frac{a^{2}-b^{2}}{a}}{\frac{a^{2}+b^{2}}{a}}$$`,
          String.raw`$$=\frac{a^{2}-b^{2}}{a^{2}+b^{2}}$$`,
        ],
        answer: String.raw`$\dfrac{a^{2}-b^{2}}{a^{2}+b^{2}}$`,
      },
    },
    {
      id: 25,
      question: String.raw`$\operatorname{cosec}A-\cot A=x$ and $\operatorname{cosec}A+\cot A=y$.`,
      parts: [
        {
          label: "ক",
          question: String.raw`If $\sin\theta=\dfrac{5}{13}$, find the value of $\sec\theta$.`,
          solution: {
            steps: [
              String.raw`$$\sin\theta=\frac{5}{13}=\frac{\text{opposite side}}{\text{hypotenuse}}$$`,
              String.raw`$$\text{adjacent side}=\sqrt{13^{2}-5^{2}}=\sqrt{169-25}=\sqrt{144}=12$$`,
              String.raw`$$\cos\theta=\frac{12}{13}$$`,
              String.raw`$$\therefore\ \sec\theta=\frac{1}{\cos\theta}=\frac{13}{12}$$`,
            ],
            answer: String.raw`$\dfrac{13}{12}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`Show that, $\sec A=\dfrac{1+x^{2}}{1-x^{2}}$.`,
          solution: {
            steps: [
              String.raw`$$x=\operatorname{cosec}A-\cot A=\frac{1}{\sin A}-\frac{\cos A}{\sin A}=\frac{1-\cos A}{\sin A}$$`,
              String.raw`$$\therefore\ x^{2}=\frac{(1-\cos A)^{2}}{\sin^{2}A}=\frac{(1-\cos A)^{2}}{1-\cos^{2}A}$$`,
              String.raw`$$=\frac{(1-\cos A)(1-\cos A)}{(1+\cos A)(1-\cos A)}=\frac{1-\cos A}{1+\cos A}$$`,
              String.raw`$$\text{Now, }1+x^{2}=1+\frac{1-\cos A}{1+\cos A}=\frac{1+\cos A+1-\cos A}{1+\cos A}=\frac{2}{1+\cos A}$$`,
              String.raw`$$\text{and }1-x^{2}=1-\frac{1-\cos A}{1+\cos A}=\frac{1+\cos A-1+\cos A}{1+\cos A}=\frac{2\cos A}{1+\cos A}$$`,
              String.raw`$$\therefore\ \frac{1+x^{2}}{1-x^{2}}=\frac{\frac{2}{1+\cos A}}{\frac{2\cos A}{1+\cos A}}$$`,
              String.raw`$$=\frac{2}{2\cos A}=\frac{1}{\cos A}$$`,
              String.raw`$$=\sec A$$`,
              String.raw`$$\therefore\ \sec A=\frac{1+x^{2}}{1-x^{2}}\quad(\text{Shown})$$`,
            ],
            answer: String.raw`Shown`,
          },
        },
        {
          label: "গ",
          question: String.raw`If $\dfrac{x}{y}=7-4\sqrt{3}$, find the value of $A$.`,
          solution: {
            steps: [
              String.raw`$$xy=(\operatorname{cosec}A-\cot A)(\operatorname{cosec}A+\cot A)=\operatorname{cosec}^{2}A-\cot^{2}A=1$$`,
              String.raw`$$\therefore\ y=\frac{1}{x}$$`,
              String.raw`$$\therefore\ \frac{x}{y}=\frac{x}{\frac{1}{x}}=x^{2}$$`,
              String.raw`$$\text{or, }x^{2}=7-4\sqrt{3}$$`,
              String.raw`$$\text{or, }x^{2}=4-4\sqrt{3}+3=2^{2}-2\cdot2\cdot\sqrt{3}+\left(\sqrt{3}\right)^{2}=\left(2-\sqrt{3}\right)^{2}$$`,
              String.raw`$$\therefore\ x=2-\sqrt{3}\qquad[\,x>0\,]$$`,
              String.raw`$$y=\frac{1}{x}=\frac{1}{2-\sqrt{3}}=\frac{2+\sqrt{3}}{\left(2-\sqrt{3}\right)\left(2+\sqrt{3}\right)}=\frac{2+\sqrt{3}}{4-3}=2+\sqrt{3}$$`,
              String.raw`$$\text{Now, }x+y=(\operatorname{cosec}A-\cot A)+(\operatorname{cosec}A+\cot A)=2\operatorname{cosec}A$$`,
              String.raw`$$\text{or, }2\operatorname{cosec}A=\left(2-\sqrt{3}\right)+\left(2+\sqrt{3}\right)=4$$`,
              String.raw`$$\text{or, }\operatorname{cosec}A=2$$`,
              String.raw`$$\text{or, }\sin A=\frac{1}{2}=\sin 30^{\circ}$$`,
              String.raw`$$\therefore\ A=30^{\circ}$$`,
            ],
            answer: String.raw`$A=30^{\circ}$`,
          },
        },
      ],
    },
  ],
};

const MCQ_TRIG = "Multiple Choice (1 – 4)";
const FIND_VALUE_TRIG = "Find the value (5 – 8)";
const SHOW_TRIG = "Show that (9 – 14)";

const exercise92: Exercise = {
  id: "9.2",
  bnId: "অনুশীলনী ৯.২",
  title: "Ratios of Special Angles",
  bookPages: "১৯৪ – ১৯৫",
  problems: [
    {
      id: 1,
      group: MCQ_TRIG,
      question: String.raw`If $\cos\theta=\dfrac{1}{2}$, which one is the value of $\cot\theta$?
ক) $\dfrac{1}{\sqrt{3}}$
খ) $1$
গ) $\sqrt{3}$
ঘ) $2$`,
      solution: {
        steps: [
          String.raw`$$\cos\theta=\frac{1}{2}=\cos 60^{\circ}$$`,
          String.raw`$$\therefore\ \theta=60^{\circ}$$`,
          String.raw`$$\cot\theta=\cot 60^{\circ}=\frac{1}{\sqrt{3}}$$`,
        ],
        answer: String.raw`ক) $\dfrac{1}{\sqrt{3}}$`,
      },
    },
    {
      id: 2,
      group: MCQ_TRIG,
      question: String.raw`If $\cos^{2}\theta-\sin^{2}\theta=\dfrac{1}{3}$, what is the value of $\cos^{4}\theta-\sin^{4}\theta$?
ক) $3$
খ) $2$
গ) $1$
ঘ) $\dfrac{1}{3}$`,
      solution: {
        steps: [
          String.raw`$$\cos^{4}\theta-\sin^{4}\theta=\left(\cos^{2}\theta\right)^{2}-\left(\sin^{2}\theta\right)^{2}$$`,
          String.raw`$$=\left(\cos^{2}\theta+\sin^{2}\theta\right)\left(\cos^{2}\theta-\sin^{2}\theta\right)$$`,
          String.raw`$$=1\times\frac{1}{3}\qquad\left[\,\cos^{2}\theta+\sin^{2}\theta=1,\ \cos^{2}\theta-\sin^{2}\theta=\frac{1}{3}\,\right]$$`,
          String.raw`$$=\frac{1}{3}$$`,
        ],
        answer: String.raw`ঘ) $\dfrac{1}{3}$`,
      },
    },
    {
      id: 3,
      group: MCQ_TRIG,
      question: String.raw`If $\cot(\theta-30^{\circ})=\dfrac{1}{\sqrt{3}}$, what is $\sin\theta$?
ক) $\dfrac{1}{2}$
খ) $0$
গ) $1$
ঘ) $\dfrac{\sqrt{3}}{2}$`,
      solution: {
        steps: [
          String.raw`$$\cot(\theta-30^{\circ})=\frac{1}{\sqrt{3}}=\cot 60^{\circ}$$`,
          String.raw`$$\text{or, }\theta-30^{\circ}=60^{\circ}$$`,
          String.raw`$$\therefore\ \theta=90^{\circ}$$`,
          String.raw`$$\sin\theta=\sin 90^{\circ}=1$$`,
        ],
        answer: String.raw`গ) $1$`,
      },
    },
    {
      id: 4,
      group: MCQ_TRIG,
      question: String.raw`If $\tan(3A)=\sqrt{3}$, what is $A$?
ক) $45^{\circ}$
খ) $30^{\circ}$
গ) $20^{\circ}$
ঘ) $15^{\circ}$`,
      solution: {
        steps: [
          String.raw`$$\tan 3A=\sqrt{3}=\tan 60^{\circ}$$`,
          String.raw`$$\text{or, }3A=60^{\circ}$$`,
          String.raw`$$\therefore\ A=20^{\circ}$$`,
        ],
        answer: String.raw`গ) $20^{\circ}$`,
      },
    },
    // ─────────────── মান নির্ণয় করো (৫ – ৮) ───────────────
    {
      id: 5,
      group: FIND_VALUE_TRIG,
      question: String.raw`$$\frac{1-\cot^{2}60^{\circ}}{1+\cot^{2}60^{\circ}}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1-\cot^{2}60^{\circ}}{1+\cot^{2}60^{\circ}}$$`,
          String.raw`$$=\frac{1-\left(\frac{1}{\sqrt{3}}\right)^{2}}{1+\left(\frac{1}{\sqrt{3}}\right)^{2}}\qquad\left[\,\cot 60^{\circ}=\frac{1}{\sqrt{3}}\,\right]$$`,
          String.raw`$$=\frac{1-\frac{1}{3}}{1+\frac{1}{3}}$$`,
          String.raw`$$=\frac{\frac{2}{3}}{\frac{4}{3}}$$`,
          String.raw`$$=\frac{2}{3}\times\frac{3}{4}=\frac{1}{2}$$`,
        ],
        answer: String.raw`$\dfrac{1}{2}$`,
      },
    },
    {
      id: 6,
      group: FIND_VALUE_TRIG,
      question: String.raw`$$\tan 45^{\circ}\cdot\sin^{2}60^{\circ}\cdot\tan 30^{\circ}\cdot\tan 60^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\tan 45^{\circ}\cdot\sin^{2}60^{\circ}\cdot\tan 30^{\circ}\cdot\tan 60^{\circ}$$`,
          String.raw`$$=1\times\left(\frac{\sqrt{3}}{2}\right)^{2}\times\frac{1}{\sqrt{3}}\times\sqrt{3}\qquad\left[\,\tan 45^{\circ}=1,\ \sin 60^{\circ}=\frac{\sqrt{3}}{2},\ \tan 30^{\circ}=\frac{1}{\sqrt{3}},\ \tan 60^{\circ}=\sqrt{3}\,\right]$$`,
          String.raw`$$=1\times\frac{3}{4}\times 1$$`,
          String.raw`$$=\frac{3}{4}$$`,
        ],
        answer: String.raw`$\dfrac{3}{4}$`,
      },
    },
    {
      id: 7,
      group: FIND_VALUE_TRIG,
      question: String.raw`$$\frac{1-\cos^{2}60^{\circ}}{1+\cos^{2}60^{\circ}}+\sec^{2}60^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{1-\cos^{2}60^{\circ}}{1+\cos^{2}60^{\circ}}+\sec^{2}60^{\circ}$$`,
          String.raw`$$=\frac{1-\left(\frac{1}{2}\right)^{2}}{1+\left(\frac{1}{2}\right)^{2}}+(2)^{2}\qquad\left[\,\cos 60^{\circ}=\frac{1}{2},\ \sec 60^{\circ}=2\,\right]$$`,
          String.raw`$$=\frac{1-\frac{1}{4}}{1+\frac{1}{4}}+4$$`,
          String.raw`$$=\frac{\frac{3}{4}}{\frac{5}{4}}+4$$`,
          String.raw`$$=\frac{3}{5}+4$$`,
          String.raw`$$=\frac{3+20}{5}=\frac{23}{5}$$`,
        ],
        answer: String.raw`$\dfrac{23}{5}$`,
      },
    },
    {
      id: 8,
      group: FIND_VALUE_TRIG,
      question: String.raw`$$\cos 45^{\circ}\cdot\cot^{2}60^{\circ}\cdot\operatorname{cosec}^{2}30^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\cos 45^{\circ}\cdot\cot^{2}60^{\circ}\cdot\operatorname{cosec}^{2}30^{\circ}$$`,
          String.raw`$$=\frac{1}{\sqrt{2}}\times\left(\frac{1}{\sqrt{3}}\right)^{2}\times(2)^{2}\qquad\left[\,\cos 45^{\circ}=\frac{1}{\sqrt{2}},\ \cot 60^{\circ}=\frac{1}{\sqrt{3}},\ \operatorname{cosec}30^{\circ}=2\,\right]$$`,
          String.raw`$$=\frac{1}{\sqrt{2}}\times\frac{1}{3}\times 4$$`,
          String.raw`$$=\frac{4}{3\sqrt{2}}$$`,
          String.raw`$$=\frac{4\sqrt{2}}{3\times 2}=\frac{2\sqrt{2}}{3}$$`,
        ],
        answer: String.raw`$\dfrac{2\sqrt{2}}{3}$`,
      },
    },
    // ─────────────── দেখাও যে (৯ – ১৪) ───────────────
    {
      id: 9,
      group: SHOW_TRIG,
      question: String.raw`$$\cos^{2}30^{\circ}-\sin^{2}30^{\circ}=\cos 60^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\cos^{2}30^{\circ}-\sin^{2}30^{\circ}$$`,
          String.raw`$$=\left(\frac{\sqrt{3}}{2}\right)^{2}-\left(\frac{1}{2}\right)^{2}\qquad\left[\,\cos 30^{\circ}=\frac{\sqrt{3}}{2},\ \sin 30^{\circ}=\frac{1}{2}\,\right]$$`,
          String.raw`$$=\frac{3}{4}-\frac{1}{4}=\frac{2}{4}=\frac{1}{2}$$`,
          String.raw`$$\text{R.H.S.}=\cos 60^{\circ}=\frac{1}{2}$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 10,
      group: SHOW_TRIG,
      question: String.raw`$$\sin 60^{\circ}\cdot\cos 30^{\circ}+\cos 60^{\circ}\cdot\sin 30^{\circ}=\sin 90^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\sin 60^{\circ}\cdot\cos 30^{\circ}+\cos 60^{\circ}\cdot\sin 30^{\circ}$$`,
          String.raw`$$=\frac{\sqrt{3}}{2}\cdot\frac{\sqrt{3}}{2}+\frac{1}{2}\cdot\frac{1}{2}$$`,
          String.raw`$$=\frac{3}{4}+\frac{1}{4}$$`,
          String.raw`$$=\frac{4}{4}=1$$`,
          String.raw`$$\text{R.H.S.}=\sin 90^{\circ}=1$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 11,
      group: SHOW_TRIG,
      question: String.raw`$$\cos 60^{\circ}\cdot\cos 30^{\circ}+\sin 60^{\circ}\cdot\sin 30^{\circ}=\cos 30^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$\text{L.H.S.}=\cos 60^{\circ}\cdot\cos 30^{\circ}+\sin 60^{\circ}\cdot\sin 30^{\circ}$$`,
          String.raw`$$=\frac{1}{2}\cdot\frac{\sqrt{3}}{2}+\frac{\sqrt{3}}{2}\cdot\frac{1}{2}$$`,
          String.raw`$$=\frac{\sqrt{3}}{4}+\frac{\sqrt{3}}{4}$$`,
          String.raw`$$=\frac{2\sqrt{3}}{4}=\frac{\sqrt{3}}{2}$$`,
          String.raw`$$\text{R.H.S.}=\cos 30^{\circ}=\frac{\sqrt{3}}{2}$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 12,
      group: SHOW_TRIG,
      question: String.raw`$\sin 3A=\cos 3A$ if $A=15^{\circ}$.`,
      solution: {
        steps: [
          String.raw`$$A=15^{\circ}\ \Rightarrow\ 3A=3\times15^{\circ}=45^{\circ}$$`,
          String.raw`$$\text{L.H.S.}=\sin 3A=\sin 45^{\circ}=\frac{1}{\sqrt{2}}$$`,
          String.raw`$$\text{R.H.S.}=\cos 3A=\cos 45^{\circ}=\frac{1}{\sqrt{2}}$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 13,
      group: SHOW_TRIG,
      question: String.raw`$$\sin 2A=\frac{2\tan A}{1+\tan^{2}A}\quad\text{if } A=45^{\circ}.$$`,
      solution: {
        steps: [
          String.raw`$$A=45^{\circ}\ \Rightarrow\ 2A=90^{\circ}$$`,
          String.raw`$$\text{L.H.S.}=\sin 2A=\sin 90^{\circ}=1$$`,
          String.raw`$$\text{R.H.S.}=\frac{2\tan 45^{\circ}}{1+\tan^{2}45^{\circ}}$$`,
          String.raw`$$=\frac{2\times 1}{1+(1)^{2}}\qquad[\,\tan 45^{\circ}=1\,]$$`,
          String.raw`$$=\frac{2}{2}=1$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 14,
      group: SHOW_TRIG,
      question: String.raw`$$\tan 2A=\frac{2\tan A}{1-\tan^{2}A}\quad\text{if } A=30^{\circ}.$$`,
      solution: {
        steps: [
          String.raw`$$A=30^{\circ}\ \Rightarrow\ 2A=60^{\circ}$$`,
          String.raw`$$\text{L.H.S.}=\tan 2A=\tan 60^{\circ}=\sqrt{3}$$`,
          String.raw`$$\text{R.H.S.}=\frac{2\tan 30^{\circ}}{1-\tan^{2}30^{\circ}}$$`,
          String.raw`$$=\frac{2\times\frac{1}{\sqrt{3}}}{1-\left(\frac{1}{\sqrt{3}}\right)^{2}}\qquad\left[\,\tan 30^{\circ}=\frac{1}{\sqrt{3}}\,\right]$$`,
          String.raw`$$=\frac{\frac{2}{\sqrt{3}}}{1-\frac{1}{3}}=\frac{\frac{2}{\sqrt{3}}}{\frac{2}{3}}$$`,
          String.raw`$$=\frac{2}{\sqrt{3}}\times\frac{3}{2}=\frac{3}{\sqrt{3}}=\sqrt{3}$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 15,
      question: String.raw`If $2\cos(A+B)=1=2\sin(A-B)$ and $A$, $B$ are acute angles, show that $A=45^{\circ}$, $B=15^{\circ}$.`,
      solution: {
        steps: [
          String.raw`$$2\cos(A+B)=1$$`,
          String.raw`$$\text{or, }\cos(A+B)=\frac{1}{2}=\cos 60^{\circ}$$`,
          String.raw`$$\therefore\ A+B=60^{\circ}\ \ldots(1)$$`,
          String.raw`$$2\sin(A-B)=1$$`,
          String.raw`$$\text{or, }\sin(A-B)=\frac{1}{2}=\sin 30^{\circ}$$`,
          String.raw`$$\therefore\ A-B=30^{\circ}\ \ldots(2)$$`,
          String.raw`$$\text{Adding }(1)\text{ and }(2):\ 2A=90^{\circ}$$`,
          String.raw`$$\therefore\ A=45^{\circ}$$`,
          String.raw`$$\text{From }(1):\ B=60^{\circ}-45^{\circ}=15^{\circ}$$`,
          String.raw`$$\therefore\ A=45^{\circ},\ B=15^{\circ}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`$A=45^{\circ},\ B=15^{\circ}$`,
      },
    },
    {
      id: 16,
      question: String.raw`If $\cos(A-B)=1$, $2\sin(A+B)=\sqrt{3}$ and $A$, $B$ are acute angles, find the values of $A$ and $B$.`,
      solution: {
        steps: [
          String.raw`$$\cos(A-B)=1=\cos 0^{\circ}$$`,
          String.raw`$$\therefore\ A-B=0^{\circ}\ \ldots(1)$$`,
          String.raw`$$2\sin(A+B)=\sqrt{3}$$`,
          String.raw`$$\text{or, }\sin(A+B)=\frac{\sqrt{3}}{2}=\sin 60^{\circ}$$`,
          String.raw`$$\therefore\ A+B=60^{\circ}\ \ldots(2)$$`,
          String.raw`$$\text{Adding }(1)\text{ and }(2):\ 2A=60^{\circ}$$`,
          String.raw`$$\therefore\ A=30^{\circ}$$`,
          String.raw`$$\text{From }(1):\ B=A=30^{\circ}$$`,
        ],
        answer: String.raw`$A=30^{\circ},\ B=30^{\circ}$`,
      },
    },
    {
      id: 17,
      question: String.raw`Solve: $$\frac{\cos A-\sin A}{\cos A+\sin A}=\frac{\sqrt{3}-1}{\sqrt{3}+1}$$`,
      solution: {
        steps: [
          String.raw`$$\frac{\cos A-\sin A}{\cos A+\sin A}=\frac{\sqrt{3}-1}{\sqrt{3}+1}$$`,
          String.raw`$$\text{or, }\frac{\frac{\cos A-\sin A}{\cos A}}{\frac{\cos A+\sin A}{\cos A}}=\frac{\sqrt{3}-1}{\sqrt{3}+1}\qquad[\,\text{dividing above and below by }\cos A\,]$$`,
          String.raw`$$\text{or, }\frac{1-\tan A}{1+\tan A}=\frac{\sqrt{3}-1}{\sqrt{3}+1}$$`,
          String.raw`$$\text{or, }(1-\tan A)(\sqrt{3}+1)=(1+\tan A)(\sqrt{3}-1)$$`,
          String.raw`$$\text{or, }\sqrt{3}+1-\sqrt{3}\tan A-\tan A=\sqrt{3}-1+\sqrt{3}\tan A-\tan A$$`,
          String.raw`$$\text{or, }1+1=\sqrt{3}\tan A+\sqrt{3}\tan A$$`,
          String.raw`$$\text{or, }2=2\sqrt{3}\tan A$$`,
          String.raw`$$\text{or, }\tan A=\frac{1}{\sqrt{3}}=\tan 30^{\circ}$$`,
          String.raw`$$\therefore\ A=30^{\circ}$$`,
        ],
        answer: String.raw`$A=30^{\circ}$`,
      },
    },
    {
      id: 18,
      question: String.raw`$A$ and $B$ are acute angles. If $\cot(A+B)=1$ and $\cot(A-B)=\sqrt{3}$, find the values of $A$ and $B$.`,
      solution: {
        steps: [
          String.raw`$$\cot(A+B)=1=\cot 45^{\circ}$$`,
          String.raw`$$\therefore\ A+B=45^{\circ}\ \ldots(1)$$`,
          String.raw`$$\cot(A-B)=\sqrt{3}=\cot 30^{\circ}$$`,
          String.raw`$$\therefore\ A-B=30^{\circ}\ \ldots(2)$$`,
          String.raw`$$\text{Adding }(1)\text{ and }(2):\ 2A=75^{\circ}$$`,
          String.raw`$$\therefore\ A=37\tfrac{1}{2}^{\circ}=37^{\circ}30'$$`,
          String.raw`$$\text{Subtracting }(2)\text{ from }(1):\ 2B=15^{\circ}$$`,
          String.raw`$$\therefore\ B=7\tfrac{1}{2}^{\circ}=7^{\circ}30'$$`,
        ],
        answer: String.raw`$A=37^{\circ}30',\ B=7^{\circ}30'$`,
      },
    },
    {
      id: 19,
      question: String.raw`Show that, $\cos 3A=4\cos^{3}A-3\cos A$ if $A=30^{\circ}$.`,
      solution: {
        steps: [
          String.raw`$$A=30^{\circ}\ \Rightarrow\ 3A=90^{\circ}$$`,
          String.raw`$$\text{L.H.S.}=\cos 3A=\cos 90^{\circ}=0$$`,
          String.raw`$$\text{R.H.S.}=4\cos^{3}30^{\circ}-3\cos 30^{\circ}$$`,
          String.raw`$$=4\left(\frac{\sqrt{3}}{2}\right)^{3}-3\cdot\frac{\sqrt{3}}{2}\qquad\left[\,\cos 30^{\circ}=\frac{\sqrt{3}}{2}\,\right]$$`,
          String.raw`$$=4\cdot\frac{3\sqrt{3}}{8}-\frac{3\sqrt{3}}{2}$$`,
          String.raw`$$=\frac{3\sqrt{3}}{2}-\frac{3\sqrt{3}}{2}=0$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
        ],
        answer: String.raw`Shown`,
      },
    },
    {
      id: 20,
      question: String.raw`Solve: $\sin\theta+\cos\theta=1$, where $0^{\circ}\le\theta\le 90^{\circ}$.`,
      solution: {
        steps: [
          String.raw`$$\sin\theta+\cos\theta=1$$`,
          String.raw`$$\text{or, }(\sin\theta+\cos\theta)^{2}=1^{2}\qquad[\,\text{squaring both sides}\,]$$`,
          String.raw`$$\text{or, }\sin^{2}\theta+2\sin\theta\cos\theta+\cos^{2}\theta=1$$`,
          String.raw`$$\text{or, }1+2\sin\theta\cos\theta=1\qquad[\,\sin^{2}\theta+\cos^{2}\theta=1\,]$$`,
          String.raw`$$\text{or, }2\sin\theta\cos\theta=0$$`,
          String.raw`$$\text{or, }\sin\theta\cos\theta=0$$`,
          String.raw`$$\therefore\ \sin\theta=0\quad\text{or}\quad\cos\theta=0$$`,
          String.raw`$$\sin\theta=0=\sin 0^{\circ}\ \Rightarrow\ \theta=0^{\circ}$$`,
          String.raw`$$\cos\theta=0=\cos 90^{\circ}\ \Rightarrow\ \theta=90^{\circ}$$`,
          String.raw`Both values lie in $0^{\circ}\le\theta\le 90^{\circ}$ and satisfy the given equation.`,
        ],
        answer: String.raw`$\theta=0^{\circ}$ or $\theta=90^{\circ}$`,
      },
    },
    {
      id: 21,
      question: String.raw`Solve: $\cos^{2}\theta-\sin^{2}\theta=2-5\cos\theta$, where $\theta$ is an acute angle.`,
      solution: {
        steps: [
          String.raw`$$\cos^{2}\theta-\sin^{2}\theta=2-5\cos\theta$$`,
          String.raw`$$\text{or, }\cos^{2}\theta-\left(1-\cos^{2}\theta\right)=2-5\cos\theta\qquad[\,\sin^{2}\theta=1-\cos^{2}\theta\,]$$`,
          String.raw`$$\text{or, }2\cos^{2}\theta-1=2-5\cos\theta$$`,
          String.raw`$$\text{or, }2\cos^{2}\theta+5\cos\theta-3=0$$`,
          String.raw`$$\text{or, }2\cos^{2}\theta+6\cos\theta-\cos\theta-3=0$$`,
          String.raw`$$\text{or, }2\cos\theta(\cos\theta+3)-1(\cos\theta+3)=0$$`,
          String.raw`$$\text{or, }(\cos\theta+3)(2\cos\theta-1)=0$$`,
          String.raw`$$\cos\theta+3=0\ \Rightarrow\ \cos\theta=-3,\ \text{which is impossible since }-1\le\cos\theta\le 1$$`,
          String.raw`$$\therefore\ 2\cos\theta-1=0$$`,
          String.raw`$$\text{or, }\cos\theta=\frac{1}{2}=\cos 60^{\circ}$$`,
          String.raw`$$\therefore\ \theta=60^{\circ}$$`,
        ],
        answer: String.raw`$\theta=60^{\circ}$`,
      },
    },
    {
      id: 22,
      question: String.raw`Solve: $2\sin^{2}\theta+3\cos\theta-3=0$, where $\theta$ is an acute angle.`,
      solution: {
        steps: [
          String.raw`$$2\sin^{2}\theta+3\cos\theta-3=0$$`,
          String.raw`$$\text{or, }2\left(1-\cos^{2}\theta\right)+3\cos\theta-3=0\qquad[\,\sin^{2}\theta=1-\cos^{2}\theta\,]$$`,
          String.raw`$$\text{or, }2-2\cos^{2}\theta+3\cos\theta-3=0$$`,
          String.raw`$$\text{or, }-2\cos^{2}\theta+3\cos\theta-1=0$$`,
          String.raw`$$\text{or, }2\cos^{2}\theta-3\cos\theta+1=0$$`,
          String.raw`$$\text{or, }2\cos^{2}\theta-2\cos\theta-\cos\theta+1=0$$`,
          String.raw`$$\text{or, }2\cos\theta(\cos\theta-1)-1(\cos\theta-1)=0$$`,
          String.raw`$$\text{or, }(\cos\theta-1)(2\cos\theta-1)=0$$`,
          String.raw`$$\cos\theta-1=0\ \Rightarrow\ \cos\theta=1\ \Rightarrow\ \theta=0^{\circ},\ \text{which is not an acute angle, so it is rejected}$$`,
          String.raw`$$\therefore\ 2\cos\theta-1=0$$`,
          String.raw`$$\text{or, }\cos\theta=\frac{1}{2}=\cos 60^{\circ}$$`,
          String.raw`$$\therefore\ \theta=60^{\circ}$$`,
        ],
        answer: String.raw`$\theta=60^{\circ}$`,
      },
    },
    {
      id: 23,
      question: String.raw`Solve: $\tan^{2}\theta-\left(1+\sqrt{3}\right)\tan\theta+\sqrt{3}=0$`,
      solution: {
        steps: [
          String.raw`$$\tan^{2}\theta-\left(1+\sqrt{3}\right)\tan\theta+\sqrt{3}=0$$`,
          String.raw`$$\text{or, }\tan^{2}\theta-\tan\theta-\sqrt{3}\tan\theta+\sqrt{3}=0$$`,
          String.raw`$$\text{or, }\tan\theta(\tan\theta-1)-\sqrt{3}(\tan\theta-1)=0$$`,
          String.raw`$$\text{or, }(\tan\theta-1)\left(\tan\theta-\sqrt{3}\right)=0$$`,
          String.raw`$$\tan\theta-1=0\ \Rightarrow\ \tan\theta=1=\tan 45^{\circ}\ \Rightarrow\ \theta=45^{\circ}$$`,
          String.raw`$$\tan\theta-\sqrt{3}=0\ \Rightarrow\ \tan\theta=\sqrt{3}=\tan 60^{\circ}\ \Rightarrow\ \theta=60^{\circ}$$`,
        ],
        answer: String.raw`$\theta=45^{\circ}$ or $\theta=60^{\circ}$`,
      },
    },
    {
      id: 24,
      question: String.raw`Find the value: $$3\cot^{2}60^{\circ}+\frac{1}{4}\operatorname{cosec}^{2}30^{\circ}+5\sin^{2}45^{\circ}-4\cos^{2}60^{\circ}$$`,
      solution: {
        steps: [
          String.raw`$$3\cot^{2}60^{\circ}+\frac{1}{4}\operatorname{cosec}^{2}30^{\circ}+5\sin^{2}45^{\circ}-4\cos^{2}60^{\circ}$$`,
          String.raw`$$=3\left(\frac{1}{\sqrt{3}}\right)^{2}+\frac{1}{4}(2)^{2}+5\left(\frac{1}{\sqrt{2}}\right)^{2}-4\left(\frac{1}{2}\right)^{2}$$`,
          String.raw`$$=3\times\frac{1}{3}+\frac{1}{4}\times 4+5\times\frac{1}{2}-4\times\frac{1}{4}$$`,
          String.raw`$$=1+1+\frac{5}{2}-1$$`,
          String.raw`$$=1+\frac{5}{2}$$`,
          String.raw`$$=\frac{2+5}{2}=\frac{7}{2}$$`,
        ],
        answer: String.raw`$\dfrac{7}{2}$`,
      },
    },
    {
      id: 25,
      question: String.raw`In $\triangle ABC$, $\angle B=90^{\circ}$, $AB=5$ cm and $BC=12$ cm.`,
      parts: [
        {
          label: "ক",
          question: String.raw`Find the length of $AC$.`,
          solution: {
            steps: [
              String.raw`$\angle B=90^{\circ}$, so $AC$ is the hypotenuse.`,
              String.raw`$$AC=\sqrt{AB^{2}+BC^{2}}$$`,
              String.raw`$$=\sqrt{5^{2}+12^{2}}=\sqrt{25+144}$$`,
              String.raw`$$=\sqrt{169}=13\ \text{cm}$$`,
            ],
            answer: String.raw`$AC=13$ cm`,
          },
        },
        {
          label: "খ",
          question: String.raw`If $\angle C=\theta$, find the value of $\sin\theta+\cos\theta$.`,
          solution: {
            steps: [
              String.raw`With respect to $\theta=\angle C$, the opposite side is $AB$ and the adjacent side is $BC$.`,
              String.raw`$$\sin\theta=\frac{AB}{AC}=\frac{5}{13}$$`,
              String.raw`$$\cos\theta=\frac{BC}{AC}=\frac{12}{13}$$`,
              String.raw`$$\therefore\ \sin\theta+\cos\theta=\frac{5}{13}+\frac{12}{13}$$`,
              String.raw`$$=\frac{17}{13}$$`,
            ],
            answer: String.raw`$\dfrac{17}{13}$`,
          },
        },
        {
          label: "গ",
          question: String.raw`In the light of the stem, show that $\sec^{2}A+\operatorname{cosec}^{2}A=\sec^{2}A\cdot\operatorname{cosec}^{2}A$.`,
          solution: {
            steps: [
              String.raw`With respect to $\angle A$, the opposite side is $BC=12$, the adjacent side is $AB=5$ and the hypotenuse is $AC=13$.`,
              String.raw`$$\sec A=\frac{AC}{AB}=\frac{13}{5},\qquad \operatorname{cosec}A=\frac{AC}{BC}=\frac{13}{12}$$`,
              String.raw`$$\text{L.H.S.}=\sec^{2}A+\operatorname{cosec}^{2}A=\left(\frac{13}{5}\right)^{2}+\left(\frac{13}{12}\right)^{2}$$`,
              String.raw`$$=\frac{169}{25}+\frac{169}{144}$$`,
              String.raw`$$=169\left(\frac{1}{25}+\frac{1}{144}\right)=169\cdot\frac{144+25}{3600}$$`,
              String.raw`$$=169\cdot\frac{169}{3600}=\frac{28561}{3600}$$`,
              String.raw`$$\text{R.H.S.}=\sec^{2}A\cdot\operatorname{cosec}^{2}A=\frac{169}{25}\times\frac{169}{144}$$`,
              String.raw`$$=\frac{28561}{3600}$$`,
              String.raw`$$\therefore\ \text{L.H.S.}=\text{R.H.S.}\quad(\text{Shown})$$`,
            ],
            answer: String.raw`Shown`,
          },
        },
      ],
    },
    {
      id: 26,
      question: String.raw`In the right angled triangle $ABC$, $\angle B$ is one right angle and $AB=BC$. Prove that, $$\frac{BC\cos C-AC\cos B}{BC\cos B-AC\cos A}+\cos C=0$$`,
      solution: {
        steps: [
          String.raw`$\angle B=90^{\circ}$ and $AB=BC$, so $\triangle ABC$ is an isosceles right angled triangle.`,
          String.raw`$$\therefore\ \angle A=\angle C=\frac{180^{\circ}-90^{\circ}}{2}=45^{\circ}$$`,
          String.raw`$$AC=\sqrt{AB^{2}+BC^{2}}=\sqrt{BC^{2}+BC^{2}}=\sqrt{2}\,BC\qquad[\,AB=BC\,]$$`,
          String.raw`$$\cos B=\cos 90^{\circ}=0,\qquad \cos A=\cos C=\cos 45^{\circ}=\frac{1}{\sqrt{2}}$$`,
          String.raw`$$\text{Numerator}=BC\cos C-AC\cos B=BC\cdot\frac{1}{\sqrt{2}}-AC\cdot 0=\frac{BC}{\sqrt{2}}$$`,
          String.raw`$$\text{Denominator}=BC\cos B-AC\cos A=BC\cdot 0-\sqrt{2}\,BC\cdot\frac{1}{\sqrt{2}}=-BC$$`,
          String.raw`$$\therefore\ \text{L.H.S.}=\frac{\frac{BC}{\sqrt{2}}}{-BC}+\cos C$$`,
          String.raw`$$=-\frac{1}{\sqrt{2}}+\frac{1}{\sqrt{2}}$$`,
          String.raw`$$=0=\text{R.H.S.}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
    {
      id: 27,
      question: String.raw`In the right angled triangle $ABC$, $\angle B$ is one right angle and $\cot A+\cot B=2\cot C$. Prove that, $AC^{2}+BC^{2}=2AB^{2}$.`,
      solution: {
        steps: [
          String.raw`$\angle B=90^{\circ}$, so $AC$ is the hypotenuse.`,
          String.raw`$$\cot B=\cot 90^{\circ}=0$$`,
          String.raw`$$\therefore\ \cot A+\cot B=2\cot C$$`,
          String.raw`$$\text{or, }\cot A=2\cot C\ \ldots(1)$$`,
          String.raw`With respect to $\angle A$: opposite side $=BC$, adjacent side $=AB$.`,
          String.raw`$$\therefore\ \cot A=\frac{AB}{BC}$$`,
          String.raw`With respect to $\angle C$: opposite side $=AB$, adjacent side $=BC$.`,
          String.raw`$$\therefore\ \cot C=\frac{BC}{AB}$$`,
          String.raw`$$\text{From }(1):\ \frac{AB}{BC}=2\cdot\frac{BC}{AB}$$`,
          String.raw`$$\text{or, }AB^{2}=2BC^{2}\ \ldots(2)$$`,
          String.raw`$$\text{By Pythagoras, }AC^{2}=AB^{2}+BC^{2}$$`,
          String.raw`$$\therefore\ AC^{2}+BC^{2}=AB^{2}+BC^{2}+BC^{2}$$`,
          String.raw`$$=AB^{2}+2BC^{2}$$`,
          String.raw`$$=AB^{2}+AB^{2}\qquad[\,\text{from }(2)\,]$$`,
          String.raw`$$=2AB^{2}$$`,
          String.raw`$$\therefore\ AC^{2}+BC^{2}=2AB^{2}$$`,
        ],
        answer: String.raw`Proved`,
      },
    },
  ],
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
    title: "Trigonometric Ratios",
    bnTitle: "ত্রিকোণমিতিক অনুপাত",
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
