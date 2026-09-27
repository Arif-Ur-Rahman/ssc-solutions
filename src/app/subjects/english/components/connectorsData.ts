// components/connectorsData.ts
//
// Connectors, one piece per job a connector does: adding and ordering,
// contrast, cause-result-purpose, condition and time, example-emphasis-
// summary, and the paired connectors. Each piece gives the rules in order and
// works each rule through examples, the sentence with its gap on one line and
// the finished sentence on the next. A piece of common mistakes collects the
// traps, and practice passages are solved gap by gap with the reason for each
// answer.

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
// The usual pair: the sentence with its gap, then the gap filled.
const q = (given: string, answer: string): Block =>
  ex(["Given", given], ["Answer", answer]);
// A common slip set against the correct sentence.
const wr = (wrong: string, right: string): Block =>
  ex(["Wrong", wrong], ["Right", right]);
// One solved gap of a passage: the connector and why it fits.
const gap = (label: string, answer: string, why: string): Block =>
  ex([label, answer], ["Why", why]);
const para = (text: string): Block => ({ type: "para", text });

const PROMPT =
  "Complete the following passage with suitable connectors / linking words.";

export const connectors: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "connectors-introduction",
    title: "Introduction",
    body: [
      para("Connectors, also called linking words or transitional words, are the words and phrases that join one word, clause, sentence or idea to another and show how the two are related. 'And' adds, 'but' contrasts, 'because' gives a reason, 'therefore' draws a result, 'first' and 'finally' put ideas in order. In the SSC English Second Paper a short passage is given with gaps, usually (a) to (e) or more, and you have to fill each gap with a connector so that the passage reads smoothly and makes sense. Sometimes the connectors are given in a box; often they are not, and you have to supply them yourself."),
      h("How to answer"),
      para("1. Read the whole passage once without stopping, to get the idea of it."),
      para("2. At each gap, read the sentence before it and the sentence after it, and ask how the two ideas are related: does the second add to the first, go against it, give its reason, give its result, give an example, or come next in time?"),
      para("3. Pick the connector for that relation. The relation decides the family; the grammar around the gap decides the exact word."),
      para("4. Check the grammar. Does a full clause follow the gap (use 'because', 'though') or only a noun or V-ing (use 'because of', 'in spite of')? Is the gap at the start of a sentence followed by a comma (use 'However,', 'Therefore,', 'Moreover,')?"),
      para("5. Read the finished sentence aloud in your head. If it sounds wrong or means something else, try again."),
      para("6. Write the answers against their letters — (a) moreover, (b) because, … — or copy the whole passage with the connectors underlined, as your teacher advises."),
      h("The kinds of connector"),
      ex(["Coordinating", "and · but · or · nor · for · so · yet — join two equal words or clauses."]),
      ex(["Subordinating", "because · since · as · though · although · if · unless · when · while · until · so that — begin a clause that depends on the main clause."]),
      ex(["Correlative (pairs)", "both … and · either … or · neither … nor · not only … but also · no sooner … than · so … that"]),
      ex(["Linking adverbs & phrases", "however · therefore · moreover · besides · nevertheless · otherwise · as a result · in addition · on the other hand · for example · in fact · in short"]),
      ex(["Prepositional", "because of · due to · owing to · in spite of · despite · instead of · in addition to — followed by a noun, pronoun or V-ing, never by a clause."]),
      h("Connectors by their job"),
      ex(["Addition", "and · also · too · besides · moreover · furthermore · in addition · what is more · as well as"], ["Sequence", "first · firstly · second · then · next · after that · afterwards · later · finally · at last · lastly · meanwhile"], ["Contrast", "but · yet · however · still · though · although · even though · nevertheless · on the other hand · whereas · while · in spite of · despite · on the contrary"], ["Cause", "because · since · as · for · because of · due to · owing to · on account of"], ["Result", "so · therefore · thus · hence · consequently · as a result · accordingly"], ["Purpose", "so that · in order that · in order to · so as to · lest · with a view to"], ["Condition", "if · unless · provided that · as long as · in case · otherwise · or else"], ["Time", "when · while · as · before · after · since · until · till · as soon as · no sooner … than · hardly … when"], ["Example", "for example · for instance · such as · like · namely"], ["Emphasis", "in fact · indeed · of course · above all · especially · particularly · actually"], ["Summary", "in short · in brief · in a word · in conclusion · to sum up · on the whole · all in all"], ["Alternative", "or · either … or · instead · instead of · rather · rather than · otherwise"]),
      h("One passage, every job"),
      para("Rana is a hard-working boy. He gets up early; moreover, he never wastes time. He is poor, but he is honest. Because he studies regularly, he always does well. For example, he stood first last year. In short, he is an ideal student."),
      ex(["moreover", "adds a second good habit to the first."], ["but", "sets 'poor' against 'honest'."], ["because", "gives the reason for doing well."], ["for example", "gives a proof of 'does well'."], ["in short", "sums the passage up."]),
      h("What the examiner checks"),
      ex(["Relation", "The connector shows the right link between the two ideas."], ["Grammar", "A clause follows a conjunction; a noun or V-ing follows a prepositional connector."], ["Punctuation", "A sentence-opening linker such as 'However' or 'Therefore' is followed by a comma."], ["Spelling", "nevertheless, furthermore, although, consequently — spelt in full and correctly."]),
    ],
  },

  /* ──────────────────── Addition & Sequence ──────────────────── */
  {
    id: "connectors-addition-sequence",
    title: "Addition & Sequence",
    body: [
      para("An addition connector says 'here is one more point of the same kind'. A sequence connector says 'this comes next'. Both keep the passage moving in one direction, without any turn against what went before."),
      h("Addition"),
      rule("'And' joins two words, phrases or clauses of equal value inside one sentence.", "A + and + B"),
      q("He is honest ——— he is sincere.", "He is honest and he is sincere."),
      q("Bread ——— butter is my favourite breakfast.", "Bread and butter is my favourite breakfast."),
      rule("'Moreover', 'furthermore', 'besides' and 'in addition' add a new, often stronger, point in a new sentence or after a semicolon. A comma follows them.", "Sentence. + Moreover / Furthermore / Besides / In addition, + sentence"),
      q("Smoking is harmful to health. ———, it wastes money.", "Smoking is harmful to health. Moreover, it wastes money."),
      q("The house is too small. ———, it is far from the school.", "The house is too small. Besides, it is far from the school."),
      q("Trees give us oxygen. ———, they save the land from erosion.", "Trees give us oxygen. In addition, they save the land from erosion."),
      q("He is a good player. ———, he is a brilliant student.", "He is a good player. Furthermore, he is a brilliant student."),
      rule("'Also' usually sits before the main verb (or after 'be'); 'too' and 'as well' come at the end of the clause.", "S + also + V · S + V … + too / as well"),
      q("She sings well. She ——— dances well.", "She sings well. She also dances well."),
      q("Karim went to the fair, and Rahim went ———.", "Karim went to the fair, and Rahim went too."),
      rule("'Besides', 'in addition to' and 'as well as' can also be prepositions; then a noun or V-ing follows them, not a clause.", "Besides / In addition to / As well as + noun / V-ing"),
      q("——— being a doctor, he is a good writer.", "Besides being a doctor, he is a good writer."),
      q("——— English, he knows French.", "In addition to English, he knows French."),
      note("With 'as well as' the verb agrees with the first subject: 'The teacher as well as the students was present.'"),
      rule("'Not only … but also' adds a second point with more force.", "not only + A + but also + B"),
      q("He is ——— a singer ——— a poet.", "He is not only a singer but also a poet."),

      h("Sequence"),
      rule("'First', 'firstly' or 'first of all' opens a list of steps or points.", "First (of all), + first step"),
      rule("'Second', 'then', 'next' and 'after that' take the list on, one step at a time.", "Then / Next / After that, + next step"),
      rule("'Finally', 'lastly' and 'at last' close the list. 'At last' also means 'after a long wait'.", "Finally / Lastly / At last, + last step"),
      q("——— wash the rice. ——— put it in a pot of water. ——— boil it for twenty minutes. ———, drain off the water.", "First wash the rice. Then put it in a pot of water. After that, boil it for twenty minutes. Finally, drain off the water."),
      q("We waited for the bus for two hours. ———, it came.", "We waited for the bus for two hours. At last, it came."),
      rule("'Meanwhile' or 'in the meantime' says that something happened during the same time.", "Meanwhile, + another action at the same time"),
      q("Mother was cooking. ———, father was reading the newspaper.", "Mother was cooking. Meanwhile, father was reading the newspaper."),
      rule("'Later', 'afterwards' and 'soon' show that something came some time after.", "Later / Afterwards / Soon, + later event"),
      q("He finished his studies in Dhaka. ———, he went abroad.", "He finished his studies in Dhaka. Later, he went abroad."),
      note("'At last' means 'after a long time or much effort'; 'lastly' only marks the last point in a list. 'At last, I have found my book' — not 'Lastly, I have found my book'."),
    ],
  },

  /* ───────────────── Contrast & Concession ───────────────── */
  {
    id: "connectors-contrast",
    title: "Contrast & Concession",
    body: [
      para("A contrast connector turns the passage the other way: the second idea goes against, or is surprising after, the first. This is the family the board sets most, and the one where the grammar trap is sharpest — some of these words take a clause, some take only a noun or V-ing, and some begin a new sentence."),
      h("Joining two clauses in one sentence"),
      rule("'But' and 'yet' join two opposite clauses of equal weight. 'Yet' is a little stronger: 'and in spite of that'.", "Clause 1, + but / yet + Clause 2"),
      q("He is poor, ——— he is happy.", "He is poor, but he is happy."),
      q("She worked hard, ——— she failed.", "She worked hard, yet she failed."),
      rule("'Though', 'although' and 'even though' begin the clause that is surprising. They can come first or in the middle, but never together with 'but'.", "Though / Although + Clause 1, + Clause 2"),
      q("——— he is rich, he is not happy.", "Though he is rich, he is not happy."),
      q("——— it was raining, we went out.", "Although it was raining, we went out."),
      q("He did not stop ——— he was very tired.", "He did not stop even though he was very tired."),
      rule("'While' and 'whereas' set two different facts side by side.", "Clause 1, + while / whereas + Clause 2"),
      q("Rina likes tea, ——— her sister likes coffee.", "Rina likes tea, whereas her sister likes coffee."),
      q("——— some people are rich, others cannot get two meals a day.", "While some people are rich, others cannot get two meals a day."),

      h("Beginning a new sentence"),
      rule("'However', 'nevertheless', 'nonetheless' and 'still' begin a sentence that goes against the one before. A comma follows 'however' and 'nevertheless'.", "Sentence. + However / Nevertheless, + opposite sentence"),
      q("Bangladesh is a small country. ———, it has a large population.", "Bangladesh is a small country. However, it has a large population."),
      q("The task was difficult. ———, we finished it in time.", "The task was difficult. Nevertheless, we finished it in time."),
      q("He has failed twice. ———, he is trying again.", "He has failed twice. Still, he is trying again."),
      rule("'On the other hand' compares a second side of the same matter; 'on the contrary' says the first idea is wrong and the opposite is true.", "On the one hand … . On the other hand, … · Not A. On the contrary, B."),
      q("Science has made our life easy. ———, it has given us deadly weapons.", "Science has made our life easy. On the other hand, it has given us deadly weapons."),
      q("He is not lazy. ———, he is the most active boy in the class.", "He is not lazy. On the contrary, he is the most active boy in the class."),

      h("Before a noun or V-ing"),
      rule("'In spite of' and 'despite' are prepositions: a noun, a pronoun or V-ing follows them, never a clause. 'Despite' takes no 'of'.", "In spite of / Despite + noun / V-ing, + clause"),
      q("——— his illness, he attended the class.", "In spite of his illness, he attended the class."),
      q("——— being poor, he is honest.", "Despite being poor, he is honest."),
      q("——— the heavy rain, the match was played.", "Despite the heavy rain, the match was played."),
      rule("To put a clause after them, add 'the fact that'.", "In spite of / Despite + the fact that + clause"),
      q("——— he was ill, he attended the class.", "In spite of the fact that he was ill, he attended the class."),
      note("Test the gap: if a subject and a verb follow it, use 'though / although'; if only a noun or V-ing follows, use 'in spite of / despite'."),
      rule("'Instead' starts a sentence or ends a clause; 'instead of' comes before a noun or V-ing.", "Instead, + clause · instead of + noun / V-ing"),
      q("He did not study. ———, he played all day.", "He did not study. Instead, he played all day."),
      q("He went to the cinema ——— going to school.", "He went to the cinema instead of going to school."),
    ],
  },

  /* ─────────────── Cause, Result & Purpose ─────────────── */
  {
    id: "connectors-cause-result-purpose",
    title: "Cause, Result & Purpose",
    body: [
      para("Cause, result and purpose are three sides of one chain. The cause is why something happened; the result is what happened because of it; the purpose is what someone wants to happen. Before choosing the connector, ask which of the three the second idea is."),
      h("Cause"),
      rule("'Because' gives the reason, usually after the main clause, and answers 'why?'.", "Result clause + because + reason clause"),
      q("He could not go to school ——— he was ill.", "He could not go to school because he was ill."),
      rule("'Since' and 'as' give a reason that is already known or clear, and often begin the sentence.", "Since / As + reason clause, + main clause"),
      q("——— it was raining, we stayed at home.", "As it was raining, we stayed at home."),
      q("——— you are tired, you should take rest.", "Since you are tired, you should take rest."),
      rule("'For' gives a reason as an afterthought. It never begins a sentence and follows a comma.", "Main clause, + for + reason clause"),
      q("He must be ill, ——— he looks pale.", "He must be ill, for he looks pale."),
      rule("'Because of', 'due to', 'owing to' and 'on account of' come before a noun or V-ing, not a clause.", "Because of / Owing to + noun / V-ing"),
      q("The match was cancelled ——— the rain.", "The match was cancelled because of the rain."),
      q("——— his carelessness, he lost his purse.", "Owing to his carelessness, he lost his purse."),
      q("His failure was ——— his idleness.", "His failure was due to his idleness."),
      note("'Due to' goes best after 'be': 'The delay was due to fog.' At the start of a sentence, 'Owing to' or 'Because of' is safer."),

      h("Result"),
      rule("'So' joins the result clause to the cause clause in one sentence, after a comma.", "Cause clause, + so + result clause"),
      q("He was tired, ——— he went to bed early.", "He was tired, so he went to bed early."),
      rule("'Therefore', 'thus', 'hence', 'consequently', 'as a result' and 'accordingly' begin a new sentence that states the result. A comma follows them.", "Cause sentence. + Therefore / As a result, + result sentence"),
      q("He did not study. ———, he failed.", "He did not study. Therefore, he failed."),
      q("Trees are being cut down. ———, the climate is changing.", "Trees are being cut down. As a result, the climate is changing."),
      q("He broke the law. ———, he was punished.", "He broke the law. Consequently, he was punished."),
      q("Water is life. ———, we must not waste it.", "Water is life. Hence, we must not waste it."),
      rule("'So … that' and 'such … that' give a result that comes from the degree of something.", "so + adj / adv + that · such + (a) + adj + noun + that"),
      q("He was ——— tired ——— he could not walk.", "He was so tired that he could not walk."),
      q("It was ——— a hot day ——— we could not go out.", "It was such a hot day that we could not go out."),

      h("Purpose"),
      rule("'So that' and 'in order that' begin a clause of purpose; the clause takes may / can (present) or might / could (past).", "Main clause + so that / in order that + S + may / can + V1"),
      q("We eat ——— we may live.", "We eat so that we may live."),
      q("He worked hard ——— he might succeed.", "He worked hard in order that he might succeed."),
      rule("'In order to' and 'so as to' take a base verb; 'with a view to' takes V-ing.", "in order to / so as to + V1 · with a view to + V-ing"),
      q("She went to the market ——— buy vegetables.", "She went to the market in order to buy vegetables."),
      q("He came to Dhaka ——— getting a job.", "He came to Dhaka with a view to getting a job."),
      rule("'Lest' gives a purpose to avoid something. It takes 'should' and no 'not'.", "Main clause + lest + S + should + V1"),
      q("Walk carefully ——— you should fall.", "Walk carefully lest you should fall."),
    ],
  },

  /* ─────────────────── Condition & Time ─────────────────── */
  {
    id: "connectors-condition-time",
    title: "Condition & Time",
    body: [
      para("A condition connector says 'this happens only if that happens'. A time connector says when one action takes place in relation to another. Both begin a subordinate clause, and in both, a future idea is put in the present tense inside that clause."),
      h("Condition"),
      rule("'If' gives the condition on which the main clause depends.", "If + S + V1, + S + will + V1"),
      q("——— you work hard, you will succeed.", "If you work hard, you will succeed."),
      rule("'Unless' means 'if … not'. The 'unless' clause stays affirmative.", "Unless + S + V1 (affirmative), + S + will + V1"),
      q("——— you work hard, you will fail.", "Unless you work hard, you will fail."),
      rule("'Provided (that)', 'providing' and 'as long as' mean 'only if'.", "Main clause + provided that / as long as + clause"),
      q("I will lend you the book ——— you return it tomorrow.", "I will lend you the book provided that you return it tomorrow."),
      q("You may stay here ——— you keep quiet.", "You may stay here as long as you keep quiet."),
      rule("'In case' means 'because it may happen'; it is a precaution, not a condition.", "Main clause + in case + clause"),
      q("Take an umbrella ——— it rains.", "Take an umbrella in case it rains."),
      rule("'Otherwise' and 'or else' mean 'if not': they give what will happen if the first advice is not followed.", "Advice / order. + Otherwise, + result · Advice + or (else) + result"),
      q("Work hard. ———, you will fail.", "Work hard. Otherwise, you will fail."),
      q("Hurry up, ——— you will miss the train.", "Hurry up, or else you will miss the train."),
      rule("'Whether … or' gives two possibilities, either of which leads to the same result.", "Whether + A + or + B, + clause"),
      q("——— you like it ——— not, you must do it.", "Whether you like it or not, you must do it."),

      h("Time"),
      rule("'When' marks the time at which something happens; 'while' marks a longer action during which another happens.", "When + S + V2, + S + V2 · While + S + was + V-ing, + S + V2"),
      q("——— I reached the station, the train had left.", "When I reached the station, the train had left."),
      q("——— I was reading, the light went off.", "While I was reading, the light went off."),
      rule("'Before' and 'after' place one action ahead of or behind another.", "S + had + V3 + before + S + V2 · After + S + had + V3, + S + V2"),
      q("The patient had died ——— the doctor came.", "The patient had died before the doctor came."),
      q("——— he had finished his work, he went home.", "After he had finished his work, he went home."),
      rule("'As soon as' means 'immediately when'.", "As soon as + S + V2, + S + V2"),
      q("——— he saw me, he ran away.", "As soon as he saw me, he ran away."),
      rule("'Until' and 'till' mean 'up to the time when'. Their clause stays affirmative.", "Main clause + until / till + S + V1"),
      q("Wait here ——— I come back.", "Wait here until I come back."),
      rule("'Since' as a time connector gives the starting point; the main clause is usually Present Perfect.", "S + have / has + V3 + since + S + V2 / point of time"),
      q("I have known him ——— he was a child.", "I have known him since he was a child."),
      rule("'No sooner … than', 'hardly … when' and 'scarcely … when' say that one action followed the other at once. The first part takes 'had' + V3 and inverted word order.", "No sooner had + S + V3 + than + S + V2"),
      q("——— had he reached the station ——— the train left.", "No sooner had he reached the station than the train left."),
      q("——— had we started ——— it began to rain.", "Hardly had we started when it began to rain."),
      note("Never use 'will' in a clause of time or condition about the future: 'I shall wait until he comes', not 'until he will come'."),
    ],
  },

  /* ─────────── Example, Emphasis & Summary ─────────── */
  {
    id: "connectors-example-emphasis-summary",
    title: "Example, Emphasis & Summary",
    body: [
      para("These connectors do not join two clauses in a grammatical way; they guide the reader. An example connector says 'here is a proof of what I said'; an emphasis connector says 'this is important'; a summary connector says 'here is the whole thing in a few words'. They usually begin a sentence and take a comma."),
      h("Example"),
      rule("'For example' and 'for instance' begin a sentence or clause that proves the general statement before it.", "General statement. + For example / For instance, + particular case"),
      q("Many great men were poor in their early life. ———, Abraham Lincoln was the son of a poor farmer.", "Many great men were poor in their early life. For example, Abraham Lincoln was the son of a poor farmer."),
      q("Some animals are very useful. ———, the cow gives us milk.", "Some animals are very useful. For instance, the cow gives us milk."),
      rule("'Such as' and 'like' come before a list of nouns, not a full clause.", "general noun + such as + noun, noun and noun"),
      q("Bangladesh grows many crops ——— rice, jute and wheat.", "Bangladesh grows many crops such as rice, jute and wheat."),
      rule("'Namely' and 'that is' name exactly the things just mentioned.", "general noun, + namely / that is, + the exact items"),
      q("Two students, ——— Rana and Rina, got GPA 5.", "Two students, namely Rana and Rina, got GPA 5."),

      h("Emphasis"),
      rule("'In fact', 'indeed' and 'actually' confirm and strengthen what was said.", "Statement. + In fact / Indeed, + stronger statement"),
      q("He is a good student. ———, he is the best in the class.", "He is a good student. In fact, he is the best in the class."),
      rule("'Above all' picks out the most important of several points; 'especially' and 'particularly' pick out one item from a group.", "Points … . + Above all, + most important point"),
      q("A student should be regular and attentive. ———, he should be honest.", "A student should be regular and attentive. Above all, he should be honest."),
      q("I like fruits, ——— mangoes.", "I like fruits, especially mangoes."),
      rule("'Of course' and 'certainly' admit or confirm something as obvious.", "Of course, + obvious fact"),
      q("———, money is necessary, but it cannot buy happiness.", "Of course, money is necessary, but it cannot buy happiness."),

      h("Summary and conclusion"),
      rule("'In short', 'in brief' and 'in a word' sum up the passage in one short statement, usually at the end.", "… . + In short / In a word, + the whole idea"),
      q("He is honest, kind and hard-working. ———, he is an ideal man.", "He is honest, kind and hard-working. In a word, he is an ideal man."),
      rule("'In conclusion', 'to sum up', 'on the whole' and 'all in all' begin the closing sentence of a passage.", "… . + In conclusion / To sum up, + final idea"),
      q("———, we can say that trees are our best friends.", "In conclusion, we can say that trees are our best friends."),
      note("Put a summary connector only at the end, after the points it sums up. 'In short' in the middle of a passage, before anything has been said, is wrong."),
    ],
  },

  /* ─────────────────── Paired Connectors ─────────────────── */
  {
    id: "connectors-paired",
    title: "Paired Connectors",
    body: [
      para("Some connectors come in pairs: when one half appears, the other must follow. If a gap sits after one half, the answer is almost always the other half. The two halves are placed before words of the same kind — noun with noun, verb with verb, adjective with adjective."),
      rule("'Both … and' joins two things that are both true. A plural verb follows.", "Both + A + and + B + plural verb"),
      q("——— Rana ——— Rina are good students.", "Both Rana and Rina are good students."),
      rule("'Either … or' gives a choice between two. The verb agrees with the nearer subject.", "Either + A + or + B + verb (agrees with B)"),
      q("——— you ——— your brother has broken the glass.", "Either you or your brother has broken the glass."),
      rule("'Neither … nor' denies both. It is already negative, so no 'not' is added. The verb agrees with the nearer subject.", "Neither + A + nor + B + verb (agrees with B)"),
      q("He is ——— rich ——— poor.", "He is neither rich nor poor."),
      q("——— the teacher ——— the students were present.", "Neither the teacher nor the students were present."),
      rule("'Not only … but also' adds the second with more force. The verb agrees with the second subject.", "Not only + A + but also + B + verb (agrees with B)"),
      q("He is ——— intelligent ——— hard-working.", "He is not only intelligent but also hard-working."),
      rule("'Whether … or' gives two possibilities.", "whether + A + or + B"),
      q("I do not know ——— he will come ——— not.", "I do not know whether he will come or not."),
      rule("'So … that' and 'such … that' give a result; 'too … to' gives a result that is negative in meaning.", "so + adj + that · such + noun + that · too + adj + to + V1"),
      q("The tea is ——— hot ——— I cannot drink it.", "The tea is so hot that I cannot drink it."),
      q("The tea is ——— hot ——— drink.", "The tea is too hot to drink."),
      rule("'No sooner … than', 'hardly … when' and 'scarcely … when' show one action following another at once.", "No sooner … than · Hardly / Scarcely … when"),
      q("No sooner had the bell rung ——— the students came out.", "No sooner had the bell rung than the students came out."),
      q("Scarcely had I gone out ——— it began to rain.", "Scarcely had I gone out when it began to rain."),
      rule("'As … as' compares two equal things; 'not so … as' compares two unequal things.", "as + adj + as · not so + adj + as"),
      q("Rahim is ——— tall ——— Karim.", "Rahim is as tall as Karim."),
      q("Iron is ——— precious ——— gold.", "Iron is not so precious as gold."),
      rule("'Rather than' and 'would rather … than' prefer one thing to another.", "S + would rather + V1 + than + V1"),
      q("I would ——— die ——— beg.", "I would rather die than beg."),
      rule("'The + comparative … the + comparative' says that two things rise or fall together.", "The + comparative …, + the + comparative …"),
      q("——— more you read, ——— more you learn.", "The more you read, the more you learn."),
      note("Do not change a pair. 'No sooner … when', 'hardly … than', 'neither … or' and 'not only … but' (without 'also') are all wrong."),
    ],
  },

  /* ─────────────────── Common Mistakes ─────────────────── */
  {
    id: "connectors-common-mistakes",
    title: "Common Mistakes",
    body: [
      para("These are the slips that cost students the mark most often. Each one is set out with the reason, the wrong sentence against the right one."),
      h("Two connectors for one link"),
      rule("'Though' / 'although' and 'but' are not used together. 'Yet' may follow 'though' for emphasis, or nothing at all.", "Though + clause, + clause · Though + clause, yet + clause"),
      wr("Though he is poor, but he is honest.", "Though he is poor, he is honest."),
      rule("'Because' and 'so' are not used together.", "Because + clause, + clause · Clause, so + clause"),
      wr("Because it was raining, so we stayed at home.", "Because it was raining, we stayed at home."),
      rule("'As soon as', 'when' and 'after' are not followed by 'then'.", "As soon as + clause, + clause"),
      wr("As soon as he came, then we started.", "As soon as he came, we started."),

      h("Clause or noun?"),
      rule("'Because of', 'in spite of', 'despite', 'due to' and 'instead of' take a noun or V-ing, not a clause.", "because of / despite + noun / V-ing"),
      wr("He could not come because of he was ill.", "He could not come because he was ill."),
      wr("Despite he was ill, he came to school.", "Although he was ill, he came to school."),
      rule("'Though', 'because' and 'since' take a full clause, not a bare noun.", "though / because + S + V"),
      wr("Though his illness, he came to school.", "In spite of his illness, he came to school."),
      rule("'Despite' never takes 'of'.", "despite + noun"),
      wr("Despite of the rain, we went out.", "Despite the rain, we went out."),

      h("Negatives inside the connector"),
      rule("'Unless', 'lest', 'until' and 'neither … nor' already carry 'not'. Do not add another.", "unless / lest / until + affirmative clause"),
      wr("Unless you do not study, you will fail.", "Unless you study, you will fail."),
      wr("Run fast lest you should not miss the bus.", "Run fast lest you should miss the bus."),
      wr("He did neither eat nor drink.", "He neither ate nor drank."),

      h("Meaning slips"),
      rule("'However' turns against the previous idea; 'moreover' adds to it. Mixing them reverses the sense.", "same direction → moreover · opposite direction → however"),
      wr("He is intelligent. However, he is hard-working.", "He is intelligent. Moreover, he is hard-working."),
      wr("He is intelligent. Moreover, he is lazy.", "He is intelligent. However, he is lazy."),
      rule("'Therefore' gives a result; 'because' gives a reason. The order of cause and result decides which.", "cause. Therefore, result · result because cause"),
      wr("He failed. Therefore, he did not study.", "He failed because he did not study."),
      rule("'At last' means 'after a long wait'; 'lastly' and 'finally' close a list.", "At last = after long waiting · Lastly = last in a list"),
      wr("Firstly, he is honest. Secondly, he is kind. At last, he is brave.", "Firstly, he is honest. Secondly, he is kind. Lastly, he is brave."),

      h("Punctuation"),
      rule("A linking adverb joining two sentences needs a full stop or a semicolon before it and a comma after it. A comma alone before it is wrong.", "Clause; however, clause · Clause. However, clause"),
      wr("He was ill, however he came to school.", "He was ill; however, he came to school."),
      rule("'For' meaning 'because' never begins a sentence.", "Main clause, + for + reason"),
      wr("For he was ill, he did not come.", "As he was ill, he did not come."),
    ],
  },

  /* ─────────────────── Practice Passages ─────────────────── */
  {
    id: "connectors-practice-1",
    title: "Practice Passage 1 — Education",
    prompt: PROMPT,
    body: [
      para("Education is the backbone of a nation. (a) ——— a nation is educated, it cannot develop. (b) ———, many people in our country are still illiterate. (c) ——— they are illiterate, they do not know their rights. (d) ———, they are easily cheated. (e) ———, the government has taken many steps to spread education. (f) ———, primary education has been made free and compulsory. (g) ———, girls get stipends in schools. (h) ——— the government ——— the people must work together. (i) ——— everyone comes forward, illiteracy will not be removed. (j) ———, education is the key to our development."),
      h("Answers"),
      gap("(a)", "Unless", "'Unless' = if not: a nation cannot develop if it is not educated. The clause stays affirmative."),
      gap("(b)", "But / However", "The fact that people are illiterate goes against the idea that education is the backbone."),
      gap("(c)", "As / Since / Because", "Illiteracy is the reason they do not know their rights; a clause follows."),
      gap("(d)", "As a result / Therefore", "Being cheated is the result of not knowing their rights."),
      gap("(e)", "So / Therefore", "Taking steps is the government's response to the problem."),
      gap("(f)", "For example / For instance", "Free primary education is one of the steps just mentioned."),
      gap("(g)", "Moreover / Besides / In addition", "Stipends for girls add a second step of the same kind."),
      gap("(h)", "Both … and", "'Both' before 'the government' and 'and' before 'the people'; the plural 'must work together' fits."),
      gap("(i)", "Unless", "Illiteracy will not go if everyone does not come forward; the clause stays affirmative."),
      gap("(j)", "In a word / In short", "The last sentence sums up the passage."),
    ],
  },
  {
    id: "connectors-practice-2",
    title: "Practice Passage 2 — Trees",
    prompt: PROMPT,
    body: [
      para("Trees are our best friends. They give us fruits, wood and shade. (a) ———, they give us oxygen, (b) ——— we cannot live without. (c) ———, people are cutting down trees at random. (d) ———, the balance of nature is being lost. The temperature is rising day by day, (e) ——— the rainfall is decreasing. (f) ——— we plant more trees, our country will turn into a desert. (g) ———, we should plant trees (h) ——— we cut one. (i) ——— the young ——— the old should take part in this work. (j) ———, trees are essential for our survival."),
      h("Answers"),
      gap("(a)", "Moreover / Above all", "Oxygen is one more — and the most important — gift of trees."),
      gap("(b)", "which", "A relative connector: 'which' refers to 'oxygen'."),
      gap("(c)", "But / However", "Cutting trees goes against their being our best friends."),
      gap("(d)", "As a result / Consequently", "The loss of balance is the result of cutting trees."),
      gap("(e)", "and / while", "A second fact is added side by side with the first."),
      gap("(f)", "Unless", "The country will become a desert if we do not plant trees; the clause stays affirmative."),
      gap("(g)", "So / Therefore", "Planting trees is what follows from the danger."),
      gap("(h)", "whenever / before", "A time connector: a new tree for every one cut."),
      gap("(i)", "Both … and", "'Both the young and the old' — the pair joins two nouns."),
      gap("(j)", "In fact / In short", "A closing statement that sums up and stresses the point."),
    ],
  },
  {
    id: "connectors-practice-3",
    title: "Practice Passage 3 — Value of Time",
    prompt: PROMPT,
    body: [
      para("Time is very valuable. (a) ——— lost money can be regained, lost time can never be regained. (b) ———, we should not waste a single moment. Those who know the value of time use it properly; (c) ———, they succeed in life. (d) ———, those who waste time repent later. A student should make a routine (e) ——— he can use his time properly. He should study hard; (f) ———, he will fail in the examination. (g) ——— studying, he should play games (h) ——— keep his body fit. (i) ——— had he wasted his time in idleness ——— he realised his mistake. (j) ———, time and tide wait for none."),
      h("Answers"),
      gap("(a)", "Though / Although", "Two contrasting facts in one sentence; a clause follows, so not 'in spite of'."),
      gap("(b)", "So / Therefore", "Not wasting time is what follows from its value."),
      gap("(c)", "as a result / therefore", "After a semicolon, a result linker with a comma."),
      gap("(d)", "On the other hand / But", "Those who waste time are set against those who use it."),
      gap("(e)", "so that / in order that", "A purpose clause: making a routine for the purpose of using time well."),
      gap("(f)", "otherwise", "'Otherwise' = if he does not: the result of not following the advice."),
      gap("(g)", "Besides / In addition to", "A preposition before the V-ing 'studying'."),
      gap("(h)", "in order to / so as to", "Purpose before a base verb, 'keep'."),
      gap("(i)", "Hardly … when / No sooner … than", "Inverted 'had he wasted' needs one of the fixed pairs; keep the pair unbroken."),
      gap("(j)", "In fact / Indeed", "The proverb confirms and strengthens the passage."),
    ],
  },
  {
    id: "connectors-practice-4",
    title: "Practice Passage 4 — Mobile Phone",
    prompt: PROMPT,
    body: [
      para("The mobile phone is a wonderful gift of science. (a) ——— it, we can talk to anyone at any time. (b) ———, we can use the internet, take pictures and listen to music. (c) ———, it has some bad sides too. (d) ——— students use it too much, they cannot concentrate on their studies. (e) ———, some people use it to spread rumours. (f) ———, using it for a long time harms our eyes. (g) ——— it has many advantages, we should use it carefully. We should use it (h) ——— necessary, (i) ——— it may become a curse. (j) ———, the mobile phone is a blessing (k) ——— we use it properly."),
      h("Answers"),
      gap("(a)", "With / By means of", "A noun follows ('it'); the gap tells how we talk to anyone."),
      gap("(b)", "Moreover / Besides / In addition", "More uses are added to the first one."),
      gap("(c)", "However / But", "The bad sides go against the good ones."),
      gap("(d)", "If / When", "A condition: too much use leads to poor concentration."),
      gap("(e)", "Moreover / Besides", "A second bad side is added."),
      gap("(f)", "Furthermore / In addition", "A third bad side is added."),
      gap("(g)", "Though / Although", "A contrast with a full clause: advantages, yet care is needed."),
      gap("(h)", "when / if", "A shortened clause: 'when (it is) necessary'."),
      gap("(i)", "otherwise / or else", "The result if we do not follow the advice."),
      gap("(j)", "In short / To sum up", "The closing summary."),
      gap("(k)", "if / provided that", "The condition on which the phone is a blessing."),
    ],
  },
  {
    id: "connectors-practice-5",
    title: "Practice Passage 5 — Discipline",
    prompt: PROMPT,
    body: [
      para("Discipline is necessary in every sphere of life. (a) ——— discipline, no one can prosper. (b) ——— we look at nature, we see discipline everywhere. (c) ———, the sun rises and sets at the right time. (d) ——— in the family ——— in society, discipline is needed. A student should obey his teachers (e) ——— he can learn properly. (f) ——— he is talented, he will not shine (g) ——— he is disciplined. Soldiers are well-disciplined; (h) ———, they can win battles. (i) ——— some people think discipline takes away freedom, it (j) ——— protects our freedom."),
      h("Answers"),
      gap("(a)", "Without", "A preposition before the noun 'discipline'."),
      gap("(b)", "If / When", "A condition or time: whenever we look at nature."),
      gap("(c)", "For example / For instance", "The sun is an example of discipline in nature."),
      gap("(d)", "Both … and / Not only … but also", "A pair joining two phrases of the same kind."),
      gap("(e)", "so that / in order that", "A purpose clause with 'can'."),
      gap("(f)", "Though / Even though", "Talent and failure go against each other."),
      gap("(g)", "unless", "He will not shine if he is not disciplined; the clause stays affirmative."),
      gap("(h)", "therefore / as a result", "Winning battles is the result of discipline."),
      gap("(i)", "Though / While", "A contrast with a full clause."),
      gap("(j)", "actually / in fact", "An emphasis word stressing the true fact against the wrong belief."),
    ],
  },
];
