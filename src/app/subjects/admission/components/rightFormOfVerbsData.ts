// components/rightFormOfVerbsData.ts
//
// Right Forms of Verbs for admission tests. The SSC English page already
// teaches the basics passage by passage; this set is about the traps admission
// MCQs are built on. The lessons give each trap as a rule with a wrong and a
// right sentence, and the practice bank tests the same traps in the order the
// lessons teach them, one group per lesson.

import type { Block, Piece } from "../../english/components/englishData";
import type { Question } from "./admissionData";

const h = (text: string): Block => ({ type: "heading", text });
const rule = (text: string, formula?: string): Block => ({
  type: "rule",
  text,
  formula,
});
const note = (text: string): Block => ({ type: "note", label: "Note", text });
const tip = (text: string): Block => ({ type: "note", label: "Trap", text });
const para = (text: string): Block => ({ type: "para", text });
// The sentence an examiner would set as a wrong option, then the right one.
const fix = (wrong: string, right: string): Block => ({
  type: "example",
  lines: [
    { label: "Wrong", text: wrong },
    { label: "Right", text: right },
  ],
});
// Correct sentences only, one per line.
const ok = (...sentences: string[]): Block => ({
  type: "example",
  lines: sentences.map((text) => ({ label: "Example", text })),
});

export const rightFormOfVerbsLessons: Piece[] = [
  /* ──────────────────────── How it is asked ──────────────────────── */
  {
    id: "adm-verbs-how-asked",
    title: "How Admission Tests Ask It",
    body: [
      para("Admission tests rarely give a passage with brackets the way the SSC board does. Instead one sentence is set with a gap and four forms of the same verb, or a whole sentence is set and you must find the wrong verb. Three of the options are usually forms a careless reader would accept, so the question is really about one rule — a time word, a subject that looks plural but is not, or a fixed phrase that controls the verb."),
      h("A sixty-second checklist"),
      para("1. Find the real subject. Strike out everything between commas and every phrase starting with of, with, along with, as well as, together with, in addition to."),
      para("2. Look for a time marker: since, for, ago, yesterday, by the time, before, after, no sooner, hardly, already, yet, just."),
      para("3. Look for a word that fixes the form whatever the tense: a modal, to, a preposition, wish, as if, it is time, would rather, had better, lest, suggest that."),
      para("4. Ask whether the subject does the action or receives it. If it receives it, the answer is a form of be + V3."),
      para("5. Check the other verbs in the sentence. Sequence of tense still applies: a past main clause pulls the next clause into the past unless it states a universal truth."),
      tip("If two options look right, the one with a perfect tense is usually there to catch you. Choose a perfect tense only when there is a reason for it: since or for, a 'before' relation between two past actions, or 'by' a future time."),
      note("For the full list of tenses, irregular verbs and spelling rules, see SSC English › Grammar › Right Form of Verbs."),
    ],
  },

  /* ─────────────────────────── Tense ─────────────────────────── */
  {
    id: "adm-verbs-tense",
    title: "Tense Traps",
    body: [
      h("Since, for and ago"),
      rule("Since + a point of time and for + a length of time take the Present Perfect (or Perfect Continuous) in the main clause. The clause after since is in the Past Indefinite.", "S + have / has + V3 + since + S + V2"),
      fix("I know him since 2015.", "I have known him since 2015."),
      fix("He is ill for a week.", "He has been ill for a week."),
      fix("Many years have passed since he has left the village.", "Many years have passed since he left the village."),
      rule("'It is … since' takes the Past Indefinite after since; 'It was … since' takes the Past Perfect.", "It is + time + since + V2 · It was + time + since + had V3"),
      ok("It is five years since I saw him last.", "It was five years since I had seen him last."),
      rule("Ago marks a finished past time, so it never goes with the Present Perfect.", "… + time + ago → Past Indefinite"),
      fix("He has gone to Dhaka two days ago.", "He went to Dhaka two days ago."),
      h("Finished past time"),
      rule("Yesterday, last week, in 2010, the other day, long ago and 'when' asking about a past time all take the Past Indefinite, never the Present Perfect.", "past time marker → V2"),
      fix("I have finished the work yesterday.", "I finished the work yesterday."),
      fix("When have you come?", "When did you come?"),
      h("Two past actions"),
      rule("When one past action happened before another, the earlier one takes the Past Perfect and the later one the Past Indefinite. Before and after tell you which is earlier.", "had + V3 (earlier) … V2 (later)"),
      ok("The patient had died before the doctor came.", "The doctor came after the patient had died.", "The train had left before we reached the station."),
      rule("No sooner had … than, hardly / scarcely had … when, and barely had … when put the first action in the Past Perfect, inverted, and the second in the Past Indefinite.", "No sooner had + S + V3 + than + S + V2"),
      fix("No sooner did he reach the station than the train had left.", "No sooner had he reached the station than the train left."),
      ok("Hardly had we started when it began to rain.", "Scarcely had I gone out when the guests arrived."),
      h("An action going on in the past"),
      rule("A long action in progress takes the Past Continuous; the short action that interrupts it takes the Past Indefinite. While usually goes with the long action.", "while + was / were + V-ing … V2"),
      ok("While I was walking along the road, I met an old friend.", "The phone rang while she was cooking."),
      h("Future time in a time or condition clause"),
      rule("After when, as soon as, before, after, until, till, if, unless and in case, a future action is written in the Present Indefinite (or Present Perfect), not with will.", "when / if / until + S + V1 … S + will + V1"),
      fix("I will call you when he will come.", "I will call you when he comes."),
      fix("Wait here until I will return.", "Wait here until I return."),
      ok("We will start as soon as the rain has stopped."),
      rule("By + a future time, or by the time + Present Indefinite, takes the Future Perfect.", "by the time + S + V1 … S + will have + V3"),
      ok("By the time you arrive, we will have finished dinner.", "She will have completed her degree by 2027."),
      h("Sequence of tense"),
      rule("A past main verb pulls the verb of a noun clause into the past. A universal truth, a habitual fact or a historical fact stays in its own tense.", "said that + past · said that + universal truth (present)"),
      ok("He said that he was ill.", "Our teacher said that the earth moves round the sun.", "He told me that Columbus discovered America."),
      h("Verbs not used in the continuous"),
      rule("Verbs of state — know, believe, understand, like, love, hate, want, seem, belong, own, possess, contain, consist, see (perceive), hear, smell, taste — do not normally take the continuous.", "state verb → simple form"),
      fix("I am knowing the answer.", "I know the answer."),
      fix("This book is belonging to me.", "This book belongs to me."),
    ],
  },

  /* ─────────────────────── Agreement ─────────────────────── */
  {
    id: "adm-verbs-agreement",
    title: "Subject–Verb Agreement Traps",
    body: [
      h("Words that hide the subject"),
      rule("With, along with, together with, as well as, in addition to, accompanied by and like do not join subjects. The verb agrees with the subject before them.", "S1 + along with S2 + verb (agrees with S1)"),
      fix("The captain, along with his players, have arrived.", "The captain, along with his players, has arrived."),
      fix("The teacher as well as the students were present.", "The teacher as well as the students was present."),
      rule("In 'one of the + plural noun', the verb agrees with one.", "one of + plural noun + singular verb"),
      fix("One of my friends are a doctor.", "One of my friends is a doctor."),
      h("Either, neither and the nearest subject"),
      rule("With either … or, neither … nor, not only … but also and or, the verb agrees with the subject nearest to it.", "Neither S1 nor S2 + verb (agrees with S2)"),
      ok("Neither the teacher nor the students were present.", "Neither the students nor the teacher was present.", "Either you or he is to blame.", "Not only the boys but also the girl has come."),
      rule("Either, neither, each, every, everyone, everybody, nobody, anyone and someone used as the subject take a singular verb.", "each / every / either / neither + singular verb"),
      fix("Each of the boys get a prize.", "Each of the boys gets a prize."),
      fix("Neither of the answers are correct.", "Neither of the answers is correct."),
      rule("Two singular subjects joined by 'and' take a plural verb — unless each or every comes before them, or they name one person or one idea.", "S1 and S2 → plural · every S1 and every S2 → singular"),
      ok("Rahim and Karim are friends.", "Every man and every woman has the right to vote.", "The poet and philosopher is dead. (one person)", "Bread and butter is my usual breakfast. (one dish)", "Slow and steady wins the race. (one idea)"),
      h("Number, many a, a lot of"),
      rule("'The number of' takes a singular verb; 'a number of' means many and takes a plural verb.", "the number of → singular · a number of → plural"),
      ok("The number of students is increasing.", "A number of students are absent today."),
      rule("'Many a' + singular noun takes a singular verb.", "many a + singular noun + singular verb"),
      fix("Many a man have died in the war.", "Many a man has died in the war."),
      rule("With a lot of, lots of, plenty of, most of, some of, half of, all of and the rest of, the verb agrees with the noun after of.", "a lot of + plural → plural · a lot of + uncountable → singular"),
      ok("A lot of mangoes are in the basket.", "A lot of milk is wasted every day.", "Half of the work has been done."),
      h("Nouns that mislead"),
      rule("Nouns ending in -s that name one thing or subject take a singular verb: news, mathematics, physics, economics, politics, measles, the United States.", "news / mathematics … + singular verb"),
      ok("The news is true.", "Mathematics is my favourite subject.", "The United States is a big country."),
      rule("Nouns that are always plural take a plural verb: cattle, people, police, poultry, scissors, trousers, spectacles. With 'a pair of' the verb agrees with pair.", "cattle / police → plural · a pair of … → singular"),
      ok("The cattle are grazing in the field.", "The police have arrested the thief.", "A pair of shoes is under the bed."),
      rule("An amount of time, money, distance or weight taken as one whole takes a singular verb.", "ten miles / five years / a thousand taka + singular verb"),
      ok("Ten miles is a long distance to walk.", "Five thousand taka is a big sum for him."),
      rule("'The' + adjective names a class of people and takes a plural verb.", "the rich / the poor / the young + plural verb"),
      ok("The rich are not always happy.", "The old need our care."),
      rule("A collective noun takes a singular verb when the group acts as one body, and a plural verb when its members act separately.", "group as one → singular · members separately → plural"),
      ok("The committee has made its decision.", "The committee are divided in their opinions."),
      h("Relative pronouns"),
      rule("The verb after who, which or that agrees with the word the pronoun stands for. After 'one of the + plural noun + who', that word is the plural noun; after 'the only one of … who', it is one.", "one of the boys who + plural verb · the only one who + singular verb"),
      ok("He is one of the best players who have ever played for the team.", "He is the only one of the boys who has passed."),
      rule("After 'there', the verb agrees with the noun that follows it.", "there is + singular · there are + plural"),
      fix("There is many reasons for this.", "There are many reasons for this."),
    ],
  },

  /* ──────────────────── Subjunctive & conditionals ──────────────────── */
  {
    id: "adm-verbs-subjunctive",
    title: "Subjunctive, Conditionals & Wishes",
    body: [
      para("These structures talk about what is not real, or not yet real. They are the most heavily tested part of this topic in admission tests, because the right form often looks wrong to a reader who goes by the time of the sentence."),
      h("Wish"),
      rule("A wish about the present takes the Past Indefinite, with were for be in every person. A wish about the past takes the Past Perfect.", "wish + V2 / were (present) · wish + had + V3 (past)"),
      ok("I wish I were a bird.", "I wish I knew his address.", "I wish I had watched the match yesterday."),
      fix("I wish I was rich.", "I wish I were rich."),
      h("As if, as though"),
      rule("As if and as though describe something unreal: were or V2 for the present, had + V3 for the past.", "as if + were / V2 · as if + had + V3"),
      ok("He talks as if he knew everything.", "She behaves as if she were the owner.", "He looked as though he had seen a ghost."),
      h("It is time, would rather, had better"),
      rule("It is time, it is high time and it is about time + subject take the Past Indefinite. Without a subject, they take to + V1.", "It is high time + S + V2 · It is time + to + V1"),
      ok("It is high time we started for the station.", "It is time to go to bed."),
      rule("Would rather with one subject takes V1 (and than + V1). With a second subject it takes V2 for the present and had + V3 for the past.", "S + would rather + V1 · S1 + would rather + S2 + V2"),
      ok("I would rather die than beg.", "I would rather you went now.", "I would rather you had told me earlier."),
      rule("Had better takes V1, never to + V1.", "had better + V1"),
      fix("You had better to consult a doctor.", "You had better consult a doctor."),
      h("Suggest, insist, lest"),
      rule("After suggest, propose, recommend, insist, demand, request, order and urge + that, and after 'it is necessary / essential / important that', the verb is in V1 for every subject. 'Should + V1' is also correct.", "suggest that + S + V1 (or should + V1)"),
      ok("The doctor suggested that he give up smoking.", "She insisted that he be present at the meeting.", "It is essential that every student attend the class."),
      rule("Lest means 'so that … not'. It takes should + V1 and needs no other negative.", "lest + S + should + V1"),
      fix("Walk fast lest you will not miss the train.", "Walk fast lest you should miss the train."),
      h("Optative"),
      rule("A prayer or wish starting with may takes V1; one without may also uses V1, even with a third person subject.", "May + S + V1 · S + V1 (prayer)"),
      ok("May you live long!", "Long live our motherland!", "God bless you!"),
      h("The three conditionals"),
      rule("First conditional, a real possibility: if + Present Indefinite, main clause will + V1.", "If + S + V1 … S + will + V1"),
      ok("If it rains, we will stay at home."),
      rule("Second conditional, unreal in the present: if + Past Indefinite (were for be), main clause would + V1.", "If + S + V2 / were … S + would + V1"),
      ok("If I were rich, I would help the poor.", "If he worked hard, he would pass."),
      rule("Third conditional, unreal in the past: if + Past Perfect, main clause would have + V3.", "If + S + had + V3 … S + would have + V3"),
      ok("If he had worked hard, he would have passed."),
      fix("If he would have worked hard, he would have passed.", "If he had worked hard, he would have passed."),
      rule("In formal English, if can be dropped and the auxiliary moved to the front: Had, Were or Should.", "Had + S + V3 · Were + S … · Should + S + V1"),
      ok("Had I known the truth, I would have told you.", "Were I in your place, I would accept the offer.", "Should you need help, call me."),
    ],
  },

  /* ──────────────────── Gerund & infinitive ──────────────────── */
  {
    id: "adm-verbs-gerund-infinitive",
    title: "Gerund, Infinitive & Fixed Phrases",
    body: [
      h("'To' as a preposition"),
      rule("In these phrases to is a preposition, so the verb after it takes -ing: look forward to, be used to, be accustomed to, with a view to, object to, be opposed to, be addicted to, be devoted to, be averse to, in addition to, confess to, prefer … to.", "preposition to + V-ing"),
      fix("I am looking forward to see you.", "I am looking forward to seeing you."),
      fix("He went to Dhaka with a view to get a job.", "He went to Dhaka with a view to getting a job."),
      fix("I object to be treated like a child.", "I object to being treated like a child."),
      rule("'Used to + V1' means a past habit. 'Be / get used to + V-ing' means being accustomed to something.", "used to + V1 · be used to + V-ing"),
      ok("He used to get up early when he was young.", "He is used to working hard."),
      rule("Prefer takes V-ing to V-ing (or to + V1 rather than V1).", "prefer + V-ing + to + V-ing"),
      ok("I prefer reading to writing.", "I prefer to walk rather than take a rickshaw."),
      h("Verbs and phrases followed by V-ing"),
      rule("Avoid, enjoy, finish, mind, miss, postpone, practise, risk, deny, admit, consider, keep, give up, can't help, can't stand, it's no use, be worth and be busy take V-ing.", "avoid / mind / can't help … + V-ing"),
      ok("Would you mind opening the window?", "I cannot help laughing at his joke.", "The book is worth reading.", "It is no use crying over spilt milk.", "He was busy preparing for the exam."),
      rule("Need, want and require with a thing as subject take V-ing in a passive sense (or to be + V3).", "S (thing) + needs + V-ing = needs to be + V3"),
      ok("My shirt needs washing.", "My shirt needs to be washed."),
      h("Verbs whose meaning changes"),
      rule("Remember, forget and regret + V-ing look back at a past action; + to + V1 look forward to a duty. Stop + V-ing means to give up an action; stop + to + V1 means to pause in order to do it.", "remember + V-ing (past) · remember + to V1 (future)"),
      ok("I remember meeting him at the fair last year.", "Remember to lock the door before you leave.", "He stopped smoking when he was forty.", "He stopped to smoke. (paused in order to smoke)"),
      h("Bare infinitive"),
      rule("After modals, let, make, bid, have (cause), help, see, hear, watch and feel + object, the verb is in V1 without to. In the passive, to comes back.", "make + object + V1 · be made + to + V1"),
      ok("He made me cry.", "I saw him cross the road.", "He was made to cry.", "He was seen to cross the road."),
      rule("Dare and need as modals (in negatives and questions) take V1 without to.", "need not + V1 · dare not + V1"),
      ok("You need not come.", "He dare not speak to the boss."),
      h("Participles"),
      rule("Having + V3 shows that one action was completed before another by the same subject.", "Having + V3, S + V2"),
      ok("Having finished the work, he went home."),
      tip("A participle phrase must belong to the subject of the main clause. 'Walking along the road, a snake bit him' says the snake was walking. Write 'While he was walking along the road, a snake bit him.'"),
    ],
  },

  /* ─────────────────────── Passive ─────────────────────── */
  {
    id: "adm-verbs-passive",
    title: "Passive & Causative",
    body: [
      rule("When the subject receives the action, use be in the tense of the sentence + V3. The continuous adds being; the perfect adds been.", "is / was + V3 · is being + V3 · has been + V3"),
      ok("The letter was posted yesterday.", "The bridge is being built now.", "The work has been done."),
      fix("English speaks all over the world.", "English is spoken all over the world."),
      rule("After a modal, the passive is modal + be + V3.", "must / can / should + be + V3"),
      fix("The work must finish today.", "The work must be finished today."),
      rule("'Be born' is always passive.", "was / were born"),
      fix("Kazi Nazrul Islam born in 1899.", "Kazi Nazrul Islam was born in 1899."),
      rule("After a verb that takes V-ing, the passive is being + V3; after one that takes to + V1, it is to be + V3.", "being + V3 · to be + V3"),
      ok("I don't like being laughed at.", "The patient wants to be left alone."),
      rule("'Is said to / believed to / known to' + V1 describes the present; + have + V3 describes the past.", "is said to + V1 (present) · is said to have + V3 (past)"),
      ok("He is said to be very rich.", "He is said to have made a fortune in his youth."),
      h("Causative have and get"),
      rule("Have / get + thing + V3 means you arrange for someone else to do it. Have + person + V1 and get + person + to + V1 name the person who does it.", "have / get + object + V3"),
      ok("I had my hair cut yesterday.", "I got my watch repaired.", "I had the mechanic repair my car.", "I got the mechanic to repair my car."),
      h("Prepositions after passive verbs"),
      rule("Some passive verbs take a preposition other than by.", "known to · pleased with · surprised at · married to · interested in · satisfied with · filled with · covered with"),
      ok("He is known to everybody.", "I am pleased with your work.", "She is married to a doctor."),
    ],
  },
];

/* ───────────────────────── Practice bank ───────────────────────── */

type Draft = Omit<Question, "id">;
const mcq = (
  question: string,
  options: string[],
  answer: number,
  explanation: string,
  group: string
): Draft => ({ question, options, answer, explanation, group });

const TENSE = "Tense";
const AGREEMENT = "Subject–Verb Agreement";
const SUBJUNCTIVE = "Subjunctive & Conditionals";
const NONFINITE = "Gerund & Infinitive";
const PASSIVE = "Passive";

const drafts: Draft[] = [
  // ── Tense ──
  mcq("I ___ him since 2015.", ["know", "knew", "have known", "am knowing"], 2, "Since + a point of time takes the Present Perfect. Know is a state verb, so it is not used in the continuous.", TENSE),
  mcq("It is ten years since I ___ him last.", ["see", "have seen", "saw", "had seen"], 2, "'It is … since' takes the Past Indefinite after since.", TENSE),
  mcq("I ___ my homework yesterday.", ["have finished", "finished", "had finished", "finish"], 1, "Yesterday marks a finished past time, which takes the Past Indefinite, never the Present Perfect.", TENSE),
  mcq("No sooner had he reached the station than the train ___.", ["leaves", "left", "had left", "has left"], 1, "No sooner had + V3 … than + Past Indefinite for the second action.", TENSE),
  mcq("Hardly had we started when it ___ to rain.", ["begins", "has begun", "began", "had begun"], 2, "Hardly had + V3 … when + Past Indefinite.", TENSE),
  mcq("The patient had died before the doctor ___.", ["came", "had come", "has come", "comes"], 0, "The earlier action takes the Past Perfect; the later one, after before, takes the Past Indefinite.", TENSE),
  mcq("He went out after it ___ raining.", ["stopped", "had stopped", "has stopped", "stops"], 1, "The action after 'after' happened first, so it takes the Past Perfect.", TENSE),
  mcq("He will call you when he ___ home.", ["will reach", "reaches", "reached", "would reach"], 1, "A future action after when, if, until or as soon as is written in the Present Indefinite.", TENSE),
  mcq("By the time you arrive, we ___ dinner.", ["finish", "will finish", "will have finished", "had finished"], 2, "By the time + Present Indefinite takes the Future Perfect in the main clause.", TENSE),
  mcq("While I ___ along the road, I met an old friend.", ["walked", "was walking", "had walked", "am walking"], 1, "The long action in progress takes the Past Continuous; the short one that interrupts it takes the Past Indefinite.", TENSE),
  mcq("Our teacher said that the earth ___ round the sun.", ["moved", "moves", "had moved", "was moving"], 1, "A universal truth stays in the Present Indefinite, even after a past reporting verb.", TENSE),
  mcq("Look! The baby ___.", ["sleeps", "is sleeping", "slept", "has slept"], 1, "'Look!' points to an action happening now: Present Continuous.", TENSE),
  mcq("He ___ in this school for five years and still teaches here.", ["teaches", "taught", "has been teaching", "had taught"], 2, "For + a length of time with an action still going on takes the Present Perfect Continuous.", TENSE),

  // ── Agreement ──
  mcq("The captain, along with his players, ___ arrived.", ["have", "has", "are", "were"], 1, "Along with does not join subjects. The verb agrees with 'the captain', which is singular.", AGREEMENT),
  mcq("Neither the teacher nor the students ___ present.", ["was", "is", "were", "has been"], 2, "With neither … nor the verb agrees with the nearer subject, 'the students'.", AGREEMENT),
  mcq("Either you or he ___ to blame.", ["are", "is", "am", "were"], 1, "The verb agrees with the nearer subject, 'he'.", AGREEMENT),
  mcq("Each of the boys ___ a prize.", ["get", "gets", "are getting", "have got"], 1, "Each as the subject takes a singular verb.", AGREEMENT),
  mcq("One of my friends ___ a doctor.", ["are", "is", "were", "have been"], 1, "In 'one of + plural noun', the verb agrees with one.", AGREEMENT),
  mcq("The number of students ___ increasing.", ["are", "is", "were", "have been"], 1, "'The number of' takes a singular verb.", AGREEMENT),
  mcq("A number of students ___ absent today.", ["is", "was", "are", "has been"], 2, "'A number of' means many and takes a plural verb.", AGREEMENT),
  mcq("Many a man ___ died in the war.", ["have", "has", "are", "were"], 1, "'Many a' + singular noun takes a singular verb.", AGREEMENT),
  mcq("Mathematics ___ my favourite subject.", ["are", "is", "were", "have been"], 1, "Mathematics names one subject, so it takes a singular verb despite the -s.", AGREEMENT),
  mcq("Ten miles ___ a long distance to walk.", ["are", "is", "were", "have been"], 1, "A distance taken as one whole takes a singular verb.", AGREEMENT),
  mcq("The rich ___ not always happy.", ["is", "are", "was", "has"], 1, "'The' + adjective names a class of people and takes a plural verb.", AGREEMENT),
  mcq("He is one of the best players who ___ ever played for the team.", ["has", "have", "is", "was"], 1, "Who stands for 'players', so the verb is plural.", AGREEMENT),
  mcq("He is the only one of the boys who ___ passed.", ["have", "has", "are", "were"], 1, "After 'the only one of … who', who stands for one, so the verb is singular.", AGREEMENT),
  mcq("Bread and butter ___ my usual breakfast.", ["are", "is", "were", "have been"], 1, "Bread and butter is one dish, so the verb is singular.", AGREEMENT),
  mcq("Every man and every woman ___ the right to vote.", ["have", "has", "are having", "were having"], 1, "When each or every comes before subjects joined by and, the verb is singular.", AGREEMENT),
  mcq("The cattle ___ grazing in the field.", ["is", "are", "was", "has been"], 1, "Cattle is always plural.", AGREEMENT),
  mcq("A pair of shoes ___ under the bed.", ["are", "is", "were", "have been"], 1, "With 'a pair of', the verb agrees with pair.", AGREEMENT),
  mcq("There ___ a lot of mangoes in the basket.", ["is", "are", "was", "has been"], 1, "After there the verb agrees with the noun that follows; 'a lot of mangoes' is plural.", AGREEMENT),
  mcq("The committee ___ divided in their opinions.", ["is", "are", "was", "has"], 1, "The members hold different opinions, so the collective noun takes a plural verb. 'Their' confirms it.", AGREEMENT),

  // ── Subjunctive & conditionals ──
  mcq("I wish I ___ a bird.", ["am", "was", "were", "be"], 2, "A wish about the present takes were for be in every person.", SUBJUNCTIVE),
  mcq("I wish I ___ the match yesterday.", ["watched", "had watched", "have watched", "would watch"], 1, "A wish about the past takes the Past Perfect.", SUBJUNCTIVE),
  mcq("He talks as if he ___ everything.", ["knows", "knew", "had known", "know"], 1, "As if describes something unreal in the present: Past Indefinite.", SUBJUNCTIVE),
  mcq("It is high time we ___ for the station.", ["start", "started", "will start", "have started"], 1, "It is high time + subject takes the Past Indefinite.", SUBJUNCTIVE),
  mcq("I would rather you ___ now.", ["go", "went", "will go", "gone"], 1, "Would rather with a second subject takes the Past Indefinite for a present or future meaning.", SUBJUNCTIVE),
  mcq("If I ___ rich, I would help the poor.", ["am", "was", "were", "had been"], 2, "Second conditional: if + were, main clause would + V1.", SUBJUNCTIVE),
  mcq("If he had worked hard, he ___.", ["would pass", "will pass", "would have passed", "passed"], 2, "Third conditional: if + had + V3, main clause would have + V3.", SUBJUNCTIVE),
  mcq("If it rains, we ___ at home.", ["will stay", "would stay", "would have stayed", "stayed"], 0, "First conditional: if + Present Indefinite, main clause will + V1.", SUBJUNCTIVE),
  mcq("___ I known the truth, I would have told you.", ["Had", "Have", "If", "Did"], 0, "An inverted third conditional: Had + S + V3 = If I had known.", SUBJUNCTIVE),
  mcq("Were I in your place, I ___ the offer.", ["will accept", "would accept", "accepted", "accept"], 1, "'Were I' is an inverted second conditional, so the main clause takes would + V1.", SUBJUNCTIVE),
  mcq("Walk fast lest you ___ the train.", ["miss", "will miss", "should miss", "would miss"], 2, "Lest takes should + V1.", SUBJUNCTIVE),
  mcq("The doctor suggested that he ___ smoking.", ["gives up", "give up", "gave up", "will give up"], 1, "After suggest that, the verb is in V1 for every subject (or should + V1).", SUBJUNCTIVE),
  mcq("She insisted that he ___ present at the meeting.", ["is", "was", "be", "will be"], 2, "After insist that, be stays in its base form.", SUBJUNCTIVE),
  mcq("May you ___ long!", ["live", "lived", "living", "lives"], 0, "A prayer with may takes V1.", SUBJUNCTIVE),

  // ── Gerund & infinitive ──
  mcq("I am looking forward to ___ you.", ["see", "seeing", "saw", "seen"], 1, "To in 'look forward to' is a preposition, so the verb takes -ing.", NONFINITE),
  mcq("He is used to ___ hard.", ["work", "working", "worked", "works"], 1, "'Be used to' means be accustomed to and takes V-ing.", NONFINITE),
  mcq("He used to ___ early when he was young.", ["get up", "getting up", "got up", "gets up"], 0, "'Used to' for a past habit takes V1.", NONFINITE),
  mcq("He went to Dhaka with a view to ___ a job.", ["get", "getting", "got", "gets"], 1, "'With a view to' takes V-ing.", NONFINITE),
  mcq("You had better ___ a doctor.", ["to consult", "consulting", "consult", "consulted"], 2, "Had better takes V1 without to.", NONFINITE),
  mcq("I prefer reading to ___.", ["write", "writing", "wrote", "to write"], 1, "Prefer + V-ing + to + V-ing.", NONFINITE),
  mcq("I would rather die than ___.", ["beg", "begging", "to beg", "begged"], 0, "Would rather + V1 + than + V1.", NONFINITE),
  mcq("I cannot help ___ at his joke.", ["laugh", "laughing", "to laugh", "laughed"], 1, "Can't help takes V-ing.", NONFINITE),
  mcq("The book is worth ___.", ["read", "reading", "to read", "being read"], 1, "Worth takes V-ing, and the -ing form already carries the passive sense.", NONFINITE),
  mcq("He made me ___.", ["cry", "to cry", "crying", "cried"], 0, "Make + object takes V1 without to.", NONFINITE),
  mcq("He was made ___.", ["cry", "to cry", "crying", "cried"], 1, "In the passive, make takes to + V1.", NONFINITE),
  mcq("He stopped ___ when he was forty.", ["to smoke", "smoking", "smoke", "smoked"], 1, "Stop + V-ing means to give up the action.", NONFINITE),
  mcq("I object to ___ like a child.", ["treat", "be treated", "being treated", "treated"], 2, "To in 'object to' is a preposition; the passive gerund is being + V3.", NONFINITE),
  mcq("I remember ___ him at the fair last year.", ["to meet", "meeting", "meet", "met"], 1, "Remember + V-ing looks back at a past action.", NONFINITE),
  mcq("Remember ___ the door before you leave.", ["lock", "locking", "to lock", "locked"], 2, "Remember + to + V1 is about a duty still to be done.", NONFINITE),
  mcq("My shirt needs ___.", ["wash", "washing", "to wash", "washed"], 1, "Need with a thing as subject takes V-ing in a passive sense.", NONFINITE),
  mcq("___ finished the work, he went home.", ["Having", "Have", "Had", "Being"], 0, "Having + V3 shows an action completed before the next one.", NONFINITE),
  mcq("Would you mind ___ the window?", ["open", "to open", "opening", "opened"], 2, "Mind takes V-ing.", NONFINITE),
  mcq("He avoided ___ the question.", ["to answer", "answering", "answer", "answered"], 1, "Avoid takes V-ing.", NONFINITE),

  // ── Passive ──
  mcq("The letter ___ yesterday.", ["posted", "was posted", "has been posted", "is posted"], 1, "A letter cannot post itself, and yesterday is a finished past time: was + V3.", PASSIVE),
  mcq("English ___ all over the world.", ["speaks", "is spoken", "spoke", "is speaking"], 1, "English receives the action: Present Indefinite passive.", PASSIVE),
  mcq("The bridge ___ now.", ["is building", "is being built", "has built", "builds"], 1, "Now + passive: is being + V3.", PASSIVE),
  mcq("The work must ___ today.", ["finish", "be finished", "finished", "be finishing"], 1, "Modal passive: must + be + V3.", PASSIVE),
  mcq("Kazi Nazrul Islam ___ in 1899.", ["born", "was born", "has born", "is born"], 1, "'Be born' is always passive, and 1899 is past.", PASSIVE),
  mcq("I don't like ___ at.", ["laughing", "being laughed", "to laugh", "laughed"], 1, "Like + V-ing; the passive gerund is being + V3.", PASSIVE),
  mcq("I got my watch ___.", ["repair", "repaired", "repairing", "to repair"], 1, "Causative get + thing + V3.", PASSIVE),
  mcq("He is said ___ a fortune in his youth.", ["to make", "to have made", "making", "made"], 1, "'In his youth' is past, so 'is said to' takes have + V3.", PASSIVE),
  mcq("The thief ___ red-handed.", ["caught", "was caught", "catches", "has caught"], 1, "The thief receives the action: was + V3.", PASSIVE),
];

export const rightFormOfVerbsPractice: Question[] = drafts.map((d, i) => ({
  id: `adm-verbs-q${i + 1}`,
  ...d,
}));
