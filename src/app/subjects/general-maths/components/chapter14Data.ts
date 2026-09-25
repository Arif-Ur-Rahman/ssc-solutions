// components/chapter14Data.ts
//
// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ১৪ · অনুপাত, সদৃশতা ও প্রতিসমতা
// ─────────────────────────────────────────────────────────────────────────────
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// অনুশীলনী ১৪.১ (book page ২৭১), ১৪.২ (book pages ২৭৭-২৭৮) and ১৪.৩ (book
// pages ২৮২-২৮৩), the last followed by the chapter's নমুনা প্রশ্ন (book page
// ২৮৪), numbered on from the exercise.
//
// অধ্যায় ৮ এর মতো এখানেও বইয়ের উদাহরণ প্রায় নেই — আছে উপপাদ্য ২৮–৩৫ ও
// সম্পাদ্য ১২, আর প্রথম দুই অনুশীলনীর প্রতিটি প্রমাণ এদের উপর দাঁড়িয়ে। তাই
// সেগুলো বইয়ের প্রমাণসহ অনুশীলনীর আগে রাখা হয়েছে। প্রতিসমতার অনুশীলনীতে
// উত্তরই একটি চিত্র — প্রতিসাম্য রেখা টানা, অর্ধেক চিত্র পূর্ণ করা — তাই সেসব
// চিত্র সমাধানের ভেতরে রাখা হয়েছে। সব চিত্র `figures/scenes14.ts` এ।

import type { Exercise } from "./chaptersData";

const C141_PROVE = "প্রমাণ (১ – ৭)";
const C142_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ২)";
const C142_PROVE = "প্রমাণ (৩ – ১১)";
const C142_CQ = "সৃজনশীল (১২)";
const C143_MCQ = "বহুনির্বাচনি প্রশ্ন (১ – ৪)";
const C143_DRAW = "প্রতিসাম্য রেখা ও ঘূর্ণন — চিত্রে (৫ – ১১)";
const C143_TABLE = "সারণি ও যুক্তি (১২ – ১৪)";
const C143_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৫ – ১৮)";
const C143_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল (১৯)";
const C143_MODEL_SA = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২০)";

// ─────────────── অনুশীলনী ১৪.১ ───────────────

export const exercise141: Exercise = {
  id: "14.1",
  bnId: "অনুশীলনী ১৪.১",
  title: "অনুপাত ও জ্যামিতিক সমানুপাত",
  bookPages: "২৬৬ – ২৭১",
  formulas: [
    {
      title: "অনুপাত ও সমানুপাতের ধর্ম",
      formulas: [
        {
          statement: String.raw`$a:b=x:y,\;c:d=x:y\;\Rightarrow\;a:b=c:d$`,
          note: String.raw`একই অনুপাতের সমান দুইটি অনুপাত পরস্পর সমান। আবার $a:b=b:a$ হলে $a=b$।`,
        },
        {
          statement: String.raw`$a:b=x:y\;\Rightarrow\;b:a=y:x$`,
          note: "ব্যস্তকরণ।",
        },
        {
          statement: String.raw`$a:b=x:y\;\Rightarrow\;a:x=b:y$`,
          note: "একান্তরকরণ।",
        },
        {
          statement: String.raw`$a:b=c:d\;\Rightarrow\;ad=bc$`,
          note: "আড়গুণন।",
        },
        {
          statement: String.raw`$a:b=x:y\;\Rightarrow\;(a+b):b=(x+y):y,\;\;(a-b):b=(x-y):y$`,
          note: "যোজন ও বিয়োজন।",
        },
        {
          statement: String.raw`$\dfrac{a}{b}=\dfrac{c}{d}\;\Rightarrow\;\dfrac{a+b}{a-b}=\dfrac{c+d}{c-d}$`,
          note: "যোজন-বিয়োজন।",
        },
      ],
    },
    {
      title: "জ্যামিতিক সমানুপাত",
      formulas: [
        {
          statement: String.raw`উচ্চতা সমান হলে $\;\triangle ABC:\triangle DEF=BC:EF$`,
          note: String.raw`দুইটি ত্রিভুজক্ষেত্রের উচ্চতা সমান হলে এদের ক্ষেত্রফল ভূমির সমানুপাতিক, কারণ $\tfrac12 ah:\tfrac12 dh=a:d$।`,
        },
        {
          statement: String.raw`ভূমি সমান হলে $\;\triangle ABC:\triangle DEF=AP:DQ$`,
          note: String.raw`দুইটি ত্রিভুজক্ষেত্রের ভূমি সমান হলে এদের ক্ষেত্রফল উচ্চতার সমানুপাতিক, কারণ $\tfrac12 bh:\tfrac12 bk=h:k$।`,
        },
      ],
    },
    {
      title: "অনুপাত সম্পর্কিত উপপাদ্য",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ২৮: $\;DE\parallel BC\Rightarrow AD:DB=AE:EC$`,
          note: "ত্রিভুজের যেকোনো বাহুর সমান্তরাল সরলরেখা অপর বাহুদ্বয়কে বা এদের বর্ধিতাংশদ্বয়কে সমান অনুপাতে বিভক্ত করে।",
        },
        {
          statement: String.raw`অনুসিদ্ধান্ত ১: $\;\dfrac{AB}{AD}=\dfrac{AC}{AE},\;\;\dfrac{AB}{BD}=\dfrac{AC}{CE}$`,
          note: String.raw`$BC$ এর সমান্তরাল রেখা $AB$ ও $AC$ কে $D$ ও $E$ বিন্দুতে ছেদ করলে।`,
        },
        {
          statement: "অনুসিদ্ধান্ত ২",
          note: "ত্রিভুজের কোনো বাহুর মধ্যবিন্দু দিয়ে অঙ্কিত অপর এক বাহুর সমান্তরাল রেখা তৃতীয় বাহুকে সমদ্বিখণ্ডিত করে।",
        },
        {
          statement: String.raw`উপপাদ্য ২৯: $\;AD:DB=AE:EC\Rightarrow DE\parallel BC$`,
          note: "কোনো সরলরেখা ত্রিভুজের দুই বাহুকে বা এদের বর্ধিতাংশদ্বয়কে সমান অনুপাতে বিভক্ত করলে রেখাটি তৃতীয় বাহুর সমান্তরাল। (উপপাদ্য ২৮ এর বিপরীত)",
        },
        {
          statement: String.raw`উপপাদ্য ৩০: $\;\angle BAD=\angle CAD\Rightarrow BD:DC=BA:AC$`,
          note: "ত্রিভুজের যেকোনো কোণের অন্তর্সমদ্বিখণ্ডক বিপরীত বাহুকে ঐ কোণ সংলগ্ন বাহুদ্বয়ের অনুপাতে অন্তর্বিভক্ত করে।",
        },
        {
          statement: String.raw`উপপাদ্য ৩১: $\;BD:DC=BA:AC\Rightarrow\angle BAD=\angle CAD$`,
          note: "ত্রিভুজের কোনো বাহু অপর দুই বাহুর অনুপাতে অন্তর্বিভক্ত হলে, বিভাগ বিন্দু থেকে বিপরীত শীর্ষ পর্যন্ত রেখাংশ ঐ শীর্ষকোণের সমদ্বিখণ্ডক। (উপপাদ্য ৩০ এর বিপরীত)",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ২৮ — book page ২৬৮.
    {
      id: 28,
      label: "উপপাদ্য",
      question:
        "ত্রিভুজের যেকোনো বাহুর সমান্তরাল সরলরেখা ঐ ত্রিভুজের অপর বাহুদ্বয়কে বা এদের বর্ধিতাংশদ্বয়কে সমান অনুপাতে বিভক্ত করে।",
      figure: "141-t28",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $ABC$ ত্রিভুজের $BC$ বাহুর সমান্তরাল $DE$ রেখাংশ $AB$ ও $AC$ বাহুদ্বয়কে (চিত্র ১) অথবা এদের বর্ধিতাংশদ্বয়কে (চিত্র ২) যথাক্রমে $D$ ও $E$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $AD:DB=AE:EC$।`,
          String.raw`অঙ্কন: $B,\,E$ এবং $C,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ADE$ এবং $\triangle BDE$ একই উচ্চতাবিশিষ্ট, তাই`,
          String.raw`$$\frac{\triangle ADE}{\triangle BDE}=\frac{AD}{DB}\qquad\left[\,\text{একই উচ্চতার ত্রিভুজের ক্ষেত্রফল ভূমির সমানুপাতিক}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle ADE$ এবং $\triangle DEC$ একই উচ্চতাবিশিষ্ট, তাই`,
          String.raw`$$\frac{\triangle ADE}{\triangle DEC}=\frac{AE}{EC}$$`,
          String.raw`ধাপ ৩. কিন্তু $\triangle BDE=\triangle DEC$ [একই ভূমি $DE$ ও একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত]`,
          String.raw`$$\therefore\;\frac{\triangle ADE}{\triangle BDE}=\frac{\triangle ADE}{\triangle DEC}$$`,
          String.raw`ধাপ ৪. অতএব,`,
          String.raw`$$\frac{AD}{DB}=\frac{AE}{EC},\quad\text{অর্থাৎ}\quad AD:DB=AE:EC$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ২৯ — book page ২৬৯.
    {
      id: 29,
      label: "উপপাদ্য",
      question:
        "কোনো সরলরেখা একটি ত্রিভুজের দুই বাহুকে অথবা তাদের বর্ধিতাংশদ্বয়কে সমান অনুপাতে বিভক্ত করলে উক্ত সরলরেখা ত্রিভুজটির তৃতীয় বাহুর সমান্তরাল।",
      figure: "141-t28",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $DE$ রেখাংশ $ABC$ ত্রিভুজের $AB$ ও $AC$ বাহুদ্বয়কে অথবা এদের বর্ধিতাংশদ্বয়কে সমান অনুপাতে বিভক্ত করেছে, অর্থাৎ $AD:DB=AE:EC$। প্রমাণ করতে হবে যে, $DE$ এবং $BC$ সমান্তরাল।`,
          String.raw`অঙ্কন: $B,\,E$ এবং $C,\,D$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১.`,
          String.raw`$$\frac{\triangle ADE}{\triangle BDE}=\frac{AD}{DB},\qquad\frac{\triangle ADE}{\triangle DEC}=\frac{AE}{EC}\qquad\left[\,\text{ত্রিভুজ দুইটি একই উচ্চতাবিশিষ্ট}\,\right]$$`,
          String.raw`ধাপ ২. কিন্তু $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ [স্বীকার]`,
          String.raw`ধাপ ৩. অতএব,`,
          String.raw`$$\frac{\triangle ADE}{\triangle BDE}=\frac{\triangle ADE}{\triangle DEC}\;\Rightarrow\;\triangle BDE=\triangle DEC$$`,
          String.raw`ধাপ ৪. কিন্তু $\triangle BDE$ এবং $\triangle DEC$ একই ভূমি $DE$ এর একই পাশে অবস্থিত। সমান ক্ষেত্রফলের এরূপ দুইটি ত্রিভুজ একই সমান্তরাল যুগলের মধ্যে অবস্থিত।`,
          String.raw`$$\therefore\;BC\parallel DE$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩০ — book pages ২৬৯-২৭০.
    {
      id: 30,
      label: "উপপাদ্য",
      question:
        "ত্রিভুজের যেকোনো কোণের অন্তর্সমদ্বিখণ্ডক বিপরীত বাহুকে উক্ত কোণ সংলগ্ন বাহুদ্বয়ের অনুপাতে অন্তর্বিভক্ত করে।",
      figure: "141-t30",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $AD$ রেখাংশ $\triangle ABC$ এর অন্তঃস্থ $\angle A$ কে সমদ্বিখণ্ডিত করে $BC$ বাহুকে $D$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $BD:DC=BA:AC$।`,
          String.raw`অঙ্কন: $DA$ রেখাংশের সমান্তরাল করে $C$ বিন্দু দিয়ে $CE$ রেখাংশ অঙ্কন করি, যেন তা বর্ধিত $BA$ বাহুকে $E$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $DA\parallel CE$ এবং $BE$ এদের ছেদক, তাই`,
          String.raw`$$\angle AEC=\angle BAD\qquad\left[\,\text{অনুরূপ কোণ}\,\right]$$`,
          String.raw`আবার $DA\parallel CE$ এবং $AC$ এদের ছেদক, তাই`,
          String.raw`$$\angle ACE=\angle CAD\qquad\left[\,\text{একান্তর কোণ}\,\right]$$`,
          String.raw`ধাপ ২. কিন্তু $\angle BAD=\angle CAD$ [স্বীকার]`,
          String.raw`$$\therefore\;\angle AEC=\angle ACE,\quad\text{সুতরাং}\quad AC=AE$$`,
          String.raw`ধাপ ৩. আবার $\triangle BCE$ এ $DA\parallel CE$, সুতরাং [উপপাদ্য ২৮]`,
          String.raw`$$\frac{BD}{DC}=\frac{BA}{AE}$$`,
          String.raw`ধাপ ৪. কিন্তু $AE=AC$,`,
          String.raw`$$\therefore\;\frac{BD}{DC}=\frac{BA}{AC}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩১ — book pages ২৭০-২৭১.
    {
      id: 31,
      label: "উপপাদ্য",
      question:
        "ত্রিভুজের যেকোনো বাহু অপর দুই বাহুর অনুপাতে অন্তর্বিভক্ত হলে, বিভাগ বিন্দু থেকে বিপরীত শীর্ষ বিন্দু পর্যন্ত অঙ্কিত রেখাংশ উক্ত শীর্ষকোণের সমদ্বিখণ্ডক হবে।",
      figure: "141-t30",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABC$ ত্রিভুজের $A$ বিন্দু থেকে অঙ্কিত $AD$ রেখাংশ $BC$ বাহুকে $D$ বিন্দুতে এরূপে অন্তর্বিভক্ত করেছে যে, $BD:DC=BA:AC$। প্রমাণ করতে হবে যে, $\angle BAD=\angle CAD$।`,
          String.raw`অঙ্কন: $DA$ রেখাংশের সমান্তরাল করে $C$ বিন্দু দিয়ে $CE$ রেখাংশ অঙ্কন করি, যেন তা বর্ধিত $BA$ বাহুকে $E$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle BCE$ এ $DA\parallel CE$ [অঙ্কন]`,
          String.raw`$$\therefore\;BA:AE=BD:DC\qquad\left[\,\text{উপপাদ্য ২৮}\,\right]$$`,
          String.raw`ধাপ ২. কিন্তু $BD:DC=BA:AC$ [স্বীকার]`,
          String.raw`$$\therefore\;BA:AE=BA:AC\;\Rightarrow\;AE=AC$$`,
          String.raw`অতএব, $\angle ACE=\angle AEC$ [সমদ্বিবাহু ত্রিভুজের ভূমি সংলগ্ন কোণ দুইটি সমান]`,
          String.raw`ধাপ ৩. কিন্তু $\angle AEC=\angle BAD$ [অনুরূপ কোণ] এবং $\angle ACE=\angle CAD$ [একান্তর কোণ]`,
          String.raw`$$\therefore\;\angle BAD=\angle CAD$$`,
          String.raw`অর্থাৎ, $AD$ রেখাংশ $\angle BAC$ এর সমদ্বিখণ্ডক।`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
  problems: [
    {
      id: 1,
      group: C141_PROVE,
      question: String.raw`কোনো ত্রিভুজের ভূমি সংলগ্ন কোণদ্বয়ের সমদ্বিখণ্ডকদ্বয় বিপরীত বাহু দুইটিকে $X$ ও $Y$ বিন্দুতে ছেদ করে। $XY$, ভূমির সমান্তরাল হলে প্রমাণ করো যে, ত্রিভুজটি সমদ্বিবাহু।`,
      figure: "141-p1",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর ভূমি $BC$। $\angle B$ এর সমদ্বিখণ্ডক $BX$ বাহু $AC$ কে $X$ বিন্দুতে এবং $\angle C$ এর সমদ্বিখণ্ডক $CY$ বাহু $AB$ কে $Y$ বিন্দুতে ছেদ করে, আর $XY\parallel BC$। প্রমাণ করতে হবে যে, $AB=AC$।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABC$ এ $BX$, $\angle B$ এর সমদ্বিখণ্ডক, তাই [উপপাদ্য ৩০]`,
          String.raw`$$\frac{AX}{XC}=\frac{AB}{BC}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. আবার $CY$, $\angle C$ এর সমদ্বিখণ্ডক, তাই [উপপাদ্য ৩০]`,
          String.raw`$$\frac{AY}{YB}=\frac{AC}{BC}\qquad\cdots(2)$$`,
          String.raw`ধাপ ৩. $\triangle ABC$ এ $XY\parallel BC$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{AY}{YB}=\frac{AX}{XC}\qquad\cdots(3)$$`,
          String.raw`ধাপ ৪. $(1),\,(2)$ ও $(3)$ থেকে,`,
          String.raw`$$\frac{AC}{BC}=\frac{AB}{BC}\;\Rightarrow\;AB=AC$$`,
          String.raw`সুতরাং, ত্রিভুজটি সমদ্বিবাহু।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 2,
      group: C141_PROVE,
      question:
        "প্রমাণ করো যে, কতকগুলো পরস্পর সমান্তরাল সরলরেখাকে দুইটি সরলরেখা ছেদ করলে অনুরূপ অংশগুলো সমানুপাতিক হবে।",
      figure: "141-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $AD,\,BE,\,CF$ তিনটি পরস্পর সমান্তরাল সরলরেখা। একটি সরলরেখা এদের $A,\,B,\,C$ বিন্দুতে এবং অপর একটি সরলরেখা $D,\,E,\,F$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $AB:BC=DE:EF$।`,
          String.raw`অঙ্কন: $A,\,F$ যোগ করি। মনে করি, $AF$ রেখা $BE$ কে $G$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ACF$ এ $BG\parallel CF$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{AB}{BC}=\frac{AG}{GF}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. $\triangle FAD$ এ $GE\parallel AD$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{FG}{GA}=\frac{FE}{ED}\;\Rightarrow\;\frac{AG}{GF}=\frac{DE}{EF}\qquad\cdots(2)\qquad\left[\,\text{ব্যস্তকরণ}\,\right]$$`,
          String.raw`ধাপ ৩. $(1)$ ও $(2)$ থেকে,`,
          String.raw`$$\frac{AB}{BC}=\frac{DE}{EF},\quad\text{অর্থাৎ}\quad AB:BC=DE:EF$$`,
          String.raw`সমান্তরাল রেখা আরও বেশি থাকলে প্রতি পরপর তিনটি রেখায় একই যুক্তি খাটে, তাই সবগুলো অনুরূপ অংশই সমানুপাতিক।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 3,
      group: C141_PROVE,
      question:
        "প্রমাণ করো যে, ট্রাপিজিয়ামের কর্ণদ্বয় এদের ছেদবিন্দুতে একই অনুপাতে বিভক্ত হয়।",
      figure: "141-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ ট্রাপিজিয়ামে $AB\parallel DC$ এবং কর্ণ $AC$ ও $BD$ পরস্পর $O$ বিন্দুতে ছেদ করেছে। প্রমাণ করতে হবে যে, $AO:OC=BO:OD$।`,
          String.raw`অঙ্কন: $O$ বিন্দু দিয়ে $AB$ বা $DC$ এর সমান্তরাল $OE$ রেখাংশ আঁকি, যা $AD$ কে $E$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ADC$ এ $EO\parallel DC$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{AE}{ED}=\frac{AO}{OC}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. $\triangle DAB$ এ $EO\parallel AB$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{DE}{EA}=\frac{DO}{OB}\;\Rightarrow\;\frac{AE}{ED}=\frac{BO}{OD}\qquad\cdots(2)\qquad\left[\,\text{ব্যস্তকরণ}\,\right]$$`,
          String.raw`ধাপ ৩. $(1)$ ও $(2)$ থেকে,`,
          String.raw`$$\frac{AO}{OC}=\frac{BO}{OD},\quad\text{অর্থাৎ}\quad AO:OC=BO:OD$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 4,
      group: C141_PROVE,
      question:
        "প্রমাণ করো যে, ট্রাপিজিয়ামের তির্যক বাহুদ্বয়ের মধ্যবিন্দুর সংযোজক রেখাংশ সমান্তরাল বাহুদ্বয়ের সমান্তরাল।",
      figure: "141-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ ট্রাপিজিয়ামে $AB\parallel DC$ এবং তির্যক বাহু $AD$ ও $BC$ এর মধ্যবিন্দু যথাক্রমে $E$ ও $F$। প্রমাণ করতে হবে যে, $EF\parallel AB\parallel DC$।`,
          String.raw`অঙ্কন: $A,\,C$ যোগ করি এবং $AC$ এর মধ্যবিন্দু $G$ নিই। $E,\,G$ ও $G,\,F$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ADC$ এ $E$ ও $G$ যথাক্রমে $AD$ ও $AC$ এর মধ্যবিন্দু, তাই`,
          String.raw`$$\frac{AE}{ED}=1=\frac{AG}{GC}\;\Rightarrow\;EG\parallel DC\qquad\left[\,\text{উপপাদ্য ২৯}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle CAB$ এ $G$ ও $F$ যথাক্রমে $CA$ ও $CB$ এর মধ্যবিন্দু, তাই`,
          String.raw`$$\frac{CG}{GA}=1=\frac{CF}{FB}\;\Rightarrow\;GF\parallel AB\qquad\left[\,\text{উপপাদ্য ২৯}\,\right]$$`,
          String.raw`ধাপ ৩. কিন্তু $AB\parallel DC$, তাই $GF\parallel DC$। এখন $EG$ ও $GF$ দুইটি রেখাই $G$ বিন্দু দিয়ে যায় এবং দুইটিই $DC$ এর সমান্তরাল। একটি বিন্দু দিয়ে একটি রেখার সমান্তরাল একটিমাত্র সরলরেখা আঁকা যায়, সুতরাং $E,\,G,\,F$ একই সরলরেখায় অবস্থিত।`,
          String.raw`$$\therefore\;EF\parallel AB\parallel DC$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 5,
      group: C141_PROVE,
      question: String.raw`$ABC$ ত্রিভুজের $AD$ ও $BE$ মধ্যমাদ্বয় পরস্পর $G$ বিন্দুতে ছেদ করেছে। $G$ বিন্দুর মধ্য দিয়ে অঙ্কিত $DE$ এর সমান্তরাল রেখাংশ $AC$ কে $F$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $AC=6EF$।`,
      figure: "141-p5",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ এর $BC$ এর মধ্যবিন্দু $D$, $AC$ এর মধ্যবিন্দু $E$; মধ্যমা $AD$ ও $BE$ এর ছেদবিন্দু $G$ এবং $GF\parallel DE$, যেখানে $F$ বিন্দু $AC$ এর উপর। প্রমাণ করতে হবে যে, $AC=6EF$।`,
          String.raw`অঙ্কন: $D$ বিন্দু দিয়ে $BE$ এর সমান্তরাল $DH$ আঁকি, যা $AC$ কে $H$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle BCE$ এ $D$, $BC$ এর মধ্যবিন্দু এবং $DH\parallel BE$। সুতরাং $H$, $CE$ এর মধ্যবিন্দু [অনুসিদ্ধান্ত ২]।`,
          String.raw`$$\therefore\;EH=\tfrac12 EC=\tfrac12 AE\qquad\left[\,\because\;AE=EC\,\right]$$`,
          String.raw`ধাপ ২. $\triangle ADH$ এ $GE\parallel DH$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{AG}{GD}=\frac{AE}{EH}=\frac{AE}{\tfrac12 AE}=2$$`,
          String.raw`ধাপ ৩. $\triangle ADE$ এ $GF\parallel DE$, তাই [উপপাদ্য ২৮]`,
          String.raw`$$\frac{AF}{FE}=\frac{AG}{GD}=2\;\Rightarrow\;AF=2FE$$`,
          String.raw`ধাপ ৪. অতএব, $AE=AF+FE=2EF+EF=3EF$।`,
          String.raw`$$\therefore\;AC=2AE=2\times3EF=6EF$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 6,
      group: C141_PROVE,
      question: String.raw`$\triangle ABC$ এর $BC$ বাহুস্থ যেকোনো বিন্দু $X$ এবং $AX$ রেখাস্থ $O$ একটি বিন্দু। প্রমাণ করো যে, $\triangle AOB:\triangle AOC=BX:XC$`,
      figure: "141-p6",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ এর $BC$ বাহুর উপর $X$ এবং $AX$ এর উপর $O$ যেকোনো বিন্দু। $O,\,B$ ও $O,\,C$ যোগ করা হলো। প্রমাণ করতে হবে যে, $\triangle AOB:\triangle AOC=BX:XC$।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABX$ ও $\triangle ACX$ এর শীর্ষ $A$ সাধারণ এবং ভূমি একই রেখা $BC$ এর উপর — তাই এরা একই উচ্চতাবিশিষ্ট:`,
          String.raw`$$\frac{\triangle ABX}{\triangle ACX}=\frac{BX}{XC}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. একইভাবে $\triangle OBX$ ও $\triangle OCX$ একই উচ্চতাবিশিষ্ট:`,
          String.raw`$$\frac{\triangle OBX}{\triangle OCX}=\frac{BX}{XC}\qquad\cdots(2)$$`,
          String.raw`ধাপ ৩. মনে করি, $\dfrac{BX}{XC}=k$। তাহলে $(1)$ ও $(2)$ থেকে $\triangle ABX=k\cdot\triangle ACX$ এবং $\triangle OBX=k\cdot\triangle OCX$। বিয়োগ করে,`,
          String.raw`$$\triangle ABX-\triangle OBX=k\,(\triangle ACX-\triangle OCX)$$`,
          String.raw`ধাপ ৪. কিন্তু $\triangle ABX-\triangle OBX=\triangle AOB$ এবং $\triangle ACX-\triangle OCX=\triangle AOC$।`,
          String.raw`$$\therefore\;\triangle AOB=k\cdot\triangle AOC\;\Rightarrow\;\frac{\triangle AOB}{\triangle AOC}=k=\frac{BX}{XC}$$`,
          String.raw`অর্থাৎ, $\triangle AOB:\triangle AOC=BX:XC$।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 7,
      group: C141_PROVE,
      question: String.raw`$\triangle ABC$ এর $\angle A$ এর সমদ্বিখণ্ডক $BC$ কে $D$ বিন্দুতে ছেদ করে। $BC$ এর সমান্তরাল কোনো রেখাংশ $AB$ ও $AC$ কে যথাক্রমে $E$ ও $F$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $BD:DC=BE:CF$`,
      figure: "141-p7",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ এ $AD$, $\angle A$ এর সমদ্বিখণ্ডক এবং $EF\parallel BC$। প্রমাণ করতে হবে যে, $BD:DC=BE:CF$।`,
          String.raw`প্রমাণ: ধাপ ১. $AD$, $\angle BAC$ এর সমদ্বিখণ্ডক, তাই [উপপাদ্য ৩০]`,
          String.raw`$$\frac{BD}{DC}=\frac{AB}{AC}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. $\triangle ABC$ এ $EF\parallel BC$, তাই [অনুসিদ্ধান্ত ১]`,
          String.raw`$$\frac{AB}{BE}=\frac{AC}{CF}\;\Rightarrow\;\frac{AB}{AC}=\frac{BE}{CF}\qquad\cdots(2)\qquad\left[\,\text{একান্তরকরণ}\,\right]$$`,
          String.raw`ধাপ ৩. $(1)$ ও $(2)$ থেকে,`,
          String.raw`$$\frac{BD}{DC}=\frac{BE}{CF},\quad\text{অর্থাৎ}\quad BD:DC=BE:CF$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
  ],
};

// ─────────────── অনুশীলনী ১৪.২ ───────────────

export const exercise142: Exercise = {
  id: "14.2",
  bnId: "অনুশীলনী ১৪.২",
  title: "সদৃশতা",
  bookPages: "২৭১ – ২৭৮",
  formulas: [
    {
      title: "সদৃশকোণী ও সদৃশ",
      formulas: [
        {
          statement: "সদৃশকোণী বহুভুজ",
          note: "সমান সংখ্যক বাহুবিশিষ্ট দুইটি বহুভুজের একটির কোণগুলো যদি ধারাবাহিকভাবে অপরটির কোণগুলোর সমান হয়, তবে বহুভুজ দুইটি সদৃশকোণী (equiangular)।",
        },
        {
          statement: "সদৃশ বহুভুজ",
          note: "শীর্ষবিন্দুগুলো ধারাবাহিকভাবে এমনভাবে মিল করা যায় যে (১) অনুরূপ কোণগুলো সমান এবং (২) অনুরূপ বাহুগুলোর অনুপাত সমান — তবে বহুভুজ দুইটি সদৃশ (similar)। আয়ত ও বর্গ সদৃশকোণী, কিন্তু সদৃশ নয়।",
        },
        {
          statement: "ত্রিভুজে: সদৃশকোণী $\\Leftrightarrow$ সদৃশ",
          note: "দুইটি ত্রিভুজের ক্ষেত্রে একটি শর্ত সত্য হলে অপরটিও সত্য হয়। সদৃশকোণী দুইটি ত্রিভুজের এক জোড়া অনুরূপ বাহু সমান হলে ত্রিভুজদ্বয় সর্বসম।",
        },
      ],
    },
    {
      title: "সদৃশতার উপপাদ্য",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ৩২: $\;\angle A=\angle D,\,\angle B=\angle E,\,\angle C=\angle F\Rightarrow\dfrac{AB}{DE}=\dfrac{AC}{DF}=\dfrac{BC}{EF}$`,
          note: "দুইটি ত্রিভুজ সদৃশকোণী হলে এদের অনুরূপ বাহুগুলো সমানুপাতিক।",
        },
        {
          statement: String.raw`উপপাদ্য ৩৩: $\;\dfrac{AB}{DE}=\dfrac{AC}{DF}=\dfrac{BC}{EF}\Rightarrow\angle A=\angle D,\,\angle B=\angle E,\,\angle C=\angle F$`,
          note: "দুইটি ত্রিভুজের বাহুগুলো সমানুপাতিক হলে অনুরূপ বাহুর বিপরীত কোণগুলো পরস্পর সমান। (উপপাদ্য ৩২ এর বিপরীত)",
        },
        {
          statement: String.raw`উপপাদ্য ৩৪: $\;\angle A=\angle D,\;\dfrac{AB}{DE}=\dfrac{AC}{DF}\Rightarrow\triangle ABC\sim\triangle DEF$`,
          note: "একটির এক কোণ অপরটির এক কোণের সমান এবং সমান কোণ সংলগ্ন বাহুগুলো সমানুপাতিক হলে ত্রিভুজদ্বয় সদৃশ।",
        },
        {
          statement: String.raw`উপপাদ্য ৩৫: $\;\triangle ABC\sim\triangle DEF\Rightarrow\triangle ABC:\triangle DEF=BC^2:EF^2$`,
          note: "দুইটি সদৃশ ত্রিভুজক্ষেত্রের ক্ষেত্রফলের অনুপাত এদের যেকোনো দুই অনুরূপ বাহুর উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের অনুপাতের সমান।",
        },
      ],
    },
    {
      title: "নির্দিষ্ট অনুপাতে রেখাংশের বিভক্তিকরণ",
      formulas: [
        {
          statement: String.raw`$AX:XB=m:n$`,
          note: String.raw`দুইটি ভিন্ন বিন্দু $A,\,B$ এবং স্বাভাবিক সংখ্যা $m,\,n$ এর জন্য $A$ ও $B$ এর অন্তর্বর্তী এমন অনন্য বিন্দু $X$ আছে। তখন বলা হয়, $AB$ রেখাংশ $X$ বিন্দুতে $m:n$ অনুপাতে অন্তর্বিভক্ত হয়েছে।`,
        },
        {
          statement: "সম্পাদ্য ১২",
          note: String.raw`$A$ বিন্দুতে যেকোনো রশ্মি $AX$ এঁকে তা থেকে $AE=m$, $EC=n$ কেটে নিই; $C,\,B$ যোগ করে $E$ দিয়ে $CB$ এর সমান্তরাল $ED$ আঁকলে $D$ ই নির্ণেয় বিন্দু।`,
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য, সম্পাদ্য ও উদাহরণ",
  examples: [
    // উপপাদ্য ৩২ — book pages ২৭২-২৭৩.
    {
      id: 32,
      label: "উপপাদ্য",
      question: "দুইটি ত্রিভুজ সদৃশকোণী হলে এদের অনুরূপ বাহুগুলো সমানুপাতিক।",
      figure: "142-t32",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABC$ ও $DEF$ ত্রিভুজদ্বয়ের $\angle A=\angle D,\;\angle B=\angle E$ এবং $\angle C=\angle F$। প্রমাণ করতে হবে যে, $\dfrac{AB}{DE}=\dfrac{AC}{DF}=\dfrac{BC}{EF}$।`,
          String.raw`অঙ্কন: অনুরূপ বাহুযুগল অসমান ধরি। $AB$ বাহুতে $P$ এবং $AC$ বাহুতে $Q$ বিন্দু নিই যেন $AP=DE$ এবং $AQ=DF$ হয়। $P,\,Q$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle APQ$ ও $\triangle DEF$ এ $AP=DE,\;AQ=DF,\;\angle A=\angle D$।`,
          String.raw`$$\therefore\;\triangle APQ\cong\triangle DEF\qquad\left[\,\text{বাহু-কোণ-বাহু সর্বসমতা}\,\right]$$`,
          String.raw`সুতরাং $\angle APQ=\angle DEF=\angle ABC$ এবং $\angle AQP=\angle DFE=\angle ACB$। অর্থাৎ $PQ$ ও $BC$ কে $AB$ ছেদ করায় অনুরূপ কোণ সমান হয়েছে, তাই $PQ\parallel BC$।`,
          String.raw`$$\therefore\;\frac{AB}{AP}=\frac{AC}{AQ}\;\Rightarrow\;\frac{AB}{DE}=\frac{AC}{DF}\qquad\left[\,\text{অনুসিদ্ধান্ত ১}\,\right]$$`,
          String.raw`ধাপ ২. একইভাবে $BA$ ও $BC$ বাহু থেকে যথাক্রমে $ED$ ও $EF$ এর সমান রেখাংশ কেটে নিয়ে দেখানো যায় যে, $\dfrac{BA}{ED}=\dfrac{BC}{EF}$।`,
          String.raw`$$\therefore\;\frac{AB}{DE}=\frac{AC}{DF}=\frac{BC}{EF}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩৩ — book pages ২৭৩-২৭৪.
    {
      id: 33,
      label: "উপপাদ্য",
      question:
        "দুইটি ত্রিভুজের বাহুগুলো সমানুপাতিক হলে অনুরূপ বাহুর বিপরীত কোণগুলো পরস্পর সমান।",
      figure: "142-t32",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle DEF$ এর $\dfrac{AB}{DE}=\dfrac{AC}{DF}=\dfrac{BC}{EF}$। প্রমাণ করতে হবে যে, $\angle A=\angle D,\;\angle B=\angle E,\;\angle C=\angle F$।`,
          String.raw`অঙ্কন: $AB$ বাহুতে $P$ এবং $AC$ বাহুতে $Q$ বিন্দু নিই যেন $AP=DE$ এবং $AQ=DF$ হয়। $P,\,Q$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\dfrac{AB}{DE}=\dfrac{AC}{DF}$, তাই $\dfrac{AB}{AP}=\dfrac{AC}{AQ}$; সুতরাং $PQ\parallel BC$ [উপপাদ্য ২৯]।`,
          String.raw`$$\therefore\;\angle ABC=\angle APQ,\quad\angle ACB=\angle AQP\qquad\left[\,\text{অনুরূপ কোণ}\,\right]$$`,
          String.raw`অর্থাৎ $\triangle ABC$ ও $\triangle APQ$ সদৃশকোণী, তাই [উপপাদ্য ৩২]`,
          String.raw`$$\frac{AB}{AP}=\frac{BC}{PQ}\;\Rightarrow\;\frac{AB}{DE}=\frac{BC}{PQ}$$`,
          String.raw`ধাপ ২. কিন্তু $\dfrac{AB}{DE}=\dfrac{BC}{EF}$ [কল্পনানুসারে]। সুতরাং $\dfrac{BC}{EF}=\dfrac{BC}{PQ}$, অর্থাৎ $EF=PQ$।`,
          String.raw`ধাপ ৩. তাহলে $\triangle APQ$ ও $\triangle DEF$ এর তিন বাহু সমান:`,
          String.raw`$$\triangle APQ\cong\triangle DEF\qquad\left[\,\text{বাহু-বাহু-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;\angle PAQ=\angle EDF,\;\angle APQ=\angle DEF,\;\angle AQP=\angle DFE$$`,
          String.raw`আবার $\angle APQ=\angle ABC$ ও $\angle AQP=\angle ACB$। অতএব,`,
          String.raw`$$\angle A=\angle D,\quad\angle B=\angle E,\quad\angle C=\angle F$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩৪ — book pages ২৭৪-২৭৫.
    {
      id: 34,
      label: "উপপাদ্য",
      question:
        "দুইটি ত্রিভুজের একটির এক কোণ অপরটির এক কোণের সমান হলে এবং সমান সমান কোণ সংলগ্ন বাহুগুলো সমানুপাতিক হলে ত্রিভুজদ্বয় সদৃশ।",
      figure: "142-t32",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle DEF$ এমন যে, $\angle A=\angle D$ এবং $\dfrac{AB}{DE}=\dfrac{AC}{DF}$। প্রমাণ করতে হবে যে, $\triangle ABC$ ও $\triangle DEF$ সদৃশ।`,
          String.raw`অঙ্কন: $AB$ বাহুতে $P$ এবং $AC$ বাহুতে $Q$ বিন্দু নিই যেন $AP=DE$ এবং $AQ=DF$ হয়। $P,\,Q$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle APQ$ ও $\triangle DEF$ এ $AP=DE,\;AQ=DF$ এবং অন্তর্ভুক্ত $\angle A=$ অন্তর্ভুক্ত $\angle D$।`,
          String.raw`$$\therefore\;\triangle APQ\cong\triangle DEF\qquad\left[\,\text{বাহু-কোণ-বাহু উপপাদ্য}\,\right]$$`,
          String.raw`$$\therefore\;\angle A=\angle D,\quad\angle APQ=\angle E,\quad\angle AQP=\angle F$$`,
          String.raw`ধাপ ২. আবার $\dfrac{AB}{DE}=\dfrac{AC}{DF}$, তাই $\dfrac{AB}{AP}=\dfrac{AC}{AQ}$; সুতরাং $PQ\parallel BC$ [উপপাদ্য ২৯]।`,
          String.raw`$$\therefore\;\angle ABC=\angle APQ,\quad\angle ACB=\angle AQP$$`,
          String.raw`ধাপ ৩. অতএব $\angle A=\angle D,\;\angle B=\angle E,\;\angle C=\angle F$, অর্থাৎ $\triangle ABC$ ও $\triangle DEF$ সদৃশকোণী। সুতরাং $\triangle ABC$ ও $\triangle DEF$ সদৃশ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩৫ — book page ২৭৫.
    {
      id: 35,
      label: "উপপাদ্য",
      question:
        "দুইটি সদৃশ ত্রিভুজক্ষেত্রের ক্ষেত্রফলদ্বয়ের অনুপাত এদের যেকোনো দুই অনুরূপ বাহুর উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলদ্বয়ের অনুপাতের সমান।",
      figure: "142-t35",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle DEF$ সদৃশ এবং এদের অনুরূপ বাহু $BC$ ও $EF$। প্রমাণ করতে হবে যে, $\triangle ABC:\triangle DEF=BC^2:EF^2$।`,
          String.raw`অঙ্কন: $BC$ ও $EF$ এর উপর যথাক্রমে $AG$ ও $DH$ লম্ব আঁকি। মনে করি, $AG=h,\;DH=p$।`,
          String.raw`প্রমাণ: ধাপ ১.`,
          String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{\tfrac12\times BC\times h}{\tfrac12\times EF\times p}=\frac{h}{p}\times\frac{BC}{EF}$$`,
          String.raw`ধাপ ২. $\triangle ABG$ ও $\triangle DEH$ এ $\angle B=\angle E$ এবং $\angle AGB=\angle DHE$ [এক সমকোণ], তাই $\angle BAG=\angle EDH$। ত্রিভুজদ্বয় সদৃশকোণী, তাই সদৃশ:`,
          String.raw`$$\frac{h}{p}=\frac{AB}{DE}=\frac{BC}{EF}\qquad\left[\,\because\;\triangle ABC\sim\triangle DEF\,\right]$$`,
          String.raw`ধাপ ৩.`,
          String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{BC}{EF}\times\frac{BC}{EF}=\frac{BC^2}{EF^2}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // সম্পাদ্য ১২ — book page ২৭৬.
    {
      id: 12,
      label: "সম্পাদ্য",
      question: "কোনো রেখাংশকে একটি নির্দিষ্ট অনুপাতে অন্তর্বিভক্ত করতে হবে।",
      figure: "142-c12",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $AB$ রেখাংশকে $m:n$ অনুপাতে অন্তর্বিভক্ত করতে হবে।`,
          String.raw`অঙ্কন: $A$ বিন্দুতে যেকোনো কোণ $\angle BAX$ অঙ্কন করি এবং $AX$ রশ্মি থেকে পরপর $AE=m$ এবং $EC=n$ অংশ কেটে নিই। $B,\,C$ যোগ করি। $E$ বিন্দু দিয়ে $CB$ এর সমান্তরাল $ED$ রেখাংশ অঙ্কন করি, যা $AB$ কে $D$ বিন্দুতে ছেদ করে। তাহলে $AB$ রেখাংশ $D$ বিন্দুতে $m:n$ অনুপাতে অন্তর্বিভক্ত হলো।`,
          String.raw`প্রমাণ: $DE$ রেখাংশ $ABC$ ত্রিভুজের এক বাহু $BC$ এর সমান্তরাল, তাই [উপপাদ্য ২৮]`,
          String.raw`$$AD:DB=AE:EC=m:n$$`,
        ],
        answer: String.raw`$AD:DB=m:n$`,
      },
    },
    // উদাহরণ ১ — book page ২৭৬.
    {
      id: 1,
      question: "7 সে.মি. দৈর্ঘ্যের একটি রেখাংশকে 3 : 2 অনুপাতে অন্তর্বিভক্ত করো।",
      figure: "142-e1",
      solution: {
        steps: [
          String.raw`যেকোনো একটি রশ্মি $AG$ আঁকি এবং $AG$ থেকে 7 সে.মি. সমান রেখাংশ $AB$ নিই।`,
          String.raw`$A$ বিন্দুতে যেকোনো কোণ $\angle BAX$ অঙ্কন করি। $AX$ রশ্মি থেকে $AE=3$ সে.মি. কেটে নিই এবং $EX$ থেকে $EC=2$ সে.মি. কেটে নিই।`,
          String.raw`$B,\,C$ যোগ করি। $E$ বিন্দুতে $\angle ACB$ এর সমান $\angle AED$ অঙ্কন করি, যার $ED$ রেখা $AB$ কে $D$ বিন্দুতে ছেদ করে।`,
          String.raw`তাহলে $AB$ রেখাংশ $D$ বিন্দুতে $3:2$ অনুপাতে অন্তর্বিভক্ত হলো। (যাচাই: $AD=7\times\tfrac35=4.2$ সে.মি., $DB=2.8$ সে.মি.)`,
        ],
        answer: String.raw`$AD:DB=3:2$`,
      },
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (১ – ২) ───────────────
    {
      id: 1,
      group: C142_MCQ,
      question: String.raw`$\triangle ABC$ এ $BC$ এর সমান্তরাল $DE$ রেখা $AB$ ও $AC$ কে যথাক্রমে $D$ ও $E$ বিন্দুতে ছেদ করলে —
(i) $\triangle ABC$ ও $\triangle ADE$ পরস্পর সদৃশ
(ii) $\dfrac{AD}{BD}=\dfrac{CE}{AE}$
(iii) $\dfrac{\triangle ABC}{\triangle ADE}=\dfrac{BC^2}{DE^2}$
নিচের কোনটি সঠিক?
ক) $i$ ও $ii$  খ) $i$ ও $iii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          String.raw`(i) $DE\parallel BC$, তাই $\angle ADE=\angle ABC$ ও $\angle AED=\angle ACB$ [অনুরূপ কোণ] এবং $\angle A$ সাধারণ। ত্রিভুজ দুইটি সদৃশকোণী, তাই সদৃশ — সঠিক।`,
          String.raw`(ii) উপপাদ্য ২৮ অনুযায়ী $\dfrac{AD}{BD}=\dfrac{AE}{CE}$; প্রদত্ত অনুপাতে ডান পক্ষ উল্টানো — ভুল।`,
          String.raw`(iii) সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত অনুরূপ বাহুর বর্গের অনুপাত [উপপাদ্য ৩৫] — সঠিক।`,
        ],
        answer: String.raw`খ) $i$ ও $iii$`,
      },
    },
    {
      id: 2,
      group: C142_MCQ,
      question: String.raw`$\triangle ABC$ এ $PQ\parallel BC$ হলে, নিচের কোনটি সঠিক?
ক) $AP:PB=AQ:QC$  খ) $AB:PQ=AC:PQ$  গ) $AB:AC=PQ:BC$  ঘ) $PQ:BC=BP:BQ$`,
      figure: "142-p2",
      solution: {
        steps: [
          String.raw`$PQ\parallel BC$, তাই উপপাদ্য ২৮ অনুযায়ী $PQ$ রেখা $AB$ ও $AC$ কে সমান অনুপাতে বিভক্ত করে:`,
          String.raw`$$AP:PB=AQ:QC$$`,
          String.raw`বাকিগুলো মেলে না: (খ) সত্য হতে হলে $AB=AC$ লাগবে; (গ) তে $\triangle APQ\sim\triangle ABC$ থেকে আসে $AP:AB=PQ:BC$, $AB:AC$ নয়; (ঘ) তে $BQ$ কোনো অনুরূপ বাহুই নয়।`,
        ],
        answer: String.raw`ক) $AP:PB=AQ:QC$`,
      },
    },

    // ─────────────── প্রমাণ (৩ – ১১) ───────────────
    {
      id: 3,
      group: C142_PROVE,
      question:
        "প্রমাণ করো যে, দুইটি ত্রিভুজের প্রত্যেকটি যদি তৃতীয় একটি ত্রিভুজের সদৃশ হয়, তবে তারা পরস্পর সদৃশ।",
      figure: "142-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle DEF$ প্রত্যেকে $\triangle PQR$ এর সদৃশ। প্রমাণ করতে হবে যে, $\triangle ABC$ ও $\triangle DEF$ সদৃশ।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABC\sim\triangle PQR$, সদৃশ ত্রিভুজ সদৃশকোণী, তাই`,
          String.raw`$$\angle A=\angle P,\quad\angle B=\angle Q,\quad\angle C=\angle R$$`,
          String.raw`ধাপ ২. $\triangle DEF\sim\triangle PQR$, তাই`,
          String.raw`$$\angle D=\angle P,\quad\angle E=\angle Q,\quad\angle F=\angle R$$`,
          String.raw`ধাপ ৩. ধাপ ১ ও ২ থেকে,`,
          String.raw`$$\angle A=\angle D,\quad\angle B=\angle E,\quad\angle C=\angle F$$`,
          String.raw`অর্থাৎ $\triangle ABC$ ও $\triangle DEF$ সদৃশকোণী, সুতরাং এদের অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২]। অতএব $\triangle ABC$ ও $\triangle DEF$ সদৃশ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 4,
      group: C142_PROVE,
      question:
        "প্রমাণ করো যে, দুইটি সমকোণী ত্রিভুজের একটির একটি সূক্ষ্মকোণ অপরটির একটি সূক্ষ্মকোণের সমান হলে, ত্রিভুজ দুইটি সদৃশ হবে।",
      figure: "142-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ ও $\triangle DEF$ এ $\angle B=\angle E=$ এক সমকোণ এবং সূক্ষ্মকোণ $\angle C=\angle F$। প্রমাণ করতে হবে যে, $\triangle ABC$ ও $\triangle DEF$ সদৃশ।`,
          String.raw`প্রমাণ: ধাপ ১. ত্রিভুজের তিন কোণের সমষ্টি দুই সমকোণ, তাই`,
          String.raw`$$\angle A=180^{\circ}-90^{\circ}-\angle C,\qquad\angle D=180^{\circ}-90^{\circ}-\angle F$$`,
          String.raw`ধাপ ২. যেহেতু $\angle C=\angle F$, সুতরাং $\angle A=\angle D$।`,
          String.raw`ধাপ ৩. অতএব $\angle A=\angle D,\;\angle B=\angle E,\;\angle C=\angle F$ — ত্রিভুজ দুইটি সদৃশকোণী। সুতরাং এদের অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২], অর্থাৎ ত্রিভুজ দুইটি সদৃশ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 5,
      group: C142_PROVE,
      question:
        "প্রমাণ করো যে, সমকোণী ত্রিভুজের সমকৌণিক শীর্ষ থেকে অতিভুজের উপর লম্ব আঁকলে যে দুইটি সমকোণী ত্রিভুজ উৎপন্ন হয়, তারা পরস্পর সদৃশ এবং প্রত্যেকে মূল ত্রিভুজের সদৃশ।",
      figure: "142-p5",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $\angle BAC=90^{\circ}$ এবং $A$ থেকে অতিভুজ $BC$ এর উপর $AD$ লম্ব। প্রমাণ করতে হবে যে, $\triangle ABD$ ও $\triangle CAD$ পরস্পর সদৃশ এবং প্রত্যেকে $\triangle ABC$ এর সদৃশ।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABD$ ও $\triangle CBA$ এ $\angle B$ সাধারণ এবং $\angle ADB=\angle CAB=90^{\circ}$। তাই অবশিষ্ট $\angle BAD=\angle BCA$।`,
          String.raw`$$\therefore\;\triangle ABD\sim\triangle CBA\qquad\left[\,\text{সদৃশকোণী}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle CAD$ ও $\triangle CBA$ এ $\angle C$ সাধারণ এবং $\angle CDA=\angle CAB=90^{\circ}$। তাই অবশিষ্ট $\angle CAD=\angle CBA$।`,
          String.raw`$$\therefore\;\triangle CAD\sim\triangle CBA\qquad\left[\,\text{সদৃশকোণী}\,\right]$$`,
          String.raw`ধাপ ৩. $\triangle ABD$ ও $\triangle CAD$ দুইটিই তৃতীয় ত্রিভুজ $\triangle ABC$ এর সদৃশ, তাই এরা পরস্পর সদৃশ [প্রশ্ন ৩]। সরাসরিও দেখা যায়:`,
          String.raw`$$\angle ADB=\angle CDA=90^{\circ},\quad\angle BAD=\angle C=\angle ACD,\quad\angle ABD=\angle B=\angle CAD$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 6,
      group: C142_PROVE,
      question: String.raw`পাশের চিত্রে, $\angle B=\angle D$ এবং $CD=4AB$। প্রমাণ করো যে, $BD=5BL$।`,
      figure: "142-p6",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: চিত্রে $AC$ ও $BD$ রেখাংশ পরস্পর $L$ বিন্দুতে ছেদ করেছে, $\angle ABL=\angle CDL$ এবং $CD=4AB$। প্রমাণ করতে হবে যে, $BD=5BL$।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABL$ ও $\triangle CDL$ এ`,
          String.raw`$$\angle ABL=\angle CDL\qquad\left[\,\text{দেওয়া আছে}\,\right]$$`,
          String.raw`$$\angle ALB=\angle CLD\qquad\left[\,\text{বিপ্রতীপ কোণ}\,\right]$$`,
          String.raw`সুতরাং অবশিষ্ট কোণও সমান, $\triangle ABL$ ও $\triangle CDL$ সদৃশকোণী, তাই সদৃশ।`,
          String.raw`ধাপ ২. অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২]:`,
          String.raw`$$\frac{BL}{DL}=\frac{AB}{CD}=\frac{AB}{4AB}=\frac14\;\Rightarrow\;DL=4BL$$`,
          String.raw`ধাপ ৩. $L$ বিন্দু $BD$ এর উপর অবস্থিত, তাই`,
          String.raw`$$BD=BL+LD=BL+4BL=5BL$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 7,
      group: C142_PROVE,
      question: String.raw`$ABCD$ সামান্তরিকের $A$ শীর্ষ দিয়ে অঙ্কিত একটি রেখাংশ $BC$ বাহুকে $M$ বিন্দুতে এবং $DC$ বাহুর বর্ধিতাংশকে $N$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $BM\times DN$ একটি ধ্রুবক।`,
      figure: "142-p7",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $ABCD$ সামান্তরিকের $A$ বিন্দুগামী রেখা $BC$ কে $M$ এবং বর্ধিত $DC$ কে $N$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $BM\times DN$ একটি ধ্রুবক।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABM$ ও $\triangle NDA$ এ`,
          String.raw`$$\angle ABM=\angle ABC=\angle ADC=\angle NDA\qquad\left[\,\text{সামান্তরিকের বিপরীত কোণ}\,\right]$$`,
          String.raw`$$\angle BAM=\angle DNA\qquad\left[\,AB\parallel DN,\;AN\text{ ছেদক; একান্তর কোণ}\,\right]$$`,
          String.raw`সুতরাং অবশিষ্ট $\angle AMB=\angle NAD$, অর্থাৎ ত্রিভুজ দুইটি সদৃশকোণী, তাই সদৃশ।`,
          String.raw`ধাপ ২. অনুরূপ বাহুগুলো সমানুপাতিক:`,
          String.raw`$$\frac{AB}{ND}=\frac{BM}{DA}\;\Rightarrow\;BM\times DN=AB\times AD$$`,
          String.raw`ধাপ ৩. $AB$ ও $AD$ সামান্তরিকের দুইটি নির্দিষ্ট বাহু — $A$ দিয়ে রেখাটি যেভাবেই টানা হোক, এদের দৈর্ঘ্য বদলায় না। সুতরাং $BM\times DN=AB\times AD$ একটি ধ্রুবক।`,
        ],
        answer: String.raw`$BM\times DN=AB\times AD$, একটি ধ্রুবক`,
      },
    },
    {
      id: 8,
      group: C142_PROVE,
      question: String.raw`$ABC$ ও $DEF$ সদৃশকোণী ত্রিভুজদ্বয়ের উচ্চতা $AM$ ও $DN$। প্রমাণ করো যে, $AM:DN=AB:DE$।`,
      figure: "142-p8",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ ও $\triangle DEF$ সদৃশকোণী, অর্থাৎ $\angle A=\angle D,\;\angle B=\angle E,\;\angle C=\angle F$; $AM\perp BC$ ও $DN\perp EF$। প্রমাণ করতে হবে যে, $AM:DN=AB:DE$।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle ABM$ ও $\triangle DEN$ এ`,
          String.raw`$$\angle ABM=\angle DEN\qquad\left[\,\because\;\angle B=\angle E\,\right]$$`,
          String.raw`$$\angle AMB=\angle DNE\qquad\left[\,\text{প্রত্যেকে এক সমকোণ}\,\right]$$`,
          String.raw`সুতরাং অবশিষ্ট $\angle BAM=\angle EDN$; $\triangle ABM$ ও $\triangle DEN$ সদৃশকোণী।`,
          String.raw`ধাপ ২. অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২]:`,
          String.raw`$$\frac{AM}{DN}=\frac{AB}{DE},\quad\text{অর্থাৎ}\quad AM:DN=AB:DE$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 9,
      group: C142_PROVE,
      question: String.raw`পাশের চিত্রে $BC\parallel DE$।`,
      figure: "142-p9",
      parts: [
        {
          label: "ক",
          question: String.raw`প্রমাণ করো, $\triangle BOC$ ও $\triangle DOE$ সদৃশ।`,
          solution: {
            steps: [
              String.raw`$BC\parallel DE$ এবং $BE$ এদের ছেদক, তাই $\angle OBC=\angle OED$ [একান্তর কোণ]।`,
              String.raw`$BC\parallel DE$ এবং $CD$ এদের ছেদক, তাই $\angle OCB=\angle ODE$ [একান্তর কোণ]।`,
              String.raw`আবার $\angle BOC=\angle DOE$ [বিপ্রতীপ কোণ]।`,
              String.raw`সুতরাং $\triangle BOC$ ও $\triangle EOD$ সদৃশকোণী, তাই সদৃশ ($B\leftrightarrow E,\;O\leftrightarrow O,\;C\leftrightarrow D$)।`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো, $AD:BD=AE:CE$।`,
          solution: {
            steps: [
              String.raw`$\triangle ABC$ এ $DE\parallel BC$ এবং $DE$ রেখা $AB$ ও $AC$ কে যথাক্রমে $D$ ও $E$ বিন্দুতে ছেদ করেছে। তাই [উপপাদ্য ২৮]`,
              String.raw`$$\frac{AD}{DB}=\frac{AE}{EC},\quad\text{অর্থাৎ}\quad AD:BD=AE:CE$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`প্রমাণ করো, $BO:OE=CO:OD$।`,
          solution: {
            steps: [
              String.raw`(ক) থেকে $\triangle BOC\sim\triangle EOD$, যেখানে $B\leftrightarrow E$, $O\leftrightarrow O$, $C\leftrightarrow D$। সদৃশ ত্রিভুজের অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২]:`,
              String.raw`$$\frac{BO}{EO}=\frac{CO}{DO}=\frac{BC}{ED}$$`,
              String.raw`$$\therefore\;BO:OE=CO:OD$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },
    {
      id: 10,
      group: C142_PROVE,
      question: String.raw`পাশের চিত্রে $BD\perp AC$ এবং $DQ=BQ=2AQ=\dfrac12 QC$। প্রমাণ করো যে, $DA\perp DC$।`,
      figure: "142-p10",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $BD$ ও $AC$ পরস্পর $Q$ বিন্দুতে লম্বভাবে ছেদ করে এবং $DQ=BQ=2AQ=\tfrac12 QC$। প্রমাণ করতে হবে যে, $\angle ADC=90^{\circ}$।`,
          String.raw`প্রমাণ: ধাপ ১. মনে করি, $AQ=a$। তাহলে $DQ=2a$ এবং $QC=2DQ=4a$।`,
          String.raw`$$\frac{AQ}{DQ}=\frac{a}{2a}=\frac12,\qquad\frac{DQ}{QC}=\frac{2a}{4a}=\frac12\;\Rightarrow\;\frac{AQ}{DQ}=\frac{DQ}{QC}$$`,
          String.raw`ধাপ ২. $\triangle AQD$ ও $\triangle DQC$ এ অন্তর্ভুক্ত $\angle AQD=\angle DQC=90^{\circ}$ এবং এ কোণ সংলগ্ন বাহুগুলো সমানুপাতিক। সুতরাং [উপপাদ্য ৩৪]`,
          String.raw`$$\triangle AQD\sim\triangle DQC\qquad(A\leftrightarrow D,\;Q\leftrightarrow Q,\;D\leftrightarrow C)$$`,
          String.raw`$$\therefore\;\angle QAD=\angle QDC$$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle AQD$ এ $\angle QAD+\angle ADQ=90^{\circ}$। অতএব,`,
          String.raw`$$\angle ADC=\angle ADQ+\angle QDC=\angle ADQ+\angle QAD=90^{\circ}$$`,
          String.raw`$$\therefore\;DA\perp DC$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 11,
      group: C142_PROVE,
      question: String.raw`$\triangle ABC$ ও $\triangle DEF$ এর $\angle A=\angle D$। প্রমাণ করো যে, $\triangle ABC:\triangle DEF=AB\cdot AC:DE\cdot DF$`,
      figure: "142-p11",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: $\triangle ABC$ ও $\triangle DEF$ এ $\angle A=\angle D$। প্রমাণ করতে হবে যে, $\triangle ABC:\triangle DEF=AB\cdot AC:DE\cdot DF$।`,
          String.raw`অঙ্কন: $C$ থেকে $AB$ এর উপর $CM$ এবং $F$ থেকে $DE$ এর উপর $FN$ লম্ব আঁকি।`,
          String.raw`প্রমাণ: ধাপ ১.`,
          String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{\tfrac12\,AB\cdot CM}{\tfrac12\,DE\cdot FN}=\frac{AB}{DE}\cdot\frac{CM}{FN}\qquad\cdots(1)$$`,
          String.raw`ধাপ ২. সমকোণী $\triangle ACM$ ও $\triangle DFN$ এ $\angle CAM=\angle FDN$ [$\because\angle A=\angle D$] এবং $\angle AMC=\angle DNF=90^{\circ}$। সুতরাং ত্রিভুজ দুইটি সদৃশকোণী, তাই সদৃশ:`,
          String.raw`$$\frac{CM}{FN}=\frac{AC}{DF}\qquad\cdots(2)$$`,
          String.raw`ধাপ ৩. $(2)$ কে $(1)$ এ বসিয়ে,`,
          String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{AB}{DE}\cdot\frac{AC}{DF}=\frac{AB\cdot AC}{DE\cdot DF}$$`,
          String.raw`মন্তব্য: $\angle A$ স্থূলকোণ হলে লম্বের পাদবিন্দু $M$ ও $N$ বর্ধিত $BA$ ও $ED$ এর উপর পড়ে; তখন $\angle CAM=180^{\circ}-\angle A=\angle FDN$, আর বাকি প্রমাণ একই।`,
        ],
        answer: "প্রমাণিত",
      },
    },

    // ─────────────── সৃজনশীল (১২) ───────────────
    {
      id: 12,
      group: C142_CQ,
      question: String.raw`চিত্রে $ABC$ এবং $DEF$ দুইটি সদৃশ ত্রিভুজ।`,
      figure: "142-p12",
      parts: [
        {
          label: "ক",
          question: "ত্রিভুজ দুইটির অনুরূপ বাহু ও অনুরূপ কোণগুলোর নাম লিখ।",
          solution: {
            steps: [
              String.raw`$\triangle ABC\sim\triangle DEF$ এ শীর্ষবিন্দুর মিল $A\leftrightarrow D,\;B\leftrightarrow E,\;C\leftrightarrow F$।`,
              String.raw`অনুরূপ বাহু: $AB$ ও $DE$; $BC$ ও $EF$; $AC$ ও $DF$।`,
              String.raw`অনুরূপ কোণ: $\angle A$ ও $\angle D$; $\angle B$ ও $\angle E$; $\angle C$ ও $\angle F$।`,
            ],
            answer: String.raw`$AB\leftrightarrow DE,\;BC\leftrightarrow EF,\;AC\leftrightarrow DF$; $\angle A=\angle D,\;\angle B=\angle E,\;\angle C=\angle F$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $\dfrac{\triangle ABC}{\triangle DEF}=\dfrac{AB^2}{DE^2}=\dfrac{AC^2}{DF^2}=\dfrac{BC^2}{EF^2}$`,
          solution: {
            steps: [
              String.raw`চিত্রে $AM\perp BC$ ও $DN\perp EF$। তাহলে`,
              String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{\tfrac12\,BC\cdot AM}{\tfrac12\,EF\cdot DN}=\frac{BC}{EF}\cdot\frac{AM}{DN}\qquad\cdots(1)$$`,
              String.raw`$\triangle ABM$ ও $\triangle DEN$ এ $\angle B=\angle E$ এবং $\angle AMB=\angle DNE=90^{\circ}$, তাই এরা সদৃশ:`,
              String.raw`$$\frac{AM}{DN}=\frac{AB}{DE}\qquad\cdots(2)$$`,
              String.raw`আবার $\triangle ABC\sim\triangle DEF$, তাই [উপপাদ্য ৩২]`,
              String.raw`$$\frac{AB}{DE}=\frac{AC}{DF}=\frac{BC}{EF}\qquad\cdots(3)$$`,
              String.raw`$(2)$ ও $(3)$ থেকে $\dfrac{AM}{DN}=\dfrac{BC}{EF}$; এটি $(1)$ এ বসিয়ে`,
              String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{BC}{EF}\cdot\frac{BC}{EF}=\frac{BC^2}{EF^2}$$`,
              String.raw`$(3)$ এর প্রতিটি অনুপাত সমান, তাই তাদের বর্গও সমান:`,
              String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{AB^2}{DE^2}=\frac{AC^2}{DF^2}=\frac{BC^2}{EF^2}$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`যদি $BC=3$ সে.মি., $EF=8$ সে.মি., $\angle B=60^{\circ}$, $\dfrac{BC}{AB}=\dfrac32$ এবং $\triangle ABC$ এর ক্ষেত্রফল $3$ বর্গ সে.মি. হয়, তবে $\triangle DEF$ অঙ্কন করো এবং এর ক্ষেত্রফল নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`$\dfrac{BC}{AB}=\dfrac32$, তাই $AB=\dfrac{2\times3}{3}=2$ সে.মি.।`,
              String.raw`$\triangle DEF\sim\triangle ABC$, তাই $\angle E=\angle B=60^{\circ}$ এবং`,
              String.raw`$$\frac{DE}{AB}=\frac{EF}{BC}=\frac83\;\Rightarrow\;DE=2\times\frac83=\frac{16}{3}\approx5.33\text{ সে.মি.}$$`,
              String.raw`অঙ্কন: ১. যেকোনো রশ্মি থেকে $EF=8$ সে.মি. কেটে নিই।`,
              String.raw`২. $E$ বিন্দুতে $EF$ রেখার সাথে $\angle FEX=60^{\circ}$ আঁকি।`,
              String.raw`৩. $EX$ রশ্মি থেকে $ED=\tfrac{16}{3}$ সে.মি. (প্রায় $5.3$ সে.মি.) কেটে নিই এবং $D,\,F$ যোগ করি। $\triangle DEF$ ই নির্ণেয় ত্রিভুজ।`,
              String.raw`প্রমাণ: $\dfrac{DE}{AB}=\dfrac{EF}{BC}=\dfrac83$ এবং অন্তর্ভুক্ত $\angle E=\angle B$, তাই $\triangle DEF\sim\triangle ABC$ [উপপাদ্য ৩৪]।`,
              String.raw`ক্ষেত্রফল: (খ) অনুযায়ী`,
              String.raw`$$\frac{\triangle DEF}{\triangle ABC}=\frac{EF^2}{BC^2}=\frac{8^2}{3^2}=\frac{64}{9}$$`,
              String.raw`$$\therefore\;\triangle DEF=3\times\frac{64}{9}=\frac{64}{3}\approx21.33\text{ বর্গ সে.মি.}$$`,
              String.raw`মন্তব্য: বইয়ের উপাত্ত পুরোপুরি সংগত নয় — $AB=2$, $BC=3$, $\angle B=60^{\circ}$ থেকে $\triangle ABC=\tfrac12\cdot2\cdot3\sin60^{\circ}\approx2.6$ বর্গ সে.মি. হয়, $3$ নয়। প্রশ্নে দেওয়া ক্ষেত্রফল $3$ ধরে উত্তর $\tfrac{64}{3}$; আঁকা ত্রিভুজের বাহু ও কোণ থেকে সরাসরি হিসাব করলে $\tfrac12\cdot8\cdot\tfrac{16}{3}\sin60^{\circ}\approx18.48$ বর্গ সে.মি.।`,
            ],
            answer: String.raw`$\triangle DEF=\dfrac{64}{3}$ বর্গ সে.মি. (প্রায় $21.33$ বর্গ সে.মি.)`,
            figure: "142-p12c",
          },
        },
      ],
    },
  ],
};

// ─────────────── অনুশীলনী ১৪.৩ ───────────────

export const exercise143: Exercise = {
  id: "14.3",
  bnId: "অনুশীলনী ১৪.৩",
  title: "প্রতিসমতা",
  bookPages: "২৭৮ – ২৮৪",
  formulas: [
    {
      title: "রেখা প্রতিসমতা",
      formulas: [
        {
          statement: "প্রতিসাম্য রেখা",
          note: "কোনো সরলরেখা বরাবর চিত্র ভাঁজ করলে তার অংশ দুইটি সম্পূর্ণভাবে মিলে গেলে সরলরেখাটি প্রতিসাম্য রেখা। রেখাটিতে একটি কাল্পনিক আয়না রাখলে অর্ধাংশের প্রতিচ্ছবি বাকি অর্ধাংশের সাথে মিলে যায়, তাই রেখা প্রতিসমতাকে প্রতিফলন প্রতিসমতাও বলা হয়।",
        },
        {
          statement: String.raw`সুষম $n$-ভুজের প্রতিসাম্য রেখা $=n$`,
          note: "সমবাহু ত্রিভুজের ৩টি, বর্গের ৪টি, সুষম পঞ্চভুজের ৫টি, সুষম ষড়ভুজের ৬টি। বিজোড় $n$ এ প্রতিটি রেখা একটি শীর্ষ ও বিপরীত বাহুর মধ্যবিন্দু দিয়ে যায়; জোড় $n$ এ অর্ধেক রেখা বিপরীত শীর্ষ দিয়ে, অর্ধেক বিপরীত বাহুর মধ্যবিন্দু দিয়ে।",
        },
        {
          statement: "বৃত্ত",
          note: "বৃত্তের কেন্দ্রগামী যেকোনো রেখা প্রতিসাম্য রেখা — বৃত্তের অসংখ্য প্রতিসাম্য রেখা।",
        },
      ],
    },
    {
      title: "ঘূর্ণন প্রতিসমতা",
      formulas: [
        {
          statement: "ঘূর্ণন কেন্দ্র, কোণ, দিক ও মাত্রা",
          note: "যে বিন্দুর সাপেক্ষে বস্তু ঘোরে তা ঘূর্ণন কেন্দ্র; যে পরিমাণ কোণে ঘোরে তা ঘূর্ণন কোণ। ঘড়ির কাঁটার বিপরীত দিক ধনাত্মক। এক পূর্ণ ঘূর্ণনে (360°) চিত্রটি যতবার আদি অবস্থানের মতো দেখায়, সেটিই ঘূর্ণন প্রতিসমতার মাত্রা।",
        },
        {
          statement: String.raw`$\text{ঘূর্ণন কোণ}=\dfrac{360^{\circ}}{\text{মাত্রা}}$`,
          note: String.raw`যেমন চার পাখার ফ্যান ও বর্গ: মাত্রা $4$, কোণ $90^{\circ}$। সুষম $n$-ভুজের মাত্রা $n$।`,
        },
        {
          statement: "মাত্রা 1 ও অসীম মাত্রা",
          note: "যেকোনো চিত্র একবার পূর্ণ ঘূর্ণনে আদি অবস্থানে ফেরে, তাই প্রত্যেক চিত্রের 1 মাত্রার ঘূর্ণন প্রতিসমতা আছে; ঘূর্ণন প্রতিসমতা আছে বলতে বোঝায় মাত্রা 1 এর বেশি। বৃত্ত যেকোনো কোণে ঘোরালেও একই দেখায় — এর মাত্রা অসীম।",
        },
        {
          statement: "রেখা ও ঘূর্ণন — দুটোই",
          note: "কোনো চিত্রের শুধু রেখা প্রতিসমতা (যেমন সমদ্বিবাহু ত্রিভুজ), কোনোটির শুধু ঘূর্ণন প্রতিসমতা (যেমন বর্ণ Z), আবার কোনোটির দুটোই (যেমন বর্গ: ৪টি প্রতিসাম্য রেখা ও 4 মাত্রা) থাকে।",
        },
      ],
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (১ – ৪) ───────────────
    {
      id: 1,
      group: C143_MCQ,
      question: String.raw`বিষমবাহু ত্রিভুজের মোট কতটি প্রতিসাম্য রেখা আছে?
ক) শূন্যটি  খ) একটি  গ) তিনটি  ঘ) অসংখ্য`,
      solution: {
        steps: [
          String.raw`প্রতিসাম্য রেখা বরাবর ভাঁজ করলে একটি বাহু আরেকটি বাহুর উপর পড়ে, তাই সেই দুইটি বাহু সমান হতে হয়। বিষমবাহু ত্রিভুজের কোনো দুই বাহু সমান নয়, তাই কোনো ভাঁজেই দুই অংশ মেলে না।`,
        ],
        answer: "ক) শূন্যটি",
        figure: "143-p1",
      },
    },
    {
      id: 2,
      group: C143_MCQ,
      question: String.raw`পাশের চিত্রের বহুভুজটির প্রতিটি বাহুর দৈর্ঘ্য 6 সে.মি.। এই তথ্য অনুসারে ২ ও ৩ নং প্রশ্নের উত্তর দাও।
বহুভুজটির মোট কতটি প্রতিসাম্য রেখা আছে?
ক) 3টি  খ) 6টি  গ) 7টি  ঘ) অসংখ্য`,
      figure: "143-hex",
      solution: {
        steps: [
          String.raw`চিত্রের বহুভুজটি ছয়টি সমান বাহুর সুষম ষড়ভুজ। সুষম $n$-ভুজের প্রতিসাম্য রেখা $n$টি।`,
          String.raw`তিনটি রেখা বিপরীত শীর্ষবিন্দুগুলো যোগ করে এবং তিনটি রেখা বিপরীত বাহুগুলোর মধ্যবিন্দু যোগ করে — মোট $3+3=6$টি।`,
        ],
        answer: "খ) 6টি",
        figure: "143-p2",
      },
    },
    {
      id: 3,
      group: C143_MCQ,
      question: String.raw`বহুভুজটির —
(i) ঘূর্ণন মাত্রা 4
(ii) ঘূর্ণন কোণ $60^{\circ}$
(iii) প্রতিটি কোণ সমান
নিচের কোনটি সঠিক?
ক) $i$  খ) $ii$  গ) $ii$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      figure: "143-hex",
      solution: {
        steps: [
          String.raw`(i) সুষম ষড়ভুজের ঘূর্ণন প্রতিসমতার মাত্রা 6, 4 নয় — ভুল।`,
          String.raw`(ii) ঘূর্ণন কোণ $=\dfrac{360^{\circ}}{6}=60^{\circ}$ — সঠিক।`,
          String.raw`(iii) সুষম বহুভুজের বাহু ও কোণগুলো সমান; প্রতিটি কোণ $120^{\circ}$ — সঠিক।`,
        ],
        answer: String.raw`গ) $ii$ ও $iii$`,
        figure: "143-p3",
      },
    },
    {
      id: 4,
      group: C143_MCQ,
      question: String.raw`নিচের কোনটির প্রতিসাম্য রেখা রয়েছে?
ক) বাড়ির চিত্র  খ) মসজিদের চিত্র  গ) মন্দিরের চিত্র
ঘ) গির্জার চিত্র  ঙ) প্যাগোডার চিত্র  চ) পার্লামেন্ট ভবনের চিত্র`,
      solution: {
        steps: [
          String.raw`এসব স্থাপনার সামনের দিকের চিত্র সাধারণত দুই পাশে একই রকম করে বানানো হয় — বাম পাশে যা থাকে, ডান পাশেও ঠিক তাই।`,
          String.raw`মসজিদের মাঝখানের গম্বুজ ও দুই পাশের মিনার, মন্দিরের চূড়া, গির্জার মাঝের চূড়া, প্যাগোডার ধাপে ধাপে ছোট হয়ে আসা ছাদ, পার্লামেন্ট ভবনের সম্মুখভাগ এবং সাধারণ বাড়ির ত্রিভুজাকার চাল ও মাঝের দরজা — প্রতিটিতেই মাঝখান দিয়ে একটি উল্লম্ব রেখা বরাবর ভাঁজ করলে দুই অংশ মিলে যায়।`,
          String.raw`বইয়ের ২৭৯ পৃষ্ঠার ভবনের চিত্রটিও এমন একটি উল্লম্ব প্রতিসাম্য রেখা দেখায়।`,
        ],
        answer: "সবগুলোর (ক – চ) — প্রতিটির সম্মুখ চিত্রের মাঝ বরাবর একটি উল্লম্ব প্রতিসাম্য রেখা আছে",
      },
    },

    // ─────────────── চিত্রে (৫ – ১১) ───────────────
    {
      id: 5,
      group: C143_DRAW,
      question:
        "প্রতিসাম্য রেখা দেওয়া আছে (ড্যাশযুক্ত রেখা), জ্যামিতিক চিত্র সম্পূর্ণ করো এবং সনাক্ত করো:",
      figure: "143-p5",
      solution: {
        steps: [
          "প্রতিটি অর্ধেকের প্রতিটি শীর্ষ থেকে ড্যাশযুক্ত রেখার উপর লম্ব টেনে রেখার অপর পাশে সমান দূরত্বে প্রতিবিম্ব বিন্দু বসাই, তারপর বিন্দুগুলো একই ক্রমে যোগ করি (বক্ররেখার বেলায় বক্ররেখাটিই উল্টে আঁকি)।",
          "(১) সমকোণী ত্রিভুজের অর্ধেক উল্টালে দুই হেলানো বাহু সমান হয় — সমদ্বিবাহু ত্রিভুজ।",
          "(২) শীর্ষ বাম দিকে থাকা ত্রিভুজের ভূমিই প্রতিসাম্য রেখা; উল্টালে চারটি সমান বাহুর চতুর্ভুজ — রম্বস।",
          "(৩) অর্ধবৃত্তাকার বক্ররেখা উল্টালে সম্পূর্ণ বৃত্ত।",
          "(৪) উপরে একটি শীর্ষ, দুই পাশে দুই হেলানো বাহু ও নিচে সমান্তরাল ভূমি — পাঁচ বাহুর চিত্র, সুষম পঞ্চভুজ।",
          "(৫) উপরে-নিচে সমান অনুভূমিক বাহু, দুই পাশে উল্লম্ব বাহু আর চার কোণে চারটি কাটা বাহু — আট বাহুর চিত্র, সুষম অষ্টভুজ।",
        ],
        answer:
          "(১) সমদ্বিবাহু ত্রিভুজ (২) রম্বস (৩) বৃত্ত (৪) সুষম পঞ্চভুজ (৫) সুষম অষ্টভুজ",
        figure: "143-p5s",
      },
    },
    {
      id: 6,
      group: C143_DRAW,
      question: "নিচের জ্যামিতিক চিত্রে প্রতিসাম্য রেখা নির্দেশ করো:",
      figure: "143-p6",
      solution: {
        steps: [
          "(১) সমবাহু ত্রিভুজের তিন শীর্ষে তিনটি সমান বৃত্ত — ত্রিভুজের প্রতিটি শীর্ষ থেকে বিপরীত বাহুর মধ্যবিন্দুগামী রেখা; মোট ৩টি।",
          "(২) বর্গের বাম ও ডান বাহুতে দুইটি সমান অর্ধবৃত্ত — উল্লম্ব মধ্যরেখা (দুই অর্ধবৃত্ত অদলবদল হয়) ও অনুভূমিক মধ্যরেখা (প্রতিটি অর্ধবৃত্ত নিজের উপর পড়ে); মোট ২টি। কর্ণ বরাবর ভাঁজ করলে অর্ধবৃত্ত উপরে-নিচে চলে যায়, তাই কর্ণ প্রতিসাম্য রেখা নয়।",
          "(৩) সমবাহু ত্রিভুজের তিন শীর্ষকে কেন্দ্র করে তিনটি সমান চাপ — ত্রিভুজের তিনটি মধ্যমা বরাবর; মোট ৩টি।",
          "(৪) বর্গের ভেতরে দুই উত্তল ও দুই অবতল চাপ, বিপরীত কোণে একই ধরনের চাপ — দুইটি কর্ণ বরাবর; মোট ২টি। উল্লম্ব বা অনুভূমিক রেখায় ভাঁজ করলে উত্তল চাপ অবতল চাপের উপর পড়ে, মেলে না।",
          "(৫) বর্গের দুই কর্ণ বরাবর দুইটি সমান লেন্স — দুই কর্ণ ও দুই মধ্যরেখা; মোট ৪টি।",
          "(৬) অর্ধবৃত্তের উপর দুইটি পাতা — শুধু উল্লম্ব মধ্যরেখা; মোট ১টি।",
          "(৭) বর্গের চার কোণে চারটি সমান পাপড়ি — দুই কর্ণ ও দুই মধ্যরেখা; মোট ৪টি।",
        ],
        answer: "প্রতিসাম্য রেখার সংখ্যা: (১) ৩ (২) ২ (৩) ৩ (৪) ২ (৫) ৪ (৬) ১ (৭) ৪ — চিত্রে ড্যাশযুক্ত রেখায় দেখানো",
        figure: "143-p6s",
      },
    },
    {
      id: 7,
      group: C143_DRAW,
      question:
        "নিচের অসম্পূর্ণ জ্যামিতিক চিত্র সম্পূর্ণ করো যেন আয়না রেখা সাপেক্ষে প্রতিসম হয়:",
      parts: [
        {
          label: "ক",
          question: String.raw`আয়না রেখা $y=-x$ (বাম-উপর থেকে ডান-নিচে)।`,
          figure: "143-p7a",
          solution: {
            steps: [
              String.raw`$y=-x$ রেখায় প্রতিফলনে $(x,\,y)$ বিন্দু $(-y,\,-x)$ বিন্দুতে যায় — প্রতিটি বিন্দু ও তার প্রতিবিম্বের সংযোজক রেখাংশ আয়না রেখার উপর লম্ব এবং আয়না রেখা একে সমদ্বিখণ্ডিত করে।`,
              String.raw`সিঁড়ির কোণগুলো $(0,3),(1,3),(1,2),(2,2),(2,1),(3,1),(3,0)$ এর প্রতিবিম্ব:`,
              String.raw`$$(-3,0),\,(-3,-1),\,(-2,-1),\,(-2,-2),\,(-1,-2),\,(-1,-3),\,(0,-3)$$`,
              "বিন্দুগুলো একই ক্রমে যোগ করলে নিচে-বামে একই রকম সিঁড়ি পাওয়া যায়।",
            ],
            answer: "চিত্রে সম্পূর্ণ করা হলো",
            figure: "143-p7a-s",
          },
        },
        {
          label: "খ",
          question: String.raw`আয়না রেখা $y=x$ (বাম-নিচ থেকে ডান-উপরে)।`,
          figure: "143-p7b",
          solution: {
            steps: [
              String.raw`$y=x$ রেখায় প্রতিফলনে $(x,\,y)$ বিন্দু $(y,\,x)$ বিন্দুতে যায়।`,
              String.raw`চিত্রের শীর্ষ $(-4,0),(-4,2),(-2,4),(0,2),(0,0),(-2,2)$ এর প্রতিবিম্ব:`,
              String.raw`$$(0,-4),\,(2,-4),\,(4,-2),\,(2,0),\,(0,0),\,(2,-2)$$`,
              "একই ক্রমে যোগ করলে ডান-নিচে একই তীরচিহ্ন পাওয়া যায়।",
            ],
            answer: "চিত্রে সম্পূর্ণ করা হলো",
            figure: "143-p7b-s",
          },
        },
        {
          label: "গ",
          question: String.raw`আয়না রেখা $y=x$।`,
          figure: "143-p7c",
          solution: {
            steps: [
              String.raw`প্রদত্ত বক্ররেখাটি $(-4,4)$ কেন্দ্রিক 4 একক ব্যাসার্ধের একটি চতুর্থাংশ বৃত্তচাপ, যা $(-4,0)$ থেকে $(0,4)$ পর্যন্ত।`,
              String.raw`$y=x$ রেখায় প্রতিফলনে কেন্দ্র $(-4,4)\to(4,-4)$, প্রান্ত $(-4,0)\to(0,-4)$ এবং $(0,4)\to(4,0)$ যায়।`,
              String.raw`তাই $(4,-4)$ কেন্দ্র করে 4 একক ব্যাসার্ধে $(0,-4)$ থেকে $(4,0)$ পর্যন্ত চাপ আঁকলে চিত্রটি সম্পূর্ণ হয়।`,
            ],
            answer: "চিত্রে সম্পূর্ণ করা হলো",
            figure: "143-p7c-s",
          },
        },
      ],
    },
    {
      id: 8,
      group: C143_DRAW,
      question: "চিত্রের ঘূর্ণন প্রতিসমতা নির্ণয় করো:",
      figure: "143-p8",
      solution: {
        steps: [
          String.raw`প্রতিটি চিত্রকে $\times$ চিহ্নিত কেন্দ্রের চারপাশে ঘোরালে এক পূর্ণ ঘূর্ণনে যতবার চিত্রটি আদি অবস্থানের মতো দেখায় সেটিই মাত্রা, আর ঘূর্ণন কোণ $=360^{\circ}\div\text{মাত্রা}$।`,
          String.raw`[[table]]
চিত্র | মাত্রা | ঘূর্ণন কোণ
(ক) যোগচিহ্ন | $4$ | $90^{\circ}$
(খ) সুষম পঞ্চভুজ | $5$ | $72^{\circ}$
(গ) ছয় কোণা তারা | $6$ | $60^{\circ}$
(ঘ) তিন বাহুর ঘূর্ণি | $3$ | $120^{\circ}$
(ঙ) দুই ব্যাসসহ বৃত্ত | $4$ | $90^{\circ}$
(চ) সমবাহু ত্রিভুজ | $3$ | $120^{\circ}$`,
          String.raw`(ঙ) তে বৃত্ত একা থাকলে মাত্রা অসীম হতো, কিন্তু পরস্পর লম্ব দুইটি ব্যাস $90^{\circ}$ পরপর মেলে, তাই মাত্রা 4।`,
        ],
        answer: "(ক) 4 (খ) 5 (গ) 6 (ঘ) 3 (ঙ) 4 (চ) 3",
      },
    },
    {
      id: 9,
      group: C143_DRAW,
      question: "ইংরেজি বর্ণমালার যে সকল বর্ণের:",
      parts: [
        {
          label: "ক",
          question: "অনুভূমিক আয়না সাপেক্ষে প্রতিফলন প্রতিসমতা রয়েছে সেগুলো আঁকো।",
          solution: {
            steps: [
              "বর্ণের মাঝ বরাবর একটি অনুভূমিক রেখায় আয়না ধরলে উপরের অর্ধেকের প্রতিবিম্ব নিচের অর্ধেকের সাথে মিলে যায় — এমন বড় হাতের বর্ণ:",
              "B, C, D, E, H, I, K, O, X",
            ],
            answer: "B, C, D, E, H, I, K, O, X",
            figure: "143-p9a",
          },
        },
        {
          label: "খ",
          question: "উল্লম্ব আয়না সাপেক্ষে প্রতিফলন প্রতিসমতা রয়েছে সেগুলো আঁকো।",
          solution: {
            steps: [
              "বর্ণের মাঝ বরাবর একটি উল্লম্ব রেখায় আয়না ধরলে বাম অর্ধেকের প্রতিবিম্ব ডান অর্ধেকের সাথে মিলে যায় — এমন বড় হাতের বর্ণ:",
              "A, H, I, M, O, T, U, V, W, X, Y",
            ],
            answer: "A, H, I, M, O, T, U, V, W, X, Y",
            figure: "143-p9b",
          },
        },
        {
          label: "গ",
          question: "অনুভূমিক ও উল্লম্ব উভয় আয়না সাপেক্ষে প্রতিফলন প্রতিসমতা রয়েছে সেগুলো আঁকো।",
          solution: {
            steps: [
              "(ক) ও (খ) — দুই তালিকাতেই যে বর্ণগুলো আছে, সেগুলোর দুই আয়নাতেই প্রতিসমতা রয়েছে:",
              "H, I, O, X",
            ],
            answer: "H, I, O, X",
            figure: "143-p9c",
          },
        },
      ],
    },
    {
      id: 10,
      group: C143_DRAW,
      question: "প্রতিসমতা নেই এমন তিনটি চিত্র অঙ্কন করো।",
      solution: {
        steps: [
          "প্রতিসমতা নেই মানে চিত্রটির কোনো প্রতিসাম্য রেখা নেই এবং পূর্ণ এক পাক (360°) ছাড়া কোনো ঘূর্ণনে এটি নিজের সাথে মেলে না, অর্থাৎ ঘূর্ণন মাত্রা কেবল 1।",
          "(১) বিষমবাহু ত্রিভুজ — তিনটি বাহু ও তিনটি কোণই অসমান।",
          "(২) বিষম চতুর্ভুজ — চারটি বাহু ও চারটি কোণ সবই ভিন্ন, কোনো দুই বাহু সমান্তরালও নয়।",
          "(৩) ইংরেজি বর্ণ F — উপরের দুইটি অনুভূমিক দণ্ড অসমান ও একই দিকে, তাই কোনো ভাঁজ বা আংশিক ঘূর্ণনে মেলে না। (J, G, L, P, R ও এরকম।)",
        ],
        answer: "বিষমবাহু ত্রিভুজ, বিষম চতুর্ভুজ ও বর্ণ F — চিত্রে আঁকা হলো",
        figure: "143-p10",
      },
    },
    {
      id: 11,
      group: C143_DRAW,
      question:
        "একটি লেবু আড়াআড়ি কেটে চিত্রের ন্যায় আকার পাওয়া গেল। সমতলীয় চিত্রটির ঘূর্ণন প্রতিসমতা নির্ণয় করো।",
      figure: "143-p11",
      solution: {
        steps: [
          "লেবুর প্রস্থচ্ছেদে কেন্দ্র থেকে চারদিকে ছড়ানো 8টি কোয়া দেখা যায়। কোয়াগুলো সমান ধরলে কেন্দ্রের সাপেক্ষে এক কোয়া পরিমাণ ঘোরালেই চিত্রটি আগের মতো দেখায়।",
          String.raw`$$\text{ঘূর্ণন কোণ}=\frac{360^{\circ}}{8}=45^{\circ}$$`,
          "এক পূর্ণ ঘূর্ণনে চিত্রটি 8 বার আদি অবস্থানের মতো দেখায়, তাই ঘূর্ণন প্রতিসমতার মাত্রা 8। ঘূর্ণন কেন্দ্র লেবুর কেন্দ্র, যেখানে কোয়াগুলো মিলেছে।",
        ],
        answer: String.raw`ঘূর্ণন প্রতিসমতার মাত্রা 8, ঘূর্ণন কোণ $45^{\circ}$`,
        figure: "143-p11s",
      },
    },

    // ─────────────── সারণি ও যুক্তি (১২ – ১৪) ───────────────
    {
      id: 12,
      group: C143_TABLE,
      question: String.raw`শূন্যস্থান পূরণ করো:
[[table]]
চিত্র | ঘূর্ণন কেন্দ্র | ঘূর্ণন প্রতিসমতার মাত্রা | ঘূর্ণন প্রতিসমতার কোণ
বর্গ | | |
আয়ত | | |
রম্বস | | |
সমবাহু ত্রিভুজ | | |
অর্ধবৃত্ত | | |
সুষম পঞ্চভুজ | | |`,
      solution: {
        steps: [
          String.raw`প্রতিটি চিত্রে ঘূর্ণন কোণ $=360^{\circ}\div\text{মাত্রা}$।`,
          String.raw`[[table]]
চিত্র | ঘূর্ণন কেন্দ্র | মাত্রা | কোণ
বর্গ | কর্ণদ্বয়ের ছেদবিন্দু | $4$ | $90^{\circ}$
আয়ত | কর্ণদ্বয়ের ছেদবিন্দু | $2$ | $180^{\circ}$
রম্বস | কর্ণদ্বয়ের ছেদবিন্দু | $2$ | $180^{\circ}$
সমবাহু ত্রিভুজ | মধ্যমাত্রয়ের ছেদবিন্দু | $3$ | $120^{\circ}$
অর্ধবৃত্ত | নেই (কেবল পূর্ণ ঘূর্ণন) | $1$ | $360^{\circ}$
সুষম পঞ্চভুজ | কেন্দ্র (সমদ্বিখণ্ডকগুলোর ছেদবিন্দু) | $5$ | $72^{\circ}$`,
          "অর্ধবৃত্তকে যেকোনো বিন্দুর চারপাশে 360° এর কম ঘোরালে বাঁকা অংশ ও ব্যাসের অবস্থান বদলে যায়, তাই এর ঘূর্ণন প্রতিসমতা নেই — মাত্রা 1।",
        ],
        answer: "উপরের সারণিতে পূরণ করা হলো",
      },
    },
    {
      id: 13,
      group: C143_TABLE,
      question:
        "যে সকল চতুর্ভুজের রেখা প্রতিসমতা ও 1 এর অধিক মাত্রার ঘূর্ণন প্রতিসমতা রয়েছে, এদের তালিকা করো।",
      solution: {
        steps: [
          String.raw`[[table]]
চতুর্ভুজ | প্রতিসাম্য রেখা | ঘূর্ণন মাত্রা | দুটোই আছে?
বর্গ | ৪টি | $4$ | হ্যাঁ
আয়ত | ২টি (দুই মধ্যরেখা) | $2$ | হ্যাঁ
রম্বস | ২টি (দুই কর্ণ) | $2$ | হ্যাঁ
সামান্তরিক | নেই | $2$ | না
ঘুড়ি | ১টি | $1$ | না
সমদ্বিবাহু ট্রাপিজিয়াম | ১টি | $1$ | না`,
          "সাধারণ সামান্তরিকের ঘূর্ণন আছে কিন্তু প্রতিসাম্য রেখা নেই; ঘুড়ি ও সমদ্বিবাহু ট্রাপিজিয়ামের প্রতিসাম্য রেখা আছে কিন্তু ঘূর্ণন নেই। দুই শর্তই পূরণ করে কেবল বর্গ, আয়ত ও রম্বস।",
        ],
        answer: "বর্গ, আয়ত ও রম্বস",
        figure: "143-p13",
      },
    },
    {
      id: 14,
      group: C143_TABLE,
      question: String.raw`1 এর অধিক মাত্রার ঘূর্ণন প্রতিসমতা রয়েছে এরূপ চিত্রের ঘূর্ণন কোণ $18^{\circ}$ হতে পারে কি? তোমার উত্তরের পক্ষে যুক্তি দাও।`,
      solution: {
        steps: [
          String.raw`মাত্রা $n$ হলে ক্ষুদ্রতম ঘূর্ণন কোণ $\dfrac{360^{\circ}}{n}$; অর্থাৎ ঘূর্ণন কোণ দিয়ে $360^{\circ}$ নিঃশেষে বিভাজ্য হতে হবে, যেন কয়েকবার ঘুরিয়ে ঠিক এক পূর্ণ পাকে ফেরা যায়।`,
          String.raw`$$\frac{360^{\circ}}{18^{\circ}}=20,\;\text{একটি পূর্ণসংখ্যা}$$`,
          String.raw`সুতরাং $18^{\circ}$ ঘূর্ণন কোণ হতে পারে; তখন ঘূর্ণন প্রতিসমতার মাত্রা $20$, যা 1 এর অধিক। যেমন, সুষম বিংশভুজ (২০ বাহুর সুষম বহুভুজ) বা ২০ পাখার একটি চাকা $18^{\circ}$ করে ঘোরালে প্রতিবার আগের মতো দেখায়।`,
        ],
        answer: String.raw`হ্যাঁ, পারে — তখন মাত্রা $360^{\circ}\div18^{\circ}=20$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (১৫ – ১৮) ───────────────
    {
      id: 15,
      group: C143_MODEL_MCQ,
      question: String.raw`$\triangle ABC$ ও $\triangle PQR$ এর ক্ষেত্রফল ও উচ্চতা সমানুপাতিক। $\triangle ABC$ এর উচ্চতা $a$ একক হলে, $\triangle PQR$ এর উচ্চতা কত একক?
ক) $a$  খ) $2a$  গ) $3a$  ঘ) $4a$`,
      solution: {
        steps: [
          String.raw`ক্ষেত্রফল ও উচ্চতা সমানুপাতিক হয় তখনই, যখন ভূমি দুইটি সমান: $\dfrac{\triangle ABC}{\triangle PQR}=\dfrac{\tfrac12 b\,a}{\tfrac12 b\,h}=\dfrac{a}{h}$।`,
          String.raw`এ থেকে $h$ এর একটি নির্দিষ্ট মান পেতে ক্ষেত্রফলের অনুপাত জানা দরকার, যা প্রশ্নে নেই। বিকল্পগুলোর মধ্যে কেবল ত্রিভুজ দুইটির ক্ষেত্রফল সমান ধরলেই (প্রশ্নের অভিপ্রায়) উত্তর নির্দিষ্ট হয়: $\dfrac{a}{h}=1\Rightarrow h=a$।`,
        ],
        answer: String.raw`ক) $a$ (ক্ষেত্রফল সমান ধরে)`,
      },
    },
    {
      id: 16,
      group: C143_MODEL_MCQ,
      question: String.raw`সমতলীয় জ্যামিতিতে —
(i) ত্রিভুজ হলো সবচেয়ে কম সংখ্যক রেখাংশ দিয়ে গঠিত বহুভুজ।
(ii) চার বাহু বিশিষ্ট সুষম বহুভুজ হলো রম্বস।
(iii) সুষম পঞ্চভুজের বাহুগুলো সমান হলেও কোণগুলো অসমান।
নিচের কোনটি সঠিক?
ক) $i$  খ) $i$ ও $ii$  গ) $i$ ও $iii$  ঘ) $i,\,ii$ ও $iii$`,
      solution: {
        steps: [
          "(i) তিনটির কম রেখাংশ দিয়ে কোনো ক্ষেত্র আবদ্ধ করা যায় না — সঠিক।",
          "(ii) সুষম বহুভুজের বাহু ও কোণ দুটোই সমান। রম্বসের বাহু সমান হলেও কোণ সাধারণত সমান নয়; চার বাহুর সুষম বহুভুজ হলো বর্গক্ষেত্র — ভুল।",
          "(iii) সুষম পঞ্চভুজের প্রতিটি কোণ 108° — কোণগুলো সমান, তাই ভুল।",
        ],
        answer: String.raw`ক) $i$`,
      },
    },
    {
      id: 17,
      group: C143_MODEL_MCQ,
      question: String.raw`পাশের চিত্রের তথ্যানুসারে ১৭ ও ১৮ নং প্রশ্নের উত্তর দাও:
$\triangle ABC$ এর উচ্চতা ও ভূমির অনুপাত কত?
ক) $\dfrac12$  খ) $\dfrac45$  গ) $\dfrac25$  ঘ) $\dfrac54$`,
      figure: "143-m3",
      solution: {
        steps: [
          String.raw`$AD\perp BC$, তাই উচ্চতা $AD=4$ এবং ভূমি $BC=10$।`,
          String.raw`$$\frac{\text{উচ্চতা}}{\text{ভূমি}}=\frac{4}{10}=\frac25$$`,
        ],
        answer: String.raw`গ) $\dfrac25$`,
      },
    },
    {
      id: 18,
      group: C143_MODEL_MCQ,
      question: String.raw`$\triangle ABD$ এর ক্ষেত্রফল কত বর্গ একক?
ক) 6  খ) 20  গ) 40  ঘ) 50`,
      figure: "143-m3",
      solution: {
        steps: [
          String.raw`সমকোণী $\triangle ABD$ এ অতিভুজ $AB=5$, $AD=4$, তাই পিথাগোরাসের উপপাদ্য অনুযায়ী`,
          String.raw`$$BD=\sqrt{5^2-4^2}=\sqrt{9}=3$$`,
          String.raw`$$\triangle ABD=\tfrac12\times BD\times AD=\tfrac12\times3\times4=6\text{ বর্গ একক}$$`,
        ],
        answer: "ক) 6",
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল (১৯) ───────────────
    {
      id: 19,
      group: C143_MODEL_CQ,
      question: String.raw`$\triangle ABC$ এর $\angle A$ এর সমদ্বিখণ্ডক $AD$, $BC$ কে $D$ বিন্দুতে ছেদ করেছে। $DA$ এর সমান্তরাল $CE$ রেখাংশ বর্ধিত $BA$ বাহুকে $E$ বিন্দুতে ছেদ করেছে।`,
      figure: "143-m5",
      parts: [
        {
          label: "ক",
          question: String.raw`$\triangle PQR$ ও $\triangle LMN$ এর ভূমি যথাক্রমে $QR$ ও $MN$ এবং $QR=MN$। দেখাও যে, ত্রিভুজদ্বয়ের ক্ষেত্রফলের অনুপাত তাদের উচ্চতাদ্বয়ের অনুপাতের সমান।`,
          solution: {
            steps: [
              String.raw`মনে করি, $QR=MN=b$ এবং $\triangle PQR$ ও $\triangle LMN$ এর উচ্চতা যথাক্রমে $h$ ও $k$। তাহলে`,
              String.raw`$$\frac{\triangle PQR}{\triangle LMN}=\frac{\tfrac12\times b\times h}{\tfrac12\times b\times k}=\frac{h}{k}$$`,
              "অর্থাৎ ক্ষেত্রফলের অনুপাত উচ্চতাদ্বয়ের অনুপাতের সমান।",
            ],
            answer: String.raw`$\triangle PQR:\triangle LMN=h:k$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো যে, $BD:DC=BA:AC$।`,
          solution: {
            steps: [
              String.raw`প্রমাণ: ধাপ ১. $DA\parallel CE$ এবং $BE$ ছেদক, তাই $\angle AEC=\angle BAD$ [অনুরূপ কোণ]।`,
              String.raw`$DA\parallel CE$ এবং $AC$ ছেদক, তাই $\angle ACE=\angle CAD$ [একান্তর কোণ]।`,
              String.raw`ধাপ ২. কিন্তু $\angle BAD=\angle CAD$ [$AD$ সমদ্বিখণ্ডক], তাই $\angle AEC=\angle ACE$, সুতরাং $AE=AC$।`,
              String.raw`ধাপ ৩. $\triangle BCE$ এ $DA\parallel CE$, তাই [উপপাদ্য ২৮]`,
              String.raw`$$\frac{BD}{DC}=\frac{BA}{AE}=\frac{BA}{AC}\qquad\left[\,\because\;AE=AC\,\right]$$`,
              String.raw`অর্থাৎ, $BD:DC=BA:AC$।`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`$BC$ এর সমান্তরাল কোনো রেখাংশ $AB$ ও $AC$ কে যথাক্রমে $P$ ও $Q$ বিন্দুতে ছেদ করলে, প্রমাণ করো যে, $BD:DC=BP:CQ$।`,
          solution: {
            steps: [
              String.raw`প্রমাণ: ধাপ ১. (খ) থেকে`,
              String.raw`$$\frac{BD}{DC}=\frac{BA}{AC}\qquad\cdots(1)$$`,
              String.raw`ধাপ ২. $\triangle ABC$ এ $PQ\parallel BC$, তাই [অনুসিদ্ধান্ত ১]`,
              String.raw`$$\frac{AB}{BP}=\frac{AC}{CQ}\;\Rightarrow\;\frac{BA}{AC}=\frac{BP}{CQ}\qquad\cdots(2)\qquad\left[\,\text{একান্তরকরণ}\,\right]$$`,
              String.raw`ধাপ ৩. $(1)$ ও $(2)$ থেকে,`,
              String.raw`$$\frac{BD}{DC}=\frac{BP}{CQ},\quad\text{অর্থাৎ}\quad BD:DC=BP:CQ$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২০) ───────────────
    {
      id: 20,
      group: C143_MODEL_SA,
      question: "নিচের প্রশ্নগুলোর উত্তর দাও:",
      parts: [
        {
          label: "ক",
          question: String.raw`$\triangle ABC$-এর $BC$ বাহুর সমান্তরাল $DE$ রেখাংশ $AB$ ও $AC$ বাহুকে যথাক্রমে $D$ ও $E$ বিন্দুতে ছেদ করে। $AB:AD=2:1$ হলে দেখাও যে, $DE:BC=1:2$।`,
          figure: "143-m6",
          solution: {
            steps: [
              String.raw`$DE\parallel BC$, তাই $\angle ADE=\angle ABC$ ও $\angle AED=\angle ACB$ [অনুরূপ কোণ] এবং $\angle A$ সাধারণ। সুতরাং $\triangle ADE$ ও $\triangle ABC$ সদৃশকোণী।`,
              String.raw`অনুরূপ বাহুগুলো সমানুপাতিক [উপপাদ্য ৩২]:`,
              String.raw`$$\frac{DE}{BC}=\frac{AD}{AB}=\frac12$$`,
              String.raw`অর্থাৎ, $DE:BC=1:2$।`,
            ],
            answer: String.raw`$DE:BC=1:2$`,
          },
        },
        {
          label: "খ",
          question: String.raw`$\triangle PQR$ ও $\triangle LMN$-এর উচ্চতা সমান হলে দেখাও যে, তাদের ক্ষেত্রফলদ্বয়ের অনুপাত তাদের ভূমিদ্বয়ের অনুপাতের সমান।`,
          solution: {
            steps: [
              String.raw`মনে করি, উভয় ত্রিভুজের উচ্চতা $h$ এবং ভূমি যথাক্রমে $QR$ ও $MN$। তাহলে`,
              String.raw`$$\frac{\triangle PQR}{\triangle LMN}=\frac{\tfrac12\times QR\times h}{\tfrac12\times MN\times h}=\frac{QR}{MN}$$`,
            ],
            answer: String.raw`$\triangle PQR:\triangle LMN=QR:MN$`,
          },
        },
        {
          label: "গ",
          question: String.raw`$ABC$ এবং $DEF$ সদৃশকোণী ত্রিভুজ এবং একজোড়া অনুরূপ বাহু $AB$ ও $DE$ এর অনুপাত $3:4$ হলে, $\triangle ABC:\triangle DEF$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সদৃশকোণী ত্রিভুজ সদৃশ, আর সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত অনুরূপ বাহুর বর্গের অনুপাত [উপপাদ্য ৩৫]:`,
              String.raw`$$\frac{\triangle ABC}{\triangle DEF}=\frac{AB^2}{DE^2}=\frac{3^2}{4^2}=\frac{9}{16}$$`,
            ],
            answer: String.raw`$\triangle ABC:\triangle DEF=9:16$`,
          },
        },
      ],
    },
  ],
};
