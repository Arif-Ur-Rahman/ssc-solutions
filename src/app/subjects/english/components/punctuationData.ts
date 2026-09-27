// components/punctuationData.ts
//
// Punctuation and Capitalization, one piece per mark or family of marks the
// board tests: capital letters, the end marks, the comma, the apostrophe,
// inverted commas in direct speech, and the less common marks. Each piece
// gives the rules in order and works each rule through examples, the text as
// the question sets it (no capitals, no marks) on one line and the corrected
// text on the next. A piece of common mistakes collects the traps, and
// board-style passages are solved in full with the reason for every change.

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
// The usual pair: the text as set, then the text corrected.
const q = (given: string, answer: string): Block =>
  ex(["Given", given], ["Answer", answer]);
// A common slip set against the correct sentence.
const wr = (wrong: string, right: string): Block =>
  ex(["Wrong", wrong], ["Right", right]);
const para = (text: string): Block => ({ type: "para", text });

const PROMPT =
  "Use capital letters and punctuation marks where necessary in the following text.";

export const punctuation: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "punctuation-introduction",
    title: "Introduction",
    body: [
      para("Punctuation means using marks such as the full stop, the comma and the question mark to divide writing into sentences and parts of sentences, so that the reader knows where to pause and what kind of sentence it is. Capitalization means using capital letters where the rules of English require them. In the exam the board gives a short passage, often a story or a conversation, written entirely in small letters and without any marks. You have to rewrite it with the capitals and marks put back."),
      para("The question usually carries 5 marks in English Second Paper, and each correct change earns part of a mark. So every missing capital and every missing mark costs you. Do not change, add or drop any word: only capitals and punctuation marks may change."),

      h("The marks at a glance"),
      ex(["Full stop ( . )", "Ends a statement or a command: He is a good boy."]),
      ex(["Question mark ( ? )", "Ends a direct question: Where do you live?"]),
      ex(["Exclamation ( ! )", "Ends an exclamation or a strong wish: What a lovely day it is!"]),
      ex(["Comma ( , )", "Marks a short pause: Rahim, come here."]),
      ex(["Apostrophe ( ' )", "Shows possession or a missing letter: Rina's pen, don't"]),
      ex(["Inverted commas ( “ ” )", "Enclose the exact words of a speaker: He said, “I am ill.”"]),
      ex(["Semicolon ( ; )", "Joins two closely linked sentences: Man proposes; God disposes."]),
      ex(["Colon ( : )", "Introduces a list or an explanation: He bought three things: a pen, a book and a bag."]),
      ex(["Hyphen ( - )", "Joins the parts of a compound word: mother-in-law, well-known"]),
      ex(["Dash ( — )", "Marks a sudden break or a summing up: He lost everything — money, house and friends."]),
      ex(["Brackets ( ( ) )", "Enclose extra information: Kazi Nazrul Islam (1899–1976) was our national poet."]),

      h("How to solve the question"),
      rule("Read the whole passage once without writing anything. Find out what it is about, who the speakers are and where each sentence ends."),
      rule("Mark the end of every sentence. Decide its kind and give it the right end mark: a full stop, a question mark or an exclamation mark."),
      rule("Give a capital letter to the first word of every sentence, to the pronoun 'I' and to every proper noun: persons, places, days, months, festivals, languages and institutions."),
      rule("Find the direct speech. Look for 'said', 'asked', 'replied', 'cried' or 'shouted'. Put the spoken words in inverted commas, add the comma between the speech and the reporting verb, and start the spoken words with a capital."),
      rule("Put in the commas: after a name used to address someone, after 'yes' and 'no', between the items of a list, round a phrase that explains a noun, and before a tag question."),
      rule("Put in the apostrophes: in short forms such as don't, can't, I'm and it's, and in possessives such as father's and girls'."),
      rule("Read the passage again from the start and check each sentence. Make sure you have not changed any word."),
      note("Write the corrected passage out in full. Do not just list the changes."),
    ],
  },

  /* ─────────────────────────── Capital Letters ─────────────────────────── */
  {
    id: "punctuation-capital-letters",
    title: "Capital Letters",
    body: [
      para("Capital letters are easy marks to lose. The rules are fixed, and most of the capitals in any board passage come from the first five."),

      rule("Begin every sentence with a capital letter, including the first word after a full stop, a question mark or an exclamation mark that ends a sentence.", "new sentence → Capital"),
      q("honesty is the best policy. we should always speak the truth.", "Honesty is the best policy. We should always speak the truth."),
      q("where are you going? come back soon.", "Where are you going? Come back soon."),
      q("what a fine day it is! let us go out.", "What a fine day it is! Let us go out."),

      rule("Write the pronoun 'I' and the interjection 'O' as capitals wherever they come in a sentence.", "i → I · o → O"),
      q("my brother and i went to the fair, and i bought a toy.", "My brother and I went to the fair, and I bought a toy."),
      q("o allah, have mercy on us.", "O Allah, have mercy on us."),
      note("Only the single letter 'I' is always a capital. 'My', 'me' and 'mine' are not, unless they begin a sentence."),

      rule("Give a capital to every proper noun: the names of persons, places, countries, cities, rivers, mountains and seas.", "name of a particular person, place or thing → Capital"),
      q("rahim lives in sylhet.", "Rahim lives in Sylhet."),
      q("the padma and the jamuna are big rivers of bangladesh.", "The Padma and the Jamuna are big rivers of Bangladesh."),
      q("mount everest is in nepal.", "Mount Everest is in Nepal."),
      q("cox's bazar has the longest sea beach in the world.", "Cox's Bazar has the longest sea beach in the world."),
      note("A common noun such as river, city or school gets a capital only when it is part of the name: 'the river Padma' but 'the Padma River'; 'a big school' but 'Faridpur Zilla School'."),

      rule("Give a capital to the names of days, months, festivals and special days. Seasons are not capitals.", "Friday, June, Eid, Victory Day · but: summer, winter, spring"),
      q("we will meet on friday, the fifth of june.", "We will meet on Friday, the fifth of June."),
      q("eid-ul-fitr and durga puja are our main festivals.", "Eid-ul-Fitr and Durga Puja are our main festivals."),
      q("we celebrate victory day on 16 december.", "We celebrate Victory Day on 16 December."),
      q("winter comes after autumn in bangladesh.", "Winter comes after autumn in Bangladesh."),
      note("'Winter' has a capital in the last example only because it begins the sentence. In the middle of a sentence the seasons stay small: 'In winter we eat pitha.'"),

      rule("Give a capital to the names of languages, nationalities and religions, and to the adjectives formed from them.", "Bangla, English, Bangladeshi, Islam, Muslim, Hindu, Christian, Buddhist"),
      q("bangla is our mother tongue, but we also learn english.", "Bangla is our mother tongue, but we also learn English."),
      q("the japanese are a hard-working nation.", "The Japanese are a hard-working nation."),
      q("muslims, hindus, buddhists and christians live here in peace.", "Muslims, Hindus, Buddhists and Christians live here in peace."),

      rule("Give a capital to 'God' and 'Allah', to the names of holy books, and, by custom, to the pronouns that refer to God.", "God, Allah, the Holy Quran, the Bible · He, His, Him (for God)"),
      q("allah is merciful. he loves those who are kind.", "Allah is merciful. He loves those who are kind."),
      q("muslims read the holy quran every day.", "Muslims read the Holy Quran every day."),

      rule("Give a capital to the names of institutions, organisations, offices, buildings and government bodies, and write their short forms in capitals.", "Dhaka University, the United Nations, UNO, SSC, BBC"),
      q("my brother studies at dhaka university.", "My brother studies at Dhaka University."),
      q("bangladesh is a member of the united nations.", "Bangladesh is a member of the United Nations."),
      q("she passed the ssc examination with gpa 5.", "She passed the SSC examination with GPA 5."),

      rule("Give a capital to a title or rank used before a name, and to a title that stands for one particular person.", "Mr., Mrs., Dr., Professor, President, Prime Minister, Headmaster"),
      q("dr. kamal and professor rahman came to the meeting.", "Dr. Kamal and Professor Rahman came to the meeting."),
      q("the prime minister spoke to the nation.", "The Prime Minister spoke to the nation."),
      q("our headmaster mr. alam is very strict.", "Our headmaster, Mr. Alam, is very strict."),
      note("'Mr.' and 'Mr' (with or without the full stop) are both accepted; just be consistent. A word such as 'teacher' or 'doctor' used in general keeps a small letter: 'He is a doctor.'"),

      rule("Give a capital to historical events, periods and documents.", "the Language Movement, the Liberation War, the Mughal period"),
      q("the liberation war of 1971 gave us an independent country.", "The Liberation War of 1971 gave us an independent country."),
      q("the language movement took place in 1952.", "The Language Movement took place in 1952."),

      rule("In the title of a book, poem, film or newspaper, give a capital to the first word and to every important word. Small words (a, an, the, of, in, and) stay small unless they come first.", "The Daily Star, Gitanjali, The Old Man and the Sea"),
      q("i read the daily star every morning.", "I read The Daily Star every morning."),
      q("the old man and the sea is a famous novel.", "The Old Man and the Sea is a famous novel."),

      rule("Begin the spoken words of direct speech with a capital, even in the middle of a sentence.", "He said, “The …”"),
      q("he said, “i am very tired.”", "He said, “I am very tired.”"),
      q("the teacher said, “do not make a noise.”", "The teacher said, “Do not make a noise.”"),
      note("When a sentence of speech is broken by the reporting clause, the second part does not get a new capital, because it is the same sentence: “If you work hard,” said the teacher, “you will pass.”"),

      rule("Give a capital to a word of family relation only when it is used as a name, that is, when you speak to the person or use the word in place of the name.", "Mother, come here. · but: My mother is a teacher."),
      q("mother, may i go out to play?", "Mother, may I go out to play?"),
      q("my father is a farmer.", "My father is a farmer."),
      q("i told uncle rashed about my result.", "I told Uncle Rashed about my result."),

      rule("In poetry, the first word of every line traditionally begins with a capital.", "each line of a poem → Capital"),
      ex(["Answer", "Twinkle, twinkle, little star, / How I wonder what you are!"]),

      h("Words that are not capitals"),
      note("Seasons (summer, rainy season), directions used as directions (go north, the east wind), subjects of study that are not languages (mathematics, physics), and common nouns used in general (a river, the city, our school) take small letters. Write 'Bangla' and 'English' with capitals, but 'science' and 'history' without."),
    ],
  },

  /* ───────────────────── Full Stop, ? and ! ───────────────────── */
  {
    id: "punctuation-end-marks",
    title: "Full Stop, Question Mark & Exclamation Mark",
    body: [
      para("Every sentence ends with one of three marks. Which one depends on the kind of sentence, so decide the kind first: a statement or a command, a question, or a strong feeling."),

      h("The full stop ( . )"),
      rule("Put a full stop at the end of an assertive sentence (a statement), whether affirmative or negative.", "assertive sentence → ."),
      q("the sun rises in the east", "The sun rises in the east."),
      q("he did not come to school yesterday", "He did not come to school yesterday."),

      rule("Put a full stop at the end of an imperative sentence (an order, a request or advice).", "imperative sentence → ."),
      q("shut the door", "Shut the door."),
      q("please give me a glass of water", "Please give me a glass of water."),
      q("let us go home", "Let us go home."),
      note("An imperative spoken with great force can take an exclamation mark: 'Get out!' 'Stop!' In the exam a full stop is the safe choice unless the passage shows anger or alarm."),

      rule("Put a full stop after an indirect question. It reports a question but is itself a statement.", "He asked me where I lived. (not ?)"),
      q("he asked me where i lived", "He asked me where I lived."),
      q("i wonder why she is so sad", "I wonder why she is so sad."),

      rule("Put a full stop after a short form made by cutting off the end of a word.", "Dr., Mr., Mrs., etc., a.m., p.m."),
      q("mr rahman left at 10 am", "Mr. Rahman left at 10 a.m."),
      note("Short forms made from the capital letters of words (UNO, SSC, BBC, USA) are usually written without full stops."),

      h("The question mark ( ? )"),
      rule("Put a question mark at the end of every direct question: those beginning with an auxiliary verb and those beginning with a wh-word.", "direct question → ?"),
      q("do you know him", "Do you know him?"),
      q("what is your name", "What is your name?"),
      q("who broke the glass", "Who broke the glass?"),
      q("have you finished your homework", "Have you finished your homework?"),

      rule("Put a question mark at the end of a sentence with a tag question, and a comma before the tag.", "statement + , + tag + ?"),
      q("you are a student aren't you", "You are a student, aren't you?"),
      q("he did not come did he", "He did not come, did he?"),
      q("let us go shall we", "Let us go, shall we?"),

      rule("In direct speech, the question mark belongs to the spoken words and goes inside the inverted commas. No comma follows it.", "“…?” asked he."),
      q("where are you going asked the old man", "“Where are you going?” asked the old man."),
      q("he said to me what are you doing", "He said to me, “What are you doing?”"),

      h("The exclamation mark ( ! )"),
      rule("Put an exclamation mark at the end of an exclamatory sentence beginning with 'What' or 'How'.", "What a … ! · How … !"),
      q("what a beautiful bird it is", "What a beautiful bird it is!"),
      q("how fast the horse runs", "How fast the horse runs!"),
      note("An exclamatory 'What' or 'How' sentence has the subject before the verb ('How fast the horse runs!'). A question has the verb first ('How fast does the horse run?'). Use this to decide between '!' and '?'."),

      rule("Put an exclamation mark after an interjection such as Alas, Hurrah, Bravo, Oh or Fie. A short interjection may instead be followed by a comma when the sentence carries on.", "Alas! · Hurrah! · Oh, …!"),
      q("alas he is dead", "Alas! He is dead."),
      q("hurrah we have won the match", "Hurrah! We have won the match."),
      q("oh what a pity", "Oh, what a pity!"),
      note("After 'Alas!' or 'Hurrah!' the next word begins a new sentence and takes a capital."),

      rule("Put an exclamation mark after an optative sentence (a wish or prayer) and after a wish beginning with 'Would that' or 'If only'.", "May … ! · Would that … !"),
      q("may allah bless you", "May Allah bless you!"),
      q("long live bangladesh", "Long live Bangladesh!"),
      q("would that i were a bird", "Would that I were a bird!"),

      h("Common mistakes"),
      wr("He asked me where did I live?", "He asked me where I lived."),
      wr("What a nice day it is.", "What a nice day it is!"),
      wr("You are coming, aren't you.", "You are coming, aren't you?"),
      wr("How are you!", "How are you?"),
      note("Use one end mark only. Do not write '??', '!!' or '?!' in the exam."),
    ],
  },

  /* ───────────────────────────── The Comma ───────────────────────────── */
  {
    id: "punctuation-comma",
    title: "The Comma",
    body: [
      para("The comma marks the shortest pause. It is the mark students miss most often, because it goes inside the sentence, not at the end. The rules below cover almost every comma a board passage needs."),

      rule("Separate three or more words or phrases in a list with commas. Before the final 'and' or 'or' no comma is needed.", "A, B, C and D"),
      q("i bought rice pulses oil and salt", "I bought rice, pulses, oil and salt."),
      q("he is honest sincere and hard-working", "He is honest, sincere and hard-working."),
      q("she got up washed her face and sat down to read", "She got up, washed her face and sat down to read."),
      note("A comma before the final 'and' (the 'Oxford comma') is not wrong, but most SSC answers leave it out. Pick one style and keep it."),

      rule("Use a comma to separate the name or title of a person spoken to (the vocative). Put it after the name at the start, before it at the end, and on both sides in the middle.", "Rahim, … · …, Rahim. · …, Rahim, …"),
      q("rahim come here", "Rahim, come here."),
      q("come here rahim", "Come here, Rahim."),
      q("i think rahim you are right", "I think, Rahim, you are right."),
      q("sir may i come in", "Sir, may I come in?"),
      q("yes madam i have done it", "Yes, madam, I have done it."),

      rule("Put a comma after 'yes', 'no', 'well', 'oh' and 'why' (as an exclamation) at the start of an answer or remark.", "Yes, … · No, … · Well, …"),
      q("yes i know him", "Yes, I know him."),
      q("no i did not see it", "No, I did not see it."),
      q("well what do you want", "Well, what do you want?"),

      rule("Put commas round a word or phrase that explains the noun just before it (apposition).", "noun, explaining phrase, …"),
      q("dhaka the capital of bangladesh is a crowded city", "Dhaka, the capital of Bangladesh, is a crowded city."),
      q("kazi nazrul islam our national poet was born in 1899", "Kazi Nazrul Islam, our national poet, was born in 1899."),
      q("we visited the sundarbans the largest mangrove forest in the world", "We visited the Sundarbans, the largest mangrove forest in the world."),

      rule("Put commas round words and phrases that interrupt the sentence: however, therefore, of course, in fact, I think, for example.", "…, however, … · Of course, …"),
      q("he is however not guilty", "He is, however, not guilty."),
      q("of course i will help you", "Of course, I will help you."),
      q("in fact she never came", "In fact, she never came."),

      rule("When a subordinate clause or a long phrase comes first, put a comma after it. When it comes after the main clause, no comma is needed.", "If …, main clause. · main clause if …"),
      q("if you work hard you will succeed", "If you work hard, you will succeed."),
      q("you will succeed if you work hard", "You will succeed if you work hard."),
      q("when the bell rang the students went out", "When the bell rang, the students went out."),
      q("though he is poor he is honest", "Though he is poor, he is honest."),

      rule("Put a comma after a participle phrase or an absolute phrase at the start of a sentence.", "V-ing / V3 phrase, main clause"),
      q("seeing the police the thief ran away", "Seeing the police, the thief ran away."),
      q("tired of work he went to bed", "Tired of work, he went to bed."),
      q("the sun having set we returned home", "The sun having set, we returned home."),

      rule("Put a comma before 'but', 'so', 'for', 'yet' or 'or' when it joins two full sentences. With very short clauses it may be left out.", "clause, but clause"),
      q("he is poor but he is honest", "He is poor, but he is honest."),
      q("it was raining so we stayed at home", "It was raining, so we stayed at home."),
      q("hurry up or you will miss the train", "Hurry up, or you will miss the train."),

      rule("Put commas round a relative clause that only adds extra information about a person or thing already known (a non-defining clause). Do not use commas when the clause tells you which one (a defining clause).", "My father, who is a doctor, … · The boy who came yesterday …"),
      q("my father who is a doctor lives in khulna", "My father, who is a doctor, lives in Khulna."),
      q("the boy who came yesterday is my cousin", "The boy who came yesterday is my cousin."),
      note("You have only one father, so 'who is a doctor' just adds information: commas. There are many boys, and 'who came yesterday' tells you which one: no commas. A clause beginning with 'that' never takes commas."),

      rule("In direct speech, put a comma between the reporting clause and the spoken words.", "He said, “…” · “…,” he said."),
      q("he said i am hungry", "He said, “I am hungry.”"),
      q("i am hungry he said", "“I am hungry,” he said."),

      rule("Use a comma before a tag question, and in dates and addresses between the parts.", "…, isn't it? · Mirpur, Dhaka · Friday, 5 June"),
      q("it is hot today isn't it", "It is hot today, isn't it?"),
      q("he lives at mirpur dhaka", "He lives at Mirpur, Dhaka."),
      q("the meeting is on sunday 12 march", "The meeting is on Sunday, 12 March."),

      rule("Put a comma after the salutation and after the closing of a letter.", "Dear Rafi, · Yours faithfully,"),
      ex(["Answer", "Dear Rafi,"], ["Answer", "Your loving friend,"]),

      h("Where not to put a comma"),
      wr("The boy who was playing in the field, broke the window.", "The boy who was playing in the field broke the window."),
      wr("He said, that he was ill.", "He said that he was ill."),
      wr("I know, where he lives.", "I know where he lives."),
      wr("It was late, we went home.", "It was late, so we went home. / It was late; we went home."),
      note("Never put a single comma between a subject and its verb, or between a verb and its object. And a comma alone cannot join two full sentences: add 'and', 'but' or 'so', or use a full stop or a semicolon."),
    ],
  },

  /* ─────────────────────────── The Apostrophe ─────────────────────────── */
  {
    id: "punctuation-apostrophe",
    title: "The Apostrophe",
    body: [
      para("The apostrophe ( ' ) has two jobs: it shows that something belongs to someone (possession), and it shows that letters have been left out (contraction). In the question the apostrophe is simply missing, so look for words such as 'dont', 'im', 'fathers' or 'its' and ask whether they need one."),

      h("Possession"),
      rule("To a singular noun, add apostrophe + s.", "noun + 's"),
      q("this is rinas pen", "This is Rina's pen."),
      q("my fathers name is mr haque", "My father's name is Mr. Haque."),
      q("the cats tail is long", "The cat's tail is long."),

      rule("To a plural noun that already ends in s, add the apostrophe alone after the s.", "plural noun in s + '"),
      q("the boys hostel is near the school", "The boys' hostel is near the school."),
      q("he went to the girls school", "He went to the girls' school."),
      q("the teachers room was locked", "The teachers' room was locked. (if there are many teachers)"),

      rule("To a plural noun that does not end in s, add apostrophe + s.", "men's, women's, children's, people's"),
      q("this is a childrens park", "This is a children's park."),
      q("it is a womens college", "It is a women's college."),
      q("the peoples demand was fair", "The people's demand was fair."),

      rule("A name that ends in s can take either apostrophe + s or the apostrophe alone.", "James's or James'"),
      q("this is abbass bag", "This is Abbas's bag. / This is Abbas' bag."),

      rule("When two people own one thing together, add the apostrophe to the last name only. When each owns a separate thing, add it to both.", "Rahim and Karim's shop · Rahim's and Karim's shops"),
      q("rahim and karims shop is closed", "Rahim and Karim's shop is closed."),

      rule("Use the possessive form with time and amount.", "a day's work, two weeks' holiday, a stone's throw"),
      q("we got a weeks holiday", "We got a week's holiday."),
      q("the school is at a stones throw from our house", "The school is at a stone's throw from our house."),

      h("Contraction"),
      rule("Put an apostrophe where letters have been left out in a short form.", "do not → don't · I am → I'm"),
      q("i dont know", "I don't know."),
      q("im sure hes right", "I'm sure he's right."),
      q("we cant go now", "We can't go now."),
      q("they wont come", "They won't come."),
      q("youre late again", "You're late again."),
      q("lets go", "Let's go."),
      q("it is six oclock", "It is six o'clock."),
      note("The commonest short forms: isn't, aren't, wasn't, weren't, don't, doesn't, didn't, haven't, hasn't, can't, couldn't, won't (will not), shan't, shouldn't, I'm, you're, he's, she's, it's, we're, they're, I've, I'll, I'd, let's, o'clock."),

      h("It's or its?"),
      rule("'It's' means 'it is' or 'it has'. 'Its' means 'belonging to it' and never takes an apostrophe.", "it's = it is · its = of it"),
      q("its raining", "It's raining."),
      q("the dog wagged its tail", "The dog wagged its tail."),
      q("its a cow its tail is long", "It's a cow. Its tail is long."),

      rule("The possessive pronouns never take an apostrophe.", "yours, hers, ours, theirs, its, whose"),
      wr("This book is your's.", "This book is yours."),
      wr("The fault is their's.", "The fault is theirs."),
      wr("Who's pen is this?", "Whose pen is this?"),

      h("Common mistakes"),
      wr("I bought some mango's.", "I bought some mangoes."),
      wr("He has two brother's.", "He has two brothers."),
      wr("The girls name is Mitu.", "The girl's name is Mitu."),
      note("An ordinary plural never takes an apostrophe. Add one only when the word shows possession or a missing letter."),
    ],
  },

  /* ──────────────────── Inverted Commas & Direct Speech ──────────────────── */
  {
    id: "punctuation-direct-speech",
    title: "Inverted Commas & Direct Speech",
    body: [
      para("Most board passages are conversations, and each piece of direct speech carries several marks at once: the inverted commas, the comma, the capital and the end mark. Get the pattern right and a large part of the question is done."),
      para("Direct speech has two parts: the reporting clause (He said, asked the teacher, replied Mina) and the reported speech (the speaker's exact words). Only the exact words go inside the inverted commas."),

      rule("Put the exact words of the speaker inside inverted commas. Put a comma after the reporting clause, and begin the spoken words with a capital.", "Subject + said, “Capital … .”"),
      q("he said i am tired", "He said, “I am tired.”"),
      q("the teacher said to us be attentive", "The teacher said to us, “Be attentive.”"),
      q("mina said to her mother i have passed", "Mina said to her mother, “I have passed.”"),

      rule("The end mark of the spoken words (. ? !) goes inside the closing inverted commas.", "…, “…?” · …, “…!”"),
      q("rana asked me where do you live", "Rana asked me, “Where do you live?”"),
      q("the boy cried out help help", "The boy cried out, “Help! Help!”"),
      q("he said what a beautiful place it is", "He said, “What a beautiful place it is!”"),

      rule("When the reporting clause comes after the speech, end a statement with a comma inside the inverted commas and a full stop after the reporting clause. The reporting clause begins with a small letter.", "“… ,” said he."),
      q("i am going to school said rafi", "“I am going to school,” said Rafi."),
      q("we will win the match said the captain", "“We will win the match,” said the captain."),

      rule("When the speech after which the reporting clause comes is a question or an exclamation, keep the ? or ! and do not add a comma. The reporting clause still begins with a small letter.", "“…?” asked he. · “…!” cried she."),
      q("what is your name asked the teacher", "“What is your name?” asked the teacher."),
      q("how lovely the garden is exclaimed mina", "“How lovely the garden is!” exclaimed Mina."),
      wr("“What is your name?,” asked the teacher.", "“What is your name?” asked the teacher."),
      wr("“What is your name?” Asked the teacher.", "“What is your name?” asked the teacher."),

      rule("When one sentence of speech is broken by the reporting clause, put commas on both sides of the reporting clause. The second part continues the same sentence, so it begins with a small letter.", "“…,” said he, “small letter …”"),
      q("if you work hard said the teacher you will pass", "“If you work hard,” said the teacher, “you will pass.”"),
      q("i think said rahim that we are late", "“I think,” said Rahim, “that we are late.”"),

      rule("When the first part of the speech is a full sentence, put a full stop after the reporting clause and begin the second part with a capital.", "“… ,” said he. “Capital …”"),
      q("i am tired said rana let us go home", "“I am tired,” said Rana. “Let us go home.”"),
      q("where is my book asked mitu i cannot find it", "“Where is my book?” asked Mitu. “I cannot find it.”"),

      rule("When a speaker says several sentences one after another, put the inverted commas only at the beginning and at the end of the whole speech, not round each sentence.", "“Sentence. Sentence. Sentence.”"),
      q("the old man said i am very poor i have no food please help me", "The old man said, “I am very poor. I have no food. Please help me.”"),

      rule("When the speaker changes, open new inverted commas for the new speaker. In a story or dialogue each new speaker's words usually start on a new line.", "new speaker → new “ ”"),
      q("how are you asked rina i am fine replied mina", "“How are you?” asked Rina. “I am fine,” replied Mina."),

      rule("A name or 'sir' spoken to is inside the inverted commas and is set off with commas, and so are 'yes' and 'no'.", "“Yes, sir, …” · “Rahim, …”"),
      q("the boy said yes sir i have done my homework", "The boy said, “Yes, sir, I have done my homework.”"),
      q("the mother said rahim come and eat", "The mother said, “Rahim, come and eat.”"),

      rule("Use single inverted commas for a quotation inside a quotation, and for the title of a book or poem, or a word you are talking about.", "“… ‘…’ …” · the word ‘honesty’"),
      q("the teacher said always remember the proverb haste makes waste", "The teacher said, “Always remember the proverb ‘Haste makes waste’.”"),
      q("have you read the poem the daffodils", "Have you read the poem ‘The Daffodils’?"),
      note("Either double “ ” or single ‘ ’ inverted commas are correct for speech, as long as you use them consistently and switch to the other kind for a quotation inside a quotation."),

      h("No inverted commas in indirect speech"),
      rule("Indirect (reported) speech gives the meaning, not the exact words, so it takes no inverted commas and no comma after 'said'.", "He said that … . · He asked if … ."),
      q("he said that he was ill", "He said that he was ill."),
      q("the teacher asked me why i was late", "The teacher asked me why I was late."),
      note("'That', 'if', 'whether' or a wh-word joining the reporting verb to the words that follow means the speech is indirect. No inverted commas, no comma, and a full stop at the end even for a question."),
    ],
  },

  /* ────────────────── Semicolon, Colon, Hyphen, Dash & Brackets ────────────────── */
  {
    id: "punctuation-other-marks",
    title: "Semicolon, Colon, Hyphen, Dash & Brackets",
    body: [
      para("These marks come up less often in the passage, but a board question sometimes has one of them, usually a hyphen in a compound word or a semicolon between two short sentences that belong together."),

      h("The semicolon ( ; )"),
      rule("Join two short sentences that are closely linked in meaning with a semicolon when no conjunction joins them. The word after the semicolon does not take a capital.", "sentence; sentence"),
      q("man proposes god disposes", "Man proposes; God disposes."),
      q("to err is human to forgive divine", "To err is human; to forgive, divine."),
      q("the night was dark the wind was blowing hard", "The night was dark; the wind was blowing hard."),

      rule("Put a semicolon before 'however', 'therefore', 'moreover', 'otherwise' or 'nevertheless' when it joins two sentences, and a comma after it.", "…; therefore, …"),
      q("he was ill therefore he could not come", "He was ill; therefore, he could not come."),
      q("work hard otherwise you will fail", "Work hard; otherwise, you will fail."),

      h("The colon ( : )"),
      rule("Use a colon before a list, an example or an explanation that follows a complete sentence.", "complete sentence: list / explanation"),
      q("he bought three things a pen a book and a bag", "He bought three things: a pen, a book and a bag."),
      q("remember one thing time and tide wait for none", "Remember one thing: time and tide wait for none."),
      rule("Use a colon between hours and minutes in writing time.", "10:30 a.m."),
      q("the train leaves at 1030 am", "The train leaves at 10:30 a.m."),

      h("The hyphen ( - )"),
      rule("Join the parts of a compound word with a hyphen.", "mother-in-law, passer-by, self-confidence, ex-student"),
      q("my brother in law is a doctor", "My brother-in-law is a doctor."),
      q("she has great self confidence", "She has great self-confidence."),

      rule("Join two or more words used together as one adjective before a noun with a hyphen.", "a well-known writer, a ten-year-old boy, a hard-working man"),
      q("he is a well known writer", "He is a well-known writer."),
      q("a ten year old boy won the prize", "A ten-year-old boy won the prize."),
      q("the japanese are a hard working nation", "The Japanese are a hard-working nation."),

      rule("Write the numbers from twenty-one to ninety-nine with a hyphen when you spell them out.", "twenty-five, forty-two, ninety-nine"),
      q("he is twenty five years old", "He is twenty-five years old."),

      h("The dash ( — )"),
      rule("Use a dash for a sudden break in the thought, or before a word or phrase that sums up what came before.", "… — in a word, …"),
      q("he is honest kind and hard-working in a word an ideal man", "He is honest, kind and hard-working — in a word, an ideal man."),
      q("he lost everything his money his house his friends", "He lost everything — his money, his house, his friends."),
      note("A dash (—) is longer than a hyphen (-). A hyphen joins the parts of one word; a dash separates parts of a sentence."),

      h("Brackets ( )"),
      rule("Put extra information, such as dates, a meaning or an explanation, in brackets. The sentence must still make sense without it.", "… (extra information) …"),
      q("kazi nazrul islam 1899 1976 was our national poet", "Kazi Nazrul Islam (1899–1976) was our national poet."),
      q("the sundarbans a world heritage site is in the south", "The Sundarbans (a World Heritage Site) is in the south."),
      note("Commas, dashes and brackets can all set off extra information. Commas make the lightest break, dashes the strongest, and brackets make the information look least important."),
    ],
  },

  /* ─────────────────────────── Common Mistakes ─────────────────────────── */
  {
    id: "punctuation-common-mistakes",
    title: "Common Mistakes",
    body: [
      para("These are the slips examiners see most often in this question. Each costs a mark, and each is easy to avoid once you know it."),

      h("Capitals"),
      wr("i went to Dhaka with my Father in Summer.", "I went to Dhaka with my father in summer."),
      wr("he speaks bangla and english.", "He speaks Bangla and English."),
      wr("We celebrate independence day on 26 march.", "We celebrate Independence Day on 26 March."),
      wr("He said, “we are ready.”", "He said, “We are ready.”"),
      wr("“I am ready,” He said.", "“I am ready,” he said."),

      h("End marks"),
      wr("She asked me where I was going?", "She asked me where I was going."),
      wr("What a clever boy he is.", "What a clever boy he is!"),
      wr("He is honest, isn't he.", "He is honest, isn't he?"),
      wr("May you live long.", "May you live long!"),

      h("Commas"),
      wr("Rahim come here.", "Rahim, come here."),
      wr("Yes I know him.", "Yes, I know him."),
      wr("Dhaka the capital of Bangladesh is a big city.", "Dhaka, the capital of Bangladesh, is a big city."),
      wr("It was raining, we could not go out.", "It was raining, so we could not go out."),
      wr("The man, who helped me, is my neighbour.", "The man who helped me is my neighbour."),

      h("Apostrophes"),
      wr("Its a nice day.", "It's a nice day."),
      wr("The cat drank it's milk.", "The cat drank its milk."),
      wr("She doesnt know.", "She doesn't know."),
      wr("This is the childrens' park.", "This is the children's park."),
      wr("He sells book's.", "He sells books."),

      h("Inverted commas"),
      wr("He said “I am ill”.", "He said, “I am ill.”"),
      wr("He said that, “he was ill.”", "He said that he was ill."),
      wr("“Where are you going?”, asked the man.", "“Where are you going?” asked the man."),
      wr("“If you come,” said he, “We will go.”", "“If you come,” said he, “we will go.”"),

      h("In the exam hall"),
      note("Do not add, drop or change any word. The examiner compares your passage word by word with the one printed in the question."),
      note("Write every mark clearly. A comma that looks like a full stop, or a capital that looks like a small letter, is marked wrong."),
      note("If a sentence could take either a full stop or an exclamation mark, look at the feeling in the passage: 'What', 'How', 'Alas' and 'Hurrah' need '!'."),
    ],
  },

  /* ────────────────────────── Practice passages ────────────────────────── */
  {
    id: "punctuation-set-1",
    title: "Practice Set 1: A Journey",
    prompt: PROMPT,
    body: [
      para("where are you going asked the old man i am going to dhaka replied rafiq why are you going there asked the old man again i am going to see my uncle who is ill in hospital said rafiq may allah cure him said the old man"),
      h("Answer"),
      para("“Where are you going?” asked the old man. “I am going to Dhaka,” replied Rafiq. “Why are you going there?” asked the old man again. “I am going to see my uncle, who is ill in hospital,” said Rafiq. “May Allah cure him!” said the old man."),
      h("Why"),
      ex(["Capitals", "Where, I, Dhaka, Rafiq, Why, I, May, Allah — the first word of each piece of speech, the pronoun 'I' and the proper nouns."]),
      ex(["End marks", "'Where are you going?' and 'Why are you going there?' are direct questions; 'May Allah cure him!' is a prayer."]),
      ex(["Commas", "'Dhaka,' and 'hospital,' — a statement followed by its reporting clause ends with a comma, not a full stop. 'uncle, who' — he has one uncle who is ill, and the clause adds information."]),
      ex(["Speech", "The reporting clauses 'asked the old man', 'replied Rafiq' and 'said Rafiq' start with small letters because they continue the sentence."]),
    ],
  },
  {
    id: "punctuation-set-2",
    title: "Practice Set 2: Rahima",
    prompt: PROMPT,
    body: [
      para("rahima is a student of rajshahi government girls high school her fathers name is mr karim he is a poor farmer she gets up early in the morning says her prayers and reads her lessons she wants to be a doctor shes sure that she will be able to serve the poor people of her village"),
      h("Answer"),
      para("Rahima is a student of Rajshahi Government Girls' High School. Her father's name is Mr. Karim. He is a poor farmer. She gets up early in the morning, says her prayers and reads her lessons. She wants to be a doctor. She's sure that she will be able to serve the poor people of her village."),
      h("Why"),
      ex(["Capitals", "Rahima, Karim and the full name of the school are proper nouns; Her, He, She, She and She's begin new sentences; Mr. is a title before a name."]),
      ex(["Apostrophes", "Girls' (a school of many girls: plural in s + apostrophe), father's (singular possessive), She's (she is)."]),
      ex(["Commas", "'gets up early in the morning, says her prayers and reads her lessons' — a list of three actions, with no comma before 'and'."]),
      ex(["End marks", "Every sentence is a statement, so each ends with a full stop."]),
    ],
  },
  {
    id: "punctuation-set-3",
    title: "Practice Set 3: A Morning Walk",
    prompt: PROMPT,
    body: [
      para("what a beautiful morning it is said rana to mina lets go for a walk mina yes brother replied mina but we must come back before eight oclock shouldnt we of course said rana"),
      h("Answer"),
      para("“What a beautiful morning it is!” said Rana to Mina. “Let's go for a walk, Mina.” “Yes, brother,” replied Mina, “but we must come back before eight o'clock, shouldn't we?” “Of course,” said Rana."),
      h("Why"),
      ex(["Capitals", "What, Rana, Mina, Let's, Yes, Of — names and the first word of each new sentence of speech. 'but' stays small: Mina's sentence is broken by 'replied Mina' and carries on."]),
      ex(["End marks", "'What a beautiful morning it is!' is exclamatory; 'shouldn't we?' is a tag question."]),
      ex(["Commas", "'walk, Mina' — the person spoken to. 'Yes, brother,' — after 'yes' and around the person spoken to. 'o'clock, shouldn't' — before the tag. 'Of course,' — before the reporting clause."]),
      ex(["Apostrophes", "Let's (let us), o'clock (of the clock), shouldn't (should not)."]),
    ],
  },
  {
    id: "punctuation-set-4",
    title: "Practice Set 4: The Language Movement",
    prompt: PROMPT,
    body: [
      para("the language movement of 1952 is a glorious chapter in our history on 21 february 1952 the police opened fire on the students who were demanding bangla as a state language salam rafiq barkat and jabbar were among the martyrs now the day is observed as international mother language day all over the world"),
      h("Answer"),
      para("The Language Movement of 1952 is a glorious chapter in our history. On 21 February 1952, the police opened fire on the students who were demanding Bangla as a state language. Salam, Rafiq, Barkat and Jabbar were among the martyrs. Now the day is observed as International Mother Language Day all over the world."),
      h("Why"),
      ex(["Capitals", "The Language Movement (a historical event), February (a month), Bangla (a language), Salam, Rafiq, Barkat, Jabbar (persons), International Mother Language Day (a special day)."]),
      ex(["Commas", "'On 21 February 1952,' — a long phrase at the start. 'Salam, Rafiq, Barkat and Jabbar' — a list of names."]),
      ex(["No comma", "'the students who were demanding' — the clause tells you which students, so it takes no commas."]),
      ex(["End marks", "Four statements, four full stops."]),
    ],
  },
  {
    id: "punctuation-set-5",
    title: "Practice Set 5: The Fox and the Grapes",
    prompt: PROMPT,
    body: [
      para("one day a hungry fox came to a vineyard he saw bunches of ripe grapes hanging from a vine oh how delicious they look he said to himself he jumped again and again but could not reach them at last he went away saying the grapes are sour"),
      h("Answer"),
      para("One day, a hungry fox came to a vineyard. He saw bunches of ripe grapes hanging from a vine. “Oh, how delicious they look!” he said to himself. He jumped again and again but could not reach them. At last he went away, saying, “The grapes are sour.”"),
      h("Why"),
      ex(["Capitals", "One, He, Oh, He, At, The — the first word of each sentence and of each piece of speech. 'he said to himself' stays small after the speech."]),
      ex(["End marks", "'Oh, how delicious they look!' is exclamatory, and the '!' sits inside the inverted commas."]),
      ex(["Commas", "'One day,' — an opening phrase. 'Oh,' — after an interjection that runs on. 'went away, saying,' — before a participle phrase and before the speech."]),
      ex(["No comma", "'again and again but could not reach' — 'but' joins two verbs with one subject, not two sentences, so no comma is needed."]),
    ],
  },
  {
    id: "punctuation-set-6",
    title: "Practice Set 6: Late for Class",
    prompt: PROMPT,
    body: [
      para("the teacher asked the boy why he was late the boy said sir i missed the bus dont be late again said the teacher i wont sir replied the boy"),
      h("Answer"),
      para("The teacher asked the boy why he was late. The boy said, “Sir, I missed the bus.” “Don't be late again,” said the teacher. “I won't, sir,” replied the boy."),
      h("Why"),
      ex(["End marks", "'The teacher asked the boy why he was late.' is an indirect question: a full stop, not a question mark, and no inverted commas."]),
      ex(["Speech", "'The boy said, “Sir, …”' — a comma after 'said' and a capital to open the speech. In the next two sentences the reporting clause comes after, so the speech ends with a comma."]),
      ex(["Commas", "'Sir,' and ', sir' — the person spoken to is set off with commas."]),
      ex(["Apostrophes", "Don't (do not), won't (will not)."]),
    ],
  },
  {
    id: "punctuation-set-7",
    title: "Practice Set 7: Our National Poet",
    prompt: PROMPT,
    body: [
      para("kazi nazrul islam our national poet was born at churulia in west bengal in 1899 he was called the rebel poet he wrote poems songs stories and novels his famous poem bidrohi made him a well known poet his words were fire they inspired our freedom fighters"),
      h("Answer"),
      para("Kazi Nazrul Islam, our national poet, was born at Churulia in West Bengal in 1899. He was called the Rebel Poet. He wrote poems, songs, stories and novels. His famous poem ‘Bidrohi’ made him a well-known poet. His words were fire; they inspired our freedom fighters."),
      h("Why"),
      ex(["Capitals", "Kazi Nazrul Islam, Churulia, West Bengal (proper nouns), the Rebel Poet (a title that stands for one person), Bidrohi (the name of a poem)."]),
      ex(["Commas", "', our national poet,' — a phrase in apposition. 'poems, songs, stories and novels' — a list."]),
      ex(["Other marks", "‘Bidrohi’ — the title of a poem in inverted commas. well-known — two words used as one adjective before a noun. 'fire; they' — two linked sentences with no conjunction."]),
    ],
  },
  {
    id: "punctuation-set-8",
    title: "Practice Set 8: Pohela Boishakh",
    prompt: PROMPT,
    body: [
      para("pohela boishakh is the first day of the bangla year people wear new clothes and go to fairs in dhaka a colourful procession called mangal shobhajatra is brought out from the faculty of fine arts of dhaka university isnt it a day of joy for all bangalees"),
      h("Answer"),
      para("Pohela Boishakh is the first day of the Bangla year. People wear new clothes and go to fairs. In Dhaka, a colourful procession called Mangal Shobhajatra is brought out from the Faculty of Fine Arts of Dhaka University. Isn't it a day of joy for all Bangalees?"),
      h("Why"),
      ex(["Capitals", "Pohela Boishakh (a festival), Bangla (a language), Dhaka (a place), Mangal Shobhajatra (the name of an event), the Faculty of Fine Arts and Dhaka University (institutions), Bangalees (a people)."]),
      ex(["Commas", "'In Dhaka,' — an opening phrase that sets the place."]),
      ex(["Apostrophes", "Isn't (is not)."]),
      ex(["End marks", "The last sentence begins with an auxiliary verb and asks a question, so it ends with a question mark."]),
    ],
  },
  {
    id: "punctuation-set-9",
    title: "Practice Set 9: At the Doctor's",
    prompt: PROMPT,
    body: [
      para("good morning doctor said mr hasan good morning please sit down what is your problem asked the doctor ive had a fever and a headache since monday replied mr hasan let me check your temperature said the doctor you have a high fever take these tablets three times a day and drink plenty of water thank you doctor said mr hasan"),
      h("Answer"),
      para("“Good morning, doctor,” said Mr. Hasan. “Good morning. Please sit down. What is your problem?” asked the doctor. “I've had a fever and a headache since Monday,” replied Mr. Hasan. “Let me check your temperature,” said the doctor. “You have a high fever. Take these tablets three times a day and drink plenty of water.” “Thank you, doctor,” said Mr. Hasan."),
      h("Why"),
      ex(["Capitals", "Mr. Hasan (a title and a name), Monday (a day), and the first word of every sentence of speech. 'doctor' stays small inside the sentence: it is used as a form of address, not a name."]),
      ex(["Speech", "The doctor says three sentences in a row, so one pair of inverted commas holds all three. After 'said the doctor.' a new sentence of speech begins with a capital and new inverted commas."]),
      ex(["Commas", "'morning, doctor,' and 'Thank you, doctor,' — the person spoken to. 'Monday,' and 'temperature,' — a statement before its reporting clause."]),
      ex(["Apostrophes", "I've (I have)."]),
    ],
  },
  {
    id: "punctuation-set-10",
    title: "Practice Set 10: The Liberation War",
    prompt: PROMPT,
    body: [
      para("the liberation war of bangladesh began on 26 march 1971 and ended on 16 december 1971 millions of people farmers students workers and soldiers took part in it alas three million people lost their lives we must always remember their sacrifice mustnt we"),
      h("Answer"),
      para("The Liberation War of Bangladesh began on 26 March 1971 and ended on 16 December 1971. Millions of people — farmers, students, workers and soldiers — took part in it. Alas! Three million people lost their lives. We must always remember their sacrifice, mustn't we?"),
      h("Why"),
      ex(["Capitals", "The Liberation War (a historical event), Bangladesh, March, December, and Three after 'Alas!', which ends its own exclamation."]),
      ex(["Other marks", "'— farmers, students, workers and soldiers —' — the dashes set off the list that explains 'millions of people', and commas separate its items. Commas round the list are also accepted."]),
      ex(["End marks", "'Alas!' takes an exclamation mark. The last sentence has a tag, so it ends with a question mark and has a comma before the tag."]),
      ex(["Apostrophes", "mustn't (must not). The statement is affirmative, so the tag is negative."]),
    ],
  },
];
