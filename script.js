const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const highscoreButton = document.getElementById("highscore-btn");

const questionContainerElement = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let correctAnswer = [null, null, 0];

const question = [
  {
    question:
      "With 260 goals, who is the Premier League's all time top scorer?",
    answers: [
      { text: "Thierry Henry", correct: false },
      { text: "Alan Shearer", correct: true },
      { text: "Wayne Rooney", correct: false },
    ],
  },
  {
    question: "Which team won the first Premier League title?",
    answers: [
      { text: "Manchester United", correct: true },
      { text: "Liverpool", correct: false },
      { text: "Blackburn", correct: false },
    ],
  },
  {
    question: "What is the name of the first football club founded?",
    answers: [
      { text: "Port Vale", correct: false },
      { text: "Sheffield Wednesday", correct: false },
      { text: "Sheffield FC", correct: true },
    ],
  },
  {
    question: "Who is the Champions League's top goal scorer of all time?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Robert Lewandowski", correct: false },
      { text: "Crisitano Ronaldo", correct: true },
    ],
  },
  {
    question: "Which country won the first ever World Cup?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "Uruguay", correct: true },
    ],
  },
  {
    question:
      "Wayne Rooney scored his first Premier League goal against which team?",
    answers: [
      { text: "Arsenal", correct: true },
      { text: "Chelsea", correct: false },
      { text: "Newcastle United", correct: false },
    ],
  },
  {
    question:
      "Which player, with 653 games, has made the most Premier League appearances?",
    answers: [
      { text: "Ryan Giggs", correct: false },
      { text: "Gareth Barry", correct: true },
      { text: "Frank Lampard", correct: false },
    ],
  },
];

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setnextQuestion();
});

function startGame() {
  // startButton.classList.add("hide");
  // hides start button
  document.getElementById("start-btn").style.display = "none";
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  document.getElementById("question-container").style.display = "block";
  setnextQuestion();
  // console.log(quizScore);
}

function setnextQuestion() {
  // resetState();
  correctAnswer[1] = false;
  btn1 = document.getElementById("answerBtn1").style.backgroundColor = "orange";
  btn2 = document.getElementById("answerBtn2").style.backgroundColor = "orange";
  btn3 = document.getElementById("answerBtn3").style.backgroundColor = "orange";

  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  // visually change the question
  // clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//
function clearStatusClass(element) {
  console.log(element.classList);
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function showQuestion(question) {
  // create and display the question on the page
  // store the right answer
  // questionElement.innerText > question.question;
  console.log(question);
  document.getElementById("questionHolder").innerHTML = question.question;

  question.answers.forEach((answer, i) => {
    button = document.getElementById("answerBtn" + (i + 1));
    button.innerHTML = answer.text;
    if (answer.correct) {
      correctAnswer[0] = answer.text;
    }
    button.addEventListener("click", selectAnswer);
    // answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  if (correctAnswer[1]) {
    alert("only one chance, click next punk");
    return;
  }
  const target = e.target.innerHTML;
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  // console.log(target, correctAnswer);

  if (target === correctAnswer[0]) {
    document.getElementById(e.target.id).style.backgroundColor = "green";
    correctAnswer[2] = correctAnswer[2] + 1;
  } else {
    document.getElementById(e.target.id).style.backgroundColor = "red";
  }

  correctAnswer[1] = true;
  console.log(correctAnswer);

  // setStatusClass(document.body.correct);
  // Array.from(answerButtonsElement.children).forEach((button) => {
  //   setStatusClass(button, button.dataset.correct);
  // });
  // if (shuffledQuestions.length > currentQuestionIndex + 1) {
  //   nextButton.classList.remove("hide");
  // } else {
  //   startButton.innerText = "restart";
  //   startButton.classList.remove("hide");
  // }
  // if ((selectButton.dataset = correct)) {
  //   quizScore++;
  // }
  // document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
  document.getElementById("timer").innerHTML = sec + "sec left";
  sec--;
  if (sec == -2) {
    clearInterval(time);
    alert("Time out Loser!! :(");
  }
}

var score = 0;
var highscore = localStorage.getItem("highscore");

if (highscore !== null) {
  if (score > highscore) {
    localStorage.setItem("highscore", score);
  }
} else {
  localStorage.setItem("highscore", score);
}
