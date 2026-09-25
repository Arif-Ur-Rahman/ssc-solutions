// components/suffixPrefixData.ts
//
// Suffix & Prefix: first the rules — what each common prefix and suffix does
// and the spelling changes that come with them — then board-style passages
// solved gap by gap, with the reason for each answer.

import type { Block, Piece } from "./englishData";

const h = (text: string): Block => ({ type: "heading", text });
const rule = (text: string, formula?: string): Block => ({
  type: "rule",
  text,
  formula,
});
const note = (text: string): Block => ({ type: "note", label: "Note", text });
const ex = (...lines: [string, string][]): Block => ({
  type: "example",
  lines: lines.map(([label, text]) => ({ label, text })),
});
const para = (text: string): Block => ({ type: "para", text });

export const suffixPrefix: Piece[] = [
  /* ─────────────────────────── Rules ─────────────────────────── */
  {
    id: "suffix-prefix-rules",
    title: "Rules of Suffix & Prefix",
    body: [
      para("A prefix is a letter or group of letters added to the beginning of a word (the root) to change its meaning: happy → unhappy. A suffix is added to the end of a word, and it usually changes the part of speech: happy (adjective) → happiness (noun), happily (adverb). Prefixes and suffixes together are called affixes."),
      ex(["Prefix", "un + kind = unkind"], ["Suffix", "kind + ness = kindness"], ["Both", "un + kind + ness = unkindness"]),

      h("How to solve the question"),
      rule("Read the whole sentence and decide which part of speech the gap needs: a noun, an adjective, a verb or an adverb.", "gap → which part of speech?"),
      ex(["Question", "He is an (honest) man. So nobody trusts him."], ["Answer", "He is a dishonest man. So nobody trusts him."]),
      rule("Decide whether the meaning must be positive or negative. If the sense of the sentence is negative, add a negative prefix.", "negative sense → un / in / im / il / ir / dis / mis / non"),
      ex(["Question", "The (employ) youths are a burden to the country."], ["Answer", "The unemployed youths are a burden to the country."]),
      rule("Check whether the noun should be singular or plural, and the verb in the right tense and number, after the affix is added.", "affix + agreement"),
      ex(["Question", "The (inhabit) of the village are very poor."], ["Answer", "The inhabitants of the village are very poor."]),
      note("Sometimes a word needs both a prefix and a suffix: (fortune) → unfortunately; (employ) → unemployment; (care) → carelessness."),

      h("Negative prefixes"),
      rule("un- and in- are the commonest negative prefixes.", "un- / in- = not"),
      ex(["un-", "unable, unhappy, unkind, unfair, unwise, unknown, unlucky, unusual, unemployed, unfit"]),
      ex(["in-", "incomplete, inactive, incorrect, inability, injustice, insincere, independent, inexperienced"]),
      rule("im- comes before words beginning with b, m or p; il- before l; ir- before r.", "im + b / m / p · il + l · ir + r"),
      ex(["im-", "impossible, impatient, impure, improper, imbalance, immortal, immature, immoral"]),
      ex(["il-", "illegal, illiterate, illogical, illegible"]),
      ex(["ir-", "irregular, irresponsible, irrelevant, irresistible, irreparable"]),
      rule("dis- means 'not' or 'the opposite of'.", "dis- = not / opposite"),
      ex(["dis-", "dishonest, disagree, dislike, disobey, disorder, disappear, discourage, disadvantage, disrespect"]),
      rule("mis- means 'wrongly' or 'badly'; non- means 'not'.", "mis- = wrongly · non- = not"),
      ex(["mis-", "misuse, misunderstand, mislead, misfortune, misbehave, mismanagement"]),
      ex(["non-", "non-cooperation, non-violence, nonsense, non-stop, non-government"]),

      h("Other common prefixes"),
      ex(["re-", "again: rebuild, rewrite, reappear, recall, renew"]),
      ex(["pre-", "before: prehistoric, prepaid, precaution, pre-war"]),
      ex(["over-", "too much: overload, overeat, overcrowded, overflow, overwork"]),
      ex(["under-", "too little / below: underdeveloped, underpaid, underground, undergo"]),
      ex(["en- / em-", "to make: enrich, enable, endanger, enlarge, enforce, empower"]),
      ex(["be-", "to make / all over: befriend, belittle, beloved, becalm"]),
      ex(["co- / com-", "together: co-operate, co-worker, compassion, compose"]),
      ex(["inter-", "between: international, interview, interaction"]),
      ex(["sub-", "under: subway, submarine, subdivide, subheading"]),
      ex(["super-", "above: supernatural, superman, supervise"]),
      ex(["anti-", "against: antisocial, antibiotic, anti-corruption"]),
      ex(["mid-", "middle: midnight, midday, midway, midterm"]),
      ex(["out-", "more than: outnumber, outlive, outrun, outstanding"]),
      ex(["fore-", "before: foretell, forecast, forefather, foresee"]),

      h("Suffixes that make nouns"),
      rule("-tion, -sion, -ment, -ance and -ence usually turn a verb into a noun.", "verb + tion / sion / ment / ance / ence → noun"),
      ex(["-tion / -ation", "educate → education, invent → invention, inform → information, pollute → pollution, examine → examination"]),
      ex(["-sion", "decide → decision, discuss → discussion, divide → division, permit → permission"]),
      ex(["-ment", "develop → development, employ → employment, govern → government, achieve → achievement, improve → improvement"]),
      ex(["-ance / -ence", "appear → appearance, perform → performance, exist → existence, depend → dependence"]),
      rule("-ness, -ity, -dom and -hood usually turn an adjective or a noun into an abstract noun.", "adjective + ness / ity / dom → noun"),
      ex(["-ness", "kind → kindness, happy → happiness, dark → darkness, lazy → laziness, aware → awareness"]),
      ex(["-ity", "able → ability, pure → purity, necessary → necessity, popular → popularity, real → reality"]),
      ex(["-dom", "free → freedom, wise → wisdom, king → kingdom, bore → boredom"]),
      ex(["-hood", "child → childhood, neighbour → neighbourhood, brother → brotherhood, man → manhood"]),
      ex(["-ship", "friend → friendship, leader → leadership, member → membership"]),
      rule("-er, -or, -ist, -ian and -ant make a noun for the person who does something.", "verb / noun + er / or / ist / ant → person"),
      ex(["-er / -or", "teach → teacher, farm → farmer, visit → visitor, act → actor, invent → inventor"]),
      ex(["-ist / -ian / -ant", "science → scientist, novel → novelist, music → musician, library → librarian, inhabit → inhabitant, assist → assistant"]),

      h("Suffixes that make adjectives"),
      rule("-ful means 'full of'; -less means 'without'.", "noun + ful / less → adjective"),
      ex(["-ful", "beauty → beautiful, care → careful, use → useful, help → helpful, success → successful, peace → peaceful"]),
      ex(["-less", "care → careless, use → useless, hope → hopeless, home → homeless, price → priceless"]),
      rule("-able / -ible, -ous, -ive, -al, -ic, -y and -ish also make adjectives.", "noun / verb + able / ous / ive / al / ic / y → adjective"),
      ex(["-able / -ible", "comfort → comfortable, read → readable, value → valuable, sense → sensible, response → responsible"]),
      ex(["-ous", "danger → dangerous, fame → famous, courage → courageous, poison → poisonous, mountain → mountainous"]),
      ex(["-ive", "act → active, attract → attractive, create → creative, effect → effective"]),
      ex(["-al", "nation → national, nature → natural, culture → cultural, finance → financial, industry → industrial"]),
      ex(["-ic / -y / -ish", "history → historic, economy → economic, health → healthy, dirt → dirty, child → childish, fool → foolish"]),
      ex(["-ly (adjective)", "friend → friendly, love → lovely, man → manly, cost → costly"]),

      h("Suffixes that make verbs and adverbs"),
      rule("-en, -ise / -ize, -fy and -ate make verbs.", "adjective / noun + en / ize / fy → verb"),
      ex(["-en", "wide → widen, short → shorten, strength → strengthen, deep → deepen, threat → threaten"]),
      ex(["-ise / -ize", "modern → modernise, real → realise, organ → organise, civil → civilise"]),
      ex(["-fy", "pure → purify, beauty → beautify, class → classify, simple → simplify"]),
      rule("-ly added to an adjective makes an adverb.", "adjective + ly → adverb"),
      ex(["-ly (adverb)", "quick → quickly, careful → carefully, regular → regularly, fortunate → fortunately, happy → happily"]),

      h("Spelling changes"),
      rule("A final silent 'e' is dropped before a suffix beginning with a vowel, but kept before one beginning with a consonant.", "hope + ing → hoping · hope + ful → hopeful"),
      ex(["Dropped", "use → usable, create → creation, move → movable, pure → purity"], ["Kept", "use → useful, care → careful, move → movement, hope → hopeless"]),
      rule("A final 'y' after a consonant changes to 'i' before a suffix (except -ing).", "y → i + suffix"),
      ex(["y → i", "happy → happiness, beauty → beautiful, lazy → laziness, busy → business, easy → easily"], ["Kept", "play → player, enjoy → enjoyment, study → studying"]),
      rule("A short word ending in one vowel + one consonant doubles the consonant before a vowel suffix, when the last syllable is stressed.", "consonant doubled + vowel suffix"),
      ex(["Doubled", "begin → beginning, admit → admittance, run → runner, forget → forgettable"]),
      rule("Some words change more than just an ending.", "irregular forms"),
      ex(["Irregular", "long → length, strong → strength, deep → depth, high → height, wide → width, true → truth, poor → poverty, able → ability, pronounce → pronunciation"]),
    ],
  },

  /* ─────────────────────── Solved passages ─────────────────────── */
  {
    id: "suffix-prefix-education",
    title: "Solved Passage: Education",
    prompt:
      "Complete the text with the appropriate form of the words in brackets using suffixes or prefixes or both.",
    body: [
      para("Education is the backbone of a nation. An (a) ——— (educate) nation cannot prosper. It is education that makes a man (b) ——— (conscience) of his rights and duties. An (c) ——— (literate) person is often (d) ——— (able) to take the right decision. So the (e) ——— (govern) has taken many steps to (f) ——— (courage) education. Now primary education is free and (g) ——— (compel). Poor students are also given (h) ——— (finance) help. (i) ——— (fortunate), many poor parents still send their children to work. Mass (j) ——— (aware) must be raised to solve this problem."),
      h("Answers"),
      ex(["(a) uneducated", "The sense is negative — such a nation cannot prosper — so the prefix un- and the suffix -ed are added."]),
      ex(["(b) conscious", "After 'makes a man' an adjective is needed: conscience → conscious."]),
      ex(["(c) illiterate", "A negative sense again; a word beginning with l takes il-."]),
      ex(["(d) unable", "An illiterate person cannot decide rightly, so the negative un- is needed."]),
      ex(["(e) government", "'The' needs a noun: govern + -ment."]),
      ex(["(f) encourage", "After 'to' a verb is needed: en- + courage."]),
      ex(["(g) compulsory", "Joined to the adjective 'free' by 'and', so an adjective: compel → compulsory."]),
      ex(["(h) financial", "An adjective before the noun 'help': finance + -ial."]),
      ex(["(i) Unfortunately", "A sentence adverb with a negative sense: un- + fortunate + -ly."]),
      ex(["(j) awareness", "A noun is needed as the subject: aware + -ness."]),
      h("The completed passage"),
      para("Education is the backbone of a nation. An uneducated nation cannot prosper. It is education that makes a man conscious of his rights and duties. An illiterate person is often unable to take the right decision. So the government has taken many steps to encourage education. Now primary education is free and compulsory. Poor students are also given financial help. Unfortunately, many poor parents still send their children to work. Mass awareness must be raised to solve this problem."),
    ],
  },
  {
    id: "suffix-prefix-exercise",
    title: "Solved Passage: Physical Exercise",
    prompt:
      "Complete the text with the appropriate form of the words in brackets using suffixes or prefixes or both.",
    body: [
      para("Physical exercise is (a) ——— (necessity) for good health. It makes our body strong and (b) ——— (act). A man who takes no exercise is often (c) ——— (health). (d) ——— (fortunate), many of us (e) ——— (like) exercise and lead an (f) ——— (active) life. Lack of exercise causes (g) ——— (lazy) and many (h) ——— (danger) diseases. So we should take exercise (i) ——— (regular) according to our (j) ——— (able)."),
      h("Answers"),
      ex(["(a) necessary", "After 'is' an adjective is needed: necessity → necessary."]),
      ex(["(b) active", "Joined to the adjective 'strong' by 'and': act + -ive."]),
      ex(["(c) unhealthy", "Taking no exercise makes a man ill, so the sense is negative: un- + health + -y."]),
      ex(["(d) Unfortunately", "The writer regrets what follows: un- + fortunate + -ly."]),
      ex(["(e) dislike", "A verb with a negative sense: dis- + like."]),
      ex(["(f) inactive", "People who dislike exercise lead a life without activity: in- + active."]),
      ex(["(g) laziness", "The verb 'causes' needs a noun object: lazy → laziness (y changes to i)."]),
      ex(["(h) dangerous", "An adjective before the noun 'diseases': danger + -ous."]),
      ex(["(i) regularly", "An adverb modifying 'take exercise': regular + -ly."]),
      ex(["(j) ability", "'Our' needs a noun: able → ability."]),
      h("The completed passage"),
      para("Physical exercise is necessary for good health. It makes our body strong and active. A man who takes no exercise is often unhealthy. Unfortunately, many of us dislike exercise and lead an inactive life. Lack of exercise causes laziness and many dangerous diseases. So we should take exercise regularly according to our ability."),
    ],
  },
  {
    id: "suffix-prefix-liberation-war",
    title: "Solved Passage: Our Liberation War",
    prompt:
      "Complete the text with the appropriate form of the words in brackets using suffixes or prefixes or both.",
    body: [
      para("The Liberation War of 1971 is the most (a) ——— (glory) chapter in our history. The Pakistani rulers treated the people of East Pakistan (b) ——— (just). They wanted to keep our people (c) ——— (power) and destroy our (d) ——— (culture) identity. On the night of 25 March, the Pakistani army attacked the (e) ——— (arm) people. The (f) ——— (courage) freedom fighters fought (g) ——— (hero) for nine months. At last we achieved our (h) ——— (independent) on 16 December. The sacrifice of the martyrs is (i) ——— (forget). We should always be (j) ——— (thank) to them."),
      h("Answers"),
      ex(["(a) glorious", "An adjective after 'the most': glory → glorious."]),
      ex(["(b) unjustly", "An adverb with a negative sense — the rulers were unfair: un- + just + -ly."]),
      ex(["(c) powerless", "An adjective after 'keep our people', meaning without power: power + -less."]),
      ex(["(d) cultural", "An adjective before 'identity': culture + -al."]),
      ex(["(e) unarmed", "Ordinary people had no weapons: un- + arm + -ed."]),
      ex(["(f) courageous", "An adjective before 'freedom fighters': courage + -ous."]),
      ex(["(g) heroically", "An adverb modifying 'fought': hero + -ic + -ally."]),
      ex(["(h) independence", "'Our' needs a noun: independent → independence."]),
      ex(["(i) unforgettable", "The sacrifice can never be forgotten: un- + forget + t + -able (t doubled)."]),
      ex(["(j) thankful", "An adjective after 'be': thank + -ful."]),
      h("The completed passage"),
      para("The Liberation War of 1971 is the most glorious chapter in our history. The Pakistani rulers treated the people of East Pakistan unjustly. They wanted to keep our people powerless and destroy our cultural identity. On the night of 25 March, the Pakistani army attacked the unarmed people. The courageous freedom fighters fought heroically for nine months. At last we achieved our independence on 16 December. The sacrifice of the martyrs is unforgettable. We should always be thankful to them."),
    ],
  },
];
