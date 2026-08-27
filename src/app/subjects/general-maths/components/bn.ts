// components/bn.ts
//
// The page is written in Bangla, so every number it shows — chapter numbers,
// problem numbers, counts — is shown in Bangla-Bengali digits. Maths inside
// KaTeX keeps its Western digits, exactly as the printed book does.

const digits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => digits[Number(d)]);
}
