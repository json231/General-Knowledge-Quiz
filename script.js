
const quizData = [
  {
    question: "Which Planet is known as the red planet?",
    a: "Sun",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b",
  },

  {
    question: "Who painted the Mona Lisa?",
    a: "Pablo Picasso",
    b: "Leonardo Da Vinci",
    c: "Frida Kahlo",
    d: "Silvester Stallone",
    correct: "b",
  },

  {
    question: "In what year did the first Iphone came out?",
    a: "1999",
    b: "2001",
    c: "2004",
    d: "2007",
    correct: "d",
  },

  {
    question: "Which US state is the largest by land area?",
    a: "Texas",
    b: "Minnesota",
    c: "Alaska",
    d: "New York",
    correct: "c",
  },

  {
    question: "What is the currency of Japan?",
    a: "Yen",
    b: "Euros",
    c: "Pesos",
    d: "What's currency?",
    correct: "a",
  },

  {
    question: "What was the time period when the cold war started and ended?",
    a: "1920-1942",
    b: "1947-1991",
    c: "1850-1900",
    d: "2022-2023",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
} 

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) { 
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`;
      const reloadBtn = document.createElement('button');

      if (score <= 2) {
        quiz.innerHTML += '<p>Keep trying!</p>';
      } else if (score <= 4) {
        quiz.innerHTML += '<p>Good job!</p>';
      } else {
        quiz.innerHTML += '<p>Excellent work!</p>';
      }

      reloadBtn.innerText = 'Reload';
      reloadBtn.addEventListener('click', () => {
        location.reload();
      });
      
      quiz.appendChild(reloadBtn);
    }
  }
});






  

