// components/chapter15Data.ts
//
// ─────────────────────────────────────────────────────────────────────────────
// অধ্যায় ১৫ · ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য
// ─────────────────────────────────────────────────────────────────────────────
//
// Source: NCTB Secondary (Bangla Version) 2026, Class 9-10 Mathematics.
// অনুশীলনী ১৫ (book pages ২৯১-২৯২), followed by the chapter's নমুনা প্রশ্ন
// (book pages ২৯২-২৯৩), numbered on from the exercise.
//
// অধ্যায় ৮ এর মতো এখানেও বইয়ে কোনো উদাহরণ নেই — আছে উপপাদ্য ৩৬–৩৮ ও সম্পাদ্য
// ১৩–১৫, আর অনুশীলনীর প্রতিটি প্রমাণ এদের উপর দাঁড়িয়ে। তাই অনুশীলনীর আগে
// এগুলো বইয়ের প্রমাণসহ রাখা হয়েছে। চিত্রগুলো `figures/scenes15.ts` এ; যে
// ক্ষেত্র দুইটির তুলনা হচ্ছে সেগুলো চিত্রে রং করা। অঙ্কনের প্রশ্নে সম্পূর্ণ
// চিত্রটিই উত্তর, তাই তা সমাধানের ভেতরে রাখা হয়েছে।
//
// The file sits apart from chaptersData.ts only to keep that file from growing
// further; the shapes are the same.

import type { Exercise } from "./chaptersData";

const C15_MCQ = "বহুনির্বাচনি প্রশ্ন (১)";
const C15_PROVE = "প্রমাণ ও নির্ণয় (২ – ১৩)";
const C15_CQ = "সৃজনশীল (১৪)";
const C15_MODEL_MCQ = "নমুনা প্রশ্ন — বহুনির্বাচনি (১৫ – ১৮)";
const C15_MODEL_CQ = "নমুনা প্রশ্ন — সৃজনশীল (১৯)";
const C15_MODEL_SA = "নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২০)";

export const exercise15: Exercise = {
  id: "15",
  bnId: "অনুশীলনী ১৫",
  title: "ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য",
  bookPages: "২৮৫ – ২৯৩",
  formulas: [
    {
      title: "সমতলক্ষেত্রের ক্ষেত্রফল",
      formulas: [
        {
          statement: String.raw`$$\text{আয়তক্ষেত্র}=ab,\qquad\text{বর্গক্ষেত্র}=a^{2}$$`,
          note: String.raw`দৈর্ঘ্য $a$ ও প্রস্থ $b$ একক হলে আয়তক্ষেত্রের ক্ষেত্রফল $ab$ বর্গ একক; বাহু $a$ একক হলে বর্গক্ষেত্রের ক্ষেত্রফল $a^{2}$ বর্গ একক। ক্ষেত্রফল মাপা হয় এক একক বাহুর বর্গক্ষেত্রকে একক ধরে।`,
        },
        {
          statement: String.raw`$$\triangle\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times\text{ভূমি}\times\text{উচ্চতা}$$`,
          note: "এ অধ্যায়ের প্রায় প্রতিটি প্রমাণ এই সূত্রে এসে দাঁড়ায়: ভূমি সমান আর উচ্চতা সমান হলে ক্ষেত্রফলও সমান।",
        },
        {
          statement: String.raw`$$\triangle ABC\cong\triangle DEF\;\Rightarrow\;\triangle ABC=\triangle DEF$$`,
          note: String.raw`দুইটি ক্ষেত্রের ক্ষেত্রফল সমান বোঝাতে তাদের মধ্যে "$=$" চিহ্ন বসে। সর্বসম ত্রিভুজের ক্ষেত্রফল সমান, কিন্তু উল্টোটা সত্য নয় — ক্ষেত্রফল সমান হলেই ত্রিভুজ দুইটি সর্বসম হয় না।`,
        },
      ],
    },
    {
      title: "ক্ষেত্রফল সম্পর্কিত উপপাদ্য",
      formulas: [
        {
          statement: String.raw`উপপাদ্য ৩৬: একই ভূমি ও একই সমান্তরাল যুগলের মধ্যে $\Rightarrow\;\triangle ABC=\triangle DBC$`,
          note: "একই ভূমির উপর এবং একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত সকল ত্রিভুজক্ষেত্রের ক্ষেত্রফল সমান।",
        },
        {
          statement: "অনুসিদ্ধান্ত ১",
          note: "একই ভূমির একই পাশে অবস্থিত সকল ত্রিভুজক্ষেত্রের ক্ষেত্রফল সমান হলে, এরা একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত হবে।",
        },
        {
          statement: String.raw`অনুসিদ্ধান্ত ২: $\;\triangle=\tfrac{1}{2}\,\text{সামান্তরিক}$`,
          note: "কোনো ত্রিভুজ ও সামান্তরিক একই ভূমি ও একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত হলে, ত্রিভুজের ক্ষেত্রফল সামান্তরিকের ক্ষেত্রফলের অর্ধেক। (কর্ণ সামান্তরিককে দুইটি সর্বসম ত্রিভুজে ভাগ করে।)",
        },
        {
          statement: String.raw`উপপাদ্য ৩৭: $\;\text{সামান্তরিক }ABCD=\text{সামান্তরিক }ABEF$`,
          note: "একই ভূমির উপর এবং একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত সামান্তরিকক্ষেত্রসমূহের ক্ষেত্রফল সমান।",
        },
        {
          statement: String.raw`উপপাদ্য ৩৮ (পিথাগোরাস): $\;AB^{2}=BC^{2}+AC^{2}$`,
          note: String.raw`সমকোণী ত্রিভুজের অতিভুজের উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অপর দুই বাহুর উপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টির সমান। এর উল্টো দিকটিও কাজে লাগে: তিন বাহুর মধ্যে বড়টির বর্গ বাকি দুইটির বর্গের সমষ্টির সমান হলেই ত্রিভুজটি সমকোণী।`,
        },
      ],
    },
    {
      title: "ক্ষেত্রফল সম্পর্কিত সম্পাদ্য",
      formulas: [
        {
          statement: "সম্পাদ্য ১৩: ত্রিভুজ → সামান্তরিক",
          note: String.raw`ত্রিভুজের ভূমিকে সমদ্বিখণ্ডিত করে অর্ধেক ভূমির উপর, শীর্ষ দিয়ে ভূমির সমান্তরাল রেখা পর্যন্ত, প্রদত্ত কোণ $\angle x$ নিয়ে সামান্তরিক আঁকলে তার ক্ষেত্রফল ত্রিভুজের সমান।`,
        },
        {
          statement: "সম্পাদ্য ১৪: চতুর্ভুজ → ত্রিভুজ",
          note: String.raw`কর্ণ $DB$ টেনে $C$ দিয়ে $CE\parallel DB$ আঁকি, যা বর্ধিত $AB$ কে $E$ তে ছেদ করে। $\triangle ADE$ এর ক্ষেত্রফল চতুর্ভুজ $ABCD$ এর সমান।`,
        },
        {
          statement: "সম্পাদ্য ১৫: চতুর্ভুজ → সামান্তরিক",
          note: "প্রথমে সম্পাদ্য ১৪ দিয়ে চতুর্ভুজকে সমান ক্ষেত্রফলের ত্রিভুজে, তারপর সম্পাদ্য ১৩ দিয়ে সেই ত্রিভুজকে প্রদত্ত কোণের সামান্তরিকে রূপান্তর করি।",
        },
      ],
    },
  ],
  examplesTitle: "বইয়ের উপপাদ্য, সম্পাদ্য ও প্রমাণ",
  examples: [
    // উপপাদ্য ৩৬ — book pages ২৮৬-২৮৭.
    {
      id: 36,
      label: "উপপাদ্য",
      question:
        "একই ভূমির উপর এবং একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত সকল ত্রিভুজক্ষেত্রের ক্ষেত্রফল সমান।",
      figure: "15-t36",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABC$ ও $DBC$ ত্রিভুজদ্বয় একই ভূমি $BC$ এর উপর এবং একই সমান্তরাল রেখাযুগল $BC$ ও $AD$ এর মধ্যে অবস্থিত। প্রমাণ করতে হবে যে, $\triangle ABC$ এর ক্ষেত্রফল $=\triangle DBC$ এর ক্ষেত্রফল।`,
          String.raw`অঙ্কন: $BC$ রেখাংশের $B$ ও $C$ বিন্দুতে যথাক্রমে $BE$ ও $CF$ লম্ব আঁকি, যা $DA$ এর বর্ধিতাংশকে $E$ বিন্দুতে এবং $AD$ রেখাকে $F$ বিন্দুতে ছেদ করে। ফলে $EBCF$ একটি আয়তক্ষেত্র তৈরি হয়।`,
          String.raw`প্রমাণ: $\triangle ABC$ এর ভূমি $BC$ এবং উচ্চতা $BE$।`,
          String.raw`$$\therefore\;\triangle ABC\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times BC\times BE\qquad\cdots(i)$$`,
          String.raw`আবার, $\triangle DBC$ এর ভূমি $BC$ এবং উচ্চতা $CF$।`,
          String.raw`$$\therefore\;\triangle DBC\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times BC\times CF=\tfrac{1}{2}\times BC\times BE\qquad\cdots(ii)\quad\left[\,\because\;EBCF\text{ আয়তক্ষেত্র, }CF=BE\,\right]$$`,
          String.raw`$(i)$ ও $(ii)$ তুলনা করে পাই,`,
          String.raw`$$\triangle ABC\text{ এর ক্ষেত্রফল}=\triangle DBC\text{ এর ক্ষেত্রফল}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩৭ — book pages ২৮৭-২৮৮.
    {
      id: 37,
      label: "উপপাদ্য",
      question:
        "একই ভূমির উপর এবং একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত সামান্তরিকক্ষেত্রসমূহের ক্ষেত্রফল সমান।",
      figure: "15-t37",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ ও $ABEF$ সামান্তরিকক্ষেত্র দুইটি একই ভূমি $AB$ এর উপর এবং একই সমান্তরাল রেখাযুগল $AB$ ও $FC$ এর মধ্যে অবস্থিত। প্রমাণ করতে হবে যে, $ABCD$ সামান্তরিকের ক্ষেত্রফল $=ABEF$ সামান্তরিকের ক্ষেত্রফল।`,
          String.raw`অঙ্কন: $A,\,C$ ও $A,\,E$ যোগ করি। $C$ ও $E$ বিন্দু থেকে ভূমি $AB$ ও এর বর্ধিত রেখাংশের উপর $EK$ ও $CL$ লম্ব টানি।`,
          String.raw`প্রমাণ:`,
          String.raw`$$\triangle ABC\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times AB\times CL,\qquad\triangle ABE\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times AB\times EK$$`,
          String.raw`যেহেতু $CL=EK$ [$AL\parallel FC$, দুইটিই সমান্তরাল রেখাদ্বয়ের দূরত্ব],`,
          String.raw`$$\therefore\;\triangle ABC\text{ এর ক্ষেত্রফল}=\triangle ABE\text{ এর ক্ষেত্রফল}$$`,
          String.raw`কর্ণ $AC$ সামান্তরিক $ABCD$ কে এবং কর্ণ $AE$ সামান্তরিক $ABEF$ কে দুইটি সর্বসম ত্রিভুজে ভাগ করে, তাই`,
          String.raw`$$\Rightarrow\;\tfrac{1}{2}\,\text{সামান্তরিক }ABCD\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\,\text{সামান্তরিক }ABEF\text{ এর ক্ষেত্রফল}$$`,
          String.raw`$$\therefore\;ABCD\text{ সামান্তরিকের ক্ষেত্রফল}=ABEF\text{ সামান্তরিকের ক্ষেত্রফল}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // উপপাদ্য ৩৮ — book pages ২৮৮-২৮৯.
    {
      id: 38,
      label: "উপপাদ্য",
      question:
        "পিথাগোরাসের উপপাদ্য: সমকোণী ত্রিভুজের অতিভুজের উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অপর দুই বাহুর উপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টির সমান।",
      figure: "15-t38",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABC$ সমকোণী ত্রিভুজের $\angle ACB$ সমকোণ এবং $AB$ অতিভুজ। প্রমাণ করতে হবে যে, $AB^{2}=BC^{2}+AC^{2}$।`,
          String.raw`অঙ্কন: $AB,\,AC$ এবং $BC$ বাহুর উপর যথাক্রমে $ABED,\;ACGF$ এবং $BCHK$ বর্গক্ষেত্র অঙ্কন করি। $C$ বিন্দু দিয়ে $AD$ বা $BE$ রেখার সমান্তরাল $CL$ রেখা আঁকি; মনে করি, তা $AB$ কে $M$ বিন্দুতে এবং $DE$ কে $L$ বিন্দুতে ছেদ করে। $C,\,D$ এবং $B,\,F$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle CAD$ ও $\triangle BAF$ তে $CA=AF$, $AD=AB$ এবং`,
          String.raw`$$\text{অন্তর্ভুক্ত }\angle CAD=\angle CAB+\angle BAD=\angle CAB+\angle CAF=\text{অন্তর্ভুক্ত }\angle BAF$$`,
          String.raw`$[\angle BAD=\angle CAF=$ এক সমকোণ$]$`,
          String.raw`$$\therefore\;\triangle CAD\cong\triangle BAF\qquad\left[\,\text{বাহু-কোণ-বাহু}\,\right]$$`,
          String.raw`ধাপ ২. $\triangle CAD$ এবং আয়তক্ষেত্র $ADLM$ একই ভূমি $AD$ এর উপর এবং $AD$ ও $CL$ সমান্তরাল রেখাদ্বয়ের মধ্যে অবস্থিত। সুতরাং`,
          String.raw`$$\text{আয়তক্ষেত্র }ADLM=2\,\triangle CAD\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
          String.raw`ধাপ ৩. $\triangle BAF$ এবং বর্গক্ষেত্র $ACGF$ একই ভূমি $AF$ এর উপর এবং $AF$ ও $BG$ সমান্তরাল রেখাদ্বয়ের মধ্যে অবস্থিত। সুতরাং`,
          String.raw`$$\text{বর্গক্ষেত্র }ACGF=2\,\triangle FAB=2\,\triangle CAD\qquad\left[\,\text{অনুসিদ্ধান্ত }২\text{ ও ধাপ }১\,\right]$$`,
          String.raw`ধাপ ৪. ধাপ ২ ও ৩ থেকে,`,
          String.raw`$$\text{আয়তক্ষেত্র }ADLM=\text{বর্গক্ষেত্র }ACGF$$`,
          String.raw`ধাপ ৫. অনুরূপভাবে $C,\,E$ ও $A,\,K$ যোগ করে প্রমাণ করা যায় যে,`,
          String.raw`$$\text{আয়তক্ষেত্র }BELM=\text{বর্গক্ষেত্র }BCHK$$`,
          String.raw`ধাপ ৬. ধাপ ৪ ও ৫ যোগ করে,`,
          String.raw`$$\text{আয়তক্ষেত্র }(ADLM+BELM)=\text{বর্গক্ষেত্র }ACGF+\text{বর্গক্ষেত্র }BCHK$$`,
          String.raw`$$\text{বা, বর্গক্ষেত্র }ABED=\text{বর্গক্ষেত্র }ACGF+\text{বর্গক্ষেত্র }BCHK$$`,
          String.raw`$$\text{অর্থাৎ, }AB^{2}=BC^{2}+AC^{2}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    // সম্পাদ্য ১৩ — book page ২৮৯.
    {
      id: 13,
      label: "সম্পাদ্য",
      question:
        "এমন একটি সামান্তরিক আঁকতে হবে, যার একটি কোণ একটি নির্দিষ্ট কোণের সমান এবং যা দ্বারা সীমাবদ্ধ ক্ষেত্র একটি ত্রিভুজক্ষেত্রের ক্ষেত্রফলের সমান।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABC$ একটি নির্দিষ্ট ত্রিভুজক্ষেত্র এবং $\angle x$ একটি নির্দিষ্ট কোণ। এরূপ সামান্তরিক আঁকতে হবে, যার একটি কোণ $\angle x$ এর সমান এবং ক্ষেত্রফল $\triangle ABC$ এর ক্ষেত্রফলের সমান।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. $BC$ বাহুকে $E$ বিন্দুতে সমদ্বিখণ্ডিত করি।`,
          String.raw`২. $EC$ রেখাংশের $E$ বিন্দুতে $\angle x$ এর সমান $\angle CEF$ আঁকি।`,
          String.raw`৩. $A$ বিন্দু দিয়ে $BC$ বাহুর সমান্তরাল $AG$ রশ্মি টানি; মনে করি তা $EF$ রশ্মিকে $F$ বিন্দুতে ছেদ করে।`,
          String.raw`৪. $C$ বিন্দু দিয়ে $EF$ রেখাংশের সমান্তরাল $CG$ রশ্মি টানি; মনে করি তা $AG$ রশ্মিকে $G$ বিন্দুতে ছেদ করে। তাহলে $ECGF$ ই উদ্দিষ্ট সামান্তরিক।`,
          String.raw`প্রমাণ: $A,\,E$ যোগ করি।`,
          String.raw`$$\triangle ABE\text{ এর ক্ষেত্রফল}=\triangle AEC\text{ এর ক্ষেত্রফল}\qquad\left[\,\because\;\text{ভূমি }BE=\text{ভূমি }EC\text{ এবং উভয়ের একই উচ্চতা}\,\right]$$`,
          String.raw`$$\therefore\;\triangle ABC\text{ এর ক্ষেত্রফল}=2\,\triangle AEC\text{ এর ক্ষেত্রফল}$$`,
          String.raw`আবার, সামান্তরিক $ECGF$ ও $\triangle AEC$ একই ভূমি $EC$ এর উপর এবং $EC\parallel AG$ এর মধ্যে অবস্থিত, তাই`,
          String.raw`$$\text{সামান্তরিক }ECGF\text{ এর ক্ষেত্রফল}=2\,\triangle AEC\text{ এর ক্ষেত্রফল}\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
          String.raw`$$\therefore\;\text{সামান্তরিক }ECGF\text{ এর ক্ষেত্রফল}=\triangle ABC\text{ এর ক্ষেত্রফল}$$`,
          String.raw`আবার, $\angle CEF=\angle x$ [অঙ্কন অনুসারে]।`,
        ],
        answer: String.raw`সামান্তরিক $ECGF$ ই নির্ণেয় সামান্তরিক।`,
        figure: "15-c13",
      },
    },
    // সম্পাদ্য ১৪ — book page ২৯০.
    {
      id: 14,
      label: "সম্পাদ্য",
      question:
        "এমন একটি ত্রিভুজ আঁকতে হবে যা দ্বারা সীমাবদ্ধ ক্ষেত্রের ক্ষেত্রফল একটি নির্দিষ্ট চতুর্ভুজক্ষেত্রের ক্ষেত্রফলের সমান।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ একটি চতুর্ভুজক্ষেত্র। এরূপ একটি ত্রিভুজ আঁকতে হবে যা দ্বারা সীমাবদ্ধ ক্ষেত্রের ক্ষেত্রফল $ABCD$ চতুর্ভুজক্ষেত্রের ক্ষেত্রফলের সমান।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. $D,\,B$ যোগ করি।`,
          String.raw`২. $C$ বিন্দু দিয়ে $CE\parallel DB$ টানি। মনে করি, তা $AB$ বাহুর বর্ধিতাংশকে $E$ বিন্দুতে ছেদ করে।`,
          String.raw`৩. $D,\,E$ যোগ করি। তাহলে $\triangle DAE$ ই উদ্দিষ্ট ত্রিভুজ।`,
          String.raw`প্রমাণ: $BD$ ভূমির উপর $\triangle BDC$ ও $\triangle BDE$ অবস্থিত এবং $DB\parallel CE$ [অঙ্কন অনুসারে]।`,
          String.raw`$$\therefore\;\triangle BDC\text{ এর ক্ষেত্রফল}=\triangle BDE\text{ এর ক্ষেত্রফল}\qquad\left[\,\text{উপপাদ্য }৩৬\,\right]$$`,
          String.raw`উভয় পক্ষে $\triangle ABD$ যোগ করে,`,
          String.raw`$$\triangle BDC+\triangle ABD=\triangle BDE+\triangle ABD$$`,
          String.raw`$$\therefore\;\text{চতুর্ভুজক্ষেত্র }ABCD\text{ এর ক্ষেত্রফল}=\triangle ADE\text{ এর ক্ষেত্রফল}$$`,
          String.raw`বিশেষ দ্রষ্টব্য: অন্য কর্ণ বা অন্য বাহু বেছে নিয়ে এই পদ্ধতিতে একই ক্ষেত্রফলের অসংখ্য ত্রিভুজ আঁকা যায়।`,
        ],
        answer: String.raw`$\triangle ADE$ ই নির্ণেয় ত্রিভুজ।`,
        figure: "15-c14",
      },
    },
    // সম্পাদ্য ১৫ — book pages ২৯০-২৯১.
    {
      id: 15,
      label: "সম্পাদ্য",
      question:
        "এমন একটি সামান্তরিক আঁকতে হবে যার একটি কোণ দেওয়া আছে এবং তা দ্বারা সীমাবদ্ধ ক্ষেত্র একটি নির্দিষ্ট চতুর্ভুজক্ষেত্রের ক্ষেত্রফলের সমান।",
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ একটি নির্দিষ্ট চতুর্ভুজক্ষেত্র এবং $\angle x$ একটি নির্দিষ্ট কোণ। এরূপ একটি সামান্তরিক আঁকতে হবে যার একটি কোণ $\angle x$ এর সমান এবং ক্ষেত্রফল $ABCD$ এর ক্ষেত্রফলের সমান।`,
          String.raw`অঙ্কনের বিবরণ:`,
          String.raw`১. $B,\,D$ যোগ করি। $C$ বিন্দু দিয়ে $CF\parallel DB$ টানি এবং মনে করি, $CF$ বাহু $AB$ এর বর্ধিতাংশকে $F$ বিন্দুতে ছেদ করে।`,
          String.raw`২. $AF$ রেখাংশের মধ্যবিন্দু $G$ নির্ণয় করি।`,
          String.raw`৩. $AG$ রেখাংশের $A$ বিন্দুতে $\angle x$ এর সমান $\angle GAK$ আঁকি এবং $G$ বিন্দু দিয়ে $GH\parallel AK$ টানি।`,
          String.raw`৪. $D$ বিন্দু দিয়ে $KDH\parallel AG$ টানি এবং মনে করি, তা $AK$ ও $GH$ কে যথাক্রমে $K$ ও $H$ বিন্দুতে ছেদ করে। তাহলে $AGHK$ ই উদ্দিষ্ট সামান্তরিক।`,
          String.raw`প্রমাণ: $D,\,F$ যোগ করি। $AGHK$ একটি সামান্তরিক [অঙ্কন অনুসারে], যেখানে $\angle GAK=\angle x$।`,
          String.raw`সম্পাদ্য ১৪ অনুসারে,`,
          String.raw`$$\triangle DAF\text{ এর ক্ষেত্রফল}=\text{চতুর্ভুজক্ষেত্র }ABCD\text{ এর ক্ষেত্রফল}$$`,
          String.raw`আবার, $G,\;AF$ এর মধ্যবিন্দু এবং সামান্তরিক $AGHK$ ও $\triangle DAF$ একই সমান্তরাল যুগল $AF$ ও $KH$ এর মধ্যে অবস্থিত। সম্পাদ্য ১৩ অনুসারে,`,
          String.raw`$$\text{সামান্তরিক }AGHK\text{ এর ক্ষেত্রফল}=\triangle DAF\text{ এর ক্ষেত্রফল}$$`,
          String.raw`$$\therefore\;\text{সামান্তরিক }AGHK=\text{চতুর্ভুজক্ষেত্র }ABCD$$`,
        ],
        answer: String.raw`$AGHK$ ই নির্ণেয় সামান্তরিক।`,
        figure: "15-c15",
      },
    },
  ],
  problems: [
    // ─────────────── বহুনির্বাচনি (১) ───────────────
    {
      id: 1,
      group: C15_MCQ,
      question: String.raw`ত্রিভুজের তিনটি বাহুর দৈর্ঘ্য দেওয়া আছে; নিচের কোন ক্ষেত্রে সমকোণী ত্রিভুজ অঙ্কন সম্ভব নয়?
ক) 3 সে.মি., 4 সে.মি., 5 সে.মি.  খ) 6 সে.মি., 8 সে.মি., 10 সে.মি.
গ) 5 সে.মি., 7 সে.মি., 9 সে.মি.  ঘ) 5 সে.মি., 12 সে.মি., 13 সে.মি.`,
      solution: {
        steps: [
          String.raw`ত্রিভুজটি সমকোণী হবে কেবল যদি বৃহত্তম বাহুর বর্গ বাকি দুই বাহুর বর্গের সমষ্টির সমান হয় [পিথাগোরাসের উপপাদ্য ও তার বিপরীত]।`,
          String.raw`$$\text{ক) }3^{2}+4^{2}=9+16=25=5^{2}\;\checkmark$$`,
          String.raw`$$\text{খ) }6^{2}+8^{2}=36+64=100=10^{2}\;\checkmark$$`,
          String.raw`$$\text{গ) }5^{2}+7^{2}=25+49=74\neq81=9^{2}$$`,
          String.raw`$$\text{ঘ) }5^{2}+12^{2}=25+144=169=13^{2}\;\checkmark$$`,
          String.raw`সুতরাং (গ) তে সমকোণী ত্রিভুজ অঙ্কন সম্ভব নয়। ($74<81$, তাই এটি একটি স্থূলকোণী ত্রিভুজ।)`,
        ],
        answer: "গ) 5 সে.মি., 7 সে.মি., 9 সে.মি.",
      },
    },

    // ─────────────── প্রমাণ ও নির্ণয় (২ – ১৩) ───────────────
    {
      id: 2,
      group: C15_PROVE,
      question:
        "প্রমাণ করো যে, ত্রিভুজের যে কোনো মধ্যমা ত্রিভুজক্ষেত্রটিকে সমান ক্ষেত্রফল বিশিষ্ট দুইটি ত্রিভুজক্ষেত্রে বিভক্ত করে।",
      figure: "15-p2",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $AD$ একটি মধ্যমা, অর্থাৎ $D,\;BC$ এর মধ্যবিন্দু। প্রমাণ করতে হবে যে, $\triangle ABD$ এর ক্ষেত্রফল $=\triangle ADC$ এর ক্ষেত্রফল।`,
          String.raw`অঙ্কন: $A$ থেকে $BC$ এর উপর $AE$ লম্ব আঁকি।`,
          String.raw`প্রমাণ: $\triangle ABD$ ও $\triangle ADC$ উভয়ের শীর্ষ $A$ এবং ভূমি একই রেখা $BC$ এর উপর, তাই উভয়ের উচ্চতা $AE$।`,
          String.raw`$$\triangle ABD\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times BD\times AE$$`,
          String.raw`$$\triangle ADC\text{ এর ক্ষেত্রফল}=\tfrac{1}{2}\times DC\times AE$$`,
          String.raw`কিন্তু $BD=DC$ [$\because\;D,\;BC$ এর মধ্যবিন্দু],`,
          String.raw`$$\therefore\;\triangle ABD\text{ এর ক্ষেত্রফল}=\triangle ADC\text{ এর ক্ষেত্রফল}$$`,
          String.raw`যেকোনো শীর্ষ থেকে টানা মধ্যমার ক্ষেত্রে যুক্তি একই।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 3,
      group: C15_PROVE,
      question:
        "প্রমাণ করো যে, কোনো বর্গক্ষেত্র তার কর্ণের উপর অঙ্কিত বর্গক্ষেত্রের অর্ধেক।",
      figure: "15-p3",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ একটি বর্গক্ষেত্র, যার প্রতিটি বাহু $a$ এবং $AC$ একটি কর্ণ। $AC$ এর উপর $ACEF$ বর্গক্ষেত্র অঙ্কিত। প্রমাণ করতে হবে যে, বর্গক্ষেত্র $ABCD=\tfrac{1}{2}$ বর্গক্ষেত্র $ACEF$।`,
          String.raw`প্রমাণ: বর্গের প্রতিটি কোণ সমকোণ, তাই $\triangle ABC$ এ $\angle ABC=$ এক সমকোণ এবং $AC$ অতিভুজ। পিথাগোরাসের উপপাদ্য অনুসারে,`,
          String.raw`$$AC^{2}=AB^{2}+BC^{2}=a^{2}+a^{2}=2a^{2}$$`,
          String.raw`এখন, বর্গক্ষেত্র $ABCD$ এর ক্ষেত্রফল $=a^{2}$ এবং বর্গক্ষেত্র $ACEF$ এর ক্ষেত্রফল $=AC^{2}=2a^{2}$।`,
          String.raw`$$\therefore\;\text{বর্গক্ষেত্র }ABCD=a^{2}=\tfrac{1}{2}\times2a^{2}=\tfrac{1}{2}\,\text{বর্গক্ষেত্র }ACEF$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 4,
      group: C15_PROVE,
      question:
        "প্রমাণ করো যে, সামান্তরিকের কর্ণদ্বয় সামান্তরিকক্ষেত্রটিকে চারটি সমান ত্রিভুজক্ষেত্রে বিভক্ত করে।",
      figure: "15-p4",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ সামান্তরিকের কর্ণ $AC$ ও $BD$ পরস্পরকে $O$ বিন্দুতে ছেদ করে। প্রমাণ করতে হবে যে, $\triangle AOB=\triangle BOC=\triangle COD=\triangle DOA$ (ক্ষেত্রফলে)।`,
          String.raw`প্রমাণ: ধাপ ১. সামান্তরিকের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করে, তাই`,
          String.raw`$$AO=OC\qquad\text{এবং}\qquad BO=OD$$`,
          String.raw`ধাপ ২. $\triangle ABC$ এ $O,\;AC$ এর মধ্যবিন্দু, তাই $BO$ একটি মধ্যমা। মধ্যমা ত্রিভুজকে সমান দুই ভাগে ভাগ করে [প্রশ্ন ২]:`,
          String.raw`$$\triangle AOB=\triangle BOC$$`,
          String.raw`ধাপ ৩. $\triangle BCD$ এ $O,\;BD$ এর মধ্যবিন্দু, তাই $CO$ মধ্যমা:`,
          String.raw`$$\triangle BOC=\triangle COD$$`,
          String.raw`ধাপ ৪. $\triangle CDA$ এ $O,\;AC$ এর মধ্যবিন্দু, তাই $DO$ মধ্যমা:`,
          String.raw`$$\triangle COD=\triangle DOA$$`,
          String.raw`ধাপ ২, ৩ ও ৪ থেকে,`,
          String.raw`$$\triangle AOB=\triangle BOC=\triangle COD=\triangle DOA$$`,
          String.raw`অর্থাৎ প্রতিটি ত্রিভুজ সামান্তরিক $ABCD$ এর $\tfrac{1}{4}$ অংশ।`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 5,
      group: C15_PROVE,
      question:
        "একটি সামান্তরিকক্ষেত্র এবং সমান ক্ষেত্রফল বিশিষ্ট একটি আয়তক্ষেত্র একই ভূমির উপর এবং এর একই পাশে অবস্থিত। দেখাও যে, সামান্তরিকক্ষেত্রটির পরিসীমা আয়তক্ষেত্রটির পরিসীমা অপেক্ষা বৃহত্তর।",
      figure: "15-p5",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, সামান্তরিক $ABCD$ ও আয়তক্ষেত্র $ABEF$ একই ভূমি $AB$ এর উপর এবং এর একই পাশে অবস্থিত এবং এদের ক্ষেত্রফল সমান। (সামান্তরিকটি নিজে আয়তক্ষেত্র নয়।) দেখাতে হবে যে, $ABCD$ এর পরিসীমা $>ABEF$ এর পরিসীমা।`,
          String.raw`প্রমাণ: ধাপ ১. সামান্তরিকের ক্ষেত্রফল $=AB\times$ উচ্চতা, আয়তক্ষেত্রের ক্ষেত্রফল $=AB\times AF$। ক্ষেত্রফল ও ভূমি সমান, তাই উচ্চতাও সমান — সামান্তরিকের উচ্চতা $=AF$। অর্থাৎ ক্ষেত্র দুইটি একই সমান্তরাল রেখাযুগলের মধ্যে অবস্থিত, এবং $D,\,C,\,E,\,F$ একই সরলরেখায় [অনুসিদ্ধান্ত ১]।`,
          String.raw`ধাপ ২. $\triangle AFD$ এ $\angle AFD=$ এক সমকোণ [আয়তক্ষেত্রের কোণ], তাই $AD$ অতিভুজ।`,
          String.raw`$$AD^{2}=AF^{2}+FD^{2}>AF^{2}\;\Rightarrow\;AD>AF$$`,
          String.raw`($FD\neq0$, কারণ সামান্তরিকটি আয়তক্ষেত্র নয়।)`,
          String.raw`ধাপ ৩. একইভাবে সমকোণী $\triangle BEC$ এ $BC$ অতিভুজ, তাই $BC>BE$।`,
          String.raw`ধাপ ৪. $CD=AB=EF$। সুতরাং`,
          String.raw`$$ABCD\text{ এর পরিসীমা}=AB+BC+CD+DA=2(AB+AD)$$`,
          String.raw`$$ABEF\text{ এর পরিসীমা}=AB+BE+EF+FA=2(AB+AF)$$`,
          String.raw`যেহেতু $AD>AF$,`,
          String.raw`$$2(AB+AD)>2(AB+AF)$$`,
          String.raw`$$\therefore\;\text{সামান্তরিকক্ষেত্রের পরিসীমা}>\text{আয়তক্ষেত্রের পরিসীমা}$$`,
        ],
        answer: "দেখানো হলো",
      },
    },
    {
      id: 6,
      group: C15_PROVE,
      question: String.raw`$\triangle ABC$ এর $AB$ ও $AC$ বাহুদ্বয়ের মধ্যবিন্দু যথাক্রমে $X$ ও $Y$। প্রমাণ কর যে, $\triangle AXY$ এর ক্ষেত্রফল $=\dfrac{1}{4}\,\triangle ABC$ এর ক্ষেত্রফল।`,
      figure: "15-p6",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এর $AB$ ও $AC$ বাহুর মধ্যবিন্দু যথাক্রমে $X$ ও $Y$। প্রমাণ করতে হবে যে, $\triangle AXY=\tfrac{1}{4}\triangle ABC$।`,
          String.raw`অঙ্কন: $X,\,C$ যোগ করি।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle AXC$ এ $Y,\;AC$ এর মধ্যবিন্দু, তাই $XY$ একটি মধ্যমা। মধ্যমা ত্রিভুজকে সমান দুই ভাগে ভাগ করে [প্রশ্ন ২], তাই`,
          String.raw`$$\triangle AXY=\triangle XYC=\tfrac{1}{2}\,\triangle AXC$$`,
          String.raw`ধাপ ২. $\triangle ABC$ এ $X,\;AB$ এর মধ্যবিন্দু, তাই $CX$ একটি মধ্যমা:`,
          String.raw`$$\triangle AXC=\triangle BXC=\tfrac{1}{2}\,\triangle ABC$$`,
          String.raw`ধাপ ৩. ধাপ ১ ও ২ থেকে,`,
          String.raw`$$\triangle AXY=\tfrac{1}{2}\times\tfrac{1}{2}\,\triangle ABC=\tfrac{1}{4}\,\triangle ABC$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 7,
      group: C15_PROVE,
      question: String.raw`$ABCD$ একটি ট্রাপিজিয়াম। এর $AB$ ও $CD$ বাহু দুইটি সমান্তরাল। ট্রাপিজিয়ামক্ষেত্র $ABCD$ এর ক্ষেত্রফল নির্ণয় করো।`,
      figure: "15-p7",
      solution: {
        steps: [
          String.raw`মনে করি, $ABCD$ ট্রাপিজিয়ামে $AB\parallel DC$ এবং সমান্তরাল বাহু দুইটির মধ্যবর্তী লম্ব দূরত্ব (উচ্চতা) $h$।`,
          String.raw`অঙ্কন: $A,\,C$ যোগ করি। $C$ থেকে $AB$ এর উপর $CE$ লম্ব এবং $A$ থেকে বর্ধিত $CD$ এর উপর $AF$ লম্ব আঁকি।`,
          String.raw`সমান্তরাল রেখাদ্বয়ের মধ্যবর্তী লম্ব দূরত্ব সর্বত্র সমান, তাই`,
          String.raw`$$CE=AF=h$$`,
          String.raw`কর্ণ $AC$ ট্রাপিজিয়ামটিকে $\triangle ABC$ ও $\triangle ACD$ এ বিভক্ত করে।`,
          String.raw`$\triangle ABC$ এর ভূমি $AB$, উচ্চতা $CE=h$:`,
          String.raw`$$\triangle ABC=\tfrac{1}{2}\times AB\times h$$`,
          String.raw`$\triangle ACD$ এর ভূমি $CD$, উচ্চতা $AF=h$:`,
          String.raw`$$\triangle ACD=\tfrac{1}{2}\times CD\times h$$`,
          String.raw`$$\therefore\;\text{ট্রাপিজিয়ামক্ষেত্র }ABCD=\triangle ABC+\triangle ACD=\tfrac{1}{2}\,(AB+CD)\times h$$`,
          String.raw`অর্থাৎ ক্ষেত্রফল $=\tfrac{1}{2}\times$ (সমান্তরাল বাহুদ্বয়ের সমষ্টি) $\times$ এদের মধ্যবর্তী দূরত্ব।`,
        ],
        answer: String.raw`ক্ষেত্রফল $=\tfrac{1}{2}\,(AB+CD)\times h$ বর্গ একক, যেখানে $h$ হলো $AB$ ও $CD$ এর মধ্যবর্তী লম্ব দূরত্ব।`,
      },
    },
    {
      id: 8,
      group: C15_PROVE,
      question: String.raw`সামান্তরিক $ABCD$ এর অভ্যন্তরে $P$ যেকোনো একটি বিন্দু। প্রমাণ করো যে, $\triangle PAB$ এর ক্ষেত্রফল $+\;\triangle PCD$ এর ক্ষেত্রফল $=\dfrac{1}{2}$ (সামান্তরিকক্ষেত্র $ABCD$ এর ক্ষেত্রফল)।`,
      figure: "15-p8",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $ABCD$ সামান্তরিকের অভ্যন্তরে $P$ যেকোনো বিন্দু। $P,\,A$; $P,\,B$; $P,\,C$ ও $P,\,D$ যোগ করা হলো। প্রমাণ করতে হবে যে, $\triangle PAB+\triangle PCD=\tfrac{1}{2}$ সামান্তরিক $ABCD$।`,
          String.raw`অঙ্কন: $P$ বিন্দু দিয়ে $AB$ এর সমান্তরাল $EF$ রেখা টানি, যা $AD$ কে $E$ বিন্দুতে এবং $BC$ কে $F$ বিন্দুতে ছেদ করে।`,
          String.raw`প্রমাণ: ধাপ ১. $AB\parallel EF$ [অঙ্কন] এবং $AE\parallel BF$ [সামান্তরিকের বিপরীত বাহু], তাই $ABFE$ একটি সামান্তরিক। একইভাবে $EF\parallel DC$ এবং $ED\parallel FC$, তাই $EFCD$ একটি সামান্তরিক।`,
          String.raw`ধাপ ২. $\triangle PAB$ এবং সামান্তরিক $ABFE$ একই ভূমি $AB$ এর উপর এবং একই সমান্তরাল রেখাযুগল $AB$ ও $EF$ এর মধ্যে অবস্থিত, তাই`,
          String.raw`$$\triangle PAB=\tfrac{1}{2}\,\text{সামান্তরিক }ABFE\qquad\left[\,\text{অনুসিদ্ধান্ত }২\,\right]$$`,
          String.raw`ধাপ ৩. $\triangle PCD$ এবং সামান্তরিক $EFCD$ একই ভূমি $DC$ এর উপর এবং একই সমান্তরাল রেখাযুগল $DC$ ও $EF$ এর মধ্যে অবস্থিত, তাই`,
          String.raw`$$\triangle PCD=\tfrac{1}{2}\,\text{সামান্তরিক }EFCD$$`,
          String.raw`ধাপ ৪. যোগ করে,`,
          String.raw`$$\triangle PAB+\triangle PCD=\tfrac{1}{2}\left(ABFE+EFCD\right)=\tfrac{1}{2}\,\text{সামান্তরিক }ABCD$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 9,
      group: C15_PROVE,
      question: String.raw`$\triangle ABC$ এ $BC$ ভূমির সমান্তরাল যেকোনো সরলরেখা $AB$ ও $AC$ বাহুকে যথাক্রমে $D$ ও $E$ বিন্দুতে ছেদ করে। প্রমাণ করো যে, $\triangle DBC=\triangle EBC$ এবং $\triangle DBE=\triangle CDE$।`,
      figure: "15-p9",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $DE\parallel BC$, যেখানে $D$ বিন্দু $AB$ এর উপর ও $E$ বিন্দু $AC$ এর উপর। $D,\,C$ ও $E,\,B$ যোগ করা হলো। প্রমাণ করতে হবে যে, $\triangle DBC=\triangle EBC$ এবং $\triangle DBE=\triangle CDE$।`,
          String.raw`প্রমাণ: ধাপ ১. $\triangle DBC$ ও $\triangle EBC$ একই ভূমি $BC$ এর উপর এবং একই সমান্তরাল রেখাযুগল $BC$ ও $DE$ এর মধ্যে অবস্থিত।`,
          String.raw`$$\therefore\;\triangle DBC=\triangle EBC\qquad\left[\,\text{উপপাদ্য }৩৬\,\right]$$`,
          String.raw`ধাপ ২. আবার, $\triangle DBE$ ও $\triangle CDE$ একই ভূমি $DE$ এর উপর অবস্থিত এবং এদের শীর্ষ $B$ ও $C$ বিন্দু $DE$ এর সমান্তরাল রেখা $BC$ এর উপর। অর্থাৎ ত্রিভুজ দুইটি একই সমান্তরাল রেখাযুগল $DE$ ও $BC$ এর মধ্যে অবস্থিত।`,
          String.raw`$$\therefore\;\triangle DBE=\triangle CDE\qquad\left[\,\text{উপপাদ্য }৩৬\,\right]$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 10,
      group: C15_PROVE,
      question: String.raw`$ABC$ ত্রিভুজের $\angle A=$ এক সমকোণ। $D,\;AC$ এর উপরস্থ একটি বিন্দু। প্রমাণ করো যে, $BC^{2}+AD^{2}=BD^{2}+AC^{2}$।`,
      figure: "15-p10",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle BAC=$ এক সমকোণ এবং $D$ বিন্দু $AC$ এর উপর অবস্থিত। $B,\,D$ যোগ করা হলো। প্রমাণ করতে হবে যে, $BC^{2}+AD^{2}=BD^{2}+AC^{2}$।`,
          String.raw`প্রমাণ: ধাপ ১. সমকোণী $\triangle ABC$ এ $BC$ অতিভুজ। পিথাগোরাসের উপপাদ্য অনুসারে,`,
          String.raw`$$BC^{2}=AB^{2}+AC^{2}\qquad\cdots(i)$$`,
          String.raw`ধাপ ২. $D$ বিন্দু $AC$ এর উপর, তাই $\angle BAD=$ এক সমকোণ এবং সমকোণী $\triangle ABD$ এ $BD$ অতিভুজ:`,
          String.raw`$$BD^{2}=AB^{2}+AD^{2}\qquad\cdots(ii)$$`,
          String.raw`ধাপ ৩. $(i)$ এর উভয় পক্ষে $AD^{2}$ যোগ করে,`,
          String.raw`$$BC^{2}+AD^{2}=AB^{2}+AD^{2}+AC^{2}$$`,
          String.raw`$$=BD^{2}+AC^{2}\qquad\left[\,(ii)\text{ থেকে}\,\right]$$`,
          String.raw`$$\therefore\;BC^{2}+AD^{2}=BD^{2}+AC^{2}$$`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 11,
      group: C15_PROVE,
      question: String.raw`$ABC$ একটি সমদ্বিবাহু সমকোণী ত্রিভুজ। $BC$ এর অতিভুজ এবং $P,\;BC$ এর উপর যেকোনো বিন্দু। প্রমাণ করো যে, $PB^{2}+PC^{2}=2PA^{2}$।`,
      figure: "15-p11",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle BAC=$ এক সমকোণ, $AB=AC$ এবং $BC$ অতিভুজ। $P,\;BC$ এর উপর যেকোনো বিন্দু। প্রমাণ করতে হবে যে, $PB^{2}+PC^{2}=2PA^{2}$।`,
          String.raw`অঙ্কন: $A$ থেকে $BC$ এর উপর $AD$ লম্ব আঁকি। মনে করি, $P$ বিন্দু $D$ ও $C$ এর মধ্যে (অন্য পাশে হলে $B$ ও $C$ এর ভূমিকা অদলবদল হয় মাত্র)।`,
          String.raw`প্রমাণ: ধাপ ১. $AB=AC$, তাই $\angle B=\angle C$; আর $\angle B+\angle C=90^{\circ}$ বলে $\angle B=\angle C=45^{\circ}$।`,
          String.raw`সমকোণী $\triangle ADB$ এ $\angle BAD=90^{\circ}-45^{\circ}=45^{\circ}=\angle B$, তাই $AD=BD$। একইভাবে $AD=CD$।`,
          String.raw`$$\therefore\;BD=CD=AD$$`,
          String.raw`ধাপ ২. এখন`,
          String.raw`$$PB=BD+DP,\qquad PC=CD-DP=BD-DP$$`,
          String.raw`$$\therefore\;PB^{2}+PC^{2}=(BD+DP)^{2}+(BD-DP)^{2}=2BD^{2}+2DP^{2}$$`,
          String.raw`$$=2\left(AD^{2}+DP^{2}\right)\qquad\left[\,\because\;BD=AD\,\right]$$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle ADP$ এ $PA$ অতিভুজ, তাই পিথাগোরাসের উপপাদ্য অনুসারে $AD^{2}+DP^{2}=PA^{2}$।`,
          String.raw`$$\therefore\;PB^{2}+PC^{2}=2PA^{2}$$`,
          String.raw`($P$ বিন্দু $D$ এর উপর পড়লে $DP=0$ এবং সম্পর্কটি $2BD^{2}=2AD^{2}$ হিসেবে সরাসরি সত্য।)`,
        ],
        answer: "প্রমাণিত",
      },
    },
    {
      id: 12,
      group: C15_PROVE,
      question: String.raw`$\triangle ABC$ এর $\angle C$ স্থূলকোণ। $AD,\;BC$ এর উপর লম্ব। দেখাও যে, $AB^{2}=AC^{2}+BC^{2}+2BC\cdot CD$।`,
      figure: "15-p12",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle ACB$ স্থূলকোণ এবং $A$ থেকে বর্ধিত $BC$ এর উপর $AD$ লম্ব। ($\angle C$ স্থূল বলে লম্বের পাদবিন্দু $D$ পড়ে $BC$ এর $C$ এর দিকের বর্ধিতাংশে।) দেখাতে হবে যে, $AB^{2}=AC^{2}+BC^{2}+2BC\cdot CD$।`,
          String.raw`প্রমাণ: ধাপ ১. $D$ বিন্দু বর্ধিত $BC$ এর উপর, তাই`,
          String.raw`$$BD=BC+CD$$`,
          String.raw`ধাপ ২. সমকোণী $\triangle ABD$ এ $\angle ADB=$ এক সমকোণ, তাই পিথাগোরাসের উপপাদ্য অনুসারে,`,
          String.raw`$$AB^{2}=AD^{2}+BD^{2}=AD^{2}+(BC+CD)^{2}$$`,
          String.raw`$$=AD^{2}+BC^{2}+CD^{2}+2BC\cdot CD\qquad\cdots(i)$$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle ACD$ এ $\angle ADC=$ এক সমকোণ, তাই`,
          String.raw`$$AC^{2}=AD^{2}+CD^{2}\qquad\cdots(ii)$$`,
          String.raw`ধাপ ৪. $(ii)$ কে $(i)$ এ বসিয়ে,`,
          String.raw`$$AB^{2}=AC^{2}+BC^{2}+2BC\cdot CD$$`,
        ],
        answer: "দেখানো হলো",
      },
    },
    {
      id: 13,
      group: C15_PROVE,
      question: String.raw`$\triangle ABC$ এর $\angle C$ সূক্ষ্মকোণ। $AD,\;BC$ এর উপর লম্ব। দেখাও যে, $AB^{2}=AC^{2}+BC^{2}-2BC\cdot CD$।`,
      figure: "15-p13",
      solution: {
        steps: [
          String.raw`বিশেষ নির্বচন: মনে করি, $\triangle ABC$ এ $\angle ACB$ সূক্ষ্মকোণ এবং $A$ থেকে $BC$ (বা এর বর্ধিতাংশ) এর উপর $AD$ লম্ব। দেখাতে হবে যে, $AB^{2}=AC^{2}+BC^{2}-2BC\cdot CD$।`,
          String.raw`প্রমাণ: ধাপ ১. $\angle C$ সূক্ষ্ম বলে $D$ বিন্দু $C$ থেকে $B$ এর দিকে থাকে। চিত্রের মতো $D$ যদি $B$ ও $C$ এর মধ্যে থাকে, তবে`,
          String.raw`$$BD=BC-CD$$`,
          String.raw`ধাপ ২. সমকোণী $\triangle ABD$ এ,`,
          String.raw`$$AB^{2}=AD^{2}+BD^{2}=AD^{2}+(BC-CD)^{2}$$`,
          String.raw`$$=AD^{2}+BC^{2}+CD^{2}-2BC\cdot CD\qquad\cdots(i)$$`,
          String.raw`ধাপ ৩. সমকোণী $\triangle ACD$ এ,`,
          String.raw`$$AC^{2}=AD^{2}+CD^{2}\qquad\cdots(ii)$$`,
          String.raw`ধাপ ৪. $(ii)$ কে $(i)$ এ বসিয়ে,`,
          String.raw`$$AB^{2}=AC^{2}+BC^{2}-2BC\cdot CD$$`,
          String.raw`$\angle B$ স্থূল হলে $D$ পড়ে বর্ধিত $CB$ এর উপর, তখন $BD=CD-BC$; কিন্তু $(CD-BC)^{2}=(BC-CD)^{2}$, তাই ধাপ ২ থেকে একই ফল আসে।`,
        ],
        answer: "দেখানো হলো",
      },
    },

    // ─────────────── সৃজনশীল (১৪) ───────────────
    {
      id: 14,
      group: C15_CQ,
      question: String.raw`$ABCD$ সামান্তরিকের $AB=5$ সে.মি., $AD=4$ সে.মি. এবং $\angle BAD=75^{\circ}$। অপর একটি সামান্তরিক $APML$ এর $\angle LAP=60^{\circ}$। $\triangle AED$ এর ক্ষেত্রফল ও $APML$ সামান্তরিকের ক্ষেত্রফল, $ABCD$ সামান্তরিকের ক্ষেত্রফলের সমান।`,
      parts: [
        {
          label: "ক",
          question: String.raw`পেন্সিল, কম্পাস ও স্কেল ব্যবহার করে $\angle BAD$ আঁকো।`,
          solution: {
            steps: [
              String.raw`$75^{\circ}=60^{\circ}+\tfrac{1}{2}\left(90^{\circ}-60^{\circ}\right)$ — অর্থাৎ $60^{\circ}$ ও $90^{\circ}$ এর মাঝামাঝি কোণ। দুইটিই কম্পাসে আঁকা যায়।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. যেকোনো রশ্মি $AX$ আঁকি এবং তা থেকে $AB=5$ সে.মি. কেটে নিই।`,
              String.raw`২. $A$ কে কেন্দ্র করে যেকোনো ব্যাসার্ধ নিয়ে একটি বৃত্তচাপ আঁকি, যা $AX$ কে একটি বিন্দুতে ছেদ করে। ঐ বিন্দুকে কেন্দ্র করে একই ব্যাসার্ধে চাপ কেটে বৃত্তচাপের উপর $N$ বিন্দু পাই; তাহলে $\angle XAN=60^{\circ}$।`,
              String.raw`৩. $A$ বিন্দুতে $AX$ এর উপর লম্ব আঁকি; তা প্রথম বৃত্তচাপকে $S$ বিন্দুতে ছেদ করে, তাই $\angle XAS=90^{\circ}$।`,
              String.raw`৪. $N$ ও $S$ কে কেন্দ্র করে $NS$ এর অর্ধেকের বেশি সমান ব্যাসার্ধে দুইটি চাপ আঁকি; এরা যে বিন্দুতে ছেদ করে, $A$ থেকে সেই বিন্দু দিয়ে রশ্মি টানি। এটি $\angle NAS$ এর সমদ্বিখণ্ডক।`,
              String.raw`৫. এই রশ্মি থেকে $AD=4$ সে.মি. কেটে নিই। তাহলে $\angle BAD$ ই উদ্দিষ্ট কোণ।`,
              String.raw`প্রমাণ:`,
              String.raw`$$\angle BAD=\angle XAN+\tfrac{1}{2}\angle NAS=60^{\circ}+\tfrac{1}{2}\left(90^{\circ}-60^{\circ}\right)=60^{\circ}+15^{\circ}=75^{\circ}$$`,
            ],
            answer: String.raw`$\angle BAD=75^{\circ}$ আঁকা হলো।`,
            figure: "15-p14a",
          },
        },
        {
          label: "খ",
          question: String.raw`$\triangle AED$ অঙ্কন করো। [অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক]`,
          solution: {
            steps: [
              String.raw`প্রথমে $ABCD$ সামান্তরিকটি আঁকি, তারপর সম্পাদ্য ১৪ অনুসারে সমান ক্ষেত্রফলের ত্রিভুজ আঁকি।`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. (ক) এর মতো $AB=5$ সে.মি., $AD=4$ সে.মি. ও $\angle BAD=75^{\circ}$ আঁকি।`,
              String.raw`২. $B$ কে কেন্দ্র করে $4$ সে.মি. এবং $D$ কে কেন্দ্র করে $5$ সে.মি. ব্যাসার্ধে $\angle BAD$ এর অভ্যন্তরে দুইটি চাপ আঁকি; এরা $C$ বিন্দুতে ছেদ করে। $B,\,C$ ও $D,\,C$ যোগ করি। তাহলে $ABCD$ প্রদত্ত সামান্তরিক।`,
              String.raw`৩. $D,\,B$ যোগ করি। $C$ বিন্দু দিয়ে $CE\parallel DB$ টানি, যা $AB$ এর বর্ধিতাংশকে $E$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $D,\,E$ যোগ করি। তাহলে $\triangle AED$ ই উদ্দিষ্ট ত্রিভুজ।`,
              String.raw`প্রমাণ: $\triangle BDC$ ও $\triangle BDE$ একই ভূমি $BD$ এর উপর এবং একই সমান্তরাল রেখাযুগল $BD$ ও $CE$ এর মধ্যে অবস্থিত, তাই`,
              String.raw`$$\triangle BDC=\triangle BDE\qquad\left[\,\text{উপপাদ্য }৩৬\,\right]$$`,
              String.raw`উভয় পক্ষে $\triangle ABD$ যোগ করে,`,
              String.raw`$$\triangle ABD+\triangle BDC=\triangle ABD+\triangle BDE$$`,
              String.raw`$$\therefore\;\text{সামান্তরিক }ABCD=\triangle AED$$`,
              String.raw`লক্ষ করি: $DBEC$ একটি সামান্তরিক ($DC\parallel BE$, $DB\parallel CE$), তাই $BE=DC=AB=5$ সে.মি. এবং $AE=10$ সে.মি.। অর্থাৎ $\triangle AED$ এর ভূমি সামান্তরিকের ভূমির দ্বিগুণ, উচ্চতা একই।`,
              String.raw`$$\triangle AED=\tfrac{1}{2}\times10\times4\sin75^{\circ}=5\times4\sin75^{\circ}=ABCD\approx19.32\text{ বর্গ সে.মি.}$$`,
            ],
            answer: String.raw`$\triangle AED$ ই নির্ণেয় ত্রিভুজ ($AE=10$ সে.মি., $AD=4$ সে.মি., $\angle A=75^{\circ}$)।`,
            figure: "15-p14b",
          },
        },
        {
          label: "গ",
          question: String.raw`$APML$ সামান্তরিকটি অঙ্কন করো। [অঙ্কনের চিহ্ন ও বিবরণ আবশ্যক]`,
          solution: {
            steps: [
              String.raw`(খ) এর $\triangle AED$ এর ক্ষেত্রফল $ABCD$ এর সমান, তাই সম্পাদ্য ১৩ অনুসারে $\triangle AED$ এর সমান ক্ষেত্রফলের এবং $60^{\circ}$ কোণবিশিষ্ট সামান্তরিক আঁকলেই চলবে। (এটিই সম্পাদ্য ১৫: চতুর্ভুজ $ABCD\to\triangle AED\to$ সামান্তরিক।)`,
              String.raw`অঙ্কনের বিবরণ:`,
              String.raw`১. $AE$ রেখাংশকে সমদ্বিখণ্ডিত করে মধ্যবিন্দু $P$ নির্ণয় করি। ($AE=10$ সে.মি., তাই $AP=5$ সে.মি. — $P$ বিন্দু $B$ এর উপরেই পড়ে।)`,
              String.raw`২. $AP$ রেখাংশের $A$ বিন্দুতে কম্পাসের সাহায্যে $\angle PAL=60^{\circ}$ আঁকি।`,
              String.raw`৩. $D$ বিন্দু দিয়ে $AE$ এর সমান্তরাল রেখা টানি (এটি $DC$ রেখাই); মনে করি তা $AL$ রশ্মিকে $L$ বিন্দুতে ছেদ করে।`,
              String.raw`৪. $P$ বিন্দু দিয়ে $AL$ এর সমান্তরাল রেখা টানি, যা ঐ রেখাকে $M$ বিন্দুতে ছেদ করে। তাহলে $APML$ ই উদ্দিষ্ট সামান্তরিক।`,
              String.raw`প্রমাণ: $P,\,D$ যোগ করি। $AP=PE$, এবং $\triangle APD$ ও $\triangle PED$ এর উচ্চতা একই, তাই`,
              String.raw`$$\triangle AED=2\,\triangle APD$$`,
              String.raw`সামান্তরিক $APML$ ও $\triangle APD$ একই ভূমি $AP$ এর উপর এবং একই সমান্তরাল রেখাযুগল $AE$ ও $LM$ এর মধ্যে অবস্থিত, তাই`,
              String.raw`$$APML=2\,\triangle APD=\triangle AED=ABCD\qquad\left[\,\text{অনুসিদ্ধান্ত }২\text{ ও (খ)}\,\right]$$`,
              String.raw`এবং $\angle LAP=60^{\circ}$ [অঙ্কন অনুসারে]।`,
              String.raw`যাচাই: উচ্চতা $h=4\sin75^{\circ}\approx3.86$ সে.মি., $AL=\dfrac{h}{\sin60^{\circ}}\approx4.46$ সে.মি.; ক্ষেত্রফল $=AP\times h\approx5\times3.86\approx19.32$ বর্গ সে.মি.।`,
            ],
            answer: String.raw`$APML$ ই নির্ণেয় সামান্তরিক ($AP=5$ সে.মি., $\angle LAP=60^{\circ}$, ক্ষেত্রফল $\approx19.32$ বর্গ সে.মি.)।`,
            figure: "15-p14c",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — বহুনির্বাচনি (১৫ – ১৮) ───────────────
    {
      id: 15,
      group: C15_MODEL_MCQ,
      question: String.raw`একটি সমকোণী ত্রিভুজের দুইটি বাহু 12 ও 13 সে.মি.। অপর বাহুর দৈর্ঘ্য কত সে.মি. হলে ত্রিভুজটি আঁকা সম্ভব?
ক) 17  খ) 15  গ) 9  ঘ) 5`,
      solution: {
        steps: [
          String.raw`অতিভুজ সবচেয়ে বড় বাহু। $13$ কে অতিভুজ ধরলে অপর বাহু`,
          String.raw`$$\sqrt{13^{2}-12^{2}}=\sqrt{169-144}=\sqrt{25}=5$$`,
          String.raw`($12$ ও $13$ দুইটিই সমকোণ সংলগ্ন বাহু হলে অতিভুজ $\sqrt{313}$, যা বিকল্পে নেই।)`,
        ],
        answer: "ঘ) 5",
      },
    },
    {
      id: 16,
      group: C15_MODEL_MCQ,
      question: String.raw`সমতলীয় জ্যামিতিতে—
(i) প্রত্যেক সীমাবদ্ধ সমতলক্ষেত্রের নির্দিষ্ট ক্ষেত্রফল রয়েছে
(ii) দুইটি ত্রিভুজক্ষেত্রের ক্ষেত্রফল সমান হলেই ত্রিভুজ দুইটি সর্বসম
(iii) দুইটি ত্রিভুজ সর্বসম হলে এদের ক্ষেত্রফল সমান
নিচের কোনটি সঠিক?
ক) i ও ii  খ) i ও iii  গ) ii ও iii  ঘ) i, ii ও iii`,
      solution: {
        steps: [
          "(i) সঠিক — প্রত্যেক সীমাবদ্ধ সমতলক্ষেত্রের নির্দিষ্ট ক্ষেত্রফল আছে।",
          String.raw`(ii) সঠিক নয় — একই ভূমি ও একই সমান্তরাল রেখাযুগলের মধ্যে $\triangle ABC$ ও $\triangle DBC$ এর ক্ষেত্রফল সমান, অথচ এরা সর্বসম নয় [উপপাদ্য ৩৬]।`,
          "(iii) সঠিক — সর্বসম ত্রিভুজ একটি অপরটির উপর হুবহু মিলে যায়, তাই ক্ষেত্রফল সমান।",
        ],
        answer: "খ) i ও iii",
      },
    },
    {
      id: 17,
      group: C15_MODEL_MCQ,
      question: String.raw`পাশের চিত্রে, $\triangle ABC$ সমবাহু, $AD\perp BC$ এবং $AB=2$। $BD=$ কত?
ক) 1  খ) $\sqrt{2}$  গ) 2  ঘ) 4`,
      figure: "15-m3",
      solution: {
        steps: [
          String.raw`সমবাহু ত্রিভুজে $AB=AC$, তাই সমকোণী $\triangle ABD$ ও $\triangle ACD$ সর্বসম (অতিভুজ-বাহু), এবং $D,\;BC$ এর মধ্যবিন্দু।`,
          String.raw`$$BD=\tfrac{1}{2}BC=\tfrac{1}{2}\times2=1$$`,
        ],
        answer: "ক) 1",
      },
    },
    {
      id: 18,
      group: C15_MODEL_MCQ,
      question: String.raw`পাশের চিত্রে, $\triangle ABC$ সমবাহু, $AD\perp BC$ এবং $AB=2$। ত্রিভুজটির উচ্চতা কত?
ক) $\dfrac{4}{\sqrt{3}}$  খ) $\sqrt{3}$  গ) $\dfrac{2}{\sqrt{3}}$  ঘ) $2\sqrt{3}$`,
      figure: "15-m3",
      solution: {
        steps: [
          String.raw`উচ্চতা $AD$। সমকোণী $\triangle ABD$ এ $AB=2$, $BD=1$ [আগের প্রশ্ন]:`,
          String.raw`$$AD=\sqrt{AB^{2}-BD^{2}}=\sqrt{4-1}=\sqrt{3}$$`,
        ],
        answer: String.raw`খ) $\sqrt{3}$`,
      },
    },

    // ─────────────── নমুনা প্রশ্ন — সৃজনশীল (১৯) ───────────────
    {
      id: 19,
      group: C15_MODEL_CQ,
      question: String.raw`$\triangle PQR$ এ $QD$ একটি মধ্যমা।`,
      figure: "15-m5",
      parts: [
        {
          label: "ক",
          question: String.raw`$ABC$ সমবাহু ত্রিভুজের $AD\perp BC$ হলে, $\triangle ABD:\triangle ACD$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমকোণী $\triangle ABD$ ও $\triangle ACD$ এ অতিভুজ $AB=$ অতিভুজ $AC$ [সমবাহু] এবং $AD$ সাধারণ বাহু।`,
              String.raw`$$\therefore\;\triangle ABD\cong\triangle ACD\;\Rightarrow\;BD=CD$$`,
              String.raw`দুইটি ত্রিভুজের ভূমি সমান ও উচ্চতা একই $AD$, তাই`,
              String.raw`$$\triangle ABD:\triangle ACD=\tfrac{1}{2}\,BD\cdot AD:\tfrac{1}{2}\,CD\cdot AD=1:1$$`,
            ],
            answer: String.raw`$\triangle ABD:\triangle ACD=1:1$`,
          },
        },
        {
          label: "খ",
          question: String.raw`প্রমাণ করো, $PQ^{2}+QR^{2}=2\left(PD^{2}+QD^{2}\right)$।`,
          solution: {
            steps: [
              String.raw`বিশেষ নির্বচন: $\triangle PQR$ এ $D,\;PR$ এর মধ্যবিন্দু, অর্থাৎ $PD=DR$। প্রমাণ করতে হবে যে, $PQ^{2}+QR^{2}=2\left(PD^{2}+QD^{2}\right)$।`,
              String.raw`অঙ্কন: $Q$ থেকে $PR$ এর উপর $QE$ লম্ব আঁকি। মনে করি, $E$ বিন্দু $D$ ও $R$ এর মধ্যে (অন্য পাশে হলে $P$ ও $R$ এর ভূমিকা অদলবদল হয়)।`,
              String.raw`প্রমাণ: ধাপ ১. $\triangle QPD$ এ $\angle QDP$ স্থূলকোণ এবং $QE$ বর্ধিত $PD$ এর উপর লম্ব। প্রশ্ন ১২ অনুসারে,`,
              String.raw`$$PQ^{2}=QD^{2}+PD^{2}+2PD\cdot DE\qquad\cdots(i)$$`,
              String.raw`ধাপ ২. $\triangle QDR$ এ $\angle QDR$ সূক্ষ্মকোণ এবং $QE\perp DR$। প্রশ্ন ১৩ অনুসারে,`,
              String.raw`$$QR^{2}=QD^{2}+DR^{2}-2DR\cdot DE\qquad\cdots(ii)$$`,
              String.raw`ধাপ ৩. $(i)$ ও $(ii)$ যোগ করে এবং $DR=PD$ বসিয়ে,`,
              String.raw`$$PQ^{2}+QR^{2}=2QD^{2}+PD^{2}+PD^{2}+2PD\cdot DE-2PD\cdot DE$$`,
              String.raw`$$=2\left(PD^{2}+QD^{2}\right)$$`,
              String.raw`($E$ বিন্দু $D$ এর উপর পড়লে দুইটি ত্রিভুজই সমকোণী, আর পিথাগোরাস থেকে সরাসরি একই ফল আসে।)`,
            ],
            answer: "প্রমাণিত",
          },
        },
        {
          label: "গ",
          question: String.raw`যদি $PQ=QR=PR$ হয়, তাহলে প্রমাণ করো, $4QD^{2}=3PQ^{2}$।`,
          solution: {
            steps: [
              String.raw`$PQ=QR=PR$ এবং $D,\;PR$ এর মধ্যবিন্দু, তাই $PD=\tfrac{1}{2}PR=\tfrac{1}{2}PQ$।`,
              String.raw`(খ) থেকে,`,
              String.raw`$$PQ^{2}+QR^{2}=2\left(PD^{2}+QD^{2}\right)$$`,
              String.raw`$$\Rightarrow\;PQ^{2}+PQ^{2}=2\left(\tfrac{1}{4}PQ^{2}+QD^{2}\right)$$`,
              String.raw`$$\Rightarrow\;2PQ^{2}=\tfrac{1}{2}PQ^{2}+2QD^{2}$$`,
              String.raw`উভয় পক্ষকে $2$ দিয়ে গুণ করে,`,
              String.raw`$$4PQ^{2}=PQ^{2}+4QD^{2}$$`,
              String.raw`$$\therefore\;4QD^{2}=3PQ^{2}$$`,
            ],
            answer: "প্রমাণিত",
          },
        },
      ],
    },

    // ─────────────── নমুনা প্রশ্ন — সংক্ষিপ্ত-উত্তর (২০) ───────────────
    {
      id: 20,
      group: C15_MODEL_SA,
      question: "নিচের প্রশ্নগুলোর উত্তর দাও:",
      parts: [
        {
          label: "ক",
          question:
            "একজোড়া সমান্তরাল রেখার মধ্যে অবস্থিত একটি সামান্তরিক ও একটি ত্রিভুজের ক্ষেত্রফল সমান হলে, সামান্তরিকটির ভূমি ও ত্রিভুজটির ভূমির দৈর্ঘ্যের অনুপাত নির্ণয় করো।",
          solution: {
            steps: [
              String.raw`একই সমান্তরাল রেখাযুগলের মধ্যে বলে দুইটিরই উচ্চতা সমান, ধরি $h$। সামান্তরিকের ভূমি $a$, ত্রিভুজের ভূমি $b$।`,
              String.raw`$$a\times h=\tfrac{1}{2}\times b\times h\;\Rightarrow\;a=\tfrac{1}{2}b$$`,
              String.raw`$$\therefore\;a:b=1:2$$`,
            ],
            answer: "১ : ২",
          },
        },
        {
          label: "খ",
          question:
            "কোনো বর্গক্ষেত্রের ক্ষেত্রফল এবং এর কর্ণের উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের অনুপাত নির্ণয় করো।",
          solution: {
            steps: [
              String.raw`বর্গের বাহু $a$ হলে কর্ণ$^{2}=a^{2}+a^{2}=2a^{2}$ [পিথাগোরাস]।`,
              String.raw`$$a^{2}:2a^{2}=1:2$$`,
            ],
            answer: "১ : ২",
          },
        },
        {
          label: "গ",
          question: String.raw`$\triangle ABC$-এর $AB=AC$ এবং $AD\perp BC$ হলে, $\triangle ABD:\triangle ACD$ নির্ণয় করো।`,
          solution: {
            steps: [
              String.raw`সমকোণী $\triangle ABD$ ও $\triangle ACD$ এ অতিভুজ $AB=AC$ এবং $AD$ সাধারণ বাহু, তাই এরা সর্বসম [অতিভুজ-বাহু]।`,
              String.raw`সর্বসম ত্রিভুজের ক্ষেত্রফল সমান, $\;\therefore\;\triangle ABD:\triangle ACD=1:1$`,
            ],
            answer: "১ : ১",
          },
        },
        {
          label: "ঘ",
          question:
            "কোন সমকোণী ত্রিভুজের অতিভুজ 10 সে.মি. এবং ভূমি 8 সে.মি. হলে, এর ক্ষেত্রফল নির্ণয় করো।",
          solution: {
            steps: [
              String.raw`উচ্চতা (লম্ব) $=\sqrt{10^{2}-8^{2}}=\sqrt{100-64}=\sqrt{36}=6$ সে.মি.।`,
              String.raw`$$\text{ক্ষেত্রফল}=\tfrac{1}{2}\times8\times6=24\text{ বর্গ সে.মি.}$$`,
            ],
            answer: "24 বর্গ সে.মি.",
          },
        },
      ],
    },
  ],
};
