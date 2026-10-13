// components/idiomsTestData.ts
//
// The idioms and phrases test: admission-style multiple-choice questions on
// the idioms, group verbs and phrases of idiomsData.ts. Each answer is
// explained in Bangla and stays hidden until the reader reveals it.

import type { Question } from "./admissionData";

const mcq = (
  group: string,
  id: string,
  question: string,
  options: string[],
  answer: number,
  explanation: string
): Question => {
  // Most options were written with the answer second, so each question's
  // options are turned round by a fixed step drawn from its id. The answer
  // then falls on every letter about equally, and the order never changes
  // between visits.
  const step = id.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % options.length;
  return {
    id: `idioms-test-${id}`,
    group,
    question,
    options: [...options.slice(step), ...options.slice(0, step)],
    answer: (answer - step + options.length) % options.length,
    explanation,
  };
};

const MEANING = "Meaning of the idiom";
const GAP = "Fill in the gap";
const VERBS = "Group verbs and phrases";

export const idiomsTest: Question[] = [
  mcq(MEANING, "bolt", "'A bolt from the blue' means —", ["a blue light", "a sudden shock", "a thunderstorm", "a happy event"], 1, "বিনা মেঘে বজ্রপাত — হঠাৎ আসা আঘাত বা দুঃসংবাদ।"),
  mcq(MEANING, "sixes", "'At sixes and sevens' means —", ["in a hurry", "in disorder", "in a good mood", "counting numbers"], 1, "বিশৃঙ্খল অবস্থায় — সবকিছু এলোমেলো।"),
  mcq(MEANING, "elephant", "'A white elephant' means —", ["a rare animal", "a royal gift", "a costly but useless thing", "a great leader"], 2, "ব্যয়বহুল অথচ অলাভজনক বস্তু — যার রক্ষণাবেক্ষণের খরচ লাভের চেয়ে বেশি।"),
  mcq(MEANING, "midnight", "'To burn the midnight oil' means —", ["to waste fuel", "to light a lamp", "to sleep early", "to work late at night"], 3, "রাত জেগে কঠোর পরিশ্রম করা বা পড়াশোনা করা।"),
  mcq(MEANING, "crocodile", "'Crocodile tears' means —", ["false sorrow", "deep grief", "tears of joy", "a painful wound"], 0, "মায়াকান্না — লোক দেখানো দুঃখ।"),
  mcq(MEANING, "blue-moon", "'Once in a blue moon' means —", ["every month", "very rarely", "at night", "never"], 1, "কালেভদ্রে — খুব কম সময়।"),
  mcq(MEANING, "red-tape", "'Red tape' means —", ["a kind of ribbon", "a danger signal", "official delay", "a sign of love"], 2, "লালফিতার দৌরাত্ম্য — দাপ্তরিক নিয়মকানুনের কারণে অহেতুক দেরি।"),
  mcq(MEANING, "rat", "'To smell a rat' means —", ["to find a dead rat", "to suspect something wrong", "to dislike someone", "to be afraid"], 1, "কোনো কিছুতে গোলমাল আছে বলে সন্দেহ করা।"),
  mcq(MEANING, "lion", "'The lion's share' means —", ["a small part", "an equal part", "the largest part", "a brave share"], 2, "সিংহভাগ — সবচেয়ে বড় অংশ।"),
  mcq(MEANING, "achilles", "'Achilles' heel' means —", ["a strong point", "a weak point", "a deep wound", "a Greek hero"], 1, "দুর্বল স্থান — যেখানে আঘাত করলে কাউকে কাবু করা যায়।"),
  mcq(MEANING, "truant", "'To play truant' means —", ["to play games", "to cheat in a game", "to stay away from school without leave", "to act in a play"], 2, "স্কুল পালানো — না জানিয়ে স্কুলে অনুপস্থিত থাকা।"),
  mcq(MEANING, "fair-weather", "A 'fair-weather friend' is one who —", ["loves good weather", "stays only in good times", "is always loyal", "forecasts the weather"], 1, "সুসময়ের বন্ধু — বিপদে যাকে পাশে পাওয়া যায় না।"),
  mcq(MEANING, "wits-end", "'At one's wit's end' means —", ["very clever", "completely puzzled", "very happy", "at the end of a joke"], 1, "হতবুদ্ধি, কূলকিনারা না পাওয়া অবস্থা।"),
  mcq(MEANING, "dark-horse", "'A dark horse' is —", ["a black horse", "an unexpected winner", "a dangerous man", "a lazy worker"], 1, "অপ্রত্যাশিত বিজয়ী — যার সামর্থ্য আগে কেউ জানত না।"),
  mcq(MEANING, "eleventh", "'At the eleventh hour' means —", ["at eleven o'clock", "at the last moment", "too early", "at midnight"], 1, "শেষ মুহূর্তে।"),
  mcq(MEANING, "greek", "'It is Greek to me' means —", ["it is beautiful", "it is ancient", "I cannot understand it", "I like it"], 2, "দুর্বোধ্য — কিছুই বুঝতে পারছি না।"),
  mcq(MEANING, "hand-glove", "'Hand in glove' means —", ["very intimate (usually in wrongdoing)", "wearing gloves", "openly hostile", "shaking hands"], 0, "গলায় গলায় ভাব — সাধারণত অসৎ কাজে একজোট।"),
  mcq(MEANING, "cock-bull", "'A cock and bull story' means —", ["a farm story", "an absurd, unbelievable story", "a true story", "a fable"], 1, "আজগুবি গল্প, অবিশ্বাস্য কাহিনি।"),
  mcq(MEANING, "french-leave", "'To take French leave' means —", ["to go to France", "to be absent without permission", "to take a long holiday", "to resign"], 1, "বিনা অনুমতিতে অনুপস্থিত থাকা।"),
  mcq(MEANING, "open-secret", "'An open secret' is —", ["a secret everyone knows", "a well-kept secret", "a secret letter", "a hidden truth"], 0, "প্রকাশ্য গোপন কথা — এমন 'গোপন' বিষয় যা সবাই জানে।"),
  mcq(MEANING, "turncoat", "A 'turncoat' is a person who —", ["sells coats", "changes sides for gain", "is very fashionable", "is a tailor"], 1, "দলত্যাগী, সুবিধাবাদী।"),
  mcq(MEANING, "teacup", "'A storm in a teacup' means —", ["a sudden storm", "a big fuss about a small matter", "a broken cup", "a serious danger"], 1, "তুচ্ছ বিষয়ে বড় হইচই।"),
  mcq(MEANING, "bed-roses", "'Life is not a bed of roses' means life is not —", ["beautiful", "always easy", "long", "worth living"], 1, "a bed of roses = সুখের জীবন, আরামের অবস্থা — জীবন সবসময় সহজ নয়।"),
  mcq(MEANING, "cats-dogs", "'It is raining cats and dogs' means it is raining —", ["lightly", "heavily", "now and then", "with hail"], 1, "মুষলধারে বৃষ্টি হচ্ছে।"),
  mcq(MEANING, "wet-blanket", "A 'wet blanket' is a person who —", ["is always sad", "spoils others' fun", "sleeps a lot", "is very poor"], 1, "যে অন্যের আনন্দ মাটি করে দেয়।"),

  mcq(GAP, "stone", "He left no stone ___ to find his lost son.", ["turned", "unturned", "untouched", "moved"], 1, "leave no stone unturned = চেষ্টার কোনো ত্রুটি না রাখা। ইডিয়মের শব্দ নির্দিষ্ট, বদলানো যায় না।"),
  mcq(GAP, "milk", "It is no use crying over ___ milk.", ["spoiled", "sour", "spilt", "hot"], 2, "cry over spilt milk = অতীত ক্ষতির জন্য বৃথা আক্ষেপ করা।"),
  mcq(GAP, "thick", "A true friend stands by us through thick and ___.", ["thin", "thick", "poor", "bad"], 0, "through thick and thin = সুখে-দুঃখে, সকল অবস্থায়।"),
  mcq(GAP, "bud", "The plot was nipped in the ___.", ["root", "bud", "leaf", "seed"], 1, "nip in the bud = অঙ্কুরেই বিনাশ করা।"),
  mcq(GAP, "crook", "He wants to win by hook or by ___.", ["cook", "look", "crook", "book"], 2, "by hook or by crook = যে কোনো উপায়ে, ছলে-বলে-কৌশলে।"),
  mcq(GAP, "ends", "With prices rising, the poor can hardly make both ends ___.", ["join", "meet", "close", "touch"], 1, "make both ends meet = আয়-ব্যয়ের সমন্বয় করা।"),
  mcq(GAP, "heels", "The thief took to his ___ when he saw the police.", ["feet", "legs", "heels", "toes"], 2, "take to one's heels = দৌড়ে পালানো।"),
  mcq(GAP, "bag", "My brother let the cat out of the ___.", ["box", "bag", "house", "room"], 1, "let the cat out of the bag = গোপন কথা ফাঁস করা।"),
  mcq(GAP, "leaf", "After leaving jail, he turned over a new ___.", ["page", "book", "life", "leaf"], 3, "turn over a new leaf = শুধরে গিয়ে নতুন জীবন শুরু করা।"),
  mcq(GAP, "deaf", "He turned a ___ ear to my advice.", ["blind", "deaf", "dumb", "cold"], 1, "turn a deaf ear to = কর্ণপাত না করা।"),
  mcq(GAP, "tat", "He insulted me, so I gave him tit for ___.", ["tat", "tit", "that", "tot"], 0, "tit for tat = যেমন কুকুর তেমন মুগুর, ইটের বদলে পাটকেল।"),
  mcq(GAP, "colours", "She came off with flying ___ in the examination.", ["flags", "colours", "marks", "birds"], 1, "come off with flying colours = কৃতিত্বের সাথে সফল হওয়া।"),

  mcq(VERBS, "put-up", "I cannot put up ___ such noise.", ["on", "at", "with", "to"], 2, "put up with = সহ্য করা।"),
  mcq(VERBS, "call-off", "The meeting was called ___ due to rain.", ["on", "off", "for", "at"], 1, "call off = বাতিল করা; call on = দেখা করতে যাওয়া; call for = দাবি করা।"),
  mcq(VERBS, "take-after", "The boy takes ___ his father.", ["after", "over", "up", "off"], 0, "take after = চেহারা বা স্বভাবে কারও মতো হওয়া।"),
  mcq(VERBS, "look-into", "The police are looking ___ the matter.", ["after", "for", "into", "up"], 2, "look into = তদন্ত করা; look after = দেখাশোনা করা; look for = খোঁজা।"),
  mcq(VERBS, "look-up-to", "Students should look up ___ their teachers.", ["on", "at", "for", "to"], 3, "look up to = শ্রদ্ধা করা; উল্টোটা look down upon = হেয় করা।"),
  mcq(VERBS, "view-to", "He went to Dhaka with a view to ___ a job.", ["get", "getting", "got", "gets"], 1, "with a view to-র পরে verb-এর ing রূপ বসে, কারণ এখানে to একটি preposition।"),
  mcq(VERBS, "dint", "He succeeded by ___ of hard work.", ["means", "dint", "cause", "help"], 1, "by dint of = বলে, জোরে।"),
  mcq(VERBS, "put-off", "Never put ___ till tomorrow what you can do today.", ["on", "out", "off", "up"], 2, "put off = স্থগিত করা; put on = পরা; put out = নেভানো।"),
  mcq(VERBS, "broke-out", "Cholera broke ___ in the village.", ["in", "out", "down", "into"], 1, "break out = হঠাৎ শুরু হওয়া (রোগ, যুদ্ধ, আগুন); break into = জোর করে ঢোকা।"),
  mcq(VERBS, "set-in", "The rainy season has set ___.", ["in", "on", "off", "up"], 0, "set in = (ঋতু, রোগ) শুরু হওয়া; set out/off = যাত্রা শুরু করা।"),
  mcq(VERBS, "turned-down", "She turned ___ the job offer.", ["up", "out", "down", "over"], 2, "turn down = প্রত্যাখ্যান করা; turn up = উপস্থিত হওয়া।"),
  mcq(VERBS, "lieu", "He was given cash in ___ of a gift.", ["place", "lieu", "spite", "view"], 1, "in lieu of = পরিবর্তে, বদলে।"),
  mcq(VERBS, "large", "The murderer is still at ___.", ["free", "large", "liberty", "loose"], 1, "at large = মুক্ত, ধরাছোঁয়ার বাইরে।"),
  mcq(VERBS, "come-across", "I came ___ an old friend at the station.", ["across", "by", "over", "into"], 0, "come across = হঠাৎ দেখা পাওয়া; come by = লাভ করা।"),
];
