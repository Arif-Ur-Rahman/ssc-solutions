// components/lettersData.ts
//
// Personal letters to friends and family on the topics the board repeats
// most, laid out the way the examiner expects: place and date, salutation,
// the body, then the subscription and name.

import type { Piece } from "./englishData";

export const personalLetters: Piece[] = [
  {
    id: "letter-plan-after-ssc",
    title: "Letter to a Friend about Your Plan after the SSC Examination",
    prompt:
      "Write a letter to your friend describing what you intend to do after your SSC examination.",
    vocab: [
      { word: "anxious", bn: "উদ্বিগ্ন", pos: "Adjective", forms: [{ label: "noun", word: "anxiety" }, { label: "adv", word: "anxiously" }], synonyms: ["worried", "uneasy"], antonyms: ["calm", "relaxed"] },
      { word: "idle", bn: "অলস, কর্মহীন", pos: "Adjective", forms: [{ label: "noun", word: "idleness" }, { label: "adv", word: "idly" }], synonyms: ["lazy", "inactive"], antonyms: ["busy", "active"] },
      { word: "illiterate", bn: "নিরক্ষর", pos: "Adjective", forms: [{ label: "noun", word: "illiteracy" }], synonyms: ["unlettered", "uneducated"], antonyms: ["literate", "educated"] },
      { word: "intend", bn: "ইচ্ছা করা, মনস্থ করা", pos: "Verb", past: "intended", pastParticiple: "intended", forms: [{ label: "noun", word: "intention" }], synonyms: ["plan", "mean"], antonyms: ["abandon"] },
      { word: "utilise", bn: "কাজে লাগানো", pos: "Verb", past: "utilised", pastParticiple: "utilised", forms: [{ label: "noun", word: "utilisation" }], synonyms: ["use", "make use of"], antonyms: ["waste", "misuse"] },
    ],
    body: [
      { type: "label", text: "Cumilla" },
      { type: "label", text: "20 February 2027" },
      { type: "label", text: "My dear Shuvo" },
      {
        type: "para",
        text: "I got your letter yesterday. You wanted to know what I intend to do after the SSC examination. Our examination will be over by the middle of March, and the result will not come out before May. So we shall have about three months in hand. I do not want to waste this long vacation.",
      },
      {
        type: "para",
        text: "First, I shall take a few days' rest and visit my grandparents in the village. Then I shall join a computer course at a training centre in our town, because computer skills are a must in the modern world. I also want to improve my spoken English, so I shall practise it every day with my cousin who studies at a university.",
      },
      {
        type: "para",
        text: "There are many illiterate people in our village. I intend to start a small evening school there and teach some of them to read and write. I shall also read some good books of literature which I could not read before because of the pressure of study. Towards the end of the vacation I shall start preparing for college admission.",
      },
      {
        type: "para",
        text: "I believe an idle mind is the devil's workshop, and so I want to utilise every day of this holiday. Please write to me about your own plan. Convey my regards to your parents.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Rafi" },
    ],
  },
  {
    id: "letter-about-bangladesh-to-pen-friend",
    title: "Letter to a Pen Friend about Bangladesh and Her People",
    prompt:
      "Write a letter to your foreign pen friend describing your country and her people.",
    vocab: [
      { word: "delta", bn: "ব-দ্বীপ", pos: "Noun", forms: [{ label: "adj", word: "deltaic" }], synonyms: ["river mouth land"] },
      { word: "hospitable", bn: "অতিথিপরায়ণ", pos: "Adjective", forms: [{ label: "noun", word: "hospitality" }], synonyms: ["welcoming", "friendly"], antonyms: ["unfriendly", "inhospitable"] },
      { word: "mangrove", bn: "ম্যানগ্রোভ, লোনা পানির বন", pos: "Noun", synonyms: ["tidal forest"] },
      { word: "panoramic", bn: "মনোরম, বিস্তৃত দৃশ্যের", pos: "Adjective", forms: [{ label: "noun", word: "panorama" }], synonyms: ["sweeping", "scenic"] },
      { word: "sea beach", bn: "সমুদ্রসৈকত", pos: "Phrase", synonyms: ["seashore", "coast"] },
      { word: "unbroken", bn: "অবিচ্ছিন্ন", pos: "Adjective", synonyms: ["continuous", "uninterrupted"], antonyms: ["broken", "interrupted"] },
    ],
    body: [
      { type: "label", text: "Dhaka" },
      { type: "label", text: "10 January 2026" },
      { type: "label", text: "Dear Emily" },
      {
        type: "para",
        text: "I was very glad to get your letter. You have asked me to write about my country and her people. So I am writing to tell you about Bangladesh.",
      },
      {
        type: "para",
        text: "Bangladesh is a small country in South Asia, but it has a population of about seventeen crore. It is a land of rivers. The Padma, the Meghna and the Jamuna, with their hundreds of branches, flow through it and form the largest delta in the world. The country is green with crops and trees, and it has six seasons, each with its own beauty. We have the Sundarbans, the largest mangrove forest in the world and the home of the Royal Bengal Tiger. Cox's Bazar has the longest unbroken sea beach in the world, and the hills of Sylhet and the Chattogram Hill Tracts have a panoramic beauty.",
      },
      {
        type: "para",
        text: "Most of our people live in villages and depend on agriculture. Rice and fish are our main food. The people are simple, peace-loving and very hospitable. People of different religions live here side by side. We are proud of our language, Bangla, for which many young men gave their lives on 21 February 1952. That day is now observed all over the world as International Mother Language Day. We achieved our independence in 1971 through a war of liberation.",
      },
      {
        type: "para",
        text: "I hope you will visit Bangladesh one day and see it for yourself. Please write to me about your country. My best wishes to you and your family.",
      },
      { type: "label", text: "Yours sincerely" },
      { type: "label", text: "Nabila" },
    ],
  },
  {
    id: "letter-about-co-curricular-activities",
    title: "Letter to a Friend about the Co-curricular Activities of Your School",
    prompt:
      "Write a letter to your friend about the co-curricular activities of your school.",
    vocab: [
      { word: "all-round", bn: "সার্বিক, সর্বাঙ্গীণ", pos: "Adjective", synonyms: ["complete", "overall"], antonyms: ["one-sided", "partial"] },
      { word: "co-curricular", bn: "সহপাঠক্রমিক", pos: "Adjective", synonyms: ["extracurricular"] },
      { word: "leadership", bn: "নেতৃত্ব", pos: "Noun", forms: [{ label: "noun", word: "leader" }, { label: "verb", word: "lead (led)" }], synonyms: ["guidance", "command"] },
      { word: "scout", bn: "স্কাউট দলের সদস্য", pos: "Noun", forms: [{ label: "noun", word: "scouting" }], synonyms: ["cadet"] },
      { word: "wall magazine", bn: "দেয়ালপত্রিকা", pos: "Phrase", synonyms: ["wall paper"] },
    ],
    body: [
      { type: "label", text: "Sylhet" },
      { type: "label", text: "15 July 2026" },
      { type: "label", text: "My dear Tuhin" },
      {
        type: "para",
        text: "I hope you are well. In your last letter you asked me about the co-curricular activities of my school. I am glad to tell you that my school is well known not only for its good results but also for its rich co-curricular life.",
      },
      {
        type: "para",
        text: "Games and sports hold the first place. We play football and cricket in the afternoon, and our annual sports are held every January. There is a debating club which holds a debate every month, and I am one of its members. We have a science club that arranges a science fair every year, and a computer club where we learn programming. We also publish a wall magazine twice a year, and students write poems, stories and essays for it.",
      },
      {
        type: "para",
        text: "The scout and the Red Crescent teams of our school are very active. They help people during floods and serve at public functions. We also observe the national days with cultural programmes, and a picnic or a study tour is arranged every winter.",
      },
      {
        type: "para",
        text: "These activities help us grow in body and mind. They teach us discipline, leadership and teamwork, which books alone cannot teach. They are a part of all-round education. Please write about your school too. Give my love to your little brother.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Arman" },
    ],
  },
  {
    id: "letter-thanking-for-birthday-present",
    title: "Letter Thanking a Friend for a Birthday Present",
    prompt:
      "Write a letter to your friend thanking him or her for the birthday present sent to you.",
    vocab: [
      { word: "cherish", bn: "সযত্নে লালন করা", pos: "Verb", past: "cherished", pastParticiple: "cherished", synonyms: ["treasure", "value"], antonyms: ["neglect", "disregard"] },
      { word: "delighted", bn: "আনন্দিত", pos: "Adjective", forms: [{ label: "noun", word: "delight" }], synonyms: ["pleased", "glad"], antonyms: ["sad", "displeased"] },
      { word: "precious", bn: "মূল্যবান", pos: "Adjective", synonyms: ["valuable", "dear"], antonyms: ["worthless", "cheap"] },
      { word: "priceless", bn: "অমূল্য", pos: "Adjective", synonyms: ["invaluable", "beyond price"], antonyms: ["worthless"] },
      { word: "token", bn: "নিদর্শন, চিহ্ন", pos: "Noun", synonyms: ["sign", "symbol"] },
    ],
    body: [
      { type: "label", text: "Rajshahi" },
      { type: "label", text: "5 April 2026" },
      { type: "label", text: "My dear Mitu" },
      {
        type: "para",
        text: "I received your beautiful birthday present yesterday afternoon. It was a copy of Rabindranath Tagore's Gitanjali with a lovely card inside. I cannot tell you how delighted I was to get it. Thank you very much for remembering my birthday even from so far away.",
      },
      {
        type: "para",
        text: "Of all the presents I got this year, yours is the most precious to me. You know how much I love poetry, and you chose exactly the book I have long wanted to have. I have already read some of the poems, and they have touched my heart. The words you wrote on the first page make it even dearer to me.",
      },
      {
        type: "para",
        text: "A present is valued not for its price but for the love behind it. Your gift is a token of our friendship, which is priceless to me. I shall cherish it all my life.",
      },
      {
        type: "para",
        text: "I missed you very much at the party. I hope you will be able to come during the next vacation. Convey my salam to your parents.",
      },
      { type: "label", text: "Yours lovingly" },
      { type: "label", text: "Sumaiya" },
    ],
  },
  {
    id: "letter-on-physical-exercise",
    title: "Letter to Your Younger Brother about the Importance of Physical Exercise",
    prompt:
      "Write a letter to your younger brother about the importance of physical exercise.",
    vocab: [
      { word: "blood circulation", bn: "রক্ত সঞ্চালন", pos: "Phrase", forms: [{ label: "verb", word: "circulate (circulated)" }], synonyms: ["flow of blood"] },
      { word: "cheerful", bn: "প্রফুল্ল", pos: "Adjective", forms: [{ label: "noun", word: "cheerfulness" }, { label: "adv", word: "cheerfully" }], synonyms: ["merry", "happy"], antonyms: ["gloomy", "sad"] },
      { word: "digestion", bn: "হজম", pos: "Noun", forms: [{ label: "verb", word: "digest (digested)" }], synonyms: ["breaking down food"], antonyms: ["indigestion"] },
      { word: "sickly", bn: "রোগাটে", pos: "Adjective", synonyms: ["unhealthy", "weak"], antonyms: ["healthy", "robust"] },
      { word: "sound", bn: "সুস্থ, নীরোগ", pos: "Adjective", forms: [{ label: "noun", word: "soundness" }], synonyms: ["healthy", "fit"], antonyms: ["unsound", "unhealthy"] },
      { word: "stamina", bn: "সহনশক্তি", pos: "Noun", synonyms: ["endurance", "strength"], antonyms: ["weakness", "frailty"] },
    ],
    body: [
      { type: "label", text: "Dhaka" },
      { type: "label", text: "18 March 2026" },
      { type: "label", text: "My dear Rashed" },
      {
        type: "para",
        text: "I got a letter from Mother yesterday. She wrote that you have been falling sick very often and that you spend all your time either with books or with your mobile phone. You hardly go out to play. I am worried about you, so I am writing to tell you about the importance of physical exercise.",
      },
      {
        type: "para",
        text: "Health is wealth, and physical exercise is the key to good health. It makes our muscles strong and increases our stamina. It improves blood circulation and digestion, and it helps us sleep well. A person who takes regular exercise does not fall ill easily. Besides, a sound mind lives in a sound body. Exercise keeps the mind fresh and cheerful, and so it helps us concentrate on our studies.",
      },
      {
        type: "para",
        text: "You need not do anything hard. Walk for half an hour in the morning, do some free-hand exercise, or play football or badminton with your friends in the afternoon. Swimming is also an excellent exercise. But do not overdo it, and do it regularly.",
      },
      {
        type: "para",
        text: "I hope you will follow my advice and not remain a sickly boy. Take care of yourself and give my salam to our parents.",
      },
      { type: "label", text: "Your loving brother" },
      { type: "label", text: "Rahim" },
    ],
  },
  {
    id: "letter-inviting-friend-for-summer-vacation",
    title: "Letter Inviting a Friend to Spend the Summer Vacation with You",
    prompt:
      "Write a letter to your friend inviting him or her to spend the summer vacation with you in your village.",
    vocab: [
      { word: "angle", bn: "বড়শি দিয়ে মাছ ধরা", pos: "Verb", past: "angled", pastParticiple: "angled", forms: [{ label: "noun", word: "angler" }], synonyms: ["fish with a rod"] },
      { word: "bustle", bn: "কোলাহল, হইচই", pos: "Noun", forms: [{ label: "adj", word: "bustling" }], synonyms: ["commotion", "hurry"], antonyms: ["calm", "peace"] },
      { word: "orchard", bn: "ফলের বাগান", pos: "Noun", synonyms: ["fruit garden"] },
      { word: "ripe", bn: "পাকা", pos: "Adjective", forms: [{ label: "verb", word: "ripen (ripened)" }], synonyms: ["mature"], antonyms: ["raw", "unripe"] },
      { word: "serene", bn: "প্রশান্ত", pos: "Adjective", forms: [{ label: "noun", word: "serenity" }], synonyms: ["calm", "peaceful"], antonyms: ["noisy", "disturbed"] },
    ],
    body: [
      { type: "label", text: "Dinajpur" },
      { type: "label", text: "1 May 2026" },
      { type: "label", text: "My dear Jamil" },
      {
        type: "para",
        text: "I hope this letter finds you well. Our school will close for the summer vacation next week, and I think yours will close at the same time. I have a request to make: please come and spend the vacation with us in our village.",
      },
      {
        type: "para",
        text: "You have always lived in the city and have never seen village life closely. This is the best season to visit us. Our orchard is full of ripe mangoes and litchis, and jackfruits are hanging from the trees. We shall swim in the big pond behind our house, angle in the river and wander in the green fields. In the evening we shall sit under the moonlit sky and listen to Grandfather's stories. You will find the serene life here a relief from the bustle of Dhaka.",
      },
      {
        type: "para",
        text: "My parents also want you to come. I have already asked your parents on the phone, and they have agreed. Take the night coach to Dinajpur and let me know the date. I shall wait for you at the bus stand.",
      },
      {
        type: "para",
        text: "Do not disappoint me. My best regards to your parents.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Nayeem" },
    ],
  },
  {
    id: "letter-advising-brother-to-avoid-evil-company",
    title: "Letter Advising Your Younger Brother to Avoid Evil Company",
    prompt:
      "Write a letter to your younger brother advising him to avoid evil company.",
    vocab: [
      { word: "company", bn: "সঙ্গ, সঙ্গী", pos: "Noun", forms: [{ label: "noun", word: "companion" }], synonyms: ["friends", "fellowship"] },
      { word: "corrupt", bn: "কলুষিত করা, নষ্ট করা", pos: "Verb", past: "corrupted", pastParticiple: "corrupted", forms: [{ label: "noun", word: "corruption" }], synonyms: ["spoil", "ruin"], antonyms: ["purify", "improve"] },
      { word: "deviate", bn: "বিচ্যুত হওয়া", pos: "Verb", past: "deviated", pastParticiple: "deviated", forms: [{ label: "noun", word: "deviation" }], synonyms: ["stray", "go astray"], antonyms: ["keep to", "follow"] },
      { word: "evil", bn: "মন্দ", pos: "Adjective", forms: [{ label: "noun", word: "evil" }], synonyms: ["bad", "wicked"], antonyms: ["good", "virtuous"] },
      { word: "influence", bn: "প্রভাব", pos: "Noun", forms: [{ label: "verb", word: "influence (influenced)" }, { label: "adj", word: "influential" }], synonyms: ["effect", "impact"] },
      { word: "ruin", bn: "ধ্বংস করা", pos: "Verb", past: "ruined", pastParticiple: "ruined", forms: [{ label: "noun", word: "ruin" }], synonyms: ["destroy", "wreck"], antonyms: ["build", "save"] },
    ],
    body: [
      { type: "label", text: "Chattogram" },
      { type: "label", text: "9 August 2026" },
      { type: "label", text: "My dear Sajib" },
      {
        type: "para",
        text: "I have come to know from Father that you have fallen into the company of some bad boys of our area. You do not come home till late at night, and you have been neglecting your studies. Your result in the half-yearly examination was very poor. This news has made me deeply worried.",
      },
      {
        type: "para",
        text: "A man is known by the company he keeps. Evil company is like a disease; it corrupts a man before he knows it. Many bright students have ruined their lives in this way. They start with idle talk and gossip, then they learn to smoke, and at last many of them become drug addicts. Once a person deviates from the right path, it is very difficult for him to return.",
      },
      {
        type: "para",
        text: "On the other hand, good company is a blessing. It inspires us to be good and to work hard. So choose your friends carefully. Mix with those who are honest and serious about their studies. Spend your leisure in reading good books or playing games.",
      },
      {
        type: "para",
        text: "You are a clever boy, and our parents have great hopes in you. I hope you will not let them down. Give up those boys at once and pay attention to your studies. Take care of yourself.",
      },
      { type: "label", text: "Your loving brother" },
      { type: "label", text: "Sajjad" },
    ],
  },
  {
    id: "letter-thanking-for-hospitality",
    title: "Letter Thanking a Friend for Hospitality",
    prompt:
      "Write a letter to your friend thanking him or her for the hospitality you received during your stay at his or her house.",
    vocab: [
      { word: "cordial", bn: "আন্তরিক", pos: "Adjective", forms: [{ label: "adv", word: "cordially" }, { label: "noun", word: "cordiality" }], synonyms: ["warm", "hearty"], antonyms: ["cold", "unfriendly"] },
      { word: "hospitality", bn: "আতিথেয়তা", pos: "Noun", forms: [{ label: "adj", word: "hospitable" }], synonyms: ["welcome", "friendliness"], antonyms: ["hostility", "unfriendliness"] },
      { word: "indebted", bn: "ঋণী, কৃতজ্ঞ", pos: "Adjective", forms: [{ label: "noun", word: "debt" }], synonyms: ["grateful", "obliged"], antonyms: ["ungrateful"] },
      { word: "memorable", bn: "স্মরণীয়", pos: "Adjective", forms: [{ label: "noun", word: "memory" }], synonyms: ["unforgettable"], antonyms: ["forgettable", "ordinary"] },
      { word: "reciprocate", bn: "প্রতিদান দেওয়া", pos: "Verb", past: "reciprocated", pastParticiple: "reciprocated", forms: [{ label: "adj", word: "reciprocal" }], synonyms: ["return", "repay"] },
    ],
    body: [
      { type: "label", text: "Narayanganj" },
      { type: "label", text: "12 January 2026" },
      { type: "label", text: "My dear Riya" },
      {
        type: "para",
        text: "I reached home safely yesterday evening. Before anything else, I want to thank you and your family for the warm hospitality I received during my week-long stay at your house in Srimangal.",
      },
      {
        type: "para",
        text: "Your parents treated me like their own daughter. Your mother cooked so many delicious dishes for me that I have surely gained a few kilograms. Your father took us to the tea gardens, the Lawachara forest and the Madhabpur lake. Your little brother was my constant companion. Everyone was so cordial that I never felt I was away from home.",
      },
      {
        type: "para",
        text: "The days I spent with you will remain among the most memorable days of my life. I am deeply indebted to your family for all the care and love. I hope I shall get the chance to reciprocate it when you come to visit us.",
      },
      {
        type: "para",
        text: "Please convey my heartfelt thanks and salam to your parents and my love to Rohan.",
      },
      { type: "label", text: "Yours lovingly" },
      { type: "label", text: "Maliha" },
    ],
  },
  {
    id: "letter-about-prize-giving-ceremony",
    title: "Letter to a Friend Describing the Annual Prize-giving Ceremony of Your School",
    prompt:
      "Write a letter to your friend describing the annual prize-giving ceremony of your school.",
    vocab: [
      { word: "applause", bn: "করতালি", pos: "Noun", forms: [{ label: "verb", word: "applaud (applauded)" }], synonyms: ["clapping", "cheering"], antonyms: ["booing"] },
      { word: "ceremony", bn: "অনুষ্ঠান", pos: "Noun", forms: [{ label: "adj", word: "ceremonial" }], synonyms: ["function", "programme"] },
      { word: "chief guest", bn: "প্রধান অতিথি", pos: "Phrase", synonyms: ["guest of honour"] },
      { word: "decorate", bn: "সাজানো", pos: "Verb", past: "decorated", pastParticiple: "decorated", forms: [{ label: "noun", word: "decoration" }], synonyms: ["adorn", "beautify"], antonyms: ["spoil", "strip"] },
      { word: "preside", bn: "সভাপতিত্ব করা", pos: "Verb", past: "presided", pastParticiple: "presided", forms: [{ label: "noun", word: "president" }], synonyms: ["chair", "lead"] },
      { word: "recitation", bn: "আবৃত্তি", pos: "Noun", forms: [{ label: "verb", word: "recite (recited)" }], synonyms: ["reading aloud"] },
    ],
    body: [
      { type: "label", text: "Faridpur" },
      { type: "label", text: "28 January 2026" },
      { type: "label", text: "My dear Mishu" },
      {
        type: "para",
        text: "I hope you are well. I am writing to tell you about the annual prize-giving ceremony of our school, which was held last Thursday. It was a day I shall never forget.",
      },
      {
        type: "para",
        text: "The school was beautifully decorated with flowers, festoons and coloured paper. A large pandal was set up on the playground, and guardians and guests began to arrive from two in the afternoon. The Deputy Commissioner of Faridpur was the chief guest, and our Headmaster presided over the function. The programme began with recitation from the holy scriptures and the national anthem. Then the Headmaster read out the annual report of the school.",
      },
      {
        type: "para",
        text: "After that the chief guest gave away the prizes to those who had done well in studies, sports and cultural competitions. I got two prizes, one for standing first in class nine and another for recitation. I was filled with joy as I went up to the stage amid loud applause. In his speech, the chief guest advised us to be honest and to work hard. The function ended with a cultural programme in the evening.",
      },
      {
        type: "para",
        text: "I wish you had been there. Please write to me about your school. My regards to your parents.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Anika" },
    ],
  },
  {
    id: "letter-of-condolence",
    title: "Letter of Condolence to a Friend on the Death of the Father",
    prompt:
      "Write a letter to your friend expressing your condolence at the death of his or her father.",
    vocab: [
      { word: "bereavement", bn: "প্রিয়জন হারানোর শোক", pos: "Noun", forms: [{ label: "adj", word: "bereaved" }], synonyms: ["loss", "grief"] },
      { word: "condolence", bn: "সমবেদনা", pos: "Noun", forms: [{ label: "verb", word: "condole (condoled)" }], synonyms: ["sympathy", "consolation"] },
      { word: "console", bn: "সান্ত্বনা দেওয়া", pos: "Verb", past: "consoled", pastParticiple: "consoled", forms: [{ label: "noun", word: "consolation" }], synonyms: ["comfort", "soothe"], antonyms: ["distress", "upset"] },
      { word: "irreparable", bn: "অপূরণীয়", pos: "Adjective", forms: [{ label: "verb", word: "repair" }], synonyms: ["irreplaceable"], antonyms: ["reparable", "curable"] },
      { word: "shocked", bn: "মর্মাহত", pos: "Adjective", forms: [{ label: "noun", word: "shock" }], synonyms: ["stunned", "grieved"], antonyms: ["unmoved"] },
      { word: "soul", bn: "আত্মা", pos: "Noun", synonyms: ["spirit"], antonyms: ["body"] },
    ],
    body: [
      { type: "label", text: "Bogura" },
      { type: "label", text: "4 September 2026" },
      { type: "label", text: "My dear Rahat" },
      {
        type: "para",
        text: "I was deeply shocked to hear of the sudden death of your father. I could not believe the news at first. I can well understand how heavy this loss is for you and your family, and I have no words to console you.",
      },
      {
        type: "para",
        text: "Your father was a kind and honest man. Whenever I visited your house, he received me with a smile and treated me as his own son. He was loved and respected by all in your area for his simple life and his readiness to help others. His death is an irreparable loss not only to your family but also to the whole community.",
      },
      {
        type: "para",
        text: "But death is the law of nature, and no one can escape it. We must accept the will of the Almighty with patience. Now you are the eldest son, and your mother and younger sisters will look to you for strength. You must be brave for their sake and not neglect your studies, for that is what your father wanted most.",
      },
      {
        type: "para",
        text: "I pray to the Almighty for the peace of his departed soul and for the strength of your family to bear this bereavement. I shall come to see you next week.",
      },
      { type: "label", text: "Yours in grief" },
      { type: "label", text: "Tareq" },
    ],
  },
  {
    id: "letter-about-celebrating-21-february",
    title: "Letter to a Friend about How You Celebrated 21st February",
    prompt:
      "Write a letter to your friend describing how you celebrated the last 21st February, the International Mother Language Day.",
    vocab: [
      { word: "barefoot", bn: "খালি পায়ে", pos: "Adverb", synonyms: ["without shoes"], antonyms: ["shod"] },
      { word: "martyr", bn: "শহিদ", pos: "Noun", forms: [{ label: "noun", word: "martyrdom" }], synonyms: ["one who dies for a cause"] },
      { word: "procession", bn: "শোভাযাত্রা, মিছিল", pos: "Noun", forms: [{ label: "verb", word: "proceed" }], synonyms: ["rally", "march"] },
      { word: "sacrifice", bn: "আত্মত্যাগ", pos: "Noun", forms: [{ label: "verb", word: "sacrifice (sacrificed)" }], synonyms: ["self-denial", "giving up"] },
      { word: "Shaheed Minar", bn: "শহিদ মিনার", pos: "Noun", synonyms: ["martyrs' monument"] },
      { word: "wreath", bn: "পুষ্পস্তবক", pos: "Noun", synonyms: ["garland", "floral ring"] },
    ],
    body: [
      { type: "label", text: "Dhaka" },
      { type: "label", text: "25 February 2026" },
      { type: "label", text: "My dear Salma" },
      {
        type: "para",
        text: "I hope you are well. You wanted to know how we celebrated the last 21st February. I am writing to tell you about it.",
      },
      {
        type: "para",
        text: "On the night of 20 February we decorated our school Shaheed Minar with flowers and alpana. At midnight we gathered there with lighted candles. We got up very early in the morning and joined the Prabhat Ferry. With black badges on our chests, we walked barefoot to the Central Shaheed Minar singing the immortal song 'Amar bhaiyer rokte rangano Ekushey February'. We laid a wreath at the foot of the Minar in memory of the language martyrs. Thousands of people had come there with flowers, and the whole place looked like a sea of flowers.",
      },
      {
        type: "para",
        text: "In the afternoon our school held a discussion meeting on the history of the Language Movement. Our teachers told us how Salam, Barkat, Rafiq, Jabbar and others laid down their lives in 1952 for our mother tongue. Then there was a cultural programme with songs, recitation and a short drama. I recited a poem there.",
      },
      {
        type: "para",
        text: "It made me proud to think that the whole world now observes this day as International Mother Language Day. We must never forget the sacrifice of the martyrs. Please write to me about how you celebrated the day.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Priya" },
    ],
  },
  {
    id: "letter-advising-friend-to-give-up-smoking",
    title: "Letter Advising a Friend to Give Up Smoking",
    prompt:
      "Write a letter to your friend who has taken to smoking, advising him to give it up.",
    vocab: [
      { word: "cancer", bn: "ক্যান্সার", pos: "Noun", forms: [{ label: "adj", word: "cancerous" }], synonyms: ["malignant tumour"] },
      { word: "determination", bn: "দৃঢ় সংকল্প", pos: "Noun", forms: [{ label: "verb", word: "determine (determined)" }], synonyms: ["resolve", "firmness"], antonyms: ["weakness", "indecision"] },
      { word: "habit", bn: "অভ্যাস", pos: "Noun", forms: [{ label: "adj", word: "habitual" }], synonyms: ["practice", "custom"] },
      { word: "injurious", bn: "ক্ষতিকর", pos: "Adjective", forms: [{ label: "noun", word: "injury" }], synonyms: ["harmful", "damaging"], antonyms: ["harmless", "beneficial"] },
      { word: "take to", bn: "অভ্যস্ত হয়ে পড়া", pos: "Phrase", synonyms: ["start", "become addicted to"], antonyms: ["give up"] },
    ],
    body: [
      { type: "label", text: "Khulna" },
      { type: "label", text: "30 June 2026" },
      { type: "label", text: "My dear Arif" },
      {
        type: "para",
        text: "I hope you are well. But I was very sorry to hear from a common friend that you have taken to smoking. I could hardly believe it, because you have always been a sensible boy. As your friend, I feel it my duty to write to you about it.",
      },
      {
        type: "para",
        text: "Smoking is injurious to health. Tobacco contains nicotine and many other poisonous substances. It damages the lungs and the heart and causes cancer, bronchitis and many other diseases. It shortens one's life. Besides, it harms the people around the smoker, who have to breathe in the smoke. It is also a waste of money. And a person who smokes often moves on to more harmful drugs.",
      },
      {
        type: "para",
        text: "You have just started, so it will not be hard for you to give it up if you are determined. Stay away from friends who smoke, keep yourself busy with studies and games, and whenever you feel the urge, remind yourself of the harm it does. With a little determination you can easily get rid of this habit.",
      },
      {
        type: "para",
        text: "I hope you will take my advice in the right spirit and give up smoking at once. Write back soon.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Fahad" },
    ],
  },
  {
    id: "letter-to-mother-about-hostel-life",
    title: "Letter to Your Mother about Your Hostel Life",
    prompt:
      "You have recently got a seat in your school hostel. Write a letter to your mother describing your hostel life.",
    vocab: [
      { word: "adjust", bn: "মানিয়ে নেওয়া", pos: "Verb", past: "adjusted", pastParticiple: "adjusted", forms: [{ label: "noun", word: "adjustment" }], synonyms: ["adapt", "get used to"], antonyms: ["resist"] },
      { word: "dining hall", bn: "খাবার ঘর", pos: "Phrase", synonyms: ["mess hall"] },
      { word: "discipline", bn: "শৃঙ্খলা", pos: "Noun", forms: [{ label: "adj", word: "disciplined" }], synonyms: ["order", "control"], antonyms: ["indiscipline", "disorder"] },
      { word: "homesick", bn: "বাড়ির জন্য মন কেমন করা", pos: "Adjective", forms: [{ label: "noun", word: "homesickness" }], synonyms: ["missing home"] },
      { word: "self-reliant", bn: "আত্মনির্ভরশীল", pos: "Adjective", forms: [{ label: "noun", word: "self-reliance" }], synonyms: ["independent"], antonyms: ["dependent"] },
      { word: "superintendent", bn: "তত্ত্বাবধায়ক", pos: "Noun", synonyms: ["supervisor", "warden"] },
    ],
    body: [
      { type: "label", text: "Rajshahi" },
      { type: "label", text: "20 April 2026" },
      { type: "label", text: "My dear Mother" },
      {
        type: "para",
        text: "Please accept my salam. I hope you and Father are well. I am quite well here. It is now two weeks since I came to the hostel, and I am writing to tell you how I am living here.",
      },
      {
        type: "para",
        text: "Life in the hostel is regular and full of discipline. We get up at dawn and say our prayers. After a short walk we sit down to study till breakfast. School begins at ten. In the afternoon we play games on the field, and after dusk we study again under the guidance of a teacher. Dinner is served in the dining hall at nine, and the lights go out at eleven. The superintendent is strict but very kind to us.",
      },
      {
        type: "para",
        text: "I share a room with two boys of my class, Rahat and Sumon. They are gentle and studious, and we help one another with our lessons. The food is simple but clean, though it cannot be compared with your cooking. I am learning to wash my clothes and keep my things in order. I think hostel life is making me self-reliant.",
      },
      {
        type: "para",
        text: "At first I felt homesick and missed you all very much. But now I have adjusted to the new life. Please do not worry about me. Give my love to Nila, and pray for me.",
      },
      { type: "label", text: "Your loving son" },
      { type: "label", text: "Nahid" },
    ],
  },
  {
    id: "letter-about-picnic-to-historical-place",
    title: "Letter to a Friend Describing a Picnic at a Historical Place",
    prompt:
      "Write a letter to your friend describing a picnic you enjoyed at a place of historical interest.",
    vocab: [
      { word: "archaeological", bn: "প্রত্নতাত্ত্বিক", pos: "Adjective", forms: [{ label: "noun", word: "archaeology" }], synonyms: ["relating to ancient remains"] },
      { word: "excavate", bn: "খনন করা", pos: "Verb", past: "excavated", pastParticiple: "excavated", forms: [{ label: "noun", word: "excavation" }], synonyms: ["dig out", "unearth"], antonyms: ["bury", "fill in"] },
      { word: "monastery", bn: "বৌদ্ধ বিহার, মঠ", pos: "Noun", forms: [{ label: "adj", word: "monastic" }], synonyms: ["vihara", "cloister"] },
      { word: "relic", bn: "ধ্বংসাবশেষ, স্মৃতিচিহ্ন", pos: "Noun", synonyms: ["remains", "antiquity"] },
      { word: "terracotta", bn: "পোড়ামাটির শিল্প", pos: "Noun", synonyms: ["baked clay"] },
    ],
    body: [
      { type: "label", text: "Rangpur" },
      { type: "label", text: "22 December 2026" },
      { type: "label", text: "My dear Tamanna" },
      {
        type: "para",
        text: "I hope you are well. After our annual examination our school arranged a picnic to Paharpur in Naogaon last Friday. I enjoyed it so much that I cannot help writing to you about it.",
      },
      {
        type: "para",
        text: "Sixty of us left the school in two buses at seven in the morning, with four of our teachers. We sang songs and cracked jokes all the way and reached Paharpur at about ten. After breakfast we went round the place. Paharpur has the ruins of the Somapura Mahavihara, a great Buddhist monastery built in the eighth century by King Dharmapala. It was excavated by the archaeologists, and it is now a World Heritage Site. We saw the huge central temple, the rows of monks' cells and the beautiful terracotta plaques on the walls. We also visited the museum, where coins, images and other relics found there are kept.",
      },
      {
        type: "para",
        text: "At lunchtime we had rice, chicken curry and sweets under the trees. In the afternoon we played some games, and there was a lottery. We started for home at four and returned in the evening, tired but happy.",
      },
      {
        type: "para",
        text: "The picnic was not only a pleasure but also a lesson in our history. I wish you had been with us. Give my regards to your parents.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Lamia" },
    ],
  },
  {
    id: "letter-on-how-to-improve-english",
    title: "Letter to a Friend about How to Improve English",
    prompt:
      "Your friend is weak in English. Write a letter to him or her telling how to improve it.",
    vocab: [
      { word: "consult", bn: "পরামর্শ নেওয়া, দেখে নেওয়া", pos: "Verb", past: "consulted", pastParticiple: "consulted", forms: [{ label: "noun", word: "consultation" }], synonyms: ["refer to", "look up"], antonyms: ["ignore"] },
      { word: "diary", bn: "দিনলিপি", pos: "Noun", synonyms: ["journal", "daily record"] },
      { word: "memorise", bn: "মুখস্থ করা", pos: "Verb", past: "memorised", pastParticiple: "memorised", forms: [{ label: "noun", word: "memory" }], synonyms: ["learn by heart"], antonyms: ["forget"] },
      { word: "pronunciation", bn: "উচ্চারণ", pos: "Noun", forms: [{ label: "verb", word: "pronounce (pronounced)" }], synonyms: ["articulation"] },
      { word: "rote learning", bn: "না বুঝে মুখস্থ করা", pos: "Phrase", synonyms: ["cramming"], antonyms: ["understanding"] },
    ],
    body: [
      { type: "label", text: "Gazipur" },
      { type: "label", text: "14 August 2026" },
      { type: "label", text: "My dear Mahi" },
      {
        type: "para",
        text: "I got your letter yesterday. You wrote that you are weak in English and are worried about the SSC examination. Do not lose heart. English is not as hard as you think, and with regular practice anyone can improve it. Let me give you some advice.",
      },
      {
        type: "para",
        text: "First, do not depend on rote learning. Learn grammar by understanding the rules and then practise them with plenty of exercises. Second, read something in English every day. It may be a newspaper, a storybook or your textbook. Note down the new words, consult a dictionary for their meanings and pronunciation, and use them in sentences of your own. Third, write regularly. Keep a diary in English, or write a paragraph every day and show it to your teacher.",
      },
      {
        type: "para",
        text: "Speaking is also important. Try to talk in English with your friends at least for a while every day, and do not be afraid of making mistakes. Listening to English news on radio or television will help you with pronunciation.",
      },
      {
        type: "para",
        text: "If you follow this advice for a few months, I am sure you will see the difference yourself. Best wishes for your examination.",
      },
      { type: "label", text: "Yours ever" },
      { type: "label", text: "Rumana" },
    ],
  },
];
