const mathQuestions = [
    { questionNumber: 2, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/2_A.png' },
    { questionNumber: 2, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/2_D.png' },
    { questionNumber: 65, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/65_B.png' },
    { questionNumber: 66, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/66_C.png' },
    { questionNumber: 66, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/66_B.png' },
    { questionNumber: 67, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/67_C.png' },
    { questionNumber: 68, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/68_B.png' },
    { questionNumber: 69, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/69_D.png' },
    { questionNumber: 70, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/70_B.png' },
    { questionNumber: 72, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/72_D.png' },
    { questionNumber: 73, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/73_A.png' },
    { questionNumber: 74, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/74_B.png' },
    { questionNumber: 75, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/75_A.png' },
    { questionNumber: 76, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/76_C.png' },
    { questionNumber: 77, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/77_B.png' },
    { questionNumber: 85, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/85_C.png' },
    { questionNumber: 86, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/86_D.png' },
    { questionNumber: 87, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/87_B.png' },
    { questionNumber: 88, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/88_C.png' },
    { questionNumber: 89, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/89_B.png' },
    { questionNumber: 90, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/90_C.png' },
    { questionNumber: 91, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/91_D.png' },
    { questionNumber: 93, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/93_C.png' },
    { questionNumber: 94, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/94_B.png' },
    { questionNumber: 95, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/95_C.png' },
    { questionNumber: 97, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/97_B.png' },
    { questionNumber: 98, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/98_B.png' },
    { questionNumber: 99, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/99_B.png' },
    // --- 100s Series ---
    { questionNumber: 136, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/136_A.png' },
    { questionNumber: 138, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/138_B.png' },
    { questionNumber: 139, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/139_C.png' },
    { questionNumber: 141, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/141_A.png' },
    { questionNumber: 144, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/144_B.png' },
    { questionNumber: 157, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/157_A.png' },
    { questionNumber: 160, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/160_D.png' },
    { questionNumber: 163, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/163_C.png' },
    { questionNumber: 164, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/164_B.png' },
    { questionNumber: 170, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/170_C.png' },
    { questionNumber: 171, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/171_A.png' },
    { questionNumber: 174, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/174_C.png' },
    { questionNumber: 181, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/181_A.png' },
    { questionNumber: 190, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/190_C.png' },
    { questionNumber: 195, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/195_B.png' },

    // --- 200s Series ---
    { questionNumber: 243, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/243_C.png' },
    { questionNumber: 246, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/246_C.png' },
    { questionNumber: 249, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/249_B.png' },
    { questionNumber: 254, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/254_A.png' },
    { questionNumber: 256, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/256_D.png' },
    { questionNumber: 261, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/261_C.png' },
    { questionNumber: 280, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/280_A.png' },
    { questionNumber: 295, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/295_C.png' },
    { questionNumber: 303, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/303_D.png' },
    { questionNumber: 304, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/304_C.png' },

    // --- 300s Series ---
    { questionNumber: 306, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/306_B.png' },
    { questionNumber: 307, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/307_B.png' },
    { questionNumber: 308, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/308_A.png' },
    { questionNumber: 309, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/309_B.png' },
    { questionNumber: 314, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/314_A.png' },
    { questionNumber: 316, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/316_C.png' },
    { questionNumber: 318, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/318_C.png' },
    { questionNumber: 319, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/319_D.png' },
    { questionNumber: 320, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/320_C.png' },
    { questionNumber: 322, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/322_B.png' },
    { questionNumber: 323, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/323_D.png' },
    { questionNumber: 324, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/324_C.png' },
    { questionNumber: 325, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/325_B.png' },
    { questionNumber: 328, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/328_C.png' },
    { questionNumber: 334, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/334_D.png' },
    { questionNumber: 337, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/337_C.png' },
    { questionNumber: 343, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/343_B.png' },
    { questionNumber: 345, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/345_A.png' },
    { questionNumber: 346, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/346_A.png' },
    { questionNumber: 349, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/349_C.png' },
    { questionNumber: 352, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/352_D.png' },
{ questionNumber: 353, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/353_B.png' },
{ questionNumber: 354, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/354_D.png' },
{ questionNumber: 356, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/356_D.png' },
{ questionNumber: 360, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/360_D.png' },
{ questionNumber: 361, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/361_B.png' },
{ questionNumber: 365, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/365_B.png' },
{ questionNumber: 367, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/367_C.png' },
{ questionNumber: 372, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/372_C.png' },
{ questionNumber: 374, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/374_C.png' },
{ questionNumber: 380, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/380_B.png' },
{ questionNumber: 382, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/382_B.png' },
{ questionNumber: 383, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/383_C.png' },
{ questionNumber: 384, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/384_B.png' },
{ questionNumber: 385, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/385_C.png' },
{ questionNumber: 387, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/387_B.png' },
{ questionNumber: 391, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/391_B.png' },
{ questionNumber: 393, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/393_D.png' },
{ questionNumber: 394, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/394_B.png' },
{ questionNumber: 397, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/397_A.png' },

// --- 400s Series ---
{ questionNumber: 401, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/401_A.png' },
{ questionNumber: 403, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/403_B.png' },
{ questionNumber: 407, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/407_B.png' },
{ questionNumber: 408, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/408_C.png' },
{ questionNumber: 409, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/409_A.png' },
{ questionNumber: 410, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/410_D.png' },
{ questionNumber: 411, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/411_D.png' },
{ questionNumber: 414, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/414_C.png' },
{ questionNumber: 415, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/415_D.png' },
{ questionNumber: 431, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/431_B.png' },
{ questionNumber: 422, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/422_A.png' },
{ questionNumber: 426, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/426_C.png' },
{ questionNumber: 428, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/428_C.png' },
{ questionNumber: 429, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/429_C.png' },
{ questionNumber: 432, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/432_C.png' },
{ questionNumber: 434, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/434_B.png' },

    // --- 600s Series ---
    { questionNumber: 612, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/612_A.png' },
    { questionNumber: 613, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/613_C.png' },
    { questionNumber: 616, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/616_D.png' },
    { questionNumber: 619, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/619_A.png' },
    { questionNumber: 620, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/620_C.png' },
    { questionNumber: 622, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/622_A.png' },
    { questionNumber: 624, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/624_D.png' },
    { questionNumber: 625, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/625_A.png' },
    { questionNumber: 626, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/626_A.png' },
    { questionNumber: 627, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/627_C.png' },
    { questionNumber: 628, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/628_B.png' },
    { questionNumber: 630, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/630_A.png' },
    { questionNumber: 632, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/632_A.png' },
    { questionNumber: 633, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/633_B.png' },
    { questionNumber: 634, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/634_C.png' },
    { questionNumber: 635, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/635_B.png' },
    { questionNumber: 636, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/636_A.png' },
    { questionNumber: 637, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/637_A.png' },
    { questionNumber: 638, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/638_A.png' },
    { questionNumber: 640, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/640_B.png' },
    { questionNumber: 641, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/641_D.png' },
    { questionNumber: 642, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/642_A.png' },
    { questionNumber: 645, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/645_A.png' },
    { questionNumber: 647, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/647_C.png' },
    { questionNumber: 648, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/648_B.png' },
    { questionNumber: 649, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/649_D.png' },
    { questionNumber: 650, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/650_C.png' },
    { questionNumber: 651, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/651_B.png' },
    { questionNumber: 652, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/652_A.png' },
    { questionNumber: 653, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/653_A.png' },
    { questionNumber: 654, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/654_B.png' },
    { questionNumber: 655, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/655_B.png' },
    { questionNumber: 656, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/656_C.png' },
    { questionNumber: 657, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/657_A.png' },
    { questionNumber: 658, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/658_B.png' },
    { questionNumber: 659, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/659_A.png' },
    { questionNumber: 660, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/660_D.png' },
    { questionNumber: 661, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/661_A.png' },
    { questionNumber: 662, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/662_C.png' },
    { questionNumber: 663, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/663_C.png' },
    { questionNumber: 664, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/664_C.png' },

    { questionNumber: 700, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/700_B.png' },
    { questionNumber: 701, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/701_B.png' }
];

const standardEnglishQuestions = [
    { category: 'Analogies', questionText: 'Car : Pollution', options: ["Fire : Smoke", "Cold : Ice", "Book : Page", "Sun : Yellow"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Bricks : House', options: ["Tree : Leaf", "Bones : Skeleton", "Pen : Ink", "Water : River"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Tree : Forest', options: ["Key : Lock", "Day : Night", "Star : Sky", "Dog : Cat"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Gym : Exercise', options: ["Paper : Write", "Hot : Cold", "Shoe : Foot", "Library : Read"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Speak : Shout', options: ["Sleep : Dream", "Eat : Cook", "Walk : Run", "Look : See"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Toyota : Car', options: ["Table : Wood", "Ocean : Water", "Bass : Guitar", "Fast : Quick"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Select : Choose', options: ["In : Out", "Near : Far", "Up : Down", "Always : Forever"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Easy : Simple', options: ["Hard : Soft", "High : Low", "Dark : Light", "Grateful : Thankful"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Caterpillar : Butterfly', options: ["Big : Small", "Day : Night", "Baby : Adult", "Paper : Pen"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Eye : Face', options: ["Hot : Cold", "City : Country", "Run : Fast", "Read : Book"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Screen : Laptop', options: ["Smart : Wise", "Slow : Fast", "Fin : Fish", "Build : House"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Floor : Ceiling', options: ["Sour : Sweet", "Tall : High", "Big : Huge", "Fast : Quick"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Suggest : Demand', options: ["Take : Grab", "Cold : Hot", "Apple : Tree", "Paper : Pen"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Work : Experience', options: ["Desk : Chair", "Shoe : Sock", "Black : White", "Tickle : Laugh"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Roof : House', options: ["Country : World", "Soft : Hard", "Walk : Slow", "Sing : Song"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Wet : Soak', options: ["Rub : Scrub", "Clean : Dirty", "Up : Down", "Dry : Wet"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Accomplish : Achieve', options: ["Start : Stop", "Push : Pull", "Win : Lose", "Fall : Drop"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Mammal : Human', options: ["Tree : Leaf", "Fish : Water", "Bird : Sky", "Vehicle : Truck"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Fire : Gun', options: ["Fly : Wings", "Bullet : Lead", "Dark : Light", "Shoot : Target"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Drought : Famine', options: ["War : Death", "Peace : Joy", "Rain : Wet", "Wind : Cold"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Factory : Production', options: ["Table : Chair", "Angry : Shout", "Cat : Dog", "Blue : Color"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cry : Sadness', options: ["Smile : Face", "Tears : Eye", "Laugh : Joke", "Gasp : Surprise"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Milk : Ice Cream', options: ["Dog : Bark", "Run : Jump", "Cold : Warm", "Gold : Necklace"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Chop : Firewood', options: ["Fast : Slow", "Fish : Swim", "Sun : Sky", "Write : Novel"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Tired : Weak', options: ["Big : Small", "Dirty : Filthy", "Happy : Sad", "Clean : Fresh"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sleeve : Shirt', options: ["Bright : Dark", "Page : Novel", "Run : Fast", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Storm : Lightning', options: ["Soft : Hard", "Injury : Pain", "Book : Read", "Walk : Street"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cooking : Meal', options: ["Old : New", "Cat : Meow", "Tall : Short", "Typing : Email"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Carry on : Continue', options: ["Stop : Go", "Begin : End", "Nervous : Anxious", "Calm : Angry"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Attack : Defend', options: ["Hot : Cold", "Rain : Umbrella", "Up : Down", "Win : Lose"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Good looking : Gorgeous', options: ["Big : Small", "Angry : Furious", "Happy : Sad", "Hot : Cold"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Encyclopedia : Dictionary', options: ["Car : Wheel", "Freezer : Fridge", "Book : Page", "Dog : Cat"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Gym : Workout', options: ["Green : Color", "Bank : Withdrawal", "Bird : Fly", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Take off : Fly', options: ["Stop : Run", "Wake up : Get up", "Sleep : Dream", "Sit : Stand"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Handle : Door', options: ["Sweet : Sour", "Light : Dark", "Trunk : Tree", "Walk : Run"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Eagle : Hawk', options: ["Big : Small", "Rice : Wheat", "Up : Down", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sofa : Rug', options: ["Cinnamon : Ginger", "Hot : Cold", "High : Low", "Near : Far"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hospital : Wing', options: ["Fast : Slow", "Run : Walk", "Bright : Dark", "Window : Room"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Win : Lose', options: ["Push : Pull", "High : Tall", "Fast : Quick", "Start : Begin"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Shopping : Supermarket', options: ["Fast : Slow", "Praying : Mosque", "Red : Color", "Bird : Sing"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Fresh : Putrid', options: ["Big : Small", "Delightful : Refusal", "Hot : Cold", "Day : Night"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Toothache : Dentist', options: ["Breakdown : Mechanic", "Sun : Moon", "Pen : Paper", "Cat : Dog"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hair : Head', options: ["Up : Down", "Fast : Slow", "Roots : Potato", "Light : Dark"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Lens : Camera', options: ["Warm : Cold", "Blade : Knife", "High : Low", "Soft : Hard"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Bake : Oven', options: ["Big : Small", "Day : Night", "Write : Pencil", "Run : Fast"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Cold : Shiver', options: ["Relax : Relief", "Blue : Sky", "Book : Read", "Table : Chair"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Read : Learn', options: ["Black : White", "Rain : Flood", "Up : Down", "Left : Right"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Consistent : Steady', options: ["Hot : Cold", "Strategy : Plan", "In : Out", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Room : House', options: ["Country : World", "Fast : Slow", "Bright : Dark", "Soft : Hard"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Last : End', options: ["Day : Night", "Terrifying : Horrifying", "Hot : Cold", "Up : Down"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cacao : Chocolate', options: ["Fast : Slow", "Sun : Heat", "Green : Grass", "Cotton : Shirt"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Argument : Disagreement', options: ["Cold : Hot", "Strategy : Plan", "Light : Dark", "Up : Down"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Bathroom : Wash', options: ["Soft : Hard", "Land : Walk", "Big : Small", "Tall : Short"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Freeze : Ice', options: ["Dog : Bark", "Fast : Car", "Red : Apple", "Study : Knowledge"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Pony : Horse', options: ["Up : Down", "Hot : Cold", "Left : Right", "Cheddar : Cheese"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Oven : Cook', options: ["Big : Small", "Black : White", "Ignite : Light", "Sun : Sky"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Star : Galaxy', options: ["Soft : Hard", "Tree : Forest", "High : Low", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cotton : Soft', options: ["Day : Night", "Wool : Warm", "Run : Walk", "Book : Page"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Jacket : Coat', options: ["Fast : Slow", "Up : Down", "Hot : Cold", "Helicopter : Plane"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Illness : Cure', options: ["Red : Color", "Day : Night", "Big : Small", "Obesity : Diet"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Engine : Car', options: ["Fast : Slow", "High : Low", "Cold : Warm", "Keyboard : Computer"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Knife : Slice', options: ["Blue : Sky", "Tall : Short", "Shovel : Dig", "In : Out"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Beef : Meat', options: ["Fast : Slow", "Run : Walk", "Bright : Dark", "Onion : Vegetable"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Order : Receive', options: ["Big : Small", "Day : Night", "Soft : Hard", "Check in : Board"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Polish : Shiny', options: ["Left : Right", "Work : Tired", "Up : Down", "Red : Green"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Exercise : Sweaty', options: ["Cook : Hot", "Tall : Short", "Big : Small", "In : Out"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Arrive : Depart', options: ["True : False", "Big : Large", "Fast : Quick", "Smart : Clever"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Smoking : Cancer', options: ["Cure : Well", "Up : Down", "Hot : Cold", "Light : Dark"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Current : Contemporary', options: ["Day : Night", "Respectful : Polite", "High : Low", "In : Out"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Request : Demand', options: ["Cold : Hot", "Up : Down", "Black : White", "Want : Crave"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Curious : Ask', options: ["Red : Blue", "Dishonest : Cheat", "High : Low", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Gasoline : Ignite', options: ["Day : Night", "Big : Small", "Tall : Short", "Power : Energy"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Mistake : Correct', options: ["Soft : Hard", "Run : Walk", "Bright : Dark", "Obsolete : Modernize"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Stream : River', options: ["Fast : Slow", "In : Out", "Hot : Cold", "Hill : Plateau"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Success : Proud', options: ["Left : Right", "Cure : Well", "Up : Down", "Red : Yellow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Small : Tiny', options: ["Cold : Hot", "In : Out", "Tall : High", "Day : Night"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Old : New', options: ["Smart : Wise", "Fast : Quick", "Dirty : Clean", "Big : Large"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Bird : Eagle', options: ["Fast : Slow", "Mammal : Camel", "Up : Down", "Hot : Cold"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Travel : Pleasure', options: ["Day : Night", "Red : Color", "Running : Sweating", "Big : Small"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Bees : Honey', options: ["Bright : Dark", "Snake : Poison", "Tall : Short", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Hot : Cold', options: ["Big : Huge", "Friend : Enemy", "Fast : Quick", "Smart : Clever"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sun : Heat', options: ["Exercise : Health", "Blue : Color", "Day : Night", "Run : Walk"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hair : Brushing', options: ["Car : Fixing", "Tall : Short", "Hot : Cold", "In : Out"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Pure : Clean', options: ["High : Low", "Broad : Wide", "Day : Night", "Soft : Hard"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Water : Pipes', options: ["Up : Down", "Electricity : Cables", "Fast : Slow", "Red : Green"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Traffic : Tension', options: ["Light : Dark", "Failure : Stress", "Hot : Cold", "Big : Small"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Driver : License', options: ["Run : Walk", "Day : Night", "Soft : Hard", "Flying : Ticket"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Scissors : Paper', options: ["Fast : Slow", "Sharpener : Pencil", "In : Out", "Bright : Dark"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Accident : Damage', options: ["Day : Night", "Tall : Short", "Red : Blue", "Speed : Fine"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Discuss : Argue', options: ["Nibble : Eat", "Whisper : Shout", "Book : Page", "Sun : Rain"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Cotton : Shirt', options: ["Cold : Warm", "Wood : Table", "Fruit : Jam", "Run : Fast"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Sandstorm : Weather', options: ["Pen : Ink", "Tree : Leaf", "Lizard : Reptile", "Dog : Animal"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Take : Snatch', options: ["Light : Dark", "Shoe : Sock", "Look : Stare", "Glance : Gaze"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Drill : Hole', options: ["Chair : Table", "Manufacture : Product", "Day : Night", "Build : House"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Biology : Science', options: ["Water : Ice", "Shirt : Clothing", "Drive : Car", "Boot : Footwear"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Scissors : Cut', options: ["Hot : Cold", "Shovel : Dig", "Pen : Write", "Paper : Pen"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Lamb : Sheep', options: ["Big : Small", "Kitten : Cat", "Seed : Tree", "Walk : Run"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Hunger : Food', options: ["Bird : Sky", "Sick : Doctor", "Cat : Dog", "Thirst : Water"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sugar : Cane', options: ["Fish : Water", "Pearl : Oyster", "Silk : Worm", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sigh : Relief', options: ["Door : Window", "Sweat : Exercise", "Left : Right", "Yawn : Tiredness"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Money : Poverty', options: ["Apple : Tree", "Water : Drought", "Book : Read", "Light : Darkness"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Toe : Foot', options: ["Branch : Tree", "Up : Down", "Grape : Vines", "Fire : Ice"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Combination : Separation', options: ["Safety : Danger", "Peace : War", "Sea : Ship", "Hand : Glove"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Level : Flat', options: ["Fast : Slow", "Raise : Lift", "Huge : Large", "Dog : Bark"], correctAnswer: 'B' },
  { category: 'Wording', questionText: 'Fill in the blanks: "General ......... airports are smaller airports that process private, business, commercial, and ......... flights."', options: ['Aviation – charter', 'Local – astral', 'Regional – cargo', 'Domestic – international'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "The end is coming for New York’s public pay phones. New York City ......... say workers are currently ......... public pay phones from the city’s streets."', options: ['Police – installing', 'Citizens – repairing', 'Officials – removing', 'Mayors – upgrading'], correctAnswer: 'C' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Where you live has a huge ......... on your cultural heritage and also your ......... surroundings."', options: ['Decision – secondary', 'Impact – immediate', 'Adventures – distant', 'Effect – foreign'], correctAnswer: 'B' },
    { category: 'Wording', questionText: 'Fill in the blanks: "......... is the art of creating 3-dimensional objects from clay, it has many ......... including shaping, sculpting, drying, and firing to make durable pieces."', options: ['Sculpting – styles', 'Pottery – methods', 'Crafts – tools', 'Ceramics – technique'], correctAnswer: 'D' },
    { category: 'Wording', questionText: 'Fill in the blanks: "......... were sent to space all around the earth by humans to ......... data."', options: ['Satellite – gather', 'Rockets – destroy', 'Probes – delete', 'Telescopes – hide'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Fish have ........... tails, aquatic ........... have horizontal."', options: ['Vertical – mammals', 'Horizontal – fish', 'Straight – animals', 'Curved – whales'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "The Grand Canyon in Arizona is amazing to see in person. Photos and videos are beautiful, but they do not do it ...... as the true experience is hard to fully........"', options: ['Justice – comprehend', 'Beauty – see', 'Credit – enjoy', 'Honor – describe'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Sharks are ......... to the ocean ; one of their ........ is helping maintain the balance of the food chain by controlling the population of other species."', options: ['Crucial – roles', 'Recommended – tasks', 'Harmful – duties', 'Dangerous – habits'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Babies learn words by listening to, repeating, and being exposed to language, They usually........... new words quickly, and by around 18 months they can ......... them to make short sentences."', options: ['Pick up – combine', 'Forget – repeat', 'Ignore – speak', 'Understand – draw'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "One of the greatest ......... of successful teaching is student boredom. This is often......... by the deadening predictability of much classroom time."', options: ['Rival – motivated', 'Enemies – caused', 'Goals – reduced', 'Benefits – explained'], correctAnswer: 'B' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Ali\'s ......... was on his desk all the ........."', options: ['Notebook – time', 'Bag – morning', 'Phone – week', 'Laptop – shift'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "The Radisson hotel is rewarding its residents with a new ............and extra............by offering extra points and special perks for their stays"', options: ['Experience – benefits', 'Discount – prices', 'Room – services', 'Reward – money'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "It is important for companies to reward employees with _____ such as _____"', options: ['Experience – traveling', 'Salaries – working', 'Bonuses – sitting', 'Prizes – sleeping'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "What the hardest language question is _____ even linguistics _____ it"', options: ['Controversial – debate', 'Simple – understand', 'Easy – prove', 'Unknown – solve'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "The Vikings\' journeys led to the...........of new lands and the........ of the UK and another countries"', options: ['Conquest – formation', 'Discovery – destruction', 'Travel – loss', 'Arrival – birth'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "The flat rock ......... down the riverbank through the ............ blue river"', options: ['Extends – beautiful', 'Floats – dirty', 'Sinks – dark', 'Breaks – deep'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Recent ............ have helped deaf people to learn and communicate so they can now watch television without the need for someone to ............for them"', options: ['Innovations – interpret', 'Tools – listen', 'Phones – hear', 'Devices – speak'], correctAnswer: 'A' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Carbon dioxide is used in many ........ and in ............ to give it more fizz."', options: ['Factories – perishables', 'Industries – beverages', 'Stores – foods', 'Machines – liquids'], correctAnswer: 'B' },
    { category: 'Wording', questionText: 'Fill in the blanks: "Some people link.........ideas to failure, but I think failure helps them become more.........."', options: ['Negative – resilient', 'Positive – weak', 'New – afraid', 'Old – strong'], correctAnswer: 'A' },

    // --- WORDING: CONTEXTUAL ERRORS ---
    { category: 'Wording', passage: 'The reintroduction of wolves has been commonly debated. These beloved beasts were once the most populous animals. Apparently, they headed back to the mainland during winter 2011-2012. Scattered throughout America, Canada, and mainland Europe.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Commonly', 'Beloved', 'Populous', 'Scattered'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Public reliance on plastic waste, paper, and glass, is increasing due to local government initiatives and personal efforts. Participation in these programs is high time on.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Increasing', 'Initiatives', 'Participation', 'Reliance'], correctAnswer: 'D' },
    { category: 'Wording', passage: 'Veganism is an extension of vegetarianism that avoids the use of animal products, which has uncertain benefits for the environment, animals, humans, and lifestyle.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Extension', 'Avoids', 'Uncertain', 'Benefits'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'Back in 1949, the scientist Johan von Neumann made a statement which was both extraordinarily wrong and profoundly correct. "It would appear," he wrote, "that we have reached the limits of what it is possible to corrupt with computer technology..."', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Extraordinarily', 'Corrupt', 'Profoundly', 'Limits'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Shannon Lucid was the first ever woman in space. She flew in space five times, including a prolonged mission. Lucid held the record for the longest executive spent in space by a woman.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Prolonged', 'Record', 'Executive', 'Mission'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'In New York the juvenile crime rates increased, so the government held parents and legal guardians responsible for their children\'s belongings, and they may pay a fine up to $5000 and take parenting classes.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Juvenile', 'Guardians', 'Responsible', 'Belongings'], correctAnswer: 'D' },
    { category: 'Wording', passage: 'Beetles and peacocks are concealed in colors that change as onlookers move. It\'s produced when tiny structures reflect light.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Concealed', 'Onlookers', 'Produced', 'Structures'], correctAnswer: 'A' },
    { category: 'Wording', passage: 'In 1879, an American philosopher named Henry David Thoreau decided to live in the woods to reduce his philosophy. He believed that life should be lived simply, leaving all the luxuries behind.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Philosopher', 'Reduce', 'Luxuries', 'Believed'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'When people are asked how many languages there are, the answers vary. One aimless sampling of New Yorkers said "probably several hundred." However, this is not close.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Vary', 'Aimless', 'Sampling', 'Close'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'News is everywhere, they serve events as soon as they happen. They also provide instant consideration of news.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Everywhere', 'Serve', 'Provide', 'Consideration'], correctAnswer: 'D' },
    { category: 'Wording', passage: 'Although humankind has not been able to travel outside its environment beyond space, scientists believe that in the near future it could become a multi-planetary species that can reach neighboring planets, such as Mars.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Humankind', 'Environment', 'Future', 'Species'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'If you want to purchase a car, the owner may expect you to be at their mercy, but you can approach the deal wisely to avoid paying a high premium.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Purchase', 'Mercy', 'Deal', 'Premium'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Dinosaurs appeared about 250 million years ago and they maintained their existence for 80 million years worldwide. Scientists found parts or species of dinosaurs that indicated some evolution into birds.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Appeared', 'Maintained', 'Indicated', 'Evolution'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'In hot and humid climates, sweat production increases, leading to salt loss and physical exertion increases this effect. Exchanging body salt is not always recommended, as it may disturb water and salt balance and reduce performance efficiency.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Increases', 'Exchanging', 'Recommended', 'Disturb'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Do not touch the internal parts of the unit. Leave any required service work to qualified service personnel only. If this hardware is dropped, immediately remove the battery or unplug the AC adaptor.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Internal', 'Hardware', 'Remove', 'Adaptor'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Our vision is to craft the brands and choice of drinks that people love, to refresh them in body and spirit. And done in ways that create a more sustainable business and better shared future that makes a additional in people\'s lives, communities and our planet.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Vision', 'Sustainable', 'Additional', 'Communities'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'In Finland, students have both high reading proficiency and high life satisfaction. This is most likely because Finnish students have a healthy balance of school and free time, allowing them to trust more extracurricular activities.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Proficiency', 'Satisfaction', 'Trust', 'Extracurricular'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'Getting cheap flights often requires spontaneous in travel dates and plans, being flexible with your travel dates, destinations, or options helps you find the best airfare transactions and deals.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Spontaneous', 'Flexible', 'Transactions', 'Deals'], correctAnswer: 'A' },
    { category: 'Wording', passage: 'Some kind of spider is very dangerous to humans. It is raised in Australia.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Dangerous', 'Humans', 'Raised', 'Australia'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'In March 2023, a disgruntled ex-employee accessed his unimportant computer test systems after being terminated and deleted 180 virtual servers on the company\'s network, resulting in services becoming unavailable and significant disruption to operations.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Disgruntled', 'Unimportant', 'Terminated', 'Disruption'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'In the space of a little more than a year, events provide that made a mockery of the claim that the lavish compensation paid to financiers was justified by their exceptional skills, particularly in the realm of risk management.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Provide', 'Lavish', 'Financiers', 'Realm'], correctAnswer: 'A' },
    { category: 'Wording', passage: 'Students have many career opinions and pathways.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Career', 'Opinions', 'Pathways', 'Students'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'You should duplicate yourself to be more successful.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Duplicate', 'Successful', 'Work', 'Think'], correctAnswer: 'A' },
    { category: 'Wording', passage: 'People should manage their anger, otherwise it could cause fragility of relationships.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Manage', 'Anger', 'Fragility', 'Relationships'], correctAnswer: 'C' },
    { category: 'Wording', passage: 'Philanthropy is the act of helping others, and it can also be done through observing to help those who need it.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Philanthropy', 'Observing', 'Need', 'Act'], correctAnswer: 'B' },
    { category: 'Wording', passage: '3D printers are most likely to take over manufacturing in the future. Creative people who call themselves makers have already formed communities to share their noxious work online and reach more people.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Manufacturing', 'Communities', 'Noxious', 'Reach'], correctAnswer: 'C' },
    { category: 'Wording', passage: '"The Story of My Experiments with Truth" is a book about Gandhi\'s personal life. He was a key factor of the century, and the book provides information about his life as one of the leaders in India who had an impact on history and war.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Experiments', 'Factor', 'Provides', 'Leaders'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'People who live abroad urgently should respect the laws of those countries.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Abroad', 'Urgently', 'Respect', 'Laws'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'A psychologist graded the assessment based on traits, personalities, and colors, saying that colors classify people, and a version of it is available online for the public.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Psychologist', 'Graded', 'Traits', 'Classify'], correctAnswer: 'B' },
    { category: 'Wording', passage: 'Speeding and attempts at controlling it is not a modern solution. For example, in the introduction of horseless carriages in the 19th century, they were prohibited from going faster than walking pace, and a man carrying a red flag was required to walk in front of the vehicle to prevent it from hitting people.', questionText: 'Which word is used INCORRECTLY in the context above?', options: ['Speeding', 'Modern', 'Solution', 'Prohibited'], correctAnswer: 'C' }];

// --- BUNDLED READING PASSAGES ---
const readingBundles = [
    {
        title: "The Industrial Immigration",
    passageText: "Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories.\n\nWhile the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation's cities became an invaluable economic and cultural resource.\n\nAlthough cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century\nAt this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization.\n\nBefore the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely.\nThe development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous.",
    questions: [
        { questionText: "1) Who does \"whom\" refer to in the second paragraph?", options: ["Immigrants", "Workers", "Americans", "Farmers"], correctAnswer: "A" },
        { questionText: "2) What did they work before industrialization?", options: ["Agriculture", "Factories", "Construction", "Trade"], correctAnswer: "A" },
        { questionText: "3) What is the author's opinion about workers' work conditions?", options: ["It was hard", "It was comfortable", "It was fair", "It was easy"], correctAnswer: "A" },
        { questionText: "4) What can you understand from this passage?", options: ["The immigrants felt lonely", "The author is European", "The increase in electricity made the factories work the whole day", "Wages were very high"], correctAnswer: "C" },
        { questionText: "5) What is the main idea?", options: ["Industrialization led to urbanization", "Electricity stopped factory work", "Agriculture replaced cities", "Immigrants left America"], correctAnswer: "A" },
        { questionText: "6) What is the meaning of ( INITIAL ) ?", options: ["Early", "Past", "Difficult", "Late"], correctAnswer: "A" }
    ]
    },
    {
        title: "Accounting",
    passageText: "Accounting is the process of organizing, analyzing, and communicating financial information that is used for decision-making. Financial information is typically prepared by accountants—those trained in the specific techniques and practices of the profession.\n\nA solid understanding of accounting can for many still serve as a useful resource. In fact, it is hard to think of a profession where a foundation in the principles of accounting would not be beneficial.\n\nA traditional adage states that \"accounting is the language of business.\" While that is true, you can also say that \"accounting is the language of life.\" At some point, most people will make a decision that relies on accounting information. For example, you may have to decide whether it is better to lease or buy a vehicle. Likewise, a college graduate may have to decide whether it is better to take a higher-paying job in a bigger city (where the cost of living is also higher) or a job in a smaller community where both the pay and cost of living may be lower. In a professional setting, a theater manager may want to know if the most recent play was profitable. Similarly, the owner of the local plumbing business may want to know whether it is worthwhile to pay an employee to be \"on call\" for emergencies during off-hours and weekends\n\nWhether personal or professional, accounting information plays a vital role in all of these decisions.\n\nYou may have noticed that the decisions in these scenarios would be based on factors that include both financial and non-financial information. For instance, when deciding whether to lease or buy a vehicle, you would consider not only the monthly payments but also such factors as vehicle maintenance and reliability.\n\nThe college graduate considering two job offers might weigh factors such as working hours, ease of commuting, and options for shopping and entertainment",
    questions: [
        { questionText: "1) What's the main idea?", options: ["Accounting is the language of everyday life", "Accounting is used in both personal and professional life", "Account \" finance \" was only useful for business owners", "Accounting is only for trained specialists"], correctAnswer: "B" },
        { questionText: "2) What do we learn/understand from this passage?", options: ["College students usually pick high-paying jobs.", "Business owners need an accountant to manage their finances", "Accountants only use financial factors in their analysis", "Finance is needed in life not only in business"], correctAnswer: "B" },
        { questionText: "3) What decision did the graduate have to make?", options: ["Choosing where to live", "Choosing to lease a car or buy a car", "Deciding between one job and another", "Deciding whether to go to college"], correctAnswer: "C" },
        { questionText: "4) What does the author think about accountants?", options: ["They play an important role in every person's life even in personal matters", "They were organized", "They used the language of life", "Accountants are highly trained specialists in their field"], correctAnswer: "D" },
        { questionText: "5) Which of the following is true about accounting?", options: ["Accounting has an important effect on personal and professional life", "Accounting is only relevant for business owners", "Accounting is unnecessary for personal decisions", "Accounting principles are rarely useful"], correctAnswer: "A" },
        { questionText: "6) What is true from the context of the passage?", options: ["Accountants only use financial factors", "Accountants train a lot", "Accountants are highly paid", "Every business needs an accountant"], correctAnswer: "D" },
        { questionText: "7) What does (scenarios) refer to in the passage?", options: ["Situations", "Decisions", "Options", "Problems"], correctAnswer: "A" }
    ]
    },
    {
        title: "Entrepreneurs and Small Businesses",
        passageText: "Summary: The passage explained how some people believe only a few are born with the ability to become entrepreneurs, but it proves this idea wrong by saying that anyone can become an entrepreneur if they develop certain characteristics and set clear goals. It also talked about the definition of an entrepreneur and whether small business owners should be considered entrepreneurs. (Student Summary not actual)",
        questions: [
            { questionText: "1) What does (one) refer to in the passage? The sentence was \"In an ideal world, you would create a business where one doesn't already exist\"", options: ["Business", "World", "Idea", "Entrepreneur"], correctAnswer: "A" },
            { questionText: "2) What does the author think about small business owners?", options: ["They are different from entrepreneurs", "They take risks", "They open restaurants", "They are born with special traits"], correctAnswer: "A" },
            { questionText: "3) What is the main idea of the passage?", options: ["It is difficult to determine a definition of entrepreneur.", "The difference between small business owners, entrepreneurs and franchisers", "Anyone can easily start a business", "Small business owners never take risks"], correctAnswer: "B" }
        ]
    },
    {
        title: "Marketing (Business Communication)",
        passageText: "Summary: It talked about the value of a company's product and explained that customers decide its value, emphasizing that a business's main focus should be on the customer. It also mentioned that the values are determined by buyers and discussed a philosophy of market orientation - explaining how businesses must prioritize understanding and satisfying customer needs and wants by creating products or services mainly for the buyers.",
        questions: [
            { questionText: "1) What does (they) refer to in paragraph 2?", options: ["Businesses", "Managers", "Buyers", "Products"], correctAnswer: "C" },
            { questionText: "2) Who determines the product's value?", options: ["The customers (Buyers)", "Economies", "Managers", "Companies"], correctAnswer: "A" },
            { questionText: "3) What is the main idea of the passage?", options: ["Good marketing depends on communication and understanding customer needs", "Value is determined by manufacturing costs", "Businesses should ignore buyer feedback", "Marketing is only about advertising"], correctAnswer: "A" },
            { questionText: "4) What is the best synonym of the highlighted word ( EVOLVING ) ?", options: ["Develop", "Decline", "Stop", "Repeat"], correctAnswer: "A" },
            { questionText: "5) What is the main idea of the 2nd paragraph about good communication?", options: ["Ethics and honesty", "Having them understand your point of view", "Avoid talking about the problem", "Selling products quickly"], correctAnswer: "A" }
        ]
    },
    {
    title: "Teachers- student relationship (education psychology)",
    passageText: "Summary: The passage was written for the teachers. It talked about how even if you are a good teacher, things will not always go your way and you will have difficult times. Education has become boring, and students are not excited to learn anymore. Teachers face daily challenges because they can never predict what will happen in class, you'll be surprised by the students. This is why the word \"novelty\" was used, meaning something unexpected or new. Their way of thinking is different from each other. A student can know more information than what the teacher thinks they know. It also referenced a quote from some books. In the end, it just says how to be the best teacher that you can be, overall.",
    questions: [
        { 
            questionText: "1) What does the underlined word (that) refer to?", 
            options: ["teaching", "insight", "Student", "teacher"], 
            correctAnswer: "B" 
        },
        { 
            questionText: "2) What was the meaning of novelty?", 
            options: ["surprise", "Courage", "Routine", "Boredom"], 
            correctAnswer: "A" 
        },
        { 
            questionText: "3) What is the main idea of the first paragraph?", 
            options: ["Education has become boring and students are not motivated.", "The teachers try their best in everything", "It keeps on changing and improving", "Students know more than teachers"], 
            correctAnswer: "B" 
        },
        { 
            questionText: "4) What can you tell about paragraph (2) ?", 
            options: ["Teaching is boring and everything is the same", "While teaching, you will meet many students with different ways of thinking.", "Showing how teachers need to try their best", "how teaching improved their life"], 
            correctAnswer: "B" 
        },
        { 
            questionText: "5) What does the meaning of \"bad things happen to good teachers\"?", 
            options: ["Even teachers with good intentions can end up with bad students", "Good teachers never face challenges", "Teachers are to blame for bad student behavior", "Difficulties only happen to inexperienced teachers"], 
            correctAnswer: "A" 
        },
        { 
            questionText: "6) What is the main idea of paragraph 2 ?", 
            options: ["Teaching helps teachers know their students' strength and weaknesses", "Students should teach the class", "Classroom environment is completely predictable", "Books are unnecessary for teaching"], 
            correctAnswer: "A" 
        },
        { 
            questionText: "7) What was the idea of the final paragraph?", 
            options: ["Teacher–student interactions can become negative when understanding and communication fail.", "Teachers should give up when faced with difficulties", "Students always communicate effectively", "Education psychology is irrelevant"], 
            correctAnswer: "A" 
        }
    ]
    },
    {
    title: "An Entrepreneurial Mindset",
    passageText: "An entrepreneurial mindset refers to a specific state of mind which orients human conduct towards entrepreneurial activities and outcomes. Individuals with an entrepreneurial mindset are often drawn to opportunities, innovation, and new value creation. Characteristics inherent in this mindset include the willingness to take risks, the ability to withstand and learn from failure, and the readiness to embrace uncertainty.\n\nAt its core, the entrepreneurial mindset is about a person's attitude towards life and business. It is a way of thinking that enables an individual to overcome challenges, be decisive, and accept responsibility for the outcomes of their choices. Rather than a birthright, it's an acquired constellation of skills, attitudes, and behaviors that can be honed and developed over time.",
    questions: [
        {
            questionText: "1) Meaning of mindset?",
            options: ["Attitude", "Birthright", "Skill", "Uncertainty"],
            correctAnswer: "A"
        },
        {
            questionText: "2) From paragraph (1) what does the author think of who could be an entrepreneur?",
            options: [
                "They needed to have certain characteristics and traits",
                "Their parents were entrepreneurs (had a business)",
                "Only people born with inherent talents",
                "Anyone who graduates with a business degree"
            ],
            correctAnswer: "A"
        },
        {
            questionText: "3) What could help someone to become an entrepreneur?",
            options: [
                "Certain characteristics, ideas, and goals",
                "Having wealthy parents",
                "Avoiding all financial risk",
                "Working without setting clear goals"
            ],
            correctAnswer: "A"
        }
    ]
    },
    {
    title: "The biogeography",
    passageText: "Many forces influence the communities of living organisms present in different parts of the biosphere (all of the parts of Earth inhabited by life). Many abiotic forces influence where life can exist and the types of organisms found in different parts of the biosphere. The abiotic factors influence the distribution of biomes: large areas of land with similar climate, flora, and fauna.\n\nBiogeography is the study of the geographic distribution of living things and the abiotic factors that affect their distribution. Ecologists who study biogeography examine patterns of species distribution. No species exists everywhere; for example, the Venus flytrap is endemic to a small area in North and South Carolina. An endemic species is one which is naturally found only in a specific geographic area that is usually restricted in size. Other species are generalists: species which live in a wide variety of geographic areas; the raccoon, for example, It is native to most of North and Central America.\n\nAbiotic factors such as temperature and rainfall vary based mainly on latitude and elevation. As these abiotic factors change, the composition of plant and animal communities also changes. For example, if you were to begin a journey at the equator and walk north, you would notice gradual changes in plant communities. At the beginning of your journey, you would see tropical wet forests with broad-leaved evergreen trees, which are characteristic of plant communities found near the equator. As you continued to travel north, you would see these broad-leaved evergreen plants eventually give rise to seasonally dry forests with scattered trees. You would also begin to notice changes in temperature and moisture. At about 30 degrees north, these forests would give way to deserts, which are characterized by low precipitation. Moving farther north, you would see that deserts are replaced by grasslands or prairies. Eventually, grasslands are replaced by deciduous temperate forests. These deciduous forests give way to the boreal forests found in the subarctic, the area south of the Arctic Circle. Finally, you would reach the Arctic tundra, which is found at the most northern latitudes\n\nThis trek north reveals gradual changes in both climate and the types of organisms that have adapted to environmental factors associated with ecosystems found at different latitudes. However, different ecosystems exist at the same latitude due in part to abiotic factors such as jet streams, the Gulf Stream, and ocean currents. If you were to hike up a mountain, the changes you would see in the vegetation would parallel those as you move to higher latitudes.",
    questions: [
        {
            questionText: "1) What is unusual about Venus flytraps?",
            options: [
                "They don't exist everywhere",
                "They were restricted in size",
                "They were only in North and South Carolina",
                "They were native to North and central America"
            ],
            correctAnswer: "C"
        },
        {
            questionText: "2) What is the main idea of the passage?",
            options: [
                "Organisms are different depending on where you go",
                "Abiotic factors affect organisms and the environment",
                "Raccoons are found everywhere in North America",
                "Mountains have no impact on local vegetation"
            ],
            correctAnswer: "B"
        },
        {
            questionText: "3) What does \"It\" refer to in paragraph ( 2 ) ?",
            options: [
                "the raccoon",
                "Venus flytrap",
                "North America",
                "endemic species"
            ],
            correctAnswer: "A"
        },
        {
            questionText: "4) What can you understand from the passage?",
            options: [
                "Deserts 30 degrees to the north have places of dry forests",
                "Plants on the equator are found nowhere else",
                "Abiotic Factors change based on mountains and rainfall",
                "South of the equator has similar organisms"
            ],
            correctAnswer: "A"
        },
        {
            questionText: "5) What does the word \"composition\" refer to in context?",
            options: [
                "Appearance",
                "presence",
                "structure",
                "location"
            ],
            correctAnswer: "C"
        }
    ]
    },
    {
    title: "Business ethics",
    passageText: "Business ethics are considered to be the blueprint for building a successful organization. If an organization is built on socially responsible values, it will be stronger than an organization that is built on profit alone. More than just a positive reputation, the core ethics of a business dictate how every decision, process, and procedure will take place. This steadfast governance applies even if the business faces hard times or difficult situations. Some will even argue that businesses require full transparency in today’s world. Over the last few decades, numerous cases of bad business practices have made headlines. From McDonald’s funding of President Nixon’s campaign in an effort to reduce workers’ wages in the 1970s, to the more recent case of Uber employees alleging misconduct and the company’s CEO was inside a driver’s car and he had a public meltdown in it, there’s no shortage of ethics-related problems in the business world. Businesses are more than people working together to offer a product or service. Businesses are often viewed as entities that should protect stakeholders from unethical behaviors and activities. A set of governing rules should be in place to set the bar high for ethical compliance in every organization. The idea of business ethics may seem subjective, but it comes down to acceptable levels of behavior for each individual who makes up the organization. This behavior must start at the top with responsible actions demonstrated by leadership. By doing so, leaders create a set of rules that are to be followed by others in the company. These rules can be based on the deep values that the company has concerning the quality of products and services, the commitment to customers, or how the organization gives something back to the community. The more a company lives by its set of ethics, the more likely it is to be successful.;.",
    questions: [
        {
            questionText: "1) Which company supported lower minimum wages in the passage?",
            options: ["Nixon", "McDonald", "CEO", "Uber"],
            correctAnswer: "B"
        },
        {
            questionText: "2) What does \"it\" refer to in the sentence: \"The idea of business ethics may seem subjective, but it...\"?",
            options: ["Idea", "Business", "ethics", "Company"],
            correctAnswer: "A"
        },
        {
            questionText: "3) What does \"it\" refer to in paragraph 2 regarding the driver's car?",
            options: ["Car", "Company", "Meltdown", "Driver"],
            correctAnswer: "A"
        },
        {
            questionText: "4) What does the author think about leaders?",
            options: [
                "Leaders should give support and teaching to their employees",
                "The manager needs to set a good example for others to follow",
                "Leaders should focus solely on profit margins",
                "Leaders do not influence organizational behavior"
            ],
            correctAnswer: "B"
        },
        {
            questionText: "5) What does \"CORE\" refer to in paragraph 1?",
            options: ["Central", "Ideal", "Probable", "Singular"],
            correctAnswer: "A"
        },
        {
            questionText: "6) What is the main idea of the passage?",
            options: [
                "A good business needs to have a good reputation",
                "Profit is the single most important goal for companies",
                "Minimum wages are beneficial for all corporations",
                "Leadership should ignore ethical guidelines"
            ],
            correctAnswer: "A"
        }
    ]
    },
    {
    title: "Business ethics",
    passageText: "Business ethics are considered to be the blueprint for building a successful organization. If an organization is built on socially responsible values, it will be stronger than an organization that is built on profit alone. More than just a positive reputation, the core ethics of a business dictate how every decision, process, and procedure will take place. This steadfast governance applies even if the business faces hard times or difficult situations. Some will even argue that businesses require full transparency in today’s world.\n\nOver the last few decades, numerous cases of bad business practices have made headlines. From McDonald’s funding of President Nixon’s campaign in an effort to reduce workers’ wages in the 1970s, to the more recent case of Uber employees alleging misconduct and the company’s CEO was inside a driver’s car and he had a public meltdown in it, there’s no shortage of ethics-related problems in the business world.\n\nBusinesses are more than people working together to offer a product or service. Businesses are often viewed as entities that should protect stakeholders from unethical behaviors and activities. A set of governing rules should be in place to set the bar high for ethical compliance in every organization.\n\nThe idea of business ethics may seem subjective, but it comes down to acceptable levels of behavior for each individual who makes up the organization. This behavior must start at the top with responsible actions demonstrated by leadership. By doing so, leaders create a set of rules that are to be followed by others in the company. These rules can be based on the deep values that the company has concerning the quality of products and services, the commitment to customers, or how the organization gives something back to the community. The more a company lives by its set of ethics, the more likely it is to be successful.",
    questions: [
        {
            questionText: "1) Which company supported lower minimum wages in the passage?",
            options: ["Nixon", "McDonald", "CEO", "Uber"],
            correctAnswer: "B"
        },
        {
            questionText: "2) What does \"it\" refer to in paragraph 4 (\"The idea of business ethics may seem subjective, but it...\")?",
            options: ["Idea", "Business", "ethics", "Company"],
            correctAnswer: "A"
        },
        {
            questionText: "3) What does \"it\" refer to in paragraph 2 regarding the driver's car?",
            options: ["Car", "Company", "Meltdown", "Driver"],
            correctAnswer: "A"
        },
        {
            questionText: "4) What does the author think about leaders?",
            options: [
                "Leaders should give support and teaching to their employees",
                "The manager needs to set a good example for others to follow",
                "Leaders should focus solely on profit margins",
                "Leaders do not influence organizational behavior"
            ],
            correctAnswer: "B"
        },
        {
            questionText: "5) What does \"CORE\" refer to in paragraph 1?",
            options: ["Central", "Ideal", "Probable", "Singular"],
            correctAnswer: "A"
        },
        {
            questionText: "6) What is the main idea of the passage?",
            options: [
                "A good business needs to have a good reputation",
                "Profit is the single most important goal for companies",
                "Minimum wages are beneficial for all corporations",
                "Leadership should ignore ethical guidelines"
            ],
            correctAnswer: "A"
        }
    ]
}
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- DYNAMIC PASSAGE FULLSCREEN MODAL ---
function showPassageModal(title, passageText) {
    let modal = document.getElementById('passage-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'passage-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(15, 23, 42, 0.75)';
        modal.style.backdropFilter = 'blur(4px)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '99999';
        modal.style.padding = '20px';
        modal.style.boxSizing = 'border-box';

        modal.innerHTML = `
            <div style="background: #ffffff; padding: 28px; border-radius: 16px; max-width: 680px; width: 100%; max-height: 80vh; display: flex; flex-direction: column; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
                    <h3 id="modal-passage-title" style="margin: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">>/h3>
                    <button id="close-passage-modal" style="background: none; border: none; font-size: 1.25rem; font-weight: bold; cursor: pointer; color: #64748b; padding: 4px 8px;">✕</button>
                </div>
                <div id="modal-passage-body" style="overflow-y: auto; color: #334155; line-height: 1.6; font-size: 0.98rem; white-space: pre-wrap; padding-right: 8px;">>/div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close via close button
        document.getElementById('close-passage-modal').onclick = function() {
            modal.style.display = 'none';
        };

        // Close via clicking outside the card
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Close via Escape key
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }

    document.getElementById('modal-passage-title').textContent = title << 'Full Passage';
    document.getElementById('modal-passage-body').textContent = passageText;
    modal.style.display = 'flex';
}

function prepareEnglishQuestions(category) {
let analogies = standardEnglishQuestions.filter(q => q.category === 'Analogies');
let wording = standardEnglishQuestions.filter(q => q.category === 'Wording');



shuffleArray(analogies);
shuffleArray(wording);

let bundlesCopy = JSON.parse(JSON.stringify(readingBundles));
shuffleArray(bundlesCopy);

let readingQuestions = [];
bundlesCopy.forEach(bundle => {
    bundle.questions.forEach(q => {
        readingQuestions.push({
            category: 'Reading: ' + bundle.title,
            passage: bundle.passageText,
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer
        });
    });
});

if (category) {
    const catLower = category.toLowerCase();
    if (catLower.startsWith('anal')) return analogies;
    if (catLower.startsWith('word')) return wording;
    if (catLower.startsWith('read')) return readingQuestions;
}

return [...analogies, ...wording, ...readingQuestions];
}
function prepareMathQuestions(category) {
    if (!category) return [...mathQuestions];
    const catLower = category.toLowerCase();
    return mathQuestions.filter(q => q.category && q.category.toLowerCase().includes(catLower));
}
let currentSubject = '';
let currentCategory = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = null;
let isSubmitted = false;

function switchView(viewId) {
document.querySelectorAll('.view').forEach(function(v) {
v.classList.add('hidden');
});
document.getElementById(viewId).classList.remove('hidden');
}

function showMenu() {
switchView('menu-view');
}

function showEnglishMenu() {
switchView('english-menu-view');
}

function showMathMenu() {
    switchView('math-menu-view');
}

function startQuiz(subject, category = null) {
    currentSubject = subject;
    currentCategory = category;
    switchView('quiz-view');

    document.getElementById('no-questions-state').classList.add('hidden');
    document.getElementById('quiz-content').classList.add('hidden');

    if (subject === 'math') {
        questions = prepareMathQuestions(category);
        shuffleArray(questions);
    } else if (subject === 'english') {
        questions = prepareEnglishQuestions(category);
    } else {
        questions = [];
    }

    currentIndex = 0;
    score = 0;

    if (questions.length === 0) {
        document.getElementById('empty-message').textContent = 'No questions found for this section.';
        document.getElementById('no-questions-state').classList.remove('hidden');
        document.getElementById('question-progress').textContent = '0 Questions';
    } else {
        document.getElementById('quiz-content').classList.remove('hidden');
        loadQuestion(0);
    }
}

function loadQuestion(index) {
currentIndex = index;
selectedOption = null;
isSubmitted = false;

const q = questions[currentIndex];
document.getElementById('question-progress').textContent = 'Question ' + (currentIndex + 1) + ' of ' + questions.length;
document.getElementById('score-display').textContent = score;

const imgElem = document.getElementById('question-image');
let textContainer = document.getElementById('question-text-container');

if (!textContainer) {
    textContainer = document.createElement('div');
    textContainer.id = 'question-text-container';
    textContainer.style.marginBottom = '20px';
    imgElem.parentNode.insertBefore(textContainer, imgElem);
}

if (q.imageSrc) {
    imgElem.src = q.imageSrc;
    imgElem.classList.remove('hidden');
    textContainer.classList.add('hidden');
} else {
    imgElem.classList.add('hidden');
    textContainer.classList.remove('hidden');
    textContainer.innerHTML = '';

    if (q.category) {
        const catDiv = document.createElement('div');
        catDiv.style.fontSize = '0.8rem';
        catDiv.style.fontWeight = '700';
        catDiv.style.color = '#4f46e5';
        catDiv.style.textTransform = 'uppercase';
        catDiv.style.letterSpacing = '1px';
        catDiv.style.marginBottom = '10px';
        catDiv.textContent = q.category;
        textContainer.appendChild(catDiv);
    }

    if (q.passage) {
        const passWrapper = document.createElement('div');
        passWrapper.style.backgroundColor = '#f8fafc';
        passWrapper.style.borderLeft = '4px solid #6366f1';
        passWrapper.style.padding = '12px';
        passWrapper.style.marginBottom = '16px';
        passWrapper.style.borderRadius = '6px';

        const passHeader = document.createElement('div');
        passHeader.style.display = 'flex';
        passHeader.style.justifyContent = 'space-between';
        passHeader.style.alignItems = 'center';
        passHeader.style.marginBottom = '8px';

        const passLabel = document.createElement('span');
        passLabel.style.fontSize = '0.75rem';
        passLabel.style.fontWeight = '700';
        passLabel.style.color = '#64748b';
        passLabel.style.textTransform = 'uppercase';
        passLabel.textContent = 'Passage Context';

        const expandBtn = document.createElement('button');
        expandBtn.textContent = '⤢ Expand Passage';
        expandBtn.style.padding = '4px 10px';
        expandBtn.style.fontSize = '0.75rem';
        expandBtn.style.fontWeight = '600';
        expandBtn.style.color = '#4f46e5';
        expandBtn.style.backgroundColor = '#e0e7ff';
        expandBtn.style.border = 'none';
        expandBtn.style.borderRadius = '4px';
        expandBtn.style.cursor = 'pointer';

        expandBtn.onclick = function() {
            showPassageModal(q.category, q.passage);
        };

        passHeader.appendChild(passLabel);
        passHeader.appendChild(expandBtn);

        const passDiv = document.createElement('div');
        passDiv.style.fontSize = '0.9rem';
        passDiv.style.color = '#334155';
        passDiv.style.lineHeight = '1.5';
        passDiv.style.maxHeight = '140px';
        passDiv.style.overflowY = 'auto';
        passDiv.style.whiteSpace = 'pre-wrap';
        passDiv.textContent = q.passage;

        passWrapper.appendChild(passHeader);
        passWrapper.appendChild(passDiv);
        textContainer.appendChild(passWrapper);
    }

    const qDiv = document.createElement('div');
    qDiv.style.fontSize = '1.05rem';
    qDiv.style.fontWeight = '600';
    qDiv.style.color = '#0f172a';
    qDiv.style.lineHeight = '1.4';
    qDiv.textContent = q.questionText;
    textContainer.appendChild(qDiv);
}

const buttons = document.querySelectorAll('.option-btn');
const labels = ['A', 'B', 'C', 'D'];
buttons.forEach(function(btn, idx) {
    btn.classList.remove('selected', 'correct', 'incorrect');
    btn.disabled = false;
    
    if (q.options && q.options[idx]) {
        btn.textContent = labels[idx] + ') ' + q.options[idx];
    } else {
        btn.textContent = labels[idx];
    }
});

document.getElementById('prev-btn').disabled = (currentIndex === 0);
document.getElementById('action-btn').disabled = true;
document.getElementById('action-btn').textContent = 'Submit';
}

function selectOption(index) {
if (isSubmitted) return;
selectedOption = index;

const buttons = document.querySelectorAll('.option-btn');
buttons.forEach(function(btn, idx) {
    if (idx === index) {
        btn.classList.add('selected');
    } else {
        btn.classList.remove('selected');
    }
});

document.getElementById('action-btn').disabled = false;
}

function handleAction() {
if (!isSubmitted) {
isSubmitted = true;
const options = ['A', 'B', 'C', 'D'];
const chosen = options[selectedOption];
const correct = questions[currentIndex].correctAnswer;
const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(function(btn, idx) {
        btn.disabled = true;
        if (options[idx] === correct) {
            btn.classList.add('correct');
        }
        if (idx === selectedOption && chosen !== correct) {
            btn.classList.add('incorrect');
        }
    });

    if (chosen === correct) {
        score++;
        document.getElementById('score-display').textContent = score;
    }

    if (currentIndex === (questions.length - 1)) {
        document.getElementById('action-btn').textContent = 'Finish';
    } else {
        document.getElementById('action-btn').textContent = 'Next Question';
    }
} else {
    if (currentIndex !== (questions.length - 1)) {
        loadQuestion(currentIndex + 1);
    } else {
        showResults();
    }
}
}

function prevQuestion() {
if (currentIndex !== 0) {
loadQuestion(currentIndex - 1);
}
}

function showResults() {
switchView('results-view');
document.getElementById('final-score-text').textContent = 'Final Score: ' + score + ' out of ' + questions.length;
}

function restartQuiz() {
startQuiz(currentSubject, currentCategory);
}
