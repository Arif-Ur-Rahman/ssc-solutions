// components/tagQuestionsData.ts
//
// Tag Questions, one piece per family of rules the board tests: the auxiliary
// and the tense, negative words, special subjects, imperatives and 'let',
// and longer sentences with more than one clause. Each piece gives the rules
// in order and works each rule through examples, the sentence as set on one
// line and the sentence with its tag on the next. A piece of exceptional
// cases collects the traps, and practice sets are solved item by item with
// the reason for each answer.

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
// The usual pair: the sentence as set, then the sentence with its tag.
const q = (given: string, answer: string): Block =>
  ex(["Given", given], ["Answer", answer]);
// A common slip set against the correct tag.
const wr = (wrong: string, right: string): Block =>
  ex(["Wrong", wrong], ["Right", right]);
// A practice item solved with the reason for the answer.
const s = (n: string, answer: string, why: string): Block =>
  ex([n, answer], ["Why", why]);
const para = (text: string): Block => ({ type: "para", text });

const PROMPT = "Add tag questions to the following sentences.";

export const tagQuestions: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "tag-questions-introduction",
    title: "Introduction",
    body: [
      para("A tag question is a short question added to the end of a statement. We use it to check something we think is true, or to ask the listener to agree with us. 'You are a student' is a statement; 'You are a student, aren't you?' asks the listener to say 'yes'. The short part after the comma, 'aren't you?', is the tag."),
      para("The tag is never a new idea. It is built out of the statement itself: the same auxiliary verb and the same subject, turned round into a question. So the whole skill lies in finding the right auxiliary and the right pronoun, and in deciding whether the tag should be negative or affirmative."),
      h("How a tag is built"),
      rule("A tag has only two words: an auxiliary verb and a pronoun for the subject. A comma comes before it and a question mark after it.", "Statement + , + auxiliary + pronoun + ?"),
      ex(["Given", "Rahim is a good boy."], ["Answer", "Rahim is a good boy, isn't he?"]),
      rule("An affirmative statement takes a negative tag; a negative statement takes an affirmative tag.", "affirmative → negative tag · negative → affirmative tag"),
      ex(["Given", "She can sing."], ["Answer", "She can sing, can't she?"]),
      ex(["Given", "She cannot sing."], ["Answer", "She cannot sing, can she?"]),
      rule("A negative tag is always written in the short (contracted) form: isn't, aren't, don't, can't. Never write 'is not he?' or 'can not she?'.", "is not he? ✗ → isn't he? ✓"),
      ex(["Given", "They were late."], ["Answer", "They were late, weren't they?"]),
      rule("The subject of the tag is always a pronoun. A noun in the statement is replaced by the pronoun that stands for it.", "noun subject → he / she / it / they"),
      ex(["Given", "The girls are playing."], ["Answer", "The girls are playing, aren't they?"]),
      ex(["Given", "Your father is a doctor."], ["Answer", "Your father is a doctor, isn't he?"]),

      h("The short forms you will need"),
      para("is not → isn't · are not → aren't · was not → wasn't · were not → weren't · do not → don't · does not → doesn't · did not → didn't · has not → hasn't · have not → haven't · had not → hadn't · will not → won't · shall not → shan't · would not → wouldn't · should not → shouldn't · can not → can't · could not → couldn't · must not → mustn't · need not → needn't · ought not → oughtn't · might not → mightn't · may not → mayn't · dare not → daren't"),
      note("'Won't' comes from 'will not' and 'shan't' from 'shall not'. They are the two short forms students spell wrong most often."),

      h("Three questions to ask every time"),
      para("1. Which is the auxiliary verb of the principal statement? If there is none, the tag takes do, does or did."),
      para("2. Is the statement affirmative or negative? Look for 'not' and also for words like never, hardly, nobody and nothing, which make a sentence negative without 'not'."),
      para("3. Which pronoun stands for the subject? A name becomes he, she, it or they; words like everybody and nothing have fixed pronouns of their own."),
      note("Keep the tense. A tag never changes the time of the sentence: 'He went home' takes 'didn't he?', not 'doesn't he?'."),
    ],
  },

  /* ─────────────────── Auxiliary Verbs & Tenses ─────────────────── */
  {
    id: "tag-questions-auxiliaries",
    title: "Auxiliary Verbs & Tenses",
    prompt: PROMPT,
    body: [
      para("The tag repeats the first auxiliary verb of the statement. When the statement has no auxiliary of its own, the tag borrows do, does or did, exactly as a question would."),

      h("Be, have and the modals"),
      rule("When the statement has am, is, are, was or were, the tag repeats it.", "is / are / was / were → isn't / aren't / wasn't / weren't"),
      q("He is honest.", "He is honest, isn't he?"),
      q("You are tired.", "You are tired, aren't you?"),
      q("The weather was fine.", "The weather was fine, wasn't it?"),
      q("They were not at home.", "They were not at home, were they?"),

      rule("When the statement has has, have or had as a helping verb, the tag repeats it.", "has / have / had + V3 → hasn't / haven't / hadn't"),
      q("She has finished her work.", "She has finished her work, hasn't she?"),
      q("You have seen the Taj Mahal.", "You have seen the Taj Mahal, haven't you?"),
      q("The train had left.", "The train had left, hadn't it?"),

      rule("When the statement has a modal (shall, will, can, could, may, might, must, should, would), the tag repeats it.", "modal → modal + n't"),
      q("He will come tomorrow.", "He will come tomorrow, won't he?"),
      q("We shall start at six.", "We shall start at six, shan't we?"),
      q("You can swim.", "You can swim, can't you?"),
      q("She could not answer.", "She could not answer, could she?"),
      q("We should help the poor.", "We should help the poor, shouldn't we?"),
      q("You would like some tea.", "You would like some tea, wouldn't you?"),
      q("I may go now.", "I may go now, mayn't I?"),

      rule("In a continuous or perfect tense, the tag takes only the first auxiliary.", "has been doing → hasn't … · will have done → won't …"),
      q("He has been waiting for an hour.", "He has been waiting for an hour, hasn't he?"),
      q("They will have reached by now.", "They will have reached by now, won't they?"),
      q("The house is being painted.", "The house is being painted, isn't it?"),

      h("No auxiliary: do, does, did"),
      rule("Present indefinite with a singular third-person subject (he, she, it, a name): the tag is 'doesn't'.", "S (he / she / it) + V1 + s → doesn't + pronoun"),
      q("He plays football.", "He plays football, doesn't he?"),
      q("The sun rises in the east.", "The sun rises in the east, doesn't it?"),
      q("Rina sings well.", "Rina sings well, doesn't she?"),

      rule("Present indefinite with I, we, you, they or a plural noun: the tag is 'don't'.", "S (I / we / you / they) + V1 → don't + pronoun"),
      q("You like mangoes.", "You like mangoes, don't you?"),
      q("Farmers grow crops.", "Farmers grow crops, don't they?"),

      rule("Past indefinite, any subject: the tag is 'didn't'.", "S + V2 → didn't + pronoun"),
      q("He went to Dhaka.", "He went to Dhaka, didn't he?"),
      q("They won the match.", "They won the match, didn't they?"),
      q("Nazrul wrote many poems.", "Nazrul wrote many poems, didn't he?"),

      rule("When do, does or did is already in the statement (as a negative, or for emphasis), the tag repeats it.", "does not + V1 → does + pronoun"),
      q("She does not eat fish.", "She does not eat fish, does she?"),
      q("They did not come.", "They did not come, did they?"),
      q("He did come to the party.", "He did come to the party, didn't he?"),

      h("'Am' with I"),
      rule("'I am' takes 'aren't I?' in the tag, because 'amn't' is not used. 'I am not' takes 'am I?'.", "I am → aren't I? · I am not → am I?"),
      q("I am right.", "I am right, aren't I?"),
      q("I am your friend.", "I am your friend, aren't I?"),
      q("I am not late.", "I am not late, am I?"),

      h("'Have' as a main verb"),
      rule("When 'have' means 'possess', the tag may repeat 'have'. When it means eat, take, enjoy or receive, it works like any main verb and the tag takes do, does or did.", "have (possess) → haven't / hasn't · have (eat, take) → don't / doesn't / didn't"),
      q("He has a car.", "He has a car, hasn't he?"),
      q("You have two brothers.", "You have two brothers, haven't you?"),
      q("He has his breakfast at eight.", "He has his breakfast at eight, doesn't he?"),
      q("We had a good time.", "We had a good time, didn't we?"),
      q("She has to go now.", "She has to go now, doesn't she?"),
      note("'Have to' and 'had to' (necessity) take do, does or did: 'We had to wait, didn't we?'"),

      h("Used to, ought to, need, dare"),
      rule("'Used to' takes 'didn't' in the tag.", "used to → didn't"),
      q("He used to live here.", "He used to live here, didn't he?"),
      rule("'Ought to' takes 'oughtn't' in the tag; 'shouldn't' is also accepted.", "ought to → oughtn't / shouldn't"),
      q("We ought to respect our elders.", "We ought to respect our elders, oughtn't we?"),
      rule("'Need' and 'dare' are modals when they take V1 without 'to'; the tag repeats them. With 'to' they are main verbs and the tag takes do, does or did.", "need not + V1 → need …? · needs to + V1 → doesn't …?"),
      q("You need not go there.", "You need not go there, need you?"),
      q("He dare not speak.", "He dare not speak, dare he?"),
      q("She needs to rest.", "She needs to rest, doesn't she?"),
      q("He dared to face the tiger.", "He dared to face the tiger, didn't he?"),

      h("Had better, would rather, and the short 'd and 's"),
      rule("'Had better' takes 'hadn't'; 'would rather' takes 'wouldn't'.", "had better → hadn't · would rather → wouldn't"),
      q("You had better go now.", "You had better go now, hadn't you?"),
      q("She would rather stay at home.", "She would rather stay at home, wouldn't she?"),
      rule("Open the short form before you write the tag. ''d' is 'had' before V3 or 'better', and 'would' before V1. ''s' is 'is' before an adjective, noun or V-ing, and 'has' before V3.", "'d + V3 → hadn't · 'd + V1 → wouldn't · 's + V3 → hasn't · 's + V-ing → isn't"),
      q("You'd done it before.", "You'd done it before, hadn't you?"),
      q("He'd like to come.", "He'd like to come, wouldn't he?"),
      q("She's written a letter.", "She's written a letter, hasn't she?"),
      q("She's writing a letter.", "She's writing a letter, isn't she?"),

      h("Must"),
      rule("'Must' for duty or necessity takes 'mustn't'; 'needn't' is also accepted. 'Must' that means 'surely' (a guess about the present) takes the tag of the verb that follows.", "must + V1 (duty) → mustn't · must be (guess) → isn't / aren't"),
      q("We must obey our parents.", "We must obey our parents, mustn't we?"),
      q("He must be tired after the journey.", "He must be tired after the journey, isn't he?"),
    ],
  },

  /* ───────────────────── Negative Words ───────────────────── */
  {
    id: "tag-questions-negative-words",
    title: "Negative & Semi-negative Words",
    prompt: PROMPT,
    body: [
      para("A sentence can be negative without 'not'. Words such as never, no, nobody and nothing are negative in themselves, and words such as hardly, seldom and few are negative in sense. A statement that has one of them is a negative statement, so its tag is affirmative."),

      h("Words that make a statement negative"),
      rule("never, no, none, nobody, no one, nothing, nowhere, neither, nor: the statement is negative, so the tag is affirmative.", "never / no / nothing … → affirmative tag"),
      q("He never tells a lie.", "He never tells a lie, does he?"),
      q("There is no water in the jug.", "There is no water in the jug, is there?"),
      q("She has no money.", "She has no money, has she?"),
      q("Nothing can stop him.", "Nothing can stop him, can it?"),
      q("Neither of them came.", "Neither of them came, did they?"),

      rule("hardly, scarcely, barely, seldom, rarely: these mean 'almost not', so the tag is affirmative.", "hardly / scarcely / seldom / rarely → affirmative tag"),
      q("He hardly works.", "He hardly works, does he?"),
      q("She seldom comes here.", "She seldom comes here, does she?"),
      q("We could scarcely see anything.", "We could scarcely see anything, could we?"),
      q("They rarely visit us.", "They rarely visit us, do they?"),

      h("Few and little against a few and a little"),
      rule("'Few' and 'little' mean 'almost none', so they are negative and take an affirmative tag.", "few / little → affirmative tag"),
      q("Few people know him.", "Few people know him, do they?"),
      q("There is little hope of his recovery.", "There is little hope of his recovery, is there?"),
      q("He has little knowledge of English.", "He has little knowledge of English, has he?"),
      rule("'A few' and 'a little' mean 'some', so they are affirmative and take a negative tag.", "a few / a little → negative tag"),
      q("A few students were present.", "A few students were present, weren't they?"),
      q("There is a little milk in the pot.", "There is a little milk in the pot, isn't there?"),
      q("He has a little money.", "He has a little money, hasn't he?"),

      h("Negative prefixes do not count"),
      rule("A word made negative by a prefix (un-, dis-, in-, im-, il-, ir-) does not make the sentence negative. The statement is still affirmative, so the tag is negative.", "unhappy / dislike / impossible → negative tag"),
      q("He is unhappy.", "He is unhappy, isn't he?"),
      q("She dislikes cold drinks.", "She dislikes cold drinks, doesn't she?"),
      q("The task is impossible.", "The task is impossible, isn't it?"),
      q("He is illiterate.", "He is illiterate, isn't he?"),
      note("Check 'nothing' and 'nobody' against 'something' and 'somebody'. 'Somebody called me, didn't they?' is affirmative; 'Nobody called me, did they?' is negative."),
    ],
  },

  /* ───────────────────── Special Subjects ───────────────────── */
  {
    id: "tag-questions-special-subjects",
    title: "Special Subjects",
    prompt: PROMPT,
    body: [
      para("The subject of the tag is always a pronoun, and for most subjects the choice is plain: a man is 'he', a woman is 'she', a thing is 'it', and more than one is 'they'. A handful of subjects have a fixed pronoun of their own, and the board asks about these again and again."),

      h("Indefinite pronouns"),
      rule("everybody, everyone, somebody, someone, anybody, anyone, nobody, no one, none: the tag pronoun is 'they'. The verb in the tag is plural too.", "everybody / somebody / nobody → they"),
      q("Everybody likes him.", "Everybody likes him, don't they?"),
      q("Someone is knocking at the door.", "Someone is knocking at the door, aren't they?"),
      q("Nobody was absent.", "Nobody was absent, were they?"),
      q("None of the boys came.", "None of the boys came, did they?"),
      note("The verb of the statement stays singular ('Everybody likes'), but the tag uses the plural 'don't they?', because the pronoun is 'they'."),

      rule("everything, something, anything, nothing: the tag pronoun is 'it'.", "everything / something / nothing → it"),
      q("Everything is ready.", "Everything is ready, isn't it?"),
      q("Something has happened.", "Something has happened, hasn't it?"),
      q("Nothing is impossible.", "Nothing is impossible, is it?"),

      h("This, that, these, those"),
      rule("'This' and 'that' become 'it'; 'these' and 'those' become 'they'.", "this / that → it · these / those → they"),
      q("This is your pen.", "This is your pen, isn't it?"),
      q("That was a good idea.", "That was a good idea, wasn't it?"),
      q("These are my books.", "These are my books, aren't they?"),
      q("Those were happy days.", "Those were happy days, weren't they?"),

      h("There and it"),
      rule("When the sentence begins with 'there' + be, the tag keeps 'there'.", "There is / are … → isn't / aren't there?"),
      q("There is a mango tree in our garden.", "There is a mango tree in our garden, isn't there?"),
      q("There were many people at the fair.", "There were many people at the fair, weren't there?"),
      q("There will be a meeting tomorrow.", "There will be a meeting tomorrow, won't there?"),
      rule("'It' stays 'it' in the tag, whether it stands for a thing, the weather or the time.", "It … → … it?"),
      q("It is raining.", "It is raining, isn't it?"),
      q("It was very hot yesterday.", "It was very hot yesterday, wasn't it?"),

      h("One, each and everyone"),
      rule("'One' used for people in general stays 'one' in the tag ('he' is also accepted).", "One + V → … one?"),
      q("One should do one's duty.", "One should do one's duty, shouldn't one?"),
      rule("'Each', 'every' + noun, 'either' and 'neither' (for people): the tag takes 'they'; for things it takes 'it'.", "each / every + person → they"),
      q("Each of the boys got a prize.", "Each of the boys got a prize, didn't they?"),
      q("Every student got a book.", "Every student got a book, didn't they?"),

      h("Two subjects joined by 'and'"),
      rule("Two subjects joined by 'and' become one plural pronoun. If one of them is 'I', use 'we'; if one is 'you' (and none is 'I'), use 'you'; otherwise 'they'.", "you and I → we · you and he → you · he and she → they"),
      q("You and I are friends.", "You and I are friends, aren't we?"),
      q("You and your brother will come.", "You and your brother will come, won't you?"),
      q("Rahim and Karim play together.", "Rahim and Karim play together, don't they?"),

      h("Phrases and clauses as subjects"),
      rule("When the subject is an infinitive, a gerund or a whole clause, the tag pronoun is 'it'.", "To + V1 / V-ing / that-clause / what-clause → it"),
      q("To err is human.", "To err is human, isn't it?"),
      q("Walking is a good exercise.", "Walking is a good exercise, isn't it?"),
      q("Smoking is injurious to health.", "Smoking is injurious to health, isn't it?"),
      q("What he said is true.", "What he said is true, isn't it?"),
      q("That he is honest is known to all.", "That he is honest is known to all, isn't it?"),

      h("Collective nouns and animals"),
      rule("A collective noun (team, class, family, government) takes 'it' when it acts as one body. An animal is 'it', unless it is a pet thought of as a person.", "the team / the government → it"),
      q("The team has won the match.", "The team has won the match, hasn't it?"),
      q("The government has taken steps.", "The government has taken steps, hasn't it?"),
      q("The cow gives us milk.", "The cow gives us milk, doesn't it?"),
      q("The police have caught the thief.", "The police have caught the thief, haven't they?"),
      note("'Police', 'people' and 'cattle' are always plural, so they take 'they'."),
    ],
  },

  /* ─────────────────── Imperative & Let ─────────────────── */
  {
    id: "tag-questions-imperative-let",
    title: "Imperative & Let",
    prompt: PROMPT,
    body: [
      para("An imperative sentence (an order, a request or a piece of advice) has no subject written, but the subject is always 'you'. So its tag is built with 'you' and a modal, usually 'will'. Sentences that begin with 'Let' follow their own rule."),

      h("Imperative sentences"),
      rule("An affirmative imperative takes 'will you?' or 'won't you?'. 'Will you?' sounds like an order; 'won't you?' sounds like an invitation. 'Would you?', 'can you?' and 'could you?' make a request more polite.", "V1 … → will you? / won't you?"),
      q("Shut the door.", "Shut the door, will you?"),
      q("Open the window.", "Open the window, will you?"),
      q("Come in and sit down.", "Come in and sit down, won't you?"),
      q("Please help me.", "Please help me, will you?"),
      q("Give me a glass of water.", "Give me a glass of water, would you?"),
      rule("A negative imperative (Do not, Don't, Never) takes 'will you?' only.", "Don't / Never + V1 … → will you?"),
      q("Don't make a noise.", "Don't make a noise, will you?"),
      q("Do not waste your time.", "Do not waste your time, will you?"),
      q("Never tell a lie.", "Never tell a lie, will you?"),
      note("The SSC answer keys expect 'will you?' for every imperative unless the sentence is clearly an invitation. When in doubt, write 'will you?'."),

      h("Sentences with Let"),
      rule("'Let's' (let us, meaning 'we') is a suggestion that includes the speaker, so the tag is 'shall we?'.", "Let's + V1 → shall we?"),
      q("Let's go for a walk.", "Let's go for a walk, shall we?"),
      q("Let us play football.", "Let us play football, shall we?"),
      q("Let's not quarrel.", "Let's not quarrel, shall we?"),
      rule("'Let' that asks permission ('allow') is an order to the listener, so the tag is 'will you?'. This covers let me, let him, let her, let them, and 'let us' when it means 'allow us'.", "Let me / him / them + V1 → will you?"),
      q("Let me go.", "Let me go, will you?"),
      q("Let him do the work.", "Let him do the work, will you?"),
      q("Let them play.", "Let them play, will you?"),
      q("Let us go home, please.", "Let us go home, please, will you?"),
      note("Test 'Let us' by asking who will do the action. If the speaker and the listener will do it together, it is 'shall we?'. If the speaker is asking the listener for permission, it is 'will you?'."),
    ],
  },

  /* ─────────────── Complex, Compound & Exclamatory ─────────────── */
  {
    id: "tag-questions-long-sentences",
    title: "Complex, Compound & Exclamatory",
    prompt: PROMPT,
    body: [
      para("When a sentence has more than one clause, you must first decide which clause the tag belongs to. The tag agrees with that clause alone: its auxiliary, its subject and its sense, affirmative or negative."),

      h("Complex sentences"),
      rule("In a complex sentence the tag agrees with the principal clause, not with the subordinate clause.", "principal clause + subordinate clause → tag of principal clause"),
      q("He said that he would come.", "He said that he would come, didn't he?"),
      q("If it rains, we shall not go out.", "If it rains, we shall not go out, shall we?"),
      q("The boy who came here is my cousin.", "The boy who came here is my cousin, isn't he?"),
      q("Though he is poor, he is honest.", "Though he is poor, he is honest, isn't he?"),
      q("When I reached the station, the train had left.", "When I reached the station, the train had left, hadn't it?"),
      q("You know where he lives.", "You know where he lives, don't you?"),

      rule("After 'I think', 'I believe', 'I suppose', 'I hope', 'I feel' and 'I am sure', the real statement is in the 'that' clause, so the tag agrees with that clause. A 'not' in 'I don't think' makes the tag affirmative.", "I think + clause → tag of the clause"),
      q("I think he is a good man.", "I think he is a good man, isn't he?"),
      q("I believe you can do it.", "I believe you can do it, can't you?"),
      q("I don't think she will come.", "I don't think she will come, will she?"),
      q("I am sure you know the answer.", "I am sure you know the answer, don't you?"),
      note("This rule works only with 'I' and the present tense. 'He thinks that I am wrong' is an ordinary complex sentence: 'He thinks that I am wrong, doesn't he?'"),

      h("Compound sentences"),
      rule("In a compound sentence (clauses joined by and, but, or, so), the tag agrees with the last clause, the one nearest to it.", "clause 1 + and / but / so + clause 2 → tag of clause 2"),
      q("He is poor but he is honest.", "He is poor but he is honest, isn't he?"),
      q("I called him but he did not answer.", "I called him but he did not answer, did he?"),
      q("She worked hard and passed.", "She worked hard and passed, didn't she?"),
      q("Hurry up or you will miss the train.", "Hurry up or you will miss the train, won't you?"),

      h("Exclamatory sentences"),
      rule("An exclamatory sentence with 'What' or 'How' is an affirmative statement in disguise. Find its subject and verb (usually at the end) and add a negative tag. The exclamation mark gives way to a question mark.", "What a / How + … + S + be! → …, isn't / aren't + S?"),
      q("What a beautiful bird it is!", "What a beautiful bird it is, isn't it?"),
      q("How nice the flower is!", "How nice the flower is, isn't it?"),
      q("What a fool he is!", "What a fool he is, isn't he?"),
      q("How fast the horse runs!", "How fast the horse runs, doesn't it?"),
      rule("An interjection (Alas, Hurrah, Oh, Bravo) does not affect the tag. Leave it in place and tag the statement that follows.", "Alas! + statement → Alas! + statement + tag"),
      q("Alas! He is no more.", "Alas! He is no more, is he?"),
      q("Hurrah! We have won the game.", "Hurrah! We have won the game, haven't we?"),

      h("Wishes and prayers"),
      rule("'I wish to' + V1 is a polite way of asking to be allowed, so the tag is 'may I?'.", "I wish to + V1 → may I?"),
      q("I wish to see the Headmaster.", "I wish to see the Headmaster, may I?"),
      q("I wish to leave early today.", "I wish to leave early today, may I?"),
    ],
  },

  /* ───────────────────── Exceptional Cases ───────────────────── */
  {
    id: "tag-questions-exceptional",
    title: "Exceptional Cases & Common Mistakes",
    prompt: PROMPT,
    body: [
      para("These are the sentences where students lose marks most often. Each shows the mistake beside the correct answer, followed by a short list of rules to check before you write."),

      h("Common mistakes"),
      wr("He is a doctor, is not he?", "He is a doctor, isn't he?"),
      note("A negative tag is always contracted."),
      wr("Rina can dance, can't Rina?", "Rina can dance, can't she?"),
      note("The tag takes a pronoun, never the noun again."),
      wr("He went home, doesn't he?", "He went home, didn't he?"),
      note("The tag keeps the tense of the statement."),
      wr("I am right, amn't I?", "I am right, aren't I?"),
      wr("He never smokes, doesn't he?", "He never smokes, does he?"),
      note("'Never' already makes the statement negative."),
      wr("Few boys came, didn't they?", "Few boys came, did they?"),
      wr("A few boys came, did they?", "A few boys came, didn't they?"),
      wr("Everybody was happy, wasn't he?", "Everybody was happy, weren't they?"),
      wr("Let's go, will you?", "Let's go, shall we?"),
      wr("Don't go there, won't you?", "Don't go there, will you?"),
      wr("He is unkind, is he?", "He is unkind, isn't he?"),
      note("'Unkind' is negative only in meaning; the statement has no negative word, so the tag is negative."),
      wr("She has been ill, isn't she?", "She has been ill, hasn't she?"),
      note("The tag takes the first auxiliary, 'has', not 'been'."),
      wr("He said that he was ill, wasn't he?", "He said that he was ill, didn't he?"),
      note("The tag agrees with the principal clause 'He said'."),

      h("More sentences worth knowing"),
      q("Only Rahim can solve the problem.", "Only Rahim can solve the problem, can't he?"),
      q("All of us were present.", "All of us were present, weren't we?"),
      q("No sooner had he seen me than he ran away.", "No sooner had he seen me than he ran away, didn't he?"),
      q("Not only he but also his friends were present.", "Not only he but also his friends were present, weren't they?"),
      q("It is not too late.", "It is not too late, is it?"),
      q("It is high time we left.", "It is high time we left, isn't it?"),
      q("The rich are not always happy.", "The rich are not always happy, are they?"),
      q("Bangladesh is a riverine country.", "Bangladesh is a riverine country, isn't it?"),
      q("The earth moves round the sun.", "The earth moves round the sun, doesn't it?"),
      note("With 'no sooner … than', 'hardly … when', 'not only … but also', read the main verb carefully: 'No sooner had he seen me' is not a negative statement — it means 'as soon as he saw me'."),

      h("Before you write, check"),
      para("1. Is there a comma before the tag and a question mark at the end?"),
      para("2. Is the negative tag contracted (isn't, don't, won't)?"),
      para("3. Is the tag's auxiliary the first auxiliary of the principal clause, in the same tense?"),
      para("4. Is the subject a pronoun, and the right one (everybody → they, nothing → it, this → it, there → there)?"),
      para("5. Did you spot a hidden negative (never, hardly, few, little, nobody) that makes the tag affirmative?"),
    ],
  },

  /* ──────────────────────── Practice sets ──────────────────────── */
  {
    id: "tag-questions-set-1",
    title: "Practice Set 1",
    prompt: PROMPT,
    body: [
      para("(a) You are a student. (b) He does not go to school. (c) Let's play cricket. (d) Nobody came to help him. (e) I am your teacher. (f) She can speak English. (g) Shut the door. (h) There is a pond near our house. (i) Few men are free from faults. (j) Everybody loves flowers."),
      h("Answers"),
      s("(a)", "You are a student, aren't you?", "Affirmative 'are' → negative 'aren't'."),
      s("(b)", "He does not go to school, does he?", "The statement is negative, so the tag is affirmative 'does'."),
      s("(c)", "Let's play cricket, shall we?", "'Let's' is a suggestion that includes the speaker."),
      s("(d)", "Nobody came to help him, did they?", "'Nobody' is negative and takes 'they'; 'came' is past, so 'did'."),
      s("(e)", "I am your teacher, aren't I?", "'I am' takes 'aren't I?'."),
      s("(f)", "She can speak English, can't she?", "The modal 'can' is repeated in the negative."),
      s("(g)", "Shut the door, will you?", "An imperative takes 'will you?'."),
      s("(h)", "There is a pond near our house, isn't there?", "'There' is kept in the tag."),
      s("(i)", "Few men are free from faults, are they?", "'Few' means 'almost none', so the statement is negative."),
      s("(j)", "Everybody loves flowers, don't they?", "'Everybody' takes 'they', so the plural 'don't'."),
    ],
  },
  {
    id: "tag-questions-set-2",
    title: "Practice Set 2",
    prompt: PROMPT,
    body: [
      para("(a) He used to walk every morning. (b) Nothing is impossible for him. (c) Don't be late. (d) I think she is right. (e) She hardly visits her village. (f) This is a very good book. (g) We had better leave now. (h) They have a big house. (i) He said that he would help me. (j) A little learning is a dangerous thing."),
      h("Answers"),
      s("(a)", "He used to walk every morning, didn't he?", "'Used to' takes 'didn't'."),
      s("(b)", "Nothing is impossible for him, is it?", "'Nothing' is negative and takes 'it'."),
      s("(c)", "Don't be late, will you?", "A negative imperative takes 'will you?' only."),
      s("(d)", "I think she is right, isn't she?", "After 'I think' the tag agrees with the 'that' clause."),
      s("(e)", "She hardly visits her village, does she?", "'Hardly' is negative in sense."),
      s("(f)", "This is a very good book, isn't it?", "'This' becomes 'it'."),
      s("(g)", "We had better leave now, hadn't we?", "'Had better' takes 'hadn't'."),
      s("(h)", "They have a big house, haven't they?", "'Have' means 'possess', so it may be repeated."),
      s("(i)", "He said that he would help me, didn't he?", "The tag agrees with the principal clause 'He said'."),
      s("(j)", "A little learning is a dangerous thing, isn't it?", "'A little' is affirmative, so the tag is negative."),
    ],
  },
  {
    id: "tag-questions-set-3",
    title: "Practice Set 3",
    prompt: PROMPT,
    body: [
      para("(a) What a lovely day it is! (b) Let me help you. (c) You and I must work together. (d) Smoking is a bad habit. (e) The police arrested the thief. (f) He never came back. (g) She's gone to the market. (h) One must keep one's promise. (i) Each of the girls got a prize. (j) He is poor but he is happy."),
      h("Answers"),
      s("(a)", "What a lovely day it is, isn't it?", "An exclamatory sentence is an affirmative statement; the verb is 'is'."),
      s("(b)", "Let me help you, will you?", "'Let me' asks permission, so 'will you?'."),
      s("(c)", "You and I must work together, mustn't we?", "'You and I' becomes 'we'."),
      s("(d)", "Smoking is a bad habit, isn't it?", "A gerund subject becomes 'it'."),
      s("(e)", "The police arrested the thief, didn't they?", "'Police' is always plural; 'arrested' is past."),
      s("(f)", "He never came back, did he?", "'Never' makes the statement negative."),
      s("(g)", "She's gone to the market, hasn't she?", "''s' before V3 'gone' is 'has'."),
      s("(h)", "One must keep one's promise, mustn't one?", "'One' is kept as 'one'; 'must' of duty takes 'mustn't'."),
      s("(i)", "Each of the girls got a prize, didn't they?", "'Each' for people takes 'they'."),
      s("(j)", "He is poor but he is happy, isn't he?", "In a compound sentence the tag agrees with the last clause."),
    ],
  },
  {
    id: "tag-questions-set-4",
    title: "Practice Set 4: Passage",
    prompt: PROMPT,
    body: [
      para("The board often sets the five sentences as a short passage on one topic. Tag each sentence on its own, as if it stood alone."),
      h("Passage A — The Liberation War"),
      para("(a) The Liberation War took place in 1971. (b) Our freedom fighters fought bravely. (c) Nobody can forget their sacrifice. (d) We should remember them with respect. (e) Let's pay tribute to the martyrs."),
      s("(a)", "The Liberation War took place in 1971, didn't it?", "'Took' is past; 'the Liberation War' is 'it'."),
      s("(b)", "Our freedom fighters fought bravely, didn't they?", "Plural subject, past tense."),
      s("(c)", "Nobody can forget their sacrifice, can they?", "'Nobody' is negative and takes 'they'."),
      s("(d)", "We should remember them with respect, shouldn't we?", "The modal 'should' is repeated."),
      s("(e)", "Let's pay tribute to the martyrs, shall we?", "'Let's' takes 'shall we?'."),
      h("Passage B — Books"),
      para("(a) Books are our best friends. (b) A good book never deceives us. (c) Reading books widens our knowledge. (d) Few students read books other than their textbooks. (e) Make a habit of reading good books."),
      s("(a)", "Books are our best friends, aren't they?", "Plural subject with 'are'."),
      s("(b)", "A good book never deceives us, does it?", "'Never' is negative; 'a book' is 'it' and the verb is present singular."),
      s("(c)", "Reading books widens our knowledge, doesn't it?", "A gerund subject is 'it'; 'widens' is present singular."),
      s("(d)", "Few students read books other than their textbooks, do they?", "'Few' is negative; 'students' is plural and present."),
      s("(e)", "Make a habit of reading good books, will you?", "An imperative takes 'will you?'."),
      h("Passage C — Mobile Phones"),
      para("(a) The mobile phone has made our life easy. (b) We can talk to anyone from anywhere. (c) But some students waste their time on it. (d) There is hardly any family without a mobile phone. (e) I think we must use it wisely."),
      s("(a)", "The mobile phone has made our life easy, hasn't it?", "The auxiliary 'has' is repeated."),
      s("(b)", "We can talk to anyone from anywhere, can't we?", "'Anyone' here is not the subject; the subject is 'we'."),
      s("(c)", "But some students waste their time on it, don't they?", "Plural subject, present tense; the opening 'But' does not affect the tag."),
      s("(d)", "There is hardly any family without a mobile phone, is there?", "'Hardly' is negative; 'there' is kept."),
      s("(e)", "I think we must use it wisely, mustn't we?", "After 'I think' the tag agrees with the clause 'we must use it'."),
    ],
  },
];
