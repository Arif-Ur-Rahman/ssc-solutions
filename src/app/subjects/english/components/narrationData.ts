// components/narrationData.ts
//
// Narration (Direct and Indirect Speech), one piece per thing that changes and
// one per kind of sentence the board asks about. Each piece gives the rules in
// order and then works each rule through examples, the same way the
// transformation lessons do.

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

export const narration: Piece[] = [
  /* ───────────────────────── Introduction ───────────────────────── */
  {
    id: "narration-introduction",
    title: "Introduction",
    body: [
      {
        type: "para",
        text: "Narration is the way we report what someone has said. We can give the speaker's exact words inside inverted commas — this is Direct Speech — or we can give the sense of those words in our own sentence, without inverted commas — this is Indirect Speech. Changing one into the other is called change of narration.",
      },
      ex(["Direct", "Rahim said, \"I am ill.\""], ["Indirect", "Rahim said that he was ill."]),
      h("The two parts of a direct speech"),
      {
        type: "para",
        text: "Every direct speech has two parts. The part outside the inverted commas (Rahim said) is the Reporting Verb with its subject and object. The part inside the inverted commas (\"I am ill.\") is the Reported Speech. In changing the narration, the reporting verb is changed to suit the kind of sentence, a linking word is put in place of the comma and inverted commas, and then the person, the tense and some words of the reported speech are changed.",
      },
      h("What changes"),
      {
        type: "para",
        text: "1. The reporting verb: said, said to → said, told, asked, ordered, requested, advised, wished, prayed, exclaimed, and so on.",
      },
      {
        type: "para",
        text: "2. The linker: that, if / whether, a wh-word, to, and so on, in place of the comma and the inverted commas.",
      },
      {
        type: "para",
        text: "3. The person of the pronouns in the reported speech.",
      },
      {
        type: "para",
        text: "4. The tense of the verb in the reported speech.",
      },
      {
        type: "para",
        text: "5. Words of nearness in time and place: now → then, here → there, this → that, today → that day, and so on.",
      },
      h("Reporting verb and linker at a glance"),
      ex(["Assertive", "said / said to → said / told"], ["Linker", "that"]),
      ex(["Interrogative", "said / said to → asked / enquired of / wanted to know"], ["Linker", "if / whether (yes-no question) · the wh-word itself"]),
      ex(["Imperative", "said / said to → told / ordered / requested / advised / forbade"], ["Linker", "to + V1 · not to + V1"]),
      ex(["Optative", "said / said to → wished / prayed"], ["Linker", "that + may / might"]),
      ex(["Exclamatory", "said / said to → exclaimed with joy / sorrow / wonder"], ["Linker", "that"]),
      h("How to work"),
      {
        type: "para",
        text: "Work in five steps. (1) Decide what kind of sentence the reported speech is: assertive, interrogative, imperative, optative or exclamatory. (2) Change the reporting verb to suit that kind. (3) Put the right linker in place of the comma and the inverted commas. (4) Change the pronouns by the rule of person. (5) If the reporting verb is in the past tense, change the tense of the reported speech and the words of nearness. Then check the punctuation: an indirect speech always ends with a full stop, never with a question mark or an exclamation mark.",
      },
      note("Indirect speech has no inverted commas, no comma after the reporting verb and no question mark or exclamation mark at the end."),
    ],
  },

  /* ─────────────────────── Change of Person ─────────────────────── */
  {
    id: "change-of-person",
    title: "Change of Person",
    body: [
      {
        type: "para",
        text: "The pronouns inside the reported speech are changed so that the sentence makes sense from the reporter's point of view. The whole rule is often remembered as S-O-N 1-2-3: the First person follows the Subject, the Second person follows the Object, and the Third person takes No change.",
      },
      rule("A first-person pronoun (I, me, my, mine, we, us, our, ours) in the reported speech changes according to the person of the subject of the reporting verb.", "1st person → person of the Subject"),
      ex(["Direct", "He said, \"I am tired.\""], ["Indirect", "He said that he was tired."]),
      ex(["Direct", "She said, \"I have lost my pen.\""], ["Indirect", "She said that she had lost her pen."]),
      ex(["Direct", "They said, \"We are ready.\""], ["Indirect", "They said that they were ready."]),
      ex(["Direct", "I said, \"I shall do my duty.\""], ["Indirect", "I said that I would do my duty."]),
      ex(["Direct", "You said, \"I know it.\""], ["Indirect", "You said that you knew it."]),

      rule("A second-person pronoun (you, your, yours) in the reported speech changes according to the person of the object of the reporting verb.", "2nd person → person of the Object"),
      ex(["Direct", "He said to me, \"You are clever.\""], ["Indirect", "He told me that I was clever."]),
      ex(["Direct", "I said to him, \"You are late.\""], ["Indirect", "I told him that he was late."]),
      ex(["Direct", "The teacher said to the boys, \"You have done your work well.\""], ["Indirect", "The teacher told the boys that they had done their work well."]),
      ex(["Direct", "Mother said to us, \"You must be home by six.\""], ["Indirect", "Mother told us that we had to be home by six."]),
      ex(["Direct", "She said to you, \"Your book is on the table.\""], ["Indirect", "She told you that your book was on the table."]),

      rule("A third-person pronoun (he, she, it, they and their other forms) in the reported speech does not change.", "3rd person → No change"),
      ex(["Direct", "Rina said, \"He is my brother.\""], ["Indirect", "Rina said that he was her brother."]),
      ex(["Direct", "I said to her, \"They will come.\""], ["Indirect", "I told her that they would come."]),
      ex(["Direct", "He said to me, \"She does not like it.\""], ["Indirect", "He told me that she did not like it."]),

      h("The forms of the pronouns"),
      {
        type: "para",
        text: "Change the pronoun into the same case it had before. A subject stays a subject (I → he), an object stays an object (me → him) and a possessive stays a possessive (my → his).",
      },
      ex(["Subject", "I → he / she · we → they · you → I / he / she / we / they"]),
      ex(["Object", "me → him / her · us → them · you → me / him / her / us / them"]),
      ex(["Possessive", "my → his / her · our → their · your → my / his / her / our / their"]),
      ex(["Possessive", "mine → his / hers · ours → theirs · yours → mine / his / hers / ours / theirs"]),
      ex(["Reflexive", "myself → himself / herself · ourselves → themselves · yourself → myself / himself / herself"]),

      h("When the reporting verb has no object"),
      note("If the reporting verb has no object but the reported speech has 'you', the listener must be named. Put in a suitable object: 'He said, \"You are wrong.\"' becomes 'He told me that I was wrong' (or 'him', 'her' — whoever was spoken to)."),
      ex(["Direct", "Father said, \"You should study hard.\""], ["Indirect", "Father told me that I should study hard."]),
      note("'We' sometimes includes the listener. Then it may change to 'we' or 'they' according to the sense: 'He said to me, \"We are friends.\"' → 'He told me that we were friends.'"),
    ],
  },

  /* ──────────────────────── Change of Tense ──────────────────────── */
  {
    id: "change-of-tense",
    title: "Change of Tense",
    body: [
      {
        type: "para",
        text: "The tense of the reported speech depends on the tense of the reporting verb. If the reporting verb is in the present or future tense, the tense of the reported speech does not change. If the reporting verb is in the past tense, the tense of the reported speech moves one step back into the past.",
      },
      h("Reporting verb in the present or future"),
      rule("If the reporting verb is in the present or future tense, keep the tense of the reported speech as it is. Only the person changes.", "says / will say → tense unchanged"),
      ex(["Direct", "He says, \"I am busy.\""], ["Indirect", "He says that he is busy."]),
      ex(["Direct", "She says to me, \"I shall help you.\""], ["Indirect", "She tells me that she will help me."]),
      ex(["Direct", "Rahim has said, \"I went there yesterday.\""], ["Indirect", "Rahim has said that he went there yesterday."]),
      ex(["Direct", "He will say, \"I am innocent.\""], ["Indirect", "He will say that he is innocent."]),

      h("Reporting verb in the past"),
      rule("Present indefinite becomes past indefinite.", "V1 / V5 → V2 · am / is / are → was / were"),
      ex(["Direct", "He said, \"I play football.\""], ["Indirect", "He said that he played football."]),
      ex(["Direct", "She said, \"I am happy.\""], ["Indirect", "She said that she was happy."]),
      ex(["Direct", "They said, \"We do not know him.\""], ["Indirect", "They said that they did not know him."]),

      rule("Present continuous becomes past continuous.", "am / is / are + V-ing → was / were + V-ing"),
      ex(["Direct", "He said, \"I am reading a book.\""], ["Indirect", "He said that he was reading a book."]),
      ex(["Direct", "They said, \"We are going home.\""], ["Indirect", "They said that they were going home."]),

      rule("Present perfect becomes past perfect.", "has / have + V3 → had + V3"),
      ex(["Direct", "She said, \"I have finished my work.\""], ["Indirect", "She said that she had finished her work."]),
      ex(["Direct", "He said to me, \"You have done well.\""], ["Indirect", "He told me that I had done well."]),

      rule("Present perfect continuous becomes past perfect continuous.", "has / have been + V-ing → had been + V-ing"),
      ex(["Direct", "He said, \"I have been waiting for an hour.\""], ["Indirect", "He said that he had been waiting for an hour."]),

      rule("Past indefinite becomes past perfect.", "V2 → had + V3"),
      ex(["Direct", "He said, \"I saw a tiger.\""], ["Indirect", "He said that he had seen a tiger."]),
      ex(["Direct", "She said, \"I did not go to school.\""], ["Indirect", "She said that she had not gone to school."]),

      rule("Past continuous becomes past perfect continuous.", "was / were + V-ing → had been + V-ing"),
      ex(["Direct", "He said, \"I was writing a letter.\""], ["Indirect", "He said that he had been writing a letter."]),

      rule("Past perfect and past perfect continuous do not change.", "had + V3 → had + V3"),
      ex(["Direct", "He said, \"I had eaten before you came.\""], ["Indirect", "He said that he had eaten before I came."]),

      rule("The future auxiliaries and the modals move back: shall / will → should / would, can → could, may → might, must → had to.", "shall → should · will → would · can → could · may → might · must → had to"),
      ex(["Direct", "He said, \"I shall go to Dhaka.\""], ["Indirect", "He said that he would go to Dhaka."]),
      ex(["Direct", "She said, \"I will help you.\""], ["Indirect", "She said that she would help me."]),
      ex(["Direct", "He said, \"I can swim.\""], ["Indirect", "He said that he could swim."]),
      ex(["Direct", "She said, \"It may rain.\""], ["Indirect", "She said that it might rain."]),
      ex(["Direct", "He said, \"I must go now.\""], ["Indirect", "He said that he had to go then."]),
      note("'Shall' with the first person becomes 'would' when the subject changes to the third person ('I shall go' → 'he would go'). It becomes 'should' only when the subject stays in the first person ('I said, \"I shall go\"' → 'I said that I should go')."),
      note("'Could', 'would', 'should', 'might', 'ought to' and 'used to' do not change: 'He said, \"I could not come.\"' → 'He said that he could not come.'"),

      h("When the tense does not change"),
      rule("A universal truth, a scientific fact or a proverb keeps its present tense even after a past reporting verb.", "universal truth → tense unchanged"),
      ex(["Direct", "The teacher said, \"The earth moves round the sun.\""], ["Indirect", "The teacher said that the earth moves round the sun."]),
      ex(["Direct", "Father said, \"Honesty is the best policy.\""], ["Indirect", "Father said that honesty is the best policy."]),
      ex(["Direct", "He said, \"Water boils at 100°C.\""], ["Indirect", "He said that water boils at 100°C."]),

      rule("A habitual action or a fact that is still true may keep its tense.", "habit / lasting fact → tense unchanged"),
      ex(["Direct", "He said, \"I get up early every day.\""], ["Indirect", "He said that he gets up early every day."]),
      ex(["Direct", "She said, \"Dhaka is the capital of Bangladesh.\""], ["Indirect", "She said that Dhaka is the capital of Bangladesh."]),

      rule("A historical fact in the past indefinite does not change into the past perfect.", "historical fact → past indefinite unchanged"),
      ex(["Direct", "The teacher said, \"Bangladesh became independent in 1971.\""], ["Indirect", "The teacher said that Bangladesh became independent in 1971."]),
      ex(["Direct", "He said, \"Nazrul wrote 'Bidrohi'.\""], ["Indirect", "He said that Nazrul wrote 'Bidrohi'."]),

      rule("An unreal wish or supposition after 'I wish', 'if' or 'as if' keeps its tense.", "wish / if + past → unchanged"),
      ex(["Direct", "He said, \"I wish I were a bird.\""], ["Indirect", "He said that he wished he were a bird."]),
      ex(["Direct", "She said, \"If I had money, I would help him.\""], ["Indirect", "She said that if she had money, she would help him."]),
    ],
  },

  /* ────────────────────── Change of Words ────────────────────── */
  {
    id: "change-of-words",
    title: "Change of Words",
    body: [
      {
        type: "para",
        text: "Words that show nearness in time and place are changed into words that show distance, because the indirect speech is reported later and from somewhere else. This change is made only when the reporting verb is in the past tense.",
      },
      rule("Words of nearness change into words of distance.", "near → far"),
      ex(["now", "then"], ["here", "there"], ["this", "that"], ["these", "those"], ["thus", "so"], ["hence", "thence"], ["hither", "thither"]),
      rule("Words of time move back by one step.", "today → that day · tomorrow → the next day · yesterday → the previous day"),
      ex(["today", "that day"], ["tonight", "that night"], ["tomorrow", "the next day / the following day"], ["yesterday", "the previous day / the day before"], ["last night", "the previous night / the night before"], ["next week", "the following week"], ["last year", "the previous year / the year before"], ["ago", "before"]),
      ex(["Direct", "He said, \"I am busy now.\""], ["Indirect", "He said that he was busy then."]),
      ex(["Direct", "She said, \"I shall come here tomorrow.\""], ["Indirect", "She said that she would go there the next day."]),
      ex(["Direct", "They said, \"We went to Cox's Bazar yesterday.\""], ["Indirect", "They said that they had gone to Cox's Bazar the previous day."]),
      ex(["Direct", "He said, \"This book is mine.\""], ["Indirect", "He said that that book was his."]),
      ex(["Direct", "She said, \"I met him two years ago.\""], ["Indirect", "She said that she had met him two years before."]),
      ex(["Direct", "Rafi said, \"I have a test today.\""], ["Indirect", "Rafi said that he had a test that day."]),
      note("'Come' becomes 'go' only when the place is no longer near the reporter, as in 'come here' → 'go there'. If the reporter is still at that place, keep 'come'."),
      note("'This', 'these', 'here' and 'now' stay unchanged when the thing, the place or the time is still present when the speech is reported: 'He says, \"I live here.\"' → 'He says that he lives here.'"),
      note("'This', 'these' used for time become 'that', 'those': 'this morning' → 'that morning', 'these days' → 'those days'."),
    ],
  },

  /* ─────────────────────── Assertive Sentence ─────────────────────── */
  {
    id: "narration-assertive",
    title: "Assertive Sentence",
    body: [
      {
        type: "para",
        text: "An assertive sentence makes a plain statement. It is the simplest kind to report: keep 'said' or change 'said to' into 'told', put 'that' as the linker, and then change the person, the tense and the words of nearness.",
      },
      h("Direct into Indirect"),
      rule("'Said' stays 'said' when there is no object. 'Said to' becomes 'told'. Put 'that' in place of the comma and the inverted commas.", "said → said · said to → told + that"),
      ex(["Direct", "He said, \"I am a student.\""], ["Indirect", "He said that he was a student."]),
      ex(["Direct", "He said to me, \"I am a student.\""], ["Indirect", "He told me that he was a student."]),
      ex(["Direct", "Rina said to her mother, \"I have passed the exam.\""], ["Indirect", "Rina told her mother that she had passed the exam."]),
      ex(["Direct", "The boy said, \"My father is a farmer.\""], ["Indirect", "The boy said that his father was a farmer."]),
      ex(["Direct", "Karim said to me, \"I saw your brother yesterday.\""], ["Indirect", "Karim told me that he had seen my brother the previous day."]),
      ex(["Direct", "She said to us, \"I will visit you tomorrow.\""], ["Indirect", "She told us that she would visit us the next day."]),
      ex(["Direct", "The old man said, \"I cannot walk fast.\""], ["Indirect", "The old man said that he could not walk fast."]),
      ex(["Direct", "They said, \"We are playing cricket now.\""], ["Indirect", "They said that they were playing cricket then."]),
      ex(["Direct", "My friend said to me, \"I have been living here for five years.\""], ["Indirect", "My friend told me that he had been living there for five years."]),
      ex(["Direct", "The captain said, \"We shall win the match.\""], ["Indirect", "The captain said that they would win the match."]),

      rule("Other reporting verbs can be used to show the speaker's attitude: 'said' becomes 'replied', 'answered', 'admitted', 'promised', 'assured', 'informed', 'remarked' and so on.", "said → replied / promised / assured / informed + that"),
      ex(["Direct", "He said to me, \"I shall surely help you.\""], ["Indirect", "He assured me that he would surely help me."]),
      ex(["Direct", "The boy said, \"I stole the money.\""], ["Indirect", "The boy admitted that he had stolen the money."]),
      ex(["Direct", "Father said to me, \"I will buy you a watch.\""], ["Indirect", "Father promised me that he would buy me a watch."]),

      rule("'Yes' and 'No' in a reply become 'replied in the affirmative' and 'replied in the negative'.", "Yes → replied in the affirmative · No → replied in the negative"),
      ex(["Direct", "He said, \"Yes, I know him.\""], ["Indirect", "He replied in the affirmative and said that he knew him."]),
      ex(["Direct", "She said, \"No, I did not see it.\""], ["Indirect", "She replied in the negative and said that she had not seen it."]),
      ex(["Direct", "The teacher said to me, \"Have you done your homework?\" I said, \"Yes.\""], ["Indirect", "The teacher asked me if I had done my homework. I replied in the affirmative."]),

      rule("A word of address (vocative) such as 'Sir', 'Rahim' or 'my boy' is taken out of the speech. 'Sir' becomes 'respectfully'; a name becomes the object of the reporting verb or 'addressing …'.", "Sir → respectfully · name → told + name / addressing + name"),
      ex(["Direct", "The student said to the teacher, \"Sir, I am sorry.\""], ["Indirect", "The student respectfully told the teacher that he was sorry."]),
      ex(["Direct", "She said, \"Rahim, your father is waiting outside.\""], ["Indirect", "She told Rahim that his father was waiting outside."]),
      ex(["Direct", "The teacher said, \"My boys, you have done very well.\""], ["Indirect", "Addressing the boys as his own, the teacher said that they had done very well."]),

      rule("'Thank you', 'Good morning', 'Good-bye' and similar greetings become 'thanked', 'wished good morning', 'bade good-bye'.", "Thank you → thanked · Good morning → wished good morning · Good-bye → bade good-bye"),
      ex(["Direct", "He said to me, \"Thank you.\""], ["Indirect", "He thanked me."]),
      ex(["Direct", "The student said to the teacher, \"Good morning, sir.\""], ["Indirect", "The student respectfully wished the teacher good morning."]),
      ex(["Direct", "She said to her friends, \"Good-bye.\""], ["Indirect", "She bade her friends good-bye."]),

      h("Indirect into Direct"),
      {
        type: "para",
        text: "Work backwards: 'told' becomes 'said to', drop 'that', put a comma and inverted commas, start the reported speech with a capital letter, and put the person, the tense and the words of nearness back as the speaker would have said them.",
      },
      ex(["Indirect", "He told me that he was ill."], ["Direct", "He said to me, \"I am ill.\""]),
      ex(["Indirect", "She said that she had seen a snake the previous day."], ["Direct", "She said, \"I saw a snake yesterday.\""]),
      ex(["Indirect", "The boy told his mother that he would go there the next day."], ["Direct", "The boy said to his mother, \"I shall go there tomorrow.\""]),
      ex(["Indirect", "Father told me that I should obey my teachers."], ["Direct", "Father said to me, \"You should obey your teachers.\""]),
      ex(["Indirect", "He replied in the negative."], ["Direct", "He said, \"No.\""]),
    ],
  },

  /* ───────────────────── Interrogative Sentence ───────────────────── */
  {
    id: "narration-interrogative",
    title: "Interrogative Sentence",
    body: [
      {
        type: "para",
        text: "An interrogative sentence asks a question. In the indirect speech it becomes a statement: the reporting verb becomes 'asked', the question order (auxiliary before subject) becomes statement order (subject before verb), and the sentence ends with a full stop, not a question mark.",
      },
      h("Direct into Indirect"),
      rule("A question that is answered with 'yes' or 'no' begins with an auxiliary verb. Put 'if' or 'whether' as the linker and use statement order.", "said (to) → asked + if / whether + subject + verb"),
      ex(["Direct", "He said to me, \"Are you ill?\""], ["Indirect", "He asked me if I was ill."]),
      ex(["Direct", "She said to him, \"Can you swim?\""], ["Indirect", "She asked him if he could swim."]),
      ex(["Direct", "I said to her, \"Will you go to school tomorrow?\""], ["Indirect", "I asked her whether she would go to school the next day."]),
      ex(["Direct", "The teacher said to the boy, \"Have you learnt your lesson?\""], ["Indirect", "The teacher asked the boy if he had learnt his lesson."]),
      ex(["Direct", "Mother said to me, \"Is your friend coming today?\""], ["Indirect", "Mother asked me if my friend was coming that day."]),
      ex(["Direct", "He said to them, \"Were you playing in the field?\""], ["Indirect", "He asked them if they had been playing in the field."]),

      rule("When the question begins with do, does or did, drop it and put the main verb in the right past form.", "do / does + V1 → V2 · did + V1 → had + V3"),
      ex(["Direct", "He said to me, \"Do you know him?\""], ["Indirect", "He asked me if I knew him."]),
      ex(["Direct", "She said to Rina, \"Does your brother live in Dhaka?\""], ["Indirect", "She asked Rina if her brother lived in Dhaka."]),
      ex(["Direct", "I said to him, \"Did you see the film?\""], ["Indirect", "I asked him if he had seen the film."]),
      ex(["Direct", "The man said to me, \"Don't you know the way?\""], ["Indirect", "The man asked me if I did not know the way."]),
      note("'Do', 'does' and 'did' are dropped only when they merely help to form the question. In a negative question 'do not' becomes 'did not': 'Don't you know?' → 'if I did not know'."),

      rule("A question that begins with a wh-word (who, what, which, where, when, why, how, whom, whose) keeps that word as its own linker. Do not add 'if' or 'that'.", "said (to) → asked + wh-word + subject + verb"),
      ex(["Direct", "He said to me, \"What is your name?\""], ["Indirect", "He asked me what my name was."]),
      ex(["Direct", "She said to him, \"Where do you live?\""], ["Indirect", "She asked him where he lived."]),
      ex(["Direct", "The teacher said to me, \"Why are you late?\""], ["Indirect", "The teacher asked me why I was late."]),
      ex(["Direct", "I said to her, \"When will you come back?\""], ["Indirect", "I asked her when she would come back."]),
      ex(["Direct", "He said to the boy, \"How did you do it?\""], ["Indirect", "He asked the boy how he had done it."]),
      ex(["Direct", "Father said to me, \"Which book do you want?\""], ["Indirect", "Father asked me which book I wanted."]),
      ex(["Direct", "The stranger said to me, \"Whose house is this?\""], ["Indirect", "The stranger asked me whose house that was."]),
      ex(["Direct", "She said to us, \"How long have you been waiting?\""], ["Indirect", "She asked us how long we had been waiting."]),

      rule("When the wh-word is itself the subject (who, what, which), the order does not change: the wh-word is followed straight by the verb.", "who / what (subject) + verb → unchanged order"),
      ex(["Direct", "He said, \"Who is at the door?\""], ["Indirect", "He asked who was at the door."]),
      ex(["Direct", "She said to me, \"What happened there?\""], ["Indirect", "She asked me what had happened there."]),
      ex(["Direct", "The teacher said, \"Who broke the glass?\""], ["Indirect", "The teacher asked who had broken the glass."]),

      rule("For a polite question, 'enquired of', 'wanted to know' or 'demanded' can be used in place of 'asked'. After 'enquired' the object takes 'of'.", "said to → enquired of / wanted to know"),
      ex(["Direct", "The stranger said to me, \"Where is the post office?\""], ["Indirect", "The stranger enquired of me where the post office was."]),
      ex(["Direct", "He said to her, \"What do you want?\""], ["Indirect", "He wanted to know from her what she wanted."]),

      rule("A question used as a polite request ('Will you …?', 'Would you …?') is reported as a request.", "Will you + V1 …? → requested + object + to + V1"),
      ex(["Direct", "He said to me, \"Will you please lend me your pen?\""], ["Indirect", "He requested me to lend him my pen."]),
      ex(["Direct", "She said to the driver, \"Would you stop the car here?\""], ["Indirect", "She requested the driver to stop the car there."]),

      h("Indirect into Direct"),
      {
        type: "para",
        text: "Work backwards: 'asked' becomes 'said to', drop 'if' or 'whether', put the auxiliary back before the subject (or bring back do, does or did), and end with a question mark.",
      },
      ex(["Indirect", "He asked me if I had any money."], ["Direct", "He said to me, \"Have you any money?\""]),
      ex(["Indirect", "She asked me where I had been the previous day."], ["Direct", "She said to me, \"Where were you yesterday?\""]),
      ex(["Indirect", "The teacher asked the boys why they were making a noise."], ["Direct", "The teacher said to the boys, \"Why are you making a noise?\""]),
      ex(["Indirect", "I asked him whether he liked mangoes."], ["Direct", "I said to him, \"Do you like mangoes?\""]),

      h("Common mistakes"),
      note("Do not keep the question order. 'He asked me what was my name' is wrong; write 'He asked me what my name was.'"),
      note("Do not use 'that' before 'if' or a wh-word. 'He asked me that where I lived' is wrong."),
      note("An indirect question ends with a full stop: 'She asked me if I was ready.'"),
    ],
  },

  /* ───────────────────── Imperative Sentence ───────────────────── */
  {
    id: "narration-imperative",
    title: "Imperative Sentence",
    body: [
      {
        type: "para",
        text: "An imperative sentence gives an order, a piece of advice, a request or a prohibition. In the indirect speech the reporting verb shows which of these it is, the linker is 'to', and the verb of the reported speech stays in its base form. Because it becomes an infinitive, there is no change of tense.",
      },
      h("Direct into Indirect"),
      rule("An order becomes 'ordered' or 'commanded' (or simply 'told') + object + 'to' + base verb.", "said to → ordered / commanded / told + object + to + V1"),
      ex(["Direct", "The teacher said to the boy, \"Stand up.\""], ["Indirect", "The teacher ordered the boy to stand up."]),
      ex(["Direct", "The captain said to the soldiers, \"Fire.\""], ["Indirect", "The captain commanded the soldiers to fire."]),
      ex(["Direct", "Father said to me, \"Go to bed early.\""], ["Indirect", "Father told me to go to bed early."]),
      ex(["Direct", "He said to the servant, \"Bring me a glass of water.\""], ["Indirect", "He ordered the servant to bring him a glass of water."]),

      rule("A request with 'please' or 'kindly' becomes 'requested'. Drop 'please' and 'kindly'.", "please / kindly → requested + object + to + V1"),
      ex(["Direct", "He said to me, \"Please help me.\""], ["Indirect", "He requested me to help him."]),
      ex(["Direct", "She said to the teacher, \"Kindly explain the rule again.\""], ["Indirect", "She requested the teacher to explain the rule again."]),
      ex(["Direct", "The beggar said to the lady, \"Please give me some food.\""], ["Indirect", "The beggar begged the lady to give him some food."]),

      rule("Advice becomes 'advised'.", "advice → advised + object + to + V1"),
      ex(["Direct", "The doctor said to the patient, \"Take rest.\""], ["Indirect", "The doctor advised the patient to take rest."]),
      ex(["Direct", "The teacher said to us, \"Always speak the truth.\""], ["Indirect", "The teacher advised us always to speak the truth."]),
      ex(["Direct", "Mother said to me, \"Be kind to the poor.\""], ["Indirect", "Mother advised me to be kind to the poor."]),

      rule("A negative imperative ('Do not', 'Never') becomes 'not to' or 'never to'; or use 'forbade' + object + 'to', dropping 'not'.", "do not + V1 → told + object + not to + V1 / forbade + object + to + V1"),
      ex(["Direct", "He said to me, \"Do not make a noise.\""], ["Indirect", "He told me not to make a noise. / He forbade me to make a noise."]),
      ex(["Direct", "The teacher said to us, \"Never tell a lie.\""], ["Indirect", "The teacher advised us never to tell a lie."]),
      ex(["Direct", "Father said to me, \"Don't go out in the rain.\""], ["Indirect", "Father forbade me to go out in the rain."]),
      ex(["Direct", "She said to him, \"Please do not disturb me.\""], ["Indirect", "She requested him not to disturb her."]),
      note("After 'forbade' do not write 'not': 'He forbade me not to go' is wrong."),

      rule("'Let us' (a proposal) becomes 'proposed' or 'suggested' + that + we / they + should.", "Let us + V1 → proposed / suggested + that + subject + should + V1"),
      ex(["Direct", "He said to me, \"Let us go for a walk.\""], ["Indirect", "He proposed to me that we should go for a walk."]),
      ex(["Direct", "Rina said to her friends, \"Let us play a game.\""], ["Indirect", "Rina suggested to her friends that they should play a game."]),
      ex(["Direct", "The leader said, \"Let us fight for our rights.\""], ["Indirect", "The leader proposed that they should fight for their rights."]),

      rule("'Let' meaning 'allow' becomes 'might be allowed to' or 'told … to let'.", "Let him + V1 → that he might be allowed to + V1"),
      ex(["Direct", "He said to his father, \"Let me go to the fair.\""], ["Indirect", "He requested his father to let him go to the fair. / He requested his father that he might be allowed to go to the fair."]),
      ex(["Direct", "The teacher said, \"Let him sit here.\""], ["Indirect", "The teacher said that he might be allowed to sit there."]),

      rule("A word of address in an imperative becomes the object of the reporting verb.", "vocative → object"),
      ex(["Direct", "The teacher said, \"Boys, sit down.\""], ["Indirect", "The teacher told the boys to sit down."]),
      ex(["Direct", "The boy said to the headmaster, \"Sir, please grant me leave.\""], ["Indirect", "The boy respectfully requested the headmaster to grant him leave."]),

      h("Indirect into Direct"),
      {
        type: "para",
        text: "Work backwards: 'ordered', 'requested', 'advised' or 'forbade' becomes 'said to', drop 'to' and begin with the base verb; bring back 'please' for a request, 'do not' for 'not to' or 'forbade', and 'let us' for 'proposed that we should'.",
      },
      ex(["Indirect", "The officer ordered the peon to shut the door."], ["Direct", "The officer said to the peon, \"Shut the door.\""]),
      ex(["Indirect", "She requested me to wait for her."], ["Direct", "She said to me, \"Please wait for me.\""]),
      ex(["Indirect", "The doctor advised him not to smoke."], ["Direct", "The doctor said to him, \"Do not smoke.\""]),
      ex(["Indirect", "He proposed to his friend that they should go to the cinema."], ["Direct", "He said to his friend, \"Let us go to the cinema.\""]),
    ],
  },

  /* ───────────────────── Optative Sentence ───────────────────── */
  {
    id: "narration-optative",
    title: "Optative Sentence",
    body: [
      {
        type: "para",
        text: "An optative sentence expresses a wish or a prayer. The reporting verb becomes 'wished' or 'prayed' (with 'for' when the wish is for someone else), the linker is 'that', and 'may' becomes 'might'.",
      },
      h("Direct into Indirect"),
      rule("'May' + subject + verb becomes 'wished' or 'prayed' + that + subject + 'might' + verb.", "said → wished / prayed + that + subject + might + V1"),
      ex(["Direct", "He said to me, \"May you be happy.\""], ["Indirect", "He wished that I might be happy."]),
      ex(["Direct", "Mother said to me, \"May God bless you.\""], ["Indirect", "Mother prayed that God might bless me."]),
      ex(["Direct", "The old man said, \"May Allah help the poor.\""], ["Indirect", "The old man prayed that Allah might help the poor."]),
      ex(["Direct", "They said to us, \"May you live long.\""], ["Indirect", "They prayed for us that we might live long."]),
      ex(["Direct", "The teacher said to the students, \"May you shine in life.\""], ["Indirect", "The teacher wished that the students might shine in life."]),

      rule("A wish without 'may', such as 'Long live …', becomes 'prayed that' + subject + 'might live long'.", "Long live + noun → prayed that + noun + might live long"),
      ex(["Direct", "The people said, \"Long live our President.\""], ["Indirect", "The people prayed that their President might live long."]),
      ex(["Direct", "They said, \"Long live Bangladesh.\""], ["Indirect", "They prayed that Bangladesh might live long."]),

      rule("A greeting or a farewell becomes 'wished' or 'bade' + object + the greeting.", "Good morning → wished + object + good morning · Good-bye → bade + object + good-bye"),
      ex(["Direct", "He said to me, \"Good morning.\""], ["Indirect", "He wished me good morning."]),
      ex(["Direct", "She said to her teacher, \"Good night, sir.\""], ["Indirect", "She respectfully bade her teacher good night."]),
      ex(["Direct", "I said to my friends, \"Good-bye.\""], ["Indirect", "I bade my friends good-bye."]),
      ex(["Direct", "They said to me, \"Happy birthday.\""], ["Indirect", "They wished me a happy birthday."]),

      rule("A curse becomes 'cursed' + that + subject + might.", "said → cursed + that + subject + might + V1"),
      ex(["Direct", "The man said to the thief, \"May you be punished.\""], ["Indirect", "The man cursed the thief that he might be punished."]),

      h("Indirect into Direct"),
      ex(["Indirect", "Father prayed that I might succeed in life."], ["Direct", "Father said to me, \"May you succeed in life.\""]),
      ex(["Indirect", "She wished me good luck."], ["Direct", "She said to me, \"Good luck.\""]),
      ex(["Indirect", "The villagers prayed that their leader might live long."], ["Direct", "The villagers said, \"Long live our leader.\""]),
    ],
  },

  /* ──────────────────── Exclamatory Sentence ──────────────────── */
  {
    id: "narration-exclamatory",
    title: "Exclamatory Sentence",
    body: [
      {
        type: "para",
        text: "An exclamatory sentence expresses a sudden, strong feeling. In the indirect speech the reporting verb becomes 'exclaimed' with the feeling it shows (joy, sorrow, wonder, regret, contempt), the linker is 'that', and the exclamation is turned into a plain statement — 'How' and 'What a' become 'very' and 'a very' or 'a great', just as in changing an exclamatory sentence into an assertive one.",
      },
      h("Direct into Indirect"),
      rule("'How' + adjective becomes 'very' + adjective, and the reporting verb becomes 'exclaimed with wonder' (or joy, sorrow, as the sense needs).", "How + adj → exclaimed with wonder + that + subject + verb + very + adj"),
      ex(["Direct", "He said, \"How beautiful the flower is!\""], ["Indirect", "He exclaimed with wonder that the flower was very beautiful."]),
      ex(["Direct", "She said, \"How fast the horse runs!\""], ["Indirect", "She exclaimed with wonder that the horse ran very fast."]),
      ex(["Direct", "The boy said, \"How cold it is!\""], ["Indirect", "The boy exclaimed that it was very cold."]),
      ex(["Direct", "They said, \"How charming the moonlit night is!\""], ["Indirect", "They exclaimed with joy that the moonlit night was very charming."]),

      rule("'What a' + adjective + noun becomes 'a very' + adjective + noun; 'What a' + noun alone becomes 'a great' + noun.", "What a + adj + noun → a very + adj + noun · What a + noun → a great + noun"),
      ex(["Direct", "He said, \"What a beautiful scene it is!\""], ["Indirect", "He exclaimed with wonder that it was a very beautiful scene."]),
      ex(["Direct", "She said, \"What a fool I am!\""], ["Indirect", "She exclaimed with regret that she was a great fool."]),
      ex(["Direct", "The teacher said, \"What a genius he is!\""], ["Indirect", "The teacher exclaimed with wonder that he was a great genius."]),
      ex(["Direct", "We said, \"What a pleasant journey we had!\""], ["Indirect", "We exclaimed with joy that we had had a very pleasant journey."]),

      rule("'Alas' becomes 'exclaimed with sorrow'.", "Alas! → exclaimed with sorrow + that"),
      ex(["Direct", "He said, \"Alas! I am ruined.\""], ["Indirect", "He exclaimed with sorrow that he was ruined."]),
      ex(["Direct", "The old woman said, \"Alas! My son is dead.\""], ["Indirect", "The old woman exclaimed with sorrow that her son was dead."]),
      ex(["Direct", "She said, \"Alas! I have lost my purse.\""], ["Indirect", "She exclaimed with sorrow that she had lost her purse."]),

      rule("'Hurrah' becomes 'exclaimed with joy'.", "Hurrah! → exclaimed with joy + that"),
      ex(["Direct", "The boys said, \"Hurrah! We have won the match.\""], ["Indirect", "The boys exclaimed with joy that they had won the match."]),
      ex(["Direct", "She said, \"Hurrah! I have got a golden A+.\""], ["Indirect", "She exclaimed with joy that she had got a golden A+."]),

      rule("'Bravo' becomes 'applauded' + object + 'saying that'; 'Fie' becomes 'exclaimed with contempt'; 'Oh' or 'Ah' becomes 'exclaimed with surprise' or 'with sorrow' as the sense needs.", "Bravo! → applauded · Fie! → exclaimed with contempt · Oh! → exclaimed with surprise"),
      ex(["Direct", "The captain said to the player, \"Bravo! Well done.\""], ["Indirect", "The captain applauded the player, saying that he had done well."]),
      ex(["Direct", "He said to the boy, \"Fie! You are a liar.\""], ["Indirect", "He exclaimed with contempt that the boy was a liar."]),
      ex(["Direct", "She said, \"Oh! I have left my keys at home.\""], ["Indirect", "She exclaimed with surprise that she had left her keys at home."]),

      rule("A wish with 'Would that', 'O that' or 'If only' becomes 'wished' or 'wished earnestly' + that. The tense of the wish does not change.", "Would that / O that → wished + that"),
      ex(["Direct", "He said, \"Would that I were a king!\""], ["Indirect", "He wished that he were a king."]),
      ex(["Direct", "The old man said, \"O that I could be young again!\""], ["Indirect", "The old man wished earnestly that he could be young again."]),
      ex(["Direct", "She said, \"If only I had listened to my mother!\""], ["Indirect", "She wished that she had listened to her mother."]),

      h("Indirect into Direct"),
      {
        type: "para",
        text: "Work backwards: 'exclaimed with joy' becomes 'Hurrah!', 'with sorrow' becomes 'Alas!', 'very' + adjective becomes 'How' + adjective, 'a very' + adjective + noun becomes 'What a' + adjective + noun, and the sentence ends with an exclamation mark.",
      },
      ex(["Indirect", "He exclaimed with joy that he had passed the exam."], ["Direct", "He said, \"Hurrah! I have passed the exam.\""]),
      ex(["Indirect", "She exclaimed with sorrow that she was undone."], ["Direct", "She said, \"Alas! I am undone.\""]),
      ex(["Indirect", "The boy exclaimed with wonder that the bird was very beautiful."], ["Direct", "The boy said, \"How beautiful the bird is!\""]),
      ex(["Indirect", "He exclaimed that it was a very lovely garden."], ["Direct", "He said, \"What a lovely garden it is!\""]),
    ],
  },

  /* ─────────────────── Mixed & Multiple Sentences ─────────────────── */
  {
    id: "narration-mixed",
    title: "Mixed & Multiple Sentences",
    body: [
      {
        type: "para",
        text: "The board usually sets a short conversation of four or five sentences, often of different kinds, to be changed into indirect speech as one connected passage. Treat each sentence by its own rule, then join them smoothly. Do not repeat 'he said that … he said that …' — use linking phrases instead.",
      },
      h("Joining the sentences"),
      rule("When two or more sentences of the same kind come together, join them with 'and said that', 'and added that' or 'and further said that'.", "…that … and added that …"),
      ex(["Direct", "He said, \"I am tired. I want to sleep.\""], ["Indirect", "He said that he was tired and added that he wanted to sleep."]),
      ex(["Direct", "She said to me, \"Where are you going? When will you return?\""], ["Indirect", "She asked me where I was going and when I would return."]),

      rule("When the sentences are of different kinds, give each one its own reporting verb and join them with 'and'.", "asked … and told … · said that … and asked …"),
      ex(["Direct", "Father said to me, \"Where are you going? Take your umbrella.\""], ["Indirect", "Father asked me where I was going and told me to take my umbrella."]),
      ex(["Direct", "He said to me, \"I am hungry. Please give me some food.\""], ["Indirect", "He told me that he was hungry and requested me to give him some food."]),
      ex(["Direct", "The teacher said, \"Boys, you have done well. May you prosper in life.\""], ["Indirect", "The teacher told the boys that they had done well and wished that they might prosper in life."]),
      ex(["Direct", "She said, \"Alas! I have failed. What shall I do now?\""], ["Indirect", "She exclaimed with sorrow that she had failed and asked what she would do then."]),

      rule("A reply ('Yes', 'No') is reported as 'replied in the affirmative / negative'; a question and its answer become two sentences or are joined with 'and'.", "Yes → replied in the affirmative · No → replied in the negative"),
      ex(["Direct", "I said to him, \"Will you come with me?\" He said, \"Yes.\""], ["Indirect", "I asked him if he would come with me. He replied in the affirmative."]),
      ex(["Direct", "\"Are you ill?\" said the doctor. \"No, sir,\" said the boy."], ["Indirect", "The doctor asked the boy if he was ill. The boy respectfully replied in the negative."]),

      h("Board-style practice"),
      {
        type: "para",
        text: "Change the narration of each passage. Each answer applies the rules for its kind of sentence and joins them into one connected passage.",
      },
      ex(
        ["Given", "\"Are you a student?\" said the officer. \"Yes, sir,\" replied the boy. \"What do you want?\" asked the officer. \"I want to see the headmaster,\" said the boy."],
        ["Answer", "The officer asked the boy if he was a student. The boy respectfully replied in the affirmative. Then the officer asked him what he wanted. The boy replied that he wanted to see the headmaster."],
      ),
      ex(
        ["Given", "The teacher said to the students, \"Why are you making a noise? Don't you know that it is a class? Sit quietly and do your lesson.\""],
        ["Answer", "The teacher asked the students why they were making a noise and whether they did not know that it was a class. He then ordered them to sit quietly and do their lesson."],
      ),
      ex(
        ["Given", "Mother said to me, \"Where have you been all day? You look very tired. Take a bath and have your meal.\""],
        ["Answer", "Mother asked me where I had been all day. She told me that I looked very tired and advised me to take a bath and have my meal."],
      ),
      ex(
        ["Given", "\"What a beautiful sight it is!\" said Rina. \"Let us sit here for a while,\" said her friend. \"Yes, I agree,\" said Rina."],
        ["Answer", "Rina exclaimed with wonder that it was a very beautiful sight. Her friend proposed that they should sit there for a while. Rina replied in the affirmative and said that she agreed."],
      ),
      ex(
        ["Given", "The old man said to his sons, \"My sons, I am going to die soon. I have buried a treasure in the field. Dig the field and you will find it.\""],
        ["Answer", "Addressing his sons, the old man said that he was going to die soon and added that he had buried a treasure in the field. He told them to dig the field and said that they would find it."],
      ),
      ex(
        ["Given", "\"Alas! I have lost my purse,\" said the woman. \"Where did you lose it?\" asked the policeman. \"I cannot say,\" she replied. \"Don't worry. We shall try to find it,\" said the policeman."],
        ["Answer", "The woman exclaimed with sorrow that she had lost her purse. The policeman asked her where she had lost it. She replied that she could not say. The policeman told her not to worry and assured her that they would try to find it."],
      ),
      ex(
        ["Given", "Rahim said to Karim, \"Will you go to the book fair tomorrow?\" Karim said, \"No, I shall not. I have an exam the day after tomorrow.\""],
        ["Answer", "Rahim asked Karim if he would go to the book fair the next day. Karim replied in the negative and said that he would not. He added that he had an exam two days later."],
      ),
      ex(
        ["Given", "The beggar said to the lady, \"I have eaten nothing since yesterday. Please give me some food. May God bless you.\""],
        ["Answer", "The beggar told the lady that he had eaten nothing since the previous day and begged her to give him some food. He prayed that God might bless her."],
      ),
      ex(
        ["Given", "\"Good morning, sir,\" said the student. \"Good morning. Why are you late today?\" asked the teacher. \"I missed the bus, sir,\" answered the student."],
        ["Answer", "The student respectfully wished the teacher good morning. The teacher returned the greeting and asked him why he was late that day. The student respectfully answered that he had missed the bus."],
      ),
      ex(
        ["Given", "The doctor said to the patient, \"You are very weak. Do not work hard. Take this medicine regularly and you will be all right soon.\""],
        ["Answer", "The doctor told the patient that he was very weak and advised him not to work hard. He also advised him to take that medicine regularly and assured him that he would be all right soon."],
      ),

      h("Indirect into Direct"),
      ex(
        ["Given", "The teacher asked Rafi why he had not done his homework. Rafi respectfully replied that he had been ill. The teacher advised him to take care of his health."],
        ["Answer", "The teacher said to Rafi, \"Why have you not done your homework?\" Rafi said, \"Sir, I was ill.\" The teacher said to him, \"Take care of your health.\""],
      ),
      ex(
        ["Given", "The boys exclaimed with joy that they had won the match. Their captain proposed that they should celebrate the victory."],
        ["Answer", "The boys said, \"Hurrah! We have won the match.\" Their captain said, \"Let us celebrate the victory.\""],
      ),
      ex(
        ["Given", "My friend asked me if I could lend him my dictionary. I replied in the affirmative and told him to return it the next day."],
        ["Answer", "My friend said to me, \"Can you lend me your dictionary?\" I said, \"Yes. Return it tomorrow.\""],
      ),

      h("Common mistakes"),
      note("Change every sentence of the passage, not only the first one. Each sentence keeps its own kind: a question stays a reported question, an order stays a reported order."),
      note("Keep track of who is speaking to whom. In a conversation the subject and object of the reporting verb change from sentence to sentence, and so do the pronouns."),
      note("Do not leave inverted commas, question marks or exclamation marks in the indirect speech."),
    ],
  },
];
