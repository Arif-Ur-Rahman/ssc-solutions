// components/articlesData.ts
//
// Articles, one piece per family of rules: choosing between a and an, the uses
// of a / an, the uses of the, where no article is used, and the cases that
// trip students up. Each piece gives the rules in order and works each rule
// through examples, then board-style passages are solved gap by gap with the
// reason for each answer.

import type { Block, Piece } from "./englishData";

const h = (text: string): Block => ({ type: "heading", text });
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
// The usual set: the sentence with its gap, the article that fills it and why.
const q = (given: string, answer: string, why: string): Block =>
  ex(["Given", given], ["Answer", answer], ["Why", why]);
// A common mistake set beside its correction.
const fix = (wrong: string, right: string): Block =>
  ex(["Wrong", wrong], ["Right", right]);
const para = (text: string): Block => ({ type: "para", text });

const PROMPT =
  "Fill in the gaps with articles (a, an or the). Put a cross (×) where an article is not needed.";

export const articles: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "articles-introduction",
    title: "Introduction",
    body: [
      para("A, an and the are called articles. They are really a kind of adjective: they come before a noun (or before the adjective of a noun) and tell us whether we mean any one thing of its kind or one particular thing. There are only three of them, but deciding which one a gap needs — or whether it needs one at all — depends on the noun, the sound of the next word and the meaning of the whole sentence."),
      h("The two kinds"),
      ex(["Indefinite", "a, an — any one, not a particular one: I saw a bird on the tree."], ["Definite", "the — a particular one that is already known: The bird was singing."]),
      ex(["No article (×)", "a general sense, a proper name or a fixed phrase: Birds can fly. Dhaka is a big city. He goes to school."]),

      h("A or An: go by sound, not by spelling"),
      rule("Use 'a' before a word that begins with a consonant sound, even if its first letter is a vowel.", "a + consonant sound"),
      ex(["a", "a boy · a book · a horse · a pen · a big apple"]),
      ex(["a ('yu' sound)", "a university · a useful thing · a union · a European · a uniform · a unique idea"]),
      ex(["a ('wa' sound)", "a one-taka note · a one-eyed man · a once-famous singer"]),
      rule("Use 'an' before a word that begins with a vowel sound, even if its first letter is a consonant.", "an + vowel sound"),
      ex(["an", "an apple · an egg · an ink-pot · an orange · an umbrella · an old man"]),
      ex(["an (silent h)", "an hour · an honest man · an honour · an heir · an honourable guest"]),
      ex(["an (letter names)", "an MA · an SSC examinee · an MP · an FM radio · an X-ray · an NGO · an LLB"]),
      note("The letters F, H, L, M, N, R, S and X are pronounced with a vowel sound at the start (ef, aitch, el, em, en, ar, es, eks), so an abbreviation read letter by letter from them takes 'an'. But a BA, a BSc, a UN officer (bee, yu)."),
      note("The article goes by the word that comes right after it, which is often an adjective, not the noun: a man → an old man; an apple → a big apple; an hour → a full hour."),

      h("How the question is set"),
      para("In the SSC exam a short passage is given with gaps, usually ten, marked (a) to (j). You write the article each gap needs, and a cross (×) where no article is needed. A cross is a real answer, and a passage almost always has one or two of them."),

      h("How to solve a gap"),
      para("Work in four steps. (1) Read the whole passage first, so you know what has already been mentioned. (2) Look at the noun after the gap: is it countable or uncountable, singular or plural, a proper name or a common noun? (3) Ask whether it means any one of its kind or a particular one — mentioned before, made particular by a phrase after it ('of …', 'who …'), or the only one of its kind. (4) If the answer is 'a' or 'an', listen to the sound of the word right after the gap and choose."),
      ex(["Singular countable, any one", "a / an — I want a pen."], ["Particular (any noun)", "the — The pen on the table is mine."], ["Plural or uncountable, general", "× — Pens are cheap. Water is precious."]),
      note("A singular countable noun can never stand alone. 'He is doctor' and 'I saw dog' are wrong; it needs a, an, the or a word like my, this or every."),
    ],
  },

  /* ───────────────────────── Uses of A / An ───────────────────────── */
  {
    id: "articles-a-an",
    title: "Uses of A and An",
    body: [
      para("'A' and 'an' come only before a singular countable noun. They say that the thing is one of its kind, not a particular one the reader already knows."),

      rule("Before a singular countable noun mentioned for the first time, or not meant as a particular one.", "a / an + singular countable noun (first mention)"),
      ex(["Example", "I saw a dog in the street."]),
      ex(["Example", "Once there lived an old man in a village."]),
      ex(["Example", "She wants to buy a new dress."]),

      rule("In the sense of 'one'.", "a / an = one"),
      ex(["Example", "He has a son and two daughters."]),
      ex(["Example", "I bought a dozen eggs and a kilo of rice."]),
      ex(["Example", "There are a hundred students in our class."]),
      ex(["Example", "Rome was not built in a day."]),

      rule("In the sense of 'any' or 'every', to speak of a whole class through one member.", "a / an = any one of its kind"),
      ex(["Example", "A cow is a useful animal."]),
      ex(["Example", "A student should be punctual."]),
      ex(["Example", "An honest man is respected by all."]),

      rule("In the sense of 'per' or 'each', with rates and prices.", "a / an = per"),
      ex(["Example", "Take this medicine twice a day."]),
      ex(["Example", "Rice sells at seventy taka a kilo."]),
      ex(["Example", "The car was running at eighty kilometres an hour."]),
      ex(["Example", "We meet once a week."]),

      rule("Before a singular noun of profession, post or position that describes someone.", "subject + be / become + a / an + profession"),
      ex(["Example", "His father is a doctor."]),
      ex(["Example", "She wants to be an engineer."]),
      ex(["Example", "He was a teacher before he became a writer."]),
      note("In the plural there is no article: They are doctors. And a post that only one person holds takes 'the' or nothing: He was made captain of the team. He is the Headmaster of our school."),

      rule("In fixed expressions of quantity.", "a few · a little · a lot of · a great many · a great deal of · a couple of · a number of"),
      ex(["Example", "I have a few friends in Dhaka."]),
      ex(["Example", "There is a little milk in the jug."]),
      ex(["Example", "A great many people attended the meeting."]),
      ex(["Example", "He spent a great deal of money on books."]),

      rule("In exclamations with 'what' and after 'such', 'quite' and 'rather' before a singular countable noun.", "what / such / quite / rather + a / an + (adj) + noun"),
      ex(["Example", "What a beautiful scene it is!"]),
      ex(["Example", "What an idea!"]),
      ex(["Example", "I have never seen such a large crowd."]),
      ex(["Example", "It was quite a long journey."]),

      rule("After 'so', 'too', 'as' and 'how' + adjective, the article comes after the adjective. 'Half' and 'many' also come before 'a'.", "so / too / as + adj + a + noun · half an … · many a + singular noun"),
      ex(["Example", "He is so good a boy that everybody loves him."]),
      ex(["Example", "It is too difficult a task for a child."]),
      ex(["Example", "He is as brave a soldier as his father."]),
      ex(["Example", "I waited for half an hour."]),
      ex(["Example", "Many a man has lost his life in the sea."]),
      note("'Many a' takes a singular noun and a singular verb: 'Many a student has failed', not 'Many a students have failed'."),

      rule("Before a proper noun used as a common noun, meaning 'a person like' or 'a certain'.", "a + proper noun = someone like / a certain"),
      ex(["Example", "He is a Hatem in charity. (a man as generous as Hatem Tai)"]),
      ex(["Example", "A Mr. Karim came to see you this morning. (a certain Mr. Karim)"]),

      rule("Before an uncountable or abstract noun when an adjective or phrase makes it one kind or one instance of it.", "a + adj + abstract / material noun"),
      ex(["Example", "He has a good knowledge of English."]),
      ex(["Example", "It was a great pleasure to meet you."]),
      ex(["Example", "She got a good education."]),
      ex(["Example", "He fell into a sound sleep."]),

      rule("In many fixed phrases. Learn them as they are.", "a / an in set phrases"),
      ex(["Phrases", "in a hurry · at a loss · as a rule · at a time · all of a sudden · in a fix · for a while · at a stretch"]),
      ex(["Phrases", "take a walk · take a seat · have a bath · make a noise · make a mistake · tell a lie · keep a secret · give a speech"]),
      ex(["Illness", "have a cold · catch a cold · have a headache · have a fever · have a toothache"]),
    ],
  },

  /* ───────────────────────── Uses of The ───────────────────────── */
  {
    id: "articles-the",
    title: "Uses of The",
    body: [
      para("'The' is used before any noun — singular or plural, countable or uncountable — when we mean a particular one that the reader can identify. It is the most used word in the English language, and most of the gaps in a board passage are 'the'."),

      rule("Before a noun already mentioned, or known to both speaker and listener.", "a / an (first mention) → the (second mention)"),
      ex(["Example", "I saw a dog. The dog was black."]),
      ex(["Example", "He bought a pen and a book. The book cost more than the pen."]),
      ex(["Example", "Please shut the door. (the door of this room)"]),

      rule("Before a noun made particular by a phrase or clause after it.", "the + noun + of … / who … / which … / on …"),
      ex(["Example", "The water of this pond is not clean."]),
      ex(["Example", "The man who came yesterday is my uncle."]),
      ex(["Example", "The book on the table is mine."]),
      ex(["Example", "The history of our country is glorious."]),

      rule("Before things that are one of a kind.", "the + sun · moon · earth · sky · world · universe"),
      ex(["Example", "The sun rises in the east."]),
      ex(["Example", "The earth moves round the sun."]),
      ex(["Example", "The sky is blue today."]),

      rule("Before the superlative degree, ordinal numbers, and 'only', 'same', 'very', 'last' and 'next' used to pick out one.", "the + superlative · the first / second … · the only · the same · the very"),
      ex(["Example", "Rahim is the best student in the class."]),
      ex(["Example", "Neil Armstrong was the first man to walk on the moon."]),
      ex(["Example", "He is the only son of his parents."]),
      ex(["Example", "We read in the same class."]),
      ex(["Example", "This is the very book I was looking for."]),

      rule("Before the comparative in 'of the two', and in the pattern 'the more … the more'.", "the + comparative + of the two · the + comparative …, the + comparative …"),
      ex(["Example", "Karim is the taller of the two brothers."]),
      ex(["Example", "The more you read, the more you learn."]),
      ex(["Example", "The sooner, the better."]),

      rule("Before a singular noun that stands for the whole class.", "the + singular noun = the whole class"),
      ex(["Example", "The cow is a useful animal."]),
      ex(["Example", "The rose is the sweetest of all flowers."]),
      ex(["Example", "The computer has changed our life."]),

      rule("Before an adjective used as a plural noun for a class of people. The verb is plural.", "the + adjective = all such people"),
      ex(["Example", "The rich should help the poor."]),
      ex(["Example", "The old need our care."]),
      ex(["Example", "Fortune favours the brave."]),

      rule("Before the names of rivers, seas, oceans, gulfs, canals, deserts, mountain ranges and groups of islands.", "the + river · sea · ocean · bay · canal · desert · range · group of islands"),
      ex(["Example", "The Padma, the Meghna and the Jamuna are big rivers."]),
      ex(["Example", "The Bay of Bengal lies to the south of Bangladesh."]),
      ex(["Example", "The Pacific · the Suez Canal · the Sahara · the Himalayas · the Maldives"]),

      rule("Before names of countries that are plural or contain 'Republic', 'Kingdom', 'States' or 'Union'.", "the + USA · UK · UAE · Netherlands · Philippines · People's Republic of …"),
      ex(["Example", "He has gone to the USA for higher studies."]),
      ex(["Example", "The United Kingdom consists of four countries."]),

      rule("Before names of holy books, newspapers, famous buildings and monuments, ships and trains.", "the + holy book · newspaper · famous building · ship · train"),
      ex(["Holy books", "the Quran · the Bible · the Gita · the Tripitaka"]),
      ex(["Newspapers", "the Daily Star · the Daily Ittefaq"]),
      ex(["Buildings", "the Shaheed Minar · the Taj Mahal · the National Memorial · the Padma Bridge"]),
      ex(["Ships, trains", "the Titanic · the Subarna Express"]),

      rule("Before names of historical events, periods and movements.", "the + event / period"),
      ex(["Example", "The Language Movement took place in 1952."]),
      ex(["Example", "The Liberation War lasted for nine months."]),

      rule("Before directions, before musical instruments, and before a family name in the plural meaning the whole family.", "in the east · play the flute · the Khans"),
      ex(["Example", "The sun sets in the west."]),
      ex(["Example", "She can play the harmonium."]),
      ex(["Example", "The Chowdhurys live next door."]),

      rule("Before a post or title held by one person at a time.", "the + unique post"),
      ex(["Example", "The Prime Minister addressed the nation."]),
      ex(["Example", "The Headmaster called me to his room."]),

      rule("Before parts of the body after a preposition, in phrases about touching or hitting.", "verb + object + by / on / in + the + body part"),
      ex(["Example", "He caught me by the hand."]),
      ex(["Example", "The ball hit him on the head."]),

      rule("Before units of measure after 'by'.", "by the + unit"),
      ex(["Example", "Eggs are sold by the dozen."]),
      ex(["Example", "Workers are paid by the hour."]),

      rule("In dates said with 'of', and before decades.", "the + ordinal + of + month · the + decade"),
      ex(["Example", "Our Victory Day is the 16th of December."]),
      ex(["Example", "Mobile phones became common in the 2000s."]),
    ],
  },

  /* ───────────────────────── No article ───────────────────────── */
  {
    id: "articles-omission",
    title: "No Article (×)",
    body: [
      para("Knowing where an article is not used matters as much as knowing where it is. In a board passage these are the gaps where you write a cross (×)."),

      rule("Before the names of persons, continents, countries, cities, villages, single mountains, days and months.", "× + proper noun"),
      ex(["Example", "Rahim lives in Dhaka."]),
      ex(["Example", "Bangladesh is a country in Asia."]),
      ex(["Example", "Mount Everest is the highest peak in the world."]),
      ex(["Example", "Our school remains closed on Friday."]),
      ex(["Example", "We celebrate Independence Day in March."]),
      note("The exceptions — rivers, seas, deserts, ranges, plural country names, holy books, newspapers — are in 'Uses of The'."),

      rule("Before a plural countable noun used in a general sense.", "× + plural noun (general)"),
      ex(["Example", "Books are our best friends."]),
      ex(["Example", "Trees give us oxygen."]),
      ex(["Example", "Dogs are faithful animals."]),

      rule("Before a material noun used in a general sense.", "× + material noun (general)"),
      ex(["Example", "Gold is a precious metal."]),
      ex(["Example", "Milk is good for health."]),
      ex(["Example", "Rice is our staple food."]),

      rule("Before an abstract noun used in a general sense.", "× + abstract noun (general)"),
      ex(["Example", "Honesty is the best policy."]),
      ex(["Example", "Health is wealth."]),
      ex(["Example", "Knowledge is power."]),
      note("When the noun is made particular, 'the' comes back: The gold of this ring is pure. The milk in the jug has gone sour. The honesty of the man pleased everybody."),

      rule("Before 'man' and 'mankind' meaning the human race.", "× + man = all human beings"),
      ex(["Example", "Man is mortal."]),
      ex(["Example", "Man is the best creation of Allah."]),

      rule("Before names of languages and school subjects.", "× + language / subject"),
      ex(["Example", "We speak Bangla."]),
      ex(["Example", "He is good at English and mathematics."]),
      note("But 'the English' means the English people, and 'the English language' takes 'the' because of 'language'."),

      rule("Before names of games and sports.", "play + × + game"),
      ex(["Example", "The boys are playing football."]),
      ex(["Example", "Cricket is a popular game in Bangladesh."]),

      rule("Before names of meals used in a general sense.", "× + breakfast / lunch / dinner"),
      ex(["Example", "We have breakfast at seven."]),
      ex(["Example", "What did you have for lunch?"]),
      note("With an adjective, or when one particular meal is meant, the article returns: He gave a grand dinner. The dinner she cooked was delicious."),

      rule("Before school, college, hospital, mosque, church, prison, bed and similar places when they are used for their main purpose.", "go to school (to study) · go to the school (for another purpose)"),
      ex(["Main purpose", "I go to school every day. (as a student)"], ["Other purpose", "My father went to the school to meet the Headmaster."]),
      ex(["Main purpose", "He was taken to hospital. (as a patient)"], ["Other purpose", "I went to the hospital to see my uncle."]),
      ex(["Main purpose", "Christians go to church on Sunday."], ["Other purpose", "The tourists went to the church to see its old paintings."]),
      ex(["Example", "I go to bed at ten o'clock."]),

      rule("Before means of transport after 'by'.", "by + × + bus / train / car / boat / air"),
      ex(["Example", "We went to Cox's Bazar by bus."]),
      ex(["Example", "He travels by air."]),
      ex(["Example", "I came here on foot."]),

      rule("Before names of diseases.", "× + disease"),
      ex(["Example", "He died of cholera."]),
      ex(["Example", "Malaria is spread by mosquitoes."]),
      ex(["Example", "Diabetes is a common disease nowadays."]),
      note("A few common complaints take 'a' in fixed phrases: have a cold, have a headache, have a fever."),

      rule("Before a noun that already has a possessive or demonstrative word, or 'each', 'every', 'some', 'any', 'no'.", "× + noun after my / this / each / every / some / any / no"),
      ex(["Example", "This is my book."]),
      ex(["Example", "Every student must attend."]),
      ex(["Example", "Give me some water."]),

      rule("After 'kind of', 'sort of' and 'type of'.", "kind of + × + noun"),
      ex(["Example", "What kind of man is he?"]),
      ex(["Example", "This sort of pen writes well."]),

      rule("Before 'next' and 'last' when the time is counted from now.", "× + next / last + time word"),
      ex(["Example", "I shall go to Chattogram next week."]),
      ex(["Example", "He came here last year."]),
      note("In a story about the past, where the time is counted from a past point, 'the' is used: He fell ill on Monday and died the next day."),

      rule("Before a title followed by a name, and in a number of fixed phrases.", "× + title + name · × in set phrases"),
      ex(["Titles", "President Kennedy · Doctor Rahman · Professor Ali · Queen Elizabeth"]),
      ex(["Phrases", "at home · at night · at noon · at dawn · by chance · by mistake · in time · on time · in fact · at first · in bed · on foot"]),
      ex(["Phrases", "take place · take part · set sail · lose heart · catch fire · give way · make room"]),
    ],
  },

  /* ─────────────────────── Tricky cases ─────────────────────── */
  {
    id: "articles-tricky",
    title: "Tricky Cases",
    body: [
      para("These are the pairs where one article — or leaving it out — changes the meaning of the sentence. The board likes them because a student who fills gaps by habit gets them wrong."),

      h("A few · few · the few"),
      ex(["a few", "He has a few friends. (some — a positive idea)"], ["few", "He has few friends. (hardly any — a negative idea)"], ["the few", "The few friends he has are all honest. (all of the small number there are)"]),
      h("A little · little · the little"),
      ex(["a little", "There is a little hope. (some hope)"], ["little", "There is little hope. (hardly any hope)"], ["the little", "He spent the little money he had. (all of the small amount)"]),

      h("A number of · the number of"),
      ex(["a number of", "A number of students were absent. (many — plural verb)"], ["the number of", "The number of students is increasing. (the figure — singular verb)"]),

      h("Most · the most · a most"),
      ex(["most", "Most people like sweets. (the majority)"], ["the most", "She is the most intelligent girl in the class. (superlative)"], ["a most", "It was a most interesting story. (very)"]),

      h("One article or two"),
      rule("When two nouns or adjectives mean one person or thing, the article comes only before the first. When they mean two, it comes before each.", "the A and B = one · the A and the B = two"),
      ex(["One person", "The Secretary and Treasurer was present. (one man holds both posts)"], ["Two people", "The Secretary and the Treasurer were present."]),
      ex(["One cow", "I have a black and white cow."], ["Two cows", "I have a black and a white cow."]),
      ex(["One person", "He is a poet and painter."], ["Two people", "I met a poet and a painter."]),

      h("The same noun, with and without an article"),
      ex(["×", "Man is mortal. (all human beings)"], ["the", "The man is my teacher. (one particular man)"]),
      ex(["×", "Nature is beautiful. (the natural world)"], ["the", "The nature of this problem is not clear. (its kind)"]),
      ex(["×", "He is in prison. (as a prisoner)"], ["the", "He went to the prison to see his friend."]),
      ex(["×", "English is an international language."], ["the", "The English are a practical people. (the people of England)"]),
      ex(["×", "Sugar is sweet."], ["the", "Pass me the sugar, please."]),

      h("Two articles, two meanings"),
      ex(["a", "He is a Headmaster. (one of many headmasters)"], ["the", "He is the Headmaster of our school. (the only one)"]),
      ex(["a", "Give me a book. (any book)"], ["the", "Give me the book. (the one we both know)"]),

      h("Sound traps"),
      ex(["a", "a university · a European · a useful book · a one-way road · a unique chance"]),
      ex(["an", "an hour · an honest man · an heir · an MA · an SSC examinee · an M.Sc. · an X-ray"]),
      ex(["Changes with the adjective", "an egg → a fresh egg · a boy → an intelligent boy · an hour → a whole hour"]),

      h("Word order with the article"),
      ex(["half", "half an hour · half a kilo (not 'a half hour' in the exam)"], ["many", "many a time · many a man"], ["such / what", "such a man · what a pity"], ["so / too / as", "so great a man · too hard a question · as good a boy as"]),
      ex(["all / both", "all the students · both the brothers (the article comes after 'all' and 'both')"]),
    ],
  },

  /* ─────────────────────── Common mistakes ─────────────────────── */
  {
    id: "articles-mistakes",
    title: "Common Mistakes",
    body: [
      para("Each wrong sentence below breaks one of the rules. Read the correction and say the rule to yourself before moving on."),
      fix("He is honest man.", "He is an honest man."),
      fix("She is a MA in English.", "She is an MA in English."),
      fix("He is an European.", "He is a European."),
      fix("I saw an one-eyed man.", "I saw a one-eyed man."),
      fix("She is doctor.", "She is a doctor."),
      fix("The honesty is the best policy.", "Honesty is the best policy."),
      fix("The man is mortal.", "Man is mortal."),
      fix("I go to the school every day.", "I go to school every day."),
      fix("He plays the football every afternoon.", "He plays football every afternoon."),
      fix("We went there by the bus.", "We went there by bus."),
      fix("The sun rises in east.", "The sun rises in the east."),
      fix("He is best boy in class.", "He is the best boy in the class."),
      fix("Padma is a big river.", "The Padma is a big river."),
      fix("The Mount Everest is highest peak in world.", "Mount Everest is the highest peak in the world."),
      fix("The Dhaka is a crowded city.", "Dhaka is a crowded city."),
      fix("Quran is our holy book.", "The Quran is our holy book."),
      fix("I bought a milk.", "I bought some milk."),
      fix("He gave me an advice.", "He gave me a piece of advice. / He gave me some advice."),
      fix("Many a students have failed.", "Many a student has failed."),
      fix("I waited for a half hour.", "I waited for half an hour."),
      fix("It is a too difficult task.", "It is too difficult a task."),
      fix("He died of the cholera.", "He died of cholera."),
      fix("What kind of a man is he?", "What kind of man is he?"),
      fix("Rich should help poor.", "The rich should help the poor."),
      note("'Advice', 'information', 'news', 'furniture', 'luggage' and 'milk' are uncountable in English, so they never take 'a' or 'an'. Use 'some', 'a piece of' or 'an item of'."),
    ],
  },

  /* ─────────────────────── Mixed practice ─────────────────────── */
  {
    id: "articles-mixed-practice",
    title: "Mixed Practice",
    body: [
      para("Sentences of the kind the board sets, each with the answer and the rule that gives it. Cover the answer, fill the gap yourself, then check."),
      q("He is ——— honest man.", "an", "The 'h' of 'honest' is silent, so the word starts with a vowel sound."),
      q("She is ——— university student.", "a", "'University' starts with a 'yu' sound, a consonant sound."),
      q("I waited for ——— hour.", "an", "The 'h' of 'hour' is silent."),
      q("He is ——— SSC candidate.", "an", "'S' is read 'es', which starts with a vowel sound."),
      q("I have ——— one-taka coin.", "a", "'One' starts with a 'wa' sound, a consonant sound."),
      q("He is ——— European.", "a", "'European' starts with a 'yu' sound."),
      q("It is ——— useful book.", "a", "'Useful' starts with a 'yu' sound."),
      q("There is ——— X-ray machine in the hospital.", "an", "'X' is read 'eks', which starts with a vowel sound."),
      q("I saw ——— old man in the street.", "an", "The article goes by the adjective 'old', which starts with a vowel sound."),
      q("——— Meghna is a big river.", "The", "Names of rivers take 'the'."),
      q("——— Dhaka is the capital of Bangladesh.", "×", "Names of cities take no article."),
      q("He is ——— best student in the class.", "the", "Superlative degree."),
      q("——— rich should help ——— poor.", "The, the", "Adjectives used as plural nouns for classes of people."),
      q("I go to ——— bed at ten.", "×", "'Bed' used for its main purpose, sleeping."),
      q("He went to ——— school to meet the Headmaster.", "the", "He went to the building for another purpose, not to study."),
      q("Milk is sold at eighty taka ——— litre.", "a", "'A' in the sense of 'per'."),
      q("What ——— beautiful flower it is!", "a", "Exclamation with 'what' before a singular countable noun."),
      q("He has ——— good knowledge of English.", "a", "An abstract noun made one kind of it by an adjective."),
      q("——— Quran is our holy book.", "The", "Names of holy books take 'the'."),
      q("——— Mount Everest is the highest peak in the world.", "×", "A single mountain takes no article."),
      q("He plays ——— football every afternoon.", "×", "Names of games take no article."),
      q("She can play ——— flute.", "the", "Musical instruments take 'the'."),
      q("We went there by ——— train.", "×", "Means of transport after 'by'."),
      q("——— more you read, ——— more you learn.", "The, the", "The pattern 'the + comparative …, the + comparative'."),
      q("Karim is ——— taller of the two brothers.", "the", "Comparative with 'of the two'."),
      q("——— gold is a precious metal.", "×", "A material noun in a general sense."),
      q("——— gold of this ring is pure.", "The", "The phrase 'of this ring' makes the material noun particular."),
      q("Honesty is ——— best policy.", "the", "Superlative degree."),
      q("He died of ——— cholera.", "×", "Names of diseases take no article."),
      q("——— Khans are our neighbours.", "The", "A family name in the plural means the whole family."),
      q("Kazi Nazrul Islam is called ——— Rebel Poet.", "the", "A title that belongs to one person only."),
      q("Many ——— man has lost his life in the sea.", "a", "The fixed pattern 'many a + singular noun'."),
      q("I have ——— few friends here, so I am not lonely.", "a", "'A few' means 'some' — the positive idea fits 'not lonely'."),
      q("He has ——— few friends, so he feels lonely.", "×", "'Few' alone means 'hardly any' — the negative idea fits 'lonely'."),
      q("——— sun rises in ——— east.", "The, the", "The sun is one of a kind; directions take 'the'."),
      q("Man is ——— social being.", "a", "A singular countable noun used for the first time, meaning one of a kind."),
      q("——— man who helped me is a doctor.", "The", "The clause 'who helped me' makes 'man' particular."),
      q("We meet twice ——— week.", "a", "'A' in the sense of 'per'."),
      q("He was born on ——— 26th of March.", "the", "A date said with 'of' takes 'the' before the ordinal."),
      q("He has gone to ——— USA.", "the", "A country name with 'States' takes 'the'."),
    ],
  },

  /* ─────────────────────── Solved passages ─────────────────────── */
  {
    id: "articles-passage-liberation-war",
    title: "Solved Passage: The Liberation War",
    prompt: PROMPT,
    body: [
      para("The year 1971 is (a) ——— unforgettable year in (b) ——— history of Bangladesh. On (c) ——— night of 25 March, (d) ——— Pakistani army attacked (e) ——— unarmed people of Dhaka. Then (f) ——— war of liberation began. Farmers, students and workers fought side by side against (g) ——— enemy and showed (h) ——— great courage. The war lasted for nine months. At last, on 16 December, Bangladesh appeared on (i) ——— map of (j) ——— world as an independent country."),
      h("Answers"),
      ex(["(a) an", "A singular countable noun meaning one of many years; 'unforgettable' starts with a vowel sound."]),
      ex(["(b) the", "'History' is made particular by 'of Bangladesh'."]),
      ex(["(c) the", "A particular night, fixed by 'of 25 March'."]),
      ex(["(d) the", "A particular army, the one both writer and reader know of."]),
      ex(["(e) the", "Particular people, made so by 'of Dhaka'."]),
      ex(["(f) the", "A particular war, made so by 'of liberation'."]),
      ex(["(g) the", "The enemy is already known from the passage."]),
      ex(["(h) ×", "'Courage' is an abstract noun used in a general sense."]),
      ex(["(i) the", "'Map' is made particular by 'of the world'."]),
      ex(["(j) the", "The world is one of a kind."]),
      h("The completed passage"),
      para("The year 1971 is an unforgettable year in the history of Bangladesh. On the night of 25 March, the Pakistani army attacked the unarmed people of Dhaka. Then the war of liberation began. Farmers, students and workers fought side by side against the enemy and showed great courage. The war lasted for nine months. At last, on 16 December, Bangladesh appeared on the map of the world as an independent country."),
    ],
  },
  {
    id: "articles-passage-honest-woodcutter",
    title: "Solved Passage: The Honest Woodcutter",
    prompt: PROMPT,
    body: [
      para("(a) ——— honesty is (b) ——— best policy. (c) ——— honest man is loved by all. He never tells (d) ——— lie. Once there lived (e) ——— poor woodcutter in (f) ——— small village. One day, while he was cutting wood on (g) ——— bank of (h) ——— Padma, his axe fell into (i) ——— water. He sat down and began to weep. Suddenly (j) ——— angel appeared before him."),
      h("Answers"),
      ex(["(a) ×", "'Honesty' is an abstract noun used in a general sense."]),
      ex(["(b) the", "Superlative degree."]),
      ex(["(c) An", "'A' / 'an' in the sense of 'any' for a whole class; the 'h' of 'honest' is silent."]),
      ex(["(d) a", "The fixed phrase 'tell a lie'."]),
      ex(["(e) a", "First mention of a singular countable noun."]),
      ex(["(f) a", "Any one small village, not a particular one."]),
      ex(["(g) the", "'Bank' is made particular by 'of the Padma'."]),
      ex(["(h) the", "Names of rivers take 'the'."]),
      ex(["(i) the", "The particular water of the river just named."]),
      ex(["(j) an", "First mention of a singular countable noun; 'angel' starts with a vowel sound."]),
      h("The completed passage"),
      para("Honesty is the best policy. An honest man is loved by all. He never tells a lie. Once there lived a poor woodcutter in a small village. One day, while he was cutting wood on the bank of the Padma, his axe fell into the water. He sat down and began to weep. Suddenly an angel appeared before him."),
    ],
  },
  {
    id: "articles-passage-morning-walk",
    title: "Solved Passage: Morning Walk",
    prompt: PROMPT,
    body: [
      para("They say (a) ——— health is (b) ——— wealth. So I get up early in (c) ——— morning and go out for (d) ——— walk. (e) ——— sun rises in (f) ——— east and (g) ——— cool breeze blows over the fields. I walk for (h) ——— hour and return home at (i) ——— seven o'clock. (j) ——— fresh air of the morning keeps me fit all day."),
      h("Answers"),
      ex(["(a) ×", "'Health' is an abstract noun used in a general sense."]),
      ex(["(b) ×", "'Wealth' is an abstract noun used in a general sense."]),
      ex(["(c) the", "The fixed phrase 'in the morning'."]),
      ex(["(d) a", "The fixed phrase 'go out for a walk'."]),
      ex(["(e) The", "The sun is one of a kind."]),
      ex(["(f) the", "Directions take 'the'."]),
      ex(["(g) a", "First mention of a singular countable noun; 'cool' starts with a consonant sound."]),
      ex(["(h) an", "'A' / 'an' in the sense of 'one'; the 'h' of 'hour' is silent."]),
      ex(["(i) ×", "Clock times take no article."]),
      ex(["(j) The", "'Fresh air' is made particular by 'of the morning'."]),
      h("The completed passage"),
      para("They say health is wealth. So I get up early in the morning and go out for a walk. The sun rises in the east and a cool breeze blows over the fields. I walk for an hour and return home at seven o'clock. The fresh air of the morning keeps me fit all day."),
    ],
  },
  {
    id: "articles-passage-language-movement",
    title: "Solved Passage: The Language Movement",
    prompt: PROMPT,
    body: [
      para("(a) ——— 21st of February is (b) ——— memorable day in our national life. In 1952 (c) ——— students of Dhaka University brought out (d) ——— procession to demand (e) ——— Bangla as a state language. (f) ——— police opened fire on them. Salam, Barkat, Rafiq, Jabbar and many others embraced (g) ——— martyrdom. In 1999 UNESCO declared (h) ——— day (i) ——— International Mother Language Day. Every year people go barefoot to (j) ——— Shaheed Minar to pay homage to the martyrs."),
      h("Answers"),
      ex(["(a) The", "A date said with 'of' takes 'the' before the ordinal."]),
      ex(["(b) a", "One of many days; 'memorable' starts with a consonant sound."]),
      ex(["(c) the", "Particular students, made so by 'of Dhaka University'."]),
      ex(["(d) a", "First mention of a singular countable noun."]),
      ex(["(e) ×", "Names of languages take no article."]),
      ex(["(f) The", "The police force of the country — a particular body both writer and reader know."]),
      ex(["(g) ×", "'Martyrdom' is an abstract noun used in a general sense."]),
      ex(["(h) the", "The day already spoken of, the 21st of February."]),
      ex(["(i) ×", "The name of a special day, like a proper noun, takes no article."]),
      ex(["(j) the", "Names of famous monuments take 'the'."]),
      h("The completed passage"),
      para("The 21st of February is a memorable day in our national life. In 1952 the students of Dhaka University brought out a procession to demand Bangla as a state language. The police opened fire on them. Salam, Barkat, Rafiq, Jabbar and many others embraced martyrdom. In 1999 UNESCO declared the day International Mother Language Day. Every year people go barefoot to the Shaheed Minar to pay homage to the martyrs."),
    ],
  },
  {
    id: "articles-passage-tagore",
    title: "Solved Passage: Rabindranath Tagore",
    prompt: PROMPT,
    body: [
      para("Rabindranath Tagore was (a) ——— great poet. He was born in 1861 in (b) ——— famous Tagore family of Kolkata. He wrote (c) ——— number of poems, songs, stories and novels. In 1913 he won (d) ——— Nobel Prize in literature. He was (e) ——— first Asian to win it. His songs are still (f) ——— source of joy to us. He was also (g) ——— painter and (h) ——— educationist. He founded (i) ——— school at Shantiniketan. He died in 1941 at (j) ——— age of eighty."),
      h("Answers"),
      ex(["(a) a", "A singular countable noun describing him as one of many great poets."]),
      ex(["(b) the", "A particular family, named 'Tagore' and fixed by 'of Kolkata'."]),
      ex(["(c) a", "The fixed phrase 'a number of' meaning 'many'."]),
      ex(["(d) the", "A particular, well-known prize."]),
      ex(["(e) the", "Ordinal number."]),
      ex(["(f) a", "One of many sources; 'source' starts with a consonant sound."]),
      ex(["(g) a", "A singular noun of profession."]),
      ex(["(h) an", "A singular noun of profession; 'educationist' starts with a vowel sound."]),
      ex(["(i) a", "First mention of a singular countable noun."]),
      ex(["(j) the", "'Age' is made particular by 'of eighty'."]),
      h("The completed passage"),
      para("Rabindranath Tagore was a great poet. He was born in 1861 in the famous Tagore family of Kolkata. He wrote a number of poems, songs, stories and novels. In 1913 he won the Nobel Prize in literature. He was the first Asian to win it. His songs are still a source of joy to us. He was also a painter and an educationist. He founded a school at Shantiniketan. He died in 1941 at the age of eighty."),
    ],
  },
  {
    id: "articles-passage-mobile-phone",
    title: "Solved Passage: The Mobile Phone",
    prompt: PROMPT,
    body: [
      para("We live in (a) ——— age of science. Science has given us many wonderful things, and (b) ——— mobile phone is (c) ——— most useful of them all. With it we can talk to (d) ——— person living at (e) ——— other end of (f) ——— world. We can send (g) ——— SMS and use (h) ——— internet. But students should not waste (i) ——— time on it. They should use it in (j) ——— proper way."),
      h("Answers"),
      ex(["(a) the", "A particular age, made so by 'of science'."]),
      ex(["(b) the", "A singular noun standing for the whole class of mobile phones."]),
      ex(["(c) the", "Superlative degree."]),
      ex(["(d) a", "Any one person, not a particular one."]),
      ex(["(e) the", "'Other end' is made particular by 'of the world'."]),
      ex(["(f) the", "The world is one of a kind."]),
      ex(["(g) an", "'S' is read 'es', which starts with a vowel sound."]),
      ex(["(h) the", "There is only one internet."]),
      ex(["(i) ×", "'Time' used in a general sense takes no article."]),
      ex(["(j) a", "The phrase 'in a … way'."]),
      h("The completed passage"),
      para("We live in the age of science. Science has given us many wonderful things, and the mobile phone is the most useful of them all. With it we can talk to a person living at the other end of the world. We can send an SMS and use the internet. But students should not waste time on it. They should use it in a proper way."),
    ],
  },
  {
    id: "articles-passage-padma-bridge",
    title: "Solved Passage: The Padma Bridge",
    prompt: PROMPT,
    body: [
      para("(a) ——— Padma Bridge is (b) ——— multipurpose road-rail bridge over (c) ——— Padma. It is (d) ——— longest bridge in Bangladesh. It was opened on (e) ——— 25th of June, 2022. It has connected (f) ——— south-western part of (g) ——— country with (h) ——— capital. (i) ——— large number of vehicles cross it every day. It is (j) ——— symbol of our pride."),
      h("Answers"),
      ex(["(a) The", "Names of famous structures take 'the'."]),
      ex(["(b) a", "One of many bridges; 'multipurpose' starts with a consonant sound."]),
      ex(["(c) the", "Names of rivers take 'the'."]),
      ex(["(d) the", "Superlative degree."]),
      ex(["(e) the", "A date said with 'of' takes 'the' before the ordinal."]),
      ex(["(f) the", "'South-western part' is made particular by 'of the country'."]),
      ex(["(g) the", "The country both writer and reader know — Bangladesh."]),
      ex(["(h) the", "The capital is one particular city, Dhaka."]),
      ex(["(i) A", "The phrase 'a large number of' meaning 'many'."]),
      ex(["(j) a", "One symbol among others; 'symbol' starts with a consonant sound."]),
      h("The completed passage"),
      para("The Padma Bridge is a multipurpose road-rail bridge over the Padma. It is the longest bridge in Bangladesh. It was opened on the 25th of June, 2022. It has connected the south-western part of the country with the capital. A large number of vehicles cross it every day. It is a symbol of our pride."),
    ],
  },
  {
    id: "articles-passage-rainy-day",
    title: "Solved Passage: A Rainy Day",
    prompt: PROMPT,
    body: [
      para("It was (a) ——— rainy day. (b) ——— sky had been cloudy since morning. It rained all day long, so I could not go to (c) ——— school. I sat by (d) ——— window of my room and watched (e) ——— rain. (f) ——— roads of our area were under water. Only (g) ——— few people went out. In (h) ——— afternoon my mother cooked (i) ——— khichuri for us. It was (j) ——— enjoyable day after all."),
      h("Answers"),
      ex(["(a) a", "One of many rainy days; 'rainy' starts with a consonant sound."]),
      ex(["(b) The", "The sky is one of a kind."]),
      ex(["(c) ×", "'School' used for its main purpose, studying."]),
      ex(["(d) the", "'Window' is made particular by 'of my room'."]),
      ex(["(e) the", "The particular rain falling that day."]),
      ex(["(f) The", "'Roads' is made particular by 'of our area'."]),
      ex(["(g) a", "'Only a few' means a small number; 'a few' is the fixed phrase."]),
      ex(["(h) the", "The fixed phrase 'in the afternoon'."]),
      ex(["(i) ×", "'Khichuri' is a material (food) noun used in a general sense."]),
      ex(["(j) an", "One of many days; 'enjoyable' starts with a vowel sound."]),
      h("The completed passage"),
      para("It was a rainy day. The sky had been cloudy since morning. It rained all day long, so I could not go to school. I sat by the window of my room and watched the rain. The roads of our area were under water. Only a few people went out. In the afternoon my mother cooked khichuri for us. It was an enjoyable day after all."),
    ],
  },
];
