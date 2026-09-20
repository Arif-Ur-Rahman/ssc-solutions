// components/figures/scenes1.ts
//
// অধ্যায় ১ — বাস্তব সংখ্যা. Nothing in this chapter has a shape of its own, so
// the drawings here do the one thing a picture does better than a sentence:
// they put numbers somewhere. A number line settles "কোনটি কোনটির মধ্যে" at a
// glance, and the nesting diagram says which class sits inside which — the
// same content as the book's tree on page ৩, folded so it survives a phone.

import type { Scene } from "./types";

// Number-line coordinates are the value × 10 (or × 100 where the numbers are
// small), so the marks land in proportion without the scene carrying pixels.

export const scenes1: Record<string, Scene> = {
  // ── বাস্তব সংখ্যার শ্রেণিবিন্যাস, বাক্সের ভিতর বাক্স ──
  "real-classes": {
    size: 320,
    shapes: [
      { t: "poly", pts: [[0, 0], [100, 0], [100, 70], [0, 70]] },
      { t: "note", at: [50, 64], text: "বাস্তব সংখ্যা" },

      { t: "poly", pts: [[4, 4], [58, 4], [58, 56], [4, 56]] },
      { t: "note", at: [31, 51], text: "মূলদ" },

      { t: "poly", pts: [[62, 4], [96, 4], [96, 56], [62, 56]] },
      { t: "note", at: [79, 51], text: "অমূলদ" },
      { t: "note", at: [79, 30], text: "√2, √3, π" },

      { t: "note", at: [31, 42], text: "ভগ্নাংশ" },

      { t: "poly", pts: [[8, 8], [54, 8], [54, 35], [8, 35]] },
      { t: "note", at: [31, 30], text: "পূর্ণসংখ্যা" },

      { t: "poly", pts: [[12, 12], [50, 12], [50, 24], [12, 24]] },
      { t: "note", at: [31, 18], text: "স্বাভাবিক" },
    ],
    caption:
      "প্রতিটি বাক্স তার ভিতরের সবগুলোকে ধরে রাখে — প্রতিটি স্বাভাবিক সংখ্যা পূর্ণসংখ্যা, প্রতিটি পূর্ণসংখ্যা ও ভগ্নাংশ মূলদ, আর মূলদ ও অমূলদ মিলেই বাস্তব সংখ্যা। বাক্স দুইটি পাশাপাশি, কারণ কোনো সংখ্যা একই সাথে মূলদ ও অমূলদ হতে পারে না।",
  },

  // ── ০.১২ ও ০.৩১ এর মধ্যে দুইটি অমূলদ সংখ্যা (প্রশ্ন ৬ক) ──
  "between-012-031": {
    size: 300,
    shapes: [
      { t: "seg", a: [9, 0], b: [35, 0] },
      { t: "tick", a: [11.4, 0], b: [12.6, 0] },
      { t: "tick", a: [30.4, 0], b: [31.6, 0] },
      { t: "pt", at: [12, 0], dot: false, label: "0.12", dir: [0, -1] },
      { t: "pt", at: [31, 0], dot: false, label: "0.31", dir: [0, -1] },
      { t: "pt", at: [14.142, 0], label: "a", dir: [0, 1] },
      { t: "pt", at: [17.32, 0], label: "b", dir: [0, 1] },
    ],
    caption:
      "a = √2⁄10 = 0.1414…  এবং  b = √3⁄10 = 0.1732…, দুইটিই 0.12 ও 0.31 এর মাঝে পড়ে এবং দুইটিই অসীম অনাবৃত দশমিক, তাই অমূলদ।",
  },

  // ── ১/√২ ও √২ এর মধ্যে একটি মূলদ ও একটি অমূলদ (প্রশ্ন ৬খ) ──
  "between-root2": {
    size: 300,
    shapes: [
      { t: "seg", a: [6.3, 0], b: [15.2, 0] },
      { t: "tick", a: [6.87, 0], b: [7.27, 0] },
      { t: "tick", a: [13.94, 0], b: [14.34, 0] },
      { t: "pt", at: [7.071, 0], dot: false, label: "1/√2", dir: [0, -1] },
      { t: "pt", at: [14.142, 0], dot: false, label: "√2", dir: [0, -1] },
      { t: "pt", at: [10, 0], label: "1", dir: [0, 1] },
      { t: "pt", at: [12.247, 0], label: "√6/2", dir: [0, 1] },
    ],
    caption:
      "তিনটি সংখ্যাকেই হর 2 দিয়ে লিখলে √2⁄2 < √4⁄2 < √6⁄2 < √8⁄2 — অর্থাৎ 1 (মূলদ) ও √6⁄2 (অমূলদ) দুইটিই 1/√2 ও √2 এর মধ্যে।",
  },

  // ── √১০ সংখ্যাটি ৩ ও ৪ এর মধ্যে (নমুনা প্রশ্ন) ──
  "root10-between": {
    size: 280,
    shapes: [
      { t: "seg", a: [2.7, 0], b: [4.3, 0] },
      { t: "tick", a: [2.96, 0], b: [3.04, 0] },
      { t: "tick", a: [3.96, 0], b: [4.04, 0] },
      { t: "pt", at: [3, 0], dot: false, label: "3", dir: [0, -1] },
      { t: "pt", at: [4, 0], dot: false, label: "4", dir: [0, -1] },
      { t: "pt", at: [3.1623, 0], label: "√10", dir: [0, 1] },
    ],
    caption:
      "9 < 10 < 16 বলে √9 < √10 < √16, অর্থাৎ 3 < √10 < 4 — বর্গমূলটি না বের করেই কথাটা পড়া যায়।",
  },

  // ── √৩ ও √১২ এর মধ্যবর্তী অমূলদ সংখ্যা (নমুনা প্রশ্ন) ──
  "between-root3-root12": {
    size: 300,
    shapes: [
      { t: "seg", a: [1.5, 0], b: [3.7, 0] },
      { t: "tick", a: [1.687, 0], b: [1.777, 0] },
      { t: "tick", a: [3.419, 0], b: [3.509, 0] },
      { t: "pt", at: [1.732, 0], dot: false, label: "a = √3", dir: [0, -1] },
      { t: "pt", at: [3.464, 0], dot: false, label: "b = √12", dir: [0, -1] },
      { t: "pt", at: [2.598, 0], label: "3√3/2", dir: [0, 1] },
    ],
    caption:
      "a = √3 = 1.732…, b = √12 = 3.464…; 3√3⁄2 = 2.598… ঠিক মাঝখানে পড়ে, আর √3 অমূলদ বলে 3√3⁄2ও অমূলদ।",
  },
};
