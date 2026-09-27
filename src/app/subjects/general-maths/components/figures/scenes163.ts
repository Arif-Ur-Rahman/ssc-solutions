// components/figures/scenes163.ts
//
// অনুশীলনী ১৬.৩ — বৃত্ত সংক্রান্ত পরিমাপ.
// See scenes161.ts for how a scene is put together.
//
// A scene has no curved region of its own, so a shaded বৃত্তকলা, অর্ধবৃত্ত or
// বৃত্তাকার রাস্তা is drawn as a polygon through points sampled along the arc
// (`arcPts`). A few degrees apart the chords are shorter than the stroke is
// wide, and the region can be tinted with the same `poly` and `ring` every
// other chapter uses. Where the question itself asks for the shaded part
// ("গাড় চিহ্নিত"), it is a `ring`, whose tint is the stronger of the two.
//
// Problem ৫ gives only the difference of the two radii, so its radii are
// chosen to read well; its caption says so.

import type { Pt, Scene } from "./types";

// Points on the circle about `c`, anticlockwise from `from`° to `to`°.
const arcPts = (c: Pt, r: number, from: number, to: number, n = 60): Pt[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = ((from + ((to - from) * i) / n) * Math.PI) / 180;
    return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)] as Pt;
  });

const at = (c: Pt, r: number, deg: number): Pt => [
  c[0] + r * Math.cos((deg * Math.PI) / 180),
  c[1] + r * Math.sin((deg * Math.PI) / 180),
];

const O: Pt = [0, 0];

// A বৃত্তকলা of radius `r` and angle `deg`, with its arc marked and its
// angle written at the centre.
const sector = (r: number, deg: number, text: string): Scene["shapes"] => [
  { t: "circle", at: O, r },
  { t: "poly", pts: [O, ...arcPts(O, r, 0, deg)], fill: true },
  { t: "seg", a: O, b: [r, 0] },
  { t: "seg", a: O, b: at(O, r, deg) },
  { t: "arc", at: O, r, from: 0, to: deg, mark: true },
  { t: "ang", at: O, a: [r, 0], b: at(O, r, deg), text, r: 22 },
  { t: "pt", at: O, label: "O", dir: [-1, -0.4] },
  { t: "pt", at: [r, 0], label: "A", dir: [1, 0] },
  { t: "pt", at: at(O, r, deg), label: "B", dir: [0.5, 1] },
];

// Two concentric circles with the strip between them tinted.
const road = (r: number, R: number): Scene["shapes"] => [
  { t: "ring", outer: arcPts(O, R, 0, 360, 90), inner: arcPts(O, r, 0, 360, 90) },
  { t: "circle", at: O, r: R },
  { t: "circle", at: O, r },
  { t: "pt", at: O },
];

export const scenes163: Record<string, Scene> = {
  // উদাহরণ ১৮ — ব্যাস 26.
  "163-ex18": {
    shapes: [
      { t: "circle", at: O, r: 13 },
      { t: "seg", a: [-13, 0], b: [13, 0] },
      { t: "note", at: [0, 0], text: "2r = 26 সে.মি.", dir: [0, 1] },
      { t: "pt", at: O, label: "O", dir: [0, -1] },
    ],
    caption: "ব্যাস ব্যাসার্ধের দ্বিগুণ; পরিধি c = 2πr।",
  },

  // উদাহরণ ১৯ — r = 8, কেন্দ্রে 56°.
  "163-ex19": {
    shapes: [...sector(8, 56, "56°"), { t: "len", a: O, b: [8, 0], text: "8" }],
    caption: "গাঢ় চাপটি s, রং করা অংশটি বৃত্তকলা; দুটিই কোণ θ-এর সমানুপাতিক।",
  },

  // উদাহরণ ২০ — ব্যাস ও পরিধির পার্থক্য 90.
  "163-ex20": {
    shapes: [
      { t: "circle", at: O, r: 21.01 },
      { t: "seg", a: [-21.01, 0], b: [21.01, 0], dash: true },
      { t: "note", at: [0, 0], text: "2r", dir: [0, 1] },
      { t: "note", at: at(O, 21.01, 55), text: "2πr", dir: [1, 1] },
      { t: "pt", at: O },
    ],
    caption: "পরিধি 2πr থেকে ব্যাস 2r বাদ দিলে থাকে 2r(π − 1) = 90।",
  },

  // উদাহরণ ২১ — মাঠের ব্যাস 124, সীমানা ঘেঁষে 6 মিটার রাস্তা.
  "163-ex21": {
    shapes: [
      ...road(62, 68),
      { t: "len", a: O, b: [62, 0], text: "62", side: -1 },
      { t: "seg", a: at(O, 62, 40), b: at(O, 68, 40) },
      { t: "note", at: at(O, 70, 40), text: "6", dir: [1, 1] },
    ],
    caption: "রাস্তার ক্ষেত্রফল = π(R² − r²), যেখানে R = 68 ও r = 62।",
  },

  // উদাহরণ ২২ — r = 12, চাপ 14.
  "163-ex22": {
    shapes: [
      ...sector(12, 66.84, "θ"),
      { t: "len", a: O, b: [12, 0], text: "12" },
      { t: "note", at: at(O, 12, 33), text: "s = 14", dir: [1, 0] },
    ],
    caption: "চাপ ও ব্যাসার্ধ জানা থাকলে s = πrθ/180 থেকে θ বের হয়।",
  },

  // উদাহরণ ২৩ — চাকার ব্যাস 4.5, পথ 360.
  "163-ex23": {
    shapes: [
      { t: "circle", at: [0, 2.25], r: 2.25 },
      { t: "seg", a: [0, 0], b: [0, 4.5], dash: true },
      { t: "len", a: [0, 0], b: [0, 4.5], text: "4.5 মি.", side: -1 },
      { t: "seg", a: [-4, 0], b: [8, 0] },
      { t: "dim", a: [0, -0.9], b: [7.069, -0.9], text: "এক পাক = 2πr" },
      { t: "pt", at: [0, 2.25] },
    ],
    caption: "চাকা একবার ঘুরলে তার পরিধির সমান পথ এগোয়।",
  },

  // উদাহরণ ২৪ — 21120 সে.মি. যেতে 32 ও 48 বার.
  "163-ex24": {
    shapes: [
      { t: "circle", at: [105.04, 105.04], r: 105.04 },
      { t: "circle", at: [300, 70.03], r: 70.03 },
      { t: "seg", a: [-10, 0], b: [380, 0] },
      { t: "len", a: [105.04, 105.04], b: [210.08, 105.04], text: "R" },
      { t: "len", a: [300, 70.03], b: [370.03, 70.03], text: "r" },
      { t: "seg", a: [105.04, 105.04], b: [210.08, 105.04], dash: true },
      { t: "seg", a: [300, 70.03], b: [370.03, 70.03], dash: true },
      { t: "note", at: [105.04, 50], text: "32 বার" },
      { t: "note", at: [300, 30], text: "48 বার" },
    ],
    caption: "একই পথ — ছোট চাকাকে বেশি বার ঘুরতে হয়।",
  },

  // উদাহরণ ২৫ — বৃত্তের ব্যাসার্ধ 14, সমান ক্ষেত্রফলের বর্গ.
  "163-ex25": {
    shapes: [
      { t: "circle", at: [0, 12.405], r: 14 },
      { t: "seg", a: [0, 12.405], b: [14, 12.405] },
      { t: "len", a: [0, 12.405], b: [14, 12.405], text: "14", side: -1 },
      { t: "pt", at: [0, 12.405] },
      { t: "poly", pts: [[20, 0], [44.81, 0], [44.81, 24.81], [20, 24.81]], fill: true },
      { t: "len", a: [20, 0], b: [44.81, 0], text: "a" },
    ],
    caption: "πr² = a² — দুইটি ক্ষেত্রের ক্ষেত্রফল সমান।",
  },

  // উদাহরণ ২৬ — বর্গ 22 ও তার উপর অর্ধবৃত্ত AED.
  "163-ex26": {
    shapes: [
      { t: "poly", pts: arcPts([11, 22], 11, 0, 180), fill: true },
      { t: "poly", pts: [[0, 0], [22, 0], [22, 22], [0, 22]], fill: true },
      { t: "sq", at: [22, 0], a: [0, 0], b: [22, 22] },
      { t: "len", a: [0, 22], b: [22, 22], text: "22", side: -1 },
      { t: "pt", at: [0, 22], label: "A", dir: [-1, 0] },
      { t: "pt", at: [0, 0], label: "B", dir: [-1, -1] },
      { t: "pt", at: [22, 0], label: "C", dir: [1, -1] },
      { t: "pt", at: [22, 22], label: "D", dir: [1, 0] },
      { t: "pt", at: [11, 33], label: "E", dir: [0, 1], dot: false },
    ],
    caption: "বর্গের বাহু AD-ই অর্ধবৃত্তের ব্যাস, তাই r = 11।",
  },

  // উদাহরণ ২৭ — আয়ত 12 × 10 ও বৃত্তাংশ DAE, কেন্দ্র A, কোণ 30°.
  "163-ex27": {
    shapes: [
      { t: "poly", pts: [[0, 10], ...arcPts([0, 10], 12, 0, 30, 20)], fill: true },
      { t: "poly", pts: [[0, 0], [12, 0], [12, 10], [0, 10]], fill: true },
      { t: "arc", at: [0, 10], r: 12, from: 0, to: 30, mark: true },
      { t: "ang", at: [0, 10], a: [12, 10], b: at([0, 10], 12, 30), text: "30°", r: 34 },
      { t: "sq", at: [12, 0], a: [0, 0], b: [12, 10] },
      { t: "tick", a: [0, 10], b: [12, 10], n: 2 },
      { t: "tick", a: [0, 0], b: [12, 0], n: 2 },
      { t: "len", a: [0, 10], b: [12, 10], text: "12", side: -1 },
      { t: "len", a: [12, 0], b: [12, 10], text: "10" },
      { t: "pt", at: [0, 10], label: "A", dir: [-1, 0] },
      { t: "pt", at: [0, 0], label: "B", dir: [-1, -1] },
      { t: "pt", at: [12, 0], label: "C", dir: [1, -1] },
      { t: "pt", at: [12, 10], label: "D", dir: [1, 0] },
      { t: "pt", at: at([0, 10], 12, 30), label: "E", dir: [1, 1] },
    ],
    caption: "বৃত্তাংশের ব্যাসার্ধ AD = AE = 12; সম্পূর্ণ ক্ষেত্র = বৃত্তাংশ + আয়তক্ষেত্র।",
  },

  // ─────────── অনুশীলনী ───────────

  // ১ — কেন্দ্রে 30°, ব্যাস 126.
  "163-p1": {
    shapes: [
      ...sector(63, 30, "30°"),
      { t: "seg", a: [-63, 0], b: [0, 0], dash: true },
      { t: "note", at: [-31.5, 0], text: "ব্যাস 126 সে.মি.", dir: [0, 1] },
    ],
    caption: "ব্যাস 126 হলে ব্যাসার্ধ 63; গাঢ় চাপটির দৈর্ঘ্য নির্ণেয়।",
  },

  // ২ — 66 মি./মিনিট বেগে দেড় মিনিটে এক চক্কর.
  "163-p2": {
    shapes: [
      { t: "circle", at: O, r: 15.756 },
      { t: "seg", a: [-15.756, 0], b: [15.756, 0], dash: true },
      { t: "note", at: O, text: "d = ?", dir: [0, 1] },
      { t: "arc", at: O, r: 15.756, from: 20, to: 160, mark: true },
      { t: "note", at: [0, 15.756], text: "পরিধি = 99 মিটার", dir: [0, 1] },
    ],
    caption: "ঘোড়া মাঠ একবার ঘুরে আসে — অতিক্রান্ত পথই মাঠের পরিধি।",
  },

  // ৩ — বৃত্তকলা 77 বর্গমিটার, ব্যাসার্ধ 21.
  "163-p3": {
    shapes: [
      ...sector(21, 20, "θ"),
      { t: "len", a: O, b: [21, 0], text: "21 মি." },
    ],
    caption: "রং করা বৃত্তকলার ক্ষেত্রফল 77 বর্গমিটার — কোণ θ নির্ণেয়।",
  },

  // ৪ — ব্যাসার্ধ 14, কেন্দ্রে 75°.
  "163-p4": {
    shapes: [
      ...sector(14, 75, "75°"),
      { t: "len", a: O, b: [14, 0], text: "14 সে.মি." },
    ],
    caption: "বৃত্তকলার ক্ষেত্রফল = (θ/360) × πr²।",
  },

  // ৫ — বাইরের পরিধি ভিতরের চেয়ে 44 মিটার বেশি.
  "163-p5": {
    shapes: [
      ...road(21, 28),
      { t: "seg", a: O, b: [21, 0], dash: true },
      { t: "seg", a: O, b: at(O, 28, 120), dash: true },
      { t: "note", at: [10.5, 0], text: "r", dir: [0, -1] },
      { t: "note", at: at(O, 14, 120), text: "R", dir: [1, 0.4] },
      { t: "dim", a: [21, 0], b: [28, 0], text: "R − r", side: -1, off: 14 },
    ],
    caption: "চিত্র মাপ অনুযায়ী নয় — দুই ব্যাসার্ধ আলাদাভাবে দেওয়া নেই, শুধু পরিধির পার্থক্য 44 মিটার।",
  },

  // ৬ — পার্কের ব্যাস 26, বাইরে 2 মিটার পথ.
  "163-p6": {
    shapes: [
      ...road(13, 15),
      { t: "len", a: O, b: [13, 0], text: "13", side: -1 },
      { t: "seg", a: [0, 0], b: [13, 0] },
      { t: "seg", a: at(O, 13, 50), b: at(O, 15, 50) },
      { t: "note", at: at(O, 15.8, 50), text: "2", dir: [1, 1] },
    ],
    caption: "পথটি বাইরে, তাই R = 13 + 2 = 15 মিটার।",
  },

  // ৭ — সামনের চাকার ব্যাস 28, পিছনের 35.
  "163-p7": {
    shapes: [
      { t: "circle", at: [17.5, 17.5], r: 17.5 },
      { t: "circle", at: [70, 14], r: 14 },
      { t: "seg", a: [-4, 0], b: [90, 0] },
      { t: "seg", a: [17.5, 0], b: [17.5, 35], dash: true },
      { t: "seg", a: [70, 0], b: [70, 28], dash: true },
      { t: "len", a: [17.5, 0], b: [17.5, 35], text: "35", side: -1 },
      { t: "len", a: [70, 0], b: [70, 28], text: "28", side: -1 },
      { t: "note", at: [17.5, 38], text: "পিছনের চাকা", dir: [0, 1] },
      { t: "note", at: [70, 31], text: "সামনের চাকা", dir: [0, 1] },
    ],
    caption: "একই 88 মিটার পথ — ছোট সামনের চাকা বেশি বার ঘোরে।",
  },

  // ৮ — পরিধি 220, অন্তর্লিখিত বর্গ.
  "163-p8": {
    shapes: [
      { t: "circle", at: O, r: 35.014 },
      {
        t: "poly",
        pts: [45, 135, 225, 315].map((g) => at(O, 35.014, g)),
        fill: true,
      },
      { t: "seg", a: at(O, 35.014, 225), b: at(O, 35.014, 45), dash: true },
      { t: "sq", at: at(O, 35.014, 315), a: at(O, 35.014, 225), b: at(O, 35.014, 45) },
      { t: "note", at: [6, -3], text: "2r", dir: [1, 0] },
      { t: "len", a: at(O, 35.014, 225), b: at(O, 35.014, 315), text: "a" },
      { t: "pt", at: O, label: "O", dir: [-1, 0.3] },
    ],
    caption: "অন্তর্লিখিত বর্গের কর্ণই বৃত্তের ব্যাস: √2 a = 2r।",
  },

  // ৯ — বৃত্তের পরিধি = সমবাহু ত্রিভুজের পরিসীমা.
  "163-p9": {
    shapes: [
      { t: "circle", at: O, r: 3 },
      { t: "seg", a: O, b: [3, 0] },
      { t: "len", a: O, b: [3, 0], text: "r", side: -1 },
      { t: "pt", at: O },
      {
        t: "poly",
        pts: [[6, -3], [12.283, -3], [9.142, 2.441]],
        fill: true,
      },
      { t: "len", a: [6, -3], b: [12.283, -3], text: "a" },
      { t: "tick", a: [6, -3], b: [12.283, -3] },
      { t: "tick", a: [12.283, -3], b: [9.142, 2.441] },
      { t: "tick", a: [9.142, 2.441], b: [6, -3] },
    ],
    caption: "চিত্রে পরিধি 2πr ও পরিসীমা 3a সত্যিই সমান আঁকা; 3a = 2πr।",
  },

  // ১০(ক) — ত্রিভুজ 8, 9, 10 ও 9 বাহুর উপর অর্ধবৃত্ত.
  "163-p10-a": {
    shapes: [
      { t: "poly", pts: arcPts([4.5, 0], 4.5, 0, 180), fill: true },
      { t: "poly", pts: [[0, 0], [9, 0], [2.5, -7.599]], fill: true },
      { t: "len", a: [0, 0], b: [9, 0], text: "9 সে.মি.", side: -1 },
      { t: "len", a: [0, 0], b: [2.5, -7.599], text: "8 সে.মি." },
      { t: "len", a: [9, 0], b: [2.5, -7.599], text: "10 সে.মি." },
    ],
    caption: "ক্ষেত্রটি একটি ত্রিভুজ ও তার 9 সে.মি. বাহুকে ব্যাস ধরে আঁকা অর্ধবৃত্ত।",
  },

  // ১০(খ) — 4 সে.মি. বাহুর বর্গ ও তার উপর অর্ধবৃত্ত.
  "163-p10-b": {
    shapes: [
      { t: "poly", pts: arcPts([2, 4], 2, 0, 180), fill: true },
      { t: "poly", pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: true },
      { t: "sq", at: [4, 0], a: [0, 0], b: [4, 4] },
      { t: "tick", a: [0, 0], b: [4, 0] },
      { t: "tick", a: [4, 0], b: [4, 4] },
      { t: "tick", a: [4, 4], b: [0, 4] },
      { t: "tick", a: [0, 4], b: [0, 0] },
      { t: "len", a: [0, 0], b: [0, 4], text: "4 সে.মি." },
    ],
    caption: "চার বাহুতেই সমান-চিহ্ন ও একটি সমকোণ — নিচের অংশ 4 সে.মি. বাহুর বর্গ, উপরে 4 সে.মি. ব্যাসের অর্ধবৃত্ত।",
  },

  // ১০(গ) — 12 × 10 আয়ত থেকে 12 ব্যাসের অর্ধবৃত্ত বাদ.
  "163-p10-c": {
    shapes: [
      {
        t: "ring",
        outer: [[0, 0], [12, 0], [12, 10], [0, 10]],
        inner: arcPts([6, 0], 6, 0, 180),
      },
      { t: "poly", pts: [[0, 0], [12, 0], [12, 10], [0, 10]] },
      { t: "arc", at: [6, 0], r: 6, from: 0, to: 180 },
      { t: "sq", at: [12, 0], a: [0, 0], b: [12, 10] },
      { t: "len", a: [0, 0], b: [12, 0], text: "12 সে.মি." },
      { t: "len", a: [12, 0], b: [12, 10], text: "10 সে.মি." },
    ],
    caption: "রং করা অংশ = আয়তক্ষেত্র − 12 সে.মি. ব্যাসের অর্ধবৃত্ত।",
  },

  // ১০(ঘ) — 12 বাহুর বর্গ থেকে অন্তর্লিখিত বৃত্ত বাদ.
  "163-p10-d": {
    shapes: [
      {
        t: "ring",
        outer: [[0, 0], [12, 0], [12, 12], [0, 12]],
        inner: arcPts([6, 6], 6, 0, 360, 90),
      },
      { t: "poly", pts: [[0, 0], [12, 0], [12, 12], [0, 12]] },
      { t: "circle", at: [6, 6], r: 6 },
      { t: "pt", at: [6, 6] },
      { t: "sq", at: [12, 0], a: [0, 0], b: [12, 12] },
      { t: "len", a: [12, 0], b: [12, 12], text: "12 সে.মি." },
    ],
    caption: "বৃত্তটি বর্গের চার বাহু স্পর্শ করে, তাই এর ব্যাস = বর্গের বাহু = 12 সে.মি.।",
  },
};
