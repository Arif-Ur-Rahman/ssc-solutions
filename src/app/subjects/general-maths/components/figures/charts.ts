// components/figures/charts.ts
//
// অধ্যায় ১৭ draws three lekhachitra and no others: the আয়তলেখ, whose bars
// stand on the অবিচ্ছিন্ন শ্রেণিসীমা; the গণসংখ্যা বহুভুজ, a polyline through
// the শ্রেণি মধ্যমান; and the অজিভ রেখা, a polyline through the ক্রমযোজিত
// গণসংখ্যা at each শ্রেণির ঊর্ধ্বসীমা. All three are the same picture with
// different marks on it, so one description covers them.
//
// Unlike a `Scene`, a chart is scaled separately along each axis — a table
// whose x runs 30 to 100 and whose y runs 0 to 12 has no true shape to keep.

import { charts17 } from "./charts17";

export interface Chart {
  // A bar per class: [নিম্নসীমা, ঊর্ধ্বসীমা, গণসংখ্যা].
  bars?: [number, number, number][];
  // The polyline, in order — a বহুভুজ or an অজিভ.
  line?: [number, number][];
  // Where the two axes are numbered. The chart is scaled to hold these,
  // whatever the bars and the line reach.
  xTicks: number[];
  yTicks: number[];
  // The ছেদ চিহ্ন the book draws beside the origin when the x-axis starts
  // somewhere other than 0.
  xBreak?: boolean;
  caption?: string;
}

export const charts: Record<string, Chart> = {
  ...charts17,
};
