// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
// Chapter 9 "ত্রিকোণমিতিক অনুপাত": অনুশীলনী ৯.১ (book pages ১৮৪-১৮৬) and
// অনুশীলনী ৯.২ (book pages ১৯৪-১৯৫).
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
      question: String.raw`একটি আয়তাকার জমির দৈর্ঘ্য $150$ মিটার এবং ক্ষেত্রফল $15000$ বর্গমিটার। এর বাইরে চারদিকে $3$ মিটার চওড়া রাস্তা আছে। জমিটির মধ্যে এর দৈর্ঘ্যের সমান ভূমিবিশিষ্ট একটি সমদ্বিবাহু ত্রিভুজাকৃতির জমিতে সবজি চাষ করা হলো। ত্রিভুজাকৃতি জমির ক্ষেত্রফল আয়তাকার জমিটির ক্ষেত্রফলের অর্ধেক।`,
      parts: [
        {
          label: "ক",
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
  {
    id: 16,
    title: "পরিমিতি",
    exercises: [exercise161, exercise162],
  },
  { id: 17, title: "পরিসংখ্যান", exercises: [] },
];
