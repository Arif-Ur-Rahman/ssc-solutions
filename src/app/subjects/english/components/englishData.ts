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

export interface Piece {
  id: string;
  title: string;
  // The instruction as the board words it.
  prompt?: string;
  // Guiding questions printed with the question.
  hints?: string[];
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
    body: [
      {
        type: "para",
        text: "A book fair is a fair where books of different kinds are displayed and sold. In our country the best known of them is the Amar Ekushey Book Fair, which is held in Dhaka throughout the month of February to keep alive the memory of the language martyrs. Book fairs are also arranged in district towns, in schools and colleges, and on the occasion of national days. A fair is usually held in an open field where publishers put up neat rows of stalls, each decorated with posters and stacked from top to bottom with new books. There are books on literature, science, history, religion and politics, as well as story books and colourful picture books for children. From morning till late evening the fair remains crowded with people of all ages — students, teachers, writers and ordinary readers who come simply to breathe the smell of new paper. Writers meet their readers there and put their signatures on the title pages. A book fair is important because it brings good books within the reach of everyone, encourages young writers and, above all, creates a love of reading among the young. It is truly a festival of the mind.",
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
    body: [
      { type: "note", label: "Title", text: "Where There Is a Will, There Is a Way" },
      {
        type: "para",
        text: "Robert Bruce was the king of Scotland. He was defeated by the English army again and again. At last he lost all hope and fled from the battlefield. He took shelter in a lonely cave and lay there thinking that everything was over.",
      },
      {
        type: "para",
        text: "While he was lying there in despair, his eyes fell on a spider hanging from the roof of the cave. The little creature was trying to reach the ceiling by its slender thread. It climbed a little and fell down. It tried a second time and fell again. Bruce counted six such attempts and each of them ended in failure. He thought the spider would give up. But at the seventh attempt the tiny creature reached the ceiling and began to weave its web.",
      },
      {
        type: "para",
        text: "The sight opened the king's eyes. He said to himself, 'If a spider can try seven times, why should a king lose heart after six defeats?' He got up, left the cave and called his soldiers together once more. He fought the English with fresh courage, and this time he won. Scotland was free, and the king never forgot the lesson taught by a spider.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Failure is not the end. Those who have the will to try again find the way at last.",
      },
    ],
  },
  {
    id: "honesty-is-the-best-policy",
    title: "Honesty Is the Best Policy",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'Once a poor woodcutter was cutting a tree on the bank of a river. Suddenly his axe slipped from his hand and fell into the water …'",
    body: [
      { type: "note", label: "Title", text: "Honesty Is the Best Policy" },
      {
        type: "para",
        text: "Once a poor woodcutter was cutting a tree on the bank of a river. Suddenly his axe slipped from his hand and fell into the water. It was his only means of living. He sat down on the bank and began to weep bitterly.",
      },
      {
        type: "para",
        text: "An angel happened to pass by and asked him why he was crying. The woodcutter told him everything. The angel dived into the river and came up with a golden axe. 'Is this your axe?' he asked. 'No, sir, it is not mine,' said the woodcutter. The angel dived again and brought up a silver one, but the poor man refused it too. At last the angel brought up the old iron axe. The woodcutter's face lit up. 'Yes, sir, this is my axe,' he cried joyfully.",
      },
      {
        type: "para",
        text: "The angel was pleased with his honesty. He gave the woodcutter all three axes and blessed him. The man returned home a rich man, and his neighbours learnt from him that honesty never goes unrewarded.",
      },
      {
        type: "note",
        label: "Moral",
        text: "Honesty is the best policy. An honest man is rewarded in the long run.",
      },
    ],
  },
  {
    id: "unity-is-strength",
    title: "Unity Is Strength",
    prompt:
      "Complete the story and give it a suitable title and a moral: 'An old farmer had four sons. They always quarrelled with one another …'",
    body: [
      { type: "note", label: "Title", text: "Unity Is Strength" },
      {
        type: "para",
        text: "An old farmer had four sons. They always quarrelled with one another over trifles. The farmer tried his best to make them united, but all his advice fell on deaf ears. He grew anxious about what would happen to them after his death.",
      },
      {
        type: "para",
        text: "One day the farmer fell seriously ill. He called his sons to his bedside and asked them to bring a bundle of sticks. Then he asked each of them to break the bundle. The eldest son took it and tried with all his might, but he could not break it. The others tried one after another and failed as well.",
      },
      {
        type: "para",
        text: "Then the old man untied the bundle and gave a single stick to each son. This time they broke the sticks easily. The farmer smiled and said, 'My sons, you see how it is. So long as the sticks were together, no one could break them. Once separated, they broke at a touch. If you remain united, no one can harm you. But if you quarrel, anyone will be able to ruin you.' The sons understood their father's meaning and never quarrelled again.",
      },
      {
        type: "note",
        label: "Moral",
        text: "United we stand, divided we fall.",
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
    body: [
      { type: "dialogue", speaker: "Rifat", text: "Hello, Sabbir! You look pale today. What's wrong with you?" },
      { type: "dialogue", speaker: "Sabbir", text: "Nothing serious. I have been coughing for the last few days." },
      { type: "dialogue", speaker: "Rifat", text: "I am not surprised. You have started smoking, haven't you?" },
      { type: "dialogue", speaker: "Sabbir", text: "Only three or four cigarettes a day. It helps me stay awake while I study." },
      { type: "dialogue", speaker: "Rifat", text: "That is a dangerous excuse. Do you know that tobacco smoke contains nicotine and tar, and that both of them destroy the lungs slowly?" },
      { type: "dialogue", speaker: "Sabbir", text: "I have heard something like that. But surely a few cigarettes cannot do much harm." },
      { type: "dialogue", speaker: "Rifat", text: "They can. Smoking causes cancer, heart disease and gastric ulcer. Worse still, the people sitting beside you breathe the same smoke. Passive smoking harms them just as much." },
      { type: "dialogue", speaker: "Sabbir", text: "I never thought of my family in that way." },
      { type: "dialogue", speaker: "Rifat", text: "Think of your pocket too. The money you burn every day could buy you books." },
      { type: "dialogue", speaker: "Sabbir", text: "You are right, Rifat. I shall give it up from today." },
      { type: "dialogue", speaker: "Rifat", text: "That's the spirit. Keep yourself busy with games and good company, and you will not miss it." },
      { type: "dialogue", speaker: "Sabbir", text: "Thank you for opening my eyes." },
      { type: "dialogue", speaker: "Rifat", text: "You are most welcome. Take care of yourself." },
    ],
  },
  {
    id: "importance-of-learning-english",
    title: "The Importance of Learning English",
    prompt:
      "Write a dialogue between two friends about the importance of learning English.",
    body: [
      { type: "dialogue", speaker: "Nadia", text: "Hi, Tanha! What are you reading so attentively?" },
      { type: "dialogue", speaker: "Tanha", text: "An English newspaper. I am trying to improve my English." },
      { type: "dialogue", speaker: "Nadia", text: "Why bother? We hardly speak English outside the classroom." },
      { type: "dialogue", speaker: "Tanha", text: "That is exactly why we are weak in it. English is an international language. It is spoken and understood almost everywhere in the world." },
      { type: "dialogue", speaker: "Nadia", text: "But how will it help us in our own country?" },
      { type: "dialogue", speaker: "Tanha", text: "In many ways. Most books on science, medicine and technology are written in English. Without it we cannot get higher education or a good job." },
      { type: "dialogue", speaker: "Nadia", text: "I see. My cousin failed an interview last month because he could not speak English fluently." },
      { type: "dialogue", speaker: "Tanha", text: "There you are. Besides, the whole internet runs on English, and anyone who wants to study abroad must sit for IELTS or TOEFL." },
      { type: "dialogue", speaker: "Nadia", text: "Then tell me how to learn it properly." },
      { type: "dialogue", speaker: "Tanha", text: "Read English newspapers and story books daily, learn five new words every day, and speak in English with your friends without fear of mistakes." },
      { type: "dialogue", speaker: "Nadia", text: "Shall we practise together from tomorrow?" },
      { type: "dialogue", speaker: "Tanha", text: "Certainly. Practice is the only secret." },
      { type: "dialogue", speaker: "Nadia", text: "Thank you, Tanha. See you tomorrow." },
    ],
  },
  {
    id: "preparation-for-ssc-exam",
    title: "Preparation for the SSC Examination",
    prompt:
      "Write a dialogue between two friends about their preparation for the SSC examination.",
    body: [
      { type: "dialogue", speaker: "Arif", text: "Hello, Sumon! How is your preparation for the SSC examination going?" },
      { type: "dialogue", speaker: "Sumon", text: "Not bad, but I am a little worried about mathematics." },
      { type: "dialogue", speaker: "Arif", text: "Why? You were always good at it." },
      { type: "dialogue", speaker: "Sumon", text: "I understand the theorems, yet I cannot finish the paper in time." },
      { type: "dialogue", speaker: "Arif", text: "Then you should practise with a clock in front of you. Solve last year's board questions within three hours." },
      { type: "dialogue", speaker: "Sumon", text: "That is a good idea. And how are you preparing for English?" },
      { type: "dialogue", speaker: "Arif", text: "I revise grammar rules in the morning and write one paragraph or letter every night. Writing regularly is the only way to improve." },
      { type: "dialogue", speaker: "Sumon", text: "Do you follow any routine?" },
      { type: "dialogue", speaker: "Arif", text: "Yes, a simple one. Six hours of study, an hour of games and eight hours of sleep. A tired brain remembers nothing." },
      { type: "dialogue", speaker: "Sumon", text: "I often study till two at night and feel sleepy in class the next day." },
      { type: "dialogue", speaker: "Arif", text: "Give that up. Start early, revise what you have read and never leave a lesson half learnt." },
      { type: "dialogue", speaker: "Sumon", text: "Thank you for the advice. I shall make a new routine tonight." },
      { type: "dialogue", speaker: "Arif", text: "Best of luck. Let us meet again after the test examination." },
    ],
  },
];

/* ─────────────────────────── Compositions ───────────────────────── */

const compositions: Piece[] = [
  {
    id: "uses-and-abuses-of-mobile-phone",
    title: "Uses and Abuses of the Mobile Phone",
    prompt: "Write a composition on 'Uses and Abuses of the Mobile Phone'.",
    body: [
      {
        type: "para",
        text: "The mobile phone is one of the most wonderful gifts of modern science. It is a small wireless telephone that a man can carry in his pocket and use anywhere. Only a few decades ago it was a luxury for the rich; today the farmer in the field and the rickshaw puller on the street both carry one. Like every invention, however, it has both a bright side and a dark side.",
      },
      {
        type: "para",
        text: "The uses of the mobile phone are many. It has made communication instant and cheap. A man can talk to his relatives living thousands of miles away as easily as if they were in the next room. In an emergency — an accident, a fire, a sudden illness — a single call brings help. Businessmen settle their affairs, farmers learn the market price of their crops and expatriate workers hear the voices of their families through it. A modern mobile phone is also a camera, a calculator, a clock, a radio and a small computer. With the internet in hand, students attend online classes and read books that are not available in their own libraries.",
      },
      {
        type: "para",
        text: "The abuses are equally serious. Many students spend the whole night chatting or playing games and neglect their studies. Criminals use mobile phones to plan their crimes, and dishonest people use them to disturb girls with unwanted calls and messages. Rumours and false news spread through it within minutes and sometimes cause riots. Doctors also warn that constant use of the phone weakens the eyes, disturbs sleep and keeps young people away from games and from real company.",
      },
      {
        type: "para",
        text: "The fault, however, lies not with the instrument but with the user. A knife may cut vegetables or kill a man; it depends on the hand that holds it. Guardians should keep an eye on how their children use the phone, and the authorities should punish those who misuse it. If we use it wisely and within limits, the mobile phone will remain a blessing rather than a curse.",
      },
    ],
  },
  {
    id: "duties-of-a-student",
    title: "The Duties of a Student",
    prompt: "Write a composition on 'The Duties of a Student'.",
    body: [
      {
        type: "para",
        text: "Student life is the seed time of life. What a man will be in the future depends largely on how he spends these few years. A student is a learner, and learning is not confined to books alone. He has certain duties towards himself, towards his family and towards the country that feeds and educates him.",
      },
      {
        type: "para",
        text: "The first duty of a student is to study. He should attend his classes regularly, prepare his lessons daily and never postpone today's work till tomorrow. Merely passing examinations is not education; he must try to understand what he reads and to think for himself. Along with textbooks he should read newspapers, biographies and good literature, for they broaden the mind in a way that a syllabus cannot.",
      },
      {
        type: "para",
        text: "The second duty is to build character. Honesty, punctuality, obedience and respect for elders are habits that must be formed early, because a habit once formed is hard to change. A student should also take care of his health, for a sound mind lives in a sound body. Games, exercise and regular hours keep both body and mind fresh.",
      },
      {
        type: "para",
        text: "A student has duties towards society as well. He can teach an illiterate neighbour to read and write, join in cleaning his village or town, plant trees, and stand beside the people during floods and other disasters. In such work he learns discipline and the joy of serving others.",
      },
      {
        type: "para",
        text: "In short, a student should prepare himself to become a good man and a useful citizen. The students of today are the leaders of tomorrow. If they do their duties faithfully, the nation is sure to prosper.",
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
    body: [
      { type: "label", text: "To: nusrat.jahan24@gmail.com" },
      { type: "label", text: "Subject: Why you should read a newspaper every day" },
      { type: "label", text: "Dear Nusrat" },
      {
        type: "para",
        text: "I hope this email finds you well. In your last message you wrote that you find no time for anything but your textbooks. I want to tell you why you should still spare fifteen minutes a day for a newspaper.",
      },
      {
        type: "para",
        text: "A newspaper is a storehouse of knowledge. It carries the news of the whole world, and reading it we come to know what is happening in politics, sports, science and business. It teaches us to form our own opinion instead of believing every rumour we hear. For students like us it has another benefit: reading an English newspaper improves vocabulary and sentence structure faster than any grammar book. The editorial page alone will teach you how to argue in writing.",
      },
      {
        type: "para",
        text: "So start today. Read one page carefully, note down the new words and try to use them in your own sentences. You will see the difference within a month.",
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
    body: [
      { type: "label", text: "To: kamrul.hasan@yahoo.com" },
      { type: "label", text: "Subject: My preparation for the SSC examination" },
      { type: "label", text: "Dear Father" },
      {
        type: "para",
        text: "Assalamu Alaikum. I received the money you sent last week. Thank you very much. You wanted to know how my preparation is going, so I am writing in some detail.",
      },
      {
        type: "para",
        text: "I have finished the syllabus in Bangla, English and religion, and I am revising them for the second time. Mathematics and physics are almost done as well; only two chapters of chemistry are left. I have made a routine and study six hours a day besides my school hours. Our test examination will be held next month, and my teachers say that I may do well if I keep up this pace.",
      },
      {
        type: "para",
        text: "There is one thing I need. The book of model questions is not available in our town, and I would like you to buy me a copy when you come home. Please do not worry about my health; I take my meals on time and play for an hour every evening.",
      },
      { type: "label", text: "My regards to you and Mother" },
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
