// components/chaptersData.ts
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// Chapter 4 "সূচক ও লগারিদম": অনুশীলনী ৪.১ (book pages ৮০-৮১) and
// অনুশীলনী ৪.২ (book page ৮৬).
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
    exercises: [],
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
