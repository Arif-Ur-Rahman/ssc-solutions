// components/writingData.ts
//
// Admission compositions: opinion essays of about 200 words. Every topic can
// be argued either way, so each one is written twice — once for each side —
// and the student picks the side they can defend better. Both sides are
// written to impress an examiner: rich vocabulary, idioms and proverbs, apt
// quotations, a fact or two and varied linking words, with the harder words
// and phrases noted A to Z behind the synopsis.

import type { Piece } from "../../english/components/englishData";

export const compositions: Piece[] = [
  {
    id: "are-lies-sometimes-necessary",
    title: "Are Lies Sometimes Necessary?",
    source: "Fall 23, Slot 02",
    prompt:
      "To what extent do you agree or disagree that sometimes lies are necessary? Provide your opinion, supported by reasoning and examples, discussing situations where lying may be justified and its potential consequences.",
    vocab: [
      { word: "accomplice", bn: "অপরাধের সহযোগী", pos: "Noun", synonyms: ["partner in crime", "collaborator"], antonyms: ["opponent"] },
      { word: "bear witness to", bn: "সাক্ষ্য বহন করা, প্রমাণ দেওয়া", pos: "Phrase", synonyms: ["testify to", "prove"] },
      { word: "between the devil and the deep blue sea", bn: "উভয় সংকটে", pos: "Phrase", synonyms: ["in a dilemma"] },
      { word: "brand", bn: "তকমা দেওয়া, চিহ্নিত করা", pos: "Verb", past: "branded", pastParticiple: "branded", forms: [{ label: "noun", word: "brand" }], synonyms: ["label", "stigmatise"], antonyms: ["praise"] },
      { word: "can of worms", bn: "জটিল সমস্যার সূত্রপাত", pos: "Phrase", synonyms: ["a source of trouble"] },
      { word: "caught red-handed", bn: "হাতেনাতে ধরা পড়া", pos: "Phrase", synonyms: ["caught in the act"] },
      { word: "compassionate", bn: "সহানুভূতিশীল", pos: "Adjective", forms: [{ label: "noun", word: "compassion" }, { label: "adv", word: "compassionately" }], synonyms: ["kind", "merciful"], antonyms: ["cruel", "heartless"] },
      { word: "cornerstone", bn: "মূল ভিত্তি", pos: "Noun", synonyms: ["foundation", "basis"] },
      { word: "deception", bn: "প্রতারণা, ছলনা", pos: "Noun", forms: [{ label: "verb", word: "deceive (deceived)" }, { label: "adj", word: "deceptive" }], synonyms: ["trickery", "fraud"], antonyms: ["honesty", "sincerity"] },
      { word: "excusable", bn: "ক্ষমার যোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "excuse (excused)" }], synonyms: ["forgivable", "pardonable"], antonyms: ["inexcusable", "unpardonable"] },
      { word: "face the music", bn: "কাজের পরিণতির মুখোমুখি হওয়া", pos: "Phrase", synonyms: ["accept the consequences"] },
      { word: "falsify", bn: "জাল করা, মিথ্যা বানানো", pos: "Verb", past: "falsified", pastParticiple: "falsified", forms: [{ label: "noun", word: "falsification" }], synonyms: ["forge", "fake"], antonyms: ["verify"] },
      { word: "grim", bn: "মর্মান্তিক, ভয়াবহ", pos: "Adjective", synonyms: ["dreadful", "gloomy"], antonyms: ["cheerful", "pleasant"] },
      { word: "heart-wrenching", bn: "হৃদয়বিদারক", pos: "Adjective", synonyms: ["heartbreaking", "distressing"], antonyms: ["heart-warming"] },
      { word: "indispensable", bn: "অপরিহার্য", pos: "Adjective", synonyms: ["essential", "vital"], antonyms: ["unnecessary", "dispensable"] },
      { word: "inflict", bn: "(ক্ষতি বা কষ্ট) ঘটানো", pos: "Verb", past: "inflicted", pastParticiple: "inflicted", forms: [{ label: "noun", word: "infliction" }], synonyms: ["cause", "impose"], antonyms: ["spare"] },
      { word: "lesser of two evils", bn: "দুই মন্দের মধ্যে কম মন্দটি", pos: "Phrase", synonyms: ["the better of two bad choices"] },
      { word: "quicksand", bn: "চোরাবালি", pos: "Noun", synonyms: ["shaky ground"], antonyms: ["solid ground"] },
      { word: "snowball", bn: "ক্রমশ বেড়ে যাওয়া", pos: "Verb", past: "snowballed", pastParticiple: "snowballed", synonyms: ["escalate", "multiply"], antonyms: ["shrink", "decrease"] },
      { word: "spare", bn: "রেহাই দেওয়া", pos: "Verb", past: "spared", pastParticiple: "spared", synonyms: ["save from", "relieve"], antonyms: ["inflict"] },
      { word: "tact", bn: "বিচক্ষণতা, কৌশল", pos: "Noun", forms: [{ label: "adj", word: "tactful" }, { label: "adv", word: "tactfully" }], synonyms: ["diplomacy", "sensitivity"], antonyms: ["tactlessness", "rudeness"] },
      { word: "tangled web", bn: "জট-পাকানো জাল (মিথ্যার জাল)", pos: "Phrase", synonyms: ["a complicated mess"] },
      { word: "trivial", bn: "তুচ্ছ, নগণ্য", pos: "Adjective", forms: [{ label: "noun", word: "triviality" }], synonyms: ["petty", "trifling"], antonyms: ["serious", "important"] },
      { word: "truth will out", bn: "সত্য একদিন প্রকাশ পাবেই", pos: "Phrase" },
      { word: "white lie", bn: "কারও মন রক্ষার জন্য বলা নির্দোষ মিথ্যা", pos: "Phrase", synonyms: ["harmless lie"] },
    ],
    body: [
      { type: "heading", text: "Side 1: Yes, lies are sometimes necessary" },
      {
        type: "para",
        text: "Honesty is undoubtedly the best policy, yet life is seldom painted in black and white. I firmly believe that there are certain delicate situations in which a lie becomes not merely excusable but indispensable.",
      },
      {
        type: "para",
        text: "To begin with, a well-intentioned white lie often spares people needless pain. When a grieving friend asks whether they could have saved a loved one, a gentle reassurance is far more humane than a brutal truth. Similarly, a doctor's hopeful words often lift a frightened patient's spirits and speed recovery.",
      },
      {
        type: "para",
        text: "Furthermore, a lie can serve as a shield for the innocent. If a murderer demands to know where his victim is hiding, revealing the truth would make us an accomplice to the crime. Likewise, a soldier who falls into enemy hands is duty-bound to conceal the truth to protect the nation.",
      },
      {
        type: "para",
        text: "History, too, bears witness to the value of such lies. During our Liberation War in 1971, countless villagers deliberately misled the occupying army to shelter freedom fighters, and today they are rightly hailed as heroes rather than branded as liars.",
      },
      {
        type: "para",
        text: "Nevertheless, such a lie must remain the exception rather than the rule. Once lying becomes a habit, it opens a can of worms, as one falsehood inevitably breeds another. In a nutshell, when we are caught between the devil and the deep blue sea, a compassionate lie may sometimes be the lesser of two evils.",
      },
      { type: "heading", text: "Side 2: No, lies are never truly necessary" },
      {
        type: "para",
        text: "Some people argue that a lie is occasionally unavoidable. I, however, wholeheartedly disagree, for a lie, however trivial, inflicts far more harm than good in the long run.",
      },
      {
        type: "para",
        text: "First and foremost, trust is the cornerstone of every relationship, and a single lie can shake it to its foundation. Like a shattered mirror, broken trust may be pieced together but never made flawless again.",
      },
      {
        type: "para",
        text: "Secondly, lies have a nasty habit of snowballing. As Sir Walter Scott rightly observed, 'Oh, what a tangled web we weave, when first we practise to deceive!' To cover up one lie, we are compelled to invent ten more, until we are caught red-handed, for truth will out sooner or later.",
      },
      {
        type: "para",
        text: "Moreover, so-called harmless white lies pave the way for graver deception. A child who escapes punishment by lying today may grow into an official who takes bribes and falsifies records tomorrow. Even in heart-wrenching situations, such as breaking grim news to a patient, the truth can be conveyed with compassion and tact rather than buried under comforting fiction.",
      },
      {
        type: "para",
        text: "Admittedly, honesty sometimes stings, and it takes courage to face the music. Nonetheless, a bitter truth is infinitely better than a sweet lie. As Mark Twain wittily remarked, 'If you tell the truth, you don't have to remember anything.' To sum up, a society founded on truth stands on far firmer ground than one built on the quicksand of convenient lies.",
      },
    ],
  },
  {
    id: "mental-health-counselling-in-schools",
    title: "Mental Health Counselling in Schools",
    source: "Fall 23, Slot 02",
    prompt:
      "Is it necessary for schools to have a department for mental health counseling? Share your thoughts using easy language, giving reasons and examples to explain your opinion.",
    vocab: [
      { word: "adolescent", bn: "কিশোর-কিশোরী", pos: "Noun", forms: [{ label: "noun", word: "adolescence" }, { label: "adj", word: "adolescent" }], synonyms: ["teenager", "youth"], antonyms: ["adult"] },
      { word: "cost an arm and a leg", bn: "অত্যন্ত ব্যয়বহুল হওয়া", pos: "Phrase", synonyms: ["cost a fortune"] },
      { word: "cut-throat", bn: "তীব্র, নির্মম (প্রতিযোগিতা)", pos: "Adjective", synonyms: ["fierce", "ruthless"], antonyms: ["friendly", "gentle"] },
      { word: "deep-rooted", bn: "গভীরে প্রোথিত", pos: "Adjective", synonyms: ["ingrained", "entrenched"], antonyms: ["superficial", "shallow"] },
      { word: "discord", bn: "কলহ, অশান্তি", pos: "Noun", forms: [{ label: "adj", word: "discordant" }], synonyms: ["conflict", "strife"], antonyms: ["harmony", "peace"] },
      { word: "drop in the ocean", bn: "সমুদ্রে এক ফোঁটা পানি, নগণ্য পরিমাণ", pos: "Phrase", synonyms: ["a tiny amount"] },
      { word: "few and far between", bn: "খুবই বিরল", pos: "Phrase", synonyms: ["scarce", "rare"], antonyms: ["plentiful"] },
      { word: "full-fledged", bn: "পূর্ণাঙ্গ", pos: "Adjective", synonyms: ["complete", "fully developed"], antonyms: ["partial", "incomplete"] },
      { word: "grapple with", bn: "মোকাবিলা করা, লড়াই করা", pos: "Phrase", synonyms: ["struggle with", "tackle"] },
      { word: "keep at bay", bn: "দূরে রাখা, ঠেকিয়ে রাখা", pos: "Phrase", synonyms: ["hold off", "ward off"], antonyms: ["let in"] },
      { word: "lend a sympathetic ear", bn: "সহানুভূতির সাথে কারও কথা শোনা", pos: "Phrase", synonyms: ["listen kindly"] },
      { word: "light at the end of the tunnel", bn: "দুঃসময়ের শেষে আশার আলো", pos: "Phrase", synonyms: ["a ray of hope"] },
      { word: "make ends meet", bn: "কোনোমতে খরচ চালানো", pos: "Phrase", synonyms: ["get by", "manage"] },
      { word: "nip in the bud", bn: "শুরুতেই বিনাশ করা", pos: "Phrase", synonyms: ["stop early", "prevent"] },
      { word: "pipe dream", bn: "অবাস্তব কল্পনা, দিবাস্বপ্ন", pos: "Phrase", synonyms: ["fantasy", "castle in the air"], antonyms: ["reality"] },
      { word: "prevention is better than cure", bn: "প্রতিকারের চেয়ে প্রতিরোধ উত্তম", pos: "Phrase" },
      { word: "psychologist", bn: "মনোবিজ্ঞানী", pos: "Noun", forms: [{ label: "noun", word: "psychology" }, { label: "adj", word: "psychological" }], synonyms: ["therapist", "counsellor"] },
      { word: "relentless", bn: "অবিরাম, নিরন্তর", pos: "Adjective", forms: [{ label: "adv", word: "relentlessly" }], synonyms: ["ceaseless", "unremitting"], antonyms: ["occasional", "intermittent"] },
      { word: "remedy", bn: "প্রতিকার", pos: "Noun", forms: [{ label: "verb", word: "remedy (remedied)" }, { label: "adj", word: "remedial" }], synonyms: ["cure", "solution"] },
      { word: "stigma", bn: "সামাজিক কলঙ্ক, লজ্জা", pos: "Noun", forms: [{ label: "verb", word: "stigmatise (stigmatised)" }], synonyms: ["shame", "disgrace"], antonyms: ["honour", "respect"] },
      { word: "suffer in silence", bn: "নীরবে কষ্ট সহ্য করা", pos: "Phrase", synonyms: ["endure quietly"] },
      { word: "vulnerable", bn: "অরক্ষিত, ঝুঁকিপূর্ণ", pos: "Adjective", forms: [{ label: "noun", word: "vulnerability" }], synonyms: ["defenceless", "fragile"], antonyms: ["secure", "invulnerable"] },
      { word: "weigh heavily on", bn: "গভীরভাবে চাপ সৃষ্টি করা", pos: "Phrase", synonyms: ["burden", "trouble"] },
      { word: "white elephant", bn: "ব্যয়বহুল কিন্তু অকেজো জিনিস", pos: "Phrase", synonyms: ["a costly burden"] },
    ],
    body: [
      { type: "heading", text: "Side 1: Yes, schools need a counselling department" },
      {
        type: "para",
        text: "In this age of cut-throat competition, students live under relentless pressure. I strongly believe that every school must have a dedicated mental health counselling department, because a sound mind is as vital as a sound body.",
      },
      {
        type: "para",
        text: "First and foremost, students grapple with countless problems that they dare not share with anyone. Exam stress, family discord, bullying and loneliness weigh heavily on tender minds, and many of them suffer in silence. According to the World Health Organization, one in seven adolescents worldwide experiences a mental disorder. A trained counsellor can lend a sympathetic ear without passing judgement and help a student see the light at the end of the tunnel.",
      },
      {
        type: "para",
        text: "Secondly, timely support can nip a crisis in the bud. Untreated depression and anxiety may push a vulnerable student towards drug abuse, self-harm or even suicide, tragedies that make headlines every now and then. After all, prevention is better than cure.",
      },
      {
        type: "para",
        text: "Moreover, counselling benefits studies as well. An anxious mind cannot concentrate, whereas an emotionally stable student learns faster and performs better in examinations. Counsellors can also teach simple techniques to keep exam nerves at bay.",
      },
      {
        type: "para",
        text: "Some may argue that such a department is too costly to run. However, its cost is a mere drop in the ocean compared with the precious young lives it can save. All things considered, a counselling department is no longer a luxury but an absolute necessity.",
      },
      { type: "heading", text: "Side 2: No, a separate department is not necessary" },
      {
        type: "para",
        text: "There is no denying that mental health deserves serious attention. However, I am not convinced that every school needs a separate counselling department, especially in a resource-strapped country like ours.",
      },
      {
        type: "para",
        text: "First of all, most of our schools are already struggling to make ends meet. Many of them lack adequate classrooms, laboratories and qualified teachers. Setting up a full-fledged department with professional psychologists would cost an arm and a leg, and that money could be far better spent on these basic needs.",
      },
      {
        type: "para",
        text: "Secondly, trained counsellors are few and far between in Bangladesh, so appointing one in every school is simply a pipe dream. Even where counsellors are available, a deep-rooted stigma still surrounds mental illness in our society. Many students would rather suffer than be seen walking into a counsellor's office, so a separate department may well turn into a white elephant.",
      },
      {
        type: "para",
        text: "Instead, there is a cheaper and more practical alternative. Class teachers can be given short, practical training to identify troubled students and offer them timely guidance. Parents, too, should spend quality time with their children and keep an eye on any sudden change in their behaviour.",
      },
      {
        type: "para",
        text: "In conclusion, students' mental well-being must never be neglected, but a separate department is not the only remedy. By training teachers and involving parents, we can achieve the same goal at a fraction of the cost.",
      },
    ],
  },
  {
    id: "family-or-society-influence-on-children",
    title: "Family or Society: Who Shapes a Child More?",
    source: "Summer 23, Slot 01",
    prompt:
      "Reflecting on the upbringing of children, who has a bigger influence on them: society or family? Discuss your viewpoint, supporting your argument with reasoning and examples.",
    vocab: [
      { word: "as the twig is bent, so grows the tree", bn: "ডাল যেমন বাঁকানো হয়, গাছ তেমনই বাড়ে (শৈশবের শিক্ষাই জীবন গড়ে)", pos: "Phrase" },
      { word: "bad apple", bn: "যে খারাপ মানুষ অন্যদেরও নষ্ট করে", pos: "Phrase", synonyms: ["bad influence"] },
      { word: "beckon", bn: "ইশারায় ডাকা, প্রলুব্ধ করা", pos: "Verb", past: "beckoned", pastParticiple: "beckoned", synonyms: ["signal", "lure"], antonyms: ["repel"] },
      { word: "blossom", bn: "বিকশিত হওয়া", pos: "Verb", past: "blossomed", pastParticiple: "blossomed", forms: [{ label: "noun", word: "blossom" }], synonyms: ["flourish", "thrive"], antonyms: ["wither", "decline"] },
      { word: "brush aside", bn: "উপেক্ষা করা", pos: "Phrase", synonyms: ["ignore", "dismiss"], antonyms: ["heed"] },
      { word: "by the same token", bn: "একইভাবে", pos: "Phrase", synonyms: ["similarly", "likewise"] },
      { word: "charity begins at home", bn: "নিজের ঘর থেকেই দায়িত্ব শুরু হয়", pos: "Phrase" },
      { word: "enlightened", bn: "আলোকিত, সুশিক্ষিত", pos: "Adjective", forms: [{ label: "verb", word: "enlighten (enlightened)" }, { label: "noun", word: "enlightenment" }], synonyms: ["educated", "informed"], antonyms: ["ignorant", "backward"] },
      { word: "exert", bn: "(প্রভাব) খাটানো, প্রয়োগ করা", pos: "Verb", past: "exerted", pastParticiple: "exerted", forms: [{ label: "noun", word: "exertion" }], synonyms: ["exercise", "apply"] },
      { word: "fall into bad company", bn: "অসৎ সঙ্গে পড়া", pos: "Phrase", synonyms: ["mix with bad people"] },
      { word: "fit in", bn: "মানিয়ে নেওয়া, দলে মিশে যাওয়া", pos: "Phrase", synonyms: ["belong", "blend in"], antonyms: ["stand out"] },
      { word: "follow in someone's footsteps", bn: "কারও পদাঙ্ক অনুসরণ করা", pos: "Phrase", synonyms: ["copy", "imitate"] },
      { word: "impressionable", bn: "সহজে প্রভাবিত হয় এমন", pos: "Adjective", forms: [{ label: "noun", word: "impression" }], synonyms: ["susceptible", "receptive"], antonyms: ["resistant", "unaffected"] },
      { word: "indelible", bn: "অমোচনীয়, স্থায়ী", pos: "Adjective", forms: [{ label: "adv", word: "indelibly" }], synonyms: ["permanent", "lasting"], antonyms: ["temporary", "erasable"] },
      { word: "instil", bn: "মনে গেঁথে দেওয়া", pos: "Verb", past: "instilled", pastParticiple: "instilled", synonyms: ["implant", "inculcate"], antonyms: ["remove", "erase"] },
      { word: "like father, like son", bn: "যেমন বাবা, তেমন ছেলে", pos: "Phrase" },
      { word: "man is known by the company he keeps", bn: "সঙ্গ দেখেই মানুষ চেনা যায়", pos: "Phrase" },
      { word: "mould", bn: "গড়ে তোলা", pos: "Verb", past: "moulded", pastParticiple: "moulded", forms: [{ label: "noun", word: "mould" }], synonyms: ["shape", "form"] },
      { word: "nurturing", bn: "যত্নশীল, লালনকারী", pos: "Adjective", forms: [{ label: "verb", word: "nurture (nurtured)" }, { label: "noun", word: "nurture" }], synonyms: ["caring", "supportive"], antonyms: ["neglectful"] },
      { word: "peer pressure", bn: "সমবয়সীদের চাপ", pos: "Phrase" },
      { word: "riddled with", bn: "(খারাপ কিছুতে) ছেয়ে থাকা", pos: "Phrase", synonyms: ["full of", "plagued by"], antonyms: ["free from"] },
      { word: "tell right from wrong", bn: "ভালো-মন্দের পার্থক্য বোঝা", pos: "Phrase", synonyms: ["judge correctly"] },
      { word: "unconditional", bn: "শর্তহীন", pos: "Adjective", forms: [{ label: "adv", word: "unconditionally" }], synonyms: ["absolute", "wholehearted"], antonyms: ["conditional"] },
      { word: "upbringing", bn: "লালনপালন", pos: "Noun", forms: [{ label: "verb", word: "bring up (brought up)" }], synonyms: ["rearing", "nurture"] },
      { word: "wield", bn: "(ক্ষমতা বা প্রভাব) খাটানো", pos: "Verb", past: "wielded", pastParticiple: "wielded", synonyms: ["exercise", "hold"] },
    ],
    body: [
      { type: "heading", text: "Side 1: The family has the bigger influence" },
      {
        type: "para",
        text: "A child is like a lump of soft clay, and the first hands that mould it belong to the family. In my view, the family exerts a far greater influence on a child's upbringing than society ever can.",
      },
      {
        type: "para",
        text: "First and foremost, the family is rightly called the first school of a child, and the mother the first teacher. Long before children set foot outside the home, they learn from their parents how to speak, eat, pray and respect their elders.",
      },
      {
        type: "para",
        text: "Secondly, children are born imitators; they learn far more from what their parents do than from what they say. If parents are honest, disciplined and hardworking, children naturally follow in their footsteps. That is why the proverb goes, 'Like father, like son.'",
      },
      {
        type: "para",
        text: "Moreover, the family provides the unconditional love and emotional security that a child needs to blossom. A child raised in a nurturing home faces the world with confidence, whereas a neglected one easily falls into bad company. Furthermore, the moral values instilled at home serve as an invisible shield. Even when society beckons towards the wrong path, a well-brought-up child can tell right from wrong.",
      },
      {
        type: "para",
        text: "Admittedly, society too plays its part, but it merely builds on the foundation laid at home. To sum up, as the twig is bent, so grows the tree, and it is the family that bends the twig first.",
      },
      { type: "heading", text: "Side 2: Society has the bigger influence" },
      {
        type: "para",
        text: "It is often said that charity begins at home. Nevertheless, in today's interconnected world, I believe society wields a far greater influence on children than the family does.",
      },
      {
        type: "para",
        text: "To begin with, children spend most of their waking hours outside the home. At school, on the playground and in their circle of friends, they constantly pick up new habits, words and attitudes, both good and bad. Peer pressure is so powerful that a teenager may brush aside the advice of loving parents simply to fit in with friends.",
      },
      {
        type: "para",
        text: "Furthermore, the internet and social media have brought the entire society into a child's palm. What youngsters watch on YouTube or TikTok often shapes their dreams, fashion and behaviour more profoundly than anything their parents preach. In addition, teachers, neighbours, celebrities and sporting heroes leave an indelible mark on impressionable minds.",
      },
      {
        type: "para",
        text: "Besides, a man is known by the company he keeps, and, by the same token, a child is moulded by the company it grows up in. Even the most devoted family cannot fully shield its children from a society riddled with corruption, drugs and violence, where one bad apple can spoil the whole barrel.",
      },
      {
        type: "para",
        text: "Therefore, the family may lay the foundation, but it is society that builds the house upon it. In a nutshell, a healthy society is the key to raising an enlightened generation.",
      },
    ],
  },
  {
    id: "robots-or-humans-in-factories",
    title: "Robots or Humans in Industrial Factories",
    source: "Summer 23, Slot 01",
    prompt:
      "Which one between Robots and Humans is more efficient for the industrial factories? Explain your opinion, giving reasons and examples to support your answer.",
    vocab: [
      { word: "assemble", bn: "জোড়া লাগানো, তৈরি করা", pos: "Verb", past: "assembled", pastParticiple: "assembled", forms: [{ label: "noun", word: "assembly" }], synonyms: ["put together", "build"], antonyms: ["dismantle"] },
      { word: "at breakneck speed", bn: "অত্যন্ত দ্রুতগতিতে", pos: "Phrase", synonyms: ["very fast"], antonyms: ["at a snail's pace"] },
      { word: "backbone", bn: "মেরুদণ্ড, মূল ভিত্তি", pos: "Noun", synonyms: ["mainstay", "pillar"] },
      { word: "bread and butter", bn: "জীবিকা, রুটি-রুজি", pos: "Phrase", synonyms: ["livelihood", "living"] },
      { word: "by leaps and bounds", bn: "খুব দ্রুতগতিতে", pos: "Phrase", synonyms: ["rapidly", "swiftly"], antonyms: ["slowly"] },
      { word: "crop up", bn: "হঠাৎ দেখা দেওয়া", pos: "Phrase", synonyms: ["arise", "emerge"] },
      { word: "devise", bn: "উদ্ভাবন করা, বের করা", pos: "Verb", past: "devised", pastParticiple: "devised", forms: [{ label: "noun", word: "device" }], synonyms: ["invent", "work out"] },
      { word: "fatigue", bn: "ক্লান্তি", pos: "Noun", forms: [{ label: "adj", word: "fatigued" }], synonyms: ["tiredness", "exhaustion"], antonyms: ["energy", "freshness"] },
      { word: "glaring", bn: "জাজ্বল্যমান, স্পষ্ট", pos: "Adjective", synonyms: ["obvious", "striking"], antonyms: ["hidden", "obscure"] },
      { word: "hand in hand", bn: "একসাথে, হাতে হাত মিলিয়ে", pos: "Phrase", synonyms: ["together", "jointly"], antonyms: ["separately"] },
      { word: "hazardous", bn: "বিপজ্জনক", pos: "Adjective", forms: [{ label: "noun", word: "hazard" }], synonyms: ["dangerous", "risky"], antonyms: ["safe", "harmless"] },
      { word: "hefty", bn: "বড় অঙ্কের, ভারী", pos: "Adjective", synonyms: ["large", "substantial"], antonyms: ["small", "slight"] },
      { word: "in jeopardy", bn: "বিপদের মুখে", pos: "Phrase", synonyms: ["at risk", "in danger"], antonyms: ["safe"] },
      { word: "intuition", bn: "অন্তর্দৃষ্টি, সহজাত বোধ", pos: "Noun", forms: [{ label: "adj", word: "intuitive" }], synonyms: ["instinct", "insight"] },
      { word: "lion's share", bn: "সিংহভাগ", pos: "Phrase", synonyms: ["the largest part", "majority"] },
      { word: "minute", bn: "অতি ক্ষুদ্র (উচ্চারণ: মাই-নিউট)", pos: "Adjective", synonyms: ["tiny", "microscopic"], antonyms: ["huge", "enormous"] },
      { word: "negligible", bn: "নগণ্য", pos: "Adjective", synonyms: ["insignificant", "trivial"], antonyms: ["considerable", "significant"] },
      { word: "on the spot", bn: "তাৎক্ষণিকভাবে, ঘটনাস্থলেই", pos: "Phrase", synonyms: ["immediately", "instantly"] },
      { word: "out of harm's way", bn: "বিপদ থেকে দূরে, নিরাপদে", pos: "Phrase", synonyms: ["safe", "protected"], antonyms: ["in danger"] },
      { word: "pay for itself", bn: "নিজের খরচ নিজেই তুলে আনা", pos: "Phrase", synonyms: ["recover its cost"] },
      { word: "plummet", bn: "হু হু করে নেমে যাওয়া", pos: "Verb", past: "plummeted", pastParticiple: "plummeted", synonyms: ["plunge", "drop"], antonyms: ["soar", "rise"] },
      { word: "precise", bn: "নিখুঁত, যথাযথ", pos: "Adjective", forms: [{ label: "noun", word: "precision" }, { label: "adv", word: "precisely" }], synonyms: ["exact", "accurate"], antonyms: ["imprecise", "inaccurate"] },
      { word: "prohibitively", bn: "সাধ্যের বাইরে, অতিরিক্তভাবে", pos: "Adverb", forms: [{ label: "adj", word: "prohibitive" }], synonyms: ["excessively", "exorbitantly"], antonyms: ["reasonably"] },
      { word: "put the cart before the horse", bn: "আগের কাজ পরে, পরের কাজ আগে করা", pos: "Phrase", synonyms: ["do things in the wrong order"] },
      { word: "replicate", bn: "হুবহু নকল করা", pos: "Verb", past: "replicated", pastParticiple: "replicated", forms: [{ label: "noun", word: "replica" }], synonyms: ["copy", "reproduce"] },
      { word: "round the clock", bn: "দিনরাত, চব্বিশ ঘণ্টা", pos: "Phrase", synonyms: ["day and night", "non-stop"] },
      { word: "skyrocket", bn: "হু হু করে বেড়ে যাওয়া", pos: "Verb", past: "skyrocketed", pastParticiple: "skyrocketed", synonyms: ["soar", "shoot up"], antonyms: ["plummet", "fall"] },
      { word: "think outside the box", bn: "গতানুগতিকতার বাইরে চিন্তা করা", pos: "Phrase", synonyms: ["think creatively"] },
      { word: "unforeseen", bn: "অপ্রত্যাশিত", pos: "Adjective", forms: [{ label: "verb", word: "foresee (foresaw, foreseen)" }], synonyms: ["unexpected", "sudden"], antonyms: ["expected", "predicted"] },
      { word: "usurp", bn: "জবরদখল করা", pos: "Verb", past: "usurped", pastParticiple: "usurped", forms: [{ label: "noun", word: "usurper" }], synonyms: ["seize", "take over"], antonyms: ["give up", "surrender"] },
    ],
    body: [
      { type: "heading", text: "Side 1: Robots are more efficient" },
      {
        type: "para",
        text: "We are living in the era of the Fourth Industrial Revolution, and automation is transforming industry by leaps and bounds. In my opinion, robots are undeniably more efficient than human beings in industrial factories.",
      },
      {
        type: "para",
        text: "First and foremost, robots can work round the clock without fatigue, illness or boredom. They demand no lunch breaks, no holidays and no overtime pay, so productivity soars while production costs plummet.",
      },
      {
        type: "para",
        text: "Secondly, robots are astonishingly precise. A robotic arm can assemble thousands of minute components into smartphones without a single error, whereas even the most skilled worker is prone to mistakes after long, exhausting shifts. A glaring example is the car industry of Japan, South Korea and Germany, where largely automated assembly lines turn out world-class cars at breakneck speed.",
      },
      {
        type: "para",
        text: "Moreover, robots can take on hazardous tasks such as welding, spraying toxic chemicals or lifting massive loads, which put human lives in jeopardy. Every year factory accidents claim many lives, and while a machine can be replaced, a human life cannot. Robots can thus keep workers out of harm's way.",
      },
      {
        type: "para",
        text: "Admittedly, robots require a hefty initial investment and skilled technicians to operate them. Nevertheless, a robot soon pays for itself, since it works for years at a negligible running cost. All things considered, robots have become the backbone of modern industry, and nations that ignore them will be left behind.",
      },
      { type: "heading", text: "Side 2: Humans are more efficient" },
      {
        type: "para",
        text: "Robots are fast and flawless, no doubt. However, I firmly believe that human beings remain more efficient in industrial factories, particularly in a labour-rich country like Bangladesh.",
      },
      {
        type: "para",
        text: "First of all, robots are mere machines that can do only what they have been programmed to do. When a machine breaks down or an unforeseen problem crops up, it is the human mind that thinks outside the box and devises a solution on the spot. Likewise, tasks such as designing garments, negotiating with buyers or checking quality call for creativity, intuition and sound judgement, qualities that no machine can replicate.",
      },
      {
        type: "para",
        text: "Secondly, robots are prohibitively expensive to buy, install and maintain. In a developing country where labour is cheap and abundant, replacing workers with robots would be like putting the cart before the horse.",
      },
      {
        type: "para",
        text: "Moreover, our ready-made garment industry, which earns the lion's share of our export income, employs around four million workers, most of whom are women. If robots usurp their places, these families will lose their bread and butter, and unemployment will skyrocket, breeding poverty, frustration and crime.",
      },
      {
        type: "para",
        text: "Undoubtedly, robots can be excellent assistants, but they can never replace the human brain and heart. To sum up, humans and robots should work hand in hand, but humans must remain at the heart of industry, for machines are made to serve people, not to replace them.",
      },
    ],
  },
  {
    id: "academic-subjects-or-life-skills",
    title: "Academic Subjects or Life Skills?",
    source: "Summer 23, Slot 02",
    prompt:
      "Should kids focus solely on academic subjects, or should they also learn life skills? Explain your thoughts, giving reasons and examples to support your view.",
    vocab: [
      { word: "all at sea", bn: "দিশেহারা, কিংকর্তব্যবিমূঢ়", pos: "Phrase", synonyms: ["confused", "bewildered"], antonyms: ["in control"] },
      { word: "all work and no play makes Jack a dull boy", bn: "শুধু পড়া আর কাজ, খেলাধুলা নেই — এতে মানুষ নিস্তেজ হয়ে পড়ে", pos: "Phrase" },
      { word: "at a loss", bn: "কী করবে বুঝতে না পারা", pos: "Phrase", synonyms: ["puzzled", "helpless"] },
      { word: "bookworm", bn: "বইপোকা", pos: "Noun", synonyms: ["avid reader", "scholar"] },
      { word: "bridge the gap", bn: "ব্যবধান ঘোচানো", pos: "Phrase", synonyms: ["close the gap"], antonyms: ["widen the gap"] },
      { word: "hand in hand", bn: "একসাথে, হাতে হাত মিলিয়ে", pos: "Phrase", synonyms: ["together", "side by side"], antonyms: ["separately"] },
      { word: "jack of all trades but master of none", bn: "সব কাজের কাজি, কিন্তু কোনোটাতেই দক্ষ নয়", pos: "Phrase" },
      { word: "land a job", bn: "চাকরি পাওয়া", pos: "Phrase", synonyms: ["get a job", "secure a job"], antonyms: ["lose a job"] },
      { word: "learn the ropes", bn: "কাজের কৌশল শিখে নেওয়া", pos: "Phrase", synonyms: ["get the hang of"] },
      { word: "make hay while the sun shines", bn: "সময় থাকতে সুযোগ কাজে লাগানো", pos: "Phrase", synonyms: ["seize the moment"] },
      { word: "make or break", bn: "গড়ে দেওয়া অথবা ভেঙে দেওয়া", pos: "Phrase", synonyms: ["decide the fate of"] },
      { word: "memorise", bn: "মুখস্থ করা", pos: "Verb", past: "memorised", pastParticiple: "memorised", forms: [{ label: "noun", word: "memory" }], synonyms: ["learn by heart", "commit to memory"], antonyms: ["forget"] },
      { word: "navigate", bn: "পথ চিনে চলা", pos: "Verb", past: "navigated", pastParticiple: "navigated", forms: [{ label: "noun", word: "navigation" }], synonyms: ["find one's way", "steer"], antonyms: ["get lost"] },
      { word: "overloaded", bn: "অতিরিক্ত ভারাক্রান্ত", pos: "Adjective", forms: [{ label: "verb", word: "overload (overloaded)" }], synonyms: ["overburdened", "crammed"], antonyms: ["light", "manageable"] },
      { word: "receptive", bn: "সহজে গ্রহণ করতে পারে এমন", pos: "Adjective", forms: [{ label: "verb", word: "receive (received)" }], synonyms: ["open", "responsive"], antonyms: ["unreceptive", "closed"] },
      { word: "reputable", bn: "সুনামধন্য", pos: "Adjective", forms: [{ label: "noun", word: "reputation" }], synonyms: ["respected", "renowned"], antonyms: ["disreputable"] },
      { word: "resilience", bn: "বিপদে ঘুরে দাঁড়ানোর ক্ষমতা", pos: "Noun", forms: [{ label: "adj", word: "resilient" }], synonyms: ["toughness", "strength"], antonyms: ["fragility", "weakness"] },
      { word: "self-reliant", bn: "আত্মনির্ভরশীল", pos: "Adjective", forms: [{ label: "noun", word: "self-reliance" }], synonyms: ["independent", "self-sufficient"], antonyms: ["dependent"] },
      { word: "soft skills", bn: "যোগাযোগ, দলগত কাজ ইত্যাদির মতো ব্যক্তিগত দক্ষতা", pos: "Phrase", antonyms: ["technical skills"] },
      { word: "squander", bn: "অপচয় করা", pos: "Verb", past: "squandered", pastParticiple: "squandered", synonyms: ["waste", "fritter away"], antonyms: ["save", "conserve"] },
      { word: "stand on one's own feet", bn: "নিজের পায়ে দাঁড়ানো", pos: "Phrase", synonyms: ["be self-reliant"] },
      { word: "syllabus", bn: "পাঠ্যসূচি", pos: "Noun", synonyms: ["curriculum", "course"] },
      { word: "time and tide wait for none", bn: "সময় ও স্রোত কারও জন্য অপেক্ষা করে না", pos: "Phrase" },
      { word: "undivided", bn: "অখণ্ড, পূর্ণ", pos: "Adjective", synonyms: ["complete", "full"], antonyms: ["divided", "partial"] },
      { word: "vie", bn: "প্রতিদ্বন্দ্বিতা করা", pos: "Verb", past: "vied", pastParticiple: "vied", synonyms: ["compete", "contend"] },
    ],
    body: [
      { type: "heading", text: "Side 1: Children should learn life skills too" },
      {
        type: "para",
        text: "Education is not merely about passing examinations; it is about preparing for life itself. Therefore, I firmly believe that children must learn practical life skills alongside their academic subjects.",
      },
      {
        type: "para",
        text: "First and foremost, good grades alone cannot guarantee survival in the real world. Many students with a golden GPA 5 cannot cook a simple meal, manage a monthly budget or speak confidently at an interview. Life skills such as communication, teamwork, time management and problem-solving bridge this gap between bookish knowledge and reality.",
      },
      {
        type: "para",
        text: "Secondly, these skills make children self-reliant. A child who knows first aid and how to navigate public transport can stand on their own feet in an emergency instead of being at a loss. In addition, skills like managing stress build resilience and protect children's mental health.",
      },
      {
        type: "para",
        text: "Moreover, employers today value soft skills as highly as certificates, and many brilliant graduates fail to land jobs simply because they cannot express themselves. As the saying goes, all work and no play makes Jack a dull boy; a student who merely memorises textbooks may become a bookworm who is all at sea when faced with real problems.",
      },
      {
        type: "para",
        text: "Of course, academic subjects remain indispensable, but knowledge and skills must go hand in hand. In a nutshell, schools should teach children not only how to make a living but also how to live a meaningful life.",
      },
      { type: "heading", text: "Side 2: Children should focus on academic subjects" },
      {
        type: "para",
        text: "Life skills are undoubtedly useful. However, I believe that during their school years children should concentrate wholeheartedly on their academic subjects.",
      },
      {
        type: "para",
        text: "To begin with, the school syllabus is already overloaded. Students have to master a wide range of subjects and sit for crucial public examinations like the SSC and HSC, which shape their entire future. Piling more subjects on top would only add to their burden and divide their attention, turning them into a jack of all trades but master of none.",
      },
      {
        type: "para",
        text: "Secondly, a strong academic foundation is the key that opens the door to reputable universities and rewarding careers. In a fiercely competitive country like ours, where countless candidates vie for a limited number of seats, a few marks can make or break a student's future.",
      },
      {
        type: "para",
        text: "Furthermore, most life skills, such as cooking, managing money or using public transport, can easily be learnt at home or picked up along the way. Children learn the ropes of daily life by watching their families, so schools need not squander precious class time on them. Besides, childhood is the golden period for acquiring knowledge, as the young mind is most receptive then.",
      },
      {
        type: "para",
        text: "Therefore, school should remain a temple of learning, while life skills can be nurtured at home. To sum up, students should make hay while the sun shines and give their undivided attention to their studies, for time and tide wait for none.",
      },
    ],
  },
  {
    id: "small-scale-farming-or-large-scale-industry",
    title: "Small-scale Farming or Large-scale Industry for Zero Hunger",
    source: "Summer 23, Slot 02",
    prompt:
      "Promoting small-scale farming is more effective in achieving zero hunger than investing in the large-scale industry. Explain your thoughts, giving reasons and examples to support your view.",
    vocab: [
      { word: "acute", bn: "তীব্র", pos: "Adjective", forms: [{ label: "adv", word: "acutely" }], synonyms: ["severe", "intense"], antonyms: ["mild", "slight"] },
      { word: "banish", bn: "দূর করা, তাড়িয়ে দেওয়া", pos: "Verb", past: "banished", pastParticiple: "banished", forms: [{ label: "noun", word: "banishment" }], synonyms: ["eliminate", "drive out"], antonyms: ["welcome", "invite"] },
      { word: "bear fruit", bn: "সুফল দেওয়া", pos: "Phrase", synonyms: ["succeed", "pay off"], antonyms: ["fail"] },
      { word: "by leaps and bounds", bn: "খুব দ্রুতগতিতে", pos: "Phrase", synonyms: ["rapidly", "swiftly"], antonyms: ["slowly"] },
      { word: "clutches", bn: "কবল, খপ্পর", pos: "Noun", synonyms: ["grip", "grasp"] },
      { word: "coffers", bn: "কোষাগার, তহবিল", pos: "Noun", synonyms: ["treasury", "funds"] },
      { word: "cultivable", bn: "চাষযোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "cultivate (cultivated)" }, { label: "noun", word: "cultivation" }], synonyms: ["arable", "farmable"], antonyms: ["barren", "infertile"] },
      { word: "drop in the ocean", bn: "সমুদ্রে এক ফোঁটা পানি, নগণ্য পরিমাণ", pos: "Phrase", synonyms: ["a tiny amount"] },
      { word: "erosion", bn: "ভাঙন, ক্ষয়", pos: "Noun", forms: [{ label: "verb", word: "erode (eroded)" }], synonyms: ["wearing away", "decay"] },
      { word: "fragmented", bn: "খণ্ড খণ্ড, বিভক্ত", pos: "Adjective", forms: [{ label: "verb", word: "fragment (fragmented)" }, { label: "noun", word: "fragmentation" }], synonyms: ["divided", "broken up"], antonyms: ["united", "consolidated"] },
      { word: "go to bed on an empty stomach", bn: "না খেয়ে ঘুমাতে যাওয়া", pos: "Phrase", synonyms: ["go hungry"] },
      { word: "harness", bn: "কাজে লাগানো", pos: "Verb", past: "harnessed", pastParticiple: "harnessed", synonyms: ["utilise", "exploit"], antonyms: ["waste"] },
      { word: "keep pace with", bn: "তাল মিলিয়ে চলা", pos: "Phrase", synonyms: ["keep up with"], antonyms: ["fall behind"] },
      { word: "kill two birds with one stone", bn: "এক ঢিলে দুই পাখি মারা", pos: "Phrase" },
      { word: "lift out of poverty", bn: "দারিদ্র্য থেকে বের করে আনা", pos: "Phrase", synonyms: ["make better off"] },
      { word: "once and for all", bn: "চিরতরে", pos: "Phrase", synonyms: ["for good", "permanently"] },
      { word: "privileged", bn: "সুবিধাভোগী", pos: "Adjective", forms: [{ label: "noun", word: "privilege" }], synonyms: ["advantaged", "elite"], antonyms: ["underprivileged", "deprived"] },
      { word: "put food on the table", bn: "পরিবারের খাবার জোগানো", pos: "Phrase", synonyms: ["provide for a family"] },
      { word: "robust", bn: "মজবুত, শক্তিশালী", pos: "Adjective", forms: [{ label: "noun", word: "robustness" }], synonyms: ["strong", "sturdy"], antonyms: ["weak", "fragile"] },
      { word: "safety-net programme", bn: "সামাজিক নিরাপত্তা কর্মসূচি", pos: "Phrase" },
      { word: "shrink", bn: "কমে যাওয়া, সংকুচিত হওয়া", pos: "Verb", past: "shrank", pastParticiple: "shrunk", synonyms: ["decrease", "contract"], antonyms: ["expand", "grow"] },
      { word: "starve", bn: "অনাহারে থাকা", pos: "Verb", past: "starved", pastParticiple: "starved", forms: [{ label: "noun", word: "starvation" }], synonyms: ["go hungry", "famish"], antonyms: ["feast"] },
      { word: "swell", bn: "ফুলে ওঠা, বেড়ে যাওয়া", pos: "Verb", past: "swelled", pastParticiple: "swollen", synonyms: ["grow", "increase"], antonyms: ["shrink", "decrease"] },
      { word: "urbanisation", bn: "নগরায়ণ", pos: "Noun", forms: [{ label: "verb", word: "urbanise (urbanised)" }, { label: "adj", word: "urban" }], synonyms: ["city growth"], antonyms: ["ruralisation"] },
      { word: "variety", bn: "বৈচিত্র্য, নানা রকম", pos: "Noun", forms: [{ label: "verb", word: "vary (varied)" }, { label: "adj", word: "various" }], synonyms: ["diversity", "range"], antonyms: ["sameness", "uniformity"] },
    ],
    body: [
      { type: "heading", text: "Side 1: Small-scale farming is more effective" },
      {
        type: "para",
        text: "Zero hunger means a world where no one goes to bed on an empty stomach. In my opinion, promoting small-scale farming is a far more effective way of achieving this noble goal than pouring money into large-scale industry.",
      },
      {
        type: "para",
        text: "First and foremost, small farmers are the backbone of our food security. In Bangladesh, the bulk of our rice, vegetables, pulses and fish comes from modest family farms, and agriculture still employs nearly half of our workforce. If these farmers are given quality seeds, fertiliser, easy credit and fair prices, food production will rise by leaps and bounds.",
      },
      {
        type: "para",
        text: "Secondly, hunger is most acute among the rural poor. Supporting small-scale farming gives these families both food on the table and money in their pockets, thus killing two birds with one stone. Moreover, small farms grow a rich variety of crops, which ensures a balanced diet and preserves the fertility of the soil.",
      },
      {
        type: "para",
        text: "Thirdly, small-scale farming delivers results faster and more fairly. It needs little capital and yields a harvest within a single season, whereas mega-projects take years to bear fruit. Large industries, on the contrary, mostly manufacture goods that cannot fill hungry stomachs, and their profits often end up in the coffers of a privileged few.",
      },
      {
        type: "para",
        text: "Industry undoubtedly has its place, but food must come first. To sum up, if we take care of our small farmers, they will take care of our hunger.",
      },
      { type: "heading", text: "Side 2: Large-scale industry is more effective" },
      {
        type: "para",
        text: "Small farmers, no doubt, feed our nation. However, I firmly believe that investing in large-scale industry is a more effective way to achieve zero hunger in the long run.",
      },
      {
        type: "para",
        text: "First of all, hunger is essentially a problem of poverty rather than of food shortage alone. People starve not because food is unavailable but because they cannot afford to buy it. Large industries generate millions of jobs, and a steady income enables families to put food on the table. Our ready-made garment sector, for instance, has lifted countless families out of the clutches of poverty.",
      },
      {
        type: "para",
        text: "Secondly, our cultivable land is shrinking alarmingly every year due to urbanisation and river erosion, while the population continues to swell. Tiny, fragmented plots simply cannot keep pace with this soaring demand, whereas large agro-industries can harness modern machinery, cold storage and food processing to produce more and waste less.",
      },
      {
        type: "para",
        text: "Moreover, industries earn precious foreign currency, which enables the country to import food in times of crisis such as floods or droughts. In addition, a robust industrial economy brings in more tax revenue, allowing the government to expand its safety-net programmes for the poorest of the poor.",
      },
      {
        type: "para",
        text: "Small-scale farming, though noble, is a drop in the ocean when it comes to feeding a nation of over seventeen crore people. In a nutshell, large-scale industry holds the key to banishing hunger once and for all.",
      },
    ],
  },
];
