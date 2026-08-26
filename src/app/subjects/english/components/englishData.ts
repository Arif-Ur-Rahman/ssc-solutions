// components/englishData.ts
//
// SSC English, organised the way students actually revise it: by the kind of
// writing the exam asks for. A category is one sidebar item (Paragraph,
// Completing Story, Dialogue, …) and each piece under it is one topic that
// opens in the reading pane.
//
// Everything here is written for this site, so it can be reproduced freely.

export type Block =
  // A body paragraph.
  | { type: "para"; text: string }
  // One turn of a dialogue.
  | { type: "dialogue"; speaker: string; text: string }
  // A standalone line in a letter or application: date, subject, salutation.
  | { type: "label"; text: string }
  // Called-out line such as the title or the moral of a story.
  | { type: "note"; label: string; text: string };

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

/* ─────────────────────────── Paragraphs ─────────────────────────── */

const paragraphs: Piece[] = [
  {
    id: "load-shedding",
    title: "Load Shedding",
    prompt:
      "Write a paragraph on 'Load Shedding' by answering the following questions.",
    hints: [
      "What is load shedding?",
      "What are the causes of load shedding?",
      "How does it affect our daily life?",
      "How does it affect trade and industry?",
      "What should be done to solve the problem?",
    ],
    vocab: [
      { word: "beyond description", bn: "বর্ণনাতীত", pos: "Phrase", synonyms: ["indescribable", "beyond words"] },
      { word: "consumer", bn: "ভোক্তা, ব্যবহারকারী", pos: "Noun", forms: [{ label: "verb", word: "consume" }, { label: "noun", word: "consumption" }], synonyms: ["user", "buyer"], antonyms: ["producer"] },
      { word: "curse", bn: "অভিশাপ", pos: "Noun", forms: [{ label: "verb", word: "curse (cursed)" }, { label: "adj", word: "cursed" }], synonyms: ["bane", "evil"], antonyms: ["blessing", "boon"] },
      { word: "demand", bn: "চাহিদা, দাবি", pos: "Noun", forms: [{ label: "verb", word: "demand" }, { label: "adj", word: "demanding" }], synonyms: ["requirement", "need"], antonyms: ["supply"] },
      { word: "shortage", bn: "ঘাটতি, অভাব", pos: "Noun", forms: [{ label: "adj", word: "short" }], synonyms: ["scarcity", "lack"], antonyms: ["abundance", "plenty"] },
      { word: "standstill", bn: "অচলাবস্থা, স্থবিরতা", pos: "Noun", synonyms: ["halt", "deadlock"], antonyms: ["movement", "progress"] },
      { word: "suspension", bn: "স্থগিতকরণ, সাময়িক বন্ধ", pos: "Noun", forms: [{ label: "verb", word: "suspend" }, { label: "adj", word: "suspended" }], synonyms: ["stoppage", "halt"], antonyms: ["continuation"] },
      { word: "unbearable", bn: "অসহনীয়", pos: "Adjective", forms: [{ label: "verb", word: "bear (bore, borne)" }], synonyms: ["intolerable", "unendurable"], antonyms: ["bearable", "tolerable"] },
      { word: "unsolvable", bn: "সমাধান করা যায় না এমন", pos: "Adjective", forms: [{ label: "verb", word: "solve" }, { label: "noun", word: "solution" }], synonyms: ["insoluble"], antonyms: ["solvable"] },
    ],
    body: [
      {
        type: "para",
        text: "Load shedding means the temporary suspension of the electricity supply in an area when the demand for power is greater than the amount produced. It has become a regular affair in our country, particularly in the hot months. There are several reasons behind it. The number of consumers is rising every year, but production has not increased at the same rate. Old power plants, a shortage of gas and coal, illegal connections and the sheer waste of electricity in our homes and offices make matters worse. The sufferings caused by load shedding are beyond description. Students cannot study at night, patients suffer in hospitals when the machines stop, and housewives find their daily work at a standstill. Mills and factories lose production, and businessmen count their losses as goods rot in the dark. Even a few hours without power in summer make life unbearable. The problem, however, is not unsolvable. New power plants should be set up and the old ones repaired. The use of solar energy ought to be encouraged and illegal connections must be stopped. Above all, each of us should be careful not to waste a single unit of electricity. Only then can we get rid of this curse.",
      },
    ],
  },
  {
    id: "environmental-pollution",
    title: "Environmental Pollution",
    prompt:
      "Write a paragraph on 'Environmental Pollution' by answering the following questions.",
    hints: [
      "What is environmental pollution?",
      "What are the main kinds of pollution?",
      "What causes them?",
      "What are the consequences?",
      "How can we check pollution?",
    ],
    vocab: [
      { word: "alarming", bn: "উদ্বেগজনক, ভয়াবহ", pos: "Adjective", forms: [{ label: "noun", word: "alarm" }, { label: "verb", word: "alarm (alarmed)" }], synonyms: ["frightening", "startling"], antonyms: ["reassuring", "comforting"] },
      { word: "awareness", bn: "সচেতনতা", pos: "Noun", forms: [{ label: "adj", word: "aware" }], synonyms: ["consciousness", "understanding"], antonyms: ["ignorance", "unawareness"] },
      { word: "consequence", bn: "পরিণতি, ফলাফল", pos: "Noun", forms: [{ label: "adj", word: "consequent" }, { label: "adv", word: "consequently" }], synonyms: ["result", "outcome"], antonyms: ["cause", "origin"] },
      { word: "contamination", bn: "দূষণ, কলুষিতকরণ", pos: "Noun", forms: [{ label: "verb", word: "contaminate" }, { label: "adj", word: "contaminated" }], synonyms: ["pollution", "defilement"], antonyms: ["purification"] },
      { word: "fertiliser", bn: "রাসায়নিক সার", pos: "Noun", forms: [{ label: "adj", word: "fertile" }, { label: "verb", word: "fertilise" }], synonyms: ["manure"] },
      { word: "insecticide", bn: "কীটনাশক", pos: "Noun", synonyms: ["pesticide"] },
      { word: "kiln", bn: "ইটের ভাটা", pos: "Noun", synonyms: ["furnace", "oven"] },
      { word: "substance", bn: "পদার্থ, বস্তু", pos: "Noun", forms: [{ label: "adj", word: "substantial" }], synonyms: ["material", "matter"] },
      { word: "unfit", bn: "অনুপযুক্ত", pos: "Adjective", forms: [{ label: "noun", word: "unfitness" }, { label: "adj", word: "fit" }], synonyms: ["unsuitable", "improper"], antonyms: ["fit", "suitable"] },
      { word: "untreated", bn: "অপরিশোধিত", pos: "Adjective", forms: [{ label: "verb", word: "treat" }, { label: "noun", word: "treatment" }], synonyms: ["raw", "unprocessed"], antonyms: ["treated", "purified"] },
      { word: "yield", bn: "ফলন, উৎপাদন", pos: "Noun", forms: [{ label: "verb", word: "yield (yielded)" }], synonyms: ["produce", "output"] },
    ],
    body: [
      {
        type: "para",
        text: "Environment means the air, water and land around us, and environmental pollution means the contamination of these elements by harmful substances. Pollution is chiefly of four kinds: air pollution, water pollution, soil pollution and sound pollution. The smoke pouring out of mills, factories, brick kilns and motor vehicles poisons the air we breathe. Mill owners dump untreated waste into rivers and canals, and farmers wash chemical fertilisers and insecticides into the same water, killing fish and making the water unfit to drink. Polythene bags and unmanaged garbage spoil the soil, while horns, microphones and mills fill our cities with unbearable noise. The consequences are alarming. People suffer from asthma, skin diseases, diarrhoea and deafness; crops lose their yield; and the rise in temperature is melting the polar ice, which threatens a low-lying country like ours. To check pollution, mills and factories should be set up far from residential areas and made to treat their waste. Vehicles that emit black smoke must be banned, the use of polythene should be stopped and trees should be planted in large numbers. Public awareness is the key, for the environment can be saved only when all of us take care of it.",
      },
    ],
  },
  {
    id: "traffic-jam",
    title: "Traffic Jam",
    prompt:
      "Write a paragraph on 'Traffic Jam' by answering the following questions.",
    hints: [
      "What is a traffic jam?",
      "Where does it usually happen?",
      "What are its causes?",
      "How do people suffer from it?",
      "What can be done to reduce it?",
    ],
    vocab: [
      { word: "enforce", bn: "বলবৎ করা, কার্যকর করা", pos: "Verb", past: "enforced", pastParticiple: "enforced", forms: [{ label: "noun", word: "enforcement" }], synonyms: ["implement", "impose"], antonyms: ["neglect", "relax"] },
      { word: "flyover", bn: "উড়ালসেতু", pos: "Noun", synonyms: ["overpass"], antonyms: ["subway", "underpass"] },
      { word: "footpath", bn: "ফুটপাত", pos: "Noun", synonyms: ["pavement", "sidewalk"] },
      { word: "overtake", bn: "পাশ কাটিয়ে এগিয়ে যাওয়া", pos: "Verb", past: "overtook", pastParticiple: "overtaken", synonyms: ["pass", "surpass"], antonyms: ["follow", "trail"] },
      { word: "pedestrian", bn: "পথচারী", pos: "Noun", synonyms: ["walker", "foot-passenger"], antonyms: ["driver", "rider"] },
      { word: "subway", bn: "পাতাল পথ", pos: "Noun", synonyms: ["underpass", "tunnel"], antonyms: ["flyover", "overpass"] },
      { word: "unfit", bn: "অনুপযুক্ত, চলাচলের অযোগ্য", pos: "Adjective", forms: [{ label: "noun", word: "unfitness" }], synonyms: ["unsuitable", "unusable"], antonyms: ["fit", "roadworthy"] },
      { word: "unlicensed", bn: "লাইসেন্সবিহীন", pos: "Adjective", forms: [{ label: "noun", word: "licence" }, { label: "verb", word: "license" }], synonyms: ["unauthorised", "illegal"], antonyms: ["licensed", "authorised"] },
      { word: "widen", bn: "প্রশস্ত করা", pos: "Verb", past: "widened", pastParticiple: "widened", forms: [{ label: "adj", word: "wide" }, { label: "noun", word: "width" }], synonyms: ["broaden", "expand"], antonyms: ["narrow"] },
    ],
    body: [
      {
        type: "para",
        text: "A traffic jam is a long line of vehicles that can hardly move on a road. It is a common sight in the big cities of our country, especially in Dhaka and Chattogram, and it is at its worst in the morning and in the evening when offices open and close. There are many causes behind it. Our roads are narrow and few in number compared with the huge number of vehicles that use them. Many drivers are unlicensed and unwilling to obey traffic rules; they overtake dangerously and park wherever they please. Illegal markets and shops on the footpaths force pedestrians onto the road, and unfit vehicles break down in the middle of the street. The sufferings of the people are endless. Office-goers reach late, students miss their examinations and, worst of all, ambulances carrying dying patients get stuck for hours. Valuable working hours are lost every day and the economy pays the price. To reduce the problem, roads should be widened and flyovers and subways built, traffic rules must be enforced strictly, and unfit vehicles removed from the streets. If people are made aware of traffic rules, this daily suffering can largely be avoided.",
      },
    ],
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation",
    prompt:
      "Write a paragraph on 'Tree Plantation' by answering the following questions.",
    hints: [
      "What is tree plantation?",
      "Why are trees important to us?",
      "What happens when trees are cut down?",
      "When and where should we plant trees?",
      "What should be done to encourage it?",
    ],
    vocab: [
      { word: "compound", bn: "প্রাঙ্গণ, চত্বর", pos: "Noun", synonyms: ["premises", "yard"] },
      { word: "drought", bn: "খরা, অনাবৃষ্টি", pos: "Noun", forms: [{ label: "adj", word: "dry" }], synonyms: ["dry spell", "water shortage"], antonyms: ["flood", "deluge"] },
      { word: "erosion", bn: "ক্ষয়, ভাঙন", pos: "Noun", forms: [{ label: "verb", word: "erode (eroded)" }, { label: "adj", word: "erosive" }], synonyms: ["wearing away", "corrosion"], antonyms: ["deposition"] },
      { word: "irregular", bn: "অনিয়মিত", pos: "Adjective", forms: [{ label: "noun", word: "irregularity" }, { label: "adv", word: "irregularly" }], synonyms: ["erratic", "uneven"], antonyms: ["regular", "steady"] },
      { word: "plantation", bn: "বৃক্ষরোপণ; বাগান", pos: "Noun", forms: [{ label: "verb", word: "plant" }, { label: "noun", word: "planting" }], synonyms: ["grove", "orchard"] },
      { word: "recklessly", bn: "বেপরোয়াভাবে", pos: "Adverb", forms: [{ label: "adj", word: "reckless" }, { label: "noun", word: "recklessness" }], synonyms: ["carelessly", "rashly"], antonyms: ["cautiously", "carefully"] },
      { word: "sapling", bn: "চারাগাছ", pos: "Noun", synonyms: ["seedling", "young plant"], antonyms: ["mature tree"] },
      { word: "timber", bn: "ইমারতি কাঠ", pos: "Noun", synonyms: ["wood", "lumber"] },
      { word: "vacant", bn: "খালি, ফাঁকা", pos: "Adjective", forms: [{ label: "noun", word: "vacancy" }, { label: "verb", word: "vacate" }], synonyms: ["empty", "unoccupied"], antonyms: ["occupied", "filled"] },
    ],
    body: [
      {
        type: "para",
        text: "Tree plantation means planting trees and taking care of them until they grow. Trees are our best friends, though we often forget it. They give us the oxygen we breathe and take in the carbon dioxide we breathe out. They give us food, fruit, timber, firewood, medicine and shade, and they keep the soil in place so that rivers do not eat away their banks. Trees invite rain, cool the air and hold the balance of nature. Yet people are cutting them down recklessly for houses, furniture and fuel. As a result, the country is turning hot and dry, rainfall has become irregular, and floods, droughts and river erosion have grown common. Experts say that a country should have at least twenty-five per cent of its area covered with forest, but our share is far below that. So we should plant trees wherever there is a vacant plot of land — beside roads and railway lines, on riverbanks, in school compounds and around our own houses. The rainy season is the best time for it. The government should distribute saplings free of cost, and radio, television and social media should keep reminding people that planting a tree is planting hope for the future.",
      },
    ],
  },
  {
    id: "a-book-fair",
    title: "A Book Fair",
    prompt:
      "Write a paragraph on 'A Book Fair' by answering the following questions.",
    hints: [
      "What is a book fair?",
      "When and where is it held?",
      "What does it look like?",
      "Who visits it?",
      "What is its importance?",
    ],
    vocab: [
      { word: "martyr", bn: "শহিদ", pos: "Noun", forms: [{ label: "noun", word: "martyrdom" }], synonyms: ["one who dies for a cause"] },
      { word: "occasion", bn: "উপলক্ষ, সুযোগ", pos: "Noun", forms: [{ label: "adj", word: "occasional" }, { label: "adv", word: "occasionally" }], synonyms: ["event", "opportunity"] },
      { word: "publisher", bn: "প্রকাশক", pos: "Noun", forms: [{ label: "verb", word: "publish (published)" }, { label: "noun", word: "publication" }], synonyms: ["book producer"], antonyms: ["reader"] },
      { word: "stack", bn: "স্তূপ করে সাজানো", pos: "Verb", past: "stacked", pastParticiple: "stacked", forms: [{ label: "noun", word: "stack" }], synonyms: ["pile up", "heap"], antonyms: ["scatter"] },
      { word: "stall", bn: "দোকানঘর, স্টল", pos: "Noun", synonyms: ["booth", "kiosk"] },
      { word: "within the reach of", bn: "নাগালের মধ্যে", pos: "Phrase", synonyms: ["accessible to"], antonyms: ["beyond the reach of"] },
    ],
    body: [
      {
        type: "para",
        text: "A book fair is a fair where books of different kinds are displayed and sold. In our country the best known of them is the Amar Ekushey Book Fair, which is held in Dhaka throughout the month of February to keep alive the memory of the language martyrs. Book fairs are also arranged in district towns, in schools and colleges, and on the occasion of national days. A fair is usually held in an open field where publishers put up neat rows of stalls, each decorated with posters and stacked from top to bottom with new books. There are books on literature, science, history, religion and politics, as well as story books and colourful picture books for children. From morning till late evening the fair remains crowded with people of all ages — students, teachers, writers and ordinary readers who come simply to breathe the smell of new paper. Writers meet their readers there and put their signatures on the title pages. A book fair is important because it brings good books within the reach of everyone, encourages young writers and, above all, creates a love of reading among the young. It is truly a festival of the mind.",
      },
    ],
  },
  {
    id: "your-hobby",
    title: "Your Hobby",
    prompt:
      "Write a paragraph on 'Your Hobby' by answering the following questions.",
    hints: [
      "What is a hobby?",
      "What is your hobby?",
      "How did you develop this hobby?",
      "How do you enjoy your hobby?",
      "What benefits do you get from it?",
    ],
    vocab: [
      { word: "dignity", bn: "মর্যাদা", pos: "Noun", forms: [{ label: "adj", word: "dignified" }, { label: "verb", word: "dignify" }], synonyms: ["honour", "self-respect"], antonyms: ["disgrace", "shame"] },
      { word: "keen", bn: "প্রবল, তীব্র", pos: "Adjective", forms: [{ label: "adv", word: "keenly" }, { label: "noun", word: "keenness" }], synonyms: ["eager", "intense"], antonyms: ["dull", "indifferent"] },
      { word: "leisure", bn: "অবসর", pos: "Noun", forms: [{ label: "adj", word: "leisurely" }], synonyms: ["free time", "spare time"], antonyms: ["work", "business"] },
      { word: "loosen", bn: "আলগা করা, ঝুরঝুরে করা", pos: "Verb", past: "loosened", pastParticiple: "loosened", forms: [{ label: "adj", word: "loose" }], synonyms: ["slacken", "soften"], antonyms: ["tighten", "harden"] },
      { word: "patience", bn: "ধৈর্য", pos: "Noun", forms: [{ label: "adj", word: "patient" }, { label: "adv", word: "patiently" }], synonyms: ["endurance", "forbearance"], antonyms: ["impatience", "haste"] },
      { word: "profession", bn: "পেশা", pos: "Noun", forms: [{ label: "adj", word: "professional" }], synonyms: ["occupation", "vocation"], antonyms: ["hobby", "pastime"] },
      { word: "pursuit", bn: "চর্চা, অনুসরণ", pos: "Noun", forms: [{ label: "verb", word: "pursue (pursued)" }], synonyms: ["occupation", "engagement"] },
      { word: "rear", bn: "পালন করা, লালন করা", pos: "Verb", past: "reared", pastParticiple: "reared", synonyms: ["raise", "breed"], antonyms: ["neglect", "abandon"] },
      { word: "weed", bn: "আগাছা", pos: "Noun", forms: [{ label: "verb", word: "weed (weeded)" }], synonyms: ["wild growth"], antonyms: ["crop", "plant"] },
    ],
    body: [
      {
        type: "para",
        text: "A hobby is a favourite pursuit that a man takes up in his leisure hours, not to earn money but to enjoy himself. It is different from a profession, for nobody is bound to follow it. Different people have different hobbies — someone collects stamps, someone keeps a garden, someone paints pictures and someone rears pigeons. My hobby is gardening. There is a small piece of vacant land beside our house, and I have turned it into a flower garden. I developed this hobby from my grandfather, who used to work in his garden every morning and often took me with him. Watching him plant saplings and water them, I felt a keen interest and started a garden of my own. Every day I spend an hour there after school. I loosen the soil, pull out the weeds, water the plants and put a fence around them so that cattle may not enter. There are roses, marigolds, dahlias and beli in my garden, and in the winter the whole place looks like a piece of heaven. My hobby gives me many benefits. It keeps my body fit and my mind fresh, and it teaches me patience, because a plant does not flower in a day. It has also taught me the dignity of labour and given me a real love for nature. Besides, I supply flowers to my neighbours on different occasions and feel happy to see them pleased. Indeed, my hobby is a source of endless joy to me.",
      },
    ],
  },
  {
    id: "a-rainy-day",
    title: "A Rainy Day",
    prompt:
      "Write a paragraph on 'A Rainy Day' by answering the following questions.",
    hints: [
      "What is a rainy day?",
      "What does nature look like on a rainy day?",
      "How do people of different professions pass the day?",
      "How do you enjoy a rainy day?",
      "What are the good and bad sides of a rainy day?",
    ],
    vocab: [
      { word: "at a stretch", bn: "একটানা", pos: "Phrase", synonyms: ["continuously", "without a break"], antonyms: ["off and on"] },
      { word: "deserted", bn: "জনশূন্য, পরিত্যক্ত", pos: "Adjective", forms: [{ label: "verb", word: "desert (deserted)" }, { label: "noun", word: "desertion" }], synonyms: ["empty", "abandoned"], antonyms: ["crowded", "busy"] },
      { word: "drench", bn: "ভিজিয়ে দেওয়া", pos: "Verb", past: "drenched", pastParticiple: "drenched", forms: [{ label: "adj", word: "drenched" }], synonyms: ["soak", "wet"], antonyms: ["dry"] },
      { word: "gloomy", bn: "বিষণ্ণ, অন্ধকারাচ্ছন্ন", pos: "Adjective", forms: [{ label: "noun", word: "gloom" }, { label: "adv", word: "gloomily" }], synonyms: ["dismal", "dull"], antonyms: ["cheerful", "bright"] },
      { word: "hawker", bn: "ফেরিওয়ালা", pos: "Noun", forms: [{ label: "verb", word: "hawk (hawked)" }], synonyms: ["pedlar", "street seller"] },
      { word: "labourer", bn: "শ্রমিক, দিনমজুর", pos: "Noun", forms: [{ label: "noun", word: "labour" }, { label: "adj", word: "laborious" }], synonyms: ["worker", "workman"], antonyms: ["employer", "master"] },
      { word: "off and on", bn: "মাঝে মাঝে, থেমে থেমে", pos: "Phrase", synonyms: ["now and then", "intermittently"], antonyms: ["at a stretch"] },
      { word: "overcast", bn: "মেঘাচ্ছন্ন", pos: "Adjective", past: "overcast", pastParticiple: "overcast", synonyms: ["cloudy", "clouded"], antonyms: ["clear", "bright"] },
      { word: "slippery", bn: "পিচ্ছিল", pos: "Adjective", forms: [{ label: "verb", word: "slip (slipped)" }], synonyms: ["slick", "greasy"], antonyms: ["rough", "gripping"] },
      { word: "starve", bn: "অনাহারে থাকা", pos: "Verb", past: "starved", pastParticiple: "starved", forms: [{ label: "noun", word: "starvation" }], synonyms: ["go hungry", "famish"], antonyms: ["feed", "eat well"] },
      { word: "to one's heart's content", bn: "মনের সাধ মিটিয়ে", pos: "Phrase", synonyms: ["to full satisfaction"] },
      { word: "water-borne", bn: "পানিবাহিত", pos: "Adjective", forms: [{ label: "verb", word: "bear (bore, borne)" }], synonyms: ["carried by water"], antonyms: ["airborne"] },
    ],
    body: [
      {
        type: "para",
        text: "A rainy day is a day on which it rains from morning till evening, either at a stretch or off and on. Such days are common in our country during the rainy season, but they may occur in other seasons as well. On a rainy day nature wears a gloomy look. The sky remains overcast with thick black clouds, the sun is hardly seen and a damp wind blows now and then. Roads become muddy and slippery, the low lands go under water and the whole village looks dull and silent. The day brings different experiences to different people. The rich pass the day comfortably at home with hot snacks and khichuri, but the day is a curse to the poor. Day labourers, rickshaw pullers and hawkers cannot go out for work, and they and their families have to starve. Schools and offices wear a deserted look, for very few can reach them in time. To me, however, a rainy day is a day of joy. I do not have to go to school; I sit by the window, watch the falling rain and read story books to my heart's content. Sometimes I go out with my friends, get drenched in the rain and catch fish in the flooded field. A rainy day has its bright side too. It cools the earth, washes away dust and dirt, and is a great blessing for our paddy and jute. But it also stops the wheel of work, causes floods and spreads water-borne diseases. In spite of these troubles, a rainy day remains a day of mixed feelings — sweet to some, bitter to others.",
      },
    ],
  },
  {
    id: "deforestation",
    title: "Deforestation",
    prompt:
      "Write a paragraph on 'Deforestation' by answering the following questions.",
    hints: [
      "What is deforestation?",
      "What are the causes of deforestation?",
      "What are its effects on nature and climate?",
      "How does it affect human life?",
      "What steps should be taken to stop it?",
    ],
    vocab: [
      { word: "deforestation", bn: "বন উজাড়করণ", pos: "Noun", forms: [{ label: "verb", word: "deforest" }, { label: "noun", word: "forest" }], synonyms: ["clearing of forests"], antonyms: ["afforestation"] },
      { word: "erosion", bn: "ক্ষয়, ভাঙন", pos: "Noun", forms: [{ label: "verb", word: "erode (eroded)" }, { label: "adj", word: "erosive" }], synonyms: ["wearing away"], antonyms: ["deposition"] },
      { word: "exception", bn: "ব্যতিক্রম", pos: "Noun", forms: [{ label: "adj", word: "exceptional" }, { label: "adv", word: "exceptionally" }], synonyms: ["special case", "departure"], antonyms: ["rule", "norm"] },
      { word: "fertile", bn: "উর্বর", pos: "Adjective", forms: [{ label: "noun", word: "fertility" }, { label: "verb", word: "fertilise" }], synonyms: ["productive", "rich"], antonyms: ["barren", "sterile"] },
      { word: "frequent", bn: "ঘন ঘন ঘটে এমন", pos: "Adjective", forms: [{ label: "adv", word: "frequently" }, { label: "noun", word: "frequency" }], synonyms: ["repeated", "common"], antonyms: ["rare", "occasional"] },
      { word: "offence", bn: "অপরাধ", pos: "Noun", forms: [{ label: "verb", word: "offend (offended)" }, { label: "adj", word: "offensive" }], synonyms: ["crime", "wrongdoing"], antonyms: ["good deed"] },
      { word: "punishable", bn: "শাস্তিযোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "punish (punished)" }, { label: "noun", word: "punishment" }], synonyms: ["culpable", "chargeable"], antonyms: ["pardonable", "lawful"] },
      { word: "shelter", bn: "আশ্রয়", pos: "Noun", forms: [{ label: "verb", word: "shelter (sheltered)" }], synonyms: ["refuge", "protection"], antonyms: ["exposure"] },
      { word: "species", bn: "প্রজাতি", pos: "Noun", synonyms: ["kind", "variety"] },
      { word: "swallow", bn: "গ্রাস করা, গিলে ফেলা", pos: "Verb", past: "swallowed", pastParticiple: "swallowed", synonyms: ["engulf", "devour"], antonyms: ["eject", "spit out"] },
      { word: "topsoil", bn: "উপরের উর্বর মাটি", pos: "Noun", synonyms: ["surface soil"], antonyms: ["subsoil"] },
    ],
    body: [
      {
        type: "para",
        text: "Deforestation means the cutting down of trees and the clearing of forests on a large scale without planting new ones in their place. It is going on all over the world, and our country is no exception. There are many causes behind it. The population is growing fast, and people need land for houses, roads, mills and factories. Many dishonest people cut down trees for timber, firewood and furniture and sell them at a high price, and a section of forest officials help them for the sake of money. Poor villagers, who have no other fuel, also clear the woods for their daily cooking. Whatever the cause, the effects are terrible. Trees keep the balance of nature, and when they are gone the air becomes full of carbon dioxide, the temperature of the earth rises and the seasons lose their old rhythm. Rainfall becomes irregular, rivers dry up, and the topsoil is washed away, turning fertile land into desert. Birds and wild animals lose their shelter and many species are disappearing for ever. Human life suffers most of all. Floods, droughts, cyclones and river erosion have grown frequent, crops fail, and diseases spread. If the polar ice goes on melting, a low-lying country like ours may one day be swallowed by the sea. So deforestation must be stopped at once. Cutting trees without permission should be made a punishable offence, and for every tree cut at least two new ones should be planted. The government should supply saplings free of cost and arrange other sources of fuel for the villagers. Above all, people should be made aware through school, radio and television that saving trees means saving ourselves.",
      },
    ],
  },
  {
    id: "green-house-effect",
    title: "Green House Effect",
    prompt:
      "Write a paragraph on 'Green House Effect' by answering the following questions.",
    hints: [
      "What is the green house effect?",
      "Which gases are responsible for it?",
      "What are the causes of the rise in these gases?",
      "What are its effects on the world and on Bangladesh?",
      "What should we do to reduce it?",
    ],
    vocab: [
      { word: "atmosphere", bn: "বায়ুমণ্ডল", pos: "Noun", forms: [{ label: "adj", word: "atmospheric" }], synonyms: ["air", "sky"] },
      { word: "coastal", bn: "উপকূলীয়", pos: "Adjective", forms: [{ label: "noun", word: "coast" }], synonyms: ["seaside", "shore"], antonyms: ["inland"] },
      { word: "consume", bn: "শোষণ করা, গ্রহণ করা", pos: "Verb", past: "consumed", pastParticiple: "consumed", forms: [{ label: "noun", word: "consumption" }, { label: "noun", word: "consumer" }], synonyms: ["absorb", "use up"], antonyms: ["produce", "release"] },
      { word: "emit", bn: "নির্গত করা", pos: "Verb", past: "emitted", pastParticiple: "emitted", forms: [{ label: "noun", word: "emission" }], synonyms: ["give off", "discharge"], antonyms: ["absorb", "take in"] },
      { word: "fossil fuel", bn: "জীবাশ্ম জ্বালানি", pos: "Phrase", synonyms: ["coal, oil and gas"], antonyms: ["renewable energy"] },
      { word: "gradual", bn: "ক্রমশ ঘটে এমন", pos: "Adjective", forms: [{ label: "adv", word: "gradually" }], synonyms: ["slow", "step-by-step"], antonyms: ["sudden", "abrupt"] },
      { word: "ozone layer", bn: "ওজোন স্তর", pos: "Noun", synonyms: ["shield of the sky"] },
      { word: "phenomenon", bn: "প্রাকৃতিক ঘটনা", pos: "Noun", forms: [{ label: "plural", word: "phenomena" }, { label: "adj", word: "phenomenal" }], synonyms: ["occurrence", "happening"] },
      { word: "reckless", bn: "বেপরোয়া", pos: "Adjective", forms: [{ label: "adv", word: "recklessly" }, { label: "noun", word: "recklessness" }], synonyms: ["careless", "rash"], antonyms: ["cautious", "careful"] },
      { word: "trap", bn: "আটকে ফেলা", pos: "Verb", past: "trapped", pastParticiple: "trapped", forms: [{ label: "noun", word: "trap" }], synonyms: ["catch", "hold back"], antonyms: ["release", "free"] },
    ],
    body: [
      {
        type: "para",
        text: "The green house effect is the gradual rise in the temperature of the earth caused by certain gases that trap the heat of the sun in the atmosphere. A green house is a glass house in which plants are grown in cold countries; the glass lets the sunlight in but does not let the heat go out. Our atmosphere is now acting in the same way, and that is why the phenomenon has been given this name. The gases responsible for it are called green house gases — carbon dioxide, methane, nitrous oxide and chlorofluorocarbon. Carbon dioxide is the chief among them. It is produced when we burn coal, oil, gas, wood and other fossil fuels in our mills, factories, power plants and motor vehicles. Methane comes from paddy fields, cattle farms and rotting garbage, while chlorofluorocarbon escapes from refrigerators and air conditioners and eats away the ozone layer that protects us from the harmful rays of the sun. Reckless deforestation has made the matter worse, for trees consume carbon dioxide and there are fewer trees now to do the work. The effects of the green house effect are alarming. The temperature of the earth is rising year by year, the polar ice caps are melting and the level of the sea is going up. Seasons have lost their old order, rainfall has become irregular, and drought, flood and cyclone have grown frequent. Scientists fear that if the sea level rises even a metre, a large part of the coastal area of Bangladesh will go under water and millions of people will lose their homes. Crops will fail and salt water will destroy our farmland. To reduce this danger, the burning of fossil fuels must be controlled and the use of solar and other clean energy encouraged. Vehicles that emit black smoke should be banned, the use of chlorofluorocarbon should be stopped and trees should be planted in large numbers. Since the problem belongs to the whole world, all countries should work together before it is too late.",
      },
    ],
  },
  {
    id: "ai-in-everyday-life",
    title: "AI in Everyday Life",
    prompt:
      "Write a paragraph on 'AI in Everyday Life' by answering the following questions.",
    hints: [
      "What is artificial intelligence?",
      "Where do we see it in our daily life?",
      "How does it help us in education, health and work?",
      "What are its bad sides?",
      "How should we use it?",
    ],
    vocab: [
      { word: "artificial", bn: "কৃত্রিম", pos: "Adjective", forms: [{ label: "noun", word: "artificiality" }, { label: "adv", word: "artificially" }], synonyms: ["man-made", "synthetic"], antonyms: ["natural", "real"] },
      { word: "detect", bn: "শনাক্ত করা", pos: "Verb", past: "detected", pastParticiple: "detected", forms: [{ label: "noun", word: "detection" }, { label: "noun", word: "detective" }], synonyms: ["discover", "find out"], antonyms: ["overlook", "miss"] },
      { word: "enable", bn: "সক্ষম করা", pos: "Verb", past: "enabled", pastParticiple: "enabled", forms: [{ label: "adj", word: "able" }, { label: "noun", word: "ability" }], synonyms: ["allow", "empower"], antonyms: ["prevent", "disable"] },
      { word: "intelligence", bn: "বুদ্ধিমত্তা", pos: "Noun", forms: [{ label: "adj", word: "intelligent" }, { label: "adv", word: "intelligently" }], synonyms: ["intellect", "wisdom"], antonyms: ["stupidity", "dullness"] },
      { word: "irrigate", bn: "সেচ দেওয়া", pos: "Verb", past: "irrigated", pastParticiple: "irrigated", forms: [{ label: "noun", word: "irrigation" }], synonyms: ["water", "supply water to"], antonyms: ["drain", "dry up"] },
      { word: "privacy", bn: "গোপনীয়তা", pos: "Noun", forms: [{ label: "adj", word: "private" }, { label: "adv", word: "privately" }], synonyms: ["secrecy", "seclusion"], antonyms: ["publicity", "openness"] },
      { word: "repetitive", bn: "পুনরাবৃত্তিমূলক, একঘেয়ে", pos: "Adjective", forms: [{ label: "verb", word: "repeat (repeated)" }, { label: "noun", word: "repetition" }], synonyms: ["monotonous", "routine"], antonyms: ["varied", "creative"] },
      { word: "rumour", bn: "গুজব", pos: "Noun", forms: [{ label: "adj", word: "rumoured" }], synonyms: ["hearsay", "gossip"], antonyms: ["fact", "truth"] },
      { word: "sow", bn: "বীজ বপন করা", pos: "Verb", past: "sowed", pastParticiple: "sown", forms: [{ label: "noun", word: "sowing" }], synonyms: ["plant", "scatter seed"], antonyms: ["reap", "harvest"] },
      { word: "suspicious", bn: "সন্দেহজনক", pos: "Adjective", forms: [{ label: "noun", word: "suspicion" }, { label: "verb", word: "suspect (suspected)" }], synonyms: ["doubtful", "questionable"], antonyms: ["trustworthy", "reliable"] },
      { word: "unskilled", bn: "অদক্ষ", pos: "Adjective", forms: [{ label: "noun", word: "skill" }, { label: "adj", word: "skilled" }], synonyms: ["untrained", "inexpert"], antonyms: ["skilled", "expert"] },
      { word: "verify", bn: "যাচাই করা", pos: "Verb", past: "verified", pastParticiple: "verified", forms: [{ label: "noun", word: "verification" }], synonyms: ["check", "confirm"], antonyms: ["guess", "assume"] },
    ],
    body: [
      {
        type: "para",
        text: "Artificial intelligence, or AI in short, is a branch of computer science that enables a machine to think, learn and take decisions almost like a human being. It was once a matter of science fiction, but today it has entered every corner of our daily life, often without our noticing it. When we unlock a mobile phone with our face, ask a voice assistant about the weather, or see a keyboard suggesting the very word we were going to type, we are using AI. It chooses the videos we watch, translates a page from one language into another in a moment, and warns a bank when a card is used in a suspicious way. Its benefits are many. In education, a student sitting in a remote village can now get an explanation of a difficult problem at midnight, and language learners can practise pronunciation without a teacher beside them. In medicine, AI helps doctors read X-rays and detect diseases like cancer at an early stage. In agriculture, it tells the farmer when to sow and when to irrigate; in offices and industries it does dull and repetitive work faster and more accurately than any man. Yet the picture has a darker side. Machines are taking over many jobs, and unskilled workers are the first to suffer. Students often copy their homework from AI tools instead of thinking for themselves, and thus lose the habit of hard work. Moreover, AI sometimes gives wrong information with great confidence, and dishonest people use it to make false pictures and videos and to spread rumours. Our personal data are also collected on a huge scale, which puts our privacy at risk. So we should remember that AI is a tool, not a master. If we use it honestly, verify what it tells us and never let it do our thinking for us, artificial intelligence will remain a great blessing for mankind.",
      },
    ],
  },
];

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

/* ───────────────────────────── Dialogues ────────────────────────── */

const dialogues: Piece[] = [
  {
    id: "bad-effects-of-smoking",
    title: "The Bad Effects of Smoking",
    prompt:
      "Write a dialogue between two friends about the bad effects of smoking.",
    vocab: [
      { word: "bronchitis", bn: "শ্বাসনালীর প্রদাহ", pos: "Noun", synonyms: ["inflammation of the airways"] },
      { word: "craving", bn: "তীব্র আকাঙ্ক্ষা, নেশার টান", pos: "Noun", forms: [{ label: "verb", word: "crave (craved)" }], synonyms: ["longing", "urge"], antonyms: ["aversion", "dislike"] },
      { word: "excuse", bn: "অজুহাত", pos: "Noun", forms: [{ label: "verb", word: "excuse (excused)" }, { label: "adj", word: "excusable" }], synonyms: ["pretext", "plea"], antonyms: ["reason", "fact"] },
      { word: "gastric ulcer", bn: "পাকস্থলীর ঘা", pos: "Phrase", synonyms: ["stomach sore"] },
      { word: "nicotine", bn: "নিকোটিন (তামাকের বিষ)", pos: "Noun", synonyms: ["tobacco poison"] },
      { word: "pale", bn: "ফ্যাকাশে", pos: "Adjective", forms: [{ label: "noun", word: "paleness" }, { label: "verb", word: "pale (paled)" }], synonyms: ["colourless", "wan"], antonyms: ["ruddy", "fresh"] },
      { word: "passive smoking", bn: "পরোক্ষ ধূমপান", pos: "Phrase", synonyms: ["second-hand smoking"], antonyms: ["active smoking"] },
      { word: "punishable", bn: "শাস্তিযোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "punish (punished)" }, { label: "noun", word: "punishment" }], synonyms: ["culpable", "chargeable"], antonyms: ["pardonable", "lawful"] },
      { word: "tar", bn: "আলকাতরা (তামাকের কালো আঠালো পদার্থ)", pos: "Noun", synonyms: ["black sticky residue"] },
      { word: "tobacco", bn: "তামাক", pos: "Noun", synonyms: ["leaf used in cigarettes"] },
      { word: "weaken", bn: "দুর্বল করা", pos: "Verb", past: "weakened", pastParticiple: "weakened", forms: [{ label: "adj", word: "weak" }, { label: "noun", word: "weakness" }], synonyms: ["enfeeble", "sap"], antonyms: ["strengthen", "fortify"] },
    ],
    body: [
      { type: "dialogue", speaker: "Rifat", text: "Hello, Sabbir! You look rather pale today. What is the matter with you?" },
      { type: "dialogue", speaker: "Sabbir", text: "Nothing serious, I hope. I have been coughing for the last few days and I feel weak." },
      { type: "dialogue", speaker: "Rifat", text: "Have you seen a doctor?" },
      { type: "dialogue", speaker: "Sabbir", text: "Not yet. I thought it was only a common cold." },
      { type: "dialogue", speaker: "Rifat", text: "It may not be a cold at all. Tell me the truth — you have started smoking, haven't you?" },
      { type: "dialogue", speaker: "Sabbir", text: "How did you come to know that?" },
      { type: "dialogue", speaker: "Rifat", text: "Your fingers and lips have darkened, and your clothes smell of tobacco. How long have you been at it?" },
      { type: "dialogue", speaker: "Sabbir", text: "About six months, and only three or four cigarettes a day. Some of my classmates smoke, and one evening they pressed me to try one." },
      { type: "dialogue", speaker: "Rifat", text: "So it began with a friend's request, as it almost always does. And why do you go on with it?" },
      { type: "dialogue", speaker: "Sabbir", text: "It helps me stay awake while I study, and it takes away my worries for a while." },
      { type: "dialogue", speaker: "Rifat", text: "That is a dangerous excuse. The relief lasts a few minutes, but the harm stays in your body for life. Do you know what is inside a cigarette?" },
      { type: "dialogue", speaker: "Sabbir", text: "Tobacco, I suppose." },
      { type: "dialogue", speaker: "Rifat", text: "Tobacco smoke contains more than four thousand chemicals. Nicotine, tar and carbon monoxide are the worst of them. Nicotine makes you a slave to the habit, and tar blackens your lungs little by little." },
      { type: "dialogue", speaker: "Sabbir", text: "I have heard something like that. But surely three or four cigarettes cannot do much harm." },
      { type: "dialogue", speaker: "Rifat", text: "They can, and they do. Smoking is a chief cause of lung cancer, heart disease, bronchitis and gastric ulcer. Doctors say that a smoker loses several years of his life. Even the packet warns you that smoking causes death." },
      { type: "dialogue", speaker: "Sabbir", text: "That is frightening indeed." },
      { type: "dialogue", speaker: "Rifat", text: "And it is not you alone who suffer. Those who sit beside you breathe the same smoke. Your little sister, your mother, your friends in the room — passive smoking harms them almost as much as it harms you." },
      { type: "dialogue", speaker: "Sabbir", text: "I never thought of my family in that way. That troubles me more than anything else." },
      { type: "dialogue", speaker: "Rifat", text: "Think of your pocket too. How much do you spend in a month?" },
      { type: "dialogue", speaker: "Sabbir", text: "Perhaps six or seven hundred taka." },
      { type: "dialogue", speaker: "Rifat", text: "That is more than eight thousand taka a year turned into smoke. The same money could buy you books, or a pair of good shoes, or help a poor student of our class." },
      { type: "dialogue", speaker: "Sabbir", text: "You are opening my eyes, Rifat. Has it harmed my studies as well?" },
      { type: "dialogue", speaker: "Rifat", text: "Certainly. Smoking weakens the memory and the power of attention, and you can no longer run or play as you once did. Besides, smoking in a public place is now punishable by law." },
      { type: "dialogue", speaker: "Sabbir", text: "I did not know that either. I have made up my mind — I shall give it up from today." },
      { type: "dialogue", speaker: "Rifat", text: "That is the spirit. But do not think it will be easy. Throw away the packet and the lighter at once, avoid the company that offers you one, and keep yourself busy with games and good books." },
      { type: "dialogue", speaker: "Sabbir", text: "And if the craving comes back?" },
      { type: "dialogue", speaker: "Rifat", text: "Drink a glass of water, take a piece of fruit and go for a short walk. It passes in a few minutes. If you find it too hard, see a doctor without any shame." },
      { type: "dialogue", speaker: "Sabbir", text: "Thank you very much. You have done me a great service today." },
      { type: "dialogue", speaker: "Rifat", text: "Do not mention it. That is what a friend is for. Take care of yourself, and see the doctor about that cough tomorrow." },
      { type: "dialogue", speaker: "Sabbir", text: "I shall, I promise. Goodbye, Rifat." },
      { type: "dialogue", speaker: "Rifat", text: "Goodbye, and best of luck." },
    ],
  },
  {
    id: "importance-of-learning-english",
    title: "The Importance of Learning English",
    prompt:
      "Write a dialogue between two friends about the importance of learning English.",
    vocab: [
      { word: "abroad", bn: "বিদেশে", pos: "Adverb", synonyms: ["overseas", "in a foreign land"], antonyms: ["at home"] },
      { word: "attentively", bn: "মনোযোগ দিয়ে", pos: "Adverb", forms: [{ label: "adj", word: "attentive" }, { label: "noun", word: "attention" }], synonyms: ["carefully", "closely"], antonyms: ["carelessly", "absent-mindedly"] },
      { word: "command", bn: "দখল, ভালো জ্ঞান", pos: "Noun", forms: [{ label: "verb", word: "command (commanded)" }], synonyms: ["mastery", "grasp"], antonyms: ["ignorance", "weakness"] },
      { word: "convinced", bn: "নিশ্চিত, প্রত্যয়ী", pos: "Adjective", forms: [{ label: "verb", word: "convince (convinced)" }, { label: "noun", word: "conviction" }], synonyms: ["persuaded", "satisfied"], antonyms: ["doubtful", "unsure"] },
      { word: "interview", bn: "সাক্ষাৎকার", pos: "Noun", forms: [{ label: "verb", word: "interview (interviewed)" }], synonyms: ["viva", "oral test"] },
      { word: "mother tongue", bn: "মাতৃভাষা", pos: "Phrase", synonyms: ["native language", "first language"], antonyms: ["foreign language"] },
      { word: "multinational", bn: "বহুজাতিক", pos: "Adjective", forms: [{ label: "noun", word: "nation" }], synonyms: ["international"], antonyms: ["local", "domestic"] },
      { word: "practise", bn: "চর্চা করা", pos: "Verb", past: "practised", pastParticiple: "practised", forms: [{ label: "noun", word: "practice" }, { label: "adj", word: "practical" }], synonyms: ["exercise", "rehearse"], antonyms: ["neglect", "ignore"] },
      { word: "subtitle", bn: "পর্দার নিচের লেখা, সাবটাইটেল", pos: "Noun", synonyms: ["caption"] },
      { word: "talent", bn: "প্রতিভা", pos: "Noun", forms: [{ label: "adj", word: "talented" }], synonyms: ["gift", "aptitude"], antonyms: ["inability", "dullness"] },
    ],
    body: [
      { type: "dialogue", speaker: "Nadia", text: "Hello, Tanha! What are you reading so attentively?" },
      { type: "dialogue", speaker: "Tanha", text: "Hello, Nadia. It is an English newspaper. I have made it a habit to read one page of it every morning." },
      { type: "dialogue", speaker: "Nadia", text: "An English newspaper? Why do you take so much trouble? We hardly speak English outside the classroom." },
      { type: "dialogue", speaker: "Tanha", text: "That is exactly why most of us are so weak in it. We read English only to pass the examination, and afterwards we forget the whole of it." },
      { type: "dialogue", speaker: "Nadia", text: "But is it really so important for us?" },
      { type: "dialogue", speaker: "Tanha", text: "It is far more important than you think. English is an international language. It is spoken and understood in almost every country of the world." },
      { type: "dialogue", speaker: "Nadia", text: "How many people use it?" },
      { type: "dialogue", speaker: "Tanha", text: "Nearly two thousand million people use it in one way or another, though it is the mother tongue of only a few of them. When a Bangladeshi meets a Japanese or a German, it is in English that they talk." },
      { type: "dialogue", speaker: "Nadia", text: "I see. But how will it help us here in our own country?" },
      { type: "dialogue", speaker: "Tanha", text: "In many ways. Almost all the books on science, medicine, engineering and technology are written in English. Without a good command of it we cannot go far in higher education." },
      { type: "dialogue", speaker: "Nadia", text: "And in the matter of jobs?" },
      { type: "dialogue", speaker: "Tanha", text: "There it matters most of all. Banks, multinational companies, airlines and the foreign service will not take a man who cannot speak and write English properly." },
      { type: "dialogue", speaker: "Nadia", text: "That is quite true. My cousin failed an interview last month. He knew his subject well, but he could not answer a single question in English." },
      { type: "dialogue", speaker: "Tanha", text: "There you are. And think of our workers who go abroad. Those who know a little English get better work and better wages than those who know none." },
      { type: "dialogue", speaker: "Nadia", text: "I had never thought of that." },
      { type: "dialogue", speaker: "Tanha", text: "Besides, the whole internet runs on English, and anyone who wants to study abroad must sit for IELTS or TOEFL. Both of them are tests of English and nothing else." },
      { type: "dialogue", speaker: "Nadia", text: "You have convinced me. But I am afraid it is too late for me to begin." },
      { type: "dialogue", speaker: "Tanha", text: "It is never too late. What you need is regular practice, not any special talent." },
      { type: "dialogue", speaker: "Nadia", text: "Then tell me how to go about it." },
      { type: "dialogue", speaker: "Tanha", text: "First, read something in English every day — a newspaper, a story book, anything you enjoy. Secondly, keep a small notebook, write down five new words daily with their meanings, and use them in sentences of your own." },
      { type: "dialogue", speaker: "Nadia", text: "And what about speaking?" },
      { type: "dialogue", speaker: "Tanha", text: "Speak in English with your friends without any fear of making mistakes. Nobody has ever learnt a language without making them. Listen to the English news and watch English films with subtitles; your ear will slowly grow used to the sound." },
      { type: "dialogue", speaker: "Nadia", text: "I find grammar very dull. Must I learn all those rules?" },
      { type: "dialogue", speaker: "Tanha", text: "Learn them, but do not stop there. Grammar is like the map of a country — useful, but it is not the same thing as travelling. Write a paragraph or a letter every night and get it corrected by our English teacher." },
      { type: "dialogue", speaker: "Nadia", text: "That is very good advice. Shall we practise together from tomorrow?" },
      { type: "dialogue", speaker: "Tanha", text: "With pleasure. Let us make it a rule that we shall speak only in English during the tiffin period." },
      { type: "dialogue", speaker: "Nadia", text: "Agreed. I feel encouraged already. Thank you, Tanha." },
      { type: "dialogue", speaker: "Tanha", text: "You are most welcome. Remember, practice is the only secret. See you tomorrow." },
      { type: "dialogue", speaker: "Nadia", text: "See you tomorrow. Goodbye." },
    ],
  },
  {
    id: "preparation-for-ssc-exam",
    title: "Preparation for the SSC Examination",
    prompt:
      "Write a dialogue between two friends about their preparation for the SSC examination.",
    vocab: [
      { word: "at a glance", bn: "এক নজরে", pos: "Phrase", forms: [{ label: "verb", word: "glance (glanced)" }], synonyms: ["at one look"] },
      { word: "deserve", bn: "যোগ্য হওয়া, প্রাপ্য হওয়া", pos: "Verb", past: "deserved", pastParticiple: "deserved", forms: [{ label: "adj", word: "deserving" }], synonyms: ["merit", "be worthy of"], antonyms: ["be unworthy of"] },
      { word: "examiner", bn: "পরীক্ষক", pos: "Noun", forms: [{ label: "verb", word: "examine (examined)" }, { label: "noun", word: "examination" }], synonyms: ["assessor"], antonyms: ["examinee", "candidate"] },
      { word: "memorise", bn: "মুখস্থ করা", pos: "Verb", past: "memorised", pastParticiple: "memorised", forms: [{ label: "noun", word: "memory" }, { label: "adj", word: "memorable" }], synonyms: ["learn by heart"], antonyms: ["forget"] },
      { word: "preparation", bn: "প্রস্তুতি", pos: "Noun", forms: [{ label: "verb", word: "prepare (prepared)" }, { label: "adj", word: "preparatory" }], synonyms: ["readiness", "arrangement"], antonyms: ["unpreparedness"] },
      { word: "revise", bn: "পুনরালোচনা করা", pos: "Verb", past: "revised", pastParticiple: "revised", forms: [{ label: "noun", word: "revision" }], synonyms: ["go over again", "review"], antonyms: ["neglect", "skip"] },
      { word: "ruin", bn: "নষ্ট করা", pos: "Verb", past: "ruined", pastParticiple: "ruined", forms: [{ label: "noun", word: "ruin" }, { label: "adj", word: "ruinous" }], synonyms: ["destroy", "spoil"], antonyms: ["build", "save"] },
      { word: "strictly", bn: "কঠোরভাবে", pos: "Adverb", forms: [{ label: "adj", word: "strict" }, { label: "noun", word: "strictness" }], synonyms: ["rigidly", "firmly"], antonyms: ["loosely", "carelessly"] },
      { word: "syllabus", bn: "পাঠ্যসূচি", pos: "Noun", forms: [{ label: "plural", word: "syllabuses / syllabi" }], synonyms: ["course of study", "curriculum"] },
      { word: "theorem", bn: "উপপাদ্য", pos: "Noun", synonyms: ["proposition", "proved statement"] },
    ],
    body: [
      { type: "dialogue", speaker: "Arif", text: "Hello, Sumon! I have not seen you for a long time. How is your preparation for the SSC examination going?" },
      { type: "dialogue", speaker: "Sumon", text: "Hello, Arif. Not bad on the whole, but I am rather worried about mathematics." },
      { type: "dialogue", speaker: "Arif", text: "Why so? You were always good at mathematics." },
      { type: "dialogue", speaker: "Sumon", text: "I understand the theorems well enough, yet I cannot finish the paper within the time." },
      { type: "dialogue", speaker: "Arif", text: "How much of the syllabus have you covered?" },
      { type: "dialogue", speaker: "Sumon", text: "The whole of it except two chapters. My trouble is not knowledge but speed." },
      { type: "dialogue", speaker: "Arif", text: "Then you must practise with a clock before you. Take last year's board question, sit down at nine and put your pen away at twelve, whether you have finished or not." },
      { type: "dialogue", speaker: "Sumon", text: "Will that really help?" },
      { type: "dialogue", speaker: "Arif", text: "It works wonders. After five or six such tests you will know exactly how many minutes each question deserves. And answer the easy questions first — never waste twenty minutes on a hard one at the very beginning." },
      { type: "dialogue", speaker: "Sumon", text: "That is sound advice. And how are you preparing for English? It is my weakest subject." },
      { type: "dialogue", speaker: "Arif", text: "I revise the grammar rules in the morning and write one paragraph, letter or composition every night. Writing regularly is the only way to improve." },
      { type: "dialogue", speaker: "Sumon", text: "I try to memorise paragraphs, but I forget them in the examination hall." },
      { type: "dialogue", speaker: "Arif", text: "Do not memorise. Learn the points and a few useful sentences, and then write in your own words. An examiner can tell a memorised answer at a glance." },
      { type: "dialogue", speaker: "Sumon", text: "I shall remember that. Do you follow any routine?" },
      { type: "dialogue", speaker: "Arif", text: "Yes, a very simple one. I rise at half past five and take up the difficult subjects while the mind is fresh, keeping the lighter ones for the evening. Six hours of study, an hour of games and eight hours of sleep." },
      { type: "dialogue", speaker: "Sumon", text: "Eight hours of sleep? I often sit up studying till two in the morning." },
      { type: "dialogue", speaker: "Arif", text: "And you feel sleepy in class the next day, do you not? A tired brain remembers nothing. It is far better to study three hours attentively than eight hours half asleep." },
      { type: "dialogue", speaker: "Sumon", text: "You are right. I have been ruining my health for nothing." },
      { type: "dialogue", speaker: "Arif", text: "Health comes first. Take your meals on time, play for a while every day, and keep the mobile phone away while you study." },
      { type: "dialogue", speaker: "Sumon", text: "That last one is the hardest of all." },
      { type: "dialogue", speaker: "Arif", text: "Then hand it to your mother when you sit down to study. I do the very same thing." },
      { type: "dialogue", speaker: "Sumon", text: "What about the test examination? Ours will be held next month." },
      { type: "dialogue", speaker: "Arif", text: "Take it as seriously as the board examination itself. It shows you where you are weak while there is still time to mend matters." },
      { type: "dialogue", speaker: "Sumon", text: "Do you take help from your teachers?" },
      { type: "dialogue", speaker: "Arif", text: "Of course. Whenever I do not understand something, I mark it and ask my teacher the next day. There is no shame in asking; the shame lies in leaving a lesson half learnt." },
      { type: "dialogue", speaker: "Sumon", text: "You have given me new courage. I shall make a fresh routine tonight and follow it strictly." },
      { type: "dialogue", speaker: "Arif", text: "Do that, and revise everything at least twice before the examination. Hard work never goes in vain." },
      { type: "dialogue", speaker: "Sumon", text: "Thank you very much for your advice." },
      { type: "dialogue", speaker: "Arif", text: "Do not mention it. Best of luck, Sumon. Let us meet again after the test examination." },
      { type: "dialogue", speaker: "Sumon", text: "Certainly. Goodbye, Arif." },
    ],
  },
  {
    id: "prize-giving-ceremony",
    title: "The Prize-Giving Ceremony",
    prompt:
      "Write a dialogue between two friends about the prize-giving ceremony held in your school.",
    vocab: [
      { word: "annual", bn: "বার্ষিক", pos: "Adjective", forms: [{ label: "adv", word: "annually" }], synonyms: ["yearly", "once a year"], antonyms: ["monthly", "daily"] },
      { word: "anthem", bn: "জাতীয় সঙ্গীত", pos: "Noun", synonyms: ["hymn", "national song"] },
      { word: "ceremony", bn: "অনুষ্ঠান", pos: "Noun", forms: [{ label: "adj", word: "ceremonial" }, { label: "adv", word: "ceremonially" }], synonyms: ["function", "celebration"] },
      { word: "certificate", bn: "সনদপত্র", pos: "Noun", forms: [{ label: "verb", word: "certify (certified)" }, { label: "noun", word: "certification" }], synonyms: ["testimonial", "diploma"] },
      { word: "crest", bn: "ক্রেস্ট, সম্মাননা ফলক", pos: "Noun", synonyms: ["plaque", "emblem"] },
      { word: "deputy commissioner", bn: "জেলা প্রশাসক", pos: "Phrase", synonyms: ["chief officer of a district"] },
      { word: "function", bn: "অনুষ্ঠান", pos: "Noun", synonyms: ["ceremony", "programme"] },
      { word: "managing committee", bn: "পরিচালনা পর্ষদ", pos: "Phrase", forms: [{ label: "verb", word: "manage (managed)" }], synonyms: ["governing body"] },
      { word: "preside", bn: "সভাপতিত্ব করা", pos: "Verb", past: "presided", pastParticiple: "presided", forms: [{ label: "noun", word: "president" }], synonyms: ["chair", "head"], antonyms: ["attend as a guest"] },
      { word: "recitation", bn: "আবৃত্তি", pos: "Noun", forms: [{ label: "verb", word: "recite (recited)" }], synonyms: ["rendering", "delivery"] },
    ],
    body: [
      { type: "dialogue", speaker: "Mahin", text: "Good morning, Tanvir! You look very cheerful today. What is the matter?" },
      { type: "dialogue", speaker: "Tanvir", text: "Good morning, Mahin. I am coming straight from the school office. Our annual prize-giving ceremony will be held next Thursday." },
      { type: "dialogue", speaker: "Mahin", text: "Is it really? I have been waiting for it the whole year. Where will it be held?" },
      { type: "dialogue", speaker: "Tanvir", text: "In the school playground. A big stage is being built at the northern end, and about a thousand chairs will be arranged in front of it." },
      { type: "dialogue", speaker: "Mahin", text: "Who will be the chief guest?" },
      { type: "dialogue", speaker: "Tanvir", text: "The Deputy Commissioner of our district. The Chairman of the Managing Committee will preside over the function, and our Headmaster will read out the annual report." },
      { type: "dialogue", speaker: "Mahin", text: "That is grand news. When will the programme begin?" },
      { type: "dialogue", speaker: "Tanvir", text: "At ten in the morning. It will open with a recitation from the Holy Quran, and then the national anthem will be sung." },
      { type: "dialogue", speaker: "Mahin", text: "And what comes after that?" },
      { type: "dialogue", speaker: "Tanvir", text: "The Headmaster will present the annual report — the results of last year, the games we won and the improvements made in the school. Then the guests will deliver their speeches." },
      { type: "dialogue", speaker: "Mahin", text: "I hope the speeches will not be too long. Last year I grew quite tired of listening." },
      { type: "dialogue", speaker: "Tanvir", text: "This time the Headmaster has fixed ten minutes for each speaker. After the speeches the prizes will be given away." },
      { type: "dialogue", speaker: "Mahin", text: "How will they be distributed?" },
      { type: "dialogue", speaker: "Tanvir", text: "The names will be called out one by one, and each boy or girl will go up to the stage and receive the prize from the hands of the chief guest." },
      { type: "dialogue", speaker: "Mahin", text: "What kind of prizes are given?" },
      { type: "dialogue", speaker: "Tanvir", text: "Books, crests and certificates, and there is a gold medal for the best student of the year." },
      { type: "dialogue", speaker: "Mahin", text: "Are the prizes awarded for studies only?" },
      { type: "dialogue", speaker: "Tanvir", text: "Not at all. There are prizes for the best results in every class, and also for debate, recitation, essay writing, music, drawing and sports." },
      { type: "dialogue", speaker: "Mahin", text: "That is good. In that way everybody gets a chance to shine at something." },
      { type: "dialogue", speaker: "Tanvir", text: "Exactly. And by the way, you must be present without fail. Your name is on the list." },
      { type: "dialogue", speaker: "Mahin", text: "Mine? For what?" },
      { type: "dialogue", speaker: "Tanvir", text: "For the debate competition. You stood first in the inter-class debate last month. Have you forgotten it?" },
      { type: "dialogue", speaker: "Mahin", text: "I had no idea that a prize was attached to it. I am really delighted." },
      { type: "dialogue", speaker: "Tanvir", text: "My congratulations. My own name is there too, for the hundred-metre race." },
      { type: "dialogue", speaker: "Mahin", text: "Congratulations to you as well. Will there be a cultural programme?" },
      { type: "dialogue", speaker: "Tanvir", text: "Yes, in the afternoon. There will be songs, a recitation, a short play and a dance by the girls of class eight. The day will end with a vote of thanks by the Assistant Headmaster." },
      { type: "dialogue", speaker: "Mahin", text: "How pleasantly the day will pass! What should we wear?" },
      { type: "dialogue", speaker: "Tanvir", text: "The school uniform, neat and clean. Those who are to receive prizes must sit in the front rows." },
      { type: "dialogue", speaker: "Mahin", text: "Then I shall reach the school by half past nine. Shall we go together?" },
      { type: "dialogue", speaker: "Tanvir", text: "Certainly. Come to my house at nine and we shall walk down together." },
      { type: "dialogue", speaker: "Mahin", text: "Agreed. Thank you for the good news, Tanvir." },
      { type: "dialogue", speaker: "Tanvir", text: "Do not mention it. See you on Thursday. Goodbye." },
      { type: "dialogue", speaker: "Mahin", text: "Goodbye." },
    ],
  },
  {
    id: "importance-of-early-rising",
    title: "The Importance of Early Rising",
    prompt:
      "Write a dialogue between two friends about the importance of early rising.",
    vocab: [
      { word: "culprit", bn: "দোষী ব্যক্তি", pos: "Noun", synonyms: ["offender", "wrongdoer"], antonyms: ["innocent person"] },
      { word: "digestion", bn: "হজম", pos: "Noun", forms: [{ label: "verb", word: "digest (digested)" }, { label: "adj", word: "digestive" }], synonyms: ["assimilation"], antonyms: ["indigestion"] },
      { word: "early rising", bn: "ভোরে ঘুম থেকে ওঠা", pos: "Phrase", synonyms: ["rising with the sun"], antonyms: ["late rising"] },
      { word: "fortune", bn: "ভাগ্য, সৌভাগ্য", pos: "Noun", forms: [{ label: "adj", word: "fortunate" }, { label: "adv", word: "fortunately" }], synonyms: ["luck", "destiny"], antonyms: ["misfortune", "ill luck"] },
      { word: "out of breath", bn: "হাঁপাতে হাঁপাতে", pos: "Phrase", synonyms: ["breathless", "panting"], antonyms: ["at ease"] },
      { word: "persuade", bn: "রাজি করানো", pos: "Verb", past: "persuaded", pastParticiple: "persuaded", forms: [{ label: "noun", word: "persuasion" }, { label: "adj", word: "persuasive" }], synonyms: ["convince", "induce"], antonyms: ["dissuade", "discourage"] },
      { word: "proverb", bn: "প্রবাদ", pos: "Noun", forms: [{ label: "adj", word: "proverbial" }], synonyms: ["saying", "maxim"] },
      { word: "the early bird catches the worm", bn: "যে আগে ওঠে, সে-ই লাভবান হয়", pos: "Phrase", synonyms: ["the early riser wins"] },
    ],
    body: [
      { type: "dialogue", speaker: "Rakib", text: "Hello, Faisal! I called at your house at seven this morning, but your mother said you were still in bed." },
      { type: "dialogue", speaker: "Faisal", text: "Yes, I am afraid I got up rather late. I hardly ever rise before eight." },
      { type: "dialogue", speaker: "Rakib", text: "Eight! Then you miss the best part of the whole day." },
      { type: "dialogue", speaker: "Faisal", text: "What is so special about the morning? I make up for it by studying at night." },
      { type: "dialogue", speaker: "Rakib", text: "The two are not the same at all. The morning air is fresh and free from dust and smoke. A walk at that hour fills the lungs with pure air and keeps the body fit." },
      { type: "dialogue", speaker: "Faisal", text: "I have heard that before, but I have never felt it myself." },
      { type: "dialogue", speaker: "Rakib", text: "You will feel it the very first day you try. Everything is quiet, the birds are singing and the whole world looks newly washed. The mind is calm, and a calm mind learns twice as fast." },
      { type: "dialogue", speaker: "Faisal", text: "Do you really remember your lessons better in the morning?" },
      { type: "dialogue", speaker: "Rakib", text: "Much better. Whatever I learn between six and eight stays in my memory for weeks. At night my head is heavy and I read the same page three times without taking in a word." },
      { type: "dialogue", speaker: "Faisal", text: "That is exactly what happens to me." },
      { type: "dialogue", speaker: "Rakib", text: "Of course it does. The brain has been working all day and it needs rest, not more work." },
      { type: "dialogue", speaker: "Faisal", text: "But I get my best ideas late at night." },
      { type: "dialogue", speaker: "Rakib", text: "You may. Yet think what late hours cost you. You rise late, hurry over your breakfast, reach school out of breath and then feel sleepy in the first two periods." },
      { type: "dialogue", speaker: "Faisal", text: "That is quite true. I often yawn all through the first class." },
      { type: "dialogue", speaker: "Rakib", text: "An early riser has none of that trouble. He finishes his prayer, his walk and his studies before others have opened their eyes. He has time for everything and is never in a hurry." },
      { type: "dialogue", speaker: "Faisal", text: "Time is what I lack most." },
      { type: "dialogue", speaker: "Rakib", text: "You do not lack it; you sleep it away. Two extra hours a day come to more than seven hundred hours in a year. Think what you might do with them." },
      { type: "dialogue", speaker: "Faisal", text: "Put in that way, it sounds like a fortune." },
      { type: "dialogue", speaker: "Rakib", text: "It is. And there is the question of health. Doctors say that early rising helps digestion, keeps the heart strong and saves a man from many diseases. You know the old proverb — early to bed and early to rise makes a man healthy, wealthy and wise." },
      { type: "dialogue", speaker: "Faisal", text: "I have read it in our textbook, but I never took it seriously." },
      { type: "dialogue", speaker: "Rakib", text: "Look at the farmers of our village. They are up before sunrise and work in the field all day, and you will hardly find one of them with a weak body." },
      { type: "dialogue", speaker: "Faisal", text: "Very well, you have persuaded me. But how shall I begin? I cannot fall asleep before one in the morning." },
      { type: "dialogue", speaker: "Rakib", text: "Change one thing at a time. Go to bed half an hour earlier every week until you are in bed by ten. And keep the mobile phone out of your room; it is that which keeps you awake." },
      { type: "dialogue", speaker: "Faisal", text: "That is the real culprit, I admit." },
      { type: "dialogue", speaker: "Rakib", text: "Set an alarm and put it far from the bed, so that you have to get up to stop it. And do not lie down again — wash your face at once." },
      { type: "dialogue", speaker: "Faisal", text: "And what should I do so early in the morning?" },
      { type: "dialogue", speaker: "Rakib", text: "Say your prayers, go for a walk or take some light exercise, and then sit down to your hardest subject while the mind is fresh." },
      { type: "dialogue", speaker: "Faisal", text: "I shall start from tomorrow. Will you come and knock at my door?" },
      { type: "dialogue", speaker: "Rakib", text: "Gladly. I shall be at your gate at half past five. Be ready." },
      { type: "dialogue", speaker: "Faisal", text: "I shall be. Thank you, Rakib, for such useful advice." },
      { type: "dialogue", speaker: "Rakib", text: "Do not mention it. Good night, and remember that the early bird catches the worm." },
      { type: "dialogue", speaker: "Faisal", text: "Good night." },
    ],
  },
  {
    id: "how-to-eradicate-illiteracy",
    title: "How to Eradicate Illiteracy",
    prompt:
      "Write a dialogue between two friends about how to eradicate illiteracy.",
    vocab: [
      { word: "attitude", bn: "মনোভাব", pos: "Noun", synonyms: ["outlook", "mentality"] },
      { word: "compulsory", bn: "বাধ্যতামূলক", pos: "Adjective", forms: [{ label: "verb", word: "compel (compelled)" }, { label: "noun", word: "compulsion" }], synonyms: ["obligatory", "mandatory"], antonyms: ["optional", "voluntary"] },
      { word: "cunning", bn: "ধূর্ত, চতুর", pos: "Adjective", forms: [{ label: "noun", word: "cunning" }, { label: "adv", word: "cunningly" }], synonyms: ["crafty", "sly"], antonyms: ["simple", "straightforward"] },
      { word: "eradicate", bn: "নির্মূল করা", pos: "Verb", past: "eradicated", pastParticiple: "eradicated", forms: [{ label: "noun", word: "eradication" }], synonyms: ["root out", "wipe out"], antonyms: ["establish", "spread"] },
      { word: "ignorance", bn: "অজ্ঞতা", pos: "Noun", forms: [{ label: "adj", word: "ignorant" }, { label: "adv", word: "ignorantly" }], synonyms: ["unawareness", "illiteracy"], antonyms: ["knowledge", "learning"] },
      { word: "illiterate", bn: "নিরক্ষর", pos: "Adjective", forms: [{ label: "noun", word: "illiteracy" }, { label: "adj", word: "literate" }], synonyms: ["unlettered", "uneducated"], antonyms: ["literate", "educated"] },
      { word: "in earnest", bn: "আন্তরিকভাবে, পুরোদমে", pos: "Phrase", forms: [{ label: "adj", word: "earnest" }], synonyms: ["seriously", "wholeheartedly"], antonyms: ["half-heartedly"] },
      { word: "literacy", bn: "সাক্ষরতা", pos: "Noun", forms: [{ label: "adj", word: "literate" }], synonyms: ["ability to read and write"], antonyms: ["illiteracy"] },
      { word: "midday meal", bn: "দুপুরের খাবার", pos: "Phrase", synonyms: ["lunch"] },
      { word: "midway", bn: "মাঝপথে", pos: "Adverb", synonyms: ["halfway", "in the middle"] },
      { word: "obstacle", bn: "বাধা", pos: "Noun", synonyms: ["barrier", "hindrance"], antonyms: ["help", "aid"] },
      { word: "prosper", bn: "উন্নতি করা", pos: "Verb", past: "prospered", pastParticiple: "prospered", forms: [{ label: "adj", word: "prosperous" }, { label: "noun", word: "prosperity" }], synonyms: ["thrive", "flourish"], antonyms: ["decline", "fail"] },
      { word: "stipend", bn: "উপবৃত্তি", pos: "Noun", synonyms: ["allowance", "grant"] },
      { word: "supervision", bn: "তদারকি, তত্ত্বাবধান", pos: "Noun", forms: [{ label: "verb", word: "supervise (supervised)" }, { label: "noun", word: "supervisor" }], synonyms: ["oversight", "control"], antonyms: ["neglect", "negligence"] },
      { word: "vicious circle", bn: "দুষ্টচক্র", pos: "Phrase", synonyms: ["unending chain of evil"], antonyms: ["virtuous circle"] },
    ],
    body: [
      { type: "dialogue", speaker: "Mizan", text: "Hello, Shakil! What are you doing with that pile of old books?" },
      { type: "dialogue", speaker: "Shakil", text: "Hello, Mizan. I am sorting them out. I shall give them to the night school our club has opened for the illiterate people of our village." },
      { type: "dialogue", speaker: "Mizan", text: "A night school? That is excellent. But how many illiterate people are there in our country?" },
      { type: "dialogue", speaker: "Shakil", text: "The rate of literacy has risen a great deal in recent years, yet nearly a quarter of our people still cannot read or write. In the villages the number is higher, and among women higher still." },
      { type: "dialogue", speaker: "Mizan", text: "That is a shame for a country of eighteen crore people." },
      { type: "dialogue", speaker: "Shakil", text: "It is worse than a shame; it is a great obstacle. An illiterate man cannot read the label on a bottle of medicine, cannot understand a contract, and puts his thumb impression on a paper he has never read." },
      { type: "dialogue", speaker: "Mizan", text: "I have seen that happen. A cunning man in our village took away half the land of an old farmer in that very way." },
      { type: "dialogue", speaker: "Shakil", text: "Such things happen every day. Illiteracy keeps a nation poor, and poverty in its turn keeps the nation illiterate. It is a vicious circle." },
      { type: "dialogue", speaker: "Mizan", text: "What are the causes of it, do you think?" },
      { type: "dialogue", speaker: "Shakil", text: "Poverty is the chief cause. A poor father sends his son to the field or the workshop instead of the school. Then there is ignorance — many parents do not see the value of education, especially for their daughters." },
      { type: "dialogue", speaker: "Mizan", text: "And early marriage stops many girls midway." },
      { type: "dialogue", speaker: "Shakil", text: "It does. Besides, in some remote areas there is no school within two or three miles, and there is a great want of trained teachers and proper supervision." },
      { type: "dialogue", speaker: "Mizan", text: "Then how can illiteracy be removed?" },
      { type: "dialogue", speaker: "Shakil", text: "It can never be removed by the government alone. It calls for a movement in which everybody takes part." },
      { type: "dialogue", speaker: "Mizan", text: "What should the government do first?" },
      { type: "dialogue", speaker: "Shakil", text: "Primary education is already free and compulsory, but the law must be enforced in earnest. More schools should be set up in remote areas, more teachers appointed and trained, and stipends and midday meals given so that poor parents send their children and keep them there." },
      { type: "dialogue", speaker: "Mizan", text: "And what of the grown-up people who have passed the age of school?" },
      { type: "dialogue", speaker: "Shakil", text: "For them we need night schools and adult education centres in every union. A farmer cannot leave his field in the daytime, but he can learn for an hour after the evening prayer." },
      { type: "dialogue", speaker: "Mizan", text: "Who will teach in them?" },
      { type: "dialogue", speaker: "Shakil", text: "We shall. That is where the students come in. Every educated person should teach at least one illiterate person — a servant, a neighbour, a labourer. If each of us teaches one, the problem is half solved." },
      { type: "dialogue", speaker: "Mizan", text: "That is a fine idea. Can the media help us?" },
      { type: "dialogue", speaker: "Shakil", text: "They can do wonders. Radio, television and even the mobile phone can teach letters and figures through short programmes, songs and dramas, and they can also change the attitude of parents towards the education of their daughters." },
      { type: "dialogue", speaker: "Mizan", text: "The mosque and the local leaders could help too." },
      { type: "dialogue", speaker: "Shakil", text: "Certainly. The imam, the chairman and the teachers of a village are respected by all, and a word from them carries more weight than a hundred posters." },
      { type: "dialogue", speaker: "Mizan", text: "Will the people come, do you think? Many of them are old and feel shy." },
      { type: "dialogue", speaker: "Shakil", text: "They will, if we go to them with respect instead of pity. Once a man writes his own name for the first time, you should see his face. He never stays away after that." },
      { type: "dialogue", speaker: "Mizan", text: "You are making me eager. May I join your night school?" },
      { type: "dialogue", speaker: "Shakil", text: "That is just what I was about to ask you. We need two more teachers. The classes are held from seven to eight, six days a week." },
      { type: "dialogue", speaker: "Mizan", text: "Count me in from tomorrow. I shall bring my old books along as well." },
      { type: "dialogue", speaker: "Shakil", text: "Wonderful. Remember, a nation of illiterate people can never prosper, whatever else it may possess." },
      { type: "dialogue", speaker: "Mizan", text: "I shall remember that. Thank you, Shakil. Goodbye." },
      { type: "dialogue", speaker: "Shakil", text: "Goodbye. See you tomorrow at seven." },
    ],
  },
];

/* ─────────────────────────── Compositions ───────────────────────── */

const compositions: Piece[] = [
  {
    id: "uses-and-abuses-of-mobile-phone",
    title: "Uses and Abuses of the Mobile Phone",
    prompt: "Write a composition on 'Uses and Abuses of the Mobile Phone'.",
    vocab: [
      { word: "addiction", bn: "আসক্তি, নেশা", pos: "Noun", forms: [{ label: "adj", word: "addicted" }, { label: "verb", word: "addict" }], synonyms: ["obsession", "dependence"], antonyms: ["detachment", "freedom"] },
      { word: "afloat", bn: "ভাসমান, চালু", pos: "Adjective", synonyms: ["floating", "in circulation"], antonyms: ["sunk", "suppressed"] },
      { word: "assuredly", bn: "নিশ্চিতভাবে", pos: "Adverb", forms: [{ label: "verb", word: "assure (assured)" }, { label: "adj", word: "assured" }], synonyms: ["certainly", "surely"], antonyms: ["doubtfully", "perhaps"] },
      { word: "blackmail", bn: "ভয় দেখিয়ে আদায় করা", pos: "Verb", past: "blackmailed", pastParticiple: "blackmailed", forms: [{ label: "noun", word: "blackmail" }], synonyms: ["extort", "threaten"] },
      { word: "conquer", bn: "জয় করা", pos: "Verb", past: "conquered", pastParticiple: "conquered", forms: [{ label: "noun", word: "conquest" }, { label: "noun", word: "conqueror" }], synonyms: ["defeat", "overcome"], antonyms: ["surrender", "yield"] },
      { word: "double-edged weapon", bn: "দু'ধারী তলোয়ার", pos: "Phrase", synonyms: ["a thing with both good and bad sides"] },
      { word: "eyesight", bn: "দৃষ্টিশক্তি", pos: "Noun", synonyms: ["vision", "sight"], antonyms: ["blindness"] },
      { word: "global village", bn: "বিশ্বগ্রাম", pos: "Phrase", synonyms: ["the world as one community"] },
      { word: "harassment", bn: "হয়রানি", pos: "Noun", forms: [{ label: "verb", word: "harass (harassed)" }], synonyms: ["tormenting", "annoyance"], antonyms: ["protection"] },
      { word: "indecent", bn: "অশ্লীল, অশোভন", pos: "Adjective", forms: [{ label: "noun", word: "indecency" }, { label: "adv", word: "indecently" }], synonyms: ["obscene", "improper"], antonyms: ["decent", "proper"] },
      { word: "inexpensive", bn: "সস্তা, কম খরচের", pos: "Adjective", forms: [{ label: "noun", word: "expense" }, { label: "adj", word: "expensive" }], synonyms: ["cheap", "affordable"], antonyms: ["costly", "expensive"] },
      { word: "instant", bn: "তাৎক্ষণিক", pos: "Adjective", forms: [{ label: "adv", word: "instantly" }, { label: "noun", word: "instant" }], synonyms: ["immediate", "prompt"], antonyms: ["delayed", "slow"] },
      { word: "luxury", bn: "বিলাসিতা", pos: "Noun", forms: [{ label: "adj", word: "luxurious" }, { label: "adv", word: "luxuriously" }], synonyms: ["extravagance", "comfort"], antonyms: ["necessity", "want"] },
      { word: "moderation", bn: "পরিমিতি, সংযম", pos: "Noun", forms: [{ label: "adj", word: "moderate" }, { label: "adv", word: "moderately" }], synonyms: ["restraint", "balance"], antonyms: ["excess", "extravagance"] },
      { word: "necessity", bn: "প্রয়োজনীয় বস্তু, অপরিহার্যতা", pos: "Noun", forms: [{ label: "adj", word: "necessary" }, { label: "adv", word: "necessarily" }], synonyms: ["need", "requirement"], antonyms: ["luxury", "surplus"] },
      { word: "numberless", bn: "অগণিত", pos: "Adjective", forms: [{ label: "noun", word: "number" }], synonyms: ["countless", "innumerable"], antonyms: ["few", "limited"] },
      { word: "possess", bn: "অধিকারে রাখা", pos: "Verb", past: "possessed", pastParticiple: "possessed", forms: [{ label: "noun", word: "possession" }, { label: "noun", word: "possessor" }], synonyms: ["own", "hold"], antonyms: ["lose", "lack"] },
      { word: "ransom", bn: "মুক্তিপণ", pos: "Noun", forms: [{ label: "verb", word: "ransom (ransomed)" }], synonyms: ["release money"] },
      { word: "shower", bn: "ঢেলে দেওয়া, বর্ষণ করা", pos: "Verb", past: "showered", pastParticiple: "showered", forms: [{ label: "noun", word: "shower" }], synonyms: ["pour", "lavish"], antonyms: ["withhold", "deny"] },
      { word: "stoop", bn: "ঝুঁকে থাকা", pos: "Verb", past: "stooped", pastParticiple: "stooped", forms: [{ label: "noun", word: "stooping" }], synonyms: ["bend", "lean forward"], antonyms: ["stand straight"] },
      { word: "torment", bn: "যন্ত্রণা দেওয়া", pos: "Verb", past: "tormented", pastParticiple: "tormented", forms: [{ label: "noun", word: "torment" }], synonyms: ["harass", "torture"], antonyms: ["comfort", "soothe"] },
      { word: "transaction", bn: "লেনদেন", pos: "Noun", forms: [{ label: "verb", word: "transact (transacted)" }], synonyms: ["dealing", "business"] },
    ],
    body: [
      {
        type: "para",
        text: "Science has showered numberless gifts upon modern man, but few of them have entered his daily life so completely as the mobile phone. It is a small wireless telephone which a man may carry in his pocket and use at any place and at any hour. What was once a costly luxury of the rich has now become an article of common necessity. Today the farmer standing in his field, the rickshaw puller waiting at the street corner and the schoolboy walking home all carry one. Like every other invention of science, however, the mobile phone is a double-edged weapon. It has a bright side and a dark side, and both of them deserve our careful attention.",
      },
      {
        type: "para",
        text: "The mobile phone came to our country only a few decades ago. In its early days a single set cost a small fortune, and only a handful of wealthy men possessed one. But with the passage of time the price has fallen and the network has spread to the remotest corner of the land. There are now more than eighteen crore mobile connections in Bangladesh, a number which almost equals the population of the whole country. Hardly any invention in history has been accepted by an entire nation with such astonishing speed.",
      },
      {
        type: "para",
        text: "The greatest service of the mobile phone is that it has conquered distance. Communication, which once depended upon the postman and took days or even weeks, has become instant and inexpensive. A man may talk to his relatives living thousands of miles away as easily and as clearly as if they were seated in the next room. Through a video call a father working in the Middle East can watch his child taking its first steps. In this sense the mobile phone has drawn together the scattered members of a family and has turned the wide world into a global village.",
      },
      {
        type: "para",
        text: "Its usefulness in the practical affairs of life is beyond calculation. In an emergency — a road accident, a fire, a sudden illness at midnight — a single call brings the ambulance, the fire brigade or the police. Businessmen settle their transactions without stirring from their offices. The farmer is no longer at the mercy of the middleman, for he can learn the market price of paddy or jute before he leaves his village. The fisherman at sea receives warning of an approaching cyclone and turns his boat towards the shore in time. Countless lives are saved in this manner every year.",
      },
      {
        type: "para",
        text: "The modern mobile phone, moreover, is no longer a mere telephone. It is at once a camera, a clock, a calculator, a radio, a torch and a small computer that lies in the palm of the hand. With the internet at his fingertips a student may attend an online class, consult a dictionary or read a book that is not to be found in the library of his own school. Mobile financial services have carried banking into villages where no bank has ever opened a branch, and a labourer in the city can send money to his mother in the countryside within a minute. Doctors, too, now give advice over the telephone to patients who live far from any hospital.",
      },
      {
        type: "para",
        text: "Yet the picture has another side, and it is a dark one. The abuse of the mobile phone has grown into a serious problem, particularly among the young. Many students pass the whole night in chatting, in wandering through Facebook and TikTok, or in playing games, and go to school the next morning with heavy eyes and an empty head. The habit fastens upon them like an addiction, until they can no longer sit quietly with a book for half an hour together. Learning demands patience and concentration, and it is precisely these two virtues that the misuse of the mobile phone destroys.",
      },
      {
        type: "para",
        text: "The instrument has also placed a dangerous weapon in the hands of evil-doers. Criminals arrange their plots and demand ransom over it. Dishonest young men torment girls with unwanted calls and indecent messages, and many a girl has given up her studies for this reason alone. False news and communal rumours, set afloat by mischievous persons, fly from hand to hand within minutes and have more than once ended in riot and bloodshed. The camera, which is a blessing in honest hands, becomes an instrument of blackmail in dishonest ones.",
      },
      {
        type: "para",
        text: "Physicians warn us of the injury that the constant use of the phone does to the body. Long hours before a bright screen weaken the eyesight and bring on headache, the light of the screen disturbs sleep, and the habit of stooping over the instrument causes pain in the neck and the spine. It has driven our boys and girls away from the playground, and the loss of games has told heavily upon their health. There is a greater loss still. In many a household the members now sit in the same room, each bent silently over a separate screen. The mobile phone has brought the distant near, but it has also made the near distant.",
      },
      {
        type: "para",
        text: "What, then, is the remedy? Certainly not to throw the instrument away, for the fault lies not with it but with the user. A knife in the hand of a cook prepares a meal; in the hand of a murderer it takes a life. Guardians should keep a watchful eye upon what their children do with their phones and should fix an hour after which the instrument is laid aside. Students should learn to use it as a tool of study and not as a plaything. The authorities, for their part, must enforce the law strictly against those who employ it for crime, for harassment or for the spreading of falsehood, while our schools and our media should teach the young the manners of the digital world.",
      },
      {
        type: "para",
        text: "To sum up, the mobile phone is one of the finest achievements of modern science, and it is idle to imagine the present age without it. Whether it shall prove a blessing or a curse depends entirely upon ourselves. If we use it with judgement, with moderation and with a sense of responsibility, it will remain a faithful servant to the end. But if we allow it to master us, it will assuredly make us its slaves.",
      },
    ],
  },
  {
    id: "duties-of-a-student",
    title: "The Duties of a Student",
    prompt: "Write a composition on 'The Duties of a Student'.",
    vocab: [
      { word: "acquire", bn: "অর্জন করা", pos: "Verb", past: "acquired", pastParticiple: "acquired", forms: [{ label: "noun", word: "acquisition" }], synonyms: ["gain", "obtain"], antonyms: ["lose", "forfeit"] },
      { word: "boundless", bn: "সীমাহীন", pos: "Adjective", forms: [{ label: "noun", word: "bound" }, { label: "adj", word: "bounded" }], synonyms: ["limitless", "infinite"], antonyms: ["limited", "narrow"] },
      { word: "burden", bn: "বোঝা", pos: "Noun", forms: [{ label: "verb", word: "burden (burdened)" }, { label: "adj", word: "burdensome" }], synonyms: ["load", "weight"], antonyms: ["relief", "help"] },
      { word: "courteous", bn: "ভদ্র, নম্র", pos: "Adjective", forms: [{ label: "noun", word: "courtesy" }, { label: "adv", word: "courteously" }], synonyms: ["polite", "well-mannered"], antonyms: ["rude", "discourteous"] },
      { word: "destiny", bn: "নিয়তি, ভাগ্য", pos: "Noun", forms: [{ label: "adj", word: "destined" }], synonyms: ["fate", "fortune"] },
      { word: "discipline", bn: "শৃঙ্খলা", pos: "Noun", forms: [{ label: "adj", word: "disciplined" }, { label: "verb", word: "discipline (disciplined)" }], synonyms: ["order", "self-control"], antonyms: ["indiscipline", "disorder"] },
      { word: "foremost", bn: "সর্বপ্রথম, প্রধান", pos: "Adjective", synonyms: ["chief", "leading"], antonyms: ["last", "least"] },
      { word: "gratitude", bn: "কৃতজ্ঞতা", pos: "Noun", forms: [{ label: "adj", word: "grateful" }, { label: "adv", word: "gratefully" }], synonyms: ["thankfulness", "appreciation"], antonyms: ["ingratitude", "thanklessness"] },
      { word: "idleness", bn: "অলসতা", pos: "Noun", forms: [{ label: "adj", word: "idle" }, { label: "adv", word: "idly" }], synonyms: ["laziness", "inactivity"], antonyms: ["industry", "diligence"] },
      { word: "intoxication", bn: "নেশা, মাদকাসক্তি", pos: "Noun", forms: [{ label: "adj", word: "intoxicated" }, { label: "verb", word: "intoxicate" }], synonyms: ["drunkenness"], antonyms: ["sobriety"] },
      { word: "maturity", bn: "পরিপক্বতা, পরিণত বয়স", pos: "Noun", forms: [{ label: "adj", word: "mature" }, { label: "verb", word: "mature (matured)" }], synonyms: ["ripeness", "adulthood"], antonyms: ["immaturity", "childhood"] },
      { word: "neglect", bn: "অবহেলা করা", pos: "Verb", past: "neglected", pastParticiple: "neglected", forms: [{ label: "noun", word: "negligence" }, { label: "adj", word: "negligent" }], synonyms: ["ignore", "disregard"], antonyms: ["attend to", "care for"] },
      { word: "obedience", bn: "আনুগত্য", pos: "Noun", forms: [{ label: "verb", word: "obey (obeyed)" }, { label: "adj", word: "obedient" }], synonyms: ["compliance", "submission"], antonyms: ["disobedience", "defiance"] },
      { word: "punctuality", bn: "সময়ানুবর্তিতা", pos: "Noun", forms: [{ label: "adj", word: "punctual" }, { label: "adv", word: "punctually" }], synonyms: ["promptness", "timeliness"], antonyms: ["lateness", "delay"] },
      { word: "repent", bn: "অনুতপ্ত হওয়া", pos: "Verb", past: "repented", pastParticiple: "repented", forms: [{ label: "noun", word: "repentance" }, { label: "adj", word: "repentant" }], synonyms: ["regret", "rue"], antonyms: ["rejoice", "be glad"] },
      { word: "reproduce", bn: "হুবহু তুলে ধরা", pos: "Verb", past: "reproduced", pastParticiple: "reproduced", forms: [{ label: "noun", word: "reproduction" }], synonyms: ["copy", "repeat"], antonyms: ["create", "originate"] },
      { word: "scrupulously", bn: "নিষ্ঠার সঙ্গে, সযত্নে", pos: "Adverb", forms: [{ label: "adj", word: "scrupulous" }], synonyms: ["strictly", "conscientiously"], antonyms: ["carelessly", "loosely"] },
      { word: "solemn", bn: "গম্ভীর, পবিত্র", pos: "Adjective", forms: [{ label: "noun", word: "solemnity" }, { label: "adv", word: "solemnly" }], synonyms: ["serious", "grave"], antonyms: ["frivolous", "light"] },
      { word: "squander", bn: "অপচয় করা", pos: "Verb", past: "squandered", pastParticiple: "squandered", synonyms: ["waste", "misspend"], antonyms: ["save", "economise"] },
      { word: "wholesome", bn: "স্বাস্থ্যকর", pos: "Adjective", forms: [{ label: "noun", word: "wholesomeness" }], synonyms: ["healthy", "nourishing"], antonyms: ["harmful", "unwholesome"] },
    ],
    body: [
      {
        type: "para",
        text: "Student life is the seed time of life. The seed that is sown in these few years determines the harvest of the whole life that follows. What a man shall become in his maturity — a scholar or a dunce, an honest citizen or a burden upon society — depends very largely upon the manner in which he has spent his student days. It is for this reason that the wise have called student life the golden period of human existence. But this golden period brings with it a set of solemn duties, and he who neglects them repents at leisure.",
      },
      {
        type: "para",
        text: "The word 'student' means a learner, and learning is by no means confined to the pages of a textbook. A student is a citizen in the making. He has duties towards himself, towards his parents, towards his teachers and towards the country which feeds, protects and educates him. These duties are not a burden laid upon him from outside; they are the very means by which he grows into a complete man.",
      },
      {
        type: "para",
        text: "The first and foremost duty of a student is to acquire knowledge. He should attend his classes regularly, prepare his lessons from day to day and never put off till tomorrow the work of today. Regularity and attention in the classroom save him half the labour of private study. He must remember, however, that education and examination are not the same thing. To cram a set of answers and reproduce them upon the answer script is not to be educated; that is the achievement of a parrot, not of a man. The true student tries to understand what he reads, to question it and to think for himself.",
      },
      {
        type: "para",
        text: "Nor should he confine himself to his prescribed books alone. The syllabus is a narrow path, while the world of knowledge is a boundless field. He should form the habit of reading newspapers, history, science, the lives of great men and the best literature of his own language and of English, for these enlarge the mind in a way that no textbook can. A student who has read the life of a great man has already learnt something which no examiner is able to measure.",
      },
      {
        type: "para",
        text: "The second great duty of a student is to build his character. Learning without character is a lamp in the hand of a blind man. Honesty, truthfulness, punctuality, obedience and a courteous respect for elders are habits which must be formed in early life, for a habit once rooted is exceedingly hard to pull up. He should be modest in prosperity and patient in difficulty, and should learn to keep his word at whatever cost. Discipline is the very foundation of student life, and he who has never learnt to obey will never be fit to command.",
      },
      {
        type: "para",
        text: "A student owes a duty to his own body as well. A sound mind, as the old saying goes, dwells in a sound body. He should take simple and wholesome food, rise early, keep regular hours and give a part of every day to games and exercise. Sports do far more than harden the muscles: they teach him to play fair, to obey his captain, to win without pride and to lose without bitterness. A sickly body is a poor servant to an active mind.",
      },
      {
        type: "para",
        text: "Towards his parents and his teachers his duty is one of gratitude and obedience. His parents deny themselves many a comfort that he may have his books and his fees; his teachers spend their lives in shaping minds that are not their own. To repay them, a student must be dutiful at home, must lend a hand in the household work so far as he is able, and must never give them cause for anxiety by idleness or by evil company.",
      },
      {
        type: "para",
        text: "But the duties of a student do not end within the four walls of his home and his school. He owes a heavy debt to society. He can teach an illiterate servant or neighbour to read and write, and thus take his share in the war against illiteracy. He can plant trees, keep his locality clean, and make the people around him aware of the evils of drugs, of early marriage and of dowry. In times of flood, cyclone or epidemic the students of this country have always stood beside the suffering people, collecting relief and nursing the sick, and such service is itself a part of their education. In this work a young man learns discipline, sympathy and the pure joy of serving others.",
      },
      {
        type: "para",
        text: "There are certain things, on the other hand, which a student must scrupulously avoid. He should keep away from the company of the idle and the vicious, and from drugs and every form of intoxication. He should take an intelligent interest in the affairs of his country, but he should never allow himself to be used as a tool by any party, for the classroom and not the procession is his proper place. Above all, he should not squander his time, for money once lost may be earned again, but time once lost is lost for ever.",
      },
      {
        type: "para",
        text: "In conclusion, it may be said that the duty of a student is to prepare himself in body, in mind and in character to become a good man and a useful citizen. The students of today are the leaders of tomorrow, and in their hands lies the destiny of the nation. If they perform their duties faithfully, no power on earth can keep this country backward; but if they fail, neither wealth nor resources will be able to save it.",
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

/* ─────────────────────────── Categories ─────────────────────────── */

export const categories: Category[] = [
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
    description: "Applications to the headmaster and letters to friends.",
    pieces: letters,
  },
  {
    id: "email",
    title: "Email",
    icon: "Mail",
    description: "Emails in the layout the examiner expects.",
    pieces: emails,
  },
];
