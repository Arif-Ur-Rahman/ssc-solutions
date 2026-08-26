// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
// Chapter 9 "ত্রিকোণমিতিক অনুপাত": অনুশীলনী ৯.১ (book pages ১৮৪-১৮৬) and
// অনুশীলনী ৯.২ (book pages ১৯৪-১৯৫).
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

export interface Exercise {
  id: string;
  bnId: string;
  title: string;
  bookPages: string;
  problems: Problem[];
}

export interface Chapter {
  id: number;
  title: string;
  bnTitle: string;
  exercises: Exercise[];
}

const SIMPLIFY = "Simplify (1 – 8)";
const PROVE = "Prove / Show that (9 – 16)";
const SOLVE = "Solve (17 – 20)";
const CREATIVE = "Creative Questions (21 – 22)";

const exercise41: Exercise = {
  id: "4.1",
  bnId: "অনুশীলনী ৪.১",
  title: "Exponents / Indices",
  bookPages: "৮০ – ৮১",
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
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
        answer: String.raw`Proved`,
      },
    },
    {
      id: 16,
      group: PROVE,
      question: String.raw`If $a^{x}=b$, $b^{y}=c$ and $c^{z}=a$, show that $xyz=1$.`,
      solution: {
        steps: [
          String.raw`$$c^{z}=a$$`,
          String.raw`$$\text{or, }\left(b^{y}\right)^{z}=a\qquad[\,c=b^{y}\,]$$`,
          String.raw`$$\text{or, } b^{yz}=a$$`,
          String.raw`$$\text{or, }\left(a^{x}\right)^{yz}=a\qquad[\,b=a^{x}\,]$$`,
          String.raw`$$\text{or, } a^{xyz}=a^{1}$$`,
          String.raw`$$\therefore\; xyz=1$$`,
        ],
        answer: String.raw`$xyz=1$ (shown)`,
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
        answer: String.raw`$x=0$ or $x=1$`,
      },
    },

    // ─────────────── সৃজনশীল (21 – 22) ───────────────
    {
      id: 21,
      group: CREATIVE,
      question: String.raw`$P=x^{a}$, $Q=x^{b}$ and $R=x^{c}$.`,
      parts: [
        {
          label: "ক",
          question: String.raw`Find the value of $$\left(\frac{P}{Q}\right)^{a+b}\times\left(\frac{Q}{R}\right)^{b+c}\div 2(RP)^{a-c}$$`,
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
          question: String.raw`Show that $$\left(\frac{P}{Q}\right)^{a^{2}+ab+b^{2}}\times\left(\frac{Q}{R}\right)^{b^{2}+bc+c^{2}}\times\left(\frac{R}{P}\right)^{c^{2}+ca+a^{2}}=1$$`,
          solution: {
            steps: [
              String.raw`$$\text{L.H.S.}=\left(\frac{P}{Q}\right)^{a^{2}+ab+b^{2}}\times\left(\frac{Q}{R}\right)^{b^{2}+bc+c^{2}}\times\left(\frac{R}{P}\right)^{c^{2}+ca+a^{2}}$$`,
              String.raw`$$=\left(x^{a-b}\right)^{a^{2}+ab+b^{2}}\times\left(x^{b-c}\right)^{b^{2}+bc+c^{2}}\times\left(x^{c-a}\right)^{c^{2}+ca+a^{2}}$$`,
              String.raw`$$=x^{(a-b)(a^{2}+ab+b^{2})}\times x^{(b-c)(b^{2}+bc+c^{2})}\times x^{(c-a)(c^{2}+ca+a^{2})}$$`,
              String.raw`$$=x^{a^{3}-b^{3}}\times x^{b^{3}-c^{3}}\times x^{c^{3}-a^{3}}$$`,
              String.raw`$$=x^{(a^{3}-b^{3})+(b^{3}-c^{3})+(c^{3}-a^{3})}$$`,
              String.raw`$$=x^{0}=1=\text{R.H.S.}$$`,
            ],
            answer: String.raw`Shown`,
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
          question: String.raw`Find the simplified value of $X$.`,
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
          question: String.raw`Show that $Y=1$.`,
          solution: {
            steps: [
              String.raw`$$Y=\sqrt[pq]{\frac{x^{p}}{x^{q}}}\times\sqrt[qr]{\frac{x^{q}}{x^{r}}}\times\sqrt[rp]{\frac{x^{r}}{x^{p}}}$$`,
              String.raw`$$=\left(x^{p-q}\right)^{\frac{1}{pq}}\times\left(x^{q-r}\right)^{\frac{1}{qr}}\times\left(x^{r-p}\right)^{\frac{1}{rp}}$$`,
              String.raw`$$=x^{\frac{p-q}{pq}}\times x^{\frac{q-r}{qr}}\times x^{\frac{r-p}{rp}}$$`,
              String.raw`$$=x^{\frac{p-q}{pq}+\frac{q-r}{qr}+\frac{r-p}{rp}}$$`,
              String.raw`$$=x^{\left(\frac{1}{q}-\frac{1}{p}\right)+\left(\frac{1}{r}-\frac{1}{q}\right)+\left(\frac{1}{p}-\frac{1}{r}\right)}$$`,
              String.raw`$$=x^{0}=1$$`,
            ],
            answer: String.raw`$Y=1$ (shown)`,
          },
        },
        {
          label: "গ",
          question: String.raw`If $Z=30$, find the value of $x$.`,
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
  title: "Logarithms",
  bookPages: "৮৬",
  problems: [
    {
      id: 1,
      question: String.raw`Find the value:`,
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
      question: String.raw`Find the value of $x$:`,
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
      question: String.raw`Show that,`,
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
            answer: String.raw`Shown`,
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
            answer: String.raw`Shown`,
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
            answer: String.raw`Shown`,
          },
        },
      ],
    },
    {
      id: 4,
      question: String.raw`Simplify:`,
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
          question: String.raw`Find the logarithm of $\sqrt{y^{3}}$ to the base $3$.`,
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
          question: String.raw`Find the value of $$w\log\frac{xz}{y^{2}}-x\log\frac{z^{2}}{x^{2}y}+y\log\frac{y^{4}}{x^{4}z}$$`,
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
          question: String.raw`Show that, $$\frac{\log\sqrt{y^{3}}+y\log x-\frac{y}{x}\log(xz)}{\log(xy)-\log z}=\log_{y}\sqrt{y^{3}}$$`,
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
            answer: String.raw`Shown`,
          },
        },
      ],
    },
  ],
};

const PROVE_TRIG = "Prove (6 – 20)";

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
};

export const chaptersData: Chapter[] = [
  { id: 1, title: "Real Numbers", bnTitle: "বাস্তব সংখ্যা", exercises: [] },
  { id: 2, title: "Set and Function", bnTitle: "সেট ও ফাংশন", exercises: [] },
  {
    id: 3,
    title: "Algebraic Expressions",
    bnTitle: "বীজগাণিতিক রাশি",
    exercises: [],
  },
  {
    id: 4,
    title: "Exponents and Logarithms",
    bnTitle: "সূচক ও লগারিদম",
    exercises: [exercise41, exercise42],
  },
  {
    id: 5,
    title: "Equations with One Variable",
    bnTitle: "এক চলকবিশিষ্ট সমীকরণ",
    exercises: [],
  },
  {
    id: 6,
    title: "Lines, Angles and Triangles",
    bnTitle: "রেখা, কোণ ও ত্রিভুজ",
    exercises: [],
  },
  {
    id: 7,
    title: "Practical Geometry",
    bnTitle: "ব্যবহারিক জ্যামিতি",
    exercises: [],
  },
  { id: 8, title: "Circle", bnTitle: "বৃত্ত", exercises: [] },
  {
    id: 9,
    title: "Trigonometric Ratios",
    bnTitle: "ত্রিকোণমিতিক অনুপাত",
    exercises: [exercise91, exercise92],
  },
  {
    id: 10,
    title: "Distance and Height",
    bnTitle: "দূরত্ব ও উচ্চতা",
    exercises: [],
  },
  {
    id: 11,
    title: "Algebraic Ratio and Proportion",
    bnTitle: "বীজগাণিতিক অনুপাত ও সমানুপাত",
    exercises: [],
  },
  {
    id: 12,
    title: "Simple Simultaneous Equations in Two Variables",
    bnTitle: "দুই চলকবিশিষ্ট সরল সহসমীকরণ",
    exercises: [],
  },
  { id: 13, title: "Finite Series", bnTitle: "সসীম ধারা", exercises: [] },
  {
    id: 14,
    title: "Ratio, Similarity and Symmetry",
    bnTitle: "অনুপাত, সদৃশতা ও প্রতিসমতা",
    exercises: [],
  },
  {
    id: 15,
    title: "Theorems and Constructions on Area",
    bnTitle: "ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য",
    exercises: [],
  },
  { id: 16, title: "Mensuration", bnTitle: "পরিমিতি", exercises: [] },
  { id: 17, title: "Statistics", bnTitle: "পরিসংখ্যান", exercises: [] },
];
