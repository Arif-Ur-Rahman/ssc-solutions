// components/chapter8Data.ts
//
// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ৮ · বৃত্ত
// ─────────────────────────────────────────────────────────────────────────────
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// অনুশীলনী ৮.১ (book pages ১৫৫-১৫৬), ৮.২ (book page ১৬০), ৮.৩ (book pages
// ১৬২-১৬৩), ৮.৪ (book pages ১৬৬-১৬৭) and ৮.৫ (book pages ১৭০-১৭২), the last
// followed by the chapter's নমুনা প্রশ্ন (book pages ১৭২-১৭৩), numbered on
// from the exercise.
//
// এ অধ্যায়ে বইয়ে কোনো উদাহরণ নেই — তার জায়গায় আছে উপপাদ্য ১৭–২৭ ও সম্পাদ্য
// ৬–১১, আর অনুশীলনীর প্রতিটি প্রমাণ এদের উপর দাঁড়িয়ে। তাই প্রতিটি অনুশীলনীর
// আগে তার উপপাদ্য বা সম্পাদ্যগুলো বইয়ের প্রমাণসহ রাখা হয়েছে। প্রতিটি প্রশ্নের
// চিত্র `figures/scenes8.ts` এ; অঙ্কনের প্রশ্নে সম্পূর্ণ চিত্রটিই উত্তর, তাই তা
// সমাধানের ভেতরে রাখা হয়েছে।
//
// The file sits apart from chaptersData.ts only to keep that file from growing
// further; the shapes are the same.

import type { Exercise } from "./chaptersData";

const C81_PROVE_A = "প্রমাণ (১ – ৭)";
const C81_CQ = "সৃজনশীল (৮)";
const C81_PROVE_B = "প্রমাণ (৯ – ১২)";
const C82_PROVE_A = "প্রমাণ (১ – ৩)";
const C82_CQ = "সৃজনশীল (৪)";
const C82_PROVE_B = "প্রমাণ (৫)";
const C83_PROVE_A = "প্রমাণ (১ – ৪)";
const C83_CQ = "সৃজনশীল (৫)";
const C83_PROVE_B = "প্রমাণ (৬ – ৭)";
const C84_PROVE_A = "প্রমাণ (১ – ৪)";
const C84_CQ = "সৃজনশীল (৫)";
const C84_PROVE_B = "প্রমাণ (৬)";
const C85_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৩)";
const C85_DRAW = "অঙ্কন (৪ – ৯)";
const C85_PROVE = "প্রমাণ (১০ – ১১)";
const C85_CQ = "সৃজনশীল (১২ – ১৩)";
const C85_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৪ – ১৭)";
const C85_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল (১৮)";
const C85_MODEL_SA = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (১৯)";

// ─────────────── অনুশীলনী ৮.১ ───────────────

export const exercise81: Exercise = {
  id: "8.1",
  bnId: "অনুশীলনী ৮.১",
  title: "বৃত্তের জ্যা ও কেন্দ্র",
  bookPages: "১৫২ – ১৫৬",
  formulas: [
    {
      title: "বৃত্ত ও তার অংশ",
      formulas: [
        {
          statement: "বৃত্ত, কেন্দ্র ও ব্যাসার্ধ",
          note: "সমতলের একটি নির্দিষ্ট বিন্দু থেকে সমদূরত্বে থাকা বিন্দুগুলোর সেট বৃত্ত। নির্দিষ্ট বিন্দুটি কেন্দ্র, আর কেন্দ্র থেকে বৃত্তস্থ যেকোনো বিন্দুর দূরত্ব ব্যাসার্ধ। কয়েকটি বিন্দু দিয়ে একটি বৃত্ত গেলে বিন্দুগুলো সমবৃত্ত।",
        },
        {
          statement: "অভ্যন্তর ও বহির্ভাগ",
          note: String.raw`কেন্দ্র থেকে যেসব বিন্দুর দূরত্ব $r$ এর চেয়ে কম সেগুলো বৃত্তের অভ্যন্তরে, বেশি হলে বহির্ভাগে। অভ্যন্তরের একটি ও বহির্ভাগের একটি বিন্দুর সংযোজক রেখাংশ বৃত্তকে ঠিক একটি বিন্দুতে ছেদ করে।`,
        },
        {
          statement: String.raw`জ্যা ও ব্যাস: $\;\text{ব্যাস}=2r$`,
          note: "বৃত্তের দুইটি ভিন্ন বিন্দুর সংযোজক রেখাংশ জ্যা; কেন্দ্রগামী জ্যা ব্যাস। কেন্দ্র প্রত্যেক ব্যাসের মধ্যবিন্দু।",
        },
      ],
    },
    {
      title: "জ্যা সম্পর্কিত উপপাদ্য",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ১৭: $\;M,\,AB$ এর মধ্যবিন্দু $\Rightarrow OM\perp AB$`,
          note: "বৃত্তের কেন্দ্র ও ব্যাস ভিন্ন কোনো জ্যা এর মধ্যবিন্দুর সংযোজক রেখাংশ ঐ জ্যা এর উপর লম্ব।",
        },
        {
          statement: String.raw`বিপরীত উপপাদ্য: $\;OM\perp AB\Rightarrow AM=BM$`,
          note: "কেন্দ্র থেকে ব্যাস ভিন্ন কোনো জ্যা এর উপর অঙ্কিত লম্ব ঐ জ্যাকে সমদ্বিখণ্ডিত করে। (সমকোণী △OAM ≅ △OBM, অতিভুজ-বাহু)",
        },
        {
          statement: "অনুসিদ্ধান্ত ১ ও ২",
          note: "বৃত্তের যেকোনো জ্যা এর লম্বদ্বিখণ্ডক কেন্দ্রগামী। যেকোনো সরলরেখা একটি বৃত্তকে দুইয়ের অধিক বিন্দুতে ছেদ করতে পারে না।",
        },
        {
          statement: String.raw`উপপাদ্য ১৮: $\;AB=CD\Rightarrow OE=OF$`,
          note: "বৃত্তের সকল সমান জ্যা কেন্দ্র থেকে সমদূরবর্তী। কেন্দ্র থেকে জ্যা এর দূরত্ব মানে জ্যা এর উপর কেন্দ্র থেকে অঙ্কিত লম্বের দৈর্ঘ্য।",
        },
        {
          statement: String.raw`উপপাদ্য ১৯: $\;OE=OF\Rightarrow AB=CD$`,
          note: "বৃত্তের কেন্দ্র থেকে সমদূরবর্তী সকল জ্যা পরস্পর সমান।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৩",
          note: "বৃত্তের ব্যাসই বৃহত্তম জ্যা।",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ১৭ — book page ১৫৩.
    {
      id: 17,
      label: "উপপাদ্য",
      question:
        "বৃত্তের কেন্দ্র ও ব্যাস ভিন্ন কোনো জ্যা এর মধ্যবিন্দুর সংযোজক রেখাংশ ঐ জ্যা এর ওপর লম্ব।",
      figure: "81-t17",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট $ABC$ বৃত্তে ব্যাস নয় এমন একটি জ্যা $AB$ এবং এর মধ্যবিন্দু $M$। $O,\,M$ যোগ করি। প্রমাণ করতে হবে যে, $OM\perp AB$।`,
          String.raw`অঙ্কন: $O,\,A$ এবং $O,\,B$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle OAM$ এবং $\triangle OBM$ এ`,
          String.raw`$$AM=BM\qquad\left[\,\because\;M,\;AB\text{ এর মধ্যবিন্দু}\,\right]$$`,
          String.raw`$$OA=OB\qquad\left[\,\because\;\text{একই বৃত্তের ব্যাসার্ধ}\,\right]$$`,
          String.raw`$$OM=OM\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\therefore\;\triangle OAM\cong\triangle OBM\qquad\left[\,\text{বাহু-বাহু-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;\angle OMA=\angle OMB$$`,
          String.raw`ধাপ ২. কোণ দুইটি রৈখিক যুগল কোণ এবং এদের পরিমাপ সমান, সুতরাং`,
          String.raw`$$\angle OMA=\angle OMB=\text{এক সমকোণ}$$`,
          String.raw`$$\therefore\;OM\perp AB$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ১৮ — book page ১৫৪.
    {
      id: 18,
      label: "উপপাদ্য",
      question: "বৃত্তের সকল সমান জ্যা কেন্দ্র থেকে সমদূরবর্তী।",
      figure: "81-t18",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ বৃত্তের কেন্দ্র এবং $AB$ ও $CD$ বৃত্তের দুইটি সমান জ্যা। প্রমাণ করতে হবে যে, $O$ থেকে $AB$ ও $CD$ জ্যাদ্বয় সমদূরবর্তী।`,
          String.raw`অঙ্কন: $O$ থেকে $AB$ ও $CD$ এর উপর যথাক্রমে $OE$ ও $OF$ লম্ব আঁকি। $O,\,A$ ও $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $OE\perp AB$ ও $OF\perp CD$, সুতরাং`,
          String.raw`$$AE=BE\text{ এবং }CF=DF\qquad\left[\,\because\;\text{কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে}\,\right]$$`,
          String.raw`$$\therefore\;AE=\tfrac{1}{2}AB\text{ এবং }CF=\tfrac{1}{2}CD$$`,
          String.raw`ধাপ ২. কিন্তু $AB=CD$ [ধরে নেওয়া], $\;\therefore\;AE=CF$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle OAE$ ও $\triangle OCF$ এ`,
          String.raw`$$\text{অতিভুজ }OA=\text{অতিভুজ }OC\qquad\left[\,\text{একই বৃত্তের ব্যাসার্ধ}\,\right]$$`,
          String.raw`$$AE=CF\qquad\left[\,\text{ধাপ }২\,\right]$$`,
          String.raw`$$\therefore\;\triangle OAE\cong\triangle OCF\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`$$\therefore\;OE=OF$$`,
          String.raw`ধাপ ৪. $OE$ ও $OF$ কেন্দ্র থেকে যথাক্রমে $AB$ ও $CD$ এর দূরত্ব। সুতরাং জ্যাদ্বয় কেন্দ্র থেকে সমদূরবর্তী।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ১৯ — book page ১৫৫.
    {
      id: 19,
      label: "উপপাদ্য",
      question: "বৃত্তের কেন্দ্র থেকে সমদূরবর্তী সকল জ্যা পরস্পর সমান।",
      figure: "81-t19",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ বৃত্তের কেন্দ্র এবং $AB$ ও $CD$ দুইটি জ্যা। $O$ থেকে এদের উপর যথাক্রমে $OE$ ও $OF$ লম্ব এবং $OE=OF$। প্রমাণ করতে হবে যে, $AB=CD$।`,
          String.raw`অঙ্কন: $O,\,A$ ও $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $OE\perp AB$ ও $OF\perp CD$, সুতরাং $\angle OEA=\angle OFC=$ এক সমকোণ।`,
          String.raw`ধাপ ২. সমকোণী $\triangle OAE$ ও $\triangle OCF$ এ`,
          String.raw`$$\text{অতিভুজ }OA=\text{অতিভুজ }OC,\qquad OE=OF\;\left[\,\text{ধরে নেওয়া}\,\right]$$`,
          String.raw`$$\therefore\;\triangle OAE\cong\triangle OCF\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`$$\therefore\;AE=CF$$`,
          String.raw`ধাপ ৩. কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$AE=\tfrac{1}{2}AB,\qquad CF=\tfrac{1}{2}CD$$`,
          String.raw`ধাপ ৪. সুতরাং $\tfrac{1}{2}AB=\tfrac{1}{2}CD$, অর্থাৎ $AB=CD$।`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: C81_PROVE_A,
      question:
        "প্রমাণ করো যে, দুইটি সমান্তরাল জ্যা এর মধ্যবিন্দুর সংযোজক সরলরেখা কেন্দ্রগামী এবং জ্যাদ্বয়ের উপর লম্ব।",
      figure: "81-p1",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ও $CD$ দুইটি সমান্তরাল জ্যা, এদের মধ্যবিন্দু যথাক্রমে $M$ ও $N$। প্রমাণ করতে হবে যে, $MN$ রেখা $O$ বিন্দুগামী এবং $MN\perp AB,\;MN\perp CD$।`,
          String.raw`অঙ্কন: $O,\,M$ ও $O,\,N$ যোগ করি। $O$ বিন্দু দিয়ে $AB$ এর সমান্তরাল একটি সরলরেখা $XY$ আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১. $M,\;AB$ এর মধ্যবিন্দু, তাই`,
          String.raw`$$OM\perp AB\qquad\left[\,\text{উপপাদ্য }১৭\,\right]$$`,
          String.raw`$XY\parallel AB$, সুতরাং $OM\perp XY$।`,
          String.raw`ধাপ ২. একইভাবে $N,\;CD$ এর মধ্যবিন্দু বলে $ON\perp CD$; আর $XY\parallel AB\parallel CD$ বলে $ON\perp XY$।`,
          String.raw`ধাপ ৩. $OM$ ও $ON$ দুইটিই $O$ বিন্দুতে $XY$ রেখার উপর লম্ব। কিন্তু একটি রেখার কোনো বিন্দুতে ঐ রেখার উপর একটিমাত্র লম্ব আঁকা যায়। সুতরাং $OM$ ও $ON$ একই সরলরেখা, অর্থাৎ $M,\,O,\,N$ সমরেখ।`,
          String.raw`$$\therefore\;MN\text{ রেখা কেন্দ্র }O\text{ দিয়ে যায়।}$$`,
          String.raw`ধাপ ৪. $MN$ রেখাটিই $OM$ ও $ON$ রেখা, তাই ধাপ ১ ও ২ থেকে`,
          String.raw`$$MN\perp AB\qquad\text{এবং}\qquad MN\perp CD$$`,
          String.raw`জ্যা দুইটি কেন্দ্রের একই পাশে থাকলেও যুক্তি একই — তখনও $OM$ ও $ON$ দুইটিই $O$ বিন্দুতে $XY$ এর উপর লম্ব।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 2,
      group: C81_PROVE_A,
      question: String.raw`কোনো বৃত্তের $AB$ এবং $AC$ জ্যা দুইটি $A$ বিন্দুগামী ব্যাসার্ধের সাথে সমান কোণ উৎপন্ন করে। প্রমাণ করো যে, $AB=AC$।`,
      figure: "81-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ও $AC$ দুইটি জ্যা এবং $OA$ ব্যাসার্ধ, যেখানে $\angle OAB=\angle OAC$। প্রমাণ করতে হবে যে, $AB=AC$।`,
          String.raw`অঙ্কন: $O$ থেকে $AB$ ও $AC$ এর উপর যথাক্রমে $OE$ ও $OF$ লম্ব আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle OAE$ ও $\triangle OAF$ এ`,
          String.raw`$$\angle OEA=\angle OFA=\text{এক সমকোণ}\qquad\left[\,\text{অঙ্কন অনুসারে}\,\right]$$`,
          String.raw`$$\angle OAE=\angle OAF\qquad\left[\,\text{দেওয়া আছে}\,\right]$$`,
          String.raw`$$OA=OA\qquad\left[\,\text{সাধারণ বাহু}\,\right]$$`,
          String.raw`$$\therefore\;\triangle OAE\cong\triangle OAF\qquad\left[\,\text{কোণ-কোণ-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;OE=OF$$`,
          String.raw`ধাপ ২. $OE$ ও $OF$ কেন্দ্র থেকে $AB$ ও $AC$ জ্যা এর দূরত্ব। জ্যা দুইটি কেন্দ্র থেকে সমদূরবর্তী, সুতরাং`,
          String.raw`$$AB=AC\qquad\left[\,\text{উপপাদ্য }১৯\,\right]$$`,
        ],
        answer: String.raw`$AB=AC$ (প্রমাণিত)`,
      },
    },
    {
      id: 3,
      group: C81_PROVE_A,
      question:
        "কোনো বৃত্ত একটি সমকোণী ত্রিভুজের শীর্ষবিন্দুগুলো দিয়ে যায়। দেখাও যে, বৃত্তটির কেন্দ্র অতিভুজের মধ্যবিন্দু।",
      figure: "81-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle BAC=$ এক সমকোণ, $BC$ অতিভুজ এবং একটি বৃত্ত $A,\,B,\,C$ দিয়ে যায়। দেখাতে হবে যে, বৃত্তটির কেন্দ্র $BC$ এর মধ্যবিন্দু।`,
          String.raw`অঙ্কন: $BC$ এর মধ্যবিন্দু $M$ নিই। $A,\,M$ যোগ করে $AM$ কে $D$ পর্যন্ত এমনভাবে বর্ধিত করি যেন $MD=AM$ হয়। $B,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle AMC$ ও $\triangle DMB$ এ`,
          String.raw`$$MC=MB,\qquad AM=DM,\qquad \angle AMC=\angle DMB\;\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
          String.raw`$$\therefore\;\triangle AMC\cong\triangle DMB\qquad\left[\,\text{বাহু-কোণ-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;BD=AC\quad\text{এবং}\quad\angle MBD=\angle MCA$$`,
          String.raw`ধাপ ২. $\angle MBD$ ও $\angle MCA$ একান্তর কোণ এবং সমান, তাই $BD\parallel AC$। সুতরাং`,
          String.raw`$$\angle ABD+\angle BAC=\text{দুই সমকোণ}\;\Rightarrow\;\angle ABD=\text{এক সমকোণ}$$`,
          String.raw`ধাপ ৩. $\triangle ABD$ ও $\triangle BAC$ এ`,
          String.raw`$$AB=AB,\qquad BD=AC,\qquad \angle ABD=\angle BAC=\text{এক সমকোণ}$$`,
          String.raw`$$\therefore\;\triangle ABD\cong\triangle BAC\;\Rightarrow\;AD=BC$$`,
          String.raw`ধাপ ৪. $AD=2AM$ এবং $BC=2BM=2CM$, তাই`,
          String.raw`$$AM=BM=CM$$`,
          String.raw`ধাপ ৫. সুতরাং $M$ কে কেন্দ্র করে $MA$ ব্যাসার্ধ নিয়ে আঁকা বৃত্ত $A,\,B,\,C$ তিনটি বিন্দু দিয়েই যায়। কিন্তু সমরেখ নয় এমন তিনটি বিন্দু দিয়ে একটি ও কেবল একটি বৃত্ত আঁকা যায়। অতএব প্রদত্ত বৃত্তটিই এই বৃত্ত এবং এর কেন্দ্র $M$, অর্থাৎ অতিভুজ $BC$ এর মধ্যবিন্দু।`,
        ],
        answer: "দেখানো হলো — কেন্দ্র অতিভুজের মধ্যবিন্দু",
      },
    },
    {
      id: 4,
      group: C81_PROVE_A,
      question: String.raw`দুইটি সমকেন্দ্রিক বৃত্তের একটির জ্যা $AB$ অপর বৃত্তকে $C$ ও $D$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $AC=BD$।`,
      figure: "81-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট দুইটি বৃত্তের বড়টির জ্যা $AB$ ছোট বৃত্তকে $C$ ও $D$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $AC=BD$।`,
          String.raw`অঙ্কন: $O$ থেকে $AB$ এর উপর $OM$ লম্ব আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১. বড় বৃত্তে $AB$ একটি জ্যা এবং $OM\perp AB$, সুতরাং`,
          String.raw`$$AM=BM\qquad\left[\,\text{কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে}\,\right]$$`,
          String.raw`ধাপ ২. ছোট বৃত্তে $CD$ একটি জ্যা এবং $OM\perp CD$, সুতরাং`,
          String.raw`$$CM=DM$$`,
          String.raw`ধাপ ৩. ধাপ ১ থেকে ধাপ ২ বিয়োগ করে,`,
          String.raw`$$AM-CM=BM-DM$$`,
          String.raw`$$\therefore\;AC=BD$$`,
        ],
        answer: String.raw`$AC=BD$ (প্রমাণিত)`,
      },
    },
    {
      id: 5,
      group: C81_PROVE_A,
      question:
        "বৃত্তের দুইটি সমান জ্যা পরস্পরকে ছেদ করলে দেখাও যে, এদের একটির অংশদ্বয় অপরটির অংশদ্বয়ের সমান।",
      figure: "81-p5",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ও $CD$ দুইটি সমান জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। দেখাতে হবে যে, $AP=CP$ এবং $BP=DP$।`,
          String.raw`অঙ্কন: $O$ থেকে $AB$ ও $CD$ এর উপর যথাক্রমে $OE$ ও $OF$ লম্ব আঁকি। $O,\,P$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $AB=CD$, তাই জ্যা দুইটি কেন্দ্র থেকে সমদূরবর্তী:`,
          String.raw`$$OE=OF\qquad\left[\,\text{উপপাদ্য }১৮\,\right]$$`,
          String.raw`ধাপ ২. কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$AE=\tfrac{1}{2}AB=\tfrac{1}{2}CD=CF$$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle OEP$ ও $\triangle OFP$ এ`,
          String.raw`$$\text{অতিভুজ }OP=\text{অতিভুজ }OP,\qquad OE=OF$$`,
          String.raw`$$\therefore\;\triangle OEP\cong\triangle OFP\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`$$\therefore\;EP=FP$$`,
          String.raw`ধাপ ৪. ধাপ ২ ও ৩ যোগ করে,`,
          String.raw`$$AE+EP=CF+FP\;\Rightarrow\;AP=CP$$`,
          String.raw`ধাপ ৫. আবার $AB=CD$ থেকে বিয়োগ করে,`,
          String.raw`$$AB-AP=CD-CP\;\Rightarrow\;BP=DP$$`,
        ],
        answer: String.raw`$AP=CP$ এবং $BP=DP$ (দেখানো হলো)`,
      },
    },
    {
      id: 6,
      group: C81_PROVE_A,
      question:
        "দেখাও যে, ব্যাসের দুই প্রান্ত থেকে তার বিপরীত দিকে দুইটি সমান জ্যা অঙ্কন করলে তারা সমান্তরাল হয়।",
      figure: "81-p6",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ একটি ব্যাস। $A$ ও $B$ থেকে $AB$ এর বিপরীত দিকে $AC$ ও $BD$ দুইটি সমান জ্যা। দেখাতে হবে যে, $AC\parallel BD$।`,
          String.raw`অঙ্কন: $O,\,C$ ও $O,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle OAC$ ও $\triangle OBD$ এ`,
          String.raw`$$OA=OB,\qquad OC=OD\qquad\left[\,\text{একই বৃত্তের ব্যাসার্ধ}\,\right]$$`,
          String.raw`$$AC=BD\qquad\left[\,\text{দেওয়া আছে}\,\right]$$`,
          String.raw`$$\therefore\;\triangle OAC\cong\triangle OBD\qquad\left[\,\text{বাহু-বাহু-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;\angle OAC=\angle OBD,\;\text{ অর্থাৎ }\;\angle BAC=\angle ABD$$`,
          String.raw`ধাপ ২. $C$ ও $D$ বিন্দু $AB$ এর বিপরীত পাশে, তাই $\angle BAC$ ও $\angle ABD$ একান্তর কোণ। একান্তর কোণ সমান হলে রেখা দুইটি সমান্তরাল:`,
          String.raw`$$\therefore\;AC\parallel BD$$`,
        ],
        answer: String.raw`$AC\parallel BD$ (দেখানো হলো)`,
      },
    },
    {
      id: 7,
      group: C81_PROVE_A,
      question:
        "দেখাও যে, বৃত্তের দুইটি জ্যা এর মধ্যে বৃহত্তর জ্যাটি ক্ষুদ্রতর জ্যা অপেক্ষা কেন্দ্রের নিকটতর।",
      figure: "81-p7",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ও $CD$ দুইটি জ্যা, যেখানে $AB>CD$। $O$ থেকে এদের উপর $OE$ ও $OF$ লম্ব। দেখাতে হবে যে, $OE<OF$।`,
          String.raw`অঙ্কন: $O,\,A$ ও $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$AE=\tfrac{1}{2}AB,\qquad CF=\tfrac{1}{2}CD$$`,
          String.raw`$AB>CD$, সুতরাং $AE>CF$।`,
          String.raw`ধাপ ২. সমকোণী $\triangle OAE$ ও $\triangle OCF$ এ পিথাগোরাসের উপপাদ্য অনুসারে`,
          String.raw`$$OA^{2}=OE^{2}+AE^{2},\qquad OC^{2}=OF^{2}+CF^{2}$$`,
          String.raw`ধাপ ৩. $OA=OC$ (একই বৃত্তের ব্যাসার্ধ), তাই`,
          String.raw`$$OE^{2}+AE^{2}=OF^{2}+CF^{2}$$`,
          String.raw`ধাপ ৪. কিন্তু $AE^{2}>CF^{2}$, সুতরাং সমতা বজায় রাখতে হলে`,
          String.raw`$$OE^{2}<OF^{2}\;\Rightarrow\;OE<OF$$`,
          String.raw`অর্থাৎ বৃহত্তর জ্যা $AB$ কেন্দ্রের নিকটতর।`,
        ],
        answer: String.raw`$OE<OF$ (দেখানো হলো)`,
      },
    },
    {
      id: 8,
      group: C81_CQ,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তে জ্যা $PQ=x$ সে.মি. এবং $OR\perp PQ$। চিত্রে $PS$ কেন্দ্রগামী এবং $\angle OQR=30^{\circ}$।`,
      figure: "81-p8",
      parts: [
        {
          label: "ক",
          question: String.raw`$\angle QOS$ কোণের পরিমাণ কত?`,
          solution: {
            steps: [
              String.raw`$\triangle OPQ$ এ $OP=OQ$ (একই বৃত্তের ব্যাসার্ধ), তাই`,
              String.raw`$$\angle OPQ=\angle OQP=30^{\circ}$$`,
              String.raw`$P,\,O,\,S$ সমরেখ, তাই $\angle QOS$ হলো $\triangle OPQ$ এর $O$ বিন্দুর বহিঃস্থ কোণ:`,
              String.raw`$$\angle QOS=\angle OPQ+\angle OQP=30^{\circ}+30^{\circ}=60^{\circ}$$`,
            ],
            answer: String.raw`$60^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $PS$ জ্যা বৃত্তটির বৃহত্তম জ্যা।`,
          solution: {
            steps: [
              String.raw`$PS$ কেন্দ্র $O$ দিয়ে যায়, তাই $PS$ ব্যাস এবং $PS=OP+OS=2r$, যেখানে $r$ বৃত্তের ব্যাসার্ধ।`,
              String.raw`এখন ব্যাস নয় এমন যেকোনো জ্যা নিই, যেমন $PQ$। $O,\,Q$ যোগ করলে $\triangle OPQ$ পাওয়া যায়, যেখানে`,
              String.raw`$$PQ<OP+OQ\qquad\left[\,\text{ত্রিভুজের দুই বাহুর সমষ্টি তৃতীয় বাহু অপেক্ষা বৃহত্তর}\,\right]$$`,
              String.raw`$$\text{বা, }PQ<r+r=2r=PS$$`,
              String.raw`ব্যাস নয় এমন প্রতিটি জ্যা এর জন্যই একই যুক্তি খাটে। সুতরাং ব্যাস $PS$ বৃত্তটির বৃহত্তম জ্যা।`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`$OR=\left(\dfrac{x}{2}-2\right)$ সে.মি. হলে, $x$ এর মান নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$OR\perp PQ$, তাই $R$ বিন্দু $PQ$ এর মধ্যবিন্দু:`,
              String.raw`$$RQ=\frac{x}{2}\text{ সে.মি.}$$`,
              String.raw`সমকোণী $\triangle ORQ$ এ $\angle OQR=30^{\circ}$। সমকোণী ত্রিভুজে $30^{\circ}$ কোণের বিপরীত বাহু অতিভুজের অর্ধেক, তাই $OQ=2\,OR$। পিথাগোরাসের উপপাদ্য অনুসারে,`,
              String.raw`$$OQ^{2}=OR^{2}+RQ^{2}\;\Rightarrow\;4\,OR^{2}=OR^{2}+RQ^{2}\;\Rightarrow\;RQ=\sqrt{3}\,OR$$`,
              String.raw`$$\text{বা, }\frac{x}{2}=\sqrt{3}\left(\frac{x}{2}-2\right)$$`,
              String.raw`$$\text{বা, }x=\sqrt{3}\,x-4\sqrt{3}$$`,
              String.raw`$$\text{বা, }(\sqrt{3}-1)\,x=4\sqrt{3}$$`,
              String.raw`$$\text{বা, }x=\frac{4\sqrt{3}}{\sqrt{3}-1}=\frac{4\sqrt{3}(\sqrt{3}+1)}{3-1}=2\sqrt{3}(\sqrt{3}+1)$$`,
              String.raw`$$\therefore\;x=6+2\sqrt{3}\approx 9.46$$`,
              String.raw`যাচাই: $RQ=3+\sqrt{3}\approx4.73$, $OR=1+\sqrt{3}\approx2.73$, এবং $\dfrac{OR}{RQ}=\dfrac{1}{\sqrt{3}}$ — যা $30^{\circ}$ কোণের সাথে মেলে।`,
            ],
            answer: String.raw`$x=6+2\sqrt{3}\approx9.46$ সে.মি.`,
          },
        },
      ],
    },
    {
      id: 9,
      group: C81_PROVE_B,
      question:
        "প্রমাণ করো যে, দুইটি বিন্দুর সংযোজক রেখাংশ তার একই পাশে অপর দুই বিন্দুতে সমান কোণ উৎপন্ন করলে, বিন্দু চারটি সমবৃত্ত হবে।",
      figure: "81-p9",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $AB$ রেখাংশের একই পাশে $C$ ও $D$ দুইটি বিন্দু, যেখানে $\angle ACB=\angle ADB$। প্রমাণ করতে হবে যে, $A,\,B,\,C,\,D$ সমবৃত্ত।`,
          String.raw`অঙ্কন: $A,\,B,\,C$ সমরেখ নয়, তাই এদের মধ্য দিয়ে একটি ও কেবল একটি বৃত্ত আঁকা যায়। মনে করি, বৃত্তটি $D$ দিয়ে যায় না এবং $AD$ রেখাংশকে (বা বর্ধিত $AD$ কে) $E$ বিন্দুতে ছেদ করে। $B,\,E$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\angle ACB$ ও $\angle AEB$ একই চাপ $AB$ এর উপর দণ্ডায়মান বৃত্তস্থ কোণ, তাই`,
          String.raw`$$\angle AEB=\angle ACB\qquad\left[\,\text{উপপাদ্য }২১\,\right]$$`,
          String.raw`ধাপ ২. কিন্তু $\angle ACB=\angle ADB$ [দেওয়া আছে], সুতরাং`,
          String.raw`$$\angle AEB=\angle ADB$$`,
          String.raw`ধাপ ৩. $E$ ও $D$ ভিন্ন হলে $\triangle BED$ তৈরি হয় এবং $\angle AEB$ ও $\angle ADB$ এর একটি অপরটির বহিঃস্থ কোণ ও অন্যটি তার বিপরীত অন্তঃস্থ কোণ। বহিঃস্থ কোণ বিপরীত অন্তঃস্থ কোণ অপেক্ষা বৃহত্তর — তাই এরা সমান হতে পারে না।`,
          String.raw`ধাপ ৪. সুতরাং $E$ বিন্দু $D$ এর সাথে মিলে যাবে, অর্থাৎ বৃত্তটি $D$ দিয়েও যায়।`,
          String.raw`$$\therefore\;A,\,B,\,C,\,D\text{ সমবৃত্ত।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 10,
      group: C81_PROVE_B,
      question: "প্রমাণ করো যে, বৃত্তের সমান সমান জ্যা এর মধ্যবিন্দুগুলো সমবৃত্ত।",
      figure: "81-p10",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে কয়েকটি সমান জ্যা আছে এবং $P,\,Q,\,R,\,\ldots$ এদের মধ্যবিন্দু। প্রমাণ করতে হবে যে, $P,\,Q,\,R,\,\ldots$ সমবৃত্ত।`,
          String.raw`অঙ্কন: $O,\,P$; $O,\,Q$ ও $O,\,R$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. কেন্দ্র ও জ্যা এর মধ্যবিন্দুর সংযোজক রেখাংশ জ্যা এর উপর লম্ব [উপপাদ্য ১৭], তাই $OP,\,OQ,\,OR$ হলো কেন্দ্র থেকে জ্যাগুলোর দূরত্ব।`,
          String.raw`ধাপ ২. জ্যাগুলো সমান, তাই এরা কেন্দ্র থেকে সমদূরবর্তী [উপপাদ্য ১৮]:`,
          String.raw`$$OP=OQ=OR=\cdots$$`,
          String.raw`ধাপ ৩. সুতরাং $O$ কে কেন্দ্র করে $OP$ ব্যাসার্ধ নিয়ে আঁকা বৃত্ত প্রতিটি মধ্যবিন্দু দিয়ে যাবে।`,
          String.raw`$$\therefore\;P,\,Q,\,R,\,\ldots\text{ সমবৃত্ত (বৃত্তটি মূল বৃত্তের সমকেন্দ্রিক)।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 11,
      group: C81_PROVE_B,
      question:
        "দেখাও যে, ব্যাসের দুই প্রান্ত থেকে তার বিপরীত দিকে দুইটি সমান্তরাল জ্যা আঁকলে তারা সমান হয়।",
      figure: "81-p11",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ব্যাস এবং $A$ ও $B$ থেকে বিপরীত দিকে $AC$ ও $BD$ দুইটি জ্যা, যেখানে $AC\parallel BD$। দেখাতে হবে যে, $AC=BD$।`,
          String.raw`অঙ্কন: $O$ থেকে $AC$ ও $BD$ এর উপর যথাক্রমে $OE$ ও $OF$ লম্ব আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১. $AC\parallel BD$ এবং $AB$ এদের ছেদক, তাই`,
          String.raw`$$\angle OAE=\angle OBF\qquad\left[\,\text{একান্তর কোণ}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle OAE$ ও $\triangle OBF$ এ`,
          String.raw`$$\angle OEA=\angle OFB=\text{এক সমকোণ},\qquad \angle OAE=\angle OBF,\qquad OA=OB$$`,
          String.raw`$$\therefore\;\triangle OAE\cong\triangle OBF\qquad\left[\,\text{কোণ-কোণ-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;OE=OF$$`,
          String.raw`ধাপ ৩. জ্যা দুইটি কেন্দ্র থেকে সমদূরবর্তী, সুতরাং`,
          String.raw`$$AC=BD\qquad\left[\,\text{উপপাদ্য }১৯\,\right]$$`,
        ],
        answer: String.raw`$AC=BD$ (দেখানো হলো)`,
      },
    },
    {
      id: 12,
      group: C81_PROVE_B,
      question:
        "প্রমাণ করো যে, কোনো বৃত্তের দুইটি জ্যা পরস্পরকে সমদ্বিখণ্ডিত করলে এদের ছেদবিন্দু বৃত্তটির কেন্দ্র হবে।",
      figure: "81-p12",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, বৃত্তের $AB$ ও $CD$ জ্যা দুইটি পরস্পরকে $P$ বিন্দুতে সমদ্বিখণ্ডিত করেছে, অর্থাৎ $AP=PB$ ও $CP=PD$। প্রমাণ করতে হবে যে, $P$ বৃত্তটির কেন্দ্র।`,
          String.raw`প্রমাণ: মনে করি, $P$ কেন্দ্র নয় এবং বৃত্তের কেন্দ্র $O$। $O,\,P$ যোগ করি।`,
          String.raw`ধাপ ১. $P,\;AB$ জ্যা এর মধ্যবিন্দু, তাই`,
          String.raw`$$OP\perp AB\qquad\left[\,\text{উপপাদ্য }১৭\,\right]$$`,
          String.raw`ধাপ ২. আবার $P,\;CD$ জ্যা এর মধ্যবিন্দু, তাই $OP\perp CD$।`,
          String.raw`ধাপ ৩. তাহলে $AB$ ও $CD$ দুইটি ভিন্ন রেখাই $OP$ রেখার $P$ বিন্দুতে $OP$ এর উপর লম্ব। কিন্তু একটি রেখার একটি বিন্দুতে তার উপর একটিমাত্র লম্ব আঁকা যায় — এটি অসম্ভব।`,
          String.raw`ধাপ ৪. সুতরাং আমাদের ধরে নেওয়াটি ভুল; $P$ ও $O$ ভিন্ন হতে পারে না। (জ্যা দুইটির কোনোটি ব্যাস হলে তার মধ্যবিন্দু সরাসরি কেন্দ্র, তাই তখনও $P=O$।)`,
          String.raw`$$\therefore\;P\text{ বিন্দুই বৃত্তের কেন্দ্র।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
};

// ─────────────── অনুশীলনী ৮.২ ───────────────

export const exercise82: Exercise = {
  id: "8.2",
  bnId: "অনুশীলনী ৮.২",
  title: "বৃত্তচাপ, কেন্দ্রস্থ ও বৃত্তস্থ কোণ",
  bookPages: "১৫৭ – ১৬০",
  formulas: [
    {
      title: "চাপ ও কোণ",
      formulas: [
        {
          statement: "উপচাপ ও অধিচাপ",
          note: String.raw`বৃত্তের দুইটি বিন্দু $A$ ও $B$ বৃত্তটিকে দুইটি চাপে ভাগ করে — ছোটটি উপচাপ, বড়টি অধিচাপ। চাপের অন্তঃস্থ একটি বিন্দু $R$ দিয়ে চাপটিকে $ARB$ চাপ বলা হয়।`,
        },
        {
          statement: "বৃত্তস্থ কোণ",
          note: String.raw`বৃত্তের দুইটি জ্যা বৃত্তের উপর কোনো বিন্দুতে মিলিত হলে এদের মধ্যবর্তী কোণ বৃত্তস্থ কোণ। কোণটি যে চাপ খণ্ডিত করে তার ওপর দণ্ডায়মান, আর অনুবন্ধী চাপে অন্তর্লিখিত।`,
        },
        {
          statement: "কেন্দ্রস্থ কোণ",
          note: String.raw`শীর্ষবিন্দু কেন্দ্রে থাকলে কোণটি কেন্দ্রস্থ কোণ। অর্ধবৃত্তের ক্ষেত্রে কেন্দ্রস্থ কোণ $\angle BOC$ সরলকোণ।`,
        },
      ],
    },
    {
      title: "উপপাদ্য ও অনুসিদ্ধান্ত",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ২০: $\;\angle BOC=2\angle BAC$`,
          note: "বৃত্তের একই চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ কোণ বৃত্তস্থ কোণের দ্বিগুণ।",
        },
        {
          statement: String.raw`উপপাদ্য ২১: $\;\angle BAD=\angle BED$`,
          note: "বৃত্তের একই চাপের উপর দণ্ডায়মান বৃত্তস্থ কোণগুলো পরস্পর সমান।",
        },
        {
          statement: String.raw`উপপাদ্য ২২: অর্ধবৃত্তস্থ কোণ $=90^{\circ}$`,
          note: "অর্ধবৃত্তস্থ কোণ এক সমকোণ।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৪",
          note: "সমকোণী ত্রিভুজের অতিভুজকে ব্যাস ধরে বৃত্ত অঙ্কন করলে তা সমকৌণিক শীর্ষবিন্দু দিয়ে যাবে।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৫",
          note: "কোনো বৃত্তের অধিচাপে অন্তর্লিখিত কোণ সূক্ষ্মকোণ; আর উপচাপে অন্তর্লিখিত কোণ স্থূলকোণ।",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ২০ — book page ১৫৮.
    {
      id: 20,
      label: "উপপাদ্য",
      question: "বৃত্তের একই চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ কোণ বৃত্তস্থ কোণের দ্বিগুণ।",
      figure: "82-t20",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট $ABC$ বৃত্তের একই উপচাপ $BC$ এর ওপর দণ্ডায়মান $\angle BAC$ বৃত্তস্থ এবং $\angle BOC$ কেন্দ্রস্থ কোণ। প্রমাণ করতে হবে যে, $\angle BOC=2\angle BAC$।`,
          String.raw`অঙ্কন: মনে করি, $AC$ কেন্দ্রগামী নয়। $A$ বিন্দু দিয়ে কেন্দ্রগামী রেখাংশ $AD$ আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle AOB$ এর বহিঃস্থ কোণ`,
          String.raw`$$\angle BOD=\angle BAO+\angle ABO\qquad\left[\,\text{বহিঃস্থ কোণ অন্তঃস্থ বিপরীত কোণদ্বয়ের সমষ্টি}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle AOB$ এ $OA=OB$, তাই $\angle BAO=\angle ABO$।`,
          String.raw`ধাপ ৩. ধাপ ১ ও ২ থেকে $\angle BOD=2\angle BAO$।`,
          String.raw`ধাপ ৪. একইভাবে $\triangle AOC$ থেকে $\angle COD=2\angle CAO$।`,
          String.raw`ধাপ ৫. যোগ করে,`,
          String.raw`$$\angle BOD+\angle COD=2\angle BAO+2\angle CAO$$`,
          String.raw`$$\therefore\;\angle BOC=2\angle BAC$$`,
          String.raw`$AC$ কেন্দ্রগামী হলে $D$ বিন্দু $C$ এর সাথে মিলে যায় এবং শুধু ধাপ ১–৩ থেকেই $\angle BOC=2\angle BAC$ পাওয়া যায়।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২১ — book page ১৫৯.
    {
      id: 21,
      label: "উপপাদ্য",
      question: "বৃত্তের একই চাপের উপর দণ্ডায়মান বৃত্তস্থ কোণগুলো পরস্পর সমান।",
      figure: "82-t21",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ বৃত্তের কেন্দ্র এবং $BCD$ চাপের ওপর দণ্ডায়মান $\angle BAD$ ও $\angle BED$ দুইটি বৃত্তস্থ কোণ। প্রমাণ করতে হবে যে, $\angle BAD=\angle BED$।`,
          String.raw`অঙ্কন: $O,\,B$ এবং $O,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: $BCD$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle BOD$। সুতরাং`,
          String.raw`$$\angle BOD=2\angle BAD\quad\text{এবং}\quad\angle BOD=2\angle BED\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`$$\therefore\;2\angle BAD=2\angle BED$$`,
          String.raw`$$\therefore\;\angle BAD=\angle BED$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২২ — book page ১৫৯.
    {
      id: 22,
      label: "উপপাদ্য",
      question: "অর্ধবৃত্তস্থ কোণ এক সমকোণ।",
      figure: "82-t22",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ একটি ব্যাস এবং $\angle ACB$ একটি অর্ধবৃত্তস্থ কোণ। প্রমাণ করতে হবে যে, $\angle ACB=$ এক সমকোণ।`,
          String.raw`অঙ্কন: $AB$ এর যে পাশে $C$, তার বিপরীত পাশে বৃত্তের উপর একটি বিন্দু $D$ নিই।`,
          String.raw`প্রমাণ: ধাপ ১. $ADB$ চাপের ওপর দণ্ডায়মান`,
          String.raw`$$\text{বৃত্তস্থ }\angle ACB=\tfrac{1}{2}\left(\text{কেন্দ্রস্থ সরলকোণ }\angle AOB\right)\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ২. সরলকোণ $\angle AOB=$ দুই সমকোণ।`,
          String.raw`$$\therefore\;\angle ACB=\tfrac{1}{2}\left(\text{দুই সমকোণ}\right)=\text{এক সমকোণ}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: C82_PROVE_A,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট কোনো বৃত্তে $ABCD$ একটি অন্তর্লিখিত চতুর্ভুজ। $AC,\,BD$ কর্ণদ্বয় $E$ বিন্দুতে ছেদ করলে প্রমাণ করো যে, $\angle AOB+\angle COD=2\angle AEB$।`,
      figure: "82-p1",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তে অন্তর্লিখিত $ABCD$ চতুর্ভুজের কর্ণ $AC$ ও $BD$ পরস্পর $E$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $\angle AOB+\angle COD=2\angle AEB$।`,
          String.raw`অঙ্কন: $A,\,D$ যোগ করি। $O,\,A$; $O,\,B$; $O,\,C$ ও $O,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $AB$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle AOB$ ও বৃত্তস্থ $\angle ADB$, তাই`,
          String.raw`$$\angle AOB=2\angle ADB\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ২. $CD$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle COD$ ও বৃত্তস্থ $\angle CAD$, তাই`,
          String.raw`$$\angle COD=2\angle CAD$$`,
          String.raw`ধাপ ৩. যোগ করে,`,
          String.raw`$$\angle AOB+\angle COD=2\left(\angle ADB+\angle CAD\right)=2\left(\angle ADE+\angle DAE\right)$$`,
          String.raw`ধাপ ৪. $B,\,E,\,D$ সমরেখ, তাই $\angle AEB$ হলো $\triangle AED$ এর বহিঃস্থ কোণ:`,
          String.raw`$$\angle AEB=\angle ADE+\angle DAE$$`,
          String.raw`$$\therefore\;\angle AOB+\angle COD=2\angle AEB$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 2,
      group: C82_PROVE_A,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তে $ABCD$ একটি অন্তর্লিখিত চতুর্ভুজ। $\angle ADB+\angle BDC=$ এক সমকোণ। প্রমাণ করো যে, $A,\,O,\,C$ এক সরলরেখায় অবস্থিত।`,
      figure: "82-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তে অন্তর্লিখিত $ABCD$ চতুর্ভুজে $\angle ADB+\angle BDC=$ এক সমকোণ। প্রমাণ করতে হবে যে, $A,\,O,\,C$ সমরেখ।`,
          String.raw`অঙ্কন: $O,\,A$ ও $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\angle ADC=\angle ADB+\angle BDC=$ এক সমকোণ।`,
          String.raw`ধাপ ২. $\angle ADC$ বৃত্তস্থ কোণ, $ABC$ চাপের ওপর দণ্ডায়মান। একই চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle AOC$, তাই`,
          String.raw`$$\angle AOC=2\angle ADC=2\times\text{এক সমকোণ}=\text{দুই সমকোণ}\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ৩. অর্থাৎ $\angle AOC$ একটি সরলকোণ, তাই $OA$ ও $OC$ একই সরলরেখায়।`,
          String.raw`$$\therefore\;A,\,O,\,C\text{ এক সরলরেখায় অবস্থিত (অর্থাৎ }AC\text{ ব্যাস)।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 3,
      group: C82_PROVE_A,
      question: "দেখাও যে, বৃত্তস্থ ট্রাপিজিয়ামের তির্যক বাহুদ্বয় পরস্পর সমান।",
      figure: "82-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $ABCD$ একটি বৃত্তস্থ ট্রাপিজিয়াম, যেখানে $AB\parallel DC$ এবং $AD,\,BC$ তির্যক বাহু। দেখাতে হবে যে, $AD=BC$।`,
          String.raw`অঙ্কন: $A,\,C$ যোগ করি। $O,\,A$; $O,\,B$; $O,\,C$ ও $O,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $AB\parallel DC$ এবং $AC$ এদের ছেদক, তাই`,
          String.raw`$$\angle BAC=\angle ACD\qquad\left[\,\text{একান্তর কোণ}\,\right]$$`,
          String.raw`ধাপ ২. $\angle BAC$ বৃত্তস্থ কোণ, $BC$ চাপের ওপর দণ্ডায়মান; $\angle ACD$ বৃত্তস্থ কোণ, $AD$ চাপের ওপর দণ্ডায়মান। উপপাদ্য ২০ অনুসারে`,
          String.raw`$$\angle BOC=2\angle BAC=2\angle ACD=\angle AOD$$`,
          String.raw`ধাপ ৩. $\triangle BOC$ ও $\triangle AOD$ এ`,
          String.raw`$$OB=OA,\qquad OC=OD,\qquad\text{অন্তর্ভুক্ত }\angle BOC=\text{অন্তর্ভুক্ত }\angle AOD$$`,
          String.raw`$$\therefore\;\triangle BOC\cong\triangle AOD\qquad\left[\,\text{বাহু-কোণ-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;BC=AD$$`,
        ],
        answer: String.raw`$AD=BC$ (দেখানো হলো)`,
      },
    },
    {
      id: 4,
      group: C82_CQ,
      question: String.raw`চিত্রে, $O$ বৃত্তের কেন্দ্র এবং $OB=2.5$ সে.মি.`,
      figure: "82-p4",
      parts: [
        {
          label: "ক",
          question: String.raw`$ABCD$ বৃত্তটির পরিধি নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`বৃত্তের ব্যাসার্ধ $r=OB=2.5$ সে.মি.`,
              String.raw`$$\text{পরিধি}=2\pi r=2\times3.1416\times2.5$$`,
              String.raw`$$=5\pi\approx15.71\text{ সে.মি.}$$`,
            ],
            answer: String.raw`$5\pi\approx15.71$ সে.মি. (প্রায়)`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $\angle BAD=\dfrac{1}{2}\angle BOD$`,
          solution: {
            steps: [
              String.raw`$\angle BAD$ বৃত্তস্থ কোণ এবং $\angle BOD$ কেন্দ্রস্থ কোণ — দুইটিই $BCD$ চাপের ওপর দণ্ডায়মান।`,
              String.raw`অঙ্কন: $A,\,O$ যোগ করে $AO$ কে বৃত্তের $F$ বিন্দু পর্যন্ত বর্ধিত করি।`,
              String.raw`প্রমাণ: ধাপ ১. $\triangle AOB$ এ $OA=OB$, তাই $\angle OAB=\angle OBA$। $\angle BOF$ এ ত্রিভুজের বহিঃস্থ কোণ:`,
              String.raw`$$\angle BOF=\angle OAB+\angle OBA=2\angle OAB$$`,
              String.raw`ধাপ ২. একইভাবে $\triangle AOD$ থেকে $\angle DOF=2\angle OAD$।`,
              String.raw`ধাপ ৩. যোগ করে,`,
              String.raw`$$\angle BOF+\angle DOF=2\left(\angle OAB+\angle OAD\right)$$`,
              String.raw`$$\text{বা, }\angle BOD=2\angle BAD$$`,
              String.raw`$$\therefore\;\angle BAD=\tfrac{1}{2}\angle BOD$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`$AC$ ও $BD$ পরস্পর $E$ বিন্দুতে ছেদ করলে প্রমাণ করো যে, $\angle AOB+\angle COD=2\angle AEB$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $O,\,A$ ও $O,\,C$ যোগ করি ($OB$, $OD$ চিত্রে আছে)।`,
              String.raw`প্রমাণ: ধাপ ১. $AB$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle AOB$ ও বৃত্তস্থ $\angle ADB$:`,
              String.raw`$$\angle AOB=2\angle ADB\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
              String.raw`ধাপ ২. $CD$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle COD$ ও বৃত্তস্থ $\angle CAD$:`,
              String.raw`$$\angle COD=2\angle CAD$$`,
              String.raw`ধাপ ৩. যোগ করে,`,
              String.raw`$$\angle AOB+\angle COD=2\left(\angle ADE+\angle DAE\right)$$`,
              String.raw`ধাপ ৪. $\triangle AED$ এর $E$ বিন্দুতে বহিঃস্থ কোণ $\angle AEB$, তাই $\angle AEB=\angle ADE+\angle DAE$।`,
              String.raw`$$\therefore\;\angle AOB+\angle COD=2\angle AEB$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },
    {
      id: 5,
      group: C82_PROVE_B,
      question: String.raw`$ABCD$ বৃত্তে $AB$ ও $CD$ জ্যা দুইটি পরস্পর $E$ বিন্দুতে ছেদ করেছে। দেখাও যে, $\triangle AED$ ও $\triangle BEC$ সদৃশকোণী।`,
      figure: "82-p5",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $ABCD$ বৃত্তের $AB$ ও $CD$ জ্যা পরস্পর $E$ বিন্দুতে ছেদ করেছে। $A,\,D$ ও $B,\,C$ যোগ করা হয়েছে। দেখাতে হবে যে, $\triangle AED$ ও $\triangle BEC$ সদৃশকোণী।`,
          String.raw`প্রমাণ: $\triangle AED$ ও $\triangle BEC$ এ`,
          String.raw`ধাপ ১. $\angle DAE$ ও $\angle BCE$, অর্থাৎ $\angle DAB$ ও $\angle DCB$ একই চাপ $BD$ এর উপর দণ্ডায়মান বৃত্তস্থ কোণ, তাই`,
          String.raw`$$\angle DAE=\angle BCE\qquad\left[\,\text{উপপাদ্য }২১\,\right]$$`,
          String.raw`ধাপ ২. $\angle ADE$ ও $\angle CBE$, অর্থাৎ $\angle ADC$ ও $\angle ABC$ একই চাপ $AC$ এর উপর দণ্ডায়মান, তাই`,
          String.raw`$$\angle ADE=\angle CBE$$`,
          String.raw`ধাপ ৩. $$\angle AED=\angle BEC\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
          String.raw`তিনটি কোণই যথাক্রমে সমান, সুতরাং $\triangle AED$ ও $\triangle BEC$ সদৃশকোণী।`,
        ],
        answer: "দেখানো হলো",
      },
    },
  ],
};

// ─────────────── অনুশীলনী ৮.৩ ───────────────

export const exercise83: Exercise = {
  id: "8.3",
  bnId: "অনুশীলনী ৮.৩",
  title: "বৃত্তস্থ চতুর্ভুজ",
  bookPages: "১৬০ – ১৬৩",
  formulas: [
    {
      title: "বৃত্তস্থ চতুর্ভুজের ধর্ম",
      formulas: [
        {
          statement: "বৃত্তস্থ চতুর্ভুজ",
          note: "যে চতুর্ভুজের চারটি শীর্ষবিন্দু বৃত্তের উপর অবস্থিত, তা বৃত্তে অন্তর্লিখিত বা বৃত্তীয় চতুর্ভুজ।",
        },
        {
          statement: String.raw`উপপাদ্য ২৩: $\;\angle A+\angle C=\angle B+\angle D=180^{\circ}$`,
          note: "বৃত্তে অন্তর্লিখিত চতুর্ভুজের যেকোনো দুইটি বিপরীত কোণের সমষ্টি দুই সমকোণ।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৬",
          note: "বৃত্তে অন্তর্লিখিত চতুর্ভুজের একটি বাহু বর্ধিত করলে যে বহিঃস্থ কোণ উৎপন্ন হয় তা বিপরীত অন্তঃস্থ কোণের সমান।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৭",
          note: "বৃত্তে অন্তর্লিখিত সামান্তরিক একটি আয়তক্ষেত্র।",
        },
        {
          statement: "উপপাদ্য ২৪ (বিপরীত)",
          note: "কোনো চতুর্ভুজের দুইটি বিপরীত কোণ সম্পূরক হলে তার শীর্ষবিন্দু চারটি সমবৃত্ত হয়।",
        },
        {
          statement: "অন্তর্দ্বিখণ্ডক ও বহির্দ্বিখণ্ডক",
          note: String.raw`কোনো কোণের অন্তর্দ্বিখণ্ডক ও বহির্দ্বিখণ্ডক পরস্পর লম্ব, কারণ কোণ ও তার বহিঃস্থ কোণের সমষ্টি $180^{\circ}$, আর এদের অর্ধেকের সমষ্টি $90^{\circ}$। এ অনুশীলনীর কয়েকটি প্রশ্ন এর উপর দাঁড়িয়ে।`,
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ২৩ — book page ১৬১.
    {
      id: 23,
      label: "উপপাদ্য",
      question: "বৃত্তে অন্তর্লিখিত চতুর্ভুজের যেকোনো দুইটি বিপরীত কোণের সমষ্টি দুই সমকোণ।",
      figure: "83-t23",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $ABCD$ চতুর্ভুজ অন্তর্লিখিত। প্রমাণ করতে হবে যে, $\angle ABC+\angle ADC=$ দুই সমকোণ এবং $\angle BAD+\angle BCD=$ দুই সমকোণ।`,
          String.raw`অঙ্কন: $O,\,A$ এবং $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. একই চাপ $ADC$ এর উপর দণ্ডায়মান কেন্দ্রস্থ প্রবৃদ্ধ $\angle AOC$ ও বৃত্তস্থ $\angle ABC$, তাই`,
          String.raw`$$\text{প্রবৃদ্ধ }\angle AOC=2\angle ABC\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ২. আবার একই চাপ $ABC$ এর উপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle AOC$ ও বৃত্তস্থ $\angle ADC$, তাই`,
          String.raw`$$\text{কোণ }\angle AOC=2\angle ADC$$`,
          String.raw`$$\therefore\;\text{প্রবৃদ্ধ }\angle AOC+\text{কোণ }\angle AOC=2\left(\angle ABC+\angle ADC\right)$$`,
          String.raw`কিন্তু প্রবৃদ্ধ $\angle AOC+$ কোণ $\angle AOC=$ চার সমকোণ।`,
          String.raw`$$\therefore\;2\left(\angle ABC+\angle ADC\right)=\text{চার সমকোণ}$$`,
          String.raw`$$\therefore\;\angle ABC+\angle ADC=\text{দুই সমকোণ}$$`,
          String.raw`একইভাবে, $\angle BAD+\angle BCD=$ দুই সমকোণ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২৪ — book page ১৬২.
    {
      id: 24,
      label: "উপপাদ্য",
      question: "কোনো চতুর্ভুজের দুইটি বিপরীত কোণ সম্পূরক হলে তার শীর্ষবিন্দু চারটি সমবৃত্ত হয়।",
      figure: "83-t24",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ চতুর্ভুজে $\angle ABC+\angle ADC=$ দুই সমকোণ। প্রমাণ করতে হবে যে, $A,\,B,\,C,\,D$ সমবৃত্ত।`,
          String.raw`অঙ্কন: $A,\,B,\,C$ সমরেখ নয়, তাই এদের মধ্য দিয়ে একটি ও কেবল একটি বৃত্ত আছে। মনে করি, বৃত্তটি $AD$ রেখাংশকে $E$ বিন্দুতে ছেদ করে। $C,\,E$ যোগ করি।`,
          String.raw`প্রমাণ: অঙ্কন অনুসারে $ABCE$ বৃত্তস্থ চতুর্ভুজ। সুতরাং`,
          String.raw`$$\angle ABC+\angle AEC=\text{দুই সমকোণ}\qquad\left[\,\text{উপপাদ্য }২৩\,\right]$$`,
          String.raw`কিন্তু $\angle ABC+\angle ADC=$ দুই সমকোণ [দেওয়া আছে]।`,
          String.raw`$$\therefore\;\angle AEC=\angle ADC$$`,
          String.raw`কিন্তু তা অসম্ভব, কারণ $\triangle CED$ এর বহিঃস্থ $\angle AEC>$ বিপরীত অন্তঃস্থ $\angle ADC$।`,
          String.raw`সুতরাং $E$ ও $D$ ভিন্ন হতে পারে না; $E$ অবশ্যই $D$ এর সাথে মিলে যাবে।`,
          String.raw`$$\therefore\;A,\,B,\,C,\,D\text{ সমবৃত্ত।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: C83_PROVE_A,
      question: String.raw`$\triangle ABC$ এ $\angle B$ ও $\angle C$ এর সমদ্বিখণ্ডকদ্বয় $P$ বিন্দুতে এবং বহির্দ্বিখণ্ডকদ্বয় $Q$ বিন্দুতে মিলিত হলে, প্রমাণ করো যে, $B,\,P,\,C,\,Q$ বিন্দু চারটি সমবৃত্ত।`,
      figure: "83-p1",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ এ $\angle B$ ও $\angle C$ এর অন্তর্দ্বিখণ্ডক $BP$ ও $CP$ পরস্পর $P$ বিন্দুতে এবং বহির্দ্বিখণ্ডক $BQ$ ও $CQ$ পরস্পর $Q$ বিন্দুতে মিলিত হয়েছে। প্রমাণ করতে হবে যে, $B,\,P,\,C,\,Q$ সমবৃত্ত।`,
          String.raw`প্রমাণ: ধাপ ১. $B$ বিন্দুতে $\angle ABC$ ও তার বহিঃস্থ কোণের সমষ্টি $180^{\circ}$। $BP$ ও $BQ$ এদের সমদ্বিখণ্ডক, তাই`,
          String.raw`$$\angle PBC+\angle CBQ=\tfrac{1}{2}\angle ABC+\tfrac{1}{2}\left(\text{বহিঃস্থ কোণ}\right)=\tfrac{1}{2}\times180^{\circ}=90^{\circ}$$`,
          String.raw`$$\therefore\;\angle PBQ=90^{\circ}$$`,
          String.raw`ধাপ ২. একইভাবে $C$ বিন্দুতে $\angle PCQ=90^{\circ}$।`,
          String.raw`ধাপ ৩. $BPCQ$ চতুর্ভুজে বিপরীত কোণ দুইটির সমষ্টি`,
          String.raw`$$\angle PBQ+\angle PCQ=90^{\circ}+90^{\circ}=180^{\circ}$$`,
          String.raw`বিপরীত কোণ সম্পূরক, সুতরাং [উপপাদ্য ২৪]`,
          String.raw`$$B,\,P,\,C,\,Q\text{ সমবৃত্ত।}$$`,
          String.raw`($\angle PBQ$ সমকোণ বলে বৃত্তটির ব্যাস $PQ$।)`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 2,
      group: C83_PROVE_A,
      question: String.raw`$ABCD$ একটি বৃত্ত। $\angle CAB$ ও $\angle CBA$ এর সমদ্বিখণ্ডক দুইটি $P$ বিন্দুতে এবং $\angle DBA$ ও $\angle DAB$ কোণদ্বয়ের সমদ্বিখণ্ডক দুইটি $Q$ বিন্দুতে মিলিত হলে, প্রমাণ করো যে, $A,\,Q,\,P,\,B$ বিন্দু চারটি সমবৃত্ত।`,
      figure: "83-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $A,\,B,\,C,\,D$ একটি বৃত্তের উপর চারটি বিন্দু। $\triangle ABC$ এর $\angle CAB$ ও $\angle CBA$ এর সমদ্বিখণ্ডক $P$ তে এবং $\triangle ABD$ এর $\angle DAB$ ও $\angle DBA$ এর সমদ্বিখণ্ডক $Q$ তে মিলিত। প্রমাণ করতে হবে যে, $A,\,Q,\,P,\,B$ সমবৃত্ত।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle APB$ এ`,
          String.raw`$$\angle APB=180^{\circ}-\tfrac{1}{2}\left(\angle CAB+\angle CBA\right)=180^{\circ}-\tfrac{1}{2}\left(180^{\circ}-\angle ACB\right)=90^{\circ}+\tfrac{1}{2}\angle ACB$$`,
          String.raw`ধাপ ২. একইভাবে $\triangle AQB$ এ`,
          String.raw`$$\angle AQB=90^{\circ}+\tfrac{1}{2}\angle ADB$$`,
          String.raw`ধাপ ৩. $\angle ACB$ ও $\angle ADB$ একই চাপ $AB$ এর উপর দণ্ডায়মান বৃত্তস্থ কোণ, তাই`,
          String.raw`$$\angle ACB=\angle ADB\qquad\left[\,\text{উপপাদ্য }২১\,\right]$$`,
          String.raw`$$\therefore\;\angle APB=\angle AQB$$`,
          String.raw`ধাপ ৪. $P$ ও $Q$ বিন্দু $AB$ এর একই পাশে এবং $AB$ রেখাংশ এদের প্রত্যেকটিতে সমান কোণ উৎপন্ন করেছে। সুতরাং [অনুশীলনী ৮.১ এর প্রশ্ন ৯]`,
          String.raw`$$A,\,Q,\,P,\,B\text{ সমবৃত্ত।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 3,
      group: C83_PROVE_A,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তের $AB$ ও $CD$ জ্যা দুইটি বৃত্তের অভ্যন্তরে অবস্থিত কোনো বিন্দুতে সমকোণে মিলিত হয়েছে। প্রমাণ করো যে, $\angle AOD+\angle BOC=$ দুই সমকোণ।`,
      figure: "83-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তের $AB$ ও $CD$ জ্যা বৃত্তের অভ্যন্তরে $E$ বিন্দুতে সমকোণে মিলিত হয়েছে। প্রমাণ করতে হবে যে, $\angle AOD+\angle BOC=$ দুই সমকোণ।`,
          String.raw`অঙ্কন: $B,\,D$ যোগ করি। $O,\,A$; $O,\,D$; $O,\,B$ ও $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $AD$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle AOD$ ও বৃত্তস্থ $\angle ABD$:`,
          String.raw`$$\angle AOD=2\angle ABD\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ২. $BC$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ $\angle BOC$ ও বৃত্তস্থ $\angle BDC$:`,
          String.raw`$$\angle BOC=2\angle BDC$$`,
          String.raw`ধাপ ৩. যোগ করে,`,
          String.raw`$$\angle AOD+\angle BOC=2\left(\angle EBD+\angle EDB\right)$$`,
          String.raw`ধাপ ৪. $\triangle BED$ এ $\angle BED=$ এক সমকোণ, তাই অপর দুই কোণ পরস্পর পূরক: $\angle EBD+\angle EDB=$ এক সমকোণ।`,
          String.raw`$$\therefore\;\angle AOD+\angle BOC=2\times\text{এক সমকোণ}=\text{দুই সমকোণ}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 4,
      group: C83_PROVE_A,
      question: String.raw`$ABCD$ চতুর্ভুজের বিপরীত কোণদ্বয় পরস্পর সম্পূরক। $AC$ রেখা যদি $\angle BAD$ এর সমদ্বিখণ্ডক হয়, তবে প্রমাণ করো যে, $BC=CD$।`,
      figure: "83-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $ABCD$ চতুর্ভুজের বিপরীত কোণগুলো সম্পূরক এবং $AC$ রেখা $\angle BAD$ কে সমদ্বিখণ্ডিত করে, অর্থাৎ $\angle BAC=\angle CAD$। প্রমাণ করতে হবে যে, $BC=CD$।`,
          String.raw`অঙ্কন: $B,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. বিপরীত কোণ সম্পূরক, তাই $A,\,B,\,C,\,D$ সমবৃত্ত [উপপাদ্য ২৪]।`,
          String.raw`ধাপ ২. $\angle BAC$ ও $\angle BDC$ একই চাপ $BC$ এর উপর দণ্ডায়মান, তাই`,
          String.raw`$$\angle BDC=\angle BAC\qquad\left[\,\text{উপপাদ্য }২১\,\right]$$`,
          String.raw`ধাপ ৩. $\angle CAD$ ও $\angle CBD$ একই চাপ $CD$ এর উপর দণ্ডায়মান, তাই`,
          String.raw`$$\angle CBD=\angle CAD$$`,
          String.raw`ধাপ ৪. কিন্তু $\angle BAC=\angle CAD$, সুতরাং $\angle BDC=\angle CBD$।`,
          String.raw`ধাপ ৫. $\triangle BCD$ এ সমান কোণের বিপরীত বাহু সমান, তাই`,
          String.raw`$$BC=CD$$`,
        ],
        answer: String.raw`$BC=CD$ (প্রমাণিত)`,
      },
    },
    {
      id: 5,
      group: C83_CQ,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তের ব্যাসার্ধ $2.5$ সে.মি., $AB=3$ সে.মি. এবং $BD$, $\angle ADC$ এর সমদ্বিখণ্ডক। (চিত্রে $BD$ কেন্দ্র $O$ দিয়ে গেছে।)`,
      figure: "83-p5",
      parts: [
        {
          label: "ক",
          question: String.raw`$AD$ এর দৈর্ঘ্য নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`চিত্রে $BD$ কেন্দ্রগামী, তাই $BD$ ব্যাস:`,
              String.raw`$$BD=2\times2.5=5\text{ সে.মি.}$$`,
              String.raw`$\angle DAB$ অর্ধবৃত্তস্থ কোণ, তাই $\angle DAB=90^{\circ}$ [উপপাদ্য ২২]। সমকোণী $\triangle DAB$ এ পিথাগোরাসের উপপাদ্য অনুসারে`,
              String.raw`$$AD^{2}=BD^{2}-AB^{2}=5^{2}-3^{2}=25-9=16$$`,
              String.raw`$$\therefore\;AD=4\text{ সে.মি.}$$`,
            ],
            answer: String.raw`$AD=4$ সে.মি.`,
          },
        },
        {
          label: "খ",
          question: String.raw`দেখাও যে, $\angle ADC+\angle ABC=180^{\circ}$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $O,\,A$ ও $O,\,C$ যোগ করি।`,
              String.raw`একই চাপ $ABC$ এর উপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle AOC$ ও বৃত্তস্থ $\angle ADC$:`,
              String.raw`$$\angle AOC=2\angle ADC$$`,
              String.raw`একই চাপ $ADC$ এর উপর দণ্ডায়মান প্রবৃদ্ধ $\angle AOC$ ও বৃত্তস্থ $\angle ABC$:`,
              String.raw`$$\text{প্রবৃদ্ধ }\angle AOC=2\angle ABC$$`,
              String.raw`যোগ করে,`,
              String.raw`$$2\left(\angle ADC+\angle ABC\right)=\angle AOC+\text{প্রবৃদ্ধ }\angle AOC=360^{\circ}$$`,
              String.raw`$$\therefore\;\angle ADC+\angle ABC=180^{\circ}$$`,
            ],
            answer: "দেখানো হলো",
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $AB=BC$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $A,\,C$ যোগ করি।`,
              String.raw`প্রমাণ: $BD$, $\angle ADC$ এর সমদ্বিখণ্ডক, তাই $\angle ADB=\angle BDC$।`,
              String.raw`$\angle ADB$ ও $\angle ACB$ একই চাপ $AB$ এর উপর দণ্ডায়মান, তাই`,
              String.raw`$$\angle ACB=\angle ADB\qquad\left[\,\text{উপপাদ্য }২১\,\right]$$`,
              String.raw`$\angle BDC$ ও $\angle BAC$ একই চাপ $BC$ এর উপর দণ্ডায়মান, তাই`,
              String.raw`$$\angle BAC=\angle BDC$$`,
              String.raw`$$\therefore\;\angle ACB=\angle BAC$$`,
              String.raw`$\triangle ABC$ এ সমান কোণের বিপরীত বাহু সমান:`,
              String.raw`$$\therefore\;AB=BC$$`,
              String.raw`(অর্থাৎ $BC$ ও $3$ সে.মি.)`,
            ],
            answer: String.raw`$AB=BC$ (প্রমাণিত)`,
          },
        },
      ],
    },
    {
      id: 6,
      group: C83_PROVE_B,
      question:
        "সমান সমান ভূমির ওপর অবস্থিত যেকোনো দুইটি ত্রিভুজের শিরঃকোণদ্বয় সম্পূরক হলে, প্রমাণ করো যে, এদের পরিবৃত্তদ্বয় সমান হবে।",
      figure: "83-p6",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle PQR$ এ ভূমি $BC=QR$ এবং শিরঃকোণ $\angle BAC+\angle QPR=180^{\circ}$। প্রমাণ করতে হবে যে, এদের পরিবৃত্তদ্বয় সমান।`,
          String.raw`অঙ্কন: $\triangle PQR$ কে এমনভাবে স্থাপন করি যেন $Q$ বিন্দু $B$ তে, $R$ বিন্দু $C$ তে পড়ে এবং $P$ বিন্দু $BC$ এর যে পাশে $A$ তার বিপরীত পাশে $P'$ অবস্থানে পড়ে। ($BC=QR$ বলে এটি সম্ভব।)`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle P'BC\cong\triangle PQR$, তাই $\angle BP'C=\angle QPR$ এবং এদের পরিবৃত্তও একই মাপের।`,
          String.raw`ধাপ ২. $ABP'C$ চতুর্ভুজে বিপরীত কোণ`,
          String.raw`$$\angle BAC+\angle BP'C=\angle BAC+\angle QPR=180^{\circ}$$`,
          String.raw`বিপরীত কোণ সম্পূরক, তাই $A,\,B,\,P',\,C$ সমবৃত্ত [উপপাদ্য ২৪]।`,
          String.raw`ধাপ ৩. সুতরাং যে বৃত্তটি $A,\,B,\,C$ দিয়ে যায় (অর্থাৎ $\triangle ABC$ এর পরিবৃত্ত), সেটিই $B,\,P',\,C$ দিয়ে যায় (অর্থাৎ $\triangle P'BC$ এর পরিবৃত্ত)।`,
          String.raw`ধাপ ৪. অতএব $\triangle ABC$ ও $\triangle PQR$ এর পরিবৃত্ত একই ব্যাসার্ধের, অর্থাৎ সমান।`,
          String.raw`চিত্রে $BC=QR=12$, $\angle A=70^{\circ}$, $\angle P=110^{\circ}$ — দুইটি পরিবৃত্তের ব্যাসার্ধই প্রায় $6.39$।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 7,
      group: C83_PROVE_B,
      question:
        "প্রমাণ করো যে, বৃত্তস্থ চতুর্ভুজের যেকোনো কোণের সমদ্বিখণ্ডক ও তার বিপরীত কোণের বহির্দ্বিখণ্ডক বৃত্তের ওপর ছেদ করে।",
      figure: "83-p7",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ একটি বৃত্তস্থ চতুর্ভুজ। $\angle BAD$ এর সমদ্বিখণ্ডক বৃত্তকে $P$ বিন্দুতে ছেদ করে। $BC$ কে $F$ পর্যন্ত বর্ধিত করলে $\angle DCF$ হলো $C$ বিন্দুর বহিঃস্থ কোণ। প্রমাণ করতে হবে যে, $\angle DCF$ এর সমদ্বিখণ্ডক $P$ বিন্দু দিয়ে যায়।`,
          String.raw`অঙ্কন: $C,\,P$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. বৃত্তস্থ চতুর্ভুজের বহিঃস্থ কোণ বিপরীত অন্তঃস্থ কোণের সমান, তাই`,
          String.raw`$$\angle DCF=\angle BAD\qquad\left[\,\text{অনুসিদ্ধান্ত }৬\,\right]$$`,
          String.raw`ধাপ ২. $\angle DAP$ ও $\angle DCP$ একই চাপ $DP$ এর উপর দণ্ডায়মান, তাই`,
          String.raw`$$\angle DCP=\angle DAP=\tfrac{1}{2}\angle BAD\qquad\left[\,AP\text{ সমদ্বিখণ্ডক}\,\right]$$`,
          String.raw`ধাপ ৩. ধাপ ১ ও ২ থেকে`,
          String.raw`$$\angle DCP=\tfrac{1}{2}\angle DCF$$`,
          String.raw`অর্থাৎ $CP$ বহিঃস্থ $\angle DCF$ কে সমদ্বিখণ্ডিত করে, তাই $CP$ ই $\angle C$ এর বহির্দ্বিখণ্ডক।`,
          String.raw`ধাপ ৪. সুতরাং $\angle A$ এর সমদ্বিখণ্ডক $AP$ ও $\angle C$ এর বহির্দ্বিখণ্ডক $CP$ বৃত্তের উপরের $P$ বিন্দুতে ছেদ করে।`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
};

// ─────────────── অনুশীলনী ৮.৪ ───────────────

export const exercise84: Exercise = {
  id: "8.4",
  bnId: "অনুশীলনী ৮.৪",
  title: "বৃত্তের ছেদক ও স্পর্শক",
  bookPages: "১৬৩ – ১৬৭",
  formulas: [
    {
      title: "ছেদক, স্পর্শক ও সাধারণ স্পর্শক",
      formulas: [
        {
          statement: "ছেদক ও স্পর্শক",
          note: "একটি বৃত্ত ও একটি সরলরেখার সর্বাধিক দুইটি ছেদবিন্দু থাকতে পারে। দুইটি ছেদবিন্দু থাকলে রেখাটি ছেদক; একটি ও কেবল একটি সাধারণ বিন্দু থাকলে রেখাটি স্পর্শক, আর সেই বিন্দু স্পর্শবিন্দু।",
        },
        {
          statement: "সরল ও তির্যক সাধারণ স্পর্শক",
          note: "দুইটি বৃত্তের সাধারণ স্পর্শকের দুই পাশে কেন্দ্র থাকলে তা তির্যক, একই পাশে থাকলে সরল সাধারণ স্পর্শক। একই বিন্দুতে স্পর্শ করলে বৃত্ত দুইটি পরস্পরকে স্পর্শ করে — কেন্দ্র একই পাশে হলে অন্তঃস্পর্শ, বিপরীত পাশে হলে বহিঃস্পর্শ।",
        },
      ],
    },
    {
      title: "উপপাদ্য ও অনুসিদ্ধান্ত",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ২৫: $\;PT\perp OP$`,
          note: "বৃত্তের যেকোনো বিন্দুতে অঙ্কিত স্পর্শক স্পর্শবিন্দুগামী ব্যাসার্ধের ওপর লম্ব।",
        },
        {
          statement: "অনুসিদ্ধান্ত ৮, ৯, ১০",
          note: "বৃত্তের কোনো বিন্দুতে একটিমাত্র স্পর্শক আঁকা যায়। স্পর্শবিন্দুতে স্পর্শকের ওপর অঙ্কিত লম্ব কেন্দ্রগামী। বৃত্তের কোনো বিন্দুগামী ব্যাসার্ধের ওপর ঐ বিন্দুতে অঙ্কিত লম্ব বৃত্তের স্পর্শক।",
        },
        {
          statement: String.raw`উপপাদ্য ২৬: $\;PA=PB$`,
          note: "বৃত্তের বহিঃস্থ কোনো বিন্দু থেকে বৃত্তে দুইটি স্পর্শক টানলে, ঐ বিন্দু থেকে স্পর্শবিন্দুদ্বয়ের দূরত্ব সমান।",
        },
        {
          statement: "উপপাদ্য ২৭",
          note: "দুইটি বৃত্ত পরস্পরকে বহিঃস্পর্শ করলে এদের কেন্দ্রদ্বয় ও স্পর্শবিন্দু সমরেখ। (অন্তঃস্পর্শেও তা-ই।)",
        },
        {
          statement: String.raw`অনুসিদ্ধান্ত ১১ ও ১২: $\;d=r_1+r_2,\;\;d=r_1-r_2$`,
          note: "বহিঃস্পর্শে কেন্দ্রদ্বয়ের দূরত্ব ব্যাসার্ধদ্বয়ের সমষ্টি; অন্তঃস্পর্শে ব্যাসার্ধদ্বয়ের অন্তর।",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ২৫ — book page ১৬৪.
    {
      id: 25,
      label: "উপপাদ্য",
      question: "বৃত্তের যেকোনো বিন্দুতে অঙ্কিত স্পর্শক স্পর্শবিন্দুগামী ব্যাসার্ধের ওপর লম্ব।",
      figure: "84-t25",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তের $P$ বিন্দুতে $PT$ একটি স্পর্শক এবং $OP$ স্পর্শবিন্দুগামী ব্যাসার্ধ। প্রমাণ করতে হবে যে, $PT\perp OP$।`,
          String.raw`অঙ্কন: $PT$ স্পর্শকের ওপর যেকোনো একটি বিন্দু $Q$ নিই এবং $O,\,Q$ যোগ করি।`,
          String.raw`প্রমাণ: $PT$ স্পর্শক, তাই $P$ ছাড়া $PT$ এর অন্য সকল বিন্দু বৃত্তের বাইরে। সুতরাং $Q$ বিন্দু বৃত্তের বাইরে।`,
          String.raw`$$\therefore\;OQ>OP$$`,
          String.raw`এটি $P$ ব্যতীত $PT$ এর উপরস্থ $Q$ এর সকল অবস্থানের জন্য সত্য। তাই কেন্দ্র $O$ থেকে $PT$ এর ওপর $OP$ হলো ক্ষুদ্রতম দূরত্ব।`,
          String.raw`কোনো সরলরেখার বহিঃস্থ বিন্দু থেকে রেখাটির উপর যত রেখাংশ টানা যায়, তাদের মধ্যে লম্বটিই ক্ষুদ্রতম।`,
          String.raw`$$\therefore\;PT\perp OP$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২৬ — book page ১৬৫.
    {
      id: 26,
      label: "উপপাদ্য",
      question:
        "বৃত্তের বহিঃস্থ কোনো বিন্দু থেকে বৃত্তে দুইটি স্পর্শক টানলে, ঐ বিন্দু থেকে স্পর্শবিন্দুদ্বয়ের দূরত্ব সমান।",
      figure: "84-t26",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট $ABC$ বৃত্তের বহিঃস্থ বিন্দু $P$ এবং $PA$ ও $PB$ রেখাংশ বৃত্তের $A$ ও $B$ বিন্দুতে দুইটি স্পর্শক। প্রমাণ করতে হবে যে, $PA=PB$।`,
          String.raw`অঙ্কন: $O,\,A$; $O,\,B$ এবং $O,\,P$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $PA$ স্পর্শক এবং $OA$ স্পর্শবিন্দুগামী ব্যাসার্ধ, তাই`,
          String.raw`$$\angle PAO=\text{এক সমকোণ}\qquad\left[\,\text{উপপাদ্য }২৫\,\right]$$`,
          String.raw`অনুরূপভাবে $\angle PBO=$ এক সমকোণ। সুতরাং $\triangle PAO$ ও $\triangle PBO$ উভয়ই সমকোণী।`,
          String.raw`ধাপ ২. সমকোণী $\triangle PAO$ ও $\triangle PBO$ এ`,
          String.raw`$$\text{অতিভুজ }PO=\text{অতিভুজ }PO,\qquad OA=OB$$`,
          String.raw`$$\therefore\;\triangle PAO\cong\triangle PBO\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`$$\therefore\;PA=PB$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২৭ — book pages ১৬৫-১৬৬.
    {
      id: 27,
      label: "উপপাদ্য",
      question: "দুইটি বৃত্ত পরস্পরকে বহিঃস্পর্শ করলে, এদের কেন্দ্রদ্বয় ও স্পর্শ বিন্দু সমরেখ।",
      figure: "84-t27",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $A$ ও $B$ কেন্দ্রবিশিষ্ট দুইটি বৃত্ত পরস্পর $O$ বিন্দুতে বহিঃস্পর্শ করে। প্রমাণ করতে হবে যে, $A,\,O,\,B$ সমরেখ।`,
          String.raw`অঙ্কন: বৃত্তদ্বয় $O$ বিন্দুতে স্পর্শ করেছে, তাই $O$ বিন্দুতে এদের একটি সাধারণ স্পর্শক আছে। $O$ বিন্দুতে সাধারণ স্পর্শক $POQ$ আঁকি এবং $O,\,A$ ও $O,\,B$ যোগ করি।`,
          String.raw`প্রমাণ: $A$ কেন্দ্রবিশিষ্ট বৃত্তে $OA$ স্পর্শবিন্দুগামী ব্যাসার্ধ এবং $POQ$ স্পর্শক, তাই $\angle POA=$ এক সমকোণ। তদ্রূপ $\angle POB=$ এক সমকোণ।`,
          String.raw`$$\angle POA+\angle POB=\text{এক সমকোণ}+\text{এক সমকোণ}=\text{দুই সমকোণ}$$`,
          String.raw`বা, $\angle AOB=$ দুই সমকোণ, অর্থাৎ $\angle AOB$ একটি সরলকোণ।`,
          String.raw`$$\therefore\;A,\,O,\,B\text{ বিন্দুত্রয় সমরেখ।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: C84_PROVE_A,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট একটি বৃত্তের বহিঃস্থ কোনো বিন্দু $P$ থেকে বৃত্তে দুইটি স্পর্শক টানা হলো। প্রমাণ করো যে, $OP$ সরলরেখা স্পর্শ-জ্যা এর লম্বসমদ্বিখণ্ডক।`,
      figure: "84-p1",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তের বহিঃস্থ বিন্দু $P$ থেকে $PA$ ও $PB$ দুইটি স্পর্শক, যাদের স্পর্শবিন্দু $A$ ও $B$। $AB$ স্পর্শ-জ্যা, যা $OP$ কে $M$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $AM=BM$ এবং $OP\perp AB$।`,
          String.raw`অঙ্কন: $O,\,A$ ও $O,\,B$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. সমকোণী $\triangle PAO$ ও $\triangle PBO$ এ ($\angle PAO=\angle PBO=90^{\circ}$, উপপাদ্য ২৫)`,
          String.raw`$$\text{অতিভুজ }PO=\text{অতিভুজ }PO,\qquad OA=OB$$`,
          String.raw`$$\therefore\;\triangle PAO\cong\triangle PBO\;\Rightarrow\;PA=PB\text{ এবং }\angle APO=\angle BPO$$`,
          String.raw`ধাপ ২. $\triangle PAM$ ও $\triangle PBM$ এ`,
          String.raw`$$PA=PB,\qquad PM=PM,\qquad\text{অন্তর্ভুক্ত }\angle APM=\text{অন্তর্ভুক্ত }\angle BPM$$`,
          String.raw`$$\therefore\;\triangle PAM\cong\triangle PBM\qquad\left[\,\text{বাহু-কোণ-বাহু}\,\right]$$`,
          String.raw`$$\therefore\;AM=BM\quad\text{এবং}\quad\angle PMA=\angle PMB$$`,
          String.raw`ধাপ ৩. $\angle PMA$ ও $\angle PMB$ রৈখিক যুগল এবং সমান, তাই প্রত্যেকে এক সমকোণ। অর্থাৎ $OP\perp AB$।`,
          String.raw`সুতরাং $OP$ সরলরেখা স্পর্শ-জ্যা $AB$ এর লম্বসমদ্বিখণ্ডক।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 2,
      group: C84_PROVE_A,
      question:
        "প্রমাণ করো যে, দুইটি বৃত্ত এককেন্দ্রিক হলে এবং বৃহত্তর বৃত্তটির কোনো জ্যা ক্ষুদ্রতর বৃত্তটিকে স্পর্শ করলে উক্ত জ্যা স্পর্শবিন্দুতে সমদ্বিখণ্ডিত হয়।",
      figure: "84-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট দুইটি এককেন্দ্রিক বৃত্তের বড়টির জ্যা $AB$ ছোট বৃত্তকে $C$ বিন্দুতে স্পর্শ করেছে। প্রমাণ করতে হবে যে, $AC=BC$।`,
          String.raw`অঙ্কন: $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. ছোট বৃত্তে $AB$ স্পর্শক এবং $OC$ স্পর্শবিন্দুগামী ব্যাসার্ধ, তাই`,
          String.raw`$$OC\perp AB\qquad\left[\,\text{উপপাদ্য }২৫\,\right]$$`,
          String.raw`ধাপ ২. বড় বৃত্তে $AB$ একটি জ্যা এবং কেন্দ্র $O$ থেকে এর উপর $OC$ লম্ব। কেন্দ্র থেকে জ্যা এর উপর অঙ্কিত লম্ব জ্যাকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$AC=BC$$`,
          String.raw`অর্থাৎ জ্যা $AB$ স্পর্শবিন্দু $C$ তে সমদ্বিখণ্ডিত হয়।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 3,
      group: C84_PROVE_A,
      question: String.raw`$AB$ কোনো বৃত্তের ব্যাস এবং $BC$ ব্যাসার্ধের সমান একটি জ্যা। যদি $A$ ও $C$ বিন্দুতে অঙ্কিত স্পর্শকদ্বয় পরস্পর $D$ বিন্দুতে মিলিত হয়, তবে প্রমাণ করো যে, $ACD$ একটি সমবাহু ত্রিভুজ।`,
      figure: "84-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তে $AB$ ব্যাস, $BC=$ ব্যাসার্ধ, এবং $A$ ও $C$ বিন্দুর স্পর্শকদ্বয় $D$ বিন্দুতে মিলিত। প্রমাণ করতে হবে যে, $\triangle ACD$ সমবাহু।`,
          String.raw`অঙ্কন: $O,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle OBC$ এ $OB=OC=BC$ (প্রত্যেকে ব্যাসার্ধের সমান), তাই এটি সমবাহু এবং $\angle BOC=60^{\circ}$।`,
          String.raw`$$\therefore\;\angle AOC=180^{\circ}-60^{\circ}=120^{\circ}$$`,
          String.raw`ধাপ ২. $AOCD$ চতুর্ভুজে $\angle OAD=\angle OCD=90^{\circ}$ [উপপাদ্য ২৫], তাই`,
          String.raw`$$\angle ADC=360^{\circ}-\left(90^{\circ}+90^{\circ}+120^{\circ}\right)=60^{\circ}$$`,
          String.raw`ধাপ ৩. বহিঃস্থ বিন্দু $D$ থেকে দুইটি স্পর্শক, তাই $DA=DC$ [উপপাদ্য ২৬]। সুতরাং $\triangle ACD$ সমদ্বিবাহু এবং`,
          String.raw`$$\angle DAC=\angle DCA=\frac{180^{\circ}-60^{\circ}}{2}=60^{\circ}$$`,
          String.raw`ধাপ ৪. $\triangle ACD$ এর তিনটি কোণই $60^{\circ}$, তাই এটি সমবাহু ত্রিভুজ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 4,
      group: C84_PROVE_A,
      question:
        "প্রমাণ করো যে, কোনো বৃত্তের পরিলিখিত চতুর্ভুজের যেকোনো দুইটি বিপরীত বাহু কেন্দ্রে যে দুইটি কোণ ধারণ করে, তারা পরস্পর সম্পূরক।",
      figure: "84-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $ABCD$ চতুর্ভুজ পরিলিখিত এবং $AB,\,BC,\,CD,\,DA$ বাহু বৃত্তকে যথাক্রমে $P,\,Q,\,R,\,S$ বিন্দুতে স্পর্শ করেছে। প্রমাণ করতে হবে যে, $\angle AOB+\angle COD=180^{\circ}$।`,
          String.raw`অঙ্কন: $O$ থেকে $A,\,B,\,C,\,D$ ও $P,\,Q,\,R,\,S$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. সমকোণী $\triangle OAP$ ও $\triangle OAS$ এ ($\angle OPA=\angle OSA=90^{\circ}$) অতিভুজ $OA$ সাধারণ এবং $OP=OS$। তাই এরা সর্বসম এবং`,
          String.raw`$$\angle AOP=\angle AOS$$`,
          String.raw`ধাপ ২. একইভাবে`,
          String.raw`$$\angle BOP=\angle BOQ,\qquad\angle COQ=\angle COR,\qquad\angle DOR=\angle DOS$$`,
          String.raw`ধাপ ৩. $O$ বিন্দুর চারপাশের আটটি কোণের সমষ্টি $360^{\circ}$:`,
          String.raw`$$2\left(\angle AOP+\angle BOP+\angle COR+\angle DOR\right)=360^{\circ}$$`,
          String.raw`$$\text{বা, }\left(\angle AOP+\angle BOP\right)+\left(\angle COR+\angle DOR\right)=180^{\circ}$$`,
          String.raw`$$\therefore\;\angle AOB+\angle COD=180^{\circ}$$`,
          String.raw`একইভাবে $\angle BOC+\angle AOD=180^{\circ}$।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 5,
      group: C84_CQ,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তের বহিঃস্থ বিন্দু $P$ থেকে বৃত্তে $PA$ ও $PB$ দুইটি স্পর্শক।`,
      parts: [
        {
          label: "ক",
          question: "উদ্দীপকের আলোকে চিত্র আঁকো।",
          figure: "84-p5",
          solution: {
            steps: [
              String.raw`উপরের চিত্রটিই নির্ণেয় চিত্র — $O$ কেন্দ্রবিশিষ্ট বৃত্তের বাইরের বিন্দু $P$ থেকে $PA$ ও $PB$ দুইটি স্পর্শক আঁকা হয়েছে; $A$ ও $B$ স্পর্শবিন্দু, $AB$ স্পর্শ-জ্যা, আর $OP$ তাকে $M$ বিন্দুতে ছেদ করেছে।`,
              String.raw`স্পর্শবিন্দুতে ব্যাসার্ধ ও স্পর্শকের মধ্যের সমকোণ দুইটি চিহ্নিত।`,
            ],
            answer: "চিত্র অঙ্কিত হলো",
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $PA=PB$`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $O,\,A$; $O,\,B$ ও $O,\,P$ যোগ করি।`,
              String.raw`প্রমাণ: $PA$ স্পর্শক ও $OA$ স্পর্শবিন্দুগামী ব্যাসার্ধ, তাই $\angle PAO=90^{\circ}$; অনুরূপভাবে $\angle PBO=90^{\circ}$।`,
              String.raw`সমকোণী $\triangle PAO$ ও $\triangle PBO$ এ`,
              String.raw`$$\text{অতিভুজ }PO=\text{অতিভুজ }PO,\qquad OA=OB$$`,
              String.raw`$$\therefore\;\triangle PAO\cong\triangle PBO\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
              String.raw`$$\therefore\;PA=PB$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $OP$ রেখাংশ স্পর্শ-জ্যা এর লম্বসমদ্বিখণ্ডক।`,
          solution: {
            steps: [
              String.raw`(খ) থেকে $\triangle PAO\cong\triangle PBO$, তাই $\angle APO=\angle BPO$ এবং $PA=PB$।`,
              String.raw`স্পর্শ-জ্যা $AB$ ও $OP$ এর ছেদবিন্দু $M$ হলে $\triangle PAM$ ও $\triangle PBM$ এ`,
              String.raw`$$PA=PB,\qquad PM=PM,\qquad\angle APM=\angle BPM$$`,
              String.raw`$$\therefore\;\triangle PAM\cong\triangle PBM\qquad\left[\,\text{বাহু-কোণ-বাহু}\,\right]$$`,
              String.raw`$$\therefore\;AM=BM\quad\text{এবং}\quad\angle PMA=\angle PMB$$`,
              String.raw`$\angle PMA$ ও $\angle PMB$ রৈখিক যুগল কোণ এবং সমান, তাই প্রত্যেকে $90^{\circ}$।`,
              String.raw`$$\therefore\;OP\perp AB\text{ এবং }AM=BM$$`,
              String.raw`অর্থাৎ $OP$ স্পর্শ-জ্যা $AB$ এর লম্বসমদ্বিখণ্ডক।`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },
    {
      id: 6,
      group: C84_PROVE_B,
      question: String.raw`দেওয়া আছে, $O$ বৃত্তের কেন্দ্র এবং $PA$ ও $PB$ স্পর্শকদ্বয় বৃত্তকে যথাক্রমে $A$ ও $B$ বিন্দুতে স্পর্শ করেছে। প্রমাণ করো যে, $PO$, $\angle APB$ কে সমদ্বিখণ্ডিত করে।`,
      figure: "84-p6",
      solution: {
        steps: [
          String.raw`অঙ্কন: $O,\,A$ ও $O,\,B$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. স্পর্শক স্পর্শবিন্দুগামী ব্যাসার্ধের উপর লম্ব, তাই`,
          String.raw`$$\angle PAO=\angle PBO=\text{এক সমকোণ}\qquad\left[\,\text{উপপাদ্য }২৫\,\right]$$`,
          String.raw`ধাপ ২. সমকোণী $\triangle PAO$ ও $\triangle PBO$ এ`,
          String.raw`$$\text{অতিভুজ }PO=\text{অতিভুজ }PO,\qquad OA=OB$$`,
          String.raw`$$\therefore\;\triangle PAO\cong\triangle PBO\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`$$\therefore\;\angle APO=\angle BPO$$`,
          String.raw`অর্থাৎ $PO$, $\angle APB$ কে সমদ্বিখণ্ডিত করে।`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
};

// ─────────────── অনুশীলনী ৮.৫ ───────────────

export const exercise85: Exercise = {
  id: "8.5",
  bnId: "অনুশীলনী ৮.৫",
  title: "বৃত্ত সম্পর্কীয় সম্পাদ্য",
  bookPages: "১৬৭ – ১৭৩",
  formulas: [
    {
      title: "অঙ্কনের ভিত্তি",
      formulas: [
        {
          statement: "কেন্দ্র নির্ণয়",
          note: "যেকোনো দুইটি জ্যা এর লম্বসমদ্বিখণ্ডক কেন্দ্রগামী, তাই এদের ছেদবিন্দুই কেন্দ্র।",
        },
        {
          statement: "স্পর্শক অঙ্কন",
          note: "বৃত্তের ভেতরের কোনো বিন্দু থেকে স্পর্শক আঁকা যায় না। বৃত্তের উপরের বিন্দুতে ঠিক একটি স্পর্শক — ঐ বিন্দুগামী ব্যাসার্ধের উপর লম্ব। বাইরের বিন্দু থেকে ঠিক দুইটি স্পর্শক আঁকা যায়।",
        },
        {
          statement: "পরিবৃত্ত",
          note: "ত্রিভুজের শীর্ষবিন্দু তিনটি দিয়ে যাওয়া বৃত্ত; কেন্দ্র বাহুগুলোর লম্বসমদ্বিখণ্ডকের ছেদবিন্দু। সূক্ষ্মকোণী ত্রিভুজে পরিকেন্দ্র ভেতরে, স্থূলকোণীতে বাইরে, আর সমকোণীতে অতিভুজের উপর।",
        },
        {
          statement: "অন্তর্বৃত্ত ও বহির্বৃত্ত",
          note: "অন্তর্বৃত্ত তিন বাহুকেই ভেতর থেকে স্পর্শ করে — কেন্দ্র কোণগুলোর সমদ্বিখণ্ডকের ছেদবিন্দু। বহির্বৃত্ত একটি বাহু ও অপর দুই বাহুর বর্ধিতাংশকে স্পর্শ করে — কেন্দ্র দুইটি বহিঃস্থ কোণের সমদ্বিখণ্ডকের ছেদবিন্দু। একটি ত্রিভুজের তিনটি বহির্বৃত্ত আঁকা যায়।",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের সম্পাদ্য ও অঙ্কন",
  examples: [
    // সম্পাদ্য ৬ — book page ১৬৭.
    {
      id: 6,
      label: "সম্পাদ্য",
      question: "একটি বৃত্ত বা বৃত্তচাপ দেওয়া আছে, কেন্দ্র নির্ণয় করতে হবে।",
      solution: {
        steps: [
          String.raw`অঙ্কন: প্রদত্ত বৃত্তে বা বৃত্তচাপে তিনটি বিন্দু $A,\,B$ ও $C$ নিই। $A,\,B$ ও $B,\,C$ যোগ করি। $AB$ ও $BC$ জ্যা দুইটির লম্বদ্বিখণ্ডক যথাক্রমে $EF$ ও $GH$ টানি। মনে করি, তারা পরস্পর $O$ বিন্দুতে ছেদ করে। তাহলে $O$ ই বৃত্তের বা বৃত্তচাপের কেন্দ্র।`,
          String.raw`প্রমাণ: $EF$ রেখাংশ $AB$ জ্যা এর এবং $GH$ রেখাংশ $BC$ জ্যা এর লম্বদ্বিখণ্ডক। বৃত্তের যেকোনো জ্যা এর লম্বদ্বিখণ্ডক কেন্দ্রগামী, তাই $EF$ ও $GH$ উভয়েই কেন্দ্রগামী।`,
          String.raw`কিন্তু $EF$ ও $GH$ এর সাধারণ বিন্দু কেবল $O$। সুতরাং $O$ বিন্দুই বৃত্তের বা বৃত্তচাপের কেন্দ্র।`,
        ],
        answer: String.raw`$O$ নির্ণেয় কেন্দ্র`,
        figure: "85-c6",
      },
    },
    // সম্পাদ্য ৭ — book pages ১৬৭-১৬৮.
    {
      id: 7,
      label: "সম্পাদ্য",
      question: "বৃত্তের কোনো বিন্দুতে একটি স্পর্শক আঁকতে হবে।",
      solution: {
        steps: [
          String.raw`মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তে $A$ একটি বিন্দু। $A$ বিন্দুতে বৃত্তটির একটি স্পর্শক আঁকতে হবে।`,
          String.raw`অঙ্কন: $O,\,A$ যোগ করি। $A$ বিন্দুতে $OA$ এর উপর $AP$ লম্ব আঁকি। তাহলে $AP$ নির্ণেয় স্পর্শক।`,
          String.raw`প্রমাণ: $OA$ রেখাংশ $A$ বিন্দুগামী ব্যাসার্ধ এবং $AP$ তার উপর লম্ব। সুতরাং $AP$ রেখাই নির্ণেয় স্পর্শক [অনুসিদ্ধান্ত ১০]।`,
          String.raw`বিশেষ দ্রষ্টব্য: বৃত্তের কোনো বিন্দুতে একটিমাত্র স্পর্শক আঁকা যায়।`,
        ],
        answer: String.raw`$AP$ নির্ণেয় স্পর্শক`,
        figure: "85-c7",
      },
    },
    // সম্পাদ্য ৮ — book page ১৬৮.
    {
      id: 8,
      label: "সম্পাদ্য",
      question: "বৃত্তের বহিঃস্থ কোনো বিন্দু থেকে বৃত্তটির স্পর্শক আঁকতে হবে।",
      solution: {
        steps: [
          String.raw`মনে করি, $O$ কেন্দ্রবিশিষ্ট বৃত্তের $P$ একটি বহিঃস্থ বিন্দু। $P$ থেকে ঐ বৃত্তে স্পর্শক আঁকতে হবে।`,
          String.raw`অঙ্কন: ১. $P,\,O$ যোগ করি। $PO$ রেখাংশের মধ্যবিন্দু $M$ নির্ণয় করি।`,
          String.raw`২. $M$ কে কেন্দ্র করে $MO$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্ত আঁকি। মনে করি, নতুন বৃত্তটি প্রদত্ত বৃত্তকে $A$ ও $B$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $A,\,P$ এবং $B,\,P$ যোগ করি। তাহলে $AP$ ও $BP$ উভয়েই নির্ণেয় স্পর্শক।`,
          String.raw`প্রমাণ: $A,\,O$ ও $B,\,O$ যোগ করি। $APB$ বৃত্তে $PO$ ব্যাস।`,
          String.raw`$$\therefore\;\angle PAO=\text{এক সমকোণ}\qquad\left[\,\text{অর্ধবৃত্তস্থ কোণ সমকোণ}\,\right]$$`,
          String.raw`সুতরাং $OA\perp AP$। অতএব $O$ কেন্দ্রিক বৃত্তের $A$ বিন্দুতে $AP$ একটি স্পর্শক। অনুরূপভাবে $BP$ ও একটি স্পর্শক।`,
          String.raw`বিশেষ দ্রষ্টব্য: বৃত্তের বহিঃস্থ কোনো বিন্দু থেকে ঐ বৃত্তে দুইটি ও কেবল দুইটি স্পর্শক আঁকা যায়।`,
        ],
        answer: String.raw`$AP$ ও $BP$ নির্ণেয় স্পর্শক`,
        figure: "85-c8",
      },
    },
    // সম্পাদ্য ৯ — book pages ১৬৮-১৬৯.
    {
      id: 9,
      label: "সম্পাদ্য",
      question: "কোনো নির্দিষ্ট ত্রিভুজের পরিবৃত্ত আঁকতে হবে।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABC$ একটি ত্রিভুজ। এমন একটি বৃত্ত আঁকতে হবে, যা $A,\,B$ ও $C$ বিন্দু দিয়ে যায়।`,
          String.raw`অঙ্কন: ১. $AB$ ও $AC$ রেখাংশের লম্বসমদ্বিখণ্ডক যথাক্রমে $EM$ ও $FN$ আঁকি। মনে করি, তারা পরস্পরকে $O$ বিন্দুতে ছেদ করে।`,
          String.raw`২. $A,\,O$ যোগ করি। $O$ কে কেন্দ্র করে $OA$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্ত আঁকি। এই বৃত্তটিই নির্ণেয় পরিবৃত্ত।`,
          String.raw`প্রমাণ: $B,\,O$ ও $C,\,O$ যোগ করি। $O$ বিন্দু $AB$ এর লম্বদ্বিখণ্ডক $EM$ এর উপর অবস্থিত, তাই $OA=OB$। একইভাবে $OA=OC$।`,
          String.raw`$$\therefore\;OA=OB=OC$$`,
          String.raw`সুতরাং $O$ কে কেন্দ্র করে $OA$ ব্যাসার্ধে অঙ্কিত বৃত্তটি $A,\,B,\,C$ তিনটি বিন্দু দিয়ে যায় — এটিই $\triangle ABC$ এর পরিবৃত্ত।`,
        ],
        answer: "পরিবৃত্ত অঙ্কিত হলো",
        figure: "85-c9",
      },
    },
    // সম্পাদ্য ১০ — book page ১৬৯.
    {
      id: 10,
      label: "সম্পাদ্য",
      question: "কোনো নির্দিষ্ট ত্রিভুজের অন্তর্বৃত্ত আঁকতে হবে।",
      solution: {
        steps: [
          String.raw`মনে করি, $\triangle ABC$ একটি ত্রিভুজ। এর ভিতরে এমন একটি বৃত্ত আঁকতে হবে, যা $BC,\,CA$ ও $AB$ বাহু তিনটির প্রত্যেকটিকে স্পর্শ করে।`,
          String.raw`অঙ্কন: $\angle ABC$ ও $\angle ACB$ এর সমদ্বিখণ্ডক $BL$ ও $CM$ আঁকি; মনে করি, তারা $O$ বিন্দুতে ছেদ করে। $O$ থেকে $BC$ এর উপর $OD$ লম্ব আঁকি। $O$ কে কেন্দ্র করে $OD$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্ত আঁকি। এই বৃত্তটিই নির্ণেয় অন্তর্বৃত্ত।`,
          String.raw`প্রমাণ: $O$ থেকে $AC$ ও $AB$ এর উপর যথাক্রমে $OE$ ও $OF$ লম্ব টানি।`,
          String.raw`$O$ বিন্দু $\angle ABC$ এর সমদ্বিখণ্ডকের উপর, তাই $OF=OD$। অনুরূপভাবে $O$ বিন্দু $\angle ACB$ এর সমদ্বিখণ্ডকের উপর বলে $OE=OD$।`,
          String.raw`$$\therefore\;OD=OE=OF$$`,
          String.raw`সুতরাং $O$ কেন্দ্রিক $OD$ ব্যাসার্ধের বৃত্তটি $D,\,E,\,F$ দিয়ে যায়। আবার $OD,\,OE,\,OF$ এর প্রান্তবিন্দুতে যথাক্রমে $BC,\,AC,\,AB$ লম্ব, তাই বৃত্তটি বাহু তিনটিকে $D,\,E,\,F$ বিন্দুতে স্পর্শ করে। অতএব $DEF$ বৃত্তটিই $\triangle ABC$ এর অন্তর্বৃত্ত।`,
        ],
        answer: "অন্তর্বৃত্ত অঙ্কিত হলো",
        figure: "85-c10",
      },
    },
    // সম্পাদ্য ১১ — book page ১৭০.
    {
      id: 11,
      label: "সম্পাদ্য",
      question: "কোনো নির্দিষ্ট ত্রিভুজের বহির্বৃত্ত আঁকতে হবে।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABC$ একটি ত্রিভুজ। এমন একটি বৃত্ত আঁকতে হবে, যা ত্রিভুজের একটি বাহুকে এবং অপর দুই বাহুর বর্ধিতাংশকে স্পর্শ করে।`,
          String.raw`অঙ্কন: $AB$ ও $AC$ বাহুদ্বয়কে যথাক্রমে $D$ ও $F$ পর্যন্ত বর্ধিত করি। $\angle DBC$ ও $\angle FCB$ এর সমদ্বিখণ্ডক $BM$ ও $CN$ আঁকি; মনে করি, $E$ এদের ছেদবিন্দু। $E$ থেকে $BC$ এর উপর $EH$ লম্ব আঁকি। $E$ কে কেন্দ্র করে $EH$ এর সমান ব্যাসার্ধ নিয়ে একটি বৃত্ত আঁকি। এই বৃত্তটিই নির্ণেয় বহির্বৃত্ত।`,
          String.raw`প্রমাণ: $E$ থেকে $BD$ ও $CF$ এর উপর যথাক্রমে $EG$ ও $EL$ লম্ব টানি।`,
          String.raw`$E$ বিন্দু $\angle DBC$ এর দ্বিখণ্ডকের উপর, তাই $EH=EG$। অনুরূপভাবে $E$ বিন্দু $\angle FCB$ এর দ্বিখণ্ডকের উপর বলে $EH=EL$।`,
          String.raw`$$\therefore\;EH=EG=EL$$`,
          String.raw`সুতরাং $E$ কেন্দ্রিক $EL$ ব্যাসার্ধের বৃত্ত $H,\,G,\,L$ দিয়ে যায় এবং $BC,\,BD,\,CF$ কে এই তিন বিন্দুতে স্পর্শ করে (কারণ ব্যাসার্ধগুলোর প্রান্তে রেখাগুলো লম্ব)। অতএব $HGL$ বৃত্তটিই $\triangle ABC$ এর বহির্বৃত্ত।`,
          String.raw`মন্তব্য: অন্য দুইটি বাহুকে স্পর্শ করিয়ে একইভাবে আরও দুইটি বহির্বৃত্ত আঁকা যায় — মোট তিনটি।`,
        ],
        answer: "বহির্বৃত্ত অঙ্কিত হলো",
        figure: "85-c11",
      },
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (১ – ৩) ───────────────
    {
      id: 1,
      group: C85_MCQ,
      question: String.raw`কোন বৃত্তের অধিচাপে অন্তর্লিখিত কোণ —
ক) সূক্ষ্মকোণ  খ) স্থূলকোণ  গ) সমকোণ  ঘ) পূরককোণ`,
      figure: "85-p1",
      solution: {
        steps: [
          String.raw`অধিচাপে অন্তর্লিখিত কোণ $\angle ACB$ বাকি উপচাপ $AB$ এর উপর দণ্ডায়মান।`,
          String.raw`উপচাপের উপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle AOB<180^{\circ}$, আর বৃত্তস্থ কোণ তার অর্ধেক:`,
          String.raw`$$\angle ACB=\tfrac{1}{2}\angle AOB<90^{\circ}$$`,
          String.raw`সুতরাং কোণটি সূক্ষ্মকোণ [অনুসিদ্ধান্ত ৫]।`,
        ],
        answer: "ক) সূক্ষ্মকোণ",
      },
    },
    {
      id: 2,
      group: C85_MCQ,
      question: String.raw`পাশের চিত্রে $\dfrac{1}{2}\angle ECD=$ কত ডিগ্রি?
ক) $40^{\circ}$  খ) $50^{\circ}$  গ) $80^{\circ}$  ঘ) $100^{\circ}$`,
      figure: "85-p2",
      solution: {
        steps: [
          String.raw`$ABCD$ বৃত্তস্থ চতুর্ভুজের $BC$ বাহুকে $E$ পর্যন্ত বর্ধিত করায় $\angle DCE$ বহিঃস্থ কোণ। বহিঃস্থ কোণ বিপরীত অন্তঃস্থ কোণের সমান [অনুসিদ্ধান্ত ৬]:`,
          String.raw`$$\angle ECD=\angle BAD=80^{\circ}$$`,
          String.raw`$$\therefore\;\tfrac{1}{2}\angle ECD=40^{\circ}$$`,
        ],
        answer: String.raw`ক) $40^{\circ}$`,
      },
    },
    {
      id: 3,
      group: C85_MCQ,
      question: String.raw`$ABC$ সমবাহু ত্রিভুজের পরিকেন্দ্র $O$ হলে, $\angle BOC=$ কত ডিগ্রি?
ক) $30^{\circ}$  খ) $60^{\circ}$  গ) $90^{\circ}$  ঘ) $120^{\circ}$`,
      figure: "85-p3",
      solution: {
        steps: [
          String.raw`সমবাহু ত্রিভুজে $\angle BAC=60^{\circ}$। পরিবৃত্তে $\angle BAC$ বৃত্তস্থ এবং $\angle BOC$ কেন্দ্রস্থ কোণ — একই চাপ $BC$ এর উপর দণ্ডায়মান:`,
          String.raw`$$\angle BOC=2\angle BAC=2\times60^{\circ}=120^{\circ}$$`,
        ],
        answer: String.raw`ঘ) $120^{\circ}$`,
      },
    },

    // ─────────────── অঙ্কন (৪ – ৯) ───────────────
    {
      id: 4,
      group: C85_DRAW,
      question: "কোনো বৃত্তে এমন একটি স্পর্শক আঁকো যেন তা নির্দিষ্ট সরলরেখার সমান্তরাল হয়।",
      solution: {
        steps: [
          String.raw`মনে করি, $O$ কেন্দ্রবিশিষ্ট একটি বৃত্ত এবং একটি নির্দিষ্ট সরলরেখা $L$ দেওয়া আছে। বৃত্তে এমন স্পর্শক আঁকতে হবে যা $L$ এর সমান্তরাল।`,
          String.raw`অঙ্কন: ১. $O$ থেকে $L$ রেখার উপর লম্ব টানি। মনে করি, লম্বটি বৃত্তকে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`২. $A$ বিন্দুতে $OA$ এর উপর লম্ব রেখা আঁকি [সম্পাদ্য ৭]। এটিই নির্ণেয় স্পর্শক।`,
          String.raw`প্রমাণ: $A$ বিন্দুগামী ব্যাসার্ধ $OA$ এর উপর $A$ তে অঙ্কিত লম্ব বৃত্তের স্পর্শক [অনুসিদ্ধান্ত ১০]। আবার স্পর্শক ও $L$ উভয়েই $OA$ রেখার উপর লম্ব, তাই এরা পরস্পর সমান্তরাল।`,
          String.raw`মন্তব্য: লম্বটি বৃত্তকে বিপরীত প্রান্তেও ছেদ করে; সেখানেও একইভাবে আরেকটি সমান্তরাল স্পর্শক আঁকা যায় — মোট দুইটি।`,
        ],
        answer: "নির্ণেয় স্পর্শক অঙ্কিত হলো",
        figure: "85-p4",
      },
    },
    {
      id: 5,
      group: C85_DRAW,
      question: "কোনো বৃত্তে এমন একটি স্পর্শক আঁকো যেন তা নির্দিষ্ট সরলরেখার উপর লম্ব হয়।",
      solution: {
        steps: [
          String.raw`মনে করি, $O$ কেন্দ্রবিশিষ্ট একটি বৃত্ত এবং একটি নির্দিষ্ট সরলরেখা $L$ দেওয়া আছে। বৃত্তে এমন স্পর্শক আঁকতে হবে যা $L$ এর উপর লম্ব।`,
          String.raw`অঙ্কন: ১. $O$ বিন্দু দিয়ে $L$ এর সমান্তরাল একটি রেখা আঁকি; মনে করি, তা বৃত্তকে $A$ বিন্দুতে ছেদ করে।`,
          String.raw`২. $A$ বিন্দুতে ব্যাসার্ধ $OA$ এর উপর লম্ব আঁকি। এটিই নির্ণেয় স্পর্শক।`,
          String.raw`প্রমাণ: $OA$ এর উপর $A$ বিন্দুতে অঙ্কিত লম্ব বৃত্তের স্পর্শক [অনুসিদ্ধান্ত ১০]। স্পর্শকটি $OA$ এর উপর লম্ব এবং $OA\parallel L$, তাই স্পর্শকটি $L$ এর উপরও লম্ব।`,
          String.raw`মন্তব্য: সমান্তরাল রেখাটি বৃত্তকে ব্যাসের অপর প্রান্তেও ছেদ করে, সেখানে আরেকটি এমন স্পর্শক পাওয়া যায়।`,
        ],
        answer: "নির্ণেয় স্পর্শক অঙ্কিত হলো",
        figure: "85-p5",
      },
    },
    {
      id: 6,
      group: C85_DRAW,
      question: String.raw`কোনো বৃত্তে এমন দুইটি স্পর্শক আঁকো যেন এদের অন্তর্ভুক্ত কোণ $60^{\circ}$ হয়।`,
      solution: {
        steps: [
          String.raw`মনে করি, $O$ কেন্দ্রবিশিষ্ট একটি বৃত্ত দেওয়া আছে। এতে এমন দুইটি স্পর্শক আঁকতে হবে যাদের অন্তর্ভুক্ত কোণ $60^{\circ}$।`,
          String.raw`অঙ্কন: ১. যেকোনো ব্যাসার্ধ $OA$ আঁকি। $O$ বিন্দুতে $OA$ এর সাথে $120^{\circ}$ কোণ করে আরেকটি ব্যাসার্ধ $OB$ আঁকি।`,
          String.raw`২. $A$ ও $B$ বিন্দুতে যথাক্রমে $OA$ ও $OB$ এর উপর লম্ব আঁকি। মনে করি, এরা $P$ বিন্দুতে মিলিত হয়। $PA$ ও $PB$ ই নির্ণেয় স্পর্শক।`,
          String.raw`প্রমাণ: $PA\perp OA$ ও $PB\perp OB$, তাই এরা বৃত্তের স্পর্শক এবং $\angle OAP=\angle OBP=90^{\circ}$। $OAPB$ চতুর্ভুজে`,
          String.raw`$$\angle APB=360^{\circ}-\left(90^{\circ}+90^{\circ}+120^{\circ}\right)=60^{\circ}$$`,
          String.raw`(এই অবস্থায় $OP=2\times$ ব্যাসার্ধ, কারণ সমকোণী $\triangle OAP$ এ $\angle APO=30^{\circ}$।)`,
        ],
        answer: String.raw`$PA$ ও $PB$ নির্ণেয় স্পর্শক, $\angle APB=60^{\circ}$`,
        figure: "85-p6",
      },
    },
    {
      id: 7,
      group: C85_DRAW,
      question:
        "3 সে.মি., 4 সে.মি. ও 4.5 সে.মি. বাহুবিশিষ্ট একটি ত্রিভুজের পরিবৃত্ত আঁক এবং এই বৃত্তের ব্যাসার্ধ নির্ণয় করো।",
      solution: {
        steps: [
          String.raw`অঙ্কন: ১. $BC=4.5$ সে.মি. রেখাংশ নিই। $B$ কে কেন্দ্র করে $3$ সে.মি. ও $C$ কে কেন্দ্র করে $4$ সে.মি. ব্যাসার্ধ নিয়ে একই পাশে দুইটি বৃত্তচাপ আঁকি; এরা $A$ বিন্দুতে ছেদ করে। $A,\,B$ ও $A,\,C$ যোগ করলে $\triangle ABC$ পাওয়া যায়।`,
          String.raw`২. $AB$ ও $BC$ বাহুর লম্বসমদ্বিখণ্ডক আঁকি; মনে করি, এরা $O$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $O$ কে কেন্দ্র করে $OA$ ব্যাসার্ধ নিয়ে বৃত্ত আঁকি। এটিই নির্ণেয় পরিবৃত্ত [সম্পাদ্য ৯ অনুসারে $OA=OB=OC$]।`,
          String.raw`ব্যাসার্ধ: স্কেল দিয়ে $OA$ মাপলে প্রায় $2.3$ সে.মি. পাওয়া যায়। হিসাব করে যাচাই: অর্ধপরিসীমা $s=\dfrac{3+4+4.5}{2}=5.75$,`,
          String.raw`$$\text{ক্ষেত্রফল}=\sqrt{5.75\times2.75\times1.75\times1.25}\approx5.881\text{ বর্গ সে.মি.}$$`,
          String.raw`$$R=\frac{abc}{4\times\text{ক্ষেত্রফল}}=\frac{3\times4\times4.5}{4\times5.881}\approx2.30\text{ সে.মি.}$$`,
        ],
        answer: "পরিবৃত্তের ব্যাসার্ধ প্রায় 2.3 সে.মি.",
        figure: "85-p7",
      },
    },
    {
      id: 8,
      group: C85_DRAW,
      question: String.raw`5 সে.মি. বাহুবিশিষ্ট একটি সমবাহু ত্রিভুজ $ABC$ এর $AC$ বাহুকে স্পর্শ করিয়ে একটি বহির্বৃত্ত আঁকো।`,
      solution: {
        steps: [
          String.raw`অঙ্কন: ১. $5$ সে.মি. বাহুবিশিষ্ট সমবাহু $\triangle ABC$ আঁকি।`,
          String.raw`২. $BA$ কে $A$ এর পরে এবং $BC$ কে $C$ এর পরে বর্ধিত করি। $A$ ও $C$ বিন্দুর বহিঃস্থ কোণ দুইটির সমদ্বিখণ্ডক আঁকি; মনে করি, এরা $O$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $O$ থেকে $AC$ এর উপর $OD$ লম্ব আঁকি। $O$ কে কেন্দ্র করে $OD$ ব্যাসার্ধ নিয়ে বৃত্ত আঁকি। এটিই নির্ণেয় বহির্বৃত্ত।`,
          String.raw`প্রমাণ: $O$ থেকে বর্ধিত $BC$ ও বর্ধিত $BA$ এর উপর $OG$ ও $OL$ লম্ব টানি। $O$ বিন্দু $A$ এর বহিঃস্থ কোণের সমদ্বিখণ্ডকের উপর, তাই $OD=OL$; $C$ এর বহিঃস্থ কোণের সমদ্বিখণ্ডকের উপর, তাই $OD=OG$। $\therefore\;OD=OG=OL$ এবং ব্যাসার্ধগুলোর প্রান্তে রেখাগুলো লম্ব — বৃত্তটি $AC$ কে $D$ তে এবং বর্ধিতাংশ দুইটিকে $G$ ও $L$ এ স্পর্শ করে [সম্পাদ্য ১১]।`,
          String.raw`যাচাই: ত্রিভুজের ক্ষেত্রফল $\dfrac{\sqrt3}{4}\times5^{2}\approx10.83$, $s=7.5$; তাই এ বহির্বৃত্তের ব্যাসার্ধ $=\dfrac{10.83}{7.5-5}\approx4.33$ সে.মি.।`,
        ],
        answer: "বহির্বৃত্ত অঙ্কিত হলো (ব্যাসার্ধ প্রায় 4.33 সে.মি.)",
        figure: "85-p8",
      },
    },
    {
      id: 9,
      group: C85_DRAW,
      question: "একটি বর্গের অন্তর্বৃত্ত ও পরিবৃত্ত আঁকো।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ একটি বর্গ।`,
          String.raw`অঙ্কন: ১. কর্ণ $AC$ ও $BD$ আঁকি; মনে করি, এরা $O$ বিন্দুতে ছেদ করে।`,
          String.raw`২. অন্তর্বৃত্ত: $O$ থেকে $AB$ এর উপর $OP$ লম্ব আঁকি। $O$ কে কেন্দ্র করে $OP$ ব্যাসার্ধ নিয়ে বৃত্ত আঁকি।`,
          String.raw`৩. পরিবৃত্ত: $O$ কে কেন্দ্র করে $OA$ ব্যাসার্ধ নিয়ে বৃত্ত আঁকি।`,
          String.raw`প্রমাণ: বর্গের কর্ণদ্বয় সমান ও পরস্পরকে সমদ্বিখণ্ডিত করে, তাই $OA=OB=OC=OD$ — দ্বিতীয় বৃত্তটি চারটি শীর্ষবিন্দু দিয়ে যায়, এটি পরিবৃত্ত।`,
          String.raw`আবার বর্গের কর্ণ কোণগুলোকে সমদ্বিখণ্ডিত করে, তাই $O$ বিন্দু প্রতিটি কোণের সমদ্বিখণ্ডকের উপর এবং চারটি বাহু থেকে সমদূরবর্তী। $O$ থেকে বাহুগুলোর উপর লম্বগুলো সমান ($=OP$) এবং লম্বের প্রান্তে বাহুগুলো স্পর্শক — প্রথম বৃত্তটি অন্তর্বৃত্ত।`,
          String.raw`বাহু $a$ হলে অন্তর্বৃত্তের ব্যাসার্ধ $\dfrac{a}{2}$ এবং পরিবৃত্তের ব্যাসার্ধ $\dfrac{a}{\sqrt2}$।`,
        ],
        answer: "অন্তর্বৃত্ত ও পরিবৃত্ত অঙ্কিত হলো",
        figure: "85-p9",
      },
    },

    // ─────────────── প্রমাণ (১০ – ১১) ───────────────
    {
      id: 10,
      group: C85_PROVE,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট কোন বৃত্তের $AB$ ও $CD$ জ্যা দুইটি বৃত্তের অভ্যন্তরস্থ $E$ বিন্দুতে ছেদ করলে প্রমাণ করো যে, $\angle AEC=\dfrac{1}{2}\left(\angle BOD+\angle AOC\right)$`,
      figure: "85-p10",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $O$ কেন্দ্রবিশিষ্ট বৃত্তের $AB$ ও $CD$ জ্যা অভ্যন্তরস্থ $E$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $\angle AEC=\tfrac{1}{2}\left(\angle BOD+\angle AOC\right)$।`,
          String.raw`অঙ্কন: $A,\,D$ যোগ করি। $O,\,A$; $O,\,B$; $O,\,C$ ও $O,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $C,\,E,\,D$ সমরেখ, তাই $\angle AEC$ হলো $\triangle AED$ এর বহিঃস্থ কোণ:`,
          String.raw`$$\angle AEC=\angle EAD+\angle EDA=\angle BAD+\angle CDA$$`,
          String.raw`ধাপ ২. $BD$ চাপের ওপর দণ্ডায়মান বৃত্তস্থ $\angle BAD$ ও কেন্দ্রস্থ $\angle BOD$:`,
          String.raw`$$\angle BAD=\tfrac{1}{2}\angle BOD\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
          String.raw`ধাপ ৩. $AC$ চাপের ওপর দণ্ডায়মান বৃত্তস্থ $\angle CDA$ ও কেন্দ্রস্থ $\angle AOC$:`,
          String.raw`$$\angle CDA=\tfrac{1}{2}\angle AOC$$`,
          String.raw`ধাপ ৪. ধাপ ১, ২ ও ৩ থেকে`,
          String.raw`$$\angle AEC=\tfrac{1}{2}\left(\angle BOD+\angle AOC\right)$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 11,
      group: C85_PROVE,
      question: String.raw`দুইটি সমান ব্যাসবিশিষ্ট বৃত্তের সাধারণ জ্যা $AB$। $B$ বিন্দু দিয়ে অঙ্কিত কোন সরলরেখা যদি বৃত্ত দুইটির সাথে $P$ ও $Q$ বিন্দুতে মিলিত হয়, তবে প্রমাণ করো যে, $\triangle PAQ$ সমদ্বিবাহু।`,
      figure: "85-p11",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $O_1$ ও $O_2$ কেন্দ্রবিশিষ্ট দুইটি সমান বৃত্তের সাধারণ জ্যা $AB$। $B$ দিয়ে অঙ্কিত রেখা বৃত্ত দুইটিকে $P$ ও $Q$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $AP=AQ$।`,
          String.raw`অঙ্কন: $A,\,P$ ও $A,\,Q$ যোগ করি। $O_1A,\,O_1B,\,O_2A,\,O_2B$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle AO_1B$ ও $\triangle AO_2B$ এ`,
          String.raw`$$O_1A=O_2A,\qquad O_1B=O_2B\;\left[\,\text{সমান বৃত্তের ব্যাসার্ধ}\,\right],\qquad AB\text{ সাধারণ}$$`,
          String.raw`$$\therefore\;\triangle AO_1B\cong\triangle AO_2B\;\Rightarrow\;\angle AO_1B=\angle AO_2B$$`,
          String.raw`ধাপ ২. প্রথম বৃত্তে বৃত্তস্থ $\angle APB$ ও কেন্দ্রস্থ $\angle AO_1B$ একই চাপ $AB$ এর ওপর, দ্বিতীয় বৃত্তে $\angle AQB$ ও $\angle AO_2B$ তেমনই। তাই`,
          String.raw`$$\angle APB=\tfrac{1}{2}\angle AO_1B=\tfrac{1}{2}\angle AO_2B=\angle AQB$$`,
          String.raw`ধাপ ৩. অর্থাৎ $\triangle PAQ$ এ $\angle APQ=\angle AQP$, সুতরাং এদের বিপরীত বাহু সমান:`,
          String.raw`$$AQ=AP$$`,
          String.raw`$$\therefore\;\triangle PAQ\text{ সমদ্বিবাহু।}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },

    // ─────────────── সৃজনশীল (১২ – ১৩) ───────────────
    {
      id: 12,
      group: C85_CQ,
      question: String.raw`চিত্রে $YM$ ও $ZM$ যথাক্রমে $\angle Y$ ও $\angle Z$ এর অন্তর্দ্বিখণ্ডক এবং $YN$ ও $ZN$ যথাক্রমে $\angle Y$ ও $\angle Z$ এর বহির্দ্বিখণ্ডক।`,
      figure: "85-p12",
      parts: [
        {
          label: "ক",
          question: String.raw`দেখাও যে, $\angle MYZ+\angle NYZ=90^{\circ}$`,
          solution: {
            steps: [
              String.raw`$XY$ কে $P$ পর্যন্ত বর্ধিত করায় $\angle ZYP$ হলো $Y$ বিন্দুর বহিঃস্থ কোণ এবং`,
              String.raw`$$\angle XYZ+\angle ZYP=180^{\circ}$$`,
              String.raw`$YM$ ও $YN$ এদের সমদ্বিখণ্ডক, তাই`,
              String.raw`$$\angle MYZ+\angle NYZ=\tfrac{1}{2}\angle XYZ+\tfrac{1}{2}\angle ZYP=\tfrac{1}{2}\times180^{\circ}=90^{\circ}$$`,
            ],
            answer: "দেখানো হলো",
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $\angle YNZ=90^{\circ}-\dfrac{1}{2}\angle X$`,
          solution: {
            steps: [
              String.raw`$\angle NYZ=\tfrac{1}{2}\angle ZYP=\tfrac{1}{2}\left(180^{\circ}-\angle Y\right)=90^{\circ}-\tfrac{1}{2}\angle Y$`,
              String.raw`একইভাবে $\angle NZY=90^{\circ}-\tfrac{1}{2}\angle Z$`,
              String.raw`$\triangle YNZ$ এ`,
              String.raw`$$\angle YNZ=180^{\circ}-\left(\angle NYZ+\angle NZY\right)=180^{\circ}-\left(180^{\circ}-\tfrac{1}{2}\angle Y-\tfrac{1}{2}\angle Z\right)$$`,
              String.raw`$$=\tfrac{1}{2}\left(\angle Y+\angle Z\right)=\tfrac{1}{2}\left(180^{\circ}-\angle X\right)$$`,
              String.raw`$$\therefore\;\angle YNZ=90^{\circ}-\tfrac{1}{2}\angle X$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো যে, $Y,\,M,\,Z$ ও $N$ বিন্দু চারটি সমবৃত্ত।`,
          solution: {
            steps: [
              String.raw`(ক) অনুসারে $Y$ বিন্দুতে অন্তর্দ্বিখণ্ডক ও বহির্দ্বিখণ্ডক পরস্পর লম্ব:`,
              String.raw`$$\angle MYN=\angle MYZ+\angle ZYN=90^{\circ}$$`,
              String.raw`একইভাবে $Z$ বিন্দুতে $\angle MZN=90^{\circ}$।`,
              String.raw`$YMZN$ চতুর্ভুজে বিপরীত কোণ দুইটির সমষ্টি`,
              String.raw`$$\angle MYN+\angle MZN=90^{\circ}+90^{\circ}=180^{\circ}$$`,
              String.raw`বিপরীত কোণ সম্পূরক, তাই $Y,\,M,\,Z,\,N$ সমবৃত্ত [উপপাদ্য ২৪]। (বৃত্তটির ব্যাস $MN$।)`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },
    {
      id: 13,
      group: C85_CQ,
      question:
        "একটি ত্রিভুজের তিনটি বাহুর দৈর্ঘ্য যথাক্রমে 4 সে.মি., 5 সে.মি. ও 6 সে.মি.। উপরের তথ্য অনুযায়ী নিম্নের প্রশ্নগুলোর উত্তর দাও:",
      parts: [
        {
          label: "ক",
          question: "ত্রিভুজটি অঙ্কন করো।",
          solution: {
            steps: [
              String.raw`$BC=6$ সে.মি. রেখাংশ নিই। $B$ কে কেন্দ্র করে $4$ সে.মি. এবং $C$ কে কেন্দ্র করে $5$ সে.মি. ব্যাসার্ধ নিয়ে $BC$ এর একই পাশে দুইটি বৃত্তচাপ আঁকি, যারা $A$ বিন্দুতে ছেদ করে।`,
              String.raw`$A,\,B$ ও $A,\,C$ যোগ করলে $AB=4$, $AC=5$ ও $BC=6$ সে.মি. বাহুবিশিষ্ট $\triangle ABC$ পাওয়া যায়।`,
              String.raw`$4+5>6$ বলে ত্রিভুজ আঁকা সম্ভব।`,
            ],
            answer: String.raw`$\triangle ABC$ অঙ্কিত হলো`,
          },
        },
        {
          label: "খ",
          question: "ত্রিভুজটির পরিবৃত্ত অঙ্কন করো।",
          solution: {
            steps: [
              String.raw`অঙ্কন: $AB$ ও $BC$ বাহুর লম্বসমদ্বিখণ্ডক আঁকি; এরা $O$ বিন্দুতে ছেদ করে। $O$ কে কেন্দ্র করে $OA$ ব্যাসার্ধ নিয়ে বৃত্ত আঁকি — এটিই পরিবৃত্ত।`,
              String.raw`প্রমাণ: $O$ বিন্দু $AB$ এর লম্বসমদ্বিখণ্ডকের উপর বলে $OA=OB$, $BC$ এর লম্বসমদ্বিখণ্ডকের উপর বলে $OB=OC$। তাই $OA=OB=OC$ এবং বৃত্তটি তিন শীর্ষবিন্দু দিয়ে যায়।`,
              String.raw`যাচাই: $s=7.5$, ক্ষেত্রফল $=\sqrt{7.5\times3.5\times2.5\times1.5}\approx9.92$; $R=\dfrac{4\times5\times6}{4\times9.92}\approx3.02$ সে.মি.।`,
            ],
            answer: "পরিবৃত্ত অঙ্কিত হলো (ব্যাসার্ধ প্রায় 3.02 সে.মি.)",
          },
        },
        {
          label: "গ",
          question:
            "ত্রিভুজের পরিবৃত্তের বাইরে যেকোনো একটি নির্দিষ্ট বিন্দু থেকে বৃত্তের দুইটি স্পর্শ অঙ্কন করে দেখাও যে স্পর্শকদ্বয়ের দূরত্ব সমান।",
          solution: {
            steps: [
              String.raw`অঙ্কন: পরিবৃত্তের বাইরে একটি বিন্দু $P$ নিই। $P,\,O$ যোগ করে $PO$ এর মধ্যবিন্দু নির্ণয় করি এবং তাকে কেন্দ্র করে $PO$ কে ব্যাস ধরে বৃত্ত আঁকি। এটি পরিবৃত্তকে $D$ ও $E$ বিন্দুতে ছেদ করে। $PD$ ও $PE$ নির্ণেয় স্পর্শক [সম্পাদ্য ৮]।`,
              String.raw`প্রমাণ: $O,\,D$ ও $O,\,E$ যোগ করি। $\angle PDO$ ও $\angle PEO$ অর্ধবৃত্তস্থ কোণ, তাই প্রত্যেকে $90^{\circ}$।`,
              String.raw`সমকোণী $\triangle PDO$ ও $\triangle PEO$ এ অতিভুজ $PO$ সাধারণ এবং $OD=OE$ (পরিবৃত্তের ব্যাসার্ধ)।`,
              String.raw`$$\therefore\;\triangle PDO\cong\triangle PEO\;\Rightarrow\;PD=PE$$`,
              String.raw`চিত্রের মাপে ($OP\approx8.68$, $R\approx3.02$) প্রতিটি স্পর্শকের দৈর্ঘ্য $\sqrt{OP^{2}-R^{2}}\approx8.14$ সে.মি. — দুইটিই সমান।`,
            ],
            answer: String.raw`$PD=PE$ (দেখানো হলো)`,
            figure: "85-p13",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (১৪ – ১৭) ───────────────
    {
      id: 14,
      group: C85_MODEL_MCQ,
      question: String.raw`$O$ কেন্দ্রবিশিষ্ট বৃত্তে $x$ এর মান কত? (চিত্রে $\angle BOD=108^{\circ}$)
ক) $126^{\circ}$  খ) $108^{\circ}$  গ) $72^{\circ}$  ঘ) $54^{\circ}$`,
      figure: "85-m14",
      solution: {
        steps: [
          String.raw`$\angle BOD$ ও $\angle BAD$ একই চাপ $BCD$ এর উপর দণ্ডায়মান, তাই`,
          String.raw`$$\angle BAD=\tfrac{1}{2}\times108^{\circ}=54^{\circ}$$`,
          String.raw`$ABCD$ বৃত্তস্থ চতুর্ভুজ, তাই বিপরীত কোণ সম্পূরক:`,
          String.raw`$$x=\angle BCD=180^{\circ}-54^{\circ}=126^{\circ}$$`,
        ],
        answer: String.raw`ক) $126^{\circ}$`,
      },
    },
    {
      id: 15,
      group: C85_MODEL_MCQ,
      question: String.raw`দুইটি বৃত্ত পরস্পরকে বহিঃস্পর্শ করে। এদের একটির ব্যাস $8$ সে.মি. এবং অপরটির ব্যাসার্ধ $4$ সে.মি. হলে, এদের কেন্দ্রদ্বয়ের মধ্যবর্তী দূরত্ব কত সে.মি. হবে?
ক) $0$  খ) $4$  গ) $8$  ঘ) $12$`,
      figure: "85-m15",
      solution: {
        steps: [
          String.raw`প্রথম বৃত্তের ব্যাসার্ধ $=\dfrac{8}{2}=4$ সে.মি., দ্বিতীয়টির $4$ সে.মি.।`,
          String.raw`বহিঃস্পর্শে কেন্দ্রদ্বয়ের দূরত্ব ব্যাসার্ধদ্বয়ের সমষ্টি [অনুসিদ্ধান্ত ১১]:`,
          String.raw`$$4+4=8\text{ সে.মি.}$$`,
        ],
        answer: String.raw`গ) $8$`,
      },
    },
    {
      id: 16,
      group: C85_MODEL_MCQ,
      question: String.raw`$AB$ ও $AC$ রেখাদ্বয় $BCD$ বৃত্তের স্পর্শক। বৃত্তের কেন্দ্র $O$ এবং $\angle BAC=60^{\circ}$। $\angle BOC$ এর মান কত?
ক) $300^{\circ}$  খ) $270^{\circ}$  গ) $120^{\circ}$  ঘ) $90^{\circ}$`,
      figure: "85-m16",
      solution: {
        steps: [
          String.raw`স্পর্শক স্পর্শবিন্দুগামী ব্যাসার্ধের উপর লম্ব, তাই $\angle OBA=\angle OCA=90^{\circ}$।`,
          String.raw`$ABOC$ চতুর্ভুজের চার কোণের সমষ্টি $360^{\circ}$:`,
          String.raw`$$\angle BOC=360^{\circ}-\left(90^{\circ}+90^{\circ}+60^{\circ}\right)=120^{\circ}$$`,
        ],
        answer: String.raw`গ) $120^{\circ}$`,
      },
    },
    {
      id: 17,
      group: C85_MODEL_MCQ,
      question: String.raw`(উপরের তথ্য অনুসারে) $D$, $BDC$ চাপের মধ্যবিন্দু হলে—
($i$) $\angle BDC=\angle BAC$
($ii$) $\angle BAC=\dfrac{1}{2}\angle BOC$
($iii$) $\angle BOC=\angle DBC+\angle BCD$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      figure: "85-m16",
      solution: {
        steps: [
          String.raw`প্রশ্ন ১৬ থেকে $\angle BOC=120^{\circ}$ এবং $\angle BAC=60^{\circ}$।`,
          String.raw`($i$) $D$ অধিচাপের উপর, তাই $\angle BDC$ উপচাপ $BC$ এর ওপর দণ্ডায়মান: $\angle BDC=\tfrac{1}{2}\angle BOC=60^{\circ}=\angle BAC$। সঠিক।`,
          String.raw`($ii$) $\tfrac{1}{2}\angle BOC=60^{\circ}=\angle BAC$। সঠিক।`,
          String.raw`($iii$) $\triangle BDC$ এ $\angle DBC+\angle BCD=180^{\circ}-60^{\circ}=120^{\circ}=\angle BOC$। সঠিক।`,
          "তিনটি উক্তিই সঠিক।",
        ],
        answer: String.raw`ঘ) $i,\,ii$ ও $iii$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল (১৮) ───────────────
    {
      id: 18,
      group: C85_MODEL_CQ,
      question: String.raw`চিত্রে, $O$ কেন্দ্রবিশিষ্ট $ABC$ বৃত্তের দুটি সমান জ্যা $AB$ ও $AC$। $OD\perp AB$।`,
      figure: "85-m18",
      parts: [
        {
          label: "ক",
          question: String.raw`বৃত্তে অন্তর্লিখিত চতুর্ভুজ $PQRS$-এর $\angle PQR=110^{\circ}$ হলে, $\angle PSR$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$\angle PQR$ ও $\angle PSR$ বৃত্তস্থ চতুর্ভুজ $PQRS$ এর বিপরীত কোণ, তাই এরা সম্পূরক [উপপাদ্য ২৩]:`,
              String.raw`$$\angle PSR=180^{\circ}-110^{\circ}=70^{\circ}$$`,
            ],
            answer: String.raw`$70^{\circ}$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $AB$ জ্যা-এর মধ্যবিন্দু $D$।`,
          solution: {
            steps: [
              String.raw`অঙ্কন: $O,\,A$ ও $O,\,B$ যোগ করি।`,
              String.raw`প্রমাণ: $OD\perp AB$, তাই $\angle ODA=\angle ODB=$ এক সমকোণ।`,
              String.raw`সমকোণী $\triangle ODA$ ও $\triangle ODB$ এ`,
              String.raw`$$\text{অতিভুজ }OA=\text{অতিভুজ }OB\;\left[\,\text{একই বৃত্তের ব্যাসার্ধ}\,\right],\qquad OD\text{ সাধারণ বাহু}$$`,
              String.raw`$$\therefore\;\triangle ODA\cong\triangle ODB\qquad\left[\,\text{অতিভুজ-বাহু সর্বসমতা}\,\right]$$`,
              String.raw`$$\therefore\;AD=BD$$`,
              String.raw`অর্থাৎ $D$ বিন্দু $AB$ জ্যা এর মধ্যবিন্দু।`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: "প্রমাণ করো যে, উদ্দীপকে উল্লিখিত জ্যাদ্বয় কেন্দ্র থেকে সমদূরবর্তী।",
          solution: {
            steps: [
              String.raw`অঙ্কন: $O$ থেকে $AC$ এর উপর $OE$ লম্ব আঁকি। $O,\,A$ যোগ করি।`,
              String.raw`প্রমাণ: ধাপ ১. কেন্দ্র থেকে জ্যা এর উপর লম্ব জ্যাকে সমদ্বিখণ্ডিত করে [(খ) অংশ], তাই`,
              String.raw`$$AD=\tfrac{1}{2}AB,\qquad AE=\tfrac{1}{2}AC$$`,
              String.raw`$AB=AC$, সুতরাং $AD=AE$।`,
              String.raw`ধাপ ২. সমকোণী $\triangle OAD$ ও $\triangle OAE$ এ`,
              String.raw`$$\text{অতিভুজ }OA\text{ সাধারণ},\qquad AD=AE$$`,
              String.raw`$$\therefore\;\triangle OAD\cong\triangle OAE\;\Rightarrow\;OD=OE$$`,
              String.raw`ধাপ ৩. $OD$ ও $OE$ কেন্দ্র থেকে যথাক্রমে $AB$ ও $AC$ এর দূরত্ব। সুতরাং জ্যাদ্বয় কেন্দ্র থেকে সমদূরবর্তী।`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (১৯) ───────────────
    {
      id: 19,
      group: C85_MODEL_SA,
      question: "নিচের প্রশ্নগুলোর উত্তর দাও।",
      parts: [
        {
          label: "ক",
          question: String.raw`$O$ কেন্দ্রবিশিষ্ট $BCD$ বৃত্তের জ্যা $BC=8$ সে.মি. ও কেন্দ্র থেকে $BC$ জ্যা-এর উপর অঙ্কিত লম্ব $OP=3$ সে.মি. হলে, $OP$-এর দৈর্ঘ্য নির্ণয় করো।`,
          figure: "85-m19a",
          solution: {
            steps: [
              String.raw`$OP$ দেওয়াই আছে, তাই বইয়ের প্রশ্নে আসলে বৃত্তের ব্যাসার্ধ ($OC$) চাওয়া হয়েছে বলে ধরা হলো।`,
              String.raw`$OP\perp BC$, তাই $P$ বিন্দু $BC$ এর মধ্যবিন্দু: $PC=\dfrac{8}{2}=4$ সে.মি.।`,
              String.raw`সমকোণী $\triangle OPC$ এ`,
              String.raw`$$OC^{2}=OP^{2}+PC^{2}=3^{2}+4^{2}=25$$`,
              String.raw`$$\therefore\;OC=5\text{ সে.মি.}$$`,
            ],
            answer: "ব্যাসার্ধ 5 সে.মি.",
          },
        },
        {
          label: "খ",
          question: String.raw`$O$ কেন্দ্রবিশিষ্ট $ABCD$ বৃত্তের $AB$ বাহুকে $D$ পর্যন্ত বর্ধিত করলে দেখাও যে, $\angle DBC=\angle ADC$।`,
          figure: "85-m19b",
          solution: {
            steps: [
              String.raw`বইয়ে বর্ধিত প্রান্তের নামও $D$, যা চতুর্ভুজের শীর্ষ $D$ এর সাথে মিলে যায়; তাই বর্ধিত প্রান্তকে $E$ ধরা হলো। দেখাতে হবে $\angle EBC=\angle ADC$।`,
              String.raw`$ABCD$ বৃত্তস্থ চতুর্ভুজ, তাই`,
              String.raw`$$\angle ABC+\angle ADC=180^{\circ}\qquad\left[\,\text{উপপাদ্য }২৩\,\right]$$`,
              String.raw`আবার $A,\,B,\,E$ সমরেখ, তাই`,
              String.raw`$$\angle ABC+\angle EBC=180^{\circ}$$`,
              String.raw`$$\therefore\;\angle EBC=\angle ADC$$`,
            ],
            answer: "দেখানো হলো",
          },
        },
        {
          label: "গ",
          question: String.raw`পেন্সিল কম্পাসের সাহায্যে 3 সে.মি. ব্যাসার্ধের একটি বৃত্তচাপ $PQR$-এর কেন্দ্র নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`অঙ্কন: ১. কম্পাসে $3$ সে.মি. ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি এবং এর উপর তিনটি বিন্দু $P,\,Q,\,R$ নিই।`,
              String.raw`২. $P,\,Q$ ও $Q,\,R$ যোগ করি। $PQ$ ও $QR$ জ্যা এর লম্বসমদ্বিখণ্ডক আঁকি; মনে করি, এরা $O$ বিন্দুতে ছেদ করে।`,
              String.raw`৩. $O$ ই চাপটির কেন্দ্র [সম্পাদ্য ৬]। যাচাইয়ের জন্য $OR$ মাপলে $3$ সে.মি. পাওয়া যায়।`,
              String.raw`কারণ: জ্যা এর লম্বসমদ্বিখণ্ডক কেন্দ্রগামী, তাই দুইটি লম্বসমদ্বিখণ্ডকের একমাত্র সাধারণ বিন্দুই কেন্দ্র।`,
            ],
            answer: String.raw`$O$ নির্ণেয় কেন্দ্র`,
            figure: "85-m19c",
          },
        },
        {
          label: "ঘ",
          question: String.raw`$O$ কেন্দ্রবিশিষ্ট $ABCD$ বৃত্তের $AB$ বৃত্তচাপের ওপর দণ্ডায়মান বৃত্তস্থ কোণ $\angle ACB$ ও $\angle ADB$ হলে, দেখাও যে, $\angle ACB=\angle ADB$।`,
          figure: "85-m19d",
          solution: {
            steps: [
              String.raw`অঙ্কন: $O,\,A$ ও $O,\,B$ যোগ করি।`,
              String.raw`$AB$ চাপের ওপর দণ্ডায়মান কেন্দ্রস্থ কোণ $\angle AOB$। তাই`,
              String.raw`$$\angle AOB=2\angle ACB\quad\text{এবং}\quad\angle AOB=2\angle ADB\qquad\left[\,\text{উপপাদ্য }২০\,\right]$$`,
              String.raw`$$\therefore\;2\angle ACB=2\angle ADB\;\Rightarrow\;\angle ACB=\angle ADB$$`,
            ],
            answer: "দেখানো হলো",
          },
        },
      ],
    },
  ],
};
