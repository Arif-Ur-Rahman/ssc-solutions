// components/paragraphsData.ts
//
// Paragraphs: the guided paragraphs the board asks most often, each with the
// board's guiding questions and the hard words noted A to Z behind the
// synopsis.
//
// The SSC exam always wants the answer as one single paragraph, so each body
// here is exactly one "para" block: never split it into several.

import type { Piece } from "./englishData";

export const paragraphs: Piece[] = [
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
  {
    id: "the-internet",
    title: "The Internet",
    prompt:
      "Write a paragraph on 'The Internet' by answering the following questions.",
    hints: [
      "What is the internet?",
      "How does it work?",
      "How does it help us in education, business and communication?",
      "What are its bad sides?",
      "How should we use it?",
    ],
    vocab: [
      { word: "addiction", bn: "আসক্তি", pos: "Noun", forms: [{ label: "adj", word: "addicted" }, { label: "adj", word: "addictive" }], synonyms: ["dependence", "craving"], antonyms: ["freedom", "control"] },
      { word: "blessing", bn: "আশীর্বাদ", pos: "Noun", forms: [{ label: "verb", word: "bless (blessed)" }], synonyms: ["boon", "gift"], antonyms: ["curse", "bane"] },
      { word: "browse", bn: "ইন্টারনেটে খোঁজা, চোখ বুলানো", pos: "Verb", past: "browsed", pastParticiple: "browsed", forms: [{ label: "noun", word: "browser" }], synonyms: ["search", "look through"] },
      { word: "cyber crime", bn: "সাইবার অপরাধ", pos: "Phrase", synonyms: ["online crime", "computer crime"] },
      { word: "fraud", bn: "প্রতারণা", pos: "Noun", forms: [{ label: "adj", word: "fraudulent" }], synonyms: ["cheating", "deception"], antonyms: ["honesty"] },
      { word: "network", bn: "যোগাযোগ-জাল, নেটওয়ার্ক", pos: "Noun", forms: [{ label: "verb", word: "network" }], synonyms: ["system", "web"] },
      { word: "obscene", bn: "অশ্লীল", pos: "Adjective", forms: [{ label: "noun", word: "obscenity" }], synonyms: ["indecent", "vulgar"], antonyms: ["decent", "clean"] },
      { word: "transaction", bn: "লেনদেন", pos: "Noun", forms: [{ label: "verb", word: "transact" }], synonyms: ["deal", "exchange"] },
      { word: "virtually", bn: "কার্যত, প্রায়", pos: "Adverb", forms: [{ label: "adj", word: "virtual" }], synonyms: ["almost", "nearly"] },
      { word: "wisely", bn: "বুদ্ধিমানের মতো", pos: "Adverb", forms: [{ label: "adj", word: "wise" }, { label: "noun", word: "wisdom" }], synonyms: ["sensibly", "prudently"], antonyms: ["foolishly", "unwisely"] },
    ],
    body: [
      {
        type: "para",
        text: "The internet is a worldwide network of millions of computers linked with one another through telephone lines, cables, satellites and mobile towers. It is often called the information superhighway, for any information stored in one computer can travel to another at any corner of the world within a second. Anyone who has a computer or a smartphone and an internet connection can use it. The internet has brought the whole world into our hands and turned it into a global village. In communication its contribution is the greatest: through email, messenger and video calls we can talk to our dear ones living abroad face to face at a very low cost. Students can browse websites, read books, attend online classes and download study materials without going to a library. Businessmen buy and sell goods, carry out bank transactions and advertise their products online. We can pay bills, book tickets, apply for jobs and get the latest news of the world while sitting at home. Doctors now give advice to patients living far away, and farmers learn about new methods of cultivation from it. But the internet has its dark sides too. Many young people spend hours on social media and games and become addicted to them, which harms their studies and health. Obscene pictures, false news and rumours spread quickly through it, and dishonest people commit cyber crimes such as fraud and hacking. So the internet is a blessing or a curse depending on how we use it. If we use it wisely and for good purposes, it will remain one of the greatest gifts of modern science, which has made virtually everything possible for mankind.",
      },
    ],
  },
  {
    id: "a-village-doctor",
    title: "A Village Doctor",
    prompt:
      "Write a paragraph on 'A Village Doctor' by answering the following questions.",
    hints: [
      "Who is a village doctor?",
      "What are his qualifications?",
      "How does he treat his patients?",
      "What is his income and how does he live?",
      "Why is he important to the villagers?",
    ],
    vocab: [
      { word: "ailment", bn: "অসুখ, পীড়া", pos: "Noun", forms: [{ label: "verb", word: "ail" }], synonyms: ["illness", "disease"], antonyms: ["health", "fitness"] },
      { word: "diagnose", bn: "রোগ নির্ণয় করা", pos: "Verb", past: "diagnosed", pastParticiple: "diagnosed", forms: [{ label: "noun", word: "diagnosis" }], synonyms: ["identify", "detect"] },
      { word: "dispensary", bn: "ঔষধালয়, ডাক্তারখানা", pos: "Noun", forms: [{ label: "verb", word: "dispense" }], synonyms: ["pharmacy", "clinic"] },
      { word: "humble", bn: "বিনয়ী, সাধারণ", pos: "Adjective", forms: [{ label: "noun", word: "humility" }, { label: "adv", word: "humbly" }], synonyms: ["modest", "simple"], antonyms: ["proud", "arrogant"] },
      { word: "indispensable", bn: "অপরিহার্য", pos: "Adjective", forms: [{ label: "verb", word: "dispense" }], synonyms: ["essential", "necessary"], antonyms: ["unnecessary", "dispensable"] },
      { word: "limited", bn: "সীমিত", pos: "Adjective", forms: [{ label: "noun", word: "limit" }, { label: "noun", word: "limitation" }], synonyms: ["restricted", "small"], antonyms: ["unlimited", "vast"] },
      { word: "qualification", bn: "যোগ্যতা", pos: "Noun", forms: [{ label: "verb", word: "qualify" }, { label: "adj", word: "qualified" }], synonyms: ["ability", "training"] },
      { word: "remote", bn: "প্রত্যন্ত, দূরবর্তী", pos: "Adjective", forms: [{ label: "noun", word: "remoteness" }], synonyms: ["distant", "far-off"], antonyms: ["near", "close"] },
      { word: "sympathetic", bn: "সহানুভূতিশীল", pos: "Adjective", forms: [{ label: "noun", word: "sympathy" }, { label: "verb", word: "sympathise" }], synonyms: ["kind", "caring"], antonyms: ["unkind", "cruel"] },
    ],
    body: [
      {
        type: "para",
        text: "A village doctor is a familiar and respected figure in the rural areas of Bangladesh. He is not a highly qualified physician with an MBBS degree; in most cases he has passed the SSC or HSC examination and taken a short training course in medicine, or has learned the work by assisting a doctor for some years. Some village doctors practise allopathic medicine, while others treat their patients with homeopathy or herbal medicine. He usually has a small dispensary in the village market, where he sits with a few shelves of medicines, a stethoscope, a thermometer and a blood pressure machine. He treats common ailments like fever, cold, cough, dysentery, diarrhoea and minor cuts and wounds. He diagnoses a disease by feeling the pulse, checking the temperature and asking the patient a few questions. He is always ready to go to his patients' houses at any hour of the day or night, sometimes on foot, sometimes on a bicycle or a motorbike, even in rain and darkness. His fee is very small, and he often treats the poor free of cost or on credit. So his income is limited and he leads a simple and humble life. Yet he is sympathetic and friendly, and the villagers love and trust him as a member of their own family. As there are few qualified doctors and hospitals in remote villages, the village doctor is indispensable to the rural people. However, his knowledge is limited, and a wrong treatment may sometimes put a patient's life in danger. So he should know his limits and send serious patients to the nearest hospital. The government should also arrange proper training for village doctors so that they can serve the rural people better.",
      },
    ],
  },
  {
    id: "early-rising",
    title: "Early Rising",
    prompt:
      "Write a paragraph on 'Early Rising' by answering the following questions.",
    hints: [
      "What is early rising?",
      "Why is it a good habit?",
      "How does it help our body and mind?",
      "What do late risers lose?",
      "How can we form the habit?",
    ],
    vocab: [
      { word: "bestow", bn: "প্রদান করা", pos: "Verb", past: "bestowed", pastParticiple: "bestowed", synonyms: ["give", "grant"], antonyms: ["withhold", "take away"] },
      { word: "cheerful", bn: "প্রফুল্ল, হাসিখুশি", pos: "Adjective", forms: [{ label: "noun", word: "cheerfulness" }, { label: "adv", word: "cheerfully" }], synonyms: ["happy", "joyful"], antonyms: ["gloomy", "sad"] },
      { word: "dull", bn: "নিস্তেজ, অলস", pos: "Adjective", forms: [{ label: "noun", word: "dullness" }], synonyms: ["sluggish", "lifeless"], antonyms: ["lively", "active"] },
      { word: "exclusively", bn: "একমাত্র, শুধুমাত্র", pos: "Adverb", forms: [{ label: "adj", word: "exclusive" }], synonyms: ["only", "solely"] },
      { word: "habit", bn: "অভ্যাস", pos: "Noun", forms: [{ label: "adj", word: "habitual" }, { label: "adv", word: "habitually" }], synonyms: ["practice", "custom"] },
      { word: "hurry", bn: "তাড়াহুড়া", pos: "Noun", forms: [{ label: "verb", word: "hurry (hurried)" }], synonyms: ["haste", "rush"], antonyms: ["leisure", "calm"] },
      { word: "refreshing", bn: "সতেজকারী", pos: "Adjective", forms: [{ label: "verb", word: "refresh" }, { label: "noun", word: "refreshment" }], synonyms: ["fresh", "invigorating"], antonyms: ["tiring", "exhausting"] },
      { word: "sluggard", bn: "অলস ব্যক্তি", pos: "Noun", forms: [{ label: "adj", word: "sluggish" }], synonyms: ["idler", "lazy person"], antonyms: ["worker"] },
      { word: "tranquil", bn: "শান্ত, প্রশান্ত", pos: "Adjective", forms: [{ label: "noun", word: "tranquillity" }], synonyms: ["calm", "peaceful"], antonyms: ["noisy", "restless"] },
    ],
    body: [
      {
        type: "para",
        text: "Early rising means getting up from bed early in the morning, before or at the time of sunrise. It is a very good habit, and there is a well-known proverb, 'Early to bed and early to rise makes a man healthy, wealthy and wise.' The morning is the best part of the day. At that time nature remains calm and tranquil, the air is fresh and free from dust and smoke, birds sing sweetly and flowers bloom in the gardens. An early riser can enjoy all this beauty, which a late riser never sees. A walk in the refreshing morning air makes the body strong and the mind cheerful, and a man who rises early is seldom attacked by diseases. The morning is also the best time for study, because the mind is fresh after a sound sleep and whatever we read at that time we can learn easily and remember for a long time. An early riser gets plenty of time to say his prayers, take some exercise, finish his lessons and get ready for school or office without any hurry. He can therefore do all his work of the day properly and in time. On the other hand, a late riser remains dull and lazy the whole day. He has to do everything in a hurry and cannot finish his work in time, and so he falls behind others in life. Most of the great men of the world were early risers. To form this habit, we should go to bed early at night and avoid sitting up late with mobile phones and television. We should all acquire this habit from our childhood and enjoy the blessings that early rising bestows on us.",
      },
    ],
  },
  {
    id: "the-computer",
    title: "The Computer",
    prompt:
      "Write a paragraph on 'The Computer' by answering the following questions.",
    hints: [
      "What is a computer?",
      "What are its main parts?",
      "In which fields is it used?",
      "What are its bad sides?",
      "How important is it for Bangladesh?",
    ],
    vocab: [
      { word: "accuracy", bn: "নির্ভুলতা", pos: "Noun", forms: [{ label: "adj", word: "accurate" }, { label: "adv", word: "accurately" }], synonyms: ["correctness", "precision"], antonyms: ["inaccuracy", "error"] },
      { word: "calculation", bn: "গণনা, হিসাব", pos: "Noun", forms: [{ label: "verb", word: "calculate" }, { label: "noun", word: "calculator" }], synonyms: ["computation", "reckoning"] },
      { word: "device", bn: "যন্ত্র, কৌশল", pos: "Noun", forms: [{ label: "verb", word: "devise" }], synonyms: ["machine", "instrument"] },
      { word: "indispensable", bn: "অপরিহার্য", pos: "Adjective", synonyms: ["essential", "necessary"], antonyms: ["unnecessary", "dispensable"] },
      { word: "input", bn: "ভেতরে দেওয়া তথ্য, ইনপুট", pos: "Noun", synonyms: ["data given"], antonyms: ["output"] },
      { word: "process", bn: "প্রক্রিয়া করা", pos: "Verb", past: "processed", pastParticiple: "processed", forms: [{ label: "noun", word: "process" }, { label: "noun", word: "processor" }], synonyms: ["handle", "deal with"] },
      { word: "revolution", bn: "বিপ্লব", pos: "Noun", forms: [{ label: "adj", word: "revolutionary" }, { label: "verb", word: "revolutionise" }], synonyms: ["great change", "upheaval"] },
      { word: "store", bn: "জমা রাখা", pos: "Verb", past: "stored", pastParticiple: "stored", forms: [{ label: "noun", word: "storage" }], synonyms: ["keep", "save"], antonyms: ["delete", "discard"] },
      { word: "unemployment", bn: "বেকারত্ব", pos: "Noun", forms: [{ label: "adj", word: "unemployed" }, { label: "verb", word: "employ" }], synonyms: ["joblessness"], antonyms: ["employment"] },
      { word: "wonder", bn: "বিস্ময়", pos: "Noun", forms: [{ label: "adj", word: "wonderful" }], synonyms: ["marvel", "miracle"] },
    ],
    body: [
      {
        type: "para",
        text: "The computer is one of the greatest wonders of modern science. It is an electronic device that can receive information, store it, process it and give the result with great speed and accuracy. The word 'computer' comes from 'compute', which means to calculate, and at first it was made only for doing calculations. Charles Babbage is called the father of the computer. A computer has three main parts: the input unit such as the keyboard and the mouse, the central processing unit (CPU) which is its brain, and the output unit such as the monitor and the printer. A computer has no brain of its own; it works according to the instructions, called programs, given by man. Yet it can do in a few seconds the work that would take a man many days. Today computers are used in almost every field of life. In offices, banks, railway and air ticket counters and hospitals they keep records and do the accounts. In education, students use them to learn lessons, take online classes and publish examination results. Doctors use them to diagnose diseases, and scientists use them in research and in sending satellites into space. With the help of the internet, a computer connects us with the whole world within a moment. However, the computer has some bad sides too. Excessive use of it harms our eyes and health, and many young people waste their time playing games. It has also taken away many jobs from men and increased unemployment in some sectors, while hackers use it to commit cyber crimes. For a developing country like Bangladesh the computer is indispensable. To build a Smart Bangladesh, computer education should be spread to every school, even in the remote villages, so that our young generation can keep pace with the modern world of information technology.",
      },
    ],
  },
  {
    id: "a-school-magazine",
    title: "A School Magazine",
    prompt:
      "Write a paragraph on 'A School Magazine' by answering the following questions.",
    hints: [
      "What is a school magazine?",
      "Who publishes it and how is it prepared?",
      "What does it contain?",
      "How does it help the students?",
      "How did you feel when your writing was published?",
    ],
    vocab: [
      { word: "anecdote", bn: "মজার ছোট ঘটনা, উপাখ্যান", pos: "Noun", synonyms: ["story", "tale"] },
      { word: "contribute", bn: "অবদান রাখা, লেখা দেওয়া", pos: "Verb", past: "contributed", pastParticiple: "contributed", forms: [{ label: "noun", word: "contribution" }, { label: "noun", word: "contributor" }], synonyms: ["give", "donate"], antonyms: ["withhold"] },
      { word: "creative", bn: "সৃজনশীল", pos: "Adjective", forms: [{ label: "verb", word: "create" }, { label: "noun", word: "creativity" }], synonyms: ["inventive", "original"], antonyms: ["unimaginative"] },
      { word: "dormant", bn: "সুপ্ত", pos: "Adjective", synonyms: ["hidden", "inactive"], antonyms: ["active", "awake"] },
      { word: "editorial board", bn: "সম্পাদনা পরিষদ", pos: "Phrase", synonyms: ["editing committee"] },
      { word: "mirror", bn: "দর্পণ, প্রতিচ্ছবি", pos: "Noun", forms: [{ label: "verb", word: "mirror (mirrored)" }], synonyms: ["reflection", "image"] },
      { word: "publish", bn: "প্রকাশ করা", pos: "Verb", past: "published", pastParticiple: "published", forms: [{ label: "noun", word: "publication" }, { label: "noun", word: "publisher" }], synonyms: ["bring out", "issue"], antonyms: ["suppress", "withhold"] },
      { word: "select", bn: "বাছাই করা", pos: "Verb", past: "selected", pastParticiple: "selected", forms: [{ label: "noun", word: "selection" }, { label: "adj", word: "selective" }], synonyms: ["choose", "pick"], antonyms: ["reject"] },
      { word: "talent", bn: "প্রতিভা", pos: "Noun", forms: [{ label: "adj", word: "talented" }], synonyms: ["gift", "ability"], antonyms: ["inability"] },
    ],
    body: [
      {
        type: "para",
        text: "A school magazine is a periodical that is published by a school, usually once a year, with the writings of its students and teachers. It is often called the mirror of the school, because it reflects the thoughts, feelings and talents of the young learners. Our school also publishes a magazine every year, and it comes out on the occasion of our annual prize-giving ceremony. An editorial board is formed with a senior teacher as the editor and some talented students of the upper classes as members. The board invites writings from all the students, selects the best ones and sends them to the press. Most students are eager to contribute, and so the competition is keen. The magazine contains stories, poems, essays, travel accounts, jokes, anecdotes, puzzles and drawings. There are writings in both Bangla and English, and the report of the school's yearly activities, the results of the public examinations and the photographs of the prize-winners are also printed in it. A school magazine is very useful for the students. It brings out their dormant talents and gives them a chance to see their names in print, which encourages them to write more. It improves their power of expression and develops their creative faculties, and many great writers began their career by writing in their school magazines. It also creates a spirit of unity and friendship among the students and teachers. Last year a short story of mine was published in our magazine, and I cannot express how delighted I was to see it in print. Every school should therefore publish a magazine regularly, and every student should try to contribute to it.",
      },
    ],
  },
  {
    id: "a-street-hawker",
    title: "A Street Hawker",
    prompt:
      "Write a paragraph on 'A Street Hawker' by answering the following questions.",
    hints: [
      "Who is a street hawker?",
      "What does he sell and how does he attract buyers?",
      "Who are his customers?",
      "How does he lead his life?",
      "What should be done for him?",
    ],
    vocab: [
      { word: "bargain", bn: "দর কষাকষি করা", pos: "Verb", past: "bargained", pastParticiple: "bargained", forms: [{ label: "noun", word: "bargain" }], synonyms: ["haggle", "negotiate"] },
      { word: "cheat", bn: "প্রতারণা করা, ঠকানো", pos: "Verb", past: "cheated", pastParticiple: "cheated", forms: [{ label: "noun", word: "cheating" }, { label: "noun", word: "cheat" }], synonyms: ["deceive", "swindle"] },
      { word: "customer", bn: "ক্রেতা, খদ্দের", pos: "Noun", synonyms: ["buyer", "client"], antonyms: ["seller"] },
      { word: "footpath", bn: "ফুটপাত", pos: "Noun", synonyms: ["pavement", "sidewalk"] },
      { word: "hardship", bn: "কষ্ট, দুর্ভোগ", pos: "Noun", forms: [{ label: "adj", word: "hard" }], synonyms: ["suffering", "difficulty"], antonyms: ["comfort", "ease"] },
      { word: "livelihood", bn: "জীবিকা", pos: "Noun", synonyms: ["living", "means of living"] },
      { word: "meagre", bn: "সামান্য, অপর্যাপ্ত", pos: "Adjective", synonyms: ["scanty", "poor"], antonyms: ["plentiful", "ample"] },
      { word: "tempting", bn: "লোভনীয়", pos: "Adjective", forms: [{ label: "verb", word: "tempt" }, { label: "noun", word: "temptation" }], synonyms: ["attractive", "inviting"], antonyms: ["unattractive"] },
      { word: "wares", bn: "বিক্রয়ের পণ্যসামগ্রী", pos: "Noun", synonyms: ["goods", "merchandise"] },
    ],
    body: [
      {
        type: "para",
        text: "A street hawker is a petty trader who sells his goods by moving from street to street or by sitting on the footpath. He is a familiar figure in both towns and villages. Some hawkers carry their wares in a basket on the head, some on a shoulder-pole, some in a push-cart and some in a small bag hanging from the shoulder. They sell almost everything that people need in daily life, such as toys, bangles, ribbons, combs, cheap cosmetics, fruits, vegetables, fish, peanuts, chanachur, ice cream and many other things. A hawker attracts his buyers by crying out loudly in a peculiar tone, by ringing a bell or by describing the qualities of his goods in rhymes. His customers are mostly women, children and people of the lower and middle classes, because his goods are cheap and he brings them to the doorstep. Housewives come out of their houses at his call, children gather round him and many people bargain with him before buying. Some dishonest hawkers cheat simple customers by selling low-quality goods and taking more money, but most of them are honest. The life of a street hawker is full of hardship. He starts his day early in the morning and walks miles after miles in the scorching sun, heavy rain and bitter cold. His capital is very small and his income is meagre, so he can hardly maintain his family. When he falls ill, his earning stops and his family starves. Moreover, the police often drive him away from the footpath. Yet he renders a great service to society by supplying necessary things at a low price. The government should give him loans on easy terms and arrange a fixed place for him to earn his livelihood with dignity.",
      },
    ],
  },
  {
    id: "road-accident",
    title: "Road Accident",
    prompt:
      "Write a paragraph on 'Road Accident' by answering the following questions.",
    hints: [
      "What is a road accident?",
      "Why do road accidents happen so often in Bangladesh?",
      "What are the effects of road accidents?",
      "Who suffers most from them?",
      "How can road accidents be reduced?",
    ],
    vocab: [
      { word: "cripple", bn: "পঙ্গু করা", pos: "Verb", past: "crippled", pastParticiple: "crippled", forms: [{ label: "adj", word: "crippled" }], synonyms: ["disable", "maim"], antonyms: ["cure", "heal"] },
      { word: "enforce", bn: "প্রয়োগ করা, কার্যকর করা", pos: "Verb", past: "enforced", pastParticiple: "enforced", forms: [{ label: "noun", word: "enforcement" }], synonyms: ["apply", "carry out"], antonyms: ["neglect", "ignore"] },
      { word: "negligence", bn: "অবহেলা", pos: "Noun", forms: [{ label: "adj", word: "negligent" }, { label: "verb", word: "neglect" }], synonyms: ["carelessness", "indifference"], antonyms: ["care", "attention"] },
      { word: "overtake", bn: "অতিক্রম করে সামনে যাওয়া", pos: "Verb", past: "overtook", pastParticiple: "overtaken", synonyms: ["pass", "go ahead of"] },
      { word: "reckless", bn: "বেপরোয়া", pos: "Adjective", forms: [{ label: "adv", word: "recklessly" }, { label: "noun", word: "recklessness" }], synonyms: ["careless", "rash"], antonyms: ["careful", "cautious"] },
      { word: "tragic", bn: "মর্মান্তিক, করুণ", pos: "Adjective", forms: [{ label: "noun", word: "tragedy" }], synonyms: ["sad", "heart-rending"], antonyms: ["happy", "comic"] },
      { word: "unfit", bn: "অনুপযুক্ত, চলাচলের অযোগ্য", pos: "Adjective", forms: [{ label: "adj", word: "fit" }, { label: "noun", word: "fitness" }], synonyms: ["unsuitable"], antonyms: ["fit", "suitable"] },
      { word: "untrained", bn: "অপ্রশিক্ষিত", pos: "Adjective", forms: [{ label: "verb", word: "train" }, { label: "noun", word: "training" }], synonyms: ["unskilled", "inexperienced"], antonyms: ["trained", "skilled"] },
      { word: "violation", bn: "লঙ্ঘন", pos: "Noun", forms: [{ label: "verb", word: "violate" }], synonyms: ["breach", "breaking"], antonyms: ["observance", "obedience"] },
    ],
    body: [
      {
        type: "para",
        text: "A road accident is an unexpected mishap on the road in which vehicles collide with one another, fall into ditches or run over people, causing loss of life and property. It has become a daily affair in Bangladesh, and hardly a day passes when the newspapers do not report a tragic accident. There are many causes behind it. The main cause is the reckless driving of untrained and unlicensed drivers who drive at high speed and try to overtake one another in a dangerous race. Many of them drive for long hours without rest, and some even drive after taking drugs. Vehicles that are old and unfit still run on the roads, and buses and trucks are often overloaded. Our roads are narrow and full of holes, and slow and fast vehicles run on the same lane. Besides, the violation of traffic rules by both drivers and pedestrians, crossing the road carelessly and talking on mobile phones while driving are also responsible. The effects of road accidents are very painful. Every year thousands of people are killed and many more are crippled for life. When the only earning member of a family dies, the whole family falls into deep distress, and the children's education stops. The country also loses a huge amount of money and many valuable lives. Road accidents can be reduced if we take proper steps. Driving licences should be given only to trained drivers after proper tests, and unfit vehicles must be removed from the roads. Traffic laws should be strictly enforced and the guilty drivers punished. Roads should be widened and repaired, and separate lanes made for slow vehicles. At the same time, pedestrians should use foot-over bridges and zebra crossings. Public awareness and the sincere cooperation of all can make our roads safe.",
      },
    ],
  },
  {
    id: "importance-of-learning-english",
    title: "Importance of Learning English",
    prompt:
      "Write a paragraph on 'Importance of Learning English' by answering the following questions.",
    hints: [
      "Why is English called an international language?",
      "Why is it necessary for higher education?",
      "How does it help in getting jobs and doing business?",
      "Why is it important for Bangladesh?",
      "How can we learn English well?",
    ],
    vocab: [
      { word: "communicate", bn: "যোগাযোগ করা", pos: "Verb", past: "communicated", pastParticiple: "communicated", forms: [{ label: "noun", word: "communication" }, { label: "adj", word: "communicative" }], synonyms: ["contact", "interact"] },
      { word: "competitive", bn: "প্রতিযোগিতামূলক", pos: "Adjective", forms: [{ label: "verb", word: "compete" }, { label: "noun", word: "competition" }], synonyms: ["rival", "challenging"] },
      { word: "diplomacy", bn: "কূটনীতি", pos: "Noun", forms: [{ label: "adj", word: "diplomatic" }, { label: "noun", word: "diplomat" }], synonyms: ["statesmanship", "foreign relations"] },
      { word: "globalisation", bn: "বিশ্বায়ন", pos: "Noun", forms: [{ label: "adj", word: "global" }, { label: "verb", word: "globalise" }] },
      { word: "international", bn: "আন্তর্জাতিক", pos: "Adjective", forms: [{ label: "adv", word: "internationally" }], synonyms: ["global", "worldwide"], antonyms: ["national", "local"] },
      { word: "lingua franca", bn: "ভিন্ন ভাষাভাষীদের মধ্যে যোগাযোগের সাধারণ ভাষা", pos: "Phrase", synonyms: ["common language"] },
      { word: "proficiency", bn: "দক্ষতা", pos: "Noun", forms: [{ label: "adj", word: "proficient" }], synonyms: ["skill", "competence"], antonyms: ["incompetence"] },
      { word: "storehouse", bn: "ভান্ডার", pos: "Noun", synonyms: ["treasury", "store"] },
      { word: "undeniable", bn: "অনস্বীকার্য", pos: "Adjective", forms: [{ label: "verb", word: "deny" }, { label: "adv", word: "undeniably" }], synonyms: ["certain", "indisputable"], antonyms: ["doubtful", "questionable"] },
    ],
    body: [
      {
        type: "para",
        text: "English is an international language. It is the mother tongue of many nations and the second or official language of many others, and people of different countries use it as a lingua franca to communicate with one another. So the importance of learning English is undeniable in the modern world. English is the storehouse of knowledge. Most of the best books on science, technology, medicine, engineering and literature are written in English, and most of the information on the internet is also in this language. So higher education is almost impossible without a good knowledge of English. Those who want to study abroad have to prove their proficiency in it by taking tests like IELTS or TOEFL. English also opens the door to good jobs. In this age of globalisation, multinational companies, banks, NGOs and many government offices look for candidates who can speak and write English well, and in competitive examinations English carries a large number of marks. Trade, commerce, diplomacy and international relations are carried on mainly in English. For Bangladesh, the importance of English is even greater. Lakhs of our people work abroad, and they can earn more if they know English. Our garment industry and other exporters must communicate with foreign buyers in English, and our freelancers earn foreign currency by working online for clients all over the world. Besides, English helps us to know the world and to present our own culture before it. To learn English well, we must practise the four skills of listening, speaking, reading and writing regularly, instead of memorising answers. We should read English newspapers and books, listen to English news and speak English with our friends without fear of making mistakes. In fact, there is no alternative to learning English if we want to keep pace with the modern world.",
      },
    ],
  },
  {
    id: "air-pollution",
    title: "Air Pollution",
    prompt:
      "Write a paragraph on 'Air Pollution' by answering the following questions.",
    hints: [
      "What is air pollution?",
      "What are the causes of air pollution?",
      "What are its bad effects on man and nature?",
      "What is the condition of air in our cities?",
      "How can air pollution be prevented?",
    ],
    vocab: [
      { word: "asthma", bn: "হাঁপানি", pos: "Noun", forms: [{ label: "adj", word: "asthmatic" }] },
      { word: "contaminate", bn: "দূষিত করা", pos: "Verb", past: "contaminated", pastParticiple: "contaminated", forms: [{ label: "noun", word: "contamination" }], synonyms: ["pollute", "poison"], antonyms: ["purify", "clean"] },
      { word: "detrimental", bn: "ক্ষতিকর", pos: "Adjective", forms: [{ label: "noun", word: "detriment" }], synonyms: ["harmful", "damaging"], antonyms: ["beneficial", "useful"] },
      { word: "emit", bn: "নির্গত করা", pos: "Verb", past: "emitted", pastParticiple: "emitted", forms: [{ label: "noun", word: "emission" }], synonyms: ["discharge", "give off"], antonyms: ["absorb"] },
      { word: "fume", bn: "ধোঁয়া, বাষ্প", pos: "Noun", synonyms: ["smoke", "gas"] },
      { word: "inhale", bn: "শ্বাস টেনে নেওয়া", pos: "Verb", past: "inhaled", pastParticiple: "inhaled", forms: [{ label: "noun", word: "inhalation" }], synonyms: ["breathe in"], antonyms: ["exhale"] },
      { word: "lethal", bn: "প্রাণঘাতী", pos: "Adjective", synonyms: ["deadly", "fatal"], antonyms: ["harmless", "safe"] },
      { word: "suspended particles", bn: "বাতাসে ভাসমান সূক্ষ্ম কণা", pos: "Phrase", synonyms: ["dust particles"] },
      { word: "unplanned", bn: "অপরিকল্পিত", pos: "Adjective", forms: [{ label: "verb", word: "plan" }], synonyms: ["haphazard", "unorganised"], antonyms: ["planned", "organised"] },
    ],
    body: [
      {
        type: "para",
        text: "Air is the most important element of our environment, because we cannot live even for a few minutes without it. Air pollution means the contamination of the air by harmful gases, smoke, dust and other substances that make it unfit for breathing. Air pollution has now become a great threat to our existence. There are many causes of it. Mills, factories and brick kilns emit huge amounts of smoke and poisonous gases such as carbon dioxide, carbon monoxide and sulphur dioxide into the air. Old and unfit motor vehicles release black smoke all day long. The burning of wood, coal, garbage and plastic, unplanned construction work and the dust of broken roads also pollute the air. Besides, the cutting down of trees reduces the amount of oxygen in the atmosphere. The effects of air pollution are highly detrimental. When we inhale polluted air, we suffer from asthma, bronchitis, lung cancer, heart diseases and many other ailments, and children and old people suffer the most. Polluted air causes acid rain, which damages crops, forests and buildings. It also increases the amount of greenhouse gases, which raise the temperature of the earth and change the climate. In recent years Dhaka has often been listed among the cities with the worst air in the world, especially in the dry winter months, when a thick layer of dust and smoke hangs over the city. Air pollution can be prevented if we take the right steps. Brick kilns and factories should be built far from residential areas and made to use modern technology. Unfit vehicles must be banned, construction sites should be covered and roads should be sprinkled with water. We should plant more trees and stop burning waste in the open. Above all, the government and the people must work together to keep our air pure, for pure air is the first condition of a healthy life.",
      },
    ],
  },
  {
    id: "water-pollution",
    title: "Water Pollution",
    prompt:
      "Write a paragraph on 'Water Pollution' by answering the following questions.",
    hints: [
      "What is water pollution?",
      "How is water polluted?",
      "What are the effects of water pollution?",
      "What is the condition of our rivers?",
      "How can water pollution be prevented?",
    ],
    vocab: [
      { word: "aquatic", bn: "জলজ", pos: "Adjective", synonyms: ["water-living", "marine"], antonyms: ["terrestrial"] },
      { word: "arsenic", bn: "আর্সেনিক (বিষাক্ত রাসায়নিক পদার্থ)", pos: "Noun" },
      { word: "discharge", bn: "নিঃসরণ করা, ফেলা", pos: "Verb", past: "discharged", pastParticiple: "discharged", forms: [{ label: "noun", word: "discharge" }], synonyms: ["release", "dump"], antonyms: ["absorb", "hold"] },
      { word: "effluent", bn: "কলকারখানার তরল বর্জ্য", pos: "Noun", synonyms: ["waste liquid", "sewage"] },
      { word: "encroach", bn: "অবৈধভাবে দখল করা", pos: "Verb", past: "encroached", pastParticiple: "encroached", forms: [{ label: "noun", word: "encroachment" }], synonyms: ["occupy", "intrude"] },
      { word: "sanitation", bn: "পয়ঃনিষ্কাশন ব্যবস্থা", pos: "Noun", forms: [{ label: "adj", word: "sanitary" }], synonyms: ["hygiene", "cleanliness"] },
      { word: "tannery", bn: "চামড়া প্রক্রিয়াজাতকরণ কারখানা", pos: "Noun" },
      { word: "untreated", bn: "অপরিশোধিত", pos: "Adjective", forms: [{ label: "verb", word: "treat" }, { label: "noun", word: "treatment" }], synonyms: ["raw", "unprocessed"], antonyms: ["treated", "purified"] },
      { word: "water-borne", bn: "পানিবাহিত", pos: "Adjective", synonyms: ["carried by water"] },
    ],
    body: [
      {
        type: "para",
        text: "There is a saying that water is life, because no living being can survive without it. But this life-giving water is being polluted day by day. Water pollution means the contamination of the water of rivers, canals, ponds, lakes, the sea and even underground sources by harmful substances, which makes it unfit for use. Water is polluted in many ways. Mills, factories and tanneries discharge their untreated effluents directly into the rivers. Farmers use chemical fertilisers and insecticides in their fields, and rain washes them into the nearby water bodies. People throw household garbage, polythene and dead animals into rivers and ponds, and in many places the sewage lines and open latrines fall straight into the water. Oil from ships, launches and boats also spreads over the water. Besides, the underground water of many districts of our country is contaminated with arsenic. The effects of water pollution are very harmful. When people drink polluted water, they suffer from water-borne diseases like cholera, diarrhoea, typhoid, dysentery and jaundice, and arsenic causes skin diseases and even cancer. Fish and other aquatic animals die in large numbers, and the balance of nature is disturbed. The rivers around Dhaka, especially the Buriganga, have become so polluted that their water looks black and smells foul, and fish can hardly live in it. Water pollution can be prevented through proper measures. Every factory should be made to set up an effluent treatment plant, and the owners who break the law should be punished. People should stop throwing waste into water bodies, and a proper sanitation system must be built everywhere. Farmers should be encouraged to use organic fertilisers, and rivers must be freed from illegal encroachment. Above all, people should be made aware, because only a united effort can save our water and our life.",
      },
    ],
  },
  {
    id: "a-tea-stall",
    title: "A Tea Stall",
    prompt:
      "Write a paragraph on 'A Tea Stall' by answering the following questions.",
    hints: [
      "What is a tea stall and where is it found?",
      "What does it look like?",
      "What things are sold there?",
      "Who are its customers and what do they talk about?",
      "What are its good and bad sides?",
    ],
    vocab: [
      { word: "customer", bn: "খদ্দের, ক্রেতা", pos: "Noun", synonyms: ["buyer", "client"], antonyms: ["seller"] },
      { word: "gossip", bn: "গালগল্প, আড্ডা", pos: "Noun", forms: [{ label: "verb", word: "gossip (gossiped)" }], synonyms: ["chit-chat", "idle talk"] },
      { word: "heated", bn: "উত্তপ্ত", pos: "Adjective", forms: [{ label: "verb", word: "heat" }], synonyms: ["fiery", "angry"], antonyms: ["calm", "cool"] },
      { word: "idler", bn: "অলস ব্যক্তি", pos: "Noun", forms: [{ label: "adj", word: "idle" }, { label: "noun", word: "idleness" }], synonyms: ["loafer", "sluggard"], antonyms: ["worker"] },
      { word: "kettle", bn: "কেতলি", pos: "Noun" },
      { word: "rendezvous", bn: "মিলনস্থল, আড্ডাস্থল", pos: "Noun", synonyms: ["meeting place", "gathering place"] },
      { word: "shabby", bn: "জীর্ণ, মলিন", pos: "Adjective", synonyms: ["ragged", "worn out"], antonyms: ["smart", "neat"] },
      { word: "unhygienic", bn: "অস্বাস্থ্যকর", pos: "Adjective", forms: [{ label: "noun", word: "hygiene" }], synonyms: ["unclean", "insanitary"], antonyms: ["hygienic", "clean"] },
    ],
    body: [
      {
        type: "para",
        text: "A tea stall is a small shop where tea and some light refreshments are sold. It is a common sight everywhere in Bangladesh. It is found by the roadside, at the bus stand, at the railway station, near the launch ghat, in the bazaar and even at the corner of a remote village. A tea stall is generally a small, shabby hut with a tin roof and a bamboo fence. There are one or two wooden benches in front of it and a small table inside. A kettle is always boiling on a clay or gas stove, and a few glass jars filled with biscuits, bread, cakes and chanachur are arranged on a shelf. Bananas hang from the roof, and betel leaves and cigarettes are also sold there. The owner of the stall is often helped by a young boy who washes the cups and serves tea to the customers. A tea stall remains busy from early morning till late at night. People of all classes, such as farmers, day labourers, rickshaw pullers, students, shopkeepers and office clerks, come there to have a cup of tea. It is not only a place for drinking tea but also a rendezvous for gossip. The customers talk about politics, the price of goods, sports, local news and many other things, and sometimes they get into heated arguments. A television or a radio often attracts more customers to watch a cricket match or listen to the news. A tea stall has both good and bad sides. It gives people a place to rest and refresh themselves, spread news and make friends, and it provides a livelihood for many poor people. On the other hand, it is often dirty and unhygienic, and some idlers waste their valuable time there doing nothing. Still, the tea stall remains an inseparable part of our social life.",
      },
    ],
  },
  {
    id: "a-rickshaw-puller",
    title: "A Rickshaw Puller",
    prompt:
      "Write a paragraph on 'A Rickshaw Puller' by answering the following questions.",
    hints: [
      "Who is a rickshaw puller?",
      "Where does he come from and where does he live?",
      "How does he spend his day?",
      "What problems does he face?",
      "What should be done to improve his life?",
    ],
    vocab: [
      { word: "exhausted", bn: "ক্লান্ত, অবসন্ন", pos: "Adjective", forms: [{ label: "verb", word: "exhaust" }, { label: "noun", word: "exhaustion" }], synonyms: ["tired", "worn out"], antonyms: ["fresh", "energetic"] },
      { word: "hand to mouth", bn: "দিন আনে দিন খায় অবস্থা", pos: "Phrase", synonyms: ["in poverty", "barely surviving"] },
      { word: "harass", bn: "হয়রানি করা", pos: "Verb", past: "harassed", pastParticiple: "harassed", forms: [{ label: "noun", word: "harassment" }], synonyms: ["trouble", "annoy"], antonyms: ["help", "comfort"] },
      { word: "illiterate", bn: "নিরক্ষর", pos: "Adjective", forms: [{ label: "noun", word: "illiteracy" }], synonyms: ["uneducated"], antonyms: ["literate", "educated"] },
      { word: "passenger", bn: "যাত্রী", pos: "Noun", synonyms: ["rider", "traveller"] },
      { word: "rent", bn: "ভাড়া", pos: "Noun", forms: [{ label: "verb", word: "rent (rented)" }, { label: "noun", word: "rental" }], synonyms: ["hire charge", "fee"] },
      { word: "scorching", bn: "প্রচণ্ড গরম", pos: "Adjective", forms: [{ label: "verb", word: "scorch" }], synonyms: ["burning", "blazing"], antonyms: ["cool", "chilly"] },
      { word: "slum", bn: "বস্তি", pos: "Noun", synonyms: ["shanty town"] },
      { word: "sympathetic", bn: "সহানুভূতিশীল", pos: "Adjective", forms: [{ label: "noun", word: "sympathy" }, { label: "verb", word: "sympathise" }], synonyms: ["kind", "compassionate"], antonyms: ["cruel", "unkind"] },
    ],
    body: [
      {
        type: "para",
        text: "A rickshaw puller is a poor man who earns his livelihood by carrying passengers in a rickshaw. The rickshaw is one of the most popular vehicles in Bangladesh, and lakhs of people depend on it for their living. Most rickshaw pullers come to the towns from the villages, where they cannot find any work because they have no land of their own. They are generally illiterate and have no other skill. In the city they live in dirty slums or in the garage of the rickshaw owner, while their families often remain in the village. Most of them do not own a rickshaw; they hire one from the owner and have to pay a fixed rent every day. A rickshaw puller begins his work early in the morning and continues till late at night. He pulls his rickshaw in the scorching heat of summer, in heavy rain and in the biting cold of winter. He carries all kinds of passengers, such as students, office-goers, shoppers and patients, to their destinations. His work is very hard, and by the end of the day he becomes quite exhausted. Yet his income is very poor. After paying the rent, he can hardly maintain his family, and so he lives from hand to mouth. He cannot send his children to school or give his family nutritious food. Sometimes passengers quarrel with him over the fare, and the traffic police and local musclemen often harass him. As he works hard without proper rest and food, he falls ill easily and grows old before time. When he becomes sick, his earning stops and his family starves. We should be sympathetic to the rickshaw pullers and pay them their proper fare. The government should give them loans on easy terms to buy their own rickshaws and arrange free medical treatment and education for their children, so that they can lead a better life.",
      },
    ],
  },
  {
    id: "a-winter-morning",
    title: "A Winter Morning",
    prompt:
      "Write a paragraph on 'A Winter Morning' by answering the following questions.",
    hints: [
      "What does a winter morning look like?",
      "How do people of different classes pass it?",
      "What special foods are made on a winter morning?",
      "How do the poor suffer?",
      "How do you enjoy a winter morning?",
    ],
    vocab: [
      { word: "bask", bn: "রোদ পোহানো", pos: "Verb", past: "basked", pastParticiple: "basked", synonyms: ["sun oneself", "warm oneself"] },
      { word: "date juice", bn: "খেজুরের রস", pos: "Phrase" },
      { word: "dew", bn: "শিশির", pos: "Noun", forms: [{ label: "adj", word: "dewy" }], synonyms: ["dewdrop"] },
      { word: "fog", bn: "কুয়াশা", pos: "Noun", forms: [{ label: "adj", word: "foggy" }], synonyms: ["mist", "haze"] },
      { word: "lazy", bn: "অলস", pos: "Adjective", forms: [{ label: "noun", word: "laziness" }, { label: "adv", word: "lazily" }], synonyms: ["idle", "sluggish"], antonyms: ["active", "energetic"] },
      { word: "shiver", bn: "শীতে কাঁপা", pos: "Verb", past: "shivered", pastParticiple: "shivered", forms: [{ label: "noun", word: "shiver" }], synonyms: ["tremble", "shake"] },
      { word: "shroud", bn: "ঢেকে ফেলা", pos: "Verb", past: "shrouded", pastParticiple: "shrouded", forms: [{ label: "noun", word: "shroud" }], synonyms: ["cover", "veil"], antonyms: ["reveal", "uncover"] },
      { word: "warm clothes", bn: "শীতবস্ত্র", pos: "Phrase", synonyms: ["woollens"] },
    ],
    body: [
      {
        type: "para",
        text: "Winter is the coldest season in Bangladesh, and a winter morning has a charm of its own. On a winter morning the whole nature remains shrouded in a thick fog, and nothing can be seen even a few yards away. The sun rises late and looks pale and weak behind the mist. Dewdrops fall on the grass and the leaves of the trees and shine like pearls in the soft rays of the sun. A cold wind blows, and the trees look dull and lifeless as they shed their leaves. People do not like to leave their beds early; they feel lazy and prefer to stay under their warm quilts. The rich people get up late, wear warm clothes and enjoy hot tea and coffee. But the farmers and day labourers cannot enjoy this comfort. They have to go out to the fields and to their work early in the morning, shivering in the cold. Village boys and girls and old men make a fire with straw and dry leaves and sit round it to warm themselves. Later they sit in the sun and bask in its gentle warmth. A winter morning in the village is also the season of delicious food. The date juice collectors, called gachhis, bring down the pots of fresh date juice from the trees, and housewives make various kinds of pithas and payesh with the new rice and molasses. Children eagerly wait to eat them. On the other hand, the poor people suffer greatly on a winter morning. They have no warm clothes, so they shiver in the biting cold, and many of them, especially children and old people, fall ill with cold and pneumonia. The rich should come forward to help them with warm clothes. I enjoy a winter morning very much, sitting in the sun with a plate of hot pitha, and to me it is the most pleasant time of the year.",
      },
    ],
  },
  {
    id: "the-life-of-a-farmer",
    title: "The Life of a Farmer",
    prompt:
      "Write a paragraph on 'The Life of a Farmer' by answering the following questions.",
    hints: [
      "Who is a farmer and why is he important?",
      "How does he spend his day?",
      "What problems does he face?",
      "What is his economic condition?",
      "How can his condition be improved?",
    ],
    vocab: [
      { word: "backbone", bn: "মেরুদণ্ড, প্রধান অবলম্বন", pos: "Noun", synonyms: ["mainstay", "pillar"] },
      { word: "cultivate", bn: "চাষ করা", pos: "Verb", past: "cultivated", pastParticiple: "cultivated", forms: [{ label: "noun", word: "cultivation" }, { label: "noun", word: "cultivator" }], synonyms: ["till", "farm"] },
      { word: "drought", bn: "খরা", pos: "Noun", synonyms: ["dry spell"], antonyms: ["flood"] },
      { word: "fair price", bn: "ন্যায্য মূল্য", pos: "Phrase", synonyms: ["proper price"] },
      { word: "harvest", bn: "ফসল কাটা", pos: "Verb", past: "harvested", pastParticiple: "harvested", forms: [{ label: "noun", word: "harvest" }], synonyms: ["reap", "gather"], antonyms: ["sow", "plant"] },
      { word: "irrigation", bn: "সেচ", pos: "Noun", forms: [{ label: "verb", word: "irrigate" }], synonyms: ["watering"] },
      { word: "middleman", bn: "মধ্যস্বত্বভোগী, দালাল", pos: "Noun", synonyms: ["broker", "agent"] },
      { word: "moneylender", bn: "মহাজন, সুদখোর", pos: "Noun", synonyms: ["usurer"] },
      { word: "toil", bn: "কঠোর পরিশ্রম করা", pos: "Verb", past: "toiled", pastParticiple: "toiled", forms: [{ label: "noun", word: "toil" }], synonyms: ["labour", "work hard"], antonyms: ["rest", "idle"] },
    ],
    body: [
      {
        type: "para",
        text: "Bangladesh is an agricultural country, and most of her people live in villages and depend on agriculture. A farmer is a person who cultivates land and grows crops. He is called the backbone of our economy, because he produces the food we eat and many raw materials for our industries, such as jute, sugarcane and cotton. Yet the life of a farmer is full of hardship. He gets up very early in the morning, takes a little stale rice or panta bhat and goes to the field with his plough and cattle or, nowadays, with a power tiller. He toils in the field from morning till evening in the scorching sun and in heavy rain. His wife or child brings him his midday meal in the field. After a hard day's work he returns home in the evening, tired and exhausted. He ploughs the land, sows seeds, plants seedlings, weeds the field, gives water and at last harvests the crops. But he faces many problems. Most of our farmers are poor and have very little land, and many of them cultivate other people's land as sharecroppers. They do not get good seeds, fertilisers and irrigation facilities at the right time and at a fair price. Natural calamities like floods, droughts, cyclones and river erosion often destroy their crops. To meet their needs, they borrow money from moneylenders at a high rate of interest, and when they sell their crops, the middlemen take most of the profit. As a result, the farmer who feeds the nation often goes without proper food, clothes, education and medical treatment. The condition of the farmer must be improved. The government should give him loans on easy terms, supply him with seeds, fertilisers and modern machines at a low price and ensure a fair price for his crops. If the farmer is happy, the country will be prosperous.",
      },
    ],
  },
  {
    id: "a-village-fair",
    title: "A Village Fair",
    prompt:
      "Write a paragraph on 'A Village Fair' by answering the following questions.",
    hints: [
      "What is a village fair and when is it held?",
      "Where is it held?",
      "What things are sold there?",
      "What kinds of amusements are there?",
      "What is the importance of a village fair?",
    ],
    vocab: [
      { word: "amusement", bn: "আমোদ-প্রমোদ, বিনোদন", pos: "Noun", forms: [{ label: "verb", word: "amuse" }, { label: "adj", word: "amusing" }], synonyms: ["entertainment", "fun"], antonyms: ["boredom"] },
      { word: "cane", bn: "বেত", pos: "Noun" },
      { word: "cottage industry", bn: "কুটির শিল্প", pos: "Phrase", synonyms: ["small-scale industry"] },
      { word: "earthenware", bn: "মাটির তৈরি জিনিসপত্র", pos: "Noun", synonyms: ["pottery", "clay pots"] },
      { word: "fair", bn: "মেলা", pos: "Noun", synonyms: ["mela", "festival"] },
      { word: "festive", bn: "উৎসবমুখর", pos: "Adjective", forms: [{ label: "noun", word: "festival" }, { label: "noun", word: "festivity" }], synonyms: ["joyful", "merry"], antonyms: ["gloomy", "dull"] },
      { word: "merry-go-round", bn: "নাগরদোলা", pos: "Noun", synonyms: ["whirligig"] },
      { word: "puppet show", bn: "পুতুল নাচ", pos: "Phrase" },
    ],
    body: [
      {
        type: "para",
        text: "A village fair is a large gathering of people in a village where various kinds of goods are bought and sold and different kinds of amusements are arranged. It is a part and parcel of our rural life. A village fair is usually held on some religious or social occasions, such as Pahela Baishakh, Chaitra Sankranti, Eid, Durga Puja or at the end of the harvest. It generally sits in an open field, on the bank of a river or under a big banyan tree, and it may last for a day, a week or even a month. A village fair presents a festive look. Hundreds of temporary stalls are set up in rows with bamboo and cloth. Traders and craftsmen come from far and near with their goods, and men, women and children from the neighbouring villages flock there in their best clothes. Almost everything needed for village life is found at the fair. There are earthenware pots, clay toys, dolls, wooden and cane furniture, bamboo baskets, mats, bangles, ribbons, cosmetics, cheap ornaments and household utensils. Sweetmeat shops sell jilapi, batasha, murki, sandesh and other delicious foods. There are also many kinds of amusements. Children enjoy themselves riding on the merry-go-round, while the elders enjoy the puppet show, jatra, magic show, circus and folk songs. The whole fair remains noisy with the sound of flutes, drums and the cries of hawkers. A village fair is very important. It gives the village people the chance to buy and sell their goods, and it keeps our cottage industries and folk arts alive. It also brings the people of different villages close together and gives them a break from their dull routine. However, gambling and other bad practices should not be allowed at the fair. A village fair truly reflects the rich culture and tradition of our country.",
      },
    ],
  },
  {
    id: "uses-and-abuses-of-mobile-phone",
    title: "Uses and Abuses of Mobile Phone",
    prompt:
      "Write a paragraph on 'Uses and Abuses of Mobile Phone' by answering the following questions.",
    hints: [
      "What is a mobile phone?",
      "What are its uses?",
      "How is it useful in education, business and emergencies?",
      "How is it misused?",
      "How can we use it properly?",
    ],
    vocab: [
      { word: "addiction", bn: "আসক্তি, নেশা", pos: "Noun", forms: [{ label: "adj", word: "addicted" }, { label: "verb", word: "addict" }], synonyms: ["dependence", "obsession"], antonyms: ["freedom"] },
      { word: "blessing", bn: "আশীর্বাদ", pos: "Noun", forms: [{ label: "verb", word: "bless" }], synonyms: ["boon", "gift"], antonyms: ["curse", "bane"] },
      { word: "curse", bn: "অভিশাপ", pos: "Noun", forms: [{ label: "adj", word: "cursed" }], synonyms: ["bane", "evil"], antonyms: ["blessing", "boon"] },
      { word: "emergency", bn: "জরুরি অবস্থা", pos: "Noun", forms: [{ label: "verb", word: "emerge" }], synonyms: ["crisis", "danger"] },
      { word: "handy", bn: "সহজে বহনযোগ্য, সুবিধাজনক", pos: "Adjective", synonyms: ["convenient", "portable"], antonyms: ["awkward", "inconvenient"] },
      { word: "judiciously", bn: "বিচক্ষণতার সাথে", pos: "Adverb", forms: [{ label: "adj", word: "judicious" }], synonyms: ["wisely", "sensibly"], antonyms: ["foolishly", "unwisely"] },
      { word: "misuse", bn: "অপব্যবহার করা", pos: "Verb", past: "misused", pastParticiple: "misused", forms: [{ label: "noun", word: "misuse" }], synonyms: ["abuse", "exploit"], antonyms: ["use properly"] },
      { word: "radiation", bn: "তেজস্ক্রিয়তা, বিকিরণ", pos: "Noun", forms: [{ label: "verb", word: "radiate" }] },
      { word: "transaction", bn: "লেনদেন", pos: "Noun", forms: [{ label: "verb", word: "transact" }], synonyms: ["dealing", "exchange"] },
    ],
    body: [
      {
        type: "para",
        text: "The mobile phone is one of the most wonderful inventions of modern science. It is a small, handy wireless device that we can carry anywhere and use to talk to anyone at any time. Within a short time it has become a part of our daily life, and today almost every family in Bangladesh has at least one mobile phone. Its uses are countless. With it we can easily keep in touch with our relatives and friends at home and abroad. A smartphone does the work of a camera, a radio, a calculator, a watch, an alarm clock, a torch and a small computer. We can browse the internet, send emails, read newspapers and watch the news on it. Students can join online classes, get their examination results and learn from educational videos. Businessmen can run their business, and people can send and receive money, pay bills and buy tickets through mobile banking without going out of the house. In an emergency such as an accident, a fire or a sudden illness, it helps us call the police, the fire service or the ambulance at once. But the mobile phone is also being misused. Many young people waste their valuable time playing games, chatting and watching useless videos on it, and some of them become addicted to it and neglect their studies. Some bad people use it to disturb others, spread rumours, blackmail people and commit other crimes. Using it while driving causes accidents, and its excessive use harms our eyes and brain and causes sleeplessness, while some believe its radiation may be harmful too. Besides, its ringing in class, in the mosque or at meetings disturbs others. In fact, a mobile phone can be both a blessing and a curse. It depends on how we use it. So we should use it judiciously and only when it is necessary.",
      },
    ],
  },
  {
    id: "a-school-library",
    title: "A School Library",
    prompt:
      "Write a paragraph on 'A School Library' by answering the following questions.",
    hints: [
      "What is a school library?",
      "What does your school library look like?",
      "What kinds of books and papers are there?",
      "What are its rules?",
      "How does it help the students?",
    ],
    vocab: [
      { word: "almirah", bn: "আলমারি", pos: "Noun", synonyms: ["cupboard", "bookshelf"] },
      { word: "borrow", bn: "ধার নেওয়া", pos: "Verb", past: "borrowed", pastParticiple: "borrowed", forms: [{ label: "noun", word: "borrower" }], synonyms: ["take on loan"], antonyms: ["lend", "return"] },
      { word: "encyclopaedia", bn: "বিশ্বকোষ", pos: "Noun", forms: [{ label: "adj", word: "encyclopaedic" }] },
      { word: "horizon", bn: "দিগন্ত, পরিধি", pos: "Noun", forms: [{ label: "adj", word: "horizontal" }], synonyms: ["range", "scope"] },
      { word: "librarian", bn: "গ্রন্থাগারিক", pos: "Noun", forms: [{ label: "noun", word: "library" }] },
      { word: "periodical", bn: "সাময়িকী, পত্রিকা", pos: "Noun", forms: [{ label: "noun", word: "period" }, { label: "adv", word: "periodically" }], synonyms: ["magazine", "journal"] },
      { word: "reference book", bn: "সহায়ক গ্রন্থ", pos: "Phrase" },
      { word: "silence", bn: "নীরবতা", pos: "Noun", forms: [{ label: "adj", word: "silent" }, { label: "adv", word: "silently" }], synonyms: ["quietness", "calm"], antonyms: ["noise"] },
      { word: "treasure-house", bn: "রত্নভান্ডার", pos: "Noun", synonyms: ["storehouse", "treasury"] },
    ],
    body: [
      {
        type: "para",
        text: "A library is a place where books, newspapers and periodicals are kept for reading and borrowing. A school library is a library that belongs to a school and is meant for its students and teachers. It is rightly called the treasure-house of knowledge. Every good school has a library, and our school also has a rich one. It is housed in a large, airy room on the first floor of the main building. There are many almirahs and shelves in it, full of books arranged neatly according to their subjects. It has about five thousand books on different subjects, such as literature, history, science, religion, geography, biography, travel and sports. There are also dictionaries, encyclopaedias, reference books, story books and books of poems. Some daily newspapers in Bangla and English and a few weekly and monthly magazines are kept on a big table in the middle of the room, with chairs around it. A librarian and an assistant look after the library. The library has some rules which every reader must follow. It remains open during school hours. Students must keep silence inside it, and they must not tear pages or write anything in the books. A student can borrow one book at a time by showing his library card and must return it within a week; if he loses or damages a book, he has to pay for it. A school library is very useful for the students. Textbooks alone cannot give them complete knowledge, but in the library they can read many books of their own choice and widen the horizon of their knowledge. The library helps them prepare their lessons, develops their habit of reading and gives them pleasure in their leisure. It also helps the poor students who cannot buy books. Therefore, every school should have a well-equipped library, and every student should make good use of it.",
      },
    ],
  },
  {
    id: "your-aim-in-life",
    title: "Your Aim in Life",
    prompt:
      "Write a paragraph on 'Your Aim in Life' by answering the following questions.",
    hints: [
      "Why should everyone have an aim in life?",
      "What is your aim in life?",
      "Why have you chosen it?",
      "How will you prepare yourself for it?",
      "How will you serve the people?",
    ],
    vocab: [
      { word: "aimless", bn: "লক্ষ্যহীন", pos: "Adjective", forms: [{ label: "noun", word: "aim" }], synonyms: ["purposeless", "directionless"], antonyms: ["purposeful", "determined"] },
      { word: "compass", bn: "কম্পাস, দিক নির্ণয় যন্ত্র", pos: "Noun" },
      { word: "diligent", bn: "পরিশ্রমী, অধ্যবসায়ী", pos: "Adjective", forms: [{ label: "noun", word: "diligence" }, { label: "adv", word: "diligently" }], synonyms: ["hardworking", "industrious"], antonyms: ["lazy", "idle"] },
      { word: "ideal", bn: "আদর্শ", pos: "Noun", forms: [{ label: "noun", word: "idealism" }, { label: "verb", word: "idealise" }], synonyms: ["model", "example"] },
      { word: "noble", bn: "মহৎ", pos: "Adjective", forms: [{ label: "noun", word: "nobility" }, { label: "adv", word: "nobly" }], synonyms: ["great", "honourable"], antonyms: ["mean", "base"] },
      { word: "remote", bn: "প্রত্যন্ত, দূরবর্তী", pos: "Adjective", forms: [{ label: "adv", word: "remotely" }], synonyms: ["distant", "far-off"], antonyms: ["near", "close"] },
      { word: "rudderless", bn: "হালবিহীন", pos: "Adjective", forms: [{ label: "noun", word: "rudder" }], synonyms: ["directionless"] },
      { word: "suffering", bn: "দুর্ভোগ, কষ্ট", pos: "Noun", forms: [{ label: "verb", word: "suffer" }], synonyms: ["pain", "misery"], antonyms: ["comfort", "relief"] },
      { word: "treatment", bn: "চিকিৎসা", pos: "Noun", forms: [{ label: "verb", word: "treat" }], synonyms: ["cure", "remedy"] },
    ],
    body: [
      {
        type: "para",
        text: "Aim in life means the goal that a person sets for himself and wants to reach in future. Everyone should have an aim in life, because a man without an aim is like a ship without a rudder or a compass, which drifts on the sea and never reaches the shore. An aimless man wastes his energy and time and can never achieve anything great. So a student should fix his aim early and work hard to achieve it. People choose different aims according to their taste, talent and circumstances. Some want to be engineers, some teachers, some businessmen and some politicians. My aim in life is to become a doctor. There are several reasons behind my choice. I was born and brought up in a village, and I have seen how the poor village people suffer from diseases without proper treatment. There are not enough doctors in the villages, and many people die for want of timely treatment. The poor cannot afford to go to the town and pay a high fee. I have also seen quack doctors cheating simple villagers. All this has touched my heart deeply, and I have made up my mind to become a doctor so that I can stand by these helpless people. To fulfil my aim, I am studying science with great care and trying to get good results in the SSC and HSC examinations. After that I shall try my best to get admitted into a medical college and study diligently. After becoming a doctor, I shall not go abroad or run after money like many others. I shall set up a small clinic in my village and treat the poor patients free of cost. I shall also make the villagers aware of health, nutrition and cleanliness. I know that my aim is not an easy one, but I believe that hard work and the blessings of my parents and teachers will help me achieve it.",
      },
    ],
  },
  {
    id: "climate-change",
    title: "Climate Change",
    prompt:
      "Write a paragraph on 'Climate Change' by answering the following questions.",
    hints: [
      "What is climate change?",
      "What are its causes?",
      "What are its effects on the world?",
      "How does it affect Bangladesh?",
      "What should be done to face it?",
    ],
    vocab: [
      { word: "adapt", bn: "খাপ খাওয়ানো", pos: "Verb", past: "adapted", pastParticiple: "adapted", forms: [{ label: "noun", word: "adaptation" }, { label: "adj", word: "adaptable" }], synonyms: ["adjust", "accustom"] },
      { word: "catastrophe", bn: "মহাবিপর্যয়", pos: "Noun", forms: [{ label: "adj", word: "catastrophic" }], synonyms: ["disaster", "calamity"], antonyms: ["blessing", "boon"] },
      { word: "emission", bn: "নির্গমন", pos: "Noun", forms: [{ label: "verb", word: "emit" }], synonyms: ["discharge", "release"], antonyms: ["absorption"] },
      { word: "fossil fuel", bn: "জীবাশ্ম জ্বালানি", pos: "Phrase", synonyms: ["coal, oil and gas"] },
      { word: "inundate", bn: "প্লাবিত করা", pos: "Verb", past: "inundated", pastParticiple: "inundated", forms: [{ label: "noun", word: "inundation" }], synonyms: ["flood", "submerge"] },
      { word: "renewable", bn: "নবায়নযোগ্য", pos: "Adjective", forms: [{ label: "verb", word: "renew" }], synonyms: ["sustainable"], antonyms: ["non-renewable", "exhaustible"] },
      { word: "salinity", bn: "লবণাক্ততা", pos: "Noun", forms: [{ label: "adj", word: "saline" }], synonyms: ["saltiness"] },
      { word: "unpredictable", bn: "অনিশ্চিত, আগে বলা যায় না এমন", pos: "Adjective", forms: [{ label: "verb", word: "predict" }, { label: "noun", word: "prediction" }], synonyms: ["uncertain", "irregular"], antonyms: ["predictable", "regular"] },
      { word: "vulnerable", bn: "ঝুঁকিপূর্ণ, অরক্ষিত", pos: "Adjective", forms: [{ label: "noun", word: "vulnerability" }], synonyms: ["exposed", "at risk"], antonyms: ["safe", "secure"] },
    ],
    body: [
      {
        type: "para",
        text: "Climate change means a long-term change in the average weather patterns of the earth, especially the rise in its temperature. It has become one of the greatest threats to the world today. Climate change is mainly caused by human activities. Mills, factories, power plants and vehicles burn huge amounts of fossil fuels like coal, oil and gas, and release carbon dioxide and other greenhouse gases into the air. These gases trap the heat of the sun and make the earth warmer. The large-scale cutting down of forests adds to the problem, because trees absorb carbon dioxide. The effects of climate change are already visible all over the world. The ice of the polar regions and the glaciers of the mountains is melting, and the sea level is rising. Heat waves, droughts, floods, wildfires and storms are becoming more frequent and more violent, and the seasons have become unpredictable. Many plants and animals are dying out, and food production is falling in many regions. Bangladesh is one of the most vulnerable countries to climate change, though she is responsible for very little of it. Being a low-lying delta, she faces the danger of losing a large part of her coastal land if the sea level rises by one metre, and millions of people may become climate refugees. Cyclones like Sidr, Aila, Amphan and Remal have already caused huge losses, and the salinity of water and soil in the coastal areas is increasing, which ruins crops and drinking water. Our six seasons are no longer clearly marked. To face this catastrophe, the developed countries must reduce their carbon emission and help the poor countries as they have promised. We should plant more trees, use renewable energy like solar power and learn to adapt to the changing climate. If the whole world does not act now, it will be too late to save our planet.",
      },
    ],
  },
  {
    id: "price-hike",
    title: "Price Hike",
    prompt:
      "Write a paragraph on 'Price Hike' by answering the following questions.",
    hints: [
      "What is price hike?",
      "What are its causes?",
      "Who suffer most from it?",
      "How does it affect our life?",
      "What should be done to control it?",
    ],
    vocab: [
      { word: "commodity", bn: "পণ্য", pos: "Noun", synonyms: ["goods", "product"] },
      { word: "essential", bn: "অপরিহার্য, নিত্যপ্রয়োজনীয়", pos: "Adjective", forms: [{ label: "noun", word: "essence" }, { label: "adv", word: "essentially" }], synonyms: ["necessary", "basic"], antonyms: ["unnecessary", "inessential"] },
      { word: "fixed income", bn: "নির্দিষ্ট আয়", pos: "Phrase" },
      { word: "hoard", bn: "মজুত করে রাখা", pos: "Verb", past: "hoarded", pastParticiple: "hoarded", forms: [{ label: "noun", word: "hoarding" }, { label: "noun", word: "hoarder" }], synonyms: ["stockpile", "store up"], antonyms: ["release", "distribute"] },
      { word: "make both ends meet", bn: "আয়-ব্যয়ের সংগতি রক্ষা করা", pos: "Phrase", synonyms: ["manage with one's income"] },
      { word: "monitor", bn: "তদারকি করা", pos: "Verb", past: "monitored", pastParticiple: "monitored", forms: [{ label: "noun", word: "monitoring" }], synonyms: ["supervise", "check"], antonyms: ["neglect", "ignore"] },
      { word: "skyrocket", bn: "আকাশচুম্বী হওয়া", pos: "Verb", past: "skyrocketed", pastParticiple: "skyrocketed", synonyms: ["soar", "shoot up"], antonyms: ["fall", "drop"] },
      { word: "syndicate", bn: "অসাধু ব্যবসায়ী চক্র, সিন্ডিকেট", pos: "Noun", synonyms: ["cartel", "ring"] },
      { word: "unscrupulous", bn: "অসাধু, নীতিহীন", pos: "Adjective", synonyms: ["dishonest", "corrupt"], antonyms: ["honest", "principled"] },
    ],
    body: [
      {
        type: "para",
        text: "Price hike means the sudden and unusual rise in the prices of goods, especially of daily necessities. It has become one of the most serious problems of our country. The prices of rice, pulses, edible oil, sugar, onions, vegetables, fish, eggs and medicine are increasing day by day, and sometimes they skyrocket overnight. There are many causes behind it. The main cause is the evil practice of some unscrupulous businessmen who form syndicates, hoard goods and create an artificial crisis in the market to make huge profits. The rapid growth of population makes the demand greater than the supply. Natural calamities like floods and cyclones reduce the production of crops. The rise in the prices of fuel and fertiliser increases the cost of production and transport, and the fall in the value of our money against the dollar makes imported goods costly. Besides, extortion on the roads, the chain of middlemen and the lack of proper market monitoring are also responsible. The sufferings caused by price hike are beyond description. The poor and the people with a fixed income suffer the most, because their income does not increase with the prices. Day labourers, rickshaw pullers, small service holders and pensioners cannot make both ends meet. They have to cut down on food, and their children suffer from malnutrition. Many of them cannot afford education and medical treatment, and some take to corruption to meet their needs. Price hike must be controlled at any cost. The government should monitor the markets regularly and punish the hoarders and syndicates severely. The production of essential commodities should be increased, and goods should be sold at a fair price to the poor through open market sales and ration cards. Extortion on the roads must be stopped. At the same time, businessmen should be honest and the people should avoid panic buying. Only then can people get some relief from this curse.",
      },
    ],
  },
  {
    id: "the-padma-bridge",
    title: "The Padma Bridge",
    prompt:
      "Write a paragraph on 'The Padma Bridge' by answering the following questions.",
    hints: [
      "What is the Padma Bridge and where is it?",
      "When was it opened?",
      "What are its main features?",
      "How has it changed the life of the people?",
      "What is its importance for the economy of Bangladesh?",
    ],
    vocab: [
      { word: "boost", bn: "বৃদ্ধি করা, চাঙা করা", pos: "Verb", past: "boosted", pastParticiple: "boosted", forms: [{ label: "noun", word: "boost" }], synonyms: ["increase", "raise"], antonyms: ["reduce", "lower"] },
      { word: "connectivity", bn: "সংযোগ ব্যবস্থা", pos: "Noun", forms: [{ label: "verb", word: "connect" }, { label: "noun", word: "connection" }], synonyms: ["link", "communication"] },
      { word: "construct", bn: "নির্মাণ করা", pos: "Verb", past: "constructed", pastParticiple: "constructed", forms: [{ label: "noun", word: "construction" }], synonyms: ["build", "erect"], antonyms: ["demolish", "destroy"] },
      { word: "ferry", bn: "ফেরি, খেয়া", pos: "Noun", synonyms: ["boat", "vessel"] },
      { word: "inaugurate", bn: "উদ্বোধন করা", pos: "Verb", past: "inaugurated", pastParticiple: "inaugurated", forms: [{ label: "noun", word: "inauguration" }], synonyms: ["open", "launch"], antonyms: ["close"] },
      { word: "landmark", bn: "যুগান্তকারী ঘটনা, স্মারক চিহ্ন", pos: "Noun", synonyms: ["milestone", "turning point"] },
      { word: "own fund", bn: "নিজস্ব অর্থায়ন", pos: "Phrase", synonyms: ["self-financing"] },
      { word: "tier", bn: "স্তর, তলা", pos: "Noun", synonyms: ["layer", "level"] },
      { word: "turbulent", bn: "খরস্রোতা, উত্তাল", pos: "Adjective", forms: [{ label: "noun", word: "turbulence" }], synonyms: ["rough", "stormy"], antonyms: ["calm", "still"] },
    ],
    body: [
      {
        type: "para",
        text: "The Padma Bridge is the longest bridge in Bangladesh and one of the greatest achievements in the history of the nation. It has been built over the turbulent river Padma, one of the most difficult rivers of the world to bridge. The bridge connects Mawa in Munshiganj with Janjira in Shariatpur and thus joins the capital with the south-western part of the country. It was opened to traffic on 25 June 2022. The Padma Bridge is a two-tier bridge made of steel and concrete. It is 6.15 kilometres long and about 18 metres wide. The upper tier carries a four-lane road for vehicles, and the lower tier carries a railway line, on which trains began to run in October 2023. The bridge stands on 42 huge pillars, and some of its piles have been driven more than a hundred metres deep into the riverbed. The most remarkable thing about the bridge is that Bangladesh built it with her own fund, at a cost of about 30,000 crore taka, after the World Bank and some other lenders withdrew from the project. This has raised the confidence and dignity of the nation before the world. Before the bridge was built, people of the south-western districts had to cross the river by ferries and launches, which often took many hours and even a whole day, and sometimes launches capsized in storms, taking many lives. Now they can cross the river in only a few minutes and reach Dhaka within a few hours. The bridge has opened up new possibilities for the economy. Farmers can send their vegetables and fish quickly to the capital, and new industries, hotels and markets are growing in the southern region. The ports of Mongla and Payra and the tourist spots of the Sundarbans and Kuakata have become easily reachable. Experts believe that the bridge will boost the country's GDP by more than one per cent. Indeed, the Padma Bridge is a landmark in the path of our development.",
      },
    ],
  },
  {
    id: "dengue-fever",
    title: "Dengue Fever",
    prompt:
      "Write a paragraph on 'Dengue Fever' by answering the following questions.",
    hints: [
      "What is dengue fever?",
      "How does it spread?",
      "What are its symptoms?",
      "What is the situation in Bangladesh?",
      "How can we prevent it and what should a patient do?",
    ],
    vocab: [
      { word: "breed", bn: "বংশবৃদ্ধি করা, জন্মানো", pos: "Verb", past: "bred", pastParticiple: "bred", forms: [{ label: "noun", word: "breeding" }], synonyms: ["multiply", "reproduce"] },
      { word: "fatal", bn: "মারাত্মক, প্রাণঘাতী", pos: "Adjective", forms: [{ label: "noun", word: "fatality" }, { label: "adv", word: "fatally" }], synonyms: ["deadly", "lethal"], antonyms: ["harmless", "mild"] },
      { word: "fluid", bn: "তরল পদার্থ", pos: "Noun", synonyms: ["liquid", "drink"], antonyms: ["solid"] },
      { word: "outbreak", bn: "প্রাদুর্ভাব", pos: "Noun", synonyms: ["epidemic", "sudden spread"] },
      { word: "platelet", bn: "অণুচক্রিকা (রক্তের কণিকা)", pos: "Noun" },
      { word: "prevention", bn: "প্রতিরোধ", pos: "Noun", forms: [{ label: "verb", word: "prevent" }, { label: "adj", word: "preventive" }], synonyms: ["protection", "avoidance"], antonyms: ["cure"] },
      { word: "stagnant", bn: "বদ্ধ, স্থির", pos: "Adjective", forms: [{ label: "verb", word: "stagnate" }], synonyms: ["still", "motionless"], antonyms: ["flowing", "running"] },
      { word: "symptom", bn: "লক্ষণ, উপসর্গ", pos: "Noun", forms: [{ label: "adj", word: "symptomatic" }], synonyms: ["sign", "indication"] },
      { word: "virus", bn: "ভাইরাস, রোগজীবাণু", pos: "Noun", forms: [{ label: "adj", word: "viral" }] },
    ],
    body: [
      {
        type: "para",
        text: "Dengue is a dangerous viral fever that has become a serious health problem in Bangladesh in recent years. It is caused by the dengue virus and is spread by the bite of the Aedes mosquito, which has white stripes on its black body and legs. This mosquito generally bites in the daytime, especially in the early morning and in the late afternoon. It breeds in clean, stagnant water that collects in flower tubs, broken pots, old tyres, coconut shells, tins, plastic containers, the trays of air-conditioners and refrigerators, and on the roofs of houses and at construction sites. So dengue spreads most during the rainy season. The common symptoms of dengue are a sudden high fever, a severe headache, pain behind the eyes, severe pain in the muscles and joints, vomiting and red rashes on the skin. In a serious case, the platelets in the blood fall rapidly and the patient may bleed from the nose and gums, which can be fatal. In Bangladesh dengue was once a disease of the capital, but now it has spread to almost every district. In 2023 the country faced its worst outbreak, when more than three lakh people were admitted to hospitals and over seventeen hundred of them died. The best way to fight dengue is prevention. We must destroy the breeding places of the Aedes mosquito by not allowing water to stay anywhere in and around our houses for more than three days. We should keep our surroundings clean, use mosquito nets even in the daytime and wear clothes that cover the body. The city corporations and municipalities should spray insecticides regularly. If anyone has a fever, he should consult a doctor at once and have his blood tested. A dengue patient should take complete rest and drink plenty of fluids like water, saline, soup and fruit juice. He must not take any painkiller except paracetamol without a doctor's advice. With public awareness and proper care, dengue can easily be controlled.",
      },
    ],
  },
  {
    id: "a-moonlit-night",
    title: "A Moonlit Night",
    prompt:
      "Write a paragraph on 'A Moonlit Night' by answering the following questions.",
    hints: [
      "What is a moonlit night?",
      "What does nature look like on a moonlit night?",
      "How does a moonlit night look in a village and in a town?",
      "How do people enjoy it?",
      "How did you enjoy a moonlit night?",
    ],
    vocab: [
      { word: "bathe", bn: "স্নান করানো, ভাসিয়ে দেওয়া", pos: "Verb", past: "bathed", pastParticiple: "bathed", forms: [{ label: "noun", word: "bath" }], synonyms: ["wash", "flood"] },
      { word: "dreamland", bn: "স্বপ্নপুরী", pos: "Noun", synonyms: ["fairyland", "paradise"] },
      { word: "enchanting", bn: "মনোমুগ্ধকর", pos: "Adjective", forms: [{ label: "verb", word: "enchant" }, { label: "noun", word: "enchantment" }], synonyms: ["charming", "captivating"], antonyms: ["dull", "boring"] },
      { word: "glitter", bn: "চিকচিক করা", pos: "Verb", past: "glittered", pastParticiple: "glittered", forms: [{ label: "noun", word: "glitter" }], synonyms: ["sparkle", "shine"] },
      { word: "gloomy", bn: "অন্ধকারাচ্ছন্ন, বিষণ্ণ", pos: "Adjective", forms: [{ label: "noun", word: "gloom" }], synonyms: ["dark", "dismal"], antonyms: ["bright", "cheerful"] },
      { word: "hush", bn: "নিস্তব্ধতা", pos: "Noun", forms: [{ label: "verb", word: "hush (hushed)" }], synonyms: ["silence", "stillness"], antonyms: ["noise"] },
      { word: "ripple", bn: "ঢেউ তোলা", pos: "Verb", past: "rippled", pastParticiple: "rippled", forms: [{ label: "noun", word: "ripple" }], synonyms: ["wave"] },
      { word: "serene", bn: "প্রশান্ত, স্নিগ্ধ", pos: "Adjective", forms: [{ label: "noun", word: "serenity" }, { label: "adv", word: "serenely" }], synonyms: ["calm", "peaceful"], antonyms: ["stormy", "disturbed"] },
      { word: "silvery", bn: "রুপালি", pos: "Adjective", forms: [{ label: "noun", word: "silver" }], synonyms: ["shining", "bright"] },
    ],
    body: [
      {
        type: "para",
        text: "A moonlit night is a night when the moon shines brightly in the sky and floods the earth with its soft, silvery light. The night of the full moon is the brightest of all. A moonlit night is one of the most beautiful sights of nature, and poets have written many poems and songs about its beauty. On such a night the whole world seems to be bathed in silver. The dark and gloomy look of the night disappears, and everything looks calm and serene. The trees, the fields, the houses and the roads can be seen clearly. The water of rivers, canals and ponds glitters in the moonlight and ripples gently in the breeze. The stars twinkle faintly in the blue sky, and a soft, cool breeze blows. The hush of the night is broken only by the chirping of crickets or the distant bark of a dog. The beauty of a moonlit night can best be enjoyed in a village. There the open fields, the green trees and the silent rivers together make it look like a dreamland. Village people sit in their courtyards and gossip, grandmothers tell fairy tales to the children, and the boys and girls play hide-and-seek in the moonlight. Some people go boating on the river and sing songs. In a town, however, the beauty of the moonlight is lost among the tall buildings, bright electric lights, smoke and noise of the traffic. Still, many people go up to the roofs of their houses to enjoy it. A moonlit night is also a blessing for travellers and fishermen, who can find their way easily in its light. I still remember a moonlit night that I spent at my grandfather's house in the village. I sat with my cousins on the bank of the river till late at night, and the enchanting beauty of that night will always remain fresh in my memory.",
      },
    ],
  },
  {
    id: "our-national-flag",
    title: "Our National Flag",
    prompt:
      "Write a paragraph on 'Our National Flag' by answering the following questions.",
    hints: [
      "What does our national flag look like?",
      "What do its colours stand for?",
      "What is its size and ratio?",
      "When was it first hoisted and when is it flown?",
      "How should we show respect to it?",
    ],
    vocab: [
      { word: "dignity", bn: "মর্যাদা", pos: "Noun", forms: [{ label: "verb", word: "dignify" }, { label: "adj", word: "dignified" }], synonyms: ["honour", "prestige"], antonyms: ["disgrace", "dishonour"] },
      { word: "half-mast", bn: "অর্ধনমিত অবস্থা", pos: "Noun", synonyms: ["half-staff"] },
      { word: "hoist", bn: "উত্তোলন করা", pos: "Verb", past: "hoisted", pastParticiple: "hoisted", synonyms: ["raise", "fly"], antonyms: ["lower", "pull down"] },
      { word: "identity", bn: "পরিচয়", pos: "Noun", forms: [{ label: "verb", word: "identify" }, { label: "noun", word: "identification" }], synonyms: ["recognition", "individuality"] },
      { word: "martyr", bn: "শহীদ", pos: "Noun", forms: [{ label: "noun", word: "martyrdom" }], synonyms: ["hero who died for a cause"] },
      { word: "rectangular", bn: "আয়তাকার", pos: "Adjective", forms: [{ label: "noun", word: "rectangle" }] },
      { word: "sacrifice", bn: "আত্মত্যাগ", pos: "Noun", forms: [{ label: "verb", word: "sacrifice (sacrificed)" }], synonyms: ["self-denial", "giving up"] },
      { word: "sovereignty", bn: "সার্বভৌমত্ব", pos: "Noun", forms: [{ label: "adj", word: "sovereign" }], synonyms: ["independence", "self-rule"], antonyms: ["dependence", "subjection"] },
      { word: "symbol", bn: "প্রতীক", pos: "Noun", forms: [{ label: "verb", word: "symbolise" }, { label: "adj", word: "symbolic" }], synonyms: ["sign", "emblem"] },
    ],
    body: [
      {
        type: "para",
        text: "Every independent country has a national flag of its own, and it is the symbol of the country's independence, sovereignty and identity. Our national flag is the symbol of our hard-won freedom. It is a rectangular piece of cloth, dark green in colour, with a red circle near the middle. The circle is not in the exact centre; it is placed slightly towards the side of the flagpole. The green colour stands for the evergreen nature of our country, its fields, forests and youthful energy, while the red circle stands for the rising sun of freedom and the blood of the martyrs who laid down their lives in the Liberation War. The length and width of the flag are in the ratio of 10:6, and the radius of the red circle is one-fifth of the length of the flag. The flag was first hoisted on 2 March 1971 at the Bat Tala of the University of Dhaka. At that time a golden map of Bangladesh was drawn inside the red circle. After independence, the map was removed, and the present design was officially adopted on 17 January 1972. Our national flag is flown every day on the important government buildings and offices, and it is hoisted in all educational institutions at the morning assembly while the national anthem is sung. On national days such as Independence Day, Victory Day and Mother Language Day, it is flown on all buildings, and on days of national mourning it is flown at half-mast. It is also flown on the cars of the high officials of the state and in our embassies abroad. Our national flag reminds us of the great sacrifice of our martyrs. So we should respect it from the core of our heart. We must follow the rules of flying it and never let it be dishonoured. It is our sacred duty to uphold the dignity of our national flag at any cost.",
      },
    ],
  },
  {
    id: "a-day-labourer",
    title: "A Day Labourer",
    prompt:
      "Write a paragraph on 'A Day Labourer' by answering the following questions.",
    hints: [
      "Who is a day labourer?",
      "What kind of work does he do?",
      "How does he lead his life?",
      "What problems does he face?",
      "What should be done for him?",
    ],
    vocab: [
      { word: "drudgery", bn: "কঠোর ও একঘেয়ে পরিশ্রম", pos: "Noun", synonyms: ["toil", "hard labour"], antonyms: ["ease", "leisure"] },
      { word: "exploit", bn: "শোষণ করা", pos: "Verb", past: "exploited", pastParticiple: "exploited", forms: [{ label: "noun", word: "exploitation" }], synonyms: ["take advantage of", "misuse"], antonyms: ["help", "support"] },
      { word: "insecurity", bn: "নিরাপত্তাহীনতা", pos: "Noun", forms: [{ label: "adj", word: "insecure" }], synonyms: ["uncertainty"], antonyms: ["security", "safety"] },
      { word: "landless", bn: "ভূমিহীন", pos: "Adjective", synonyms: ["without land"], antonyms: ["landed"] },
      { word: "malnutrition", bn: "অপুষ্টি", pos: "Noun", forms: [{ label: "adj", word: "malnourished" }], synonyms: ["undernourishment"], antonyms: ["nutrition"] },
      { word: "manual", bn: "কায়িক, হাতে করা", pos: "Adjective", forms: [{ label: "adv", word: "manually" }], synonyms: ["physical"], antonyms: ["mental", "automatic"] },
      { word: "neglected", bn: "অবহেলিত", pos: "Adjective", forms: [{ label: "verb", word: "neglect" }, { label: "adj", word: "negligent" }], synonyms: ["ignored", "uncared for"], antonyms: ["cared for"] },
      { word: "wage", bn: "মজুরি", pos: "Noun", forms: [{ label: "noun", word: "wage earner" }], synonyms: ["pay", "earnings"] },
      { word: "worn out", bn: "জীর্ণ, ক্লান্ত", pos: "Adjective", synonyms: ["exhausted", "tired"], antonyms: ["fresh"] },
    ],
    body: [
      {
        type: "para",
        text: "A day labourer is a person who works for others on a daily basis and gets his wages at the end of the day. He has no permanent job. He sells his physical labour to maintain his family, and if he does not get work on a day, he gets no money. Most day labourers in our country are poor, landless and illiterate. They are found both in villages and in towns. In the village a day labourer works in the fields of others during the seasons of sowing and harvesting. He ploughs the land, plants seedlings, weeds the fields and cuts the crops. In towns he works at construction sites, in brickfields, at the river ports and railway stations, and he carries heavy loads, digs earth and breaks bricks. Early in the morning many day labourers gather at a certain place in the town with their spades and baskets and wait for someone to hire them. Those who are not hired go home disappointed. The life of a day labourer is full of drudgery and insecurity. He works hard from dawn to dusk in sun and rain, but his wages are very low. With the rising prices of goods, he cannot buy enough food for his family, and so his wife and children often suffer from malnutrition. He lives in a small hut or in a slum and wears ragged clothes. He cannot send his children to school, and very often they too start working as child labourers. When he falls ill, he cannot afford treatment, and his family starves. Besides, many employers exploit him by making him work longer and paying him less. As he gets no rest and proper food, he becomes worn out and old before his time. The day labourers are the most neglected people of our society, though they build our roads, houses and bridges. The government should ensure a fair wage for them, create more job opportunities and arrange free education and treatment for their families. We should also treat them with sympathy and respect.",
      },
    ],
  },
  {
    id: "food-adulteration",
    title: "Food Adulteration",
    prompt:
      "Write a paragraph on 'Food Adulteration' by answering the following questions.",
    hints: [
      "What is food adulteration?",
      "How is food adulterated?",
      "Why do some businessmen adulterate food?",
      "What are the effects of eating adulterated food?",
      "How can food adulteration be stopped?",
    ],
    vocab: [
      { word: "adulterate", bn: "ভেজাল মেশানো", pos: "Verb", past: "adulterated", pastParticiple: "adulterated", forms: [{ label: "noun", word: "adulteration" }, { label: "adj", word: "adulterated" }], synonyms: ["contaminate", "mix impurities"], antonyms: ["purify"] },
      { word: "deterrent", bn: "নিবারক, দৃষ্টান্তমূলক", pos: "Adjective", forms: [{ label: "verb", word: "deter" }], synonyms: ["preventive", "exemplary"] },
      { word: "formalin", bn: "ফরমালিন (মৃতদেহ সংরক্ষণের রাসায়নিক)", pos: "Noun" },
      { word: "greed", bn: "লোভ", pos: "Noun", forms: [{ label: "adj", word: "greedy" }], synonyms: ["avarice", "selfishness"], antonyms: ["generosity", "contentment"] },
      { word: "kidney", bn: "বৃক্ক", pos: "Noun" },
      { word: "mobile court", bn: "ভ্রাম্যমাণ আদালত", pos: "Phrase" },
      { word: "preservative", bn: "সংরক্ষক পদার্থ", pos: "Noun", forms: [{ label: "verb", word: "preserve" }, { label: "noun", word: "preservation" }] },
      { word: "ripen", bn: "পাকানো", pos: "Verb", past: "ripened", pastParticiple: "ripened", forms: [{ label: "adj", word: "ripe" }], synonyms: ["mature"] },
      { word: "slow poison", bn: "ধীরে কার্যকর বিষ", pos: "Phrase" },
    ],
    body: [
      {
        type: "para",
        text: "Food adulteration means mixing harmful or cheap substances with food, or removing some of its valuable parts, in order to increase its quantity or to make it look fresh and attractive. It has become a great threat to public health in Bangladesh, and it is now very hard to find pure food in the market. Almost every kind of food is adulterated. Dishonest traders use formalin to keep fish, fruits and vegetables fresh for a long time, and carbide and other chemicals to ripen fruits like mangoes and bananas quickly. Textile dyes are mixed with spices, sweets and juices to give them a bright colour, and brick dust is mixed with chilli powder. Water is mixed with milk, and stones and sand with rice and pulses. Rotten meat, stale bread and unhygienic street food are also sold openly. The main reason behind food adulteration is the greed of some unscrupulous businessmen who want to earn huge profits overnight. The lack of strict laws and their proper enforcement, the lack of awareness among consumers and the corruption of some officials also encourage them. The effects of eating adulterated food are very serious. It works as a slow poison in our body. It causes diarrhoea, food poisoning, stomach ulcers and other diseases, and in the long run it damages the liver and kidneys and even causes cancer. Children are the worst victims, because their growth is hampered and their brains are affected. Food adulteration must be stopped at any cost. The laws against it, such as the Safe Food Act, should be strictly enforced, and mobile courts should conduct regular drives in markets, factories and restaurants. The culprits should be given deterrent punishment. Modern laboratories should be set up to test food. At the same time, consumers should be aware and should refuse to buy food that looks unnaturally fresh or bright. Above all, the traders should realise that playing with people's lives is a grave crime.",
      },
    ],
  },
  {
    id: "uses-and-abuses-of-social-media",
    title: "Uses and Abuses of Social Media",
    prompt:
      "Write a paragraph on 'Uses and Abuses of Social Media' by answering the following questions.",
    hints: [
      "What is social media?",
      "Why has it become so popular?",
      "What are its good uses?",
      "How is it misused?",
      "How should we use it?",
    ],
    vocab: [
      { word: "cyberbullying", bn: "অনলাইনে হয়রানি", pos: "Noun", synonyms: ["online harassment"] },
      { word: "fake", bn: "ভুয়া, মিথ্যা", pos: "Adjective", forms: [{ label: "noun", word: "fake" }, { label: "verb", word: "fake (faked)" }], synonyms: ["false", "forged"], antonyms: ["genuine", "real"] },
      { word: "platform", bn: "মাধ্যম, মঞ্চ", pos: "Noun", synonyms: ["medium", "forum"] },
      { word: "privacy", bn: "গোপনীয়তা", pos: "Noun", forms: [{ label: "adj", word: "private" }, { label: "adv", word: "privately" }], synonyms: ["secrecy", "confidentiality"], antonyms: ["publicity", "openness"] },
      { word: "rumour", bn: "গুজব", pos: "Noun", forms: [{ label: "adj", word: "rumoured" }], synonyms: ["gossip", "hearsay"], antonyms: ["fact", "truth"] },
      { word: "share", bn: "ভাগ করা, প্রচার করা", pos: "Verb", past: "shared", pastParticiple: "shared", forms: [{ label: "noun", word: "share" }], synonyms: ["spread", "exchange"], antonyms: ["withhold", "hide"] },
      { word: "unrest", bn: "অস্থিরতা, অশান্তি", pos: "Noun", synonyms: ["disturbance", "turmoil"], antonyms: ["peace", "calm"] },
      { word: "verify", bn: "যাচাই করা", pos: "Verb", past: "verified", pastParticiple: "verified", forms: [{ label: "noun", word: "verification" }], synonyms: ["check", "confirm"], antonyms: ["ignore"] },
    ],
    body: [
      {
        type: "para",
        text: "Social media means the websites and mobile applications through which people can create and share information, ideas, pictures and videos and communicate with one another. Facebook, YouTube, WhatsApp, Instagram, X (formerly Twitter) and TikTok are the most popular social media platforms today. Among them Facebook, which was launched by Mark Zuckerberg in 2004, is the most widely used in Bangladesh, and millions of our people use it every day. Social media has become so popular because it is cheap, easy to use and available on every smartphone. It has many good uses. With its help we can keep in touch with our friends and relatives at home and abroad and talk to them face to face through video calls. It spreads news faster than any newspaper or television. Students can form study groups, join online classes and get useful information about admission and scholarships. Many young people, especially women, run small online businesses from home and earn money. Social media is also used to raise funds for poor patients and flood victims, to find missing people and to raise public opinion against injustice. But social media is also being badly misused. Many young people have become addicted to it and waste hours scrolling and chatting, which harms their studies, sleep and health. Some people spread rumours, fake news and hateful posts that create religious and social unrest. Cyberbullying, hacking of accounts, fraud and the misuse of people's private pictures have become common crimes. Besides, a virtual life on social media often makes people lonely and cuts them off from their families. In fact, social media is like a sharp knife that can be used either to cut fruit or to hurt someone. So we should use it wisely and for a limited time, protect our privacy and verify any news before sharing it. Parents should keep an eye on their children, and the government should take action against cyber criminals.",
      },
    ],
  },
  {
    id: "digital-bangladesh",
    title: "Digital Bangladesh",
    prompt:
      "Write a paragraph on 'Digital Bangladesh' by answering the following questions.",
    hints: [
      "What is meant by Digital Bangladesh?",
      "In which sectors has digital technology been introduced?",
      "How has it changed the life of the people?",
      "What are the obstacles to it?",
      "What should be done to make it a success?",
    ],
    vocab: [
      { word: "access", bn: "প্রবেশাধিকার, সুযোগ", pos: "Noun", forms: [{ label: "adj", word: "accessible" }], synonyms: ["entry", "reach"] },
      { word: "digital divide", bn: "ডিজিটাল বৈষম্য (প্রযুক্তি সুবিধার বৈষম্য)", pos: "Phrase", synonyms: ["technology gap"] },
      { word: "e-governance", bn: "ইলেকট্রনিক উপায়ে সরকার পরিচালনা", pos: "Noun" },
      { word: "freelancer", bn: "মুক্ত পেশাজীবী", pos: "Noun", forms: [{ label: "verb", word: "freelance" }], synonyms: ["self-employed worker"] },
      { word: "hassle", bn: "ঝামেলা, হয়রানি", pos: "Noun", forms: [{ label: "verb", word: "hassle (hassled)" }], synonyms: ["trouble", "bother"], antonyms: ["ease", "comfort"] },
      { word: "infrastructure", bn: "অবকাঠামো", pos: "Noun", synonyms: ["basic facilities", "framework"] },
      { word: "remittance", bn: "প্রবাসী আয়", pos: "Noun", forms: [{ label: "verb", word: "remit" }] },
      { word: "transparency", bn: "স্বচ্ছতা", pos: "Noun", forms: [{ label: "adj", word: "transparent" }], synonyms: ["openness", "clarity"], antonyms: ["secrecy", "corruption"] },
      { word: "vision", bn: "স্বপ্ন, লক্ষ্য", pos: "Noun", forms: [{ label: "adj", word: "visionary" }], synonyms: ["dream", "goal"] },
    ],
    body: [
      {
        type: "para",
        text: "Digital Bangladesh means a Bangladesh where information and communication technology is used in every sphere of life, such as education, health, agriculture, business and government services, so that people can get services quickly, easily and at a low cost. It was declared as a national vision in 2008, and since then Bangladesh has made remarkable progress in this field. Today mobile phones and the internet have reached even the remote villages. Digital centres have been set up in every union, where rural people can get birth certificates, land records, application forms and many other services from their own locality. Students can apply for admission, get their examination results and join online classes through the internet. People can pay utility bills, buy train and bus tickets and apply for passports online. Mobile financial services have brought a revolution in our economy, because now even a poor villager can send and receive money within seconds, and remittances from abroad reach the families instantly. In the health sector, patients can take advice from doctors over the phone and through telemedicine. Farmers get information about weather, seeds and fertilisers through their mobile phones. Lakhs of young freelancers are earning foreign currency by working online. The country has also launched its own communication satellite. All this has saved people's time and money, reduced their hassle and brought some transparency to government work. However, there are some obstacles on the way. Internet speed is still slow and costly in many areas, and many people, especially in the villages, lack digital skills, which has created a digital divide. Cyber crimes and the lack of power supply are also problems. To make Digital Bangladesh a complete success, internet services must be made cheap and fast everywhere, ICT education must be spread to every school and cyber security must be ensured. Then the dream of a developed and technology-based Bangladesh will come true.",
      },
    ],
  },
  {
    id: "an-ideal-student",
    title: "An Ideal Student",
    prompt:
      "Write a paragraph on 'An Ideal Student' by answering the following questions.",
    hints: [
      "Who is an ideal student?",
      "What are his qualities?",
      "How does he behave with his parents, teachers and friends?",
      "What does he do besides his studies?",
      "Why is he loved by all?",
    ],
    vocab: [
      { word: "co-curricular", bn: "সহপাঠ্যক্রমিক", pos: "Adjective", forms: [{ label: "noun", word: "curriculum" }], synonyms: ["extra-curricular"] },
      { word: "courteous", bn: "ভদ্র, বিনয়ী", pos: "Adjective", forms: [{ label: "noun", word: "courtesy" }, { label: "adv", word: "courteously" }], synonyms: ["polite", "well-mannered"], antonyms: ["rude", "impolite"] },
      { word: "disciplined", bn: "সুশৃঙ্খল", pos: "Adjective", forms: [{ label: "noun", word: "discipline" }], synonyms: ["orderly", "well-behaved"], antonyms: ["undisciplined", "unruly"] },
      { word: "evil company", bn: "অসৎ সঙ্গ", pos: "Phrase", synonyms: ["bad company"], antonyms: ["good company"] },
      { word: "obedient", bn: "বাধ্য, অনুগত", pos: "Adjective", forms: [{ label: "noun", word: "obedience" }, { label: "verb", word: "obey" }], synonyms: ["dutiful", "respectful"], antonyms: ["disobedient", "rebellious"] },
      { word: "punctual", bn: "সময়ানুবর্তী", pos: "Adjective", forms: [{ label: "noun", word: "punctuality" }, { label: "adv", word: "punctually" }], synonyms: ["timely", "prompt"], antonyms: ["late", "unpunctual"] },
      { word: "regular", bn: "নিয়মিত", pos: "Adjective", forms: [{ label: "noun", word: "regularity" }, { label: "adv", word: "regularly" }], synonyms: ["steady", "habitual"], antonyms: ["irregular"] },
      { word: "sincere", bn: "আন্তরিক, একনিষ্ঠ", pos: "Adjective", forms: [{ label: "noun", word: "sincerity" }, { label: "adv", word: "sincerely" }], synonyms: ["honest", "earnest"], antonyms: ["insincere", "false"] },
      { word: "virtue", bn: "গুণ, সদগুণ", pos: "Noun", forms: [{ label: "adj", word: "virtuous" }], synonyms: ["goodness", "merit"], antonyms: ["vice", "fault"] },
    ],
    body: [
      {
        type: "para",
        text: "An ideal student is one who has all the good qualities that a student should have and who can be a model for others. He is not only good at his studies but also good in character. Studies are his first duty, and he never neglects them. He is regular and punctual in attending classes, attentive to the lessons of his teachers and sincere in doing his homework. He studies according to a fixed routine and does not wait till the eve of the examination. But he does not merely memorise his lessons; he tries to understand them and loves to learn new things. He knows that time is precious, so he never wastes a single moment. An ideal student is disciplined in all his activities. He gets up early in the morning, keeps his body and mind healthy and leads a simple life. He is obedient to his parents and respectful to his teachers and elders. He is courteous and helpful to his classmates, and if a friend is weak in some subject, he gladly helps him. He always avoids evil company and bad habits like smoking, gambling and the misuse of mobile phones. He is honest and truthful, and he never adopts unfair means in the examination. Besides his studies, he takes part in co-curricular activities such as games and sports, debates, cultural programmes and scouting, which help him develop his body and mind. He is also aware of his duties to society. He takes part in social work, such as tree plantation, teaching the illiterate and helping the victims of floods and other disasters. Because of all these virtues, an ideal student is loved by his parents, teachers and friends, and he becomes a good citizen in future. He is the pride of his family, his school and his country, and every student should try to be an ideal one.",
      },
    ],
  },
  {
    id: "importance-of-reading-newspapers",
    title: "Importance of Reading Newspapers",
    prompt:
      "Write a paragraph on 'Importance of Reading Newspapers' by answering the following questions.",
    hints: [
      "What is a newspaper?",
      "What does a newspaper contain?",
      "Why is reading newspapers important?",
      "How is it useful for students?",
      "What are its limitations?",
    ],
    vocab: [
      { word: "biased", bn: "পক্ষপাতদুষ্ট", pos: "Adjective", forms: [{ label: "noun", word: "bias" }], synonyms: ["partial", "one-sided"], antonyms: ["neutral", "unbiased"] },
      { word: "classified", bn: "শ্রেণিবদ্ধ (বিজ্ঞাপন)", pos: "Adjective", forms: [{ label: "verb", word: "classify" }, { label: "noun", word: "classification" }], synonyms: ["categorised"] },
      { word: "contemporary", bn: "সমসাময়িক", pos: "Adjective", synonyms: ["current", "present-day"], antonyms: ["old", "past"] },
      { word: "editorial", bn: "সম্পাদকীয়", pos: "Noun", forms: [{ label: "noun", word: "editor" }, { label: "verb", word: "edit" }] },
      { word: "enlighten", bn: "আলোকিত করা, জ্ঞান দান করা", pos: "Verb", past: "enlightened", pastParticiple: "enlightened", forms: [{ label: "noun", word: "enlightenment" }], synonyms: ["educate", "inform"], antonyms: ["confuse", "mislead"] },
      { word: "frog in the well", bn: "কূপমণ্ডূক", pos: "Phrase", synonyms: ["narrow-minded person"] },
      { word: "public opinion", bn: "জনমত", pos: "Phrase" },
      { word: "vacancy", bn: "শূন্যপদ", pos: "Noun", forms: [{ label: "adj", word: "vacant" }], synonyms: ["opening", "empty post"] },
      { word: "watchdog", bn: "পাহারাদার, প্রহরী", pos: "Noun", synonyms: ["guardian", "monitor"] },
    ],
    body: [
      {
        type: "para",
        text: "A newspaper is a printed publication that brings us news and views of home and abroad every day. It is now available both in print and online. In the modern world, a newspaper has become a part and parcel of our life, and reading it has become a daily habit of educated people. A newspaper contains news on politics, economy, trade and commerce, education, science, sports, entertainment and culture. It also contains editorials, articles by learned writers, letters to the editor, weather reports and advertisements. Reading newspapers is very important. It keeps us informed of what is happening in our country and all over the world, and a man who does not read newspapers is like a frog in the well. Newspapers enlighten us on contemporary problems and help us form our own opinions. They also create public opinion and act as the watchdog of society, because they bring to light the corruption, injustice and wrongdoings of powerful people. Businessmen learn about the market, the prices of goods and the share market from them. Job seekers find information about vacancies, and the classified advertisements help people buy and sell houses, cars and many other things. Farmers learn about the weather and modern methods of cultivation. For students, newspapers are especially useful. Textbooks alone cannot give them all the knowledge they need, but newspapers enrich their general knowledge, which helps them in competitive examinations and job interviews. Reading an English newspaper improves their vocabulary, spelling and power of expression. However, newspapers have some limitations too. Some papers publish biased or false news in favour of a certain party or group, and some spread sensational news only to increase their sales. So we should read more than one newspaper and judge the news with a cool head. Still, there is no doubt that the habit of reading newspapers makes a man wise and well-informed.",
      },
    ],
  },
  {
    id: "a-village-market",
    title: "A Village Market",
    prompt:
      "Write a paragraph on 'A Village Market' by answering the following questions.",
    hints: [
      "What is a village market and where does it sit?",
      "When does it sit and how does it look?",
      "What things are bought and sold there?",
      "Who are the buyers and sellers?",
      "What is its importance in village life?",
    ],
    vocab: [
      { word: "bustle", bn: "হৈচৈ, কর্মব্যস্ততা", pos: "Noun", forms: [{ label: "adj", word: "bustling" }], synonyms: ["activity", "commotion"], antonyms: ["quiet", "calm"] },
      { word: "commodity", bn: "পণ্য", pos: "Noun", synonyms: ["goods", "product"] },
      { word: "confluence", bn: "মিলনস্থল", pos: "Noun", synonyms: ["meeting point", "junction"] },
      { word: "deafening", bn: "কান ফাটানো", pos: "Adjective", forms: [{ label: "adj", word: "deaf" }, { label: "verb", word: "deafen" }], synonyms: ["very loud", "thunderous"], antonyms: ["quiet", "soft"] },
      { word: "haat", bn: "হাট (সপ্তাহে নির্দিষ্ট দিনে বসা বাজার)", pos: "Noun", synonyms: ["weekly market"] },
      { word: "insanitary", bn: "অস্বাস্থ্যকর", pos: "Adjective", forms: [{ label: "noun", word: "sanitation" }], synonyms: ["unhygienic", "dirty"], antonyms: ["sanitary", "clean"] },
      { word: "muddy", bn: "কর্দমাক্ত", pos: "Adjective", forms: [{ label: "noun", word: "mud" }], synonyms: ["miry", "sloppy"], antonyms: ["dry", "clean"] },
      { word: "perishable", bn: "পচনশীল", pos: "Adjective", forms: [{ label: "verb", word: "perish" }], synonyms: ["short-lived"], antonyms: ["durable", "lasting"] },
      { word: "shed", bn: "ছাউনি", pos: "Noun", synonyms: ["hut", "shelter"] },
    ],
    body: [
      {
        type: "para",
        text: "A village market is a place in the village where people gather to buy and sell their daily necessities. There are two kinds of village markets: the bazaar, which sits every day, and the haat, which sits once or twice a week on fixed days. A village market usually sits in an open place, beside a river, near a crossroads or under a big banyan tree, so that people of the neighbouring villages can easily come there. There are a few permanent shops with tin roofs and a number of open sheds, but most of the sellers sit on the ground under the open sky. The market begins in the afternoon and becomes crowded before evening. At its peak, it is full of noise and bustle. Sellers call out to the buyers, buyers bargain with the sellers, and the whole place becomes noisy with a deafening sound. Almost everything that village people need is found there. Rice, pulses, fish, vegetables, fruits, spices, milk, eggs, poultry, cattle, earthenware, bamboo and cane products, clothes, oil, salt and kerosene are sold in different parts of the market. The buyers and sellers are mostly village people. Farmers bring their crops, fish and vegetables to sell, and with the money they buy the things they need. Traders from towns also come to buy crops and perishable goods at a low price and sell them in the towns. A village market is not free from problems. It is often dirty and insanitary, and in the rainy season it becomes muddy. Middlemen sometimes cheat the simple farmers, and pickpockets are also active there. Still, a village market plays a very important role in rural life. It is the centre of trade and commerce in the village, and it is also a confluence of people, where they meet their friends and relatives, exchange news and discuss various matters. In fact, it is the heart of the rural economy.",
      },
    ],
  },
  {
    id: "a-street-beggar",
    title: "A Street Beggar",
    prompt:
      "Write a paragraph on 'A Street Beggar' by answering the following questions.",
    hints: [
      "Who is a street beggar?",
      "Why does a person become a beggar?",
      "How does a beggar beg and where does he live?",
      "How is begging harmful to society?",
      "What should be done to solve the problem?",
    ],
    vocab: [
      { word: "alms", bn: "ভিক্ষা, দান", pos: "Noun", synonyms: ["charity", "donation"] },
      { word: "crippled", bn: "পঙ্গু", pos: "Adjective", forms: [{ label: "verb", word: "cripple" }], synonyms: ["disabled", "lame"], antonyms: ["able-bodied", "healthy"] },
      { word: "curse", bn: "অভিশাপ", pos: "Noun", forms: [{ label: "adj", word: "cursed" }], synonyms: ["bane", "evil"], antonyms: ["blessing", "boon"] },
      { word: "destitute", bn: "নিঃস্ব, সহায়সম্বলহীন", pos: "Adjective", forms: [{ label: "noun", word: "destitution" }], synonyms: ["penniless", "helpless"], antonyms: ["rich", "well-off"] },
      { word: "dignity", bn: "মর্যাদা", pos: "Noun", forms: [{ label: "adj", word: "dignified" }], synonyms: ["honour", "self-respect"], antonyms: ["disgrace", "humiliation"] },
      { word: "ragged", bn: "ছেঁড়া, জীর্ণ", pos: "Adjective", forms: [{ label: "noun", word: "rag" }], synonyms: ["torn", "tattered"], antonyms: ["neat", "new"] },
      { word: "rehabilitate", bn: "পুনর্বাসন করা", pos: "Verb", past: "rehabilitated", pastParticiple: "rehabilitated", forms: [{ label: "noun", word: "rehabilitation" }], synonyms: ["resettle", "restore"] },
      { word: "sympathy", bn: "সহানুভূতি", pos: "Noun", forms: [{ label: "adj", word: "sympathetic" }, { label: "verb", word: "sympathise" }], synonyms: ["pity", "compassion"], antonyms: ["cruelty", "indifference"] },
      { word: "wretched", bn: "হতভাগ্য, দুর্দশাগ্রস্ত", pos: "Adjective", synonyms: ["miserable", "pitiable"], antonyms: ["happy", "fortunate"] },
    ],
    body: [
      {
        type: "para",
        text: "A street beggar is a person who lives on the alms of others by begging in the streets. Street beggars are a common sight in our country. They are found everywhere, in the streets, at bus stands, at railway stations, at launch ghats, in front of mosques, shrines and hospitals, and even at traffic signals. There are many reasons why a person becomes a beggar. Poverty is the main cause. Many people lose their land and houses to river erosion, floods and other natural calamities and come to the towns in search of work, but when they fail to find any, they take to begging. Some people become beggars because they are blind, crippled or old and have no one to look after them. Some widows and deserted women with little children are also forced to beg. But there are also some able-bodied people who beg only because they are lazy and find begging an easy way of earning. Sadly, some criminal gangs even use children and disabled people for begging. A beggar leads a wretched life. He wears ragged and dirty clothes and has no fixed home. He sleeps on the footpath, under a bridge or at the railway station, and he often goes without food. He begs by showing his wounds, crying piteously or singing songs, and many people give him a coin or two out of sympathy. Begging is a curse for society and a shame for the nation. It destroys a man's dignity and self-respect, and it creates a class of idle people. Beggars in the streets also spoil the image of the country before foreigners. This problem should be solved. The government should rehabilitate the destitute beggars and set up shelter homes for the old and disabled. Able-bodied beggars should be given training and work so that they can earn their own living. The rich and the NGOs should come forward to help them. At the same time, we should not encourage able-bodied beggars by giving them alms.",
      },
    ],
  },
  {
    id: "a-memorable-day-in-your-life",
    title: "A Memorable Day in Your Life",
    prompt:
      "Write a paragraph on 'A Memorable Day in Your Life' by answering the following questions.",
    hints: [
      "What is a memorable day?",
      "Which day is memorable to you?",
      "What happened on that day?",
      "How did you feel?",
      "Why do you still remember it?",
    ],
    vocab: [
      { word: "anxiety", bn: "উদ্বেগ, দুশ্চিন্তা", pos: "Noun", forms: [{ label: "adj", word: "anxious" }, { label: "adv", word: "anxiously" }], synonyms: ["worry", "tension"], antonyms: ["calmness", "relief"] },
      { word: "applause", bn: "করতালি, প্রশংসা", pos: "Noun", forms: [{ label: "verb", word: "applaud" }], synonyms: ["clapping", "praise"], antonyms: ["criticism", "booing"] },
      { word: "beam", bn: "উদ্ভাসিত হওয়া, হাসিতে উজ্জ্বল হওয়া", pos: "Verb", past: "beamed", pastParticiple: "beamed", synonyms: ["smile", "glow"], antonyms: ["frown"] },
      { word: "cherish", bn: "লালন করা, সযত্নে মনে রাখা", pos: "Verb", past: "cherished", pastParticiple: "cherished", synonyms: ["treasure", "hold dear"], antonyms: ["forget", "neglect"] },
      { word: "congratulate", bn: "অভিনন্দন জানানো", pos: "Verb", past: "congratulated", pastParticiple: "congratulated", forms: [{ label: "noun", word: "congratulation" }], synonyms: ["compliment", "praise"], antonyms: ["criticise"] },
      { word: "dais", bn: "মঞ্চ", pos: "Noun", synonyms: ["stage", "platform"] },
      { word: "overwhelmed", bn: "অভিভূত", pos: "Adjective", forms: [{ label: "verb", word: "overwhelm" }], synonyms: ["overcome", "moved"], antonyms: ["unmoved"] },
      { word: "tearful", bn: "অশ্রুসিক্ত", pos: "Adjective", forms: [{ label: "noun", word: "tear" }], synonyms: ["weeping"], antonyms: ["smiling"] },
      { word: "unforgettable", bn: "অবিস্মরণীয়", pos: "Adjective", forms: [{ label: "verb", word: "forget" }], synonyms: ["memorable", "remarkable"], antonyms: ["forgettable", "ordinary"] },
    ],
    body: [
      {
        type: "para",
        text: "Every day brings something new in our life, but most days come and go and leave no mark on our mind. Some days, however, remain fresh in our memory for ever because of some happy or sad event. Such a day is called a memorable day. There are many memorable days in my life, but the day when the result of our Class Eight annual examination was published is the most memorable of all. It was a bright winter morning at the end of December. The result was to be announced at noon, and from the morning I was full of anxiety. I could not eat anything, and I kept walking up and down in the courtyard. My parents also looked anxious, though they tried to hide it. At about noon I went to my school with my father. A large crowd of students and guardians had gathered there. After a while, our headmaster came out with a list in his hand. He announced that I had stood first among more than two hundred students of Class Eight and had got the highest marks in mathematics and English. At first I could not believe my ears. Then all my friends and teachers came forward to congratulate me, and my father embraced me with tearful eyes. I was overwhelmed with joy. When we returned home, my mother beamed with delight and distributed sweets among our neighbours. In the evening, my relatives came to our house with gifts, and my grandfather blessed me and gave me a beautiful wristwatch. A few weeks later I was called on the dais at a prize-giving ceremony of our school and received a crest amid loud applause. That day taught me that hard work never goes in vain. It inspired me to study harder, and whenever I feel tired or disappointed, I remember that day and find new strength. I shall cherish this unforgettable day as long as I live.",
      },
    ],
  },
  {
    id: "your-favourite-teacher",
    title: "Your Favourite Teacher",
    prompt:
      "Write a paragraph on 'Your Favourite Teacher' by answering the following questions.",
    hints: [
      "Who is your favourite teacher?",
      "What does he look like?",
      "What subject does he teach and how does he teach?",
      "How does he behave with the students?",
      "Why do you like him most?",
    ],
    vocab: [
      { word: "affectionate", bn: "স্নেহশীল", pos: "Adjective", forms: [{ label: "noun", word: "affection" }, { label: "adv", word: "affectionately" }], synonyms: ["loving", "caring"], antonyms: ["cold", "unkind"] },
      { word: "complicated", bn: "জটিল", pos: "Adjective", forms: [{ label: "verb", word: "complicate" }, { label: "noun", word: "complication" }], synonyms: ["difficult", "complex"], antonyms: ["simple", "easy"] },
      { word: "dedicated", bn: "নিবেদিতপ্রাণ", pos: "Adjective", forms: [{ label: "verb", word: "dedicate" }, { label: "noun", word: "dedication" }], synonyms: ["devoted", "committed"], antonyms: ["indifferent", "careless"] },
      { word: "gentle", bn: "নম্র, কোমল", pos: "Adjective", forms: [{ label: "adv", word: "gently" }, { label: "noun", word: "gentleness" }], synonyms: ["mild", "kind"], antonyms: ["harsh", "rough"] },
      { word: "illustrate", bn: "উদাহরণ দিয়ে বোঝানো", pos: "Verb", past: "illustrated", pastParticiple: "illustrated", forms: [{ label: "noun", word: "illustration" }], synonyms: ["explain", "demonstrate"] },
      { word: "inspire", bn: "অনুপ্রাণিত করা", pos: "Verb", past: "inspired", pastParticiple: "inspired", forms: [{ label: "noun", word: "inspiration" }, { label: "adj", word: "inspiring" }], synonyms: ["encourage", "motivate"], antonyms: ["discourage"] },
      { word: "modest", bn: "বিনয়ী, সাদাসিধে", pos: "Adjective", forms: [{ label: "noun", word: "modesty" }, { label: "adv", word: "modestly" }], synonyms: ["humble", "simple"], antonyms: ["proud", "arrogant"] },
      { word: "personality", bn: "ব্যক্তিত্ব", pos: "Noun", forms: [{ label: "adj", word: "personal" }], synonyms: ["character", "nature"] },
      { word: "tuition", bn: "প্রাইভেট পড়ানো, টিউশন", pos: "Noun", synonyms: ["private coaching", "teaching"] },
    ],
    body: [
      {
        type: "para",
        text: "A teacher plays the most important role in building the life of a student. I have many teachers in my school, and all of them are good, but my favourite teacher is Mr. Abdul Karim, who teaches us English. He is about fifty years old. He is of medium height and has a fair complexion and a gentle, smiling face. He always wears simple clothes, usually a white panjabi and pyjama, and he lives a simple and modest life. He has an MA degree in English, and he has been teaching in our school for more than twenty years. He is a dedicated and skilful teacher. He never comes to the class unprepared. He makes his lessons interesting by telling stories and giving examples from our daily life, and he explains even complicated rules of grammar so clearly that the weakest student can understand them. He asks us to speak English in his class and corrects our mistakes without making us feel ashamed. He checks our homework regularly and gives special care to the weak students after school hours without taking any money. He never encourages private tuition or memorising notes; instead he inspires us to read, think and write on our own. He is strict about discipline, but he never punishes or scolds any student harshly. He is kind and affectionate to all of us and treats us like his own children. When any of us faces a problem, he listens to him patiently and helps him. Besides teaching, he guides the debate club and the English language club of our school. He is honest, punctual and truthful, and he practises what he teaches. For all these qualities, he is respected by the students, the guardians and his colleagues alike. His personality has influenced me deeply, and I want to follow his ideals in my life. I shall always remember him with respect and gratitude.",
      },
    ],
  },
  {
    id: "a-railway-station",
    title: "A Railway Station",
    prompt:
      "Write a paragraph on 'A Railway Station' by answering the following questions.",
    hints: [
      "What is a railway station?",
      "What does it look like?",
      "What happens there when a train arrives or leaves?",
      "Who are the people you see there?",
      "What problems are there at a railway station?",
    ],
    vocab: [
      { word: "arrival", bn: "আগমন", pos: "Noun", forms: [{ label: "verb", word: "arrive" }], synonyms: ["coming"], antonyms: ["departure"] },
      { word: "bewildered", bn: "হতবুদ্ধি, দিশেহারা", pos: "Adjective", forms: [{ label: "verb", word: "bewilder" }], synonyms: ["confused", "puzzled"], antonyms: ["calm", "composed"] },
      { word: "commotion", bn: "হট্টগোল", pos: "Noun", synonyms: ["uproar", "tumult"], antonyms: ["peace", "calm"] },
      { word: "departure", bn: "প্রস্থান", pos: "Noun", forms: [{ label: "verb", word: "depart" }], synonyms: ["leaving"], antonyms: ["arrival"] },
      { word: "farewell", bn: "বিদায়", pos: "Noun", synonyms: ["goodbye", "parting"], antonyms: ["welcome", "greeting"] },
      { word: "luggage", bn: "মালপত্র", pos: "Noun", synonyms: ["baggage"] },
      { word: "porter", bn: "কুলি, মালবাহক", pos: "Noun", synonyms: ["carrier", "coolie"] },
      { word: "vendor", bn: "ফেরিওয়ালা, বিক্রেতা", pos: "Noun", forms: [{ label: "verb", word: "vend" }], synonyms: ["seller", "hawker"], antonyms: ["buyer"] },
    ],
    body: [
      {
        type: "para",
        text: "A railway station is a place where trains stop to pick up and drop passengers and goods. It is one of the busiest places in a town. A large railway station has a main building with a ticket counter, an enquiry office, the station master's room, waiting rooms, a restaurant, bookstalls and toilets. There are several long platforms with roofs over them, and the railway lines run beside them. A big clock and a board showing the time of arrival and departure of trains hang on the wall, and announcements are made over loudspeakers. A railway station remains busy almost all day and night, but it presents a lively scene when a train is about to arrive or leave. When the bell rings and the train is announced, everyone becomes alert. Passengers hurry to the platform with their luggage, and porters in red shirts run about to carry their bags and boxes. As soon as the train stops, there is a great commotion. Passengers rush to get down and get in at the same time, and they push and jostle one another. Vendors walk up and down the platform, crying out to sell tea, water, fruits, snacks, newspapers and toys. Some people come to receive their friends and relatives, while others come to see them off, and one can see both the joy of meeting and the sorrow of farewell there. Rural people coming to the town for the first time look bewildered. After a few minutes, the guard blows the whistle and waves the green flag, and the train steams out of the station. Then the platform becomes quiet for a while. A railway station also has some problems. It is often dirty and overcrowded, and pickpockets, touts and ticket black-marketers are active there. Many homeless people and street children spend the night on its platforms. If these problems are solved, a railway station can be a comfortable and pleasant place for travellers.",
      },
    ],
  },
  {
    id: "international-mother-language-day",
    title: "International Mother Language Day",
    prompt:
      "Write a paragraph on 'International Mother Language Day' by answering the following questions.",
    hints: [
      "When is International Mother Language Day observed?",
      "What happened on 21 February 1952?",
      "How did the day get international recognition?",
      "How is the day observed in Bangladesh?",
      "What is the significance of the day?",
    ],
    vocab: [
      { word: "barefoot", bn: "খালি পায়ে", pos: "Adverb", synonyms: ["without shoes"] },
      { word: "defy", bn: "অমান্য করা", pos: "Verb", past: "defied", pastParticiple: "defied", forms: [{ label: "noun", word: "defiance" }, { label: "adj", word: "defiant" }], synonyms: ["disobey", "resist"], antonyms: ["obey", "comply"] },
      { word: "impose", bn: "চাপিয়ে দেওয়া", pos: "Verb", past: "imposed", pastParticiple: "imposed", forms: [{ label: "noun", word: "imposition" }], synonyms: ["force", "enforce"], antonyms: ["lift", "remove"] },
      { word: "martyr", bn: "শহীদ", pos: "Noun", forms: [{ label: "noun", word: "martyrdom" }] },
      { word: "procession", bn: "মিছিল, শোভাযাত্রা", pos: "Noun", forms: [{ label: "verb", word: "proceed" }], synonyms: ["rally", "march"] },
      { word: "recognition", bn: "স্বীকৃতি", pos: "Noun", forms: [{ label: "verb", word: "recognise" }], synonyms: ["acknowledgement", "acceptance"], antonyms: ["denial", "rejection"] },
      { word: "sacrifice", bn: "আত্মত্যাগ", pos: "Noun", forms: [{ label: "verb", word: "sacrifice (sacrificed)" }], synonyms: ["self-denial"] },
      { word: "unique", bn: "অনন্য, অদ্বিতীয়", pos: "Adjective", forms: [{ label: "noun", word: "uniqueness" }], synonyms: ["unmatched", "singular"], antonyms: ["common", "ordinary"] },
      { word: "wreath", bn: "পুষ্পস্তবক", pos: "Noun", synonyms: ["garland", "floral tribute"] },
    ],
    body: [
      {
        type: "para",
        text: "The 21st of February is a red-letter day in the history of our nation. It is observed in Bangladesh as Shaheed Dibash, or Language Martyrs' Day, and all over the world as International Mother Language Day. The history of the day goes back to 1952. After the partition of India in 1947, the rulers of Pakistan wanted to impose Urdu as the only state language of Pakistan, though Bangla was the mother tongue of the majority of its people. The people of East Bengal, especially the students, protested strongly against this decision and demanded that Bangla also be made a state language. On 21 February 1952, the students of the University of Dhaka brought out a procession defying Section 144. The police opened fire on the peaceful procession, and Salam, Barkat, Rafiq, Jabbar and some others were killed. Their sacrifice made the movement stronger, and at last Bangla was recognised as one of the state languages of Pakistan in 1956. The Language Movement also sowed the seed of our independence. The sacrifice of our language martyrs has earned international recognition. On 17 November 1999, UNESCO declared 21 February International Mother Language Day, and since 2000 the day has been observed in all the member countries of the United Nations. It is a unique honour for our nation, because no other people in the world have laid down their lives for their mother tongue. In Bangladesh the day is observed with due respect. It is a public holiday. From the first hour of the day, people of all walks of life walk barefoot to the Central Shaheed Minar in a procession called Prabhat Feri, singing the immortal song 'Amar bhaiyer rokte rangano Ekushe February', and place wreaths and flowers there. Black flags are hoisted, and the national flag is flown at half-mast. Discussion meetings and cultural programmes are held all over the country. The day teaches us to love our mother tongue and to respect the languages of all other nations.",
      },
    ],
  },
  {
    id: "victory-day",
    title: "Victory Day",
    prompt:
      "Write a paragraph on 'Victory Day' by answering the following questions.",
    hints: [
      "When is Victory Day observed?",
      "What is the history behind the day?",
      "How is the day observed?",
      "What programmes are held on the day?",
      "What is the significance of the day?",
    ],
    vocab: [
      { word: "commemorate", bn: "স্মরণ করা", pos: "Verb", past: "commemorated", pastParticiple: "commemorated", forms: [{ label: "noun", word: "commemoration" }], synonyms: ["honour", "remember"], antonyms: ["forget", "ignore"] },
      { word: "genocide", bn: "গণহত্যা", pos: "Noun", synonyms: ["mass killing", "massacre"] },
      { word: "gun salute", bn: "তোপধ্বনি", pos: "Phrase" },
      { word: "illuminate", bn: "আলোকসজ্জা করা", pos: "Verb", past: "illuminated", pastParticiple: "illuminated", forms: [{ label: "noun", word: "illumination" }], synonyms: ["light up", "brighten"], antonyms: ["darken"] },
      { word: "memorial", bn: "স্মৃতিসৌধ", pos: "Noun", forms: [{ label: "verb", word: "memorialise" }], synonyms: ["monument"] },
      { word: "parade", bn: "কুচকাওয়াজ", pos: "Noun", forms: [{ label: "verb", word: "parade (paraded)" }], synonyms: ["march past", "procession"] },
      { word: "red-letter day", bn: "স্মরণীয় দিন", pos: "Phrase", synonyms: ["memorable day", "special day"] },
      { word: "surrender", bn: "আত্মসমর্পণ করা", pos: "Verb", past: "surrendered", pastParticiple: "surrendered", forms: [{ label: "noun", word: "surrender" }], synonyms: ["give up", "yield"], antonyms: ["resist", "fight"] },
      { word: "tribute", bn: "শ্রদ্ধাঞ্জলি", pos: "Noun", synonyms: ["homage", "honour"] },
    ],
    body: [
      {
        type: "para",
        text: "The 16th of December is the Victory Day of Bangladesh. It is the most glorious day in the history of our nation, because on this day in 1971 we achieved final victory in our War of Liberation. On the night of 25 March 1971, the Pakistani army launched a brutal attack on the unarmed people of Dhaka and began a genocide throughout the country. The next day the independence of Bangladesh was declared, and the people of all classes, such as students, farmers, workers, police, soldiers and many others, joined the war. For nine long months the freedom fighters fought bravely against the well-armed Pakistani army. About three million people laid down their lives, and hundreds of thousands of women lost their honour. At last, on 16 December 1971, the Pakistani forces surrendered to the joint command of the Bangladesh and Indian forces at the Racecourse Maidan in Dhaka, which is now called Suhrawardy Udyan. More than ninety thousand Pakistani soldiers laid down their arms, and Bangladesh emerged as an independent country on the map of the world. Victory Day is observed every year with great enthusiasm and due solemnity. It is a public holiday. The day begins with a 31-gun salute at dawn. The President, the head of the government, political leaders and people of all walks of life pay tribute to the martyrs by placing wreaths at the National Memorial at Savar. The national flag is hoisted on all buildings, and the important buildings and streets are decorated and illuminated at night. A grand parade is held at the National Parade Ground, and discussion meetings, cultural programmes and sports are arranged all over the country. Special prayers are offered in mosques, temples, churches and pagodas for the souls of the martyrs. Newspapers publish special supplements, and radio and television broadcast special programmes. Victory Day reminds us of the supreme sacrifice of our martyrs, and it inspires us to build a peaceful, prosperous and corruption-free Bangladesh.",
      },
    ],
  },
  {
    id: "independence-day",
    title: "Independence Day",
    prompt:
      "Write a paragraph on 'Independence Day' by answering the following questions.",
    hints: [
      "When is Independence Day observed?",
      "What led to the declaration of independence?",
      "How is the day observed?",
      "What programmes are held on the day?",
      "What does the day mean to us?",
    ],
    vocab: [
      { word: "crackdown", bn: "দমন অভিযান", pos: "Noun", synonyms: ["attack", "suppression"] },
      { word: "deprive", bn: "বঞ্চিত করা", pos: "Verb", past: "deprived", pastParticiple: "deprived", forms: [{ label: "noun", word: "deprivation" }], synonyms: ["deny", "rob"], antonyms: ["provide", "give"] },
      { word: "discrimination", bn: "বৈষম্য", pos: "Noun", forms: [{ label: "verb", word: "discriminate" }], synonyms: ["inequality", "injustice"], antonyms: ["equality", "fairness"] },
      { word: "exploitation", bn: "শোষণ", pos: "Noun", forms: [{ label: "verb", word: "exploit" }], synonyms: ["oppression", "abuse"] },
      { word: "hard-earned", bn: "কষ্টার্জিত", pos: "Adjective", synonyms: ["hard-won"] },
      { word: "rally", bn: "সমাবেশ", pos: "Noun", forms: [{ label: "verb", word: "rally (rallied)" }], synonyms: ["gathering", "procession"] },
      { word: "solemnity", bn: "গাম্ভীর্য, ভাবগম্ভীরতা", pos: "Noun", forms: [{ label: "adj", word: "solemn" }], synonyms: ["seriousness", "dignity"], antonyms: ["frivolity"] },
      { word: "unarmed", bn: "নিরস্ত্র", pos: "Adjective", forms: [{ label: "noun", word: "arms" }], synonyms: ["defenceless"], antonyms: ["armed"] },
      { word: "uphold", bn: "সমুন্নত রাখা", pos: "Verb", past: "upheld", pastParticiple: "upheld", synonyms: ["maintain", "protect"], antonyms: ["abandon", "destroy"] },
    ],
    body: [
      {
        type: "para",
        text: "The 26th of March is the Independence Day of Bangladesh. It is also called our National Day, and it is one of the most important days in the history of our nation. From 1947 to 1971, the people of East Pakistan were deprived of their rights by the rulers of West Pakistan. They suffered from discrimination and exploitation in politics, economy, jobs, education and culture. Even their mother tongue was attacked. The people protested again and again, and the movements of 1952, 1966 and 1969 made them more and more united. In the general election of 1970, the leaders of East Pakistan won a clear majority, but the military rulers refused to hand over power to them. Instead, on the dark night of 25 March 1971, the Pakistani army launched a brutal crackdown called Operation Searchlight on the unarmed people of Dhaka and killed thousands of students, teachers, police and common people. In the early hours of 26 March, the independence of Bangladesh was declared, and the whole nation plunged into the War of Liberation, which ended in victory on 16 December 1971. Independence Day is observed every year throughout the country with great enthusiasm and solemnity. It is a public holiday. The day begins with a 31-gun salute at dawn. People of all walks of life go to the National Memorial at Savar and pay tribute to the martyrs of the Liberation War. The national flag is hoisted on all buildings, and the streets and important buildings are decorated with flags and festoons and illuminated at night. Students take part in rallies, and sports, discussion meetings and cultural programmes are held in schools and colleges. Special prayers are offered for the martyrs, and newspapers, radio and television present special programmes. Independence Day reminds us of the great sacrifice of our heroes. It is our duty to uphold our hard-earned independence and to build a Bangladesh free from discrimination, which was the dream of our martyrs.",
      },
    ],
  },
  {
    id: "pahela-baishakh",
    title: "Pahela Baishakh",
    prompt:
      "Write a paragraph on 'Pahela Baishakh' by answering the following questions.",
    hints: [
      "What is Pahela Baishakh?",
      "How did the Bangla calendar begin?",
      "How is the day celebrated in towns?",
      "How is it celebrated in villages?",
      "What is its significance?",
    ],
    vocab: [
      { word: "communal", bn: "সাম্প্রদায়িক", pos: "Adjective", forms: [{ label: "noun", word: "community" }], synonyms: ["sectarian"], antonyms: ["secular", "non-communal"] },
      { word: "festivity", bn: "উৎসব, আনন্দ-উৎসব", pos: "Noun", forms: [{ label: "adj", word: "festive" }, { label: "noun", word: "festival" }], synonyms: ["celebration", "merrymaking"], antonyms: ["mourning"] },
      { word: "halkhata", bn: "হালখাতা (নতুন হিসাবের খাতা খোলা)", pos: "Noun", synonyms: ["new account book"] },
      { word: "heritage", bn: "ঐতিহ্য", pos: "Noun", synonyms: ["tradition", "legacy"] },
      { word: "introduce", bn: "প্রবর্তন করা", pos: "Verb", past: "introduced", pastParticiple: "introduced", forms: [{ label: "noun", word: "introduction" }], synonyms: ["launch", "start"], antonyms: ["abolish", "end"] },
      { word: "procession", bn: "শোভাযাত্রা", pos: "Noun", synonyms: ["parade", "rally"] },
      { word: "revenue", bn: "রাজস্ব, খাজনা", pos: "Noun", synonyms: ["tax", "income"], antonyms: ["expenditure"] },
      { word: "secular", bn: "অসাম্প্রদায়িক, ধর্মনিরপেক্ষ", pos: "Adjective", forms: [{ label: "noun", word: "secularism" }], synonyms: ["non-religious", "non-communal"], antonyms: ["religious", "communal"] },
    ],
    body: [
      {
        type: "para",
        text: "Pahela Baishakh is the first day of the Bangla year, and it is the greatest secular festival of the Bangalees. It falls on 14 April every year. Hundreds of years ago, the Mughal Emperor Akbar introduced the Bangla calendar to make the collection of land revenue easier, because the Hijri calendar did not match the harvest seasons of Bengal. Since then Pahela Baishakh has been celebrated as the beginning of the new year. On this day people forget the sorrows of the past year and welcome the new one with the hope of peace and prosperity. It is a public holiday in Bangladesh. People of all religions and classes celebrate it with great joy. They wear new clothes; women wear white saris with red borders and decorate their hair with flowers, and men wear panjabis. In Dhaka, the celebration begins at dawn under the banyan tree at Ramna Park, where Chhayanaut welcomes the new year with songs, as it has done since 1967. Later in the morning, a colourful procession brought out by the Faculty of Fine Arts of the University of Dhaka moves through the streets with huge masks and figures of birds, animals and folk characters. People have panta bhat with fried hilsha, green chillies and onions, and many fairs, known as Baishakhi melas, are held in different places. Cultural programmes, folk songs and dances continue all day. In the villages, the day is celebrated with village fairs, boat races, bull fights and other folk games. Traders and shopkeepers open halkhata, a new book of accounts. They invite their customers, entertain them with sweets and ask them to clear their old dues. Pahela Baishakh has a great significance in our national life. It unites people of all religions and reminds us of our rich heritage and culture. It is our duty to keep this festival free from all communal ideas and bad practices and to celebrate it in a peaceful way.",
      },
    ],
  },
  {
    id: "may-day",
    title: "May Day",
    prompt:
      "Write a paragraph on 'May Day' by answering the following questions.",
    hints: [
      "What is May Day?",
      "What is the history behind it?",
      "How is the day observed?",
      "What is the condition of workers in Bangladesh?",
      "What is the significance of the day?",
    ],
    vocab: [
      { word: "exploit", bn: "শোষণ করা", pos: "Verb", past: "exploited", pastParticiple: "exploited", forms: [{ label: "noun", word: "exploitation" }], synonyms: ["oppress", "take advantage of"] },
      { word: "labourer", bn: "শ্রমিক", pos: "Noun", forms: [{ label: "noun", word: "labour" }, { label: "adj", word: "laborious" }], synonyms: ["worker"], antonyms: ["employer", "owner"] },
      { word: "martyrdom", bn: "আত্মদান, শহীদ হওয়া", pos: "Noun", forms: [{ label: "noun", word: "martyr" }] },
      { word: "recognition", bn: "স্বীকৃতি", pos: "Noun", forms: [{ label: "verb", word: "recognise" }], synonyms: ["acknowledgement"], antonyms: ["denial"] },
      { word: "safety", bn: "নিরাপত্তা", pos: "Noun", forms: [{ label: "adj", word: "safe" }, { label: "adv", word: "safely" }], synonyms: ["security", "protection"], antonyms: ["danger", "risk"] },
      { word: "strike", bn: "ধর্মঘট", pos: "Noun", forms: [{ label: "verb", word: "strike (struck)" }], synonyms: ["walkout", "stoppage"] },
      { word: "trade union", bn: "শ্রমিক সংগঠন", pos: "Phrase", synonyms: ["labour union"] },
      { word: "tragedy", bn: "মর্মান্তিক ঘটনা, ট্র্যাজেডি", pos: "Noun", forms: [{ label: "adj", word: "tragic" }], synonyms: ["disaster", "calamity"], antonyms: ["comedy", "blessing"] },
      { word: "wage", bn: "মজুরি", pos: "Noun", synonyms: ["pay", "earnings"] },
    ],
    body: [
      {
        type: "para",
        text: "May Day is observed on the 1st of May every year all over the world as International Workers' Day. It is a day of honour for the working people, and it reminds us of the long struggle of workers for their rights. The history of May Day goes back to 1886. At that time, the workers of the mills and factories of America had to work twelve to sixteen hours a day for very low wages, and they had no rest and no safety. On 1 May 1886, thousands of workers in Chicago went on strike, demanding an eight-hour working day. On 4 May, during a rally at Haymarket Square, a bomb exploded and the police opened fire on the workers, killing and wounding many of them. Later some labour leaders were hanged. Their martyrdom did not go in vain. In 1889, an international meeting of workers declared 1 May as Workers' Day, and gradually the demand for an eight-hour working day was accepted all over the world. In Bangladesh May Day is a public holiday. On this day, workers and trade unions bring out rallies and processions with red banners, festoons and placards. Discussion meetings are held, and the leaders speak about the rights and demands of the workers. Newspapers publish special articles, and radio and television broadcast special programmes. However, the condition of the workers in our country is still not good. Many of them, especially in the garment factories, brickfields and construction sites, do not get a fair wage and have to work in unsafe conditions. The Rana Plaza tragedy of 2013, in which more than eleven hundred workers were killed, is a painful example of this. Child labour is also still found in many sectors. May Day teaches us that the workers are the builders of civilisation. They must not be exploited. Their fair wages, safe workplaces and proper dignity must be ensured, because the progress of a nation depends on the welfare of its workers.",
      },
    ],
  },
  {
    id: "drug-addiction",
    title: "Drug Addiction",
    prompt:
      "Write a paragraph on 'Drug Addiction' by answering the following questions.",
    hints: [
      "What is drug addiction?",
      "What are the common drugs?",
      "Why do young people become addicted?",
      "What are the effects of drug addiction?",
      "How can this problem be solved?",
    ],
    vocab: [
      { word: "addict", bn: "মাদকাসক্ত ব্যক্তি", pos: "Noun", forms: [{ label: "noun", word: "addiction" }, { label: "adj", word: "addicted" }], synonyms: ["user", "dependant"] },
      { word: "curiosity", bn: "কৌতূহল", pos: "Noun", forms: [{ label: "adj", word: "curious" }], synonyms: ["eagerness to know", "inquisitiveness"], antonyms: ["indifference"] },
      { word: "frustration", bn: "হতাশা", pos: "Noun", forms: [{ label: "verb", word: "frustrate" }, { label: "adj", word: "frustrated" }], synonyms: ["disappointment", "despair"], antonyms: ["satisfaction", "hope"] },
      { word: "menace", bn: "হুমকি, বিপদ", pos: "Noun", forms: [{ label: "adj", word: "menacing" }], synonyms: ["threat", "danger"], antonyms: ["blessing", "safety"] },
      { word: "peddler", bn: "মাদক বিক্রেতা, ফেরিওয়ালা", pos: "Noun", forms: [{ label: "verb", word: "peddle" }], synonyms: ["dealer", "seller"] },
      { word: "rehabilitation", bn: "পুনর্বাসন", pos: "Noun", forms: [{ label: "verb", word: "rehabilitate" }], synonyms: ["recovery", "restoration"] },
      { word: "smuggle", bn: "চোরাচালান করা", pos: "Verb", past: "smuggled", pastParticiple: "smuggled", forms: [{ label: "noun", word: "smuggler" }, { label: "noun", word: "smuggling" }], synonyms: ["traffic", "bring in illegally"] },
      { word: "unemployment", bn: "বেকারত্ব", pos: "Noun", forms: [{ label: "adj", word: "unemployed" }], synonyms: ["joblessness"], antonyms: ["employment"] },
      { word: "withdrawal", bn: "প্রত্যাহার, মাদক ছাড়ার কষ্ট", pos: "Noun", forms: [{ label: "verb", word: "withdraw" }] },
    ],
    body: [
      {
        type: "para",
        text: "Drug addiction means the habit of taking harmful drugs regularly, so that a person becomes dependent on them and cannot live without them. It has become a great menace to our society, and it is spreading fast among the young generation, even among school and college students. The common drugs used in our country are yaba, phensedyl, heroin, cannabis or ganja, and various kinds of sleeping pills and injections. Most of these drugs are smuggled into the country across the borders, and drug peddlers sell them secretly in towns and even in villages. There are many causes of drug addiction. Many young people start taking drugs out of curiosity or under the influence of bad company. Frustration caused by failure in studies, unemployment, broken families and the lack of love and care of parents also drive them to drugs. Some think that drugs will give them relief from their sorrows and worries, while others take them as a fashion. The easy availability of drugs and the lack of strict enforcement of laws make the situation worse. The effects of drug addiction are terrible. It destroys the health of the addict and damages his brain, lungs, heart, liver and kidneys. He loses his appetite, his memory and his interest in studies and work, and he becomes nervous and irritable. When he does not get drugs, he suffers from painful withdrawal symptoms. To buy drugs, he steals money, sells the things of his house and even gets involved in crimes like theft, robbery and murder. Thus he ruins not only himself but also his family and society. Drug addiction must be stopped. The government should stop the smuggling of drugs and punish the dealers severely. Parents should take care of their children and keep an eye on their friends and activities. Teachers, religious leaders and the media should make people aware of the evils of drugs. Enough rehabilitation centres should be set up to treat the addicts, and they should be treated with sympathy, not hatred, so that they can return to a normal life.",
      },
    ],
  },
  {
    id: "global-warming",
    title: "Global Warming",
    prompt:
      "Write a paragraph on 'Global Warming' by answering the following questions.",
    hints: [
      "What is global warming?",
      "What are the causes of global warming?",
      "What are its effects on the world?",
      "How will it affect Bangladesh?",
      "What can be done to reduce it?",
    ],
    vocab: [
      { word: "atmosphere", bn: "বায়ুমণ্ডল", pos: "Noun", forms: [{ label: "adj", word: "atmospheric" }], synonyms: ["air", "sky"] },
      { word: "deforestation", bn: "বন উজাড়", pos: "Noun", forms: [{ label: "verb", word: "deforest" }], synonyms: ["cutting down of forests"], antonyms: ["afforestation"] },
      { word: "extinct", bn: "বিলুপ্ত", pos: "Adjective", forms: [{ label: "noun", word: "extinction" }], synonyms: ["vanished", "dead"], antonyms: ["living", "surviving"] },
      { word: "glacier", bn: "হিমবাহ", pos: "Noun", forms: [{ label: "adj", word: "glacial" }] },
      { word: "greenhouse gas", bn: "গ্রিনহাউস গ্যাস (তাপ আটকে রাখে এমন গ্যাস)", pos: "Phrase" },
      { word: "low-lying", bn: "নিচু", pos: "Adjective", synonyms: ["low"], antonyms: ["high", "elevated"] },
      { word: "submerge", bn: "নিমজ্জিত করা, ডুবিয়ে দেওয়া", pos: "Verb", past: "submerged", pastParticiple: "submerged", forms: [{ label: "noun", word: "submersion" }], synonyms: ["flood", "sink"], antonyms: ["surface", "emerge"] },
      { word: "threat", bn: "হুমকি", pos: "Noun", forms: [{ label: "verb", word: "threaten" }], synonyms: ["danger", "menace"], antonyms: ["safety", "security"] },
      { word: "trap", bn: "আটকে রাখা", pos: "Verb", past: "trapped", pastParticiple: "trapped", forms: [{ label: "noun", word: "trap" }], synonyms: ["hold", "retain"], antonyms: ["release", "free"] },
    ],
    body: [
      {
        type: "para",
        text: "Global warming means the gradual rise in the average temperature of the earth's surface and its atmosphere. It is one of the most serious problems facing the world today. Scientists say that the average temperature of the earth has already risen by more than one degree Celsius since the nineteenth century, and it is still rising. The main cause of global warming is the increase of greenhouse gases, such as carbon dioxide, methane, nitrous oxide and chlorofluorocarbons, in the atmosphere. These gases trap the heat of the sun that should go back into space, just as the glass of a greenhouse keeps the heat inside. Human beings are mostly responsible for this. Mills, factories, power plants and vehicles burn huge amounts of coal, oil and gas and release carbon dioxide into the air. Deforestation is another cause, because trees absorb carbon dioxide, and when forests are cut down, more of the gas remains in the air. The effects of global warming are very dangerous. The ice of the polar regions and the glaciers of the Himalayas are melting fast, and as a result the sea level is rising. Heat waves, droughts, floods, cyclones and heavy rains are becoming more frequent and severe. Many species of plants and animals are becoming extinct, and diseases like malaria and dengue are spreading to new areas. Bangladesh is one of the worst victims of global warming, as she is a low-lying country. If the sea level rises by one metre, a large part of her coastal land will be submerged and millions of people will lose their homes. Saline water will enter the farmland and destroy crops. To reduce global warming, the use of fossil fuels must be reduced, and renewable energy like solar and wind power should be used more. We must stop cutting down trees and plant more of them. The rich countries, which are mainly responsible, must cut their emissions. Only a united effort of all nations can save the earth from this threat.",
      },
    ],
  },
  {
    id: "natural-calamities-of-bangladesh",
    title: "Natural Calamities of Bangladesh",
    prompt:
      "Write a paragraph on 'Natural Calamities of Bangladesh' by answering the following questions.",
    hints: [
      "What is a natural calamity?",
      "What are the common natural calamities of Bangladesh?",
      "Why is Bangladesh a land of natural calamities?",
      "What are their effects?",
      "How can we reduce the losses?",
    ],
    vocab: [
      { word: "calamity", bn: "দুর্যোগ, বিপর্যয়", pos: "Noun", synonyms: ["disaster", "catastrophe"], antonyms: ["blessing", "boon"] },
      { word: "cyclone shelter", bn: "ঘূর্ণিঝড় আশ্রয়কেন্দ্র", pos: "Phrase" },
      { word: "devastating", bn: "ধ্বংসাত্মক, বিধ্বংসী", pos: "Adjective", forms: [{ label: "verb", word: "devastate" }, { label: "noun", word: "devastation" }], synonyms: ["destructive", "ruinous"], antonyms: ["harmless", "constructive"] },
      { word: "embankment", bn: "বাঁধ", pos: "Noun", synonyms: ["dam", "dyke"] },
      { word: "erosion", bn: "ভাঙন, ক্ষয়", pos: "Noun", forms: [{ label: "verb", word: "erode" }], synonyms: ["wearing away"] },
      { word: "homeless", bn: "গৃহহীন", pos: "Adjective", forms: [{ label: "noun", word: "homelessness" }], synonyms: ["shelterless", "destitute"] },
      { word: "landslide", bn: "ভূমিধস", pos: "Noun", synonyms: ["landslip"] },
      { word: "tidal surge", bn: "জলোচ্ছ্বাস", pos: "Phrase", synonyms: ["storm surge", "tidal wave"] },
      { word: "warning signal", bn: "সতর্ক সংকেত", pos: "Phrase", synonyms: ["alert", "danger signal"] },
    ],
    body: [
      {
        type: "para",
        text: "A natural calamity is a sudden and destructive event caused by nature, over which man has little or no control. Bangladesh is often called a land of natural calamities, because almost every year she is hit by one disaster or another. The common natural calamities of our country are floods, cyclones, tidal surges, river erosion, droughts, tornadoes, nor'westers, earthquakes and landslides. The geographical position of the country is mainly responsible for this. Bangladesh is a low-lying delta with hundreds of rivers, and the waters of the Himalayas flow through it to the Bay of Bengal. So during the monsoon, heavy rain and the water coming down from the upper regions often cause floods. The funnel-shaped coast of the Bay of Bengal draws cyclones and tidal surges towards our coastal districts. Cyclones like Sidr in 2007, Aila in 2009, Amphan in 2020 and Remal in 2024 caused great destruction. River erosion makes thousands of families homeless every year, while the northern districts suffer from drought, and landslides take lives in the hilly areas of Chattogram. Moreover, climate change is making these disasters more frequent and more severe. The effects of natural calamities are devastating. They kill people and cattle, destroy houses, crops, roads and bridges and leave many people homeless and helpless. After a flood or a cyclone, there is a scarcity of food and pure drinking water, and diseases like diarrhoea and cholera break out. The whole economy of the country suffers a great loss. We cannot stop natural calamities, but we can reduce the losses. Strong embankments should be built along the rivers and the coast, and more cyclone shelters should be set up in the coastal areas. The warning signals should reach every person in time, and people should move to safe places when they get them. Trees should be planted along the coast, and rivers should be dredged regularly. Relief and rehabilitation should be arranged quickly for the victims. In fact, with proper preparation, the loss of lives and property can be greatly reduced.",
      },
    ],
  },
  {
    id: "bad-effects-of-smoking",
    title: "Bad Effects of Smoking",
    prompt:
      "Write a paragraph on 'Bad Effects of Smoking' by answering the following questions.",
    hints: [
      "What is smoking?",
      "Why do people smoke?",
      "How does smoking harm the smoker?",
      "How does it harm others?",
      "How can we stop smoking?",
    ],
    vocab: [
      { word: "carcinogenic", bn: "ক্যান্সার সৃষ্টিকারী", pos: "Adjective", forms: [{ label: "noun", word: "carcinogen" }], synonyms: ["cancer-causing"] },
      { word: "fashion", bn: "ফ্যাশন, রীতি", pos: "Noun", forms: [{ label: "adj", word: "fashionable" }], synonyms: ["style", "trend"] },
      { word: "give up", bn: "ত্যাগ করা", pos: "Phrase", synonyms: ["quit", "abandon"], antonyms: ["continue", "take up"] },
      { word: "nicotine", bn: "নিকোটিন (তামাকের বিষাক্ত উপাদান)", pos: "Noun" },
      { word: "passive smoker", bn: "পরোক্ষ ধূমপায়ী", pos: "Phrase", synonyms: ["second-hand smoker"] },
      { word: "poisonous", bn: "বিষাক্ত", pos: "Adjective", forms: [{ label: "noun", word: "poison" }], synonyms: ["toxic", "harmful"], antonyms: ["harmless", "non-toxic"] },
      { word: "prohibit", bn: "নিষিদ্ধ করা", pos: "Verb", past: "prohibited", pastParticiple: "prohibited", forms: [{ label: "noun", word: "prohibition" }], synonyms: ["ban", "forbid"], antonyms: ["allow", "permit"] },
      { word: "tobacco", bn: "তামাক", pos: "Noun" },
      { word: "wastage", bn: "অপচয়", pos: "Noun", forms: [{ label: "verb", word: "waste" }, { label: "adj", word: "wasteful" }], synonyms: ["waste", "squandering"], antonyms: ["saving", "economy"] },
    ],
    body: [
      {
        type: "para",
        text: "Smoking means inhaling the smoke of burning tobacco through cigarettes, bidis, cigars, pipes or hookahs. It is a very bad habit, and it is harmful in every respect. Yet millions of people all over the world, including many young people of our country, are addicted to it. People start smoking for different reasons. Many teenagers begin it out of curiosity, or to imitate their elders, film heroes and friends, or simply to look smart and grown-up. Some think it removes their worries and tension, and some take it as a fashion. But once a person starts smoking, he becomes addicted to the nicotine in tobacco and finds it very hard to give it up. The bad effects of smoking are many. Tobacco smoke contains thousands of chemicals, many of which are poisonous and carcinogenic. Smoking causes cancer of the lungs, mouth and throat, as well as heart disease, stroke, bronchitis, asthma and tuberculosis. It weakens the lungs, reduces the appetite, stains the teeth and makes the breath smell bad. According to the World Health Organization, tobacco kills more than eight million people every year, and in Bangladesh too it causes the death of more than a lakh of people a year. Smoking does not harm the smoker alone. The people around him, called passive smokers, also inhale the smoke and suffer from the same diseases, and children and pregnant women suffer the most. Besides, smoking is a great wastage of money, especially for a poor man who spends on cigarettes the money that should buy food for his family. It also pollutes the air and sometimes causes fires. Smoking often leads young people to more harmful drugs. Therefore, smoking should be stopped. The law that prohibits smoking in public places must be strictly enforced, and the sale of tobacco to children must be stopped. The tax on tobacco products should be raised further. Above all, people should be made aware of its bad effects, and smokers should have the strong will to give up this deadly habit.",
      },
    ],
  },
  {
    id: "my-last-day-at-school",
    title: "My Last Day at School",
    prompt:
      "Write a paragraph on 'My Last Day at School' by answering the following questions.",
    hints: [
      "When was your last day at school?",
      "How was the farewell arranged?",
      "What did the teachers say?",
      "How did you and your friends feel?",
      "Why will you always remember the day?",
    ],
    vocab: [
      { word: "bid farewell", bn: "বিদায় জানানো", pos: "Phrase", synonyms: ["say goodbye"], antonyms: ["welcome"] },
      { word: "blessing", bn: "আশীর্বাদ, দোয়া", pos: "Noun", forms: [{ label: "verb", word: "bless" }], synonyms: ["good wishes", "prayer"], antonyms: ["curse"] },
      { word: "choke", bn: "রুদ্ধ হওয়া (কণ্ঠ)", pos: "Verb", past: "choked", pastParticiple: "choked", synonyms: ["stifle", "suffocate"] },
      { word: "gloomy", bn: "বিষণ্ণ", pos: "Adjective", forms: [{ label: "noun", word: "gloom" }], synonyms: ["sad", "dismal"], antonyms: ["cheerful", "bright"] },
      { word: "juniors", bn: "অনুজ শিক্ষার্থীরা", pos: "Noun", forms: [{ label: "adj", word: "junior" }], synonyms: ["younger students"], antonyms: ["seniors"] },
      { word: "mixed feelings", bn: "মিশ্র অনুভূতি", pos: "Phrase" },
      { word: "nostalgic", bn: "স্মৃতিকাতর", pos: "Adjective", forms: [{ label: "noun", word: "nostalgia" }], synonyms: ["sentimental", "wistful"] },
      { word: "precious", bn: "মূল্যবান", pos: "Adjective", synonyms: ["valuable", "dear"], antonyms: ["worthless", "cheap"] },
      { word: "sincerely", bn: "আন্তরিকভাবে", pos: "Adverb", forms: [{ label: "adj", word: "sincere" }, { label: "noun", word: "sincerity" }], synonyms: ["honestly", "earnestly"], antonyms: ["insincerely"] },
    ],
    body: [
      {
        type: "para",
        text: "Our school life is the happiest and most precious part of our life, and so the last day at school is a day of mixed feelings for every student. My last day at school came a few weeks before our SSC examination, when the students of Class Nine arranged a farewell ceremony for us. I got up early that morning, but my mind was heavy and gloomy. I put on my school uniform for the last time and reached school a little before ten o'clock. The school had been decorated beautifully with flowers, festoons and colourful paper, and a stage had been set up in the hall. The ceremony started with a recitation from the holy books. Our headmaster presided over it, and all our teachers were present. The juniors welcomed us with flowers and gave each of us a gift and a book. Then some of our teachers spoke. They advised us to be honest, sincere and disciplined in life, to study hard and to be good human beings. They reminded us that we would carry the good name of the school wherever we went. Our headmaster's voice choked when he blessed us and wished us success in the examination and in life. Then one of my classmates and I spoke on behalf of the outgoing students. When I stood up to speak, I could hardly control my tears. I remembered the happy days of the last ten years, the classes, the games, the picnics, the annual sports and the little quarrels with friends, and I thanked our teachers for their love and care. After the speeches, a short cultural programme was held, and lunch was served. At last, we took photographs with our teachers and friends and bid farewell to them. Many of us, including me, could not hold back our tears. As I walked out of the gate, I looked back at the school building again and again. The day made me feel nostalgic and sad, but it also inspired me to begin a new chapter of life, and I shall never forget it.",
      },
    ],
  },
  {
    id: "dowry-system",
    title: "Dowry System",
    prompt:
      "Write a paragraph on 'Dowry System' by answering the following questions.",
    hints: [
      "What is dowry?",
      "Why does the dowry system still exist?",
      "How do women suffer because of it?",
      "What does the law say about dowry?",
      "How can the dowry system be stopped?",
    ],
    vocab: [
      { word: "curse", bn: "অভিশাপ", pos: "Noun", forms: [{ label: "adj", word: "cursed" }], synonyms: ["bane", "evil"], antonyms: ["blessing", "boon"] },
      { word: "demand", bn: "দাবি করা", pos: "Verb", past: "demanded", pastParticiple: "demanded", forms: [{ label: "noun", word: "demand" }], synonyms: ["claim", "ask for"], antonyms: ["give", "offer"] },
      { word: "divorce", bn: "তালাক, বিবাহবিচ্ছেদ", pos: "Noun", forms: [{ label: "verb", word: "divorce (divorced)" }], synonyms: ["separation"], antonyms: ["marriage"] },
      { word: "greed", bn: "লোভ", pos: "Noun", forms: [{ label: "adj", word: "greedy" }], synonyms: ["avarice"], antonyms: ["contentment", "generosity"] },
      { word: "illiteracy", bn: "নিরক্ষরতা", pos: "Noun", forms: [{ label: "adj", word: "illiterate" }], synonyms: ["lack of education"], antonyms: ["literacy", "education"] },
      { word: "offence", bn: "অপরাধ", pos: "Noun", forms: [{ label: "verb", word: "offend" }, { label: "noun", word: "offender" }], synonyms: ["crime", "wrongdoing"] },
      { word: "self-reliant", bn: "স্বাবলম্বী", pos: "Adjective", forms: [{ label: "noun", word: "self-reliance" }], synonyms: ["independent", "self-sufficient"], antonyms: ["dependent"] },
      { word: "social evil", bn: "সামাজিক ব্যাধি", pos: "Phrase", synonyms: ["social curse"] },
      { word: "torture", bn: "নির্যাতন করা", pos: "Verb", past: "tortured", pastParticiple: "tortured", forms: [{ label: "noun", word: "torture" }], synonyms: ["torment", "abuse"], antonyms: ["comfort", "protect"] },
    ],
    body: [
      {
        type: "para",
        text: "Dowry means the money, goods or property that the bride's family gives to the bridegroom or his family at the time of marriage, often because they demand it. The dowry system is one of the worst social evils of our country. It is a curse for the poor and helpless families who have daughters. Though it is a crime by law, it is still practised in many parts of the country, both in villages and in towns. There are many reasons behind it. The main reason is the greed of the bridegroom and his family, who look upon marriage as a means of getting rich overnight. Illiteracy, poverty, unemployment and the wrong belief that a woman is a burden on her family also keep the system alive. Many parents give dowry willingly because they fear that their daughter will not be married or will not be happy in her new home without it. Some rich families give huge amounts of gifts to show off their wealth, which encourages others to demand dowry. The effects of the dowry system are terrible. Many poor parents sell their land and cattle or borrow money at high interest to give dowry, and thus they become penniless. Many girls remain unmarried because their parents cannot afford it. After marriage, if the promised dowry is not paid in full, the husband and his family often torture the bride physically and mentally. Some women are divorced or driven out of the house, and some are even killed or forced to commit suicide. The newspapers report such heart-breaking incidents almost every day. In Bangladesh, giving and taking dowry is a punishable offence under the Dowry Prohibition Act. But law alone cannot remove this evil. Women must be educated and made self-reliant, so that they are not regarded as a burden. The young generation should come forward and refuse to marry with dowry. Social and religious leaders and the media should create awareness against it, and the law must be strictly enforced. Then only can we free our society from this curse.",
      },
    ],
  },
  {
    id: "noise-pollution",
    title: "Noise Pollution",
    prompt:
      "Write a paragraph on 'Noise Pollution' by answering the following questions.",
    hints: [
      "What is noise pollution?",
      "What are the sources of noise pollution?",
      "What is the situation in our cities?",
      "What are its bad effects?",
      "How can noise pollution be controlled?",
    ],
    vocab: [
      { word: "deafness", bn: "বধিরতা", pos: "Noun", forms: [{ label: "adj", word: "deaf" }, { label: "verb", word: "deafen" }], synonyms: ["hearing loss"] },
      { word: "decibel", bn: "ডেসিবেল (শব্দের মাত্রার একক)", pos: "Noun" },
      { word: "honk", bn: "হর্ন বাজানো", pos: "Verb", past: "honked", pastParticiple: "honked", forms: [{ label: "noun", word: "honk" }], synonyms: ["hoot", "blow the horn"] },
      { word: "hydraulic horn", bn: "হাইড্রোলিক হর্ন (উচ্চ শব্দের হর্ন)", pos: "Phrase" },
      { word: "irritable", bn: "খিটখিটে", pos: "Adjective", forms: [{ label: "verb", word: "irritate" }, { label: "noun", word: "irritation" }], synonyms: ["short-tempered", "bad-tempered"], antonyms: ["calm", "good-humoured"] },
      { word: "silent zone", bn: "নীরব এলাকা", pos: "Phrase", synonyms: ["quiet area"] },
      { word: "sleeplessness", bn: "অনিদ্রা", pos: "Noun", forms: [{ label: "adj", word: "sleepless" }], synonyms: ["insomnia"], antonyms: ["sound sleep"] },
      { word: "tolerable", bn: "সহনীয়", pos: "Adjective", forms: [{ label: "verb", word: "tolerate" }, { label: "noun", word: "tolerance" }], synonyms: ["bearable", "acceptable"], antonyms: ["intolerable", "unbearable"] },
      { word: "unwanted", bn: "অবাঞ্ছিত", pos: "Adjective", synonyms: ["unwelcome", "undesirable"], antonyms: ["wanted", "desirable"] },
    ],
    body: [
      {
        type: "para",
        text: "Noise pollution means the presence of loud and unwanted sound in the environment that harms the health and peace of human beings and other living things. Sound is measured in decibels, and doctors say that a sound of more than about 60 decibels for a long time is harmful to us. Noise pollution has become a serious problem, especially in the cities of Bangladesh, though many people are not even aware of it. There are many sources of noise pollution. The main source is the traffic in the streets. Buses, trucks, cars, motorcycles and even rickshaws honk their horns needlessly and continuously, and many vehicles use hydraulic horns, which are extremely loud. Mills and factories, construction work, brick-breaking machines and generators also create a great deal of noise. Loudspeakers and microphones used in political meetings, religious programmes, weddings and other social functions make the situation worse, and aircraft and trains add to it. In Dhaka and other big cities, the level of noise in many areas is often far above the tolerable limit, even near hospitals and schools, which are supposed to be silent zones. The bad effects of noise pollution are many. It can cause partial or complete deafness. It causes headache, high blood pressure, heart disease, sleeplessness and mental stress. People become irritable and short-tempered, and they cannot concentrate on their work. Students cannot study properly, patients cannot rest, and babies and old people suffer the most. Noise pollution can be controlled if we are sincere. The use of hydraulic horns must be banned completely, and drivers should be trained not to blow their horns unnecessarily. The areas around hospitals, schools and offices should be declared silent zones and the rules strictly enforced. Mills and factories should be built far from residential areas, and the use of loudspeakers should be limited. Above all, people should be made aware that noise is also a kind of pollution, and each of us should be careful not to disturb others.",
      },
    ],
  },
  {
    id: "banning-of-polythene-bags",
    title: "Banning of Polythene Bags",
    prompt:
      "Write a paragraph on 'Banning of Polythene Bags' by answering the following questions.",
    hints: [
      "What is polythene and why did it become popular?",
      "How does it harm the environment?",
      "When and why were polythene bags banned in Bangladesh?",
      "Why is the ban not fully effective?",
      "What should be done to make the ban a success?",
    ],
    vocab: [
      { word: "alternative", bn: "বিকল্প", pos: "Noun", forms: [{ label: "adj", word: "alternative" }, { label: "adv", word: "alternatively" }], synonyms: ["substitute", "option"] },
      { word: "biodegradable", bn: "প্রাকৃতিকভাবে পচনশীল", pos: "Adjective", synonyms: ["decomposable"], antonyms: ["non-biodegradable"] },
      { word: "clog", bn: "আটকে দেওয়া, বন্ধ করা", pos: "Verb", past: "clogged", pastParticiple: "clogged", synonyms: ["block", "choke"], antonyms: ["clear", "open"] },
      { word: "decompose", bn: "পচে যাওয়া", pos: "Verb", past: "decomposed", pastParticiple: "decomposed", forms: [{ label: "noun", word: "decomposition" }], synonyms: ["rot", "decay"] },
      { word: "drainage", bn: "পানি নিষ্কাশন ব্যবস্থা", pos: "Noun", forms: [{ label: "verb", word: "drain" }], synonyms: ["sewerage"] },
      { word: "enforce", bn: "কার্যকর করা, প্রয়োগ করা", pos: "Verb", past: "enforced", pastParticiple: "enforced", forms: [{ label: "noun", word: "enforcement" }], synonyms: ["apply", "implement"], antonyms: ["neglect", "ignore"] },
      { word: "fertility", bn: "উর্বরতা", pos: "Noun", forms: [{ label: "adj", word: "fertile" }, { label: "verb", word: "fertilise" }], synonyms: ["productivity", "richness"], antonyms: ["barrenness", "infertility"] },
      { word: "jute", bn: "পাট", pos: "Noun" },
      { word: "waterlogging", bn: "জলাবদ্ধতা", pos: "Noun", forms: [{ label: "adj", word: "waterlogged" }], synonyms: ["stagnation of water"] },
    ],
    body: [
      {
        type: "para",
        text: "Polythene is a kind of plastic that is light, cheap, strong and waterproof. For these qualities polythene bags became very popular in our country within a short time, and people began to use them to carry almost everything, from fish and vegetables to clothes and medicine. But this convenient thing has turned into a great threat to our environment. Polythene is not biodegradable; it does not rot or decompose even after hundreds of years. Used bags are thrown here and there and clog the drains and sewerage lines, which causes waterlogging in the cities after even a little rain. This was one of the main reasons behind the terrible flood in Dhaka in 1998. When polythene gets mixed with the soil, it reduces the fertility of the land and prevents the roots of plants from growing. It pollutes rivers, canals and the sea, and fish, birds and cattle die after swallowing it. When it is burnt, it releases poisonous gases that pollute the air. Considering these harmful effects, the government of Bangladesh banned the production, sale and use of polythene shopping bags in 2002, and Bangladesh became one of the first countries in the world to take such a step. The use of jute bags was also made compulsory for many products by law in 2010. At first the ban worked well, but gradually polythene bags came back to the markets. The main reasons are the lack of strict enforcement of the law, the lack of cheap alternatives and the lack of public awareness. Many factories still produce polythene secretly, and shopkeepers and buyers use it because it is cheap and handy. In recent years the government has started new drives against polythene in supermarkets and kitchen markets. To make the ban a success, the law must be strictly enforced and the illegal factories closed. Cheap and eco-friendly alternatives, such as jute, cloth and paper bags, should be made easily available. Above all, people should be made aware of the dangers of polythene and should carry their own bags when they go shopping.",
      },
    ],
  },
];
