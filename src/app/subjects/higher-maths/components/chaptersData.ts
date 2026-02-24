// components/chaptersData.ts

export const chaptersData = [
  {
    id: 1,
    title: "Set Theory",
    problems: [
      // ---------------- MCQ 1–5 ----------------

      {
        id: 1,
        type: "mcq",
        question: `
(i) If any set has 2n elements, the number of its subsets will be 4^n.  
(ii) Q = { p/q : p, q ∈ Z, q ≠ 0 } is the set of rational numbers.  
(iii) If a, b ∈ R, then (a, b) = { x ∈ R : a < x < b }.

Which combination of these statements is correct?
        `,
        options: [
          "i and ii",
          "ii and iii",
          "i and iii",
          "i, ii and iii"
        ],
        solution: {
          steps: [
            "Number of subsets of 2n elements = 2^(2n) = 4^n ✓",
            "Definition of rational number is correct ✓",
            "Definition of open interval is correct ✓"
          ],
          answer: "Correct option: 4) i, ii and iii"
        }
      },

      {
        id: 2,
        type: "mcq",
        question: `
Let Aₙ = { n, 2n, 3n, ... } for n ∈ N.

Which one is A₁ ∩ A₂?
        `,
        options: ["A₁", "A₂", "A₃", "A₄"],
        solution: {
          steps: [
            "A₁ = all natural numbers",
            "A₂ = multiples of 2",
            "Common elements = multiples of 2"
          ],
          answer: "Correct option: 2) A₂"
        }
      },

      {
        id: 3,
        type: "mcq",
        question: `Which one denotes A₃ ∩ A₆?`,
        options: ["A₂", "A₃", "A₄", "A₆"],
        solution: {
          steps: [
            "A₃ = multiples of 3",
            "A₆ = multiples of 6",
            "Common elements = multiples of 6"
          ],
          answer: "Correct option: 4) A₆"
        }
      },

      {
        id: 4,
        type: "mcq",
        question: `Which one equals A₂ ∩ A₃?`,
        options: ["A₃", "A₄", "A₅", "A₆"],
        solution: {
          steps: [
            "LCM(2,3) = 6",
            "Common elements are multiples of 6"
          ],
          answer: "Correct option: 4) A₆"
        }
      },

      {
        id: 5,
        type: "mcq",
        question: `
U = {1,2,...,20}  
A = odd numbers  
B = prime numbers  

Which is correct?
        `,
        options: [
          "C = A ∩ B = {3,5,7,11,13,17,19}",
          "C = {2,3,5,7,11,13,17,19}",
          "D = A ∪ B excludes 2",
          "Both 1 and 3"
        ],
        solution: {
          steps: [
            "Odd numbers listed",
            "Prime numbers listed",
            "Intersection excludes 2",
            "Union includes 2"
          ],
          answer: "Correct option: 4) Both 1 and 3"
        }
      },

      // ---------------- Long Questions 6–10 ----------------

      {
        id: 6,
        question:
          "The number of elements of sets A and B are shown in the Venn diagram. If n(A) = n(B), find (1) x (2) n(A ∪ B) (3) n(B \\ A).",
        solution: {
          steps: [
            "n(A) = 4x",
            "n(B) = 3x + 8",
            "Equate: 4x = 3x + 8",
            "x = 8",
            "Substitute to find union and difference"
          ],
          answer:
            "x = 8,  n(A ∪ B) = 56,  n(B \\ A) = 24"
        }
      },

      {
        id: 7,
        question:
          "If U = {positive integers}, A = {x ≥ 5}, B = {5x < 12}, find n(A ∩ B) and n(A' ∪ B).",
        solution: {
          steps: [
            "B = {1,2}",
            "A ∩ B = ∅",
            "So n(A ∩ B) = 0"
          ],
          answer: "n(A ∩ B) = 0"
        }
      },

      {
        id: 8,
        question:
          "If U = even integers, A = {3x ≥ 25}, B = {5x < 12}, find n(A ∩ B).",
        solution: {
          steps: [
            "A = {10,12,...}",
            "B = even numbers < 2.4",
            "No common elements"
          ],
          answer: "n(A ∩ B) = 0"
        }
      },

      {
        id: 9,
        question:
          "Show that (1) A \\ A = ∅  (2) A \\ (A \\ A) = A.",
        solution: {
          steps: [
            "A \\ A means elements in A but not in A",
            "So it is empty set",
            "Then A \\ ∅ = A"
          ],
          answer: "Proved"
        }
      },

      {
        id: 10,
        question:
          "Show that A × (B ∪ C) = (A × B) ∪ (A × C).",
        solution: {
          steps: [
            "Take element from LHS",
            "Use definition of union",
            "Show it belongs to RHS"
          ],
          answer: "Proved"
        }
      }
    ]
  }
];