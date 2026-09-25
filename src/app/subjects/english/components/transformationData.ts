// components/transformationData.ts
//
// Transformation of Sentences, one piece per kind of change the board asks
// for. Each piece gives the rules in order and then works each rule through
// examples, so a student can learn the rule and see it applied side by side.

import type { Block, Piece } from "./englishData";

const h = (text: string): Block => ({ type: "heading", text });
const rule = (text: string, formula?: string): Block => ({
  type: "rule",
  text,
  formula,
});
const note = (text: string): Block => ({ type: "note", label: "Note", text });
// One example: each argument is a [label, sentence] pair, in the order the
// sentence changes.
const ex = (...lines: [string, string][]): Block => ({
  type: "example",
  lines: lines.map(([label, text]) => ({ label, text })),
});

export const transformation: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "transformation-introduction",
    title: "Introduction",
    body: [
      {
        type: "para",
        text: "Transformation of sentences means changing a sentence from one form into another without changing its meaning. The words and the structure change, but what the sentence says must stay exactly the same. This is the one thing the examiner checks first: if the meaning changes, the answer is wrong, however good the English is.",
      },
      h("What we can change"),
      {
        type: "para",
        text: "1. Affirmative into Negative, and Negative into Affirmative.",
      },
      {
        type: "para",
        text: "2. Assertive into Interrogative, Exclamatory or Imperative, and back again.",
      },
      {
        type: "para",
        text: "3. Simple into Complex or Compound, and each of them into the others.",
      },
      {
        type: "para",
        text: "4. One degree of comparison into another: Positive, Comparative and Superlative.",
      },
      {
        type: "para",
        text: "5. Active voice into Passive voice, and Passive into Active.",
      },
      h("The kinds of sentence"),
      ex(["Assertive", "He is a good boy."]),
      ex(["Interrogative", "Is he a good boy?"]),
      ex(["Imperative", "Be a good boy."]),
      ex(["Optative", "May you be a good boy."]),
      ex(["Exclamatory", "What a good boy he is!"]),
      h("Before you begin"),
      note("Keep the tense of the sentence unchanged. A sentence in the past stays in the past after transformation."),
      note("Keep the person and the number of the subject unchanged, and make the verb agree with it."),
      note("Put the right punctuation at the end: a full stop for an assertive or imperative sentence, a question mark for an interrogative one and an exclamation mark for an exclamatory one."),
    ],
  },

  /* ─────────────────── Affirmative ↔ Negative ─────────────────── */
  {
    id: "affirmative-negative",
    title: "Affirmative ↔ Negative",
    body: [
      {
        type: "para",
        text: "An affirmative sentence says that something is so; a negative sentence says the same thing by denying its opposite. The commonest way is to put 'not' before the opposite word, but many words have a fixed negative form of their own, and those are the ones the board asks about.",
      },
      h("Affirmative into Negative"),
      rule("Put 'not' before the opposite (antonym) of the key word.", "word → not + opposite word"),
      ex(["Aff", "He is rich."], ["Neg", "He is not poor."]),
      ex(["Aff", "I remember the story."], ["Neg", "I do not forget the story."]),
      ex(["Aff", "She was present in the class."], ["Neg", "She was not absent from the class."]),
      ex(["Aff", "The work is difficult."], ["Neg", "The work is not easy."]),
      ex(["Aff", "He is a wise man."], ["Neg", "He is not a fool."]),

      rule("'Only' or 'alone' becomes 'none but' for a person, 'nothing but' for a thing and 'not more than' for a number or amount.", "only / alone → none but · nothing but · not more than"),
      ex(["Aff", "Only Rahim can solve the problem."], ["Neg", "None but Rahim can solve the problem."]),
      ex(["Aff", "God alone can help us."], ["Neg", "None but God can help us."]),
      ex(["Aff", "He has only a pen."], ["Neg", "He has nothing but a pen."]),
      ex(["Aff", "She drinks only milk."], ["Neg", "She drinks nothing but milk."]),
      ex(["Aff", "He is only ten years old."], ["Neg", "He is not more than ten years old."]),
      ex(["Aff", "I have only fifty taka."], ["Neg", "I have not more than fifty taka."]),

      rule("'Must' becomes 'cannot but' + base verb, or 'cannot help' + verb-ing.", "must → cannot but + V1 / cannot help + V-ing"),
      ex(["Aff", "We must obey our parents."], ["Neg", "We cannot but obey our parents."]),
      ex(["Aff", "You must work hard."], ["Neg", "You cannot help working hard."]),
      ex(["Aff", "He must admit his fault."], ["Neg", "He cannot but admit his fault."]),

      rule("'Always' becomes 'never' with the opposite word.", "always → never + opposite"),
      ex(["Aff", "He always speaks the truth."], ["Neg", "He never tells a lie."]),
      ex(["Aff", "She is always punctual."], ["Neg", "She is never late."]),
      ex(["Aff", "I shall always remember you."], ["Neg", "I shall never forget you."]),

      rule("'Too … to' becomes 'so … that … cannot' (or 'could not' in the past).", "too + adj + to → so + adj + that + subject + cannot"),
      ex(["Aff", "He is too weak to walk."], ["Neg", "He is so weak that he cannot walk."]),
      ex(["Aff", "The news is too good to be true."], ["Neg", "The news is so good that it cannot be true."]),
      ex(["Aff", "The box was too heavy for me to lift."], ["Neg", "The box was so heavy that I could not lift it."]),

      rule("'As soon as' becomes 'No sooner had … than' (past) or 'No sooner does … than' (present).", "as soon as → no sooner + had + subject + V3 … than"),
      ex(["Aff", "As soon as the thief saw the police, he ran away."], ["Neg", "No sooner had the thief seen the police than he ran away."]),
      ex(["Aff", "As soon as the bell rang, the students went out."], ["Neg", "No sooner had the bell rung than the students went out."]),
      ex(["Aff", "As soon as the sun rises, the birds begin to sing."], ["Neg", "No sooner does the sun rise than the birds begin to sing."]),

      rule("'Both … and' becomes 'not only … but also'. The verb then agrees with the second subject.", "both A and B → not only A but also B"),
      ex(["Aff", "Both Rina and Mina are present."], ["Neg", "Not only Rina but also Mina is present."]),
      ex(["Aff", "He is both a poet and a painter."], ["Neg", "He is not only a poet but also a painter."]),

      rule("'Every', 'everybody', 'everyone' and 'all' become 'There is no … but' or 'There is no one who does not'.", "every / all → there is no … but / there is no one who … not"),
      ex(["Aff", "Every mother loves her child."], ["Neg", "There is no mother but loves her child."]),
      ex(["Aff", "Everybody wants to be happy."], ["Neg", "There is no one who does not want to be happy."]),
      ex(["Aff", "All the students attended the meeting."], ["Neg", "None of the students was absent from the meeting."]),

      rule("'Many' becomes 'not a few'; 'much' becomes 'not a little'. And the other way round: 'a few' becomes 'not many' and 'a little' becomes 'not much'.", "many → not a few · much → not a little · a few → not many · a little → not much"),
      ex(["Aff", "He has many friends."], ["Neg", "He has not a few friends."]),
      ex(["Aff", "She has much money."], ["Neg", "She has not a little money."]),
      ex(["Aff", "I have a few books."], ["Neg", "I have not many books."]),
      ex(["Aff", "There is a little milk in the pot."], ["Neg", "There is not much milk in the pot."]),

      rule("'Sometimes' becomes 'not always'.", "sometimes → not always"),
      ex(["Aff", "He sometimes comes late."], ["Neg", "He does not always come in time."]),
      ex(["Aff", "She sometimes forgets her lessons."], ["Neg", "She does not always remember her lessons."]),

      rule("'As … as' becomes 'not less … than', or 'not' + the opposite comparative + 'than'.", "as + adj + as → not less + adj + than"),
      ex(["Aff", "Rahim is as tall as Karim."], ["Neg", "Rahim is not shorter than Karim."]),
      ex(["Aff", "Gold is as costly as ever."], ["Neg", "Gold is not less costly than ever."]),

      h("Negative into Affirmative"),
      {
        type: "para",
        text: "Every rule above works backwards as well. Take out 'not' and use the opposite word, or change the fixed negative form back into its affirmative one.",
      },
      ex(["Neg", "He is not honest."], ["Aff", "He is dishonest."]),
      ex(["Neg", "She did not forget my name."], ["Aff", "She remembered my name."]),
      ex(["Neg", "None but the brave deserve the fair."], ["Aff", "Only the brave deserve the fair."]),
      ex(["Neg", "I cannot but laugh at his words."], ["Aff", "I must laugh at his words."]),
      ex(["Neg", "No sooner had he reached the station than the train left."], ["Aff", "As soon as he reached the station, the train left."]),
      ex(["Neg", "He is so poor that he cannot buy a shirt."], ["Aff", "He is too poor to buy a shirt."]),
      ex(["Neg", "He never fails to keep his promise."], ["Aff", "He always keeps his promise."]),
      ex(["Neg", "There is no one who does not love flowers."], ["Aff", "Everyone loves flowers."]),
    ],
  },

  /* ───────────────── Assertive ↔ Interrogative ───────────────── */
  {
    id: "assertive-interrogative",
    title: "Assertive ↔ Interrogative",
    body: [
      {
        type: "para",
        text: "An assertive sentence is turned into a question that expects the same answer. So an affirmative statement becomes a negative question ('Isn't he honest?' — yes, he is), and a negative statement becomes an affirmative question ('Is he a fool?' — no, he is not).",
      },
      h("Assertive into Interrogative"),
      rule("An affirmative assertive sentence becomes a negative question. Bring the auxiliary verb before the subject and add 'not' (usually shortened to n't).", "affirmative → auxiliary + n't + subject … ?"),
      ex(["Assertive", "He is honest."], ["Interrogative", "Isn't he honest?"]),
      ex(["Assertive", "You can do it."], ["Interrogative", "Can't you do it?"]),
      ex(["Assertive", "She was very kind to us."], ["Interrogative", "Wasn't she very kind to us?"]),
      ex(["Assertive", "Everyone has a duty to the country."], ["Interrogative", "Hasn't everyone a duty to the country?"]),

      rule("A negative assertive sentence becomes an affirmative question. Drop 'not' and bring the auxiliary before the subject.", "negative → auxiliary + subject … ?"),
      ex(["Assertive", "He is not a fool."], ["Interrogative", "Is he a fool?"]),
      ex(["Assertive", "You cannot trust a liar."], ["Interrogative", "Can you trust a liar?"]),
      ex(["Assertive", "It was not a good idea."], ["Interrogative", "Was it a good idea?"]),

      rule("When there is no auxiliary verb, use 'do', 'does' or 'did' according to the tense and put the main verb in its base form.", "V1 / V5 → do / does + subject + V1 · V2 → did + subject + V1"),
      ex(["Assertive", "He plays football every day."], ["Interrogative", "Doesn't he play football every day?"]),
      ex(["Assertive", "They helped the poor."], ["Interrogative", "Didn't they help the poor?"]),
      ex(["Assertive", "He did not come to school."], ["Interrogative", "Did he come to school?"]),
      ex(["Assertive", "The flowers smell sweet."], ["Interrogative", "Don't the flowers smell sweet?"]),

      rule("'Never' becomes 'ever'.", "never → ever"),
      ex(["Assertive", "I shall never forget you."], ["Interrogative", "Shall I ever forget you?"]),
      ex(["Assertive", "He never tells a lie."], ["Interrogative", "Does he ever tell a lie?"]),
      ex(["Assertive", "I never saw such a beautiful scene."], ["Interrogative", "Did I ever see such a beautiful scene?"]),

      rule("'Everybody', 'everyone' and 'all' become 'Who … not'.", "everybody / all → who + auxiliary + not …?"),
      ex(["Assertive", "Everybody loves his country."], ["Interrogative", "Who does not love his country?"]),
      ex(["Assertive", "Everyone wants to be happy."], ["Interrogative", "Who does not want to be happy?"]),
      ex(["Assertive", "All know the value of time."], ["Interrogative", "Who does not know the value of time?"]),

      rule("'Nobody', 'no one' and 'none' become 'Who'.", "nobody / none → who …?"),
      ex(["Assertive", "Nobody trusts a liar."], ["Interrogative", "Who trusts a liar?"]),
      ex(["Assertive", "No one can do it."], ["Interrogative", "Who can do it?"]),
      ex(["Assertive", "None could answer the question."], ["Interrogative", "Who could answer the question?"]),

      rule("'Nothing' becomes 'What'; 'nowhere' becomes 'Where'.", "nothing → what · nowhere → where"),
      ex(["Assertive", "There is nothing to fear."], ["Interrogative", "What is there to fear?"]),
      ex(["Assertive", "I have nothing to say."], ["Interrogative", "What have I to say?"]),
      ex(["Assertive", "Such a man can be found nowhere."], ["Interrogative", "Where can such a man be found?"]),

      rule("'It is no use' or 'There is no use' becomes 'What is the use of'.", "it is no use → what is the use of …?"),
      ex(["Assertive", "It is no use crying over spilt milk."], ["Interrogative", "What is the use of crying over spilt milk?"]),
      ex(["Assertive", "There is no use in going there now."], ["Interrogative", "What is the use of going there now?"]),

      rule("'It does not matter' becomes 'What does it matter'.", "it does not matter → what does it matter …?"),
      ex(["Assertive", "It does not matter if he fails."], ["Interrogative", "What does it matter if he fails?"]),
      ex(["Assertive", "It did not matter whether he came or not."], ["Interrogative", "What did it matter whether he came or not?"]),

      h("Interrogative into Assertive"),
      {
        type: "para",
        text: "Work the same rules backwards: a negative question becomes an affirmative statement, an affirmative question becomes a negative statement, 'ever' becomes 'never', 'Who' becomes 'nobody' or 'everybody', and 'What' becomes 'nothing'.",
      },
      ex(["Interrogative", "Isn't honesty the best policy?"], ["Assertive", "Honesty is the best policy."]),
      ex(["Interrogative", "Can a leopard change its spots?"], ["Assertive", "A leopard cannot change its spots."]),
      ex(["Interrogative", "Did he ever tell a lie?"], ["Assertive", "He never told a lie."]),
      ex(["Interrogative", "Who does not want to be rich?"], ["Assertive", "Everybody wants to be rich."]),
      ex(["Interrogative", "Who can resist temptation?"], ["Assertive", "Nobody can resist temptation."]),
      ex(["Interrogative", "What is there to worry about?"], ["Assertive", "There is nothing to worry about."]),
      ex(["Interrogative", "What is the use of reading without understanding?"], ["Assertive", "It is no use reading without understanding."]),
    ],
  },

  /* ───────────────── Exclamatory ↔ Assertive ───────────────── */
  {
    id: "exclamatory-assertive",
    title: "Exclamatory ↔ Assertive",
    body: [
      {
        type: "para",
        text: "An exclamatory sentence expresses a sudden, strong feeling: joy, sorrow, surprise or a wish. To make it assertive, keep the feeling but say it plainly, using words such as 'very', 'great', 'a matter of joy' or 'I wish'.",
      },
      h("Exclamatory into Assertive"),
      rule("'How' + adjective or adverb becomes 'very' + adjective or adverb.", "How + adj → very + adj"),
      ex(["Exclamatory", "How beautiful the flower is!"], ["Assertive", "The flower is very beautiful."]),
      ex(["Exclamatory", "How fast the horse runs!"], ["Assertive", "The horse runs very fast."]),
      ex(["Exclamatory", "How cold the night was!"], ["Assertive", "The night was very cold."]),
      ex(["Exclamatory", "How sweetly the bird sings!"], ["Assertive", "The bird sings very sweetly."]),

      rule("'What a' + adjective + noun becomes 'a very' + adjective + noun.", "What a + adj + noun → a very + adj + noun"),
      ex(["Exclamatory", "What a beautiful bird it is!"], ["Assertive", "It is a very beautiful bird."]),
      ex(["Exclamatory", "What a nice day it is!"], ["Assertive", "It is a very nice day."]),
      ex(["Exclamatory", "What a pleasant journey we had!"], ["Assertive", "We had a very pleasant journey."]),

      rule("'What a' + noun (with no adjective) becomes 'a great' + noun.", "What a + noun → a great + noun"),
      ex(["Exclamatory", "What a fool he is!"], ["Assertive", "He is a great fool."]),
      ex(["Exclamatory", "What a genius Rabindranath was!"], ["Assertive", "Rabindranath was a great genius."]),
      ex(["Exclamatory", "What a pity!"], ["Assertive", "It is a great pity."]),

      rule("'Alas' becomes 'It is a matter of sorrow that' or 'I am sorry that'.", "Alas! → it is a matter of sorrow that"),
      ex(["Exclamatory", "Alas! He is dead."], ["Assertive", "It is a matter of sorrow that he is dead."]),
      ex(["Exclamatory", "Alas! I have lost my purse."], ["Assertive", "I am sorry that I have lost my purse."]),
      ex(["Exclamatory", "Alas! The poor boy failed."], ["Assertive", "It is a matter of sorrow that the poor boy failed."]),

      rule("'Hurrah' becomes 'It is a matter of joy that'.", "Hurrah! → it is a matter of joy that"),
      ex(["Exclamatory", "Hurrah! We have won the game."], ["Assertive", "It is a matter of joy that we have won the game."]),
      ex(["Exclamatory", "Hurrah! Our team is the champion."], ["Assertive", "It is a matter of joy that our team is the champion."]),

      rule("'Bravo' becomes 'It is a matter of praise that'.", "Bravo! → it is a matter of praise that"),
      ex(["Exclamatory", "Bravo! You have done well."], ["Assertive", "It is a matter of praise that you have done well."]),

      rule("'Would that', 'O that', 'If' and 'Had I' — all wishes — become 'I wish'.", "Would that / O that / If / Had I → I wish"),
      ex(["Exclamatory", "Would that I were a bird!"], ["Assertive", "I wish I were a bird."]),
      ex(["Exclamatory", "O that I could be young again!"], ["Assertive", "I wish I could be young again."]),
      ex(["Exclamatory", "If I were a king!"], ["Assertive", "I wish I were a king."]),
      ex(["Exclamatory", "Had I the wings of a bird!"], ["Assertive", "I wish I had the wings of a bird."]),
      ex(["Exclamatory", "Would that my mother were alive!"], ["Assertive", "I wish my mother were alive."]),

      h("Assertive into Exclamatory"),
      {
        type: "para",
        text: "Reverse the rules: 'very' + adjective becomes 'How' + adjective, 'a very' + adjective + noun becomes 'What a' + adjective + noun, 'a great' + noun becomes 'What a' + noun, and 'I wish' becomes 'Would that' or 'If'. The subject and verb go to the end.",
      },
      ex(["Assertive", "The scenery is very charming."], ["Exclamatory", "How charming the scenery is!"]),
      ex(["Assertive", "It was a very terrible accident."], ["Exclamatory", "What a terrible accident it was!"]),
      ex(["Assertive", "He is a great liar."], ["Exclamatory", "What a liar he is!"]),
      ex(["Assertive", "It is a matter of joy that you have come."], ["Exclamatory", "Hurrah! You have come."]),
      ex(["Assertive", "It is very sad that the child is lost."], ["Exclamatory", "Alas! The child is lost."]),
      ex(["Assertive", "I wish I could see my village again."], ["Exclamatory", "Would that I could see my village again!"]),
    ],
  },

  /* ──────────────── Imperative ↔ Assertive ──────────────── */
  {
    id: "imperative-assertive",
    title: "Imperative ↔ Assertive",
    body: [
      {
        type: "para",
        text: "An imperative sentence gives an order, advice or a request, and its subject 'you' is understood. To make it assertive, bring the subject back and say what kind of command it is: 'You are ordered to', 'You should', 'You are requested to'.",
      },
      h("Imperative into Assertive"),
      rule("An order becomes 'You are ordered to' + base verb.", "order → you are ordered to + V1"),
      ex(["Imperative", "Shut the door."], ["Assertive", "You are ordered to shut the door."]),
      ex(["Imperative", "Get out of the room."], ["Assertive", "You are ordered to get out of the room."]),
      ex(["Imperative", "Stand up."], ["Assertive", "You are ordered to stand up."]),

      rule("Advice becomes 'You should' + base verb.", "advice → you should + V1"),
      ex(["Imperative", "Always speak the truth."], ["Assertive", "You should always speak the truth."]),
      ex(["Imperative", "Obey your teachers."], ["Assertive", "You should obey your teachers."]),
      ex(["Imperative", "Be kind to animals."], ["Assertive", "You should be kind to animals."]),

      rule("A request with 'please' or 'kindly' becomes 'You are requested to'.", "please / kindly → you are requested to + V1"),
      ex(["Imperative", "Please help me."], ["Assertive", "You are requested to help me."]),
      ex(["Imperative", "Kindly lend me your pen."], ["Assertive", "You are requested to lend me your pen."]),

      rule("'Do not' becomes 'You should not'; 'Never' becomes 'You should never'. A strict prohibition can become 'You are forbidden to'.", "do not → you should not · never → you should never"),
      ex(["Imperative", "Do not run in the sun."], ["Assertive", "You should not run in the sun."]),
      ex(["Imperative", "Never tell a lie."], ["Assertive", "You should never tell a lie."]),
      ex(["Imperative", "Do not smoke here."], ["Assertive", "You are forbidden to smoke here."]),

      rule("'Let us' becomes 'We should' or 'I propose that we'. 'Let him' or 'Let them' becomes 'He should be allowed to' or 'They should be allowed to'.", "let us → we should · let him → he should be allowed to"),
      ex(["Imperative", "Let us go out for a walk."], ["Assertive", "We should go out for a walk."]),
      ex(["Imperative", "Let us help the flood victims."], ["Assertive", "I propose that we help the flood victims."]),
      ex(["Imperative", "Let him play in the field."], ["Assertive", "He should be allowed to play in the field."]),

      h("Imperative into Interrogative"),
      rule("An imperative sentence can also become a polite question with 'Will you' or 'Won't you'.", "V1 … → will you + V1 …?"),
      ex(["Imperative", "Open the window."], ["Interrogative", "Will you open the window?"]),
      ex(["Imperative", "Please help me."], ["Interrogative", "Will you please help me?"]),
      ex(["Imperative", "Come with me."], ["Interrogative", "Won't you come with me?"]),

      h("Assertive into Imperative"),
      ex(["Assertive", "You should respect your elders."], ["Imperative", "Respect your elders."]),
      ex(["Assertive", "You are requested to take a seat."], ["Imperative", "Please take a seat."]),
      ex(["Assertive", "You should not waste time."], ["Imperative", "Do not waste time."]),
      ex(["Assertive", "We should start now."], ["Imperative", "Let us start now."]),
    ],
  },

  /* ──────────────── Simple, Complex & Compound ──────────────── */
  {
    id: "simple-complex-compound",
    title: "Simple, Complex & Compound",
    body: [
      {
        type: "para",
        text: "A simple sentence has one subject and one finite verb. A complex sentence has one principal clause and one or more subordinate clauses joined by words such as 'when', 'as', 'since', 'though', 'if', 'that', 'who' or 'which'. A compound sentence has two or more principal clauses joined by 'and', 'but', 'or', 'so' or 'yet'.",
      },
      ex(["Simple", "Being ill, he could not come."], ["Complex", "As he was ill, he could not come."], ["Compound", "He was ill and so he could not come."]),

      h("Simple into Complex"),
      rule("A participle (verb-ing) or 'Having' + past participle becomes a clause with 'As', 'Since' or 'When'.", "being / having + V3 → as / since / when + clause"),
      ex(["Simple", "Being ill, he could not attend the class."], ["Complex", "As he was ill, he could not attend the class."]),
      ex(["Simple", "Having finished the work, he went home."], ["Complex", "When he had finished the work, he went home."]),
      ex(["Simple", "Seeing the tiger, the boy ran away."], ["Complex", "When the boy saw the tiger, he ran away."]),

      rule("'Too … to' becomes 'so … that … cannot'.", "too … to → so … that … cannot"),
      ex(["Simple", "He is too weak to walk."], ["Complex", "He is so weak that he cannot walk."]),
      ex(["Simple", "The tea was too hot to drink."], ["Complex", "The tea was so hot that it could not be drunk."]),

      rule("'In spite of' or 'Despite' becomes 'Though' or 'Although'.", "in spite of → though + clause"),
      ex(["Simple", "In spite of being poor, he is honest."], ["Complex", "Though he is poor, he is honest."]),
      ex(["Simple", "Despite the heavy rain, we went out."], ["Complex", "Although it rained heavily, we went out."]),

      rule("'To' or 'in order to' (showing purpose) becomes 'so that … may' (present) or 'so that … might' (past).", "to / in order to → so that + subject + may / might"),
      ex(["Simple", "He works hard to shine in life."], ["Complex", "He works hard so that he may shine in life."]),
      ex(["Simple", "She ran fast in order to catch the train."], ["Complex", "She ran fast so that she might catch the train."]),

      rule("'Without' + verb-ing becomes 'If … not' or 'Unless'.", "without + V-ing → if … not / unless"),
      ex(["Simple", "Without working hard, you cannot succeed."], ["Complex", "If you do not work hard, you cannot succeed."]),
      ex(["Simple", "Without taking exercise, you cannot keep fit."], ["Complex", "Unless you take exercise, you cannot keep fit."]),

      rule("'By' + verb-ing becomes 'If'.", "by + V-ing → if + clause"),
      ex(["Simple", "By working hard, you can pass."], ["Complex", "If you work hard, you can pass."]),

      rule("'At the time of', 'On' + verb-ing and 'After' + noun become a clause with 'When'.", "at the time of / on + V-ing → when + clause"),
      ex(["Simple", "At the time of my arrival, he was sleeping."], ["Complex", "When I arrived, he was sleeping."]),
      ex(["Simple", "On hearing the news, she began to cry."], ["Complex", "When she heard the news, she began to cry."]),

      rule("'Because of' or 'Due to' becomes 'Because' or 'As' + clause.", "because of + noun → because + clause"),
      ex(["Simple", "He could not come because of his illness."], ["Complex", "He could not come because he was ill."]),
      ex(["Simple", "The match was postponed due to rain."], ["Complex", "The match was postponed because it rained."]),

      rule("An adjective or a phrase describing a noun becomes a relative clause with 'who', 'which' or 'that'.", "adjective / phrase → who / which / that + clause"),
      ex(["Simple", "I saw a wounded bird."], ["Complex", "I saw a bird which was wounded."]),
      ex(["Simple", "A blind man cannot see."], ["Complex", "A man who is blind cannot see."]),
      ex(["Simple", "The man sitting there is my uncle."], ["Complex", "The man who is sitting there is my uncle."]),

      rule("A noun or an object phrase becomes a noun clause with 'that', 'what', 'where' or 'how'.", "noun / phrase → that / what / where + clause"),
      ex(["Simple", "I know him to be honest."], ["Complex", "I know that he is honest."]),
      ex(["Simple", "He admitted his guilt."], ["Complex", "He admitted that he was guilty."]),
      ex(["Simple", "Tell me your address."], ["Complex", "Tell me where you live."]),
      ex(["Simple", "His success is certain."], ["Complex", "It is certain that he will succeed."]),

      h("Simple into Compound"),
      rule("A participle becomes a separate verb joined by 'and'.", "V-ing / having + V3 → V2 + and"),
      ex(["Simple", "Taking the book, he went away."], ["Compound", "He took the book and went away."]),
      ex(["Simple", "Having finished his lunch, he went to bed."], ["Compound", "He finished his lunch and went to bed."]),

      rule("'In spite of' becomes 'but' or 'yet'.", "in spite of → but / yet"),
      ex(["Simple", "In spite of being poor, he is honest."], ["Compound", "He is poor but honest."]),
      ex(["Simple", "In spite of his hard work, he failed."], ["Compound", "He worked hard, yet he failed."]),

      rule("'Too … to' becomes 'very … and cannot'.", "too … to → very … and so … cannot"),
      ex(["Simple", "He is too weak to walk."], ["Compound", "He is very weak and so he cannot walk."]),

      rule("'Being', 'because of' or 'due to' becomes 'and so' or 'and therefore'.", "being / because of → and so / and therefore"),
      ex(["Simple", "Being ill, he could not come."], ["Compound", "He was ill and so he could not come."]),
      ex(["Simple", "Because of the rain, the match was not played."], ["Compound", "It rained and therefore the match was not played."]),

      rule("'Without' + verb-ing becomes an order joined by 'or'.", "without + V-ing → V1 … or"),
      ex(["Simple", "Without working hard, you will fail."], ["Compound", "Work hard, or you will fail."]),

      rule("'By' + verb-ing becomes an order joined by 'and'.", "by + V-ing → V1 … and"),
      ex(["Simple", "By working hard, you will succeed."], ["Compound", "Work hard and you will succeed."]),

      rule("'Besides' or 'In addition to' becomes 'not only … but also'.", "besides → not only … but also"),
      ex(["Simple", "Besides being a poet, he was a painter."], ["Compound", "He was not only a poet but also a painter."]),

      h("Complex into Compound"),
      rule("'If' becomes 'and'; 'If … not' or 'Unless' becomes 'or'.", "if → and · if … not / unless → or"),
      ex(["Complex", "If you work hard, you will succeed."], ["Compound", "Work hard and you will succeed."]),
      ex(["Complex", "Unless you hurry, you will miss the bus."], ["Compound", "Hurry up, or you will miss the bus."]),

      rule("'Though' or 'Although' becomes 'but' or 'yet'.", "though → but / yet"),
      ex(["Complex", "Though he is rich, he is not happy."], ["Compound", "He is rich but he is not happy."]),

      rule("'As', 'Since' or 'Because' becomes 'and so' or 'and therefore'.", "as / since / because → and so"),
      ex(["Complex", "As he was ill, he did not go to school."], ["Compound", "He was ill and so he did not go to school."]),

      rule("'When' or 'After' becomes 'and'.", "when / after → and"),
      ex(["Complex", "When he saw me, he ran away."], ["Compound", "He saw me and ran away."]),

      h("One sentence, three ways"),
      ex(["Simple", "In spite of his poverty, he is happy."], ["Complex", "Though he is poor, he is happy."], ["Compound", "He is poor, but he is happy."]),
      ex(["Simple", "Seeing the police, the thief fled."], ["Complex", "When the thief saw the police, he fled."], ["Compound", "The thief saw the police and fled."]),
      ex(["Simple", "Without reading attentively, you cannot learn."], ["Complex", "If you do not read attentively, you cannot learn."], ["Compound", "Read attentively, or you cannot learn."]),
      ex(["Simple", "He is too old to work."], ["Complex", "He is so old that he cannot work."], ["Compound", "He is very old and so he cannot work."]),
    ],
  },

  /* ──────────────── Degree of Comparison ──────────────── */
  {
    id: "degree-of-comparison",
    title: "Degree of Comparison",
    body: [
      {
        type: "para",
        text: "An adjective has three degrees: Positive (good, tall), Comparative (better, taller) and Superlative (best, tallest). A sentence in one degree can be rewritten in the other two with the same meaning.",
      },
      h("Superlative → Comparative → Positive"),
      rule("'The' + superlative becomes comparative + 'than any other', and then 'No other … so / as … as'.", "the + superlative → comparative + than any other → no other … as + positive + as"),
      ex(["Superlative", "Rahim is the best boy in the class."], ["Comparative", "Rahim is better than any other boy in the class."], ["Positive", "No other boy in the class is as good as Rahim."]),
      ex(["Superlative", "Mount Everest is the highest peak in the world."], ["Comparative", "Mount Everest is higher than any other peak in the world."], ["Positive", "No other peak in the world is as high as Mount Everest."]),
      ex(["Superlative", "The Padma is the widest river in Bangladesh."], ["Comparative", "The Padma is wider than any other river in Bangladesh."], ["Positive", "No other river in Bangladesh is as wide as the Padma."]),
      ex(["Superlative", "Iron is the most useful of all metals."], ["Comparative", "Iron is more useful than any other metal."], ["Positive", "No other metal is as useful as iron."]),

      rule("'One of the' + superlative becomes comparative + 'than most other', and then 'Very few … as … as'.", "one of the + superlative → comparative + than most other → very few … as + positive + as"),
      ex(["Superlative", "Dhaka is one of the biggest cities in Asia."], ["Comparative", "Dhaka is bigger than most other cities in Asia."], ["Positive", "Very few cities in Asia are as big as Dhaka."]),
      ex(["Superlative", "Shakespeare is one of the greatest poets in the world."], ["Comparative", "Shakespeare is greater than most other poets in the world."], ["Positive", "Very few poets in the world are as great as Shakespeare."]),

      rule("'Not the' + superlative becomes 'some other … are' + comparative, and then 'not so / as … as some other'.", "not the + superlative → some other … + comparative + than → not as + positive + as some other"),
      ex(["Superlative", "He is not the best student of the class."], ["Comparative", "Some other students of the class are better than he."], ["Positive", "He is not as good as some other students of the class."]),

      h("Comparative ↔ Positive (two things)"),
      rule("When two things are compared, swap them round and use 'not so / as … as'.", "A is + comparative + than B → B is not so + positive + as A"),
      ex(["Comparative", "Rahim is taller than Karim."], ["Positive", "Karim is not so tall as Rahim."]),
      ex(["Comparative", "Gold is costlier than silver."], ["Positive", "Silver is not so costly as gold."]),
      ex(["Comparative", "The elephant is stronger than the horse."], ["Positive", "The horse is not so strong as the elephant."]),

      rule("'As … as' becomes 'not' + comparative + 'than', again swapping the two things round.", "A is as + positive + as B → B is not + comparative + than A"),
      ex(["Positive", "Rahim is as tall as Karim."], ["Comparative", "Karim is not taller than Rahim."]),
      ex(["Positive", "Rima is as intelligent as her sister."], ["Comparative", "Her sister is not more intelligent than Rima."]),

      h("Mind the special words"),
      note("Irregular adjectives change their whole form: good / well → better → best; bad → worse → worst; many / much → more → most; little → less → least; far → farther → farthest."),
      note("Adjectives of three or more syllables take 'more' and 'most': beautiful → more beautiful → most beautiful."),
      note("'Any other' is always followed by a singular noun; 'most other' and 'very few' by a plural one."),
      ex(["Superlative", "This is the worst road in the town."], ["Comparative", "This road is worse than any other road in the town."], ["Positive", "No other road in the town is as bad as this."]),
      ex(["Superlative", "She is the most beautiful girl in the village."], ["Comparative", "She is more beautiful than any other girl in the village."], ["Positive", "No other girl in the village is as beautiful as she."]),
    ],
  },

  /* ──────────────── Active ↔ Passive Voice ──────────────── */
  {
    id: "active-passive-voice",
    title: "Active ↔ Passive Voice",
    body: [
      {
        type: "para",
        text: "In the active voice the subject does the work: 'Rina writes a letter.' In the passive voice the work is done to the subject: 'A letter is written by Rina.' Only a verb that has an object (a transitive verb) can be put into the passive.",
      },
      h("The general rule"),
      rule("The object of the active sentence becomes the subject; the verb becomes the right form of 'be' + past participle; the subject goes after 'by' in its object form.", "S + V + O → O + be + V3 + by + S"),
      note("Change the pronouns into their object form after 'by': I → me, we → us, he → him, she → her, they → them."),

      h("Tense by tense"),
      rule("Present indefinite: am / is / are + V3.", "am / is / are + V3"),
      ex(["Active", "He writes a letter."], ["Passive", "A letter is written by him."]),
      ex(["Active", "They play football."], ["Passive", "Football is played by them."]),

      rule("Present continuous: am / is / are + being + V3.", "am / is / are + being + V3"),
      ex(["Active", "She is singing a song."], ["Passive", "A song is being sung by her."]),
      ex(["Active", "They are building a bridge."], ["Passive", "A bridge is being built by them."]),

      rule("Present perfect: has / have + been + V3.", "has / have + been + V3"),
      ex(["Active", "I have finished the work."], ["Passive", "The work has been finished by me."]),
      ex(["Active", "The boys have broken the windows."], ["Passive", "The windows have been broken by the boys."]),

      rule("Past indefinite: was / were + V3.", "was / were + V3"),
      ex(["Active", "Karim killed a snake."], ["Passive", "A snake was killed by Karim."]),
      ex(["Active", "Nazrul wrote many poems."], ["Passive", "Many poems were written by Nazrul."]),

      rule("Past continuous: was / were + being + V3.", "was / were + being + V3"),
      ex(["Active", "He was reading a book."], ["Passive", "A book was being read by him."]),

      rule("Past perfect: had + been + V3.", "had + been + V3"),
      ex(["Active", "They had left the place."], ["Passive", "The place had been left by them."]),

      rule("Future indefinite: shall / will + be + V3.", "shall / will + be + V3"),
      ex(["Active", "I shall help you."], ["Passive", "You will be helped by me."]),
      ex(["Active", "The farmers will grow more rice."], ["Passive", "More rice will be grown by the farmers."]),

      rule("With a modal (can, may, must, should, could, might): modal + be + V3.", "modal + be + V3"),
      ex(["Active", "You can do the sum."], ["Passive", "The sum can be done by you."]),
      ex(["Active", "We must obey the rules."], ["Passive", "The rules must be obeyed by us."]),
      ex(["Active", "You should help the poor."], ["Passive", "The poor should be helped by you."]),
      note("Present perfect continuous, past perfect continuous and future continuous have no passive form in ordinary use."),

      h("Special kinds of sentence"),
      rule("With two objects, either object can become the subject. The person is the more usual choice.", "S + V + person + thing → person + be + V3 + thing + by + S"),
      ex(["Active", "He gave me a pen."], ["Passive", "I was given a pen by him."], ["Passive", "A pen was given to me by him."]),
      ex(["Active", "The teacher taught us English."], ["Passive", "We were taught English by the teacher."]),

      rule("A yes-no question starts with the auxiliary; a 'do / does / did' question starts with am / is / are / was / were.", "Did + S + V1 + O? → Was / Were + O + V3 + by + S?"),
      ex(["Active", "Did you write the letter?"], ["Passive", "Was the letter written by you?"]),
      ex(["Active", "Do you know him?"], ["Passive", "Is he known to you?"]),
      ex(["Active", "Will you help me?"], ["Passive", "Shall I be helped by you?"]),

      rule("A 'wh' question keeps its question word in front. 'Who' becomes 'By whom'.", "Who + V + O? → By whom + be + O + V3?"),
      ex(["Active", "Who wrote the book?"], ["Passive", "By whom was the book written?"]),
      ex(["Active", "What are you doing?"], ["Passive", "What is being done by you?"]),
      ex(["Active", "Why did he beat the dog?"], ["Passive", "Why was the dog beaten by him?"]),

      rule("An imperative sentence becomes 'Let' + object + 'be' + V3. A negative one becomes 'Let not' + object + 'be' + V3. A request can become 'You are requested to'.", "V1 + O → let + O + be + V3"),
      ex(["Active", "Open the door."], ["Passive", "Let the door be opened."]),
      ex(["Active", "Do not insult the poor."], ["Passive", "Let not the poor be insulted."]),
      ex(["Active", "Please help me."], ["Passive", "You are requested to help me."]),

      rule("Some verbs take a preposition other than 'by' in the passive: know → to, please → with, surprise → at, fill → with, interest → in.", "known to · pleased with · surprised at · filled with · interested in"),
      ex(["Active", "I know him."], ["Passive", "He is known to me."]),
      ex(["Active", "His conduct pleased me."], ["Passive", "I was pleased with his conduct."]),
      ex(["Active", "The news surprised us."], ["Passive", "We were surprised at the news."]),
      ex(["Active", "Smoke filled the room."], ["Passive", "The room was filled with smoke."]),
      ex(["Active", "Music interests her."], ["Passive", "She is interested in music."]),

      rule("When the doer is 'people', 'someone' or 'they' and is not important, 'by' + the doer is left out.", "by people / by someone → (left out)"),
      ex(["Active", "People speak English all over the world."], ["Passive", "English is spoken all over the world."]),
      ex(["Active", "Someone has stolen my bag."], ["Passive", "My bag has been stolen."]),
    ],
  },
];
