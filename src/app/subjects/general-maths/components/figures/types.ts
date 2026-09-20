// components/figures/types.ts
//
// A figure is described in the problem's own coordinates — 25 means 25 সে.মি.,
// and y points up the way it does on paper. `Figure.tsx` works out the bounding
// box, the scale and the flip, so a scene never carries a pixel value.
//
// The vocabulary is deliberately small: it is the set of marks the mensuration
// chapter actually uses — an outline, a construction line, a length, an angle,
// the right-angle square, equality ticks, and free text — plus the squared
// paper অধ্যায় ১২ draws its লেখচিত্র on and the circle and চাপ অধ্যায় ৮ is
// written in.

export type Pt = [number, number];

export type Shape =
  // A closed outline. `open` leaves it a polyline, `fill` tints the interior.
  | { t: "poly"; pts: Pt[]; open?: boolean; dash?: boolean; fill?: boolean }
  // Two outlines with the strip between them tinted — a road, a pond bank.
  | { t: "ring"; outer: Pt[]; inner: Pt[] }
  // A whole circle, by its centre and radius. The centre itself is not drawn;
  // a scene that names it puts a `pt` there.
  | { t: "circle"; at: Pt; r: number; dash?: boolean }
  // An arc of that circle, swept anticlockwise from `from` to `to` (degrees,
  // read off the protractor with 0° pointing right). `mark` draws it heavier
  // than the circle, which is how a চাপ the problem is about is picked out.
  | {
      t: "arc";
      at: Pt;
      r: number;
      from: number;
      to: number;
      dash?: boolean;
      mark?: boolean;
    }
  // A single line. Dashed means it was constructed, not given.
  | { t: "seg"; a: Pt; b: Pt; dash?: boolean }
  // A রশ্মি: the same line, but with an arrowhead at `b` saying it runs on
  // without end. `both` puts one at `a` as well, which is how অধ্যায় ৬ draws
  // a সরলরেখা. The three marks — bare, one head, two heads — are exactly the
  // রেখাংশ / রশ্মি / সরলরেখা the chapter spends its first pages separating.
  | { t: "ray"; a: Pt; b: Pt; both?: boolean; dash?: boolean }
  // A vertex: a dot and, usually, its letter.
  | { t: "pt"; at: Pt; label?: string; dir?: Pt; dot?: boolean }
  // A length written beside the side it measures.
  | { t: "len"; a: Pt; b: Pt; text: string; side?: 1 | -1; off?: number }
  // The same, but with an arrow at each end — for a width that has no side of
  // its own to sit against.
  | { t: "dim"; a: Pt; b: Pt; text: string; side?: 1 | -1; off?: number }
  // An arc at `at`, swept from the ray towards `a` to the ray towards `b`.
  // `reflex` takes the long way round instead — the প্রবৃদ্ধ কোণ a বৃত্তস্থ
  // চতুর্ভুজ's proof turns on.
  | {
      t: "ang";
      at: Pt;
      a: Pt;
      b: Pt;
      text?: string;
      r?: number;
      reflex?: boolean;
    }
  // The right-angle square at `at`, between the same two rays.
  | { t: "sq"; at: Pt; a: Pt; b: Pt }
  // `n` hatch marks across a side, to say which sides are equal.
  | { t: "tick"; a: Pt; b: Pt; n?: number }
  // Free text dropped at a point — a region's name, a symbol like h or x.
  | { t: "note"; at: Pt; text: string; dir?: Pt }
  // ছক কাগজ — the squared paper a লেখচিত্র is drawn on. Faint unit squares
  // over the rectangle `x` × `y`, the two axes through the origin with their
  // X, X′, Y, Y′ ends, and a number beside every `step`-th mark.
  | { t: "axes"; x: [number, number]; y: [number, number]; step?: number };

export interface Scene {
  shapes: Shape[];
  // One line under the drawing, saying what it is worth noticing.
  caption?: string;
  // px the longer side of the drawing should occupy, and the clear margin kept
  // around it for labels. Both have sensible defaults.
  size?: number;
  pad?: number;
}
