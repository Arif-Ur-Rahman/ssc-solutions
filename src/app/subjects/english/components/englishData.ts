// components/englishData.ts
//
// SSC English, organised the way students actually revise it: split into
// Grammar and Writing, then by the kind of question the exam asks. A section is
// one sidebar heading, a category is one sidebar item under it (Paragraph,
// Transformation, …) and each piece under a category is one topic that opens
// in the reading pane.
//
// Everything here is written for this site, so it can be reproduced freely.

import { applications } from "./applicationsData";
import { articles } from "./articlesData";
import { completingSentences } from "./completingSentencesData";
import { compositions } from "./compositionsData";
import { preposition } from "./prepositionData";
import { punctuation } from "./punctuationData";
import { connectors } from "./connectorsData";
import { dialogues } from "./dialoguesData";
import { moreEmails } from "./emailsData";
import { personalLetters } from "./lettersData";
import { narration } from "./narrationData";
import { paragraphs } from "./paragraphsData";
import { rightFormOfVerbs } from "./rightFormOfVerbsData";
import { suffixPrefix } from "./suffixPrefixData";
import { tagQuestions } from "./tagQuestionsData";
import { transformation } from "./transformationData";

export type Block =
  // A body paragraph.
  | { type: "para"; text: string }
  // One turn of a dialogue.
  | { type: "dialogue"; speaker: string; text: string }
  // A standalone line in a letter or application: date, subject, salutation.
  | { type: "label"; text: string }
  // Called-out line such as the title or the moral of a story.
  | { type: "note"; label: string; text: string }
  // Grammar lessons only. A heading splits a lesson into parts, a rule is
  // numbered in order down the lesson, and an example sets the same sentence
  // out in each of its forms, one labelled line per form.
  | { type: "heading"; text: string }
  | { type: "rule"; text: string; formula?: string }
  | { type: "example"; lines: { label: string; text: string }[] };

// One hard word of a piece, noted down the way a student would note it before
// writing: the meaning first, then the forms the exam actually asks for.
export interface VocabEntry {
  word: string;
  // Bangla meaning.
  bn: string;
  pos: "Noun" | "Verb" | "Adjective" | "Adverb" | "Preposition" | "Phrase";
  // Verbs only.
  past?: string;
  pastParticiple?: string;
  // Other forms of the same word worth knowing: noun, adjective, adverb, verb.
  forms?: { label: string; word: string }[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface Piece {
  id: string;
  title: string;
  // The instruction as the board words it.
  prompt?: string;
  // Guiding questions printed with the question.
  hints?: string[];
  // The hard words of this piece, listed A to Z and shown before the writing
  // behind the "View Synopsis" button. How many words a piece needs depends on
  // the piece: a short letter may want five, a long composition twenty. Only
  // words a class nine student would actually stumble on belong here.
  vocab?: VocabEntry[];
  body: Block[];
}

export interface Category {
  id: string;
  title: string;
  // lucide-react icon name; resolved in Sidebar.tsx.
  icon: string;
  description: string;
  pieces: Piece[];
}

export interface Section {
  id: string;
  title: string;
  categories: Category[];
}

/* ──────────────────────── Completing Stories ────────────────────── */

const stories: Piece[] = [
  {
    id: "where-there-is-a-will",
    title: "Where There Is a Will, There Is a Way",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'Robert Bruce was the king of Scotland. He was defeated by the English army again and again …'",
    vocab: [
      { word: "attempt", bn: "প্রচেষ্টা", pos: "Noun", forms: [{ label: "verb", word: "attempt (attempted)" }], synonyms: ["try", "effort"], antonyms: ["inaction", "surrender"] },
      { word: "curiosity", bn: "কৌতূহল", pos: "Noun", forms: [{ label: "adj", word: "curious" }, { label: "adv", word: "curiously" }], synonyms: ["inquisitiveness", "interest"], antonyms: ["indifference"] },
      { word: "daunt", bn: "দমিয়ে দেওয়া, ভয় পাইয়ে দেওয়া", pos: "Verb", past: "daunted", pastParticiple: "daunted", forms: [{ label: "adj", word: "dauntless" }], synonyms: ["discourage", "dishearten"], antonyms: ["encourage", "embolden"] },
      { word: "defeat", bn: "পরাজিত করা", pos: "Verb", past: "defeated", pastParticiple: "defeated", forms: [{ label: "noun", word: "defeat" }], synonyms: ["beat", "conquer"], antonyms: ["lose to", "surrender"] },
      { word: "despair", bn: "হতাশা", pos: "Noun", forms: [{ label: "verb", word: "despair (despaired)" }, { label: "adj", word: "desperate" }], synonyms: ["hopelessness", "dejection"], antonyms: ["hope", "confidence"] },
      { word: "flee", bn: "পালিয়ে যাওয়া", pos: "Verb", past: "fled", pastParticiple: "fled", synonyms: ["run away", "escape"], antonyms: ["face", "confront"] },
      { word: "noble", bn: "অভিজাত ব্যক্তি, সভাসদ", pos: "Noun", forms: [{ label: "adj", word: "noble" }, { label: "noun", word: "nobility" }], synonyms: ["lord", "aristocrat"], antonyms: ["commoner"] },
      { word: "pursue", bn: "ধাওয়া করা", pos: "Verb", past: "pursued", pastParticiple: "pursued", forms: [{ label: "noun", word: "pursuit" }], synonyms: ["chase", "follow"], antonyms: ["flee", "abandon"] },
      { word: "scattered", bn: "ছড়িয়ে-ছিটিয়ে থাকা", pos: "Adjective", forms: [{ label: "verb", word: "scatter (scattered)" }], synonyms: ["dispersed", "strewn"], antonyms: ["gathered", "united"] },
      { word: "slender", bn: "সরু, চিকন", pos: "Adjective", synonyms: ["thin", "slim"], antonyms: ["thick", "stout"] },
      { word: "spring", bn: "লাফিয়ে ওঠা", pos: "Verb", past: "sprang", pastParticiple: "sprung", synonyms: ["leap", "jump up"], antonyms: ["sink", "settle"] },
      { word: "victory", bn: "বিজয়", pos: "Noun", forms: [{ label: "adj", word: "victorious" }, { label: "noun", word: "victor" }], synonyms: ["triumph", "conquest"], antonyms: ["defeat", "loss"] },
      { word: "weave", bn: "বোনা", pos: "Verb", past: "wove", pastParticiple: "woven", forms: [{ label: "noun", word: "weaver" }], synonyms: ["knit", "spin"], antonyms: ["unravel"] },
    ],
    body: [
      {
        type: "para",
        text: "Robert Bruce was the king of Scotland. He was defeated by the English army again and again. Six times he gathered his soldiers, and six times he was beaten back with heavy losses. At last he lost all hope and fled from the battlefield to save his life. Pursued by the enemy, he took shelter in a lonely cave in the hills and lay down on the bare ground. Everything seemed to be over. He thought that he would never be able to free his country and that it was useless to fight any more.",
      },
      {
        type: "para",
        text: "While he was lying there in despair, his eyes fell on a spider hanging from the roof of the cave. The little creature was trying to reach the ceiling by its own slender thread. It climbed up a little way and then fell down. Nothing daunted, it began again, and again it fell. At first the king watched it out of idle curiosity, but soon he began to count its attempts. The spider tried a third time, a fourth, a fifth and a sixth, and every one of them ended in failure. 'Poor little thing,' Bruce said to himself, 'you have failed exactly as many times as I have. Surely you will give up now.'",
      },
      {
        type: "para",
        text: "But the spider did not give up. It rested for a moment, gathered its strength and made a seventh attempt. This time it reached the ceiling safely and at once began to weave its web as if nothing had gone wrong. The sight struck the king like a flash of lightning. He sprang up from the ground and cried out, 'If a tiny spider can try seven times without losing heart, why should a king despair after six defeats? I too shall try once more.'",
      },
      {
        type: "para",
        text: "His despair was gone and his old courage came back. He came out of the cave, sent messengers to his nobles and called his scattered soldiers together. He told them the story of the spider, and his words put new life into their hearts. Then he fell upon the English with all his might. The battle was long and terrible, but this time victory was his. The enemy was driven out and Scotland became a free country once more. To the end of his life Robert Bruce never forgot the lesson that a little spider had taught him in a lonely cave.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Failure is not the end of everything. He who has the will to try again is sure to find a way at last.",
      },
    ],
  },
  {
    id: "honesty-is-the-best-policy",
    title: "Honesty Is the Best Policy",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'Once a poor woodcutter was cutting a tree on the bank of a river. Suddenly his axe slipped from his hand and fell into the water …'",
    vocab: [
      { word: "angel", bn: "ফেরেশতা, দেবদূত", pos: "Noun", forms: [{ label: "adj", word: "angelic" }], synonyms: ["heavenly messenger"], antonyms: ["devil", "demon"] },
      { word: "anxious", bn: "উদ্বিগ্ন", pos: "Adjective", forms: [{ label: "noun", word: "anxiety" }, { label: "adv", word: "anxiously" }], synonyms: ["worried", "uneasy"], antonyms: ["calm", "carefree"] },
      { word: "bitterly", bn: "করুণভাবে, তীব্রভাবে", pos: "Adverb", forms: [{ label: "adj", word: "bitter" }, { label: "noun", word: "bitterness" }], synonyms: ["sorrowfully", "intensely"], antonyms: ["cheerfully", "happily"] },
      { word: "empty-handed", bn: "খালি হাতে", pos: "Adjective", synonyms: ["with nothing in hand"], antonyms: ["laden", "loaded"] },
      { word: "falsehood", bn: "মিথ্যা", pos: "Noun", forms: [{ label: "adj", word: "false" }, { label: "adv", word: "falsely" }], synonyms: ["lie", "untruth"], antonyms: ["truth", "honesty"] },
      { word: "greedy", bn: "লোভী", pos: "Adjective", forms: [{ label: "noun", word: "greed" }, { label: "adv", word: "greedily" }], synonyms: ["avaricious", "grasping"], antonyms: ["generous", "content"] },
      { word: "on purpose", bn: "ইচ্ছাকৃতভাবে", pos: "Phrase", synonyms: ["deliberately", "intentionally"], antonyms: ["accidentally", "by chance"] },
      { word: "reward", bn: "পুরস্কার", pos: "Noun", forms: [{ label: "verb", word: "reward (rewarded)" }, { label: "adj", word: "rewarding" }], synonyms: ["prize", "recompense"], antonyms: ["punishment", "penalty"] },
      { word: "slip", bn: "পিছলে পড়ে যাওয়া", pos: "Verb", past: "slipped", pastParticiple: "slipped", forms: [{ label: "adj", word: "slippery" }], synonyms: ["slide", "glide"], antonyms: ["grip", "hold fast"] },
      { word: "take pity on", bn: "দয়া করা", pos: "Phrase", forms: [{ label: "noun", word: "pity" }, { label: "adj", word: "pitiful" }], synonyms: ["have mercy on"], antonyms: ["be cruel to"] },
      { word: "woodcutter", bn: "কাঠুরে", pos: "Noun", forms: [{ label: "verb", word: "cut (cut, cut)" }], synonyms: ["lumberjack"] },
    ],
    body: [
      {
        type: "para",
        text: "Once a poor woodcutter was cutting a tree on the bank of a river. Suddenly his axe slipped from his hand and fell into the water. It was his only means of living. He earned his bread by cutting wood in the forest and selling it in the market, and he had no money to buy another axe. He knew that his wife and children would have to go without food if he returned home empty-handed. So he sat down on the bank and began to weep bitterly.",
      },
      {
        type: "para",
        text: "His crying drew the attention of an angel, who suddenly appeared before him and asked, 'Why are you weeping, my good man?' The woodcutter told him all that had happened. The angel took pity on him and said, 'Do not be anxious. I shall bring your axe back for you.' So saying, he dived into the river and came up with a golden axe in his hand. 'Is this your axe?' he asked. The woodcutter looked at it and said, 'No, sir, it is not mine.'",
      },
      {
        type: "para",
        text: "The angel dived a second time and brought up a silver axe. 'Then surely this one is yours,' he said. But the honest man shook his head and replied, 'No, sir, that is not mine either. Mine is an old iron axe with a wooden handle.' The angel dived a third time and came up with the old iron axe. The woodcutter's face lit up with joy. 'Yes, sir, this is my axe,' he cried. 'This is the axe with which I have earned my bread for twenty years.'",
      },
      {
        type: "para",
        text: "The angel was greatly pleased with his honesty. 'You are a truthful man,' he said. 'You could easily have taken the golden axe, but you would not tell a lie for the sake of wealth. Take all three axes as a reward for your honesty.' The poor woodcutter thanked him again and again and went home a rich man.",
      },
      {
        type: "para",
        text: "The news soon spread through the village. A greedy neighbour heard it and made up his mind to try the same trick. He went to the same spot, threw his own axe into the river on purpose and began to cry aloud. The angel appeared as before and brought up a golden axe. 'Yes, yes, that is mine!' the greedy man cried at once. The angel was angry at his falsehood. He disappeared with the golden axe, and the man did not even get back the axe he had thrown away. He returned home poorer than he had come.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Honesty is the best policy. An honest man is rewarded at last, while greed and falsehood bring nothing but loss.",
      },
    ],
  },
  {
    id: "unity-is-strength",
    title: "Unity Is Strength",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'An old farmer had four sons. They always quarrelled with one another …'",
    vocab: [
      { word: "ashamed", bn: "লজ্জিত", pos: "Adjective", forms: [{ label: "noun", word: "shame" }, { label: "adj", word: "shameful" }], synonyms: ["embarrassed", "abashed"], antonyms: ["proud", "shameless"] },
      { word: "bundle", bn: "আঁটি, বান্ডিল", pos: "Noun", forms: [{ label: "verb", word: "bundle (bundled)" }], synonyms: ["bunch", "pack"], antonyms: ["single stick"] },
      { word: "conduct", bn: "আচরণ", pos: "Noun", forms: [{ label: "verb", word: "conduct (conducted)" }], synonyms: ["behaviour", "manner"] },
      { word: "eldest", bn: "সবচেয়ে বড়", pos: "Adjective", forms: [{ label: "adj", word: "old" }, { label: "adj", word: "elder" }], synonyms: ["oldest", "first-born"], antonyms: ["youngest"] },
      { word: "fall on deaf ears", bn: "কর্ণপাত না করা", pos: "Phrase", synonyms: ["be ignored", "go unheeded"], antonyms: ["be listened to"] },
      { word: "prosperous", bn: "সমৃদ্ধ, সচ্ছল", pos: "Adjective", forms: [{ label: "noun", word: "prosperity" }, { label: "verb", word: "prosper (prospered)" }], synonyms: ["thriving", "well-off"], antonyms: ["poor", "ruined"] },
      { word: "quarrel", bn: "ঝগড়া করা", pos: "Verb", past: "quarrelled", pastParticiple: "quarrelled", forms: [{ label: "noun", word: "quarrel" }, { label: "adj", word: "quarrelsome" }], synonyms: ["dispute", "wrangle"], antonyms: ["agree", "make peace"] },
      { word: "scold", bn: "বকাঝকা করা", pos: "Verb", past: "scolded", pastParticiple: "scolded", forms: [{ label: "noun", word: "scolding" }], synonyms: ["rebuke", "reprimand"], antonyms: ["praise", "applaud"] },
      { word: "trifle", bn: "তুচ্ছ বিষয়", pos: "Noun", forms: [{ label: "adj", word: "trifling" }], synonyms: ["triviality", "small matter"], antonyms: ["matter of importance"] },
      { word: "untie", bn: "বাঁধন খুলে দেওয়া", pos: "Verb", past: "untied", pastParticiple: "untied", forms: [{ label: "verb", word: "tie" }], synonyms: ["undo", "loosen"], antonyms: ["tie", "bind"] },
    ],
    body: [
      {
        type: "para",
        text: "An old farmer had four sons. They always quarrelled with one another over trifles. Hardly a day passed without a bitter word among them, and the whole village used to laugh at the family. The old man tried his best to make them united. He advised them, scolded them and even wept before them, but all his words fell on deaf ears. He grew anxious day and night, thinking what would become of his sons and of his little property after his death.",
      },
      {
        type: "para",
        text: "One day the farmer fell seriously ill. He felt that his end was near, and he thought of a plan to teach his sons a lesson that they would never forget. He called them to his bedside and asked them to bring him a bundle of sticks. The sons wondered what their father meant by such a strange request, but they did as they were told.",
      },
      {
        type: "para",
        text: "When the bundle was brought, the old man handed it to his eldest son and said, 'Break it, my son.' The young man was strong. He took the bundle in both hands and tried with all his might, but he could not break it. The second son tried, then the third and then the youngest, and all of them failed one after another. At last they gave the bundle back to their father and said that it was impossible to break.",
      },
      {
        type: "para",
        text: "Then the old man untied the bundle and gave a single stick to each of his sons. 'Now break it,' he said. This time they broke the sticks without the least difficulty. The farmer smiled and said, 'My dear sons, you have seen it with your own eyes. So long as the sticks were tied together, no one could break them. Once they were separated, even a child could break them at a touch. It is the same with you. If you live in unity, nobody on earth will be able to harm you. But if you quarrel among yourselves, anyone will be able to ruin you.'",
      },
      {
        type: "para",
        text: "The sons understood the meaning of their father's words. They felt ashamed of their conduct and promised that they would never quarrel again. They kept their promise. After the death of the old farmer they lived together in peace, worked side by side in the field, and within a few years they became the happiest and most prosperous family in the village.",
      },
      {
        type: "note",
        label: "Moral",
        text: "United we stand, divided we fall. Unity is strength, while quarrels bring nothing but ruin.",
      },
    ],
  },
  {
    id: "dress-does-not-make-a-man-great",
    title: "Dress Does Not Make a Man Great",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'Sheikh Saadi was a great Persian poet. One day he was invited to a feast at the house of a rich man …'",
    vocab: [
      { word: "amazed", bn: "বিস্মিত", pos: "Adjective", forms: [{ label: "verb", word: "amaze (amazed)" }, { label: "noun", word: "amazement" }], synonyms: ["astonished", "struck with wonder"], antonyms: ["indifferent", "unmoved"] },
      { word: "beggar", bn: "ভিখারি", pos: "Noun", forms: [{ label: "verb", word: "beg (begged)" }], synonyms: ["mendicant", "pauper"], antonyms: ["donor", "giver"] },
      { word: "costly", bn: "দামি, মূল্যবান", pos: "Adjective", forms: [{ label: "noun", word: "cost" }, { label: "verb", word: "cost (cost, cost)" }], synonyms: ["expensive", "valuable"], antonyms: ["cheap", "worthless"] },
      { word: "feast", bn: "ভোজ, ভোজসভা", pos: "Noun", forms: [{ label: "verb", word: "feast (feasted)" }], synonyms: ["banquet", "grand meal"], antonyms: ["fast", "famine"] },
      { word: "host", bn: "নিমন্ত্রণকর্তা, গৃহকর্তা", pos: "Noun", forms: [{ label: "noun", word: "hostess" }], synonyms: ["entertainer"], antonyms: ["guest"] },
      { word: "pardon", bn: "ক্ষমা", pos: "Noun", forms: [{ label: "verb", word: "pardon (pardoned)" }], synonyms: ["forgiveness", "mercy"], antonyms: ["punishment", "penalty"] },
      { word: "refuse", bn: "অস্বীকার করা, প্রত্যাখ্যান করা", pos: "Verb", past: "refused", pastParticiple: "refused", forms: [{ label: "noun", word: "refusal" }], synonyms: ["deny", "decline"], antonyms: ["accept", "allow"] },
      { word: "robe", bn: "লম্বা ঢিলা পোশাক, আলখাল্লা", pos: "Noun", synonyms: ["gown", "garment"] },
      { word: "rudely", bn: "অভদ্রভাবে", pos: "Adverb", forms: [{ label: "adj", word: "rude" }, { label: "noun", word: "rudeness" }], synonyms: ["impolitely", "harshly"], antonyms: ["politely", "courteously"] },
      { word: "turban", bn: "পাগড়ি", pos: "Noun", synonyms: ["headdress"] },
    ],
    body: [
      {
        type: "para",
        text: "Sheikh Saadi was a great Persian poet. One day he was invited to a feast at the house of a rich man. He was a simple man who cared little for show, and he set out for the feast in his everyday dress. His clothes were old and worn, and the dust of the road lay thick upon them. When he reached the gate, the servants looked him up and down and took him for a common beggar. They rudely refused to let him in, and not a single guest came forward to receive him. Saadi said nothing. He turned back quietly and went home.",
      },
      {
        type: "para",
        text: "At home he put on a costly robe, wound a fine turban round his head and came back to the same house. This time the scene was altogether different. As soon as the servants saw him, they bowed low and led him in with great respect. The host himself hurried forward, took the poet by the hand and seated him in the best chair in the room. Dishes of rich food were placed before him one after another, and the other guests began to praise him and to seek his company.",
      },
      {
        type: "para",
        text: "Saadi drew a plate of delicious food towards him, but instead of eating it he began to rub it on the sleeve of his robe. 'Eat, my dress, eat,' he said aloud. The guests were amazed at his conduct. The host came near and asked in surprise, 'Sir, what are you doing? Why are you spoiling such a costly robe?'",
      },
      {
        type: "para",
        text: "The poet smiled and replied, 'I am only serving the guest you have invited. An hour ago I came to this very house in my old clothes, and your servants drove me away from the gate. Now I have come in this fine dress and you have received me with honour. It is plain, therefore, that you have invited my dress and not me. So it is my dress that has the right to eat this food.'",
      },
      {
        type: "para",
        text: "The rich man hung his head in shame. He understood his mistake and begged the poet's pardon again and again. Saadi forgave him and said gently that a man should be judged by his learning, his honesty and his character, and never by the clothes he happens to wear. All the guests who were present that day learnt a lesson which they never forgot.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Dress does not make a man great. It is his knowledge, honesty and character that give him his real worth.",
      },
    ],
  },
  {
    id: "the-thirsty-crow",
    title: "The Thirsty Crow",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'It was a hot day in the middle of summer. A crow was flying here and there in search of water …'",
    vocab: [
      { word: "beak", bn: "পাখির ঠোঁট", pos: "Noun", synonyms: ["bill"] },
      { word: "blazing", bn: "জ্বলন্ত, প্রখর", pos: "Adjective", forms: [{ label: "verb", word: "blaze (blazed)" }, { label: "noun", word: "blaze" }], synonyms: ["burning", "scorching"], antonyms: ["cool", "mild"] },
      { word: "ditch", bn: "নালা, খানা", pos: "Noun", synonyms: ["trench", "drain"] },
      { word: "parched", bn: "শুকিয়ে খটখটে", pos: "Adjective", forms: [{ label: "verb", word: "parch (parched)" }], synonyms: ["dried up", "scorched"], antonyms: ["moist", "wet"] },
      { word: "patiently", bn: "ধৈর্যসহকারে", pos: "Adverb", forms: [{ label: "adj", word: "patient" }, { label: "noun", word: "patience" }], synonyms: ["calmly", "steadily"], antonyms: ["impatiently", "hastily"] },
      { word: "pebble", bn: "নুড়ি পাথর", pos: "Noun", synonyms: ["small stone", "gravel"], antonyms: ["boulder"] },
      { word: "pitcher", bn: "কলসি", pos: "Noun", synonyms: ["jug", "jar"] },
      { word: "presence of mind", bn: "উপস্থিত বুদ্ধি", pos: "Phrase", synonyms: ["quick thinking"], antonyms: ["confusion", "panic"] },
      { word: "refreshed", bn: "সতেজ, প্রাণবন্ত", pos: "Adjective", forms: [{ label: "verb", word: "refresh (refreshed)" }, { label: "noun", word: "refreshment" }], synonyms: ["revived", "renewed"], antonyms: ["exhausted", "worn out"] },
      { word: "worn out", bn: "ক্লান্ত-পরিশ্রান্ত", pos: "Phrase", forms: [{ label: "verb", word: "wear out (wore out, worn out)" }], synonyms: ["exhausted", "tired out"], antonyms: ["fresh", "energetic"] },
    ],
    body: [
      {
        type: "para",
        text: "It was a hot day in the middle of summer. A crow was flying here and there in search of water. The sun was blazing overhead, the fields were parched and most of the ponds and canals of the village had dried up. The poor bird was very thirsty and his throat had become almost dry. He flew over gardens, paddy fields and empty ditches and looked into every corner he could find, but there was not a drop of water anywhere. He grew weaker and weaker and began to lose all hope.",
      },
      {
        type: "para",
        text: "At last, when he was nearly worn out, he came down upon the roof of a farmer's house to rest for a while. From there his sharp eyes fell on a pitcher lying in the yard below. His heart leapt with joy and he flew down at once. There was indeed some water in the pitcher, but it lay far down at the bottom, and the neck of the pitcher was long and narrow. He put in his beak and stretched it as far as he could, but he could not reach the water.",
      },
      {
        type: "para",
        text: "The poor bird did not know what to do. He tried to push the pitcher over with all his strength, hoping that it would break and the water would flow out, but it was far too heavy and did not move an inch. He thought of flying away, yet he knew that he might not find another drop of water and might die of thirst on the way. So he sat quietly beside the pitcher and began to think of some other means.",
      },
      {
        type: "para",
        text: "Suddenly a bright idea came into his mind. He had noticed a heap of small pebbles lying near the yard. He picked up one of them in his beak, flew to the pitcher and dropped it in. Then he brought a second, a third and a fourth. He went on doing this patiently, though his wings ached and the sun burned above his head. Little by little the water began to rise. At last, after a great many pebbles had been dropped in, the water came up to the neck of the pitcher.",
      },
      {
        type: "para",
        text: "The crow now put in his beak and drank the water to his heart's content. Then, refreshed and happy, he flew away to a shady tree and sat there thinking how glad he was that he had not given up when everything seemed hopeless.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Where there is a will, there is a way. Patience and presence of mind can solve the hardest problem.",
      },
    ],
  },
];

/* ──────────────────── Applications & Letters ────────────────────── */

const letters: Piece[] = [
  {
    id: "application-for-hostel-seat",
    title: "Application for a Seat in the School Hostel",
    prompt:
      "Write an application to the Headmaster of your school for a seat in the school hostel.",
    vocab: [
      { word: "afford", bn: "সামর্থ্য থাকা", pos: "Verb", past: "afforded", pastParticiple: "afforded", forms: [{ label: "adj", word: "affordable" }], synonyms: ["bear the cost of", "manage"], antonyms: ["be unable to pay"] },
      { word: "bear", bn: "বহন করা, ধারণ করা", pos: "Verb", past: "bore", pastParticiple: "borne", forms: [{ label: "adj", word: "bearable" }], synonyms: ["carry", "hold"], antonyms: ["drop", "lay down"] },
      { word: "hostel", bn: "ছাত্রাবাস", pos: "Noun", synonyms: ["dormitory", "boarding house"] },
      { word: "obediently", bn: "অনুগতভাবে, বিনীতভাবে", pos: "Adverb", forms: [{ label: "adj", word: "obedient" }, { label: "noun", word: "obedience" }], synonyms: ["respectfully", "submissively"], antonyms: ["disobediently", "defiantly"] },
      { word: "oblige", bn: "বাধিত করা, অনুগ্রহ করা", pos: "Verb", past: "obliged", pastParticiple: "obliged", forms: [{ label: "noun", word: "obligation" }, { label: "adj", word: "obliged" }], synonyms: ["favour", "gratify"], antonyms: ["refuse", "disoblige"] },
      { word: "thereby", bn: "এর দ্বারা, তার ফলে", pos: "Adverb", synonyms: ["by that means", "thus"] },
    ],
    body: [
      { type: "label", text: "16 August 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Shahid Smriti High School" },
      { type: "label", text: "Rajshahi" },
      { type: "label", text: "Subject: Application for a seat in the school hostel." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, I beg to state that I am a student of class ten in your school, bearing roll number twelve. My home is at Charghat, about twenty kilometres away from the school, and there is no direct transport from my village. I have to leave home before seven in the morning and cannot return before six in the evening. As a result, I lose almost four hours a day and can hardly find time for my studies.",
      },
      {
        type: "para",
        text: "My father is a small farmer and cannot afford a private mess in town. If I get a seat in the school hostel, I shall be able to study in peace and take part in the extra classes held in the afternoon. I promise to obey all the rules of the hostel.",
      },
      {
        type: "para",
        text: "I therefore pray and hope that you would be kind enough to grant me a seat in the school hostel and oblige thereby.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Md. Ashraful Islam" },
      { type: "label", text: "Class: Ten, Roll: 12" },
    ],
  },
  {
    id: "application-for-transfer-certificate",
    title: "Application for a Transfer Certificate",
    prompt:
      "Write an application to the Headmaster of your school for a transfer certificate.",
    vocab: [
      { word: "gratitude", bn: "কৃতজ্ঞতা", pos: "Noun", forms: [{ label: "adj", word: "grateful" }, { label: "adv", word: "gratefully" }], synonyms: ["thankfulness"], antonyms: ["ingratitude"] },
      { word: "obediently", bn: "অনুগতভাবে, বিনীতভাবে", pos: "Adverb", forms: [{ label: "adj", word: "obedient" }, { label: "noun", word: "obedience" }], synonyms: ["respectfully"], antonyms: ["disobediently"] },
      { word: "respectfully", bn: "সবিনয়ে", pos: "Adverb", forms: [{ label: "adj", word: "respectful" }, { label: "noun", word: "respect" }], synonyms: ["humbly", "politely"], antonyms: ["rudely", "disrespectfully"] },
      { word: "testimonial", bn: "প্রশংসাপত্র, চারিত্রিক সনদ", pos: "Noun", forms: [{ label: "verb", word: "testify (testified)" }], synonyms: ["recommendation", "character certificate"] },
      { word: "transfer certificate", bn: "ছাড়পত্র", pos: "Phrase", forms: [{ label: "verb", word: "transfer (transferred)" }, { label: "adj", word: "transferable" }], synonyms: ["release paper"] },
    ],
    body: [
      { type: "label", text: "16 August 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Nabinagar Model High School" },
      { type: "label", text: "Brahmanbaria" },
      { type: "label", text: "Subject: Application for a transfer certificate." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "Most respectfully, I beg to inform you that I am a student of class nine, section A, of your school, bearing roll number seven. My father is an officer in a government bank and he has recently been transferred to Sylhet. The whole family is leaving this town at the end of this month, and I shall have to continue my studies there.",
      },
      {
        type: "para",
        text: "I have paid all my dues to the school and have returned the books I borrowed from the library. I shall always remember with gratitude the care I have received from my teachers here.",
      },
      {
        type: "para",
        text: "I therefore request you to grant me a transfer certificate along with a testimonial so that I may get myself admitted to a school in Sylhet.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Tahmina Akter" },
      { type: "label", text: "Class: Nine, Section: A, Roll: 7" },
    ],
  },
  {
    id: "application-for-cancelling-train-ticket",
    title: "Application for Cancelling a Train Ticket",
    prompt:
      "Write an application to the manager of a travel agency for cancelling your train ticket.",
    vocab: [
      { word: "cancel", bn: "বাতিল করা", pos: "Verb", past: "cancelled", pastParticiple: "cancelled", forms: [{ label: "noun", word: "cancellation" }], synonyms: ["call off", "revoke"], antonyms: ["confirm", "book"] },
      { word: "deduct", bn: "কেটে রাখা, বাদ দেওয়া", pos: "Verb", past: "deducted", pastParticiple: "deducted", forms: [{ label: "noun", word: "deduction" }], synonyms: ["subtract", "take off"], antonyms: ["add"] },
      { word: "fare", bn: "ভাড়া", pos: "Noun", synonyms: ["charge", "ticket price"] },
      { word: "inconvenience", bn: "অসুবিধা, ঝামেলা", pos: "Noun", forms: [{ label: "adj", word: "inconvenient" }], synonyms: ["trouble", "bother"], antonyms: ["convenience", "comfort"] },
      { word: "refund", bn: "টাকা ফেরত দেওয়া", pos: "Verb", past: "refunded", pastParticiple: "refunded", forms: [{ label: "noun", word: "refund" }, { label: "adj", word: "refundable" }], synonyms: ["repay", "pay back"], antonyms: ["charge", "withhold"] },
      { word: "unavoidable", bn: "অনিবার্য, এড়ানো যায় না এমন", pos: "Adjective", forms: [{ label: "verb", word: "avoid (avoided)" }, { label: "adv", word: "unavoidably" }], synonyms: ["inevitable", "unpreventable"], antonyms: ["avoidable"] },
    ],
    body: [
      { type: "label", text: "16 August 2026" },
      { type: "label", text: "The Manager" },
      { type: "label", text: "Shapla Tours and Travels" },
      { type: "label", text: "Station Road, Chattogram" },
      { type: "label", text: "Subject: Application for cancelling a train ticket." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, I beg to state that on 10 August I bought a train ticket from your agency for a journey from Chattogram to Dhaka by the Subarna Express. The train is to leave Chattogram at seven in the morning on 20 August. The ticket number is 4587, the coach is Cha and the seat number is 32. I paid seven hundred and sixty-five taka for it.",
      },
      {
        type: "para",
        text: "But for an unavoidable reason I shall not be able to make the journey. My mother has suddenly fallen seriously ill and has been admitted to the Chattogram Medical College Hospital. As I am her only son, I must stay beside her. So the ticket is of no use to me now.",
      },
      {
        type: "para",
        text: "I am returning the ticket with this application. I know that a certain amount is deducted from the fare as a cancellation charge, and I am ready to bear it. I am sorry for the inconvenience this may cause you.",
      },
      {
        type: "para",
        text: "I therefore pray and hope that you would be kind enough to cancel my ticket and refund the rest of the fare at your earliest convenience.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Rafiqul Islam" },
      { type: "label", text: "Enclosure: The train ticket (No. 4587)" },
    ],
  },
  {
    id: "application-for-relief-goods",
    title: "Application for Relief Goods for Flood-affected People",
    prompt:
      "Write an application to the chairman of your area for relief goods for the flood or cyclone affected people.",
    vocab: [
      { word: "devastating", bn: "ভয়াবহ, ধ্বংসাত্মক", pos: "Adjective", forms: [{ label: "verb", word: "devastate (devastated)" }, { label: "noun", word: "devastation" }], synonyms: ["destructive", "ruinous"], antonyms: ["harmless", "mild"] },
      { word: "epidemic", bn: "মহামারি", pos: "Noun", synonyms: ["outbreak", "plague"] },
      { word: "inhabitant", bn: "অধিবাসী, বাসিন্দা", pos: "Noun", forms: [{ label: "verb", word: "inhabit (inhabited)" }], synonyms: ["resident", "dweller"], antonyms: ["outsider", "stranger"] },
      { word: "marooned", bn: "পানিবন্দী, আটকে পড়া", pos: "Adjective", forms: [{ label: "verb", word: "maroon (marooned)" }], synonyms: ["stranded", "cut off"], antonyms: ["rescued", "free"] },
      { word: "relief", bn: "ত্রাণ", pos: "Noun", forms: [{ label: "verb", word: "relieve (relieved)" }], synonyms: ["aid", "help"] },
      { word: "shelter", bn: "আশ্রয়", pos: "Noun", forms: [{ label: "verb", word: "shelter (sheltered)" }], synonyms: ["refuge", "protection"], antonyms: ["exposure"] },
      { word: "starvation", bn: "অনাহার", pos: "Noun", forms: [{ label: "verb", word: "starve (starved)" }], synonyms: ["hunger", "famine"], antonyms: ["plenty", "abundance"] },
      { word: "submerge", bn: "ডুবিয়ে দেওয়া, প্লাবিত করা", pos: "Verb", past: "submerged", pastParticiple: "submerged", forms: [{ label: "noun", word: "submersion" }], synonyms: ["flood", "drown"], antonyms: ["surface", "emerge"] },
      { word: "water-borne", bn: "পানিবাহিত", pos: "Adjective", synonyms: ["carried by water"] },
    ],
    body: [
      { type: "label", text: "16 August 2026" },
      { type: "label", text: "The Chairman" },
      { type: "label", text: "Jatrapur Union Parishad" },
      { type: "label", text: "Kurigram" },
      { type: "label", text: "Subject: Application for relief goods for the flood-affected people." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the inhabitants of the village of Char Jatrapur under your union, beg to draw your kind attention to the miserable condition of the flood-affected people of our area. A devastating flood has struck our village this week. The Brahmaputra has overflowed its banks, and almost the whole village is now submerged in water.",
      },
      {
        type: "para",
        text: "The people are passing their days in untold misery. Nearly five hundred families have lost their houses, and many of them have taken shelter on the embankment and in the local school building. Some are still marooned on the roofs of their houses. The crops of the fields have been washed away, and cattle, poultry and household goods have been lost. There is no food, no dry clothes and no pure drinking water. Many people, especially children and old people, are on the verge of starvation. Diarrhoea and other water-borne diseases have already broken out, and an epidemic may break out at any moment.",
      },
      {
        type: "para",
        text: "The people are in urgent need of rice, flour, pulses, dry food, saline, water purifying tablets, medicine and clothes. Unless relief is sent at once, many lives will be lost.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to send sufficient relief goods and a medical team to our village without delay and save the helpless people.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the flood-affected people" },
      { type: "label", text: "Abdul Karim" },
      { type: "label", text: "Char Jatrapur, Kurigram" },
    ],
  },
  {
    id: "application-for-study-tour",
    title: "Application for Permission and Financial Help for a Study Tour",
    prompt:
      "Write an application to the Headmaster of your school seeking permission and financial help to go on a study tour.",
    vocab: [
      { word: "accompany", bn: "সঙ্গে যাওয়া", pos: "Verb", past: "accompanied", pastParticiple: "accompanied", forms: [{ label: "noun", word: "companion" }], synonyms: ["go with", "escort"], antonyms: ["leave", "abandon"] },
      { word: "expenditure", bn: "ব্যয়, খরচ", pos: "Noun", forms: [{ label: "verb", word: "expend" }, { label: "noun", word: "expense" }], synonyms: ["cost", "expense"], antonyms: ["income", "earning"] },
      { word: "firsthand", bn: "সরাসরি, প্রত্যক্ষ", pos: "Adjective", synonyms: ["direct", "personal"], antonyms: ["secondhand", "indirect"] },
      { word: "monetary", bn: "আর্থিক", pos: "Adjective", forms: [{ label: "noun", word: "money" }], synonyms: ["financial"] },
      { word: "remaining", bn: "অবশিষ্ট", pos: "Adjective", forms: [{ label: "verb", word: "remain" }, { label: "noun", word: "remainder" }], synonyms: ["rest of", "left over"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Rangpur Zilla School" },
      { type: "label", text: "Rangpur" },
      { type: "label", text: "Subject: Prayer for permission and financial help to go on a study tour." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of class ten of your school, beg to state that we are very eager to go on a study tour to Paharpur and Mahasthangarh. We have read about these historical places in our textbooks, but we have never seen them with our own eyes. A visit to these ancient sites will give us firsthand knowledge of the history and culture of our country, which no book can give.",
      },
      {
        type: "para",
        text: "We have planned to go on 5 October 2026 and return the same evening. Two of our teachers have kindly agreed to accompany us. The total expenditure has been estimated at fifty thousand taka. We shall be able to raise thirty thousand taka by ourselves, but the remaining amount is beyond our capacity.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to grant us permission to go on the study tour and sanction twenty thousand taka from the school fund to meet the rest of the cost.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students of class ten" },
      { type: "label", text: "Tanvir Ahmed" },
      { type: "label", text: "Class: Ten, Roll: 3" },
    ],
  },
  {
    id: "application-for-library-facilities",
    title: "Application for Enhancing Library Facilities",
    prompt:
      "Write an application to the Headmaster of your school requesting him to enhance the library facilities.",
    vocab: [
      { word: "adequate", bn: "পর্যাপ্ত", pos: "Adjective", forms: [{ label: "adv", word: "adequately" }], synonyms: ["enough", "sufficient"], antonyms: ["inadequate", "insufficient"] },
      { word: "enhance", bn: "বৃদ্ধি করা, উন্নত করা", pos: "Verb", past: "enhanced", pastParticiple: "enhanced", forms: [{ label: "noun", word: "enhancement" }], synonyms: ["improve", "increase"], antonyms: ["reduce", "worsen"] },
      { word: "outdated", bn: "পুরনো, সেকেলে", pos: "Adjective", synonyms: ["old-fashioned", "obsolete"], antonyms: ["modern", "up-to-date"] },
      { word: "periodical", bn: "সাময়িকী", pos: "Noun", forms: [{ label: "adj", word: "periodic" }], synonyms: ["magazine", "journal"] },
      { word: "reference book", bn: "সহায়ক গ্রন্থ", pos: "Phrase", synonyms: ["guide book", "handbook"] },
      { word: "storehouse", bn: "ভান্ডার", pos: "Noun", synonyms: ["treasury", "treasure house"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Barishal Government Girls' High School" },
      { type: "label", text: "Barishal" },
      { type: "label", text: "Subject: Prayer for enhancing library facilities." },
      { type: "label", text: "Madam" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to draw your kind attention to the poor condition of our school library. A library is a storehouse of knowledge, but ours has very few books, and most of them are old and outdated. There are no reference books for the SSC examination, and no newspapers or periodicals are kept there.",
      },
      {
        type: "para",
        text: "Besides, the reading room is small and there are not adequate seats, fans or lights in it. The library remains open for only one hour a day, so we can hardly borrow books. As a result, we are deprived of the chance of widening our knowledge beyond the textbooks.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to buy new books, arrange for daily newspapers and periodicals, enlarge the reading room and keep the library open for a longer time.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Nusrat Jahan" },
      { type: "label", text: "Class: Ten, Roll: 7" },
    ],
  },
  {
    id: "application-for-debating-club",
    title: "Application for Setting Up a Debating Club",
    prompt:
      "Write an application to the Headmaster of your school for setting up a debating club.",
    vocab: [
      { word: "argument", bn: "যুক্তি", pos: "Noun", forms: [{ label: "verb", word: "argue" }], synonyms: ["reasoning", "point"] },
      { word: "confidence", bn: "আত্মবিশ্বাস", pos: "Noun", forms: [{ label: "adj", word: "confident" }], synonyms: ["self-assurance", "courage"], antonyms: ["shyness", "doubt"] },
      { word: "eloquence", bn: "বাগ্মিতা", pos: "Noun", forms: [{ label: "adj", word: "eloquent" }], synonyms: ["fluency", "power of speech"] },
      { word: "extempore", bn: "উপস্থিত, তাৎক্ষণিক", pos: "Adjective", synonyms: ["impromptu", "unprepared"], antonyms: ["prepared", "rehearsed"] },
      { word: "stage fright", bn: "মঞ্চভীতি", pos: "Phrase", synonyms: ["nervousness"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Cumilla Zilla School" },
      { type: "label", text: "Cumilla" },
      { type: "label", text: "Subject: Application for setting up a debating club." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to state that there is no debating club in our school. Debate is an important co-curricular activity. It teaches us to think logically, to present arguments clearly and to speak in public with confidence. It also helps us to overcome stage fright and develop the art of eloquence.",
      },
      {
        type: "para",
        text: "Many schools in our town have debating clubs, and their students regularly take part in inter-school and national debate competitions. Our students cannot do so for want of practice and guidance. If a club is set up with a teacher as its adviser, we can hold regular debates and extempore speech competitions in the afternoon.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to set up a debating club in our school and arrange the necessary guidance for it.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Fahim Hossain" },
      { type: "label", text: "Class: Ten, Roll: 5" },
    ],
  },
  {
    id: "application-for-testimonial",
    title: "Application for a Testimonial",
    prompt:
      "Write an application to the Headmaster of your school for a testimonial.",
    vocab: [
      { word: "certify", bn: "প্রত্যয়ন করা", pos: "Verb", past: "certified", pastParticiple: "certified", forms: [{ label: "noun", word: "certificate" }], synonyms: ["confirm", "attest"] },
      { word: "conduct", bn: "আচরণ", pos: "Noun", forms: [{ label: "verb", word: "conduct" }], synonyms: ["behaviour", "manners"] },
      { word: "co-curricular", bn: "সহপাঠক্রমিক", pos: "Adjective", synonyms: ["extracurricular"] },
      { word: "require", bn: "প্রয়োজন হওয়া", pos: "Verb", past: "required", pastParticiple: "required", forms: [{ label: "noun", word: "requirement" }], synonyms: ["need", "demand"] },
      { word: "testimonial", bn: "প্রশংসাপত্র", pos: "Noun", synonyms: ["character certificate", "reference"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Mymensingh Zilla School" },
      { type: "label", text: "Mymensingh" },
      { type: "label", text: "Subject: Prayer for a testimonial." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, I beg to state that I passed the SSC examination from your school in 2026 in the Science group and obtained GPA 5.00. I was a regular student of this school from class six to class ten. I took part in various co-curricular activities and was the captain of the school football team.",
      },
      {
        type: "para",
        text: "Now I want to get admitted into a college, and the college authority requires a testimonial from my school, certifying my conduct and character.",
      },
      {
        type: "para",
        text: "I, therefore, pray and hope that you would be kind enough to issue me a testimonial and oblige thereby.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Rakib Hasan" },
      { type: "label", text: "SSC Examination 2026, Roll: 214563" },
    ],
  },
  {
    id: "application-for-canteen",
    title: "Application for Setting Up a Canteen",
    prompt:
      "Write an application to the Headmaster of your school requesting him to set up a canteen in the school.",
    vocab: [
      { word: "hygienic", bn: "স্বাস্থ্যসম্মত", pos: "Adjective", forms: [{ label: "noun", word: "hygiene" }], synonyms: ["clean", "sanitary"], antonyms: ["unhygienic", "dirty"] },
      { word: "nourishing", bn: "পুষ্টিকর", pos: "Adjective", forms: [{ label: "verb", word: "nourish" }, { label: "noun", word: "nourishment" }], synonyms: ["nutritious", "wholesome"], antonyms: ["unhealthy"] },
      { word: "recess", bn: "টিফিন বিরতি", pos: "Noun", synonyms: ["break", "interval"] },
      { word: "roadside", bn: "রাস্তার পাশের", pos: "Adjective", synonyms: ["wayside"] },
      { word: "stomach trouble", bn: "পেটের পীড়া", pos: "Phrase", synonyms: ["indigestion", "stomach upset"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Jashore Government High School" },
      { type: "label", text: "Jashore" },
      { type: "label", text: "Subject: Prayer for setting up a canteen in the school." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to state that there is no canteen in our school. We come to school at nine in the morning and cannot go home before four in the afternoon. During the recess we feel very hungry, but we have nowhere to get good food.",
      },
      {
        type: "para",
        text: "So we have to buy food from the roadside shops outside the school gate. The food there is neither hygienic nor nourishing, and many of us often suffer from stomach trouble after eating it. Besides, going out of the school during the recess is not safe. A canteen inside the school selling clean food at a fair price would solve this problem.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to set up a canteen in our school for our health and safety.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Sabbir Rahman" },
      { type: "label", text: "Class: Ten, Roll: 9" },
    ],
  },
  {
    id: "application-for-computer-club",
    title: "Application for Setting Up a Computer Club",
    prompt:
      "Write an application to the Headmaster of your school for setting up a computer club.",
    vocab: [
      { word: "digital", bn: "ডিজিটাল, সংখ্যাভিত্তিক", pos: "Adjective", synonyms: ["computerised", "electronic"] },
      { word: "equip", bn: "সজ্জিত করা", pos: "Verb", past: "equipped", pastParticiple: "equipped", forms: [{ label: "noun", word: "equipment" }], synonyms: ["provide", "furnish"] },
      { word: "hands-on", bn: "হাতে-কলমে", pos: "Adjective", synonyms: ["practical", "direct"], antonyms: ["theoretical"] },
      { word: "keep pace with", bn: "তাল মিলিয়ে চলা", pos: "Phrase", synonyms: ["keep up with"], antonyms: ["fall behind"] },
      { word: "literacy", bn: "সাক্ষরতা, জ্ঞান", pos: "Noun", forms: [{ label: "adj", word: "literate" }], synonyms: ["knowledge", "education"], antonyms: ["illiteracy"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Sylhet Government Pilot High School" },
      { type: "label", text: "Sylhet" },
      { type: "label", text: "Subject: Application for setting up a computer club." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to state that computer literacy has become essential in the modern world. Information and Communication Technology is a compulsory subject for us, but we get very little hands-on practice in the class. Most of us have no computer at home.",
      },
      {
        type: "para",
        text: "A computer club would give us the opportunity to practise typing, programming, graphic design and safe use of the internet after class hours. It would also help us take part in olympiads and keep pace with the digital world. The computers in our lab could be used for this purpose, and our ICT teacher could guide the club.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to set up a computer club in our school and equip it properly.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Mahir Chowdhury" },
      { type: "label", text: "Class: Nine, Roll: 2" },
    ],
  },
  {
    id: "application-for-multimedia-classroom",
    title: "Application for Multimedia Classrooms",
    prompt:
      "Write an application to the Headmaster of your school for setting up more multimedia classrooms.",
    vocab: [
      { word: "abstract", bn: "বিমূর্ত", pos: "Adjective", forms: [{ label: "noun", word: "abstraction" }], synonyms: ["theoretical", "conceptual"], antonyms: ["concrete", "real"] },
      { word: "animation", bn: "অ্যানিমেশন, চলমান ছবি", pos: "Noun", forms: [{ label: "verb", word: "animate" }], synonyms: ["moving pictures"] },
      { word: "effective", bn: "কার্যকর", pos: "Adjective", forms: [{ label: "noun", word: "effect" }, { label: "adv", word: "effectively" }], synonyms: ["useful", "fruitful"], antonyms: ["ineffective", "useless"] },
      { word: "projector", bn: "প্রজেক্টর", pos: "Noun", forms: [{ label: "verb", word: "project" }] },
      { word: "visualise", bn: "কল্পনায় দেখা", pos: "Verb", past: "visualised", pastParticiple: "visualised", forms: [{ label: "adj", word: "visual" }], synonyms: ["picture", "imagine"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Khulna Zilla School" },
      { type: "label", text: "Khulna" },
      { type: "label", text: "Subject: Prayer for setting up more multimedia classrooms." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to state that there is only one multimedia classroom in our school for more than one thousand students. So each class gets the chance to use it only once or twice a month.",
      },
      {
        type: "para",
        text: "A multimedia classroom makes learning easy and interesting. With pictures, videos and animations shown on a projector, we can easily visualise abstract topics of science and mathematics, and we can remember them for a long time. Teachers can also use the internet to show us up-to-date information. Such classes are far more effective than lessons taught only on the blackboard.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to set up more multimedia classrooms in our school so that every class can benefit from them regularly.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Adnan Kabir" },
      { type: "label", text: "Class: Ten, Roll: 4" },
    ],
  },
  {
    id: "application-for-free-studentship",
    title: "Application for Full Free Studentship",
    prompt:
      "Write an application to the Headmaster of your school praying for full free studentship.",
    vocab: [
      { word: "bear the cost", bn: "খরচ বহন করা", pos: "Phrase", synonyms: ["pay for", "afford"] },
      { word: "day labourer", bn: "দিনমজুর", pos: "Noun", synonyms: ["daily wage earner"] },
      { word: "discontinue", bn: "বন্ধ করা", pos: "Verb", past: "discontinued", pastParticiple: "discontinued", forms: [{ label: "noun", word: "discontinuation" }], synonyms: ["stop", "give up"], antonyms: ["continue", "carry on"] },
      { word: "meagre", bn: "সামান্য, অপ্রতুল", pos: "Adjective", synonyms: ["scanty", "small"], antonyms: ["plentiful", "ample"] },
      { word: "studentship", bn: "বেতন মওকুফ সুবিধা", pos: "Noun", synonyms: ["scholarship", "free schooling"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Pabna Zilla School" },
      { type: "label", text: "Pabna" },
      { type: "label", text: "Subject: Prayer for full free studentship." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, I beg to state that I am a student of class nine in your school, bearing roll number one. My father is a day labourer. His income is meagre, and with it he has to maintain a family of six members. It is very hard for him to bear the cost of my education along with that of my younger brothers and sisters.",
      },
      {
        type: "para",
        text: "I have always stood first in my class and I have a strong desire to continue my studies. But if I do not get any help, I shall have to discontinue my education.",
      },
      {
        type: "para",
        text: "I, therefore, pray and hope that you would be kind enough to grant me full free studentship so that I can continue my studies.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Sumaiya Akter" },
      { type: "label", text: "Class: Nine, Roll: 1" },
    ],
  },
  {
    id: "application-for-common-room-facilities",
    title: "Application for Increasing Common Room Facilities",
    prompt:
      "Write an application to the Headmaster of your school for increasing the common room facilities.",
    vocab: [
      { word: "indoor games", bn: "ঘরোয়া খেলা", pos: "Phrase", synonyms: ["in-house games"], antonyms: ["outdoor games"] },
      { word: "leisure", bn: "অবসর", pos: "Noun", forms: [{ label: "adj", word: "leisurely" }], synonyms: ["free time", "spare time"], antonyms: ["work", "business"] },
      { word: "recreation", bn: "বিনোদন", pos: "Noun", forms: [{ label: "adj", word: "recreational" }], synonyms: ["amusement", "entertainment"], antonyms: ["work", "labour"] },
      { word: "refresh", bn: "সতেজ করা", pos: "Verb", past: "refreshed", pastParticiple: "refreshed", forms: [{ label: "noun", word: "refreshment" }], synonyms: ["revive", "freshen"], antonyms: ["tire", "exhaust"] },
      { word: "worn-out", bn: "জীর্ণ", pos: "Adjective", synonyms: ["shabby", "damaged"], antonyms: ["new", "fresh"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Bogura Zilla School" },
      { type: "label", text: "Bogura" },
      { type: "label", text: "Subject: Prayer for increasing common room facilities." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to state that our common room lacks the necessary facilities. It is small and poorly lit, and there are only a few worn-out chairs in it. The carrom board is broken and there is no chess set. No newspapers or magazines are kept there.",
      },
      {
        type: "para",
        text: "The common room is the only place where we can spend our leisure between classes. Recreation refreshes our minds, and indoor games and newspapers help us both to relax and to learn. For want of these facilities, many students waste their leisure wandering about outside.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to increase the facilities of our common room by providing new furniture, indoor games, daily newspapers and magazines.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Imran Hossain" },
      { type: "label", text: "Class: Ten, Roll: 6" },
    ],
  },
  {
    id: "application-for-repairing-road",
    title: "Application for Repairing a Damaged Road",
    prompt:
      "Write an application to the Chairman of your Union Parishad for repairing the damaged road of your village.",
    vocab: [
      { word: "impassable", bn: "চলাচলের অযোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "pass" }], synonyms: ["blocked", "unusable"], antonyms: ["passable"] },
      { word: "inhabitant", bn: "বাসিন্দা", pos: "Noun", forms: [{ label: "verb", word: "inhabit" }], synonyms: ["resident", "dweller"] },
      { word: "muddy", bn: "কর্দমাক্ত", pos: "Adjective", forms: [{ label: "noun", word: "mud" }], synonyms: ["slushy", "miry"], antonyms: ["dry", "clean"] },
      { word: "pothole", bn: "খানাখন্দ", pos: "Noun", synonyms: ["hole", "pit"] },
      { word: "suffering", bn: "দুর্ভোগ", pos: "Noun", forms: [{ label: "verb", word: "suffer" }], synonyms: ["hardship", "misery"], antonyms: ["comfort", "ease"] },
    ],
    body: [
      { type: "label", text: "10 September 2026" },
      { type: "label", text: "The Chairman" },
      { type: "label", text: "No. 4 Kashipur Union Parishad" },
      { type: "label", text: "Narayanganj" },
      { type: "label", text: "Subject: Prayer for repairing the damaged road of our village." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the inhabitants of the village of Kashipur, beg to draw your kind attention to the miserable condition of the road that links our village with the Upazila town. The road has not been repaired for many years. It is now full of potholes and becomes muddy and impassable in the rainy season.",
      },
      {
        type: "para",
        text: "The sufferings of the villagers know no bounds. Students cannot go to school regularly, patients cannot be taken to hospital in time and farmers cannot carry their crops to the market. Accidents have also become common on this road.",
      },
      {
        type: "para",
        text: "We, therefore, pray and hope that you would be kind enough to take immediate steps to repair the road and save us from this suffering.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the villagers" },
      { type: "label", text: "Md. Abdul Karim" },
      { type: "label", text: "Kashipur, Narayanganj" },
    ],
  },
  {
    id: "letter-about-aim-in-life",
    title: "Letter to a Friend about Your Aim in Life",
    prompt: "Write a letter to your friend telling him about your aim in life.",
    vocab: [
      { word: "aim", bn: "লক্ষ্য, উদ্দেশ্য", pos: "Noun", forms: [{ label: "verb", word: "aim (aimed)" }, { label: "adj", word: "aimless" }], synonyms: ["goal", "object"], antonyms: ["aimlessness", "drift"] },
      { word: "chamber", bn: "চেম্বার, রোগী দেখার কক্ষ", pos: "Noun", synonyms: ["consulting room", "office"] },
      { word: "charge", bn: "ফি, মূল্য", pos: "Noun", forms: [{ label: "verb", word: "charge (charged)" }, { label: "adj", word: "chargeable" }], synonyms: ["fee", "price"], antonyms: ["free service"] },
      { word: "population", bn: "জনসংখ্যা", pos: "Noun", forms: [{ label: "adj", word: "populous" }, { label: "verb", word: "populate" }], synonyms: ["inhabitants", "people"] },
      { word: "qualified", bn: "যোগ্যতাসম্পন্ন, সনদপ্রাপ্ত", pos: "Adjective", forms: [{ label: "verb", word: "qualify (qualified)" }, { label: "noun", word: "qualification" }], synonyms: ["trained", "competent"], antonyms: ["unqualified", "untrained"] },
    ],
    body: [
      { type: "label", text: "Kushtia" },
      { type: "label", text: "16 August 2026" },
      { type: "label", text: "My dear Rakib" },
      {
        type: "para",
        text: "I received your letter yesterday and was glad to know that you are well. You have asked me about my aim in life. I am writing to tell you what I have decided.",
      },
      {
        type: "para",
        text: "I want to be a doctor. Our village has a population of nearly five thousand, yet there is no qualified doctor within six miles. Last winter my grandmother died on the way to the town hospital, and I have not been able to forget it. Since then I have felt that I should do something for the poor people of my own village.",
      },
      {
        type: "para",
        text: "I know the way is long and hard. I shall have to do well in the SSC and HSC examinations, get admitted to a medical college and study for years. But I am ready to work for it. After passing out, I shall not run after money in the city. I shall open a small chamber in our village and treat the poor free of charge.",
      },
      {
        type: "para",
        text: "Write to me about your own plan in your next letter. Give my regards to your parents and love to your little sister.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Sabbir" },
    ],
  },
];

/* ───────────────────────────── Emails ───────────────────────────── */

const emails: Piece[] = [
  {
    id: "email-importance-of-reading-newspapers",
    title: "Email about the Importance of Reading Newspapers",
    prompt:
      "Write an email to your friend about the importance of reading newspapers.",
    vocab: [
      { word: "calamity", bn: "দুর্যোগ, বিপর্যয়", pos: "Noun", forms: [{ label: "adj", word: "calamitous" }], synonyms: ["disaster", "catastrophe"], antonyms: ["blessing", "boon"] },
      { word: "commerce", bn: "বাণিজ্য", pos: "Noun", forms: [{ label: "adj", word: "commercial" }, { label: "adv", word: "commercially" }], synonyms: ["trade", "business"] },
      { word: "doorstep", bn: "দোরগোড়া", pos: "Noun", synonyms: ["threshold", "entrance"] },
      { word: "editorial", bn: "সম্পাদকীয়", pos: "Noun", forms: [{ label: "noun", word: "editor" }, { label: "verb", word: "edit (edited)" }], synonyms: ["leading article"] },
      { word: "price hike", bn: "দ্রব্যমূল্যের ঊর্ধ্বগতি", pos: "Phrase", synonyms: ["rise in prices"], antonyms: ["fall in prices"] },
      { word: "reconsider", bn: "পুনর্বিবেচনা করা", pos: "Verb", past: "reconsidered", pastParticiple: "reconsidered", forms: [{ label: "noun", word: "reconsideration" }, { label: "verb", word: "consider" }], synonyms: ["rethink", "review"], antonyms: ["stick to", "persist in"] },
      { word: "rumour", bn: "গুজব", pos: "Noun", forms: [{ label: "adj", word: "rumoured" }], synonyms: ["hearsay", "gossip"], antonyms: ["fact", "truth"] },
      { word: "storehouse", bn: "ভাণ্ডার", pos: "Noun", forms: [{ label: "verb", word: "store (stored)" }], synonyms: ["treasury", "repository"] },
      { word: "verify", bn: "যাচাই করা", pos: "Verb", past: "verified", pastParticiple: "verified", forms: [{ label: "noun", word: "verification" }, { label: "adj", word: "verifiable" }], synonyms: ["check", "confirm"], antonyms: ["guess", "assume"] },
      { word: "vocabulary", bn: "শব্দভাণ্ডার", pos: "Noun", synonyms: ["word stock", "stock of words"] },
    ],
    body: [
      { type: "label", text: "From: farhana.rahman09@gmail.com" },
      { type: "label", text: "To: nusrat.jahan24@gmail.com" },
      { type: "label", text: "Subject: Why you should read a newspaper every day" },
      { type: "label", text: "Dear Nusrat" },
      {
        type: "para",
        text: "I hope this email finds you in good health. It was a pleasure to receive your message last week. In it you wrote that you can spare no time for anything but your textbooks, and that you have given up reading the newspaper altogether. I am writing to tell you why I think you should reconsider that decision.",
      },
      {
        type: "para",
        text: "A newspaper is a storehouse of knowledge. It brings the whole world to our doorstep every morning. From its pages we learn what is happening in our own country and abroad — in politics, in trade and commerce, in science, in sports and in the world of literature. A student who reads a newspaper regularly is never at a loss when a question of general knowledge is put to him in an interview or a viva voce.",
      },
      {
        type: "para",
        text: "It has a special value for people of our age. In these days of social media a rumour travels faster than the truth, and thousands believe it without question. A newspaper teaches us to verify what we hear, to look at both sides of a matter and to form an opinion of our own. That habit of thinking for oneself is a part of education which no textbook can give us.",
      },
      {
        type: "para",
        text: "There is a practical benefit as well, and it concerns our examination directly. Reading an English daily improves vocabulary, spelling and sentence structure faster than any grammar book. The editorial page will show you how an argument is built up, and the news reports will teach you to write plainly and to the point. Much of the material we need for our paragraphs and compositions — pollution, price hike, road accidents, natural calamities — is to be found there in plenty.",
      },
      {
        type: "para",
        text: "So do begin again, and begin in a small way. Fifteen minutes a day will be enough. Read one page attentively, underline the words you do not know, write them down in a notebook with their meanings and use them in sentences of your own. If you keep it up for a single month, you will notice the difference yourself.",
      },
      {
        type: "para",
        text: "Give my salam to your parents. Write to me when you have made a start, and let me know which paper you have chosen.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Farhana" },
    ],
  },
  {
    id: "email-to-father-about-studies",
    title: "Email to Your Father about Your Studies",
    prompt:
      "Write an email to your father telling him about your preparation for the coming examination.",
    vocab: [
      { word: "coaching", bn: "কোচিং, বিশেষ প্রশিক্ষণ", pos: "Noun", forms: [{ label: "verb", word: "coach (coached)" }, { label: "noun", word: "coach" }], synonyms: ["tutoring", "training"] },
      { word: "give an account of", bn: "বিবরণ দেওয়া", pos: "Phrase", synonyms: ["describe", "report on"] },
      { word: "practical", bn: "ব্যবহারিক", pos: "Adjective", forms: [{ label: "noun", word: "practice" }, { label: "adv", word: "practically" }], synonyms: ["applied", "hands-on"], antonyms: ["theoretical"] },
      { word: "preparation", bn: "প্রস্তুতি", pos: "Noun", forms: [{ label: "verb", word: "prepare (prepared)" }, { label: "adj", word: "preparatory" }], synonyms: ["readiness", "arrangement"], antonyms: ["unpreparedness"] },
      { word: "revise", bn: "পুনরালোচনা করা", pos: "Verb", past: "revised", pastParticiple: "revised", forms: [{ label: "noun", word: "revision" }], synonyms: ["go over again", "review"], antonyms: ["neglect", "skip"] },
      { word: "strictly", bn: "কঠোরভাবে", pos: "Adverb", forms: [{ label: "adj", word: "strict" }, { label: "noun", word: "strictness" }], synonyms: ["rigidly", "firmly"], antonyms: ["loosely", "carelessly"] },
      { word: "trigonometry", bn: "ত্রিকোণমিতি", pos: "Noun", forms: [{ label: "adj", word: "trigonometric" }], synonyms: ["branch of maths on triangles"] },
    ],
    body: [
      { type: "label", text: "From: sakib.hasan.ssc@gmail.com" },
      { type: "label", text: "To: kamrul.hasan@yahoo.com" },
      { type: "label", text: "Subject: My preparation for the SSC examination" },
      { type: "label", text: "Dear Father" },
      {
        type: "para",
        text: "Assalamu Alaikum. I hope you are keeping well. I received the money you sent through the bank last week, and I have paid my examination fee and the coaching bill out of it. Thank you very much. In your last email you asked me to write in detail about my preparation, so I am giving you a full account of it.",
      },
      {
        type: "para",
        text: "The syllabus is almost covered. I have finished Bangla, English and religion, and I am now revising them for the second time. Mathematics is done except for two chapters of trigonometry, which our teacher will finish next week. Physics and chemistry give me the least trouble, but I am rather weak in the practical part of biology, and I have arranged extra classes twice a week for it.",
      },
      {
        type: "para",
        text: "I have made a routine and I follow it strictly. I rise at half past five and take up the difficult subjects while my mind is fresh, keeping the lighter ones for the evening. Besides my school hours I study about six hours a day, and I set apart every Friday morning for revising the whole week's work. I have also begun to solve last year's board questions with a clock before me, for my difficulty in mathematics has always been speed rather than knowledge.",
      },
      {
        type: "para",
        text: "Our test examination will be held in the third week of next month. My teachers say that if I keep up this pace I may hope for a good result. I shall write to you as soon as the result is published.",
      },
      {
        type: "para",
        text: "There is one thing I need. The book of model questions of our board is not available in our town. If you kindly send the money, our neighbour Rashed bhai will buy me a copy from the city next week. It costs about four hundred and fifty taka.",
      },
      {
        type: "para",
        text: "Please do not worry about my health. I take my meals on time, play for an hour every evening and go to bed by eleven. Mother looks after me with great care. Pray for me so that I may come out with a good result and make you proud.",
      },
      { type: "label", text: "My salam to you" },
      { type: "label", text: "Your loving son" },
      { type: "label", text: "Sakib" },
    ],
  },
];

/* ─────────────────────────── Sections ─────────────────────────── */

const grammar: Category[] = [
  {
    id: "articles",
    title: "Articles",
    icon: "Type",
    description: "Filling gaps with a, an and the, and knowing when to leave them out.",
    pieces: articles,
  },
  {
    id: "preposition",
    title: "Preposition",
    icon: "MoveRight",
    description: "The right preposition for the gap, and the appropriate prepositions.",
    pieces: preposition,
  },
  {
    id: "completing-sentences",
    title: "Completing Sentences",
    icon: "TextCursorInput",
    description: "Sentence beginnings finished in meaningful, correct English.",
    pieces: completingSentences,
  },
  {
    id: "right-form-of-verbs",
    title: "Right Form of Verbs",
    icon: "SpellCheck",
    description: "Verbs in brackets put in the tense and form the sentence needs.",
    pieces: rightFormOfVerbs,
  },
  {
    id: "transformation",
    title: "Transformation of Sentences",
    icon: "Shuffle",
    description: "Sentences changed in form without changing their meaning.",
    pieces: transformation,
  },
  {
    id: "narration",
    title: "Narration",
    icon: "Quote",
    description: "Direct speech turned into indirect speech and back again.",
    pieces: narration,
  },
  {
    id: "tag-questions",
    title: "Tag Questions",
    icon: "CircleHelp",
    description: "The short question tagged to the end of a statement.",
    pieces: tagQuestions,
  },
  {
    id: "connectors",
    title: "Connectors",
    icon: "Link",
    description: "Linking words that join sentences and ideas.",
    pieces: connectors,
  },
  {
    id: "suffix-prefix",
    title: "Suffix & Prefix",
    icon: "Puzzle",
    description: "Words formed by adding a suffix or a prefix to the root.",
    pieces: suffixPrefix,
  },
  {
    id: "punctuation",
    title: "Punctuation & Capitalization",
    icon: "CaseSensitive",
    description: "Punctuation marks and capital letters put where they belong.",
    pieces: punctuation,
  },
];

const writing: Category[] = [
  {
    id: "paragraph",
    title: "Paragraph",
    icon: "AlignLeft",
    description: "Guided paragraphs on the topics the board asks most often.",
    pieces: paragraphs,
  },
  {
    id: "completing-story",
    title: "Completing Story",
    icon: "BookMarked",
    description: "Unfinished stories completed, with a title and a moral.",
    pieces: stories,
  },
  {
    id: "dialogue",
    title: "Dialogue",
    icon: "MessagesSquare",
    description: "Conversations between two speakers on a given situation.",
    pieces: dialogues,
  },
  {
    id: "composition",
    title: "Composition",
    icon: "PenLine",
    description: "Full-length essays built paragraph by paragraph.",
    pieces: compositions,
  },
  {
    id: "application-letter",
    title: "Application & Letter",
    icon: "ScrollText",
    description: "Formal applications and letters to friends and family.",
    // Applications first, then letters; sort is stable, so each group keeps
    // its written order.
    pieces: [...letters, ...applications, ...personalLetters].sort(
      (a, b) => Number(a.id.startsWith("letter")) - Number(b.id.startsWith("letter")),
    ),
  },
  {
    id: "email",
    title: "Email",
    icon: "Mail",
    description: "Emails in the layout the examiner expects.",
    pieces: [...emails, ...moreEmails],
  },
];

export const sections: Section[] = [
  { id: "grammar", title: "Grammar", categories: grammar },
  { id: "writing", title: "Writing", categories: writing },
];

export const categories: Category[] = sections.flatMap((s) => s.categories);
