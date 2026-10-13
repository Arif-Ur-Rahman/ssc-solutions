// components/idiomsData.ts
//
// Idioms and phrases for the admission tests: the idioms A to Z, then the
// group verbs and the fixed prepositional phrases the tests ask. The test on
// them is in idiomsTestData.ts. Every idiom is given with its
// Bangla meaning and used in a sentence; the synopsis of each piece lists the
// same idioms A to Z with their Bangla meaning and plain English sense, for
// quick revision before the test.

import type { Block, Piece, VocabEntry } from "../../english/components/englishData";

const h = (text: string): Block => ({ type: "heading", text });
const para = (text: string): Block => ({ type: "para", text });
const rule = (text: string, formula?: string): Block => ({
  type: "rule",
  text,
  formula,
});
const note = (text: string): Block => ({ type: "note", label: "Note", text });
// One example: each argument is a [label, sentence] pair.
const ex = (...lines: [string, string][]): Block => ({
  type: "example",
  lines: lines.map(([label, text]) => ({ label, text })),
});

// The idiom, its Bangla meaning, its plain English sense and a sentence using it.
type Idiom = [idiom: string, bn: string, en: string, example: string];

const byIdiom = (a: Idiom, b: Idiom) =>
  a[0].localeCompare(b[0], "en", { sensitivity: "base" });

// One piece of idioms: each idiom set out with its meaning and a sentence, and
// the whole list again A to Z behind the synopsis.
const idiomPiece = (
  id: string,
  title: string,
  label: string,
  idioms: Idiom[]
): Piece => {
  const sorted = [...idioms].sort(byIdiom);
  const vocab: VocabEntry[] = sorted.map(([word, bn, en]) => ({
    word,
    bn,
    pos: "Phrase",
    synonyms: [en],
  }));
  return {
    id,
    title,
    vocab,
    body: sorted.map(([word, bn, , example]) =>
      ex([label, word], ["Meaning", bn], ["Example", example])
    ),
  };
};

/* ───────────────────────── Idioms A to Z ───────────────────────── */

const idiomsA: Idiom[] = [
  ["a bed of roses", "সুখের জীবন, আরামের অবস্থা", "an easy, comfortable life", "Life is not a bed of roses; we have to struggle for everything."],
  ["a bird's eye view", "সামগ্রিক সংক্ষিপ্ত ধারণা; উপর থেকে দেখা দৃশ্য", "a general overview", "The first chapter gives a bird's eye view of our history."],
  ["a black sheep", "কুলাঙ্গার, পরিবারের কলঙ্ক", "a disgrace to the family", "He is the black sheep of an otherwise respected family."],
  ["a bolt from the blue", "বিনা মেঘে বজ্রপাত, আকস্মিক বিপদ", "a sudden shock", "The news of his father's death came as a bolt from the blue."],
  ["a cock and bull story", "আজগুবি গল্প, অবিশ্বাস্য কাহিনি", "an absurd, unbelievable story", "Nobody believed his cock and bull story about meeting a ghost."],
  ["a dark horse", "অপ্রত্যাশিত বিজয়ী; যার সামর্থ্য অজানা", "an unexpected winner", "The new candidate turned out to be a dark horse in the election."],
  ["a far cry", "অনেক দূরের ব্যাপার, বিরাট পার্থক্য", "very different from", "His new flat is a far cry from the hut he grew up in."],
  ["a fish out of water", "বেমানান পরিবেশে অস্বস্তিতে থাকা লোক", "someone uncomfortable in a strange place", "The village boy felt like a fish out of water in the busy city."],
  ["a hard nut to crack", "কঠিন সমস্যা বা কঠিন লোক", "a difficult problem or person", "The new headmaster is a hard nut to crack."],
  ["a man of letters", "পণ্ডিত ব্যক্তি, সাহিত্যিক", "a scholar, a writer", "Rabindranath Tagore was a man of letters."],
  ["a man of straw", "অপদার্থ, অসার লোক", "a person of no worth", "Do not rely on him; he is a man of straw."],
  ["a red-letter day", "স্মরণীয় দিন", "a memorable day", "16 December is a red-letter day in the history of Bangladesh."],
  ["a white elephant", "ব্যয়বহুল অথচ অলাভজনক বস্তু", "a costly but useless possession", "The old mill has become a white elephant for the owner."],
  ["a wild goose chase", "পণ্ডশ্রম, বৃথা অনুসন্ধান", "a hopeless search", "Looking for a cheap flat in Gulshan is a wild goose chase."],
  ["above board", "খোলাখুলি, সৎ ও প্রকাশ্য", "honest and open", "The whole deal was above board."],
  ["Achilles' heel", "দুর্বল স্থান", "a weak point", "Mathematics is his Achilles' heel."],
  ["add fuel to the fire", "আগুনে ঘি ঢালা, অবস্থা আরও খারাপ করা", "make a bad situation worse", "His rude reply only added fuel to the fire."],
  ["after one's own heart", "মনের মতো", "exactly to one's liking", "He is a teacher after my own heart."],
  ["all and sundry", "আপামর জনসাধারণ, সবাই", "everyone without distinction", "He invited all and sundry to his son's wedding."],
  ["an apple of discord", "বিবাদের কারণ", "a cause of quarrel", "The piece of land became an apple of discord between the brothers."],
  ["apple of one's eye", "নয়নের মণি, অতি প্রিয়", "someone very dear", "The little girl is the apple of her grandfather's eye."],
  ["at a loss", "কিংকর্তব্যবিমূঢ়, দিশেহারা", "puzzled, not knowing what to do", "I was at a loss what to do after missing the train."],
  ["at a stone's throw", "অতি নিকটে", "very near", "The school is at a stone's throw from my house."],
  ["at arm's length", "দূরত্ব বজায় রেখে", "at a safe distance", "Keep bad company at arm's length."],
  ["at daggers drawn", "চরম শত্রুভাবাপন্ন", "bitterly hostile", "The two neighbours are at daggers drawn over the boundary wall."],
  ["at one's wit's end", "হতবুদ্ধি, কূলকিনারা না পাওয়া", "completely puzzled", "The doctors were at their wit's end about the strange disease."],
  ["at sixes and sevens", "বিশৃঙ্খল অবস্থায়, এলোমেলো", "in complete disorder", "After the storm, everything in the house was at sixes and sevens."],
  ["at the eleventh hour", "শেষ মুহূর্তে", "at the last moment", "He reached the exam hall at the eleventh hour."],
];

const idiomsB: Idiom[] = [
  ["back to square one", "আবার গোড়া থেকে শুরু", "back to the beginning", "The plan failed, and we were back to square one."],
  ["bad blood", "শত্রুতা, বৈরিতা", "ill feeling between people", "There has been bad blood between the two families for years."],
  ["bag and baggage", "তল্পিতল্পাসহ, সম্পূর্ণভাবে", "with all one's belongings", "The tenant left the house bag and baggage."],
  ["bear the brunt", "মূল ধাক্কা সামলানো", "suffer the worst of something", "The poor bear the brunt of every price hike."],
  ["beat about the bush", "আসল কথা এড়িয়ে ঘুরিয়ে বলা, ধানাই-পানাই করা", "avoid coming to the point", "Stop beating about the bush and tell me what happened."],
  ["behind the scenes", "গোপনে, অন্তরালে", "secretly, out of public view", "Many people worked behind the scenes to make the event a success."],
  ["below the belt", "অন্যায়ভাবে, নীতিবিরুদ্ধ", "unfair", "His remark about her family was below the belt."],
  ["between the devil and the deep sea", "উভয় সংকটে", "between two equal dangers", "With a flood behind and a river ahead, the villagers were between the devil and the deep sea."],
  ["birds of a feather", "একই স্বভাবের লোক (চোরে চোরে মাসতুতো ভাই)", "people of the same kind", "Birds of a feather flock together."],
  ["bite the dust", "পরাজিত হওয়া; মারা যাওয়া", "be defeated; die", "Many strong teams bit the dust in the first round."],
  ["blow one's own trumpet", "নিজের ঢাক নিজে পেটানো, আত্মপ্রশংসা করা", "praise oneself", "A modest man never blows his own trumpet."],
  ["blue blood", "অভিজাত বংশ", "noble birth", "He is proud of his blue blood."],
  ["bread and butter", "জীবিকা", "a means of living", "Teaching is his bread and butter."],
  ["break the ice", "জড়তা ভাঙা, আলাপ শুরু করা", "start a conversation in a stiff situation", "The teacher told a joke to break the ice."],
  ["bring to book", "শাস্তির ব্যবস্থা করা, জবাবদিহি করানো", "punish, call to account", "The killers must be brought to book."],
  ["bring to light", "প্রকাশ করা, উদ্ঘাটন করা", "reveal", "The inquiry brought the fraud to light."],
  ["build castles in the air", "আকাশকুসুম কল্পনা করা", "make impossible plans", "Instead of building castles in the air, work hard."],
  ["burn one's fingers", "বিপদে পড়ে শিক্ষা পাওয়া, ক্ষতিগ্রস্ত হওয়া", "suffer loss through meddling", "He burnt his fingers in the share market."],
  ["burn the midnight oil", "রাত জেগে কঠোর পরিশ্রম করা", "study or work late at night", "She burnt the midnight oil before the admission test."],
  ["by and large", "মোটের উপর, সাধারণভাবে", "on the whole", "By and large, the programme was a success."],
  ["by dint of", "বলে, জোরে", "by means of", "He succeeded by dint of hard work."],
  ["by fits and starts", "অনিয়মিতভাবে, থেমে থেমে", "irregularly", "If you study by fits and starts, you cannot do well."],
  ["by hook or by crook", "যে কোনো উপায়ে, ছলে-বলে-কৌশলে", "by any means, fair or foul", "He wants to win the election by hook or by crook."],
  ["by leaps and bounds", "দ্রুতগতিতে", "very rapidly", "The population of Dhaka is growing by leaps and bounds."],
];

const idiomsC: Idiom[] = [
  ["call a spade a spade", "স্পষ্ট কথা বলা", "speak plainly", "He is not afraid to call a spade a spade."],
  ["call in question", "সন্দেহ প্রকাশ করা, প্রশ্ন তোলা", "doubt", "Nobody can call his honesty in question."],
  ["carry coals to Newcastle", "তেলা মাথায় তেল দেওয়া, অপ্রয়োজনীয় কাজ করা", "do something pointless", "Selling fish in a river village is like carrying coals to Newcastle."],
  ["cast pearls before swine", "উলুবনে মুক্তা ছড়ানো, অপাত্রে দান", "give something precious to one who cannot value it", "Teaching poetry to him is casting pearls before swine."],
  ["cat's paw", "অন্যের হাতের পুতুল", "a person used as a tool by another", "The leader used the boys as a cat's paw."],
  ["catch a Tartar", "বুনো ওলে বাঘা তেঁতুল; শক্ত প্রতিপক্ষের পাল্লায় পড়া", "meet a stronger opponent than expected", "The bully caught a Tartar when he picked on the new boy."],
  ["chicken-hearted", "ভীরু", "cowardly", "A chicken-hearted man cannot be a soldier."],
  ["cold war", "স্নায়ুযুদ্ধ, ঠান্ডা লড়াই", "hostility without open fighting", "There is a cold war between the two departments."],
  ["come off with flying colours", "কৃতিত্বের সাথে সফল হওয়া", "succeed brilliantly", "She came off with flying colours in the SSC examination."],
  ["come to light", "প্রকাশ পাওয়া", "become known", "The truth came to light after many years."],
  ["crocodile tears", "মায়াকান্না", "false sorrow", "Do not be moved by his crocodile tears."],
  ["cry for the moon", "অসম্ভব কিছু চাওয়া, বামন হয়ে চাঁদে হাত", "want the impossible", "Expecting a first prize without study is crying for the moon."],
  ["cry over spilt milk", "অতীত ক্ষতির জন্য বৃথা আক্ষেপ করা", "regret what cannot be undone", "It is no use crying over spilt milk."],
  ["curry favour with", "তোষামোদ করে অনুগ্রহ লাভের চেষ্টা করা", "flatter to win support", "He is always trying to curry favour with the boss."],
  ["cut a sorry figure", "হাস্যকর বা করুণ অবস্থায় পড়া", "make a poor impression", "He cut a sorry figure in the debate."],
  ["cut both ways", "উভয় দিকেই প্রযোজ্য হওয়া", "have both good and bad effects", "The argument cuts both ways."],
  ["cut no ice", "কোনো প্রভাব ফেলতে না পারা", "have no effect", "His excuses cut no ice with the teacher."],
];

const idiomsDtoF: Idiom[] = [
  ["day in and day out", "দিনের পর দিন, অবিরাম", "continuously, every day", "The farmer works in the field day in and day out."],
  ["dead letter", "অচল আইন বা নিয়ম", "a law no longer obeyed", "Many old laws have become a dead letter."],
  ["die in harness", "কর্মরত অবস্থায় মারা যাওয়া", "die while still working", "The old professor died in harness."],
  ["dog in the manger", "নিজেও ভোগ করে না, অন্যকেও করতে দেয় না এমন লোক", "one who keeps from others what he cannot use himself", "Don't be a dog in the manger; give the book to someone who needs it."],
  ["donkey's years", "দীর্ঘকাল", "a very long time", "I haven't seen him for donkey's years."],
  ["down to earth", "বাস্তববাদী, সাদাসিধে", "practical and sensible", "Despite her fame, she is very down to earth."],
  ["drop in the ocean", "সমুদ্রে এক বিন্দু, অতি সামান্য", "a very small amount", "The relief was only a drop in the ocean."],
  ["eat humble pie", "অপমান মেনে নেওয়া, ভুল স্বীকার করে নত হওয়া", "admit a mistake humbly", "He had to eat humble pie after his plan failed."],
  ["eat one's words", "কথা ফিরিয়ে নিতে বাধ্য হওয়া", "take back what one said", "He said she would fail, but he had to eat his words."],
  ["end in smoke", "ব্যর্থ হওয়া, ভেস্তে যাওয়া", "come to nothing", "All his grand plans ended in smoke."],
  ["every inch", "পুরোপুরি, সর্বাংশে", "completely", "He is every inch a gentleman."],
  ["face the music", "কাজের পরিণতির মুখোমুখি হওয়া", "accept the consequences", "If you break the rules, you will have to face the music."],
  ["fair-weather friend", "সুসময়ের বন্ধু", "a friend only in good times", "A fair-weather friend leaves you in danger."],
  ["far and wide", "সর্বত্র", "everywhere", "His fame spread far and wide."],
  ["feather in one's cap", "গৌরবের বিষয়, কৃতিত্ব", "an achievement to be proud of", "Winning the gold medal was a feather in her cap."],
  ["few and far between", "কদাচিৎ, বিরল", "rare", "Honest officers are few and far between."],
  ["fight shy of", "এড়িয়ে চলা", "avoid", "He always fights shy of hard work."],
  ["fish in troubled waters", "ঘোলা জলে মাছ শিকার করা, সুযোগ নেওয়া", "profit from others' troubles", "Dishonest traders fish in troubled waters during a crisis."],
  ["flesh and blood", "রক্তমাংসের মানুষ; আপনজন", "human nature; one's own family", "How can he treat his own flesh and blood so badly?"],
  ["fly off the handle", "হঠাৎ রেগে যাওয়া", "lose one's temper suddenly", "He flies off the handle at the smallest thing."],
  ["fool's paradise", "বোকার স্বর্গ, ভ্রান্ত সুখ", "false happiness", "If you think you will pass without study, you are living in a fool's paradise."],
  ["for good", "চিরদিনের জন্য", "forever", "He has left the country for good."],
  ["French leave", "বিনা অনুমতিতে অনুপস্থিতি", "absence without permission", "He took French leave and lost his job."],
  ["from hand to mouth", "দিন আনে দিন খায় অবস্থায়", "with just enough to survive", "The day labourers live from hand to mouth."],
];

const idiomsGtoI: Idiom[] = [
  ["get into hot water", "বিপদে পড়া", "get into trouble", "He got into hot water for lying to the teacher."],
  ["gift of the gab", "বাক্‌পটুতা", "the ability to speak easily", "A salesman needs the gift of the gab."],
  ["gird up one's loins", "কোমর বেঁধে লাগা", "prepare for a hard task", "Gird up your loins for the admission test."],
  ["give up the ghost", "মারা যাওয়া", "die", "The old man gave up the ghost last night."],
  ["go to the dogs", "উচ্ছন্নে যাওয়া, ধ্বংস হওয়া", "be ruined", "The business went to the dogs after his death."],
  ["golden mean", "মধ্যপন্থা", "the middle course", "We should follow the golden mean in everything."],
  ["good for nothing", "অকর্মণ্য", "useless", "The lazy boy is good for nothing."],
  ["grease the palm", "ঘুষ দেওয়া", "bribe", "He greased the clerk's palm to get the file moved."],
  ["Greek to me", "দুর্বোধ্য, কিছুই বুঝি না", "impossible to understand", "Chemistry is Greek to me."],
  ["hand in glove", "গলায় গলায় ভাব (সাধারণত অসৎ কাজে)", "closely working together", "The thief was hand in glove with the guard."],
  ["hang in the balance", "অনিশ্চিত অবস্থায় থাকা", "be uncertain", "The patient's life hangs in the balance."],
  ["hard and fast", "ধরাবাঁধা, কঠোর", "fixed, strict", "There is no hard and fast rule for this."],
  ["haul over the coals", "কঠোর তিরস্কার করা", "scold severely", "The manager hauled him over the coals for his mistake."],
  ["head and ears", "আপাদমস্তক, পুরোপুরি", "completely", "He is head and ears in debt."],
  ["heart and soul", "সর্বান্তঃকরণে, মনেপ্রাণে", "with complete devotion", "She worked heart and soul for the poor."],
  ["Herculean task", "দুঃসাধ্য কাজ", "a very difficult task", "Removing corruption is a Herculean task."],
  ["hit the nail on the head", "যথার্থ কথা বলা, ঠিক জায়গায় আঘাত করা", "say exactly the right thing", "You hit the nail on the head when you blamed the poor planning."],
  ["hold water", "যুক্তিসঙ্গত হওয়া, টেকা", "be valid", "His argument does not hold water."],
  ["hue and cry", "শোরগোল, হইচই", "a loud public protest", "There was a hue and cry over the price of rice."],
  ["hush money", "মুখ বন্ধ রাখার ঘুষ", "a bribe for silence", "The witness was paid hush money."],
  ["ill at ease", "অস্বস্তিতে", "uncomfortable", "He felt ill at ease among the rich guests."],
  ["in a fix", "মুশকিলে, বিপাকে", "in a difficult situation", "I was in a fix when I lost my wallet."],
  ["in a nutshell", "সংক্ষেপে", "briefly", "Tell me the story in a nutshell."],
  ["in black and white", "লিখিতভাবে", "in writing", "Put the agreement down in black and white."],
  ["in cold blood", "ঠান্ডা মাথায়, নির্মমভাবে", "deliberately and cruelly", "The prisoner was killed in cold blood."],
  ["in full swing", "পুরোদমে", "at the height of activity", "The election campaign is in full swing."],
  ["in the nick of time", "ঠিক সময়ে, একেবারে শেষ মুহূর্তে", "just in time", "The fire brigade arrived in the nick of time."],
  ["in the teeth of", "প্রবল বিরোধিতা সত্ত্বেও", "in spite of strong opposition", "The bill was passed in the teeth of opposition."],
  ["ins and outs", "নাড়িনক্ষত্র, খুঁটিনাটি", "all the details", "He knows the ins and outs of the business."],
  ["itching palm", "ঘুষের প্রতি লোভ", "greed for money", "An officer with an itching palm cannot be trusted."],
];

const idiomsJtoM: Idiom[] = [
  ["jack of all trades", "সব কাজের কাজি (কোনোটাতেই দক্ষ নয়)", "one who can do many things", "He is a jack of all trades but master of none."],
  ["keep one's head", "মাথা ঠান্ডা রাখা", "stay calm", "Keep your head in an emergency."],
  ["keep pace with", "তাল মিলিয়ে চলা", "move at the same speed as", "We must keep pace with modern technology."],
  ["keep the wolf from the door", "অনাহার ঠেকানো, কোনোরকমে সংসার চালানো", "earn just enough to live", "He works two jobs to keep the wolf from the door."],
  ["kick the bucket", "মারা যাওয়া", "die", "The old miser kicked the bucket last year."],
  ["kill two birds with one stone", "এক ঢিলে দুই পাখি মারা", "achieve two aims with one action", "By cycling to work, he killed two birds with one stone: saved money and kept fit."],
  ["kith and kin", "আত্মীয়স্বজন", "relatives", "He went to the village to see his kith and kin."],
  ["lame excuse", "খোঁড়া অজুহাত", "a weak excuse", "Don't give me a lame excuse for being late."],
  ["laughing stock", "হাসির পাত্র", "an object of ridicule", "His foolish behaviour made him a laughing stock."],
  ["leave no stone unturned", "চেষ্টার কোনো ত্রুটি না রাখা", "try every possible way", "The police left no stone unturned to find the child."],
  ["let the cat out of the bag", "গোপন কথা ফাঁস করা", "reveal a secret", "My little brother let the cat out of the bag about the surprise party."],
  ["lion's share", "সিংহভাগ, বৃহত্তম অংশ", "the largest part", "The eldest son got the lion's share of the property."],
  ["lip service", "মৌখিক সমর্থন, লোক দেখানো সহানুভূতি", "support in words only", "The leaders paid only lip service to the cause of the poor."],
  ["loaves and fishes", "ব্যক্তিগত স্বার্থ, পার্থিব লাভ", "material benefits", "Many join politics only for the loaves and fishes."],
  ["lose heart", "হতাশ হওয়া, মনোবল হারানো", "become discouraged", "Do not lose heart at the first failure."],
  ["make a clean breast of", "সব দোষ খোলাখুলি স্বীকার করা", "confess fully", "The thief made a clean breast of his crime."],
  ["make a mountain of a molehill", "তিলকে তাল করা", "exaggerate a small problem", "Don't make a mountain of a molehill over a broken cup."],
  ["make both ends meet", "আয়-ব্যয়ের সমন্বয় করা, টেনেটুনে সংসার চালানো", "live within one's income", "With prices rising, it is hard to make both ends meet."],
  ["man in the street", "সাধারণ মানুষ", "an ordinary person", "The man in the street knows little about politics."],
  ["mare's nest", "অলীক আবিষ্কার, ঘোড়ার ডিম", "a false discovery", "His great discovery proved to be a mare's nest."],
  ["might and main", "সর্বশক্তি দিয়ে", "with all one's strength", "They fought with might and main."],
  ["milk of human kindness", "মানবিক সহানুভূতি, দয়ামায়া", "natural kindness", "He is full of the milk of human kindness."],
  ["move heaven and earth", "যথাসাধ্য চেষ্টা করা", "do everything possible", "She moved heaven and earth to save her son."],
  ["much ado about nothing", "অল্প বিষয়ে অধিক হইচই", "a big fuss over nothing", "The quarrel was much ado about nothing."],
];

const idiomsNtoR: Idiom[] = [
  ["neck and neck", "সমানে সমানে", "level in a race", "The two horses ran neck and neck."],
  ["nip in the bud", "অঙ্কুরেই বিনাশ করা", "stop at an early stage", "The plot was nipped in the bud."],
  ["now and then", "মাঝে মাঝে", "occasionally", "He visits us now and then."],
  ["null and void", "বাতিল, অকার্যকর", "having no legal force", "The agreement was declared null and void."],
  ["odds and ends", "টুকিটাকি জিনিস", "small miscellaneous things", "The drawer is full of odds and ends."],
  ["olive branch", "শান্তির প্রস্তাব", "an offer of peace", "The government held out an olive branch to the rebels."],
  ["on the horns of a dilemma", "উভয় সংকটে", "facing two equally bad choices", "I was on the horns of a dilemma whether to tell the truth or keep silent."],
  ["on the spur of the moment", "হঠাৎ ঝোঁকের বশে, তাৎক্ষণিকভাবে", "suddenly, without planning", "He decided to go to Cox's Bazar on the spur of the moment."],
  ["on the wane", "ক্ষয়িষ্ণু, কমতির দিকে", "declining", "His popularity is on the wane."],
  ["once in a blue moon", "কালেভদ্রে, কদাচিৎ", "very rarely", "He comes to see us once in a blue moon."],
  ["open secret", "প্রকাশ্য গোপন কথা, সবাই জানে এমন গোপন বিষয়", "a secret everyone knows", "It is an open secret that he takes bribes."],
  ["out and out", "পুরোপুরি, ডাহা", "thorough, complete", "He is an out and out liar."],
  ["out of the question", "অসম্ভব, প্রশ্নই ওঠে না", "impossible", "Going out in this storm is out of the question."],
  ["part and parcel", "অবিচ্ছেদ্য অংশ", "an essential part", "Discipline is part and parcel of student life."],
  ["pay off old scores", "পুরোনো শত্রুতার প্রতিশোধ নেওয়া", "take revenge for an old wrong", "He used the chance to pay off old scores."],
  ["pick holes in", "খুঁত ধরা, ছিদ্রান্বেষণ করা", "find fault with", "He always picks holes in others' work."],
  ["play second fiddle", "অন্যের অধীনে গৌণ ভূমিকা পালন করা", "take a less important role", "He refused to play second fiddle to his younger brother."],
  ["play truant", "স্কুল পালানো", "stay away from school without leave", "The boy was punished for playing truant."],
  ["point blank", "সরাসরি, স্পষ্টভাবে", "directly, bluntly", "She refused the offer point blank."],
  ["pros and cons", "সুবিধা-অসুবিধা, ভালো-মন্দ দিক", "arguments for and against", "Consider the pros and cons before you decide."],
  ["pull one's leg", "ঠাট্টা করা", "tease, joke with", "Don't take him seriously; he is pulling your leg."],
  ["put the cart before the horse", "উলটো কাজ করা", "do things in the wrong order", "Buying a car before learning to drive is putting the cart before the horse."],
  ["Pyrrhic victory", "অত্যধিক মূল্যে কেনা জয়", "a victory at too great a cost", "Winning the case after selling everything was a Pyrrhic victory."],
  ["rack one's brains", "মাথা ঘামানো, খুব ভাবা", "think very hard", "I racked my brains but could not remember his name."],
  ["rain cats and dogs", "মুষলধারে বৃষ্টি হওয়া", "rain very heavily", "It was raining cats and dogs all night."],
  ["rainy day", "দুর্দিন, বিপদের দিন", "a time of need", "Save some money for a rainy day."],
  ["rank and file", "সাধারণ মানুষ, সাধারণ সদস্য", "ordinary members", "The rank and file of the party supported the leader."],
  ["read between the lines", "অন্তর্নিহিত অর্থ বোঝা", "understand the hidden meaning", "Read between the lines of his letter and you will see he is unhappy."],
  ["red tape", "লালফিতার দৌরাত্ম্য, দাপ্তরিক দীর্ঘসূত্রতা", "official delay and formality", "Red tape delays every project in our offices."],
  ["rule the roost", "কর্তৃত্ব করা", "be in charge", "In that house, the grandmother rules the roost."],
  ["run riot", "উচ্ছৃঙ্খল হওয়া, লাগামছাড়া হওয়া", "behave wildly", "The crowd ran riot after the match."],
];

const idiomsStoZ: Idiom[] = [
  ["safe and sound", "নিরাপদে, অক্ষত অবস্থায়", "unharmed", "The children returned home safe and sound."],
  ["see eye to eye", "একমত হওয়া", "agree fully", "The two brothers never see eye to eye on politics."],
  ["show the white feather", "ভীরুতা প্রকাশ করা", "show cowardice", "A true soldier never shows the white feather."],
  ["sit on the fence", "দোটানায় থাকা, কোনো পক্ষ না নেওয়া", "stay neutral, not decide", "You cannot sit on the fence forever; choose a side."],
  ["smell a rat", "কোনো কিছুতে সন্দেহ করা", "suspect something wrong", "When he offered to help for free, I smelt a rat."],
  ["sow wild oats", "যৌবনে উচ্ছৃঙ্খল জীবনযাপন করা", "live a wild life when young", "He sowed his wild oats and later became a serious man."],
  ["spick and span", "ঝকঝকে-তকতকে", "neat and clean", "Her room is always spick and span."],
  ["spill the beans", "গোপন কথা ফাঁস করা", "reveal a secret", "Who spilled the beans about the exam questions?"],
  ["split hairs", "চুলচেরা বিচার করা", "argue over tiny details", "Let us not split hairs over a word."],
  ["stand in good stead", "কাজে আসা, উপকারে আসা", "be useful", "Your knowledge of English will stand you in good stead."],
  ["storm in a teacup", "তুচ্ছ বিষয়ে বড় হইচই", "a big fuss about a small matter", "Their quarrel was only a storm in a teacup."],
  ["swan song", "শেষ কীর্তি, শেষ কাজ", "a final performance", "This novel was the writer's swan song."],
  ["take the bull by the horns", "সাহসের সাথে বিপদের মোকাবিলা করা", "face a difficulty boldly", "He took the bull by the horns and spoke to the angry crowd."],
  ["take to heart", "মনে কষ্ট পাওয়া; গুরুত্ব দিয়ে নেওয়া", "be deeply affected by", "Don't take his remarks to heart."],
  ["take to one's heels", "দৌড়ে পালানো, চম্পট দেওয়া", "run away", "The thief took to his heels when he saw the police."],
  ["the alpha and omega", "আদ্যোপান্ত, শুরু ও শেষ", "the beginning and the end", "Hard work is the alpha and omega of success."],
  ["the three R's", "লেখা, পড়া ও অঙ্কের প্রাথমিক জ্ঞান", "reading, writing and arithmetic", "Every child must learn the three R's."],
  ["through thick and thin", "সুখে-দুঃখে, সকল অবস্থায়", "in all circumstances", "A true friend stands by you through thick and thin."],
  ["throw cold water on", "নিরুৎসাহিত করা", "discourage", "His father threw cold water on his plan to study abroad."],
  ["tit for tat", "যেমন কুকুর তেমন মুগুর, ইটের বদলে পাটকেল", "a fitting return", "He insulted me, so I gave him tit for tat."],
  ["to the backbone", "পুরোপুরি, মজ্জাগতভাবে", "thoroughly", "He is a patriot to the backbone."],
  ["turn a deaf ear to", "কর্ণপাত না করা", "refuse to listen", "He turned a deaf ear to my advice."],
  ["turn over a new leaf", "জীবনের নতুন অধ্যায় শুরু করা, শুধরে যাওয়া", "change for the better", "After leaving jail, he turned over a new leaf."],
  ["turncoat", "দলত্যাগী, সুবিধাবাদী", "one who changes sides", "Nobody trusts a turncoat."],
  ["under a cloud", "সন্দেহের মধ্যে, অপমানিত অবস্থায়", "under suspicion", "He left the office under a cloud."],
  ["up and doing", "সক্রিয়, তৎপর", "active and busy", "Let us be up and doing."],
  ["up to the mark", "সন্তোষজনক মানের", "of the expected standard", "Your work is not up to the mark."],
  ["upper hand", "প্রাধান্য, সুবিধাজনক অবস্থান", "advantage, control", "Our team had the upper hand in the second half."],
  ["ups and downs", "উত্থান-পতন", "good and bad times", "Life is full of ups and downs."],
  ["Utopian scheme", "অবাস্তব পরিকল্পনা", "an impractical plan", "His plan to end poverty in a year is a Utopian scheme."],
  ["vexed question", "বিতর্কিত প্রশ্ন, বহু আলোচিত সমস্যা", "a much-debated problem", "The sharing of river water is a vexed question."],
  ["wear one's heart on one's sleeve", "মনের ভাব খোলাখুলি প্রকাশ করা", "show one's feelings openly", "She wears her heart on her sleeve."],
  ["wet blanket", "যে অন্যের আনন্দ মাটি করে", "a person who spoils others' fun", "Don't be a wet blanket; join the party."],
  ["win hands down", "অনায়াসে জেতা", "win easily", "Our team won the match hands down."],
  ["yellow journalism", "চাঞ্চল্যকর ও অসৎ সাংবাদিকতা, হলুদ সাংবাদিকতা", "sensational, dishonest reporting", "Yellow journalism misleads the public."],
  ["yeoman's service", "মহামূল্যবান সেবা", "excellent and useful work", "The volunteers did yeoman's service during the flood."],
  ["zero hour", "চরম মুহূর্ত, কাজ শুরুর নির্ধারিত সময়", "the time an operation begins", "As the zero hour came near, everyone grew tense."],
];

/* ───────────────────────── Group verbs ───────────────────────── */

const groupVerbsAtoG: Idiom[] = [
  ["bear out", "সমর্থন করা, সত্যতা প্রমাণ করা", "confirm", "The facts bear out his statement."],
  ["break down", "ভেঙে পড়া, বিকল হওয়া", "stop working; collapse", "Our bus broke down on the way."],
  ["break into", "জোর করে ঢোকা, সিঁধ কাটা", "enter by force", "A thief broke into the house last night."],
  ["break out", "হঠাৎ শুরু হওয়া (যুদ্ধ, রোগ, আগুন)", "start suddenly", "Cholera broke out in the village."],
  ["bring about", "ঘটানো", "cause to happen", "Education can bring about a change in society."],
  ["bring out", "প্রকাশ করা", "publish; reveal", "The company will bring out a new dictionary."],
  ["bring up", "লালনপালন করা; প্রসঙ্গ তোলা", "raise a child; mention", "She was brought up by her grandmother."],
  ["call for", "দাবি করা, প্রয়োজন হওয়া", "require", "The situation calls for patience."],
  ["call off", "বাতিল করা", "cancel", "The match was called off because of rain."],
  ["call on", "দেখা করতে যাওয়া", "visit", "I called on my teacher yesterday."],
  ["carry on", "চালিয়ে যাওয়া", "continue", "Carry on with your work."],
  ["carry out", "পালন করা, কার্যকর করা", "perform, execute", "The soldiers carried out the order."],
  ["come across", "হঠাৎ দেখা পাওয়া", "meet or find by chance", "I came across an old friend at the station."],
  ["come by", "লাভ করা, পাওয়া", "obtain", "Good jobs are hard to come by."],
  ["cut down", "কমানো", "reduce", "You should cut down on sugar."],
  ["do away with", "বাতিল করা, পরিহার করা", "abolish", "We must do away with old customs that harm us."],
  ["fall out", "ঝগড়া করা, সম্পর্ক নষ্ট হওয়া", "quarrel", "The two friends fell out over money."],
  ["get along with", "মিলেমিশে চলা", "have a friendly relationship", "He gets along well with his neighbours."],
  ["get over", "কাটিয়ে ওঠা, সেরে ওঠা", "recover from", "She has got over her illness."],
  ["get through", "পাস করা; শেষ করা", "pass; finish", "He got through the admission test."],
  ["give away", "বিলিয়ে দেওয়া; গোপন কথা ফাঁস করা", "distribute; reveal", "The chief guest gave away the prizes."],
  ["give in", "হার মানা, নতি স্বীকার করা", "surrender", "The enemy finally gave in."],
  ["give up", "ত্যাগ করা, ছেড়ে দেওয়া", "stop, abandon", "He gave up smoking."],
  ["go through", "মনোযোগ দিয়ে পড়া; ভোগ করা", "examine; suffer", "Go through the questions carefully."],
];

const groupVerbsHtoW: Idiom[] = [
  ["hold on", "অপেক্ষা করা", "wait", "Hold on a minute; I'm coming."],
  ["keep up with", "তাল মিলিয়ে চলা", "stay level with", "He walked fast to keep up with his father."],
  ["look after", "দেখাশোনা করা, যত্ন নেওয়া", "take care of", "She looks after her old parents."],
  ["look down upon", "হেয় করা, ঘৃণা করা", "despise", "Never look down upon the poor."],
  ["look for", "খোঁজা", "search for", "I am looking for my lost pen."],
  ["look forward to", "আগ্রহের সাথে অপেক্ষা করা", "wait eagerly for", "I am looking forward to meeting you."],
  ["look into", "তদন্ত করা, খতিয়ে দেখা", "investigate", "The police are looking into the matter."],
  ["look up", "অভিধানে বা বইয়ে খোঁজা", "find information in a book", "Look up the word in a dictionary."],
  ["look up to", "শ্রদ্ধা করা", "respect", "Students look up to their teachers."],
  ["make out", "বুঝতে পারা", "understand", "I cannot make out what he means."],
  ["make up for", "ক্ষতিপূরণ করা, পুষিয়ে নেওয়া", "compensate for", "Work hard to make up for lost time."],
  ["pass away", "মারা যাওয়া, পরলোকগমন করা", "die", "His grandfather passed away last year."],
  ["put off", "স্থগিত করা", "postpone", "Never put off till tomorrow what you can do today."],
  ["put on", "পরিধান করা", "wear", "Put on your coat; it is cold."],
  ["put out", "নেভানো", "extinguish", "The firemen put out the fire."],
  ["put up with", "সহ্য করা", "tolerate", "I cannot put up with his rude behaviour."],
  ["run out of", "ফুরিয়ে যাওয়া", "have no more of", "We have run out of rice."],
  ["run over", "গাড়ি চাপা দেওয়া", "knock down with a vehicle", "A child was run over by a truck."],
  ["set in", "শুরু হওয়া (ঋতু, রোগ ইত্যাদি)", "begin and continue", "The rainy season has set in."],
  ["set out", "যাত্রা শুরু করা", "begin a journey", "They set out for Sylhet early in the morning."],
  ["stand by", "পাশে থাকা, সমর্থন করা", "support", "I will stand by you in your trouble."],
  ["take after", "চেহারা বা স্বভাবে কারও মতো হওয়া", "resemble a parent", "The boy takes after his father."],
  ["take off", "খুলে ফেলা; (বিমান) আকাশে ওড়া", "remove; leave the ground", "The plane took off on time."],
  ["take over", "দায়িত্ব নেওয়া, দখল করা", "take control of", "The new principal took over yesterday."],
  ["take up", "শুরু করা, গ্রহণ করা", "begin, start doing", "He has taken up gardening."],
  ["turn down", "প্রত্যাখ্যান করা", "reject", "She turned down the job offer."],
  ["turn out", "প্রমাণিত হওয়া; তাড়িয়ে দেওয়া", "prove to be; expel", "The rumour turned out to be false."],
  ["turn up", "উপস্থিত হওয়া", "arrive, appear", "Only ten students turned up for the class."],
  ["wear out", "জীর্ণ হওয়া; অত্যন্ত ক্লান্ত হওয়া", "become useless with use; exhaust", "My shoes have worn out."],
  ["work out", "সমাধান করা", "solve", "Can you work out this sum?"],
];

/* ───────────────────────── Prepositional phrases ───────────────────────── */

const phrases: Idiom[] = [
  ["at large", "মুক্ত, ধরাছোঁয়ার বাইরে; সাধারণভাবে", "free, not caught; in general", "The murderer is still at large."],
  ["at random", "এলোমেলোভাবে, বাছবিচার ছাড়া", "without a plan", "He picked a book at random."],
  ["at the cost of", "বিনিময়ে, মূল্যে", "at the expense of", "He saved the child at the cost of his own life."],
  ["at the outset", "শুরুতেই, প্রারম্ভে", "at the beginning", "At the outset, let me thank you all."],
  ["by all means", "অবশ্যই", "certainly", "By all means, come to the party."],
  ["by no means", "কোনোভাবেই না", "not at all", "He is by no means a fool."],
  ["by virtue of", "বলে, কারণে", "because of", "He became the leader by virtue of his honesty."],
  ["in lieu of", "পরিবর্তে, বদলে", "instead of", "He was given cash in lieu of a gift."],
  ["in no time", "অতি শীঘ্রই, মুহূর্তের মধ্যে", "very quickly", "The news spread in no time."],
  ["in quest of", "সন্ধানে, খোঁজে", "in search of", "He went abroad in quest of a better job."],
  ["in spite of", "সত্ত্বেও", "despite", "In spite of his illness, he attended the class."],
  ["in the event of", "ঘটলে, এমন হলে", "if something happens", "In the event of fire, use the stairs."],
  ["in the wake of", "পরিণামে, ঠিক পরে", "following, as a result of", "Prices rose in the wake of the flood."],
  ["in vain", "বৃথা, নিষ্ফল", "without success", "All our efforts were in vain."],
  ["on account of", "কারণে, জন্য", "because of", "The school was closed on account of the heavy rain."],
  ["on behalf of", "পক্ষ থেকে, হয়ে", "as the representative of", "He spoke on behalf of the students."],
  ["with a view to", "উদ্দেশ্যে (পরে V-ing)", "with the aim of", "He went to Dhaka with a view to getting a job."],
];

/* ───────────────────────── Pieces ───────────────────────── */

const introduction: Piece = {
  id: "idioms-introduction",
  title: "Introduction",
  body: [
    para("An idiom is a group of words whose meaning cannot be guessed from the meanings of its separate words. 'A bolt from the blue' has nothing to do with lightning or the sky; it means a sudden shock, বিনা মেঘে বজ্রপাত. A phrase is a group of words that works as one part of speech in a sentence, such as 'in spite of' or 'with a view to'. The admission tests ask both, usually as a multiple-choice question: the meaning of an idiom, the idiom that fits a gap, or the right preposition inside a fixed phrase."),
    h("How the tests ask idioms"),
    rule("Choose the meaning of the underlined idiom.", "The idiom … means —"),
    ex(["Given", "He was at his wit's end. Here 'at his wit's end' means —"], ["Answer", "completely puzzled (হতবুদ্ধি)"]),
    rule("Fill in the gap with the right idiom or the right word of the idiom.", "… the blank"),
    ex(["Given", "The thief took to his ___ when he saw the police."], ["Answer", "heels"]),
    rule("Choose the right preposition inside a phrase or group verb.", "word + right preposition"),
    ex(["Given", "I cannot put up ___ his rudeness."], ["Answer", "with — put up with = সহ্য করা"]),
    h("How to learn them"),
    rule("Learn an idiom as one block, never word by word. Its words are fixed: 'by hook or by crook', not 'by hook or crook'."),
    rule("Learn the preposition with the idiom. 'Look after' (দেখাশোনা করা), 'look for' (খোঁজা), 'look into' (তদন্ত করা) and 'look up to' (শ্রদ্ধা করা) mean four different things."),
    rule("Learn each idiom in a sentence. A sentence fixes the meaning and shows where the idiom sits."),
    note("Open View Synopsis on any piece for the whole list A to Z with the Bangla meaning and the plain English sense — a quick revision before the test."),
  ],
};

export const idiomsAndPhrases: Piece[] = [
  introduction,
  idiomPiece("idioms-a", "Idioms: A", "Idiom", idiomsA),
  idiomPiece("idioms-b", "Idioms: B", "Idiom", idiomsB),
  idiomPiece("idioms-c", "Idioms: C", "Idiom", idiomsC),
  idiomPiece("idioms-d-f", "Idioms: D to F", "Idiom", idiomsDtoF),
  idiomPiece("idioms-g-i", "Idioms: G to I", "Idiom", idiomsGtoI),
  idiomPiece("idioms-j-m", "Idioms: J to M", "Idiom", idiomsJtoM),
  idiomPiece("idioms-n-r", "Idioms: N to R", "Idiom", idiomsNtoR),
  idiomPiece("idioms-s-z", "Idioms: S to Z", "Idiom", idiomsStoZ),
  idiomPiece("group-verbs-a-g", "Group Verbs: A to G", "Group verb", groupVerbsAtoG),
  idiomPiece("group-verbs-h-w", "Group Verbs: H to W", "Group verb", groupVerbsHtoW),
  idiomPiece("prepositional-phrases", "Prepositional Phrases", "Phrase", phrases),
];
