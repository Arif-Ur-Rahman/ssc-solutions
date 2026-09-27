// components/applicationsData.ts
//
// Formal applications the board sets most often beyond the ones kept in
// englishData.ts: requests to the Headmaster, prayers to local officials and
// complaints to the authorities, with one job application and its CV.

import type { Piece } from "./englishData";

export const applications: Piece[] = [
  {
    id: "application-for-extra-english-classes",
    title: "Application for Extra Classes in English",
    prompt:
      "Write an application to the Headmaster of your school for arranging extra classes in English for the SSC candidates.",
    vocab: [
      { word: "arrange", bn: "ব্যবস্থা করা", pos: "Verb", past: "arranged", pastParticiple: "arranged", forms: [{ label: "noun", word: "arrangement" }], synonyms: ["organise", "set up"], antonyms: ["cancel", "disorganise"] },
      { word: "candidate", bn: "পরীক্ষার্থী, প্রার্থী", pos: "Noun", forms: [{ label: "noun", word: "candidature" }], synonyms: ["examinee", "applicant"] },
      { word: "grammar", bn: "ব্যাকরণ", pos: "Noun", forms: [{ label: "adj", word: "grammatical" }, { label: "adv", word: "grammatically" }], synonyms: ["rules of language"] },
      { word: "inadequate", bn: "অপর্যাপ্ত", pos: "Adjective", forms: [{ label: "noun", word: "inadequacy" }, { label: "adv", word: "inadequately" }], synonyms: ["insufficient", "scanty"], antonyms: ["adequate", "enough"] },
      { word: "lag behind", bn: "পিছিয়ে পড়া", pos: "Phrase", synonyms: ["fall behind", "trail"], antonyms: ["keep up", "lead"] },
      { word: "syllabus", bn: "পাঠ্যসূচি", pos: "Noun", synonyms: ["curriculum", "course of study"] },
    ],
    body: [
      { type: "label", text: "20 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Gazipur Govt. High School" },
      { type: "label", text: "Gazipur" },
      { type: "label", text: "Subject: Application for arranging extra classes in English." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the students of class ten of your school, beg to state that our SSC examination will begin in about five months. Most of us are weak in English, especially in the grammar part and in writing compositions. English is a compulsory subject, and a large number of students fail in it every year.",
      },
      {
        type: "para",
        text: "We have only one English class a day, which lasts forty minutes. This time is inadequate for finishing the syllabus and practising the grammar items one by one. Many of us cannot afford a private tutor, and so we are lagging behind the students of other schools.",
      },
      {
        type: "para",
        text: "If three extra classes a week are arranged after school hours, we shall be able to clear our doubts and practise the board questions under the guidance of our teachers. We are ready to stay in school for an extra hour on those days.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to arrange extra classes in English for us and oblige thereby.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students of class ten" },
      { type: "label", text: "Nafisa Rahman" },
      { type: "label", text: "Class: Ten, Roll: 3" },
    ],
  },
  {
    id: "application-for-tree-plantation",
    title: "Application for Permission to Arrange a Tree Plantation Programme",
    prompt:
      "Write an application to the Headmaster of your school seeking permission to arrange a tree plantation programme on the school campus.",
    vocab: [
      { word: "afforestation", bn: "বনায়ন", pos: "Noun", forms: [{ label: "verb", word: "afforest (afforested)" }], synonyms: ["planting forests"], antonyms: ["deforestation"] },
      { word: "barren", bn: "অনুর্বর, ফাঁকা", pos: "Adjective", forms: [{ label: "noun", word: "barrenness" }], synonyms: ["bare", "empty"], antonyms: ["green", "fertile"] },
      { word: "campus", bn: "প্রতিষ্ঠানের চত্বর", pos: "Noun", synonyms: ["grounds", "premises"] },
      { word: "ecological balance", bn: "প্রাকৃতিক ভারসাম্য", pos: "Phrase", synonyms: ["balance of nature"] },
      { word: "sapling", bn: "চারাগাছ", pos: "Noun", synonyms: ["seedling", "young tree"] },
      { word: "volunteer", bn: "স্বেচ্ছাসেবক", pos: "Noun", forms: [{ label: "verb", word: "volunteer (volunteered)" }, { label: "adj", word: "voluntary" }], synonyms: ["helper", "worker"] },
    ],
    body: [
      { type: "label", text: "18 June 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Ishwardi Pilot High School" },
      { type: "label", text: "Pabna" },
      { type: "label", text: "Subject: Prayer for permission to arrange a tree plantation programme." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the members of the Green Club of your school, beg to state that the eastern and southern parts of our school campus are lying barren. There is hardly any tree there to give us shade in summer, and the whole place looks dull and dusty.",
      },
      {
        type: "para",
        text: "Trees are our best friends. They give us oxygen, fruit and shade, and they help to keep the ecological balance. The government is encouraging afforestation, and the rainy season is the best time for planting. We wish to plant about two hundred saplings of fruit, timber and medicinal trees on the campus. The students of class nine and ten will work as volunteers and take care of the plants throughout the year.",
      },
      {
        type: "para",
        text: "We have collected some money among ourselves, and the local forest office has promised us a hundred saplings free of cost. We need your permission and a small grant of three thousand taka for fences and fertiliser.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to permit us to arrange the programme next Saturday and grant us the money needed.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the Green Club" },
      { type: "label", text: "Tanvir Ahmed" },
      { type: "label", text: "Class: Ten, Roll: 5" },
    ],
  },
  {
    id: "application-for-help-from-poor-fund",
    title: "Application for Financial Help from the Poor Fund",
    prompt:
      "Write an application to the Headmaster of your school for financial help from the students' welfare fund (poor fund).",
    vocab: [
      { word: "bedridden", bn: "শয্যাশায়ী", pos: "Adjective", synonyms: ["confined to bed", "laid up"], antonyms: ["healthy", "active"] },
      { word: "financial", bn: "আর্থিক", pos: "Adjective", forms: [{ label: "noun", word: "finance" }, { label: "adv", word: "financially" }], synonyms: ["monetary", "economic"] },
      { word: "insolvent", bn: "অসচ্ছল, দেউলিয়া", pos: "Adjective", forms: [{ label: "noun", word: "insolvency" }], synonyms: ["poor", "penniless"], antonyms: ["solvent", "well-off"] },
      { word: "meritorious", bn: "মেধাবী", pos: "Adjective", forms: [{ label: "noun", word: "merit" }], synonyms: ["brilliant", "talented"], antonyms: ["dull", "weak"] },
      { word: "welfare", bn: "কল্যাণ", pos: "Noun", synonyms: ["well-being", "good"], antonyms: ["harm", "misfortune"] },
    ],
    body: [
      { type: "label", text: "5 March 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Rangpur Zilla School" },
      { type: "label", text: "Rangpur" },
      { type: "label", text: "Subject: Prayer for financial help from the poor fund." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "Most respectfully, I beg to state that I am a regular student of class nine of your school, bearing roll number four. I stood fourth in the last annual examination. My father is a rickshaw puller. He met with an accident three months ago and has been bedridden since then. Now there is no earning member in our family of five.",
      },
      {
        type: "para",
        text: "It has become very difficult for us to manage two meals a day. I cannot pay my tuition fees or buy the necessary books and exercise books. I am afraid I shall have to give up my studies if I do not get any help.",
      },
      {
        type: "para",
        text: "I have heard that the school has a poor fund for helping insolvent and meritorious students. I promise that I shall try my best to keep up my good result.",
      },
      {
        type: "para",
        text: "I therefore pray and hope that you would be kind enough to grant me some financial help from the poor fund so that I may continue my studies.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Md. Habibur Rahman" },
      { type: "label", text: "Class: Nine, Roll: 4" },
    ],
  },
  {
    id: "application-for-picnic-permission",
    title: "Application for Permission to Go on a Picnic",
    prompt:
      "Write an application to the Headmaster of your school for permission to go on a picnic.",
    vocab: [
      { word: "accompany", bn: "সঙ্গে যাওয়া", pos: "Verb", past: "accompanied", pastParticiple: "accompanied", forms: [{ label: "noun", word: "company" }], synonyms: ["go with", "escort"], antonyms: ["leave", "desert"] },
      { word: "monotony", bn: "একঘেয়েমি", pos: "Noun", forms: [{ label: "adj", word: "monotonous" }], synonyms: ["dullness", "sameness"], antonyms: ["variety", "excitement"] },
      { word: "picnic spot", bn: "বনভোজনের স্থান", pos: "Phrase", synonyms: ["outing place"] },
      { word: "recreation", bn: "চিত্তবিনোদন", pos: "Noun", forms: [{ label: "adj", word: "recreational" }], synonyms: ["amusement", "entertainment"], antonyms: ["work", "toil"] },
      { word: "refresh", bn: "সতেজ করা", pos: "Verb", past: "refreshed", pastParticiple: "refreshed", forms: [{ label: "noun", word: "refreshment" }, { label: "adj", word: "refreshing" }], synonyms: ["revive", "freshen"], antonyms: ["tire", "exhaust"] },
    ],
    body: [
      { type: "label", text: "2 December 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Bogura Zilla School" },
      { type: "label", text: "Bogura" },
      { type: "label", text: "Subject: Prayer for permission to go on a picnic." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of class nine of your school, beg to state that our annual examination is over and we now have some leisure. We have been studying hard for months, and we need some recreation to refresh our minds and break the monotony of study.",
      },
      {
        type: "para",
        text: "We have decided to go on a picnic to Mahasthangarh on 12 December. It is a historical place, only thirteen kilometres from our town, so the picnic will be both enjoyable and educational. About sixty students will join it, and each of us will pay five hundred taka. We shall hire two buses and leave at eight in the morning and return by five in the evening.",
      },
      {
        type: "para",
        text: "We request you to allow two of our teachers to accompany us so that everything goes well and in order.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to grant us permission to go on the picnic and oblige thereby.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students of class nine" },
      { type: "label", text: "Shihab Uddin" },
      { type: "label", text: "Class: Nine, Roll: 1" },
    ],
  },
  {
    id: "application-for-english-language-club",
    title: "Application for Setting Up an English Language Club",
    prompt:
      "Write an application to the Headmaster of your school for setting up an English Language Club.",
    vocab: [
      { word: "fluency", bn: "সাবলীলতা", pos: "Noun", forms: [{ label: "adj", word: "fluent" }, { label: "adv", word: "fluently" }], synonyms: ["ease", "smoothness"], antonyms: ["hesitancy"] },
      { word: "hesitate", bn: "দ্বিধা করা", pos: "Verb", past: "hesitated", pastParticiple: "hesitated", forms: [{ label: "noun", word: "hesitation" }], synonyms: ["falter", "waver"], antonyms: ["act promptly"] },
      { word: "international", bn: "আন্তর্জাতিক", pos: "Adjective", synonyms: ["global", "worldwide"], antonyms: ["local", "national"] },
      { word: "overcome", bn: "কাটিয়ে ওঠা", pos: "Verb", past: "overcame", pastParticiple: "overcome", synonyms: ["conquer", "get over"], antonyms: ["give in", "yield"] },
      { word: "recitation", bn: "আবৃত্তি", pos: "Noun", forms: [{ label: "verb", word: "recite (recited)" }], synonyms: ["reading aloud"] },
    ],
    body: [
      { type: "label", text: "12 February 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Motijheel Model High School" },
      { type: "label", text: "Dhaka" },
      { type: "label", text: "Subject: Application for setting up an English Language Club." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the students of your school, beg to state that English is an international language, and it is needed for higher studies, good jobs and communication with the outside world. Though we have been learning English for ten years, most of us cannot speak it fluently. We hesitate to speak even a few sentences, because we have no chance to practise.",
      },
      {
        type: "para",
        text: "An English Language Club would help us overcome this problem. The club can meet twice a week after school hours. There we shall practise conversation, hold debates and speech competitions, arrange recitation and spelling contests and publish a wall magazine in English. Our English teachers can guide us.",
      },
      {
        type: "para",
        text: "We need a room, some books, a few dictionaries, a sound system and a small monthly grant to run the club.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to allow us to set up an English Language Club and provide the necessary help.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Ayesha Siddika" },
      { type: "label", text: "Class: Ten, Roll: 2" },
    ],
  },
  {
    id: "application-for-relief-camp-in-school",
    title: "Application for Opening a Relief Camp in the School",
    prompt:
      "Write an application to the Headmaster of your school for opening a relief camp on the school campus for the flood-affected people.",
    vocab: [
      { word: "contribute", bn: "অবদান রাখা, দান করা", pos: "Verb", past: "contributed", pastParticiple: "contributed", forms: [{ label: "noun", word: "contribution" }], synonyms: ["donate", "give"], antonyms: ["withhold", "take"] },
      { word: "distress", bn: "দুর্দশা", pos: "Noun", forms: [{ label: "adj", word: "distressed" }], synonyms: ["suffering", "misery"], antonyms: ["comfort", "relief"] },
      { word: "homeless", bn: "গৃহহীন", pos: "Adjective", forms: [{ label: "noun", word: "homelessness" }], synonyms: ["shelterless", "destitute"] },
      { word: "humanitarian", bn: "মানবিক", pos: "Adjective", forms: [{ label: "noun", word: "humanity" }], synonyms: ["charitable", "kind"], antonyms: ["cruel", "selfish"] },
      { word: "suspend", bn: "স্থগিত রাখা", pos: "Verb", past: "suspended", pastParticiple: "suspended", forms: [{ label: "noun", word: "suspension" }], synonyms: ["put off", "stop for a while"], antonyms: ["continue", "resume"] },
    ],
    body: [
      { type: "label", text: "25 August 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Sirajganj Govt. High School" },
      { type: "label", text: "Sirajganj" },
      { type: "label", text: "Subject: Prayer for opening a relief camp in the school." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to draw your attention to the distress of the flood-affected people of our area. The Jamuna has flooded many villages near the town. Hundreds of families have become homeless, and they are passing their days on the embankment without food, pure water or medicine.",
      },
      {
        type: "para",
        text: "Our school building stands on high ground and is now closed for the flood. We think it can be used as a relief camp for the time being. We, the students, are ready to collect money, rice, clothes and medicine from the well-to-do people of the town, and to work as volunteers. Our teachers and the local doctors have also agreed to help us.",
      },
      {
        type: "para",
        text: "It is a humanitarian duty, and it will also teach us to serve people in their need. We shall keep the classrooms clean and hand them back as soon as the water goes down.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to permit us to open a relief camp on the school campus and contribute to the fund yourself.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Mahmudul Hasan" },
      { type: "label", text: "Class: Ten, Roll: 6" },
    ],
  },
  {
    id: "application-for-constructing-bridge",
    title: "Application for Constructing a Bridge",
    prompt:
      "Write an application to the Upazila Nirbahi Officer (UNO) of your area for constructing a bridge over the canal near your village.",
    vocab: [
      { word: "bamboo bridge", bn: "বাঁশের সাঁকো", pos: "Phrase", synonyms: ["makeshift bridge"] },
      { word: "canal", bn: "খাল", pos: "Noun", synonyms: ["channel", "waterway"] },
      { word: "construct", bn: "নির্মাণ করা", pos: "Verb", past: "constructed", pastParticiple: "constructed", forms: [{ label: "noun", word: "construction" }], synonyms: ["build", "erect"], antonyms: ["demolish", "destroy"] },
      { word: "perilous", bn: "বিপজ্জনক", pos: "Adjective", forms: [{ label: "noun", word: "peril" }], synonyms: ["dangerous", "risky"], antonyms: ["safe", "secure"] },
      { word: "perishable", bn: "পচনশীল", pos: "Adjective", forms: [{ label: "verb", word: "perish (perished)" }], synonyms: ["decaying"], antonyms: ["durable", "lasting"] },
      { word: "rickety", bn: "নড়বড়ে", pos: "Adjective", synonyms: ["shaky", "unsteady"], antonyms: ["sturdy", "firm"] },
    ],
    body: [
      { type: "label", text: "10 July 2026" },
      { type: "label", text: "The Upazila Nirbahi Officer" },
      { type: "label", text: "Kalkini Upazila" },
      { type: "label", text: "Madaripur" },
      { type: "label", text: "Subject: Prayer for constructing a bridge over the canal." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the inhabitants of the village of Dasar under your upazila, beg to state that a wide canal separates our village from the upazila headquarters. There is only a rickety bamboo bridge over it, which has become very perilous. Every year in the rainy season it gets broken, and people have to cross the canal by boat or by swimming.",
      },
      {
        type: "para",
        text: "Hundreds of students go to school and college across this canal every day. Last month a child fell from the bridge and was drowned. Patients cannot be taken to the hospital in time. The farmers cannot carry their crops and perishable vegetables to the market, and so they do not get a fair price.",
      },
      {
        type: "para",
        text: "A concrete bridge over the canal would end our suffering and bring about the development of the whole area.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to take steps to construct a bridge over the canal as early as possible.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the villagers" },
      { type: "label", text: "Abdur Rahim" },
      { type: "label", text: "Dasar, Kalkini, Madaripur" },
    ],
  },
  {
    id: "application-for-sanctioning-tube-well",
    title: "Application for Sanctioning Tube-wells",
    prompt:
      "Write an application to the Chairman of your Union Parishad for sanctioning some tube-wells in your village.",
    vocab: [
      { word: "arsenic", bn: "আর্সেনিক (বিষাক্ত মৌল)", pos: "Noun", forms: [{ label: "noun", word: "arsenicosis" }], synonyms: ["poisonous element"] },
      { word: "contaminated", bn: "দূষিত", pos: "Adjective", forms: [{ label: "verb", word: "contaminate (contaminated)" }, { label: "noun", word: "contamination" }], synonyms: ["polluted", "impure"], antonyms: ["pure", "clean"] },
      { word: "pond", bn: "পুকুর", pos: "Noun", synonyms: ["pool", "tank"] },
      { word: "sanction", bn: "মঞ্জুর করা", pos: "Verb", past: "sanctioned", pastParticiple: "sanctioned", forms: [{ label: "noun", word: "sanction" }], synonyms: ["approve", "grant"], antonyms: ["refuse", "reject"] },
      { word: "scarcity", bn: "অভাব, দুষ্প্রাপ্যতা", pos: "Noun", forms: [{ label: "adj", word: "scarce" }], synonyms: ["shortage", "lack"], antonyms: ["plenty", "abundance"] },
    ],
    body: [
      { type: "label", text: "15 April 2026" },
      { type: "label", text: "The Chairman" },
      { type: "label", text: "Shakpura Union Parishad" },
      { type: "label", text: "Boalkhali, Chattogram" },
      { type: "label", text: "Subject: Prayer for sanctioning tube-wells." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the inhabitants of the village of Paschim Shakpura under your union, beg to state that we have been suffering from a great scarcity of pure drinking water. There are about three hundred families in our village, but there are only two tube-wells, and one of them has been found to contain arsenic.",
      },
      {
        type: "para",
        text: "Most people have to drink the water of ponds and canals, which is contaminated. As a result, diarrhoea, dysentery, typhoid and jaundice are common here, and children suffer most. The women have to walk a long way every day to fetch a pitcher of water.",
      },
      {
        type: "para",
        text: "At least five deep tube-wells are needed in different parts of the village to solve this problem.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to sanction five deep tube-wells for our village and save us from this suffering.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the villagers" },
      { type: "label", text: "Nurul Amin" },
      { type: "label", text: "Paschim Shakpura, Boalkhali" },
    ],
  },
  {
    id: "application-against-anti-social-activities",
    title: "Application for Taking Steps against Anti-social Activities",
    prompt:
      "Write an application to the Officer-in-Charge of your local police station for taking steps against anti-social activities in your area.",
    vocab: [
      { word: "anti-social", bn: "সমাজবিরোধী", pos: "Adjective", synonyms: ["criminal", "lawless"], antonyms: ["law-abiding"] },
      { word: "drug addict", bn: "মাদকাসক্ত", pos: "Phrase", forms: [{ label: "noun", word: "addiction" }], synonyms: ["drug user"] },
      { word: "eve-teasing", bn: "ইভটিজিং, মেয়েদের উত্ত্যক্ত করা", pos: "Noun", synonyms: ["harassment of girls"] },
      { word: "extortion", bn: "চাঁদাবাজি", pos: "Noun", forms: [{ label: "verb", word: "extort (extorted)" }], synonyms: ["blackmail"] },
      { word: "insecurity", bn: "নিরাপত্তাহীনতা", pos: "Noun", forms: [{ label: "adj", word: "insecure" }], synonyms: ["danger", "unsafety"], antonyms: ["security", "safety"] },
      { word: "miscreant", bn: "দুর্বৃত্ত", pos: "Noun", synonyms: ["criminal", "wrongdoer"], antonyms: ["good citizen"] },
    ],
    body: [
      { type: "label", text: "8 May 2026" },
      { type: "label", text: "The Officer-in-Charge" },
      { type: "label", text: "Kotwali Police Station" },
      { type: "label", text: "Jashore" },
      { type: "label", text: "Subject: Prayer for taking steps against anti-social activities." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the residents of Ghop Road area of Jashore town, beg to draw your kind attention to the anti-social activities that have been going on in our locality for some months. A gang of miscreants gathers every evening at the corner of the playground. They take drugs openly, gamble and create disturbance late at night.",
      },
      {
        type: "para",
        text: "They tease the schoolgirls on their way to and from school, and some guardians have already stopped sending their daughters to school. They also demand money from the shopkeepers, and theft and mugging have become regular affairs. Nobody dares to protest for fear of them. We are living in great insecurity.",
      },
      {
        type: "para",
        text: "If police patrolling is arranged regularly at night and the leaders of the gang are arrested, peace will return to our area.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to take immediate steps against these anti-social activities and save us from this situation.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the residents" },
      { type: "label", text: "Md. Kamal Hossain" },
      { type: "label", text: "Ghop Road, Jashore" },
    ],
  },
  {
    id: "application-about-load-shedding",
    title: "Complaint about Frequent Load-shedding",
    prompt:
      "Write an application to the Executive Engineer of the electricity supply office complaining about frequent load-shedding in your area.",
    vocab: [
      { word: "disrupt", bn: "ব্যাহত করা", pos: "Verb", past: "disrupted", pastParticiple: "disrupted", forms: [{ label: "noun", word: "disruption" }], synonyms: ["disturb", "interrupt"], antonyms: ["continue", "maintain"] },
      { word: "frequent", bn: "ঘন ঘন", pos: "Adjective", forms: [{ label: "adv", word: "frequently" }, { label: "noun", word: "frequency" }], synonyms: ["repeated", "regular"], antonyms: ["rare", "occasional"] },
      { word: "load-shedding", bn: "লোডশেডিং, বিদ্যুৎ বিভ্রাট", pos: "Noun", synonyms: ["power cut", "power outage"] },
      { word: "sultry", bn: "ভ্যাপসা গরম", pos: "Adjective", synonyms: ["humid", "muggy"], antonyms: ["cool", "fresh"] },
      { word: "unbearable", bn: "অসহনীয়", pos: "Adjective", forms: [{ label: "verb", word: "bear" }], synonyms: ["intolerable"], antonyms: ["bearable", "tolerable"] },
    ],
    body: [
      { type: "label", text: "22 May 2026" },
      { type: "label", text: "The Executive Engineer" },
      { type: "label", text: "Bangladesh Power Development Board" },
      { type: "label", text: "Mymensingh" },
      { type: "label", text: "Subject: Complaint about frequent load-shedding." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the residents of Kewatkhali area of Mymensingh town, beg to state that we have been suffering from frequent load-shedding for the last two months. There is no electricity for six to eight hours a day, and often it goes off at night and does not come back till morning.",
      },
      {
        type: "para",
        text: "Our sufferings know no bounds in this sultry weather. Students cannot study at night, and our SSC test examination is only a month away. The old and the sick are having an unbearable time. Water pumps do not work, and so the supply of water is also disrupted. Small factories and shops are losing business, and many workers have become idle.",
      },
      {
        type: "para",
        text: "We are paying our bills regularly, yet we do not get a regular supply of electricity.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to take proper steps to ensure a regular supply of electricity to our area, at least in the evening hours.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the residents" },
      { type: "label", text: "Rezaul Karim" },
      { type: "label", text: "Kewatkhali, Mymensingh" },
    ],
  },
  {
    id: "application-about-water-supply",
    title: "Complaint about Insufficient Water Supply",
    prompt:
      "Write an application to the Managing Director of WASA complaining about the insufficient supply of water in your area.",
    vocab: [
      { word: "insufficient", bn: "অপর্যাপ্ত", pos: "Adjective", forms: [{ label: "noun", word: "insufficiency" }], synonyms: ["inadequate", "scanty"], antonyms: ["sufficient", "enough"] },
      { word: "muddy", bn: "কাদাযুক্ত, ঘোলা", pos: "Adjective", forms: [{ label: "noun", word: "mud" }], synonyms: ["dirty", "murky"], antonyms: ["clear", "clean"] },
      { word: "pipeline", bn: "পাইপলাইন, পানির লাইন", pos: "Noun", synonyms: ["pipe", "conduit"] },
      { word: "queue", bn: "লাইন, সারি", pos: "Noun", forms: [{ label: "verb", word: "queue (queued)" }], synonyms: ["line", "row"] },
      { word: "stench", bn: "দুর্গন্ধ", pos: "Noun", synonyms: ["stink", "foul smell"], antonyms: ["fragrance", "aroma"] },
    ],
    body: [
      { type: "label", text: "14 April 2026" },
      { type: "label", text: "The Managing Director" },
      { type: "label", text: "Dhaka WASA" },
      { type: "label", text: "Kawran Bazar, Dhaka" },
      { type: "label", text: "Subject: Complaint about insufficient supply of water." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the residents of Mohammadpur area, beg to inform you that we have been suffering from an acute shortage of water for the last one month. Water comes to our taps for only an hour a day, and even that is so weak that it does not reach the upper floors of the buildings.",
      },
      {
        type: "para",
        text: "Moreover, the little water we get is muddy and gives off a bad stench. It seems that the pipeline has been damaged somewhere and sewage is mixing with it. Many people, especially children, are suffering from diarrhoea and jaundice. People have to stand in long queues before a single pump or buy water at a high price.",
      },
      {
        type: "para",
        text: "We cannot cook, wash or even bathe properly. Life has become miserable in this summer heat.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to repair the damaged pipeline and ensure a sufficient supply of pure water to our area without delay.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the residents" },
      { type: "label", text: "Shahana Parvin" },
      { type: "label", text: "Block C, Mohammadpur, Dhaka" },
    ],
  },
  {
    id: "application-about-canteen-food",
    title: "Complaint about the Poor Quality of Canteen Food",
    prompt:
      "Write an application to the Headmaster of your school complaining about the poor quality of food sold in the school canteen.",
    vocab: [
      { word: "adulterated", bn: "ভেজাল মিশ্রিত", pos: "Adjective", forms: [{ label: "verb", word: "adulterate (adulterated)" }, { label: "noun", word: "adulteration" }], synonyms: ["impure", "mixed"], antonyms: ["pure", "genuine"] },
      { word: "exorbitant", bn: "অত্যধিক (দাম)", pos: "Adjective", synonyms: ["excessive", "unreasonable"], antonyms: ["reasonable", "cheap"] },
      { word: "hygiene", bn: "স্বাস্থ্যবিধি, পরিচ্ছন্নতা", pos: "Noun", forms: [{ label: "adj", word: "hygienic" }], synonyms: ["cleanliness", "sanitation"], antonyms: ["dirtiness"] },
      { word: "stale", bn: "বাসি", pos: "Adjective", forms: [{ label: "noun", word: "staleness" }], synonyms: ["old", "not fresh"], antonyms: ["fresh"] },
      { word: "unhygienic", bn: "অস্বাস্থ্যকর", pos: "Adjective", synonyms: ["unclean", "insanitary"], antonyms: ["hygienic", "sanitary"] },
    ],
    body: [
      { type: "label", text: "3 September 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Barishal Zilla School" },
      { type: "label", text: "Barishal" },
      { type: "label", text: "Subject: Complaint about the poor quality of food in the school canteen." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "With due respect, we, the students of your school, beg to draw your attention to the poor condition of our school canteen. Most of the students take their tiffin there, but the food sold there is of very poor quality.",
      },
      {
        type: "para",
        text: "The singaras and puris are often stale and fried in old, burnt oil. The cakes and biscuits are sometimes past their dates. The food is kept uncovered, and flies sit on it all day. The plates and glasses are not washed properly, and the drinking water is not purified. The whole place is unhygienic. Yet the prices are exorbitant. Last week several students suffered from stomach trouble after eating there.",
      },
      {
        type: "para",
        text: "We think the canteen should be inspected regularly, hygiene should be ensured and a fixed price list should be hung on the wall.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to take necessary steps to improve the quality of food in the canteen.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "On behalf of the students" },
      { type: "label", text: "Rakibul Hasan" },
      { type: "label", text: "Class: Ten, Roll: 9" },
    ],
  },
  {
    id: "application-about-irregular-postal-delivery",
    title: "Complaint about Irregular Delivery of Letters",
    prompt:
      "Write an application to the Postmaster of your local post office complaining about the irregular delivery of letters.",
    vocab: [
      { word: "appointment letter", bn: "নিয়োগপত্র", pos: "Phrase", synonyms: ["letter of appointment"] },
      { word: "deliver", bn: "বিলি করা, পৌঁছে দেওয়া", pos: "Verb", past: "delivered", pastParticiple: "delivered", forms: [{ label: "noun", word: "delivery" }], synonyms: ["hand over", "distribute"], antonyms: ["withhold", "keep back"] },
      { word: "irregular", bn: "অনিয়মিত", pos: "Adjective", forms: [{ label: "noun", word: "irregularity" }, { label: "adv", word: "irregularly" }], synonyms: ["uneven", "erratic"], antonyms: ["regular", "punctual"] },
      { word: "negligence", bn: "অবহেলা", pos: "Noun", forms: [{ label: "adj", word: "negligent" }, { label: "verb", word: "neglect" }], synonyms: ["carelessness"], antonyms: ["care", "attention"] },
      { word: "postman", bn: "ডাকপিয়ন", pos: "Noun", synonyms: ["mail carrier"] },
    ],
    body: [
      { type: "label", text: "11 October 2026" },
      { type: "label", text: "The Postmaster" },
      { type: "label", text: "Shibganj Post Office" },
      { type: "label", text: "Chapainawabganj" },
      { type: "label", text: "Subject: Complaint about irregular delivery of letters." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "We, the residents of the village of Kansat under your post office, beg to state that letters are not being delivered regularly in our area. The postman comes only once or twice a week, and he leaves the letters at a tea stall instead of delivering them to the people concerned.",
      },
      {
        type: "para",
        text: "As a result, letters reach us late, and some are lost altogether. Last month an appointment letter reached one of our young men three days after his joining date, and he lost the job. Students have missed interview cards and admission letters. Money orders and parcels are also delayed.",
      },
      {
        type: "para",
        text: "We believe this is due to the negligence of the postman concerned.",
      },
      {
        type: "para",
        text: "We therefore pray and hope that you would be kind enough to look into the matter and ensure regular delivery of letters in our area.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "On behalf of the villagers" },
      { type: "label", text: "Golam Mostafa" },
      { type: "label", text: "Kansat, Shibganj" },
    ],
  },
  {
    id: "application-for-admission",
    title: "Application for Admission into Class Nine",
    prompt:
      "You have recently come to a new town with your family. Write an application to the Headmaster of a school for admission into class nine.",
    vocab: [
      { word: "admission", bn: "ভর্তি", pos: "Noun", forms: [{ label: "verb", word: "admit (admitted)" }], synonyms: ["entry", "enrolment"], antonyms: ["expulsion"] },
      { word: "admission test", bn: "ভর্তি পরীক্ষা", pos: "Phrase", synonyms: ["entrance test"] },
      { word: "enclose", bn: "সংযুক্ত করা", pos: "Verb", past: "enclosed", pastParticiple: "enclosed", forms: [{ label: "noun", word: "enclosure" }], synonyms: ["attach", "include"] },
      { word: "reputation", bn: "সুনাম", pos: "Noun", forms: [{ label: "adj", word: "reputed" }], synonyms: ["fame", "name"], antonyms: ["disrepute", "infamy"] },
      { word: "vacant", bn: "খালি", pos: "Adjective", forms: [{ label: "noun", word: "vacancy" }], synonyms: ["empty", "unoccupied"], antonyms: ["occupied", "filled"] },
    ],
    body: [
      { type: "label", text: "7 February 2026" },
      { type: "label", text: "The Headmaster" },
      { type: "label", text: "Khulna Zilla School" },
      { type: "label", text: "Khulna" },
      { type: "label", text: "Subject: Application for admission into class nine." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "Most respectfully, I beg to state that I passed the class eight annual examination from Lalmonirhat Govt. High School and was promoted to class nine in the science group. My father is a government employee, and he has recently been transferred to Khulna. So our whole family has come here, and I cannot continue my studies at my previous school.",
      },
      {
        type: "para",
        text: "Your school has a great reputation for good results and discipline. I came to know that there are a few vacant seats in class nine. I obtained GPA 4.83 in the last annual examination, and I am ready to sit for an admission test if necessary. I have enclosed my transfer certificate and my last mark sheet with this application.",
      },
      {
        type: "para",
        text: "I therefore pray and hope that you would be kind enough to admit me into class nine in the science group and oblige thereby.",
      },
      { type: "label", text: "Yours obediently" },
      { type: "label", text: "Fahim Shahriar" },
      { type: "label", text: "Enclosure: Transfer certificate and mark sheet" },
    ],
  },
  {
    id: "application-for-post-of-computer-operator",
    title: "Application for the Post of a Computer Operator",
    prompt:
      "Write an application with a CV for the post of a computer operator in response to an advertisement in The Daily Star.",
    vocab: [
      { word: "advertisement", bn: "বিজ্ঞাপন", pos: "Noun", forms: [{ label: "verb", word: "advertise (advertised)" }], synonyms: ["notice", "announcement"] },
      { word: "candidate", bn: "প্রার্থী", pos: "Noun", synonyms: ["applicant", "contender"] },
      { word: "curriculum vitae", bn: "জীবনবৃত্তান্ত", pos: "Phrase", synonyms: ["CV", "resume"] },
      { word: "proficient", bn: "দক্ষ", pos: "Adjective", forms: [{ label: "noun", word: "proficiency" }], synonyms: ["skilled", "expert"], antonyms: ["unskilled", "incompetent"] },
      { word: "reference", bn: "তথ্যসূত্র, সুপারিশকারী", pos: "Noun", forms: [{ label: "verb", word: "refer (referred)" }], synonyms: ["referee", "recommender"] },
      { word: "vacancy", bn: "শূন্য পদ", pos: "Noun", forms: [{ label: "adj", word: "vacant" }], synonyms: ["opening", "post"] },
    ],
    body: [
      { type: "label", text: "1 October 2026" },
      { type: "label", text: "The Managing Director" },
      { type: "label", text: "Rupsha Trading Company Ltd." },
      { type: "label", text: "12 Agrabad C/A, Chattogram" },
      { type: "label", text: "Subject: Application for the post of a computer operator." },
      { type: "label", text: "Sir" },
      {
        type: "para",
        text: "In response to your advertisement published in The Daily Star on 25 September 2026, I offer myself as a candidate for the post of a computer operator in your company. I believe I have the qualifications and experience you need. My curriculum vitae is given below for your kind consideration.",
      },
      {
        type: "para",
        text: "If I am given a chance, I shall try my best to perform my duties sincerely and to the full satisfaction of my superiors.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Md. Imran Hossain" },
      { type: "label", text: "Curriculum Vitae" },
      { type: "label", text: "Name: Md. Imran Hossain" },
      { type: "label", text: "Father's name: Md. Anwar Hossain" },
      { type: "label", text: "Mother's name: Rokeya Begum" },
      { type: "label", text: "Present address: 45 Chawkbazar, Chattogram" },
      { type: "label", text: "Permanent address: Vill. Mirsharai, P.O. Mirsharai, Dist. Chattogram" },
      { type: "label", text: "Date of birth: 10 March 2004" },
      { type: "label", text: "Nationality: Bangladeshi (by birth)" },
      { type: "label", text: "Religion: Islam" },
      { type: "label", text: "Mobile: 01812-345678; Email: imran.hossain04@gmail.com" },
      { type: "label", text: "Educational qualifications: SSC (Science), Chattogram Board, 2020, GPA 4.72; HSC (Science), Chattogram Board, 2022, GPA 4.50" },
      { type: "label", text: "Computer skills: Six-month diploma in computer applications from the Bangladesh Technical Education Board; proficient in MS Word, Excel, PowerPoint, Bangla and English typing (40 words per minute) and email and internet" },
      { type: "label", text: "Experience: One year as a data entry operator at Karnaphuli Traders" },
      { type: "label", text: "Languages: Bangla and English" },
      { type: "label", text: "Reference: Professor Abdul Mannan, Department of Accounting, Govt. City College, Chattogram" },
      { type: "label", text: "I hereby declare that the information given above is true." },
      { type: "label", text: "Md. Imran Hossain" },
    ],
  },
];
