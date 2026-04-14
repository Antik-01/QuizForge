// Quiz Application State
const quizState = {
    selectedTopic: null,
    numQuestions: 10,
    timeLimit: 10,
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: [],
    timeRemaining: 0,
    timerInterval: null,
    quizStartTime: null,
    quizEndTime: null
};

// Question Bank
const questionBank = {
    general: [
        { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: 1 },
        { question: "What is the largest planet in our solar system?", options: ["Mars", "Saturn", "Jupiter", "Neptune"], correct: 2 },
        { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
        { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
        { question: "Which element has the chemical symbol 'Au'?", options: ["Silver", "Gold", "Copper", "Aluminum"], correct: 1 },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
        { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
        { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Mercury", "Saturn"], correct: 1 },
        { question: "What is the tallest mammal?", options: ["Elephant", "Giraffe", "Horse", "Rhino"], correct: 1 },
        { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], correct: 2 },
        { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
        { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"], correct: 1 },
        { question: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "105°C"], correct: 2 },
        { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "South Korea"], correct: 1 },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
        { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], correct: 2 },
        { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3 }
    ],
    science: [
        { question: "What is H2O?", options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"], correct: 2 },
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correct: 1 },
        { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
        { question: "What is the chemical symbol for sodium?", options: ["S", "So", "Na", "N"], correct: 2 },
        { question: "How many bones are in the human body?", options: ["196", "206", "216", "226"], correct: 1 },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], correct: 2 },
        { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Neutron", "Nucleus"], correct: 3 },
        { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], correct: 1 },
        { question: "What is the study of plants called?", options: ["Zoology", "Botany", "Geology", "Biology"], correct: 1 },
        { question: "What type of animal is a dolphin?", options: ["Fish", "Mammal", "Reptile", "Amphibian"], correct: 1 },
        { question: "What is the freezing point of water?", options: ["0°C", "32°C", "-10°C", "5°C"], correct: 0 },
        { question: "Which vitamin is produced by the skin in sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3 },
        { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
        { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], correct: 2 },
        { question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], correct: 2 },
        { question: "What is the chemical formula for salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], correct: 0 },
        { question: "Which force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Tension"], correct: 2 },
        { question: "What is the largest star in our solar system?", options: ["Moon", "Earth", "Sun", "Mars"], correct: 2 },
        { question:"What is the chemical formula of water?", options:["H₂O","H₂O₂","HO","H₃O"],correct:0 },
        { question:"What is Newton's second law of motion?", options:["F=ma","F=mv","F=m/a","F=v/t"],correct:0 },
        { question:"Which planet is closest to the Sun?", options:["Mercury","Venus","Earth","Mars"],correct:0 },
        { question:"What is the speed of light in vacuum?", options:["3×10⁸ m/s","3×10⁶ m/s","3×10¹⁰ m/s","3×10⁵ m/s"],correct:0 },
        { question:"What gas do plants absorb during photosynthesis?", options:["CO₂","O₂","N₂","H₂"],correct:0 },
        { question:"What is the atomic number of Carbon?", options:["6","12","8","14"],correct:0 },
        { question:"Which part of the cell is called the 'powerhouse of the cell'?",opts:["Mitochondria","Nucleus","Ribosome","Cell membrane"],correct:0},
        { question:"What is the SI unit of electric current?", options:["Ampere","Volt","Watt","Ohm"],correct:0 },
        { question:"Which force keeps planets in orbit around the Sun?", options:["Gravity","Magnetism","Nuclear force","Friction"],correct:0 },
        { question:"What is the boiling point of water at sea level?", options:["100°C","90°C","110°C","212°F — both A and D"],correct:0 },
        { question:"DNA stands for:", options:["Deoxyribonucleic acid","Dinitrogen amino acid","Disodium nucleotide acid","Double-nitrogen acetate"],correct:0 },
        { question:"What type of bond involves sharing electrons?", options:["Covalent","Ionic","Metallic","Hydrogen"],correct:0 },
        { question:"What is the chemical symbol for gold?", options:["Au","Ag","Fe","Pb"],correct:0 },
        { question:"What is the unit of frequency?", options:["Hertz","Joule","Newton","Tesla"],correct:0 },
        { question:"What is the process by which a liquid turns to gas at its surface?", options:["Evaporation","Condensation","Sublimation","Boiling"],correct:0 },
        { question:"Ohm's law: V=", options:["IR","I/R","I+R","I²R"],correct:0 },
        { question:"Which law states that matter cannot be created or destroyed?", options:["Conservation of mass","Thermodynamics 2nd law","Newton's 1st law","Avogadro's law"],correct:0 },
        { question:"What organ produces insulin?", options:["Pancreas","Liver","Kidney","Spleen"],correct:0 },
        { question:"How many chromosomes does a normal human cell have?", options:["46","23","48","44"],correct:0 },
        { question: "What is DNA?", options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Deoxy Acid", "Dynamic Acid"], correct: 0 }
    ],
    history: [
        { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correct: 1 },
        { question: "In which year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
        { question: "Who discovered America?", options: ["Marco Polo", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"], correct: 1 },
        { question: "What was the ancient Roman language?", options: ["Greek", "Latin", "Hebrew", "Arabic"], correct: 1 },
        { question: "Who was the first man on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correct: 1 },
        { question: "In which country did the Industrial Revolution begin?", options: ["USA", "Germany", "England", "France"], correct: 2 },
        { question: "Who was known as the Iron Lady?", options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"], correct: 1 },
        { question: "What year did World War I begin?", options: ["1912", "1913", "1914", "1915"], correct: 2 },
        { question: "Who built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Persians"], correct: 2 },
        { question: "What was the Berlin Wall?", options: ["Ancient wall", "City fortification", "Cold War barrier", "Modern art"], correct: 2 },
        { question: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 1 },
        { question: "What empire was ruled by Julius Caesar?", options: ["Greek", "Persian", "Roman", "Ottoman"], correct: 2 },
        { question: "In which year did India gain independence?", options: ["1945", "1946", "1947", "1948"], correct: 2 },
        { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], correct: 2 },
        { question: "What was the name of the ship that brought the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Beagle", "Endeavour"], correct: 0 },
        { question: "Who was the Egyptian queen?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Nefertari"], correct: 1 },
        { question: "What event started World War I?", options: ["Pearl Harbor", "Assassination of Archduke", "Treaty of Versailles", "D-Day"], correct: 1 },
        { question: "Who was the first female Prime Minister of the UK?", options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth", "Queen Victoria"], correct: 1 },
        { question: "What was the Renaissance?", options: ["War", "Cultural movement", "Disease", "Revolution"], correct: 1 },
        { question: "Who unified Germany in 1871?", options: ["Hitler", "Bismarck", "Kaiser Wilhelm", "Frederick"], correct: 1 },
        { question:"In which year did World War II end?", options:["1945","1944","1946","1943"],correct:0 },
        { question:"Who was the first President of the United States?", options:["George Washington","Abraham Lincoln","Thomas Jefferson","John Adams"],correct:0 },
        { question:"The French Revolution began in which year?", options:["1789","1776","1815","1799"],correct:0 },
        { question:"Which ancient wonder was located in Alexandria, Egypt?", options:["Lighthouse","Colossus","Mausoleum","Hanging Gardens"],correct:0 },
        { question:"Who wrote the Magna Carta in 1215?", options:["It was sealed by King John","Pope Innocent III","Richard the Lionheart","William the Conqueror"],correct:0 },
        { question:"The Industrial Revolution began in which country?", options:["England","France","Germany","USA"],correct:0 },
        { question:"Who discovered America in 1492?", options:["Christopher Columbus","Amerigo Vespucci","Vasco da Gama","Ferdinand Magellan"],correct:0 },
        { question:"The Berlin Wall fell in which year?", options:["1989","1991","1987","1985"],correct:0 },
        { question:"Which empire was ruled by Genghis Khan?", options:["Mongol","Ottoman","Roman","Byzantine"],correct:0 },
        { question:"Who was the first woman to win a Nobel Prize?", options:["Marie Curie","Florence Nightingale","Amelia Earhart","Rosalind Franklin"],correct:0 },
        { question:"The Cold War was primarily between the USA and:", options:["Soviet Union","China","Germany","Japan"],correct:0 },
        { question:"In which year did India gain independence from Britain?", options:["1947","1945","1950","1942"],correct:0 },
        { question:"The Roman Empire fell in which year?", options:["476 AD","410 AD","550 AD","300 AD"],correct:0 },
        { question:"Who was the Egyptian queen who allied with Julius Caesar?", options:["Cleopatra","Nefertiti","Hatshepsut","Isis"],correct:0 },
        { question:"The Renaissance began in which country?", options:["Italy","France","England","Spain"],correct:0 },
        { question:"What was the name of the first artificial satellite?", options:["Sputnik","Explorer","Apollo","Vostok"],correct:0 },
        { question:"Which event triggered World War I?", options:["Assassination of Archduke Franz Ferdinand","Sinking of the Lusitania","Treaty of Versailles","Russian Revolution"],correct:0 },
        { question:"Who was the leader of Nazi Germany?", options:["Adolf Hitler","Heinrich Himmler","Joseph Goebbels","Hermann Göring"],correct:0 },
        { question:"The Great Wall of China was primarily built during which dynasty?", options:["Ming","Han","Qin","Tang"],correct:0 },
        { question:"Nelson Mandela served as President of South Africa from 1994 to:", options:["1999","2000","1997","2004"],correct:0 }
    ],
    geography: [
        { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
        { question: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], correct: 1 },
        { question: "What is the smallest ocean?", options: ["Atlantic", "Indian", "Arctic", "Southern"], correct: 2 },
        { question: "Which mountain range separates Europe and Asia?", options: ["Alps", "Himalayas", "Ural", "Rockies"], correct: 2 },
        { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2 },
        { question: "Which country has the most islands?", options: ["Philippines", "Indonesia", "Sweden", "Japan"], correct: 2 },
        { question: "What is the highest waterfall in the world?", options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], correct: 2 },
        { question: "Which desert is the hottest in the world?", options: ["Sahara", "Mojave", "Kalahari", "Lut Desert"], correct: 3, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
        { question: "What is the longest mountain range?", options: ["Rockies", "Himalayas", "Andes", "Alps"], correct: 2 },
        { question: "Which river flows through Paris?", options: ["Thames", "Seine", "Danube", "Rhine"], correct: 1 },
        { question: "What is the largest island in the world?", options: ["Madagascar", "Greenland", "New Guinea", "Borneo"], correct: 1 },
        { question: "Which country is both in Europe and Asia?", options: ["Russia", "Turkey", "Kazakhstan", "All of the above"], correct: 3 },
        { question: "What is the deepest part of the ocean?", options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"], correct: 2 },
        { question: "Which African country has the most pyramids?", options: ["Egypt", "Sudan", "Ethiopia", "Libya"], correct: 1 },
        { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
        { question: "Which sea is the saltiest?", options: ["Dead Sea", "Red Sea", "Black Sea", "Caspian Sea"], correct: 0 },
        { question: "What is the largest lake in the world?", options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], correct: 1 },
        { question: "Which country has the longest coastline?", options: ["Australia", "USA", "Canada", "Russia"], correct: 2 },
        { question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "English"], correct: 1 },
        { question: "Which country is known as the Land of Fire and Ice?", options: ["Norway", "Iceland", "Finland", "Greenland"], correct: 1 },
        { question:"What is the longest river in the world?", options:["Nile","Amazon","Yangtze","Mississippi"],correct:0 },
        { question:"Which is the largest continent by area?", options:["Asia","Africa","North America","Europe"],correct:0 },
        { question:"What is the capital of Australia?", options:["Canberra","Sydney","Melbourne","Brisbane"], correct:0 },
        { question:"What is the highest mountain in the world?", options:["Mount Everest","K2","Kangchenjunga","Lhotse"],correct:0 },
        { question:"The Sahara Desert is located in which continent?", options:["Africa","Asia","Australia","South America"],correct:0 },
        { question:"Which ocean is the largest?", options:["Pacific","Atlantic","Indian","Arctic"],correct:0 },
        { question:"What is the smallest country in the world?", options:["Vatican City","Monaco","San Marino","Liechtenstein"],correct:0 },
        { question:"The Amazon Rainforest is primarily located in which country?", options:["Brazil","Colombia","Peru","Venezuela"],correct:0 },
        { question:"What is the capital of Japan?", options:["Tokyo","Osaka","Kyoto","Hiroshima"], ans:0 },
        { question:"The Great Barrier Reef is located off the coast of which country?", options:["Australia","USA","Brazil","Indonesia"],correct:0 },
        { question:"Which country is known as the 'Land of the Rising Sun'?", options:["Japan","China","South Korea","Thailand"],correct:0 },
        { question:"How many countries are in Africa?", options:["54","48","60","52"],correct:0 },
        { question:"The Andes is the longest mountain range located in:", options:["South America","North America","Asia","Africa"],correct:0 },
        { question:"Which is the most densely populated country in the world?", options:["Monaco","Singapore","Bangladesh","China"],correct:0 },
        { question:"The River Thames flows through which city?", options:["London","Paris","Rome","Berlin"],correct:0 },
        { question:"Which country has the most time zones?", options:["France","Russia","USA","China"],correct:0 },
        { question:"What is the capital of Canada?", options:["Ottawa","Toronto","Vancouver","Montreal"],correct:0 },
        { question:"The Dead Sea borders which two countries?", options:["Jordan and Israel","Egypt and Israel","Jordan and Syria","Lebanon and Israel"],correct:0 },
        { question:"What is the currency of Brazil?", options:["Real","Peso","Dollar","Euro"],correct:0 }
    ],
    sports: [
        { question: "How many players are on a soccer team?", options: ["9", "10", "11", "12"], correct: 2 },
        { question: "What sport is known as 'the beautiful game'?", options: ["Basketball", "Soccer", "Tennis", "Cricket"], correct: 1 },
        { question: "How many rings are on the Olympic flag?", options: ["4", "5", "6", "7"], correct: 1 },
        { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Baseball"], correct: 1 },
        { question: "What is the maximum score in a single frame of bowling?", options: ["10", "20", "30", "40"], correct: 2 },
        { question: "Which country won the first FIFA World Cup?", options: ["Brazil", "Argentina", "Uruguay", "Germany"], correct: 2 },
        { question: "How long is an Olympic swimming pool?", options: ["25m", "50m", "75m", "100m"], correct: 1 },
        { question: "What does NBA stand for?", options: ["National Basketball Association", "North Basketball Alliance", "National Ball Association", "New Basketball Arena"], correct: 0 },
        { question: "In tennis, what is a score of zero called?", options: ["Nil", "Zero", "Love", "Nothing"], correct: 2 },
        { question: "How many minutes are in a soccer match?", options: ["80", "90", "100", "120"], correct: 1 },
        { question: "Which sport uses a shuttlecock?", options: ["Tennis", "Squash", "Badminton", "Table Tennis"], correct: 2 },
        { question: "What is the diameter of a basketball hoop?", options: ["16 inches", "18 inches", "20 inches", "22 inches"], correct: 1 },
        { question: "In which sport would you find a pommel horse?", options: ["Athletics", "Gymnastics", "Swimming", "Fencing"], correct: 1 },
        { question: "How many Grand Slam tournaments are there in tennis?", options: ["2", "3", "4", "5"], correct: 2 },
        { question: "What is the national sport of Canada?", options: ["Ice Hockey", "Lacrosse", "Both", "Baseball"], correct: 2 },
        { question: "In golf, what is one under par called?", options: ["Eagle", "Birdie", "Bogey", "Albatross"], correct: 1 },
        { question: "How many bases are on a baseball field?", options: ["2", "3", "4", "5"], correct: 2 },
        { question: "What is the height of a regulation basketball hoop?", options: ["9 feet", "10 feet", "11 feet", "12 feet"], correct: 1 },
        { question: "Which country has won the most Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], correct: 1 },
        { question: "What is the maximum break in snooker?", options: ["137", "147", "157", "167"], correct: 1 }
    ],
    mathematics: [
    { question:"What is the derivative of sin(x)?", options:["cos(x)","–cos(x)","sin(x)","–sin(x)"], correct:0 },
    { question:"If a triangle has angles 60°, 60°, and 60°, what type is it?", options:["Equilateral","Isosceles","Scalene","Right-angled"], correct:0 },
    { question:"What is the sum of interior angles of a hexagon?", options:["720°","540°","360°","900°"], correct:0 },
    { question:"Which of the following is NOT a prime number?", options:["51","53","59","61"], correct:0 },
    { question:"What is log₁₀(1000)?", options:["3","4","2","10"], correct:0 },
    { question:"Solve: 3x + 7 = 22. What is x?", options:["5","4","6","3"], correct:0 },
    { question:"What is the area of a circle with radius 7? (use π≈3.14)", options:["153.86","154.00","147.00","49π"], correct:0 },
    { question:"What is the slope of the line y = 3x + 5?", options:["3","5","8","1/3"], correct:0 },
    { question:"Which formula gives the nth term of an AP with first term a and common difference d?", options:["a+(n-1)d","a+nd","a(n-1)d","a/d^n"], correct:0 },
    { question:"The Fibonacci sequence starts 1, 1, 2, 3, 5, 8... what comes next?", options:["13","11","12","14"], correct:0 },
    { question:"What is tan(45°)?", options:["1","0","√2","1/√2"], correct:0 },
    { question:"What is 7! (7 factorial)?", options:["5040","720","40320","120"], correct:0 },
    { question:"Which number is both a perfect square and a perfect cube?", options:["64","16","81","49"], correct:0 },
    { question:"What is the determinant of [[1,2],[3,4]]?", options:["-2","10","14","2"], correct:0 },
    { question:"What does the Pythagorean theorem state?", options:["a²+b²=c²","a+b=c","a²-b²=c","a×b=c²"], correct:0 },
    { question:"What is 2⁸?", options:["256","128","512","64"], correct:0 },
    { question:"The median of [3,7,2,9,4] is:", options:["4","7","3","5"], correct:0 },
    { question:"Which property states a(b+c)=ab+ac?", options:["Distributive","Commutative","Associative","Identity"], correct:0 },
  ],
  technology: [
    { question:"What does CPU stand for?", options:["Central Processing Unit","Computer Personal Unit","Core Processing Utility","Central Program Unit"], correct:0 },
    { question:"Which language is primarily used for styling web pages?", options:["CSS","HTML","JavaScript","Python"], correct:0 },
    { question:"What does HTTP stand for?", options:["HyperText Transfer Protocol","High Transfer Text Protocol","HyperText Transmission Process","Host Text Transfer Protocol"], correct:0 },
    { question:"What is the binary representation of decimal 10?", options:["1010","1100","0110","1001"], correct:0 },
    { question:"Who co-founded Apple Inc.?", options:["Steve Jobs","Bill Gates","Elon Musk","Mark Zuckerberg"], correct:0 },
    { question:"What does RAM stand for?", options:["Random Access Memory","Read Access Memory","Rapid Application Memory","Read All Memory"], correct:0 },
    { question:"Which protocol is used to send emails?", options:["SMTP","HTTP","FTP","SSH"], correct:0 },
    { question:"What is the time complexity of binary search?", options:["O(log n)","O(n)","O(n²)","O(1)"], correct:0 },
    { question:"Which data structure uses LIFO (Last In, First Out)?", options:["Stack","Queue","Tree","Graph"], correct:0 },
    { question:"What does SQL stand for?", options:["Structured Query Language","Sequential Query Language","Structured Question Logic","Standard Query List"], correct:0 },
    { question:"What is the full form of IoT?", options:["Internet of Things","Internet of Technology","Integration of Things","Interface of Technology"], correct:0 },
    { question:"In Python, which keyword is used to define a function?", options:["def","func","function","define"], correct:0 },
    { question:"What is a 'firewall' in computing?", options:["Network security system","Type of CPU","RAM module","Storage device"], correct:0 },
    { question:"What does 'AI' stand for?", options:["Artificial Intelligence","Automated Integration","Advanced Interface","Analytical Information"], correct:0 },
    { question:"Which company developed the Android OS?", options:["Google","Apple","Microsoft","Samsung"], correct:0 },
    { question:"What is the main function of an operating system?", options:["Manage hardware and software resources","Run antivirus","Store data","Connect to internet"], correct:0 },
    { question:"Which layer of the OSI model handles routing?", options:["Network","Data Link","Transport","Application"], correct:0 },
    { question:"What does 'OOP' stand for in programming?", options:["Object-Oriented Programming","Open Output Processing","Object Output Program","Oriented Open Protocol"], correct:0 },
    { question:"What is the purpose of a compiler?", options:["Translate source code to machine code","Run a program","Store data","Connect networks"], correct:0 },
  ]
};

// Add image-based questions
questionBank.general.push(
    { question: "What landmark is shown in this image?", image: "https://images.unsplash.com/photo-1760724005050-3b90de6ab3bd?w=800", options: ["Big Ben", "Eiffel Tower", "Statue of Liberty", "Colosseum"], correct: 1 },
    { question: "What animal is shown in this image?", image: "https://images.unsplash.com/photo-1736950638383-723d12c63cd9?w=800", options: ["Lion", "Tiger", "Leopard", "Cheetah"], correct: 1 }
);

questionBank.geography.push(
    { question: "Which famous landmark is this?", image: "https://images.unsplash.com/photo-1760724005050-3b90de6ab3bd?w=800", options: ["Big Ben", "Eiffel Tower", "Empire State Building", "Burj Khalifa"], correct: 1 }
);

questionBank.science.push(
    {question:"Identify the layer labelled in this diagram of the Earth's layers.",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Earth_poster.svg/500px-Earth_poster.svg.png",options:["Crust","Mantle","Outer Core","Inner Core"], correct:1}
);
questionBank.technology.push(
      {
      question:"What does this flowchart symbol (diamond shape) typically represent?",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/LampFlowchart.svg/220px-LampFlowchart.svg.png",options:["Decision","Process","Start/End","Data"], correct:0
    }
);


// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    config: document.getElementById('config-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

// Initialize App
function init() {
    setupEventListeners();
    showScreen('welcome');
}

// Setup Event Listeners
function setupEventListeners() {
    // Welcome screen
    document.getElementById('start-btn').addEventListener('click', () => showScreen('config'));

    // Config screen - Topic selection
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => selectTopic(card));
    });

    // Config screen - Number of questions
    document.querySelectorAll('[data-questions]').forEach(btn => {
        btn.addEventListener('click', () => selectOption(btn, 'questions'));
    });

    // Config screen - Timer
    document.querySelectorAll('[data-timer]').forEach(btn => {
        btn.addEventListener('click', () => selectOption(btn, 'timer'));
    });

    // Begin quiz button
    document.getElementById('begin-quiz-btn').addEventListener('click', startQuiz);

    // Quiz navigation
    document.getElementById('prev-btn').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('next-btn').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('submit-quiz-btn').addEventListener('click', submitQuiz);

    // Results screen
    document.getElementById('review-btn').addEventListener('click', () => showReview());
    document.getElementById('new-quiz-btn').addEventListener('click', resetQuiz);

    // Review screen
    document.getElementById('back-to-results-btn').addEventListener('click', () => showScreen('results'));

    // Restart button in header
    document.getElementById('restart-btn').addEventListener('click', resetQuiz);
}

// Show Screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');

    // Show/hide restart button
    const restartBtn = document.getElementById('restart-btn');
    if (screenName === 'quiz' || screenName === 'results' || screenName === 'review') {
        restartBtn.style.display = 'block';
    } else {
        restartBtn.style.display = 'none';
    }
}

// Select Topic
function selectTopic(card) {
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    quizState.selectedTopic = card.dataset.topic;
    updateBeginButton();
}

// Select Option
function selectOption(btn, type) {
    const group = btn.parentElement;
    group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    if (type === 'questions') {
        quizState.numQuestions = parseInt(btn.dataset.questions);
    } else if (type === 'timer') {
        quizState.timeLimit = parseInt(btn.dataset.timer);
    }
}

// Update Begin Button
function updateBeginButton() {
    const beginBtn = document.getElementById('begin-quiz-btn');
    beginBtn.disabled = !quizState.selectedTopic;
}

// Start Quiz
function startQuiz() {
    // Generate questions
    generateQuestions();
    
    // Initialize user answers
    quizState.userAnswers = new Array(quizState.questions.length).fill(null);
    quizState.currentQuestionIndex = 0;
    quizState.quizStartTime = Date.now();
    
    // Set timer
    quizState.timeRemaining = quizState.timeLimit * 60; // Convert to seconds
    startTimer();
    
    // Show quiz screen
    showScreen('quiz');
    displayQuestion();
    createQuestionIndicators();
}

// Generate Questions
function generateQuestions() {
    let sourceQuestions = [];
    
    if (quizState.selectedTopic === 'mixed') {
        // Mix questions from all topics
        Object.values(questionBank).forEach(topicQuestions => {
            sourceQuestions = sourceQuestions.concat(topicQuestions);
        });
    } else {
        sourceQuestions = questionBank[quizState.selectedTopic] || [];
    }
    
    // Shuffle and select questions
    sourceQuestions = shuffleArray(sourceQuestions);
    quizState.questions = sourceQuestions.slice(0, Math.min(quizState.numQuestions, sourceQuestions.length));
}

// Shuffle Array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display Question
function displayQuestion() {
    const question = quizState.questions[quizState.currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionImageContainer = document.getElementById('question-image-container');
    const questionImage = document.getElementById('question-image');
    
    // Update question counter
    document.getElementById('question-counter').textContent = 
        `${quizState.currentQuestionIndex + 1}/${quizState.questions.length}`;
    
    // Update progress bar
    const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // Display question text
    questionText.textContent = question.question;
    
    // Display image if present
    if (question.image) {
        questionImage.src = question.image;
        questionImageContainer.style.display = 'block';
    } else {
        questionImageContainer.style.display = 'none';
    }
    
    // Display options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        optionDiv.dataset.testid = `option-${index}`;
        
        if (quizState.userAnswers[quizState.currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-marker">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionDiv.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
    updateQuestionIndicators();
}

// Select Answer
function selectAnswer(index) {
    quizState.userAnswers[quizState.currentQuestionIndex] = index;
    
    // Update UI
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    
    updateQuestionIndicators();
}

// Navigate Question
function navigateQuestion(direction) {
    const newIndex = quizState.currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < quizState.questions.length) {
        quizState.currentQuestionIndex = newIndex;
        displayQuestion();
    }
}

// Jump to Question
function jumpToQuestion(index) {
    quizState.currentQuestionIndex = index;
    displayQuestion();
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-quiz-btn');
    
    prevBtn.disabled = quizState.currentQuestionIndex === 0;
    
    if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Create Question Indicators
function createQuestionIndicators() {
    const container = document.getElementById('question-indicators');
    container.innerHTML = '';
    
    quizState.questions.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.textContent = index + 1;
        indicator.dataset.testid = `indicator-${index}`;
        indicator.addEventListener('click', () => jumpToQuestion(index));
        container.appendChild(indicator);
    });
}

// Update Question Indicators
function updateQuestionIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('current', 'answered');
        
        if (index === quizState.currentQuestionIndex) {
            indicator.classList.add('current');
        }
        
        if (quizState.userAnswers[index] !== null) {
            indicator.classList.add('answered');
        }
    });
}

// Timer
function startTimer() {
    updateTimerDisplay();
    
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay();
        
        if (quizState.timeRemaining <= 0) {
            clearInterval(quizState.timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(quizState.timeRemaining / 60);
    const seconds = quizState.timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Warning color when less than 1 minute
    if (quizState.timeRemaining < 60) {
        document.getElementById('timer').style.color = '#FF5A5F';
    }
}

// Submit Quiz
function submitQuiz() {
    clearInterval(quizState.timerInterval);
    quizState.quizEndTime = Date.now();
    calculateResults();
    showScreen('results');
}

// Calculate Results
function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    quizState.questions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        
        if (userAnswer === null) {
            unanswered++;
        } else if (userAnswer === question.correct) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    // Display results
    document.getElementById('score-value').textContent = correct;
    document.getElementById('score-total').textContent = `/${quizState.questions.length}`;
    
    const percentage = Math.round((correct / quizState.questions.length) * 100);
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('unanswered-count').textContent = unanswered;
}

// Show Review
function showReview() {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    quizState.questions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const isUnanswered = userAnswer === null;
        
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-question';
        reviewDiv.dataset.testid = `review-question-${index}`;
        
        let resultBadge = '';
        if (isUnanswered) {
            resultBadge = '<span class="review-result-badge unanswered">UNANSWERED</span>';
        } else if (isCorrect) {
            resultBadge = '<span class="review-result-badge correct">✓ CORRECT</span>';
        } else {
            resultBadge = '<span class="review-result-badge incorrect">✗ INCORRECT</span>';
        }
        
        let imageHtml = '';
        if (question.image) {
            imageHtml = `
                <div class="question-image-container" style="display: block; margin-bottom: 1.5rem;">
                    <img src="${question.image}" class="question-image" alt="Question image">
                </div>
            `;
        }
        
        reviewDiv.innerHTML = `
            <div class="review-question-header">
                <span class="review-question-number">Question ${index + 1}</span>
                ${resultBadge}
            </div>
            <h3 class="review-question-text">${question.question}</h3>
            ${imageHtml}
            <div class="options-container">
                ${question.options.map((option, optIndex) => {
                    let classes = ['option'];
                    if (optIndex === question.correct) {
                        classes.push('correct');
                    } else if (optIndex === userAnswer && !isCorrect) {
                        classes.push('incorrect');
                    }
                    return `
                        <div class="${classes.join(' ')}">
                            <div class="option-marker">${String.fromCharCode(65 + optIndex)}</div>
                            <div class="option-text">${option}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        reviewContainer.appendChild(reviewDiv);
    });
    
    showScreen('review');
}

// Reset Quiz
function resetQuiz() {
    clearInterval(quizState.timerInterval);
    quizState.selectedTopic = null;
    quizState.currentQuestionIndex = 0;
    quizState.questions = [];
    quizState.userAnswers = [];
    
    // Reset config selections
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
    
    showScreen('config');
    updateBeginButton();
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}