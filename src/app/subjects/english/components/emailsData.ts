// components/emailsData.ts
//
// Emails the board repeats most beyond the two kept in englishData.ts:
// personal emails to friends and family first, then the formal ones to an
// institution or a business, which close with "Yours faithfully".

import type { Piece } from "./englishData";

export const moreEmails: Piece[] = [
  {
    id: "email-congratulating-on-success",
    title: "Email Congratulating a Friend on Brilliant Success",
    prompt:
      "Write an email to your friend congratulating him or her on the brilliant result in the SSC examination.",
    vocab: [
      { word: "brilliant", bn: "চমৎকার, উজ্জ্বল", pos: "Adjective", forms: [{ label: "noun", word: "brilliance" }, { label: "adv", word: "brilliantly" }], synonyms: ["excellent", "outstanding"], antonyms: ["poor", "dull"] },
      { word: "congratulate", bn: "অভিনন্দন জানানো", pos: "Verb", past: "congratulated", pastParticiple: "congratulated", forms: [{ label: "noun", word: "congratulation" }], synonyms: ["felicitate", "compliment"], antonyms: ["criticise"] },
      { word: "devotion", bn: "নিষ্ঠা", pos: "Noun", forms: [{ label: "verb", word: "devote (devoted)" }, { label: "adj", word: "devoted" }], synonyms: ["dedication", "commitment"], antonyms: ["indifference"] },
      { word: "overjoyed", bn: "অত্যন্ত আনন্দিত", pos: "Adjective", synonyms: ["delighted", "thrilled"], antonyms: ["sad", "unhappy"] },
      { word: "perseverance", bn: "অধ্যবসায়", pos: "Noun", forms: [{ label: "verb", word: "persevere (persevered)" }], synonyms: ["persistence", "diligence"], antonyms: ["laziness", "idleness"] },
    ],
    body: [
      { type: "label", text: "From: tanjila.akter07@gmail.com" },
      { type: "label", text: "To: ruhi.chowdhury@gmail.com" },
      { type: "label", text: "Subject: Congratulations on your brilliant result" },
      { type: "label", text: "Dear Ruhi" },
      {
        type: "para",
        text: "I have just seen your SSC result on the board's website, and I could not wait a minute to write to you. You have got GPA 5 in all subjects and have stood first in your school. Heartiest congratulations! I am overjoyed at your success.",
      },
      {
        type: "para",
        text: "I am not surprised, though. I have seen how hard you worked for the last two years. You never wasted a day, and you studied with devotion even when the rest of us were busy with games and television. Your success is the fruit of your perseverance, and you deserve every bit of it. Your parents and teachers must be very proud of you.",
      },
      {
        type: "para",
        text: "This is only the beginning of a long journey. I hope you will do even better in the HSC examination and fulfil your dream of becoming an engineer. Please give my congratulations to your parents too.",
      },
      {
        type: "para",
        text: "We must celebrate this. I shall come to your house next Friday, and you must treat me with sweets.",
      },
      { type: "label", text: "With love" },
      { type: "label", text: "Tanjila" },
    ],
  },
  {
    id: "email-how-to-do-well-in-exam",
    title: "Email Suggesting a Friend How to Do Well in the Examination",
    prompt:
      "Write an email to your friend suggesting how to do well in the coming SSC examination.",
    vocab: [
      { word: "allot", bn: "বরাদ্দ করা", pos: "Verb", past: "allotted", pastParticiple: "allotted", forms: [{ label: "noun", word: "allotment" }], synonyms: ["assign", "allocate"], antonyms: ["withhold"] },
      { word: "legible", bn: "স্পষ্ট, পাঠযোগ্য", pos: "Adjective", forms: [{ label: "adv", word: "legibly" }, { label: "noun", word: "legibility" }], synonyms: ["clear", "readable"], antonyms: ["illegible", "unreadable"] },
      { word: "nervous", bn: "ঘাবড়ানো, উদ্বিগ্ন", pos: "Adjective", forms: [{ label: "noun", word: "nervousness" }, { label: "adv", word: "nervously" }], synonyms: ["anxious", "tense"], antonyms: ["calm", "confident"] },
      { word: "revision", bn: "পুনরাবৃত্তি, রিভিশন", pos: "Noun", forms: [{ label: "verb", word: "revise (revised)" }], synonyms: ["review", "going over"] },
      { word: "stay up", bn: "রাত জাগা", pos: "Phrase", synonyms: ["keep awake"], antonyms: ["go to bed"] },
    ],
    body: [
      { type: "label", text: "From: sadia.islam10@gmail.com" },
      { type: "label", text: "To: mim.ahmed22@gmail.com" },
      { type: "label", text: "Subject: Some tips for the SSC examination" },
      { type: "label", text: "Dear Mim" },
      {
        type: "para",
        text: "I got your email this morning. You wrote that you are feeling nervous as the SSC examination is drawing near. Do not worry. Almost everyone feels like this before a big examination. Let me share some tips which have helped me.",
      },
      {
        type: "para",
        text: "First, make a routine for the remaining days and follow it strictly. Allot more time to the subjects you are weak in, but do not ignore the others. Second, do not try to learn anything new now. Revise what you have already learnt, and solve the board questions of the last few years with a watch in front of you. This will help you manage time in the examination hall.",
      },
      {
        type: "para",
        text: "In the hall, read the questions carefully before you begin. Answer the ones you know best first. Write neatly and legibly, and keep ten minutes at the end to check your answers. Never waste time on a question you cannot answer.",
      },
      {
        type: "para",
        text: "Above all, take care of your health. Do not stay up late at night, eat properly and take a little rest every day. A fresh mind remembers much more than a tired one. Keep calm and trust yourself. I am sure you will do well.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Sadia" },
    ],
  },
  {
    id: "email-describing-road-accident",
    title: "Email to a Friend Describing a Road Accident You Witnessed",
    prompt:
      "Write an email to your friend describing a road accident that you witnessed recently.",
    vocab: [
      { word: "collide", bn: "সংঘর্ষ হওয়া", pos: "Verb", past: "collided", pastParticiple: "collided", forms: [{ label: "noun", word: "collision" }], synonyms: ["crash", "hit"], antonyms: ["miss", "avoid"] },
      { word: "overtake", bn: "অতিক্রম করে সামনে যাওয়া", pos: "Verb", past: "overtook", pastParticiple: "overtaken", synonyms: ["pass", "go ahead of"], antonyms: ["fall behind"] },
      { word: "reckless", bn: "বেপরোয়া", pos: "Adjective", forms: [{ label: "adv", word: "recklessly" }, { label: "noun", word: "recklessness" }], synonyms: ["careless", "rash"], antonyms: ["careful", "cautious"] },
      { word: "spot", bn: "ঘটনাস্থল", pos: "Noun", synonyms: ["place", "site"] },
      { word: "tragic", bn: "মর্মান্তিক", pos: "Adjective", forms: [{ label: "noun", word: "tragedy" }], synonyms: ["sad", "heartbreaking"], antonyms: ["happy", "joyful"] },
      { word: "unconscious", bn: "অচেতন", pos: "Adjective", forms: [{ label: "noun", word: "unconsciousness" }], synonyms: ["senseless", "insensible"], antonyms: ["conscious", "awake"] },
    ],
    body: [
      { type: "label", text: "From: jubayer.hossain@gmail.com" },
      { type: "label", text: "To: sifat.rahman05@gmail.com" },
      { type: "label", text: "Subject: A terrible road accident I saw" },
      { type: "label", text: "Dear Sifat" },
      {
        type: "para",
        text: "I hope you are well. I am writing to tell you about a terrible road accident that I witnessed last Sunday. I still cannot get the scene out of my mind.",
      },
      {
        type: "para",
        text: "I was returning home from school at about two in the afternoon and was waiting to cross the Dhaka–Aricha highway near our town. Two buses were racing each other at a very high speed. One of them tried to overtake the other and suddenly collided head-on with a CNG auto-rickshaw coming from the opposite direction. The auto-rickshaw was crushed at once. The bus then went off the road and fell into a roadside ditch.",
      },
      {
        type: "para",
        text: "It was a tragic sight. The driver of the auto-rickshaw and one passenger died on the spot, and many bus passengers were seriously injured. Some were lying unconscious. People rushed to help, and we carried the injured to the upazila health complex in rickshaws and vans. The bus driver fled from the spot.",
      },
      {
        type: "para",
        text: "Such accidents happen every day in our country because of reckless driving, unskilled drivers, unfit vehicles and our own carelessness in crossing roads. The traffic laws must be strictly enforced. Please be careful whenever you are on the road.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Jubayer" },
    ],
  },
  {
    id: "email-inviting-to-picnic",
    title: "Email Inviting a Friend to Join a Picnic",
    prompt:
      "Write an email to your friend inviting him or her to join a picnic arranged by your class.",
    vocab: [
      { word: "arrange", bn: "আয়োজন করা", pos: "Verb", past: "arranged", pastParticiple: "arranged", forms: [{ label: "noun", word: "arrangement" }], synonyms: ["organise", "plan"], antonyms: ["cancel"] },
      { word: "contribution", bn: "চাঁদা, অবদান", pos: "Noun", forms: [{ label: "verb", word: "contribute (contributed)" }], synonyms: ["share", "subscription"] },
      { word: "raffle draw", bn: "লটারি", pos: "Phrase", synonyms: ["lottery"] },
      { word: "scenic", bn: "দৃশ্যমনোহর", pos: "Adjective", forms: [{ label: "noun", word: "scenery" }], synonyms: ["picturesque", "beautiful"], antonyms: ["dull", "ugly"] },
      { word: "tea garden", bn: "চা-বাগান", pos: "Phrase", synonyms: ["tea estate"] },
    ],
    body: [
      { type: "label", text: "From: omar.faruk.ssc@gmail.com" },
      { type: "label", text: "To: nahian.kabir@gmail.com" },
      { type: "label", text: "Subject: Invitation to our picnic" },
      { type: "label", text: "Dear Nahian" },
      {
        type: "para",
        text: "I hope you are enjoying your winter vacation. I have some good news. Our class has arranged a picnic to Jaflong on 20 December, and I want you to join us.",
      },
      {
        type: "para",
        text: "Jaflong is one of the most scenic places in the country. The river Piyain flows over stones there, with the green hills of Meghalaya in the background. On the way we shall also visit a tea garden. We shall start from our school at seven in the morning by a reserved bus and return by eight in the evening. There will be games, songs and a raffle draw with some attractive prizes.",
      },
      {
        type: "para",
        text: "The contribution is eight hundred taka, which covers the bus fare, breakfast and lunch. Our class teacher has allowed each of us to bring one guest, so you are most welcome. I have already told your mother about it, and she has no objection.",
      },
      {
        type: "para",
        text: "Please let me know by Monday so that I can book a seat for you. I am sure we shall have a wonderful day together.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Omar" },
    ],
  },
  {
    id: "email-asking-to-return-book",
    title: "Email Asking a Friend to Return a Book",
    prompt:
      "Your friend borrowed a book from you some time ago. Write an email asking him or her to return it as soon as possible.",
    vocab: [
      { word: "borrow", bn: "ধার নেওয়া", pos: "Verb", past: "borrowed", pastParticiple: "borrowed", forms: [{ label: "noun", word: "borrower" }], synonyms: ["take on loan"], antonyms: ["lend", "return"] },
      { word: "courier", bn: "কুরিয়ার সার্ভিস", pos: "Noun", synonyms: ["parcel service"] },
      { word: "in no time", bn: "অবিলম্বে", pos: "Phrase", synonyms: ["very soon", "at once"], antonyms: ["late", "slowly"] },
      { word: "out of print", bn: "মুদ্রণ শেষ, বাজারে পাওয়া যায় না", pos: "Phrase", synonyms: ["unavailable"], antonyms: ["in print", "available"] },
      { word: "reluctant", bn: "অনিচ্ছুক", pos: "Adjective", forms: [{ label: "noun", word: "reluctance" }, { label: "adv", word: "reluctantly" }], synonyms: ["unwilling", "hesitant"], antonyms: ["willing", "eager"] },
    ],
    body: [
      { type: "label", text: "From: rahul.das@gmail.com" },
      { type: "label", text: "To: sourav.saha14@gmail.com" },
      { type: "label", text: "Subject: Please return my test paper book" },
      { type: "label", text: "Dear Sourav" },
      {
        type: "para",
        text: "I hope you are well. I am a little reluctant to write this email, but I have no other choice. You may remember that you borrowed my book of SSC test papers last month and promised to return it within two weeks.",
      },
      {
        type: "para",
        text: "Our test examination begins on the 15th of next month, and I need the book urgently to practise the mathematics and English questions. I have tried to buy another copy, but this edition is out of print and not available in any bookshop in our town.",
      },
      {
        type: "para",
        text: "So I request you to return the book in no time. If you cannot come to our house, please send it by courier or leave it with Rana, who lives near you. I shall pay the courier charge.",
      },
      {
        type: "para",
        text: "Please do not mind my asking. I hope you understand my situation. All the best for your preparation.",
      },
      { type: "label", text: "Best regards" },
      { type: "label", text: "Rahul" },
    ],
  },
  {
    id: "email-to-mother-after-recovery",
    title: "Email to Your Mother about How You Feel after Recovery from Illness",
    prompt:
      "You have recently recovered from an illness. Write an email to your mother telling her how you feel now.",
    vocab: [
      { word: "convalescence", bn: "আরোগ্যলাভের সময়", pos: "Noun", forms: [{ label: "adj", word: "convalescent" }], synonyms: ["recovery period"] },
      { word: "diet", bn: "পথ্য, খাদ্যাভ্যাস", pos: "Noun", forms: [{ label: "adj", word: "dietary" }], synonyms: ["food", "nourishment"] },
      { word: "prescribe", bn: "ব্যবস্থাপত্র দেওয়া", pos: "Verb", past: "prescribed", pastParticiple: "prescribed", forms: [{ label: "noun", word: "prescription" }], synonyms: ["advise", "recommend"] },
      { word: "recover", bn: "সুস্থ হওয়া", pos: "Verb", past: "recovered", pastParticiple: "recovered", forms: [{ label: "noun", word: "recovery" }], synonyms: ["get well", "recuperate"], antonyms: ["worsen", "relapse"] },
      { word: "typhoid", bn: "টাইফয়েড জ্বর", pos: "Noun", synonyms: ["enteric fever"] },
    ],
    body: [
      { type: "label", text: "From: maisha.tabassum@gmail.com" },
      { type: "label", text: "To: nasrin.sultana61@gmail.com" },
      { type: "label", text: "Subject: I am feeling much better now" },
      { type: "label", text: "Dear Mother" },
      {
        type: "para",
        text: "Assalamu Alaikum. I know you have been very worried about me since I fell ill, so I am writing to give you the good news that I have fully recovered from typhoid. The doctor examined me yesterday and said that I no longer need any medicine.",
      },
      {
        type: "para",
        text: "I still feel a little weak, and my appetite has not fully come back. The doctor says this is normal during convalescence and that I shall be all right within a week or two. He has prescribed a light but nourishing diet of rice, fish, vegetables, fruit and milk, and plenty of rest. Aunt is taking great care of me and makes soup for me every evening.",
      },
      {
        type: "para",
        text: "I have missed a few classes, but my friends are helping me with the notes, and I have started studying for two or three hours a day. I shall go back to school from next Sunday.",
      },
      {
        type: "para",
        text: "Please do not worry about me any more. Give my salam to Father and my love to Tuba. Pray for me.",
      },
      { type: "label", text: "Your loving daughter" },
      { type: "label", text: "Maisha" },
    ],
  },
  {
    id: "email-advising-brother-regular-studies",
    title: "Email Advising Your Younger Brother to Be Regular in Studies",
    prompt:
      "Write an email to your younger brother advising him to be regular in his studies.",
    vocab: [
      { word: "concentrate", bn: "মনোযোগ দেওয়া", pos: "Verb", past: "concentrated", pastParticiple: "concentrated", forms: [{ label: "noun", word: "concentration" }], synonyms: ["focus", "attend"], antonyms: ["neglect", "wander"] },
      { word: "distraction", bn: "মনোযোগ বিক্ষেপকারী বিষয়", pos: "Noun", forms: [{ label: "verb", word: "distract (distracted)" }], synonyms: ["diversion", "disturbance"], antonyms: ["focus", "attention"] },
      { word: "irregular", bn: "অনিয়মিত", pos: "Adjective", forms: [{ label: "noun", word: "irregularity" }], synonyms: ["uneven", "inconsistent"], antonyms: ["regular", "steady"] },
      { word: "pile up", bn: "জমে যাওয়া", pos: "Phrase", synonyms: ["accumulate", "gather"], antonyms: ["clear", "reduce"] },
      { word: "procrastinate", bn: "গড়িমসি করা, কাজ ফেলে রাখা", pos: "Verb", past: "procrastinated", pastParticiple: "procrastinated", forms: [{ label: "noun", word: "procrastination" }], synonyms: ["delay", "put off"], antonyms: ["act promptly"] },
    ],
    body: [
      { type: "label", text: "From: tasnim.haque@gmail.com" },
      { type: "label", text: "To: tahsin.haque12@gmail.com" },
      { type: "label", text: "Subject: Please be regular in your studies" },
      { type: "label", text: "Dear Tahsin" },
      {
        type: "para",
        text: "I hope you are well. Mother told me on the phone yesterday that you have become irregular in your studies. You spend long hours playing games on the mobile phone, and you did badly in the half-yearly examination. This has made me sad, and I am writing to give you some advice.",
      },
      {
        type: "para",
        text: "Life as a student is the seed-time of life. What we sow now, we shall reap later. If you study a little every day, the lessons never pile up and the examination does not frighten you. But if you procrastinate, you will find at the end that it is too late to cover everything.",
      },
      {
        type: "para",
        text: "So make a daily routine and follow it strictly. Attend every class and do your homework on the same day. Keep your phone away while you study, because it is the greatest distraction. Concentrate for an hour, then take a short break. And do not give up games and sports altogether; play in the afternoon to keep yourself fresh.",
      },
      {
        type: "para",
        text: "You are a bright boy. If you become regular, you will surely do well. I hope you will not disappoint our parents. Take care of yourself.",
      },
      { type: "label", text: "Your loving sister" },
      { type: "label", text: "Tasnim" },
    ],
  },
  {
    id: "email-inviting-to-sisters-wedding",
    title: "Email Inviting a Friend to Your Elder Sister's Wedding",
    prompt:
      "Write an email to your friend inviting him or her to attend the marriage ceremony of your elder sister.",
    vocab: [
      { word: "bridegroom", bn: "বর", pos: "Noun", synonyms: ["groom"], antonyms: ["bride"] },
      { word: "gaye holud", bn: "গায়ে হলুদ অনুষ্ঠান", pos: "Phrase", synonyms: ["turmeric ceremony"] },
      { word: "invitation", bn: "আমন্ত্রণ", pos: "Noun", forms: [{ label: "verb", word: "invite (invited)" }], synonyms: ["request", "call"] },
      { word: "solemnise", bn: "আনুষ্ঠানিকভাবে সম্পন্ন করা", pos: "Verb", past: "solemnised", pastParticiple: "solemnised", forms: [{ label: "noun", word: "solemnisation" }], synonyms: ["perform", "celebrate"] },
      { word: "wedding", bn: "বিয়ে", pos: "Noun", synonyms: ["marriage", "nuptials"], antonyms: ["divorce"] },
    ],
    body: [
      { type: "label", text: "From: rifat.alam@gmail.com" },
      { type: "label", text: "To: shakil.ahmed09@gmail.com" },
      { type: "label", text: "Subject: Invitation to my sister's wedding" },
      { type: "label", text: "Dear Shakil" },
      {
        type: "para",
        text: "I hope you are well. I am very happy to tell you that my elder sister Ruma's wedding has been fixed. The marriage will be solemnised on Friday, 18 December, at our house in Tangail. The bridegroom is an engineer working in Dhaka.",
      },
      {
        type: "para",
        text: "The gaye holud will be held on Thursday evening, and there will be music and a lot of fun. The wedding feast will be held on Friday after the Jumma prayer. Many of our relatives are coming, and our house is already full of excitement.",
      },
      {
        type: "para",
        text: "I want you to come and stay with us for at least three days. You know that no occasion is complete to me without you. Besides, I need your help with the arrangements. My parents also sent their special invitation to you and your family.",
      },
      {
        type: "para",
        text: "Please come by Wednesday. Let me know when you start, and I shall meet you at the bus stand. Do not disappoint me.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Rifat" },
    ],
  },
  {
    id: "email-to-be-pen-friend",
    title: "Email Asking Someone to Be Your Pen Friend",
    prompt:
      "Write an email to a foreign student whose address you found on a pen-pal website, asking him or her to be your pen friend.",
    vocab: [
      { word: "culture", bn: "সংস্কৃতি", pos: "Noun", forms: [{ label: "adj", word: "cultural" }], synonyms: ["tradition", "way of life"] },
      { word: "exchange", bn: "বিনিময় করা", pos: "Verb", past: "exchanged", pastParticiple: "exchanged", forms: [{ label: "noun", word: "exchange" }], synonyms: ["swap", "share"], antonyms: ["keep"] },
      { word: "hobby", bn: "শখ", pos: "Noun", synonyms: ["pastime", "interest"], antonyms: ["work"] },
      { word: "pen friend", bn: "পত্রমিতা", pos: "Phrase", synonyms: ["pen pal"] },
      { word: "stamp collecting", bn: "ডাকটিকিট সংগ্রহ", pos: "Phrase", synonyms: ["philately"] },
    ],
    body: [
      { type: "label", text: "From: zarin.tasnim.bd@gmail.com" },
      { type: "label", text: "To: yuki.tanaka@gmail.com" },
      { type: "label", text: "Subject: Would you like to be my pen friend?" },
      { type: "label", text: "Dear Yuki" },
      {
        type: "para",
        text: "I found your email address on a pen-pal website where you wrote that you would like a friend from South Asia. I am Zarin Tasnim, a fifteen-year-old girl from Bangladesh, and I would be very happy to be your pen friend.",
      },
      {
        type: "para",
        text: "I live in Dhaka, the capital of Bangladesh, with my parents and a younger brother. I study in class ten at Viqarunnisa Noon School and College. My hobbies are reading books, gardening and stamp collecting. I also love to draw pictures of nature.",
      },
      {
        type: "para",
        text: "I have always been interested in Japan. I have read about your cherry blossoms, your bullet trains and how disciplined your people are. I would love to learn more about your country, its culture and your school life. In return, I can tell you about Bangladesh, our rivers, our festivals like Pahela Baishakh and our food.",
      },
      {
        type: "para",
        text: "If you agree, we can exchange emails regularly and even send each other stamps and postcards. I shall eagerly wait for your reply.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Zarin" },
    ],
  },
  {
    id: "email-to-friend-in-hospital",
    title: "Email to a Friend Undergoing Treatment in Hospital",
    prompt:
      "Your friend is lying ill in a hospital. Write an email to him or her wishing a quick recovery.",
    vocab: [
      { word: "appendicitis", bn: "অ্যাপেন্ডিসাইটিস", pos: "Noun", synonyms: ["inflammation of the appendix"] },
      { word: "operation", bn: "অস্ত্রোপচার", pos: "Noun", forms: [{ label: "verb", word: "operate (operated)" }], synonyms: ["surgery"] },
      { word: "physician", bn: "চিকিৎসক", pos: "Noun", synonyms: ["doctor"] },
      { word: "speedy", bn: "দ্রুত", pos: "Adjective", forms: [{ label: "noun", word: "speed" }, { label: "adv", word: "speedily" }], synonyms: ["quick", "swift"], antonyms: ["slow", "delayed"] },
      { word: "upset", bn: "মন খারাপ, বিচলিত", pos: "Adjective", forms: [{ label: "verb", word: "upset (upset)" }], synonyms: ["worried", "troubled"], antonyms: ["calm", "happy"] },
    ],
    body: [
      { type: "label", text: "From: hasib.rahman@gmail.com" },
      { type: "label", text: "To: niloy.das03@gmail.com" },
      { type: "label", text: "Subject: Get well soon" },
      { type: "label", text: "Dear Niloy" },
      {
        type: "para",
        text: "I was very upset to hear from your cousin that you have been admitted to the hospital and had an operation for appendicitis. I am glad to know that the operation went well and that you are out of danger now.",
      },
      {
        type: "para",
        text: "Please follow the advice of your physician carefully and do not try to get up too soon. Take your medicine on time and eat whatever the doctors allow. I know it is boring to lie in a hospital bed all day, so I am sending you a few storybooks through your cousin. They will help you pass the time.",
      },
      {
        type: "para",
        text: "Do not worry about your studies. I am keeping notes of all the classes, and I shall help you cover the lessons when you come back. All our friends and teachers send you their best wishes.",
      },
      {
        type: "para",
        text: "I shall come to see you at the hospital on Friday. I pray for your speedy recovery.",
      },
      { type: "label", text: "Your friend" },
      { type: "label", text: "Hasib" },
    ],
  },
  {
    id: "email-inviting-to-birthday-party",
    title: "Email Inviting a Friend to Your Birthday Party",
    prompt:
      "Write an email to your friend inviting him or her to attend your birthday party.",
    vocab: [
      { word: "cordially", bn: "আন্তরিকভাবে", pos: "Adverb", forms: [{ label: "adj", word: "cordial" }], synonyms: ["warmly", "heartily"], antonyms: ["coldly"] },
      { word: "cultural programme", bn: "সাংস্কৃতিক অনুষ্ঠান", pos: "Phrase", synonyms: ["entertainment show"] },
      { word: "incomplete", bn: "অসম্পূর্ণ", pos: "Adjective", synonyms: ["unfinished", "partial"], antonyms: ["complete", "whole"] },
      { word: "occasion", bn: "উপলক্ষ, অনুষ্ঠান", pos: "Noun", forms: [{ label: "adj", word: "occasional" }], synonyms: ["event", "function"] },
      { word: "sixteenth", bn: "ষোড়শ", pos: "Adjective", synonyms: ["16th"] },
    ],
    body: [
      { type: "label", text: "From: nusaiba.karim@gmail.com" },
      { type: "label", text: "To: prova.sarker@gmail.com" },
      { type: "label", text: "Subject: Invitation to my birthday party" },
      { type: "label", text: "Dear Prova" },
      {
        type: "para",
        text: "I hope you are fine. My sixteenth birthday falls on Saturday, 10 October. My parents have arranged a small party at our house on that occasion, and I cordially invite you to attend it.",
      },
      {
        type: "para",
        text: "The party will start at five in the evening. I have invited some of our classmates and a few relatives. After cutting the cake, there will be a small cultural programme. My cousins will sing, and I hope you will recite a poem for us, as you do so beautifully. Dinner will be served at eight.",
      },
      {
        type: "para",
        text: "You are my dearest friend, and the party will be incomplete without you. Please come a little early so that you can help me with the decoration. Do not bring any expensive gift; your presence is the best present for me.",
      },
      {
        type: "para",
        text: "Please reply to let me know that you are coming. My regards to your parents.",
      },
      { type: "label", text: "With love" },
      { type: "label", text: "Nusaiba" },
    ],
  },
  {
    id: "email-importance-of-learning-computer",
    title: "Email to a Friend about the Importance of Learning Computer",
    prompt:
      "Write an email to your friend about the importance of learning computer.",
    vocab: [
      { word: "digital", bn: "ডিজিটাল", pos: "Adjective", forms: [{ label: "verb", word: "digitise (digitised)" }], synonyms: ["computerised", "electronic"], antonyms: ["analogue", "manual"] },
      { word: "essential", bn: "অপরিহার্য", pos: "Adjective", forms: [{ label: "noun", word: "essence" }, { label: "adv", word: "essentially" }], synonyms: ["necessary", "vital"], antonyms: ["unnecessary", "optional"] },
      { word: "freelancing", bn: "মুক্ত পেশা, ফ্রিল্যান্সিং", pos: "Noun", forms: [{ label: "noun", word: "freelancer" }], synonyms: ["self-employment"] },
      { word: "illiterate", bn: "নিরক্ষর", pos: "Adjective", forms: [{ label: "noun", word: "illiteracy" }], synonyms: ["unlettered"], antonyms: ["literate"] },
      { word: "indispensable", bn: "অপরিহার্য", pos: "Adjective", synonyms: ["essential", "vital"], antonyms: ["dispensable", "unnecessary"] },
    ],
    body: [
      { type: "label", text: "From: shafin.ahmed@gmail.com" },
      { type: "label", text: "To: robin.kabir11@gmail.com" },
      { type: "label", text: "Subject: Why we must learn computer" },
      { type: "label", text: "Dear Robin" },
      {
        type: "para",
        text: "I hope you are well. In your last email you wrote that you do not see any need to learn computer now, as you are busy with your studies. I am writing to tell you why I think you are wrong.",
      },
      {
        type: "para",
        text: "We live in the age of science and technology, and the computer has become indispensable in every sphere of life. Offices, banks, hospitals and even shops now run on computers. Almost every job asks for computer skills. In a few years a person who cannot use a computer will be regarded as illiterate, just as a person who cannot read is today.",
      },
      {
        type: "para",
        text: "The computer is also a great help to students. With the internet we can find any information in a moment, take online classes, read e-books and check our results. Many young people in our country are earning a good income through freelancing from their homes. Bangladesh is going digital, and we must be ready for it.",
      },
      {
        type: "para",
        text: "You need not spend a lot of time. An hour a day is enough to learn typing, MS Word, Excel and the internet. Our school computer club runs a free course; why don't you join it? Write back soon.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Shafin" },
    ],
  },
  {
    id: "email-importance-of-games-and-sports",
    title: "Email to a Friend about the Importance of Games and Sports",
    prompt:
      "Write an email to your friend about the importance of games and sports in a student's life.",
    vocab: [
      { word: "bookworm", bn: "বইপোকা", pos: "Noun", synonyms: ["avid reader"] },
      { word: "fellow feeling", bn: "সহমর্মিতা", pos: "Phrase", synonyms: ["sympathy", "comradeship"], antonyms: ["hostility"] },
      { word: "obedience", bn: "আনুগত্য", pos: "Noun", forms: [{ label: "adj", word: "obedient" }, { label: "verb", word: "obey" }], synonyms: ["compliance", "discipline"], antonyms: ["disobedience"] },
      { word: "sportsmanship", bn: "খেলোয়াড়সুলভ মনোভাব", pos: "Noun", synonyms: ["fair play"], antonyms: ["unfairness"] },
      { word: "team spirit", bn: "দলগত মনোভাব", pos: "Phrase", synonyms: ["cooperation", "unity"], antonyms: ["selfishness"] },
    ],
    body: [
      { type: "label", text: "From: labib.hasan@gmail.com" },
      { type: "label", text: "To: ashik.rahman07@gmail.com" },
      { type: "label", text: "Subject: Games and sports are important too" },
      { type: "label", text: "Dear Ashik" },
      {
        type: "para",
        text: "I hope you are keeping well. Your mother told me that you have become a bookworm and never go out to play these days. I am glad that you are serious about your studies, but I want to tell you why games and sports are equally important for a student.",
      },
      {
        type: "para",
        text: "Games and sports keep the body strong and active. They improve our blood circulation, digestion and stamina, and they save us from many diseases. They also refresh the mind. After an hour's play in the afternoon, one can study with fresh energy at night. As the saying goes, all work and no play makes Jack a dull boy.",
      },
      {
        type: "para",
        text: "Games also build our character. They teach us discipline, obedience to rules, team spirit and fellow feeling. We learn to accept defeat gracefully and to win without pride. This sportsmanship helps us in every walk of life. Besides, a good player can bring honour to the school and to the country.",
      },
      {
        type: "para",
        text: "So please spend at least an hour on the playground every day. Join us for football in the school field. I am sure it will do you good.",
      },
      { type: "label", text: "Best wishes" },
      { type: "label", text: "Labib" },
    ],
  },
  {
    id: "email-seeking-admission-information",
    title: "Email Seeking Information about Admission to a College",
    prompt:
      "Write an email to the Principal of a college seeking information about admission to class eleven.",
    vocab: [
      { word: "accommodation", bn: "থাকার ব্যবস্থা", pos: "Noun", forms: [{ label: "verb", word: "accommodate (accommodated)" }], synonyms: ["lodging", "housing"] },
      { word: "eligibility", bn: "যোগ্যতা", pos: "Noun", forms: [{ label: "adj", word: "eligible" }], synonyms: ["qualification", "suitability"], antonyms: ["ineligibility"] },
      { word: "prospectus", bn: "প্রতিষ্ঠান-পরিচিতি পুস্তিকা", pos: "Noun", synonyms: ["brochure", "booklet"] },
      { word: "requirement", bn: "প্রয়োজনীয় শর্ত", pos: "Noun", forms: [{ label: "verb", word: "require (required)" }], synonyms: ["condition", "need"] },
      { word: "tuition fee", bn: "বেতন, শিক্ষণ ফি", pos: "Phrase", synonyms: ["school fee"] },
    ],
    body: [
      { type: "label", text: "From: ayan.chowdhury@gmail.com" },
      { type: "label", text: "To: principal@notredamecollege.edu.bd" },
      { type: "label", text: "Subject: Information about admission to class eleven" },
      { type: "label", text: "Dear Sir" },
      {
        type: "para",
        text: "I am an SSC candidate of this year from Sylhet Govt. Pilot High School, and I hope to get a good result in the science group. I wish to get admitted to class eleven in your college, which is famous for its discipline and excellent results.",
      },
      {
        type: "para",
        text: "I would be grateful if you kindly let me know the following: the minimum GPA required for eligibility, the date and system of the admission test, the tuition fees and other charges, and whether hostel accommodation is available for students from outside Dhaka. I would also like to know if there is any scholarship for meritorious students.",
      },
      {
        type: "para",
        text: "If there is a prospectus of the college, please send me a copy by email or let me know how I can collect it.",
      },
      {
        type: "para",
        text: "Thank you for your time. I look forward to hearing from you soon.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Ayan Chowdhury" },
      { type: "label", text: "Mobile: 01711-234567" },
    ],
  },
  {
    id: "email-requesting-tour-details",
    title: "Email Requesting Details of a Tour to St. Martin's Island",
    prompt:
      "Write an email to a travel agency requesting details of their tour package to St. Martin's Island.",
    vocab: [
      { word: "brochure", bn: "বিবরণ পুস্তিকা", pos: "Noun", synonyms: ["leaflet", "booklet"] },
      { word: "coral", bn: "প্রবাল", pos: "Noun", synonyms: ["reef stone"] },
      { word: "discount", bn: "মূল্যছাড়", pos: "Noun", forms: [{ label: "verb", word: "discount (discounted)" }], synonyms: ["reduction", "concession"], antonyms: ["surcharge"] },
      { word: "itinerary", bn: "ভ্রমণসূচি", pos: "Noun", synonyms: ["travel plan", "schedule"] },
      { word: "package", bn: "প্যাকেজ, সমন্বিত সুবিধা", pos: "Noun", synonyms: ["deal", "bundle"] },
    ],
    body: [
      { type: "label", text: "From: sumon.baroi@gmail.com" },
      { type: "label", text: "To: info@sonartoritravels.com" },
      { type: "label", text: "Subject: Details of your tour package to St. Martin's Island" },
      { type: "label", text: "Dear Sir" },
      {
        type: "para",
        text: "I saw your advertisement for a tour package to St. Martin's Island on your Facebook page. Our school's class ten students, about forty in number, are planning to visit the coral island with four teachers in the last week of December.",
      },
      {
        type: "para",
        text: "I would be grateful if you could send me full details of the package, including the itinerary, the cost per person, the mode of transport from Dhaka to Teknaf and from there to the island, the kind of hotel accommodation and the meals provided. Please also let me know what safety arrangements you have for students and whether you give any discount for a group.",
      },
      {
        type: "para",
        text: "If you have a brochure, kindly attach it with your reply. We would like to book as early as possible if the terms are suitable.",
      },
      {
        type: "para",
        text: "I look forward to your early reply.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Sumon Baroi" },
      { type: "label", text: "On behalf of the students of class ten, Cox's Bazar Govt. High School" },
    ],
  },
  {
    id: "email-ordering-books",
    title: "Email Ordering Books from a Bookshop",
    prompt:
      "Write an email to the manager of a bookshop placing an order for some books.",
    vocab: [
      { word: "cash on delivery", bn: "পণ্য হাতে পেয়ে মূল্য পরিশোধ", pos: "Phrase", synonyms: ["payment on receipt"], antonyms: ["advance payment"] },
      { word: "consignment", bn: "চালান", pos: "Noun", forms: [{ label: "verb", word: "consign (consigned)" }], synonyms: ["shipment", "parcel"] },
      { word: "edition", bn: "সংস্করণ", pos: "Noun", synonyms: ["version", "issue"] },
      { word: "invoice", bn: "মূল্যতালিকা, চালানপত্র", pos: "Noun", synonyms: ["bill"] },
      { word: "place an order", bn: "ফরমাশ দেওয়া", pos: "Phrase", synonyms: ["order", "book"], antonyms: ["cancel an order"] },
    ],
    body: [
      { type: "label", text: "From: meherin.jahan@gmail.com" },
      { type: "label", text: "To: order@banglabazarbooks.com" },
      { type: "label", text: "Subject: Order for books" },
      { type: "label", text: "Dear Sir" },
      {
        type: "para",
        text: "I would like to place an order for the following books. Please send them to the address given below by courier as early as possible, on cash on delivery.",
      },
      { type: "label", text: "1. Oxford Advanced Learner's Dictionary (latest edition) — 1 copy" },
      { type: "label", text: "2. Higher Mathematics for Class Nine and Ten (NCTB) — 1 copy" },
      { type: "label", text: "3. SSC Test Papers, all boards, 2027 — 1 copy" },
      { type: "label", text: "4. Gitanjali by Rabindranath Tagore — 1 copy" },
      {
        type: "para",
        text: "Please make sure that the books are new, of the latest edition and packed properly so that they are not damaged on the way. Kindly send the invoice with the consignment and let me know the total price including the courier charge.",
      },
      {
        type: "para",
        text: "Delivery address: Meherin Jahan, House 12, Road 4, Kazir Dewri, Chattogram. Mobile: 01819-876543.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Meherin Jahan" },
    ],
  },
  {
    id: "email-reserving-hotel-room",
    title: "Email for Reserving a Hotel Room",
    prompt:
      "Write an email to the manager of a hotel in Cox's Bazar to reserve rooms for your family.",
    vocab: [
      { word: "advance", bn: "অগ্রিম অর্থ", pos: "Noun", synonyms: ["deposit", "prepayment"] },
      { word: "check in", bn: "হোটেলে উঠা", pos: "Phrase", synonyms: ["arrive", "register"], antonyms: ["check out"] },
      { word: "confirm", bn: "নিশ্চিত করা", pos: "Verb", past: "confirmed", pastParticiple: "confirmed", forms: [{ label: "noun", word: "confirmation" }], synonyms: ["verify", "affirm"], antonyms: ["cancel", "deny"] },
      { word: "reservation", bn: "সংরক্ষণ, বুকিং", pos: "Noun", forms: [{ label: "verb", word: "reserve (reserved)" }], synonyms: ["booking"], antonyms: ["cancellation"] },
      { word: "sea-facing", bn: "সমুদ্রমুখী", pos: "Adjective", synonyms: ["with a sea view"] },
    ],
    body: [
      { type: "label", text: "From: farid.uddin70@yahoo.com" },
      { type: "label", text: "To: reservation@hotelseabreeze.com.bd" },
      { type: "label", text: "Subject: Reservation of two rooms from 26 to 29 December" },
      { type: "label", text: "Dear Sir" },
      {
        type: "para",
        text: "I would like to reserve two double rooms in your hotel for my family of five for three nights. We shall check in on 26 December at about noon and check out on the morning of 29 December.",
      },
      {
        type: "para",
        text: "If possible, please give us sea-facing rooms on an upper floor, with air-conditioning. One of the rooms should have an extra bed for a child. We shall also need breakfast for all of us every day.",
      },
      {
        type: "para",
        text: "Kindly let me know whether the rooms are available on those dates, the rent per night and the amount of advance needed to confirm the reservation. I can send the advance through bKash or a bank transfer.",
      },
      {
        type: "para",
        text: "I look forward to your early confirmation.",
      },
      { type: "label", text: "Yours faithfully" },
      { type: "label", text: "Farid Uddin" },
      { type: "label", text: "Mobile: 01552-334455" },
    ],
  },
];
